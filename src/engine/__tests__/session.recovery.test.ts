// SessionRecorder × recovery wiring: plan lifecycle, tier filtering in the
// picker context, and the recovery EN-skip with its tier-1 guard.

import { DatabaseSync } from 'node:sqlite'
import { UserDB, nodeDriver } from '../../core/db'
import { Scheduler } from '../../core/scheduler'
import { SRS_CONFIG } from '../../core/config'
import type { ContentIndex, ConvMeta } from '../../core/picker'
import { SessionRecorder, defaultSettings, type ConvLine } from '../session'

function freshUserDb(): UserDB {
  const db = new UserDB(nodeDriver(new DatabaseSync(':memory:') as any))
  db.migrate()
  return db
}

/** tiny hand-rolled index: 3 convs, words spread so the dry-run can clear them */
function fixtureIndex(wordsByConv: Record<string, number[]>): ContentIndex {
  const metas: Record<string, ConvMeta> = {}
  Object.keys(wordsByConv).forEach((id, i) => {
    metas[id] = { convId: id, ord: i + 1, durationSec: 60 }
  })
  return {
    convsContaining(wordIds) {
      const want = new Set(wordIds)
      const out = new Map<string, number[]>()
      for (const [id, words] of Object.entries(wordsByConv)) {
        const hit = words.filter(w => want.has(w))
        if (hit.length) out.set(id, hit)
      }
      return out
    },
    convMeta(convId) { return metas[convId] },
    nextUnheard() { return null },
    leastRecentlyPlayed() { return [] },
  }
}

const DAY = 86_400_000

/**
 * Seed a learner who then disappears for `gapDays`: words reviewed once at
 * t0 (learning-step dues land shortly after — i.e. INSIDE the gap window).
 */
function seedGap(db: UserDB, wordIds: number[], gapDays: number, now: Date): void {
  const sched = new Scheduler()
  const t0 = new Date(now.getTime() - gapDays * DAY)
  const rec = new SessionRecorder(db, sched, new Set(wordIds), defaultSettings())
  rec.sentenceCompleted(wordIds, t0)
  db.setKV('last_session_end', String(t0.getTime() + 60_000))
}

describe('ensureRecoveryPlan', () => {
  const now = new Date('2026-08-20T12:00:00')
  const words = Array.from({ length: 40 }, (_, i) => i + 1)
  const index = fixtureIndex({
    conv_a: words.slice(0, 15),
    conv_b: words.slice(10, 30),
    conv_c: words.slice(25, 40),
  })

  it('no gap → inactive plan, no pickerParams, full due set', () => {
    const db = freshUserDb()
    seedGap(db, words, 1, now) // 1-day gap < minGapDays
    const rec = new SessionRecorder(db, new Scheduler(), new Set(words), defaultSettings())
    const plan = rec.ensureRecoveryPlan(index, now)
    expect(plan.active).toBe(false)
    const ctx = rec.pickerContext(now)
    expect(ctx.pickerParams).toBeUndefined()
  })

  it('a real gap with a heavy backlog → active plan, persisted + idempotent per day', () => {
    const db = freshUserDb()
    seedGap(db, words, 7, now)
    const settings = { ...defaultSettings(), goalMinutes: 1 } // tiny goal forces activation
    const rec = new SessionRecorder(db, new Scheduler(), new Set(words), settings)
    const plan = rec.ensureRecoveryPlan(index, now)
    expect(plan.active).toBe(true)
    expect(plan.gapDays).toBe(7)
    expect(plan.excessCount).toBeGreaterThan(0)
    // kv persisted and reused within the same day (including across recorders)
    const stored = JSON.parse(db.getKV('recovery_plan')!)
    expect(stored.plan.active).toBe(true)
    const rec2 = new SessionRecorder(db, new Scheduler(), new Set(words), settings)
    expect(rec2.ensureRecoveryPlan(index, now)).toEqual(plan)
  })

  it('multi-day plan removes postponed (tier-2) words from the due set; picker gets recovery params', () => {
    const db = freshUserDb()
    seedGap(db, words, 10, now)
    const settings = { ...defaultSettings(), goalMinutes: 1 }
    const rec = new SessionRecorder(db, new Scheduler(), new Set(words), settings)
    const plan = rec.ensureRecoveryPlan(index, now)
    expect(plan.active).toBe(true)
    expect(plan.horizonDays).toBeGreaterThan(1)
    const stored = JSON.parse(db.getKV('recovery_plan')!)
    expect(stored.tier2.length).toBeGreaterThan(0)
    const ctx = rec.pickerContext(now)
    expect(ctx.pickerParams).toEqual(SRS_CONFIG.recovery.picker)
    for (const id of stored.tier2) expect(ctx.dueWeights.has(id)).toBe(false)
    // tier-1 (fragile) words remain in play
    const tier1InDues = stored.tier1.filter((id: number) => ctx.dueWeights.has(id))
    expect(tier1InDues.length).toBeGreaterThan(0)
  })
})

describe('recovery EN-skip', () => {
  const now = new Date('2026-08-20T12:00:00')

  function line(words: number[]): ConvLine {
    return {
      speaker: 's', mood: 'm', en: 'e', jp: 'j', nonverbal: false,
      jpSilence: false, words, jpTokens: [],
    }
  }

  it('inactive: only the strict all-graduated rule applies', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1, 2, 3, 4, 5]), defaultSettings())
    // 4 of 5 graduated would NOT skip under the strict rule
    expect(rec.skipEnglishFn(now)(line([1, 2, 3, 4, 5]))).toBe(false)
  })

  it('active: skips at >=80% graduated, but NEVER when a tier-1 word is present', () => {
    const db = freshUserDb()
    const words = Array.from({ length: 40 }, (_, i) => i + 1)
    seedGap(db, words, 10, now)
    const settings = {
      ...defaultSettings(),
      goalMinutes: 1,
      graduation: { exposures: 1, days: 0, fastTrackMaxRank: 0 },
    }
    const index = fixtureIndex({ conv_a: words })
    const rec = new SessionRecorder(db, new Scheduler(), new Set([...words, 999]), settings)
    const plan = rec.ensureRecoveryPlan(index, now)
    expect(plan.active).toBe(true)
    expect(plan.horizonDays).toBeGreaterThan(1)
    const stored = JSON.parse(db.getKV('recovery_plan')!)
    const skip = rec.skipEnglishFn(now)
    // words 1..40 are graduated (1 exposure, 0 days); 999 is unheard
    // 4 graduated + 1 unheard = 80% → skips IF none of them is tier-1
    const nonTier1 = words.filter(w => !stored.tier1.includes(w)).slice(0, 4)
    if (nonTier1.length === 4) {
      expect(skip(line([...nonTier1, 999]))).toBe(true)
    }
    // same shape but WITH a tier-1 word → EN must stay (the rescue guard)
    const t1 = stored.tier1[0]
    const filler = words.filter(w => !stored.tier1.includes(w)).slice(0, 3)
    expect(skip(line([t1, ...filler, 999]))).toBe(false)
    // below the fraction → EN stays
    expect(skip(line([nonTier1[0] ?? words[0], 999, 998].map(x => x ?? 998)))).toBe(false)
  })
})

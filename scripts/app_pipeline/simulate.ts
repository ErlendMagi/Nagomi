// M2 simulator — forward-simulates a learner through the REAL engine
// (scheduler + picker + graduation) against the REAL corpus (content.db).
//
// This is the same code path the app's analytics prediction uses, which is
// what makes the in-app forecast "completely accurate with the SRS-system"
// (locked requirement) — there is no formula approximation anywhere.
//
// Run: npx tsx scripts/app_pipeline/simulate.ts [minutesPerDay ...]

import { DatabaseSync } from 'node:sqlite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Scheduler, createWordState, type WordState } from '../../src/core/scheduler'
import { pickNextConversation, type ContentIndex, type ConvMeta } from '../../src/core/picker'
import { defaultGraduationSettings, isGraduated } from '../../src/core/graduation'
import { dayKey } from '../../src/core/day'
import {
  gapExcess, estimateClearMinutes, urgencyPlan, fragilityOrder, splitTiers,
  speedFactor, type DueEntry,
} from '../../src/core/recovery'
import { SRS_CONFIG } from '../../src/core/config'
import { ciTargetFor } from '../../src/core/ci'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const db = new DatabaseSync(path.join(ROOT, 'data', 'derived', 'content.db'))

// ---- load corpus into memory (fast simulation; 822k pairs fit fine) ----
console.error('loading corpus...')
const convRows = db.prepare('SELECT conv_id, ord, duration_sec, line_count FROM conversations ORDER BY ord').all() as
  { conv_id: string, ord: number, duration_sec: number, line_count: number }[]
const convById = new Map(convRows.map(r => [r.conv_id, r]))
const wordsByConv = new Map<string, number[]>()
const convsByWord = new Map<number, string[]>()
for (const row of db.prepare('SELECT conv_id, word_id FROM conv_words').all() as { conv_id: string, word_id: number }[]) {
  if (!wordsByConv.has(row.conv_id)) wordsByConv.set(row.conv_id, [])
  wordsByConv.get(row.conv_id)!.push(row.word_id)
  if (!convsByWord.has(row.word_id)) convsByWord.set(row.word_id, [])
  convsByWord.get(row.word_id)!.push(row.conv_id)
}
// per-conv per-line word distribution: approximate lines by splitting the conv
// word set evenly across line_count (sim-level fidelity; the app uses real lines)
console.error(`corpus: ${convRows.length} convs`)

const index: ContentIndex = {
  convsContaining(wordIds) {
    const out = new Map<string, number[]>()
    for (const w of wordIds) {
      for (const c of convsByWord.get(w) ?? []) {
        if (!out.has(c)) out.set(c, [])
        out.get(c)!.push(w)
      }
    }
    return out
  },
  convMeta(convId): ConvMeta {
    const r = convById.get(convId)!
    return { convId, ord: r.ord, durationSec: r.duration_sec }
  },
  nextUnheard(afterOrd, exclude) {
    for (const r of convRows) {
      if (r.ord > afterOrd && !exclude.has(r.conv_id)) return { convId: r.conv_id, ord: r.ord, durationSec: r.duration_sec }
    }
    return null
  },
  leastRecentlyPlayed() { return [] },
}

interface GapSpec { start: number, len: number }

function simulate(
  minutesPerDay: number, days: number,
  gaps: GapSpec[] = [], recovery = false,
  probe?: { dueCountByDay: number[], hardGrades: { day: number, n: number }[] },
) {
  const sched = new Scheduler()
  const grad = defaultGraduationSettings()
  const states = new Map<number, WordState>()
  const lastPlayed = new Map<string, number>()
  // context-variety proof: distinct conversations heard per word (capped)
  const contextsHeard = new Map<number, Set<string>>()
  let frontierOrd = 0
  let lastSessionAt: Date | null = null
  const start = new Date('2026-08-01T08:00:00')
  const milestones: Record<number, { heard: number, graduated: number, medianCtx: number, meanCtx: number, pctMulti: number, ratioP50: number, pctCleared: number, leftP90: number, clearP50Min: number }> = {}
  const checkpoints = new Set([30, 90, 180, 365, 730].filter(d => d <= days))
  const inGap = (d: number) => gaps.some(g => d >= g.start && d < g.start + g.len)

  // comprehensible-input tracking — mirrors SessionRecorder exactly
  const CI_REPS = SRS_CONFIG.picker.ciComfort.knownReps
  const ciKnownByConv = new Map<string, number>()
  let ciKnownWords = 0
  const ciRatioOf = (convId: string): number | undefined => {
    const total = wordsByConv.get(convId)?.length ?? 0
    if (total <= 0) return undefined
    return Math.min(1, (ciKnownByConv.get(convId) ?? 0) / total)
  }
  const pickRatios: number[] = [] // per-pick experienced ratio (reporting)
  // per-day due-clearing outcomes since the previous checkpoint
  const dueDays: { start: number, left: number, clearedAtSec: number | null }[] = []

  for (let day = 0; day < days; day++) {
    const now = new Date(start.getTime() + day * 86_400_000)
    // 4AM materialization: today's due set is FIXED at day start (locked rule)
    const dueWeights = new Map<number, number>()
    for (const [id, st] of states) {
      const w = sched.duenessWeight(st, now)
      if (w >= 1) dueWeights.set(id, w) // due/overdue only — pre-due words aren't "dues"
    }
    probe?.dueCountByDay.push(dueWeights.size)
    const startDues = dueWeights.size
    let clearedAtSec: number | null = startDues === 0 ? 0 : null
    if (inGap(day)) continue // away: no listening, absence clock keeps running

    // ---- recovery ("welcome back") — mirrors SessionRecorder.ensureRecoveryPlan ----
    let effectiveBudgetSec = minutesPerDay * 60
    let pickerParams: typeof SRS_CONFIG.recovery.picker | undefined
    if (recovery && lastSessionAt) {
      const entries: DueEntry[] = []
      for (const [id, st] of states) {
        const w = dueWeights.get(id)
        if (w !== undefined) entries.push({ wordId: id, dueAtMs: st.card.due.getTime(), stability: st.card.stability, weight: w })
      }
      const gapDays = Math.round((now.getTime() - lastSessionAt.getTime()) / 86_400_000)
      const { excess } = gapExcess(entries, lastSessionAt.getTime(), now.getTime())
      if (gapDays >= SRS_CONFIG.recovery.minGapDays && excess.length > 0) {
        const est = estimateClearMinutes(index, excess, lastPlayed, frontierOrd, now)
        const plan = urgencyPlan(est.minutes, minutesPerDay, gapDays, excess.length, est.duesPerMinute)
        if (plan.active) {
          pickerParams = SRS_CONFIG.recovery.picker
          // the ladder's EN measures let the same wall-clock cover more content
          effectiveBudgetSec = Math.round(minutesPerDay * 60 * speedFactor(plan.urgency))
          if (plan.horizonDays > 1) {
            const ordered = fragilityOrder(excess, now.getTime(), plan.horizonDays,
              (s, d) => sched.projectRetrievability(s, d))
            const { tier2 } = splitTiers(ordered, plan.duesPerMinute, plan.planMinutesPerDay)
            for (const id of tier2) dueWeights.delete(id) // postponed (selection-layer)
          }
        }
      }
    }

    // reinforcement mode input: heard-but-shallow words, weighted by reps still needed
    const inFlightWords = new Map<number, number>()
    for (const [id, st] of states) {
      if (st.totalReps > 0 && st.totalReps < 10) inFlightWords.set(id, 10 - st.totalReps)
    }

    let budgetSec = effectiveBudgetSec
    let guard = 0
    while (budgetSec > 0 && guard++ < 500) {
      const pick = pickNextConversation(index, {
        now, dueWeights, lastPlayed, frontierOrd, inFlightWords, pickerParams,
        // --noci: measure the non-CI baseline for honest gate comparisons
        ciRatioOf: process.argv.includes('--noci') ? undefined : ciRatioOf,
        ciTarget: process.argv.includes('--noci') ? undefined : ciTargetFor(ciKnownWords),
      })
      if (!pick) break
      const meta = index.convMeta(pick.convId)
      const words = wordsByConv.get(pick.convId) ?? []
      const pr = ciRatioOf(pick.convId)
      if (pr !== undefined) pickRatios.push(pr)
      const lineCount = convById.get(pick.convId)!.line_count
      // play through: spread words across lines, hear each sentence-by-sentence
      const perLine = Math.max(1, Math.ceil(words.length / Math.max(1, lineCount)))
      const sessionTime = new Date(now.getTime() + (minutesPerDay * 60 - budgetSec) * 1000)
      for (let li = 0, wi = 0; li < lineCount; li++) {
        for (let k = 0; k < perLine && wi < words.length; k++, wi++) {
          const id = words[wi]
          const st = states.get(id) ?? createWordState(id, sessionTime)
          const prevReps = st.totalReps
          const r = sched.hear(st, sessionTime, lastSessionAt)
          states.set(id, r.state)
          if (prevReps < CI_REPS && r.state.totalReps >= CI_REPS) {
            ciKnownWords += 1
            for (const c of convsByWord.get(id) ?? []) {
              ciKnownByConv.set(c, (ciKnownByConv.get(c) ?? 0) + 1)
            }
          }
          if (r.gradedAs === 'hard' && probe) {
            const e = probe.hardGrades.find(h => h.day === day)
            if (e) e.n += 1; else probe.hardGrades.push({ day, n: 1 })
          }
          if (r.kind === 'first_of_day') dueWeights.delete(id) // review done today
        }
      }
      for (const id of words) {
        let set = contextsHeard.get(id)
        if (!set) { set = new Set(); contextsHeard.set(id, set) }
        if (set.size < 12) set.add(pick.convId)
      }
      lastPlayed.set(pick.convId, now.getTime())
      frontierOrd = Math.max(frontierOrd, meta.ord)
      budgetSec -= meta.durationSec
      if (clearedAtSec === null && dueWeights.size === 0) {
        clearedAtSec = effectiveBudgetSec - budgetSec // wall-clock spent to clear the queue
      }
    }
    lastSessionAt = new Date(now.getTime() + minutesPerDay * 60 * 1000)
    // due-throughput reporting (user report 2026-07-16: dues survived the goal)
    dueDays.push({ start: startDues, left: dueWeights.size, clearedAtSec })

    const dayN = day + 1
    if (checkpoints.has(dayN)) {
      let graduated = 0
      const gradContexts: number[] = []
      for (const [id, st] of states) {
        if (isGraduated(st, sched.daysSinceFirstHeard(st, now), grad)) {
          graduated++
          gradContexts.push(contextsHeard.get(id)?.size ?? 0)
        }
      }
      gradContexts.sort((a, b) => a - b)
      const medianCtx = gradContexts.length ? gradContexts[Math.floor(gradContexts.length / 2)] : 0
      const meanCtx = gradContexts.length ? gradContexts.reduce((s, c) => s + c, 0) / gradContexts.length : 0
      const pctMulti = gradContexts.length ? gradContexts.filter(c => c >= 3).length / gradContexts.length : 0
      // experienced comprehension ratio since the previous checkpoint
      const sorted = [...pickRatios].sort((a, b) => a - b)
      const ratioP50 = sorted.length ? Math.round(sorted[Math.floor(sorted.length / 2)] * 100) : -1
      pickRatios.length = 0
      // due-throughput since previous checkpoint: % of days whose queue was
      // FULLY cleared, p90 of leftovers, and median wall-clock to clear
      const daysWithDues = dueDays.filter(d => d.start > 0)
      const pctCleared = daysWithDues.length
        ? Math.round(100 * daysWithDues.filter(d => d.left === 0).length / daysWithDues.length) : 100
      const lefts = daysWithDues.map(d => d.left).sort((a, b) => a - b)
      const leftP90 = lefts.length ? lefts[Math.floor(lefts.length * 0.9)] : 0
      const clears = daysWithDues.map(d => d.clearedAtSec).filter((s): s is number => s !== null).sort((a, b) => a - b)
      const clearP50Min = clears.length ? Math.round(clears[Math.floor(clears.length / 2)] / 60) : -1
      dueDays.length = 0
      milestones[dayN] = { heard: states.size, graduated, medianCtx, meanCtx: Math.round(meanCtx * 10) / 10, pctMulti: Math.round(pctMulti * 100), ratioP50, pctCleared, leftP90, clearP50Min }
    }
  }
  return milestones
}

// ---- gap/recovery validation mode: npx tsx simulate.ts 30 --gap 60:7 --recovery both ----
const argv = process.argv.slice(2)

// --nopressure: A/B baseline — disables the 2026-07-16 due-pressure mechanism
// so its effect can be measured honestly (startAt=Infinity → pressure 0
// always). MUST be applied before EITHER runner block (gap mode exits early).
if (argv.includes('--nopressure')) {
  ;(SRS_CONFIG.picker.duePressure as { startAt: number }).startAt = Infinity
}
const gapArgs: GapSpec[] = argv
  .map((a, i) => (a === '--gap' ? argv[i + 1] : null))
  .filter((s): s is string => !!s)
  .map(s => { const [st, len] = s.split(':').map(Number); return { start: st, len } })
const recoveryArg = argv.includes('--recovery') ? argv[argv.indexOf('--recovery') + 1] : null

if (gapArgs.length > 0) {
  const mins = Number(argv[0]) > 0 ? Number(argv[0]) : 30
  const horizon = Math.max(...gapArgs.map(g => g.start + g.len)) + 60
  const modes = recoveryArg === 'both' ? [false, true] : [recoveryArg !== 'off']
  const baseline = { dueCountByDay: [] as number[], hardGrades: [] as { day: number, n: number }[] }
  simulate(mins, horizon, [], false, baseline) // twin run without gaps
  for (const rec of modes) {
    const probe = { dueCountByDay: [] as number[], hardGrades: [] as { day: number, n: number }[] }
    const r = simulate(mins, horizon, gapArgs, rec, probe)
    for (const g of gapArgs) {
      const backDay = g.start + g.len
      let daysToBaseline = -1
      for (let d = backDay; d < horizon; d++) {
        if (probe.dueCountByDay[d] <= 1.1 * (baseline.dueCountByDay[d] ?? 0) + 20) { daysToBaseline = d - backDay; break }
      }
      const hardsAfter = probe.hardGrades.filter(h => h.day >= backDay && h.day < backDay + 30).reduce((s, h) => s + h.n, 0)
      console.log(`gap ${g.start}+${g.len}d recovery=${rec}: due@return=${probe.dueCountByDay[backDay]} (baseline ${baseline.dueCountByDay[backDay]}), days-to-baseline=${daysToBaseline}, hard-grades/30d=${hardsAfter}`)
    }
    const last = r[365] ?? r[180] ?? r[90]
    if (last) console.log(`  → heard/known at last checkpoint: ${last.heard}/${last.graduated}`)
  }
  process.exit(0)
}

const scenarios = argv.map(Number).filter(n => n > 0)
const minutes = scenarios.length ? scenarios : [10, 20, 30, 60]
console.log('scenario = minutes listened per day, every day; graduation defaults 30 reps / 30 days')
console.log('')
console.log('| min/day | 1 month heard/known | 3 mo | 6 mo | 12 mo | 24 mo | ctx@24mo (med/mean/%>=3) | ratioP50 @90/180/365/730 | dues@365: %days-cleared / p90-left / p50-clear-min |')
console.log('|---|---|---|---|---|---|---|---|---|')
for (const m of minutes) {
  const t0 = Date.now()
  const r = simulate(m, 730)
  const cell = (d: number) => r[d] ? `${r[d].heard} / ${r[d].graduated}` : '-'
  const last = r[730] ?? r[365] ?? r[180]
  const ctx = last ? `${last.medianCtx} / ${last.meanCtx} / ${last.pctMulti}%` : '-'
  const rr = (d: number) => (r[d] && r[d].ratioP50 >= 0 ? `${r[d].ratioP50}%` : '-')
  const dues = r[365] ? `${r[365].pctCleared}% / ${r[365].leftP90} / ${r[365].clearP50Min >= 0 ? r[365].clearP50Min : '-'}` : '-'
  console.log(`| ${m} | ${cell(30)} | ${cell(90)} | ${cell(180)} | ${cell(365)} | ${cell(730)} | ${ctx} | ${rr(90)} ${rr(180)} ${rr(365)} ${rr(730)} | ${dues} |`)
  console.error(`  [${m} min/day simulated in ${((Date.now() - t0) / 1000).toFixed(1)}s]`)
}

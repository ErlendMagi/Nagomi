// Engine rule verification — every locked product decision gets a test.
import { dayKey, dayKeyDiff, addDaysToKey } from '../day'
import { Scheduler, createWordState } from '../scheduler'
import { defaultGraduationSettings, clampGraduationSettings, isGraduated, shouldSkipEnglish } from '../graduation'
import { createStreak, onConversationCompleted, canRepair, repair } from '../streak'
import { duePressure, pickNextConversation, type ContentIndex } from '../picker'
import { SRS_CONFIG } from '../config'

const D = (s: string) => new Date(s)

describe('day boundary (4AM local)', () => {
  test('03:59 belongs to previous day, 04:00 to the new day', () => {
    expect(dayKey(D('2026-07-10T03:59:00'))).toBe('2026-07-09')
    expect(dayKey(D('2026-07-10T04:00:00'))).toBe('2026-07-10')
  })
  test('dayKeyDiff and addDaysToKey are inverse', () => {
    expect(dayKeyDiff('2026-07-01', '2026-07-31')).toBe(30)
    expect(addDaysToKey('2026-12-30', 3)).toBe('2027-01-02')
  })
})

describe('scheduler — implicit-grade FSRS rules', () => {
  const sched = new Scheduler()

  test('first hear = review; counters move; card leaves New', () => {
    const s0 = createWordState(100, D('2026-07-01T10:00:00'))
    const r = sched.hear(s0, D('2026-07-01T10:00:00'), null)
    expect(r.kind).toBe('first_of_day')
    expect(r.state.totalReps).toBe(1)
    expect(r.state.distinctDays).toBe(1)
    expect(r.state.firstHeardAt).not.toBeNull()
    expect(r.state.card.stability).toBeGreaterThan(0)
  })

  test('same-day repeat bumps totalReps but not distinctDays; bonus is tiny and capped', () => {
    let s = createWordState(100, D('2026-07-01T10:00:00'))
    s = sched.hear(s, D('2026-07-01T10:00:00'), null).state
    const stabAfterFirst = s.card.stability
    for (let i = 0; i < 10; i++) {
      const r = sched.hear(s, D('2026-07-01T11:00:00'), null)
      expect(r.kind).toBe('same_day_repeat')
      s = r.state
    }
    expect(s.totalReps).toBe(11)
    expect(s.distinctDays).toBe(1)
    // bonus capped at 5 applications of 1.02
    expect(s.card.stability).toBeLessThanOrEqual(stabAfterFirst * Math.pow(1.02, 5) + 1e-9)
  })

  test('late hear is credited, never punished: interval after a very late review >= interval after an on-time review', () => {
    const mk = () => {
      let s = createWordState(500, D('2026-07-01T10:00:00'))
      s = sched.hear(s, D('2026-07-01T10:00:00'), null).state
      s = sched.hear(s, D('2026-07-04T10:00:00'), D('2026-07-03T10:00:00')).state
      return s
    }
    const onTime = mk()
    const late = mk()
    const onTimeDue = onTime.card.due
    // on-time: review exactly at due
    const a = sched.hear(onTime, onTimeDue, new Date(onTimeDue.getTime() - 86400000)).state
    // late: review 15 days past due (recent session so absence rule doesn't fire)
    const lateAt = new Date(onTimeDue.getTime() + 15 * 86400000)
    const b = sched.hear(late, lateAt, new Date(lateAt.getTime() - 86400000)).state
    const ivlA = a.card.due.getTime() - onTimeDue.getTime()
    const ivlB = b.card.due.getTime() - lateAt.getTime()
    expect(ivlB).toBeGreaterThanOrEqual(ivlA * 0.9) // full elapsed-time credit, no reset
    expect(b.card.stability).toBeGreaterThan(late.card.stability) // grew, not shrank
  })

  test('absence rule: >=21d gap + low retrievability grades Hard (smaller gain than Good)', () => {
    const mk = () => {
      let s = createWordState(500, D('2026-07-01T10:00:00'))
      s = sched.hear(s, D('2026-07-01T10:00:00'), null).state
      return s
    }
    // 90 days later, retrievability (~0.31) is below the 0.35 threshold for a young card
    const later = D('2026-09-29T10:00:00')
    const withAbsence = sched.hear(mk(), later, D('2026-07-01T12:00:00'))
    const withoutAbsence = sched.hear(mk(), later, D('2026-09-28T10:00:00'))
    expect(withAbsence.gradedAs).toBe('hard')
    expect(withoutAbsence.gradedAs).toBe('good')
    expect(withAbsence.state.card.stability).toBeLessThan(withoutAbsence.state.card.stability)
    // but NEVER a reset:
    expect(withAbsence.state.card.stability).toBeGreaterThan(0.5)
  })

  test('dueness weight: pre-due < overdue; overdue capped', () => {
    let s = createWordState(50, D('2026-07-01T10:00:00'))
    s = sched.hear(s, D('2026-07-01T10:00:00'), null).state
    const due = s.card.due
    const preDue = sched.duenessWeight(s, new Date(due.getTime() - 3600_000))
    const justDue = sched.duenessWeight(s, due)
    const veryLate = sched.duenessWeight(s, new Date(due.getTime() + 400 * 86400000))
    expect(preDue).toBeLessThan(1)
    expect(justDue).toBeGreaterThanOrEqual(1)
    expect(veryLate).toBeLessThanOrEqual(1 + 2.0 + 1e-9)
  })
})

describe('graduation', () => {
  const sched = new Scheduler()
  const settings = defaultGraduationSettings() // 30 reps / 30 days

  test('needs BOTH exposures and elapsed days', () => {
    let s = createWordState(10, D('2026-07-01T10:00:00'))
    // 35 hears all on one day → reps ok, days not
    s = sched.hear(s, D('2026-07-01T10:00:00'), null).state
    for (let i = 0; i < 34; i++) s = sched.hear(s, D('2026-07-01T11:00:00'), null).state
    expect(s.totalReps).toBe(35)
    expect(isGraduated(s, 0, settings)).toBe(false)
    expect(isGraduated(s, 31, settings)).toBe(true)
    // few reps over long time → days ok, reps not
    let t = createWordState(11, D('2026-07-01T10:00:00'))
    t = sched.hear(t, D('2026-07-01T10:00:00'), null).state
    expect(isGraduated(t, 100, settings)).toBe(false)
  })

  test('fast-track range graduates at 6 reps / 7 days', () => {
    const fast = { ...settings, fastTrackMaxRank: 2000 }
    let s = createWordState(1500, D('2026-07-01T10:00:00'))
    const sch = new Scheduler()
    s = sch.hear(s, D('2026-07-01T10:00:00'), null).state
    for (let i = 0; i < 5; i++) s = sch.hear(s, D('2026-07-01T11:00:00'), null).state
    expect(s.totalReps).toBe(6)
    expect(isGraduated(s, 7, fast)).toBe(true)     // in range
    const outOfRange = { ...s, wordId: 5000 }
    expect(isGraduated(outOfRange, 7, fast)).toBe(false)
  })

  test('settings clamp to hard floors 20/21', () => {
    const c = clampGraduationSettings({ exposures: 5, days: 3, fastTrackMaxRank: -4 })
    expect(c).toEqual({ exposures: 20, days: 21, fastTrackMaxRank: 0 })
  })

  test('line EN skip: all words graduated OR nonverbal; empty-word lines keep EN', () => {
    const grad = (id: number) => id < 100
    expect(shouldSkipEnglish([1, 2, 3], false, grad)).toBe(true)
    expect(shouldSkipEnglish([1, 200], false, grad)).toBe(false)
    expect(shouldSkipEnglish([], false, grad)).toBe(false)
    expect(shouldSkipEnglish([200, 300], true, grad)).toBe(true)
  })
})

describe('streak (freeze economy: start 1, +1 per 7 days, cap 2 — user 2026-07-16)', () => {
  test('extends daily, survives a 1-day gap via the starting freeze, breaks past freezes, repairs in window', () => {
    let s = createStreak() // starts with 1 freeze
    expect(s.freezes).toBe(1)
    s = onConversationCompleted(s, '2026-07-01').state
    s = onConversationCompleted(s, '2026-07-02').state
    expect(s.count).toBe(2)
    // miss 1 day → the freeze auto-spends
    let r = onConversationCompleted(s, '2026-07-04')
    expect(r.event.kind).toBe('freezes_used')
    expect(r.state.freezes).toBe(0)
    expect(r.state.count).toBe(3)
    s = r.state
    // miss 1 more day with no freezes → broken, repairable
    r = onConversationCompleted(s, '2026-07-06')
    expect(r.event.kind).toBe('broken')
    expect(r.state.count).toBe(1)
    expect(canRepair(r.state, '2026-07-07')).toBe(true)
    const repaired = repair(r.state, '2026-07-07')
    expect(repaired.count).toBe(4) // 3 restored + 1 earned since
    expect(canRepair(repaired, '2026-07-07')).toBe(false)
  })

  test('recurring grant: +1 freeze at day 7, another at day 14', () => {
    let s = { ...createStreak(), count: 6, lastDayKey: '2026-07-01', freezes: 0 }
    const r7 = onConversationCompleted(s, '2026-07-02')
    expect(r7.state.count).toBe(7)
    expect(r7.state.freezes).toBe(1)
    expect(r7.event.newMilestoneFreezes).toBe(1)
    let s14 = { ...r7.state, count: 13, lastDayKey: '2026-07-09' }
    const r14 = onConversationCompleted(s14, '2026-07-10')
    expect(r14.state.count).toBe(14)
    expect(r14.state.freezes).toBe(2)
  })

  test('cap: a full inventory grants nothing at day 21 (no error, no overflow)', () => {
    const s = { ...createStreak(), count: 20, lastDayKey: '2026-07-01', freezes: 2 }
    const r = onConversationCompleted(s, '2026-07-02')
    expect(r.state.count).toBe(21)
    expect(r.state.freezes).toBe(2) // capped — the grant evaporates
    expect(r.event.newMilestoneFreezes).toBe(0)
  })

  test('spend-then-earn: freezes spent on a gap are re-earned at the next 7-boundary, up to cap', () => {
    // day 12 streak, 2 freezes; miss 2 days → both spent, count 13
    let s = { ...createStreak(), count: 12, lastDayKey: '2026-07-01', freezes: 2 }
    let r = onConversationCompleted(s, '2026-07-04')
    expect(r.event.kind).toBe('freezes_used')
    expect(r.state.freezes).toBe(0)
    expect(r.state.count).toBe(13)
    // next day crosses 14 → +1 freeze
    r = onConversationCompleted(r.state, '2026-07-05')
    expect(r.state.count).toBe(14)
    expect(r.state.freezes).toBe(1)
  })

  test('a freeze-covered extension that lands ON a 7-boundary earns the freeze in the same step', () => {
    // count 6, one freeze; miss 1 day; completing makes count 7 → spend 1, earn 1
    const s = { ...createStreak(), count: 6, lastDayKey: '2026-07-01', freezes: 1 }
    const r = onConversationCompleted(s, '2026-07-03')
    expect(r.event.kind).toBe('freezes_used')
    expect(r.state.count).toBe(7)
    expect(r.state.freezes).toBe(1) // 1 − 1 spent + 1 earned
  })

  test('legacy blob with milestonesGranted still parses through createStreak spread', () => {
    const legacy = { ...createStreak(), count: 35, freezes: 2, milestonesGranted: [30] }
    const r = onConversationCompleted({ ...legacy, lastDayKey: '2026-07-01' }, '2026-07-02')
    expect(r.state.count).toBe(36)
    expect(r.state.freezes).toBe(2) // cap holds; legacy field ignored, no crash
  })
})

describe('picker', () => {
  const fixtureIndex = (): ContentIndex => {
    const convs = new Map<string, { ord: number, durationSec: number, words: number[] }>([
      ['conv_A', { ord: 1, durationSec: 60, words: [1, 2, 3] }],
      ['conv_B', { ord: 2, durationSec: 60, words: [3, 4, 5, 6] }],
      ['conv_C', { ord: 3, durationSec: 240, words: [1, 2, 3, 4, 5, 6, 7] }],
      ['conv_D', { ord: 4, durationSec: 60, words: [99] }],
    ])
    return {
      convsContaining(wordIds) {
        const set = new Set(wordIds)
        const out = new Map<string, number[]>()
        for (const [id, c] of convs) {
          const hit = c.words.filter(w => set.has(w))
          if (hit.length) out.set(id, hit)
        }
        return out
      },
      convMeta(id) { const c = convs.get(id)!; return { convId: id, ord: c.ord, durationSec: c.durationSec } },
      nextUnheard(afterOrd, exclude) {
        for (const [id, c] of [...convs].sort((a, b) => a[1].ord - b[1].ord)) {
          if (c.ord > afterOrd && !exclude.has(id)) return { convId: id, ord: c.ord, durationSec: c.durationSec }
        }
        return null
      },
      leastRecentlyPlayed(limit) { return [...convs].slice(0, limit).map(([id, c]) => ({ convId: id, ord: c.ord, durationSec: c.durationSec })) },
    }
  }

  test('dues-first: picks the conversation with the densest due coverage', () => {
    const pick = pickNextConversation(fixtureIndex(), {
      now: D('2026-07-10T10:00:00'),
      dueWeights: new Map([[3, 1.5], [4, 1.2], [5, 1.0], [6, 1.0]]),
      lastPlayed: new Map(),
      frontierOrd: 4,
    })
    expect(pick?.reason).toBe('dues')
    expect(pick?.convId).toBe('conv_B') // 4 due words in 60s beats conv_C's 4 in 240s
  })

  test('recently-played conversations are penalized (context variety)', () => {
    const now = D('2026-07-10T10:00:00')
    const pick = pickNextConversation(fixtureIndex(), {
      now,
      dueWeights: new Map([[3, 1.5], [4, 1.2], [5, 1.0], [6, 1.0]]),
      lastPlayed: new Map([['conv_B', now.getTime() - 86400000]]), // heard yesterday
      frontierOrd: 4,
    })
    expect(pick?.convId).toBe('conv_C') // fresh context outranks penalized B
  })

  test('reinforce mode: never-played contexts outrank replayed ones', () => {
    const now = D('2026-07-10T10:00:00')
    // huge in-flight map (over the 1500 gate); words 3,4,5,6 are in flight
    const inFlight = new Map<number, number>()
    for (let i = 0; i < 1600; i++) inFlight.set(1000 + i, 1)
    inFlight.set(3, 5); inFlight.set(4, 5); inFlight.set(5, 5); inFlight.set(6, 5)
    // conv_B (densest for these words) was played long ago (not recent, but EVER played)
    // conv_C has the same 4 targets plus more, never played → novelty should win
    const pick = pickNextConversation(fixtureIndex(), {
      now,
      dueWeights: new Map(),
      lastPlayed: new Map([['conv_B', now.getTime() - 30 * 86400000]]),
      frontierOrd: 4,
      inFlightWords: inFlight,
    })
    expect(pick?.reason).toBe('reinforce')
    expect(pick?.convId).toBe('conv_C')
  })

  test('due-pressure curve: 0 at ≤startAt, linear, 1 at ≥fullAt', () => {
    const { startAt, fullAt } = SRS_CONFIG.picker.duePressure
    expect(duePressure(0)).toBe(0)
    expect(duePressure(startAt)).toBe(0)
    expect(duePressure(fullAt)).toBe(1)
    expect(duePressure(fullAt + 500)).toBe(1)
    const mid = Math.round((startAt + fullAt) / 2)
    expect(duePressure(mid)).toBeCloseTo(0.5, 1)
  })

  test('under FULL due-pressure a 2×-coverage repeat beats a fresh sparse conv; without pressure variety still wins (user 2026-07-16: 300 dues survived 2h)', () => {
    const now = D('2026-07-10T10:00:00')
    const convs = new Map<string, { ord: number, durationSec: number, words: number[] }>([
      ['conv_fresh3', { ord: 1, durationSec: 60, words: [1, 2, 3] }],
      ['conv_rich8', { ord: 2, durationSec: 60, words: [3, 4, 5, 6, 7, 8, 9, 10] }],
    ])
    const index: ContentIndex = {
      convsContaining(wordIds) {
        const set = new Set(wordIds)
        const out = new Map<string, number[]>()
        for (const [id, c] of convs) {
          const hit = c.words.filter(w => set.has(w))
          if (hit.length) out.set(id, hit)
        }
        return out
      },
      convMeta(id) { const c = convs.get(id)!; return { convId: id, ord: c.ord, durationSec: c.durationSec } },
      nextUnheard() { return null },
      leastRecentlyPlayed() { return [] },
    }
    const lastPlayed = new Map([['conv_rich8', now.getTime() - 86_400_000]]) // rich conv heard yesterday

    // SMALL queue (below startAt): validated variety-first behavior — the
    // fresh conversation wins even with less coverage
    const smallDues = new Map<number, number>()
    for (const w of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) smallDues.set(w, 1)
    const calm = pickNextConversation(index, { now, dueWeights: smallDues, lastPlayed, frontierOrd: 2 })
    expect(calm?.convId).toBe('conv_fresh3')

    // BIG queue (≥ fullAt): coverage-per-minute must dominate — the
    // recently-played conversation covering 8 dues beats the fresh 3-due one
    const bigDues = new Map<number, number>(smallDues)
    for (let w = 100; bigDues.size < SRS_CONFIG.picker.duePressure.fullAt; w++) bigDues.set(w, 1)
    const pressured = pickNextConversation(index, { now, dueWeights: bigDues, lastPlayed, frontierOrd: 2 })
    expect(pressured?.convId).toBe('conv_rich8')
  })

  test('under FULL pressure near-equal covers ROTATE, truly denser repeats still win (user 2026-07-21: recurring sentences)', () => {
    const now = D('2026-07-10T10:00:00')
    const mkIndex = (convs: Map<string, { ord: number, durationSec: number, words: number[] }>): ContentIndex => ({
      convsContaining(wordIds) {
        const set = new Set(wordIds)
        const out = new Map<string, number[]>()
        for (const [id, c] of convs) {
          const hit = c.words.filter(w => set.has(w))
          if (hit.length) out.set(id, hit)
        }
        return out
      },
      convMeta(id) { const c = convs.get(id)!; return { convId: id, ord: c.ord, durationSec: c.durationSec } },
      nextUnheard() { return null },
      leastRecentlyPlayed() { return [] },
    })
    const bigDues = new Map<number, number>()
    for (let w = 1; bigDues.size < SRS_CONFIG.picker.duePressure.fullAt + 10; w++) bigDues.set(w, 1)
    const yesterday = new Map([['conv_replay', now.getTime() - 86_400_000]])

    // 6-due conv played yesterday vs 5-due unplayed: the old single floor gave
    // the replay a 0.9-vs-1.0 handicap only (6×0.9 > 5×1.0 → verbatim daily
    // recycling); freshness now bites separately (6×0.72 < 5×1.0) → rotate
    const near = new Map<string, { ord: number, durationSec: number, words: number[] }>([
      ['conv_replay', { ord: 1, durationSec: 60, words: [1, 2, 3, 4, 5, 6] }],
      ['conv_fresh', { ord: 2, durationSec: 60, words: [7, 8, 9, 10, 11] }],
    ])
    const rotated = pickNextConversation(mkIndex(near), {
      now, dueWeights: bigDues, lastPlayed: yesterday, frontierOrd: 2,
    })
    expect(rotated?.convId).toBe('conv_fresh')

    // 2×-coverage repeat (the 2026-07-18 dues-first rule) must STILL win
    const dense = new Map<string, { ord: number, durationSec: number, words: number[] }>([
      ['conv_replay', { ord: 1, durationSec: 60, words: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }],
      ['conv_fresh', { ord: 2, durationSec: 60, words: [11, 12, 13, 14, 15] }],
    ])
    const covered = pickNextConversation(mkIndex(dense), {
      now, dueWeights: bigDues, lastPlayed: yesterday, frontierOrd: 2,
    })
    expect(covered?.convId).toBe('conv_replay')
  })

  test('level-window filters BEFORE the scoring cap: distant dense convs cannot crowd out pickable ones (user 2026-07-21: same conversations recycling daily)', () => {
    const now = D('2026-07-10T10:00:00')
    const cap = SRS_CONFIG.picker.maxCandidates * 4
    const convs = new Map<string, { ord: number, durationSec: number, words: number[] }>()
    // one modest 2-hit conversation inside the level window…
    convs.set('conv_near', { ord: 5, durationSec: 60, words: [1, 2] })
    // …buried under cap+ out-of-window conversations with more hits each:
    // hit-sorted capping used to spend every slot on these, then skip them all
    for (let i = 0; i < cap + 50; i++) {
      convs.set(`conv_far_${i}`, { ord: 5000 + i, durationSec: 60, words: [1, 2, 3, 4, 5] })
    }
    const index: ContentIndex = {
      convsContaining(wordIds) {
        const set = new Set(wordIds)
        const out = new Map<string, number[]>()
        for (const [id, c] of convs) {
          const hit = c.words.filter(w => set.has(w))
          if (hit.length) out.set(id, hit)
        }
        return out
      },
      convMeta(id) { const c = convs.get(id)!; return { convId: id, ord: c.ord, durationSec: c.durationSec } },
      nextUnheard() { return null },
      leastRecentlyPlayed() { return [] },
    }
    const pick = pickNextConversation(index, {
      now,
      dueWeights: new Map([[1, 1], [2, 1], [3, 1], [4, 1], [5, 1]]),
      lastPlayed: new Map(),
      frontierOrd: 10, // window ends at 310 → conv_near pickable, conv_far_* not
    })
    expect(pick?.reason).toBe('dues')
    expect(pick?.convId).toBe('conv_near')
  })

  test('no dues → next unheard in frequency order; exhausted corpus → recycle', () => {
    const noDues = pickNextConversation(fixtureIndex(), {
      now: D('2026-07-10T10:00:00'), dueWeights: new Map(), lastPlayed: new Map(), frontierOrd: 2,
    })
    expect(noDues?.reason).toBe('new')
    expect(noDues?.convId).toBe('conv_C')
    const done = pickNextConversation(fixtureIndex(), {
      now: D('2026-07-10T10:00:00'), dueWeights: new Map(), lastPlayed: new Map(), frontierOrd: 4,
    })
    expect(done?.reason).toBe('recycle')
  })
})

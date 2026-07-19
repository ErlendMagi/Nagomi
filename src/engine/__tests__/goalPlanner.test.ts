// Goal planner: inversion of the M5 prediction (pure). THE METRIC IS WORDS
// KNOWN (graduated) — never merely heard (user rule 2026-07-13: "words I will
// KNOW"). The synthetic table mirrors prediction.test.ts:
//   heard(m, d)  = m·d/3          (fresh learner, m in [10,90], d in [0,120])
//   known(m, d)  = m·(d−30)/3     (graduation lags heard by 30 days, d ≥ 30)
// Every expectation below is one of those closed forms.

import { predictCurve, type PredictionTable } from '../prediction'
import {
  requiredMinutesPerDay, earliestReachable, knownAfter, planCeilingMinutes,
  roundUpToFive, targetMonthInfo, monthLabelForDays, monthsAheadFromKey,
  lastDayKeyOfMonth, addMonthsToDayKey, monthKeyLabel, monthYearLabelForDayKey,
  buildWordsByDatePlan, buildMinutesPerDayPlan, parseGoalPlanV2,
  planMarkStatuses, minutesToClosePlan, medianDailyMinutesZeroFilled,
  MIN_PLAN_MINUTES, HARD_CEILING_MINUTES, MODE_B_MONTHS,
  type CurrentProgress, type GoalPlanV2,
} from '../goalPlanner'
import { addDaysToKey, dayKeyDiff } from '../../core/day'

function linearTrack(minutes: number, perDay: number): { minutes: number, points: number[][] } {
  const points: number[][] = []
  for (let d = 0; d <= 120; d += 30) points.push([d, perDay * d, Math.max(0, perDay * (d - 30))])
  return { minutes, points }
}

const table: PredictionTable = {
  horizonDays: 120,
  tracks: [
    linearTrack(10, 100 / 30),
    linearTrack(30, 300 / 30),
    linearTrack(90, 900 / 30),
  ],
}

const lowTable: PredictionTable = {
  horizonDays: 120,
  tracks: [linearTrack(10, 100 / 30), linearTrack(30, 300 / 30)],
}

const FRESH: CurrentProgress = { heard: 0, graduated: 0 }

describe('planCeilingMinutes', () => {
  it('is the top track when the table sweeps below 8h', () => {
    expect(planCeilingMinutes(table)).toBe(90)
    expect(planCeilingMinutes(lowTable)).toBe(30)
  })

  it('caps at 480 when a table sweeps beyond 8h', () => {
    const wide: PredictionTable = {
      horizonDays: 120,
      tracks: [linearTrack(10, 100 / 30), linearTrack(600, 6000 / 30)],
    }
    expect(planCeilingMinutes(wide)).toBe(HARD_CEILING_MINUTES)
  })

  it('is 0 for an empty table', () => {
    expect(planCeilingMinutes({ horizonDays: 0, tracks: [] })).toBe(0)
  })
})

describe('requiredMinutesPerDay (metric = words KNOWN)', () => {
  it('inverts the known-curve exactly (600 known in 90 days → 30 min)', () => {
    // known = m·(90−30)/3 = 20m ≥ 600 ⇔ m ≥ 30
    expect(requiredMinutesPerDay(table, 600, 90, FRESH)).toBe(30)
  })

  it('hearing-only exposure is NOT enough — heard would say 20, known says 30', () => {
    // the exact regression the user caught: heard(m,90)=30m ≥ 600 ⇔ m ≥ 20,
    // but KNOWING 600 words needs m ≥ 30. The planner must return the honest one.
    expect(requiredMinutesPerDay(table, 600, 90, FRESH)).not.toBe(20)
  })

  it('round-trips: the returned pace KNOWS the target via predictCurve, one less does not', () => {
    const cases: { target: number, days: number, cur: CurrentProgress }[] = [
      { target: 600, days: 90, cur: FRESH },
      { target: 600, days: 60, cur: FRESH },   // 10m ≥ 600 → 60 min
      { target: 2000, days: 120, cur: FRESH }, // 30m ≥ 2000 → 67 min
      { target: 300, days: 60, cur: { heard: 150, graduated: 30 } }, // anchored mid-curve
    ]
    for (const { target, days, cur } of cases) {
      const m = requiredMinutesPerDay(table, target, days, cur)
      expect(m).not.toBeNull()
      const knownAt = (mins: number) => {
        const curve = predictCurve(table, mins, cur.heard, days,
          { stepDays: days, currentGraduated: cur.graduated })
        return curve[curve.length - 1].graduated
      }
      expect(knownAt(m as number)).toBeGreaterThanOrEqual(target)
      if ((m as number) > MIN_PLAN_MINUTES) expect(knownAt((m as number) - 1)).toBeLessThan(target)
    }
  })

  it('returns 0 when the target is already KNOWN (heard alone does not count)', () => {
    const cur: CurrentProgress = { heard: 500, graduated: 150 }
    expect(requiredMinutesPerDay(table, 100, 90, cur)).toBe(0)
    expect(requiredMinutesPerDay(table, 150, 90, cur)).toBe(0)
    expect(requiredMinutesPerDay(table, 150, 0, cur)).toBe(0) // even on a dead horizon
    // 400 heard-but-not-known words do NOT satisfy a 400-known target
    expect(requiredMinutesPerDay(table, 400, 90, cur)).not.toBe(0)
  })

  it('returns the minimum when even 10 min/day suffices', () => {
    // known(10, 90) = 200 ≥ 50
    expect(requiredMinutesPerDay(table, 50, 90, FRESH)).toBe(MIN_PLAN_MINUTES)
  })

  it('returns null when even the ceiling cannot reach the target', () => {
    // 90-min ceiling, 90 days: known = 90·60/3 = 1800
    expect(requiredMinutesPerDay(table, 1801, 90, FRESH)).toBeNull()
    // beyond the table horizon the curve is flat — known max = 90·90/3 = 2700
    expect(requiredMinutesPerDay(table, 2701, 9999, FRESH)).toBeNull()
  })

  it('treats the table max track as the feasibility ceiling (low-track table)', () => {
    // lowTable tops at 30 min/day: known(30, 90) = 600 → 1000 unreachable
    expect(requiredMinutesPerDay(lowTable, 1000, 90, FRESH)).toBeNull()
    expect(requiredMinutesPerDay(lowTable, 600, 90, FRESH)).toBe(30)
  })

  it('handles degenerate horizons (graduation needs its 30-day lag)', () => {
    expect(requiredMinutesPerDay(table, 100, 0, FRESH)).toBeNull()
    expect(requiredMinutesPerDay(table, 100, -5, FRESH)).toBeNull()
    expect(requiredMinutesPerDay(table, 100, 0.9, FRESH)).toBeNull()
    // a horizon inside the graduation lag can never produce known words
    expect(requiredMinutesPerDay(table, 20, 3, FRESH)).toBeNull()
    // just past the lag it computes: known(m, 33) = m ≥ 20
    expect(requiredMinutesPerDay(table, 20, 33, FRESH)).toBe(20)
  })

  it('returns null for an empty table (nothing to invert)', () => {
    expect(requiredMinutesPerDay({ horizonDays: 0, tracks: [] }, 100, 90, FRESH)).toBeNull()
  })

  it('never returns a pace that fails verification, even on a non-monotone table', () => {
    // pathological: the 30-track dips BELOW the 10-track at day 60
    const weird: PredictionTable = {
      horizonDays: 120,
      tracks: [
        { minutes: 10, points: [[0, 0, 0], [30, 100, 100], [60, 200, 200], [90, 300, 300], [120, 400, 400]] },
        { minutes: 30, points: [[0, 0, 0], [30, 90, 90], [60, 150, 150], [90, 900, 900], [120, 1200, 1200]] },
      ],
    }
    for (const target of [50, 150, 250, 500, 900]) {
      const m = requiredMinutesPerDay(weird, target, 90, FRESH)
      if (m !== null) {
        expect(knownAfter(weird, m, 90, FRESH)).toBeGreaterThanOrEqual(target)
        expect(m).toBeGreaterThanOrEqual(MIN_PLAN_MINUTES)
        expect(m).toBeLessThanOrEqual(planCeilingMinutes(weird))
      }
    }
  })
})

describe('earliestReachable (metric = words KNOWN)', () => {
  it('finds the first day the ceiling pace KNOWS the target', () => {
    // 480 clamps to the 90-track: known = 30·(d−30) → 900 at day 60
    expect(earliestReachable(table, 900, FRESH)).toBe(60)
    expect(earliestReachable(table, 901, FRESH)).toBe(61)
  })

  it('clamps the pace to the table top track (low-track table)', () => {
    // lowTable clamps 480 → 30 min/day: known = 10·(d−30) → 800 at day 110
    expect(earliestReachable(lowTable, 800, FRESH, HARD_CEILING_MINUTES)).toBe(110)
  })

  it('respects an explicit slower pace', () => {
    // 10 min/day: known = 10·(d−30)/3 → 100 at day 60
    expect(earliestReachable(table, 100, FRESH, 10)).toBe(60)
  })

  it('returns 0 when already known and null beyond the simulated horizon', () => {
    expect(earliestReachable(table, 100, { heard: 500, graduated: 150 })).toBe(0)
    // 90-track known ceiling at day 120 = 2700 → 2701 is never reached
    expect(earliestReachable(table, 2701, FRESH)).toBeNull()
    expect(earliestReachable({ horizonDays: 0, tracks: [] }, 100, FRESH)).toBeNull()
  })

  it('anchors mid-curve: remaining days shrink as progress grows', () => {
    // heard=300 anchors the 90-track at t0=10 (graduated there = 0, shift 0):
    // known(d) = 30·(10+d−30) ≥ 900 → d ≥ 50
    expect(earliestReachable(table, 900, { heard: 300, graduated: 0 })).toBe(50)
  })
})

describe('knownAfter', () => {
  it('matches predictCurve.graduated and clamps flat beyond the horizon', () => {
    expect(knownAfter(table, 30, 60, FRESH)).toBe(300)      // 30·(60−30)/3·… = 10·30
    expect(knownAfter(table, 30, 9999, FRESH)).toBe(900)    // table ceiling: 10·90
    expect(knownAfter(table, 30, 0, { heard: 123, graduated: 45 })).toBe(45) // no days → no change
  })
})

describe('roundUpToFive', () => {
  it('rounds up to the next 5, exact values unchanged', () => {
    expect(roundUpToFive(0)).toBe(0)
    expect(roundUpToFive(1)).toBe(5)
    expect(roundUpToFive(10)).toBe(10)
    expect(roundUpToFive(21)).toBe(25)
    expect(roundUpToFive(24)).toBe(25)
    expect(roundUpToFive(25)).toBe(25)
    expect(roundUpToFive(476)).toBe(480)
  })
})

describe('targetMonthInfo', () => {
  const now = new Date(2026, 6, 13, 12, 0) // July 13 2026, noon

  it('formats "+N months" as a full month label with year rollover', () => {
    expect(targetMonthInfo(1, now).label).toBe('August 2026')
    expect(targetMonthInfo(6, now).label).toBe('January 2027')
    expect(targetMonthInfo(24, now).label).toBe('July 2028')
  })

  it('computes days until the END of the target month', () => {
    // Aug 2026 ends Aug 31; boundary Sep 1 00:00 is 49.5 days from noon Jul 13 → ceil 50
    expect(targetMonthInfo(1, now).daysFromNow).toBe(50)
    // Jul 2028 boundary is Aug 1 2028 — two years and 19 days out
    expect(targetMonthInfo(24, now).daysFromNow).toBe(365 + 365 + 19 + 1) // 2028 is a leap year
  })

  it('emits a stable YYYY-MM key that monthsAheadFromKey inverts', () => {
    for (const n of [1, 5, 12, 24]) {
      const info = targetMonthInfo(n, now)
      expect(monthsAheadFromKey(info.key, now)).toBe(n)
    }
    expect(targetMonthInfo(6, now).key).toBe('2027-01')
  })
})

describe('monthsAheadFromKey', () => {
  const now = new Date(2026, 6, 13)

  it('rejects malformed keys', () => {
    expect(monthsAheadFromKey('garbage', now)).toBeNull()
    expect(monthsAheadFromKey('2027-13', now)).toBeNull()
    expect(monthsAheadFromKey('2027-3', now)).toBeNull()
  })

  it('can be negative for past months (caller clamps)', () => {
    expect(monthsAheadFromKey('2026-05', now)).toBe(-2)
  })
})

describe('monthLabelForDays', () => {
  it('labels a day offset with its month and year', () => {
    const now = new Date(2026, 6, 13)
    expect(monthLabelForDays(0, now)).toBe('July 2026')
    expect(monthLabelForDays(200, now)).toBe('January 2027')
  })
})

// ---- saved plans v2 ----

/** like linearTrack but sweeping the full 730-day horizon (kink at day 30 on-grid) */
function longTrack(minutes: number, perDay: number): { minutes: number, points: number[][] } {
  const points: number[][] = []
  for (let d = 0; d <= 720; d += 30) points.push([d, perDay * d, Math.max(0, perDay * (d - 30))])
  points.push([730, perDay * 730, perDay * 700])
  return { minutes, points }
}

const longTable: PredictionTable = {
  horizonDays: 730,
  tracks: [longTrack(10, 100 / 30), longTrack(30, 300 / 30), longTrack(90, 900 / 30)],
}

describe('calendar helpers', () => {
  it('lastDayKeyOfMonth handles month lengths and leap years', () => {
    expect(lastDayKeyOfMonth('2027-02')).toBe('2027-02-28')
    expect(lastDayKeyOfMonth('2028-02')).toBe('2028-02-29') // leap
    expect(lastDayKeyOfMonth('2026-12')).toBe('2026-12-31')
    expect(lastDayKeyOfMonth('2026-04')).toBe('2026-04-30')
    expect(lastDayKeyOfMonth('garbage')).toBeNull()
    expect(lastDayKeyOfMonth('2027-13')).toBeNull()
  })

  it('addMonthsToDayKey keeps the day-of-month, clamping to month length', () => {
    expect(addMonthsToDayKey('2026-07-14', 6)).toBe('2027-01-14')
    expect(addMonthsToDayKey('2026-07-14', 12)).toBe('2027-07-14')
    expect(addMonthsToDayKey('2026-11-15', 3)).toBe('2027-02-15') // year rollover
    expect(addMonthsToDayKey('2026-01-31', 1)).toBe('2026-02-28') // clamp
    expect(addMonthsToDayKey('2026-10-31', 1)).toBe('2026-11-30') // clamp
    expect(addMonthsToDayKey('2026-03-31', -1)).toBe('2026-02-28') // negative
  })

  it('labels month keys and day keys with full month-year names', () => {
    expect(monthKeyLabel('2027-07')).toBe('July 2027')
    expect(monthKeyLabel('2027-7')).toBeNull()
    expect(monthKeyLabel('2027-00')).toBeNull()
    expect(monthYearLabelForDayKey('2027-12-31')).toBe('December 2027')
    expect(monthYearLabelForDayKey('nonsense')).toBeNull()
  })
})

describe('buildWordsByDatePlan (mode A)', () => {
  const now = new Date(2026, 6, 13, 12) // July 13 2026, noon → day key 2026-07-13

  it('freezes ONE mark at the target month\'s LAST day with the exact target', () => {
    // horizon to end of Oct 2026 = 111 days; known(m,111) = 27m ≥ 600 → m = 23 → pace 25
    const plan = buildWordsByDatePlan(table, 600, 3, FRESH, now)
    expect(plan).not.toBeNull()
    expect(plan!.mode).toBe('wordsByDate')
    expect(plan!.savedAtDayKey).toBe('2026-07-13')
    expect(plan!.targetWords).toBe(600)
    expect(plan!.targetMonthKey).toBe('2026-10')
    expect(plan!.fixedMarks).toEqual([{ dateKey: '2026-10-31', words: 600 }])
    expect(plan!.minutesPerDay).toBe(25)
    expect(plan!.minutesPerDay).toBe(Math.max(MIN_PLAN_MINUTES,
      roundUpToFive(requiredMinutesPerDay(table, 600, targetMonthInfo(3, now).daysFromNow, FRESH)!)))
  })

  it('returns null when infeasible — nothing to save', () => {
    // known ceiling by end of Oct = 90·81/3 = 2430 < 5000
    expect(buildWordsByDatePlan(table, 5000, 3, FRESH, now)).toBeNull()
  })

  it('an already-reached target saves at the daily minimum', () => {
    const plan = buildWordsByDatePlan(table, 600, 3, { heard: 2000, graduated: 700 }, now)
    expect(plan!.minutesPerDay).toBe(MIN_PLAN_MINUTES)
    expect(plan!.fixedMarks[0].words).toBe(600)
  })
})

describe('buildMinutesPerDayPlan (mode B)', () => {
  const now = new Date(2026, 6, 14, 12) // July 14 2026, noon → day key 2026-07-14

  it('freezes marks at +6/+9/+12 CALENDAR months from the save date', () => {
    expect(MODE_B_MONTHS).toEqual([6, 9, 12])
    const plan = buildMinutesPerDayPlan(longTable, 30, FRESH, now)
    expect(plan.savedAtDayKey).toBe('2026-07-14')
    expect(plan.minutesPerDay).toBe(30)
    expect(plan.fixedMarks.map(m => m.dateKey))
      .toEqual(['2027-01-14', '2027-04-14', '2027-07-14'])
  })

  it('mark words are the KNOWN forecast at each date (closed form: 10·(d−30))', () => {
    const plan = buildMinutesPerDayPlan(longTable, 30, FRESH, now)
    for (const m of plan.fixedMarks) {
      const d = dayKeyDiff('2026-07-14', m.dateKey)
      expect(m.words).toBe(10 * (d - 30)) // perDay(30min) = 10 known/day after the lag
      expect(m.words).toBe(knownAfter(longTable, 30, d, FRESH))
    }
    const [a, b, c] = plan.fixedMarks.map(m => m.words)
    expect(a).toBeLessThan(b)
    expect(b).toBeLessThan(c)
  })
})

describe('goal_plan_v2 persistence', () => {
  it('round-trips both modes through JSON', () => {
    const a = buildWordsByDatePlan(table, 600, 3, FRESH, new Date(2026, 6, 13, 12))!
    expect(parseGoalPlanV2(JSON.stringify(a))).toEqual(a)
    const b = buildMinutesPerDayPlan(longTable, 45, { heard: 300, graduated: 80 },
      new Date(2026, 6, 14, 12))
    expect(parseGoalPlanV2(JSON.stringify(b))).toEqual(b)
  })

  it('rejects anything malformed (never throws, never half-parses)', () => {
    const good = buildMinutesPerDayPlan(longTable, 30, FRESH, new Date(2026, 6, 14, 12))
    const mutate = (patch: Record<string, unknown>) =>
      parseGoalPlanV2(JSON.stringify({ ...good, ...patch }))
    expect(parseGoalPlanV2(undefined)).toBeNull()
    expect(parseGoalPlanV2('')).toBeNull()
    expect(parseGoalPlanV2('garbage')).toBeNull()
    expect(parseGoalPlanV2('{}')).toBeNull()
    expect(parseGoalPlanV2('null')).toBeNull()
    expect(mutate({ mode: 'heardByDate' })).toBeNull()          // unknown mode
    expect(mutate({ savedAtDayKey: '14-07-2026' })).toBeNull()  // bad day key
    expect(mutate({ fixedMarks: [] })).toBeNull()               // no commitments
    expect(mutate({ fixedMarks: [{ dateKey: '2027-1-5', words: 100 }] })).toBeNull()
    expect(mutate({ fixedMarks: [{ dateKey: '2027-01-05', words: -1 }] })).toBeNull()
    expect(mutate({ minutesPerDay: undefined })).toBeNull()     // B requires a pace
    // mode A requires target fields
    const a = buildWordsByDatePlan(table, 600, 3, FRESH, new Date(2026, 6, 13, 12))!
    expect(parseGoalPlanV2(JSON.stringify({ ...a, targetWords: undefined }))).toBeNull()
    expect(parseGoalPlanV2(JSON.stringify({ ...a, targetMonthKey: '2026-13' }))).toBeNull()
    // A without minutesPerDay is still a valid plan (pace is display-only)
    const aNoPace = parseGoalPlanV2(JSON.stringify({ ...a, minutesPerDay: undefined }))
    expect(aNoPace).not.toBeNull()
    expect(aNoPace!.mode === 'wordsByDate' && aNoPace!.minutesPerDay).toBeUndefined()
  })
})

describe('fixed marks do NOT roll', () => {
  it('120 days later the plan still points at the SAME dates and words', () => {
    const plan = buildMinutesPerDayPlan(longTable, 30, FRESH, new Date(2026, 6, 14, 12))
    const reloaded = parseGoalPlanV2(JSON.stringify(plan))! // as the app would after restart
    const now = planMarkStatuses(longTable, reloaded, 30, FRESH, '2026-07-14')
    const later = planMarkStatuses(longTable, reloaded, 30, FRESH, addDaysToKey('2026-07-14', 120))
    expect(later.map(s => s.dateKey)).toEqual(now.map(s => s.dateKey))
    expect(later.map(s => s.words)).toEqual(now.map(s => s.words))
    later.forEach((s, i) => expect(s.daysFromNow).toBe(now[i].daysFromNow - 120))
    // the display label derives from the STORED date — December-2027-style, fixed
    expect(monthYearLabelForDayKey(later[0].dateKey)).toBe('January 2027')
  })
})

describe('planMarkStatuses (on-plan / behind)', () => {
  const today = '2026-07-14'
  const planAt = (dateKey: string, words: number): GoalPlanV2 => ({
    mode: 'wordsByDate', savedAtDayKey: today, targetWords: words,
    targetMonthKey: dateKey.slice(0, 7), fixedMarks: [{ dateKey, words }],
  })

  it('future mark: projected = knownAfter at the MEDIAN pace', () => {
    const mark = planAt(addDaysToKey(today, 90), 600)
    // known(30, 90) = 600 → exactly on plan
    const on = planMarkStatuses(table, mark, 30, FRESH, today)[0]
    expect(on.projected).toBe(600)
    expect(on.onPlan).toBe(true)
    // known(20, 90) = 400 → behind
    const behind = planMarkStatuses(table, mark, 20, FRESH, today)[0]
    expect(behind.projected).toBe(400)
    expect(behind.onPlan).toBe(false)
  })

  it('no listening history (median 0) → projected stays at current, honestly behind', () => {
    const mark = planAt(addDaysToKey(today, 90), 600)
    const st = planMarkStatuses(table, mark, 0, { heard: 200, graduated: 50 }, today)[0]
    expect(st.projected).toBe(50)
    expect(st.onPlan).toBe(false)
  })

  it('past mark: judged on the actual KNOWN count, not a forecast', () => {
    const mark = planAt(addDaysToKey(today, -1), 600)
    const hit = planMarkStatuses(table, mark, 90, { heard: 2000, graduated: 700 }, today)[0]
    expect(hit.daysFromNow).toBe(-1)
    expect(hit.projected).toBe(700)
    expect(hit.onPlan).toBe(true)
    const miss = planMarkStatuses(table, mark, 90, { heard: 2000, graduated: 500 }, today)[0]
    expect(miss.onPlan).toBe(false)
  })
})

describe('minutesToClosePlan', () => {
  it('returns the whole extra minutes over the median that close the gap', () => {
    // required for 600 known in 90 days = 30 min/day
    expect(minutesToClosePlan(table, 600, 90, 22, FRESH)).toBe(8)
    expect(minutesToClosePlan(table, 600, 90, 29.5, FRESH)).toBe(1)
  })

  it('returns 0 when the median already suffices and null when unreachable', () => {
    expect(minutesToClosePlan(table, 600, 90, 45, FRESH)).toBe(0)
    expect(minutesToClosePlan(table, 5000, 90, 22, FRESH)).toBeNull()
  })
})

describe('medianDailyMinutesZeroFilled', () => {
  const today = '2026-07-14'
  const row = (daysAgo: number, minutes: number) =>
    ({ day: addDaysToKey(today, -daysAgo), seconds: minutes * 60 })

  it('returns 0 with no rows at all', () => {
    expect(medianDailyMinutesZeroFilled([], today)).toBe(0)
  })

  it('young install: zero-fills only from the FIRST-EVER row, not install-eve', () => {
    // first row 4 days ago → window is d-4..d-1 (today has no row → excluded):
    // [10, 0, 20, 0] → median (0+10)/2 = 5. The row-only median would say 15.
    const rows = [row(4, 10), row(2, 20)]
    expect(medianDailyMinutesZeroFilled(rows, today)).toBe(5)
  })

  it('today counts once it has a row (a day in progress is not a zero day)', () => {
    const rows = [row(4, 10), row(2, 20), row(0, 30)]
    // d-4..today = [10, 0, 20, 0, 30] → median 10
    expect(medianDailyMinutesZeroFilled(rows, today)).toBe(10)
  })

  it('sparse older install: skipped calendar days drag the median to zero', () => {
    // first-ever row 100 days ago → the 30-day window is fully in force;
    // one 10-min day among 28 zero days → median 0 (the honest number)
    const rows = [row(100, 10), row(5, 10)]
    expect(medianDailyMinutesZeroFilled(rows, today)).toBe(0)
  })

  it('steady listener: median equals the daily value', () => {
    const rows = Array.from({ length: 30 }, (_, i) => row(i + 1, 20))
    expect(medianDailyMinutesZeroFilled(rows, today)).toBe(20)
  })

  it('respects a custom window', () => {
    const rows = [row(3, 10), row(2, 20), row(1, 30)]
    // windowDays 2 → only d-1 (today excluded, no row) → median 30
    expect(medianDailyMinutesZeroFilled(rows, today, 2)).toBe(30)
  })
})

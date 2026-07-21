// Goal planner (pure): INVERT the M5 prediction — the user states a word
// target and a target month, we find the minutes/day pace whose anchored
// forecast reaches the target in time.
//
// Every forecast read goes through predictCurve (same table, same anchoring),
// so the planner can never disagree with the Progress screen. We binary-search
// minutes over [10, ceiling] where the ceiling is the LOWER of 8h/day and the
// table's highest simulated track — the table may currently stop at 90 min/day
// and the math must stay honest with whatever tracks it has (interpolateTrack
// clamps, it never extrapolates above the top track).
//
// Monotonicity guard: the search keeps the invariant that `hi` always reaches
// the target, so the returned pace VERIFIABLY works even if a pathological
// table made heard-vs-minutes locally non-monotone (worst case we return a
// slightly-higher-than-minimal pace, never a broken one).

import { predictCurve, type PredictionTable } from './prediction'
import { addDaysToKey, dayKey, dayKeyDiff } from '../core/day'

/** fixed app-wide daily minimum — no plan below this */
export const MIN_PLAN_MINUTES = 10
/** 8h/day — absolute cap regardless of how far the table sweeps */
export const HARD_CEILING_MINUTES = 480

const DAY_MS = 86_400_000

/** highest searchable pace: min(8h, top simulated track); 0 for an empty table */
export function planCeilingMinutes(table: PredictionTable): number {
  if (table.tracks.length === 0) return 0
  const top = Math.max(...table.tracks.map(t => t.minutes))
  return Math.min(HARD_CEILING_MINUTES, top)
}

/** where the learner is NOW — both counters, so anchoring stays honest */
export interface CurrentProgress {
  heard: number
  /** words meeting BOTH graduation thresholds = words the user KNOWS */
  graduated: number
}

/**
 * Forecast KNOWN-count (graduated words) `days` from now at `minutes`/day.
 * The planner's promise is "words you will KNOW", never "words you will have
 * heard once" — heard saturates absurdly fast (the whole corpus showers you
 * with words) and would let a 13-min/day plan claim 15,000 words in a year
 * (user caught this 2026-07-13). Same predictCurve anchoring as the Progress
 * screen: day-0 heard = current.heard, graduated shifted to current.graduated.
 */
export function knownAfter(
  table: PredictionTable, minutes: number, days: number, current: CurrentProgress,
): number {
  const d = Math.floor(days)
  if (d <= 0) return current.graduated
  const curve = predictCurve(table, minutes, current.heard, d,
    { stepDays: d, currentGraduated: current.graduated })
  return curve[curve.length - 1].graduated
}

/**
 * Smallest whole minutes/day (within [10, ceiling]) whose forecast KNOWS
 * `targetWords` within `daysFromNow`. 0 = already known. null = not reachable
 * even at the ceiling (8h/day, or the table's top track if lower).
 */
export function requiredMinutesPerDay(
  table: PredictionTable, targetWords: number, daysFromNow: number, current: CurrentProgress,
): number | null {
  if (targetWords <= current.graduated) return 0
  const days = Math.floor(daysFromNow)
  if (days < 1) return null // degenerate horizon — no listening time exists
  const ceiling = planCeilingMinutes(table)
  if (ceiling < MIN_PLAN_MINUTES) return null // empty/degenerate table

  const reaches = (m: number): boolean => knownAfter(table, m, days, current) >= targetWords
  if (!reaches(ceiling)) return null
  if (reaches(MIN_PLAN_MINUTES)) return MIN_PLAN_MINUTES

  // invariant: reaches(hi) true, reaches(lo) false → hi is always a valid pace
  let lo = MIN_PLAN_MINUTES
  let hi = ceiling
  while (hi - lo > 1) {
    const mid = Math.floor((lo + hi) / 2)
    if (reaches(mid)) hi = mid
    else lo = mid
  }
  return hi
}

/**
 * Smallest whole day-count at which `minutes`/day (clamped to the table's top
 * track) KNOWS `targetWords`. 0 = already known. null = never, even at the
 * table's simulated horizon (the curve goes flat beyond it — no extrapolation).
 */
export function earliestReachable(
  table: PredictionTable, targetWords: number, current: CurrentProgress,
  minutes: number = HARD_CEILING_MINUTES,
): number | null {
  if (targetWords <= current.graduated) return 0
  if (table.tracks.length === 0) return null
  const maxDays = Math.max(1, Math.floor(table.horizonDays))

  const reaches = (d: number): boolean => knownAfter(table, minutes, d, current) >= targetWords
  if (!reaches(maxDays)) return null

  // invariant: reaches(hi) true, reaches(lo) false (day 0 forecast = current)
  let lo = 0
  let hi = maxDays
  while (hi - lo > 1) {
    const mid = Math.floor((lo + hi) / 2)
    if (reaches(mid)) hi = mid
    else lo = mid
  }
  return hi
}

/** goal minutes are set in 5-minute notches — always round UP, never under-plan */
export function roundUpToFive(minutes: number): number {
  return Math.ceil(minutes / 5) * 5
}

/**
 * Words-known chart caption (user 2026-07-16: "I want to see progression …
 * Say how many days left until first word is officially known"). Pure.
 * graduated === 0 → a days-count (the near-term dopamine a brand-new user
 * needs); otherwise the next-100 milestone as a month via earliestReachable,
 * so the milestone can never disagree with the plotted projection.
 *
 * The first-word count uses `firstWordEngineDays` (analytics
 * firstGraduationEtaDays) when the caller has real word_state: the table
 * forecast re-anchors on the heard-count alone, so days spent clearing due
 * reviews (which add no NEW heard words) froze the countdown — user
 * 2026-07-21: "~23 days" three days running. Engine truth moves with the
 * calendar and with every review; null/undefined falls back to the table.
 */
export function etaCaption(
  table: PredictionTable, current: CurrentProgress, paceMinutes: number, now: Date = new Date(),
  firstWordEngineDays?: number | null,
): string {
  const pace = Math.max(MIN_PLAN_MINUTES, paceMinutes)
  if (current.graduated === 0) {
    const days = firstWordEngineDays ?? earliestReachable(table, 1, current, pace)
    if (days === null) return 'keep listening — your first known words are on the way'
    return `first word known in ~${Math.max(1, days)} ${Math.max(1, days) === 1 ? 'day' : 'days'} ✨`
  }
  const nextHundred = (Math.floor(current.graduated / 100) + 1) * 100
  const days = earliestReachable(table, nextHundred, current, pace)
  if (days === null) return `${current.graduated.toLocaleString()} words known — keep going`
  return `next: ${nextHundred.toLocaleString()} words by ~${monthLabelForDays(Math.max(1, days), now)} at your pace`
}

// ---- target-month math (pure, testable — the component stays thin) ----

const MONTHS_FULL = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const

export interface TargetMonth {
  /** e.g. 'March 2027' */
  label: string
  /** e.g. '2027-03' — stable kv form */
  key: string
  /** whole days from `now` until the END of the target month ("by <month>") */
  daysFromNow: number
}

/** Resolve "+N months from now" to its label, kv key and day horizon. */
export function targetMonthInfo(monthsAhead: number, now: Date = new Date()): TargetMonth {
  const d = new Date(now.getFullYear(), now.getMonth() + monthsAhead, 1)
  const boundary = new Date(d.getFullYear(), d.getMonth() + 1, 1) // first instant AFTER the month
  return {
    label: `${MONTHS_FULL[d.getMonth()]} ${d.getFullYear()}`,
    key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`,
    daysFromNow: Math.max(0, Math.ceil((boundary.getTime() - now.getTime()) / DAY_MS)),
  }
}

/** 'March 2027' label for a day-offset from now (for the "earliest" verdict). */
export function monthLabelForDays(daysFromNow: number, now: Date = new Date()): string {
  const at = new Date(now.getTime() + daysFromNow * DAY_MS)
  return `${MONTHS_FULL[at.getMonth()]} ${at.getFullYear()}`
}

/** Inverse of targetMonthInfo().key → months ahead of `now`; null if malformed. */
export function monthsAheadFromKey(key: string, now: Date = new Date()): number | null {
  const m = /^(\d{4})-(\d{2})$/.exec(key)
  if (!m) return null
  const year = Number(m[1])
  const month = Number(m[2])
  if (month < 1 || month > 12) return null
  return (year - now.getFullYear()) * 12 + (month - 1 - now.getMonth())
}

// ---- saved plans v2 (deliberate SAVE, FIXED non-rolling commitments) ----
//
// A plan is a VALUE written once at save time. Its fixedMarks carry absolute
// calendar dates + word counts computed at the moment of saving; nothing here
// ever recomputes them, so four months later the plan still names the same
// December-2027-style dates (user spec 2026-07-14: commitments, not a rolling
// "in 6 months"). The metric is KNOWN (graduated) everywhere — never heard.

export const GOAL_PLAN_V2_KEY = 'goal_plan_v2'

/** Mode B checkpoints: +6 / +9 / +12 months from the save date. */
export const MODE_B_MONTHS: readonly number[] = [6, 9, 12]

export interface FixedMark {
  /** absolute calendar day 'YYYY-MM-DD', frozen at save time — never rolls */
  dateKey: string
  /** words the plan says the user will KNOW (graduated) on that date */
  words: number
}

interface GoalPlanBase {
  /** day the plan was saved (4AM day key, matches day_stats) */
  savedAtDayKey: string
  fixedMarks: FixedMark[]
}

/** Mode A: "know N words by <month>" — one mark at the month's last day. */
export interface WordsByDatePlan extends GoalPlanBase {
  mode: 'wordsByDate'
  targetWords: number
  /** 'YYYY-MM' (targetMonthInfo key form) */
  targetMonthKey: string
  /** the required pace applied to settings.goalMinutes at save time */
  minutesPerDay?: number
}

/** Mode B: "N minutes a day" — marks at +6/+9/+12 months from the save date. */
export interface MinutesPerDayPlan extends GoalPlanBase {
  mode: 'minutesPerDay'
  minutesPerDay: number
}

export type GoalPlanV2 = WordsByDatePlan | MinutesPerDayPlan
export type GoalPlanMode = GoalPlanV2['mode']

const DAY_KEY_RE = /^\d{4}-\d{2}-\d{2}$/
const MONTH_KEY_RE = /^\d{4}-\d{2}$/

/** Last calendar day of a 'YYYY-MM' month key, e.g. '2028-02' → '2028-02-29'. */
export function lastDayKeyOfMonth(monthKey: string): string | null {
  const m = MONTH_KEY_RE.exec(monthKey)
  if (!m) return null
  const year = Number(monthKey.slice(0, 4))
  const month = Number(monthKey.slice(5, 7))
  if (month < 1 || month > 12) return null
  const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate()
  return `${monthKey}-${String(lastDay).padStart(2, '0')}`
}

/** Same calendar day N months later, clamped to the target month's length
 *  ('2026-01-31' + 1 → '2026-02-28'). */
export function addMonthsToDayKey(key: string, months: number): string {
  const [y, m, d] = key.split('-').map(Number)
  const total = (m - 1) + months
  const ty = y + Math.floor(total / 12)
  const tm = ((total % 12) + 12) % 12
  const daysInMonth = new Date(Date.UTC(ty, tm + 1, 0)).getUTCDate()
  return `${ty}-${String(tm + 1).padStart(2, '0')}-${String(Math.min(d, daysInMonth)).padStart(2, '0')}`
}

/** 'July 2027' for a 'YYYY-MM' key; null if malformed. */
export function monthKeyLabel(monthKey: string): string | null {
  if (!MONTH_KEY_RE.test(monthKey)) return null
  const month = Number(monthKey.slice(5, 7))
  if (month < 1 || month > 12) return null
  return `${MONTHS_FULL[month - 1]} ${monthKey.slice(0, 4)}`
}

/** 'July 2027' for a 'YYYY-MM-DD' day key; null if malformed. */
export function monthYearLabelForDayKey(dateKey: string): string | null {
  if (!DAY_KEY_RE.test(dateKey)) return null
  return monthKeyLabel(dateKey.slice(0, 7))
}

/**
 * Build (but do not persist) a mode-A plan: know `targetWords` by the end of
 * the month `monthsAhead` from `now`. The single fixed mark sits on the target
 * month's LAST day at exactly `targetWords`. null = infeasible even at the
 * plan ceiling (caller shows the honest verdict instead of saving).
 */
export function buildWordsByDatePlan(
  table: PredictionTable, targetWords: number, monthsAhead: number,
  current: CurrentProgress, now: Date = new Date(),
): WordsByDatePlan | null {
  const month = targetMonthInfo(monthsAhead, now)
  const required = requiredMinutesPerDay(table, targetWords, month.daysFromNow, current)
  if (required === null) return null
  const dateKey = lastDayKeyOfMonth(month.key)
  if (dateKey === null) return null // unreachable: targetMonthInfo keys are well-formed
  return {
    mode: 'wordsByDate',
    savedAtDayKey: dayKey(now),
    targetWords,
    targetMonthKey: month.key,
    minutesPerDay: Math.max(MIN_PLAN_MINUTES, roundUpToFive(required)),
    fixedMarks: [{ dateKey, words: targetWords }],
  }
}

/**
 * Build (but do not persist) a mode-B plan: `minutesPerDay`, with the KNOWN
 * forecast frozen at +6/+9/+12 calendar months from the save date. The marks
 * are computed ONCE here — reloading the plan later must show these exact
 * dates and words, however much time has passed.
 */
export function buildMinutesPerDayPlan(
  table: PredictionTable, minutesPerDay: number,
  current: CurrentProgress, now: Date = new Date(),
): MinutesPerDayPlan {
  const today = dayKey(now)
  return {
    mode: 'minutesPerDay',
    savedAtDayKey: today,
    minutesPerDay,
    fixedMarks: MODE_B_MONTHS.map(months => {
      const dateKey = addMonthsToDayKey(today, months)
      return { dateKey, words: knownAfter(table, minutesPerDay, dayKeyDiff(today, dateKey), current) }
    }),
  }
}

function isFiniteNumber(v: unknown): v is number {
  return typeof v === 'number' && Number.isFinite(v)
}

/** Parse + validate the kv JSON. Anything malformed → null (never throws). */
export function parseGoalPlanV2(raw: string | null | undefined): GoalPlanV2 | null {
  if (!raw) return null
  let parsed: unknown
  try { parsed = JSON.parse(raw) } catch { return null }
  if (typeof parsed !== 'object' || parsed === null) return null
  const o = parsed as Record<string, unknown>
  if (typeof o.savedAtDayKey !== 'string' || !DAY_KEY_RE.test(o.savedAtDayKey)) return null
  if (!Array.isArray(o.fixedMarks) || o.fixedMarks.length === 0) return null
  const fixedMarks: FixedMark[] = []
  for (const entry of o.fixedMarks) {
    if (typeof entry !== 'object' || entry === null) return null
    const m = entry as Record<string, unknown>
    if (typeof m.dateKey !== 'string' || !DAY_KEY_RE.test(m.dateKey)) return null
    if (!isFiniteNumber(m.words) || m.words < 0) return null
    fixedMarks.push({ dateKey: m.dateKey, words: m.words })
  }
  if (o.mode === 'minutesPerDay') {
    if (!isFiniteNumber(o.minutesPerDay) || o.minutesPerDay <= 0) return null
    return {
      mode: 'minutesPerDay', savedAtDayKey: o.savedAtDayKey,
      minutesPerDay: o.minutesPerDay, fixedMarks,
    }
  }
  if (o.mode === 'wordsByDate') {
    if (!isFiniteNumber(o.targetWords) || o.targetWords <= 0) return null
    // monthKeyLabel also rejects out-of-range months like '2026-13'
    if (typeof o.targetMonthKey !== 'string' || monthKeyLabel(o.targetMonthKey) === null) return null
    return {
      mode: 'wordsByDate', savedAtDayKey: o.savedAtDayKey,
      targetWords: o.targetWords, targetMonthKey: o.targetMonthKey,
      ...(isFiniteNumber(o.minutesPerDay) && o.minutesPerDay > 0
        ? { minutesPerDay: o.minutesPerDay } : {}),
      fixedMarks,
    }
  }
  return null
}

// ---- plan tracking (on-plan / behind, against the user's MEDIAN pace) ----

export interface MarkStatus extends FixedMark {
  /** whole days from `todayKey` to the mark (≤ 0 = the date has passed) */
  daysFromNow: number
  /** KNOWN forecast on the mark's date at `medianMinutes`; for past marks or
   *  a zero median this is simply the current graduated count (no forecast) */
  projected: number
  /** past marks: actually reached; future marks: the median pace gets there */
  onPlan: boolean
}

/**
 * Evaluate every fixed mark against the user's median pace. The marks
 * themselves are NEVER touched — only `daysFromNow`/`projected` move as time
 * passes, which is exactly the non-rolling behavior the plan promises.
 */
export function planMarkStatuses(
  table: PredictionTable, plan: GoalPlanV2, medianMinutes: number,
  current: CurrentProgress, todayKey: string,
): MarkStatus[] {
  return plan.fixedMarks.map(mark => {
    const daysFromNow = dayKeyDiff(todayKey, mark.dateKey)
    const projected = daysFromNow <= 0 || medianMinutes <= 0
      ? current.graduated
      : knownAfter(table, medianMinutes, daysFromNow, current)
    return { ...mark, daysFromNow, projected, onPlan: projected >= mark.words }
  })
}

/**
 * Extra whole minutes/day ON TOP of the median that close a behind mode-A
 * plan by its deadline (via requiredMinutesPerDay, same table + anchoring).
 * 0 = the median already suffices. null = not closable even at the ceiling.
 */
export function minutesToClosePlan(
  table: PredictionTable, targetWords: number, daysFromNow: number,
  medianMinutes: number, current: CurrentProgress,
): number | null {
  const required = requiredMinutesPerDay(table, targetWords, daysFromNow, current)
  if (required === null) return null
  return Math.max(0, Math.ceil(required - medianMinutes))
}

/**
 * Median minutes/day over the last `windowDays` CALENDAR days ending today —
 * the plan-accountability pace.
 *
 * Documented choice (2026-07-14): UserDB.medianDailyMinutes(N) medians the
 * last N *rows* of day_stats, i.e. listening days only — someone who listens
 * 60 minutes once a week reads as "60 min/day", far too flattering for plan
 * tracking. Here skipped days count as ZERO, with two honesty bounds:
 *   - zero-fill starts at the FIRST-EVER day_stats row (before that the app
 *     wasn't in use — a young install is judged only on the days it has), and
 *   - today only counts once it has a row (a day in progress is not yet a
 *     zero day; every fully elapsed day either has a row or is a real zero).
 * Rows are day_stats (day, seconds); pass them all — the window is cut here.
 */
export function medianDailyMinutesZeroFilled(
  rows: { day: string, seconds: number }[], todayKey: string, windowDays: number = 30,
): number {
  if (rows.length === 0 || windowDays < 1) return 0
  const byDay = new Map(rows.map(r => [r.day, r.seconds]))
  let firstEver = rows[0].day
  for (const r of rows) { if (r.day < firstEver) firstEver = r.day }
  const windowStart = addDaysToKey(todayKey, -(windowDays - 1))
  const start = firstEver > windowStart ? firstEver : windowStart

  const minutes: number[] = []
  for (let d = start; d <= todayKey; d = addDaysToKey(d, 1)) {
    if (d === todayKey && !byDay.has(d)) continue // today in progress
    minutes.push((byDay.get(d) ?? 0) / 60)
  }
  if (minutes.length === 0) return 0
  minutes.sort((a, b) => a - b)
  const mid = Math.floor(minutes.length / 2)
  return minutes.length % 2 === 1 ? minutes[mid] : (minutes[mid - 1] + minutes[mid]) / 2
}

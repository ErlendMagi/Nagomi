// M5 analytics: pure read-only queries over user.db for the Progress screen.
//
// Same SqlDriver pattern as engine/content.ts — runs on expo-sqlite (app) and
// node:sqlite (tests). All day math goes through core/day's 4AM day keys so
// the curve/heatmap agree with streaks and day_stats.
//
// Graduation semantics mirror core/graduation.isGraduated exactly:
//   totalReps >= exposures AND daysSinceFirstHeard >= days (dayKeyDiff-based),
//   with the placement fast-track for word ranks <= fastTrackMaxRank.
// Note the curve is a RETROSPECTIVE approximation: total_reps is the current
// value (we don't store per-day rep history), so a word shows as graduated
// from firstHeardDay + daysThreshold once both thresholds hold today.

import { SRS_CONFIG } from '../core/config'
import type { SqlDriver } from '../core/db'
import { addDaysToKey, dayKey, dayKeyDiff } from '../core/day'
import type { GraduationSettings } from '../core/graduation'

export interface CurvePoint {
  /** 4AM-bounded day key 'YYYY-MM-DD' */
  day: string
  /** cumulative words heard at least once, as of end of this day */
  heard: number
  /** cumulative words graduated (both thresholds met), as of this day */
  graduated: number
}

export type JlptLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1'

export interface JlptBand {
  level: JlptLevel
  /** inclusive frequency-rank range (word_id = frequency rank) */
  minRank: number
  maxRank: number
  /** words in the band's rank range */
  bandSize: number
  graduated: number
  /** heard at least once but not yet graduated */
  inFlight: number
}

export interface HeatCell {
  day: string
  seconds: number
  /** grid column (0 = oldest week) */
  week: number
  /** grid row: 0 = Monday … 6 = Sunday */
  weekday: number
}

export interface GraduationTotals {
  heard: number
  graduated: number
}

/** JLPT frequency-rank bands (locked mapping: word_id = frequency rank). */
export const JLPT_BANDS: { level: JlptLevel, minRank: number, maxRank: number }[] = [
  { level: 'N5', minRank: 1, maxRank: 800 },
  { level: 'N4', minRank: 801, maxRank: 1500 },
  { level: 'N3', minRank: 1501, maxRank: 3700 },
  { level: 'N2', minRank: 3701, maxRank: 6000 },
  { level: 'N1', minRank: 6001, maxRank: 10000 },
]

interface HeardRow { word_id: number, total_reps: number, first_heard_at: number }

function heardRows(user: SqlDriver): HeardRow[] {
  return user.all<HeardRow>(
    'SELECT word_id, total_reps, first_heard_at FROM word_state WHERE total_reps > 0 AND first_heard_at IS NOT NULL')
}

/** per-word thresholds, honoring the placement fast-track (mirrors isGraduated) */
function thresholds(wordId: number, g: GraduationSettings): { reps: number, days: number } {
  const fast = g.fastTrackMaxRank > 0 && wordId <= g.fastTrackMaxRank
  return fast
    ? { reps: SRS_CONFIG.graduation.fastTrack.exposures, days: SRS_CONFIG.graduation.fastTrack.days }
    : { reps: g.exposures, days: g.days }
}

/**
 * Cumulative words-known curve over the last `days` days (ending today).
 * Words first heard BEFORE the window count into the first point's baseline.
 */
export function wordsKnownCurve(
  user: SqlDriver, days: number, graduation: GraduationSettings, now: Date = new Date(),
): CurvePoint[] {
  if (days <= 0) return []
  const endKey = dayKey(now)
  const startKey = addDaysToKey(endKey, -(days - 1))
  const heardDelta = new Array<number>(days).fill(0)
  const gradDelta = new Array<number>(days).fill(0)

  for (const r of heardRows(user)) {
    const firstDay = dayKey(new Date(r.first_heard_at))
    const heardIdx = dayKeyDiff(startKey, firstDay)
    if (heardIdx >= days) continue // heard after the window (clock skew) — ignore
    heardDelta[Math.max(0, heardIdx)]++

    const t = thresholds(r.word_id, graduation)
    if (r.total_reps < t.reps) continue // exposure threshold not met (yet)
    const gradIdx = heardIdx + t.days   // day the days-threshold is satisfied
    if (gradIdx >= days) continue       // graduates after the window end → not shown
    gradDelta[Math.max(0, gradIdx)]++
  }

  const out: CurvePoint[] = []
  let heard = 0
  let graduated = 0
  for (let i = 0; i < days; i++) {
    heard += heardDelta[i]
    graduated += gradDelta[i]
    out.push({ day: addDaysToKey(startKey, i), heard, graduated })
  }
  return out
}

export interface GraduatedWordRow {
  wordId: number
  /** the day the word satisfied BOTH thresholds (firstHeard + days) */
  gradDayKey: string
}

/**
 * The user's graduated words, newest first (user 2026-07-16: "a little button
 * that takes the user into the words they have graduated"). Same predicate as
 * graduationTotals; graduation DATE = first-heard day + the word's days
 * threshold (exactly how wordsKnownCurve places graduations). Paged — callers
 * resolve display text per page via ContentDb.word(); a mature user has
 * thousands of rows and the list must never load them all at once.
 */
export function graduatedWords(
  user: SqlDriver, graduation: GraduationSettings, now: Date = new Date(),
  limit = 50, offset = 0,
): GraduatedWordRow[] {
  const nowKey = dayKey(now)
  const rows: GraduatedWordRow[] = []
  for (const r of heardRows(user)) {
    const t = thresholds(r.word_id, graduation)
    if (r.total_reps < t.reps) continue
    const heardKey = dayKey(new Date(r.first_heard_at))
    if (dayKeyDiff(heardKey, nowKey) < t.days) continue
    rows.push({ wordId: r.word_id, gradDayKey: addDaysToKey(heardKey, t.days) })
  }
  rows.sort((a, b) => a.gradDayKey === b.gradDayKey
    ? a.wordId - b.wordId
    : (a.gradDayKey < b.gradDayKey ? 1 : -1))
  return rows.slice(offset, offset + limit)
}

/**
 * Days until the FIRST word graduates, from the user's ACTUAL word states —
 * not the simulation table (user 2026-07-19: the caption sat at "23 days" for
 * five days; a projection anchored to sim curves barely moves day to day).
 * Per heard word the bound is max(time-gate remaining, reps-gate remaining at
 * the word's own observed reps/day); the answer is the minimum over words, so
 * it visibly ticks down every day the user listens. null = nothing heard yet.
 */
export function daysToFirstGraduation(
  user: SqlDriver, graduation: GraduationSettings, now: Date = new Date(),
): number | null {
  const nowKey = dayKey(now)
  let best: number | null = null
  for (const r of heardRows(user)) {
    if (r.total_reps <= 0) continue
    const t = thresholds(r.word_id, graduation)
    const daysSince = Math.max(0, dayKeyDiff(dayKey(new Date(r.first_heard_at)), nowKey))
    const timeLeft = Math.max(0, t.days - daysSince)
    let repsLeft = 0
    if (r.total_reps < t.reps) {
      // the word's own observed cadence, floored so a single lucky hear
      // yesterday doesn't promise the moon
      const rate = Math.max(0.5, r.total_reps / Math.max(1, daysSince))
      repsLeft = Math.ceil((t.reps - r.total_reps) / rate)
    }
    const d = Math.max(timeLeft, repsLeft)
    if (best === null || d < best) best = d
    if (best === 0) break
  }
  return best === null ? null : Math.max(1, best)
}

/** Graduated / in-flight counts per JLPT frequency band, as of `now`. */
export function jlptBreakdown(
  user: SqlDriver, graduation: GraduationSettings, now: Date = new Date(),
): JlptBand[] {
  const nowKey = dayKey(now)
  const bands: JlptBand[] = JLPT_BANDS.map(b => ({
    ...b, bandSize: b.maxRank - b.minRank + 1, graduated: 0, inFlight: 0,
  }))
  for (const r of heardRows(user)) {
    const band = bands.find(b => r.word_id >= b.minRank && r.word_id <= b.maxRank)
    if (!band) continue // beyond rank 10k — outside the JLPT mapping
    const t = thresholds(r.word_id, graduation)
    const daysSince = dayKeyDiff(dayKey(new Date(r.first_heard_at)), nowKey)
    if (r.total_reps >= t.reps && daysSince >= t.days) band.graduated++
    else band.inFlight++
  }
  return bands
}

/** Overall heard/graduated counts (ALL ranks, not just the JLPT bands). */
export function graduationTotals(
  user: SqlDriver, graduation: GraduationSettings, now: Date = new Date(),
): GraduationTotals {
  const nowKey = dayKey(now)
  let heard = 0
  let graduated = 0
  for (const r of heardRows(user)) {
    heard++
    const t = thresholds(r.word_id, graduation)
    const daysSince = dayKeyDiff(dayKey(new Date(r.first_heard_at)), nowKey)
    if (r.total_reps >= t.reps && daysSince >= t.days) graduated++
  }
  return { heard, graduated }
}

export interface JlptMassBand {
  band: JlptLevel
  /** words in the band's rank range */
  totalWords: number
  /**
   * Filled share of the band's AREA, in [0, 1]:
   *   Σ over band words of min(total_reps, exposures)/exposures ÷ totalWords
   * (exposures per word honors the placement fast-track). Partial repetitions
   * contribute partial mass — the number that visibly climbs on every rep,
   * not a binary heard/graduated count. Unheard words contribute 0.
   */
  massFraction: number
  /** fully graduated (BOTH thresholds: reps AND days — mirrors isGraduated) */
  graduatedWords: number
  /** heard at least once but not yet graduated */
  inProgressWords: number
  /**
   * Every band word has met its EXPOSURE threshold — the area is full. This is
   * deliberately mass-based (no days gate) so `complete` is exactly
   * "massFraction reached 1", float-safe: a full bead row and a 合格 level are
   * the same fact. Drives the progressive unlock of the next band.
   */
  complete: boolean
}

/**
 * Mass-fill view of the JLPT bands, N5→N1: each level is an area whose total
 * mass is all words in the band; accumulated repetitions fill it. Same rank
 * bands and SqlDriver pattern as jlptBreakdown.
 */
export function jlptMass(
  user: SqlDriver, graduation: GraduationSettings, now: Date = new Date(),
): JlptMassBand[] {
  const nowKey = dayKey(now)
  const acc = JLPT_BANDS.map(b => ({
    ...b, totalWords: b.maxRank - b.minRank + 1,
    mass: 0, capped: 0, graduatedWords: 0, inProgressWords: 0,
  }))
  for (const r of heardRows(user)) {
    const a = acc.find(b => r.word_id >= b.minRank && r.word_id <= b.maxRank)
    if (!a) continue // beyond rank 10k — outside the JLPT mapping
    const t = thresholds(r.word_id, graduation)
    a.mass += Math.min(r.total_reps, t.reps) / t.reps
    if (r.total_reps >= t.reps) a.capped++
    const daysSince = dayKeyDiff(dayKey(new Date(r.first_heard_at)), nowKey)
    if (r.total_reps >= t.reps && daysSince >= t.days) a.graduatedWords++
    else a.inProgressWords++
  }
  return acc.map(a => ({
    band: a.level,
    totalWords: a.totalWords,
    massFraction: a.totalWords > 0 ? Math.min(1, a.mass / a.totalWords) : 0,
    graduatedWords: a.graduatedWords,
    inProgressWords: a.inProgressWords,
    complete: a.totalWords > 0 && a.capped >= a.totalWords,
  }))
}

/** Row index for a day key in a Monday-first week grid (0 = Mon … 6 = Sun). */
export function mondayIndex(key: string): number {
  const [y, m, d] = key.split('-').map(Number)
  return (new Date(Date.UTC(y, m - 1, d)).getUTCDay() + 6) % 7
}

/**
 * Listening seconds per day for the last `weeks` weeks, zero-filled and laid
 * out for a GitHub-style grid: the last column is the CURRENT week (ending
 * today), columns start on Monday. The final column is partial — cells after
 * today are simply absent.
 */
export function listeningHeatmap(
  user: SqlDriver, weeks: number, now: Date = new Date(),
): HeatCell[] {
  if (weeks <= 0) return []
  const endKey = dayKey(now)
  const startKey = addDaysToKey(endKey, -((weeks - 1) * 7 + mondayIndex(endKey)))
  const n = dayKeyDiff(startKey, endKey) + 1
  const rows = user.all<{ day: string, seconds: number }>(
    'SELECT day, seconds FROM day_stats WHERE day >= ? AND day <= ?', [startKey, endKey])
  const byDay = new Map(rows.map(r => [r.day, r.seconds] as const))

  const cells: HeatCell[] = []
  for (let i = 0; i < n; i++) {
    const day = addDaysToKey(startKey, i)
    cells.push({ day, seconds: byDay.get(day) ?? 0, week: Math.floor(i / 7), weekday: i % 7 })
  }
  return cells
}

/**
 * Heatmap intensity in real units (never arbitrary quantiles):
 *   0 = nothing · 1 = some listening · 2 = daily minimum met (10 min) ·
 *   3 = a solid day (30+ min).
 */
export function heatLevel(seconds: number): 0 | 1 | 2 | 3 {
  if (seconds <= 0) return 0
  if (seconds < SRS_CONFIG.dailyMinimumMinutes * 60) return 1
  if (seconds < 1800) return 2
  return 3
}

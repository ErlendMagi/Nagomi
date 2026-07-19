// Graduation: when a word's English scaffolding disappears (locked decisions).
//
// A word is GRADUATED when BOTH:
//   totalReps >= exposures threshold  AND  daysSinceFirstHeard >= days threshold.
// Defaults 30/30; user-adjustable within [20..50] / [21..90]; "Safe" preset 40/40.
// Placement fast-track: words inside the user's claimed-known frequency range
// graduate at 6 exposures / 7 days (they still must be verified by exposure —
// never marked known outright).
//
// A LINE plays/shows English only if at least one of its words is not yet
// graduated. Non-verbal lines never have English at all (flagged in data).

import { SRS_CONFIG } from './config'
import type { WordState } from './scheduler'

export interface GraduationSettings {
  exposures: number
  days: number
  /** inclusive upper frequency rank of the user's claimed-known range (0 = none) */
  fastTrackMaxRank: number
}

export function defaultGraduationSettings(): GraduationSettings {
  return {
    exposures: SRS_CONFIG.graduation.defaultExposures,
    days: SRS_CONFIG.graduation.defaultDays,
    fastTrackMaxRank: 0,
  }
}

export function clampGraduationSettings(s: GraduationSettings): GraduationSettings {
  const g = SRS_CONFIG.graduation
  return {
    exposures: Math.min(g.maxExposures, Math.max(g.minExposures, Math.round(s.exposures))),
    days: Math.min(g.maxDays, Math.max(g.minDays, Math.round(s.days))),
    fastTrackMaxRank: Math.max(0, Math.round(s.fastTrackMaxRank)),
  }
}

export function isGraduated(
  state: WordState | undefined,
  daysSinceFirstHeard: number,
  settings: GraduationSettings,
): boolean {
  if (!state || state.totalReps === 0) return false
  const fast = settings.fastTrackMaxRank > 0 && state.wordId <= settings.fastTrackMaxRank
  const needReps = fast ? SRS_CONFIG.graduation.fastTrack.exposures : settings.exposures
  const needDays = fast ? SRS_CONFIG.graduation.fastTrack.days : settings.days
  return state.totalReps >= needReps && daysSinceFirstHeard >= needDays
}

/**
 * Should this line's English (audio + text) be skipped?
 * `graduatedFn` answers per word-id — caller closes over its state store.
 */
export function shouldSkipEnglish(
  lineWords: number[],
  nonverbal: boolean,
  graduatedFn: (wordId: number) => boolean,
): boolean {
  if (nonverbal) return true
  if (lineWords.length === 0) return false // no vocab info → keep scaffolding
  return lineWords.every(graduatedFn)
}

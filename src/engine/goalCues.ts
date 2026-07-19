// In-session progress cues toward the daily goal (user 2026-07-16: long
// sessions are draining — announce quarter / half / three-quarters / ten-
// minutes-left). PURE planner: the hook detects minute crossings per sentence
// and plays the chosen cue at the next conversation boundary (never over
// speech). Cues are spoken Japanese prefixed by a short attention chime
// (user-chosen) — the cue itself is a tiny listening lesson: 「半分！」 is
// learned by day three.

export type CueId = 'q1' | 'half' | 'q3' | 'm10'

export const CUE_ORDER: CueId[] = ['q1', 'half', 'q3', 'm10']

/** kv key: JSON {day: dayKey, fired: CueId[]} — resets naturally at 4AM */
export const CUES_FIRED_KV_KEY = 'goal_cues_fired'

/**
 * Minute thresholds for each cue at a given goal. m10 ("あと10分") is
 * suppressed for short goals (≤ 20 min: the announcements would dominate the
 * session) and when it would land within 2 minutes of q3 or of the goal
 * itself — two announcements in one breath is spam, and "10 minutes left"
 * seconds before the goal-done celebration is noise.
 */
export function cueThresholds(goalMinutes: number): Map<CueId, number> {
  const t = new Map<CueId, number>()
  if (goalMinutes <= 0) return t
  t.set('q1', goalMinutes * 0.25)
  t.set('half', goalMinutes * 0.5)
  t.set('q3', goalMinutes * 0.75)
  const m10 = goalMinutes - 10
  if (goalMinutes > 20 && Math.abs(m10 - goalMinutes * 0.75) > 2 && m10 <= goalMinutes - 2) {
    t.set('m10', m10)
  }
  return t
}

/**
 * The single cue to play for a minutes movement prev → next (0..goal scale),
 * or null. When one long conversation jumps several thresholds at once, only
 * the LATEST (most informative) fires — announcing "quarter" after already
 * passing "half" would be nonsense. Already-fired cues (today) never repeat.
 */
export function nextCue(
  prevMinutes: number,
  newMinutes: number,
  goalMinutes: number,
  firedToday: ReadonlySet<CueId>,
): CueId | null {
  if (newMinutes <= prevMinutes) return null
  const thresholds = cueThresholds(goalMinutes)
  let best: CueId | null = null
  for (const id of CUE_ORDER) {
    const at = thresholds.get(id)
    if (at === undefined) continue
    if (firedToday.has(id)) continue
    if (prevMinutes < at && newMinutes >= at) best = id // keep the LATEST crossed
  }
  // never announce progress once the goal itself is reached — the goal-done
  // celebration owns that moment
  if (best !== null && newMinutes >= goalMinutes) return null
  return best
}

/** tolerant parse of the CUES_FIRED_KV_KEY blob for `todayKey` */
export function parseFiredCues(raw: string | null | undefined, todayKey: string): Set<CueId> {
  if (!raw) return new Set()
  try {
    const parsed = JSON.parse(raw) as { day?: string, fired?: unknown }
    if (parsed?.day !== todayKey || !Array.isArray(parsed.fired)) return new Set()
    return new Set(parsed.fired.filter((c): c is CueId => CUE_ORDER.includes(c as CueId)))
  } catch {
    return new Set()
  }
}

export function serializeFiredCues(todayKey: string, fired: ReadonlySet<CueId>): string {
  return JSON.stringify({ day: todayKey, fired: [...fired] })
}

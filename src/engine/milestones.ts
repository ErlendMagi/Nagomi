// Lifetime word-count milestones (user 2026-07-18: "fun animations … when
// reaching 100 words listened to, 1000, 2000 … 10 000+ … sound effects too
// on the bigger achievements"). PURE: detection + policy only; the hook
// fires them at conversation boundaries so they never overlap content, and
// settings.milestoneEffects (Advanced) turns the whole thing off.

/** celebration thresholds over CUMULATIVE distinct words heard */
export const MILESTONES: readonly number[] = [
  100, 500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
  12500, 15000, 17500, 19395,
]

/** the big ones additionally play the milestone sound */
export const SOUND_MILESTONES: ReadonlySet<number> = new Set([1000, 5000, 10000, 15000, 19395])

/** kv key: highest threshold already celebrated (never re-fires) */
export const MILESTONE_KV_KEY = 'milestone_celebrated'

/**
 * The single milestone to celebrate now: the HIGHEST uncelebrated threshold
 * at or below `heardNow` (a giant session that blasts through several fires
 * only the top one — one moment, not a queue of interruptions), or null.
 */
export function milestoneToCelebrate(heardNow: number, celebratedUpTo: number): number | null {
  let best: number | null = null
  for (const m of MILESTONES) {
    if (m <= heardNow && m > celebratedUpTo) best = m
  }
  return best
}

export function parseCelebratedUpTo(raw: string | null | undefined): number {
  const n = Number(raw)
  return Number.isFinite(n) && n > 0 ? n : 0
}

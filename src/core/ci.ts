// Comprehensible-input ("CI") comfort — PURE math for the picker's
// known-ratio preference (user-approved 2026-07-15).
//
// The target ratio ADAPTS to vocabulary size: corpus measurements show the
// new-content level window cannot reach 80%-known before ≈8,000 known ranks
// (a 2,000-word learner's window medians ~0.65), so the target follows the
// measured achievable curve and the user's hard 80%-min contract binds
// automatically once knownCount ≥ hardKnownCount. The factor is SOFT — a
// low-ratio conversation is discounted, never banned, so rare-word context
// variety survives (user directive).

import { SRS_CONFIG } from './config'

export interface CiComfortConfig {
  knownReps: number
  minFactor: number
  rampWidth: number
  hardKnownCount: number
  hardMinRatio: number
  anchors: ReadonlyArray<readonly [number, number]>
}

/**
 * Adaptive target ratio for a learner who CI-knows `knownCount` words.
 * Piecewise-linear over the measured anchors; clamped at both ends; at and
 * beyond hardKnownCount the target is the user's hard minimum (0.80).
 */
export function ciTargetFor(
  knownCount: number, cfg: CiComfortConfig = SRS_CONFIG.picker.ciComfort,
): number {
  if (knownCount >= cfg.hardKnownCount) return cfg.hardMinRatio
  const a = cfg.anchors
  if (a.length === 0) return cfg.hardMinRatio
  if (knownCount <= a[0][0]) return a[0][1]
  for (let i = 1; i < a.length; i++) {
    if (knownCount <= a[i][0]) {
      const [x0, y0] = a[i - 1]
      const [x1, y1] = a[i]
      const f = (knownCount - x0) / (x1 - x0)
      return y0 + f * (y1 - y0)
    }
  }
  return a[a.length - 1][1]
}

/**
 * Score multiplier for a conversation with known-ratio `ratio` against
 * `target`: 1.0 at/above target, linear down to minFactor at target−rampWidth,
 * floored (never zero — variety preserved). Unknown ratio (no data yet, e.g.
 * fresh install or simulator cold start) = no penalty.
 */
export function ciComfortFactor(
  ratio: number | undefined, target: number,
  cfg: CiComfortConfig = SRS_CONFIG.picker.ciComfort,
): number {
  if (ratio === undefined || !Number.isFinite(ratio)) return 1
  if (ratio >= target) return 1
  const deficit = Math.min(cfg.rampWidth, target - ratio)
  return 1 - (1 - cfg.minFactor) * (deficit / cfg.rampWidth)
}

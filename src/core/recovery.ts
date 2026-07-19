// Review-backlog recovery ("welcome back" mode) — PURE logic, importable by
// the app and the simulator alike.
//
// The problem (user framing 2026-07-14): Anki-style review hell after days or
// weeks away. The design (user-approved):
//  1. Measure the GAP EXCESS — only words that came due DURING the absence.
//     A standing due pool is normal life and never triggers anything.
//  2. FIT-TODAY-FIRST: find the MINIMAL urgency u whose speed ladder clears
//     the excess within today's goal minutes. The ladder (composed in
//     `speedFactor`): recovery picker weights → aggressive EN-skip →
//     EN audio rate 1.0+0.5·u (cap 1.5×) → at u ≥ introDropThreshold the EN
//     intro narration is dropped (the previous conversation's closing chime
//     still marks the boundary, so a sound keeps announcing each new one).
//     JAPANESE AUDIO IS NEVER RATE-SHIFTED.
//  3. Only when even u=1 cannot fit today: spread over 2..maxHorizonDays via
//     fragility-ordered TIER SLICING — postpone the most stable words (their
//     recall barely decays), rescue the fragile first. word_state.due_at is
//     NEVER written: slicing is a selection-layer ordering over the
//     4AM-materialized due set (locked rule preserved). Listening stays
//     UNCAPPED: when tier-1 empties, tier-2 flows (never blocks a session).
//  4. Reassessed from scratch each 4AM day — self-correcting, idempotent.

import { SRS_CONFIG } from './config'
import type { ContentIndex, PickerContext } from './picker'
import { pickNextConversation } from './picker'

export interface DueEntry {
  wordId: number
  dueAtMs: number
  stability: number
  /** picker dueness weight (>= 1 for real dues) */
  weight: number
}

export interface RecoveryConfig {
  minGapDays: number
  triggerFactor: number
  exitFactor: number
  minHorizonDays: number
  maxHorizonDays: number
  enRateMax: number
  introDropThreshold: number
  enSkipGraduatedFraction: number
  pickerGainFactor: number
  assess: { maxAssessMinutes: number, convOverheadSec: number }
  picker: { repeatContextDiscount: number, recentConvPenalty: number, durationExponent: number }
}

export interface RecoveryPlan {
  active: boolean
  /** 0 = off; (0,1] = ladder position */
  urgency: number
  gapDays: number
  excessCount: number
  estExcessMinutes: number
  /** 1 = fits today; 2..maxHorizonDays = spread */
  horizonDays: number
  planMinutesPerDay: number
  /** EN clips only — 1.0 when inactive */
  enPlaybackRate: number
  /** replace EN intro narration with the chime alone */
  dropEnIntro: boolean
  /** measured dues cleared per minute during assessment (0 when unassessed) */
  duesPerMinute: number
}

export const INACTIVE_PLAN: RecoveryPlan = {
  active: false, urgency: 0, gapDays: 0, excessCount: 0, estExcessMinutes: 0,
  horizonDays: 1, planMinutesPerDay: 0, enPlaybackRate: 1, dropEnIntro: false,
  duesPerMinute: 0,
}

/**
 * The backlog that matters: words whose due date fell INSIDE the absence
 * window (lastSessionEnd, dayStart]. Words due before the gap are the normal
 * standing pool; words due after day-start aren't due yet.
 */
export function gapExcess(
  dues: DueEntry[], lastSessionEndMs: number, dayStartMs: number,
): { excess: DueEntry[], standing: DueEntry[] } {
  const excess: DueEntry[] = []
  const standing: DueEntry[] = []
  for (const d of dues) {
    if (d.dueAtMs > lastSessionEndMs && d.dueAtMs <= dayStartMs) excess.push(d)
    else standing.push(d)
  }
  return { excess, standing }
}

/**
 * Combined speed factor of the urgency ladder at position u (vs normal-mode
 * throughput). Composition:
 *  - recovery picker selection gain: flat once active (measured 15-20%)
 *  - EN handling: at urgency u a fraction of EN time is saved — modeled as
 *    the EN share of playthrough (~0.45) scaled by how hard the ladder cuts
 *    it: skip/rate/intro-drop combine into up to ~70% of EN time at u=1.
 * Deliberately conservative — the daily reassessment self-corrects.
 */
export function speedFactor(u: number, cfg: RecoveryConfig = SRS_CONFIG.recovery): number {
  if (u <= 0) return 1
  const uu = Math.min(1, u)
  const EN_SHARE = 0.45
  const rateGain = (1 - 1 / (1 + (cfg.enRateMax - 1) * uu)) // time saved on played EN
  const skipGain = 0.45 * uu                                 // EN lines skipped outright
  const introGain = uu >= cfg.introDropThreshold ? 0.10 : 0  // EN intros dropped
  const enCut = Math.min(0.75, skipGain + rateGain * (1 - skipGain) + introGain)
  return cfg.pickerGainFactor * (1 / (1 - EN_SHARE * enCut))
}

/** EN playback rate at urgency u (JP is NEVER rate-shifted) */
export function enRateAt(u: number, cfg: RecoveryConfig = SRS_CONFIG.recovery): number {
  if (u <= 0) return 1
  return Math.min(cfg.enRateMax, 1 + (cfg.enRateMax - 1) * Math.min(1, u))
}

/**
 * Fit-today-first urgency plan.
 *  - excess fits the goal at u=0 → inactive (normal defenses suffice).
 *  - else: minimal u (searched in 0.05 steps) with estMinutes/speedFactor(u)
 *    ≤ goalMinutes → horizon 1 at that urgency.
 *  - else: u=1 and horizon = clamp(ceil(est/(factor(1)·goal)), min..max).
 */
export function urgencyPlan(
  estExcessMinutes: number, goalMinutes: number, gapDays: number, excessCount: number,
  duesPerMinute: number, cfg: RecoveryConfig = SRS_CONFIG.recovery,
): RecoveryPlan {
  const goal = Math.max(1, goalMinutes)
  if (gapDays < cfg.minGapDays || estExcessMinutes <= cfg.triggerFactor * goal) {
    return INACTIVE_PLAN
  }
  for (let u = 0.05; u <= 1.0001; u += 0.05) {
    if (estExcessMinutes / speedFactor(u, cfg) <= goal) {
      const uu = Math.round(u * 100) / 100
      return {
        active: true, urgency: uu, gapDays, excessCount, estExcessMinutes,
        horizonDays: 1, planMinutesPerDay: goal,
        enPlaybackRate: enRateAt(uu, cfg), dropEnIntro: uu >= cfg.introDropThreshold,
        duesPerMinute,
      }
    }
  }
  const days = Math.min(
    cfg.maxHorizonDays,
    Math.max(cfg.minHorizonDays, Math.ceil(estExcessMinutes / (speedFactor(1, cfg) * goal))),
  )
  return {
    active: true, urgency: 1, gapDays, excessCount, estExcessMinutes,
    horizonDays: days,
    planMinutesPerDay: Math.ceil(estExcessMinutes / (speedFactor(1, cfg) * days)),
    enPlaybackRate: enRateAt(1, cfg), dropEnIntro: cfg.introDropThreshold <= 1,
    duesPerMinute,
  }
}

/**
 * Dry-run the REAL picker over the excess-weighted due set to estimate
 * clear-minutes (respects corpus overlap structure — a due-dense conversation
 * clears many at once). Estimation honesty: durations are exact, EN-skip is
 * conv-granular → treat as ±25%; the daily re-plan self-corrects.
 */
export function estimateClearMinutes(
  index: ContentIndex,
  excess: DueEntry[],
  lastPlayed: Map<string, number>,
  frontierOrd: number,
  now: Date,
  cfg: RecoveryConfig = SRS_CONFIG.recovery,
): { minutes: number, duesPerMinute: number } {
  const remaining = new Map(excess.map(e => [e.wordId, e.weight]))
  const total = remaining.size
  let played = new Map(lastPlayed)
  let seconds = 0
  let guard = 0
  while (remaining.size > 0 && guard++ < 500 && seconds < cfg.assess.maxAssessMinutes * 60) {
    const pick = pickNextConversation(index, {
      now, dueWeights: remaining, lastPlayed: played, frontierOrd,
      pickerParams: cfg.picker,
    })
    if (!pick || pick.reason === 'new' || pick.reason === 'recycle') break
    const meta = index.convMeta(pick.convId)
    seconds += meta.durationSec + cfg.assess.convOverheadSec
    // the picked conversation clears every remaining word it contains
    const hits = index.convsContaining([...remaining.keys()]).get(pick.convId) ?? []
    for (const w of hits) remaining.delete(w)
    if (hits.length === 0) break // defensive: a pick that clears nothing would loop
    played = new Map(played).set(pick.convId, now.getTime())
  }
  const minutes = Math.ceil(seconds / 60)
  const cleared = total - remaining.size
  return { minutes, duesPerMinute: minutes > 0 ? cleared / minutes : 0 }
}

/**
 * Deterministic triage order: most fragile first (lowest projected recall
 * after `horizonDays` more days of waiting), wordId tiebreak. Same inputs →
 * same order → idempotent within a day.
 */
export function fragilityOrder(
  excess: DueEntry[], nowMs: number, horizonDays: number,
  projectR: (stability: number, elapsedDays: number) => number,
): DueEntry[] {
  const scored = excess.map(e => {
    const elapsed = Math.max(0, (nowMs - e.dueAtMs) / 86_400_000) + horizonDays
    return { e, r: projectR(Math.max(0.1, e.stability), elapsed) }
  })
  scored.sort((a, b) => a.r - b.r || a.e.wordId - b.e.wordId)
  return scored.map(s => s.e)
}

/** Today's slice (tier 1) vs postponed (tier 2). Uncapped listening flows into tier 2. */
export function splitTiers(
  ordered: DueEntry[], duesPerMinute: number, planMinutes: number,
): { tier1: Set<number>, tier2: Set<number> } {
  const k = Math.max(1, Math.ceil(Math.max(0.5, duesPerMinute) * planMinutes))
  return {
    tier1: new Set(ordered.slice(0, k).map(e => e.wordId)),
    tier2: new Set(ordered.slice(k).map(e => e.wordId)),
  }
}

/** exit condition (hysteresis): remaining excess is now a light day */
export function shouldExit(
  remainingExcessMinutes: number, goalMinutes: number,
  cfg: RecoveryConfig = SRS_CONFIG.recovery,
): boolean {
  return remainingExcessMinutes <= cfg.exitFactor * Math.max(1, goalMinutes)
}

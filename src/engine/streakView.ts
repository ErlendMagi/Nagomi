// Pure view-model helpers for the streak card (M6). UI-free so jest can
// exercise them directly; StreakCard only renders what this module derives.
//
// Persistence contract (matches engine/session.ts convCompleted): the streak
// lives as a single JSON blob in user.db via UserDB.saveStreak/loadStreak,
// and an absent/corrupt blob means "fresh streak" (createStreak).

import { SRS_CONFIG } from '../core/config'
import { canRepair, createStreak, type StreakState } from '../core/streak'

export interface StreakView {
  count: number
  freezes: number
  /** inventory cap (config) — the card shows "❄ × N (max M)" */
  maxFreezes: number
  /** days of streak still to go until the next recurring freeze grant */
  daysToNextFreeze: number
  /** true when the inventory is full — the "next freeze" hint hides */
  freezesFull: boolean
  /** core/streak.canRepair for today */
  repairable: boolean
  /** streak length a repair would restore (brokenCount + days since break) */
  repairedCount: number
}

/** Tolerant load: missing row or bad JSON → fresh state, old blobs backfilled. */
export function parseStreak(raw: string | null | undefined): StreakState {
  if (!raw) return createStreak()
  try {
    return { ...createStreak(), ...JSON.parse(raw) }
  } catch {
    return createStreak()
  }
}

/** Streak days remaining until the next recurring freeze grant (7, 14, 21…).
 *  At an exact multiple the grant just happened → a full period remains. */
export function daysToNextFreeze(count: number): number {
  const every = SRS_CONFIG.streak.freezeEveryDays
  const rem = count % every
  return every - rem
}

export function buildStreakView(s: StreakState, todayKey: string): StreakView {
  return {
    count: s.count,
    freezes: s.freezes,
    maxFreezes: SRS_CONFIG.streak.maxFreezes,
    daysToNextFreeze: daysToNextFreeze(s.count),
    freezesFull: s.freezes >= SRS_CONFIG.streak.maxFreezes,
    repairable: canRepair(s, todayKey),
    repairedCount: s.brokenCount + s.count,
  }
}

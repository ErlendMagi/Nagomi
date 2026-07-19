// Streak engine (locked decisions):
//  - Streak survives a day when >= 1 conversation was COMPLETED that day
//    (decoupled from listening goals per Duolingo decoupling research).
//  - Freezes auto-apply to missed days. Economy (user 2026-07-16): start
//    with 1, earn +1 every freezeEveryDays consecutive streak days (7, 14,
//    21, …), inventory hard-capped at maxFreezes (2) — grants beyond the cap
//    evaporate. Replaced the old one-time {30/100/365} milestone grants.
//  - One repair window: a fully broken streak can be repaired within
//    repairWindowDays by completing a conversation and invoking repair.
//  - Day = 4AM-local boundary, same as SRS (consistency requirement).

import { SRS_CONFIG } from './config'
import { dayKeyDiff } from './day'

export interface StreakState {
  count: number
  lastDayKey: string | null      // last day the streak was extended
  freezes: number
  /** set when a break happened and repair is still possible */
  brokenAtDayKey: string | null
  brokenCount: number            // streak length at break (what repair restores)
  milestonesGranted: number[]    // milestone day-counts already awarded
}

export function createStreak(): StreakState {
  return {
    count: 0,
    lastDayKey: null,
    freezes: Math.min(SRS_CONFIG.streak.freezesGrantedAtStart, SRS_CONFIG.streak.maxFreezes),
    brokenAtDayKey: null,
    brokenCount: 0,
    // legacy field (old one-time milestone grants) — kept so persisted blobs
    // from earlier builds keep parsing; no longer read or written
    milestonesGranted: [],
  }
}

export interface StreakEvent {
  kind: 'extended' | 'same_day' | 'freezes_used' | 'broken' | 'started'
  freezesSpent?: number
  newMilestoneFreezes?: number
}

/** Call when a conversation is COMPLETED on `todayKey`. */
export function onConversationCompleted(s: StreakState, todayKey: string): { state: StreakState, event: StreakEvent } {
  if (s.lastDayKey === null) {
    const state = { ...s, count: 1, lastDayKey: todayKey }
    return { state, event: { kind: 'started' } }
  }
  if (s.lastDayKey === todayKey) {
    return { state: s, event: { kind: 'same_day' } }
  }

  const gap = dayKeyDiff(s.lastDayKey, todayKey) - 1 // full missed days between
  if (gap <= 0) {
    const state = grantRecurringFreezes({ ...s, count: s.count + 1, lastDayKey: todayKey, brokenAtDayKey: null }, s.count)
    return { state, event: { kind: 'extended', newMilestoneFreezes: state.freezes - s.freezes } }
  }

  if (gap <= s.freezes) {
    // freezes auto-cover the gap
    const state = grantRecurringFreezes({
      ...s,
      freezes: s.freezes - gap,
      count: s.count + 1,
      lastDayKey: todayKey,
      brokenAtDayKey: null,
    }, s.count)
    return { state, event: { kind: 'freezes_used', freezesSpent: gap, newMilestoneFreezes: state.freezes - (s.freezes - gap) } }
  }

  // broken — start over, but record repairability
  const state: StreakState = {
    ...s,
    count: 1,
    lastDayKey: todayKey,
    brokenAtDayKey: todayKey,
    brokenCount: s.count,
  }
  return { state, event: { kind: 'broken' } }
}

/** Repair a recent break (one-tap, no purchase — locked: motivating, not punishing). */
export function canRepair(s: StreakState, todayKey: string): boolean {
  return s.brokenAtDayKey !== null &&
    dayKeyDiff(s.brokenAtDayKey, todayKey) <= SRS_CONFIG.streak.repairWindowDays
}

export function repair(s: StreakState, todayKey: string): StreakState {
  if (!canRepair(s, todayKey)) return s
  return {
    ...s,
    count: s.brokenCount + s.count, // restored streak + days earned since break
    brokenAtDayKey: null,
    brokenCount: 0,
  }
}

/**
 * Recurring freeze economy (user 2026-07-16): crossing each multiple of
 * freezeEveryDays (7, 14, 21, …) earns +1 freeze, clamped to maxFreezes.
 * `prevCount` is the streak length BEFORE this extension — a freeze-covered
 * gap still moves count by exactly 1, so at most one boundary is crossed per
 * extension, but the floor-difference form stays correct regardless.
 */
function grantRecurringFreezes(s: StreakState, prevCount: number): StreakState {
  const { freezeEveryDays, maxFreezes } = SRS_CONFIG.streak
  const earned = Math.floor(s.count / freezeEveryDays) - Math.floor(prevCount / freezeEveryDays)
  if (earned <= 0) return s
  return { ...s, freezes: Math.min(maxFreezes, s.freezes + earned) }
}

// Evening streak-saver reminder (M6, last task) — PURE planning layer.
//
// Design: expo-notifications can't evaluate conditions at fire time, so we
// never schedule a "smart" notification. Instead, every time the app has a
// chance to think (session end, app foreground), it cancels everything and
// re-schedules one one-shot notification per upcoming evening:
//   - today's slot is skipped when a conversation was already completed today
//     (streak semantics: one completed conversation saves the day) or when the
//     slot time has already passed;
//   - at most HORIZON_DAYS future slots, so a user who walks away stops being
//     nagged after a week (good manners > retention).
// The impure expo-notifications glue lives in streakReminderNative.ts; this
// module is date math + copy only, so jest covers it without native mocks.

import { dayKey, dayKeyDiff } from '../core/day'
import type { StreakState } from '../core/streak'

export const REMINDER_HORIZON_DAYS = 7

export interface ReminderOpts {
  hour: number      // local wall-clock hour of the evening slot
  minute: number
}

export const DEFAULT_REMINDER: ReminderOpts = { hour: 19, minute: 30 }

// ---- adaptive timing (user 2026-07-18: "the time of the notification
// should come depending on the usage pattern of the listener … if the user
// uses the app AFTER when the notification comes out usually, then adapt it
// to the median usage") ----

/** kv key: JSON {dayKey: minutesOfDay} of each day's FIRST play press */
export const FIRST_PLAY_KV_KEY = 'usage_first_play'
/** rolling window of days kept for the median */
export const FIRST_PLAY_KEEP_DAYS = 14
/** never nag past this (deep-evening notifications read as spam) */
export const REMINDER_LATEST_MINUTES = 22 * 60

/** record today's first play (no-op if today already recorded); prunes old days */
export function recordFirstPlay(raw: string | null | undefined, todayKey: string, minutesOfDay: number): string {
  let map: Record<string, number> = {}
  try { map = JSON.parse(raw ?? '{}') ?? {} } catch { map = {} }
  if (map[todayKey] === undefined) map[todayKey] = Math.round(minutesOfDay)
  const days = Object.keys(map).sort()
  for (const d of days.slice(0, Math.max(0, days.length - FIRST_PLAY_KEEP_DAYS))) delete map[d]
  return JSON.stringify(map)
}

/** median first-play minutes-of-day, or null with no history */
export function medianFirstPlayMinutes(raw: string | null | undefined): number | null {
  let map: Record<string, number> = {}
  try { map = JSON.parse(raw ?? '{}') ?? {} } catch { return null }
  const vals = Object.values(map).filter(v => Number.isFinite(v)).sort((a, b) => a - b)
  if (vals.length === 0) return null
  return vals[Math.floor(vals.length / 2)]
}

/**
 * The reminder slot for this listener: the 19:30 default for early-day
 * listeners (a catch-up nudge), but a listener whose usual first play is
 * LATER than 19:30 gets the reminder at their own median time instead —
 * "you usually listen around now" beats "it is evening". Clamped to 22:00.
 */
export function adaptiveReminderTime(medianMinutes: number | null): ReminderOpts {
  const base = DEFAULT_REMINDER.hour * 60 + DEFAULT_REMINDER.minute
  const at = medianMinutes !== null && medianMinutes > base
    ? Math.min(Math.round(medianMinutes / 5) * 5, REMINDER_LATEST_MINUTES)
    : base
  return { hour: Math.floor(at / 60), minute: at % 60 }
}

/**
 * The upcoming reminder slots to schedule, oldest first.
 * `doneTodayKey` — when it equals today's 4AM-boundary day key, today needs
 * no reminder and its slot is skipped. (Semantics 2026-07-18: callers pass
 * today's key when the LISTENING GOAL is met — the single notification this
 * app sends is "your goal is in danger", nothing else.)
 */
export function planReminderSlots(
  now: Date,
  doneTodayKey: string | null,
  opts: ReminderOpts = DEFAULT_REMINDER,
): Date[] {
  const slots: Date[] = []
  const todayKey = dayKey(now)
  for (let d = 0; slots.length < REMINDER_HORIZON_DAYS && d <= REMINDER_HORIZON_DAYS; d++) {
    const slot = new Date(now.getFullYear(), now.getMonth(), now.getDate() + d, opts.hour, opts.minute, 0, 0)
    if (slot.getTime() <= now.getTime()) continue            // already passed
    if (dayKey(slot) === todayKey && doneTodayKey === todayKey) continue // today already saved
    slots.push(slot)
  }
  return slots
}

/**
 * The streak count a conversation completed TODAY would actually keep alive —
 * 0 when the streak is already beyond saving (missed days exceed freezes, so
 * core/streak.onConversationCompleted would reset to 1). The stored blob only
 * updates on completion, so the raw count can describe a long-dead streak;
 * citing that number in a notification would be a lie.
 */
export function savableStreakCount(s: Pick<StreakState, 'count' | 'lastDayKey' | 'freezes'>, todayKey: string): number {
  if (!s.lastDayKey || s.count <= 0) return 0
  if (s.lastDayKey === todayKey) return s.count
  const gap = dayKeyDiff(s.lastDayKey, todayKey) - 1   // full missed days between
  return gap <= s.freezes ? s.count : 0
}

export interface ReminderContent {
  title: string
  body: string
}

/**
 * Copy for the slot at index `i` of the plan. Only the FIRST slot may cite the
 * current streak count — by later days the count has moved (or broken), so
 * those stay generic rather than risk telling the user a wrong number.
 */
export function reminderContent(i: number, streakCount: number, goalMinutes = 0): ReminderContent {
  const goalBit = goalMinutes > 0 ? `Your ${goalMinutes}-minute goal is still open today` : 'Your listening goal is still open today'
  if (i === 0 && streakCount > 0) {
    return {
      title: 'Your goal is in danger 🎧',
      body: `${goalBit} — and one conversation keeps your ${streakCount}-day streak alive.`,
    }
  }
  return {
    title: 'Your goal is in danger 🎧',
    body: `${goalBit}. A few quiet minutes of Japanese?`,
  }
}

// "All reviews done" celebration (user request 2026-07-16) — pure decision.
//
// Fires at a CONVERSATION BOUNDARY (the exact-refresh moment: dueTodayCount
// is authoritative there, and the closing chime has just played so the sound
// lands in the inter-conversation gap, never over speech), at most once per
// 4AM-day, and only on days that actually HAD waiting reviews — finishing a
// queue of zero is not an achievement worth a fanfare.

/** kv key holding the last dayKey a celebration fired */
export const CELEBRATED_KV_KEY = 'reviews_celebrated_day'

export function shouldCelebrate(
  /** true once any waiting-count observation today was > 0 */
  sawWaitingToday: boolean,
  /** authoritative dueTodayCount at this conversation boundary */
  waitingNow: number,
  /** kv value of CELEBRATED_KV_KEY (dayKey of the last celebration) */
  celebratedDayKey: string | null | undefined,
  todayKey: string,
): boolean {
  return sawWaitingToday && waitingNow === 0 && celebratedDayKey !== todayKey
}

// ---- daily-goal-done celebration (user 2026-07-16: "after I have completed
// my daily goal, it is important that I can clearly see that today's goal is
// done somehow. Do it in the most dopamine way.") ----

/** kv key holding the last dayKey the GOAL celebration fired */
export const GOAL_CELEBRATED_KV_KEY = 'goal_celebrated_day'

/**
 * The full-screen 達成 moment seals the WHOLE day (user 2026-07-18: finishing
 * the minutes with reviews still waiting "is not a success" — dues come
 * first). It fires at a conversation boundary when BOTH are true: the time
 * goal is met AND the due-review queue is empty; once per 4AM-day. No edge
 * detection needed — both inputs are re-derivable at any boundary, so a
 * crash between earning and celebrating can never lose the moment.
 */
export function shouldCelebrateSealedDay(
  minutesToday: number,
  goalMinutes: number,
  reviewsWaiting: number,
  celebratedDayKey: string | null | undefined,
  todayKey: string,
): boolean {
  if (goalMinutes <= 0) return false
  return minutesToday >= goalMinutes && reviewsWaiting === 0 && celebratedDayKey !== todayKey
}

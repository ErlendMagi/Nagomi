// Evening streak-saver reminder — the impure expo-notifications glue around
// engine/streakReminder.ts (pure planner). Jest note: this file IS reachable
// from suites that render PlayScreen (via useSession), so suites doing that
// must mock this module (see screens/__tests__/cliptext.test.ts); nothing here
// may run native code at module scope.
//
// Strategy (see planner header): cancel-everything-and-reschedule, called from
// every point where "is today saved?" can change — app start (mount),
// conversation completion, the Settings toggle. Idempotent and cheap (≤7
// one-shot DATE triggers). This also self-heals the force-stop case: Android
// drops a force-stopped app's alarms, and the next launch re-schedules.
// There is deliberately NO AppState listener: a long-lived background process
// only changes the plan through conv completions, which reschedule themselves.
//
// Android 14 note (verified in expo-notifications 56 source): without
// SCHEDULE_EXACT_ALARM the library silently falls back to inexact alarms —
// minutes of drift, exactly right for a gentle evening nudge, so we
// deliberately declare no extra permissions.
//
// FUTURE: cancelAllScheduledNotificationsAsync wipes EVERY scheduled
// notification in the app. Fine while this is the only notification feature;
// the first additional one (download-complete, milestone) must switch this to
// getAllScheduledNotificationsAsync + cancel only our channel's identifiers.

import * as Notifications from 'expo-notifications'
import { dayKey } from '../core/day'
import {
  planReminderSlots, reminderContent, DEFAULT_REMINDER, type ReminderOpts,
} from './streakReminder'

const CHANNEL_ID = 'streak-reminder'

/** optional telemetry sink (useSession passes its LAN appLog) */
export type ReminderLog = (event: Record<string, unknown>) => void

let initialized = false
async function ensureInit(): Promise<void> {
  if (initialized) return
  // channel must exist BEFORE the Android 13+ permission prompt can appear
  await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
    name: 'Evening streak reminder',
    importance: Notifications.AndroidImportance.DEFAULT,
    vibrationPattern: [0, 100],
  })
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  })
  initialized = true
}

/** Ask for POST_NOTIFICATIONS (no-op when already granted/denied-forever). */
export async function ensureReminderPermission(): Promise<boolean> {
  try {
    await ensureInit()
    const cur = await Notifications.getPermissionsAsync()
    if (cur.granted) return true
    if (!cur.canAskAgain) return false
    return (await Notifications.requestPermissionsAsync()).granted
  } catch {
    return false
  }
}

// ---- serialization: reschedules must never interleave --------------------
// Each call is ~8 sequential native round-trips (cancelAll + up to 7
// schedules). Two overlapping calls interleave as A:cancel B:cancel A:7 B:7 →
// 14 alarms, every evening fires twice. A promise chain serializes them and a
// generation token makes stale queued calls no-ops ("latest wins").
let gen = 0
let chain: Promise<void> = Promise.resolve()

// identical-plan skip: after the first heard completion of a day every further
// completion would produce the exact same schedule — don't churn the alarms.
let lastPlanKey: string | null = null

/**
 * Drop every scheduled reminder and lay out the next week of evening slots.
 * `doneTodayKey` = streak.lastDayKey (today's slot is skipped when it matches
 * today). Safe to call often; never throws (a reminder must not break play).
 */
export function rescheduleStreakReminder(
  enabled: boolean,
  streakCount: number,
  doneTodayKey: string | null,
  now: Date = new Date(),
  log?: ReminderLog,
  /** adaptive slot time (user 2026-07-18) — defaults to 19:30 */
  opts: ReminderOpts = DEFAULT_REMINDER,
  goalMinutes = 0,
): Promise<void> {
  const my = ++gen
  chain = chain
    .then(async () => {
      if (my !== gen) return                       // superseded while queued
      const planKey = `${enabled}|${streakCount}|${doneTodayKey}|${dayKey(now)}|${opts.hour}:${opts.minute}|${goalMinutes}`
      if (planKey === lastPlanKey) return          // nothing changed since last plan
      await Notifications.cancelAllScheduledNotificationsAsync()
      if (!enabled) { lastPlanKey = planKey; return }
      if (!(await Notifications.getPermissionsAsync()).granted) return
      await ensureInit()
      const slots = planReminderSlots(now, doneTodayKey, opts)
      for (let i = 0; i < slots.length; i++) {
        const c = reminderContent(i, streakCount, goalMinutes)
        await Notifications.scheduleNotificationAsync({
          content: { title: c.title, body: c.body },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DATE,
            date: slots[i],
            channelId: CHANNEL_ID,
          },
        })
      }
      lastPlanKey = planKey
    })
    .catch(e => {
      // best-effort: playback must never depend on notifications — but a
      // device-specific scheduling failure must not stay invisible either
      lastPlanKey = null
      log?.({ event: 'reminder_error', error: String((e as Error)?.message ?? e) })
    })
  return chain
}

import {
  planReminderSlots, reminderContent, savableStreakCount, REMINDER_HORIZON_DAYS,
  recordFirstPlay, medianFirstPlayMinutes, adaptiveReminderTime,
} from '../streakReminder'
import { dayKey, addDaysToKey } from '../../core/day'

const OPTS = { hour: 19, minute: 30 }

describe('planReminderSlots', () => {
  it('morning, nothing done today → today 19:30 is the first slot, 7 slots total', () => {
    const now = new Date(2026, 6, 16, 10, 0)             // 10:00 local
    const slots = planReminderSlots(now, null, OPTS)
    expect(slots).toHaveLength(REMINDER_HORIZON_DAYS)
    expect(slots[0].getDate()).toBe(16)
    expect(slots[0].getHours()).toBe(19)
    expect(slots[0].getMinutes()).toBe(30)
    // consecutive evenings
    for (let i = 1; i < slots.length; i++) {
      expect(slots[i].getTime() - slots[i - 1].getTime()).toBe(86_400_000)
    }
  })

  it('today already saved (conversation completed) → today is skipped', () => {
    const now = new Date(2026, 6, 16, 10, 0)
    const slots = planReminderSlots(now, dayKey(now), OPTS)
    expect(slots).toHaveLength(REMINDER_HORIZON_DAYS)
    expect(slots[0].getDate()).toBe(17)                  // starts tomorrow
  })

  it('after the slot time → today is skipped even when unsaved', () => {
    const now = new Date(2026, 6, 16, 20, 0)             // 20:00 > 19:30
    const slots = planReminderSlots(now, null, OPTS)
    expect(slots[0].getDate()).toBe(17)
    expect(slots).toHaveLength(REMINDER_HORIZON_DAYS)
  })

  it('exactly at slot time → not scheduled in the past', () => {
    const now = new Date(2026, 6, 16, 19, 30, 0, 0)
    const slots = planReminderSlots(now, null, OPTS)
    expect(slots[0].getTime()).toBeGreaterThan(now.getTime())
  })

  it('4AM-boundary: 01:00 belongs to yesterday, so a conversation done at 01:00 does NOT skip this evening', () => {
    const now = new Date(2026, 6, 16, 1, 0)              // dayKey = 2026-07-15
    const doneKey = dayKey(now)                          // saved "yesterday" (pre-4AM)
    const slots = planReminderSlots(now, doneKey, OPTS)
    // tonight 19:30 is a NEW streak day (2026-07-16) → still needs a reminder
    expect(slots[0].getDate()).toBe(16)
    expect(slots[0].getHours()).toBe(19)
  })

  it('every slot is strictly in the future', () => {
    const now = new Date(2026, 6, 16, 19, 45)
    for (const s of planReminderSlots(now, null, OPTS)) {
      expect(s.getTime()).toBeGreaterThan(now.getTime())
    }
  })
})

describe('savableStreakCount — never cite a dead streak', () => {
  const base = { count: 12, lastDayKey: '2026-07-10', freezes: 2 }

  it('extended yesterday → full count is savable', () => {
    expect(savableStreakCount(base, addDaysToKey(base.lastDayKey!, 1))).toBe(12)
  })
  it('gap covered by freezes → still savable', () => {
    // 2 missed days between, 2 freezes
    expect(savableStreakCount(base, addDaysToKey(base.lastDayKey!, 3))).toBe(12)
  })
  it('gap beyond freezes → 0 (completing today would reset to 1, so citing 12 would lie)', () => {
    expect(savableStreakCount(base, addDaysToKey(base.lastDayKey!, 4))).toBe(0)
  })
  it('already done today → count stands', () => {
    expect(savableStreakCount(base, base.lastDayKey!)).toBe(12)
  })
  it('fresh state → 0', () => {
    expect(savableStreakCount({ count: 0, lastDayKey: null, freezes: 2 }, '2026-07-16')).toBe(0)
  })
})

describe('adaptive reminder time (user 2026-07-18: follow the listener\'s own pattern)', () => {
  it('records one first-play per day and prunes beyond 14 days', () => {
    let raw = recordFirstPlay(null, '2026-07-01', 600)
    raw = recordFirstPlay(raw, '2026-07-01', 900)   // later same day: ignored
    expect(JSON.parse(raw)['2026-07-01']).toBe(600)
    for (let d = 2; d <= 20; d++) raw = recordFirstPlay(raw, `2026-07-${String(d).padStart(2, '0')}`, 600 + d)
    expect(Object.keys(JSON.parse(raw))).toHaveLength(14)
    expect(JSON.parse(raw)['2026-07-01']).toBeUndefined() // oldest pruned
  })

  it('median of the recorded times; null with no history', () => {
    expect(medianFirstPlayMinutes(null)).toBeNull()
    expect(medianFirstPlayMinutes('garbage')).toBeNull()
    const raw = JSON.stringify({ a: 600, b: 1200, c: 800 })
    expect(medianFirstPlayMinutes(raw)).toBe(800)
  })

  it('early listeners keep 19:30; late listeners get their own median, capped 22:00', () => {
    expect(adaptiveReminderTime(null)).toEqual({ hour: 19, minute: 30 })
    expect(adaptiveReminderTime(9 * 60)).toEqual({ hour: 19, minute: 30 })      // morning listener
    expect(adaptiveReminderTime(20 * 60 + 42)).toEqual({ hour: 20, minute: 40 }) // usual start 20:42 → 20:40
    expect(adaptiveReminderTime(23 * 60)).toEqual({ hour: 22, minute: 0 })       // never past 22:00
  })
})

describe('reminderContent', () => {
  it('first slot cites the streak count when one exists', () => {
    expect(reminderContent(0, 12).body).toContain('12-day streak')
  })
  it('later slots and zero-streak stay generic (never a stale number)', () => {
    expect(reminderContent(1, 12).body).not.toContain('12')
    expect(reminderContent(0, 0).body).not.toContain('0-day')
  })
})

// Android last-glyph clip fix: clipSafe appends a trailing NBSP so OEM fonts
// that PAINT wider than they MEASURE (OnePlus/Oppo/Bigme system fonts) have
// advance-width headroom inside the Text's own clip rect. See the mechanism
// comment above clipSafe in PlayScreen.tsx.

// importing PlayScreen pulls the audio hook — stub the native-only expo
// modules (jest-expo has no ExpoAudio native module in a node test)
jest.mock('expo-audio', () => ({
  useAudioPlayer: jest.fn(),
  useAudioPlayerStatus: jest.fn(() => ({})),
  setAudioModeAsync: jest.fn(async () => {}),
}))
jest.mock('expo-haptics', () => ({
  notificationAsync: jest.fn(async () => {}),
  NotificationFeedbackType: { Success: 'success' },
}))
// useSession also pulls the streak-reminder glue (expo-notifications): the
// real module runs library code at import (push-token listener registration)
// that only survives under jest-expo's proxy by luck — mock it out entirely
jest.mock('../../engine/streakReminderNative', () => ({
  ensureReminderPermission: jest.fn(async () => false),
  rescheduleStreakReminder: jest.fn(async () => {}),
}))

import { clipSafe, advanceStable } from '../PlayScreen'

const NBSP = '\u00A0'

describe('clipSafe — trailing-NBSP paint headroom', () => {
  test('appends exactly one NBSP to non-empty text', () => {
    expect(clipSafe('Hello')).toBe(`Hello${NBSP}`)
    expect(clipSafe('Hello').length).toBe('Hello'.length + 1)
  })

  test('empty string passes through untouched (no lone floating NBSP)', () => {
    expect(clipSafe('')).toBe('')
  })

  test('uses NBSP — never a trimmable ASCII space or a tofu-risk hair space', () => {
    const added = clipSafe('x').slice(1)
    expect(added).toBe(NBSP)
    expect(added).not.toBe('\u0020') // ASCII space: layout may trim it
    expect(added).not.toBe('\u200A') // hair space: missing from some fonts
  })

  test('works for Japanese fallback lines too', () => {
    expect(clipSafe('こんにちは')).toBe(`こんにちは${NBSP}`)
  })
})

describe('advanceStable — spoken-highlight bold only where bold cannot rewrap', () => {
  test('pure CJK tokens are stable (kana, kanji, CJK punctuation, full-width)', () => {
    expect(advanceStable('こんにちは')).toBe(true)
    expect(advanceStable('日本語')).toBe(true)
    expect(advanceStable('テスト')).toBe(true)
    expect(advanceStable('。')).toBe(true)
    expect(advanceStable('１２３')).toBe(true)   // full-width digits
  })
  test('Latin, ASCII digits and half-width kana are NOT (bold widens them)', () => {
    expect(advanceStable('OK')).toBe(false)
    expect(advanceStable('3時')).toBe(false)     // mixed: one unstable glyph taints the token
    expect(advanceStable('ｱｲｳ')).toBe(false)     // half-width katakana
    expect(advanceStable('')).toBe(false)
  })
})

// M6 streak card view-model: parse/derive helpers + the repair persistence
// round-trip the card performs (loadStreak → repair → saveStreak).

import { DatabaseSync } from 'node:sqlite'
import { UserDB, nodeDriver } from '../../core/db'
import { SRS_CONFIG } from '../../core/config'
import { addDaysToKey } from '../../core/day'
import { createStreak, repair, type StreakState } from '../../core/streak'
import { buildStreakView, daysToNextFreeze, parseStreak } from '../streakView'

const TODAY = '2026-07-10'

function streak(over: Partial<StreakState> = {}): StreakState {
  return { ...createStreak(), ...over }
}

describe('parseStreak', () => {
  it('missing row → fresh state with the configured starting freezes', () => {
    expect(parseStreak(undefined)).toEqual(createStreak())
    expect(parseStreak(undefined).freezes).toBe(SRS_CONFIG.streak.freezesGrantedAtStart)
  })

  it('round-trips a saved state', () => {
    const s = streak({ count: 12, lastDayKey: TODAY, freezes: 1 })
    expect(parseStreak(JSON.stringify(s))).toEqual(s)
  })

  it('backfills fields missing from an older blob', () => {
    const parsed = parseStreak(JSON.stringify({ count: 7, lastDayKey: TODAY }))
    expect(parsed.count).toBe(7)
    expect(parsed.brokenAtDayKey).toBeNull()
    expect(parsed.milestonesGranted).toEqual([])
  })

  it('corrupt JSON → fresh state, never a throw', () => {
    expect(parseStreak('{not json')).toEqual(createStreak())
  })
})

describe('daysToNextFreeze (recurring 7-day economy, user 2026-07-16)', () => {
  it('counts down inside each 7-day period', () => {
    expect(daysToNextFreeze(0)).toBe(7)
    expect(daysToNextFreeze(1)).toBe(6)
    expect(daysToNextFreeze(6)).toBe(1)
    // at an exact multiple the grant just fired → a full period remains
    expect(daysToNextFreeze(7)).toBe(7)
    expect(daysToNextFreeze(12)).toBe(2)
    expect(daysToNextFreeze(700)).toBe(7)
  })
})

describe('buildStreakView', () => {
  it('derives count, freezes, cap and freeze countdown', () => {
    const v = buildStreakView(streak({ count: 12, lastDayKey: TODAY, freezes: 2 }), TODAY)
    expect(v.count).toBe(12)
    expect(v.freezes).toBe(2)
    expect(v.maxFreezes).toBe(SRS_CONFIG.streak.maxFreezes)
    expect(v.daysToNextFreeze).toBe(2)   // day 14 is 2 streak days away
    expect(v.freezesFull).toBe(true)     // 2 of 2 — the hint hides
    expect(v.repairable).toBe(false)
  })

  it('freezesFull is false below the cap', () => {
    const v = buildStreakView(streak({ count: 3, lastDayKey: TODAY, freezes: 1 }), TODAY)
    expect(v.freezesFull).toBe(false)
    expect(v.daysToNextFreeze).toBe(4)
  })

  it('repairable inside the window, with the restored length exposed', () => {
    const broken = streak({ count: 1, lastDayKey: TODAY, brokenAtDayKey: TODAY, brokenCount: 40 })
    const v = buildStreakView(broken, TODAY)
    expect(v.repairable).toBe(true)
    expect(v.repairedCount).toBe(41) // restored streak + days earned since break
  })

  it('not repairable once the window has passed', () => {
    const brokeAt = addDaysToKey(TODAY, -(SRS_CONFIG.streak.repairWindowDays + 1))
    const v = buildStreakView(
      streak({ count: 1, lastDayKey: brokeAt, brokenAtDayKey: brokeAt, brokenCount: 40 }), TODAY)
    expect(v.repairable).toBe(false)
  })

  it('freeze countdown keeps cycling forever (recurring, never "past the last milestone")', () => {
    const v = buildStreakView(streak({ count: 400, lastDayKey: TODAY }), TODAY)
    expect(v.daysToNextFreeze).toBe(7 - (400 % 7))
  })
})

describe('repair persistence round-trip (what StreakCard does on tap)', () => {
  function freshDb(): UserDB {
    const db = new UserDB(nodeDriver(new DatabaseSync(':memory:') as any))
    db.migrate()
    return db
  }

  it('loadStreak → repair → saveStreak restores the streak and clears the break', () => {
    const db = freshDb()
    db.saveStreak(JSON.stringify(
      streak({ count: 1, lastDayKey: TODAY, brokenAtDayKey: TODAY, brokenCount: 40 })))

    const repaired = repair(parseStreak(db.loadStreak()), TODAY)
    db.saveStreak(JSON.stringify(repaired))

    const after = parseStreak(db.loadStreak())
    expect(after.count).toBe(41)
    expect(after.brokenAtDayKey).toBeNull()
    expect(buildStreakView(after, TODAY).repairable).toBe(false)
  })

  it('is idempotent: a second tap changes nothing', () => {
    const db = freshDb()
    db.saveStreak(JSON.stringify(
      streak({ count: 1, lastDayKey: TODAY, brokenAtDayKey: TODAY, brokenCount: 40 })))

    const once = repair(parseStreak(db.loadStreak()), TODAY)
    db.saveStreak(JSON.stringify(once))
    const twice = repair(parseStreak(db.loadStreak()), TODAY)
    expect(twice).toEqual(once)          // no-op state
    db.saveStreak(JSON.stringify(twice)) // saving again is harmless
    expect(parseStreak(db.loadStreak())).toEqual(once)
  })
})

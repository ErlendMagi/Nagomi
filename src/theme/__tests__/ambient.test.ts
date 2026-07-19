// M4 VN-style visuals: ambient family mapping, time-of-day tint, and the
// proportional "spoken so far" highlight rule.
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import {
  ambientTheme, dayPhase, phaseTint, spokenTokenCount,
  DEFAULT_AMBIENT_THEME, AMBIENT_FAMILIES,
} from '../ambient'

describe('ambientTheme — tag family mapping', () => {
  test('maps representative tags to their families', () => {
    expect(ambientTheme('izakaya_evening').key).toBe('eatery')
    expect(ambientTheme('office_quiet_low').key).toBe('office')
    expect(ambientTheme('cafe_quiet_chatter').key).toBe('cafe')
    expect(ambientTheme('apartment_indoor').key).toBe('home')
    expect(ambientTheme('street_storm_umbrella').key).toBe('street')
    expect(ambientTheme('living_room_quiet').key).toBe('home')
    expect(ambientTheme('lecture_hall_quiet').key).toBe('school')
    expect(ambientTheme('train_station_night').key).toBe('transit')
    expect(ambientTheme('shrine_grounds').key).toBe('shrine')
    expect(ambientTheme('park_distant_birds').key).toBe('nature')
    expect(ambientTheme('river_morning').key).toBe('water')
    expect(ambientTheme('phone_call').key).toBe('phone')
  })

  test('first token wins over later tokens (a cafe office is a cafe)', () => {
    expect(ambientTheme('cafe_office_quiet').key).toBe('cafe')
    expect(ambientTheme('kitchen_workshop_flour').key).toBe('kitchen')
    expect(ambientTheme('workshop_kitchen_low').key).toBe('workshop')
    // 'polling_station' is civic, not a train station
    expect(ambientTheme('polling_station_low').key).toBe('office')
  })

  test('falls back to any-token match, then to the default theme', () => {
    expect(ambientTheme('jazz_bar_warm_low').key).toBe('eatery')   // 2nd token
    expect(ambientTheme('sports_bar_evening').key).toBe('eatery')
    expect(ambientTheme('autumn_mountain_path').key).toBe('nature')
    expect(ambientTheme('outdoor_hammer_distant')).toBe(DEFAULT_AMBIENT_THEME)
    expect(ambientTheme(null)).toBe(DEFAULT_AMBIENT_THEME)
    expect(ambientTheme('')).toBe(DEFAULT_AMBIENT_THEME)
  })

  test('every gradient colour stays light (e-ink: dark ink must stay readable)', () => {
    const themes = [DEFAULT_AMBIENT_THEME, ...AMBIENT_FAMILIES.map(f => f.theme)]
    for (const t of themes) {
      for (const hex of [t.top, t.bottom]) {
        expect(hex).toMatch(/^#[0-9A-F]{6}$/i)
        for (let i = 1; i < 7; i += 2) {
          const channel = parseInt(hex.slice(i, i + 2), 16)
          expect(channel).toBeGreaterThanOrEqual(0xB0) // ≥ 176: light grays on e-ink
        }
      }
    }
  })

  const CONTENT_DB = join(__dirname, '..', '..', '..', 'data', 'derived', 'content.db')
  const maybe = existsSync(CONTENT_DB) ? test : test.skip
  maybe('covers (almost) every distinct ambient tag in content.db', () => {
    const db = new DatabaseSync(CONTENT_DB, { readOnly: true })
    try {
      const rows = db.prepare(
        'SELECT DISTINCT ambient FROM conversations WHERE ambient IS NOT NULL').all() as
        Array<{ ambient: string }>
      expect(rows.length).toBeGreaterThan(100)
      const unmapped = rows
        .map(r => r.ambient)
        .filter(tag => ambientTheme(tag) === DEFAULT_AMBIENT_THEME)
      // allow a handful of oddballs; the default theme is a designed fallback
      expect(unmapped.length).toBeLessThanOrEqual(Math.ceil(rows.length * 0.01))
    } finally {
      db.close()
    }
  })
})

describe('dayPhase / phaseTint — device-clock tint (locked design)', () => {
  test('phase boundaries', () => {
    expect(dayPhase(6)).toBe('day')
    expect(dayPhase(12)).toBe('day')
    expect(dayPhase(16)).toBe('day')
    expect(dayPhase(17)).toBe('evening')
    expect(dayPhase(20)).toBe('evening')
    expect(dayPhase(21)).toBe('night')
    expect(dayPhase(0)).toBe('night')
    expect(dayPhase(5)).toBe('night')
  })

  test('locked colours and opacity windows', () => {
    expect(phaseTint('day')).toBeNull()
    const evening = phaseTint('evening')!
    expect(evening.color).toBe('#FFB070')
    expect(evening.opacity).toBeGreaterThanOrEqual(0.25)
    expect(evening.opacity).toBeLessThanOrEqual(0.35)
    const night = phaseTint('night')!
    expect(night.color).toBe('#3A4A7A')
    expect(night.opacity).toBeGreaterThanOrEqual(0.40)
    expect(night.opacity).toBeLessThanOrEqual(0.55)
  })
})

describe('spokenTokenCount — proportional highlight', () => {
  const toks = (...ss: string[]) => ss.map(s => ({ s }))

  test('edges: empty tokens, fraction 0, fraction 1', () => {
    expect(spokenTokenCount([], 0.5)).toBe(0)
    expect(spokenTokenCount(toks('こん', 'にちは'), 0)).toBe(0)
    expect(spokenTokenCount(toks('こん', 'にちは'), 1)).toBe(2)
    expect(spokenTokenCount(toks('こん', 'にちは'), 2)).toBe(2)   // clamped
    expect(spokenTokenCount(toks('こん', 'にちは'), -1)).toBe(0)  // clamped
  })

  test('a token is spoken once its cumulative character share <= fraction', () => {
    // lengths 2,2,4 → cumulative shares 0.25, 0.5, 1.0
    const t = toks('ab', 'cd', 'efgh')
    expect(spokenTokenCount(t, 0.24)).toBe(0)
    expect(spokenTokenCount(t, 0.25)).toBe(1)  // boundary counts (<=)
    expect(spokenTokenCount(t, 0.49)).toBe(1)
    expect(spokenTokenCount(t, 0.5)).toBe(2)
    expect(spokenTokenCount(t, 0.99)).toBe(2)
    expect(spokenTokenCount(t, 1)).toBe(3)
  })

  test('zero-length degenerate tokens do not divide by zero', () => {
    expect(spokenTokenCount(toks('', ''), 0.5)).toBe(0)
    expect(spokenTokenCount(toks('', ''), 1)).toBe(2)
  })
})

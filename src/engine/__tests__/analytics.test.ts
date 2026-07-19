// M5 analytics: pure queries over user.db (words curve, JLPT bands, heatmap).

import { DatabaseSync } from 'node:sqlite'
import { UserDB, nodeDriver, type SqlDriver } from '../../core/db'
import { dayKey, addDaysToKey, dayKeyDiff } from '../../core/day'
import type { GraduationSettings } from '../../core/graduation'
import { SRS_CONFIG } from '../../core/config'
import {
  wordsKnownCurve, jlptBreakdown, jlptMass, listeningHeatmap, graduationTotals,
  graduatedWords, heatLevel, mondayIndex, JLPT_BANDS,
} from '../analytics'
import { etaCaption } from '../goalPlanner'

const now = new Date('2026-08-10T12:00:00')
const nowKey = dayKey(now) // '2026-08-10'

function freshDriver(): SqlDriver {
  const d = nodeDriver(new DatabaseSync(':memory:') as any)
  new UserDB(d).migrate()
  return d
}

function insertWord(d: SqlDriver, wordId: number, totalReps: number, firstHeardAt: Date | null): void {
  d.run(
    'INSERT INTO word_state VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [wordId, 1.0, 5.0, now.getTime(), null, 1, 1, 0, totalReps, 1,
      firstHeardAt ? firstHeardAt.getTime() : null, null, 0, 0],
  )
}

function settings(over: Partial<GraduationSettings> = {}): GraduationSettings {
  return { exposures: 30, days: 5, fastTrackMaxRank: 0, ...over }
}

describe('graduatedWords (user 2026-07-16: the known-words browser)', () => {
  it('lists only fully-graduated words, newest graduation first, with the right dates', () => {
    const d = freshDriver()
    insertWord(d, 1, 40, new Date('2026-08-01T12:00:00')) // graduates Aug 6
    insertWord(d, 2, 40, new Date('2026-07-20T12:00:00')) // graduates Jul 25
    insertWord(d, 3, 3, new Date('2026-07-01T12:00:00'))  // reps not met — excluded
    insertWord(d, 4, 40, new Date('2026-08-08T12:00:00')) // days not met — excluded
    const rows = graduatedWords(d, settings(), now)
    expect(rows).toEqual([
      { wordId: 1, gradDayKey: '2026-08-06' },
      { wordId: 2, gradDayKey: '2026-07-25' },
    ])
  })

  it('pages stably (offset/limit) with word-id tiebreak on equal dates', () => {
    const d = freshDriver()
    for (let id = 1; id <= 5; id++) insertWord(d, id, 40, new Date('2026-08-01T12:00:00'))
    const page1 = graduatedWords(d, settings(), now, 2, 0)
    const page2 = graduatedWords(d, settings(), now, 2, 2)
    expect(page1.map(r => r.wordId)).toEqual([1, 2])
    expect(page2.map(r => r.wordId)).toEqual([3, 4])
  })
})

describe('etaCaption (user 2026-07-16: "say how many days left until first word is known")', () => {
  // tiny synthetic table: at 30 min/day, graduated grows 1/day from day 0
  const table = {
    horizonDays: 730,
    tracks: [{
      minutes: 30,
      points: Array.from({ length: 74 }, (_, i) => [i * 10, i * 100 + 50, i * 10] as [number, number, number]),
    }],
  } as never
  it('graduated 0 → a days-count with the sparkle', () => {
    expect(etaCaption(table, { heard: 50, graduated: 0 }, 30, now)).toMatch(/^first word known in ~\d+ days? ✨$/)
  })
  it('graduated > 0 → the next-100 milestone as a month', () => {
    expect(etaCaption(table, { heard: 250, graduated: 30 }, 30, now)).toMatch(/^next: 100 words by ~/)
  })
  it('unreachable → encouraging, never broken', () => {
    const flat = { horizonDays: 730, tracks: [{ minutes: 30, points: [[0, 0, 0], [730, 0, 0]] }] } as never
    expect(etaCaption(flat, { heard: 0, graduated: 0 }, 30, now))
      .toBe('keep listening — your first known words are on the way')
  })
})

describe('wordsKnownCurve', () => {
  it('accumulates heard by first_heard day; graduated lags by the days threshold', () => {
    const d = freshDriver()
    insertWord(d, 1, 40, new Date('2026-08-01T12:00:00')) // reps ok â†’ graduates Aug 6
    insertWord(d, 2, 3, new Date('2026-08-05T12:00:00'))  // too few reps â†’ never
    const curve = wordsKnownCurve(d, 10, settings(), now)

    expect(curve).toHaveLength(10)
    expect(curve[0]).toEqual({ day: '2026-08-01', heard: 1, graduated: 0 })
    expect(curve[3]).toEqual({ day: '2026-08-04', heard: 1, graduated: 0 })
    expect(curve[4]).toEqual({ day: '2026-08-05', heard: 2, graduated: 0 })
    // graduation day = first heard + 5 days (dayKeyDiff >= days, mirrors isGraduated)
    expect(curve[5]).toEqual({ day: '2026-08-06', heard: 2, graduated: 1 })
    expect(curve[9]).toEqual({ day: '2026-08-10', heard: 2, graduated: 1 })
  })

  it('words heard before the window count into the first point baseline', () => {
    const d = freshDriver()
    insertWord(d, 1, 40, new Date('2026-06-01T12:00:00')) // long graduated
    insertWord(d, 2, 1, new Date('2026-06-15T12:00:00'))  // heard once, stuck
    const curve = wordsKnownCurve(d, 7, settings(), now)
    expect(curve[0].day).toBe(addDaysToKey(nowKey, -6))
    expect(curve[0].heard).toBe(2)
    expect(curve[0].graduated).toBe(1)
  })

  it('requires BOTH thresholds: enough reps but too recent stays ungraduated', () => {
    const d = freshDriver()
    insertWord(d, 1, 40, new Date('2026-08-08T12:00:00')) // 2 days ago, needs 5
    const curve = wordsKnownCurve(d, 10, settings(), now)
    expect(curve[9].heard).toBe(1)
    expect(curve[9].graduated).toBe(0)
  })

  it('fast-track ranks graduate at the fast-track thresholds', () => {
    const d = freshDriver()
    const ft = SRS_CONFIG.graduation.fastTrack // 6 exposures / 7 days
    insertWord(d, 10, ft.exposures, new Date('2026-08-01T12:00:00'))   // in range
    insertWord(d, 500, ft.exposures, new Date('2026-08-01T12:00:00'))  // out of range
    const curve = wordsKnownCurve(d, 10, settings({ exposures: 30, days: 30, fastTrackMaxRank: 100 }), now)
    // Aug 1 + 7 days = Aug 8 for word 10; word 500 needs 30/30
    expect(curve[6]).toEqual(expect.objectContaining({ day: '2026-08-07', graduated: 0 }))
    expect(curve[7]).toEqual(expect.objectContaining({ day: '2026-08-08', graduated: 1 }))
  })

  it('handles empty db and non-positive windows', () => {
    const d = freshDriver()
    expect(wordsKnownCurve(d, 0, settings(), now)).toEqual([])
    const curve = wordsKnownCurve(d, 3, settings(), now)
    expect(curve).toEqual([
      { day: addDaysToKey(nowKey, -2), heard: 0, graduated: 0 },
      { day: addDaysToKey(nowKey, -1), heard: 0, graduated: 0 },
      { day: nowKey, heard: 0, graduated: 0 },
    ])
  })
})

describe('jlptBreakdown', () => {
  it('splits graduated vs in-flight across the rank band edges', () => {
    const d = freshDriver()
    const old = new Date('2026-06-01T12:00:00') // way past the days threshold
    insertWord(d, 800, 40, old)    // N5 edge, graduated
    insertWord(d, 801, 40, old)    // N4 lower edge, graduated
    insertWord(d, 1500, 3, old)    // N4 upper edge, in flight (reps)
    insertWord(d, 1501, 40, now)   // N3, in flight (days)
    insertWord(d, 3701, 40, old)   // N2, graduated
    insertWord(d, 10000, 1, old)   // N1 edge, in flight
    insertWord(d, 10001, 40, old)  // beyond the JLPT mapping â†’ excluded
    const bands = jlptBreakdown(d, settings(), now)

    expect(bands.map(b => b.level)).toEqual(['N5', 'N4', 'N3', 'N2', 'N1'])
    expect(bands[0]).toEqual(expect.objectContaining({ graduated: 1, inFlight: 0 }))
    expect(bands[1]).toEqual(expect.objectContaining({ graduated: 1, inFlight: 1 }))
    expect(bands[2]).toEqual(expect.objectContaining({ graduated: 0, inFlight: 1 }))
    expect(bands[3]).toEqual(expect.objectContaining({ graduated: 1, inFlight: 0 }))
    expect(bands[4]).toEqual(expect.objectContaining({ graduated: 0, inFlight: 1 }))
  })

  it('band sizes cover ranks 1..10000 without overlap', () => {
    expect(JLPT_BANDS[0].minRank).toBe(1)
    expect(JLPT_BANDS[4].maxRank).toBe(10000)
    for (let i = 1; i < JLPT_BANDS.length; i++) {
      expect(JLPT_BANDS[i].minRank).toBe(JLPT_BANDS[i - 1].maxRank + 1)
    }
    const sizes = jlptBreakdown(freshDriver(), settings(), now).map(b => b.bandSize)
    expect(sizes).toEqual([800, 700, 2200, 2300, 4000])
  })
})

describe('jlptMass', () => {
  const old = new Date('2026-06-01T12:00:00') // way past the days threshold

  it('partial reps contribute partial mass; mass caps at the exposure threshold', () => {
    const d = freshDriver()
    insertWord(d, 1, 15, old) // 15/30 â†’ 0.5 word-mass, in progress
    insertWord(d, 2, 30, old) // exactly capped â†’ 1, graduated
    insertWord(d, 3, 90, old) // over-capped â†’ still 1, graduated
    const bands = jlptMass(d, settings(), now)

    expect(bands.map(b => b.band)).toEqual(['N5', 'N4', 'N3', 'N2', 'N1'])
    expect(bands[0].totalWords).toBe(800)
    expect(bands[0].massFraction).toBeCloseTo(2.5 / 800, 12)
    expect(bands[0].graduatedWords).toBe(2)
    expect(bands[0].inProgressWords).toBe(1)
    expect(bands[0].complete).toBe(false)
  })

  it('unheard words contribute nothing: empty db â†’ all-zero incomplete bands', () => {
    const bands = jlptMass(freshDriver(), settings(), now)
    expect(bands.map(b => b.totalWords)).toEqual([800, 700, 2200, 2300, 4000])
    for (const b of bands) {
      expect(b.massFraction).toBe(0)
      expect(b.graduatedWords).toBe(0)
      expect(b.inProgressWords).toBe(0)
      expect(b.complete).toBe(false)
    }
  })

  it('mass ignores the days threshold but graduatedWords honors it', () => {
    const d = freshDriver()
    insertWord(d, 1, 40, now) // reps met TODAY â†’ full mass, not yet graduated
    const bands = jlptMass(d, settings(), now)
    expect(bands[0].massFraction).toBeCloseTo(1 / 800, 12)
    expect(bands[0].graduatedWords).toBe(0)
    expect(bands[0].inProgressWords).toBe(1)
  })

  it('fast-track ranks fill against the fast-track exposure threshold', () => {
    const d = freshDriver()
    const ft = SRS_CONFIG.graduation.fastTrack
    insertWord(d, 10, 3, old)  // in range â†’ 3/ft.exposures
    insertWord(d, 500, 3, old) // out of range â†’ 3/30
    const bands = jlptMass(d, settings({ fastTrackMaxRank: 100 }), now)
    expect(bands[0].massFraction).toBeCloseTo((3 / ft.exposures + 3 / 30) / 800, 12)
  })

  it('complete ONLY when every band word reaches its rep threshold', () => {
    const d = freshDriver()
    for (let w = 1; w <= 800; w++) insertWord(d, w, 30, old) // full N5
    insertWord(d, 801, 30, old) // one N4 word capped â€” N4 far from full
    const bands = jlptMass(d, settings(), now)
    expect(bands[0].complete).toBe(true)
    expect(bands[0].massFraction).toBe(1) // exact: 800 Ã— 30/30 Ã· 800
    expect(bands[1].complete).toBe(false)
    expect(bands[1].massFraction).toBeCloseTo(1 / 700, 12)

    const d2 = freshDriver()
    for (let w = 1; w <= 799; w++) insertWord(d2, w, 30, old)
    insertWord(d2, 800, 29, old) // one rep short on the last word
    const b2 = jlptMass(d2, settings(), now)
    expect(b2[0].complete).toBe(false)
    expect(b2[0].massFraction).toBeLessThan(1)
  })

  it('ranks beyond 10000 are excluded from every band', () => {
    const d = freshDriver()
    insertWord(d, 10001, 40, old)
    const bands = jlptMass(d, settings(), now)
    expect(bands.every(b =>
      b.massFraction === 0 && b.graduatedWords === 0 && b.inProgressWords === 0)).toBe(true)
  })
})

describe('graduationTotals', () => {
  it('counts ALL heard ranks, including beyond 10k', () => {
    const d = freshDriver()
    const old = new Date('2026-06-01T12:00:00')
    insertWord(d, 1, 40, old)
    insertWord(d, 12000, 40, old) // outside JLPT bands but still a word
    insertWord(d, 2, 3, old)
    expect(graduationTotals(d, settings(), now)).toEqual({ heard: 3, graduated: 2 })
  })
})

describe('listeningHeatmap', () => {
  it('zero-fills a Monday-aligned grid ending today', () => {
    const d = freshDriver()
    const cells = listeningHeatmap(d, 4, now)
    expect(cells[0].weekday).toBe(0)
    expect(cells[0].week).toBe(0)
    // first cell is a real Monday (UTC weekday 1)
    const [y, m, dd] = cells[0].day.split('-').map(Number)
    expect(new Date(Date.UTC(y, m - 1, dd)).getUTCDay()).toBe(1)
    const last = cells[cells.length - 1]
    expect(last.day).toBe(nowKey)
    expect(last.week).toBe(3)
    expect(last.weekday).toBe(mondayIndex(nowKey))
    expect(cells).toHaveLength(3 * 7 + mondayIndex(nowKey) + 1)
    expect(cells.every(c => c.seconds === 0)).toBe(true)
    // contiguous days
    for (let i = 1; i < cells.length; i++) {
      expect(dayKeyDiff(cells[i - 1].day, cells[i].day)).toBe(1)
    }
  })

  it('maps day_stats seconds onto the right cells', () => {
    const d = freshDriver()
    d.run('INSERT INTO day_stats VALUES (?,?,?,?,0,0,0)', [nowKey, 900, 10, 1])
    const yesterday = addDaysToKey(nowKey, -1)
    d.run('INSERT INTO day_stats VALUES (?,?,?,?,0,0,0)', [yesterday, 120, 2, 0])
    d.run('INSERT INTO day_stats VALUES (?,?,?,?,0,0,0)', ['2020-01-01', 999, 1, 1]) // out of range
    const cells = listeningHeatmap(d, 2, now)
    const byDay = new Map(cells.map(c => [c.day, c.seconds]))
    expect(byDay.get(nowKey)).toBe(900)
    expect(byDay.get(yesterday)).toBe(120)
    expect(cells.find(c => c.seconds === 999)).toBeUndefined()
  })

  it('returns [] for non-positive weeks', () => {
    expect(listeningHeatmap(freshDriver(), 0, now)).toEqual([])
  })
})

describe('heatLevel', () => {
  it('bins in real units: none / some / minimum met / 30+ min', () => {
    expect(heatLevel(0)).toBe(0)
    expect(heatLevel(1)).toBe(1)
    expect(heatLevel(SRS_CONFIG.dailyMinimumMinutes * 60 - 1)).toBe(1)
    expect(heatLevel(SRS_CONFIG.dailyMinimumMinutes * 60)).toBe(2)
    expect(heatLevel(1799)).toBe(2)
    expect(heatLevel(1800)).toBe(3)
    expect(heatLevel(7200)).toBe(3)
  })
})


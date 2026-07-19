// M6 placement: the self-assessment must NEVER mark words known — it only
// sets the graduation fast-track rank. Example words on the level cards are
// checked against the REAL content corpus so the cards can never drift.

import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { UserDB, nodeDriver } from '../../core/db'
import { SRS_CONFIG } from '../../core/config'
import { defaultSettings, loadSettings } from '../session'
import {
  LEVELS, applyPlacement, levelByKey, ONBOARDED_KV_KEY,
  type PlacementLevelKey,
} from '../placement'

function freshUserDb(): UserDB {
  const db = new UserDB(nodeDriver(new DatabaseSync(':memory:') as any))
  db.migrate()
  return db
}

describe('applyPlacement', () => {
  const cases: Array<[PlacementLevelKey, number]> = [
    ['zero', 0],
    ['a-little', 300],
    ['basic', 800],
    ['conversational', 1500],
    ['intermediate', 3700],
  ]

  it.each(cases)('%s sets fastTrackMaxRank=%i, persists, flags onboarded', (key, rank) => {
    const db = freshUserDb()
    const settings = defaultSettings()
    applyPlacement(db, settings, key)

    // the SHARED object is mutated in place (live recorder convention)
    expect(settings.graduation.fastTrackMaxRank).toBe(rank)
    // ...and the persisted blob round-trips the same value
    const back = loadSettings(db)
    expect(back.graduation.fastTrackMaxRank).toBe(rank)
    expect(db.getKV(ONBOARDED_KV_KEY)).toBe('1')
  })

  it('never touches the normal graduation thresholds or other settings', () => {
    const db = freshUserDb()
    const settings = defaultSettings()
    settings.goalMinutes = 45
    settings.enFirst = false
    applyPlacement(db, settings, 'intermediate')
    const back = loadSettings(db)
    expect(back.graduation.exposures).toBe(SRS_CONFIG.graduation.defaultExposures)
    expect(back.graduation.days).toBe(SRS_CONFIG.graduation.defaultDays)
    expect(back.goalMinutes).toBe(45)
    expect(back.enFirst).toBe(false)
  })

  it('zero leaves the fast track OFF even after a previous higher claim', () => {
    const db = freshUserDb()
    const settings = defaultSettings()
    applyPlacement(db, settings, 'conversational')
    applyPlacement(db, settings, 'zero') // re-onboard downgrades cleanly
    expect(settings.graduation.fastTrackMaxRank).toBe(0)
    expect(loadSettings(db).graduation.fastTrackMaxRank).toBe(0)
  })

  it('unknown level keys fall back to the safe choice (no fast track)', () => {
    const db = freshUserDb()
    const settings = defaultSettings()
    applyPlacement(db, settings, 'corrupt-key' as PlacementLevelKey)
    expect(settings.graduation.fastTrackMaxRank).toBe(0)
    expect(db.getKV(ONBOARDED_KV_KEY)).toBe('1')
  })

  it('placement NEVER writes word state — no word is marked known', () => {
    const db = freshUserDb()
    applyPlacement(db, defaultSettings(), 'intermediate')
    expect(db.loadWord(1)).toBeUndefined()
    expect(db.loadWord(3700)).toBeUndefined()
  })
})

describe('LEVELS', () => {
  it('levelByKey resolves every key and falls back to zero', () => {
    for (const l of LEVELS) expect(levelByKey(l.key)).toBe(l)
    expect(levelByKey('nope' as PlacementLevelKey).key).toBe('zero')
  })

  it('ranks ascend and each level has 2-3 in-range examples', () => {
    let prev = -1
    for (const l of LEVELS) {
      expect(l.maxRank).toBeGreaterThan(prev)
      prev = l.maxRank
      expect(l.examples.length).toBeGreaterThanOrEqual(2)
      expect(l.examples.length).toBeLessThanOrEqual(3)
      for (const ex of l.examples) {
        expect(ex.rank).toBeGreaterThan(0)
        // examples sit inside the level's claimed range ('zero' shows the
        // first words the learner will meet — no range to sit inside)
        if (l.maxRank > 0) expect(ex.rank).toBeLessThanOrEqual(l.maxRank)
        expect(ex.reading.length).toBeGreaterThan(0)
      }
    }
  })

  const contentDbPath = resolve(__dirname, '../../../data/derived/content.db')
  const haveCorpus = existsSync(contentDbPath)
  const itIfCorpus = haveCorpus ? it : it.skip

  itIfCorpus('example words match the real corpus at their stated ranks', () => {
    const db = new DatabaseSync(contentDbPath, { readOnly: true })
    try {
      const stmt = db.prepare('SELECT jp, gloss1, learnable FROM words WHERE word_id = ?')
      for (const l of LEVELS) {
        for (const ex of l.examples) {
          const row = stmt.get(ex.rank) as { jp: string, gloss1: string, learnable: number } | undefined
          expect(row).toBeDefined()
          expect(row!.jp).toBe(ex.jp)
          expect(row!.learnable).toBe(1)
          // the card gloss is the db gloss or one of its ';'-separated senses
          const senses = row!.gloss1.split('; ')
          expect(row!.gloss1 === ex.gloss || senses.includes(ex.gloss)).toBe(true)
        }
      }
    } finally {
      db.close()
    }
  })
})

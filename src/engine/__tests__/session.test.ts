// M3 session engine: queue construction + recorder side effects + ContentDb
// semantics (mirrors the simulator's validated ContentIndex behavior).

import { DatabaseSync } from 'node:sqlite'
import { UserDB, nodeDriver } from '../../core/db'
import { Scheduler } from '../../core/scheduler'
import { SRS_CONFIG } from '../../core/config'
import { dayKey } from '../../core/day'
import {
  buildQueue, clipName, CHIME_CLIP, SessionEngine, SessionRecorder,
  defaultSettings, loadSettings, saveSettings,
  type ConvBundleData, type ConvLine,
} from '../session'
import { ContentDb } from '../content'
import { lengthComfortFactor, pickNextConversation, UNHEARD_ORD_WINDOW } from '../../core/picker'
import { ciTargetFor } from '../../core/ci'

function line(overrides: Partial<ConvLine>): ConvLine {
  return {
    speaker: 'yuki_office', mood: 'neutral', en: 'en text', jp: 'jp text',
    nonverbal: false, jpSilence: false, words: [1, 2, 3], jpTokens: [],
    ...overrides,
  }
}

function conv(lines: ConvLine[]): ConvBundleData {
  return { id: 'conv_x', context: 'ctx', ambient: 'amb', cast: ['yuki_office'], tier: 1, lines }
}

const allClips = () => true

describe('buildQueue', () => {
  it('EN before JP per line, intro first, records words on the LAST step of a line', () => {
    const q = buildQueue(conv([line({ words: [5, 6] })]), {
      enFirst: true, skipEnglish: () => false, hasClip: allClips,
    })
    expect(q.map(s => s.kind)).toEqual(['intro_en', 'intro_jp', 'line_en', 'line_jp', 'chime'])
    expect(q[2].recordWords).toBeNull()          // EN step never records
    expect(q[3].recordWords).toEqual([5, 6])     // JP (last of line) records
    expect(q[4].recordWords).toBeNull()          // closing chime records nothing
  })

  it('flipped order: JP first, then EN — words record on EN (last of line)', () => {
    const q = buildQueue(conv([line({ words: [9] })]), {
      enFirst: false, skipEnglish: () => false, hasClip: allClips,
    })
    expect(q.map(s => s.kind)).toEqual(['intro_jp', 'intro_en', 'line_jp', 'line_en', 'chime'])
    expect(q[2].recordWords).toBeNull()
    expect(q[3].recordWords).toEqual([9])
    expect(q[4].recordWords).toBeNull()
  })

  it('chime closes the conversation (last step) — with or without intro clips', () => {
    const withIntro = buildQueue(conv([line({})]), {
      enFirst: true, skipEnglish: () => false, hasClip: allClips,
    })
    expect(withIntro[withIntro.length - 1])
      .toEqual({ kind: 'chime', lineIdx: null, clip: CHIME_CLIP, recordWords: null })
    // no intro clips in the bundle → chime still closes the conversation
    const noIntro = buildQueue(conv([line({})]), {
      enFirst: true, skipEnglish: () => false, hasClip: c => !c.startsWith('intro'),
    })
    expect(noIntro.map(s => s.kind)).toEqual(['line_en', 'line_jp', 'chime'])
    expect(withIntro.filter(s => s.kind === 'chime')).toHaveLength(1)
  })

  it('rewindBeforeLineStart: next() replays the line pair from its first step (pause→resume, user 2026-07-18)', () => {
    const q = buildQueue(conv([line({ words: [1] }), line({ words: [2] })]), {
      enFirst: false, skipEnglish: () => false, hasClip: allClips,
    })
    const eng = new SessionEngine(conv([line({ words: [1] }), line({ words: [2] })]), q)
    // walk to line 0's SECOND step (jp-first: [intro_jp, intro_en, jp0, en0, jp1, en1, chime])
    eng.next(); eng.next(); eng.next(); const en0 = eng.next()
    expect(en0?.kind).toBe('line_en')
    expect(eng.rewindBeforeLineStart()).toBe(true)
    const replay = eng.next()
    expect(replay?.kind).toBe('line_jp')   // the JP replays, per the user's spec
    expect(replay?.lineIdx).toBe(0)
    // intro/chime steps refuse the rewind (callers restart the clip instead)
    const eng2 = new SessionEngine(conv([line({})]), q)
    eng2.next() // intro_jp
    expect(eng2.rewindBeforeLineStart()).toBe(false)
  })

  it('clip-less bundle → EMPTY queue, no lone chime (a corrupt bundle must hit the unplayable guard, not "complete" off a 1.2s ding)', () => {
    const q = buildQueue(conv([line({}), line({})]), {
      enFirst: true, skipEnglish: () => false, hasClip: () => false,
    })
    expect(q).toEqual([])
  })

  it('skips EN when graduation says so; words still record on JP', () => {
    const q = buildQueue(conv([line({ words: [7] })]), {
      enFirst: true, skipEnglish: () => true, hasClip: allClips,
    })
    expect(q.filter(s => s.kind === 'line_en')).toHaveLength(0)
    const jp = q.find(s => s.kind === 'line_jp')!
    expect(jp.recordWords).toEqual([7])
  })

  it('tolerates missing clips (nonverbal lines without EN audio)', () => {
    const hasClip = (c: string) => !c.endsWith('_en.mp3') && !c.endsWith('_en.wav') || c === 'intro_en.mp3'
    const q = buildQueue(conv([line({ nonverbal: true, words: [] })]), {
      enFirst: true, skipEnglish: l => l.nonverbal, hasClip,
    })
    expect(q.map(s => s.kind)).toEqual(['intro_en', 'intro_jp', 'line_jp', 'chime'])
  })

  it('NEVER records words off the English clip when the JP clip is missing', () => {
    // review finding: EN-only lines must not grant Japanese reviews
    const hasClip = (c: string) => !c.includes('_jp.')
    const q = buildQueue(conv([line({ words: [4, 5] })]), {
      enFirst: true, skipEnglish: () => false, hasClip,
    })
    const en = q.find(s => s.kind === 'line_en')!
    expect(en.recordWords).toBeNull()
    expect(q.find(s => s.kind === 'line_jp')).toBeUndefined()
  })

  it('falls back to .wav clips (rendered silence beats)', () => {
    const hasClip = (c: string) => c.endsWith('.wav') || c.startsWith('intro')
    const q = buildQueue(conv([line({ words: [] })]), {
      enFirst: true, skipEnglish: () => false, hasClip,
    })
    const jp = q.find(s => s.kind === 'line_jp')!
    expect(jp.clip).toBe('line_000_yuki_office_jp.wav')
  })

  it('clip names match the audio pipeline layout', () => {
    expect(clipName(0, 'yuki_office', 'en')).toBe('line_000_yuki_office_en.mp3')
    expect(clipName(12, 'kenji_office', 'jp')).toBe('line_012_kenji_office_jp.mp3')
  })
})

describe('SessionEngine', () => {
  it('walks the queue and finishes', () => {
    const q = buildQueue(conv([line({})]), { enFirst: true, skipEnglish: () => false, hasClip: allClips })
    const e = new SessionEngine(conv([line({})]), q)
    let steps = 0
    while (e.next()) steps++
    expect(steps).toBe(q.length)
    expect(e.isFinished()).toBe(true)
  })
})

function freshUserDb(): UserDB {
  const db = new UserDB(nodeDriver(new DatabaseSync(':memory:') as any))
  db.migrate()
  return db
}

describe('SessionRecorder', () => {
  const now = new Date('2026-08-01T12:00:00')

  it('sentenceCompleted registers each learnable word once through the scheduler', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1, 2, 3]), defaultSettings())
    rec.sentenceCompleted([1, 2, 2, 999], now) // dupes collapse; 999 not learnable
    expect(db.loadWord(1)?.totalReps).toBe(1)
    expect(db.loadWord(2)?.totalReps).toBe(1)
    expect(db.loadWord(999)).toBeUndefined()
  })

  it('sentenceCompleted returns the honest review count: unique + learnable only', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1, 2]), defaultSettings())
    expect(rec.sentenceCompleted([1, 2, 2, 999], now)).toBe(2) // dupe + non-learnable excluded
    expect(rec.sentenceCompleted([999, 998], now)).toBe(0)     // nothing learnable → 0
    expect(rec.sentenceCompleted([], now)).toBe(0)             // empty sentence → 0
  })

  it('same sentence heard again the same day = same-day repeat (totalReps only)', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    rec.sentenceCompleted([1], now)
    rec.sentenceCompleted([1], new Date(now.getTime() + 60_000))
    const st = db.loadWord(1)!
    expect(st.totalReps).toBe(2)
    expect(st.distinctDays).toBe(1)
  })

  it('convCompleted: minutes, streak, frontier, last_session_end', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    rec.sentenceCompleted([1], now)
    rec.addSeconds(120)
    const { streak } = rec.convCompleted('conv_00001', 1, now)
    expect(streak.count).toBe(1)
    expect(Number(db.getKV('frontier_ord'))).toBe(1)
    expect(Number(db.getKV('last_session_end'))).toBe(now.getTime())
    const day = db.dayStats(1)[0]
    expect(day.day).toBe(dayKey(now))
    expect(day.seconds).toBe(120)
    expect(db.lastPlayedMap().get('conv_00001')).toBe(now.getTime())
  })

  it('anti-repeat ring persists across recorder instances (user 2026-07-21: fresh launches replayed the same picks)', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    for (let i = 1; i <= 10; i++) rec.convCompleted(`conv_${String(i).padStart(5, '0')}`, i, now)
    // a brand-new recorder over the same db (= next app launch) still knows
    // the last 8 completions, oldest first
    const reborn = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    expect(reborn.recentConvRing()).toEqual(
      [3, 4, 5, 6, 7, 8, 9, 10].map(i => `conv_${String(i).padStart(5, '0')}`))
  })

  it('unplayable conversations enter the ring too (recency must move on)', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    rec.convCompleted('conv_00001', 1, now, false)
    expect(rec.recentConvRing()).toEqual(['conv_00001'])
  })

  it('a malformed ring kv reads as empty — never throws', () => {
    const db = freshUserDb()
    db.setKV('recent_conv_ring', '{not json')
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    expect(rec.recentConvRing()).toEqual([])
  })

  it('sessionEnded flushes partial listening without a conversation credit', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    rec.sentenceCompleted([1], now)
    rec.addSeconds(45)
    rec.sessionEnded(now)
    const day = db.dayStats(1)[0]
    expect(day.seconds).toBe(45)
    const raw = db.loadStreak()
    expect(raw).toBeUndefined() // no conversation completed → streak untouched
  })

  it('flushPartial accumulates day_stats with NO conversation credit, streak, or absence-clock movement', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    rec.sentenceCompleted([1], now)
    rec.addSeconds(30)
    rec.flushPartial(now)
    const later = new Date(now.getTime() + 60_000)
    rec.sentenceCompleted([1], later)
    rec.addSeconds(25)
    rec.flushPartial(later)
    const t = db.todayStats(now)
    expect(t.seconds).toBe(55)                            // accumulates across flushes
    expect(t.sentences).toBe(2)
    expect(t.conversations).toBe(0)                       // never a conversation credit
    expect(db.loadStreak()).toBeUndefined()               // streak untouched
    expect(db.getKV('last_session_end')).toBeUndefined()  // absence clock untouched
    expect(db.getKV('frontier_ord')).toBeUndefined()      // frontier untouched
    expect(rec.pendingListenedSeconds()).toBe(0)          // everything persisted
  })

  it('flushPartial carries the sub-second remainder (floor-with-carry, no rounding drift)', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    rec.sentenceCompleted([1], now)
    rec.addSeconds(4.6)
    rec.flushPartial(now)                                  // floor → 4s, carry 0.6
    expect(db.todayStats(now).seconds).toBe(4)
    expect(rec.pendingListenedSeconds()).toBeCloseTo(0.6)
    rec.addSeconds(4.6)                                    // pending 5.2
    rec.flushPartial(now)                                  // floor → 5s, carry 0.2
    expect(db.todayStats(now).seconds).toBe(9)             // honest cumulative floor, never rounded up
    expect(rec.pendingListenedSeconds()).toBeCloseTo(0.2)
  })

  it('flushPartial with nothing pending writes no day row', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    rec.flushPartial(now)
    expect(db.dayStats(1)).toHaveLength(0)
  })

  it('last_session_end moves only via sessionEnded, even after partial flushes', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    rec.sentenceCompleted([1], now)
    rec.addSeconds(10)
    rec.flushPartial(now)
    expect(db.getKV('last_session_end')).toBeUndefined()
    rec.sessionEnded(now)                                  // heard → absence clock moves
    expect(Number(db.getKV('last_session_end'))).toBe(now.getTime())
    expect(db.todayStats(now).seconds).toBe(10)            // no double-count after flushPartial
  })

  it('pickerContext mirrors the simulator: dues are weight>=1 only', () => {
    const db = freshUserDb()
    const sched = new Scheduler()
    const rec = new SessionRecorder(db, sched, new Set([1]), defaultSettings())
    rec.sentenceCompleted([1], now)
    // CRITICAL locked rule: a word heard today already had its scheduling
    // review — it must NOT reappear as a due the same day, even though
    // ts-fsrs learning steps set its due date minutes ahead. Without the
    // same-day exclusion the dues path hijacks all picks for the day.
    const ctx = rec.pickerContext(new Date(now.getTime() + 3_600_000))
    expect(ctx.dueWeights.has(1)).toBe(false)
    expect(ctx.inFlightWords!.get(1)).toBe(SRS_CONFIG.picker.inFlightRepFloor - 1)
    // 60 days later (different dayKey) the word is genuinely overdue → due
    const later = rec.pickerContext(new Date(now.getTime() + 60 * 86_400_000))
    expect(later.dueWeights.get(1)).toBeGreaterThanOrEqual(1) // non-vacuous
  })

  it('dueCompletedLastSentence: counts DUE-today completions only, never new words', () => {
    const db = freshUserDb()
    const sched = new Scheduler()
    const rec = new SessionRecorder(db, sched, new Set([1, 2]), defaultSettings())
    // brand-new words: recorded but nothing was "waiting" → 0 (the old
    // UI decremented by `recorded` and flashed a false "all reviews done ✓")
    expect(rec.sentenceCompleted([1], now)).toBe(1)
    expect(rec.dueCompletedLastSentence()).toBe(0)
    // 60 days later word 1 is genuinely overdue (dueTodayCount member) while
    // word 2 is still new → exactly ONE due completion
    const later = new Date(now.getTime() + 60 * 86_400_000)
    expect(rec.dueTodayCount(later)).toBe(1)
    expect(rec.sentenceCompleted([1, 2], later)).toBe(2)
    expect(rec.dueCompletedLastSentence()).toBe(1)
    // same sentence again the same day: word 1 was already heard today → 0
    rec.sentenceCompleted([1, 2], new Date(later.getTime() + 1000))
    expect(rec.dueCompletedLastSentence()).toBe(0)
  })

  it('convCompleted with heardAnything=false grants no streak/minutes/frontier', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    const { streak } = rec.convCompleted('conv_00009', 9, now, false)
    expect(streak.count).toBe(0)
    expect(db.getKV('frontier_ord')).toBeUndefined()
    expect(db.dayStats(1)).toHaveLength(0)
    // recency IS recorded so the picker moves past the unplayable conv
    expect(db.lastPlayedMap().has('conv_00009')).toBe(true)
  })

  it('skipEnglishFn flips per word graduation', () => {
    const db = freshUserDb()
    const sched = new Scheduler()
    const settings = defaultSettings()
    settings.graduation = { exposures: 2, days: 0, fastTrackMaxRank: 0 } as any
    const rec = new SessionRecorder(db, sched, new Set([1]), settings)
    const l = line({ words: [1] })
    expect(rec.skipEnglishFn(now)(l)).toBe(false)
    rec.sentenceCompleted([1], now)
    rec.sentenceCompleted([1], new Date(now.getTime() + 1000))
    expect(rec.skipEnglishFn(new Date(now.getTime() + 2000))(l)).toBe(true)
  })
})

describe('M4 summary queries + graduation predicate', () => {
  const now = new Date('2026-08-01T12:00:00')

  it('todayStats/newWordsSince respect the 4AM day', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    rec.sentenceCompleted([1], now)
    rec.addSeconds(300)
    rec.convCompleted('conv_00001', 1, now)
    const t = db.todayStats(now)
    expect(t.seconds).toBe(300)
    expect(t.conversations).toBe(1)
    expect(db.newWordsSince(new Date(now.getTime() - 3_600_000))).toBe(1)
    // next 4AM day: empty
    const tomorrow = new Date('2026-08-02T05:00:00')
    expect(db.todayStats(tomorrow).seconds).toBe(0)
  })

  it('graduatedFn flips after thresholds and drives furigana hiding', () => {
    const db = freshUserDb()
    const settings = defaultSettings()
    settings.graduation = { exposures: 2, days: 0, fastTrackMaxRank: 0 } as any
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1, 2]), settings)
    rec.sentenceCompleted([1], now)
    rec.sentenceCompleted([1], new Date(now.getTime() + 1000))
    const graduated = rec.graduatedFn(new Date(now.getTime() + 2000))
    expect(graduated(1)).toBe(true)
    expect(graduated(2)).toBe(false)  // never heard
    expect([1, 2].filter(graduated)).toEqual([1]) // the view's graduatedIds shape
  })

  it('furigana hides only when graduated AND seen enough (pocket listening never hides readings)', () => {
    const db = freshUserDb()
    const settings = defaultSettings()
    settings.graduation = { exposures: 2, days: 0, fastTrackMaxRank: 0 } as any
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1]), settings)
    // graduate by ear only (screen locked: seen=false)
    rec.sentenceCompleted([1], now, false)
    rec.sentenceCompleted([1], new Date(now.getTime() + 1000), false)
    const t2 = new Date(now.getTime() + 2000)
    expect(rec.graduatedFn(t2)(1)).toBe(true)          // EN audio may drop
    expect(rec.furiganaHiddenFn(t2)(1)).toBe(false)    // reading STAYS
    expect(db.loadWord(1)!.totalSeens).toBe(0)
    // now seen twice on a lit screen → reading earned
    rec.sentenceCompleted([1], new Date(now.getTime() + 3000), true)
    rec.sentenceCompleted([1], new Date(now.getTime() + 4000), true)
    expect(db.loadWord(1)!.totalSeens).toBe(2)
    expect(rec.furiganaHiddenFn(new Date(now.getTime() + 5000))(1)).toBe(true)
  })

  it('migrates a v1 word_state table without losing data', () => {
    const raw = new DatabaseSync(':memory:')
    raw.exec(`
      CREATE TABLE word_state (
        word_id INTEGER PRIMARY KEY, stability REAL NOT NULL, difficulty REAL NOT NULL,
        due_at INTEGER NOT NULL, last_review_at INTEGER, state INTEGER NOT NULL,
        reps INTEGER NOT NULL, lapses INTEGER NOT NULL, total_reps INTEGER NOT NULL,
        distinct_days INTEGER NOT NULL, first_heard_at INTEGER, last_heard_day TEXT,
        same_day_bonus INTEGER NOT NULL DEFAULT 0
      );
      INSERT INTO word_state VALUES (7, 3.5, 5.0, 1000, 500, 2, 3, 0, 9, 4, 100, '2026-08-01', 1);
      CREATE TABLE sync_meta (chunk_id INTEGER PRIMARY KEY, dirty INTEGER NOT NULL DEFAULT 0, synced_at INTEGER);
      CREATE TABLE day_stats (
        day TEXT PRIMARY KEY, seconds INTEGER NOT NULL DEFAULT 0,
        sentences INTEGER NOT NULL DEFAULT 0, conversations INTEGER NOT NULL DEFAULT 0,
        goal_met INTEGER NOT NULL DEFAULT 0, minimum_met INTEGER NOT NULL DEFAULT 0
      );
      PRAGMA user_version = 1;
    `)
    const db = new UserDB(nodeDriver(raw as any))
    db.migrate()
    const st = db.loadWord(7)!
    expect(st.totalReps).toBe(9)      // existing data intact
    expect(st.totalSeens).toBe(0)     // new column defaulted
    st.totalSeens = 5
    db.saveWord(st)                   // round-trips through the new column
    expect(db.loadWord(7)!.totalSeens).toBe(5)
  })
})

describe('resetAllProgress', () => {
  it('wipes learning state but keeps settings and infra keys', () => {
    const db = freshUserDb()
    const rec = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    const now = new Date('2026-08-01T12:00:00')
    rec.sentenceCompleted([1], now)
    rec.addSeconds(60)
    rec.convCompleted('conv_03473', 3473, now) // polluted frontier scenario
    db.setKV('settings', '{"goalMinutes":45}')
    db.setKV('lan_base_url', 'http://10.0.0.32:8765')
    db.setKV('content_db_hash', 'abc')
    db.setKV('onboarded', '1')

    db.resetAllProgress()

    expect(db.countHeard()).toBe(0)
    expect(db.lastPlayedMap().size).toBe(0)
    expect(db.dayStats(10)).toHaveLength(0)
    expect(db.loadStreak()).toBeUndefined()
    expect(db.getKV('frontier_ord')).toBeUndefined()   // the poisoned frontier
    expect(db.getKV('last_session_end')).toBeUndefined()
    expect(db.getKV('onboarded')).toBeUndefined()      // onboarding re-runs
    expect(db.getKV('settings')).toBe('{"goalMinutes":45}')
    expect(db.getKV('lan_base_url')).toBe('http://10.0.0.32:8765')
    expect(db.getKV('content_db_hash')).toBe('abc')
  })
})

describe('comprehensible-input tracking', () => {
  const now = new Date('2026-08-01T12:00:00')
  const CI_REPS = SRS_CONFIG.picker.ciComfort.knownReps
  const convsOf = (id: number) => (id === 1 ? ['conv_a', 'conv_b'] : ['conv_c'])
  const wordCounts = new Map([['conv_a', 10], ['conv_b', 4], ['conv_c', 5]])

  function recWithCi(db: UserDB) {
    return new SessionRecorder(db, new Scheduler(), new Set([1, 2]), defaultSettings(), convsOf, wordCounts)
  }

  it('a word crossing ciKnownReps bumps exactly its conversations, once', () => {
    const db = freshUserDb()
    const rec = recWithCi(db)
    for (let i = 0; i < CI_REPS - 1; i++) {
      rec.sentenceCompleted([1], new Date(now.getTime() + i * 1000))
    }
    expect(rec.ciRatioOf('conv_a')).toBe(0)          // not crossed yet
    rec.sentenceCompleted([1], new Date(now.getTime() + 99_000)) // crossing rep
    expect(rec.ciRatioOf('conv_a')).toBeCloseTo(1 / 10, 5)
    expect(rec.ciRatioOf('conv_b')).toBeCloseTo(1 / 4, 5)
    expect(rec.ciRatioOf('conv_c')).toBe(0)
    // persisted too
    expect(db.loadConvKnown().get('conv_a')).toBe(1)
    // further reps do NOT bump again
    rec.sentenceCompleted([1], new Date(now.getTime() + 100_000))
    expect(db.loadConvKnown().get('conv_a')).toBe(1)
  })

  it('backfill on upgrade counts pre-existing known words exactly once', () => {
    const db = freshUserDb()
    // simulate a pre-CI install: word 1 already has >= threshold reps
    const plain = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings())
    for (let i = 0; i <= CI_REPS; i++) plain.sentenceCompleted([1], new Date(now.getTime() + i * 1000))
    expect(db.loadConvKnown().size).toBe(0) // no CI callbacks → nothing tracked
    // first CI-enabled recorder backfillsâ€¦
    const rec = recWithCi(db)
    expect(rec.ciRatioOf('conv_a')).toBeCloseTo(1 / 10, 5)
    // â€¦and a second one does not double-count (kv flag)
    const rec2 = recWithCi(db)
    expect(rec2.ciRatioOf('conv_a')).toBeCloseTo(1 / 10, 5)
  })

  it('pickerContext exposes ciRatioOf + adaptive ciTarget only when wired', () => {
    const db = freshUserDb()
    const withCi = recWithCi(db).pickerContext(now)
    expect(withCi.ciRatioOf).toBeDefined()
    expect(withCi.ciTarget).toBeCloseTo(ciTargetFor(0), 5)
    const without = new SessionRecorder(db, new Scheduler(), new Set([1]), defaultSettings()).pickerContext(now)
    expect(without.ciRatioOf).toBeUndefined()
    expect(without.ciTarget).toBeUndefined()
  })
})

describe('bestUnheardInWindow (CI new-content path)', () => {
  // minimal 3-conv fixture (same shape as the ContentDb suite's)
  function windowFixture(): ContentDb {
    const raw = new DatabaseSync(':memory:')
    raw.exec(`
      CREATE TABLE conversations (conv_id TEXT PRIMARY KEY, ord INTEGER, tier INTEGER,
        line_count INTEGER, word_count INTEGER, cast TEXT, context TEXT, ambient TEXT,
        duration_sec REAL, bundle_bytes INTEGER DEFAULT 0, median_line_chars REAL);
      INSERT INTO conversations VALUES
        ('conv_a',1,1,8,10,'[]','a',NULL,60.0,0,15),
        ('conv_b',2,1,8,4,'[]','b',NULL,45.0,0,15),
        ('conv_c',3,1,8,5,'[]','c',NULL,30.0,0,15);
    `)
    return new ContentDb(nodeDriver(raw as any), () => new Map())
  }

  it('picks the highest-ratio teaching conv in the window; skips ratio=1 and excluded', () => {
    const content = windowFixture()
    // conv_a ord1, conv_b ord2, conv_c ord3
    const ratios = new Map([['conv_a', 0.9], ['conv_b', 1.0], ['conv_c', 0.7]])
    const ratioOf = (id: string) => ratios.get(id)
    const pick = content.bestUnheardInWindow(0, 300, new Set(), ratioOf)
    expect(pick!.convId).toBe('conv_a')          // 0.9 beats 0.7; 1.0 teaches nothing
    const pick2 = content.bestUnheardInWindow(0, 300, new Set(['conv_a']), ratioOf)
    expect(pick2!.convId).toBe('conv_c')
    // outside the window → null (caller falls back to nextUnheard)
    expect(content.bestUnheardInWindow(5, 300, new Set(), ratioOf)).toBeNull()
  })
})

describe('settings persistence', () => {
  it('round-trips through kv with defaults for missing fields', () => {
    const db = freshUserDb()
    expect(loadSettings(db).enFirst).toBe(true)
    const s = loadSettings(db)
    s.enFirst = false
    s.goalMinutes = 30
    saveSettings(db, s)
    const back = loadSettings(db)
    expect(back.enFirst).toBe(false)
    expect(back.goalMinutes).toBe(30)
    expect(back.graduation.exposures).toBe(SRS_CONFIG.graduation.defaultExposures)
  })

  it('deep-merges + clamps graduation from older/corrupt blobs', () => {
    const db = freshUserDb()
    // blob from a hypothetical older build: graduation missing a field
    db.setKV('settings', JSON.stringify({ enFirst: false, graduation: { exposures: 999 } }))
    const s = loadSettings(db)
    expect(s.graduation.exposures).toBe(SRS_CONFIG.graduation.maxExposures) // clamped
    expect(s.graduation.days).toBe(SRS_CONFIG.graduation.defaultDays)       // defaulted
    // graduation: null must not crash session start
    db.setKV('settings', JSON.stringify({ graduation: null }))
    expect(loadSettings(db).graduation.days).toBe(SRS_CONFIG.graduation.defaultDays)
  })
})

describe('ContentDb', () => {
  function contentFixture(): { content: ContentDb, lastPlayed: Map<string, number> } {
    const raw = new DatabaseSync(':memory:')
    raw.exec(`
      CREATE TABLE words (word_id INTEGER PRIMARY KEY, jp TEXT, gloss1 TEXT, gloss2 TEXT,
        contexts INTEGER DEFAULT 0, learnable INTEGER DEFAULT 1);
      CREATE TABLE conversations (conv_id TEXT PRIMARY KEY, ord INTEGER, tier INTEGER,
        line_count INTEGER, word_count INTEGER, cast TEXT, context TEXT, ambient TEXT,
        duration_sec REAL, bundle_bytes INTEGER DEFAULT 0, median_line_chars REAL);
      CREATE TABLE conv_words (conv_id TEXT, word_id INTEGER, PRIMARY KEY (conv_id, word_id));
      INSERT INTO words VALUES (1,'ã®','p',NULL,2,1),(2,'ã«','p',NULL,1,1),(3,'x','f',NULL,0,0);
      INSERT INTO conversations VALUES
        ('conv_a',1,1,8,60,'["yuki_office"]','ctx a','izakaya',60.0,1000,12.0),
        ('conv_b',2,1,8,50,'["kenji_office"]','ctx b','office',45.0,900,14.0),
        ('conv_c',3,1,8,40,'["mika_studentF"]','ctx c',NULL,30.0,800,NULL);
      INSERT INTO conv_words VALUES ('conv_a',1),('conv_a',2),('conv_b',1),('conv_c',2);
    `)
    const lastPlayed = new Map<string, number>()
    const content = new ContentDb(nodeDriver(raw as any), () => lastPlayed)
    return { content, lastPlayed }
  }

  it('convsContaining groups word hits per conversation', () => {
    const { content } = contentFixture()
    const m = content.convsContaining([1, 2])
    expect(m.get('conv_a')!.sort()).toEqual([1, 2])
    expect(m.get('conv_b')).toEqual([1])
    expect(m.get('conv_c')).toEqual([2])
  })

  it('convOrds bulk-maps conv ids to ords (window-before-cap support)', () => {
    const { content } = contentFixture()
    const m = content.convOrds(['conv_a', 'conv_c', 'conv_missing'])
    expect(m.get('conv_a')).toBe(1)
    expect(m.get('conv_c')).toBe(3)
    expect(m.has('conv_missing')).toBe(false)
  })

  it('nextUnheard walks ord order and honors exclusions', () => {
    const { content } = contentFixture()
    expect(content.nextUnheard(0, new Set())!.convId).toBe('conv_a')
    expect(content.nextUnheard(1, new Set())!.convId).toBe('conv_b')
    expect(content.nextUnheard(1, new Set(['conv_b']))!.convId).toBe('conv_c')
    expect(content.nextUnheard(3, new Set())).toBeNull()
  })

  it('leastRecentlyPlayed sorts by provider timestamps (never-played first)', () => {
    const { content, lastPlayed } = contentFixture()
    lastPlayed.set('conv_a', 2000)
    lastPlayed.set('conv_b', 1000)
    const lru = content.leastRecentlyPlayed(2).map(c => c.convId)
    expect(lru).toEqual(['conv_c', 'conv_b'])
  })

  it('learnableSet excludes learnable=0 residue', () => {
    const { content } = contentFixture()
    const s = content.learnableSet()
    expect(s.has(1)).toBe(true)
    expect(s.has(3)).toBe(false)
  })

  it('convInfo parses cast json', () => {
    const { content } = contentFixture()
    expect(content.convInfo('conv_a')!.cast).toEqual(['yuki_office'])
    expect(content.word(1)!.jp).toBe('ã®')
  })

  it('level window: dues never surface UNHEARD convs far past the frontier', () => {
    const { content, lastPlayed } = contentFixture()
    const now = new Date('2026-08-01T12:00:00')
    // put conv_c (ord 3) far beyond a frontier-0 window by shrinking the
    // window virtually: heard convs are exempt, unheard past-window are not.
    // With frontier 0 the window covers ord<=300 so all fixture convs pass;
    // verify the mechanism with a heard-vs-unheard contrast instead:
    // word 2 lives in conv_a (ord 1, unheard) and conv_c (ord 3, unheard).
    // If conv_c were beyond the window it must be skipped even at max density.
    const ctx = {
      now,
      dueWeights: new Map([[2, 3]]),
      lastPlayed,
      frontierOrd: -UNHEARD_ORD_WINDOW + 1, // window reaches only ord 1
      excludeConvIds: new Set<string>(),
    }
    const pick = pickNextConversation(content, ctx)!
    expect(pick.convId).toBe('conv_a') // ord 1: inside window; conv_c (ord 3) blocked
    // once conv_c has been HEARD, the window no longer applies to it
    lastPlayed.set('conv_c', 1)
    const pick2 = pickNextConversation(content, { ...ctx, excludeConvIds: new Set(['conv_a']) })!
    expect(pick2.convId).toBe('conv_c')
  })

  it('firstNConvIds returns ord-ordered ids for offline packs', () => {
    const { content } = contentFixture()
    expect(content.firstNConvIds(2)).toEqual(['conv_a', 'conv_b'])
    expect(content.firstNConvIds(99)).toHaveLength(3)
  })

  it('NEVER immediately repeats a conversation (user report 2026-07-10)', () => {
    const { content, lastPlayed } = contentFixture()
    const now = new Date('2026-08-01T12:00:00')
    // conv_a contains BOTH due words → highest density → the dues path's
    // natural argmax. The exclusion must force a different conversation.
    const ctx = {
      now,
      dueWeights: new Map([[1, 3], [2, 3]]),
      lastPlayed,
      frontierOrd: 1,
      inFlightWords: new Map<number, number>(),
    }
    // guards the guard: unguarded, conv_a IS the pick
    expect(pickNextConversation(content, ctx)!.convId).toBe('conv_a')
    const pick = pickNextConversation(content, { ...ctx, excludeConvIds: new Set(['conv_a']) })!
    expect(pick.convId).not.toBe('conv_a')
    expect(pick.reason).toBe('dues') // still serves dues, just elsewhere
  })

  it('a ring exclusion stops two dense conversations from ping-ponging (user report #2)', () => {
    const { content, lastPlayed } = contentFixture()
    const now = new Date('2026-08-01T12:00:00')
    // conv_a and conv_b are the two densest for the due set; excluding only
    // the last-completed conv let them alternate forever. With BOTH in the
    // exclusion ring the picker must go elsewhere (conv_c serves word 2).
    const ctx = {
      now,
      dueWeights: new Map([[1, 3], [2, 3]]),
      lastPlayed,
      frontierOrd: 0,
      excludeConvIds: new Set(['conv_a', 'conv_b']),
    }
    const pick = pickNextConversation(content, ctx)!
    expect(['conv_a', 'conv_b']).not.toContain(pick.convId)
    expect(pick.convId).toBe('conv_c')
  })

  it('excluded convs are skipped by new-content and recycle paths too', () => {
    const { content, lastPlayed } = contentFixture()
    const now = new Date('2026-08-01T12:00:00')
    const base = { now, dueWeights: new Map<number, number>(), lastPlayed, frontierOrd: 1 }
    // new path: frontier=1 → next unheard is conv_b; excluded → conv_c
    const p1 = pickNextConversation(content, { ...base, excludeConvIds: new Set(['conv_b']) })!
    expect(p1.convId).toBe('conv_c')
    // recycle path: whole corpus heard; LRU order c(oldest), but c excluded → next LRU
    lastPlayed.set('conv_a', 3000); lastPlayed.set('conv_b', 2000); lastPlayed.set('conv_c', 1000)
    const p2 = pickNextConversation(content, { ...base, frontierOrd: 3, excludeConvIds: new Set(['conv_c']) })!
    expect(p2.reason).toBe('recycle')
    expect(p2.convId).toBe('conv_b')
  })
})

describe('sentence-length comfort (user rule 2026-07-14)', () => {
  const now = new Date('2026-08-01T12:00:00')
  const cfg = SRS_CONFIG.picker.lengthComfort

  // Four conversations, identical except for median sentence length, all
  // containing the same single target word so dues-density is otherwise equal.
  function lengthFixture(): { content: ContentDb, lastPlayed: Map<string, number> } {
    const raw = new DatabaseSync(':memory:')
    raw.exec(`
      CREATE TABLE words (word_id INTEGER PRIMARY KEY, jp TEXT, gloss1 TEXT, gloss2 TEXT,
        contexts INTEGER DEFAULT 0, learnable INTEGER DEFAULT 1);
      CREATE TABLE conversations (conv_id TEXT PRIMARY KEY, ord INTEGER, tier INTEGER,
        line_count INTEGER, word_count INTEGER, cast TEXT, context TEXT, ambient TEXT,
        duration_sec REAL, bundle_bytes INTEGER DEFAULT 0, median_line_chars REAL);
      CREATE TABLE conv_words (conv_id TEXT, word_id INTEGER, PRIMARY KEY (conv_id, word_id));
      INSERT INTO words VALUES (1,'ã®','p',NULL,4,1);
      INSERT INTO conversations VALUES
        ('conv_short',  1,1,8,60,'["yuki_office"]','ctx','izakaya',60.0,1000,10.0),
        ('conv_long',   2,1,8,60,'["kenji_office"]','ctx','office', 60.0,1000,39.0),
        ('conv_outlier',3,1,8,60,'["mika_studentF"]','ctx',NULL,    60.0,1000,50.0),
        ('conv_legacy', 4,1,8,60,'["yuki_office"]','ctx',NULL,      60.0,1000,NULL);
      INSERT INTO conv_words VALUES ('conv_short',1),('conv_long',1),('conv_outlier',1),('conv_legacy',1);
    `)
    const lastPlayed = new Map<string, number>()
    const content = new ContentDb(nodeDriver(raw as any), () => lastPlayed)
    return { content, lastPlayed }
  }

  it('comfort factor: 1.0 up to idealMax, linear to minFactor at hardMax, clamped after', () => {
    expect(lengthComfortFactor(5)).toBe(1)
    expect(lengthComfortFactor(cfg.idealMaxChars)).toBe(1)
    // midpoint of the ramp: exactly halfway between 1 and minFactor
    const mid = (cfg.idealMaxChars + cfg.hardMaxChars) / 2
    expect(lengthComfortFactor(mid)).toBeCloseTo((1 + cfg.minFactor) / 2, 10)
    expect(lengthComfortFactor(cfg.hardMaxChars)).toBeCloseTo(cfg.minFactor, 10)
    expect(lengthComfortFactor(cfg.hardMaxChars + 100)).toBe(cfg.minFactor) // clamped
    expect(lengthComfortFactor(undefined)).toBe(1) // legacy rows: no penalty
  })

  it('dues path prefers a short-median conversation over an equally-scored long one', () => {
    const { content, lastPlayed } = lengthFixture()
    const ctx = {
      now,
      dueWeights: new Map([[1, 3]]),
      lastPlayed,
      frontierOrd: 0,
      excludeConvIds: new Set(['conv_outlier', 'conv_legacy']),
    }
    expect(pickNextConversation(content, ctx)!.convId).toBe('conv_short')
    // the rule applies at EVERY level: heard candidates are penalized too
    lastPlayed.set('conv_short', 1000)
    lastPlayed.set('conv_long', 1000)
    expect(pickNextConversation(content, ctx)!.convId).toBe('conv_short')
  })

  it('nextUnheard NEVER serves a median > hardMax conversation as fresh content', () => {
    const { content } = lengthFixture()
    // ord order past 2 would be conv_outlier (median 50) — must skip to legacy
    expect(content.nextUnheard(2, new Set())!.convId).toBe('conv_legacy')
    // exhausted corpus stays exhausted: outlier alone never surfaces
    expect(content.nextUnheard(2, new Set(['conv_legacy']))).toBeNull()
    // convs at/below hardMax still flow in ord order
    expect(content.nextUnheard(0, new Set())!.convId).toBe('conv_short')
    expect(content.nextUnheard(1, new Set())!.convId).toBe('conv_long')
  })

  it('NULL median (legacy row) gets no penalty and stays servable everywhere', () => {
    const { content, lastPlayed } = lengthFixture()
    // scoring: legacy (NULL) must beat the near-hardMax conv at equal dues
    const ctx = {
      now,
      dueWeights: new Map([[1, 3]]),
      lastPlayed,
      frontierOrd: 0,
      excludeConvIds: new Set(['conv_short', 'conv_outlier']),
    }
    expect(pickNextConversation(content, ctx)!.convId).toBe('conv_legacy')
    // metadata round-trips: populated where present, undefined where NULL
    expect(content.convMeta('conv_long').medianLineChars).toBe(39)
    expect(content.convMeta('conv_legacy').medianLineChars).toBeUndefined()
    expect(content.leastRecentlyPlayed(4).find(c => c.convId === 'conv_short')!.medianLineChars).toBe(10)
  })
})


// user.db — the on-device source of truth for all learner state.
//
// Design (locked): local-first; expo-sqlite on device, node:sqlite in the
// simulator/tests via the same SQL through a minimal driver interface.
// Sync (M7) pushes dirty 500-word chunks to Supabase; chunk dirtiness is
// tracked here from day one so M7 is purely additive.
//
// Tables:
//   word_state(word_id PK, stability, difficulty, due_at, last_review_at,
//              state, reps, lapses, total_reps, distinct_days,
//              first_heard_at, last_heard_day, same_day_bonus)
//   conv_history(conv_id PK, last_played_at, play_count)
//   sessions(id PK AUTOINC, started_at, ended_at, seconds, conversations, sentences)
//   day_stats(day PK, seconds, sentences, conversations, goal_met, minimum_met)
//   streak(id=1 singleton, json)
//   sync_meta(chunk_id PK, dirty, synced_at)
//   kv(key PK, value)  — settings & small state
//
// PRAGMA user_version drives migrations.

import { State, type Card } from 'ts-fsrs'
import type { WordState } from './scheduler'
import { dayKey } from './day'

/** Minimal SQL driver both expo-sqlite and node:sqlite can satisfy. */
export interface SqlDriver {
  exec(sql: string): void
  run(sql: string, params?: unknown[]): void
  all<T = Record<string, unknown>>(sql: string, params?: unknown[]): T[]
  get<T = Record<string, unknown>>(sql: string, params?: unknown[]): T | undefined
  transaction(fn: () => void): void
}

export const SCHEMA_VERSION = 4
const CHUNK_SIZE = 500

export class UserDB {
  constructor(private d: SqlDriver) {}

  /** batch writes (e.g. one sentence's word upserts) into a single commit */
  transaction(fn: () => void): void { this.d.transaction(fn) }

  /** ALTER TABLE ADD COLUMN that tolerates the column already existing —
   *  re-running a half-finished migration must never brick the app */
  private addColumnIdempotent(sql: string): void {
    try {
      this.d.exec(sql)
    } catch (e) {
      if (!String(e).toLowerCase().includes('duplicate column')) throw e
    }
  }

  migrate(): void {
    const v = (this.d.get<{ v: number }>('PRAGMA user_version') as any)?.user_version
      ?? this.d.get<{ user_version: number }>('PRAGMA user_version')?.user_version ?? 0
    if (v >= SCHEMA_VERSION) return
    // v1/v2/v3 -> v4: additive upgrades, keep all data
    if (v >= 1 && v < SCHEMA_VERSION) {
      // Each step must be IDEMPOTENT, not just additive: the steps + version
      // bump are separate execs (not one transaction), so a process death
      // between an ALTER and the PRAGMA would otherwise re-run the ALTER on
      // every launch, throw "duplicate column", and brick init forever.
      if (v === 1) {
        this.addColumnIdempotent('ALTER TABLE word_state ADD COLUMN total_seens INTEGER NOT NULL DEFAULT 0;')
      }
      if (v <= 2) {
        this.d.exec(`
          CREATE TABLE IF NOT EXISTS conv_known (
            conv_id TEXT PRIMARY KEY,
            known INTEGER NOT NULL DEFAULT 0
          );
        `)
      }
      // v4: word-reviews persisted per day — a crash must never erase the
      // day's visible word count (user report 2026-07-15)
      this.addColumnIdempotent('ALTER TABLE day_stats ADD COLUMN reviews INTEGER NOT NULL DEFAULT 0;')
      this.d.exec(`PRAGMA user_version = ${SCHEMA_VERSION};`)
      return
    }
    this.d.exec(`
      CREATE TABLE IF NOT EXISTS word_state (
        word_id INTEGER PRIMARY KEY,
        stability REAL NOT NULL,
        difficulty REAL NOT NULL,
        due_at INTEGER NOT NULL,
        last_review_at INTEGER,
        state INTEGER NOT NULL,
        reps INTEGER NOT NULL,
        lapses INTEGER NOT NULL,
        total_reps INTEGER NOT NULL,
        distinct_days INTEGER NOT NULL,
        first_heard_at INTEGER,
        last_heard_day TEXT,
        same_day_bonus INTEGER NOT NULL DEFAULT 0,
        total_seens INTEGER NOT NULL DEFAULT 0
      );
      CREATE INDEX IF NOT EXISTS idx_ws_due ON word_state(due_at);
      CREATE TABLE IF NOT EXISTS conv_history (
        conv_id TEXT PRIMARY KEY,
        last_played_at INTEGER NOT NULL,
        play_count INTEGER NOT NULL DEFAULT 1
      );
      CREATE TABLE IF NOT EXISTS sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        started_at INTEGER NOT NULL,
        ended_at INTEGER,
        seconds INTEGER NOT NULL DEFAULT 0,
        conversations INTEGER NOT NULL DEFAULT 0,
        sentences INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS day_stats (
        day TEXT PRIMARY KEY,
        seconds INTEGER NOT NULL DEFAULT 0,
        sentences INTEGER NOT NULL DEFAULT 0,
        conversations INTEGER NOT NULL DEFAULT 0,
        goal_met INTEGER NOT NULL DEFAULT 0,
        minimum_met INTEGER NOT NULL DEFAULT 0,
        reviews INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS streak (id INTEGER PRIMARY KEY CHECK (id = 1), json TEXT NOT NULL);
      CREATE TABLE IF NOT EXISTS sync_meta (
        chunk_id INTEGER PRIMARY KEY,
        dirty INTEGER NOT NULL DEFAULT 0,
        synced_at INTEGER
      );
      CREATE TABLE IF NOT EXISTS kv (key TEXT PRIMARY KEY, value TEXT NOT NULL);
      CREATE TABLE IF NOT EXISTS conv_known (
        conv_id TEXT PRIMARY KEY,
        known INTEGER NOT NULL DEFAULT 0
      );
      PRAGMA user_version = ${SCHEMA_VERSION};
    `)
  }

  // ---- comprehensible-input known-counts per conversation ----

  /** full conv_id → CI-known-word-count map (loaded once at services init) */
  loadConvKnown(): Map<string, number> {
    const rows = this.d.all<{ conv_id: string, known: number }>('SELECT conv_id, known FROM conv_known')
    return new Map(rows.map(r => [r.conv_id, r.known]))
  }

  /** +1 CI-known word for each conversation (a word crossed ciKnownReps) */
  bumpConvKnown(convIds: string[]): void {
    for (const id of convIds) {
      this.d.run(
        'INSERT INTO conv_known VALUES (?, 1) ON CONFLICT(conv_id) DO UPDATE SET known = known + 1', [id])
    }
  }

  /** word ids at or above the CI-known rep threshold (backfill input) */
  ciKnownWordIds(minReps: number): number[] {
    return this.d.all<{ word_id: number }>(
      'SELECT word_id FROM word_state WHERE total_reps >= ?', [minReps]).map(r => r.word_id)
  }

  // ---- word state ----

  saveWord(s: WordState): void {
    const c = s.card
    this.d.run(
      `INSERT INTO word_state VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
       ON CONFLICT(word_id) DO UPDATE SET
         stability=excluded.stability, difficulty=excluded.difficulty,
         due_at=excluded.due_at, last_review_at=excluded.last_review_at,
         state=excluded.state, reps=excluded.reps, lapses=excluded.lapses,
         total_reps=excluded.total_reps, distinct_days=excluded.distinct_days,
         first_heard_at=excluded.first_heard_at, last_heard_day=excluded.last_heard_day,
         same_day_bonus=excluded.same_day_bonus, total_seens=excluded.total_seens`,
      [
        s.wordId, c.stability, c.difficulty, c.due.getTime(),
        c.last_review ? c.last_review.getTime() : null,
        c.state, c.reps, c.lapses,
        s.totalReps, s.distinctDays,
        s.firstHeardAt ? new Date(s.firstHeardAt).getTime() : null,
        s.lastHeardDayKey, s.sameDayBonusCount, s.totalSeens,
      ],
    )
    this.markChunkDirty(s.wordId)
  }

  loadWord(wordId: number): WordState | undefined {
    const r = this.d.get<any>('SELECT * FROM word_state WHERE word_id = ?', [wordId])
    return r ? rowToWordState(r) : undefined
  }

  loadWords(wordIds: number[]): Map<number, WordState> {
    const out = new Map<number, WordState>()
    for (let i = 0; i < wordIds.length; i += 900) { // SQLite param limit safety
      const slice = wordIds.slice(i, i + 900)
      const rows = this.d.all<any>(
        `SELECT * FROM word_state WHERE word_id IN (${slice.map(() => '?').join(',')})`, slice)
      for (const r of rows) out.set(r.word_id, rowToWordState(r))
    }
    return out
  }

  /** All words due at or before `now` (the 4AM-materialized due set is derived from this at day start). */
  dueWords(now: Date): { wordId: number, state: WordState }[] {
    const rows = this.d.all<any>('SELECT * FROM word_state WHERE due_at <= ? AND total_reps > 0', [now.getTime()])
    return rows.map(r => ({ wordId: r.word_id, state: rowToWordState(r) }))
  }

  /** Words heard but below the in-flight rep floor (reinforcement input). */
  inFlightWords(repFloor: number): { wordId: number, totalReps: number }[] {
    return this.d.all<any>(
      'SELECT word_id AS wordId, total_reps AS totalReps FROM word_state WHERE total_reps > 0 AND total_reps < ?',
      [repFloor],
    ) as any
  }

  countHeard(): number {
    return (this.d.get<any>('SELECT COUNT(*) AS n FROM word_state WHERE total_reps > 0')?.n as number) ?? 0
  }

  // ---- conversations / sessions / days ----

  recordConvPlayed(convId: string, at: Date): void {
    this.d.run(
      `INSERT INTO conv_history VALUES (?,?,1)
       ON CONFLICT(conv_id) DO UPDATE SET last_played_at=excluded.last_played_at, play_count=play_count+1`,
      [convId, at.getTime()],
    )
  }

  lastPlayedMap(): Map<string, number> {
    const rows = this.d.all<{ conv_id: string, last_played_at: number }>('SELECT conv_id, last_played_at FROM conv_history')
    return new Map(rows.map(r => [r.conv_id, r.last_played_at]))
  }

  frontierOrd(contentOrdOf: (convId: string) => number | undefined): number {
    // stored explicitly in kv to avoid a content-db join here
    return Number(this.getKV('frontier_ord') ?? '0')
  }
  setFrontierOrd(ord: number): void { this.setKV('frontier_ord', String(ord)) }

  addListening(at: Date, seconds: number, sentences: number, conversations: number,
               minimumMinutes: number, goalMinutes: number, reviews = 0): void {
    const day = dayKey(at)
    this.d.run(
      `INSERT INTO day_stats VALUES (?,?,?,?,0,0,?)
       ON CONFLICT(day) DO UPDATE SET
         seconds=seconds+excluded.seconds,
         sentences=sentences+excluded.sentences,
         conversations=conversations+excluded.conversations,
         reviews=reviews+excluded.reviews`,
      [day, seconds, sentences, conversations, reviews],
    )
    this.d.run(
      `UPDATE day_stats SET
         minimum_met = CASE WHEN seconds >= ? THEN 1 ELSE minimum_met END,
         goal_met    = CASE WHEN seconds >= ? THEN 1 ELSE goal_met END
       WHERE day = ?`,
      [minimumMinutes * 60, goalMinutes * 60, day],
    )
  }

  dayStats(lastNDays: number): { day: string, seconds: number, goal_met: number, minimum_met: number }[] {
    return this.d.all<any>(
      'SELECT day, seconds, goal_met, minimum_met FROM day_stats ORDER BY day DESC LIMIT ?', [lastNDays]) as any
  }

  /** listening stats for the CURRENT 4AM-bounded day (zeros when none yet) */
  todayStats(now: Date): { seconds: number, sentences: number, conversations: number, reviews: number } {
    const r = this.d.get<any>(
      'SELECT seconds, sentences, conversations, reviews FROM day_stats WHERE day = ?', [dayKey(now)])
    return r ?? { seconds: 0, sentences: 0, conversations: 0, reviews: 0 }
  }

  /** words first heard at or after `since` (e.g. dayStart → "new words today") */
  newWordsSince(since: Date): number {
    return (this.d.get<any>(
      'SELECT COUNT(*) AS n FROM word_state WHERE first_heard_at >= ?', [since.getTime()])?.n as number) ?? 0
  }

  /** Median daily minutes over the last N listening days (prediction input; locked: median not mean). */
  medianDailyMinutes(lastNDays: number): number {
    const rows = this.dayStats(lastNDays)
    if (!rows.length) return 0
    const mins = rows.map(r => r.seconds / 60).sort((a, b) => a - b)
    const mid = Math.floor(mins.length / 2)
    return mins.length % 2 === 1 ? mins[mid] : (mins[mid - 1] + mins[mid]) / 2
  }

  // ---- streak / kv / sync ----

  saveStreak(json: string): void {
    this.d.run('INSERT INTO streak VALUES (1, ?) ON CONFLICT(id) DO UPDATE SET json=excluded.json', [json])
  }
  loadStreak(): string | undefined {
    return this.d.get<{ json: string }>('SELECT json FROM streak WHERE id = 1')?.json
  }

  setKV(key: string, value: string): void {
    this.d.run('INSERT INTO kv VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value', [key, value])
  }
  getKV(key: string): string | undefined {
    return this.d.get<{ value: string }>('SELECT value FROM kv WHERE key = ?', [key])?.value
  }

  /**
   * Wipe all LEARNING state (words, history, minutes, streak, frontier) while
   * preserving user preferences and infrastructure keys. Added 2026-07-13: the
   * buggy early picker polluted the frontier with far-future ords, which
   * would defeat the level-window fix on existing installs.
   */
  resetAllProgress(): void {
    this.d.transaction(() => {
      this.d.exec(`
        DELETE FROM word_state;
        DELETE FROM conv_history;
        DELETE FROM sessions;
        DELETE FROM day_stats;
        DELETE FROM streak;
        DELETE FROM sync_meta;
      `)
      for (const key of ['frontier_ord', 'last_session_end', 'onboarded']) {
        this.d.run('DELETE FROM kv WHERE key = ?', [key])
      }
      // kept intentionally: 'settings', 'lan_base_url', 'content_db_hash'
    })
  }

  markChunkDirty(wordId: number): void {
    const chunk = Math.floor((wordId - 1) / CHUNK_SIZE)
    this.d.run(
      'INSERT INTO sync_meta VALUES (?,1,NULL) ON CONFLICT(chunk_id) DO UPDATE SET dirty=1', [chunk])
  }
  dirtyChunks(): number[] {
    return this.d.all<{ chunk_id: number }>('SELECT chunk_id FROM sync_meta WHERE dirty=1').map(r => r.chunk_id)
  }
  markChunkSynced(chunk: number, at: Date): void {
    this.d.run('UPDATE sync_meta SET dirty=0, synced_at=? WHERE chunk_id=?', [at.getTime(), chunk])
  }
}

function rowToWordState(r: any): WordState {
  const card: Card = {
    due: new Date(r.due_at),
    stability: r.stability,
    difficulty: r.difficulty,
    elapsed_days: 0,
    scheduled_days: 0,
    learning_steps: 0,
    reps: r.reps,
    lapses: r.lapses,
    state: r.state as State,
    last_review: r.last_review_at ? new Date(r.last_review_at) : undefined,
  } as Card
  return {
    wordId: r.word_id,
    card,
    totalReps: r.total_reps,
    totalSeens: r.total_seens ?? 0,
    distinctDays: r.distinct_days,
    firstHeardAt: r.first_heard_at ? new Date(r.first_heard_at).toISOString() : null,
    lastHeardAt: r.last_review_at ? new Date(r.last_review_at).toISOString() : null,
    lastHeardDayKey: r.last_heard_day ?? null,
    sameDayBonusCount: r.same_day_bonus,
  }
}

/** node:sqlite driver (simulator + tests). */
export function nodeDriver(db: {
  exec(sql: string): void
  prepare(sql: string): { run(...p: unknown[]): unknown, all(...p: unknown[]): unknown[], get(...p: unknown[]): unknown }
}): SqlDriver {
  return {
    exec: sql => db.exec(sql),
    run: (sql, params = []) => { db.prepare(sql).run(...params) },
    all: (sql, params = []) => db.prepare(sql).all(...params) as any[],
    get: (sql, params = []) => db.prepare(sql).get(...params) as any,
    transaction(fn) { db.exec('BEGIN'); try { fn(); db.exec('COMMIT') } catch (e) { db.exec('ROLLBACK'); throw e } },
  }
}

// UserDB round-trip tests on node:sqlite (same SQL the app runs on expo-sqlite).
import { DatabaseSync } from 'node:sqlite'
import { UserDB, nodeDriver } from '../db'
import { Scheduler, createWordState } from '../scheduler'

const mkDb = () => {
  const db = new UserDB(nodeDriver(new DatabaseSync(':memory:') as any))
  db.migrate()
  return db
}

describe('UserDB', () => {
  test('word state round-trips exactly through SQL', () => {
    const db = mkDb()
    const sched = new Scheduler()
    let s = createWordState(1234, new Date('2026-07-01T10:00:00'))
    s = sched.hear(s, new Date('2026-07-01T10:00:00'), null).state
    s = sched.hear(s, new Date('2026-07-05T10:00:00'), new Date('2026-07-04T10:00:00')).state
    db.saveWord(s)
    const loaded = db.loadWord(1234)!
    expect(loaded.card.stability).toBeCloseTo(s.card.stability, 10)
    expect(loaded.card.difficulty).toBeCloseTo(s.card.difficulty, 10)
    expect(loaded.card.due.getTime()).toBe(s.card.due.getTime())
    expect(loaded.totalReps).toBe(s.totalReps)
    expect(loaded.lastHeardDayKey).toBe(s.lastHeardDayKey)
    // and the loaded state keeps scheduling correctly
    const r = sched.hear(loaded, new Date('2026-07-20T10:00:00'), new Date('2026-07-19T10:00:00'))
    expect(r.kind).toBe('first_of_day')
  })

  test('due query + in-flight query + heard count', () => {
    const db = mkDb()
    const sched = new Scheduler()
    const now = new Date('2026-07-01T10:00:00')
    for (const id of [1, 2, 3]) {
      let s = createWordState(id, now)
      s = sched.hear(s, now, null).state
      db.saveWord(s)
    }
    expect(db.countHeard()).toBe(3)
    expect(db.inFlightWords(10).length).toBe(3)
    const farFuture = new Date('2027-01-01T00:00:00')
    expect(db.dueWords(farFuture).length).toBe(3)
    expect(db.dueWords(new Date('2026-07-01T10:00:01')).length).toBeLessThanOrEqual(3)
  })

  test('day stats accumulate; median uses listening days only', () => {
    const db = mkDb()
    db.addListening(new Date('2026-07-01T10:00:00'), 600, 50, 3, 10, 30)   // 10 min
    db.addListening(new Date('2026-07-01T20:00:00'), 600, 50, 3, 10, 30)   // +10 → 20 min, minimum met
    db.addListening(new Date('2026-07-02T10:00:00'), 2400, 200, 12, 10, 30) // 40 min, goal met
    const stats = db.dayStats(10)
    expect(stats.length).toBe(2)
    const day1 = stats.find(s => s.day === '2026-07-01')!
    expect(day1.seconds).toBe(1200)
    expect(day1.minimum_met).toBe(1)
    expect(day1.goal_met).toBe(0)
    expect(db.medianDailyMinutes(20)).toBe(30) // true median of [20, 40]
  })

  test('4AM boundary: 03:59 listening lands on previous day', () => {
    const db = mkDb()
    db.addListening(new Date('2026-07-02T03:59:00'), 60, 5, 0, 10, 30)
    expect(db.dayStats(5)[0].day).toBe('2026-07-01')
  })

  test('dirty-chunk tracking per 500-word chunk', () => {
    const db = mkDb()
    const sched = new Scheduler()
    const now = new Date('2026-07-01T10:00:00')
    for (const id of [1, 499, 500, 501, 10001]) {
      let s = createWordState(id, now)
      s = sched.hear(s, now, null).state
      db.saveWord(s)
    }
    // words 1,499,500 → chunk 0; 501 → chunk 1; 10001 → chunk 20
    expect(db.dirtyChunks().sort((a, b) => a - b)).toEqual([0, 1, 20])
    db.markChunkSynced(0, now)
    expect(db.dirtyChunks().sort((a, b) => a - b)).toEqual([1, 20])
  })

  test('streak + kv round-trip', () => {
    const db = mkDb()
    db.saveStreak(JSON.stringify({ count: 7 }))
    expect(JSON.parse(db.loadStreak()!)).toEqual({ count: 7 })
    db.setKV('frontier_ord', '123')
    expect(db.getKV('frontier_ord')).toBe('123')
  })
})

import { cueThresholds, nextCue, parseFiredCues, serializeFiredCues, type CueId } from '../goalCues'
import { shouldCelebrateSealedDay } from '../celebration'

const none = new Set<CueId>()

describe('cueThresholds', () => {
  it('quarter/half/three-quarters at any positive goal', () => {
    const t = cueThresholds(60)
    expect(t.get('q1')).toBe(15)
    expect(t.get('half')).toBe(30)
    expect(t.get('q3')).toBe(45)
    expect(t.get('m10')).toBe(50)
  })
  it('m10 suppressed for short goals (≤20 min)', () => {
    expect(cueThresholds(20).has('m10')).toBe(false)
    expect(cueThresholds(10).has('m10')).toBe(false)
  })
  it('m10 suppressed when it collides with q3 (goal 40 → q3=30, m10=30)', () => {
    expect(cueThresholds(40).has('m10')).toBe(false)
  })
  it('zero goal → no cues at all', () => {
    expect(cueThresholds(0).size).toBe(0)
  })
})

describe('nextCue', () => {
  it('fires on an upward crossing, once', () => {
    expect(nextCue(14, 16, 60, none)).toBe('q1')
    expect(nextCue(14, 16, 60, new Set<CueId>(['q1']))).toBeNull()
  })
  it('a long conversation crossing two thresholds fires only the LATEST', () => {
    expect(nextCue(14, 31, 60, none)).toBe('half')
  })
  it('never announces once the goal itself is reached (goal-done owns that moment)', () => {
    expect(nextCue(49, 61, 60, none)).toBeNull()
  })
  it('no movement / backwards → null', () => {
    expect(nextCue(30, 30, 60, none)).toBeNull()
    expect(nextCue(30, 20, 60, none)).toBeNull()
  })
})

describe('fired-cues kv blob', () => {
  it('round-trips for today and resets across the 4AM day change', () => {
    const raw = serializeFiredCues('2026-07-16', new Set<CueId>(['q1', 'half']))
    expect(parseFiredCues(raw, '2026-07-16')).toEqual(new Set(['q1', 'half']))
    expect(parseFiredCues(raw, '2026-07-17').size).toBe(0)   // yesterday's blob → fresh day
  })
  it('garbage/foreign entries are dropped', () => {
    expect(parseFiredCues('not json', '2026-07-16').size).toBe(0)
    expect(parseFiredCues(JSON.stringify({ day: '2026-07-16', fired: ['q1', 'nope'] }), '2026-07-16'))
      .toEqual(new Set(['q1']))
  })
})

describe('shouldCelebrateSealedDay (user 2026-07-18: minutes alone is NOT success)', () => {
  const today = '2026-07-18'
  it('fires only when BOTH the time goal is met AND the queue is empty', () => {
    expect(shouldCelebrateSealedDay(20, 20, 0, null, today)).toBe(true)
    expect(shouldCelebrateSealedDay(45, 20, 0, null, today)).toBe(true)
    expect(shouldCelebrateSealedDay(20, 20, 38, null, today)).toBe(false)  // reviews remain → no 達成
    expect(shouldCelebrateSealedDay(15, 20, 0, null, today)).toBe(false)   // minutes short
  })
  it('once per day; state re-derived (no crossing edge to lose to a crash)', () => {
    expect(shouldCelebrateSealedDay(25, 20, 0, today, today)).toBe(false)     // already sealed
    expect(shouldCelebrateSealedDay(25, 20, 0, '2026-07-17', today)).toBe(true) // new day
  })
  it('zero goal never celebrates', () => {
    expect(shouldCelebrateSealedDay(5, 0, 0, null, today)).toBe(false)
  })
})

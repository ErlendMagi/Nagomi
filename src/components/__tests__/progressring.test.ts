// Goal-ring arc math (user report 2026-07-16: the ring "sometimes pops back
// to start"). The primary fix is the day-counter carry in useSession.start();
// this pure layer guarantees the ring itself can never draw garbage — a NaN
// strokeDasharray renders the arc empty/full for a frame, which on e-ink
// reads exactly like a pop-back.
import { ringFractions } from '../ProgressRing'

describe('ringFractions — clamped, garbage-proof arc fills', () => {
  test('passes normal in-range values straight through', () => {
    expect(ringFractions(0.35, 0.8)).toEqual({ main: 0.35, min: 0.8 })
    expect(ringFractions(0, 0)).toEqual({ main: 0, min: 0 })
    expect(ringFractions(1, 1)).toEqual({ main: 1, min: 1 })
  })

  test('over-goal listening clamps to a full ring, never overdraws', () => {
    expect(ringFractions(2.4, 3.1)).toEqual({ main: 1, min: 1 })
  })

  test('negative input clamps to empty, never a reversed arc', () => {
    expect(ringFractions(-0.5, -1)).toEqual({ main: 0, min: 0 })
  })

  test('non-finite input renders EMPTY (honest unknown), never full or NaN', () => {
    for (const bad of [NaN, Infinity, -Infinity]) {
      const f = ringFractions(bad, bad)
      expect(f).toEqual({ main: 0, min: 0 })
      expect(Number.isFinite(f.main)).toBe(true)
      expect(Number.isFinite(f.min)).toBe(true)
    }
  })

  test('the two arcs are independent — one bad input cannot corrupt the other', () => {
    expect(ringFractions(NaN, 0.6)).toEqual({ main: 0, min: 0.6 })
    expect(ringFractions(0.25, Infinity)).toEqual({ main: 0.25, min: 0 })
  })
})

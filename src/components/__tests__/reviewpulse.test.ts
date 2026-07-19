// M4 review pulse: the discrete phase timeline the chip walks. Pure logic —
// the component itself just sets state on timers along this schedule.
import { pulseTimeline, PULSE_MS } from '../ReviewPulse'

describe('pulseTimeline — e-ink-budgeted review pulse', () => {
  test('exactly three discrete states: ink → outline → hidden', () => {
    const t = pulseTimeline()
    expect(t.map(([, p]) => p)).toEqual(['ink', 'outline', 'hidden'])
    expect(t.length).toBeLessThanOrEqual(3) // the e-ink redraw budget
  })

  test('appears instantly and finishes inside the pulse window', () => {
    const t = pulseTimeline()
    expect(t[0][0]).toBe(0)                    // state 1 at t=0
    expect(t[t.length - 1][0]).toBe(PULSE_MS)  // last state lands at the end
    expect(PULSE_MS).toBeLessThanOrEqual(500)  // ~500ms total, no longer
  })

  test('times are strictly increasing (no simultaneous redraws)', () => {
    for (const ms of [500, 300, 1000, 7]) {
      const t = pulseTimeline(ms)
      for (let i = 1; i < t.length; i++) expect(t[i][0]).toBeGreaterThan(t[i - 1][0])
    }
  })

  test('honours a custom duration and splits it at the midpoint', () => {
    expect(pulseTimeline(300)).toEqual([[0, 'ink'], [150, 'outline'], [300, 'hidden']])
  })

  test('degenerate durations collapse to the default window', () => {
    for (const bad of [0, -100, NaN, Infinity]) {
      expect(pulseTimeline(bad)).toEqual(pulseTimeline(PULSE_MS))
    }
  })
})

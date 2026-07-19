// M4 session-summary juice: the count-up step sequence. Pure logic — the
// component itself just walks this sequence on timers.
import { countUpSequence, COUNT_UP_MS, MAX_STEPS } from '../CountUp'

describe('countUpSequence — e-ink-budgeted count-up steps', () => {
  test('always ends exactly at the target', () => {
    for (const t of [1, 2, 7, 8, 9, 42, 100, 1234, 99999, 1_000_000]) {
      const seq = countUpSequence(t)
      expect(seq[seq.length - 1]).toBe(t)
    }
  })

  test('never exceeds the e-ink redraw budget (MAX_STEPS discrete updates)', () => {
    for (const t of [1, 8, 9, 100, 987654]) {
      expect(countUpSequence(t).length).toBeLessThanOrEqual(MAX_STEPS)
    }
    expect(MAX_STEPS).toBeLessThanOrEqual(8)
    expect(COUNT_UP_MS).toBeLessThanOrEqual(1000) // the whole beat stays short
  })

  test('is strictly increasing — a step never repeats or goes backwards', () => {
    for (const t of [3, 8, 9, 10, 17, 250, 12345]) {
      const seq = countUpSequence(t)
      for (let i = 1; i < seq.length; i++) expect(seq[i]).toBeGreaterThan(seq[i - 1])
    }
  })

  test('small targets simply count 1..target', () => {
    expect(countUpSequence(1)).toEqual([1])
    expect(countUpSequence(3)).toEqual([1, 2, 3])
    expect(countUpSequence(8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })

  test('degenerate targets collapse to a single 0', () => {
    expect(countUpSequence(0)).toEqual([0])
    expect(countUpSequence(-5)).toEqual([0])
    expect(countUpSequence(NaN)).toEqual([0])
    expect(countUpSequence(Infinity)).toEqual([0])
  })

  test('fractional targets floor to whole real units (words/minutes)', () => {
    expect(countUpSequence(4.9)).toEqual([1, 2, 3, 4])
    const seq = countUpSequence(123.7)
    expect(seq[seq.length - 1]).toBe(123)
  })

  test('honours a custom maxSteps', () => {
    expect(countUpSequence(100, 4)).toEqual([25, 50, 75, 100])
    expect(countUpSequence(5, 2)).toEqual([3, 5])
  })
})

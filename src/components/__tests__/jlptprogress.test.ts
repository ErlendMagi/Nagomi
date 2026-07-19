// JLPT progression bars: the pure row model + discrete e-ink animation math.
// The component itself just renders these (src/components/charts/JlptProgress.tsx).
import {
  BAR_STEPS, buildRows, hatchLines, segmentWidths, steppedFraction,
} from '../charts/JlptProgress'
import type { JlptBand } from '../../engine/analytics'

function band(
  level: JlptBand['level'], bandSize: number, graduated: number, inFlight: number,
): JlptBand {
  return { level, minRank: 1, maxRank: bandSize, bandSize, graduated, inFlight }
}

/** realistic mid-journey state: N5 done, N4 underway, N3 barely touched */
const MID: JlptBand[] = [
  band('N5', 800, 800, 0),
  band('N4', 700, 412, 96),
  band('N3', 2200, 3, 41),
  band('N2', 2300, 0, 0),
  band('N1', 4000, 0, 0),
]

describe('buildRows — per-level row model', () => {
  test('preserves band order and real counts', () => {
    const rows = buildRows(MID)
    expect(rows.map(r => r.level)).toEqual(['N5', 'N4', 'N3', 'N2', 'N1'])
    expect(rows[1].known).toBe(412)
    expect(rows[1].heard).toBe(412 + 96)
    expect(rows[1].bandSize).toBe(700)
    expect(rows[1].toGo).toBe(288)
  })

  test('exactly one current row — the FIRST incomplete level', () => {
    const rows = buildRows(MID)
    expect(rows.filter(r => r.current).map(r => r.level)).toEqual(['N4'])
    expect(rows[0].current).toBe(false) // complete rows are never current
  })

  test('nothing heard at all → N5 is current with the full band to go', () => {
    const rows = buildRows([band('N5', 800, 0, 0), band('N4', 700, 0, 0)])
    expect(rows[0].current).toBe(true)
    expect(rows[0].toGo).toBe(800)
    expect(rows[0].pct).toBe(0)
    expect(rows[0].heardFrac).toBe(0)
  })

  test('complete detection: full band graduated → complete, 100%, zero to go', () => {
    const [n5] = buildRows(MID)
    expect(n5.complete).toBe(true)
    expect(n5.pct).toBe(100)
    expect(n5.toGo).toBe(0)
    expect(n5.knownFrac).toBe(1)
  })

  test('every band complete → no current row', () => {
    const rows = buildRows([band('N5', 800, 800, 0), band('N4', 700, 700, 0)])
    expect(rows.every(r => r.complete)).toBe(true)
    expect(rows.some(r => r.current)).toBe(false)
  })

  test('percentage FLOORS — 100 is earned, never rounded to', () => {
    expect(buildRows([band('N5', 800, 799, 0)])[0].pct).toBe(99)
    expect(buildRows([band('N5', 800, 799, 0)])[0].complete).toBe(false)
    expect(buildRows([band('N5', 800, 1, 0)])[0].pct).toBe(0)
  })

  test('clamps over-reported counts into [0, bandSize]', () => {
    const [r] = buildRows([band('N5', 800, 900, 50)])
    expect(r.known).toBe(800)
    expect(r.heard).toBe(800)
    expect(r.complete).toBe(true)
    const [neg] = buildRows([band('N5', 800, -5, -3)])
    expect(neg.known).toBe(0)
    expect(neg.heard).toBe(0)
  })

  test('heard = graduated + inFlight, capped at the band size', () => {
    const [r] = buildRows([band('N4', 700, 650, 100)])
    expect(r.heard).toBe(700)
    expect(r.heardFrac).toBe(1)
    expect(r.knownFrac).toBeCloseTo(650 / 700)
  })

  test('degenerate zero-size band never divides by zero and is never complete', () => {
    const [r] = buildRows([band('N5', 0, 0, 0)])
    expect(r.knownFrac).toBe(0)
    expect(r.heardFrac).toBe(0)
    expect(r.pct).toBe(0)
    expect(r.complete).toBe(false)
  })

  test('empty input → empty output', () => {
    expect(buildRows([])).toEqual([])
  })
})

describe('steppedFraction — discrete bar-fill phases', () => {
  test('phase 0 shows nothing, final phase shows EXACTLY the target', () => {
    for (const t of [0, 0.001, 0.37, 0.515, 1]) {
      expect(steppedFraction(t, 0)).toBe(0)
      expect(steppedFraction(t, BAR_STEPS)).toBe(t)
    }
  })

  test('monotone non-decreasing across phases', () => {
    for (const t of [0.1, 0.5, 0.99, 1]) {
      let prev = -1
      for (let p = 0; p <= BAR_STEPS; p++) {
        const f = steppedFraction(t, p)
        expect(f).toBeGreaterThanOrEqual(prev)
        prev = f
      }
    }
  })

  test('clamps target into [0, 1] and degenerate targets to 0', () => {
    expect(steppedFraction(1.5, BAR_STEPS)).toBe(1)
    expect(steppedFraction(-0.3, BAR_STEPS)).toBe(0)
    // non-finite input is garbage, not "a big number" — same convention as
    // countUpSequence: collapse to 0
    expect(steppedFraction(NaN, BAR_STEPS)).toBe(0)
    expect(steppedFraction(Infinity, BAR_STEPS)).toBe(0)
  })

  test('phase beyond the last step clamps to the target', () => {
    expect(steppedFraction(0.4, BAR_STEPS + 3)).toBe(0.4)
    expect(steppedFraction(0.4, -2)).toBe(0)
  })

  test('the animation budget itself stays within the e-ink limit', () => {
    expect(BAR_STEPS).toBeLessThanOrEqual(6)
  })
})

describe('segmentWidths — whole-pixel fills', () => {
  test('zero fractions → zero widths, full fractions → the full bar', () => {
    expect(segmentWidths(226, 0, 0)).toEqual({ knownW: 0, heardW: 0 })
    expect(segmentWidths(226, 1, 1)).toEqual({ knownW: 226, heardW: 226 })
  })

  test('a nonzero sliver never collapses below 4px', () => {
    const { knownW, heardW } = segmentWidths(226, 1 / 800, 2 / 800)
    expect(knownW).toBeGreaterThanOrEqual(4)
    expect(heardW).toBeGreaterThanOrEqual(4)
  })

  test('heardW ≥ knownW even when inputs are inverted or equal', () => {
    const a = segmentWidths(226, 0.8, 0.3) // inverted upstream — still safe
    expect(a.heardW).toBeGreaterThanOrEqual(a.knownW)
    const b = segmentWidths(226, 0.5, 0.5)
    expect(b.heardW).toBe(b.knownW)
  })

  test('never exceeds the bar width; whole pixels only', () => {
    for (const [k, h] of [[0.33, 0.66], [0.999, 1], [0.004, 0.006]] as const) {
      const { knownW, heardW } = segmentWidths(226, k, h)
      expect(heardW).toBeLessThanOrEqual(226)
      expect(Number.isInteger(knownW)).toBe(true)
      expect(Number.isInteger(heardW)).toBe(true)
    }
  })

  test('degenerate bar width and non-finite fractions are safe', () => {
    expect(segmentWidths(0, 0.5, 0.9)).toEqual({ knownW: 0, heardW: 0 })
    expect(segmentWidths(-10, 0.5, 0.9)).toEqual({ knownW: 0, heardW: 0 })
    expect(segmentWidths(226, NaN, NaN)).toEqual({ knownW: 0, heardW: 0 })
    // bar narrower than the 4px sliver floor: capped at the bar itself
    expect(segmentWidths(3, 0.5, 0.5)).toEqual({ knownW: 3, heardW: 3 })
  })
})

describe('hatchLines — 45° hatch covering the heard region', () => {
  test('covers the whole region: starts left of it, ends at its right edge', () => {
    const lines = hatchLines(100, 14, 5)
    expect(lines[0].x1).toBe(-14)
    expect(lines[lines.length - 1].x1).toBeLessThan(100)
    // count: one line every `spacing` px across w + h of diagonal travel
    expect(lines.length).toBe(Math.ceil((100 + 14) / 5))
  })

  test('every line is a 45° diagonal, bottom-left to top-right', () => {
    for (const l of hatchLines(50, 14, 5)) {
      expect(l.x2 - l.x1).toBe(14)
      expect(l.y1).toBe(14)
      expect(l.y2).toBe(0)
    }
  })

  test('degenerate regions produce no lines', () => {
    expect(hatchLines(0, 14)).toEqual([])
    expect(hatchLines(-5, 14)).toEqual([])
    expect(hatchLines(100, 0)).toEqual([])
    expect(hatchLines(100, 14, 0)).toEqual([]) // zero spacing must not loop forever
  })
})

// Slider math: step quantization, value↔fraction mapping, drag deltas, and
// knob geometry. Pure logic extracted from SteppedSlider during the
// 2026-07-16 rewrite (user report: "it slides back at 2000 words all the
// time") — the regression block below encodes the exact failure arithmetic
// so the bug can never quietly return.
import {
  snapToStep, fractionForValue, dragFraction, knobLeft, clamp01, KNOB_SIZE,
} from '../SteppedSlider'

describe('snapToStep — fraction to nearest stop, always in range', () => {
  test('endpoints and midpoints land on exact steps', () => {
    expect(snapToStep(0, 1000, 20000, 1000)).toBe(1000)
    expect(snapToStep(1, 1000, 20000, 1000)).toBe(20000)
    expect(snapToStep(0.5, 0, 100, 10)).toBe(50)
    expect(snapToStep(0.5, 10, 120, 5)).toBe(65)
  })

  test('rounds to the NEAREST step, not the floor', () => {
    // 0.26 of [0,100] step 10 → raw 26 → 30, not 20
    expect(snapToStep(0.26, 0, 100, 10)).toBe(30)
    expect(snapToStep(0.24, 0, 100, 10)).toBe(20)
  })

  test('out-of-range fractions clamp to the ends', () => {
    expect(snapToStep(-0.5, 1000, 20000, 1000)).toBe(1000)
    expect(snapToStep(1.7, 1000, 20000, 1000)).toBe(20000)
  })

  test('degenerate scales collapse to min (never emit outside the range)', () => {
    expect(snapToStep(0.5, 10, 10, 5)).toBe(10)   // max === min
    expect(snapToStep(0.5, 20, 10, 5)).toBe(20)   // max < min
    expect(snapToStep(0.5, 0, 100, 0)).toBe(0)    // step 0
    expect(snapToStep(0.5, 0, 100, -5)).toBe(0)   // negative step
    expect(snapToStep(NaN, 1000, 20000, 1000)).toBe(1000)
  })

  test('REGRESSION 2026-07-16: knob-relative locationX quantized to "2000 words"', () => {
    // Old code fed locationX into the math on every move. A finger centered
    // on the 32px knob reports locationX ≈ 16 regardless of where the knob
    // is; on a ~330px track over the 1000–20000 pack scale that is:
    expect(snapToStep(16 / 330, 1000, 20000, 1000)).toBe(2000)
    // …which is exactly the user's report. The component no longer feeds
    // move-event locationX into this function — moves use page-delta
    // dragFraction() — so this arithmetic can only be reached by a real
    // track-relative tap at ~5% of the track, where 2000 is CORRECT.
  })
})

describe('fractionForValue — inverse mapping, clamped', () => {
  test('round-trips every stop of a real scale', () => {
    for (let v = 1000; v <= 20000; v += 1000) {
      expect(snapToStep(fractionForValue(v, 1000, 20000), 1000, 20000, 1000)).toBe(v)
    }
    for (let v = 10; v <= 120; v += 5) { // onboarding minutes scale
      expect(snapToStep(fractionForValue(v, 10, 120), 10, 120, 5)).toBe(v)
    }
  })

  test('clamps values outside the range', () => {
    expect(fractionForValue(-50, 0, 100)).toBe(0)
    expect(fractionForValue(500, 0, 100)).toBe(1)
  })

  test('degenerate range collapses to 0 (thumb parks at min, no NaN layout)', () => {
    expect(fractionForValue(5, 10, 10)).toBe(0)
    expect(fractionForValue(NaN, 0, 100)).toBe(0)
  })
})

describe('dragFraction — grant anchor + page-coordinate finger delta', () => {
  test('zero delta holds the anchor exactly (thumb does not drift on touch)', () => {
    expect(dragFraction(0.47, 0, 330)).toBe(0.47)
  })

  test('delta moves proportionally to track width', () => {
    expect(dragFraction(0.5, 33, 330)).toBeCloseTo(0.6)
    expect(dragFraction(0.5, -165, 330)).toBeCloseTo(0)
  })

  test('clamps at both ends instead of overshooting', () => {
    expect(dragFraction(0.9, 500, 330)).toBe(1)
    expect(dragFraction(0.1, -500, 330)).toBe(0)
  })

  test('unmeasured/zero width HOLDS the anchor — never teleports left', () => {
    // The "jumps to the very left" failure shape: dividing by a 0/stale
    // width. Layout not in yet → the thumb must stay where it was anchored.
    expect(dragFraction(0.6, 40, 0)).toBe(0.6)
    expect(dragFraction(0.6, 40, -1)).toBe(0.6)
    expect(dragFraction(0.6, NaN, 330)).toBe(0.6)
  })
})

describe('knobLeft — thumb stays fully inside the touch area', () => {
  test('centered on the track position in the middle', () => {
    expect(knobLeft(0.5, 300)).toBe(150 - KNOB_SIZE / 2)
  })

  test('pinned inside at both endpoints (no off-screen clipping)', () => {
    expect(knobLeft(0, 300)).toBe(0)
    expect(knobLeft(1, 300)).toBe(300 - KNOB_SIZE)
  })

  test('unmeasured width renders at 0 rather than a negative offset', () => {
    expect(knobLeft(0.5, 0)).toBe(0)
    expect(knobLeft(NaN, 300)).toBe(0)
  })
})

describe('clamp01 — layout-safe clamp', () => {
  test('passes through in-range, clamps out-of-range', () => {
    expect(clamp01(0.3)).toBe(0.3)
    expect(clamp01(-2)).toBe(0)
    expect(clamp01(9)).toBe(1)
  })

  test('non-finite collapses to 0 (NaN must never reach a style prop)', () => {
    expect(clamp01(NaN)).toBe(0)
    expect(clamp01(Infinity)).toBe(1)
    expect(clamp01(-Infinity)).toBe(0)
  })
})

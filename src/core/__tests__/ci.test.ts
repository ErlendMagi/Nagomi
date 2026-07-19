// Comprehensible-input comfort: adaptive targets (measured anchors) + factor.

import { SRS_CONFIG } from '../config'
import { ciTargetFor, ciComfortFactor } from '../ci'

const CFG = SRS_CONFIG.picker.ciComfort

describe('ciTargetFor (adaptive-then-hard)', () => {
  it('hits the measured anchors exactly', () => {
    expect(ciTargetFor(500)).toBeCloseTo(0.50, 5)
    expect(ciTargetFor(1000)).toBeCloseTo(0.57, 5)
    expect(ciTargetFor(2000)).toBeCloseTo(0.68, 5)
    expect(ciTargetFor(4000)).toBeCloseTo(0.79, 5)
  })

  it('interpolates between anchors and clamps below the first', () => {
    const mid = ciTargetFor(1500)
    expect(mid).toBeGreaterThan(0.57)
    expect(mid).toBeLessThan(0.68)
    expect(ciTargetFor(0)).toBeCloseTo(0.50, 5)
    expect(ciTargetFor(100)).toBeCloseTo(0.50, 5)
  })

  it('the hard 80% contract binds at hardKnownCount and beyond', () => {
    expect(ciTargetFor(CFG.hardKnownCount)).toBe(CFG.hardMinRatio)
    expect(ciTargetFor(15000)).toBe(CFG.hardMinRatio)
  })

  it('is monotone non-decreasing in knownCount', () => {
    let prev = 0
    for (let n = 0; n <= 10000; n += 250) {
      const t = ciTargetFor(n)
      expect(t).toBeGreaterThanOrEqual(prev - 1e-9)
      prev = t
    }
  })
})

describe('ciComfortFactor (soft preference, never a ban)', () => {
  it('no penalty at/above target or without data', () => {
    expect(ciComfortFactor(0.9, 0.8)).toBe(1)
    expect(ciComfortFactor(0.8, 0.8)).toBe(1)
    expect(ciComfortFactor(undefined, 0.8)).toBe(1)
    expect(ciComfortFactor(NaN, 0.8)).toBe(1)
  })

  it('ramps linearly to minFactor across rampWidth and floors there', () => {
    const t = 0.8
    const halfway = ciComfortFactor(t - CFG.rampWidth / 2, t)
    expect(halfway).toBeCloseTo(1 - (1 - CFG.minFactor) / 2, 5)
    expect(ciComfortFactor(t - CFG.rampWidth, t)).toBeCloseTo(CFG.minFactor, 5)
    // far below target: still the floor — variety picks stay possible
    expect(ciComfortFactor(0.1, t)).toBeCloseTo(CFG.minFactor, 5)
    expect(ciComfortFactor(0, t)).toBeGreaterThan(0)
  })
})

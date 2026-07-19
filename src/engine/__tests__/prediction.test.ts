// M5 prediction: pure interpolation/anchoring over the offline-simulated table.

import {
  interpolateTrack, predictCurve, predictionMilestones,
  MILESTONE_MONTHS, type PredictionTable,
} from '../prediction'

// Synthetic table with easy arithmetic:
//   10 min/day → heard +100 per 30 days, graduated lags one checkpoint
//   30 min/day → exactly triple the 10-track
const table: PredictionTable = {
  horizonDays: 120,
  tracks: [
    {
      minutes: 10,
      points: [[0, 0, 0], [30, 100, 0], [60, 200, 80], [90, 300, 180], [120, 400, 280]],
    },
    {
      minutes: 30,
      points: [[0, 0, 0], [30, 300, 0], [60, 600, 240], [90, 900, 540], [120, 1200, 840]],
    },
  ],
}

describe('interpolateTrack', () => {
  it('returns an exact track when minutes matches one', () => {
    expect(interpolateTrack(table, 10)).toEqual(table.tracks[0].points)
    expect(interpolateTrack(table, 30)).toEqual(table.tracks[1].points)
  })

  it('blends linearly between the two bracketing tracks', () => {
    // 20 min/day = midway → heard midway between 100 and 300 at day 30
    const t = interpolateTrack(table, 20)
    expect(t[1]).toEqual([30, 200, 0])
    expect(t[2]).toEqual([60, 400, 160])
  })

  it('clamps minutes below the lowest and above the highest track', () => {
    expect(interpolateTrack(table, 4)).toEqual(table.tracks[0].points)  // floor 10
    expect(interpolateTrack(table, 500)).toEqual(table.tracks[1].points)
  })
})

describe('predictCurve', () => {
  it('starts a fresh learner (currentHeard 0) at the track origin', () => {
    const curve = predictCurve(table, 10, 0, 60, { stepDays: 30 })
    expect(curve).toEqual([
      { day: 0, heard: 0, graduated: 0 },
      { day: 30, heard: 100, graduated: 0 },
      { day: 60, heard: 200, graduated: 80 },
    ])
  })

  it('anchors a nonzero currentHeard: day 0 equals it, curve continues from there', () => {
    // heard=150 sits at t0=45 on the 10-track (linear between 100 and 200)
    const curve = predictCurve(table, 10, 150, 30, { stepDays: 30 })
    expect(curve[0]).toEqual(expect.objectContaining({ day: 0, heard: 150 }))
    // day 30 → track day 75 → heard 250
    expect(curve[1]).toEqual(expect.objectContaining({ day: 30, heard: 250 }))
  })

  it('shifts graduated so day 0 matches currentGraduated, clamped into [0, heard]', () => {
    // t0=45 → track graduated = 40; user actually has 10 → shift −30
    const curve = predictCurve(table, 10, 150, 30, { stepDays: 30, currentGraduated: 10 })
    expect(curve[0].graduated).toBe(10)
    // day 30 → track day 75 → graduated 130 − 30 = 100
    expect(curve[1].graduated).toBe(100)
    // graduated never exceeds heard even with a big positive shift
    const bumped = predictCurve(table, 10, 150, 30, { stepDays: 30, currentGraduated: 150 })
    expect(bumped.every(p => p.graduated <= p.heard)).toBe(true)
    expect(bumped[0].graduated).toBe(150)
  })

  it('0 minutes → flat line at current counts', () => {
    const curve = predictCurve(table, 0, 250, 90, { stepDays: 30, currentGraduated: 40 })
    expect(curve).toHaveLength(4)
    expect(curve.every(p => p.heard === 250 && p.graduated === 40)).toBe(true)
  })

  it('minutes above the top track clamp to it', () => {
    const at90 = predictCurve(table, 90, 0, 60, { stepDays: 30 })
    const at30 = predictCurve(table, 30, 0, 60, { stepDays: 30 })
    expect(at90).toEqual(at30)
  })

  it('currentHeard beyond the track ceiling → flat (no extrapolation)', () => {
    const curve = predictCurve(table, 10, 9999, 60, { stepDays: 30, currentGraduated: 500 })
    expect(curve.every(p => p.heard === 9999 && p.graduated === 500)).toBe(true)
  })

  it('clamps flat beyond the simulated horizon instead of extrapolating', () => {
    const curve = predictCurve(table, 10, 0, 300, { stepDays: 100 })
    const last = curve[curve.length - 1]
    expect(last.day).toBe(300)
    expect(last.heard).toBe(400) // table tops out at day 120 → heard 400
  })

  it('always ends exactly at horizonDays and returns [] for horizon <= 0', () => {
    const curve = predictCurve(table, 10, 0, 45, { stepDays: 30 })
    expect(curve.map(p => p.day)).toEqual([0, 30, 45])
    expect(predictCurve(table, 10, 0, 0)).toEqual([])
  })
})

describe('predictionMilestones', () => {
  it('extracts +3/6/12/24 month milestones with the same anchoring', () => {
    const ms = predictionMilestones(table, 10, 150, 10)
    expect(ms.map(m => m.months)).toEqual([3, 6, 12, 24])
    expect(ms.map(m => m.day)).toEqual(MILESTONE_MONTHS.map(m => m.days))
    // 3 months = 91 days from t0=45 → track day 136 → beyond horizon → clamp 400
    expect(ms[0].heard).toBe(400)
    // graduated carries the same −30 anchor shift: 280 − 30 = 250
    expect(ms[0].graduated).toBe(250)
    // longer horizons clamp at the same ceiling
    expect(ms[3].heard).toBe(400)
  })

  it('is flat at current counts when there is no listening history', () => {
    const ms = predictionMilestones(table, 0, 42, 7)
    expect(ms.every(m => m.heard === 42 && m.graduated === 7)).toBe(true)
  })
})

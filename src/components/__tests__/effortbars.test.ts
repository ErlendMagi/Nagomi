import { effortCaption, markFor, medianMinutes, steppedFraction } from '../charts/EffortBars'

const d = (minutes: number, goalMet = false) => ({ minutes, goalMet })

describe('effortCaption — best TRUE positive, never shaming', () => {
  it('goal streak wins over everything', () => {
    const days = [d(0), d(5), d(30, true), d(25, true), d(22, true)]
    expect(effortCaption(days, 10)).toBe('3-day goal streak going 🔥')
  })
  it('above-usual count when no streak', () => {
    const days = [d(0), d(15), d(16), d(0), d(14), d(0), d(12)]
    // median 12 over these 7 → 15,16,14 above
    expect(effortCaption(days, 12)).toBe('3 of the last 7 days above your usual')
  })
  it('today past usual as third rung', () => {
    const days = [d(0), d(0), d(0), d(0), d(0), d(0), d(15)]
    expect(effortCaption(days, 10)).toBe('today is already past your usual pace')
  })
  it('week total as the always-true floor', () => {
    const days = [d(0), d(0), d(3), d(0), d(0), d(4), d(0)]
    expect(effortCaption(days, 0)).toBe('every minute counts — 7 min this week')
  })
  it('brand-new user gets a start line, never a judgment', () => {
    expect(effortCaption([d(0), d(0)], 0)).toBe('press play — today is day one')
    expect(effortCaption([], 0)).toBe('press play — today is day one')
  })
  it('never emits a negative comparison on a weak day', () => {
    const days = [d(60, true), d(60, true), d(0), d(0), d(0), d(0), d(2)]
    const caption = effortCaption(days, 30)
    expect(caption).not.toMatch(/below|behind|only|missed|less/i)
  })
})

describe('markFor', () => {
  it('★ at goal, ◐ at half, nothing below', () => {
    expect(markFor(20, true, 20)).toBe('★')
    expect(markFor(25, false, 20)).toBe('★')
    expect(markFor(10, false, 20)).toBe('◐')
    expect(markFor(9, false, 20)).toBeNull()
  })
  it('zero goal → only explicit goalMet earns the star', () => {
    expect(markFor(30, false, 0)).toBeNull()
    expect(markFor(30, true, 0)).toBe('★')
  })
})

describe('medianMinutes / steppedFraction', () => {
  it('median includes rest days (honest baseline)', () => {
    expect(medianMinutes([d(0), d(0), d(10), d(20), d(30)])).toBe(10)
    expect(medianMinutes([])).toBe(0)
  })
  it('stepped fraction lands exactly on target at the final phase', () => {
    expect(steppedFraction(0.8, 6)).toBe(0.8)
    expect(steppedFraction(0.8, 3)).toBeCloseTo(0.4)
    expect(steppedFraction(0.8, 0)).toBe(0)
  })
})

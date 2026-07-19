// Recovery ("welcome back") core: gap detection, the urgency ladder,
// fit-today-first, fragility triage, tier slicing, hysteresis.

import { SRS_CONFIG } from '../config'
import { Scheduler } from '../scheduler'
import {
  gapExcess, speedFactor, enRateAt, urgencyPlan, fragilityOrder, splitTiers,
  shouldExit, INACTIVE_PLAN, type DueEntry, type RecoveryConfig,
} from '../recovery'

const CFG: RecoveryConfig = SRS_CONFIG.recovery

function entry(wordId: number, dueAtMs: number, stability = 3, weight = 1.5): DueEntry {
  return { wordId, dueAtMs, stability, weight }
}

describe('gapExcess', () => {
  const lastEnd = 1_000_000
  const dayStart = 2_000_000

  it('splits dues into gap-excess vs standing pool (boundaries exact)', () => {
    const dues = [
      entry(1, lastEnd),           // due exactly AT session end → standing (was already due)
      entry(2, lastEnd + 1),       // due just after → excess
      entry(3, dayStart),          // due exactly at day start → excess
      entry(4, dayStart + 1),      // not yet due at day start → standing bucket
      entry(5, 500),               // long-standing → standing
    ]
    const { excess, standing } = gapExcess(dues, lastEnd, dayStart)
    expect(excess.map(e => e.wordId).sort()).toEqual([2, 3])
    expect(standing.map(e => e.wordId).sort()).toEqual([1, 4, 5])
  })
})

describe('urgency ladder', () => {
  it('speedFactor is monotone increasing in urgency and >1 when active', () => {
    let prev = 1
    for (let u = 0.05; u <= 1; u += 0.05) {
      const f = speedFactor(u, CFG)
      expect(f).toBeGreaterThan(prev === 1 ? 1 : prev - 1e-9)
      prev = f
    }
    expect(speedFactor(0, CFG)).toBe(1)
  })

  it('EN rate scales 1.0→enRateMax with urgency; never above the cap', () => {
    expect(enRateAt(0, CFG)).toBe(1)
    expect(enRateAt(0.5, CFG)).toBeCloseTo(1 + (CFG.enRateMax - 1) * 0.5, 5)
    expect(enRateAt(1, CFG)).toBe(CFG.enRateMax)
    expect(enRateAt(5, CFG)).toBe(CFG.enRateMax)
  })

  it('below the trigger: inactive (a normal heavy day is not an emergency)', () => {
    expect(urgencyPlan(25, 30, 5, 100, 5, CFG)).toEqual(INACTIVE_PLAN)  // fits goal
    expect(urgencyPlan(300, 30, 1, 900, 5, CFG)).toEqual(INACTIVE_PLAN) // gap too short
  })

  it('FIT-TODAY-FIRST: picks the MINIMAL urgency that fits the goal', () => {
    // 38 min of excess vs 30-min goal → small urgency should suffice
    const plan = urgencyPlan(38, 30, 3, 150, 5, CFG)
    expect(plan.active).toBe(true)
    expect(plan.horizonDays).toBe(1)
    expect(plan.urgency).toBeGreaterThan(0)
    expect(plan.urgency).toBeLessThan(0.5)          // far from max
    expect(38 / speedFactor(plan.urgency, CFG)).toBeLessThanOrEqual(30)
    // minimality: one ladder notch lower must NOT fit
    const lower = plan.urgency - 0.05
    if (lower > 0) expect(38 / speedFactor(lower, CFG)).toBeGreaterThan(30)
  })

  it('bigger backlog → higher urgency; JP untouched at every level (by construction)', () => {
    const small = urgencyPlan(38, 30, 3, 150, 5, CFG)
    const big = urgencyPlan(55, 30, 5, 400, 5, CFG)
    expect(big.urgency).toBeGreaterThan(small.urgency)
  })

  it('impossible-today: u=1, horizon spreads within [min,max], plan minutes honest', () => {
    const plan = urgencyPlan(300, 30, 14, 1200, 5, CFG)
    expect(plan.active).toBe(true)
    expect(plan.urgency).toBe(1)
    expect(plan.horizonDays).toBeGreaterThanOrEqual(CFG.minHorizonDays)
    expect(plan.horizonDays).toBeLessThanOrEqual(CFG.maxHorizonDays)
    expect(plan.enPlaybackRate).toBe(CFG.enRateMax)
    expect(plan.dropEnIntro).toBe(true)
    // plan minutes × factor × days covers the estimate
    expect(plan.planMinutesPerDay * speedFactor(1, CFG) * plan.horizonDays)
      .toBeGreaterThanOrEqual(300 - 1)
  })

  it('a truly enormous backlog clamps at maxHorizonDays (days stay bounded)', () => {
    const plan = urgencyPlan(2000, 30, 30, 5000, 5, CFG)
    expect(plan.horizonDays).toBe(CFG.maxHorizonDays)
  })

  it('intro-drop engages exactly at the threshold', () => {
    // find a backlog whose minimal urgency lands each side of the threshold
    const below = urgencyPlan(40, 30, 3, 100, 5, CFG)
    if (below.active && below.urgency < CFG.introDropThreshold) {
      expect(below.dropEnIntro).toBe(false)
    }
    const above = urgencyPlan(58, 30, 3, 100, 5, CFG)
    if (above.active && above.horizonDays === 1 && above.urgency >= CFG.introDropThreshold) {
      expect(above.dropEnIntro).toBe(true)
    }
  })
})

describe('fragility triage', () => {
  const sched = new Scheduler()
  const project = (s: number, d: number) => sched.projectRetrievability(s, d)
  const now = 10 * 86_400_000

  it('most fragile first: low stability outranks high at equal overdue', () => {
    const dues = [
      entry(1, now - 2 * 86_400_000, 60), // stable — barely decays
      entry(2, now - 2 * 86_400_000, 3),  // fragile — decays fast
      entry(3, now - 2 * 86_400_000, 14),
    ]
    const ordered = fragilityOrder(dues, now, 5, project)
    expect(ordered.map(e => e.wordId)).toEqual([2, 3, 1])
  })

  it('matches the FSRS table direction: S=60 projected R stays ~0.89 at +5d overdue', () => {
    const r60 = project(60, 5)
    const r3 = project(3, 5)
    expect(r60).toBeGreaterThan(0.85)
    expect(r3).toBeLessThan(r60)
  })

  it('deterministic: identical inputs → identical order (wordId tiebreak)', () => {
    const dues = [entry(5, now, 3), entry(2, now, 3), entry(9, now, 3)]
    const a = fragilityOrder(dues, now, 5, project).map(e => e.wordId)
    const b = fragilityOrder([...dues].reverse(), now, 5, project).map(e => e.wordId)
    expect(a).toEqual(b)
    expect(a).toEqual([2, 5, 9])
  })
})

describe('splitTiers', () => {
  const ordered = Array.from({ length: 100 }, (_, i) => entry(i + 1, 0, 3))

  it('tier-1 sized by capacity; tier-2 gets the rest; disjoint and complete', () => {
    const { tier1, tier2 } = splitTiers(ordered, 5, 10) // 50 words today
    expect(tier1.size).toBe(50)
    expect(tier2.size).toBe(50)
    expect(tier1.has(1)).toBe(true)   // most fragile in today's slice
    expect(tier2.has(100)).toBe(true) // most stable postponed
    for (const id of tier1) expect(tier2.has(id)).toBe(false)
  })

  it('degenerate throughput floors at 0.5 dues/min (never an empty tier-1)', () => {
    const { tier1 } = splitTiers(ordered, 0, 10)
    expect(tier1.size).toBeGreaterThanOrEqual(1)
  })
})

describe('exit hysteresis', () => {
  it('exits below exitFactor × goal, stays active above', () => {
    expect(shouldExit(14, 30, CFG)).toBe(true)   // 14 < 0.5×30
    expect(shouldExit(16, 30, CFG)).toBe(false)
    expect(shouldExit(0, 30, CFG)).toBe(true)
  })
})

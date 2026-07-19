import { milestoneToCelebrate, parseCelebratedUpTo, MILESTONES, SOUND_MILESTONES } from '../milestones'

describe('lifetime word milestones (user 2026-07-18)', () => {
  it('fires the highest uncelebrated threshold at or below the count', () => {
    expect(milestoneToCelebrate(99, 0)).toBeNull()
    expect(milestoneToCelebrate(100, 0)).toBe(100)
    expect(milestoneToCelebrate(1250, 100)).toBe(1000)
    // a giant session that blasts through several fires only the top one
    expect(milestoneToCelebrate(5400, 1000)).toBe(5000)
  })
  it('never re-fires a celebrated threshold', () => {
    expect(milestoneToCelebrate(1250, 1000)).toBeNull()
    expect(milestoneToCelebrate(19395, 19395)).toBeNull()
  })
  it('thresholds ascend and the sound set is a subset', () => {
    for (let i = 1; i < MILESTONES.length; i++) expect(MILESTONES[i]).toBeGreaterThan(MILESTONES[i - 1])
    for (const s of SOUND_MILESTONES) expect(MILESTONES).toContain(s)
  })
  it('kv parse is tolerant', () => {
    expect(parseCelebratedUpTo(null)).toBe(0)
    expect(parseCelebratedUpTo('junk')).toBe(0)
    expect(parseCelebratedUpTo('5000')).toBe(5000)
  })
})

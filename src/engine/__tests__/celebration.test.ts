import { shouldCelebrate } from '../celebration'

describe('shouldCelebrate — once a day, only after a real queue was cleared', () => {
  const today = '2026-07-16'

  it('fires when a positive queue reaches zero and today has not celebrated', () => {
    expect(shouldCelebrate(true, 0, null, today)).toBe(true)
    expect(shouldCelebrate(true, 0, '2026-07-15', today)).toBe(true)
  })

  it('never fires twice on one day', () => {
    expect(shouldCelebrate(true, 0, today, today)).toBe(false)
  })

  it('never fires while reviews are still waiting', () => {
    expect(shouldCelebrate(true, 3, null, today)).toBe(false)
  })

  it('never fires on a day that had no waiting reviews at all', () => {
    expect(shouldCelebrate(false, 0, null, today)).toBe(false)
  })
})

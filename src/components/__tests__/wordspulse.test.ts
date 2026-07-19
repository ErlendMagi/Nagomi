// Words-this-session counter: discrete step-up sequence, milestone crossing,
// and kanji numerals. Pure logic — the component just sets state on timers.
import {
  stepUpSequence, crossedMilestone, milestoneKanji,
  STEP_UP_MAX_STEPS, MILESTONE_EVERY, BADGE_MS, STEP_UP_MS,
} from '../WordsPulse'

describe('stepUpSequence — e-ink-budgeted counter steps', () => {
  test('ends exactly at the target, strictly increasing', () => {
    for (const [from, to] of [[0, 7], [12, 15], [90, 210], [0, 1], [37, 1000]] as const) {
      const seq = stepUpSequence(from, to)
      expect(seq[seq.length - 1]).toBe(to)
      for (let i = 1; i < seq.length; i++) expect(seq[i]).toBeGreaterThan(seq[i - 1])
      for (const v of seq) expect(v).toBeGreaterThan(from)
    }
  })

  test('never exceeds the redraw budget', () => {
    expect(stepUpSequence(0, 1000).length).toBeLessThanOrEqual(STEP_UP_MAX_STEPS)
    expect(stepUpSequence(3, 5).length).toBeLessThanOrEqual(STEP_UP_MAX_STEPS)
    expect(STEP_UP_MS).toBeLessThanOrEqual(700) // finishes well before the next sentence
  })

  test('tiny increments count every integer (no fake intermediate values)', () => {
    expect(stepUpSequence(4, 6)).toEqual([5, 6])
    expect(stepUpSequence(9, 10)).toEqual([10])
  })

  test('non-increase collapses to a single jump (session reset, no-op)', () => {
    expect(stepUpSequence(50, 50)).toEqual([50])
    expect(stepUpSequence(50, 0)).toEqual([0])
  })

  test('degenerate inputs collapse safely', () => {
    expect(stepUpSequence(NaN, 8)).toEqual(stepUpSequence(0, 8))
    expect(stepUpSequence(0, NaN)).toEqual([0])
    expect(stepUpSequence(-5, 3)[0]).toBeGreaterThan(0)
  })
})

describe('crossedMilestone — real 100-review achievements', () => {
  test('fires exactly when a multiple of 100 is crossed', () => {
    expect(crossedMilestone(98, 103)).toBe(100)
    expect(crossedMilestone(99, 100)).toBe(100)
    expect(crossedMilestone(100, 101)).toBeNull()  // already past it
    expect(crossedMilestone(101, 199)).toBeNull()
    expect(crossedMilestone(199, 201)).toBe(200)
  })

  test('a big jump reports the HIGHEST milestone crossed', () => {
    expect(crossedMilestone(95, 305)).toBe(300)
  })

  test('never fires on no movement, resets, or from-zero-to-below-100', () => {
    expect(crossedMilestone(100, 100)).toBeNull()
    expect(crossedMilestone(150, 0)).toBeNull()   // session reset re-crosses nothing
    expect(crossedMilestone(0, 99)).toBeNull()
    expect(crossedMilestone(0, 0)).toBeNull()
  })

  test('honours the configured interval and rejects degenerate ones', () => {
    expect(crossedMilestone(9, 11, 10)).toBe(10)
    expect(crossedMilestone(9, 11, 0)).toBeNull()
    expect(crossedMilestone(NaN, 200)).toBeNull()
    expect(MILESTONE_EVERY).toBe(100)              // the locked real-units milestone
  })
})

describe('milestoneKanji — honest kanji numerals', () => {
  test('hundreds', () => {
    expect(milestoneKanji(100)).toBe('百')
    expect(milestoneKanji(200)).toBe('二百')
    expect(milestoneKanji(300)).toBe('三百')
    expect(milestoneKanji(900)).toBe('九百')
  })

  test('thousands', () => {
    expect(milestoneKanji(1000)).toBe('千')
    expect(milestoneKanji(1100)).toBe('千百')
    expect(milestoneKanji(2000)).toBe('二千')
    expect(milestoneKanji(2500)).toBe('二千五百')
    expect(milestoneKanji(9900)).toBe('九千九百')
  })

  test('non-milestone inputs fall back to plain digits (never a wrong numeral)', () => {
    expect(milestoneKanji(150)).toBe('150')
    expect(milestoneKanji(0)).toBe('0')
    expect(milestoneKanji(10000)).toBe('10000')
    expect(milestoneKanji(NaN)).toBe('NaN')
  })

  test('badge stays up long enough to read but under two seconds', () => {
    expect(BADGE_MS).toBeGreaterThanOrEqual(1000)
    expect(BADGE_MS).toBeLessThan(2000)
  })
})

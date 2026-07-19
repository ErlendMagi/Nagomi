import { stageForLine, exitStyleFor, SILENT_LINES_BEFORE_EXIT } from '../stagePresence'

describe('stagePresence', () => {
  test('solo scene: speaker only, enters on line 0', () => {
    const f = stageForLine(['a', 'a', 'a'], 0)
    expect(f.onStage.map(s => s.id)).toEqual(['a'])
    expect(f.onStage[0].role).toBe('speaker')
    expect(f.entered).toEqual(['a'])
  })

  test('duo: second speaker enters on their first line, first becomes listener', () => {
    const f = stageForLine(['a', 'b'], 1)
    expect(f.entered).toEqual(['b'])
    expect(f.onStage.map(s => `${s.id}:${s.role}`)).toEqual(['b:speaker', 'a:listener'])
  })

  test('listener stays while alternating — never exits mid-dialogue', () => {
    const speakers = ['a', 'b', 'a', 'b', 'a']
    for (let i = 1; i < speakers.length; i++) {
      const f = stageForLine(speakers, i)
      expect(f.onStage).toHaveLength(2)
      expect(f.exited).toEqual([])
    }
  })

  test(`silent character exits after ${SILENT_LINES_BEFORE_EXIT} lines without speaking`, () => {
    // a speaks line 0, then b monologues: a's last line is 0, so at line 2 (gap 2) a leaves
    const speakers = ['a', 'b', 'b', 'b']
    expect(stageForLine(speakers, 1).exited).toEqual([])
    const atTwo = stageForLine(speakers, 2)
    expect(atTwo.exited).toEqual(['a'])
    expect(atTwo.onStage.map(s => s.id)).toEqual(['b'])
  })

  test('third speaker takes the middle slot', () => {
    // trio with everyone still active: a-b alternate, then c joins
    const speakers = ['a', 'b', 'a', 'c']
    const f = stageForLine(speakers, 3)
    expect(f.entered).toEqual(['c'])
    expect(f.onStage.find(s => s.id === 'c')?.side).toBe('middle')
    expect(f.onStage).toHaveLength(3)
  })

  test('returning speaker re-enters after having exited', () => {
    const speakers = ['a', 'b', 'b', 'b', 'a']
    const f = stageForLine(speakers, 4)
    expect(f.entered).toEqual(['a'])
    expect(f.onStage.map(s => `${s.id}:${s.role}`)).toEqual(['a:speaker', 'b:listener'])
  })

  test('stage derivation is pure — same inputs, same frame (rewind-safe)', () => {
    const speakers = ['a', 'b', 'a', 'c', 'c', 'a']
    const first = stageForLine(speakers, 3)
    const again = stageForLine(speakers, 3)
    expect(again).toEqual(first)
  })

  test('lineIdx clamped to conversation bounds', () => {
    const f = stageForLine(['a', 'b'], 99)
    expect(f.onStage.map(s => s.id)).toEqual(['b', 'a'])
  })

  test('sides are assigned at entry and never flip mid-conversation', () => {
    const speakers = ['a', 'b', 'a', 'b', 'a']
    for (let i = 1; i < speakers.length; i++) {
      const f = stageForLine(speakers, i)
      expect(f.onStage.find(s => s.id === 'a')?.side).toBe('left')
      expect(f.onStage.find(s => s.id === 'b')?.side).toBe('right')
    }
  })

  test('a returning entrant reuses a vacated side', () => {
    // a (left) exits after 2 silent lines; d then re-fills the left slot
    const speakers = ['a', 'b', 'b', 'd']
    const atTwo = stageForLine(speakers, 2)
    expect(atTwo.exited).toEqual(['a'])
    const atThree = stageForLine(speakers, 3)
    expect(atThree.onStage.find(s => s.id === 'd')?.side).toBe('left')
    expect(atThree.onStage.find(s => s.id === 'b')?.side).toBe('right')
  })

  test('exitStyleFor is deterministic and varies across conversations', () => {
    expect(exitStyleFor('conv1', 'a')).toBe(exitStyleFor('conv1', 'a'))
    const styles = new Set(
      ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'].map(c => exitStyleFor(c, 'a')),
    )
    expect(styles.size).toBeGreaterThan(1)
  })
})

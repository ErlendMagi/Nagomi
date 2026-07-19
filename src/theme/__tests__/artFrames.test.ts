import { artFrame, artBackdrop, hasArt } from '../artFrames'

const FRAMES = {
  sakura_teen: {
    neutral_closed: 1,
    neutral_open: 2,
    happy_closed: 3,
    happy_open: 4,
    sad_closed: 5,
  },
}

describe('artFrames', () => {
  test('exact frame wins', () => {
    expect(artFrame('sakura_teen', 'happy', true, FRAMES)).toBe(4)
    expect(artFrame('sakura_teen', 'happy', false, FRAMES)).toBe(3)
  })

  test('missing mouth falls back to other mouth of same expression', () => {
    expect(artFrame('sakura_teen', 'sad', true, FRAMES)).toBe(5)
  })

  test('missing expression falls back to neutral with same mouth', () => {
    expect(artFrame('sakura_teen', 'excited', true, FRAMES)).toBe(2)
    expect(artFrame('sakura_teen', 'excited', false, FRAMES)).toBe(1)
  })

  test('unknown character yields null (SVG fallback)', () => {
    expect(artFrame('nobody', 'neutral', false, FRAMES)).toBeNull()
    expect(hasArt('nobody', FRAMES)).toBe(false)
    expect(hasArt('sakura_teen', FRAMES)).toBe(true)
  })

  test('backdrop falls back to default then null', () => {
    expect(artBackdrop('cafe', { cafe: 9, default: 8 })).toBe(9)
    expect(artBackdrop('unknown', { cafe: 9, default: 8 })).toBe(8)
    expect(artBackdrop('unknown', {})).toBeNull()
  })
})

import { darken, LIP } from '../JuicyButton'

describe('JuicyButton.darken — every face gets its own lip', () => {
  it('darkens proportionally, stays a valid hex', () => {
    expect(darken('#C0392B', 0)).toBe('#c0392b')
    expect(darken('#ffffff', 0.5)).toBe('#808080')
    expect(darken('#000000', 0.3)).toBe('#000000')
  })
  it('tolerates missing # and garbage (returns input untouched)', () => {
    expect(darken('C0392B', 0.32)).toMatch(/^#[0-9a-f]{6}$/)
    expect(darken('not-a-color', 0.3)).toBe('not-a-color')
  })
  it('lip travel is a small positive constant (e-ink two-state, not a spring)', () => {
    expect(LIP).toBeGreaterThan(0)
    expect(LIP).toBeLessThanOrEqual(8)
  })
})

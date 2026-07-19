import { AMBIENT_FAMILIES, DEFAULT_AMBIENT_THEME } from '../ambient'
import { lifeLayersFor, MAX_LIFE_LAYERS } from '../sceneLife'

describe('sceneLife', () => {
  const allKeys = [...AMBIENT_FAMILIES.map(f => f.theme.key), DEFAULT_AMBIENT_THEME.key]

  test('every ambient family (and default) has live layers', () => {
    for (const key of allKeys) {
      const layers = lifeLayersFor(key)
      expect(layers.length).toBeGreaterThanOrEqual(1)
      expect(layers.length).toBeLessThanOrEqual(MAX_LIFE_LAYERS)
    }
  })

  test('unknown family falls back to default layers', () => {
    expect(lifeLayersFor('nonexistent')).toEqual(lifeLayersFor('default'))
  })

  test('layers stay subtle: peak opacity ≤ 0.35, period ≥ 2.5s', () => {
    for (const key of allKeys) {
      for (const l of lifeLayersFor(key)) {
        expect(l.opacity).toBeLessThanOrEqual(0.35)
        expect(l.period).toBeGreaterThanOrEqual(2500)
      }
    }
  })

  test('anchors sit inside the backdrop', () => {
    for (const key of allKeys) {
      for (const l of lifeLayersFor(key)) {
        expect(l.x).toBeGreaterThanOrEqual(0)
        expect(l.x).toBeLessThanOrEqual(1)
        expect(l.y).toBeGreaterThanOrEqual(0)
        expect(l.y).toBeLessThanOrEqual(1)
      }
    }
  })
})

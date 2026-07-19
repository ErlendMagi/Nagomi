import {
  PLAN_PRESETS, CORPUS_WORD_CAP, presetsFor, presetById, nextPresetFor,
} from '../planPresets'
import { JLPT_BANDS } from '../analytics'

describe('plan presets', () => {
  it('every preset promises only words the corpus can teach', () => {
    for (const p of PLAN_PRESETS) {
      expect(p.targetWords).toBeGreaterThan(0)
      expect(p.targetWords).toBeLessThanOrEqual(CORPUS_WORD_CAP)
    }
  })

  it('ids are unique and stable', () => {
    const ids = PLAN_PRESETS.map(p => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('JLPT presets agree EXACTLY with the locked in-app bands (beads must match plans)', () => {
    for (const band of JLPT_BANDS) {
      const preset = presetById(`jlpt_${band.level.toLowerCase()}`)!
      expect(preset.targetWords).toBe(Math.min(band.maxRank, CORPUS_WORD_CAP))
    }
  })

  it('each category is sorted ascending — the picker renders them as a ladder', () => {
    for (const cat of ['jlpt', 'everyday', 'cefr'] as const) {
      const list = presetsFor(cat)
      expect(list.length).toBeGreaterThanOrEqual(5)
      for (let i = 1; i < list.length; i++) {
        expect(list[i].targetWords).toBeGreaterThan(list[i - 1].targetWords)
      }
    }
  })

  it('nextPresetFor: first level strictly ahead of current knowledge', () => {
    expect(nextPresetFor('jlpt', 0).label).toBe('N5')
    expect(nextPresetFor('jlpt', 800).label).toBe('N4')     // N5 exactly known → N4
    expect(nextPresetFor('jlpt', 3_699).label).toBe('N3')
    expect(nextPresetFor('jlpt', 99_999).label).toBe('N1')  // beyond top → stays at top
    expect(nextPresetFor('everyday', 2_500).label).toBe('Conversational')
    expect(nextPresetFor('cefr', 4_000).label).toBe('B2')
  })

  it('every description is a single plain sentence (fits a level card)', () => {
    for (const p of PLAN_PRESETS) {
      expect(p.description.length).toBeGreaterThan(20)
      expect(p.description.length).toBeLessThanOrEqual(90)
    }
  })
})

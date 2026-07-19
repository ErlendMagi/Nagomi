import { gainForClip, voiceKeyForClip, type VoiceGainsTable } from '../audioGains'
import { CHIME_CLIP, clipCandidates } from '../session'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const SHIPPED: VoiceGainsTable = require('../../../assets/voice_gains.json')

const table = (gains: Record<string, number>): VoiceGainsTable => ({
  version: 1, jpTargetDb: -25, enTargetDb: -27, gains,
})

describe('voiceKeyForClip — filename parsing', () => {
  it('parses line clips, keeping underscored character names intact', () => {
    expect(voiceKeyForClip('line_000_yuki_office_en.mp3')).toBe('yuki_office_en')
    expect(voiceKeyForClip('line_007_kenji_office_jp.mp3')).toBe('kenji_office_jp')
    expect(voiceKeyForClip('line_001_hiroshi_boss_jp.mp3')).toBe('hiroshi_boss_jp')
  })

  it('parses the .wav clip variant too', () => {
    expect(voiceKeyForClip('line_003_ren_uni_jp.wav')).toBe('ren_uni_jp')
  })

  it('agrees with clipCandidates naming from session.ts', () => {
    for (const clip of clipCandidates(12, 'asuka_teacher', 'jp')) {
      expect(voiceKeyForClip(clip)).toBe('asuka_teacher_jp')
    }
  })

  it('parses intro narrator clips as their own keys', () => {
    expect(voiceKeyForClip('intro_en.mp3')).toBe('intro_en')
    expect(voiceKeyForClip('intro_jp.mp3')).toBe('intro_jp')
  })

  it('returns null for the chime sentinel and junk', () => {
    expect(voiceKeyForClip(CHIME_CLIP)).toBeNull()
    expect(voiceKeyForClip('manifest.json')).toBeNull()
    expect(voiceKeyForClip('line_000_yuki_office.mp3')).toBeNull() // no lang
    expect(voiceKeyForClip('')).toBeNull()
  })
})

describe('gainForClip — lookup and safety', () => {
  it('returns the table gain for a known voice', () => {
    const t = table({ yuki_office_en: 0.42 })
    expect(gainForClip('line_000_yuki_office_en.mp3', t)).toBe(0.42)
  })

  it('falls back to 1.0 for unknown voices (never mutes content)', () => {
    const t = table({ yuki_office_en: 0.42 })
    expect(gainForClip('line_000_someone_new_jp.mp3', t)).toBe(1)
  })

  it('falls back to 1.0 for the chime and non-clip names', () => {
    const t = table({ yuki_office_en: 0.42 })
    expect(gainForClip(CHIME_CLIP, t)).toBe(1)
    expect(gainForClip('garbage', t)).toBe(1)
  })

  it('clamps out-of-range and rejects non-finite table values', () => {
    const t = table({ a_en: 1.7, b_jp: -0.3, c_en: NaN, d_jp: Infinity })
    expect(gainForClip('line_000_a_en.mp3', t)).toBe(1)
    expect(gainForClip('line_000_b_jp.mp3', t)).toBe(0)
    expect(gainForClip('line_000_c_en.mp3', t)).toBe(1)
    expect(gainForClip('line_000_d_jp.mp3', t)).toBe(1)
  })
})

describe('shipped voice_gains.json', () => {
  it('keeps the EN target below the JP target (JP a bit louder)', () => {
    expect(SHIPPED.enTargetDb).toBeLessThan(SHIPPED.jpTargetDb)
  })

  it('is attenuation-only: every gain in (0, 1]', () => {
    const values = Object.values(SHIPPED.gains)
    expect(values.length).toBeGreaterThan(0)
    for (const g of values) {
      expect(g).toBeGreaterThan(0)
      expect(g).toBeLessThanOrEqual(1)
    }
  })

  it('covers both languages plus the intro narrator', () => {
    const keys = Object.keys(SHIPPED.gains)
    expect(keys.some(k => k.endsWith('_jp'))).toBe(true)
    expect(keys.some(k => k.endsWith('_en'))).toBe(true)
    expect(keys).toContain('intro_en')
    expect(keys).toContain('intro_jp')
  })

  it('resolves a real shipped clip through gainForClip', () => {
    const key = Object.keys(SHIPPED.gains).find(k => k.endsWith('_jp') && k !== 'intro_jp')!
    const character = key.slice(0, -'_jp'.length)
    const g = gainForClip(`line_004_${character}_jp.mp3`)
    expect(g).toBe(Math.max(0, Math.min(1, SHIPPED.gains[key])))
  })
})

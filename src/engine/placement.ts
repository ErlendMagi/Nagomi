// Placement (M6): the self-assessment behind onboarding, as PURE logic.
//
// Locked design: claiming a level NEVER marks words known outright. It only
// sets graduation.fastTrackMaxRank — words inside the claimed-known frequency
// range still have to be verified by real exposure, they just graduate at the
// fast-track thresholds (6 exposures / 7 days, SRS_CONFIG.graduation.fastTrack)
// instead of the normal 30/30. Picking "complete beginner" changes nothing.
//
// Example words: jp/gloss verified against data/derived/content.db (word_id =
// frequency rank) on 2026-07-10; readings supplied by hand (not in the db).

import type { UserDB } from '../core/db'
import { clampGraduationSettings } from '../core/graduation'
import { saveSettings, type SessionSettings } from './session'

/** kv flag the integrator checks to decide whether onboarding runs */
export const ONBOARDED_KV_KEY = 'onboarded'

export type PlacementLevelKey =
  | 'zero' | 'a-little' | 'basic' | 'conversational' | 'intermediate'

export interface PlacementExample {
  jp: string
  /** kana reading (content.db carries no readings — supplied by hand) */
  reading: string
  gloss: string
  /** frequency rank = content.db words.word_id (verified 2026-07-10) */
  rank: number
}

export interface PlacementLevel {
  key: PlacementLevelKey
  label: string
  /** one calm sentence for the level card */
  blurb: string
  /** inclusive fast-track upper frequency rank; 0 = no fast track */
  maxRank: number
  /** "words like these" — near the top of the level's range (first words for 'zero') */
  examples: PlacementExample[]
}

export const LEVELS: readonly PlacementLevel[] = [
  {
    key: 'zero',
    label: 'Complete beginner',
    blurb: 'Everything is new. Nagomi starts from the most common words — among your first:',
    maxRank: 0,
    examples: [
      { jp: '日本', reading: 'にほん', gloss: 'Japan', rank: 63 },
      { jp: '今日', reading: 'きょう', gloss: 'today', rank: 141 },
      { jp: '見る', reading: 'みる', gloss: 'to see', rank: 243 },
    ],
  },
  {
    key: 'a-little',
    label: 'A little',
    blurb: 'The very common words feel familiar — words like:',
    maxRank: 300,
    examples: [
      { jp: '店', reading: 'みせ', gloss: 'store', rank: 236 },
      { jp: '名前', reading: 'なまえ', gloss: 'name', rank: 264 },
      { jp: '好き', reading: 'すき', gloss: 'liking; being fond of', rank: 273 },
    ],
  },
  {
    key: 'basic',
    label: 'Basic (around N5)',
    blurb: 'Everyday essentials are comfortable — words like:',
    maxRank: 800,
    examples: [
      { jp: '駅', reading: 'えき', gloss: 'train station', rank: 732 },
      { jp: '料理', reading: 'りょうり', gloss: 'cooking', rank: 755 },
      { jp: '病院', reading: 'びょういん', gloss: 'hospital', rank: 792 },
    ],
  },
  {
    key: 'conversational',
    label: 'Conversational (around N4)',
    blurb: 'Simple conversations mostly make sense — words like:',
    maxRank: 1500,
    examples: [
      { jp: '薬', reading: 'くすり', gloss: 'medicine', rank: 1446 },
      { jp: '食べる', reading: 'たべる', gloss: 'to eat', rank: 1467 },
      { jp: '電車', reading: 'でんしゃ', gloss: 'train', rank: 1494 },
    ],
  },
  {
    key: 'intermediate',
    label: 'Intermediate (around N3)',
    blurb: 'You follow most daily speech — words like:',
    maxRank: 3700,
    examples: [
      { jp: '台風', reading: 'たいふう', gloss: 'typhoon', rank: 3617 },
      { jp: '覚悟', reading: 'かくご', gloss: 'readiness', rank: 3659 },
      { jp: '借金', reading: 'しゃっきん', gloss: 'debt', rank: 3689 },
    ],
  },
]

export function levelByKey(key: PlacementLevelKey): PlacementLevel {
  // unknown keys (corrupt callers) fall back to the safe choice: no fast track
  return LEVELS.find(l => l.key === key) ?? LEVELS[0]
}

/**
 * Apply the chosen level: set the fast-track rank on the SHARED settings
 * object (mutated in place so a live SessionRecorder sees it immediately,
 * same convention as SettingsScreenV2), persist, and flag onboarding done.
 */
export function applyPlacement(
  db: UserDB, settings: SessionSettings, levelKey: PlacementLevelKey,
): void {
  const level = levelByKey(levelKey)
  const graduation = clampGraduationSettings({
    ...settings.graduation, fastTrackMaxRank: level.maxRank,
  })
  Object.assign(settings.graduation, graduation)
  saveSettings(db, settings)
  db.setKV(ONBOARDED_KV_KEY, '1')
}

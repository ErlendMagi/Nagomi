// Plan presets (user request 2026-07-16): "when we click 'edit plan' … let the
// user pick options that make sense for them … some will want JLPT levels,
// others 'Conversational'/'Native', others [CEFR-style] levels."
//
// Pure data + lookups. Each preset resolves to a WORD TARGET (words KNOWN =
// graduated — the locked calculator metric, never merely heard); the existing
// planner machinery (goalPlanner.requiredMinutesPerDay / monthsToTarget) then
// does the honest math, so a preset can never disagree with the Progress
// forecast or overpromise.
//
// Word counts:
//  - JLPT targets reuse the LOCKED in-app bands (analytics.JLPT_BANDS,
//    word_id = frequency rank): knowing "N3" = knowing the most frequent
//    3,700 words. Consistent with the JLPT beads on the Progress screen.
//  - CEFR vocabulary-size estimates are the widely cited ranges (Milton &
//    Alexiou vocabulary-size studies): A1≈1k, A2≈2k, B1≈4k, B2≈8k, C1≈12k,
//    C2≈16k. Approximations, labeled as such in the UI copy.
//  - "Everyday" levels are plain-language anchors chosen to line up with the
//    corpus's own comprehension curve (CI anchors in core/ci.ts: ~8k known ≈
//    the 80/90 comprehensible-input contract binds → "native content feels
//    comfortable").
// Every target is capped at the corpus vocabulary (19,395 learnable words) —
// a preset must never promise words the content cannot teach.

import { JLPT_BANDS, type JlptLevel } from './analytics'

/** total learnable words in the shipped corpus — presets never exceed it */
export const CORPUS_WORD_CAP = 19_395

export type PresetCategory = 'jlpt' | 'everyday' | 'cefr'

export interface PlanPreset {
  category: PresetCategory
  /** stable id, e.g. 'jlpt_n3', 'everyday_conversational', 'cefr_b2' */
  id: string
  /** short card label, e.g. "N3", "Conversational", "B2" */
  label: string
  /** one-line plain-language description of what life looks like at this level */
  description: string
  /** words KNOWN (graduated) this preset targets */
  targetWords: number
}

function jlptTarget(level: JlptLevel): number {
  const band = JLPT_BANDS.find(b => b.level === level)
  return Math.min(band ? band.maxRank : 0, CORPUS_WORD_CAP)
}

export const PLAN_PRESETS: PlanPreset[] = [
  // --- JLPT (labels every Japanese learner searching for an app knows) ---
  { category: 'jlpt', id: 'jlpt_n5', label: 'N5', targetWords: jlptTarget('N5'),
    description: 'Basic phrases and everyday words — the first JLPT step.' },
  { category: 'jlpt', id: 'jlpt_n4', label: 'N4', targetWords: jlptTarget('N4'),
    description: 'Simple daily conversations on familiar topics.' },
  { category: 'jlpt', id: 'jlpt_n3', label: 'N3', targetWords: jlptTarget('N3'),
    description: 'Everyday Japanese at natural speed — the bridge level.' },
  { category: 'jlpt', id: 'jlpt_n2', label: 'N2', targetWords: jlptTarget('N2'),
    description: 'Comfortable in most settings; workplace-ready Japanese.' },
  { category: 'jlpt', id: 'jlpt_n1', label: 'N1', targetWords: jlptTarget('N1'),
    description: 'Near-full comprehension in complex, abstract contexts.' },

  // --- Everyday levels (plain language, no exam jargon) ---
  { category: 'everyday', id: 'everyday_basics', label: 'Survival basics', targetWords: 800,
    description: 'Order food, ask directions, handle simple exchanges.' },
  { category: 'everyday', id: 'everyday_daily', label: 'Daily life', targetWords: 2_500,
    description: 'Follow and hold everyday conversations about your life.' },
  { category: 'everyday', id: 'everyday_conversational', label: 'Conversational', targetWords: 5_000,
    description: 'Chat freely with friends on most common topics.' },
  { category: 'everyday', id: 'everyday_native_content', label: 'Native content', targetWords: 8_000,
    description: 'Podcasts, drama and casual native speech feel comfortable.' },
  { category: 'everyday', id: 'everyday_near_native', label: 'Near-native', targetWords: 15_000,
    description: 'Understand almost everything, almost everywhere.' },

  // --- CEFR-style bands (the A1–C2 scale used across language learning) ---
  { category: 'cefr', id: 'cefr_a1', label: 'A1', targetWords: 1_000,
    description: 'Beginner — familiar everyday expressions.' },
  { category: 'cefr', id: 'cefr_a2', label: 'A2', targetWords: 2_000,
    description: 'Elementary — routine tasks and simple exchanges.' },
  { category: 'cefr', id: 'cefr_b1', label: 'B1', targetWords: 4_000,
    description: 'Intermediate — handle most situations while traveling.' },
  { category: 'cefr', id: 'cefr_b2', label: 'B2', targetWords: 8_000,
    description: 'Upper intermediate — natural interaction, complex topics.' },
  { category: 'cefr', id: 'cefr_c1', label: 'C1', targetWords: 12_000,
    description: 'Advanced — fluent, spontaneous, effortless in most settings.' },
  { category: 'cefr', id: 'cefr_c2', label: 'C2', targetWords: 16_000,
    description: 'Mastery — understands virtually everything heard.' },
]

export const CATEGORY_LABELS: Record<PresetCategory, string> = {
  jlpt: 'JLPT',
  everyday: 'Everyday level',
  cefr: 'CEFR',
}

export function presetsFor(category: PresetCategory): PlanPreset[] {
  return PLAN_PRESETS.filter(p => p.category === category)
}

export function presetById(id: string): PlanPreset | undefined {
  return PLAN_PRESETS.find(p => p.id === id)
}

/**
 * The first preset in a category STRICTLY ahead of what the user already
 * knows — the natural default selection ("your next level"). Falls back to
 * the category's top preset when everything below is already known.
 */
export function nextPresetFor(category: PresetCategory, knownWords: number): PlanPreset {
  const list = presetsFor(category)
  return list.find(p => p.targetWords > knownWords) ?? list[list.length - 1]
}

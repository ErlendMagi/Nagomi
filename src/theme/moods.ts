// Mood → theater mapping (user 2026-07-18: bubbles and characters must
// "reflect what the characters feel, say, and react like"). Every line in
// the corpus carries a free-text mood ("exhausted", "excited", …); this
// bucketizer turns that open vocabulary into a small set of stage
// directions: the bubble's SHAPE, the speaker's EXPRESSION, and how lively
// the delivery animation should be. Pure + keyword-based so authoring can
// keep inventing moods without breaking the stage.

export type Tone = 'excited' | 'happy' | 'sad' | 'nervous' | 'angry' | 'surprised' | 'tired' | 'calm'
export type BubbleShape = 'round' | 'burst' | 'cloud' | 'wobble'
export type Expression = 'neutral' | 'happy' | 'sad' | 'surprised' | 'excited' | 'tired'

const TONE_KEYWORDS: ReadonlyArray<readonly [Tone, readonly string[]]> = [
  ['excited', ['excit', 'thrill', 'ecstat', 'enthusias', 'triumph', 'elat', 'eager', 'delight', 'joy']],
  ['angry', ['angr', 'furious', 'annoy', 'irritat', 'frustrat', 'indignant', 'exasperat']],
  ['surprised', ['surpris', 'shock', 'astonish', 'amaze', 'startl', 'disbelief', 'incredul']],
  ['nervous', ['nervous', 'anxious', 'worri', 'hesitant', 'shy', 'awkward', 'embarrass', 'flustered', 'uncertain', 'timid']],
  ['sad', ['sad', 'defeat', 'gloomy', 'melanchol', 'disappoint', 'wistful', 'sorry', 'apolog', 'regret', 'lonely']],
  ['tired', ['tired', 'exhaust', 'weary', 'sleepy', 'drained', 'yawn']],
  ['happy', ['happy', 'cheer', 'warm', 'friendly', 'playful', 'amus', 'teasing', 'proud', 'grateful', 'affection', 'fond', 'relie',
    // corpus audit 2026-07-19: 75% of lines fell through to calm because the
    // authored vocabulary is soft-toned ("gently-praising", "softly-touched",
    // "brightly-curious") — these all deserve a living face, not neutral
    'gentl', 'soft', 'tender', 'bright', 'prais', 'encourag', 'reassur', 'invit', 'shar', 'welcom', 'kind',
    'smile', 'touch', 'settl', 'content', 'peace', 'cozy', 'honest', 'sincer', 'nostalg', 'admir', 'impress']],
  ['surprised', ['wonder', 'curio', 'intrigu', 'catch', 'realiz', 'discover']],
]

export function toneOf(mood: string | null | undefined): Tone {
  const m = (mood ?? '').toLowerCase()
  for (const [tone, keys] of TONE_KEYWORDS) {
    for (const k of keys) if (m.includes(k)) return tone
  }
  return 'calm'
}

/**
 * Fallback when the mood text maps to calm: read the LINE ITSELF. Exclamations
 * lift the face, questions raise an eyebrow, laughter laughs. Keeps the stage
 * alive on the long tail of unmappable moods.
 */
export function toneOfLine(mood: string | null | undefined, jp?: string | null, en?: string | null): Tone {
  const t = toneOf(mood)
  if (t !== 'calm') return t
  const text = `${jp ?? ''} ${en ?? ''}`
  if (/[はハ]{2}|笑|haha|hehe/i.test(text)) return 'happy'
  if (/[!！]/.test(text)) return 'happy'
  if (/[?？]/.test(text)) return 'surprised'
  return 'calm'
}

/** the bubble silhouette each tone speaks in */
export function bubbleShapeFor(tone: Tone): BubbleShape {
  switch (tone) {
    case 'excited': case 'angry': case 'surprised': return 'burst'
    case 'nervous': return 'wobble'
    case 'sad': case 'tired': return 'cloud'
    default: return 'round'
  }
}

/** the face the SPEAKER wears for a tone */
export function expressionFor(tone: Tone): Expression {
  switch (tone) {
    case 'excited': return 'excited'
    case 'happy': return 'happy'
    case 'sad': return 'sad'
    case 'tired': return 'tired'
    case 'surprised': case 'angry': return 'surprised'
    case 'nervous': return 'neutral'
    default: return 'neutral'
  }
}

/** the face the LISTENER wears reacting to the speaker's tone — reactions
 *  are half the theater (user: bubbles/characters must reflect "reactions,
 *  and replies") */
export function reactionFor(tone: Tone): Expression {
  switch (tone) {
    case 'excited': case 'surprised': case 'angry': return 'surprised'
    case 'sad': return 'sad'
    case 'happy': return 'happy'
    default: return 'neutral'
  }
}

/** delivery energy 0..1 — drives the bubble pop/wiggle amplitude */
export function energyFor(tone: Tone): number {
  switch (tone) {
    case 'excited': case 'angry': case 'surprised': return 1
    case 'happy': return 0.7
    case 'nervous': return 0.55
    case 'sad': case 'tired': return 0.25
    default: return 0.4
  }
}

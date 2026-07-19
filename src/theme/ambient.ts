// Scene presentation for the Play screen (M4 VN-style visuals). PURE module —
// no RN/Expo imports — so families, tints and the proportional-highlight rule
// are unit-testable.
//
// Every conversation in content.db carries an ambient tag like
// "izakaya_evening" or "office_quiet_low" (~500 distinct values). We map the
// tag's FAMILY (its location) to a calm two-colour vertical gradient plus a
// faint glyph watermark. All colours stay LIGHT so the ink (#1a1a1a) and the
// white cards on top stay readable — on the Bigme's e-ink panel the gradients
// degrade to light grays and the design still works.

export interface AmbientTheme {
  /** stable family key, e.g. 'cafe' — useful for tests/debugging */
  key: string
  /** gradient top colour (lightest) */
  top: string
  /** gradient bottom colour (slightly deeper, still light) */
  bottom: string
  /** faint watermark glyph drawn behind the stage */
  glyph: string
}

export const DEFAULT_AMBIENT_THEME: AmbientTheme = {
  key: 'default', top: '#F5F1E6', bottom: '#EBE4D2', glyph: '和',
}

/**
 * Ordered family table: earlier rows win when several keywords appear in one
 * tag ("cafe_office_quiet" → cafe). Keywords match whole underscore-tokens.
 */
const FAMILIES: Array<{ theme: AmbientTheme, keywords: string[] }> = [
  { theme: { key: 'cafe', top: '#F6ECDB', bottom: '#EEDFC5', glyph: '珈' },
    keywords: ['cafe'] },
  { theme: { key: 'tatami', top: '#F3EFDC', bottom: '#E9E1C5', glyph: '茶' },
    keywords: ['tatami', 'tea', 'kotatsu', 'altar'] },
  { theme: { key: 'kitchen', top: '#F9F0DA', bottom: '#F1E3C3', glyph: '食' },
    keywords: ['kitchen', 'dining'] },
  { theme: { key: 'bedroom', top: '#F1EEF4', bottom: '#E5E0EC', glyph: '月' },
    keywords: ['bedroom'] },
  { theme: { key: 'home', top: '#F7EFE0', bottom: '#EFE3CB', glyph: '家' },
    keywords: ['living', 'apartment', 'home', 'family', 'attic', 'genkan', 'dorm',
      'nursery', 'farmhouse', 'cabin', 'dressing', 'laundry', 'storage', 'ceiling',
      'window', 'bathroom', 'study', 'inn'] },
  { theme: { key: 'porch', top: '#F0F2E2', bottom: '#E4E8CE', glyph: '縁' },
    keywords: ['porch', 'veranda', 'engawa', 'yard', 'backyard', 'gate', 'rooftop'] },
  { theme: { key: 'school', top: '#EFF2E7', bottom: '#E3E9D5', glyph: '学' },
    keywords: ['lecture', 'classroom', 'school', 'university', 'kindergarten',
      'library', 'lab', 'campus'] },
  { theme: { key: 'office', top: '#EDF0F3', bottom: '#E1E6EB', glyph: '社' },
    keywords: ['office', 'meeting', 'conference', 'editorial', 'union', 'polling',
      'bank', 'post', 'koban', 'police', 'fire'] },
  { theme: { key: 'clinic', top: '#ECF3F0', bottom: '#DFEBE6', glyph: '医' },
    keywords: ['clinic', 'hospital', 'pharmacy'] },
  { theme: { key: 'eatery', top: '#F8EBD9', bottom: '#F0DABF', glyph: '味' },
    keywords: ['izakaya', 'bar', 'restaurant', 'ramen', 'soba', 'sushi', 'udon',
      'curry', 'tofu', 'karaoke'] },
  { theme: { key: 'shop', top: '#F5EEE1', bottom: '#EBE0CA', glyph: '店' },
    keywords: ['shop', 'store', 'bookstore', 'supermarket', 'department',
      'convenience', 'market', 'salon', 'optician'] },
  { theme: { key: 'street', top: '#EFEEE9', bottom: '#E4E2DB', glyph: '町' },
    keywords: ['street', 'city', 'crossing', 'sidewalk', 'alley', 'plaza', 'parking'] },
  { theme: { key: 'transit', top: '#ECEFF2', bottom: '#DFE4E9', glyph: '駅' },
    keywords: ['train', 'station', 'shinkansen', 'bus', 'taxi', 'car', 'truck',
      'airport', 'port', 'ferry', 'boat', 'highway'] },
  { theme: { key: 'shrine', top: '#F2ECE0', bottom: '#E8DCC7', glyph: '祈' },
    keywords: ['shrine', 'temple', 'graveyard', 'memorial'] },
  { theme: { key: 'nature', top: '#EBF2E2', bottom: '#DCEACD', glyph: '森' },
    keywords: ['park', 'garden', 'orchard', 'meadow', 'field', 'farm', 'rice',
      'ranch', 'countryside', 'forest', 'mountain', 'zoo', 'camp'] },
  { theme: { key: 'water', top: '#EAF2F5', bottom: '#DAE8EF', glyph: '水' },
    keywords: ['river', 'pond', 'lake', 'beach', 'waves', 'pool', 'sento', 'bath', 'sea'] },
  { theme: { key: 'event', top: '#F6ECE1', bottom: '#EDDCC8', glyph: '祭' },
    keywords: ['festival', 'event', 'hall', 'theater', 'theatre', 'cinema',
      'concert', 'recital', 'wedding', 'community', 'reunion', 'museum',
      'gallery', 'fair', 'stadium', 'auditorium', 'senior', 'cultural', 'arcade'] },
  { theme: { key: 'sports', top: '#EDF1ED', bottom: '#E0E8E1', glyph: '力' },
    keywords: ['gym', 'tennis', 'soccer', 'baseball', 'yoga', 'driving'] },
  { theme: { key: 'workshop', top: '#F1EDE4', bottom: '#E7DFD1', glyph: '工' },
    keywords: ['workshop', 'studio', 'garage'] },
  { theme: { key: 'phone', top: '#F0EFEA', bottom: '#E5E3DB', glyph: '話' },
    keywords: ['phone'] },
]

/** exported for the coverage test only */
export const AMBIENT_FAMILIES: ReadonlyArray<{ theme: AmbientTheme, keywords: string[] }> = FAMILIES

/**
 * Resolve an ambient tag to its family theme. The tag's FIRST token decides
 * when it names a family ("cafe_office_quiet" is a cafe); otherwise any token
 * matches ("jazz_bar_warm_low" is an eatery). Unknown/missing tags get the
 * neutral default.
 */
export function ambientTheme(tag: string | null | undefined): AmbientTheme {
  if (!tag) return DEFAULT_AMBIENT_THEME
  const tokens = tag.toLowerCase().split('_').filter(Boolean)
  if (tokens.length === 0) return DEFAULT_AMBIENT_THEME
  for (const fam of FAMILIES) if (fam.keywords.includes(tokens[0])) return fam.theme
  for (const fam of FAMILIES) if (tokens.some(t => fam.keywords.includes(t))) return fam.theme
  return DEFAULT_AMBIENT_THEME
}

// ---- time-of-day tint (device clock) ----

export type DayPhase = 'day' | 'evening' | 'night'

/** evening 17:00–20:59, night 21:00–05:59, otherwise day */
export function dayPhase(hour: number): DayPhase {
  if (hour >= 17 && hour < 21) return 'evening'
  if (hour >= 21 || hour < 6) return 'night'
  return 'day'
}

/**
 * Locked design: evening #FFB070 at 30% opacity, night #3A4A7A at 45%,
 * day = no tint. The tint sits behind the white cards, never over them.
 */
export function phaseTint(phase: DayPhase): { color: string, opacity: number } | null {
  if (phase === 'evening') return { color: '#FFB070', opacity: 0.3 }
  if (phase === 'night') return { color: '#3A4A7A', opacity: 0.45 }
  return null
}

// ---- proportional "spoken so far" highlight ----

/**
 * No per-token timing data exists, so assume speech advances evenly through
 * the line's characters: a token counts as spoken once its CUMULATIVE
 * character share is <= the playback fraction. Returns how many leading
 * tokens to highlight when playback is at `fraction` (0..1) of the clip.
 */
export function spokenTokenCount(
  tokens: ReadonlyArray<{ s: string }>, fraction: number,
): number {
  if (tokens.length === 0) return 0
  const f = Math.min(1, Math.max(0, fraction))
  if (f <= 0) return 0
  const total = tokens.reduce((n, t) => n + t.s.length, 0)
  if (total === 0) return f >= 1 ? tokens.length : 0
  let cum = 0
  let count = 0
  for (const t of tokens) {
    cum += t.s.length
    if (cum / total <= f + 1e-9) count += 1
    else break
  }
  return count
}

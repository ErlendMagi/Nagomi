// Nagomi color system (user 2026-07-18: "I actually do want colours in the
// app, it is just that right now I am using it on my e-ink phone").
//
// DUAL-RENDER RULE: every color here is chosen for its LUMINANCE first —
// on the Bigme's grayscale panel a color IS its gray, so hierarchy must
// survive desaturation. The palette therefore uses mid-luminance accents
// that read as distinct grays against ink (#1a1a1a) and paper (#FAF6EE),
// and comes alive as color on ordinary phones. Never encode meaning in hue
// alone — pair color with weight, pattern, or a mark (the charts already
// follow this; the app chrome now does too).
//
// Voice of the palette: traditional Japan — shu (vermilion torii), kin
// (temple gold), matsu (pine green). Warm, calm, never neon.

export const PALETTE = {
  // foundations (unchanged — the app's base remains ink on warm paper)
  ink: '#1a1a1a',
  paper: '#FAF6EE',
  card: '#FFFFFF',
  border: '#D8CFBA',
  muted: '#6E6E6E',

  /** shu — primary accent: active/interactive emphasis. Saturation raised
   *  2026-07-18 (Duolingo-vibrancy research: flat + saturated primaries);
   *  luminance ≈40% keeps it a firm dark-mid gray on e-ink */
  accent: '#D64430',
  /** kin — reward/streak warmth (≈57% luminance → clear mid gray) */
  gold: '#D9A431',
  /** matsu — completion/success (≈35% luminance) */
  pine: '#3E6B4F',
  /** soft accent wash for large fills where full shu would shout */
  accentSoft: '#E4B7AF',
} as const

/** per-character accent tints for the avatar wardrobe — one hue family per
 *  life-stage so casts stay visually grouped; all mid-luminance (e-ink safe) */
/**
 * Display typeface (Duolingo-style pass 2026-07-18): plump, ultra-rounded —
 * Nunito ExtraBold is the free classic of the genre (their Feather is
 * proprietary; we copy the PRINCIPLE — round, chunky, friendly — not the
 * font). LATIN ONLY: Japanese text always stays on the system CJK font.
 */
export const DISPLAY_FONT = 'Nunito_800ExtraBold'
export const DISPLAY_FONT_BOLD = 'Nunito_700Bold'

export const AVATAR_TINTS = {
  child: '#D98E32',    // warm apricot
  teen: '#4E7A9B',     // denim blue
  adult: '#7A5C8E',    // soft plum
  elder: '#6B7F5E',    // moss
  uniform: '#34506B',  // service indigo (officer, doctor)
} as const

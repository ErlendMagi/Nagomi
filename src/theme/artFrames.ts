// Frame resolution for the illustrated cast. PURE lookup logic over the
// generated require-map (assets/art/index.ts) so it stays unit-testable.
//
// Resolution order for (expression, mouth): exact frame → same expression
// other mouth → neutral same mouth → neutral_closed → null (SVG fallback).
// Blink is performed by flashing the closed-mouth neutral frame briefly —
// baked art has no eyelid state.

import { ART_CHARS, ART_BG, ART_FACING } from '../../assets/art'
import type { Expression } from '../components/CharacterAvatar'

export function artFrame(
  id: string,
  expression: Expression,
  mouthOpen: boolean,
  frames: Record<string, Record<string, number>> = ART_CHARS,
): number | null {
  const set = frames[id]
  if (!set) return null
  const mouth = mouthOpen ? 'open' : 'closed'
  const other = mouthOpen ? 'closed' : 'open'
  return (
    set[`${expression}_${mouth}`] ??
    set[`${expression}_${other}`] ??
    set[`neutral_${mouth}`] ??
    set['neutral_closed'] ??
    null
  )
}

export function artBackdrop(
  familyKey: string,
  bgs: Record<string, number> = ART_BG,
): number | null {
  return bgs[familyKey] ?? bgs['default'] ?? null
}

/** baked facing of the character's art ('left'|'right'), null when unknown */
export function artFacing(id: string): 'left' | 'right' | null {
  return ART_FACING[id] ?? null
}

/** true when this character has illustrated frames bundled */
export function hasArt(id: string, frames: Record<string, Record<string, number>> = ART_CHARS): boolean {
  return !!frames[id]
}

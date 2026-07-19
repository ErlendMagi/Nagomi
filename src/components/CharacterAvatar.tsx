// Character portraits (user 2026-07-18: the app "is really stale and static
// … some visuals (character pictures for example) would be cool").
//
// One parameterized ink-line avatar, 22 configured looks — hand-drawn SVG,
// zero image assets, ~3 KB total. Style: friendly minimal line-art (bold
// 2.5px ink outlines, warm skin wash, one accent-tinted garment per
// character) — crisp at 28–44 px, perfect on e-ink (it IS line art), and
// gains its color on ordinary phones. Every look is derived from the cast
// sheet in data/characters.json: age band → hair/wardrobe hue family,
// role → accessory (officer cap, doctor coat, boss tie, …).
//
// Deterministic and pure: same id → same face, no randomness, no network.

import React from 'react'
import Svg, { Circle, Ellipse, Line, Path, Rect } from 'react-native-svg'
import { AVATAR_TINTS, PALETTE } from '../theme/palette'

const INK = PALETTE.ink
const SKIN = '#F2D9BE'
const SKIN_DEEP = '#E8C9A8'

type Hair =
  | 'short' | 'spiky' | 'bob' | 'long' | 'bun' | 'ponytail'
  | 'pigtails' | 'balding' | 'grayShort' | 'grayBun' | 'buzz'

interface Look {
  hair: Hair
  hairColor: string
  tint: string
  glasses?: 'round' | 'rect'
  beard?: boolean
  mustache?: boolean
  earring?: boolean
  hairpin?: boolean
  tie?: boolean
  cap?: boolean          // service cap (officer)
  coat?: boolean         // white coat lapels (doctor)
  blush?: boolean        // kids get rosier cheeks
  skin?: string
}

const BLACK = '#2B2B2B'
const BROWN = '#5B4230'
const GRAY = '#9A9A96'
const WHITE_HAIR = '#D8D4CC'

/** the 22-member cast — grouped by life stage, distinguished by role */
export const CAST_LOOKS: Record<string, Look> = {
  hina_child: { hair: 'pigtails', hairColor: BLACK, tint: AVATAR_TINTS.child, blush: true, hairpin: true },
  sho_child: { hair: 'buzz', hairColor: BLACK, tint: AVATAR_TINTS.child, blush: true },
  sakura_teen: { hair: 'long', hairColor: BROWN, tint: AVATAR_TINTS.teen, hairpin: true },
  riku_teen: { hair: 'spiky', hairColor: BLACK, tint: AVATAR_TINTS.teen },
  yuki_office: { hair: 'bob', hairColor: BLACK, tint: AVATAR_TINTS.adult, earring: true },
  kenji_office: { hair: 'short', hairColor: BLACK, tint: AVATAR_TINTS.adult, tie: true },
  aoi_barista: { hair: 'ponytail', hairColor: BROWN, tint: AVATAR_TINTS.adult },
  daichi_kansai: { hair: 'spiky', hairColor: BROWN, tint: AVATAR_TINTS.adult },
  mei_romantic: { hair: 'long', hairColor: BLACK, tint: AVATAR_TINTS.adult, earring: true },
  ren_uni: { hair: 'short', hairColor: BROWN, tint: AVATAR_TINTS.teen, glasses: 'round' },
  hiroshi_boss: { hair: 'balding', hairColor: GRAY, tint: AVATAR_TINTS.adult, tie: true, glasses: 'rect' },
  yumiko_mom: { hair: 'bob', hairColor: BROWN, tint: AVATAR_TINTS.adult },
  ryosuke_dad: { hair: 'short', hairColor: BLACK, tint: AVATAR_TINTS.adult, beard: true },
  naoko_aunt: { hair: 'bun', hairColor: BROWN, tint: AVATAR_TINTS.adult, earring: true },
  tatsuya_country: { hair: 'grayShort', hairColor: GRAY, tint: AVATAR_TINTS.elder, mustache: true },
  asuka_teacher: { hair: 'ponytail', hairColor: BLACK, tint: AVATAR_TINTS.adult, glasses: 'rect' },
  sachiko_grandma: { hair: 'grayBun', hairColor: WHITE_HAIR, tint: AVATAR_TINTS.elder, skin: SKIN_DEEP },
  goro_grandpa: { hair: 'balding', hairColor: WHITE_HAIR, tint: AVATAR_TINTS.elder, glasses: 'round', skin: SKIN_DEEP },
  mrs_mori_neighbor: { hair: 'grayBun', hairColor: GRAY, tint: AVATAR_TINTS.elder, glasses: 'round', skin: SKIN_DEEP },
  hiroshi_elder: { hair: 'grayShort', hairColor: WHITE_HAIR, tint: AVATAR_TINTS.elder, beard: true, skin: SKIN_DEEP },
  takeda_officer: { hair: 'short', hairColor: BLACK, tint: AVATAR_TINTS.uniform, cap: true },
  saito_doctor: { hair: 'bun', hairColor: BLACK, tint: AVATAR_TINTS.uniform, glasses: 'rect', coat: true },
}

/** narrator/unknown speakers get a quiet hooded silhouette, never a blank */
const FALLBACK: Look = { hair: 'short', hairColor: GRAY, tint: PALETTE.muted }

export type Expression = 'neutral' | 'happy' | 'sad' | 'surprised' | 'excited' | 'tired'

export default function CharacterAvatar({
  id, size = 32, expression = 'neutral', gazeX = 0, gazeY = 0, mouthOpen = false, blink = false,
}: {
  id: string
  size?: number
  /** stage direction: the face the character wears (theater pass 2026-07-18) */
  expression?: Expression
  /** pupil offset −1..1 — eye contact toward the other character or the user */
  gazeX?: number
  gazeY?: number
  /** talking frame: mouth open (the actor alternates this while the clip plays) */
  mouthOpen?: boolean
  /** idle blink frame */
  blink?: boolean
}) {
  const look = CAST_LOOKS[id] ?? FALLBACK
  const skin = look.skin ?? SKIN
  const sw = 2.5
  const px = Math.max(-1, Math.min(1, gazeX)) * 1.6
  const py = Math.max(-1, Math.min(1, gazeY)) * 1.2

  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      {/* shoulders / garment — the character's accent color lives here */}
      <Path
        d="M10 64 C10 50 20 44 32 44 C44 44 54 50 54 64 Z"
        fill={look.coat ? '#FFFFFF' : look.tint}
        stroke={INK} strokeWidth={sw}
      />
      {look.coat && (
        // white-coat lapels over an accent shirt
        <>
          <Path d="M26 46 L32 56 L38 46" fill={look.tint} stroke={INK} strokeWidth={2} />
        </>
      )}
      {look.tie && (
        <Path d="M32 46 L35 51 L32 58 L29 51 Z" fill={INK} />
      )}

      {/* head */}
      <Circle cx={32} cy={27} r={15} fill={skin} stroke={INK} strokeWidth={sw} />

      {/* hair — drawn over the head outline */}
      {look.hair === 'short' && (
        <Path d="M17.5 26 C17.5 15 24 11.5 32 11.5 C40 11.5 46.5 15 46.5 26 C44 19 38 16.5 32 16.5 C26 16.5 20 19 17.5 26 Z"
          fill={look.hairColor} stroke={INK} strokeWidth={2} />
      )}
      {look.hair === 'buzz' && (
        <Path d="M18 24 C18 15.5 24.5 12 32 12 C39.5 12 46 15.5 46 24 C42 18.5 37 17 32 17 C27 17 22 18.5 18 24 Z"
          fill={look.hairColor} stroke={INK} strokeWidth={2} />
      )}
      {look.hair === 'spiky' && (
        <Path d="M17.5 25 L20 17 L24 20 L27 13 L32 18 L37 12.5 L40 19 L44.5 16 L46.5 25 C43 19 38 16.5 32 16.5 C26 16.5 21 19 17.5 25 Z"
          fill={look.hairColor} stroke={INK} strokeWidth={2} />
      )}
      {look.hair === 'bob' && (
        <Path d="M17 32 C15.5 18 22 11 32 11 C42 11 48.5 18 47 32 L44 30 C45 21 41 16 32 16 C23 16 19 21 20 30 Z"
          fill={look.hairColor} stroke={INK} strokeWidth={2} />
      )}
      {look.hair === 'long' && (
        <Path d="M15 44 C14 24 20 10.5 32 10.5 C44 10.5 50 24 49 44 L43 42 C44.5 28 42 16 32 16 C22 16 19.5 28 21 42 Z"
          fill={look.hairColor} stroke={INK} strokeWidth={2} />
      )}
      {look.hair === 'bun' && (
        <>
          <Circle cx={32} cy={10} r={5.5} fill={look.hairColor} stroke={INK} strokeWidth={2} />
          <Path d="M17.5 27 C17.5 15.5 24 12 32 12 C40 12 46.5 15.5 46.5 27 C44 19.5 38 17 32 17 C26 17 20 19.5 17.5 27 Z"
            fill={look.hairColor} stroke={INK} strokeWidth={2} />
        </>
      )}
      {look.hair === 'grayBun' && (
        <>
          <Circle cx={32} cy={10.5} r={5} fill={look.hairColor} stroke={INK} strokeWidth={2} />
          <Path d="M17.5 28 C17.5 16 24 12.5 32 12.5 C40 12.5 46.5 16 46.5 28 C44 20 38 17.5 32 17.5 C26 17.5 20 20 17.5 28 Z"
            fill={look.hairColor} stroke={INK} strokeWidth={2} />
        </>
      )}
      {look.hair === 'ponytail' && (
        <>
          <Path d="M44 20 C50 26 50 36 46 43 C48 34 46 27 42 24 Z" fill={look.hairColor} stroke={INK} strokeWidth={2} />
          <Path d="M17.5 27 C17.5 15 24 11.5 32 11.5 C40 11.5 46.5 15 46.5 27 C44 19.5 38 17 32 17 C26 17 20 19.5 17.5 27 Z"
            fill={look.hairColor} stroke={INK} strokeWidth={2} />
        </>
      )}
      {look.hair === 'pigtails' && (
        <>
          <Circle cx={14.5} cy={26} r={5} fill={look.hairColor} stroke={INK} strokeWidth={2} />
          <Circle cx={49.5} cy={26} r={5} fill={look.hairColor} stroke={INK} strokeWidth={2} />
          <Path d="M17.5 27 C17.5 15.5 24 12 32 12 C40 12 46.5 15.5 46.5 27 C44 19.5 38 17 32 17 C26 17 20 19.5 17.5 27 Z"
            fill={look.hairColor} stroke={INK} strokeWidth={2} />
        </>
      )}
      {look.hair === 'balding' && (
        <>
          <Path d="M17.5 27 C17.5 22 19 19 21.5 17.5 C21 21 21.5 24 22.5 26.5 Z" fill={look.hairColor} stroke={INK} strokeWidth={1.8} />
          <Path d="M46.5 27 C46.5 22 45 19 42.5 17.5 C43 21 42.5 24 41.5 26.5 Z" fill={look.hairColor} stroke={INK} strokeWidth={1.8} />
        </>
      )}
      {look.hair === 'grayShort' && (
        <Path d="M17.5 26.5 C17.5 16.5 24 13 32 13 C40 13 46.5 16.5 46.5 26.5 C44 20 38 17.5 32 17.5 C26 17.5 20 20 17.5 26.5 Z"
          fill={look.hairColor} stroke={INK} strokeWidth={2} />
      )}

      {/* officer service cap sits over everything */}
      {look.cap && (
        <>
          <Path d="M17 22 C17 14 23.5 10 32 10 C40.5 10 47 14 47 22 L17 22 Z"
            fill={look.tint} stroke={INK} strokeWidth={2} />
          <Rect x={15} y={21} width={34} height={4.5} rx={2} fill={INK} />
          <Circle cx={32} cy={16} r={2.2} fill={PALETTE.gold} stroke={INK} strokeWidth={1} />
        </>
      )}

      {/* face: LIVE eyes (sclera + gazing pupil + blink) — eye contact is the
          soul of the stage (user 2026-07-18: "Eye-contact … among the MOST
          important things") */}
      {blink ? (
        <>
          <Path d="M24.5 27.5 Q26.5 29 28.5 27.5" fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
          <Path d="M35.5 27.5 Q37.5 29 39.5 27.5" fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
        </>
      ) : (
        <>
          <Circle cx={26.5} cy={27.5} r={expression === 'surprised' || expression === 'excited' ? 3.4 : 2.9} fill="#FFFFFF" stroke={INK} strokeWidth={1.1} />
          <Circle cx={37.5} cy={27.5} r={expression === 'surprised' || expression === 'excited' ? 3.4 : 2.9} fill="#FFFFFF" stroke={INK} strokeWidth={1.1} />
          <Circle cx={26.5 + px} cy={27.5 + py} r={expression === 'tired' ? 1.2 : 1.6} fill={INK} />
          <Circle cx={37.5 + px} cy={27.5 + py} r={expression === 'tired' ? 1.2 : 1.6} fill={INK} />
          {expression === 'tired' && (
            <>
              <Line x1={23.5} y1={25} x2={29.5} y2={25.6} stroke={INK} strokeWidth={1.2} />
              <Line x1={34.5} y1={25.6} x2={40.5} y2={25} stroke={INK} strokeWidth={1.2} />
            </>
          )}
        </>
      )}
      {/* brows carry the emotion */}
      {expression === 'surprised' && (
        <>
          <Path d="M23.5 22 Q26.5 20.5 29.5 22" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
          <Path d="M34.5 22 Q37.5 20.5 40.5 22" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        </>
      )}
      {expression === 'sad' && (
        <>
          <Path d="M23.5 23.5 Q26.5 22 29.5 23.8" fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
          <Path d="M34.5 23.8 Q37.5 22 40.5 23.5" fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
        </>
      )}
      {/* mouth: talking frames + expression shapes */}
      {mouthOpen ? (
        <Ellipse cx={32} cy={35} rx={expression === 'excited' || expression === 'surprised' ? 4 : 3} ry={expression === 'sad' ? 2 : 3.2} fill={INK} />
      ) : expression === 'happy' || expression === 'excited' ? (
        <Path d="M26.5 33.2 C29 37 35 37 37.5 33.2" fill="none" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
      ) : expression === 'sad' ? (
        <Path d="M27.5 36.2 C29.5 34 34.5 34 36.5 36.2" fill="none" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
      ) : expression === 'tired' ? (
        <Line x1={28.5} y1={35} x2={35.5} y2={35} stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
      ) : (
        <Path d="M27.5 34 C29.5 36.4 34.5 36.4 36.5 34" fill="none" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
      )}
      {look.blush && (
        <>
          <Ellipse cx={23.5} cy={32} rx={2.6} ry={1.5} fill={PALETTE.accentSoft} />
          <Ellipse cx={40.5} cy={32} rx={2.6} ry={1.5} fill={PALETTE.accentSoft} />
        </>
      )}

      {/* accessories */}
      {look.glasses === 'round' && (
        <>
          <Circle cx={26.5} cy={27.5} r={5} fill="none" stroke={INK} strokeWidth={1.8} />
          <Circle cx={37.5} cy={27.5} r={5} fill="none" stroke={INK} strokeWidth={1.8} />
          <Line x1={31.5} y1={27.5} x2={32.5} y2={27.5} stroke={INK} strokeWidth={1.8} />
        </>
      )}
      {look.glasses === 'rect' && (
        <>
          <Rect x={21.5} y={23.5} width={9.5} height={7.5} rx={2} fill="none" stroke={INK} strokeWidth={1.8} />
          <Rect x={33} y={23.5} width={9.5} height={7.5} rx={2} fill="none" stroke={INK} strokeWidth={1.8} />
          <Line x1={31} y1={27} x2={33} y2={27} stroke={INK} strokeWidth={1.8} />
        </>
      )}
      {look.beard && (
        <Path d="M23 33 C24 40.5 27 42.5 32 42.5 C37 42.5 40 40.5 41 33 C39.5 39 36.5 40.6 32 40.6 C27.5 40.6 24.5 39 23 33 Z"
          fill={look.hairColor} stroke={INK} strokeWidth={1.6} />
      )}
      {look.mustache && (
        <Path d="M26 32.6 C28 31.2 30 31.4 32 32.4 C34 31.4 36 31.2 38 32.6 C36 34.2 34 34.2 32 33.4 C30 34.2 28 34.2 26 32.6 Z"
          fill={look.hairColor} />
      )}
      {look.earring && (
        <>
          <Circle cx={17.5} cy={31.5} r={1.6} fill={PALETTE.gold} stroke={INK} strokeWidth={0.9} />
          <Circle cx={46.5} cy={31.5} r={1.6} fill={PALETTE.gold} stroke={INK} strokeWidth={0.9} />
        </>
      )}
      {look.hairpin && (
        <Path d="M42 17 L46.5 15 L45 19.5 Z" fill={PALETTE.accent} stroke={INK} strokeWidth={1} />
      )}
    </Svg>
  )
}

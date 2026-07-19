// JuicyButton — the Duolingo-style physical key (user 2026-07-18: "when I
// click a button, the button should move like it does with an animation as
// in duolingo"). The signature is a thick darker BOTTOM LIP under a rounded
// face; on press the face sinks by the lip's height and the lip collapses —
// the button physically depresses under your finger.
//
// Deliberately a TWO-STATE transform, not a spring: on the Bigme's e-ink
// panel that's one crisp redraw down and one up (no smear, no ghosting),
// and on ordinary phones the down/up snap still reads as motion. A spring
// polish can layer on later behind a device check; the geometry is the feel.

import React from 'react'
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native'
import { DISPLAY_FONT, PALETTE } from '../theme/palette'

/** Pure: darken a #rrggbb color by `amount` 0..1 — the lip is always the
 *  face's own shadow, so every face color gets a matching lip for free. */
export function darken(hex: string, amount: number): string {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex)
  if (!m) return hex
  const n = parseInt(m[1], 16)
  const f = Math.max(0, Math.min(1, 1 - amount))
  const r = Math.round(((n >> 16) & 0xff) * f)
  const g = Math.round(((n >> 8) & 0xff) * f)
  const b = Math.round((n & 0xff) * f)
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

export const LIP = 5 // the travel distance — chunky enough to see, calm enough for e-ink

export default function JuicyButton({
  label, onPress, disabled = false, color = PALETTE.accent, textColor = '#FFFFFF',
  round = false, size = 'md', style, children,
}: {
  label?: string
  onPress?: () => void
  disabled?: boolean
  /** face color; the lip derives from it automatically */
  color?: string
  textColor?: string
  /** circular button (the play key) */
  round?: boolean
  size?: 'sm' | 'md' | 'lg'
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}) {
  const lip = darken(color, 0.32)
  const padV = size === 'lg' ? 16 : size === 'sm' ? 8 : 12
  const fontSize = size === 'lg' ? 18 : size === 'sm' ? 13.5 : 15.5
  const radius = round ? 999 : size === 'sm' ? 12 : 16

  return (
    <Pressable onPress={onPress} disabled={disabled} style={style}>
      {({ pressed }) => (
        <View style={{ paddingTop: pressed ? LIP : 0 }}>
          <View
            style={[
              styles.face,
              {
                backgroundColor: disabled ? '#C9C0AA' : color,
                borderRadius: radius,
                paddingVertical: round ? 0 : padV,
                // the lip: a hard bottom edge that collapses when pressed —
                // the whole reason the button reads as a physical key
                borderBottomWidth: pressed ? 0 : LIP,
                borderBottomColor: disabled ? '#A89F8C' : lip,
              },
              round && styles.round,
            ]}
          >
            {children ?? (
              <Text allowFontScaling={false} style={[styles.label, { color: textColor, fontSize }]}>
                {label}
              </Text>
            )}
          </View>
        </View>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  face: { alignItems: 'center', justifyContent: 'center' },
  round: { width: 96, height: 96 },
  // plump rounded display face (Nunito loads in one frame; the pre-load
  // fallback is the system font at the same weight — no layout jump)
  label: { fontFamily: DISPLAY_FONT, fontWeight: '800', letterSpacing: 0.3 },
})

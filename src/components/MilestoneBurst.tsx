// Milestone burst (user 2026-07-18: "fun animations (with several frames
// that does not drain the battery)"): a sakura-petal burst that steps
// through FRAMES discrete states around the milestone number — petals fly
// outward and fade, the number lands plump and golden. Plain setTimeout
// frame-stepping (the WordsPulse budget philosophy): ~8 redraws total, no
// Animated loops, no battery drain, no e-ink smear. Auto-hides; never
// intercepts touches; the hook only fires it between conversations.

import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Circle, Ellipse } from 'react-native-svg'
import { DISPLAY_FONT, PALETTE } from '../theme/palette'

export const BURST_FRAMES = 8
export const BURST_FRAME_MS = 110
export const BURST_HOLD_MS = 2200

/** petal positions for a frame 0..1 — pure, exported for tests */
export function petalAt(index: number, count: number, t: number): { x: number, y: number, scale: number, fade: number } {
  const angle = (index / count) * Math.PI * 2 + 0.4
  const dist = 14 + t * 52
  return {
    x: 80 + Math.cos(angle) * dist,
    y: 64 + Math.sin(angle) * dist * 0.8 - t * 8, // drift upward, sakura-style
    scale: 1 - t * 0.45,
    fade: t < 0.75 ? 1 : 1 - (t - 0.75) / 0.25,
  }
}

const PETALS = 10

export default function MilestoneBurst({ value, nonce }: { value: number, nonce: number }) {
  const [frame, setFrame] = useState(-1) // -1 = hidden
  useEffect(() => {
    if (nonce === 0) return
    setFrame(0)
    const timers: ReturnType<typeof setTimeout>[] = []
    for (let f = 1; f < BURST_FRAMES; f++) {
      timers.push(setTimeout(() => setFrame(f), f * BURST_FRAME_MS))
    }
    timers.push(setTimeout(() => setFrame(-1), BURST_FRAMES * BURST_FRAME_MS + BURST_HOLD_MS))
    return () => { for (const t of timers) clearTimeout(t) }
  }, [nonce])

  if (frame < 0) return null
  const t = Math.min(1, frame / (BURST_FRAMES - 1))

  return (
    <View style={styles.wrap} pointerEvents="none">
      <Svg width={160} height={128}>
        {Array.from({ length: PETALS }, (_, i) => {
          const p = petalAt(i, PETALS, t)
          return (
            <Ellipse
              key={i}
              cx={p.x} cy={p.y}
              rx={5.5 * p.scale} ry={3.5 * p.scale}
              rotation={(i * 36) + t * 40} origin={`${p.x}, ${p.y}`}
              fill={i % 3 === 0 ? PALETTE.gold : PALETTE.accentSoft}
              opacity={p.fade}
            />
          )
        })}
        <Circle cx={80} cy={64} r={30 - t * 4} fill={PALETTE.ink} />
      </Svg>
      <View style={styles.center} pointerEvents="none">
        <Text allowFontScaling={false} style={styles.num}>
          {value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)}
        </Text>
        <Text allowFontScaling={false} style={styles.label}>words</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute', top: 96, alignSelf: 'center',
    alignItems: 'center', justifyContent: 'center',
  },
  center: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' },
  num: { fontFamily: DISPLAY_FONT, fontSize: 22, fontWeight: '800', color: PALETTE.gold },
  label: { fontFamily: DISPLAY_FONT, fontSize: 10.5, fontWeight: '700', color: '#FAF6EE', marginTop: -2 },
})

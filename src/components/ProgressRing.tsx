// Daily-goal ring around the play button (locked design: circular progress,
// no visible timer). Self-contained — no legacy theme dependency.

import React from 'react'
import { View, Text } from 'react-native'
import Svg, { Circle } from 'react-native-svg'
import { PALETTE } from '../theme/palette'

/**
 * Arc fractions for the two rings, hardened against garbage input
 * (NaN / ±Infinity / negatives). Pure so it's testable: a NaN reaching
 * strokeDasharray renders the arc empty or full for a frame — on e-ink that
 * flash looks exactly like the ring "popping back to start" (user report
 * 2026-07-16; the primary fix is the day-counter carry in useSession.start(),
 * this keeps the ring itself unable to draw garbage). Non-finite → 0: an
 * empty ring is the honest "we don't know" state, a full one lies.
 */
export function ringFractions(progress: number, minimumProgress: number): {
  /** 0..1 fill of the main goal arc */
  main: number
  /** 0..1 fill of the inner 10-min-minimum hint arc */
  min: number
} {
  const clamp = (x: number) => (Number.isFinite(x) ? Math.min(1, Math.max(0, x)) : 0)
  return { main: clamp(progress), min: clamp(minimumProgress) }
}

export default function ProgressRing({
  size = 128,
  strokeWidth = 6,
  progress = 0,          // 0..1 toward the daily goal (can exceed 1; clamped)
  minimumProgress = 0,   // 0..1 toward the fixed 10-min minimum (inner hint)
  color = '#1a1a1a',
  trackColor = '#E5DECF',
  done = false,
  children,
}: {
  size?: number
  strokeWidth?: number
  progress?: number
  minimumProgress?: number
  color?: string
  trackColor?: string
  /** daily goal reached — thicker solid ring + a ✓ badge at the top for the
   *  rest of the day (user 2026-07-16: "clearly see that today's goal is done") */
  done?: boolean
  children?: React.ReactNode
}) {
  const doneStroke = done ? strokeWidth + 3 : strokeWidth
  // pine = sealed/finished; the caller's color (accent) = in progress. Both
  // are mid-luminance so the distinction also survives grayscale e-ink.
  const strokeColor = done ? PALETTE.pine : color
  const r = (size - doneStroke) / 2
  const c = size / 2
  const circumference = 2 * Math.PI * r
  const { main, min } = ringFractions(done ? 1 : progress, minimumProgress)
  const dash = circumference * main
  const minDash = circumference * min

  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <Svg width={size} height={size} style={{ position: 'absolute' }}>
        <Circle cx={c} cy={c} r={r} stroke={trackColor} strokeWidth={doneStroke} fill="none" />
        {!done && min > 0 && min < 1 && (
          <Circle
            cx={c} cy={c} r={r}
            stroke="#B8B0A0" strokeWidth={doneStroke} fill="none"
            strokeDasharray={`${minDash} ${circumference}`}
            strokeLinecap="round" rotation={-90} origin={`${c}, ${c}`}
          />
        )}
        <Circle
          cx={c} cy={c} r={r}
          stroke={strokeColor} strokeWidth={doneStroke} fill="none"
          strokeDasharray={`${dash} ${circumference}`}
          strokeLinecap="round" rotation={-90} origin={`${c}, ${c}`}
        />
      </Svg>
      {children}
      {done && (
        <View
          style={{
            position: 'absolute', top: -6, alignSelf: 'center',
            backgroundColor: PALETTE.pine, borderRadius: 12, width: 24, height: 24,
            alignItems: 'center', justifyContent: 'center',
            borderWidth: 2, borderColor: '#FAF6EE',
          }}
        >
          <Text allowFontScaling={false} style={{ color: '#FAF6EE', fontSize: 13, fontWeight: '700' }}>✓</Text>
        </View>
      )}
    </View>
  )
}

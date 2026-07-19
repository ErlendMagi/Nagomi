// JLPT donut: five annular segments (words HEARD per frequency band) in
// strict monochrome — N5 solid black through grays to N1 white-with-black-
// border, five fills a 16-level e-ink panel keeps apart. Identity never rides
// on color alone: the legend beside the ring carries level + counts, and its
// swatches match the segment fills exactly. Segments are separated by a 2px
// white surface gap (the card behind is #FFFFFF), not strokes.

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Circle, Path, Text as SvgText } from 'react-native-svg'
import type { JlptBand } from '../../engine/analytics'

const INK = '#1a1a1a'
/** monochrome fills, N5 → N1: black, dark gray, mid gray, light gray, white */
const BAND_COLORS = ['#1a1a1a', '#4A4A4A', '#8A8A8A', '#C9C9C9', '#FFFFFF']
const TRACK = '#DDDDDD'
const RING = 22

function polar(cx: number, cy: number, r: number, a: number): { x: number, y: number } {
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
}

/** annular sector from angle a0 to a1 (radians, clockwise from 3 o'clock) */
function sectorPath(cx: number, cy: number, rOut: number, rIn: number, a0: number, a1: number): string {
  const large = a1 - a0 > Math.PI ? 1 : 0
  const o0 = polar(cx, cy, rOut, a0)
  const o1 = polar(cx, cy, rOut, a1)
  const i0 = polar(cx, cy, rIn, a0)
  const i1 = polar(cx, cy, rIn, a1)
  return [
    `M${o0.x.toFixed(2)} ${o0.y.toFixed(2)}`,
    `A${rOut} ${rOut} 0 ${large} 1 ${o1.x.toFixed(2)} ${o1.y.toFixed(2)}`,
    `L${i1.x.toFixed(2)} ${i1.y.toFixed(2)}`,
    `A${rIn} ${rIn} 0 ${large} 0 ${i0.x.toFixed(2)} ${i0.y.toFixed(2)}`,
    'Z',
  ].join(' ')
}

function fmtNum(n: number): string {
  return n >= 1000 ? `${Math.floor(n / 1000)},${String(n % 1000).padStart(3, '0')}` : String(n)
}

export default function JlptDonut({ bands, size = 148 }: { bands: JlptBand[], size?: number }) {
  const cx = size / 2
  const cy = size / 2
  const rOut = size / 2
  const rIn = rOut - RING
  const heardOf = (b: JlptBand) => b.graduated + b.inFlight
  const total = bands.reduce((s, b) => s + heardOf(b), 0)

  // 2px white surface gap between segments, expressed as an angle at mid-radius
  const gap = 2 / ((rOut + rIn) / 2)
  const segments: { d: string, color: string }[] = []
  if (total > 0) {
    let cursor = -Math.PI / 2 // start at 12 o'clock
    bands.forEach((b, i) => {
      const raw = (heardOf(b) / total) * 2 * Math.PI
      if (heardOf(b) > 0) {
        const a0 = cursor + gap / 2
        const a1 = Math.max(a0 + 0.015, cursor + raw - gap / 2) // slivers stay visible
        segments.push({ d: sectorPath(cx, cy, rOut, rIn, a0, a1), color: BAND_COLORS[i] })
      }
      cursor += raw
    })
  }

  return (
    <View style={styles.row}>
      <Svg width={size} height={size}>
        {total === 0 && (
          <Circle cx={cx} cy={cy} r={(rOut + rIn) / 2} fill="none" stroke={TRACK} strokeWidth={RING} />
        )}
        {segments.map((s, i) => (
          <Path key={i} d={s.d} fill={s.color}
            stroke={s.color === '#FFFFFF' ? INK : 'none'} strokeWidth={1.5} />
        ))}
        <SvgText x={cx} y={cy + 2} fontSize={24} fontWeight="700" fill={INK} textAnchor="middle">
          {fmtNum(total)}
        </SvgText>
        <SvgText x={cx} y={cy + 18} fontSize={11} fill="#555" textAnchor="middle">
          words heard
        </SvgText>
      </Svg>

      <View style={styles.legend}>
        {bands.map((b, i) => (
          <View key={b.level} style={styles.legendRow}>
            <View
              style={[
                styles.swatch,
                { backgroundColor: BAND_COLORS[i] },
                BAND_COLORS[i] === '#FFFFFF' && styles.swatchOutlined,
              ]}
            />
            <Text style={styles.level}>{b.level}</Text>
            <Text style={styles.counts}>
              {heardOf(b) === 0
                ? 'not started'
                : `${fmtNum(heardOf(b))} of ${fmtNum(b.bandSize)} · graduated ${fmtNum(b.graduated)}`}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  legend: { flex: 1, marginLeft: 16 },
  legendRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 3 },
  swatch: { width: 12, height: 12, borderRadius: 3, marginRight: 8 },
  swatchOutlined: { borderWidth: 1.5, borderColor: '#1a1a1a' },
  level: { fontSize: 14, fontWeight: '600', color: '#1a1a1a', width: 30 },
  counts: { fontSize: 12, color: '#555', flexShrink: 1 },
})

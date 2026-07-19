// JLPT progression bars (Progress screen): one row per level N5→N1 showing
// KNOWN (graduated) words against the band size — the number that actually
// climbs. Behind the solid-ink fill a hatched segment shows heard-but-not-
// yet-known exposure, visible but clearly subordinate. Strict monochrome for
// the 16-level e-ink panel. Dopamine, e-ink style: on mount every bar fills
// in at most BAR_STEPS discrete width updates over ~700ms (same budget
// philosophy as CountUp) and each percentage counts up — never a continuous
// 60fps tween, which smears into ghosting on the Bigme's panel.
//
// Completed levels get a solid black chip + 合格 mark; the CURRENT level
// (first incomplete) row carries a thick ink border and a "next: N words
// to go" line.

import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { ClipPath, Defs, G, Line, Rect } from 'react-native-svg'
import CountUp, { COUNT_UP_MS } from '../CountUp'
import type { JlptBand } from '../../engine/analytics'

const INK = '#1a1a1a'
const MUTED = '#6E6E6E'
const TRACK = '#EFE9DC'
const HATCH = '#8A8A8A'

/** discrete bar-fill updates on mount — the e-ink redraw budget */
export const BAR_STEPS = 6
const BAR_H = 14
const HATCH_SPACING = 5

const CHIP_COL = 46
const CHIP_GAP = 10
const PCT_COL = 48
const PCT_GAP = 8
const ROW_PAD = 8
const ROW_BORDER = 2

export interface JlptRow {
  level: JlptBand['level']
  /** graduated words, clamped to the band size */
  known: number
  /** heard at least once (known + in-flight), clamped to the band size */
  heard: number
  bandSize: number
  knownFrac: number
  heardFrac: number
  /** floor(known/bandSize·100) — 100 only when the band is complete */
  pct: number
  complete: boolean
  /** the first incomplete level, top to bottom */
  current: boolean
  /** words still to graduate in this band */
  toGo: number
}

/**
 * Pure: per-level row model from the analytics breakdown. Counts are clamped
 * into [0, bandSize] (honest math even if upstream ever over-reports), the
 * percentage floors so 799/800 reads 99 — 100% is earned, never rounded to —
 * and exactly one row is `current` unless every band is complete. Exported
 * for tests (src/components/__tests__/jlptprogress.test.ts).
 */
export function buildRows(bands: JlptBand[]): JlptRow[] {
  const rows: JlptRow[] = bands.map(b => {
    const size = Math.max(0, b.bandSize)
    const known = Math.min(Math.max(0, b.graduated), size)
    const heard = Math.min(known + Math.max(0, b.inFlight), size)
    const complete = size > 0 && known >= size
    const knownFrac = size > 0 ? known / size : 0
    const heardFrac = size > 0 ? heard / size : 0
    return {
      level: b.level,
      known,
      heard,
      bandSize: size,
      knownFrac,
      heardFrac,
      pct: complete ? 100 : Math.floor(knownFrac * 100),
      complete,
      current: false,
      toGo: size - known,
    }
  })
  const current = rows.find(r => !r.complete)
  if (current) current.current = true
  return rows
}

/**
 * Pure: the fraction a bar shows at discrete animation phase `phase` of
 * `steps` — 0 at phase 0, EXACTLY the (0..1-clamped) target at the final
 * phase, monotone in between.
 */
export function steppedFraction(target: number, phase: number, steps: number = BAR_STEPS): number {
  const t = Number.isFinite(target) ? Math.min(1, Math.max(0, target)) : 0
  const p = Math.min(steps, Math.max(0, Math.floor(phase)))
  if (p >= steps) return t // exact — (t·p)/steps drifts in float for e.g. t=0.4
  return (t * p) / steps
}

/**
 * Pure: pixel widths of the two fills. Whole pixels (crisp on e-ink), a
 * nonzero fraction never collapses below 4px (slivers stay visible), and
 * heardW ≥ knownW ALWAYS — the hatch never renders inside the solid fill's
 * silhouette.
 */
export function segmentWidths(
  barW: number, knownFrac: number, heardFrac: number,
): { knownW: number, heardW: number } {
  const w = Math.max(0, Math.floor(barW))
  const k = Number.isFinite(knownFrac) ? Math.min(1, Math.max(0, knownFrac)) : 0
  const h = Math.max(k, Number.isFinite(heardFrac) ? Math.min(1, Math.max(0, heardFrac)) : 0)
  const px = (f: number) => (f <= 0 ? 0 : Math.min(w, Math.max(4, Math.round(f * w))))
  const knownW = px(k)
  return { knownW, heardW: Math.max(knownW, px(h)) }
}

/**
 * Pure: 45° hatch line segments (bottom-left → top-right) covering a w×h
 * region; the caller clips them to the heard pill. Empty for a degenerate
 * region.
 */
export function hatchLines(
  w: number, h: number, spacing: number = HATCH_SPACING,
): { x1: number, y1: number, x2: number, y2: number }[] {
  const out: { x1: number, y1: number, x2: number, y2: number }[] = []
  if (w <= 0 || h <= 0 || spacing <= 0) return out
  for (let x = -h; x < w; x += spacing) out.push({ x1: x, y1: h, x2: x + h, y2: 0 })
  return out
}

function fmtNum(n: number): string {
  return n >= 1000 ? `${Math.floor(n / 1000)},${String(n % 1000).padStart(3, '0')}` : String(n)
}

function HatchedRegion({ w, h, clipId }: { w: number, h: number, clipId: string }) {
  return (
    <>
      <Defs>
        <ClipPath id={clipId}>
          <Rect x={0} y={0} width={w} height={h} rx={h / 2} />
        </ClipPath>
      </Defs>
      <G clipPath={`url(#${clipId})`}>
        {hatchLines(w, h).map((l, i) => (
          <Line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke={HATCH} strokeWidth={1.2} />
        ))}
      </G>
    </>
  )
}

export default function JlptProgress({ bands, width }: { bands: JlptBand[], width: number }) {
  const rows = buildRows(bands)
  // one shared phase drives every bar — a single burst of ≤ BAR_STEPS panel
  // refreshes instead of five independent tickers
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const stepMs = Math.max(16, Math.round(COUNT_UP_MS / BAR_STEPS))
    let p = 0
    const interval = setInterval(() => {
      p += 1
      setPhase(p)
      if (p >= BAR_STEPS) clearInterval(interval)
    }, stepMs)
    return () => clearInterval(interval)
  }, [])

  const barW = Math.max(60,
    width - 2 * (ROW_PAD + ROW_BORDER) - CHIP_COL - CHIP_GAP - PCT_COL - PCT_GAP)

  return (
    <View>
      {rows.map(r => {
        const { knownW, heardW } = segmentWidths(
          barW,
          steppedFraction(r.knownFrac, phase),
          steppedFraction(r.heardFrac, phase),
        )
        return (
          <View key={r.level} style={[styles.row, r.current && styles.rowCurrent]}>
            <View style={styles.chipCol}>
              <View style={[styles.chip, r.complete && styles.chipComplete]}>
                <Text style={[styles.chipText, r.complete && styles.chipTextComplete]}>
                  {r.level}
                </Text>
              </View>
              {r.complete && <Text style={styles.goukaku}>合格</Text>}
            </View>

            <View style={styles.barCol}>
              <Svg width={barW} height={BAR_H}>
                <Rect x={0} y={0} width={barW} height={BAR_H} rx={BAR_H / 2} fill={TRACK} />
                {heardW > 0 && (
                  <HatchedRegion w={heardW} h={BAR_H} clipId={`heard-${r.level}`} />
                )}
                {knownW > 0 && (
                  <Rect x={0} y={0} width={knownW} height={BAR_H} rx={BAR_H / 2} fill={INK} />
                )}
              </Svg>
              <Text style={styles.fraction}>
                <Text style={styles.fractionKnown}>{fmtNum(r.known)}</Text>
                {` / ${fmtNum(r.bandSize)} known`}
              </Text>
              {r.current && (
                <Text style={styles.nextLine}>next: {fmtNum(r.toGo)} words to go</Text>
              )}
            </View>

            <View style={styles.pctCol}>
              <Text style={styles.pct}>
                <CountUp value={r.pct} style={styles.pct} />%
              </Text>
            </View>
          </View>
        )
      })}

      <View style={styles.legend}>
        <View style={styles.legendSolid} />
        <Text style={styles.legendText}>known</Text>
        <Svg width={12} height={12} style={styles.legendHatchBox}>
          <Rect x={0} y={0} width={12} height={12} rx={3} fill={TRACK} />
          <HatchedRegion w={12} h={12} clipId="legend-hatch" />
        </Svg>
        <Text style={styles.legendText}>heard, not yet known</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row', alignItems: 'center',
    borderWidth: ROW_BORDER, borderColor: 'transparent', borderRadius: 10,
    paddingHorizontal: ROW_PAD, paddingVertical: 6, marginVertical: 1,
  },
  rowCurrent: { borderColor: INK },
  chipCol: { width: CHIP_COL, marginRight: CHIP_GAP, alignItems: 'center' },
  chip: {
    width: 40, paddingVertical: 3, borderRadius: 8, borderWidth: 1.5,
    borderColor: INK, backgroundColor: '#FFFFFF', alignItems: 'center',
  },
  chipComplete: { backgroundColor: INK },
  chipText: { fontSize: 13, fontWeight: '700', color: INK },
  chipTextComplete: { color: '#FAF6EE' },
  goukaku: { fontSize: 10, color: INK, marginTop: 3, letterSpacing: 1 },
  barCol: { flex: 1 },
  fraction: { fontSize: 12.5, color: MUTED, marginTop: 4 },
  fractionKnown: { fontWeight: '700', color: INK },
  nextLine: { fontSize: 12.5, fontWeight: '600', color: INK, marginTop: 2 },
  pctCol: { width: PCT_COL, marginLeft: PCT_GAP, alignItems: 'flex-end' },
  pct: { fontSize: 16, fontWeight: '700', color: INK },
  legend: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',
    marginTop: 8,
  },
  legendSolid: { width: 12, height: 12, borderRadius: 3, backgroundColor: INK },
  legendHatchBox: { marginLeft: 12 },
  legendText: { fontSize: 11, color: MUTED, marginLeft: 4 },
})

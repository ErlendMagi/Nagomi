// JLPT mass-fill (Progress screen): each level is an AREA whose total mass is
// every word in the band, drawn as a row of round beads. Accumulated
// REPETITIONS pour mass in left→right — a bead holds 100/BEADS % of the
// band's words and shows empty ring / half disc / full disc, so partial reps
// are visible long before a word graduates. A full row = level learned
// (合格 chip).
//
// Progressive unlock: a level is OPEN when the previous band's `complete`
// flag is true (N5 always open). Locked levels are dimmed and small but STAY
// TAPPABLE — every level can be inspected. The CURRENT level (first
// incomplete) renders larger with an ink border and starts auto-expanded;
// tapping any row toggles a detail panel (graduated/total, mass %, words in
// progress).
//
// E-INK discipline (same budget philosophy as CountUp / JlptProgress): on
// mount ONE shared phase drives every row through at most MASS_STEPS discrete
// redraws over ~700ms — never a continuous tween, which smears into ghosting
// on the Bigme's panel. Strict monochrome.

import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Svg, { Circle, Path } from 'react-native-svg'
import { COUNT_UP_MS } from '../CountUp'
import type { JlptLevel, JlptMassBand } from '../../engine/analytics'

const INK = '#1a1a1a'
const MUTED = '#6E6E6E'
const RING = '#8A8A8A'
/** decorative dimming for locked beads/chips (labels stay WCAG-readable) */
const LOCKED_BEAD = '#B5AC9C'
const LOCKED_TEXT = '#767676'

/** beads per level — each holds 100/BEADS % of the band's words */
export const BEADS = 20
/** discrete mount-animation redraws — the e-ink budget */
export const MASS_STEPS = 6
const EPS = 1e-6

const CHIP_COL = 46
const CHIP_GAP = 10
const ROW_PAD = 8
const ROW_BORDER = 2

/** 0 = empty ring · 1 = half disc · 2 = full disc */
export type BeadFill = 0 | 1 | 2

/**
 * Pure: fill level of each bead for a mass fraction, left→right. Bead i is
 * FULL once the mass covers it entirely, HALF while any mass sits inside it
 * (so the very first rep is already visible), EMPTY otherwise. Clamps
 * non-finite / out-of-range input; float-tolerant at the full boundary.
 * Exported for tests (src/components/__tests__/jlptmass.test.ts).
 */
export function beadFills(massFraction: number, beads: number = BEADS): BeadFill[] {
  const m = Number.isFinite(massFraction) ? Math.min(1, Math.max(0, massFraction)) : 0
  const out: BeadFill[] = []
  for (let i = 0; i < beads; i++) {
    const inBead = m * beads - i // mass inside bead i, in bead units
    out.push(inBead >= 1 - EPS ? 2 : inBead > EPS ? 1 : 0)
  }
  return out
}

/**
 * Pure: the fraction shown at discrete animation phase `phase` of `steps` —
 * 0 at phase 0, EXACTLY the (0..1-clamped) target at the final phase,
 * monotone in between (same contract as JlptProgress.steppedFraction).
 */
export function steppedFraction(target: number, phase: number, steps: number = MASS_STEPS): number {
  const t = Number.isFinite(target) ? Math.min(1, Math.max(0, target)) : 0
  const p = Math.min(steps, Math.max(0, Math.floor(phase)))
  if (p >= steps) return t // exact — (t·p)/steps drifts in float
  return (t * p) / steps
}

export interface MassRow extends JlptMassBand {
  /** previous band complete (N5 always open); locked = !open, still tappable */
  open: boolean
  /** the first incomplete level, top to bottom — at most one row */
  current: boolean
  /** floor(massFraction·100) — 100 only when the band is complete */
  pct: number
}

/**
 * Pure: per-level row model. Unlock is per the locked spec: level i is open
 * iff i === 0 or bands[i-1].complete. Exactly one row is `current` (the FIRST
 * incomplete level) unless every band is complete; since earlier bands are
 * then all complete, the current row is always open. The percentage floors —
 * 100% is earned, never rounded to. Exported for tests.
 */
export function buildMassRows(bands: JlptMassBand[]): MassRow[] {
  const rows: MassRow[] = bands.map((b, i) => ({
    ...b,
    open: i === 0 || bands[i - 1].complete,
    current: false,
    pct: b.complete
      ? 100
      : Math.min(99, Math.floor(Math.min(1, Math.max(0, b.massFraction)) * 100)),
  }))
  const current = rows.find(r => !r.complete)
  if (current) current.current = true
  return rows
}

function fmtNum(n: number): string {
  return n >= 1000 ? `${Math.floor(n / 1000)},${String(n % 1000).padStart(3, '0')}` : String(n)
}

/** one bead: ring outline always; half = left half-disc (fills left→right) */
function Bead({ cx, cy, r, fill, ink, ring }: {
  cx: number, cy: number, r: number, fill: BeadFill, ink: string, ring: string,
}) {
  return (
    <>
      <Circle cx={cx} cy={cy} r={r} fill="none" stroke={ring} strokeWidth={1.2} />
      {fill === 2 && <Circle cx={cx} cy={cy} r={r} fill={ink} />}
      {fill === 1 && (
        <Path
          d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 0 ${cx} ${cy + r} Z`}
          fill={ink}
        />
      )}
    </>
  )
}

export default function JlptMass({ bands, width }: { bands: JlptMassBand[], width: number }) {
  const rows = buildMassRows(bands)
  // one shared phase drives every row — a single burst of ≤ MASS_STEPS panel
  // refreshes instead of five independent tickers
  const [phase, setPhase] = useState(0)
  // the current level starts auto-expanded; 'none' = user collapsed it
  const [expanded, setExpanded] = useState<JlptLevel | 'none'>(
    () => rows.find(r => r.current)?.band ?? 'none',
  )

  useEffect(() => {
    const stepMs = Math.max(16, Math.round(COUNT_UP_MS / MASS_STEPS))
    let p = 0
    const interval = setInterval(() => {
      p += 1
      setPhase(p)
      if (p >= MASS_STEPS) clearInterval(interval)
    }, stepMs)
    return () => clearInterval(interval)
  }, [])

  const barW = Math.max(60, width - 2 * (ROW_PAD + ROW_BORDER) - CHIP_COL - CHIP_GAP)
  const step = barW / BEADS

  return (
    <View>
      {rows.map((r, idx) => {
        const isExpanded = expanded === r.band
        // current = larger beads; locked = dimmed AND small, but still tappable
        const base = r.current ? 8 : r.open ? 6.5 : 5
        const radius = Math.max(3, Math.min(base, step / 2 - 1.5))
        const svgH = Math.ceil(radius * 2 + 3)
        const fills = beadFills(steppedFraction(r.massFraction, phase))
        const ink = r.open ? INK : LOCKED_BEAD
        const ring = r.open ? RING : LOCKED_BEAD
        const prev = idx > 0 ? rows[idx - 1].band : null
        return (
          <Pressable
            key={r.band}
            onPress={() => setExpanded(cur => (cur === r.band ? 'none' : r.band))}
            accessibilityRole="button"
            accessibilityLabel={
              `${r.band}: ${r.pct} percent full` + (r.open ? '' : ', locked') + ', tap for details'
            }
            style={({ pressed }) => [
              styles.row,
              r.current && styles.rowCurrent,
              !r.open && styles.rowLocked,
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.headRow}>
              <View style={styles.chipCol}>
                <View style={[
                  styles.chip, r.complete && styles.chipComplete, !r.open && styles.chipLocked,
                ]}>
                  <Text style={[
                    styles.chipText,
                    r.complete && styles.chipTextComplete,
                    !r.open && styles.chipTextLocked,
                  ]}>
                    {r.band}
                  </Text>
                </View>
                {r.complete && <Text style={styles.goukaku}>合格</Text>}
              </View>
              <Svg width={barW} height={svgH}>
                {fills.map((f, i) => (
                  <Bead
                    key={i} cx={step * (i + 0.5)} cy={svgH / 2} r={radius}
                    fill={f} ink={ink} ring={ring}
                  />
                ))}
              </Svg>
            </View>

            {isExpanded && (
              <View style={styles.detail}>
                <Text style={styles.detailStrong}>
                  {r.pct}% full · {fmtNum(r.graduatedWords)} / {fmtNum(r.totalWords)} graduated
                </Text>
                <Text style={styles.detailLine}>
                  {fmtNum(r.inProgressWords)} words in progress
                </Text>
                {!r.open && prev && (
                  <Text style={styles.detailLine}>locked — opens when {prev} is full</Text>
                )}
              </View>
            )}
          </Pressable>
        )
      })}

      <Text style={styles.hint}>
        Each circle holds {Math.round(100 / BEADS)}% of the level's words — every repetition
        adds mass, left to right. A full row is a learned level.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    borderWidth: ROW_BORDER, borderColor: 'transparent', borderRadius: 12,
    paddingHorizontal: ROW_PAD, paddingVertical: 8, marginVertical: 1,
  },
  rowCurrent: { borderColor: INK },
  rowLocked: { paddingVertical: 5 },
  headRow: { flexDirection: 'row', alignItems: 'center' },
  chipCol: { width: CHIP_COL, marginRight: CHIP_GAP, alignItems: 'center' },
  chip: {
    width: 40, paddingVertical: 3, borderRadius: 8, borderWidth: 1.5,
    borderColor: INK, backgroundColor: '#FFFFFF', alignItems: 'center',
  },
  chipComplete: { backgroundColor: INK },
  chipLocked: { borderColor: LOCKED_BEAD },
  chipText: { fontSize: 13, fontWeight: '700', color: INK },
  chipTextComplete: { color: '#FAF6EE' },
  chipTextLocked: { color: LOCKED_TEXT },
  goukaku: { fontSize: 10, color: INK, marginTop: 3, letterSpacing: 1 },
  detail: { marginTop: 6, paddingLeft: CHIP_COL + CHIP_GAP },
  detailStrong: { fontSize: 13, fontWeight: '700', color: INK, lineHeight: 19 },
  detailLine: { fontSize: 12.5, color: MUTED, lineHeight: 18, marginTop: 2 },
  hint: { fontSize: 12.5, color: '#888', lineHeight: 18, marginTop: 10 },
  pressed: { opacity: 0.6 },
})

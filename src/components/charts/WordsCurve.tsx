// Words-KNOWN curve, today-anchored (user 2026-07-16: the old chart's axis
// started rangeDays in the past — "it currently says apr 18 … It needs to
// show accurately projected amounts of words graduated if one follows one's
// daily goal plan, and one line from the median goal-minute length … I want
// to see progression from the left side of the graph, even if the words will
// arrive in the future").
//
// Domain: a short HISTORY slice, then TODAY (vertical hairline), then the
// projection horizon. Three lines, strict monochrome — identity by PATTERN:
//   SOLID 2.5px — graduated words so far (actual history)
//   DOTTED 1.5px — projection at the SAVED plan's pace
//   DASH-DOT 1.5px — projection at the user's recent (30-day median) pace
// The heard line is gone from this chart (it flattered and cluttered;
// graduated is the locked words-known metric — heard lives in the meter).
// Plan-target markers: diamond + dashed hairline; beyond-horizon targets
// collapse into one off-chart arrow. Static SVG — e-ink, no animation.

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Circle, Line, Path, Text as SvgText } from 'react-native-svg'
import type { CurvePoint } from '../../engine/analytics'
import { dayKeyDiff } from '../../core/day'

export interface CurveMarker {
  /** absolute day key 'YYYY-MM-DD' — same axis as CurvePoint.day */
  day: string
  /** KNOWN-words value the marker sits at */
  words: number
  /** short label, e.g. 'Jul 2027' */
  label: string
  /** true = filled diamond (hit / on plan); false/undefined = hollow */
  hit?: boolean
}

/** projection point — day key + projected KNOWN count */
export interface ProjPoint {
  day: string
  graduated: number
}

const INK = '#1a1a1a'
const GRID = '#DDDDDD'
const MUTED = '#555'

const GRAD_W = 2.5
const PROJ_W = 1.5
const DOT_DASH = '1 4'      // round caps → dots (saved plan)
const DASHDOT = '7 3 1 3'   // dash-dot (recent pace)

const PAD_L = 40
const PAD_R = 12
const PAD_T = 10
const PAD_B = 20

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function fmtDay(key: string): string {
  const [, m, d] = key.split('-').map(Number)
  return `${MONTHS[m - 1]} ${d}`
}

function fmtNum(n: number): string {
  return n >= 1000 ? `${Math.floor(n / 1000)},${String(n % 1000).padStart(3, '0')}` : String(n)
}

/** round up to a clean 1/2/5 × 10^k axis maximum */
export function niceCeil(v: number): number {
  if (v <= 5) return 5
  const mag = Math.pow(10, Math.floor(Math.log10(v)))
  for (const s of [1, 2, 5, 10]) {
    if (s * mag >= v) return s * mag
  }
  return 10 * mag
}

/** legend swatch that shows the real line pattern, not a color chip */
function LineSample({ dash, strokeWidth }: { dash?: string, strokeWidth: number }) {
  return (
    <Svg width={22} height={6} style={styles.sample}>
      <Line x1={1} y1={3} x2={21} y2={3} stroke={INK} strokeWidth={strokeWidth}
        strokeDasharray={dash} strokeLinecap="round" />
    </Svg>
  )
}

export default function WordsCurve({
  history, width, height = 190, planProjection, paceProjection, planLabel, paceLabel, markers,
}: {
  /** graduated history, oldest → TODAY (last point = today, current count) */
  history: CurvePoint[]
  width: number
  height?: number
  /** projection at the saved plan's pace (day keys AFTER today) */
  planProjection?: ProjPoint[]
  /** projection at the recent-median pace (same day sequence as plan) */
  paceProjection?: ProjPoint[]
  planLabel?: string
  paceLabel?: string
  markers?: CurveMarker[]
}) {
  const last = history.length > 0 ? history[history.length - 1] : null
  const plan = planProjection ?? []
  const pace = paceProjection ?? []
  if (!last || (last.heard === 0 && plan.length === 0 && pace.length === 0)) {
    return (
      <View style={[styles.empty, { width, height }]}>
        <Text style={styles.emptyText}>No words heard yet — press play.</Text>
      </View>
    )
  }

  // x-domain: history indices 0..n-1 (today = n-1), then the projection day
  // sequence (plan and pace share it; use whichever exists for the axis)
  const projDays = (plan.length >= pace.length ? plan : pace).map(p => p.day)
  const n = history.length
  const total = n + projDays.length

  // date → fractional plot index (marker placement); beyond the horizon →
  // off-chart annotation
  const domain = [
    ...history.map((p, i) => ({ day: p.day, idx: i })),
    ...projDays.map((day, i) => ({ day, idx: n + i })),
  ]
  const indexForDay = (day: string): number | 'beyond' => {
    if (dayKeyDiff(domain[0].day, day) <= 0) return 0
    for (let i = 1; i < domain.length; i++) {
      const span = dayKeyDiff(domain[i - 1].day, domain[i].day)
      const off = dayKeyDiff(domain[i - 1].day, day)
      if (off <= span) {
        return span <= 0
          ? domain[i].idx
          : domain[i - 1].idx + (off / span) * (domain[i].idx - domain[i - 1].idx)
      }
    }
    return 'beyond'
  }
  const placed = (markers ?? []).map(m => ({ m, at: indexForDay(m.day) }))
  const inRange = placed.filter((p): p is { m: CurveMarker, at: number } => p.at !== 'beyond')
  const beyond = placed.filter(p => p.at === 'beyond').map(p => p.m)

  const plotW = width - PAD_L - PAD_R
  const plotH = height - PAD_T - PAD_B
  const planEnd = plan.length > 0 ? plan[plan.length - 1].graduated : 0
  const paceEnd = pace.length > 0 ? pace[pace.length - 1].graduated : 0
  const yMax = niceCeil(Math.max(
    last.graduated, planEnd, paceEnd, ...inRange.map(p => p.m.words), 5))
  const x = (i: number) => PAD_L + (total > 1 ? (i * plotW) / (total - 1) : plotW / 2)
  const y = (v: number) => PAD_T + plotH * (1 - v / yMax)
  const baseline = PAD_T + plotH
  const todayX = x(n - 1)

  const historyPath = history
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${y(p.graduated).toFixed(1)}`)
    .join(' ')
  // projections CONNECT to today's actual count — no visual jump at the seam
  const projPath = (pts: ProjPoint[]) =>
    [`M${todayX.toFixed(1)} ${y(last.graduated).toFixed(1)}`,
      ...pts.map((p, i) => `L${x(n + i).toFixed(1)} ${y(p.graduated).toFixed(1)}`)].join(' ')

  // right-edge end labels — nudge apart when the projections converge
  const planEndY = plan.length > 0 ? y(planEnd) : null
  let paceEndY = pace.length > 0 ? y(paceEnd) : null
  if (planEndY !== null && paceEndY !== null && Math.abs(planEndY - paceEndY) < 14) {
    paceEndY = planEndY + 14
  }

  const ticks = [0, yMax / 2, yMax]
  const rightDay = projDays.length > 0 ? projDays[projDays.length - 1] : last.day

  return (
    <View>
      <Svg width={width} height={height}>
        {ticks.map(t => (
          <React.Fragment key={t}>
            <Line x1={PAD_L} y1={y(t)} x2={width - PAD_R} y2={y(t)} stroke={GRID} strokeWidth={1} />
            <SvgText x={PAD_L - 6} y={y(t) + 3.5} fontSize={10} fill={MUTED} textAnchor="end">
              {fmtNum(t)}
            </SvgText>
          </React.Fragment>
        ))}

        {/* TODAY seam: the hairline separating what happened from what's ahead */}
        <Line x1={todayX} y1={PAD_T} x2={todayX} y2={baseline} stroke={MUTED}
          strokeWidth={1} strokeDasharray="2 3" />
        <SvgText x={todayX} y={PAD_T - 1} fontSize={9.5} fill={MUTED} textAnchor="middle">
          today
        </SvgText>

        {n > 1 && (
          <Path d={historyPath} fill="none" stroke={INK} strokeWidth={GRAD_W}
            strokeLinejoin="round" strokeLinecap="round" />
        )}
        {plan.length > 0 && (
          <Path d={projPath(plan)} fill="none" stroke={INK} strokeWidth={PROJ_W}
            strokeDasharray={DOT_DASH} strokeLinejoin="round" strokeLinecap="round" />
        )}
        {pace.length > 0 && (
          <Path d={projPath(pace)} fill="none" stroke={INK} strokeWidth={PROJ_W}
            strokeDasharray={DASHDOT} strokeLinejoin="round" strokeLinecap="round" />
        )}

        {/* plan targets: diamond + dashed hairline; filled = hit/on plan */}
        {inRange.map(({ m, at }) => {
          const mx = x(at)
          const my = y(m.words)
          const anchor = mx > width - 56 ? 'end' : mx < PAD_L + 28 ? 'start' : 'middle'
          return (
            <React.Fragment key={`mark-${m.day}`}>
              <Line x1={mx} y1={baseline} x2={mx} y2={my + 7} stroke={MUTED}
                strokeWidth={1} strokeDasharray="2 3" />
              <Path
                d={`M${mx.toFixed(1)} ${(my - 5).toFixed(1)} L${(mx + 5).toFixed(1)} ${my.toFixed(1)} L${mx.toFixed(1)} ${(my + 5).toFixed(1)} L${(mx - 5).toFixed(1)} ${my.toFixed(1)} Z`}
                fill={m.hit ? INK : '#FFFFFF'} stroke={INK} strokeWidth={1.5} />
              <SvgText x={mx} y={Math.max(9, my - 9)} fontSize={10} fontWeight="700"
                fill={INK} textAnchor={anchor}>
                {m.label}
              </SvgText>
            </React.Fragment>
          )
        })}
        {beyond.length > 0 && (
          <>
            <SvgText x={width - PAD_R - 12} y={PAD_T + 8} fontSize={10} fill={MUTED} textAnchor="end">
              {beyond.length === 1
                ? `${beyond[0].label} target beyond range`
                : `${beyond.length} targets beyond range`}
            </SvgText>
            <Path
              d={`M${width - PAD_R - 9} ${PAD_T} L${width - PAD_R - 1} ${PAD_T + 4.5} L${width - PAD_R - 9} ${PAD_T + 9} Z`}
              fill={MUTED} />
          </>
        )}

        {/* today's actual count — black dot with a white ring at the seam */}
        <Circle cx={todayX} cy={y(last.graduated)} r={4} fill={INK} stroke="#FFFFFF" strokeWidth={2} />
        <SvgText x={todayX - 8} y={y(last.graduated) - 7} fontSize={11} fontWeight="700"
          fill={INK} textAnchor="end">
          {fmtNum(last.graduated)}
        </SvgText>
        {/* projection end values at the right edge */}
        {planEndY !== null && (
          <SvgText x={width - PAD_R} y={planEndY - 5} fontSize={11} fontWeight="700"
            fill={INK} textAnchor="end">
            {fmtNum(planEnd)}
          </SvgText>
        )}
        {paceEndY !== null && paceEnd !== planEnd && (
          <SvgText x={width - PAD_R} y={paceEndY + 11} fontSize={11} fill={MUTED} textAnchor="end">
            {fmtNum(paceEnd)}
          </SvgText>
        )}

        <SvgText x={PAD_L} y={height - 5} fontSize={10} fill={MUTED} textAnchor="start">
          {fmtDay(history[0].day)}
        </SvgText>
        <SvgText x={width - PAD_R} y={height - 5} fontSize={10} fill={MUTED} textAnchor="end">
          {fmtDay(rightDay)}
        </SvgText>
      </Svg>

      <View style={styles.legend}>
        <LineSample strokeWidth={GRAD_W} />
        <Text style={styles.legendText}>known so far</Text>
        {plan.length > 0 && (
          <>
            <View style={styles.legendGap} />
            <LineSample dash={DOT_DASH} strokeWidth={PROJ_W} />
            <Text style={styles.legendText}>{planLabel ?? 'your plan'}</Text>
          </>
        )}
        {pace.length > 0 && (
          <>
            <View style={styles.legendGap} />
            <LineSample dash={DASHDOT} strokeWidth={PROJ_W} />
            <Text style={styles.legendText}>{paceLabel ?? 'recent pace'}</Text>
          </>
        )}
        {placed.length > 0 && (
          <>
            <View style={styles.legendGap} />
            <Svg width={12} height={12} style={styles.sample}>
              <Path d="M6 1.5 L10.5 6 L6 10.5 L1.5 6 Z" fill={INK} />
            </Svg>
            <Text style={styles.legendText}>plan target</Text>
          </>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  empty: { alignItems: 'center', justifyContent: 'center' },
  emptyText: { fontSize: 13, color: '#555' },
  legend: { flexDirection: 'row', alignItems: 'center', marginTop: 6, flexWrap: 'wrap' },
  legendGap: { width: 16 },
  sample: { marginRight: 6 },
  legendText: { fontSize: 12, color: '#555' },
})

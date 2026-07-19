// Daily-effort celebration chart (user 2026-07-16: "a graph used to only
// celebrate the daily success of the user's effort levels … adjusted for the
// times when the user has dropped their effort level … Not just empty
// achievements, but a feeling of actually making progress").
//
// Last 14 days as ink bars, today rightmost. Design language: CELEBRATE,
// never shame — ★ crowns goal-met days, ◐ marks half-way days, a zero-minute
// day is a small faint dot on the baseline (reads "rest day", never an empty
// hole), and a hairline at the user's OWN 14-day median gives the "your
// usual" reference the adjustment is measured against. Strict monochrome,
// discrete ≤6-step mount animation (JlptMass pattern) — e-ink safe.

import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Circle, Line, Rect, Text as SvgText } from 'react-native-svg'
import { COUNT_UP_MS } from '../CountUp'

export interface EffortDay {
  dayKey: string
  minutes: number
  goalMet: boolean
}

const INK = '#1a1a1a'
const MUTED = '#6E6E6E'
const TRACK = '#EFE9DC'
const STEPS = 6

const PAD_L = 8
const PAD_R = 8
const PAD_T = 18   // room for the ★/◐ marks
const PAD_B = 16

/** discrete mount fraction — same contract as JlptMass.steppedFraction */
export function steppedFraction(target: number, phase: number, steps: number = STEPS): number {
  if (phase >= steps) return target
  return target * (phase / steps)
}

/** median of the day minutes (0-filled days included — honest baseline) */
export function medianMinutes(days: ReadonlyArray<{ minutes: number }>): number {
  if (days.length === 0) return 0
  const sorted = days.map(d => d.minutes).sort((a, b) => a - b)
  return sorted[Math.floor(sorted.length / 2)]
}

/** bar mark: ★ goal met, ◐ at least half the goal, null otherwise */
export function markFor(minutes: number, goalMet: boolean, goalMinutes: number): '★' | '◐' | null {
  if (goalMet || (goalMinutes > 0 && minutes >= goalMinutes)) return '★'
  if (goalMinutes > 0 && minutes >= goalMinutes / 2) return '◐'
  return null
}

/**
 * The card's one-line caption — the best TRUE positive, never a negative
 * comparison, rest days never mentioned (user: celebrate effort, adjusted
 * for drops). `days` ordered oldest → today (today last).
 */
export function effortCaption(
  days: ReadonlyArray<{ minutes: number, goalMet: boolean }>, median: number,
): string {
  if (days.length === 0) return 'press play — today is day one'
  // current goal-met streak counted backwards from today
  let goalStreak = 0
  for (let i = days.length - 1; i >= 0 && days[i].goalMet; i--) goalStreak++
  if (goalStreak >= 2) return `${goalStreak}-day goal streak going 🔥`
  const last7 = days.slice(-7)
  const above = last7.filter(d => median > 0 && d.minutes > median).length
  if (above >= 3) return `${above} of the last 7 days above your usual`
  const today = days[days.length - 1]
  if (median > 0 && today.minutes > median) return 'today is already past your usual pace'
  const weekTotal = last7.reduce((s, d) => s + d.minutes, 0)
  if (weekTotal > 0) return `every minute counts — ${weekTotal} min this week`
  return 'press play — today is day one'
}

export default function EffortBars({ days, goalMinutes, width, height = 120 }: {
  /** oldest → today (today last), zero-filled — exactly 14 entries expected */
  days: EffortDay[]
  goalMinutes: number
  width: number
  height?: number
}) {
  // discrete mount: one shared phase, ≤ STEPS panel redraws, never a tween
  const [phase, setPhase] = useState(0)
  useEffect(() => {
    const stepMs = Math.max(16, Math.round(COUNT_UP_MS / STEPS))
    const interval = setInterval(() => {
      setPhase(p => {
        if (p + 1 >= STEPS) clearInterval(interval)
        return p + 1
      })
    }, stepMs)
    return () => clearInterval(interval)
  }, [])

  const median = medianMinutes(days)
  const goal = Math.max(goalMinutes, 1)
  const plotW = width - PAD_L - PAD_R
  const plotH = height - PAD_T - PAD_B
  const baseline = PAD_T + plotH
  const slot = days.length > 0 ? plotW / days.length : plotW
  const barW = Math.max(6, Math.min(18, slot * 0.55))

  return (
    <View>
      <Svg width={width} height={height}>
        {/* the user's OWN baseline — the "adjusted to your level" reference */}
        {median > 0 && (
          <Line
            x1={PAD_L} x2={width - PAD_R}
            y1={baseline - plotH * Math.min(1, median / goal)}
            y2={baseline - plotH * Math.min(1, median / goal)}
            stroke={MUTED} strokeWidth={1} strokeDasharray="3 3"
          />
        )}
        <Line x1={PAD_L} x2={width - PAD_R} y1={baseline} y2={baseline} stroke={TRACK} strokeWidth={2} />
        {days.map((d, i) => {
          const cx = PAD_L + slot * i + slot / 2
          const frac = steppedFraction(Math.min(1, d.minutes / goal), phase)
          const h = plotH * frac
          const mark = markFor(d.minutes, d.goalMet, goalMinutes)
          const isToday = i === days.length - 1
          if (d.minutes === 0) {
            // rest day: a quiet dot, never an accusing empty hole
            return <Circle key={d.dayKey} cx={cx} cy={baseline - 2.5} r={2.5} fill={TRACK} stroke={MUTED} strokeWidth={0.8} />
          }
          return (
            <React.Fragment key={d.dayKey}>
              <Rect
                x={cx - barW / 2} y={baseline - h} width={barW} height={Math.max(2, h)}
                rx={2}
                fill={isToday ? INK : d.goalMet ? INK : '#FFFFFF'}
                stroke={INK} strokeWidth={d.goalMet || isToday ? 0 : 1.5}
              />
              {mark && phase >= STEPS && (
                <SvgText x={cx} y={baseline - h - 5} fontSize={11} fill={INK} textAnchor="middle">
                  {mark}
                </SvgText>
              )}
            </React.Fragment>
          )
        })}
        <SvgText x={PAD_L} y={height - 3} fontSize={9.5} fill={MUTED} textAnchor="start">2 weeks ago</SvgText>
        <SvgText x={width - PAD_R} y={height - 3} fontSize={9.5} fill={MUTED} textAnchor="end">today</SvgText>
      </Svg>
      <Text allowFontScaling={false} style={styles.caption}>{effortCaption(days, median)}</Text>
      <Text allowFontScaling={false} style={styles.legend}>
        ★ goal reached · ◐ halfway · ┄ your usual pace
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  caption: { fontSize: 13.5, fontWeight: '700', color: '#1a1a1a', marginTop: 8 },
  legend: { fontSize: 11.5, color: '#6E6E6E', marginTop: 3 },
})

// WordsPulse (Play-screen UX overhaul 2026-07-14): the session's ONE running
// number — words gone through this session (reviews actually written to the
// SRS store: deduped, learnable-filtered — real units, never XP). Replaces the
// old "N sentences · N conversations" line + ReviewPulse row.
//
// Three e-ink-safe moments, all discrete (plain timers, never a continuous
// Animated loop — that smears into ghosting on the Bigme's panel):
//  1. the big number STEPS up to the new total (≤ STEP_UP_MAX_STEPS redraws)
//  2. an ink "+N" chip pulses beside it (reuses ReviewPulse's locked timeline)
//  3. at every real 100-review milestone, a brief ink badge shows the kanji
//     numeral (百, 二百, … 千) for BADGE_MS, then vanishes — two states total.
// Layout slots are reserved (opacity 0 / fixed heights), so nothing reflows
// mid-pulse and the panel never repaints the whole stats block.

import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { pulseTimeline, type PulsePhase } from './ReviewPulse'
import { DISPLAY_FONT } from '../theme/palette'

/** the number finishes stepping inside this window */
export const STEP_UP_MS = 400
/** discrete redraws per step-up — the e-ink budget */
export const STEP_UP_MAX_STEPS = 4
/** how long a milestone badge stays up (one appear + one disappear redraw) */
export const BADGE_MS = 1600
/** a milestone every N real reviews */
export const MILESTONE_EVERY = 100

/**
 * Pure: the ascending values the counter shows stepping from `from` to `to`,
 * ending EXACTLY at `to`. At most `maxSteps` entries, strictly increasing.
 * A non-increase (reset, no-op) collapses to a single jump [to].
 * Exported for tests (src/components/__tests__/wordspulse.test.ts).
 */
export function stepUpSequence(from: number, to: number, maxSteps: number = STEP_UP_MAX_STEPS): number[] {
  const f = Number.isFinite(from) ? Math.max(0, Math.floor(from)) : 0
  const t = Number.isFinite(to) ? Math.max(0, Math.floor(to)) : 0
  if (t <= f) return [t]
  const steps = Math.min(Math.max(1, Math.floor(maxSteps)), t - f)
  const seq: number[] = []
  for (let i = 1; i <= steps; i++) seq.push(f + Math.round(((t - f) * i) / steps))
  return seq
}

/**
 * Pure: the highest multiple of `every` newly crossed when the total moves
 * prev → next, or null when none was. Only forward movement counts — a reset
 * to 0 never "re-crosses" anything.
 */
export function crossedMilestone(prev: number, next: number, every: number = MILESTONE_EVERY): number | null {
  if (!Number.isFinite(prev) || !Number.isFinite(next) || !Number.isFinite(every) || every <= 0) return null
  if (next <= prev) return null
  const m = Math.floor(next / every) * every
  return m > prev && m > 0 ? m : null
}

const KANJI_DIGITS = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九']

/**
 * Pure: kanji numeral for a positive multiple of 100 below 10,000 —
 * 100→百, 200→二百, 1000→千, 1100→千百, 2500→二千五百. Anything else
 * falls back to the plain digits (still real units, never wrong).
 */
export function milestoneKanji(n: number): string {
  if (!Number.isFinite(n) || n < 100 || n % 100 !== 0 || n >= 10000) return String(n)
  const thousands = Math.floor(n / 1000)
  const hundreds = Math.floor((n % 1000) / 100)
  let out = ''
  if (thousands > 0) out += (thousands > 1 ? KANJI_DIGITS[thousands] : '') + '千'
  if (hundreds > 0) out += (hundreds > 1 ? KANJI_DIGITS[hundreds] : '') + '百'
  return out
}

export default function WordsPulse({ total, last, trigger }: {
  /** cumulative words reviewed this session (sentenceCompleted's honest count) */
  total: number
  /** reviews registered by the most recently completed sentence */
  last: number
  /** changes whenever a sentence completes — re-pulses even at equal counts */
  trigger: number
}) {
  const [shown, setShown] = useState(total)
  const [pulse, setPulse] = useState<PulsePhase>('hidden')
  const [badge, setBadge] = useState<number | null>(null)
  const shownRef = useRef(total)
  const prevTotalRef = useRef(total)
  const prevTriggerRef = useRef(trigger)
  // badge timers live outside the per-sentence effect: a fast next sentence
  // must not cancel the badge's disappearance (it would linger forever)
  const badgeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (trigger === prevTriggerRef.current) {
      // no sentence completed — an out-of-band total change is the persistence
      // seed arriving (app restart mid-day: start() reads day_stats.reviews).
      // Sync silently: no step-up, no "+N" pulse, and NO milestone re-fire
      // (a badge earned before the crash must not replay on reopen).
      if (total !== prevTotalRef.current) {
        prevTotalRef.current = total
        shownRef.current = total
        setShown(total)
      }
      return
    }
    prevTriggerRef.current = trigger
    const prevTotal = prevTotalRef.current
    prevTotalRef.current = total

    // 1. number steps up discretely to the new total
    const seq = stepUpSequence(shownRef.current, total)
    const stepMs = Math.max(16, Math.round(STEP_UP_MS / seq.length))
    setShown(seq[0])
    shownRef.current = total // land on the target even if timers are cut short
    const stepTimers = seq.slice(1).map((v, i) => setTimeout(() => setShown(v), stepMs * (i + 1)))

    // 2. "+N" ink chip — same locked discrete timeline as the old ReviewPulse
    let pulseTimers: Array<ReturnType<typeof setTimeout>> = []
    if (last > 0) {
      const [first, ...rest] = pulseTimeline()
      setPulse(first[1]) // ink lands synchronously — "appears instantly"
      pulseTimers = rest.map(([at, p]) => setTimeout(() => setPulse(p), at))
    }

    // 3. milestone badge at every real 100 reviews
    const m = crossedMilestone(prevTotal, total)
    if (m !== null) {
      if (badgeTimerRef.current) clearTimeout(badgeTimerRef.current)
      setBadge(m)
      badgeTimerRef.current = setTimeout(() => {
        setBadge(null)
        badgeTimerRef.current = null
      }, BADGE_MS)
    }

    return () => {
      for (const t of stepTimers) clearTimeout(t)
      for (const t of pulseTimers) clearTimeout(t)
      setShown(shownRef.current) // never strand a stale mid-step value
    }
  }, [trigger, total, last])

  // clear the badge timer on unmount only
  useEffect(() => () => {
    if (badgeTimerRef.current) clearTimeout(badgeTimerRef.current)
  }, [])

  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        {/* chip keeps its layout slot when hidden (STATIC opacity 0, never an
            animated fade) so the row doesn't reflow on every pulse */}
        <View
          style={[
            styles.chip,
            pulse === 'ink' && styles.chipInk,
            pulse === 'hidden' && styles.chipHidden,
          ]}
        >
          <Text allowFontScaling={false} style={[styles.chipText, pulse === 'ink' && styles.chipTextInk]}>
            +{last}
          </Text>
        </View>
        <Text allowFontScaling={false} style={styles.total}>{shown.toLocaleString()}</Text>
        {/* TRUNCATION FIX (user report 2026-07-14, "1,234 words this "): the
            old single-line " words this session" overflowed the landscape
            paneRight (flex:2 ≈ 40% of the panel) — none of the row's children
            have flexShrink, so Yoga lets the row overflow its parent and
            Android clips child views at parent bounds, eating the label's
            tail. Fix is structural: the row keeps only " words" (can never
            overflow next to a ≤5-digit number + chip), and "this session"
            moves to its own centered caption line below. Trailing NBSP =
            paint-width headroom (see clipSafe in PlayScreen.tsx) — this label
            never had it. Screenshot verification pending (device offline). */}
        <Text allowFontScaling={false} style={styles.label}>{' words '}</Text>
      </View>
      <Text allowFontScaling={false} style={styles.sub}>{'this session '}</Text>
      {/* fixed-height badge slot: appearing/disappearing never shifts layout */}
      <View style={styles.badgeSlot}>
        {badge !== null && (
          <View style={styles.badge}>
            <Text allowFontScaling={false} style={styles.badgeText}>{milestoneKanji(badge)}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center' },
  row: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center' },
  // border stays 1px in every phase so the chip never changes size mid-pulse
  chip: {
    borderWidth: 1, borderColor: '#C9BFA8', borderRadius: 10,
    backgroundColor: '#FFFFFF', paddingHorizontal: 8, paddingVertical: 2,
    marginRight: 10, alignSelf: 'center',
  },
  chipInk: { backgroundColor: '#1a1a1a', borderColor: '#1a1a1a' },
  chipHidden: { opacity: 0 },
  chipText: { fontSize: 12, fontWeight: '700', color: '#1a1a1a' },
  // cream on ink: ~14.9:1 — same pairing as the play button
  chipTextInk: { color: '#FAF6EE' },
  total: { fontFamily: DISPLAY_FONT, fontSize: 26, fontWeight: '700', color: '#1a1a1a' },
  // #2E2E2E clears 4.5:1 on the tinted scene backdrop (see PlayScreen notes)
  label: { fontSize: 13, color: '#2E2E2E' },
  // "this session" caption — its own line so the counter row stays short
  // enough to never overflow the landscape paneRight (see truncation-fix
  // comment in the JSX above)
  sub: { fontSize: 12, color: '#2E2E2E', marginTop: 2, textAlign: 'center' },
  badgeSlot: { height: 34, marginTop: 4, justifyContent: 'center' },
  badge: {
    backgroundColor: '#1a1a1a', borderRadius: 8,
    paddingHorizontal: 12, paddingVertical: 4,
  },
  badgeText: { color: '#FAF6EE', fontSize: 16, fontWeight: '700' },
})

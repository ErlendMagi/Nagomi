// ReviewPulse (M4 stats juice): visible, e-ink-safe confirmation that
// listening is banking real reviews. When a sentence completes and registers
// N word-reviews, an ink chip shows "+N" INSTANTLY, then steps through at
// most three discrete visual states over ~500ms (ink → outline → gone) on
// plain timers — never a continuous Animated loop, which smears into
// ghosting on the Bigme's e-ink panel. Beside it the session total counts up
// through the shared CountUp component (same discrete-step budget).
// REAL units only: a "review" is a word actually written to the SRS store
// (deduped, learnable-filtered — the count sentenceCompleted returns).

import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CountUp from './CountUp'

/** whole pulse duration — every phase change lands inside this window */
export const PULSE_MS = 500

export type PulsePhase = 'hidden' | 'ink' | 'outline'

/**
 * Pure: the discrete phase timeline one pulse walks, as [atMs, phase] pairs.
 * Exactly three visual states — ink (inverted chip) at 0ms, outline at the
 * midpoint, hidden at totalMs — strictly increasing times, never more than
 * three entries (the e-ink redraw budget). Degenerate/negative durations
 * collapse to the default. Exported for tests
 * (src/components/__tests__/reviewpulse.test.ts).
 */
export function pulseTimeline(totalMs: number = PULSE_MS): Array<[number, PulsePhase]> {
  const ms = Number.isFinite(totalMs) && totalMs > 0 ? Math.round(totalMs) : PULSE_MS
  return [
    [0, 'ink'],
    [Math.max(1, Math.round(ms / 2)), 'outline'],
    [Math.max(2, ms), 'hidden'],
  ]
}

export default function ReviewPulse({ total, last, trigger }: {
  /** cumulative reviews this session (words written to the SRS store) */
  total: number
  /** reviews registered by the most recently completed sentence */
  last: number
  /** changes whenever a sentence completes — re-pulses even at equal counts */
  trigger: number
}) {
  const [phase, setPhase] = useState<PulsePhase>('hidden')
  const prevTrigger = useRef(trigger)

  useEffect(() => {
    if (trigger === prevTrigger.current) return // mount or unrelated re-render
    prevTrigger.current = trigger
    if (last <= 0) return // sentence wrote nothing (all ids non-learnable)
    const [first, ...rest] = pulseTimeline()
    setPhase(first[1]) // state 1 lands synchronously — "appears instantly"
    const timers = rest.map(([at, p]) => setTimeout(() => setPhase(p), at))
    return () => { for (const t of timers) clearTimeout(t) }
  }, [trigger, last])

  return (
    <View style={styles.row}>
      {/* chip keeps its layout slot when hidden (opacity 0 = nothing drawn —
          a STATIC 0, never an animated fade, so the e-ink panel can't smear;
          reserving the slot stops the stats row reflowing on every pulse) */}
      <View
        style={[
          styles.chip,
          phase === 'ink' && styles.chipInk,
          phase === 'hidden' && styles.chipHidden,
        ]}
      >
        <Text style={[styles.chipText, phase === 'ink' && styles.chipTextInk]}>
          +{last}
        </Text>
      </View>
      <CountUp value={total} style={styles.total} />
      <Text style={styles.label}> reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 6 },
  // border stays 1px in every phase so the chip never changes size mid-pulse
  chip: {
    borderWidth: 1, borderColor: '#C9BFA8', borderRadius: 10,
    backgroundColor: '#FFFFFF', paddingHorizontal: 8, paddingVertical: 2,
    marginRight: 8,
  },
  chipInk: { backgroundColor: '#1a1a1a', borderColor: '#1a1a1a' },
  chipHidden: { opacity: 0 },
  chipText: { fontSize: 12, fontWeight: '700', color: '#1a1a1a' },
  // cream on ink: ~14.9:1 — same pairing as the play button
  chipTextInk: { color: '#FAF6EE' },
  total: { fontSize: 13, fontWeight: '700', color: '#1a1a1a' },
  // #2E2E2E matches the session stats line (4.86:1 on the tinted backdrop)
  label: { fontSize: 13, color: '#2E2E2E' },
})

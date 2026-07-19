// Discrete-stop slider (no native dependency): tap or drag anywhere on the
// track and the knob snaps to the nearest stop. Discrete jumps + explicit
// color states keep it crisp on e-ink — same redraw philosophy as
// WordsPulse: no continuous animation, one re-render per step crossing.
//
// REWRITTEN 2026-07-16 after user report: "when I try to slide it, it slides
// back at 2000 words all the time (in fact all of the sliders in the app act
// like this, it keeps going to the very left)". Root cause: the old code fed
// e.nativeEvent.locationX into the value math on every move, but locationX
// is relative to the view the touch STARTED on — and the natural gesture
// starts on the 32px knob, not the full-width touch area. A finger centered
// on the knob reports locationX ≈ 16 forever, so on the 1000–20000 pack
// scale the value quantized to snapToStep(16/width) = exactly 2000 words,
// no matter where the finger actually was. Fixes, in order of importance:
//   1. Geometry comes from the GESTURE, not the touch target: the grant
//      anchors a start fraction (all children are pointerEvents="none", so
//      grant locationX is always relative to the full-width touch area and
//      tap-to-position stays exact), and every move applies gestureState.dx
//      — a page-coordinate delta that cannot be fooled by which child view
//      sits under the finger.
//   2. The drag is LOCAL: while the finger is down the thumb renders from
//      internal state, so a parent re-render mid-drag (SettingsScreenV2
//      re-renders on every pack-download progress tick) cannot yank the
//      thumb back to the stale controlled `value`. onChange fires once, on
//      release (commit semantics); external `value` changes are honoured
//      only when the finger is up.
//   3. onPanResponderTerminationRequest is denied so an enclosing ScrollView
//      cannot steal a horizontal drag halfway through — responder theft
//      also read as "it slides back" on-device.
//   4. The PanResponder is created once (by design), so it reads live props
//      through a ref. The old code closed over the FIRST render's onChange
//      and min/max/step — it worked only because setState identities happen
//      to be stable.
// The pure math below is exported and unit-tested in
// __tests__/steppedslider.test.ts (includes the 2000-words regression).

import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, PanResponder } from 'react-native'

export const KNOB_SIZE = 32

// ---- pure math (exported for tests; no RN imports touched) ----

/** Clamp to [0,1]; NaN collapses to 0 (never NaN into layout), ±Infinity
 *  clamps to the nearest end like any other out-of-range number. */
export function clamp01(x: number): number {
  if (Number.isNaN(x)) return 0
  return Math.min(1, Math.max(0, x))
}

/** Track fraction → nearest step value, always inside [min, max].
 *  Degenerate scales (step<=0, max<=min, NaN) collapse to min — a slider
 *  must never emit a value outside the range it was given. */
export function snapToStep(fraction: number, min: number, max: number, step: number): number {
  if (Number.isNaN(fraction) || !(max > min) || !(step > 0)) return min
  const raw = min + clamp01(fraction) * (max - min)
  const snapped = Math.round((raw - min) / step) * step + min
  return Math.min(max, Math.max(min, snapped))
}

/** Value → track fraction (inverse of snapToStep's interpolation), clamped. */
export function fractionForValue(value: number, min: number, max: number): number {
  if (!(max > min)) return 0
  return clamp01((value - min) / (max - min))
}

/** Where the thumb is after a drag: the fraction anchored at grant plus the
 *  page-coordinate finger delta. Width not measured yet → hold the anchor
 *  (never divide by 0/stale width — that was the "jumps to the far left"
 *  failure shape). */
export function dragFraction(startFraction: number, dx: number, width: number): number {
  if (!(width > 0) || !Number.isFinite(dx)) return clamp01(startFraction)
  return clamp01(startFraction + dx / width)
}

/** Knob left-edge for a fraction: centered on the track position, but kept
 *  fully inside the touch area so the endpoints don't clip off-screen. */
export function knobLeft(fraction: number, width: number, knob: number = KNOB_SIZE): number {
  if (!(width > 0)) return 0
  return Math.min(Math.max(0, width - knob), Math.max(0, clamp01(fraction) * width - knob / 2))
}

// ---- component ----

export default function SteppedSlider({
  min, max, step, value, onChange, format,
}: {
  min: number
  max: number
  step: number
  value: number
  onChange: (v: number) => void
  format?: (v: number) => string
}) {
  const [width, setWidth] = useState(0)
  const widthRef = useRef(0)

  // Live props for the once-created PanResponder (header note 4).
  const propsRef = useRef({ min, max, step, value, onChange })
  propsRef.current = { min, max, step, value, onChange }

  // drag ≠ null exactly while the finger owns the thumb, PLUS the short
  // release→parent-echo window: commit() fires onChange but keeps rendering
  // the dragged value until the new `value` prop arrives, so the knob never
  // flashes back to the old position for one frame.
  const [drag, setDrag] = useState<number | null>(null)
  const dragRef = useRef<number | null>(null)
  const draggingRef = useRef(false)
  const startFractionRef = useRef(0)

  useEffect(() => {
    // External value arrived while the finger is up → controlled prop is the
    // source of truth again. While dragging, the finger always wins (a
    // mid-drag progress re-render must not move the thumb — 2026-07-16 bug).
    if (!draggingRef.current && dragRef.current !== null) {
      dragRef.current = null
      setDrag(null)
    }
  }, [value])

  const setDragValue = (fraction: number) => {
    const p = propsRef.current
    const next = snapToStep(fraction, p.min, p.max, p.step)
    // Re-render only when the snapped value crosses a step (e-ink budget:
    // a drag across the whole track costs ~#stops redraws, not ~#move events).
    if (next !== dragRef.current) {
      dragRef.current = next
      setDrag(next)
    }
  }

  const commit = () => {
    draggingRef.current = false
    const v = dragRef.current
    if (v === null) return
    if (v !== propsRef.current.value) {
      propsRef.current.onChange(v) // the effect above clears `drag` when the prop echoes back
    } else {
      dragRef.current = null // no net change — nothing will echo, release the local override now
      setDrag(null)
    }
  }

  const pan = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderTerminationRequest: () => false, // header note 3: don't let a ScrollView steal the drag
    onPanResponderGrant: e => {
      draggingRef.current = true
      const w = widthRef.current
      const p = propsRef.current
      // Children are pointerEvents="none", so this locationX is guaranteed
      // relative to the full-width touch area (tap-to-position). If layout
      // hasn't landed yet, anchor on the current value instead of 0 — a
      // stale/zero width must never teleport the thumb left (2026-07-16).
      startFractionRef.current = w > 0
        ? clamp01(e.nativeEvent.locationX / w)
        : fractionForValue(p.value, p.min, p.max)
      setDragValue(startFractionRef.current)
    },
    onPanResponderMove: (_e, g) => {
      // gestureState.dx is a pure page-coordinate delta — immune to the
      // locationX-relative-to-the-knob bug that caused the snap-back.
      setDragValue(dragFraction(startFractionRef.current, g.dx, widthRef.current))
    },
    onPanResponderRelease: () => commit(),
    onPanResponderTerminate: () => commit(), // gesture stolen by the OS: keep the user's last position
  })).current

  const shown = drag !== null ? drag : value
  const fraction = fractionForValue(shown, min, max)
  const stops = step > 0 && max > min ? Math.round((max - min) / step) : 0

  return (
    <View>
      <View
        style={styles.touchArea}
        onLayout={e => { widthRef.current = e.nativeEvent.layout.width; setWidth(e.nativeEvent.layout.width) }}
        {...pan.panHandlers}
      >
        {/* pointerEvents="none" on everything inside the touch area is
            load-bearing: it forces every touch to target the touch area
            itself, keeping grant locationX in track coordinates (fix 1). */}
        <View style={styles.track} pointerEvents="none">
          <View style={[styles.fill, { width: `${fraction * 100}%` }]} />
          {width > 0 && stops > 0 && Array.from({ length: stops + 1 }, (_, i) => (
            <View key={i} style={[styles.tick, { left: `${(i / stops) * 100}%` }]} />
          ))}
        </View>
        <View style={[styles.knob, { left: knobLeft(fraction, width) }]} pointerEvents="none" />
      </View>
      {format && <Text style={styles.valueLabel}>{format(shown)}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  touchArea: { height: 48, justifyContent: 'center' },
  track: {
    height: 10, borderRadius: 5, backgroundColor: '#EFE9DC',
    borderWidth: 1, borderColor: '#C9C0AA', overflow: 'visible',
  },
  fill: { height: '100%', borderRadius: 5, backgroundColor: '#1a1a1a' },
  tick: {
    position: 'absolute', top: 2, width: 1, height: 4, backgroundColor: '#B8B0A0',
  },
  knob: {
    position: 'absolute', width: KNOB_SIZE, height: KNOB_SIZE, borderRadius: KNOB_SIZE / 2,
    backgroundColor: '#1a1a1a', borderWidth: 3, borderColor: '#FAF6EE',
    elevation: 2,
  },
  valueLabel: {
    textAlign: 'center', fontSize: 15, fontWeight: '700', color: '#1a1a1a', marginTop: 2,
  },
})

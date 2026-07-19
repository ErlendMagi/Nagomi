// CountUp (M4 session-summary juice): a number that steps up to its target
// once, when it first mounts. E-INK constraint: at most MAX_STEPS discrete
// text updates over ~700ms, driven by plain timers — never a continuous
// 60fps animation, which smears into ghosting on the Bigme's panel.

import React, { useEffect, useState } from 'react'
import { Text, type StyleProp, type TextStyle } from 'react-native'

/** total count-up time; every step lands inside this window */
export const COUNT_UP_MS = 700
/** discrete text updates per count-up — the e-ink redraw budget */
export const MAX_STEPS = 8

/**
 * Pure: the ascending sequence of values a count-up shows, ending EXACTLY at
 * the target. At most `maxSteps` entries, strictly increasing — small targets
 * simply count 1..target, zero/negative/NaN collapse to [0]. Exported for
 * tests (src/components/__tests__/countup.test.ts).
 */
export function countUpSequence(target: number, maxSteps: number = MAX_STEPS): number[] {
  const t = Number.isFinite(target) ? Math.floor(target) : 0
  if (t <= 0) return [0]
  const steps = Math.min(maxSteps, t)
  const seq: number[] = []
  for (let i = 1; i <= steps; i++) seq.push(Math.round((t * i) / steps))
  return seq
}

export default function CountUp({ value, delay = 0, style }: {
  value: number
  /** ms to wait before the first step (summary rows stagger the celebration) */
  delay?: number
  style?: StyleProp<TextStyle>
}) {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    const seq = countUpSequence(value)
    const stepMs = Math.max(16, Math.round(COUNT_UP_MS / seq.length))
    let interval: ReturnType<typeof setInterval> | null = null
    const starter = setTimeout(() => {
      let i = 0
      setShown(seq[i])
      i += 1
      if (i >= seq.length) return
      interval = setInterval(() => {
        setShown(seq[i])
        i += 1
        if (i >= seq.length && interval) { clearInterval(interval); interval = null }
      }, stepMs)
    }, delay)
    return () => {
      clearTimeout(starter)
      if (interval) clearInterval(interval)
    }
  }, [value, delay])

  return <Text style={style}>{shown.toLocaleString()}</Text>
}

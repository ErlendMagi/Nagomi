// CharacterActor — a LIVE character on the conversation stage (user
// 2026-07-18: "they should look completely real, and there should always be
// sorts of idle movement even when they are not talking … entry … and exit
// animations … VERY VERY VERY smooth").
//
// The performance layers:
//  - BREATHING: a slow 3.2s sine bob (±1.5px) that never stops — the "alive"
//    baseline. Native-driver Animated → 60fps off the JS thread.
//  - BLINKING: irregular 2.8–6s intervals, 120ms closed — timed state, two
//    renders per blink.
//  - TALKING: while this actor's clip plays, the mouth alternates open/closed
//    every ~150ms with jitter — classic puppet-mouth cartoon speech.
//  - GAZE: the speaker looks toward the LISTENER (or the user when alone on
//    stage); the listener looks back at the speaker. Eye contact drives the
//    scene (the user called it the most important thing).
//  - ENTRY/EXIT: per-conversation variety — hop-in, slide-in, or rise-in;
//    matching exits — chosen deterministically from the conv id so a replay
//    performs the same blocking.
//  - REDUCED MOTION (Settings → Advanced): loops stop, blinks/talk frames
//    stay (discrete two-state redraws are e-ink-safe; continuous motion is
//    not — it smears on the Bigme's panel).

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Animated, Easing, Image } from 'react-native'
import CharacterAvatar, { type Expression } from './CharacterAvatar'
import { artFrame, artFacing, hasArt } from '../theme/artFrames'
import { exitStyleFor } from '../engine/stagePresence'

export type EntryStyle = 'hop' | 'slide' | 'rise'

/** deterministic per-conversation blocking: same conv → same entrance */
export function entryStyleFor(convId: string, side: 'left' | 'right'): EntryStyle {
  let h = side === 'left' ? 3 : 7
  for (let i = 0; i < convId.length; i++) h = (h * 31 + convId.charCodeAt(i)) % 997
  return (['hop', 'slide', 'rise'] as const)[h % 3]
}

export default function CharacterActor({
  id, size = 76, side, talking, expression, gazeX, gazeY, convId, smooth, entering, exiting = false,
}: {
  id: string
  size?: number
  side: 'left' | 'right' | 'middle'
  talking: boolean
  expression: Expression
  gazeX: number
  gazeY: number
  convId: string
  /** continuous motion allowed (off = e-ink discrete mode) */
  smooth: boolean
  /** false suppresses the entrance (recovery mode skips intros — no theater
   *  fanfare when the user is grinding a backlog) */
  entering: boolean
  /** true plays the exit animation (varied per conversation) before unmount */
  exiting?: boolean
}) {
  const breath = useRef(new Animated.Value(0)).current
  const enter = useRef(new Animated.Value(entering ? 0 : 1)).current
  const exitV = useRef(new Animated.Value(0)).current
  const [blink, setBlink] = useState(false)
  const [mouthOpen, setMouthOpen] = useState(false)
  const style = useMemo(() => entryStyleFor(convId, side === 'middle' ? 'left' : side), [convId, side])
  const exitStyle = useMemo(() => exitStyleFor(convId, id), [convId, id])
  const illustrated = hasArt(id)

  // breathing — the never-off aliveness loop (skipped in reduced motion; on
  // illustrated art it is DISABLED entirely — the user called sub-pixel motion
  // on the big figures "jiggling", and frame-swap acting carries the life)
  useEffect(() => {
    if (!smooth || illustrated) return
    const loop = Animated.loop(Animated.sequence([
      Animated.timing(breath, { toValue: 1, duration: 1600, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
      Animated.timing(breath, { toValue: 0, duration: 1600, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
    ]))
    loop.start()
    return () => loop.stop()
  }, [smooth, breath])

  // blinking — irregular, human
  useEffect(() => {
    let alive = true
    let t: ReturnType<typeof setTimeout>
    const next = () => {
      t = setTimeout(() => {
        if (!alive) return
        setBlink(true)
        setTimeout(() => { if (alive) setBlink(false) }, 120)
        next()
      }, 2800 + Math.random() * 3200)
    }
    next()
    return () => { alive = false; clearTimeout(t) }
  }, [])

  // puppet mouth while talking
  useEffect(() => {
    if (!talking) { setMouthOpen(false); return }
    let alive = true
    let t: ReturnType<typeof setTimeout>
    const flap = (open: boolean) => {
      t = setTimeout(() => {
        if (!alive) return
        setMouthOpen(open)
        flap(!open)
      }, 110 + Math.random() * 90)
    }
    flap(true)
    return () => { alive = false; clearTimeout(t); setMouthOpen(false) }
  }, [talking])

  // entrance per conversation — illustrated figures use a clean ease-out
  // (springs overshoot and read as glitchy at this size)
  useEffect(() => {
    if (!entering) { enter.setValue(1); return }
    enter.setValue(0)
    if (illustrated) {
      Animated.timing(enter, { toValue: 1, duration: 280, easing: Easing.out(Easing.quad), useNativeDriver: true }).start()
    } else {
      Animated.spring(enter, {
        toValue: 1, useNativeDriver: true,
        bounciness: style === 'hop' ? 14 : 6, speed: style === 'slide' ? 14 : 10,
      }).start()
    }
  }, [convId, entering, enter, style, illustrated])

  // varied exit (user spec: characters leave when they've been silent) —
  // dash bolts, walk strolls, hop springs up, sink drops away
  useEffect(() => {
    if (!exiting) { exitV.setValue(0); return }
    Animated.timing(exitV, {
      toValue: 1,
      duration: exitStyle === 'dash' ? 200 : 340,
      easing: Easing.in(Easing.quad),
      useNativeDriver: true,
    }).start()
  }, [exiting, exitV, exitStyle])

  const breathY = breath.interpolate({ inputRange: [0, 1], outputRange: [0, -1.6] })
  const dir = side === 'left' ? -1 : side === 'right' ? 1 : 0
  const enterX = enter.interpolate({
    inputRange: [0, 1],
    outputRange: [style === 'slide' ? dir * size * 1.2 : 0, 0],
  })
  const enterY = enter.interpolate({
    inputRange: [0, 1],
    outputRange: [style === 'rise' ? size * 0.6 : style === 'hop' ? -size * 0.5 : 0, 0],
  })
  const exitX = exitV.interpolate({
    inputRange: [0, 1],
    outputRange: [0, exitStyle === 'walk' || exitStyle === 'slide' ? dir * size * 1.3 : exitStyle === 'dash' ? dir * size * 2 : 0],
  })
  const exitY = exitV.interpolate({
    inputRange: [0, 1],
    outputRange: [0, exitStyle === 'hop' ? -size * 0.8 : exitStyle === 'sink' ? size * 0.8 : 0],
  })
  const exitFade = exitV.interpolate({ inputRange: [0, 1], outputRange: [1, 0] })
  // NO tilt/scale pops on illustrated figures (user: "avoid jiggling, no
  // glitching movement") — the acting lives in the frame swaps
  const talkTilt = talking && smooth && !illustrated ? (side === 'left' ? '-2deg' : '2deg') : '0deg'

  return (
    <Animated.View
      style={{
        opacity: Animated.multiply(enter, exitFade),
        transform: [
          { translateX: Animated.add(enterX, exitX) },
          { translateY: Animated.add(Animated.add(enterY, exitY), smooth && !illustrated ? breathY : new Animated.Value(0)) },
          { rotate: talkTilt },
          { scale: talking && !illustrated ? 1.06 : 1 },
        ],
      }}
      pointerEvents="none"
    >
      {(() => {
        // illustrated frame when bundled; SVG avatar otherwise. Blink on baked
        // art = a brief neutral-closed flash (no eyelid state in the frames).
        const frame = blink
          ? artFrame(id, 'neutral', false) ?? artFrame(id, expression, mouthOpen)
          : artFrame(id, expression, mouthOpen)
        if (frame != null) {
          // face screen center (user 2026-07-19): mirror when the art's baked
          // facing points away from the middle
          const facing = artFacing(id)
          const wants = side === 'left' ? 'right' : side === 'right' ? 'left' : facing
          const mirror = facing !== null && facing !== wants
          return (
            <Image
              source={frame}
              style={{
                width: size * 1.05,
                height: size * 1.7,
                transform: mirror ? [{ scaleX: -1 }] : undefined,
              }}
              resizeMode="contain"
            />
          )
        }
        return (
          <CharacterAvatar
            id={id} size={size} expression={expression}
            gazeX={gazeX} gazeY={gazeY} mouthOpen={mouthOpen} blink={blink}
          />
        )
      })()}
    </Animated.View>
  )
}

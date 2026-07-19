// SceneLife — live ambient elements over the illustrated backdrops ("beautiful
// and dopamine-maxing", user 2026-07-20): café steam, izakaya lantern flicker,
// shrine petals, street silhouettes… Specs come from src/theme/sceneLife.ts
// (pure, tested); this component only performs them.
//
// Every animation is a native-driver transform/opacity loop (60fps off the JS
// thread), at most 3 elements per scene, subtle opacities — life, not noise.
// Entirely disabled when smoothMotion is off: continuous motion smears on the
// Bigme e-ink panel.

import React, { useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet, useWindowDimensions } from 'react-native'
import { lifeLayersFor, type LifeLayer } from '../theme/sceneLife'

function LifeElement({ layer, w, h }: { layer: LifeLayer, w: number, h: number }) {
  const t = useRef(new Animated.Value(0)).current

  useEffect(() => {
    t.setValue(0)
    const loop = Animated.loop(
      Animated.timing(t, {
        toValue: 1,
        duration: layer.period,
        easing: layer.kind === 'flicker' || layer.kind === 'shift'
          ? Easing.inOut(Easing.sin)
          : Easing.linear,
        useNativeDriver: true,
      }),
    )
    loop.start()
    return () => loop.stop()
  }, [t, layer])

  const x = layer.x * w
  const y = layer.y * h
  const s = layer.size

  switch (layer.kind) {
    case 'steam': {
      const rise = t.interpolate({ inputRange: [0, 1], outputRange: [0, -s * 1.8] })
      const sway = t.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, s * 0.18, 0] })
      const fade = t.interpolate({ inputRange: [0, 0.25, 0.75, 1], outputRange: [0, layer.opacity, layer.opacity * 0.5, 0] })
      return (
        <Animated.View style={[styles.el, {
          left: x - s / 2, top: y - s / 2, width: s, height: s * 1.4, borderRadius: s,
          backgroundColor: layer.color, opacity: fade,
          transform: [{ translateY: rise }, { translateX: sway }],
        }]} />
      )
    }
    case 'flicker': {
      const glow = t.interpolate({ inputRange: [0, 0.5, 1], outputRange: [layer.opacity * 0.35, layer.opacity, layer.opacity * 0.35] })
      return (
        <Animated.View style={[styles.el, {
          left: x - s / 2, top: y - s / 2, width: s, height: s, borderRadius: s / 2,
          backgroundColor: layer.color, opacity: glow,
        }]} />
      )
    }
    case 'drift': {
      const fall = t.interpolate({ inputRange: [0, 1], outputRange: [-s * 4, s * 10] })
      const slide = t.interpolate({ inputRange: [0, 1], outputRange: [0, s * 6] })
      const fade = t.interpolate({ inputRange: [0, 0.1, 0.85, 1], outputRange: [0, layer.opacity, layer.opacity, 0] })
      return (
        <Animated.View style={[styles.el, {
          left: x, top: y, width: s, height: s, borderRadius: s / 2,
          backgroundColor: layer.color, opacity: fade,
          transform: [{ translateY: fall }, { translateX: slide }],
        }]} />
      )
    }
    case 'sweep': {
      // one crossing per period: quick transit, long rest
      const cross = t.interpolate({ inputRange: [0, 0.82, 0.94, 1], outputRange: [-s * 2, -s * 2, w + s, w + s] })
      const bob = t.interpolate({ inputRange: [0.82, 0.88, 0.94], outputRange: [0, -s * 0.6, 0], extrapolate: 'clamp' })
      const vis = t.interpolate({ inputRange: [0, 0.81, 0.83, 0.93, 0.95, 1], outputRange: [0, 0, layer.opacity, layer.opacity, 0, 0] })
      return (
        <Animated.View style={[styles.el, {
          left: 0, top: y, width: s, height: s * 0.45, borderRadius: s * 0.3,
          backgroundColor: layer.color, opacity: vis,
          transform: [{ translateX: cross }, { translateY: bob }],
        }]} />
      )
    }
    case 'shift': {
      const breathe = t.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, layer.opacity, 0] })
      return (
        <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: layer.color, opacity: breathe }]} />
      )
    }
    case 'petals': {
      const fall = t.interpolate({ inputRange: [0, 1], outputRange: [0, h * 0.5] })
      const drift = t.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, s * 4, s * 1.5] })
      const spin = t.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '540deg'] })
      const fade = t.interpolate({ inputRange: [0, 0.08, 0.8, 1], outputRange: [0, layer.opacity, layer.opacity, 0] })
      return (
        <Animated.View style={[styles.el, {
          left: x, top: y, width: s, height: s * 0.8, borderRadius: s * 0.35,
          backgroundColor: layer.color, opacity: fade,
          transform: [{ translateY: fall }, { translateX: drift }, { rotate: spin }],
        }]} />
      )
    }
    case 'glint': {
      const blink = t.interpolate({ inputRange: [0, 0.45, 0.5, 0.55, 1], outputRange: [0, 0, layer.opacity, 0, 0] })
      const scale = t.interpolate({ inputRange: [0.45, 0.5, 0.55], outputRange: [0.4, 1, 0.4], extrapolate: 'clamp' })
      return (
        <Animated.View style={[styles.el, {
          left: x, top: y, width: s, height: s, borderRadius: s / 2,
          backgroundColor: layer.color, opacity: blink, transform: [{ scale }],
        }]} />
      )
    }
    default:
      return null
  }
}

export default function SceneLife({ familyKey, smooth }: { familyKey: string, smooth: boolean }) {
  const { width, height } = useWindowDimensions()
  if (!smooth) return null
  const layers = lifeLayersFor(familyKey)
  return (
    <>
      {layers.map((l, i) => (
        <LifeElement key={`${familyKey}:${i}`} layer={l} w={width} h={height} />
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  el: { position: 'absolute' },
})

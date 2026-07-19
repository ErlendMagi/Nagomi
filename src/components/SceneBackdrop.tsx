// Full-screen scene backdrop behind the play stage. v2 (illustrated-world
// pass, 2026-07-20): when a bundled illustrated scene exists for the ambient
// family it renders full-bleed (portrait 2:3 art, cover-cropped for any
// screen) under a cream readability wash, topped with the time-of-day tint
// and the SceneLife live layers (café steam, lantern flicker, petals…).
// Families without art keep the original calm gradient + glyph watermark.
// Purely decorative — never intercepts touches; text cards stay readable.

import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg'
import { ambientTheme, dayPhase, phaseTint } from '../theme/ambient'
import { artBackdrop } from '../theme/artFrames'
import SceneLife from './SceneLife'

export default function SceneBackdrop({ ambient, smooth = false }: { ambient: string | null, smooth?: boolean }) {
  // re-read the clock once a minute so a long session drifts into evening/night
  const [hour, setHour] = useState(() => new Date().getHours())
  useEffect(() => {
    const t = setInterval(() => setHour(new Date().getHours()), 60_000)
    return () => clearInterval(t)
  }, [])

  const theme = ambientTheme(ambient)
  const tint = phaseTint(dayPhase(hour))
  const art = artBackdrop(theme.key)

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {art != null ? (
        <>
          <Image source={art} style={StyleSheet.absoluteFill} resizeMode="cover" />
          {/* cream wash keeps ink + cards readable over the illustration */}
          <View style={[StyleSheet.absoluteFill, styles.wash]} />
        </>
      ) : (
        <>
          <Svg width="100%" height="100%">
            <Defs>
              <LinearGradient id="scene" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0" stopColor={theme.top} />
                <Stop offset="1" stopColor={theme.bottom} />
              </LinearGradient>
            </Defs>
            <Rect x="0" y="0" width="100%" height="100%" fill="url(#scene)" />
          </Svg>
          <Text style={styles.glyph} allowFontScaling={false}>{theme.glyph}</Text>
        </>
      )}
      {tint && (
        <View
          style={[StyleSheet.absoluteFill, { backgroundColor: tint.color, opacity: tint.opacity }]}
        />
      )}
      <SceneLife familyKey={theme.key} smooth={smooth} />
    </View>
  )
}

const styles = StyleSheet.create({
  wash: { backgroundColor: '#F6EFDF', opacity: 0.42 },
  glyph: {
    position: 'absolute', right: 4, bottom: 92,
    fontSize: 160, lineHeight: 180, color: '#1a1a1a', opacity: 0.06,
  },
})

// Nagomi v1 entry: Onboarding (first launch) → Play, with Settings/Progress
// overlays. PlayScreen stays MOUNTED under overlays — unmounting would tear
// down the audio session mid-listen.
//
// RESILIENCE (user report 2026-07-15: "the screen became just blank"): a
// module-load or render crash must NEVER present as a silent white screen —
// the root ErrorBoundary below shows what broke and how to recover, and every
// module-level side effect is wrapped so it can only degrade, not kill.

import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'

// Font-scaling opt-out is PER-COMPONENT (`allowFontScaling={false}` on the
// layout-critical Texts in PlayScreen/WordsPulse), NOT a defaultProps
// mutation: RN 0.85's Text is a function component and React 19 resolves
// defaultProps only for classes, so the old module-load mutation here was a
// verified no-op (review 2026-07-16) — it never crashed, and it never worked.
// NEVER mutate RN component internals at module load (locked lesson
// 2026-07-15); the RootErrorBoundary below is the real blank-screen defense.

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'
import PlayScreen from './src/screens/PlayScreen'
import SettingsScreenV2 from './src/screens/SettingsScreenV2'
import ProgressScreenV2 from './src/screens/ProgressScreenV2'
import OnboardingScreen from './src/screens/OnboardingScreen'
import { initServices } from './src/engine/services'
import { ONBOARDED_KV_KEY } from './src/engine/placement'

/** any render crash shows THIS instead of a blank screen */
class RootErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  state = { error: null as Error | null }
  static getDerivedStateFromError(error: Error) { return { error } }
  render() {
    if (!this.state.error) return this.props.children
    return (
      <View style={bstyles.root}>
        <Text style={bstyles.title}>すみません — something broke</Text>
        <Text style={bstyles.body}>
          Fully close the app and reopen it. Your learning progress is safe —
          every review is saved the moment its sentence completes.
        </Text>
        <ScrollView style={bstyles.errBox}>
          <Text style={bstyles.err}>{String(this.state.error?.message ?? this.state.error)}</Text>
        </ScrollView>
      </View>
    )
  }
}

const bstyles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FAF6EE', padding: 24, paddingTop: 80 },
  title: { fontSize: 20, fontWeight: '700', color: '#1a1a1a' },
  body: { fontSize: 15, color: '#2E2E2E', marginTop: 10, lineHeight: 22 },
  errBox: { marginTop: 18, maxHeight: 200, backgroundColor: '#FFFFFF', borderRadius: 8, padding: 12 },
  err: { fontSize: 12, color: '#5A1A1A' },
})

/**
 * Overlay crash shield (user report 2026-07-16: "the progress page is just
 * gone"): Settings/Progress render ABOVE the always-mounted PlayScreen, so a
 * render crash inside either overlay used to bubble all the way to
 * RootErrorBoundary and replace the ENTIRE app — live audio session included —
 * with the root error card. This boundary caps the blast radius at the
 * overlay: calm note, working back button, PlayScreen untouched underneath.
 * Unmounts (close) reset it, so reopening always retries a clean render.
 */
class OverlayBoundary extends React.Component<
  { onClose: () => void, children: React.ReactNode },
  { error: Error | null }
> {
  state = { error: null as Error | null }
  static getDerivedStateFromError(error: Error) { return { error } }
  render() {
    if (!this.state.error) return this.props.children
    return (
      <View style={ostyles.root}>
        <Pressable onPress={this.props.onClose} style={({ pressed }) => [pressed && ostyles.pressed]}>
          <Text style={ostyles.back}>← back</Text>
        </Pressable>
        <Text style={ostyles.title}>This page hit a snag</Text>
        <Text style={ostyles.body}>
          Your learning progress is safe. Go back and try opening it again —
          if it keeps happening, fully close the app and reopen it.
        </Text>
        <ScrollView style={ostyles.errBox}>
          <Text style={ostyles.err}>{String(this.state.error?.message ?? this.state.error)}</Text>
        </ScrollView>
      </View>
    )
  }
}

const ostyles = StyleSheet.create({
  // opaque — this sits over the live PlayScreen
  root: { flex: 1, backgroundColor: '#FAF6EE', paddingHorizontal: 20, paddingTop: 56 },
  back: { fontSize: 16, color: '#1a1a1a', paddingVertical: 4 },
  title: { fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginTop: 16 },
  body: { fontSize: 15, color: '#2E2E2E', marginTop: 10, lineHeight: 22 },
  errBox: { marginTop: 18, maxHeight: 160, backgroundColor: '#FFFFFF', borderRadius: 8, padding: 12 },
  err: { fontSize: 12, color: '#5A1A1A' },
  pressed: { opacity: 0.6 },
})

type Overlay = 'none' | 'settings' | 'progress'

export default function App() {
  const [overlay, setOverlay] = useState<Overlay>('none')
  // null = still checking (first frame); onboarding also re-appears after a
  // progress reset, which clears the kv flag
  const [onboarded, setOnboarded] = useState<boolean | null>(null)
  // display typeface (Duolingo-style pass): fonts load from local assets in
  // one frame; NEVER gate the app on them — text renders on the system font
  // for that first frame and swaps, which beats a blocked boot every time
  useFonts({ Nunito_700Bold, Nunito_800ExtraBold })

  useEffect(() => {
    void initServices()
      .then(svc => setOnboarded(svc.userDb.getKV(ONBOARDED_KV_KEY) === '1'))
      .catch(() => setOnboarded(true)) // never trap the user behind a failed check
  }, [])

  if (onboarded === false) {
    return (
      <RootErrorBoundary>
        <SafeAreaProvider>
          <StatusBar style="dark" />
          <OnboardingScreen onDone={() => setOnboarded(true)} />
        </SafeAreaProvider>
      </RootErrorBoundary>
    )
  }

  return (
    <RootErrorBoundary>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <View style={{ flex: 1 }}>
          <PlayScreen
            onOpenSettings={() => setOverlay('settings')}
            onOpenProgress={() => setOverlay('progress')}
          />
          {overlay !== 'none' && (
            <View style={StyleSheet.absoluteFill}>
              {/* key: settings↔progress must remount the boundary so an
                  error caught on one page can never bleed into the other */}
              <OverlayBoundary key={overlay} onClose={() => setOverlay('none')}>
                {overlay === 'settings'
                  ? <SettingsScreenV2 onClose={() => setOverlay('none')} />
                  : <ProgressScreenV2 onClose={() => setOverlay('none')} />}
              </OverlayBoundary>
            </View>
          )}
        </View>
      </SafeAreaProvider>
    </RootErrorBoundary>
  )
}

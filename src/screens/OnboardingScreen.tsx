// Onboarding (M6): three calm steps before the first play press.
//   1. welcome — what Nagomi is (press play, lock the screen, English fades)
//   2. placement — self-assessment level cards (fast-track only, never "known")
//   3. daily goal — same stepped slider as Settings, then "start listening"
// The integrator shows this screen while kv 'onboarded' !== '1'; the final
// button persists everything through applyPlacement and calls onDone.

import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native'
import { SRS_CONFIG } from '../core/config'
import { initServices } from '../engine/services'
import {
  LEVELS, applyPlacement, type PlacementLevelKey,
} from '../engine/placement'
import SteppedSlider from '../components/SteppedSlider'

const STEPS = 3

function Dots({ step }: { step: number }) {
  return (
    <View style={styles.dots}>
      {Array.from({ length: STEPS }, (_, i) => (
        <View key={i} style={[styles.dot, i === step && styles.dotActive]} />
      ))}
    </View>
  )
}

export default function OnboardingScreen({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0)
  const [level, setLevel] = useState<PlacementLevelKey>('zero')
  const [goal, setGoal] = useState(20)
  const [starting, setStarting] = useState(false)

  useEffect(() => {
    // warm the services (content.db copy on first launch) while the user reads
    void initServices().then(svc => setGoal(svc.settings.goalMinutes)).catch(() => {})
  }, [])

  const start = () => {
    if (starting) return
    setStarting(true)
    void initServices().then(svc => {
      // mutate the shared object so the live recorder sees changes immediately
      // (same convention as SettingsScreenV2); applyPlacement persists it all
      svc.settings.goalMinutes = goal
      applyPlacement(svc.userDb, svc.settings, level)
      onDone()
    }).catch(() => setStarting(false))
  }

  const ft = SRS_CONFIG.graduation.fastTrack

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        {step > 0 ? (
          <Pressable onPress={() => setStep(step - 1)} style={({ pressed }) => [pressed && styles.pressed]}>
            <Text style={styles.back}>← back</Text>
          </Pressable>
        ) : <View style={{ width: 60 }} />}
        <Dots step={step} />
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        {step === 0 && (
          <>
            <Text style={styles.title}>Nagomi</Text>
            <Text style={styles.lead}>Japanese that plays while you live.</Text>
            <View style={styles.card}>
              <Text style={styles.cardText}>
                Press play and lock the screen. Nagomi plays short everyday
                conversations — each line in English, then in Japanese.
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardText}>
                Once you've heard a word enough times over enough days, its
                English quietly stops playing. Over months, whole conversations
                become Japanese only.
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardText}>
                No quizzes, no drills. Just minutes listened and words learned.
              </Text>
            </View>
          </>
        )}

        {step === 1 && (
          <>
            <Text style={styles.title}>Where are you starting from?</Text>
            <Text style={styles.lead}>Pick what feels honest — you can't overshoot.</Text>
            {LEVELS.map(l => {
              const selected = l.key === level
              return (
                <Pressable
                  key={l.key}
                  onPress={() => setLevel(l.key)}
                  style={({ pressed }) => [
                    styles.levelCard, selected && styles.levelCardSelected,
                    pressed && !selected && styles.pressedBtn, // already-dark card stays dark
                  ]}
                >
                  <Text style={[styles.levelLabel, selected && styles.levelLabelSelected]}>{l.label}</Text>
                  <Text style={[styles.levelBlurb, selected && styles.levelTextSelected]}>{l.blurb}</Text>
                  <View style={styles.exampleRow}>
                    {l.examples.map(ex => (
                      <View key={ex.rank} style={styles.example}>
                        <Text style={[styles.exampleReading, selected && styles.levelTextSelected]}>{ex.reading}</Text>
                        <Text style={[styles.exampleJp, selected && styles.levelLabelSelected]}>{ex.jp}</Text>
                        <Text style={[styles.exampleGloss, selected && styles.levelTextSelected]}>{ex.gloss}</Text>
                      </View>
                    ))}
                  </View>
                </Pressable>
              )
            })}
            <Text style={styles.hint}>
              Nothing is marked as known. Words in your range still have to be
              heard for real — they just lose their English sooner
              ({ft.exposures} exposures over {ft.days} days instead of the usual pace).
            </Text>
          </>
        )}

        {step === 2 && (
          <>
            <Text style={styles.title}>A daily rhythm</Text>
            <Text style={styles.lead}>How many minutes a day feels right?</Text>
            <View style={styles.card}>
              <SteppedSlider
                min={10} max={120} step={5}
                value={goal}
                onChange={setGoal}
                format={v => `${v} minutes a day`}
              />
            </View>
            <Text style={styles.hint}>
              The 10-minute daily minimum is fixed. Goals are floors, never
              ceilings — listening is always unlimited. Change this anytime in
              Settings.
            </Text>
          </>
        )}
      </ScrollView>

      <View style={styles.footer}>
        {step < STEPS - 1 ? (
          <Pressable
            onPress={() => setStep(step + 1)}
            style={({ pressed }) => [styles.nextBtn, pressed && styles.pressedBtn]}
          >
            <Text style={styles.nextText}>continue</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={start}
            disabled={starting}
            style={({ pressed }) => [styles.startBtn, pressed && styles.pressed]}
          >
            <Text style={styles.startText}>{starting ? '…' : 'start listening'}</Text>
          </Pressable>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FAF6EE', paddingTop: 56 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 20, paddingBottom: 12,
  },
  back: { fontSize: 16, color: '#1a1a1a', width: 60 },
  dots: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  dot: {
    width: 8, height: 8, borderRadius: 4,
    backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C9C0AA',
  },
  dotActive: { backgroundColor: '#1a1a1a', borderColor: '#1a1a1a' },
  body: { paddingHorizontal: 20, paddingBottom: 24 },
  title: { fontSize: 26, fontWeight: '700', color: '#1a1a1a', marginTop: 18, marginBottom: 6 },
  lead: { fontSize: 15, color: '#888', lineHeight: 22, marginBottom: 18 },
  card: {
    backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D8CFBA', borderRadius: 12,
    paddingHorizontal: 16, paddingVertical: 14, marginBottom: 10,
  },
  cardText: { fontSize: 15, color: '#1a1a1a', lineHeight: 23 },
  levelCard: {
    backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D8CFBA', borderRadius: 12,
    paddingHorizontal: 16, paddingVertical: 12, marginBottom: 10,
  },
  // explicit color shift, not opacity — crisp on e-ink
  levelCardSelected: { backgroundColor: '#1a1a1a', borderColor: '#1a1a1a' },
  levelLabel: { fontSize: 16, fontWeight: '700', color: '#1a1a1a', marginBottom: 2 },
  levelLabelSelected: { color: '#FAF6EE' },
  levelBlurb: { fontSize: 13, color: '#888', lineHeight: 19, marginBottom: 8 },
  levelTextSelected: { color: '#C9C0AA' },
  exampleRow: { flexDirection: 'row', justifyContent: 'space-between' },
  example: { flex: 1, alignItems: 'center' },
  exampleReading: { fontSize: 11, color: '#888', marginBottom: 1 },
  exampleJp: { fontSize: 19, fontWeight: '600', color: '#1a1a1a' },
  exampleGloss: { fontSize: 11.5, color: '#888', marginTop: 2, textAlign: 'center' },
  hint: { fontSize: 12.5, color: '#888', lineHeight: 18, marginTop: 4 },
  footer: { paddingHorizontal: 20, paddingBottom: 32, paddingTop: 8 },
  nextBtn: {
    borderWidth: 1, borderColor: '#1a1a1a', borderRadius: 12,
    paddingVertical: 14, alignItems: 'center', backgroundColor: '#FFFFFF',
  },
  nextText: { color: '#1a1a1a', fontSize: 16, fontWeight: '600' },
  startBtn: {
    backgroundColor: '#1a1a1a', borderRadius: 12, paddingVertical: 14, alignItems: 'center',
  },
  startText: { color: '#FAF6EE', fontSize: 16, fontWeight: '700' },
  pressed: { opacity: 0.6 },
  pressedBtn: { backgroundColor: '#E5DECF' }, // explicit shift — opacity ghosts on e-ink
})

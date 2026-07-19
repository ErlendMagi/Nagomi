// Settings (M4; UX overhaul 2026-07-16 — user: "the entire settings-page is
// quite poorly solved… look at Duolingo… more natural, better order
// prioritization"). Principles applied:
//  - ORDER BY WHAT USERS ACTUALLY TOUCH: plan first, then listening
//    preferences, then the English-fading rules, then storage; PC address and
//    reset live under a collapsed "Advanced" — first-time users never see
//    plumbing.
//  - PLAIN LANGUAGE, NAMED PRESETS: graduation is three cards (Gentle /
//    Standard / Fast fade) with one honest sentence each; the raw steppers
//    hide behind "Fine-tune". The old side-by-side stepper rows truncated
//    their labels on-device ("Exposures per…") — stacked rows (label OVER
//    control) can never truncate.
//  - The fixed 10-minute daily minimum stays NOT configurable (locked).

import React, { useEffect, useState } from 'react'
import {
  View, Text, Pressable, StyleSheet, ScrollView, TextInput, Switch,
} from 'react-native'
import { SRS_CONFIG } from '../core/config'
import { clampGraduationSettings } from '../core/graduation'
import { initServices, resetServices } from '../engine/services'
import { saveSettings, type SessionSettings } from '../engine/session'
import { ensureReminderPermission } from '../engine/streakReminderNative'
import { rescheduleReminderFromDb } from '../hooks/useSession'
import { packDownloader, PACK_STEPS, packForWords, type PackProgress } from '../engine/packs'
import SteppedSlider from '../components/SteppedSlider'
import GoalPlanner from '../components/GoalPlanner'
import JuicyButton from '../components/JuicyButton'
import { PALETTE } from '../theme/palette'
import { BUILD_STAMP } from '../buildStamp'

function Stepper({ label, value, onChange, min, max, step = 1, unit = '' }: {
  label: string, value: number, onChange: (v: number) => void,
  min: number, max: number, step?: number, unit?: string,
}) {
  // STACKED layout (label full-width above the control): the old side-by-side
  // row truncated long labels on-device (user 2026-07-16: "Exposures per…" /
  // "Days per…" cut off) — a label on its own line can wrap, never truncate
  return (
    <View style={styles.stackRow}>
      <Text allowFontScaling={false} style={styles.stackLabel}>{label}</Text>
      <View style={styles.stepper}>
        <Pressable
          onPress={() => onChange(Math.max(min, value - step))}
          style={({ pressed }) => [styles.stepBtn, pressed && styles.pressed]}
        >
          <Text style={styles.stepBtnText}>−</Text>
        </Pressable>
        <Text style={styles.stepValue}>{value}{unit}</Text>
        <Pressable
          onPress={() => onChange(Math.min(max, value + step))}
          style={({ pressed }) => [styles.stepBtn, pressed && styles.pressed]}
        >
          <Text style={styles.stepBtnText}>+</Text>
        </Pressable>
      </View>
    </View>
  )
}

// Named graduation presets — plain-language cards instead of raw numbers.
// Values sit on the config's evidence-based bounds (20 exposures / 21 days
// are the hard floors from the retention literature cited in core/config.ts).
const FADE_PRESETS: { id: string, label: string, blurb: string, exposures: number, days: number }[] = [
  { id: 'gentle', label: 'Gentle', blurb: 'Keeps English the longest — most comfort.', exposures: 40, days: 40 },
  { id: 'standard', label: 'Standard', blurb: 'The recommended balance.', exposures: 30, days: 30 },
  { id: 'fast', label: 'Fast fade', blurb: 'English leaves as early as the science allows.', exposures: 20, days: 21 },
]

export default function SettingsScreenV2({ onClose }: { onClose: () => void }) {
  const [settings, setSettings] = useState<SessionSettings | null>(null)
  const [lanUrl, setLanUrl] = useState('')
  const [pack, setPack] = useState<PackProgress>(packDownloader.current())
  const [packWords, setPackWords] = useState(10000)
  const [resetArmed, setResetArmed] = useState(false)
  const [resetDone, setResetDone] = useState(false)
  // toggle ON while Android has notifications blocked → tell the user instead
  // of leaving a switch that silently never fires
  const [reminderBlocked, setReminderBlocked] = useState(false)
  // progressive disclosure: raw graduation numbers + PC/reset plumbing are
  // collapsed by default — first-time users see plain language only
  const [fineTune, setFineTune] = useState(false)
  const [advanced, setAdvanced] = useState(false)

  useEffect(() => {
    void initServices().then(svc => {
      setSettings({ ...svc.settings, graduation: { ...svc.settings.graduation } })
      setLanUrl(svc.userDb.getKV('lan_base_url') ?? 'http://10.0.0.32:8765')
    })
    const unsub = packDownloader.subscribe(setPack)
    // refresh the stored count when the screen opens
    setPack(p => ({ ...p, storedCount: packDownloader.storedCount() }))
    return unsub
  }, [])

  const apply = (next: SessionSettings) => {
    next.graduation = clampGraduationSettings(next.graduation)
    setSettings(next)
    void initServices().then(async svc => {
      const reminderTurnedOn = next.streakReminder && !svc.settings.streakReminder
      // mutate the shared object so the live recorder sees changes immediately
      Object.assign(svc.settings, next, { graduation: { ...next.graduation } })
      saveSettings(svc.userDb, svc.settings)
      // reflect the toggle in the OS schedule right away (off cancels; on may
      // first need the Android 13+ notification permission)
      if (reminderTurnedOn) setReminderBlocked(!(await ensureReminderPermission()))
      if (!next.streakReminder) setReminderBlocked(false)
      // the single goal-danger reminder, adaptive time — same planner the
      // session uses (svc.settings already carries `next`)
      rescheduleReminderFromDb(svc)
    })
  }

  const saveLan = () => {
    void initServices().then(svc => svc.userDb.setKV('lan_base_url', lanUrl.trim()))
  }

  if (!settings) {
    return <View style={styles.root}><Text style={styles.loading}>…</Text></View>
  }
  const g = SRS_CONFIG.graduation

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Pressable onPress={onClose} style={({ pressed }) => [pressed && styles.pressed]}>
          <Text style={styles.back}>← back</Text>
        </Pressable>
        <Text style={styles.title}>Settings</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.section}>My plan</Text>
        <View style={styles.packCard}>
          <GoalPlanner
            goalMinutes={settings.goalMinutes}
            onApply={v => apply({ ...settings, goalMinutes: v })}
          />
        </View>
        <Text style={styles.hint}>
          Goals are floors, never ceilings — listening is always unlimited.
        </Text>

        <Text style={styles.section}>Listening</Text>
        <View style={styles.stackRow}>
          <Text allowFontScaling={false} style={styles.stackLabel}>Which language do you hear first?</Text>
          <View style={styles.orderRow}>
            {[
              { en: true, label: 'English → 日本語' },
              { en: false, label: '日本語 → English' },
            ].map(o => (
              <Pressable
                key={String(o.en)}
                onPress={() => apply({ ...settings, enFirst: o.en })}
                style={({ pressed }) => [
                  styles.orderBtn,
                  settings.enFirst === o.en && styles.orderBtnActive,
                  pressed && styles.pressed,
                ]}
              >
                <Text style={[styles.orderText, settings.enFirst === o.en && styles.orderTextActive]}>
                  {o.label}
                </Text>
              </Pressable>
            ))}
          </View>
          <Text style={styles.hintInline}>Applies from the next conversation.</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Progress announcements</Text>
          <Switch
            value={settings.progressCues}
            onValueChange={v => apply({ ...settings, progressCues: v })}
            trackColor={{ false: '#C9C0AA', true: '#1a1a1a' }}
            thumbColor="#FAF6EE"
          />
        </View>
        <Text style={styles.hint}>
          A short chime + Japanese voice marks your progress toward today's goal
          (「半分！」 at halfway, and so on).
        </Text>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Goal reminder</Text>
          <Switch
            value={settings.streakReminder}
            onValueChange={v => apply({ ...settings, streakReminder: v })}
            trackColor={{ false: '#C9C0AA', true: '#1a1a1a' }}
            thumbColor="#FAF6EE"
          />
        </View>
        <Text style={styles.hint}>
          The app's only notification: fires when your daily goal is in danger,
          timed to your own usual listening hour.
        </Text>
        {settings.streakReminder && reminderBlocked ? (
          <Text style={styles.warn}>
            Notifications are blocked for Nagomi in Android settings — the
            reminder can't fire until you allow them there.
          </Text>
        ) : null}

        <Text style={styles.section}>English fades away</Text>
        <Text style={styles.sectionIntro}>
          Every word starts with English help — spoken translation, text and
          furigana. Once you've heard a word often enough, over enough days,
          its English quietly disappears and only Japanese remains.
        </Text>
        <View style={styles.fadeRow}>
          {FADE_PRESETS.map(p => {
            const active = settings.graduation.exposures === p.exposures
              && settings.graduation.days === p.days
            return (
              <Pressable
                key={p.id}
                onPress={() => apply({
                  ...settings,
                  graduation: { ...settings.graduation, exposures: p.exposures, days: p.days },
                })}
                style={({ pressed }) => [styles.fadeCard, active && styles.fadeCardActive, pressed && styles.pressed]}
              >
                <Text allowFontScaling={false} style={[styles.fadeLabel, active && styles.fadeLabelActive]}>
                  {p.label}{p.id === 'standard' ? ' ★' : ''}
                </Text>
                <Text allowFontScaling={false} style={[styles.fadeBlurb, active && styles.fadeBlurbActive]}>
                  {p.blurb}
                </Text>
              </Pressable>
            )
          })}
        </View>
        <Pressable onPress={() => setFineTune(f => !f)} style={({ pressed }) => [pressed && styles.pressed]}>
          <Text style={styles.expander}>
            {fineTune ? '▾ Fine-tune' : '▸ Fine-tune'} — currently {settings.graduation.exposures} hearings
            over {settings.graduation.days}+ days
          </Text>
        </Pressable>
        {fineTune && (
          <>
            <Stepper
              label="How many times you hear a word before its English fades"
              value={settings.graduation.exposures} min={g.minExposures} max={g.maxExposures}
              onChange={v => apply({ ...settings, graduation: { ...settings.graduation, exposures: v } })}
            />
            <Stepper
              label="Spread over at least this many days"
              unit=" days"
              value={settings.graduation.days} min={g.minDays} max={g.maxDays}
              onChange={v => apply({ ...settings, graduation: { ...settings.graduation, days: v } })}
            />
          </>
        )}

        <Text style={styles.section}>Offline library</Text>
        <View style={styles.packCard}>
          <Text style={styles.rowLabel}>
            {pack.storedCount.toLocaleString()} of 11,240 conversations stored on this phone
          </Text>
          {pack.state === 'running' ? (
            <>
              <View style={styles.packBar}>
                <View style={[styles.packFill, { width: `${pack.total ? Math.round(100 * pack.done / pack.total) : 0}%` }]} />
              </View>
              <Text style={styles.hint}>
                {pack.done.toLocaleString()} / {pack.total.toLocaleString()} · {(pack.bytesDone / 1e9).toFixed(2)} GB —
                keep the app open, stay on home Wi-Fi
              </Text>
              <Pressable onPress={() => packDownloader.cancel()} style={({ pressed }) => [styles.presetBtn, pressed && styles.pressedBtn]}>
                <Text style={styles.presetText}>pause download</Text>
              </Pressable>
            </>
          ) : (
            <>
              <SteppedSlider
                min={PACK_STEPS[0].words} max={PACK_STEPS[PACK_STEPS.length - 1].words} step={1000}
                value={packWords}
                onChange={setPackWords}
                format={v => {
                  // label the PACK's true word count (the ≥19,000 stop maps to
                  // the full 19,395-word corpus), not the raw slider notch
                  const p = packForWords(v)
                  return `${p.words.toLocaleString()} words · ${p.convCount.toLocaleString()} conversations · ~${p.gb} GB`
                }}
              />
              <JuicyButton
                label="Download to phone"
                color={PALETTE.accent}
                onPress={() => { void packDownloader.start(packWords) }}
                style={styles.juicyGap}
              />
              {pack.state === 'done' && <Text style={styles.hint}>Pack complete ✓</Text>}
              {pack.state === 'cancelled' && <Text style={styles.hint}>Paused — downloading again resumes where it left off.</Text>}
              {pack.state === 'error' && <Text style={[styles.hint, { color: '#A03030' }]}>{pack.error}</Text>}
              <Text style={styles.hint}>
                Downloads come from your PC on home Wi-Fi and are kept until you uninstall.
                Already-stored conversations are skipped, so pausing costs nothing.
              </Text>
            </>
          )}
        </View>

        <Pressable onPress={() => setAdvanced(a => !a)} style={({ pressed }) => [pressed && styles.pressed]}>
          <Text style={styles.section}>{advanced ? '▾' : '▸'} Advanced</Text>
        </Pressable>
        {advanced && (<>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Milestone effects</Text>
          <Switch
            value={settings.milestoneEffects}
            onValueChange={v => apply({ ...settings, milestoneEffects: v })}
            trackColor={{ false: '#C9C0AA', true: '#1a1a1a' }}
            thumbColor="#FAF6EE"
          />
        </View>
        <Text style={styles.hint}>
          Word-count celebrations (100, 1,000, 5,000 … words) with a burst and,
          on the big ones, a short sparkle sound — always between conversations.
        </Text>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Smooth character motion</Text>
          <Switch
            value={settings.smoothMotion}
            onValueChange={v => apply({ ...settings, smoothMotion: v })}
            trackColor={{ false: '#C9C0AA', true: '#1a1a1a' }}
            thumbColor="#FAF6EE"
          />
        </View>
        <Text style={styles.hint}>
          Breathing, bounces and bubble springs. Turn OFF on e-ink screens —
          continuous motion smears there; the cast still blinks and talks.
        </Text>
        <Text style={styles.subSection}>Home PC (audio server)</Text>
        <TextInput
          value={lanUrl}
          onChangeText={setLanUrl}
          onEndEditing={saveLan}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <Text style={styles.hint}>
          Where new conversations download from on home Wi-Fi. 500 conversations are
          already stored on this phone and work anywhere.
        </Text>

        <Text style={styles.subSection}>Danger zone</Text>
        {resetDone ? (
          <Text style={styles.hint}>
            Progress wiped ✓ — fully close and reopen the app, then press play for a
            clean start. Your settings and downloaded audio were kept.
          </Text>
        ) : (
          <>
            <Pressable
              onPress={() => {
                if (!resetArmed) { setResetArmed(true); setTimeout(() => setResetArmed(false), 5000); return }
                void initServices().then(svc => {
                  svc.userDb.resetAllProgress()
                  resetServices()
                  setResetArmed(false)
                  setResetDone(true)
                })
              }}
              style={({ pressed }) => [styles.dangerBtn, resetArmed && styles.dangerArmed, pressed && styles.pressedBtn]}
            >
              <Text style={[styles.presetText, resetArmed && { color: '#FAF6EE' }]}>
                {resetArmed ? 'Tap again to confirm — wipes ALL learning progress' : 'Reset all progress'}
              </Text>
            </Pressable>
            <Text style={styles.hint}>
              End your session first. Removes learned words, streak, history and level
              frontier — keeps settings and downloaded audio. Use after picker bugs
              fed you far-too-hard conversations.
            </Text>
          </>
        )}
        </>)}

        <Text style={styles.buildStamp}>build {BUILD_STAMP}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FAF6EE', paddingTop: 56 },
  loading: { textAlign: 'center', marginTop: 60, fontSize: 24, color: '#888' },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 20, paddingBottom: 12,
  },
  back: { fontSize: 16, color: '#1a1a1a', width: 60 },
  buildStamp: { textAlign: 'center', fontSize: 12, color: '#6E6E6E', marginTop: 28 },
  title: { fontSize: 18, fontWeight: '700', color: '#1a1a1a' },
  body: { paddingHorizontal: 20, paddingBottom: 40 },
  section: {
    fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, color: '#888',
    marginTop: 26, marginBottom: 8,
  },
  row: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D8CFBA', borderRadius: 12,
    paddingHorizontal: 14, paddingVertical: 10, marginBottom: 8,
  },
  rowLabel: { fontSize: 15, color: '#1a1a1a', flexShrink: 1 },
  stepper: { flexDirection: 'row', alignItems: 'center' },
  stepBtn: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: '#1a1a1a',
    alignItems: 'center', justifyContent: 'center',
  },
  stepBtnText: { color: '#FAF6EE', fontSize: 22, lineHeight: 26 },
  stepValue: { fontSize: 16, fontWeight: '700', color: '#1a1a1a', minWidth: 64, textAlign: 'center' },
  presetBtn: {
    borderWidth: 1, borderColor: '#1a1a1a', borderRadius: 12,
    paddingVertical: 10, alignItems: 'center', marginTop: 2, marginBottom: 8,
  },
  presetText: { color: '#1a1a1a', fontSize: 14, fontWeight: '600' },
  hint: { fontSize: 12.5, color: '#888', lineHeight: 18, marginBottom: 4 },
  hintInline: { fontSize: 12.5, color: '#888', lineHeight: 18, marginTop: 6 },
  warn: { fontSize: 12.5, color: '#1a1a1a', fontWeight: '600', lineHeight: 18, marginBottom: 4 },
  juicyGap: { marginTop: 10 },
  subSection: {
    fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, color: '#888',
    marginTop: 14, marginBottom: 8,
  },
  sectionIntro: { fontSize: 13.5, color: '#2E2E2E', lineHeight: 20, marginBottom: 10 },
  // stacked row: full-width label ABOVE its control — labels wrap, never truncate
  stackRow: {
    backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D8CFBA', borderRadius: 12,
    paddingHorizontal: 14, paddingVertical: 12, marginBottom: 8,
  },
  stackLabel: { fontSize: 14.5, color: '#1a1a1a', lineHeight: 20, marginBottom: 8 },
  // language-order segmented pair
  orderRow: { flexDirection: 'row' },
  orderBtn: {
    flex: 1, borderWidth: 1, borderColor: '#D8CFBA', borderRadius: 10,
    backgroundColor: '#FFFFFF', paddingVertical: 9, alignItems: 'center', marginRight: 8,
  },
  orderBtnActive: { backgroundColor: '#1a1a1a', borderColor: '#1a1a1a' },
  orderText: { fontSize: 13.5, color: '#1a1a1a', fontWeight: '600' },
  orderTextActive: { color: '#FAF6EE' },
  // "English fades away" preset cards — one per column, active = ink
  fadeRow: { flexDirection: 'row', alignItems: 'stretch' },
  fadeCard: {
    flex: 1, borderWidth: 1, borderColor: '#D8CFBA', borderRadius: 12,
    backgroundColor: '#FFFFFF', padding: 10, marginRight: 8,
  },
  fadeCardActive: { backgroundColor: '#1a1a1a', borderColor: '#1a1a1a' },
  fadeLabel: { fontSize: 13.5, fontWeight: '700', color: '#1a1a1a' },
  fadeLabelActive: { color: '#FAF6EE' },
  fadeBlurb: { fontSize: 11.5, color: '#6E6E6E', lineHeight: 15, marginTop: 4 },
  fadeBlurbActive: { color: '#D8CFBA' },
  expander: { fontSize: 13.5, color: '#1a1a1a', fontWeight: '600', marginTop: 10, marginBottom: 6 },
  input: {
    backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D8CFBA', borderRadius: 12,
    paddingHorizontal: 14, paddingVertical: 10, fontSize: 15, color: '#1a1a1a', marginBottom: 6,
  },
  pressed: { opacity: 0.6 },
  pressedBtn: { backgroundColor: '#E5DECF' }, // explicit shift — opacity ghosts on e-ink
  packCard: {
    backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D8CFBA', borderRadius: 12,
    paddingHorizontal: 14, paddingVertical: 12, marginBottom: 8,
  },
  packBar: {
    height: 16, backgroundColor: '#EFE9DC', borderRadius: 8, overflow: 'hidden',
    borderWidth: 1, borderColor: '#D8CFBA', marginTop: 10, marginBottom: 6,
  },
  packFill: { height: '100%', backgroundColor: '#1a1a1a' },
  dangerBtn: {
    borderWidth: 1, borderColor: '#A03030', borderRadius: 12,
    paddingVertical: 12, alignItems: 'center', marginBottom: 6,
  },
  dangerArmed: { backgroundColor: '#A03030' },
})

// Goal planner v2 (Settings → Daily listening): TWO deliberate modes behind
// an explicit SAVE — no more live auto-apply while sliding.
//
//   A "Words by a date": pick a KNOWN-word target + target month; saving
//     freezes one fixed mark (last day of that month, the target count),
//     applies the required pace as settings.goalMinutes, and persists.
//   B "Minutes a day": pick a pace; saving freezes the KNOWN forecast at
//     +6/+9/+12 calendar months FROM THE SAVE DATE (absolute dates that never
//     roll), applies the pace as settings.goalMinutes, and persists.
//
// Plans persist to kv 'goal_plan_v2' (engine/goalPlanner owns the schema);
// the Progress screen reads the same kv to draw markers + the status card.
// Metric everywhere: words KNOWN (graduated) — never merely heard (locked).
// Infeasible mode-A selections disable SAVE and say so, honestly.

import React, { useEffect, useMemo, useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import SteppedSlider from './SteppedSlider'
import JuicyButton from './JuicyButton'
import { PALETTE } from '../theme/palette'
import { initServices } from '../engine/services'
import { graduationTotals } from '../engine/analytics'
import {
  requiredMinutesPerDay, earliestReachable, knownAfter, planCeilingMinutes,
  roundUpToFive, targetMonthInfo, monthLabelForDays, monthsAheadFromKey,
  buildWordsByDatePlan, buildMinutesPerDayPlan, parseGoalPlanV2,
  monthKeyLabel, monthYearLabelForDayKey,
  MIN_PLAN_MINUTES, HARD_CEILING_MINUTES, GOAL_PLAN_V2_KEY,
  type CurrentProgress, type GoalPlanV2, type GoalPlanMode,
} from '../engine/goalPlanner'
import type { PredictionTable } from '../engine/prediction'
import {
  PLAN_PRESETS, CATEGORY_LABELS, presetsFor, nextPresetFor,
  type PlanPreset, type PresetCategory,
} from '../engine/planPresets'

// Offline-simulated forecast curves (real engine) — same asset the Progress
// screen reads. Metro resolves .json as a source module by default.
const PREDICTION_TABLE: PredictionTable = require('../../assets/prediction_table.json')

/** legacy v1 kv — read once to seed the mode-A sliders, never written again */
const LEGACY_PLAN_KEY = 'goal_plan'
const WORDS_MIN = 1000
const WORDS_MAX = 15000
const WORDS_STEP = 500
const MONTHS_MIN = 1
const MONTHS_MAX = 24
const MINUTES_B_MIN = MIN_PLAN_MINUTES
const MINUTES_B_MAX = 120
const MINUTES_B_STEP = 5

function clampWords(v: number): number {
  const snapped = Math.round(v / WORDS_STEP) * WORDS_STEP
  return Math.min(WORDS_MAX, Math.max(WORDS_MIN, snapped))
}

type Verdict =
  | { kind: 'ok', minutes: number, knownByThen: number, monthLabel: string }
  | { kind: 'reached', known: number }
  | { kind: 'infeasible', monthLabel: string, earliestLabel: string | null, ceiling: number }

/** the target is words the user will KNOW (graduated), never merely heard */
function computeVerdict(targetWords: number, monthsAhead: number, current: CurrentProgress): Verdict {
  const month = targetMonthInfo(monthsAhead)
  if (targetWords <= current.graduated) return { kind: 'reached', known: current.graduated }
  const required = requiredMinutesPerDay(PREDICTION_TABLE, targetWords, month.daysFromNow, current)
  if (required === null) {
    const days = earliestReachable(PREDICTION_TABLE, targetWords, current)
    return {
      kind: 'infeasible',
      monthLabel: month.label,
      earliestLabel: days === null ? null : monthLabelForDays(days),
      ceiling: planCeilingMinutes(PREDICTION_TABLE),
    }
  }
  const minutes = Math.max(MIN_PLAN_MINUTES, roundUpToFive(required))
  return {
    kind: 'ok',
    minutes,
    knownByThen: knownAfter(PREDICTION_TABLE, minutes, month.daysFromNow, current),
    monthLabel: month.label,
  }
}

const MODE_LABELS: { mode: GoalPlanMode, label: string }[] = [
  { mode: 'wordsByDate', label: 'A level by a date' },
  { mode: 'minutesPerDay', label: 'Minutes a day' },
]

// Goal-type tabs (user request 2026-07-16: "let the user pick options that
// make sense for them — some want JLPT levels, others 'Conversational'/
// 'Native', others [CEFR-style] levels"). 'custom' keeps the raw word slider.
const GOAL_TABS: { key: PresetCategory | 'custom', label: string }[] = [
  { key: 'jlpt', label: CATEGORY_LABELS.jlpt },
  { key: 'everyday', label: CATEGORY_LABELS.everyday },
  { key: 'cefr', label: CATEGORY_LABELS.cefr },
  { key: 'custom', label: 'Custom' },
]

/** the preset a saved word target corresponds to (display only — the kv
 *  schema stays untouched; exact targetWords match is the identity) */
function presetForTarget(targetWords: number): PlanPreset | undefined {
  return PLAN_PRESETS.find(p => p.targetWords === targetWords)
}

export default function GoalPlanner({ goalMinutes, onApply }: {
  goalMinutes: number
  /** apply the plan's pace as settings.goalMinutes (Settings' apply pattern) */
  onApply: (minutes: number) => void
}) {
  const [ready, setReady] = useState(false)
  const [current, setCurrent] = useState<CurrentProgress>({ heard: 0, graduated: 0 })
  const [plan, setPlan] = useState<GoalPlanV2 | null>(null)
  const [editing, setEditing] = useState(true)
  const [mode, setMode] = useState<GoalPlanMode>('wordsByDate')
  const [targetWords, setTargetWords] = useState(3000)
  const [monthsAhead, setMonthsAhead] = useState(12)
  const [minutesB, setMinutesB] = useState(30)
  // goal-type tab: which mental model the user picks their target in.
  // Seeded to JLPT (the scale every Japanese learner knows); a saved plan
  // whose word count matches a preset re-selects that preset's tab.
  const [goalTab, setGoalTab] = useState<PresetCategory | 'custom'>('jlpt')

  useEffect(() => {
    let cancelled = false
    void initServices().then(svc => {
      if (cancelled) return
      // graduated = words meeting BOTH thresholds — same computation as the
      // Progress screen's meter. MUST use the services-owned driver: the old
      // throwaway openDatabaseSync('user.db') here returned the POOLED native
      // connection, and when GC collected the wrapper, expo-sqlite closed the
      // native handle under the whole app — the 2026-07-16 prepareSync-NPE
      // brick (full mechanics in services.ts at liveUserHandle).
      const totals = graduationTotals(svc.userDriver, svc.settings.graduation)
      setCurrent({ heard: totals.heard, graduated: totals.graduated })

      const saved = parseGoalPlanV2(svc.userDb.getKV(GOAL_PLAN_V2_KEY))
      if (saved) {
        setPlan(saved)
        setEditing(false)
        setMode(saved.mode)
        if (saved.mode === 'wordsByDate') {
          // preset targets can exceed the custom slider's 15k max (CEFR C2) —
          // only clamp when the target really goes to the slider
          const savedPreset = presetForTarget(saved.targetWords)
          setGoalTab(savedPreset ? savedPreset.category : 'custom')
          setTargetWords(savedPreset ? saved.targetWords : clampWords(saved.targetWords))
          const ahead = monthsAheadFromKey(saved.targetMonthKey)
          if (ahead !== null) setMonthsAhead(Math.min(MONTHS_MAX, Math.max(MONTHS_MIN, ahead)))
        } else {
          setMinutesB(Math.min(MINUTES_B_MAX, Math.max(MINUTES_B_MIN,
            Math.round(saved.minutesPerDay / MINUTES_B_STEP) * MINUTES_B_STEP)))
        }
      } else {
        // no v2 plan yet — seed the mode-A sliders from the legacy v1 kv
        const raw = svc.userDb.getKV(LEGACY_PLAN_KEY)
        if (raw) {
          try {
            const legacy = JSON.parse(raw) as Partial<{ targetWords: number, targetMonth: string }>
            if (typeof legacy.targetWords === 'number' && Number.isFinite(legacy.targetWords)) {
              setTargetWords(clampWords(legacy.targetWords))
            }
            if (typeof legacy.targetMonth === 'string') {
              const ahead = monthsAheadFromKey(legacy.targetMonth)
              if (ahead !== null) setMonthsAhead(Math.min(MONTHS_MAX, Math.max(MONTHS_MIN, ahead)))
            }
          } catch { /* malformed legacy plan — keep defaults */ }
        }
      }
      setReady(true)
    })
    return () => { cancelled = true }
  }, [])

  const verdict = useMemo(
    () => computeVerdict(targetWords, monthsAhead, current),
    [targetWords, monthsAhead, current],
  )
  // live preview of what mode B would freeze on save (dates + KNOWN counts)
  const previewB = useMemo(
    () => buildMinutesPerDayPlan(PREDICTION_TABLE, minutesB, current),
    [minutesB, current],
  )

  const persist = (next: GoalPlanV2) => {
    setPlan(next)
    setEditing(false)
    void initServices().then(svc => svc.userDb.setKV(GOAL_PLAN_V2_KEY, JSON.stringify(next)))
  }

  const save = () => {
    if (mode === 'wordsByDate') {
      const built = buildWordsByDatePlan(PREDICTION_TABLE, targetWords, monthsAhead, current)
      if (!built) return // SAVE is disabled when infeasible; belt and braces
      onApply(built.minutesPerDay ?? MIN_PLAN_MINUTES)
      persist(built)
    } else {
      onApply(minutesB)
      persist(buildMinutesPerDayPlan(PREDICTION_TABLE, minutesB, current))
    }
  }

  if (!ready) return <Text style={styles.loading}>…</Text>

  // ---- saved-state summary (default once a plan exists) ----
  if (!editing && plan) {
    return (
      <View>
        {plan.mode === 'wordsByDate' ? (
          <>
            <Text style={styles.savedTitle}>
              {(() => {
                const p = presetForTarget(plan.targetWords)
                const when = monthKeyLabel(plan.targetMonthKey) ?? plan.targetMonthKey
                return p
                  ? `${CATEGORY_LABELS[p.category]} ${p.label} (${p.targetWords.toLocaleString()} words) by ${when}`
                  : `Know ${plan.targetWords.toLocaleString()} words by ${when}`
              })()}
            </Text>
            {plan.minutesPerDay !== undefined && (
              <Text style={styles.savedLine}>Pace: {plan.minutesPerDay} min/day</Text>
            )}
          </>
        ) : (
          <>
            <Text style={styles.savedTitle}>{plan.minutesPerDay} min/day, every day</Text>
            {plan.fixedMarks.map(m => (
              <Text key={m.dateKey} style={styles.savedLine}>
                ≈ {m.words.toLocaleString()} words by {monthYearLabelForDayKey(m.dateKey) ?? m.dateKey}
              </Text>
            ))}
          </>
        )}
        <Text style={styles.current}>
          Daily goal: {goalMinutes} min/day · plan saved {plan.savedAtDayKey}
        </Text>
        <Pressable
          onPress={() => setEditing(true)}
          style={({ pressed }) => [styles.editBtn, pressed && styles.pressedBtn]}
        >
          <Text style={styles.btnText}>edit plan</Text>
        </Pressable>
      </View>
    )
  }

  // ---- editor ----
  const canSave = mode === 'minutesPerDay' || verdict.kind !== 'infeasible'

  return (
    <View>
      <View style={styles.segRow}>
        {MODE_LABELS.map(s => (
          <Pressable
            key={s.mode}
            onPress={() => setMode(s.mode)}
            style={({ pressed }) => [
              styles.segBtn,
              mode === s.mode && styles.segBtnActive,
              pressed && styles.pressedBtn,
            ]}
          >
            <Text style={[styles.segText, mode === s.mode && styles.segTextActive]}>
              {s.label}
            </Text>
          </Pressable>
        ))}
      </View>

      {mode === 'wordsByDate' ? (
        <>
          <Text style={styles.control}>I think of my goal as…</Text>
          <View style={styles.tabRow}>
            {GOAL_TABS.map(t => (
              <Pressable
                key={t.key}
                onPress={() => {
                  setGoalTab(t.key)
                  // switching scales jumps to "your next level" on that scale
                  // — never a level the user already knows
                  if (t.key !== 'custom') {
                    setTargetWords(nextPresetFor(t.key, current.graduated).targetWords)
                  }
                }}
                style={({ pressed }) => [
                  styles.tabBtn, goalTab === t.key && styles.tabBtnActive, pressed && styles.pressedBtn,
                ]}
              >
                <Text style={[styles.tabText, goalTab === t.key && styles.tabTextActive]}>{t.label}</Text>
              </Pressable>
            ))}
          </View>

          {goalTab === 'custom' ? (
            <>
              <Text style={styles.control}>Words to KNOW (graduated, not just heard)</Text>
              <SteppedSlider
                min={WORDS_MIN} max={WORDS_MAX} step={WORDS_STEP}
                value={targetWords}
                onChange={setTargetWords}
                format={v => `know ${v.toLocaleString()} words`}
              />
            </>
          ) : (
            <>
              <View style={styles.levelRow}>
                {presetsFor(goalTab).map(p => {
                  const active = targetWords === p.targetWords
                  const done = current.graduated >= p.targetWords
                  return (
                    <Pressable
                      key={p.id}
                      onPress={() => setTargetWords(p.targetWords)}
                      style={({ pressed }) => [
                        styles.levelBtn, active && styles.levelBtnActive, pressed && styles.pressedBtn,
                      ]}
                    >
                      <Text style={[styles.levelText, active && styles.levelTextActive]}>
                        {p.label}{done ? ' ✓' : ''}
                      </Text>
                    </Pressable>
                  )
                })}
              </View>
              {(() => {
                const sel = presetsFor(goalTab).find(p => p.targetWords === targetWords)
                return sel ? (
                  <Text style={styles.levelDesc}>
                    {sel.description} ≈ {sel.targetWords.toLocaleString()} words known.
                  </Text>
                ) : null
              })()}
            </>
          )}
          <Text style={styles.control}>Reach it by</Text>
          <SteppedSlider
            min={MONTHS_MIN} max={MONTHS_MAX} step={1}
            value={monthsAhead}
            onChange={setMonthsAhead}
            format={v => targetMonthInfo(v).label}
          />
          {verdict.kind === 'ok' && (
            <Text style={styles.verdict}>
              ≈ {verdict.minutes} min/day — at that pace you'll KNOW{' '}
              {verdict.knownByThen.toLocaleString()} words by {verdict.monthLabel} ✓
            </Text>
          )}
          {verdict.kind === 'reached' && (
            <Text style={styles.verdict}>
              Already there — you know {verdict.known.toLocaleString()} words.
              Saving keeps the daily minimum to keep them fresh ✓
            </Text>
          )}
          {verdict.kind === 'infeasible' && (
            <Text style={styles.verdictBad}>
              Not reachable by {verdict.monthLabel} even at{' '}
              {verdict.ceiling >= HARD_CEILING_MINUTES
                ? '8h/day'
                : `${verdict.ceiling} min/day (the forecast's limit)`}
              {verdict.earliestLabel
                ? ` — earliest: ${verdict.earliestLabel}`
                : ' — beyond the 2-year forecast'}
            </Text>
          )}
        </>
      ) : (
        <>
          <Text style={styles.control}>Listening every day</Text>
          <SteppedSlider
            min={MINUTES_B_MIN} max={MINUTES_B_MAX} step={MINUTES_B_STEP}
            value={minutesB}
            onChange={setMinutesB}
            format={v => `${v} min/day`}
          />
          <Text style={styles.verdict}>At {minutesB} min/day you'll KNOW:</Text>
          {previewB.fixedMarks.map(m => (
            <Text key={m.dateKey} style={styles.savedLine}>
              ≈ {m.words.toLocaleString()} words by {monthYearLabelForDayKey(m.dateKey) ?? m.dateKey}
            </Text>
          ))}
          <Text style={styles.hintLine}>
            These dates are fixed when you save — the plan keeps pointing at
            them as time passes.
          </Text>
        </>
      )}

      <JuicyButton
        label="Save plan"
        onPress={save}
        disabled={!canSave}
        color={PALETTE.accent}
        style={styles.saveWrap}
      />
      {plan && (
        <Pressable
          onPress={() => setEditing(false)}
          style={({ pressed }) => [styles.editBtn, pressed && styles.pressedBtn]}
        >
          <Text style={styles.btnText}>cancel</Text>
        </Pressable>
      )}
      <Text style={styles.current}>Daily goal: {goalMinutes} min/day</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loading: { textAlign: 'center', fontSize: 15, color: '#6E6E6E', paddingVertical: 12 },
  segRow: { flexDirection: 'row', marginBottom: 6 },
  segBtn: {
    flex: 1, borderWidth: 1, borderColor: '#D8CFBA', borderRadius: 10,
    backgroundColor: '#FFFFFF', paddingVertical: 7, alignItems: 'center', marginRight: 8,
  },
  segBtnActive: { backgroundColor: '#1a1a1a', borderColor: '#1a1a1a' },
  segText: { fontSize: 13, color: '#1a1a1a', fontWeight: '600' },
  segTextActive: { color: '#FAF6EE' },
  // goal-type tabs (JLPT / Everyday / CEFR / Custom) — smaller than the mode
  // segments so the hierarchy reads mode → scale → level
  tabRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 4, marginBottom: 2 },
  tabBtn: {
    borderWidth: 1, borderColor: '#D8CFBA', borderRadius: 16, backgroundColor: '#FFFFFF',
    paddingHorizontal: 12, paddingVertical: 5, marginRight: 6, marginBottom: 6,
  },
  tabBtnActive: { backgroundColor: '#1a1a1a', borderColor: '#1a1a1a' },
  tabText: { fontSize: 12.5, color: '#1a1a1a', fontWeight: '600' },
  tabTextActive: { color: '#FAF6EE' },
  // level ladder chips (N5…N1 / A1…C2 / Survival…Near-native); ✓ marks levels
  // already reached — selectable but SAVE will honestly say "already there"
  levelRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 6 },
  levelBtn: {
    borderWidth: 1, borderColor: '#1a1a1a', borderRadius: 10, backgroundColor: '#FFFFFF',
    paddingHorizontal: 12, paddingVertical: 7, marginRight: 6, marginBottom: 6,
  },
  levelBtnActive: { backgroundColor: '#1a1a1a' },
  levelText: { fontSize: 13.5, color: '#1a1a1a', fontWeight: '700' },
  levelTextActive: { color: '#FAF6EE' },
  levelDesc: { fontSize: 13, color: '#2E2E2E', lineHeight: 19, marginTop: 2, marginBottom: 4 },
  // muted text ON the white card: #6E6E6E (WCAG-checked, matches PlayScreen)
  control: { fontSize: 12, color: '#6E6E6E', textTransform: 'uppercase', letterSpacing: 1, marginTop: 6 },
  verdict: { fontSize: 14, color: '#1a1a1a', lineHeight: 20, marginTop: 10 },
  verdictBad: { fontSize: 14, color: '#A03030', lineHeight: 20, marginTop: 10 },
  savedTitle: { fontSize: 15, fontWeight: '700', color: '#1a1a1a', lineHeight: 21 },
  savedLine: { fontSize: 14, color: '#1a1a1a', lineHeight: 20, marginTop: 4 },
  hintLine: { fontSize: 12.5, color: '#6E6E6E', lineHeight: 18, marginTop: 8 },
  current: { fontSize: 12.5, color: '#6E6E6E', marginTop: 8 },
  saveWrap: { marginTop: 12 },
  editBtn: {
    borderWidth: 1, borderColor: '#1a1a1a', borderRadius: 12,
    paddingVertical: 9, alignItems: 'center', marginTop: 8,
  },
  pressedBtn: { backgroundColor: '#E5DECF' },
  btnText: { color: '#1a1a1a', fontSize: 14, fontWeight: '600' },
})

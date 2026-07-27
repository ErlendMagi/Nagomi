// Progress (M5/M6): streak card + graduation meter + words-known curve +
// JLPT mass-fill beads + listening heatmap. Real units everywhere (words,
// minutes, days — never XP).
// Same onClose/header pattern as SettingsScreenV2.
//
// Reads user.db through the services-owned driver (analytics functions take a
// raw SqlDriver); initServices() is awaited first so migrations have run.

import React, { useEffect, useState } from 'react'
import {
  Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View,
} from 'react-native'

import { initServices } from '../engine/services'
import {
  graduationTotals, graduatedWords, daysToFirstGraduation, jlptMass, listeningHeatmap, wordsKnownCurve,
  type CurvePoint, type GraduationTotals, type HeatCell, type JlptMassBand,
} from '../engine/analytics'
import { predictCurve, type PredictionTable } from '../engine/prediction'
import {
  parseGoalPlanV2, planMarkStatuses, minutesToClosePlan, medianDailyMinutesZeroFilled,
  etaCaption, monthKeyLabel, GOAL_PLAN_V2_KEY, type GoalPlanV2, type MarkStatus,
} from '../engine/goalPlanner'
import { addDaysToKey, dayKey, dayKeyDiff } from '../core/day'
import WordsCurve, { type CurveMarker, type ProjPoint } from '../components/charts/WordsCurve'
import JlptMass from '../components/charts/JlptMass'
import EffortBars, { type EffortDay } from '../components/charts/EffortBars'
import Heatmap from '../components/charts/Heatmap'
import StreakCard from '../components/StreakCard'

// FUTURE horizons (user 2026-07-16: the old backward window put "Apr 18" on
// the left axis in July — the chart now anchors at today and looks AHEAD)
const RANGES = [
  { label: '3 months', days: 90 },
  { label: '6 months', days: 180 },
  { label: '1 year', days: 365 },
]

// Offline-simulated forecast curves (real engine, see engine/prediction.ts).
// Metro resolves .json as a source module by default — no config needed.
const PREDICTION_TABLE: PredictionTable = require('../../assets/prediction_table.json')

const MONTHS_FULL = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

// user.db access goes through the services-owned driver — NEVER a local
// openDatabaseSync('user.db'): a default open returns the POOLED native
// connection, and one GC'd throwaway wrapper closes the handle under the
// whole app for the life of the process (the 2026-07-16 prepareSync-NPE
// brick; full mechanics at liveUserHandle in engine/services.ts).

interface PlanView {
  plan: GoalPlanV2
  /** 30-day CALENDAR median (skipped days = 0; see medianDailyMinutesZeroFilled) */
  median: number
  statuses: MarkStatus[]
  /** mode A, behind & future: extra min/day that close the gap (null = not closable) */
  closeDelta: number | null
}

interface Analytics {
  /** graduated history over the short today-anchored history slice */
  curve: CurvePoint[]
  massBands: JlptMassBand[]
  cells: HeatCell[]
  totals: GraduationTotals
  /** projection at the SAVED plan's pace (absent without a plan) */
  planCurve: ProjPoint[]
  planMinutes: number | null
  /** projection at the recent zero-filled-median pace (absent when it would
   *  duplicate the plan line) */
  paceCurve: ProjPoint[]
  paceMinutes: number
  /** "first word known in ~N days ✨" / "next 100 by ~<month>" caption */
  eta: string
  /** last 14 days for the effort chart, oldest → today, zero-filled */
  effortDays: EffortDay[]
  goalMinutes: number
  /** saved goal plan (kv 'goal_plan_v2') evaluated against the median pace */
  planView: PlanView | null
}

function fmtNum(n: number): string {
  return n >= 1000 ? `${Math.floor(n / 1000)},${String(n % 1000).padStart(3, '0')}` : String(n)
}

/** 'Jul 2027' for a 'YYYY-MM-DD' key (chart labels stay short) */
function fmtMonthShort(dateKey: string): string {
  const m = Number(dateKey.slice(5, 7))
  return `${MONTHS_FULL[m - 1]?.slice(0, 3) ?? '?'} ${dateKey.slice(0, 4)}`
}

/** 'Jul 12' for a 'YYYY-MM-DD' key (graduated-word rows) */
function fmtMonthDay(dateKey: string): string {
  const m = Number(dateKey.slice(5, 7))
  return `${MONTHS_FULL[m - 1]?.slice(0, 3) ?? '?'} ${Number(dateKey.slice(8, 10))}`
}

const WORDS_PAGE = 50

/**
 * Status card for the saved plan. Mode A: one commitment, one verdict, and —
 * when behind — the honest pace delta that closes it (via
 * requiredMinutesPerDay, same table + anchoring as everything else). Mode B:
 * each FIXED mark gets its own on-plan/behind line. Past marks compare the
 * commitment against the current KNOWN count.
 */
function PlanStatus({ view, graduated }: { view: PlanView, graduated: number }) {
  const { plan, median, statuses, closeDelta } = view
  const medianLabel = `${Math.round(median)} min/day`

  if (plan.mode === 'wordsByDate') {
    const st = statuses[0]
    if (st === undefined) return null
    const title = `Know ${fmtNum(plan.targetWords)} by ${monthKeyLabel(plan.targetMonthKey) ?? plan.targetMonthKey}`
    let line: string
    let behind = false
    if (st.daysFromNow <= 0) {
      behind = graduated < st.words
      line = behind
        ? `The date has passed — you know ${fmtNum(graduated)} of ${fmtNum(st.words)}.`
        : `Reached — you know ${fmtNum(graduated)} words ✓`
    } else if (median <= 0) {
      line = 'No listening in the last 30 days — no pace to project from yet.'
    } else if (st.onPlan) {
      line = `At your median (${medianLabel}) you land ≈${fmtNum(st.projected)} — on plan ✓`
    } else {
      behind = true
      line = `At your median (${medianLabel}) you land ≈${fmtNum(st.projected)} — behind.`
        + (closeDelta === null
          ? ' Not closable even at the forecast ceiling.'
          : closeDelta > 0 ? ` +${closeDelta} min/day closes it.` : '')
    }
    return (
      <>
        <Text style={styles.planTitle}>{title}</Text>
        <Text style={[styles.planLine, behind && styles.planBehind]}>{line}</Text>
      </>
    )
  }

  return (
    <>
      <Text style={styles.planTitle}>
        {plan.minutesPerDay} min/day — saved {plan.savedAtDayKey}
      </Text>
      {median > 0 && (
        <Text style={styles.hint}>Your 30-day median: {medianLabel} (skipped days count as 0).</Text>
      )}
      {statuses.map(st => {
        const label = fmtMonthShort(st.dateKey)
        const past = st.daysFromNow <= 0
        const ok = past ? graduated >= st.words : st.onPlan
        const text = past
          ? (ok
            ? `${label}: planned ${fmtNum(st.words)} — reached ✓`
            : `${label}: planned ${fmtNum(st.words)} — missed (now at ${fmtNum(graduated)})`)
          : (median <= 0
            ? `${label}: planned ${fmtNum(st.words)}`
            : (ok
              ? `${label}: planned ${fmtNum(st.words)} — projected ≈${fmtNum(st.projected)}, on plan ✓`
              : `${label}: planned ${fmtNum(st.words)} — projected ≈${fmtNum(st.projected)}, behind`))
        return (
          <Text key={st.dateKey} style={[styles.planLine, !ok && styles.planBehind]}>
            {text}
          </Text>
        )
      })}
    </>
  )
}

export default function ProgressScreenV2({ onClose }: { onClose: () => void }) {
  const [data, setData] = useState<Analytics | null>(null)
  // non-null = the load FAILED (user report 2026-07-16: "the progress page is
  // just gone"): the effect below had no .catch, so an initServices()
  // rejection — e.g. a dead SQLite handle at boot — or any throw in the
  // analytics chain left `data` null and this screen stuck on "…" forever,
  // with the rejection swallowed. Failure must render a calm card with the
  // back button and a retry, never an eternal blank.
  const [loadError, setLoadError] = useState<string | null>(null)
  // bumping re-runs the load effect after a failure ("try again")
  const [loadAttempt, setLoadAttempt] = useState(0)
  const [rangeDays, setRangeDays] = useState(90)
  // graduated-words browser (user 2026-07-16): paged, lazy — a mature user
  // has thousands of rows and the list must never load them all
  const [wordsOpen, setWordsOpen] = useState(false)
  const [wordRows, setWordRows] = useState<{ wordId: number, jp: string, gloss: string, gradDayKey: string }[]>([])
  const [wordsHasMore, setWordsHasMore] = useState(true)
  const loadMoreWords = async () => {
    const svc = await initServices()
    const page = graduatedWords(svc.userDriver, svc.settings.graduation, new Date(), WORDS_PAGE, wordRows.length)
    const resolved = page.map(r => {
      const w = svc.content.word(r.wordId)
      return { wordId: r.wordId, jp: w?.jp ?? `#${r.wordId}`, gloss: w?.gloss1 ?? '', gradDayKey: r.gradDayKey }
    })
    setWordRows(prev => [...prev, ...resolved])
    setWordsHasMore(page.length === WORDS_PAGE)
  }
  const { width } = useWindowDimensions()
  // screen padding (20+20) + card padding (14+14)
  const chartWidth = Math.max(200, width - 68)

  useEffect(() => {
    let cancelled = false
    void initServices().then(svc => {
      const user = svc.userDriver
      const now = new Date()
      const g = svc.settings.graduation
      const totals = graduationTotals(user, g, now)
      const today = dayKey(now)
      const dayRows = user.all<{ day: string, seconds: number }>(
        'SELECT day, seconds FROM day_stats')
      // the honest pace: 30 CALENDAR days, skipped days = 0 (never the
      // flattering listening-days-only median). Brand-new users fall back to
      // their goal — an aspirational-but-stated projection beats a flat zero.
      const median30 = medianDailyMinutesZeroFilled(dayRows, today)
      const paceMinutes = Math.max(10, median30 > 0 ? median30 : svc.settings.goalMinutes)

      // saved plan (v2): FIXED marks evaluated against the median pace
      let planView: PlanView | null = null
      const plan = parseGoalPlanV2(svc.userDb.getKV(GOAL_PLAN_V2_KEY))
      if (plan) {
        const statuses = planMarkStatuses(PREDICTION_TABLE, plan, median30, totals, today)
        let closeDelta: number | null = null
        if (plan.mode === 'wordsByDate') {
          const st = statuses[0]
          if (st !== undefined && st.daysFromNow > 0 && !st.onPlan) {
            closeDelta = minutesToClosePlan(
              PREDICTION_TABLE, st.words, st.daysFromNow, median30, totals)
          }
        }
        planView = { plan, median: median30, statuses, closeDelta }
      }

      // projections from TODAY (user 2026-07-16: the chart must show where
      // the plan and the current pace actually lead)
      const stepDays = Math.max(5, Math.round(rangeDays / 6))
      const project = (minutes: number): ProjPoint[] =>
        predictCurve(PREDICTION_TABLE, minutes, totals.heard, rangeDays, {
          stepDays, currentGraduated: totals.graduated,
        })
          .filter(p => p.day > 0) // day 0 duplicates today's history point
          .map(p => ({ day: addDaysToKey(today, p.day), graduated: p.graduated }))
      const planMinutes = plan?.minutesPerDay ?? null
      const planCurve = planMinutes !== null ? project(planMinutes) : []
      // skip the pace line when it would just re-draw the plan line
      const paceCurve = (planMinutes !== null && Math.abs(planMinutes - paceMinutes) <= 1)
        ? [] : project(paceMinutes)

      // short history slice: today-anchored — brand-new users get ~no history
      // and the chart is all projection (progression visible from the left)
      const firstHeard = user.get<{ m: number | null }>(
        'SELECT MIN(first_heard_at) AS m FROM word_state WHERE total_reps > 0')?.m ?? null
      const daysSinceFirst = firstHeard === null
        ? 0 : Math.max(0, dayKeyDiff(dayKey(new Date(firstHeard)), today))
      const historyDays = Math.max(1, Math.min(daysSinceFirst + 1, Math.floor(rangeDays / 3), 60))

      // effort chart: last 14 calendar days, zero-filled, oldest → today
      const statRows = svc.userDb.dayStats(14)
      const byDay = new Map(statRows.map(r => [r.day, r]))
      const effortDays: EffortDay[] = []
      for (let i = 13; i >= 0; i--) {
        const k = addDaysToKey(today, -i)
        const row = byDay.get(k)
        effortDays.push({
          dayKey: k,
          minutes: row ? Math.round(row.seconds / 60) : 0,
          goalMet: row ? row.goal_met === 1 : false,
        })
      }

      const next: Analytics = {
        curve: wordsKnownCurve(user, historyDays, g, now),
        massBands: jlptMass(user, g, now),
        cells: listeningHeatmap(user, 16, now),
        totals,
        planCurve,
        planMinutes,
        paceCurve,
        paceMinutes: Math.round(paceMinutes),
        // pre-graduation the ETA comes from REAL word states (ticks down
        // daily); once words graduate, the table-based next-100 caption runs
        eta: totals.graduated === 0
          ? (() => {
              const d = daysToFirstGraduation(user, g, now)
              return d === null
                ? 'keep listening — your first known words are on the way'
                : `first word known in ~${d} ${d === 1 ? 'day' : 'days'} ✨`
            })()
          : etaCaption(PREDICTION_TABLE, totals, paceMinutes, now),
        effortDays,
        goalMinutes: svc.settings.goalMinutes,
        planView,
      }
      if (!cancelled) { setLoadError(null); setData(next) }
    }).catch((e: unknown) => {
      // synchronous throws inside .then (userDriver's openDatabaseSync, the
      // sqlite reads, plan parsing) reject the same promise — one catch
      // covers the whole chain
      if (!cancelled) setLoadError(String(e instanceof Error ? e.message : e))
    })
    return () => { cancelled = true }
  }, [rangeDays, loadAttempt])

  if (loadError !== null) {
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <Pressable onPress={onClose} style={({ pressed }) => [pressed && styles.pressed]}>
            <Text style={styles.back}>← back</Text>
          </Pressable>
          <Text style={styles.title}>Progress</Text>
          <View style={{ width: 60 }} />
        </View>
        {/* same calm register as the root error card in App.tsx — the data
            behind this page is safe, only the read failed */}
        <View style={styles.errorBody}>
          <Text style={styles.errorTitle}>Couldn't load your progress</Text>
          <Text style={styles.errorText}>
            Your learning progress is safe — every review is saved the moment
            its sentence completes. This page just couldn't read it right now.
          </Text>
          <Pressable
            onPress={() => setLoadAttempt(a => a + 1)}
            style={({ pressed }) => [styles.retryBtn, pressed && styles.pressed]}
          >
            <Text style={styles.retryText}>Try again</Text>
          </Pressable>
          <Text style={styles.errorDetail}>{loadError}</Text>
        </View>
      </View>
    )
  }

  if (!data) {
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <Pressable onPress={onClose} style={({ pressed }) => [pressed && styles.pressed]}>
            <Text style={styles.back}>← back</Text>
          </Pressable>
          <Text style={styles.title}>Progress</Text>
          <View style={{ width: 60 }} />
        </View>
        <Text style={styles.loading}>…</Text>
      </View>
    )
  }

  const { totals, planView } = data
  const gradPct = totals.heard > 0 ? totals.graduated / totals.heard : 0

  // plan markers on the KNOWN curve: filled = reached / on plan, hollow = behind
  const markers: CurveMarker[] | undefined = planView
    ? planView.statuses.map(st => ({
        day: st.dateKey,
        words: st.words,
        label: fmtMonthShort(st.dateKey),
        hit: st.daysFromNow <= 0 ? totals.graduated >= st.words : st.onPlan,
      }))
    : undefined

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Pressable onPress={onClose} style={({ pressed }) => [pressed && styles.pressed]}>
          <Text style={styles.back}>← back</Text>
        </Pressable>
        <Text style={styles.title}>Progress</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.section}>Streak</Text>
        <StreakCard />

        {/* effort chart directly under the streak — the streak's "why"
            (user 2026-07-16: celebrate daily effort, adjusted to the user's
            own level, never shaming) */}
        <Text style={styles.section}>Your effort</Text>
        <View style={styles.card}>
          <EffortBars
            days={data.effortDays}
            goalMinutes={data.goalMinutes}
            width={chartWidth}
          />
        </View>

        <Text style={styles.section}>Graduation</Text>
        <View style={styles.card}>
          <Text style={styles.meterHeadline}>
            <Text style={styles.meterNumber}>{fmtNum(totals.graduated)}</Text>
            {'  of '}
            {fmtNum(totals.heard)}
            {' heard words graduated'}
          </Text>
          <View style={styles.meterTrack}>
            <View style={[styles.meterFill, { width: `${Math.round(gradPct * 100)}%` }]} />
          </View>
          <Text style={styles.hint}>
            A word graduates when its English scaffolding drops — enough exposures
            over enough days.
          </Text>
        </View>

        <Text style={styles.section}>Words known</Text>
        <View style={styles.rangeRow}>
          {RANGES.map(r => (
            <Pressable
              key={r.days}
              onPress={() => setRangeDays(r.days)}
              style={({ pressed }) => [
                styles.rangeBtn,
                rangeDays === r.days && styles.rangeBtnActive,
                pressed && styles.pressed,
              ]}
            >
              <Text style={[styles.rangeText, rangeDays === r.days && styles.rangeTextActive]}>
                {r.label}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.card}>
          <WordsCurve
            history={data.curve} width={chartWidth}
            planProjection={data.planCurve}
            paceProjection={data.paceCurve}
            planLabel={data.planMinutes !== null ? `your plan · ${data.planMinutes} min/day` : undefined}
            paceLabel={`recent pace · ${data.paceMinutes} min/day`}
            markers={markers}
          />
          <Text style={styles.hint}>{data.eta}</Text>
          <Pressable
            onPress={() => { if (!wordsOpen) void loadMoreWords(); setWordsOpen(o => !o) }}
            style={({ pressed }) => [styles.wordsBtn, pressed && styles.pressed]}
          >
            <Text style={styles.wordsBtnText}>
              {wordsOpen ? '▾ your known words' : `see your ${fmtNum(totals.graduated)} known words →`}
            </Text>
          </Pressable>
          {wordsOpen && (
            <View>
              {wordRows.map(w => (
                <View key={w.wordId} style={styles.wordRow}>
                  <Text allowFontScaling={false} style={styles.wordJp}>{w.jp}</Text>
                  <Text allowFontScaling={false} style={styles.wordMeta} numberOfLines={1}>
                    {w.gloss} · known since {fmtMonthDay(w.gradDayKey)}
                  </Text>
                </View>
              ))}
              {wordRows.length === 0 && (
                <Text style={styles.hint}>No graduated words yet — they'll appear here.</Text>
              )}
              {wordsHasMore && wordRows.length > 0 && (
                <Pressable onPress={() => void loadMoreWords()}
                  style={({ pressed }) => [styles.wordsBtn, pressed && styles.pressed]}>
                  <Text style={styles.wordsBtnText}>show more</Text>
                </Pressable>
              )}
            </View>
          )}
        </View>

        {planView && (
          <>
            <Text style={styles.section}>Plan</Text>
            <View style={styles.card}>
              <PlanStatus view={planView} graduated={totals.graduated} />
            </View>
          </>
        )}

        <Text style={styles.section}>JLPT levels</Text>
        <View style={styles.card}>
          <JlptMass bands={data.massBands} width={chartWidth} />
        </View>

        <Text style={styles.section}>Listening days</Text>
        <View style={styles.card}>
          <Heatmap cells={data.cells} width={chartWidth} />
        </View>
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
  title: { fontSize: 18, fontWeight: '700', color: '#1a1a1a' },
  body: { paddingHorizontal: 20, paddingBottom: 40 },
  section: {
    fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, color: '#888',
    marginTop: 26, marginBottom: 8,
  },
  card: {
    backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D8CFBA', borderRadius: 12,
    padding: 14,
  },
  meterHeadline: { fontSize: 15, color: '#1a1a1a', marginBottom: 10 },
  meterNumber: { fontSize: 22, fontWeight: '700', color: '#1a1a1a' },
  meterTrack: {
    height: 12, borderRadius: 6, backgroundColor: '#EFE9DC', overflow: 'hidden',
  },
  meterFill: { height: 12, borderRadius: 6, backgroundColor: '#1a1a1a' },
  rangeRow: { flexDirection: 'row', marginBottom: 8 },
  rangeBtn: {
    borderWidth: 1, borderColor: '#D8CFBA', borderRadius: 10, backgroundColor: '#FFFFFF',
    paddingHorizontal: 14, paddingVertical: 6, marginRight: 8,
  },
  rangeBtnActive: { backgroundColor: '#1a1a1a', borderColor: '#1a1a1a' },
  rangeText: { fontSize: 13, color: '#1a1a1a', fontWeight: '600' },
  rangeTextActive: { color: '#FAF6EE' },
  hint: { fontSize: 12.5, color: '#888', lineHeight: 18, marginTop: 10 },
  wordsBtn: {
    borderWidth: 1, borderColor: '#1a1a1a', borderRadius: 10,
    paddingVertical: 8, alignItems: 'center', marginTop: 12,
  },
  wordsBtnText: { fontSize: 13.5, fontWeight: '600', color: '#1a1a1a' },
  wordRow: {
    flexDirection: 'row', alignItems: 'baseline', paddingVertical: 6,
    borderBottomWidth: 1, borderBottomColor: '#EFE9DC',
  },
  wordJp: { fontSize: 17, color: '#1a1a1a', fontWeight: '600', marginRight: 10 },
  wordMeta: { fontSize: 12.5, color: '#6E6E6E', flexShrink: 1 },
  errorBody: { paddingHorizontal: 20, paddingTop: 24 },
  errorTitle: { fontSize: 17, fontWeight: '700', color: '#1a1a1a' },
  errorText: { fontSize: 14.5, color: '#2E2E2E', lineHeight: 21, marginTop: 8 },
  retryBtn: {
    alignSelf: 'flex-start', marginTop: 16, borderRadius: 10,
    backgroundColor: '#1a1a1a', paddingHorizontal: 18, paddingVertical: 10,
  },
  retryText: { fontSize: 14, fontWeight: '600', color: '#FAF6EE' },
  errorDetail: { fontSize: 11.5, color: '#888', marginTop: 16, lineHeight: 16 },
  planTitle: { fontSize: 15, fontWeight: '700', color: '#1a1a1a', lineHeight: 21 },
  planLine: { fontSize: 13.5, color: '#1a1a1a', lineHeight: 19, marginTop: 6 },
  planBehind: { color: '#A03030' },
  pressed: { opacity: 0.6 },
})

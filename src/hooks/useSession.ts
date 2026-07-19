// The native session shell: owns the AudioPlayers and drives the pure
// SessionEngine through them. All learning rules live in src/core + src/engine;
// this hook only moves audio and forwards completions.
//
//   press play → pick conv → ensure bundle → queue steps → play clip →
//   didJustFinish → swap to the PRELOADED next clip → record completion →
//   conv done → streak/minutes → pick next conv, forever (UNCAPPED).
//
// Hardening (adversarial review 2026-07-10):
//  - generation counter: stop()/start() invalidate every in-flight async
//    continuation (no ghost "playing" UI, no two engines driving one player)
//  - rising-edge finish detection: expo-audio's didJustFinish is a status
//    snapshot field that can survive player.replace() — only a false→true
//    transition counts, so a stale snapshot can't double-advance
//  - status.error handling: a bad clip is skipped (no recording), repeated
//    errors surface instead of hanging the endless loop in silence
//  - pausedRef: step boundaries and conversation rollover PREPARE the next
//    clip but never auto-play against an explicit pause
//  - pick fallback chain: picker choice → next unheard → any cached bundle →
//    starter pack; one unreachable bundle can't kill the session
//
// Smoothness overhaul (user report "the app stops rather often", 2026-07-14):
//  - PING-PONG PLAYERS: two AudioPlayers alternate. While one is audible the
//    other preloads the NEXT clip (replace() loads without playing); at
//    didJustFinish we swap and call play() — the inter-clip gap collapses
//    from replace()+decode to a bare play(). Only the ACTIVE player's status
//    drives the finish edge; the idle player's events are tracked (for edge
//    detection) but never acted on.
//  - AUDIO FIRST: the next clip starts BEFORE the completed step's recorder
//    writes/setView (the data is already in memory; the recorder is
//    synchronous SQLite — order swap is safe, and the speaker never waits on
//    the database). Conversation rollover keeps the old order: convCompleted
//    must land before pickNext reads frontier/lastPlayed.
//  - DEFERRED PREFETCH: bundles.prefetch() (unzipSync + ~40 sync File.writes
//    per conv) kicks off ~4s AFTER a conversation starts, so unpacking can
//    never collide with the first clips' transitions.
//  - GAP TELEMETRY: ms between didJustFinish and the next play() is measured;
//    > GAP_LOG_MS posts {event:'step_gap'} so the dashboard shows real stalls.
//  - MONOTONE RING: recorder.flushPartial() checkpoints pending seconds into
//    day_stats every FLUSH_EVERY_SENTENCES sentences and on pause — an app
//    kill can no longer make minutesToday fall back after restart.

import { useCallback, useEffect, useRef, useState } from 'react'
import { AppState } from 'react-native'
import {
  useAudioPlayer, useAudioPlayerStatus, setAudioModeAsync,
} from 'expo-audio'

import { initServices, DEFAULT_LAN_URL, type Services } from '../engine/services'
import {
  buildQueue, SessionEngine, CHIME_CLIP,
  type ConvBundleData, type ConvLine, type Step,
} from '../engine/session'
import { INACTIVE_PLAN, type RecoveryPlan } from '../core/recovery'
import { gainForClip } from '../engine/audioGains'
import { parseStreak } from '../engine/streakView'
import {
  savableStreakCount, adaptiveReminderTime, medianFirstPlayMinutes,
  recordFirstPlay, FIRST_PLAY_KV_KEY,
} from '../engine/streakReminder'
import {
  shouldCelebrate, CELEBRATED_KV_KEY,
  shouldCelebrateSealedDay, GOAL_CELEBRATED_KV_KEY,
} from '../engine/celebration'
import {
  nextCue, parseFiredCues, serializeFiredCues, CUES_FIRED_KV_KEY, type CueId,
} from '../engine/goalCues'
import {
  milestoneToCelebrate, parseCelebratedUpTo, MILESTONE_KV_KEY, SOUND_MILESTONES,
} from '../engine/milestones'
import { ensureReminderPermission, rescheduleStreakReminder, type ReminderLog } from '../engine/streakReminderNative'
import { dayKey } from '../core/day'

// soft two-note chime closing every conversation (Metro bundles .wav by default)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CHIME_SOURCE = require('../../assets/chime.wav')
// once-a-day "all reviews done" fanfare — plays in the inter-conversation gap
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CELEBRATION_SOURCE = require('../../assets/celebration.wav')
// once-a-day "daily goal DONE" sound (soft two-chord resolution)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const GOAL_DONE_SOURCE = require('../../assets/goal_done.wav')
// big-milestone sparkle (1000/5000/10000/… words heard)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MILESTONE_SOURCE = require('../../assets/milestone.wav')
// spoken-JP progress cues (attention chime + Nanami): quarter/half/¾/10-left
/* eslint-disable @typescript-eslint/no-var-requires */
const CUE_SOURCES: Record<CueId, number> = {
  q1: require('../../assets/cue_q1.mp3'),
  half: require('../../assets/cue_half.mp3'),
  q3: require('../../assets/cue_q3.mp3'),
  m10: require('../../assets/cue_m10.mp3'),
}
/* eslint-enable @typescript-eslint/no-var-requires */
import { PREFETCH_AHEAD } from '../engine/bundles'
import { STARTER_BUNDLES } from '../../assets/starter/starter'

export type SessionPhase = 'idle' | 'starting' | 'playing' | 'paused' | 'error'

export interface SessionView {
  phase: SessionPhase
  convId: string | null
  convContext: string | null
  /** ambient tag of the current conversation (drives the scene backdrop) */
  convAmbient: string | null
  /** cast of the current conversation, in speaking-role order (bubble sides) */
  convCast: string[]
  /** speaker id per line — drives the stage presence machine (enter/react/exit) */
  convSpeakers: string[]
  /** language order of the CURRENT conversation's queue (captured when the
   *  queue was built — a mid-session settings flip applies from the next
   *  conversation, so the bubble's pending-fade must use this, not settings) */
  convEnFirst: boolean
  lineIdx: number | null
  /** the line whose clip is playing right now (null during intro) */
  line: ConvLine | null
  /** word ids in the current line whose furigana is hidden (graduated AND seen enough) */
  furiganaHiddenIds: number[]
  stepKind: Step['kind'] | null
  /**
   * How far through the CURRENT clip playback is (0..1), quantised to 1/20
   * so e-ink isn't redrawn on every status tick — drives the proportional
   * "spoken so far" furigana highlight (no per-token timings exist).
   */
  playbackFraction: number
  progress: { step: number, total: number } | null
  sentencesThisSession: number
  conversationsThisSession: number
  /** cumulative word-reviews WRITTEN to the SRS store this session (deduped,
   *  learnable-only — the count sentenceCompleted returns; real units) */
  reviewsThisSession: number
  /** word-reviews TODAY (persisted day_stats + pending) — survives crashes */
  reviewsToday: number
  /** due reviews still waiting today (visible proof the SRS runs) */
  reviewsWaiting: number
  /** reviews written for the most recently completed sentence (drives the
   *  "+N" pulse; 0 when a sentence carried no learnable words) */
  lastSentenceReviews: number
  /** minutes listened today (4AM day) — drives the goal ring */
  minutesToday: number
  goalMinutes: number
  /** current day streak (seeded from storage at start, live via convCompleted) */
  streakCount: number
  /** today's welcome-back plan (INACTIVE_PLAN when life is normal) */
  recovery: RecoveryPlan
  /** bumps once when today's review queue reaches zero (drives the one-time
   *  celebration badge; the sound is played by the hook itself) */
  celebrationNonce: number
  /** bumps once when the daily goal is reached (drives the full-screen
   *  達成! takeover; the sound is played by the hook itself) */
  goalCelebrationNonce: number
  /** word-peek card (tap/hold on a token): nonce bumps per peek so the same
   *  word can be peeked twice; gloss null = no translation in the corpus */
  peek: { surface: string, reading: string | null, gloss: string | null, hold: boolean, nonce: number } | null
  /** lifetime word-milestone burst (100/1000/… heard); nonce bumps per fire */
  milestone: { value: number, nonce: number }
  /** continuous stage motion enabled (settings.smoothMotion) */
  smoothMotion: boolean
  error: string | null
}

const IDLE: SessionView = {
  phase: 'idle', convId: null, convContext: null, convAmbient: null, convCast: [], convSpeakers: [],
  convEnFirst: true,
  lineIdx: null, line: null,
  furiganaHiddenIds: [], stepKind: null, playbackFraction: 0, progress: null,
  sentencesThisSession: 0,
  conversationsThisSession: 0, reviewsThisSession: 0, lastSentenceReviews: 0,
  reviewsToday: 0, reviewsWaiting: 0,
  minutesToday: 0, goalMinutes: 20, streakCount: 0, recovery: INACTIVE_PLAN,
  celebrationNonce: 0,
  goalCelebrationNonce: 0,
  peek: null,
  milestone: { value: 0, nonce: 0 },
  smoothMotion: true,
  error: null,
}

const MAX_CONSECUTIVE_CLIP_ERRORS = 6
const MAX_PICK_FALLBACKS = 8
/** bundle unzip/writes wait this long after a conversation starts */
const PREFETCH_DELAY_MS = 4000
/** inter-clip gaps above this are posted to the dev dashboard */
const GAP_LOG_MS = 1500
/** checkpoint pending listening into day_stats every N sentences */
const FLUSH_EVERY_SENTENCES = 3
/** fixed silence between the closing chime and the next conversation's first
 *  clip (user 2026-07-16: "Conversations needs to have the same breaktime
 *  between each conversation") — loads faster than this wait for it; loads
 *  slower than this can't be shortened, but with the full pack stored
 *  locally they essentially never are */
const INTER_CONV_GAP_MS = 1000
/** watchdog cadence; ~2 misses in a row = stuck (user 2026-07-16: "I press
 *  play, and then it stops after like one audio-file has played") */
const WATCHDOG_MS = 4000
/** word-peek: audio pauses this long when a word is tapped */
const PEEK_PAUSE_MS = 1500

/** re-plan THE app notification (user 2026-07-18: exactly one — the
 *  goal-in-danger reminder). Skip-today = LISTENING GOAL met (not merely a
 *  streak-saving conversation); slot time adapts to the listener's own
 *  median first-play time when they usually start later than 19:30. */
export function rescheduleReminderFromDb(svc: Services, log?: ReminderLog): void {
  const s = parseStreak(svc.userDb.loadStreak())
  const today = dayKey(new Date())
  const savable = savableStreakCount(s, today)
  const goalMet = svc.settings.goalMinutes > 0
    && Math.round(svc.userDb.todayStats(new Date()).seconds / 60) >= svc.settings.goalMinutes
  const when = adaptiveReminderTime(medianFirstPlayMinutes(svc.userDb.getKV(FIRST_PLAY_KV_KEY)))
  void rescheduleStreakReminder(
    svc.settings.streakReminder, savable, goalMet ? today : null,
    new Date(), log, when, svc.settings.goalMinutes)
}

/** parse the persisted streak blob defensively (same shape summary used) */
function streakCountFrom(raw: string | undefined): number {
  if (!raw) return 0
  try {
    const n = Number(JSON.parse(raw)?.count)
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0
  } catch { return 0 }
}

export function useSession() {
  // ping-pong pair — index 0/1; activeIdxRef says which one is audible
  const playerA = useAudioPlayer()
  const playerB = useAudioPlayer()
  const statusA = useAudioPlayerStatus(playerA)
  const statusB = useAudioPlayerStatus(playerB)
  // dedicated SFX players: celebrations/cues must never touch the ping-pong
  // pair (both are mid-preload at a conversation boundary)
  const playerSfx = useAudioPlayer(CELEBRATION_SOURCE)
  const playerGoalSfx = useAudioPlayer(GOAL_DONE_SOURCE)
  const playerCue = useAudioPlayer()   // source swapped per cue via replace()

  const svcRef = useRef<Services | null>(null)
  const engineRef = useRef<SessionEngine | null>(null)
  const convRef = useRef<{ id: string, ord: number, data: ConvBundleData } | null>(null)
  const genRef = useRef(0)            // bumped by start()/stop(): cancels stale async work
  const activeRef = useRef(false)     // user-intent: session running?
  const pausedRef = useRef(false)     // user-intent: paused? (advance must respect it)
  const activeIdxRef = useRef(0)      // which player is audible (the other preloads)
  const preparedStepRef = useRef(-1)  // step index the IDLE player holds preloaded
  const handledStepRef = useRef(-1)   // last step index whose completion was processed
  // celebration guard: set once ANY waiting-count observation was > 0, keyed
  // by dayKey so yesterday's queue can't earn today's fanfare across a 4AM
  // rollover (a day that never had waiting reviews gets no celebration)
  const sawWaitingRef = useRef<{ day: string, saw: boolean }>({ day: '', saw: false })
  // resume-rewind dedup (user 2026-07-18): a replayed sentence must not
  // write its reviews twice — keyed convId:lineIdx, set when a line records
  const lastRecordedLineRef = useRef<string | null>(null)
  // last minutesToday observed — the edge detector for goal crossing and
  // progress cues. MUST be seeded wherever minutesToday is seeded, or a
  // mid-day restart would "cross" every threshold at once on the first
  // sentence and replay the whole cue ladder.
  const prevMinutesRef = useRef(0)
  // boundary-deferred sound: crossings are DETECTED per sentence (bookkeep)
  // but PLAYED at the next conversation boundary, in the gap after the
  // closing chime — never over speech. One sound per boundary; priority
  // goal-done > reviews-done > cue (the losers roll to later boundaries).
  const pendingBoundarySoundRef = useRef<CueId | null>(null)
  // playback-reliability plumbing (user 2026-07-16: BT-headset play "works
  // for a sec then stops"; play button "stops after one audio file")
  const rolloverAtRef = useRef(0)        // when the last conversation ended
  const rolloverActiveRef = useRef(false) // next-conv load in progress (watchdog off)
  const stuckChecksRef = useRef(0)
  const peekTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const peekActiveRef = useRef(false)    // 1.5s word-peek pause (not a user pause)
  const markWaiting = (waiting: number) => {
    const today = dayKey(new Date())
    if (sawWaitingRef.current.day !== today) sawWaitingRef.current = { day: today, saw: false }
    if (waiting > 0) sawWaitingRef.current.saw = true
  }
  const stepIndexRef = useRef(-1)
  const prevFinishRef = useRef<[boolean, boolean]>([false, false]) // per-player rising edges
  const prevErrorRef = useRef<[boolean, boolean]>([false, false])
  const errorStreakRef = useRef(0)
  const playedStepsThisConvRef = useRef(0)
  const finishedAtRef = useRef(0)     // Date.now() of the last finish edge (gap telemetry)
  const prefetchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sentencesSinceFlushRef = useRef(0)
  const recoveryPlanRef = useRef<RecoveryPlan>(INACTIVE_PLAN)
  const activeRateRef = useRef(1)     // playback rate of the CURRENTLY playing step
  // ring of recently-completed convs: excluding only the LAST one let two
  // dense conversations ping-pong forever (user report #2, 2026-07-10)
  const recentConvsRef = useRef<string[]>([])
  const deadConvsRef = useRef<Set<string>>(new Set()) // unplayable this session
  const [view, setView] = useState<SessionView>(IDLE)

  /** fire-and-forget diagnostics to the dev server when on home Wi-Fi */
  const appLog = useCallback((event: Record<string, unknown>) => {
    const base = svcRef.current?.userDb.getKV('lan_base_url') ?? DEFAULT_LAN_URL
    try {
      void fetch(`${base}/applog`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ t: new Date().toISOString(), ...event }),
      }).catch(() => {})
    } catch {}
  }, [])

  const stale = useCallback((gen: number) => gen !== genRef.current || !activeRef.current, [])

  const fail = useCallback((msg: string) => {
    // checkpoint before disarming: fail() clears activeRef, which also gates
    // the unmount flush — without this, killing the app from the error screen
    // loses the same pending tail a crash would
    try { svcRef.current?.recorder.flushPartial(new Date()) } catch {}
    activeRef.current = false
    setView(v => ({ ...v, phase: 'error', error: msg }))
  }, [])

  /** audio source for a step: bundled chime asset or a bundle clip uri */
  const stepSource = useCallback((step: Step, convId: string): number | { uri: string } | null => {
    if (step.clip === CHIME_CLIP) return CHIME_SOURCE
    const uri = svcRef.current?.bundles.clipUri(convId, step.clip)
    return uri ? { uri } : null
  }, [])

  /** load + start the next conversation (the endless loop's outer step) */
  const startNextConversation = useCallback(async (gen: number) => {
    const svc = svcRef.current!
    const now = new Date()
    rolloverActiveRef.current = true // watchdog off while the next conv loads

    // never re-pick anything from the recent-history ring (last 8 completed),
    // nor anything that proved unplayable this session
    const excluded = new Set(deadConvsRef.current)
    for (const id of recentConvsRef.current) excluded.add(id)

    // candidate chain: picker's choice, then unheard-by-ord, then anything
    // already cached on device, then the starter pack (always available)
    const pick = svc.recorder.pickNext(svc.content, now, excluded)
    const candidates: string[] = []
    const seen = new Set<string>(excluded)
    const push = (id: string | undefined | null) => {
      if (id && !seen.has(id)) { seen.add(id); candidates.push(id) }
    }
    // pickNext ensured today's recovery plan — capture it for playback + UI
    const plan = svc.recorder.recoveryStatus()
    recoveryPlanRef.current = plan
    push(pick?.convId)
    let cursor = Number(svc.userDb.getKV('frontier_ord') ?? '0')
    for (let i = 0; i < 4; i++) {
      const nxt = svc.content.nextUnheard(cursor, seen)
      if (!nxt) break
      push(nxt.convId)
      cursor = nxt.ord
    }
    for (const id of svc.bundles.listCached().slice(0, 6)) push(id)
    for (const id of Object.keys(STARTER_BUNDLES)) push(id)

    let convId: string | null = null
    for (const id of candidates.slice(0, MAX_PICK_FALLBACKS + Object.keys(STARTER_BUNDLES).length)) {
      const ok = await svc.bundles.ensure(id).catch(() => false)
      if (stale(gen)) return
      if (ok) { convId = id; break }
      deadConvsRef.current.add(id) // don't retry it this session
    }
    if (!convId) {
      appLog({ event: 'no_playable_conv', tried: candidates.length })
      fail("Couldn't get any audio. Connect to the home Wi-Fi with the PC on, then press play again.")
      return
    }
    const ciRatio = svc.recorder.ciRatioOf(convId)
    appLog({
      event: 'pick', convId,
      reason: pick?.convId === convId ? pick.reason : 'fallback',
      score: pick?.convId === convId ? Math.round(pick.score * 1000) / 1000 : null,
      excluded: excluded.size,
      ratio: ciRatio !== undefined ? Math.round(ciRatio * 100) / 100 : null,
    })

    const meta = svc.content.convMeta(convId)
    const info = svc.content.convInfo(convId)
    const data = await svc.bundles.linesData(convId)
    if (stale(gen)) return
    const queue = buildQueue(data, {
      enFirst: svc.settings.enFirst,
      skipEnglish: svc.recorder.skipEnglishFn(now),
      // extreme-urgency recovery drops the EN intro narration — the previous
      // conversation's closing chime still marks the boundary, so a sound
      // continues to announce each new conversation (user-chosen ladder, JP
      // speed untouched)
      hasClip: c => (plan.active && plan.dropEnIntro && c === 'intro_en.mp3')
        ? false
        : svc.bundles.hasClip(convId!, c),
    })
    if (queue.length === 0) {
      // unplayable bundle — blacklist for this session (recency alone can't
      // stop nextUnheard from returning it forever), mark recency, retry
      deadConvsRef.current.add(convId)
      appLog({ event: 'empty_queue', convId })
      svc.recorder.convCompleted(convId, meta.ord, now, false)
      void startNextConversation(gen).catch(e => { if (!stale(gen)) fail(String(e?.message ?? e)) })
      return
    }

    engineRef.current = new SessionEngine(data, queue)
    convRef.current = { id: convId, ord: meta.ord, data }
    stepIndexRef.current = -1
    handledStepRef.current = -1
    preparedStepRef.current = -1 // any preload from the previous conv is stale
    playedStepsThisConvRef.current = 0

    // prefetch upcoming NEW conversations; dues/reinforce picks are usually
    // cached already (they were played before). protect current + window.
    const ahead: string[] = []
    let pcursor = Math.max(meta.ord, Number(svc.userDb.getKV('frontier_ord') ?? '0'))
    for (let i = 0; i < PREFETCH_AHEAD; i++) {
      const nxt = svc.content.nextUnheard(pcursor, new Set())
      if (!nxt) break
      ahead.push(nxt.convId)
      pcursor = nxt.ord
    }
    svc.bundles.protect([convId, ...ahead])
    // DEFERRED: unzip + ~40 sync File.writes per conv must not land inside
    // the first clip transitions (user report: "long break between sentences")
    if (prefetchTimerRef.current) clearTimeout(prefetchTimerRef.current)
    prefetchTimerRef.current = setTimeout(() => {
      prefetchTimerRef.current = null
      if (!stale(gen)) svc.bundles.prefetch(ahead)
    }, PREFETCH_DELAY_MS)

    try {
      const active = activeIdxRef.current === 0 ? playerA : playerB
      active.setActiveForLockScreen?.(true, {
        title: info?.context?.slice(0, 60) ?? 'Nagomi',
        artist: 'Nagomi — Japanese by listening',
      })
    } catch {}

    setView(v => ({
      ...v,
      phase: pausedRef.current ? 'paused' : 'playing',
      convId,
      convContext: info?.context ?? null,
      convAmbient: info?.ambient ?? null,
      convCast: info?.cast ?? [],
      convSpeakers: data.lines.map(l => l.speaker ?? ''),
      convEnFirst: svc.settings.enFirst,   // captured with buildQueue's read
      recovery: plan,
      error: null,
    }))
    // CONSISTENT inter-conversation breath (user 2026-07-16): the next
    // conversation always starts INTER_CONV_GAP_MS after the previous one's
    // chime ended, regardless of how fast the bundle loaded. With the pack
    // stored locally, loads beat the gap essentially always — so the pause
    // between conversations finally feels metronome-steady, screen on or off.
    const sinceEnd = Date.now() - rolloverAtRef.current
    if (rolloverAtRef.current > 0 && sinceEnd < INTER_CONV_GAP_MS) {
      await new Promise(r => setTimeout(r, INTER_CONV_GAP_MS - sinceEnd))
      if (stale(gen)) return
    }
    advance(gen)
    rolloverActiveRef.current = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerA, playerB, fail, stale])

  /** move to the next step in the current conversation, or roll over */
  const advance = useCallback((gen: number) => {
    const engine = engineRef.current
    const conv = convRef.current
    const svc = svcRef.current
    if (!engine || !conv || !svc || stale(gen)) return

    const step = engine.next()
    stepIndexRef.current += 1

    if (!step) {
      // conversation COMPLETE: streak/minutes only if something really played.
      // Recorder FIRST here (unlike mid-conv steps): pickNext must see the
      // updated frontier/lastPlayed, and the next clip is an async load anyway.
      const heard = playedStepsThisConvRef.current > 0
      const { streak } = svc.recorder.convCompleted(conv.id, conv.ord, new Date(), heard)
      recentConvsRef.current = [...recentConvsRef.current, conv.id].slice(-8)
      appLog({ event: 'conv_completed', convId: conv.id, heard })
      if (heard) {
        // re-plan the single goal-danger reminder (identical plans skipped;
        // this is what clears tonight's slot the moment the goal is met)
        rescheduleReminderFromDb(svc, appLog)
        // exact refresh of the waiting count at each conversation boundary
        // (the per-sentence decrement is an approximation)
        const waiting = svc.recorder.dueTodayCount(new Date())
        markWaiting(waiting)
        // lifetime milestone check (cheap COUNT at a boundary; kv-gated)
        let milestoneNow: number | null = null
        if (svc.settings.milestoneEffects) {
          try {
            const heardNow = svc.userDriver.get<{ n: number }>(
              'SELECT COUNT(*) AS n FROM word_state WHERE total_reps > 0')?.n ?? 0
            milestoneNow = milestoneToCelebrate(
              heardNow, parseCelebratedUpTo(svc.userDb.getKV(MILESTONE_KV_KEY)))
          } catch { milestoneNow = null }
        }
        // ---- ONE boundary sound, priority sealed-day > reviews-done > milestone > cue ----
        // (the closing chime just played; whatever fires lands in the
        // inter-conversation gap, never over speech; losers roll forward)
        let celebrated = false
        let goalCelebrated = false
        // 達成 seals the WHOLE day: minutes goal met AND queue empty (user
        // 2026-07-18: minutes alone "is not a success"). Re-derived fresh at
        // every boundary — no edge to lose to a crash.
        const minutesAtBoundary = Math.round(
          (svc.userDb.todayStats(new Date()).seconds + svc.recorder.pendingListenedSeconds()) / 60)
        if (shouldCelebrateSealedDay(minutesAtBoundary, svc.settings.goalMinutes, waiting,
          svc.userDb.getKV(GOAL_CELEBRATED_KV_KEY), dayKey(new Date()))) {
          svc.userDb.setKV(GOAL_CELEBRATED_KV_KEY, dayKey(new Date()))
          // the seal subsumes the queue-clear moment — without this, the next
          // boundary would fire the reviews celebration right after 達成
          svc.userDb.setKV(CELEBRATED_KV_KEY, dayKey(new Date()))
          goalCelebrated = true
          appLog({ event: 'day_sealed', minutes: minutesAtBoundary, goal: svc.settings.goalMinutes })
          try { playerGoalSfx.seekTo(0).then(() => playerGoalSfx.play()).catch(() => {}) } catch {}
        } else if (shouldCelebrate(sawWaitingRef.current.saw, waiting,
          svc.userDb.getKV(CELEBRATED_KV_KEY), dayKey(new Date()))) {
          // once-a-day review-queue-cleared celebration (user 2026-07-16)
          svc.userDb.setKV(CELEBRATED_KV_KEY, dayKey(new Date()))
          celebrated = true
          appLog({ event: 'reviews_celebrated' })
          try { playerSfx.seekTo(0).then(() => playerSfx.play()).catch(() => {}) } catch {}
        } else if (milestoneNow !== null) {
          // lifetime word milestone (user 2026-07-18): burst always, sound
          // only on the big ones; kv makes each threshold fire exactly once
          svc.userDb.setKV(MILESTONE_KV_KEY, String(milestoneNow))
          appLog({ event: 'milestone', value: milestoneNow })
          if (SOUND_MILESTONES.has(milestoneNow)) {
            try {
              playerCue.replace(MILESTONE_SOURCE)
              playerCue.volume = 1
              playerCue.play()
            } catch {}
          }
        } else if (pendingBoundarySoundRef.current !== null) {
          const cue = pendingBoundarySoundRef.current
          pendingBoundarySoundRef.current = null
          appLog({ event: 'progress_cue', cue })
          try {
            playerCue.replace(CUE_SOURCES[cue])
            playerCue.volume = 1
            playerCue.play()
          } catch {}
        }
        setView(v => ({
          ...v,
          conversationsThisSession: v.conversationsThisSession + 1,
          streakCount: streak.count,
          reviewsWaiting: waiting,
          celebrationNonce: celebrated ? v.celebrationNonce + 1 : v.celebrationNonce,
          goalCelebrationNonce: goalCelebrated ? v.goalCelebrationNonce + 1 : v.goalCelebrationNonce,
          milestone: milestoneNow !== null
            ? { value: milestoneNow, nonce: v.milestone.nonce + 1 } : v.milestone,
        }))
      }
      rolloverAtRef.current = Date.now() // the closing chime just ended
      startNextConversation(gen).catch(e => { if (!stale(gen)) fail(String(e?.message ?? e)) })
      return
    }

    const src = stepSource(step, conv.id)
    if (!src) { advance(gen); return } // tolerate a vanished clip, keep the session alive

    // AUDIO FIRST — swap to the preloaded player (or cold-load) and play
    // before any UI/bookkeeping work touches the JS thread.
    try {
      if (preparedStepRef.current === stepIndexRef.current) {
        activeIdxRef.current = 1 - activeIdxRef.current
        const p = activeIdxRef.current === 0 ? playerA : playerB
        // a preload that failed to decode would never emit a NEW error edge
        // once active (its edge fired while idle) — catch it at the swap
        const preloadError = p.currentStatus?.error
        if (preloadError) throw new Error(`preloaded clip failed: ${preloadError}`)
      } else {
        const p = activeIdxRef.current === 0 ? playerA : playerB
        // pause() first — same ExoPlayer STATE_ENDED/playWhenReady footgun the
        // preloader guards against: a cold replace() on a just-finished player
        // AUTOPLAYS, which under a peek/pause gate means audio the state
        // machine never sanctioned (overlap class, user 2026-07-18)
        try { p.pause() } catch {}
        p.replace(src)
      }
      preparedStepRef.current = -1
      // recovery EN speed-up: EN clips only, urgency-scaled (max 1.5×) —
      // JAPANESE (and the chime) always plays at natural speed
      {
        const plan = recoveryPlanRef.current
        const rate = plan.active && (step.kind === 'line_en' || step.kind === 'intro_en')
          ? plan.enPlaybackRate : 1
        const p = activeIdxRef.current === 0 ? playerA : playerB
        try { p.setPlaybackRate(rate, 'high') } catch {}
        activeRateRef.current = rate
        // per-voice loudness normalization (measured table, attenuation only):
        // all EN voices equally loud, all JP equally loud, JP slightly louder.
        // Set on EVERY step — the ping-pong players alternate, so the volume
        // left over from two steps ago belongs to a different voice.
        try { p.volume = gainForClip(step.clip) } catch {}
      }
      if (!pausedRef.current && !peekActiveRef.current) {
        const p = activeIdxRef.current === 0 ? playerA : playerB
        p.play()
        // gap telemetry: didJustFinish → this play() call
        const t = finishedAtRef.current
        finishedAtRef.current = 0
        if (t > 0) {
          const ms = Date.now() - t
          if (ms > GAP_LOG_MS) appLog({ event: 'step_gap', ms })
        }
      } else {
        // a user pause or an in-flight word peek is not a stall; the peek
        // timer (or resume()) will start this already-loaded clip
        finishedAtRef.current = 0
      }
    } catch (e) {
      onClipError(gen, `clip start failed: ${e instanceof Error ? e.message : e}`)
      return
    }

    const line = step.lineIdx !== null ? conv.data.lines[step.lineIdx] : null
    const furiganaHidden = line ? svc.recorder.furiganaHiddenFn(new Date()) : null
    setView(v => ({
      ...v,
      phase: pausedRef.current ? 'paused' : 'playing',
      lineIdx: step.lineIdx,
      line,
      furiganaHiddenIds: line && furiganaHidden ? line.words.filter(furiganaHidden) : [],
      stepKind: step.kind,
      playbackFraction: 0,
      progress: engine.progress(),
    }))

    // PRELOAD the step after this one into the now-idle player.
    // pause() FIRST is load-bearing: a just-finished ExoPlayer sits in
    // STATE_ENDED with playWhenReady still true (isPlaying=false, so
    // replace()'s own wasPlaying guard doesn't fire), and setMediaSource()
    // calls prepare() without touching playWhenReady — without the pause the
    // preloaded clip would AUTOPLAY over the active one (verified in
    // expo-audio AudioModule.kt "replace" / AudioPlayer.kt setMediaSource).
    // ENGINE-TRUTH INVARIANT (audio-desync fix, user 2026-07-18: "it plays
    // jp, then jp again, then en over new jp sentence"): the queue lookup
    // must come from the ENGINE's position — progress().step is the index of
    // the step next() will return. stepIndexRef is a monotone uniqueness
    // token for edge-dedup ONLY; after a resume-rewind the engine moves BACK
    // while the token keeps counting UP, and the old
    // `queue[stepIndexRef + 1]` preloaded clips from ever further ahead —
    // the swap then played a FUTURE clip (the next line's EN) against the
    // current line's view. Never index the queue with stepIndexRef.
    const nextStep = engine.queue[engine.progress().step]
    if (nextStep) {
      const nsrc = stepSource(nextStep, conv.id)
      if (nsrc) {
        try {
          const idle = activeIdxRef.current === 0 ? playerB : playerA
          idle.pause()
          idle.replace(nsrc)
          preparedStepRef.current = stepIndexRef.current + 1
        } catch { preparedStepRef.current = -1 }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerA, playerB, startNextConversation, fail, stale, stepSource])

  /** a clip failed to load/decode: skip it (no recording), or surface after N */
  const onClipError = useCallback((gen: number, detail: string) => {
    if (stale(gen)) return
    if (handledStepRef.current === stepIndexRef.current) return
    handledStepRef.current = stepIndexRef.current
    errorStreakRef.current += 1
    if (errorStreakRef.current >= MAX_CONSECUTIVE_CLIP_ERRORS) {
      fail(`Playback keeps failing (${detail}). Check storage/Wi-Fi and press play again.`)
      return
    }
    advance(gen)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [advance, fail, stale])

  // player status → step completion (rising edge) or clip error.
  // BOTH players' edges are tracked every run (so no transition is missed),
  // but only the ACTIVE player's edges drive the session — the idle player's
  // stale end-of-clip snapshot must never advance the queue.
  useEffect(() => {
    const gen = genRef.current
    const statuses = [statusA, statusB]
    const edges = statuses.map((s, i) => {
      const finished = !!s.didJustFinish && !prevFinishRef.current[i]
      prevFinishRef.current[i] = !!s.didJustFinish
      const errored = !!s.error && !prevErrorRef.current[i]
      prevErrorRef.current[i] = !!s.error
      return { finished, errored }
    })
    if (!activeRef.current) return
    const ai = activeIdxRef.current
    const status = statuses[ai]

    if (edges[ai].errored) {
      onClipError(gen, String(status.error))
      return
    }
    if (!edges[ai].finished) return
    if (handledStepRef.current === stepIndexRef.current) return
    handledStepRef.current = stepIndexRef.current
    finishedAtRef.current = Date.now()

    const svc = svcRef.current
    const engine = engineRef.current
    const step = engine?.current() ?? null
    const completedDuration = status.duration ?? 0
    // capture BEFORE advance() overwrites the rate for the NEXT step: minutes
    // are wall-clock honest — a 1.5× EN clip credits duration/1.5
    const completedRate = Math.max(1, activeRateRef.current)
    // engine-truth, never stepIndexRef (see the preload invariant comment):
    // progress().step < length ⇔ the engine has a next step to play
    const hasNext = engine ? engine.progress().step < engine.queue.length : false

    // the completed step's bookkeeping — synchronous SQLite on data already
    // in memory, safe to run AFTER the next clip is audible
    const bookkeep = () => {
      if (!svc || !step) return
      errorStreakRef.current = 0
      playedStepsThisConvRef.current += 1
      svc.recorder.addSeconds(completedDuration / completedRate)
      const lineKey = step.lineIdx !== null ? `${convRef.current?.id ?? '?'}:${step.lineIdx}` : null
      if (step.recordWords && lineKey !== null && lastRecordedLineRef.current !== lineKey) {
        lastRecordedLineRef.current = lineKey
        // "seen" only when the app is actually visible (screen on, foreground)
        // — this feeds the eye-based furigana gate, never the SRS itself
        const seen = AppState.currentState === 'active'
        // recorded = reviews actually written (deduped + learnable-filtered
        // inside the recorder) — the honest count the words counter shows
        const recorded = svc.recorder.sentenceCompleted(step.recordWords, new Date(), seen)
        // checkpoint every few sentences: the ring can then never fall back
        // after an app kill (unflushed pending time was the cause)
        sentencesSinceFlushRef.current += 1
        if (sentencesSinceFlushRef.current >= FLUSH_EVERY_SENTENCES) {
          sentencesSinceFlushRef.current = 0
          svc.recorder.flushPartial(new Date())
        }
        // persisted stats lag until the next flush; add the in-flight
        // remainder so the ring + counters move in real time. reviewsToday is
        // CRASH-DURABLE: persisted day_stats.reviews + small pending tail.
        const persisted = svc.userDb.todayStats(new Date())
        const minutesNow = Math.round((persisted.seconds + svc.recorder.pendingListenedSeconds()) / 60)

        // progress-cue EDGE DETECTION (user 2026-07-16): decided here per
        // sentence, PLAYED at the next conversation boundary. (The 達成
        // moment needs no edge — it is re-derived at every boundary from
        // minutes + queue state; see the boundary block.)
        const prevMin = prevMinutesRef.current
        prevMinutesRef.current = minutesNow
        const goal = svc.settings.goalMinutes
        const todayK = dayKey(new Date())
        if (svc.settings.progressCues && pendingBoundarySoundRef.current === null) {
          const fired = parseFiredCues(svc.userDb.getKV(CUES_FIRED_KV_KEY), todayK)
          const cue = nextCue(prevMin, minutesNow, goal, fired)
          if (cue) {
            fired.add(cue)
            svc.userDb.setKV(CUES_FIRED_KV_KEY, serializeFiredCues(todayK, fired))
            pendingBoundarySoundRef.current = cue
          }
        }

        setView(v => ({
          ...v,
          sentencesThisSession: v.sentencesThisSession + 1,
          reviewsThisSession: v.reviewsThisSession + recorded,
          lastSentenceReviews: recorded,
          minutesToday: minutesNow,
          reviewsToday: persisted.reviews + svc.recorder.pendingReviewCount(),
          // decrement by DUE completions only — `recorded` also counts new
          // words, which drained the count early and flashed a false
          // "all reviews done ✓" mid-conversation
          reviewsWaiting: Math.max(0, v.reviewsWaiting - svc.recorder.dueCompletedLastSentence()),
        }))
      }
    }

    if (hasNext) {
      advance(gen)   // audio first: the preloaded next clip starts NOW
      bookkeep()     // bookkeeping second, behind the already-playing audio
    } else {
      bookkeep()     // last step of the conv: credit it BEFORE convCompleted
      advance(gen)   //   flushes minutes/streak and rolls the conversation
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusA.didJustFinish, statusA.duration, statusA.error,
      statusB.didJustFinish, statusB.duration, statusB.error])

  // player position → playbackFraction (additive; drives the proportional
  // JP highlight). Quantised to 1/20 so a clip causes at most ~20 re-renders
  // — e-ink panels hate frequent redraws. Active player only.
  useEffect(() => {
    if (!activeRef.current) return
    const status = activeIdxRef.current === 0 ? statusA : statusB
    const d = status.duration
    const raw = d > 0 ? Math.min(1, Math.max(0, status.currentTime / d)) : 0
    const frac = Math.round(raw * 20) / 20
    setView(v => (v.playbackFraction === frac ? v : { ...v, playbackFraction: frac }))
  }, [statusA.currentTime, statusA.duration, statusB.currentTime, statusB.duration])

  const start = useCallback(async () => {
    if (activeRef.current) return
    const gen = ++genRef.current
    activeRef.current = true
    pausedRef.current = false
    errorStreakRef.current = 0
    sentencesSinceFlushRef.current = 0
    deadConvsRef.current = new Set()
    // DAY-scoped counters CARRY OVER the session reset (user report 2026-07-16:
    // the goal ring "sometimes pops back to start before returning") — the old
    // bare `...IDLE` zeroed minutesToday/streak/reviewsToday for the whole
    // `await setAudioModeAsync + initServices()` gap below, then the reseed
    // snapped them back: a visible 0-flash on every play press after the
    // mount-effect had seeded real values (worst on e-ink, where both frames
    // fully draw). Session-scoped fields still reset via IDLE. The reseed
    // below stays authoritative — it re-reads persisted day_stats, which also
    // handles the one legitimate drop, the 4AM day rollover.
    setView(v => ({
      ...IDLE, phase: 'starting', recovery: v.recovery,
      minutesToday: v.minutesToday, goalMinutes: v.goalMinutes,
      streakCount: v.streakCount, reviewsToday: v.reviewsToday,
      reviewsWaiting: v.reviewsWaiting,
    }))
    try {
      await setAudioModeAsync({
        shouldPlayInBackground: true,
        playsInSilentMode: true,
        interruptionMode: 'doNotMix',
      })
      svcRef.current = await initServices()
      if (stale(gen)) return
      const svc = svcRef.current
      appLog({ event: 'session_start' })
      const today0 = svc.userDb.todayStats(new Date())
      const waitingAtStart = svc.recorder.dueTodayCount(new Date())
      markWaiting(waitingAtStart)
      prevMinutesRef.current = Math.round(today0.seconds / 60) // no phantom crossings on restart
      // usage pattern for the adaptive reminder: remember today's FIRST play
      // press (minutes-of-day); the reminder time follows this median
      const nowD = new Date()
      svc.userDb.setKV(FIRST_PLAY_KV_KEY, recordFirstPlay(
        svc.userDb.getKV(FIRST_PLAY_KV_KEY), dayKey(nowD), nowD.getHours() * 60 + nowD.getMinutes()))
      setView(v => ({
        ...v,
        minutesToday: Math.round(today0.seconds / 60),
        goalMinutes: svc.settings.goalMinutes,
        smoothMotion: svc.settings.smoothMotion,
        streakCount: streakCountFrom(svc.userDb.loadStreak()),
        reviewsToday: today0.reviews,
        reviewsWaiting: waitingAtStart,
      }))
      await startNextConversation(gen)
    } catch (e) {
      if (gen === genRef.current) fail(String(e instanceof Error ? e.message : e))
    }
  }, [startNextConversation, fail, stale])

  // pre-play "welcome back" banner: assess the backlog on mount so the plan
  // is visible BEFORE the first play press (idempotent per day; cheap when
  // no gap). Failures are silent — the banner is informational only.
  useEffect(() => {
    let cancelled = false
    void initServices().then(async svc => {
      // streak reminder: one-time permission ask on the first launch that has
      // the feature, then an idempotent re-plan on EVERY app start — this also
      // self-heals Android dropping alarms after a force-stop. The kv flag is
      // written AFTER the dialog resolves: killed mid-dialog → ask again.
      if (svc.settings.streakReminder && !svc.userDb.getKV('reminder_perm_asked')) {
        await ensureReminderPermission()
        svc.userDb.setKV('reminder_perm_asked', '1')
      }
      rescheduleReminderFromDb(svc, appLog)
      if (cancelled || activeRef.current) return
      const plan = svc.recorder.ensureRecoveryPlan(svc.content, new Date())
      recoveryPlanRef.current = plan
      // seed the persisted counters BEFORE the first play press — the IDLE
      // zeros otherwise render "all reviews done ✓" with 200 reviews due and
      // a words-today count of 0 after a mid-day restart
      const today0 = svc.userDb.todayStats(new Date())
      const waiting0 = svc.recorder.dueTodayCount(new Date())
      markWaiting(waiting0)
      prevMinutesRef.current = Math.round(today0.seconds / 60)
      setView(v => (v.phase === 'idle' ? {
        ...v,
        recovery: plan,
        minutesToday: Math.round(today0.seconds / 60),
        goalMinutes: svc.settings.goalMinutes,
        smoothMotion: svc.settings.smoothMotion,
        streakCount: streakCountFrom(svc.userDb.loadStreak()),
        reviewsToday: today0.reviews,
        reviewsWaiting: waiting0,
      } : v))
    }).catch(() => {})
    return () => { cancelled = true }
  }, [])

  // EXTERNAL RESUME ADOPTION (user 2026-07-16: tapping the Bluetooth headset
  // "works for a sec, and then stops playing"): a headset/lock-screen play
  // command starts the native player directly, but our pausedRef still said
  // "paused" — so when that clip finished, advance() prepared the next one
  // WITHOUT playing it. If the active player is audibly playing while we
  // believe we're paused, the user resumed externally: adopt it.
  useEffect(() => {
    if (!activeRef.current || !pausedRef.current) return
    const active = activeIdxRef.current === 0 ? statusA : statusB
    if (active.playing) {
      pausedRef.current = false
      appLog({ event: 'external_resume_adopted' })
      setView(v => (v.phase === 'paused' ? { ...v, phase: 'playing' } : v))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusA.playing, statusB.playing])

  // PLAYBACK WATCHDOG (user 2026-07-16: "I press play, and then it stops
  // after like one audio-file has played"): if the session believes it is
  // playing but the active player has been silent for ~2 checks, kick it
  // with play() and tell the dashboard. Reads the player objects directly
  // (sync getters) so the interval can't act on stale React state. Paused,
  // word-peek, and conversation-rollover windows are exempt.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!activeRef.current || pausedRef.current || peekActiveRef.current || rolloverActiveRef.current) {
        stuckChecksRef.current = 0
        return
      }
      const p = activeIdxRef.current === 0 ? playerA : playerB
      let playing = false
      try { playing = p.playing === true } catch { playing = true } // unreadable → assume fine
      if (playing) { stuckChecksRef.current = 0; return }
      stuckChecksRef.current += 1
      if (stuckChecksRef.current >= 2) {
        stuckChecksRef.current = 0
        appLog({ event: 'watchdog_kick' })
        try { p.play() } catch {}
      }
    }, WATCHDOG_MS)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * Word peek (user 2026-07-16): tap = show the word's translation and pause
   * the audio PEEK_PAUSE_MS ("the audio stops for 1.5 seconds showing the
   * word translation before it continues" — per spec it resumes mid-clip, no
   * sentence replay); hold = show the translation without touching playback.
   * Never records anything — peeking is free curiosity, not an SRS event.
   */
  /** shared: pause the active player for the peek, resuming after `ms`
   *  (ms = null → held open until peekRelease(), user 2026-07-18: "when I am
   *  holding the word, I want the audio to stop") */
  const peekPause = useCallback((ms: number | null) => {
    if (!activeRef.current || pausedRef.current) return
    if (!peekActiveRef.current) {
      const p = activeIdxRef.current === 0 ? playerA : playerB
      try { p.pause() } catch {}
      peekActiveRef.current = true
    }
    if (peekTimerRef.current) clearTimeout(peekTimerRef.current)
    peekTimerRef.current = ms === null ? null : setTimeout(() => {
      peekTimerRef.current = null
      peekActiveRef.current = false
      if (activeRef.current && !pausedRef.current) {
        const cur = activeIdxRef.current === 0 ? playerA : playerB
        try { cur.play() } catch {}
      }
    }, ms)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerA, playerB])

  /** end a held peek (finger lifted): resume shortly after */
  const peekRelease = useCallback(() => {
    if (!peekActiveRef.current || peekTimerRef.current !== null) return
    peekTimerRef.current = setTimeout(() => {
      peekTimerRef.current = null
      peekActiveRef.current = false
      if (activeRef.current && !pausedRef.current) {
        const cur = activeIdxRef.current === 0 ? playerA : playerB
        try { cur.play() } catch {}
      }
    }, 250)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerA, playerB])

  const peekWord = useCallback((token: { w?: number, s: string, r?: string }, hold: boolean) => {
    const svc = svcRef.current
    const info = token.w !== undefined ? svc?.content.word(token.w) : undefined
    appLog({ event: 'word_peek', wordId: token.w ?? null, hold })
    setView(v => ({
      ...v,
      peek: {
        surface: token.s,
        reading: token.r ?? null,
        gloss: info?.gloss1 ?? null,
        hold,
        nonce: (v.peek?.nonce ?? 0) + 1,
      },
    }))
    // tap = fixed 1.5s pause; hold = paused until the finger lifts
    peekPause(hold ? null : PEEK_PAUSE_MS)
  }, [peekPause])

  /**
   * Multi-word drag peek (user 2026-07-18: "dragging from the beginning word
   * to another word, and then get a 2-3 second translation"): the span's
   * surfaces join into one headline; each word's gloss stacks below. Audio
   * pauses ~2.5s — a little longer than a single-word tap.
   */
  const peekRange = useCallback((tokens: { w?: number, s: string, r?: string }[]) => {
    if (tokens.length === 0) return
    const svc = svcRef.current
    const glosses = tokens
      .map(t => {
        const info = t.w !== undefined ? svc?.content.word(t.w) : undefined
        return info?.gloss1 ? `${t.s} — ${info.gloss1}` : null
      })
      .filter((g): g is string => g !== null)
    appLog({ event: 'word_peek_range', count: tokens.length })
    setView(v => ({
      ...v,
      peek: {
        surface: tokens.map(t => t.s).join(''),
        reading: tokens.map(t => t.r ?? t.s).join(''),
        gloss: glosses.length > 0 ? glosses.join('\n') : null,
        hold: true, // range peeks use the longer display window
        nonce: (v.peek?.nonce ?? 0) + 1,
      },
    }))
    peekPause(2500)
  }, [peekPause])

  const pause = useCallback(() => {
    pausedRef.current = true
    finishedAtRef.current = 0 // a pause is not a stall — no gap telemetry
    const p = activeIdxRef.current === 0 ? playerA : playerB
    try { p.pause() } catch {}
    // checkpoint: pausing is exactly when the app is likely to get killed
    try { svcRef.current?.recorder.flushPartial(new Date()) } catch {}
    setView(v => (v.phase === 'playing' ? { ...v, phase: 'paused' } : v))
  }, [playerA, playerB])

  const resume = useCallback(() => {
    pausedRef.current = false
    setView(v => (v.phase === 'paused' ? { ...v, phase: 'playing', playbackFraction: 0 } : v))
    // locked rule, upgraded 2026-07-18 (user): resuming replays the WHOLE
    // current sentence — the line rewinds to its first step, so a JP-first
    // pause taken after the JP replays that JP (works screen-off; this is
    // pure audio-engine logic). Intro/chime steps keep the old clip restart.
    const eng = engineRef.current
    if (eng && convRef.current && eng.rewindBeforeLineStart()) {
      preparedStepRef.current = -1 // any preloaded step is now the wrong one
      advance(genRef.current)      // standard load path plays the line's first step
      return
    }
    const p = activeIdxRef.current === 0 ? playerA : playerB
    void (async () => {
      try { await p.seekTo(0) } catch {}
      if (!pausedRef.current && activeRef.current) {
        try { p.play() } catch {}
      }
    })()
  }, [playerA, playerB, advance])

  const stop = useCallback(() => {
    genRef.current += 1            // cancels every in-flight continuation
    activeRef.current = false
    pausedRef.current = false
    if (prefetchTimerRef.current) { clearTimeout(prefetchTimerRef.current); prefetchTimerRef.current = null }
    try { playerA.pause() } catch {}
    try { playerB.pause() } catch {}
    svcRef.current?.recorder.sessionEnded(new Date())
    engineRef.current = null
    convRef.current = null
    preparedStepRef.current = -1
    sentencesSinceFlushRef.current = 0
    if (peekTimerRef.current) { clearTimeout(peekTimerRef.current); peekTimerRef.current = null }
    peekActiveRef.current = false
    rolloverActiveRef.current = false
    // back to idle WITH the persisted day counters — a bare IDLE would zero
    // reviewsWaiting and flash the false "all reviews done ✓" (same defect as
    // the pre-play mount seed fixes)
    const svc = svcRef.current
    if (svc) {
      const t = svc.userDb.todayStats(new Date())
      setView({
        ...IDLE,
        recovery: recoveryPlanRef.current ?? IDLE.recovery,
        minutesToday: Math.round(t.seconds / 60),
        goalMinutes: svc.settings.goalMinutes,
        smoothMotion: svc.settings.smoothMotion,
        streakCount: streakCountFrom(svc.userDb.loadStreak()),
        reviewsToday: t.reviews,
        reviewsWaiting: svc.recorder.dueTodayCount(new Date()),
      })
    } else {
      // services never came up (start() failed before initServices resolved):
      // still never zero the day counters the pre-play mount seed put on
      // screen — same pop-back defect as start()'s reset (report 2026-07-16)
      setView(v => ({
        ...IDLE, recovery: v.recovery,
        minutesToday: v.minutesToday, goalMinutes: v.goalMinutes,
        streakCount: v.streakCount, reviewsToday: v.reviewsToday,
        reviewsWaiting: v.reviewsWaiting,
      }))
    }
  }, [playerA, playerB])

  // flush partial listening if the component unmounts mid-session
  useEffect(() => () => {
    if (prefetchTimerRef.current) clearTimeout(prefetchTimerRef.current)
    if (activeRef.current) svcRef.current?.recorder.sessionEnded(new Date())
  }, [])

  return { view, start, pause, resume, stop, peekWord, peekRelease, peekRange }
}

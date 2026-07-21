// Session engine (M3): the product loop as PURE logic.
//
//   picker → conversation queue → intro → per line [EN?] → JP → closing chime →
//   recordSentence at SENTENCE completion (locked rule) → conv complete →
//   streak/minutes → pick next, forever (listening is UNCAPPED).
//
// This module has no RN/Expo imports so the whole loop is unit-testable:
//  - buildQueue: which clips play, in which order, and where words register
//  - SessionRecorder: every DB/scheduler side effect of a listening session
// The native shell (useSession hook) only moves audio and calls into here.

import { SRS_CONFIG } from '../core/config'
import { dayKey, dayStart, dayKeyDiff } from '../core/day'
import { UserDB } from '../core/db'
import {
  gapExcess, estimateClearMinutes, urgencyPlan, fragilityOrder, splitTiers,
  shouldExit, INACTIVE_PLAN, type DueEntry, type RecoveryPlan,
} from '../core/recovery'
import { ciTargetFor } from '../core/ci'
import {
  Scheduler, createWordState, type WordState,
} from '../core/scheduler'
import {
  isGraduated, shouldSkipEnglish, defaultGraduationSettings,
  clampGraduationSettings, type GraduationSettings,
} from '../core/graduation'
import {
  pickNextConversation, type ContentIndex, type Pick, type PickerContext,
} from '../core/picker'
import { createStreak, onConversationCompleted, type StreakState } from '../core/streak'

/** how many recently-completed conversations the picker must not repeat */
export const RECENT_CONV_RING_SIZE = 8
const RECENT_CONV_RING_KEY = 'recent_conv_ring'

// ---- bundle data shapes (lines.json inside every bundle) ----

export interface LineToken { s: string; r?: string; w?: number }

export interface ConvLine {
  speaker: string
  mood: string
  en: string
  jp: string
  nonverbal: boolean
  jpSilence: boolean
  words: number[]
  jpTokens: LineToken[]
}

export interface ConvBundleData {
  id: string
  context: string
  ambient: string
  cast: string[]
  tier: number
  lines: ConvLine[]
}

// ---- play queue ----

export type StepKind = 'intro_en' | 'intro_jp' | 'chime' | 'line_en' | 'line_jp'

/** sentinel clip name for the bundled chime asset (not a bundle file) */
export const CHIME_CLIP = '__chime__'

export interface Step {
  kind: StepKind
  /** null for intro/chime steps */
  lineIdx: number | null
  /** clip filename inside the bundle (or the CHIME_CLIP sentinel) */
  clip: string
  /** word ids to register when this step COMPLETES (last step of a line only) */
  recordWords: number[] | null
}

/** clips are .mp3 normally, .wav for rendered silence-beats — try both */
export function clipCandidates(lineIdx: number, speaker: string, lang: 'en' | 'jp'): string[] {
  const base = `line_${String(lineIdx).padStart(3, '0')}_${speaker}_${lang}`
  return [`${base}.mp3`, `${base}.wav`]
}

export function clipName(lineIdx: number, speaker: string, lang: 'en' | 'jp'): string {
  return clipCandidates(lineIdx, speaker, lang)[0]
}

export interface QueueOptions {
  /** EN before JP (locked default true; user-flippable) — applies to intro too */
  enFirst: boolean
  /** graduation-driven per-line EN skip (closes over learner state) */
  skipEnglish(line: ConvLine): boolean
  /** does this clip exist in the unpacked bundle? */
  hasClip(clip: string): boolean
}

/**
 * Build the ordered step queue for one conversation.
 * Sentence completion = the LAST step of a line, whichever language that is —
 * hearing the sentence in full is what registers the words.
 */
export function buildQueue(conv: ConvBundleData, opts: QueueOptions): Step[] {
  const steps: Step[] = []

  const introEn: Step | null = opts.hasClip('intro_en.mp3')
    ? { kind: 'intro_en', lineIdx: null, clip: 'intro_en.mp3', recordWords: null } : null
  const introJp: Step | null = opts.hasClip('intro_jp.mp3')
    ? { kind: 'intro_jp', lineIdx: null, clip: 'intro_jp.mp3', recordWords: null } : null
  for (const s of opts.enFirst ? [introEn, introJp] : [introJp, introEn]) if (s) steps.push(s)

  conv.lines.forEach((line, i) => {
    const jpClip = clipCandidates(i, line.speaker, 'jp').find(opts.hasClip) ?? null
    const enClip = clipCandidates(i, line.speaker, 'en').find(opts.hasClip) ?? null
    const jp: Step | null = jpClip
      ? { kind: 'line_jp', lineIdx: i, clip: jpClip, recordWords: null } : null
    const en: Step | null = !opts.skipEnglish(line) && enClip
      ? { kind: 'line_en', lineIdx: i, clip: enClip, recordWords: null } : null

    const pair = (opts.enFirst ? [en, jp] : [jp, en]).filter((s): s is Step => s !== null)
    if (pair.length === 0) return
    // words register at sentence completion — but ONLY when the Japanese was
    // actually heard. A line whose JP clip is missing must not grant reviews
    // off the English audio alone.
    if (jp) pair[pair.length - 1].recordWords = line.words
    steps.push(...pair)
  })

  // conversation-END chime (user 2026-07-16: the after-intro cue was annoying
  // and too high-pitched — the settling two-note now closes the conversation
  // and marks the boundary before the next one begins). ONLY when something
  // real plays: an unconditional push would make the empty-queue guard in
  // startNextConversation unreachable, and a corrupt clip-less bundle would
  // "complete" off a 1.2s chime — earning a streak day and a frontier advance
  // for a conversation the user never heard.
  if (steps.length > 0) {
    steps.push({ kind: 'chime', lineIdx: null, clip: CHIME_CLIP, recordWords: null })
  }

  return steps
}

/** Cursor over a built queue. */
export class SessionEngine {
  private i = -1
  constructor(readonly conv: ConvBundleData, readonly queue: Step[]) {}

  current(): Step | null { return this.i >= 0 && this.i < this.queue.length ? this.queue[this.i] : null }
  /** advance to the next step; null = conversation finished */
  next(): Step | null {
    this.i += 1
    return this.current()
  }
  isFinished(): boolean { return this.i >= this.queue.length }
  progress(): { step: number, total: number } { return { step: Math.max(0, this.i + 1), total: this.queue.length } }

  /**
   * Position so the NEXT next() returns the FIRST step of the current line
   * (user 2026-07-18: pause → play replays the whole sentence — in JP-first
   * order a pause after the JP replays that JP, not the upcoming EN).
   * Returns false when the current step has no line (intro/chime) — callers
   * fall back to restarting just the current clip.
   */
  rewindBeforeLineStart(): boolean {
    const cur = this.queue[this.i]
    if (!cur || cur.lineIdx === null) return false
    let first = this.i
    while (first > 0 && this.queue[first - 1].lineIdx === cur.lineIdx) first--
    this.i = first - 1
    return true
  }
}

// ---- user settings persisted in kv ----

export interface SessionSettings {
  enFirst: boolean
  goalMinutes: number
  /** evening streak-saver notification (M6) — on by default, honored only
   *  while the OS notification permission is granted */
  streakReminder: boolean
  /** spoken-JP in-session progress announcements (quarter/half/¾/10-left) */
  progressCues: boolean
  /** lifetime word-milestone bursts + sounds (100/1000/…; Advanced toggle) */
  milestoneEffects: boolean
  /** continuous character/bubble motion (breathing, springs). OFF = discrete
   *  frames only — the right setting on e-ink panels, which smear loops */
  smoothMotion: boolean
  graduation: GraduationSettings
}

export function defaultSettings(): SessionSettings {
  return {
    enFirst: true, goalMinutes: 20, streakReminder: true, progressCues: true,
    milestoneEffects: true, smoothMotion: true, graduation: defaultGraduationSettings(),
  }
}

export function loadSettings(db: UserDB): SessionSettings {
  const d = defaultSettings()
  const raw = db.getKV('settings')
  if (!raw) return d
  try {
    const parsed = JSON.parse(raw) ?? {}
    // deep-merge graduation so a blob from an older build (missing fields or
    // null) can never yield undefined thresholds (undefined comparisons would
    // silently make words ungraduatable); always re-clamp stored values.
    return {
      ...d,
      ...parsed,
      graduation: clampGraduationSettings({ ...d.graduation, ...(parsed.graduation ?? {}) }),
    }
  } catch { return d }
}

export function saveSettings(db: UserDB, s: SessionSettings): void {
  db.setKV('settings', JSON.stringify(s))
}

// ---- recorder: every side effect of listening ----

export class SessionRecorder {
  private states = new Map<number, WordState>()
  private lastSessionAt: Date | null
  private pendingSeconds = 0
  private pendingSentences = 0
  private pendingReviews = 0
  private heardThisSession = false

  // ---- comprehensible-input known-tracking (see core/ci.ts) ----
  private ciKnownByConv = new Map<string, number>()
  private ciKnownWordCount = 0
  private convWordCounts = new Map<string, number>()

  constructor(
    private db: UserDB,
    private scheduler: Scheduler,
    /** word ids that are actually learnable (content.db words.learnable=1) */
    private learnable: Set<number>,
    private settings: SessionSettings,
    /** conversations containing a word (ContentDb.convsOf) — CI tracking off when absent */
    private convsOf?: (wordId: number) => string[],
    /** conv_id → word_count (ContentDb.wordCounts) — CI ratio denominators */
    convWordCounts?: Map<string, number>,
  ) {
    const raw = db.getKV('last_session_end')
    this.lastSessionAt = raw ? new Date(Number(raw)) : null
    if (convsOf && convWordCounts) {
      this.convWordCounts = convWordCounts
      this.ensureCiBackfill()
      this.ciKnownByConv = db.loadConvKnown()
      this.ciKnownWordCount = db.ciKnownWordIds(SRS_CONFIG.picker.ciComfort.knownReps).length
    }
  }

  /**
   * One-time backfill of conv_known from existing word_state (upgrades from
   * pre-CI builds). Cost ≈ heardWords × ~30 upserts — acceptable up to a few
   * thousand heard words; runs in one transaction, marked done in kv.
   */
  private ensureCiBackfill(): void {
    if (!this.convsOf || this.db.getKV('ci_backfilled') === '1') return
    const known = this.db.ciKnownWordIds(SRS_CONFIG.picker.ciComfort.knownReps)
    this.db.transaction(() => {
      for (const id of known) this.db.bumpConvKnown(this.convsOf!(id))
      this.db.setKV('ci_backfilled', '1')
    })
  }

  /** fraction of a conversation's words the learner CI-knows (picker input) */
  ciRatioOf = (convId: string): number | undefined => {
    const total = this.convWordCounts.get(convId)
    if (!total || total <= 0) return undefined
    return Math.min(1, (this.ciKnownByConv.get(convId) ?? 0) / total)
  }

  private wordState(id: number, now: Date): WordState {
    let st = this.states.get(id)
    if (!st) {
      st = this.db.loadWord(id) ?? createWordState(id, now)
      this.states.set(id, st)
    }
    return st
  }

  /**
   * Locked rule: reviews register at SENTENCE completion.
   * `seen` = the Japanese text was on a lit, foregrounded screen for this
   * sentence — it advances the separate seen-counter that gates furigana
   * fading (hearing alone must never hide a reading).
   *
   * Returns the number of reviews actually written: UNIQUE word ids that
   * passed the learnable filter — the honest count the session UI surfaces
   * ("+N" review pulse). Was `void` until 2026-07-13; nothing consumed the
   * old return value, so the change is backward-compatible.
   */
  sentenceCompleted(words: number[], now: Date, seen = false): number {
    let recorded = 0
    let dueDone = 0
    const todayKey = dayKey(now)
    const ciThreshold = SRS_CONFIG.picker.ciComfort.knownReps
    // one transaction per sentence: 10-30 word upserts otherwise each pay an
    // fsync'd autocommit on the JS thread, right in the clip-transition gap
    this.db.transaction(() => {
      for (const id of new Set(words)) {
        if (!this.learnable.has(id)) continue
        const prev = this.wordState(id, now)
        const prevReps = prev.totalReps
        // was this word part of "N reviews waiting today" BEFORE this sentence?
        // (same predicate as dueTodayCount — the UI decrements by THIS, not by
        // `recorded`, which also counts brand-new words and would show a false
        // "all reviews done ✓" mid-conversation)
        if (prev.lastHeardDayKey !== todayKey && this.scheduler.duenessWeight(prev, now) >= 1) {
          dueDone += 1
        }
        const res = this.scheduler.hear(prev, now, this.lastSessionAt)
        const next = seen ? { ...res.state, totalSeens: res.state.totalSeens + 1 } : res.state
        this.states.set(id, next)
        this.db.saveWord(next)
        recorded += 1
        // CI crossing: the word just became "recognizable" — every conv
        // containing it gets +1 known (in-memory + persisted, same txn)
        if (this.convsOf && prevReps < ciThreshold && next.totalReps >= ciThreshold) {
          const convs = this.convsOf(id)
          this.db.bumpConvKnown(convs)
          for (const c of convs) this.ciKnownByConv.set(c, (this.ciKnownByConv.get(c) ?? 0) + 1)
          this.ciKnownWordCount += 1
        }
      }
    })
    this.pendingSentences += 1
    this.pendingReviews += recorded
    this.heardThisSession = true
    this.lastSentenceDueDone = dueDone
    return recorded
  }

  private lastSentenceDueDone = 0
  /** how many of the last sentence's recorded words were DUE-today reviews
   *  (dueTodayCount members) — the honest "reviews waiting" decrement */
  dueCompletedLastSentence(): number {
    return this.lastSentenceDueDone
  }

  /** reviews written today but not yet flushed to day_stats (live UI) */
  pendingReviewCount(): number {
    return this.pendingReviews
  }

  /** accumulate listened audio time (clip durations) */
  addSeconds(sec: number): void {
    if (Number.isFinite(sec) && sec > 0) this.pendingSeconds += sec
  }

  /** seconds listened but not yet flushed to day_stats (live UI counter) */
  pendingListenedSeconds(): number {
    return this.pendingSeconds
  }

  /** per-word graduation predicate (drives EN skip AND furigana hiding) */
  graduatedFn(now: Date): (wordId: number) => boolean {
    return (id: number) => {
      const st = this.states.get(id) ?? this.db.loadWord(id)
      if (!st) return false
      return isGraduated(st, this.scheduler.daysSinceFirstHeard(st, now), this.settings.graduation)
    }
  }

  /**
   * Graduation-driven EN skip for buildQueue. During recovery, the skip is
   * more aggressive (the user-sanctioned quality penalty): a line's EN also
   * drops when ≥ enSkipGraduatedFraction of its words are graduated AND the
   * line contains no tier-1 (fragile, being-rescued) word — the penalty must
   * never land on the very word the plan is trying to save.
   */
  skipEnglishFn(now: Date): (line: ConvLine) => boolean {
    const graduated = this.graduatedFn(now)
    const rec = this.recovery
    if (!rec || !rec.plan.active) {
      return line => shouldSkipEnglish(line.words, line.nonverbal, graduated)
    }
    const frac = SRS_CONFIG.recovery.enSkipGraduatedFraction
    const tierActive = rec.plan.horizonDays > 1
    return line => {
      if (shouldSkipEnglish(line.words, line.nonverbal, graduated)) return true
      const learnableWords = line.words.filter(w => this.learnable.has(w))
      if (learnableWords.length === 0) return false
      const gradCount = learnableWords.filter(graduated).length
      if (gradCount / learnableWords.length < frac) return false
      if (tierActive && learnableWords.some(w => rec.tier1.has(w))) return false
      return true
    }
  }

  /**
   * Furigana hides only when the word is graduated (heard-based) AND its
   * Japanese text has been SEEN at least the graduation-exposures number of
   * times on a lit screen (user rule 2026-07-10: pocket listening teaches the
   * ears — readings must be earned with the eyes).
   */
  furiganaHiddenFn(now: Date): (wordId: number) => boolean {
    const graduated = this.graduatedFn(now)
    return (id: number) => {
      if (!graduated(id)) return false
      const st = this.states.get(id) ?? this.db.loadWord(id)
      return !!st && st.totalSeens >= this.settings.graduation.exposures
    }
  }

  /**
   * Flush minutes/sentences + streak + frontier when a conversation completes.
   * `heardAnything=false` (all clips vanished / nothing actually played) only
   * records recency so the picker moves on — no streak day, no minutes, no
   * frontier advance for a conversation the user never heard.
   */
  convCompleted(convId: string, ord: number, now: Date, heardAnything = true): { streak: StreakState } {
    this.db.recordConvPlayed(convId, now)
    // Anti-repeat ring, PERSISTED (user 2026-07-21: the same conversations
    // replayed in the same order every day): the ring used to live only in a
    // React ref, so every app launch forgot it and the deterministic dues
    // argmax restarted from the identical top picks each morning.
    const ring = [...this.recentConvRing(), convId].slice(-RECENT_CONV_RING_SIZE)
    this.db.setKV(RECENT_CONV_RING_KEY, JSON.stringify(ring))
    if (!heardAnything) {
      const raw0 = this.db.loadStreak()
      return { streak: raw0 ? JSON.parse(raw0) : createStreak() }
    }
    this.db.addListening(
      now, Math.round(this.pendingSeconds), this.pendingSentences, 1,
      SRS_CONFIG.dailyMinimumMinutes, this.settings.goalMinutes, this.pendingReviews,
    )
    this.pendingSeconds = 0
    this.pendingSentences = 0
    this.pendingReviews = 0

    if (ord > Number(this.db.getKV('frontier_ord') ?? '0')) this.db.setFrontierOrd(ord)

    const raw = this.db.loadStreak()
    const prev: StreakState = raw ? JSON.parse(raw) : createStreak()
    const { state } = onConversationCompleted(prev, dayKey(now))
    this.db.saveStreak(JSON.stringify(state))

    // persist for crash-safety, but do NOT refresh the in-memory lastSessionAt
    // mid-session: Scheduler.hear's absence rule needs "end of the PREVIOUS
    // session" for the WHOLE comeback session (simulator semantics), not
    // "minutes ago" from conversation 2 onward.
    this.db.setKV('last_session_end', String(now.getTime()))
    return { streak: state }
  }

  /** the persisted last-N completed conversations (newest last); [] on any malformed kv */
  recentConvRing(): string[] {
    const raw = this.db.getKV(RECENT_CONV_RING_KEY)
    if (!raw) return []
    try {
      const arr: unknown = JSON.parse(raw)
      return Array.isArray(arr) ? arr.filter((x): x is string => typeof x === 'string') : []
    } catch { return [] }
  }

  /**
   * Persist pending seconds/sentences into day_stats WITHOUT any conversation
   * credit (no conv count, no streak, no frontier). Whole seconds only —
   * the sub-second remainder stays pending so repeated partial flushes never
   * accumulate rounding drift (floor-with-carry, loses < 1s ever).
   */
  private flushPendingStats(now: Date): void {
    const whole = Math.floor(this.pendingSeconds)
    if (whole <= 0 && this.pendingSentences <= 0 && this.pendingReviews <= 0) return
    this.db.addListening(
      now, whole, this.pendingSentences, 0,
      SRS_CONFIG.dailyMinimumMinutes, this.settings.goalMinutes, this.pendingReviews,
    )
    this.pendingSeconds = Math.max(0, this.pendingSeconds - whole)
    this.pendingSentences = 0
    this.pendingReviews = 0
  }

  /**
   * Mid-session checkpoint (called every few sentences and on pause): moves
   * pending listening into day_stats so an app kill/restart can never lose it
   * — the goal ring reads persisted+pending and stays MONOTONE within a day.
   * Deliberately does NOT touch last_session_end / heardThisSession: the
   * absence clock still moves only when a session actually ends.
   */
  flushPartial(now: Date): void {
    this.flushPendingStats(now)
  }

  /**
   * Flush partial listening when the user stops mid-conversation.
   * Only a session in which something was actually heard moves the absence
   * clock — opening the app without listening is not "presence".
   */
  sessionEnded(now: Date): void {
    this.flushPendingStats(now)
    if (this.heardThisSession) {
      // advance the in-memory value too, so a SECOND session in the same app
      // process sees this session's end as its "previous session"
      this.db.setKV('last_session_end', String(now.getTime()))
      this.lastSessionAt = now
      this.heardThisSession = false
    }
  }

  // ---- review-backlog recovery ("welcome back" mode) ----

  private recovery: {
    dayKey: string
    plan: RecoveryPlan
    tier1: Set<number>
    tier2: Set<number>
  } | null = null

  /**
   * Compute (or load) today's recovery plan. Idempotent per 4AM day; the plan
   * is re-derived from scratch at each day boundary so it self-corrects.
   * word_state.due_at is never written — tiering is selection-layer only.
   */
  ensureRecoveryPlan(index: ContentIndex, now: Date): RecoveryPlan {
    const today = dayKey(now)
    if (this.recovery?.dayKey === today) return this.recovery.plan

    // try the persisted plan first (app restarts mid-day keep the same slice)
    const raw = this.db.getKV('recovery_plan')
    if (raw) {
      try {
        const stored = JSON.parse(raw)
        if (stored.dayKey === today && stored.plan) {
          this.recovery = {
            dayKey: today, plan: stored.plan,
            tier1: new Set<number>(stored.tier1 ?? []),
            tier2: new Set<number>(stored.tier2 ?? []),
          }
          return this.recovery.plan
        }
      } catch { /* recompute */ }
    }

    const cfg = SRS_CONFIG.recovery
    const lastEndRaw = this.db.getKV('last_session_end')
    const lastEndMs = lastEndRaw ? Number(lastEndRaw) : NaN
    const dayStartMs = dayStart(now).getTime()
    const todayKey = today

    let plan: RecoveryPlan = INACTIVE_PLAN
    let tier1 = new Set<number>()
    let tier2 = new Set<number>()

    if (Number.isFinite(lastEndMs)) {
      const gapDays = Math.max(0, dayKeyDiff(dayKey(new Date(lastEndMs)), todayKey))
      if (gapDays >= cfg.minGapDays) {
        const entries: DueEntry[] = []
        for (const { wordId, state } of this.db.dueWords(now)) {
          if (state.lastHeardDayKey === todayKey) continue
          const w = this.scheduler.duenessWeight(state, now)
          if (w >= 1) {
            entries.push({
              wordId, dueAtMs: state.card.due.getTime(),
              stability: state.card.stability, weight: w,
            })
          }
        }
        const { excess } = gapExcess(entries, lastEndMs, dayStartMs)
        if (excess.length > 0) {
          const est = estimateClearMinutes(
            index, excess, this.db.lastPlayedMap(),
            Number(this.db.getKV('frontier_ord') ?? '0'), now,
          )
          // hysteresis: once active, stay active until BELOW the exit line
          const wasActive = this.recovery?.plan.active ?? false
          plan = urgencyPlan(est.minutes, this.settings.goalMinutes, gapDays, excess.length, est.duesPerMinute)
          if (!plan.active && wasActive && !shouldExit(est.minutes, this.settings.goalMinutes)) {
            plan = urgencyPlan(
              Math.max(est.minutes, cfg.triggerFactor * this.settings.goalMinutes + 1),
              this.settings.goalMinutes, gapDays, excess.length, est.duesPerMinute,
            )
          }
          if (plan.active && plan.horizonDays > 1) {
            const ordered = fragilityOrder(
              excess, now.getTime(), plan.horizonDays,
              (s, d) => this.scheduler.projectRetrievability(s, d),
            )
            const tiers = splitTiers(ordered, plan.duesPerMinute, plan.planMinutesPerDay)
            tier1 = tiers.tier1
            tier2 = tiers.tier2
          }
        }
      }
    }

    this.recovery = { dayKey: today, plan, tier1, tier2 }
    this.db.setKV('recovery_plan', JSON.stringify({
      dayKey: today, plan, tier1: [...tier1], tier2: [...tier2],
    }))
    return plan
  }

  /** current plan for the UI (never computes — call ensureRecoveryPlan first) */
  recoveryStatus(): RecoveryPlan {
    return this.recovery?.plan ?? INACTIVE_PLAN
  }

  /**
   * Reviews still WAITING today: due words not yet heard this 4AM-day (same
   * filter as pickerContext) — the visible proof that the review system runs.
   */
  dueTodayCount(now: Date): number {
    const todayKey = dayKey(now)
    let n = 0
    for (const { state } of this.db.dueWords(now)) {
      if (state.lastHeardDayKey === todayKey) continue
      if (this.scheduler.duenessWeight(state, now) >= 1) n += 1
    }
    return n
  }

  /**
   * Assemble the picker context exactly as the validated simulator did:
   * dues = weight >= 1 only (due/overdue); in-flight weight = reps still needed.
   */
  pickerContext(now: Date): PickerContext {
    const todayKey = dayKey(now)
    const dueWeights = new Map<number, number>()
    for (const { wordId, state } of this.db.dueWords(now)) {
      // A word already heard today has HAD its scheduling review — it is not
      // a due anymore (the simulator deletes it from the due set on its
      // first_of_day hear). Without this, ts-fsrs learning steps make every
      // word heard today "due" again ~10 minutes later and the dues path
      // hijacks content selection for the rest of the day.
      if (state.lastHeardDayKey === todayKey) continue
      const w = this.scheduler.duenessWeight(state, now)
      if (w >= 1) dueWeights.set(wordId, w)
    }
    const floor = SRS_CONFIG.picker.inFlightRepFloor
    const inFlightWords = new Map<number, number>()
    for (const { wordId, totalReps } of this.db.inFlightWords(floor)) {
      if (this.learnable.has(wordId)) inFlightWords.set(wordId, floor - totalReps)
    }
    // recovery tiering: postponed (tier-2) excess words leave today's due
    // set — selection-layer only, their due_at is untouched. Standing-pool
    // dues and tier-1 (fragile) words stay and compete by weight as normal.
    const rec = this.recovery
    if (rec && rec.dayKey === dayKey(now) && rec.plan.active && rec.plan.horizonDays > 1) {
      for (const id of rec.tier2) dueWeights.delete(id)
    }
    return {
      now,
      dueWeights,
      lastPlayed: this.db.lastPlayedMap(),
      frontierOrd: Number(this.db.getKV('frontier_ord') ?? '0'),
      inFlightWords,
      pickerParams: rec?.plan.active ? SRS_CONFIG.recovery.picker : undefined,
      // comprehensible-input preference (off when content callbacks absent)
      ciRatioOf: this.convsOf ? this.ciRatioOf : undefined,
      ciTarget: this.convsOf ? ciTargetFor(this.ciKnownWordCount) : undefined,
    }
  }

  pickNext(index: ContentIndex, now: Date, excludeConvIds?: Set<string>): Pick | null {
    this.ensureRecoveryPlan(index, now)
    return pickNextConversation(index, { ...this.pickerContext(now), excludeConvIds })
  }
}

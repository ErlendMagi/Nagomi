// The passive-SRS scheduler: FSRS with implicit grades (locked decisions).
//
// Rules implemented here (all user-confirmed):
//  - First hear of a word per 4AM-local day = implicit Good review.
//  - Same-day repeats: totalReps++ and a tiny stability bonus only.
//  - Early hear: naturally small credit (FSRS uses actual elapsed time).
//  - Late hear: full elapsed-time credit — lateness is NEVER punished
//    (in passive mode lateness means the scheduler couldn't fit the word).
//  - While unheard past due: slow difficulty decay applied lazily at next hear.
//  - Long user absence: first re-exposure of low-R words graded Hard
//    (soft step-back, never a reset).
//  - Difficulty seeded from frequency rank at first hearing.
//  - Retention target fixed 90%.
//
// Pure module: no RN/Expo imports. Persistence is the caller's concern.

import {
  fsrs, createEmptyCard, Rating, State,
  type Card, type FSRS,
} from 'ts-fsrs'
import { SRS_CONFIG, type SrsConfig } from './config'
import { dayKey, dayKeyDiff } from './day'

export interface WordState {
  wordId: number            // vocab frequency rank (words.word_id)
  card: Card                // ts-fsrs card (due, stability, difficulty, ...)
  totalReps: number         // every hearing ever (feeds graduation + display)
  /**
   * Times the word's JAPANESE TEXT was displayed on a lit, foregrounded
   * screen. Furigana only fades after enough SEEN exposures — hearing a word
   * 30 times with the phone locked teaches the ears, not the eyes
   * (user rule, 2026-07-10). EN-audio graduation stays hearing-based.
   */
  totalSeens: number
  distinctDays: number      // days on which the word was heard >= once
  firstHeardAt: string | null // ISO
  lastHeardAt: string | null  // ISO
  lastHeardDayKey: string | null
  sameDayBonusCount: number // bonus applications today (reset on new day)
}

export interface HearResult {
  state: WordState
  kind: 'first_of_day' | 'same_day_repeat'
  gradedAs: 'good' | 'hard'
  wasDue: boolean
  daysLate: number          // >0 when heard after due
}

export function createWordState(wordId: number, now: Date): WordState {
  return {
    wordId,
    card: createEmptyCard(now),
    totalReps: 0,
    totalSeens: 0,
    distinctDays: 0,
    firstHeardAt: null,
    lastHeardAt: null,
    lastHeardDayKey: null,
    sameDayBonusCount: 0,
  }
}

export class Scheduler {
  private f: FSRS
  constructor(private cfg: SrsConfig = SRS_CONFIG, private vocabSize = 19946) {
    this.f = fsrs({ request_retention: cfg.requestRetention })
  }

  /** FSRS retrievability at `now` (0..1); 1 for未-reviewed cards. */
  retrievability(state: WordState, now: Date): number {
    if (state.card.state === State.New) return 1
    const r = this.f.get_retrievability(state.card, now, false)
    return typeof r === 'number' ? r : 1
  }

  /**
   * Register a hearing of the word (called at SENTENCE completion).
   * `lastSessionAt` = end of the user's previous listening session (for the
   * absence rule); null when this is their first session ever.
   */
  hear(state: WordState, now: Date, lastSessionAt: Date | null): HearResult {
    const todayKey = dayKey(now)
    const isFirstEver = state.totalReps === 0
    const dueAt = state.card.due
    const wasDue = !isFirstEver && dueAt.getTime() <= now.getTime()
    const daysLate = wasDue ? (now.getTime() - dueAt.getTime()) / 86_400_000 : 0

    // ---- Same-day repeat: totalReps + capped tiny stability bonus ----
    if (state.lastHeardDayKey === todayKey) {
      const next: WordState = { ...state, totalReps: state.totalReps + 1, lastHeardAt: now.toISOString() }
      if (state.sameDayBonusCount < this.cfg.sameDayRepeatBonusMax && next.card.state !== State.New) {
        const card = { ...next.card }
        card.stability = card.stability * this.cfg.sameDayRepeatStabilityBonus
        // shift due proportionally so the bonus is real but tiny
        const remainingMs = card.due.getTime() - now.getTime()
        if (remainingMs > 0) card.due = new Date(now.getTime() + remainingMs * this.cfg.sameDayRepeatStabilityBonus)
        next.card = card
        next.sameDayBonusCount = state.sameDayBonusCount + 1
      }
      return { state: next, kind: 'same_day_repeat', gradedAs: 'good', wasDue, daysLate }
    }

    // ---- First hear of the day: the scheduling review ----
    let card = { ...state.card }

    // Lazy overdue difficulty decay (the "hybrid" rule's unheard-decay half).
    if (wasDue && card.state !== State.New) {
      const bump = Math.min(this.cfg.overdueDifficultyPerDay * daysLate, this.cfg.overdueDifficultyCap)
      card.difficulty = Math.min(10, card.difficulty + bump)
    }

    // Absence rule: long user absence + word overdue by >N full intervals →
    // grade Hard once (soft step-back). Interval-ratio, not raw R (see config).
    let rating: Rating = Rating.Good
    let gradedAs: 'good' | 'hard' = 'good'
    if (
      lastSessionAt !== null &&
      (now.getTime() - lastSessionAt.getTime()) / 86_400_000 >= this.cfg.absenceDays &&
      card.state !== State.New &&
      wasDue &&
      daysLate > this.cfg.absenceOverdueIntervals * Math.max(1, card.stability)
    ) {
      rating = Rating.Hard
      gradedAs = 'hard'
    }

    const scheduled = this.f.next(card, now, rating)
    card = { ...scheduled.card }

    // Difficulty seeding on the very first review: blend FSRS init with rank.
    if (isFirstEver) {
      const pct = Math.min(1, Math.max(0, state.wordId / this.vocabSize))
      const seed = this.cfg.difficultySeedMid + this.cfg.difficultySeedSpan * (pct - 0.5)
      card.difficulty = Math.min(10, Math.max(1, (card.difficulty + seed) / 2))
    }

    const next: WordState = {
      ...state,
      card,
      totalReps: state.totalReps + 1,
      distinctDays: state.distinctDays + 1,
      firstHeardAt: state.firstHeardAt ?? now.toISOString(),
      lastHeardAt: now.toISOString(),
      lastHeardDayKey: todayKey,
      sameDayBonusCount: 0,
    }
    return { state: next, kind: 'first_of_day', gradedAs, wasDue, daysLate }
  }

  /**
   * Picker dueness weight (locked: reward scaled by closeness to due; overdue
   * words rise in priority). 0 for words not yet learnable/never heard is the
   * caller's concern; this scores existing states only.
   *   - not due yet: weight in (0,1) — grows as due date approaches
   *   - due/overdue: 1 + min(overdueRatio, cap)
   */
  duenessWeight(state: WordState, now: Date): number {
    if (state.card.state === State.New) return 0
    const due = state.card.due.getTime()
    const t = now.getTime()
    const intervalMs = Math.max(86_400_000, state.card.stability * 86_400_000)
    if (t >= due) {
      const overdueRatio = (t - due) / intervalMs
      return 1 + Math.min(overdueRatio, this.cfg.picker.overdueWeightCap)
    }
    // pre-due: proportional progress through the interval, quadratic so
    // "almost due" is worth much more than "just reviewed"
    const progress = 1 - (due - t) / intervalMs
    const p = Math.min(1, Math.max(0, progress))
    return p * p * 0.75 // pre-due tops out at 0.75 — always below a due word
  }

  /**
   * Projected recall probability after `extraDays` MORE days of waiting —
   * drives recovery-mode triage (postpone the stable, rescue the fragile).
   * Pure FSRS forgetting curve; no card state is touched.
   */
  projectRetrievability(stability: number, elapsedDays: number): number {
    const r = this.f.forgetting_curve(elapsedDays, Math.max(0.1, stability))
    return typeof r === 'number' ? r : 1
  }

  /** Days-since-first-heard for graduation checks. */
  daysSinceFirstHeard(state: WordState, now: Date): number {
    if (!state.firstHeardAt) return 0
    return dayKeyDiff(dayKey(new Date(state.firstHeardAt)), dayKey(now))
  }
}

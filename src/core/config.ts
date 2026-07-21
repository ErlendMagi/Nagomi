// Central tuning table for the passive-SRS engine.
// Every parameter the simulator may need to sweep lives HERE, not in code.
// (Plan risk #4 mitigation: mistuning is fixed by config, not refactor.)

export const SRS_CONFIG = {
  /** FSRS target retention — locked product decision: 90% fixed. */
  requestRetention: 0.90,

  /** Day boundary: local 4AM. A "day" is [04:00, 03:59:59]. */
  dayBoundaryHour: 4,

  /**
   * Same-day repeat hearings: first hear of the day is the scheduling review;
   * repeats multiply stability by this tiny bonus (locked: "~+2%") and bump
   * totalReps, nothing else.
   */
  sameDayRepeatStabilityBonus: 1.02,
  /** Cap on how many same-day repeats can earn the bonus (guards binge inflation). */
  sameDayRepeatBonusMax: 5,

  /**
   * Slow ease decay while a word sits unheard past due (locked "hybrid" rule):
   * difficulty += perDay * daysOverdue at the NEXT hearing, capped.
   * FSRS difficulty range is 1..10; +0.01/day ≈ +0.3 after a month overdue.
   */
  overdueDifficultyPerDay: 0.01,
  overdueDifficultyCap: 1.0,

  /**
   * Long-absence softening (locked): if the USER had no sessions for
   * `absenceDays`+ AND the word is overdue by more than `absenceOverdueIntervals`
   * full stability-intervals, its first re-exposure is graded Hard instead of
   * Good (soft step-back, never a reset). Interval-ratio is used instead of a
   * raw retrievability threshold because ts-fsrs v6's flat forgetting curve
   * makes absolute-R thresholds unreliable across card maturity.
   */
  absenceDays: 21,
  absenceOverdueIntervals: 2.0,

  /** Retrievability floor when crediting very-late reviews (prevents absurd jumps). */
  lateReviewRFloor: 0.30,

  /**
   * Difficulty seeding from frequency rank: D = mid + span*(percentile-0.5).
   * Rarer words start slightly harder. Applied once at first hearing.
   */
  difficultySeedMid: 5.0,
  difficultySeedSpan: 2.0,

  /** Graduation (EN scaffolding drops per word) — locked defaults + floors. */
  graduation: {
    defaultExposures: 30,
    defaultDays: 30,
    minExposures: 20,   // hard floor (Brown et al. 2008)
    maxExposures: 50,
    minDays: 21,        // hard floor (Cepeda et al. 2008)
    maxDays: 90,
    safePreset: { exposures: 40, days: 40 },
    /** Placement fast-track for the user's claimed-known frequency range. */
    fastTrack: { exposures: 6, days: 7 },
  },

  /** Picker scoring. */
  picker: {
    /** dueness weight = 1 + min(overdueRatio, cap); overdueRatio = daysOverdue / interval */
    overdueWeightCap: 2.0,
    /** multiplicative penalty when the conversation was heard recently */
    recentConvPenalty: 0.35,
    /** how recent counts as "recent" for the freshness penalty, in days */
    recentConvDays: 7,
    /**
     * Context-novelty discount: word contributions from an EVER-played
     * conversation count at this fraction, so never-heard contexts always
     * outrank repeats when available (the >=5-contexts-per-word principle).
     */
    repeatContextDiscount: 0.45,
    /** candidate cap per selection round */
    maxCandidates: 400,
    /**
     * Reinforcement mode (simulator-motivated, 2026-07): when more than
     * `maxInFlight` words are "in flight" (heard at least once but below
     * `inFlightRepFloor` reps), stop opening NEW conversations and instead
     * pick conversations that deepen in-flight words — concentrating exposure
     * so words actually reach graduation instead of spreading thin.
     * Set maxInFlight = Infinity to restore pure-dynamic intake.
     */
    maxInFlight: 1500,
    inFlightRepFloor: 10,
    /**
     * Sentence-length comfort (user rule 2026-07-14): the listener must hold
     * the whole sentence in memory until the translation arrives, so at EVERY
     * level the picker prefers conversations with a normal median sentence
     * length (median jp chars per spoken line, from content.db). Score
     * multiplier: 1.0 at or below idealMaxChars, falling linearly to
     * minFactor at hardMaxChars, clamped to minFactor beyond. The fresh-
     * content path (ContentDb.nextUnheard) additionally SKIPS conversations
     * with median > hardMaxChars outright — frequency order must never serve
     * a super-long-sentence outlier as new content. NULL/absent median
     * (legacy rows) = no penalty.
     */
    lengthComfort: { idealMaxChars: 18, hardMaxChars: 40, minFactor: 0.3 },
    /** density denominator = duration^exponent; 0.5 (√) is the validated default */
    durationExponent: 0.5,
    /**
     * Due-pressure (user report 2026-07-16: a 300-due morning queue was still
     * not cleared after a TWO-HOUR session — "due reviews must be
     * prioritized"). The dues path always runs first, but its per-candidate
     * variety/comfort discounts (novelty × recency × length × CI, each
     * 0.3–0.5) could make a 1-due fresh conversation outscore a 5-due
     * recently-played one — fine with a handful of dues, disastrous for
     * clearing a big queue. As the queue grows past startAt the picker
     * PROGRESSIVELY floors those combined discounts (never above 1) and
     * slides the duration exponent toward strict dues-per-minute, so
     * coverage-per-minute dominates until the queue is back under control.
     * At ≤ startAt dues behavior is byte-identical to the validated default.
     * Sim-validated 2026-07-16 (see dashboard): days-cleared at 120 min/day
     * jumps while graduated@24mo stays within gates.
     */
    duePressure: {
      /** queue size where pressure starts rising (≤ this: exactly the old behavior) */
      startAt: 30,
      /** queue size where clearing-efficiency fully dominates */
      fullAt: 150,
      /** floor of the combined variety/comfort factor product at full
       *  pressure. 0.5 shipped first; raised to 0.9 (user 2026-07-18: "I am
       *  supposed to focus on due reviews first" — finishing the goal with
       *  reviews left is not success): at 0.9 a mere 1.12× coverage edge
       *  wins, i.e. clearing-per-minute is essentially the only criterion
       *  while the queue is large; variety still tiebreaks equals and fully
       *  returns as the queue shrinks below startAt. */
      factorFloorAtFull: 0.9,
      /** RECENCY keeps a real (bounded) bite under pressure (user 2026-07-21:
       *  "I can actually recognize some sentences are reoccurring" — the 0.9
       *  factor floor left fresh contexts only a 1.12× edge, so the same
       *  greedy due-cover replayed verbatim every day; sim-verified: 15
       *  distinct conversations over 7 days). Freshness is floored SEPARATELY
       *  at this value and multiplies OUTSIDE the main floor: a conversation
       *  played within recentConvDays needs a 1/(this × factorFloorAtFull) ≈
       *  1.39× coverage edge to beat an equally dense unplayed one, so
       *  equal-efficiency covers rotate instead of recycling — while a truly
       *  denser conversation (the 2026-07-18 dues-first rule) still wins. */
      freshnessFloorAtFull: 0.8,
      /** durationExponent slides from durationExponent to this at full pressure */
      durationExponentAtFull: 1.0,
    },
    /**
     * Comprehensible-input comfort (user-approved 2026-07-15): prefer
     * conversations whose fraction of CI-KNOWN words (totalReps ≥ knownReps —
     * recognition, NOT graduation; the words-known calculator metric is
     * untouched) meets an ADAPTIVE target that rises with vocabulary size.
     * Anchors are MEASURED level-window percentiles of this corpus; at
     * hardKnownCount the user's 80%-minimum contract binds (measured first
     * achievable ≈ 8,000 known ranks). A soft factor, never a hard gate —
     * low-ratio conversations stay pickable for rare-word context variety
     * (user directive: variety must not deviate catastrophically, but the
     * experienced median should climb toward 0.9).
     */
    ciComfort: {
      knownReps: 8,
      /** tuned 0.35→0.5 (2026-07-15 sim): 0.35 cost 11% words-known@24mo; 0.5 recovers velocity while keeping the ratio climb */
      minFactor: 0.5,
      /** factor ramps from 1.0 at target down to minFactor at target−rampWidth */
      rampWidth: 0.25,
      hardKnownCount: 8000,
      hardMinRatio: 0.80,
      /** [knownCount, targetRatio] — measured window p50s, 2026-07-15 */
      anchors: [[500, 0.50], [1000, 0.57], [2000, 0.68], [4000, 0.79], [8000, 0.80]] as ReadonlyArray<readonly [number, number]>,
    },
  },

  /**
   * Review-backlog recovery ("welcome back" mode, user-approved 2026-07-14).
   * After an absence, the app measures the GAP EXCESS (words that came due
   * during the absence — a standing due pool is normal life) and, when it
   * exceeds a goal-day, activates an URGENCY-SCALED ladder of speed measures:
   *   recovery picker weights → aggressive EN-skip → EN audio rate
   *   (1.0 + 0.5·u, capped 1.5×) → at u ≥ introDropThreshold the EN intro
   *   narration is dropped entirely (the previous conversation's closing
   *   chime still marks the boundary between conversations).
   * JAPANESE AUDIO SPEED IS NEVER TOUCHED (user directive).
   * Fit-today-first: the minimal urgency that clears everything within the
   * daily goal wins; only when even u=1 cannot fit does the plan spread the
   * backlog over up to maxHorizonDays via fragility-ordered tier slicing
   * (postpone the most stable words — FSRS-6: S=60d loses just 0.6pp recall
   * at +5 days; S=3d would lose 8pp, so the fragile go first).
   * word_state.due_at is NEVER written by recovery: slicing is selection-layer
   * ordering over the 4AM-materialized due set (locked rule preserved).
   */
  recovery: {
    /** absences shorter than this are normal life, never "recovery" */
    minGapDays: 2,
    /** activate only when gap-excess minutes exceed this × goalMinutes */
    triggerFactor: 1.0,
    /** exit (hysteresis) when remaining excess < this × goalMinutes */
    exitFactor: 0.5,
    minHorizonDays: 2,
    /** +5d postponement costs −0.6pp (S=60d) … −2.2pp (S=14d) — the sanctioned "small penalty" */
    maxHorizonDays: 5,
    /** EN clips only; 1.0 + (enRateMax−1)·urgency; JP never rate-shifted */
    enRateMax: 1.5,
    /** at urgency ≥ this, drop intro_en — the closing chime still marks conversation boundaries */
    introDropThreshold: 0.85,
    /** recovery EN-skip: skip EN when ≥ this fraction of line words graduated (and no tier-1 word) */
    enSkipGraduatedFraction: 0.8,
    /** flat selection-efficiency gain from the recovery picker weights (measured 15-20%) */
    pickerGainFactor: 1.18,
    assess: {
      /** dry-run cap; beyond this the banner says "240+ min" */
      maxAssessMinutes: 240,
      /** intro EN+JP + chime overhead per conversation, absent from duration_sec */
      convOverheadSec: 9,
    },
    picker: {
      /** vs 0.45: replays are comprehended + due-dense — measured 15-20% faster clearance */
      repeatContextDiscount: 0.85,
      /** vs 0.35: the 8-conv exclusion ring already prevents immediate repeats */
      recentConvPenalty: 0.7,
      /** vs 0.5 (√): exponent 1.0 = strict dues-per-minute maximization */
      durationExponent: 1.0,
    },
  },

  /** Streak (locked): 1 completed conversation keeps the streak. */
  streak: {
    // freeze economy (user 2026-07-16: "30 days to get one freeze is fkin
    // stupid, 7 days at max. Max 2 freezes in an inventory."): recurring —
    // every 7 consecutive streak days earns +1 freeze, inventory capped at 2,
    // start with 1. Freezes stay precious enough to matter, common enough to
    // actually protect a real week.
    freezesGrantedAtStart: 1,
    /** a freeze is earned every N consecutive streak days (7, 14, 21, …) */
    freezeEveryDays: 7,
    /** inventory cap — grants beyond this evaporate */
    maxFreezes: 2,
    repairWindowDays: 2,
  },

  /** Fixed, unchangeable daily minimum listening goal (minutes). */
  dailyMinimumMinutes: 10,
} as const

export type SrsConfig = typeof SRS_CONFIG

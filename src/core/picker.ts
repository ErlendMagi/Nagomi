// Conversation picker (locked decisions):
//  - Dues-first: score candidate conversations by the summed dueness weight of
//    the due words they contain, densified by duration (the user's "eliminate
//    dues efficiently" requirement), with a freshness preference for
//    conversations not recently played (context variety).
//  - When no dues remain: next unheard conversation in ord (= frequency) order.
//  - Repeats allowed (needed for rare words); recency only penalizes, never bans.
//  - Listening is UNCAPPED: the picker never returns "nothing" until the entire
//    corpus is exhausted of both dues and unheard conversations — after which
//    it recycles the least-recently-played conversations containing the
//    soonest-due words.
//
// Pure logic: data access goes through the ContentIndex interface so the same
// picker runs on expo-sqlite (app), node:sqlite (simulator), or fixtures (tests).

import { SRS_CONFIG } from './config'
import { ciComfortFactor } from './ci'

export interface ConvMeta {
  convId: string
  ord: number
  durationSec: number
  /** median jp chars per spoken line (content.db); absent on legacy rows/indexes */
  medianLineChars?: number
}

export interface ContentIndex {
  /** conversations containing ANY of these word ids → their due-word lists */
  convsContaining(wordIds: number[]): Map<string, number[]>
  convMeta(convId: string): ConvMeta
  /**
   * first conversation by ord strictly after `afterOrd` that is not in
   * `exclude`. Implementations with length data (ContentDb) also skip
   * median_line_chars > lengthComfort.hardMaxChars — fresh content must
   * never be a super-long-sentence outlier.
   */
  nextUnheard(afterOrd: number, exclude: Set<string>): ConvMeta | null
  /**
   * OPTIONAL bulk ord lookup (one query instead of thousands) so the dues
   * path can window-filter its candidate pool BEFORE the scoring cap.
   * Implementations without it fall back to per-conv convMeta reads.
   */
  convOrds?(convIds: string[]): Map<string, number>
  /**
   * OPTIONAL comprehensible-input new-content selection: among unheard convs
   * with ord in (afterOrd, maxOrd], pick the highest CI-ratio one that still
   * TEACHES something (ratio < 1), tiebreak by ord. Callers fall back to
   * nextUnheard when unimplemented or when it returns null.
   */
  bestUnheardInWindow?(
    afterOrd: number, maxOrd: number, exclude: Set<string>,
    ciRatioOf: (convId: string) => number | undefined,
  ): ConvMeta | null
  /** least-recently-played conversations, for the recycle path */
  leastRecentlyPlayed(limit: number): ConvMeta[]
}

export interface PickerContext {
  now: Date
  /** dueness weight per due word id (from Scheduler.duenessWeight, >0 entries only) */
  dueWeights: Map<number, number>
  /** convId → last played at (ms epoch); absent = never played */
  lastPlayed: Map<string, number>
  /** highest ord the user has ever heard (frontier for new content) */
  frontierOrd: number
  /**
   * Reinforcement mode: word ids heard but still below the in-flight rep floor.
   * When its size exceeds picker.maxInFlight, the NEW-content path is gated and
   * these words are targeted instead (depth over breadth).
   */
  inFlightWords?: Map<number, number> // wordId -> weight (e.g. remaining reps needed)
  /**
   * Conversations that must NOT be picked this round: the conversation that
   * JUST completed (immediate repeats feel broken even when due-density says
   * otherwise — user report 2026-07-10) plus any conv found unplayable this
   * session. Recency penalties discourage; this excludes outright.
   */
  excludeConvIds?: Set<string>
  /**
   * Recovery-mode selection constants (core/recovery.ts). Absent = the
   * validated defaults from SRS_CONFIG.picker — byte-identical behavior.
   */
  pickerParams?: PickerParams
  /**
   * Comprehensible-input preference (core/ci.ts): fraction of a conv's words
   * the learner CI-knows (totalReps ≥ ciComfort.knownReps). Absent = feature
   * off (fresh installs, cold simulators) — behavior unchanged.
   */
  ciRatioOf?: (convId: string) => number | undefined
  /** adaptive target ratio from ciTargetFor(knownCount) */
  ciTarget?: number
}

/**
 * Level window: an UNHEARD conversation may only be picked when its ord is
 * within this distance past the frontier. Ord order tracks difficulty
 * (coverage-ordered corpus: ord 1-2000 lines have median 12-16 chars; ord
 * 3000+ reaches 60-140-char formal debate) — without the window, a dues pick
 * could drop a beginner into far-future content just because it shares
 * particles (user report 2026-07-13: "sentences very very long").
 */
export const UNHEARD_ORD_WINDOW = 300

/**
 * Sentence-length comfort factor (user rule 2026-07-14: SHORT sentences for
 * beginners, and at every level prefer normal median sentence length — the
 * listener holds the whole sentence until the translation arrives).
 * 1.0 at or below idealMaxChars, linear down to minFactor at hardMaxChars,
 * clamped to minFactor beyond. Undefined median (legacy rows) = no penalty.
 */
export function lengthComfortFactor(medianLineChars: number | undefined): number {
  if (medianLineChars === undefined) return 1
  const { idealMaxChars, hardMaxChars, minFactor } = SRS_CONFIG.picker.lengthComfort
  if (medianLineChars <= idealMaxChars) return 1
  const t = (medianLineChars - idealMaxChars) / (hardMaxChars - idealMaxChars)
  return Math.max(minFactor, 1 - t * (1 - minFactor))
}

export interface Pick {
  convId: string
  reason: 'dues' | 'reinforce' | 'new' | 'recycle'
  score: number
  dueWordCount: number
}

/**
 * Due-pressure 0..1 (user report 2026-07-16: 300 morning dues survived a
 * two-hour session). 0 at ≤ startAt dues — the validated variety-first
 * behavior, untouched. Rises linearly to 1 at ≥ fullAt, where the dues path
 * floors its variety/comfort discounts and scores by strict dues-per-minute:
 * with a big queue, a conversation covering 5 dues must never lose to a
 * 1-due conversation over recency or comprehension comfort.
 */
export function duePressure(dueCount: number): number {
  const { startAt, fullAt } = SRS_CONFIG.picker.duePressure
  if (dueCount <= startAt) return 0
  if (dueCount >= fullAt) return 1
  return (dueCount - startAt) / (fullAt - startAt)
}

/** the three selection constants recovery mode overrides (see core/recovery.ts) */
export interface PickerParams {
  repeatContextDiscount: number
  recentConvPenalty: number
  /** density denominator = duration^exponent (0.5 = validated √ default; 1.0 = strict dues-per-minute) */
  durationExponent: number
}

function bestConvFor(
  index: ContentIndex,
  weights: Map<number, number>,
  lastPlayed: Map<string, number>,
  now: Date,
  reason: Pick['reason'],
  exclude: Set<string> | undefined,
  maxUnheardOrd: number,
  params?: PickerParams,
  ciRatioOf?: (convId: string) => number | undefined,
  ciTarget?: number,
  /** due-pressure 0..1 — only the dues path passes non-zero (see duePressure) */
  pressure = 0,
): Pick | null {
  const cfg = SRS_CONFIG.picker
  const repeatDiscount = params?.repeatContextDiscount ?? cfg.repeatContextDiscount
  const recentPenalty = params?.recentConvPenalty ?? cfg.recentConvPenalty
  // explicit recovery params own the exponent; otherwise due-pressure slides
  // it from the validated √ default toward strict dues-per-minute
  const durExponent = params?.durationExponent
    ?? (cfg.durationExponent + pressure * (cfg.duePressure.durationExponentAtFull - cfg.durationExponent))
  // floor for the combined variety/comfort product under pressure (0 = no floor)
  const factorFloor = pressure * cfg.duePressure.factorFloorAtFull
  const candidates = index.convsContaining([...weights.keys()])
  // Level-window BEFORE the cap (user 2026-07-21: the same conversations
  // recycled daily): capping the hit-sorted list first handed nearly every
  // slot to long out-of-window conversations that the scoring loop then
  // skipped — for a beginner the scored pool collapsed from ~300 pickable
  // conversations to a few dozen. Filter to pickable candidates (ever played,
  // or unheard within the window) so every capped slot is scoreable.
  const ords = index.convOrds?.([...candidates.keys()])
  const pickable = [...candidates].filter(([convId]) =>
    lastPlayed.has(convId)
    || (ords ? (ords.get(convId) ?? Infinity) : index.convMeta(convId).ord) <= maxUnheardOrd)
  // The scoring cap must take the candidates with the MOST target-word hits,
  // not the first N in map order — insertion order follows conv_id, which
  // systematically biased picks toward the lowest-id conversations.
  const capped = pickable
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, cfg.maxCandidates * 4)
  let best: Pick | null = null
  for (const [convId, wordIds] of capped) {
    if (exclude?.has(convId)) continue
    const meta = index.convMeta(convId)
    // level window: never surface unheard content far past the frontier
    if (!lastPlayed.has(convId) && meta.ord > maxUnheardOrd) continue

    // Context novelty (the ">=5 contexts per word" principle as a scoring
    // signal): a conversation the user has NEVER played is a brand-new
    // context for every target word in it — its word contributions count
    // in full. A previously-played conversation is a repeat context — its
    // contributions are discounted, so fresh contexts win whenever they
    // exist and repeats only happen when a word's contexts are exhausted.
    const everPlayed = lastPlayed.has(convId)
    const novelty = everPlayed ? repeatDiscount : 1

    let sum = 0
    for (const w of wordIds) sum += weights.get(w) ?? 0
    if (sum <= 0) continue

    // recency: additional penalty when played within the last few days
    const last = lastPlayed.get(convId)
    const recent = last !== undefined && (now.getTime() - last) < cfg.recentConvDays * 86_400_000
    const freshness = recent ? recentPenalty : 1

    // sentence-length comfort: applies to heard AND unheard candidates alike
    const comfort = lengthComfortFactor(meta.medianLineChars)

    // comprehensible-input comfort: prefer conversations the learner mostly
    // understands (soft — variety picks stay possible, just discounted)
    const ci = ciRatioOf && ciTarget !== undefined
      ? ciComfortFactor(ciRatioOf(convId), ciTarget) : 1

    // density: target-words per unit time. Under due-pressure the combined
    // novelty/comfort/CI discounts are floored so due COVERAGE dominates — a
    // 2×-coverage conversation then always wins, while equal-coverage
    // candidates still order by the discounts. FRESHNESS floors separately
    // and multiplies OUTSIDE that floor (user 2026-07-21: the same greedy
    // due-cover replayed verbatim daily once the floor erased recency):
    // recently-played candidates keep a bounded handicap under pressure, so
    // equal-efficiency covers rotate through fresh contexts day over day.
    const pressuredFreshness = Math.max(freshness, pressure * cfg.duePressure.freshnessFloorAtFull)
    const factors = Math.max(novelty * comfort * ci, factorFloor) * pressuredFreshness
    const score = (sum * factors) / Math.pow(Math.max(30, meta.durationSec), durExponent)
    if (!best || score > best.score) best = { convId, reason, score, dueWordCount: wordIds.length }
  }
  return best
}

export function pickNextConversation(index: ContentIndex, ctx: PickerContext): Pick | null {
  const cfg = SRS_CONFIG.picker
  const exclude = ctx.excludeConvIds ?? new Set<string>()
  const maxUnheardOrd = ctx.frontierOrd + UNHEARD_ORD_WINDOW

  // ---- Dues path ----
  if (ctx.dueWeights.size > 0) {
    const best = bestConvFor(index, ctx.dueWeights, ctx.lastPlayed, ctx.now, 'dues', exclude, maxUnheardOrd, ctx.pickerParams, ctx.ciRatioOf, ctx.ciTarget,
      duePressure(ctx.dueWeights.size))
    if (best) return best
  }

  // ---- Reinforcement path: too many words in flight → deepen, don't widen ----
  const inFlight = ctx.inFlightWords
  if (inFlight && inFlight.size > cfg.maxInFlight) {
    const best = bestConvFor(index, inFlight, ctx.lastPlayed, ctx.now, 'reinforce', exclude, maxUnheardOrd, ctx.pickerParams, ctx.ciRatioOf, ctx.ciTarget)
    if (best) return best
  }

  // ---- New-content path (dues exhausted): comprehensibility-first within the
  // level window when ratio data exists; strict frequency order otherwise ----
  const next = (ctx.ciRatioOf && index.bestUnheardInWindow)
    ? index.bestUnheardInWindow(ctx.frontierOrd, maxUnheardOrd, exclude, ctx.ciRatioOf)
      ?? index.nextUnheard(ctx.frontierOrd, exclude)
    : index.nextUnheard(ctx.frontierOrd, exclude)
  if (next) return { convId: next.convId, reason: 'new', score: 0, dueWordCount: 0 }

  // ---- Recycle path (whole corpus heard, nothing due): least-recently-played ----
  for (const lru of index.leastRecentlyPlayed(1 + exclude.size)) {
    if (!exclude.has(lru.convId)) return { convId: lru.convId, reason: 'recycle', score: 0, dueWordCount: 0 }
  }

  return null
}

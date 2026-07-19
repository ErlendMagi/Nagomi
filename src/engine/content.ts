// ContentDb — read-only adapter over the prebuilt content.db (app asset),
// implementing the picker's ContentIndex with the SAME semantics the
// simulator validated (convsContaining = ANY word match; nextUnheard = first
// ord past the frontier; leastRecentlyPlayed = recycle path).
//
// Pure SQL through SqlDriver: runs on expo-sqlite (app) and node:sqlite (tests).

import { SRS_CONFIG } from '../core/config'
import type { SqlDriver } from '../core/db'
import type { ContentIndex, ConvMeta } from '../core/picker'

export interface WordInfo {
  wordId: number
  jp: string
  gloss1: string | null
  gloss2: string | null
  contexts: number
  learnable: boolean
}

export interface ConvInfo extends ConvMeta {
  tier: number
  lineCount: number
  wordCount: number
  cast: string[]
  context: string
  ambient: string | null
  bundleBytes: number
}

export class ContentDb implements ContentIndex {
  constructor(
    private d: SqlDriver,
    /** conv → last played (ms); comes from UserDB.lastPlayedMap (separate db file) */
    private lastPlayedProvider: () => Map<string, number>,
  ) {}

  convsContaining(wordIds: number[]): Map<string, number[]> {
    const out = new Map<string, number[]>()
    for (let i = 0; i < wordIds.length; i += 900) { // SQLite param limit safety
      const slice = wordIds.slice(i, i + 900)
      const rows = this.d.all<{ conv_id: string, word_id: number }>(
        `SELECT conv_id, word_id FROM conv_words WHERE word_id IN (${slice.map(() => '?').join(',')})`,
        slice,
      )
      for (const r of rows) {
        let list = out.get(r.conv_id)
        if (!list) { list = []; out.set(r.conv_id, list) }
        list.push(r.word_id)
      }
    }
    return out
  }

  convMeta(convId: string): ConvMeta {
    const r = this.d.get<{ ord: number, duration_sec: number, median_line_chars: number | null }>(
      'SELECT ord, duration_sec, median_line_chars FROM conversations WHERE conv_id = ?', [convId])
    if (!r) throw new Error(`unknown conversation: ${convId}`)
    return { convId, ord: r.ord, durationSec: r.duration_sec, medianLineChars: r.median_line_chars ?? undefined }
  }

  nextUnheard(afterOrd: number, exclude: Set<string>): ConvMeta | null {
    let cursor = afterOrd
    for (;;) {
      // Length rule: NEVER serve a super-long-sentence outlier as fresh
      // content (NULL median = legacy row, allowed through).
      const rows = this.d.all<{ conv_id: string, ord: number, duration_sec: number, median_line_chars: number | null }>(
        `SELECT conv_id, ord, duration_sec, median_line_chars FROM conversations
         WHERE ord > ? AND (median_line_chars IS NULL OR median_line_chars <= ?)
         ORDER BY ord LIMIT 100`,
        [cursor, SRS_CONFIG.picker.lengthComfort.hardMaxChars],
      )
      if (rows.length === 0) return null
      for (const r of rows) {
        if (!exclude.has(r.conv_id)) {
          return { convId: r.conv_id, ord: r.ord, durationSec: r.duration_sec, medianLineChars: r.median_line_chars ?? undefined }
        }
      }
      cursor = rows[rows.length - 1].ord
    }
  }

  /**
   * Comprehensible-input new-content pick: among unheard (not-excluded)
   * conversations in the level window (afterOrd, maxOrd], the highest
   * CI-ratio one that still TEACHES (ratio < 1); tiebreak by ord. Length
   * rule stays in force. null = window empty → caller falls back to
   * nextUnheard's endless walk.
   */
  bestUnheardInWindow(
    afterOrd: number, maxOrd: number, exclude: Set<string>,
    ciRatioOf: (convId: string) => number | undefined,
  ): ConvMeta | null {
    // NEAREST slice of the window only: choosing the easiest conv anywhere in
    // a 300-ord window stalls the frontier (measured −11% words-known@24mo);
    // ratio-ranking the nearest ~60 keeps comprehensibility AND progression.
    const rows = this.d.all<{ conv_id: string, ord: number, duration_sec: number, median_line_chars: number | null }>(
      `SELECT conv_id, ord, duration_sec, median_line_chars FROM conversations
       WHERE ord > ? AND ord <= ? AND (median_line_chars IS NULL OR median_line_chars <= ?)
       ORDER BY ord LIMIT 60`,
      [afterOrd, maxOrd, SRS_CONFIG.picker.lengthComfort.hardMaxChars],
    )
    let best: { meta: ConvMeta, ratio: number } | null = null
    for (const r of rows) {
      if (exclude.has(r.conv_id)) continue
      const ratio = ciRatioOf(r.conv_id)
      if (ratio === undefined || ratio >= 1) continue // unknown data or teaches nothing
      if (!best || ratio > best.ratio) {
        best = {
          meta: { convId: r.conv_id, ord: r.ord, durationSec: r.duration_sec, medianLineChars: r.median_line_chars ?? undefined },
          ratio,
        }
      }
    }
    return best?.meta ?? null
  }

  leastRecentlyPlayed(limit: number): ConvMeta[] {
    const lp = this.lastPlayedProvider()
    const rows = this.d.all<{ conv_id: string, ord: number, duration_sec: number, median_line_chars: number | null }>(
      'SELECT conv_id, ord, duration_sec, median_line_chars FROM conversations')
    return rows
      .sort((a, b) => (lp.get(a.conv_id) ?? 0) - (lp.get(b.conv_id) ?? 0))
      .slice(0, limit)
      .map(r => ({ convId: r.conv_id, ord: r.ord, durationSec: r.duration_sec, medianLineChars: r.median_line_chars ?? undefined }))
  }

  // ---- beyond ContentIndex: lookups for the session/UI ----

  convInfo(convId: string): ConvInfo | undefined {
    const r = this.d.get<any>('SELECT * FROM conversations WHERE conv_id = ?', [convId])
    if (!r) return undefined
    return {
      convId: r.conv_id, ord: r.ord, durationSec: r.duration_sec,
      tier: r.tier, lineCount: r.line_count, wordCount: r.word_count,
      cast: JSON.parse(r.cast ?? '[]'), context: r.context,
      ambient: r.ambient ?? null, bundleBytes: r.bundle_bytes,
    }
  }

  word(wordId: number): WordInfo | undefined {
    const r = this.d.get<any>('SELECT * FROM words WHERE word_id = ?', [wordId])
    if (!r) return undefined
    return {
      wordId: r.word_id, jp: r.jp, gloss1: r.gloss1 ?? null, gloss2: r.gloss2 ?? null,
      contexts: r.contexts, learnable: r.learnable === 1,
    }
  }

  learnableSet(): Set<number> {
    const rows = this.d.all<{ word_id: number }>('SELECT word_id FROM words WHERE learnable = 1')
    return new Set(rows.map(r => r.word_id))
  }

  totalConversations(): number {
    return (this.d.get<{ n: number }>('SELECT COUNT(*) AS n FROM conversations')?.n) ?? 0
  }

  /** conversations containing this word (CI known-count incremental updates) */
  convsOf(wordId: number): string[] {
    return this.d.all<{ conv_id: string }>(
      'SELECT conv_id FROM conv_words WHERE word_id = ?', [wordId]).map(r => r.conv_id)
  }

  /** conv_id → distinct-learnable word count (CI ratio denominators) */
  wordCounts(): Map<string, number> {
    const rows = this.d.all<{ conv_id: string, word_count: number }>(
      'SELECT conv_id, word_count FROM conversations')
    return new Map(rows.map(r => [r.conv_id, r.word_count]))
  }

  /** first N conversation ids in ord (= frequency) order, for offline packs */
  firstNConvIds(n: number): string[] {
    return this.d.all<{ conv_id: string }>(
      'SELECT conv_id FROM conversations ORDER BY ord LIMIT ?', [n]).map(r => r.conv_id)
  }
}

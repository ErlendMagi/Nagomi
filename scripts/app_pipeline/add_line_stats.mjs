#!/usr/bin/env node
// Sentence-length stats — adds conversations.median_line_chars to content.db.
//
// User rule (2026-07-14): the listener must hold the whole sentence until the
// translation arrives, so the picker needs to know each conversation's TYPICAL
// sentence length. Metric: median Unicode code points of `jp` per spoken line
// (nonverbal lines excluded; whitespace stripped; punctuation kept — this
// matches the corpus analysis behind picker.ts's UNHEARD_ORD_WINDOW comment,
// "ord 1-2000 lines have median 12-16 chars").
//
// Idempotent: checks pragma table_info before ALTER, so it can run after every
// build_content_db.mjs rebuild. Finishes by copying data/derived/content.db
// over assets/content.db (the app re-provisions via the asset-hash stamp).
// Uses node:sqlite (built into Node 22.5+) — no native npm deps.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { DatabaseSync } from 'node:sqlite'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const DERIVED = path.join(ROOT, 'data', 'derived')
const LINES = path.join(DERIVED, 'lines')
const DB_PATH = path.join(DERIVED, 'content.db')
const ASSET_DB_PATH = path.join(ROOT, 'assets', 'content.db')

/** spoken length: code points of jp minus whitespace (punctuation kept) */
function lineChars(jp) {
  return [...jp.replace(/\s+/gu, '')].length
}

/** median of a non-empty number array (even count → mean of the two middles) */
function median(nums) {
  const s = [...nums].sort((a, b) => a - b)
  const mid = s.length >> 1
  return s.length % 2 === 1 ? s[mid] : (s[mid - 1] + s[mid]) / 2
}

const db = new DatabaseSync(DB_PATH)

const cols = db.prepare('PRAGMA table_info(conversations)').all().map(c => c.name)
if (!cols.includes('median_line_chars')) {
  db.exec('ALTER TABLE conversations ADD COLUMN median_line_chars REAL')
}

const convIds = db.prepare('SELECT conv_id FROM conversations ORDER BY conv_id').all().map(r => r.conv_id)
const upd = db.prepare('UPDATE conversations SET median_line_chars = ? WHERE conv_id = ?')

const medians = []
let missingFiles = 0
let noSpokenLines = 0
db.exec('BEGIN')
for (const id of convIds) {
  const file = path.join(LINES, `${id}.json`)
  if (!fs.existsSync(file)) { missingFiles++; upd.run(null, id); continue }
  const f = JSON.parse(fs.readFileSync(file, 'utf8'))
  const lens = f.lines
    .filter(l => !l.nonverbal)
    .map(l => lineChars(l.jp ?? ''))
    .filter(n => n > 0)
  if (lens.length === 0) { noSpokenLines++; upd.run(null, id); continue }
  const m = Math.round(median(lens) * 10) / 10
  medians.push(m)
  upd.run(m, id)
}
db.exec('COMMIT')
db.close()

fs.copyFileSync(DB_PATH, ASSET_DB_PATH)

const sorted = [...medians].sort((a, b) => a - b)
const pct = p => sorted[Math.min(sorted.length - 1, Math.floor(p * sorted.length))]
console.log(JSON.stringify({
  conversations: convIds.length,
  withMedian: medians.length,
  missingLineFiles: missingFiles,
  noSpokenLines,
  medianOfMedians_p50: pct(0.50),
  p90: pct(0.90),
  p99: pct(0.99),
  max: sorted[sorted.length - 1],
  over18: sorted.filter(m => m > 18).length,
  over40: sorted.filter(m => m > 40).length,
  assetCopied: ASSET_DB_PATH,
}, null, 2))

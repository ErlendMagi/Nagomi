#!/usr/bin/env node
// M1.3 — content.db builder (ships as a read-only app asset).
//
// Tables:
//   words(word_id=rank PK, jp, gloss1, gloss2, contexts, learnable)
//     learnable=0 for tokenizer-fragment entries (single chars with zero
//     conversation contexts) — excluded from scheduling and progress math.
//   conversations(conv_id PK, ord, tier, line_count, word_count, cast, context,
//     ambient, duration_sec, bundle_bytes)
//   conv_words(conv_id, word_id) + index on word_id  ← the picker's inverted index
//
// Duration derived from clip bytes at 96kbps CBR (mp3) + wav actual (silence beats).
// Uses node:sqlite (built into Node 22.5+) — no native npm deps.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { DatabaseSync } from 'node:sqlite'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const DERIVED = path.join(ROOT, 'data', 'derived')
const LINES = path.join(DERIVED, 'lines')
const AUDIO = path.join(ROOT, 'audio')
const DB_PATH = path.join(DERIVED, 'content.db')

fs.rmSync(DB_PATH, { force: true })
const db = new DatabaseSync(DB_PATH)

db.exec(`
  PRAGMA journal_mode = OFF;
  PRAGMA synchronous = OFF;
  CREATE TABLE words (
    word_id INTEGER PRIMARY KEY,
    jp TEXT NOT NULL,
    gloss1 TEXT,
    gloss2 TEXT,
    contexts INTEGER NOT NULL DEFAULT 0,
    learnable INTEGER NOT NULL DEFAULT 1
  );
  CREATE TABLE conversations (
    conv_id TEXT PRIMARY KEY,
    ord INTEGER NOT NULL,
    tier INTEGER NOT NULL,
    line_count INTEGER NOT NULL,
    word_count INTEGER NOT NULL,
    cast TEXT NOT NULL,
    context TEXT NOT NULL,
    ambient TEXT,
    duration_sec REAL NOT NULL,
    bundle_bytes INTEGER NOT NULL DEFAULT 0
  );
  CREATE TABLE conv_words (
    conv_id TEXT NOT NULL,
    word_id INTEGER NOT NULL,
    PRIMARY KEY (conv_id, word_id)
  ) WITHOUT ROWID;
`)

const words = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'vocab', 'words.json'), 'utf8'))
const canonical = JSON.parse(fs.readFileSync(path.join(DERIVED, 'canonical.json'), 'utf8'))

// Pass 1: conv rows + conv_words + accumulate word contexts
const insConv = db.prepare(`INSERT INTO conversations VALUES (?,?,?,?,?,?,?,?,?,?)`)
const insCW = db.prepare(`INSERT OR IGNORE INTO conv_words VALUES (?,?)`)
const contexts = new Map()

let convCount = 0
db.exec('BEGIN')
for (const { id } of canonical) {
  const f = JSON.parse(fs.readFileSync(path.join(LINES, `${id}.json`), 'utf8'))
  const manifest = JSON.parse(fs.readFileSync(path.join(AUDIO, id, 'manifest.json'), 'utf8'))

  let durationSec = 0
  for (const c of manifest.clips) {
    if (c.file.endsWith('.wav')) durationSec += 0.8 // silence beats are 800ms
    else durationSec += (c.bytes * 8) / 96000       // 96kbps CBR mp3
  }

  const convWordSet = new Set()
  for (const line of f.lines) for (const r of line.words) convWordSet.add(r)

  insConv.run(
    id,
    Number(id.replace(/\D/g, '')),
    f.tier,
    f.lines.length,
    convWordSet.size,
    JSON.stringify(f.cast),
    f.context,
    f.ambient,
    Math.round(durationSec * 10) / 10,
    0, // bundle_bytes filled by bundle builder
  )
  for (const r of convWordSet) {
    insCW.run(id, r)
    contexts.set(r, (contexts.get(r) ?? 0) + 1)
  }
  convCount++
}
db.exec('COMMIT')

// Pass 2: words
const insWord = db.prepare(`INSERT INTO words VALUES (?,?,?,?,?,?)`)
db.exec('BEGIN')
let learnable = 0
for (const w of words) {
  const ctx = contexts.get(w.rank) ?? 0
  const isLearnable = ctx > 0 ? 1 : 0
  learnable += isLearnable
  insWord.run(w.rank, w.jp, w.t1 ?? null, w.t2 ?? null, ctx, isLearnable)
}
db.exec('COMMIT')
db.exec('CREATE INDEX idx_cw_word ON conv_words(word_id); CREATE INDEX idx_conv_ord ON conversations(ord);')
db.exec('VACUUM')

const stats = {
  conversations: convCount,
  words: words.length,
  learnable,
  convWordRows: db.prepare('SELECT COUNT(*) AS n FROM conv_words').get().n,
  totalHours: db.prepare('SELECT SUM(duration_sec)/3600.0 AS h FROM conversations').get().h,
}
db.close()
stats.dbBytes = fs.statSync(DB_PATH).size
console.log(JSON.stringify(stats, null, 2))

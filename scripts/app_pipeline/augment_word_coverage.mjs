#!/usr/bin/env node
// M1.2b — Coverage augmentation.
// Kuromoji token-matching misses vocab entries whose segmentation differs
// (compounds, conjugation targets, katakana names). The authoring pipeline
// guaranteed substring presence (>=5 contexts) for every vocab word, so for
// words that token-matching left under-covered (<5 conv contexts), fall back
// to SUBSTRING matching per line — restricted to those words only, and only
// words of length >= 2 (single-char words are reliably token-matched and
// substring-matching them would false-positive everywhere).
//
// Rewrites data/derived/lines/<id>.json in place (adds ranks to line.words;
// jpTokens untouched — display highlighting simply won't underline fallback
// words, acceptable v1 tradeoff).

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const DERIVED = path.join(ROOT, 'data', 'derived')
const LINES = path.join(DERIVED, 'lines')

const words = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'vocab', 'words.json'), 'utf8'))
const canonical = JSON.parse(fs.readFileSync(path.join(DERIVED, 'canonical.json'), 'utf8'))

// First pass: current per-word conv coverage from the tokenized lines.
console.log('measuring current coverage...')
const convsByWord = new Map()
for (const { id } of canonical) {
  const f = JSON.parse(fs.readFileSync(path.join(LINES, `${id}.json`), 'utf8'))
  const ranksInConv = new Set()
  for (const line of f.lines) for (const r of line.words) ranksInConv.add(r)
  for (const r of ranksInConv) {
    if (!convsByWord.has(r)) convsByWord.set(r, 0)
    convsByWord.set(r, convsByWord.get(r) + 1)
  }
}

const TARGET_CONTEXTS = 5
const fallbackWords = words.filter(w =>
  w.jp.length >= 2 && (convsByWord.get(w.rank) ?? 0) < TARGET_CONTEXTS
)
console.log(`fallback set: ${fallbackWords.length} words (under ${TARGET_CONTEXTS} token-matched contexts, len>=2)`)

// Sort longest-first so 日本航空 wins before 日本 (though both may legitimately match).
fallbackWords.sort((a, b) => b.jp.length - a.jp.length)

let patchedLines = 0, addedRefs = 0
for (const { id } of canonical) {
  const p = path.join(LINES, `${id}.json`)
  const f = JSON.parse(fs.readFileSync(p, 'utf8'))
  let dirty = false
  for (const line of f.lines) {
    if (line.jpSilence) continue
    const have = new Set(line.words)
    let lineAdded = false
    for (const w of fallbackWords) {
      if (!have.has(w.rank) && line.jp.includes(w.jp)) {
        line.words.push(w.rank)
        have.add(w.rank)
        addedRefs++
        lineAdded = true
      }
    }
    if (lineAdded) { line.words.sort((a, b) => a - b); patchedLines++; dirty = true }
  }
  if (dirty) fs.writeFileSync(p, JSON.stringify(f))
}

// Re-measure
const convsByWord2 = new Map()
for (const { id } of canonical) {
  const f = JSON.parse(fs.readFileSync(path.join(LINES, `${id}.json`), 'utf8'))
  const ranksInConv = new Set()
  for (const line of f.lines) for (const r of line.words) ranksInConv.add(r)
  for (const r of ranksInConv) convsByWord2.set(r, (convsByWord2.get(r) ?? 0) + 1)
}
const covered = convsByWord2.size
const under5 = words.filter(w => (convsByWord2.get(w.rank) ?? 0) < TARGET_CONTEXTS)
console.log(`\npatched ${patchedLines} lines, +${addedRefs} word refs`)
console.log(`coverage now: ${covered}/${words.length}`)
console.log(`still <${TARGET_CONTEXTS} contexts: ${under5.length}`)
fs.writeFileSync(path.join(DERIVED, 'coverage_after_augment.json'), JSON.stringify({
  covered, vocabTotal: words.length,
  stillUnderTarget: under5.map(w => ({ rank: w.rank, jp: w.jp, contexts: convsByWord2.get(w.rank) ?? 0 })),
}, null, 1))

#!/usr/bin/env node
// M1.2 — Tokenizer pass over the canonical corpus.
//
// For every canonical conversation, emits data/derived/lines/<convId>.json:
//   { id, context, ambient, cast, tier, lines: [ {
//       speaker, mood,
//       en,                 // display EN = what the EN audio actually says (from audio manifest)
//       jp,                 // display JP = what the JP audio actually says
//       nonverbal,          // true when the EN clip is a silence beat (no EN text/audio shown)
//       jpSilence,          // true when even the JP side is a silence beat
//       words: [rank, ...], // vocab rank-ints found in the line (SRS input)
//       jpTokens: [ { s, r?, w? } ]  // display segmentation: surface, hiragana reading
//                                    // (only when it differs from surface), vocab rank
//   } ] }
//
// jpTokens powers word-level text highlighting + furigana-until-graduated in the app.
// Display text comes from the AUDIO manifest (sanitized at render time — e.g. "(笑)"
// became "あはは") so screen text always matches the spoken audio; v3 JSON is the
// fallback only.
//
// Matching follows scripts/build_conversations_bundle.mjs: token basic_form and
// surface_form checked against the 19,946-word vocab (data/vocab/words.json).

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import kuromoji from 'kuromoji'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const V3 = path.join(ROOT, 'data', 'conversations_v3')
const AUDIO = path.join(ROOT, 'audio')
const DERIVED = path.join(ROOT, 'data', 'derived')
const OUT = path.join(DERIVED, 'lines')
fs.mkdirSync(OUT, { recursive: true })

const canonical = JSON.parse(fs.readFileSync(path.join(DERIVED, 'canonical.json'), 'utf8'))
const words = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'vocab', 'words.json'), 'utf8'))
const rankByJp = new Map(words.map(w => [w.jp, w.rank]))

console.log(`canonical convs: ${canonical.length}, vocab: ${words.length}`)
console.log('loading kuromoji...')
const tokenizer = await new Promise((resolve, reject) => {
  kuromoji.builder({ dicPath: path.join(ROOT, 'node_modules', 'kuromoji', 'dict') })
    .build((err, t) => err ? reject(err) : resolve(t))
})

const kataToHira = s => s.replace(/[ァ-ヶ]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60))
const hasKanji = s => /[一-龯㐀-䶿]/.test(s)

function tokenizeLine(jpText) {
  const tokens = tokenizer.tokenize(jpText || '')
  const ranks = new Set()
  const jpTokens = []
  for (const tok of tokens) {
    let rank = null
    for (const cand of [tok.basic_form, tok.surface_form]) {
      if (cand && cand !== '*' && rankByJp.has(cand)) { rank = rankByJp.get(cand); break }
    }
    if (rank !== null) ranks.add(rank)
    const entry = { s: tok.surface_form }
    // furigana only where it adds information: kanji-bearing surface with a reading
    if (tok.reading && tok.reading !== '*' && hasKanji(tok.surface_form)) {
      const hira = kataToHira(tok.reading)
      if (hira !== tok.surface_form) entry.r = hira
    }
    if (rank !== null) entry.w = rank
    jpTokens.push(entry)
  }
  return { ranks: [...ranks].sort((a, b) => a - b), jpTokens }
}

let done = 0, lineTotal = 0, nonverbalTotal = 0, wordRefTotal = 0
const wordConvCount = new Map() // rank -> Set of convIds (for stats)

for (const { id } of canonical) {
  const conv = JSON.parse(fs.readFileSync(path.join(V3, `${id}.json`), 'utf8'))
  const manifest = JSON.parse(fs.readFileSync(path.join(AUDIO, id, 'manifest.json'), 'utf8'))

  // Index manifest clips by (lineIdx, lang)
  const clipByLine = new Map()
  for (const c of manifest.clips) {
    const m = c.file.match(/^line_(\d{3})_.+_(en|jp)\.(mp3|wav)$/)
    if (m) clipByLine.set(`${Number(m[1])}:${m[2]}`, c)
  }

  const outLines = conv.lines.map((line, i) => {
    const enClip = clipByLine.get(`${i}:en`)
    const jpClip = clipByLine.get(`${i}:jp`)
    const jpDisplay = (jpClip && !jpClip.silence && jpClip.text) ? jpClip.text : (line.jp ?? '')
    const enDisplay = (enClip && !enClip.silence && enClip.text) ? enClip.text : (line.en ?? '')
    const nonverbal = !!enClip?.silence
    const jpSilence = !!jpClip?.silence
    const { ranks, jpTokens } = jpSilence ? { ranks: [], jpTokens: [] } : tokenizeLine(jpDisplay)
    lineTotal++
    if (nonverbal) nonverbalTotal++
    wordRefTotal += ranks.length
    for (const r of ranks) {
      if (!wordConvCount.has(r)) wordConvCount.set(r, new Set())
      wordConvCount.get(r).add(id)
    }
    return {
      speaker: line.speaker,
      mood: line.mood ?? null,
      en: nonverbal ? '' : enDisplay,
      jp: jpDisplay,
      nonverbal,
      jpSilence,
      words: ranks,
      jpTokens,
    }
  })

  fs.writeFileSync(path.join(OUT, `${id}.json`), JSON.stringify({
    id,
    context: conv.context ?? '',
    ambient: conv.ambient ?? null,
    cast: conv.cast ?? [],
    tier: conv.frequency_tier ?? 9,
    lines: outLines,
  }))

  done++
  if (done % 1000 === 0) console.log(`  ${done}/${canonical.length}`)
}

// Coverage stats
const coveredWords = wordConvCount.size
const under5 = [...wordConvCount.values()].filter(s => s.size < 5).length
console.log(`\nDONE: ${done} convs, ${lineTotal} lines, ${nonverbalTotal} nonverbal, ${wordRefTotal} word refs`)
console.log(`vocab coverage: ${coveredWords}/${words.length} words appear in >=1 conv`)
console.log(`words with <5 conv contexts: ${under5}`)
fs.writeFileSync(path.join(DERIVED, 'tokenize_stats.json'), JSON.stringify({
  convs: done, lines: lineTotal, nonverbal: nonverbalTotal, wordRefs: wordRefTotal,
  coveredWords, vocabTotal: words.length, wordsUnder5Contexts: under5,
}, null, 2))

#!/usr/bin/env node
// Chinese-pronunciation risk sweep (user 2026-07-16: "the audio talking
// actual chinese for a couple of words... probably 10-15 times in 2 hours").
//
// ROOT CAUSE (verified): most characters' JP lines are bound to en-US/en-GB
// DragonHD multilingual voices; on KANJI-ONLY text (no kana anywhere in the
// line to disambiguate the script) these voices' language auto-detection can
// fall back to Chinese readings despite the ssml xml:lang="ja-JP" hint —
// data/voice_bindings.md documents the same tokenization failure for the
// rejected zh-CN voices. Native ja-JP voices (Nanami/Masaru) are immune.
//
// This script finds every suspect line: JP text with ≥1 CJK ideograph and
// ZERO kana, spoken by a character whose JP voice is not ja-JP-*. Output:
// data/zh_risk_lines.json — the re-render queue (render with kana-reading
// SSML substitution; see the plan). NO Azure calls; pure text scan.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const CONV_DIR = path.join(ROOT, 'data', 'conversations_v3')
const CHARACTERS = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'characters.json'), 'utf8'))
const OUT = path.join(ROOT, 'data', 'zh_risk_lines.json')

const KANA = /[ぁ-ゟァ-ヿ]/            // hiragana + katakana
const IDEOGRAPH = /[㐀-鿿豈-﫿]/       // CJK ideographs

// characterId → JP voice; native ja-JP voices cannot mis-tokenize
const jpVoiceOf = new Map(
  (Array.isArray(CHARACTERS) ? CHARACTERS : CHARACTERS.characters ?? [])
    .map(c => [c.id, c.voice_bindings?.jp?.voice ?? '']),
)
const isNative = v => v.startsWith('ja-JP-')

const files = fs.readdirSync(CONV_DIR).filter(f => f.endsWith('.json'))
const suspects = []
let linesScanned = 0
let kanjiOnlyNative = 0

for (const f of files) {
  const conv = JSON.parse(fs.readFileSync(path.join(CONV_DIR, f), 'utf8'))
  const convId = conv.id ?? path.basename(f, '.json')
  const lines = conv.lines ?? []
  lines.forEach((line, lineIdx) => {
    const jp = line.jp ?? line.text_jp ?? ''
    if (!jp) return
    linesScanned += 1
    // strip punctuation/space/latin — the risk test is about the SPOKEN script mix
    const spoken = jp.replace(/[\s\p{P}\p{S}0-9A-Za-z０-９Ａ-Ｚａ-ｚ]/gu, '')
    if (!spoken || !IDEOGRAPH.test(spoken) || KANA.test(spoken)) return
    const voice = jpVoiceOf.get(line.speaker) ?? ''
    if (isNative(voice)) { kanjiOnlyNative += 1; return }
    suspects.push({ convId, lineIdx, speaker: line.speaker, voice, jp })
  })
}

const convsAffected = new Set(suspects.map(s => s.convId))
// rough re-render cost: whole affected convs re-render (render_all --only is
// per-conv); JP+EN chars of the suspect convs at Azure HD $30/1M chars
let chars = 0
for (const f of files) {
  const conv = JSON.parse(fs.readFileSync(path.join(CONV_DIR, f), 'utf8'))
  const convId = conv.id ?? path.basename(f, '.json')
  if (!convsAffected.has(convId)) continue
  for (const line of conv.lines ?? []) {
    chars += (line.jp ?? '').length + (line.en ?? '').length
  }
}

fs.writeFileSync(OUT, JSON.stringify({
  generatedAt: new Date().toISOString(),
  linesScanned,
  suspectLines: suspects.length,
  convsAffected: convsAffected.size,
  kanjiOnlyLinesOnNativeVoices: kanjiOnlyNative,
  estRerenderChars: chars,
  estRerenderUsd: Math.round(chars / 1e6 * 30 * 100) / 100,
  suspects,
}, null, 2))

console.log(`scanned ${linesScanned} JP lines across ${files.length} convs`)
console.log(`SUSPECTS: ${suspects.length} kanji-only lines on non-native voices, in ${convsAffected.size} conversations`)
console.log(`(kanji-only lines on native ja-JP voices — immune: ${kanjiOnlyNative})`)
console.log(`re-render estimate: ~${chars.toLocaleString()} chars ≈ $${(chars / 1e6 * 30).toFixed(2)} Azure HD`)
console.log(`wrote ${OUT}`)

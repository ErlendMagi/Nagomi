#!/usr/bin/env node
// Test whether the 4 native JP / Korean Dragon HD voices sound acceptable
// when speaking English. User has chosen voice consistency over cross-language
// voice pairing — the same voice must speak both langs. These 4 voices are
// the "off-language" candidates (they speak JP natively); this confirms their
// EN fallback is shippable.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderLine } from './azure_hd_backend.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const OUT = path.join(ROOT, 'audio', 'jp_voices_in_en_test')
fs.mkdirSync(OUT, { recursive: true })

const EN_LINE = "Today really was long, wasn't it... I don't think I have the energy for anything tonight."

const TESTS = [
  { id: 'ja-JP-Nanami:DragonHDLatestNeural', tag: 'nanami_native_jp_in_en' },
  { id: 'ja-JP-Masaru:DragonHDLatestNeural', tag: 'masaru_native_jp_in_en' },
  { id: 'ko-KR-SunHi:DragonHDLatestNeural',  tag: 'sunhi_korean_in_en' },
  { id: 'ko-KR-Hyunsu:DragonHDLatestNeural', tag: 'hyunsu_korean_in_en' },
]

for (const t of TESTS) {
  const outFile = path.join(OUT, `${t.tag}.mp3`)
  try {
    const r = await renderLine({
      voice: t.id, lang: 'en-US', text: EN_LINE,
      prosody: { rate: '0%', pitch: '0Hz' },
      outFile,
    })
    console.log(`  OK   ${t.tag.padEnd(30)} ${r.bytes}B ${r.latency_ms}ms`)
  } catch (e) {
    console.error(`  FAIL ${t.tag} — ${e.message}`)
  }
}
console.log(`\nFiles: ${path.relative(ROOT, OUT)}`)

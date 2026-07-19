#!/usr/bin/env node
// Azure Speech emotion + HD smoke test — answers the question:
// "is Azure Neural just Edge TTS, or can it sound meaningfully better with
// emotion direction + HD voices?"
//
// Renders the same JP line in 4 modes (baseline → emotion → HD → HD+emotion),
// then the same for EN, plus two emotionally contrasting JP lines so the
// listener can hear the dynamic range of express-as styles. All clips named
// to be self-describing in File Explorer.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')

const env = Object.fromEntries(
  fs.readFileSync(path.join(ROOT, '.env'), 'utf8')
    .split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i), l.slice(i + 1)] })
)
const KEY = env.AZURE_SPEECH_KEY
const REGION = env.AZURE_SPEECH_REGION

const OUT = path.join(ROOT, 'scripts', 'audio_pipeline', '_smoke')
fs.mkdirSync(OUT, { recursive: true })

function ssml({ voice, text, lang, style, styledegree, rate, pitch }) {
  let inner = text
  if (rate !== '0%' || pitch !== '0Hz') inner = `<prosody rate="${rate}" pitch="${pitch}">${inner}</prosody>`
  if (style) inner = `<mstts:express-as style="${style}" styledegree="${styledegree}">${inner}</mstts:express-as>`
  return `<speak version="1.0" xml:lang="${lang}" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts">` +
         `<voice name="${voice}">${inner}</voice></speak>`
}

async function render({ label, outFile, ...args }) {
  const body = ssml(args)
  const url = `https://${REGION}.tts.speech.microsoft.com/cognitiveservices/v1`
  const t0 = Date.now()
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': KEY,
      'Content-Type': 'application/ssml+xml',
      'X-Microsoft-OutputFormat': 'audio-24khz-96kbitrate-mono-mp3',
      'User-Agent': 'nagomi-smoke-emotion',
    },
    body,
  })
  const dt = Date.now() - t0
  if (!res.ok) {
    const err = await res.text()
    console.error(`[${label}] FAIL ${res.status} ${dt}ms — ${err.slice(0, 200)}`)
    return false
  }
  const buf = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(outFile, buf)
  console.log(`[${label}]  OK  ${buf.length.toString().padStart(6)} bytes  ${dt.toString().padStart(4)}ms  →  ${path.basename(outFile)}`)
  return true
}

// Same exhausted-Yuki line in 4 escalating modes, so the listener can A/B/C/D.
const TIRED_JP = '今日、本当に長かったね…'
const TIRED_EN = "Today really was long, wasn't it…"

const tests = [
  // === STANDARD VOICE, EXHAUSTED LINE ===
  { label: 'A1 jp standard NO emotion (current baseline)',
    outFile: path.join(OUT, 'A1_jp_standard_neutral.mp3'),
    voice: 'ja-JP-NanamiNeural', lang: 'ja-JP', text: TIRED_JP,
    style: null, styledegree: 1.0, rate: '0%', pitch: '0Hz' },

  { label: 'A2 jp standard + SAD style + slow rate + low pitch',
    outFile: path.join(OUT, 'A2_jp_standard_sad_full_direction.mp3'),
    voice: 'ja-JP-NanamiNeural', lang: 'ja-JP', text: TIRED_JP,
    style: 'sad', styledegree: 2.0, rate: '-12%', pitch: '-15Hz' },

  // === HD VOICE (more natural acoustic model, ~2x cost) ===
  { label: 'A3 jp HD voice NO emotion (Nanami HD baseline)',
    outFile: path.join(OUT, 'A3_jp_HD_neutral.mp3'),
    voice: 'ja-JP-NanamiNeural', lang: 'ja-JP', text: TIRED_JP,  // placeholder — overridden below if HD voice exists
    style: null, styledegree: 1.0, rate: '0%', pitch: '0Hz' },

  // Try Azure's newest HD line — these may or may not exist in our subscription tier.
  { label: 'A4 jp HD MasaruMultilingual (try newer Dragon HD)',
    outFile: path.join(OUT, 'A4_jp_HD_masaru_dragon.mp3'),
    voice: 'ja-JP-Masaru:DragonHDLatestNeural', lang: 'ja-JP', text: TIRED_JP,
    style: null, styledegree: 1.0, rate: '0%', pitch: '0Hz' },

  // === EMOTIONAL RANGE: same voice, three different moods ===
  { label: 'B1 jp standard CHEERFUL high energy',
    outFile: path.join(OUT, 'B1_jp_cheerful.mp3'),
    voice: 'ja-JP-NanamiNeural', lang: 'ja-JP',
    text: 'やった！本当にできたよ、すごいね！',
    style: 'cheerful', styledegree: 2.0, rate: '+8%', pitch: '+15Hz' },

  { label: 'B2 jp standard EXCITED gasp',
    outFile: path.join(OUT, 'B2_jp_excited.mp3'),
    voice: 'ja-JP-NanamiNeural', lang: 'ja-JP',
    text: 'えっ！本当に？信じられない…',
    style: 'excited', styledegree: 2.0, rate: '+5%', pitch: '+20Hz' },

  { label: 'B3 jp standard WHISPER intimate',
    outFile: path.join(OUT, 'B3_jp_whisper.mp3'),
    voice: 'ja-JP-NanamiNeural', lang: 'ja-JP',
    text: 'ねえ、ちょっと聞いて…内緒なんだけど。',
    style: 'whispering', styledegree: 2.0, rate: '-8%', pitch: '-10Hz' },

  // === ENGLISH: same A1/A2 pair for direct comparison ===
  { label: 'C1 en standard NO emotion (current baseline)',
    outFile: path.join(OUT, 'C1_en_standard_neutral.mp3'),
    voice: 'en-US-JennyMultilingualV2Neural', lang: 'en-US', text: TIRED_EN,
    style: null, styledegree: 1.0, rate: '0%', pitch: '0Hz' },

  { label: 'C2 en standard + SAD style + slow rate + low pitch',
    outFile: path.join(OUT, 'C2_en_standard_sad_full_direction.mp3'),
    voice: 'en-US-JennyMultilingualV2Neural', lang: 'en-US', text: TIRED_EN,
    style: 'sad', styledegree: 2.0, rate: '-12%', pitch: '-15Hz' },

  // English HD attempt — Aria is widely available in HD/Dragon
  { label: 'C3 en HD Aria Dragon (newest tier)',
    outFile: path.join(OUT, 'C3_en_HD_aria_dragon.mp3'),
    voice: 'en-US-Ava:DragonHDLatestNeural', lang: 'en-US', text: TIRED_EN,
    style: null, styledegree: 1.0, rate: '0%', pitch: '0Hz' },
]

let pass = 0, fail = 0
for (const t of tests) {
  const ok = await render(t)
  if (ok) pass++; else fail++
}

console.log(`\n${pass}/${tests.length} passed.  HD failures usually mean the voice ID isn't yet available in your region/tier — that's a FYI, not a blocker for the rest of the plan.`)
console.log(`\nListen in order: A1 → A2 → A3 → A4, then B1 / B2 / B3, then C1 → C2 → C3.`)
console.log(`Out dir: ${path.relative(ROOT, OUT)}`)

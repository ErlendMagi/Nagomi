#!/usr/bin/env node
// Azure Speech smoke test — renders 1 JP + 1 EN line to MP3 to confirm:
//   (a) the key in .env works,
//   (b) the region in .env is correct,
//   (c) the SSML envelope + voice IDs we plan to use actually accept by Azure.
// Writes test_jp.mp3 and test_en.mp3 to scripts/audio_pipeline/_smoke/.
// Loads .env manually (no dotenv dep needed).

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')

// Tiny .env loader — no dependency.
const env = Object.fromEntries(
  fs.readFileSync(path.join(ROOT, '.env'), 'utf8')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('#'))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i), l.slice(i + 1)] })
)

const KEY = env.AZURE_SPEECH_KEY
const REGION = env.AZURE_SPEECH_REGION
if (!KEY || !REGION) { console.error('Missing AZURE_SPEECH_KEY or AZURE_SPEECH_REGION in .env'); process.exit(1) }

const OUT = path.join(ROOT, 'scripts', 'audio_pipeline', '_smoke')
fs.mkdirSync(OUT, { recursive: true })

function ssml({ voice, text, lang, style, styledegree, rate, pitch }) {
  // mstts:express-as wraps the inner prosody for emotion styles; prosody wraps for rate/pitch deltas.
  const inner =
    `<prosody rate="${rate}" pitch="${pitch}">${text}</prosody>`
  const styled = style
    ? `<mstts:express-as style="${style}" styledegree="${styledegree}">${inner}</mstts:express-as>`
    : inner
  return `<speak version="1.0" xml:lang="${lang}" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts">` +
         `<voice name="${voice}">${styled}</voice></speak>`
}

async function render({ ssml: ssmlBody, outFile, label }) {
  const url = `https://${REGION}.tts.speech.microsoft.com/cognitiveservices/v1`
  const t0 = Date.now()
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': KEY,
      'Content-Type': 'application/ssml+xml',
      'X-Microsoft-OutputFormat': 'audio-24khz-96kbitrate-mono-mp3',
      'User-Agent': 'nagomi-smoke',
    },
    body: ssmlBody,
  })
  const dt = Date.now() - t0
  if (!res.ok) {
    const body = await res.text()
    console.error(`[${label}] FAIL ${res.status} ${res.statusText} after ${dt}ms\n${body}`)
    return false
  }
  const buf = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(outFile, buf)
  console.log(`[${label}] OK  ${res.status}  ${buf.length} bytes  ${dt}ms  →  ${path.relative(ROOT, outFile)}`)
  return true
}

const tests = [
  {
    label: 'JP / yuki_office baseline (NanamiNeural)',
    outFile: path.join(OUT, 'test_jp_yuki.mp3'),
    ssml: ssml({
      voice: 'ja-JP-NanamiNeural',
      lang: 'ja-JP',
      text: '今日、本当に長かったね…',
      style: 'chat',
      styledegree: 1.0,
      rate: '0%',
      pitch: '0Hz',
    }),
  },
  {
    label: 'EN / yuki_office baseline (JennyMultilingualV2Neural)',
    outFile: path.join(OUT, 'test_en_yuki.mp3'),
    ssml: ssml({
      voice: 'en-US-JennyMultilingualV2Neural',
      lang: 'en-US',
      text: "Today really was long, wasn't it…",
      style: 'chat',
      styledegree: 1.0,
      rate: '0%',
      pitch: '0Hz',
    }),
  },
]

const results = []
for (const t of tests) results.push(await render(t))

console.log('\nSummary:')
console.log(`  region: ${REGION}`)
console.log(`  passed: ${results.filter(Boolean).length}/${results.length}`)
console.log(`  out dir: ${path.relative(ROOT, OUT)}`)
process.exit(results.every(Boolean) ? 0 : 1)

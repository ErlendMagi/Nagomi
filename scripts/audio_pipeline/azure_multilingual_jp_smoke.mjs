#!/usr/bin/env node
// Azure Multilingual / Dragon HD voices rendering JAPANESE. The question:
// do these en-US / en-GB Dragon HD voices sound native in JP, or fake?
// If yes → we have 50+ HD JP voices for the 22-character roster, all in
// the only commercial-clean provider. If no → we're stuck with 2 native
// HD JP voices + heavy SSML sharing.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const env = Object.fromEntries(
  fs.readFileSync(path.join(ROOT, '.env'), 'utf8')
    .split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i), l.slice(i + 1)] })
)

const OUT = path.join(ROOT, 'scripts', 'audio_pipeline', '_smoke', 'azure_multilingual_jp')
fs.mkdirSync(OUT, { recursive: true })

const JP_LINE = '今日、本当に長かったね…'

// A mix of Dragon HD and DragonHDOmni voices, both genders, US/UK/other accents.
// Includes the 2 native JP HD voices as the in-set baseline.
const VOICES = [
  // Native JP HD baseline (for comparison)
  { id: 'ja-JP-Nanami:DragonHDLatestNeural', gender: 'F', native: 'jp' },
  { id: 'ja-JP-Masaru:DragonHDLatestNeural', gender: 'M', native: 'jp' },
  // US Dragon HD
  { id: 'en-US-Ava:DragonHDLatestNeural',    gender: 'F', native: 'us' },
  { id: 'en-US-Andrew:DragonHDLatestNeural', gender: 'M', native: 'us' },
  { id: 'en-US-Emma:DragonHDLatestNeural',   gender: 'F', native: 'us' },
  { id: 'en-US-Davis:DragonHDLatestNeural',  gender: 'M', native: 'us' },
  // UK Dragon HD
  { id: 'en-GB-Sonia:DragonHDLatestNeural',  gender: 'F', native: 'uk' },
  { id: 'en-GB-Ryan:DragonHDLatestNeural',   gender: 'M', native: 'uk' },
  // Newer DragonHDOmni line
  { id: 'en-US-Phoebe:DragonHDOmniLatestNeural', gender: 'F', native: 'us-omni' },
  { id: 'en-US-Caleb:DragonHDOmniLatestNeural',  gender: 'M', native: 'us-omni' },
  // Korean voice attempt — JP/KR share some phonetic features
  { id: 'ko-KR-SunHi:DragonHDLatestNeural',  gender: 'F', native: 'kr' },
]

async function render(voice) {
  // For multilingual + Dragon HD voices, xml:lang inside <voice> can hint the engine.
  // Dragon HD auto-detects sentiment; no express-as needed.
  const ssml =
    `<speak version="1.0" xml:lang="ja-JP" xmlns="http://www.w3.org/2001/10/synthesis">` +
    `<voice name="${voice.id}">${JP_LINE}</voice></speak>`

  const url = `https://${env.AZURE_SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`
  const t0 = Date.now()
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': env.AZURE_SPEECH_KEY,
      'Content-Type': 'application/ssml+xml',
      'X-Microsoft-OutputFormat': 'audio-24khz-96kbitrate-mono-mp3',
      'User-Agent': 'nagomi-multilingual-jp-smoke',
    },
    body: ssml,
  })
  const dt = Date.now() - t0

  // Safe filename: replace `:` (illegal on Windows) with `__`.
  const safeId = voice.id.replace(/:/g, '__')
  const outFile = path.join(OUT, `${safeId}.mp3`)

  if (!res.ok) {
    const err = await res.text()
    return { ok: false, voice, err: `${res.status} ${dt}ms — ${err.slice(0, 200)}` }
  }
  const buf = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(outFile, buf)
  return { ok: true, voice, bytes: buf.length, dt, outFile }
}

console.log(`Rendering ${VOICES.length} Azure HD voices speaking the same JP line...\n`)

const results = []
for (const v of VOICES) {
  const r = await render(v)
  results.push(r)
  if (r.ok) {
    console.log(`  OK   ${r.bytes.toString().padStart(6)}B ${r.dt.toString().padStart(4)}ms  ${v.id}  (${v.gender}, native ${v.native})`)
  } else {
    console.error(`  FAIL ${v.id} — ${r.err}`)
  }
}

const pass = results.filter(r => r.ok).length
console.log(`\n${pass}/${results.length} succeeded. Files in: ${path.relative(ROOT, OUT)}\n`)
console.log('Listen in this order (so the contrast jumps out):')
console.log('  1. ja-JP-Nanami  / ja-JP-Masaru  — native HD baseline')
console.log('  2. en-US-Ava     / en-US-Andrew — flagship US multilingual')
console.log('  3. en-GB-Sonia   / en-GB-Ryan   — UK accent attempting JP')
console.log('  4. en-US-Phoebe  / en-US-Caleb  — newer Omni line')
console.log('  5. ko-KR-SunHi                  — Korean voice attempting JP')
console.log('\nKey question: do the non-native voices sound native-enough Japanese, or like a foreigner?')

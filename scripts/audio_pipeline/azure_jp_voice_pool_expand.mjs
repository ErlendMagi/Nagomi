#!/usr/bin/env node
// Expand the confirmed-good Azure JP voice pool. Targets voices that add
// demographic / accent variety beyond the 9 we already tested.

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

// Picked to fill gaps: younger F, older/deeper M, more accents, more Omni.
const VOICES = [
  // Younger-leaning US female
  { id: 'en-US-Bree:DragonHDLatestNeural',     gender: 'F', note: 'younger-leaning US female' },
  { id: 'en-US-Nova:DragonHDLatestNeural',     gender: 'F', note: 'youthful US female' },
  { id: 'en-US-Tiana:DragonHDLatestNeural',    gender: 'F', note: 'US female' },
  // Different US male age/timbre
  { id: 'en-US-Tyler:DragonHDLatestNeural',    gender: 'M', note: 'US male, different timbre' },
  { id: 'en-US-Steffan:DragonHDLatestNeural',  gender: 'M', note: 'US male, mature' },
  { id: 'en-US-Juno:DragonHDLatestNeural',     gender: 'M', note: 'US male' },
  // More UK
  { id: 'en-GB-Ada:DragonHDLatestNeural',      gender: 'F', note: 'UK female' },
  { id: 'en-GB-Ollie:DragonHDLatestNeural',    gender: 'M', note: 'UK male' },
  // Indian English
  { id: 'en-IN-Neerja:DragonHDLatestNeural',   gender: 'F', note: 'Indian English female' },
  { id: 'en-IN-Arjun:DragonHDLatestNeural',    gender: 'M', note: 'Indian English male' },
  // Other Omni voices (confirm Caleb wasn't representative)
  { id: 'en-US-Dana:DragonHDOmniLatestNeural', gender: 'F', note: 'newer Omni female' },
  { id: 'en-US-Lewis:DragonHDOmniLatestNeural', gender: 'M', note: 'newer Omni male' },
]

async function render(voice) {
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
      'User-Agent': 'nagomi-jp-voice-pool',
    },
    body: ssml,
  })
  const dt = Date.now() - t0
  const safeId = voice.id.replace(/:/g, '__')
  const outFile = path.join(OUT, `${safeId}.mp3`)
  if (!res.ok) return { ok: false, voice, err: `${res.status} ${dt}ms — ${(await res.text()).slice(0, 200)}` }
  const buf = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(outFile, buf)
  return { ok: true, voice, bytes: buf.length, dt, outFile }
}

console.log(`Rendering ${VOICES.length} more Azure HD voices speaking JP...\n`)
for (const v of VOICES) {
  const r = await render(v)
  if (r.ok) console.log(`  OK   ${r.bytes.toString().padStart(6)}B ${r.dt.toString().padStart(4)}ms  ${v.id.padEnd(45)}  (${v.note})`)
  else console.error(`  FAIL ${v.id} — ${r.err}`)
}
console.log(`\nFiles in: ${path.relative(ROOT, OUT)}`)

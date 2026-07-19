#!/usr/bin/env node
// Test whether Azure SSML <break time="..."/> alone produces a usable silent
// MP3 for insertion between conversation clips during concat.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { env, REGION } from './azure_hd_backend.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const OUT = path.join(ROOT, 'scripts', 'audio_pipeline', '_smoke', 'silence')
fs.mkdirSync(OUT, { recursive: true })

const VARIANTS = [
  // Strategy A: break-only inside voice tag (might be rejected as empty content)
  { name: 'break_only_500ms',
    ssml: `<speak version="1.0" xml:lang="ja-JP" xmlns="http://www.w3.org/2001/10/synthesis">
<voice name="ja-JP-Nanami:DragonHDLatestNeural"><break time="500ms"/></voice></speak>` },
  // Strategy B: short text + break (most reliable)
  { name: 'period_then_500ms_break',
    ssml: `<speak version="1.0" xml:lang="ja-JP" xmlns="http://www.w3.org/2001/10/synthesis">
<voice name="ja-JP-Nanami:DragonHDLatestNeural"><break time="500ms"/>　</voice></speak>` },
  // Strategy C: longer break (800ms thoughtful)
  { name: 'break_only_800ms',
    ssml: `<speak version="1.0" xml:lang="ja-JP" xmlns="http://www.w3.org/2001/10/synthesis">
<voice name="ja-JP-Nanami:DragonHDLatestNeural"><break time="800ms"/></voice></speak>` },
  // Strategy D: 300ms quick reaction gap
  { name: 'break_only_300ms',
    ssml: `<speak version="1.0" xml:lang="ja-JP" xmlns="http://www.w3.org/2001/10/synthesis">
<voice name="ja-JP-Nanami:DragonHDLatestNeural"><break time="300ms"/></voice></speak>` },
]

const ENDPOINT = `https://${REGION}.tts.speech.microsoft.com/cognitiveservices/v1`

for (const v of VARIANTS) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': env.AZURE_SPEECH_KEY,
      'Content-Type': 'application/ssml+xml',
      'X-Microsoft-OutputFormat': 'audio-24khz-96kbitrate-mono-mp3',
      'User-Agent': 'nagomi-silence-test',
    },
    body: v.ssml,
  })
  if (!res.ok) {
    const err = await res.text()
    console.error(`${v.name}: FAIL ${res.status} — ${err.slice(0, 150)}`)
    continue
  }
  const buf = Buffer.from(await res.arrayBuffer())
  const outFile = path.join(OUT, `${v.name}.mp3`)
  fs.writeFileSync(outFile, buf)
  console.log(`${v.name.padEnd(30)} ${buf.length}B  →  ${path.relative(ROOT, outFile)}`)
}

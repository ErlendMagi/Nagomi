#!/usr/bin/env node
// Asian-language Dragon HD voices speaking JP. The thesis: voices trained on
// Korean / Chinese phonetics may sound more native-Japanese than Western
// English voices (per user feedback on ko-KR-SunHi).

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

const VOICES = [
  { id: 'ko-KR-Hyunsu:DragonHDLatestNeural',     gender: 'M', note: 'Korean male' },
  { id: 'zh-CN-Xiaochen:DragonHDLatestNeural',   gender: 'F', note: 'Mandarin female' },
  { id: 'zh-CN-Yunfan:DragonHDLatestNeural',     gender: 'M', note: 'Mandarin male' },
  { id: 'zh-CN-Xiaoyue:DragonHDOmniLatestNeural', gender: 'F', note: 'Mandarin female Omni' },
  { id: 'zh-CN-Yunqi:DragonHDOmniLatestNeural',  gender: 'M', note: 'Mandarin male Omni' },
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
      'User-Agent': 'nagomi-jp-asian-pool',
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

console.log(`Rendering ${VOICES.length} Asian-language Dragon HD voices speaking JP...\n`)
for (const v of VOICES) {
  const r = await render(v)
  if (r.ok) console.log(`  OK   ${r.bytes.toString().padStart(6)}B ${r.dt.toString().padStart(4)}ms  ${v.id.padEnd(45)}  (${v.note})`)
  else console.error(`  FAIL ${v.id} — ${r.err}`)
}
console.log(`\nFiles in: ${path.relative(ROOT, OUT)}`)

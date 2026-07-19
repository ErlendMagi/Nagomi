#!/usr/bin/env node
// Inworld TTS-2: render every native JP voice with three emotional contrasts so the user
// can judge JP quality vs Azure HD. 4 voices × 3 emotions = 12 clips, ~$0.02 total.
// Each clip's filename is self-describing for File Explorer browsing.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const env = Object.fromEntries(
  fs.readFileSync(path.join(ROOT, '.env'), 'utf8')
    .split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i), l.slice(i + 1)] })
)

const OUT = path.join(ROOT, 'scripts', 'audio_pipeline', '_smoke', 'inworld_jp')
fs.mkdirSync(OUT, { recursive: true })

const VOICES = [
  { id: 'Haruto',  hint: 'old gravelly male — reminiscent narrator' },
  { id: 'Asuka',   hint: 'young adult female — friendly, clear, energetic' },
  { id: 'Satoshi', hint: 'dramatic expressive male — nervous, curious' },
  { id: 'Hina',    hint: 'young adult female — smooth, clear, formal narrator' },
]

const TESTS = [
  { mood: 'EXHAUSTED-SAD',
    text: '今日、本当に長かったね…',
    en_gloss: "today really was long, wasn't it…",
    style: '[exhausted exhale on the opening word, quiet defeated tone, slow pace, slight trailing-off at the end]' },
  { mood: 'CHEERFUL-EXCITED',
    text: 'やった！本当にできたよ、すごいね！',
    en_gloss: 'yes! you really did it, that\'s amazing!',
    style: '[joyful burst of energy, voice lifting on やった, smile audible, fast pace]' },
  { mood: 'WHISPERED-INTIMATE',
    text: 'ねえ、ちょっと聞いて…内緒なんだけど。',
    en_gloss: 'hey, listen for a sec… it\'s a secret though.',
    style: '[whispering, conspiratorial half-volume, leaning in, slow careful pace]' },
]

const tasks = []
for (const v of VOICES) for (const t of TESTS) tasks.push({ v, t })

async function render({ v, t }) {
  const fullText = `${t.style} ${t.text}`
  const outFile = path.join(OUT, `${v.id}_${t.mood}.mp3`)
  const t0 = Date.now()
  const res = await fetch('https://api.inworld.ai/tts/v1/voice', {
    method: 'POST',
    headers: { 'Authorization': `Basic ${env.INWORLD_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: fullText,
      modelId: 'inworld-tts-2',
      voiceId: v.id,
      audioConfig: { audioEncoding: 'MP3' },
    }),
  })
  const dt = Date.now() - t0
  if (!res.ok) {
    const errBody = await res.text()
    return { ok: false, label: `${v.id}/${t.mood}`, err: `${res.status} ${dt}ms — ${errBody.slice(0, 200)}` }
  }
  const contentType = res.headers.get('content-type') ?? ''
  let buf
  if (contentType.includes('audio') || contentType.includes('octet-stream')) {
    buf = Buffer.from(await res.arrayBuffer())
  } else {
    const json = await res.json()
    if (!json.audioContent) return { ok: false, label: `${v.id}/${t.mood}`, err: `no audioContent in JSON: ${JSON.stringify(json).slice(0, 200)}` }
    buf = Buffer.from(json.audioContent, 'base64')
  }
  fs.writeFileSync(outFile, buf)
  return { ok: true, label: `${v.id}/${t.mood}`, bytes: buf.length, dt, outFile }
}

console.log(`Rendering ${tasks.length} clips on Inworld TTS-2 (4 JP voices × 3 emotions)...\n`)

// Render serially to be polite to the API.
let pass = 0, fail = 0
for (const task of tasks) {
  const r = await render(task)
  if (r.ok) {
    console.log(`[${r.label.padEnd(28)}]  OK   ${r.bytes.toString().padStart(6)}B  ${r.dt.toString().padStart(4)}ms`)
    pass++
  } else {
    console.error(`[${r.label.padEnd(28)}] FAIL  ${r.err}`)
    fail++
  }
}

console.log(`\n${pass}/${tasks.length} passed. Files in: ${path.relative(ROOT, OUT)}`)
console.log(`\nVoice key:`)
for (const v of VOICES) console.log(`  ${v.id.padEnd(8)} = ${v.hint}`)
console.log(`\nListen suggested order: Asuka EXHAUSTED → Asuka CHEERFUL → Asuka WHISPERED,`)
console.log(`then Hina, Satoshi, Haruto same sequence. Judge against Azure HD baseline.`)

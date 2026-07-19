#!/usr/bin/env node
// Smoke test for fal.ai (MiniMax Speech 02 HD) + Inworld TTS-2.
// Renders one JP line on each, with a moderate style directive on Inworld.
// Confirms keys work, endpoints work, audio is non-empty MP3.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const env = Object.fromEntries(
  fs.readFileSync(path.join(ROOT, '.env'), 'utf8')
    .split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i), l.slice(i + 1)] })
)

const OUT = path.join(ROOT, 'scripts', 'audio_pipeline', '_smoke')
fs.mkdirSync(OUT, { recursive: true })

const JP_LINE = '今日、本当に長かったね…'

// ---------------- fal.ai / MiniMax Speech 02 HD ----------------
// fal.run is the synchronous endpoint (queue.fal.run is async). Sync is simpler for a smoke.
// Auth: fal.ai uses 'Authorization: Key <key>' for direct API calls.
async function minimaxSmoke() {
  const url = 'https://fal.run/fal-ai/minimax/speech-02-hd'
  const body = {
    text: JP_LINE,
    language_boost: 'Japanese',
    voice_setting: { voice_id: 'Wise_Woman', emotion: 'sad', speed: 0.9 },
    audio_setting: { format: 'mp3', sample_rate: 24000, bitrate: 128000 },
    output_format: 'url',
  }
  const t0 = Date.now()
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Key ${env.FAL_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const dt = Date.now() - t0
  if (!res.ok) {
    const text = await res.text()
    return { ok: false, label: 'MiniMax/fal.ai', err: `${res.status} ${dt}ms — ${text.slice(0, 400)}` }
  }
  const json = await res.json()
  const audioUrl = json?.audio?.url
  if (!audioUrl) return { ok: false, label: 'MiniMax/fal.ai', err: `no audio url in response: ${JSON.stringify(json).slice(0, 400)}` }
  // Fetch the audio file from fal.media
  const a = await fetch(audioUrl)
  if (!a.ok) return { ok: false, label: 'MiniMax/fal.ai', err: `failed to GET audio url: ${a.status}` }
  const buf = Buffer.from(await a.arrayBuffer())
  const outFile = path.join(OUT, 'smoke_minimax_jp.mp3')
  fs.writeFileSync(outFile, buf)
  return { ok: true, label: 'MiniMax/fal.ai', bytes: buf.length, dt, outFile, duration_ms: json.duration_ms }
}

// ---------------- Inworld TTS-2 ----------------
// Endpoint: https://api.inworld.ai/v1/tts/synthesize  (also try /tts/v1/voice if first 404s)
// Auth: 'Authorization: Basic <base64(apiKey:)>' — the studio key is the apiKey value.
async function inworldSmoke() {
  // Inworld studio hands you the Basic credential ALREADY base64-encoded (key:secret format,
  // ends in ==). Pass it through unchanged. Earlier attempt re-encoded it, which sent the wrong key.
  const credential = env.INWORLD_API_KEY

  const urls = [
    'https://api.inworld.ai/tts/v1/voice',
    'https://api.inworld.ai/v1/tts/synthesize',
  ]
  const bodies = [
    // Per llms.txt format
    { text: '[sad, slow] ' + JP_LINE, modelId: 'inworld-tts-2', voiceId: 'Ashley', audioConfig: { audioEncoding: 'MP3' } },
    { text: '[sad, slow] ' + JP_LINE, model: 'inworld-tts-2', voice_id: 'Ashley', audio_format: 'mp3' },
  ]

  // Try each (url, body) combination until one returns audio bytes.
  const tries = []
  for (const url of urls) for (const body of bodies) tries.push({ url, body })

  const errors = []
  for (const { url, body } of tries) {
    const t0 = Date.now()
    let res
    try {
      res = await fetch(url, {
        method: 'POST',
        headers: { 'Authorization': `Basic ${credential}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } catch (e) {
      errors.push(`${url} ${JSON.stringify(body).slice(0, 80)} → fetch err: ${e.message}`)
      continue
    }
    const dt = Date.now() - t0
    if (!res.ok) {
      const text = await res.text()
      errors.push(`${url} ${JSON.stringify(body).slice(0, 80)} → ${res.status} ${dt}ms — ${text.slice(0, 300)}`)
      continue
    }
    const contentType = res.headers.get('content-type') ?? ''
    if (contentType.includes('audio') || contentType.includes('octet-stream')) {
      const buf = Buffer.from(await res.arrayBuffer())
      const outFile = path.join(OUT, 'smoke_inworld_jp.mp3')
      fs.writeFileSync(outFile, buf)
      return { ok: true, label: 'Inworld TTS-2', bytes: buf.length, dt, outFile, endpoint: url }
    }
    // JSON response — maybe contains audioContent base64 or audio url
    const json = await res.json().catch(() => null)
    if (json?.audioContent) {
      const buf = Buffer.from(json.audioContent, 'base64')
      const outFile = path.join(OUT, 'smoke_inworld_jp.mp3')
      fs.writeFileSync(outFile, buf)
      return { ok: true, label: 'Inworld TTS-2', bytes: buf.length, dt, outFile, endpoint: url, encoding: 'base64-in-JSON' }
    }
    errors.push(`${url} returned ${contentType}: ${JSON.stringify(json).slice(0, 300)}`)
  }
  return { ok: false, label: 'Inworld TTS-2', err: errors.join('\n  ') }
}

const results = await Promise.all([minimaxSmoke(), inworldSmoke()])
console.log('')
for (const r of results) {
  if (r.ok) {
    console.log(`[${r.label}] OK  ${r.bytes} bytes  ${r.dt}ms  →  ${path.relative(ROOT, r.outFile)}${r.endpoint ? '  (endpoint: ' + r.endpoint + ')' : ''}${r.duration_ms ? '  (duration ' + r.duration_ms + 'ms)' : ''}`)
  } else {
    console.error(`[${r.label}] FAIL\n  ${r.err}`)
  }
}
process.exit(results.every(r => r.ok) ? 0 : 1)

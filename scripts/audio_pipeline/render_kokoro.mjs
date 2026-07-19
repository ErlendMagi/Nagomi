#!/usr/bin/env node
// Kokoro tail render — placeholder-tier audio for conversations the Azure
// credit didn't cover. Same output layout + manifest + ledger as render_all,
// tagged engine=kokoro_placeholder / tier=placeholder so the paid re-render
// pass can find and replace them later.
//
//   node scripts/audio_pipeline/render_kokoro.mjs                # full tail
//   node scripts/audio_pipeline/render_kokoro.mjs --only=conv_x  # smoke
//   node scripts/audio_pipeline/render_kokoro.mjs --workers=2

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { KokoroPool } from './kokoro/kokoro_backend.mjs'
import { sanitizeForTts, makeSilenceWav } from './sanitize_text.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const V3 = path.join(ROOT, 'data', 'conversations_v3')
const AUDIO = path.join(ROOT, 'audio')
const LEDGER = path.join(ROOT, 'data', 'audio_engine_ledger.csv')
const FAIL_LOG = path.join(ROOT, 'data', 'render_failures_kokoro.log')

const ENGINE = 'kokoro_placeholder'
const INTER_LINE_SILENCE_MS = 500 // approximated by player + leading silence padding below

const argv = process.argv.slice(2)
const ONLY = argv.find(a => a.startsWith('--only='))?.slice(7).split(',') ?? null
const WORKERS = Number(argv.find(a => a.startsWith('--workers='))?.split('=')[1] ?? 2)

const characters = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'characters.json'), 'utf8')).characters
const charIds = new Set(characters.map(c => c.id))

function isRendered(convId) {
  const mPath = path.join(AUDIO, convId, 'manifest.json')
  if (!fs.existsSync(mPath)) return false
  try {
    const m = JSON.parse(fs.readFileSync(mPath, 'utf8'))
    // ANY complete manifest counts — never overwrite ship-tier azure audio.
    for (const c of m.clips) {
      const p = path.join(AUDIO, convId, c.file)
      if (!fs.existsSync(p) || fs.statSync(p).size === 0) return false
    }
    return true
  } catch { return false }
}

// Kokoro has no SSML break — approximate the inter-line beat by prepending
// generated silence to each MP3? Kokoro output is already ~natural-paced and
// the app player inserts its own pauses; we keep clips bare (documented).

const pool = new KokoroPool(WORKERS)
await pool.init()
console.log(`Kokoro pool ready (${WORKERS} workers)`)

if (!fs.existsSync(LEDGER)) fs.writeFileSync(LEDGER, 'convId,engine,tier,en_pending,chars_jp,chars_en,est_cost_usd,rendered_at\n')

async function renderConv(convId) {
  const conv = JSON.parse(fs.readFileSync(path.join(V3, `${convId}.json`), 'utf8'))
  if (!Array.isArray(conv.lines) || !conv.lines.length) throw new Error('no lines')

  const convNum = Number(convId.replace(/\D/g, '')) || 0
  const narratorKey = convNum % 2 === 0 ? '_narrator_en_f' : '_narrator_en_m'
  const convDir = path.join(AUDIO, convId)
  const tmpDir = path.join(convDir, '.tmp')
  fs.rmSync(tmpDir, { recursive: true, force: true })
  fs.mkdirSync(tmpDir, { recursive: true })

  const clips = [{
    file: 'intro_en.mp3', kind: 'intro', lang: 'en', speaker: null,
    voiceKey: narratorKey, text: conv.context ?? '', silence: false, sanitized: false,
  }]
  for (let li = 0; li < conv.lines.length; li++) {
    const line = conv.lines[li]
    if (!charIds.has(line.speaker)) throw new Error(`Unknown character: ${line.speaker}`)
    const nnn = String(li).padStart(3, '0')
    const enSan = sanitizeForTts(line.en, 'en')
    const jpSan = sanitizeForTts(line.jp, 'jp')
    clips.push({
      file: `line_${nnn}_${line.speaker}_en.${enSan.kind === 'silence' ? 'wav' : 'mp3'}`,
      kind: 'line', lang: 'en', speaker: line.speaker, voiceKey: line.speaker,
      text: enSan.text, silence: enSan.kind === 'silence', sanitized: enSan.sanitized,
    })
    clips.push({
      file: `line_${nnn}_${line.speaker}_jp.${jpSan.kind === 'silence' ? 'wav' : 'mp3'}`,
      kind: 'line', lang: 'jp', speaker: line.speaker, voiceKey: line.speaker,
      text: jpSan.text, silence: jpSan.kind === 'silence', sanitized: jpSan.sanitized,
    })
  }

  let charsJp = 0, charsEn = 0
  const results = []
  for (const c of clips) {
    if (c.silence) {
      const buf = makeSilenceWav(800)
      fs.writeFileSync(path.join(tmpDir, c.file), buf)
      results.push({ c, r: { bytes: buf.length, dur_s: 0.8 } })
      continue
    }
    const r = await pool.render({
      id: `${convId}:${c.file}`,
      lang: c.lang === 'jp' ? 'ja' : 'en-us', // worker maps en per-character (en-gb where bound)
      text: c.text,
      voice: c.voiceKey,
      out: path.join(tmpDir, c.file),
    })
    results.push({ c, r })
    if (c.lang === 'jp') charsJp += c.text.length
    else charsEn += c.text.length
  }

  for (const { c } of results) fs.renameSync(path.join(tmpDir, c.file), path.join(convDir, c.file))
  fs.rmSync(tmpDir, { recursive: true, force: true })

  const freshFiles = new Set(results.map(({ c }) => c.file))
  for (const f of fs.readdirSync(convDir)) {
    if (f.endsWith('.wav') && !freshFiles.has(f)) fs.rmSync(path.join(convDir, f), { force: true })
  }

  fs.writeFileSync(path.join(convDir, 'manifest.json'), JSON.stringify({
    manifest_version: 2,
    convId,
    engine: ENGINE,
    tier: 'placeholder',
    text_source: 'conversations_v3',
    rendered_at: new Date().toISOString(),
    context: conv.context,
    cast: conv.cast,
    clips: results.map(({ c, r }) => ({
      file: c.file, kind: c.kind, lang: c.lang, speaker: c.speaker,
      voice: c.silence ? null : `kokoro:${c.voiceKey}`, engine: c.silence ? 'silence' : ENGINE,
      text: c.text, sanitized: c.sanitized, silence: c.silence,
      chars: c.text.length, bytes: r.bytes, dur_s: r.dur_s,
    })),
  }, null, 2))

  fs.appendFileSync(LEDGER, `${convId},${ENGINE},placeholder,false,${charsJp},${charsEn},0,${new Date().toISOString()}\n`)
  return { clips: results.length }
}

// Work list: text-ready convs with no complete manifest, priority order.
function buildQueue() {
  const files = fs.readdirSync(V3).filter(f => f.endsWith('.json'))
  const rows = []
  for (const f of files) {
    const id = f.replace('.json', '')
    if (ONLY && !ONLY.includes(id)) continue
    rows.push({ id, num: Number(id.replace(/\D/g, '')) || 0 })
  }
  // tier sort omitted: remaining tail is already the low-priority slice.
  rows.sort((a, b) => a.num - b.num)
  return rows.filter(({ id }) => !isRendered(id)).map(r => r.id)
}

const queue = buildQueue()
console.log(`Queue: ${queue.length} convs to render on Kokoro`)

let done = 0, failed = 0
const t0 = Date.now()
// The pool serializes per worker internally; drive WORKERS convs concurrently.
async function driver() {
  while (queue.length) {
    const id = queue.shift()
    try {
      let r
      try {
        r = await renderConv(id)
      } finally {
        // never leave orphan .tmp dirs on failure
        fs.rmSync(path.join(AUDIO, id, '.tmp'), { recursive: true, force: true })
      }
      done++
      if (done <= 3 || done % 20 === 0) {
        const rate = done / ((Date.now() - t0) / 3600_000)
        const etaH = queue.length / Math.max(1, rate)
        console.log(`[${done}] ${id}  ${r.clips} clips  ${rate.toFixed(0)} convs/h  ETA ${etaH.toFixed(1)}h  queue ${queue.length}`)
      }
    } catch (e) {
      failed++
      fs.appendFileSync(FAIL_LOG, `${new Date().toISOString()} ${id} ${e.message}\n`)
      console.error(`FAIL ${id}: ${e.message.slice(0, 160)}`)
    }
  }
}
await Promise.all(Array.from({ length: WORKERS }, driver))

pool.stop()
console.log(`\n=== KOKORO RENDER DONE ===  rendered: ${done}  failed: ${failed}`)

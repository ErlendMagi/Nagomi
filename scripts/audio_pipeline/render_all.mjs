#!/usr/bin/env node
// Mass audio render — Azure Neural HD, credits-first strategy.
//
// Renders every text-ready conversation (present in data/conversations_v3/)
// to the app's audio layout:
//   audio/<convId>/intro_en.mp3
//   audio/<convId>/line_<NNN>_<speakerId>_<jp|en>.mp3
//   audio/<convId>/manifest.json          (written LAST — presence = complete)
//
// Priority: (frequency_tier ASC, numeric id ASC) — most-common vocab first,
// so if the Azure credit exhausts, only the rarest-vocab tail falls to the
// Kokoro placeholder engine.
//
// The work-list refreshes each cycle: conversations rewritten by the parallel
// rewrite shards join the queue live. If the queue is empty but v3 is still
// growing, the renderer waits; it exits when all v3 convs are rendered and
// v3 has stopped growing for STALL_EXIT_MIN minutes.
//
// Spend guard (self-tracked — no portal API available):
//   - audio/spend_log.csv accrues chars x $22/1M per conversation
//   - hard stop at --max_spend_usd (default 150)
//   - 5 consecutive auth/payment errors (401/402/403) => credit exhausted,
//     write audio/CREDIT_EXHAUSTED.marker and stop
//
// Ledger (the "which TTS made this" registry):
//   data/audio_engine_ledger.csv — one row per rendered conv.
//
// Resume-safe: a conv with a valid manifest.json (engine matches, all files
// present and non-empty) is skipped.
//
// Usage:
//   node scripts/audio_pipeline/render_all.mjs                 # full run
//   node scripts/audio_pipeline/render_all.mjs --only=conv_00001,conv_00002
//   node scripts/audio_pipeline/render_all.mjs --max_spend_usd=150

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderLine, getBindingFor, getNarratorFor } from './azure_hd_backend.mjs'
import { sanitizeForTts, makeSilenceWav } from './sanitize_text.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const V3 = path.join(ROOT, 'data', 'conversations_v3')
const AUDIO = path.join(ROOT, 'audio')
const LEDGER = path.join(ROOT, 'data', 'audio_engine_ledger.csv')
const SPEND_LOG = path.join(AUDIO, 'spend_log.csv')
const FAIL_LOG = path.join(ROOT, 'data', 'render_failures.log')
const MARKER = path.join(AUDIO, 'CREDIT_EXHAUSTED.marker')

const ENGINE = 'azure_hd'
const PRICE_PER_CHAR = 22 / 1_000_000   // $22 per 1M chars, Azure Neural HD
const CLIP_CONCURRENCY = 6              // parallel clips within one conversation
const CONV_CONCURRENCY = 5              // conversations rendered in parallel
const INTER_LINE_SILENCE_MS = 500
const STALL_EXIT_MIN = 30

const argv = process.argv.slice(2)
const ONLY = argv.find(a => a.startsWith('--only='))?.slice(7).split(',') ?? null
const capArg = argv.find(a => a.startsWith('--max_spend_usd='))?.split('=')[1]
const MAX_SPEND_USD = capArg ? Number(capArg) : 150
if (!Number.isFinite(MAX_SPEND_USD)) { console.error(`Bad --max_spend_usd: ${capArg}`); process.exit(1) }

const characters = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'characters.json'), 'utf8')).characters

fs.mkdirSync(AUDIO, { recursive: true })
// Publish the active cap so the progress dashboard tracks it live.
fs.writeFileSync(path.join(AUDIO, 'render_cap.txt'), String(MAX_SPEND_USD))
// A fresh run supersedes any prior stop condition.
fs.rmSync(MARKER, { force: true })
if (!fs.existsSync(SPEND_LOG)) fs.writeFileSync(SPEND_LOG, 'convId,chars,cost_usd,cumulative_usd,at\n')
if (!fs.existsSync(LEDGER)) fs.writeFileSync(LEDGER, 'convId,engine,tier,en_pending,chars_jp,chars_en,est_cost_usd,rendered_at\n')

// Cumulative spend survives restarts: sum the log.
let spendUsd = fs.readFileSync(SPEND_LOG, 'utf8').trim().split('\n').slice(1)
  .reduce((s, row) => s + (Number(row.split(',')[2]) || 0), 0)

let consecutiveAuthErrors = 0

function listReadyConvs() {
  const files = fs.readdirSync(V3).filter(f => f.endsWith('.json'))
  const metas = []
  for (const f of files) {
    const id = f.replace('.json', '')
    if (ONLY && !ONLY.includes(id)) continue
    metas.push(f)
  }
  return metas
}

function loadConvSorted(files) {
  // Sort by (frequency_tier, numeric id). Reading every JSON for tier is
  // ~11k small reads per refresh — acceptable (< 5s) but cache tiers.
  const rows = files.map(f => {
    const id = f.replace('.json', '')
    let tier = tierCache.get(id)
    if (tier === undefined) {
      try { tier = JSON.parse(fs.readFileSync(path.join(V3, f), 'utf8')).frequency_tier ?? 9 }
      catch { tier = 9 }
      tierCache.set(id, tier)
    }
    return { f, id, tier, num: Number(id.replace(/\D/g, '')) || 0 }
  })
  rows.sort((a, b) => a.tier - b.tier || a.num - b.num)
  return rows
}
const tierCache = new Map()

function isRendered(convId) {
  const mPath = path.join(AUDIO, convId, 'manifest.json')
  if (!fs.existsSync(mPath)) return false
  try {
    const m = JSON.parse(fs.readFileSync(mPath, 'utf8'))
    if (m.engine !== ENGINE) return false
    for (const c of m.clips) {
      const p = path.join(AUDIO, convId, c.file)
      if (!fs.existsSync(p) || fs.statSync(p).size === 0) return false
    }
    return true
  } catch { return false }
}

function isAuthError(msg) { return /HTTP (401|402|403)/.test(msg) }

async function renderConv(convId) {
  const conv = JSON.parse(fs.readFileSync(path.join(V3, `${convId}.json`), 'utf8'))
  if (!Array.isArray(conv.lines) || !conv.lines.length) throw new Error('no lines')

  const convNum = Number(convId.replace(/\D/g, '')) || 0
  const enNarrator = getNarratorFor(convNum, 'en')
  const tmpDir = path.join(AUDIO, convId, '.tmp')
  fs.rmSync(tmpDir, { recursive: true, force: true })
  fs.mkdirSync(tmpDir, { recursive: true })

  // Build clip specs in app layout.
  const clips = [{
    file: 'intro_en.mp3', kind: 'intro', lang: 'en', speaker: null,
    voice: enNarrator.voice, prosody: { rate: '0%', pitch: '0Hz' },
    text: conv.context ?? '', silenceMs: 0,
  }]
  for (let li = 0; li < conv.lines.length; li++) {
    const line = conv.lines[li]
    const en = getBindingFor(characters, line.speaker, 'en')
    const jp = getBindingFor(characters, line.speaker, 'jp')
    const nnn = String(li).padStart(3, '0')
    // Sanitize: strip stage directions; pure non-verbal beats become silence.
    const enSan = sanitizeForTts(line.en, 'en')
    const jpSan = sanitizeForTts(line.jp, 'jp')
    clips.push({
      file: `line_${nnn}_${line.speaker}_en.${enSan.kind === 'silence' ? 'wav' : 'mp3'}`,
      kind: 'line', lang: 'en', speaker: line.speaker, voice: en.voice, prosody: en.prosody,
      text: enSan.text, silence: enSan.kind === 'silence', sanitized: enSan.sanitized, silenceMs: INTER_LINE_SILENCE_MS,
    })
    clips.push({
      file: `line_${nnn}_${line.speaker}_jp.${jpSan.kind === 'silence' ? 'wav' : 'mp3'}`,
      kind: 'line', lang: 'jp', speaker: line.speaker, voice: jp.voice, prosody: jp.prosody,
      text: jpSan.text, silence: jpSan.kind === 'silence', sanitized: jpSan.sanitized, silenceMs: INTER_LINE_SILENCE_MS,
    })
  }

  // Render with bounded concurrency into .tmp/ (silence beats are written
  // locally as tiny WAVs — no API call, no cost).
  let charsJp = 0, charsEn = 0
  const results = []
  const renderOne = async c => {
    if (c.silence) {
      const buf = makeSilenceWav(800)
      fs.writeFileSync(path.join(tmpDir, c.file), buf)
      return { c, r: { bytes: buf.length, latency_ms: 0 } }
    }
    const r = await renderLine({
      voice: c.voice,
      lang: c.lang === 'jp' ? 'ja-JP' : 'en-US',
      text: c.text,
      prosody: c.prosody,
      prependSilenceMs: c.silenceMs,
      outFile: path.join(tmpDir, c.file),
    })
    return { c, r }
  }
  for (let i = 0; i < clips.length; i += CLIP_CONCURRENCY) {
    const batch = clips.slice(i, i + CLIP_CONCURRENCY)
    const settled = await Promise.allSettled(batch.map(renderOne))
    for (const s of settled) {
      if (s.status === 'rejected') {
        const msg = s.reason?.message ?? String(s.reason)
        if (isAuthError(msg)) consecutiveAuthErrors++
        throw new Error(msg)
      }
      consecutiveAuthErrors = 0
      results.push(s.value)
      const { c } = s.value
      if (c.lang === 'jp') charsJp += c.text.length
      else charsEn += c.text.length
    }
  }

  // Move into place, manifest LAST.
  const convDir = path.join(AUDIO, convId)
  for (const { c } of results) {
    fs.renameSync(path.join(tmpDir, c.file), path.join(convDir, c.file))
  }
  fs.rmSync(tmpDir, { recursive: true, force: true })

  // Purge stale WAVs from the old Qwen/Edge era: the app loader prefers .wav
  // over .mp3, so leftovers would silently shadow this fresh ship-tier render.
  // (Those WAVs are Qwen outputs — non-shippable license-wise regardless.)
  // Fresh silence-beat WAVs written by THIS render are kept.
  const freshFiles = new Set(results.map(({ c }) => c.file))
  for (const f of fs.readdirSync(convDir)) {
    if (f.endsWith('.wav') && !freshFiles.has(f)) fs.rmSync(path.join(convDir, f), { force: true })
    // Also drop a stale .mp3 twin of a line that is now a silence .wav —
    // otherwise the old spoken stage-direction MP3 lingers beside the WAV.
    if (f.endsWith('.mp3') && !freshFiles.has(f) && freshFiles.has(f.replace(/\.mp3$/, '.wav'))) {
      fs.rmSync(path.join(convDir, f), { force: true })
    }
  }

  const manifest = {
    manifest_version: 2,
    convId,
    engine: ENGINE,
    text_source: 'conversations_v3',
    rendered_at: new Date().toISOString(),
    context: conv.context,
    cast: conv.cast,
    clips: results.map(({ c, r }) => ({
      file: c.file, kind: c.kind, lang: c.lang, speaker: c.speaker,
      voice: c.silence ? null : c.voice, engine: c.silence ? 'silence' : ENGINE, prosody: c.prosody,
      text: c.text, sanitized: c.sanitized ?? false, silence: c.silence ?? false,
      chars: c.text.length, bytes: r.bytes,
    })),
  }
  fs.writeFileSync(path.join(convDir, 'manifest.json'), JSON.stringify(manifest, null, 2))

  // Spend + ledger.
  const chars = charsJp + charsEn + (conv.context?.length ?? 0)
  const cost = chars * PRICE_PER_CHAR
  spendUsd += cost
  fs.appendFileSync(SPEND_LOG, `${convId},${chars},${cost.toFixed(6)},${spendUsd.toFixed(4)},${new Date().toISOString()}\n`)
  fs.appendFileSync(LEDGER, `${convId},${ENGINE},ship,false,${charsJp},${charsEn},${cost.toFixed(6)},${new Date().toISOString()}\n`)
  return { clips: results.length, chars, cost }
}

// ---------------- main loop (worker pool over a cached queue) ----------------

console.log(`Engine: ${ENGINE}  cap: $${MAX_SPEND_USD}  conv concurrency: ${CONV_CONCURRENCY}  spent so far: $${spendUsd.toFixed(2)}`)

// One-time completeness scan seeds the rendered set; after that it's O(1)
// bookkeeping instead of re-scanning thousands of manifests per render.
console.log('Scanning existing renders (one-time)...')
const renderedSet = new Set()
for (const f of listReadyConvs()) {
  const id = f.replace('.json', '')
  if (isRendered(id)) renderedSet.add(id)
}
console.log(`Already rendered: ${renderedSet.size}`)

let done = 0, failed = 0
let lastV3Count = 0
let lastGrowthAt = Date.now()
let stopReason = null
const t0 = Date.now()

let queue = []
function refreshQueue() {
  const files = listReadyConvs()
  if (files.length !== lastV3Count) { lastV3Count = files.length; lastGrowthAt = Date.now() }
  queue = loadConvSorted(files).filter(({ id }) => !renderedSet.has(id))
}

function shouldStop() {
  if (stopReason) return true
  if (spendUsd >= MAX_SPEND_USD) {
    stopReason = `SPEND CAP REACHED: $${spendUsd.toFixed(2)} >= $${MAX_SPEND_USD}`
    fs.writeFileSync(MARKER, `spend_cap ${spendUsd.toFixed(2)} at ${new Date().toISOString()}\n`)
    return true
  }
  if (consecutiveAuthErrors >= 5) {
    stopReason = 'CREDIT EXHAUSTED (5 consecutive auth/payment errors)'
    fs.writeFileSync(MARKER, `auth_errors at ${new Date().toISOString()}\n`)
    return true
  }
  if (failed > 50 && failed > done) {
    stopReason = 'Too many non-auth failures — aborting for diagnosis'
    return true
  }
  return false
}

refreshQueue()

async function worker(wi) {
  while (!shouldStop()) {
    let item = queue.shift()
    if (!item) {
      if (ONLY) return
      refreshQueue()
      item = queue.shift()
      if (!item) {
        const stalledMin = (Date.now() - lastGrowthAt) / 60000
        if (stalledMin > STALL_EXIT_MIN) return
        await new Promise(r => setTimeout(r, 60_000))
        continue
      }
    }
    const { id } = item
    renderedSet.add(id) // claim immediately so no other worker takes it
    try {
      const r = await renderConv(id)
      done++
      if (done <= 5 || done % 50 === 0) {
        const rate = done / ((Date.now() - t0) / 3600_000)
        console.log(`[${done}] ${id}  ${r.clips} clips  $${spendUsd.toFixed(2)} cum  ${rate.toFixed(0)} convs/h  queue ~${queue.length}`)
      }
    } catch (e) {
      failed++
      renderedSet.delete(id) // release claim so a retry/resume can pick it up
      fs.appendFileSync(FAIL_LOG, `${new Date().toISOString()} ${id} ${e.message}\n`)
      console.error(`FAIL ${id}: ${e.message.slice(0, 200)}`)
    }
  }
}

await Promise.all(Array.from({ length: CONV_CONCURRENCY }, (_, wi) => worker(wi)))

if (stopReason) console.log(`\n${stopReason}`)
console.log(`\n=== RENDER SESSION DONE ===`)
console.log(`rendered: ${done}  failed: ${failed}  spend: $${spendUsd.toFixed(2)}`)
console.log(`ledger: ${path.relative(ROOT, LEDGER)}`)

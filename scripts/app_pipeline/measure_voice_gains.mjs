// measure_voice_gains.mjs — per-voice loudness measurement → assets/voice_gains.json
//
// User report (2026-07-14): "english voices are louder than the japanese voices
// often", and JP voices also vary among themselves. expo-audio's player.volume
// can only ATTENUATE (0.0..1.0 — verified in expo-audio AudioModule.types.d.ts),
// so the table normalizes DOWNWARD:
//
//   JP_TARGET = quietest JP voice's mean loudness  (every JP voice can reach it
//               by attenuation alone — the "loudest-common denominator")
//   EN_TARGET = JP_TARGET − 2 dB                   (locked: JP a bit LOUDER)
//   gain(voice) = clamp01(10 ^ ((TARGET − measured_mean_dB) / 20))
//
// Measurement: ffmpeg ebur128 integrated loudness (LUFS) per clip, mean over a
// random sample of ~40 clips per (character, lang) pair — Azure TTS is highly
// consistent per voice, so sampling suffices. Only azure_hd/ship conversations
// are sampled (latest ledger row per conv wins): the Kokoro placeholder tail
// is a different TTS engine and would blur the per-voice means.
//
// Usage:  node scripts/app_pipeline/measure_voice_gains.mjs [--samples N]
// Output: assets/voice_gains.json  (bundled by Metro, read by src/engine/audioGains.ts)

import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { execFile } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const AUDIO_DIR = path.join(ROOT, 'audio')
const LEDGER = path.join(ROOT, 'data', 'audio_engine_ledger.csv')
const OUT = path.join(ROOT, 'assets', 'voice_gains.json')

const SAMPLES_PER_VOICE = Number(process.argv[process.argv.indexOf('--samples') + 1]) || 40
const JP_MINUS_EN_DB = 2 // JP target sits this many dB ABOVE the EN target
const CONCURRENCY = Math.max(2, Math.min(8, os.cpus().length))

// ffmpeg: PATH first, then the winget install location (PATH needs a shell
// restart after `winget install Gyan.FFmpeg` — resolve it directly).
function findFfmpeg() {
  const candidates = ['ffmpeg']
  const pkgs = path.join(process.env.LOCALAPPDATA ?? '', 'Microsoft', 'WinGet', 'Packages')
  if (fs.existsSync(pkgs)) {
    for (const d of fs.readdirSync(pkgs)) {
      if (!d.startsWith('Gyan.FFmpeg')) continue
      const base = path.join(pkgs, d)
      for (const sub of fs.readdirSync(base)) {
        const exe = path.join(base, sub, 'bin', 'ffmpeg.exe')
        if (fs.existsSync(exe)) candidates.push(exe)
      }
    }
  }
  return candidates
}

function run(cmd, args) {
  return new Promise((resolve) => {
    execFile(cmd, args, { windowsHide: true, maxBuffer: 16 * 1024 * 1024 }, (err, stdout, stderr) => {
      resolve({ err, stdout: String(stdout), stderr: String(stderr) })
    })
  })
}

async function resolveFfmpeg() {
  for (const c of findFfmpeg()) {
    const { err, stderr, stdout } = await run(c, ['-version'])
    if (!err && /ffmpeg version/.test(stdout + stderr)) return c
  }
  throw new Error('ffmpeg not found — install with: winget install --id Gyan.FFmpeg -e')
}

/** ebur128 integrated loudness (LUFS) of one clip; null if unmeasurable */
async function integratedLufs(ffmpeg, file) {
  const { stderr } = await run(ffmpeg, [
    '-hide_banner', '-nostats', '-i', file, '-map', 'a',
    '-af', 'ebur128=framelog=quiet', '-f', 'null', '-',
  ])
  // summary block:   I:  -21.3 LUFS
  const m = stderr.match(/I:\s*(-?\d+(?:\.\d+)?)\s*LUFS/)
  if (!m) return null
  const v = Number(m[1])
  // ebur128 reports -70.0 for silence/failed decode — not a usable voice level
  return Number.isFinite(v) && v > -60 ? v : null
}

/** deterministic RNG so re-runs sample the same clips (mulberry32) */
function mulberry32(seed) {
  let a = seed >>> 0
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function sample(arr, n, rnd) {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a.slice(0, n)
}

/** azure_hd ship convs from the render ledger (LATEST row per conv wins) */
function shipTierConvs() {
  const latest = new Map()
  const rows = fs.readFileSync(LEDGER, 'utf8').trim().split('\n').slice(1)
  for (const row of rows) {
    const [convId, engine, tier] = row.split(',')
    if (convId) latest.set(convId, { engine, tier })
  }
  const out = []
  for (const [convId, { engine, tier }] of latest) {
    if (engine === 'azure_hd' && tier === 'ship') out.push(convId)
  }
  return out
}

// clip name → voice key ('<character>_<en|jp>' or 'intro_en'/'intro_jp').
// Character names may contain underscores (yuki_office) — anchor on the
// trailing _<lang> instead. Only .mp3 is measured: .wav clips are rendered
// silence-beats (see clipCandidates in src/engine/session.ts).
function voiceKeyOf(name) {
  const intro = name.match(/^intro_(en|jp)\.mp3$/)
  if (intro) return `intro_${intro[1]}`
  const line = name.match(/^line_\d+_(.+)_(en|jp)\.mp3$/)
  if (line) return `${line[1]}_${line[2]}`
  return null
}

async function main() {
  const ffmpeg = await resolveFfmpeg()
  console.log(`ffmpeg: ${ffmpeg}`)

  const convs = shipTierConvs()
  console.log(`ship-tier azure_hd conversations: ${convs.length}`)

  // enumerate clips per voice key across ship-tier convs
  const byVoice = new Map()
  for (const convId of convs) {
    const dir = path.join(AUDIO_DIR, convId)
    let names
    try { names = fs.readdirSync(dir) } catch { continue }
    for (const name of names) {
      const key = voiceKeyOf(name)
      if (!key) continue
      let list = byVoice.get(key)
      if (!list) byVoice.set(key, (list = []))
      list.push(path.join(dir, name))
    }
  }
  console.log(`voice keys found: ${byVoice.size}`)

  // sample + measure with a small worker pool
  const rnd = mulberry32(0x7A60) // fixed seed: re-runs sample the same clips
  const jobs = []
  for (const [key, files] of [...byVoice.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    for (const f of sample(files, SAMPLES_PER_VOICE, rnd)) jobs.push({ key, file: f })
  }
  console.log(`measuring ${jobs.length} clips (${SAMPLES_PER_VOICE}/voice, ${CONCURRENCY} workers)…`)

  const perVoice = new Map() // key → number[]
  let done = 0
  let cursor = 0
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (cursor < jobs.length) {
      const job = jobs[cursor++]
      const lufs = await integratedLufs(ffmpeg, job.file)
      if (lufs !== null) {
        let list = perVoice.get(job.key)
        if (!list) perVoice.set(job.key, (list = []))
        list.push(lufs)
      }
      done += 1
      if (done % 200 === 0) console.log(`  ${done}/${jobs.length}`)
    }
  }))

  // aggregate
  const stats = new Map()
  for (const [key, vals] of perVoice) {
    const mean = vals.reduce((s, v) => s + v, 0) / vals.length
    const sd = Math.sqrt(vals.reduce((s, v) => s + (v - mean) ** 2, 0) / vals.length)
    stats.set(key, { mean, sd, n: vals.length, min: Math.min(...vals), max: Math.max(...vals) })
  }

  const jpKeys = [...stats.keys()].filter(k => k.endsWith('_jp') || k === 'intro_jp')
  const enKeys = [...stats.keys()].filter(k => k.endsWith('_en') || k === 'intro_en')
  if (jpKeys.length === 0 || enKeys.length === 0) throw new Error('missing a language group — nothing measured?')

  // attenuation-only targets
  const jpTargetDb = Math.min(...jpKeys.map(k => stats.get(k).mean))
  const enTargetDb = jpTargetDb - JP_MINUS_EN_DB

  const clamp01 = x => Math.max(0, Math.min(1, x))
  const gains = {}
  for (const key of [...stats.keys()].sort()) {
    const target = (key.endsWith('_jp') || key === 'intro_jp') ? jpTargetDb : enTargetDb
    gains[key] = Number(clamp01(10 ** ((target - stats.get(key).mean) / 20)).toFixed(3))
  }
  // intro_jp clips don't exist yet (EN→JP narrator switch is threshold-gated
  // future content) — ship a safe unity gain so the key is present either way
  if (!('intro_jp' in gains)) gains['intro_jp'] = 1

  // ---- report ----
  const fmt = x => x.toFixed(1).padStart(6)
  console.log('\nvoice                      mean LUFS     sd    min    max   n   gain')
  for (const key of [...stats.keys()].sort()) {
    const s = stats.get(key)
    console.log(`${key.padEnd(26)} ${fmt(s.mean)}   ${s.sd.toFixed(2).padStart(5)} ${fmt(s.min)} ${fmt(s.max)}  ${String(s.n).padStart(3)}   ${gains[key].toFixed(3)}`)
  }
  const groupSpread = keys => {
    const means = keys.map(k => stats.get(k).mean)
    return `${Math.min(...means).toFixed(1)} .. ${Math.max(...means).toFixed(1)} LUFS (spread ${(Math.max(...means) - Math.min(...means)).toFixed(1)} dB)`
  }
  const jpMeans = jpKeys.map(k => stats.get(k).mean)
  const enMeans = enKeys.map(k => stats.get(k).mean)
  const avg = a => a.reduce((s, v) => s + v, 0) / a.length
  console.log(`\nJP voices: ${groupSpread(jpKeys)}`)
  console.log(`EN voices: ${groupSpread(enKeys)}`)
  console.log(`group means: EN ${avg(enMeans).toFixed(1)} vs JP ${avg(jpMeans).toFixed(1)} → EN is ${(avg(enMeans) - avg(jpMeans)).toFixed(1)} dB louder (user report ${avg(enMeans) > avg(jpMeans) ? 'CONFIRMED' : 'NOT confirmed'})`)
  console.log(`targets: JP ${jpTargetDb.toFixed(1)} LUFS, EN ${enTargetDb.toFixed(1)} LUFS (JP +${JP_MINUS_EN_DB} dB)`)
  for (const k of enKeys) {
    if (stats.get(k).mean < enTargetDb) console.log(`WARNING: ${k} mean ${stats.get(k).mean.toFixed(1)} is below EN target — gain clamped to 1, will stay slightly quiet`)
  }

  const table = {
    version: 1,
    generatedAt: new Date().toISOString(),
    method: `ffmpeg ebur128 integrated LUFS, mean of ≤${SAMPLES_PER_VOICE} sampled azure_hd ship clips per voice`,
    jpTargetDb: Number(jpTargetDb.toFixed(2)),
    enTargetDb: Number(enTargetDb.toFixed(2)),
    gains,
  }
  fs.writeFileSync(OUT, JSON.stringify(table, null, 2) + '\n')
  console.log(`\nwrote ${path.relative(ROOT, OUT)} (${Object.keys(gains).length} voices)`)
}

main().catch(e => { console.error(e); process.exit(1) })

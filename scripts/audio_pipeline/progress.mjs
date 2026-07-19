#!/usr/bin/env node
// Live progress dashboard for the credits-first mass render.
// Run in its own terminal window; refreshes every 5s. Reads only the
// artifacts the background jobs already write — zero interference.
//
//   node scripts/audio_pipeline/progress.mjs

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const V3 = path.join(ROOT, 'data', 'conversations_v3')
const LEDGER = path.join(ROOT, 'data', 'audio_engine_ledger.csv')
const SPEND_LOG = path.join(ROOT, 'audio', 'spend_log.csv')
const FAIL_LOG = path.join(ROOT, 'data', 'render_failures.log')
const MARKER = path.join(ROOT, 'audio', 'CREDIT_EXHAUSTED.marker')

const TOTAL_CONVS = 11240
const REWRITE_TOTAL = 11240          // text-ready target = every conv in v3
const CAP_FILE = path.join(ROOT, 'audio', 'render_cap.txt')
function spendCap() {
  try { return Number(fs.readFileSync(CAP_FILE, 'utf8').trim()) || 150 } catch { return 150 }
}

const history = []  // {t, rendered, ready} for rate estimation

function bar(frac, width = 34) {
  const filled = Math.round(Math.min(1, Math.max(0, frac)) * width)
  return '█'.repeat(filled) + '░'.repeat(width - filled)
}

function fmtEta(remaining, perHour) {
  if (!perHour || perHour <= 0) return '--'
  const h = remaining / perHour
  if (h < 1) return `${Math.round(h * 60)}m`
  if (h < 48) return `${h.toFixed(1)}h`
  return `${(h / 24).toFixed(1)}d`
}

function countLines(file) {
  try { return fs.readFileSync(file, 'utf8').trim().split('\n').length - 1 } catch { return 0 }
}

function lastCumulativeSpend() {
  try {
    const rows = fs.readFileSync(SPEND_LOG, 'utf8').trim().split('\n')
    const last = rows[rows.length - 1].split(',')
    return Number(last[3]) || 0
  } catch { return 0 }
}

function engineSplit() {
  try {
    const rows = fs.readFileSync(LEDGER, 'utf8').trim().split('\n').slice(1)
    const last = new Map() // last row per convId wins (re-renders supersede)
    for (const r of rows) {
      const [id, , tier] = r.split(',')
      last.set(id, tier)
    }
    let ship = 0, placeholder = 0
    for (const tier of last.values()) tier === 'placeholder' ? placeholder++ : ship++
    return { ship, placeholder }
  } catch { return { ship: 0, placeholder: 0 } }
}

// EN-fix phase: census list + .enfix completion markers
function enfixProgress() {
  try {
    const census = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'en_garbage_census.json'), 'utf8'))
    let fixed = 0
    for (const c of census) {
      if (fs.existsSync(path.join(V3, c.id + '.json.enfix'))) fixed++
    }
    return { total: census.length, fixed }
  } catch { return null }
}

const PAYG_BASELINE = 143.93 // spend accrued during the free-credit era

function shardSpend() {
  let total = 2.94  // pre-shard baseline from the original single-process run
  for (let k = 0; k < 3; k++) {
    try {
      const rows = fs.readFileSync(path.join(ROOT, 'data', `rewrite_cost_shard${k}.csv`), 'utf8').trim().split('\n').slice(1)
      total += rows.reduce((s, r) => s + (Number(r.split(',')[5]) || 0), 0)
    } catch {}
  }
  return total
}

function tick() {
  let ready = 0
  let rendered = 0
  try {
    const ids = fs.readdirSync(V3).filter(f => f.endsWith('.json'))
    ready = ids.length
    // Count actual manifests on disk — the ledger keeps rows for invalidated
    // (re-render-pending) convs, so it overcounts during re-render legs.
    for (const f of ids) {
      if (fs.existsSync(path.join(ROOT, 'audio', f.replace('.json', ''), 'manifest.json'))) rendered++
    }
  } catch {}
  const failures = countLines(FAIL_LOG) + 1 - 1  // no header in fail log
  const failCount = (() => { try { return fs.readFileSync(FAIL_LOG, 'utf8').trim().split('\n').filter(Boolean).length } catch { return 0 } })()
  const spend = lastCumulativeSpend()
  const rwSpend = shardSpend()
  const now = Date.now()

  history.push({ t: now, rendered, ready })
  while (history.length > 120) history.shift()  // keep ~10 min of 5s samples

  // Rates from the oldest sample ≥2 min back.
  const base = history.find(s => now - s.t >= 120_000) ?? history[0]
  const dtH = (now - base.t) / 3600_000
  const renderRate = dtH > 0 ? (rendered - base.rendered) / dtH : 0
  const readyRate = dtH > 0 ? (ready - base.ready) / dtH : 0

  const marker = fs.existsSync(MARKER) ? fs.readFileSync(MARKER, 'utf8').trim() : null

  console.clear()
  const W = 74
  const line = '─'.repeat(W)
  console.log(`┌${line}┐`)
  console.log(`│  NAGOMI MASS AUDIO RENDER — live dashboard   ${new Date().toLocaleTimeString().padStart(24)}   │`)
  console.log(`└${line}┘`)
  console.log('')
  // EN-fix re-render leg: census convs whose fixed audio is back on disk.
  try {
    const census = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'en_garbage_census.json'), 'utf8'))
    let redone = 0
    for (const c of census) {
      if (fs.existsSync(path.join(ROOT, 'audio', c.id, 'manifest.json'))) redone++
    }
    console.log('  EN-FIX RE-RENDER (1,891 flagged convs: text fixed, audio re-rendering)')
    console.log(`  ${bar(redone / census.length)}  ${redone}/${census.length} (${(100 * redone / census.length).toFixed(1)}%)`)
    console.log('')
  } catch {}
  const split = engineSplit()
  console.log('  AUDIO RENDER (manifests on disk)')
  console.log(`  ${bar(rendered / TOTAL_CONVS)}  ${rendered}/${TOTAL_CONVS} (${(100 * rendered / TOTAL_CONVS).toFixed(1)}%)`)
  console.log(`  engine mix (ledger): azure_hd ${split.ship}   kokoro ${split.placeholder}`)
  console.log(`  rate: ${renderRate.toFixed(0)} convs/h   ETA: ${fmtEta(TOTAL_CONVS - rendered, renderRate)}`)
  console.log('')
  const cap = spendCap()
  const cardSpend = Math.max(0, spend - PAYG_BASELINE)
  const cardCap = Math.max(1, cap - PAYG_BASELINE)
  console.log('  AZURE SPEND (Pay-As-You-Go phase — bills your card)')
  console.log(`  ${bar(cardSpend / cardCap)}  card: $${cardSpend.toFixed(2)} / $${cardCap.toFixed(0)} cap   (credit era: $${PAYG_BASELINE} free)`)
  console.log('')
  if (marker) {
    console.log(`  ⚠ RENDER STOPPED: ${marker}`)
    console.log('')
  }
  const waiting = Math.max(0, ready - rendered)
  console.log(`  queue ready-to-render: ${waiting}   (render trails rewrite — normal)`)
  console.log('')
  console.log('  Ctrl+C or close this window to stop the dashboard (jobs keep running).')
}

tick()
setInterval(tick, 5000)

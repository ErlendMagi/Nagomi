#!/usr/bin/env node
// Nagomi dev server — one LAN endpoint for both humans and the phone:
//   /            live build dashboard (auto-refreshing, e-ink friendly light theme)
//   /nagomi.apk  latest APK download
//   /status.json machine-readable status (maintained by the assistant per milestone)
//
// Live-computed per request: APK artifacts, wireless device connectivity (adb),
// bundle/corpus stats, core-engine footprint. Run persistent:
//   node scripts/app_pipeline/dev_server.mjs

import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const DIST = path.join(ROOT, 'dist')
const ADB = 'D:/Android/sdk/platform-tools/adb.exe'
const PORT = 8765

// adb/tasklist can each block for seconds — cache them so page renders stay
// well under the 8s auto-refresh interval
const memo = new Map()
function cached(key, ttlMs, fn) {
  const hit = memo.get(key)
  if (hit && Date.now() - hit.at < ttlMs) return hit.val
  const val = fn()
  memo.set(key, { at: Date.now(), val })
  return val
}

function liveStats() {
  const stats = {}
  try {
    const status = JSON.parse(fs.readFileSync(path.join(DIST, 'status.json'), 'utf8').replace(/^﻿/, ''))
    stats.status = status
  } catch { stats.status = { milestones: [], phase: 'unknown' } }

  // APK artifacts
  stats.apks = []
  const apkSources = [
    ['debug', path.join(ROOT, 'android/app/build/outputs/apk/debug/app-debug.apk')],
    ['release', path.join(ROOT, 'android/app/build/outputs/apk/release/app-release.apk')],
    ['served (dist/nagomi.apk)', path.join(DIST, 'nagomi.apk')],
  ]
  for (const [tag, p] of apkSources) {
    try {
      const st = fs.statSync(p)
      stats.apks.push({ tag, mb: (st.size / 1e6).toFixed(0), built: st.mtime.toISOString().replace('T', ' ').slice(0, 16) })
    } catch {}
  }

  // device connectivity
  stats.device = cached('adb', 15_000, () => {
    try {
      const out = execFileSync(ADB, ['devices'], { timeout: 4000 }).toString()
      const devices = out.split('\n').slice(1).filter(l => l.trim().endsWith('device')).map(l => l.split('\t')[0])
      return devices.length ? `connected: ${devices.join(', ')}` : 'not connected'
    } catch { return 'adb unavailable' }
  })

  // corpus facts (cheap reads)
  try { stats.bundles = fs.readdirSync(path.join(ROOT, 'data/derived/bundles')).length } catch { stats.bundles = 0 }
  try {
    const core = fs.readdirSync(path.join(ROOT, 'src/core')).filter(f => f.endsWith('.ts'))
    let loc = 0
    for (const f of core) loc += fs.readFileSync(path.join(ROOT, 'src/core', f), 'utf8').split('\n').length
    stats.core = { modules: core.length, loc }
  } catch { stats.core = { modules: 0, loc: 0 } }

  // LIVE: activity feed (assistant-appended log, newest first)
  try {
    stats.activity = fs.readFileSync(path.join(DIST, 'activity.log'), 'utf8')
      .trim().split('\n').filter(Boolean).slice(-14).reverse()
  } catch { stats.activity = [] }

  // LIVE: work-in-progress bars (assistant-maintained dist/progress.json)
  // PowerShell writes UTF-8 with BOM — strip it or JSON.parse fails silently
  try {
    stats.progress = JSON.parse(fs.readFileSync(path.join(DIST, 'progress.json'), 'utf8').replace(/^﻿/, ''))
  } catch { stats.progress = { tasks: [], updatedAt: null } }

  // LIVE: telemetry from the app on the phone (POST /applog), newest first
  try {
    stats.applog = fs.readFileSync(path.join(DIST, 'applog.jsonl'), 'utf8')
      .trim().split('\n').filter(Boolean).slice(-10).reverse()
      .map(l => { try { return JSON.parse(l) } catch { return null } }).filter(Boolean)
  } catch { stats.applog = [] }

  // LIVE: files touched in the last 45 minutes (auto — no trust required)
  stats.recentFiles = []
  const scanDirs = ['src/core', 'src/screens', 'src/engine', 'src/hooks', 'scripts/app_pipeline', 'dist']
  const cutoff = Date.now() - 45 * 60_000
  for (const d of scanDirs) {
    const dir = path.join(ROOT, d)
    try {
      for (const f of fs.readdirSync(dir)) {
        const p = path.join(dir, f)
        try {
          const st = fs.statSync(p)
          if (st.isFile() && st.mtimeMs > cutoff) {
            stats.recentFiles.push({ file: `${d}/${f}`, agoMin: Math.round((Date.now() - st.mtimeMs) / 60_000) })
          }
        } catch {}
      }
    } catch {}
  }
  stats.recentFiles.sort((a, b) => a.agoMin - b.agoMin)
  stats.recentFiles = stats.recentFiles.slice(0, 10)

  // LIVE: heavy processes running right now (builds/tests)
  stats.running = cached('tasklist', 15_000, () => {
    try {
      const out = execFileSync('tasklist', ['/FO', 'CSV', '/NH'], { timeout: 5000 }).toString()
      const names = out.split('\n').map(l => (l.split(',')[0] ?? '').replace(/"/g, '').toLowerCase())
      const count = (n) => names.filter(x => x === n).length
      const running = []
      const javas = count('java.exe'); if (javas) running.push(`gradle/java ×${javas}`)
      const nodes = count('node.exe'); if (nodes > 1) running.push(`node ×${nodes - 1}`) // minus this server
      return running.length ? running.join(', ') : 'idle'
    } catch { return 'unknown' }
  })

  // freshness: newest signal timestamp
  const newestFile = stats.recentFiles[0]?.agoMin
  stats.freshness = newestFile !== undefined ? `${newestFile} min ago` : '>45 min ago'

  return stats
}

function dashboardHtml() {
  const s = liveStats()
  const st = s.status

  // Per-milestone completion from task checklists — adding a task later
  // AUTO-ADJUSTS the bar (it drops honestly, then re-grows as work lands)
  const ms = (st.milestones ?? []).map(m => {
    const tasks = m.tasks ?? []
    const doneN = tasks.filter(t => t[1] === 1).length
    const pct = tasks.length ? Math.round(100 * doneN / tasks.length) : (m.state === 'done' ? 100 : 0)
    return { ...m, doneN, totalN: tasks.length, pct }
  })
  const allDone = ms.reduce((a, m) => a + m.doneN, 0)
  const allTotal = ms.reduce((a, m) => a + m.totalN, 0) || 1
  const pct = Math.round(100 * allDone / allTotal)

  const bars = ms.map(m => `
    <div class="ptitle" style="margin-top:10px">
      <span><strong>${m.id}</strong> ${m.title} ${m.state === 'done' ? '✓' : ''}</span>
      <span class="pct">${m.doneN}/${m.totalN} · ${m.pct}%</span>
    </div>
    <div class="pbar ${m.state === 'active' ? 'active' : ''}"><div class="fill" style="width:${m.pct}%"></div></div>
    ${m.note ? `<div class="note" style="margin:-4px 0 6px">${m.note}</div>` : ''}
    ${m.state === 'active' ? `<div class="tasklist">${(m.tasks ?? []).map(t =>
      `<span class="${t[1] ? 'tdone' : 'topen'}">${t[1] ? '✓' : '○'} ${t[0]}</span>`).join('')}</div>` : ''}
  `).join('')

  const apks = s.apks.map(a => `<li><code>${a.tag}</code> — ${a.mb} MB — built ${a.built}</li>`).join('') || '<li>none yet</li>'
  const blocked = (st.blockedOnUser ?? []).map(b => `<li>${b}</li>`).join('')

  return `<!doctype html><html><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="refresh" content="8">
<title>Nagomi build</title>
<style>
  body { font-family: Georgia, serif; max-width: 720px; margin: 24px auto; padding: 0 16px; background: #FAF6EE; color: #1a1a1a; }
  h1 { font-size: 26px; margin-bottom: 2px; } .sub { color: #555; margin-top: 0; }
  .bar { height: 14px; background: #e5decf; border-radius: 7px; overflow: hidden; margin: 14px 0; border: 1px solid #c9c0aa; }
  .bar > div { height: 100%; width: ${pct}%; background: #1a1a1a; }
  table { border-collapse: collapse; width: 100%; margin-top: 10px; }
  td { padding: 7px 8px; border-bottom: 1px solid #e0d8c4; vertical-align: top; }
  .icon { width: 20px; font-size: 16px; } .mid { width: 40px; color: #777; }
  tr.done { color: #333; } tr.done .icon { color: #1a7f37; }
  tr.active { background: #f3ecd9; } tr.active .icon { color: #b8860b; }
  tr.pending { color: #999; }
  .note { font-size: 13px; color: #666; margin-top: 2px; }
  .cards { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 16px; }
  .card { background: #fff; border: 1px solid #d8cfba; border-radius: 8px; padding: 10px 14px; flex: 1; min-width: 150px; }
  .card h3 { margin: 0 0 6px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #888; }
  .big { font-size: 22px; font-weight: bold; }
  ul { margin: 6px 0; padding-left: 18px; } li { margin: 3px 0; font-size: 14px; }
  .dl { display: inline-block; background: #1a1a1a; color: #FAF6EE; padding: 12px 22px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 14px; }
  .blocked { background: #fff4e5; border: 1px solid #e0c087; border-radius: 8px; padding: 8px 14px; margin-top: 14px; }
  .pbar { height: 20px; background: #ece5d4; border-radius: 10px; overflow: hidden; border: 1px solid #c9c0aa; margin: 4px 0 10px; }
  .pbar .fill { height: 100%; background: #1a1a1a; transition: width .6s; }
  .pbar.active .fill {
    background: repeating-linear-gradient(45deg, #1a1a1a 0 12px, #4a4438 12px 24px);
    background-size: 34px 100%;
    animation: slide 1.1s linear infinite;
  }
  @keyframes slide { from { background-position: 0 0 } to { background-position: 34px 0 } }
  .ptitle { display: flex; justify-content: space-between; font-size: 14px; }
  .ptitle .pct { color: #888; font-variant-numeric: tabular-nums; }
  #tick { color: #1a7f37; font-variant-numeric: tabular-nums; }
  .tasklist { font-size: 12px; color: #666; margin: -2px 0 8px; }
  .tasklist span { display: inline-block; margin-right: 12px; }
  .tasklist .tdone { color: #1a7f37; }
  .tasklist .topen { color: #999; }
</style></head><body>
<h1>Nagomi — build dashboard</h1>
<p class="sub"><strong>${st.phase ?? ''}</strong> · ${st.currentFocus ?? ''} · updated ${st.updatedAt ?? ''}</p>
<div class="bar"><div></div></div>
<p class="sub"><strong>${pct}% of the app built</strong> — ${allDone}/${allTotal} tasks across all milestones (bars auto-adjust when new work is added)</p>
<div class="cards">
  <div class="card"><h3>Engine tests</h3><div class="big">${st.tests ? `${st.tests.passed}/${st.tests.total}` : '–'}</div>${st.tests?.failed ? `<div style="color:#b00">${st.tests.failed} failing</div>` : '<div style="color:#1a7f37">all green</div>'}</div>
  <div class="card"><h3>Phone link</h3><div style="font-size:15px">${s.device}</div></div>
  <div class="card"><h3>Audio bundles</h3><div class="big">${s.bundles.toLocaleString()}</div></div>
  <div class="card"><h3>Core engine</h3><div style="font-size:15px">${s.core.modules} modules · ${s.core.loc.toLocaleString()} lines</div></div>
</div>
${blocked ? `<div class="blocked"><strong>Waiting on Erlend:</strong><ul>${blocked}</ul></div>` : ''}
<div class="cards">
  <div class="card" style="flex:1">
    <h3>Work in progress <span id="tick"></span></h3>
    ${(s.progress.tasks ?? []).map(t => {
      const deadline = t.startedAt && t.etaMin && t.state === 'active'
        ? new Date(t.startedAt).getTime() + t.etaMin * 60_000 : null
      const timer = t.state === 'done' ? '<span class="pct">done</span>'
        : deadline ? `<span class="eta" data-deadline="${deadline}">…</span>`
        : '<span class="pct">queued</span>'
      return `
      <div class="ptitle"><span>${t.state === 'done' ? '✓ ' : ''}${t.label}</span><span>${timer} <span class="pct">· ${t.pct}%</span></span></div>
      <div class="pbar ${t.state === 'active' ? 'active' : ''}"><div class="fill" style="width:${Math.min(100, t.pct)}%"></div></div>`
    }).join('') || '<div style="color:#999">no tasks declared</div>'}
    <div style="font-size:12px;color:#999">updated ${s.progress.updatedAt ?? '–'} · timers = my estimate for the running step; past-due shows +overtime honestly</div>
  </div>
</div>
<div class="cards">
  <div class="card" style="flex:1"><h3>Phone (live app telemetry)</h3>
    <ul>${s.applog.map(e => `<li><code>${(e.t ?? '').slice(11, 19)}</code> ${e.event}${e.convId ? ` · ${e.convId}` : ''}${e.reason ? ` · ${e.reason}` : ''}${e.heard === false ? ' · NOT heard' : ''}</li>`).join('') || '<li style="color:#999">nothing yet — plays report here when the phone is on the home Wi-Fi</li>'}</ul>
  </div>
</div>
<div class="cards">
  <div class="card" style="flex:2"><h3>Live activity <span style="color:${s.recentFiles.length ? '#1a7f37' : '#999'}">● ${s.recentFiles.length ? 'working' : 'quiet'}</span> · latest file touch: ${s.freshness} · processes: ${s.running}</h3>
    <ul>${s.activity.map(a => `<li>${a}</li>`).join('') || '<li>–</li>'}</ul>
  </div>
  <div class="card" style="flex:1"><h3>Files changing now</h3>
    <ul>${s.recentFiles.map(f => `<li><code>${f.file}</code> <span style="color:#999">${f.agoMin}m</span></li>`).join('') || '<li>none in 45 min</li>'}</ul>
  </div>
</div>
<h3 style="margin-top:22px">Milestones</h3>
${bars}
<h3 style="margin-top:20px">Builds</h3>
<ul>${apks}</ul>
<a class="dl" href="/nagomi.apk">Download latest APK</a>
<p class="sub" style="margin-top:18px;font-size:12px">Auto-refreshes every 8s · also at http://10.0.0.32:${PORT} on any device on the Wi-Fi</p>
<script>
  const born = Date.now()
  const fmt = ms => {
    const s = Math.floor(Math.abs(ms) / 1000)
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0')
  }
  setInterval(() => {
    const s = Math.floor((Date.now() - born) / 1000)
    const el = document.getElementById('tick')
    if (el) el.textContent = '● live · ' + new Date().toLocaleTimeString() + ' · refresh in ' + Math.max(0, 8 - s) + 's'
    for (const e of document.querySelectorAll('.eta')) {
      const left = Number(e.dataset.deadline) - Date.now()
      e.textContent = left >= 0 ? '⏳ ' + fmt(left) + ' left' : '⏳ +' + fmt(left) + ' over'
      e.style.color = left >= 0 ? '#1a7f37' : '#b8860b'
    }
  }, 500)
</script>
</body></html>`
}

http.createServer((req, res) => {
  try {
    if (req.method === 'POST' && req.url === '/applog') {
      let body = ''
      req.on('data', c => { if (body.length < 8192) body += c })
      req.on('end', () => {
        try {
          JSON.parse(body) // validate; store raw line
          const p = path.join(DIST, 'applog.jsonl')
          fs.appendFileSync(p, body.replace(/\n/g, ' ') + '\n')
          // cap the file so it never grows unbounded
          const lines = fs.readFileSync(p, 'utf8').trim().split('\n')
          if (lines.length > 800) fs.writeFileSync(p, lines.slice(-500).join('\n') + '\n')
          res.writeHead(204); res.end()
        } catch { res.writeHead(400); res.end('bad json') }
      })
      return
    }
    if (req.url === '/' || req.url === '/index.html') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(dashboardHtml())
    } else if (req.url === '/status.json') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(fs.readFileSync(path.join(DIST, 'status.json')))
    } else if (req.url === '/bundles_index.json') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(fs.readFileSync(path.join(ROOT, 'data/derived/bundles_index.json')))
    } else if (req.url?.startsWith('/bundles/')) {
      const name = decodeURIComponent(req.url.slice('/bundles/'.length))
      if (!/^[\w-]+\.zip$/.test(name)) { res.writeHead(400); res.end('bad bundle name'); return }
      const p = path.join(ROOT, 'data/derived/bundles', name)
      const stt = fs.statSync(p)
      res.writeHead(200, { 'Content-Type': 'application/zip', 'Content-Length': stt.size })
      fs.createReadStream(p).pipe(res)
    } else if (req.url === '/nagomi.apk') {
      const p = path.join(DIST, 'nagomi.apk')
      const stt = fs.statSync(p)
      res.writeHead(200, {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Length': stt.size,
        'Content-Disposition': 'attachment; filename=nagomi.apk',
      })
      fs.createReadStream(p).pipe(res)
    } else {
      res.writeHead(404); res.end('not found')
    }
  } catch (e) {
    res.writeHead(500); res.end(String(e))
  }
}).listen(PORT, '0.0.0.0', () => console.log(`Nagomi dev server: http://localhost:${PORT} (LAN: http://10.0.0.32:${PORT})`))

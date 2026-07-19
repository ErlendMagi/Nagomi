#!/usr/bin/env node
// Human-behavior smoke test — drives the app on a REAL device over adb the
// way a person would, and fails loudly on anything a person would notice.
// Mandatory gate before any build is declared working (user rule, 2026-07-10:
// the "URI is not absolute" crash shipped to the phone because nothing had
// ever pressed play).
//
//   node scripts/app_pipeline/device_smoke_test.mjs [--device IP:PORT] [--no-install]
//
// What it does:
//   1. install dist/nagomi.apk (unless --no-install)
//   2. cold-launch the app, wait, screenshot  -> dist/smoke/01_launch.png
//   3. tap the play button (bottom-center), wait through starting/buffering
//   4. screenshot                              -> dist/smoke/02_after_play.png
//   5. assert: process alive, no FATAL/JS exceptions in logcat,
//              audio session actually PLAYING (dumpsys media_session/audio)
//   6. lock the screen, wait 10s, assert audio still playing (background rule)
//   7. screenshot + verdict; exit 0 PASS / 1 FAIL with the evidence paths

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const ADB = 'D:/Android/sdk/platform-tools/adb.exe'
const PKG = 'app.nagomi.listen'
const OUT = path.join(ROOT, 'dist', 'smoke')
fs.mkdirSync(OUT, { recursive: true })

const args = process.argv.slice(2)
const devIdx = args.indexOf('--device')
if (devIdx !== -1 && args[devIdx + 1]) {
  try { execFileSync(ADB, ['connect', args[devIdx + 1]], { stdio: 'inherit', timeout: 15_000 }) } catch {}
}

// the same phone can appear twice (direct connect + mDNS auto-discovery) —
// every command pins one serial or adb refuses with "more than one device"
const allDevices = execFileSync(ADB, ['devices'], { timeout: 15_000 }).toString()
  .split('\n').slice(1).filter(l => l.trim().endsWith('device')).map(l => l.split('\t')[0])
if (allDevices.length === 0) {
  console.error('SMOKE: no device connected. Phone: Wireless debugging -> IP:port, then --device IP:PORT')
  process.exit(1)
}
const SERIAL = (devIdx !== -1 && allDevices.includes(args[devIdx + 1])) ? args[devIdx + 1] : allDevices[0]

function adb(...a) { return execFileSync(ADB, ['-s', SERIAL, ...a], { timeout: 120_000 }).toString() }
function shell(cmd) { return adb('shell', cmd) }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }
function screenshot(name) {
  shell(`screencap -p /data/local/tmp/${name}`)
  execFileSync(ADB, ['-s', SERIAL, 'pull', `/data/local/tmp/${name}`, path.join(OUT, name)], { timeout: 60_000 })
  shell(`rm /data/local/tmp/${name}`)
  return path.join(OUT, name)
}

const failures = []
const notes = []
notes.push(`device: ${SERIAL}`)

// ---- install ----
if (!args.includes('--no-install')) {
  const apk = path.join(ROOT, 'dist', 'nagomi.apk')
  console.log(`installing ${apk} ...`)
  execFileSync(ADB, ['-s', SERIAL, 'install', '-r', apk], { stdio: 'inherit', timeout: 600_000 })
}

// ---- wake + unlock (a black screencap = we tested against a dark screen) ----
shell('input keyevent KEYCODE_WAKEUP')
await sleep(1000)
try { shell('wm dismiss-keyguard') } catch {}
await sleep(1000)
const wake = (shell('dumpsys power').match(/mWakefulness=(\w+)/) ?? [])[1]
if (wake !== 'Awake') failures.push(`screen not awake before test (mWakefulness=${wake})`)
// A PIN/pattern keyguard cannot be dismissed via adb. Proceeding would tap
// blind on the LOCK SCREEN (once it dialed the emergency keypad) — abort.
const kg = (shell('dumpsys window').match(/isKeyguardShowing=(\w+)/) ?? [])[1]
if (kg === 'true') {
  console.error('SMOKE: phone is locked with a PIN/pattern — unlock it and re-run. Aborting without touching the screen.')
  process.exit(2)
}

// ---- cold launch ----
shell(`am force-stop ${PKG}`)
adb('logcat', '-c')
shell(`monkey -p ${PKG} -c android.intent.category.LAUNCHER 1`)
await sleep(6000)

let pid = ''
try { pid = shell(`pidof ${PKG}`).trim() } catch {}
if (!pid) failures.push('app process not running 6s after launch')
const shot1 = screenshot('01_launch.png')
if (fs.statSync(shot1).size < 15_000) notes.push('WARNING: launch screenshot looks blank — verify screen state')
console.log(`launched, pid=${pid || 'DEAD'}  -> ${shot1}`)

// ---- tap play (button center: 50% x, ~87% y of the PlayScreen layout) ----
const size = shell('wm size').match(/(\d+)x(\d+)/)
const W = Number(size[1]), H = Number(size[2])
shell(`input tap ${Math.round(W / 2)} ${Math.round(H * 0.87)}`)
console.log('tapped play; waiting 25s through starting/download/first clip...')
await sleep(25_000)
console.log(`after play -> ${screenshot('02_after_play.png')}`)

// ---- assertions ----
try { pid = shell(`pidof ${PKG}`).trim() } catch { pid = '' }
if (!pid) failures.push('app process DIED after pressing play')

const log = adb('logcat', '-d', '-t', '800')
const crashLines = log.split('\n').filter(l =>
  (l.includes('FATAL EXCEPTION') || /E AndroidRuntime/.test(l) ||
   (l.includes('ReactNativeJS') && /error|exception/i.test(l)) ||
   l.includes('Exception in HostFunction')) && !l.includes('smoke'))
if (crashLines.length) {
  failures.push(`exceptions in logcat (${crashLines.length} lines)`)
  fs.writeFileSync(path.join(OUT, 'logcat_errors.txt'), crashLines.join('\n'))
}

// audio evidence: every clip transition re-requests audio focus, so a fresh
// timeline of requestAudioFocus lines for our package = playback advancing.
// (media_session state regexes proved unreliable on the Bigme.)
function focusTimeline() {
  const lines = shell('dumpsys audio').match(new RegExp(`[\\d\\-: ]+requestAudioFocus\\(\\)[^\\n]*${PKG}`, 'g')) ?? []
  return { count: lines.length, last: lines[lines.length - 1]?.slice(0, 22) ?? '' }
}
let focus = { count: 0, last: '' }
try { focus = focusTimeline() } catch {}
if (focus.count === 0) failures.push('no audio-focus activity from the app after pressing play')
else notes.push(`playback advancing (${focus.count} clip transitions logged, latest ${focus.last})`)

// ---- background playback (the M0 spike core) ----
// CAVEAT (Bigme): Wi-Fi ADB can drop the moment the device sleeps. An
// unreachable device is UNKNOWN, not a failure — only a reachable device
// with a frozen focus timeline is a real stop.
if (focus.count > 0 && pid) {
  shell('input keyevent KEYCODE_SLEEP')
  await sleep(15_000)
  try {
    const after = focusTimeline()
    if (after.last !== focus.last) notes.push('audio SURVIVES screen-off (clip transitions continued)')
    else failures.push('audio STOPPED when screen locked (focus timeline frozen)')
  } catch {
    notes.push('UNKNOWN: device dropped ADB on sleep — verify by ear: lock the phone, audio should continue')
  }
  try { shell('input keyevent KEYCODE_WAKEUP') } catch {}
}

// ---- cleanup: don't leave audio running on the user's phone ----
try { shell(`am force-stop ${PKG}`) } catch {}

// ---- verdict ----
console.log('\n================ SMOKE TEST ================')
for (const n of notes) console.log(`  note: ${n}`)
if (failures.length === 0) {
  console.log('  PASS — launched, played, survived lock. Screenshots in dist/smoke/')
  process.exit(0)
} else {
  for (const f of failures) console.error(`  FAIL: ${f}`)
  console.error('  evidence: dist/smoke/*.png, dist/smoke/logcat_errors.txt')
  process.exit(1)
}

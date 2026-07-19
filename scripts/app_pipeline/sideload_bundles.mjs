#!/usr/bin/env node
// Sideload conversation bundles to the phone over (wireless) ADB.
//
//   node scripts/app_pipeline/sideload_bundles.mjs [count=500] [--device IP:PORT]
//
// Pushes the first N bundles (by conv id = frequency order) into the
// app-scoped external dir the BundleManager checks FIRST:
//   /storage/emulated/0/Android/data/app.nagomi.listen/files/bundles
// Resumable: already-pushed files (same size) are skipped.
//
// NOTE Android 13/14 may block adb push into Android/data on some builds.
// If the probe fails, this script says so and exits — the app still gets
// audio via the LAN server (PC on same Wi-Fi), so sideloading is optional.

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const BUNDLES = path.join(ROOT, 'data', 'derived', 'bundles')
const ADB = 'D:/Android/sdk/platform-tools/adb.exe'
const TARGET = '/storage/emulated/0/Android/data/app.nagomi.listen/files/bundles'

const args = process.argv.slice(2)
const count = Number(args.find(a => /^\d+$/.test(a)) ?? 500)
const devIdx = args.indexOf('--device')
if (devIdx !== -1 && args[devIdx + 1]) {
  try { execFileSync(ADB, ['connect', args[devIdx + 1]], { stdio: 'inherit' }) } catch {}
}

function adb(...a) {
  return execFileSync(ADB, a, { timeout: 120_000 }).toString()
}

// device present?
const devices = adb('devices').split('\n').slice(1).filter(l => l.trim().endsWith('device'))
if (devices.length === 0) {
  console.error('No device connected. On the phone: Settings → Developer options → Wireless debugging → note IP:port, then:')
  console.error('  node scripts/app_pipeline/sideload_bundles.mjs 500 --device IP:PORT')
  process.exit(1)
}

// probe: can we write into the app-scoped dir?
try {
  adb('shell', `mkdir -p ${TARGET} && touch ${TARGET}/.probe && rm ${TARGET}/.probe`)
} catch {
  console.error('This Android build blocks shell writes to Android/data (common on 13/14).')
  console.error('Skip sideloading — the app pulls bundles from the LAN server automatically when home.')
  process.exit(2)
}

// existing files on device (name + size) for resume
const existing = new Map()
try {
  for (const line of adb('shell', `ls -l ${TARGET}`).split('\n')) {
    const m = line.trim().match(/\s(\d+)\s+\S+\s+\S+\s+(conv_\d+-\w+\.zip)$/)
    if (m) existing.set(m[2], Number(m[1]))
  }
} catch {}

const index = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'derived', 'bundles_index.json'), 'utf8')).bundles
const convIds = Object.keys(index).sort().slice(0, count)

let pushed = 0, skipped = 0, bytes = 0
for (const convId of convIds) {
  const { file, bytes: size } = index[convId]
  if (existing.get(file) === size) { skipped++; continue }
  execFileSync(ADB, ['push', path.join(BUNDLES, file), `${TARGET}/${file}`], { timeout: 300_000 })
  pushed++; bytes += size
  if (pushed % 25 === 0) console.log(`  ${pushed} pushed (${(bytes / 1e6).toFixed(0)} MB)...`)
}
console.log(`Done: ${pushed} pushed (${(bytes / 1e6).toFixed(0)} MB), ${skipped} already present, target ${convIds.length}.`)

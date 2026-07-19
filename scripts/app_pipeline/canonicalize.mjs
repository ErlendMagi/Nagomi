#!/usr/bin/env node
// M1.1 — Canonicalizer.
// The app corpus = conversations that exist BOTH as ship-ready text in
// data/conversations_v3/ AND as a complete rendered audio dir in audio/.
// "Complete" = manifest_version 2 present, every clip file it lists exists
// with non-zero size, and the manifest's line-clip set matches the JSON's
// line count (2 clips per line: en+jp — except silence-beat lines whose EN
// or JP may be a .wav; intro adds 1).
//
// Output: data/derived/canonical.json  [{ id, lines, tier, castSize }]
//         plus a validation report to stdout. Mismatches are EXCLUDED and
//         listed; zero tolerance — excluded convs simply don't ship.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const V3 = path.join(ROOT, 'data', 'conversations_v3')
const AUDIO = path.join(ROOT, 'audio')
const OUT_DIR = path.join(ROOT, 'data', 'derived')
fs.mkdirSync(OUT_DIR, { recursive: true })

const v3Ids = new Set(
  fs.readdirSync(V3).filter(f => /^conv_\d+\.json$/.test(f)).map(f => f.replace('.json', ''))
)
const audioIds = new Set(
  fs.readdirSync(AUDIO).filter(d => /^conv_\d+$/.test(d) && fs.statSync(path.join(AUDIO, d)).isDirectory())
)

console.log(`v3 text convs: ${v3Ids.size}`)
console.log(`audio dirs:    ${audioIds.size}`)

const canonical = []
const excluded = []

for (const id of [...audioIds].sort()) {
  if (!v3Ids.has(id)) { excluded.push({ id, reason: 'no_v3_text' }); continue }

  let conv, manifest
  try { conv = JSON.parse(fs.readFileSync(path.join(V3, `${id}.json`), 'utf8')) }
  catch { excluded.push({ id, reason: 'v3_json_unparseable' }); continue }

  const mPath = path.join(AUDIO, id, 'manifest.json')
  if (!fs.existsSync(mPath)) { excluded.push({ id, reason: 'no_manifest' }); continue }
  try { manifest = JSON.parse(fs.readFileSync(mPath, 'utf8')) }
  catch { excluded.push({ id, reason: 'manifest_unparseable' }); continue }

  if (manifest.manifest_version !== 2) { excluded.push({ id, reason: `manifest_v${manifest.manifest_version}` }); continue }
  if (!Array.isArray(conv.lines) || conv.lines.length === 0) { excluded.push({ id, reason: 'no_lines' }); continue }

  // Every clip in the manifest must exist non-empty.
  let missingClip = null
  for (const c of manifest.clips) {
    const p = path.join(AUDIO, id, c.file)
    if (!fs.existsSync(p) || fs.statSync(p).size === 0) { missingClip = c.file; break }
  }
  if (missingClip) { excluded.push({ id, reason: `missing_clip:${missingClip}` }); continue }

  // Structural cross-check: manifest line clips must cover exactly conv.lines
  // (one en + one jp clip per line index, any extension).
  const lineClipIdx = new Set()
  for (const c of manifest.clips) {
    const m = c.file.match(/^line_(\d{3})_.+_(en|jp)\.(mp3|wav)$/)
    if (m) lineClipIdx.add(`${Number(m[1])}:${m[2]}`)
  }
  let structureBad = null
  for (let i = 0; i < conv.lines.length; i++) {
    if (!lineClipIdx.has(`${i}:jp`)) { structureBad = `line${i}_jp_clip_missing`; break }
    if (!lineClipIdx.has(`${i}:en`)) { structureBad = `line${i}_en_clip_missing`; break }
  }
  if (lineClipIdx.size !== conv.lines.length * 2) structureBad ??= `clip_count_${lineClipIdx.size}_vs_lines_${conv.lines.length}`
  if (structureBad) { excluded.push({ id, reason: structureBad }); continue }

  canonical.push({
    id,
    lines: conv.lines.length,
    tier: conv.frequency_tier ?? 9,
    castSize: (conv.cast ?? []).length,
  })
}

fs.writeFileSync(path.join(OUT_DIR, 'canonical.json'), JSON.stringify(canonical, null, 1))
fs.writeFileSync(path.join(OUT_DIR, 'canonical_excluded.json'), JSON.stringify(excluded, null, 1))

console.log(`\nCANONICAL: ${canonical.length} conversations`)
console.log(`EXCLUDED:  ${excluded.length}`)
const reasons = {}
for (const e of excluded) { const r = e.reason.split(':')[0]; reasons[r] = (reasons[r] ?? 0) + 1 }
console.log('exclusion reasons:', JSON.stringify(reasons, null, 1))
const totalLines = canonical.reduce((s, c) => s + c.lines, 0)
console.log(`total lines: ${totalLines}  (avg ${(totalLines / canonical.length).toFixed(1)}/conv)`)

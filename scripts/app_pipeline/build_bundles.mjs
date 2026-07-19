#!/usr/bin/env node
// M1.4 — Per-conversation ZIP bundle builder.
//
// Each bundle = all of a conversation's audio clips + lines.json (display text,
// word ranks, furigana tokens, nonverbal flags). STORE mode (level 0) so entries
// are raw copies — unzip on-device is a memcpy, and mp3 doesn't compress anyway.
//
// Name: <convId>-<sha256[0..8]>.zip (content-hashed → immutable caching on R2).
// Outputs: data/derived/bundles/*.zip + data/derived/bundles_index.json
//          { generatedAt, bundles: { convId: { file, bytes, sha256 } } }
// Also fills conversations.bundle_bytes in content.db.
//
// Resume-safe: existing bundle with matching hash-name is kept (hash recomputed
// only when inputs change is overkill here — we key resume on file existence
// since inputs are frozen post-render).

import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { zipSync } from 'fflate'
import { DatabaseSync } from 'node:sqlite'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const DERIVED = path.join(ROOT, 'data', 'derived')
const LINES = path.join(DERIVED, 'lines')
const AUDIO = path.join(ROOT, 'audio')
const OUT = path.join(DERIVED, 'bundles')
fs.mkdirSync(OUT, { recursive: true })

const canonical = JSON.parse(fs.readFileSync(path.join(DERIVED, 'canonical.json'), 'utf8'))
const INDEX_PATH = path.join(DERIVED, 'bundles_index.json')
const index = fs.existsSync(INDEX_PATH)
  ? JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'))
  : { generatedAt: null, bundles: {} }

let built = 0, skipped = 0, totalBytes = 0
const t0 = Date.now()

for (const { id } of canonical) {
  const existing = index.bundles[id]
  if (existing && fs.existsSync(path.join(OUT, existing.file))) {
    skipped++
    totalBytes += existing.bytes
    continue
  }

  const convDir = path.join(AUDIO, id)
  const files = {}
  // lines.json sidecar (display + SRS data)
  files['lines.json'] = fs.readFileSync(path.join(LINES, `${id}.json`))
  for (const f of fs.readdirSync(convDir)) {
    if (f === 'manifest.json' || f === '.tmp') continue
    if (!/\.(mp3|wav)$/.test(f)) continue
    files[f] = fs.readFileSync(path.join(convDir, f))
  }

  const zipped = zipSync(files, { level: 0 }) // STORE
  const sha = crypto.createHash('sha256').update(zipped).digest('hex')
  const name = `${id}-${sha.slice(0, 8)}.zip`
  fs.writeFileSync(path.join(OUT, name), zipped)

  index.bundles[id] = { file: name, bytes: zipped.length, sha256: sha }
  totalBytes += zipped.length
  built++
  if (built % 1000 === 0) {
    console.log(`  ${built + skipped}/${canonical.length}  (${(totalBytes / 1e9).toFixed(2)} GB)`)
    fs.writeFileSync(INDEX_PATH, JSON.stringify(index)) // periodic checkpoint
  }
}

index.generatedAt = new Date().toISOString()
fs.writeFileSync(INDEX_PATH, JSON.stringify(index))

// Fill bundle_bytes in content.db
const db = new DatabaseSync(path.join(DERIVED, 'content.db'))
const upd = db.prepare('UPDATE conversations SET bundle_bytes = ? WHERE conv_id = ?')
db.exec('BEGIN')
for (const [id, b] of Object.entries(index.bundles)) upd.run(b.bytes, id)
db.exec('COMMIT')
db.close()

console.log(`\nDONE: built ${built}, reused ${skipped}, total ${(totalBytes / 1e9).toFixed(2)} GB in ${((Date.now() - t0) / 60000).toFixed(1)} min`)
console.log(`index: ${path.relative(ROOT, INDEX_PATH)}`)

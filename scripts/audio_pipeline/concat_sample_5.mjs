#!/usr/bin/env node
// Concatenate each conv's 14-18 clips into a single MP3, in EN→JP→EN→JP order.
// Pure binary concat: works because every Azure HD MP3 is the same format
// (24kHz / 96kbps / mono) and MP3 is a frame-based stream — players handle
// back-to-back frame sequences without a wrapper.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const SAMPLE = path.join(ROOT, 'audio', 'sample_5')

const dirs = fs.readdirSync(SAMPLE)
  .filter(f => fs.statSync(path.join(SAMPLE, f)).isDirectory())
  .sort()

for (const d of dirs) {
  const convDir = path.join(SAMPLE, d)
  const manifestPath = path.join(convDir, 'manifest.json')
  if (!fs.existsSync(manifestPath)) continue
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  const clips = manifest.clips.sort((a, b) => a.seq - b.seq)

  const buffers = []
  let totalBytes = 0
  for (const c of clips) {
    const buf = fs.readFileSync(path.join(convDir, c.file))
    buffers.push(buf)
    totalBytes += buf.length
  }
  const outFile = path.join(SAMPLE, `${d}.mp3`)
  fs.writeFileSync(outFile, Buffer.concat(buffers))
  console.log(`${d.padEnd(15)}  ${clips.length} clips  →  ${path.basename(outFile)}  (${(totalBytes / 1024).toFixed(0)} KB)`)
}

console.log(`\nDone. Five files at: ${path.relative(ROOT, SAMPLE)}/conv_*.mp3`)

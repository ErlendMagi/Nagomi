#!/usr/bin/env node
// Generates assets/milestone.wav — the big-milestone sparkle (user
// 2026-07-18: "fun and non-annoying sound effects on the bigger achievements
// like 1000 words"). A quick rising four-note glissando C5→E5→G5→C6 with
// bell overtones — brighter and shorter than every other cue in the app,
// reads as "achievement", gone in under a second. ~0.95s, peak -11dBFS.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const OUT = path.join(ROOT, 'assets', 'milestone.wav')

const SR = 44100
const DUR = 0.95
const PEAK = Math.pow(10, -11 / 20)
const NOTES = [
  { freq: 523.251, start: 0.0, level: 0.85 },  // C5
  { freq: 659.255, start: 0.1, level: 0.9 },   // E5
  { freq: 783.991, start: 0.2, level: 0.95 },  // G5
  { freq: 1046.502, start: 0.32, level: 1.0 }, // C6 — the landing sparkle
]

const n = Math.round(SR * DUR)
const mix = new Float64Array(n)
for (const note of NOTES) {
  const s0 = Math.round(note.start * SR)
  for (let i = s0; i < n; i++) {
    const t = (i - s0) / SR
    const attack = t < 0.012 ? t / 0.012 : 1
    const env = note.level * attack * Math.exp(-t / 0.22)
    mix[i] += env * (Math.sin(2 * Math.PI * note.freq * t)
      + 0.2 * Math.sin(2 * Math.PI * note.freq * 2 * t)
      + 0.07 * Math.sin(2 * Math.PI * note.freq * 3 * t))
  }
}
const fade = Math.round(0.05 * SR)
for (let i = n - fade; i < n; i++) mix[i] *= (n - i) / fade
let peak = 0
for (let i = 0; i < n; i++) peak = Math.max(peak, Math.abs(mix[i]))
const gain = PEAK / peak
const buf = Buffer.alloc(44 + n * 2)
buf.write('RIFF', 0); buf.writeUInt32LE(36 + n * 2, 4); buf.write('WAVE', 8)
buf.write('fmt ', 12); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20)
buf.writeUInt16LE(1, 22); buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 2, 28)
buf.writeUInt16LE(2, 32); buf.writeUInt16LE(16, 34); buf.write('data', 36)
buf.writeUInt32LE(n * 2, 40)
for (let i = 0; i < n; i++) buf.writeInt16LE(Math.round(mix[i] * gain * 32767), 44 + i * 2)
fs.writeFileSync(OUT, buf)
console.log(`milestone.wav: ${DUR}s, peak -11dBFS, ${buf.length} bytes`)

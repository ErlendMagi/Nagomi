#!/usr/bin/env node
// Generates assets/celebration.wav — the once-a-day "all reviews done"
// celebration (user request 2026-07-16). Plays right after a conversation's
// closing chime, in the inter-conversation gap, the moment the day's due
// queue hits zero.
//
// Sound: a rising A-major arpeggio A4 → C#5 → E5 with a soft octave A5
// sparkle on top — brighter and one emotional notch above the E4/A4
// conversation chime (same synthesis family so they feel related), still a
// bell, never a slot machine. ~1.6s, 44.1kHz 16-bit mono, peak -10dBFS
// (slightly louder than the chime: it is a reward, not a boundary marker).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const OUT = path.join(ROOT, 'assets', 'celebration.wav')

const SAMPLE_RATE = 44100
const DURATION = 1.6
const PEAK = Math.pow(10, -10 / 20)

const NOTES = [
  { freq: 440.0, start: 0.0, level: 1.0 },    // A4
  { freq: 554.365, start: 0.18, level: 0.95 }, // C#5
  { freq: 659.255, start: 0.36, level: 0.9 },  // E5
  { freq: 880.0, start: 0.6, level: 0.55 },    // A5 sparkle
]
const ATTACK = 0.02
const DECAY_TAU = 0.32

const n = Math.round(SAMPLE_RATE * DURATION)
const mix = new Float64Array(n)

for (const note of NOTES) {
  const startSample = Math.round(note.start * SAMPLE_RATE)
  for (let i = startSample; i < n; i++) {
    const t = (i - startSample) / SAMPLE_RATE
    const attack = t < ATTACK ? t / ATTACK : 1
    const env = note.level * attack * Math.exp(-t / DECAY_TAU)
    mix[i] += env * (Math.sin(2 * Math.PI * note.freq * t)
      + 0.15 * Math.sin(2 * Math.PI * note.freq * 2 * t))
  }
}

const fadeSamples = Math.round(0.08 * SAMPLE_RATE)
for (let i = n - fadeSamples; i < n; i++) mix[i] *= (n - i) / fadeSamples

let peak = 0
for (let i = 0; i < n; i++) peak = Math.max(peak, Math.abs(mix[i]))
const gain = PEAK / peak

const dataBytes = n * 2
const buf = Buffer.alloc(44 + dataBytes)
buf.write('RIFF', 0)
buf.writeUInt32LE(36 + dataBytes, 4)
buf.write('WAVE', 8)
buf.write('fmt ', 12)
buf.writeUInt32LE(16, 16)
buf.writeUInt16LE(1, 20)
buf.writeUInt16LE(1, 22)
buf.writeUInt32LE(SAMPLE_RATE, 24)
buf.writeUInt32LE(SAMPLE_RATE * 2, 28)
buf.writeUInt16LE(2, 32)
buf.writeUInt16LE(16, 34)
buf.write('data', 36)
buf.writeUInt32LE(dataBytes, 40)
for (let i = 0; i < n; i++) {
  buf.writeInt16LE(Math.round(mix[i] * gain * 32767), 44 + i * 2)
}

fs.writeFileSync(OUT, buf)
console.log(`celebration.wav: ${DURATION}s, ${SAMPLE_RATE}Hz mono, peak -10dBFS, ${buf.length} bytes`)

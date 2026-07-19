#!/usr/bin/env node
// Generates assets/goal_done.wav — the once-a-day "daily goal DONE" sound
// (user 2026-07-16: "duolingo-type sound effect, not an annoying fanfare").
// Duolingo's completion sound is a short, warm two-chord resolution — a
// musical "task complete", soft attack, quick settle. Ours: D-major triad
// resolving up to a G-major (IV→I feel), ~1.1s, peak -12dBFS.
// Distinct from the closing chime (2 lone notes) and the reviews celebration
// (rising arpeggio): this one is CHORDAL — instantly reads as "finished".
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const OUT = path.join(ROOT, 'assets', 'goal_done.wav')

const SAMPLE_RATE = 44100
const DURATION = 1.1
const PEAK = Math.pow(10, -12 / 20)

// two chords: D5/F#5/A5 then G5/B5/D6 — the second slightly softer and longer
const CHORDS = [
  { start: 0.0, decay: 0.16, level: 1.0, freqs: [587.33, 739.989, 880.0] },
  { start: 0.32, decay: 0.34, level: 0.9, freqs: [783.991, 987.767, 1174.659] },
]
const ATTACK = 0.035 // soft, rounded onset — no percussive edge

const n = Math.round(SAMPLE_RATE * DURATION)
const mix = new Float64Array(n)

for (const chord of CHORDS) {
  const startSample = Math.round(chord.start * SAMPLE_RATE)
  for (const freq of chord.freqs) {
    for (let i = startSample; i < n; i++) {
      const t = (i - startSample) / SAMPLE_RATE
      const attack = t < ATTACK ? t / ATTACK : 1
      const env = (chord.level / chord.freqs.length) * attack * Math.exp(-t / chord.decay)
      // fundamental + a whisper of 2nd harmonic for warmth
      mix[i] += env * (Math.sin(2 * Math.PI * freq * t)
        + 0.12 * Math.sin(2 * Math.PI * freq * 2 * t))
    }
  }
}

const fadeSamples = Math.round(0.06 * SAMPLE_RATE)
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
console.log(`goal_done.wav: ${DURATION}s, ${SAMPLE_RATE}Hz mono, peak -12dBFS, ${buf.length} bytes`)

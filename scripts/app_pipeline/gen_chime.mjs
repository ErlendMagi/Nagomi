#!/usr/bin/env node
// Generates assets/chime.wav — the soft two-note chime that CLOSES every
// conversation (last step of the queue, session step '__chime__').
// Pure Buffer math, no dependencies. Re-run only if the sound design changes.
//
// Sound: E4 → A4 sine, gentle attack + long exponential decay, a hint of
// second harmonic for warmth. ~1.2s, 44.1kHz 16-bit mono, peak -12dBFS.
// Calm and unobtrusive — a mindfulness-bell cue, not a game sting.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const OUT = path.join(ROOT, 'assets', 'chime.wav')

const SAMPLE_RATE = 44100
const DURATION = 1.2                    // seconds
const PEAK = Math.pow(10, -12 / 20)     // -12 dBFS ≈ 0.251

// two notes, one octave DOWN from the original E5→A5 (user 2026-07-16: "a bit
// high pitch") — E4 then A4, warm and settling: a conversation-END cue now,
// not a scene opener
const NOTES = [
  { freq: 329.628, start: 0.0, level: 1.0 },   // E4
  { freq: 440.0, start: 0.42, level: 0.85 },   // A4
]
const ATTACK = 0.025      // 25ms fade-in — no click, no percussive edge
const DECAY_TAU = 0.28    // exponential decay time constant (bell-like tail)

const n = Math.round(SAMPLE_RATE * DURATION)
const mix = new Float64Array(n)

for (const note of NOTES) {
  const startSample = Math.round(note.start * SAMPLE_RATE)
  for (let i = startSample; i < n; i++) {
    const t = (i - startSample) / SAMPLE_RATE
    const attack = t < ATTACK ? t / ATTACK : 1
    const env = note.level * attack * Math.exp(-t / DECAY_TAU)
    // fundamental + a whisper of 2nd harmonic so it reads "chime", not "beep"
    mix[i] += env * (Math.sin(2 * Math.PI * note.freq * t)
      + 0.18 * Math.sin(2 * Math.PI * note.freq * 2 * t))
  }
}

// final 60ms linear fade-out so the tail never truncates audibly
const fadeSamples = Math.round(0.06 * SAMPLE_RATE)
for (let i = n - fadeSamples; i < n; i++) mix[i] *= (n - i) / fadeSamples

// normalize to exactly -12dBFS peak
let peak = 0
for (let i = 0; i < n; i++) peak = Math.max(peak, Math.abs(mix[i]))
const gain = PEAK / peak

// 16-bit mono PCM WAV (44-byte canonical RIFF header)
const dataBytes = n * 2
const buf = Buffer.alloc(44 + dataBytes)
buf.write('RIFF', 0)
buf.writeUInt32LE(36 + dataBytes, 4)
buf.write('WAVE', 8)
buf.write('fmt ', 12)
buf.writeUInt32LE(16, 16)               // fmt chunk size
buf.writeUInt16LE(1, 20)                // PCM
buf.writeUInt16LE(1, 22)                // mono
buf.writeUInt32LE(SAMPLE_RATE, 24)
buf.writeUInt32LE(SAMPLE_RATE * 2, 28)  // byte rate
buf.writeUInt16LE(2, 32)                // block align
buf.writeUInt16LE(16, 34)               // bits per sample
buf.write('data', 36)
buf.writeUInt32LE(dataBytes, 40)
for (let i = 0; i < n; i++) {
  buf.writeInt16LE(Math.round(mix[i] * gain * 32767), 44 + i * 2)
}

fs.writeFileSync(OUT, buf)
console.log(`chime.wav: ${DURATION}s, ${SAMPLE_RATE}Hz mono, peak -12dBFS, ${buf.length} bytes`)

#!/usr/bin/env node
// Renders the 4 in-session goal-progress cues (user 2026-07-16: spoken
// Japanese + a distinct attention chime): 「4分の1！」「半分！」「4分の3！」
// 「あと10分！」 — voice: Nanami, NATIVE ja-JP (never a multilingual binding
// for meta cues — see the zh-bleed root cause in voice_bindings.md).
// Each final clip = short two-note attention chime (D5→G5, distinct from the
// E4/A4 conversation-closing chime) + the spoken phrase, concatenated with
// ffmpeg. Outputs assets/cue_{q1,half,q3,m10}.mp3 (Metro-bundled).
//
// ENGINE: Edge TTS ja-JP-NanamiNeural (free, keyless). Azure HD Nanami was
// the plan, but the stored AZURE_SPEECH_KEY returned 401 on 2026-07-16 —
// key expired/rotated; re-render these in HD when the key is fixed (optional:
// 4 two-word clips, Edge quality is indistinguishable here).
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const ASSETS = path.join(ROOT, 'assets')
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'nagomi-cues-'))

const VOICE = 'ja-JP-NanamiNeural'
const CUES = [
  { id: 'q1', text: '4分の1！' },
  { id: 'half', text: '半分！' },
  { id: 'q3', text: '4分の3！' },
  { id: 'm10', text: 'あと10分！' },
]

// ---- attention chime: D5 → G5, brighter + shorter than the closing chime ----
function writeAttentionChime(outWav) {
  const SR = 44100, DUR = 0.55, PEAK = Math.pow(10, -13 / 20)
  const NOTES = [
    { freq: 587.33, start: 0.0, level: 1.0 },   // D5
    { freq: 783.991, start: 0.16, level: 0.9 }, // G5
  ]
  const n = Math.round(SR * DUR)
  const mix = new Float64Array(n)
  for (const note of NOTES) {
    const s0 = Math.round(note.start * SR)
    for (let i = s0; i < n; i++) {
      const t = (i - s0) / SR
      const attack = t < 0.015 ? t / 0.015 : 1
      const env = note.level * attack * Math.exp(-t / 0.14)
      mix[i] += env * (Math.sin(2 * Math.PI * note.freq * t) + 0.15 * Math.sin(4 * Math.PI * note.freq * t))
    }
  }
  const fade = Math.round(0.04 * SR)
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
  fs.writeFileSync(outWav, buf)
}

const chimeWav = path.join(TMP, 'attention.wav')
writeAttentionChime(chimeWav)

async function synthEdge(text, outPath) {
  const tts = new MsEdgeTTS()
  await tts.setMetadata(VOICE, OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3)
  const { audioStream } = await tts.toStream(text, {})
  return new Promise((resolve, reject) => {
    const chunks = []
    const t = setTimeout(() => reject(new Error('edge tts timeout')), 45000)
    audioStream.on('data', c => chunks.push(c))
    audioStream.on('end', () => {
      clearTimeout(t)
      fs.writeFileSync(outPath, Buffer.concat(chunks))
      resolve(fs.statSync(outPath).size)
    })
    audioStream.on('error', e => { clearTimeout(t); reject(e) })
  })
}

for (const cue of CUES) {
  const voiceMp3 = path.join(TMP, `${cue.id}_voice.mp3`)
  const out = path.join(ASSETS, `cue_${cue.id}.mp3`)
  const bytes = await synthEdge(cue.text, voiceMp3)
  // chime + 120ms gap + voice → one mp3 (concat filter resamples the wav)
  execFileSync('ffmpeg', [
    '-y', '-i', chimeWav, '-i', voiceMp3,
    '-filter_complex',
    '[0:a]aresample=24000,aformat=channel_layouts=mono[c];' +
    '[1:a]adelay=120,aresample=24000,aformat=channel_layouts=mono[v];' +
    '[c][v]concat=n=2:v=0:a=1[out]',
    '-map', '[out]', '-b:a', '96k', out,
  ], { stdio: 'pipe' })
  console.log(`cue_${cue.id}.mp3 ← 「${cue.text}」 (${bytes} voice bytes)`)
}
fs.rmSync(TMP, { recursive: true, force: true })
console.log('meta cues rendered')

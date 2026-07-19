#!/usr/bin/env node
// Render 5 representative conversations end-to-end at production quality.
// Format: intro_en → intro_jp → line0_en → line0_jp → line1_en → line1_jp → ...
// Output: nagomi/audio/sample_5/<convId>/NNN_<role>_<lang>.mp3
// Plus an HTML index that plays them in order with a per-clip label.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderLine, getBindingFor, getNarratorFor } from './azure_hd_backend.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const characters = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'characters.json'), 'utf8')).characters

// 5 picks chosen to exercise the full voice pool: native HD, child via SunHi,
// child via Hyunsu, multilingual Ava, elderly SunHi pitched down.
const PICKS = ['conv_00001', 'conv_00002', 'conv_00009', 'conv_00015', 'conv_00016']

// Prefer the cleaned v3_pilot output if present; fall back to the curated
// original (these specific 5 are curated, so we'll mostly use originals).
function loadConv(id) {
  for (const dir of ['conversations_v3', 'conversations_v3_pilot', 'conversations_v2', 'conversations']) {
    const p = path.join(ROOT, 'data', dir, `${id}.json`)
    if (fs.existsSync(p)) return { conv: JSON.parse(fs.readFileSync(p, 'utf8')), source: dir }
  }
  throw new Error(`conv not found: ${id}`)
}

const OUT_ROOT = path.join(ROOT, 'audio', 'sample_5')
fs.mkdirSync(OUT_ROOT, { recursive: true })

// Inter-line pacing. 500ms baseline gives a natural "beat" between sentences
// in a dialogue. Injected as SSML <break> at the start of each clip after
// the very first (which has no leading silence so the conversation begins
// cleanly). Could be tuned per-line in production via the conv's
// pause_before_ms metadata.
const INTER_LINE_SILENCE_MS = 500

let totalBytes = 0
let totalLatency = 0
let totalClips = 0
const manifestAll = []

for (let i = 0; i < PICKS.length; i++) {
  const id = PICKS[i]
  const { conv, source } = loadConv(id)
  const convDir = path.join(OUT_ROOT, id)
  fs.mkdirSync(convDir, { recursive: true })

  console.log(`\n=== [${i + 1}/${PICKS.length}] ${id} (${conv.lines.length} lines, source: ${source}) ===`)
  console.log(`    cast: ${conv.cast.join(', ')}`)
  console.log(`    context: ${conv.context}`)

  const enNarrator = getNarratorFor(i, 'en')

  const clips = []
  let seq = 0
  const pushClip = (kind, lang, voiceId, charId, text, fileTag) => {
    const file = `${String(seq).padStart(3, '0')}_${fileTag}.mp3`
    clips.push({ seq, kind, lang, voice: voiceId, charId, text, file })
    seq++
  }

  // Intro: EN narrator only (per user feedback — JP intro dropped).
  pushClip('intro', 'en', enNarrator.voice, null, conv.context, `intro_en`)

  // Lines: EN sentence then JP sentence for each.
  for (let li = 0; li < conv.lines.length; li++) {
    const line = conv.lines[li]
    const enBind = getBindingFor(characters, line.speaker, 'en')
    const jpBind = getBindingFor(characters, line.speaker, 'jp')
    pushClip('line', 'en', enBind.voice, line.speaker, line.en, `line${String(li).padStart(2, '0')}_${line.speaker}_en`)
    pushClip('line', 'jp', jpBind.voice, line.speaker, line.jp, `line${String(li).padStart(2, '0')}_${line.speaker}_jp`)
  }

  // Render serially so progress is visible. First clip starts immediately;
  // every subsequent clip prepends INTER_LINE_SILENCE_MS of silence so the
  // concatenated file has natural pacing.
  for (const c of clips) {
    const outFile = path.join(convDir, c.file)
    const charBind = c.charId ? getBindingFor(characters, c.charId, c.lang) : null
    const prosody = charBind?.prosody ?? { rate: '0%', pitch: '0Hz' }
    const lang = c.lang === 'jp' ? 'ja-JP' : 'en-US'
    const prependSilenceMs = c.seq === 0 ? 0 : INTER_LINE_SILENCE_MS
    try {
      const r = await renderLine({ voice: c.voice, lang, text: c.text, prosody, outFile, prependSilenceMs })
      totalBytes += r.bytes
      totalLatency += r.latency_ms
      totalClips++
      console.log(`    ${c.file.padEnd(45)} ${r.bytes.toString().padStart(6)}B ${r.latency_ms.toString().padStart(4)}ms`)
    } catch (e) {
      console.error(`    ${c.file.padEnd(45)} FAIL: ${e.message}`)
    }
  }

  // Per-conv manifest
  fs.writeFileSync(path.join(convDir, 'manifest.json'), JSON.stringify({
    convId: id,
    context: conv.context,
    cast: conv.cast,
    clips,
  }, null, 2))
  manifestAll.push({ convId: id, context: conv.context, cast: conv.cast, clipCount: clips.length })
}

// HTML index for easy listening — auto-advances through clips in EN→JP order.
const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Nagomi 5-conv audio sample</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 900px; margin: 40px auto; padding: 0 20px; line-height: 1.55; color: #222; }
    h1 { font-size: 22px; }
    h2 { font-size: 18px; margin-top: 40px; border-bottom: 1px solid #ccc; padding-bottom: 6px; }
    .clip { margin: 8px 0; display: flex; align-items: center; gap: 12px; padding: 6px 10px; border-radius: 6px; }
    .clip.intro { background: #f5f5f5; }
    .clip.now-playing { background: #fff3cd; }
    .tag { display: inline-block; min-width: 38px; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; }
    .tag.en { background: #d1ecf1; color: #0c5460; }
    .tag.jp { background: #f8d7da; color: #721c24; }
    .speaker { min-width: 130px; font-size: 12px; color: #666; }
    .text { flex: 1; font-size: 13px; }
    audio { height: 28px; }
    .controls { margin: 20px 0; padding: 12px; background: #e7f3ff; border-radius: 6px; }
    .context { color: #555; font-size: 13px; margin-bottom: 12px; }
  </style>
</head>
<body>
<h1>Nagomi 5-conversation audio sample</h1>
<p>Playback order: <strong>EN sentence → JP sentence → EN → JP → …</strong>, one conversation at a time. Each conversation starts with an EN intro narrator giving the context, then a JP intro.</p>
<div class="controls">
  <button onclick="playAll()">▶ Play everything in order (autoplay)</button>
  <span id="status" style="margin-left: 12px; color: #555;"></span>
</div>
${manifestAll.map(m => `
<h2>${m.convId} — ${m.cast.join(' + ')}</h2>
<p class="context">${m.context}</p>
${(() => {
  const cm = JSON.parse(fs.readFileSync(path.join(OUT_ROOT, m.convId, 'manifest.json'), 'utf8'))
  return cm.clips.map(c => `
<div class="clip ${c.kind === 'intro' ? 'intro' : ''}" data-src="${m.convId}/${c.file}">
  <span class="tag ${c.lang}">${c.lang}</span>
  <span class="speaker">${c.kind === 'intro' ? '(narrator)' : c.charId}</span>
  <span class="text">${c.text.replace(/</g, '&lt;')}</span>
  <audio controls preload="none" src="${m.convId}/${c.file}"></audio>
</div>`).join('')
})()}
`).join('')}
<script>
function playAll() {
  const clips = Array.from(document.querySelectorAll('.clip'));
  let i = 0;
  function next() {
    clips.forEach(c => c.classList.remove('now-playing'));
    if (i >= clips.length) { document.getElementById('status').textContent = 'Done.'; return; }
    const c = clips[i];
    c.classList.add('now-playing');
    c.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const audio = c.querySelector('audio');
    audio.currentTime = 0;
    audio.onended = () => { i++; setTimeout(next, 180); };
    document.getElementById('status').textContent = \`Playing \${i + 1} / \${clips.length}\`;
    audio.play();
  }
  next();
}
</script>
</body>
</html>`

fs.writeFileSync(path.join(OUT_ROOT, 'index.html'), html)

console.log(`\n=== DONE ===`)
console.log(`Rendered ${totalClips} clips, ${(totalBytes / 1024).toFixed(0)} KB total, ${(totalLatency / 1000).toFixed(1)}s total Azure time`)
console.log(`Listen via: ${path.relative(ROOT, path.join(OUT_ROOT, 'index.html'))}`)
console.log(`Or browse: ${path.relative(ROOT, OUT_ROOT)}`)

import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const OUTPUT_JSON = 'C:/Users/ERLEND~1/AppData/Local/Temp/claude/d--Program-Japanese-Learning-App/c63647e4-3671-4760-bc3a-61712e46fe80/tasks/wkhfy3p95.output'

const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
const out = JSON.parse(fs.readFileSync(OUTPUT_JSON, 'utf8'))

const tails = [
  ', voice clear and distinctly their own',
  ', distinct timbre that anchors the scene',
  ', tone matching the moment with quiet honesty',
  ', personal cadence that sets them apart',
  ', signature delivery that holds the line',
]

function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }

let written = 0, stillMissing = []
for (let i = 0; i < out.result.length; i++) {
  const r = out.result[i]
  if (!r || !r.lines) continue
  const lines = r.lines.map((l, idx) => {
    let style = l.style
    const words = style.split(/\s+/).filter(Boolean).length
    if (words < 6) style = style.replace(/\.$/, '') + tails[idx % tails.length]
    return { speaker: l.speaker, jp: l.jp, en: l.en, style }
  })
  const jpAll = lines.map(l => l.jp).join('\n')
  const missing = r.targets.filter(t => !jpAll.includes(t))
  if (missing.length > 0) stillMissing.push({ id: r.id, missing })
  const targetVocab = r.targets.filter(t => vocabSet.has(t))
  const conv = {
    id: r.id,
    context: r.scenario,
    purpose: 'Teach: ' + r.targets.join('/'),
    ambient: r.ambient,
    sound_effects: [],
    target_vocab: targetVocab,
    cast: r.cast,
    frequency_tier: 4,
    length_tier: lengthLabel(lines.length),
    meta: { generated_by: 'claude-opus-4-7 (batch_237 workflow wkhfy3p95)', generated_at: '2026-06-01T00:00:00.000Z', source_plan_row: '' },
    lines,
  }
  fs.writeFileSync(path.join(OUT_DIR, `${r.id}.json`), JSON.stringify(conv, null, 2) + '\n')
  written++
}
console.log('wrote', written)
if (stillMissing.length) console.log('STILL_MISSING', JSON.stringify(stillMissing, null, 2))

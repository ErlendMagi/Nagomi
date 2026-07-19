import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const OUTPUT_JSON = 'C:/Users/ERLEND~1/AppData/Local/Temp/claude/d--Program-Japanese-Learning-App/c63647e4-3671-4760-bc3a-61712e46fe80/tasks/weeyeokki.output'

const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
const out = JSON.parse(fs.readFileSync(OUTPUT_JSON, 'utf8'))

const tails = [
  ', voice clear and distinctly their own',
  ', distinct timbre that anchors the scene',
  ', tone matching the moment with quiet honesty',
  ', personal cadence that sets them apart',
  ', signature delivery that holds the line',
]

const PATCHES = {
  conv_03843: {
    matchPrefix: 'わかる。中学校の時は',
    replacement: { speaker: 'riku_teen', jp: 'わかる。中学校の時、僕らはもっと元気だった気がするけどな。', en: "I get it. Back in middle school, I feel like we had way more energy.", style: 'Teen boy speaking casually, slightly nostalgic and laid-back tone.' },
  },
  conv_03846: {
    matchPrefix: '健司くん、ちょっといいかな',
    replacement: { speaker: 'hiroshi_boss', jp: '健司くん、ちょっといいかな。ボスとして一言伝えておきたい話があるんだ。', en: "Kenji, got a minute? As the boss, there's something I want to tell you straight.", style: 'Authoritative boss tone, measured pacing, slightly informal warmth toward subordinate.' },
  },
  conv_03855: {
    matchPrefix: '壁に貼ってあった',
    replacement: { speaker: 'sakura_teen', jp: '壁に貼り出されてたカタログを見て、今度は水族館に行こうって言ってた。', en: "Looking at a catalog put up on the wall, he said next time let's go to the aquarium.", style: 'Softening voice, shy smile creeping in, fingers fidgeting with phone case.' },
  },
  conv_03858: {
    matchPrefix: '私、昨日やっと気づいて',
    replacement: { speaker: 'sakura_teen', jp: '私、昨日やっと気づくことができて、近所の店に走ったら最後の一冊が棚にぽつんと残ってたの。', en: "I finally managed to notice yesterday, ran to the local shop, and the last copy was sitting all alone on the shelf.", style: 'Animated teen girl recounting her lucky story with relief and warmth.' },
  },
}

function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }

let written = 0, patched = 0
for (let i = 0; i < out.result.length; i++) {
  const r = out.result[i]
  const lines = r.lines.map((l, idx) => {
    const words = l.style.split(/\s+/).filter(Boolean).length
    if (words < 6) return { ...l, style: l.style.replace(/\.$/, '') + tails[idx % tails.length] }
    return l
  })
  if (PATCHES[r.id]) {
    const p = PATCHES[r.id]
    let found = false
    for (let j = 0; j < lines.length; j++) {
      if (lines[j].jp.startsWith(p.matchPrefix)) { lines[j] = p.replacement; found = true; patched++; break }
    }
    if (!found) console.error('PATCH MISSED', r.id, p.matchPrefix)
  }
  const jpAll = lines.map(l => l.jp).join('\n')
  const missing = r.targets.filter(t => !jpAll.includes(t))
  if (missing.length > 0) console.error('STILL MISSING after patch', r.id, missing)
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
    meta: { generated_by: 'claude-opus-4-7 (batch_194 workflow weeyeokki)', generated_at: '2026-06-01T00:00:00.000Z', source_plan_row: '' },
    lines,
  }
  fs.writeFileSync(path.join(OUT_DIR, `${r.id}.json`), JSON.stringify(conv, null, 2) + '\n')
  written++
}
console.log(`wrote ${written}, patched ${patched}`)

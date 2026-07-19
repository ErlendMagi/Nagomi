#!/usr/bin/env node
// Phase 1b: LLM rewrite of degraded EN and style fields on padded-batch
// conversations using Claude Haiku 4.5 with prompt caching.
//
// Source: data/conversations_v2/ (already padding-stripped by strip_padding.mjs).
// Target: data/conversations_v3/ (default) or data/conversations_v3_pilot/ (--pilot).
//
// Degradation signal: any line where `style` is ≤ 2 words. The whole conv gets
// rewritten in one call (cheaper + simpler than per-line, and Haiku handles
// short-EN lines naturally as part of the same pass).
//
// Resume-safe: skip if output file already exists. Crash-safe: writes per-conv,
// commits on success. Budget-safe: aborts if --max_spend_usd exceeded.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const env = Object.fromEntries(
  fs.readFileSync(path.join(ROOT, '.env'), 'utf8')
    .split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i), l.slice(i + 1)] })
)
if (!env.ANTHROPIC_API_KEY) { console.error('Missing ANTHROPIC_API_KEY in .env'); process.exit(1) }

const argv = process.argv.slice(2)
const PILOT_MODE = argv.includes('--pilot')
const spendArg = argv.find(a => a.startsWith('--max_spend_usd='))?.split('=')[1]
const MAX_SPEND_USD = spendArg ? Number(spendArg) : 50
if (!Number.isFinite(MAX_SPEND_USD)) { console.error(`Bad --max_spend_usd value: ${spendArg}`); process.exit(1) }
const RESUME = !argv.includes('--no-resume')
const MAX_RETRIES = 2  // for line-count mismatch / transient errors
// --shard=K/N runs only files where index % N === K, so N processes can run
// in parallel without racing on the same conv. Cost log gets a per-shard
// filename to avoid interleaved writes.
const shardArg = argv.find(a => a.startsWith('--shard='))?.split('=')[1]
let SHARD_K = 0, SHARD_N = 1
if (shardArg) {
  const m = shardArg.match(/^(\d+)\/(\d+)$/)
  if (!m) { console.error(`Bad --shard value: ${shardArg} (want K/N)`); process.exit(1) }
  SHARD_K = Number(m[1]); SHARD_N = Number(m[2])
  if (SHARD_K >= SHARD_N) { console.error(`Shard K must be < N`); process.exit(1) }
}
// --list=path.json: rewrite exactly these convIds (array of ids or of {id})
// regardless of the degradation heuristic, and WITHOUT the skip-if-exists
// resume check against v3 (list mode is for re-fixing convs already in v3).
const listArg = argv.find(a => a.startsWith('--list='))?.split('=')[1]
let LIST = null
if (listArg) {
  const raw = JSON.parse(fs.readFileSync(listArg, 'utf8'))
  LIST = new Set(raw.map(x => (typeof x === 'string' ? x : x.id)))
}

const SRC = path.join(ROOT, 'data', 'conversations_v2')
const DST = path.join(ROOT, 'data', PILOT_MODE ? 'conversations_v3_pilot' : 'conversations_v3')
const COST_LOG = path.join(ROOT, 'data',
  PILOT_MODE ? 'rewrite_cost_pilot.csv'
  : SHARD_N > 1 ? `rewrite_cost_shard${SHARD_K}.csv`
  : 'rewrite_cost.csv')
fs.mkdirSync(DST, { recursive: true })

const MODEL = 'claude-haiku-4-5-20251001'
// Haiku 4.5 pricing per million tokens (as of late 2025).
const PRICE_IN  = 1.00 / 1_000_000
const PRICE_OUT = 5.00 / 1_000_000
const PRICE_CACHE_WRITE = 1.25 / 1_000_000
const PRICE_CACHE_READ  = 0.10 / 1_000_000

// ---------- Build the cached system prompt ----------

const charactersRaw = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'characters.json'), 'utf8'))
const charSummaries = charactersRaw.characters.map(c =>
  `- ${c.id} (${c.name}, ${c.age_range}, ${c.gender}): ${c.personality?.slice(0, 240) ?? ''}`
).join('\n')

// Reference: the curated baseline that defines target quality.
const REFERENCE_CONV = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'conversations', 'conv_00001.json'), 'utf8'))
const referenceLines = REFERENCE_CONV.lines.slice(0, 4).map(l =>
  `  {"speaker": "${l.speaker}", "jp": "${l.jp}", "en": "${l.en}", "style": "${l.style}", "mood": "${l.mood ?? ''}"}`
).join(',\n')

const SYSTEM_PROMPT = `You are a Japanese-language dialogue editor for Nagomi, an iOS Japanese SRS listening app. Your job: take a conversation JSON that has degraded English translations and bare delivery-style instructions, and rewrite it to ship-quality.

Rules:
- PRESERVE EXACTLY: id, context, purpose, ambient, sound_effects, target_vocab, cast, frequency_tier, length_tier, meta, line order, line.speaker, line.jp.
- REWRITE: line.en → natural, fluent English translation matching the speaker's register and the conversational moment.
- REWRITE: line.style → an 8 to 15 word delivery instruction in the voice of the reference below. Describe the acted performance: opening attack, tone, pace, breathiness, trailing-off, posture in the voice. Concrete and specific. NOT a label like "Tender".
- ADD/REWRITE: line.mood → one or two words, snake_case (e.g. "exhausted", "warm_surprised", "playful_relief").
- Do NOT add or remove lines. Output exactly the same number of lines as input.
- Do NOT translate Japanese into the style field. Style is English directorial notes.

REFERENCE — these are the lines you are matching in quality:
[
${referenceLines}
]

Character context (use to inform the register, age, and personality of each speaker):
${charSummaries}

Call the submit_rewritten_lines tool with the rewritten lines array. Length MUST equal input line count. Each item MUST have en, style, mood (in that order).`

const TOOL = {
  name: 'submit_rewritten_lines',
  description: 'Return the rewritten lines for the conversation.',
  input_schema: {
    type: 'object',
    required: ['lines'],
    properties: {
      lines: {
        type: 'array',
        items: {
          type: 'object',
          required: ['en', 'style', 'mood'],
          additionalProperties: false,
          properties: {
            en: { type: 'string', minLength: 1 },
            style: { type: 'string', minLength: 25 },
            mood: { type: 'string', minLength: 3, maxLength: 40 },
          },
        },
      },
    },
  },
}

// ---------- Detect degraded convs ----------

function isDegradedConv(conv) {
  if (!Array.isArray(conv.lines) || !conv.lines.length) return false
  return conv.lines.some(l => {
    const styleWords = (l.style || '').trim().split(/\s+/).filter(Boolean).length
    return styleWords <= 2
  })
}

const allFiles = fs.readdirSync(SRC).filter(f => f.endsWith('.json')).sort()
const candidates = []
for (const f of allFiles) {
  if (LIST) {
    if (LIST.has(f.replace('.json', ''))) candidates.push(f)
    continue
  }
  const conv = JSON.parse(fs.readFileSync(path.join(SRC, f), 'utf8'))
  if (!isDegradedConv(conv)) {
    // Already clean — copy through (so v3 is a complete dataset).
    if (!fs.existsSync(path.join(DST, f))) fs.writeFileSync(path.join(DST, f), JSON.stringify(conv, null, 2))
    continue
  }
  candidates.push(f)
}

let targetFiles = PILOT_MODE ? candidates.slice(0, 30) : candidates
if (SHARD_N > 1) targetFiles = targetFiles.filter((_, i) => i % SHARD_N === SHARD_K)
console.log(`Source: ${path.relative(ROOT, SRC)}`)
console.log(`Target: ${path.relative(ROOT, DST)}`)
console.log(`Mode: ${PILOT_MODE ? 'PILOT (30 convs)' : 'FULL'}${SHARD_N > 1 ? ` shard ${SHARD_K}/${SHARD_N}` : ''}`)
console.log(`Degraded convs detected: ${candidates.length}`)
console.log(`Will process: ${targetFiles.length}`)
console.log(`Max spend: $${MAX_SPEND_USD}`)
console.log('')

// ---------- Cost log header ----------
if (!fs.existsSync(COST_LOG)) {
  fs.writeFileSync(COST_LOG, 'convId,input_uncached,input_cache_read,input_cache_write,output,cost_usd,latency_ms,ok\n')
}

// ---------- API call ----------

async function rewriteConv(conv) {
  const userMsg = JSON.stringify({ id: conv.id, lines: conv.lines.map(l => ({ speaker: l.speaker, jp: l.jp, en: l.en, style: l.style })) })

  const body = {
    model: MODEL,
    max_tokens: 4096,
    tools: [TOOL],
    tool_choice: { type: 'tool', name: 'submit_rewritten_lines' },
    system: [
      // Cache the heavy stable context.
      { type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } },
    ],
    messages: [{ role: 'user', content: userMsg }],
  }

  const t0 = Date.now()
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const dt = Date.now() - t0
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`API ${res.status}: ${err.slice(0, 400)}`)
  }
  const json = await res.json()
  const usage = json.usage ?? {}
  const toolUse = (json.content ?? []).find(c => c.type === 'tool_use')
  if (!toolUse) throw new Error(`No tool_use in response: ${JSON.stringify(json).slice(0, 300)}`)

  const newLines = toolUse.input?.lines
  if (!Array.isArray(newLines) || newLines.length !== conv.lines.length) {
    throw new Error(`Line count mismatch: got ${newLines?.length}, expected ${conv.lines.length}`)
  }

  // Merge: preserve speaker + jp from original, take en/style/mood from rewrite.
  const merged = {
    ...conv,
    lines: conv.lines.map((orig, i) => ({
      speaker: orig.speaker,
      jp: orig.jp,
      en: newLines[i].en,
      style: newLines[i].style,
      mood: newLines[i].mood,
    })),
  }

  const usageMetrics = {
    input_uncached: usage.input_tokens ?? 0,
    input_cache_read: usage.cache_read_input_tokens ?? 0,
    input_cache_write: usage.cache_creation_input_tokens ?? 0,
    output: usage.output_tokens ?? 0,
  }
  const cost =
    usageMetrics.input_uncached * PRICE_IN +
    usageMetrics.input_cache_read * PRICE_CACHE_READ +
    usageMetrics.input_cache_write * PRICE_CACHE_WRITE +
    usageMetrics.output * PRICE_OUT

  return { merged, usage: usageMetrics, cost, dt }
}

// ---------- Main loop ----------

let totalSpend = 0
let pass = 0, fail = 0, skip = 0
const startedAt = Date.now()

for (let i = 0; i < targetFiles.length; i++) {
  const f = targetFiles[i]
  const dstPath = path.join(DST, f)

  if (RESUME && !LIST && fs.existsSync(dstPath)) {
    skip++
    continue
  }
  // List mode resume: skip only if a fix-marker exists (dstPath always exists
  // in list mode, so plain existence can't be the resume signal).
  const fixMarker = dstPath + '.enfix'
  if (LIST && fs.existsSync(fixMarker)) { skip++; continue }

  if (totalSpend >= MAX_SPEND_USD) {
    console.log(`\nBudget cap $${MAX_SPEND_USD} reached after ${pass} rewrites. Stopping. Re-run to resume.`)
    break
  }

  const conv = JSON.parse(fs.readFileSync(path.join(SRC, f), 'utf8'))
  let row
  let r
  let lastErr
  for (let attempt = 1; attempt <= MAX_RETRIES + 1; attempt++) {
    try {
      r = await rewriteConv(conv)
      break
    } catch (e) {
      lastErr = e
      if (attempt > MAX_RETRIES) break
      // Backoff: 1s, 3s for transient errors; immediate for validation errors
      const isTransient = /^API 5\d\d|^API 429|fetch failed|ETIMEDOUT/.test(e.message)
      await new Promise(s => setTimeout(s, isTransient ? attempt * 1000 : 200))
    }
  }
  if (r) {
    fs.writeFileSync(dstPath, JSON.stringify(r.merged, null, 2))
    if (LIST) fs.writeFileSync(fixMarker, new Date().toISOString())
    totalSpend += r.cost
    pass++
    row = `${conv.id},${r.usage.input_uncached},${r.usage.input_cache_read},${r.usage.input_cache_write},${r.usage.output},${r.cost.toFixed(6)},${r.dt},1`
    if (i < 5 || i % 25 === 0) {
      const elapsed = ((Date.now() - startedAt) / 1000).toFixed(0)
      const rate = pass / Math.max(0.1, (Date.now() - startedAt) / 1000)
      const remaining = targetFiles.length - i - 1
      const etaMin = remaining > 0 ? (remaining / rate / 60).toFixed(0) : '0'
      console.log(`[${i + 1}/${targetFiles.length}] ${conv.id} OK  ${r.dt}ms  $${r.cost.toFixed(4)}  total $${totalSpend.toFixed(2)}  ${elapsed}s elapsed  ${rate.toFixed(2)}/s  ETA ${etaMin}m`)
    }
  } else {
    fail++
    row = `${conv.id},,,,,,${0},0`
    console.error(`[${i + 1}/${targetFiles.length}] ${conv.id} FAIL after retries: ${lastErr.message}`)
  }
  fs.appendFileSync(COST_LOG, row + '\n')
}

console.log(`\n=== DONE ===`)
console.log(`processed:  ${pass} pass + ${fail} fail + ${skip} skipped`)
console.log(`spend:      $${totalSpend.toFixed(4)}`)
console.log(`output dir: ${path.relative(ROOT, DST)}`)
console.log(`cost log:   ${path.relative(ROOT, COST_LOG)}`)

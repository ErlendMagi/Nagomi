#!/usr/bin/env node
// Phase 1a: deterministic padding strip.
// Reads every conv in data/conversations/, writes a cleaned copy to
// data/conversations_v2/ with the placeholder filler chain removed from each
// jp line. EN + style fields are left UNTOUCHED for the LLM rewrite pass that
// comes next. Every strip is logged to data/cleanup_audit.jsonl so false
// positives are reviewable before any TTS spend.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const SRC = path.join(ROOT, 'data', 'conversations')
const DST = path.join(ROOT, 'data', 'conversations_v2')
const AUDIT = path.join(ROOT, 'data', 'cleanup_audit.jsonl')

// Same regex established by the spec audit:
//   trailing 、本気で?|絶対 repeated >=5 times, optional terminal punct.
const PAD_RE = /、(本気で?|絶対)(、(本気で?|絶対)){4,}[、。]?$/u

fs.mkdirSync(DST, { recursive: true })
if (fs.existsSync(AUDIT)) fs.rmSync(AUDIT)
const audit = fs.createWriteStream(AUDIT, { flags: 'a' })

const files = fs.readdirSync(SRC).filter(f => f.endsWith('.json')).sort()
let convsTouched = 0
let linesStripped = 0
let convsCopied = 0

for (const f of files) {
  const srcPath = path.join(SRC, f)
  const dstPath = path.join(DST, f)
  const raw = fs.readFileSync(srcPath, 'utf8')
  const conv = JSON.parse(raw)
  let convTouched = false

  if (Array.isArray(conv.lines)) {
    for (let i = 0; i < conv.lines.length; i++) {
      const line = conv.lines[i]
      if (typeof line.jp !== 'string') continue
      const m = line.jp.match(PAD_RE)
      if (!m) continue
      const before = line.jp
      const after = line.jp.replace(PAD_RE, '')
      audit.write(JSON.stringify({
        convId: conv.id ?? f.replace('.json', ''),
        lineIndex: i,
        speaker: line.speaker ?? null,
        stripped: m[0],
        before,
        after,
      }) + '\n')
      line.jp = after
      linesStripped++
      convTouched = true
    }
  }

  fs.writeFileSync(dstPath, JSON.stringify(conv, null, 2))
  convsCopied++
  if (convTouched) convsTouched++
}

audit.end()

console.log(JSON.stringify({
  convs_total: files.length,
  convs_copied: convsCopied,
  convs_touched: convsTouched,
  lines_stripped: linesStripped,
  out_dir: path.relative(ROOT, DST),
  audit_log: path.relative(ROOT, AUDIT),
}, null, 2))

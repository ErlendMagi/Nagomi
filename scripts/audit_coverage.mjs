// scripts/audit_coverage.mjs
//
// Walk every conversation JSON in data/conversations/ and count how many
// distinct conversations each vocab word appears in. Writes:
//
//   data/coverage.json — { word_jp: variant_count }
//
// "Variant count" = the number of distinct conversations whose joined JP lines
// contain the word as a substring. A word is considered "covered" when its
// count reaches 5 (per the spec).
//
// This output feeds the weaver: words with low variant_count are prioritised
// as target_vocab in the next batch.
//
// Usage:
//   node scripts/audit_coverage.mjs
//   node scripts/audit_coverage.mjs --print-gaps   # also print under-covered word list
//   node scripts/audit_coverage.mjs --tier=1       # restrict gap report to tier

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const NAGOMI    = path.resolve(__dirname, '..');

const flags = process.argv.slice(2);
const PRINT_GAPS = flags.includes('--print-gaps');
const TIER_FLAG  = flags.find(f => f.startsWith('--tier='));
const TIER       = TIER_FLAG ? parseInt(TIER_FLAG.split('=')[1], 10) : null;

const TIER_BOUNDS = {
  1: [1,      500],
  2: [501,    2000],
  3: [2001,   5000],
  4: [5001,   10000],
  5: [10001,  20000],
};

const CONV_DIR     = path.join(NAGOMI, 'data', 'conversations');
const WORDS        = JSON.parse(fs.readFileSync(path.join(NAGOMI, 'data', 'vocab', 'words.json'), 'utf-8'));
const COVERAGE_OUT = path.join(NAGOMI, 'data', 'coverage.json');

const wordList = WORDS.map(w => w.jp);
const wordRank = new Map(WORDS.map(w => [w.jp, w.rank]));

// Build the coverage map keyed by word.
const coverage = Object.fromEntries(wordList.map(w => [w, 0]));

if (fs.existsSync(CONV_DIR)) {
  const files = fs.readdirSync(CONV_DIR)
    .filter(f => f.endsWith('.json') && f.startsWith('conv_'))
    .map(f => path.join(CONV_DIR, f));

  console.log(`scanning ${files.length} conversation(s) in ${path.relative(NAGOMI, CONV_DIR)}…`);

  // For each conversation, build the joined JP text once and then walk vocab.
  // Naively this is O(n_files * n_words) substring checks. For 2000 files and
  // 20k words that's 40M includes() calls — still seconds in V8 for short
  // strings, fine for a periodic audit.
  for (const file of files) {
    let conv;
    try { conv = JSON.parse(fs.readFileSync(file, 'utf-8')); }
    catch { continue; }
    const joined = (conv.lines || []).map(l => l.jp || '').join('');
    if (!joined) continue;
    const seenInThisConv = new Set();
    // Iterate words. For long-tail rare words this is fast (most miss).
    for (const w of wordList) {
      if (seenInThisConv.has(w)) continue;
      if (joined.includes(w)) {
        seenInThisConv.add(w);
        coverage[w]++;
      }
    }
  }
} else {
  console.log(`(no conversations dir at ${CONV_DIR} — coverage will be all zeros)`);
}

// Write the map.
fs.mkdirSync(path.dirname(COVERAGE_OUT), { recursive: true });
fs.writeFileSync(COVERAGE_OUT, JSON.stringify(coverage), 'utf-8');

// Summary.
const covered = Object.values(coverage).filter(n => n >= 5).length;
const zero    = Object.values(coverage).filter(n => n === 0).length;
console.log(`wrote ${path.relative(NAGOMI, COVERAGE_OUT)}`);
console.log(`  words at ≥5 variants: ${covered}/${wordList.length}`);
console.log(`  words at 0 variants:  ${zero}/${wordList.length}`);

if (TIER) {
  const [lo, hi] = TIER_BOUNDS[TIER] || [];
  const tierWords = WORDS.filter(w => w.rank >= lo && w.rank <= hi);
  const tierCovered = tierWords.filter(w => coverage[w.jp] >= 5).length;
  console.log(`  tier ${TIER} (rank ${lo}–${hi}): ${tierCovered}/${tierWords.length} at ≥5`);
}

if (PRINT_GAPS) {
  const gaps = WORDS
    .map(w => ({ ...w, count: coverage[w.jp] || 0 }))
    .filter(w => w.count < 5)
    .filter(w => !TIER || (w.rank >= TIER_BOUNDS[TIER][0] && w.rank <= TIER_BOUNDS[TIER][1]))
    .sort((a, b) => (a.count - b.count) || (a.rank - b.rank))
    .slice(0, 50);
  console.log(`\ntop 50 under-covered words${TIER ? ` (tier ${TIER})` : ''}:`);
  for (const g of gaps) {
    console.log(`  ${g.rank.toString().padStart(5)}  ${g.count}/5  ${g.jp.padEnd(10)}  ${g.t1}`);
  }
}

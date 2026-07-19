// scripts/import-vocab.mjs
//
// One-off importer: reads the 20k-word frequency .xlsx, dedupes the bundled
// sample sentences, tokenises every unique Japanese sentence with kuromoji so
// we know which vocab words each sentence contains, and writes three artefacts
// the app + content pipeline can consume.
//
// Output files live in nagomi/data/vocab/ (outside src/ so they are not bundled
// into the app by Metro — they're seed data for the conversation generator and
// can be selectively imported once a delivery strategy is chosen).
//
// Run with:  node scripts/import-vocab.mjs [--limit=N] [--xlsx=PATH]
//
// Notes
// • kuromoji ships an IPA dictionary (~10 MB) that loads from node_modules.
// • Tokeniser maps each surface token to its `basic_form` (lemma) which is
//   then matched against the 20k vocab list. Partial / particle matches use
//   surface form as a fallback.
// • The xlsx metadata says 24,455 sentence cells are template-synthesised but
//   there is no per-cell flag, so every sentence is imported with
//   isSynthetic: null. We can backfill once we have a heuristic.

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import XLSX from 'xlsx';
import kuromoji from 'kuromoji';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const NAGOMI_ROOT = path.resolve(__dirname, '..');

// ── Args ────────────────────────────────────────────────────────────────────
const args = Object.fromEntries(
  process.argv.slice(2).map(a => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  }),
);

const XLSX_PATH = args.xlsx
  || 'D:/Downloads/japanese_frequency_top20000_final_with_images.xlsx';
const LIMIT = args.limit ? parseInt(args.limit, 10) : Infinity;
const OUT_DIR = path.join(NAGOMI_ROOT, 'data', 'vocab');
const KUROMOJI_DICT = path.join(NAGOMI_ROOT, 'node_modules', 'kuromoji', 'dict');

if (!fs.existsSync(XLSX_PATH)) {
  console.error(`xlsx not found: ${XLSX_PATH}`);
  process.exit(1);
}
if (!fs.existsSync(KUROMOJI_DICT)) {
  console.error(`kuromoji dict not found at ${KUROMOJI_DICT}. Run: npm install`);
  process.exit(1);
}
fs.mkdirSync(OUT_DIR, { recursive: true });

// ── Read xlsx ───────────────────────────────────────────────────────────────
console.log(`[1/5] Reading ${XLSX_PATH}…`);
const wb = XLSX.readFile(XLSX_PATH);
const rows = XLSX.utils.sheet_to_json(
  wb.Sheets['Top 20000 JP words'],
  { header: 1, defval: null },
);
const header = rows[0];
const dataRows = rows.slice(1).filter(r => r[0] != null);
console.log(`   ${dataRows.length} data rows, header: [${header.join(', ')}]`);

const cap = Math.min(LIMIT, dataRows.length);
console.log(`   Importing first ${cap} rows (limit=${LIMIT === Infinity ? 'all' : LIMIT}).`);

// ── Build words + raw sentence pairs ────────────────────────────────────────
console.log('[2/5] Building word list and collecting sentences…');
const words = [];                      // [{rank, jp, t1, t2}]
const wordByJp = new Map();            // jp -> word
const sentencesMap = new Map();        // jp -> {id, jp, en, anchorWords: Set}

for (let i = 0; i < cap; i++) {
  const r = dataRows[i];
  const word = {
    rank: r[0],
    jp:   r[1],
    t1:   r[2],
    t2:   r[3],
  };
  words.push(word);
  if (!wordByJp.has(word.jp)) wordByJp.set(word.jp, word);

  // 5 sentence pairs per row, columns E..N (indices 4..13)
  for (let s = 0; s < 5; s++) {
    const jp = r[4 + s * 2];
    const en = r[5 + s * 2];
    if (!jp || !en) continue;
    let sent = sentencesMap.get(jp);
    if (!sent) {
      sent = {
        id: sentencesMap.size,
        jp,
        en,
        anchorWords: new Set(),       // word jp's that paired this sentence in the sheet
      };
      sentencesMap.set(jp, sent);
    }
    sent.anchorWords.add(word.jp);
  }
}
console.log(`   ${words.length} words · ${sentencesMap.size} unique sentences`);

// ── Tokenise every unique sentence with kuromoji ────────────────────────────
console.log('[3/5] Loading kuromoji dictionary…');
const tokenizer = await new Promise((resolve, reject) => {
  kuromoji.builder({ dicPath: KUROMOJI_DICT }).build((err, t) => {
    if (err) reject(err); else resolve(t);
  });
});
console.log('   dictionary loaded.');

console.log('[4/5] Tokenising sentences and indexing word occurrences…');
const wordSentences = new Map();       // wordJp -> Set<sentenceId>
const sentencesArr = [...sentencesMap.values()];
let processed = 0;
const t0 = Date.now();

for (const sent of sentencesArr) {
  const seen = new Set();
  const tokens = tokenizer.tokenize(sent.jp);
  for (const tok of tokens) {
    // Try basic_form first (lemma), then surface_form
    const candidates = [tok.basic_form, tok.surface_form].filter(
      x => x && x !== '*',
    );
    for (const c of candidates) {
      if (wordByJp.has(c) && !seen.has(c)) {
        seen.add(c);
        if (!wordSentences.has(c)) wordSentences.set(c, new Set());
        wordSentences.get(c).add(sent.id);
      }
    }
  }
  // Always ensure anchor word(s) are recorded (substring fallback for cases
  // where kuromoji tokenises differently than the dictionary entry).
  for (const anchor of sent.anchorWords) {
    if (!seen.has(anchor) && sent.jp.includes(anchor)) {
      seen.add(anchor);
      if (!wordSentences.has(anchor)) wordSentences.set(anchor, new Set());
      wordSentences.get(anchor).add(sent.id);
    }
  }
  sent.words = [...seen];

  processed++;
  if (processed % 5000 === 0) {
    const rate = processed / ((Date.now() - t0) / 1000);
    console.log(`   ${processed}/${sentencesArr.length} (${rate.toFixed(0)}/sec)`);
  }
}
console.log(`   tokenised ${processed} sentences in ${((Date.now() - t0) / 1000).toFixed(1)}s`);

// ── Write outputs ───────────────────────────────────────────────────────────
console.log('[5/5] Writing outputs…');

const wordsOut = words.map(w => ({ rank: w.rank, jp: w.jp, t1: w.t1, t2: w.t2 }));
fs.writeFileSync(
  path.join(OUT_DIR, 'words.json'),
  JSON.stringify(wordsOut),
);

const sentencesOut = sentencesArr.map(s => ({
  id: s.id,
  jp: s.jp,
  en: s.en,
  words: s.words,
  isSynthetic: null,                   // per-cell flag not available in source
}));
fs.writeFileSync(
  path.join(OUT_DIR, 'sentences.json'),
  JSON.stringify(sentencesOut),
);

const wordSentencesOut = {};
for (const [jp, ids] of wordSentences) {
  wordSentencesOut[jp] = [...ids].sort((a, b) => a - b);
}
fs.writeFileSync(
  path.join(OUT_DIR, 'word-sentences.json'),
  JSON.stringify(wordSentencesOut),
);

const wordCoverage = words.filter(w => wordSentences.has(w.jp)).length;
const meta = {
  generatedAt: new Date().toISOString(),
  source: path.basename(XLSX_PATH),
  wordCount: words.length,
  sentenceCount: sentencesArr.length,
  wordsWithIndexedSentences: wordCoverage,
  notes: [
    'isSynthetic is null on every sentence — the source xlsx has a global',
    'count of synthesised cells (24,455) but no per-cell flag. Backfill via',
    'a heuristic or upstream change.',
    'words[] order matches frequency rank (col A in xlsx).',
  ],
};
fs.writeFileSync(path.join(OUT_DIR, 'meta.json'), JSON.stringify(meta, null, 2));

const size = p => (fs.statSync(p).size / 1024 / 1024).toFixed(2) + ' MB';
console.log('   words.json          ', size(path.join(OUT_DIR, 'words.json')));
console.log('   sentences.json      ', size(path.join(OUT_DIR, 'sentences.json')));
console.log('   word-sentences.json ', size(path.join(OUT_DIR, 'word-sentences.json')));
console.log(`   word coverage: ${wordCoverage}/${words.length}`);
console.log(`done -> ${OUT_DIR}`);

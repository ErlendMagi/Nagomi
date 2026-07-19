// scripts/validate_conversation.mjs
//
// Enforce the Nagomi conversation schema (docs/schema.md). Walk a folder of
// conversation JSONs (and/or files passed as args). Report violations.
// Optionally quarantine bad files to data/conversations/_rejected/.
//
// Usage:
//   node scripts/validate_conversation.mjs                                # validate everything in data/conversations/
//   node scripts/validate_conversation.mjs --quarantine                   # move bad files to _rejected/
//   node scripts/validate_conversation.mjs path/to/conv_00042.json        # validate one
//   node scripts/validate_conversation.mjs --strict                       # fail (exit 1) if any errors

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const NAGOMI    = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const flags = new Set(args.filter(a => a.startsWith('--')));
const positional = args.filter(a => !a.startsWith('--'));
const QUARANTINE = flags.has('--quarantine');
const STRICT     = flags.has('--strict');

const CONV_DIR     = path.join(NAGOMI, 'data', 'conversations');
const REJECTED_DIR = path.join(CONV_DIR, '_rejected');
const CHARS        = JSON.parse(fs.readFileSync(path.join(NAGOMI, 'data', 'characters.json'), 'utf-8'));
const WORDS        = JSON.parse(fs.readFileSync(path.join(NAGOMI, 'data', 'vocab', 'words.json'), 'utf-8'));

const CHAR_IDS = new Set(CHARS.characters.map(c => c.id));
const WORD_SET = new Set(WORDS.map(w => w.jp));

const TIER_NAMES = new Set(['Short (5-6)', 'Medium (7-12)', 'Long (13-20)', 'Extended (21-30)']);
const TIER_BOUNDS = {
  'Short (5-6)':       [5, 6],
  'Medium (7-12)':     [7, 12],
  'Long (13-20)':      [13, 20],
  'Extended (21-30)':  [21, 30],
};

function validateConv(conv, filename) {
  const errors = [];

  // 1. id
  if (!conv.id || typeof conv.id !== 'string') errors.push('missing id');
  else if (!/^conv_\d{5}$/.test(conv.id)) errors.push(`id "${conv.id}" must be conv_NNNNN (zero-padded 5 digits)`);
  if (filename && conv.id && path.basename(filename, '.json') !== conv.id) {
    errors.push(`id "${conv.id}" does not match filename ${path.basename(filename)}`);
  }

  // 2. required string fields
  for (const k of ['context', 'purpose']) {
    if (!conv[k] || typeof conv[k] !== 'string' || conv[k].length < 10) errors.push(`missing or trivial ${k}`);
  }

  // 3. ambient
  if (conv.ambient !== null && typeof conv.ambient !== 'string') errors.push('ambient must be string or null');

  // 4. target_vocab
  if (!Array.isArray(conv.target_vocab) || conv.target_vocab.length === 0) errors.push('target_vocab must be a non-empty array');
  else {
    const missing = conv.target_vocab.filter(w => !WORD_SET.has(w));
    if (missing.length) errors.push(`target_vocab words not in vocab: ${missing.slice(0,5).join(', ')}${missing.length>5?'…':''}`);
  }

  // 5. cast
  if (!Array.isArray(conv.cast) || conv.cast.length === 0) errors.push('cast must be a non-empty array');
  else {
    const bad = conv.cast.filter(id => !CHAR_IDS.has(id));
    if (bad.length) errors.push(`cast contains unknown character ids: ${bad.join(', ')}`);
  }

  // 6. tier
  if (typeof conv.frequency_tier !== 'number' || conv.frequency_tier < 1 || conv.frequency_tier > 5) {
    errors.push('frequency_tier must be 1..5');
  }
  if (!TIER_NAMES.has(conv.length_tier)) errors.push(`length_tier must be one of ${[...TIER_NAMES].join(' / ')}`);

  // 7. lines
  if (!Array.isArray(conv.lines) || conv.lines.length === 0) errors.push('lines must be non-empty');
  else {
    if (conv.length_tier && TIER_BOUNDS[conv.length_tier]) {
      const [lo, hi] = TIER_BOUNDS[conv.length_tier];
      if (conv.lines.length < lo || conv.lines.length > hi) {
        errors.push(`lines.length=${conv.lines.length} outside length_tier "${conv.length_tier}" range ${lo}-${hi}`);
      }
    }
    for (let i = 0; i < conv.lines.length; i++) {
      const ln = conv.lines[i];
      const here = `lines[${i}]`;
      if (!ln || typeof ln !== 'object') { errors.push(`${here} not an object`); continue; }
      if (!ln.speaker || !CHAR_IDS.has(ln.speaker)) errors.push(`${here}.speaker "${ln.speaker}" not in roster`);
      if (conv.cast && !conv.cast.includes(ln.speaker)) errors.push(`${here}.speaker "${ln.speaker}" not in cast`);
      if (!ln.jp || typeof ln.jp !== 'string' || ln.jp.length === 0) errors.push(`${here}.jp empty`);
      if (!ln.en || typeof ln.en !== 'string' || ln.en.length === 0) errors.push(`${here}.en empty`);
      if (!ln.style || typeof ln.style !== 'string' || ln.style.split(/\s+/).filter(Boolean).length < 6) {
        errors.push(`${here}.style too short or missing (must be ≥6 words, specific)`);
      }
    }
  }

  // 8. sound_effects shape
  if (conv.sound_effects !== undefined) {
    if (!Array.isArray(conv.sound_effects)) errors.push('sound_effects must be an array');
    else for (let i = 0; i < conv.sound_effects.length; i++) {
      const sfx = conv.sound_effects[i];
      if (typeof sfx?.at_line !== 'number') errors.push(`sound_effects[${i}].at_line must be a number`);
      else if (conv.lines && (sfx.at_line < 0 || sfx.at_line >= conv.lines.length)) {
        errors.push(`sound_effects[${i}].at_line=${sfx.at_line} out of bounds`);
      }
      if (typeof sfx?.sfx !== 'string' || !sfx.sfx) errors.push(`sound_effects[${i}].sfx missing`);
    }
  }

  // 9. target_vocab presence (WARNING ONLY — substring check is naive for
  // Japanese conjugation. Long-term: replace with kuromoji-based lemma match.)
  const warnings = [];
  if (conv.target_vocab && conv.lines) {
    const joinedJp = conv.lines.map(l => l.jp || '').join('');
    const unused = conv.target_vocab.filter(w => !joinedJp.includes(w));
    if (unused.length) {
      warnings.push(`target_vocab words may be in conjugated form only (substring check naive): ${unused.slice(0,5).join(', ')}${unused.length>5?'…':''}`);
    }
  }

  return { errors, warnings };
}

function loadFiles() {
  if (positional.length > 0) return positional.map(p => path.resolve(p));
  if (!fs.existsSync(CONV_DIR)) {
    console.log(`(no conversations dir at ${CONV_DIR} — nothing to validate)`);
    return [];
  }
  return fs.readdirSync(CONV_DIR)
    .filter(f => f.endsWith('.json') && f.startsWith('conv_'))
    .map(f => path.join(CONV_DIR, f));
}

function main() {
  const files = loadFiles();
  let ok = 0, bad = 0, withWarnings = 0;
  for (const file of files) {
    let conv;
    try { conv = JSON.parse(fs.readFileSync(file, 'utf-8')); }
    catch (e) {
      console.log(`✗ ${path.basename(file)}: invalid JSON — ${e.message}`);
      bad++;
      continue;
    }
    const { errors, warnings } = validateConv(conv, file);
    if (errors.length === 0) {
      ok++;
      if (warnings.length) {
        withWarnings++;
        console.log(`⚠ ${path.basename(file)}:`);
        for (const w of warnings) console.log(`    ${w}`);
      }
    } else {
      bad++;
      console.log(`✗ ${path.basename(file)}:`);
      for (const e of errors) console.log(`    ${e}`);
      for (const w of warnings) console.log(`    (warning) ${w}`);
      if (QUARANTINE) {
        fs.mkdirSync(REJECTED_DIR, { recursive: true });
        const dest = path.join(REJECTED_DIR, path.basename(file));
        fs.renameSync(file, dest);
        console.log(`    → quarantined to ${path.relative(NAGOMI, dest)}`);
      }
    }
  }
  console.log(`\nresult: ${ok} valid (${withWarnings} with warnings), ${bad} invalid (of ${files.length})`);
  if (STRICT && bad > 0) process.exit(1);
}

main();

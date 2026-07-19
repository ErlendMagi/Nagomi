// scripts/audio_pipeline/generate_audio_edge.mjs
//
// Pre-render every line of every conversation in data/conversations/ to MP3
// using Microsoft Edge Neural TTS (msedge-tts). Free, no GPU, no API key —
// the gap-filler before real Qwen audio is available.
//
// Output layout matches what the app's qwenAudio loader expects:
//   audio/<conv_id>/line_<NNN>_<speakerId>_<jp|en>.mp3
//   audio/<conv_id>/intro_en.mp3
//
// Resume-safe: any file that already exists is skipped.
//
// Run: node scripts/audio_pipeline/generate_audio_edge.mjs
//      node scripts/audio_pipeline/generate_audio_edge.mjs --only=conv_00001

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

const __dirname  = path.dirname(url.fileURLToPath(import.meta.url));
const NAGOMI     = path.resolve(__dirname, '..', '..');
const CONV_DIR   = path.join(NAGOMI, 'data', 'conversations');
const CHARS_PATH = path.join(NAGOMI, 'data', 'characters.json');
const AUDIO_DIR  = path.join(NAGOMI, 'audio');

const args = Object.fromEntries(
  process.argv.slice(2).map(a => a.replace(/^--/, '').split('=')),
);
const ONLY = args.only ? new Set(args.only.split(',')) : null;
const CONCURRENCY = parseInt(args.concurrency || '3', 10);

// Edge TTS exposes only a small handful of stable Japanese voices in practice.
// Map every character to one of them, then differentiate via pitch/rate so two
// adults using Nanami still sound a bit different from each other.
const FORMAT = OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3;
const JP_FEMALE = 'ja-JP-NanamiNeural';
const JP_MALE   = 'ja-JP-KeitaNeural';

const VOICES = {
  hina_child:        { jp: JP_FEMALE, jpRate: '15%',  jpPitch: '30Hz',  en: 'en-US-AnaNeural',     enRate: '5%',   enPitch: '20Hz' },
  sho_child:         { jp: JP_MALE,   jpRate: '-5%',  jpPitch: '25Hz',  en: 'en-US-DavisNeural',   enRate: '-5%',  enPitch: '15Hz' },
  sakura_teen:       { jp: JP_FEMALE, jpRate: '15%',  jpPitch: '8Hz',   en: 'en-GB-LibbyNeural',   enRate: '10%',  enPitch: '5Hz'  },
  riku_teen:         { jp: JP_MALE,   jpRate: '0%',   jpPitch: '5Hz',   en: 'en-US-GuyNeural',     enRate: '0%',   enPitch: '0Hz'  },
  yuki_office:       { jp: JP_FEMALE, jpRate: '-5%',  jpPitch: '0Hz',   en: 'en-US-JennyNeural',   enRate: '-5%',  enPitch: '0Hz'  },
  kenji_office:      { jp: JP_MALE,   jpRate: '0%',   jpPitch: '-5Hz',  en: 'en-GB-RyanNeural',    enRate: '0%',   enPitch: '-5Hz' },
  aoi_barista:       { jp: JP_FEMALE, jpRate: '0%',   jpPitch: '5Hz',   en: 'en-AU-NatashaNeural', enRate: '0%',   enPitch: '0Hz'  },
  daichi_kansai:     { jp: JP_MALE,   jpRate: '10%',  jpPitch: '5Hz',   en: 'en-IE-ConnorNeural',  enRate: '5%',   enPitch: '0Hz'  },
  mei_romantic:      { jp: JP_FEMALE, jpRate: '-10%', jpPitch: '-5Hz',  en: 'en-US-AriaNeural',    enRate: '-5%',  enPitch: '-5Hz' },
  ren_uni:           { jp: JP_MALE,   jpRate: '-5%',  jpPitch: '0Hz',   en: 'en-US-AndrewNeural',  enRate: '-5%',  enPitch: '0Hz'  },
  hiroshi_boss:      { jp: JP_MALE,   jpRate: '-10%', jpPitch: '-15Hz', en: 'en-GB-ThomasNeural',  enRate: '-5%',  enPitch: '-10Hz'},
  yumiko_mom:        { jp: JP_FEMALE, jpRate: '0%',   jpPitch: '-5Hz',  en: 'en-US-EmmaNeural',    enRate: '0%',   enPitch: '-3Hz' },
  ryosuke_dad:       { jp: JP_MALE,   jpRate: '-5%',  jpPitch: '-8Hz',  en: 'en-US-BrianNeural',   enRate: '-5%',  enPitch: '-3Hz' },
  naoko_aunt:        { jp: JP_FEMALE, jpRate: '15%',  jpPitch: '5Hz',   en: 'en-IE-EmilyNeural',   enRate: '10%',  enPitch: '5Hz'  },
  tatsuya_country:   { jp: JP_MALE,   jpRate: '-15%', jpPitch: '-12Hz', en: 'en-US-RogerNeural',   enRate: '-10%', enPitch: '-8Hz' },
  asuka_teacher:     { jp: JP_FEMALE, jpRate: '-5%',  jpPitch: '0Hz',   en: 'en-GB-SoniaNeural',   enRate: '-5%',  enPitch: '0Hz'  },
  sachiko_grandma:   { jp: JP_FEMALE, jpRate: '-15%', jpPitch: '-3Hz',  en: 'en-US-NancyNeural',   enRate: '-10%', enPitch: '-3Hz' },
  goro_grandpa:      { jp: JP_MALE,   jpRate: '-20%', jpPitch: '-15Hz', en: 'en-AU-WilliamNeural', enRate: '-15%', enPitch: '-10Hz'},
  mrs_mori_neighbor: { jp: JP_FEMALE, jpRate: '10%',  jpPitch: '0Hz',   en: 'en-IE-EmilyNeural',   enRate: '5%',   enPitch: '0Hz'  },
  hiroshi_elder:     { jp: JP_MALE,   jpRate: '-15%', jpPitch: '-10Hz', en: 'en-GB-RyanNeural',    enRate: '-10%', enPitch: '-8Hz' },
  takeda_officer:    { jp: JP_MALE,   jpRate: '-5%',  jpPitch: '-8Hz',  en: 'en-US-GuyNeural',     enRate: '-5%',  enPitch: '-5Hz' },
  saito_doctor:      { jp: JP_FEMALE, jpRate: '-5%',  jpPitch: '-3Hz',  en: 'en-US-JennyNeural',   enRate: '-5%',  enPitch: '-3Hz' },
};

// Narrator that introduces each conversation. Alternates female/male.
const NARRATORS = [
  { voice: 'en-US-AriaNeural', rate: '-5%', pitch: '0Hz' },
  { voice: 'en-GB-RyanNeural', rate: '-5%', pitch: '-5Hz' },
];

function pad3(n) { return n.toString().padStart(3, '0'); }

// ── Core: synthesise one stream → file ─────────────────────────────────────
async function synthesise({ text, voice, rate, pitch, outPath }) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const tts = new MsEdgeTTS();
  await tts.setMetadata(voice, FORMAT);
  const opts = {};
  if (rate)  opts.rate  = rate;
  if (pitch) opts.pitch = pitch;
  const { audioStream } = await tts.toStream(text, opts);

  return new Promise((resolve, reject) => {
    const chunks = [];
    let timed = false;
    const t = setTimeout(() => { timed = true; reject(new Error('timeout')); }, 45000);
    audioStream.on('data', c => chunks.push(c));
    audioStream.on('end', () => {
      if (timed) return;
      clearTimeout(t);
      try {
        fs.writeFileSync(outPath, Buffer.concat(chunks));
        resolve({ bytes: fs.statSync(outPath).size });
      } catch (e) { reject(e); }
    });
    audioStream.on('error', e => { if (!timed) { clearTimeout(t); reject(e); } });
  });
}

// ── Job queue with bounded concurrency ─────────────────────────────────────
async function runQueue(jobs, n) {
  let idx = 0; const results = [];
  async function worker() {
    while (idx < jobs.length) {
      const i = idx++;
      const job = jobs[i];
      try {
        if (fs.existsSync(job.outPath) && fs.statSync(job.outPath).size > 0) {
          results[i] = { skipped: true, ...job };
          continue;
        }
        await synthesise(job);
        results[i] = { ok: true, ...job };
        process.stdout.write('.');
      } catch (e) {
        results[i] = { err: e.message, ...job };
        process.stdout.write('!');
      }
    }
  }
  await Promise.all(Array.from({ length: n }, () => worker()));
  return results;
}

// ── Build the full job list ────────────────────────────────────────────────
function buildJobs() {
  if (!fs.existsSync(CONV_DIR)) throw new Error(`no conversations at ${CONV_DIR}`);
  const files = fs.readdirSync(CONV_DIR)
    .filter(f => f.startsWith('conv_') && f.endsWith('.json'))
    .sort();

  const jobs = [];
  let convIdx = 0;
  for (const f of files) {
    const conv = JSON.parse(fs.readFileSync(path.join(CONV_DIR, f), 'utf-8'));
    if (ONLY && !ONLY.has(conv.id)) continue;
    const dir = path.join(AUDIO_DIR, conv.id);

    // Intro
    const narrator = NARRATORS[convIdx++ % NARRATORS.length];
    jobs.push({
      label: `${conv.id} intro`,
      text: conv.context,
      voice: narrator.voice,
      rate: narrator.rate,
      pitch: narrator.pitch,
      outPath: path.join(dir, 'intro_en.mp3'),
    });

    // Lines
    for (let i = 0; i < conv.lines.length; i++) {
      const line = conv.lines[i];
      const v = VOICES[line.speaker];
      if (!v) {
        console.error(`unknown speaker '${line.speaker}' in ${conv.id}; skipping`);
        continue;
      }
      jobs.push({
        label: `${conv.id} line ${i} jp ${line.speaker}`,
        text: line.jp,
        voice: v.jp,
        rate: v.jpRate,
        pitch: v.jpPitch,
        outPath: path.join(dir, `line_${pad3(i)}_${line.speaker}_jp.mp3`),
      });
      jobs.push({
        label: `${conv.id} line ${i} en ${line.speaker}`,
        text: line.en,
        voice: v.en,
        rate: v.enRate,
        pitch: v.enPitch,
        outPath: path.join(dir, `line_${pad3(i)}_${line.speaker}_en.mp3`),
      });
    }
  }
  return jobs;
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
  console.log(`[edge-tts] reading conversations from ${CONV_DIR}`);
  const jobs = buildJobs();
  console.log(`[edge-tts] ${jobs.length} audio file(s) planned · concurrency=${CONCURRENCY}`);
  if (jobs.length === 0) return;

  const t0 = Date.now();
  const results = await runQueue(jobs, CONCURRENCY);
  process.stdout.write('\n');

  const ok      = results.filter(r => r.ok).length;
  const skipped = results.filter(r => r.skipped).length;
  const errs    = results.filter(r => r.err);

  console.log(`\n[edge-tts] done in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
  console.log(`  generated: ${ok}`);
  console.log(`  skipped (already existed): ${skipped}`);
  console.log(`  errors: ${errs.length}`);
  if (errs.length) {
    console.log(`\nfirst 5 errors:`);
    for (const e of errs.slice(0, 5)) console.log(`  ${e.label} → ${e.err}`);
    process.exit(1);
  }
}

main().catch(e => { console.error(e); process.exit(1); });

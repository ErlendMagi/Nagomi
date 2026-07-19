#!/usr/bin/env node
// Apply the v2 Azure-only voice mapping into data/characters.json.
// Source of truth: data/voice_bindings.md (human-readable).
// This is regenerated from the bindings table below — single source of code truth.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const CHARS = path.join(ROOT, 'data', 'characters.json')

// All 22 characters → { jp: [voice, rate, pitch], en: [voice, rate, pitch] }.
// Rate is SSML "+N%" or "-N%" or "0%". Pitch is "+NHz", "-NHz", or "0Hz".
// Engine for all: Azure Neural HD (Dragon HD / DragonHDOmni). No express-as
// styles — Dragon HD auto-detects sentiment from text content per Microsoft docs.
const BINDINGS = {
  // ==== Female (11) ====
  // Same voice both langs per user direction 2026-06-26: voice consistency > cross-language pairing
  hina_child:        { jp: ['ko-KR-SunHi:DragonHDLatestNeural',    '+15%', '+30Hz'], en: ['ko-KR-SunHi:DragonHDLatestNeural', '+15%', '+30Hz'] },
  // sho_child reassigned 2026-06-26: previous ko-KR-Hyunsu +20%/+50Hz did not sound child-like.
  // User-approved Emma pitched up for boy (children's voices blend gender).
  sakura_teen:       { jp: ['en-US-Ava:DragonHDLatestNeural',      '+5%',  '+5Hz'],  en: ['en-US-Ava:DragonHDLatestNeural',     '+5%',  '+5Hz'] },
  yuki_office:       { jp: ['ja-JP-Nanami:DragonHDLatestNeural',   '0%',   '0Hz'],   en: ['ja-JP-Nanami:DragonHDLatestNeural',  '0%',   '0Hz'] },
  aoi_barista:       { jp: ['en-US-Emma:DragonHDLatestNeural',     '+5%',  '+5Hz'],  en: ['en-US-Emma:DragonHDLatestNeural',    '+5%',  '+5Hz'] },
  mei_romantic:      { jp: ['en-GB-Sonia:DragonHDLatestNeural',    '-5%',  '-5Hz'],  en: ['en-GB-Sonia:DragonHDLatestNeural',   '-5%',  '-5Hz'] },
  yumiko_mom:        { jp: ['ja-JP-Nanami:DragonHDLatestNeural',   '-5%',  '-5Hz'],  en: ['ja-JP-Nanami:DragonHDLatestNeural',  '-5%',  '-5Hz'] },
  naoko_aunt:        { jp: ['en-US-Phoebe:DragonHDOmniLatestNeural', '-5%', '-10Hz'], en: ['en-US-Phoebe:DragonHDOmniLatestNeural', '-5%', '-10Hz'] },
  asuka_teacher:     { jp: ['en-US-Ava:DragonHDLatestNeural',      '-5%',  '0Hz'],   en: ['en-US-Ava:DragonHDLatestNeural',     '-5%',  '0Hz'] },
  // sachiko_grandma reassigned 2026-06-26: previous ko-KR-SunHi -15%/-20Hz did not sound elderly.
  // User-approved Sonia (UK F) slowed and lowered.
  sachiko_grandma:   { jp: ['en-GB-Sonia:DragonHDLatestNeural',    '-25%', '-30Hz'], en: ['en-GB-Sonia:DragonHDLatestNeural',   '-25%', '-30Hz'] },
  mrs_mori_neighbor: { jp: ['en-GB-Sonia:DragonHDLatestNeural',    '-10%', '-15Hz'], en: ['en-GB-Sonia:DragonHDLatestNeural',   '-10%', '-15Hz'] },
  saito_doctor:      { jp: ['en-US-Emma:DragonHDLatestNeural',     '-5%',  '-5Hz'],  en: ['en-US-Emma:DragonHDLatestNeural',    '-5%',  '-5Hz'] },

  // ==== Male (11) ====
  sho_child:         { jp: ['en-US-Emma:DragonHDLatestNeural',     '+15%', '+50Hz'], en: ['en-US-Emma:DragonHDLatestNeural',    '+15%', '+50Hz'] },
  riku_teen:         { jp: ['en-US-Juno:DragonHDLatestNeural',     '+10%', '+20Hz'], en: ['en-US-Juno:DragonHDLatestNeural',    '+10%', '+20Hz'] },
  kenji_office:      { jp: ['ja-JP-Masaru:DragonHDLatestNeural',   '0%',   '0Hz'],   en: ['ja-JP-Masaru:DragonHDLatestNeural',  '0%',   '0Hz'] },
  daichi_kansai:     { jp: ['en-US-Andrew:DragonHDLatestNeural',   '+5%',  '0Hz'],   en: ['en-US-Andrew:DragonHDLatestNeural',  '+5%',  '0Hz'] },
  ren_uni:           { jp: ['en-US-Davis:DragonHDLatestNeural',    '+5%',  '+5Hz'],  en: ['en-US-Davis:DragonHDLatestNeural',   '+5%',  '+5Hz'] },
  hiroshi_boss:      { jp: ['en-US-Steffan:DragonHDLatestNeural',  '-5%',  '-10Hz'], en: ['en-US-Steffan:DragonHDLatestNeural', '-5%',  '-10Hz'] },
  ryosuke_dad:       { jp: ['en-GB-Ryan:DragonHDLatestNeural',     '0%',   '-5Hz'],  en: ['en-GB-Ryan:DragonHDLatestNeural',    '0%',   '-5Hz'] },
  tatsuya_country:   { jp: ['ja-JP-Masaru:DragonHDLatestNeural',   '-10%', '-15Hz'], en: ['ja-JP-Masaru:DragonHDLatestNeural',  '-10%', '-15Hz'] },
  goro_grandpa:      { jp: ['ko-KR-Hyunsu:DragonHDLatestNeural',   '-20%', '-20Hz'], en: ['ko-KR-Hyunsu:DragonHDLatestNeural', '-20%', '-20Hz'] },
  hiroshi_elder:     { jp: ['en-US-Steffan:DragonHDLatestNeural',  '-15%', '-20Hz'], en: ['en-US-Steffan:DragonHDLatestNeural', '-15%', '-20Hz'] },
  takeda_officer:    { jp: ['en-US-Andrew:DragonHDLatestNeural',   '-5%',  '-10Hz'], en: ['en-US-Andrew:DragonHDLatestNeural',  '-5%',  '-10Hz'] },
}

const root = JSON.parse(fs.readFileSync(CHARS, 'utf8'))
if (!Array.isArray(root.characters)) throw new Error('characters.json missing characters[] array')

const inFile = new Set(root.characters.map(c => c.id))
const inTable = new Set(Object.keys(BINDINGS))
const missingInTable = [...inFile].filter(id => !inTable.has(id))
const missingInFile = [...inTable].filter(id => !inFile.has(id))
if (missingInTable.length) throw new Error('characters.json has chars not in bindings table: ' + missingInTable.join(', '))
if (missingInFile.length)  throw new Error('bindings table has chars not in characters.json: ' + missingInFile.join(', '))

for (const ch of root.characters) {
  const b = BINDINGS[ch.id]
  const [jVoice, jRate, jPitch] = b.jp
  const [eVoice, eRate, ePitch] = b.en

  ch.voice_bindings = {
    jp: { engine: 'azure', voice: jVoice, prosody: { rate: jRate, pitch: jPitch } },
    en: { engine: 'azure', voice: eVoice, prosody: { rate: eRate, pitch: ePitch } },
  }
  ch.public_profile ??= { tagline: null, long_bio: null, media: { portrait: null, intro_gif: null, voice_sample: null } }
}

fs.writeFileSync(CHARS, JSON.stringify(root, null, 2))

// Sanity-print sharing
const jpShare = {}, enShare = {}
for (const ch of root.characters) {
  jpShare[ch.voice_bindings.jp.voice] = (jpShare[ch.voice_bindings.jp.voice] ?? 0) + 1
  enShare[ch.voice_bindings.en.voice] = (enShare[ch.voice_bindings.en.voice] ?? 0) + 1
}
const jpVoices = Object.keys(jpShare).length
const enVoices = Object.keys(enShare).length
const maxJpShare = Math.max(...Object.values(jpShare))
const maxEnShare = Math.max(...Object.values(enShare))
console.log(JSON.stringify({
  characters_updated: root.characters.length,
  jp_voices_used: jpVoices,
  en_voices_used: enVoices,
  max_jp_share_per_voice: maxJpShare,
  max_en_share_per_voice: maxEnShare,
  jp_share_distribution: jpShare,
  en_share_distribution: enShare,
}, null, 2))

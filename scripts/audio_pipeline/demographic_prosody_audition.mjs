#!/usr/bin/env node
// Demographic prosody audition: Sho_child sounds too adult, Sachiko_grandma
// doesn't sound old. Test 4 variants per character with more aggressive
// prosody and alternative base voices. User picks the winner.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderLine } from './azure_hd_backend.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const OUT = path.join(ROOT, 'audio', 'demographic_audition')
fs.mkdirSync(OUT, { recursive: true })

const SHO_LINE = 'ねえ、お父さん…ぼく、まだ眠くないよ。'
const SACHIKO_LINE = 'ゆみこ、今日も孫の写真送ってくれてありがとうね。'

// Sho variants — boy aged 6. Current is Hyunsu +20%/+50Hz which user rejected.
// Try more extreme prosody + alternative base voices.
const SHO_VARIANTS = [
  { tag: '1_hyunsu_current',      voice: 'ko-KR-Hyunsu:DragonHDLatestNeural',     rate: '+20%', pitch: '+50Hz', note: 'current setting (user rejected)' },
  { tag: '2_hyunsu_extreme',      voice: 'ko-KR-Hyunsu:DragonHDLatestNeural',     rate: '+30%', pitch: '+80Hz', note: 'maximum prosody push' },
  { tag: '3_juno_youthful',       voice: 'en-US-Juno:DragonHDLatestNeural',       rate: '+15%', pitch: '+60Hz', note: 'younger US male as base' },
  { tag: '4_sunhi_pitched_up',    voice: 'ko-KR-SunHi:DragonHDLatestNeural',      rate: '+15%', pitch: '+40Hz', note: 'female voice pitched up for boy (kids voices blend)' },
  { tag: '5_emma_pitched_up',     voice: 'en-US-Emma:DragonHDLatestNeural',       rate: '+15%', pitch: '+50Hz', note: 'EN female pitched up for boy' },
  { tag: '6_ava_pitched_up',      voice: 'en-US-Ava:DragonHDLatestNeural',        rate: '+15%', pitch: '+50Hz', note: 'EN female pitched up alternative' },
]

// Sachiko variants — F early 70s. Current is SunHi -15%/-20Hz which user rejected.
const SACHIKO_VARIANTS = [
  { tag: '1_sunhi_current',       voice: 'ko-KR-SunHi:DragonHDLatestNeural',      rate: '-15%', pitch: '-20Hz', note: 'current setting (user rejected)' },
  { tag: '2_sunhi_extreme',       voice: 'ko-KR-SunHi:DragonHDLatestNeural',      rate: '-30%', pitch: '-40Hz', note: 'maximum elderly prosody' },
  { tag: '3_phoebe_omni_elderly', voice: 'en-US-Phoebe:DragonHDOmniLatestNeural', rate: '-25%', pitch: '-30Hz', note: 'Omni line, mature F' },
  { tag: '4_sonia_elderly',       voice: 'en-GB-Sonia:DragonHDLatestNeural',      rate: '-25%', pitch: '-30Hz', note: 'soft UK F slowed + lowered' },
  { tag: '5_ava_slow_low',        voice: 'en-US-Ava:DragonHDLatestNeural',        rate: '-30%', pitch: '-35Hz', note: 'Ava extreme elderly' },
  { tag: '6_nanami_slow_low',     voice: 'ja-JP-Nanami:DragonHDLatestNeural',     rate: '-25%', pitch: '-30Hz', note: 'native JP elderly attempt' },
]

async function renderVariant({ tag, voice, rate, pitch, note }, line, char) {
  const outFile = path.join(OUT, `${char}_${tag}.mp3`)
  const r = await renderLine({
    voice,
    lang: 'ja-JP',
    text: line,
    prosody: { rate, pitch },
    outFile,
  })
  return { tag, voice, rate, pitch, note, bytes: r.bytes, dt: r.latency_ms, outFile }
}

console.log('=== SHO_CHILD (boy, age 6) — 6 variants ===')
console.log(`line: ${SHO_LINE}\n`)
for (const v of SHO_VARIANTS) {
  const r = await renderVariant(v, SHO_LINE, 'sho')
  console.log(`  ${v.tag.padEnd(28)}  ${v.voice.padEnd(46)}  rate ${v.rate.padEnd(5)} pitch ${v.pitch.padEnd(6)}  ${r.bytes}B  ${r.dt}ms`)
  console.log(`    ↳ ${v.note}`)
}

console.log('\n=== SACHIKO_GRANDMA (F, early 70s) — 6 variants ===')
console.log(`line: ${SACHIKO_LINE}\n`)
for (const v of SACHIKO_VARIANTS) {
  const r = await renderVariant(v, SACHIKO_LINE, 'sachiko')
  console.log(`  ${v.tag.padEnd(28)}  ${v.voice.padEnd(46)}  rate ${v.rate.padEnd(5)} pitch ${v.pitch.padEnd(6)}  ${r.bytes}B  ${r.dt}ms`)
  console.log(`    ↳ ${v.note}`)
}

console.log(`\nFiles in: ${path.relative(ROOT, OUT)}`)
console.log(`Listen as: sho_1_* through sho_6_*, then sachiko_1_* through sachiko_6_*`)

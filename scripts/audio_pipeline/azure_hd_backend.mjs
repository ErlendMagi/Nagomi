// Azure Neural HD render module — single entry point used by both the
// sample-conv renderer (Phase 2d.0) and the eventual mass-render pipeline.
//
// One render = one line of dialogue or narrator text → one MP3 file + duration.
// SSML is built per-line from voice_bindings: voice id + prosody rate/pitch.
// No express-as styles — DragonHDLatestNeural / DragonHDOmniLatestNeural
// auto-detect sentiment from the text itself per Microsoft docs.
//
// Renders are billed against the S0 (Pay-as-you-go) tier on Sweden Central,
// drawn from the user's free Azure credit until depleted.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(HERE, '..', '..')

function loadEnv() {
  const env = Object.fromEntries(
    fs.readFileSync(path.join(ROOT, '.env'), 'utf8')
      .split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'))
      .map(l => { const i = l.indexOf('='); return [l.slice(0, i), l.slice(i + 1)] })
  )
  if (!env.AZURE_SPEECH_KEY) throw new Error('AZURE_SPEECH_KEY missing in .env')
  if (!env.AZURE_SPEECH_REGION) throw new Error('AZURE_SPEECH_REGION missing in .env')
  return env
}

export const env = loadEnv()
export const REGION = env.AZURE_SPEECH_REGION
export const ENDPOINT = `https://${REGION}.tts.speech.microsoft.com/cognitiveservices/v1`

function xmlEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}

// Build SSML for one line. Honors prosody.rate / prosody.pitch (already
// strings like "+5%" / "-10Hz"); skips the prosody wrapper when both are 0.
// prependSilenceMs (optional) injects an SSML <break> before the text so the
// rendered clip starts with that much silence — used for natural inter-line
// pacing without needing separate silence files (Azure returns 0 bytes for
// break-only SSML).
function buildSsml({ voice, lang, text, prosody, prependSilenceMs }) {
  const safeText = xmlEscape(text)
  const rate = prosody?.rate ?? '0%'
  const pitch = prosody?.pitch ?? '0Hz'
  const needsProsody = rate !== '0%' || pitch !== '0Hz'
  const leadingBreak = prependSilenceMs ? `<break time="${prependSilenceMs}ms"/>` : ''
  const inner = needsProsody
    ? `<prosody rate="${rate}" pitch="${pitch}">${leadingBreak}${safeText}</prosody>`
    : `${leadingBreak}${safeText}`
  return `<speak version="1.0" xml:lang="${lang}" xmlns="http://www.w3.org/2001/10/synthesis">` +
         `<voice name="${voice}">${inner}</voice></speak>`
}

// Render one line to MP3 at outFile. Returns { bytes, latency_ms } or throws.
// Retries up to 2x on transient errors (429, 5xx, network).
export async function renderLine({ voice, lang, text, prosody, outFile, prependSilenceMs, format = 'audio-24khz-96kbitrate-mono-mp3' }) {
  const ssml = buildSsml({ voice, lang, text, prosody, prependSilenceMs })
  let lastErr
  for (let attempt = 1; attempt <= 3; attempt++) {
    const t0 = Date.now()
    let res
    try {
      res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': env.AZURE_SPEECH_KEY,
          'Content-Type': 'application/ssml+xml',
          'X-Microsoft-OutputFormat': format,
          'User-Agent': 'nagomi-azure-hd',
        },
        body: ssml,
      })
    } catch (e) {
      lastErr = new Error(`fetch failed: ${e.message}`)
      await new Promise(r => setTimeout(r, attempt * 500))
      continue
    }
    const dt = Date.now() - t0
    if (!res.ok) {
      const body = await res.text().catch(() => '')
      lastErr = new Error(`HTTP ${res.status} after ${dt}ms — ${body.slice(0, 200)}`)
      if (res.status >= 500 || res.status === 429) {
        await new Promise(r => setTimeout(r, attempt * 1000))
        continue
      }
      throw lastErr  // 4xx is a real error (bad SSML, bad voice id), don't retry
    }
    const buf = Buffer.from(await res.arrayBuffer())
    fs.mkdirSync(path.dirname(outFile), { recursive: true })
    fs.writeFileSync(outFile, buf)
    return { bytes: buf.length, latency_ms: dt, ssml }
  }
  throw lastErr ?? new Error('renderLine: exhausted retries')
}

// Look up a character's voice binding for a given language. Returns
// { voice, prosody } or throws if unmapped.
export function getBindingFor(characters, characterId, lang) {
  const char = characters.find(c => c.id === characterId)
  if (!char) throw new Error(`Unknown character: ${characterId}`)
  const b = char.voice_bindings?.[lang]
  if (!b) throw new Error(`No ${lang} voice binding for ${characterId}`)
  return { voice: b.voice, prosody: b.prosody, characterName: char.name }
}

// Narrator voices for per-conversation intro lines. Alternate F/M by index
// so consecutive conversations get different intro voices.
export const NARRATORS = {
  jp: [
    { voice: 'ja-JP-Nanami:DragonHDLatestNeural', gender: 'F' },
    { voice: 'ja-JP-Masaru:DragonHDLatestNeural', gender: 'M' },
  ],
  en: [
    { voice: 'en-US-Ava:DragonHDLatestNeural',    gender: 'F' },
    { voice: 'en-US-Andrew:DragonHDLatestNeural', gender: 'M' },
  ],
}

export function getNarratorFor(convIndex, lang) {
  const pool = NARRATORS[lang]
  return pool[convIndex % pool.length]
}

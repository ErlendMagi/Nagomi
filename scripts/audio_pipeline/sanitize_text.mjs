// TTS text sanitizer — converts stage directions into performable audio
// instead of letting the voice read them aloud.
//
// The hand-curated conversations embed directions in the dialogue text:
//   "(laughs) Stop, I don't even want to think about it."
//   "(笑) もう、考えたくないって。"
//   "…(long silence, then)寒いな。"
// and some lines are PURE non-verbal beats: "(small nod)", "(silence)".
//
// Philosophy (user requirement: keep conversations natural and reactive):
//   - VOCAL directions (laugh, sigh, gasp, hmm...) become real vocalizations
//     the voice actually performs. Azure Dragon HD renders written
//     interjections like ふふっ / はぁ… / えっ with natural delivery.
//   - NON-VOCAL directions (nod, wave, sits, looks) are silent in real life —
//     they become a short silence beat, preserving conversational rhythm.
//   - JP lines get the vocalization treatment (JP is the listening product).
//     EN lines get directions stripped only (the gloss's job is meaning;
//     its emotional tone already lives in the wording).
//
// Silence is emitted as a tiny generated WAV (24kHz mono zeros) — the one
// deliberate exception to the MP3-only rule, because a silence beat never
// needs a paid-TTS upgrade, and the app loader plays .wav natively.
//
// NOTE: the rich per-line `style` fields are preserved untouched in the data.
// Azure HD cannot consume them (no per-line acting API) — they exist for the
// future paid engine upgrade pass, which the audio_engine_ledger tracks.

const DIRECTION_RE = /\([^)]*\)|（[^）]*）|\[[^\]]*\]|\*[^*]+\*/g
// "no speakable content" = only punctuation, whitespace, ellipses left over
const NON_SPEECH_RE = /^[\s…。、．，.,!?！？~〜ー\-—:;：；'"「」『』]*$/u

// Vocal direction → performable JP interjection. Order matters (first match).
const VOCALIZATIONS = [
  { re: /chuckle|giggle|small laugh|half-laugh|苦笑/i, jp: 'ふふっ' },
  { re: /laugh|笑/i,                                    jp: 'あはは' },
  { re: /sigh|exhale|ため息|吐息/i,                      jp: 'はぁ……' },
  { re: /gasp|surprised breath|息をのむ/i,               jp: 'えっ……' },
  { re: /hum|thinking aloud|うーん/i,                    jp: 'うーん……' },
  { re: /sniff|crying|tears|泣/i,                        jp: 'ぐすっ……' },
  { re: /yawn|あくび/i,                                  jp: 'ふぁ……' },
  { re: /clears throat|咳払い/i,                         jp: 'んんっ' },
]

function vocalizationFor(directionText) {
  for (const v of VOCALIZATIONS) {
    if (v.re.test(directionText)) return v.jp
  }
  return null // non-vocal (nod, wave, sits, silence, looks...) → silence/strip
}

export function sanitizeForTts(text, lang) {
  const original = String(text ?? '')
  const directions = original.match(DIRECTION_RE) ?? []
  const cleaned = original.replace(DIRECTION_RE, '').replace(/\s{2,}/g, ' ').trim()
    .replace(/^[\s、,]+/u, '')

  if (!directions.length) {
    return { kind: 'speech', text: cleaned, sanitized: false, original }
  }

  const directionText = directions.join(' ')
  const vocal = vocalizationFor(directionText)
  const hasSpeech = !NON_SPEECH_RE.test(cleaned)

  if (hasSpeech) {
    // Mixed line: keep speech; JP additionally performs the vocal direction
    // as a natural lead-in (e.g. "(笑) もう…" → "あはは、もう…").
    if (lang === 'jp' && vocal) {
      const lead = vocal.replace(/…+$/, '') // trim trailing ellipsis before comma
      return { kind: 'speech', text: `${lead}、${cleaned}`, sanitized: true, original, nonverbal: 'vocalized' }
    }
    return { kind: 'speech', text: cleaned, sanitized: true, original }
  }

  // Pure non-verbal beat.
  if (vocal && lang === 'jp') {
    const t = /[。！？…]$/.test(vocal) ? vocal : vocal + '。'
    return { kind: 'speech', text: t, sanitized: true, original, nonverbal: 'vocalized' }
  }
  return { kind: 'silence', text: '', sanitized: true, original, nonverbal: vocal ? 'vocal_en_silent' : 'beat' }
}

// 24kHz 16-bit mono silent WAV of the given duration. ~38KB at 800ms.
export function makeSilenceWav(durationMs = 800) {
  const sampleRate = 24000
  const samples = Math.round(sampleRate * durationMs / 1000)
  const dataSize = samples * 2
  const buf = Buffer.alloc(44 + dataSize) // data bytes default to zero = silence
  buf.write('RIFF', 0)
  buf.writeUInt32LE(36 + dataSize, 4)
  buf.write('WAVE', 8)
  buf.write('fmt ', 12)
  buf.writeUInt32LE(16, 16)
  buf.writeUInt16LE(1, 20)
  buf.writeUInt16LE(1, 22)
  buf.writeUInt32LE(sampleRate, 24)
  buf.writeUInt32LE(sampleRate * 2, 28)
  buf.writeUInt16LE(2, 32)
  buf.writeUInt16LE(16, 34)
  buf.write('data', 36)
  buf.writeUInt32LE(dataSize, 40)
  return buf
}

// Per-voice loudness normalization (user report 2026-07-14: "english voices
// are louder than the japanese voices often"; JP voices also varied).
//
// assets/voice_gains.json is generated offline by
// scripts/app_pipeline/measure_voice_gains.mjs (ffmpeg ebur128 over sampled
// azure_hd ship clips). expo-audio's player.volume only ATTENUATES (0..1 —
// AudioModule.types.d.ts), so every gain is ≤ 1 and the targets are chosen
// downward: JP_TARGET = quietest JP voice, EN_TARGET = JP_TARGET − 2 dB
// (locked: Japanese a bit louder than English).
//
// Pure lookup — no I/O, no state. useSession sets player.volume per step.

interface VoiceGainsTable {
  version: number
  jpTargetDb: number
  enTargetDb: number
  /** '<character>_<en|jp>' plus 'intro_en' / 'intro_jp' → volume 0..1 */
  gains: Record<string, number>
}

// Metro resolves .json as a source module by default — same pattern as
// assets/prediction_table.json in ProgressScreenV2/GoalPlanner.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TABLE: VoiceGainsTable = require('../../assets/voice_gains.json')

/**
 * Voice key for a clip filename, or null when the clip has no voice entry
 * (chime sentinel, silence-beat .wav renders, unparseable names).
 * Character names contain underscores (yuki_office) — anchor on the trailing
 * _<lang> suffix, mirroring clipCandidates in src/engine/session.ts.
 */
export function voiceKeyForClip(clipName: string): string | null {
  const intro = /^intro_(en|jp)\.(?:mp3|wav)$/.exec(clipName)
  if (intro) return `intro_${intro[1]}`
  const line = /^line_\d+_(.+)_(en|jp)\.(?:mp3|wav)$/.exec(clipName)
  if (line) return `${line[1]}_${line[2]}`
  return null
}

/**
 * Playback volume (0..1) for a clip. Unknown voices, the chime, and anything
 * unparseable play at full volume — normalization must never mute content.
 */
export function gainForClip(clipName: string, table: VoiceGainsTable = TABLE): number {
  const key = voiceKeyForClip(clipName)
  if (key === null) return 1
  const gain = table.gains[key]
  if (typeof gain !== 'number' || !Number.isFinite(gain)) return 1
  return Math.max(0, Math.min(1, gain))
}

export type { VoiceGainsTable }

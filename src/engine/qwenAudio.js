// Pre-rendered audio loader.
//
// Web-only. Tries to play a pre-rendered audio file produced by one of the
// audio pipelines:
//   • scripts/audio_pipeline/generate_audio.py        — Qwen3-TTS, .wav (best quality, requires GPU)
//   • scripts/audio_pipeline/generate_audio_edge.mjs  — Edge TTS,  .mp3 (no GPU, free, default)
//
// Falls back to browser SpeechSynthesis if no file is available.
//
// File layout (served at QWEN_AUDIO_BASE):
//   <convId>/line_<NNN>_<speakerId>_<jp|en>.{wav|mp3}
//   <convId>/intro_en.mp3
//
// The local launcher (launch.mjs) serves nagomi/audio/ at http://localhost:4173/.

const QWEN_AUDIO_BASE =
  (typeof window !== 'undefined' && window.__NAGOMI_AUDIO_BASE) ||
  'http://localhost:4173';

// Priority: WAV first (Qwen, future), MP3 second (Edge, current).
const EXTS = ['wav', 'mp3'];

// In-process caches so we don't HEAD the same URL twice or rebuild Audio() objects.
const _existsCache = new Map();

function isWeb() {
  return typeof window !== 'undefined' && typeof window.fetch === 'function';
}

function pad3(n) {
  return n.toString().padStart(3, '0');
}

function audioUrl(convId, lineIdx, speakerId, lang, ext) {
  return `${QWEN_AUDIO_BASE}/${convId}/line_${pad3(lineIdx)}_${speakerId}_${lang}.${ext}`;
}

function introUrl(convId, ext = 'mp3') {
  return `${QWEN_AUDIO_BASE}/${convId}/intro_en.${ext}`;
}

async function exists(url) {
  if (_existsCache.has(url)) return _existsCache.get(url);
  try {
    const res = await fetch(url, { method: 'HEAD' });
    const ok = res.ok;
    _existsCache.set(url, ok);
    return ok;
  } catch {
    _existsCache.set(url, false);
    return false;
  }
}

let _activeAudio = null;

export function stopQwenAudio() {
  try {
    if (_activeAudio) {
      _activeAudio.pause();
      _activeAudio.currentTime = 0;
    }
  } catch {}
  _activeAudio = null;
}

function playUrl(url) {
  return new Promise(resolve => {
    try {
      const audio = new window.Audio(url);
      _activeAudio = audio;
      audio.onended = () => {
        if (_activeAudio === audio) _activeAudio = null;
        resolve(true);
      };
      audio.onerror = () => {
        if (_activeAudio === audio) _activeAudio = null;
        resolve(false);
      };
      audio.play().catch(() => resolve(false));
    } catch {
      resolve(false);
    }
  });
}

/**
 * Try to play a pre-rendered audio file for the given line.
 * Returns true if it played one (caller should NOT fall back to TTS).
 * Returns false if no file exists or playback failed (caller falls back).
 */
export async function tryPlayQwenAudio({ convId, lineIdx, speakerId, lang }) {
  if (!isWeb()) return false;
  for (const ext of EXTS) {
    const url = audioUrl(convId, lineIdx, speakerId, lang, ext);
    if (await exists(url)) {
      return playUrl(url);
    }
  }
  return false;
}

/**
 * Try to play a pre-rendered narrator intro for a conversation.
 */
export async function tryPlayIntroAudio(convId) {
  if (!isWeb()) return false;
  for (const ext of EXTS) {
    const url = introUrl(convId, ext);
    if (await exists(url)) {
      return playUrl(url);
    }
  }
  return false;
}

export function getQwenAudioBase() {
  return QWEN_AUDIO_BASE;
}

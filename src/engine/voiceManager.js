// Voice manager — selects the best available Japanese TTS voices.
// When only one Japanese voice exists, we use dramatic pitch/rate differences
// to make male and female speakers clearly distinct.

const FEMALE_PRIORITY = ['Nanami', 'Haruka', 'Kyoko', 'O-ren', 'Mizuki', 'Akari'];
const MALE_PRIORITY   = ['Keita', 'Ichiro', 'Otoya', 'Daichi'];

let _voices = [];
let _femaleVoice = null;
let _maleVoice   = null;
let _singleVoiceMode = false; // true when male and female share one voice
let _initialised = false;

function scoreName(name, priorities) {
  for (let i = 0; i < priorities.length; i++) {
    if (name.includes(priorities[i])) return priorities.length - i;
  }
  return 0;
}

export async function initVoices() {
  if (_initialised) return;

  await new Promise(resolve => {
    const load = () => {
      const v = window.speechSynthesis?.getVoices?.() ?? [];
      if (v.length > 0) { _voices = v; resolve(); return; }
      window.speechSynthesis.onvoiceschanged = () => {
        _voices = window.speechSynthesis.getVoices();
        resolve();
      };
      // Fallback poll in case onvoiceschanged never fires
      setTimeout(() => { _voices = window.speechSynthesis.getVoices(); resolve(); }, 2000);
    };
    if (typeof window !== 'undefined') load();
    else resolve();
  });

  const japanese = _voices.filter(v =>
    v.lang?.startsWith('ja') || v.name?.includes('日本') || v.name?.includes('Japan')
  );

  console.log('[Voices] All Japanese voices found:', japanese.map(v => `${v.name} (${v.lang})`));

  if (japanese.length >= 2) {
    const sorted = [...japanese].sort((a, b) => scoreName(b.name, FEMALE_PRIORITY) - scoreName(a.name, FEMALE_PRIORITY));
    _femaleVoice = sorted[0];
    const mSorted = [...japanese].sort((a, b) => scoreName(b.name, MALE_PRIORITY) - scoreName(a.name, MALE_PRIORITY));
    _maleVoice = mSorted.find(v => v.name !== _femaleVoice.name) ?? sorted[1];
    _singleVoiceMode = false;
  } else if (japanese.length === 1) {
    _femaleVoice = japanese[0];
    _maleVoice   = japanese[0];
    _singleVoiceMode = true; // rely on pitch/rate to differentiate
  } else {
    // No Japanese voices — use best English voices as fallback
    _femaleVoice = _voices.find(v => /zira|samantha|victoria|karen|moira|fiona/i.test(v.name)) ?? _voices[0];
    _maleVoice   = _voices.find(v => /david|alex|daniel|fred|thomas/i.test(v.name))           ?? _voices[1] ?? _voices[0];
    _singleVoiceMode = _femaleVoice?.name === _maleVoice?.name;
  }

  _initialised = true;
  console.log('[Voices] Female:', _femaleVoice?.name, '| Male:', _maleVoice?.name, '| SingleVoiceMode:', _singleVoiceMode);
}

// Returns { voice, pitch, rate } for a given gender
export function getVoiceParams(gender) {
  if (_singleVoiceMode) {
    // Dramatic differentiation when stuck with one voice
    return gender === 'female'
      ? { voice: _femaleVoice, pitch: 1.5, rate: 1.05 }
      : { voice: _maleVoice,   pitch: 0.6, rate: 0.88 };
  }
  // Two distinct voices — minimal pitch adjustment to preserve quality
  const isNeural = (gender === 'female' ? _femaleVoice : _maleVoice)?.name?.toLowerCase().includes('online');
  return gender === 'female'
    ? { voice: _femaleVoice, pitch: isNeural ? 1.0 : 1.15, rate: 1.0 }
    : { voice: _maleVoice,   pitch: isNeural ? 1.0 : 0.88, rate: 0.92 };
}

export function isSingleVoiceMode() { return _singleVoiceMode; }

export function listAvailableJapanese() {
  return _voices
    .filter(v => v.lang?.startsWith('ja') || v.name?.includes('日本') || v.name?.includes('Japan'))
    .map(v => `${v.name} (${v.lang})`);
}

// Ambient audio — barely-audible background sounds (volume ~4%).
// All tracks from Pixabay (royalty-free, no attribution required).

const AMBIENT_TRACKS = {
  cafe_morning:        'https://cdn.pixabay.com/audio/2022/03/10/audio_8e8f28cff2.mp3',
  busy_restaurant:     'https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3',
  city_street_day:     'https://cdn.pixabay.com/audio/2021/09/06/audio_b52c3f0dd4.mp3',
  train_station_night: 'https://cdn.pixabay.com/audio/2022/02/15/audio_d08dc80d2a.mp3',
  apartment_indoor:    'https://cdn.pixabay.com/audio/2022/03/15/audio_8ea9f4f2c3.mp3',
  park_evening:        'https://cdn.pixabay.com/audio/2021/08/09/audio_dc39bde808.mp3',
  quiet_office:        'https://cdn.pixabay.com/audio/2022/01/18/audio_d1718ab41b.mp3',
  izakaya_evening:     'https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3',
  apartment_hallway:   'https://cdn.pixabay.com/audio/2022/03/15/audio_8ea9f4f2c3.mp3',
  clinic_waiting_room: 'https://cdn.pixabay.com/audio/2022/01/18/audio_d1718ab41b.mp3',
};

const AMBIENT_VOLUME = 0.04; // barely audible

let _currentAudio = null;
let _enabled = true;

export function setAmbientEnabled(enabled) {
  _enabled = enabled;
  if (!enabled) stopAmbient();
}

export function playAmbient(tag) {
  stopAmbient();
  if (!_enabled || typeof Audio === 'undefined') return;
  const url = AMBIENT_TRACKS[tag];
  if (!url) return;
  try {
    _currentAudio = new Audio(url);
    _currentAudio.loop = true;
    _currentAudio.volume = AMBIENT_VOLUME;
    _currentAudio.play().catch(() => {});
  } catch {}
}

export function stopAmbient() {
  if (_currentAudio) {
    _currentAudio.pause();
    _currentAudio.src = '';
    _currentAudio = null;
  }
}

// Pleasant two-tone chime using Web Audio API — signals a new conversation.
export function playConversationChime() {
  if (typeof window === 'undefined' || !window.AudioContext) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [783.99, 1046.50]; // G5 then C6 — gentle ascending chime
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      const start = ctx.currentTime + i * 0.18;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.18, start + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 1.1);
      osc.start(start);
      osc.stop(start + 1.2);
    });
  } catch {}
}

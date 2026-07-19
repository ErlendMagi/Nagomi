import { useState, useRef, useEffect, useCallback } from 'react';
import { CONVERSATIONS, CHARACTERS } from '../data/conversations_v2';
import { loadSRSState, saveSRSState, createWordState, recordHearing } from '../engine/srs';
import { initVoices, getVoiceParams } from '../engine/voiceManager';
import { playAmbient, stopAmbient, setAmbientEnabled, playConversationChime } from '../engine/ambientAudio';
import { tryPlayQwenAudio, tryPlayIntroAudio, stopQwenAudio } from '../engine/qwenAudio';

export default function usePlayer({
  retentionPct = 90,
  ambientEnabled = true,
  showTranslation = true,
  autoSkipEnglishAudio = false,
  autoSkipThreshold = 25,
  onWordHeard,
} = {}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentConvIndex, setCurrentConvIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(null);
  const [voicesReady, setVoicesReady] = useState(false);

  const isPlayingRef = useRef(false);
  const srsStateRef = useRef({});
  const showTranslationRef = useRef(showTranslation);
  const autoSkipRef = useRef({ enabled: autoSkipEnglishAudio, threshold: autoSkipThreshold });
  // Narrator alternates female/male across each new-conversation transition.
  const introNarratorTurnRef = useRef(0);

  useEffect(() => { showTranslationRef.current = showTranslation; }, [showTranslation]);
  useEffect(() => {
    autoSkipRef.current = { enabled: autoSkipEnglishAudio, threshold: autoSkipThreshold };
  }, [autoSkipEnglishAudio, autoSkipThreshold]);

  useEffect(() => {
    loadSRSState().then(s => { srsStateRef.current = s; });
    initVoices().then(() => setVoicesReady(true));
  }, []);

  useEffect(() => {
    setAmbientEnabled(ambientEnabled);
  }, [ambientEnabled]);

  const speakWeb = useCallback((text, lang, voice, rate = 1.0, pitch = 1.0) => {
    return new Promise(resolve => {
      if (typeof window === 'undefined' || !window.speechSynthesis) return resolve();
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = lang;
      utt.rate = rate;
      utt.pitch = pitch;
      if (voice) utt.voice = voice;
      utt.onend = resolve;
      utt.onerror = resolve;
      window.speechSynthesis.speak(utt);
    });
  }, []);

  // Try a pre-rendered Qwen WAV first; fall back to browser TTS if the file
  // isn't present or playback fails.
  const speakLineQwenOrTts = useCallback(async (convId, lineIdx, speakerId, line, gender) => {
    const played = await tryPlayQwenAudio({ convId, lineIdx, speakerId, lang: 'jp' });
    if (played) return;
    const { voice, pitch, rate } = getVoiceParams(gender);
    return speakWeb(line.jp, 'ja-JP', voice, rate, pitch);
  }, [speakWeb]);

  const speakEnglishQwenOrTts = useCallback(async (convId, lineIdx, speakerId, text, gender) => {
    const played = await tryPlayQwenAudio({ convId, lineIdx, speakerId, lang: 'en' });
    if (played) return;
    const pitch = gender === 'female' ? 1.15 : 0.85;
    const rate  = gender === 'female' ? 0.92 : 0.88;
    return speakWeb(text, 'en-US', null, rate, pitch);
  }, [speakWeb]);

  const shouldSkipEnglishAudio = useCallback((line) => {
    const { enabled, threshold } = autoSkipRef.current;
    if (!enabled) return false;
    const words = line.words ?? [];
    if (words.length === 0) return false;
    const state = srsStateRef.current;
    return words.every(w => (state[w]?.totalReps ?? 0) >= threshold);
  }, []);

  const pause = useCallback((ms) => new Promise(r => setTimeout(r, ms)), []);

  const recordWords = useCallback(async (words) => {
    const state = srsStateRef.current;
    for (const wordId of words) {
      if (!state[wordId]) state[wordId] = createWordState(wordId);
      state[wordId] = recordHearing(state[wordId], retentionPct);
      onWordHeard?.(wordId, state[wordId]);
    }
    srsStateRef.current = state;
    await saveSRSState(state);
  }, [retentionPct, onWordHeard]);

  // New-schema conversations do not carry an intro field; instead the
  // narrator opens with conversation.context. Tries pre-rendered intro
  // audio first, falls back to browser TTS.
  const playIntro = useCallback(async (conv, ci) => {
    const introText = conv.context;
    if (!introText) return;
    const narratorGender =
      (introNarratorTurnRef.current++ % 2 === 0) ? 'female' : 'male';

    setCurrentConvIndex(ci);
    setCurrentLine({
      intro: true,
      narratorGender,
      lang: 'en',
      text: introText,
      convId: conv.id,
      convPurpose: conv.purpose,
    });

    const played = await tryPlayIntroAudio(conv.id);
    if (played) return;

    const pitch = narratorGender === 'female' ? 1.15 : 0.85;
    const rate  = narratorGender === 'female' ? 0.94 : 0.9;
    await speakWeb(introText, 'en-US', null, rate, pitch);
  }, [speakWeb]);

  const playFromPosition = useCallback(async (startConv) => {
    isPlayingRef.current = true;
    let ci = startConv;
    let lastConvId = null;

    while (isPlayingRef.current) {
      if (ci >= CONVERSATIONS.length) ci = 0;
      const conv = CONVERSATIONS[ci];

      // New conversation: ambient → intro → chime → dialog
      if (conv.id !== lastConvId) {
        playAmbient(conv.ambient);
        await playIntro(conv, ci);
        if (!isPlayingRef.current) break;
        await pause(250);
        playConversationChime();
        await pause(900);
        lastConvId = conv.id;
      }

      for (let li = 0; li < conv.lines.length; li++) {
        if (!isPlayingRef.current) break;
        const line = conv.lines[li];
        const character = CHARACTERS[line.speaker];
        const gender = character?.gender ?? 'male';

        setCurrentConvIndex(ci);
        setCurrentLine({
          ...line,
          characterName: character?.name ?? line.speaker,
          convId: conv.id,
          convPurpose: conv.purpose,
        });

        // EN before JP: the English gloss pre-loads meaning so working memory
        // is free for Japanese form (CLT / Roussel-Tricot-Sweller). Auto-skip
        // still drops the EN once every word in the line is mastered.
        if (showTranslationRef.current && !shouldSkipEnglishAudio(line)) {
          await speakEnglishQwenOrTts(conv.id, li, line.speaker, line.en, gender);
          if (!isPlayingRef.current) break;

          await pause(220);
          if (!isPlayingRef.current) break;
        }

        await speakLineQwenOrTts(conv.id, li, line.speaker, line, gender);
        if (!isPlayingRef.current) break;

        await recordWords(line.words ?? []);
        await pause(480);
      }

      ci++;
    }

    stopAmbient();
    stopQwenAudio();
    setIsPlaying(false);
    setCurrentLine(null);
  }, [speakLineQwenOrTts, speakEnglishQwenOrTts, recordWords, pause, playIntro, shouldSkipEnglishAudio]);

  const play = useCallback(() => {
    if (isPlayingRef.current) return;
    setIsPlaying(true);
    playFromPosition(currentConvIndex);
  }, [currentConvIndex, playFromPosition]);

  const stop = useCallback(() => {
    isPlayingRef.current = false;
    if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
    stopAmbient();
    stopQwenAudio();
    setIsPlaying(false);
  }, []);

  return {
    isPlaying,
    voicesReady,
    play,
    stop,
    currentLine,
    currentConvIndex,
    conversation: CONVERSATIONS[currentConvIndex],
    srsState: srsStateRef.current,
  };
}

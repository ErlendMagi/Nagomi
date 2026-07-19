// Nagomi SRS Engine
// Passive SRS: hearing a word in a sentence = 1 rep. No button tapping.
// 40 reps (default) = word "known". Max interval ~180 days.

import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'nagomi_srs_state';

// Interval schedule in days (Anki-inspired, tuned for passive listening)
const INTERVALS = [0, 1, 2, 4, 7, 14, 30, 60, 90, 180];

export function getRequiredReps(retentionPct) {
  // retentionPct: 80–99 → maps to 25–40 reps
  const clamped = Math.min(99, Math.max(80, retentionPct));
  return Math.round(25 + ((clamped - 80) / 19) * 15);
}

export function createWordState(wordId) {
  return {
    wordId,
    totalReps: 0,
    adjustedReps: 0,      // penalised rep count
    intervalIndex: 0,
    nextReviewDate: Date.now(),
    lastReviewDate: null,
    isKnown: false,
  };
}

// Call this every time a word is heard in a played sentence
export function recordHearing(wordState, retentionPct = 90) {
  const now = Date.now();
  const required = getRequiredReps(retentionPct);

  wordState.totalReps += 1;
  wordState.lastReviewDate = now;

  const missedReview = wordState.nextReviewDate && now > wordState.nextReviewDate + 86400000;

  if (missedReview) {
    // Penalty: step back one interval tier
    wordState.intervalIndex = Math.max(0, wordState.intervalIndex - 1);
    wordState.adjustedReps = Math.max(0, wordState.adjustedReps - 1);
  } else {
    wordState.adjustedReps += 1;
    wordState.intervalIndex = Math.min(
      INTERVALS.length - 1,
      wordState.intervalIndex + 1
    );
  }

  const intervalDays = INTERVALS[wordState.intervalIndex];
  wordState.nextReviewDate = now + intervalDays * 86400000;

  if (wordState.adjustedReps >= required && !wordState.isKnown) {
    wordState.isKnown = true;
  }

  return wordState;
}

export function getRepBand(reps) {
  // Returns 0–8 band for gradient colouring (bands of 5)
  return Math.min(8, Math.floor(reps / 5));
}

// ── Persistence ──────────────────────────────────────────────

export async function loadSRSState() {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export async function saveSRSState(state) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

// ── Streak ───────────────────────────────────────────────────

const STREAK_KEY = 'nagomi_streak';

export async function loadStreak() {
  try {
    const raw = await AsyncStorage.getItem(STREAK_KEY);
    return raw ? JSON.parse(raw) : { count: 0, lastDate: null, todayMinutes: 0 };
  } catch {
    return { count: 0, lastDate: null, todayMinutes: 0 };
  }
}

export async function recordListening(minutes) {
  const streak = await loadStreak();
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  if (streak.lastDate === today) {
    streak.todayMinutes += minutes;
  } else if (streak.lastDate === yesterday) {
    streak.count += 1;
    streak.todayMinutes = minutes;
    streak.lastDate = today;
  } else {
    streak.count = streak.todayMinutes >= 10 ? 1 : 0;
    streak.todayMinutes = minutes;
    streak.lastDate = today;
  }

  await AsyncStorage.setItem(STREAK_KEY, JSON.stringify(streak));
  return streak;
}

// ── JLPT Estimation ──────────────────────────────────────────

// Approximate word counts needed for each JLPT level
const JLPT_WORDS = { N5: 800, N4: 1500, N3: 3750, N2: 6000, N1: 10000 };

export function estimateDaysToLevel(knownCount, level, dailyRepsMedian) {
  const target = JLPT_WORDS[level];
  if (knownCount >= target) return 0;
  const needed = target - knownCount;
  // Assume ~15 new words reach "known" per hour of listening
  // dailyRepsMedian is minutes per day
  const wordsPerDay = (dailyRepsMedian / 60) * 15;
  if (wordsPerDay <= 0) return null;
  return Math.ceil(needed / wordsPerDay);
}

export function currentJlptLevel(knownCount) {
  if (knownCount >= JLPT_WORDS.N1) return 'N1';
  if (knownCount >= JLPT_WORDS.N2) return 'N2';
  if (knownCount >= JLPT_WORDS.N3) return 'N3';
  if (knownCount >= JLPT_WORDS.N4) return 'N4';
  if (knownCount >= JLPT_WORDS.N5) return 'N5';
  return 'Pre-N5';
}

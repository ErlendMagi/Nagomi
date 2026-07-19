import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Animated, StatusBar, Platform,
} from 'react-native';
import { COLORS, SPACING, RADIUS } from '../theme';
import CircularProgress from '../components/CircularProgress';
import usePlayer from '../hooks/usePlayer';
import { loadStreak, recordListening } from '../engine/srs';

export default function PlayerScreen({ navigation, settings = {} }) {
  const goalMinutes   = settings.dailyGoalMinutes ?? 30;
  const retentionPct  = settings.retentionPct     ?? 90;
  const showTranslation = settings.showTranslation ?? true;
  const ambientEnabled  = settings.ambientEnabled  ?? true;
  const autoSkipEnglishAudio = settings.autoSkipEnglishAudio ?? false;
  const autoSkipThreshold    = settings.autoSkipThreshold    ?? 25;

  const [streak, setStreak]         = useState({ count: 0, todayMinutes: 0 });
  const [bonusSeconds, setBonusSeconds] = useState(0);
  const [goalReached, setGoalReached]   = useState(false);

  const elapsedRef  = useRef(0);
  const timerRef    = useRef(null);
  const pulseAnim   = useRef(new Animated.Value(1)).current;
  const streakGlow  = useRef(new Animated.Value(0)).current;

  const {
    isPlaying, voicesReady, play, stop,
    currentLine, conversation,
  } = usePlayer({
    retentionPct,
    ambientEnabled,
    showTranslation,
    autoSkipEnglishAudio,
    autoSkipThreshold,
  });

  // Load streak on mount
  useEffect(() => {
    loadStreak().then(s => {
      setStreak(s);
      if ((s.todayMinutes ?? 0) >= goalMinutes) {
        setGoalReached(true);
        setBonusSeconds(Math.round(((s.todayMinutes ?? 0) - goalMinutes) * 60));
      }
    });
  }, []);

  // Listening timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(async () => {
        elapsedRef.current += 1;
        if (elapsedRef.current % 60 === 0) {
          const s = await recordListening(1);
          setStreak(s);
          const total = s.todayMinutes ?? 0;
          if (total >= goalMinutes && !goalReached) {
            setGoalReached(true);
            triggerStreakAnim();
          }
          if (total >= goalMinutes) {
            setBonusSeconds(Math.round((total - goalMinutes) * 60));
          }
        }
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, goalMinutes, goalReached]);

  // Pulse animation while playing
  useEffect(() => {
    if (isPlaying) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, { toValue: 1.06, duration: 950, useNativeDriver: true }),
          Animated.timing(pulseAnim, { toValue: 1,    duration: 950, useNativeDriver: true }),
        ])
      ).start();
    } else {
      pulseAnim.stopAnimation();
      pulseAnim.setValue(1);
    }
  }, [isPlaying]);

  const triggerStreakAnim = () => {
    Animated.sequence([
      Animated.timing(streakGlow, { toValue: 1, duration: 400, useNativeDriver: false }),
      Animated.timing(streakGlow, { toValue: 0, duration: 900, useNativeDriver: false }),
    ]).start();
  };

  const todayMin = streak.todayMinutes ?? 0;
  const progress = Math.min(1, todayMin / goalMinutes);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        {/* Streak — top left */}
        <Animated.View style={[
          styles.streakBadge,
          { backgroundColor: streakGlow.interpolate({ inputRange: [0, 1], outputRange: [COLORS.surface, COLORS.fireGlow] }) },
        ]}>
          <Text style={styles.fireIcon}>🔥</Text>
          <Text style={styles.streakCount}>{streak.count ?? 0}</Text>
        </Animated.View>

        {/* App name — centre */}
        <Text style={styles.appName}>Nagomi</Text>

        {/* Right — Progress + Settings */}
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => navigation?.navigate?.('Progress')} style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>進捗</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation?.navigate?.('Settings')} style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>⚙</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Conversation tag + title */}
      {conversation && (
        <View style={styles.convMeta}>
          <Text style={styles.convTag}>{conversation.purpose || conversation.context?.slice(0, 50)}</Text>
          <Text style={styles.convTitle} numberOfLines={2}>{conversation.context}</Text>
        </View>
      )}

      {/* Current line */}
      <View style={styles.lineContainer}>
        {currentLine ? (
          currentLine.intro ? (
            <>
              <Text style={styles.speakerLabel}>SETTING THE SCENE</Text>
              <Text style={styles.introEnText}>{currentLine.text}</Text>
            </>
          ) : (
            <>
              <Text style={styles.speakerLabel}>
                {currentLine.characterName ?? currentLine.speaker}
              </Text>
              <Text style={styles.jpText}>{currentLine.jp}</Text>
              {showTranslation && (
                <Text style={styles.enText}>{currentLine.en}</Text>
              )}
            </>
          )
        ) : (
          <Text style={styles.idleText}>
            {voicesReady ? 'Press play to begin' : 'Loading voices…'}
          </Text>
        )}
      </View>

      {/* Play button */}
      <View style={styles.playerCenter}>
        <CircularProgress
          size={200}
          progress={progress}
          strokeWidth={6}
          color={goalReached ? COLORS.success : COLORS.accent}
        >
          <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
            <TouchableOpacity
              style={[
                styles.playButton,
                isPlaying && styles.playButtonActive,
                !voicesReady && styles.playButtonLoading,
              ]}
              onPress={isPlaying ? stop : play}
              activeOpacity={0.85}
              disabled={!voicesReady}
            >
              <Text style={styles.playIcon}>
                {!voicesReady ? '…' : isPlaying ? '⏸' : '▶'}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </CircularProgress>

        <Text style={styles.goalText}>
          {Math.floor(todayMin)}m / {goalMinutes}m
        </Text>

        {goalReached && (
          <Text style={styles.bonusText}>
            +{Math.floor(bonusSeconds / 60)}m {bonusSeconds % 60}s bonus
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: Platform.OS === 'ios' ? 56 : 32,
    paddingHorizontal: SPACING.md,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.lg,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: RADIUS.md,
    gap: 4,
  },
  fireIcon:    { fontSize: 18 },
  streakCount: { color: COLORS.fire, fontWeight: '700', fontSize: 16 },
  appName: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '300',
    letterSpacing: 3,
  },
  headerRight: { flexDirection: 'row', gap: 8 },
  headerBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  headerBtnText: { color: COLORS.textMuted, fontSize: 13 },

  // Conversation meta
  convMeta: { alignItems: 'center', marginBottom: SPACING.sm },
  convTag:   { color: COLORS.accent, fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2 },
  convTitle: { color: COLORS.textMuted, fontSize: 13 },

  // Line display
  lineContainer: {
    minHeight: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
  },
  speakerLabel: { color: COLORS.accent, fontSize: 12, letterSpacing: 1, marginBottom: 6 },
  jpText: {
    color: COLORS.text,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '300',
    letterSpacing: 1,
    lineHeight: 34,
  },
  enText: {
    color: COLORS.textMuted,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },
  // English intro narration is more prominent than per-line translations
  // because it's the only text the listener has during the scene-setting moment.
  introEnText: {
    color: COLORS.text,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '300',
    letterSpacing: 0.5,
    lineHeight: 26,
    fontStyle: 'italic',
  },
  idleText: { color: COLORS.textFaint, fontSize: 16 },

  // Player
  playerCenter: { alignItems: 'center', marginBottom: SPACING.lg },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  playButtonActive:  { backgroundColor: COLORS.accentDim, borderColor: COLORS.accent },
  playButtonLoading: { opacity: 0.4 },
  playIcon: { fontSize: 28, color: COLORS.text },
  goalText:  { color: COLORS.textMuted, fontSize: 12, marginTop: 10 },
  bonusText: { color: COLORS.success,   fontSize: 13, marginTop: 4, letterSpacing: 0.5 },
});

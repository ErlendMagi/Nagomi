import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  Switch, Platform,
} from 'react-native';
import { COLORS, SPACING, RADIUS } from '../theme';

const GOAL_PRESETS = [10, 20, 30, 45, 60, 90, 120, 180, 240, 300, 360, 480];
const RETENTION_PRESETS = [80, 85, 90, 95, 99];
const RECALL_INTERVALS = [5, 10, 15, 30];
const SKIP_THRESHOLDS = [20, 25, 30, 35, 40];

export default function SettingsScreen({ navigation, settings = {}, onSave }) {
  const [goalMinutes, setGoalMinutes] = useState(settings.dailyGoalMinutes ?? 30);
  const [retentionPct, setRetentionPct] = useState(settings.retentionPct ?? 90);
  const [showTranslation, setShowTranslation] = useState(settings.showTranslation ?? true);
  const [activeRecall, setActiveRecall] = useState(settings.activeRecall ?? false);
  const [recallInterval, setRecallInterval] = useState(settings.recallIntervalMinutes ?? 15);
  const [darkMode, setDarkMode] = useState(settings.darkMode ?? true);
  const [ambientEnabled, setAmbientEnabled] = useState(settings.ambientEnabled ?? true);
  const [autoSkipEnglishAudio, setAutoSkipEnglishAudio] = useState(settings.autoSkipEnglishAudio ?? false);
  const [autoSkipThreshold, setAutoSkipThreshold] = useState(settings.autoSkipThreshold ?? 25);

  const save = () => {
    onSave?.({
      dailyGoalMinutes: goalMinutes,
      retentionPct,
      showTranslation,
      activeRecall,
      recallIntervalMinutes: recallInterval,
      darkMode,
      ambientEnabled,
      autoSkipEnglishAudio,
      autoSkipThreshold,
    });
    navigation?.goBack?.();
  };

  const thresholdHint = (n) => {
    if (n <= 20) return 'risky';
    if (n >= 40) return 'safe';
    if (n <= 25) return 'fast';
    if (n >= 35) return 'careful';
    return 'balanced';
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
        <TouchableOpacity onPress={save} style={styles.saveBtn}>
          <Text style={styles.saveBtnText}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Daily Goal */}
        <SectionHeader label="Daily Goal" />
        <View style={styles.card}>
          <Text style={styles.cardDesc}>Minutes of listening per day to maintain your streak.</Text>
          <View style={styles.chipRow}>
            {GOAL_PRESETS.map(min => (
              <TouchableOpacity
                key={min}
                style={[styles.chip, goalMinutes === min && styles.chipActive]}
                onPress={() => setGoalMinutes(min)}
              >
                <Text style={[styles.chipText, goalMinutes === min && styles.chipTextActive]}>
                  {min >= 60 ? `${min / 60}h` : `${min}m`}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Retention */}
        <SectionHeader label="Retention Rate" />
        <View style={styles.card}>
          <Text style={styles.cardDesc}>
            Higher retention = more repetitions required before a word is marked known.{'\n'}
            90% → ~32 reps · 99% → 40 reps · 80% → 25 reps
          </Text>
          <View style={styles.chipRow}>
            {RETENTION_PRESETS.map(pct => (
              <TouchableOpacity
                key={pct}
                style={[styles.chip, retentionPct === pct && styles.chipActive]}
                onPress={() => setRetentionPct(pct)}
              >
                <Text style={[styles.chipText, retentionPct === pct && styles.chipTextActive]}>
                  {pct}%
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Playback */}
        <SectionHeader label="Playback" />
        <View style={styles.card}>
          <ToggleRow
            label="English translations (text + voice)"
            value={showTranslation}
            onToggle={setShowTranslation}
          />
          <ToggleRow
            label="Ambient background sounds"
            value={ambientEnabled}
            onToggle={setAmbientEnabled}
          />
        </View>

        {/* Auto-skip English audio */}
        <SectionHeader label="Skip English Audio When Known" />
        <View style={styles.card}>
          <Text style={styles.cardDesc}>
            Skip the spoken English translation for sentences where every word has
            already been heard enough times. Pushes you to understand from context.
          </Text>
          <ToggleRow
            label="Auto-skip when all words ≥ threshold"
            value={autoSkipEnglishAudio}
            onToggle={setAutoSkipEnglishAudio}
          />
          {autoSkipEnglishAudio && (
            <>
              <Text style={[styles.cardDesc, { marginTop: SPACING.sm }]}>
                Threshold (reps each word needs): {autoSkipThreshold} ·{' '}
                <Text style={{ color: COLORS.accent }}>{thresholdHint(autoSkipThreshold)}</Text>
                {'\n'}20 = risky · 40 = safe
              </Text>
              <View style={styles.chipRow}>
                {SKIP_THRESHOLDS.map(n => (
                  <TouchableOpacity
                    key={n}
                    style={[styles.chip, autoSkipThreshold === n && styles.chipActive]}
                    onPress={() => setAutoSkipThreshold(n)}
                  >
                    <Text style={[styles.chipText, autoSkipThreshold === n && styles.chipTextActive]}>
                      {n}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}
        </View>

        {/* Active Recall */}
        <SectionHeader label="Active Recall (Optional)" />
        <View style={styles.card}>
          <Text style={styles.cardDesc}>
            Pause every few minutes and rate how easy the content felt. Adjusts your review schedule.
          </Text>
          <ToggleRow
            label="Enable active recall pauses"
            value={activeRecall}
            onToggle={setActiveRecall}
          />
          {activeRecall && (
            <>
              <Text style={[styles.cardDesc, { marginTop: SPACING.sm }]}>Pause every:</Text>
              <View style={styles.chipRow}>
                {RECALL_INTERVALS.map(min => (
                  <TouchableOpacity
                    key={min}
                    style={[styles.chip, recallInterval === min && styles.chipActive]}
                    onPress={() => setRecallInterval(min)}
                  >
                    <Text style={[styles.chipText, recallInterval === min && styles.chipTextActive]}>
                      {min}m
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}
        </View>

        {/* Appearance */}
        <SectionHeader label="Appearance" />
        <View style={styles.card}>
          <ToggleRow
            label="Dark mode"
            value={darkMode}
            onToggle={setDarkMode}
          />
        </View>

        <View style={{ height: 60 }} />
      </ScrollView>
    </View>
  );
}

function SectionHeader({ label }) {
  return (
    <Text style={styles.sectionHeader}>{label}</Text>
  );
}

function ToggleRow({ label, value, onToggle }) {
  return (
    <View style={styles.toggleRow}>
      <Text style={styles.toggleLabel}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: COLORS.border, true: COLORS.accentDim }}
        thumbColor={value ? COLORS.accent : COLORS.textMuted}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: Platform.OS === 'ios' ? 56 : 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
  },
  backBtn: { padding: 4, minWidth: 60 },
  backBtnText: { color: COLORS.accent, fontSize: 14 },
  title: { color: COLORS.text, fontSize: 18, fontWeight: '300', letterSpacing: 2 },
  saveBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.accentDim,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },
  saveBtnText: { color: COLORS.accent, fontSize: 13, fontWeight: '600' },

  sectionHeader: {
    color: COLORS.textMuted,
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginHorizontal: SPACING.md,
    marginTop: SPACING.lg,
    marginBottom: SPACING.xs,
  },
  card: {
    marginHorizontal: SPACING.md,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardDesc: {
    color: COLORS.textMuted,
    fontSize: 13,
    lineHeight: 18,
    marginBottom: SPACING.sm,
  },

  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 4 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.surfaceAlt,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  chipActive: { backgroundColor: COLORS.accentDim, borderColor: COLORS.accent },
  chipText: { color: COLORS.textMuted, fontSize: 13 },
  chipTextActive: { color: COLORS.accent, fontWeight: '600' },

  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  toggleLabel: { color: COLORS.text, fontSize: 14 },
});

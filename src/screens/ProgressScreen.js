import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform,
} from 'react-native';
import Svg, { G, Path, Text as SvgText } from 'react-native-svg';
import { COLORS, SPACING, RADIUS } from '../theme';
import { loadSRSState, getRepBand, currentJlptLevel, estimateDaysToLevel } from '../engine/srs';
import { getAllWords } from '../data/conversations';
import * as Speech from 'expo-speech';

const JLPT_LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'];

export default function ProgressScreen({ navigation, settings = {} }) {
  const [srsState, setSrsState] = useState({});
  const [words] = useState(getAllWords());
  const [selectedWord, setSelectedWord] = useState(null);
  const dailyMedian = settings.dailyMedianMinutes ?? 30;

  useEffect(() => {
    loadSRSState().then(setSrsState);
  }, []);

  // Band counts
  const bandCounts = Array(9).fill(0);
  for (const word of words) {
    const ws = srsState[word.id];
    const reps = ws?.adjustedReps ?? 0;
    bandCounts[getRepBand(reps)]++;
  }
  const total = words.length;
  const knownCount = words.filter(w => srsState[w.id]?.isKnown).length;
  const level = currentJlptLevel(knownCount);

  // Next JLPT level
  const nextLevel = JLPT_LEVELS[JLPT_LEVELS.indexOf(level) + 1];
  const daysLeft = nextLevel
    ? estimateDaysToLevel(knownCount, nextLevel, dailyMedian)
    : null;

  const speakWord = (word) => {
    Speech.speak(word.id, { language: 'ja-JP', rate: 0.8 });
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Progress</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* JLPT Level Card */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Current Level</Text>
          <Text style={styles.levelText}>{level}</Text>
          <Text style={styles.knownText}>{knownCount} words known</Text>
          {nextLevel && daysLeft !== null && (
            <Text style={styles.daysText}>
              ~{daysLeft} days to {nextLevel}
            </Text>
          )}
          {nextLevel && daysLeft === null && (
            <Text style={styles.daysText}>Set a daily goal to estimate progress</Text>
          )}
        </View>

        {/* JLPT path */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Your Path</Text>
          <View style={styles.jlptRow}>
            {JLPT_LEVELS.map(l => {
              const days = estimateDaysToLevel(knownCount, l, dailyMedian);
              const reached = days === 0;
              return (
                <View key={l} style={[styles.jlptBadge, reached && styles.jlptBadgeReached]}>
                  <Text style={[styles.jlptLabel, reached && styles.jlptLabelReached]}>{l}</Text>
                  {!reached && days !== null && (
                    <Text style={styles.jlptDays}>{days}d</Text>
                  )}
                  {reached && <Text style={styles.jlptCheck}>✓</Text>}
                </View>
              );
            })}
          </View>
        </View>

        {/* Sector diagram */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Word Strength</Text>
          <PieChart bandCounts={bandCounts} total={total} />
          <View style={styles.legend}>
            {COLORS.bands.map((color, i) => (
              <View key={i} style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: color }]} />
                <Text style={styles.legendLabel}>{i * 5}–{i * 5 + 4}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Word List */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Word List</Text>
          {words.map(word => {
            const ws = srsState[word.id];
            const reps = ws?.adjustedReps ?? 0;
            const band = getRepBand(reps);
            const color = COLORS.bands[band];
            return (
              <TouchableOpacity
                key={word.id}
                style={styles.wordRow}
                onPress={() => {
                  setSelectedWord(word.id);
                  speakWord(word);
                }}
              >
                <View style={[styles.repDot, { backgroundColor: color }]} />
                <Text style={styles.wordText}>{word.id}</Text>
                <Text style={styles.repCount}>{reps} reps</Text>
                {ws?.isKnown && <Text style={styles.knownBadge}>✓</Text>}
              </TouchableOpacity>
            );
          })}
        </View>

      </ScrollView>
    </View>
  );
}

function PieChart({ bandCounts, total }) {
  if (total === 0) return null;
  const size = 200;
  const cx = size / 2;
  const cy = size / 2;
  const r = 80;
  const innerR = 44;

  let startAngle = -Math.PI / 2;
  const slices = bandCounts
    .map((count, i) => ({ count, color: COLORS.bands[i] }))
    .filter(s => s.count > 0);

  const paths = slices.map(({ count, color }) => {
    const angle = (count / total) * 2 * Math.PI;
    const endAngle = startAngle + angle;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    const xi1 = cx + innerR * Math.cos(startAngle);
    const yi1 = cy + innerR * Math.sin(startAngle);
    const xi2 = cx + innerR * Math.cos(endAngle);
    const yi2 = cy + innerR * Math.sin(endAngle);
    const large = angle > Math.PI ? 1 : 0;
    const d = `M ${xi1} ${yi1} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} L ${xi2} ${yi2} A ${innerR} ${innerR} 0 ${large} 0 ${xi1} ${yi1} Z`;
    startAngle = endAngle;
    return { d, color };
  });

  return (
    <View style={{ alignItems: 'center', marginVertical: SPACING.sm }}>
      <Svg width={size} height={size}>
        <G>
          {paths.map((p, i) => (
            <Path key={i} d={p.d} fill={p.color} stroke={COLORS.bg} strokeWidth={1.5} />
          ))}
          <SvgText x={cx} y={cy - 8} textAnchor="middle" fill={COLORS.text} fontSize={20} fontWeight="300">
            {total}
          </SvgText>
          <SvgText x={cx} y={cy + 14} textAnchor="middle" fill={COLORS.textMuted} fontSize={11}>
            words
          </SvgText>
        </G>
      </Svg>
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
  backBtn: { padding: 4 },
  backBtnText: { color: COLORS.accent, fontSize: 14 },
  title: { color: COLORS.text, fontSize: 18, fontWeight: '300', letterSpacing: 2 },

  card: {
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardLabel: {
    color: COLORS.textMuted,
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: SPACING.sm,
  },

  levelText: { color: COLORS.accent, fontSize: 48, fontWeight: '200', letterSpacing: 4 },
  knownText: { color: COLORS.text, fontSize: 14, marginTop: 2 },
  daysText: { color: COLORS.textMuted, fontSize: 13, marginTop: 4 },

  jlptRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  jlptBadge: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.surfaceAlt,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    minWidth: 54,
  },
  jlptBadgeReached: { borderColor: COLORS.accent, backgroundColor: COLORS.accentDim },
  jlptLabel: { color: COLORS.textMuted, fontSize: 14, fontWeight: '600' },
  jlptLabelReached: { color: COLORS.accent },
  jlptDays: { color: COLORS.textFaint, fontSize: 10, marginTop: 2 },
  jlptCheck: { color: COLORS.success, fontSize: 11 },

  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: SPACING.sm },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  legendDot: { width: 10, height: 10, borderRadius: 5 },
  legendLabel: { color: COLORS.textMuted, fontSize: 10 },

  wordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    gap: 10,
  },
  repDot: { width: 8, height: 8, borderRadius: 4 },
  wordText: { flex: 1, color: COLORS.text, fontSize: 16 },
  repCount: { color: COLORS.textMuted, fontSize: 12 },
  knownBadge: { color: COLORS.success, fontSize: 12 },
});

// Streak card (M6): current streak (big number + 🔥), freezes remaining,
// next milestone, and a one-tap repair when core/streak says a recent break
// is still repairable. Owns its own user.db read/write through initServices
// (same pattern as ProgressScreenV2); repair persists via UserDB.saveStreak
// and is idempotent — core/streak.repair is a no-op outside the window, and
// a repaired state clears brokenAtDayKey so the button disappears.

import React, { useCallback, useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { initServices } from '../engine/services'
import { dayKey } from '../core/day'
import { repair, type StreakState } from '../core/streak'
import { buildStreakView, parseStreak } from '../engine/streakView'

export default function StreakCard() {
  const [state, setState] = useState<StreakState | null>(null)

  useEffect(() => {
    let cancelled = false
    void initServices().then(svc => {
      if (!cancelled) setState(parseStreak(svc.userDb.loadStreak()))
    })
    return () => { cancelled = true }
  }, [])

  const onRepair = useCallback(() => {
    if (!state) return
    const next = repair(state, dayKey(new Date()))
    if (next === state) return // outside the window — nothing to persist
    void initServices().then(svc => {
      svc.userDb.saveStreak(JSON.stringify(next))
      setState(next)
    })
  }, [state])

  if (!state) {
    return (
      <View style={styles.card}>
        <Text style={styles.loading}>…</Text>
      </View>
    )
  }

  const view = buildStreakView(state, dayKey(new Date()))

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.count}>{view.count}</Text>
        <Text style={styles.flame}>🔥</Text>
        <Text style={styles.countLabel}>day streak</Text>
      </View>

      <View style={styles.freezeRow}>
        <Text style={styles.freezes}>❄ × {view.freezes} (max {view.maxFreezes})</Text>
        <Text style={styles.freezeHint}>a freeze auto-covers a missed day</Text>
      </View>

      {/* recurring economy (user 2026-07-16): +1 freeze every 7 streak days,
          cap 2 — the hint hides when the inventory is already full */}
      {!view.freezesFull && view.count > 0 && (
        <Text style={styles.hint}>
          next freeze in {view.daysToNextFreeze} {view.daysToNextFreeze === 1 ? 'day' : 'days'}
        </Text>
      )}

      {view.count === 0 && !view.repairable && (
        <Text style={styles.hint}>Finish a conversation to start your streak.</Text>
      )}

      {view.repairable && (
        <Pressable
          onPress={onRepair}
          style={({ pressed }) => [styles.repairBtn, pressed && styles.pressed]}
        >
          <Text style={styles.repairText}>
            repair streak — restore {view.repairedCount} {view.repairedCount === 1 ? 'day' : 'days'}
          </Text>
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D8CFBA', borderRadius: 12,
    padding: 14,
  },
  loading: { fontSize: 18, color: '#888' },
  topRow: { flexDirection: 'row', alignItems: 'baseline' },
  count: { fontSize: 34, fontWeight: '700', color: '#1a1a1a' },
  flame: { fontSize: 22, marginLeft: 6 },
  countLabel: { fontSize: 15, color: '#1a1a1a', marginLeft: 10 },
  freezeRow: { flexDirection: 'row', alignItems: 'baseline', marginTop: 8 },
  freezes: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  freezeHint: { fontSize: 12.5, color: '#888', marginLeft: 10, flexShrink: 1 },
  hint: { fontSize: 12.5, color: '#888', lineHeight: 18, marginTop: 8 },
  repairBtn: {
    marginTop: 12, backgroundColor: '#1a1a1a', borderRadius: 10,
    paddingVertical: 10, alignItems: 'center',
  },
  repairText: { fontSize: 14, fontWeight: '600', color: '#FAF6EE' },
  pressed: { opacity: 0.6 },
})

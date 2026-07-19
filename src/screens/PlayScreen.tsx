// Play screen (M4, UX overhaul 2026-07-14): the whole locked loop behind one
// button — picker → bundles → EN→JP → sentence-completion reviews → streak →
// next conversation, uncapped. Goal ring around play (no visible timer),
// streak top-left in the bar, furigana until a word graduates, one number:
// words gone through this session (real units — no XP). No end-session button
// and no summary screen — pause is the only control; leaving the app flushes
// everything via the hook's unmount/background handling.
// High-contrast light layout so it reads well on the Bigme's e-ink panel.

import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  View, Text, Pressable, StyleSheet, ActivityIndicator, ScrollView,
  useWindowDimensions, PanResponder, Animated,
} from 'react-native'
import { useSession } from '../hooks/useSession'
import type { LineToken } from '../engine/session'
import ProgressRing from '../components/ProgressRing'
import SceneBackdrop from '../components/SceneBackdrop'
import WordsPulse from '../components/WordsPulse'
import CharacterAvatar from '../components/CharacterAvatar'
import JuicyButton from '../components/JuicyButton'
import MilestoneBurst from '../components/MilestoneBurst'
import CharacterActor from '../components/CharacterActor'
import { toneOfLine, bubbleShapeFor, expressionFor, reactionFor, energyFor } from '../theme/moods'
import { stageForLine } from '../engine/stagePresence'
import { DISPLAY_FONT, PALETTE } from '../theme/palette'
import { spokenTokenCount } from '../theme/ambient'

// ANDROID LAST-GLYPH CLIP FIX, ROUND 2 (user report persists, Bigme HiBreak
// Pro, 2026-07-14): the flexShrink + textBreakStrategy="simple" + NBSP round
// did NOT cure the cut-off last word(s). Belt-and-suspenders set applied to
// every clippable Text — UNVERIFIED ON DEVICE at commit time (phone was
// offline); verify with screencaps on the next adb session:
//  - bubble minWidth:'72%' DROPPED: percentage minWidth on the PARENT of
//    wrapping text is a known Android measure-vs-layout mismatch source (the
//    parent is measured at content width, then laid out wider, and the Text's
//    cached line breaks no longer match its final box).
//  - custom lineHeight removed where fontSize is large (en 20, jp 24, ghost):
//    lineHeight clamping can clip glyph edges on OEM fonts.
//  - the Text ITSELF can wrap: alignSelf:'stretch' + flexShrink:1 on the Text
//    node (not just parents), so it is measured at the width it is painted.
//  - textBreakStrategy="highQuality" + android_hyphenationFrequency="none":
//    pins BOTH the measure- and paint-time break algorithm to the same
//    hyphenation-free configuration (the default frequency can differ).
//  - no letterSpacing on any wrapping text (paint width diverges from measure).
//  - clipSafe(): a trailing NBSP keeps advance-width headroom INSIDE the
//    Text's own clip rect for OEM fonts that paint wider than they measure.
//    NBSP, not U+200A hair space: every Android font carries it (no tofu) and
//    layout never trims it.
// We deliberately do NOT reach for includeFontPadding:false + tight
// lineHeights — that trades horizontal clipping for vertical clipping of
// ascenders/descenders (react-native issue #17064).

/** Pure: trailing-NBSP paint headroom for OEM fonts that draw wider than
 *  they measure. Empty strings pass through untouched. */
export function clipSafe(text: string): string {
  return text ? text + ' ' : text
}

/** Pure: true when every glyph is full-width CJK (kana, kanji, CJK
 *  punctuation, full-width forms) — bolding those never changes advance
 *  width, so the spoken-highlight bold cannot rewrap the token row.
 *  Latin/digits/half-width kana DO widen under bold → no bold for them. */
export function advanceStable(s: string): boolean {
  return /^[　-〿぀-ヿ㐀-䶿一-鿿豈-﫿！-｠]+$/.test(s)
}

function Furigana({ tokens, fallback, hiddenIds, spokenCount, onPeek, onPeekRelease, onRangePeek }: {
  tokens: LineToken[], fallback: string, hiddenIds: number[], spokenCount: number
  /** tap = translation + 1.5s pause; hold = translation, paused while held */
  onPeek?: (token: LineToken, hold: boolean) => void
  onPeekRelease?: () => void
  /** drag across words → combined span translation (user 2026-07-18) */
  onRangePeek?: (tokens: LineToken[]) => void
}) {
  // token hit-rects (row-relative) for the drag gesture; wrapping rows make
  // this 2-D, so each token records x AND y
  const rectsRef = useRef<Map<number, { x: number, y: number, w: number, h: number }>>(new Map())
  const dragRef = useRef<{ start: number, end: number } | null>(null)
  const [selRange, setSelRange] = useState<[number, number] | null>(null)
  const hitTest = (x: number, y: number): number | null => {
    for (const [i, r] of rectsRef.current) {
      if (x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h) return i
    }
    return null
  }
  const pan = useRef(PanResponder.create({
    // only claim clearly-horizontal drags — taps and long-presses fall
    // through to the token Pressables, vertical swipes stay with the scroller
    onMoveShouldSetPanResponder: (_e, g) => Math.abs(g.dx) > 14 && Math.abs(g.dx) > Math.abs(g.dy) * 1.4,
    onPanResponderGrant: (e) => {
      const i = hitTest(e.nativeEvent.locationX, e.nativeEvent.locationY)
      dragRef.current = i !== null ? { start: i, end: i } : null
      if (i !== null) setSelRange([i, i])
    },
    onPanResponderMove: (e) => {
      const d = dragRef.current
      if (!d) return
      const i = hitTest(e.nativeEvent.locationX, e.nativeEvent.locationY)
      if (i !== null && i !== d.end) {
        d.end = i
        setSelRange([Math.min(d.start, d.end), Math.max(d.start, d.end)])
      }
    },
    onPanResponderRelease: () => {
      const d = dragRef.current
      dragRef.current = null
      setSelRange(null)
      if (d && onRangePeek) {
        const [a, b] = [Math.min(d.start, d.end), Math.max(d.start, d.end)]
        onRangePeek(tokensRefStatic.current.slice(a, b + 1))
      }
    },
    onPanResponderTerminate: () => { dragRef.current = null; setSelRange(null) },
  })).current
  // the responder closes over the FIRST render's tokens — a ref keeps the
  // release handler reading the current line's tokens
  const tokensRefStatic = useRef(tokens)
  tokensRefStatic.current = tokens

  if (!tokens?.length) {
    return (
      <Text
        allowFontScaling={false}
        style={styles.jp}
        textBreakStrategy="highQuality"
        android_hyphenationFrequency="none"
      >
        {clipSafe(fallback)}
      </Text>
    )
  }
  const hidden = new Set(hiddenIds)
  return (
    <View style={styles.tokenRow} {...pan.panHandlers}>
      {tokens.map((t, i) => {
        const showReading = !!t.r && !(t.w !== undefined && hidden.has(t.w))
        const selected = selRange !== null && i >= selRange[0] && i <= selRange[1]
        return (
          <Pressable
            key={i}
            onPress={onPeek ? () => onPeek(t, false) : undefined}
            onLongPress={onPeek ? () => onPeek(t, true) : undefined}
            onPressOut={onPeekRelease}
            delayLongPress={350}
            onLayout={e => {
              const { x, y, width, height } = e.nativeEvent.layout
              rectsRef.current.set(i, { x, y, w: width, h: height })
            }}
            style={[
              styles.token,
              i < spokenCount && styles.tokenSpoken,
              selected && styles.tokenSelected,
            ]}
          >
            {/* hidden reading reserves the line with U+3000 (ideographic
                space), NOT an ASCII space: the placeholder then uses the SAME
                CJK font metrics as real kana, so hiding a reading never
                changes the token's height (an ASCII space takes the Latin
                font's shorter line box). See the furigana clip-fix comment on
                styles.reading. */}
            <Text allowFontScaling={false} style={styles.reading}>{showReading ? t.r : '　'}</Text>
            {/* bold ONLY on advance-stable (pure full-width) tokens: bolding
                Latin/digits/half-width glyphs changes their advance width and
                can rewrap the whole row mid-sweep — the reflow class this
                design bans. The reserved 2px underline highlights every token. */}
            <Text
              allowFontScaling={false}
              style={[styles.jpToken, i < spokenCount && advanceStable(t.s) && styles.jpSpoken]}
            >
              {t.s}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

export default function PlayScreen({ onOpenSettings, onOpenProgress }: {
  onOpenSettings: () => void
  onOpenProgress: () => void
}) {
  const { view, start, pause, resume, peekWord, peekRelease, peekRange } = useSession()
  // orientation: same building blocks, rearranged — portrait stacks them,
  // landscape puts the stage left (~60%) and the controls column right (~40%)
  const { width, height } = useWindowDimensions()
  const landscape = width > height

  // once-a-day "all reviews done" celebration badge (user request 2026-07-16):
  // two discrete states in a RESERVED slot — appears, holds 5s, disappears.
  // No animation loop, no reflow: the slot keeps its height either way.
  const [celebrating, setCelebrating] = useState(false)
  const prevCelebrationRef = useRef(0)
  useEffect(() => {
    if (view.celebrationNonce > prevCelebrationRef.current) {
      prevCelebrationRef.current = view.celebrationNonce
      setCelebrating(true)
      const t = setTimeout(() => setCelebrating(false), 5000)
      return () => clearTimeout(t)
    }
  }, [view.celebrationNonce])

  // DAILY GOAL DONE — the full-screen dopamine moment (user 2026-07-16:
  // "important that I can clearly see that today's goal is done. Do it in
  // the most dopamine way."). One discrete ink takeover, holds ~4.5s (tap
  // dismisses early), audio keeps playing underneath. Fires once per day
  // (kv-guarded in the hook).
  const [goalMoment, setGoalMoment] = useState(false)
  const prevGoalNonceRef = useRef(0)
  useEffect(() => {
    if (view.goalCelebrationNonce > prevGoalNonceRef.current) {
      prevGoalNonceRef.current = view.goalCelebrationNonce
      setGoalMoment(true)
      const t = setTimeout(() => setGoalMoment(false), 4500)
      return () => clearTimeout(t)
    }
  }, [view.goalCelebrationNonce])
  // permanent rest-of-day signal: the ring flips to its "done" state
  const goalDone = view.goalMinutes > 0 && view.minutesToday >= view.goalMinutes

  // word-peek card (user 2026-07-16): appears on each peek nonce, holds long
  // enough to read, disappears — discrete two-state, absolutely positioned
  // over the stage so the bubble never reflows
  const [peekShown, setPeekShown] = useState(false)
  const prevPeekNonceRef = useRef(0)
  useEffect(() => {
    const nonce = view.peek?.nonce ?? 0
    if (nonce > prevPeekNonceRef.current) {
      prevPeekNonceRef.current = nonce
      setPeekShown(true)
      const t = setTimeout(() => setPeekShown(false), view.peek?.hold ? 2800 : 1900)
      return () => clearTimeout(t)
    }
  }, [view.peek?.nonce, view.peek?.hold])

  const mainAction =
    view.phase === 'idle' || view.phase === 'error' ? start :
    view.phase === 'playing' ? pause : resume
  const mainLabel =
    view.phase === 'starting' ? '…' :
    view.phase === 'playing' ? '❚❚' : '▶'

  // bubble side + tail follow the SPEAKER'S STAGE SLOT (user 2026-07-19: the
  // talking bubble must lead to the character speaking) — computed below once
  // the presence machine has resolved who stands where

  // proportional "spoken so far" highlight — only while the JP clip plays
  const spokenCount =
    view.line && view.stepKind === 'line_jp' && view.line.jpTokens?.length
      ? spokenTokenCount(view.line.jpTokens, view.playbackFraction)
      : 0

  // ---- character theater (user 2026-07-18) ----
  const tone = toneOfLine(view.line?.mood, view.line?.jp, view.line?.en)
  const bubbleTone = tone
  const shape = bubbleShapeFor(tone)
  const bubbleMoodStyle =
    shape === 'burst' ? styles.bubbleBurst :
    shape === 'cloud' ? styles.bubbleCloud :
    shape === 'wobble' ? styles.bubbleWobble : undefined

  // bubble pop-in per line, amplitude by the tone's energy; excited lines
  // get a quick wiggle. Native-driver transforms — text layout never moves.
  const bubbleScale = useRef(new Animated.Value(1)).current
  const bubbleWiggleV = useRef(new Animated.Value(0)).current
  useEffect(() => {
    if (view.lineIdx === null || !view.smoothMotion) return
    const energy = energyFor(tone)
    bubbleScale.setValue(1 - 0.1 * energy)
    Animated.spring(bubbleScale, { toValue: 1, bounciness: 8 + energy * 10, useNativeDriver: true }).start()
    if (energy >= 1) {
      bubbleWiggleV.setValue(0)
      Animated.sequence([
        Animated.timing(bubbleWiggleV, { toValue: 1, duration: 70, useNativeDriver: true }),
        Animated.timing(bubbleWiggleV, { toValue: -1, duration: 70, useNativeDriver: true }),
        Animated.timing(bubbleWiggleV, { toValue: 0, duration: 70, useNativeDriver: true }),
      ]).start()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view.lineIdx, view.convId])
  const bubbleWiggle = bubbleWiggleV.interpolate({ inputRange: [-1, 1], outputRange: ['-1.8deg', '1.8deg'] })

  // the STAGE PRESENCE machine (user 2026-07-20): the speaker ENTERS on their
  // first line, the listener STAYS and reacts, a character silent for 2+ lines
  // EXITS (varied exits). Pure recompute from the speaker sequence — rewinds,
  // resumes and recoveries all agree. Intro steps = empty stage; the cast
  // walks on as they speak.
  const presence = useMemo(() => {
    if (view.lineIdx === null || view.convSpeakers.length === 0) return null
    return stageForLine(view.convSpeakers, view.lineIdx)
  }, [view.convSpeakers, view.lineIdx])

  // bubble anchored to the speaker's slot: left corner, right corner or middle
  const speakerSide = presence?.onStage.find(s => s.id === view.line?.speaker)?.side ?? 'left'
  const bubbleAlign =
    speakerSide === 'right' ? styles.bubbleRight :
    speakerSide === 'middle' ? styles.bubbleCenter : styles.bubbleLeft
  const tailStyle =
    speakerSide === 'right' ? styles.tailRight :
    speakerSide === 'middle' ? styles.tailMiddle : styles.tailLeft

  // exiting actors linger briefly to play their exit animation
  const [exitingActors, setExitingActors] = useState<string[]>([])
  useEffect(() => {
    if (!presence?.exited.length || !view.smoothMotion) return
    setExitingActors(presence.exited)
    const t = setTimeout(() => setExitingActors([]), 400)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view.lineIdx, view.convId])

  const stageActors = useMemo(() => {
    const speaker = view.line?.speaker ?? null
    const talkingNow = view.stepKind === 'line_jp' || view.stepKind === 'line_en'
    const onStage = presence?.onStage ?? []
    const duo = onStage.length > 1
    const acting = onStage.map(slot => {
      const towardOther = slot.side === 'left' ? 1 : -1
      const isSpeaker = slot.id === speaker
      return {
        id: slot.id,
        side: slot.side,
        talking: isSpeaker && talkingNow,
        expression: isSpeaker ? expressionFor(tone) : reactionFor(tone),
        gazeX: duo ? towardOther : 0,   // eye contact across the stage; solo → the user
        gazeY: duo ? 0 : 0.35,
        entered: presence?.entered.includes(slot.id) ?? false,
        exiting: false,
      }
    })
    // characters mid-exit stay mounted for their farewell animation
    for (const id of exitingActors) {
      if (acting.some(a => a.id === id)) continue
      const side = acting.some(a => a.side === 'left') ? ('right' as const) : ('left' as const)
      acting.push({
        id, side, talking: false, expression: reactionFor(tone),
        gazeX: 0, gazeY: 0, entered: false, exiting: true,
      })
    }
    return acting
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presence, exitingActors, view.line?.speaker, view.line?.mood, view.stepKind])

  // "welcome back" recovery banner — one calm line, zero decisions required.
  // Numbers come straight from the day's assessed plan (±25% estimate, the
  // plan self-corrects daily).
  const rec = view.recovery
  const recoveryBanner = rec.active ? (
    <View style={styles.recoveryCard}>
      <Text allowFontScaling={false} style={styles.recoveryTitle}>
        おかえり · Welcome back{rec.gapDays > 0 ? ` — away ${rec.gapDays} days` : ''}
      </Text>
      <Text allowFontScaling={false} style={styles.recoveryBody} textBreakStrategy="highQuality" android_hyphenationFrequency="none">
        {clipSafe(
          rec.horizonDays <= 1
            ? `≈${rec.estExcessMinutes} min of reviews queued — today's turbo plan fits your ${view.goalMinutes}-min goal` +
              `${rec.dropEnIntro ? ' (English intros trimmed)' : rec.enPlaybackRate > 1.01 ? ' (English slightly faster)' : ''}. Just press play.`
            : `≈${rec.estExcessMinutes} min of reviews queued — spread over ${rec.horizonDays} days at ~${rec.planMinutesPerDay} min/day, most fragile words first. Just press play.`,
        )}
      </Text>
    </View>
  ) : null

  // Top bar (user request 2026-07-14): 🔥 streak lives top-LEFT (always
  // visible once > 0), 📈 progress + ⚙ settings sit side by side top-RIGHT,
  // brand stays truly centered — both side slots get flex:1 so the brand's
  // center never depends on how wide either side's content is. The streak
  // slot renders a space when empty so its first appearance never reflows
  // the bar.
  const topBar = (
    <View style={styles.topBar}>
      <View style={styles.topSide}>
        {/* ALWAYS visible (user report: "can no longer see the daily streak
            fire" — it was hidden at 0, which is exactly the post-reset state).
            Muted until the streak lights up. */}
        <Text allowFontScaling={false} style={[styles.streakTop, view.streakCount === 0 && styles.streakZero]}>
          {`🔥 ${view.streakCount}`}
        </Text>
      </View>
      <Text allowFontScaling={false} style={styles.brand}>なごみ · Nagomi</Text>
      <View style={[styles.topSide, styles.topSideRight]}>
        <Pressable onPress={onOpenProgress} style={({ pressed }) => [styles.gear, pressed && styles.gearPressed]}>
          <Text allowFontScaling={false} style={styles.gearText}>📈</Text>
        </Pressable>
        <Pressable onPress={onOpenSettings} style={({ pressed }) => [styles.gear, pressed && styles.gearPressed]}>
          <Text allowFontScaling={false} style={styles.gearText}>⚙</Text>
        </Pressable>
      </View>
    </View>
  )

  const stage = (
    <ScrollView style={styles.stage} contentContainerStyle={styles.stageContent}>
      {view.convContext ? (
        <Text
          allowFontScaling={false}
          style={styles.context}
          textBreakStrategy="highQuality"
          android_hyphenationFrequency="none"
        >
          {clipSafe(view.convContext)}
        </Text>
      ) : (
        <Text
          allowFontScaling={false}
          style={styles.context}
          textBreakStrategy="highQuality"
          android_hyphenationFrequency="none"
        >
          {clipSafe('Press play. Lock the screen. Learn.')}
        </Text>
      )}

      {view.line && (
        <Animated.View
          style={[
            styles.bubble,
            bubbleAlign,
            bubbleMoodStyle,
            { transform: [{ scale: bubbleScale }, { rotate: bubbleWiggle }] },
          ]}
        >
          <Text allowFontScaling={false} style={styles.speaker}>
            {view.line.speaker.replace(/_/g, ' ')}
          </Text>
          {/* ONE stable bubble per line (user request 2026-07-15): both
              language parts are laid out at their FINAL sizes from the first
              step — nothing ever expands or pops. The part whose audio is
              playing is dark; the not-yet-played part waits faded; both stay
              readable once played. TRULY symmetric for either language order:
              a part is pending only while the OTHER language plays FIRST
              (convEnFirst) — an already-played part must never re-fade. */}
          <View style={view.stepKind === 'line_en' && view.convEnFirst ? styles.partPending : undefined}>
            <Furigana
              tokens={view.line.jpTokens}
              fallback={view.line.jp}
              hiddenIds={view.furiganaHiddenIds}
              spokenCount={view.stepKind === 'line_jp' ? spokenCount : 0}
              onPeek={peekWord}
              onPeekRelease={peekRelease}
              onRangePeek={peekRange}
            />
          </View>
          {view.line.en ? (
            <Text
              allowFontScaling={false}
              style={[
                styles.enUnder,
                view.stepKind === 'line_en' ? styles.enActive : undefined,
                view.stepKind === 'line_jp' && !view.convEnFirst ? styles.partPending : undefined,
              ]}
              textBreakStrategy="highQuality"
              android_hyphenationFrequency="none"
            >
              {clipSafe(view.line.en)}
            </Text>
          ) : null}
          {tailStyle && <View style={[styles.tail, tailStyle, bubbleTone === 'excited' && styles.tailAccent]} />}
        </Animated.View>
      )}

      {(view.stepKind === 'intro_en' || view.stepKind === 'intro_jp') && (
        <Text allowFontScaling={false} style={styles.intro}>— intro —</Text>
      )}

      {view.phase === 'starting' && <ActivityIndicator size="large" color="#1a1a1a" />}
      {view.error && <Text allowFontScaling={false} style={styles.error}>{view.error}</Text>}
    </ScrollView>
  )

  const controls = (
    <View style={styles.controls}>
      <ProgressRing
        size={124}
        progress={view.goalMinutes > 0 ? view.minutesToday / view.goalMinutes : 0}
        minimumProgress={view.minutesToday / 10}
        done={goalDone}
        color={PALETTE.accent}
      >
        {/* the Duolingo-style physical key (user 2026-07-18): vermilion face,
            hard lip, sinks under the finger — two-state, e-ink crisp */}
        <JuicyButton
          round
          color={PALETTE.accent}
          onPress={mainAction}
          disabled={view.phase === 'starting'}
        >
          <Text allowFontScaling={false} style={styles.playLabel}>{mainLabel}</Text>
        </JuicyButton>
      </ProgressRing>
      {/* streak moved to the top-left of the top bar (user request
          2026-07-14) — no duplicate here */}
    </View>
  )

  const stats = (
    <View style={[styles.statsWrap, landscape && styles.statsWrapLandscape]}>
      {/* TODAY's count (persisted every few sentences) — a crash can no longer
          reset the number the user watches (report 2026-07-15) */}
      <WordsPulse
        total={view.reviewsToday}
        last={view.lastSentenceReviews}
        trigger={view.sentencesThisSession}
      />
      <Text allowFontScaling={false} style={styles.waitingLine}>
        {view.reviewsWaiting > 0
          ? goalDone
            // minutes alone is NOT success (user 2026-07-18) — the day seals,
            // and 達成 fires, only when the queue is finished too
            ? `time goal ✓ — ${view.reviewsWaiting.toLocaleString()} reviews to go`
            : `${view.reviewsWaiting.toLocaleString()} reviews waiting today`
          : 'all reviews done for today ✓'}
      </Text>
      {/* reserved celebration slot — fixed height so the badge never reflows */}
      <View style={styles.celebrateSlot}>
        {celebrating && (
          <View style={styles.celebrateBadge}>
            <Text allowFontScaling={false} style={styles.celebrateText}>全部完了 🎉 every review done</Text>
          </View>
        )}
      </View>
    </View>
  )

  // THE STAGE v3 (user 2026-07-19): two BIG waist-up figures anchored in the
  // bottom corners (a trio adds the middle), facing screen center, layered
  // BEHIND the controls — faces and reactions clearly readable. Feet sit
  // below the screen edge so the upper body dominates.
  const actorW = Math.round(Math.min(width, height) * 0.44)
  const cornerStage = view.convId !== null && stageActors.length > 0 && (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {stageActors.map(actor => (
        <View
          key={actor.id}
          style={[
            styles.cornerActor,
            actor.side === 'left' ? styles.cornerLeft :
            actor.side === 'right' ? styles.cornerRight :
            { left: Math.round(width / 2 - actorW / 2) },
            { width: actorW, height: Math.round(actorW * 1.7), bottom: -Math.round(actorW * 0.55) },
          ]}
        >
          <CharacterActor
            id={actor.id}
            side={actor.side}
            size={actorW}
            talking={actor.talking}
            expression={actor.expression}
            gazeX={actor.gazeX}
            gazeY={actor.gazeY}
            convId={view.convId ?? ''}
            smooth={view.smoothMotion}
            entering={actor.entered && !view.recovery.dropEnIntro}
            exiting={actor.exiting}
          />
        </View>
      ))}
    </View>
  )

  return (
    <View style={styles.shell}>
      {view.convId !== null && <SceneBackdrop ambient={view.convAmbient} smooth={view.smoothMotion} />}
      {cornerStage}
      <View style={[styles.inner, landscape && styles.innerLandscape]}>
        {topBar}
        {recoveryBanner}
        {landscape ? (
          <View style={styles.panes}>
            <View style={styles.paneLeft}>{stage}</View>
            <View style={styles.paneRight}>
              {controls}
              {stats}
            </View>
          </View>
        ) : (
          <>
            {stage}
            {controls}
            {stats}
          </>
        )}
      </View>
      {/* lifetime word-milestone burst — discrete sakura frames, between
          conversations only, toggleable in Settings → Advanced */}
      <MilestoneBurst value={view.milestone.value} nonce={view.milestone.nonce} />
      {/* word-peek card — floats over the stage, never reflows the bubble.
          Elegant and quiet: reading above, the word large, its meaning below. */}
      {peekShown && view.peek && (
        <View style={styles.peekCard} pointerEvents="none">
          {view.peek.reading ? (
            <Text allowFontScaling={false} style={styles.peekReading}>{view.peek.reading}</Text>
          ) : null}
          <Text allowFontScaling={false} style={styles.peekSurface}>{view.peek.surface}</Text>
          <Text allowFontScaling={false} style={styles.peekGloss}>
            {view.peek.gloss ?? '· · ·'}
          </Text>
        </View>
      )}
      {/* DAILY GOAL DONE — full-screen ink takeover (discrete two-state,
          e-ink safe; audio unaffected; tap anywhere to dismiss early) */}
      {goalMoment && (
        <Pressable style={styles.goalMoment} onPress={() => setGoalMoment(false)}>
          <Text allowFontScaling={false} style={styles.goalMomentKanji}>達成!</Text>
          <Text allowFontScaling={false} style={styles.goalMomentLine}>
            Day complete — {view.minutesToday} min · every review done
          </Text>
          <Text allowFontScaling={false} style={styles.goalMomentSub}>
            {view.streakCount > 0 ? `🔥 ${view.streakCount}-day streak` : 'day one — いい感じ!'}
          </Text>
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  // main screen splits in two so the scene backdrop can fill the panel:
  // shell paints the fallback bg (+ hosts the absolute backdrop), inner pads
  shell: { flex: 1, backgroundColor: '#FAF6EE' },
  inner: { flex: 1, paddingTop: 56, paddingHorizontal: 20 },
  innerLandscape: { paddingTop: 24 },
  // landscape: stage keeps ~60% on the left, the controls column takes the
  // rest and centres the ring + stats vertically
  recoveryCard: {
    backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C9BFA8', borderRadius: 12,
    paddingHorizontal: 14, paddingVertical: 10, marginTop: 10,
  },
  recoveryTitle: { fontSize: 14, fontWeight: '700', color: '#1a1a1a' },
  recoveryBody: { fontSize: 13, color: '#2E2E2E', marginTop: 4, alignSelf: 'stretch', flexShrink: 1 },
  panes: { flex: 1, flexDirection: 'row' },
  paneLeft: { flex: 3, marginRight: 16 },
  paneRight: { flex: 2, justifyContent: 'center' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  // equal-flex side slots keep the brand truly centered regardless of what
  // either side holds (streak text left, two 40px buttons right)
  topSide: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  topSideRight: { justifyContent: 'flex-end' },
  // calm daily streak, top-left (moved from under the ring, user request
  // 2026-07-14); minHeight-reserved via the bar's 40px buttons, a space keeps
  // the Text non-empty before the first streak so nothing reflows
  streakTop: { fontSize: 14, color: '#2E2E2E' },
  streakZero: { color: '#6E6E6E' },
  // brand never wraps, so its letterSpacing is safe (clip fix bans it only on
  // wrapping text)
  brand: { fontSize: 18, fontWeight: '700', color: '#1a1a1a', textAlign: 'center', letterSpacing: 1 },
  gear: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  gearText: { fontSize: 22, color: '#1a1a1a' },
  stage: { flex: 1, marginTop: 14 },
  stageContent: { paddingBottom: 24 },
  // e-ink contrast pass: text sitting DIRECTLY on the tinted backdrop must
  // survive the worst case — night tint #3A4A7A@45% over the darkest gradient
  // bottom (#F0DABF → composite ~#9E99A0). #2E2E2E measures 4.86:1 there;
  // the old #555/#888/#999 fell to 2.8:1 and below.
  context: {
    fontSize: 15, color: '#2E2E2E', textAlign: 'center', lineHeight: 22,
    marginBottom: 18, alignSelf: 'stretch', flexShrink: 1,
  },
  // card border #C9BFA8: the old #D8CFBA melts into the evening tint (1.05:1)
  // NO minWidth — see the clip-fix comment at the top of this file
  bubble: {
    backgroundColor: '#FFFFFF', borderRadius: 14, borderWidth: 1, borderColor: '#C9BFA8',
    padding: 16, marginTop: 6, maxWidth: '94%',
  },
  bubbleLeft: { alignSelf: 'flex-start' },
  bubbleRight: { alignSelf: 'flex-end' },
  bubbleCenter: { alignSelf: 'center' },
  // mood silhouettes (user 2026-07-18: bubble shapes reflect the feeling)
  bubbleBurst: { borderWidth: 3, borderColor: PALETTE.accent, borderRadius: 8 },
  bubbleCloud: { borderRadius: 28, borderWidth: 1.5, borderColor: '#B8B0A0', borderStyle: 'dashed' },
  bubbleWobble: { borderRadius: 20, borderWidth: 2, borderColor: PALETTE.gold },
  tailAccent: { borderColor: PALETTE.accent, borderRightWidth: 3, borderBottomWidth: 3 },
  // the cast on stage under the bubble
  stageFloor: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end',
    paddingHorizontal: 28, marginTop: 10, minHeight: 104,
  },
  actorSlot: { alignItems: 'center', width: 96 },
  actorName: {
    fontFamily: DISPLAY_FONT, fontSize: 11, fontWeight: '700', color: '#6E6E6E',
    textTransform: 'capitalize', marginTop: 2,
  },
  // speech tail: a rotated square poking below the bubble; its right+bottom
  // borders become the diamond's lower edges, the white top half hides the seam
  tail: {
    position: 'absolute', bottom: -7, width: 14, height: 14,
    backgroundColor: '#FFFFFF', borderColor: '#C9BFA8',
    borderRightWidth: 1, borderBottomWidth: 1,
    transform: [{ rotate: '45deg' }],
  },
  tailLeft: { left: 22 },
  tailRight: { right: 22 },
  tailMiddle: { left: '50%', marginLeft: -8 },
  // stage v3: big corner-anchored waist-up figures behind the controls
  cornerActor: { position: 'absolute' },
  cornerLeft: { left: -8 },
  cornerRight: { right: -8 },
  // muted text ON the white cards: #6E6E6E is the lightest gray that clears
  // 4.5:1 on #FFFFFF (5.10:1) — #888/#999 don't
  speaker: {
    fontSize: 12, color: '#6E6E6E', marginBottom: 8, textTransform: 'capitalize',
    flexShrink: 1,
  },
  // clip fix: no custom lineHeight on the large wrapping texts (en/jp/ghost),
  // Text itself stretches + shrinks so measure width == paint width
  en: { fontSize: 20, color: '#1a1a1a', alignSelf: 'stretch', flexShrink: 1 },
  enGhost: { fontSize: 13, color: '#6E6E6E', marginTop: 10, alignSelf: 'stretch', flexShrink: 1 },
  // constant-size EN slot under the JP block (single-bubble design): one font
  // size at all times; only the COLOR shifts with the active step — the
  // bubble can never grow or jump
  enUnder: { fontSize: 15, color: '#6E6E6E', marginTop: 10, lineHeight: 21, alignSelf: 'stretch', flexShrink: 1 },
  enActive: { color: '#1a1a1a' },
  // the not-yet-played language part: laid out FULL-SIZE but fully invisible
  // (user 2026-07-16: "I don't want to actually see the translation before
  // the translation is actually supposed to come"). opacity is paint-only in
  // Yoga, so the reserved box keeps its exact size — nothing reflows when the
  // part becomes visible on its audio turn.
  partPending: { opacity: 0 },
  tokenRow: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-end' },
  // every token reserves a 2px transparent underline slot so the row never
  // reflows when the spoken highlight sweeps in
  token: {
    alignItems: 'center', marginRight: 2, marginBottom: 6,
    borderBottomWidth: 2, borderBottomColor: 'transparent',
  },
  tokenSpoken: { borderBottomColor: '#1a1a1a' },
  // drag-selection wash — soft accent, disappears on release
  tokenSelected: { backgroundColor: PALETTE.accentSoft, borderRadius: 6 },
  // FURIGANA CLIP FIX (user report 2026-07-14: "only 80% of the furigana
  // symbols are being shown"). Traced constraint chain:
  //  - HORIZONTAL is NOT the kanji: styles.token has no width/alignSelf, so
  //    Yoga sizes the column to max(reading, kanji) and alignItems:'center'
  //    centers the narrower child — a wide reading already drives the column.
  //  - The real cropper was the old fixed `height: 14`: Android's CJK
  //    fallback (Noto Sans CJK: hhea ascent 1160 / descent 320 per 1000 em ≈
  //    1.48 em) + default includeFontPadding gives kana at fontSize 10 a
  //    natural line box of ~15–17 px; a hard 14 px Text height clips the top
  //    of every glyph (Android always clips Text to its own bounds —
  //    overflow:'visible' is unreliable there). Fix: NO fixed height — the
  //    font's own line box wins, minHeight only guards the reserved-slot
  //    rhythm if a weird font under-measures.
  //  - paddingHorizontal 2: symmetric paint-width headroom for OEM fonts that
  //    paint wider than they measure (same disease as clipSafe above) — a
  //    trailing NBSP would skew the centering, symmetric padding doesn't.
  // Screenshot verification pending (device offline at commit time).
  reading: {
    fontSize: 10, color: '#6E6E6E', minHeight: 16,
    paddingHorizontal: 2, textAlign: 'center',
  },
  // whole-line JP fallback (no tokens): wrapping text, full clip treatment
  jp: { fontSize: 24, color: '#1a1a1a', alignSelf: 'stretch', flexShrink: 1 },
  // per-token JP glyphs never wrap internally — keep the vertical rhythm the
  // tokens were designed around (lineHeight is safe on non-wrapping text)
  jpToken: { fontSize: 24, color: '#1a1a1a', lineHeight: 34, flexShrink: 1 },
  // "spoken so far" — bold + a 2px border-underline on the token (never
  // colour-only, and Text's own 1px underline vanishes on e-ink)
  jpSpoken: { fontWeight: '700' },
  intro: { textAlign: 'center', color: '#2E2E2E', marginTop: 12, fontStyle: 'italic' },
  // celebration badge slot — height reserved whether or not the badge shows
  celebrateSlot: { height: 32, marginTop: 4, alignItems: 'center', justifyContent: 'center' },
  celebrateBadge: {
    backgroundColor: PALETTE.pine, borderRadius: 10,
    paddingHorizontal: 14, paddingVertical: 5,
  },
  celebrateText: { color: '#FAF6EE', fontSize: 13.5, fontWeight: '700' },
  // word-peek card: centered under the top bar, white with a firm ink
  // border — reads as a small dictionary card, not a system toast. No
  // shadows (they band on e-ink), no animation, generous padding.
  peekCard: {
    position: 'absolute', top: 104, alignSelf: 'center', maxWidth: '86%',
    backgroundColor: '#FFFFFF', borderWidth: 2, borderColor: PALETTE.accent,
    borderRadius: 14, paddingHorizontal: 22, paddingVertical: 12,
    alignItems: 'center',
  },
  peekReading: { fontSize: 13, color: '#6E6E6E', marginBottom: 1 },
  peekSurface: { fontSize: 28, fontWeight: '700', color: '#1a1a1a', lineHeight: 38 },
  peekGloss: { fontSize: 15.5, color: '#2E2E2E', marginTop: 4, textAlign: 'center', lineHeight: 21 },
  // full-screen goal-done takeover: ink field, cream type — the highest-
  // contrast moment the panel can produce (the "most dopamine way" within
  // e-ink physics: contrast + scale, not motion)
  goalMoment: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: '#1a1a1a', alignItems: 'center', justifyContent: 'center',
  },
  // temple gold on ink — the richest pairing the e-ink panel can show (a
  // bright mid-gray on cream-vs-ink) and genuinely golden on ordinary phones
  goalMomentKanji: { color: PALETTE.gold, fontSize: 96, fontWeight: '700', lineHeight: 110 },
  goalMomentLine: { color: '#FAF6EE', fontFamily: DISPLAY_FONT, fontSize: 20, fontWeight: '700', marginTop: 18 },
  goalMomentSub: { color: '#C9BFA8', fontFamily: DISPLAY_FONT, fontSize: 16, marginTop: 8 },
  error: { color: '#5A1A1A', marginTop: 16, textAlign: 'center', lineHeight: 20 },
  controls: { alignItems: 'center', paddingBottom: 4 },
  playLabel: { color: '#FFFFFF', fontSize: 34, lineHeight: 40 },
  // pressed states are explicit colour steps, never opacity — a translucent
  // press ghosts/smears on the e-ink panel
  gearPressed: { backgroundColor: '#E3DAC2', borderRadius: 20 },
  // wrapper owns the stats padding so the words counter sits inside it
  statsWrap: { paddingBottom: 16 },
  waitingLine: { textAlign: 'center', fontSize: 12.5, color: '#6E6E6E', marginTop: 4 },
  statsWrapLandscape: { paddingBottom: 0, marginTop: 14 },
})

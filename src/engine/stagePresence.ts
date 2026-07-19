// Stage presence machine for the illustrated character theater.
//
// User spec (2026-07-20): the speaker ENTERS on their first line and stays
// while talking; in duos the listener STAYS on stage and visibly reacts; a
// character who has had no line for 2+ lines EXITS; solo scenes show the
// speaker only. Recovery mode (dropped intro / mid-conversation adoption)
// skips entrance animations — the UI layer handles that via its existing
// `entering` flag; this module only decides WHO is on stage and WHEN they
// enter or leave.
//
// Pure and deterministic: the stage for line N is fully derived from the
// conversation's speaker sequence, so rewinds, resumes and recoveries can
// recompute it from scratch without any stored animation state.

export type StageRole = 'speaker' | 'listener'
export type StageSide = 'left' | 'right' | 'middle'

export interface StageSlot {
  id: string
  role: StageRole
  /** stage side, assigned at entry and stable until exit — a character never
   *  teleports across the stage mid-conversation */
  side: StageSide
  /** line index at which this character stepped on stage */
  sinceLine: number
}

export interface StageFrame {
  /** occupants after this line's entrances/exits, current speaker first */
  onStage: StageSlot[]
  /** ids stepping on stage at this line (play an entrance, unless recovering) */
  entered: string[]
  /** ids stepping off stage at this line (play an exit) */
  exited: string[]
}

/** a character exits after this many consecutive lines without speaking */
export const SILENT_LINES_BEFORE_EXIT = 2

/** stage holds three: left and right corners plus a middle slot for trios
 *  (user 2026-07-19: "when there are three characters, put the last person
 *  in the middle") */
export const MAX_ON_STAGE = 3

/**
 * Compute the stage as of `lineIdx` given the conversation's speaker id per
 * line. Simulates from the top — conversations are short (≤ ~20 lines), so
 * recomputation per line is trivially cheap and keeps this stateless.
 */
export function stageForLine(speakers: string[], lineIdx: number): StageFrame {
  const idx = Math.max(0, Math.min(lineIdx, speakers.length - 1))
  let slots: StageSlot[] = []
  const lastSpokeAt = new Map<string, number>()
  let entered: string[] = []
  let exited: string[] = []

  for (let i = 0; i <= idx; i++) {
    entered = []
    exited = []
    const speaker = speakers[i]
    if (!speaker) continue
    lastSpokeAt.set(speaker, i)

    if (!slots.some(s => s.id === speaker)) {
      // evict the stalest occupant when the stage is full
      if (slots.length >= MAX_ON_STAGE) {
        const stalest = [...slots].sort(
          (a, b) => (lastSpokeAt.get(a.id) ?? -1) - (lastSpokeAt.get(b.id) ?? -1),
        )[0]
        slots = slots.filter(s => s.id !== stalest.id)
        exited.push(stalest.id)
      }
      const used = new Set(slots.map(s => s.side))
      const side: StageSide = !used.has('left') ? 'left' : !used.has('right') ? 'right' : 'middle'
      slots.push({ id: speaker, role: 'speaker', side, sinceLine: i })
      entered.push(speaker)
    }

    // silence rule: anyone (but the current speaker) quiet too long leaves.
    // The threshold scales with the stage: in a trio rotation every member is
    // naturally silent for 2 lines between turns, so 3 people need gap ≥ 3.
    const silentLimit = Math.max(SILENT_LINES_BEFORE_EXIT, slots.length)
    for (const s of slots) {
      if (s.id === speaker) continue
      const last = lastSpokeAt.get(s.id) ?? s.sinceLine
      if (i - last >= silentLimit) {
        slots = slots.filter(x => x.id !== s.id)
        exited.push(s.id)
      }
    }

    for (const s of slots) s.role = s.id === speaker ? 'speaker' : 'listener'
  }

  // speaker first for stable layout (speaker side, listener side)
  slots.sort((a, b) => (a.role === 'speaker' ? -1 : 0) - (b.role === 'speaker' ? -1 : 0))
  return { onStage: slots, entered, exited }
}

const EXIT_STYLES = ['walk', 'hop', 'slide', 'sink', 'dash'] as const
export type ExitStyle = (typeof EXIT_STYLES)[number]

/** deterministic per-conversation exit flavor, mirroring entryStyleFor */
export function exitStyleFor(convId: string, charId: string): ExitStyle {
  let h = 0
  const key = `${convId}:${charId}`
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0
  return EXIT_STYLES[h % EXIT_STYLES.length]
}

// Live-layer specs for the illustrated scene backdrops ("beautiful and
// dopamine-maxing" ambient life, user 2026-07-20). PURE module — no RN
// imports — the SceneLife component renders these specs with native-driver
// Animated transforms/opacity only, and skips them entirely when the
// smoothMotion setting is off (e-ink).
//
// Constraints: at most 3 layers per family, subtle peak opacities, slow calm
// periods — life, not distraction. Positions are fractions of the backdrop
// (x right-ward, y down-ward) chosen for the portrait 2:3 scenes whose focal
// band sits in the vertical middle and whose bottom third stays clear.

export interface LifeLayer {
  /**
   * steam   — rising, slowly swaying wisp that fades with height
   * flicker — warm glow pulsing in place (lanterns, stoves, festival light)
   * drift   — specks floating diagonally (dust motes, leaves, chalk)
   * sweep   — an element crossing the scene rarely (bird, silhouette, light)
   * shift   — very slow whole-scene light breathing (window light)
   * petals  — occasional petals tumbling down
   * glint   — tiny sparkles blinking (water, glassware)
   */
  kind: 'steam' | 'flicker' | 'drift' | 'sweep' | 'shift' | 'petals' | 'glint'
  /** anchor as fraction of backdrop width (0 left … 1 right) */
  x: number
  /** anchor as fraction of backdrop height (0 top … 1 bottom) */
  y: number
  /** base element size in px at the app's standard stage width */
  size: number
  /** full animation cycle in ms (sweeps: interval between crossings) */
  period: number
  /** peak opacity — kept subtle so text and cast always win */
  opacity: number
  /** tint; layers multiply onto the illustrated backdrop */
  color: string
}

const warm = '#E8C9A0'
const smoke = '#F2EFE8'
const leaf = '#9DB88A'
const dust = '#E5DECF'
const glow = '#F5D9A8'
const sky = '#DCE8EF'
const pink = '#EFC9D2'

/** family key (ambient.ts) → up to 3 live layers */
const LIFE: Record<string, LifeLayer[]> = {
  cafe: [
    { kind: 'steam', x: 0.62, y: 0.55, size: 46, period: 5200, opacity: 0.30, color: smoke },
    { kind: 'shift', x: 0.5, y: 0.35, size: 0, period: 16000, opacity: 0.10, color: glow },
  ],
  tatami: [
    { kind: 'steam', x: 0.45, y: 0.58, size: 38, period: 6400, opacity: 0.26, color: smoke },
    { kind: 'drift', x: 0.7, y: 0.3, size: 5, period: 12000, opacity: 0.20, color: dust },
  ],
  kitchen: [
    { kind: 'steam', x: 0.4, y: 0.5, size: 52, period: 4600, opacity: 0.32, color: smoke },
    { kind: 'flicker', x: 0.28, y: 0.56, size: 34, period: 2600, opacity: 0.22, color: warm },
  ],
  bedroom: [
    { kind: 'drift', x: 0.55, y: 0.3, size: 4, period: 14000, opacity: 0.16, color: dust },
    { kind: 'shift', x: 0.5, y: 0.3, size: 0, period: 20000, opacity: 0.08, color: sky },
  ],
  home: [
    { kind: 'drift', x: 0.6, y: 0.32, size: 5, period: 13000, opacity: 0.18, color: dust },
    { kind: 'shift', x: 0.5, y: 0.35, size: 0, period: 18000, opacity: 0.10, color: glow },
  ],
  porch: [
    { kind: 'drift', x: 0.35, y: 0.28, size: 9, period: 9000, opacity: 0.26, color: leaf },
    { kind: 'sweep', x: 0.1, y: 0.22, size: 16, period: 34000, opacity: 0.30, color: '#7A756B' },
  ],
  school: [
    { kind: 'drift', x: 0.4, y: 0.4, size: 4, period: 11000, opacity: 0.18, color: smoke },
    { kind: 'shift', x: 0.5, y: 0.3, size: 0, period: 17000, opacity: 0.10, color: sky },
  ],
  office: [
    { kind: 'shift', x: 0.5, y: 0.3, size: 0, period: 15000, opacity: 0.12, color: sky },
    { kind: 'drift', x: 0.7, y: 0.35, size: 4, period: 14000, opacity: 0.14, color: dust },
  ],
  clinic: [
    { kind: 'shift', x: 0.5, y: 0.3, size: 0, period: 16000, opacity: 0.10, color: sky },
    { kind: 'drift', x: 0.45, y: 0.35, size: 3, period: 15000, opacity: 0.12, color: dust },
  ],
  eatery: [
    { kind: 'flicker', x: 0.3, y: 0.22, size: 40, period: 3200, opacity: 0.30, color: glow },
    { kind: 'flicker', x: 0.72, y: 0.24, size: 32, period: 2700, opacity: 0.26, color: warm },
    { kind: 'steam', x: 0.5, y: 0.52, size: 44, period: 5000, opacity: 0.28, color: smoke },
  ],
  shop: [
    { kind: 'shift', x: 0.5, y: 0.3, size: 0, period: 15000, opacity: 0.10, color: glow },
    { kind: 'drift', x: 0.5, y: 0.35, size: 4, period: 13000, opacity: 0.14, color: dust },
  ],
  street: [
    { kind: 'sweep', x: 0.05, y: 0.6, size: 60, period: 40000, opacity: 0.20, color: '#6E6A62' },
    { kind: 'drift', x: 0.6, y: 0.3, size: 6, period: 10000, opacity: 0.18, color: dust },
    { kind: 'shift', x: 0.5, y: 0.3, size: 0, period: 18000, opacity: 0.08, color: sky },
  ],
  transit: [
    { kind: 'sweep', x: 0.0, y: 0.4, size: 90, period: 30000, opacity: 0.16, color: glow },
    { kind: 'drift', x: 0.5, y: 0.35, size: 4, period: 12000, opacity: 0.14, color: dust },
  ],
  shrine: [
    { kind: 'steam', x: 0.5, y: 0.5, size: 36, period: 7200, opacity: 0.24, color: smoke },
    { kind: 'petals', x: 0.65, y: 0.15, size: 8, period: 11000, opacity: 0.30, color: pink },
  ],
  nature: [
    { kind: 'sweep', x: 0.1, y: 0.2, size: 16, period: 28000, opacity: 0.32, color: '#7A756B' },
    { kind: 'drift', x: 0.4, y: 0.3, size: 9, period: 8500, opacity: 0.26, color: leaf },
    { kind: 'shift', x: 0.5, y: 0.3, size: 0, period: 16000, opacity: 0.08, color: glow },
  ],
  water: [
    { kind: 'glint', x: 0.55, y: 0.45, size: 6, period: 4200, opacity: 0.32, color: '#FFFFFF' },
    { kind: 'drift', x: 0.35, y: 0.3, size: 5, period: 12000, opacity: 0.16, color: sky },
  ],
  event: [
    { kind: 'flicker', x: 0.5, y: 0.25, size: 42, period: 2900, opacity: 0.28, color: glow },
    { kind: 'petals', x: 0.3, y: 0.12, size: 7, period: 9000, opacity: 0.26, color: pink },
  ],
  sports: [
    { kind: 'drift', x: 0.5, y: 0.35, size: 5, period: 11000, opacity: 0.16, color: dust },
    { kind: 'shift', x: 0.5, y: 0.3, size: 0, period: 15000, opacity: 0.10, color: sky },
  ],
  workshop: [
    { kind: 'drift', x: 0.45, y: 0.4, size: 6, period: 9500, opacity: 0.22, color: dust },
    { kind: 'flicker', x: 0.7, y: 0.35, size: 30, period: 3100, opacity: 0.20, color: warm },
  ],
  phone: [
    { kind: 'shift', x: 0.5, y: 0.3, size: 0, period: 17000, opacity: 0.10, color: sky },
  ],
  default: [
    { kind: 'drift', x: 0.55, y: 0.32, size: 5, period: 13000, opacity: 0.16, color: dust },
    { kind: 'shift', x: 0.5, y: 0.3, size: 0, period: 18000, opacity: 0.08, color: glow },
  ],
}

/** most layers any scene may run at once (also enforced by test) */
export const MAX_LIFE_LAYERS = 3

export function lifeLayersFor(familyKey: string): LifeLayer[] {
  return LIFE[familyKey] ?? LIFE.default
}

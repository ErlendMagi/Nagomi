// Listening heatmap: GitHub-style week grid (rows = Mon..Sun, columns = weeks).
// Four intensity steps in pure grayscale (white → black, monotonic lightness)
// so it reads on a 16-level e-ink panel with zero hue dependence. Every cell
// carries a hairline border so white (= no listening) cells stay visible on
// the white card. Levels mean real things (see analytics.heatLevel):
// 0 · <10m · 10-30m · 30m+ — and the legend says exactly that.

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Rect, Text as SvgText } from 'react-native-svg'
import { heatLevel, type HeatCell } from '../../engine/analytics'

/** pure grayscale, light → dark (levels 0..3) */
const HEAT = ['#FFFFFF', '#C9C9C9', '#6E6E6E', '#1a1a1a']
/** real-unit meaning of each level — keep in sync with analytics.heatLevel */
const HEAT_LABELS = ['0', '<10m', '10-30m', '30m+']
const CELL_BORDER = '#B0B0B0'
const MUTED = '#555'

const LABEL_W = 20 // weekday letters column
const TOP_H = 14   // month labels row
const GAP = 2      // surface gap between cells

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function Heatmap({ cells, width }: { cells: HeatCell[], width: number }) {
  if (cells.length === 0) return null
  const weeks = cells[cells.length - 1].week + 1
  const cell = Math.max(6, Math.min(16, Math.floor((width - LABEL_W) / weeks) - GAP))
  const svgW = LABEL_W + weeks * (cell + GAP)
  const svgH = TOP_H + 7 * (cell + GAP)

  // month label above a column when its Monday falls in the month's first week
  const monthLabels: { week: number, label: string }[] = []
  for (const c of cells) {
    if (c.weekday !== 0) continue
    const [, m, d] = c.day.split('-').map(Number)
    if (d <= 7) monthLabels.push({ week: c.week, label: MONTHS[m - 1] })
  }

  const xOf = (week: number) => LABEL_W + week * (cell + GAP)
  const yOf = (weekday: number) => TOP_H + weekday * (cell + GAP)

  return (
    <View>
      <Svg width={svgW} height={svgH}>
        {monthLabels.map(m => (
          <SvgText key={m.week} x={xOf(m.week)} y={10} fontSize={9} fill={MUTED} textAnchor="start">
            {m.label}
          </SvgText>
        ))}
        {([[0, 'M'], [2, 'W'], [4, 'F']] as const).map(([row, label]) => (
          <SvgText key={label} x={LABEL_W - 6} y={yOf(row) + cell * 0.8} fontSize={9}
            fill={MUTED} textAnchor="end">
            {label}
          </SvgText>
        ))}
        {cells.map(c => (
          <Rect key={c.day} x={xOf(c.week)} y={yOf(c.weekday)} width={cell} height={cell}
            rx={2} fill={HEAT[heatLevel(c.seconds)]} stroke={CELL_BORDER} strokeWidth={1} />
        ))}
      </Svg>

      <View style={styles.legend}>
        {HEAT.map((color, i) => (
          <React.Fragment key={color}>
            <View style={[styles.step, { backgroundColor: color }]} />
            <Text style={styles.legendText}>{HEAT_LABELS[i]}</Text>
          </React.Fragment>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  legend: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 6,
  },
  step: {
    width: 10, height: 10, borderRadius: 2, marginLeft: 10, marginRight: 4,
    borderWidth: 1, borderColor: '#B0B0B0',
  },
  legendText: { fontSize: 11, color: '#555' },
})

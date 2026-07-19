// 4AM-local day boundary (locked decision: dues materialize at 4AM, the
// listening day and streak day both roll at 4AM).
//
// A "day key" is the LOCAL calendar date of (timestamp minus 4 hours), so
// 03:59 belongs to yesterday and 04:00 starts today. Stored as 'YYYY-MM-DD'
// strings — stable across timezone changes (we deliberately anchor to
// whatever the device's local time is at the moment of the event; travelers
// get the local-experience behavior, and keys never reinterpret old events).

import { SRS_CONFIG } from './config'

export function dayKey(date: Date, boundaryHour: number = SRS_CONFIG.dayBoundaryHour): string {
  const shifted = new Date(date.getTime() - boundaryHour * 3600_000)
  const y = shifted.getFullYear()
  const m = String(shifted.getMonth() + 1).padStart(2, '0')
  const d = String(shifted.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/** Start-of-day instant (local 4AM) for the day containing `date`. */
export function dayStart(date: Date, boundaryHour: number = SRS_CONFIG.dayBoundaryHour): Date {
  const shifted = new Date(date.getTime() - boundaryHour * 3600_000)
  const start = new Date(shifted.getFullYear(), shifted.getMonth(), shifted.getDate(), boundaryHour, 0, 0, 0)
  return start
}

/** Whole days between two day keys (b - a). */
export function dayKeyDiff(a: string, b: string): number {
  const [ay, am, ad] = a.split('-').map(Number)
  const [by, bm, bd] = b.split('-').map(Number)
  const at = Date.UTC(ay, am - 1, ad)
  const bt = Date.UTC(by, bm - 1, bd)
  return Math.round((bt - at) / 86_400_000)
}

export function addDaysToKey(key: string, days: number): string {
  const [y, m, d] = key.split('-').map(Number)
  const t = new Date(Date.UTC(y, m - 1, d + days))
  return `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, '0')}-${String(t.getUTCDate()).padStart(2, '0')}`
}

// SqlDriver over expo-sqlite's synchronous API — the on-device counterpart of
// core/db.ts's nodeDriver (same SQL runs in app, simulator, and tests).

import type { SQLiteDatabase } from 'expo-sqlite'
import type { SqlDriver } from '../core/db'

export function expoDriver(db: SQLiteDatabase): SqlDriver {
  return {
    exec: sql => db.execSync(sql),
    run: (sql, params = []) => { db.runSync(sql, params as any[]) },
    all: (sql, params = []) => db.getAllSync(sql, params as any[]) as any[],
    get: (sql, params = []) => (db.getFirstSync(sql, params as any[]) ?? undefined) as any,
    transaction: fn => db.withTransactionSync(fn),
  }
}

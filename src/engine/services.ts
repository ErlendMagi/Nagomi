// App-wide singletons: databases, bundle manager, scheduler, recorder.
// initServices() is idempotent — first caller pays the setup cost (content.db
// asset copy on first launch), everyone else awaits the same promise.

import { Platform } from 'react-native'
import {
  openDatabaseSync, deleteDatabaseSync, defaultDatabaseDirectory, type SQLiteDatabase,
} from 'expo-sqlite'
import { Asset } from 'expo-asset'
import { File, Directory } from 'expo-file-system'

import { UserDB, type SqlDriver } from '../core/db'
import { Scheduler } from '../core/scheduler'
import { expoDriver } from './sql'
import { ContentDb } from './content'
import {
  BundleManager, documentLibrarySource, deviceLibrarySource, lanSource, starterSource,
} from './bundles'
import { SessionRecorder, loadSettings, type SessionSettings } from './session'
import { STARTER_BUNDLES } from '../../assets/starter/starter'

export const DEFAULT_LAN_URL = 'http://10.0.0.32:8765'
/** adb push target for the sideloaded library (app-scoped external storage) */
export const ANDROID_LIBRARY_DIR =
  'file:///storage/emulated/0/Android/data/app.nagomi.listen/files/bundles'

export interface Services {
  userDb: UserDB
  /**
   * Shared driver over the services-owned user.db handle. Components that
   * need raw SQL (GoalPlanner's graduationTotals) MUST use this instead of
   * calling openDatabaseSync('user.db') themselves: a throwaway default open
   * returns the POOLED native connection, and when its JS wrapper is later
   * GC'd, expo-sqlite closes the native binding under every other user of
   * that pool entry (see openUserDb below — this bricked the device
   * 2026-07-16).
   */
  userDriver: SqlDriver
  content: ContentDb
  bundles: BundleManager
  scheduler: Scheduler
  recorder: SessionRecorder
  settings: SessionSettings
}

let servicesPromise: Promise<Services> | null = null

/**
 * Raw content.db handle owned by the CURRENT build. build() closes it before
 * re-provisioning so a rebuild (resetServices, or a retried failed init) never
 * leaks native connections into expo-sqlite's connection pool — a pool entry
 * whose file has been replaced underneath it is exactly the dead handle whose
 * prepareSync NPEs (see the useNewConnection comment in build()).
 */
let liveContentHandle: SQLiteDatabase | null = null

function closeLiveContentHandle(): void {
  if (!liveContentHandle) return
  try { liveContentHandle.closeSync() } catch { /* already closed */ }
  liveContentHandle = null
}

/**
 * user.db handle owned by the CURRENT build — tracked for the same reason as
 * liveContentHandle. This file used to claim "user.db needs no such tracking:
 * the pool's refcounting hands every opener the same healthy connection".
 * That assumption was WRONG and bricked the device on 2026-07-16: expo-sqlite
 * Android pools NativeDatabase entries by (path, options), and a SECOND
 * default open (GoalPlanner's throwaway openDatabaseSync('user.db')) returned
 * the SAME pooled entry wrapped in a NEW JS object. SharedObjectRegistry.add
 * registers every wrapper as its own pair, and GC of ANY one wrapper fires
 * sharedObjectDidRelease → NativeDatabase.ref.close() → HybridData.resetNative()
 * — the underlying sqlite3 handle dies while `isClosed` stays false and the
 * zombie stays in SQLiteModule.cachedDatabases. Every later statement (and
 * every later default open, which happily returns the zombie by name) then
 * dies with "NativeDatabase.prepareSync ... java.lang.NullPointerException",
 * for the LIFETIME OF THE PROCESS — on the Bigme, Android keeps the process
 * alive across app reopens, so it presented as a permanent boot brick.
 * Fix: services owns ONE private (useNewConnection) user.db connection that
 * can never be handed to anyone else by the pool, and everything JS-side
 * shares it via Services.userDriver. user.db itself is NEVER deleted.
 */
let liveUserHandle: SQLiteDatabase | null = null

function closeLiveUserHandle(): void {
  if (!liveUserHandle) return
  try { liveUserHandle.closeSync() } catch { /* already closed/dead */ }
  liveUserHandle = null
}

export function initServices(): Promise<Services> {
  if (!servicesPromise) {
    servicesPromise = build()
    // never memoize a failure — a transient first-launch hiccup must not
    // brick every later play press until app restart
    servicesPromise.catch(() => { servicesPromise = null })
  }
  return servicesPromise
}

/**
 * Drop the singleton so the next initServices() rebuilds from disk — required
 * after resetAllProgress(): the live recorder caches word states in memory.
 *
 * Deliberately does NOT close database handles here: components created from
 * the old Services object may still be mid-render with them. The next build()
 * closes the previous content.db AND user.db handles before opening fresh
 * ones (both are private useNewConnection handles now — see liveUserHandle);
 * ProgressScreenV2's module-level default-open user.db handle stays valid
 * because it is held forever (never GC'd) and user.db is never deleted.
 */
export function resetServices(): void {
  servicesPromise = null
}

// ---- calm error surfaces (never show a raw native exception to the user) ----

/** user.db could not be opened even on a fresh native connection. The db file
 *  is NEVER deleted automatically — SRS progress is sacred. */
export const USER_DB_ERROR_MESSAGE =
  'Nagomi could not open its progress database. Your learning progress is '
  + 'intact on this device — fully close the app (swipe it away) and reopen '
  + 'it to try again.'

/** content.db was quarantined and re-copied from the app bundle, and STILL
 *  failed — something beyond a stale file (disk full, broken install). */
export const CONTENT_DB_REPAIR_FAILED_MESSAGE =
  'Nagomi could not rebuild its conversation database. Your learning progress '
  + 'is intact — free up some storage if the phone is full, then fully close '
  + 'and reopen the app to try again.'

/**
 * Classify a content.db open/probe failure for telemetry. Pure so the mapping
 * is unit-testable; the strings are the `reason` field of contentdb_selfheal.
 */
export function selfHealReason(message: string): string {
  // the 2026-07-14/2026-07-16 signature: a GC'd/zombie pool handle
  if (/NullPointerException|prepareSync|has been rejected/i.test(message)) return 'stale_native_handle'
  // half-written or foreign bytes under the content.db name
  if (/no such table|not a database|malformed|disk image|corrupt/i.test(message)) return 'corrupt_or_incomplete'
  if (/unable to open|could not open|OpenDatabase/i.test(message)) return 'open_failed'
  return 'unknown'
}

/**
 * Fire-and-forget telemetry to the LAN dashboard (same body shape as
 * useSession's appLog and packs.ts' pack_* posts). Recovery paths MUST
 * narrate themselves: the 2026-07-16 brick produced zero pack_* events and
 * the whole diagnosis had to be reconstructed from a paraphrased screenshot.
 * userDb may itself be the broken component — every touch is guarded.
 */
function postRecoveryLog(userDb: UserDB | null, event: string, reason: string, detail?: string): void {
  let base = DEFAULT_LAN_URL
  try { base = userDb?.getKV('lan_base_url') ?? DEFAULT_LAN_URL } catch { /* broken userDb */ }
  try {
    void fetch(`${base.replace(/\/+$/, '')}/applog`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ t: new Date().toISOString(), event, reason, detail }),
    }).catch(() => {})
  } catch { /* fire-and-forget */ }
}

/**
 * Boot self-heal orchestration for content.db, extracted with injected deps
 * so the decision sequence is unit-testable (the real wiring lives in
 * build()): open+probe → on ANY failure quarantine (close handle, delete db
 * + sidecars, clear the hash kv), re-provision from the bundled asset, and
 * try once more → only a SECOND failure surfaces an error, and it is the
 * calm CONTENT_DB_REPAIR_FAILED_MESSAGE, never the raw native exception.
 * content.db is disposable by design (re-copyable from the app bundle), so
 * auto-delete is always safe here — unlike user.db.
 */
export async function openContentWithSelfHeal<T>(deps: {
  openAndProbe: () => T
  quarantine: () => void
  reprovision: () => Promise<void>
  log: (reason: string, detail: string) => void
}): Promise<T> {
  try {
    return deps.openAndProbe()
  } catch (e) {
    const detail = e instanceof Error ? e.message : String(e)
    deps.log(selfHealReason(detail), detail)
    deps.quarantine()
    try {
      await deps.reprovision()
    } catch (e2) {
      // the repair copy itself failed (asset resolve, disk full) — still the
      // calm message, never a raw "asset failed to resolve" to the user
      deps.log('repair_failed', e2 instanceof Error ? e2.message : String(e2))
      throw new Error(CONTENT_DB_REPAIR_FAILED_MESSAGE)
    }
    try {
      return deps.openAndProbe()
    } catch (e2) {
      deps.log('repair_failed', e2 instanceof Error ? e2.message : String(e2))
      throw new Error(CONTENT_DB_REPAIR_FAILED_MESSAGE)
    }
  }
}

/**
 * Open the services-owned user.db connection. ALWAYS useNewConnection: the
 * pool's fast-refresh cache is exactly what turned one GC'd throwaway wrapper
 * into a process-wide zombie on 2026-07-16 (full mechanics at liveUserHandle).
 * A private connection has exactly one JS wrapper — held here for the build's
 * lifetime — so GC can never close it under us, and a poisoned pool entry
 * left behind by older code can never be handed back to us (the Kotlin
 * constructor cache is skipped entirely for useNewConnection opens).
 * One retry for transient I/O; then the calm message. user.db is NEVER
 * deleted here — a failed open must not cost SRS progress.
 */
function openUserDb(): SQLiteDatabase {
  const openOnce = (): SQLiteDatabase => {
    const db = openDatabaseSync('user.db', { useNewConnection: true })
    // track BEFORE the pragma: a failing pragma must still leave the handle
    // closable by the retry / the next build
    liveUserHandle = db
    db.execSync('PRAGMA journal_mode = WAL')
    return db
  }
  try {
    return openOnce()
  } catch (e) {
    postRecoveryLog(null, 'userdb_selfheal', 'reopen_after_open_failure',
      e instanceof Error ? e.message : String(e))
    closeLiveUserHandle()
    try {
      return openOnce()
    } catch (e2) {
      postRecoveryLog(null, 'userdb_selfheal', 'unrecoverable',
        e2 instanceof Error ? e2.message : String(e2))
      closeLiveUserHandle()
      throw new Error(USER_DB_ERROR_MESSAGE)
    }
  }
}

async function build(): Promise<Services> {
  // a previous build's handles (failed init retry, or rebuild after
  // resetServices) must be closed FIRST: content.db because deleteDatabaseSync
  // refuses to delete a database with a cached open connection, user.db so a
  // rebuild never accumulates native connections
  closeLiveUserHandle()
  const userSql = openUserDb()
  const userDriver = expoDriver(userSql)
  const userDb = new UserDB(userDriver)
  try {
    userDb.migrate()
  } catch (e) {
    // migration failure ≠ license to delete: user.db holds the SRS progress.
    // Surface calm; the raw error goes to the dashboard for the next session.
    postRecoveryLog(null, 'userdb_selfheal', 'migrate_failed',
      e instanceof Error ? e.message : String(e))
    throw new Error(USER_DB_ERROR_MESSAGE)
  }

  closeLiveContentHandle()
  try {
    await provisionContentDb(userDb)
  } catch (e) {
    // provisioning may fail transiently (asset resolve, disk). If an OLD but
    // openable content.db is still in place, a stale corpus beats a brick —
    // let the open below decide; if there is no usable file, the self-heal
    // wrapper re-runs provisioning and only then errors (calmly).
    postRecoveryLog(userDb, 'contentdb_selfheal', 'provision_failed_continuing',
      e instanceof Error ? e.message : String(e))
  }

  // useNewConnection is load-bearing, not an optimization: expo-sqlite's
  // Android pool (SQLiteModule.cachedDatabases) keeps a NativeDatabase entry
  // alive even after its JS wrapper is GC'd — sharedObjectDidRelease() frees
  // the native binding but nothing evicts the pool entry — and even after the
  // file underneath was deleted/replaced by provisioning. A default open
  // returns that dead entry by name and every statement dies with
  // "NativeDatabase.prepareSync ... java.lang.NullPointerException" (hit
  // on-device 2026-07-14, first launch after the median_line_chars corpus
  // update). A forced-fresh connection can never be the poisoned one.
  //
  // 2026-07-16 hardening: an unopenable/corrupt/missing content.db no longer
  // throws "press play again to repair" — it self-heals IN PLACE (quarantine
  // → re-copy from the bundled asset → reopen) and only a second failure
  // surfaces, calmly. Boot must never brick over a disposable file.
  const contentSql = await openContentWithSelfHeal({
    openAndProbe: () => {
      const rawContent = openDatabaseSync('content.db', { useNewConnection: true })
      liveContentHandle = rawContent
      const sql = expoDriver(rawContent)
      // sanity-probe the copy: a corrupt/empty file (crashed copy in an
      // earlier run) throws here and triggers the quarantine+recopy path
      sql.get('SELECT COUNT(*) AS n FROM words')
      return sql
    },
    quarantine: () => {
      // close through the pool FIRST so deleteContentDbFiles can remove the
      // file via deleteDatabaseSync instead of the raw-delete fallback
      closeLiveContentHandle()
      deleteContentDbFiles()
      userDb.setKV('content_db_hash', '')
    },
    reprovision: () => provisionContentDb(userDb),
    log: (reason, detail) => postRecoveryLog(userDb, 'contentdb_selfheal', reason, detail),
  })
  const content = new ContentDb(contentSql, () => userDb.lastPlayedMap())

  const lanUrl = userDb.getKV('lan_base_url') ?? DEFAULT_LAN_URL
  // resolution order: unpacked cache (BundleManager.has) → downloaded packs in
  // app-internal storage → external sideload dir → LAN → starter pack
  const sources = []
  sources.push(documentLibrarySource())
  if (Platform.OS === 'android') sources.push(deviceLibrarySource(ANDROID_LIBRARY_DIR))
  sources.push(lanSource(lanUrl))
  sources.push(starterSource(STARTER_BUNDLES, async (mod) => {
    const a = Asset.fromModule(mod)
    await a.downloadAsync()
    return a.localUri
  }))
  const bundles = new BundleManager(sources)

  const scheduler = new Scheduler()
  const settings = loadSettings(userDb)
  const recorder = new SessionRecorder(
    userDb, scheduler, content.learnableSet(), settings,
    // comprehensible-input tracking: conv membership + ratio denominators
    (wordId: number) => content.convsOf(wordId),
    content.wordCounts(),
  )

  return { userDb, userDriver, content, bundles, scheduler, recorder, settings }
}

// ---- content.db provisioning ----

function dbDirectory(): Directory {
  // defaultDatabaseDirectory is a RAW native path (/data/user/0/...), not a
  // file:// URI — expo-file-system's Directory requires an absolute URI and
  // crashes with "URI is not absolute" otherwise (hit on-device 2026-07-10).
  const raw = String(defaultDatabaseDirectory)
  return new Directory(raw.startsWith('file:') ? raw : `file://${raw}`)
}

function contentFileIn(dir: Directory): File {
  return new File(dir, 'content.db')
}

/**
 * True when deleteDatabaseSync failed only because there was nothing to
 * delete — success for a "make sure it's gone" caller. Message shape verified
 * against expo-sqlite 56's android SQLExceptions.kt:
 * DatabaseNotFoundException → "Database '<path>' not found".
 * (The other delete failure, DeleteDatabaseException, says "currently open"
 * and must NOT match: it means a live pool handle is blocking the delete.)
 */
export function isDatabaseNotFoundError(message: string): boolean {
  return /\bnot found\b/i.test(message)
}

/**
 * Remove content.db (and any journal sidecars) so a fresh copy can be
 * provisioned. Goes through expo-sqlite's deleteDatabaseSync — unlike a raw
 * File.delete it keeps the native connection pool consistent (it refuses
 * while a cached handle exists instead of yanking the file out from under
 * it). When the pool DOES refuse — a stale handle we cannot reach, e.g. one
 * whose JS wrapper was GC'd — we fall back to a raw delete; that is safe
 * only because build() opens content.db with useNewConnection afterwards.
 */
function deleteContentDbFiles(): void {
  try {
    deleteDatabaseSync('content.db')
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    if (!isDatabaseNotFoundError(msg)) {
      try {
        const f = contentFileIn(dbDirectory())
        if (f.exists) f.delete()
      } catch { /* copy() below overwrites, and validation repairs next launch */ }
    }
  }
  // deleteDatabaseSync only removes the main file; a -wal/-shm/-journal
  // sidecar surviving from an interrupted earlier run must never pair with a
  // freshly copied main file (SQLite would try to recover the stale journal)
  const dir = dbDirectory()
  for (const suffix of ['-wal', '-shm', '-journal']) {
    try {
      const sidecar = new File(dir, `content.db${suffix}`)
      if (sidecar.exists) sidecar.delete()
    } catch { /* best effort */ }
  }
}

/** staging name for the atomic provision copy — same dir as content.db so the
 *  final move is a same-filesystem rename, not a second slow copy */
export const CONTENT_TMP_NAME = 'content.db.tmp'

/** Pure re-provision decision (unit-tested): keep the on-device copy only
 *  when the file exists AND its stamped hash matches the shipped asset. */
export function shouldReprovisionContent(
  fileExists: boolean, storedHash: string | undefined, wantHash: string,
): boolean {
  return !(fileExists && storedHash === wantHash)
}

/**
 * Copy the bundled content.db into the SQLite directory. Stamped with the
 * Metro asset hash so an app update shipping a regenerated corpus replaces
 * the on-device copy (copy-if-missing alone would freeze the first install's
 * corpus forever).
 *
 * ATOMIC (2026-07-16): the multi-second copy lands under CONTENT_TMP_NAME and
 * is renamed into place only when complete, so a process killed mid-copy can
 * never leave half-written bytes under the content.db name. Kill windows:
 *   - during the copy → old content.db untouched, stale tmp cleaned next run
 *   - between delete and rename → no content.db; next launch re-provisions
 *   - before the hash stamp → hash mismatch; next launch re-provisions
 * A rename that "completes" onto corrupt source bytes is still caught by
 * build()'s validation probe, which quarantines and re-copies automatically.
 */
async function provisionContentDb(userDb: UserDB): Promise<void> {
  const asset = Asset.fromModule(require('../../assets/content.db'))
  const wantHash = String(asset.hash ?? 'unhashed')
  const dbDir = dbDirectory()
  if (!dbDir.exists) dbDir.create({ intermediates: true })
  const contentFile = contentFileIn(dbDir)

  if (!shouldReprovisionContent(
    contentFile.exists, userDb.getKV('content_db_hash'), wantHash)) return

  await asset.downloadAsync()
  if (!asset.localUri) throw new Error('content.db asset failed to resolve')
  // File.copy/File.move are ASYNC in SDK 56 — unawaited, openDatabaseSync
  // would race them and materialize an empty content.db first ("no such
  // table: words"). overwrite: belt-and-braces if a stale tmp delete failed.
  const tmpFile = new File(dbDir, CONTENT_TMP_NAME)
  try { if (tmpFile.exists) tmpFile.delete() } catch { /* overwrite below */ }
  await new File(asset.localUri).copy(tmpFile, { overwrite: true })
  deleteContentDbFiles()
  await tmpFile.move(contentFile, { overwrite: true })
  userDb.setKV('content_db_hash', wantHash)
}

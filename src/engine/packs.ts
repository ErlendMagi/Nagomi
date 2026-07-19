// Offline pack downloader (M9, pulled forward 2026-07-10: user wants ~10k
// words of conversations stored locally). Downloads bundle ZIPs over the LAN
// into the app-INTERNAL library dir (Paths.document/bundles — always writable,
// never cache-evicted, survives until uninstall; switched 2026-07-14 after
// external-dir writes failed on the Bigme even though reads work). The
// external sideload dir stays a read-only sibling: resume and storedCount()
// treat files already present in EITHER library as stored, so a previously
// sideloaded pack is never re-downloaded.
//
// Module-level singleton: Settings starts/observes it; it keeps running while
// the app stays in the foreground even if the user leaves the screen.
//
// Reliability (hardened 2026-07-13 after an on-device pack failure with no
// diagnostics):
//   - preflight: ${base}/status.json with an 8s timeout, so "PC unreachable"
//     is a clear message instead of a hung run
//   - free-space guard: before any download, the bytes still missing (from the
//     server index — real numbers, not the table estimate) ×1.1 must fit in
//     Paths.availableDiskSpace, else the run fails with an honest message
//   - write fallback: downloadFileAsync streams straight into the library dir;
//     the first non-HTTP failure switches the run to downloading into
//     Paths.cache and moving the file over. Both dirs are internal now, so
//     this path should stay cold — kept as a belt-and-braces fallback.
//   - diagnostics: each file failure is POSTed to ${base}/applog (same shape
//     as useSession's appLog), capped at MAX_ERROR_POSTS per run
//   - stall watchdog: no file completing for STALL_MS aborts the run with
//     Doze/foreground guidance
//   - retries: proper Map<convId, attempts> counter, MAX_ATTEMPTS_PER_FILE

import { File, Directory, Paths } from 'expo-file-system'
import { initServices, resetServices, ANDROID_LIBRARY_DIR, DEFAULT_LAN_URL } from './services'
import { documentLibraryDir, type BundleIndexEntry } from './bundles'

/**
 * Word-coverage → conversation-count table in 1,000-word steps, computed from
 * content.db (cumulative distinct learnable words over the ord walk).
 * Regenerate with scripts/app_pipeline/gen_pack_table (see scratch coverage
 * script) whenever the corpus changes.
 *
 * The last row is the TRUE full corpus: 19,395 distinct learnable words across
 * all 11,240 conversations (a measuring bug previously capped the table at
 * 15k). Its `words` value is deliberately off-step — it is the end stop, not
 * a 1,000-word rung.
 */
export const PACK_STEPS = [
  { words: 1000, convCount: 62, gb: 0.05 },
  { words: 2000, convCount: 212, gb: 0.19 },
  { words: 3000, convCount: 494, gb: 0.43 },
  { words: 4000, convCount: 1564, gb: 1.04 },
  { words: 5000, convCount: 2302, gb: 1.42 },
  { words: 6000, convCount: 2795, gb: 1.72 },
  { words: 7000, convCount: 3331, gb: 2.04 },
  { words: 8000, convCount: 3566, gb: 2.26 },
  { words: 9000, convCount: 3970, gb: 2.75 },
  { words: 10000, convCount: 4271, gb: 3.14 },
  { words: 11000, convCount: 4561, gb: 3.53 },
  { words: 12000, convCount: 4896, gb: 3.98 },
  { words: 13000, convCount: 5271, gb: 4.48 },
  { words: 14000, convCount: 7016, gb: 6.03 },
  { words: 15000, convCount: 8486, gb: 8.01 },
  { words: 16000, convCount: 9066, gb: 8.53 },
  { words: 17000, convCount: 9676, gb: 9.08 },
  { words: 18000, convCount: 10281, gb: 9.63 },
  { words: 19000, convCount: 10881, gb: 10.23 },
  { words: 19395, convCount: 11240, gb: 10.59 },
] as const

/** requests at or above this many words mean "give me everything" */
export const FULL_PACK_MIN_WORDS = 19_000

/**
 * Largest step that doesn't exceed the request (the slider only produces
 * exact step values; a non-step value must never silently select the
 * maximum pack, which the old exact-match-or-last lookup did).
 *
 * Exception at the top: ≥ FULL_PACK_MIN_WORDS returns the FULL pack. The
 * slider's snap math (min 1,000, step 1,000) can never land on the off-step
 * 19,395 end stop — 19,000 is the largest reachable value, and at that point
 * the honest answer is the whole corpus, not 359 conversations short of it.
 */
export function packForWords(words: number): (typeof PACK_STEPS)[number] {
  if (words >= FULL_PACK_MIN_WORDS) return PACK_STEPS[PACK_STEPS.length - 1]
  let best: (typeof PACK_STEPS)[number] = PACK_STEPS[0]
  for (const p of PACK_STEPS) if (p.words <= words) best = p
  return best
}

// ---- pure planning/retry helpers (unit-tested; the network paths are not,
// see __tests__/packs.test.ts header) ----

/** total attempts a single file gets before it's marked failed for the run */
export const MAX_ATTEMPTS_PER_FILE = 2
/** abort the run when no file completes for this long (Doze / dead Wi-Fi) */
export const STALL_MS = 60_000
/** hard per-file timeout — a single download may never hold a worker longer
 *  (user 2026-07-16: runs froze at "0 of X" forever; see fetchOne) */
export const FILE_TIMEOUT_MS = 45_000
/** at most this many pack_file_error posts to the dev server per run */
export const MAX_ERROR_POSTS = 10
/** below this many total files, emit progress on every file; else every 10th */
export const PROGRESS_EVERY = 10

export const STALL_MESSAGE =
  'Download stalled — nothing finished for 60 seconds. Keep the screen on and '
  + 'the app in the foreground during download, and stay on home Wi-Fi.'

/**
 * Shown when the run's db phase dies before the first download even after a
 * full services rebuild. Seen 2026-07-14 ("NativeDatabase.prepareSync ...
 * NullPointerException": stale pool handle after the corpus update replaced
 * content.db) and again 2026-07-16 (the FIRST getKV of the run hit a pool
 * zombie killed by GC of GoalPlanner's throwaway user.db wrapper — before
 * preflight, so telemetry showed no pack_* events at all). Both root causes
 * are fixed in services.ts (private useNewConnection handles + boot
 * self-heal); start() additionally retries ONCE through resetServices() so a
 * poisoned handle costs one rebuild, not the run. This message is the honest
 * last line of defense. Raw exceptions go to ${base}/applog as
 * 'pack_start_error'.
 */
export const PACK_START_ERROR_MESSAGE =
  'Storage hiccup after the update — fully close and reopen the app, '
  + 'then try again.'

/** join the LAN base url and a server path, tolerating stray slashes */
export function packUrl(base: string, path: string): string {
  return `${base.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`
}

export function preflightFailMessage(base: string): string {
  return `Can't reach the PC at ${base} — same Wi-Fi? PC on?`
}

export function failedRunMessage(failedCount: number, total: number): string {
  return `${failedCount} of ${total} files failed to download — press `
    + `"Download to phone" again to retry just those.`
}

/** may this file be queued again after `attemptsUsed` failed attempts? */
export function shouldRetry(attemptsUsed: number): boolean {
  return attemptsUsed < MAX_ATTEMPTS_PER_FILE
}

/** every file below 100 total (small packs feel dead at every-10), else every 10th + the last */
export function shouldEmitProgress(done: number, total: number): boolean {
  if (total < 100) return true
  return done % PROGRESS_EVERY === 0 || done === total
}

export function isStalled(lastProgressAt: number, now: number): boolean {
  return now - lastProgressAt > STALL_MS
}

/**
 * expo-file-system's Android UnableToDownloadException carries
 * "response has status: NNN" for non-2xx responses (verified against the
 * SDK 56 Kotlin source). Those failures are server-side — retrying through
 * the cache-tmp write path can't fix them, so the fallback probe is skipped.
 */
export function isHttpStatusFailure(message: string): boolean {
  return /response has status: \d+/.test(message)
}

/** free space must cover the missing bytes plus this safety factor */
export const SPACE_HEADROOM = 1.1

/** does the device have room for `neededBytes` more download, with headroom? */
export function hasEnoughSpace(neededBytes: number, availableBytes: number): boolean {
  return availableBytes >= neededBytes * SPACE_HEADROOM
}

export function lowSpaceMessage(neededBytes: number, availableBytes: number): string {
  const need = (neededBytes * SPACE_HEADROOM / 1e9).toFixed(1)
  const have = (availableBytes / 1e9).toFixed(1)
  return `Not enough space — this download needs about ${need} GB free `
    + `(including a safety margin) but the phone has ${have} GB. `
    + `Free up space or choose a smaller pack.`
}

/**
 * Conversation id from a bundle file name. Bundles are named
 * `<convId>-<sha256[0..8]>.zip` (scripts/app_pipeline/build_bundles.mjs);
 * a .zip without the 8-hex suffix still counts, keyed by its base name, so a
 * hand-copied file is never silently dropped from the stored count.
 * Non-.zip files (e.g. stray .tmp) return null.
 */
export function zipConvId(fileName: string): string | null {
  if (!fileName.endsWith('.zip')) return null
  const m = /^(.+)-[0-9a-f]{8}\.zip$/i.exec(fileName)
  return m ? m[1] : fileName.slice(0, -'.zip'.length)
}

/**
 * Distinct conversations across the library dirs (internal + external
 * sideload). The same conversation may exist in both — possibly under
 * different content hashes after a corpus rebuild — and must count once.
 */
export function uniqueStoredConvCount(fileNameLists: string[][]): number {
  const ids = new Set<string>()
  for (const names of fileNameLists) {
    for (const name of names) {
      const id = zipConvId(name)
      if (id !== null) ids.add(id)
    }
  }
  return ids.size
}

export interface PackProgress {
  state: 'idle' | 'running' | 'done' | 'error' | 'cancelled'
  targetWords: number | null
  done: number
  total: number
  bytesDone: number
  error: string | null
  /** conversations currently stored in the library dir (refreshed on tick) */
  storedCount: number
  /** files that exhausted their attempts this run (optional; new 2026-07-13) */
  failed?: number
}

type Listener = (p: PackProgress) => void

const CONCURRENCY = 2
const PREFLIGHT_TIMEOUT_MS = 8_000

/** AbortSignal.timeout with the same availability guard bundles.ts uses */
function timeoutSignal(ms: number): AbortSignal | undefined {
  return typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal
    ? AbortSignal.timeout(ms)
    : undefined
}

/** fire-and-forget POST to ${base}/applog (same body shape as useSession's
 *  appLog) — the dashboard is how on-device failures become diagnosable */
function postAppLog(base: string, body: Record<string, unknown>): void {
  try {
    void fetch(packUrl(base, 'applog'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ t: new Date().toISOString(), ...body }),
    }).catch(() => {})
  } catch { /* fire-and-forget */ }
}

/** .zip file names in a library dir ([] when missing/unreadable) */
function listZipNames(dir: Directory): string[] {
  try {
    if (!dir.exists) return []
    return dir.list()
      .filter((f): f is File => f instanceof File && f.name.endsWith('.zip'))
      .map(f => f.name)
  } catch { return [] }
}

/** Paths.availableDiskSpace, or null when the native getter is unavailable */
function availableDiskSpaceSafe(): number | null {
  try {
    const n = Paths.availableDiskSpace
    return Number.isFinite(n) ? n : null
  } catch { return null }
}

class PackDownloader {
  private progress: PackProgress = {
    state: 'idle', targetWords: null, done: 0, total: 0, bytesDone: 0, error: null, storedCount: 0,
  }
  private listeners = new Set<Listener>()
  private cancelRequested = false
  private runController: AbortController | null = null

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn)
    fn(this.progress)
    return () => this.listeners.delete(fn)
  }

  private emit(patch: Partial<PackProgress>): void {
    this.progress = { ...this.progress, ...patch }
    for (const fn of this.listeners) fn(this.progress)
  }

  current(): PackProgress { return this.progress }

  cancel(): void {
    this.cancelRequested = true
    // abort the in-flight downloads too — resume is free, waiting is not
    this.runController?.abort()
  }

  /**
   * Distinct conversations stored across BOTH library dirs — downloaded packs
   * in internal storage plus the external sideload dir (still readable even on
   * devices where writing it fails). Deduped by conv id, not file name.
   */
  storedCount(): number {
    return uniqueStoredConvCount([
      listZipNames(documentLibraryDir()),
      listZipNames(new Directory(ANDROID_LIBRARY_DIR)),
    ])
  }

  async start(targetWords: number): Promise<void> {
    if (this.progress.state === 'running') return
    this.cancelRequested = false
    const pack = packForWords(targetWords)
    this.emit({
      state: 'running', targetWords: pack.words, done: 0, total: pack.convCount,
      bytesDone: 0, error: null, failed: 0,
    })

    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null
    this.runController = controller
    let watchdog: ReturnType<typeof setInterval> | null = null

    try {
      let svc = await initServices()

      // the FIRST db touch of the run. On 2026-07-16 this getKV died with
      // "NativeDatabase.prepareSync ... NullPointerException" (pool zombie —
      // see services.ts liveUserHandle) BEFORE preflight, so the run produced
      // zero pack_* telemetry. Any db-layer failure here now gets ONE full
      // services rebuild — build() opens fresh private native connections —
      // before giving up with the calm message.
      let base: string
      try {
        base = svc.userDb.getKV('lan_base_url') ?? DEFAULT_LAN_URL
      } catch (e) {
        const raw = e instanceof Error ? e.message : String(e)
        resetServices()
        try {
          svc = await initServices()
          base = svc.userDb.getKV('lan_base_url') ?? DEFAULT_LAN_URL
        } catch {
          // even the rebuild failed — best-effort post to the default base so
          // the failure is at least visible on the dashboard
          postAppLog(DEFAULT_LAN_URL, { event: 'pack_start_error', message: raw })
          throw new Error(PACK_START_ERROR_MESSAGE)
        }
        postAppLog(base, { event: 'pack_start_error', message: `recovered by services rebuild: ${raw}` })
      }

      // preflight: fail in 8s with a human message instead of hanging on the
      // first download when the PC is off / on another network
      await this.preflight(base)
      postAppLog(base, { event: 'pack_phase', phase: 'preflight_ok' })

      const res = await fetch(packUrl(base, 'bundles_index.json'), { signal: timeoutSignal(PREFLIGHT_TIMEOUT_MS) })
      if (!res.ok) throw new Error(`index fetch failed (${res.status}) — is the PC on?`)
      const index: Record<string, BundleIndexEntry> = (await res.json()).bundles

      // index preparation: the first content.db query of the run. If the db
      // layer is broken (e.g. the 2026-07-14 stale-pool-handle NPE) the raw
      // exception is useless to the user — post the real one to the dashboard,
      // then retry ONCE through a services rebuild (which self-heals a broken
      // content.db by quarantine + re-copy, see services.ts) before surfacing
      // the human message.
      let ids: string[]
      try {
        ids = svc.content.firstNConvIds(pack.convCount)
      } catch (e) {
        const raw = e instanceof Error ? e.message : String(e)
        postAppLog(base, { event: 'pack_start_error', message: raw })
        resetServices()
        try {
          svc = await initServices()
          ids = svc.content.firstNConvIds(pack.convCount)
        } catch {
          throw new Error(PACK_START_ERROR_MESSAGE)
        }
        postAppLog(base, { event: 'pack_start_error', message: `recovered by services rebuild: ${raw}` })
      }
      const total = ids.length // may be < convCount if the corpus shrank
      this.emit({ total })
      const dir = documentLibraryDir()
      if (!dir.exists) dir.create({ intermediates: true })
      postAppLog(base, { event: 'pack_phase', phase: 'index_ok', total })
      // yield so the "0 of N" frame paints before the directory scans
      await new Promise(r => setTimeout(r, 0))

      // RESUME SCAN — NAMES ONLY (user 2026-07-16 "completely frozen" on the
      // fixed .8 downloader, still zero telemetry: the freeze was HERE all
      // along, before the first post). The old scan stat'ed a size for every
      // file — ~2,800 sideloaded zips × one native call each on the Bigme's
      // slow external storage, synchronously on the JS thread = the whole app
      // frozen for minutes. Names are ONE list() call per dir, and they are
      // sufficient: bundle names carry the content hash (<convId>-<sha8>.zip),
      // so a name match IS a content match. Partial files from an interrupted
      // DOWNLOAD only ever live in the internal dir — those get a single
      // cheap per-file size check inside the worker, spread across the run.
      const docNames = new Set(listZipNames(dir))
      const extNames = new Set(listZipNames(new Directory(ANDROID_LIBRARY_DIR)))
      const alreadyStored = (entry: BundleIndexEntry): boolean =>
        docNames.has(entry.file) || extNames.has(entry.file)
      // verify internal-dir hits lazily (partial-write guard); external
      // sideloads are trusted by name+hash — adb pushed them complete
      const storedAndComplete = (entry: BundleIndexEntry): boolean => {
        if (extNames.has(entry.file)) return true
        if (!docNames.has(entry.file)) return false
        try { return new File(dir, entry.file).size === entry.bytes } catch { return true }
      }
      postAppLog(base, { event: 'pack_phase', phase: 'scan_ok', doc: docNames.size, ext: extNames.size })
      await new Promise(r => setTimeout(r, 0))

      // free-space guard: sum the bytes actually missing (index numbers, not
      // the table estimate — resuming a nearly-done pack must not demand the
      // full 10 GB) and fail honestly before the first download if the disk
      // can't hold them with headroom
      let missingBytes = 0
      for (const convId of ids) {
        const entry = index[convId]
        if (entry && !alreadyStored(entry)) missingBytes += entry.bytes
      }
      const free = availableDiskSpaceSafe()
      if (free !== null && !hasEnoughSpace(missingBytes, free)) {
        throw new Error(lowSpaceMessage(missingBytes, free))
      }

      // run telemetry (2026-07-16: three downloader failures in a row were
      // diagnosed blind because nothing marked a run's start — every future
      // run announces itself and reports how it ended)
      postAppLog(base, {
        event: 'pack_run_start', total, missingBytes, targetWords: pack.words,
      })

      let done = 0
      let bytesDone = 0
      let errorPosts = 0
      let useTmpRoute = false // sticky once the fallback write path succeeds
      let stalled = false
      let lastProgressAt = Date.now()
      const attempts = new Map<string, number>() // convId → failed attempts
      const failed = new Set<string>()
      const queue = [...ids]
      // live stored ticker WITHOUT re-listing the library dirs every 10 files
      // (a mid-run directory scan is the same freeze class as the resume scan)
      const storedAtScan = uniqueStoredConvCount([[...docNames], [...extNames]])
      let newlyDownloaded = 0

      watchdog = setInterval(() => {
        if (stalled || this.cancelRequested) return
        if (isStalled(lastProgressAt, Date.now())) {
          stalled = true
          controller?.abort() // unblocks workers stuck inside downloadFileAsync
        }
      }, 5_000)

      // first-failure diagnostics: the dashboard shows WHY, capped per run
      const postError = (convId: string, message: string): void => {
        if (errorPosts >= MAX_ERROR_POSTS) return
        errorPosts++
        postAppLog(base, { event: 'pack_file_error', convId, message })
      }

      const completeFile = (): void => {
        done++
        lastProgressAt = Date.now()
        if (shouldEmitProgress(done, total)) {
          this.emit({ done, bytesDone, failed: failed.size, storedCount: storedAtScan + newlyDownloaded })
        }
      }

      // GC breather: every ~100 downloaded files, pause both workers briefly
      // so Hermes can finalize whatever slack remains (belt-and-braces beside
      // the deterministic blob.close() in fetchOne — a multi-thousand-file
      // run must never race the collector)
      const maybeBreathe = async (): Promise<void> => {
        if (newlyDownloaded > 0 && newlyDownloaded % 100 === 0) {
          await new Promise(r => setTimeout(r, 250))
        }
      }

      const worker = async (): Promise<void> => {
        for (;;) {
          if (this.cancelRequested || stalled) return
          const convId = queue.shift()
          if (!convId) return
          const entry = index[convId]
          if (!entry) { completeFile(); continue }
          if (storedAndComplete(entry)) { completeFile(); continue }
          try {
            bytesDone += await this.fetchOne(base, dir, entry, controller?.signal, useTmpRoute)
            newlyDownloaded++
            await maybeBreathe()
          } catch (e) {
            if (this.cancelRequested || stalled) return
            let err = e
            // direct library-dir write failed and it wasn't the server
            // saying no → probe the cache-tmp route on this same file; if it
            // works, keep it for the rest of the run
            const directMsg = err instanceof Error ? err.message : String(err)
            if (!useTmpRoute && !isHttpStatusFailure(directMsg)) {
              try {
                bytesDone += await this.fetchOne(base, dir, entry, controller?.signal, true)
                useTmpRoute = true
                postError(convId, `direct write failed (${directMsg}) — switched to cache-tmp route`)
                completeFile()
                continue
              } catch (e2) {
                if (this.cancelRequested || stalled) return
                err = e2
              }
            }
            const msg = err instanceof Error ? err.message : String(err)
            postError(convId, `${msg} (attempt ${(attempts.get(convId) ?? 0) + 1}/${MAX_ATTEMPTS_PER_FILE}, file ${entry.file})`)
            const used = (attempts.get(convId) ?? 0) + 1
            attempts.set(convId, used)
            if (shouldRetry(used)) { queue.push(convId); continue }
            failed.add(convId)
          }
          completeFile()
        }
      }
      await Promise.all(Array.from({ length: CONCURRENCY }, worker))

      if (this.cancelRequested) {
        postAppLog(base, { event: 'pack_run_end', state: 'cancelled', done, failed: failed.size })
        this.emit({ state: 'cancelled', done, bytesDone, failed: failed.size, storedCount: this.storedCount() })
        return
      }
      if (stalled) {
        postAppLog(base, { event: 'pack_run_end', state: 'stalled', done, failed: failed.size })
        throw new Error(STALL_MESSAGE)
      }
      if (failed.size > 0) {
        postAppLog(base, { event: 'pack_run_end', state: 'failed_files', done, failed: failed.size })
        throw new Error(failedRunMessage(failed.size, total))
      }
      postAppLog(base, { event: 'pack_run_end', state: 'done', done, bytesDone })
      this.emit({ state: 'done', done, bytesDone, storedCount: this.storedCount() })
    } catch (e) {
      this.emit({
        state: 'error',
        error: e instanceof Error ? e.message : String(e),
        storedCount: this.storedCount(),
      })
    } finally {
      if (watchdog !== null) clearInterval(watchdog)
      this.runController = null
    }
  }

  /** GET ${base}/status.json; throws a human-readable Error when unreachable */
  private async preflight(base: string): Promise<void> {
    let ok = false
    try {
      const res = await fetch(packUrl(base, 'status.json'), { signal: timeoutSignal(PREFLIGHT_TIMEOUT_MS) })
      ok = res.ok
    } catch {
      throw new Error(preflightFailMessage(base))
    }
    if (!ok) throw new Error(preflightFailMessage(base))
  }

  /**
   * Download one bundle zip and land it in the library dir. Returns the bytes
   * added; throws on any failure (caller owns retry/fallback policy).
   *
   * ENGINE CHANGE (user 2026-07-16: "It just freezes at 0 of x conversations
   * downloaded" — the THIRD downloader failure on this device): the native
   * File.downloadFileAsync hung forever on the Bigme, never resolving, never
   * throwing, and IGNORING the stall-watchdog's AbortSignal — both workers
   * blocked on their first file and the run could neither finish nor fail
   * (zero pack_* telemetry: nothing ever completed or errored). Rewritten on
   * plain fetch → bytes → File.write: the exact network stack that PROVABLY
   * works on this device (appLog POSTs and the bundle-index fetch use it),
   * raced against a manual per-file AbortController timeout, so a worker can
   * never hold a file longer than FILE_TIMEOUT_MS no matter what the
   * platform does. Bundles average ~1 MB (10.6 GB / 11,240) — buffering one
   * per worker (2 workers) is nothing.
   *
   * viaTmp=true writes into Paths.cache then moves (await — File.move is
   * ASYNC in SDK 56); kept as the belt-and-braces write fallback.
   */
  private async fetchOne(
    base: string,
    dir: Directory,
    entry: BundleIndexEntry,
    runSignal: AbortSignal | undefined,
    viaTmp: boolean,
  ): Promise<number> {
    const url = packUrl(base, `bundles/${entry.file}`)
    const dest = new File(dir, entry.file)

    // per-file controller: fires on the RUN's abort (cancel / stall watchdog)
    // or the hard per-file timeout — whichever comes first
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null
    const onRunAbort = () => controller?.abort()
    runSignal?.addEventListener?.('abort', onRunAbort)
    const killer = setTimeout(() => controller?.abort(), FILE_TIMEOUT_MS)
    try {
      const res = await fetch(url, controller ? { signal: controller.signal } : undefined)
      // keep the exact "response has status" shape isHttpStatusFailure matches
      if (!res.ok) throw new Error(`response has status: ${res.status}`)
      // Read via an explicit Blob and CLOSE it (user 2026-07-16: "the app kept
      // crashing after downloading like 150 conversations"): RN's networking
      // parks every binary response in the native BlobModule store, and the
      // entry is only freed when GC finalizes the JS Blob — at 2 workers ×
      // ~1 MB × hundreds of files the store outruns Hermes GC and the process
      // OOMs at almost exactly the ~150-file mark. blob.close() frees the
      // native bytes deterministically, the moment we're done with them.
      const blob = await res.blob()
      let buf: Uint8Array
      try {
        buf = new Uint8Array(await new Response(blob).arrayBuffer())
      } finally {
        try { (blob as unknown as { close?: () => void }).close?.() } catch { /* non-RN blob */ }
      }
      if (buf.byteLength !== entry.bytes) {
        throw new Error(`size mismatch (${buf.byteLength} vs ${entry.bytes})`)
      }
      if (viaTmp) {
        const tmpDir = new Directory(Paths.cache, 'pack-tmp')
        tmpDir.create({ intermediates: true, idempotent: true })
        const tmp = new File(tmpDir, entry.file)
        try { if (tmp.exists) tmp.delete() } catch {}
        tmp.write(buf)
        await tmp.move(dest, { overwrite: true }) // ASYNC — must be awaited
      } else {
        try { if (dest.exists) dest.delete() } catch {}
        dest.write(buf) // same write path the playback unzip uses (proven on-device)
      }
      return entry.bytes
    } catch (e) {
      // never leave a partial file to poison the next run's resume scan
      try { if (dest.exists && dest.size !== entry.bytes) dest.delete() } catch {}
      throw e
    } finally {
      clearTimeout(killer)
      runSignal?.removeEventListener?.('abort', onRunAbort)
    }
  }
}

export const packDownloader = new PackDownloader()

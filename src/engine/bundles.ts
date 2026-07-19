// Bundle manager (M3, locked delivery design): pluggable sources resolved in
// order — (1) on-device sideloaded library, (2) LAN dev server, (3) starter
// pack bundled in the app. R2 slots in later as one more source (Play
// closed-test milestone). Never stream: prefetch-then-play, next 3 + prev 1
// protected, LRU cap 500MB, unpacked into the OS cache directory.

import { File, Directory, Paths } from 'expo-file-system'
import { unzipSync } from 'fflate'
import type { ConvBundleData } from './session'

export interface BundleIndexEntry { file: string, bytes: number, sha256: string }

export interface BundleSource {
  name: string
  /** zip bytes for this conversation, or null if this source doesn't have it */
  fetchZip(convId: string): Promise<Uint8Array | null>
}

export const MAX_CACHE_BYTES = 500 * 1024 * 1024
export const PREFETCH_AHEAD = 3

// ---- sources ----

/**
 * The app-internal pack library: Paths.document/bundles. Always writable
 * (unlike the app-external dir, where WRITES fail on some devices even though
 * reads work — hit on the Bigme 2026-07-13), never cache-evicted, survives
 * until uninstall. The pack downloader (packs.ts) lands files here.
 */
export function documentLibraryDir(): Directory {
  return new Directory(Paths.document, 'bundles')
}

/** scan a library dir for `<convId>-<hash>.zip` and return its bytes */
async function zipFromLibraryDir(dir: Directory, convId: string): Promise<Uint8Array | null> {
  try {
    if (!dir.exists) return null
    for (const item of dir.list()) {
      if (item instanceof File && item.name.startsWith(`${convId}-`) && item.name.endsWith('.zip')) {
        return await item.bytes()
      }
    }
  } catch {}
  return null
}

/**
 * Downloaded pack library in app-internal storage (see documentLibraryDir).
 * Checked before the external sideload dir — works fully offline.
 */
export function documentLibrarySource(): BundleSource {
  return {
    name: 'document-library',
    async fetchZip(convId) {
      return zipFromLibraryDir(documentLibraryDir(), convId)
    },
  }
}

/**
 * Sideloaded library: a folder of `<convId>-<hash>.zip` files pushed to the
 * device (adb push / file manager). Works fully offline.
 */
export function deviceLibrarySource(dirUri: string): BundleSource {
  return {
    name: 'device-library',
    async fetchZip(convId) {
      return zipFromLibraryDir(new Directory(dirUri), convId)
    },
  }
}

/** LAN dev server (the PC): /bundles_index.json + /bundles/<file>.zip */
export function lanSource(baseUrl: string): BundleSource {
  let index: Record<string, BundleIndexEntry> | null = null
  return {
    name: 'lan',
    async fetchZip(convId) {
      try {
        if (!index) {
          // bounded wait: when the PC is unreachable the source chain must
          // fall through to cached/starter bundles quickly, not hang
          const signal = typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal
            ? AbortSignal.timeout(8000) : undefined
          const res = await fetch(`${baseUrl}/bundles_index.json`, { signal })
          if (!res.ok) return null
          index = (await res.json()).bundles ?? null
        }
        const entry = index?.[convId]
        if (!entry) {
          index = null // stale index (bundles are content-hashed) — refetch next time
          return null
        }
        // plain fetch, never File.downloadFileAsync: the native download hangs
        // FOREVER on the Bigme and ignores AbortSignal (it froze the pack
        // downloader at "0 of X", 2026-07-16) — a hang HERE would freeze
        // playback's source chain mid-session. fetch honors the abort, so the
        // chain falls through to cached/starter bundles within 30s worst-case.
        const controller = typeof AbortController !== 'undefined' ? new AbortController() : null
        const killer = setTimeout(() => controller?.abort(), 30_000)
        try {
          const res = await fetch(`${baseUrl}/bundles/${entry.file}`,
            controller ? { signal: controller.signal } : undefined)
          if (!res.ok) return null
          // explicit Blob + close(): RN parks binary responses in the native
          // blob store until GC finalization — the leak that OOM-crashed the
          // pack downloader at ~150 files (2026-07-16); streaming sessions
          // fetch bundles for hours and must release each one deterministically
          const blob = await res.blob()
          let bytes: Uint8Array
          try {
            bytes = new Uint8Array(await new Response(blob).arrayBuffer())
          } finally {
            try { (blob as unknown as { close?: () => void }).close?.() } catch { /* non-RN blob */ }
          }
          if (bytes.byteLength !== entry.bytes) {
            index = null // size mismatch = rebuilt bundle on the server
            return null
          }
          return bytes
        } finally {
          clearTimeout(killer)
        }
      } catch { index = null; return null }
    },
  }
}

/**
 * Starter pack: the first ~20 conversations ship inside the app binary so the
 * first session works with zero setup. `assets` maps convId → require(...)
 * (see assets/starter/starter.ts, generated by the pipeline).
 */
export function starterSource(
  assets: Record<string, number>,
  resolveAssetUri: (moduleId: number) => Promise<string | null>,
): BundleSource {
  return {
    name: 'starter',
    async fetchZip(convId) {
      const mod = assets[convId]
      if (mod === undefined) return null
      try {
        const uri = await resolveAssetUri(mod)
        if (!uri) return null
        return await new File(uri).bytes()
      } catch { return null }
    },
  }
}

// ---- manager ----

interface LruMeta { [convId: string]: { bytes: number, at: number } }

export class BundleManager {
  private root: Directory
  private metaFile: File
  private meta: LruMeta = {}
  /** conv ids the LRU must not evict (current ± prefetch window) */
  protected_: Set<string> = new Set()
  private inflight = new Map<string, Promise<boolean>>()

  constructor(
    private sources: BundleSource[],
    private maxBytes: number = MAX_CACHE_BYTES,
  ) {
    this.root = new Directory(Paths.cache, 'bundles')
    if (!this.root.exists) this.root.create({ intermediates: true })
    this.metaFile = new File(this.root, 'lru.json')
    try {
      if (this.metaFile.exists) this.meta = JSON.parse(this.metaFile.textSync())
    } catch { this.meta = {} }
  }

  private saveMeta(): void {
    try { this.metaFile.write(JSON.stringify(this.meta)) } catch {}
  }

  private convDir(convId: string): Directory {
    return new Directory(this.root, convId)
  }

  /** unpacked and ready to play? */
  has(convId: string): boolean {
    try { return new File(this.convDir(convId), 'lines.json').exists } catch { return false }
  }

  /** file uri for a clip inside an unpacked bundle (null if missing) */
  clipUri(convId: string, clip: string): string | null {
    const f = new File(this.convDir(convId), clip)
    return f.exists ? f.uri : null
  }

  hasClip(convId: string, clip: string): boolean {
    return this.clipUri(convId, clip) !== null
  }

  async linesData(convId: string): Promise<ConvBundleData> {
    const text = await new File(this.convDir(convId), 'lines.json').text()
    return JSON.parse(text)
  }

  /** mark current playback neighborhood as unevictable */
  protect(convIds: string[]): void {
    this.protected_ = new Set(convIds)
  }

  /**
   * Make sure a bundle is unpacked locally; resolves true when playable.
   * Concurrent calls for the same conv share one download.
   */
  ensure(convId: string): Promise<boolean> {
    if (this.has(convId)) {
      this.touch(convId)
      return Promise.resolve(true)
    }
    let p = this.inflight.get(convId)
    if (!p) {
      p = this.fetchAndUnpack(convId).finally(() => this.inflight.delete(convId))
      this.inflight.set(convId, p)
    }
    return p
  }

  private async fetchAndUnpack(convId: string): Promise<boolean> {
    for (const source of this.sources) {
      let zip: Uint8Array | null = null
      try { zip = await source.fetchZip(convId) } catch { zip = null }
      if (!zip) continue
      try {
        const entries = unzipSync(zip) // STORE zips — cheap
        const dir = this.convDir(convId)
        if (!dir.exists) dir.create({ intermediates: true })
        let bytes = 0
        // lines.json is written LAST: has() keys on it, so an unpack that dies
        // mid-way is invisible and gets re-fetched instead of playing partial
        let linesData: Uint8Array | null = null
        for (const [name, data] of Object.entries(entries)) {
          if (name.includes('/') || name.includes('\\')) continue // flat bundles only
          if (name === 'lines.json') { linesData = data; continue }
          new File(dir, name).write(data)
          bytes += data.byteLength
        }
        if (!linesData) throw new Error('bundle missing lines.json')
        new File(dir, 'lines.json').write(linesData)
        bytes += linesData.byteLength
        this.meta[convId] = { bytes, at: Date.now() }
        this.saveMeta()
        this.evictIfNeeded()
        return true
      } catch {
        try { this.convDir(convId).delete() } catch {}
      }
    }
    return false
  }

  private touch(convId: string): void {
    const m = this.meta[convId]
    if (m) { m.at = Date.now(); this.saveMeta() }
  }

  /** fire-and-forget prefetch of upcoming conversations (sequential, quiet) */
  prefetch(convIds: string[]): void {
    void (async () => {
      for (const id of convIds) {
        try { await this.ensure(id) } catch {}
      }
    })()
  }

  totalBytes(): number {
    return Object.values(this.meta).reduce((a, m) => a + m.bytes, 0)
  }

  /** conv ids playable right now from local storage, most recently used first */
  listCached(): string[] {
    return Object.entries(this.meta)
      .sort((a, b) => b[1].at - a[1].at)
      .map(([id]) => id)
      .filter(id => this.has(id))
  }

  private evictIfNeeded(): void {
    let total = this.totalBytes()
    if (total <= this.maxBytes) return
    const victims = Object.entries(this.meta)
      .filter(([id]) => !this.protected_.has(id))
      .sort((a, b) => a[1].at - b[1].at)
    for (const [id, m] of victims) {
      if (total <= this.maxBytes) break
      try { this.convDir(id).delete() } catch {}
      delete this.meta[id]
      total -= m.bytes
    }
    this.saveMeta()
  }
}

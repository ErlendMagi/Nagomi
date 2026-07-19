// Node supervisor for the persistent Kokoro Python worker.
// Exposes renderLineKokoro() mirroring azure_hd_backend's renderLine shape.
//
// Spawns N workers (default 2), each a .venv python running worker.py,
// speaking NDJSON over stdin/stdout. One in-flight job per worker.
// 120s/job timeout → kill + respawn + retry (max 2 attempts per job).

import { spawn } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const PYTHON = path.join(HERE, '.venv', 'Scripts', 'python.exe')
const WORKER = path.join(HERE, 'worker.py')

const JOB_TIMEOUT_MS = 120_000

class Worker {
  constructor(index) {
    this.index = index
    this.proc = null
    this.ready = false
    this.inflight = null // { id, resolve, reject, timer }
    this.buf = ''
    this.readyPromise = null
  }

  start() {
    this.proc = spawn(PYTHON, [WORKER], {
      stdio: ['pipe', 'pipe', 'inherit'],
      // PYTHONUTF8 forces UTF-8 stdio on Windows (default is the console
      // codepage, which garbles Japanese text into surrogates).
      env: { ...process.env, OMP_NUM_THREADS: '4', PYTHONUTF8: '1', PYTHONIOENCODING: 'utf-8' },
    })
    this.ready = false
    this.buf = ''
    this.readyPromise = new Promise((resolve, reject) => {
      const onExit = code => reject(new Error(`worker ${this.index} exited (${code}) before ready`))
      this.proc.once('exit', onExit)
      this._onReady = () => { this.proc.off('exit', onExit); resolve() }
    })
    this.proc.stdout.on('data', chunk => this._onData(chunk))
    this.proc.on('exit', code => this._onExit(code))
    return this.readyPromise
  }

  _onData(chunk) {
    this.buf += chunk.toString('utf8')
    let nl
    while ((nl = this.buf.indexOf('\n')) >= 0) {
      const line = this.buf.slice(0, nl).trim()
      this.buf = this.buf.slice(nl + 1)
      if (!line) continue
      let msg
      try { msg = JSON.parse(line) } catch { continue }
      if (msg.ready) { this.ready = true; this._onReady?.(); continue }
      if (this.inflight && msg.id === this.inflight.id) {
        const job = this.inflight
        this.inflight = null
        clearTimeout(job.timer)
        if (msg.ok) job.resolve(msg)
        else job.reject(new Error(msg.error))
      }
    }
  }

  _onExit(code) {
    if (this.inflight) {
      const job = this.inflight
      this.inflight = null
      clearTimeout(job.timer)
      job.reject(new Error(`worker ${this.index} died (exit ${code}) mid-job`))
    }
    this.ready = false
  }

  async run(req) {
    if (!this.proc || this.proc.exitCode !== null) await this.start()
    if (!this.ready) await this.readyPromise
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.inflight = null
        try { this.proc.kill('SIGKILL') } catch {}
        reject(new Error(`job ${req.id} timed out after ${JOB_TIMEOUT_MS}ms`))
      }, JOB_TIMEOUT_MS)
      this.inflight = { id: req.id, resolve, reject, timer }
      this.proc.stdin.write(JSON.stringify(req) + '\n')
    })
  }

  get busy() { return this.inflight !== null }

  stop() { try { this.proc?.kill() } catch {} }
}

export class KokoroPool {
  constructor(size = 2) {
    this.workers = Array.from({ length: size }, (_, i) => new Worker(i))
    this.queue = []
  }

  async init() {
    await Promise.all(this.workers.map(w => w.start()))
  }

  _free() { return this.workers.find(w => w.busy === false && w.ready) }

  async render(req, attempt = 1) {
    // simple round-robin over free workers, queue if all busy
    let w = this._free()
    while (!w) {
      await new Promise(r => setTimeout(r, 100))
      w = this._free()
    }
    try {
      return await w.run(req)
    } catch (e) {
      if (attempt <= 2) return this.render(req, attempt + 1)
      throw e
    }
  }

  stop() { for (const w of this.workers) w.stop() }
}

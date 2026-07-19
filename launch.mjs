// launch.mjs
//
// One-click Nagomi launcher. Run via `launch-nagomi.bat` (Windows double-click).
//
// Starts:
//   1. A built-in static file server on http://localhost:4173 serving
//      nagomi/audio/  (the Edge TTS / Qwen MP3+WAV files)
//   2. Expo web dev server on http://localhost:8081
//   3. The default browser pointed at http://localhost:8081
//
// Ctrl-C (or close the console window) stops everything.

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { spawn, exec } from 'node:child_process';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const AUDIO_DIR  = path.join(__dirname, 'audio');
const APP_URL    = 'http://localhost:8081';
const AUDIO_PORT = 4173;

// ─── 1. Self-hosted audio server ─────────────────────────────────────────────
function startAudioServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Range, Content-Type');
    res.setHeader('Cache-Control', 'no-store');

    if (req.method === 'OPTIONS') {
      res.writeHead(204); res.end(); return;
    }

    const reqPath = decodeURIComponent((req.url || '/').split('?')[0]);
    const filePath = path.normalize(path.join(AUDIO_DIR, reqPath));
    if (!filePath.startsWith(AUDIO_DIR)) {
      res.writeHead(403); res.end(); return;
    }

    fs.stat(filePath, (err, stat) => {
      if (err || !stat.isFile()) {
        res.writeHead(404); res.end(); return;
      }
      const ext = path.extname(filePath).toLowerCase();
      const mime = ext === '.mp3' ? 'audio/mpeg'
                 : ext === '.wav' ? 'audio/wav'
                 : ext === '.json' ? 'application/json'
                 : 'application/octet-stream';
      if (req.method === 'HEAD') {
        res.writeHead(200, { 'Content-Type': mime, 'Content-Length': stat.size });
        res.end();
        return;
      }
      res.writeHead(200, { 'Content-Type': mime, 'Content-Length': stat.size });
      fs.createReadStream(filePath).pipe(res);
    });
  });

  return new Promise((resolve, reject) => {
    server.on('error', reject);
    server.listen(AUDIO_PORT, () => {
      console.log(`[audio]   serving ${AUDIO_DIR} at http://localhost:${AUDIO_PORT}`);
      resolve(server);
    });
  });
}

// ─── 2. Expo dev server ──────────────────────────────────────────────────────
function startExpo() {
  const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  // The 0.0.0.0 host + non-interactive flags avoid stdin prompts that block
  // when expo is launched from a .bat double-click.
  const expo = spawn(cmd, ['expo', 'start', '--web', '--port', '8081'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, BROWSER: 'none', CI: '1' },
  });
  expo.on('exit', code => {
    console.log(`[expo]    exited (code=${code}) — shutting down launcher`);
    process.exit(code || 0);
  });
  return expo;
}

// ─── 3. Browser open helper ──────────────────────────────────────────────────
function openBrowser(target) {
  if (process.platform === 'win32') {
    exec(`start "" "${target}"`);
  } else if (process.platform === 'darwin') {
    exec(`open "${target}"`);
  } else {
    exec(`xdg-open "${target}"`);
  }
}

// ─── 4. Wait-for-port helper ─────────────────────────────────────────────────
async function waitForPort(port, host = 'localhost', timeoutMs = 90000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      await new Promise((resolve, reject) => {
        const req = http.get({ host, port, path: '/', timeout: 2000 }, (res) => {
          res.resume();
          resolve();
        });
        req.on('error', reject);
        req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
      });
      return true;
    } catch {
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  return false;
}

// ─── 5. Pre-flight checks ────────────────────────────────────────────────────
function preflight() {
  if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
    console.error(`[fatal] node_modules/ missing. Run "npm install" first.`);
    process.exit(2);
  }
  if (!fs.existsSync(path.join(__dirname, 'src', 'data', 'conversations_v2.js'))) {
    console.error(`[fatal] src/data/conversations_v2.js missing. Run "npm run build:bundle" first.`);
    process.exit(2);
  }
  if (!fs.existsSync(AUDIO_DIR)) {
    console.warn(`[warn]  audio/ directory missing — app will fall back to browser TTS for every line.`);
    console.warn(`        To generate Edge TTS audio: npm run gen:audio`);
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`Nagomi launcher`);
  console.log(`================`);
  preflight();

  // Start audio server first (cheap, instant).
  await startAudioServer();

  // Kick off Expo. It will take ~20-60 seconds the first time.
  console.log(`[expo]    starting (this may take a minute on first run)…`);
  startExpo();

  // Poll until Expo is ready, then open the browser.
  const ready = await waitForPort(8081, 'localhost', 120000);
  if (ready) {
    console.log(`[browser] opening ${APP_URL}`);
    openBrowser(APP_URL);
    console.log(``);
    console.log(`Nagomi is running. Close this window (or press Ctrl-C) to stop.`);
  } else {
    console.error(`[fatal] Expo did not become ready within 120s. Check the output above for errors.`);
    process.exit(1);
  }
}

process.on('SIGINT', () => { process.exit(0); });
process.on('SIGTERM', () => { process.exit(0); });

main().catch(e => { console.error(e); process.exit(1); });

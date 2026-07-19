# Local Browser Demo — Runbook

This is the short version of "how do I see Nagomi running in my browser right
now, with the 23 conversations playing." It assumes you have Node and npm
installed on Windows.

---

## 1. One-time setup

```powershell
cd nagomi
npm install          # installs Expo + the 22-char dev deps (kuromoji, xlsx)
npm run import:vocab # only if data/vocab/ doesn't already exist
```

`npm install` should take 1–3 minutes the first time.

## 2. Build the conversation bundle

Whenever a conv JSON in `data/conversations/` changes (e.g. a new batch is
landed), rebuild the bundle the app reads from:

```powershell
npm run build:bundle
```

You should see something like:

```
[1/3] loading kuromoji…
[2/3] reading conversations…
[3/3] writing bundle…
wrote src\data\conversations_v2.js  (148.4 KB)
  23 conversations · 22 characters
```

The app imports `src/data/conversations_v2.js` directly — no extra step.

## 3. Start the web dev server

```powershell
npm run web
```

Expo will print a local URL (usually `http://localhost:8081` for Metro, with
a web preview). Open it. You should see the Nagomi player. Press the big
play button — the 23 conversations start cycling.

### What you'll hear initially (no Qwen audio yet)

- Browser TTS reads the JP line (any voice the OS / browser has for `ja-JP`).
- Browser TTS reads the EN translation (default English voice, pitch nudged
  by speaker gender).
- A scene-setter line is read in English before each conversation starts
  (the `context` field of the conversation acts as narrator intro).

This is the fallback layer — proves the player + schema + data pipeline all
work end-to-end. The Qwen audio layer plugs into the same code paths.

---

## 4. Adding Qwen audio

The player automatically reaches for a pre-rendered WAV before falling back
to browser TTS. To make those WAVs exist:

### 4a. Generate on Colab

Open a new Colab notebook with a T4 GPU and:

```python
# Cell 1 — install + clone
!pip -q install soundfile openai-whisper
# (Qwen TTS package — install per Qwen's instructions)

# Cell 2 — upload data/conversations/ and data/characters.json
# (drag and drop the two folders into Colab's file pane, or git clone the repo)

# Cell 3 — run the pipeline
!python scripts/audio_pipeline/generate_audio.py \
    --conversations data/conversations \
    --characters    data/characters.json \
    --audio_out     audio \
    --log           audio/generation_log.csv
```

For 23 conversations × ~7 lines × 2 langs = ~322 audio files. On a T4 this
runs in roughly **30–60 minutes**. Resume-safe: if the runtime disconnects,
re-run the cell — already-rendered files are skipped.

When done, **download the `audio/` folder** as a zip and extract it to
`nagomi/audio/` on your local machine. The directory layout should look
like:

```
nagomi/
  audio/
    conv_00001/
      manifest.json
      line_000_yuki_office_jp.wav
      line_000_yuki_office_en.wav
      line_001_kenji_office_jp.wav
      line_001_kenji_office_en.wav
      ...
    conv_00002/
      ...
    generation_log.csv
```

### 4b. Serve the audio dir alongside Expo

In a **second terminal** (Expo is still running in the first):

```powershell
cd nagomi
npx http-server audio -p 4173 --cors
```

`--cors` is required because the Expo dev server and the audio server are
on different ports.

### 4c. Refresh the browser

Hit refresh on the Nagomi tab. Now every line first tries the WAV:

```
http://localhost:4173/conv_00001/line_000_yuki_office_jp.wav
```

If the WAV exists → it plays (Qwen voice). If not → browser TTS as before.
You can mix and match: ship audio for the first few convs to test, fall
back for the rest.

### 4d. (Optional) Override the audio base URL

If you want to serve audio from a different host (a CDN, a tunnel, etc.),
set the global before the app loads. The simplest way during dev is to
add a `<script>` tag to the HTML head:

```html
<script>window.__NAGOMI_AUDIO_BASE = 'https://my-cdn.example.com/nagomi';</script>
```

For Expo web, the entry HTML lives at `app.json` → `web.bundler` config or
in a `public/index.html` if you eject. Default is `http://localhost:4173`.

---

## 5. What you should see in the browser

After step 3 (no Qwen audio):

1. Nagomi title at the top.
2. Streak / progress widgets.
3. A play button.
4. On press: narrator reads scene-setter, then dialog begins. (Legacy demo
   plays a chime after the intro; the shipping app plays its chime at the
   END of each conversation — changed 2026-07-16.)
5. Speaker name shown above each JP line (e.g. "Yuki Tanaka", "Kenji Sato").
6. JP text appears as the speaker speaks; EN translation under it.
7. Conversations loop through all 23 in order, then repeat.
8. Settings screen lets you toggle EN audio, change auto-skip threshold, etc.

After step 4 (Qwen audio added):

1. Same UI.
2. But the voice for each line is the character's distinct Qwen TTS voice —
   different speakers actually sound different. EN narrator has a deliberate
   accent (American / British / Australian / Irish) per the roster.
3. Browser TTS is no longer used unless a specific WAV is missing.

---

## 6. Troubleshooting

**"Cannot resolve module '../data/conversations_v2'"**
→ Run `npm run build:bundle` first. The bundle file is gitignored / generated.

**No JP voices in browser TTS**
→ Most browsers have a `ja-JP` voice on macOS / Windows. Chrome on Linux may
not — install Google Chrome or use Edge. Or generate Qwen audio and use that.

**Audio plays once then stops**
→ Some browsers throttle autoplay after long inactivity. Click play again,
or interact with the page first.

**Qwen WAVs not loading (CORS errors in console)**
→ Make sure you passed `--cors` to http-server.

**Metro bundler complains about JSON file size**
→ The bundle is 148 KB for 23 convs. For 2000 convs it'll be ~13 MB — at
that point we'll switch to lazy loading. Not a problem yet.

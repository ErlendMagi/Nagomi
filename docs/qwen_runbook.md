# Qwen3-TTS Audio Generation Runbook

This is the start-to-finish flow for getting **real Qwen3-TTS audio** for your
23 Nagomi conversations. It uses **Google Colab's free T4 GPU** because no
local GPU on your machine has enough VRAM (Qwen3-TTS-12Hz-1.7B-VoiceDesign
needs ~3.5 GB in fp16; a GTX 960 has 2 GB).

Total user time: ~5 minutes of clicking. Total wall-clock with Colab compute:
**30–60 minutes**.

---

## Step 1 (local) — prepare the upload bundle

```powershell
cd nagomi
npm run prep:colab
```

This produces `nagomi_qwen_input.zip` (~52 KB) in your project root,
containing:

- `conversations/conv_*.json` (all 23 conversations)
- `characters.json` (the 22-character voice roster)
- `generate_audio.py` (the production script)

Re-run this any time you add new conversations or edit `characters.json`.

## Step 2 (Colab) — open the notebook

1. Go to **https://colab.research.google.com/**.
2. **File → Upload notebook** → choose
   `nagomi/scripts/audio_pipeline/nagomi_qwen_colab.ipynb`.
3. **Runtime → Change runtime type → T4 GPU → Save**.

## Step 3 (Colab) — run all cells

**Runtime → Run all.**

The notebook does six things in order:

1. **Sanity-checks the GPU** — should print `NVIDIA Tesla T4` with 15 GB VRAM.
2. **Installs `qwen-tts` + soundfile + whisper** (~1 min).
3. **Prompts you to upload** `nagomi_qwen_input.zip` from step 1.
4. **Runs `generate_audio.py`** — this is the slow part:
   - First the Qwen model downloads (~3.5 GB) — ~3–5 min on Colab's network.
   - Then 23 × ~7 lines × 2 langs = ~322 dialog WAVs + 23 narrator intros.
   - On T4, each Qwen call takes ~3–8 seconds. Total: ~25–50 min.
   - Resume-safe — if Colab disconnects, re-running picks up where it left off
     (the cell skips files that already exist).
5. **Zips the output** → `nagomi_qwen_output.zip` (~30–80 MB depending on speech).
6. **Triggers a browser download** of that zip.

## Step 4 (local) — drop the audio in

1. Move `nagomi_qwen_output.zip` into `nagomi/`.
2. Extract it. You'll get `audio/conv_*/...wav` files and `audio/conv_*/manifest.json`.
3. These sit **alongside** the existing Edge TTS `.mp3` files.

The app's [src/engine/qwenAudio.js](../src/engine/qwenAudio.js) tries `.wav`
first, then `.mp3`, then falls back to browser TTS. So as soon as a WAV exists
for a line, it wins automatically — no code change required.

## Step 5 (local) — relaunch

```
launch-nagomi.bat
```

(Or `npm run launch`.) Browser opens, press play, you hear the Qwen voices.

---

## Per-character voice in the Qwen output

Because Qwen3-TTS-VoiceDesign takes a free-text `instruct` prompt, each
character's distinct voice profile (in `characters.json`) drives the
generation directly. Yuki Tanaka literally sounds like the description in
her `jp_voice_profile`: "Mid-range female pitch, softening and trailing at
sentence ends. Measured, slightly hesitant pace…" — Qwen interprets that.

This is the win vs Edge TTS, which only had two stable Japanese voices for
all 22 characters.

For each line, the final TTS instruction is:

```
f"{character.jp_voice_profile} {line.style}"
```

…which combines who-they-are (the roster baseline) with how-they're-saying-it
(the per-line `style`). The EN narrator track uses
`character.en_voice_profile` with the same `line.style`.

## Re-runs and incremental updates

- **Adding more conversations:** drop new `conv_*.json` files into
  `data/conversations/`, then re-run `npm run prep:colab` and the Colab
  notebook. The script skips already-rendered files; only new ones get
  Qwen calls.
- **Changing a character's voice profile:** delete the affected
  `audio/<conv_id>/line_*_<speakerId>_*.wav` files, then re-run.
- **Tweaking a single line's `style`:** delete that one WAV, re-run.

## Cost

Free. Colab T4 has a 12-hour session limit per day on the free tier; 23
conversations finish in well under one session. If you scale to 2000
conversations, expect ~6–10 hours of Colab compute total, spread across
multiple sessions if needed (resume-safe).

## What can go wrong

| Symptom | Likely cause | Fix |
|---|---|---|
| `qwen-tts` install fails on Colab | Pip can't find the package | Try `%pip install git+https://github.com/QwenLM/Qwen3-TTS.git` |
| Out of memory error | Other Colab cell holding VRAM | Runtime → Restart → Run all |
| Generation extremely slow | Colab gave you a non-T4 (free tier sometimes downgrades) | Runtime → Disconnect and delete runtime → reconnect, request T4 |
| Browser doesn't download output | Popup blocker | Allow popups on `colab.research.google.com`, re-run last cell |
| App still plays MP3 after dropping WAVs in | Browser cache or audio cache | Hard refresh (Ctrl+Shift+R) the Nagomi tab |

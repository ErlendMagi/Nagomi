#!/usr/bin/env python3
"""
Nagomi audio pipeline — unattended Qwen3-TTS generation for a folder of
conversation JSONs.

Runs on Google Colab T4 GPU. For each line of each conversation it:

  1. Looks up the speaker in characters.json
  2. Builds the per-line instruct prompt:
        jp_instruct = f"{speaker.jp_voice_profile} {line.style}"
        en_instruct = f"{speaker.en_voice_profile} {line.style}"
  3. Calls model.generate_voice_design(text=..., language=..., instruct=...)
  4. Saves audio to audio/conv_<id>/line_<NN>_<speaker>_<jp|en>.wav
  5. Writes manifest.json per conversation with paths, durations, and
     word-level timing (Qwen if available, else forced alignment via whisper)
  6. Logs every generated line to a CSV
  7. Skips lines whose audio already exists (resume after Colab disconnect)

Usage (on Colab):

    !pip -q install soundfile pydub openai-whisper torch
    # Qwen TTS package already installed in your Colab setup

    !python generate_audio.py \
        --conversations data/conversations \
        --characters    data/characters.json \
        --audio_out     audio \
        --log           audio/generation_log.csv

The script exits cleanly with a summary line you can grep. If interrupted,
re-running picks up exactly where it left off.
"""

import argparse
import csv
import json
import os
import sys
import time
import traceback
from pathlib import Path
from typing import Dict, List, Optional

import soundfile as sf  # type: ignore

# ─── Model loading ──────────────────────────────────────────────────────────

_MODEL = None


def load_model():
    """Lazy-load Qwen3-TTS-12Hz-1.7B-VoiceDesign once per process."""
    global _MODEL
    if _MODEL is not None:
        return _MODEL
    import torch
    from qwen_tts import Qwen3TTSModel  # type: ignore

    print("[model] loading Qwen3-TTS-12Hz-1.7B-VoiceDesign …", flush=True)
    _MODEL = Qwen3TTSModel.from_pretrained(
        "Qwen/Qwen3-TTS-12Hz-1.7B-VoiceDesign",
        device_map="cuda:0",
        dtype=torch.float16,
        attn_implementation="sdpa",
    )
    print("[model] loaded.", flush=True)
    return _MODEL


# ─── Character roster ───────────────────────────────────────────────────────

def load_characters(path: Path) -> Dict[str, dict]:
    """Map roster id -> character object."""
    raw = json.loads(path.read_text(encoding="utf-8"))
    chars = {c["id"]: c for c in raw["characters"]}
    print(f"[chars] loaded {len(chars)} characters from {path}", flush=True)
    return chars


# ─── Conversation discovery ─────────────────────────────────────────────────

def discover_conversations(folder: Path) -> List[Path]:
    files = sorted(folder.glob("conv_*.json"))
    if not files:
        print(f"[warn] no conversation JSONs found in {folder}", flush=True)
    return files


def load_conversation(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


# ─── Audio generation per line ──────────────────────────────────────────────

def render_line(
    *,
    model,
    text: str,
    language: str,
    instruct: str,
    out_path: Path,
) -> dict:
    """Call Qwen TTS for one line, save WAV.

    Qwen3-TTS-VoiceDesign returns (wavs, sr) where wavs is a batched tensor —
    wavs[0] is the 1-D waveform. The model also runs in fp16 by default, so we
    must explicitly cast to float32 before handing off to soundfile, which
    otherwise emits a confusing "Format not recognised" error.
    """
    import numpy as np
    out_path.parent.mkdir(parents=True, exist_ok=True)

    result = model.generate_voice_design(
        text=text,
        language=language,
        instruct=instruct,
    )

    audio = None
    sample_rate = None
    qwen_timing = None

    if isinstance(result, tuple) and len(result) >= 2:
        wavs, sample_rate = result[0], result[1]
        try:
            audio = wavs[0]
        except Exception:  # noqa: BLE001
            audio = wavs
        if len(result) >= 3 and isinstance(result[2], (list, dict)):
            qwen_timing = result[2]
    elif isinstance(result, dict):
        audio = result.get("audio")
        sample_rate = result.get("sample_rate", 24000)
        qwen_timing = result.get("timing") or result.get("alignment")
    else:
        audio = result
        sample_rate = 24000

    if audio is None or sample_rate is None:
        raise RuntimeError(f"Could not extract audio from generate_voice_design result: {type(result)}")

    # Torch tensor → numpy
    try:
        import torch  # type: ignore
        if isinstance(audio, torch.Tensor):
            audio = audio.detach().cpu().float().numpy()
    except ImportError:
        pass
    # Cast + squeeze to 1-D float32
    audio = np.asarray(audio, dtype=np.float32)
    while audio.ndim > 1:
        audio = audio[0] if audio.shape[0] == 1 else audio.squeeze()
    # Explicit WAV/PCM_16 avoids libsndfile auto-detection edge cases.
    sf.write(str(out_path), audio, int(sample_rate), format="WAV", subtype="PCM_16")
    duration_s = len(audio) / float(sample_rate)
    return {"path": str(out_path), "duration_s": duration_s, "qwen_timing": qwen_timing}


# ─── Optional forced alignment fallback (whisper) ──────────────────────────

_WHISPER = None


def whisper_align(wav_path: Path, language: str, reference_text: str) -> Optional[list]:
    """Return word-level timing from whisper if available, else None."""
    global _WHISPER
    try:
        if _WHISPER is None:
            import whisper  # type: ignore
            print("[whisper] loading model 'small' for alignment …", flush=True)
            _WHISPER = whisper.load_model("small")
        result = _WHISPER.transcribe(
            str(wav_path),
            language="ja" if language.lower().startswith("ja") else "en",
            word_timestamps=True,
            initial_prompt=reference_text[:200],
            verbose=False,
        )
        words = []
        for seg in result.get("segments", []):
            for w in seg.get("words", []) or []:
                words.append({
                    "word": w.get("word", "").strip(),
                    "start": float(w.get("start", 0.0)),
                    "end": float(w.get("end", 0.0)),
                })
        return words or None
    except Exception as e:  # noqa: BLE001
        print(f"[whisper] alignment failed for {wav_path.name}: {e}", flush=True)
        return None


# ─── CSV logging ────────────────────────────────────────────────────────────

class CsvLog:
    HEADER = ["conv_id", "line_index", "speaker", "language", "char_count", "audio_path", "duration_s", "time"]

    def __init__(self, path: Path):
        self.path = path
        self.path.parent.mkdir(parents=True, exist_ok=True)
        new = not self.path.exists()
        self.fh = self.path.open("a", encoding="utf-8", newline="")
        self.writer = csv.writer(self.fh)
        if new:
            self.writer.writerow(self.HEADER)
            self.fh.flush()

    def write(self, row: dict):
        self.writer.writerow([row.get(k, "") for k in self.HEADER])
        self.fh.flush()

    def close(self):
        try:
            self.fh.close()
        except Exception:  # noqa: BLE001
            pass


# ─── Conversation processing ────────────────────────────────────────────────

def process_conversation(
    *,
    conv: dict,
    chars: Dict[str, dict],
    audio_root: Path,
    log: CsvLog,
    run_whisper: bool,
) -> dict:
    """Generate every missing line's audio and return the manifest."""
    conv_id = conv["id"]
    out_dir = audio_root / conv_id
    out_dir.mkdir(parents=True, exist_ok=True)

    # Validate cast
    missing = [s for s in conv.get("cast", []) if s not in chars]
    if missing:
        raise ValueError(f"{conv_id}: cast references unknown character ids: {missing}")
    line_speakers = [ln["speaker"] for ln in conv["lines"]]
    rogue = [s for s in line_speakers if s not in conv.get("cast", [])]
    if rogue:
        raise ValueError(f"{conv_id}: speakers in lines not in cast: {set(rogue)}")

    manifest_path = out_dir / "manifest.json"
    manifest = json.loads(manifest_path.read_text(encoding="utf-8")) if manifest_path.exists() else {
        "id": conv_id,
        "ambient": conv.get("ambient"),
        "sound_effects": conv.get("sound_effects", []),
        "cast": conv.get("cast", []),
        "lines": [],
    }

    model = load_model()

    # ── Narrator intro (English scene-setter, alternating gendered narrator) ──
    intro_path = out_dir / "intro_en.wav"
    if not intro_path.exists() and conv.get("context"):
        # Use a stable per-conv-id parity so re-renders match the previous take.
        try:
            seed = int(conv_id.split('_')[-1])
        except Exception:
            seed = 0
        narrator_profile = (
            "gender: Female. pitch: Mid-range female pitch, warm and steady. speed: Measured, "
            "slightly slower than conversational. volume: Calm conversational. age: Mid thirties. "
            "clarity: Highly articulate. fluency: Completely fluent. accent: General American "
            "English. texture: Warm, clear. emotion: Composed and inviting. tone: Narrator setting "
            "a scene. personality: Patient, observant."
            if seed % 2 == 0 else
            "gender: Male. pitch: Lower-mid male pitch, calm and steady. speed: Measured, slightly "
            "slower than conversational. volume: Calm conversational. age: Late thirties. clarity: "
            "Highly articulate. fluency: Completely fluent. accent: British English (modern RP). "
            "texture: Warm, grounded. emotion: Composed and inviting. tone: Narrator setting a "
            "scene. personality: Patient, observant."
        )
        try:
            info = render_line(
                model=model,
                text=conv["context"],
                language="English",
                instruct=narrator_profile,
                out_path=intro_path,
            )
            print(f"  [{conv_id} intro] narrator  {info['duration_s']:.2f}s", flush=True)
            log.write({
                "conv_id": conv_id,
                "line_index": -1,
                "speaker": "__narrator__",
                "language": "en",
                "char_count": len(conv["context"]),
                "audio_path": str(intro_path.relative_to(audio_root)),
                "duration_s": round(info["duration_s"], 3),
                "time": time.strftime("%Y-%m-%d %H:%M:%S"),
            })
        except Exception as e:  # noqa: BLE001
            print(f"[err] {conv_id} intro: {e}", flush=True)
            traceback.print_exc()

    for i, line in enumerate(conv["lines"]):
        speaker_id = line["speaker"]
        char = chars[speaker_id]
        style = line.get("style", "").strip()

        for lang_label, lang, text, profile_key in (
            ("jp", "Japanese", line["jp"], "jp_voice_profile"),
            ("en", "English",  line["en"], "en_voice_profile"),
        ):
            wav_path = out_dir / f"line_{i:03d}_{speaker_id}_{lang_label}.wav"
            if wav_path.exists():
                # Resume — skip already-rendered lines silently
                continue
            instruct = f"{char[profile_key]} {style}".strip()
            t0 = time.time()
            try:
                info = render_line(
                    model=model,
                    text=text,
                    language=lang,
                    instruct=instruct,
                    out_path=wav_path,
                )
            except Exception as e:  # noqa: BLE001
                print(f"[err] {conv_id} line {i} {lang_label}: {e}", flush=True)
                traceback.print_exc()
                # Move on rather than crashing the whole batch.
                continue

            # Word-level timing
            timing = info.get("qwen_timing")
            if not timing and run_whisper:
                timing = whisper_align(wav_path, lang, text)

            entry_index = next(
                (idx for idx, l in enumerate(manifest["lines"])
                 if l.get("index") == i and l.get("lang") == lang_label),
                None,
            )
            entry = {
                "index": i,
                "speaker": speaker_id,
                "lang": lang_label,
                "text": text,
                "style": style,
                "audio": str(wav_path.relative_to(audio_root)),
                "duration_s": round(info["duration_s"], 3),
                "timing": timing or [],
            }
            if entry_index is None:
                manifest["lines"].append(entry)
            else:
                manifest["lines"][entry_index] = entry

            elapsed = time.time() - t0
            print(f"  [{conv_id} {i:03d} {lang_label}] {speaker_id}  {info['duration_s']:.2f}s  ({elapsed:.1f}s wall)", flush=True)

            log.write({
                "conv_id": conv_id,
                "line_index": i,
                "speaker": speaker_id,
                "language": lang_label,
                "char_count": len(text),
                "audio_path": str(wav_path.relative_to(audio_root)),
                "duration_s": round(info["duration_s"], 3),
                "time": time.strftime("%Y-%m-%d %H:%M:%S"),
            })

        # Persist manifest after each line so a crash never loses progress
        manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")

    return manifest


# ─── Main ───────────────────────────────────────────────────────────────────

def main() -> int:
    ap = argparse.ArgumentParser(description="Nagomi unattended audio pipeline")
    ap.add_argument("--conversations", type=Path, required=True, help="Folder of conv_*.json")
    ap.add_argument("--characters", type=Path, required=True, help="Path to characters.json")
    ap.add_argument("--audio_out", type=Path, required=True, help="Where to write audio/")
    ap.add_argument("--log", type=Path, required=True, help="CSV path for per-line log")
    ap.add_argument("--no-whisper", action="store_true", help="Disable whisper forced alignment")
    ap.add_argument("--only", type=str, default="", help="Comma-sep conv ids to render (default: all)")
    args = ap.parse_args()

    if not args.conversations.is_dir():
        print(f"[fatal] conversations dir not found: {args.conversations}")
        return 2
    if not args.characters.is_file():
        print(f"[fatal] characters.json not found: {args.characters}")
        return 2

    chars = load_characters(args.characters)
    log = CsvLog(args.log)
    convs = discover_conversations(args.conversations)
    if args.only:
        only = set(s.strip() for s in args.only.split(",") if s.strip())
        convs = [p for p in convs if p.stem in only]

    print(f"[run] {len(convs)} conversation(s) to consider; audio root: {args.audio_out}", flush=True)
    args.audio_out.mkdir(parents=True, exist_ok=True)

    started = time.time()
    n_done = 0
    n_err = 0
    for path in convs:
        try:
            conv = load_conversation(path)
            print(f"[conv] {conv['id']}  cast={conv.get('cast')}  lines={len(conv['lines'])}", flush=True)
            process_conversation(
                conv=conv,
                chars=chars,
                audio_root=args.audio_out,
                log=log,
                run_whisper=not args.no_whisper,
            )
            n_done += 1
        except Exception as e:  # noqa: BLE001
            n_err += 1
            print(f"[err] {path.name}: {e}", flush=True)
            traceback.print_exc()

    log.close()
    elapsed = time.time() - started
    print(f"[done] conversations processed: {n_done}  errors: {n_err}  elapsed: {elapsed/60:.1f} min")
    return 0 if n_err == 0 else 1


if __name__ == "__main__":
    sys.exit(main())

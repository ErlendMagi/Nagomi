#!/usr/bin/env python3
"""Persistent Kokoro-82M synthesis worker.

Protocol: newline-delimited JSON over stdin/stdout.
  request:  {"id": str, "lang": "ja"|"en-us"|"en-gb", "text": str,
             "voice": str  (character key from voices_kokoro.json,
                            or raw kokoro voice id, or {"blend": [[name, w], ...]}),
             "speed": float (optional; else per-character default),
             "out": str  (absolute path, .mp3 or .wav)}
  response: {"id": str, "ok": true, "bytes": int, "dur_s": float, "ms": int}
            {"id": str, "ok": false, "error": str}

Startup line: {"ready": true, "voices": [...]}. All logging goes to stderr.
"""
import json
import os
import sys
import time

sys.stderr.write("[worker] loading kokoro-onnx...\n")
sys.stderr.flush()

import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

HERE = os.path.dirname(os.path.abspath(__file__))
MODEL = os.path.join(HERE, "models", "kokoro-v1.0.int8.onnx")
VOICES = os.path.join(HERE, "models", "voices-v1.0.bin")
VOCAB_CONFIG = os.path.join(HERE, "models", "config.json")
VOICE_MAP_PATH = os.path.join(HERE, "voices_kokoro.json")

kokoro = Kokoro(MODEL, VOICES, vocab_config=VOCAB_CONFIG)

sys.stderr.write("[worker] loading misaki JA G2P...\n")
sys.stderr.flush()
from misaki import ja
g2p_ja = ja.JAG2P()

with open(VOICE_MAP_PATH, "r", encoding="utf-8") as f:
    VOICE_MAP = json.load(f)

def resolve_style(spec):
    """spec: {"blend": [[voice, weight], ...]} -> style vector."""
    blend = spec["blend"]
    total = sum(w for _, w in blend)
    vec = None
    for name, w in blend:
        style = kokoro.get_voice_style(name)
        contrib = style * (w / total)
        vec = contrib if vec is None else vec + contrib
    return vec

# Precompute per-character style vectors.
STYLES = {}
for char_id, spec in VOICE_MAP.items():
    if not isinstance(spec, dict) or "jp" not in spec:
        continue  # skip _comment and other metadata keys
    STYLES[char_id] = {
        "jp": {"style": resolve_style(spec["jp"]), "speed": spec["jp"].get("speed", 1.0)},
        "en": {"style": resolve_style(spec["en"]), "speed": spec["en"].get("speed", 1.0),
               "lang": spec["en"].get("lang", "en-us")},
    }

sys.stderr.write(f"[worker] ready: {len(STYLES)} characters mapped\n")
sys.stderr.flush()
print(json.dumps({"ready": True, "voices": sorted(STYLES.keys())}), flush=True)

def synth(req):
    lang = req["lang"]
    text = req["text"]
    voice_key = req["voice"]
    out = req["out"]

    if isinstance(voice_key, dict):
        style = resolve_style(voice_key)
        speed = float(req.get("speed", 1.0))
    elif voice_key in STYLES:
        slot = STYLES[voice_key]["jp" if lang == "ja" else "en"]
        style = slot["style"]
        speed = float(req.get("speed", slot["speed"]))
        if lang != "ja":
            lang = slot.get("lang", "en-us")
    else:
        # raw kokoro voice id
        style = kokoro.get_voice_style(voice_key)
        speed = float(req.get("speed", 1.0))

    if lang == "ja":
        phonemes, _ = g2p_ja(text)
        samples, sample_rate = kokoro.create(phonemes, voice=style, speed=speed, is_phonemes=True)
    else:
        samples, sample_rate = kokoro.create(text, voice=style, speed=speed, lang=lang)

    os.makedirs(os.path.dirname(out), exist_ok=True)
    part = out + ".part"
    fmt = "MP3" if out.lower().endswith(".mp3") else "WAV"
    sf.write(part, samples, sample_rate, format=fmt)
    if os.path.exists(out):
        os.remove(out)
    os.rename(part, out)
    return len(samples) / sample_rate, os.path.getsize(out)

for line in sys.stdin:
    line = line.strip()
    if not line:
        continue
    try:
        req = json.loads(line)
    except json.JSONDecodeError as e:
        print(json.dumps({"id": None, "ok": False, "error": f"bad json: {e}"}), flush=True)
        continue
    t0 = time.time()
    try:
        dur_s, nbytes = synth(req)
        print(json.dumps({"id": req["id"], "ok": True, "bytes": nbytes,
                          "dur_s": round(dur_s, 2), "ms": int((time.time() - t0) * 1000)}), flush=True)
    except Exception as e:
        print(json.dumps({"id": req.get("id"), "ok": False, "error": f"{type(e).__name__}: {e}"}), flush=True)

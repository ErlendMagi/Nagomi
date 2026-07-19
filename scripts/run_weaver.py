#!/usr/bin/env python3
"""
Nagomi conversation weaver — runs the prompt at scale against an LLM, producing
schema-conforming conversation JSONs until the target count is reached.

Two modes:
  --mode=plan     consume the rows in data/plan-rows.json one batch at a time.
                  Each plan row becomes one weaved conversation. Order: by id.
  --mode=coverage drive purely by coverage gaps. Picks under-covered words at
                  the current tier and asks the LLM to invent scenes. Used to
                  scale beyond the 500 plan rows to the full 20k vocab target.

Resume is automatic: any conv_NNNNN.json already in data/conversations/ is
skipped. Stop the script at any time; re-run to continue.

Usage:
    export ANTHROPIC_API_KEY=sk-ant-...
    pip install anthropic
    python scripts/run_weaver.py --target 2000 --batch-size 10 --mode plan
    python scripts/run_weaver.py --target 2000 --batch-size 10 --mode coverage

After each batch the script runs the validator + coverage auditor (via Node)
so the next batch sees fresh coverage signal.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import time
import traceback
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
CONV_DIR     = ROOT / "data" / "conversations"
REJECTED_DIR = CONV_DIR / "_rejected"
CHARS_PATH   = ROOT / "data" / "characters.json"
WORDS_PATH   = ROOT / "data" / "vocab" / "words.json"
SENTS_PATH   = ROOT / "data" / "vocab" / "sentences.json"
WORD_SENTS   = ROOT / "data" / "vocab" / "word-sentences.json"
PLAN_PATH    = ROOT / "data" / "plan-rows.json"
COVERAGE     = ROOT / "data" / "coverage.json"
PROMPT_PATH  = ROOT / "prompts" / "generate_conversations_prompt.md"
LOG_PATH     = ROOT / "data" / "weaver.log"

TIER_BOUNDS = {
    1: (1,      500),
    2: (501,    2000),
    3: (2001,   5000),
    4: (5001,   10000),
    5: (10001,  20000),
}

# ─── Logging ────────────────────────────────────────────────────────────────

def log(msg: str) -> None:
    line = f"[{datetime.now().strftime('%H:%M:%S')}] {msg}"
    print(line, flush=True)
    try:
        with LOG_PATH.open("a", encoding="utf-8") as f:
            f.write(line + "\n")
    except Exception:
        pass


# ─── Data loading ───────────────────────────────────────────────────────────

def load_json(path: Path, default: Any = None) -> Any:
    if not path.exists():
        if default is not None:
            return default
        raise FileNotFoundError(path)
    return json.loads(path.read_text(encoding="utf-8"))


def existing_conv_ids() -> set[str]:
    if not CONV_DIR.exists():
        return set()
    return {p.stem for p in CONV_DIR.glob("conv_*.json")}


def next_conv_id(existing: set[str]) -> str:
    n = 1
    while f"conv_{n:05d}" in existing:
        n += 1
    return f"conv_{n:05d}"


# ─── Coverage + vocab picks ─────────────────────────────────────────────────

def refresh_coverage() -> None:
    """Run the Node audit script so coverage.json reflects on-disk state."""
    try:
        subprocess.run(
            ["node", str(ROOT / "scripts" / "audit_coverage.mjs")],
            check=True,
            cwd=str(ROOT),
            capture_output=True,
        )
    except FileNotFoundError:
        log("warning: 'node' not on PATH; coverage will not be refreshed.")
    except subprocess.CalledProcessError as e:
        log(f"audit_coverage failed: {e.stderr.decode(errors='ignore')[:500]}")


def pick_tier(coverage: dict, words: list[dict]) -> int:
    """Pick the lowest tier that still has under-covered words."""
    for tier, (lo, hi) in TIER_BOUNDS.items():
        gap = sum(1 for w in words if lo <= w["rank"] <= hi and coverage.get(w["jp"], 0) < 5)
        if gap > 0:
            return tier
    return 5


def pick_target_vocab(tier: int, coverage: dict, words: list[dict], n: int = 25) -> list[dict]:
    lo, hi = TIER_BOUNDS[tier]
    candidates = [
        {**w, "current_variant_count": coverage.get(w["jp"], 0)}
        for w in words
        if lo <= w["rank"] <= hi and coverage.get(w["jp"], 0) < 5
    ]
    # Skewed shuffle: weighted toward the lowest counts and lowest ranks.
    candidates.sort(key=lambda w: (w["current_variant_count"], w["rank"]))
    return candidates[:n]


def gather_seed_sentences(target_vocab: list[dict], word_sents: dict, sents: list[dict], per_word: int = 15) -> list[dict]:
    out, seen = [], set()
    for w in target_vocab:
        for sid in word_sents.get(w["jp"], [])[:per_word]:
            if sid in seen:
                continue
            seen.add(sid)
            s = sents[sid]
            out.append({"id": s["id"], "jp": s["jp"], "en": s["en"], "words": s.get("words", [])})
    return out


# ─── Cast usage ─────────────────────────────────────────────────────────────

def compute_cast_usage() -> dict:
    usage: dict[str, int] = {}
    for path in CONV_DIR.glob("conv_*.json"):
        try:
            conv = json.loads(path.read_text(encoding="utf-8"))
            for spk in conv.get("cast", []):
                usage[spk] = usage.get(spk, 0) + 1
        except Exception:
            continue
    return usage


def load_recent_titles(n: int = 30) -> list[str]:
    convs = sorted(CONV_DIR.glob("conv_*.json"), reverse=True)[:n]
    titles = []
    for p in convs:
        try:
            c = json.loads(p.read_text(encoding="utf-8"))
            titles.append(c.get("context", "")[:120])
        except Exception:
            continue
    return titles


# ─── Prompt assembly ────────────────────────────────────────────────────────

def extract_prompt_block(path: Path) -> str:
    """Pull the text between '--- PROMPT START ---' and '--- PROMPT END ---'."""
    full = path.read_text(encoding="utf-8")
    m = re.search(r"--- PROMPT START ---\s*(.*?)\s*--- PROMPT END ---", full, re.S)
    if not m:
        raise RuntimeError("Could not find prompt block markers in " + str(path))
    return m.group(1).strip()


def build_user_message(prompt_block: str, runtime_inputs: dict) -> str:
    inputs_block = json.dumps(runtime_inputs, ensure_ascii=False, indent=2)
    return f"{prompt_block}\n\n## Runtime inputs\n```json\n{inputs_block}\n```"


# ─── LLM call ───────────────────────────────────────────────────────────────

def call_anthropic(user_message: str, model: str, max_tokens: int = 32000) -> str:
    try:
        import anthropic  # type: ignore
    except ImportError:
        log("FATAL: `anthropic` not installed. Run: pip install anthropic")
        sys.exit(2)

    client = anthropic.Anthropic()
    response = client.messages.create(
        model=model,
        max_tokens=max_tokens,
        messages=[{"role": "user", "content": user_message}],
    )
    # Concatenate text blocks
    parts = []
    for block in response.content:
        if getattr(block, "type", None) == "text":
            parts.append(block.text)
        elif isinstance(block, dict) and block.get("type") == "text":
            parts.append(block.get("text", ""))
    return "".join(parts)


def parse_json_array(text: str) -> list[dict]:
    """The model should return a bare JSON array. Be forgiving of stray fences."""
    text = text.strip()
    # Strip ```json fences if present
    if text.startswith("```"):
        text = re.sub(r"^```(?:json)?\s*", "", text)
        text = re.sub(r"\s*```\s*$", "", text)
    # Heuristic: take from first '[' to matching ']'
    start = text.find("[")
    end = text.rfind("]")
    if start == -1 or end == -1 or end < start:
        raise ValueError(f"No JSON array found in model output. First 300 chars: {text[:300]!r}")
    candidate = text[start : end + 1]
    return json.loads(candidate)


# ─── Conversation writing + validation ──────────────────────────────────────

def write_and_validate(conv: dict, existing: set[str]) -> bool:
    """Assign id, write to disk, run validator. Return True if accepted."""
    conv_id = next_conv_id(existing)
    conv["id"] = conv_id
    if "meta" not in conv:
        conv["meta"] = {}
    conv["meta"].setdefault("generated_at", datetime.now(tz=timezone.utc).isoformat())

    CONV_DIR.mkdir(parents=True, exist_ok=True)
    path = CONV_DIR / f"{conv_id}.json"
    path.write_text(json.dumps(conv, ensure_ascii=False, indent=2), encoding="utf-8")

    # Validate via Node script
    try:
        result = subprocess.run(
            ["node", str(ROOT / "scripts" / "validate_conversation.mjs"), str(path), "--strict"],
            cwd=str(ROOT),
            capture_output=True,
            text=True,
        )
        if result.returncode != 0:
            REJECTED_DIR.mkdir(parents=True, exist_ok=True)
            dest = REJECTED_DIR / f"{conv_id}.json"
            path.rename(dest)
            log(f"  ✗ {conv_id} rejected → {dest.name}\n{result.stdout.strip()}")
            return False
    except FileNotFoundError:
        log("warning: node not on PATH; skipping validation.")
    existing.add(conv_id)
    log(f"  ✓ {conv_id}  cast={conv.get('cast')}  lines={len(conv.get('lines', []))}")
    return True


# ─── Per-batch flow ─────────────────────────────────────────────────────────

def run_plan_batch(plan_rows: list[dict], existing: set[str], characters: dict, words: list[dict],
                   word_sents: dict, sents: list[dict], coverage: dict, prompt_block: str,
                   model: str, batch_size: int) -> int:
    """Pick up to batch_size unrendered plan rows and weave them."""
    # Find planned rows whose id-letter conv_NNN slot does not yet exist in conv_NNNNN format.
    # Plan ids are conv_001 .. conv_500; weaver ids are conv_00001+. They are independent.
    # So we just pick the next batch_size plan rows that haven't been "consumed" yet.
    state_path = ROOT / "data" / "weaver-plan-state.json"
    state = json.loads(state_path.read_text(encoding="utf-8")) if state_path.exists() else {"consumed": []}
    consumed = set(state["consumed"])
    available = [r for r in plan_rows if r.get("id") not in consumed and r.get("status") == "planned"]
    chunk = available[:batch_size]
    if not chunk:
        log("plan exhausted; nothing more to weave from plan rows.")
        return 0

    target_vocab = pick_target_vocab(pick_tier(coverage, words), coverage, words, n=25)
    seeds = gather_seed_sentences(target_vocab, word_sents, sents, per_word=10)
    runtime_inputs = {
        "requested_count":  len(chunk),
        "frequency_tier":   pick_tier(coverage, words),
        "target_vocab":     target_vocab,
        "seed_sentences":   seeds,
        "characters":       characters,
        "plan_rows":        chunk,
        "recent_titles":    load_recent_titles(),
        "cast_usage":       compute_cast_usage(),
    }
    user_msg = build_user_message(prompt_block, runtime_inputs)
    log(f"plan batch: requesting {len(chunk)} convs from {model}…")
    raw = call_anthropic(user_msg, model=model)
    convs = parse_json_array(raw)
    accepted = 0
    for conv in convs:
        if write_and_validate(conv, existing):
            accepted += 1
    # Mark these plan rows consumed.
    state["consumed"] = list(consumed | {r["id"] for r in chunk})
    state_path.write_text(json.dumps(state, indent=2), encoding="utf-8")
    return accepted


def run_coverage_batch(existing: set[str], characters: dict, words: list[dict],
                       word_sents: dict, sents: list[dict], coverage: dict, prompt_block: str,
                       model: str, batch_size: int) -> int:
    tier = pick_tier(coverage, words)
    target_vocab = pick_target_vocab(tier, coverage, words, n=30)
    seeds = gather_seed_sentences(target_vocab, word_sents, sents, per_word=15)
    runtime_inputs = {
        "requested_count":  batch_size,
        "frequency_tier":   tier,
        "target_vocab":     target_vocab,
        "seed_sentences":   seeds,
        "characters":       characters,
        "recent_titles":    load_recent_titles(),
        "cast_usage":       compute_cast_usage(),
    }
    user_msg = build_user_message(prompt_block, runtime_inputs)
    log(f"coverage batch: requesting {batch_size} convs at tier {tier} from {model}…")
    raw = call_anthropic(user_msg, model=model)
    convs = parse_json_array(raw)
    accepted = 0
    for conv in convs:
        if write_and_validate(conv, existing):
            accepted += 1
    return accepted


# ─── Main ───────────────────────────────────────────────────────────────────

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--target", type=int, default=2000, help="Total conversations desired on disk (default 2000)")
    ap.add_argument("--batch-size", type=int, default=10)
    ap.add_argument("--mode", choices=["plan", "coverage", "auto"], default="auto",
                    help="auto: plan first, then coverage once plan rows are exhausted")
    ap.add_argument("--model", default="claude-opus-4-7",
                    help="Anthropic model id (claude-opus-4-7, claude-sonnet-4-6, claude-haiku-4-5-20251001)")
    ap.add_argument("--max-batches", type=int, default=10000,
                    help="Safety cap; total batches across the whole run")
    args = ap.parse_args()

    log(f"weaver starting · target={args.target} · batch={args.batch_size} · mode={args.mode} · model={args.model}")

    # Pre-flight
    if not os.environ.get("ANTHROPIC_API_KEY"):
        log("FATAL: ANTHROPIC_API_KEY not set in environment.")
        return 2
    for p in (CHARS_PATH, WORDS_PATH, SENTS_PATH, WORD_SENTS, PROMPT_PATH):
        if not p.exists():
            log(f"FATAL: required file missing: {p}")
            return 2

    characters = load_json(CHARS_PATH)
    words      = load_json(WORDS_PATH)
    sents      = load_json(SENTS_PATH)
    word_sents = load_json(WORD_SENTS)
    plan_rows  = load_json(PLAN_PATH, default=[])
    prompt_block = extract_prompt_block(PROMPT_PATH)

    refresh_coverage()
    coverage = load_json(COVERAGE, default={})
    existing = existing_conv_ids()

    log(f"on disk: {len(existing)} conversations.  target gap: {max(0, args.target - len(existing))}")

    batches = 0
    while len(existing) < args.target and batches < args.max_batches:
        batches += 1
        try:
            if args.mode in ("plan", "auto"):
                got = run_plan_batch(plan_rows, existing, characters, words, word_sents, sents,
                                     coverage, prompt_block, args.model, args.batch_size)
                if got == 0 and args.mode == "auto":
                    log("plan rows exhausted — switching to coverage mode")
                    args.mode = "coverage"
                    continue
                if got == 0 and args.mode == "plan":
                    break
            else:
                run_coverage_batch(existing, characters, words, word_sents, sents,
                                   coverage, prompt_block, args.model, args.batch_size)
        except Exception as e:
            log(f"batch {batches} failed: {e}")
            traceback.print_exc()
            time.sleep(5)
            continue

        # Refresh coverage so the next batch picks fresh targets
        refresh_coverage()
        coverage = load_json(COVERAGE, default={})

        # Progress line
        log(f"progress: {len(existing)}/{args.target}  (batch {batches})")

    log(f"weaver done: {len(existing)}/{args.target} conversations on disk after {batches} batches.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

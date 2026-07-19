# Weaver Runbook — Getting to 2000 Conversations

This is the operations doc for [`scripts/run_weaver.py`](../scripts/run_weaver.py).
Follow it once to set up; after that the script can run unattended overnight
until the corpus reaches the target size.

---

## What the weaver does

1. Reads coverage state (`data/coverage.json`, produced by `audit_coverage.mjs`).
2. Picks the lowest frequency tier with under-covered words.
3. Picks ~25 of the most under-covered target words at that tier.
4. Pulls seed sentences for those words from `data/vocab/word-sentences.json` +
   `data/vocab/sentences.json`.
5. Builds the prompt from [`prompts/generate_conversations_prompt.md`](../prompts/generate_conversations_prompt.md)
   with the runtime inputs.
6. Calls the Anthropic API for one batch of N conversations.
7. Parses the returned JSON array.
8. Writes each conversation to `data/conversations/conv_NNNNN.json`.
9. Runs [`scripts/validate_conversation.mjs`](../scripts/validate_conversation.mjs)
   on each; quarantines failures to `data/conversations/_rejected/`.
10. Re-runs `audit_coverage.mjs` so the next batch sees fresh signal.
11. Loops until target reached or the plan rows are exhausted.

If anything stops the run (Ctrl-C, crash, network blip), just re-run the
command. Conversations already on disk are skipped.

---

## One-time setup

```bash
# Python deps
pip install anthropic

# Excel/vocab dataset (only needed once — produces data/plan-rows.json + data/vocab/*)
cd nagomi
npm install
npm run import:vocab
npm run build:content-plan

# API key
export ANTHROPIC_API_KEY=sk-ant-...
```

Verify everything is wired:

```bash
node scripts/validate_conversation.mjs       # should report "0 valid, 0 invalid (of 0)"
node scripts/audit_coverage.mjs              # writes data/coverage.json (all zeros initially)
```

---

## Running the weaver

The simplest run targets 2000 conversations, picks plan rows first, then
switches to coverage-driven once they're exhausted:

```bash
python scripts/run_weaver.py --target 2000 --batch-size 10 --mode auto
```

That's it. The script logs every batch to stdout and to `data/weaver.log`.
You can interrupt with Ctrl-C and re-run later; it picks up where it left off.

### Key flags

| Flag | Default | Notes |
|---|---|---|
| `--target` | 2000 | Stop once `data/conversations/` has this many `conv_*.json` files. |
| `--batch-size` | 10 | Conversations requested per LLM call. Bigger = fewer round trips, more output tokens per call. |
| `--mode` | `auto` | `plan` consumes `data/plan-rows.json`; `coverage` invents new scenes from coverage gaps; `auto` does plan first, then coverage. |
| `--model` | `claude-opus-4-7` | Any Anthropic model id. Sonnet/Haiku are cheaper but lower-quality dialogue. |
| `--max-batches` | 10000 | Safety cap. |

### Recommended model for cost vs quality

| Model | ~Input | ~Output | Quality for this task | Run cost to 2000 |
|---|---|---|---|---|
| `claude-opus-4-7` | $15/Mt | $75/Mt | Best — recommended for the first 500 to lock the tone. | ~$400–700 |
| `claude-sonnet-4-6` | $3/Mt | $15/Mt | Very good. Recommended for the bulk. | ~$80–140 |
| `claude-haiku-4-5-20251001` | $1/Mt | $5/Mt | Acceptable for filler / rarer-word coverage where naturalness is less critical. | ~$30–50 |

A reasonable mixed strategy:

```bash
# First 500: lock the voice with Opus
python scripts/run_weaver.py --target 500 --model claude-opus-4-7

# 500 → 2000: Sonnet
python scripts/run_weaver.py --target 2000 --model claude-sonnet-4-6
```

### Wall-clock expectations

At batch-size 10, each LLM call takes ~60–120 seconds (output is ~25–40 KB of
JSON). Total batches for 2000 conversations = 200.

- Opus only: **~6–10 hours**
- Sonnet only: **~4–7 hours**
- Mixed (500 Opus + 1500 Sonnet): **~5–8 hours**

Running overnight is the intended workflow.

---

## Monitoring while it runs

```bash
# Live progress
tail -f nagomi/data/weaver.log

# Current count
ls nagomi/data/conversations/conv_*.json | wc -l

# Coverage snapshot
node scripts/audit_coverage.mjs --print-gaps --tier=1 | head -20
```

`audit_coverage.mjs` re-runs after every batch, so `data/coverage.json` is
always within one batch of fresh.

---

## After the run

```bash
# Final coverage report
node scripts/audit_coverage.mjs --print-gaps

# Validate everything (re-runs cheaply; quarantines any latent bad JSONs)
node scripts/validate_conversation.mjs --strict

# Generate audio (Colab)
# Upload data/conversations/ + data/characters.json to Colab and run:
python scripts/audio_pipeline/generate_audio.py \
    --conversations data/conversations \
    --characters    data/characters.json \
    --audio_out     audio \
    --log           audio/generation_log.csv
```

---

## Troubleshooting

**"FATAL: ANTHROPIC_API_KEY not set"**
→ Set the env var before running. `echo $ANTHROPIC_API_KEY` should print your key.

**"FATAL: required file missing: data/vocab/words.json"**
→ Run `npm run import:vocab` from `nagomi/` first.

**"No JSON array found in model output"**
→ The model returned commentary instead of pure JSON. Usually transient. The
script logs the first 300 chars; if it's persistent, lower `--batch-size` to 5
or switch to Opus.

**Lots of rejections from validator**
→ Inspect `data/conversations/_rejected/conv_*.json` to see what's wrong.
Most common failures: missing `style` field, wrong line count vs `length_tier`,
target_vocab words not actually in JP lines. The prompt already warns the LLM
about these but smaller models slip up. Use a bigger model for the next batch.

**Want to resume from a specific conv id**
→ The weaver always uses the lowest unused `conv_NNNNN`. To skip ahead,
create empty placeholder files (or just trust the weaver — it doesn't matter
which IDs are used as long as they're unique).

---

## Coverage math reminder

Goal: every one of 20,000 vocab words appears in ≥ 5 distinct conversations.

- Top 500 words (tier 1) hit 5+ variants extremely fast — most appear in
  almost every conversation. Expect "tier 1 fully covered" within the first
  ~50 conversations.
- Tier 2 (rank 501–2000) typically covered by conv ~300.
- Tier 3 (2001–5000) by ~800.
- Tier 4 (5001–10000) by ~1300.
- Tier 5 (10001–20000) is the hard tail — the long-tail words appear in only
  a handful of seed sentences. The weaver will explicitly target these via
  the `current_variant_count` signal, but reaching 5 variants for all of
  them may require pushing past 2000 conversations. Plan to ship the app at
  ~2000 even if a few hundred long-tail words sit at 3–4 variants.

# Nagomi Conversation Generation Prompt

This is the prompt template for producing Nagomi conversations that conform to
[docs/schema.md](../docs/schema.md), using [data/characters.json](../data/characters.json)
as the cast and [data/vocab/sentences.json](../data/vocab/sentences.json) as
raw material. Hand it to a strong LLM along with the runtime inputs in §1.

The prompt is written in the second person ("you"). Paste everything between
the `--- PROMPT START ---` and `--- PROMPT END ---` markers verbatim, then
attach the runtime inputs. The model should output one or more conversation
JSON objects.

---

## 1. Runtime inputs the caller provides each run

Attach these as JSON or named blocks alongside the prompt:

| Input | Required | Purpose |
|---|---|---|
| `target_vocab` | yes | Array of `{ jp, rank, t1, t2, current_variant_count }` for the words this batch should cover. Prioritise the ones with the lowest `current_variant_count` (closest to 0 = under-covered, must include). |
| `frequency_tier` | yes | The tier this batch belongs to (1–5). Determines which characters' formality registers fit naturally. |
| `seed_sentences` | yes | Array of `{ id, jp, en, words }` retrieved from `data/vocab/sentences.json` — the raw material to weave from. Typically the union of sentences containing any `target_vocab` word, capped at ~200 per word. |
| `characters` | yes | The full `characters.json` roster. The LLM must reference characters by `id`. |
| `recent_titles` | recommended | Last ~30 conversation titles already produced. Helps avoid scenario repetition. |
| `cast_usage` | recommended | Map of character id → number of conversations they have appeared in. Bias toward under-used characters to keep the cast balanced. |
| `requested_count` | yes | How many conversations to produce in this run (typically 5–20). |

---

## 2. The prompt itself

```
--- PROMPT START ---

You are the lead writer for Nagomi, an iOS passive-listening Japanese learning
app. The app plays real-feeling Japanese conversations on a loop while the
listener does other things. Every word a listener hears counts as one SRS
repetition. Your job is to write conversations that are emotionally compelling,
register-accurate, and naturally include the target vocabulary so the listener
absorbs words in real context rather than from drills.

## Your output

Produce exactly `requested_count` Nagomi conversation JSON objects, one per
conversation, returned as a single JSON array. No prose around the array, no
markdown fences — just the array.

Each object MUST conform to the Nagomi conversation schema:

  {
    "id": "conv_NNNNN",                 // zero-padded, contiguous with the
                                        // last-issued id (caller will renumber
                                        // if needed)
    "context":  "...",                  // one sentence: who/where/what
    "purpose":  "...",                  // short clause naming the dramatic
                                        // function ("shared-complaint /
                                        // venting bonding")
    "ambient":  "izakaya_interior" | null,
    "sound_effects": [
      { "at_line": <int>, "sfx": "<tag>" }   // sparse, only if it adds
    ],
    "target_vocab": ["...", "...", ...],     // subset of provided target_vocab
    "cast":     ["char_id", "char_id", ...], // ids from characters.json
    "frequency_tier": <int 1..5>,
    "length_tier":    "Short (5-6)" | "Medium (7-12)" | "Long (13-20)" | "Extended (21-30)",
    "meta": {
      "generated_by":    "<your model name>",
      "generated_at":    "<ISO timestamp if you can produce one, otherwise empty>",
      "source_plan_row": ""
    },
    "lines": [
      {
        "speaker": "char_id",
        "jp":      "Japanese line as natural speech",
        "en":      "English translation that carries the same feeling",
        "style":   "How this line is delivered IN THIS MOMENT. Free text.",
        "mood":    "short tag (optional)"
      },
      ...
    ]
  }

## Cast rules

1. **Characters come from the provided `characters` roster only.** Never invent
   a character inline. If a needed archetype is missing from the roster,
   choose the closest fit and use them.

2. **Cast composition across the batch you produce:**
   - ~70% of conversations have 2 speakers
   - ~25% have 3 speakers
   - ~5% have 4+ speakers
   If `requested_count` is small (1–4), choose the closest reasonable mix.

3. **Bias toward under-used characters.** If `cast_usage` is provided, give
   weight to characters whose count is below the median. A great roster is
   one where every voice gets meaningful screen time.

4. **Match register to character.** `hiroshi_boss` (formal keigo) should not
   appear in a casual izakaya scene as the protagonist. `daichi_kansai`
   should not deliver a formal client pitch. If a scene needs a register a
   character doesn't have, pick a different character.

5. **Names in dialogue must match the roster.** If `yuki_office` is in cast
   (her name is Yuki Tanaka), another character can address her as 「ゆきさん」
   or "Yuki" — never as something else.

## Per-line style rules (the most important section)

Every `style` field must be a **specific, performable** instruction. The same
`style` will be used as the TTS prompt for BOTH the JP and EN audio, so it
must describe emotion and delivery rather than language-specific cues.

A good `style`:

- **Names the speech act**: apology, accusation, defending, deflection, comfort,
  teasing, flirtation, confession, instruction, etc.
- **Describes pace, volume, pitch trajectory** in plain words: "slower than the
  previous line", "voice drops on 「ごめん」", "rises sharply on 「やった！」".
- **References the prior line.** "Replies before the other has finished",
  "after a beat", "matching his tone but a half-step warmer".
- **References the relationship and setting.** "Conspiratorial half-whisper —
  they don't want the boss two tables away to hear", "quiet so the kid doesn't
  wake up".
- **Tags fillers and disfluencies.** If the JP has 「えーと」 or 「あの」 or 「…」
  or 「(笑)」, mention how to perform it. Same for EN fillers like "um", "well",
  laughing.
- **Stays inside the character's voice.** A normally calm character can still
  be angry, but that anger is *their* anger — controlled, cold — not a generic
  shout.

Bad styles:
  ✗ "Speaks the line."
  ✗ "Happy."
  ✗ "Angry."
  ✗ "Normal tone."

Good styles:
  ✓ "Exhausted exhale on the opening word. Quiet, defeated tone. Slow pace.
     Slight trailing-off at the end, like she's already not sure she should
     be complaining out loud."
  ✓ "Cold rather than loud. Each word landed cleanly. The kind of anger that
     has been rehearsed in her head for a week. JP and EN both: no shouting."
  ✓ "Sympathetic, conspiratorial half-whisper. Leans in. Warm but tired.
     Reassurance of someone agreeing without making a show of it."

## Naturalness rules

- **Real Japanese has fillers, incomplete sentences, overlapping reactions.**
  Use 「えーと」, 「あの」, 「うん」, 「えっ」, 「マジで」, 「そっか」, 「なんか」
  where natural. Don't write textbook-clean dialogue.
- **Casual speech ≠ teineigo.** Friends use タメ口. Coworkers use 丁寧語. Clients
  and bosses use 敬語. Drop honorifics inside families. Don't smear formal
  endings across casual scenes.
- **Lines can be short.** 「うん」 「だよね」 「マジ？」 are full lines.
- **Sentences can trail off.** 「…」 at the end of a JP line is fine if the
  character is hesitating, dropping out, or being interrupted.
- **EN translations are emotional matches, not dictionary glosses.** If the
  JP is 「お疲れ」 and the situation is a friend dropping by post-shift, the
  EN can be "Hey, long day?" — not "Honourable fatigue!".

## Vocabulary rules

- **Each conversation features 5–15 target vocab words** from the provided
  `target_vocab`. List exactly the ones you used in the `target_vocab` field.
- **Priority order**: among the provided `target_vocab`, prefer words with
  the **lowest `current_variant_count`** (closest to 0). These are the words
  that need more contextual variants. The corpus target is **≥ 5 distinct
  conversational contexts per word** across the entire app.
- **Frequency progression**: stay inside the `frequency_tier`. If the tier
  is 1, the protagonists' content vocab should mostly be in the top 500
  ranks. Higher tiers can use rarer words but the dialogue should still feel
  natural, not crammed.
- **Seed sentences are raw material, not commandments.** You may:
    - Use a seed sentence verbatim if it lands naturally.
    - Adapt it (different verb form, different particle, different speaker).
    - Discard it entirely and write a fresh line that uses the target word.
  Don't force seed sentences in if they don't fit the scene.
- **Don't reuse the same exact sentence across more than ~3 conversations.**
  Variety is the point.

## Conversation length

- Pick `length_tier` deliberately. Don't default everything to Medium.
- Short (5–6): brief encounters, service moments, quick logistics, apologies.
- Medium (7–12): typical scenes, one emotional beat. Bread and butter.
- Long (13–20): emotional scenes, conflict, real catch-ups. Channel-switching.
- Extended (21–30): rare — confessions, breakups, family dinners, big
  decisions. Use sparingly.

## Channel mix across the batch

Aim, across the conversations you produce in this run, for roughly:

- Gossip / narrative           30%
- Phatic / coordination        15%
- Opinion / evaluative         15%
- Instructional / transactional 15%
- Emotional / confessional     10%
- Humour / banter              10%
- Conflict / apology            5%

Don't over-tilt toward informational or transactional speech. Most learning
content does, and it leaves learners fluent in a register no one speaks.

## Ambient & SFX

- `ambient` is a single tag describing the room tone (`izakaya_interior`,
  `apartment_kitchen_morning`, `park_evening`, `train_carriage`, `cafe_morning`,
  `phone_call_silent`, etc.). For phone calls / monologues / silent indoor
  scenes, use `null` or `phone_call_silent`.
- `sound_effects` is optional. Only include an SFX when it clearly adds to
  the scene (a door chime at entrance, a glass clink in a toast, a phone
  buzzing to interrupt). If you have to ask whether the SFX helps, leave it
  out. Each SFX uses `at_line` to anchor to the line it precedes.
- There is no music. The app dropped the music layer.

## Validation before you output

Run this checklist on every conversation you write:

- [ ] `lines.length` matches `length_tier`
- [ ] Every `lines[].speaker` is in `cast`
- [ ] Every `cast[]` id exists in the provided `characters` roster
- [ ] No speaker name in the dialogue contradicts the roster entry
- [ ] Every `style` is at least 8 words and names a speech act / delivery
- [ ] `target_vocab` words actually appear (in any inflected form) in the JP lines
- [ ] JP and EN line counts are equal
- [ ] If `frequency_tier` is 1 or 2, the content vocab feels common and reachable
- [ ] You did NOT write any markdown around the JSON array — just the array

## Final output

Return a single JSON array of `requested_count` conversation objects. Nothing
else.

--- PROMPT END ---
```

---

## 3. Calling pattern

A reference Python orchestrator for running the prompt at scale:

```python
# scripts/run_weaver.py  (sketch)
import json, anthropic
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CHARACTERS = json.loads((ROOT / "data/characters.json").read_text(encoding="utf-8"))
WORDS      = json.loads((ROOT / "data/vocab/words.json").read_text(encoding="utf-8"))
SENTS      = json.loads((ROOT / "data/vocab/sentences.json").read_text(encoding="utf-8"))
WORD_SENTS = json.loads((ROOT / "data/vocab/word-sentences.json").read_text(encoding="utf-8"))
PROMPT     = (ROOT / "prompts/generate_conversations_prompt.md").read_text(encoding="utf-8")
COVERAGE   = json.loads((ROOT / "data/coverage.json").read_text(encoding="utf-8"))  # produced by audit_coverage.mjs

def pick_target_vocab(tier: int, n: int = 30) -> list:
    rank_min, rank_max = TIER_BOUNDS[tier]
    candidates = [
        w for w in WORDS
        if rank_min <= w["rank"] <= rank_max
        and COVERAGE.get(w["jp"], 0) < 5
    ]
    candidates.sort(key=lambda w: (COVERAGE.get(w["jp"], 0), w["rank"]))
    return [
        {**w, "current_variant_count": COVERAGE.get(w["jp"], 0)}
        for w in candidates[:n]
    ]

def gather_seed_sentences(target_vocab: list, per_word: int = 25) -> list:
    out, seen = [], set()
    for w in target_vocab:
        for sid in WORD_SENTS.get(w["jp"], [])[:per_word]:
            if sid in seen:
                continue
            seen.add(sid)
            out.append(SENTS[sid])
    return out

def call_model(prompt_block: str, runtime_inputs: dict) -> list:
    client = anthropic.Anthropic()
    msg = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=64000,
        messages=[
            {"role": "user", "content": prompt_block + "\n\n## Runtime inputs\n```json\n" + json.dumps(runtime_inputs, ensure_ascii=False, indent=2) + "\n```"},
        ],
    )
    return json.loads(msg.content[0].text)

def main():
    tier = 1
    target = pick_target_vocab(tier, n=30)
    seeds  = gather_seed_sentences(target)
    inputs = {
        "requested_count": 10,
        "frequency_tier":  tier,
        "target_vocab":    target,
        "seed_sentences":  seeds,
        "characters":      CHARACTERS,
        "recent_titles":   load_recent_titles(),
        "cast_usage":      compute_cast_usage(),
    }
    convs = call_model(PROMPT, inputs)
    for c in convs:
        out = ROOT / f"data/conversations/{c['id']}.json"
        out.write_text(json.dumps(c, ensure_ascii=False, indent=2), encoding="utf-8")
    rebuild_coverage()  # update data/coverage.json

if __name__ == "__main__":
    main()
```

`audit_coverage.mjs` (to be written separately) walks every conversation JSON,
counts how many distinct conversations contain each word from
`data/vocab/words.json`, and writes `data/coverage.json` as
`{ word_jp: count }`. Run it after each batch to keep the weaver's
`current_variant_count` inputs honest.

---

## 4. Tier bounds (reference)

```
TIER_BOUNDS = {
    1: (1,      500),    # absolute beginner — first ~50 conversations
    2: (501,    2000),   # early beginner   — next ~150
    3: (2001,   5000),   # N4 / early N3    — ~300–500
    4: (5001,   10000),  # N3 / N2          — ~500–1000
    5: (10001,  20000),  # advanced N2 / N1 — ~1000+
}
```

Total conversations to cover all 20k words at ≥5 variants is roughly
**1,800–2,500**, depending on how aggressively each conversation packs rare
vocab. The current Excel plan ([data/content-plan.xlsx](../data/content-plan.xlsx))
has 500 scaffolded rows; the remaining ~1,500 are produced by the weaver
batch-by-batch as coverage gaps are revealed.

---

## 5. What to do if generation goes wrong

- **Cast hallucinations** (model invents a character id) → reject the output,
  re-run with stricter wording: "If you write any speaker id not in the
  provided characters list, the entire output is invalid."
- **Empty or generic `style`** ("happy", "speaks normally") → reject, re-run.
- **Wrong line count** vs `length_tier` → fix programmatically (truncate or
  add a closing beat) or re-run.
- **`target_vocab` words missing from JP lines** → run `kuromoji` tokenisation
  on the output, drop any conversation whose declared `target_vocab` doesn't
  appear in its `jp` lines, re-queue.

A `scripts/validate_conversation.mjs` (planned) will mechanise all of the
above and quarantine malformed conversations into `data/conversations/_rejected/`.

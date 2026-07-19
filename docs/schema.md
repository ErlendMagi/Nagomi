# Nagomi Conversation Schema

This document defines the JSON schema for a single Nagomi conversation — the
unit of audio content the app plays. Every conversation produced by the LLM
weaver, by hand, or by any other process MUST conform to this schema. The
audio pipeline ([scripts/audio_pipeline/generate_audio.py](../scripts/audio_pipeline/generate_audio.py))
expects exactly this format.

---

## 1. File layout

One conversation = one JSON file.

```
nagomi/data/conversations/
  conv_00001.json
  conv_00002.json
  conv_00003.json
  ...
```

The audio pipeline accepts a folder of these and processes them unattended.
IDs are zero-padded to 5 digits so they sort correctly.

---

## 2. Top-level fields

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | string | yes | `conv_NNNNN`, zero-padded. Must match filename (`conv_00042.json`). |
| `context` | string | yes | One-sentence situational summary (who/where/what is happening). Read by the narrator and used as TTS scene-setter. |
| `purpose` | string | yes | The conversation's dramatic function: `"shared-complaint / venting bonding — strengthens friendship"`, `"comfort + intervention"`, `"transactional with humour"`. Short clause. |
| `ambient` | string \| null | yes | Ambient sound tag (e.g. `"izakaya_interior"`, `"train_station_night"`). Mixed under dialogue at low volume. `null` for silent / phone-call scenes. |
| `sound_effects` | array | no | Line-aligned SFX. See §4. Optional. |
| `target_vocab` | string[] | yes | Vocab words this conversation is meant to expose / reinforce. Drawn from `data/vocab/words.json`. Drives coverage tracking (§7). |
| `cast` | string[] | yes | Character roster IDs (from [characters.json](../data/characters.json)). All `lines[].speaker` values MUST be in `cast`. |
| `lines` | object[] | yes | The dialogue. See §3. |
| `frequency_tier` | integer | yes | 1–5. Which vocabulary tier this conversation primarily serves (§7). Drives playback order. |
| `length_tier` | string | yes | `"Short (5-6)"` / `"Medium (7-12)"` / `"Long (13-20)"` / `"Extended (21-30)"`. Must match `lines.length`. |
| `meta` | object | no | Provenance — `{ "generated_by": "...", "generated_at": "ISO timestamp", "source_plan_row": "conv_XXX" }`. Optional but recommended for traceability. |

---

## 3. Lines

Each entry in `lines` is:

| Field | Type | Required | Description |
|---|---|---|---|
| `speaker` | string | yes | Character roster ID. Must be in `cast`. |
| `jp` | string | yes | The Japanese line, naturally written (with fillers, punctuation, particles). |
| `en` | string | yes | English translation. Same emotional shape as the JP line — not a textbook gloss. |
| `style` | string | yes | Free-text TTS instruction for HOW this line is delivered in this moment. Used identically for JP and EN audio (§5). |
| `words` | string[] | no | Optional. Vocab words actually present in this `jp` line (subset of `target_vocab`). Filled by the post-processor; weaver may omit. |
| `mood` | string | no | Optional shorthand tag (e.g. `"exhausted"`, `"teasing"`). Redundant with `style` but useful for debugging / search. |

---

## 4. Sound effects

Optional. Each SFX is line-aligned:

```json
"sound_effects": [
  { "at_line": 0, "sfx": "door_chime" },
  { "at_line": 3, "sfx": "glass_clink" }
]
```

- `at_line` is the zero-based index in `lines` — the SFX fires **just before** that line plays.
- `sfx` is a tag matching a file in the SFX library (`data/sfx/<sfx>.wav`).
- All SFX files must be CC0 / royalty-free.
- Use sparingly. If you have to ask whether an SFX adds to the scene, leave it out.

---

## 5. Per-line style rules (the heart of the system)

`style` is the most important field in this schema. It tells the TTS how to
perform the line **in this specific moment**, layered on top of the character's
baseline voice profile. The final TTS `instruct` prompt for any line is:

```python
jp_instruct = f"{character.jp_voice_profile} {line.style}"
en_instruct = f"{character.en_voice_profile} {line.style}"
```

`style` must:

- **React to the conversation context.** Same character speaks differently at a funeral and at karaoke.
- **React to what was just said.** A reply to an accusation is performed differently than a reply to a joke.
- **React to the character's personality.** A normally calm character can still be angry, but that anger is *their* anger — tighter, quieter — not a generic shout.
- **Be identical for JP and EN audio.** The English narrator performs the line with the same emotional shape, even though the voice and accent differ. This makes the translation feel like the same moment, not a flat readout.
- **Tag fillers and disfluencies.** If the line has `えーと` or `…` or `(laughs)`, mention how to perform it. The TTS needs to know this isn't a clean read.
- **Cover the speech act.** Apology, flirtation, accusation, comforting, deflection, teasing — name it so the TTS knows what kind of energy to land.

### Style examples (good vs bad)

| Bad | Good |
|---|---|
| `"Speaks the line."` | `"Quiet, defeated tone, slow pace, slight trailing-off at the end. The exhale of someone who already knew it was going to be a bad meeting."` |
| `"Happy."` | `"Bright lift on 「やった！」, half a step louder than the previous line, words running into each other with genuine surprise."` |
| `"Angry."` | `"Cold rather than loud. Each word landed cleanly. The kind of anger that has been rehearsed in her head for a week. JP and EN both: no shouting, no shaking."` |
| `"Sad."` | `"Voice catches mid-sentence, recovers, finishes quieter than it started. A small swallow before 「ごめん」. Don't perform crying — perform someone trying not to."` |

---

## 6. Cast composition rules

Drawn from real Japanese conversation patterns:

- **~70%** of conversations: **2 speakers**
- **~25%**: **3 speakers**
- **~5%**: **4+ speakers** (family dinners, group plans, meetings)

All speakers must be drawn from [`data/characters.json`](../data/characters.json)
by ID. Do not invent characters inline. If a conversation needs an archetype
not in the roster, the roster must be extended first — and any new character
gets the full voice profile per the character spec.

**Names in dialogue must match the roster.** If a speaker is `yuki_office`
(name: Yuki Tanaka), another speaker can address her as `ゆきさん` in JP and
`Yuki` in EN. Don't introduce a different name for the same character ID.

---

## 7. Vocabulary coverage rules

The corpus-wide goal is that **every one of the 20,000 vocab words in
`data/vocab/words.json` appears in at least 5 different conversations**, with
the introduction order roughly tracking frequency rank.

### Frequency tiers

| Tier | Word rank range | Typical user state | Conversations targeting this tier |
|---|---|---|---|
| 1 | 1 – 500 | absolute beginner | first ~50 conversations played |
| 2 | 501 – 2000 | early beginner | next ~150 |
| 3 | 2001 – 5000 | intermediate (N4/N3) | ~300–500 |
| 4 | 5001 – 10000 | upper intermediate (N3/N2) | ~500–1000 |
| 5 | 10001 – 20000 | advanced (N2/N1) | ~1000+ |

Each conversation declares its `frequency_tier`. The player sequences
conversations in tier order so common words land first and rare words appear
once the listener has the base context. Within a tier, conversations are
shuffled.

### Coverage tracking

A separate `coverage.json` (built post-hoc by `scripts/audit_coverage.mjs`)
tracks how many conversations contain each word. A word is "covered" once
that count ≥ 5. The weaving prompt receives a list of under-covered words
prioritised by current rank + variant count, and is asked to bias `target_vocab`
toward them.

### Sentence reuse

The 70k deduplicated seed sentences in `data/vocab/sentences.json` are the
primary raw material. The weaver should:

1. For each target word, retrieve candidate seed sentences via the inverted
   index in `data/vocab/word-sentences.json`.
2. Pick / lightly edit sentences that fit the conversation's context, cast,
   and emotional arc.
3. Add connective lines (greetings, reactions, follow-ups) where needed.
4. Avoid using the same sentence verbatim across more than ~3 conversations —
   variety is the point.

---

## 8. Worked example: 2-speaker conversation

```json
{
  "id": "conv_00042",
  "context": "Two coworkers at a Tokyo izakaya after work, decompressing about a difficult meeting with a senior client.",
  "purpose": "shared-complaint / venting bonding — strengthens friendship",
  "ambient": "izakaya_interior",
  "sound_effects": [
    { "at_line": 0, "sfx": "glass_clink" }
  ],
  "target_vocab": ["疲れる", "打ち合わせ", "本当に", "厳しい", "わかる", "上司", "また", "明日"],
  "cast": ["yuki_office", "kenji_office"],
  "frequency_tier": 1,
  "length_tier": "Medium (7-12)",
  "meta": {
    "generated_by": "claude-3.7-sonnet via weaver prompt v1.0",
    "generated_at": "2026-05-26T19:42:11Z",
    "source_plan_row": "conv_043"
  },
  "lines": [
    {
      "speaker": "yuki_office",
      "jp": "今日の打ち合わせ、本当に疲れた…",
      "en": "Today's meeting really wore me out…",
      "style": "Exhausted exhale on the opening word. Quiet, defeated tone. Slow pace. Slight trailing-off at the end, like she's already not sure she should be complaining out loud.",
      "mood": "exhausted"
    },
    {
      "speaker": "kenji_office",
      "jp": "わかる。あの人、ちょっと厳しすぎだよね。",
      "en": "I get it. That guy is a bit too harsh, isn't he.",
      "style": "Sympathetic, conspiratorial half-whisper, leaning in. Warm but tired. The reassurance of someone agreeing without making a show of it.",
      "mood": "sympathetic"
    },
    {
      "speaker": "yuki_office",
      "jp": "なんか、私のせいって感じで言ってきて…",
      "en": "It kind of felt like he was making it sound like it was my fault…",
      "style": "Quiet hurt under the surface. Words come slightly hesitant, as if she's checking herself for being unfair. Soft fadeout on the final particle.",
      "mood": "wounded"
    },
    {
      "speaker": "kenji_office",
      "jp": "それは違うって。誰がどう見てもさ。",
      "en": "That's not on you. Anyone could see it.",
      "style": "Firmer this time. Light tap of conviction on 「違う」. Still warm — not lecturing, defending. Eye-contact level steady.",
      "mood": "defending"
    },
    {
      "speaker": "yuki_office",
      "jp": "ありがとう。…ちょっと飲も。",
      "en": "Thanks. …Let's drink a little.",
      "style": "A small recovered smile in the voice. The thanks is quiet and real. The second clause is lighter, a deliberate shift toward okay-ness.",
      "mood": "recovering"
    },
    {
      "speaker": "kenji_office",
      "jp": "うん、飲も飲も。明日も上司に呼ばれてるしね。",
      "en": "Yeah, let's. We're called to the boss again tomorrow anyway.",
      "style": "Wry laugh inside the voice. A shared groan that's also a joke. Lift on 「明日も」 for the punchline.",
      "mood": "wry"
    }
  ]
}
```

Things to notice:
- Every `speaker` is in `cast` and exists in `characters.json`.
- The EN translations carry the same emotional weight as the JP; they're not literal.
- `style` is specific enough that the same instruction would land identically across JP and EN voices.
- `target_vocab` is short (8 words) — the conversation isn't a vocab drill, the words land naturally in real lines.
- `mood` is optional but useful for grep / debug.

---

## 9. Worked example: 3-speaker conversation

```json
{
  "id": "conv_00128",
  "context": "Saturday morning at home. Mom is packing lunch, Dad is on the floor with the cat, and their 8-year-old has just noticed something missing.",
  "purpose": "domestic comedy / shared problem-solving — light family warmth",
  "ambient": "apartment_kitchen_morning",
  "sound_effects": [],
  "target_vocab": ["どこ", "見る", "本当に", "また", "テレビ", "後ろ", "ある", "見つける"],
  "cast": ["yumiko_mom", "ryosuke_dad", "hina_child"],
  "frequency_tier": 1,
  "length_tier": "Medium (7-12)",
  "meta": {
    "generated_by": "claude-3.7-sonnet via weaver prompt v1.0",
    "generated_at": "2026-05-26T19:48:07Z",
    "source_plan_row": "conv_181"
  },
  "lines": [
    {
      "speaker": "hina_child",
      "jp": "ねえ、私のうさぎ、どこ？",
      "en": "Hey, where's my bunny?",
      "style": "Mild morning urgency from an eight-year-old. Voice lifts at the end. Not yet upset — just locating an adult to delegate to.",
      "mood": "asking"
    },
    {
      "speaker": "yumiko_mom",
      "jp": "うさぎ？昨日どこに置いた？",
      "en": "Your bunny? Where did you put it yesterday?",
      "style": "Practiced mom-tone: half-listening, hands still working. The question is gentle but already redirecting the search back to the kid.",
      "mood": "efficient"
    },
    {
      "speaker": "hina_child",
      "jp": "わかんない！本当にないんだもん。",
      "en": "I dunno! It's really not anywhere.",
      "style": "Volume up half a notch. A tiny stamp inside the voice. Borderline tears but not crossed yet.",
      "mood": "escalating"
    },
    {
      "speaker": "ryosuke_dad",
      "jp": "テレビの後ろ、見てごらん。多分あそこ。",
      "en": "Look behind the TV. It's probably there.",
      "style": "Warm, calm, half-laughing. The voice of someone who has run this exact rescue before. From floor level, unhurried.",
      "mood": "amused"
    },
    {
      "speaker": "hina_child",
      "jp": "あっ！…あった！",
      "en": "Oh! …Found it!",
      "style": "Pure relief, sharp lift on 「あっ」, then quieter, almost embarrassed by her own panic.",
      "mood": "relieved"
    },
    {
      "speaker": "yumiko_mom",
      "jp": "ね、また同じところでしょ。",
      "en": "See? Same place as always.",
      "style": "Half-smile in the tone. Light teasing, no edge. The 「ね」 is the warm I-told-you-so.",
      "mood": "teasing"
    },
    {
      "speaker": "ryosuke_dad",
      "jp": "見つけたら、ありがとうは？",
      "en": "If you found it, what about a thank-you?",
      "style": "Mock-serious, eyebrows raised in the voice. The dad joke energy of someone fishing for affection.",
      "mood": "playful"
    },
    {
      "speaker": "hina_child",
      "jp": "ありがとう、お父さん！",
      "en": "Thank you, Daddy!",
      "style": "Loud, theatrical, performing it back at him. Both of them in on the bit.",
      "mood": "performative"
    }
  ]
}
```

Things to notice:
- Three speakers, all from the roster.
- The kid's voice escalates and recovers naturally — that arc is in `style`, not in the JP text alone.
- The dad and mom have distinct beats; the conversation isn't just two parents in chorus.
- SFX list is empty — the scene doesn't need them.

---

## 10. Validation checklist

Before a conversation JSON is considered ready for the audio pipeline:

- [ ] `id` matches filename
- [ ] `length_tier` matches `lines.length`
- [ ] `frequency_tier` ∈ {1, 2, 3, 4, 5}
- [ ] Every `lines[].speaker` is in `cast`
- [ ] Every `cast[]` ID exists in `data/characters.json`
- [ ] No speaker name is invented inline that doesn't match its roster ID
- [ ] Every `lines[]` has a non-trivial `style` (more than 5 words, references emotion or delivery)
- [ ] JP and EN line counts match (one EN per JP)
- [ ] `target_vocab` ⊆ `data/vocab/words.json`
- [ ] If `ambient` is set, it points to a real file in `data/ambient/`
- [ ] If `sound_effects` is set, every `sfx` tag has a file in `data/sfx/` and every `at_line` is a valid index

A future `scripts/validate_conversation.mjs` will enforce all of these.

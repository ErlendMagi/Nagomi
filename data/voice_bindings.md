# Voice Bindings — Azure Neural HD (commercial-clean)

**Status:** v2 — pivoted to Azure-only after the license verify workflow on 2026-06-25 found Inworld TTS-2 to have a delete-on-termination clause (Section 13, no survival) and MiniMax via fal.ai to fail the "any ambiguity is a fail" bar.

**Provider:** Microsoft Azure Speech Service, S0 (Pay-as-you-go) tier, prebuilt Dragon HD voices only.

**License posture:** Rendered audio is Customer Data in perpetuity, survives subscription cancellation, no MAU or revenue triggers, no attribution to Microsoft required. Mandatory: user-facing AI-voice disclosure in App Store listing + onboarding + Settings > About.

## Voice pool (user-validated 2026-06-25)

13 voices passed a same-line A/B/C audition on `今日、本当に長かったね…`. Chinese (zh-CN) Dragon HD voices were rejected because they tokenize JP text as Chinese. Indian-English (en-IN) voices were rejected as too foreign.

### Native JP HD (2)

| Voice | Gender | Notes |
|---|---|---|
| `ja-JP-Nanami:DragonHDLatestNeural` | F | Best-of-set native JP female. Hero slot. |
| `ja-JP-Masaru:DragonHDLatestNeural` | M | Best-of-set native JP male. Hero slot. |

### Korean Dragon HD speaking JP (2)

| Voice | Gender | Notes |
|---|---|---|
| `ko-KR-SunHi:DragonHDLatestNeural` | F | Strong JP delivery (Korean → JP shares phonology). |
| `ko-KR-Hyunsu:DragonHDLatestNeural` | M | Strong JP delivery. |

### Native-EN Dragon HD speaking JP (9)

User feedback: "good enough" on JP. Subtle non-native flavor on some, but well within shippable for supporting cast.

| Voice | Gender | Notes |
|---|---|---|
| `en-US-Ava:DragonHDLatestNeural` | F | "Best" per user; slightly slow pace baseline. |
| `en-US-Emma:DragonHDLatestNeural` | F | Warm, friendly young US female. |
| `en-US-Phoebe:DragonHDOmniLatestNeural` | F | Omni line. Mature US female. |
| `en-GB-Sonia:DragonHDLatestNeural` | F | Soft UK female; pairs well with intimate styles. |
| `en-US-Andrew:DragonHDLatestNeural` | M | Flagship US male. |
| `en-US-Davis:DragonHDLatestNeural` | M | Mid-range US male, slightly deeper. |
| `en-US-Juno:DragonHDLatestNeural` | M | Young-leaning US male. |
| `en-US-Steffan:DragonHDLatestNeural` | M | Mature US male, authority. |
| `en-GB-Ryan:DragonHDLatestNeural` | M | UK male; paternal warmth. |

## Cross-language design (v3, 2026-06-26)

**Rule:** every character uses the SAME voice for BOTH languages. User direction 2026-06-26: voice consistency across languages matters more for listener comprehension ("easier to understand it is the same person speaking") than picking the per-language best voice.

Tradeoff accepted: 6 characters that previously had a paired native-EN voice on the EN side now use their JP voice in EN as well. Dragon HD voices are designed multilingual and the EN output of `ja-JP-Nanami` / `ja-JP-Masaru` / `ko-KR-SunHi` / `ko-KR-Hyunsu` was verified shippable on a render-test (`audio/jp_voices_in_en_test/`).

Affected characters:
- `yuki_office`: EN was Ava → now Nanami
- `yumiko_mom`: EN was Ava → now Nanami
- `kenji_office`: EN was Andrew → now Masaru
- `tatsuya_country`: EN was Andrew → now Masaru
- `hina_child`: EN was Emma → now SunHi
- `goro_grandpa`: EN was Davis → now Hyunsu

All other characters were already same-voice-both-langs.

## Character → Voice mapping (DRAFT — pending audition gate review)

### Female (11 chars on 6 voices, max 2 per voice)

| Char | JP voice | JP rate / pitch / style hint | EN voice | EN rate / pitch |
|---|---|---|---|---|
| `hina_child` (F, 8) | `ko-KR-SunHi` | +15% / +30Hz / bright | `en-US-Emma` | +15% / +30Hz |
| `sakura_teen` (F, 16, Kansai) | `en-US-Ava` | +5% / +5Hz / wry | `en-US-Ava` | +5% / +5Hz |
| `yuki_office` (F, late 20s) | `ja-JP-Nanami` | 0% / 0Hz / hero baseline | `en-US-Ava` | 0% / 0Hz |
| `aoi_barista` (F, mid 20s) | `en-US-Emma` | +5% / +5Hz / friendly | `en-US-Emma` | +5% / +5Hz |
| `mei_romantic` (F, mid 20s) | `en-GB-Sonia` | -5% / -5Hz / gentle | `en-GB-Sonia` | -5% / -5Hz |
| `yumiko_mom` (F, early 40s) | `ja-JP-Nanami` | -5% / -5Hz / warm mother | `en-US-Ava` | -5% / -5Hz |
| `naoko_aunt` (F, early 50s) | `en-US-Phoebe` | -5% / -10Hz / mature | `en-US-Phoebe` | -5% / -10Hz |
| `asuka_teacher` (F, mid 30s) | `en-US-Ava` | -5% / 0Hz / professional | `en-US-Ava` | -5% / 0Hz |
| `sachiko_grandma` (F, early 70s) | `ko-KR-SunHi` | -15% / -20Hz / fragile gentle | `en-US-Emma` | -15% / -20Hz |
| `mrs_mori_neighbor` (F, late 60s) | `en-GB-Sonia` | -10% / -15Hz / kindly older | `en-GB-Sonia` | -10% / -15Hz |
| `saito_doctor` (F, late 40s) | `en-US-Emma` | -5% / -5Hz / clinical calm | `en-US-Emma` | -5% / -5Hz |

### Male (11 chars on 7 voices, max 2 per voice)

| Char | JP voice | JP rate / pitch / style hint | EN voice | EN rate / pitch |
|---|---|---|---|---|
| `sho_child` (M, 6) | `ko-KR-Hyunsu` | +20% / +50Hz / bright boy | `en-US-Davis` | +20% / +50Hz |
| `riku_teen` (M, 15) | `en-US-Juno` | +10% / +20Hz / energetic | `en-US-Juno` | +10% / +20Hz |
| `kenji_office` (M, late 20s) | `ja-JP-Masaru` | 0% / 0Hz / hero baseline | `en-US-Andrew` | 0% / 0Hz |
| `daichi_kansai` (M, late 20s, Kansai) | `en-US-Andrew` | +5% / 0Hz / lively | `en-US-Andrew` | +5% / 0Hz |
| `ren_uni` (M, early 20s) | `en-US-Davis` | +5% / +5Hz / curious | `en-US-Davis` | +5% / +5Hz |
| `hiroshi_boss` (M, early 50s) | `en-US-Steffan` | -5% / -10Hz / authoritative | `en-US-Steffan` | -5% / -10Hz |
| `ryosuke_dad` (M, late 30s) | `en-GB-Ryan` | 0% / -5Hz / paternal | `en-GB-Ryan` | 0% / -5Hz |
| `tatsuya_country` (M, mid 50s) | `ja-JP-Masaru` | -10% / -15Hz / slower country | `en-US-Andrew` | -10% / -15Hz |
| `goro_grandpa` (M, late 70s) | `ko-KR-Hyunsu` | -20% / -20Hz / weathered | `en-US-Davis` | -20% / -20Hz |
| `hiroshi_elder` (M, early 70s) | `en-US-Steffan` | -15% / -20Hz / venerable | `en-US-Steffan` | -15% / -20Hz |
| `takeda_officer` (M, mid 30s) | `en-US-Andrew` | -5% / -10Hz / official | `en-US-Andrew` | -5% / -10Hz |

## JP voice sharing summary

| Voice | Chars (JP) | Differentiation strategy |
|---|---|---|
| `ja-JP-Nanami` | yuki_office, yumiko_mom (2) | Mom slower + lower than baseline yuki |
| `ja-JP-Masaru` | kenji_office, tatsuya_country (2) | Country much slower + lower |
| `ko-KR-SunHi` | hina_child, sachiko_grandma (2) | Child pitched WAY up; grandma pitched WAY down — same base voice, opposite ends |
| `ko-KR-Hyunsu` | sho_child, goro_grandpa (2) | Same child/grandpa split |
| `en-US-Ava` | sakura_teen, asuka_teacher (2) | Teen wry/fast; teacher professional/measured |
| `en-US-Emma` | aoi_barista, saito_doctor (2) | Barista friendly; doctor clinical |
| `en-US-Phoebe` | naoko_aunt (1) | unique |
| `en-GB-Sonia` | mei_romantic, mrs_mori_neighbor (2) | Romantic gentle; neighbor older |
| `en-US-Andrew` | daichi_kansai, takeda_officer (2) | Kansai lively; officer measured |
| `en-US-Davis` | ren_uni (1) | unique |
| `en-US-Juno` | riku_teen (1) | unique |
| `en-US-Steffan` | hiroshi_boss, hiroshi_elder (2) | Boss authoritative; elder weathered |
| `en-GB-Ryan` | ryosuke_dad (1) | unique |

**Stats:** 22 characters on 13 voices = 1.69x average sharing, 2x max per voice. 5 characters get unique voices.

## Cost math (rate-card)

- Azure Neural HD: $22 / 1M chars (post-March 2026)
- Render volume (after Phase 1b LLM rewrite): ~7M chars total (JP + EN combined)
- **Estimated cost: ~$154**
- **Azure credit balance: $170 (29 days)** → render fits inside the credit window if we complete within 29 days, **zero out-of-pocket**.

## Prerequisites before any keepable render

1. Switch Azure resource `nagomi-speech-eb` from `Free F0` to `Standard S0` pricing tier. F0 output is non-commercial only.
2. Add user-facing AI-voice disclosure (App Store listing + onboarding screen + Settings > About).
3. Phase 1b LLM rewrite of the ~4098 padded conversations must complete before any audio render (current `en` and `style` fields on those convs are degraded — see `cleanup_audit.jsonl`).

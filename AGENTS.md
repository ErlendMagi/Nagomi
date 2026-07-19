# Nagomi — agent guide

**Read HANDOFF.md first** — it is the project's memory: current state, standing user rules (money gate, quality bar, build stamps), art-pipeline lockins, hard-won invariants, and open items. Everything below supplements it.

## Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v56.0.0/ before writing any code.

## Quick commands
- Gates: `npx tsc --noEmit` and `npx jest --silent` (must both pass before any build).
- Install: `npm install --legacy-peer-deps` (peer conflicts otherwise).
- APK: push to master → GitHub Actions attaches `nagomi.apk` to the rolling `latest` release. Locally: `cd android && ./gradlew assembleRelease` (JDK 17).
- Art pipeline: `node scripts/art_pipeline/generate_art.mjs ledger` shows spend; NEVER generate without checking HANDOFF.md's money-gate section.

#!/usr/bin/env node
// Illustrated-character art pipeline (user-approved 2026-07-20, HARD $50 CAP).
// Builds every prompt from data/art_bible.json and drives the Gemini image
// API. Raw renders land in art_raw/ for VISION REVIEW before anything is
// post-processed into assets/ — nothing unreviewed ever ships.
//
// Usage:
//   node scripts/art_pipeline/generate_art.mjs bases              # 22 base sheets (premium model)
//   node scripts/art_pipeline/generate_art.mjs variants [id ...]  # 12 frames per approved base (standard model)
//   node scripts/art_pipeline/generate_art.mjs backgrounds        # 22 ambient-family scenes (premium)
//   node scripts/art_pipeline/generate_art.mjs ledger             # show spend
//
// THE LEDGER (data/art_ledger.json) is the budget guarantee: every API call
// appends its estimated cost BEFORE the request fires, and any batch that
// would push the total past HARD_CAP_USD refuses to start. The cap is the
// user's explicit instruction: "at max $50, and the price CAN NOT exceed
// this amount."
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { generateImage, generateWithStyleRef, editImage, precheckKey, EST_USD } from './lib/gemini_image.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const BIBLE = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'art_bible.json'), 'utf8'))
const LEDGER_PATH = path.join(ROOT, 'data', 'art_ledger.json')
const RAW = path.join(ROOT, 'art_raw')

export const HARD_CAP_USD = 50

function ledger() {
  try { return JSON.parse(fs.readFileSync(LEDGER_PATH, 'utf8')) } catch { return { entries: [], totalUsd: 0 } }
}
function chargeOrRefuse(model, images, label) {
  const l = ledger()
  const est = EST_USD[model] * images
  if (l.totalUsd + est > HARD_CAP_USD) {
    throw new Error(`LEDGER REFUSAL: ${label} would cost ~$${est.toFixed(2)} `
      + `but only $${(HARD_CAP_USD - l.totalUsd).toFixed(2)} of the $${HARD_CAP_USD} cap remains. Nothing was generated.`)
  }
  l.entries.push({ at: new Date().toISOString(), model, images, estUsd: est, label })
  l.totalUsd = Math.round((l.totalUsd + est) * 1000) / 1000
  fs.writeFileSync(LEDGER_PATH, JSON.stringify(l, null, 1))
  return l.totalUsd
}

const charFor = id => BIBLE.characters.find(c => c.id === id)

function basePrompt(c) {
  const facing = c.face === 'camera-left' ? "the viewer's left" : "the viewer's right"
  return `${BIBLE.styleBlock}\n\nCharacter, facing slightly toward ${facing}: ${c.visual}\nAccent palette: ${c.palette.join(', ')}. Neutral relaxed expression (${c.reactions.neutral}), mouth closed, standing full-body pose.`
}
function variantPrompt(c, expression, mouth) {
  return `Same character, identical outfit, identical style, identical framing and pose base. `
    + `Change ONLY the facial expression and body language to: ${expression} — ${c.reactions[expression]}. `
    + `Mouth ${mouth === 'open' ? 'OPEN mid-speech (talking frame)' : 'closed'}. `
    + (c.variantNote ? `${c.variantNote} ` : '')
    + `No text, no words, no speech bubbles anywhere in the image.`
}
function bgPrompt(scene) {
  // portrait-first: phones are the target surface (user 2026-07-20); the 2:3
  // frame with a center-band composition crops safely to 9:16 and tablet 4:3
  return `${BIBLE.backgroundStyleBlock}\n\nScene: ${scene}. Tall portrait 2:3 composition. The scene FILLS the entire tall frame edge to edge — absolutely no letterboxing, no borders, no empty bands: use the vertical height naturally (ceiling or sky continues above, floor or ground continues below). Focal elements sit in the vertical middle band.`
}

async function run() {
  const mode = process.argv[2]
  fs.mkdirSync(RAW, { recursive: true })
  // key BEFORE ledger: a failed run must never record phantom spend
  if (mode === 'bases' || mode === 'variants' || mode === 'backgrounds') precheckKey()

  if (mode === 'ledger') {
    const l = ledger()
    console.log(`spent ~$${l.totalUsd} of $${HARD_CAP_USD} across ${l.entries.length} batches`)
    for (const e of l.entries.slice(-10)) console.log(` ${e.at} ${e.label} $${e.estUsd.toFixed(2)}`)
    return
  }

  if (mode === 'bases') {
    const only = process.argv.slice(3)
    const chars = only.length ? only.map(charFor).filter(Boolean) : BIBLE.characters
    const pending = chars.filter(c => !fs.existsSync(path.join(RAW, 'bases', `${c.id}.png`)))
    if (!pending.length) { console.log('all requested bases exist'); return }
    const total = chargeOrRefuse('premium', pending.length, `base sheets x${pending.length}`)
    console.log(`ledger now ~$${total}`)
    // STYLE ANCHOR: every base is conditioned on the user-approved Sakura render
    // (art_raw/style_ref.png) — prompt-only style proved to drift per character
    const styleRef = path.join(RAW, 'style_ref.png')
    for (const c of chars) {
      const out = path.join(RAW, 'bases', `${c.id}.png`)
      if (fs.existsSync(out)) { console.log(`skip ${c.id} (exists)`); continue }
      if (fs.existsSync(styleRef)) await generateWithStyleRef('premium', styleRef, basePrompt(c), out)
      else await generateImage('premium', basePrompt(c), out)
      console.log(`base ${c.id} -> ${out}`)
    }
    console.log('REVIEW GATE: inspect art_raw/bases/*.png (Read tool) before running variants.')
    return
  }

  if (mode === 'variants') {
    const only = process.argv.slice(3)
    const chars = only.length ? only.map(charFor).filter(Boolean) : BIBLE.characters
    // charge only frames that don't exist yet — re-runs must not double-charge
    let pendingFrames = 0
    for (const c of chars)
      for (const expression of BIBLE._meta.expressions)
        for (const mouth of BIBLE._meta.mouths)
          if (!fs.existsSync(path.join(RAW, 'variants', c.id, `${expression}_${mouth}.png`))) pendingFrames++
    if (!pendingFrames) { console.log('all requested variants exist'); return }
    const total = chargeOrRefuse('standard', pendingFrames, `variants ${chars.length} chars, ${pendingFrames} frames`)
    console.log(`ledger now ~$${total}`)
    let failed = 0
    for (const c of chars) {
      // cropped single-figure bases are the production input; raw sheets fallback
      const cropped = path.join(RAW, 'bases_cropped', `${c.id}.png`)
      const base = fs.existsSync(cropped) ? cropped : path.join(RAW, 'bases', `${c.id}.png`)
      if (!fs.existsSync(base)) { console.log(`NO BASE for ${c.id} — skipped`); continue }
      for (const expression of BIBLE._meta.expressions) {
        for (const mouth of BIBLE._meta.mouths) {
          const out = path.join(RAW, 'variants', c.id, `${expression}_${mouth}.png`)
          if (fs.existsSync(out)) continue
          // long unattended run: a single failed frame must not kill the batch —
          // missing frames are re-runnable later because existing files skip
          try {
            await editImage('standard', base, variantPrompt(c, expression, mouth), out)
            console.log(`variant ${c.id}/${expression}_${mouth}`)
          } catch (e) {
            failed++
            console.log(`FAILED ${c.id}/${expression}_${mouth}: ${e.message.slice(0, 120)}`)
          }
        }
      }
    }
    if (failed) console.log(`${failed} frames failed — re-run the same command to retry just those`)
    console.log('REVIEW GATE: inspect art_raw/variants/** before post-processing into assets/.')
    return
  }

  if (mode === 'backgrounds') {
    const only = process.argv.slice(3)
    let scenes = Object.entries(BIBLE.backgrounds.scenes)
    if (only.length) scenes = scenes.filter(([family]) => only.includes(family))
    const pending = scenes.filter(([family]) => !fs.existsSync(path.join(RAW, 'bg', `${family}.png`)))
    if (!pending.length) { console.log('all requested backgrounds exist'); return }
    const total = chargeOrRefuse('premium', pending.length, `backgrounds x${pending.length}`)
    console.log(`ledger now ~$${total}`)
    for (const [family, scene] of pending) {
      const out = path.join(RAW, 'bg', `${family}.png`)
      await generateImage('premium', bgPrompt(scene), out, { aspect: '2:3' })
      console.log(`bg ${family}`)
    }
    return
  }

  console.log('usage: generate_art.mjs bases|variants [ids]|backgrounds|ledger')
}

run().catch(e => { console.error(e.message); process.exit(1) })

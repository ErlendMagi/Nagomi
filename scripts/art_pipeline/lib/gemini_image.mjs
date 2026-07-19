// Minimal Gemini image API driver (art pipeline). Reads GEMINI_API_KEY from
// nagomi/.env. Two tiers: 'premium' for the quality-critical one-offs (base
// sheets, backgrounds), 'standard' for the volume edit-variants. EST_USD is
// the ledger's per-image estimate — deliberately rounded UP so the $50 hard
// cap can never be undershot by estimation error.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..')

export const MODELS = {
  premium: 'gemini-3-pro-image-preview',
  standard: 'gemini-2.5-flash-image',
}
/** rounded-UP per-image estimates (researched 2026-07: flash ≈$0.039@1024,
 *  pro ≈$0.134@1-2K) — headroom keeps the ledger conservative */
export const EST_USD = { premium: 0.15, standard: 0.05 }

/** throws early when the key is absent — callers MUST precheck before any
 *  ledger charge, or a failed run records phantom spend */
export function precheckKey() { apiKey() }

function apiKey() {
  const env = Object.fromEntries(
    fs.readFileSync(path.join(ROOT, '.env'), 'utf8')
      .split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'))
      .map(l => { const i = l.indexOf('='); return [l.slice(0, i), l.slice(i + 1)] }))
  if (!env.GEMINI_API_KEY) throw new Error('GEMINI_API_KEY missing in nagomi/.env — create one at aistudio.google.com')
  return env.GEMINI_API_KEY
}

async function call(model, parts, outFile, retries = 2) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODELS[model]}:generateContent?key=${apiKey()}`
  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts }],
        generationConfig: { responseModalities: ['IMAGE'] },
      }),
    })
    if (!res.ok) {
      const body = await res.text().catch(() => '')
      if ((res.status === 429 || res.status >= 500) && attempt < retries) {
        await new Promise(r => setTimeout(r, (attempt + 1) * 4000))
        continue
      }
      throw new Error(`gemini ${res.status}: ${body.slice(0, 300)}`)
    }
    const data = await res.json()
    const img = data.candidates?.[0]?.content?.parts?.find(p => p.inlineData?.data)
    if (!img) {
      if (attempt < retries) continue // safety refusal / empty — one more try
      throw new Error(`no image in response for ${path.basename(outFile)}`)
    }
    fs.mkdirSync(path.dirname(outFile), { recursive: true })
    fs.writeFileSync(outFile, Buffer.from(img.inlineData.data, 'base64'))
    return
  }
}

export async function generateImage(model, prompt, outFile, opts = {}) {
  const text = opts.aspect ? `${prompt}\n\nAspect ratio ${opts.aspect}.` : prompt
  await call(model, [{ text }], outFile)
}

/** generate a NEW character anchored to an approved render's art style —
 *  image conditioning on our own art is the only reliable style lock */
export async function generateWithStyleRef(model, refFile, prompt, outFile) {
  const b64 = fs.readFileSync(refFile).toString('base64')
  await call(model, [
    { inlineData: { mimeType: 'image/png', data: b64 } },
    { text: `The attached image is an ART STYLE REFERENCE ONLY. Match its exact linework, ink character, flat cel shading, halftone-free paper grain, color handling and overall rendering style perfectly. Do NOT draw the reference character or copy their clothes or pose.\n\nDraw instead, in that exact style: ${prompt}` },
  ], outFile)
}

export async function editImage(model, baseFile, prompt, outFile) {
  const b64 = fs.readFileSync(baseFile).toString('base64')
  await call(model, [
    { inlineData: { mimeType: 'image/png', data: b64 } },
    { text: prompt },
  ], outFile)
}

// Contact sheets for the variant review gate: one grid per character
// (6 expressions x 2 mouths) -> art_raw/variant_sheets/<id>.jpg
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const VAR = path.join(ROOT, 'art_raw', 'variants')
const OUT = path.join(ROOT, 'art_raw', 'variant_sheets')
fs.mkdirSync(OUT, { recursive: true })

const EXPR = ['neutral', 'happy', 'sad', 'surprised', 'excited', 'tired']
const MOUTHS = ['closed', 'open']
const TILE_W = 170, TILE_H = 300

const ids = fs.readdirSync(VAR).filter(d => fs.statSync(path.join(VAR, d)).isDirectory())
for (const id of ids) {
  const tiles = []
  for (let e = 0; e < EXPR.length; e++) {
    for (let m = 0; m < MOUTHS.length; m++) {
      const f = path.join(VAR, id, `${EXPR[e]}_${MOUTHS[m]}.png`)
      if (!fs.existsSync(f)) continue
      const buf = await sharp(f)
        .resize(TILE_W, TILE_H, { fit: 'contain', background: '#F6EFDF' })
        .toBuffer()
      tiles.push({ input: buf, left: e * TILE_W, top: m * TILE_H })
    }
  }
  if (!tiles.length) continue
  await sharp({ create: { width: EXPR.length * TILE_W, height: MOUTHS.length * TILE_H, channels: 3, background: '#F6EFDF' } })
    .composite(tiles)
    .jpeg({ quality: 80 })
    .toFile(path.join(OUT, `${id}.jpg`))
  console.log(`${id}: ${tiles.length}/12`)
}
console.log('sheets ->', OUT, '(columns: neutral happy sad surprised excited tired; rows: closed, open)')

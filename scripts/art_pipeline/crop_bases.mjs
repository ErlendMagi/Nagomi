// Crop every base sheet to its best SINGLE full-body figure so the edit-model
// variants inherit a single figure. Regions were decided by eye at the review
// gate. Output: art_raw/bases_cropped/<id>.png (originals untouched).
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const RAW = 'D:/njl/nagomi/art_raw'
const OUT = path.join(RAW, 'bases_cropped')
fs.mkdirSync(OUT, { recursive: true })

// [x0, x1] width fractions of the region holding the full-body figure; 'auto' = single figure already
const CROPS = {
  sakura_teen: [0, 0.5],
  goro_grandpa: 'auto',
  kenji_office: 'auto',
  yuki_office: [0, 0.5],
  hina_child: 'auto',
  sho_child: [0, 0.5],
  riku_teen: [0, 0.5],
  aoi_barista: [0.33, 0.68],
  daichi_kansai: [0, 0.5],
  mei_romantic: 'auto',
  ren_uni: [0, 0.5],
  hiroshi_boss: [0, 0.5],
  yumiko_mom: [0, 0.36],
  ryosuke_dad: [0, 0.36],
  naoko_aunt: 'auto',
  tatsuya_country: [0, 0.5],
  asuka_teacher: [0, 0.36],
  sachiko_grandma: 'auto',
  mrs_mori_neighbor: [0, 0.5],
  hiroshi_elder: [0.55, 1],
  takeda_officer: [0, 0.5],
  saito_doctor: [0, 0.5],
}

for (const [id, region] of Object.entries(CROPS)) {
  const src = path.join(RAW, 'bases', `${id}.png`)
  const dst = path.join(OUT, `${id}.png`)
  // separate sharp stages: in a single pipeline trim would run BEFORE extract
  // and invalidate the extract coordinates ("bad extract area")
  const meta = await sharp(src).metadata()
  let buf = await fs.promises.readFile(src)
  if (region !== 'auto') {
    const left = Math.round(meta.width * region[0])
    const width = Math.round(meta.width * (region[1] - region[0]))
    buf = await sharp(buf).extract({ left, top: 0, width, height: meta.height }).toBuffer()
  }
  // trim the paper border, then re-add a small even margin so poses aren't edge-tight
  buf = await sharp(buf).trim({ threshold: 45 }).toBuffer()
  await sharp(buf)
    .extend({ top: 40, bottom: 40, left: 40, right: 40, background: '#F6EFDF' })
    .png()
    .toFile(dst)
  console.log('cropped', id)
}
console.log('done ->', OUT)

// Flood-fill background removal for the character frames. The renders sit on
// a flat warm-cream paper with confident ink outlines — a BFS from the image
// border that eats pixels close to the border color stops dead at the ink,
// so white spats/socks INSIDE an outline survive while the paper (and its
// grain) becomes transparent. Free, deterministic, no AI.
import sharp from 'sharp'

const THRESHOLD = 30      // max channel-distance to the border paper color
const FEATHER = 1         // edge pixels get soft alpha to avoid crunchy halos

export async function cutout(inputBuf) {
  const { data, info } = await sharp(inputBuf).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const { width: w, height: h } = info
  const px = data // RGBA

  // border paper color = median of the four corners
  const corners = [0, (w - 1) * 4, (h - 1) * w * 4, ((h - 1) * w + w - 1) * 4]
  const bg = [0, 1, 2].map(c => {
    const v = corners.map(o => px[o + c]).sort((a, b) => a - b)
    return (v[1] + v[2]) / 2
  })

  const isPaper = (o) =>
    Math.abs(px[o] - bg[0]) < THRESHOLD &&
    Math.abs(px[o + 1] - bg[1]) < THRESHOLD &&
    Math.abs(px[o + 2] - bg[2]) < THRESHOLD

  const visited = new Uint8Array(w * h)
  const queue = new Int32Array(w * h)
  let qh = 0, qt = 0
  const push = (i) => { if (!visited[i] && isPaper(i * 4)) { visited[i] = 1; queue[qt++] = i } }

  for (let x = 0; x < w; x++) { push(x); push((h - 1) * w + x) }
  for (let y = 0; y < h; y++) { push(y * w); push(y * w + w - 1) }

  while (qh < qt) {
    const i = queue[qh++]
    const x = i % w, y = (i / w) | 0
    if (x > 0) push(i - 1)
    if (x < w - 1) push(i + 1)
    if (y > 0) push(i - w)
    if (y < h - 1) push(i + w)
  }

  // erase flooded pixels; feather: any kept pixel adjacent to erased ones
  // near the paper color gets half alpha so edges stay smooth
  for (let i = 0; i < w * h; i++) if (visited[i]) px[i * 4 + 3] = 0
  if (FEATHER) {
    for (let i = 0; i < w * h; i++) {
      if (visited[i] || px[i * 4 + 3] === 0) continue
      const x = i % w, y = (i / w) | 0
      const nearErased =
        (x > 0 && visited[i - 1]) || (x < w - 1 && visited[i + 1]) ||
        (y > 0 && visited[i - w]) || (y < h - 1 && visited[i + w])
      if (nearErased && isPaper(i * 4)) px[i * 4 + 3] = 120
    }
  }

  return sharp(px, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer()
}

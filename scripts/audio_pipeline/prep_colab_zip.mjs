// scripts/audio_pipeline/prep_colab_zip.mjs
//
// Bundles everything Colab needs into a single zip the user uploads through
// the Colab notebook:
//
//   nagomi_qwen_input.zip
//     ├── characters.json
//     ├── generate_audio.py
//     └── conversations/conv_*.json
//
// Uses adm-zip (pure JS) so the entries inside the zip use forward slashes
// — required for Linux unzip in Colab to treat them as directories.
// (PowerShell's Compress-Archive wrote backslashes which Linux read as part of
// the filename.)
//
// Run:  node scripts/audio_pipeline/prep_colab_zip.mjs
//       npm run prep:colab

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import AdmZip from 'adm-zip';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const NAGOMI    = path.resolve(__dirname, '..', '..');

const CONV_DIR    = path.join(NAGOMI, 'data', 'conversations');
const CHARS_PATH  = path.join(NAGOMI, 'data', 'characters.json');
const SCRIPT_PATH = path.join(NAGOMI, 'scripts', 'audio_pipeline', 'generate_audio.py');
const OUT_ZIP     = path.join(NAGOMI, 'nagomi_qwen_input.zip');

for (const [label, p] of [
  ['conversations dir', CONV_DIR],
  ['characters.json',   CHARS_PATH],
  ['generate_audio.py', SCRIPT_PATH],
]) {
  if (!fs.existsSync(p)) {
    console.error(`[fatal] missing ${label}: ${p}`);
    process.exit(1);
  }
}

if (fs.existsSync(OUT_ZIP)) fs.unlinkSync(OUT_ZIP);

const zip = new AdmZip();

// Top-level files
zip.addLocalFile(CHARS_PATH,  '');
zip.addLocalFile(SCRIPT_PATH, '');

// conversations/ as a real directory
const convFiles = fs.readdirSync(CONV_DIR)
  .filter(f => f.startsWith('conv_') && f.endsWith('.json'))
  .sort();
for (const f of convFiles) {
  // Pass entryName explicitly with a forward slash so the zip metadata is correct.
  zip.addFile(`conversations/${f}`, fs.readFileSync(path.join(CONV_DIR, f)));
}

zip.writeZip(OUT_ZIP);

const sizeKB = (fs.statSync(OUT_ZIP).size / 1024).toFixed(1);
console.log(`[ok] wrote ${OUT_ZIP}  (${sizeKB} KB)`);
console.log(`     contents: characters.json + generate_audio.py + conversations/ (${convFiles.length} files)`);
console.log(``);
console.log(`Next steps:`);
console.log(`  1. Open https://colab.research.google.com/`);
console.log(`  2. File → Open notebook → Upload → pick scripts/audio_pipeline/nagomi_qwen_colab.ipynb`);
console.log(`  3. Runtime → Change runtime type → T4 GPU`);
console.log(`  4. Runtime → Run all  (it'll prompt you to upload ${path.basename(OUT_ZIP)})`);
console.log(`  5. When it finishes, your browser downloads nagomi_qwen_output.zip`);
console.log(`  6. Extract that zip into nagomi/audio/`);
console.log(`  7. Relaunch with launch-nagomi.bat`);

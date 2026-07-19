import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_070)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1386 — hina + sho, picture book (short)
  {
    id: 'conv_01386',
    context: 'Hina reads a picture book with Sho.',
    purpose: 'children picture-book exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['絵本', '一緒', '楽しい', '優しい', '読む'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、絵本、本当、面白い、ね。', en: 'Sho — picture book, truly, interesting.', style: 'High child bright sincere appreciative-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、本当、楽しい、絵。', en: 'Yes — truly, fun, picture.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、読むの、本当、嬉しい。', en: 'Together — reading, truly, happy.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '優しい、お話、本当、好き。', en: 'Kind — story, truly, like.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '本当、いい、本、ね。', en: 'Truly — good, book.', style: 'High child bright sincere closing-warm tender-deep appreciative, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1387 — yumiko + sho, summer vacation (short)
  {
    id: 'conv_01387',
    context: 'Yumiko plans summer vacation activities with Sho.',
    purpose: 'mother-child summer-vacation exchange',
    ambient: 'tatami_room_morning',
    sound_effects: [],
    target_vocab: ['夏休み', '一緒', '楽しい', '頑張る', '家族'],
    cast: ['yumiko_mom', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'しょうくん、夏休み、本当、もうすぐ。', en: 'Sho-kun — summer vacation, truly, soon.', style: 'Maternal warm gentle sincere-warm anticipating-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'うん、本当、楽しみ、本当に。', en: 'Yes — truly, looking forward, truly.', style: 'Tiny six-year-old soft small sincere enthusiastic-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'yumiko_mom', jp: '家族、皆で、本当、過ごそう。', en: 'Family — all, truly, spend.', style: 'Maternal warm gentle sincere-warm proposing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '頑張る、本当、毎日。', en: 'Try hard — truly, every day.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'yumiko_mom', jp: '一緒に、本当、楽しい、ね。', en: 'Together — truly, fun.', style: 'Maternal warm gentle sincere closing-warm tender-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1388 — kenji + hiroshi_boss, ongoing project (medium)
  {
    id: 'conv_01388',
    context: 'Kenji updates Hiroshi on a project running smoothly.',
    purpose: 'business smooth-progress exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['順調', '一緒', '頑張る', '感謝', '会社'],
    cast: ['kenji_office', 'hiroshi_boss'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '部長、プロジェクト、本当、順調、です。', en: 'Boss — project, truly, smooth.', style: 'Salaryman warm formal sincere-warm reporting-opening professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: 'よし、本当、立派、ね。', en: 'Good — truly, splendid.', style: 'Boss firm formal direct appreciative-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '皆様、本当、頑張ってる。', en: 'Everyone — truly, trying hard.', style: 'Salaryman warm formal sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Boss firm formal direct grateful-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '一緒に、本当、ここまで、来た。', en: 'Together — truly, until here, came.', style: 'Salaryman warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: 'これからも、本当、頼んだ。', en: 'From now — truly, counting on.', style: 'Boss firm formal direct tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' },
      { speaker: 'kenji_office', jp: '頑張ります、本当に。', en: 'Try hard — truly.', style: 'Salaryman warm formal sincere closing-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1389 — asuka + ren, exam helpers (medium)
  {
    id: 'conv_01389',
    context: 'Asuka and Ren coordinate exam helpers.',
    purpose: 'mentor-colleague exam-helper exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['試験', '一緒', '生徒', '頑張る', '相談'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、試験、本当、もうすぐ、ね。', en: 'Ren-kun — exam, truly, soon.', style: 'Teacher warm gentle sincere-warm anticipating-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '生徒、本当、緊張、感じる。', en: 'Students — truly, tense, feel.', style: 'University student warm soft sincere-warm honest-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '相談、本当、できる、ね。', en: 'Consult — truly, can.', style: 'Teacher warm gentle sincere-warm reassuring-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、本当、応援、する。', en: 'Together — truly, cheer, do.', style: 'University student warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'Teacher warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Teacher warm gentle sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1390 — sakura + ren, novel future (long)
  {
    id: 'conv_01390',
    context: 'Sakura and Ren discuss the future of her novels.',
    purpose: 'cousin novel-future exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['物語', '一緒', '夢', '感謝', '頑張る'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、物語、本当、続く、本当に。', en: 'Ren-bro — story, truly, continues, truly.', style: 'Teen warm soft sincere reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、本当、楽しみ、ね。', en: 'Yes — truly, looking forward.', style: 'University student warm soft sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '夢、本当、ずっと、追ってる。', en: 'Dream — truly, long, chasing.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '本当、応援、ずっと、する。', en: 'Truly — cheer, long, do.', style: 'University student warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当、ずっと、ね。', en: 'Grateful — truly, long.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '一緒に、本当、宝、本当に。', en: 'Together — truly, treasure, truly.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '頑張る、本当、絶対。', en: 'Try hard — truly, surely.', style: 'Teen warm soft sincere committed-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'お前の夢、本当、繋がってる。', en: 'Your dream — truly, connected.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '大切な、家族、皆。', en: 'Precious — family, all.', style: 'Teen warm soft sincere tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '本当、嬉しい、ね。', en: 'Truly — happy.', style: 'University student warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Teen warm soft sincere tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '応援、本当、ずっと、する。', en: 'Cheer — truly, long, do.', style: 'University student warm soft sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Teen warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1391 — saito + naoko, careful checkup (medium)
  {
    id: 'conv_01391',
    context: 'Saito gives Naoko a careful checkup.',
    purpose: 'doctor-patient careful checkup exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '相談', '大切', '感謝'],
    cast: ['saito_doctor', 'naoko_aunt'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '直子さん、本当、健康、保てる、ね。', en: 'Naoko-san — truly, health, can keep.', style: 'Doctor warm formal sincere-warm reassuring-opening professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'naoko_aunt', jp: '感謝、本当、本当に。', en: 'Grateful — truly, truly.', style: 'Aunt warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: '大切な、生活、本当に。', en: 'Precious — life, truly.', style: 'Doctor warm formal sincere-warm philosophical-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '相談、本当、いつでも、ね。', en: 'Consult — truly, anytime.', style: 'Aunt warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一緒に、本当、頑張りましょう。', en: 'Together — truly, try hard.', style: 'Doctor warm formal sincere-warm collaborative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Aunt warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'saito_doctor', jp: 'お元気で、本当に、ね。', en: 'Healthy — truly.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1392 — daichi + tatsuya, town economy (medium)
  {
    id: 'conv_01392',
    context: 'Daichi and Tatsuya discuss the town economy growth.',
    purpose: 'cousin economy-growth exchange',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['経済', '町', '一緒', '頑張る', '感謝'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、町の経済、本当、伸びてる。', en: 'Tatsuya — town economy, truly, growing.', style: 'Kansai warm bright sincere reporting-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、本当、皆、頑張ってる。', en: 'Yes — truly, all, trying hard.', style: 'Country warm low sincere unhurried appreciative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Kansai warm bright sincere grateful-deep tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '一緒に、本当、続けよう。', en: 'Together — truly, continue.', style: 'Country warm low sincere unhurried collaborative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '頑張る、本当、絶対。', en: 'Try hard — truly, surely.', style: 'Kansai warm bright sincere committed-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Country warm low sincere unhurried tender-deep grateful, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1393 — hina + sho, blue sky (short)
  {
    id: 'conv_01393',
    context: 'Sho and Hina look at the blue sky.',
    purpose: 'children blue-sky exchange',
    ambient: 'window_morning',
    sound_effects: [],
    target_vocab: ['青い', '空', '一緒', '楽しい', '見る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、空、本当、青い、ね。', en: 'Sho — sky, truly, blue.', style: 'High child bright sincere observing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、本当、綺麗、本当に。', en: 'Yes — truly, beautiful, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、見るの、本当、嬉しい。', en: 'Together — looking, truly, happy.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '楽しい、本当、ね。', en: 'Fun — truly.', style: 'Tiny six-year-old soft small sincere tender-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '本当、明るい、青い、空。', en: 'Truly — bright, blue, sky.', style: 'High child bright sincere closing-warm appreciative-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1394 — kenji + ren, system review (medium)
  {
    id: 'conv_01394',
    context: 'Kenji and Ren review the company system together.',
    purpose: 'senior-alum system-review exchange',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['システム', '一緒', '頑張る', '考える', '感謝'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、システム、本当、見直したい。', en: 'Ren-kun — system, truly, want to review.', style: 'Salaryman warm formal sincere-warm philosophical-opening engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当、必要、本当に。', en: 'Truly — needed, truly.', style: 'University student warm soft sincere-warm matching-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、本当、考えよう。', en: 'Together — truly, think.', style: 'Salaryman warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、本当、絶対。', en: 'Try hard — truly, surely.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'University student warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Salaryman warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1395 — sho + yumiko, lunch (short)
  {
    id: 'conv_01395',
    context: 'Yumiko prepares lunch with Sho.',
    purpose: 'mother-child lunch-help exchange',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['お昼', '一緒', '美味しい', '頑張る', '楽しい'],
    cast: ['yumiko_mom', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'しょうくん、お昼、本当、一緒に、作ろう。', en: 'Sho-kun — lunch, truly, together, make.', style: 'Maternal warm gentle sincere-warm inviting-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'うん、頑張る、本当、絶対。', en: 'Yes — try hard, truly, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'yumiko_mom', jp: '美味しい、本当、なる、絶対。', en: 'Delicious — truly, becomes, surely.', style: 'Maternal warm gentle sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '楽しい、本当、ね。', en: 'Fun — truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'yumiko_mom', jp: '一緒に、本当、嬉しい。', en: 'Together — truly, happy.', style: 'Maternal warm gentle sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1396 — sakura + asuka, year-end (medium)
  {
    id: 'conv_01396',
    context: 'Sakura visits Asuka at year-end.',
    purpose: 'teacher-alum year-end exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['年末', '一緒', '感謝', '頑張る', '大切'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、年末、本当、お疲れ様、本当に。', en: 'Teacher — year-end, truly, good work, truly.', style: 'Teen warm soft sincere appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Teacher warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一年、本当、長かった、本当に。', en: 'Year — truly, was long, truly.', style: 'Teen warm soft sincere reflective-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: '頑張った、本当、お前。', en: 'Tried hard — truly, you.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '大切な、生徒、本当に。', en: 'Precious — student, truly.', style: 'Teacher warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Teen warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1397 — daichi + sho, fishing fresh (short)
  {
    id: 'conv_01397',
    context: 'Daichi shows Sho a fresh fish.',
    purpose: 'uncle-child fresh-fish exchange',
    ambient: 'river_morning',
    sound_effects: [],
    target_vocab: ['新鮮', '一緒', '楽しい', '頑張る', '魚'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、魚、本当、新鮮、ね。', en: 'Sho — fish, truly, fresh.', style: 'Kansai warm bright sincere appreciative-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '本当、すごい、本当に。', en: 'Truly — amazing, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '一緒に、本当、頑張った、で。', en: 'Together — truly, tried hard.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、本当、ね。', en: 'Fun — truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Kansai warm bright sincere closing-warm tender-deep grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1398 — yumiko + ryosuke, late afternoon (medium)
  {
    id: 'conv_01398',
    context: 'Yumiko and Ryosuke chat in the late afternoon.',
    purpose: 'married-couple late-afternoon exchange',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '家族', '大切', '感謝'],
    cast: ['yumiko_mom', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'お父さん、本当、いい一日、ね。', en: 'Father — truly, good day.', style: 'Maternal warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、本当、家族、皆、元気。', en: 'Yes — truly, family, all, energetic.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '一緒に、過ごせる、本当、嬉しい。', en: 'Together — can spend, truly, happy.', style: 'Maternal warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '感謝、本当、毎日。', en: 'Grateful — truly, every day.', style: 'Father warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Maternal warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '楽しい、毎日、本当、ね。', en: 'Fun — every day, truly.', style: 'Maternal warm gentle sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1399 — hina + sho, picture (short)
  {
    id: 'conv_01399',
    context: 'Hina paints a picture for Sho.',
    purpose: 'children painting-gift exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['絵', '一緒', '優しい', '楽しい', '友達'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、絵、本当、書いた。', en: 'Sho — picture, truly, drew.', style: 'High child bright sincere announcing-opening proud, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'わあ、本当、嬉しい、本当に。', en: 'Wow — truly, happy, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '優しい、友達、本当、ね。', en: 'Kind — friend, truly.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '一緒に、本当、宝物。', en: 'Together — truly, treasure.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '楽しい、本当、ね。', en: 'Fun — truly.', style: 'High child bright sincere closing-warm tender-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1400 — milestone — kenji + sakura, business interview (medium)
  {
    id: 'conv_01400',
    context: 'Kenji interviews Sakura about her writing journey.',
    purpose: 'businessman-author journey-interview',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['作品', '一緒', '夢', '感謝', '頑張る'],
    cast: ['kenji_office', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'さくらさん、本当、長い旅、ね。', en: 'Sakura-san — truly, long journey.', style: 'Salaryman warm formal sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '本当、感謝、皆に。', en: 'Truly — grateful, to all.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '夢、本当、追ってきた。', en: 'Dream — truly, chased.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '作品、本当、宝、ね。', en: 'Works — truly, treasure.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '一緒に、本当、ここまで、来た。', en: 'Together — truly, until here, came.', style: 'Salaryman warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '頑張る、本当、ずっと。', en: 'Try hard — truly, long.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '応援、本当、ずっと、する。', en: 'Cheer — truly, long, do.', style: 'Salaryman warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1401 — daichi + tatsuya, fishing trip (medium)
  {
    id: 'conv_01401',
    context: 'Daichi and Tatsuya plan a fishing trip.',
    purpose: 'cousin fishing-trip exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '釣り', '頑張る', '感謝'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、釣り、本当、行こうか。', en: 'Tatsuya — fishing, truly, go?', style: 'Kansai warm bright sincere proposing-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、本当、楽しみ、ね。', en: 'Yes — truly, looking forward.', style: 'Country warm low sincere unhurried matching-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '一緒に、本当、頑張ろうな。', en: 'Together — truly, try hard.', style: 'Kansai warm bright sincere committed-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Country warm low sincere unhurried grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '楽しい、本当、本当に。', en: 'Fun — truly, truly.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Country warm low sincere unhurried matching-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1402 — saito + sho, careful talk (short)
  {
    id: 'conv_01402',
    context: 'Saito tells Sho his teeth are doing well.',
    purpose: 'doctor-child teeth exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['歯', '一緒', '頑張る', '優しい', '健康'],
    cast: ['saito_doctor', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'しょうくん、歯、本当、立派、ね。', en: 'Sho-kun — teeth, truly, splendid.', style: 'Doctor warm formal sincere-warm reassuring-opening tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'sho_child', jp: '頑張ってる、本当、毎日。', en: 'Trying hard — truly, every day.', style: 'Tiny six-year-old soft small sincere proud-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'saito_doctor', jp: '優しい、子、本当に。', en: 'Kind — child, truly.', style: 'Doctor warm formal sincere-warm appreciative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '一緒に、頑張る、絶対。', en: 'Together — try hard, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'saito_doctor', jp: '健康、本当、ね。', en: 'Healthy — truly.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1403 — hina + sachiko, summer (short)
  {
    id: 'conv_01403',
    context: 'Sachiko and Hina enjoy a summer afternoon.',
    purpose: 'grandma-child summer exchange',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['夏', '一緒', '楽しい', '優しい', '本当'],
    cast: ['sachiko_grandma', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'ひなちゃん、夏、本当、暑い、ね。', en: 'Hina-chan — summer, truly, hot.', style: 'Grandma warm gentle sincere-warm observing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'うん、本当、汗、ね。', en: 'Yes — truly, sweat.', style: 'High child bright sincere matching-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-warm' },
      { speaker: 'sachiko_grandma', jp: '優しい、扇風機、本当、いい。', en: 'Kind — fan, truly, good.', style: 'Grandma warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: '一緒に、本当、楽しい、ね。', en: 'Together — truly, fun.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sachiko_grandma', jp: '本当、嬉しい、ね。', en: 'Truly — happy.', style: 'Grandma warm gentle sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1404 — mei + naoko, family visit (medium)
  {
    id: 'conv_01404',
    context: 'Mei visits Naoko for an autumn afternoon.',
    purpose: 'two-women autumn-afternoon exchange',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '優しい', '感謝', '楽しい'],
    cast: ['mei_romantic', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: '直子おばさん、本当、優しい、ね。', en: 'Naoko-auntie — truly, kind.', style: 'Romantic warm soft sincere-warm grateful-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: 'うん、本当、嬉しい、ね。', en: 'Yes — truly, happy.', style: 'Aunt warm soft sincere-warm tender-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '家族、本当、近くで、嬉しい。', en: 'Family — truly, close, happy.', style: 'Romantic warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '一緒に、本当、過ごせる、宝。', en: 'Together — truly, can spend, treasure.', style: 'Aunt warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Romantic warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '楽しい、本当、毎日。', en: 'Fun — truly, every day.', style: 'Aunt warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Romantic warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1405 — kenji + ren, lifetime work (medium)
  {
    id: 'conv_01405',
    context: 'Kenji and Ren reflect on their lifetime of work.',
    purpose: 'senior-alum lifetime-reflection exchange',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '頑張る', '大切'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、本当、長く、繋がってきた。', en: 'Ren-kun — truly, long, connected.', style: 'Salaryman warm soft sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: 'うん、本当、本当に、ね。', en: 'Yes — truly, truly.', style: 'University student warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '人生、本当、不思議、ね。', en: 'Life — truly, mysterious.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、ここまで、本当、宝。', en: 'Together — until here, truly, treasure.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '頑張ってきた、本当に、皆。', en: 'Tried hard — truly, all.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'Salaryman warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_070 wrote', CONVERSATIONS.length, 'files');

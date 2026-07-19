import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_064)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1266 — hiroshi_boss + kenji, construction project (medium)
  {
    id: 'conv_01266',
    context: 'Hiroshi and Kenji review a new construction project.',
    purpose: 'business construction-project exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['建設', '建物', '位置', '一緒', '頑張る'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、新しい建物、建設、進む。', en: 'Kenji — new building, construction, proceeds.', style: 'Boss firm formal direct authoritative-opening clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、位置、本当、いい場所。', en: 'Yes — position, truly, good place.', style: 'Salaryman warm formal sincere-warm professional-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: 'スタッフ、本当、頑張ってる。', en: 'Staff — truly, trying hard.', style: 'Boss firm formal direct appreciative-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '採用、進めて、本当、増やしてる。', en: 'Recruitment — proceeding, truly, increasing.', style: 'Salaryman warm formal sincere-warm reporting-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '満足、本当、私、している。', en: 'Satisfied — truly, I, am.', style: 'Boss firm formal direct affirming-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当に、皆に。', en: 'Grateful — truly, to all.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '頑張ろう、本当、これからも。', en: 'Try hard — truly, from now.', style: 'Boss firm formal direct closing-warm tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1267 — sho + hina, picture book (short)
  {
    id: 'conv_01267',
    context: 'Sho and Hina enjoy reading a small picture novel.',
    purpose: 'children picture-book exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['小説', '一緒', '楽しい', '読む', '本'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、この小説、読みたい。', en: 'Hina — this novel, want to read.', style: 'Tiny six-year-old soft small sincere proposing-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'うん、一緒に、読もうね。', en: 'Yes — together, read.', style: 'High child bright sincere agreeing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '主人公、面白い、本当に。', en: 'Protagonist — interesting, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、本当に、読書。', en: 'Fun — truly, reading.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '続き、知りたい、絶対。', en: 'Continuation — want to know, surely.', style: 'Tiny six-year-old soft small sincere closing-warm enthusiastic-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 1268 — saito + ryosuke, treatment plan (medium)
  {
    id: 'conv_01268',
    context: 'Saito discusses a small treatment plan with Ryosuke.',
    purpose: 'doctor-patient treatment-plan exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['治療', '健康', '一緒', '相談', '大切'],
    cast: ['saito_doctor', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '亮介さん、治療、本当、必要、ない。', en: 'Ryosuke-san — treatment, truly, not needed.', style: 'Doctor warm formal sincere-warm reassuring-opening professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'ryosuke_dad', jp: 'ああ、本当、感謝。', en: 'Ah — truly, grateful.', style: 'Father warm gentle sincere-warm relieved-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '健康、維持、本当、大切。', en: 'Health — maintain, truly, precious.', style: 'Doctor warm formal sincere-warm advising-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '相談、いつでも、感謝、本当に。', en: 'Consult — anytime, grateful, truly.', style: 'Father warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Doctor warm formal sincere-warm matching-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、長く、お元気で。', en: 'Together — long, healthy.', style: 'Father warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '大切な、患者、本当に。', en: 'Precious — patient, truly.', style: 'Doctor warm formal sincere closing-warm tender-deep philosophical, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1269 — kenji + ren, mid-career conversation (long)
  {
    id: 'conv_01269',
    context: 'Kenji and Ren reflect on building a sustainable career together.',
    purpose: 'businessman-teacher long-career reflection',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['一緒', '人生', '感謝', '頑張る', '大切'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 5,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、本当、長く、繋がってきた。', en: 'Ren-kun — truly, long, connected.', style: 'Salaryman warm soft sincere-warm reflective-opening tender-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '健次さんも、本当に、感謝。', en: 'Kenji-san too — truly, grateful.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '人生、競争、本当、激しい時、ある。', en: 'Life — competition, truly, intense times, exist.', style: 'Salaryman warm soft sincere-warm philosophical-warm honest, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'でも、本当、応援、力になる。', en: 'But — truly, cheer, becomes strength.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、ここまで、本当、宝。', en: 'Together — until here, truly, treasure.', style: 'Salaryman warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'University student warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '人生、本当、不思議。', en: 'Life — truly, mysterious.', style: 'Salaryman warm soft sincere-warm philosophical-warm thoughtful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'これからも、ね、頑張ろう。', en: 'From now — try hard.', style: 'University student warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '応援、本当、ずっと、する。', en: 'Cheer — truly, long, do.', style: 'Salaryman warm soft sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '感謝、本当に、いつも。', en: 'Grateful — truly, always.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Salaryman warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '一緒に、未来、創って、いきましょう。', en: 'Together — future, create.', style: 'University student warm soft sincere-warm philosophical-warm tender-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Salaryman warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1270 — hina + sho, daily routine (short)
  {
    id: 'conv_01270',
    context: 'Hina and Sho discuss their daily routine.',
    purpose: 'children daily-routine exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['日常', '一緒', '楽しい', '頑張る', '友達'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、日常、楽しい、本当に。', en: 'Sho — daily, fun, truly.', style: 'High child bright sincere reflective-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、毎日、一緒、嬉しい。', en: 'Yes — every day, together, happy.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'High child bright sincere committed-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '友達、ずっと、いてくれて、嬉しい。', en: 'Friend — long, exists, happy.', style: 'Tiny six-year-old soft small sincere tender-deep grateful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'これからも、ね、絶対。', en: 'From now — surely.', style: 'High child bright sincere closing-warm tender-promise deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1271 — sakura + asuka, awards ceremony (medium)
  {
    id: 'conv_01271',
    context: 'Sakura wins an important writing award, Asuka congratulates her.',
    purpose: 'teacher-author award-ceremony exchange',
    ambient: 'plaza_evening',
    sound_effects: [],
    target_vocab: ['賞', '一緒', '感謝', '頑張る', '夢'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、賞、おめでとう、本当に！', en: 'Sakura-san — award, congratulations, truly!', style: 'Teacher warm gentle sincere-warm enthusiastic-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '先生、本当、感謝、ずっと。', en: 'Teacher — truly, grateful, long.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '夢、本当、叶ってる、ね。', en: 'Dream — truly, coming true.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '頑張ってきた、本当、報われた。', en: 'Tried hard — truly, rewarded.', style: 'Teen warm soft sincere appreciative-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、ここまで、宝。', en: 'Together — until here, treasure.', style: 'Teacher warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Teen warm soft sincere tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'これからも、ね、頑張ろう。', en: 'From now — try hard.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1272 — daichi + sho, sports event (medium)
  {
    id: 'conv_01272',
    context: 'Daichi watches Sho play in a competition.',
    purpose: 'uncle-child competition exchange',
    ambient: 'park_afternoon',
    sound_effects: [],
    target_vocab: ['競争', '一緒', '頑張る', '応援', '楽しい'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、競争、本当、激しい、ね。', en: 'Sho — competition, truly, intense.', style: 'Kansai warm bright sincere observing-opening engaged, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張る、絶対、本当に。', en: 'Try hard — surely, truly.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '応援、絶対、するで。', en: 'Cheer — surely, do.', style: 'Kansai warm bright sincere committed-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、本当、ずっと。', en: 'Fun — truly, long.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '一緒に、頑張ろうな、絶対。', en: 'Together — try hard, surely.', style: 'Kansai warm bright sincere tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Tiny six-year-old soft small sincere grateful-deep tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Kansai warm bright sincere closing-warm matching-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 1273 — yuki + naoko, tourism (medium)
  {
    id: 'conv_01273',
    context: 'Yuki and Naoko plan a tourism event for the town.',
    purpose: 'two-women tourism-event exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['観光', '町', '一緒', '頑張る', '大切'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、観光、本当、増えてる。', en: 'Naoko-san — tourism, truly, increasing.', style: 'Office woman bright soft sincere reporting-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '町、本当、活気、戻った。', en: 'Town — truly, vitality, returned.', style: 'Aunt warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '一緒に、頑張った、結果、本当に。', en: 'Together — tried hard, result, truly.', style: 'Office woman bright soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '大切な、繋がり、本当。', en: 'Precious — connection, truly.', style: 'Aunt warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '本当、感謝、いつも。', en: 'Truly — grateful, always.', style: 'Office woman bright soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Aunt warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: 'これからも、頑張ろう、ね。', en: 'From now — try hard.', style: 'Office woman bright soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1274 — kenji + sakura, novel adaptation (medium)
  {
    id: 'conv_01274',
    context: 'Kenji proposes adapting Sakura\'s novel as a film.',
    purpose: 'businessman-author adaptation exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['映画', '作品', '一緒', '頑張る', '感謝'],
    cast: ['kenji_office', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'さくらさん、作品、映画、にしないか？', en: 'Sakura-san — work, film, won\'t make?', style: 'Salaryman warm formal sincere-warm proposing-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'え、本当に？光栄、本当に。', en: 'Eh — truly? Honored, truly.', style: 'Teen warm soft sincere surprised-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '監督、本当、立派な人、紹介できる。', en: 'Director — truly, splendid person, can introduce.', style: 'Salaryman warm soft sincere-warm enthusiastic-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '夢、本当、また、広がる。', en: 'Dream — truly, again, widens.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '一緒に、頑張ろう、本当に。', en: 'Together — try hard, truly.', style: 'Salaryman warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当、ずっと、いつも。', en: 'Grateful — truly, long, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '応援、ずっと、する。', en: 'Cheer — long, do.', style: 'Salaryman warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1275 — mei + daichi, three-children life (long)
  {
    id: 'conv_01275',
    context: 'Mei and Daichi reflect on life with three children.',
    purpose: 'married-couple three-kids reflection',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '感謝', '幸せ', '頑張る'],
    cast: ['mei_romantic', 'daichi_kansai'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、三人、本当、にぎやか、毎日。', en: 'Daichi — three, truly, lively, every day.', style: 'Romantic warm soft sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'ほんま、賑やか、最高や。', en: 'Truly — lively, best.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '家族、本当、宝、ね。', en: 'Family — truly, treasure.', style: 'Romantic warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '皆、可愛い、本当に。', en: 'All — cute, truly.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '毎日、感謝、本当、ずっと。', en: 'Every day — grateful, truly, long.', style: 'Romantic warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '本当、頑張ってる、メイ、本当に。', en: 'Truly — trying hard, Mei, truly.', style: 'Kansai warm bright sincere appreciative-warm tender-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'ダイチも、本当、頑張ってる。', en: 'Daichi too — truly, trying hard.', style: 'Romantic warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '一緒に、ずっと、本当に、幸せ。', en: 'Together — long, truly, happy.', style: 'Kansai warm bright sincere tender-deep grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Romantic warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Kansai warm bright sincere matching-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '家族、皆、近くで、嬉しい。', en: 'Family — all, close, happy.', style: 'Romantic warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '本当、これからも、ね。', en: 'Truly — from now.', style: 'Kansai warm bright sincere tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '感謝、本当、毎日、ずっと。', en: 'Grateful — truly, every day, long.', style: 'Romantic warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1276 — hina + asuka, school painting (short)
  {
    id: 'conv_01276',
    context: 'Asuka praises Hina\'s painting in art class.',
    purpose: 'teacher-child art-praise exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['絵', '一緒', '頑張る', '楽しい', '優しい'],
    cast: ['asuka_teacher', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'ひなちゃん、絵、本当、立派。', en: 'Hina-chan — picture, truly, splendid.', style: 'Teacher warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'hina_child', jp: '頑張った、本当に。', en: 'Tried hard — truly.', style: 'High child bright sincere proud-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'asuka_teacher', jp: '色、本当、優しい、ね。', en: 'Color — truly, kind.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '一緒に、楽しい、本当。', en: 'Together — fun, truly.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'asuka_teacher', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teacher warm gentle sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1277 — hiroshi_boss + ren, expansion plan (medium)
  {
    id: 'conv_01277',
    context: 'Hiroshi shares the company expansion plans with Ren.',
    purpose: 'mentor-alum expansion-plan exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['拡大', '会社', '一緒', '感謝', '頑張る'],
    cast: ['hiroshi_boss', 'ren_uni'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'レン君、会社、本当、拡大、進んでる。', en: 'Ren-kun — company, truly, expansion, proceeding.', style: 'Boss firm formal direct announcing-opening engaged, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: '本当、素晴らしい、ね。', en: 'Truly — wonderful.', style: 'University student warm soft sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '健次、本当、頑張ってる。', en: 'Kenji — truly, trying hard.', style: 'Boss firm formal direct appreciative-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '一緒に、ここまで、本当、宝。', en: 'Together — until here, truly, treasure.', style: 'Boss firm formal direct tender-deep philosophical, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'University student warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '本当、応援、する。', en: 'Truly — cheer, do.', style: 'Boss firm formal direct closing-warm tender-promise deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1278 — sho + hina, photography (short)
  {
    id: 'conv_01278',
    context: 'Sho and Hina take photos with a camera.',
    purpose: 'children camera exchange',
    ambient: 'park_morning',
    sound_effects: [],
    target_vocab: ['カメラ', '一緒', '楽しい', '撮影', '頑張る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、カメラ、撮影、しよう。', en: 'Sho — camera, photography, do.', style: 'High child bright sincere proposing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、頑張って、撮る、ね。', en: 'Yes — try hard, take.', style: 'Tiny six-year-old soft small sincere committed-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、本当、撮影。', en: 'Fun — truly, photography.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、思い出、作る。', en: 'Together — memory, make.', style: 'Tiny six-year-old soft small sincere tender-warm philosophical, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '本当、嬉しい。', en: 'Truly — happy.', style: 'High child bright sincere closing-warm tender-deep grateful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1279 — sakura + yumiko, mother-author (medium)
  {
    id: 'conv_01279',
    context: 'Sakura shows Yumiko a TV interview from a famous program.',
    purpose: 'mother-daughter TV-interview exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['番組', '映像', '一緒', '感謝', '楽しい'],
    cast: ['sakura_teen', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'お母さん、テレビ番組、出演、決まった。', en: 'Mom — TV program, appearance, decided.', style: 'Teen warm soft sincere announcing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '本当！本当、すごい。', en: 'Truly! Truly, amazing.', style: 'Maternal warm gentle sincere-warm enthusiastic-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '映像、本当、楽しみ。', en: 'Footage — truly, looking forward.', style: 'Teen warm soft sincere appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '家族、皆、見るね、絶対。', en: 'Family — all, watch, surely.', style: 'Maternal warm gentle sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、本当、家族、皆に。', en: 'Grateful — truly, family, to all.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '一緒に、ここまで、本当、宝。', en: 'Together — until here, truly, treasure.', style: 'Maternal warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '楽しい、毎日、ずっと。', en: 'Fun — every day, long.', style: 'Teen warm soft sincere closing-warm tender-philosophical warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1280 — kenji + sakura, social issue (medium)
  {
    id: 'conv_01280',
    context: 'Kenji and Sakura discuss social issues for an article.',
    purpose: 'businessman-author social-discussion exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['社会', '人々', '一緒', '考える', '大切'],
    cast: ['kenji_office', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'さくらさん、社会、本当、複雑、ね。', en: 'Sakura-san — society, truly, complex.', style: 'Salaryman warm soft sincere-warm philosophical-opening engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '人々、本当、悩み、多い。', en: 'People — truly, worries, many.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '考えていく、大切、本当に。', en: 'Considering — precious, truly.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '書く事、本当、力に、なる。', en: 'Writing — truly, becomes strength.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、本当、繋いで、いこう。', en: 'Together — truly, connect.', style: 'Salaryman warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Salaryman warm soft sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1281 — tatsuya + naoko, country tourism (medium)
  {
    id: 'conv_01281',
    context: 'Tatsuya and Naoko discuss country tourism strategies.',
    purpose: 'cousin tourism-strategy exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['観光', '町', '一緒', '頑張る', '大切'],
    cast: ['tatsuya_country', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '直子、観光、本当、増えてる。', en: 'Naoko — tourism, truly, increasing.', style: 'Country warm low sincere unhurried reporting-opening warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'naoko_aunt', jp: '町、本当、活気、戻った、ね。', en: 'Town — truly, vitality, returned.', style: 'Aunt warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '皆で、頑張った結果、本当に。', en: 'All — tried hard result, truly.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '一緒に、ここまで、本当、宝。', en: 'Together — until here, truly, treasure.', style: 'Aunt warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '大切な、町、本当に。', en: 'Precious — town, truly.', style: 'Country warm low sincere unhurried tender-deep loving, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Aunt warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '本当、感謝、皆に。', en: 'Truly — grateful, to all.', style: 'Country warm low sincere closing-warm grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1282 — saito + kenji, health discussion (short)
  {
    id: 'conv_01282',
    context: 'Saito reminds Kenji about his health checkup.',
    purpose: 'doctor-patient checkup exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '相談', '大切', '頑張る'],
    cast: ['saito_doctor', 'kenji_office'],
    frequency_tier: 4,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '健次さん、健康、保つ、大切。', en: 'Kenji-san — health, keep, precious.', style: 'Doctor warm formal sincere-warm advising-opening tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'kenji_office', jp: 'はい、頑張ります、本当に。', en: 'Yes — try hard, truly.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '相談、いつでも、本当に。', en: 'Consult — anytime, truly.', style: 'Doctor warm formal sincere-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: '一緒に、長く、ね。', en: 'Together — long.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1283 — ren + sakura, late-night reflection (medium)
  {
    id: 'conv_01283',
    context: 'Ren and Sakura share a late-night chat about life choices.',
    purpose: 'cousin late-night reflection exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['人生', '一緒', '感謝', '大切', '考える'],
    cast: ['ren_uni', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'さくら、人生、本当、不思議、ね。', en: 'Sakura — life, truly, mysterious.', style: 'University student warm soft sincere-warm philosophical-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'うん、考えて、本当、深い、本当に。', en: 'Yes — considering, truly, deep, truly.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当、毎日。', en: 'Grateful — truly, every day.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '一緒に、ここまで、本当、宝。', en: 'Together — until here, truly, treasure.', style: 'Teen warm soft sincere tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '大切な、繋がり、本当に。', en: 'Precious — connection, truly.', style: 'University student warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'これからも、ね、ずっと。', en: 'From now — long.', style: 'Teen warm soft sincere tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'University student warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1284 — daichi + tatsuya, festival success (medium)
  {
    id: 'conv_01284',
    context: 'Daichi and Tatsuya celebrate a successful festival together.',
    purpose: 'cousin festival-success exchange',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['祭り', '町', '一緒', '頑張る', '感謝'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、祭り、本当、最高やった。', en: 'Tatsuya — festival, truly, best was.', style: 'Kansai warm bright sincere appreciative-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、皆で、頑張った結果。', en: 'Yes — all, tried hard result.', style: 'Country warm low sincere unhurried philosophical-warm appreciative, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '町、本当、活気、ある、ね。', en: 'Town — truly, vitality, exists.', style: 'Kansai warm bright sincere appreciative-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Country warm low sincere unhurried grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '一緒に、来年も、頑張ろうな。', en: 'Together — next year too, try hard.', style: 'Kansai warm bright sincere tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '本当、楽しい、本当に。', en: 'Truly — fun, truly.', style: 'Country warm low sincere unhurried tender-warm appreciative, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '大切な、町、本当に。', en: 'Precious — town, truly.', style: 'Kansai warm bright sincere closing-warm tender-deep loving, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1285 — yumiko + sachiko, longtime friends (long)
  {
    id: 'conv_01285',
    context: 'Yumiko and Sachiko have a long tea-time chat reflecting on decades.',
    purpose: 'elderly-mother decades-reflection',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '人生', '感謝', '大切', '家族'],
    cast: ['yumiko_mom', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'おばさん、本当、長く、繋がってきた、ね。', en: 'Auntie — truly, long, connected.', style: 'Maternal warm gentle sincere-warm reflective-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: 'うん、本当、ずっとね。', en: 'Yes — truly, long.', style: 'Grandma warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '人生、本当、不思議、ね。', en: 'Life — truly, mysterious.', style: 'Maternal warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '家族、皆、近くで、ありがたい。', en: 'Family — all, close, grateful.', style: 'Grandma warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '本当、感謝、毎日。', en: 'Truly — grateful, every day.', style: 'Maternal warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: '一緒に、過ごせる、本当、宝。', en: 'Together — can spend, truly, treasure.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Maternal warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Grandma warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: 'ご縁、本当、深い、ね。', en: 'Connection — truly, deep.', style: 'Maternal warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Grandma warm gentle sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '楽しい、毎日、本当に。', en: 'Fun — every day, truly.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '頑張ろう、ね、本当に。', en: 'Try hard — truly.', style: 'Grandma warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Maternal warm gentle sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_064 wrote', CONVERSATIONS.length, 'files');

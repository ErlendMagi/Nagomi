import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_061)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1206 — sho + hina, birds (medium)
  {
    id: 'conv_01206',
    context: 'Sho and Hina watch birds in the morning.',
    purpose: 'children bird-watching exchange',
    ambient: 'window_morning',
    sound_effects: [],
    target_vocab: ['鳥', '一緒', '可愛い', '見る', '楽しい'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、鳥、いっぱい、いる！', en: 'Sho — birds, many, exist!', style: 'High child bright sincere excited-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、可愛い、ね。', en: 'Yes — cute.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'スズメ、たくさん、いる。', en: 'Sparrows — lots, exist.', style: 'High child bright sincere observing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '見るの、楽しい。', en: 'Looking — fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'パン、あげようか。', en: 'Bread — give?', style: 'High child bright sincere proposing-warm engaged, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、優しく、ね。', en: 'Together — gently.', style: 'Tiny six-year-old soft small sincere committed-warm careful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '楽しい、朝。', en: 'Fun — morning.', style: 'High child bright sincere closing-warm philosophical-bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1207 — tatsuya + sho, rice field (short)
  {
    id: 'conv_01207',
    context: 'Tatsuya teaches Sho about the rice field.',
    purpose: 'uncle-child rice-field exchange',
    ambient: 'field_morning',
    sound_effects: [],
    target_vocab: ['田んぼ', '米', '一緒', '頑張る', '優しい'],
    cast: ['tatsuya_country', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'しょう、田んぼ、見てみ。', en: 'Sho — rice field, look.', style: 'Country warm low sincere unhurried teaching-opening tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'sho_child', jp: 'お米、ここから、来る、ね。', en: 'Rice — from here, comes.', style: 'Tiny six-year-old soft small sincere appreciative-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'tatsuya_country', jp: '優しく、育てる、大事や。', en: 'Gently — raising, important.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '一緒に、頑張る、ね。', en: 'Together — try hard.', style: 'Tiny six-year-old soft small sincere committed-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'tatsuya_country', jp: '次、収穫、楽しみや。', en: 'Next — harvest, looking forward.', style: 'Country warm low sincere closing-warm anticipating-tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1208 — asuka + sakura, lifetime mentor (medium)
  {
    id: 'conv_01208',
    context: 'Asuka and Sakura meet at a writing event together.',
    purpose: 'teacher-alum writing-event exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '大切', '指導'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、今日、本当、立派。', en: 'Sakura-san — today, truly, splendid.', style: 'Teacher warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '先生、いつも、感謝、本当に。', en: 'Teacher — always, grateful, truly.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '人生、本当、繋がってる。', en: 'Life — truly, connected.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '指導、ずっと、力に、なる。', en: 'Guidance — long, strength, becomes.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: '一緒に、ここまで、来た、宝。', en: 'Together — until here, came, treasure.', style: 'Teacher warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Teen warm soft sincere tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'これからも、応援、する。', en: 'From now — cheer, do.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1209 — yumiko + hina, sunset (short)
  {
    id: 'conv_01209',
    context: 'Yumiko and Hina watch a beautiful sunset.',
    purpose: 'mother-child sunset exchange',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['夕焼け', '一緒', '綺麗', '優しい', '空'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、夕焼け、見て、空、綺麗。', en: 'Hina-chan — sunset, look, sky, beautiful.', style: 'Maternal warm gentle sincere-warm tender-opening appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'わあ、本当、綺麗。', en: 'Wow — truly, beautiful.', style: 'High child bright sincere awe-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '優しい、色、ね。', en: 'Kind — color.', style: 'Maternal warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '一緒に、見れて、嬉しい。', en: 'Together — can see, happy.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'yumiko_mom', jp: '大切な、瞬間、本当に。', en: 'Precious — moment, truly.', style: 'Maternal warm gentle sincere closing-warm tender-philosophical deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1210 — ryosuke + tatsuya, life seasons (long)
  {
    id: 'conv_01210',
    context: 'Ryosuke and Tatsuya reflect on a lifetime of seasons together.',
    purpose: 'cousin lifetime-reflection exchange',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['一緒', '人生', '感謝', '家族', '大切'],
    cast: ['ryosuke_dad', 'tatsuya_country'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'たつや、四季、何度、見てきた、だろう。', en: 'Tatsuya — four seasons, how many times, seen.', style: 'Father warm gentle sincere-warm reflective-opening philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'うん、本当、たくさん。', en: 'Yes — truly, many.', style: 'Country warm low sincere unhurried philosophical-warm matching, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: '春の桜、夏の青、覚えてる。', en: 'Spring cherry — summer blue, remember.', style: 'Father warm gentle sincere-warm nostalgic-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '秋の紅葉、冬の雪、最高や。', en: 'Autumn leaves — winter snow, best.', style: 'Country warm low sincere unhurried appreciative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '家族、皆と、一緒、本当に、宝。', en: 'Family — with all, together, truly, treasure.', style: 'Father warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '感謝、本当、毎日。', en: 'Grateful — truly, every day.', style: 'Country warm low sincere unhurried grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '人生、本当、不思議。', en: 'Life — truly, mysterious.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'お互い、年取ったな、本当に。', en: 'Mutually — aged, truly.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、ここまで、来た、嬉しい。', en: 'Together — until here, came, happy.', style: 'Father warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '大切な、季節、また、来る。', en: 'Precious — season, again, comes.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '楽しみ、本当に、毎年。', en: 'Looking forward — truly, every year.', style: 'Father warm gentle sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '一緒に、見守ろう、ね。', en: 'Together — watch over.', style: 'Country warm low sincere closing-warm tender-promise deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'これからも、本当に、ね。', en: 'From now — truly.', style: 'Father warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1211 — hina + sho, summer cicadas (short)
  {
    id: 'conv_01211',
    context: 'Hina and Sho listen to cicadas chirping.',
    purpose: 'children cicada-sound exchange',
    ambient: 'garden_afternoon',
    sound_effects: [],
    target_vocab: ['夏', '虫', '一緒', '楽しい', '聞く'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、夏の虫、聞こえる。', en: 'Sho — summer bug, hear.', style: 'High child bright sincere observing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、セミ、いっぱい。', en: 'Yes — cicadas, many.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '夏らしい、音、ね。', en: 'Summer-like — sound.', style: 'High child bright sincere appreciative-warm philosophical, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、聞くの、楽しい。', en: 'Together — listening, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、夏の日、ね。', en: 'Fun — summer day.', style: 'High child bright sincere closing-warm enthusiastic-tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1212 — kenji + ren, project review (medium)
  {
    id: 'conv_01212',
    context: 'Kenji and Ren review a community project together.',
    purpose: 'senior-alum project-review exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '頑張る', '指導', '大切'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、プロジェクト、本当、進んでる。', en: 'Ren-kun — project, truly, progressing.', style: 'Salaryman warm soft sincere-warm appreciative-opening warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当、いつも、ですね。', en: 'Grateful — truly, always.', style: 'University student warm soft sincere-warm grateful-warm humble, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '生徒、本当、頑張ってる、見える。', en: 'Students — truly, trying hard, visible.', style: 'Salaryman warm soft sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '指導、本当、力になる、本当に。', en: 'Guidance — truly, strength becomes.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '一緒に、続けて、本当、嬉しい。', en: 'Together — continue, truly, happy.', style: 'Salaryman warm soft sincere-warm tender-warm grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '大切な、繋がり、本当に。', en: 'Precious — connection, truly.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: 'これからも、頑張ろう、ね。', en: 'From now — try hard.', style: 'Salaryman warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1213 — mei + aoi, mom-friends (medium)
  {
    id: 'conv_01213',
    context: 'Mei and Aoi share a quiet afternoon talking about their lives.',
    purpose: 'two-mother life reflection exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '友達', '感謝', '家族', '幸せ'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、本当、長い付き合い。', en: 'Aoi-chan — truly, long association.', style: 'Romantic warm soft sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'ね、本当、感謝。', en: 'Right — truly, grateful.', style: 'Barista warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '家族、皆、繋がってる、感じ。', en: 'Family — all, connected, feel.', style: 'Romantic warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '子供同士、仲、いい、嬉しい。', en: 'Children — close, happy.', style: 'Barista warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '幸せ、本当、毎日。', en: 'Happy — truly, every day.', style: 'Romantic warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'これからも、ずっと、ね。', en: 'From now — long.', style: 'Barista warm soft sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: '大切な、友達、本当に。', en: 'Precious — friend, truly.', style: 'Romantic warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1214 — daichi + yumiko, kitchen visit (short)
  {
    id: 'conv_01214',
    context: 'Daichi visits Yumiko\'s kitchen for cooking.',
    purpose: 'son-in-law mother-in-law cooking exchange',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['料理', '一緒', '優しい', '美味しい', '家族'],
    cast: ['daichi_kansai', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'ゆみこさん、料理、教えて、ください。', en: 'Yumiko-san — cooking, teach, please.', style: 'Kansai warm bright sincere asking-opening respectful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: 'うん、優しく、教えるね。', en: 'Yes — gently, teach.', style: 'Maternal warm gentle sincere-warm welcoming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '家族のために、頑張りたい。', en: 'For family — want to try hard.', style: 'Kansai warm bright sincere committed-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: '一緒に、楽しもう。', en: 'Together — enjoy.', style: 'Maternal warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '美味しい、出来たら、嬉しい。', en: 'Delicious — if made, happy.', style: 'Kansai warm bright sincere closing-warm anticipating-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 1215 — hiroshi_boss + kenji, autumn visit (medium)
  {
    id: 'conv_01215',
    context: 'Hiroshi visits Kenji for autumn coffee.',
    purpose: 'mentor-successor autumn visit',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['秋', '一緒', '感謝', '楽しい', '大切'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、秋、本当、いい季節やな。', en: 'Kenji — autumn, truly, good season.', style: 'Boss firm formal direct philosophical-opening warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '本当に、紅葉、綺麗です。', en: 'Truly — autumn leaves, beautiful.', style: 'Salaryman warm formal sincere-warm matching-warm appreciative, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '一緒に、お茶、飲める、嬉しい。', en: 'Together — tea, can drink, happy.', style: 'Boss firm formal direct tender-warm appreciative, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '本当、感謝です、いつも。', en: 'Truly — grateful, always.', style: 'Salaryman warm formal sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '人生、本当、宝、ばかり。', en: 'Life — truly, treasures, only.', style: 'Boss firm formal direct philosophical-warm tender-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '楽しい、毎日、本当に。', en: 'Fun — every day, truly.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '大切な、時間、本当に。', en: 'Precious — time, truly.', style: 'Boss firm formal direct closing-warm tender-deep philosophical, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1216 — sakura + sho, drawing lesson (short)
  {
    id: 'conv_01216',
    context: 'Sakura helps Sho with a drawing.',
    purpose: 'older-younger drawing-help exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['絵', '一緒', '優しい', '楽しい', '頑張る'],
    cast: ['sakura_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'さくらお姉ちゃん、絵、教えて。', en: 'Sakura sister — picture, teach.', style: 'Tiny six-year-old soft small sincere asking-opening hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sakura_teen', jp: 'うん、優しく、描こうね。', en: 'Yes — gently, draw.', style: 'Teen warm soft sincere agreeing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '頑張る、本当に。', en: 'Try hard — truly.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'sakura_teen', jp: '一緒に、楽しい、ね。', en: 'Together — fun.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'お姉ちゃん、優しい。', en: 'Sister — kind.', style: 'Tiny six-year-old soft small sincere closing-warm tender-deep grateful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' }
    ]
  },
  // 1217 — saito + ryosuke, longevity (medium)
  {
    id: 'conv_01217',
    context: 'Saito celebrates Ryosuke\'s eightieth birthday.',
    purpose: 'doctor-patient longevity exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '人生', '大切', '感謝'],
    cast: ['saito_doctor', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '亮介さん、八十、おめでとう。', en: 'Ryosuke-san — eighty, congratulations.', style: 'Doctor warm formal sincere-warm warm-opening tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'おかげさまで、本当、感謝。', en: 'Thanks — truly, grateful.', style: 'Father warm gentle sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: '健康、本当、優れてる。', en: 'Health — truly, superior.', style: 'Doctor warm formal sincere-warm affirming-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'ryosuke_dad', jp: '家族、皆、近くで、ありがたい。', en: 'Family — all, close, grateful.', style: 'Father warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'saito_doctor', jp: '人生、本当に、立派。', en: 'Life — truly, splendid.', style: 'Doctor warm formal sincere-warm philosophical-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、長く、お元気で。', en: 'Together — long, healthy.', style: 'Father warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '大切な、患者、本当に。', en: 'Precious — patient, truly.', style: 'Doctor warm formal sincere closing-warm tender-deep philosophical, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1218 — daichi + tatsuya, harvest dinner (medium)
  {
    id: 'conv_01218',
    context: 'Daichi and Tatsuya share a harvest dinner in autumn.',
    purpose: 'cousin harvest-dinner exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['秋', '収穫', '一緒', '美味しい', '感謝'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、秋の収穫、最高やな。', en: 'Tatsuya — autumn harvest, best.', style: 'Kansai warm bright sincere appreciative-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、皆で、頑張った結果。', en: 'Yes — all, tried hard result.', style: 'Country warm low sincere unhurried philosophical-warm appreciative, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '料理、本当、美味しい。', en: 'Cooking — truly, delicious.', style: 'Kansai warm bright sincere appreciative-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Country warm low sincere unhurried grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '一緒に、過ごす時間、宝。', en: 'Together — spending time, treasure.', style: 'Kansai warm bright sincere philosophical-warm tender-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'これからも、ね。', en: 'From now.', style: 'Country warm low sincere unhurried tender-promise warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '楽しい、毎年、絶対。', en: 'Fun — every year, surely.', style: 'Kansai warm bright sincere closing-warm anticipating-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1219 — hina + yumiko, mother lessons (medium)
  {
    id: 'conv_01219',
    context: 'Yumiko teaches Hina how to fold laundry.',
    purpose: 'mother-child chore exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '頑張る', '楽しい', '家族'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、洗濯物、一緒に、たたもう。', en: 'Hina-chan — laundry, together, fold.', style: 'Maternal warm gentle sincere-warm inviting-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、頑張る。', en: 'Yes — try hard.', style: 'High child bright sincere committed-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '優しく、丁寧に、ね。', en: 'Gently — carefully.', style: 'Maternal warm gentle sincere-warm teaching-warm patient, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'お手伝い、楽しい。', en: 'Help — fun.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '家族のために、優しい子、ね。', en: 'For family — kind child.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '一緒に、毎日、頑張る。', en: 'Together — every day, try hard.', style: 'High child bright sincere committed-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '本当に、ありがとう。', en: 'Truly — thanks.', style: 'Maternal warm gentle sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1220 — ren + sakura, sibling reunion (long)
  {
    id: 'conv_01220',
    context: 'Ren and Sakura reunite after years for an extended chat.',
    purpose: 'cousin extended-reunion exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '人生', '感謝', '夢', '大切'],
    cast: ['ren_uni', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'さくら、本当、久しぶり。', en: 'Sakura — truly, long time.', style: 'University student warm soft sincere-warm warm-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、嬉しい、本当に。', en: 'Ren-bro — happy, truly.', style: 'Teen warm soft sincere grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '生徒、お前の本、皆、読んでる。', en: 'Students — your book, all, reading.', style: 'University student warm soft sincere-warm appreciative-warm proud, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '本当！嬉しい、本当に。', en: 'Truly! Happy, truly.', style: 'Teen warm soft sincere appreciative-warm grateful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: '夢、繋がってる、感じ、本当に。', en: 'Dream — connected, feel, truly.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '人生、本当、不思議。', en: 'Life — truly, mysterious.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、ここまで、来た、宝。', en: 'Together — until here, came, treasure.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、本当、家族、皆に。', en: 'Grateful — truly, family, to all.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'お父さん、お母さん、本当、立派。', en: 'Father — Mother, truly, splendid.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'これからも、ずっと、頑張る。', en: 'From now — long, try hard.', style: 'Teen warm soft sincere committed-warm tender-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '大切な、繋がり、本当に。', en: 'Precious — connection, truly.', style: 'University student warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、ずっと、応援。', en: 'Together — long, cheer.', style: 'Teen warm soft sincere tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'University student warm soft sincere closing-warm matching-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1221 — sho + asuka, school career (medium)
  {
    id: 'conv_01221',
    context: 'Asuka asks Sho about what he wants to be.',
    purpose: 'teacher-child future-talk exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['夢', '一緒', '頑張る', '将来', '楽しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、将来、何になりたい？', en: 'Sho-kun — future, what want to become?', style: 'Teacher warm gentle sincere-warm asking-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sho_child', jp: 'うーん、お医者さん、なりたい。', en: 'Hmm — doctor, want to become.', style: 'Tiny six-year-old soft small sincere thinking-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '素敵な、夢、ね。', en: 'Lovely — dream.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sho_child', jp: '皆、助けたい。', en: 'All — want to help.', style: 'Tiny six-year-old soft small sincere honest-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: '優しい、心、本当に。', en: 'Kind — heart, truly.', style: 'Teacher warm gentle sincere-warm tender-deep affirming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sho_child', jp: '一緒に、頑張る、本当に。', en: 'Together — try hard, truly.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '応援、ずっと、する。', en: 'Cheer — long, do.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1222 — mei + naoko, family network (medium)
  {
    id: 'conv_01222',
    context: 'Mei brings her children to visit Naoko.',
    purpose: 'aunt-niece visit exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '優しい', '楽しい', '感謝'],
    cast: ['naoko_aunt', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'メイちゃん、子供たち、可愛い、本当。', en: 'Mei-chan — children, cute, truly.', style: 'Aunt warm soft sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '直子おばさん、いつも、優しい。', en: 'Naoko-auntie — always, kind.', style: 'Romantic warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '一緒に、過ごす時間、宝。', en: 'Together — spending time, treasure.', style: 'Aunt warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '家族、皆、近くで、嬉しい。', en: 'Family — all, close, happy.', style: 'Romantic warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '楽しい、毎日、ね。', en: 'Fun — every day.', style: 'Aunt warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '感謝、本当に、いつも。', en: 'Grateful — truly, always.', style: 'Romantic warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'これからも、よろしく。', en: 'From now — please.', style: 'Aunt warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1223 — daichi + sho, family bond (short)
  {
    id: 'conv_01223',
    context: 'Daichi and Sho share an evening reading.',
    purpose: 'uncle-child reading exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '本', '優しい', '楽しい', '頑張る'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、本、一緒に、読もか。', en: 'Sho — book, together, read?', style: 'Kansai warm bright sincere proposing-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'うん、優しい、お話？', en: 'Yes — kind, story?', style: 'Tiny six-year-old soft small sincere asking-warm hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: 'うん、楽しい話、選んだで。', en: 'Yes — fun story, chose.', style: 'Kansai warm bright sincere committed-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張って、聞く、ね。', en: 'Try hard — listen.', style: 'Tiny six-year-old soft small sincere committed-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: '一緒の時間、嬉しい。', en: 'Together time — happy.', style: 'Kansai warm bright sincere closing-warm tender-deep grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 1224 — kenji + sakura, mentorship across worlds (medium)
  {
    id: 'conv_01224',
    context: 'Kenji and Sakura collaborate on a writing-business event.',
    purpose: 'businessman-author collaboration exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '感謝', '大切', '夢'],
    cast: ['kenji_office', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'さくらさん、一緒に、企画、出来て、嬉しい。', en: 'Sakura-san — together, project, can do, happy.', style: 'Salaryman warm formal sincere-warm appreciative-opening warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '健次さん、こちらこそ、感謝。', en: 'Kenji-san — same, grateful.', style: 'Teen warm soft sincere matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '夢、繋がる、感じ、本当に。', en: 'Dream — connect, feel, truly.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '本当に、頑張る、本当に。', en: 'Truly — try hard, truly.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、ずっと、ね。', en: 'Together — long.', style: 'Teen warm soft sincere tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'Salaryman warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1225 — hina + sho, late evening (short)
  {
    id: 'conv_01225',
    context: 'Hina and Sho whisper about their day before bed.',
    purpose: 'children bedtime-whisper exchange',
    ambient: 'bedroom_evening',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '優しい', '友達', '大切'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、今日も、楽しかった。', en: 'Sho — today too, was fun.', style: 'High child bright sincere reflective-opening tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-warm' },
      { speaker: 'sho_child', jp: 'うん、一緒、本当に、嬉しい。', en: 'Yes — together, truly, happy.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '友達、大切、本当に。', en: 'Friend — precious, truly.', style: 'High child bright sincere philosophical-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '優しい、ひな、本当に。', en: 'Kind — Hina, truly.', style: 'Tiny six-year-old soft small sincere tender-deep grateful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'おやすみ、しょう。', en: 'Good night — Sho.', style: 'High child bright sincere closing-warm tender-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_061 wrote', CONVERSATIONS.length, 'files');

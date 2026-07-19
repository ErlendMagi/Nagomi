import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_065)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1286 — hiroshi_boss + kenji, financial report (medium)
  {
    id: 'conv_01286',
    context: 'Hiroshi and Kenji review their financial report.',
    purpose: 'business financial-report exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['収入', '料金', '一緒', '頑張る', '会社'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、収入、本当、伸びてる。', en: 'Kenji — income, truly, growing.', style: 'Boss firm formal direct authoritative-opening clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、料金、見直し、効果、出てる。', en: 'Yes — fees, review, effect, emerging.', style: 'Salaryman warm formal sincere-warm professional-warm reporting, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '会社、本当、立派、ね。', en: 'Company — truly, splendid.', style: 'Boss firm formal direct appreciative-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '皆で、頑張った、結果、本当に。', en: 'All — tried hard, result, truly.', style: 'Salaryman warm formal sincere-warm grateful-warm humble, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '一緒に、これからも、ね。', en: 'Together — from now.', style: 'Boss firm formal direct tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '頑張ろう、本当に。', en: 'Try hard — truly.', style: 'Boss firm formal direct closing-warm tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1287 — sho + hina, helping mother (short)
  {
    id: 'conv_01287',
    context: 'Sho and Hina help their mother around the house.',
    purpose: 'children house-help exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['役立つ', '一緒', '頑張る', '優しい', '家族'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、お母さん、役立つ、しよう。', en: 'Sho — mom, useful, do.', style: 'High child bright sincere proposing-opening committed, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、頑張る、絶対。', en: 'Yes — try hard, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、お手伝い、楽しい。', en: 'Together — help, fun.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '優しい、子、ぼくたち、本当。', en: 'Kind — children, we, truly.', style: 'Tiny six-year-old soft small sincere tender-warm philosophical, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '家族、皆、嬉しい、絶対。', en: 'Family — all, happy, surely.', style: 'High child bright sincere closing-warm tender-deep grateful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1288 — asuka + sakura, primary school (medium)
  {
    id: 'conv_01288',
    context: 'Sakura visits an elementary school as a guest.',
    purpose: 'author-school visit exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['小学校', '生徒', '一緒', '頑張る', '楽しい'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、小学校、本当、楽しみ。', en: 'Sakura-san — primary school, truly, looking forward.', style: 'Teacher warm gentle sincere-warm welcoming-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '生徒、本当、可愛い、はず。', en: 'Students — truly, cute, expect.', style: 'Teen warm soft sincere anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、本当、楽しい時間、なる。', en: 'Together — truly, fun time, becomes.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '頑張ります、本当に。', en: 'Try hard — truly.', style: 'Teen warm soft sincere committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '皆、本当、喜ぶ、絶対。', en: 'All — truly, happy, surely.', style: 'Teacher warm gentle sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Teacher warm gentle sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1289 — ren + sho, study help (short)
  {
    id: 'conv_01289',
    context: 'Ren helps Sho with a study problem.',
    purpose: 'cousin study-help exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['勉強', '一緒', '頑張る', '優しい', '楽しい'],
    cast: ['ren_uni', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'レンお兄ちゃん、勉強、教えて。', en: 'Ren brother — study, teach.', style: 'Tiny six-year-old soft small sincere asking-opening hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'ren_uni', jp: 'うん、優しく、教えるよ。', en: 'Yes — gently, teach.', style: 'University student warm soft sincere-warm agreeing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '頑張る、絶対、本当に。', en: 'Try hard — surely, truly.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'ren_uni', jp: '一緒に、楽しい、ね。', en: 'Together — fun.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'ありがとう、本当に。', en: 'Thanks — truly.', style: 'Tiny six-year-old soft small sincere closing-warm grateful-deep tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' }
    ]
  },
  // 1290 — kenji + sakura, novel film progress (long)
  {
    id: 'conv_01290',
    context: 'Kenji updates Sakura on the film adaptation progress.',
    purpose: 'businessman-author film-progress exchange',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['映画', '監督', '一緒', '頑張る', '感謝'],
    cast: ['kenji_office', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'さくらさん、映画、本当、進んでる。', en: 'Sakura-san — film, truly, proceeding.', style: 'Salaryman warm formal sincere-warm announcing-opening engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '本当！監督、本当、立派な人。', en: 'Truly! Director — truly, splendid person.', style: 'Teen warm soft sincere appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: 'お前の作品、本当、愛してる、感じ。', en: 'Your work — truly, loving, feel.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '一緒に、ここまで、本当、宝。', en: 'Together — until here, truly, treasure.', style: 'Salaryman warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '夢、本当、また、広がる。', en: 'Dream — truly, again, widens.', style: 'Teen warm soft sincere appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '撮影、もうすぐ、始まる、ね。', en: 'Filming — soon, starts.', style: 'Salaryman warm soft sincere-warm anticipating-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '楽しみ、本当に、本当。', en: 'Looking forward — truly, truly.', style: 'Teen warm soft sincere enthusiastic-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '頑張ろう、本当、これからも。', en: 'Try hard — truly, from now.', style: 'Salaryman warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、本当、嬉しい。', en: 'Together — truly, happy.', style: 'Teen warm soft sincere tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Teen warm soft sincere tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '応援、本当、ずっと、する。', en: 'Cheer — truly, long, do.', style: 'Salaryman warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1291 — daichi + sho, country horse (short)
  {
    id: 'conv_01291',
    context: 'Daichi shows Sho a horse in the country.',
    purpose: 'uncle-child horse exchange',
    ambient: 'field_morning',
    sound_effects: [],
    target_vocab: ['馬', '一緒', '可愛い', '見る', '楽しい'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、馬、見たい？', en: 'Sho — horse, want to see?', style: 'Kansai warm bright sincere asking-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、可愛い、馬、見たい。', en: 'Yes — cute, horse, want to see.', style: 'Tiny six-year-old soft small sincere appreciative-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '優しい、馬、本当、ええで。', en: 'Kind — horse, truly, good.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '一緒に、近く、行こう。', en: 'Together — close, go.', style: 'Tiny six-year-old soft small sincere inviting-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '楽しい、本当、ね。', en: 'Fun — truly.', style: 'Kansai warm bright sincere closing-warm tender-deep philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 1292 — saito + naoko, medical exchange (medium)
  {
    id: 'conv_01292',
    context: 'Saito and Naoko discuss medical care recovery.',
    purpose: 'doctor-patient recovery exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['治療', '回復', '一緒', '感謝', '相談'],
    cast: ['saito_doctor', 'naoko_aunt'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '直子さん、治療、本当、順調。', en: 'Naoko-san — treatment, truly, smooth.', style: 'Doctor warm formal sincere-warm reassuring-opening professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'naoko_aunt', jp: '回復、本当、感謝。', en: 'Recovery — truly, grateful.', style: 'Aunt warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '健康、本当、保つ、大切。', en: 'Health — truly, keep, precious.', style: 'Doctor warm formal sincere-warm advising-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '相談、いつでも、ね。', en: 'Consult — anytime.', style: 'Aunt warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一緒に、長く、お元気で。', en: 'Together — long, healthy.', style: 'Doctor warm formal sincere-warm warm-promise tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '本当、感謝、ずっと。', en: 'Truly — grateful, long.', style: 'Aunt warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Doctor warm formal sincere closing-warm matching-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1293 — yuki + ren, broadcast event (medium)
  {
    id: 'conv_01293',
    context: 'Yuki coordinates a radio broadcast event with Ren.',
    purpose: 'two-colleague broadcast-event exchange',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['放送', '一緒', '頑張る', '楽しい', '感謝'],
    cast: ['yuki_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'レン君、放送、本当、楽しみ。', en: 'Ren-kun — broadcast, truly, looking forward.', style: 'Office woman bright soft sincere anticipating-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、頑張ります、絶対。', en: 'Yes — try hard, surely.', style: 'University student warm soft sincere-warm committed-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '一緒に、本当、楽しい、ね。', en: 'Together — truly, fun.', style: 'Office woman bright soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '生徒、本当、応援、する。', en: 'Students — truly, cheer, do.', style: 'University student warm soft sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'Office woman bright soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'University student warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'Office woman bright soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1294 — hina + sho, sister-brother bond (short)
  {
    id: 'conv_01294',
    context: 'Sho and Hina share a quiet moment together.',
    purpose: 'children quiet-bond exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '友達', '大切'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、一緒、本当、嬉しい。', en: 'Hina — together, truly, happy.', style: 'Tiny six-year-old soft small sincere reflective-opening tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'うん、しょう、本当、優しい。', en: 'Yes — Sho, truly, kind.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '友達、本当、宝物。', en: 'Friend — truly, treasure.', style: 'Tiny six-year-old soft small sincere philosophical-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '楽しい、毎日、本当。', en: 'Fun — every day, truly.', style: 'High child bright sincere tender-warm grateful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '大切な、本当、ね。', en: 'Precious — truly.', style: 'Tiny six-year-old soft small sincere closing-warm tender-deep philosophical, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' }
    ]
  },
  // 1295 — tatsuya + ryosuke, country future (medium)
  {
    id: 'conv_01295',
    context: 'Tatsuya and Ryosuke plan the village future.',
    purpose: 'cousin village-future exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['町', '一緒', '頑張る', '大切', '感謝'],
    cast: ['tatsuya_country', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '亮介、町の未来、本当、楽しみ。', en: 'Ryosuke — town future, truly, looking forward.', style: 'Country warm low sincere unhurried philosophical-opening engaged, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: 'うん、若い人、本当、頑張ってる。', en: 'Yes — young people, truly, trying hard.', style: 'Father warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '一緒に、ここまで、本当、宝。', en: 'Together — until here, truly, treasure.', style: 'Country warm low sincere unhurried tender-deep philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Father warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '大切な、町、本当に。', en: 'Precious — town, truly.', style: 'Country warm low sincere unhurried tender-deep loving, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Father warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '頑張ろう、本当に。', en: 'Try hard — truly.', style: 'Country warm low sincere closing-warm tender-promise warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1296 — asuka + ren, learning (medium)
  {
    id: 'conv_01296',
    context: 'Asuka and Ren plan new learning approaches.',
    purpose: 'mentor-colleague learning-approach exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['学習', '生徒', '一緒', '頑張る', '指導'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、学習、本当、新しい方法、必要。', en: 'Ren-kun — learning, truly, new method, needed.', style: 'Teacher warm gentle sincere-warm philosophical-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当、生徒、本当、頑張ってる。', en: 'Truly — students, truly, trying hard.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '指導、本当、お前らしい、本当に。', en: 'Guidance — truly, you-like, truly.', style: 'Teacher warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: '一緒に、本当、考えていこう。', en: 'Together — truly, think.', style: 'University student warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'Teacher warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'University student warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: 'これからも、頑張ろう、ね。', en: 'From now — try hard.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1297 — daichi + tatsuya, country economy (medium)
  {
    id: 'conv_01297',
    context: 'Daichi and Tatsuya plan to boost the local economy.',
    purpose: 'cousin economy-boost exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['経済', '町', '一緒', '頑張る', '相談'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、町の経済、本当、伸ばしたい。', en: 'Tatsuya — town economy, truly, want to extend.', style: 'Kansai warm bright sincere proposing-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、若い力、本当、必要。', en: 'Yes — young strength, truly, needed.', style: 'Country warm low sincere unhurried philosophical-warm engaged, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '相談、本当、皆と、しよう。', en: 'Consult — truly, with all, do.', style: 'Kansai warm bright sincere collaborative-warm engaged, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '一緒に、頑張る、本当に。', en: 'Together — try hard, truly.', style: 'Country warm low sincere unhurried committed-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Kansai warm bright sincere grateful-deep tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Country warm low sincere unhurried matching-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1298 — saito + sho, doctor visit (short)
  {
    id: 'conv_01298',
    context: 'Saito gives Sho a routine checkup.',
    purpose: 'doctor-child checkup exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '優しい', '頑張る', '楽しい'],
    cast: ['saito_doctor', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'しょうくん、健康、本当、いい、ね。', en: 'Sho-kun — health, truly, good.', style: 'Doctor warm formal sincere-warm reassuring-opening tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'sho_child', jp: '頑張ってる、本当に。', en: 'Trying hard — truly.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'saito_doctor', jp: '優しい、子、本当に。', en: 'Kind — child, truly.', style: 'Doctor warm formal sincere-warm appreciative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '一緒に、楽しい、本当。', en: 'Together — fun, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'saito_doctor', jp: 'お元気で、ね。', en: 'Healthy.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1299 — hina + yumiko, baking (medium)
  {
    id: 'conv_01299',
    context: 'Yumiko teaches Hina to bake bread.',
    purpose: 'mother-child baking exchange',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '頑張る', '楽しい', '美味しい'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、パン、一緒に、焼こうね。', en: 'Hina-chan — bread, together, bake.', style: 'Maternal warm gentle sincere-warm inviting-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'やった、楽しみ、本当に。', en: 'Yay — looking forward, truly.', style: 'High child bright sincere enthusiastic-warm bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '優しく、混ぜようね。', en: 'Gently — mix.', style: 'Maternal warm gentle sincere-warm teaching-warm patient, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '頑張る、本当、絶対。', en: 'Try hard — truly, surely.', style: 'High child bright sincere committed-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '美味しい、絶対、出来る。', en: 'Delicious — surely, can make.', style: 'Maternal warm gentle sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: '楽しい、本当、ね。', en: 'Fun — truly.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '一緒に、本当、嬉しい。', en: 'Together — truly, happy.', style: 'Maternal warm gentle sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1300 — milestone: ren + sakura, future generations (medium)
  {
    id: 'conv_01300',
    context: 'Ren and Sakura think about future generations of writers.',
    purpose: 'cousin future-generations exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '夢', '感謝', '頑張る', '大切'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、若い世代、本当、頑張ってる。', en: 'Ren-bro — young generation, truly, trying hard.', style: 'Teen warm soft sincere appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、本当、頼もしい、ね。', en: 'Yes — truly, reliable.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、繋いで、いきたい、本当に。', en: 'Together — connect, want to, truly.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '夢、本当、繋がってる、感じ。', en: 'Dream — truly, connected, feel.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '大切な、繋がり、本当に。', en: 'Precious — connection, truly.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'これからも、頑張ろう、本当に。', en: 'From now — try hard, truly.', style: 'Teen warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1301 — kenji + ryosuke, financial advice (medium)
  {
    id: 'conv_01301',
    context: 'Ryosuke gives financial advice to Kenji.',
    purpose: 'mentor-mentee financial advice',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['投資', '相談', '一緒', '頑張る', '大切'],
    cast: ['ryosuke_dad', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '亮介さん、投資、本当、悩んでる。', en: 'Ryosuke-san — investment, truly, troubled.', style: 'Salaryman warm formal sincere-warm vulnerable-opening honest, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'ゆっくり、本当、考えよう。', en: 'Slowly — truly, think.', style: 'Father warm gentle sincere-warm wise-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: '相談、本当、心強い。', en: 'Consult — truly, heart-strong.', style: 'Salaryman warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'Father warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'Salaryman warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1302 — sho + hina, autumn leaves (short)
  {
    id: 'conv_01302',
    context: 'Hina and Sho collect autumn leaves at the park.',
    purpose: 'children leaves-collection exchange',
    ambient: 'park_afternoon',
    sound_effects: [],
    target_vocab: ['秋', '葉', '一緒', '楽しい', '綺麗'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、秋の葉、いっぱい、綺麗。', en: 'Sho — autumn leaves, many, beautiful.', style: 'High child bright sincere appreciative-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、本当、綺麗、ね。', en: 'Yes — truly, beautiful.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、集めよう、本当に。', en: 'Together — collect, truly.', style: 'High child bright sincere proposing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、本当、絶対。', en: 'Fun — truly, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '思い出、作る、本当、ね。', en: 'Memory — make, truly.', style: 'High child bright sincere closing-warm tender-philosophical deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1303 — yuki + naoko, decade reflection (medium)
  {
    id: 'conv_01303',
    context: 'Yuki and Naoko reflect on a decade of friendship.',
    purpose: 'two-women decade-reflection exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '友達', '感謝', '人生', '大切'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、もう、十年、本当、早い。', en: 'Naoko-san — already, ten years, truly, fast.', style: 'Office woman bright soft sincere reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: 'うん、本当、本当に、ずっと。', en: 'Yes — truly, truly, long.', style: 'Aunt warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '人生、本当、繋がってる、感じ。', en: 'Life — truly, connected, feel.', style: 'Office woman bright soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '友達、本当、宝物、ね。', en: 'Friend — truly, treasure.', style: 'Aunt warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'Office woman bright soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Aunt warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Office woman bright soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1304 — asuka + sakura, lifetime journey (long)
  {
    id: 'conv_01304',
    context: 'Asuka and Sakura mark a lifetime of working together.',
    purpose: 'teacher-alum lifetime exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['指導', '一緒', '感謝', '人生', '大切'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、本当、長く、繋がってきた。', en: 'Sakura-san — truly, long, connected.', style: 'Teacher warm gentle sincere-warm reflective-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '先生、本当、感謝、ずっと。', en: 'Teacher — truly, grateful, long.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '指導、出来た事、本当、宝。', en: 'Guidance — could do, truly, treasure.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '人生、本当、変えてくれた。', en: 'Life — truly, changed.', style: 'Teen warm soft sincere tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'お前から、本当、たくさん、学んだ。', en: 'From you — truly, lots, learned.', style: 'Teacher warm gentle sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、ここまで、本当、嬉しい。', en: 'Together — until here, truly, happy.', style: 'Teen warm soft sincere tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '大切な、生徒、本当に。', en: 'Precious — student, truly.', style: 'Teacher warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '夢、ずっと、追ってきた、本当に。', en: 'Dream — long, chased, truly.', style: 'Teen warm soft sincere reflective-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: '応援、本当、ずっと、する。', en: 'Cheer — truly, long, do.', style: 'Teacher warm gentle sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: 'これからも、頑張る、絶対。', en: 'From now — try hard, surely.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'お前の作品、本当、ずっと、読む。', en: 'Your works — truly, long, read.', style: 'Teacher warm gentle sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '感謝、本当、毎日。', en: 'Grateful — truly, every day.', style: 'Teen warm soft sincere tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Teacher warm gentle sincere closing-warm matching-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1305 — daichi + sho, country drive (medium)
  {
    id: 'conv_01305',
    context: 'Daichi takes Sho on a country drive.',
    purpose: 'uncle-child country-drive exchange',
    ambient: 'street_morning',
    sound_effects: [],
    target_vocab: ['道路', '一緒', '楽しい', '町', '頑張る'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、道路、本当、空いてる。', en: 'Sho — road, truly, empty.', style: 'Kansai warm bright sincere observing-opening engaged, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '田舎、本当、好き。', en: 'Country — truly, like.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '一緒に、ドライブ、楽しい、ね。', en: 'Together — drive, fun.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '町、本当、綺麗、ね。', en: 'Town — truly, beautiful.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'Kansai warm bright sincere tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、本当に。', en: 'Fun — truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Kansai warm bright sincere closing-warm grateful-deep tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_065 wrote', CONVERSATIONS.length, 'files');

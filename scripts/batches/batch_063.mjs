import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_063)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1246 — hiroshi_boss + kenji, product launch (medium)
  {
    id: 'conv_01246',
    context: 'Hiroshi and Kenji prepare for a product launch event.',
    purpose: 'business product-launch exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['製品', '消費', '販売', '頑張る', '考える'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、新しい製品、発表、近い。', en: 'Kenji — new product, launch, close.', style: 'Boss firm formal direct authoritative-opening clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、開発、終わりました。', en: 'Yes — development, finished.', style: 'Salaryman warm formal sincere-warm professional-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '消費者、本当、待ってる、感じる。', en: 'Consumers — truly, waiting, feel.', style: 'Boss firm formal direct philosophical-warm clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '販売、本当、期待、しています。', en: 'Sales — truly, expecting.', style: 'Salaryman warm formal sincere-warm enthusiastic-warm committed, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '頑張ってきた、本当、立派。', en: 'Tried hard — truly, splendid.', style: 'Boss firm formal direct affirming-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '皆の、力、本当に、感謝。', en: 'All — strength, truly, grateful.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '考えて、これからも、進めよう。', en: 'Considering — from now, proceed.', style: 'Boss firm formal direct closing-warm tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1247 — sho + hina, tablet (short)
  {
    id: 'conv_01247',
    context: 'Sho and Hina use a tablet to look up information.',
    purpose: 'children tablet-search exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['調べる', '一緒', '楽しい', '頑張る', '知る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、調べてみよう、一緒に。', en: 'Sho — look up, together.', style: 'High child bright sincere proposing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、何、知りたい？', en: 'Yes — what, want to know?', style: 'Tiny six-year-old soft small sincere asking-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '動物の写真、見たい。', en: 'Animal pictures — want to see.', style: 'High child bright sincere enthusiastic-warm engaged, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張って、探そう、ね。', en: 'Try hard — search.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、本当に。', en: 'Fun — truly.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1248 — asuka + sakura, registration event (medium)
  {
    id: 'conv_01248',
    context: 'Asuka helps Sakura register for an event.',
    purpose: 'teacher-author registration exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['登録', '開催', '一緒', '頑張る', '感謝'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、登録、もう、済んだ？', en: 'Sakura-san — registration, already, done?', style: 'Teacher warm gentle sincere-warm asking-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sakura_teen', jp: 'はい、ちゃんと、終わりました。', en: 'Yes — properly, finished.', style: 'Teen warm soft sincere reporting-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'よかった、開催、本当に、楽しみ。', en: 'Good — event, truly, looking forward.', style: 'Teacher warm gentle sincere-warm enthusiastic-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、出られて、嬉しい。', en: 'Together — can attend, happy.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: '頑張ろう、本当に、ね。', en: 'Try hard — truly.', style: 'Teacher warm gentle sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当に、いつも。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Teacher warm gentle sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1249 — ren + ren_uni... not valid. Let me use kenji + ren, group meeting (medium)
  {
    id: 'conv_01249',
    context: 'Kenji and Ren attend a group strategy meeting.',
    purpose: 'colleague group-meeting exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['グループ', '一緒', '考える', '頑張る', '意見'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、グループ、本当、頼もしい。', en: 'Ren-kun — group, truly, reliable.', style: 'Salaryman warm soft sincere-warm appreciative-opening warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '皆、本当、頑張ってる、感じ。', en: 'All — truly, trying hard, feel.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '意見、いろいろ、出る、本当に。', en: 'Opinions — various, come out, truly.', style: 'Salaryman warm soft sincere-warm philosophical-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '考えて、本当、進む、感じ。', en: 'Considering — truly, proceed, feel.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、これからも、頑張ろう。', en: 'Together — from now, try hard.', style: 'Salaryman warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Salaryman warm soft sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1250 — saito + naoko, medical support (long)
  {
    id: 'conv_01250',
    context: 'Saito and Naoko discuss medical support in rural areas.',
    purpose: 'doctor-community medical exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['医療', '支援', '一緒', '相談', '大切'],
    cast: ['saito_doctor', 'naoko_aunt'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: '先生、医療の支援、本当、ありがたい。', en: 'Doctor — medical support, truly, grateful.', style: 'Aunt warm soft sincere-warm grateful-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'saito_doctor', jp: '本当、田舎、本当、必要。', en: 'Truly — country, truly, needed.', style: 'Doctor warm formal sincere-warm philosophical-warm engaged, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'naoko_aunt', jp: '皆、本当、安心、本当に。', en: 'All — truly, relieved, truly.', style: 'Aunt warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '若い医者、来てくれて、感謝。', en: 'Young doctors — coming, grateful.', style: 'Doctor warm formal sincere-warm grateful-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '本当、繋がってる、感じ、ね。', en: 'Truly — connected, feel.', style: 'Aunt warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'saito_doctor', jp: '相談、いつでも、出来る、大切。', en: 'Consult — anytime, possible, precious.', style: 'Doctor warm formal sincere-warm philosophical-warm caring, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '感謝、本当に、皆に。', en: 'Grateful — truly, to all.', style: 'Aunt warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: '町、本当、暖かい、人ばかり。', en: 'Town — truly, warm, people only.', style: 'Doctor warm formal sincere-warm appreciative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ、本当に、いつも。', en: 'Same — truly, always.', style: 'Aunt warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'saito_doctor', jp: '一緒に、見守って、いこう。', en: 'Together — watch over.', style: 'Doctor warm formal sincere-warm collaborative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '大切な、繋がり、本当に。', en: 'Precious — connection, truly.', style: 'Aunt warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'saito_doctor', jp: 'これからも、お願い、本当に。', en: 'From now — please, truly.', style: 'Doctor warm formal sincere-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Aunt warm soft sincere closing-warm matching-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1251 — hina + sho, internet (short)
  {
    id: 'conv_01251',
    context: 'Sho and Hina learn about internet safety.',
    purpose: 'children internet-safety exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['インターネット', '一緒', '安全', '頑張る', '楽しい'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、インターネット、安全、気を付ける。', en: 'Hina — internet, safety, careful.', style: 'Tiny six-year-old soft small sincere advising-opening serious, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'うん、知らない人、開かない、ね。', en: 'Yes — unknown people, don\'t open.', style: 'High child bright sincere committed-warm careful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-warm' },
      { speaker: 'sho_child', jp: '一緒に、頑張る、本当に。', en: 'Together — try hard, truly.', style: 'Tiny six-year-old soft small sincere committed-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '楽しい、勉強、絶対。', en: 'Fun — study, surely.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'お母さんに、聞こう。', en: 'Mom — ask.', style: 'Tiny six-year-old soft small sincere closing-warm practical-bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 1252 — hiroshi_boss + sakura, news interview (medium)
  {
    id: 'conv_01252',
    context: 'A news outlet interviews Sakura at Hiroshi\'s office.',
    purpose: 'author business-interview exchange',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['記事', '報道', '感謝', '一緒', '頑張る'],
    cast: ['hiroshi_boss', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'さくらさん、記事、本当、楽しみ。', en: 'Sakura-san — article, truly, looking forward.', style: 'Boss firm formal direct welcoming-opening warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'sakura_teen', jp: '光栄です、本当に。', en: 'Honored — truly.', style: 'Teen warm soft sincere humble-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '報道、本当、いい影響、なるね。', en: 'Reporting — truly, good influence, becomes.', style: 'Boss firm formal direct philosophical-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、お話、嬉しい。', en: 'Together — talk, happy.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '感謝、本当に、来てくれて。', en: 'Grateful — truly, came.', style: 'Boss firm formal direct grateful-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'sakura_teen', jp: '頑張ります、本当に。', en: 'Try hard — truly.', style: 'Teen warm soft sincere committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'これからも、応援、する。', en: 'From now — cheer.', style: 'Boss firm formal direct closing-warm tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1253 — daichi + ren, sports event organize (medium)
  {
    id: 'conv_01253',
    context: 'Daichi and Ren organize a town sports event.',
    purpose: 'cousin event-organize exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['大会', '一緒', '町', '頑張る', '応援'],
    cast: ['daichi_kansai', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'レン、町の大会、組織、しよか。', en: 'Ren — town tournament, organize?', style: 'Kansai warm bright sincere proposing-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: 'いいね、皆、喜ぶ、絶対。', en: 'Nice — all, happy, surely.', style: 'University student warm soft sincere-warm enthusiastic-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '選手、本当、頑張る、よう。', en: 'Players — truly, try hard.', style: 'Kansai warm bright sincere committed-warm philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: '応援、皆で、するの、楽しい。', en: 'Cheer — all, doing, fun.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '一緒に、計画、進めよか。', en: 'Together — plan, proceed?', style: 'Kansai warm bright sincere collaborative-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: '頑張ろう、絶対、本当に。', en: 'Try hard — surely, truly.', style: 'University student warm soft sincere-warm committed-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '町、本当、活気、戻るで。', en: 'Town — truly, vitality, returns.', style: 'Kansai warm bright sincere closing-warm anticipating-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1254 — kenji + ryosuke, retirement support (medium)
  {
    id: 'conv_01254',
    context: 'Ryosuke offers advice about retirement support to Kenji.',
    purpose: 'mentor-mentee retirement-support exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['支援', '相談', '一緒', '感謝', '大切'],
    cast: ['ryosuke_dad', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '健次さん、本当、頑張ってる、ね。', en: 'Kenji-san — truly, trying hard.', style: 'Father warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '亮介さんの、支援、本当、感謝。', en: 'Ryosuke-san\'s — support, truly, grateful.', style: 'Salaryman warm formal sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '相談、いつでも、本当に。', en: 'Consult — anytime, truly.', style: 'Father warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、ここまで、来た、宝。', en: 'Together — until here, came, treasure.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'Father warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Salaryman warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '感謝、こちらこそ、本当に。', en: 'Grateful — same, truly.', style: 'Father warm gentle sincere closing-warm matching-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1255 — hina + asuka, register class (short)
  {
    id: 'conv_01255',
    context: 'Asuka helps Hina register for an after-school class.',
    purpose: 'teacher-child registration exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['登録', '一緒', '頑張る', '楽しい', '勉強'],
    cast: ['asuka_teacher', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'ひなちゃん、登録、出来た、ね。', en: 'Hina-chan — registration, done.', style: 'Teacher warm gentle sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、楽しみ、本当に。', en: 'Yes — looking forward, truly.', style: 'High child bright sincere enthusiastic-warm bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、頑張ろうね。', en: 'Together — try hard.', style: 'Teacher warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: '勉強、楽しい、絶対。', en: 'Study — fun, surely.', style: 'High child bright sincere committed-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'asuka_teacher', jp: '応援、ずっと、する、ね。', en: 'Cheer — long, do.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1256 — sakura + ren, foreign translation (medium)
  {
    id: 'conv_01256',
    context: 'Sakura\'s book is being translated to a foreign language.',
    purpose: 'cousin book-translation exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['外国', '一緒', '夢', '頑張る', '感謝'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、外国に、本、訳される。', en: 'Ren-bro — overseas, book, translated.', style: 'Teen warm soft sincere announcing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: 'え、本当！すごい、本当に。', en: 'Eh — truly! Amazing, truly.', style: 'University student warm soft sincere-warm enthusiastic-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '夢、海、越える、感じ、本当に。', en: 'Dream — sea, crosses, feel, truly.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: 'お前の作品、世界、本当、繋がる。', en: 'Your works — world, truly, connect.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '一緒に、ここまで、来た、宝、本当に。', en: 'Together — until here, came, treasure, truly.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'これからも、頑張る、本当に。', en: 'From now — try hard, truly.', style: 'Teen warm soft sincere closing-warm committed-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1257 — mei + aoi, family update (medium)
  {
    id: 'conv_01257',
    context: 'Mei tells Aoi about her family\'s third child arriving.',
    purpose: 'two-mother family-update exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '可愛い', '幸せ', '頑張る'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、三人目、生まれた。', en: 'Aoi-chan — third one, born.', style: 'Romantic warm soft sincere-warm announcing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'aoi_barista', jp: 'え、おめでとう、本当に！', en: 'Eh — congratulations, truly!', style: 'Barista warm soft sincere-warm enthusiastic-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '可愛い、本当、本当に。', en: 'Cute — truly, truly.', style: 'Romantic warm soft sincere-warm tender-deep proud, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '家族、また、増えた、嬉しい。', en: 'Family — again, increased, happy.', style: 'Barista warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '幸せ、本当に、毎日。', en: 'Happy — truly, every day.', style: 'Romantic warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: '一緒に、頑張ろう、ね、本当に。', en: 'Together — try hard, truly.', style: 'Barista warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '感謝、本当に、ずっと。', en: 'Grateful — truly, long.', style: 'Romantic warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1258 — tatsuya + naoko, country event (medium)
  {
    id: 'conv_01258',
    context: 'Tatsuya tells Naoko about a community event in the town.',
    purpose: 'cousin community-event exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['行事', '町', '一緒', '楽しい', '頑張る'],
    cast: ['tatsuya_country', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '直子、町、新しい行事、計画してる。', en: 'Naoko — town, new event, planning.', style: 'Country warm low sincere unhurried announcing-opening engaged, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'naoko_aunt', jp: 'うん、楽しみ、本当に。', en: 'Yes — looking forward, truly.', style: 'Aunt warm soft sincere-warm appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '皆で、頑張る、絶対、楽しい。', en: 'All — try hard, surely, fun.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '一緒に、手伝う、本当に。', en: 'Together — help, truly.', style: 'Aunt warm soft sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Country warm low sincere unhurried grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Aunt warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '町、本当、明るく、なる。', en: 'Town — truly, brightly, becomes.', style: 'Country warm low sincere closing-warm anticipating-deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1259 — yumiko + ryosuke, autumn travel (long)
  {
    id: 'conv_01259',
    context: 'Yumiko and Ryosuke plan their autumn travel.',
    purpose: 'married-couple autumn-travel exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['旅行', '一緒', '楽しい', '計画', '感謝'],
    cast: ['yumiko_mom', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'お父さん、秋の旅行、計画、しよう。', en: 'Father — autumn travel, plan, do.', style: 'Maternal warm gentle sincere-warm proposing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、どこ、行こうか。', en: 'Yes — where, go?', style: 'Father warm gentle sincere-warm engaged-warm asking, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '東北、紅葉、見たい、ずっと。', en: 'Tohoku — autumn leaves, want to see, long.', style: 'Maternal warm gentle sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'いい場所、本当、たくさん。', en: 'Good place — truly, many.', style: 'Father warm gentle sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '温泉、本当、入りたい。', en: 'Onsen — truly, want to enter.', style: 'Maternal warm gentle sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'ゆっくり、過ごせる、本当。', en: 'Slowly — can spend, truly.', style: 'Father warm gentle sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '一緒に、嬉しい、本当に。', en: 'Together — happy, truly.', style: 'Maternal warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '楽しい、毎年、本当。', en: 'Fun — every year, truly.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '感謝、本当、お父さんに。', en: 'Grateful — truly, to father.', style: 'Maternal warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '計画、楽しい、本当。', en: 'Plan — fun, truly.', style: 'Maternal warm gentle sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Father warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '大切な、時間、本当に。', en: 'Precious — time, truly.', style: 'Maternal warm gentle sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1260 — sho + hina, simple search (short)
  {
    id: 'conv_01260',
    context: 'Sho and Hina search the dictionary together.',
    purpose: 'children dictionary-search exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['調べる', '一緒', '楽しい', '勉強', '頑張る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、辞書、一緒に、調べよう。', en: 'Sho — dictionary, together, search.', style: 'High child bright sincere proposing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、何、知らない、言葉？', en: 'Yes — what, unknown, word?', style: 'Tiny six-year-old soft small sincere asking-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '勉強、楽しい、本当。', en: 'Study — fun, truly.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張って、覚える、絶対。', en: 'Try hard — remember, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、勉強、楽しい。', en: 'Together — study, fun.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1261 — asuka + ren, course curriculum (medium)
  {
    id: 'conv_01261',
    context: 'Asuka and Ren design a new course curriculum.',
    purpose: 'mentor-colleague curriculum exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['構成', '指導', '一緒', '生徒', '頑張る'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、来年の構成、考えよう。', en: 'Ren-kun — next year\'s composition, think.', style: 'Teacher warm gentle sincere-warm collaborative-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、本当に、楽しみ。', en: 'Yes — truly, looking forward.', style: 'University student warm soft sincere-warm enthusiastic-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '生徒、本当、優しい、子、ばかり。', en: 'Students — truly, kind, children, only.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '指導、もっと、深めたい、本当に。', en: 'Guidance — more, want to deepen, truly.', style: 'University student warm soft sincere-warm committed-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、頑張ろう、本当に。', en: 'Together — try hard, truly.', style: 'Teacher warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当に、ずっと。', en: 'Grateful — truly, long.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Teacher warm gentle sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1262 — kenji + ren, business + education (medium)
  {
    id: 'conv_01262',
    context: 'Kenji and Ren discuss bringing business and education together.',
    purpose: 'businessman-teacher synergy exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['会社', '一緒', '指導', '感謝', '頑張る'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、会社、新しい、教育プログラム、考えてる。', en: 'Ren-kun — company, new, education program, considering.', style: 'Salaryman warm formal sincere-warm proposing-opening engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'え、本当ですか、嬉しい。', en: 'Eh — truly? Happy.', style: 'University student warm soft sincere-warm surprised-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: 'お前の指導、本当、参考に、なる。', en: 'Your guidance — truly, reference, becomes.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当、感謝、本当に。', en: 'Truly — grateful, truly.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '一緒に、創って、いきたい。', en: 'Together — create, want to.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、本当に。', en: 'Try hard — truly.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '大切な、繋がり、本当に。', en: 'Precious — connection, truly.', style: 'Salaryman warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1263 — daichi + sho, town festival (short)
  {
    id: 'conv_01263',
    context: 'Daichi takes Sho to the town festival.',
    purpose: 'uncle-child festival exchange',
    ambient: 'plaza_evening',
    sound_effects: [],
    target_vocab: ['祭り', '一緒', '楽しい', '頑張る', '町'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、お祭り、楽しいで。', en: 'Sho — festival, fun.', style: 'Kansai warm bright sincere enthusiastic-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、屋台、いっぱい、ある。', en: 'Yes — stalls, many, exist.', style: 'Tiny six-year-old soft small sincere appreciative-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '町、本当、賑やか、本当に。', en: 'Town — truly, lively, truly.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、楽しい、ね。', en: 'Together — fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '頑張ろう、皆と、ね。', en: 'Try hard — with all.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1264 — yuki + naoko, two-women planning (medium)
  {
    id: 'conv_01264',
    context: 'Yuki and Naoko plan a charity event together.',
    purpose: 'two-women charity-planning exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '感謝', '町', '大切'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、地域、本当、応援、したい。', en: 'Naoko-san — community, truly, support, want to.', style: 'Office woman bright soft sincere committed-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'うん、一緒に、頑張ろう、本当に。', en: 'Yes — together, try hard, truly.', style: 'Aunt warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '町の人、本当、優しい、本当に。', en: 'Town people — truly, kind, truly.', style: 'Office woman bright soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '感謝、本当、毎日。', en: 'Grateful — truly, every day.', style: 'Aunt warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '大切な、活動、本当に。', en: 'Precious — activity, truly.', style: 'Office woman bright soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '一緒に、繋いで、いこう。', en: 'Together — connect.', style: 'Aunt warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'これからも、本当に、ね。', en: 'From now — truly.', style: 'Office woman bright soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1265 — hina + sachiko, traditional craft (medium)
  {
    id: 'conv_01265',
    context: 'Sachiko teaches Hina a new sewing technique.',
    purpose: 'grandma-child sewing exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '頑張る', '伝統'],
    cast: ['sachiko_grandma', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'ひなちゃん、伝統の、縫い物、教えるね。', en: 'Hina-chan — traditional sewing, teach.', style: 'Grandma warm gentle sincere-warm teaching-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、頑張る、本当に。', en: 'Yes — try hard, truly.', style: 'High child bright sincere committed-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: '優しく、丁寧に、ね。', en: 'Gently — carefully.', style: 'Grandma warm gentle sincere-warm teaching-warm patient, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '一緒に、するの、楽しい、本当に。', en: 'Together — doing, fun, truly.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: '出来た、本当、立派。', en: 'Made — truly, splendid.', style: 'Grandma warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'hina_child', jp: 'おばあちゃん、本当、優しい。', en: 'Grandma — truly, kind.', style: 'High child bright sincere grateful-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sachiko_grandma', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Grandma warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_063 wrote', CONVERSATIONS.length, 'files');

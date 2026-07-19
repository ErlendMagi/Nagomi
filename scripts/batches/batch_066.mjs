import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_066)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1306 — hiroshi_boss + kenji, branch office (medium)
  {
    id: 'conv_01306',
    context: 'Hiroshi and Kenji review a new branch office plan.',
    purpose: 'business branch-office exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['支店', '確認', '一緒', '頑張る', '会社'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、新しい支店、本当、確認、必要。', en: 'Kenji — new branch, truly, confirmation, needed.', style: 'Boss firm formal direct authoritative-opening clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、現場、本当、見に行きます。', en: 'Yes — site, truly, go to see.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '会社、本当、拡大、進んでる。', en: 'Company — truly, expansion, proceeding.', style: 'Boss firm formal direct appreciative-warm clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '皆で、頑張った、結果、本当。', en: 'All — tried hard, result, truly.', style: 'Salaryman warm formal sincere-warm grateful-warm humble, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '一緒に、頑張ろう、本当、ね。', en: 'Together — try hard, truly.', style: 'Boss firm formal direct tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '期待、本当、ずっと。', en: 'Expecting — truly, long.', style: 'Boss firm formal direct closing-warm trusting-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 1307 — sho + hina, taxi ride (short)
  {
    id: 'conv_01307',
    context: 'Sho and Hina take their first taxi ride together.',
    purpose: 'children taxi exchange',
    ambient: 'street_afternoon',
    sound_effects: [],
    target_vocab: ['タクシー', '一緒', '楽しい', '頑張る', '見る'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、タクシー、初めて、ね。', en: 'Hina — taxi, first.', style: 'Tiny six-year-old soft small sincere excited-opening engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'うん、本当、楽しみ。', en: 'Yes — truly, looking forward.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '運転手さん、本当、優しい。', en: 'Driver — truly, kind.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '窓、外、見ようよ。', en: 'Window — outside, look.', style: 'High child bright sincere proposing-warm engaged, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、楽しい、本当に。', en: 'Together — fun, truly.', style: 'Tiny six-year-old soft small sincere closing-warm tender-bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 1308 — asuka + ren, classroom efficient (medium)
  {
    id: 'conv_01308',
    context: 'Asuka and Ren discuss efficient classroom management.',
    purpose: 'mentor-colleague efficiency exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['効率', '生徒', '一緒', '頑張る', '考える'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、効率、本当、上がってる。', en: 'Ren-kun — efficiency, truly, rising.', style: 'Teacher warm gentle sincere-warm appreciative-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '生徒、本当、頑張ってる、ね。', en: 'Students — truly, trying hard.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、考えて、本当に、嬉しい。', en: 'Together — thinking, truly, happy.', style: 'Teacher warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '指導、本当、効果的、感じ。', en: 'Guidance — truly, effective, feel.', style: 'University student warm soft sincere-warm philosophical-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '頑張ろう、本当、これからも。', en: 'Try hard — truly, from now.', style: 'Teacher warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Teacher warm gentle sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1309 — daichi + tatsuya, country delivery (short)
  {
    id: 'conv_01309',
    context: 'Daichi delivers fresh vegetables to Tatsuya.',
    purpose: 'cousin delivery exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['配達', '一緒', '頑張る', '感謝', '楽しい'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、配達、本当、ありがとう。', en: 'Tatsuya — delivery, truly, thanks.', style: 'Kansai warm bright sincere appreciative-opening warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、皆、頑張ってる、本当。', en: 'Yes — all, trying hard, truly.', style: 'Country warm low sincere unhurried appreciative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Kansai warm bright sincere grateful-deep tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '一緒に、楽しい、本当、ね。', en: 'Together — fun, truly.', style: 'Country warm low sincere unhurried tender-warm appreciative, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1310 — ryosuke + kenji, factory tour (long)
  {
    id: 'conv_01310',
    context: 'Ryosuke joins Kenji for a tour of a new factory.',
    purpose: 'mentor-successor factory-tour exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['工場', '一緒', '頑張る', '感謝', '会社'],
    cast: ['ryosuke_dad', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '健次さん、工場、本当、立派、ね。', en: 'Kenji-san — factory, truly, splendid.', style: 'Father warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、来てくれて。', en: 'Grateful — truly, came.', style: 'Salaryman warm formal sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '社員、本当、頑張ってる、感じる。', en: 'Employees — truly, trying hard, feel.', style: 'Father warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '皆、本当、立派な人、ばかり。', en: 'All — truly, splendid people, only.', style: 'Salaryman warm formal sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'お前、本当、頑張ってきた、本当に。', en: 'You — truly, tried hard, truly.', style: 'Father warm gentle sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '亮介さんの指導、本当、力に、なる。', en: 'Ryosuke-san\'s guidance — truly, strength, becomes.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '会社、本当、未来、明るい。', en: 'Company — truly, future, bright.', style: 'Father warm gentle sincere-warm hopeful-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、本当、ここまで、来た。', en: 'Together — truly, until here, came.', style: 'Salaryman warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Father warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Salaryman warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '頑張ろう、これからも、ね。', en: 'Try hard — from now.', style: 'Father warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '応援、本当、ずっと。', en: 'Cheer — truly, long.', style: 'Salaryman warm soft sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Father warm gentle sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1311 — hina + sho, simple check (short)
  {
    id: 'conv_01311',
    context: 'Sho asks Hina to check his homework.',
    purpose: 'children homework-check exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['確認', '一緒', '頑張る', '勉強', '楽しい'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、宿題、確認、お願い。', en: 'Hina — homework, check, please.', style: 'Tiny six-year-old soft small sincere asking-opening hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'うん、一緒に、見ようね。', en: 'Yes — together, look.', style: 'High child bright sincere agreeing-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張った、本当、絶対。', en: 'Tried hard — truly, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '勉強、本当、楽しい、ね。', en: 'Study — truly, fun.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ありがとう、本当に。', en: 'Thanks — truly.', style: 'Tiny six-year-old soft small sincere closing-warm grateful-deep tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' }
    ]
  },
  // 1312 — kenji + ren, expectation talk (medium)
  {
    id: 'conv_01312',
    context: 'Kenji and Ren discuss managing high expectations.',
    purpose: 'senior-alum expectation exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['期待', '一緒', '頑張る', '相談', '大切'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、期待、本当、大きい、感じる。', en: 'Ren-kun — expectation, truly, big, feel.', style: 'Salaryman warm soft sincere-warm philosophical-opening honest, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当、皆、信頼、感じる。', en: 'Truly — all, trust, feel.', style: 'University student warm soft sincere-warm matching-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'プレッシャー、本当、ある、本当に。', en: 'Pressure — truly, exists, truly.', style: 'Salaryman warm soft sincere-warm honest-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'University student warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '相談、本当、いつでも、ね。', en: 'Consult — truly, anytime.', style: 'Salaryman warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '大切な、繋がり、本当に。', en: 'Precious — connection, truly.', style: 'Salaryman warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1313 — mei + aoi, family café (medium)
  {
    id: 'conv_01313',
    context: 'Mei and Aoi plan a family-friendly café.',
    purpose: 'two-mother family-café exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '家族', '楽しい', '相談'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、家族向け、本当、いいね。', en: 'Aoi-chan — family-oriented, truly, good.', style: 'Romantic warm soft sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'うん、子供連れ、本当、増やしたい。', en: 'Yes — child-bringing, truly, want to increase.', style: 'Barista warm soft sincere-warm committed-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'Romantic warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '楽しい、本当、毎日。', en: 'Fun — truly, every day.', style: 'Barista warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '相談、いつでも、本当に。', en: 'Consult — anytime, truly.', style: 'Romantic warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'Barista warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Romantic warm soft sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1314 — sakura + ren, university talk (medium)
  {
    id: 'conv_01314',
    context: 'Sakura visits Ren\'s university to give a guest lecture.',
    purpose: 'cousin university-guest exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['大学', '一緒', '生徒', '頑張る', '感謝'],
    cast: ['ren_uni', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'さくら、大学、来てくれて、本当、感謝。', en: 'Sakura — university, came, truly, grateful.', style: 'University student warm soft sincere-warm grateful-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、本当、嬉しい。', en: 'Ren-bro — truly, happy.', style: 'Teen warm soft sincere matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '生徒、本当、楽しみ、してる。', en: 'Students — truly, looking forward.', style: 'University student warm soft sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '頑張ります、本当に。', en: 'Try hard — truly.', style: 'Teen warm soft sincere committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、ここまで、本当、宝。', en: 'Together — until here, truly, treasure.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'University student warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1315 — yumiko + naoko, family gathering (long)
  {
    id: 'conv_01315',
    context: 'Yumiko and Naoko plan a large family gathering.',
    purpose: 'sister-in-law family-gathering exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '頑張る', '感謝', '楽しい'],
    cast: ['yumiko_mom', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: '直子ちゃん、家族、皆、集める、本当、楽しみ。', en: 'Naoko-chan — family, all, gather, truly, looking forward.', style: 'Maternal warm gentle sincere-warm enthusiastic-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'うん、本当、本当に、ね。', en: 'Yes — truly, truly.', style: 'Aunt warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '子供たち、本当、可愛い、皆。', en: 'Children — truly, cute, all.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '一緒に、過ごす、本当、宝、ね。', en: 'Together — spend, truly, treasure.', style: 'Aunt warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '料理、本当、頑張る、絶対。', en: 'Cooking — truly, try hard, surely.', style: 'Maternal warm gentle sincere-warm committed-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '皆で、本当、楽しい時間、ね。', en: 'All — truly, fun time.', style: 'Aunt warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '感謝、本当、毎日、いつも。', en: 'Grateful — truly, every day, always.', style: 'Maternal warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Aunt warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '本当、家族、宝、ね。', en: 'Truly — family, treasure.', style: 'Maternal warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '大切な、人、皆。', en: 'Precious — people, all.', style: 'Aunt warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'Maternal warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Aunt warm soft sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Maternal warm gentle sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1316 — daichi + sho, train ride (short)
  {
    id: 'conv_01316',
    context: 'Daichi takes Sho on a train ride.',
    purpose: 'uncle-child train exchange',
    ambient: 'train_morning',
    sound_effects: [],
    target_vocab: ['電車', '一緒', '楽しい', '見る', '頑張る'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、電車、本当、好きやな。', en: 'Sho — train, truly, like.', style: 'Kansai warm bright sincere observing-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、窓、外、見るの、楽しい。', en: 'Yes — window, outside, looking, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '景色、本当、綺麗、ね。', en: 'Scenery — truly, beautiful.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '一緒に、楽しい、本当に。', en: 'Together — fun, truly.', style: 'Tiny six-year-old soft small sincere tender-warm appreciative, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '頑張ろうな、ずっと。', en: 'Try hard — long.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1317 — saito + sho, dental exam (medium)
  {
    id: 'conv_01317',
    context: 'Saito gives Sho a dental exam.',
    purpose: 'doctor-child dental exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['歯', '健康', '一緒', '頑張る', '優しい'],
    cast: ['saito_doctor', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'しょうくん、歯、本当、綺麗、磨いてる。', en: 'Sho-kun — teeth, truly, beautiful, brushing.', style: 'Doctor warm formal sincere-warm appreciative-opening tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'sho_child', jp: '頑張ってる、本当、毎日。', en: 'Trying hard — truly, every day.', style: 'Tiny six-year-old soft small sincere proud-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'saito_doctor', jp: '健康、本当、保てる、ね。', en: 'Health — truly, can keep.', style: 'Doctor warm formal sincere-warm reassuring-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'sho_child', jp: '優しい、先生、本当、好き。', en: 'Kind — doctor, truly, like.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'saito_doctor', jp: '一緒に、頑張ろう、本当に。', en: 'Together — try hard, truly.', style: 'Doctor warm formal sincere-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Tiny six-year-old soft small sincere grateful-deep tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'saito_doctor', jp: 'お元気で、ね。', en: 'Healthy.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1318 — kenji + hiroshi_boss, recognition (medium)
  {
    id: 'conv_01318',
    context: 'Hiroshi recognizes Kenji\'s leadership achievement.',
    purpose: 'mentor-successor leadership recognition',
    ambient: 'office_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '頑張る', '会社', '大切'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、本当、立派、ね。', en: 'Kenji — truly, splendid.', style: 'Boss firm formal direct appreciative-opening tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '本当、感謝、ずっと。', en: 'Truly — grateful, long.', style: 'Salaryman warm formal sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '会社、本当、誇り、思ってる。', en: 'Company — truly, proud, thinking.', style: 'Boss firm formal direct appreciative-warm tender-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '一緒に、ここまで、本当、嬉しい。', en: 'Together — until here, truly, happy.', style: 'Salaryman warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '頑張ろう、本当、これからも。', en: 'Try hard — truly, from now.', style: 'Boss firm formal direct tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Salaryman warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Boss firm formal direct closing-warm matching-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1319 — yuki + aoi, lifetime friendship (medium)
  {
    id: 'conv_01319',
    context: 'Yuki and Aoi reflect on a lifetime of friendship.',
    purpose: 'two-women lifetime-friendship exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '友達', '感謝', '人生', '大切'],
    cast: ['yuki_office', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、本当、長く、繋がってきた。', en: 'Aoi-chan — truly, long, connected.', style: 'Office woman bright soft sincere reflective-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'うん、本当、本当に、ね。', en: 'Yes — truly, truly.', style: 'Barista warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '人生、本当、繋がり、宝。', en: 'Life — truly, connection, treasure.', style: 'Office woman bright soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '友達、本当、大切、ね。', en: 'Friend — truly, precious.', style: 'Barista warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Office woman bright soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Barista warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Office woman bright soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1320 — ren + sho, sports talk (short)
  {
    id: 'conv_01320',
    context: 'Ren watches Sho practice baseball.',
    purpose: 'cousin baseball-practice exchange',
    ambient: 'park_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '楽しい', '応援', '本当'],
    cast: ['ren_uni', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'しょう、本当、上手、なった。', en: 'Sho — truly, skilled, became.', style: 'University student warm soft sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '頑張ってる、本当、毎日。', en: 'Trying hard — truly, every day.', style: 'Tiny six-year-old soft small sincere proud-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'ren_uni', jp: '応援、本当、ずっと、する。', en: 'Cheer — truly, long, do.', style: 'University student warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '一緒に、楽しい、本当に。', en: 'Together — fun, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'ren_uni', jp: '本当、頑張れ、ずっと。', en: 'Truly — try hard, long.', style: 'University student warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1321 — tatsuya + sho, country visit (medium)
  {
    id: 'conv_01321',
    context: 'Tatsuya shows Sho around the country town.',
    purpose: 'uncle-child town-tour exchange',
    ambient: 'street_morning',
    sound_effects: [],
    target_vocab: ['町', '一緒', '楽しい', '頑張る', '見る'],
    cast: ['tatsuya_country', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'しょう、この町、本当、いい所だ。', en: 'Sho — this town, truly, good place.', style: 'Country warm low sincere unhurried welcoming-opening tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'sho_child', jp: 'うん、本当、好き、本当に。', en: 'Yes — truly, like, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'tatsuya_country', jp: '皆、本当、優しい、人、ばかり。', en: 'All — truly, kind, people, only.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '一緒に、楽しい、本当に。', en: 'Together — fun, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'tatsuya_country', jp: 'また、本当、来てな。', en: 'Again — truly, come.', style: 'Country warm low sincere unhurried welcoming-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '頑張る、本当、絶対。', en: 'Try hard — truly, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'tatsuya_country', jp: '感謝、本当、本当に。', en: 'Grateful — truly, truly.', style: 'Country warm low sincere closing-warm grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1322 — asuka + sho, learning (short)
  {
    id: 'conv_01322',
    context: 'Asuka helps Sho with a kanji.',
    purpose: 'teacher-child kanji exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '勉強', '楽しい', '優しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、漢字、本当、覚えてる。', en: 'Sho-kun — kanji, truly, remembering.', style: 'Teacher warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '頑張ってる、本当、毎日。', en: 'Trying hard — truly, every day.', style: 'Tiny six-year-old soft small sincere proud-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '優しい子、本当、立派。', en: 'Kind child — truly, splendid.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '勉強、本当、楽しい。', en: 'Study — truly, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、これからも、ね。', en: 'Together — from now.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1323 — daichi + ryosuke, family bond (medium)
  {
    id: 'conv_01323',
    context: 'Daichi and Ryosuke share a quiet evening drink.',
    purpose: 'son-in-law father-in-law bond exchange',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '感謝', '楽しい', '大切'],
    cast: ['daichi_kansai', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '亮介さん、一緒に、本当、嬉しい。', en: 'Ryosuke-san — together, truly, happy.', style: 'Kansai warm bright sincere appreciative-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: 'うん、本当、家族、本当に。', en: 'Yes — truly, family, truly.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '感謝、本当、いつも、本当に。', en: 'Grateful — truly, always, truly.', style: 'Kansai warm bright sincere grateful-deep tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '楽しい、毎日、本当に、ね。', en: 'Fun — every day, truly.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Kansai warm bright sincere tender-deep loving, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'これからも、頑張ろう、本当に。', en: 'From now — try hard, truly.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1324 — sakura + asuka, mentor walk (medium)
  {
    id: 'conv_01324',
    context: 'Sakura and Asuka go for an evening walk together.',
    purpose: 'teacher-alum walk exchange',
    ambient: 'street_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '楽しい', '大切', '人生'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、夕方、散歩、本当、いいね。', en: 'Teacher — evening, walk, truly, good.', style: 'Teen warm soft sincere appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'うん、本当、心、落ち着く。', en: 'Yes — truly, heart, calms.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、本当、嬉しい。', en: 'Together — truly, happy.', style: 'Teen warm soft sincere tender-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: '人生、本当、不思議、ね。', en: 'Life — truly, mysterious.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当、毎日。', en: 'Grateful — truly, every day.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '大切な、時間、本当、ね。', en: 'Precious — time, truly.', style: 'Teacher warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Teen warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1325 — mei + ryosuke, family advice (medium)
  {
    id: 'conv_01325',
    context: 'Mei asks Ryosuke for advice on raising three children.',
    purpose: 'daughter-in-law father-in-law parenting exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '子ども', '一緒', '相談', '感謝'],
    cast: ['mei_romantic', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'お義父さん、子ども、本当、難しい、時、ある。', en: 'Father-in-law — children, truly, difficult, times, exist.', style: 'Romantic warm soft sincere-warm vulnerable-opening honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、本当、皆、通る道。', en: 'Yes — truly, all, pass path.', style: 'Father warm gentle sincere-warm philosophical-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'mei_romantic', jp: '相談、本当、心強い。', en: 'Consult — truly, heart-strong.', style: 'Romantic warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、考えていこう、本当に。', en: 'Together — think, truly.', style: 'Father warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'Romantic warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '家族、本当、宝物、ね。', en: 'Family — truly, treasure.', style: 'Romantic warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_066 wrote', CONVERSATIONS.length, 'files');

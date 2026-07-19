import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_059)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1166 — yumiko + ryosuke, rainy season (medium)
  {
    id: 'conv_01166',
    context: 'Yumiko and Ryosuke deal with the rainy season.',
    purpose: 'married-couple rainy-season exchange',
    ambient: 'tatami_room_morning',
    sound_effects: [],
    target_vocab: ['梅雨', '一緒', '蒸し暑い', '涼しい', '楽しい'],
    cast: ['yumiko_mom', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'お父さん、梅雨、本当、長いね。', en: 'Father — rainy season, truly, long.', style: 'Maternal warm gentle sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、蒸し暑い、続いてる。', en: 'Yes — humid hot, continuing.', style: 'Father warm gentle sincere-warm honest-warm matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '涼しい、お茶、いれた。', en: 'Cool — tea, made.', style: 'Maternal warm gentle sincere-warm caring-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: 'ありがとう、ホッとする。', en: 'Thanks — relax.', style: 'Father warm gentle sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '雨の音、聞くの、楽しい、ね。', en: 'Rain sound — listening, fun.', style: 'Maternal warm gentle sincere-warm philosophical-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、一緒なら、何でも、楽しい。', en: 'Yes — together, anything, fun.', style: 'Father warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '本当、ね、本当に。', en: 'Truly — truly.', style: 'Maternal warm gentle sincere closing-warm matching-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1167 — sho + hina, summer fan (short)
  {
    id: 'conv_01167',
    context: 'Sho and Hina cool off with a fan.',
    purpose: 'children summer-cooling exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['夏', '一緒', '涼しい', '楽しい', '扇風機'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、扇風機、こっち、向ける？', en: 'Sho — fan, here, point?', style: 'High child bright sincere asking-opening playful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、涼しい！', en: 'Yes — cool!', style: 'Tiny six-year-old soft small sincere appreciative-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '夏、暑い、けど、楽しい。', en: 'Summer — hot, but, fun.', style: 'High child bright sincere philosophical-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、アイス、食べよう。', en: 'Together — ice cream, eat.', style: 'Tiny six-year-old soft small sincere proposing-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'やった、楽しみ。', en: 'Yay — looking forward.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1168 — asuka + sho, classroom (medium)
  {
    id: 'conv_01168',
    context: 'Asuka introduces a new lesson to Sho.',
    purpose: 'teacher-child lesson exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['授業', '一緒', '頑張る', '勉強', '楽しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、今日の授業、始めよう。', en: 'Sho-kun — today\'s class, start.', style: 'Teacher warm gentle sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'はい、頑張る。', en: 'Yes — try hard.', style: 'Tiny six-year-old soft small sincere committed-warm respectful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: '新しい、漢字、覚えようね。', en: 'New — kanji, remember.', style: 'Teacher warm gentle sincere-warm teaching-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '勉強、楽しい、本当。', en: 'Study — fun, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、書いてみよう。', en: 'Together — try writing.', style: 'Teacher warm gentle sincere-warm collaborative-warm patient, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '上手に、書けた！', en: 'Skilled — wrote!', style: 'Tiny six-year-old soft small sincere proud-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: 'よく出来た、しょうくん。', en: 'Well done — Sho-kun.', style: 'Teacher warm gentle sincere closing-warm affirming-tender warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' }
    ]
  },
  // 1169 — daichi + mei, summer plans (medium)
  {
    id: 'conv_01169',
    context: 'Daichi and Mei plan summer activities for the kids.',
    purpose: 'married-couple summer-plans exchange',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['夏', '家族', '一緒', '楽しい', '計画'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'メイ、夏休み、何しよっか。', en: 'Mei — summer vacation, what do.', style: 'Kansai warm bright sincere proposing-opening engaged, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '海、家族、皆で、行きたい。', en: 'Sea — family, all, want to go.', style: 'Romantic warm soft sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ええなあ、楽しい、なるで。', en: 'Nice — fun, becomes.', style: 'Kansai warm bright sincere anticipating-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '子供たち、初めての、海、見せたい。', en: 'Children — first, sea, want to show.', style: 'Romantic warm soft sincere-warm tender-warm anticipating, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '計画、立てよう、すぐに。', en: 'Plan — set, soon.', style: 'Kansai warm bright sincere committed-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '一緒に、決めようね。', en: 'Together — decide.', style: 'Romantic warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '本当、楽しみや。', en: 'Truly — looking forward.', style: 'Kansai warm bright sincere closing-warm anticipating-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1170 — hiroshi_boss + kenji, last office talk (long)
  {
    id: 'conv_01170',
    context: 'Hiroshi visits the office for one last casual talk.',
    purpose: 'mentor-successor casual closure',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '大切', '会社'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、ちょっと、寄ったんだ。', en: 'Kenji — briefly, stopped by.', style: 'Boss firm formal direct warm-opening casual, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '部長、嬉しい、来てくれて。', en: 'Boss — happy, came.', style: 'Salaryman warm formal sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '会社、見ていたかった。', en: 'Company — wanted to see.', style: 'Boss firm formal direct honest-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '皆、お元気で、安心してる。', en: 'All — healthy, relieved.', style: 'Salaryman warm formal sincere-warm appreciative-warm philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '若い社員、立派、伸びてる。', en: 'Young employees — splendid, growing.', style: 'Boss firm formal direct affirming-warm appreciative, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '部長の指導、ずっと、繋がってる。', en: 'Boss\'s guidance — long, connected.', style: 'Salaryman warm formal sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '人生、振り返ると、お前と、過ごせて、よかった。', en: 'Life — looking back, with you, could spend, good.', style: 'Boss firm formal direct tender-deep philosophical, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、毎日。', en: 'Grateful — truly, every day.', style: 'Salaryman warm formal sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'お前、会社、立派に、続けてる。', en: 'You — company, splendidly, continuing.', style: 'Boss firm formal direct affirming-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '一緒に、ここまで、来た、宝。', en: 'Together — until here, came, treasure.', style: 'Salaryman warm formal sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Boss firm formal direct tender-deep loving, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'これからも、よろしく、お願いします。', en: 'From now — please.', style: 'Salaryman warm formal sincere-warm tender-promise respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '元気で、また、来るぞ。', en: 'Healthy — again, come.', style: 'Boss firm formal direct closing-warm tender-promise deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1171 — hina + sho, hot day (short)
  {
    id: 'conv_01171',
    context: 'Hina and Sho complain about the heat playfully.',
    purpose: 'children heat-complaint exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['夏', '一緒', '暑い', '涼しい', '楽しい'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、本当に、暑い、ね。', en: 'Sho — truly, hot.', style: 'High child bright sincere observing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-warm' },
      { speaker: 'sho_child', jp: 'うん、汗、いっぱい。', en: 'Yes — sweat, lots.', style: 'Tiny six-year-old soft small sincere honest-warm matching, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '涼しい、所、行きたい。', en: 'Cool — place, want to go.', style: 'High child bright sincere wishing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'プール、行こう、一緒に。', en: 'Pool — go, together.', style: 'Tiny six-year-old soft small sincere proposing-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、夏の日。', en: 'Fun — summer day.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1172 — sakura + ren, mother visit (medium)
  {
    id: 'conv_01172',
    context: 'Sakura visits Ren\'s parents to thank them for years of support.',
    purpose: 'cousin-uncle long-thanks exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '感謝', '大切', '人生'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、本当に、感謝、ずっと。', en: 'Ren-bro — truly, grateful, long.', style: 'Teen warm soft sincere reflective-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'University student warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '家族、皆、繋がってる、感じ。', en: 'Family — all, connected, feel.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '人生、本当、繋がり、大切。', en: 'Life — truly, connection, precious.', style: 'University student warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、ここまで、来た、宝。', en: 'Together — until here, came, treasure.', style: 'Teen warm soft sincere appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'これからも、ね。', en: 'From now.', style: 'University student warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '大切な、家族、本当に。', en: 'Precious — family, truly.', style: 'Teen warm soft sincere closing-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1173 — saito + aoi, baby checkup (medium)
  {
    id: 'conv_01173',
    context: 'Saito gives a routine check for Aoi\'s child.',
    purpose: 'doctor-mother checkup exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '子ども', '相談', '大切'],
    cast: ['saito_doctor', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'あおいさん、お子さん、健康、いかが？', en: 'Aoi-san — child, health, how?', style: 'Doctor warm formal sincere-warm caring-opening calm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'aoi_barista', jp: 'おかげさまで、元気。', en: 'Thanks — energetic.', style: 'Barista warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '成長、順調、です。', en: 'Growth — smooth.', style: 'Doctor warm formal sincere-warm reassuring-warm professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'aoi_barista', jp: 'ああ、安心、しました。', en: 'Ah — relieved.', style: 'Barista warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '相談、いつでも、ね。', en: 'Consult — anytime.', style: 'Doctor warm formal sincere-warm warm-promise tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '一緒に、見守って、本当に、感謝。', en: 'Together — watch over, truly, grateful.', style: 'Barista warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: '大切な、子、お元気で。', en: 'Precious — child, healthy.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1174 — ryosuke + sakura, late evening (short)
  {
    id: 'conv_01174',
    context: 'Ryosuke and Sakura share a quiet evening on the porch.',
    purpose: 'father-daughter quiet evening',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '大切', '家族', '楽しい'],
    cast: ['ryosuke_dad', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'さくら、星、綺麗、ね。', en: 'Sakura — stars, beautiful.', style: 'Father warm gentle sincere-warm observing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'うん、田舎の夜、最高。', en: 'Yes — country night, best.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '家族、皆、一緒、嬉しい。', en: 'Family — all, together, happy.', style: 'Father warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '大切な、時間、本当に。', en: 'Precious — time, truly.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '楽しい、毎日、ね。', en: 'Fun — every day.', style: 'Father warm gentle sincere closing-warm tender-philosophical warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1175 — kenji + ren, mentorship continued (medium)
  {
    id: 'conv_01175',
    context: 'Kenji asks Ren for advice about his own son.',
    purpose: 'senior-alum father-advice exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['指導', '一緒', '子ども', '相談', '大切'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、相談、いいですか？', en: 'Ren-kun — consult, okay?', style: 'Salaryman warm soft sincere-warm asking-opening respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'もちろん、何でも、伺います。', en: 'Of course — anything, listen.', style: 'University student warm soft sincere-warm welcoming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '息子、勉強、悩んでる、感じ。', en: 'Son — study, troubled, feel.', style: 'Salaryman warm soft sincere-warm honest-warm vulnerable, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '子ども、本当、繊細、ですから。', en: 'Children — truly, sensitive.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '指導、どう、する？', en: 'Guidance — how, do?', style: 'Salaryman warm soft sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: '一緒に、寄り添う、大切。', en: 'Together — close, precious.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '本当、感謝、本当に。', en: 'Truly — grateful, truly.', style: 'Salaryman warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1176 — daichi + tatsuya, summer harvest (medium)
  {
    id: 'conv_01176',
    context: 'Daichi and Tatsuya prepare for the summer harvest.',
    purpose: 'cousin summer-harvest exchange',
    ambient: 'field_morning',
    sound_effects: [],
    target_vocab: ['夏', '一緒', '頑張る', '収穫', '楽しい'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、夏野菜、もうすぐ、収穫やな。', en: 'Tatsuya — summer vegetables, soon, harvest.', style: 'Kansai warm bright sincere anticipating-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、今年も、立派、出来た。', en: 'Yes — this year too, splendid, made.', style: 'Country warm low sincere unhurried proud-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '皆で、頑張った結果、本当。', en: 'All — tried hard result, truly.', style: 'Kansai warm bright sincere appreciative-warm philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '家族、皆、来てくれる、嬉しい。', en: 'Family — all, come, happy.', style: 'Country warm low sincere unhurried tender-warm grateful, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '一緒に、楽しい、夏。', en: 'Together — fun, summer.', style: 'Kansai warm bright sincere philosophical-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Country warm low sincere unhurried grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '来年も、頑張ろうな。', en: 'Next year too — try hard.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1177 — hina + sachiko, summer story (short)
  {
    id: 'conv_01177',
    context: 'Sachiko tells Hina a summer ghost story.',
    purpose: 'grandma-child ghost-story exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['夏', '一緒', '楽しい', '怖い', '優しい'],
    cast: ['sachiko_grandma', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'ひなちゃん、夏の話、聞きたい？', en: 'Hina-chan — summer story, want to listen?', style: 'Grandma warm gentle sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'うん、ちょっと、怖い、話？', en: 'Yes — a bit, scary, story?', style: 'High child bright sincere curious-warm engaged, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-warm' },
      { speaker: 'sachiko_grandma', jp: '優しい、話だよ、安心して。', en: 'Kind — story, relax.', style: 'Grandma warm gentle sincere-warm reassuring-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '一緒に、聞ける、嬉しい。', en: 'Together — can listen, happy.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: '楽しい、夜、ね。', en: 'Fun — night.', style: 'Grandma warm gentle sincere closing-warm tender-philosophical warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1178 — yuki + mei, women shopping (medium)
  {
    id: 'conv_01178',
    context: 'Yuki and Mei go summer shopping for clothes.',
    purpose: 'two-women summer-shopping exchange',
    ambient: 'shop_afternoon',
    sound_effects: [],
    target_vocab: ['夏', '一緒', '楽しい', '女性', '可愛い'],
    cast: ['yuki_office', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'メイちゃん、夏服、見に来た。', en: 'Mei-chan — summer clothes, came to see.', style: 'Office woman bright soft sincere casual-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'うん、可愛い、いっぱい、ある。', en: 'Yes — cute, many, exist.', style: 'Romantic warm soft sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '女性向け、流行、最新。', en: 'Women-oriented — trend, latest.', style: 'Office woman bright soft sincere informing-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'これ、似合う、かな？', en: 'This — suits, maybe?', style: 'Romantic warm soft sincere-warm asking-warm playful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'すごい、可愛い、絶対。', en: 'Amazing — cute, surely.', style: 'Office woman bright soft sincere appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '一緒に、楽しい、お買い物。', en: 'Together — fun, shopping.', style: 'Romantic warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '本当、嬉しい、ね。', en: 'Truly — happy.', style: 'Office woman bright soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1179 — sho + asuka, music lesson (medium)
  {
    id: 'conv_01179',
    context: 'Asuka teaches Sho to play a simple song on the recorder.',
    purpose: 'teacher-child music-lesson exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['音楽', '一緒', '楽しい', '頑張る', '優しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、リコーダー、吹いてみよう。', en: 'Sho-kun — recorder, try playing.', style: 'Teacher warm gentle sincere-warm welcoming-opening encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'うん、難しい、けど、頑張る。', en: 'Yes — difficult, but, try hard.', style: 'Tiny six-year-old soft small sincere honest-warm committed, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: '優しく、息、吹いて、ね。', en: 'Gently — breath, blow.', style: 'Teacher warm gentle sincere-warm teaching-warm patient, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '音、出た！', en: 'Sound — came out!', style: 'Tiny six-year-old soft small sincere triumphant-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: 'すごい、しょうくん。', en: 'Amazing — Sho-kun.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sho_child', jp: '音楽、本当、楽しい。', en: 'Music — truly, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、続けようね。', en: 'Together — continue.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1180 — mei + daichi, baby third hint (medium)
  {
    id: 'conv_01180',
    context: 'Mei tells Daichi she might be pregnant with a third.',
    purpose: 'married-couple pregnancy-hint exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '幸せ', '大切', '相談'],
    cast: ['mei_romantic', 'daichi_kansai'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、相談、いいかな？', en: 'Daichi — consult, okay?', style: 'Romantic warm soft sincere-warm vulnerable-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'うん、何やろ？', en: 'Yes — what?', style: 'Kansai warm bright sincere asking-warm engaged, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'もしかして、三人目、かも。', en: 'Perhaps — third one, maybe.', style: 'Romantic warm soft sincere-warm vulnerable-warm honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ほんま！家族、また、増える！', en: 'Truly! Family — again, increases!', style: 'Kansai warm bright sincere enthusiastic-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '幸せ、本当に。', en: 'Happy — truly.', style: 'Romantic warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '一緒に、頑張ろうな、絶対。', en: 'Together — try hard, surely.', style: 'Kansai warm bright sincere committed-warm tender-promise, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '大切な、命、本当に。', en: 'Precious — life, truly.', style: 'Romantic warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1181 — saito + naoko, family pregnancy (medium)
  {
    id: 'conv_01181',
    context: 'Saito confirms Mei\'s third pregnancy.',
    purpose: 'doctor-relative pregnancy-news exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '家族', '大切', '幸せ'],
    cast: ['saito_doctor', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'メイさん、結果、確認、しました。', en: 'Mei-san — result, confirmed.', style: 'Doctor warm formal sincere-warm calm-opening professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'mei_romantic', jp: 'はい、お願いします。', en: 'Yes — please.', style: 'Romantic warm soft sincere-warm receptive-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'おめでとう、三人目、確実、です。', en: 'Congratulations — third, certain.', style: 'Doctor warm formal sincere-warm warm-announcing tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'ああ、本当、嬉しい。', en: 'Ah — truly, happy.', style: 'Romantic warm soft sincere-warm enthusiastic-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'saito_doctor', jp: '健康、十分、注意、して。', en: 'Health — sufficient, care.', style: 'Doctor warm formal sincere-warm advising-warm professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '家族、皆で、見守る。', en: 'Family — all, watch over.', style: 'Romantic warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'saito_doctor', jp: '幸せ、本当に、ね。', en: 'Happy — truly.', style: 'Doctor warm formal sincere closing-warm tender-warm grateful, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1182 — sho + sakura, music (short)
  {
    id: 'conv_01182',
    context: 'Sakura plays guitar; Sho asks her to teach him.',
    purpose: 'older-younger music-lesson exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '音楽', '楽しい', '頑張る', '優しい'],
    cast: ['sakura_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'さくらお姉ちゃん、ギター、教えて。', en: 'Sakura sister — guitar, teach.', style: 'Tiny six-year-old soft small sincere asking-opening hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sakura_teen', jp: 'うん、優しく、教えるよ。', en: 'Yes — gently, teach.', style: 'Teen warm soft sincere agreeing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '音楽、本当、好き。', en: 'Music — truly, like.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'sakura_teen', jp: '一緒に、頑張ろう。', en: 'Together — try hard.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '楽しい、絶対、本当に。', en: 'Fun — surely, truly.', style: 'Tiny six-year-old soft small sincere closing-warm enthusiastic-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 1183 — kenji + ren, school visit (medium)
  {
    id: 'conv_01183',
    context: 'Kenji visits Ren\'s school for a career talk.',
    purpose: 'senior-alum career-talk exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '指導', '生徒', '感謝', '大切'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、生徒、たくさん、いるね。', en: 'Ren-kun — students, many, exist.', style: 'Salaryman warm soft sincere-warm appreciative-opening warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '健次さん、来てくれて、嬉しい。', en: 'Kenji-san — came, happy.', style: 'University student warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '若い人、応援、したい。', en: 'Young people — cheer, want to.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '生徒、皆、感謝、します。', en: 'Students — all, grateful, do.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'お前の指導、立派、本当。', en: 'Your guidance — splendid, truly.', style: 'Salaryman warm soft sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: '一緒に、繋いで、いきましょう。', en: 'Together — connect.', style: 'University student warm soft sincere-warm tender-promise philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'Salaryman warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1184 — yumiko + sachiko, two-grandma (short)
  {
    id: 'conv_01184',
    context: 'Yumiko visits Sachiko with sweets.',
    purpose: 'mother-grandma sweets exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '感謝', '美味しい'],
    cast: ['yumiko_mom', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'おばさん、お菓子、持ってきました。', en: 'Auntie — sweets, brought.', style: 'Maternal warm gentle sincere-warm offering-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'まあ、優しい、ね。', en: 'My — kind.', style: 'Grandma warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '一緒に、お茶、飲みましょう。', en: 'Together — tea, drink.', style: 'Maternal warm gentle sincere-warm inviting-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '美味しい、本当に。', en: 'Delicious — truly.', style: 'Grandma warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '楽しい、時間、ね。', en: 'Fun — time.', style: 'Maternal warm gentle sincere closing-warm tender-philosophical warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1185 — sakura + asuka, simple lunch (medium)
  {
    id: 'conv_01185',
    context: 'Sakura and Asuka have lunch together casually.',
    purpose: 'teacher-alum casual-lunch exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '感謝', '大切', '美味しい'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、ここ、美味しい、ね。', en: 'Sakura-san — here, delicious.', style: 'Teacher warm gentle sincere-warm appreciative-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'うん、ずっと、来たかった。', en: 'Yes — long, wanted to come.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、過ごせる、嬉しい。', en: 'Together — can spend, happy.', style: 'Teacher warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '大切な、時間、本当。', en: 'Precious — time, truly.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '楽しい、いつまでも。', en: 'Fun — forever.', style: 'Teen warm soft sincere tender-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: 'これからも、ね。', en: 'From now.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_059 wrote', CONVERSATIONS.length, 'files');

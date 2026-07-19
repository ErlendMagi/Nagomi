import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_053)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1046 — daichi + sho, fishing boat (medium)
  {
    id: 'conv_01046',
    context: 'Daichi takes Sho on a small fishing boat trip.',
    purpose: 'uncle-child boat-trip exchange',
    ambient: 'boat_morning',
    sound_effects: [],
    target_vocab: ['船', '海', '一緒', '楽しい', '頑張る'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、船、初めてやな？', en: 'Sho — boat, first time?', style: 'Kansai warm bright sincere asking-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、ドキドキ、する。', en: 'Yes — heart-pound, do.', style: 'Tiny six-year-old soft small sincere honest-warm vulnerable, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: '海、見て、綺麗やろ。', en: 'Sea — look, beautiful.', style: 'Kansai warm bright sincere appreciative-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'わあ、青い、広い。', en: 'Wow — blue, wide.', style: 'Tiny six-year-old soft small sincere appreciative-warm awe, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '一緒に、釣り、頑張ろう。', en: 'Together — fishing, try hard.', style: 'Kansai warm bright sincere collaborative-warm encouraging, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'お魚、捕れる、楽しみ。', en: 'Fish — can catch, looking forward.', style: 'Tiny six-year-old soft small sincere anticipating-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '楽しい、思い出に、なるで。', en: 'Fun — memory, becomes.', style: 'Kansai warm bright sincere closing-warm anticipating-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1047 — hina + sho, eating at restaurant (short)
  {
    id: 'conv_01047',
    context: 'Hina and Sho eat at a restaurant with their family.',
    purpose: 'children restaurant exchange',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['一緒', '美味しい', '楽しい', 'レストラン', '料理'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、このレストラン、初めて。', en: 'Sho — this restaurant, first.', style: 'High child bright sincere observing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、美味しそう、料理。', en: 'Yes — looks delicious, cooking.', style: 'Tiny six-year-old soft small sincere appreciative-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '何、頼む？', en: 'What — order?', style: 'High child bright sincere asking-warm engaged, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ハンバーグ、いいかな。', en: 'Hamburger — good?', style: 'Tiny six-year-old soft small sincere choosing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、楽しい、夕食、ね。', en: 'Together — fun, dinner.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1048 — asuka + ren, first day teaching (medium)
  {
    id: 'conv_01048',
    context: 'Asuka encourages Ren on his first day as a teacher.',
    purpose: 'mentor-newcomer first-day exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '指導', '生徒', '大切'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、初日、緊張、する？', en: 'Ren-kun — first day, tense, do?', style: 'Teacher warm gentle sincere-warm caring-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、ドキドキ、します。', en: 'Yes — heart-pound, do.', style: 'University student warm soft sincere-warm honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '生徒、優しい子、ばかり、ね。', en: 'Students — kind children, only.', style: 'Teacher warm gentle sincere-warm reassuring-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、過ごせる、楽しみ。', en: 'Together — can spend, looking forward.', style: 'University student warm soft sincere-warm hopeful-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: '指導、自分らしく、ね。', en: 'Guidance — self-like.', style: 'Teacher warm gentle sincere-warm encouraging-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、大切な、初日。', en: 'Try hard — precious, first day.', style: 'University student warm soft sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '応援、ずっと。', en: 'Cheer — long.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1049 — sakura + yumiko, mother visit college (medium)
  {
    id: 'conv_01049',
    context: 'Yumiko visits Sakura at college during a weekend.',
    purpose: 'mother-daughter visit exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '家族', '大切', '感謝'],
    cast: ['yumiko_mom', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'さくらちゃん、元気、そうね。', en: 'Sakura-chan — energetic, seems.', style: 'Maternal warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'お母さん、来てくれて、嬉しい。', en: 'Mom — came, happy.', style: 'Teen warm soft sincere grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '家族、皆、心配、してた。', en: 'Family — all, worried, was.', style: 'Maternal warm gentle sincere-warm tender-warm honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '大丈夫、楽しい、毎日。', en: 'Okay — fun, every day.', style: 'Teen warm soft sincere reassuring-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: '一緒に、お茶、飲もう。', en: 'Together — tea, drink.', style: 'Maternal warm gentle sincere-warm inviting-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、本当に、いつも。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '大切な、娘、よ。', en: 'Precious — daughter.', style: 'Maternal warm gentle sincere closing-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1050 — kenji + ren, mentorship (long)
  {
    id: 'conv_01050',
    context: 'Kenji and Ren meet for a long reflective dinner after years.',
    purpose: 'senior-alum reflection exchange',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '大切', '頑張る'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、久しぶり、元気？', en: 'Ren-kun — long time, energetic?', style: 'Salaryman warm soft sincere-warm warm-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '健次さん、本当に、嬉しい。', en: 'Kenji-san — truly, happy.', style: 'University student warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '教員、もう、何年？', en: 'Teacher — already, how many years?', style: 'Salaryman warm soft sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: '三年、過ぎました。', en: 'Three years — passed.', style: 'University student warm soft sincere-warm reflective-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '早いね、本当に。', en: 'Fast — truly.', style: 'Salaryman warm soft sincere-warm philosophical-warm matching, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '健次さんの指導、今でも、力になる。', en: 'Kenji-san\'s guidance — even now, becomes strength.', style: 'University student warm soft sincere-warm grateful-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ、お前から、学んだ事、多い。', en: 'Same — from you, learned things, many.', style: 'Salaryman warm soft sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、過ごした時間、宝物。', en: 'Together — spent time, treasure.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '人生、出会い、本当、大切。', en: 'Life — meeting, truly, precious.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '感謝、これからも、ずっと。', en: 'Grateful — from now, long.', style: 'University student warm soft sincere-warm grateful-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '相談、いつでも、来てね。', en: 'Consult — anytime, come.', style: 'Salaryman warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、本当に。', en: 'Try hard — truly.', style: 'University student warm soft sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '応援、ずっと、する。', en: 'Cheer — long, do.', style: 'Salaryman warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1051 — hiroshi_boss + kenji, retirement looms (medium)
  {
    id: 'conv_01051',
    context: 'Hiroshi tells Kenji he\'s considering retirement.',
    purpose: 'boss-subordinate retirement-news exchange',
    ambient: 'office_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '相談', '大切'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、大事な話、する。', en: 'Kenji — important talk, do.', style: 'Boss firm formal direct serious-opening tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'はい、伺います。', en: 'Yes — listen.', style: 'Salaryman warm formal sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '来年、退職、考えてる。', en: 'Next year — retirement, considering.', style: 'Boss firm formal direct philosophical-warm honest, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'え、本当ですか。', en: 'Eh — truly?', style: 'Salaryman warm formal sincere-warm surprised-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'お前に、後を、任せたい。', en: 'You — successor, entrust.', style: 'Boss firm formal direct trusting-warm tender-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' },
      { speaker: 'kenji_office', jp: '光栄です、本当に、感謝。', en: 'Honored — truly, grateful.', style: 'Salaryman warm formal sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '一緒に、準備、進めよう。', en: 'Together — preparation, proceed.', style: 'Boss firm formal direct closing-warm collaborative-tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1052 — sho + hina, first money (short)
  {
    id: 'conv_01052',
    context: 'Sho and Hina go to a convenience store with their allowance.',
    purpose: 'children store-shopping exchange',
    ambient: 'shop_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', 'コンビニ', '頑張る', '優しい'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、コンビニ、初めて、二人で。', en: 'Sho — convenience store, first, two-people.', style: 'High child bright sincere excited-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'お金、持ってる、よね？', en: 'Money — have?', style: 'Tiny six-year-old soft small sincere asking-warm careful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'うん、頑張って、選ぼう。', en: 'Yes — try hard, choose.', style: 'High child bright sincere committing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'お菓子、優しい、味、欲しい。', en: 'Snack — kind, taste, want.', style: 'Tiny six-year-old soft small sincere requesting-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、楽しい、お買い物。', en: 'Together — fun, shopping.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1053 — takeda + sho, traffic safety (medium)
  {
    id: 'conv_01053',
    context: 'Takeda greets Sho at the crossing and chats.',
    purpose: 'officer-child safety-talk exchange',
    ambient: 'crossing_morning',
    sound_effects: [],
    target_vocab: ['交番', '一緒', '安全', '優しい', '頑張る'],
    cast: ['takeda_officer', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'しょうくん、おはよう。', en: 'Sho-kun — good morning.', style: 'Officer firm formal direct warm-opening child-friendly, the firm real composure audible, gentle real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'sho_child', jp: 'おまわりさん、おはよう、ございます。', en: 'Officer — good morning.', style: 'Tiny six-year-old soft small sincere respectful-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'takeda_officer', jp: '交番、いつでも、寄って、いい。', en: 'Police box — anytime, stop, okay.', style: 'Officer firm formal direct welcoming-warm advisory, the firm real composure audible, gentle real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'sho_child', jp: 'はい、ありがとうございます。', en: 'Yes — thanks.', style: 'Tiny six-year-old soft small sincere grateful-warm respectful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'takeda_officer', jp: '道、気を付けて、ね。', en: 'Road — careful.', style: 'Officer firm formal direct caring-warm clear-advisory, the firm real composure audible, gentle real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'sho_child', jp: '一緒に、安全、頑張る。', en: 'Together — safety, try hard.', style: 'Tiny six-year-old soft small sincere committing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'takeda_officer', jp: '優しい子だ、しょうくん。', en: 'Kind child — Sho-kun.', style: 'Officer firm formal direct closing-warm tender-deep appreciative, the firm real composure audible, gentle real authority threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1054 — daichi + tatsuya, fishing tradition (medium)
  {
    id: 'conv_01054',
    context: 'Daichi and Tatsuya talk about local fishing tradition.',
    purpose: 'cousin fishing-tradition exchange',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['漁師', '一緒', '伝統', '町', '頑張る'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、ここの漁師、長い、伝統やな。', en: 'Tatsuya — here\'s fishermen, long, tradition.', style: 'Kansai warm bright sincere observing-opening appreciative, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、何百年、続いてる。', en: 'Yes — hundreds of years, continuing.', style: 'Country warm low sincere unhurried philosophical-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '町の力、本当、すごい。', en: 'Town power — truly, amazing.', style: 'Kansai warm bright sincere appreciative-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '若い人、減ってきた、けど。', en: 'Young people — decreased, but.', style: 'Country warm low sincere unhurried honest-warm philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '残したい、本当に、伝統。', en: 'Want to keep — truly, tradition.', style: 'Kansai warm bright sincere philosophical-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '一緒に、頑張ろう、皆で。', en: 'Together — try hard, with all.', style: 'Country warm low sincere unhurried collaborative-warm encouraging, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '町、絶対、守るで。', en: 'Town — surely, protect.', style: 'Kansai warm bright sincere closing-warm committed-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1055 — hina + yumiko, hospital visit (short)
  {
    id: 'conv_01055',
    context: 'Yumiko takes Hina for a routine doctor visit.',
    purpose: 'mother-child hospital exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['病院', '一緒', '優しい', '頑張る', '健康'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、病院、一緒に、行こう。', en: 'Hina-chan — hospital, together, go.', style: 'Maternal warm gentle sincere-warm reassuring-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'ちょっと、ドキドキ、する。', en: 'A bit — heart-pound, do.', style: 'High child bright sincere honest-warm vulnerable, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-warm' },
      { speaker: 'yumiko_mom', jp: '先生、優しい、心配ない。', en: 'Doctor — kind, no worry.', style: 'Maternal warm gentle sincere-warm reassuring-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、頑張る。', en: 'Yes — try hard.', style: 'High child bright sincere committed-warm brave, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '健康、大切、ね。', en: 'Health — precious.', style: 'Maternal warm gentle sincere closing-warm philosophical-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1056 — saito + mei, second baby pregnancy (medium)
  {
    id: 'conv_01056',
    context: 'Saito confirms Mei is pregnant with a second baby.',
    purpose: 'doctor-mother pregnancy-confirmation exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '相談', '家族', '幸せ'],
    cast: ['saito_doctor', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'メイさん、検査、結果、出ました。', en: 'Mei-san — exam, result, came.', style: 'Doctor warm formal sincere-warm professional-opening calm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'mei_romantic', jp: 'はい、お願いします。', en: 'Yes — please.', style: 'Romantic warm soft sincere-warm vulnerable-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'おめでとう、ご懐妊、です。', en: 'Congratulations — pregnancy.', style: 'Doctor warm formal sincere-warm warm-announcing tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'え、本当！嬉しい。', en: 'Eh — truly! Happy.', style: 'Romantic warm soft sincere-warm excited-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'saito_doctor', jp: '健康、ちゃんと、見ていきましょう。', en: 'Health — properly, see.', style: 'Doctor warm formal sincere-warm advising-warm professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '家族、増える、幸せ。', en: 'Family — increase, happy.', style: 'Romantic warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'saito_doctor', jp: '相談、いつでも、ね。', en: 'Consult — anytime.', style: 'Doctor warm formal sincere closing-warm warm-promise tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1057 — sakura + ren, writing publication (long)
  {
    id: 'conv_01057',
    context: 'Sakura tells Ren her first writing was published.',
    purpose: 'cousin publication-news exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['作品', '一緒', '夢', '感謝', '頑張る'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、作品、本に、載った。', en: 'Ren-bro — work, book, appeared.', style: 'Teen warm soft sincere excited-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: 'え、本当！おめでとう！', en: 'Eh — truly! Congratulations!', style: 'University student warm soft sincere-warm enthusiastic-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '初めての、掲載、嬉しい。', en: 'First — publication, happy.', style: 'Teen warm soft sincere proud-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'すごい、努力の、結果。', en: 'Amazing — effort\'s, result.', style: 'University student warm soft sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '皆の応援、感謝、本当に。', en: 'All\'s cheering — grateful, truly.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '一緒に、ここまで、来たね。', en: 'Together — until here, came.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '夢、まだ、追ってる。', en: 'Dream — still, chasing.', style: 'Teen warm soft sincere committed-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本、出すの、目標？', en: 'Book — release, goal?', style: 'University student warm soft sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sakura_teen', jp: 'うん、いつか、絶対。', en: 'Yes — someday, surely.', style: 'Teen warm soft sincere committed-warm hopeful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '応援、ずっと、する。', en: 'Cheer — long, do.', style: 'University student warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '頑張る、皆と、一緒に。', en: 'Try hard — with all, together.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '大切な、一歩、ね。', en: 'Precious — step.', style: 'University student warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、家族、皆に。', en: 'Grateful — family, to all.', style: 'Teen warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1058 — daichi + mei, family news (short)
  {
    id: 'conv_01058',
    context: 'Daichi reacts to Mei\'s pregnancy news.',
    purpose: 'married-couple pregnancy-news exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '幸せ', '大切', '頑張る'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、お医者さん、確認した。', en: 'Daichi — doctor, confirmed.', style: 'Romantic warm soft sincere-warm announcing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'ほんま！家族、増えるな！', en: 'Truly! Family — increases!', style: 'Kansai warm bright sincere enthusiastic-warm tender-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '幸せ、本当に。', en: 'Happy — truly.', style: 'Romantic warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '一緒に、頑張ろうな、メイ。', en: 'Together — try hard, Mei.', style: 'Kansai warm bright sincere committed-warm tender-promise, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '大切な、命、ね。', en: 'Precious — life.', style: 'Romantic warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1059 — kenji + ren, promotion celebration (medium)
  {
    id: 'conv_01059',
    context: 'Kenji becomes the company director, Ren congratulates him.',
    purpose: 'senior-alum promotion-celebration exchange',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '会社', '頑張る', '責任'],
    cast: ['ren_uni', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: '健次さん、社長、おめでとう！', en: 'Kenji-san — president, congratulations!', style: 'University student warm soft sincere-warm enthusiastic-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'kenji_office', jp: 'ありがとう、本当に。', en: 'Thanks — truly.', style: 'Salaryman warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '会社、続いて、本当、すごい。', en: 'Company — continuing, truly, amazing.', style: 'University student warm soft sincere-warm appreciative-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '責任、重い、けど、頑張る。', en: 'Responsibility — heavy, but, try hard.', style: 'Salaryman warm soft sincere-warm humble-warm committed, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、応援、絶対、する。', en: 'Together — cheer, surely, do.', style: 'University student warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '誇り、思ってる、ずっと。', en: 'Proud — thinking, long.', style: 'University student warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1060 — aoi + ren, café anniversary (medium)
  {
    id: 'conv_01060',
    context: 'Aoi celebrates her café\'s five-year anniversary with Ren.',
    purpose: 'married-couple business-anniversary exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '感謝', '大切', '幸せ'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'レン、お店、五年、経った。', en: 'Ren — shop, five years, passed.', style: 'Barista warm soft sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '本当、頑張ってきたね。', en: 'Truly — tried hard.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '一緒に、支えてくれた、感謝。', en: 'Together — supported, grateful.', style: 'Barista warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'こちらこそ、お前の店、誇り。', en: 'Same — your shop, proud.', style: 'University student warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'これからも、大切に、続けたい。', en: 'From now — preciously, want to continue.', style: 'Barista warm soft sincere-warm tender-promise committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '幸せ、本当に。', en: 'Happy — truly.', style: 'University student warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '一緒に、これからも。', en: 'Together — from now.', style: 'Barista warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1061 — hina + sho, bookstore (short)
  {
    id: 'conv_01061',
    context: 'Hina and Sho visit a bookstore together.',
    purpose: 'children bookstore exchange',
    ambient: 'shop_afternoon',
    sound_effects: [],
    target_vocab: ['本屋', '一緒', '楽しい', '見る', '本'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、本屋、好き？', en: 'Sho — bookstore, like?', style: 'High child bright sincere asking-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、絵本、いっぱい。', en: 'Yes — picture books, many.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、見ようよ。', en: 'Together — look.', style: 'High child bright sincere inviting-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'これ、面白そう、ね。', en: 'This — looks interesting.', style: 'Tiny six-year-old soft small sincere observing-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、本屋。', en: 'Fun — bookstore.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1062 — tatsuya + naoko, country life year (medium)
  {
    id: 'conv_01062',
    context: 'Naoko reflects on her first year living in the country.',
    purpose: 'cousin country-living reflection',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['一緒', '生活', '感謝', '大切', '家族'],
    cast: ['naoko_aunt', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'たつや、もう、一年、こっちで、過ごした。', en: 'Tatsuya — already, year, here, spent.', style: 'Aunt warm soft sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: 'うん、慣れた、ね。', en: 'Yes — got used.', style: 'Country warm low sincere unhurried appreciative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '生活、ゆっくり、本当、いい。', en: 'Life — slowly, truly, good.', style: 'Aunt warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '家族、近くに、いる、感謝。', en: 'Family — close, exists, grateful.', style: 'Country warm low sincere unhurried tender-deep grateful, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '一緒に、過ごせる、大切な時間。', en: 'Together — can spend, precious time.', style: 'Aunt warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: 'これからも、ずっと、ね。', en: 'From now — long.', style: 'Country warm low sincere unhurried tender-promise deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'Aunt warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1063 — sakura + sho, reading together (short)
  {
    id: 'conv_01063',
    context: 'Sakura reads to Sho a picture book.',
    purpose: 'older-younger reading exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '本', '楽しい', '優しい', '読む'],
    cast: ['sakura_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'さくらお姉ちゃん、本、読んで。', en: 'Sakura sister — book, read.', style: 'Tiny six-year-old soft small sincere requesting-opening tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sakura_teen', jp: 'うん、優しく、読むね。', en: 'Yes — gently, read.', style: 'Teen warm soft sincere agreeing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '一緒に、楽しい、時間。', en: 'Together — fun, time.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'sakura_teen', jp: '昔の絵本、好き。', en: 'Old picture book — like.', style: 'Teen warm soft sincere reminiscing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'ありがとう、お姉ちゃん。', en: 'Thanks — sister.', style: 'Tiny six-year-old soft small sincere closing-warm grateful-tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' }
    ]
  },
  // 1064 — mrs_mori + naoko, tradition continued (medium)
  {
    id: 'conv_01064',
    context: 'Mrs. Mori passes her tradition to Naoko.',
    purpose: 'neighbor-aunt tradition-pass exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '伝統', '優しい', '大切', '感謝'],
    cast: ['mrs_mori_neighbor', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '直子さん、伝統、続けてくれて、嬉しい。', en: 'Naoko-san — tradition, continuing, happy.', style: 'Neighbor warm gentle sincere-warm grateful-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'お陰様で、出来ました。', en: 'Thanks — could do.', style: 'Aunt warm soft sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '若い人に、伝えていきたい。', en: 'Young people — want to convey.', style: 'Neighbor warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '大切な、知識、本当に。', en: 'Precious — knowledge, truly.', style: 'Aunt warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '優しい子、本当、ありがたい。', en: 'Kind child — truly, grateful.', style: 'Neighbor warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '一緒に、続けていきましょう。', en: 'Together — continue.', style: 'Aunt warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '感謝、こちらこそ。', en: 'Grateful — same.', style: 'Neighbor warm gentle sincere closing-warm tender-deep matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1065 — daichi + tatsuya, harvest (medium)
  {
    id: 'conv_01065',
    context: 'Daichi and Tatsuya celebrate the rice harvest.',
    purpose: 'cousin harvest-celebration exchange',
    ambient: 'field_afternoon',
    sound_effects: [],
    target_vocab: ['収穫', '一緒', '頑張る', '感謝', '家族'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、今年の収穫、ええで！', en: 'Tatsuya — this year\'s harvest, good!', style: 'Kansai warm bright sincere enthusiastic-opening proud, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、皆で、頑張った結果や。', en: 'Yes — all, tried hard result.', style: 'Country warm low sincere unhurried philosophical-warm appreciative, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'お米、たっぷり、嬉しいわ。', en: 'Rice — abundantly, happy.', style: 'Kansai warm bright sincere appreciative-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '家族、皆に、配ろう。', en: 'Family — to all, distribute.', style: 'Country warm low sincere unhurried tender-warm collaborative, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Kansai warm bright sincere grateful-deep tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '一緒に、来年も、頑張ろう。', en: 'Together — next year too, try hard.', style: 'Country warm low sincere unhurried tender-promise warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '楽しみ、本当に。', en: 'Looking forward — truly.', style: 'Kansai warm bright sincere closing-warm anticipating-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_053 wrote', CONVERSATIONS.length, 'files');

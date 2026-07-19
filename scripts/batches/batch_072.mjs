import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_072)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1426 — sho + hina, growing up (medium)
  {
    id: 'conv_01426',
    context: 'Sho and Hina reflect on how they\'ve grown.',
    purpose: 'children growth-reflection exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '成長', '友達', '大切'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、本当、大きく、なった、ね。', en: 'Sho — truly, big, became.', style: 'High child bright sincere reflective-opening tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: 'うん、ひなも、本当、可愛い、まま。', en: 'Yes — Hina too, truly, cute, still.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '友達、本当、ずっと、ね。', en: 'Friend — truly, long.', style: 'High child bright sincere philosophical-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '成長、本当、嬉しい。', en: 'Growth — truly, happy.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、本当、過ごせる、宝。', en: 'Together — truly, can spend, treasure.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '大切な、本当、ね。', en: 'Precious — truly.', style: 'Tiny six-year-old soft small sincere tender-deep loving, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '楽しい、本当、毎日、ね。', en: 'Fun — truly, every day.', style: 'High child bright sincere closing-warm tender-philosophical warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1427 — saito + yumiko, helping diagnosis (medium)
  {
    id: 'conv_01427',
    context: 'Saito gives Yumiko a positive diagnosis.',
    purpose: 'doctor-patient positive-diagnosis exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '相談', '助け', '感謝'],
    cast: ['saito_doctor', 'yumiko_mom'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '優子さん、本当、健康、保てる、ね。', en: 'Yumiko-san — truly, health, can keep.', style: 'Doctor warm formal sincere-warm reassuring-opening tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'yumiko_mom', jp: '本当、感謝、本当に。', en: 'Truly — grateful, truly.', style: 'Maternal warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: '相談、本当、いつでも。', en: 'Consult — truly, anytime.', style: 'Doctor warm formal sincere-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '助け、本当、ずっと、いつも。', en: 'Help — truly, long, always.', style: 'Maternal warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Doctor warm formal sincere-warm matching-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '一緒に、本当、頑張ります。', en: 'Together — truly, try hard.', style: 'Maternal warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'お元気で、本当に、ね。', en: 'Healthy — truly.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1428 — hina + sho, evening visit (short)
  {
    id: 'conv_01428',
    context: 'Hina invites Sho over for an evening visit.',
    purpose: 'children evening-visit exchange',
    ambient: 'genkan_evening',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '友達', '隣', '本当'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、本当、隣、来てくれた、ね。', en: 'Sho — truly, next door, came.', style: 'High child bright sincere welcoming-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、本当、嬉しい、本当に。', en: 'Yes — truly, happy, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒に、本当、楽しい、ね。', en: 'Together — truly, fun.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '友達、本当、ありがたい。', en: 'Friend — truly, grateful.', style: 'Tiny six-year-old soft small sincere grateful-deep tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '本当、ずっと、ね。', en: 'Truly — long.', style: 'High child bright sincere closing-warm tender-promise deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1429 — kenji + ren, careful approach (medium)
  {
    id: 'conv_01429',
    context: 'Kenji approaches Ren about a careful matter.',
    purpose: 'senior-alum careful-talk exchange',
    ambient: 'office_evening',
    sound_effects: [],
    target_vocab: ['一緒', '相談', '頑張る', '感謝', '考える'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、本当、相談、いいですか？', en: 'Ren-kun — truly, consult, okay?', style: 'Salaryman warm formal sincere-warm asking-opening respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'もちろん、本当に。', en: 'Of course — truly.', style: 'University student warm soft sincere-warm welcoming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '本当、悩んでる、ね、ある事。', en: 'Truly — troubled, some thing.', style: 'Salaryman warm soft sincere-warm vulnerable-warm honest, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、本当、考えよう。', en: 'Together — truly, think.', style: 'University student warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'University student warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Salaryman warm soft sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1430 — sakura + ren, novel chapter shared (long)
  {
    id: 'conv_01430',
    context: 'Sakura and Ren discuss her novel chapter completion.',
    purpose: 'cousin chapter-share exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['物語', '一緒', '夢', '頑張る', '感謝'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、本当、新しい章、終わった。', en: 'Ren-bro — truly, new chapter, finished.', style: 'Teen warm soft sincere announcing-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当、すごい、本当に。', en: 'Truly — amazing, truly.', style: 'University student warm soft sincere-warm enthusiastic-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '物語、本当、深くなった、感じ。', en: 'Story — truly, became deep, feel.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '読みたい、本当、本当に。', en: 'Want to read — truly, truly.', style: 'University student warm soft sincere-warm enthusiastic-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '夢、本当、繋がってる。', en: 'Dream — truly, connected.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、本当、頑張ってきた。', en: 'Together — truly, tried hard.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'お前の作品、本当、宝。', en: 'Your works — truly, treasure.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '頑張る、本当、ずっと。', en: 'Try hard — truly, long.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '応援、本当、ずっと、する。', en: 'Cheer — truly, long, do.', style: 'University student warm soft sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Teen warm soft sincere tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'University student warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Teen warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1431 — daichi + tatsuya, fishing big (short)
  {
    id: 'conv_01431',
    context: 'Daichi tells Tatsuya about a big catch.',
    purpose: 'cousin big-catch exchange',
    ambient: 'river_morning',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '本当', '頑張る', '釣り'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、本当、釣り、いい一日や。', en: 'Tatsuya — truly, fishing, good day.', style: 'Kansai warm bright sincere appreciative-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、本当、頑張った、ね。', en: 'Yes — truly, tried hard.', style: 'Country warm low sincere unhurried matching-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '一緒に、本当、楽しい、ほんま。', en: 'Together — truly, fun, truly.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Country warm low sincere unhurried tender-deep grateful, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1432 — asuka + sho, future dream (medium)
  {
    id: 'conv_01432',
    context: 'Asuka and Sho talk about his future dreams.',
    purpose: 'teacher-child dream exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['夢', '一緒', '頑張る', '将来', '楽しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、将来、本当、何になりたい？', en: 'Sho-kun — future, truly, what want to be?', style: 'Teacher warm gentle sincere-warm asking-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sho_child', jp: 'うーん、本当、お医者さん、なりたい。', en: 'Hmm — truly, doctor, want to become.', style: 'Tiny six-year-old soft small sincere thinking-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '素敵な、夢、本当、ね。', en: 'Lovely — dream, truly.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sho_child', jp: '頑張る、本当、絶対。', en: 'Try hard — truly, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、本当、応援、する。', en: 'Together — truly, cheer, do.', style: 'Teacher warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '楽しい、本当、ね。', en: 'Fun — truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teacher warm gentle sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1433 — yumiko + sho, sleep early (short)
  {
    id: 'conv_01433',
    context: 'Yumiko sends Sho to bed early.',
    purpose: 'mother-child sleep-time exchange',
    ambient: 'bedroom_evening',
    sound_effects: [],
    target_vocab: ['寝る', '一緒', '優しい', '楽しい', '本当'],
    cast: ['yumiko_mom', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'しょうくん、本当、もう、寝る、時間。', en: 'Sho-kun — truly, already, sleep, time.', style: 'Maternal warm gentle sincere-warm caring-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'うん、本当、お疲れ様、本当に。', en: 'Yes — truly, good work, truly.', style: 'Tiny six-year-old soft small sincere agreeing-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'yumiko_mom', jp: '優しい、夢、本当、見てね。', en: 'Kind — dream, truly, see.', style: 'Maternal warm gentle sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '楽しい、本当、おやすみ。', en: 'Fun — truly, good night.', style: 'Tiny six-year-old soft small sincere closing-warm tender-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'yumiko_mom', jp: 'おやすみ、本当に、ね。', en: 'Good night — truly.', style: 'Maternal warm gentle sincere closing-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1434 — kenji + ren, late update (medium)
  {
    id: 'conv_01434',
    context: 'Kenji updates Ren on a late-night issue.',
    purpose: 'senior-alum late-update exchange',
    ambient: 'office_evening',
    sound_effects: [],
    target_vocab: ['一緒', '相談', '頑張る', '感謝', '会社'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、本当、遅くまで、ありがとう。', en: 'Ren-kun — truly, late, thanks.', style: 'Salaryman warm formal sincere-warm grateful-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'いえ、本当、頑張ります。', en: 'No — truly, try hard.', style: 'University student warm soft sincere-warm humble-warm committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、本当、ね。', en: 'Together — truly.', style: 'Salaryman warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '相談、本当、いつでも、本当に。', en: 'Consult — truly, anytime, truly.', style: 'University student warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '会社、本当、頼りに、してる。', en: 'Company — truly, relying on.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Salaryman warm soft sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1435 — daichi + ryosuke, evening relax (medium)
  {
    id: 'conv_01435',
    context: 'Daichi and Ryosuke share an evening drink.',
    purpose: 'son-in-law father-in-law evening drink',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '楽しい', '感謝', '大切'],
    cast: ['daichi_kansai', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '亮介さん、本当、いい夜やな。', en: 'Ryosuke-san — truly, good night.', style: 'Kansai warm bright sincere appreciative-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ryosuke_dad', jp: 'うん、本当、家族、嬉しい。', en: 'Yes — truly, family, happy.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '一緒に、本当、過ごせる、宝。', en: 'Together — truly, can spend, treasure.', style: 'Kansai warm bright sincere tender-deep philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: '楽しい、本当、毎日。', en: 'Fun — truly, every day.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '感謝、本当、本当に。', en: 'Grateful — truly, truly.', style: 'Kansai warm bright sincere grateful-deep tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Father warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1436 — mei + aoi, café chat (medium)
  {
    id: 'conv_01436',
    context: 'Mei and Aoi chat in the café.',
    purpose: 'two-mother café exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '友達', '感謝', '楽しい', '家族'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、本当、お店、いい雰囲気、ね。', en: 'Aoi-chan — truly, shop, good atmosphere.', style: 'Romantic warm soft sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'うん、本当、嬉しい、本当に。', en: 'Yes — truly, happy, truly.', style: 'Barista warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '友達、本当、宝、ね。', en: 'Friend — truly, treasure.', style: 'Romantic warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '一緒に、本当、過ごせる、嬉しい。', en: 'Together — truly, can spend, happy.', style: 'Barista warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '家族、本当、繋がってる、感じ。', en: 'Family — truly, connected, feel.', style: 'Romantic warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'Barista warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: '楽しい、本当、ね。', en: 'Fun — truly.', style: 'Romantic warm soft sincere closing-warm tender-philosophical warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1437 — hina + sho, summer fun (short)
  {
    id: 'conv_01437',
    context: 'Sho and Hina enjoy summer fruit.',
    purpose: 'children summer-fruit exchange',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['夏', '一緒', '美味しい', '楽しい', '友達'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、本当、夏の果物、美味しい。', en: 'Sho — truly, summer fruit, delicious.', style: 'High child bright sincere appreciative-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、本当、楽しい、ね。', en: 'Yes — truly, fun.', style: 'Tiny six-year-old soft small sincere matching-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、本当、嬉しい、本当に。', en: 'Together — truly, happy, truly.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '友達、本当、ね。', en: 'Friend — truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'High child bright sincere closing-warm grateful-deep tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1438 — sakura + asuka, mentor advice (medium)
  {
    id: 'conv_01438',
    context: 'Sakura seeks advice from Asuka.',
    purpose: 'teacher-author advice exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '相談', '感謝', '頑張る', '夢'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、本当、相談、お願いします。', en: 'Teacher — truly, consult, please.', style: 'Teen warm soft sincere asking-opening respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'asuka_teacher', jp: 'もちろん、本当に、ね。', en: 'Of course — truly.', style: 'Teacher warm gentle sincere-warm welcoming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '夢、本当、追い続ける、悩み。', en: 'Dream — truly, keep chasing, worry.', style: 'Teen warm soft sincere honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、本当、考えよう。', en: 'Together — truly, think.', style: 'Teacher warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '頑張る、本当、絶対。', en: 'Try hard — truly, surely.', style: 'Teen warm soft sincere committed-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teacher warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Teen warm soft sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1439 — hina + sho, school trip (medium)
  {
    id: 'conv_01439',
    context: 'Sho and Hina prepare for a school trip.',
    purpose: 'children school-trip exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['学校', '一緒', '楽しい', '頑張る', '友達'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、本当、明日、修学旅行、ね。', en: 'Hina — truly, tomorrow, school trip.', style: 'Tiny six-year-old soft small sincere anticipating-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'うん、本当、楽しみ、本当に。', en: 'Yes — truly, looking forward, truly.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、本当、楽しい、ね。', en: 'Together — truly, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '友達、本当、皆、行く。', en: 'Friends — truly, all, go.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張る、本当、絶対。', en: 'Try hard — truly, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '学校、本当、嬉しい。', en: 'School — truly, happy.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '本当、本当、楽しみ。', en: 'Truly — truly, looking forward.', style: 'Tiny six-year-old soft small sincere closing-warm enthusiastic-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 1440 — kenji + sakura, business deal (medium)
  {
    id: 'conv_01440',
    context: 'Kenji discusses a business deal with Sakura.',
    purpose: 'businessman-author deal exchange',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '相談', '頑張る', '感謝', '夢'],
    cast: ['kenji_office', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'さくらさん、本当、新しい話、ある。', en: 'Sakura-san — truly, new talk, exists.', style: 'Salaryman warm formal sincere-warm announcing-opening engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '本当、楽しみ、本当に。', en: 'Truly — looking forward, truly.', style: 'Teen warm soft sincere appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '夢、本当、繋がる、感じ。', en: 'Dream — truly, connect, feel.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'Teen warm soft sincere collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Teen warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Salaryman warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1441 — yumiko + hina, garden time (short)
  {
    id: 'conv_01441',
    context: 'Yumiko and Hina spend time in the garden.',
    purpose: 'mother-child garden exchange',
    ambient: 'garden_morning',
    sound_effects: [],
    target_vocab: ['花', '一緒', '優しい', '楽しい', '本当'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、本当、花、咲いた、ね。', en: 'Hina-chan — truly, flower, bloomed.', style: 'Maternal warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'わあ、本当、綺麗、本当に。', en: 'Wow — truly, beautiful, truly.', style: 'High child bright sincere awe-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '一緒に、本当、嬉しい、ね。', en: 'Together — truly, happy.', style: 'Maternal warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '優しい、お母さん、本当、好き。', en: 'Kind — mom, truly, like.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'yumiko_mom', jp: '楽しい、本当、ね。', en: 'Fun — truly.', style: 'Maternal warm gentle sincere closing-warm tender-philosophical warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1442 — saito + ryosuke, careful exam (medium)
  {
    id: 'conv_01442',
    context: 'Saito gives Ryosuke a careful follow-up exam.',
    purpose: 'doctor-patient careful follow-up',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '相談', '感謝', '頑張る'],
    cast: ['saito_doctor', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '亮介さん、本当、健康、良好、ね。', en: 'Ryosuke-san — truly, health, good.', style: 'Doctor warm formal sincere-warm reassuring-opening professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'ryosuke_dad', jp: '本当、感謝、本当に。', en: 'Truly — grateful, truly.', style: 'Father warm gentle sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '相談、本当、いつでも。', en: 'Consult — truly, anytime.', style: 'Doctor warm formal sincere-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '頑張ります、本当、ね。', en: 'Try hard — truly.', style: 'Father warm gentle sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一緒に、本当、ね。', en: 'Together — truly.', style: 'Doctor warm formal sincere-warm collaborative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Father warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'お元気で、本当に。', en: 'Healthy — truly.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1443 — naoko + tatsuya, country chat (medium)
  {
    id: 'conv_01443',
    context: 'Naoko and Tatsuya share a country chat.',
    purpose: 'cousin country-chat exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '楽しい', '感謝', '町'],
    cast: ['naoko_aunt', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'たつや、本当、いい朝、ね。', en: 'Tatsuya — truly, good morning.', style: 'Aunt warm soft sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'うん、本当、町、賑やか、本当に。', en: 'Yes — truly, town, lively, truly.', style: 'Country warm low sincere unhurried appreciative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'naoko_aunt', jp: '家族、本当、皆、近く、嬉しい。', en: 'Family — truly, all, close, happy.', style: 'Aunt warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '一緒に、本当、過ごせる、宝。', en: 'Together — truly, can spend, treasure.', style: 'Country warm low sincere unhurried tender-deep philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '楽しい、本当、毎日。', en: 'Fun — truly, every day.', style: 'Aunt warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Country warm low sincere unhurried grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Aunt warm soft sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1444 — hina + yumiko, drawing class (short)
  {
    id: 'conv_01444',
    context: 'Hina shows Yumiko her drawing.',
    purpose: 'mother-child drawing exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['絵', '一緒', '優しい', '楽しい', '本当'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'お母さん、本当、絵、描いた。', en: 'Mom — truly, picture, drew.', style: 'High child bright sincere announcing-opening proud, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: 'わあ、本当、可愛い、本当に。', en: 'Wow — truly, cute, truly.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '一緒に、本当、嬉しい、ね。', en: 'Together — truly, happy.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'yumiko_mom', jp: '優しい、ひなちゃん、本当に。', en: 'Kind — Hina-chan, truly.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '楽しい、本当、絵、ね。', en: 'Fun — truly, picture.', style: 'High child bright sincere closing-warm tender-philosophical warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1445 — kenji + ren, longtime mentor (long)
  {
    id: 'conv_01445',
    context: 'Kenji shares longtime mentor wisdom with Ren.',
    purpose: 'senior-alum longtime-mentor exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '頑張る', '大切'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 5,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、本当、長く、付き合ってきた。', en: 'Ren-kun — truly, long, associated.', style: 'Salaryman warm soft sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: 'うん、本当、感謝、本当に。', en: 'Yes — truly, grateful, truly.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '人生、本当、不思議、ね。', en: 'Life — truly, mysterious.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、本当、ここまで、来た。', en: 'Together — truly, until here, came.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '頑張ってきた、本当、皆。', en: 'Tried hard — truly, all.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'University student warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Salaryman warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'University student warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Salaryman warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '応援、本当、ずっと、する。', en: 'Cheer — truly, long, do.', style: 'University student warm soft sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'Salaryman warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当、本当に。', en: 'Grateful — truly, truly.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Salaryman warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_072 wrote', CONVERSATIONS.length, 'files');

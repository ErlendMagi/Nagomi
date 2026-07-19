import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_071)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1406 — sho + hina, sleep talk (short)
  {
    id: 'conv_01406',
    context: 'Sho and Hina talk about going to sleep.',
    purpose: 'children sleep-time exchange',
    ambient: 'bedroom_evening',
    sound_effects: [],
    target_vocab: ['寝る', '一緒', '優しい', '楽しい', '本当'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、本当、もう、寝る、時間。', en: 'Hina — truly, already, sleep, time.', style: 'Tiny six-year-old soft small sincere announcing-opening tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'うん、本当、お疲れ様。', en: 'Yes — truly, good work.', style: 'High child bright sincere matching-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '一緒に、本当、嬉しい、本当に。', en: 'Together — truly, happy, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '優しい、夢、本当、見よう。', en: 'Kind — dream, truly, see.', style: 'High child bright sincere wishing-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '楽しい、本当、おやすみ。', en: 'Fun — truly, good night.', style: 'Tiny six-year-old soft small sincere closing-warm tender-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' }
    ]
  },
  // 1407 — hiroshi_boss + kenji, project review (medium)
  {
    id: 'conv_01407',
    context: 'Hiroshi reviews Kenji\'s project adjustments.',
    purpose: 'business project-adjustment exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['調整', '一緒', '頑張る', '感謝', '考える'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、調整、本当、進んでる。', en: 'Kenji — adjustment, truly, proceeding.', style: 'Boss firm formal direct authoritative-opening clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、本当、ありがとうございます。', en: 'Yes — truly, thanks.', style: 'Salaryman warm formal sincere-warm grateful-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '皆様、本当、立派、ね。', en: 'Everyone — truly, splendid.', style: 'Boss firm formal direct appreciative-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '一緒に、本当、頑張ってる。', en: 'Together — truly, trying hard.', style: 'Salaryman warm formal sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Boss firm formal direct grateful-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Salaryman warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '頑張ろう、本当、これからも。', en: 'Try hard — truly, from now.', style: 'Boss firm formal direct closing-warm tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1408 — sho + hina, anniversary (short)
  {
    id: 'conv_01408',
    context: 'Hina and Sho celebrate a friendship anniversary.',
    purpose: 'children anniversary exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['記念', '一緒', '楽しい', '友達', '感謝'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、今日、本当、記念日、ね。', en: 'Sho — today, truly, anniversary.', style: 'High child bright sincere announcing-opening tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、本当、嬉しい、本当に。', en: 'Yes — truly, happy, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '友達、本当、ずっと、ね。', en: 'Friend — truly, long.', style: 'High child bright sincere philosophical-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '一緒に、本当、楽しい。', en: 'Together — truly, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '感謝、本当、ね。', en: 'Grateful — truly.', style: 'High child bright sincere closing-warm grateful-deep tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1409 — saito + ryosuke, return visit (medium)
  {
    id: 'conv_01409',
    context: 'Saito returns Ryosuke\'s visit.',
    purpose: 'doctor-patient return-visit exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['返事', '一緒', '健康', '相談', '感謝'],
    cast: ['saito_doctor', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '亮介さん、本当、返事、ありがとう。', en: 'Ryosuke-san — truly, reply, thanks.', style: 'Doctor warm formal sincere-warm grateful-opening tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ、本当、嬉しい。', en: 'Same — truly, happy.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'saito_doctor', jp: '健康、本当、保てる、ね。', en: 'Health — truly, can keep.', style: 'Doctor warm formal sincere-warm reassuring-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'ryosuke_dad', jp: '相談、本当、いつでも、ね。', en: 'Consult — truly, anytime.', style: 'Father warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一緒に、本当、頑張りましょう。', en: 'Together — truly, try hard.', style: 'Doctor warm formal sincere-warm collaborative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Father warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Doctor warm formal sincere closing-warm matching-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1410 — sakura + asuka, milestone (medium)
  {
    id: 'conv_01410',
    context: 'Sakura celebrates a milestone with Asuka.',
    purpose: 'teacher-alum milestone exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['記念', '一緒', '感謝', '頑張る', '大切'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、本当、記念、ね、今日。', en: 'Teacher — truly, anniversary, today.', style: 'Teen warm soft sincere announcing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'うん、本当、本当に、ね。', en: 'Yes — truly, truly.', style: 'Teacher warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '一緒に、本当、ここまで、来た。', en: 'Together — truly, until here, came.', style: 'Teacher warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Teen warm soft sincere tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'Teacher warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Teen warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1411 — kenji + ren, mentor wisdom (long)
  {
    id: 'conv_01411',
    context: 'Kenji shares mentor wisdom with Ren.',
    purpose: 'senior-alum wisdom exchange',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['一緒', '人生', '感謝', '頑張る', '大切'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 5,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、本当、長い、ね、付き合い。', en: 'Ren-kun — truly, long, association.', style: 'Salaryman warm soft sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: 'うん、本当、感謝、ずっと。', en: 'Yes — truly, grateful, long.', style: 'University student warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '人生、本当、繋がり、宝。', en: 'Life — truly, connection, treasure.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'University student warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '一緒に、本当、過ごせた。', en: 'Together — truly, could spend.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '頑張ってきた、本当、皆。', en: 'Tried hard — truly, all.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Salaryman warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'University student warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Salaryman warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '応援、本当、ずっと、する。', en: 'Cheer — truly, long, do.', style: 'University student warm soft sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '感謝、本当、毎日。', en: 'Grateful — truly, every day.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'University student warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'Salaryman warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1412 — sho + hina, knowing each other (short)
  {
    id: 'conv_01412',
    context: 'Sho and Hina realize how well they know each other.',
    purpose: 'children friendship-depth exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['知り合い', '一緒', '楽しい', '友達', '感謝'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、本当、長い、知り合い、ね。', en: 'Sho — truly, long, acquaintance.', style: 'High child bright sincere reflective-opening tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: 'うん、本当、嬉しい、本当に。', en: 'Yes — truly, happy, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '友達、本当、宝物、本当に。', en: 'Friend — truly, treasure, truly.', style: 'High child bright sincere philosophical-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '一緒に、本当、楽しい、ね。', en: 'Together — truly, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '感謝、本当、ね。', en: 'Grateful — truly.', style: 'High child bright sincere closing-warm grateful-deep tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1413 — daichi + tatsuya, far-off (short)
  {
    id: 'conv_01413',
    context: 'Daichi tells Tatsuya about a far-off relative.',
    purpose: 'cousin far-relative exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['遠い', '一緒', '家族', '感謝', '本当'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、本当、遠い、親戚、ね。', en: 'Tatsuya — truly, far, relative.', style: 'Kansai warm bright sincere observing-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、本当、ずっと、ね。', en: 'Yes — truly, long.', style: 'Country warm low sincere unhurried matching-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '家族、本当、繋がってる。', en: 'Family — truly, connected.', style: 'Kansai warm bright sincere philosophical-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Country warm low sincere unhurried grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '一緒に、本当、ね。', en: 'Together — truly.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1414 — yumiko + ryosuke, narrow path (medium)
  {
    id: 'conv_01414',
    context: 'Yumiko and Ryosuke walk down a narrow path.',
    purpose: 'married-couple walk exchange',
    ambient: 'street_evening',
    sound_effects: [],
    target_vocab: ['狭い', '一緒', '楽しい', '優しい', '本当'],
    cast: ['yumiko_mom', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'お父さん、本当、狭い、道、ね。', en: 'Father — truly, narrow, road.', style: 'Maternal warm gentle sincere-warm observing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、本当、優しい、感じる。', en: 'Yes — truly, kind, feel.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '一緒に、本当、嬉しい。', en: 'Together — truly, happy.', style: 'Maternal warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '楽しい、本当、毎日。', en: 'Fun — truly, every day.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'Maternal warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '大切な、時間、本当に。', en: 'Precious — time, truly.', style: 'Maternal warm gentle sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1415 — kenji + ren, opinion (short)
  {
    id: 'conv_01415',
    context: 'Kenji asks Ren for his honest opinion.',
    purpose: 'senior-alum opinion exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['一緒', '相談', '感謝', '頑張る', '考える'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、本当、相談、いいかな。', en: 'Ren-kun — truly, consult, okay?', style: 'Salaryman warm soft sincere-warm asking-opening respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'もちろん、本当に。', en: 'Of course — truly.', style: 'University student warm soft sincere-warm welcoming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、本当、考えよう。', en: 'Together — truly, think.', style: 'Salaryman warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、本当、絶対。', en: 'Try hard — truly, surely.', style: 'University student warm soft sincere-warm committed-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Salaryman warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1416 — hina + sho, returning home (short)
  {
    id: 'conv_01416',
    context: 'Sho and Hina return home from school.',
    purpose: 'children return-home exchange',
    ambient: 'street_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '家族', '本当', '頑張る'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、本当、楽しい、一日。', en: 'Hina — truly, fun, day.', style: 'Tiny six-year-old soft small sincere reflective-opening bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'うん、本当、嬉しい、ね。', en: 'Yes — truly, happy.', style: 'High child bright sincere matching-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '家族、本当、待ってる、ね。', en: 'Family — truly, waiting.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '頑張った、本当、絶対。', en: 'Tried hard — truly, surely.', style: 'High child bright sincere appreciative-warm bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、本当、また、ね。', en: 'Together — truly, again.', style: 'Tiny six-year-old soft small sincere closing-warm tender-promise warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' }
    ]
  },
  // 1417 — saito + mei, child checkup (medium)
  {
    id: 'conv_01417',
    context: 'Saito gives Mei a positive baby checkup.',
    purpose: 'doctor-mother baby checkup exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '相談', '家族', '感謝'],
    cast: ['saito_doctor', 'mei_romantic'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'メイさん、本当、子ども、健康、ね。', en: 'Mei-san — truly, child, healthy.', style: 'Doctor warm formal sincere-warm reassuring-opening professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'mei_romantic', jp: '本当、感謝、本当に。', en: 'Truly — grateful, truly.', style: 'Romantic warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: '家族、本当、立派、ね。', en: 'Family — truly, splendid.', style: 'Doctor warm formal sincere-warm appreciative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '相談、本当、いつでも。', en: 'Consult — truly, anytime.', style: 'Romantic warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一緒に、本当、見守ろう。', en: 'Together — truly, watch over.', style: 'Doctor warm formal sincere-warm collaborative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Romantic warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'saito_doctor', jp: 'お元気で、本当に、ね。', en: 'Healthy — truly.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1418 — daichi + sho, country day (short)
  {
    id: 'conv_01418',
    context: 'Daichi takes Sho on a country day trip.',
    purpose: 'uncle-child country-day exchange',
    ambient: 'field_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '本当', '頑張る', '町'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、本当、いい一日や。', en: 'Sho — truly, good day.', style: 'Kansai warm bright sincere appreciative-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、本当、楽しい、ね。', en: 'Yes — truly, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '一緒に、本当、嬉しいで。', en: 'Together — truly, happy.', style: 'Kansai warm bright sincere tender-warm grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張った、本当、絶対。', en: 'Tried hard — truly, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1419 — sakura + ren, working together (medium)
  {
    id: 'conv_01419',
    context: 'Sakura and Ren start a new collaboration.',
    purpose: 'cousin new-collaboration exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['一緒', '夢', '頑張る', '感謝', '大切'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、新しい計画、本当、楽しみ。', en: 'Ren-bro — new plan, truly, looking forward.', style: 'Teen warm soft sincere announcing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '夢、本当、ずっと、追ってきた。', en: 'Dream — truly, long, chased.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'University student warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '大切な、繋がり、本当に。', en: 'Precious — connection, truly.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'Teen warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1420 — yumiko + naoko, autumn talk (medium)
  {
    id: 'conv_01420',
    context: 'Yumiko and Naoko share an autumn afternoon talk.',
    purpose: 'sister-in-law autumn-talk exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['秋', '一緒', '楽しい', '家族', '感謝'],
    cast: ['yumiko_mom', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: '直子ちゃん、本当、秋、綺麗、ね。', en: 'Naoko-chan — truly, autumn, beautiful.', style: 'Maternal warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'うん、本当、本当に、ね。', en: 'Yes — truly, truly.', style: 'Aunt warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '一緒に、本当、過ごせる、嬉しい。', en: 'Together — truly, can spend, happy.', style: 'Maternal warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '楽しい、本当、毎日。', en: 'Fun — truly, every day.', style: 'Aunt warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '家族、本当、宝、ね。', en: 'Family — truly, treasure.', style: 'Maternal warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'Aunt warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Maternal warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1421 — hina + sho, school day (short)
  {
    id: 'conv_01421',
    context: 'Hina and Sho talk after school.',
    purpose: 'children after-school exchange',
    ambient: 'street_afternoon',
    sound_effects: [],
    target_vocab: ['学校', '一緒', '楽しい', '友達', '頑張る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、学校、本当、楽しかった。', en: 'Sho — school, truly, was fun.', style: 'High child bright sincere reflective-opening tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、友達、本当、いっぱい。', en: 'Yes — friends, truly, many.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、本当、頑張った、ね。', en: 'Together — truly, tried hard.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '楽しい、本当、ね、ずっと。', en: 'Fun — truly, long.', style: 'Tiny six-year-old soft small sincere tender-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '感謝、本当、本当に。', en: 'Grateful — truly, truly.', style: 'High child bright sincere closing-warm grateful-deep tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1422 — asuka + sho, classroom warmth (medium)
  {
    id: 'conv_01422',
    context: 'Asuka shares a quiet classroom moment with Sho.',
    purpose: 'teacher-child quiet exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '頑張る', '勉強'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、本当、頑張ってる、ね。', en: 'Sho-kun — truly, trying hard.', style: 'Teacher warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sho_child', jp: '勉強、本当、楽しい。', en: 'Study — truly, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、本当、嬉しい、ね。', en: 'Together — truly, happy.', style: 'Teacher warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '優しい、先生、本当、好き。', en: 'Kind — teacher, truly, like.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Teacher warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '頑張る、本当、絶対。', en: 'Try hard — truly, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teacher warm gentle sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1423 — mei + ren, family help (medium)
  {
    id: 'conv_01423',
    context: 'Mei asks Ren for help with the kids.',
    purpose: 'cousin-mother help exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['助け', '一緒', '家族', '感謝', '頑張る'],
    cast: ['mei_romantic', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'レン、本当、助け、本当に、ありがとう。', en: 'Ren — truly, help, truly, thanks.', style: 'Romantic warm soft sincere-warm grateful-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'いえ、本当、嬉しい、ね。', en: 'No — truly, happy.', style: 'University student warm soft sincere-warm humble-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'Romantic warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '家族、本当、宝、本当に。', en: 'Family — truly, treasure, truly.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Romantic warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'University student warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Romantic warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1424 — tatsuya + sho, country house (short)
  {
    id: 'conv_01424',
    context: 'Sho visits Tatsuya\'s country house.',
    purpose: 'uncle-child country-house exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '本当', '友達'],
    cast: ['tatsuya_country', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'しょう、本当、よく来た、ね。', en: 'Sho — truly, came well.', style: 'Country warm low sincere unhurried welcoming-opening tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'sho_child', jp: 'うん、本当、嬉しい、本当に。', en: 'Yes — truly, happy, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'tatsuya_country', jp: '優しい、お客さん、本当に。', en: 'Kind — guest, truly.', style: 'Country warm low sincere unhurried appreciative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '一緒に、本当、楽しい。', en: 'Together — truly, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'tatsuya_country', jp: 'また、本当、来てな。', en: 'Again — truly, come.', style: 'Country warm low sincere closing-warm tender-promise warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1425 — kenji + sakura, future plans (medium)
  {
    id: 'conv_01425',
    context: 'Kenji and Sakura plan future business-author collaboration.',
    purpose: 'businessman-author future-plan exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '感謝', '夢', '大切'],
    cast: ['kenji_office', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'さくらさん、未来、本当、楽しみ。', en: 'Sakura-san — future, truly, looking forward.', style: 'Salaryman warm formal sincere-warm anticipating-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'Salaryman warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '夢、本当、ずっと、続く。', en: 'Dream — truly, long, continues.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '大切な、繋がり、本当に。', en: 'Precious — connection, truly.', style: 'Teen warm soft sincere tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Salaryman warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_071 wrote', CONVERSATIONS.length, 'files');

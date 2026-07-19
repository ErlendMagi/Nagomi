import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_068)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1346 — kenji + hiroshi_boss, expansion details (medium)
  {
    id: 'conv_01346',
    context: 'Kenji presents expansion details to Hiroshi.',
    purpose: 'business expansion-details exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['拡大', '詳細', '一緒', '考える', '頑張る'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、拡大、本当、詳細、聞きたい。', en: 'Kenji — expansion, truly, details, want to hear.', style: 'Boss firm formal direct authoritative-opening clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、本当、複雑、本当に。', en: 'Yes — truly, complex, truly.', style: 'Salaryman warm formal sincere-warm professional-warm honest, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '一緒に、本当、考えていこう。', en: 'Together — truly, think.', style: 'Boss firm formal direct collaborative-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '頑張ります、本当に、絶対。', en: 'Try hard — truly, surely.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '皆様、本当、応援、する。', en: 'Everyone — truly, cheer, do.', style: 'Boss firm formal direct appreciative-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '頑張れよ、本当、ね。', en: 'Try hard — truly.', style: 'Boss firm formal direct closing-warm tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1347 — sho + hina, cold (short)
  {
    id: 'conv_01347',
    context: 'Hina catches a cold; Sho visits her.',
    purpose: 'children cold-visit exchange',
    ambient: 'bedroom_morning',
    sound_effects: [],
    target_vocab: ['風邪', '一緒', '頑張る', '優しい', '友達'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、風邪、本当、大丈夫？', en: 'Hina — cold, truly, okay?', style: 'Tiny six-year-old soft small sincere caring-opening tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'うん、本当、ありがとう。', en: 'Yes — truly, thanks.', style: 'High child bright sincere grateful-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '優しい、ジュース、持ってきた。', en: 'Kind — juice, brought.', style: 'Tiny six-year-old soft small sincere offering-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '友達、本当、嬉しい、ね。', en: 'Friend — truly, happy.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '頑張って、治して、ね。', en: 'Try hard — heal.', style: 'Tiny six-year-old soft small sincere closing-warm tender-promise warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' }
    ]
  },
  // 1348 — asuka + ren, exam debate (medium)
  {
    id: 'conv_01348',
    context: 'Asuka and Ren discuss debating exam reforms.',
    purpose: 'mentor-colleague exam-debate exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['議論', '反対', '一緒', '考える', '生徒'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、議論、本当、必要、感じる。', en: 'Ren-kun — debate, truly, needed, feel.', style: 'Teacher warm gentle sincere-warm philosophical-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '反対、本当、ある、本当に。', en: 'Opposition — truly, exists, truly.', style: 'University student warm soft sincere-warm honest-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '生徒、本当、影響、ある、本当に。', en: 'Students — truly, influence, exists, truly.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、本当、考えよう。', en: 'Together — truly, think.', style: 'University student warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'Teacher warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Teacher warm gentle sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1349 — daichi + tatsuya, town tournament (medium)
  {
    id: 'conv_01349',
    context: 'Daichi and Tatsuya plan a town tournament.',
    purpose: 'cousin tournament-planning exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['大会', '町', '一緒', '頑張る', '応援'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、町の大会、本当、計画しよか。', en: 'Tatsuya — town tournament, truly, plan?', style: 'Kansai warm bright sincere proposing-opening engaged, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、本当、皆、本当、喜ぶ。', en: 'Yes — truly, all, truly, happy.', style: 'Country warm low sincere unhurried matching-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '応援、本当、ずっと、する。', en: 'Cheer — truly, long, do.', style: 'Kansai warm bright sincere committed-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'Country warm low sincere unhurried collaborative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Kansai warm bright sincere grateful-deep tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '町、本当、活気、戻る。', en: 'Town — truly, vitality, returns.', style: 'Country warm low sincere unhurried hopeful-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '本当、嬉しい、ね。', en: 'Truly — happy.', style: 'Kansai warm bright sincere closing-warm tender-deep grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1350 — sakura + ren, novel chapter (long)
  {
    id: 'conv_01350',
    context: 'Sakura shares a chapter of her new novel with Ren.',
    purpose: 'cousin novel-chapter exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['物語', '一緒', '感謝', '頑張る', '楽しい'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、新しい物語、本当、楽しみ。', en: 'Ren-bro — new story, truly, looking forward.', style: 'Teen warm soft sincere announcing-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当、楽しみ、ね。', en: 'Truly — looking forward.', style: 'University student warm soft sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '想像、本当、広がる、本当に。', en: 'Imagination — truly, widens, truly.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当、深い、本当、感じる。', en: 'Truly — deep, truly, feel.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'お前の作品、本当、宝。', en: 'Your works — truly, treasure.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、ここまで、本当、嬉しい。', en: 'Together — until here, truly, happy.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'University student warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '頑張る、本当に、絶対。', en: 'Try hard — truly, surely.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '応援、本当、ずっと、する。', en: 'Cheer — truly, long, do.', style: 'University student warm soft sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'Teen warm soft sincere tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'University student warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Teen warm soft sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1351 — hina + yumiko, package (short)
  {
    id: 'conv_01351',
    context: 'Yumiko helps Hina open a package from grandma.',
    purpose: 'mother-child package exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['荷物', '一緒', '楽しい', '優しい', '感謝'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、荷物、本当、来た、ね。', en: 'Hina-chan — package, truly, came.', style: 'Maternal warm gentle sincere-warm announcing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'おばあちゃん、本当、優しい。', en: 'Grandma — truly, kind.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'yumiko_mom', jp: '一緒に、開けようね、本当に。', en: 'Together — open, truly.', style: 'Maternal warm gentle sincere-warm inviting-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '楽しい、本当、本当に。', en: 'Fun — truly, truly.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '感謝、本当、伝えてね。', en: 'Grateful — truly, convey.', style: 'Maternal warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1352 — kenji + ren, system analysis (medium)
  {
    id: 'conv_01352',
    context: 'Kenji and Ren analyze a new education system.',
    purpose: 'businessman-teacher system-analysis exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['システム', '分析', '一緒', '考える', '頑張る'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、新しいシステム、本当、考えてる。', en: 'Ren-kun — new system, truly, considering.', style: 'Salaryman warm formal sincere-warm philosophical-opening engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当、面白い、本当に。', en: 'Truly — interesting, truly.', style: 'University student warm soft sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '分析、本当、必要、感じる。', en: 'Analysis — truly, needed, feel.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、本当、考えよう。', en: 'Together — truly, think.', style: 'University student warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'Salaryman warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Salaryman warm soft sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1353 — saito + ryosuke, careful diagnosis (medium)
  {
    id: 'conv_01353',
    context: 'Saito gives Ryosuke a careful diagnosis.',
    purpose: 'doctor-patient careful-diagnosis exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['診断', '健康', '一緒', '相談', '頑張る'],
    cast: ['saito_doctor', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '亮介さん、診断、本当、慎重に。', en: 'Ryosuke-san — diagnosis, truly, carefully.', style: 'Doctor warm formal sincere-warm careful-opening professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'ryosuke_dad', jp: 'はい、本当、よろしく。', en: 'Yes — truly, please.', style: 'Father warm gentle sincere-warm respectful-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '健康、本当、保ちましょう。', en: 'Health — truly, keep.', style: 'Doctor warm formal sincere-warm advising-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、本当、頑張ります。', en: 'Together — truly, try hard.', style: 'Father warm gentle sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '相談、本当、いつでも。', en: 'Consult — truly, anytime.', style: 'Doctor warm formal sincere-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Father warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Doctor warm formal sincere closing-warm matching-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1354 — sho + asuka, history lesson (medium)
  {
    id: 'conv_01354',
    context: 'Asuka teaches Sho a Japanese language history lesson.',
    purpose: 'teacher-child language-history exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['日本語', '一緒', '勉強', '楽しい', '頑張る'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、日本語、本当、面白い、ね。', en: 'Sho-kun — Japanese, truly, interesting.', style: 'Teacher warm gentle sincere-warm welcoming-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'うん、本当、楽しい、勉強。', en: 'Yes — truly, fun, study.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '昔の言葉、本当、深い、本当に。', en: 'Old words — truly, deep, truly.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '頑張る、本当、覚える。', en: 'Try hard — truly, remember.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、本当、勉強しよう。', en: 'Together — truly, study.', style: 'Teacher warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '感謝、本当、ね。', en: 'Grateful — truly.', style: 'Tiny six-year-old soft small sincere grateful-deep tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1355 — daichi + sho, train (short)
  {
    id: 'conv_01355',
    context: 'Daichi and Sho discuss train trip details.',
    purpose: 'uncle-child train-details exchange',
    ambient: 'street_morning',
    sound_effects: [],
    target_vocab: ['詳細', '一緒', '楽しい', '頑張る', '見る'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、詳細、本当、調べたで。', en: 'Sho — details, truly, checked.', style: 'Kansai warm bright sincere reporting-opening engaged, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、本当、楽しみ、本当に。', en: 'Yes — truly, looking forward, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '一緒に、本当、楽しい、ね。', en: 'Together — truly, fun.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張る、本当、絶対。', en: 'Try hard — truly, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Kansai warm bright sincere closing-warm tender-deep grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1356 — mei + yumiko, careful baby (medium)
  {
    id: 'conv_01356',
    context: 'Mei thanks Yumiko for help with the baby.',
    purpose: 'daughter-in-law mother-in-law baby exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '感謝', '優しい', '大切'],
    cast: ['mei_romantic', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'お義母さん、本当、ありがとう、ね。', en: 'Mother-in-law — truly, thanks.', style: 'Romantic warm soft sincere-warm grateful-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'こちらこそ、本当に、ね。', en: 'Same — truly.', style: 'Maternal warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '優しい、本当、家族。', en: 'Kind — truly, family.', style: 'Romantic warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '一緒に、本当、嬉しい。', en: 'Together — truly, happy.', style: 'Maternal warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Romantic warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '大切な、家族、本当に。', en: 'Precious — family, truly.', style: 'Maternal warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Romantic warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1357 — hina + sho, autumn (short)
  {
    id: 'conv_01357',
    context: 'Hina and Sho enjoy fall fruit together.',
    purpose: 'children fall-fruit exchange',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['秋', '一緒', '美味しい', '楽しい', '果物'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、秋の果物、本当、美味しい。', en: 'Sho — autumn fruit, truly, delicious.', style: 'High child bright sincere appreciative-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、柿、本当、好き。', en: 'Yes — persimmon, truly, like.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、本当、食べる、楽しい。', en: 'Together — truly, eating, fun.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '本当、嬉しい、ね。', en: 'Truly — happy.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '楽しい、本当に。', en: 'Fun — truly.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1358 — kenji + sakura, novel meeting (medium)
  {
    id: 'conv_01358',
    context: 'Kenji and Sakura meet about her novel\'s movie deal.',
    purpose: 'businessman-author movie-deal exchange',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['映画', '一緒', '感謝', '頑張る', '夢'],
    cast: ['kenji_office', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'さくらさん、映画、本当、進んでる。', en: 'Sakura-san — film, truly, proceeding.', style: 'Salaryman warm formal sincere-warm announcing-opening engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '監督、本当、立派、感じる。', en: 'Director — truly, splendid, feel.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '夢、本当、また、広がる。', en: 'Dream — truly, again, widens.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'Salaryman warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Salaryman warm soft sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1359 — tatsuya + ryosuke, brothers (medium)
  {
    id: 'conv_01359',
    context: 'Tatsuya and Ryosuke share a quiet brother chat.',
    purpose: 'cousin brothers exchange',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '家族', '大切'],
    cast: ['tatsuya_country', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '亮介、本当、長いね、人生。', en: 'Ryosuke — truly, long, life.', style: 'Country warm low sincere unhurried philosophical-opening tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: 'うん、本当、本当に、ね。', en: 'Yes — truly, truly.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '家族、本当、宝、本当に。', en: 'Family — truly, treasure, truly.', style: 'Country warm low sincere unhurried tender-deep philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '一緒に、本当、過ごせた、嬉しい。', en: 'Together — truly, could spend, happy.', style: 'Father warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Country warm low sincere unhurried grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '大切な、兄弟、本当に。', en: 'Precious — brothers, truly.', style: 'Country warm low sincere closing-warm tender-deep loving, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1360 — sho + hina, swimming (short)
  {
    id: 'conv_01360',
    context: 'Sho and Hina go swimming together.',
    purpose: 'children swimming exchange',
    ambient: 'pool_morning',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '頑張る', '泳ぐ', '頑張る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、泳ぐ、本当、楽しい。', en: 'Sho — swim, truly, fun.', style: 'High child bright sincere appreciative-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、本当、頑張る。', en: 'Yes — truly, try hard.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、本当、最高、本当に。', en: 'Together — truly, best, truly.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Tiny six-year-old soft small sincere tender-warm grateful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'High child bright sincere closing-warm tender-promise warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1361 — yuki + naoko, autumn walk (medium)
  {
    id: 'conv_01361',
    context: 'Yuki and Naoko take an autumn walk together.',
    purpose: 'two-women autumn-walk exchange',
    ambient: 'street_afternoon',
    sound_effects: [],
    target_vocab: ['秋', '一緒', '楽しい', '友達', '大切'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、秋、本当、綺麗、ね。', en: 'Naoko-san — autumn, truly, beautiful.', style: 'Office woman bright soft sincere appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'うん、本当、本当に、ね。', en: 'Yes — truly, truly.', style: 'Aunt warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '一緒に、本当、楽しい、本当。', en: 'Together — truly, fun, truly.', style: 'Office woman bright soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '友達、本当、大切、ね。', en: 'Friend — truly, precious.', style: 'Aunt warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'Office woman bright soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Aunt warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '大切な、時間、本当に。', en: 'Precious — time, truly.', style: 'Office woman bright soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1362 — asuka + sakura, late mentor visit (medium)
  {
    id: 'conv_01362',
    context: 'Sakura visits Asuka late in the day.',
    purpose: 'teacher-alum late-visit exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '頑張る', '大切'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、本当、いつもお世話に。', en: 'Teacher — truly, always in care.', style: 'Teen warm soft sincere grateful-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、本当に、ね。', en: 'Same — truly.', style: 'Teacher warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '人生、本当、繋がってる、感じ。', en: 'Life — truly, connected, feel.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: '一緒に、本当、宝、本当に。', en: 'Together — truly, treasure, truly.', style: 'Teacher warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '頑張る、本当に、ずっと。', en: 'Try hard — truly, long.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '大切な、生徒、本当に。', en: 'Precious — student, truly.', style: 'Teacher warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '感謝、本当、本当に。', en: 'Grateful — truly, truly.', style: 'Teen warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1363 — daichi + sho, train trip (short)
  {
    id: 'conv_01363',
    context: 'Daichi and Sho prepare for a train trip.',
    purpose: 'uncle-child train-prep exchange',
    ambient: 'station_morning',
    sound_effects: [],
    target_vocab: ['電車', '一緒', '楽しい', '頑張る', '出発'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、電車、本当、もうすぐ、出発。', en: 'Sho — train, truly, soon, departure.', style: 'Kansai warm bright sincere announcing-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しみ、本当に、本当。', en: 'Looking forward — truly, truly.', style: 'Tiny six-year-old soft small sincere enthusiastic-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '一緒に、本当、楽しもな。', en: 'Together — truly, enjoy.', style: 'Kansai warm bright sincere proposing-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張る、本当、ね。', en: 'Try hard — truly.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '本当、嬉しい、ね。', en: 'Truly — happy.', style: 'Kansai warm bright sincere closing-warm tender-deep grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1364 — mei + daichi, family planning (medium)
  {
    id: 'conv_01364',
    context: 'Mei and Daichi plan a family vacation.',
    purpose: 'married-couple family-vacation exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '楽しい', '計画', '頑張る'],
    cast: ['mei_romantic', 'daichi_kansai'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、家族の旅行、本当、計画しよう。', en: 'Daichi — family travel, truly, plan.', style: 'Romantic warm soft sincere-warm proposing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '本当、ええなあ、本当に。', en: 'Truly — nice, truly.', style: 'Kansai warm bright sincere appreciative-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '子供たち、本当、楽しみ、絶対。', en: 'Children — truly, looking forward, surely.', style: 'Romantic warm soft sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '一緒に、本当、頑張ろうな。', en: 'Together — truly, try hard.', style: 'Kansai warm bright sincere committed-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '感謝、本当、毎日。', en: 'Grateful — truly, every day.', style: 'Romantic warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Kansai warm bright sincere matching-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '楽しい、本当、家族、ね。', en: 'Fun — truly, family.', style: 'Romantic warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1365 — sho + hina, evening (short)
  {
    id: 'conv_01365',
    context: 'Sho and Hina chat at end of day.',
    purpose: 'children end-of-day exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '友達', '感謝', '大切'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、今日も、本当、楽しかった。', en: 'Sho — today too, truly, was fun.', style: 'High child bright sincere reflective-opening tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: 'うん、一緒、本当、嬉しい。', en: 'Yes — together, truly, happy.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '友達、本当、大切、ね。', en: 'Friend — truly, precious.', style: 'High child bright sincere philosophical-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'Tiny six-year-old soft small sincere grateful-deep tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'おやすみ、本当に。', en: 'Good night — truly.', style: 'High child bright sincere closing-warm tender-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_068 wrote', CONVERSATIONS.length, 'files');

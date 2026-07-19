import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_069)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1366 — kenji + hiroshi_boss, completion (medium)
  {
    id: 'conv_01366',
    context: 'Kenji reports a project completion.',
    purpose: 'business completion-report exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['完了', '一緒', '頑張る', '感謝', '会社'],
    cast: ['kenji_office', 'hiroshi_boss'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '部長、プロジェクト、完了、本当に。', en: 'Boss — project, completion, truly.', style: 'Salaryman warm formal sincere-warm announcing-opening committed, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '本当、よく頑張ったな。', en: 'Truly — well done.', style: 'Boss firm formal direct appreciative-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '皆様、本当、感謝、ずっと。', en: 'Everyone — truly, grateful, long.', style: 'Salaryman warm formal sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '一緒に、本当、ここまで、来た。', en: 'Together — truly, until here, came.', style: 'Boss firm formal direct tender-deep philosophical, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '会社、本当、立派、なれた。', en: 'Company — truly, splendid, became.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'これからも、本当、頼んだ。', en: 'From now — truly, counting on.', style: 'Boss firm formal direct tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' },
      { speaker: 'kenji_office', jp: '頑張ります、絶対。', en: 'Try hard — surely.', style: 'Salaryman warm formal sincere closing-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1367 — sho + hina, autumn cloud (short)
  {
    id: 'conv_01367',
    context: 'Sho and Hina look at autumn clouds.',
    purpose: 'children cloud-watching exchange',
    ambient: 'window_afternoon',
    sound_effects: [],
    target_vocab: ['雲', '一緒', '見る', '楽しい', '空'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、雲、見て、本当、綺麗。', en: 'Sho — clouds, look, truly, beautiful.', style: 'High child bright sincere observing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、本当、ふわふわ、ね。', en: 'Yes — truly, fluffy.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '空、本当、広い、ね。', en: 'Sky — truly, wide.', style: 'High child bright sincere awe-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、見るの、楽しい。', en: 'Together — looking, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '本当、嬉しい、ね。', en: 'Truly — happy.', style: 'High child bright sincere closing-warm tender-deep grateful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1368 — asuka + ren, study learning (medium)
  {
    id: 'conv_01368',
    context: 'Asuka and Ren discuss new learning methods.',
    purpose: 'mentor-colleague learning exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['学習', '一緒', '生徒', '頑張る', '指導'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、新しい学習、本当、効果ある。', en: 'Ren-kun — new learning, truly, effective.', style: 'Teacher warm gentle sincere-warm appreciative-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当、生徒、楽しんでる、ね。', en: 'Truly — students, enjoying.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '指導、本当、奥深い、ね。', en: 'Guidance — truly, deep.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'University student warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teacher warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'University student warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1369 — saito + mei, patient family (medium)
  {
    id: 'conv_01369',
    context: 'Saito assures Mei about her family\'s health.',
    purpose: 'doctor-mother family-health exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['患者', '健康', '一緒', '家族', '相談'],
    cast: ['saito_doctor', 'mei_romantic'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'メイさん、家族、本当、健康、ね。', en: 'Mei-san — family, truly, healthy.', style: 'Doctor warm formal sincere-warm reassuring-opening professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'mei_romantic', jp: 'ああ、本当、感謝。', en: 'Ah — truly, grateful.', style: 'Romantic warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '患者、本当、皆、本当に、立派。', en: 'Patients — truly, all, truly, splendid.', style: 'Doctor warm formal sincere-warm appreciative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '相談、本当、いつでも、ね。', en: 'Consult — truly, anytime.', style: 'Romantic warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一緒に、本当、頑張りましょう。', en: 'Together — truly, try hard.', style: 'Doctor warm formal sincere-warm collaborative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '感謝、本当、ずっと、ね。', en: 'Grateful — truly, long.', style: 'Romantic warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Doctor warm formal sincere closing-warm matching-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1370 — sakura + asuka, exchange of words (long)
  {
    id: 'conv_01370',
    context: 'Sakura visits Asuka for a long heart-to-heart.',
    purpose: 'teacher-alum heart-to-heart exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '頑張る', '大切'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、本当、雰囲気、落ち着く。', en: 'Teacher — truly, atmosphere, calms.', style: 'Teen warm soft sincere reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: 'うん、本当、本当に、ね。', en: 'Yes — truly, truly.', style: 'Teacher warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '人生、本当、不思議、ね。', en: 'Life — truly, mysterious.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: '一緒に、本当、過ごせた、宝。', en: 'Together — truly, could spend, treasure.', style: 'Teacher warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、本当、毎日。', en: 'Grateful — truly, every day.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '本当、お前と、繋がり、本当に。', en: 'Truly — with you, connection, truly.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '頑張る、本当、ずっと。', en: 'Try hard — truly, long.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '応援、本当、ずっと、する。', en: 'Cheer — truly, long, do.', style: 'Teacher warm gentle sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Teen warm soft sincere tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、本当に、ね。', en: 'Same — truly.', style: 'Teacher warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Teen warm soft sincere tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Teacher warm gentle sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1371 — daichi + sho, swimming (short)
  {
    id: 'conv_01371',
    context: 'Daichi and Sho discuss swimming in the pool.',
    purpose: 'uncle-child swimming exchange',
    ambient: 'pool_morning',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '頑張る', '泳ぐ', '友達'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、泳ぐ、本当、上手、なった。', en: 'Sho — swimming, truly, skilled, became.', style: 'Kansai warm bright sincere appreciative-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張ってる、本当、毎日。', en: 'Trying hard — truly, every day.', style: 'Tiny six-year-old soft small sincere proud-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '一緒に、本当、楽しい、ね。', en: 'Together — truly, fun.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '友達、本当、いっぱい、いる。', en: 'Friends — truly, many, exist.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '本当、嬉しい、ね。', en: 'Truly — happy.', style: 'Kansai warm bright sincere closing-warm tender-deep grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1372 — kenji + ren, train ride (medium)
  {
    id: 'conv_01372',
    context: 'Kenji and Ren take a train ride to a meeting.',
    purpose: 'senior-alum train-ride exchange',
    ambient: 'train_morning',
    sound_effects: [],
    target_vocab: ['電車', '一緒', '頑張る', '感謝', '会社'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、電車、本当、楽しい。', en: 'Ren-kun — train, truly, fun.', style: 'Salaryman warm soft sincere-warm casual-opening engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、本当、ね。', en: 'Yes — truly.', style: 'University student warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '会社、本当、楽しみ、ね。', en: 'Company — truly, looking forward.', style: 'Salaryman warm soft sincere-warm anticipating-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、本当に。', en: 'Try hard — truly.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、本当、頼もしい。', en: 'Together — truly, reliable.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Salaryman warm soft sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1373 — hina + yumiko, fresh egg (short)
  {
    id: 'conv_01373',
    context: 'Yumiko shows Hina how to crack an egg.',
    purpose: 'mother-child egg-crack exchange',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['卵', '一緒', '優しい', '頑張る', '楽しい'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、卵、本当、優しく、割ろう。', en: 'Hina-chan — egg, truly, gently, crack.', style: 'Maternal warm gentle sincere-warm teaching-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、頑張る、本当、絶対。', en: 'Yes — try hard, truly, surely.', style: 'High child bright sincere committed-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '一緒に、本当、楽しい、ね。', en: 'Together — truly, fun.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '出来た、本当、嬉しい！', en: 'Did it — truly, happy!', style: 'High child bright sincere triumphant-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '優しい、子、本当、立派。', en: 'Kind — child, truly, splendid.', style: 'Maternal warm gentle sincere closing-warm appreciative-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1374 — sho + asuka, language history (medium)
  {
    id: 'conv_01374',
    context: 'Asuka teaches Sho about old Japanese.',
    purpose: 'teacher-child old-language exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['日本語', '一緒', '勉強', '頑張る', '楽しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、昔の日本語、本当、深い。', en: 'Sho-kun — old Japanese, truly, deep.', style: 'Teacher warm gentle sincere-warm philosophical-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '本当、面白い、本当、楽しい。', en: 'Truly — interesting, truly, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、本当、勉強しよう。', en: 'Together — truly, study.', style: 'Teacher warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '頑張る、本当、絶対。', en: 'Try hard — truly, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '優しい、生徒、本当、立派。', en: 'Kind — student, truly, splendid.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sho_child', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Tiny six-year-old soft small sincere grateful-deep tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1375 — mei + ren, ren visit (medium)
  {
    id: 'conv_01375',
    context: 'Ren visits Mei to play with her children.',
    purpose: 'cousin-mother visit exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '楽しい', '感謝', '子ども'],
    cast: ['ren_uni', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'メイ、本当、子供たち、可愛い、ね。', en: 'Mei — truly, children, cute.', style: 'University student warm soft sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: 'うん、本当、嬉しい、本当に。', en: 'Yes — truly, happy, truly.', style: 'Romantic warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '家族、本当、繋がってる、感じ。', en: 'Family — truly, connected, feel.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '一緒に、本当、過ごせる、宝。', en: 'Together — truly, can spend, treasure.', style: 'Romantic warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: 'こちらこそ、本当、ね。', en: 'Same — truly.', style: 'Romantic warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '楽しい、本当、毎日。', en: 'Fun — truly, every day.', style: 'University student warm soft sincere closing-warm tender-philosophical warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1376 — yuki + naoko, evening tea (short)
  {
    id: 'conv_01376',
    context: 'Yuki and Naoko share evening tea quietly.',
    purpose: 'two-women evening-tea exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '友達', '感謝', '大切'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、本当、お茶、いただきます。', en: 'Naoko-san — truly, tea, accept.', style: 'Office woman bright soft sincere grateful-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'うん、本当、嬉しい、ね。', en: 'Yes — truly, happy.', style: 'Aunt warm soft sincere-warm tender-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '一緒に、本当、楽しい、ね。', en: 'Together — truly, fun.', style: 'Office woman bright soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '大切な、友達、本当に。', en: 'Precious — friend, truly.', style: 'Aunt warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '感謝、本当、ね。', en: 'Grateful — truly.', style: 'Office woman bright soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1377 — hina + sachiko, talk dolls (medium)
  {
    id: 'conv_01377',
    context: 'Sachiko shows Hina old dolls.',
    purpose: 'grandma-child old-dolls exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '昔', '楽しい', '大切'],
    cast: ['sachiko_grandma', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'ひなちゃん、昔の人形、本当、綺麗。', en: 'Hina-chan — old dolls, truly, beautiful.', style: 'Grandma warm gentle sincere-warm reminiscing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'わあ、本当、可愛い。', en: 'Wow — truly, cute.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: '優しい、おばあちゃんから、もらった。', en: 'Kind — from grandma, received.', style: 'Grandma warm gentle sincere-warm nostalgic-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '大切な、宝物、ね。', en: 'Precious — treasure.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sachiko_grandma', jp: '一緒に、本当、楽しい、ね。', en: 'Together — truly, fun.', style: 'Grandma warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'High child bright sincere grateful-deep tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sachiko_grandma', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Grandma warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1378 — kenji + ren, retirement plan (medium)
  {
    id: 'conv_01378',
    context: 'Kenji discusses his retirement plan with Ren.',
    purpose: 'senior-alum retirement-plan exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '人生', '感謝', '相談', '頑張る'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、退職、本当、考えてる。', en: 'Ren-kun — retirement, truly, considering.', style: 'Salaryman warm soft sincere-warm philosophical-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'え、本当、ですか？', en: 'Eh — truly?', style: 'University student warm soft sincere-warm surprised-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '人生、本当、新しい段階、ね。', en: 'Life — truly, new stage.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '相談、本当、いつでも。', en: 'Consult — truly, anytime.', style: 'University student warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'University student warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Salaryman warm soft sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1379 — daichi + tatsuya, town festival (medium)
  {
    id: 'conv_01379',
    context: 'Daichi and Tatsuya prepare for the town festival.',
    purpose: 'cousin festival-prep exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['祭り', '町', '一緒', '頑張る', '楽しい'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、祭り、本当、もうすぐ。', en: 'Tatsuya — festival, truly, soon.', style: 'Kansai warm bright sincere anticipating-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、本当、皆、本当、楽しみ。', en: 'Yes — truly, all, truly, looking forward.', style: 'Country warm low sincere unhurried matching-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '町、本当、活気、戻ってる。', en: 'Town — truly, vitality, returning.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'Country warm low sincere unhurried collaborative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Kansai warm bright sincere grateful-deep tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '楽しい、本当、絶対。', en: 'Fun — truly, surely.', style: 'Country warm low sincere unhurried anticipating-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '本当、嬉しい、ね。', en: 'Truly — happy.', style: 'Kansai warm bright sincere closing-warm tender-deep grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1380 — sho + ren, reading (short)
  {
    id: 'conv_01380',
    context: 'Sho and Ren read a novel together.',
    purpose: 'cousin reading exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['本', '一緒', '楽しい', '優しい', '物語'],
    cast: ['ren_uni', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'しょう、本、本当、面白い、ね。', en: 'Sho — book, truly, interesting.', style: 'University student warm soft sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '物語、本当、楽しい。', en: 'Story — truly, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'ren_uni', jp: '一緒に、本当、楽しい、ね。', en: 'Together — truly, fun.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '優しい、お兄ちゃん、本当に。', en: 'Kind — brother, truly.', style: 'Tiny six-year-old soft small sincere grateful-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'ren_uni', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'University student warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1381 — saito + ryosuke, careful talk (medium)
  {
    id: 'conv_01381',
    context: 'Saito and Ryosuke have a careful talk.',
    purpose: 'doctor-patient careful-talk exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '相談', '大切', '頑張る'],
    cast: ['saito_doctor', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '亮介さん、健康、本当、保てる、ね。', en: 'Ryosuke-san — health, truly, can keep.', style: 'Doctor warm formal sincere-warm reassuring-opening tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'ryosuke_dad', jp: '本当、感謝、本当に。', en: 'Truly — grateful, truly.', style: 'Father warm gentle sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '大切な、生活、本当に。', en: 'Precious — life, truly.', style: 'Doctor warm formal sincere-warm philosophical-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '相談、本当、いつでも。', en: 'Consult — truly, anytime.', style: 'Father warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一緒に、本当、頑張りましょう。', en: 'Together — truly, try hard.', style: 'Doctor warm formal sincere-warm collaborative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Father warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Doctor warm formal sincere closing-warm matching-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1382 — yumiko + ryosuke, daily routine (short)
  {
    id: 'conv_01382',
    context: 'Yumiko and Ryosuke have a quiet morning.',
    purpose: 'married-couple quiet-morning exchange',
    ambient: 'tatami_room_morning',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '家族', '大切'],
    cast: ['yumiko_mom', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'お父さん、本当、今日もいい朝。', en: 'Father — truly, today too good morning.', style: 'Maternal warm gentle sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、本当、優しい、時間。', en: 'Yes — truly, kind, time.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '一緒に、本当、過ごせる、本当に。', en: 'Together — truly, can spend, truly.', style: 'Maternal warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '楽しい、毎日、本当に、ね。', en: 'Fun — every day, truly.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Maternal warm gentle sincere closing-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1383 — sho + asuka, math test (medium)
  {
    id: 'conv_01383',
    context: 'Asuka praises Sho\'s math test result.',
    purpose: 'teacher-child math-test exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '勉強', '本当', '楽しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、本当、本当に、頑張った。', en: 'Sho-kun — truly, truly, tried hard.', style: 'Teacher warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sho_child', jp: '勉強、本当、好き、本当に。', en: 'Study — truly, like, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、本当、嬉しい。', en: 'Together — truly, happy.', style: 'Teacher warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '頑張る、本当、絶対、絶対。', en: 'Try hard — truly, surely, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '優しい、子、本当、立派。', en: 'Kind — child, truly, splendid.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sho_child', jp: '楽しい、本当、毎日。', en: 'Fun — truly, every day.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1384 — sakura + ren, future plans (medium)
  {
    id: 'conv_01384',
    context: 'Sakura and Ren plan their next collaboration.',
    purpose: 'cousin collaboration-plan exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '夢', '感謝', '大切'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、本当、本、また、書きたい。', en: 'Ren-bro — truly, book, again, want to write.', style: 'Teen warm soft sincere announcing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、本当、楽しみ、ね。', en: 'Yes — truly, looking forward.', style: 'University student warm soft sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '夢、本当、ずっと、続く。', en: 'Dream — truly, long, continues.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'University student warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '大切な、繋がり、本当に。', en: 'Precious — connection, truly.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Teen warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1385 — hina + sho, end of day (short)
  {
    id: 'conv_01385',
    context: 'Hina and Sho share a quiet evening.',
    purpose: 'children evening exchange',
    ambient: 'bedroom_evening',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '友達', '大切', '感謝'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、本当、楽しい、今日。', en: 'Sho — truly, fun, today.', style: 'High child bright sincere reflective-opening tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: 'うん、本当、嬉しい、本当に。', en: 'Yes — truly, happy, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '友達、本当、大切、ね。', en: 'Friend — truly, precious.', style: 'High child bright sincere philosophical-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '感謝、本当、毎日。', en: 'Grateful — truly, every day.', style: 'Tiny six-year-old soft small sincere grateful-deep tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'おやすみ、本当に。', en: 'Good night — truly.', style: 'High child bright sincere closing-warm tender-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_069 wrote', CONVERSATIONS.length, 'files');

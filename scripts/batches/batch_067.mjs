import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_067)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1326 — hiroshi_boss + kenji, project analysis (medium)
  {
    id: 'conv_01326',
    context: 'Hiroshi reviews Kenji\'s project analysis report.',
    purpose: 'business project-analysis exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['分析', 'プロジェクト', '管理', '考える', '頑張る'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、プロジェクト、分析、本当、詳細。', en: 'Kenji — project, analysis, truly, detailed.', style: 'Boss firm formal direct authoritative-opening clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、管理、本当、しっかり、します。', en: 'Yes — management, truly, firmly, do.', style: 'Salaryman warm formal sincere-warm professional-warm committed, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '条件、本当、複雑、感じる。', en: 'Conditions — truly, complex, feel.', style: 'Boss firm formal direct philosophical-warm clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '社員、皆、本当、頑張ってる。', en: 'Employees — all, truly, trying hard.', style: 'Salaryman warm formal sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '皆様、本当、立派、ね。', en: 'Everyone — truly, splendid.', style: 'Boss firm formal direct appreciative-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '頑張ろう、本当、これからも。', en: 'Try hard — truly, from now.', style: 'Boss firm formal direct closing-warm tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1327 — sho + hina, sports day (short)
  {
    id: 'conv_01327',
    context: 'Sho and Hina prepare for the school sports day.',
    purpose: 'children sports-day exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['スポーツ', '一緒', '頑張る', '挑戦', '楽しい'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、スポーツの日、楽しみ、本当に。', en: 'Sho — sports day, looking forward, truly.', style: 'High child bright sincere anticipating-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、挑戦、本当、頑張る。', en: 'Yes — challenge, truly, try hard.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、走る、本当、嬉しい。', en: 'Together — run, truly, happy.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '応援、本当、皆。', en: 'Cheer — truly, all.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、本当に、絶対。', en: 'Fun — truly, surely.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1328 — asuka + sakura, design book (medium)
  {
    id: 'conv_01328',
    context: 'Asuka helps Sakura design her book cover.',
    purpose: 'teacher-author design exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['デザイン', '一緒', '本', '頑張る', '感謝'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、本のデザイン、本当、迷ってる、ね。', en: 'Sakura-san — book design, truly, lost.', style: 'Teacher warm gentle sincere-warm asking-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'はい、本当、悩んでます。', en: 'Yes — truly, troubled.', style: 'Teen warm soft sincere honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、本当、考えていこう。', en: 'Together — truly, think.', style: 'Teacher warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '頑張る、本当に、嬉しい。', en: 'Try hard — truly, happy.', style: 'Teen warm soft sincere committed-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '本、本当、立派、なる。', en: 'Book — truly, splendid, becomes.', style: 'Teacher warm gentle sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Teacher warm gentle sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1329 — yuki + aoi, hotel booking (medium)
  {
    id: 'conv_01329',
    context: 'Yuki and Aoi book a hotel for a getaway.',
    purpose: 'two-women hotel-booking exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['ホテル', '予約', '一緒', '楽しい', '相談'],
    cast: ['yuki_office', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、ホテル、本当、予約、しよう。', en: 'Aoi-chan — hotel, truly, book.', style: 'Office woman bright soft sincere proposing-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'うん、本当、楽しみ、ね。', en: 'Yes — truly, looking forward.', style: 'Barista warm soft sincere-warm enthusiastic-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '条件、本当、いい、所、見つけた。', en: 'Conditions — truly, good, place, found.', style: 'Office woman bright soft sincere reporting-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '相談、本当、ありがとう。', en: 'Consult — truly, thanks.', style: 'Barista warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '一緒に、本当、楽しい、なる。', en: 'Together — truly, fun, becomes.', style: 'Office woman bright soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '感謝、本当、ね。', en: 'Grateful — truly.', style: 'Barista warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Office woman bright soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1330 — kenji + ren, training program (long)
  {
    id: 'conv_01330',
    context: 'Kenji and Ren design a new training program.',
    purpose: 'senior-alum training-program exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['研修', '一緒', '指導', '頑張る', '感謝'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 5,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、研修、本当、新しい計画、ある。', en: 'Ren-kun — training, truly, new plan, exists.', style: 'Salaryman warm formal sincere-warm announcing-opening engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当、楽しみ、ですね。', en: 'Truly — looking forward.', style: 'University student warm soft sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '指導、本当、お前に、お願い、したい。', en: 'Guidance — truly, you, want to ask.', style: 'Salaryman warm formal sincere-warm asking-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '光栄、本当に。', en: 'Honored — truly.', style: 'University student warm soft sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'Salaryman warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '社員、本当、皆、立派。', en: 'Employees — truly, all, splendid.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'お前の、皆様への、指導、本当、頼れる。', en: 'Your — to everyone, guidance, truly, reliable.', style: 'Salaryman warm soft sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: '頑張る、絶対、本当に。', en: 'Try hard — surely, truly.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'Salaryman warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'University student warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '応援、本当、ずっと、する。', en: 'Cheer — truly, long, do.', style: 'Salaryman warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1331 — hina + sho, map (short)
  {
    id: 'conv_01331',
    context: 'Sho and Hina look at a map together.',
    purpose: 'children map exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['地図', '一緒', '楽しい', '見る', '選ぶ'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、地図、本当、面白い。', en: 'Hina — map, truly, interesting.', style: 'Tiny six-year-old soft small sincere observing-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'うん、本当、場所、たくさん。', en: 'Yes — truly, places, many.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、行く所、選ぶ。', en: 'Together — going place, choose.', style: 'Tiny six-year-old soft small sincere proposing-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、本当に、ね。', en: 'Fun — truly.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '見るの、楽しい、本当。', en: 'Looking — fun, truly.', style: 'Tiny six-year-old soft small sincere closing-warm enthusiastic-bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 1332 — saito + kenji, diagnosis (medium)
  {
    id: 'conv_01332',
    context: 'Saito gives Kenji a routine diagnosis.',
    purpose: 'doctor-patient diagnosis exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['診断', '健康', '一緒', '相談', '大切'],
    cast: ['saito_doctor', 'kenji_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '健次さん、診断、本当、結果、いい。', en: 'Kenji-san — diagnosis, truly, result, good.', style: 'Doctor warm formal sincere-warm reassuring-opening professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'kenji_office', jp: '本当、安心、しました。', en: 'Truly — relieved.', style: 'Salaryman warm formal sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '健康、本当、保つ、大切。', en: 'Health — truly, keep, precious.', style: 'Doctor warm formal sincere-warm advising-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '相談、本当、ありがとう。', en: 'Consult — truly, thanks.', style: 'Salaryman warm formal sincere-warm grateful-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一緒に、本当、長く、ね。', en: 'Together — truly, long.', style: 'Doctor warm formal sincere-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、ずっと。', en: 'Grateful — truly, long.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: '大切な、患者、本当に。', en: 'Precious — patient, truly.', style: 'Doctor warm formal sincere closing-warm tender-deep philosophical, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1333 — daichi + sho, computer (short)
  {
    id: 'conv_01333',
    context: 'Daichi shows Sho a computer.',
    purpose: 'uncle-child computer-intro exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['パソコン', '一緒', '楽しい', '頑張る', '見る'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、パソコン、本当、面白いで。', en: 'Sho — computer, truly, interesting.', style: 'Kansai warm bright sincere observing-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '画面、本当、綺麗、ね。', en: 'Screen — truly, beautiful.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '一緒に、本当、楽しい、なる。', en: 'Together — truly, fun, becomes.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張って、本当、勉強する。', en: 'Try hard — truly, study.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '感謝、本当、本当に。', en: 'Grateful — truly, truly.', style: 'Kansai warm bright sincere closing-warm grateful-deep tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1334 — ryosuke + kenji, business challenge (medium)
  {
    id: 'conv_01334',
    context: 'Ryosuke advises Kenji on a business challenge.',
    purpose: 'mentor-mentee business-challenge exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['挑戦', '一緒', '相談', '頑張る', '大切'],
    cast: ['ryosuke_dad', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '健次さん、挑戦、本当、必要。', en: 'Kenji-san — challenge, truly, needed.', style: 'Father warm gentle sincere-warm philosophical-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: 'はい、本当、難しい、本当に。', en: 'Yes — truly, difficult, truly.', style: 'Salaryman warm formal sincere-warm honest-warm vulnerable, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '相談、本当、いつでも、ね。', en: 'Consult — truly, anytime.', style: 'Father warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'Father warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'Salaryman warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Father warm gentle sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1335 — sho + asuka, math class (medium)
  {
    id: 'conv_01335',
    context: 'Asuka helps Sho with math class.',
    purpose: 'teacher-child math-help exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['クラス', '一緒', '頑張る', '勉強', '楽しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、クラス、本当、楽しい、ね。', en: 'Sho-kun — class, truly, fun.', style: 'Teacher warm gentle sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'うん、勉強、本当、好き。', en: 'Yes — study, truly, like.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、本当、頑張ろう、ね。', en: 'Together — truly, try hard.', style: 'Teacher warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '頑張る、本当、絶対。', en: 'Try hard — truly, surely.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '優しい、子、本当、立派。', en: 'Kind — child, truly, splendid.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sho_child', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Tiny six-year-old soft small sincere grateful-deep tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1336 — sakura + ren, novel selection (medium)
  {
    id: 'conv_01336',
    context: 'Sakura helps Ren select novels for his school library.',
    purpose: 'cousin novel-selection exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['選ぶ', '一緒', '本', '頑張る', '生徒'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'さくら、本、本当、選ぶ、難しい。', en: 'Sakura — book, truly, choose, difficult.', style: 'University student warm soft sincere-warm asking-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、本当、選んでいこう。', en: 'Together — truly, choose.', style: 'Teen warm soft sincere collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '生徒、本当、喜ぶ、絶対。', en: 'Students — truly, happy, surely.', style: 'University student warm soft sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '頑張ろう、本当、ね。', en: 'Try hard — truly.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本、本当、力に、なる。', en: 'Book — truly, becomes strength.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'University student warm soft sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1337 — hina + sho, treasure search (short)
  {
    id: 'conv_01337',
    context: 'Sho and Hina play a treasure hunt game.',
    purpose: 'children treasure-hunt exchange',
    ambient: 'garden_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '頑張る', '見つける', '宝物'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、宝物、本当、探そう。', en: 'Sho — treasure, truly, search.', style: 'High child bright sincere proposing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、本当、頑張る。', en: 'Yes — truly, try hard.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、本当、楽しい。', en: 'Together — truly, fun.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '見つけた！本当。', en: 'Found! Truly.', style: 'Tiny six-year-old soft small sincere triumphant-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'すごい、本当に！', en: 'Amazing — truly!', style: 'High child bright sincere closing-warm appreciative-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1338 — daichi + tatsuya, country project (medium)
  {
    id: 'conv_01338',
    context: 'Daichi and Tatsuya plan a country project.',
    purpose: 'cousin country-project exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['プロジェクト', '一緒', '頑張る', '町', '相談'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、新しいプロジェクト、本当、考えてる。', en: 'Tatsuya — new project, truly, considering.', style: 'Kansai warm bright sincere proposing-opening engaged, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、本当、相談しよか。', en: 'Yes — truly, consult.', style: 'Country warm low sincere unhurried receptive-warm engaged, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '町、本当、活気、戻したい。', en: 'Town — truly, vitality, want to return.', style: 'Kansai warm bright sincere committed-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '一緒に、本当、頑張ろう。', en: 'Together — truly, try hard.', style: 'Country warm low sincere unhurried collaborative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '皆、本当、応援、する、絶対。', en: 'All — truly, cheer, surely.', style: 'Kansai warm bright sincere committed-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '感謝、本当、本当に。', en: 'Grateful — truly, truly.', style: 'Country warm low sincere unhurried grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'これからも、頑張ろうな、本当に。', en: 'From now — try hard, truly.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1339 — saito + mei, child diagnosis (medium)
  {
    id: 'conv_01339',
    context: 'Saito gives Mei a positive diagnosis for her child.',
    purpose: 'doctor-mother child-diagnosis exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['診断', '健康', '子ども', '相談', '一緒'],
    cast: ['saito_doctor', 'mei_romantic'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'メイさん、診断、本当、問題ない。', en: 'Mei-san — diagnosis, truly, no problem.', style: 'Doctor warm formal sincere-warm reassuring-opening professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'mei_romantic', jp: 'ああ、本当、安心、しました。', en: 'Ah — truly, relieved.', style: 'Romantic warm soft sincere-warm relieved-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '子ども、本当、健康、ね。', en: 'Child — truly, healthy.', style: 'Doctor warm formal sincere-warm appreciative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Romantic warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: '相談、本当、いつでも、ね。', en: 'Consult — truly, anytime.', style: 'Doctor warm formal sincere-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '一緒に、本当、見守って。', en: 'Together — truly, watch over.', style: 'Romantic warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '大切な、お子さん、本当に。', en: 'Precious — child, truly.', style: 'Doctor warm formal sincere closing-warm tender-deep philosophical, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1340 — hina + sho, science class (medium)
  {
    id: 'conv_01340',
    context: 'Sho explains a science class concept to Hina.',
    purpose: 'children science-explanation exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '勉強', '楽しい', '考える'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、今日、本当、面白い、勉強した。', en: 'Hina — today, truly, interesting, studied.', style: 'Tiny six-year-old soft small sincere announcing-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '本当、何、勉強したの？', en: 'Truly — what, studied?', style: 'High child bright sincere asking-warm engaged, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '空、本当、青い、理由、ある。', en: 'Sky — truly, blue, reason, exists.', style: 'Tiny six-year-old soft small sincere explaining-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'すごい、本当、知らなかった。', en: 'Amazing — truly, didn\'t know.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、本当、考える、楽しい。', en: 'Together — truly, think, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '頑張る、勉強、絶対。', en: 'Try hard — study, surely.', style: 'High child bright sincere committed-warm bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、本当、毎日。', en: 'Fun — truly, every day.', style: 'Tiny six-year-old soft small sincere closing-warm tender-bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 1341 — yuki + naoko, hotel review (medium)
  {
    id: 'conv_01341',
    context: 'Yuki and Naoko reflect on the hotel they stayed at.',
    purpose: 'two-women hotel-review exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['ホテル', '一緒', '楽しい', '本当', '感謝'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、ホテル、本当、よかった、ね。', en: 'Naoko-san — hotel, truly, good.', style: 'Office woman bright soft sincere reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '本当、本当に、楽しかった。', en: 'Truly — truly, was fun.', style: 'Aunt warm soft sincere-warm matching-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '一緒に、本当、嬉しい、本当。', en: 'Together — truly, happy, truly.', style: 'Office woman bright soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '感謝、本当、本当に。', en: 'Grateful — truly, truly.', style: 'Aunt warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '本当、また、行きたい、絶対。', en: 'Truly — again, want to go, surely.', style: 'Office woman bright soft sincere wishing-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Aunt warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Office woman bright soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1342 — kenji + ren, project completion (medium)
  {
    id: 'conv_01342',
    context: 'Kenji and Ren celebrate finishing a major project.',
    purpose: 'senior-alum project-completion exchange',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['プロジェクト', '一緒', '頑張る', '感謝', '大切'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、プロジェクト、本当、終わった、ね。', en: 'Ren-kun — project, truly, finished.', style: 'Salaryman warm soft sincere-warm reflective-opening warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当、お疲れ様、本当に。', en: 'Truly — good work, truly.', style: 'University student warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、本当、頑張ってきた。', en: 'Together — truly, tried hard.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '感謝、本当、本当に。', en: 'Grateful — truly, truly.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'Salaryman warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'University student warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Salaryman warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1343 — tatsuya + ryosuke, sports day (medium)
  {
    id: 'conv_01343',
    context: 'Tatsuya and Ryosuke watch a community sports day.',
    purpose: 'cousin sports-day exchange',
    ambient: 'plaza_morning',
    sound_effects: [],
    target_vocab: ['スポーツ', '町', '一緒', '楽しい', '応援'],
    cast: ['tatsuya_country', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '亮介、スポーツ、本当、皆、頑張ってる。', en: 'Ryosuke — sports, truly, all, trying hard.', style: 'Country warm low sincere unhurried appreciative-opening warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: 'うん、本当、町、活気、ある。', en: 'Yes — truly, town, vitality, exists.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '応援、本当、皆、楽しい。', en: 'Cheer — truly, all, fun.', style: 'Country warm low sincere unhurried appreciative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、本当、いい時間。', en: 'Together — truly, good time.', style: 'Father warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '感謝、本当、本当に。', en: 'Grateful — truly, truly.', style: 'Country warm low sincere unhurried grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '楽しい、毎年、本当に、ね。', en: 'Fun — every year, truly.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Country warm low sincere closing-warm tender-promise warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1344 — sho + hina, kindergarten memory (short)
  {
    id: 'conv_01344',
    context: 'Sho and Hina recall their kindergarten days.',
    purpose: 'children kindergarten-memory exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '頑張る', '友達', '思い出'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、幼稚園、本当、楽しかった、ね。', en: 'Hina — kindergarten, truly, was fun.', style: 'Tiny six-year-old soft small sincere reminiscing-opening tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'うん、本当、思い出、いっぱい。', en: 'Yes — truly, memories, many.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '友達、本当、たくさん、出来た。', en: 'Friends — truly, many, made.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、本当、頑張ってきた。', en: 'Together — truly, tried hard.', style: 'High child bright sincere philosophical-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' },
      { speaker: 'sho_child', jp: '本当、嬉しい、本当に。', en: 'Truly — happy, truly.', style: 'Tiny six-year-old soft small sincere closing-warm tender-deep grateful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' }
    ]
  },
  // 1345 — mei + aoi, two-mother bond (medium)
  {
    id: 'conv_01345',
    context: 'Mei and Aoi reflect on raising children together.',
    purpose: 'two-mother shared-journey reflection',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '感謝', '楽しい', '大切'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、本当、長く、繋がってる、ね。', en: 'Aoi-chan — truly, long, connected.', style: 'Romantic warm soft sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'うん、本当、本当に、ね。', en: 'Yes — truly, truly.', style: 'Barista warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '家族、本当、繋がってる、感じ。', en: 'Family — truly, connected, feel.', style: 'Romantic warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '感謝、本当、いつも、ね。', en: 'Grateful — truly, always.', style: 'Barista warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: '楽しい、毎日、本当に。', en: 'Fun — every day, truly.', style: 'Romantic warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '大切な、友達、本当に。', en: 'Precious — friend, truly.', style: 'Barista warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Romantic warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_067 wrote', CONVERSATIONS.length, 'files');

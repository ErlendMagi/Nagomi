import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_057)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1126 — sakura + asuka, letter (medium)
  {
    id: 'conv_01126',
    context: 'Sakura sends Asuka a letter with her new book.',
    purpose: 'student-teacher letter-exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['手紙', '一緒', '感謝', '大切', '本'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、手紙、ありがとう。', en: 'Sakura-san — letter, thanks.', style: 'Teacher warm gentle sincere-warm grateful-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '先生、本も、一緒に、送りました。', en: 'Teacher — book too, together, sent.', style: 'Teen warm soft sincere humble-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '大切に、読みます、本当に。', en: 'Preciously — read, truly.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、ずっと、本当に。', en: 'Grateful — long, truly.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'お前の言葉、繋がってる、いつも。', en: 'Your words — connected, always.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、ここまで、来た、宝。', en: 'Together — until here, came, treasure.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: '返事、また、書くね。', en: 'Reply — again, write.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1127 — sho + hina, letter writing (short)
  {
    id: 'conv_01127',
    context: 'Sho and Hina write a letter to their grandparents.',
    purpose: 'children letter-writing exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['手紙', '一緒', '優しい', '楽しい', '送る'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、おばあちゃんに、手紙、書こう。', en: 'Hina — to grandma, letter, write.', style: 'Tiny six-year-old soft small sincere proposing-opening warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'うん、優しい、内容、書く。', en: 'Yes — kind, content, write.', style: 'High child bright sincere committed-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '絵、描いて、入れる。', en: 'Picture — draw, put.', style: 'Tiny six-year-old soft small sincere proposing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、書くの、楽しい。', en: 'Together — writing, fun.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'すぐに、送ろう。', en: 'Right away — send.', style: 'Tiny six-year-old soft small sincere closing-warm committed-bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 1128 — kenji + ren, business meeting (medium)
  {
    id: 'conv_01128',
    context: 'Kenji and Ren have a business meeting about Ren\'s students.',
    purpose: 'senior-alum business-meeting exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['仕事', '一緒', '指導', '頑張る', '相談'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、相談、いいですか？', en: 'Ren-kun — consult, okay?', style: 'Salaryman warm formal sincere-warm asking-opening respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、何でも、伺います。', en: 'Yes — anything, listen.', style: 'University student warm soft sincere-warm receptive-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'kenji_office', jp: 'お前の生徒、今年、五人、来てほしい。', en: 'Your students — this year, five, want to come.', style: 'Salaryman warm formal sincere-warm requesting-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当ですか、嬉しい。', en: 'Truly? Happy.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'お前の指導、信頼してる。', en: 'Your guidance — trust.', style: 'Salaryman warm formal sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝、一緒に、頑張ります。', en: 'Grateful — together, try hard.', style: 'University student warm soft sincere-warm committed-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '頼んだ、本当に。', en: 'Counting on — truly.', style: 'Salaryman warm soft sincere closing-warm trusting-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1129 — daichi + tatsuya, fishing record (medium)
  {
    id: 'conv_01129',
    context: 'Daichi and Tatsuya record the best catch of the year.',
    purpose: 'cousin fishing-record exchange',
    ambient: 'boat_afternoon',
    sound_effects: [],
    target_vocab: ['記録', '一緒', '頑張る', '釣り', '楽しい'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、今年の、釣り、最高、記録や。', en: 'Tatsuya — this year\'s, fishing, best, record.', style: 'Kansai warm bright sincere enthusiastic-opening proud, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'ほんま、すごい量や。', en: 'Truly — amazing quantity.', style: 'Country warm low sincere unhurried appreciative-warm matching, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '皆で、頑張った結果、ほんま。', en: 'All — tried hard result, truly.', style: 'Kansai warm bright sincere philosophical-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '海、優しい、今年。', en: 'Sea — kind, this year.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '記録、皆で、祝おう。', en: 'Record — all, celebrate.', style: 'Kansai warm bright sincere proposing-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '一緒に、楽しい、夕食、しよう。', en: 'Together — fun, dinner, do.', style: 'Country warm low sincere unhurried collaborative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: 'ええな、本当に。', en: 'Nice — truly.', style: 'Kansai warm bright sincere closing-warm enthusiastic-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1130 — hiroshi_boss + ren, encouragement (long)
  {
    id: 'conv_01130',
    context: 'Hiroshi visits Ren\'s school after retirement.',
    purpose: 'mentor-teacher visit exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['指導', '一緒', '感謝', '生徒', '大切'],
    cast: ['hiroshi_boss', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'レン君、お久しぶり、元気か？', en: 'Ren-kun — long time, energetic?', style: 'Boss firm formal direct warm-opening welcoming, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '部長、本当、嬉しい。', en: 'Boss — truly, happy.', style: 'University student warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '生徒、見たい、ずっと、思ってた。', en: 'Students — want to see, long, thought.', style: 'Boss firm formal direct tender-warm honest, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '皆、優しい子、ばかり。', en: 'All — kind children, only.', style: 'University student warm soft sincere-warm proud-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'お前の指導、本当、素晴らしい。', en: 'Your guidance — truly, wonderful.', style: 'Boss firm formal direct affirming-warm tender-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '部長の指導、繋いで、いる。', en: 'Boss\'s guidance — connecting, is.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '生徒、未来、繋ぐ、お前の役目。', en: 'Students — future, connect, your role.', style: 'Boss firm formal direct philosophical-warm tender-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '感謝、本当に、いつも。', en: 'Grateful — truly, always.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '一緒に、ここまで、来た、宝。', en: 'Together — until here, came, treasure.', style: 'Boss firm formal direct tender-deep philosophical, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '大切な、繋がり、本当に。', en: 'Precious — connection, truly.', style: 'University student warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'これからも、頑張れ、ね。', en: 'From now — try hard.', style: 'Boss firm formal direct tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'はい、絶対に。', en: 'Yes — surely.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '会いに、また、来るぞ。', en: 'Meet — again, come.', style: 'Boss firm formal direct closing-warm tender-promise deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1131 — hina + sho, lending toy (short)
  {
    id: 'conv_01131',
    context: 'Sho lends Hina a favorite toy.',
    purpose: 'children lending exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '貸す', '友達'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、それ、貸してくれる？', en: 'Sho — that, will lend?', style: 'High child bright sincere asking-opening hopeful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-warm' },
      { speaker: 'sho_child', jp: 'うん、いいよ。', en: 'Yes — okay.', style: 'Tiny six-year-old soft small sincere agreeing-warm generous, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'ありがとう、優しい。', en: 'Thanks — kind.', style: 'High child bright sincere grateful-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-warm' },
      { speaker: 'sho_child', jp: '友達、皆で、貸し合おう。', en: 'Friend — all, lend mutually.', style: 'Tiny six-year-old soft small sincere proposing-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒に、楽しい、ね。', en: 'Together — fun.', style: 'High child bright sincere closing-warm tender-bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1132 — saito + ryosuke, retirement health (medium)
  {
    id: 'conv_01132',
    context: 'Saito visits Ryosuke at his country home.',
    purpose: 'doctor-retiree home-visit exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '相談', '大切', '生活'],
    cast: ['saito_doctor', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '亮介さん、田舎の生活、合ってますか？', en: 'Ryosuke-san — country life, fitting?', style: 'Doctor warm formal sincere-warm caring-opening engaged, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'おかげさまで、健康、最高。', en: 'Thanks — health, best.', style: 'Father warm gentle sincere-warm grateful-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'saito_doctor', jp: '生活習慣、続けて、本当に、大切。', en: 'Life habits — continue, truly, precious.', style: 'Doctor warm formal sincere-warm advising-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '優子と、毎日、散歩。', en: 'Yumiko — every day, walk.', style: 'Father warm gentle sincere-warm reporting-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '素晴らしい、習慣。', en: 'Wonderful — habit.', style: 'Doctor warm formal sincere-warm appreciative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '相談、いつでも、感謝。', en: 'Consult — anytime, grateful.', style: 'Father warm gentle sincere-warm grateful-deep respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: '一緒に、長く、お元気で。', en: 'Together — long, healthy.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1133 — yuki + aoi, two-women café (medium)
  {
    id: 'conv_01133',
    context: 'Yuki and Aoi reflect after Aoi\'s 10-year café anniversary.',
    purpose: 'two-women business-anniversary reflection',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '感謝', '大切', '友達'],
    cast: ['yuki_office', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、十周年、おめでとう。', en: 'Aoi-chan — tenth anniversary, congratulations.', style: 'Office woman bright soft sincere warm-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'ありがとう、本当に、ずっと、応援してくれた。', en: 'Thanks — truly, long, supported.', style: 'Barista warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '頑張ってきた、お前、誇り。', en: 'Tried hard — you, proud.', style: 'Office woman bright soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '友達、本当、大切。', en: 'Friend — truly, precious.', style: 'Barista warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '一緒に、ここまで、来た、嬉しい。', en: 'Together — until here, came, happy.', style: 'Office woman bright soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'これからも、ずっと、ね。', en: 'From now — long.', style: 'Barista warm soft sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'Office woman bright soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1134 — mei + daichi, family expansion (medium)
  {
    id: 'conv_01134',
    context: 'Mei tells Daichi they\'re considering a third child.',
    purpose: 'married-couple family-planning exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '相談', '大切', '幸せ'],
    cast: ['mei_romantic', 'daichi_kansai'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、三人目、考えてる？', en: 'Daichi — third, considering?', style: 'Romantic warm soft sincere-warm asking-opening vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'うーん、ゆっくり、相談、しよう。', en: 'Hmm — slowly, consult, do.', style: 'Kansai warm bright sincere thoughtful-warm collaborative, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '今、家族、本当、幸せ。', en: 'Now — family, truly, happy.', style: 'Romantic warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'ほんま、毎日、楽しい。', en: 'Truly — every day, fun.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '大切な、決断、ね。', en: 'Precious — decision.', style: 'Romantic warm soft sincere-warm philosophical-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '一緒に、考えていこう。', en: 'Together — think.', style: 'Kansai warm bright sincere collaborative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'うん、ありがとう。', en: 'Yes — thanks.', style: 'Romantic warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1135 — sachiko + hina, life lessons (short)
  {
    id: 'conv_01135',
    context: 'Sachiko shares life advice with Hina.',
    purpose: 'grandma-child life-advice exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['人生', '一緒', '優しい', '大切', '頑張る'],
    cast: ['sachiko_grandma', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'ひなちゃん、人生、優しく、ね。', en: 'Hina-chan — life, gently.', style: 'Grandma warm gentle sincere-warm philosophical-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'hina_child', jp: 'うん、頑張る。', en: 'Yes — try hard.', style: 'High child bright sincere committed-warm bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: '友達、家族、大切に。', en: 'Friends — family, preciously.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'hina_child', jp: '一緒に、過ごす、嬉しい。', en: 'Together — spending, happy.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: 'ずっと、ね、ひなちゃん。', en: 'Long — Hina-chan.', style: 'Grandma warm gentle sincere closing-warm tender-promise loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1136 — kenji + ryosuke, retirement visit (medium)
  {
    id: 'conv_01136',
    context: 'Kenji visits Ryosuke in the country.',
    purpose: 'successor-retiree visit exchange',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '大切', '相談'],
    cast: ['kenji_office', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '亮介さん、田舎、素敵、いつ来ても。', en: 'Ryosuke-san — country, lovely, anytime come.', style: 'Salaryman warm soft sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '健次さん、来てくれて、嬉しい。', en: 'Kenji-san — came, happy.', style: 'Father warm gentle sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '人生、ゆっくり、過ごせて、本当に、よかった。', en: 'Life — slowly, can spend, truly, good.', style: 'Salaryman warm soft sincere-warm philosophical-warm appreciative, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '感謝、本当に、いつも。', en: 'Grateful — truly, always.', style: 'Father warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '相談、いつでも、来ます。', en: 'Consult — anytime, come.', style: 'Salaryman warm soft sincere-warm warm-promise committed, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、過ごす時間、大切。', en: 'Together — spending time, precious.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: 'これからも、よろしく。', en: 'From now — please.', style: 'Salaryman warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1137 — sho + asuka, study reading (medium)
  {
    id: 'conv_01137',
    context: 'Sho reads a chapter with Asuka.',
    purpose: 'teacher-child reading exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['本', '一緒', '優しい', '頑張る', '勉強'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、今日の本、一緒に、読もう。', en: 'Sho-kun — today\'s book, together, read.', style: 'Teacher warm gentle sincere-warm inviting-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'はい、勉強、頑張る。', en: 'Yes — study, try hard.', style: 'Tiny six-year-old soft small sincere committed-warm respectful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: 'この物語、優しい話、ね。', en: 'This story — kind tale.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '面白い、続き、知りたい。', en: 'Interesting — continuation, want to know.', style: 'Tiny six-year-old soft small sincere engaged-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: 'ゆっくり、読もう、一緒に。', en: 'Slowly — read, together.', style: 'Teacher warm gentle sincere-warm patient-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '楽しい、勉強、本当。', en: 'Fun — study, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、続けようね。', en: 'Together — continue.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1138 — naoko + sachiko, life service (medium)
  {
    id: 'conv_01138',
    context: 'Naoko thanks Sachiko for years of guidance.',
    purpose: 'aunt-grandma gratitude exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['感謝', '一緒', '人生', '大切', '優しい'],
    cast: ['naoko_aunt', 'sachiko_grandma'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'おばさん、本当に、感謝、ずっと。', en: 'Auntie — truly, grateful, long.', style: 'Aunt warm soft sincere-warm grateful-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Grandma warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '一緒に、年取れて、嬉しい。', en: 'Together — can age, happy.', style: 'Aunt warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: '優しい、姪、本当に、誇り。', en: 'Kind — niece, truly, proud.', style: 'Grandma warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '人生、大切な、家族。', en: 'Life — precious, family.', style: 'Aunt warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: 'ずっと、見守る、よ。', en: 'Long — watch over.', style: 'Grandma warm gentle sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'Aunt warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1139 — hina + sho, daily routine (short)
  {
    id: 'conv_01139',
    context: 'Hina and Sho share a quiet evening together.',
    purpose: 'children evening-routine exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '優しい', '家族', '大切'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、今日も、楽しかった。', en: 'Sho — today too, was fun.', style: 'High child bright sincere reflective-opening tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、一緒、好き。', en: 'Yes — together, like.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '家族、皆、優しい。', en: 'Family — all, kind.', style: 'High child bright sincere philosophical-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '大切な、毎日、ね。', en: 'Precious — every day.', style: 'Tiny six-year-old soft small sincere philosophical-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'おやすみ、しょう。', en: 'Good night — Sho.', style: 'High child bright sincere closing-warm tender-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-tender' }
    ]
  },
  // 1140 — sakura + yumiko, mother visit (medium)
  {
    id: 'conv_01140',
    context: 'Sakura visits Yumiko after her latest book release.',
    purpose: 'mother-daughter visit exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '夢', '大切', '感謝'],
    cast: ['yumiko_mom', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'さくらちゃん、お疲れ様、本当に。', en: 'Sakura-chan — good work, truly.', style: 'Maternal warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'お母さん、いつも、応援、感謝。', en: 'Mom — always, supporting, grateful.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '家族、皆、誇り、思ってる。', en: 'Family — all, proud, thinking.', style: 'Maternal warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '夢、ずっと、追って、来た。', en: 'Dream — long, chased, came.', style: 'Teen warm soft sincere reflective-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '大切な、子。', en: 'Precious — child.', style: 'Maternal warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、ここまで、来た、本当に。', en: 'Together — until here, came, truly.', style: 'Teen warm soft sincere tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'これからも、応援、ずっと。', en: 'From now — cheer, long.', style: 'Maternal warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1141 — daichi + sho, sports career (medium)
  {
    id: 'conv_01141',
    context: 'Daichi tells Sho about a chance to join a sports team.',
    purpose: 'uncle-child sports-team exchange',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '応援', 'スポーツ', '楽しい'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、スポーツのチーム、入りたい？', en: 'Sho — sports team, want to enter?', style: 'Kansai warm bright sincere asking-opening engaged, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'え、本当に、入れる？', en: 'Eh — truly, can enter?', style: 'Tiny six-year-old soft small sincere surprised-warm hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '若い、頑張ってる子、募集、してる。', en: 'Young — trying-hard child, recruiting.', style: 'Kansai warm bright sincere informative-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張る、絶対！', en: 'Try hard — surely!', style: 'Tiny six-year-old soft small sincere committed-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '応援、絶対、する。', en: 'Cheer — surely, do.', style: 'Kansai warm bright sincere warm-promise tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、楽しい、ね。', en: 'Together — fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '夢、追って、いこうな。', en: 'Dream — chase.', style: 'Kansai warm bright sincere closing-warm tender-promise deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 1142 — ryosuke + tatsuya, country growing (medium)
  {
    id: 'conv_01142',
    context: 'Ryosuke and Tatsuya celebrate the town reviving.',
    purpose: 'cousin town-revival exchange',
    ambient: 'plaza_evening',
    sound_effects: [],
    target_vocab: ['町', '一緒', '頑張る', '感謝', '若い'],
    cast: ['ryosuke_dad', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'たつや、町、本当、活気、戻った。', en: 'Tatsuya — town, truly, vitality, returned.', style: 'Father warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'うん、若い人、増えた。', en: 'Yes — young people, increased.', style: 'Country warm low sincere unhurried appreciative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: '皆で、頑張った結果、ね。', en: 'All — tried hard result.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Country warm low sincere unhurried grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '一緒に、続けていこう。', en: 'Together — continue.', style: 'Father warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '町、未来、明るい。', en: 'Town — future, bright.', style: 'Country warm low sincere unhurried hopeful-warm philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '本当に、嬉しい。', en: 'Truly — happy.', style: 'Father warm gentle sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1143 — hiroshi_boss + kenji, anniversary (long)
  {
    id: 'conv_01143',
    context: 'Hiroshi visits Kenji on the company\'s thirtieth anniversary.',
    purpose: 'mentor-successor anniversary exchange',
    ambient: 'office_evening',
    sound_effects: [],
    target_vocab: ['会社', '一緒', '感謝', '人生', '大切'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、会社、三十周年、おめでとう。', en: 'Kenji — company, thirty years, congratulations.', style: 'Boss firm formal direct warm-opening tender-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '部長、本当、感謝、いつも。', en: 'Boss — truly, grateful, always.', style: 'Salaryman warm formal sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'お前、立派に、続けてきた。', en: 'You — splendidly, continued.', style: 'Boss firm formal direct affirming-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '部長の指導、ずっと、繋がってる。', en: 'Boss\'s guidance — long, connected.', style: 'Salaryman warm formal sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '人生、お前と、過ごせて、本当、幸せ。', en: 'Life — with you, could spend, truly, happy.', style: 'Boss firm formal direct tender-deep loving, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Salaryman warm soft sincere-warm matching-warm tender-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '一緒に、ここまで、来た、宝。', en: 'Together — until here, came, treasure.', style: 'Boss firm formal direct philosophical-warm tender-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '大切な、人、ずっと。', en: 'Precious — person, long.', style: 'Salaryman warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'これからも、応援、する。', en: 'From now — cheer, do.', style: 'Boss firm formal direct tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '頑張ります、ずっと。', en: 'Try hard — long.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '会社、未来、明るい。', en: 'Company — future, bright.', style: 'Boss firm formal direct hopeful-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '部長の、夢、繋いで、いきます。', en: 'Boss\'s — dream, connect.', style: 'Salaryman warm soft sincere-warm tender-promise committed, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '頼んだぞ、本当に。', en: 'Counting on — truly.', style: 'Boss firm formal direct closing-warm tender-promise deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1144 — aoi + ren, family dinner (short)
  {
    id: 'conv_01144',
    context: 'Aoi and Ren share a quiet dinner together.',
    purpose: 'married-couple quiet dinner exchange',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['一緒', '美味しい', '楽しい', '家族', '大切'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'レン、今日の料理、美味しい？', en: 'Ren — today\'s cooking, delicious?', style: 'Barista warm soft sincere-warm asking-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、本当、美味しい。', en: 'Yes — truly, delicious.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '家族、皆、一緒、嬉しい。', en: 'Family — all, together, happy.', style: 'Barista warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '大切な、時間、本当に。', en: 'Precious — time, truly.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '楽しい、毎日、ね。', en: 'Fun — every day.', style: 'Barista warm soft sincere closing-warm tender-philosophical warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1145 — yuki + naoko, women friendship (medium)
  {
    id: 'conv_01145',
    context: 'Yuki and Naoko reflect on returning home after years.',
    purpose: 'two-women settling-back reflection',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '友達', '感謝', '人生', '大切'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、本当に、戻れて、よかった。', en: 'Naoko-san — truly, returning, good.', style: 'Office woman bright soft sincere reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: 'うん、友達、皆、近くで、嬉しい。', en: 'Yes — friends, all, close, happy.', style: 'Aunt warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '感謝、本当に、いつも。', en: 'Grateful — truly, always.', style: 'Office woman bright soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '人生、繋がりが、本当に、大切。', en: 'Life — connections, truly, precious.', style: 'Aunt warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '一緒に、ずっと、過ごしたい。', en: 'Together — long, want to spend.', style: 'Office woman bright soft sincere tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Aunt warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '大切な、友達、ね。', en: 'Precious — friend.', style: 'Office woman bright soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_057 wrote', CONVERSATIONS.length, 'files');

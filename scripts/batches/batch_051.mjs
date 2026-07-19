import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_051)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1006 — kenji + ren, office work (medium)
  {
    id: 'conv_01006',
    context: 'Kenji shows Ren how the office works on his first day.',
    purpose: 'senior-junior office-tour exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['職場', '名刺', '一緒', '頑張る', '相談'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、職場、ようこそ。', en: 'Ren-kun — workplace, welcome.', style: 'Salaryman warm formal sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'よろしくお願いします。', en: 'Please.', style: 'University student warm formal sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'kenji_office', jp: '名刺、用意した、これ、使って。', en: 'Name card — prepared, this, use.', style: 'Salaryman warm formal sincere-warm offering-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'ありがとうございます。', en: 'Thanks.', style: 'University student warm formal sincere-warm grateful-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '相談、何でも、いいよ。', en: 'Consult — anything, okay.', style: 'Salaryman warm gentle sincere-warm welcoming-warm encouraging, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、皆と一緒に。', en: 'Try hard — with all together.', style: 'University student warm soft sincere-warm committed-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '心強い、こちらこそ。', en: 'Heart-strong — same.', style: 'Salaryman warm soft sincere closing-warm grateful-tender warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1007 — sho + hina, brushing teeth (short)
  {
    id: 'conv_01007',
    context: 'Sho and Hina brush teeth before bedtime.',
    purpose: 'children bedtime-routine exchange',
    ambient: 'bathroom_evening',
    sound_effects: [],
    target_vocab: ['磨く', '一緒', '楽しい', '頑張る', '優しい'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、歯、磨こう。', en: 'Hina — teeth, brush.', style: 'Tiny six-year-old soft small sincere proposing-opening warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'うん、一緒に、する。', en: 'Yes — together, do.', style: 'High child bright sincere agreeing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '優しく、磨くね。', en: 'Gently — brush.', style: 'Tiny six-year-old soft small sincere committing-warm careful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '頑張って、ピカピカ、する。', en: 'Try hard — sparkle, do.', style: 'High child bright sincere committed-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、習慣。', en: 'Fun — habit.', style: 'Tiny six-year-old soft small sincere closing-warm bright-philosophical, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 1008 — asuka + sakura, college sending off (medium)
  {
    id: 'conv_01008',
    context: 'Asuka sees Sakura off as she leaves for college.',
    purpose: 'teacher-student college-departure exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['大学', '一緒', '頑張る', '感謝', '大切'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、もうすぐ、大学、ね。', en: 'Sakura-san — soon, college.', style: 'Teacher warm gentle sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '寂しい、けど、楽しみです。', en: 'Lonely — but, looking forward.', style: 'Teen warm soft sincere honest-warm balanced, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、頑張ってきた、大切な時間。', en: 'Together — tried hard, precious time.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '本当に、感謝しています。', en: 'Truly — grateful.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '相談、いつでも、来てね。', en: 'Consult — anytime, come.', style: 'Teacher warm gentle sincere-warm warm-promise welcoming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '必ず、また、来ます。', en: 'Surely — again, come.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '応援、ずっと、してる。', en: 'Cheering — long, doing.', style: 'Teacher warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1009 — aoi + yuki, overseas letter (medium)
  {
    id: 'conv_01009',
    context: 'Aoi reads a letter Yuki sent from overseas.',
    purpose: 'two-women letter-exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['海外', '友達', '一緒', '思い出', '感謝'],
    cast: ['aoi_barista', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'メイ、ゆきちゃんから、手紙、来た。', en: 'Mei — from Yuki-chan, letter, came.', style: 'Barista warm soft sincere-warm enthusiastic-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '海外、元気？', en: 'Overseas — energetic?', style: 'Romantic warm soft sincere-warm curious-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'aoi_barista', jp: 'うん、毎日、楽しいって。', en: 'Yes — every day, fun.', style: 'Barista warm soft sincere-warm reporting-warm happy, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'よかった、安心。', en: 'Good — relieved.', style: 'Romantic warm soft sincere-warm relieved-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '友達、離れても、心、近い。', en: 'Friend — apart, heart, close.', style: 'Barista warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '思い出、大切に、ね。', en: 'Memories — preciously.', style: 'Romantic warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'Barista warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1010 — ryosuke + yumiko, retirement first day (long)
  {
    id: 'conv_01010',
    context: 'Ryosuke reflects with Yumiko on his first day of retirement.',
    purpose: 'married-couple retirement-day exchange',
    ambient: 'tatami_room_morning',
    sound_effects: [],
    target_vocab: ['人生', '一緒', '幸せ', '大切', '感謝'],
    cast: ['ryosuke_dad', 'yumiko_mom'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '優子、今日から、退職、始まる。', en: 'Yumiko — from today, retirement, begins.', style: 'Father warm gentle sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: 'お疲れ様、本当に。', en: 'Good work — truly.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: 'お前の支え、本当、感謝。', en: 'Your support — truly, grateful.', style: 'Father warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'こちらこそ、ね。', en: 'Same.', style: 'Maternal warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '人生、新しい段階、楽しみ。', en: 'Life — new stage, looking forward.', style: 'Father warm gentle sincere-warm hopeful-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '二人で、ゆっくり、過ごせる。', en: 'Two-people — slowly, can spend.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '旅行、もっと、行こう。', en: 'Travel — more, go.', style: 'Father warm gentle sincere-warm enthusiastic-warm planning, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '北海道、行きたかった。', en: 'Hokkaido — wanted to go.', style: 'Maternal warm gentle sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '春、計画しよう、必ず。', en: 'Spring — plan, surely.', style: 'Father warm gentle sincere-warm committing-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '本当、幸せ。', en: 'Truly — happy.', style: 'Maternal warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '子供たち、独立、家族、増えた。', en: 'Children — independent, family, increased.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'ひかりも、来てくれて、毎週。', en: 'Hikari too — comes, every week.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '大切な、これからの時間。', en: 'Precious — coming time.', style: 'Father warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '一緒に、歩いて、いこうね。', en: 'Together — walk.', style: 'Maternal warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1011 — hina + sho, lunch box (short)
  {
    id: 'conv_01011',
    context: 'Hina shows Sho her bento for the day.',
    purpose: 'children bento exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['一緒', '美味しい', '楽しい', '可愛い', '見る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、ひなのお弁当、見て、可愛い。', en: 'Sho — Hina\'s bento, look, cute.', style: 'High child bright sincere showing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'わあ、美味しそう！', en: 'Wow — looks delicious!', style: 'Tiny six-year-old soft small sincere appreciative-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'お母さん、作ってくれた。', en: 'Mom — made.', style: 'High child bright sincere proud-warm grateful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、食べる？', en: 'Together — eat?', style: 'Tiny six-year-old soft small sincere asking-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、お昼。', en: 'Fun — lunch.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1012 — takeda + tatsuya, festival success (medium)
  {
    id: 'conv_01012',
    context: 'Takeda and Tatsuya celebrate a successful town festival.',
    purpose: 'officer-farmer festival-success exchange',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['祭り', '一緒', '頑張る', '感謝', '町'],
    cast: ['takeda_officer', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'たつやさん、祭り、大成功、だった。', en: 'Tatsuya-san — festival, great success, was.', style: 'Officer firm formal direct appreciative-opening warm, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'tatsuya_country', jp: 'うん、皆で、頑張った結果。', en: 'Yes — all, tried hard result.', style: 'Country warm low sincere unhurried humble-warm philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '町、活気、戻ってきた、感じる。', en: 'Town — vitality, returning, feel.', style: 'Officer firm formal direct philosophical-warm appreciative, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'tatsuya_country', jp: '感謝、皆に。', en: 'Grateful — to all.', style: 'Country warm low sincere unhurried grateful-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '一緒に、続けていこう、こんな祭り。', en: 'Together — continue, such festival.', style: 'Officer firm formal direct philosophical-warm encouraging, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'tatsuya_country', jp: '来年も、もっと、頑張る。', en: 'Next year too — more, try hard.', style: 'Country warm low sincere unhurried committed-warm philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'takeda_officer', jp: 'お疲れ様、本当に。', en: 'Good work — truly.', style: 'Officer firm formal direct closing-warm appreciative-brief, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1013 — sho + asuka, school growth (medium)
  {
    id: 'conv_01013',
    context: 'Asuka praises Sho\'s growth at school.',
    purpose: 'teacher-child growth-praise exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['学校', '成長', '一緒', '頑張る', '優しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、随分、成長したね。', en: 'Sho-kun — considerably, grew.', style: 'Teacher warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '先生、ありがとう。', en: 'Teacher — thanks.', style: 'Tiny six-year-old soft small sincere grateful-warm respectful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: '友達にも、優しい。', en: 'Friends too — kind.', style: 'Teacher warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '一緒に、遊ぶの、好き。', en: 'Together — playing, like.', style: 'Tiny six-year-old soft small sincere honest-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '勉強も、頑張ってる。', en: 'Study too — trying hard.', style: 'Teacher warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '学校、楽しい、本当。', en: 'School — fun, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm philosophical, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '誇りに、思ってる、しょうくん。', en: 'Proud — thinking, Sho-kun.', style: 'Teacher warm gentle sincere closing-warm tender-deep appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1014 — daichi + ren, sports anniversary (short)
  {
    id: 'conv_01014',
    context: 'Daichi and Ren mark one year of watching games together.',
    purpose: 'two-male sports anniversary exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '試合', '応援', '頑張る'],
    cast: ['daichi_kansai', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'レン、もう、一年、試合、見てきた。', en: 'Ren — already, year, games, watched.', style: 'Kansai warm bright sincere reflective-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'うん、楽しい、時間、ばかり。', en: 'Yes — fun, time, only.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '応援、一緒に、する、いいやん。', en: 'Cheer — together, do, nice.', style: 'Kansai warm bright sincere appreciative-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: 'これからも、頑張ろう。', en: 'From now — try hard.', style: 'University student warm soft sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '次の試合、絶対、行くで。', en: 'Next game — surely, go.', style: 'Kansai warm bright sincere closing-warm committed-enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1015 — hiroshi_boss + kenji, big contract (medium)
  {
    id: 'conv_01015',
    context: 'Hiroshi tells Kenji they won a major contract.',
    purpose: 'boss-subordinate contract-success exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['契約', '一緒', '頑張る', '会社', '感謝'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、大きな契約、取れた！', en: 'Kenji — big contract, won!', style: 'Boss firm formal direct enthusiastic-opening warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'え、本当ですか！', en: 'Eh — truly?', style: 'Salaryman warm formal sincere-warm excited-warm enthusiastic, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'hiroshi_boss', jp: 'お前のチーム、本当、頑張った。', en: 'Your team — truly, tried hard.', style: 'Boss firm formal direct appreciative-warm affirming, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '皆、喜びます、本当に。', en: 'All — will be happy, truly.', style: 'Salaryman warm formal sincere-warm grateful-warm philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '会社全体、活気、戻る。', en: 'Whole company — vitality, returns.', style: 'Boss firm formal direct philosophical-warm encouraging, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当に、皆に。', en: 'Grateful — truly, to all.', style: 'Salaryman warm formal sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '一緒に、お祝い、しよう。', en: 'Together — celebrate.', style: 'Boss firm formal direct closing-warm warm-promise tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1016 — yumiko + ryosuke, hokkaido planning (medium)
  {
    id: 'conv_01016',
    context: 'Ryosuke and Yumiko plan a Hokkaido trip.',
    purpose: 'married-couple travel-planning exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['旅行', '一緒', '楽しい', '計画', '相談'],
    cast: ['yumiko_mom', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'お父さん、北海道、計画、しよう。', en: 'Father — Hokkaido, plan, do.', style: 'Maternal warm gentle sincere-warm proposing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '春、行きたい、ね。', en: 'Spring — want to go.', style: 'Father warm gentle sincere-warm matching-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '相談、楽しい、ね。', en: 'Consult — fun.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '函館、札幌、どちら、先？', en: 'Hakodate — Sapporo, which, first?', style: 'Father warm gentle sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'yumiko_mom', jp: '函館、夜景、見たい。', en: 'Hakodate — night view, want to see.', style: 'Maternal warm gentle sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'じゃあ、そこから、ね。', en: 'Then — from there.', style: 'Father warm gentle sincere-warm decisive-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '一緒に、楽しい、旅行、しよう。', en: 'Together — fun, travel, do.', style: 'Maternal warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1017 — sho + hina, growth (short)
  {
    id: 'conv_01017',
    context: 'Sho and Hina compare how much they\'ve grown.',
    purpose: 'children growth-comparison exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['成長', '一緒', '楽しい', '頑張る', '大きい'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、見て、大きく、なった、ぼく。', en: 'Hina — look, big, became, I.', style: 'Tiny six-year-old soft small sincere proud-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'ほんと、しょう、すごい！', en: 'Truly — Sho, amazing!', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ひなも、成長、してる。', en: 'Hina too — growth, doing.', style: 'Tiny six-year-old soft small sincere observing-warm appreciative, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒に、頑張ろう、いつも。', en: 'Together — try hard, always.', style: 'High child bright sincere committing-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、毎日。', en: 'Fun — every day.', style: 'Tiny six-year-old soft small sincere closing-warm philosophical-bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 1018 — sakura + ren, dorm move-in (long)
  {
    id: 'conv_01018',
    context: 'Ren helps Sakura move into her college dorm.',
    purpose: 'cousin dorm-move exchange',
    ambient: 'dorm_morning',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '大切', '家族', '相談'],
    cast: ['ren_uni', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'さくら、荷物、運ぼう。', en: 'Sakura — luggage, carry.', style: 'University student warm soft sincere-warm helpful-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'ありがとう、レン兄ちゃん。', en: 'Thanks — Ren-bro.', style: 'Teen warm soft sincere grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '部屋、思ったより、広いね。', en: 'Room — than thought, wide.', style: 'University student warm soft sincere-warm observing-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'ね、緊張、するけど、楽しみ。', en: 'Right — tense, but, looking forward.', style: 'Teen warm soft sincere honest-warm balanced, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '相談、いつでも、メール、する。', en: 'Consult — anytime, email, do.', style: 'University student warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '頑張ります、一人で。', en: 'Try hard — alone.', style: 'Teen warm soft sincere committed-warm determined, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '家族、皆、応援してる。', en: 'Family — all, supporting.', style: 'University student warm soft sincere-warm reassuring-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '心強い、本当に。', en: 'Heart-strong — truly.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '夢、追って、いこう。', en: 'Dream — chase.', style: 'University student warm soft sincere-warm encouraging-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'うん、書き続ける、本当に。', en: 'Yes — keep writing, truly.', style: 'Teen warm soft sincere committed-warm hopeful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '大切な、一歩、始まる。', en: 'Precious — step, begins.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、家族、皆に。', en: 'Grateful — family, all.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '帰り、いつでも、待ってる。', en: 'Return — anytime, waiting.', style: 'University student warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1019 — mei + ryosuke, family advice (medium)
  {
    id: 'conv_01019',
    context: 'Mei asks Ryosuke for parenting advice.',
    purpose: 'daughter-in-law father-in-law parenting exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['子ども', '相談', '一緒', '大切', '優しい'],
    cast: ['mei_romantic', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'お義父さん、子育て、相談、いいですか？', en: 'Father-in-law — child-raising, consult, okay?', style: 'Romantic warm soft sincere-warm asking-opening respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'ryosuke_dad', jp: 'もちろん、何でも。', en: 'Of course — anything.', style: 'Father warm gentle sincere-warm welcoming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'ひかり、最近、わがまま、増えて。', en: 'Hikari — recently, willful, increased.', style: 'Romantic warm soft sincere-warm honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '成長の段階、自然な事。', en: 'Growth stage — natural thing.', style: 'Father warm gentle sincere-warm reassuring-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'mei_romantic', jp: '優しく、対応、できるかな。', en: 'Gently — respond, can?', style: 'Romantic warm soft sincere-warm vulnerable-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、考えていこう、皆で。', en: 'Together — think, with all.', style: 'Father warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '大切な、家族、本当に。', en: 'Precious — family, truly.', style: 'Romantic warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1020 — saito + aoi, baby vaccine (medium)
  {
    id: 'conv_01020',
    context: 'Saito gives Aoi advice about Hikari\'s vaccine schedule.',
    purpose: 'doctor-mother vaccine exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '子ども', '相談', '一緒', '大切'],
    cast: ['saito_doctor', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'あおいさん、お子さん、元気？', en: 'Aoi-san — child, energetic?', style: 'Doctor warm formal sincere-warm caring-opening calm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'aoi_barista', jp: 'はい、おかげさまで、元気。', en: 'Yes — thanks, energetic.', style: 'Barista warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '健康診断、来月、ですね。', en: 'Health check — next month.', style: 'Doctor warm formal sincere-warm informative-warm professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'aoi_barista', jp: 'はい、連れてきます。', en: 'Yes — bring.', style: 'Barista warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '子どもの健康、一番、大切。', en: 'Child\'s health — most, precious.', style: 'Doctor warm formal sincere-warm philosophical-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '相談、本当に、感謝。', en: 'Consult — truly, grateful.', style: 'Barista warm soft sincere-warm grateful-deep respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: '一緒に、見守ろうね。', en: 'Together — watch over.', style: 'Doctor warm formal sincere closing-warm warm-promise tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1021 — daichi + tatsuya, farming year (medium)
  {
    id: 'conv_01021',
    context: 'Daichi and Tatsuya reflect on a year of farming together.',
    purpose: 'cousin farming-year reflection',
    ambient: 'field_evening',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '感謝', '畑', '家族'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、もう、一年、畑、やってきた。', en: 'Tatsuya — already, year, field, did.', style: 'Kansai warm bright sincere reflective-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '本当に、早かった。', en: 'Truly — was fast.', style: 'Country warm low sincere unhurried philosophical-warm matching, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '皆で、頑張ったな。', en: 'All — tried hard.', style: 'Kansai warm bright sincere appreciative-warm philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '感謝、本当に、家族、皆に。', en: 'Grateful — truly, family, to all.', style: 'Country warm low sincere unhurried grateful-deep philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '来年も、一緒に、頑張ろうな。', en: 'Next year too — together, try hard.', style: 'Kansai warm bright sincere committed-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、楽しい仕事や、田畑。', en: 'Yes — fun work, fields.', style: 'Country warm low sincere unhurried philosophical-warm appreciative, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '本当、ありがとう、たつや。', en: 'Truly — thanks, Tatsuya.', style: 'Kansai warm bright sincere closing-warm grateful-deep tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1022 — naoko + sachiko, retirement community (short)
  {
    id: 'conv_01022',
    context: 'Naoko joins Sachiko at a senior community gathering.',
    purpose: 'aunt-grandma community exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '友人', '楽しい', '優しい', '大切'],
    cast: ['naoko_aunt', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'おばさん、こういう集まり、楽しい。', en: 'Auntie — such gathering, fun.', style: 'Aunt warm soft sincere-warm appreciative-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'ね、皆、優しい人。', en: 'Right — all, kind people.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '友人、増えて、嬉しい。', en: 'Friend — increased, happy.', style: 'Aunt warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '一緒に、過ごす時間、大切。', en: 'Together — spending time, precious.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'これからも、よろしく。', en: 'From now — please.', style: 'Aunt warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1023 — hiroshi_boss + ren, intern return (medium)
  {
    id: 'conv_01023',
    context: 'Hiroshi welcomes Ren back as a part-time intern.',
    purpose: 'boss-intern return exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '会社', '感謝', '責任'],
    cast: ['hiroshi_boss', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'レン君、また、来てくれた。', en: 'Ren-kun — again, came.', style: 'Boss firm formal direct warm-opening appreciative, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'はい、よろしくお願いします。', en: 'Yes — please.', style: 'University student warm formal sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '責任、もっと、増やすぞ。', en: 'Responsibility — more, increase.', style: 'Boss firm formal direct authoritative challenging-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: '頑張ります、全力で。', en: 'Try hard — full strength.', style: 'University student warm formal sincere-warm committed-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '会社、お前みたいな、人材、必要。', en: 'Company — like you, talent, needed.', style: 'Boss firm formal direct affirming-warm clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '感謝です、本当に。', en: 'Grateful — truly.', style: 'University student warm soft sincere-warm grateful-deep humble, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '一緒に、また、頑張ろう。', en: 'Together — again, try hard.', style: 'Boss firm formal direct closing-warm tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1024 — kenji + yumiko, customer (medium)
  {
    id: 'conv_01024',
    context: 'Yumiko visits Kenji at the office with a small gift.',
    purpose: 'mother-figure office visit exchange',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '優しい', '大切', '感謝'],
    cast: ['yumiko_mom', 'kenji_office'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: '健次さん、これ、家族から、お礼。', en: 'Kenji-san — this, from family, thanks.', style: 'Maternal warm gentle sincere-warm offering-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'え、わざわざ、ありがとうございます。', en: 'Eh — purposely, thanks.', style: 'Salaryman warm formal sincere-warm surprised-warm grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '優しい指導、いつも、ね。', en: 'Kind guidance — always.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'いえ、こちらこそ。', en: 'No — same.', style: 'Salaryman warm soft sincere-warm humble-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '家族、皆、感謝、しています。', en: 'Family — all, grateful.', style: 'Maternal warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '大切な、お言葉、本当に。', en: 'Precious — words, truly.', style: 'Salaryman warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '一緒に、これからも、よろしく。', en: 'Together — from now, please.', style: 'Maternal warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1025 — riku + asuka, college acceptance (medium)
  {
    id: 'conv_01025',
    context: 'Riku tells Asuka he got into his desired college.',
    purpose: 'student-teacher acceptance exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['大学', '一緒', '頑張る', '感謝', '夢'],
    cast: ['riku_teen', 'asuka_teacher'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: '先生、大学、決まりました。', en: 'Teacher — college, decided.', style: 'Teen warm soft sincere announcing-opening proud-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'おめでとう、リク君！', en: 'Congratulations — Riku-kun!', style: 'Teacher warm gentle sincere-warm enthusiastic-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'riku_teen', jp: '工学部、第一志望、合格しました。', en: 'Engineering — first choice, passed.', style: 'Teen warm soft sincere proud-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '頑張った、結果だね。', en: 'Tried hard — result.', style: 'Teacher warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'riku_teen', jp: '先生のお陰、本当に。', en: 'Teacher\'s thanks — truly.', style: 'Teen warm soft sincere grateful-deep respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '夢、これから、追って、ね。', en: 'Dream — from now, chase.', style: 'Teacher warm gentle sincere-warm encouraging-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '一緒に、ここまで、感謝。', en: 'Together — until here, grateful.', style: 'Teen warm soft sincere closing-warm grateful-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_051 wrote', CONVERSATIONS.length, 'files');

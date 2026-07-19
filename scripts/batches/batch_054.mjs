import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_054)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1066 — takeda + ren, traffic safety (medium)
  {
    id: 'conv_01066',
    context: 'Takeda updates Ren on a new traffic safety initiative.',
    purpose: 'officer-alum traffic-safety exchange',
    ambient: 'plaza_morning',
    sound_effects: [],
    target_vocab: ['交通', '信号', '安全', '一緒', '頑張る'],
    cast: ['takeda_officer', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'レン君、交通安全、新しい運動、始まる。', en: 'Ren-kun — traffic safety, new movement, begins.', style: 'Officer firm formal direct authoritative-opening clear, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: 'どんな内容、ですか？', en: 'What content?', style: 'University student warm soft sincere-warm engaged-warm asking, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'takeda_officer', jp: '信号、守る、子どもに、教える。', en: 'Signal — keep, children, teach.', style: 'Officer firm formal direct informative-clear practical, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: '学校でも、伝えます。', en: 'School too — convey.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '一緒に、町、守ろう。', en: 'Together — town, protect.', style: 'Officer firm formal direct collaborative-warm philosophical, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、本当に。', en: 'Try hard — truly.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '感謝、頼んだ。', en: 'Grateful — counting on.', style: 'Officer firm formal direct closing-warm grateful-brief, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1067 — sho + hina, walking together (short)
  {
    id: 'conv_01067',
    context: 'Hina and Sho walk to school together.',
    purpose: 'children walking-together exchange',
    ambient: 'street_morning',
    sound_effects: [],
    target_vocab: ['歩く', '一緒', '楽しい', '安全', '頑張る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、信号、青になった、歩こう。', en: 'Sho — signal, became green, walk.', style: 'High child bright sincere directing-opening bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、安全、気を付ける。', en: 'Yes — safety, careful.', style: 'Tiny six-year-old soft small sincere committed-warm careful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒に、学校、行こう。', en: 'Together — school, go.', style: 'High child bright sincere inviting-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張って、勉強しよう。', en: 'Try hard — study.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、毎朝。', en: 'Fun — every morning.', style: 'High child bright sincere closing-warm enthusiastic-tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1068 — asuka + sakura, mentor visit (medium)
  {
    id: 'conv_01068',
    context: 'Sakura visits Asuka as a returning alum.',
    purpose: 'teacher-alum mentor exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '大切', '頑張る'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、お久しぶり。', en: 'Sakura-san — long time.', style: 'Teacher warm gentle sincere-warm warm-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '先生、本当、嬉しいです。', en: 'Teacher — truly, happy.', style: 'Teen warm soft sincere grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: '人生、今、どう？', en: 'Life — now, how?', style: 'Teacher warm gentle sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sakura_teen', jp: '書く事、続けてます、本気で。', en: 'Writing — continuing, seriously.', style: 'Teen warm soft sincere committed-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '頑張ってる、伝わる。', en: 'Trying hard — conveys.', style: 'Teacher warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '一緒に、ここまで、来てくれて、感謝。', en: 'Together — until here, came, grateful.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、大切な、生徒。', en: 'Same — precious, student.', style: 'Teacher warm gentle sincere closing-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1069 — mei + aoi, family connection (medium)
  {
    id: 'conv_01069',
    context: 'Mei and Aoi reflect on how their families have grown together.',
    purpose: 'two-mother family-connection reflection',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '関係', '大切', '感謝'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、家族の関係、本当、深まった。', en: 'Aoi-chan — family relationship, truly, deepened.', style: 'Romantic warm soft sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'ね、子供同士、仲、いい。', en: 'Right — children, close.', style: 'Barista warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '私たちも、ずっと、繋がって、いる。', en: 'We too — long, connected.', style: 'Romantic warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '感謝、本当に、毎日。', en: 'Grateful — truly, every day.', style: 'Barista warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: '一緒に、過ごせる、時間、宝。', en: 'Together — can spend, time, treasure.', style: 'Romantic warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: '大切な、友、本当に。', en: 'Precious — friend, truly.', style: 'Barista warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: 'これからも、ね。', en: 'From now.', style: 'Romantic warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1070 — ryosuke + tatsuya, country move (long)
  {
    id: 'conv_01070',
    context: 'Ryosuke finally moves to the country to live near Tatsuya.',
    purpose: 'cousin country-move exchange',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '感謝', '生活', '大切'],
    cast: ['ryosuke_dad', 'tatsuya_country'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'たつや、ついに、引越し、出来た。', en: 'Tatsuya — finally, move, could.', style: 'Father warm gentle sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '嬉しい、本当、待ってた。', en: 'Happy — truly, was waiting.', style: 'Country warm low sincere unhurried welcoming-warm tender-deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '優子、毎日、笑顔。', en: 'Yumiko — every day, smile.', style: 'Father warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '直子も、近くで、嬉しい。', en: 'Naoko too — close, happy.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '家族、皆、集まれて、夢のよう。', en: 'Family — all, can gather, dream-like.', style: 'Father warm gentle sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'Country warm low sincere unhurried grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '生活、ゆっくり、過ごせる。', en: 'Life — slowly, can spend.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '田畑、一緒に、また、頑張ろう。', en: 'Field — together, again, try hard.', style: 'Country warm low sincere unhurried collaborative-warm encouraging, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: 'ぜひ、楽しみ。', en: 'Definitely — looking forward.', style: 'Father warm gentle sincere-warm enthusiastic-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '町、ますます、賑やかや。', en: 'Town — more, lively.', style: 'Country warm low sincere unhurried appreciative-warm enthusiastic, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '皆と、一緒に、過ごしたい。', en: 'With all — together, want to spend.', style: 'Father warm gentle sincere-warm tender-warm wishing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '大切な、家族の時間。', en: 'Precious — family time.', style: 'Country warm low sincere unhurried philosophical-warm tender-deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'これからも、よろしく。', en: 'From now — please.', style: 'Father warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1071 — hina + sho, new house (short)
  {
    id: 'conv_01071',
    context: 'Sho and Hina explore the new country house.',
    purpose: 'children new-house exploration exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['新しい', '一緒', '楽しい', '家族', '見る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、新しい家、広い、ね。', en: 'Sho — new house, wide.', style: 'High child bright sincere observing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、皆、一緒に、住める。', en: 'Yes — all, together, can live.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '部屋、見る、楽しみ！', en: 'Room — see, looking forward!', style: 'High child bright sincere enthusiastic-warm engaged, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '家族、皆、来てくれた。', en: 'Family — all, came.', style: 'Tiny six-year-old soft small sincere grateful-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '楽しい、これから。', en: 'Fun — from now.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1072 — kenji + ren, mentorship continued (medium)
  {
    id: 'conv_01072',
    context: 'Kenji visits Ren\'s school as a guest speaker.',
    purpose: 'senior-alum guest-speaker exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '指導', '感謝', '生徒', '大切'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: '健次さん、来てくれて、嬉しい。', en: 'Kenji-san — came, happy.', style: 'University student warm soft sincere-warm grateful-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '生徒たち、優しい子、ばかり。', en: 'Students — kind children, only.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'お話、本当、勉強になります。', en: 'Talk — truly, study becomes.', style: 'University student warm soft sincere-warm grateful-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '指導、お前、上手だ。', en: 'Guidance — you, skilled.', style: 'Salaryman warm soft sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: '感謝、本当に、ずっと。', en: 'Grateful — truly, long.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '大切な、教育、続けてね。', en: 'Precious — education, continue.', style: 'Salaryman warm soft sincere-warm tender-promise philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、応援、これからも。', en: 'Together — cheer, from now.', style: 'University student warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1073 — hina + asuka, school class (short)
  {
    id: 'conv_01073',
    context: 'Hina joins Asuka\'s class as a new student.',
    purpose: 'teacher-new-student welcome exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['学校', '一緒', '楽しい', '頑張る', '優しい'],
    cast: ['asuka_teacher', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'ひなちゃん、学校、ようこそ。', en: 'Hina-chan — school, welcome.', style: 'Teacher warm gentle sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '先生、よろしく、お願いします。', en: 'Teacher — please.', style: 'High child bright sincere respectful-warm receptive, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-warm' },
      { speaker: 'asuka_teacher', jp: '皆、優しい子、ばかりよ。', en: 'All — kind children, only.', style: 'Teacher warm gentle sincere-warm reassuring-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '頑張ります、勉強。', en: 'Try hard — study.', style: 'High child bright sincere committed-warm bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、楽しい時間、しよう。', en: 'Together — fun time, do.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1074 — yuki + naoko, women's reunion (medium)
  {
    id: 'conv_01074',
    context: 'Yuki visits Naoko\'s new country home.',
    purpose: 'two-women reunion exchange',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '友達', '感謝', '大切', '楽しい'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、田舎、いい雰囲気。', en: 'Naoko-san — country, good atmosphere.', style: 'Office woman bright soft sincere appreciative-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: 'ゆきちゃん、来てくれて、嬉しい。', en: 'Yuki-chan — came, happy.', style: 'Aunt warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '友達、ずっと、繋がってる、嬉しい。', en: 'Friend — long, connected, happy.', style: 'Office woman bright soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '一緒に、お茶、飲みましょう。', en: 'Together — tea, drink.', style: 'Aunt warm soft sincere-warm inviting-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '海外の話、聞いて。', en: 'Overseas talk — listen.', style: 'Office woman bright soft sincere sharing-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '楽しい、本当に。', en: 'Fun — truly.', style: 'Aunt warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '大切な、友、本当に。', en: 'Precious — friend, truly.', style: 'Office woman bright soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1075 — sakura + ren, new book (long)
  {
    id: 'conv_01075',
    context: 'Sakura tells Ren she\'s been offered her first book deal.',
    purpose: 'cousin book-deal exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['作品', '一緒', '夢', '感謝', '頑張る'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、本、出せる事、なった。', en: 'Ren-bro — book, can release, became.', style: 'Teen warm soft sincere announcing-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: 'え、本当！おめでとう、本当！', en: 'Eh — truly! Congratulations, truly!', style: 'University student warm soft sincere-warm enthusiastic-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '夢、ついに、叶う。', en: 'Dream — finally, comes true.', style: 'Teen warm soft sincere proud-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'すごい、努力、伝わる。', en: 'Amazing — effort, conveys.', style: 'University student warm soft sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '皆の支え、本当に、感謝。', en: 'All\'s support — truly, grateful.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '一緒に、ここまで、来たね。', en: 'Together — until here, came.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'お父さん、お母さん、絶対、喜ぶ。', en: 'Father — Mother, surely, happy.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: 'お祝い、皆で、しようね。', en: 'Celebrate — all, do.', style: 'University student warm soft sincere-warm proposing-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'うん、家族、皆、集めよう。', en: 'Yes — family, all, gather.', style: 'Teen warm soft sincere planning-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ってきた、お前、誇り。', en: 'Tried hard — you, proud.', style: 'University student warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、家族、皆に。', en: 'Grateful — family, to all.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '大切な、夢の実現。', en: 'Precious — dream realization.', style: 'University student warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: 'これからも、書き続ける。', en: 'From now — keep writing.', style: 'Teen warm soft sincere closing-warm committed-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1076 — hiroshi_boss + kenji, retirement final (medium)
  {
    id: 'conv_01076',
    context: 'Hiroshi formally passes the company to Kenji.',
    purpose: 'boss-successor handover exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['会社', '一緒', '責任', '感謝', '頑張る'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、今日から、お前が、社長だ。', en: 'Kenji — from today, you, president.', style: 'Boss firm formal direct authoritative-opening warm-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '本当に、責任、感じます。', en: 'Truly — responsibility, feel.', style: 'Salaryman warm formal sincere-warm humble-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'お前なら、大丈夫。', en: 'You — okay.', style: 'Boss firm formal direct affirming-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '指導、本当に、感謝、本当に。', en: 'Guidance — truly, grateful, truly.', style: 'Salaryman warm formal sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '会社、頼んだぞ。', en: 'Company — counting on.', style: 'Boss firm formal direct trusting-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' },
      { speaker: 'kenji_office', jp: '頑張ります、全力で。', en: 'Try hard — full strength.', style: 'Salaryman warm formal sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '一緒に、ここまで、来た、宝。', en: 'Together — until here, came, treasure.', style: 'Boss firm formal direct closing-warm tender-deep philosophical, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1077 — sho + sakura, big sister (short)
  {
    id: 'conv_01077',
    context: 'Sho asks Sakura about reading her book.',
    purpose: 'older-younger book exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['本', '一緒', '楽しい', '優しい', '読む'],
    cast: ['sho_child', 'sakura_teen'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'さくらお姉ちゃん、本、読んで、いい？', en: 'Sakura sister — book, read, okay?', style: 'Tiny six-year-old soft small sincere asking-opening hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sakura_teen', jp: 'うん、優しい話、読むね。', en: 'Yes — kind story, read.', style: 'Teen warm soft sincere agreeing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'お姉ちゃんの本、好き。', en: 'Sister\'s book — like.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、楽しい、時間、ね。', en: 'Together — fun, time.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'ありがとう、本当に。', en: 'Thanks — truly.', style: 'Tiny six-year-old soft small sincere closing-warm grateful-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' }
    ]
  },
  // 1078 — mei + aoi, baby second (medium)
  {
    id: 'conv_01078',
    context: 'Mei has her second baby; Aoi visits the hospital.',
    purpose: 'two-mother newborn-visit exchange',
    ambient: 'hospital_morning',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '幸せ', '可愛い', '感謝'],
    cast: ['aoi_barista', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'メイ、おめでとう、無事、生まれた！', en: 'Mei — congratulations, safely, born!', style: 'Barista warm soft sincere-warm enthusiastic-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'ありがとう、ほんと、嬉しい。', en: 'Thanks — truly, happy.', style: 'Romantic warm soft sincere-warm grateful-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '可愛い、本当に、可愛い。', en: 'Cute — truly, cute.', style: 'Barista warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '家族、また、増えた。', en: 'Family — again, increased.', style: 'Romantic warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '幸せ、ね、本当。', en: 'Happy — truly.', style: 'Barista warm soft sincere-warm tender-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '一緒に、応援、絶対、お願い。', en: 'Together — cheer, surely, please.', style: 'Romantic warm soft sincere-warm asking-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'もちろん、ずっと、感謝。', en: 'Of course — long, grateful.', style: 'Barista warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1079 — daichi + tatsuya, village future (medium)
  {
    id: 'conv_01079',
    context: 'Daichi and Tatsuya plan a new community initiative.',
    purpose: 'cousin community-future exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['町', '一緒', '頑張る', '家族', '大切'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、町、若い人、増やしたい。', en: 'Tatsuya — town, young people, want to increase.', style: 'Kansai warm bright sincere proposing-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、活気、戻したい。', en: 'Yes — vitality, want to return.', style: 'Country warm low sincere unhurried agreeing-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '案、いっぱい、考えてる。', en: 'Plans — lots, considering.', style: 'Kansai warm bright sincere planning-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '皆で、相談、しよう。', en: 'All — consult.', style: 'Country warm low sincere unhurried collaborative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '家族、皆、町、好きや。', en: 'Family — all, town, love.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '大切な、ふるさと、守りたい。', en: 'Precious — hometown, want to protect.', style: 'Country warm low sincere unhurried philosophical-warm tender-deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '頑張ろう、一緒に、ずっと。', en: 'Try hard — together, long.', style: 'Kansai warm bright sincere closing-warm tender-promise deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 1080 — saito + yumiko, daughter birth (medium)
  {
    id: 'conv_01080',
    context: 'Saito explains Mei\'s safe delivery to Yumiko.',
    purpose: 'doctor-grandmother birth-update exchange',
    ambient: 'hospital_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '感謝', '大切', '幸せ'],
    cast: ['saito_doctor', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '優子さん、無事、生まれました。', en: 'Yumiko-san — safely, born.', style: 'Doctor warm formal sincere-warm reassuring-opening warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'yumiko_mom', jp: 'ああ、本当に、感謝です。', en: 'Ah — truly, grateful.', style: 'Maternal warm gentle sincere-warm relieved-warm grateful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'メイさんも、健康、安心です。', en: 'Mei-san too — health, relieved.', style: 'Doctor warm formal sincere-warm professional-warm reassuring, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'yumiko_mom', jp: '本当、よかった。', en: 'Truly — good.', style: 'Maternal warm gentle sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'saito_doctor', jp: '家族、また、増えましたね。', en: 'Family — again, increased.', style: 'Doctor warm formal sincere-warm appreciative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '一緒に、見守って、ね。', en: 'Together — watch over.', style: 'Maternal warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '幸せな、家族ですね。', en: 'Happy — family.', style: 'Doctor warm formal sincere closing-warm tender-deep philosophical, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1081 — hina + sachiko, baby cousin (short)
  {
    id: 'conv_01081',
    context: 'Hina sees Mei\'s new baby for the first time.',
    purpose: 'child-grandma newborn-meet exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '可愛い', '優しい', '楽しい'],
    cast: ['hina_child', 'sachiko_grandma'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'おばあちゃん、新しい家族、可愛い！', en: 'Grandma — new family, cute!', style: 'High child bright sincere enthusiastic-opening tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: 'ね、優しく、抱っこ、しようね。', en: 'Right — gently, hold.', style: 'Grandma warm gentle sincere-warm teaching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、優しく、する。', en: 'Yes — gently, do.', style: 'High child bright sincere committed-warm careful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: '家族、また、増えたね。', en: 'Family — again, increased.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '一緒に、遊ぶ、楽しみ。', en: 'Together — playing, looking forward.', style: 'High child bright sincere closing-warm enthusiastic-tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1082 — ryosuke + sakura, book celebration (medium)
  {
    id: 'conv_01082',
    context: 'Ryosuke congratulates Sakura on her book release.',
    purpose: 'father-daughter book-release exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '夢', '感謝', '大切'],
    cast: ['ryosuke_dad', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'さくら、本、おめでとう、本当に。', en: 'Sakura — book, congratulations, truly.', style: 'Father warm gentle sincere-warm warm-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'お父さん、本当に、感謝。', en: 'Father — truly, grateful.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '小さい頃から、夢、追ってきた。', en: 'Childhood — dream, chased.', style: 'Father warm gentle sincere-warm reminiscing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '皆の応援、本当に、ありがとう。', en: 'All\'s cheering — truly, thanks.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '家族、皆、誇り、思ってる。', en: 'Family — all, proud, thinking.', style: 'Father warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '大切な、家族、本当に。', en: 'Precious — family, truly.', style: 'Teen warm soft sincere tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'これからも、頑張れ。', en: 'From now — try hard.', style: 'Father warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1083 — mrs_mori + sachiko, traditional festival (short)
  {
    id: 'conv_01083',
    context: 'Mrs. Mori and Sachiko prepare for the New Year festival.',
    purpose: 'elderly-women new-year prep exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['正月', '一緒', '伝統', '楽しい', '感謝'],
    cast: ['mrs_mori_neighbor', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '佐知子さん、正月、もうすぐ。', en: 'Sachiko-san — new year, soon.', style: 'Neighbor warm gentle sincere-warm anticipating-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '伝統の準備、楽しい。', en: 'Tradition preparation — fun.', style: 'Grandma warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: '一緒に、準備、しよう。', en: 'Together — preparation, do.', style: 'Neighbor warm gentle sincere-warm inviting-warm warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '感謝、毎年、ね。', en: 'Grateful — every year.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mrs_mori_neighbor', jp: 'これからも、続けたい。', en: 'From now — want to continue.', style: 'Neighbor warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1084 — kenji + ren, intern continuity (medium)
  {
    id: 'conv_01084',
    context: 'Kenji recruits Ren\'s students for company internships.',
    purpose: 'senior-alum recruit-students exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['指導', '一緒', '研修', '頑張る', '生徒'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、生徒さん、研修、来てほしい。', en: 'Ren-kun — students, training, want to come.', style: 'Salaryman warm formal sincere-warm proposing-opening warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'いいですね、本当に。', en: 'Nice — truly.', style: 'University student warm soft sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、指導、続けよう。', en: 'Together — guidance, continue.', style: 'Salaryman warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張る生徒、紹介します。', en: 'Trying-hard students — introduce.', style: 'University student warm soft sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '楽しみ、本当に。', en: 'Looking forward — truly.', style: 'Salaryman warm soft sincere-warm enthusiastic-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '次の世代、繋いで、いきましょう。', en: 'Next generation — connect.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '大切な、繋がり、ね。', en: 'Precious — connection.', style: 'Salaryman warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1085 — daichi + sho, swimming (short)
  {
    id: 'conv_01085',
    context: 'Daichi takes Sho swimming at the river.',
    purpose: 'uncle-child river-swimming exchange',
    ambient: 'river_morning',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '泳ぐ', '頑張る', '安全'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、川で、泳げる？', en: 'Sho — river, can swim?', style: 'Kansai warm bright sincere asking-opening engaged, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、ちょっと、習った。', en: 'Yes — a bit, learned.', style: 'Tiny six-year-old soft small sincere honest-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '安全、気を付けてな。', en: 'Safety — careful.', style: 'Kansai warm bright sincere caring-warm advisory, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '頑張って、泳ぐ。', en: 'Try hard — swim.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '一緒に、楽しもうな。', en: 'Together — enjoy.', style: 'Kansai warm bright sincere closing-warm tender-warm collaborative, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_054 wrote', CONVERSATIONS.length, 'files');

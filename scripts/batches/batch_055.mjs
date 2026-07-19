import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_055)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1086 — sachiko + hina, garden lesson (medium)
  {
    id: 'conv_01086',
    context: 'Sachiko teaches Hina about garden plants.',
    purpose: 'grandma-child garden-lesson exchange',
    ambient: 'garden_morning',
    sound_effects: [],
    target_vocab: ['庭', '花', '一緒', '優しい', '楽しい'],
    cast: ['sachiko_grandma', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'ひなちゃん、庭の花、見て。', en: 'Hina-chan — garden flower, look.', style: 'Grandma warm gentle sincere-warm inviting-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '綺麗、咲いてる。', en: 'Beautiful — blooming.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: '優しく、触ってね。', en: 'Gently — touch.', style: 'Grandma warm gentle sincere-warm teaching-warm careful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、花びら、柔らかい。', en: 'Yes — petals, soft.', style: 'High child bright sincere observing-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: '土、種、植えるの、楽しい。', en: 'Soil — seed, planting, fun.', style: 'Grandma warm gentle sincere-warm teaching-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: '一緒に、するの、楽しみ。', en: 'Together — doing, looking forward.', style: 'High child bright sincere committing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: '育てる、心、大切。', en: 'Growing — heart, precious.', style: 'Grandma warm gentle sincere closing-warm philosophical-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1087 — sho + hina, river day (short)
  {
    id: 'conv_01087',
    context: 'Sho and Hina sit by a river watching the water.',
    purpose: 'children river-watching exchange',
    ambient: 'river_morning',
    sound_effects: [],
    target_vocab: ['川', '一緒', '楽しい', '見る', '綺麗'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、川、綺麗、見て。', en: 'Hina — river, beautiful, look.', style: 'Tiny six-year-old soft small sincere observing-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '水、透き通って、いるね。', en: 'Water — clear, is.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '魚、見える、かな。', en: 'Fish — visible?', style: 'Tiny six-year-old soft small sincere curious-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒に、探そう。', en: 'Together — search.', style: 'High child bright sincere proposing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、川の日。', en: 'Fun — river day.', style: 'Tiny six-year-old soft small sincere closing-warm tender-bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 1088 — asuka + sakura, lifetime mentor (medium)
  {
    id: 'conv_01088',
    context: 'Asuka and Sakura share a quiet talk after years apart.',
    purpose: 'lifetime-mentor reflection exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '大切', '頑張る'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、本、何冊目？', en: 'Sakura-san — book, how many?', style: 'Teacher warm gentle sincere-warm asking-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sakura_teen', jp: '三冊目、出ます、来月。', en: 'Third one — coming, next month.', style: 'Teen warm soft sincere proud-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'すごい、頑張ってる。', en: 'Amazing — trying hard.', style: 'Teacher warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '先生のお陰、本当に。', en: 'Teacher\'s thanks — truly.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '人生、ずっと、繋がってる。', en: 'Life — long, connected.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、ここまで、感謝。', en: 'Together — until here, grateful.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '大切な、生徒。', en: 'Precious — student.', style: 'Teacher warm gentle sincere closing-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1089 — yumiko + ryosuke, evening walk (medium)
  {
    id: 'conv_01089',
    context: 'Yumiko and Ryosuke take an evening walk in the country.',
    purpose: 'married-couple evening-walk exchange',
    ambient: 'street_evening',
    sound_effects: [],
    target_vocab: ['一緒', '健康', '大切', '幸せ', '楽しい'],
    cast: ['yumiko_mom', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'お父さん、今日の散歩、長かった、ね。', en: 'Father — today\'s walk, was long.', style: 'Maternal warm gentle sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、田舎の風、気持ちいい。', en: 'Yes — country wind, feels good.', style: 'Father warm gentle sincere-warm appreciative-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '健康、本当、大切。', en: 'Health — truly, precious.', style: 'Maternal warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、毎日、嬉しい。', en: 'Together — every day, happy.', style: 'Father warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '退職、本当、よかった。', en: 'Retirement — truly, good.', style: 'Maternal warm gentle sincere-warm appreciative-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '楽しい、毎日、ね。', en: 'Fun — every day.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '幸せ、本当に。', en: 'Happy — truly.', style: 'Maternal warm gentle sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1090 — mei + daichi, second child (long)
  {
    id: 'conv_01090',
    context: 'Mei and Daichi reflect on having two children.',
    purpose: 'married-couple family-of-four reflection',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '幸せ', '大切', '頑張る'],
    cast: ['mei_romantic', 'daichi_kansai'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、家族、四人、になった。', en: 'Daichi — family, four, became.', style: 'Romantic warm soft sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'ほんま、賑やかになった。', en: 'Truly — became lively.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'ひかり、お姉ちゃん、頑張ってる。', en: 'Hikari — sister, trying hard.', style: 'Romantic warm soft sincere-warm proud-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '可愛い、二人、本当に。', en: 'Cute — two, truly.', style: 'Kansai warm bright sincere appreciative-warm tender-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '大変、けど、幸せ。', en: 'Hard — but, happy.', style: 'Romantic warm soft sincere-warm honest-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '一緒に、頑張ろうな。', en: 'Together — try hard.', style: 'Kansai warm bright sincere committed-warm tender-promise, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '家族、皆、近くにいる、心強い。', en: 'Family — all, close, heart-strong.', style: 'Romantic warm soft sincere-warm philosophical-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'お父さん、お母さん、毎日、来てくれる。', en: 'Father — Mother, every day, come.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '感謝、本当に、毎日。', en: 'Grateful — truly, every day.', style: 'Romantic warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '子供、二人、育てる、楽しい。', en: 'Children — two, raising, fun.', style: 'Kansai warm bright sincere philosophical-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'これからも、ずっと、ね。', en: 'From now — long.', style: 'Romantic warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '大切な、家族、本当に。', en: 'Precious — family, truly.', style: 'Kansai warm bright sincere tender-deep philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: 'ありがとう、ダイチ。', en: 'Thanks — Daichi.', style: 'Romantic warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1091 — hina + sho, autumn leaves (short)
  {
    id: 'conv_01091',
    context: 'Sho and Hina collect autumn leaves.',
    purpose: 'children leaf-collecting exchange',
    ambient: 'park_afternoon',
    sound_effects: [],
    target_vocab: ['秋', '葉', '一緒', '楽しい', '綺麗'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、葉っぱ、綺麗、いっぱい。', en: 'Sho — leaves, beautiful, many.', style: 'High child bright sincere observing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '集めよう、赤い、葉。', en: 'Collect — red, leaf.', style: 'Tiny six-year-old soft small sincere proposing-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '秋、本当、綺麗な、季節。', en: 'Autumn — truly, beautiful, season.', style: 'High child bright sincere philosophical-warm appreciative, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、本に、挟む？', en: 'Together — book, press?', style: 'Tiny six-year-old soft small sincere asking-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、思い出、ね。', en: 'Fun — memory.', style: 'High child bright sincere closing-warm philosophical-tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1092 — takeda + ren, farewell (medium)
  {
    id: 'conv_01092',
    context: 'Takeda farewells Ren as Takeda retires.',
    purpose: 'officer-alum retirement farewell',
    ambient: 'plaza_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '町', '大切', '頑張る'],
    cast: ['takeda_officer', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'レン君、来月、定年だ。', en: 'Ren-kun — next month, retirement.', style: 'Officer firm formal direct announcing-opening warm-deep, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'え、もう、そんなに。', en: 'Eh — already, so.', style: 'University student warm soft sincere-warm surprised-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '一緒に、町、守れた、感謝。', en: 'Together — town, could protect, grateful.', style: 'Officer firm formal direct grateful-deep tender, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'University student warm soft sincere-warm grateful-deep matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'takeda_officer', jp: '大切な、思い出、忘れない。', en: 'Precious — memory, won\'t forget.', style: 'Officer firm formal direct tender-deep philosophical, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、これからも、町、守る。', en: 'Try hard — from now, town, protect.', style: 'University student warm soft sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '頼んだぞ、本当に。', en: 'Counting on — truly.', style: 'Officer firm formal direct closing-warm trusting-deep, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 1093 — kenji + ryosuke, after retirement (medium)
  {
    id: 'conv_01093',
    context: 'Kenji visits Ryosuke now living in the country.',
    purpose: 'subordinate-retired mentor visit',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '大切', '相談'],
    cast: ['kenji_office', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '亮介さん、お久しぶり。', en: 'Ryosuke-san — long time.', style: 'Salaryman warm soft sincere-warm warm-opening respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '健次さん、来てくれて、嬉しい。', en: 'Kenji-san — came, happy.', style: 'Father warm gentle sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '田舎、本当、素敵な所ですね。', en: 'Country — truly, lovely place.', style: 'Salaryman warm soft sincere-warm appreciative-warm philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、人生、ゆっくり、ね。', en: 'Yes — life, slowly.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '相談、いつでも、伺います。', en: 'Consult — anytime, visit.', style: 'Salaryman warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '感謝、本当に、いつも。', en: 'Grateful — truly, always.', style: 'Father warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Salaryman warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1094 — sakura + asuka, becoming teacher (medium)
  {
    id: 'conv_01094',
    context: 'Sakura tells Asuka she\'s teaching writing now.',
    purpose: 'teacher-alum new-career exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['指導', '生徒', '一緒', '大切', '頑張る'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、私、書き方、教える事、なった。', en: 'Teacher — I, writing, teaching, became.', style: 'Teen warm soft sincere announcing-opening proud-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'え、本当、嬉しい！', en: 'Eh — truly, happy!', style: 'Teacher warm gentle sincere-warm enthusiastic-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '若い生徒、教える、責任、感じる。', en: 'Young students — teach, responsibility, feel.', style: 'Teen warm soft sincere humble-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '指導、上手に、なれる、君なら。', en: 'Guidance — skilled, can become, you.', style: 'Teacher warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '先生から、学んだ事、伝えたい。', en: 'Teacher — learned things, want to convey.', style: 'Teen warm soft sincere committed-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、大切な、繋がり。', en: 'Together — precious, connection.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '頑張ります、本当に。', en: 'Try hard — truly.', style: 'Teen warm soft sincere closing-warm committed-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1095 — hina + sho, school festival (long)
  {
    id: 'conv_01095',
    context: 'Hina and Sho participate in a school cultural festival.',
    purpose: 'children school-festival exchange',
    ambient: 'school_morning',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '頑張る', '友達', '大切'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、今日、文化祭、楽しみ。', en: 'Sho — today, cultural festival, looking forward.', style: 'High child bright sincere excited-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、ぼく、お店、頑張る。', en: 'Yes — I, shop, try hard.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'ひな、歌、披露、する。', en: 'Hina — song, perform, do.', style: 'High child bright sincere announcing-warm proud, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'すごい、応援、する。', en: 'Amazing — cheer, do.', style: 'Tiny six-year-old soft small sincere committed-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '友達、皆、来てくれる。', en: 'Friends — all, come.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、楽しもう、ね。', en: 'Together — enjoy.', style: 'Tiny six-year-old soft small sincere proposing-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'お母さん、お父さん、来る。', en: 'Mom — Dad, come.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ぼくも、家族、来てくれる。', en: 'I too — family, come.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '大切な、日、本当に。', en: 'Precious — day, truly.', style: 'High child bright sincere philosophical-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'お弁当、何、ある？', en: 'Bento — what, exists?', style: 'Tiny six-year-old soft small sincere curious-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、食べよう、皆で。', en: 'Together — eat, with all.', style: 'High child bright sincere inviting-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、文化祭、絶対。', en: 'Fun — cultural festival, surely.', style: 'Tiny six-year-old soft small sincere closing-warm enthusiastic-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '頑張ろう、一緒に。', en: 'Try hard — together.', style: 'High child bright sincere closing-warm enthusiastic-tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1096 — ryosuke + tatsuya, harvest dinner (medium)
  {
    id: 'conv_01096',
    context: 'Ryosuke and Tatsuya share a harvest dinner.',
    purpose: 'cousin harvest-dinner exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['収穫', '一緒', '家族', '感謝', '楽しい'],
    cast: ['ryosuke_dad', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '亮介、今年の収穫、皆で、味わおう。', en: 'Ryosuke — this year\'s harvest, all, savor.', style: 'Country warm low sincere unhurried inviting-opening warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '本当に、立派な、お米。', en: 'Truly — splendid, rice.', style: 'Father warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '家族、皆で、頑張った結果。', en: 'Family — all, tried hard result.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '感謝、本当に、皆に。', en: 'Grateful — truly, to all.', style: 'Father warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '一緒に、楽しい、夕食、しよう。', en: 'Together — fun, dinner, do.', style: 'Country warm low sincere unhurried collaborative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: '田舎の味、最高。', en: 'Country taste — best.', style: 'Father warm gentle sincere-warm appreciative-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'お互い、健康で、続けよう。', en: 'Mutually — healthy, continue.', style: 'Country warm low sincere closing-warm tender-promise warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1097 — sho + sachiko, planting tree (short)
  {
    id: 'conv_01097',
    context: 'Sho plants a tree with Sachiko in the garden.',
    purpose: 'child-grandma planting exchange',
    ambient: 'garden_morning',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '頑張る', '育てる'],
    cast: ['sho_child', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'しょうくん、木、植えようね。', en: 'Sho-kun — tree, plant.', style: 'Grandma warm gentle sincere-warm inviting-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'うん、優しく、する。', en: 'Yes — gently, do.', style: 'Tiny six-year-old soft small sincere committed-warm careful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sachiko_grandma', jp: '育てる、長い時間、かかる。', en: 'Growing — long time, takes.', style: 'Grandma warm gentle sincere-warm teaching-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '頑張って、毎日、見る。', en: 'Try hard — every day, see.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'sachiko_grandma', jp: '一緒に、見守ろう。', en: 'Together — watch over.', style: 'Grandma warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1098 — aoi + mei, two-mom advice (medium)
  {
    id: 'conv_01098',
    context: 'Aoi and Mei exchange advice on raising two kids.',
    purpose: 'two-mother dual-child advice',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['子ども', '一緒', '頑張る', '相談', '家族'],
    cast: ['aoi_barista', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、二人、育てる、大変だね。', en: 'Aoi-chan — two, raising, hard.', style: 'Romantic warm soft sincere-warm honest-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '本当ね、毎日、忙しい。', en: 'Truly — every day, busy.', style: 'Barista warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '相談、いつも、心強い。', en: 'Consult — always, heart-strong.', style: 'Romantic warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'お互い、頑張ろうね。', en: 'Mutually — try hard.', style: 'Barista warm soft sincere-warm encouraging-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '家族、皆、近くで、助かる。', en: 'Family — all, close, saved.', style: 'Romantic warm soft sincere-warm appreciative-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '子供たち、ずっと、仲良し。', en: 'Children — long, close.', style: 'Barista warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '一緒に、見守ろうね。', en: 'Together — watch over.', style: 'Romantic warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1099 — kenji + ren, longtime friendship (long)
  {
    id: 'conv_01099',
    context: 'Kenji and Ren reflect after twenty years of friendship.',
    purpose: 'longtime-friend reflection exchange',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '大切', '友人'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 5,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、もう、二十年、経った、ね。', en: 'Ren-kun — already, twenty years, passed.', style: 'Salaryman warm soft sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '本当に、早かった。', en: 'Truly — was fast.', style: 'University student warm soft sincere-warm philosophical-warm matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'インターン、最初、覚えてる？', en: 'Intern — first, remember?', style: 'Salaryman warm soft sincere-warm nostalgic-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'もちろん、緊張、いっぱい、だった。', en: 'Of course — tense, full, was.', style: 'University student warm soft sincere-warm reminiscing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '今、立派な、先生だ。', en: 'Now — splendid, teacher.', style: 'Salaryman warm soft sincere-warm appreciative-warm proud, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: '健次さんも、社長、本当、すごい。', en: 'Kenji-san too — president, truly, amazing.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '人生、本当に、長い旅。', en: 'Life — truly, long journey.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '一緒に、ここまで、来てくれた、感謝。', en: 'Together — until here, came, grateful.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ、大切な友人。', en: 'Same — precious friend.', style: 'Salaryman warm soft sincere-warm matching-warm tender-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '次の世代、繋いで、いこう。', en: 'Next generation — connect.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'お互い、見守ろう、これからも。', en: 'Mutually — watch over, from now.', style: 'Salaryman warm soft sincere-warm tender-promise philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '大切な、時間、本当に。', en: 'Precious — time, truly.', style: 'University student warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '一緒に、年取れる、嬉しい。', en: 'Together — can age, happy.', style: 'Salaryman warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1100 — sakura + ren, milestone (medium)
  {
    id: 'conv_01100',
    context: 'Sakura reaches her tenth published book, celebrating with Ren.',
    purpose: 'cousin milestone-celebration exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '夢', '感謝', '頑張る', '大切'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、十冊目、出版、決まった。', en: 'Ren-bro — tenth, publication, decided.', style: 'Teen warm soft sincere announcing-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: '十冊、すごい、本当に。', en: 'Ten books — amazing, truly.', style: 'University student warm soft sincere-warm appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '夢、ずっと、追ってきた。', en: 'Dream — long, chased.', style: 'Teen warm soft sincere reflective-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '皆の応援、繋がってる、ね。', en: 'All\'s cheering — connected.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当に、皆に。', en: 'Grateful — truly, to all.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '頑張ってきた、お前、誇り。', en: 'Tried hard — you, proud.', style: 'University student warm soft sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、ここまで、大切な、時間。', en: 'Together — until here, precious, time.', style: 'Teen warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1101 — hina + sho, growing up (short)
  {
    id: 'conv_01101',
    context: 'Hina and Sho reflect on growing up.',
    purpose: 'children growth-reflection exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '成長', '大切', '友達'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、ひな、もう、十歳。', en: 'Sho — Hina, already, ten.', style: 'High child bright sincere announcing-opening reflective, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'すごい、成長、ね。', en: 'Amazing — growth.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'ずっと、一緒、本当に、嬉しい。', en: 'Long — together, truly, happy.', style: 'High child bright sincere philosophical-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '友達、大切に、する。', en: 'Friend — preciously, do.', style: 'Tiny six-year-old soft small sincere committed-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '楽しい、ずっと、ね。', en: 'Fun — long.', style: 'High child bright sincere closing-warm tender-promise deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1102 — yuki + naoko, friends reunion (medium)
  {
    id: 'conv_01102',
    context: 'Yuki returns from overseas permanently, visits Naoko.',
    purpose: 'two-women permanent-return reunion',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '友達', '大切', '帰る'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、ついに、帰ってきた。', en: 'Naoko-san — finally, returned.', style: 'Office woman bright soft sincere announcing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: 'お帰り、本当、嬉しい。', en: 'Welcome back — truly, happy.', style: 'Aunt warm soft sincere-warm welcoming-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '海外、長かった、けど、戻れて、安心。', en: 'Overseas — was long, but, returning, relieved.', style: 'Office woman bright soft sincere honest-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '友達、ずっと、繋がってた。', en: 'Friend — long, was connected.', style: 'Aunt warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '感謝、本当に、皆に。', en: 'Grateful — truly, to all.', style: 'Office woman bright soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '一緒に、これからも、過ごしたい。', en: 'Together — from now, want to spend.', style: 'Aunt warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Office woman bright soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1103 — tatsuya + sho, baby fishing (short)
  {
    id: 'conv_01103',
    context: 'Tatsuya teaches Sho about fishing carefully.',
    purpose: 'uncle-child fishing-lesson exchange',
    ambient: 'river_morning',
    sound_effects: [],
    target_vocab: ['釣り', '一緒', '優しい', '頑張る', '楽しい'],
    cast: ['tatsuya_country', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'しょう、釣り、ゆっくり、しよう。', en: 'Sho — fishing, slowly, do.', style: 'Country warm low sincere unhurried teaching-opening tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'sho_child', jp: 'うん、優しく、待つ。', en: 'Yes — gently, wait.', style: 'Tiny six-year-old soft small sincere committed-warm careful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'tatsuya_country', jp: '一緒に、頑張ろうな。', en: 'Together — try hard.', style: 'Country warm low sincere unhurried collaborative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'お魚、釣れた！', en: 'Fish — caught!', style: 'Tiny six-year-old soft small sincere triumphant-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'tatsuya_country', jp: '楽しい、釣り、ね。', en: 'Fun — fishing.', style: 'Country warm low sincere closing-warm tender-bright philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1104 — hiroshi_boss + kenji, ten years later (medium)
  {
    id: 'conv_01104',
    context: 'Hiroshi visits Kenji as company president ten years later.',
    purpose: 'mentor-successor visit exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['会社', '一緒', '感謝', '大切', '頑張る'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、会社、立派になった。', en: 'Kenji — company, splendid became.', style: 'Boss firm formal direct appreciative-opening warm-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '部長のお陰、本当に、感謝。', en: 'Boss\'s thanks — truly, grateful.', style: 'Salaryman warm formal sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'お前の力、本物だ。', en: 'Your strength — real.', style: 'Boss firm formal direct affirming-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '一緒に、ここまで、来た、本当に。', en: 'Together — until here, came, truly.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '大切な、後輩、本当に。', en: 'Precious — successor, truly.', style: 'Boss firm formal direct tender-deep loving, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '頑張ります、これからも。', en: 'Try hard — from now.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '応援、ずっと、する。', en: 'Cheer — long, do.', style: 'Boss firm formal direct closing-warm tender-promise deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1105 — sachiko + naoko, daughter-figure (medium)
  {
    id: 'conv_01105',
    context: 'Sachiko gives Naoko advice as a quiet day passes.',
    purpose: 'elderly-aunt life-wisdom exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '人生', '大切', '優しい', '感謝'],
    cast: ['sachiko_grandma', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: '直子ちゃん、人生、優しく、過ごすの、大切。', en: 'Naoko-chan — life, gently, spending, precious.', style: 'Grandma warm gentle sincere-warm philosophical-opening wise-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'naoko_aunt', jp: 'おばさん、いつも、教えてくれて、感謝。', en: 'Auntie — always, teaching, grateful.', style: 'Aunt warm soft sincere-warm grateful-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: '一緒に、過ごせる、嬉しい。', en: 'Together — can spend, happy.', style: 'Grandma warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Aunt warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: '大切な、家族、ね。', en: 'Precious — family.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '本当、感謝、毎日。', en: 'Truly — grateful, every day.', style: 'Aunt warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'これからも、よろしくね。', en: 'From now — please.', style: 'Grandma warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_055 wrote', CONVERSATIONS.length, 'files');

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_040)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 786 — hiroshi_boss + kenji, function development (medium)
  {
    id: 'conv_00786',
    context: 'Hiroshi and Kenji discuss adding a new function to the product.',
    purpose: 'boss-subordinate product-function exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['機能', '開発', '一般', '個人', '価値'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、新しい機能、追加、考えてる。', en: 'Kenji — new function, add, considering.', style: 'Boss firm formal direct authoritative announcing-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、内容、伺います。', en: 'Yes — content, listening.', style: 'Salaryman warm formal sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '一般のお客様、個人で使える物。', en: 'General customers — individually usable thing.', style: 'Boss firm formal direct informative-clear professional, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '開発、どれぐらい、時間、必要ですか？', en: 'Development — how much, time needed?', style: 'Salaryman warm formal sincere-warm asking-practical engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '三ヶ月、目標だ。価値、出せる。', en: 'Three months — goal. Value — can produce.', style: 'Boss firm formal direct confident-clear professional, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '了解しました。資料、まとめます。', en: 'Understood. Materials — compile.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '頼む。期待してる。', en: 'Counting on. Expecting.', style: 'Boss firm formal direct closing-warm trusting, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 787 — sho + hina, head game (short)
  {
    id: 'conv_00787',
    context: 'Hina makes silly faces with Sho, focusing on body parts.',
    purpose: 'children body-part game exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['頭', '顔', '一緒', '楽しい', '可愛い'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、頭、ぐるぐる、回して。', en: 'Sho — head, round-round, turn.', style: 'High child bright sincere enthusiastic-warm playful-opening, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '目、回る、ちょっと。', en: 'Eye — turning, a bit.', style: 'Tiny six-year-old soft small sincere honest-warm playful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'ひな、変な顔、作る！', en: 'Hina — strange face, make!', style: 'High child bright sincere enthusiastic-warm playful-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'わあ、可愛い、おかしい。', en: 'Wow — cute, funny.', style: 'Tiny six-year-old soft small sincere appreciative-warm laughing, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、変な顔、楽しい。', en: 'Together — strange face, fun.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 788 — asuka + sakura, language tutoring (medium)
  {
    id: 'conv_00788',
    context: 'Asuka helps Sakura translate an English passage into Japanese.',
    purpose: 'teacher-student translation exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['英語', '日本語', '意味', '表現', '理解'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、この英語、訳してみる？', en: 'Sakura-san — this English, try translating?', style: 'Teacher warm gentle sincere-warm encouraging-warm mentor-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'はい、意味、考えながら。', en: 'Yes — meaning, while thinking.', style: 'Teen warm soft sincere committed-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'asuka_teacher', jp: 'この表現、日本語、難しいね。', en: 'This expression — Japanese, difficult.', style: 'Teacher warm gentle sincere-warm acknowledging-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '直訳、変、聞こえます。', en: 'Direct-translation — strange, sounds.', style: 'Teen warm soft sincere observing-warm thoughtful-honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '気持ち、込めて、自然に、訳しましょう。', en: 'Feelings — included, naturally, translate.', style: 'Teacher warm gentle sincere-warm advising-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '理解、深まりました。ありがとう。', en: 'Understanding — deepened. Thanks.', style: 'Teen warm soft sincere appreciative-warm grateful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '少しずつ、上手くなる。', en: 'Bit by bit — becomes skilled.', style: 'Teacher warm gentle sincere closing-warm encouraging-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 789 — aoi + ryosuke, café customer reflection (medium)
  {
    id: 'conv_00789',
    context: 'Ryosuke visits Aoi\'s café and they chat about life.',
    purpose: 'father-figure barista café exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['人生', '相手', '大切', '一緒', '幸せ'],
    cast: ['aoi_barista', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: '亮介さん、いらっしゃい。お変わりないですか？', en: 'Ryosuke-san — welcome. No change?', style: 'Barista warm soft sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'ええ、おかげさまで。あおいさんは？', en: 'Yes — thanks. Aoi-san?', style: 'Father warm gentle sincere-warm grateful-warm returning, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '子育て、毎日、楽しい。', en: 'Raising child — every day, fun.', style: 'Barista warm soft sincere-warm tender-warm sharing-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '相手、レン君、いい人、ですよね。', en: 'Partner — Ren-kun, good person.', style: 'Father warm gentle sincere-warm affirming-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'はい、感謝、毎日してます。', en: 'Yes — grateful, every day.', style: 'Barista warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '一緒の人生、大切に、続けてね。', en: 'Together life — preciously, continue.', style: 'Father warm gentle sincere-warm advising-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'ありがとう、本当に幸せです。', en: 'Thanks — truly happy.', style: 'Barista warm soft sincere closing-warm grateful-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 790 — mei + daichi, baby personality (long)
  {
    id: 'conv_00790',
    context: 'Mei and Daichi watch Hikari and discuss her emerging personality.',
    purpose: 'married-couple baby-personality exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['子ども', '姿', '一緒', '幸せ', '大切'],
    cast: ['mei_romantic', 'daichi_kansai'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、ひかりの姿、見て、可愛いね。', en: 'Daichi — Hikari\'s figure, look, cute.', style: 'Romantic warm soft sincere-warm tender-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'ほんま、毎日、変わるなぁ。', en: 'Truly — every day, changes.', style: 'Kansai warm bright sincere appreciative-warm tender-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '最近、笑顔、多い。', en: 'Recently — smile, many.', style: 'Romantic warm soft sincere-warm tender-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '俺の顔、見ると、笑うわ。', en: 'My face — sees, laughs.', style: 'Kansai warm bright sincere proud-warm tender-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '人見知り、まだ、しないね。', en: 'Stranger-shyness — yet, doesn\'t do.', style: 'Romantic warm soft sincere-warm observing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '皆、大好き、っぽいな。', en: 'All — loves, seems.', style: 'Kansai warm bright sincere observing-warm tender-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '子ども、本当に、宝物。', en: 'Child — truly, treasure.', style: 'Romantic warm soft sincere-warm philosophical-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'うん、毎日、幸せやで。', en: 'Yes — every day, happy.', style: 'Kansai warm bright sincere tender-warm philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'お父さん、お母さん、見せたい。', en: 'Dad — Mom, want to show.', style: 'Romantic warm soft sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '来週、皆、集まる、楽しみや。', en: 'Next week — all, gather, looking forward.', style: 'Kansai warm bright sincere anticipating-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '皆で、一緒に、過ごす時間、大切。', en: 'All — together, spend time, important.', style: 'Romantic warm soft sincere-warm philosophical-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'これから、もっと、楽しいで。', en: 'From now — more, fun.', style: 'Kansai warm bright sincere closing-warm forward-promise enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '本当ね。これからも、一緒に、歩こう。', en: 'Truly. From now — together, walk.', style: 'Romantic warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 791 — hina + yumiko, simple math (short)
  {
    id: 'conv_00791',
    context: 'Yumiko helps Hina count to ten thousand using cookies.',
    purpose: 'mother-child counting math exchange',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['万', '一緒', '楽しい', '数', '頑張る'],
    cast: ['hina_child', 'yumiko_mom'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、一万、数えてみる？', en: 'Hina-chan — ten thousand, try counting?', style: 'Maternal warm gentle sincere-warm playful-opening encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'えー、一万、すごく、多い。', en: 'Eh — ten thousand, very, many.', style: 'High child bright sincere awe-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '百、千、一万。一緒に、数えよう。', en: 'Hundred, thousand, ten thousand. Together — count.', style: 'Maternal warm gentle sincere-warm teaching-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: '一、二、三…。楽しい、数。', en: 'One, two, three… Fun — numbers.', style: 'High child bright sincere counting-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '頑張ってる。続けようね。', en: 'Trying hard. Continue.', style: 'Maternal warm gentle sincere closing-warm encouraging-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 792 — ren + asuka, internship guidance (medium)
  {
    id: 'conv_00792',
    context: 'Ren asks Asuka for advice on his internship guidance role.',
    purpose: 'student-teacher career-guidance exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['指導', '経験', '相談', '責任', '一緒'],
    cast: ['ren_uni', 'asuka_teacher'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: '先生、企業の指導役、不安です。', en: 'Teacher — company guide role, anxious.', style: 'University student warm soft sincere-warm vulnerable-opening honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '相談、いつでも、しに来てね。', en: 'Consult — anytime, come.', style: 'Teacher warm gentle sincere-warm reassuring-warm welcoming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '責任、大きく感じます。', en: 'Responsibility — big feel.', style: 'University student warm soft sincere-warm honest-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '経験、自然に、学べる。', en: 'Experience — naturally, learn.', style: 'Teacher warm gentle sincere-warm reassuring-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '健次さんと、一緒に、頑張ります。', en: 'Kenji-san — together, try hard.', style: 'University student warm soft sincere-warm committed-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '君なら、大丈夫。応援してる。', en: 'You — okay. Cheering.', style: 'Teacher warm gentle sincere-warm affirming-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: 'ありがとうございます、先生。', en: 'Thanks — teacher.', style: 'University student warm soft sincere closing-warm grateful-respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' }
    ]
  },
  // 793 — tatsuya + ryosuke, agriculture market (medium)
  {
    id: 'conv_00793',
    context: 'Tatsuya updates Ryosuke on country agriculture prices.',
    purpose: 'rural-urban agriculture market exchange',
    ambient: 'porch_morning',
    sound_effects: ['birds_distant'],
    target_vocab: ['市場', '米', '価格', '量', '一緒'],
    cast: ['tatsuya_country', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '亮介、今年の米の量、減りそうだ。', en: 'Ryosuke — this year\'s rice quantity, likely to decrease.', style: 'Country warm low sincere unhurried reporting-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: 'そうですか。市場、価格、上がりますね。', en: 'Really. Market — price, will rise.', style: 'Father warm gentle sincere-warm acknowledging-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '天気、悪かったから、仕方ない。', en: 'Weather — bad, can\'t help.', style: 'Country warm low sincere unhurried philosophical-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: '家計にも、響きますね。', en: 'Household — also affects.', style: 'Father warm gentle sincere-warm honest-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '直接、買ってくれる、家族、助かる。', en: 'Directly buying — family, saved.', style: 'Country warm low sincere unhurried grateful-warm philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '優子と、相談して、続けます。', en: 'Yumiko — consult, continue.', style: 'Father warm gentle sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'ありがたい。一緒に、頑張ろう。', en: 'Grateful. Together — try hard.', style: 'Country warm low sincere closing-warm grateful-tender steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 794 — sho + sachiko, quiet time (short)
  {
    id: 'conv_00794',
    context: 'Sho sits with Sachiko on the porch in silence.',
    purpose: 'child-grandma quiet-moment exchange',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['静か', '一緒', '優しい', '空', '楽しい'],
    cast: ['sho_child', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'しょうくん、ここ、静か、いいね。', en: 'Sho-kun — here, quiet, nice.', style: 'Grandma warm gentle sincere-warm tender-warm aged-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'うん、おばあちゃんと、一緒、好き。', en: 'Yes — with grandma, together, like.', style: 'Tiny six-year-old soft small sincere bright-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sachiko_grandma', jp: '空、見てる？綺麗ね。', en: 'Sky — looking? Beautiful.', style: 'Grandma warm gentle sincere-warm tender-warm observing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '雲、ふわふわ。楽しい。', en: 'Cloud — fluffy. Fun.', style: 'Tiny six-year-old soft small sincere observing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'sachiko_grandma', jp: 'おばあちゃん、優しい時、好き。', en: 'Grandma — gentle time, like.', style: 'Grandma warm gentle sincere closing-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 795 — yuki + naoko, workplace friendship (medium)
  {
    id: 'conv_00795',
    context: 'Yuki tells Naoko about a stressful day at the office.',
    purpose: 'two-women friendship work-stress exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['仕事', '相手', '相談', '一緒', '大切'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、仕事の相手、合わない時、ありますか？', en: 'Naoko-san — work partner, doesn\'t match times, exist?', style: 'Office woman bright soft sincere vulnerable-opening honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'もちろん。皆、ある事よ。', en: 'Of course. All — have.', style: 'Aunt warm soft sincere-warm empathic-warm acknowledging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'どう、対応、します？', en: 'How — respond?', style: 'Office woman bright soft sincere asking-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'naoko_aunt', jp: '相談、出来る人、見つけるの、大切。', en: 'Consultation — possible person, finding, important.', style: 'Aunt warm soft sincere-warm advising-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'yuki_office', jp: 'なるほど。一人で、抱えない方がいい。', en: 'I see. Alone — better not carry.', style: 'Office woman bright soft sincere understanding-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '私も、いつでも、相談、受けるよ。', en: 'I too — anytime, consultation, receive.', style: 'Aunt warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'ありがとう、心強い。', en: 'Thanks — heart-strong.', style: 'Office woman bright soft sincere closing-warm grateful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 796 — saito + yumiko, health checkup (medium)
  {
    id: 'conv_00796',
    context: 'Dr. Saito gives Yumiko her annual checkup result.',
    purpose: 'doctor-patient woman health exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '検査', '結果', '女性', '大切'],
    cast: ['saito_doctor', 'yumiko_mom'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '優子さん、検査の結果、お話します。', en: 'Yumiko-san — exam result, talk.', style: 'Doctor warm formal sincere-warm professional-opening calm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'yumiko_mom', jp: 'はい、お願いします。', en: 'Yes — please.', style: 'Maternal warm gentle sincere-warm receptive-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '全体的に、健康。問題ありません。', en: 'Overall — healthy. No problem.', style: 'Doctor warm formal sincere-warm reassuring-warm clear, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'yumiko_mom', jp: 'ああ、良かった。', en: 'Ah — good.', style: 'Maternal warm gentle sincere-warm relieved-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '女性は、年齢で、変化、ありますね。', en: 'Women — with age, change, exist.', style: 'Doctor warm formal sincere-warm informative-warm caring, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'yumiko_mom', jp: '気を付けてます。生活、大切に。', en: 'Being careful. Life — preciously.', style: 'Maternal warm gentle sincere-warm committed-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'お元気で、また来年。', en: 'Healthy — again next year.', style: 'Doctor warm formal sincere closing-warm tender-warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 797 — hina + sho, weather (short)
  {
    id: 'conv_00797',
    context: 'Hina and Sho watch the rain at the window.',
    purpose: 'children rain-weather observation exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['天気', '雨', '一緒', '楽しい', '空'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、雨、降ってる、空、暗い。', en: 'Sho — rain, falling, sky, dark.', style: 'High child bright sincere observing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、天気、悪いね。', en: 'Yes — weather, bad.', style: 'Tiny six-year-old soft small sincere observing-warm honest, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '外、行けないけど、家で、一緒に、遊ぼう。', en: 'Outside — can\'t go, at home, together, play.', style: 'High child bright sincere reframing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、絵本、読もう。', en: 'Yes — picture book, read.', style: 'Tiny six-year-old soft small sincere agreeing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '雨の日、家で、楽しい。', en: 'Rain day — at home, fun.', style: 'High child bright sincere closing-warm philosophical-bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 798 — kenji + ren, internship first day (medium)
  {
    id: 'conv_00798',
    context: 'Kenji welcomes Ren on his first day of internship.',
    purpose: 'senior-junior internship-first-day exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['指導', '会社', '一緒', '基本', '頑張る'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、ようこそ、会社、へ。', en: 'Ren-kun — welcome, company.', style: 'Salaryman warm formal sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '健次さん、よろしくお願いします。', en: 'Kenji-san — please.', style: 'University student warm formal sincere-warm respectful-warm committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'kenji_office', jp: '基本、まず、覚えていこう。', en: 'Basics — first, remember.', style: 'Salaryman warm formal sincere-warm teaching-warm encouraging, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '指導、お願いします。', en: 'Guidance — please.', style: 'University student warm formal sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'kenji_office', jp: '何でも、聞いてね。気軽に。', en: 'Anything — ask. Casually.', style: 'Salaryman warm gentle sincere-warm reassuring-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、一緒に、頑張ります。', en: 'Yes — together, try hard.', style: 'University student warm formal sincere-warm committed-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '楽しみ。', en: 'Looking forward.', style: 'Salaryman warm soft sincere closing-warm tender-brief, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 799 — sakura + asuka, writing competition (long)
  {
    id: 'conv_00799',
    context: 'Asuka suggests Sakura submit her work to a competition.',
    purpose: 'teacher-student writing-competition exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['作品', '評価', '一緒', '頑張る', '大切'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、作品、コンテスト、出してみない？', en: 'Sakura-san — work, contest, try submitting?', style: 'Teacher warm gentle sincere-warm encouraging-opening warm-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'え、私の作品、ですか？', en: 'Eh — my work?', style: 'Teen warm soft sincere surprised-warm vulnerable-asking, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'うん、評価、される、価値ある。', en: 'Yes — evaluation, deserved, value exists.', style: 'Teacher warm gentle sincere-warm affirming-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '不安、いっぱい。', en: 'Anxiety — full.', style: 'Teen warm soft sincere honest-warm vulnerable-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '当然。皆、最初、そうだよ。', en: 'Naturally. All — first, so.', style: 'Teacher warm gentle sincere-warm reassuring-warm empathic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '結果、悪かったら、どうしよう。', en: 'Result — bad if, what do.', style: 'Teen warm soft sincere worried-warm honest-vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '結果、関係ない。挑戦、大切。', en: 'Result — irrelevant. Challenge — important.', style: 'Teacher warm gentle sincere-warm philosophical-warm encouraging-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'sakura_teen', jp: '頑張れば、得るもの、あるかな？', en: 'Try hard — gain things, exist?', style: 'Teen warm soft sincere asking-warm hopeful-vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '必ず、ある。経験、力、になる。', en: 'Surely — exist. Experience, strength — becomes.', style: 'Teacher warm gentle sincere-warm affirming-warm encouraging-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '一緒に、書き直してくれますか？', en: 'Together — re-write, will do?', style: 'Teen warm soft sincere asking-warm hopeful-committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'もちろん。最後まで、応援する。', en: 'Of course. Until end — cheer.', style: 'Teacher warm gentle sincere-warm warm-promise tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '頑張ります、先生。', en: 'Try hard — teacher.', style: 'Teen warm soft sincere committed-warm grateful-respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'asuka_teacher', jp: 'さくらさんの夢、必ず、叶う。', en: 'Sakura-san\'s dream — surely, comes true.', style: 'Teacher warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 800 — daichi + sho, sports activity (short)
  {
    id: 'conv_00800',
    context: 'Daichi takes Sho to play catch in the park.',
    purpose: 'uncle-child sports activity exchange',
    ambient: 'park_afternoon',
    sound_effects: [],
    target_vocab: ['活動', '一緒', '楽しい', '頑張る', 'ボール'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、ボール、投げるで、頑張れ。', en: 'Sho — ball, throw, try hard.', style: 'Kansai warm bright sincere enthusiastic-opening encouraging, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、ぼく、頑張る！', en: 'Yes — I, try hard!', style: 'Tiny six-year-old soft small sincere committed-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: 'ええで、活動、体、動かそう。', en: 'Good — activity, body, move.', style: 'Kansai warm bright sincere encouraging-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ダイチおじさんと、一緒、楽しい。', en: 'With Daichi-uncle — together, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: 'また、来週、一緒に、するで。', en: 'Again — next week, together, do.', style: 'Kansai warm bright sincere closing-warm promising-tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 801 — hiroshi_boss + kenji, project budget (medium)
  {
    id: 'conv_00801',
    context: 'Hiroshi and Kenji review project budget allocation.',
    purpose: 'boss-subordinate budget-review exchange',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['全体', '部分', '対策', '考える', '責任'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、予算、全体、見直すぞ。', en: 'Kenji — budget, whole, re-review.', style: 'Boss firm formal direct authoritative announcing-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、どの部分、ですか？', en: 'Yes — which part?', style: 'Salaryman warm formal sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'hiroshi_boss', jp: '開発費、削減、対策、考えろ。', en: 'Development cost — reduction, response, think.', style: 'Boss firm formal direct authoritative instructive-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '理解しました。案、明日まで。', en: 'Understood. Plan — by tomorrow.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '責任、お前にある。慎重に、考えろ。', en: 'Responsibility — yours. Carefully, think.', style: 'Boss firm formal direct authoritative warning-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、全力で、取り組みます。', en: 'Yes — full strength, engage.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '頼んだぞ。', en: 'Counting on.', style: 'Boss firm formal direct closing-brief trusting-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 802 — mrs_mori + sachiko, traditional culture (medium)
  {
    id: 'conv_00802',
    context: 'Mrs. Mori and Sachiko discuss a traditional festival.',
    purpose: 'two-elderly-women cultural-tradition exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['文化', '昔', '一緒', '祭り', '大切'],
    cast: ['mrs_mori_neighbor', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '佐知子さん、お祭り、今年も、するね。', en: 'Sachiko-san — festival, this year too, do.', style: 'Neighbor warm gentle sincere-warm cheerful-opening anticipatory, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-cheerful' },
      { speaker: 'sachiko_grandma', jp: 'うん、文化、続けるの、大切ね。', en: 'Yes — culture, continuing, important.', style: 'Grandma warm gentle sincere-warm philosophical-warm aged-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '昔、皆で、踊って、楽しかった。', en: 'Long ago — all, danced, fun.', style: 'Neighbor warm gentle sincere-warm reminiscing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '今でも、子供たち、喜ぶよ。', en: 'Even now — children, happy.', style: 'Grandma warm gentle sincere-warm hopeful-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '伝統、伝えていきたい。', en: 'Tradition — want to convey.', style: 'Neighbor warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '一緒に、続けようね。', en: 'Together — continue.', style: 'Grandma warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: '若い世代に、教えよう。', en: 'Young generation — teach.', style: 'Neighbor warm gentle sincere closing-warm philosophical-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 803 — hina + sho, Japanese language (short)
  {
    id: 'conv_00803',
    context: 'Hina teaches Sho a new Japanese word she learned.',
    purpose: 'children Japanese-word teaching exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['日本語', '言葉', '一緒', '楽しい', '覚える'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、新しい日本語、覚えた。', en: 'Sho — new Japanese, remembered.', style: 'High child bright sincere enthusiastic-opening proud-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'え、何の言葉？教えて。', en: 'Eh — what word? Teach.', style: 'Tiny six-year-old soft small sincere curious-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '「ふわふわ」。雲、みたいだね。', en: '"Fluffy". Cloud — like.', style: 'High child bright sincere explaining-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい言葉。一緒に、使おう。', en: 'Fun word. Together — use.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'うん。もっと、覚える、楽しい。', en: 'Yes. More — remembering, fun.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 804 — tatsuya + naoko, country medical (medium)
  {
    id: 'conv_00804',
    context: 'Tatsuya tells Naoko about the difficulty of finding doctors in rural areas.',
    purpose: 'two-adults rural medical exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['医者', '病院', '現実', '相談', '大切'],
    cast: ['tatsuya_country', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '直子、田舎、医者、少ないんだ。', en: 'Naoko — country, doctors, few.', style: 'Country warm low sincere unhurried honest-opening serious, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'naoko_aunt', jp: 'そうですか。病院、遠い？', en: 'Really. Hospital — far?', style: 'Aunt warm soft sincere-warm concerned-warm asking, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '車で、四十分、現実だ。', en: 'By car — forty minutes, reality.', style: 'Country warm low sincere unhurried honest-warm philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'naoko_aunt', jp: '大変ですね。安全、大切。', en: 'Hard. Safety — important.', style: 'Aunt warm soft sincere-warm empathic-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '何かあれば、皆で、相談、する。', en: 'Something — all, consult, do.', style: 'Country warm low sincere unhurried philosophical-warm community, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'naoko_aunt', jp: '近所、繋がり、強いね。', en: 'Neighbors — connection, strong.', style: 'Aunt warm soft sincere-warm appreciative-warm acknowledging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'それが、ここの強さ。', en: 'That — here\'s strength.', style: 'Country warm low sincere closing-warm philosophical-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 805 — aoi + mei, baby smile (short)
  {
    id: 'conv_00805',
    context: 'Aoi visits Mei and Hikari, marveling at the baby\'s smile.',
    purpose: 'two-mother baby-smile exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['笑顔', '一緒', '可愛い', '幸せ', '大切'],
    cast: ['aoi_barista', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'メイ、ひかりちゃんの笑顔、最高ね。', en: 'Mei — Hikari-chan\'s smile, best.', style: 'Barista warm soft sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: 'ね、可愛いでしょ。', en: 'Right — cute.', style: 'Romantic warm soft sincere-warm proud-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '見てると、幸せな気持ちになる。', en: 'Seeing — becomes happy feeling.', style: 'Barista warm soft sincere-warm tender-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: 'うん。子育て、大切な時間。', en: 'Yes. Raising child — precious time.', style: 'Romantic warm soft sincere-warm philosophical-tender warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '一緒に、見守ろうね、お互いの子。', en: 'Together — watch over, mutual children.', style: 'Barista warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_040 wrote', CONVERSATIONS.length, 'files');

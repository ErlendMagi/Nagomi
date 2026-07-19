import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_052)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1026 — aoi + yuki, beauty salon (medium)
  {
    id: 'conv_01026',
    context: 'Aoi visits a beauty salon and the stylist is Yuki\'s friend.',
    purpose: 'two-women beauty-salon exchange',
    ambient: 'salon_afternoon',
    sound_effects: [],
    target_vocab: ['美容', '髪型', '一緒', '楽しい', '可愛い'],
    cast: ['aoi_barista', 'yuki_office'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、美容室、来てくれた！', en: 'Aoi-chan — salon, came!', style: 'Office woman bright soft sincere welcoming-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'aoi_barista', jp: 'うん、髪型、変えたい。', en: 'Yes — hairstyle, want to change.', style: 'Barista warm soft sincere-warm engaged-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '可愛い感じ、似合いそう。', en: 'Cute feel — looks suit.', style: 'Office woman bright soft sincere appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '短めに、して。', en: 'Shorter — do.', style: 'Barista warm soft sincere-warm requesting-warm casual, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '了解、楽しい時間に、しよう。', en: 'Understood — fun time, do.', style: 'Office woman bright soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '一緒に、過ごせる、嬉しい。', en: 'Together — can spend, happy.', style: 'Barista warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '友達、価格、特別ね。', en: 'Friend — price, special.', style: 'Office woman bright soft sincere closing-warm playful-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1027 — sho + hina, dress up (short)
  {
    id: 'conv_01027',
    context: 'Sho and Hina dress up for a school event.',
    purpose: 'children dress-up exchange',
    ambient: 'bedroom_morning',
    sound_effects: [],
    target_vocab: ['服装', '一緒', '可愛い', '楽しい', '頑張る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、今日の服装、可愛い！', en: 'Sho — today\'s outfit, cute!', style: 'High child bright sincere appreciative-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ひなも、綺麗、ね。', en: 'Hina too — beautiful.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒に、写真、撮ろう。', en: 'Together — photo, take.', style: 'High child bright sincere proposing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'いいね、頑張って、笑おう。', en: 'Nice — try hard, smile.', style: 'Tiny six-year-old soft small sincere agreeing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、行事、ね。', en: 'Fun — event.', style: 'High child bright sincere closing-warm enthusiastic-tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1028 — asuka + sakura, college life (medium)
  {
    id: 'conv_01028',
    context: 'Sakura visits Asuka over summer break.',
    purpose: 'teacher-alum college-update exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['大学', '一緒', '頑張る', '相談', '楽しい'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、大学、どう？', en: 'Sakura-san — college, how?', style: 'Teacher warm gentle sincere-warm asking-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '楽しい、毎日、です。', en: 'Fun — every day.', style: 'Teen warm soft sincere bright-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: '友達、出来た？', en: 'Friend — made?', style: 'Teacher warm gentle sincere-warm engaged-warm curious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sakura_teen', jp: 'はい、いっぱい。一緒に、勉強、してる。', en: 'Yes — lots. Together — studying.', style: 'Teen warm soft sincere appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '相談、いつでも、来てね。', en: 'Consult — anytime, come.', style: 'Teacher warm gentle sincere-warm warm-promise welcoming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '頑張ります、書く事も、続けてる。', en: 'Try hard — writing too, continuing.', style: 'Teen warm soft sincere committed-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '誇りに、思ってる、本当に。', en: 'Proud — thinking, truly.', style: 'Teacher warm gentle sincere closing-warm tender-deep appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1029 — mei + yumiko, mother visit (medium)
  {
    id: 'conv_01029',
    context: 'Yumiko visits Mei and Hikari.',
    purpose: 'mother-in-law daughter-in-law visit exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '優しい', '大切', '楽しい'],
    cast: ['yumiko_mom', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'メイちゃん、お邪魔します。', en: 'Mei-chan — sorry to bother.', style: 'Maternal warm gentle sincere-warm humble-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'お義母さん、来てくれて、嬉しい。', en: 'Mother-in-law — came, happy.', style: 'Romantic warm soft sincere-warm welcoming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: 'ひかり、大きく、なったね。', en: 'Hikari — big, became.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '本当に、毎日、成長。', en: 'Truly — every day, growth.', style: 'Romantic warm soft sincere-warm proud-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '一緒に、お茶、飲みましょう。', en: 'Together — tea, drink.', style: 'Maternal warm gentle sincere-warm inviting-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'はい、楽しい時間、ね。', en: 'Yes — fun time.', style: 'Romantic warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '家族、皆、優しい。', en: 'Family — all, kind.', style: 'Maternal warm gentle sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1030 — ryosuke + tatsuya, retirement village (long)
  {
    id: 'conv_01030',
    context: 'Ryosuke visits Tatsuya during retirement and discusses village future.',
    purpose: 'cousin retirement-village deep exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '町', '大切', '人生'],
    cast: ['ryosuke_dad', 'tatsuya_country'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'たつや、退職、しばらく、経った。', en: 'Tatsuya — retirement, while, passed.', style: 'Father warm gentle sincere-warm reflective-opening philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'うん、ゆっくり、過ごせてる？', en: 'Yes — slowly, can spend?', style: 'Country warm low sincere unhurried caring-warm engaged, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: '毎日、楽しい。優子と、ね。', en: 'Every day — fun. With Yumiko.', style: 'Father warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '田畑も、来てくれるな。', en: 'Field too — come.', style: 'Country warm low sincere unhurried appreciative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '町、本当、好きになった。', en: 'Town — truly, became liking.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'いつか、住みに、来てもいい、で。', en: 'Someday — living, come okay.', style: 'Country warm low sincere unhurried inviting-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '実は、考えてる。', en: 'Actually — considering.', style: 'Father warm gentle sincere-warm honest-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '本当か！家族、嬉しいで。', en: 'Truly! Family — happy.', style: 'Country warm low sincere unhurried enthusiastic-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: '優子も、賛成、してる。', en: 'Yumiko too — agreeing.', style: 'Father warm gentle sincere-warm reporting-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '直子も、来てる。家族、揃う。', en: 'Naoko too — coming. Family, gather.', style: 'Country warm low sincere unhurried philosophical-warm tender-deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '人生、新しい段階、ね。', en: 'Life — new stage.', style: 'Father warm gentle sincere-warm philosophical-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '大切な、家族の集まり。', en: 'Precious — family gathering.', style: 'Country warm low sincere unhurried philosophical-warm tender-deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '一緒に、年取れる、嬉しい。', en: 'Together — can age, happy.', style: 'Father warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1031 — hina + sho, treasure hunt (short)
  {
    id: 'conv_01031',
    context: 'Hina and Sho find a treasure they hid before.',
    purpose: 'children treasure-find exchange',
    ambient: 'garden_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '見つける', '大切', '思い出'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、見つけた、宝物。', en: 'Sho — found, treasure.', style: 'High child bright sincere triumphant-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'やった！懐かしい。', en: 'Yay! Nostalgic.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒に、隠した、覚えてる？', en: 'Together — hid, remember?', style: 'High child bright sincere reminiscing-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、大切な、思い出。', en: 'Yes — precious, memory.', style: 'Tiny six-year-old soft small sincere philosophical-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '楽しい、ね。', en: 'Fun.', style: 'High child bright sincere closing-warm tender-deep philosophical, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1032 — takeda + ren, return visit (medium)
  {
    id: 'conv_01032',
    context: 'Ren returns to thank Takeda for past mentorship.',
    purpose: 'officer-alum return-thanks exchange',
    ambient: 'plaza_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '大切', '頑張る', '相談'],
    cast: ['ren_uni', 'takeda_officer'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: '武田さん、お久しぶり、です。', en: 'Takeda-san — long time, no see.', style: 'University student warm soft sincere-warm respectful-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'takeda_officer', jp: 'おお、レン君！元気か？', en: 'Oh — Ren-kun! Energetic?', style: 'Officer firm formal direct warm-opening welcoming, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'はい、感謝、伝えに、来ました。', en: 'Yes — gratitude, convey, came.', style: 'University student warm soft sincere-warm grateful-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: 'こちらこそ、いい経験、もらった。', en: 'Same — good experience, received.', style: 'Officer firm formal direct grateful-warm clear, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '相談、ずっと、心強かった。', en: 'Consult — long, heart-strong was.', style: 'University student warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'takeda_officer', jp: '一緒に、町、守れた事、大切。', en: 'Together — town, could protect, precious.', style: 'Officer firm formal direct philosophical-warm tender, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、これからも。', en: 'Try hard — from now.', style: 'University student warm soft sincere closing-warm committed-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1033 — kenji + ren, professional development (medium)
  {
    id: 'conv_01033',
    context: 'Kenji discusses Ren\'s teaching plans.',
    purpose: 'senior-alum career-planning exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['指導', '将来', '一緒', '頑張る', '相談'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、教員、目指してる、ね。', en: 'Ren-kun — teacher, aiming for.', style: 'Salaryman warm soft sincere-warm appreciative-opening warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、将来、楽しみ。', en: 'Yes — future, looking forward.', style: 'University student warm soft sincere-warm enthusiastic-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: 'いい指導者、なれる、君なら。', en: 'Good guide — can become, you.', style: 'Salaryman warm soft sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: '健次さんの、指導、見習って。', en: 'Kenji-san\'s — guidance, learn from.', style: 'University student warm soft sincere-warm grateful-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、こちらこそ。', en: 'Grateful — same.', style: 'Salaryman warm soft sincere-warm humble-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '相談、これからも、いいですか？', en: 'Consult — from now, okay?', style: 'University student warm soft sincere-warm asking-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'もちろん、一緒に、頑張ろう。', en: 'Of course — together, try hard.', style: 'Salaryman warm soft sincere closing-warm warm-promise tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1034 — daichi + sho, sports victory (short)
  {
    id: 'conv_01034',
    context: 'Daichi celebrates with Sho after winning a small game.',
    purpose: 'uncle-child victory exchange',
    ambient: 'park_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '勝つ', '楽しい', '応援'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、勝った、すごいで！', en: 'Sho — won, amazing!', style: 'Kansai warm bright sincere enthusiastic-opening proud, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'やった！ありがとう、応援。', en: 'Yay! Thanks — cheering.', style: 'Tiny six-year-old soft small sincere grateful-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '一緒に、頑張った結果や。', en: 'Together — tried hard result.', style: 'Kansai warm bright sincere philosophical-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、本当に。', en: 'Fun — truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: 'また、次も、頑張ろうな。', en: 'Again — next too, try hard.', style: 'Kansai warm bright sincere closing-warm tender-promise enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1035 — hiroshi_boss + kenji, training program (medium)
  {
    id: 'conv_01035',
    context: 'Hiroshi launches a new employee training program with Kenji.',
    purpose: 'boss-subordinate training-program exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['研修', '一緒', '指導', '考える', '責任'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、新人研修、設計、頼む。', en: 'Kenji — new employee training, design, ask.', style: 'Boss firm formal direct authoritative requesting-opening clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、責任、持って、します。', en: 'Yes — responsibility, hold, do.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '指導、君の、得意分野。', en: 'Guidance — your, specialty.', style: 'Boss firm formal direct affirming-warm clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'レン君の、経験、参考、します。', en: 'Ren-kun\'s — experience, reference, do.', style: 'Salaryman warm formal sincere-warm thoughtful-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'いい考え、一緒に、進めよう。', en: 'Good thought — together, proceed.', style: 'Boss firm formal direct affirming-warm collaborative, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '案、来週、提出します。', en: 'Plan — next week, submit.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '期待してる。', en: 'Expecting.', style: 'Boss firm formal direct closing-brief trusting-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 1036 — sakura + ren, second year (long)
  {
    id: 'conv_01036',
    context: 'Sakura starts her second year of college, sharing with Ren.',
    purpose: 'cousin college second-year exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '大学', '夢', '感謝'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、二年目、始まった。', en: 'Ren-bro — second year, began.', style: 'Teen warm soft sincere announcing-opening reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '早いね、一年、過ぎた。', en: 'Fast — year, passed.', style: 'University student warm soft sincere-warm philosophical-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '勉強、もっと、深まる、感じ。', en: 'Study — more, deepens, feel.', style: 'Teen warm soft sincere appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '専門、これから、本格的になる。', en: 'Specialty — from now, full-fledged.', style: 'University student warm soft sincere-warm advising-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '書き続けてる、毎日。', en: 'Keep writing — every day.', style: 'Teen warm soft sincere committed-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'すごい、努力、本当に。', en: 'Amazing — effort, truly.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '夢、ずっと、追う。', en: 'Dream — long, chase.', style: 'Teen warm soft sincere committed-warm hopeful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '俺も、教員、目指してる。', en: 'I too — teacher, aiming.', style: 'University student warm soft sincere-warm sharing-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'いいなあ、応援、する。', en: 'Nice — cheer, do.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、頑張ろう、ずっと。', en: 'Together — try hard, long.', style: 'University student warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '家族、感謝、毎日。', en: 'Family — grateful, every day.', style: 'Teen warm soft sincere-warm grateful-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '俺も、本当、そう思ってる。', en: 'I too — truly, so think.', style: 'University student warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '大切な、皆、ね。', en: 'Precious — all.', style: 'Teen warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1037 — hina + yumiko, hair (short)
  {
    id: 'conv_01037',
    context: 'Yumiko styles Hina\'s hair for school.',
    purpose: 'mother-child hair exchange',
    ambient: 'bedroom_morning',
    sound_effects: [],
    target_vocab: ['髪', '一緒', '可愛い', '優しい', '楽しい'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、髪、結ぼうね。', en: 'Hina-chan — hair, tie.', style: 'Maternal warm gentle sincere-warm tender-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、可愛く、して。', en: 'Yes — cute, do.', style: 'High child bright sincere requesting-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '優しく、結ぶね。', en: 'Gently — tie.', style: 'Maternal warm gentle sincere-warm careful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '一緒に、リボン、ね。', en: 'Together — ribbon.', style: 'High child bright sincere proposing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '楽しい、毎朝、ね。', en: 'Fun — every morning.', style: 'Maternal warm gentle sincere closing-warm tender-philosophical warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1038 — yuki + aoi, overseas memory (medium)
  {
    id: 'conv_01038',
    context: 'Yuki visits Aoi during a brief return from overseas.',
    purpose: 'two-women reunion exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['海外', '友達', '一緒', '思い出', '楽しい'],
    cast: ['yuki_office', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'ゆきちゃん、お帰り！', en: 'Yuki-chan — welcome back!', style: 'Barista warm soft sincere-warm enthusiastic-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yuki_office', jp: 'ただいま、本当、嬉しい。', en: 'I\'m back — truly, happy.', style: 'Office woman bright soft sincere grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '海外、どう、楽しい？', en: 'Overseas — how, fun?', style: 'Barista warm soft sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'yuki_office', jp: '毎日、発見、新しい思い出。', en: 'Every day — discovery, new memories.', style: 'Office woman bright soft sincere appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '友達、いっぱい、出来た？', en: 'Friend — lots, made?', style: 'Barista warm soft sincere-warm engaged-warm curious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'yuki_office', jp: 'うん、でも、あおいちゃん、一番。', en: 'Yes — but, Aoi-chan, best.', style: 'Office woman bright soft sincere tender-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Barista warm soft sincere closing-warm matching-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1039 — saito + tatsuya, country health (medium)
  {
    id: 'conv_01039',
    context: 'Saito makes a country visit to check on Tatsuya.',
    purpose: 'doctor-farmer rural-health exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['健康', '相談', '一緒', '大切', '生活'],
    cast: ['saito_doctor', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'たつやさん、健康、いかが？', en: 'Tatsuya-san — health, how?', style: 'Doctor warm formal sincere-warm caring-opening calm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'tatsuya_country', jp: 'おかげさまで、元気。', en: 'Thanks — energetic.', style: 'Country warm low sincere unhurried grateful-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'saito_doctor', jp: '生活習慣、続けて、大切。', en: 'Life habits — continue, important.', style: 'Doctor warm formal sincere-warm advising-warm professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '田畑、毎日、動いてる。', en: 'Field — every day, moving.', style: 'Country warm low sincere unhurried philosophical-warm appreciative, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '自然な運動、最高の薬。', en: 'Natural exercise — best medicine.', style: 'Doctor warm formal sincere-warm philosophical-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '相談、いつでも、ね。', en: 'Consult — anytime.', style: 'Country warm low sincere unhurried warm-promise tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一緒に、長く、お元気で。', en: 'Together — long, healthy.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1040 — mei + daichi, family decision (medium)
  {
    id: 'conv_01040',
    context: 'Mei and Daichi decide to have a second baby.',
    purpose: 'married-couple family-decision exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '幸せ', '大切', '相談'],
    cast: ['mei_romantic', 'daichi_kansai'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、私たち、二人目、決めようか。', en: 'Daichi — we, second one, decide?', style: 'Romantic warm soft sincere-warm vulnerable-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'うん、相談、ずっとしてきた。', en: 'Yes — consult, long doing.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'ひかり、お兄ちゃん、お姉ちゃん、欲しがる。', en: 'Hikari — brother, sister, wants.', style: 'Romantic warm soft sincere-warm observing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '家族、増える、嬉しい事や。', en: 'Family — increase, happy thing.', style: 'Kansai warm bright sincere tender-warm philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '幸せ、本当に。', en: 'Happy — truly.', style: 'Romantic warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '一緒に、頑張ろう、これからも。', en: 'Together — try hard, from now.', style: 'Kansai warm bright sincere committed-warm tender-promise, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '大切な、決断、ね。', en: 'Precious — decision.', style: 'Romantic warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1041 — hiroshi_boss + ren, return as teacher (medium)
  {
    id: 'conv_01041',
    context: 'Hiroshi congratulates Ren on becoming a teacher.',
    purpose: 'boss-alum teacher-congratulations exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '頑張る', '指導', '大切'],
    cast: ['hiroshi_boss', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'レン君、教員、合格、おめでとう。', en: 'Ren-kun — teacher, passed, congratulations.', style: 'Boss firm formal direct warm-opening appreciative, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'ありがとうございます、感謝、本当に。', en: 'Thanks — grateful, truly.', style: 'University student warm formal sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '会社、お前の指導、見てきた、誇り。', en: 'Company — your guidance, watched, proud.', style: 'Boss firm formal direct affirming-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '健次さんの指導、本当に、心強かった。', en: 'Kenji-san\'s guidance — truly, heart-strong was.', style: 'University student warm soft sincere-warm grateful-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '大切な、出会い、だったな。', en: 'Precious — meeting, was.', style: 'Boss firm formal direct philosophical-warm tender-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'これからも、頑張ります。', en: 'From now — try hard.', style: 'University student warm soft sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '一緒に、応援、ずっと。', en: 'Together — cheer, long.', style: 'Boss firm formal direct closing-warm tender-promise deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1042 — asuka + ren, new teacher (medium)
  {
    id: 'conv_01042',
    context: 'Asuka welcomes Ren as a fellow teacher.',
    purpose: 'mentor-colleague welcome exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['指導', '一緒', '頑張る', '生徒', '大切'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、同僚に、なれたね。', en: 'Ren-kun — colleague, became.', style: 'Teacher warm gentle sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '先生、本当に、嬉しいです。', en: 'Teacher — truly, happy.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '生徒、一緒に、見守ろう。', en: 'Students — together, watch over.', style: 'Teacher warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '指導、よろしく、お願いします。', en: 'Guidance — please.', style: 'University student warm soft sincere-warm humble-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、頼りに、してる。', en: 'Same — relying on.', style: 'Teacher warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '大切な、仕事、頑張ります。', en: 'Precious — work, try hard.', style: 'University student warm soft sincere-warm committed-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、進もう。', en: 'Together — proceed.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1043 — sho + hina, school field trip (short)
  {
    id: 'conv_01043',
    context: 'Sho and Hina excitedly prepare for a field trip.',
    purpose: 'children field-trip preparation exchange',
    ambient: 'bedroom_morning',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '頑張る', '見学', '友達'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、明日、見学、行く。', en: 'Hina — tomorrow, field trip, go.', style: 'Tiny six-year-old soft small sincere excited-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、行ける、嬉しい！', en: 'Together — can go, happy!', style: 'High child bright sincere enthusiastic-warm bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'お弁当、楽しみ。', en: 'Bento — looking forward.', style: 'Tiny six-year-old soft small sincere anticipating-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '友達と、頑張って、楽しもう。', en: 'Friends — try hard, enjoy.', style: 'High child bright sincere proposing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、見学、絶対。', en: 'Fun — field trip, surely.', style: 'Tiny six-year-old soft small sincere closing-warm enthusiastic-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 1044 — sachiko + goro, last days (medium)
  {
    id: 'conv_01044',
    context: 'Sachiko and Goro reflect on their long life together.',
    purpose: 'elderly-couple life-reflection exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['人生', '一緒', '思い出', '大切', '感謝'],
    cast: ['sachiko_grandma', 'goro_grandpa'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'おじいちゃん、長かった、人生、ね。', en: 'Grandpa — long, life.', style: 'Grandma warm gentle sincere-warm reflective-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'goro_grandpa', jp: 'うん、本当に、早かった。', en: 'Yes — truly, was fast.', style: 'Grandpa warm gentle sincere-warm philosophical-warm aged-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '思い出、いっぱい、ある。', en: 'Memories — lots, exist.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'goro_grandpa', jp: 'お前と、過ごせた、感謝。', en: 'With you — could spend, grateful.', style: 'Grandpa warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Grandma warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'goro_grandpa', jp: '一緒に、最後まで、ね。', en: 'Together — until end.', style: 'Grandpa warm gentle sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: '大切な、人。', en: 'Precious — person.', style: 'Grandma warm gentle sincere closing-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1045 — mrs_mori + naoko, sharing tradition (medium)
  {
    id: 'conv_01045',
    context: 'Mrs. Mori teaches Naoko how to make traditional pickled vegetables.',
    purpose: 'neighbor-aunt tradition exchange',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['伝統', '一緒', '優しい', '楽しい', '料理'],
    cast: ['mrs_mori_neighbor', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '直子さん、伝統の漬物、教えるね。', en: 'Naoko-san — traditional pickle, teach.', style: 'Neighbor warm gentle sincere-warm teaching-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'お願いします、知りたかった。', en: 'Please — wanted to know.', style: 'Aunt warm soft sincere-warm engaged-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '優しく、塩、加減、する。', en: 'Gently — salt, amount, do.', style: 'Neighbor warm gentle sincere-warm teaching-warm careful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: 'こうですか？', en: 'Like this?', style: 'Aunt warm soft sincere-warm asking-warm careful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'いいね、ちょうど、いい。', en: 'Nice — just, good.', style: 'Neighbor warm gentle sincere-warm appreciative-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '一緒に、料理、楽しい。', en: 'Together — cooking, fun.', style: 'Aunt warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '伝えていきたい、味、ね。', en: 'Want to convey — taste.', style: 'Neighbor warm gentle sincere closing-warm philosophical-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_052 wrote', CONVERSATIONS.length, 'files');

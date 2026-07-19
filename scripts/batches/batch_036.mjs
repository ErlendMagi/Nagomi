import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_036)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 704 — kenji + ryosuke, economic news (medium, N3+)
  {
    id: 'conv_00704',
    context: 'Kenji and Ryosuke read the morning economic news at a cafe.',
    purpose: 'two-men news exchange with N3 economic vocabulary',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['経済', '情報', '重要', '物価', '説明'],
    cast: ['kenji_office', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '亮介さん、最近の経済の情報、本当に重要ですね。', en: 'Ryosuke-san, recent economic info — truly important.', style: 'Salaryman warm formal sincere-warm professional-opening serious-warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-serious' },
      { speaker: 'ryosuke_dad', jp: '本当に。物価、上がり続けていて、心配です。', en: 'Truly. Prices keep rising — worried.', style: 'Father warm gentle sincere-warm thoughtful-warm acknowledging-concerned, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'kenji_office', jp: '会社でも、対応、考え始めています。', en: 'At company — starting to think about response.', style: 'Salaryman warm gentle sincere-warm practical-warm informing, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '上司に、状況、説明する機会、ありそう？', en: 'Boss — chance to explain situation likely?', style: 'Father warm gentle sincere-warm wise-warm questioning, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '来週、会議で、皆に、報告予定です。', en: 'Next week — meeting, will report to all.', style: 'Salaryman warm formal sincere-warm planning-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '冷静に、伝えてください。重要な役割ですよ。', en: 'Calmly convey. Important role.', style: 'Father warm gentle sincere-warm wise-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: '亮介さんの、言葉、いつも、力になります。', en: 'Ryosuke-san\'s words always become strength.', style: 'Salaryman warm soft sincere appreciating-warm grateful-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。お互い、頑張りましょう。', en: 'Same. Mutually — let\'s persevere.', style: 'Father warm gentle sincere closing-warm extending-matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 705 — sho + hina, animal facts (short)
  {
    id: 'conv_00705',
    context: 'Sho and Hina compare favorite animals after a TV show.',
    purpose: 'two-children animal preference exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['動物', '一緒', '可愛い', '楽しい', '大きい'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、ぞうさん、可愛い、おっきいね。', en: 'Sho, elephant — cute, big.', style: 'High child bright sincere enthusiastic-warm observing-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、大きい。ぼく、ライオン、好き。', en: 'Yes, big. I — like lion.', style: 'Tiny six-year-old soft small sincere bright-warm sharing-warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'ひな、うさぎ。可愛い、ちっちゃい動物、好き。', en: 'Hina — rabbit. Cute, tiny animals — like.', style: 'High child bright sincere preferring-warm enthusiastic-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '動物園、また、一緒に、行きたい。', en: 'Zoo — again, want to go together.', style: 'Tiny six-year-old soft small sincere wishing-warm inviting-warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '行こう。皆で、絶対、楽しい。', en: 'Let\'s go. All — surely fun.', style: 'High child bright sincere closing-warm committing-enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 706 — hiroshi_boss + kenji, work briefing (medium)
  {
    id: 'conv_00706',
    context: 'Hiroshi briefs Kenji on a new corporate initiative.',
    purpose: 'boss-subordinate strategy briefing with N3 vocabulary',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['計画', '情報', '重要', '説明', '対応'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、新しい計画、簡単に、説明する。', en: 'Kenji, new plan — briefly explain.', style: 'Boss firm formal authoritative composed efficient-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-composed' },
      { speaker: 'kenji_office', jp: 'はい、伺います。お願いします。', en: 'Yes, will listen. Please.', style: 'Salaryman warm formal sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '海外の情報、増えてる。対応、急ぐ必要ある。', en: 'Overseas info increasing. Response — must hurry.', style: 'Boss firm formal direct serious-composed warning-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-serious' },
      { speaker: 'kenji_office', jp: '理解しました。チーム、すぐ、集めます。', en: 'Understood. Team — immediately gather.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '重要な点、報告書、まとめろ。', en: 'Important points — report, compile.', style: 'Boss firm formal direct instructive-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '今週中に、提出いたします。', en: 'Within this week — submit.', style: 'Salaryman warm formal sincere-warm committed-respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '頼むぞ。お前の判断、信頼している。', en: 'Counting on. Your judgment — trust.', style: 'Boss firm formal direct closing-warm acknowledging-trust, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' },
      { speaker: 'kenji_office', jp: 'ありがとうございます。全力で、対応いたします。', en: 'Thank you. Full-strength response.', style: 'Salaryman warm formal sincere-warm grateful-committed closing, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 707 — asuka + sakura, cultural mentorship (medium)
  {
    id: 'conv_00707',
    context: 'Asuka mentors Sakura on a book about Japanese history and culture.',
    purpose: 'teacher-student literary mentorship N3 vocabulary',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['文化', '歴史', '重要', '本', '説明'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、この本、日本の文化、よく書かれてる。', en: 'Sakura-san, this book — Japanese culture well written.', style: 'Teacher warm gentle sincere-warm encouraging-warm mentor-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '読みます。歴史も、含まれていますか？', en: 'Will read. History — included?', style: 'Teen warm soft sincere receptive-warm asking-curious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'asuka_teacher', jp: '昔の人々の、暮らし、丁寧に、説明してる。', en: 'Old people\'s life — carefully explains.', style: 'Teacher warm gentle sincere-warm informing-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '私も、いつか、文章書きたい。', en: 'I — someday want to write text.', style: 'Teen warm soft sincere sharing-warm aspiring-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-aspiring' },
      { speaker: 'asuka_teacher', jp: '才能、ある。書く、続けて。重要な力。', en: 'Talent — exists. Writing — continue. Important strength.', style: 'Teacher warm gentle sincere-warm encouraging-warm affirming-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '感謝します。先生、いつも、本当にありがとう。', en: 'Grateful. Teacher — always truly thanks.', style: 'Teen warm soft sincere grateful-warm appreciating-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'さくらさんの成長、見ること、嬉しい。', en: 'Sakura-san\'s growth — seeing, happy.', style: 'Teacher warm gentle sincere closing-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 708 — ren + daichi, baseball with history angle (medium)
  {
    id: 'conv_00708',
    context: 'Ren and Daichi watch a baseball game and talk about the team history.',
    purpose: 'two-male sports leisure with N3 vocabulary',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['試合', '歴史', '応援', '一緒', '楽しい'],
    cast: ['ren_uni', 'daichi_kansai'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'レン、この試合、今シーズン、最高やん。', en: 'Ren, this game — this season, the best.', style: 'Kansai warm bright sincere enthusiastic-warm casual-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: '本当だ。地元チーム、歴史的にも、強い。', en: 'Truly. Local team — historically strong.', style: 'University student warm bright sincere informed-warm sharing-enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '応援、声、もっと、出そうやん。', en: 'Cheering — voice, louder.', style: 'Kansai warm bright sincere inviting-enthusiastic encouraging, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: '一緒に、皆で、盛り上がりたいね。', en: 'Together with all — want to liven up.', style: 'University student warm bright sincere agreeing-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '次の試合、ビール、用意するわ。', en: 'Next game — beer, will prepare.', style: 'Kansai warm bright sincere planning-warm casual-promising, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'いいね。試合の後、一緒に、語り合おう。', en: 'Nice. After game — talk together.', style: 'University student warm soft sincere planning-warm intimate-inviting, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ほんま、楽しいわ。', en: 'Truly — fun.', style: 'Kansai warm bright sincere closing-warm appreciative-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 709 — tatsuya + ryosuke, farm management (medium)
  {
    id: 'conv_00709',
    context: 'Tatsuya shows Ryosuke around the country farm.',
    purpose: 'rural-urban man exchange about farm management',
    ambient: 'field_morning',
    sound_effects: [],
    target_vocab: ['畑', '米', '野菜', '管理', '一緒'],
    cast: ['tatsuya_country', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '亮介さん、この畑、もうすぐ、米、収穫だ。', en: 'Ryosuke-san, this field — soon rice harvest.', style: 'Country warm low sincere unhurried steady-opening practical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: 'すごい。野菜も、たくさん、育ててますね。', en: 'Amazing. Vegetables also lots — growing.', style: 'Father warm gentle sincere-warm observing-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '土の管理、毎日、丁寧に、続けてる。', en: 'Soil management — every day, carefully continue.', style: 'Country warm low sincere unhurried practical-explaining, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: '家族、皆で、お手伝いされるの？', en: 'Family — all helping?', style: 'Father warm gentle sincere-warm curious-warm engaging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '皆で、一緒に、働く。これが、田舎の良さ。', en: 'All together work. This — country\'s goodness.', style: 'Country warm low sincere unhurried philosophical-warm sharing-deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-philosophical' },
      { speaker: 'ryosuke_dad', jp: '都会では、なかなか、味わえません。', en: 'In city — rarely taste.', style: 'Father warm gentle sincere-warm appreciative-warm reflecting, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '次回、子供たち、連れてきて。', en: 'Next time — children, bring.', style: 'Country warm low sincere unhurried inviting-warm extending, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'ぜひ。皆で、土に、触れたいです。', en: 'Definitely. All — want to touch soil.', style: 'Father warm gentle sincere closing-warm grateful-warm committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 710 — aoi + mei, baby parenting (medium)
  {
    id: 'conv_00710',
    context: 'Aoi and Mei compare notes raising their babies.',
    purpose: 'two-mother parenting confidence exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['子供', '心配', '一緒', '大切', '健康'],
    cast: ['aoi_barista', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいさん、子供、最近どう？', en: 'Aoi-san, child — recently how?', style: 'Romantic warm soft sincere bright-warm caring-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '元気だよ。でも、夜、心配、たまに。', en: 'Energetic. But — night, worried sometimes.', style: 'Barista warm soft sincere-warm sharing-vulnerable bright-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'ひかりも、夜泣き、続いてる。', en: 'Hikari too — night crying continues.', style: 'Romantic warm soft sincere matching-warm sharing-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '一緒、安心する。皆、同じだね。', en: 'Together — relieved. All same.', style: 'Barista warm soft sincere relieved-warm intimate-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '健康なら、何より、大切。', en: 'If healthy — above all important.', style: 'Romantic warm soft sincere philosophical-warm centering-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'うん。毎日、笑顔、見たい。', en: 'Yes. Every day — want to see smile.', style: 'Barista warm soft sincere wishing-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: 'お互い、頑張ろうね。', en: 'Mutually persevere.', style: 'Romantic warm soft sincere closing-warm extending-matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 711 — takeda + ren, traffic safety (short)
  {
    id: 'conv_00711',
    context: 'Officer Takeda warns Ren about a dangerous intersection.',
    purpose: 'authority-citizen traffic safety advisory',
    ambient: 'street_afternoon',
    sound_effects: ['traffic_distant'],
    target_vocab: ['状況', '注意', '安全', '道', '重要'],
    cast: ['takeda_officer', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: '君、ここの道、状況、結構危ない。', en: 'You — this road, situation, fairly dangerous.', style: 'Officer firm formal direct calm-clear advisory-opening, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: 'そうですか。気を付けます、ありがとう。', en: 'Really. Will be careful, thanks.', style: 'University student warm soft sincere-warm receptive-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'takeda_officer', jp: '夜、特に、注意。重要だぞ。', en: 'Night especially — caution. Important.', style: 'Officer firm formal direct calm-emphasizing serious, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-serious' },
      { speaker: 'ren_uni', jp: '了解。安全、一番、大切ですね。', en: 'Understood. Safety — most important.', style: 'University student warm soft sincere agreeing-warm affirming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: 'よし、気を付けて。', en: 'Good — be careful.', style: 'Officer firm formal direct closing-warm brief, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 712 — saito + naoko, health check (medium)
  {
    id: 'conv_00712',
    context: 'Dr. Saito explains a routine health check result to Naoko.',
    purpose: 'doctor-patient health result exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '検査', '説明', '結果', '重要'],
    cast: ['saito_doctor', 'naoko_aunt'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '直子さん、検査の結果、お伝えします。', en: 'Naoko-san, exam result — convey.', style: 'Doctor warm formal sincere-warm professional-calm opening, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'naoko_aunt', jp: 'はい、お願いします。少し、緊張します。', en: 'Yes — please. A little nervous.', style: 'Aunt warm soft sincere-warm vulnerable-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '全体的に、健康、問題、ありません。', en: 'Overall — health, problems none.', style: 'Doctor warm formal sincere-warm reassuring-warm calm-clear, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'naoko_aunt', jp: 'ああ、良かった。安心しました。', en: 'Ah — good. Relieved.', style: 'Aunt warm soft sincere relieved-warm grateful-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一つだけ、生活、注意点、説明しますね。', en: 'One thing — lifestyle, caution, explain.', style: 'Doctor warm formal sincere-warm advising-warm professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'naoko_aunt', jp: 'はい、伺います。重要な事、教えてください。', en: 'Yes, listening. Important things — please teach.', style: 'Aunt warm soft sincere receptive-warm engaged-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '水、しっかり、毎日、飲んでください。', en: 'Water — properly, every day, drink.', style: 'Doctor warm formal sincere-warm advising-clear practical, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'naoko_aunt', jp: '分かりました。気を付けます。ありがとうございました。', en: 'Understood. Will be careful. Thanks.', style: 'Aunt warm soft sincere closing-warm grateful-respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 713 — sho + asuka, classroom learning (medium)
  {
    id: 'conv_00713',
    context: 'Asuka helps Sho with kanji practice after class.',
    purpose: 'teacher-young-child kanji practice',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['勉強', '学校', '漢字', '一緒', '楽しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、今日の漢字、一緒に、見ましょう。', en: 'Sho-kun, today\'s kanji — together look.', style: 'Teacher warm gentle sincere-warm encouraging-warm child-friendly opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'うん。先生、難しい、ちょっと。', en: 'Yes. Teacher — difficult, a little.', style: 'Tiny six-year-old soft small sincere admitting-warm vulnerable, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: '大丈夫。ゆっくり、覚えていこう。', en: 'Okay. Slowly — remember.', style: 'Teacher warm gentle sincere-warm reassuring-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '勉強、ちょっとずつ、出来るかな。', en: 'Studying — bit by bit, can do?', style: 'Tiny six-year-old soft small sincere asking-vulnerable hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: '絶対、出来るよ。皆で、応援するから。', en: 'Surely can. All — cheer.', style: 'Teacher warm gentle sincere-warm affirming-warm encouraging-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sho_child', jp: '学校、楽しい。先生、ありがとう。', en: 'School — fun. Teacher — thanks.', style: 'Tiny six-year-old soft small sincere bright-warm appreciating-warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、しょうくん。', en: 'Same — Sho-kun.', style: 'Teacher warm gentle sincere closing-warm tender-brief, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 714 — sakura + riku, sibling reminiscence (long)
  {
    id: 'conv_00714',
    context: 'Sakura and Riku sit late looking at old family photos.',
    purpose: 'sibling-childhood memory reminiscence',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['記憶', '子供', '一緒', '楽しい', '思い出'],
    cast: ['sakura_teen', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'リク、この写真、子供の頃、覚えてる？', en: 'Riku — this photo, childhood, remember?', style: 'Teen warm soft sincere reminiscing-warm intimate-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'うん。海、皆で、行ったね。', en: 'Yes. Sea — all went.', style: 'Teen warm soft sincere recalling-warm intimate-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '夏の記憶、本当に、楽しかった。', en: 'Summer memory — truly fun.', style: 'Teen warm soft sincere appreciative-warm nostalgic-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-nostalgic' },
      { speaker: 'riku_teen', jp: 'お父さん、若い。お母さん、髪、長い。', en: 'Dad — young. Mom — hair, long.', style: 'Teen warm soft sincere observing-warm tender-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '時、本当に、早い。私、もう、十六。', en: 'Time — truly fast. I — already sixteen.', style: 'Teen warm soft sincere philosophical-warm reflecting-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-philosophical' },
      { speaker: 'riku_teen', jp: '俺、もうすぐ、十八だ。', en: 'I — soon eighteen.', style: 'Teen warm soft sincere reflecting-warm intimate-matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '子供の頃、いつも、一緒に、遊んだね。', en: 'Childhood — always, together played.', style: 'Teen warm soft sincere reminiscing-warm intimate-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'riku_teen', jp: '喧嘩も、たくさん、したけど。', en: 'Fights — lots, did though.', style: 'Teen warm soft sincere honest-warm laughing-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '懐かしい。今、もう、しないね。', en: 'Nostalgic. Now — no longer.', style: 'Teen warm soft sincere reflecting-warm gentle-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '大人、近づいてる。少し、寂しい。', en: 'Adult — approaching. A little lonely.', style: 'Teen warm soft sincere vulnerable-warm honest-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '思い出、大切に、持っていこう。', en: 'Memories — preciously, hold.', style: 'Teen warm soft sincere affirming-warm tender-resolved, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'riku_teen', jp: 'うん。これから、新しい思い出、作ろう。', en: 'Yes. From now — new memories, make.', style: 'Teen warm soft sincere forward-warm hopeful-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-hopeful' },
      { speaker: 'sakura_teen', jp: '一緒に、これからも、ずっと。', en: 'Together — from now also, always.', style: 'Teen warm soft sincere closing-warm intimate-deep promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 715 — sachiko + goro, tea (short)
  {
    id: 'conv_00715',
    context: 'Sachiko and Goro sit together for an evening cup of tea.',
    purpose: 'elderly-couple quiet tea ritual',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['茶', '文化', '一緒', '静か', '楽しい'],
    cast: ['sachiko_grandma', 'goro_grandpa'],
    frequency_tier: 4,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'おじいちゃん、お茶、入れたよ。', en: 'Grandpa — tea, made.', style: 'Grandma warm gentle sincere-warm soft-aged opening-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'goro_grandpa', jp: 'ありがとう。お前のお茶、一番だ。', en: 'Thanks. Your tea — best.', style: 'Grandpa warm gentle sincere-warm aged-deep appreciating-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'お茶の文化、続けていきたいね。', en: 'Tea culture — want to continue.', style: 'Grandma warm gentle sincere-warm philosophical-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'goro_grandpa', jp: '静かな時、本当に、楽しい。', en: 'Quiet time — truly fun.', style: 'Grandpa warm gentle sincere-warm aged-deep appreciative-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '一緒に、夕日、見ようね。', en: 'Together — sunset, look.', style: 'Grandma warm gentle sincere closing-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 716 — kenji + ryosuke, retirement future (medium)
  {
    id: 'conv_00716',
    context: 'Ryosuke and Kenji talk seriously about retirement plans.',
    purpose: 'two-men life-planning serious exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['計画', '将来', '家族', '大切', '相談'],
    cast: ['ryosuke_dad', 'kenji_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '健次さん、退職の、計画、考え始めてる。', en: 'Kenji-san — retirement plan, starting to think.', style: 'Father warm gentle sincere-warm thoughtful-opening sharing-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'kenji_office', jp: '本当ですか。将来、何、したいですか。', en: 'Truly? Future — what, want to do?', style: 'Salaryman warm gentle sincere-warm curious-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '家族と、もっと、過ごしたい。', en: 'Family — more, want to spend.', style: 'Father warm gentle sincere-warm tender-deep sharing-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '素敵な考え。優子さんも、嬉しいですね。', en: 'Lovely thought. Yumiko-san also — happy.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '優子と、相談、ちゃんと、する予定。', en: 'Yumiko — consult, properly, plan.', style: 'Father warm gentle sincere-warm planning-warm intimate, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '家族との時間、本当に、大切ですよね。', en: 'Family time — truly important.', style: 'Salaryman warm soft sincere-warm reflecting-deep affirming, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '君も、いずれ、考えるよ、健次さん。', en: 'You — eventually, will think — Kenji-san.', style: 'Father warm gentle sincere closing-warm advising-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 717 — hina + yumiko, flowers (short)
  {
    id: 'conv_00717',
    context: 'Hina helps Yumiko arrange flowers in a vase.',
    purpose: 'child-grandmother flower arrangement',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['花', '絵', '可愛い', '一緒', '楽しい'],
    cast: ['hina_child', 'yumiko_mom'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'おかあさん、お花、すごく、可愛いね。', en: 'Mom — flower, very cute.', style: 'High child bright sincere enthusiastic-warm observing-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: 'ありがとう、ひなちゃん。一緒に、生けようね。', en: 'Thanks — Hina-chan. Together — arrange.', style: 'Maternal warm gentle sincere-warm tender-warm inviting, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '後で、お花の絵、描く。', en: 'Later — flower picture, draw.', style: 'High child bright sincere planning-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '楽しみ。ひなちゃんの絵、いつも、上手。', en: 'Looking forward. Hina-chan\'s picture — always good.', style: 'Maternal warm gentle sincere-warm appreciative-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'えへへ。お花、楽しい。', en: 'Hehe. Flowers — fun.', style: 'High child bright sincere closing-warm proud-warm bashful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 718 — yuki + aoi, café new menu (medium)
  {
    id: 'conv_00718',
    context: 'Yuki tastes a new café menu Aoi is testing.',
    purpose: 'two-women casual taste-test exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['新しい', 'メニュー', 'おすすめ', '美味しい', '試す'],
    cast: ['yuki_office', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、新しいメニュー、試したい！', en: 'Aoi-chan — new menu, want to try!', style: 'Office woman bright soft sincere enthusiastic-warm opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'aoi_barista', jp: 'いいよ。今週の、おすすめ、これ。', en: 'Fine. This week\'s recommendation — this.', style: 'Barista warm soft sincere-warm bright-warm sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'いただきます。…わあ、美味しい！', en: 'Eating. …Wow — delicious!', style: 'Office woman bright soft sincere appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'aoi_barista', jp: '良かった。新しい豆、試してみた。', en: 'Good. New bean — tried.', style: 'Barista warm soft sincere-warm relieved-warm sharing-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'これ、絶対、人気、出るよ。', en: 'This — surely popular.', style: 'Office woman bright soft sincere predicting-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'aoi_barista', jp: '嬉しい。ゆきちゃんの意見、いつも参考になる。', en: 'Happy. Yuki-chan\'s opinion — always reference.', style: 'Barista warm soft sincere appreciative-warm grateful-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'また、新しい、メニュー、試させて。', en: 'Again — new menu, let try.', style: 'Office woman bright soft sincere closing-warm inviting-future, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 719 — mei + sho, math homework (medium)
  {
    id: 'conv_00719',
    context: 'Mei helps Sho with his math homework at the kitchen table.',
    purpose: 'aunt-child math homework help',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['算数', '宿題', '一緒', '勉強', '出来る'],
    cast: ['mei_romantic', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'めいおばちゃん、算数、難しい。', en: 'Mei-auntie — math, difficult.', style: 'Tiny six-year-old soft small sincere admitting-warm vulnerable-opening, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'mei_romantic', jp: 'しょうちゃん、一緒に、見ようね。', en: 'Sho-chan — together, look.', style: 'Romantic warm soft sincere-warm tender-warm inviting, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '足し算、もうちょっと、出来る。', en: 'Addition — a bit more, can do.', style: 'Tiny six-year-old soft small sincere reporting-warm hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'mei_romantic', jp: '頑張ってる、しょうちゃん。', en: 'Working hard — Sho-chan.', style: 'Romantic warm soft sincere-warm appreciative-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'この宿題、終わったら、遊んでいい？', en: 'This homework — done, play okay?', style: 'Tiny six-year-old soft small sincere asking-warm hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'mei_romantic', jp: 'うん、終わったら、皆で、外、行こう。', en: 'Yes — done, all — outside, go.', style: 'Romantic warm soft sincere-warm promising-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'やった。勉強、楽しい、ちょっと。', en: 'Yay. Studying — fun, a bit.', style: 'Tiny six-year-old soft small sincere bright-warm honest-cute, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 720 — ren + sakura, university future (medium)
  {
    id: 'conv_00720',
    context: 'Ren tells Sakura about university life as she prepares.',
    purpose: 'cousin university mentorship exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['大学', '勉強', '将来', '楽しい', '一緒'],
    cast: ['ren_uni', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、大学、どんな感じ？', en: 'Ren-bro — university, how feel?', style: 'Teen warm soft sincere curious-warm respectful-asking, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: '楽しいよ。自由、たくさん、ある。', en: 'Fun. Freedom — lots.', style: 'University student warm bright sincere-warm sharing-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: '勉強、難しい？', en: 'Studying — difficult?', style: 'Teen warm soft sincere curious-warm direct-asking, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: '深いけど、面白い。自分で、選べる。', en: 'Deep but interesting. By self — can choose.', style: 'University student warm soft sincere-warm reflecting-warm sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '将来、何、専攻、考えてる？', en: 'Future — what, major, thinking?', style: 'Teen warm soft sincere asking-warm engaged-curious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: '文化、研究、興味深い。さくらは？', en: 'Culture research — interesting. Sakura?', style: 'University student warm soft sincere-warm sharing-warm returning-question, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '私、文章、書きたい。本、出したい。', en: 'I — text, want to write. Book — want to release.', style: 'Teen warm soft sincere aspiring-warm vulnerable-confident, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-aspiring' },
      { speaker: 'ren_uni', jp: '応援するよ。一緒に、頑張ろう。', en: 'Will cheer. Together — persevere.', style: 'University student warm soft sincere closing-warm encouraging-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 721 — mrs_mori + yumiko, neighborhood news (short)
  {
    id: 'conv_00721',
    context: 'Mrs. Mori catches Yumiko at the gate with a small piece of news.',
    purpose: 'neighbor casual news exchange',
    ambient: 'gate_morning',
    sound_effects: [],
    target_vocab: ['元気', '一緒', '笑顔', '隣', '情報'],
    cast: ['mrs_mori_neighbor', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '優子さん、おはよう。お元気？', en: 'Yumiko-san — morning. Energetic?', style: 'Neighbor warm gentle sincere-warm cheerful-opening soft-aged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-cheerful' },
      { speaker: 'yumiko_mom', jp: 'おはよう、森さん。元気ですよ。', en: 'Morning — Mori-san. Energetic.', style: 'Maternal warm gentle sincere-warm bright-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mrs_mori_neighbor', jp: '隣のお店、新しい情報、聞きました？', en: 'Neighbor\'s shop — new info, heard?', style: 'Neighbor warm gentle sincere-warm bright-curious sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'いいえ、初めて。教えてください。', en: 'No — first time. Please tell.', style: 'Maternal warm gentle sincere-warm engaged-warm curious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '今度、皆で、一緒に、行きましょう。', en: 'Next time — all, together, go.', style: 'Neighbor warm gentle sincere-warm inviting-warm cheerful-closing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-cheerful' },
      { speaker: 'yumiko_mom', jp: '笑顔で、お待ちしてます。', en: 'With smile — wait.', style: 'Maternal warm gentle sincere closing-warm bright-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 722 — daichi + tatsuya, country trip (long)
  {
    id: 'conv_00722',
    context: 'Daichi visits Tatsuya in the country, plans a long mountain trip.',
    purpose: 'cousin-rural extended trip-planning',
    ambient: 'porch_morning',
    sound_effects: ['birds_distant'],
    target_vocab: ['旅行', '一緒', '楽しい', '自然', '山'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、来週、皆で、山、行こうやん。', en: 'Tatsuya — next week, all, mountain, go.', style: 'Kansai warm bright sincere enthusiastic-warm casual-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '良い案だ。自然の中、皆、喜ぶ。', en: 'Good idea. Nature inside — all, happy.', style: 'Country warm low sincere unhurried agreeing-warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '何泊くらい、考えてる？', en: 'How many nights — thinking?', style: 'Kansai warm bright sincere planning-asking, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '二泊、ゆっくり、過ごせるだろ。', en: 'Two nights — slowly, can spend.', style: 'Country warm low sincere unhurried practical-warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '皆、テント、何個、必要やろ。', en: 'All — tent, how many, needed.', style: 'Kansai warm bright sincere practical-asking enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '三つあれば、十分だな。', en: 'Three — enough.', style: 'Country warm low sincere unhurried practical-clear, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: 'メイ、ひかり、連れてっても、平気？', en: 'Mei — Hikari, bringing also okay?', style: 'Kansai warm bright sincere asking-warm caring-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'もちろん。赤ちゃん、自然、触れて。', en: 'Of course. Baby — nature, touch.', style: 'Country warm low sincere unhurried warm-affirming tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '川、近い？水、綺麗？', en: 'River — close? Water — clean?', style: 'Kansai warm bright sincere curious-asking practical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '近いし、本当に、綺麗だ。', en: 'Close and — truly clean.', style: 'Country warm low sincere unhurried reassuring-warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '夜、星、見える？', en: 'Night — stars, visible?', style: 'Kansai warm bright sincere curious-warm anticipating, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'いっぱい、見える。最高だ。', en: 'Lots — visible. Best.', style: 'Country warm low sincere unhurried appreciative-deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '皆で、一緒の旅行、本当、楽しみやわ。', en: 'All — together trip, truly, looking forward.', style: 'Kansai warm bright sincere closing-warm anticipating-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '俺も、待ってる。', en: 'I — waiting.', style: 'Country warm low sincere closing-warm brief-deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 723 — naoko + sachiko, family memory (short)
  {
    id: 'conv_00723',
    context: 'Naoko sits with Sachiko looking at old family albums.',
    purpose: 'niece-grandmother family-memory exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '思い出', '一緒', '楽しい', '大切'],
    cast: ['naoko_aunt', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'おばあちゃん、この写真、家族、皆、若いね。', en: 'Grandma — this photo, family, all, young.', style: 'Aunt warm soft sincere reminiscing-warm tender-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: '昔ね。思い出、たくさん、ある。', en: 'Long ago. Memories — lots.', style: 'Grandma warm gentle sincere-warm aged-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '一緒の時間、本当に、大切だね。', en: 'Time together — truly important.', style: 'Aunt warm soft sincere reflecting-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: 'これからも、皆で、過ごそうね。', en: 'From now — all, spend.', style: 'Grandma warm gentle sincere-warm tender-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '楽しい思い出、また、作ろうね。', en: 'Fun memories — again, make.', style: 'Aunt warm soft sincere closing-warm forward-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
  console.log('wrote', out);
}
console.log('batch_036 wrote', CONVERSATIONS.length, 'files');

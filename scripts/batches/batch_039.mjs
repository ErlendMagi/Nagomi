import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_039)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 766 — kenji + hiroshi_boss, project development (medium)
  {
    id: 'conv_00766',
    context: 'Hiroshi briefs Kenji on a new product development initiative.',
    purpose: 'boss-subordinate product development briefing',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['開発', '商品', '一般', '基本', '理解'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、新しい商品の開発、始めるぞ。', en: 'Kenji — new product development, start.', style: 'Boss firm formal direct authoritative announcing-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、概要、伺わせてください。', en: 'Yes — overview, let me hear.', style: 'Salaryman warm formal sincere-warm respectful-receptive professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '一般向け、初心者でも、使える物だ。', en: 'General-use — beginners can use.', style: 'Boss firm formal direct informative-clear professional, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '基本機能、何を、考えていますか？', en: 'Basic functions — what, considering?', style: 'Salaryman warm formal sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'シンプルさ、最優先。複雑にはするな。', en: 'Simplicity — top priority. Don\'t complicate.', style: 'Boss firm formal direct authoritative instructive-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '理解しました。来週、案、提示します。', en: 'Understood. Next week — plan, present.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '頼んだぞ。期待している。', en: 'Counting on. Expecting.', style: 'Boss firm formal direct closing-warm trusting-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 767 — sho + hina, world map (short)
  {
    id: 'conv_00767',
    context: 'Sho and Hina look at a world map together.',
    purpose: 'children world-curiosity exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['世界', '国', '一緒', '大きい', '見る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、世界、こんなに、大きい。', en: 'Sho — world, this big.', style: 'High child bright sincere enthusiastic-warm awe-opening, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'たくさん、国、あるね。', en: 'Lots — countries, exist.', style: 'Tiny six-year-old soft small sincere observing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'ひな、ここの国、行きたい。', en: 'Hina — this country, want to go.', style: 'High child bright sincere wishing-warm pointing-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ぼくも、一緒に、行く。', en: 'I too — together, go.', style: 'Tiny six-year-old soft small sincere committing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'いつか、絶対、二人で、見よう。', en: 'Someday — surely, two-people, see.', style: 'High child bright sincere closing-warm promise-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 768 — sakura + asuka, foreign movies (medium)
  {
    id: 'conv_00768',
    context: 'Sakura asks Asuka about foreign cinema.',
    purpose: 'student-teacher foreign-film exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['映画', '国', '内容', '理解', '楽しい'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、海外の映画、おすすめ、ありますか？', en: 'Teacher — overseas movies, recommendation exist?', style: 'Teen warm soft sincere asking-warm engaged-curious opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'asuka_teacher', jp: 'いろいろあるよ。どの国、興味？', en: 'Various. Which country — interest?', style: 'Teacher warm gentle sincere-warm engaged-warm asking, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'フランス、興味、あります。', en: 'France — interest, exists.', style: 'Teen warm soft sincere declaring-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '良い選択。内容、深い作品、多い。', en: 'Good choice. Content — deep works, many.', style: 'Teacher warm gentle sincere-warm informing-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '日本語、字幕、ありますか？', en: 'Japanese subtitles — exist?', style: 'Teen warm soft sincere asking-warm practical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'asuka_teacher', jp: 'ある。理解、ゆっくり、深まるよ。', en: 'Exist. Understanding — slowly, deepens.', style: 'Teacher warm gentle sincere-warm reassuring-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '楽しみ。借りて、見てみます。', en: 'Looking forward. Borrow — will see.', style: 'Teen warm soft sincere closing-warm committed-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 769 — aoi + yuki, café product (medium)
  {
    id: 'conv_00769',
    context: 'Aoi shows Yuki a new café product she\'s selling.',
    purpose: 'two-women café commerce exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['商品', '価格', '売る', '一緒', '美味しい'],
    cast: ['aoi_barista', 'yuki_office'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'ゆきちゃん、新しい商品、見て。', en: 'Yuki-chan — new product, look.', style: 'Barista warm soft sincere-warm bright-opening tender-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'わあ、可愛い。何これ？', en: 'Wow — cute. What this?', style: 'Office woman bright soft sincere enthusiastic-warm curious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'aoi_barista', jp: '手作りクッキー。お店で、売る予定。', en: 'Handmade cookies. At shop — plan to sell.', style: 'Barista warm soft sincere-warm explaining-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '美味しそう。価格、いくら？', en: 'Looks delicious. Price — how much?', style: 'Office woman bright soft sincere appreciative-warm asking-practical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'aoi_barista', jp: '一個、二百円。手頃でしょ。', en: 'One — two hundred yen. Reasonable.', style: 'Barista warm soft sincere-warm informing-warm proud-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'いいね。一緒に、味見しよう。', en: 'Nice. Together — taste.', style: 'Office woman bright soft sincere proposing-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '召し上がれ。', en: 'Please enjoy.', style: 'Barista warm soft sincere closing-warm tender-brief, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 770 — daichi + tatsuya, hometown reality (long)
  {
    id: 'conv_00770',
    context: 'Daichi and Tatsuya talk honestly about countryside reality versus city life.',
    purpose: 'cousin honest hometown reality exchange',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['現実', '過去', '町', '人々', '一緒'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、この町、人々、減ってる？', en: 'Tatsuya — this town, people, decreasing?', style: 'Kansai warm gentle sincere observing-opening serious-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'うん、現実、厳しい。', en: 'Yes — reality, harsh.', style: 'Country warm low sincere unhurried honest-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '若い人、街、出ていく？', en: 'Young people — city, leave?', style: 'Kansai warm gentle sincere asking-warm concerned, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '仕事、少ない。仕方ない。', en: 'Work — few. Can\'t help.', style: 'Country warm low sincere unhurried resigned-warm philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '過去の町、覚えてる？賑やかやったやろ。', en: 'Past town — remember? Lively.', style: 'Kansai warm gentle sincere nostalgic-warm reminiscing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '昔は、祭り、皆で、楽しんだ。', en: 'Long ago — festival, all, enjoyed.', style: 'Country warm low sincere unhurried nostalgic-deep philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: 'なんとか、出来へんかな、町のために。', en: 'Somehow — can\'t do, for town.', style: 'Kansai warm gentle sincere reflective-warm thoughtful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '小さい事から、始めるしかない。', en: 'Small things — only start.', style: 'Country warm low sincere unhurried wise-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'daichi_kansai', jp: '皆で、何か、出来そうやな。', en: 'All — something, can do.', style: 'Kansai warm gentle sincere reflective-warm hopeful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '一緒に、考えていこう。', en: 'Together — think.', style: 'Country warm low sincere unhurried inviting-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '次に来る時、案、持ってくるわ。', en: 'Next come — plan, bring.', style: 'Kansai warm bright sincere promising-warm committed, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '助かる、ほんとに。', en: 'Saved — truly.', style: 'Country warm low sincere closing-warm grateful-brief, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'この町、絶対、残すで。', en: 'This town — surely, keep.', style: 'Kansai warm bright sincere closing-warm committed-deep promise, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 771 — sho + hina, game (short)
  {
    id: 'conv_00771',
    context: 'Sho and Hina take turns at a simple computer game.',
    purpose: 'children play computer-game exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['ゲーム', '一緒', '楽しい', '順番', '頑張る'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、このゲーム、一緒に、する？', en: 'Hina — this game, together, do?', style: 'Tiny six-year-old soft small sincere inviting-warm enthusiastic-opening, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'うん、する！順番、待つね。', en: 'Yes — do! Turn, wait.', style: 'High child bright sincere enthusiastic-warm patient-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'よし、ぼく、頑張る。', en: 'Okay — I, try hard.', style: 'Tiny six-year-old soft small sincere committed-warm focused, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'すごい！次、ひなの番。', en: 'Amazing! Next — Hina\'s turn.', style: 'High child bright sincere appreciative-warm anticipating-enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、すると、楽しい。', en: 'Together — doing, fun.', style: 'Tiny six-year-old soft small sincere closing-warm appreciative-bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 772 — ren + sakura, university article (medium)
  {
    id: 'conv_00772',
    context: 'Ren shares a magazine article he wrote with Sakura.',
    purpose: 'cousin-cousin writing-sharing exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['記事', '内容', '評価', '一緒', '考える'],
    cast: ['ren_uni', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'さくら、書いた記事、読んでくれる？', en: 'Sakura — written article, will read?', style: 'University student warm soft sincere-warm vulnerable-asking opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'もちろん。何の内容？', en: 'Of course. What content?', style: 'Teen warm soft sincere engaged-warm asking-curious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: '若者の文化、変化、書いた。', en: 'Youth culture — change, wrote.', style: 'University student warm soft sincere-warm explaining-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'sakura_teen', jp: 'すごい。…うん、よく書けてる。', en: 'Amazing. …Yes — well written.', style: 'Teen warm soft sincere reading-warm appreciative-affirming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: '評価、嬉しい。書く、不安だった。', en: 'Evaluation — happy. Writing — was anxious.', style: 'University student warm soft sincere-warm grateful-warm honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、書く話、また、しよう。', en: 'Together — writing talk, again, do.', style: 'Teen warm soft sincere inviting-warm tender-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、お前と、一緒に、考えると、楽しい。', en: 'Yes — with you, together, thinking, fun.', style: 'University student warm soft sincere closing-warm appreciative-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 773 — mei + aoi, baby development (medium)
  {
    id: 'conv_00773',
    context: 'Mei tells Aoi about Hikari\'s recent milestones.',
    purpose: 'two-mother baby development exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['成長', '一緒', '可愛い', '子ども', '笑顔'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、ひかり、立った！', en: 'Aoi-chan — Hikari, stood!', style: 'Romantic warm soft sincere-warm enthusiastic-opening proud-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'aoi_barista', jp: 'えー、すごい！子どもの成長、本当に早い。', en: 'Eh — amazing! Child growth — truly fast.', style: 'Barista warm soft sincere-warm appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '昨日、急に。本当、びっくり。', en: 'Yesterday — suddenly. Truly, startled.', style: 'Romantic warm soft sincere-warm reporting-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '笑顔、見たい。今度、見せて。', en: 'Smile — want to see. Next time — show.', style: 'Barista warm soft sincere-warm asking-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: 'もちろん。可愛いよ、本当に。', en: 'Of course. Cute — truly.', style: 'Romantic warm soft sincere-warm proud-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '一緒に、子育て、楽しもう。', en: 'Together — raising, enjoy.', style: 'Barista warm soft sincere-warm inviting-warm tender-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'うん、絶対。', en: 'Yes — surely.', style: 'Romantic warm soft sincere closing-warm intimate-brief, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 774 — saito + kenji, stress advice (short)
  {
    id: 'conv_00774',
    context: 'Dr. Saito advises Kenji on managing work stress.',
    purpose: 'doctor-patient stress consultation',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['仕事', '健康', '意識', '休む', '大切'],
    cast: ['saito_doctor', 'kenji_office'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '健次さん、仕事、忙しいですか？', en: 'Kenji-san — work, busy?', style: 'Doctor warm formal sincere-warm professional-opening calm-warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'kenji_office', jp: '少し、疲れてます、最近。', en: 'A bit — tired, recently.', style: 'Salaryman warm soft sincere-warm honest-vulnerable, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '休む意識、健康のために、大切です。', en: 'Resting awareness — for health, important.', style: 'Doctor warm formal sincere-warm advising-warm caring, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '分かりました。気を付けます。', en: 'Understood. Will be careful.', style: 'Salaryman warm soft sincere-warm receptive-warm committed, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '無理せず、よろしく。', en: 'Without strain — best.', style: 'Doctor warm formal sincere closing-warm tender-warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 775 — ryosuke + yumiko, retirement reality (medium)
  {
    id: 'conv_00775',
    context: 'Ryosuke and Yumiko have a frank conversation about retirement.',
    purpose: 'married-couple retirement reality exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['現実', '将来', '一緒', '相談', '大切'],
    cast: ['ryosuke_dad', 'yumiko_mom'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '優子、退職、近づいてる。', en: 'Yumiko — retirement, approaching.', style: 'Father warm gentle sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'うん、現実、ちゃんと、考えなきゃね。', en: 'Yes — reality, properly, must think.', style: 'Maternal warm gentle sincere-warm acknowledging-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '将来の生活、どうしたい？', en: 'Future life — how want?', style: 'Father warm gentle sincere-warm probing-warm intimate, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '旅行、ゆっくり、行きたい。', en: 'Travel — slowly, want to go.', style: 'Maternal warm gentle sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'いいね。一緒に、計画、立てよう。', en: 'Nice. Together — plan, set.', style: 'Father warm gentle sincere-warm collaborative-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '健康、一番、大切ね。', en: 'Health — most, important.', style: 'Maternal warm gentle sincere-warm philosophical-warm affirming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、ずっと、過ごそう。', en: 'Together — always, spend.', style: 'Father warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 776 — mrs_mori + naoko, town center (medium)
  {
    id: 'conv_00776',
    context: 'Mrs. Mori shows Naoko the renovated town center.',
    purpose: 'two-women town-center renewal exchange',
    ambient: 'street_morning',
    sound_effects: [],
    target_vocab: ['中心', '街', '一緒', '元気', '変わる'],
    cast: ['mrs_mori_neighbor', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '直子さん、街の中心、新しくなった。', en: 'Naoko-san — town center, became new.', style: 'Neighbor warm gentle sincere-warm enthusiastic-opening bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-cheerful' },
      { speaker: 'naoko_aunt', jp: 'わあ、本当ね。広場、綺麗。', en: 'Wow — truly. Plaza, beautiful.', style: 'Aunt warm soft sincere-warm appreciative-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '人、増えて、元気な感じ。', en: 'People — increased, energetic feel.', style: 'Neighbor warm gentle sincere-warm observing-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '若い人、たくさん、いる。', en: 'Young people — lots, exist.', style: 'Aunt warm soft sincere-warm observing-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '街、変わって、嬉しいわ。', en: 'Town — changed, happy.', style: 'Neighbor warm gentle sincere-warm grateful-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'これからも、一緒に、見守ろう。', en: 'From now — together, watch over.', style: 'Aunt warm soft sincere-warm closing-warm tender-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'ね。長く、元気で、いたい。', en: 'Right. Long — energetic, want to be.', style: 'Neighbor warm gentle sincere closing-warm tender-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 777 — hina + yumiko, why game (short)
  {
    id: 'conv_00777',
    context: 'Hina pesters Yumiko with curious questions.',
    purpose: 'child-mother curious-questions exchange',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['なぜ', '質問', '一緒', '考える', '楽しい'],
    cast: ['hina_child', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'お母さん、なぜ、空、青い？', en: 'Mom — why, sky, blue?', style: 'High child bright sincere curious-opening asking-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: 'いい質問。一緒に、考えてみる？', en: 'Good question. Together — try thinking?', style: 'Maternal warm gentle sincere-warm appreciative-warm inviting, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'うん。お日様、関係、ある？', en: 'Yes. Sun — relation, exists?', style: 'High child bright sincere thinking-warm engaged, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '正解。光、関係、あるね。', en: 'Correct. Light — relation, exists.', style: 'Maternal warm gentle sincere-warm appreciative-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: '楽しい！もっと、質問する。', en: 'Fun! More — questions, do.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 778 — asuka + riku, history exam (medium)
  {
    id: 'conv_00778',
    context: 'Asuka tutors Riku for an upcoming history exam.',
    purpose: 'teacher-student exam-prep exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['歴史', '勉強', '当時', '人々', '理解'],
    cast: ['asuka_teacher', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'リク君、歴史の試験、準備、どう？', en: 'Riku-kun — history exam, prep, how?', style: 'Teacher warm gentle sincere-warm asking-warm mentor-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'まあまあ。当時の人々、覚えにくい。', en: 'So-so. At-that-time people — hard to remember.', style: 'Teen warm soft sincere honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '物語、として、理解、しよう。', en: 'Story — as, understanding, do.', style: 'Teacher warm gentle sincere-warm advising-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'なるほど、頭、入りやすい。', en: 'I see — head, enters easily.', style: 'Teen warm soft sincere appreciative-warm understanding, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'いい姿勢。勉強、楽しくなるよ。', en: 'Good posture. Studying — becomes fun.', style: 'Teacher warm gentle sincere-warm encouraging-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'ありがとう、先生。頑張ります。', en: 'Thanks — teacher. Will try hard.', style: 'Teen warm soft sincere committed-warm grateful-respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'asuka_teacher', jp: '応援、いつもしてるよ。', en: 'Cheering — always doing.', style: 'Teacher warm gentle sincere closing-warm tender-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 779 — sachiko + goro, past memory (short)
  {
    id: 'conv_00779',
    context: 'Sachiko and Goro recall their wedding day.',
    purpose: 'elderly-couple wedding-day reminiscence',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['過去', '一緒', '思い出', '結婚', '大切'],
    cast: ['sachiko_grandma', 'goro_grandpa'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'おじいちゃん、過去の結婚式、覚えてる？', en: 'Grandpa — past wedding, remember?', style: 'Grandma warm gentle sincere-warm reminiscing-warm tender-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'goro_grandpa', jp: 'もちろん。雪、降ってた。', en: 'Of course. Snow — was falling.', style: 'Grandpa warm gentle sincere-warm aged-deep recalling-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'お父さんの着物、青、綺麗だった。', en: 'Father\'s kimono — blue, beautiful.', style: 'Grandma warm gentle sincere-warm reminiscing-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'goro_grandpa', jp: 'お前の笑顔、忘れない。', en: 'Your smile — won\'t forget.', style: 'Grandpa warm gentle sincere-warm aged-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '一緒の時間、大切な思い出。', en: 'Together time — precious memories.', style: 'Grandma warm gentle sincere closing-warm philosophical-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 780 — kenji + ryosuke, work philosophy (long)
  {
    id: 'conv_00780',
    context: 'Kenji and Ryosuke talk about the value and burden of work.',
    purpose: 'two-men work-philosophy exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['価値', '仕事', '人生', '責任', '一緒'],
    cast: ['kenji_office', 'ryosuke_dad'],
    frequency_tier: 5,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '亮介さん、仕事の価値、最近、迷ってます。', en: 'Ryosuke-san — work value, recently, lost.', style: 'Salaryman warm gentle sincere-warm vulnerable-opening honest-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、皆、通る道だね。', en: 'Yes — all, pass path.', style: 'Father warm gentle sincere-warm empathic-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '責任、大きくなって、楽しさ、減って。', en: 'Responsibility — bigger, fun, decreased.', style: 'Salaryman warm gentle sincere-warm honest-vulnerable reflective, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '責任、自然に、増えていくね。', en: 'Responsibility — naturally, increases.', style: 'Father warm gentle sincere-warm acknowledging-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: '自分、本当に、これでいいのか。', en: 'Self — truly, with this okay?', style: 'Salaryman warm gentle sincere-warm vulnerable-warm philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '人生、長い。今だけで、判断しないで。', en: 'Life — long. Now-only — don\'t judge.', style: 'Father warm gentle sincere-warm advising-warm wise-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: '亮介さんも、こういう時、ありましたか？', en: 'Ryosuke-san too — such time, existed?', style: 'Salaryman warm gentle sincere-warm asking-warm curious-vulnerable, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ryosuke_dad', jp: 'もちろん。何度も、迷った。', en: 'Of course. Many times — lost.', style: 'Father warm gentle sincere-warm honest-warm sharing-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'どう、乗り越えました？', en: 'How — overcame?', style: 'Salaryman warm gentle sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ryosuke_dad', jp: '家族、友達、相談、続けた。', en: 'Family, friends — consultation, continued.', style: 'Father warm gentle sincere-warm sharing-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一人で、抱え込まない。', en: 'Alone — not carry.', style: 'Salaryman warm soft sincere-warm understanding-warm reflective, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'そう。一緒に、考える、大切。', en: 'Right. Together — thinking, important.', style: 'Father warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'ありがとうございます、本当に。', en: 'Thanks — truly.', style: 'Salaryman warm soft sincere closing-warm grateful-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'いつでも、頼ってね。', en: 'Anytime — rely.', style: 'Father warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 781 — sho + hina, simple example (short)
  {
    id: 'conv_00781',
    context: 'Hina explains a simple example of sharing to Sho.',
    purpose: 'children example-and-share exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['例', '一緒', '分ける', '楽しい', '優しい'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、例えば、お菓子、分けるね。', en: 'Sho — for example, snack, divide.', style: 'High child bright sincere demonstrating-warm enthusiastic-opening, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん。ぼくも、優しい子、なる。', en: 'Yes. I too — kind child, become.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、分けると、楽しいね。', en: 'Together — dividing, fun.', style: 'High child bright sincere appreciative-warm philosophical-bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ありがとう、ひな。', en: 'Thanks — Hina.', style: 'Tiny six-year-old soft small sincere grateful-warm tender-brief, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'えへへ、嬉しい。', en: 'Hehe — happy.', style: 'High child bright sincere closing-warm bashful-bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 782 — takeda + tatsuya, country safety (medium)
  {
    id: 'conv_00782',
    context: 'Officer Takeda chats with Tatsuya during a country patrol.',
    purpose: 'officer-farmer countryside-patrol exchange',
    ambient: 'field_morning',
    sound_effects: [],
    target_vocab: ['市', '安全', '一緒', '生活', '気を付ける'],
    cast: ['takeda_officer', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'たつやさん、こんにちは。', en: 'Tatsuya-san — hello.', style: 'Officer firm formal direct calm-warm opening-respectful, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'tatsuya_country', jp: '巡査さん、ご苦労様。', en: 'Officer — thanks for work.', style: 'Country warm low sincere unhurried respectful-warm acknowledging, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'takeda_officer', jp: '市の防犯、皆で、気を付けて。', en: 'City prevention — all, be careful.', style: 'Officer firm formal direct advisory-warm clear-instructive, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'tatsuya_country', jp: '田舎、安全、保ちたいな。', en: 'Country — safety, want to keep.', style: 'Country warm low sincere unhurried philosophical-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'takeda_officer', jp: '生活、平和に、保つ、大事。', en: 'Life — peacefully, keep, important.', style: 'Officer firm formal direct philosophical-warm caring, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'tatsuya_country', jp: '一緒に、見守ろう。', en: 'Together — watch over.', style: 'Country warm low sincere unhurried collaborative-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '頼みます。', en: 'Counting on.', style: 'Officer firm formal direct closing-warm respectful-brief, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 783 — aoi + ren, café changes (short)
  {
    id: 'conv_00783',
    context: 'Aoi tells Ren about café staffing changes.',
    purpose: 'wife-husband café update exchange',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['仕事', '変わる', '一緒', '頑張る', '相談'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'レン、お店、人、変わる。', en: 'Ren — shop, person, changes.', style: 'Barista warm soft sincere-warm reporting-opening serious-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'え、誰が、辞めるの？', en: 'Eh — who, quitting?', style: 'University student warm soft sincere-warm engaged-concerned, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'aoi_barista', jp: '先輩。私、仕事、増える。', en: 'Senior. I — work, increases.', style: 'Barista warm soft sincere-warm honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、頑張ろう。何でも、相談、して。', en: 'Together — try hard. Anything — consult.', style: 'University student warm soft sincere-warm supportive-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'ありがとう、レン。心強い。', en: 'Thanks — Ren. Heart-strong.', style: 'Barista warm soft sincere closing-warm grateful-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 784 — daichi + sho, fishing technique (short)
  {
    id: 'conv_00784',
    context: 'Daichi teaches Sho a simple fishing technique by the river.',
    purpose: 'uncle-child fishing-technique exchange',
    ambient: 'river_morning',
    sound_effects: [],
    target_vocab: ['技術', '一緒', '楽しい', '魚', '釣り'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、釣りの技術、教えるで。', en: 'Sho — fishing technique, teach.', style: 'Kansai warm bright sincere enthusiastic-opening teaching-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、習いたい。お魚、取りたい。', en: 'Yes — want to learn. Fish — want to catch.', style: 'Tiny six-year-old soft small sincere enthusiastic-warm hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: 'ゆっくり、静かに、待つ。', en: 'Slowly — quietly, wait.', style: 'Kansai warm gentle sincere teaching-warm patient, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'うん、静かに、する。', en: 'Yes — quietly, do.', style: 'Tiny six-year-old soft small sincere committed-warm focused, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: '一緒に、釣り、楽しもうな。', en: 'Together — fishing, enjoy.', style: 'Kansai warm bright sincere closing-warm tender-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 785 — hiroshi_boss + ren, internship offer (medium)
  {
    id: 'conv_00785',
    context: 'Hiroshi offers Ren a summer internship.',
    purpose: 'boss-student internship-offer exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['機会', '責任', '経験', '一緒', '頑張る'],
    cast: ['hiroshi_boss', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'レン君、インターン、来ないか？', en: 'Ren-kun — intern, won\'t come?', style: 'Boss firm formal direct authoritative inviting-warm opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: '本当ですか。良い機会、感謝です。', en: 'Truly? Good opportunity — grateful.', style: 'University student warm formal sincere-warm appreciative-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '責任、ある仕事だ。経験、なる。', en: 'Responsibility — exists work. Experience — becomes.', style: 'Boss firm formal direct informative-warm clear-encouraging, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: '是非、お願いします。学びたいです。', en: 'Definitely — please. Want to learn.', style: 'University student warm formal sincere-warm committed-warm eager, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '健次、指導役、頼んだ。', en: 'Kenji — guide role, asked.', style: 'Boss firm formal direct authoritative explaining-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: '健次さん、心強い。一緒に頑張ります。', en: 'Kenji-san — heart-strong. Together try hard.', style: 'University student warm soft sincere-warm grateful-warm committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '期待してる。来月、待ってる。', en: 'Expecting. Next month — waiting.', style: 'Boss firm formal direct closing-warm trusting-brief, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_039 wrote', CONVERSATIONS.length, 'files');

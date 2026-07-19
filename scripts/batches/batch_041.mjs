import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_041)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 806 — hiroshi_boss + kenji, problem-solving (medium)
  {
    id: 'conv_00806',
    context: 'Hiroshi and Kenji discuss solving a critical project problem.',
    purpose: 'boss-subordinate problem-resolution exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['原因', '解決', '対策', '考える', '責任'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、昨日の問題、原因、何だ。', en: 'Kenji — yesterday\'s problem, cause, what.', style: 'Boss firm formal direct authoritative probing-opening serious, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '通信、不具合、です。原因、特定中。', en: 'Communication — failure. Cause — identifying.', style: 'Salaryman warm formal sincere-warm reporting-clear professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '解決策、考えろ。今日中だ。', en: 'Solution — think. Within today.', style: 'Boss firm formal direct authoritative urgent-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '了解。チームで、対策、まとめます。', en: 'Understood. Team — response, compile.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '客先、影響、最小限に、抑えろ。', en: 'Client — effect, minimize, suppress.', style: 'Boss firm formal direct authoritative instructive-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、責任、持って、対応します。', en: 'Yes — responsibility, hold, respond.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'よし、頼んだ。', en: 'Good — counting on.', style: 'Boss firm formal direct closing-warm trusting-brief, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 807 — sho + hina, simple physics (short)
  {
    id: 'conv_00807',
    context: 'Hina and Sho watch a ball bounce and wonder why.',
    purpose: 'children physics-curiosity exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['なぜ', '一緒', '考える', '楽しい', '見る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、ボール、なぜ、跳ねる？', en: 'Sho — ball, why, bounces?', style: 'High child bright sincere curious-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うーん、わからない。', en: 'Hmm — don\'t know.', style: 'Tiny six-year-old soft small sincere thinking-warm honest, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒に、見て、考えよう。', en: 'Together — look, think.', style: 'High child bright sincere proposing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '空気、入ってる、たぶん。', en: 'Air — entered, probably.', style: 'Tiny six-year-old soft small sincere reasoning-warm thoughtful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'すごい！考えるの、楽しい。', en: 'Amazing! Thinking — fun.', style: 'High child bright sincere closing-warm appreciative-enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 808 — asuka + sakura, exam prep (medium)
  {
    id: 'conv_00808',
    context: 'Sakura asks Asuka about preparing for university entrance exams.',
    purpose: 'student-teacher exam-prep mentoring',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['試験', '勉強', '一緒', '頑張る', '相談'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、来年の試験、不安です。', en: 'Teacher — next year\'s exam, anxious.', style: 'Teen warm soft sincere vulnerable-opening honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '皆、そうだよ。早めに、相談、大切。', en: 'All — so. Early — consultation, important.', style: 'Teacher warm gentle sincere-warm reassuring-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '勉強の方法、教えてください。', en: 'Study method — please teach.', style: 'Teen warm soft sincere asking-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'asuka_teacher', jp: '毎日、少しずつ。継続が、大事。', en: 'Every day — bit by bit. Continuity — important.', style: 'Teacher warm gentle sincere-warm advising-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '頑張ります。家でも、続けます。', en: 'Try hard. At home too — continue.', style: 'Teen warm soft sincere committed-warm earnest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、頑張ろうね、最後まで。', en: 'Together — try hard, until end.', style: 'Teacher warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'ありがとうございます。', en: 'Thanks.', style: 'Teen warm soft sincere closing-warm grateful-respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' }
    ]
  },
  // 809 — mei + aoi, motherhood reflection (medium)
  {
    id: 'conv_00809',
    context: 'Mei and Aoi reflect on how motherhood has changed their identity.',
    purpose: 'two-mother identity-reflection exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['自由', '一緒', '幸せ', '大切', '変わる'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'メイ、最近、自分が、変わった感じ。', en: 'Mei — recently, self, changed feeling.', style: 'Barista warm soft sincere-warm reflective-opening honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'わかる。私も、母親、なって。', en: 'Understand. I too — mother, became.', style: 'Romantic warm soft sincere-warm empathic-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '自由、減ったけど、幸せ、増えた。', en: 'Freedom — decreased, but, happiness, increased.', style: 'Barista warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '本当ね。優先順位、はっきり、する。', en: 'Truly. Priorities — clear, become.', style: 'Romantic warm soft sincere-warm philosophical-warm affirming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '友達と、自分の時間、大切に、する。', en: 'Friend — own time, preciously, do.', style: 'Barista warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '一緒に、いられる事、嬉しい。', en: 'Together — can be, happy.', style: 'Romantic warm soft sincere-warm tender-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'これからも、頻繁に、会おうね。', en: 'From now — frequently, meet.', style: 'Barista warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 810 — ryosuke + yumiko, summer travel (long)
  {
    id: 'conv_00810',
    context: 'Ryosuke and Yumiko plan a relaxed summer onsen trip.',
    purpose: 'married-couple summer-vacation planning',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['夏', '旅行', '温泉', '一緒', '楽しい'],
    cast: ['ryosuke_dad', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '優子、今年の夏、旅行、どう？', en: 'Yumiko — this summer, travel, how?', style: 'Father warm gentle sincere-warm proposing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'いいね。温泉、行きたかった。', en: 'Nice. Onsen — wanted to go.', style: 'Maternal warm gentle sincere-warm appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '長野、京都、どっち？', en: 'Nagano — Kyoto, which?', style: 'Father warm gentle sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '京都、思い出、たくさんある。', en: 'Kyoto — memories, lots.', style: 'Maternal warm gentle sincere-warm nostalgic-warm sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '結婚式の、最初の旅行、京都だった。', en: 'Wedding — first trip, Kyoto was.', style: 'Father warm gentle sincere-warm reminiscing-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: 'もう一度、行きたいね。', en: 'Once more — want to go.', style: 'Maternal warm gentle sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '宿、予約、しよう。', en: 'Inn — reserve, do.', style: 'Father warm gentle sincere-warm decisive-warm committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '楽しみ。お父さんと、二人で、ゆっくり。', en: 'Looking forward. Father — two, slowly.', style: 'Maternal warm gentle sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '料理、温泉、何より、お前と一緒。', en: 'Food, onsen — above all, with you together.', style: 'Father warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '嬉しい、本当に。', en: 'Happy — truly.', style: 'Maternal warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: 'リク、さくらにも、土産、買って帰ろう。', en: 'Riku — Sakura, gift, buy and return.', style: 'Father warm gentle sincere-warm planning-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'ね、子供たちも、喜ぶよ。', en: 'Right — children, will be happy.', style: 'Maternal warm gentle sincere closing-warm tender-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '夏、楽しい旅行に、しよう。', en: 'Summer — fun trip, make.', style: 'Father warm gentle sincere closing-warm promise-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 811 — sho + hina, swimming pool (short)
  {
    id: 'conv_00811',
    context: 'Hina and Sho excitedly plan to go to the pool.',
    purpose: 'children pool-anticipation exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['夏', '一緒', '楽しい', 'プール', '泳ぐ'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、夏、プール、行きたい。', en: 'Sho — summer, pool, want to go.', style: 'High child bright sincere enthusiastic-opening eager, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ぼくも、行きたい！泳ぎたい。', en: 'I too — want to go! Want to swim.', style: 'Tiny six-year-old soft small sincere enthusiastic-warm matching, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '水着、新しいの、必要。', en: 'Swimsuit — new one, needed.', style: 'High child bright sincere planning-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'お母さんに、頼もう。', en: 'Mother — ask.', style: 'Tiny six-year-old soft small sincere planning-warm committed, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、泳ぐの、楽しい！', en: 'Together — swimming, fun!', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 812 — takeda + ren, traffic safety (medium)
  {
    id: 'conv_00812',
    context: 'Officer Takeda speaks with Ren about safe driving on campus.',
    purpose: 'officer-student campus traffic advisory',
    ambient: 'street_morning',
    sound_effects: [],
    target_vocab: ['道', '安全', '注意', '一緒', '大切'],
    cast: ['takeda_officer', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'レン君、自転車、注意、必要だ。', en: 'Ren-kun — bicycle, caution, needed.', style: 'Officer firm formal direct calm-advisory opening, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: 'はい、気を付けます。', en: 'Yes — will be careful.', style: 'University student warm soft sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'takeda_officer', jp: '車道、走る時、ライト、つけて。', en: 'Road — running time, light, attach.', style: 'Officer firm formal direct advisory-clear practical, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: '夜、特に、気を付けます。', en: 'Night — especially, be careful.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '皆の安全、一緒に、守ろう。', en: 'All safety — together, protect.', style: 'Officer firm formal direct collaborative-warm philosophical, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '安全、本当に、大切です。', en: 'Safety — truly, important.', style: 'University student warm soft sincere-warm affirming-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '良し、気を付けて。', en: 'Good — be careful.', style: 'Officer firm formal direct closing-warm brief-warm, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 813 — hiroshi_boss + ren, intern review (medium)
  {
    id: 'conv_00813',
    context: 'Hiroshi gives Ren an intern progress review.',
    purpose: 'boss-intern review feedback exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['成功', '段階', '評価', '一緒', '頑張る'],
    cast: ['hiroshi_boss', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'レン君、最初の段階、終わったな。', en: 'Ren-kun — first stage, finished.', style: 'Boss firm formal direct authoritative reviewing-opening calm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: 'はい、何とか、終えました。', en: 'Yes — somehow, finished.', style: 'University student warm formal sincere-warm humble-warm honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '評価、悪くない。次、期待してる。', en: 'Evaluation — not bad. Next — expecting.', style: 'Boss firm formal direct affirming-clear encouraging, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' },
      { speaker: 'ren_uni', jp: 'ありがとうございます。', en: 'Thank you.', style: 'University student warm formal sincere-warm grateful-respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '成功、自分の力、信じろ。', en: 'Success — own strength, trust.', style: 'Boss firm formal direct encouraging-warm philosophical-firm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '一緒に、頑張ります。', en: 'Together — try hard.', style: 'University student warm formal sincere-warm committed-warm humble, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '健次にも、伝えとく。', en: 'Kenji also — convey.', style: 'Boss firm formal direct closing-warm brief, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 814 — sachiko + hina, grandma-child (short)
  {
    id: 'conv_00814',
    context: 'Sachiko teaches Hina how to fold paper cranes.',
    purpose: 'grandma-child paper-folding craft exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['昔', '一緒', '楽しい', '優しい', '覚える'],
    cast: ['sachiko_grandma', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'ひなちゃん、昔の遊び、教えるね。', en: 'Hina-chan — old play, teach.', style: 'Grandma warm gentle sincere-warm tender-warm aged-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、覚えたい。', en: 'Yes — want to remember.', style: 'High child bright sincere eager-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: '折り紙、優しく、折ろう。', en: 'Paper folding — gently, fold.', style: 'Grandma warm gentle sincere-warm teaching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '一緒に、折るの、楽しい。', en: 'Together — folding, fun.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: 'いつか、ひなちゃん、教える人、なるね。', en: 'Someday — Hina-chan, teaching person, becomes.', style: 'Grandma warm gentle sincere closing-warm tender-prediction deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 815 — aoi + yuki, summer café (medium)
  {
    id: 'conv_00815',
    context: 'Aoi and Yuki discuss the café\'s summer menu.',
    purpose: 'two-women café summer menu exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['夏', 'メニュー', '冷たい', '一緒', '試す'],
    cast: ['aoi_barista', 'yuki_office'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、夏のメニュー、新しい？', en: 'Aoi-chan — summer menu, new?', style: 'Office woman bright soft sincere curious-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'aoi_barista', jp: 'うん、冷たい飲み物、増やしたよ。', en: 'Yes — cold drinks, increased.', style: 'Barista warm soft sincere-warm bright-warm sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '人気、出そうね。', en: 'Popularity — will emerge.', style: 'Office woman bright soft sincere predicting-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '一緒に、試してくれる？', en: 'Together — will try?', style: 'Barista warm soft sincere-warm asking-warm inviting, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'もちろん。これ、美味しい！', en: 'Of course. This — delicious!', style: 'Office woman bright soft sincere committed-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'aoi_barista', jp: '良かった。レンも、好き。', en: 'Good. Ren too — likes.', style: 'Barista warm soft sincere-warm relieved-warm tender-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'ふたりで、季節、楽しんでるね。', en: 'Two-people — season, enjoying.', style: 'Office woman bright soft sincere closing-warm appreciative-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 816 — sakura + riku, sibling exam talk (medium)
  {
    id: 'conv_00816',
    context: 'Sakura and Riku compare their exam preparation strategies.',
    purpose: 'sibling exam-strategy exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['試験', '勉強', '一緒', '頑張る', '相談'],
    cast: ['sakura_teen', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'さくら、試験、どう、進んでる？', en: 'Sakura — exam, how, proceeding?', style: 'Teen warm soft sincere asking-opening warm-casual, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'まあまあ。文章、書く、勉強、毎日。', en: 'So-so. Text — writing, study, daily.', style: 'Teen warm soft sincere reporting-warm honest-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '俺、理系、大変。', en: 'I — science, hard.', style: 'Teen warm soft sincere honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '相談、相手、いる？', en: 'Consult — partner, exists?', style: 'Teen warm soft sincere caring-warm asking-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'レン兄、頼ってる。', en: 'Ren-bro — relying on.', style: 'Teen warm soft sincere honest-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '私も、聞いてみよう。', en: 'I too — try asking.', style: 'Teen warm soft sincere considering-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '一緒に、頑張ろう、最後まで。', en: 'Together — try hard, until end.', style: 'Teen warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 817 — daichi + mei, plans (short)
  {
    id: 'conv_00817',
    context: 'Daichi and Mei plan a small family outing.',
    purpose: 'young-couple weekend planning exchange',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '計画', '楽しい', '休み'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'メイ、土曜、休みやから、計画しよう。', en: 'Mei — Saturday, day off, plan.', style: 'Kansai warm bright sincere proposing-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'いいね。家族で、公園、どう？', en: 'Nice. Family — park, how?', style: 'Romantic warm soft sincere-warm proposing-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ええな。ひかり、喜ぶで。', en: 'Nice. Hikari — happy.', style: 'Kansai warm bright sincere enthusiastic-warm tender-predicting, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'お弁当、作ろう。', en: 'Lunchbox — make.', style: 'Romantic warm soft sincere-warm planning-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '楽しい一日に、なりそうやな。', en: 'Fun day — likely become.', style: 'Kansai warm bright sincere closing-warm anticipating-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 818 — tatsuya + naoko, friendship (medium)
  {
    id: 'conv_00818',
    context: 'Tatsuya and Naoko reflect on their long friendship.',
    purpose: 'cousin friendship reflection exchange',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['友人', '過去', '一緒', '大切', '思い出'],
    cast: ['tatsuya_country', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'たつやくん、長い友人だね、私たち。', en: 'Tatsuya-kun — long friend, we.', style: 'Aunt warm soft sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: 'うん、子供の頃から、一緒だ。', en: 'Yes — childhood — together.', style: 'Country warm low sincere unhurried tender-deep philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '過去の思い出、たくさん、あるね。', en: 'Past memories — lots.', style: 'Aunt warm soft sincere-warm reminiscing-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '夏休み、川、よく、遊んだ。', en: 'Summer vacation — river, often, played.', style: 'Country warm low sincere unhurried nostalgic-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '懐かしい。今も、変わらない、たつやくん。', en: 'Nostalgic. Now too — unchanged, Tatsuya-kun.', style: 'Aunt warm soft sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: 'お前も、同じだ。', en: 'You too — same.', style: 'Country warm low sincere unhurried matching-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'これからも、大切な友人。', en: 'From now — precious friend.', style: 'Aunt warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 819 — ren + sakura, life direction (medium)
  {
    id: 'conv_00819',
    context: 'Ren and Sakura discuss life directions on a quiet evening.',
    purpose: 'cousin life-direction exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['自分', '立場', '一緒', '考える', '大切'],
    cast: ['ren_uni', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、自分の立場、わからない時、ある？', en: 'Ren-bro — own position, don\'t-know times, exist?', style: 'Teen warm soft sincere asking-opening vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: 'もちろん、よく、ある。', en: 'Of course — often, exist.', style: 'University student warm soft sincere-warm honest-warm empathic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'どう、考えてる？', en: 'How — thinking?', style: 'Teen warm soft sincere asking-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: 'ゆっくり、自分の気持ち、聞く。', en: 'Slowly — own feelings, listen.', style: 'University student warm soft sincere-warm philosophical-warm advising, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一人で、抱え込みがち、私。', en: 'Alone — tend to carry, I.', style: 'Teen warm soft sincere honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '俺に、相談、して。一緒に、考える。', en: 'I — consult. Together — think.', style: 'University student warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '心、軽くなった。大切な兄ちゃん。', en: 'Heart — became light. Precious bro.', style: 'Teen warm soft sincere closing-warm grateful-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 820 — kenji + ryosuke, retirement decision (long)
  {
    id: 'conv_00820',
    context: 'Ryosuke shares his decision to retire early with Kenji.',
    purpose: 'two-men major life-decision exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['仕事', '将来', '相談', '大切', '人生'],
    cast: ['ryosuke_dad', 'kenji_office'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '健次さん、大切な話、いいですか。', en: 'Kenji-san — important talk, okay?', style: 'Father warm gentle sincere-warm serious-opening intimate, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'もちろん、伺います。', en: 'Of course — listening.', style: 'Salaryman warm formal sincere-warm receptive-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'ryosuke_dad', jp: '退職、決めました、来春に。', en: 'Retirement — decided, next spring.', style: 'Father warm gentle sincere-warm announcing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'え、本当ですか。', en: 'Eh — truly?', style: 'Salaryman warm gentle sincere-warm surprised-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '優子と、ずっと、相談してきた。', en: 'Yumiko — long, consulted.', style: 'Father warm gentle sincere-warm sharing-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'お気持ち、わかります。', en: 'Feelings — understand.', style: 'Salaryman warm gentle sincere-warm empathic-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '人生、まだ、いろいろしたい。', en: 'Life — still, various want to do.', style: 'Father warm gentle sincere-warm philosophical-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '健康、第一ですから。', en: 'Health — first.', style: 'Salaryman warm gentle sincere-warm affirming-warm philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '健次さんも、自分の道、考えてね。', en: 'Kenji-san too — own path, think.', style: 'Father warm gentle sincere-warm advising-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'はい、いつか、私もそうなれたら。', en: 'Yes — someday, I too if can.', style: 'Salaryman warm gentle sincere-warm hopeful-warm reflective, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'いつでも、相談、受けますよ。', en: 'Anytime — consultation, receive.', style: 'Father warm gentle sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝します、本当に。', en: 'Grateful — truly.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'これからも、長く、付き合いましょう。', en: 'From now — long, associate.', style: 'Father warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 821 — mrs_mori + yumiko, summer garden (short)
  {
    id: 'conv_00821',
    context: 'Mrs. Mori shows Yumiko her summer vegetables.',
    purpose: 'two-women summer-garden exchange',
    ambient: 'garden_morning',
    sound_effects: [],
    target_vocab: ['夏', '野菜', '一緒', '元気', '楽しい'],
    cast: ['mrs_mori_neighbor', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '優子さん、夏野菜、見て。', en: 'Yumiko-san — summer vegetables, look.', style: 'Neighbor warm gentle sincere-warm bright-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-cheerful' },
      { speaker: 'yumiko_mom', jp: 'すごい！トマト、立派。', en: 'Amazing! Tomatoes — splendid.', style: 'Maternal warm gentle sincere-warm appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '一緒に、収穫、しましょう。', en: 'Together — harvest, do.', style: 'Neighbor warm gentle sincere-warm inviting-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '楽しい。森さん、いつも元気。', en: 'Fun. Mori-san — always energetic.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'お互い、これからも、元気でね。', en: 'Mutually — from now, energetic.', style: 'Neighbor warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 822 — saito + ryosuke, summer health (medium)
  {
    id: 'conv_00822',
    context: 'Dr. Saito advises Ryosuke about summer health precautions.',
    purpose: 'doctor-patient summer health advisory',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['夏', '健康', '注意', '水', '大切'],
    cast: ['saito_doctor', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '亮介さん、夏、特に、健康、注意ですよ。', en: 'Ryosuke-san — summer, especially, health, caution.', style: 'Doctor warm formal sincere-warm advising-opening caring, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'ryosuke_dad', jp: 'はい、暑い日、気を付けてます。', en: 'Yes — hot days, careful.', style: 'Father warm gentle sincere-warm respectful-warm reporting, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '水分、しっかり、取ってください。', en: 'Water — properly, take.', style: 'Doctor warm formal sincere-warm advising-warm practical, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'ryosuke_dad', jp: '優子も、心配性で、注意してくれます。', en: 'Yumiko too — worrier, careful for me.', style: 'Father warm gentle sincere-warm tender-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'saito_doctor', jp: '素晴らしい。家族、本当、大切ですね。', en: 'Wonderful. Family — truly, important.', style: 'Doctor warm formal sincere-warm philosophical-warm appreciative, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '長く、元気で、いたいですね。', en: 'Long — energetic, want to be.', style: 'Father warm gentle sincere-warm reflective-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'お元気で、また、いらして。', en: 'Healthy — again, come.', style: 'Doctor warm formal sincere closing-warm tender-warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 823 — hina + sachiko, granddaughter tea (short)
  {
    id: 'conv_00823',
    context: 'Hina makes tea for her grandmother for the first time.',
    purpose: 'grandchild-grandma first-tea exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['茶', '一緒', '優しい', '楽しい', '初めて'],
    cast: ['hina_child', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'おばあちゃん、お茶、ひな、初めて、入れた。', en: 'Grandma — tea, Hina, first, made.', style: 'High child bright sincere proud-opening enthusiastic-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: 'すごい、ひなちゃん。優しい子。', en: 'Amazing — Hina-chan. Kind child.', style: 'Grandma warm gentle sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '熱い？大丈夫？', en: 'Hot? Okay?', style: 'High child bright sincere caring-warm concerned, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-warm' },
      { speaker: 'sachiko_grandma', jp: 'ちょうどいい。美味しい、本当に。', en: 'Just right. Delicious — truly.', style: 'Grandma warm gentle sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '一緒に、飲もう、楽しい。', en: 'Together — drink, fun.', style: 'High child bright sincere closing-warm tender-enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 824 — asuka + ren, teaching exchange (medium)
  {
    id: 'conv_00824',
    context: 'Asuka and Ren reflect on what makes a good teacher.',
    purpose: 'teacher-alum educator-reflection exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['指導', '生徒', '一緒', '大切', '頑張る'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: '先生、いい指導者、何が、大切？', en: 'Teacher — good guide, what important?', style: 'University student warm soft sincere asking-opening curious-engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'asuka_teacher', jp: '生徒の話、聞く事。一番、大切。', en: 'Student\'s talk — listening. Most, important.', style: 'Teacher warm gentle sincere-warm philosophical-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'ren_uni', jp: 'なるほど。聞く、まずは。', en: 'I see. Listening — first.', style: 'University student warm soft sincere understanding-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、考える、姿勢。', en: 'Together — thinking, posture.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'インターン生にも、そう、してます。', en: 'Intern too — so, doing.', style: 'University student warm soft sincere-warm sharing-warm committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'いい指導者、なれる、レン君。', en: 'Good guide — can become, Ren-kun.', style: 'Teacher warm gentle sincere-warm affirming-warm encouraging-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: '頑張ります、これからも。', en: 'Try hard — from now.', style: 'University student warm soft sincere closing-warm committed-respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' }
    ]
  },
  // 825 — daichi + tatsuya, town festival (medium)
  {
    id: 'conv_00825',
    context: 'Daichi and Tatsuya plan a town summer festival together.',
    purpose: 'cousin-rural festival-planning exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['祭り', '町', '一緒', '楽しい', '頑張る'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、町の祭り、今年も、するんやろ？', en: 'Tatsuya — town festival, this year too, do?', style: 'Kansai warm bright sincere asking-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、皆で、準備、始めてる。', en: 'Yes — all, preparation, starting.', style: 'Country warm low sincere unhurried steady-reporting, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '俺も、手伝うで。', en: 'I too — help.', style: 'Kansai warm bright sincere committing-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '助かる。屋台、人手、足りない。', en: 'Saved. Stalls — workers, not enough.', style: 'Country warm low sincere unhurried grateful-warm honest, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'メイ、ひかりも、連れて行くで。', en: 'Mei — Hikari, bring.', style: 'Kansai warm bright sincere proposing-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '皆、来ると、楽しい。', en: 'All — coming, fun.', style: 'Country warm low sincere unhurried appreciative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '一緒に、頑張ろうな。', en: 'Together — try hard.', style: 'Kansai warm bright sincere closing-warm tender-promise, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_041 wrote', CONVERSATIONS.length, 'files');

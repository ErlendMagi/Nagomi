import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_047)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 926 — hiroshi_boss + kenji, market research (medium)
  {
    id: 'conv_00926',
    context: 'Hiroshi reviews Kenji\'s market research findings.',
    purpose: 'boss-subordinate market-research exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['市場', '研究', '分析', '一緒', '考える'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、市場研究、結果、見せろ。', en: 'Kenji — market research, result, show.', style: 'Boss firm formal direct authoritative demanding-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、分析、まとまりました。', en: 'Yes — analysis, compiled.', style: 'Salaryman warm formal sincere-warm professional-warm reporting, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '若い層、伸びてる、見える。', en: 'Young layer — growing, visible.', style: 'Boss firm formal direct observing-warm clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、対策、立てています。', en: 'Yes — response, setting.', style: 'Salaryman warm formal sincere-warm professional-warm committed, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '一緒に、考えていこう。', en: 'Together — think.', style: 'Boss firm formal direct collaborative-warm encouraging, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '来週、案、提出します。', en: 'Next week — plan, submit.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '期待してる。', en: 'Expecting.', style: 'Boss firm formal direct closing-brief trusting-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 927 — sho + hina, simple example (short)
  {
    id: 'conv_00927',
    context: 'Hina gives Sho an example of how to say something nicely.',
    purpose: 'children example-teaching exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['例えば', '一緒', '優しい', '楽しい', '話す'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、例えば、お礼の言葉、ね。', en: 'Sho — for example, thanks word.', style: 'High child bright sincere teaching-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '「ありがとう」、優しい、言葉。', en: '"Thanks" — kind, word.', style: 'Tiny six-year-old soft small sincere understanding-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒に、たくさん、言おう。', en: 'Together — lots, say.', style: 'High child bright sincere enthusiastic-warm encouraging, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、毎日。', en: 'Yes — every day.', style: 'Tiny six-year-old soft small sincere committing-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '話すの、楽しい。', en: 'Talking — fun.', style: 'High child bright sincere closing-warm tender-bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 928 — asuka + riku, exam prep (medium)
  {
    id: 'conv_00928',
    context: 'Asuka helps Riku prepare for entrance exams.',
    purpose: 'teacher-student exam-prep exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['試験', '勉強', '一緒', '頑張る', '相談'],
    cast: ['asuka_teacher', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'リク君、試験勉強、進んでる？', en: 'Riku-kun — exam study, proceeding?', style: 'Teacher warm gentle sincere-warm asking-opening caring, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'まあまあ、です。数学、難しい。', en: 'So-so. Math — difficult.', style: 'Teen warm soft sincere honest-warm humble, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、見ようか。', en: 'Together — look?', style: 'Teacher warm gentle sincere-warm welcoming-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'はい、ありがとうございます。', en: 'Yes — thanks.', style: 'Teen warm soft sincere grateful-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'asuka_teacher', jp: '相談、いつでも、いいよ。', en: 'Consult — anytime, okay.', style: 'Teacher warm gentle sincere-warm welcoming-warm warm-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '頑張ります、最後まで。', en: 'Try hard — until end.', style: 'Teen warm soft sincere committed-warm determined, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '応援、ずっと、してる。', en: 'Cheering — long, doing.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 929 — aoi + ren, café finance (medium)
  {
    id: 'conv_00929',
    context: 'Aoi shares café finances with Ren over the kitchen table.',
    purpose: 'married-couple finance exchange',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['年間', '予算', '一緒', '頑張る', '相談'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'レン、年間の予算、確認しよう。', en: 'Ren — yearly budget, confirm.', style: 'Barista warm soft sincere-warm serious-opening collaborative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、見せて。', en: 'Yes — show.', style: 'University student warm soft sincere-warm engaged-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '材料費、増えてる。', en: 'Material cost — increasing.', style: 'Barista warm soft sincere-warm honest-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '相談、よく、しよう。', en: 'Consult — well, do.', style: 'University student warm soft sincere-warm supportive-warm collaborative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '一緒に、頑張ろう。', en: 'Together — try hard.', style: 'Barista warm soft sincere-warm appreciative-warm committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '俺も、できる事、する。', en: 'I too — possible things, do.', style: 'University student warm soft sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '心強い、いつも。', en: 'Heart-strong — always.', style: 'Barista warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 930 — mei + daichi, baby growth (long)
  {
    id: 'conv_00930',
    context: 'Mei and Daichi discuss Hikari\'s development milestones.',
    purpose: 'married-couple baby-development reflection',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['成長', '一緒', '子ども', '大切', '幸せ'],
    cast: ['mei_romantic', 'daichi_kansai'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、ひかり、もう、一歳半。', en: 'Daichi — Hikari, already, one-and-half.', style: 'Romantic warm soft sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'ほんま、早いなぁ。', en: 'Truly — fast.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '成長、毎日、見える。', en: 'Growth — every day, visible.', style: 'Romantic warm soft sincere-warm tender-warm proud, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '今日、走った、ひかり。', en: 'Today — ran, Hikari.', style: 'Kansai warm bright sincere excited-warm proud, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'え、本当？すごい！', en: 'Eh — truly? Amazing!', style: 'Romantic warm soft sincere-warm surprised-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'daichi_kansai', jp: 'すぐ、転んだけどな。', en: 'Soon — fell though.', style: 'Kansai warm bright sincere honest-warm laughing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '可愛い、本当に。', en: 'Cute — truly.', style: 'Romantic warm soft sincere-warm tender-deep appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '子ども、見るの、楽しいわ。', en: 'Child — seeing, fun.', style: 'Kansai warm bright sincere appreciative-warm philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '大切な、時間、過ごせて、幸せ。', en: 'Precious — time, can spend, happy.', style: 'Romantic warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '俺も、毎日、ありがたい。', en: 'I too — every day, grateful.', style: 'Kansai warm bright sincere matching-warm tender-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '一緒に、見守れる、嬉しい。', en: 'Together — can watch, happy.', style: 'Romantic warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'これからも、ずっと、一緒や。', en: 'From now — always, together.', style: 'Kansai warm bright sincere closing-warm tender-promise deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'うん、絶対。', en: 'Yes — surely.', style: 'Romantic warm soft sincere closing-warm tender-deep promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 931 — hina + sho, weather (short)
  {
    id: 'conv_00931',
    context: 'Sho and Hina see fall leaves outside.',
    purpose: 'children seasonal-observation exchange',
    ambient: 'window_morning',
    sound_effects: [],
    target_vocab: ['秋', '一緒', '楽しい', '葉', '可愛い'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、秋、来た。葉っぱ、赤い。', en: 'Hina — autumn, came. Leaves, red.', style: 'Tiny six-year-old soft small sincere observing-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '綺麗だね、外、行こう。', en: 'Beautiful — outside, go.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '葉っぱ、可愛い、集めたい。', en: 'Leaves — cute, want to collect.', style: 'Tiny six-year-old soft small sincere enthusiastic-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、お散歩、しよう。', en: 'Together — walk, do.', style: 'High child bright sincere inviting-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '秋、楽しい。', en: 'Autumn — fun.', style: 'Tiny six-year-old soft small sincere closing-warm bright-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 932 — takeda + tatsuya, town protection (medium)
  {
    id: 'conv_00932',
    context: 'Takeda holds a town protection meeting with Tatsuya.',
    purpose: 'officer-farmer community-protection exchange',
    ambient: 'plaza_morning',
    sound_effects: [],
    target_vocab: ['保護', '町', '一緒', '安全', '考える'],
    cast: ['takeda_officer', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'たつやさん、町の保護、皆と、相談したい。', en: 'Tatsuya-san — town protection, with all, want to consult.', style: 'Officer firm formal direct calm-opening collaborative, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'tatsuya_country', jp: 'うん、何を、考えてる？', en: 'Yes — what, considering?', style: 'Country warm low sincere unhurried receptive-warm engaged, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'takeda_officer', jp: '夜の見回り、強化、必要。', en: 'Night patrol — strengthen, needed.', style: 'Officer firm formal direct advisory-clear practical, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'tatsuya_country', jp: '若い人にも、協力、頼もう。', en: 'Young people too — cooperation, ask.', style: 'Country warm low sincere unhurried collaborative-warm philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'takeda_officer', jp: '一緒に、町、守ろう。', en: 'Together — town, protect.', style: 'Officer firm formal direct philosophical-warm warm, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'tatsuya_country', jp: '皆で、安全な町、続けよう。', en: 'All — safe town, continue.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'Officer firm formal direct closing-warm grateful-brief, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 933 — kenji + ren, technical mentorship (medium)
  {
    id: 'conv_00933',
    context: 'Kenji teaches Ren about an issue resolution method.',
    purpose: 'senior-junior issue-resolution exchange',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['解決', '方法', '一緒', '考える', '頑張る'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、この問題、どう、解決する？', en: 'Ren-kun — this problem, how, solve?', style: 'Salaryman warm formal sincere-warm probing-opening teaching, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'まず、原因、探します。', en: 'First — cause, search.', style: 'University student warm soft sincere-warm thoughtful-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'kenji_office', jp: 'いい考え方。次の方法は？', en: 'Good thinking. Next method?', style: 'Salaryman warm formal sincere-warm affirming-warm probing, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'チームに、相談、します。', en: 'Team — consult, do.', style: 'University student warm soft sincere-warm collaborative-warm committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '正解。一緒に、考える、大切。', en: 'Correct. Together — thinking, important.', style: 'Salaryman warm formal sincere-warm philosophical-warm encouraging, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、自分でも、考えます。', en: 'Try hard — by self too, think.', style: 'University student warm soft sincere-warm committed-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'いいぞ、その姿勢。', en: 'Good — that posture.', style: 'Salaryman warm soft sincere closing-warm affirming-tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 934 — sachiko + hina, traditional craft (short)
  {
    id: 'conv_00934',
    context: 'Sachiko teaches Hina to weave a small basket.',
    purpose: 'grandma-child craft-teaching exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '頑張る', '伝統'],
    cast: ['sachiko_grandma', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'ひなちゃん、伝統の編み、教えるね。', en: 'Hina-chan — traditional weaving, teach.', style: 'Grandma warm gentle sincere-warm teaching-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、頑張る！', en: 'Yes — try hard!', style: 'High child bright sincere committing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: '優しく、ゆっくり、ね。', en: 'Gently — slowly.', style: 'Grandma warm gentle sincere-warm tender-warm patient, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '一緒に、するの、楽しい。', en: 'Together — doing, fun.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: 'いつか、ひなちゃん、教える人、なるね。', en: 'Someday — Hina-chan, teaching person, become.', style: 'Grandma warm gentle sincere closing-warm tender-prediction deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 935 — yuki + naoko, women's hospital (medium)
  {
    id: 'conv_00935',
    context: 'Yuki and Naoko discuss going to a women\'s clinic together.',
    purpose: 'two-women health-checkup exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['女性', '病院', '一緒', '健康', '相談'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、女性病院、一緒に、行きませんか？', en: 'Naoko-san — women\'s clinic, together, won\'t go?', style: 'Office woman bright soft sincere proposing-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '健康診断？私も、考えてた。', en: 'Health checkup? I too — considering.', style: 'Aunt warm soft sincere-warm engaged-warm matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '一人より、二人で、安心。', en: 'Alone than — two-people, relieved.', style: 'Office woman bright soft sincere honest-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '本当ね、相談、しやすい。', en: 'Truly — consult, easy.', style: 'Aunt warm soft sincere-warm agreeing-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '来月、予約しよう。', en: 'Next month — reserve.', style: 'Office woman bright soft sincere committed-warm practical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '健康、大切な、年齢になった。', en: 'Health — precious, age became.', style: 'Aunt warm soft sincere-warm philosophical-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'yuki_office', jp: '一緒に、頑張ろうね。', en: 'Together — try hard.', style: 'Office woman bright soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 936 — sakura + asuka, contest result (long)
  {
    id: 'conv_00936',
    context: 'Sakura tells Asuka her writing competition result.',
    purpose: 'teacher-student contest-result exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['結果', '作品', '一緒', '頑張る', '大切'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、コンテストの結果、出ました。', en: 'Teacher — contest result, came.', style: 'Teen warm soft sincere announcing-opening nervous-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'どう、だった？', en: 'How — was?', style: 'Teacher warm gentle sincere-warm engaged-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sakura_teen', jp: '佳作、いただきました。', en: 'Honorable mention — received.', style: 'Teen warm soft sincere humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'おめでとう、本当に！', en: 'Congratulations — truly!', style: 'Teacher warm gentle sincere-warm enthusiastic-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '先生のお陰、本当に。', en: 'Teacher\'s thanks — truly.', style: 'Teen warm soft sincere humble-warm grateful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'さくらさんの努力、認められた。', en: 'Sakura-san\'s effort — recognized.', style: 'Teacher warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '嬉しい、けど、もっと、頑張りたい。', en: 'Happy — but, more, want to try.', style: 'Teen warm soft sincere honest-warm humble-determined, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'その姿勢、素晴らしい。', en: 'That posture — wonderful.', style: 'Teacher warm gentle sincere-warm appreciative-warm proud, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '作品、これからも、書き続ける。', en: 'Work — from now, keep writing.', style: 'Teen warm soft sincere committed-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、見ていこう。', en: 'Together — see.', style: 'Teacher warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '夢、ずっと、追います。', en: 'Dream — long, chase.', style: 'Teen warm soft sincere committed-warm hopeful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '大切な、一歩。', en: 'Precious — step.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'ありがとうございます、本当に。', en: 'Thanks — truly.', style: 'Teen warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 937 — sho + hina, math (short)
  {
    id: 'conv_00937',
    context: 'Hina helps Sho with a simple math problem.',
    purpose: 'children math-help exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['数', '一緒', '頑張る', '楽しい', '考える'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、この数、わからない。', en: 'Hina — this number, don\'t know.', style: 'Tiny six-year-old soft small sincere asking-opening vulnerable, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒に、考えよう、しょう。', en: 'Together — think, Sho.', style: 'High child bright sincere supporting-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '三足す二、五、かな？', en: 'Three plus two — five, maybe?', style: 'Tiny six-year-old soft small sincere thinking-warm hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '正解！すごい！', en: 'Correct! Amazing!', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、頑張ったよ。', en: 'Fun — tried hard.', style: 'Tiny six-year-old soft small sincere closing-warm proud-bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 938 — ryosuke + tatsuya, country planning (medium)
  {
    id: 'conv_00938',
    context: 'Ryosuke and Tatsuya plan a small business in the country.',
    purpose: 'cousin business-plan exchange',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['計画', '一緒', '考える', '相談', '頑張る'],
    cast: ['ryosuke_dad', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'たつや、退職後の計画、相談、いいですか？', en: 'Tatsuya — post-retirement plan, consult, okay?', style: 'Father warm gentle sincere-warm asking-opening respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'もちろん、何でも。', en: 'Of course — anything.', style: 'Country warm low sincere unhurried welcoming-warm warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '田舎で、小さい商売、考えてる。', en: 'Country — small business, considering.', style: 'Father warm gentle sincere-warm sharing-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'いいな、何の商売？', en: 'Nice — what business?', style: 'Country warm low sincere unhurried engaged-warm curious, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ryosuke_dad', jp: '野菜、販売、考えてる。', en: 'Vegetable — sale, considering.', style: 'Father warm gentle sincere-warm explaining-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '一緒に、頑張ろうや。', en: 'Together — try hard.', style: 'Country warm low sincere unhurried committed-warm collaborative, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: 'ありがとう、心強い。', en: 'Thanks — heart-strong.', style: 'Father warm gentle sincere closing-warm grateful-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 939 — hiroshi_boss + kenji, change management (medium)
  {
    id: 'conv_00939',
    context: 'Hiroshi and Kenji handle organizational change.',
    purpose: 'boss-subordinate change-handling exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['変更', '対策', '一緒', '考える', '責任'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、組織変更、説明する。', en: 'Kenji — organization change, explain.', style: 'Boss firm formal direct authoritative announcing-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、伺います。', en: 'Yes — listen.', style: 'Salaryman warm formal sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '部署、二つ、統合、する。', en: 'Department — two, merge, do.', style: 'Boss firm formal direct authoritative clear-decisive, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '対策、必要ですね。', en: 'Response — needed.', style: 'Salaryman warm formal sincere-warm thoughtful-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '一緒に、計画、立てよう。', en: 'Together — plan, set.', style: 'Boss firm formal direct collaborative-warm encouraging, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '責任、全力で、果たします。', en: 'Responsibility — full strength, fulfill.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '頼んだぞ。', en: 'Counting on.', style: 'Boss firm formal direct closing-brief trusting-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 940 — daichi + sho, fishing season (short)
  {
    id: 'conv_00940',
    context: 'Daichi takes Sho fishing in autumn.',
    purpose: 'uncle-child seasonal-fishing exchange',
    ambient: 'river_morning',
    sound_effects: [],
    target_vocab: ['秋', '釣り', '一緒', '楽しい', '頑張る'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、秋の釣り、いい時期や。', en: 'Sho — autumn fishing, good time.', style: 'Kansai warm bright sincere appreciative-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、ぼく、頑張る。', en: 'Yes — I, try hard.', style: 'Tiny six-year-old soft small sincere committing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: 'お魚、たくさん、いるで。', en: 'Fish — lots, exist.', style: 'Kansai warm bright sincere predicting-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、取りたい。', en: 'Together — want to catch.', style: 'Tiny six-year-old soft small sincere wishing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '楽しい、一日、しよう。', en: 'Fun — day, do.', style: 'Kansai warm bright sincere closing-warm tender-promise, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 941 — asuka + ren, teaching practice (medium)
  {
    id: 'conv_00941',
    context: 'Asuka observes Ren\'s student teaching practice.',
    purpose: 'teacher-trainee teaching-practice exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['指導', '生徒', '一緒', '頑張る', '考え方'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、生徒の指導、上手かった。', en: 'Ren-kun — student guidance, was skilled.', style: 'Teacher warm gentle sincere-warm appreciative-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'ありがとうございます、緊張しました。', en: 'Thanks — was tense.', style: 'University student warm soft sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '考え方、伝わってた。', en: 'Way of thinking — conveyed.', style: 'Teacher warm gentle sincere-warm affirming-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: '皆、興味、持ってくれた。', en: 'All — interest, held.', style: 'University student warm soft sincere-warm grateful-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、もっと、研究しよう。', en: 'Together — more, research.', style: 'Teacher warm gentle sincere-warm collaborative-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、本当に。', en: 'Try hard — truly.', style: 'University student warm soft sincere-warm committed-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '応援、いつもしてる。', en: 'Cheering — always.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 942 — aoi + yuki, friendship talk (long)
  {
    id: 'conv_00942',
    context: 'Aoi and Yuki have a long heart-to-heart over Yuki\'s overseas decision.',
    purpose: 'two-women deep friendship-decision exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['友達', '海外', '一緒', '相談', '大切'],
    cast: ['aoi_barista', 'yuki_office'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、海外、決めたよ。', en: 'Aoi-chan — overseas, decided.', style: 'Office woman bright soft sincere announcing-opening vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'え、本当？すごい決断。', en: 'Eh — truly? Amazing decision.', style: 'Barista warm soft sincere-warm surprised-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'ずっと、迷ってた、けど。', en: 'Long — lost, but.', style: 'Office woman bright soft sincere honest-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '応援、絶対、する。', en: 'Cheer — surely, do.', style: 'Barista warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '友達、離れる、寂しい。', en: 'Friend — leaving, lonely.', style: 'Office woman bright soft sincere honest-warm vulnerable-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '心は、ずっと、一緒。', en: 'Heart — long, together.', style: 'Barista warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '本当に、嬉しい。', en: 'Truly — happy.', style: 'Office woman bright soft sincere grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '相談、いつでも、ね。', en: 'Consult — anytime.', style: 'Barista warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '帰国の度、会いに、来る。', en: 'Each return — meeting, come.', style: 'Office woman bright soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'うん、待ってる。', en: 'Yes — waiting.', style: 'Barista warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '大切な、友達。', en: 'Precious — friend.', style: 'Office woman bright soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Barista warm soft sincere-warm matching-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '頑張ってくる、ね。', en: 'Try hard come — right.', style: 'Office woman bright soft sincere closing-warm committed-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 943 — hina + yumiko, helping mother (short)
  {
    id: 'conv_00943',
    context: 'Hina helps Yumiko fold laundry.',
    purpose: 'mother-child helping exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '頑張る', '手伝う'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、洗濯物、一緒に、たたもう。', en: 'Hina-chan — laundry, together, fold.', style: 'Maternal warm gentle sincere-warm inviting-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、お手伝い、頑張る。', en: 'Yes — help, try hard.', style: 'High child bright sincere committing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '優しい子、ね、ひなちゃん。', en: 'Kind child — Hina-chan.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'お母さんの、お手伝い、楽しい。', en: 'Mother\'s — help, fun.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: 'これからも、ね。', en: 'From now — right.', style: 'Maternal warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 944 — saito + ryosuke, retirement health (medium)
  {
    id: 'conv_00944',
    context: 'Saito advises Ryosuke about post-retirement health.',
    purpose: 'doctor-patient retirement-health exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '相談', '大切', '生活'],
    cast: ['saito_doctor', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '亮介さん、退職後、健康、注意ですよ。', en: 'Ryosuke-san — post-retirement, health, caution.', style: 'Doctor warm formal sincere-warm advising-opening caring, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'ryosuke_dad', jp: 'はい、生活、変わりますね。', en: 'Yes — life, changes.', style: 'Father warm gentle sincere-warm acknowledging-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '運動、続ける、大切。', en: 'Exercise — continuing, important.', style: 'Doctor warm formal sincere-warm advising-warm clear, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'ryosuke_dad', jp: '優子と、毎日、散歩、します。', en: 'Yumiko — every day, walk, do.', style: 'Father warm gentle sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '素敵な習慣、ですね。', en: 'Lovely habit — right.', style: 'Doctor warm formal sincere-warm appreciative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、健康、保ちたい。', en: 'Together — health, want to keep.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '相談、いつでも、いいですよ。', en: 'Consult — anytime, okay.', style: 'Doctor warm formal sincere closing-warm warm-promise tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 945 — mrs_mori + sachiko, autumn memories (medium)
  {
    id: 'conv_00945',
    context: 'Mrs. Mori and Sachiko share autumn childhood memories.',
    purpose: 'elderly-women autumn-memory exchange',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['秋', '昔', '思い出', '一緒', '大切'],
    cast: ['mrs_mori_neighbor', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '佐知子さん、秋、好き？', en: 'Sachiko-san — autumn, like?', style: 'Neighbor warm gentle sincere-warm asking-opening curious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sachiko_grandma', jp: '一番、好きな季節、ね。', en: 'Most — favorite season.', style: 'Grandma warm gentle sincere-warm declaring-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: '昔の思い出、たくさん、ある。', en: 'Old memories — lots.', style: 'Neighbor warm gentle sincere-warm nostalgic-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '子供の頃、栗、拾った。', en: 'Childhood — chestnuts, picked.', style: 'Grandma warm gentle sincere-warm reminiscing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: '懐かしい！柿も、よく食べた。', en: 'Nostalgic! Persimmon too — often ate.', style: 'Neighbor warm gentle sincere-warm reminiscing-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '一緒の、秋の思い出。', en: 'Together — autumn memory.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: '大切な、時間、ね。', en: 'Precious — time.', style: 'Neighbor warm gentle sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_047 wrote', CONVERSATIONS.length, 'files');

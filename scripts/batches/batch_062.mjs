import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_062)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1226 — hiroshi_boss + kenji, formal report (medium)
  {
    id: 'conv_01226',
    context: 'Hiroshi and Kenji discuss a formal market survey report.',
    purpose: 'business-formal report exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['調査', '結果', '現在', '利用', '提供'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、調査の結果、現在、まとめてる。', en: 'Kenji — survey result, currently, compiling.', style: 'Boss firm formal direct authoritative-opening clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、進捗、伺います。', en: 'Yes — progress, listen.', style: 'Salaryman warm formal sincere-warm professional-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '利用者、増えてる、提供、サービス、好評。', en: 'Users — increasing, provided, service, well-received.', style: 'Boss firm formal direct informative-clear professional, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '素晴らしい、本当に。', en: 'Wonderful — truly.', style: 'Salaryman warm formal sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '結果、次の段階、検討しよう。', en: 'Result — next stage, consider.', style: 'Boss firm formal direct authoritative collaborative, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '今週中に、案、提出します。', en: 'Within this week — plan, submit.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '頼んだぞ。', en: 'Counting on.', style: 'Boss firm formal direct closing-brief trusting-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 1227 — sakura + ren, blog discussion (medium)
  {
    id: 'conv_01227',
    context: 'Sakura asks Ren about starting an online blog.',
    purpose: 'cousin blog-startup exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['ブログ', 'サイト', '一緒', '相談', 'ネット'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、ブログ、始めたい。', en: 'Ren-bro — blog, want to start.', style: 'Teen warm soft sincere announcing-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'いいね、サイト、設計、考えてる？', en: 'Nice — site, design, considering?', style: 'University student warm soft sincere-warm engaged-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sakura_teen', jp: 'うん、相談、したくて。', en: 'Yes — consult, wanted.', style: 'Teen warm soft sincere honest-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'ネット、本当、便利な世界。', en: 'Net — truly, convenient world.', style: 'University student warm soft sincere-warm philosophical-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '読者、増やしたい、本当に。', en: 'Readers — want to increase, truly.', style: 'Teen warm soft sincere committed-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、考えていこう。', en: 'Together — think.', style: 'University student warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当に、いつも。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1228 — saito + ryosuke, society health (medium)
  {
    id: 'conv_01228',
    context: 'Saito and Ryosuke discuss broader health-care issues.',
    purpose: 'doctor-elderly society-health exchange',
    ambient: 'clinic_afternoon',
    sound_effects: [],
    target_vocab: ['制度', '国民', '事実', '健康', '議論'],
    cast: ['saito_doctor', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '亮介さん、健康制度、最近、変わって、ね。', en: 'Ryosuke-san — health system, recently, changed.', style: 'Doctor warm formal sincere-warm philosophical-opening engaged, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'ryosuke_dad', jp: '本当、国民、心配、する事、多い。', en: 'Truly — citizens, worry, things, many.', style: 'Father warm gentle sincere-warm honest-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '事実、丁寧に、伝える、大切。', en: 'Fact — carefully, convey, precious.', style: 'Doctor warm formal sincere-warm advising-warm philosophical, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '議論、本当、必要、ですね。', en: 'Debate — truly, needed.', style: 'Father warm gentle sincere-warm philosophical-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '皆で、考えていく、本当に。', en: 'All — think, truly.', style: 'Doctor warm formal sincere-warm collaborative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、進む、大切。', en: 'Together — proceed, precious.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '本当に、頑張って、いきましょう。', en: 'Truly — try hard.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1229 — sho + hina, science fair (short)
  {
    id: 'conv_01229',
    context: 'Sho explains his science fair project to Hina.',
    purpose: 'children science-project exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['科学', '一緒', '頑張る', '楽しい', '勉強'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、科学の実験、しよう。', en: 'Hina — science experiment, do.', style: 'Tiny six-year-old soft small sincere proposing-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'うん、楽しそう、頑張る。', en: 'Yes — looks fun, try hard.', style: 'High child bright sincere enthusiastic-warm committed, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '水、色、変わる、本当に。', en: 'Water — color, changes, truly.', style: 'Tiny six-year-old soft small sincere amazed-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'すごい、勉強、楽しい。', en: 'Amazing — study, fun.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、もっと、しよう。', en: 'Together — more, do.', style: 'Tiny six-year-old soft small sincere closing-warm tender-promise, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 1230 — kenji + ryosuke, retirement plan (long)
  {
    id: 'conv_01230',
    context: 'Kenji and Ryosuke discuss financial planning for retirement.',
    purpose: 'mentor-mentee financial-planning exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['投資', '提供', '相談', '一緒', '考える'],
    cast: ['ryosuke_dad', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '亮介さん、相談、いいですか？', en: 'Ryosuke-san — consult, okay?', style: 'Salaryman warm formal sincere-warm asking-opening respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'もちろん、何でも、ね。', en: 'Of course — anything.', style: 'Father warm gentle sincere-warm welcoming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '将来、投資、考えてる、本当に。', en: 'Future — investment, considering, truly.', style: 'Salaryman warm formal sincere-warm thoughtful-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'いい考え、ね。', en: 'Good thought.', style: 'Father warm gentle sincere-warm affirming-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'kenji_office', jp: '銀行、提供、いろんな案、本当に多い。', en: 'Bank — offers, various plans, truly many.', style: 'Salaryman warm formal sincere-warm informative-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '焦らず、ゆっくり、考えよう。', en: 'Without rush — slowly, think.', style: 'Father warm gentle sincere-warm advising-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: '家族の意見、まず、聞きます。', en: 'Family opinion — first, listen.', style: 'Salaryman warm soft sincere-warm philosophical-warm committed, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '本当、それが、一番、大切。', en: 'Truly — that, most, precious.', style: 'Father warm gentle sincere-warm affirming-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '相談、感謝、本当に。', en: 'Consult — grateful, truly.', style: 'Salaryman warm formal sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '一緒に、考えていこう。', en: 'Together — think.', style: 'Father warm gentle sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '本当、心強い、本当に。', en: 'Truly — heart-strong, truly.', style: 'Salaryman warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: 'これからも、頼って、ね。', en: 'From now — rely.', style: 'Father warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'はい、本当に、感謝。', en: 'Yes — truly, grateful.', style: 'Salaryman warm formal sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1231 — asuka + sakura, modern literature (medium)
  {
    id: 'conv_01231',
    context: 'Asuka and Sakura discuss modern Japanese literature.',
    purpose: 'teacher-author literature-discussion exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['現代', '日本人', '作品', '一緒', '感謝'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、現代の作品、本当、深い。', en: 'Sakura-san — modern works, truly, deep.', style: 'Teacher warm gentle sincere-warm philosophical-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '日本人の感性、独特、ですね。', en: 'Japanese sensitivity — unique.', style: 'Teen warm soft sincere appreciative-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '時代、変わっても、本当、繊細。', en: 'Era — changing, truly, delicate.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '伝統、繋いで、いきたい、本当に。', en: 'Tradition — connect, want to, truly.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'お前の作品、本当、立派。', en: 'Your works — truly, splendid.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '一緒に、これからも、ね。', en: 'Together — from now.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1232 — daichi + sho, sports player (short)
  {
    id: 'conv_01232',
    context: 'Daichi and Sho watch a famous baseball player on TV.',
    purpose: 'uncle-child sports-fan exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['選手', '一緒', '頑張る', '応援', '楽しい'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、この選手、すごいで、本当。', en: 'Sho — this player, amazing, truly.', style: 'Kansai warm bright sincere appreciative-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、応援、ぼくも、する。', en: 'Yes — cheer, I too, do.', style: 'Tiny six-year-old soft small sincere committed-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '頑張ってる、本当、立派。', en: 'Trying hard — truly, splendid.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '一緒に、見るの、楽しい。', en: 'Together — watching, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '次の試合、また、見ような。', en: 'Next game — again, watch.', style: 'Kansai warm bright sincere closing-warm tender-promise, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1233 — yuki + naoko, environmental talk (medium)
  {
    id: 'conv_01233',
    context: 'Yuki and Naoko discuss the environment over coffee.',
    purpose: 'two-women environment exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['環境', '一緒', '大切', '頑張る', '相談'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、環境、本当、大切ですね。', en: 'Naoko-san — environment, truly, precious.', style: 'Office woman bright soft sincere philosophical-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'うん、田舎、本当、自然、感じる。', en: 'Yes — country, truly, nature, feel.', style: 'Aunt warm soft sincere-warm matching-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '子供たち、未来、本当、考える。', en: 'Children — future, truly, think.', style: 'Office woman bright soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '皆で、頑張る、本当に、大切。', en: 'All — try hard, truly, precious.', style: 'Aunt warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '相談、ずっと、続けたい。', en: 'Consult — long, want to continue.', style: 'Office woman bright soft sincere tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '一緒に、考えていこう、ね。', en: 'Together — think.', style: 'Aunt warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'Office woman bright soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1234 — hina + sho, math hundred (short)
  {
    id: 'conv_01234',
    context: 'Hina and Sho count by hundreds.',
    purpose: 'children counting-hundreds exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['百', '一緒', '楽しい', '頑張る', '数'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、百、二百、三百。', en: 'Sho — hundred, two-hundred, three-hundred.', style: 'High child bright sincere counting-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、ぼくも、頑張る。', en: 'Yes — I too, try hard.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、もっと、数えよう。', en: 'Together — more, count.', style: 'High child bright sincere proposing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、勉強、本当に。', en: 'Fun — study, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '頑張ろう、千、まで。', en: 'Try hard — to thousand.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1235 — hiroshi_boss + ren, formal mentorship (medium)
  {
    id: 'conv_01235',
    context: 'Hiroshi formally invites Ren to a business event.',
    purpose: 'senior-alum formal-invite exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '感謝', '指導', '大切'],
    cast: ['hiroshi_boss', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'レン君、来月の式典、来てくれ。', en: 'Ren-kun — next month\'s ceremony, come.', style: 'Boss firm formal direct inviting-opening tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '光栄です、絶対、伺います。', en: 'Honored — surely, attend.', style: 'University student warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: 'お前の指導、本当、立派、感謝。', en: 'Your guidance — truly, splendid, grateful.', style: 'Boss firm formal direct appreciative-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'こちらこそ、本当、ずっと。', en: 'Same — truly, long.', style: 'University student warm soft sincere-warm matching-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '一緒に、教育、繋いで、いこう。', en: 'Together — education, connect.', style: 'Boss firm formal direct philosophical-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、本当に。', en: 'Try hard — truly.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '大切な、繋がり、ね。', en: 'Precious — connection.', style: 'Boss firm formal direct closing-warm tender-deep philosophical, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1236 — mei + daichi, family discussion (medium)
  {
    id: 'conv_01236',
    context: 'Mei and Daichi discuss family priorities seriously.',
    purpose: 'married-couple priorities exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '相談', '大切', '頑張る'],
    cast: ['mei_romantic', 'daichi_kansai'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、家族の話、しよう。', en: 'Daichi — family talk, do.', style: 'Romantic warm soft sincere-warm serious-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'うん、何でも、相談、いつでも。', en: 'Yes — anything, consult, anytime.', style: 'Kansai warm bright sincere welcoming-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '子供たち、教育、考えてる。', en: 'Children — education, considering.', style: 'Romantic warm soft sincere-warm thoughtful-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '一緒に、考えていこう、ね。', en: 'Together — think.', style: 'Kansai warm bright sincere collaborative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '本当、家族、皆、大切。', en: 'Truly — family, all, precious.', style: 'Romantic warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '頑張ろう、これからも、ずっと。', en: 'Try hard — from now, long.', style: 'Kansai warm bright sincere committed-warm tender-promise, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '感謝、本当に、いつも。', en: 'Grateful — truly, always.', style: 'Romantic warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1237 — sakura + kenji, business event (medium)
  {
    id: 'conv_01237',
    context: 'Sakura attends Kenji\'s business event as a guest speaker.',
    purpose: 'author-businessman event exchange',
    ambient: 'plaza_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '夢', '頑張る', '大切'],
    cast: ['sakura_teen', 'kenji_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '健次さん、お招き、感謝です。', en: 'Kenji-san — invitation, grateful.', style: 'Teen warm soft sincere humble-opening respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'kenji_office', jp: 'こちらこそ、来てくれて、本当に、嬉しい。', en: 'Same — came, truly, happy.', style: 'Salaryman warm formal sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '皆さんに、お話、頑張ります。', en: 'Everyone — talk, try hard.', style: 'Teen warm soft sincere committed-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '夢、繋がる、感じ、本当に。', en: 'Dream — connect, feel, truly.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、ここまで、本当に、感謝。', en: 'Together — until here, truly, grateful.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'Salaryman warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'これからも、ね、頑張ろう。', en: 'From now — try hard.', style: 'Teen warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1238 — naoko + yumiko, sister-bond (medium)
  {
    id: 'conv_01238',
    context: 'Naoko and Yumiko share a long sisterly afternoon.',
    purpose: 'sister-in-law afternoon exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '感謝', '大切', '楽しい'],
    cast: ['naoko_aunt', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: '優子さん、家族、皆、近くで、嬉しい。', en: 'Yumiko-san — family, all, close, happy.', style: 'Aunt warm soft sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '本当、田舎、来て、よかった。', en: 'Truly — country, came, good.', style: 'Maternal warm gentle sincere-warm matching-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '一緒に、過ごす、本当、宝。', en: 'Together — spend, truly, treasure.', style: 'Aunt warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '感謝、毎日、本当に。', en: 'Grateful — every day, truly.', style: 'Maternal warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '大切な、姉、本当に。', en: 'Precious — sister, truly.', style: 'Aunt warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Maternal warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Aunt warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1239 — sho + sachiko, ancient story (short)
  {
    id: 'conv_01239',
    context: 'Sachiko tells Sho an old story about ancient times.',
    purpose: 'grandma-child ancient-story exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['昔', '一緒', '楽しい', '優しい', '聞く'],
    cast: ['sachiko_grandma', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'しょうくん、昔の話、聞きたい？', en: 'Sho-kun — old story, want to listen?', style: 'Grandma warm gentle sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'うん、優しい、お話？', en: 'Yes — kind, story?', style: 'Tiny six-year-old soft small sincere asking-warm hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sachiko_grandma', jp: 'うん、楽しい、お話よ。', en: 'Yes — fun, story.', style: 'Grandma warm gentle sincere-warm reassuring-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '一緒に、聞ける、嬉しい。', en: 'Together — can listen, happy.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sachiko_grandma', jp: '大切な、思い出、ね。', en: 'Precious — memory.', style: 'Grandma warm gentle sincere closing-warm tender-philosophical deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1240 — kenji + hiroshi_boss, business decision (long)
  {
    id: 'conv_01240',
    context: 'Kenji asks Hiroshi for advice on a major business decision.',
    purpose: 'successor-mentor major-decision exchange',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['会社', '一緒', '相談', '頑張る', '大切'],
    cast: ['kenji_office', 'hiroshi_boss'],
    frequency_tier: 5,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '部長、大事な相談、いいですか？', en: 'Boss — important consultation, okay?', style: 'Salaryman warm formal sincere-warm asking-opening serious, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: 'もちろん、何でも、ね。', en: 'Of course — anything.', style: 'Boss firm formal direct welcoming-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '会社、海外、進出、考えてる。', en: 'Company — overseas, expand, considering.', style: 'Salaryman warm formal sincere-warm thoughtful-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '大きな決断、本当に。', en: 'Big decision — truly.', style: 'Boss firm formal direct philosophical-warm thoughtful, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'リスク、ある、けど、可能性、見える。', en: 'Risk — exists, but, possibility, visible.', style: 'Salaryman warm formal sincere-warm honest-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'お前の判断、信頼してる、本当に。', en: 'Your judgment — trust, truly.', style: 'Boss firm formal direct affirming-warm tender-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' },
      { speaker: 'kenji_office', jp: '本当、感謝、本当に。', en: 'Truly — grateful, truly.', style: 'Salaryman warm formal sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '皆と、一緒に、進めば、安心。', en: 'With all — together, proceed, relieved.', style: 'Boss firm formal direct philosophical-warm reassuring, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '家族にも、相談、します。', en: 'Family too — consult.', style: 'Salaryman warm soft sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'それが、一番、大切。', en: 'That — most, precious.', style: 'Boss firm formal direct affirming-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '頑張ります、本当に。', en: 'Try hard — truly.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '応援、ずっと、する。', en: 'Cheer — long, do.', style: 'Boss firm formal direct closing-warm tender-promise deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '本当、心強い、本当に。', en: 'Truly — heart-strong, truly.', style: 'Salaryman warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1241 — daichi + ryosuke, family bond (short)
  {
    id: 'conv_01241',
    context: 'Daichi and Ryosuke share an evening drink.',
    purpose: 'son-in-law father-in-law evening exchange',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '感謝', '楽しい', '大切'],
    cast: ['daichi_kansai', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '亮介さん、一緒に、お酒、嬉しい。', en: 'Ryosuke-san — together, drink, happy.', style: 'Kansai warm bright sincere appreciative-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: 'うん、家族、本当、いいね。', en: 'Yes — family, truly, good.', style: 'Father warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '感謝、本当に、いつも。', en: 'Grateful — truly, always.', style: 'Kansai warm bright sincere grateful-deep tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: '楽しい、毎日、ね。', en: 'Fun — every day.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '大切な、出会い、ね。', en: 'Precious — meeting.', style: 'Kansai warm bright sincere closing-warm tender-deep philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1242 — asuka + ren, education future (medium)
  {
    id: 'conv_01242',
    context: 'Asuka and Ren discuss the future of education.',
    purpose: 'mentor-colleague education-future exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['指導', '一緒', '生徒', '大切', '考え方'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、教育、本当、変わってる。', en: 'Ren-kun — education, truly, changing.', style: 'Teacher warm gentle sincere-warm philosophical-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、本当、考え方、新しい必要。', en: 'Yes — truly, way of thinking, new needed.', style: 'University student warm soft sincere-warm philosophical-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '生徒、本当、優しい、子、ばかり。', en: 'Students — truly, kind, children, only.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、繋いで、いきたい、本当に。', en: 'Together — connect, want to, truly.', style: 'University student warm soft sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '指導、本当、お前らしい。', en: 'Guidance — truly, you-like.', style: 'Teacher warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: '大切な、繋がり、本当に。', en: 'Precious — connection, truly.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: '応援、ずっと、する。', en: 'Cheer — long, do.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1243 — yuki + aoi, women returning home (medium)
  {
    id: 'conv_01243',
    context: 'Yuki and Aoi celebrate Yuki\'s permanent return.',
    purpose: 'two-women return-celebration exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '友達', '感謝', '楽しい', '幸せ'],
    cast: ['yuki_office', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、本当、戻ってこれた。', en: 'Aoi-chan — truly, could return.', style: 'Office woman bright soft sincere reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '本当、嬉しい、ずっと、待ってた。', en: 'Truly — happy, long, was waiting.', style: 'Barista warm soft sincere-warm tender-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '友達、本当、大切。', en: 'Friend — truly, precious.', style: 'Office woman bright soft sincere tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: '感謝、本当に、いつも。', en: 'Grateful — truly, always.', style: 'Barista warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '一緒に、楽しい時間、また、ね。', en: 'Together — fun time, again.', style: 'Office woman bright soft sincere tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '幸せ、本当に。', en: 'Happy — truly.', style: 'Barista warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: 'これからも、ね、ずっと。', en: 'From now — long.', style: 'Office woman bright soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1244 — sho + asuka, simple geography (short)
  {
    id: 'conv_01244',
    context: 'Asuka teaches Sho about prefectures.',
    purpose: 'teacher-child geography exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['県', '一緒', '楽しい', '勉強', '頑張る'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、日本、四十七、県、ある。', en: 'Sho-kun — Japan, forty-seven, prefectures, exist.', style: 'Teacher warm gentle sincere-warm teaching-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'すごい、たくさん、ある、ね。', en: 'Amazing — many, exist.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、覚えていこう、ね。', en: 'Together — remember.', style: 'Teacher warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '頑張る、本当、楽しい。', en: 'Try hard — truly, fun.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '勉強、本当、楽しい、ね。', en: 'Study — truly, fun.', style: 'Teacher warm gentle sincere closing-warm tender-philosophical warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1245 — kenji + ren, business society (medium)
  {
    id: 'conv_01245',
    context: 'Kenji and Ren discuss society and business roles.',
    purpose: 'businessman-teacher society exchange',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['一緒', '社会', '感謝', '大切', '頑張る'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、社会、本当、変わってる。', en: 'Ren-kun — society, truly, changing.', style: 'Salaryman warm soft sincere-warm philosophical-opening engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、若い人、本当、頑張ってる。', en: 'Yes — young people, truly, trying hard.', style: 'University student warm soft sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '会社、教育、本当、繋がってる。', en: 'Company — education, truly, connected.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、頑張る、嬉しい。', en: 'Together — try hard, happy.', style: 'University student warm soft sincere-warm tender-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '大切な、繋がり、本当に。', en: 'Precious — connection, truly.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: 'これからも、ね、頑張ろう。', en: 'From now — try hard.', style: 'Salaryman warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_062 wrote', CONVERSATIONS.length, 'files');

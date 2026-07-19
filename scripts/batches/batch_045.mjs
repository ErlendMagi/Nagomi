import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_045)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 886 — hiroshi_boss + kenji, budget analysis (medium)
  {
    id: 'conv_00886',
    context: 'Hiroshi reviews Kenji\'s detailed budget analysis.',
    purpose: 'boss-subordinate budget-analysis exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['分析', '予算', '詳細', '一緒', '考える'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、予算の分析、見せろ。', en: 'Kenji — budget analysis, show.', style: 'Boss firm formal direct authoritative demanding-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、詳細、まとめました。', en: 'Yes — details, compiled.', style: 'Salaryman warm formal sincere-warm professional-warm reporting, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '人件費、思った以上だ。', en: 'Labor cost — more than thought.', style: 'Boss firm formal direct observing-warm clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、対策、考えてます。', en: 'Yes — response, considering.', style: 'Salaryman warm formal sincere-warm professional-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '一緒に、見直そう。', en: 'Together — re-review.', style: 'Boss firm formal direct collaborative-warm encouraging, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '詳細、もっと、確認します。', en: 'Details — more, confirm.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'よろしく頼む。', en: 'Best — counting on.', style: 'Boss firm formal direct closing-brief trusting-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 887 — sho + hina, counting hundred (short)
  {
    id: 'conv_00887',
    context: 'Sho and Hina count to one hundred together.',
    purpose: 'children counting-game exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['百', '一緒', '楽しい', '頑張る', '数'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、百まで、数える、出来る？', en: 'Hina — to hundred, count, can?', style: 'Tiny six-year-old soft small sincere proposing-opening challenging, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'うん、頑張る！', en: 'Yes — try hard!', style: 'High child bright sincere enthusiastic-warm confident, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、数えよう。', en: 'Together — count.', style: 'Tiny six-year-old soft small sincere inviting-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一、二、三、四、五…百！', en: 'One, two, three, four, five — hundred!', style: 'High child bright sincere counting-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'やった！楽しい数。', en: 'Yay! Fun numbers.', style: 'Tiny six-year-old soft small sincere closing-warm bright-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 888 — asuka + sakura, France philosophy (medium)
  {
    id: 'conv_00888',
    context: 'Asuka and Sakura discuss French philosophical thinking.',
    purpose: 'teacher-student philosophy exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['フランス', '考え方', '人間', '一緒', '考える'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、フランスの考え方、興味、ある？', en: 'Sakura-san — French thinking, interest, exist?', style: 'Teacher warm gentle sincere-warm asking-opening curious-engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'はい、すごく。', en: 'Yes — very.', style: 'Teen warm soft sincere enthusiastic-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'asuka_teacher', jp: '人間、深く、考える、文化。', en: 'Human — deeply, think, culture.', style: 'Teacher warm gentle sincere-warm explaining-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '哲学者、多いと、聞きました。', en: 'Philosophers — many, heard.', style: 'Teen warm soft sincere informed-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '本も、たくさん、ある。一緒に、読む？', en: 'Books too — many, exist. Together — read?', style: 'Teacher warm gentle sincere-warm inviting-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'はい、ぜひ。', en: 'Yes — definitely.', style: 'Teen warm soft sincere committing-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '考える時間、楽しい時間。', en: 'Thinking time — fun time.', style: 'Teacher warm gentle sincere closing-warm tender-philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 889 — aoi + ren, café popular item (medium)
  {
    id: 'conv_00889',
    context: 'Aoi tells Ren which café items are most popular.',
    purpose: 'wife-husband café-business exchange',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['人気', '商品', '一緒', '頑張る', '楽しい'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'レン、新しい商品、人気だよ。', en: 'Ren — new item, popular.', style: 'Barista warm soft sincere-warm enthusiastic-opening proud, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当？嬉しいね。', en: 'Truly? Happy.', style: 'University student warm soft sincere-warm appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '一日、五十個、売れる。', en: 'One day — fifty pieces, sell.', style: 'Barista warm soft sincere-warm reporting-warm proud, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'すごい数。お疲れ様。', en: 'Amazing number. Good work.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '皆、一緒に、頑張った。', en: 'All — together, tried hard.', style: 'Barista warm soft sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '次の商品、楽しみだね。', en: 'Next item — looking forward.', style: 'University student warm soft sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '相談、また、しよう。', en: 'Consult — again, do.', style: 'Barista warm soft sincere closing-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 890 — mei + daichi, baby education (long)
  {
    id: 'conv_00890',
    context: 'Mei and Daichi discuss approaches to Hikari\'s education.',
    purpose: 'married-couple baby-education exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['教育', '考え方', '一緒', '子ども', '大切'],
    cast: ['mei_romantic', 'daichi_kansai'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、ひかりの教育、考えよう。', en: 'Daichi — Hikari\'s education, think.', style: 'Romantic warm soft sincere-warm serious-opening philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'うん、もう、始まる時やな。', en: 'Yes — already, time begins.', style: 'Kansai warm bright sincere acknowledging-warm engaged, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '私たち、どんな考え方、したい？', en: 'We — what way of thinking, want?', style: 'Romantic warm soft sincere-warm probing-warm collaborative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'daichi_kansai', jp: '自由に、育てたい。', en: 'Freely — raise.', style: 'Kansai warm bright sincere honest-warm philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '私もそう。好きな事、選べるように。', en: 'I too. Liked things — can choose.', style: 'Romantic warm soft sincere-warm matching-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '人間として、優しい子に、なってほしい。', en: 'As human — kind child, want to become.', style: 'Kansai warm bright sincere philosophical-warm tender-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'うん、大切な事、伝えたい。', en: 'Yes — precious things, want to convey.', style: 'Romantic warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '勉強、無理させない。', en: 'Study — won\'t force.', style: 'Kansai warm bright sincere committed-warm philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '楽しく、学ぶの、大事ね。', en: 'Fun — learning, important.', style: 'Romantic warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '一緒に、考えていこう。', en: 'Together — think.', style: 'Kansai warm bright sincere collaborative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'ひかり、幸せな子に。', en: 'Hikari — happy child.', style: 'Romantic warm soft sincere-warm wishing-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '家族、一番、大切や。', en: 'Family — most, precious.', style: 'Kansai warm bright sincere closing-warm philosophical-deep tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '本当に、感謝してる。', en: 'Truly — grateful.', style: 'Romantic warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 891 — hina + sho, possible (short)
  {
    id: 'conv_00891',
    context: 'Hina asks Sho if they can stay up late.',
    purpose: 'children possibility-question exchange',
    ambient: 'bedroom_evening',
    sound_effects: [],
    target_vocab: ['可能', '一緒', '楽しい', '楽しみ', '夜'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、今夜、遅くまで、可能？', en: 'Sho — tonight, until late, possible?', style: 'High child bright sincere asking-opening hopeful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うーん、お母さん、聞こう。', en: 'Hmm — mother, ask.', style: 'Tiny six-year-old soft small sincere thinking-warm practical, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒に、お話、したい。', en: 'Together — talk, want.', style: 'High child bright sincere wishing-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '夜、楽しみ。', en: 'Night — looking forward.', style: 'Tiny six-year-old soft small sincere anticipating-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい時間、一緒に。', en: 'Fun time — together.', style: 'High child bright sincere closing-warm tender-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 892 — kenji + ryosuke, life examples (medium)
  {
    id: 'conv_00892',
    context: 'Ryosuke shares life examples with Kenji about handling stress.',
    purpose: 'father-figure life-examples mentoring',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['例', '人生', '相談', '一緒', '大切'],
    cast: ['ryosuke_dad', 'kenji_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '健次さん、例を、話します。', en: 'Kenji-san — example, talk.', style: 'Father warm gentle sincere-warm wise-opening sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'はい、伺います。', en: 'Yes — listen.', style: 'Salaryman warm soft sincere-warm receptive-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'ryosuke_dad', jp: '私も、若い頃、迷った。', en: 'I too — young, lost.', style: 'Father warm gentle sincere-warm sharing-warm honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'どう、解決しましたか？', en: 'How — solved?', style: 'Salaryman warm gentle sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ryosuke_dad', jp: '人生、長く、見る、大切。', en: 'Life — long, see, important.', style: 'Father warm gentle sincere-warm philosophical-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: '深いですね。', en: 'Deep.', style: 'Salaryman warm soft sincere-warm appreciative-warm reflective, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、考えていこう。', en: 'Together — think.', style: 'Father warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 893 — sakura + asuka, popular novel (medium)
  {
    id: 'conv_00893',
    context: 'Sakura asks Asuka about a recent popular novel.',
    purpose: 'student-teacher book-recommend exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['人気', '映画', '本', '一緒', '考える'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、最近、人気の本、ありますか？', en: 'Teacher — recently, popular book, exist?', style: 'Teen warm soft sincere asking-opening curious-engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'asuka_teacher', jp: 'うん、新人作家、注目してる。', en: 'Yes — new author, watching.', style: 'Teacher warm gentle sincere-warm informing-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '映画にも、なった、聞きました。', en: 'Movie — became, heard.', style: 'Teen warm soft sincere informed-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'そう、本、先に読むの、おすすめ。', en: 'Yes — book, first read, recommend.', style: 'Teacher warm gentle sincere-warm advising-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、感想、話せる？', en: 'Together — impressions, can talk?', style: 'Teen warm soft sincere asking-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'もちろん、楽しみ。', en: 'Of course — looking forward.', style: 'Teacher warm gentle sincere-warm welcoming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'すぐ、買ってみます。', en: 'Soon — buy try.', style: 'Teen warm soft sincere closing-warm committed-bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 894 — daichi + sho, fishing time (short)
  {
    id: 'conv_00894',
    context: 'Daichi explains how long fishing takes to catch a fish.',
    purpose: 'uncle-child fishing time exchange',
    ambient: 'river_morning',
    sound_effects: [],
    target_vocab: ['時間', '一緒', '頑張る', '釣り', '楽しい'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ダイチおじさん、いつ、お魚、来る？', en: 'Daichi-uncle — when, fish, comes?', style: 'Tiny six-year-old soft small sincere asking-opening curious, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-curious' },
      { speaker: 'daichi_kansai', jp: '時間、かかるで。じっくり待つ。', en: 'Time — takes. Patiently wait.', style: 'Kansai warm bright sincere teaching-warm patient, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'ぼく、頑張って待つ。', en: 'I — try hard wait.', style: 'Tiny six-year-old soft small sincere committed-warm focused, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: '一緒に、釣り、楽しいやん。', en: 'Together — fishing, fun.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '初めての釣り、覚える。', en: 'First fishing — remember.', style: 'Tiny six-year-old soft small sincere closing-warm promise-bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 895 — takeda + tatsuya, town protection (medium)
  {
    id: 'conv_00895',
    context: 'Takeda discusses local protection efforts with Tatsuya.',
    purpose: 'officer-farmer community protection exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['保護', '町', '一緒', '安全', '大切'],
    cast: ['takeda_officer', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'たつやさん、町の保護、皆で。', en: 'Tatsuya-san — town protection, all.', style: 'Officer firm formal direct calm-opening collaborative, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'tatsuya_country', jp: 'うん、大切な、町だ。', en: 'Yes — precious, town.', style: 'Country warm low sincere unhurried philosophical-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'takeda_officer', jp: '若い人にも、伝えていこう。', en: 'Young people too — convey.', style: 'Officer firm formal direct advisory-warm caring, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'tatsuya_country', jp: '安全な町、続けたい。', en: 'Safe town — want to continue.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '一緒に、頑張りましょう。', en: 'Together — try hard.', style: 'Officer firm formal direct collaborative-warm warm, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'tatsuya_country', jp: 'いつでも、相談、する。', en: 'Anytime — consult, do.', style: 'Country warm low sincere unhurried warm-promise tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '感謝、心強い。', en: 'Grateful — heart-strong.', style: 'Officer firm formal direct closing-warm grateful-brief, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 896 — hiroshi_boss + kenji, year-end goals (long)
  {
    id: 'conv_00896',
    context: 'Hiroshi and Kenji set year-end goals.',
    purpose: 'boss-subordinate goal-setting exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['目標', '年間', '一緒', '頑張る', '責任'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、年末の目標、決めるぞ。', en: 'Kenji — year-end goal, decide.', style: 'Boss firm formal direct authoritative announcing-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、伺います。', en: 'Yes — listen.', style: 'Salaryman warm formal sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '年間、売上、二割、上げる。', en: 'Year — sales, two parts, rise.', style: 'Boss firm formal direct authoritative clear-numerical, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '高い目標、ですね。', en: 'High goal — right.', style: 'Salaryman warm formal sincere-warm observing-warm thoughtful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '挑戦、無いと、伸びない。', en: 'Challenge — without, won\'t grow.', style: 'Boss firm formal direct philosophical-warm clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'チーム、一緒に、頑張ります。', en: 'Team — together, try hard.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '責任、お前にある。', en: 'Responsibility — yours.', style: 'Boss firm formal direct authoritative clear-direct, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、全力で、取り組みます。', en: 'Yes — full strength, engage.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '段階を、分けて、進めろ。', en: 'Stages — divide, proceed.', style: 'Boss firm formal direct advisory-clear instructive, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '了解です、計画、立てます。', en: 'Understood — plan, set.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'チームと、共有、忘れるな。', en: 'Team — sharing, don\'t forget.', style: 'Boss firm formal direct authoritative reminding-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、皆と、一緒に、進めます。', en: 'Yes — all, together, proceed.', style: 'Salaryman warm formal sincere-warm collaborative-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '期待してる、頼んだぞ。', en: 'Expecting — counting on.', style: 'Boss firm formal direct closing-warm trusting-firm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 897 — hina + sho, simple ratio (short)
  {
    id: 'conv_00897',
    context: 'Hina divides candy among friends with Sho.',
    purpose: 'children sharing-ratio exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '友達', '分ける'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、お菓子、皆で、分けよう。', en: 'Sho — snack, all, divide.', style: 'High child bright sincere proposing-opening generous, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、優しい、ひな。', en: 'Yes — kind, Hina.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一人、三個、ずつ。', en: 'One person — three pieces, each.', style: 'High child bright sincere counting-warm fair, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '友達、皆、嬉しい。', en: 'Friends — all, happy.', style: 'Tiny six-year-old soft small sincere observing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、皆で、食べる。', en: 'Fun — all, eat.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 898 — mrs_mori + yumiko, kindergarten teacher (medium)
  {
    id: 'conv_00898',
    context: 'Mrs. Mori and Yumiko discuss Hina\'s kindergarten teacher.',
    purpose: 'neighbor-mother education exchange',
    ambient: 'gate_morning',
    sound_effects: [],
    target_vocab: ['先生', '幼稚園', '一緒', '優しい', '安心'],
    cast: ['mrs_mori_neighbor', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '優子さん、ひなちゃんの先生、どう？', en: 'Yumiko-san — Hina-chan\'s teacher, how?', style: 'Neighbor warm gentle sincere-warm asking-opening curious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'yumiko_mom', jp: 'すごく、優しい先生で、安心。', en: 'Very — kind teacher, relieved.', style: 'Maternal warm gentle sincere-warm appreciative-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '良かったね、幼稚園、楽しい？', en: 'Good — kindergarten, fun?', style: 'Neighbor warm gentle sincere-warm engaged-warm caring, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '毎日、ニコニコ、帰ってくる。', en: 'Every day — smiling, returns.', style: 'Maternal warm gentle sincere-warm proud-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: '友達も、出来たかしら？', en: 'Friends — made?', style: 'Neighbor warm gentle sincere-warm curious-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'yumiko_mom', jp: 'うん、たくさん。一緒に、遊んでる。', en: 'Yes — lots. Together — playing.', style: 'Maternal warm gentle sincere-warm bright-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '幸せ、皆で、見守ろうね。', en: 'Happiness — all, watch over.', style: 'Neighbor warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 899 — sachiko + naoko, care (medium)
  {
    id: 'conv_00899',
    context: 'Sachiko thanks Naoko for caring after her recent illness.',
    purpose: 'elderly-relative care exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '優しい', '感謝', '大切'],
    cast: ['sachiko_grandma', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: '直子ちゃん、看病、ありがとう。', en: 'Naoko-chan — care, thanks.', style: 'Grandma warm gentle sincere-warm grateful-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '家族ですから、当然。', en: 'Family — naturally.', style: 'Aunt warm soft sincere-warm humble-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '優しい子、本当に。', en: 'Kind child — truly.', style: 'Grandma warm gentle sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '一緒に、過ごす時間、嬉しい。', en: 'Together — spending time, happy.', style: 'Aunt warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '感謝、毎日、している。', en: 'Grateful — every day.', style: 'Grandma warm gentle sincere-warm philosophical-warm deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '大切な、おばあちゃん。', en: 'Precious — grandma.', style: 'Aunt warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: 'これからも、よろしくね。', en: 'From now — please.', style: 'Grandma warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 900 — sho + hina, body parts head (short)
  {
    id: 'conv_00900',
    context: 'Hina pats Sho\'s head playfully.',
    purpose: 'children playful-physical exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['頭', '一緒', '優しい', '楽しい', '可愛い'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、頭、よしよし。', en: 'Sho — head, there-there.', style: 'High child bright sincere playful-opening tender-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'えへへ、優しい、ひな。', en: 'Hehe — kind, Hina.', style: 'Tiny six-year-old soft small sincere appreciative-warm bashful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'しょう、可愛い、頭。', en: 'Sho — cute, head.', style: 'High child bright sincere appreciative-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ぼくも、ひなの頭、よしよし。', en: 'I too — Hina\'s head, there-there.', style: 'Tiny six-year-old soft small sincere matching-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒に、ニコニコ、楽しい。', en: 'Together — smiling, fun.', style: 'High child bright sincere closing-warm enthusiastic-tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 901 — asuka + ren, professional development (medium)
  {
    id: 'conv_00901',
    context: 'Asuka encourages Ren to pursue a teaching certificate.',
    purpose: 'teacher-student career exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['専門', '将来', '一緒', '頑張る', '指導'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、教える、専門、考えない？', en: 'Ren-kun — teaching, specialty, won\'t consider?', style: 'Teacher warm gentle sincere-warm encouraging-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'え、本当に？嬉しいです。', en: 'Eh — truly? Happy.', style: 'University student warm soft sincere-warm surprised-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '指導、向いてる、感じる。', en: 'Guidance — suited, feel.', style: 'Teacher warm gentle sincere-warm appreciative-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '将来、考えてみます。', en: 'Future — consider.', style: 'University student warm soft sincere-warm reflective-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'asuka_teacher', jp: '一緒に、考えていこう。', en: 'Together — think.', style: 'Teacher warm gentle sincere-warm warm-promise collaborative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張れる、気が、します。', en: 'Try hard — feel, can.', style: 'University student warm soft sincere-warm hopeful-warm committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '応援、いつもしてる。', en: 'Cheering — always.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 902 — yumiko + ryosuke, life retrospective (long)
  {
    id: 'conv_00902',
    context: 'Yumiko and Ryosuke reflect on twenty-five years of marriage.',
    purpose: 'married-couple anniversary retrospective',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['人生', '一緒', '思い出', '大切', '幸せ'],
    cast: ['yumiko_mom', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'お父さん、もう、二十五年だね。', en: 'Father — already, twenty-five years.', style: 'Maternal warm gentle sincere-warm reflective-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: 'うん、早かったね。', en: 'Yes — was fast.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '人生、本当に、色々あった。', en: 'Life — truly, various existed.', style: 'Maternal warm gentle sincere-warm philosophical-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '楽しい時、辛い時、一緒に。', en: 'Fun times — hard times, together.', style: 'Father warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '子供たち、立派に、なった。', en: 'Children — splendidly, became.', style: 'Maternal warm gentle sincere-warm proud-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: 'さくら、リク、優しい子だ。', en: 'Sakura — Riku, kind children.', style: 'Father warm gentle sincere-warm proud-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '思い出、数え切れない。', en: 'Memories — uncountable.', style: 'Maternal warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '退職、新しい人生、始まる。', en: 'Retirement — new life, begins.', style: 'Father warm gentle sincere-warm philosophical-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '二人で、ゆっくり、楽しもう。', en: 'Two-people — slowly, enjoy.', style: 'Maternal warm gentle sincere-warm tender-promise loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '旅行、もっと、行きたい。', en: 'Travel — more, want to go.', style: 'Father warm gentle sincere-warm wishing-warm anticipating, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '私も、いっぱい、夢、ある。', en: 'I too — lots, dreams, exist.', style: 'Maternal warm gentle sincere-warm enthusiastic-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '大切な、これからの時間。', en: 'Precious — coming time.', style: 'Father warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '幸せだね、お父さん。', en: 'Happy — father.', style: 'Maternal warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: 'お前と、一緒で、最高だ。', en: 'With you — together, best.', style: 'Father warm gentle sincere closing-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 903 — aoi + yuki, café development (short)
  {
    id: 'conv_00903',
    context: 'Aoi tells Yuki about a new café development direction.',
    purpose: 'two-women business-development exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['展開', '人気', '一緒', '頑張る', '楽しい'],
    cast: ['aoi_barista', 'yuki_office'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'ゆきちゃん、新しい展開、考えてる。', en: 'Yuki-chan — new development, considering.', style: 'Barista warm soft sincere-warm enthusiastic-opening sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'え、楽しみ。何？', en: 'Eh — looking forward. What?', style: 'Office woman bright soft sincere curious-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'aoi_barista', jp: '子供向けの、メニュー、増やす。', en: 'Children-oriented — menu, increase.', style: 'Barista warm soft sincere-warm planning-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '人気、出そうね、絶対。', en: 'Popularity — will emerge, surely.', style: 'Office woman bright soft sincere predicting-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '一緒に、頑張ろう。', en: 'Together — try hard.', style: 'Barista warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 904 — saito + sakura, sleep health (medium)
  {
    id: 'conv_00904',
    context: 'Saito advises Sakura about sleep before exams.',
    purpose: 'doctor-student sleep-health exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['睡眠', '健康', '相談', '大切', '頑張る'],
    cast: ['saito_doctor', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'さくらさん、睡眠、ちゃんと、取れてる？', en: 'Sakura-san — sleep, properly, taking?', style: 'Doctor warm formal sincere-warm caring-opening professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'sakura_teen', jp: '少し、足りない、かもしれません。', en: 'A bit — insufficient, maybe.', style: 'Teen warm soft sincere honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '健康、勉強より、大切。', en: 'Health — than study, important.', style: 'Doctor warm formal sincere-warm philosophical-warm clear, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'はい、気を付けます。', en: 'Yes — be careful.', style: 'Teen warm soft sincere committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '相談、いつでも、来てね。', en: 'Consult — anytime, come.', style: 'Doctor warm formal sincere-warm warm-promise tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'ありがとうございます、頑張ります。', en: 'Thanks — try hard.', style: 'Teen warm soft sincere committed-warm grateful-respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '無理せず、ね。', en: 'Without strain.', style: 'Doctor warm formal sincere closing-warm tender-brief, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 905 — sakura + riku, sibling reflection (medium)
  {
    id: 'conv_00905',
    context: 'Sakura and Riku reflect after a long study day.',
    purpose: 'sibling study-day reflection',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '大切', '相談', '兄弟'],
    cast: ['sakura_teen', 'riku_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'リク、今日も、長かったね。', en: 'Riku — today too, was long.', style: 'Teen warm soft sincere reflective-opening tired-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'うん、皆、頑張ってるな。', en: 'Yes — all, trying hard.', style: 'Teen warm soft sincere acknowledging-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '兄弟、一緒で、心強い。', en: 'Sibling — together, heart-strong.', style: 'Teen warm soft sincere appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'riku_teen', jp: '俺も、お前、頼ってる。', en: 'I too — you, relying on.', style: 'Teen warm soft sincere honest-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '相談、何でも、聞くね。', en: 'Consult — anything, listen.', style: 'Teen warm soft sincere warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '大切な、姉ちゃん。', en: 'Precious — sister.', style: 'Teen warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '一緒に、寝よう、もう遅い。', en: 'Together — sleep, already late.', style: 'Teen warm soft sincere closing-warm tender-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_045 wrote', CONVERSATIONS.length, 'files');

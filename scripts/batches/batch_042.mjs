import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_042)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 826 — hiroshi_boss + kenji, business success (medium)
  {
    id: 'conv_00826',
    context: 'Hiroshi acknowledges Kenji\'s recent project success.',
    purpose: 'boss-subordinate success recognition exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['成功', '企業', '評価', '一緒', '頑張る'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、今回の成功、よくやった。', en: 'Kenji — this success, well done.', style: 'Boss firm formal direct authoritative warm-acknowledging opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'ありがとうございます、チームのお陰です。', en: 'Thanks — team\'s thanks.', style: 'Salaryman warm formal sincere-warm humble-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '企業全体、評価、上がるぞ。', en: 'Company whole — evaluation, rises.', style: 'Boss firm formal direct authoritative affirming-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '一緒に、頑張った結果です。', en: 'Together — result.', style: 'Salaryman warm formal sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '次の案件、任せる。', en: 'Next project — entrust.', style: 'Boss firm formal direct authoritative trusting-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' },
      { speaker: 'kenji_office', jp: '光栄です、全力で。', en: 'Honored — full strength.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '期待してる。', en: 'Expecting.', style: 'Boss firm formal direct closing-warm trusting-brief, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 827 — sho + hina, drawing flowers (short)
  {
    id: 'conv_00827',
    context: 'Sho and Hina draw flowers in the garden.',
    purpose: 'children flower-drawing exchange',
    ambient: 'garden_afternoon',
    sound_effects: [],
    target_vocab: ['花', '絵', '一緒', '可愛い', '楽しい'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、お花、絵、描こう。', en: 'Sho — flower, picture, draw.', style: 'High child bright sincere proposing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、可愛い、お花、好き。', en: 'Yes — cute, flower, like.', style: 'Tiny six-year-old soft small sincere agreeing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'ピンク、使おうか。', en: 'Pink — use?', style: 'High child bright sincere choosing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ぼく、黄色、にする。', en: 'I — yellow, do.', style: 'Tiny six-year-old soft small sincere choosing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、描く、楽しい。', en: 'Together — drawing, fun.', style: 'High child bright sincere closing-warm enthusiastic-tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 828 — asuka + sakura, exam result success (medium)
  {
    id: 'conv_00828',
    context: 'Sakura tells Asuka she passed a difficult mock exam.',
    purpose: 'teacher-student exam-result success exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['試験', '結果', '成功', '一緒', '頑張る'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、模擬試験、結果、出ました。', en: 'Teacher — mock exam, result, came.', style: 'Teen warm soft sincere reporting-opening hopeful-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'どうだった、教えて。', en: 'How was — tell.', style: 'Teacher warm gentle sincere-warm engaged-warm curious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sakura_teen', jp: '受かりました、なんとか。', en: 'Passed — somehow.', style: 'Teen warm soft sincere humble-warm grateful-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '本当に、成功。すごい、努力の結果。', en: 'Truly — success. Amazing — effort\'s result.', style: 'Teacher warm gentle sincere-warm enthusiastic-warm affirming-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '先生のお陰、ありがとうございます。', en: 'Teacher\'s thanks — gratitude.', style: 'Teen warm soft sincere grateful-deep respectful-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '本番まで、一緒に、頑張ろう。', en: 'Until real — together, try hard.', style: 'Teacher warm gentle sincere-warm warm-promise encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'はい、必ず、合格します。', en: 'Yes — surely, pass.', style: 'Teen warm soft sincere closing-warm determined-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 829 — aoi + ren, café finance (medium)
  {
    id: 'conv_00829',
    context: 'Aoi tells Ren about café renovation plans.',
    purpose: 'married-couple café-finance exchange',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['費', '相談', '一緒', '考える', '計画'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'レン、お店、改装、考えてる。', en: 'Ren — shop, renovation, considering.', style: 'Barista warm soft sincere-warm thoughtful-opening serious-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'え、本当？費用、結構かかる？', en: 'Eh — truly? Cost, considerable?', style: 'University student warm soft sincere-warm asking-warm concerned, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'aoi_barista', jp: 'ちょっと高い。相談、したくて。', en: 'A bit high. Consult — wanted.', style: 'Barista warm soft sincere-warm honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、一緒に、考えよう。', en: 'Yes — together, think.', style: 'University student warm soft sincere-warm supportive-warm collaborative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '計画、一年で、貯めたい。', en: 'Plan — one year, want to save.', style: 'Barista warm soft sincere-warm planning-warm committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '俺も、協力するよ。', en: 'I too — cooperate.', style: 'University student warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'ありがとう、心強い。', en: 'Thanks — heart-strong.', style: 'Barista warm soft sincere closing-warm grateful-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 830 — mei + daichi, baby first words (long)
  {
    id: 'conv_00830',
    context: 'Mei and Daichi witness Hikari saying her first word.',
    purpose: 'married-couple baby-milestone exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['子ども', '一緒', '可愛い', '幸せ', '言葉'],
    cast: ['mei_romantic', 'daichi_kansai'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、ひかり、何か、言った！', en: 'Daichi — Hikari, something, said!', style: 'Romantic warm soft sincere-warm excited-opening tender-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'daichi_kansai', jp: 'え、ほんま？何やった？', en: 'Eh — truly? What was?', style: 'Kansai warm bright sincere surprised-warm engaged-curious, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '「まんま」、聞こえた。', en: '"Manma" — heard.', style: 'Romantic warm soft sincere-warm proud-warm tender-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'すごい、初めての言葉や。', en: 'Amazing — first word.', style: 'Kansai warm bright sincere appreciative-warm tender-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '可愛い、本当に。', en: 'Cute — truly.', style: 'Romantic warm soft sincere-warm tender-deep appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'もう一回、聞きたいな。', en: 'Once more — want to hear.', style: 'Kansai warm bright sincere wishing-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'ひかり、お父さん、見て、言って。', en: 'Hikari — dad, look, say.', style: 'Romantic warm soft sincere-warm gentle-coaxing tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '「まんま」、聞こえた！俺にも！', en: '"Manma" — heard! To me too!', style: 'Kansai warm bright sincere enthusiastic-warm proud-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '子どもの成長、一瞬で、変わるね。', en: 'Child growth — in moment, changes.', style: 'Romantic warm soft sincere-warm philosophical-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '一緒に、見られて、嬉しいわ。', en: 'Together — to see, happy.', style: 'Kansai warm bright sincere appreciative-warm tender-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '幸せ、毎日、感じる。', en: 'Happiness — every day, feel.', style: 'Romantic warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '俺も、毎日、幸せやで。', en: 'I too — every day, happy.', style: 'Kansai warm bright sincere closing-warm tender-deep matching, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'これからも、一緒に、見守ろうね。', en: 'From now — together, watch over.', style: 'Romantic warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 831 — sho + hina, learning to share (short)
  {
    id: 'conv_00831',
    context: 'Sho hesitates to share a toy and Hina suggests sharing.',
    purpose: 'children sharing lesson exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '友達', '大切'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、これ、ぼくの、おもちゃ。', en: 'Hina — this, mine, toy.', style: 'Tiny six-year-old soft small sincere protective-opening shy, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'ちょっと、貸してくれる？', en: 'Briefly — will lend?', style: 'High child bright sincere asking-warm hopeful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-warm' },
      { speaker: 'sho_child', jp: 'うん、いいよ。', en: 'Yes — okay.', style: 'Tiny six-year-old soft small sincere agreeing-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒に、遊ぶの、楽しい。', en: 'Together — playing, fun.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ひな、優しい友達。', en: 'Hina — kind friend.', style: 'Tiny six-year-old soft small sincere closing-warm tender-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' }
    ]
  },
  // 832 — takeda + ren, action plan (medium)
  {
    id: 'conv_00832',
    context: 'Takeda and Ren discuss a community safety action.',
    purpose: 'officer-student community-action exchange',
    ambient: 'street_evening',
    sound_effects: [],
    target_vocab: ['行動', '安全', '一緒', '大切', '頑張る'],
    cast: ['takeda_officer', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'レン君、地域の安全活動、参加しないか？', en: 'Ren-kun — community safety activity, won\'t join?', style: 'Officer firm formal direct calm-inviting warm-clear, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'はい、興味、あります。', en: 'Yes — interest, exists.', style: 'University student warm soft sincere-warm respectful-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'takeda_officer', jp: '若い人の行動、必要だ。', en: 'Young people\'s action — needed.', style: 'Officer firm formal direct philosophical-warm clear, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: '友人も、誘ってみます。', en: 'Friend too — try inviting.', style: 'University student warm soft sincere-warm committed-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '一緒に、活動できる、心強い。', en: 'Together — can act, heart-strong.', style: 'Officer firm formal direct grateful-warm appreciative, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '安全、大切ですから、頑張ります。', en: 'Safety — important, try hard.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: 'よろしく、頼んだぞ。', en: 'Best — counting on.', style: 'Officer firm formal direct closing-warm trusting-brief, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 833 — tatsuya + ryosuke, country development (medium)
  {
    id: 'conv_00833',
    context: 'Tatsuya and Ryosuke discuss a new community development plan.',
    purpose: 'two-men rural development exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['開発', '町', '段階', '考える', '一緒'],
    cast: ['tatsuya_country', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '亮介、町の開発、案、ある。', en: 'Ryosuke — town development, plan, exists.', style: 'Country warm low sincere unhurried serious-opening engaged, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: 'どんな段階で、進めますか？', en: 'What stage — proceed?', style: 'Father warm gentle sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'まず、若い人の声、集める。', en: 'First — young people\'s voice, gather.', style: 'Country warm low sincere unhurried explaining-warm philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: 'いい考え。皆で、一緒に。', en: 'Good thought. All — together.', style: 'Father warm gentle sincere-warm affirming-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '町、残したい、皆と。', en: 'Town — want to keep, with all.', style: 'Country warm low sincere unhurried philosophical-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '私も、東京から、応援する。', en: 'I too — from Tokyo, support.', style: 'Father warm gentle sincere-warm warm-promise committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '助かる、本当に。', en: 'Saved — truly.', style: 'Country warm low sincere closing-warm grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 834 — hina + sho, kindergarten (short)
  {
    id: 'conv_00834',
    context: 'Hina and Sho talk about going to kindergarten.',
    purpose: 'children school-life exchange',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['幼稚園', '友達', '一緒', '楽しい', '勉強'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、幼稚園、行ってる？', en: 'Sho — kindergarten, going?', style: 'High child bright sincere asking-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、毎日。お友達、たくさん。', en: 'Yes — every day. Friends — lots.', style: 'Tiny six-year-old soft small sincere bright-warm sharing, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'いいなぁ、ひな、幼稚園、来年。', en: 'Nice — Hina, kindergarten, next year.', style: 'High child bright sincere envious-warm anticipating, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ひなも、楽しい、絶対。', en: 'Hina too — fun, surely.', style: 'Tiny six-year-old soft small sincere reassuring-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'やった、一緒の、感じ、嬉しい。', en: 'Yay — together-feeling, happy.', style: 'High child bright sincere closing-warm enthusiastic-tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 835 — kenji + ren, mentor afternoon (medium)
  {
    id: 'conv_00835',
    context: 'Kenji gives Ren an afternoon mentor session.',
    purpose: 'senior-junior mentor exchange',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['午後', '指導', '一緒', '頑張る', '基本'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、午後、時間、ある？', en: 'Ren-kun — afternoon, time, exist?', style: 'Salaryman warm formal sincere-warm asking-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、何でも、伺います。', en: 'Yes — anything, listening.', style: 'University student warm formal sincere-warm receptive-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'kenji_office', jp: '基本の流れ、確認しよう。', en: 'Basic flow — confirm.', style: 'Salaryman warm formal sincere-warm teaching-warm practical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、メモ、取ります。', en: 'Yes — notes, take.', style: 'University student warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '質問、遠慮なく、どうぞ。', en: 'Question — without hesitation, please.', style: 'Salaryman warm gentle sincere-warm encouraging-warm welcoming, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'ありがとうございます。指導、感謝。', en: 'Thanks. Guidance — grateful.', style: 'University student warm soft sincere-warm grateful-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、頑張ろう。', en: 'Together — try hard.', style: 'Salaryman warm soft sincere closing-warm tender-promise, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 836 — ryosuke + asuka, education philosophy (long)
  {
    id: 'conv_00836',
    context: 'Ryosuke and Asuka have a long talk about education philosophy.',
    purpose: 'father-teacher education-philosophy exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['考え方', '一緒', '大切', '子ども', '人間'],
    cast: ['ryosuke_dad', 'asuka_teacher'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '明日香先生、教育の考え方、伺いたいです。', en: 'Asuka-teacher — education thought, want to hear.', style: 'Father warm gentle sincere-warm respectful-opening curious-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'いつでも、お話しします。', en: 'Anytime — will talk.', style: 'Teacher warm gentle sincere-warm welcoming-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '子どもの個性、伸ばす、大切ですよね。', en: 'Children\'s individuality — extending, important.', style: 'Father warm gentle sincere-warm philosophical-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'はい、本当に。人間として、育てる。', en: 'Yes — truly. As human — raise.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'ryosuke_dad', jp: '点数より、心、大事ですね。', en: 'Score than — heart, important.', style: 'Father warm gentle sincere-warm philosophical-warm affirming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '本当に、そう思います。', en: 'Truly — so think.', style: 'Teacher warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うちのリク、さくらも、ずっと、お世話に。', en: 'Our Riku — Sakura also, long, in care.', style: 'Father warm gentle sincere-warm grateful-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。素敵な、お子さん達。', en: 'Same. Lovely — children.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'ご指導、ずっと、感謝しています。', en: 'Guidance — long, grateful.', style: 'Father warm gentle sincere-warm grateful-deep respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、見守りましょう。', en: 'Together — watch over.', style: 'Teacher warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '優しい先生、本当に、ありがたい。', en: 'Kind teacher — truly, grateful.', style: 'Father warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: 'これからも、よろしく、お願いします。', en: 'From now — please.', style: 'Teacher warm gentle sincere closing-warm tender-promise respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ、心から。', en: 'Same — from heart.', style: 'Father warm gentle sincere closing-warm tender-deep respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 837 — daichi + sho, baseball technique (short)
  {
    id: 'conv_00837',
    context: 'Daichi teaches Sho how to swing a bat.',
    purpose: 'uncle-child baseball-technique exchange',
    ambient: 'park_afternoon',
    sound_effects: [],
    target_vocab: ['技術', '一緒', '楽しい', '頑張る', 'ボール'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、バット、ぐっと、握ってな。', en: 'Sho — bat, firmly, grip.', style: 'Kansai warm bright sincere teaching-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、ぎゅっと。', en: 'Yes — tightly.', style: 'Tiny six-year-old soft small sincere committed-warm focused, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '技術、何回も、頑張れば、上手なる。', en: 'Technique — many times, try hard, becomes skilled.', style: 'Kansai warm bright sincere encouraging-warm philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '当たった！すごい！', en: 'Hit! Amazing!', style: 'Tiny six-year-old soft small sincere enthusiastic-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '一緒に、また、練習しような。', en: 'Together — again, practice.', style: 'Kansai warm bright sincere closing-warm tender-promise, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 838 — aoi + mei, baby health (medium)
  {
    id: 'conv_00838',
    context: 'Aoi tells Mei about Hikari\'s mild fever and asking advice.',
    purpose: 'two-mother baby-health exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['病院', '健康', '心配', '一緒', '大切'],
    cast: ['aoi_barista', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、ひかり、熱、あって、心配。', en: 'Aoi-chan — Hikari, fever, exists, worried.', style: 'Romantic warm soft sincere-warm worried-opening vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'え、大丈夫？病院、行く？', en: 'Eh — okay? Hospital — go?', style: 'Barista warm soft sincere-warm concerned-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '迷ってる。三十七度くらい。', en: 'Hesitating. About thirty-seven degrees.', style: 'Romantic warm soft sincere-warm honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '元気、あれば、様子、見ても。', en: 'Energetic — if, condition, see okay.', style: 'Barista warm soft sincere-warm advising-warm reassuring, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '健康、大切ね。注意、する。', en: 'Health — important. Caution — do.', style: 'Romantic warm soft sincere-warm philosophical-warm committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '心配なら、私、一緒に、行く。', en: 'Worried — I, together, go.', style: 'Barista warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '本当に、心強い。ありがとう。', en: 'Truly — heart-strong. Thanks.', style: 'Romantic warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 839 — yuki + saito, headache visit (medium)
  {
    id: 'conv_00839',
    context: 'Yuki visits the clinic with a recurring headache.',
    purpose: 'doctor-patient headache exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['頭痛', '病院', '診察', '相談', '大切'],
    cast: ['saito_doctor', 'yuki_office'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '先生、頭痛、最近、続いてます。', en: 'Doctor — headache, recently, continuing.', style: 'Office woman bright soft sincere reporting-opening worried-honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'いつから、ですか？', en: 'When from?', style: 'Doctor warm formal sincere-warm asking-warm professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'yuki_office', jp: '二週間、くらい。仕事、忙しくて。', en: 'Two weeks — about. Work — busy.', style: 'Office woman bright soft sincere honest-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '診察、しますね。リラックスして。', en: 'Diagnosis — do. Relax.', style: 'Doctor warm formal sincere-warm calm-clear caring, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'yuki_office', jp: 'はい、お願いします。', en: 'Yes — please.', style: 'Office woman bright soft sincere receptive-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '緊張、原因かも。休む事、大切ですよ。', en: 'Tension — cause maybe. Resting — important.', style: 'Doctor warm formal sincere-warm advising-warm caring, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'yuki_office', jp: '気を付けます、相談、また、来ます。', en: 'Will be careful. Consultation — again, come.', style: 'Office woman bright soft sincere closing-warm grateful-respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' }
    ]
  },
  // 840 — hina + sho, counting (short)
  {
    id: 'conv_00840',
    context: 'Hina and Sho count thousand pieces of leaves in the yard.',
    purpose: 'children counting leaves exchange',
    ambient: 'garden_morning',
    sound_effects: [],
    target_vocab: ['千', '枚', '一緒', '楽しい', '頑張る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、葉っぱ、千枚、ありそう。', en: 'Sho — leaves, thousand pieces, exist likely.', style: 'High child bright sincere observing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'えー、本当？数える？', en: 'Eh — truly? Count?', style: 'Tiny six-year-old soft small sincere curious-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、頑張ろう。', en: 'Together — try hard.', style: 'High child bright sincere committing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一、二、三、四…難しい。', en: 'One, two, three, four — difficult.', style: 'Tiny six-year-old soft small sincere counting-warm honest, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '楽しい、けど。', en: 'Fun — though.', style: 'High child bright sincere closing-warm appreciative-tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 841 — sakura + ren, writing draft (medium)
  {
    id: 'conv_00841',
    context: 'Sakura shows Ren a draft of her contest entry.',
    purpose: 'cousin writing-draft review exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['作品', '内容', '表現', '一緒', '考える'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、作品、読んでくれる？', en: 'Ren-bro — work, will read?', style: 'Teen warm soft sincere vulnerable-opening asking-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'もちろん、見せて。', en: 'Of course — show.', style: 'University student warm soft sincere-warm engaged-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '内容、深くしたい、けど、難しい。', en: 'Content — want deep, but, difficult.', style: 'Teen warm soft sincere honest-warm vulnerable-thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '表現、すごく、いい。', en: 'Expression — very, good.', style: 'University student warm soft sincere-warm appreciative-warm affirming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '本当？嬉しい。', en: 'Truly? Happy.', style: 'Teen warm soft sincere grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、書き直し、考えよう。', en: 'Together — re-write, think.', style: 'University student warm soft sincere-warm collaborative-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '本当に、心強い。', en: 'Truly — heart-strong.', style: 'Teen warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 842 — mrs_mori + sachiko, neighborhood (long)
  {
    id: 'conv_00842',
    context: 'Mrs. Mori and Sachiko reflect on the neighborhood\'s changes over decades.',
    purpose: 'elderly-women neighborhood-history exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['過去', '一緒', '町', '人々', '大切'],
    cast: ['mrs_mori_neighbor', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '佐知子さん、何十年、ここで、暮らしたね。', en: 'Sachiko-san — decades, here, lived.', style: 'Neighbor warm gentle sincere-warm reflective-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'ね、過去、振り返ると、長いね。', en: 'Right — past, looking back, long.', style: 'Grandma warm gentle sincere-warm philosophical-warm aged-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '昔の人々、ずっと、優しかった。', en: 'Old people — long, kind.', style: 'Neighbor warm gentle sincere-warm nostalgic-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '今でも、変わらないと思う。', en: 'Now too — unchanging, think.', style: 'Grandma warm gentle sincere-warm hopeful-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '若い家族、増えて、嬉しい。', en: 'Young families — increased, happy.', style: 'Neighbor warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '町の流れ、自然に、変わっていく。', en: 'Town\'s flow — naturally, changes.', style: 'Grandma warm gentle sincere-warm philosophical-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'mrs_mori_neighbor', jp: '優子さんの家族、もう、二代目。', en: 'Yumiko\'s family — already, second generation.', style: 'Neighbor warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '時、本当に、早いね。', en: 'Time — truly, fast.', style: 'Grandma warm gentle sincere-warm philosophical-deep aged-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '一緒に、見守ってきた、思い出。', en: 'Together — watched over, memories.', style: 'Neighbor warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: '森さん、本当に、大切な友人。', en: 'Mori-san — truly, precious friend.', style: 'Grandma warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: 'こちらこそ、ずっと、一緒に。', en: 'Same — long, together.', style: 'Neighbor warm gentle sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'これからも、お互い、元気で。', en: 'From now — mutually, energetic.', style: 'Grandma warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '長く、続けようね。', en: 'Long — continue.', style: 'Neighbor warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 843 — daichi + mei, kitchen (short)
  {
    id: 'conv_00843',
    context: 'Daichi and Mei prepare evening dinner together.',
    purpose: 'young-couple kitchen exchange',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['料理', '一緒', '美味しい', '家族', '楽しい'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、今晩の料理、一緒に、しよう。', en: 'Daichi — tonight\'s cooking, together, do.', style: 'Romantic warm soft sincere-warm inviting-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ええで。野菜、切るわ。', en: 'Fine. Vegetables — cut.', style: 'Kansai warm bright sincere committing-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '美味しく、なるね。', en: 'Delicious — becomes.', style: 'Romantic warm soft sincere-warm tender-warm anticipating, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '家族、皆で、食べるの、楽しい。', en: 'Family — all, eating, fun.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'うん、毎日、幸せ。', en: 'Yes — every day, happy.', style: 'Romantic warm soft sincere closing-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 844 — hiroshi_boss + kenji, recognition (medium)
  {
    id: 'conv_00844',
    context: 'Hiroshi formally recognizes Kenji\'s decade with the company.',
    purpose: 'boss-subordinate recognition ceremony exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['認める', '会社', '一緒', '大切', '頑張る'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、十年、おめでとう。', en: 'Kenji — ten years, congratulations.', style: 'Boss firm formal direct warm-recognition opening-respectful, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'ありがとうございます。会社、お陰様。', en: 'Thanks. Company — thanks.', style: 'Salaryman warm formal sincere-warm humble-warm grateful-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '誰もが、認めてる、お前の働き。', en: 'Everyone — recognizes, your work.', style: 'Boss firm formal direct affirming-warm clear-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '光栄です、本当に。', en: 'Honored — truly.', style: 'Salaryman warm formal sincere-warm grateful-deep humble, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'これからも、一緒に、頑張ろう。', en: 'From now — together, try hard.', style: 'Boss firm formal direct warm-promise encouraging, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '大切な、会社です。', en: 'Precious — company.', style: 'Salaryman warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: 'よろしく。', en: 'Best.', style: 'Boss firm formal direct closing-warm brief-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 845 — ryosuke + yumiko, autumn plans (medium)
  {
    id: 'conv_00845',
    context: 'Ryosuke and Yumiko look forward to autumn together.',
    purpose: 'married-couple autumn-anticipation exchange',
    ambient: 'tatami_room_morning',
    sound_effects: [],
    target_vocab: ['秋', '一緒', '紅葉', '楽しい', '大切'],
    cast: ['ryosuke_dad', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '優子、もうすぐ、秋だね。', en: 'Yumiko — soon, autumn.', style: 'Father warm gentle sincere-warm anticipating-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'うん、紅葉、見に行きたい。', en: 'Yes — autumn leaves, want to see.', style: 'Maternal warm gentle sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'たつや、誘って、皆で、どう？', en: 'Tatsuya — invite, all, how?', style: 'Father warm gentle sincere-warm proposing-warm inclusive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'いいね。皆で、紅葉、楽しい。', en: 'Nice. All — autumn leaves, fun.', style: 'Maternal warm gentle sincere-warm appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'ひかりちゃんも、初めての秋、見せたい。', en: 'Hikari-chan too — first autumn, want to show.', style: 'Father warm gentle sincere-warm tender-warm anticipating, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '家族、皆と、過ごす時間、大切。', en: 'Family — all, spending time, precious.', style: 'Maternal warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '本当にね、これからも、一緒に。', en: 'Truly — from now, together.', style: 'Father warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_042 wrote', CONVERSATIONS.length, 'files');

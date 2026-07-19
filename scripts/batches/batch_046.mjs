import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_046)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 906 — hiroshi_boss + kenji, communication system (medium)
  {
    id: 'conv_00906',
    context: 'Hiroshi reviews the company\'s communication system upgrade.',
    purpose: 'boss-subordinate communication-system exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['通信', 'システム', '一緒', '考える', '対策'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、通信、不安定、聞いてる。', en: 'Kenji — communication, unstable, hearing.', style: 'Boss firm formal direct authoritative reporting-opening serious, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、システム、見直しが、必要です。', en: 'Yes — system, review, needed.', style: 'Salaryman warm formal sincere-warm professional-warm reporting, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '対策、急げ。客先、影響、出る。', en: 'Response — hurry. Client — effect, comes.', style: 'Boss firm formal direct authoritative urgent-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '今週中に、案、まとめます。', en: 'This week — plan, compile.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '一緒に、考えよう、根本から。', en: 'Together — think, from root.', style: 'Boss firm formal direct collaborative-warm philosophical, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'ありがとうございます、頑張ります。', en: 'Thanks — try hard.', style: 'Salaryman warm formal sincere-warm grateful-warm committed, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '頼んだぞ。', en: 'Counting on.', style: 'Boss firm formal direct closing-brief trusting-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 907 — sho + hina, finding day (short)
  {
    id: 'conv_00907',
    context: 'Sho discovers something exciting in the garden with Hina.',
    purpose: 'children discovery exchange',
    ambient: 'garden_morning',
    sound_effects: [],
    target_vocab: ['発見', '一緒', '楽しい', '見る', '可愛い'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、発見！てんとう虫、いる。', en: 'Hina — discovery! Ladybug, exists.', style: 'Tiny six-year-old soft small sincere excited-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '可愛い！見せて。', en: 'Cute! Show.', style: 'High child bright sincere enthusiastic-warm engaged, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'そっと、見よう。', en: 'Gently — look.', style: 'Tiny six-year-old soft small sincere careful-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '赤い、丸い、可愛いね。', en: 'Red — round, cute.', style: 'High child bright sincere observing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、発見、楽しい。', en: 'Together — discovery, fun.', style: 'Tiny six-year-old soft small sincere closing-warm bright-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 908 — asuka + sakura, individual mentoring (medium)
  {
    id: 'conv_00908',
    context: 'Asuka holds an individual mentoring session with Sakura.',
    purpose: 'teacher-student individual-mentor exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['個人', '相談', '一緒', '頑張る', '大切'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、個人面談、始めるね。', en: 'Sakura-san — individual meeting, start.', style: 'Teacher warm gentle sincere-warm welcoming-opening professional, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'はい、よろしくお願いします。', en: 'Yes — please.', style: 'Teen warm soft sincere respectful-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'asuka_teacher', jp: '相談、何でも、聞かせて。', en: 'Consult — anything, let listen.', style: 'Teacher warm gentle sincere-warm encouraging-warm welcoming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '進路、まだ、迷ってます。', en: 'Path — still, lost.', style: 'Teen warm soft sincere honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、ゆっくり、考えよう。', en: 'Together — slowly, think.', style: 'Teacher warm gentle sincere-warm reassuring-warm collaborative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '頑張ります、大切な時期。', en: 'Try hard — important time.', style: 'Teen warm soft sincere committed-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '応援、いつもしてる。', en: 'Cheering — always.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 909 — aoi + yuki, hotel review (medium)
  {
    id: 'conv_00909',
    context: 'Aoi and Yuki review their recent hotel stay.',
    purpose: 'two-women travel-review exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['ホテル', '詳細', '一緒', '楽しい', '部屋'],
    cast: ['aoi_barista', 'yuki_office'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、あのホテル、どうだった？', en: 'Aoi-chan — that hotel, how was?', style: 'Office woman bright soft sincere asking-opening curious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'aoi_barista', jp: '良かったよ。部屋、広くて。', en: 'Good. Room — wide.', style: 'Barista warm soft sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '詳細、教えて。次、参考に。', en: 'Details — teach. Next — reference.', style: 'Office woman bright soft sincere asking-warm practical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'aoi_barista', jp: '温泉、すごく、良かった。', en: 'Onsen — very, good.', style: 'Barista warm soft sincere-warm appreciative-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '料理も、美味しかった？', en: 'Cooking too — was delicious?', style: 'Office woman bright soft sincere curious-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'aoi_barista', jp: '本当に、美味しかった。', en: 'Truly — was delicious.', style: 'Barista warm soft sincere-warm appreciative-deep enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '今度、一緒に、行こうね、楽しい。', en: 'Next time — together, go, fun.', style: 'Office woman bright soft sincere closing-warm tender-promise enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 910 — tatsuya + ryosuke, rural agriculture (long)
  {
    id: 'conv_00910',
    context: 'Tatsuya and Ryosuke walk through the rice fields discussing farming.',
    purpose: 'cousin rural-farming deep exchange',
    ambient: 'field_morning',
    sound_effects: [],
    target_vocab: ['米', '畑', '一緒', '人間', '大切'],
    cast: ['tatsuya_country', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '亮介、今年の米、調子、ええで。', en: 'Ryosuke — this year\'s rice, condition, good.', style: 'Country warm low sincere unhurried reporting-opening warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: '見事だね、立派な、お米。', en: 'Splendid — fine rice.', style: 'Father warm gentle sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '畑、毎日、世話してる。', en: 'Field — every day, care.', style: 'Country warm low sincere unhurried philosophical-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: '本当に、頭が下がる。', en: 'Truly — head bows.', style: 'Father warm gentle sincere-warm respectful-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '土と、対話する、人間として、大切。', en: 'Soil — dialogue, as human, important.', style: 'Country warm low sincere unhurried philosophical-warm wise-deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'ryosuke_dad', jp: '深い言葉だね。', en: 'Deep word.', style: 'Father warm gentle sincere-warm appreciative-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '自然、いつも、教えてくれる。', en: 'Nature — always, teaches.', style: 'Country warm low sincere unhurried philosophical-warm tender-deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'ryosuke_dad', jp: '都会、忘れる事、多い。', en: 'City — forget things, many.', style: 'Father warm gentle sincere-warm reflective-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '一緒に、田畑、もっと、見ようや。', en: 'Together — fields, more, see.', style: 'Country warm low sincere unhurried inviting-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '是非、何度でも、来たい。', en: 'Definitely — many times, want to come.', style: 'Father warm gentle sincere-warm enthusiastic-warm committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '家、いつでも、開いてる。', en: 'House — anytime, open.', style: 'Country warm low sincere unhurried welcoming-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'たつや、本当に、感謝してる。', en: 'Tatsuya — truly, grateful.', style: 'Father warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: 'お互いさま、家族や。', en: 'Mutually — family.', style: 'Country warm low sincere closing-warm tender-deep philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 911 — sho + hina, TV program (short)
  {
    id: 'conv_00911',
    context: 'Sho and Hina watch their favorite TV program.',
    purpose: 'children TV-favorite exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['番組', '一緒', '楽しい', 'テレビ', '見る'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、好きな番組、始まった。', en: 'Hina — favorite program, started.', style: 'Tiny six-year-old soft small sincere excited-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'やった！テレビ、見よう。', en: 'Yay! TV — watch.', style: 'High child bright sincere enthusiastic-warm engaged, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'お絵かき、コーナー、楽しみ。', en: 'Drawing — corner, looking forward.', style: 'Tiny six-year-old soft small sincere anticipating-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'ひな、歌の、コーナー、好き。', en: 'Hina — song corner, like.', style: 'High child bright sincere preferring-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、見るの、楽しい。', en: 'Together — watching, fun.', style: 'Tiny six-year-old soft small sincere closing-warm tender-bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 912 — takeda + ren, action plan revise (medium)
  {
    id: 'conv_00912',
    context: 'Takeda revises the festival safety plan with Ren.',
    purpose: 'officer-student plan-revision exchange',
    ambient: 'street_afternoon',
    sound_effects: [],
    target_vocab: ['行動', '対策', '安全', '一緒', '頑張る'],
    cast: ['takeda_officer', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'レン君、行動計画、修正、必要だ。', en: 'Ren-kun — action plan, revision, needed.', style: 'Officer firm formal direct calm-opening practical, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: 'はい、どこ、変更しますか？', en: 'Yes — where, change?', style: 'University student warm soft sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'takeda_officer', jp: '駅前、対策、強化しよう。', en: 'Station front — response, strengthen.', style: 'Officer firm formal direct authoritative clear-instructive, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: '了解。安全、最優先。', en: 'Understood. Safety — top priority.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '一緒に、地図、確認しよう。', en: 'Together — map, confirm.', style: 'Officer firm formal direct collaborative-warm practical, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、責任、持って。', en: 'Try hard — responsibility, hold.', style: 'University student warm soft sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: 'よろしく頼んだ。', en: 'Best — counting on.', style: 'Officer firm formal direct closing-warm trusting-brief, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 913 — mei + aoi, baby finding (medium)
  {
    id: 'conv_00913',
    context: 'Mei excitedly tells Aoi that Hikari can now walk.',
    purpose: 'two-mother baby-milestone exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['発見', '子ども', '一緒', '可愛い', '幸せ'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、ひかり、歩いた！', en: 'Aoi-chan — Hikari, walked!', style: 'Romantic warm soft sincere-warm excited-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'aoi_barista', jp: 'え、本当！すごい発見！', en: 'Eh — truly! Amazing discovery!', style: 'Barista warm soft sincere-warm enthusiastic-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '昨日、急に。子どもの成長、本当に早い。', en: 'Yesterday — suddenly. Child growth — truly fast.', style: 'Romantic warm soft sincere-warm reporting-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '可愛いね、見たい。', en: 'Cute — want to see.', style: 'Barista warm soft sincere-warm tender-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '今度、家に、来てね。', en: 'Next time — house, come.', style: 'Romantic warm soft sincere-warm inviting-warm warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '楽しみ。一緒に、お祝い。', en: 'Looking forward. Together — celebrate.', style: 'Barista warm soft sincere-warm anticipating-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '幸せ、本当に。', en: 'Happy — truly.', style: 'Romantic warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 914 — hina + sho, simple system (short)
  {
    id: 'conv_00914',
    context: 'Hina and Sho set rules for a make-believe shop.',
    purpose: 'children play-rules exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['設定', '一緒', '楽しい', '頑張る', '考える'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、お店、設定、決めよう。', en: 'Sho — shop, settings, decide.', style: 'High child bright sincere proposing-opening creative, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、ぼく、店長、なる。', en: 'Yes — I, shopkeeper, become.', style: 'Tiny six-year-old soft small sincere committing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'ひな、お客さん、する。', en: 'Hina — customer, do.', style: 'High child bright sincere committing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張って、考えるね。', en: 'Try hard — think.', style: 'Tiny six-year-old soft small sincere committed-warm focused, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、楽しい、お店！', en: 'Together — fun, shop!', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 915 — kenji + ren, project analysis (medium)
  {
    id: 'conv_00915',
    context: 'Kenji teaches Ren how to analyze project data.',
    purpose: 'senior-junior technical-skill exchange',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['分析', 'データ', '一緒', '考える', '頑張る'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、データ分析、教えるね。', en: 'Ren-kun — data analysis, teach.', style: 'Salaryman warm formal sincere-warm teaching-opening warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、お願いします。', en: 'Yes — please.', style: 'University student warm formal sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'kenji_office', jp: 'まず、傾向、見つける。', en: 'First — trend, find.', style: 'Salaryman warm formal sincere-warm teaching-warm advising, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'なるほど、ゆっくり、考えます。', en: 'I see — slowly, think.', style: 'University student warm soft sincere-warm understanding-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、見ていこう。', en: 'Together — see.', style: 'Salaryman warm soft sincere-warm collaborative-warm warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、覚えます。', en: 'Try hard — remember.', style: 'University student warm soft sincere-warm committed-warm focused, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '質問、いつでも、いいよ。', en: 'Question — anytime, okay.', style: 'Salaryman warm gentle sincere closing-warm welcoming-tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 916 — ryosuke + naoko, sibling life-talk (long)
  {
    id: 'conv_00916',
    context: 'Ryosuke and Naoko have a deep evening conversation.',
    purpose: 'sibling deep life-talk',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['人生', '一緒', '相談', '家族', '大切'],
    cast: ['ryosuke_dad', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: '亮介、本当に、退職、しちゃうの？', en: 'Ryosuke — truly, retire, will?', style: 'Aunt warm soft sincere-warm asking-opening intimate, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、決めた。', en: 'Yes — decided.', style: 'Father warm gentle sincere-warm honest-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '寂しくない？仕事、長かった。', en: 'Not lonely? Work — was long.', style: 'Aunt warm soft sincere-warm caring-warm probing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '少し、ね。でも、人生、新しい段階。', en: 'A bit. But — life, new stage.', style: 'Father warm gentle sincere-warm honest-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '家族、皆、応援してる。', en: 'Family — all, supporting.', style: 'Aunt warm soft sincere-warm reassuring-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: 'お前、田舎、本気で考えてる？', en: 'You — country, seriously considering?', style: 'Father warm gentle sincere-warm caring-warm probing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'うん、たつや、近くて、心強い。', en: 'Yes — Tatsuya, close, heart-strong.', style: 'Aunt warm soft sincere-warm honest-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'いい決断だね。', en: 'Good decision.', style: 'Father warm gentle sincere-warm affirming-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '相談、いつも、ありがとう。', en: 'Consult — always, thanks.', style: 'Aunt warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'お互い、頼れる、大切な家族。', en: 'Mutually — relyable, precious family.', style: 'Father warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: 'これからも、よく、話そう。', en: 'From now — well, talk.', style: 'Aunt warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、年取っていこう。', en: 'Together — age.', style: 'Father warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 917 — daichi + tatsuya, traditional fire (short)
  {
    id: 'conv_00917',
    context: 'Daichi and Tatsuya prepare the traditional festival bonfire.',
    purpose: 'cousin traditional-fire exchange',
    ambient: 'plaza_evening',
    sound_effects: [],
    target_vocab: ['火', '祭り', '一緒', '伝統', '楽しい'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'ダイチ、伝統の火、こうする。', en: 'Daichi — traditional fire, like this.', style: 'Country warm low sincere unhurried teaching-opening careful, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: 'ええ、長い伝統やな。', en: 'Yes — long tradition.', style: 'Kansai warm bright sincere appreciative-warm respectful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '祖父、教えてくれた。', en: 'Grandfather — taught.', style: 'Country warm low sincere unhurried nostalgic-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '一緒に、続けていこう。', en: 'Together — continue.', style: 'Kansai warm bright sincere committed-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '祭り、楽しい時間や。', en: 'Festival — fun time.', style: 'Country warm low sincere closing-warm tender-deep philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 918 — sakura + ren, year-end review (medium)
  {
    id: 'conv_00918',
    context: 'Sakura and Ren reflect on the past year together.',
    purpose: 'cousin year-review reflection',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['年間', '一緒', '思い出', '大切', '成長'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、一年間、早かったね。', en: 'Ren-bro — one year, fast.', style: 'Teen warm soft sincere reflective-opening philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、本当に。', en: 'Yes — truly.', style: 'University student warm soft sincere-warm matching-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'いろんな思い出、できた。', en: 'Various memories — made.', style: 'Teen warm soft sincere appreciative-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'お前、随分、成長、したね。', en: 'You — considerably, grew.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'レン兄ちゃんも、ね。', en: 'Ren-bro too — right.', style: 'Teen warm soft sincere matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒の時間、大切。', en: 'Together time — precious.', style: 'University student warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '来年も、よろしくね、お兄ちゃん。', en: 'Next year too — please, brother.', style: 'Teen warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 919 — asuka + ren, opposite approaches (medium)
  {
    id: 'conv_00919',
    context: 'Asuka explains why opposing teaching approaches can both work.',
    purpose: 'teacher-alum philosophy-discussion',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['反対', '考え方', '一緒', '生徒', '大切'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: '先生、反対の考え方、どう、受け止める？', en: 'Teacher — opposite thinking, how, receive?', style: 'University student warm soft sincere asking-opening curious-engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'asuka_teacher', jp: '両方、価値、ある時、多い。', en: 'Both — value, exists times, many.', style: 'Teacher warm gentle sincere-warm philosophical-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'ren_uni', jp: '深いですね。', en: 'Deep.', style: 'University student warm soft sincere appreciative-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '生徒、それぞれ、合う方法、違う。', en: 'Students — each, fitting method, different.', style: 'Teacher warm gentle sincere-warm philosophical-warm clear, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、考える、大切ですね。', en: 'Together — thinking, important.', style: 'University student warm soft sincere-warm affirming-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '心、開いて、聞く、姿勢。', en: 'Heart — open, listening, posture.', style: 'Teacher warm gentle sincere-warm philosophical-deep wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'ren_uni', jp: '学びました、本当に。', en: 'Learned — truly.', style: 'University student warm soft sincere closing-warm grateful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 920 — hina + yumiko, kitchen technique (short)
  {
    id: 'conv_00920',
    context: 'Yumiko teaches Hina how to crack an egg.',
    purpose: 'mother-child kitchen-skill exchange',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['技術', '一緒', '優しい', '楽しい', '頑張る'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、卵割る技術、教えるね。', en: 'Hina-chan — egg-cracking technique, teach.', style: 'Maternal warm gentle sincere-warm teaching-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、頑張る。', en: 'Yes — try hard.', style: 'High child bright sincere committing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '優しく、コツコツ。', en: 'Gently — tap-tap.', style: 'Maternal warm gentle sincere-warm teaching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '出来た！', en: 'Did it!', style: 'High child bright sincere triumphant-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '一緒に、料理、楽しい。', en: 'Together — cooking, fun.', style: 'Maternal warm gentle sincere closing-warm tender-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 921 — aoi + ren, café re-development (medium)
  {
    id: 'conv_00921',
    context: 'Aoi tells Ren the café will re-open after renovation.',
    purpose: 'wife-husband café re-open exchange',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['再', '展開', '一緒', '頑張る', '楽しみ'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'レン、お店、再オープン、来週。', en: 'Ren — shop, re-open, next week.', style: 'Barista warm soft sincere-warm excited-opening announcing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'おお、ついに！楽しみだね。', en: 'Oh — finally! Looking forward.', style: 'University student warm soft sincere-warm enthusiastic-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '新しい展開、お客様、喜ぶかな。', en: 'New development — customer, will be happy?', style: 'Barista warm soft sincere-warm hopeful-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '絶対。あおいの努力、伝わる。', en: 'Surely. Aoi\'s effort — conveys.', style: 'University student warm soft sincere-warm reassuring-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '一緒に、頑張ってきたね。', en: 'Together — tried hard.', style: 'Barista warm soft sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: 'これからも、応援する。', en: 'From now — cheer.', style: 'University student warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'Barista warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 922 — hiroshi_boss + kenji, recognition responsibility (long)
  {
    id: 'conv_00922',
    context: 'Hiroshi promotes Kenji and discusses new responsibilities.',
    purpose: 'boss-subordinate promotion-talk',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['責任', '一緒', '頑張る', '会社', '大切'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、大事な話、ある。', en: 'Kenji — important talk, exists.', style: 'Boss firm formal direct authoritative serious-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、伺います。', en: 'Yes — listen.', style: 'Salaryman warm formal sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '昇進、決まった。お前、課長だ。', en: 'Promotion — decided. You — section chief.', style: 'Boss firm formal direct authoritative announcing-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'え、本当ですか。', en: 'Eh — truly?', style: 'Salaryman warm formal sincere-warm surprised-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'お前の働き、認められた。', en: 'Your work — recognized.', style: 'Boss firm formal direct affirming-warm clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '光栄です、本当に。', en: 'Honored — truly.', style: 'Salaryman warm formal sincere-warm grateful-deep humble, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '責任、これまで以上に、重い。', en: 'Responsibility — more than before, heavy.', style: 'Boss firm formal direct authoritative warning-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '理解しています、覚悟、します。', en: 'Understand — preparation, do.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'チーム、皆、お前の指導、待ってる。', en: 'Team — all, your guidance, waiting.', style: 'Boss firm formal direct philosophical-warm encouraging, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '一緒に、進んでいきます。', en: 'Together — proceed.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '会社、大切な、人材だ、お前は。', en: 'Company — precious, talent, you are.', style: 'Boss firm formal direct affirming-warm tender-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'ありがとうございます、頑張ります。', en: 'Thanks — try hard.', style: 'Salaryman warm formal sincere-warm grateful-deep committed, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '期待してる、これからも。', en: 'Expecting — from now.', style: 'Boss firm formal direct closing-warm trusting-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 923 — saito + yumiko, regular checkup (short)
  {
    id: 'conv_00923',
    context: 'Saito gives Yumiko a quick checkup result.',
    purpose: 'doctor-patient routine checkup',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '大切', '相談', '安心'],
    cast: ['saito_doctor', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '優子さん、健康、問題ありません。', en: 'Yumiko-san — health, no problem.', style: 'Doctor warm formal sincere-warm reassuring-opening professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'yumiko_mom', jp: 'ああ、安心しました。', en: 'Ah — relieved.', style: 'Maternal warm gentle sincere-warm grateful-warm warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一緒に、生活習慣、見ていきましょう。', en: 'Together — life habits, see.', style: 'Doctor warm formal sincere-warm advising-warm collaborative, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '相談、いつでも、来ます。', en: 'Consult — anytime, come.', style: 'Maternal warm gentle sincere-warm committed-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'お元気で、また、来年。', en: 'Healthy — again, next year.', style: 'Doctor warm formal sincere closing-warm tender-warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 924 — yumiko + mei, household economy (medium)
  {
    id: 'conv_00924',
    context: 'Yumiko shares budgeting tips with Mei.',
    purpose: 'mother-in-law daughter-in-law budget exchange',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['予算', '家族', '一緒', '相談', '大切'],
    cast: ['yumiko_mom', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'お義母さん、予算、相談、いいですか？', en: 'Mother-in-law — budget, consult, okay?', style: 'Romantic warm soft sincere-warm asking-opening respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'yumiko_mom', jp: 'もちろん、何でも。', en: 'Of course — anything.', style: 'Maternal warm gentle sincere-warm welcoming-warm warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '家族の費用、増えてきて。', en: 'Family expense — increased.', style: 'Romantic warm soft sincere-warm honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '私の経験、教えるね。', en: 'My experience — teach.', style: 'Maternal warm gentle sincere-warm sharing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'ありがとう、頼りに、してます。', en: 'Thanks — relying on.', style: 'Romantic warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '家族、大切に、考えること。', en: 'Family — preciously, think.', style: 'Maternal warm gentle sincere-warm philosophical-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'mei_romantic', jp: '一緒に、考えてくれて、嬉しい。', en: 'Together — thinking, happy.', style: 'Romantic warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 925 — mrs_mori + naoko, handicrafts (medium)
  {
    id: 'conv_00925',
    context: 'Mrs. Mori shares her handicraft skills with Naoko.',
    purpose: 'elderly-aunt craft exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['技術', '一緒', '楽しい', '優しい', '伝統'],
    cast: ['mrs_mori_neighbor', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '直子さん、これ、編む技術、教えるね。', en: 'Naoko-san — this, knitting technique, teach.', style: 'Neighbor warm gentle sincere-warm teaching-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'お願いします、不器用、ですが。', en: 'Please — clumsy, but.', style: 'Aunt warm soft sincere-warm humble-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '優しく、ゆっくり、始める。', en: 'Gently — slowly, start.', style: 'Neighbor warm gentle sincere-warm patient-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '伝統的な、編み方、ですね。', en: 'Traditional — knitting way, right.', style: 'Aunt warm soft sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '昔から、続いてる、技術。', en: 'Long — continuing, technique.', style: 'Neighbor warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '一緒に、続けたい、こういう、楽しい時間。', en: 'Together — want to continue, such, fun time.', style: 'Aunt warm soft sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: 'こちらこそ、嬉しい。', en: 'Same — happy.', style: 'Neighbor warm gentle sincere closing-warm grateful-tender warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_046 wrote', CONVERSATIONS.length, 'files');

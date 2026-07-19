import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_056)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1106 — aoi + yuki, movie night (medium)
  {
    id: 'conv_01106',
    context: 'Aoi and Yuki plan a movie night.',
    purpose: 'two-women movie-night exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['映画', '一緒', '楽しい', '見る', '友達'],
    cast: ['aoi_barista', 'yuki_office'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、映画、見る？', en: 'Aoi-chan — movie, watch?', style: 'Office woman bright soft sincere proposing-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'うん、何の映画？', en: 'Yes — what movie?', style: 'Barista warm soft sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'yuki_office', jp: 'フランス映画、おすすめ、ある。', en: 'French movie — recommendation, exists.', style: 'Office woman bright soft sincere informing-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '見たい！一緒に、しよう。', en: 'Want to see! Together — do.', style: 'Barista warm soft sincere-warm enthusiastic-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yuki_office', jp: 'お菓子、用意、しておく。', en: 'Snacks — prepare.', style: 'Office woman bright soft sincere planning-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '楽しみ、本当に。', en: 'Looking forward — truly.', style: 'Barista warm soft sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '友達、皆、誘う。', en: 'Friends — all, invite.', style: 'Office woman bright soft sincere closing-warm enthusiastic-collaborative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1107 — sho + hina, karaoke (short)
  {
    id: 'conv_01107',
    context: 'Sho and Hina sing along to a music video.',
    purpose: 'children karaoke-play exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['歌', '一緒', '楽しい', '音楽', '頑張る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、この歌、一緒に、歌おう。', en: 'Sho — this song, together, sing.', style: 'High child bright sincere proposing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、好きな音楽。', en: 'Yes — favorite music.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '頑張って、声、出そう。', en: 'Try hard — voice, give.', style: 'High child bright sincere encouraging-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、歌う、本当に。', en: 'Fun — singing, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、毎日、歌いたい。', en: 'Together — every day, want to sing.', style: 'High child bright sincere closing-warm enthusiastic-tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1108 — asuka + sakura, writing workshop (medium)
  {
    id: 'conv_01108',
    context: 'Asuka invites Sakura to a writing workshop.',
    purpose: 'teacher-alum workshop invitation',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '作品', '指導', '頑張る', '感謝'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、書く教室、講師、お願い。', en: 'Sakura-san — writing class, instructor, please.', style: 'Teacher warm gentle sincere-warm asking-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'え、私でいいですか？', en: 'Eh — me okay?', style: 'Teen warm soft sincere humble-warm surprised, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'もちろん、最適、本当に。', en: 'Of course — best, truly.', style: 'Teacher warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '光栄、本当に、感謝。', en: 'Honored — truly, grateful.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '生徒、お前の指導、楽しみに、してる。', en: 'Students — your guidance, looking forward.', style: 'Teacher warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、若い人、応援、する。', en: 'Together — young people, cheer, do.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '頑張ろう、ね。', en: 'Try hard.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1109 — mei + daichi, family TV (medium)
  {
    id: 'conv_01109',
    context: 'Mei and Daichi watch a TV program with their kids.',
    purpose: 'family TV-watching exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['番組', 'テレビ', '一緒', '楽しい', '家族'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'メイ、この番組、面白いで。', en: 'Mei — this program, interesting.', style: 'Kansai warm bright sincere observing-opening engaged, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'うん、子供も、見てる。', en: 'Yes — children too, watching.', style: 'Romantic warm soft sincere-warm observing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'テレビ、家族で、見るの、好き。', en: 'TV — family, watching, like.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'ひかり、笑ってる、可愛い。', en: 'Hikari — laughing, cute.', style: 'Romantic warm soft sincere-warm tender-deep appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '一緒に、楽しい、時間。', en: 'Together — fun, time.', style: 'Kansai warm bright sincere philosophical-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '家族の時間、大切、ね。', en: 'Family time — precious.', style: 'Romantic warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'これからも、ずっと、ね。', en: 'From now — long.', style: 'Kansai warm bright sincere closing-warm tender-promise deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1110 — sakura + ren, performance (long)
  {
    id: 'conv_01110',
    context: 'Sakura tells Ren her book is being adapted to a play.',
    purpose: 'cousin adaptation-news exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['作品', '一緒', '夢', '感謝', '頑張る'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、本、劇に、なる。', en: 'Ren-bro — book, play, becomes.', style: 'Teen warm soft sincere announcing-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: 'え、本当！すごい！', en: 'Eh — truly! Amazing!', style: 'University student warm soft sincere-warm enthusiastic-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '監督、有名な人。', en: 'Director — famous person.', style: 'Teen warm soft sincere proud-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '作品、本当、認められた。', en: 'Work — truly, recognized.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '夢、また、叶う、感じ。', en: 'Dream — again, comes true, feel.', style: 'Teen warm soft sincere reflective-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '初日、絶対、見に、行く。', en: 'First day — surely, see, go.', style: 'University student warm soft sincere-warm committed-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '家族、皆、来てくれる。', en: 'Family — all, come.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '頑張ってきた、お前、誇り。', en: 'Tried hard — you, proud.', style: 'University student warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、家族、皆に、本当に。', en: 'Grateful — family, to all, truly.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '俺も、お祝い、絶対、する。', en: 'I too — celebrate, surely, do.', style: 'University student warm soft sincere-warm committed-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、ここまで、感謝、本当に。', en: 'Together — until here, grateful, truly.', style: 'Teen warm soft sincere appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '大切な、夢の続き、ね。', en: 'Precious — dream continuation.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '頑張る、これからも、ずっと。', en: 'Try hard — from now, long.', style: 'Teen warm soft sincere closing-warm committed-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1111 — hina + sho, piano lesson (short)
  {
    id: 'conv_01111',
    context: 'Hina and Sho practice piano together.',
    purpose: 'children piano-practice exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['ピアノ', '一緒', '楽しい', '頑張る', '音楽'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、ピアノ、練習、一緒に？', en: 'Sho — piano, practice, together?', style: 'High child bright sincere proposing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、頑張る。', en: 'Yes — try hard.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'この音楽、好き、ね。', en: 'This music — like.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '指、動かない、難しい。', en: 'Fingers — won\'t move, difficult.', style: 'Tiny six-year-old soft small sincere honest-warm vulnerable, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '楽しい、毎日、練習。', en: 'Fun — every day, practice.', style: 'High child bright sincere closing-warm tender-bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1112 — kenji + ren, future generations (medium)
  {
    id: 'conv_01112',
    context: 'Kenji and Ren discuss future generations of the company.',
    purpose: 'senior-alum future-generations exchange',
    ambient: 'office_evening',
    sound_effects: [],
    target_vocab: ['会社', '一緒', '指導', '若い', '大切'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、若い世代、見守ろう。', en: 'Ren-kun — young generation, watch over.', style: 'Salaryman warm soft sincere-warm philosophical-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、頼もしい、子、たくさん。', en: 'Yes — reliable, children, many.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '会社、お前の生徒、来てる。', en: 'Company — your students, coming.', style: 'Salaryman warm soft sincere-warm informing-warm proud, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '光栄です、本当に。', en: 'Honored — truly.', style: 'University student warm soft sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '指導、続けて、本当、感謝。', en: 'Guidance — continue, truly, grateful.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '一緒に、未来、繋ぐ、大切な仕事。', en: 'Together — future, connect, precious work.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '頼んだぞ、本当に。', en: 'Counting on — truly.', style: 'Salaryman warm soft sincere closing-warm trusting-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1113 — daichi + tatsuya, town festival music (medium)
  {
    id: 'conv_01113',
    context: 'Daichi suggests adding music to the town festival.',
    purpose: 'cousin festival-music exchange',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['音楽', '祭り', '一緒', '町', '楽しい'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、祭り、音楽、増やそうか。', en: 'Tatsuya — festival, music, increase?', style: 'Kansai warm bright sincere proposing-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'いいな、若い人、喜ぶ。', en: 'Nice — young people, happy.', style: 'Country warm low sincere unhurried agreeing-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '伝統音楽、現代音楽、混ぜたい。', en: 'Traditional music — modern music, want to mix.', style: 'Kansai warm bright sincere planning-warm creative, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '面白い、新しい試み。', en: 'Interesting — new attempt.', style: 'Country warm low sincere unhurried appreciative-warm engaged, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '町、活気、戻る、絶対。', en: 'Town — vitality, returns, surely.', style: 'Kansai warm bright sincere predicting-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '一緒に、頑張ろう。', en: 'Together — try hard.', style: 'Country warm low sincere unhurried collaborative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '楽しい、祭り、出来るで。', en: 'Fun — festival, can do.', style: 'Kansai warm bright sincere closing-warm anticipating-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1114 — yuki + naoko, recorded memory (short)
  {
    id: 'conv_01114',
    context: 'Yuki and Naoko look at recorded memories together.',
    purpose: 'two-women recorded-memory exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['記録', '一緒', '思い出', '楽しい', '友達'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、海外の記録、見て。', en: 'Naoko-san — overseas record, look.', style: 'Office woman bright soft sincere showing-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'わあ、いっぱい、思い出。', en: 'Wow — many, memories.', style: 'Aunt warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: 'パリの街、本当、綺麗だった。', en: 'Paris city — truly, beautiful was.', style: 'Office woman bright soft sincere reminiscing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '一緒に、行きたかった。', en: 'Together — wanted to go.', style: 'Aunt warm soft sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '友達と、楽しい、また、行こう。', en: 'Friend — fun, again, go.', style: 'Office woman bright soft sincere closing-warm tender-promise enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1115 — hiroshi_boss + kenji, new project (medium)
  {
    id: 'conv_01115',
    context: 'Hiroshi suggests a new joint project to Kenji.',
    purpose: 'mentor-successor joint-project exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['一緒', '計画', '頑張る', '会社', '指導'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、新しい計画、考えてる。', en: 'Kenji — new plan, considering.', style: 'Boss firm formal direct announcing-opening authoritative, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'え、本当ですか。', en: 'Eh — truly?', style: 'Salaryman warm formal sincere-warm surprised-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'hiroshi_boss', jp: '退職、しても、お前と、一緒に、したい。', en: 'Retirement — even, with you, together, want to do.', style: 'Boss firm formal direct tender-warm collaborative, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '光栄です、絶対、一緒に。', en: 'Honored — surely, together.', style: 'Salaryman warm formal sincere-warm committed-warm grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '会社の未来、共に、見ていこう。', en: 'Company future — together, see.', style: 'Boss firm formal direct philosophical-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '頑張ります、全力で。', en: 'Try hard — full strength.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '指導、これからも、ね。', en: 'Guidance — from now.', style: 'Boss firm formal direct closing-warm tender-promise warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1116 — sho + asuka, music class (medium)
  {
    id: 'conv_01116',
    context: 'Asuka teaches Sho about a Japanese folk song.',
    purpose: 'teacher-child music-lesson exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['歌', '伝統', '一緒', '楽しい', '優しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、昔の歌、教えるね。', en: 'Sho-kun — old song, teach.', style: 'Teacher warm gentle sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'うん、聞きたい。', en: 'Yes — want to listen.', style: 'Tiny six-year-old soft small sincere enthusiastic-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '伝統の、優しい歌、ね。', en: 'Traditional — kind song.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '一緒に、歌える？', en: 'Together — can sing?', style: 'Tiny six-year-old soft small sincere asking-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: 'もちろん、ゆっくり、覚えよう。', en: 'Of course — slowly, remember.', style: 'Teacher warm gentle sincere-warm patient-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '楽しい、勉強、絶対。', en: 'Fun — study, surely.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、頑張ろうね。', en: 'Together — try hard.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1117 — mei + aoi, baby music (short)
  {
    id: 'conv_01117',
    context: 'Mei and Aoi play music for their babies.',
    purpose: 'two-mother baby-music exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['音楽', '子ども', '一緒', '楽しい', '優しい'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、子供向けの音楽、流そう。', en: 'Aoi-chan — child-oriented music, play.', style: 'Romantic warm soft sincere-warm proposing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'うん、優しい、メロディ。', en: 'Yes — kind, melody.', style: 'Barista warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '子供、笑顔、見せる。', en: 'Children — smile, show.', style: 'Romantic warm soft sincere-warm observing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '一緒に、踊ろうか。', en: 'Together — dance?', style: 'Barista warm soft sincere-warm proposing-warm playful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '楽しい、皆で。', en: 'Fun — all.', style: 'Romantic warm soft sincere closing-warm enthusiastic-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1118 — ryosuke + sakura, book signing (medium)
  {
    id: 'conv_01118',
    context: 'Ryosuke attends Sakura\'s first book signing.',
    purpose: 'father-daughter book-signing exchange',
    ambient: 'shop_afternoon',
    sound_effects: [],
    target_vocab: ['作品', '一緒', '感謝', '誇り', '大切'],
    cast: ['ryosuke_dad', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'さくら、人、並んでる、本当に。', en: 'Sakura — people, lined up, truly.', style: 'Father warm gentle sincere-warm appreciative-opening proud, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'お父さん、来てくれて、嬉しい。', en: 'Father — came, happy.', style: 'Teen warm soft sincere grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '作品、皆、愛してる、感じ。', en: 'Work — all, loving, feel.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、皆に、本当に。', en: 'Grateful — to all, truly.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '誇り、思ってる、本当に、お前。', en: 'Proud — thinking, truly, you.', style: 'Father warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'お父さんの言葉、力に、なる。', en: 'Father\'s words — strength, become.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '一緒に、ずっと、応援、する。', en: 'Together — long, cheer, do.', style: 'Father warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1119 — hina + sakura, looking up (medium)
  {
    id: 'conv_01119',
    context: 'Hina asks Sakura how to become a writer.',
    purpose: 'cousin writing-mentor exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['夢', '一緒', '頑張る', '相談', '大切'],
    cast: ['hina_child', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'さくらお姉ちゃん、ひな、書きたい。', en: 'Sakura sister — Hina, want to write.', style: 'High child bright sincere announcing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sakura_teen', jp: 'え、本当！嬉しい。', en: 'Eh — truly! Happy.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'お姉ちゃん、教えて。', en: 'Sister — teach.', style: 'High child bright sincere asking-warm hopeful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sakura_teen', jp: 'うん、ゆっくり、一緒に。', en: 'Yes — slowly, together.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: '頑張る、本当に。', en: 'Try hard — truly.', style: 'High child bright sincere committed-warm bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sakura_teen', jp: '夢、追う、大切。', en: 'Dream — chase, precious.', style: 'Teen warm soft sincere philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '相談、いつでも、ね。', en: 'Consult — anytime.', style: 'High child bright sincere closing-warm asking-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-warm' }
    ]
  },
  // 1120 — sachiko + goro, life closing (long)
  {
    id: 'conv_01120',
    context: 'Sachiko and Goro reflect on their long lives with peace.',
    purpose: 'elderly-couple life-closing reflection',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '人生', '感謝', '大切', '幸せ'],
    cast: ['sachiko_grandma', 'goro_grandpa'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'おじいちゃん、長かった、人生。', en: 'Grandpa — long, life.', style: 'Grandma warm gentle sincere-warm reflective-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'goro_grandpa', jp: 'うん、本当、長かった。', en: 'Yes — truly, long was.', style: 'Grandpa warm gentle sincere-warm philosophical-warm matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '一緒に、過ごせて、幸せ。', en: 'Together — could spend, happy.', style: 'Grandma warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'goro_grandpa', jp: 'お前、本当に、感謝。', en: 'You — truly, grateful.', style: 'Grandpa warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: '家族、皆、立派になった。', en: 'Family — all, splendid became.', style: 'Grandma warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'goro_grandpa', jp: '直子、田舎、来てくれて。', en: 'Naoko — country, came.', style: 'Grandpa warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'ひかり、子供たち、可愛い、ね。', en: 'Hikari — children, cute.', style: 'Grandma warm gentle sincere-warm tender-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'goro_grandpa', jp: '皆、見守れて、幸せ。', en: 'All — can watch over, happy.', style: 'Grandpa warm gentle sincere-warm philosophical-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: '感謝、本当に、毎日。', en: 'Grateful — truly, every day.', style: 'Grandma warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'goro_grandpa', jp: 'お前と、最後まで、一緒。', en: 'With you — until end, together.', style: 'Grandpa warm gentle sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: '大切な、人。', en: 'Precious — person.', style: 'Grandma warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'goro_grandpa', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Grandpa warm gentle sincere-warm matching-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'これからも、一緒に、ね。', en: 'From now — together.', style: 'Grandma warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1121 — daichi + sho, sports continue (short)
  {
    id: 'conv_01121',
    context: 'Daichi promises to keep playing sports with Sho.',
    purpose: 'uncle-child sports-promise exchange',
    ambient: 'park_evening',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '頑張る', '応援', 'スポーツ'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、スポーツ、一緒に、続けような。', en: 'Sho — sports, together, continue.', style: 'Kansai warm bright sincere proposing-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、頑張る！', en: 'Yes — try hard!', style: 'Tiny six-year-old soft small sincere committed-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '応援、絶対、する。', en: 'Cheer — surely, do.', style: 'Kansai warm bright sincere committed-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、毎週。', en: 'Fun — every week.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: 'ずっと、ね。', en: 'Long.', style: 'Kansai warm bright sincere closing-warm tender-promise deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1122 — kenji + hiroshi_boss, retirement final (medium)
  {
    id: 'conv_01122',
    context: 'Hiroshi formally retires; Kenji says farewell.',
    purpose: 'successor-mentor retirement-farewell',
    ambient: 'office_evening',
    sound_effects: [],
    target_vocab: ['感謝', '一緒', '人生', '大切', '頑張る'],
    cast: ['kenji_office', 'hiroshi_boss'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '部長、本当に、感謝、本当に。', en: 'Boss — truly, grateful, truly.', style: 'Salaryman warm formal sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'こちらこそ、健次。', en: 'Same — Kenji.', style: 'Boss firm formal direct matching-warm tender-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '一緒に、ここまで、来た、宝。', en: 'Together — until here, came, treasure.', style: 'Salaryman warm formal sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '人生、お前と、過ごせて、幸せ。', en: 'Life — with you, could spend, happy.', style: 'Boss firm formal direct tender-deep loving, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Salaryman warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '頑張れよ、これからも。', en: 'Try hard — from now.', style: 'Boss firm formal direct closing-warm tender-promise deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'はい、絶対に、必ず。', en: 'Yes — surely, certainly.', style: 'Salaryman warm formal sincere closing-warm committed-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1123 — asuka + ren, both teachers (medium)
  {
    id: 'conv_01123',
    context: 'Asuka and Ren collaborate on a curriculum.',
    purpose: 'mentor-colleague curriculum exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['指導', '一緒', '生徒', '頑張る', '大切'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、来年の指導、一緒に、計画しよう。', en: 'Ren-kun — next year\'s guidance, together, plan.', style: 'Teacher warm gentle sincere-warm collaborative-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、楽しみです。', en: 'Yes — looking forward.', style: 'University student warm soft sincere-warm enthusiastic-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '生徒、新しい挑戦、必要。', en: 'Students — new challenge, needed.', style: 'Teacher warm gentle sincere-warm philosophical-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'アイデア、持ってきます。', en: 'Idea — bring.', style: 'University student warm soft sincere-warm committed-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、頑張ろう、また。', en: 'Together — try hard, again.', style: 'Teacher warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '大切な、仕事、ね。', en: 'Precious — work.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '感謝、いつも。', en: 'Grateful — always.', style: 'Teacher warm gentle sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1124 — sho + sakura, big picture (short)
  {
    id: 'conv_01124',
    context: 'Sho asks Sakura about her published book.',
    purpose: 'younger-older book exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['本', '一緒', '夢', '頑張る', '楽しい'],
    cast: ['sho_child', 'sakura_teen'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'さくらお姉ちゃん、本、すごい。', en: 'Sakura sister — book, amazing.', style: 'Tiny six-year-old soft small sincere appreciative-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'sakura_teen', jp: 'ありがとう、しょう。', en: 'Thanks — Sho.', style: 'Teen warm soft sincere grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'ぼくも、夢、持ちたい。', en: 'I too — dream, want to hold.', style: 'Tiny six-year-old soft small sincere honest-warm hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、頑張ろう、ね。', en: 'Together — try hard.', style: 'Teen warm soft sincere encouraging-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '楽しい、夢、見る。', en: 'Fun — dream, see.', style: 'Tiny six-year-old soft small sincere closing-warm enthusiastic-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 1125 — mrs_mori + yumiko, neighbor reunion (medium)
  {
    id: 'conv_01125',
    context: 'Mrs. Mori visits Yumiko now in the country.',
    purpose: 'old-neighbor reunion exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['一緒', '友人', '感謝', '大切', '楽しい'],
    cast: ['mrs_mori_neighbor', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '優子さん、来てくれて、本当、嬉しい。', en: 'Yumiko-san — came, truly, happy.', style: 'Neighbor warm gentle sincere-warm welcoming-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '森さん、お元気で、安心。', en: 'Mori-san — healthy, relieved.', style: 'Maternal warm gentle sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '一緒の時間、本当、大切。', en: 'Together time — truly, precious.', style: 'Neighbor warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '長い友人、ね、本当に。', en: 'Long friend — truly.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: '感謝、本当に、ずっと。', en: 'Grateful — truly, long.', style: 'Neighbor warm gentle sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '楽しい、毎日、過ごしてる。', en: 'Fun — every day, spending.', style: 'Maternal warm gentle sincere-warm appreciative-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'これからも、よろしく。', en: 'From now — please.', style: 'Neighbor warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_056 wrote', CONVERSATIONS.length, 'files');

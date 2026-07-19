import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_012)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // ----------------------------------------------------------------
  // 224 — yumiko + hina, morning routine (short)
  // ----------------------------------------------------------------
  {
    id: 'conv_00224',
    context: 'A weekday morning. Hina is dragging her feet getting ready; Yumiko is trying to keep things moving without scolding.',
    purpose: 'small daily domestic friction — mother-child rhythm with affection',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['朝', '早い', '急ぐ', '学校', '起きる'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひな、もう起きないと遅刻するよ。', en: 'Hina, if you don\'t get up, you\'ll be late.', style: 'Maternal warm gentle morning-firmness, the daily-routine cadence audible, soft real care threading throughout delivery throughout.', mood: 'gently-firm' },
      { speaker: 'hina_child', jp: 'うー、まだ眠いー。', en: 'Ugh, still sleepy.', style: 'High child sleepy whining stretch, the warm childish reluctance audible, soft small drowsiness threading throughout delivery.', mood: 'sleepy-whining' },
      { speaker: 'yumiko_mom', jp: '朝ごはん、もうできてるよ。', en: 'Breakfast is already ready.', style: 'Maternal warm tempting hook, the gentle steady motivation-offering audible, soft real care threading throughout delivery throughout.', mood: 'warmly-tempting' },
      { speaker: 'hina_child', jp: 'えー、何？卵焼き？', en: 'Eh, what? Tamagoyaki?', style: 'High child sleepy curious lift, the wake-up-spark audible in the food-curiosity, soft real interest threading throughout.', mood: 'curiously-waking' },
      { speaker: 'yumiko_mom', jp: '正解。早く着替えて、降りてきて。', en: 'Correct. Hurry change and come down.', style: 'Maternal warm bright deal-closing, the gentle steady morning-management audible, soft real care threading throughout delivery.', mood: 'brightly-managing' },
      { speaker: 'hina_child', jp: 'はーい！すぐ行く！', en: 'Yes! I\'m coming right now!', style: 'High child sudden bright energized response, the food-motivation kicking in, soft real childish energy throughout delivery.', mood: 'energetically-bright' }
    ]
  },
  // ----------------------------------------------------------------
  // 225 — kenji + ren, cousin visit (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00225',
    context: 'Ren is Kenji\'s younger cousin. He drops by Kenji\'s apartment after a long absence.',
    purpose: 'older-cousin / younger-cousin warmth — workplace adult and college kid easy talk',
    ambient: 'apartment_evening',
    sound_effects: [],
    target_vocab: ['久しぶり', '大学', '部屋', '元気', '飲む'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'おう、れん、久しぶり。元気だった？', en: 'Hey, Ren, long time. You been well?', style: 'Salaryman warm familial cousin-greeting, the casual older-cousin warmth audible, soft real care threading throughout delivery.', mood: 'familially-warm' },
      { speaker: 'ren_uni', jp: 'ケンジ兄、お邪魔します。部屋、相変わらず綺麗っすね。', en: 'Kenji-nii, sorry to intrude. The room\'s as tidy as ever.', style: 'University student warm respectful casual cousin-cadence, the gentle observation audible, soft real warmth threading throughout delivery.', mood: 'respectfully-casual' },
      { speaker: 'kenji_office', jp: '大学はどう？忙しいんだろう。', en: 'How\'s university? Probably busy.', style: 'Salaryman warm older-cousin caring inquiry, the soft real protective-curiosity audible, gentle real warmth threading throughout delivery.', mood: 'caringly-curious' },
      { speaker: 'ren_uni', jp: '相変わらず。レポートの締め切り、毎週来る。', en: 'Same as ever. Report deadlines come every week.', style: 'University student warm wry casual complaint, the gentle worn humor audible, soft real warmth threading throughout delivery throughout.', mood: 'wryly-worn' },
      { speaker: 'kenji_office', jp: 'お疲れさん。今日は飲んでけ。ビールあるぞ。', en: 'Hard work. Drink something tonight. There\'s beer.', style: 'Salaryman warm generous casual older-cousin offer, the gentle hospitality audible, soft real warmth threading throughout delivery.', mood: 'generously-warm' },
      { speaker: 'ren_uni', jp: 'やった！ケンジ兄の家、落ち着くわ。', en: 'Yay! Kenji-nii\'s place is calming.', style: 'University student warm bright happy acceptance, the soft real comfort-disclosure audible, gentle real warmth throughout delivery.', mood: 'brightly-comforted' },
      { speaker: 'kenji_office', jp: 'いつでも来いよ。連絡してくれれば。', en: 'Come anytime. If you give me a heads-up.', style: 'Salaryman warm casual generous closing, the gentle real older-cousin warmth audible, soft real warmth throughout delivery.', mood: 'casually-generous' },
      { speaker: 'ren_uni', jp: 'マジ助かる。ありがとうございます。', en: 'Really, that saves me. Thank you.', style: 'University student warm sincere informal-formal blend, the soft real grateful-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-grateful' }
    ]
  },
  // ----------------------------------------------------------------
  // 226 — hiroshi_boss + yuki, performance one-on-one (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00226',
    context: 'A private follow-up to the quarterly review. The boss gives more honest one-on-one feedback to Yuki.',
    purpose: 'workplace one-on-one — formal authority offering more candid mentorship',
    ambient: 'meeting_room',
    sound_effects: [],
    target_vocab: ['評価', '来年', '期待', '課題', '努力'],
    cast: ['hiroshi_boss', 'yuki_office'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '佐藤さん、改めて、今期の評価について。', en: 'Sato, again, about this quarter\'s evaluation.', style: 'Boss measured formal authority opener, the professional weight held respectfully, soft real focus threading throughout delivery throughout.', mood: 'measuredly-formal' },
      { speaker: 'yuki_office', jp: 'はい、よろしくお願いします。', en: 'Yes, please.', style: 'Office woman warm formal respectful receiving, the careful composure audible, soft real attention threading throughout delivery throughout.', mood: 'composedly-formal' },
      { speaker: 'hiroshi_boss', jp: '結果は素晴らしかった。期待以上だった。', en: 'The results were splendid. Beyond expectations.', style: 'Boss measured warm professional praise, the careful weight of real recognition audible, soft real respect threading throughout delivery.', mood: 'measuredly-praising' },
      { speaker: 'yuki_office', jp: 'ありがとうございます。', en: 'Thank you.', style: 'Office woman warm sincere brief formal, the gentle real composure audible, soft real composure threading throughout delivery throughout.', mood: 'sincerely-composed' },
      { speaker: 'hiroshi_boss', jp: '来年は、もう少し主体的に動いてほしい。', en: 'Next year, I\'d like you to act more independently.', style: 'Boss measured warm careful direction-setting, the professional honest guidance audible, soft real respect threading throughout delivery.', mood: 'carefully-directing' },
      { speaker: 'yuki_office', jp: '主体的に、ですか。具体的には？', en: 'Independently, you mean? Specifically?', style: 'Office woman warm professional clarifying inquiry, the careful real engagement audible, soft real composure threading throughout delivery.', mood: 'carefully-clarifying' },
      { speaker: 'hiroshi_boss', jp: '会議で、もっと意見を出してほしい。', en: 'In meetings, voice your opinions more.', style: 'Boss measured warm specific direction, the professional candor audible, soft real respect threading throughout delivery throughout.', mood: 'specifically-warm' },
      { speaker: 'yuki_office', jp: 'わかりました。意識して、努力します。', en: 'Understood. I\'ll be conscious of it and try.', style: 'Office woman warm sincere committed acceptance, the gentle real composed-promise audible, soft real composure throughout delivery.', mood: 'sincerely-committing' },
      { speaker: 'hiroshi_boss', jp: '期待してる。何かあれば相談してほしい。', en: 'I\'m counting on you. If anything, please consult me.', style: 'Boss measured warm closing offer, the professional door-opening audible, soft real respect threading throughout delivery throughout.', mood: 'measuredly-opening' }
    ]
  },
  // ----------------------------------------------------------------
  // 227 — ryosuke + sakura, college essay (long)
  // ----------------------------------------------------------------
  {
    id: 'conv_00227',
    context: 'Sakura is drafting her university application essay. Her father Ryosuke offers to help; she\'s nervous about being judged.',
    purpose: 'father-daughter careful collaboration — parent reviewing teen\'s vulnerable writing',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['作文', '書く', '直す', '意見', '大学', '夢'],
    cast: ['ryosuke_dad', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'さくら、作文できた？見ようか。', en: 'Sakura, did the essay come together? Shall I look?', style: 'Father warm careful gentle offering, the soft real fatherly-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-offering' },
      { speaker: 'sakura_teen', jp: 'うん…ちょっと、緊張する。', en: 'Yeah… a little, nervous.', style: 'Teen warm vulnerable soft disclosure, the careful real opening audible, soft real care threading throughout delivery throughout.', mood: 'softly-vulnerable' },
      { speaker: 'ryosuke_dad', jp: '直すのは後で考えよう。まず読ませて。', en: 'We\'ll think about edits later. Just let me read first.', style: 'Father warm gentle reassuring approach, the soft real careful-respect audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-reassuring' },
      { speaker: 'sakura_teen', jp: 'これ。本当に拙いけど。', en: 'Here. It\'s really clumsy though.', style: 'Teen warm vulnerable self-deprecating offering, the gentle real anxiety audible, soft real care threading throughout delivery throughout.', mood: 'vulnerably-self-deprecating' },
      { speaker: 'ryosuke_dad', jp: '…さくら、これ、お父さん、いいと思うよ。', en: '…Sakura, I think this is good.', style: 'Father warm pause-then-sincere affirmation, the soft real genuine response audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: 'え、本当？お世辞じゃない？', en: 'Eh, really? Not flattery?', style: 'Teen warm careful surprised vulnerable, the gentle real wanting-to-trust audible, soft real warmth threading throughout delivery throughout.', mood: 'carefully-wanting' },
      { speaker: 'ryosuke_dad', jp: 'お世辞は言わない。気持ちが、ちゃんと伝わる文章だ。', en: 'I don\'t do flattery. Your feelings come through in the writing.', style: 'Father warm firm sincere conviction, the soft real principled honesty audible, gentle real warmth threading throughout delivery.', mood: 'firmly-sincere' },
      { speaker: 'sakura_teen', jp: 'なんか、それ嬉しい。', en: 'Somehow, that makes me happy.', style: 'Teen warm soft visible-relief, the gentle real touched-warmth audible, soft real warmth threading throughout delivery throughout.', mood: 'softly-relieved' },
      { speaker: 'ryosuke_dad', jp: 'ただ、一箇所だけ、もう少し具体的にできそう。', en: 'Just one spot — could be a bit more specific.', style: 'Father warm careful gentle suggestion, the soft real respectful-editing audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-suggesting' },
      { speaker: 'sakura_teen', jp: 'どこ？意見、聞きたい。', en: 'Where? I want to hear your opinion.', style: 'Teen warm engaged genuine asking, the soft real openness audible, gentle real care threading throughout delivery throughout.', mood: 'engagedly-asking' },
      { speaker: 'ryosuke_dad', jp: 'この夢のところ。なぜそう思うのか、もう一文。', en: 'This dream part. Why you think so — one more sentence.', style: 'Father warm careful specific guidance, the soft real teaching-respect audible, gentle real warmth threading throughout delivery throughout.', mood: 'specifically-guiding' },
      { speaker: 'sakura_teen', jp: 'なるほど。確かに、薄いかも。', en: 'I see. Truly, maybe it\'s thin.', style: 'Teen warm absorbing thoughtful self-recognition, the gentle real engagement audible, soft real warmth threading throughout delivery.', mood: 'absorbing-thoughtful' },
      { speaker: 'ryosuke_dad', jp: 'お父さんも、書き直してみる時、一晩寝てから読む。', en: 'When I rewrite, I sleep on it before reading again.', style: 'Father warm gentle personal-wisdom sharing, the soft real fatherly-mentor audible, gentle real warmth threading throughout delivery.', mood: 'gently-mentoring' },
      { speaker: 'sakura_teen', jp: '一晩寝てから、ね。やってみる。', en: 'Sleep on it first. I\'ll try.', style: 'Teen warm absorbing soft commitment, the gentle real respect-acceptance audible, soft real warmth threading throughout delivery throughout.', mood: 'softly-committing' },
      { speaker: 'ryosuke_dad', jp: 'うん。さくらの夢、ちゃんと伝わるよ、これ。', en: 'Yes. Your dream, Sakura, comes through with this.', style: 'Father warm closing sincere affirmation, the soft real fatherly-love audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-affirming' }
    ]
  },
  // ----------------------------------------------------------------
  // 228 — sho + sakura, reading (short)
  // ----------------------------------------------------------------
  {
    id: 'conv_00228',
    context: 'Sho is at Sakura\'s house. They\'ve been reading on the sofa together for an hour without either of them saying much.',
    purpose: 'quiet companionship — older girl and small boy at parallel reading',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['静か', '本', '一緒', '楽しい', '面白い'],
    cast: ['sho_child', 'sakura_teen'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'しょうくん、その本、面白い？', en: 'Sho-kun, is that book interesting?', style: 'Teen warm soft gentle inquiry, the older-cousin care audible, soft real warmth threading throughout delivery throughout.', mood: 'gently-curious' },
      { speaker: 'sho_child', jp: 'うん…ちょっと難しい。', en: 'Yeah… a little hard.', style: 'Tiny six-year-old soft honest careful sharing, the small effortful disclosure audible, soft small earnestness throughout delivery.', mood: 'softly-honest' },
      { speaker: 'sakura_teen', jp: 'どこが？教えて。', en: 'Where? Tell me.', style: 'Teen warm gentle interested encouraging, the soft real helping-extending audible, gentle real warmth threading throughout delivery.', mood: 'gently-helping' },
      { speaker: 'sho_child', jp: 'この漢字…読めない。', en: 'This kanji… I can\'t read it.', style: 'Tiny six-year-old soft vulnerable specific sharing, the gentle real ask-for-help audible, soft small earnestness throughout delivery.', mood: 'vulnerably-specific' },
      { speaker: 'sakura_teen', jp: 'これは「美しい」って読むよ。一緒に読もう。', en: 'This reads "utsukushii." Let\'s read together.', style: 'Teen warm gentle teaching-warmth, the soft real big-cousin care audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-teaching' },
      { speaker: 'sho_child', jp: 'うん、楽しい、お姉ちゃんと一緒。', en: 'Yeah, it\'s fun, with big sister.', style: 'Tiny six-year-old soft warming joy-disclosure, the gentle real childish-love audible, soft small warmth threading throughout delivery.', mood: 'softly-joyful' }
    ]
  },
  // ----------------------------------------------------------------
  // 229 — aoi + ren, second deeper conv (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00229',
    context: 'Aoi has brought the promised jazz playlist to the café. Ren\'s last study session before exams; they share earbuds briefly.',
    purpose: 'second connection deepening — small soft musical intimacy',
    ambient: 'cafe_late_afternoon',
    sound_effects: [],
    target_vocab: ['音楽', '紹介', '古い', '聴く', '好き'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'これ、約束のプレイリスト。', en: 'Here, the promised playlist.', style: 'Soft dreamy barista warm gentle delivery, the soft real shy-offering audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-offering' },
      { speaker: 'ren_uni', jp: 'うわ、覚えててくれたんすか。嬉しい。', en: 'Wow, you remembered? I\'m happy.', style: 'University student warm surprised genuine warmth, the soft real touched-warmth audible, gentle real warmth threading throughout delivery.', mood: 'genuinely-touched' },
      { speaker: 'aoi_barista', jp: '一曲目、聴いてみてください。', en: 'Try listening to the first song.', style: 'Soft dreamy barista warm gentle directing, the soft real shy-eagerness audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-eager' },
      { speaker: 'ren_uni', jp: 'はい…うわ、これ、めっちゃ良い。', en: 'Yes… wow, this is really good.', style: 'University student warm soft listening then genuine wonder, the soft real engagement audible, gentle real warmth throughout delivery.', mood: 'genuinely-wondering' },
      { speaker: 'aoi_barista', jp: '良かった。父親が好きだった曲。', en: 'I\'m glad. My father loved this song.', style: 'Soft dreamy barista warm gentle personal disclosure, the soft real depth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-disclosing' },
      { speaker: 'ren_uni', jp: 'お父さん、音楽好きだったんすね。', en: 'Your dad really liked music.', style: 'University student warm gentle careful soft inquiry, the soft real careful-curiosity audible, gentle real warmth threading throughout delivery.', mood: 'carefully-curious' },
      { speaker: 'aoi_barista', jp: 'うん、毎晩リビングで聴いてた。古いCDで。', en: 'Yes, every night in the living room. On old CDs.', style: 'Soft dreamy barista warm tender memory-sharing, the soft real depth audible, gentle real warmth threading throughout delivery throughout.', mood: 'tenderly-sharing' },
      { speaker: 'ren_uni', jp: 'なんか、いい光景。', en: 'Somehow, a nice scene.', style: 'University student warm soft gentle observation, the soft real appreciative-warmth audible, gentle real warmth threading throughout delivery.', mood: 'softly-appreciating' },
      { speaker: 'aoi_barista', jp: '勉強の合間に、聴いてくれたら嬉しい。', en: 'During study breaks, if you listen, I\'d be glad.', style: 'Soft dreamy barista warm gentle closing wish, the soft real hopeful-warmth audible, gentle real warmth threading throughout delivery.', mood: 'gently-wishing' }
    ]
  },
  // ----------------------------------------------------------------
  // 230 — naoko + sho, babysitting (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00230',
    context: 'Aunt Naoko is watching Sho for the afternoon. She makes a small game out of the wait.',
    purpose: 'aunt-nephew companionship — older-relative making time pleasant for a quiet child',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['静か', '優しい', '食べる', '絵', '楽しい'],
    cast: ['naoko_aunt', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'しょうくん、何して遊ぼっか。', en: 'Sho-kun, what shall we play?', style: 'Aunt warm bright child-tuned opening, the gentle real warm-energy audible, soft real warmth threading throughout delivery throughout.', mood: 'brightly-warm' },
      { speaker: 'sho_child', jp: 'えっと…絵、描いていい？', en: 'Um… can I draw a picture?', style: 'Tiny six-year-old careful soft asking, the gentle small wanting-to-be-allowed audible, soft small earnestness throughout delivery.', mood: 'carefully-asking' },
      { speaker: 'naoko_aunt', jp: 'もちろん。一緒に描こうか。', en: 'Of course. Shall we draw together?', style: 'Aunt warm bright gentle inclusion, the soft real warm-extending audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-including' },
      { speaker: 'sho_child', jp: 'うん…なおこちゃん、何描く？', en: 'Yeah… Naoko-chan, what will you draw?', style: 'Tiny six-year-old soft warming curiosity, the gentle real reciprocal-interest audible, soft small warmth threading throughout delivery.', mood: 'softly-curious' },
      { speaker: 'naoko_aunt', jp: 'うーん、お花にしようかな。', en: 'Mm, maybe flowers.', style: 'Aunt warm gentle thoughtful deciding, the soft real cooperative-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'thoughtfully-warm' },
      { speaker: 'sho_child', jp: 'ぼく、動物。', en: 'Me, animals.', style: 'Tiny six-year-old soft brief decisive sharing, the gentle small confidence audible, soft small earnestness threading throughout delivery.', mood: 'softly-decisive' },
      { speaker: 'naoko_aunt', jp: 'えらいねえ、好きなもの決まってて。', en: 'Good for you, having what you like decided.', style: 'Aunt warm gentle specific praise, the soft real recognizing-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-praising' },
      { speaker: 'sho_child', jp: '…なおこちゃん、優しい。', en: '…Naoko-chan, kind.', style: 'Tiny six-year-old soft genuine quiet observation, the gentle small disclosed-feeling audible, soft small warmth threading throughout delivery.', mood: 'softly-observing' },
      { speaker: 'naoko_aunt', jp: 'ふふ、ありがとう。しょうくんも優しいよ。', en: 'Hehe, thank you. Sho-kun is kind too.', style: 'Aunt warm gentle touched reciprocal-warmth, the soft real touched-affection audible, gentle real warmth threading throughout delivery.', mood: 'gently-touched' }
    ]
  },
  // ----------------------------------------------------------------
  // 231 — daichi + asuka, supermarket (short)
  // ----------------------------------------------------------------
  {
    id: 'conv_00231',
    context: 'Daichi runs into Ms. Asuka again at the supermarket, both buying groceries on a Sunday evening.',
    purpose: 'small civilian re-meeting — school-formality dropped, casual neighborly recognition',
    ambient: 'supermarket_evening',
    sound_effects: [],
    target_vocab: ['偶然', '買い物', '夕飯', '何', '作る'],
    cast: ['daichi_kansai', 'asuka_teacher'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'あれ、あすか先生やん。', en: 'Hey, isn\'t that Asuka-sensei?', style: 'Kansai warm bright recognition, the regional casual-swing dropping the school formality, soft real warmth throughout delivery throughout.', mood: 'casually-bright' },
      { speaker: 'asuka_teacher', jp: 'あら、こんばんは。買い物ですか？', en: 'Oh, good evening. Doing shopping?', style: 'Teacher warm casual easy weekend-register, the gentle real off-duty warmth audible, soft real warmth throughout delivery throughout.', mood: 'casually-warm' },
      { speaker: 'daichi_kansai', jp: 'はい、夕飯の材料買いに。', en: 'Yes, buying ingredients for dinner.', style: 'Kansai warm casual disclosure, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'casually-disclosing' },
      { speaker: 'asuka_teacher', jp: '今日は何作るんですか？', en: 'What are you making today?', style: 'Teacher warm easy genuine curiosity, the gentle real weekend-curiosity audible, soft real warmth threading throughout delivery throughout.', mood: 'easily-curious' },
      { speaker: 'daichi_kansai', jp: 'お好み焼き。一人やけど、無性に食べたくなって。', en: 'Okonomiyaki. Alone, but suddenly wanted it.', style: 'Kansai warm laughing casual disclosure, the regional swing carrying the homesick-pull audible, soft real warmth throughout delivery.', mood: 'warmly-laughing' },
      { speaker: 'asuka_teacher', jp: 'いいですね、関西の味で。', en: 'How nice — the taste of Kansai.', style: 'Teacher warm gentle appreciative closing, the soft real warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-appreciating' }
    ]
  },
  // ----------------------------------------------------------------
  // 232 — takeda + sho + yumiko, pet bird (medium, 3-speaker)
  // ----------------------------------------------------------------
  {
    id: 'conv_00232',
    context: 'Sho\'s small bird has escaped into the neighbor\'s tree. Yumiko called Officer Takeda for advice; he\'s come by to help calm everyone.',
    purpose: 'civic kindness around small child crisis — adult professional and mother stabilizing a frightened child',
    ambient: 'street_afternoon',
    sound_effects: [],
    target_vocab: ['鳥', '助かる', '安心', '親切', '帰る'],
    cast: ['takeda_officer', 'sho_child', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'すみません、わざわざ来ていただいて。', en: 'Sorry, thank you for coming out specifically.', style: 'Maternal warm formal apologetic gratitude, the soft real anxiety audible, gentle real warmth threading throughout delivery throughout.', mood: 'formally-apologetic' },
      { speaker: 'takeda_officer', jp: 'いえ、お子さんの心配ですから。', en: 'No, it\'s about your child\'s worry.', style: 'Officer warm gentle reassuring professional, the soft real public-servant care audible, gentle real warmth threading throughout delivery.', mood: 'gently-reassuring' },
      { speaker: 'sho_child', jp: '…ピーちゃん、まだ木の上…。', en: '…Pii-chan, still in the tree…', style: 'Tiny six-year-old wet wavering voice, the soft small heartbroken-worry audible, soft small distress threading throughout delivery throughout.', mood: 'wateringly-worried' },
      { speaker: 'takeda_officer', jp: 'しょうくん、大丈夫。鳥はね、夕方になると、お腹空く。', en: 'Sho-kun, it\'s okay. Birds, by evening, get hungry.', style: 'Officer warm gentle child-tuned wisdom, the soft real expert-reassuring audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-wise' },
      { speaker: 'sho_child', jp: 'お腹空いたら…帰ってくる？', en: 'When hungry… will it come back?', style: 'Tiny six-year-old soft tentative hope-rising, the gentle small wanting-to-believe audible, soft small fragile-hope throughout delivery.', mood: 'fragilely-hopeful' },
      { speaker: 'takeda_officer', jp: '帰ってくることが多い。お父さんのケージ、外に置いといて。', en: 'Often, yes. Leave its cage outside.', style: 'Officer warm gentle practical wisdom-instruction, the soft real careful-direction audible, gentle real warmth threading throughout delivery.', mood: 'practically-gentle' },
      { speaker: 'yumiko_mom', jp: '本当に、ありがとうございます。', en: 'Truly, thank you.', style: 'Maternal warm deep sincere gratitude, the soft real relief-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'deeply-grateful' },
      { speaker: 'sho_child', jp: 'お巡りさん、優しい。', en: 'Officer, kind.', style: 'Tiny six-year-old soft genuine quiet acknowledgment, the gentle small touched-trust audible, soft small warmth threading throughout delivery.', mood: 'softly-trusting' },
      { speaker: 'takeda_officer', jp: 'ピーちゃん帰ってきたら、教えてくださいね。', en: 'When Pii-chan comes back, tell me, okay?', style: 'Officer warm gentle closing extending care, the soft real continuation-of-care audible, gentle real warmth threading throughout delivery.', mood: 'gently-extending' }
    ]
  },
  // ----------------------------------------------------------------
  // 233 — mei + daichi, cooking at his apartment (long)
  // ----------------------------------------------------------------
  {
    id: 'conv_00233',
    context: 'Daichi has invited Mei to his small apartment for the first time. He cooks okonomiyaki for her with his grandmother\'s recipe.',
    purpose: 'mid-relationship intimate cooking — small domestic milestone',
    ambient: 'apartment_kitchen',
    sound_effects: [],
    target_vocab: ['料理', '一緒', '教える', '美味しい', '楽しい', '招待'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '招待ありがと。ちょっと狭いけど、ゆっくりして。', en: 'Thanks for accepting the invite. Bit cramped, but relax.', style: 'Kansai warm shy-warm welcome, the regional swing softened with care, soft real warmth threading throughout delivery throughout.', mood: 'shyly-warm' },
      { speaker: 'mei_romantic', jp: 'お邪魔します。可愛い部屋。', en: 'Excuse the intrusion. Cute apartment.', style: 'Romantic warm careful pleasant observation, the soft real visiting-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-pleasant' },
      { speaker: 'daichi_kansai', jp: 'お好み焼き、作るで。おばあちゃんのレシピ。', en: 'I\'m making okonomiyaki. Grandmother\'s recipe.', style: 'Kansai warm proud announcement, the regional swing carrying real heritage-pride, soft real warmth threading throughout delivery throughout.', mood: 'proudly-warm' },
      { speaker: 'mei_romantic', jp: 'え、嬉しい。手伝わせて。', en: 'Eh, happy. Let me help.', style: 'Romantic warm sincere enthusiasm, the soft real warm-eagerness audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-enthusiastic' },
      { speaker: 'daichi_kansai', jp: 'ほな、キャベツ切ってもらえる？', en: 'Then, can you cut the cabbage?', style: 'Kansai warm cooperative request, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'cooperatively-warm' },
      { speaker: 'mei_romantic', jp: 'うん、もちろん。細かく？大きく？', en: 'Yes, of course. Fine, or big?', style: 'Romantic warm engaged careful checking, the soft real wanting-to-do-it-right audible, gentle real warmth threading throughout delivery.', mood: 'engagedly-checking' },
      { speaker: 'daichi_kansai', jp: '細かいほうがふんわりするねん。', en: 'Finer makes it fluffier.', style: 'Kansai warm sharing kitchen-wisdom, the regional swing carrying real culinary-knowledge, soft real warmth threading throughout delivery.', mood: 'warmly-sharing' },
      { speaker: 'mei_romantic', jp: 'なるほど。すごい、ちゃんと知ってる。', en: 'I see. Wow, you really know.', style: 'Romantic warm admiring sincere observation, the soft real impressed-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-admiring' },
      { speaker: 'daichi_kansai', jp: 'おばあちゃんに、何回も教えてもろたから。', en: 'Grandmother taught me many times.', style: 'Kansai warm tender memory-sharing, the regional swing carrying soft love, gentle real warmth threading throughout delivery throughout.', mood: 'tenderly-sharing' },
      { speaker: 'mei_romantic', jp: 'おばあちゃん、優しい人なんでしょうね。', en: 'Grandmother must be a kind person.', style: 'Romantic warm gentle inference, the soft real warm-recognition audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-recognizing' },
      { speaker: 'daichi_kansai', jp: 'うん。今度、紹介させてや。', en: 'Yeah. Sometime, let me introduce you.', style: 'Kansai warm sincere gentle offer, the regional swing carrying real love-extending, soft real warmth threading throughout delivery throughout.', mood: 'sincerely-offering' },
      { speaker: 'mei_romantic', jp: 'えっ、本当に？嬉しい。', en: 'Eh, really? I\'m happy.', style: 'Romantic warm touched surprised soft happiness, the gentle real moved-warmth audible, soft real warmth threading throughout delivery throughout.', mood: 'touchedly-happy' },
      { speaker: 'daichi_kansai', jp: 'よし、焼いてみる！', en: 'Right, let\'s grill!', style: 'Kansai warm bright energetic pivot, the regional swing audible in the action-energy, soft real warmth threading throughout delivery throughout.', mood: 'energetically-warm' },
      { speaker: 'mei_romantic', jp: 'いい匂い…。お腹空いた。', en: 'Good smell… I\'m hungry.', style: 'Romantic warm soft hungry observation, the gentle real anticipation audible, soft real warmth threading throughout delivery throughout.', mood: 'softly-anticipating' },
      { speaker: 'daichi_kansai', jp: 'おばあちゃんの味、楽しんでな。', en: 'Enjoy grandma\'s taste.', style: 'Kansai warm proud loving closing, the regional swing carrying generations-love, soft real warmth threading throughout delivery throughout.', mood: 'proudly-loving' },
      { speaker: 'mei_romantic', jp: '美味しい！本当に、ほんとに美味しい。', en: 'Delicious! Truly, really delicious.', style: 'Romantic warm bright sincere appreciative joy, the soft real touched-pleasure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-joyful' }
    ]
  },
  // ----------------------------------------------------------------
  // 234 — saito + sachiko, annual check (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00234',
    context: 'Sachiko\'s annual checkup. Dr. Saito has been her doctor for fifteen years.',
    purpose: 'long-rapport doctor and elder patient — careful elder care continuing into another year',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['検査', '元気', '結果', '健康', '安心'],
    cast: ['saito_doctor', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'お母さん、今年も検査の時期ですね。', en: 'Ma\'am, it\'s checkup time again this year.', style: 'Doctor warm long-rapport familial respectful opener, the gentle real care audible, soft real warmth threading throughout delivery.', mood: 'warmly-respectful' },
      { speaker: 'sachiko_grandma', jp: 'もう一年経つのね。早いわ。', en: 'A year already. Time flies.', style: 'Soft grandmother warm gentle time-wonder, the soft real elder-reflection audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-wondering' },
      { speaker: 'saito_doctor', jp: '血液の結果、特に問題ありません。', en: 'Blood results — no particular issues.', style: 'Doctor warm professional reassuring clarity, the soft real care-confirmation audible, gentle real warmth threading throughout delivery.', mood: 'professionally-reassuring' },
      { speaker: 'sachiko_grandma', jp: 'まあ、本当？安心したわ。', en: 'My, really? I feel relieved.', style: 'Soft grandmother warm sincere relief, the soft real elder-gratitude audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-relieved' },
      { speaker: 'saito_doctor', jp: '腰のお薬は、続けてくださいね。', en: 'Keep taking your back medicine.', style: 'Doctor warm gentle professional reminder, the soft real ongoing-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-reminding' },
      { speaker: 'sachiko_grandma', jp: 'はい、忘れず飲んでます。', en: 'Yes, I don\'t forget to take it.', style: 'Soft grandmother warm careful reassuring obedience, the soft real respect audible, gentle real warmth throughout delivery throughout.', mood: 'carefully-respectful' },
      { speaker: 'saito_doctor', jp: 'いつも健康に気を遣われていて、立派です。', en: 'You\'re always mindful of your health — admirable.', style: 'Doctor warm sincere gentle praise, the soft real respectful-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-praising' },
      { speaker: 'sachiko_grandma', jp: 'おかげさまで。先生のおかげよ。', en: 'Thanks to you. Doctor\'s help.', style: 'Soft grandmother warm humble redirecting, the soft real elder-grace audible, gentle real warmth threading throughout delivery throughout.', mood: 'humbly-grateful' }
    ]
  },
  // ----------------------------------------------------------------
  // 235 — hiroshi_elder + sho, insects (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00235',
    context: 'In the garden. Hiroshi-elder is teaching little Sho about the small beetle they\'ve found on a leaf.',
    purpose: 'quiet elder teaching small grandchild about nature — patient curiosity',
    ambient: 'garden_afternoon',
    sound_effects: [],
    target_vocab: ['虫', '名前', '教える', '小さい', '面白い'],
    cast: ['hiroshi_elder', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'おじいちゃん、見て、虫いる。', en: 'Grandpa, look, there\'s a bug.', style: 'Tiny six-year-old soft gentle discovery-sharing, the small careful interest audible, soft small wonder throughout delivery throughout.', mood: 'softly-discovering' },
      { speaker: 'hiroshi_elder', jp: 'おお、これは、てんとう虫だな。', en: 'Oh, this — it\'s a ladybug.', style: 'Slow elder warm gentle teaching-naming, the soft real grandfatherly-knowledge audible, gentle real warmth threading throughout delivery.', mood: 'gently-naming' },
      { speaker: 'sho_child', jp: 'てんとう…むし？', en: 'Ten-tou… mushi?', style: 'Tiny six-year-old soft careful repeating-to-learn, the small earnest attention audible, soft small focus threading throughout delivery throughout.', mood: 'carefully-learning' },
      { speaker: 'hiroshi_elder', jp: 'そう。赤くて、黒い点があるな。', en: 'Yes. Red, with black dots.', style: 'Slow elder warm gentle observing-describing, the soft real careful-attention audible, gentle real warmth threading throughout delivery.', mood: 'gently-describing' },
      { speaker: 'sho_child', jp: '七つある。七つの点。', en: 'There are seven. Seven dots.', style: 'Tiny six-year-old soft focused counting-pride, the gentle small careful-precision audible, soft small wonder threading throughout delivery.', mood: 'focusedly-counting' },
      { speaker: 'hiroshi_elder', jp: 'よう数えたな。賢い。', en: 'Good counting. Smart.', style: 'Slow elder warm gentle pleased praise, the soft real grandfather-pride audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-praising' },
      { speaker: 'sho_child', jp: 'てんとう虫、どこ行くの？', en: 'Where is the ladybug going?', style: 'Tiny six-year-old soft genuine wondering inquiry, the small real curiosity audible, soft small wonder threading throughout delivery throughout.', mood: 'gently-wondering' },
      { speaker: 'hiroshi_elder', jp: 'お家へ帰るんだろう。みんなと一緒に。', en: 'Going home, probably. With everyone.', style: 'Slow elder warm gentle imaginative answer, the soft real grandfatherly-warmth audible, gentle real warmth threading throughout delivery.', mood: 'gently-imagining' },
      { speaker: 'sho_child', jp: 'うん…じゃあ、見送ろう。', en: 'Yeah… then, let\'s see it off.', style: 'Tiny six-year-old soft gentle warm-decision, the small earnest care-extending audible, soft small warmth threading throughout delivery.', mood: 'gently-warm' }
    ]
  },
  // ----------------------------------------------------------------
  // 236 — yuki + mrs_mori, new in building (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00236',
    context: 'Yuki has just moved into the same building as Mrs. Mori. She comes by to greet her with a small token gift.',
    purpose: 'new-neighbor introduction — small civic ritual of moving-in greeting',
    ambient: 'genkan_afternoon',
    sound_effects: [],
    target_vocab: ['引っ越し', '挨拶', '近所', '始める', 'よろしく'],
    cast: ['yuki_office', 'mrs_mori_neighbor'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'こんにちは。今度、隣に引っ越してきました。', en: 'Hello. I\'ve just moved in next door.', style: 'Office woman warm formal pleasant new-neighbor opener, the careful real first-meeting audible, soft real warmth throughout delivery.', mood: 'formally-pleasant' },
      { speaker: 'mrs_mori_neighbor', jp: 'あら、いらっしゃい。よろしくね。', en: 'Oh, welcome. Pleased to know you.', style: 'Neighbor warm gentle welcoming community-greeting, the soft real elder-graciousness audible, gentle real warmth throughout delivery.', mood: 'gently-welcoming' },
      { speaker: 'yuki_office', jp: '佐藤と申します。これ、ご挨拶代わりに。', en: 'I\'m Sato. This is in place of greetings.', style: 'Office woman warm formal proper introduction-with-gift, the careful real respect audible, soft real warmth throughout delivery throughout.', mood: 'formally-proper' },
      { speaker: 'mrs_mori_neighbor', jp: 'まあ、わざわざ。気を遣ってもらって。', en: 'Oh, going out of your way. Such consideration.', style: 'Neighbor warm gentle touched gracious receiving, the soft real elder-appreciation audible, gentle real warmth throughout delivery.', mood: 'graciously-touched' },
      { speaker: 'yuki_office', jp: 'これから、よろしくお願いします。', en: 'From now on, please look after me.', style: 'Office woman warm formal sincere extending, the soft real careful-respect audible, gentle real warmth threading throughout delivery throughout.', mood: 'formally-sincere' },
      { speaker: 'mrs_mori_neighbor', jp: '若い方が来てくれて、嬉しいわ。何かあれば言ってね。', en: 'I\'m glad a young person came. If anything comes up, tell me.', style: 'Neighbor warm gentle generous welcoming offer, the soft real elder-community audible, gentle real warmth throughout delivery throughout.', mood: 'generously-welcoming' },
      { speaker: 'yuki_office', jp: '本当に、ありがとうございます。安心しました。', en: 'Truly, thank you. I\'m relieved.', style: 'Office woman warm soft sincere relieved-gratitude, the soft real touched-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-relieved' },
      { speaker: 'mrs_mori_neighbor', jp: 'いつでも来てちょうだいね。', en: 'Come anytime.', style: 'Neighbor warm gentle elder-closing, the soft real generous-openness audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-closing' }
    ]
  },
  // ----------------------------------------------------------------
  // 237 — kenji + riku, uncle-figure wisdom (long)
  // ----------------------------------------------------------------
  {
    id: 'conv_00237',
    context: 'Kenji is Riku\'s actual uncle. Riku comes to ask about real working life as he thinks about whether to even go to university.',
    purpose: 'uncle-nephew mentorship — adult man offering younger one real working-world perspective',
    ambient: 'apartment_evening',
    sound_effects: [],
    target_vocab: ['仕事', '経験', '将来', '大変', '大事', '選ぶ'],
    cast: ['kenji_office', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'おじさん、ちょっと聞いてもいい？', en: 'Uncle, can I ask something?', style: 'Teen warm careful nephew-asking, the gentle real respect audible, soft real warmth threading throughout delivery throughout.', mood: 'carefully-asking' },
      { speaker: 'kenji_office', jp: 'うん、どうした？', en: 'Yeah, what is it?', style: 'Salaryman warm easy uncle-listening register, the soft real open-attention audible, gentle real warmth threading throughout delivery.', mood: 'easily-listening' },
      { speaker: 'riku_teen', jp: '大学行かなくても、なんとかなるかな。', en: 'Even without going to university, will it work out?', style: 'Teen warm honest vulnerable real question, the soft real searching audible, gentle real warmth threading throughout delivery throughout.', mood: 'honestly-vulnerable' },
      { speaker: 'kenji_office', jp: 'うん、なんとかなる。けど、選択肢は減るかもしれない。', en: 'Yeah, it works out. But choices may shrink.', style: 'Salaryman warm honest balanced careful answer, the soft real adult-honesty audible, gentle real warmth threading throughout delivery.', mood: 'honestly-balanced' },
      { speaker: 'riku_teen', jp: '選択肢って、具体的にどんな？', en: 'Choices — specifically what kind?', style: 'Teen warm engaged genuine real question, the soft real wanting-clarity audible, gentle real warmth threading throughout delivery throughout.', mood: 'engagedly-questioning' },
      { speaker: 'kenji_office', jp: '入れる仕事の種類とか、給料の高さとか。', en: 'Types of jobs you can enter, salary level, things like that.', style: 'Salaryman warm honest specific explanation, the soft real adult-clarity audible, gentle real warmth threading throughout delivery throughout.', mood: 'honestly-specific' },
      { speaker: 'riku_teen', jp: '大学行ったから、絶対いいわけじゃない？', en: 'Just because you went to university — it\'s not automatically good?', style: 'Teen warm engaged genuine inquiry, the soft real real-thinking audible, gentle real warmth threading throughout delivery throughout.', mood: 'engagedly-thinking' },
      { speaker: 'kenji_office', jp: 'もちろん。何を学ぶかが、もっと大事。', en: 'Of course. What you learn matters more.', style: 'Salaryman warm honest principled wisdom, the soft real real-mentor audible, gentle real warmth threading throughout delivery throughout.', mood: 'principle-warm' },
      { speaker: 'riku_teen', jp: 'おじさんは、大学行って良かった？', en: 'Uncle, are you glad you went?', style: 'Teen warm personal direct inquiry, the soft real wanting-personal-truth audible, gentle real warmth threading throughout delivery throughout.', mood: 'personally-asking' },
      { speaker: 'kenji_office', jp: 'うん、よかった。経験そのものが財産になった。', en: 'Yeah, I\'m glad. The experience itself became a treasure.', style: 'Salaryman warm sincere personal disclosure, the soft real adult-reflection audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-disclosing' },
      { speaker: 'riku_teen', jp: 'なるほど…。なんか、ちょっと整理できた。', en: 'I see… somehow, my head\'s a bit clearer.', style: 'Teen warm absorbed thoughtful sharing, the soft real real-processing audible, gentle real warmth threading throughout delivery throughout.', mood: 'thoughtfully-processing' },
      { speaker: 'kenji_office', jp: '将来のことは、急がなくていい。ちゃんと考えな。', en: 'About the future, no need to rush. Think it through.', style: 'Salaryman warm gentle uncle-wisdom closing, the soft real protective-care audible, gentle real warmth threading throughout delivery.', mood: 'gently-protective' },
      { speaker: 'riku_teen', jp: 'うん。ありがとう、おじさん。', en: 'Yeah. Thanks, uncle.', style: 'Teen warm sincere closing gratitude, the soft real touched-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-warm' }
    ]
  },
  // ----------------------------------------------------------------
  // 238 — hina + asuka + sho, art class (3-speaker, medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00238',
    context: 'Saturday art class at the community center. Ms. Asuka volunteers; Hina and Sho both attend.',
    purpose: 'community art class — teacher attention shared between two contrasting children',
    ambient: 'community_room_morning',
    sound_effects: [],
    target_vocab: ['描く', '上手', '楽しい', '作品', '色'],
    cast: ['asuka_teacher', 'hina_child', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: '今日は、好きな色で描いてみてね。', en: 'Today, try drawing with your favorite color.', style: 'Teacher warm professional bright child-tuned opening, the soft real teaching-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-warm' },
      { speaker: 'hina_child', jp: 'はーい！ピンクで描く！', en: 'Yes! I\'ll draw in pink!', style: 'High child bright energetic enthusiastic declaration, the soft real childish-conviction audible, gentle real joy throughout delivery throughout.', mood: 'energetically-bright' },
      { speaker: 'sho_child', jp: 'えっと…青、にする。', en: 'Um… blue, I\'ll go with.', style: 'Tiny six-year-old soft careful gentle decision, the small earnest choice audible, soft small focus threading throughout delivery throughout.', mood: 'carefully-deciding' },
      { speaker: 'asuka_teacher', jp: '二人とも、いい色ね。', en: 'Both of you, good colors.', style: 'Teacher warm gentle warm balanced validation, the soft real attentive-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-validating' },
      { speaker: 'hina_child', jp: 'お花描こう！しょうくんは？', en: 'I\'ll draw flowers! Sho-kun, what?', style: 'High child warm bright inclusive curiosity, the soft real social-energy audible, gentle real warmth throughout delivery throughout.', mood: 'inclusively-bright' },
      { speaker: 'sho_child', jp: 'ぼく…海。', en: 'Me… ocean.', style: 'Tiny six-year-old soft brief gentle answer, the small earnest disclosure audible, soft small warmth threading throughout delivery throughout.', mood: 'softly-brief' },
      { speaker: 'asuka_teacher', jp: '海、いいね。青がよく合うね。', en: 'Ocean, nice. Blue suits it well.', style: 'Teacher warm gentle specific praise-validation, the soft real attentive-care audible, gentle real warmth threading throughout delivery.', mood: 'specifically-praising' },
      { speaker: 'sho_child', jp: 'うん、楽しい。', en: 'Yeah, fun.', style: 'Tiny six-year-old soft warming gentle agreement, the small real warmth audible, soft small joy threading throughout delivery throughout.', mood: 'softly-warming' },
      { speaker: 'hina_child', jp: 'ねえ、しょうくんの作品、見せて？', en: 'Hey, Sho-kun, show me your work?', style: 'High child warm bright inclusive request, the soft real sibling-warm energy audible, gentle real warmth throughout delivery throughout.', mood: 'brightly-requesting' }
    ]
  },
  // ----------------------------------------------------------------
  // 239 — tatsuya + ryosuke, phone call (short)
  // ----------------------------------------------------------------
  {
    id: 'conv_00239',
    context: 'Tatsuya calls Ryosuke about a visit. Phone-call cadence, brief masculine warmth.',
    purpose: 'short masculine phone call — practical visit planning',
    ambient: 'phone_call',
    sound_effects: [],
    target_vocab: ['電話', '予定', '来週', '都合', '楽しみ'],
    cast: ['tatsuya_country', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'もしもし、達也です。', en: 'Hello, this is Tatsuya.', style: 'Country gruff brief phone-opener, the rural plain delivery, soft real warmth threading throughout delivery throughout.', mood: 'gruffly-brief' },
      { speaker: 'ryosuke_dad', jp: 'おお、達也さん。どうしました？', en: 'Oh, Tatsuya. What\'s up?', style: 'Father warm easy phone-receiving, the gentle real warm-familiarity audible, soft real warmth threading throughout delivery throughout.', mood: 'easily-warm' },
      { speaker: 'tatsuya_country', jp: '来週、そっち行こか思って。都合どうや？', en: 'Thinking of coming over next week. How\'s your schedule?', style: 'Country gruff direct practical phone-cadence, the soft real care behind the brusqueness, soft real warmth throughout delivery.', mood: 'gruffly-direct' },
      { speaker: 'ryosuke_dad', jp: 'お、来てくれるんですか。土曜なら大丈夫です。', en: 'Oh, you\'ll come? Saturday\'s fine.', style: 'Father warm bright pleased eager-response, the soft real welcoming-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-welcoming' },
      { speaker: 'tatsuya_country', jp: 'ほな、土曜の昼前に着くわ。', en: 'Then, I\'ll arrive before noon Saturday.', style: 'Country gruff brief practical confirming, the rural plain delivery, soft real warmth threading throughout delivery throughout.', mood: 'gruffly-confirming' },
      { speaker: 'ryosuke_dad', jp: 'はい、楽しみにしてます。お気をつけて。', en: 'Yes, looking forward. Take care.', style: 'Father warm sincere closing warm farewell, the soft real anticipating-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // ----------------------------------------------------------------
  // 240 — sakura + hina + sho, park (medium, 3-speaker)
  // ----------------------------------------------------------------
  {
    id: 'conv_00240',
    context: 'Sakura takes Hina and Sho to the park on Sunday afternoon. The kids are inventing a game; Sakura is the gentle referee.',
    purpose: 'older-cousin coordinating two children — gentle managed chaos in the park',
    ambient: 'park_afternoon',
    sound_effects: [],
    target_vocab: ['公園', '遊ぶ', '一緒', '走る', 'ルール'],
    cast: ['sakura_teen', 'hina_child', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '二人とも、走るときは気を付けてね。', en: 'Both of you, be careful when running.', style: 'Teen warm gentle careful older-cousin watching, the soft real protective-energy audible, gentle real warmth throughout delivery.', mood: 'protectively-watching' },
      { speaker: 'hina_child', jp: 'おにごっこ、しよう！', en: 'Let\'s play tag!', style: 'High child bright energetic proposal-burst, the soft real childish-leadership audible, gentle real joy threading throughout delivery throughout.', mood: 'energetically-proposing' },
      { speaker: 'sho_child', jp: '…ぼく、追いつけないかも。', en: '…I might not catch up.', style: 'Tiny six-year-old soft worried vulnerable disclosure, the small real careful-concern audible, soft small worry threading throughout delivery.', mood: 'worriedly-soft' },
      { speaker: 'sakura_teen', jp: '大丈夫、ルール変えよう。三人で楽しもう。', en: 'It\'s fine, let\'s change the rules. The three of us, fun.', style: 'Teen warm gentle inclusive bridge-building, the soft real older-cousin wisdom audible, gentle real warmth throughout delivery throughout.', mood: 'gently-inclusive' },
      { speaker: 'hina_child', jp: 'えー、どんなルール？', en: 'Eh, what rules?', style: 'High child bright curious responsive engagement, the soft real flexible-childish audible, gentle real warmth threading throughout delivery throughout.', mood: 'curiously-engaging' },
      { speaker: 'sakura_teen', jp: 'お姉ちゃん鬼で、しょうくんは走らなくていい。', en: 'I\'m it, and Sho-kun doesn\'t have to run.', style: 'Teen warm gentle accommodating design, the soft real protective-leadership audible, gentle real warmth threading throughout delivery.', mood: 'accommodatingly-leading' },
      { speaker: 'sho_child', jp: '…うん、それなら遊ぶ。', en: '…Yeah, that I can play.', style: 'Tiny six-year-old soft relieved soft acceptance, the small real warmth-rising audible, soft small relief threading throughout delivery throughout.', mood: 'relievedly-soft' },
      { speaker: 'hina_child', jp: 'やった！しょうくん一緒だね！', en: 'Yay! Sho-kun, together!', style: 'High child bright warm sibling-inclusion celebration, the soft real childish-love audible, gentle real warmth throughout delivery throughout.', mood: 'brightly-celebrating' },
      { speaker: 'sakura_teen', jp: 'よし、いくよー！', en: 'Right, here we go!', style: 'Teen warm bright energetic referee-starting, the soft real older-cousin warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'energetically-starting' }
    ]
  },
  // ----------------------------------------------------------------
  // 241 — ren + sakura, sakura tells ren about new boyfriend (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00241',
    context: 'Sakura confides in her older cousin Ren about Riku. Ren teases her gently but really listens.',
    purpose: 'younger cousin trusting older — teen first-relationship disclosure',
    ambient: 'family_kitchen',
    sound_effects: [],
    target_vocab: ['紹介', '彼氏', '真面目', '嬉しい', '心配'],
    cast: ['ren_uni', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'れんお兄ちゃん…ちょっと聞いてもいい？', en: 'Ren-nii-chan… can I ask something?', style: 'Teen warm soft careful vulnerable opener, the gentle real wanting-someone-safe audible, soft real warmth threading throughout delivery.', mood: 'softly-careful' },
      { speaker: 'ren_uni', jp: 'いいよ、どうした？真面目モードじゃん。', en: 'Sure, what\'s up? You\'re in serious mode.', style: 'University student warm gentle teasing-then-listening, the soft real older-cousin warmth audible, gentle real warmth throughout delivery.', mood: 'gently-teasing' },
      { speaker: 'sakura_teen', jp: '実は、付き合ってる人がいて…。', en: 'Actually, I have someone I\'m dating…', style: 'Teen warm soft vulnerable big-disclosure, the gentle real trust-extending audible, soft real warmth threading throughout delivery throughout.', mood: 'vulnerably-disclosing' },
      { speaker: 'ren_uni', jp: 'マジか！おめでとう。どんな子？', en: 'No way! Congrats. What kind of person?', style: 'University student warm bright excited-then-curious, the soft real big-cousin enthusiasm audible, gentle real warmth throughout delivery.', mood: 'brightly-excited' },
      { speaker: 'sakura_teen', jp: '同じ学校の…リクっていう男の子。', en: 'A boy at the same school… called Riku.', style: 'Teen warm soft careful continuing disclosure, the gentle real shy-trust audible, soft real warmth threading throughout delivery throughout.', mood: 'softly-continuing' },
      { speaker: 'ren_uni', jp: 'へえ。さくらが選んだなら、まあ間違いないか。', en: 'Hmm. If you picked him, probably no mistake.', style: 'University student warm gentle teasing-then-supportive, the soft real older-cousin trust audible, gentle real warmth throughout delivery.', mood: 'teasingly-supportive' },
      { speaker: 'sakura_teen', jp: '真面目で、優しい人。なんか、心配性。', en: 'Serious, gentle. Kind of a worrier.', style: 'Teen warm soft proud-shy descriptive sharing, the gentle real fond-disclosure audible, soft real warmth threading throughout delivery throughout.', mood: 'proudly-shy' },
      { speaker: 'ren_uni', jp: 'いい子っぽい。心配性は、君のことを大事にしてるってこと。', en: 'Sounds like a good guy. A worrier means he\'s taking you seriously.', style: 'University student warm gentle reframing-wisdom, the soft real older-cousin care audible, gentle real warmth throughout delivery throughout.', mood: 'gently-reframing' },
      { speaker: 'sakura_teen', jp: 'なんか、それ、嬉しい。話せてよかった。', en: 'Somehow, that makes me happy. I\'m glad I told you.', style: 'Teen warm soft relieved-touched closing, the gentle real warmth-of-being-heard audible, soft real warmth throughout delivery throughout.', mood: 'softly-relieved' }
    ]
  },
  // ----------------------------------------------------------------
  // 242 — hiroshi_boss + kenji + ryosuke, three men golf chat (3-speaker, long)
  // ----------------------------------------------------------------
  {
    id: 'conv_00242',
    context: 'Three middle-aged men at a public driving range. Hiroshi the boss has invited Kenji and Ryosuke to learn golf with him.',
    purpose: 'three-generations-of-work-life male leisure — across-rank social mixing through hobby',
    ambient: 'driving_range_afternoon',
    sound_effects: [],
    target_vocab: ['ゴルフ', '趣味', '休日', '楽しい', '練習', '初めて'],
    cast: ['hiroshi_boss', 'kenji_office', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'お二人とも、わざわざありがとう。', en: 'Thanks both of you for coming all this way.', style: 'Boss warm measured generous opener, the soft real off-duty warmth audible, gentle real authority-soft threading throughout delivery.', mood: 'measuredly-warm' },
      { speaker: 'kenji_office', jp: 'いえ、お誘い嬉しいです。ゴルフ、初めてで。', en: 'No, the invitation is happy news. Golf, my first time.', style: 'Salaryman warm respectful sincere honesty, the soft real careful-respect audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-respectful' },
      { speaker: 'ryosuke_dad', jp: '私も初めて。家でも趣味って、何もなくて。', en: 'Me too, first time. I don\'t really have hobbies at home.', style: 'Father warm easy honest casual self-disclosure, the soft real adult-honesty audible, gentle real warmth threading throughout delivery.', mood: 'easily-honest' },
      { speaker: 'hiroshi_boss', jp: '初めてが一番楽しい。気楽にやろう。', en: 'First time is the most fun. Let\'s take it easy.', style: 'Boss warm measured generous reassuring, the soft real authority-soft warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'generously-reassuring' },
      { speaker: 'kenji_office', jp: 'こうやって、構えるんですか？', en: 'You hold the stance like this?', style: 'Salaryman warm careful learning-asking, the soft real respect-attention audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-learning' },
      { speaker: 'hiroshi_boss', jp: 'そう。肘を曲げないで、腰を回す感じで。', en: 'Yes. Don\'t bend the elbow, like turning from the waist.', style: 'Boss warm measured teaching-explanation, the soft real generous-mentor warmth audible, gentle real warmth throughout delivery throughout.', mood: 'generously-teaching' },
      { speaker: 'ryosuke_dad', jp: 'うわ、思ってたよりずっと難しい。', en: 'Wow, much harder than I thought.', style: 'Father warm honest casual humorous reaction, the soft real warm-honesty audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-humorous' },
      { speaker: 'kenji_office', jp: 'はい、力入っちゃう。', en: 'Yeah, I tense up.', style: 'Salaryman warm honest casual sharing, the soft real warm-honesty audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-honest' },
      { speaker: 'hiroshi_boss', jp: '力を抜くのが、一番難しい。一年経っても抜けん。', en: 'Relaxing is the hardest. Even after a year, I can\'t.', style: 'Boss warm measured self-deprecating honest mentor, the soft real real-warmth audible, gentle real warmth throughout delivery throughout.', mood: 'humbly-warm' },
      { speaker: 'ryosuke_dad', jp: '部長でも、そうなんですね。', en: 'Even the boss is like that.', style: 'Father warm honest gentle observation, the soft real warm-recognition audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-observing' },
      { speaker: 'hiroshi_boss', jp: 'ここでは、ただのおっさんだから。', en: 'Here, I\'m just an old guy.', style: 'Boss warm measured generous self-deprecating, the soft real authority-laid-down audible, gentle real warmth throughout delivery throughout.', mood: 'generously-deprecating' },
      { speaker: 'kenji_office', jp: 'こういう休日、いいですね。', en: 'Days off like this are nice.', style: 'Salaryman warm sincere appreciation observation, the soft real warm-recognition audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-appreciating' },
      { speaker: 'ryosuke_dad', jp: '本当に。趣味、見つかるかも。', en: 'Truly. Maybe I\'ll find a hobby.', style: 'Father warm sincere wondering quiet response, the soft real warm-discovery audible, gentle real warmth threading throughout delivery throughout.', mood: 'wonderingly-warm' },
      { speaker: 'hiroshi_boss', jp: '練習、また付き合おう。気が向いたら。', en: 'Practice — let\'s pair up again. If you feel like it.', style: 'Boss warm measured generous gentle closing, the soft real warm-extending audible, gentle real warmth threading throughout delivery throughout.', mood: 'generously-extending' }
    ]
  },
  // ----------------------------------------------------------------
  // 243 — yumiko + sachiko + naoko, funeral preparation (3-speaker, long)
  // ----------------------------------------------------------------
  {
    id: 'conv_00243',
    context: 'A distant relative\'s funeral. Yumiko, Sachiko, and Naoko sit in the family room going over what each must bring.',
    purpose: 'three-generation family logistics around grief — quiet women coordinating',
    ambient: 'tatami_evening',
    sound_effects: [],
    target_vocab: ['葬式', '準備', '大変', '家族', '思い出', '大切'],
    cast: ['sachiko_grandma', 'yumiko_mom', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: '明日のお葬式、皆さん準備できた？', en: 'Tomorrow\'s funeral — everyone ready?', style: 'Soft grandmother warm gentle elder-leading inquiry, the soft real careful-care audible, gentle real warmth threading throughout delivery.', mood: 'gently-leading' },
      { speaker: 'yumiko_mom', jp: '黒い服は出してあります。', en: 'I\'ve taken out the black clothes.', style: 'Maternal warm steady practical reporting, the soft real careful-responsibility audible, gentle real warmth threading throughout delivery.', mood: 'practically-steady' },
      { speaker: 'naoko_aunt', jp: '私も。ハンカチも、忘れず。', en: 'Me too. Handkerchiefs, not forgotten.', style: 'Aunt warm steady careful matching, the soft real careful-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-steady' },
      { speaker: 'sachiko_grandma', jp: 'お数珠も、忘れちゃダメよ。', en: 'Prayer beads — don\'t forget those either.', style: 'Soft grandmother warm gentle elder-reminder, the soft real careful-experience audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-reminding' },
      { speaker: 'yumiko_mom', jp: 'はい。子供たちは留守番でいいですよね？', en: 'Yes. The kids should stay home, right?', style: 'Maternal warm careful asking-elder, the soft real maternal-careful audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-asking' },
      { speaker: 'sachiko_grandma', jp: 'そうね。ひなはまだ小さいし。', en: 'Yes. Hina is still small after all.', style: 'Soft grandmother warm gentle considered agreement, the soft real elder-wisdom audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-agreeing' },
      { speaker: 'naoko_aunt', jp: '昔のことばかり思い出すわね、こういう時。', en: 'You remember mostly old things at times like this.', style: 'Aunt warm gentle reflective sharing, the soft real warm-grief audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-reflective' },
      { speaker: 'sachiko_grandma', jp: '本当に。あの子、若い時から、優しい子だった。', en: 'Truly. That one — gentle since young.', style: 'Soft grandmother warm gentle remembering, the soft real elder-grief-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-remembering' },
      { speaker: 'yumiko_mom', jp: '私もよく、覚えてます。お年玉、毎年くれて。', en: 'I remember well too. New Year money, every year.', style: 'Maternal warm soft personal memory-sharing, the soft real warm-grief audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-remembering' },
      { speaker: 'naoko_aunt', jp: 'ねえ、思い出話、いっぱい出てくる。', en: 'Yeah, lots of memories surface.', style: 'Aunt warm gentle solidarity-sharing, the soft real shared-grief audible, gentle real warmth threading throughout delivery throughout.', mood: 'gentle-solidarity' },
      { speaker: 'sachiko_grandma', jp: '家族って、こうやって思い出すために集まるのよ。', en: 'Family — we gather like this to remember.', style: 'Soft grandmother warm philosophical elder-wisdom, the soft real deep-truth audible, gentle real warmth threading throughout delivery throughout.', mood: 'philosophically-warm' },
      { speaker: 'yumiko_mom', jp: 'お母さん、そう言ってもらえて、なんか落ち着いた。', en: 'Mother, hearing you say that, I feel settled.', style: 'Maternal warm soft sincere relief-grateful, the soft real touched-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-settled' },
      { speaker: 'naoko_aunt', jp: '大変だけど、大切な時間ね。', en: 'It\'s hard, but precious time.', style: 'Aunt warm gentle balanced wisdom-sharing, the soft real warm-grief-truth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-balanced' },
      { speaker: 'sachiko_grandma', jp: '明日、ゆっくり送ってあげましょう。', en: 'Tomorrow, let\'s see them off slowly.', style: 'Soft grandmother warm gentle closing tender promise, the soft real deep-love audible, gentle real warmth threading throughout delivery throughout.', mood: 'tenderly-closing' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

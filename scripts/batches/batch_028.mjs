import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_028)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 544 — daichi + ren + kenji, sports (3-speaker, medium)
  {
    id: 'conv_00544',
    context: 'Three men at a sports bar watching a baseball game.',
    purpose: 'three-male sports leisure — friendship through sport',
    ambient: 'sports_bar_evening',
    sound_effects: [],
    target_vocab: ['野球', '試合', '応援', '勝つ', '楽しい'],
    cast: ['daichi_kansai', 'ren_uni', 'kenji_office'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'お、今日の試合、めっちゃ熱いな。', en: 'Oh, today\'s match — super hot.', style: 'Kansai warm bright sincere enthusiastic-warm sports-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'マジで。九回、逆転あるかも。', en: 'For real. Ninth inning — possible turnaround.', style: 'University student warm soft bright sincere-warm sports-engagement, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '皆さん、応援、すごいですね。', en: 'Everyone\'s cheering — amazing.', style: 'Salaryman warm gentle bright sincere-warm civil-warm observing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ほな、勝ってほしいな、絶対。', en: 'Then, want to win, definitely.', style: 'Kansai warm bright sincere committed-warm cheering, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'チーム、本当に頑張ってる。応援、止まらん。', en: 'Team — truly working hard. Can\'t stop cheering.', style: 'University student warm bright sincere enthusiastic-warm passionate, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: 'こうやって、皆で観戦、楽しいですね。', en: 'Watching together like this — fun.', style: 'Salaryman warm gentle sincere-warm reflective-warm appreciating, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'また皆で、来ような。', en: 'Let\'s come again as all.', style: 'Kansai warm bright sincere closing-warm extending-warm gathering, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 545 — sakura + mei, cooking (medium)
  {
    id: 'conv_00545',
    context: 'Sakura helps pregnant Mei prepare a soup. Casual cooking with conversation.',
    purpose: 'small adult women cooking together',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['料理', '切る', '味', '美味しい', '一緒'],
    cast: ['sakura_teen', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'さくらちゃん、お野菜、切ってくれる？', en: 'Sakura-chan, can you cut the vegetables?', style: 'Romantic warm soft sincere bright-warm cooking-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'うん、もちろん。スープ、何味？', en: 'Yes, of course. Soup — what flavor?', style: 'Teen warm soft sincere bright-warm casual-helping, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '味噌で。妊娠中、味噌が、なんか、無性に食べたくて。', en: 'With miso. During pregnancy, miso — really crave.', style: 'Romantic warm soft sincere laughing-warm sharing-honest, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'ふふ、可愛い。じゃあ、美味しく、作ろう。', en: 'Hehe, cute. Then, let\'s make delicious.', style: 'Teen warm soft sincere laughing-warm bright-committing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'warmly-laughing' },
      { speaker: 'mei_romantic', jp: 'さくらちゃんと、料理、一緒にできるの、嬉しい。', en: 'Cooking with Sakura — happy.', style: 'Romantic warm soft tender sincere-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '私も。これからも、一緒に、ね。', en: 'Me too. From now on too, together.', style: 'Teen warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 546 — riku + tatsuya (medium)
  {
    id: 'conv_00546',
    context: 'Riku planning a country trip with his wife. Asks Tatsuya for advice on what to see.',
    purpose: 'small adult-younger asking older for rural travel advice',
    ambient: 'phone_call',
    sound_effects: [],
    target_vocab: ['旅行', '田舎', '紹介', '案内', '楽しい'],
    cast: ['riku_teen', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: '達也さん、来月、田舎に、旅行、行きたいんです。', en: 'Tatsuya-san, next month — want to travel to country.', style: 'Teen warm soft sincere bright-warm casual-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'お、ええな。どこ、考えてんの？', en: 'Oh, nice. Where thinking?', style: 'Country gruff warm bright sincere-warm engaging-rural-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: '達也さんのとこ、行ってもいいですか？', en: 'May I go to your place?', style: 'Teen warm soft sincere careful-warm asking-respectful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'tatsuya_country', jp: 'もちろん。歓迎するで。案内するわ。', en: 'Of course. Welcome. Will guide.', style: 'Country gruff warm bright sincere generous-warm welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: 'ありがとうございます。お土産、ようけ持ってきます。', en: 'Thank you. Will bring lots of souvenirs.', style: 'Teen warm soft sincere bright-warm grateful-promising-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '気にせんでええで。来てくれるだけで、嬉しい。', en: 'No need to worry. Just coming — happy.', style: 'Country gruff warm soft sincere closing-warm generous-tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '楽しみにしてます。', en: 'Looking forward.', style: 'Teen warm soft sincere bright-warm closing-anticipating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 547 — sho + yumiko, snowy day (short)
  {
    id: 'conv_00547',
    context: 'A snowy winter morning. Sho is excited; Yumiko helps him bundle up for school.',
    purpose: 'small mother-child winter morning',
    ambient: 'genkan_morning',
    sound_effects: [],
    target_vocab: ['雪', '寒い', '帽子', '気を付ける'].filter(w => w !== '気を付ける').concat(['注意', '学校']),
    cast: ['yumiko_mom', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'お母さん、雪、いっぱい！', en: 'Mom, lots of snow!', style: 'Tiny six-year-old soft small sincere enthusiastic-warm winter-bright, the small real warmth audible, soft small warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '本当ね。寒いから、帽子も、ちゃんと、被ってね。', en: 'Truly. Cold — wear hat properly.', style: 'Maternal warm gentle sincere-warm caring-warm protective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-caring' },
      { speaker: 'sho_child', jp: 'うん。学校、雪で、走れない、かも。', en: 'Yes. School — with snow, can\'t run, maybe.', style: 'Tiny six-year-old soft small sincere worried-warm wondering, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-worried' },
      { speaker: 'yumiko_mom', jp: '転ばないように、注意してね。', en: 'Be careful not to slip.', style: 'Maternal warm gentle sincere-warm careful-warm protective-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'sho_child', jp: 'はい、行ってきます。', en: 'Yes, off I go.', style: 'Tiny six-year-old soft small sincere closing-warm departing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 548 — hina + sho + sakura, board game (3-speaker, medium)
  {
    id: 'conv_00548',
    context: 'Three cousins play a board game together on a Sunday afternoon.',
    purpose: 'three-young-cousins playful gathering',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '勝つ', '負ける', 'ルール'],
    cast: ['hina_child', 'sho_child', 'sakura_teen'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '皆、新しいゲーム、買ってきた。一緒にしよう。', en: 'Everyone, bought new game. Let\'s play together.', style: 'Teen warm bright sincere enthusiastic-warm leading-cousin-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'hina_child', jp: 'やった！ルール、教えて。', en: 'Yay! Teach me rules.', style: 'High child bright sincere eager-warm engaging-asking, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'eagerly-bright' },
      { speaker: 'sho_child', jp: 'ぼくも、混ぜて。', en: 'Mix me in too.', style: 'Tiny six-year-old soft small sincere bright-warm asking-inclusion, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'もちろん。三人で、楽しもう。', en: 'Of course. Three of us — let\'s enjoy.', style: 'Teen warm soft sincere bright-warm including-warm leading, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'ひな、絶対勝つ！', en: 'Hina — absolutely wins!', style: 'High child bright sincere enthusiastic-warm declaring-warm playful, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ぼくも、頑張る。', en: 'I\'ll try too.', style: 'Tiny six-year-old soft small sincere quiet-warm committed-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sakura_teen', jp: '勝っても負けても、皆で、楽しもうね。', en: 'Win or lose, all together — let\'s enjoy.', style: 'Teen warm gentle sincere-warm wise-warm closing-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 549 — saito + sho (short)
  {
    id: 'conv_00549',
    context: 'Sho\'s annual school health check at Saito\'s clinic.',
    purpose: 'small ongoing medical-child relationship',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['学校', '健康', '頑張る', '元気', 'ありがとう'],
    cast: ['saito_doctor', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'しょうくん、健康、特に問題ないですよ。', en: 'Sho-kun, health — no particular issues.', style: 'Doctor warm professional gentle bright sincere-warm reporting-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'sho_child', jp: 'ありがとうございます。学校、ちゃんと、行ってます。', en: 'Thank you. Going to school properly.', style: 'Tiny six-year-old soft small sincere proud-warm reporting-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'saito_doctor', jp: 'えらい。これからも、頑張ってね。', en: 'Good. Keep working hard.', style: 'Doctor warm gentle sincere bright-warm encouraging-warm closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-warm' },
      { speaker: 'sho_child', jp: 'はい。お母さんと、ちゃんと、ご飯、食べてます。', en: 'Yes. With mother, eating properly.', style: 'Tiny six-year-old soft small sincere bright-warm sharing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '立派。お母さんに、よろしくね。', en: 'Splendid. Regards to mother.', style: 'Doctor warm gentle sincere closing-warm extending-warm civic, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 550 — naoko + ryosuke, hospital visit (medium)
  {
    id: 'conv_00550',
    context: 'Naoko and Ryosuke visit Sachiko at the hospital for a minor procedure.',
    purpose: 'two adult siblings-in-law coordinating elder hospital care',
    ambient: 'hospital_waiting',
    sound_effects: [],
    target_vocab: ['母', '病院', '心配', '元気', '一緒'],
    cast: ['naoko_aunt', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: '亮介さん、来てくれて、ありがとう。', en: 'Ryosuke-san, thank you for coming.', style: 'Aunt warm soft sincere grateful-warm family-relief, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'お母さん、今、どんな状況ですか。', en: 'Mother, current situation — how?', style: 'Father warm gentle sincere careful-warm civil-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'naoko_aunt', jp: '小さい手術、無事終わって、安定してます。', en: 'Small surgery — finished safely, stable.', style: 'Aunt warm gentle sincere relieved-warm reporting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-relieved' },
      { speaker: 'ryosuke_dad', jp: 'ほっとした。ゆみこも、ずっと、心配してました。', en: 'Relieved. Yumiko too — worried throughout.', style: 'Father warm soft sincere relieved-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-relieved' },
      { speaker: 'naoko_aunt', jp: 'お母さんも、皆さんが来てくれるの、本当に、嬉しがってる。', en: 'Mother — happy all came.', style: 'Aunt warm soft sincere deep-warm appreciating-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '家族で、ちゃんと、見守りましょう。', en: 'As family — let\'s watch over properly.', style: 'Father warm soft sincere closing-warm collective-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '本当に、感謝してます。', en: 'Truly grateful.', style: 'Aunt warm soft sincere closing-warm brief-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 551 — aoi + asuka, book chat (short)
  {
    id: 'conv_00551',
    context: 'Asuka returns to the cafe with another book recommendation.',
    purpose: 'small ongoing book-friend exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['本', 'おすすめ', '楽しい', '感想', 'ありがとう'],
    cast: ['aoi_barista', 'asuka_teacher'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'あおいさん、これ、すごく良かった。', en: 'Aoi-san, this — really good.', style: 'Teacher warm gentle bright sincere-warm sharing-recommendation, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'え、嬉しい。早速、読んでみます。', en: 'Eh, happy. Will read right away.', style: 'Soft dreamy barista warm gentle bright sincere-warm eager-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: '感想、聞かせて。あおいさんなら、絶対、好きそう。', en: 'Tell me impressions. Aoi-san — surely likes.', style: 'Teacher warm gentle bright sincere-warm closing-extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '楽しみ。来週、また、お話しよう。', en: 'Looking forward. Next week — let\'s talk again.', style: 'Soft dreamy barista warm gentle sincere bright-warm closing-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'うん、ありがとう。', en: 'Yes, thank you.', style: 'Teacher warm gentle sincere closing-warm brief-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 552 — hiroshi_boss + tatsuya + daichi + kenji, food (4-speaker, long)
  {
    id: 'conv_00552',
    context: 'Four men dinner — Hiroshi-boss (retired) + Tatsuya + Daichi + Kenji. Tatsuya talks about new produce techniques.',
    purpose: 'four-male friendship continuing — sharing rural expertise',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['野菜', '美味しい', '一緒', '感謝', '将来', '友達'],
    cast: ['hiroshi_boss', 'tatsuya_country', 'daichi_kansai', 'kenji_office'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '達也さん、今夜の野菜、本当に美味しい。', en: 'Tatsuya-san, tonight\'s veggies — truly delicious.', style: 'Boss measured warm soft sincere bright-warm appreciating-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'ありがとうございます。新しい品種、最近、試してまして。', en: 'Thank you. New varieties — recently trying.', style: 'Country gruff warm bright sincere-warm professional-sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '達也さんの野菜、毎回、進化してる気がする。', en: 'Tatsuya-san\'s veggies — feel evolving each time.', style: 'Kansai warm bright sincere appreciating-warm observing-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: 'うちのお客様も、達也さんの野菜、本当に評判いいです。', en: 'Our customers — Tatsuya-san\'s veggies — truly good reputation.', style: 'Salaryman warm formal sincere bright-warm reporting-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '皆さんのお陰や、ほんま。', en: 'Thanks to everyone, truly.', style: 'Country gruff warm soft sincere humble-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'hiroshi_boss', jp: '退職してから、こうやって、皆さんと、お食事できるの、本当に楽しい。', en: 'After retirement, dining with all like this — truly fun.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm reflecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '田中さんが、まだ、こうやって、一緒にいてくれるの、嬉しい。', en: 'Tanaka-san — still being with us — happy.', style: 'Kansai warm soft sincere deep-warm tender-appreciating-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'これからも、ずっと、お時間、いただきたい。', en: 'From now on too — want your time.', style: 'Salaryman warm formal sincere-warm extending-warm closing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'もちろん。皆さんとの時間、私の宝物。', en: 'Of course. Time with all — my treasure.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm closing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'こうやって、ずっと、繋がっていきたい。', en: 'Want to stay connected forever.', style: 'Country gruff warm soft sincere closing-warm philosophical-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'わいの赤ちゃん、皆さんに、見せに行きますわ。', en: 'My baby — will show all of you.', style: 'Kansai warm bright sincere bright-warm announcing-extending-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '楽しみにしています。', en: 'Looking forward.', style: 'Salaryman warm formal sincere bright-warm closing-anticipating, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: '乾杯しましょう。皆さんと、達也さんと、メイさんの将来に。', en: 'Let\'s cheers. To all, to Tatsuya-san, to Mei-san\'s future.', style: 'Boss measured warm soft sincere closing-warm rallying-tender-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 553 — mei + yumiko, computer help (short)
  {
    id: 'conv_00553',
    context: 'Mei helps Yumiko set up new pregnancy-tracking app on her phone.',
    purpose: 'small intergenerational tech help — bridging young to older',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['使い方', 'スマホ', '便利', '助かる', 'ありがとう'].filter(w => w !== 'スマホ').concat(['電話']),
    cast: ['mei_romantic', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'メイさん、この新しいアプリ、使い方、教えてもらえますか。', en: 'Mei-san, can you teach the new app?', style: 'Maternal warm gentle sincere-warm asking-warm intergenerational, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'もちろん。ここを、こうやって、押すんです。', en: 'Of course. Here — press like this.', style: 'Romantic warm soft sincere bright-warm teaching-warm gentle, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: 'なるほど、便利ね。最近、若い人のアプリ、難しくて。', en: 'I see, convenient. Lately, young people\'s apps — hard.', style: 'Maternal warm gentle sincere laughing-warm honest-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'ふふ、私も、お祖母様のアプリ、わからない時、あります。', en: 'Hehe, I too — grandma\'s app — sometimes unclear.', style: 'Romantic warm soft laughing sincere-warm matching-warm humble, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'warmly-laughing' },
      { speaker: 'yumiko_mom', jp: 'ありがとう。助かるわ。', en: 'Thank you. Saves me.', style: 'Maternal warm gentle sincere closing-warm grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 554 — riku + saito, sports injury (short)
  {
    id: 'conv_00554',
    context: 'Riku visits Saito with a small shoulder pain from sports.',
    purpose: 'small adult patient ongoing visit',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['肩', '痛い', '運動', '無理', 'ありがとう'],
    cast: ['saito_doctor', 'riku_teen'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: '先生、最近、肩が、ちょっと、痛くて。', en: 'Doctor, lately shoulder — a bit pain.', style: 'Teen warm soft sincere honest-warm careful-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '運動、最近、しすぎてませんか。', en: 'Exercise — too much lately?', style: 'Doctor warm professional gentle sincere-warm careful-asking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-careful' },
      { speaker: 'riku_teen', jp: 'はい、テニス、毎週末で。', en: 'Yes, tennis, every weekend.', style: 'Teen warm soft sincere honest-warm reporting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'saito_doctor', jp: '少し休めば、治りますよ。無理しないで。', en: 'With rest — heals. No overdoing.', style: 'Doctor warm professional gentle sincere-warm advising-warm closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-wise' },
      { speaker: 'riku_teen', jp: 'ありがとうございます。', en: 'Thank you.', style: 'Teen warm soft sincere closing-warm brief-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 555 — sakura + asuka, school open house (medium)
  {
    id: 'conv_00555',
    context: 'Sakura, now a teacher, is at her own school\'s open house. Asuka comes by as guest.',
    purpose: 'two teachers — circle complete — adult professional warmth',
    ambient: 'school_corridor_afternoon',
    sound_effects: [],
    target_vocab: ['学校', '先生', '生徒', '感謝', '一緒'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、立派なお教室。生徒さんも、明るいね。', en: 'Sakura-san, splendid classroom. Students also bright.', style: 'Teacher warm bright sincere appreciating-warm admiring-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'ありがとうございます、先生。生徒たち、本当に可愛い。', en: 'Thank you, sensei. Students truly cute.', style: 'Teen warm soft sincere proud-warm grateful-appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-proud' },
      { speaker: 'asuka_teacher', jp: 'こうやって、来てもらえて、本当に、嬉しい。', en: 'Being allowed to come like this — truly happy.', style: 'Teacher warm gentle sincere deep-warm grateful-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '先生がいてくれたから、ここまで、来れました。', en: 'Because sensei was there — came this far.', style: 'Teen warm soft sincere deep-warm grateful-redirecting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'これからも、お互い、ね。応援してる。', en: 'From now on, mutually. Cheering.', style: 'Teacher warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '生徒たちにも、いつか、先生のこと、話します。', en: 'To students someday — will tell about sensei.', style: 'Teen warm soft sincere extending-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: 'ありがとう。さくらさんが、続けていってくれる、それが、嬉しい。', en: 'Thank you. Sakura continuing — that\'s happy.', style: 'Teacher warm soft sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 556 — daichi + tatsuya, typhoon (medium)
  {
    id: 'conv_00556',
    context: 'A typhoon is approaching. Daichi calls Tatsuya in the country about preparation.',
    purpose: 'small adult-male civic-weather concern',
    ambient: 'phone_call',
    sound_effects: [],
    target_vocab: ['台風', '心配', '気を付ける', '畑', '一緒'].filter(w => w !== '気を付ける').concat(['注意']),
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '達也さん、台風、来てるから、心配で。', en: 'Tatsuya-san, typhoon coming — worried.', style: 'Kansai warm soft sincere careful-warm civic-asking, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'tatsuya_country', jp: 'ありがとうな。畑は、ちゃんと、対策、しとった。', en: 'Thank you. Field — properly prepared.', style: 'Country gruff warm sincere reassuring-warm professional-reporting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'よかった。お家も、ご無事で。', en: 'Glad. Home — safe.', style: 'Kansai warm soft sincere relieved-warm asking-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'うん、うちは大丈夫。達也さんも、注意してな。', en: 'Yes, home okay. Daichi-san — be careful too.', style: 'Country gruff warm soft sincere bright-warm reciprocal-warm advising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'メイちゃんがいるから、絶対、注意します。', en: 'With Mei-chan — definitely careful.', style: 'Kansai warm soft sincere committed-warm tender-warm closing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'tatsuya_country', jp: '何かあれば、すぐ連絡。', en: 'If anything — contact immediately.', style: 'Country gruff warm sincere closing-warm extending-warm protective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ありがとうございます。お互い、気を付けて。', en: 'Thank you. Both — take care.', style: 'Kansai warm soft sincere closing-warm reciprocal-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 557 — kenji + ryosuke, news (medium)
  {
    id: 'conv_00557',
    context: 'Kenji and Ryosuke discuss recent news over a quick lunch.',
    purpose: 'small civic-adult news discussion',
    ambient: 'restaurant_lunch',
    sound_effects: [],
    target_vocab: ['新聞', '記事', '政治', '経済', '意見'],
    cast: ['kenji_office', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '亮介さん、今朝の記事、見ました？', en: 'Ryosuke-san, this morning\'s article — saw?', style: 'Salaryman warm formal sincere-warm professional-asking, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、経済の話。気になりますね。', en: 'Yes, economic story. Concerning.', style: 'Father warm gentle sincere-warm engaged-thoughtful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'kenji_office', jp: 'うちの仕事にも、影響、あるかもしれない。', en: 'Our work too — may affect.', style: 'Salaryman warm formal sincere-warm professional-concerned, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-concerned' },
      { speaker: 'ryosuke_dad', jp: '長期的には、難しい判断、求められそう。', en: 'Long-term — difficult judgment likely required.', style: 'Father warm gentle sincere-warm wise-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: '亮介さんの意見、いつも、参考になります。', en: 'Ryosuke-san\'s opinion — always educational.', style: 'Salaryman warm soft sincere appreciating-warm grateful-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。お互い、考えていきましょう。', en: 'Same. Mutually — let\'s think.', style: 'Father warm gentle sincere closing-warm extending-warm collective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 558 — sachiko + sho, watching tv (short)
  {
    id: 'conv_00558',
    context: 'Sachiko and Sho watch tv together in the afternoon.',
    purpose: 'small elder-child gentle moment',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', 'お祖母様', '優しい', 'ありがとう'].filter(w => w !== 'お祖母様').concat(['祖母']),
    cast: ['sachiko_grandma', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'お祖母ちゃん、この番組、面白い。', en: 'Grandma, this show is interesting.', style: 'Tiny six-year-old soft small sincere bright-warm sharing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-bright' },
      { speaker: 'sachiko_grandma', jp: 'ふふ、しょうと、一緒に、見られて、嬉しい。', en: 'Hehe, watching with Sho — happy.', style: 'Soft grandmother warm soft laughing sincere-warm tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sho_child', jp: '昔の番組、お祖母ちゃんが、好きだったの？', en: 'Old shows — grandma liked?', style: 'Tiny six-year-old soft small sincere curious-warm asking-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-curious' },
      { speaker: 'sachiko_grandma', jp: '若い頃、たくさん、見たわよ。', en: 'When young — watched lots.', style: 'Soft grandmother warm soft sincere bright-warm nostalgic-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sho_child', jp: '…一緒に、ずっと、見ようね。', en: '…Together — forever, let\'s watch.', style: 'Tiny six-year-old soft small sincere tender-warm closing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 559 — yuki + mei + naoko (3-speaker, long)
  {
    id: 'conv_00559',
    context: 'Three women plan a small day trip together for after Mei has the baby.',
    purpose: 'three-female friendship planning future together',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['旅行', '一緒', '楽しい', '計画', '感謝', '将来'],
    cast: ['yuki_office', 'mei_romantic', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'メイちゃん、赤ちゃん生まれて、落ち着いたら、皆で、旅行、行きたいね。', en: 'Mei-chan, when baby born and settled — let\'s travel.', style: 'Office woman warm bright sincere-warm forward-warm planning, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'いいね！どこ、行きたい？', en: 'Nice! Where to go?', style: 'Romantic warm soft sincere bright-warm engaged-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: '温泉、どう？皆で、ゆっくり。', en: 'Hot spring, how? All — slowly.', style: 'Aunt warm gentle sincere-warm proposing-warm gathering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '賛成。赤ちゃんも、一緒に行ける温泉、調べてみる。', en: 'Agreed. Will research baby-friendly hot springs.', style: 'Office woman warm bright sincere committed-warm planning-practical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '本当に？皆で、行けたら、本当に嬉しい。', en: 'Truly? Going with all — truly happy.', style: 'Romantic warm soft sincere bright-warm touched-warm anticipating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: 'こうやって、皆で、思い出、作っていけるの、本当に、幸せ。', en: 'Making memories like this with all — truly happy.', style: 'Aunt warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '友達って、ね、本当に、人生の宝物。', en: 'Friends — truly life\'s treasure.', style: 'Office woman warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: '本当に。皆さんに、いつも、感謝してる。', en: 'Truly. Always grateful to all.', style: 'Romantic warm soft sincere deep-warm closing-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '赤ちゃんが生まれたら、すぐ、計画立て直そうね。', en: 'When baby born — let\'s replan immediately.', style: 'Aunt warm gentle sincere bright-warm collective-warm planning, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'うん、楽しみ。皆で、ね。', en: 'Yes, looking forward. With all.', style: 'Office woman warm bright sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '将来、皆で、ずっと、繋がっていけたら、嬉しい。', en: 'Future — staying connected with all — happy.', style: 'Romantic warm soft sincere deep-warm closing-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '絶対、繋がっていけるよ、家族みたいに。', en: 'Definitely staying connected, like family.', style: 'Aunt warm soft sincere closing-warm reassuring-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 560 — takeda + asuka, civic safety (medium)
  {
    id: 'conv_00560',
    context: 'Officer Takeda checks in with Asuka about school safety patrol concerns.',
    purpose: 'civic professionals coordinating community safety',
    ambient: 'school_meeting_room',
    sound_effects: [],
    target_vocab: ['学校', '安全', '通学', '注意', '協力'],
    cast: ['takeda_officer', 'asuka_teacher'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'あすか先生、今日も、ありがとうございます。', en: 'Asuka-sensei, thank you today.', style: 'Officer warm professional gentle sincere-warm civic-opening, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。通学路、最近、何か気になることが？', en: 'Same. School path — recently anything concerning?', style: 'Teacher warm gentle sincere-warm professional-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '少し、車のスピード、上がってる気がして、子供たちの安全、心配で。', en: 'Slightly — car speeds rising — children\'s safety, concerning.', style: 'Officer warm professional gentle sincere-warm civic-careful-disclosure, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-careful' },
      { speaker: 'asuka_teacher', jp: '了解しました。生徒たちにも、ちゃんと、注意、伝えます。', en: 'Understood. Will tell students properly.', style: 'Teacher warm gentle sincere-warm committed-warm professional-action, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'takeda_officer', jp: 'お互い、協力して、子供たち、見守りましょう。', en: 'Mutually cooperate — watch over children.', style: 'Officer warm professional gentle sincere-warm civic-warm extending, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-civic' },
      { speaker: 'asuka_teacher', jp: 'はい、本当に、感謝してます。', en: 'Yes, truly grateful.', style: 'Teacher warm gentle sincere closing-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 561 — riku + sho + ren (3-speaker, short)
  {
    id: 'conv_00561',
    context: 'Three guys at the family home. Sho plays with new toy; Riku and Ren join in.',
    purpose: 'small three-generation male family playful moment',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '遊ぶ', '兄', 'ありがとう'],
    cast: ['riku_teen', 'sho_child', 'ren_uni'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'リクお兄ちゃん、れんお兄ちゃん、一緒に遊ぼう！', en: 'Riku-onii-chan, Ren-onii-chan — let\'s play together!', style: 'Tiny six-year-old soft small sincere enthusiastic-warm inviting, the small real warmth audible, soft small warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'riku_teen', jp: 'うん、何して遊ぶ？', en: 'Yes, what to play?', style: 'Teen warm soft bright sincere-warm engaging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'お兄ちゃんも、まぜて。', en: 'Mix me in too.', style: 'University student warm soft bright sincere-warm joining-warm casual, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '皆で、楽しい！ありがとう、お兄ちゃんたち。', en: 'All — fun! Thank you, brothers.', style: 'Tiny six-year-old soft small sincere bright-warm closing-grateful, the small real warmth audible, soft small warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'riku_teen', jp: 'お兄ちゃんたちも、楽しい。ありがとうな。', en: 'Brothers — fun too. Thanks.', style: 'Teen warm soft sincere closing-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 562 — mei + hina (short)
  {
    id: 'conv_00562',
    context: 'Hina shows pregnant Mei drawings she did for the baby.',
    purpose: 'small child-pregnant-aunt warm moment',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['絵', '赤ちゃん', '一緒', '楽しい', 'ありがとう'],
    cast: ['mei_romantic', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'メイお姉さん、赤ちゃんに、絵、描いた！', en: 'Mei-onee-san, drew picture for baby!', style: 'High child bright sincere enthusiastic-warm gift-presenting, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'え、ありがとう、ひなちゃん！すごく可愛い。', en: 'Eh, thank you, Hina-chan! Very cute.', style: 'Romantic warm soft sincere overwhelmed-warm touched-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-touched' },
      { speaker: 'hina_child', jp: '生まれてきたら、見せてあげてね。', en: 'When born — show them.', style: 'High child bright sincere tender-warm closing-instructing-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'mei_romantic', jp: 'うん、絶対、見せる。一緒に、ね。', en: 'Yes, definitely show. Together.', style: 'Romantic warm soft sincere tender-warm committed-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'ひな、ちゃんと、お姉さん、するからね！', en: 'Hina — will be proper big sister!', style: 'High child bright sincere committed-warm closing-warm declaration, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-committed' }
    ]
  },
  // 563 — hiroshi_boss + naoko + asuka (3-speaker, long)
  {
    id: 'conv_00563',
    context: 'Three adults at a museum opening. Hiroshi-boss, Naoko, and Asuka cross paths.',
    purpose: 'three civilized adults sharing cultural moment',
    ambient: 'gallery_afternoon',
    sound_effects: [],
    target_vocab: ['芸術', '感動', '一緒', '楽しい', '感謝', '友達'],
    cast: ['hiroshi_boss', 'naoko_aunt', 'asuka_teacher'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'あら、あすか先生も、いらしてたんですね。', en: 'Oh, Asuka-sensei — you came too.', style: 'Boss measured warm bright sincere-warm recognition-warm civil, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '田中さん、ナオコさん、こんにちは。', en: 'Tanaka-san, Naoko-san, hello.', style: 'Teacher warm gentle bright sincere-warm civil-welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: 'あすか先生も、芸術、お好きですか。', en: 'Asuka-sensei — like art?', style: 'Aunt warm gentle bright sincere-warm civil-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'asuka_teacher', jp: 'はい、最近、よく、こういうところに、来てます。', en: 'Yes, lately — often come to places like this.', style: 'Teacher warm gentle sincere-warm sharing-warm civil, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '今日の絵、印象的でしたね。', en: 'Today\'s painting — impressive.', style: 'Boss measured warm sincere-warm civil-reflective-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '色が、本当に、深かった。', en: 'Colors — truly deep.', style: 'Aunt warm soft sincere-warm appreciating-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '私も、感動しました。一緒に、感想、共有できて、嬉しい。', en: 'I, too — moved. Sharing impressions — happy.', style: 'Teacher warm gentle sincere bright-warm appreciating-warm community-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'こうやって、芸術を通して、新しいご縁、いただけるの、本当に嬉しい。', en: 'Through art, getting new connections — truly happy.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm civil, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '今度、皆で、ご一緒できれば、もっと、嬉しい。', en: 'Next — together — would be even happier.', style: 'Aunt warm gentle bright sincere-warm extending-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'ぜひ。リスト、皆さんで、作りましょう。', en: 'Please. Let\'s all make a list together.', style: 'Teacher warm gentle sincere bright-warm committing-warm collective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: 'お互い、本当に、感謝です。', en: 'Mutually, truly, grateful.', style: 'Boss measured warm soft sincere closing-warm deep-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '友達って、年齢、関係ないんですね。', en: 'Friends — age doesn\'t matter.', style: 'Aunt warm soft sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '本当に。これからも、ずっと、ね。', en: 'Truly. From now on — forever.', style: 'Teacher warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

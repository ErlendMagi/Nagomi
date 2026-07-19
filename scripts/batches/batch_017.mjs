import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_017)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 324 — hiroshi_boss + asuka, PTA round 2 (medium) N3
  {
    id: 'conv_00324',
    context: 'Hiroshi the boss serves on the PTA committee. Asuka chairs the autumn cleanup planning meeting.',
    purpose: 'civic planning — adult professionals navigating volunteer responsibility',
    ambient: 'school_meeting_room',
    sound_effects: [],
    target_vocab: ['行事', '活動', '参加', '日程', '募集'],
    cast: ['asuka_teacher', 'hiroshi_boss'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: '本日は、秋の行事について、よろしくお願いします。', en: 'Today, regarding the autumn event, please.', style: 'Teacher warm formal professional chair-opening, the soft real respectful-warmth audible, gentle real composure throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'hiroshi_boss', jp: 'お招きいただき、ありがとうございます。', en: 'Thank you for the invitation.', style: 'Boss measured formal civil-respectful reciprocal opener, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'measuredly-civil' },
      { speaker: 'asuka_teacher', jp: '日程は、十一月の第二土曜日で検討中です。', en: 'Date — under consideration for second Saturday of November.', style: 'Teacher warm formal professional clear-reporting, the soft real respectful audible, gentle real composure throughout delivery.', mood: 'professionally-clear' },
      { speaker: 'hiroshi_boss', jp: 'なるほど。活動内容は、どのようなことを？', en: 'I see. What kind of activity content?', style: 'Boss measured warm professional curious-inquiring, the soft real respectful audible, gentle real composure throughout delivery.', mood: 'curiously-measured' },
      { speaker: 'asuka_teacher', jp: '校庭の清掃と、花壇の整備を予定しています。', en: 'Schoolyard cleaning and flower bed maintenance.', style: 'Teacher warm professional careful detailed-explaining, the soft real respectful audible, gentle real composure throughout delivery.', mood: 'carefully-detailed' },
      { speaker: 'hiroshi_boss', jp: '参加者の募集、こちらでもお手伝いしましょう。', en: 'Recruiting participants — we\'ll help on this side too.', style: 'Boss measured warm sincere generous-extending, the soft real respectful audible, gentle real composure throughout delivery.', mood: 'generously-formal' },
      { speaker: 'asuka_teacher', jp: '心強いです。本当にありがとうございます。', en: 'Reassuring. Truly, thank you.', style: 'Teacher warm formal sincere deep-grateful, the soft real respectful audible, gentle real warmth throughout delivery.', mood: 'sincerely-grateful' },
      { speaker: 'hiroshi_boss', jp: '地域の行事は、皆で支えるのが、いい。', en: 'Community events — supporting together is good.', style: 'Boss measured warm sincere principled wisdom closing, the soft real respectful audible, gentle real warmth throughout delivery.', mood: 'sincerely-principled' }
    ]
  },
  // 325 — kenji + yuki + daichi + mei, double-date (3-speaker, long) — 4 actually
  {
    id: 'conv_00325',
    context: 'Kenji & Yuki and Daichi & Mei meet for dinner — work colleagues become couples-friends.',
    purpose: 'two-couple dinner — workplace bonds extending into shared social life',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['初めて', '共通', '楽しい', '話題', '幸せ'],
    cast: ['kenji_office', 'yuki_office', 'daichi_kansai', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '今夜、こうやって集まれて、ほんま嬉しいわ。', en: 'Tonight, gathering like this — truly happy.', style: 'Kansai warm bright sincere gathering-opener, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'brightly-sincere' },
      { speaker: 'mei_romantic', jp: '私もすごく楽しみにしてた。', en: 'I was looking forward to it.', style: 'Romantic warm soft sincere shy-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-warm' },
      { speaker: 'kenji_office', jp: 'こちらこそ。佐藤さんと、ずっと話してたんですよ。', en: 'Same here. Sato-san and I had been talking about it.', style: 'Salaryman warm sincere gentle reciprocal-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reciprocal' },
      { speaker: 'yuki_office', jp: 'うん、お二人にお会いするの、初めてで。', en: 'Yes, meeting you both — my first time.', style: 'Office woman warm bright sincere happy-anticipating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'ゆきさんのこと、達也からよく聞いてました。', en: 'About Yuki-san — I\'ve heard a lot from Daichi.', style: 'Romantic warm soft sincere bridging-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bridging' },
      { speaker: 'daichi_kansai', jp: '良いことばっかりやで、安心して。', en: 'Only good things, no worries.', style: 'Kansai warm bright laughing teasing-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'brightly-teasing' },
      { speaker: 'yuki_office', jp: 'ふふ、嬉しい。共通の知り合いがいるって、いいですね。', en: 'Hehe, happy. Having a common acquaintance is nice.', style: 'Office woman warm bright pleased reflective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-pleased' },
      { speaker: 'kenji_office', jp: '同じ職場って、話題も尽きませんしね。', en: 'Same workplace — topics never run out.', style: 'Salaryman warm gentle thoughtful adding-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-adding' },
      { speaker: 'mei_romantic', jp: 'デザインの仕事、田中さんも詳しいんですか？', en: 'Design work — are you familiar too, Tanaka-san?', style: 'Romantic warm soft careful curious-engaging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-engaging' },
      { speaker: 'kenji_office', jp: '少しだけ。最近、芸術にも興味出てきまして。', en: 'A little. Recently, I\'ve gained interest in art.', style: 'Salaryman warm gentle thoughtful sincere-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'thoughtfully-sharing' },
      { speaker: 'daichi_kansai', jp: 'ええやん！次、皆で美術館行こか。', en: 'Nice! Next, shall we all go to the museum?', style: 'Kansai warm bright energetic suggesting-extending, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'brightly-suggesting' },
      { speaker: 'yuki_office', jp: '行きたい！それは楽しい計画ね。', en: 'Want to! That\'s a fun plan.', style: 'Office woman warm bright enthusiastic-matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '皆で過ごす時間って、本当に幸せ。', en: 'Time spent with everyone — truly happy.', style: 'Romantic warm soft sincere deep-reflective warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'ほな、乾杯しよか！', en: 'Then, let\'s cheers!', style: 'Kansai warm bright enthusiastic gathering-energetic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'kenji_office', jp: '乾杯。これからの友情に。', en: 'Cheers. To future friendship.', style: 'Salaryman warm sincere formal-toast warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 326 — saito + hiroshi_elder, deeper health (medium)
  {
    id: 'conv_00326',
    context: 'Dr. Saito sits down with Hiroshi-elder for a deeper consultation — the patient\'s health has been declining slowly.',
    purpose: 'aging-patient careful disclosure — doctor honest with long-time patient',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['体調', '状況', '無理', '生活', '相談'],
    cast: ['saito_doctor', 'hiroshi_elder'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '田中さん、今日は少しゆっくりお話しできれば。', en: 'Tanaka-san, today if we can talk slowly.', style: 'Doctor warm professional gentle careful opening-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'hiroshi_elder', jp: 'おう、なんか心配なことでも？', en: 'Yeah, something worrying?', style: 'Slow elder warm gentle honest-receiving direct, the soft real real-elder audible, gentle real warmth throughout delivery.', mood: 'gently-direct' },
      { speaker: 'saito_doctor', jp: '体調、少しずつですが、変化が見られます。', en: 'Health — gradually, changes are visible.', style: 'Doctor warm professional gentle honest-careful disclosure, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-honest' },
      { speaker: 'hiroshi_elder', jp: '自分でも、感じてる。', en: 'I sense it myself too.', style: 'Slow elder warm gentle honest-acknowledging quiet, the soft real real-elder audible, gentle real warmth throughout delivery.', mood: 'gently-acknowledging' },
      { speaker: 'saito_doctor', jp: '無理は禁物です。生活、少し見直しましょう。', en: 'No overdoing. Let\'s review your routine.', style: 'Doctor warm gentle firm careful-direction, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'firmly-careful' },
      { speaker: 'hiroshi_elder', jp: 'うん、何を変えたらええ？', en: 'Yes, what should I change?', style: 'Slow elder warm gentle cooperative-receiving, the soft real real-elder audible, gentle real warmth throughout delivery.', mood: 'cooperatively-warm' },
      { speaker: 'saito_doctor', jp: '塩分を控えて、ゆっくり歩く時間を、毎日。', en: 'Reduce salt, slow walking time — every day.', style: 'Doctor warm gentle specific careful-instructing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-specific' },
      { speaker: 'hiroshi_elder', jp: '心がけてみるよ。相談してくれて、ありがたい。', en: 'I\'ll try. Thank you for consulting with me.', style: 'Slow elder warm gentle sincere closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-grateful' }
    ]
  },
  // 327 — hina + sachiko + yumiko, rice cake (3-speaker, long)
  {
    id: 'conv_00327',
    context: 'New Year. Three generations of women pound rice cakes — Sachiko teaching her granddaughter Hina with Yumiko in between.',
    purpose: 'three-generation New Year tradition — child learning living tradition',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['お正月', '伝統', '一緒', '楽しい', '家族', '作る'],
    cast: ['sachiko_grandma', 'yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'お正月のお餅、皆で作るのよ。', en: 'New Year mochi — we make it together.', style: 'Soft grandmother warm gentle tradition-opening warm-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'やったー！ひな、ぺったんやる！', en: 'Yay! Hina will do the pounding!', style: 'High child bright eager enthusiastic declaring, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: 'ひな、ちょっと重いから、お母さんと一緒に。', en: 'Hina, it\'s heavy, so let\'s do it with mom.', style: 'Maternal warm gentle practical safety-warm protective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'protectively-warm' },
      { speaker: 'sachiko_grandma', jp: '昔はね、家族みんなで作ってたの。', en: 'In the old days, the whole family made it.', style: 'Soft grandmother warm gentle tradition-sharing tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sharing' },
      { speaker: 'hina_child', jp: '何人くらい？', en: 'About how many people?', style: 'High child bright curious genuine-asking, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'brightly-curious' },
      { speaker: 'sachiko_grandma', jp: '十人くらい。賑やかだったわ。', en: 'About ten. It was lively.', style: 'Soft grandmother warm gentle nostalgic-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-nostalgic' },
      { speaker: 'yumiko_mom', jp: 'お母さん、お餅、何個くらい作ろう？', en: 'Mom, about how many mochi shall we make?', style: 'Maternal warm gentle practical engaging-planning, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-planning' },
      { speaker: 'sachiko_grandma', jp: '今年は少なめで。皆の分だけ。', en: 'A bit fewer this year. Just enough for everyone.', style: 'Soft grandmother warm gentle practical balanced-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-balanced' },
      { speaker: 'hina_child', jp: 'ぺったん、ぺったん、楽しい！', en: 'Pound, pound — fun!', style: 'High child bright cheerful singing-rhythmic, the soft real real-joy audible, gentle real warmth throughout delivery.', mood: 'cheerfully-bright' },
      { speaker: 'yumiko_mom', jp: 'ひな、上手じゃない。', en: 'Hina, you\'re skilled.', style: 'Maternal warm gentle praising-warm encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-praising' },
      { speaker: 'sachiko_grandma', jp: 'こうやって、伝統が続くのよ。', en: 'Like this, traditions continue.', style: 'Soft grandmother warm gentle philosophical-deep tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'philosophically-tender' },
      { speaker: 'hina_child', jp: 'ひなも、大きくなったら、教えるの？', en: 'When Hina grows up, do I teach too?', style: 'High child bright curious wondering-future, the soft real real-childish-engagement audible, gentle real warmth throughout delivery.', mood: 'brightly-wondering' },
      { speaker: 'yumiko_mom', jp: 'うん、ひなが教える番になる。', en: 'Yes, your turn to teach comes.', style: 'Maternal warm gentle tender prophesying-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-prophesying' },
      { speaker: 'sachiko_grandma', jp: 'みんな揃って、家族って感じだわ。', en: 'Everyone together — feels like family.', style: 'Soft grandmother warm gentle deep sincere-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 328 — riku + asuka, exam result (medium)
  {
    id: 'conv_00328',
    context: 'Riku has received his entrance exam result — passed. He comes to thank Asuka, his mentor.',
    purpose: 'student-teacher post-result gratitude — milestone celebrated with mentor',
    ambient: 'classroom_after',
    sound_effects: [],
    target_vocab: ['合格', '結果', '報告', '感謝', '応援'],
    cast: ['asuka_teacher', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: '先生、ご報告に来ました。', en: 'Sensei, I came to report.', style: 'Teen warm formal sincere brave-arriving, the soft real real-emotion audible, gentle real warmth throughout delivery.', mood: 'formally-brave' },
      { speaker: 'asuka_teacher', jp: 'おお、リクさん。どうでした？', en: 'Oh, Riku-san. How was it?', style: 'Teacher warm gentle eager-careful curious-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'eagerly-careful' },
      { speaker: 'riku_teen', jp: '…合格、しました。', en: '…I passed.', style: 'Teen warm soft sincere quiet-overwhelmed disclosure, the soft real real-emotion audible, gentle real warmth throughout delivery.', mood: 'quietly-overwhelmed' },
      { speaker: 'asuka_teacher', jp: 'うわー、本当に！おめでとう！', en: 'Wow, truly! Congratulations!', style: 'Teacher warm bright sincere genuine joy-praising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-sincere' },
      { speaker: 'riku_teen', jp: '先生が、応援してくださったから。', en: 'Because sensei cheered me on.', style: 'Teen warm soft sincere humble-redirecting grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-grateful' },
      { speaker: 'asuka_teacher', jp: 'リクさんが、ちゃんと頑張ったから。', en: 'Because you properly worked hard.', style: 'Teacher warm gentle sincere generous-redirecting warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-redirecting' },
      { speaker: 'riku_teen', jp: '本当に感謝してます。一緒に、結果出せて嬉しい。', en: 'Truly grateful. Happy we got the result together.', style: 'Teen warm soft sincere deep tender-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '新しい場所でも、頑張ってね。応援してる。', en: 'In the new place too, do well. Cheering for you.', style: 'Teacher warm gentle warm closing-extending-care, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-extending' }
    ]
  },
  // 329 — sho + sakura, kid asks real question (short)
  {
    id: 'conv_00329',
    context: 'Sho asks his big cousin Sakura why she\'s sometimes sad. She tells him gently.',
    purpose: 'small genuine teen-child intimacy — careful honest answer to a child',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['どうして', '悲しい', '時々', '大丈夫', '一緒'],
    cast: ['sho_child', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'お姉ちゃん、どうして、時々悲しそう？', en: 'Big sis, why do you sometimes look sad?', style: 'Tiny six-year-old soft small genuine careful innocent-asking, the small real warmth audible, soft small warmth throughout delivery.', mood: 'carefully-innocent' },
      { speaker: 'sakura_teen', jp: '…気付いてくれてたんだ。', en: '…You noticed.', style: 'Teen warm soft touched gentle-surprised disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-touched' },
      { speaker: 'sho_child', jp: 'うん。心配。', en: 'Yeah. Worried.', style: 'Tiny six-year-old soft small honest-direct careful, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-direct' },
      { speaker: 'sakura_teen', jp: '色んなこと、考えすぎる時があるの。でも大丈夫。', en: 'Sometimes I think too much about things. But it\'s okay.', style: 'Teen warm soft sincere honest-careful reassuring-balanced, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-balanced' },
      { speaker: 'sho_child', jp: '…一緒にいるよ。', en: '…I\'m with you.', style: 'Tiny six-year-old soft small sincere deep-tender-warm offering, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'ふふ、しょうくん、ありがとう。すごく嬉しい。', en: 'Hehe, Sho-kun, thanks. Really happy.', style: 'Teen warm soft sincere deeply-touched warm-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-touched' }
    ]
  },
  // 330 — tatsuya + yumiko, brother-in-law (medium)
  {
    id: 'conv_00330',
    context: 'Tatsuya visits city to drop off vegetables and stays for tea with Yumiko, his brother-in-law\'s wife.',
    purpose: 'small extended-family adult connection',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['野菜', '畑', '元気', '感謝', '田舎'],
    cast: ['tatsuya_country', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'ゆみこさん、今年の畑、また持ってきましたわ。', en: 'Yumiko-san, this year\'s field — I brought some again.', style: 'Country gruff warm friendly family-bringing-generous, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-warm' },
      { speaker: 'yumiko_mom', jp: 'まあ、達也さん、いつもありがとうございます。', en: 'Oh, Tatsuya-san, thank you as always.', style: 'Maternal warm sincere bright welcoming-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-welcoming' },
      { speaker: 'tatsuya_country', jp: '今年はね、にんじんが特に甘うできて。', en: 'This year, carrots came out especially sweet.', style: 'Country gruff warm proud sharing-rural-knowledge, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'proudly-warm' },
      { speaker: 'yumiko_mom', jp: '嬉しい。子供たちもよく食べます。', en: 'Happy. The kids eat a lot of them.', style: 'Maternal warm sincere bright sharing-family-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'ひなちゃんは、お元気ですか。', en: 'Is Hina well?', style: 'Country gruff warm gentle family-check-care, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-caring' },
      { speaker: 'yumiko_mom', jp: 'すごく元気で、毎日賑やかですよ。', en: 'Very well, every day lively.', style: 'Maternal warm bright laughing family-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-laughing' },
      { speaker: 'tatsuya_country', jp: '次は、田舎、ひなも連れて来てな。', en: 'Next time, bring Hina to the country too.', style: 'Country gruff warm sincere family-extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-extending' },
      { speaker: 'yumiko_mom', jp: '絶対、行きます。本当にありがとうございます。', en: 'Definitely we\'ll come. Truly thank you.', style: 'Maternal warm sincere closing-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-closing' }
    ]
  },
  // 331 — ren + asuka, bookstore (short)
  {
    id: 'conv_00331',
    context: 'Ren and Asuka happen to be in the same bookstore aisle. They know each other only by name through mutual people.',
    purpose: 'small civil chance meeting — strangers-by-association first conversation',
    ambient: 'bookstore_afternoon',
    sound_effects: [],
    target_vocab: ['本', '紹介', '同じ', '面白い', '感じ'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'あ、その本、私もこの間読みました。', en: 'Oh, that book — I read it recently too.', style: 'Teacher warm civil casual recognition-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'casually-civil' },
      { speaker: 'ren_uni', jp: 'マジっすか。面白かったですか？', en: 'For real? Was it interesting?', style: 'University student warm casual easy-curious surprised, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'casually-surprised' },
      { speaker: 'asuka_teacher', jp: 'うん、結構良かった。考えさせられて。', en: 'Yes, quite good. Made me think.', style: 'Teacher warm gentle sincere thoughtful-sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'ren_uni', jp: '同じこと感じる人いると、嬉しいですね。', en: 'Happy when others feel the same.', style: 'University student warm soft sincere warm-observation, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: '本って、不思議な紹介役ですね。', en: 'Books — a mysterious introducer.', style: 'Teacher warm gentle reflective philosophical-civil, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'reflectively-civil' },
      { speaker: 'ren_uni', jp: 'マジでそれっすね。', en: 'For real, that\'s it.', style: 'University student warm soft sincere brief warm-agreeing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-brief' }
    ]
  },
  // 332 — daichi + naoko, future relative (medium)
  {
    id: 'conv_00332',
    context: 'Mei brings Daichi to meet her aunt Naoko for the first time, formally.',
    purpose: 'meeting-future-family — careful regional young man meeting older woman',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['初めまして', '紹介', '関西', '正直', '誠実'],
    cast: ['daichi_kansai', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '初めまして、達也と申します。', en: 'Nice to meet you, I\'m Daichi.', style: 'Kansai warm formal nervous careful-introducing, the regional swing softened, soft real warmth threading throughout delivery.', mood: 'carefully-formal' },
      { speaker: 'naoko_aunt', jp: 'まあ、達也さん。メイから、いつもお話聞いてます。', en: 'Oh, Tatsuya-san. I always hear about you from Mei.', style: 'Aunt warm gentle welcoming-warm family-graceful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'graciously-warm' },
      { speaker: 'daichi_kansai', jp: 'ほんまですか、ええ話だけやったらええんですけど。', en: 'Truly? Hope it\'s only good things.', style: 'Kansai warm laughing nervous-self-deprecating, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'nervously-laughing' },
      { speaker: 'naoko_aunt', jp: 'ふふ、もちろん、いいお話ばかりよ。', en: 'Hehe, of course, only good talks.', style: 'Aunt warm gentle laughing reassuring-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-reassuring' },
      { speaker: 'daichi_kansai', jp: 'メイちゃんとは、真面目にお付き合いさせてもろてます。', en: 'I\'m seeing Mei seriously.', style: 'Kansai warm formal sincere committed-disclosure, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'naoko_aunt', jp: 'メイの気持ちも、ちゃんと聞いてます。誠実な方ですね。', en: 'I\'ve heard Mei\'s feelings too. You\'re sincere.', style: 'Aunt warm gentle sincere recognizing-respecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-recognizing' },
      { speaker: 'daichi_kansai', jp: 'メイちゃん、大切にします。本気で。', en: 'I\'ll cherish Mei. Seriously.', style: 'Kansai warm formal sincere deep-committed promising, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'naoko_aunt', jp: '正直なところ、紹介して良かった。よろしくね。', en: 'Honestly, glad I introduced you. Take care.', style: 'Aunt warm gentle sincere closing-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-closing' }
    ]
  },
  // 333 — yuki + ryosuke (medium)
  {
    id: 'conv_00333',
    context: 'Yuki and Ryosuke meet at a cross-company event. He\'s a senior in his field; she asks questions.',
    purpose: 'professional cross-generation guidance — careful young professional asking honest older one',
    ambient: 'conference_break',
    sound_effects: [],
    target_vocab: ['仕事', '経験', '意見', '尊敬', '相談'],
    cast: ['yuki_office', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '野田さん、先ほどのご講演、本当に勉強になりました。', en: 'Noda-san, your talk earlier — truly educational.', style: 'Office woman warm formal sincere respectful-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-sincere' },
      { speaker: 'ryosuke_dad', jp: 'ありがとうございます。佐藤さんは、田中さんの会社の方？', en: 'Thank you. Sato-san, you\'re from Tanaka-san\'s company?', style: 'Father warm gentle civil-friendly curious-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-civil' },
      { speaker: 'yuki_office', jp: 'はい。お話で、特に経験の話、印象的でした。', en: 'Yes. In your talk, especially the experience part, impressive.', style: 'Office woman warm formal sincere specific-engaging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-specific' },
      { speaker: 'ryosuke_dad', jp: '若い時の失敗が、結局、一番の財産でしたね。', en: 'Failures when young — turned out the greatest asset.', style: 'Father warm gentle reflective wise-sharing personal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-reflective' },
      { speaker: 'yuki_office', jp: '私も、最近失敗続きで…。', en: 'I, lately, also having failures…', style: 'Office woman warm soft careful brave-honest-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'bravely-honest' },
      { speaker: 'ryosuke_dad', jp: '失敗から何を学ぶか、それが一番大事。', en: 'What you learn from failure — that\'s most important.', style: 'Father warm gentle wise sincere-mentoring warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-mentoring' },
      { speaker: 'yuki_office', jp: 'ありがとうございます。尊敬する方に、相談できて良かった。', en: 'Thank you. Glad to consult with someone I respect.', style: 'Office woman warm sincere deep grateful-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。若い方の意見も、私の学びになります。', en: 'Same. Young opinions also become my learning.', style: 'Father warm gentle humble generous-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' }
    ]
  },
  // 334 — daichi + mei + tatsuya, country visit (3-speaker, long)
  {
    id: 'conv_00334',
    context: 'Daichi brings Mei to the countryside to meet his closest farmer-friend Tatsuya. Mei meets the country world her boyfriend respects.',
    purpose: 'partner introduction to important person — quiet ritual respect',
    ambient: 'country_porch_afternoon',
    sound_effects: [],
    target_vocab: ['田舎', '紹介', '初めて', '空気', '景色', '感動'],
    cast: ['daichi_kansai', 'mei_romantic', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '達也さん、メイちゃん、紹介します。', en: 'Tatsuya-san, let me introduce Mei.', style: 'Kansai warm sincere formal careful introducing-warm, the regional swing softened, soft real warmth threading throughout delivery.', mood: 'carefully-formal' },
      { speaker: 'tatsuya_country', jp: 'おう、よう来てくれました。達也です。', en: 'Yeah, glad you came. I\'m Tatsuya.', style: 'Country gruff warm friendly direct-welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-warm' },
      { speaker: 'mei_romantic', jp: 'はじめまして、メイです。達也の話、よく聞いてます。', en: 'Nice to meet you, I\'m Mei. I hear about you a lot from Daichi.', style: 'Romantic warm soft sincere careful-formal warm-introducing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'carefully-sincere' },
      { speaker: 'tatsuya_country', jp: 'ええ天気で、景色も最高や。', en: 'Good weather, the view is great.', style: 'Country gruff warm proud rural-hosting sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-proud' },
      { speaker: 'mei_romantic', jp: '本当に。空気が、東京と全然違う。', en: 'Truly. The air is totally different from Tokyo.', style: 'Romantic warm soft sincere genuine-impressed-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-impressed' },
      { speaker: 'daichi_kansai', jp: 'メイちゃん、感動してるやろ？', en: 'Mei-chan, you\'re impressed, right?', style: 'Kansai warm bright affectionate teasing-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'brightly-affectionate' },
      { speaker: 'mei_romantic', jp: 'うん、本当に。こんな場所が、まだあるんだって。', en: 'Yes, truly. That places like this still exist.', style: 'Romantic warm soft sincere deep-wondering warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-wondering' },
      { speaker: 'tatsuya_country', jp: 'まあ、よかったら、いつでも来てな。', en: 'Well, if you like, come anytime.', style: 'Country gruff warm sincere generous-extending family, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'mei_romantic', jp: '達也が、達也さんを尊敬してる理由、わかる気がする。', en: 'I think I understand why Daichi respects you.', style: 'Romantic warm soft sincere observation-warm bridging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'おお、わいの大事な人や。達也さんは。', en: 'Oh — he\'s important to me, Tatsuya-san.', style: 'Kansai warm soft sincere deep-disclosure warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'ふっ、おだてんでええで。お茶飲も。', en: 'Heh, no flattering needed. Let\'s drink tea.', style: 'Country gruff warm gently-deflecting-warm hosting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-deflecting' },
      { speaker: 'mei_romantic', jp: '達也、こういう人に囲まれて、幸せだね。', en: 'Daichi, surrounded by people like this — you\'re happy.', style: 'Romantic warm soft sincere tender observation-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-observing' },
      { speaker: 'daichi_kansai', jp: 'うん。これからは、メイちゃんもや。', en: 'Yes. From now on, Mei-chan too.', style: 'Kansai warm soft sincere deep tender-extending warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-extending' },
      { speaker: 'tatsuya_country', jp: '家族みたいなもんや、もう。', en: 'Like family already.', style: 'Country gruff warm soft gentle sincere-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 335 — saito + yumiko (medium)
  {
    id: 'conv_00335',
    context: 'Yumiko comes alone to ask Dr. Saito about her aging mother\'s prognosis.',
    purpose: 'adult-child consulting doctor about aging parent — careful difficult conversation',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['母', '状態', '正直', '無理', '見守る'],
    cast: ['saito_doctor', 'yumiko_mom'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: '先生、母の状態、正直に教えてください。', en: 'Doctor, mother\'s condition — tell me honestly.', style: 'Maternal warm soft careful brave-asking direct, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'bravely-direct' },
      { speaker: 'saito_doctor', jp: 'はい、お母さんは、安定しています。でも、ゆっくり進行はしています。', en: 'Yes, she\'s stable. But the condition slowly progresses.', style: 'Doctor warm professional gentle honest-careful balanced, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-honest' },
      { speaker: 'yumiko_mom', jp: '進行は、どのくらいの早さで？', en: 'How quickly does it progress?', style: 'Maternal warm soft brave careful-pushing-real, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'bravely-pushing' },
      { speaker: 'saito_doctor', jp: '個人差はありますが、数年単位で、変化が出てきます。', en: 'There\'s variation, but over years, changes appear.', style: 'Doctor warm professional gentle careful-honest specific-clinical, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'carefully-clinical' },
      { speaker: 'yumiko_mom', jp: '私たち家族で、どう支えたらいいでしょうか。', en: 'How should we, the family, support her?', style: 'Maternal warm soft sincere caring-asking-practical, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-practical' },
      { speaker: 'saito_doctor', jp: '無理させない、ゆっくり見守る、それが一番。', en: 'Don\'t push her, watch slowly — that\'s best.', style: 'Doctor warm gentle sincere wise-clear adviser-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'yumiko_mom', jp: '本当に、ありがとうございます。何か変化あったら、すぐ連絡します。', en: 'Truly, thank you. If anything changes, I\'ll contact immediately.', style: 'Maternal warm sincere deep closing-grateful-committed, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 336 — goro + sho, woodworking (medium)
  {
    id: 'conv_00336',
    context: 'Grandpa Goro is making a small wooden toy. Sho watches quietly, then asks to help.',
    purpose: 'grandfather quiet teaching small grandson — patient masculine handcraft',
    ambient: 'workshop_afternoon',
    sound_effects: [],
    target_vocab: ['木', '作る', '手', '気を付ける', '上手'],
    cast: ['goro_grandpa', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'おじいちゃん、何作ってる？', en: 'Grandpa, what are you making?', style: 'Tiny six-year-old soft small careful genuine-curious-asking, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-curious' },
      { speaker: 'goro_grandpa', jp: '小さい車。木でな。', en: 'A small car. With wood.', style: 'Slow grandpa warm gentle brief-showing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-brief' },
      { speaker: 'sho_child', jp: 'すごい…ぼくも、手伝っていい？', en: 'Wow… can I help?', style: 'Tiny six-year-old soft small admiring brave-asking-careful, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-brave' },
      { speaker: 'goro_grandpa', jp: 'もちろん。けど、手、気を付けてな。', en: 'Of course. But, careful with your hands.', style: 'Slow grandpa warm gentle generous-careful-warm protective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-protective' },
      { speaker: 'sho_child', jp: 'うん、気を付ける。', en: 'Yes, I\'ll be careful.', style: 'Tiny six-year-old soft small sincere careful-promising, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-promising' },
      { speaker: 'goro_grandpa', jp: 'ほら、ここを、ゆっくり持って。', en: 'Here, hold this slowly.', style: 'Slow grandpa warm gentle teaching-warm specific guidance, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-teaching' },
      { speaker: 'sho_child', jp: 'こう…？', en: 'Like this…?', style: 'Tiny six-year-old soft small careful focused-checking, the small real warmth audible, soft small warmth throughout delivery.', mood: 'carefully-focused' },
      { speaker: 'goro_grandpa', jp: 'うん、上手。', en: 'Yes, well done.', style: 'Slow grandpa warm gentle brief sincere-praise-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-praising' },
      { speaker: 'sho_child', jp: 'えへへ、楽しい。', en: 'Heehee, fun.', style: 'Tiny six-year-old soft small genuine touched-joy-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-touched' }
    ]
  },
  // 337 — mrs_mori + naoko (short)
  {
    id: 'conv_00337',
    context: 'Mrs. Mori and Naoko are picking flowers at the community garden together.',
    purpose: 'small adult-women community connection',
    ambient: 'garden_morning',
    sound_effects: [],
    target_vocab: ['花', '綺麗', '一緒', '楽しい', '感謝'],
    cast: ['mrs_mori_neighbor', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: 'なおこさん、この花、綺麗じゃない？', en: 'Naoko-san, isn\'t this flower pretty?', style: 'Neighbor warm gentle bright sharing-civil opener, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'naoko_aunt', jp: '本当！色がすごく綺麗ね。', en: 'Truly! The color is really pretty.', style: 'Aunt warm bright sincere matching-appreciation, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-matching' },
      { speaker: 'mrs_mori_neighbor', jp: '一緒に育てると、何倍も楽しい。', en: 'Growing together — many times more fun.', style: 'Neighbor warm gentle sincere reflective-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '森さんと一緒だから、続けられる。', en: 'Because with you, Mori-san, I can continue.', style: 'Aunt warm soft sincere warm-acknowledging closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'こちらこそ。本当に感謝しています。', en: 'Same. Truly grateful.', style: 'Neighbor warm gentle sincere deep reciprocal-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'また、来週もね。', en: 'Again next week too.', style: 'Aunt warm gentle warm brief-closing future-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'warmly-closing' }
    ]
  },
  // 338 — riku + ryosuke + yumiko, exam family talk (3-speaker, long)
  {
    id: 'conv_00338',
    context: 'After Riku\'s exam result. The family — Ryosuke, Yumiko, Riku — sits at dinner.',
    purpose: 'family celebrating teen milestone — quiet warm parent-child gratitude',
    ambient: 'dining_room_evening',
    sound_effects: [],
    target_vocab: ['合格', '頑張る', '家族', '感謝', '応援', '将来'],
    cast: ['ryosuke_dad', 'yumiko_mom', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'リク、おめでとう。本当に。', en: 'Riku, congratulations. Truly.', style: 'Father warm soft sincere deep tender-genuine opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: 'お父さんと、ずっと楽しみにしてたの。', en: 'Dad and I were looking forward to it.', style: 'Maternal warm soft sincere tender-warm sharing-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sharing' },
      { speaker: 'riku_teen', jp: 'ありがとう、お父さん、お母さん。', en: 'Thank you, dad, mom.', style: 'Teen warm soft sincere deep tender-grateful brief, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'リクが、自分の力で、頑張ったから。', en: 'Because you, by your own power, worked hard.', style: 'Father warm soft sincere proud-redirecting deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'proudly-redirecting' },
      { speaker: 'riku_teen', jp: 'でも、家族の応援が、本当に支えだった。', en: 'But family support — truly was my support.', style: 'Teen warm soft sincere deep-tender-grateful warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '苦しい時、ちゃんと話してくれて、お母さん、嬉しかった。', en: 'When suffering, you talked — mom was happy.', style: 'Maternal warm soft sincere tender-grateful deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'ryosuke_dad', jp: 'お父さんも、リクと、一緒の時間増やせて、嬉しかった。', en: 'Dad too, glad I increased time with you.', style: 'Father warm soft sincere tender-deep grateful-matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'riku_teen', jp: 'これからも、将来、家族と一緒に、考えていきたい。', en: 'From now on, the future, I want to think with family.', style: 'Teen warm soft sincere deep tender-committing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: 'もちろん。何があっても、一緒に。', en: 'Of course. Whatever happens, together.', style: 'Maternal warm soft sincere deep tender-promise warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-promising' },
      { speaker: 'ryosuke_dad', jp: 'お父さんも、お母さんも、いつでも応援する。', en: 'Dad and mom, will always cheer for you.', style: 'Father warm soft sincere deep tender-extending warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-extending' },
      { speaker: 'riku_teen', jp: '本当に、感謝してます。家族で良かった。', en: 'Truly grateful. Glad to be this family.', style: 'Teen warm soft sincere deep tender-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'お祝い、ケーキ買ってある。今夜、ゆっくり食べよう。', en: 'For celebration, I bought cake. Tonight, let\'s eat slowly.', style: 'Maternal warm soft tender-warm closing-pivoting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-pivoting' },
      { speaker: 'ryosuke_dad', jp: 'ふふ、お母さんが、一番楽しみにしてた。', en: 'Hehe, mom was the one most looking forward.', style: 'Father warm soft laughing tender-teasing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-laughing' }
    ]
  },
  // 339 — aoi + sakura, sakura visits (medium)
  {
    id: 'conv_00339',
    context: 'Sakura visits Aoi\'s café for the first time. She remembers Mei mentioned the place; they recognize each other through Mei.',
    purpose: 'small chance recognition through mutual friend — adult-women small connection',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['初めて', 'メイ', '共通', '紹介', '同じ'],
    cast: ['aoi_barista', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'いらっしゃいませ。初めてですか？', en: 'Welcome. First time?', style: 'Soft dreamy barista warm gentle careful-welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-welcoming' },
      { speaker: 'sakura_teen', jp: 'はい。メイさんに、教えてもらって。', en: 'Yes. Mei-san told me about it.', style: 'Teen warm soft sincere careful sharing-warm bridging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-sincere' },
      { speaker: 'aoi_barista', jp: 'え、メイから？じゃあ、もしかして、さくらちゃん？', en: 'Eh, from Mei? Then, perhaps, Sakura-chan?', style: 'Soft dreamy barista warm bright surprised-recognizing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-recognizing' },
      { speaker: 'sakura_teen', jp: 'はい！あおいさん、ですよね。', en: 'Yes! Aoi-san, right?', style: 'Teen warm soft bright sincere recognition-matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-matching' },
      { speaker: 'aoi_barista', jp: 'メイから、さくらちゃんのこと、ようけ聞いてました。', en: 'I heard a lot about Sakura-chan from Mei.', style: 'Soft dreamy barista warm gentle sincere bridge-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bridging' },
      { speaker: 'sakura_teen', jp: '私も、メイさんから、あおいさんの話、いっぱい。', en: 'Me too — heard lots about you from Mei.', style: 'Teen warm soft sincere bridge-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'aoi_barista', jp: 'なんか、共通の人がいるって、嬉しいね。', en: 'Having a common person — happy news.', style: 'Soft dreamy barista warm soft sincere reflective-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-reflective' },
      { speaker: 'sakura_teen', jp: 'ですね！今日はラテ、お願いします。', en: 'Right! Today, latte please.', style: 'Teen warm bright sincere pivot-ordering-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-ordering' },
      { speaker: 'aoi_barista', jp: 'はい、お任せください。', en: 'Yes, leave it to me.', style: 'Soft dreamy barista warm gentle sincere closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 340 — hiroshi_boss + ryosuke, brothers-in-law deeper (long)
  {
    id: 'conv_00340',
    context: 'Hiroshi-boss and Ryosuke have a frank longer talk about taking care of the elder Hiroshi, financial planning, and family.',
    purpose: 'adult brothers-in-law adult coordination — careful family resource talk',
    ambient: 'tatami_evening',
    sound_effects: [],
    target_vocab: ['父', '介護', '相談', '家族', '将来', '協力'],
    cast: ['hiroshi_boss', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '亮介、改めて、父さんのこと、相談させてくれ。', en: 'Ryosuke, again, let me consult about father.', style: 'Boss warm soft authority-down family-deep careful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-careful' },
      { speaker: 'ryosuke_dad', jp: 'もちろんです。何でも話してください。', en: 'Of course. Tell me anything.', style: 'Father warm gentle generous family-receiving-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-generous' },
      { speaker: 'hiroshi_boss', jp: 'これから、介護のことも考えないと。', en: 'From now on, must consider nursing care too.', style: 'Boss warm soft careful weighted-real-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'carefully-weighted' },
      { speaker: 'ryosuke_dad', jp: 'はい。私たち家族で、ちゃんと支えましょう。', en: 'Yes. Together as family, let\'s properly support.', style: 'Father warm gentle sincere strong-supporting-warm committed, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-supporting' },
      { speaker: 'hiroshi_boss', jp: '一人じゃ、無理だ。素直に言うけど。', en: 'Alone, impossible. Saying it honestly.', style: 'Boss warm soft vulnerable honest-disclosure-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'vulnerably-honest' },
      { speaker: 'ryosuke_dad', jp: 'ゆみこも、そう言ってました。協力します。', en: 'Yumiko said the same. We\'ll cooperate.', style: 'Father warm gentle sincere shared-commitment-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-shared' },
      { speaker: 'hiroshi_boss', jp: '費用も、結構かかると思う。', en: 'The cost will be substantial too.', style: 'Boss warm soft practical careful-real-honest, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'practically-honest' },
      { speaker: 'ryosuke_dad', jp: 'お金のことも、隠さず話しましょう。', en: 'About money too, let\'s talk without hiding.', style: 'Father warm gentle sincere brave-direct-warm encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'bravely-direct' },
      { speaker: 'hiroshi_boss', jp: 'ありがたい。一人で抱えるとこだった。', en: 'Grateful. I was about to carry it alone.', style: 'Boss warm soft sincere deep-grateful-warm relief, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-relieved' },
      { speaker: 'ryosuke_dad', jp: '兄さん、何でも頼ってください。', en: 'Big brother, rely on me for anything.', style: 'Father warm gentle sincere generous-extending warm-family, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'hiroshi_boss', jp: '亮介がいてくれて、本当に助かってる。', en: 'Having you, Ryosuke — truly saved.', style: 'Boss warm soft sincere deep tender-grateful warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-grateful' },
      { speaker: 'ryosuke_dad', jp: '家族って、こういう時、繋がるんですよね。', en: 'Family — connects at times like these.', style: 'Father warm gentle sincere philosophical-warm wise, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'hiroshi_boss', jp: '将来も、こうやって、話せる関係でいよう。', en: 'In the future too, let\'s stay able to talk like this.', style: 'Boss warm soft sincere deep tender-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-closing' }
    ]
  },
  // 341 — takeda + sho + hina (3-speaker, short)
  {
    id: 'conv_00341',
    context: 'Hina and Sho see Officer Takeda at the local festival; they go say hello and Hina shows him her bracelet.',
    purpose: 'children warm with civic figure — small ongoing friendship',
    ambient: 'festival_evening',
    sound_effects: [],
    target_vocab: ['お祭り', '見せる', '頑張る', 'ありがとう', 'お巡りさん'],
    cast: ['takeda_officer', 'hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'お巡りさーん！見て見て！', en: 'Officer! Look look!', style: 'High child bright enthusiastic running-greeting, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'takeda_officer', jp: 'おお、ひなちゃん、しょうくん。お祭り、楽しい？', en: 'Oh, Hina-chan, Sho-kun. Festival fun?', style: 'Officer warm gentle bright child-tuned-recognizing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'hina_child', jp: 'うん！これ、ひな作った！', en: 'Yes! This — I made!', style: 'High child bright proud showing-eager declaring, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'proudly-bright' },
      { speaker: 'sho_child', jp: '…ぼくも、見せた。', en: '…Me, showed it too.', style: 'Tiny six-year-old soft small careful sharing-quiet, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-careful' },
      { speaker: 'takeda_officer', jp: '二人とも、上手だね。よく頑張った。', en: 'Both of you — well done. Worked hard.', style: 'Officer warm gentle sincere praising-warm specific-child, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-praising' },
      { speaker: 'hina_child', jp: 'ありがとう、お巡りさん！', en: 'Thank you, officer!', style: 'High child bright sincere warm-thanking energetic-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 342 — kenji + sakura (medium)
  {
    id: 'conv_00342',
    context: 'Sakura comes to Kenji (a family friend) to ask about English help — he\'s good with English.',
    purpose: 'small adult helping young person — practical study mentorship',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['英語', '勉強', '助ける', '練習', '頑張る'],
    cast: ['kenji_office', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'けんじさん、英語、ちょっと教えてもらえますか。', en: 'Kenji-san, can you teach me English?', style: 'Teen warm careful respectful adult-asking-help, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'respectfully-asking' },
      { speaker: 'kenji_office', jp: 'もちろん。何が分かりにくい？', en: 'Of course. What\'s hard to understand?', style: 'Salaryman warm gentle generous helpful-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-helpful' },
      { speaker: 'sakura_teen', jp: '長文読解が、苦手で。', en: 'Reading long passages — I\'m weak at it.', style: 'Teen warm soft honest specific-vulnerable-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-honest' },
      { speaker: 'kenji_office', jp: 'なるほど。まず、段落の最初と最後だけ読む練習を。', en: 'I see. First, practice reading just first and last paragraph.', style: 'Salaryman warm gentle specific teaching-mentor-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'specifically-mentoring' },
      { speaker: 'sakura_teen', jp: 'なるほど！考えたことなかった。', en: 'I see! Never thought of that.', style: 'Teen warm bright sincere absorbing-realization-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-realizing' },
      { speaker: 'kenji_office', jp: '全部読もうとせず、要点を掴むんだ。', en: 'Without trying to read all, grasp the main points.', style: 'Salaryman warm gentle clear adult-mentor-warm explaining, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-explaining' },
      { speaker: 'sakura_teen', jp: 'やってみます。本当に助かります。', en: 'I\'ll try. Truly saves me.', style: 'Teen warm soft sincere committed-grateful-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'kenji_office', jp: 'また、何か分からなかったら、いつでも。', en: 'If anything unclear again, anytime.', style: 'Salaryman warm gentle generous extending-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-extending' }
    ]
  },
  // 343 — hiroshi_elder + ryosuke, son-in-law third (long)
  {
    id: 'conv_00343',
    context: 'A late evening. Ryosuke visits Hiroshi-elder — Riku has gotten into university, but the elder is fading. They have a quiet talk.',
    purpose: 'fading elder and adult son-in-law — careful tender deep conversation across generations',
    ambient: 'tatami_evening',
    sound_effects: [],
    target_vocab: ['人生', '感謝', '時間', '一緒', '思い出', '幸せ'],
    cast: ['hiroshi_elder', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'お父さん、リク、合格しました。', en: 'Father, Riku passed.', style: 'Father warm soft sincere tender-warm reporting-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hiroshi_elder', jp: '…おお、おめでとう。よかったな。', en: '…Oh, congratulations. That\'s good.', style: 'Slow elder warm soft tender deep-touched gentle-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-touched' },
      { speaker: 'ryosuke_dad', jp: 'お父さんの言葉、ずっと支えになりました。', en: 'Your words — were ongoing support.', style: 'Father warm soft sincere deep tender-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_elder', jp: 'いやいや、亮介が、ちゃんと待ったから。', en: 'No, no — because you, Ryosuke, properly waited.', style: 'Slow elder warm soft gentle humble-redirecting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'ryosuke_dad', jp: 'こうやって、一緒に喜べる時間、本当に大事です。', en: 'Time when we can rejoice together — truly important.', style: 'Father warm soft sincere deep tender-reflective-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-reflective' },
      { speaker: 'hiroshi_elder', jp: '人生、もう長くないかもしれん。', en: 'Life, may not be long anymore.', style: 'Slow elder warm soft tender deep-honest-disclosure brave, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-honest' },
      { speaker: 'ryosuke_dad', jp: 'お父さん…そんなこと、言わないで。', en: 'Father… don\'t say such things.', style: 'Father warm soft tender vulnerable pleading-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-pleading' },
      { speaker: 'hiroshi_elder', jp: 'いや、ちゃんと言うとかんと。亮介、ありがとう。', en: 'No, must say it properly. Ryosuke, thank you.', style: 'Slow elder warm soft tender deep-resolute closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-resolute' },
      { speaker: 'ryosuke_dad', jp: 'お父さん…私の方こそ、感謝してます。', en: 'Father… I\'m the one who\'s grateful.', style: 'Father warm soft sincere deep tender-overwhelmed-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-overwhelmed' },
      { speaker: 'hiroshi_elder', jp: 'ゆみこのこと、子供たちのこと、頼んだぞ。', en: 'Yumiko, the children — I leave them to you.', style: 'Slow elder warm soft tender deep weighted-entrusting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-entrusting' },
      { speaker: 'ryosuke_dad', jp: 'はい、絶対、守ります。', en: 'Yes, absolutely, I\'ll protect them.', style: 'Father warm soft sincere deep tender-committed-promise-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'hiroshi_elder', jp: 'お父さん、幸せだったよ。本当に。', en: 'Dad was happy. Truly.', style: 'Slow elder warm soft tender deep gentle-disclosing-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'ryosuke_dad', jp: 'お父さん…ありがとうございました。', en: 'Father… thank you very much.', style: 'Father warm soft sincere deep tender-overwhelmed-deep closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'hiroshi_elder', jp: 'また、今度ゆっくり、話そうな。', en: 'Again, next time slowly, let\'s talk.', style: 'Slow elder warm soft tender deep gentle-closing-warm future-promise, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-promising' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

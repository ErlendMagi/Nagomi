import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_015)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 284 — kenji + yuki, news together (medium) — news N3
  {
    id: 'conv_00284',
    context: 'A weekday morning. Kenji and Yuki at the office break room, glancing at the news while their coffees cool.',
    purpose: 'small office discussion of current events — adult civic engagement through casual exchange',
    ambient: 'office_break',
    sound_effects: [],
    target_vocab: ['新聞', '記事', '政治', '経済', '意見'],
    cast: ['kenji_office', 'yuki_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '今朝の記事、見ました？', en: 'Did you see this morning\'s article?', style: 'Office woman warm casual professional inquiring, the soft real engaged-curiosity audible, gentle real warmth throughout delivery.', mood: 'casually-engaged' },
      { speaker: 'kenji_office', jp: 'あの経済の話ですか。気になりますね。', en: 'The economic one? Concerning, isn\'t it.', style: 'Salaryman warm thoughtful careful response, the soft real real-engagement audible, gentle real composure throughout delivery.', mood: 'thoughtfully-careful' },
      { speaker: 'yuki_office', jp: '政治の動きも、最近落ち着かない感じで。', en: 'Political moves too — lately, unsettled feeling.', style: 'Office woman warm gentle thoughtful observation, the soft real adult-engagement audible, gentle real warmth throughout delivery.', mood: 'gently-thoughtful' },
      { speaker: 'kenji_office', jp: 'うちの仕事にも影響あるかもしれない。', en: 'May affect our work too.', style: 'Salaryman warm gentle practical professional concerned, the soft real real-pragmatic audible, gentle real composure throughout delivery.', mood: 'practically-concerned' },
      { speaker: 'yuki_office', jp: '佐藤さんは、どんな意見ですか？', en: 'Sato-san, what\'s your opinion?', style: 'Office woman warm gentle respectful professional inviting, the soft real real-engagement audible, gentle real warmth throughout delivery.', mood: 'respectfully-inviting' },
      { speaker: 'kenji_office', jp: '正直、もう少し情報集めないと、判断しにくくて。', en: 'Honestly, until I gather more info, hard to judge.', style: 'Salaryman warm careful thoughtful honest answering, the soft real real-careful audible, gentle real composure throughout delivery.', mood: 'carefully-honest' },
      { speaker: 'yuki_office', jp: '冷静ですね、田中さんは。', en: 'You\'re always calm, Tanaka-san.', style: 'Office woman warm gentle appreciative observation, the soft real warm-respect audible, gentle real warmth throughout delivery.', mood: 'gently-appreciating' },
      { speaker: 'kenji_office', jp: 'いやいや、ただ慎重なだけです。', en: 'No no, just cautious.', style: 'Salaryman warm humble redirecting laughing brief, the soft real real-modesty audible, gentle real warmth throughout delivery.', mood: 'humbly-laughing' }
    ]
  },
  // 285 — asuka + sakura, English class one-on-one (long)
  {
    id: 'conv_00285',
    context: 'After hours. Asuka offers extra English help to Sakura, who is preparing for an entrance exam interview.',
    purpose: 'careful one-on-one mentoring — building real confidence through language work',
    ambient: 'classroom_quiet',
    sound_effects: [],
    target_vocab: ['英語', '発音', '練習', '面接', '緊張', '自信'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、今日は面接の練習しましょうか。', en: 'Sakura-san, today let\'s practice the interview.', style: 'Teacher warm gentle professional warm proposing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-proposing' },
      { speaker: 'sakura_teen', jp: 'はい、お願いします。緊張する…', en: 'Yes, please. I\'m nervous…', style: 'Teen warm soft careful vulnerable opening, the soft real real-nervous audible, gentle real warmth throughout delivery.', mood: 'softly-vulnerable' },
      { speaker: 'asuka_teacher', jp: '大丈夫。まずは、自己紹介から。', en: 'It\'s okay. First, the self-introduction.', style: 'Teacher warm gentle reassuring step-by-step, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-reassuring' },
      { speaker: 'sakura_teen', jp: 'My name is Sakura. I…am…interested in…literature.', en: 'My name is Sakura. I… am… interested in… literature.', style: 'Teen warm careful slow nervous English-speech, the soft real real-effort audible, gentle real warmth throughout delivery.', mood: 'carefully-nervous' },
      { speaker: 'asuka_teacher', jp: 'いいね。発音、聞きやすい。', en: 'Good. Pronunciation, easy to hear.', style: 'Teacher warm gentle specific praise, the soft real real-encouraging audible, gentle real warmth throughout delivery.', mood: 'gently-praising' },
      { speaker: 'sakura_teen', jp: 'ほんとですか？速すぎないですか？', en: 'Really? Not too fast?', style: 'Teen warm soft careful checking, the soft real real-anxious audible, gentle real warmth throughout delivery.', mood: 'carefully-checking' },
      { speaker: 'asuka_teacher', jp: '速さも、ちょうど良いよ。落ち着いて喋れてる。', en: 'The pace, too, is just right. You\'re speaking calmly.', style: 'Teacher warm gentle specific reassuring detailed, the soft real real-mentor audible, gentle real warmth throughout delivery.', mood: 'specifically-reassuring' },
      { speaker: 'sakura_teen', jp: '次の質問、お願いします。', en: 'The next question, please.', style: 'Teen warm soft brave continuing, the soft real real-courage audible, gentle real warmth throughout delivery.', mood: 'bravely-continuing' },
      { speaker: 'asuka_teacher', jp: 'Why did you choose this university?', en: 'Why did you choose this university?', style: 'Teacher warm professional clean English-pronunciation, the soft real real-mentor audible, gentle real warmth throughout delivery.', mood: 'professionally-clean' },
      { speaker: 'sakura_teen', jp: 'えっと…I want to study literature…and…', en: 'Um… I want to study literature… and…', style: 'Teen warm careful nervous searching answering, the soft real real-effort audible, gentle real warmth throughout delivery.', mood: 'carefully-searching' },
      { speaker: 'asuka_teacher', jp: 'いいよ。あと一言、自分の言葉で加えてみて。', en: 'Good. Add one more line, in your own words.', style: 'Teacher warm gentle encouraging adding, the soft real real-careful-teaching audible, gentle real warmth throughout delivery.', mood: 'gently-encouraging' },
      { speaker: 'sakura_teen', jp: '…the professors are well-known in this field.', en: '…the professors are well-known in this field.', style: 'Teen warm careful sincere brave adding, the soft real real-attempting audible, gentle real warmth throughout delivery.', mood: 'bravely-sincere' },
      { speaker: 'asuka_teacher', jp: 'すごい！完璧な答え方。', en: 'Wonderful! A perfect way to answer.', style: 'Teacher warm bright sincere praise, the soft real real-pride audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: '本当に？ちょっと、自信ついてきた。', en: 'Really? I\'m starting to gain a little confidence.', style: 'Teen warm soft sincere growing-confidence, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-growing' },
      { speaker: 'asuka_teacher', jp: 'あなたなら、絶対大丈夫。応援してるよ。', en: 'You\'ll definitely be fine. I\'m cheering for you.', style: 'Teacher warm firm sincere closing belief, the soft real real-deep-respect audible, gentle real warmth throughout delivery.', mood: 'firmly-believing' }
    ]
  },
  // 286 — sho + saito, dental check (short)
  {
    id: 'conv_00286',
    context: 'Sho is at the dentist for the first time. Dr. Saito is doing the introduction so the boy doesn\'t panic.',
    purpose: 'small medical first-time — adult professional gently easing a child through fear',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['歯', '虫歯', '怖い', '大丈夫', '見せる'],
    cast: ['saito_doctor', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'しょうくん、今日は歯を見せてくれる？', en: 'Sho-kun, will you show me your teeth today?', style: 'Doctor warm gentle careful child-tuned coaxing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-coaxing' },
      { speaker: 'sho_child', jp: '…ちょっと、怖い。', en: '…A little, scared.', style: 'Tiny six-year-old soft small honest careful disclosure, the small real wavering audible, soft small warmth throughout delivery.', mood: 'wavering-soft' },
      { speaker: 'saito_doctor', jp: '大丈夫。痛くしないからね。', en: 'It\'s okay. I won\'t hurt you.', style: 'Doctor warm gentle reassuring careful warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-reassuring' },
      { speaker: 'sho_child', jp: '…うん。', en: '…Mm.', style: 'Tiny six-year-old soft small careful tentative agreeing, the small real trusting audible, soft small warmth throughout delivery.', mood: 'tentatively-trusting' },
      { speaker: 'saito_doctor', jp: 'お、虫歯ないね。よく磨いてる。', en: 'Oh, no cavities. You brush well.', style: 'Doctor warm gentle bright relieved praise, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-relieved' },
      { speaker: 'sho_child', jp: 'えへへ。', en: 'Heehee.', style: 'Tiny six-year-old soft small touched relieved gentle, the small real warmth audible, soft small joy throughout delivery.', mood: 'softly-touched' }
    ]
  },
  // 287 — ryosuke + naoko, sibling-in-law (medium)
  {
    id: 'conv_00287',
    context: 'Naoko visits her brother-in-law Ryosuke alone — she has a small worry about her own future she wants honest input on.',
    purpose: 'sibling-in-law adult honest exchange — woman seeking calm man\'s perspective',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['転職', '迷う', '助言', '正直', '将来'],
    cast: ['ryosuke_dad', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: '亮介さん、ちょっと相談したいことがあって。', en: 'Ryosuke-san, there\'s something I want to consult about.', style: 'Aunt warm careful family-respectful opener, the soft real real-trust audible, gentle real warmth throughout delivery.', mood: 'carefully-respectful' },
      { speaker: 'ryosuke_dad', jp: 'もちろん。どうしました？', en: 'Of course. What\'s up?', style: 'Father warm gentle family-open receiving, the soft real real-listening audible, gentle real warmth throughout delivery.', mood: 'openly-receiving' },
      { speaker: 'naoko_aunt', jp: '実は、転職、考えてるの。', en: 'Actually, I\'m thinking of switching jobs.', style: 'Aunt warm soft brave careful disclosure, the soft real real-vulnerability audible, gentle real warmth throughout delivery.', mood: 'bravely-disclosing' },
      { speaker: 'ryosuke_dad', jp: 'ほう、それは大きな決断ですね。', en: 'Oh, that\'s a big decision.', style: 'Father warm gentle thoughtful weighted acknowledging, the soft real real-respect audible, gentle real warmth throughout delivery.', mood: 'thoughtfully-acknowledging' },
      { speaker: 'naoko_aunt', jp: 'もう三十五で、迷ってて。亮介さんは、転職した時どうだった？', en: 'I\'m thirty-five — stuck. When you switched, how was it?', style: 'Aunt warm careful real seeking experience, the soft real real-curious audible, gentle real warmth throughout delivery.', mood: 'carefully-seeking' },
      { speaker: 'ryosuke_dad', jp: '怖かったよ、正直。でも、後悔はない。', en: 'Scared, honestly. But no regrets.', style: 'Father warm honest weighted clear disclosure, the soft real real-mentor warmth audible, gentle real warmth throughout delivery.', mood: 'honestly-weighted' },
      { speaker: 'naoko_aunt', jp: '何が決め手だった？', en: 'What was the deciding factor?', style: 'Aunt warm careful sincere genuine inquiry, the soft real real-engagement audible, gentle real warmth throughout delivery.', mood: 'sincerely-inquiring' },
      { speaker: 'ryosuke_dad', jp: '将来、自分が後悔しない選択。それだけ考えた。', en: 'A choice my future self wouldn\'t regret. That\'s all I thought about.', style: 'Father warm firm gentle wise honest sharing, the soft real real-mentor wisdom audible, gentle real warmth throughout delivery.', mood: 'wisely-firm' },
      { speaker: 'naoko_aunt', jp: 'ありがとう。すごく助言になった。', en: 'Thank you. Truly helpful advice.', style: 'Aunt warm sincere deep grateful closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-grateful' }
    ]
  },
  // 288 — daichi + mei, marriage conversation (long)
  {
    id: 'conv_00288',
    context: 'Daichi and Mei have been together long enough. Tonight, Daichi gently raises the question of where they\'re headed.',
    purpose: 'small intimate future-talk — careful adult relationship navigation',
    ambient: 'apartment_evening',
    sound_effects: [],
    target_vocab: ['将来', '結婚', '気持ち', '一緒', '本気', '考える'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'メイちゃん、ちょっと、真面目な話してええ？', en: 'Mei-chan, can I have a serious talk?', style: 'Kansai warm soft careful brave opener, the regional swing audible, soft real warmth throughout delivery.', mood: 'carefully-brave' },
      { speaker: 'mei_romantic', jp: 'うん、もちろん。どうしたの？', en: 'Yes, of course. What is it?', style: 'Romantic warm soft gentle careful receiving, the soft real real-attention audible, gentle real warmth throughout delivery.', mood: 'softly-receiving' },
      { speaker: 'daichi_kansai', jp: 'わいら、もう一年以上経つやろ。', en: 'It\'s been over a year for us, hasn\'t it.', style: 'Kansai warm soft careful gentle observation, the regional swing audible, soft real warmth throughout delivery.', mood: 'softly-observing' },
      { speaker: 'mei_romantic', jp: 'うん…早いよね。', en: 'Yes… time flies.', style: 'Romantic warm soft gentle wondering matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-wondering' },
      { speaker: 'daichi_kansai', jp: '将来のこと、ちゃんと考えたくて。', en: 'I want to think about the future, properly.', style: 'Kansai warm soft sincere careful disclosure, the regional swing audible, soft real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'mei_romantic', jp: '…どんな感じで？', en: '…In what way?', style: 'Romantic warm soft careful tentative receiving, the soft real real-careful audible, gentle real warmth throughout delivery.', mood: 'softly-tentative' },
      { speaker: 'daichi_kansai', jp: 'わい、本気でメイちゃんと、ずっと一緒にいたい。', en: 'I, seriously, want to be with you forever.', style: 'Kansai warm soft brave honest deep disclosure, the regional swing audible, soft real warmth throughout delivery.', mood: 'bravely-honest' },
      { speaker: 'mei_romantic', jp: '…ありがとう。気持ちは、同じ。', en: '…Thank you. My feeling is the same.', style: 'Romantic warm soft sincere deep touched matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-matching' },
      { speaker: 'daichi_kansai', jp: 'ほんま？よかった。急がんで、お互いのペースで。', en: 'Truly? I\'m glad. No rush, at our own pace.', style: 'Kansai warm soft relieved warm gentle, the regional swing audible, soft real warmth throughout delivery.', mood: 'softly-relieved' },
      { speaker: 'mei_romantic', jp: 'うん、ゆっくりがいい。一緒に考えたい。', en: 'Yes, slowly is good. Let\'s think together.', style: 'Romantic warm soft sincere gentle agreeing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-agreeing' },
      { speaker: 'daichi_kansai', jp: 'お互いの家族のこととか、仕事のこととか。', en: 'Each other\'s families, work, things like that.', style: 'Kansai warm soft careful practical listing, the regional swing audible, soft real warmth throughout delivery.', mood: 'carefully-practical' },
      { speaker: 'mei_romantic', jp: '私の両親にも、ちゃんと紹介したい。', en: 'I want to properly introduce you to my parents too.', style: 'Romantic warm soft sincere committed disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'daichi_kansai', jp: 'よし、決まりやな。ゆっくり、ちゃんと進めよ。', en: 'Right, decided then. Slowly, properly progress.', style: 'Kansai warm soft pleased gentle closing committing, the regional swing audible, soft real warmth throughout delivery.', mood: 'pleasantly-committing' },
      { speaker: 'mei_romantic', jp: 'うん。なんか、すごく幸せ。', en: 'Yes. Somehow, really happy.', style: 'Romantic warm soft sincere quietly-joyful closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'quietly-joyful' }
    ]
  },
  // 289 — hiroshi_boss + hiroshi_elder, formal family talk (medium)
  {
    id: 'conv_00289',
    context: 'A month after the family business handover discussion. Hiroshi the boss has decided.',
    purpose: 'son returning to father with weighty business decision',
    ambient: 'tatami_evening',
    sound_effects: [],
    target_vocab: ['決断', '継ぐ', '責任', '伝統', '未来'],
    cast: ['hiroshi_boss', 'hiroshi_elder'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '父さん、決断しました。', en: 'Father, I\'ve decided.', style: 'Boss warm soft son-mode brave careful, the soft real real-deep-respect audible, gentle real warmth throughout delivery.', mood: 'bravely-careful' },
      { speaker: 'hiroshi_elder', jp: 'おう、聞かせてくれ。', en: 'Yeah, tell me.', style: 'Slow elder warm gentle accepting open, the soft real real-patriarch-care audible, gentle real warmth throughout delivery.', mood: 'gently-open' },
      { speaker: 'hiroshi_boss', jp: 'お店、継ぎます。父さんが築いたもの、守ります。', en: 'I\'ll take over the shop. I\'ll protect what you built.', style: 'Boss warm firm weighted sincere committing, the soft real real-honor audible, gentle real warmth throughout delivery.', mood: 'firmly-committing' },
      { speaker: 'hiroshi_elder', jp: '…そうか。ありがとう、決めてくれて。', en: '…I see. Thank you, for deciding.', style: 'Slow elder warm soft deeply-touched grateful, the soft real real-deep-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-touched' },
      { speaker: 'hiroshi_boss', jp: '責任の重さは、わかってる。だから、ちゃんとやる。', en: 'I understand the weight of responsibility. So, I\'ll do it properly.', style: 'Boss warm firm sincere committed conviction, the soft real real-honor audible, gentle real warmth throughout delivery.', mood: 'firmly-committed' },
      { speaker: 'hiroshi_elder', jp: '無理せん範囲で。お前の家族も、大事に。', en: 'Within reason. Take care of your family too.', style: 'Slow elder warm gentle wise protective, the soft real real-patriarch-love audible, gentle real warmth throughout delivery.', mood: 'gently-protective' },
      { speaker: 'hiroshi_boss', jp: '伝統を守りつつ、少しずつ、未来に合わせていきます。', en: 'While preserving tradition, slowly adapt to the future.', style: 'Boss warm firm weighted thoughtful committed, the soft real real-honor audible, gentle real warmth throughout delivery.', mood: 'weightedly-committed' },
      { speaker: 'hiroshi_elder', jp: '父さんも、応援するよ。陰ながら。', en: 'Dad will support too. Quietly.', style: 'Slow elder warm soft gentle closing love, the soft real real-deep-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-loving' }
    ]
  },
  // 290 — yuki + mei, fashion shopping (medium)
  {
    id: 'conv_00290',
    context: 'Yuki and Mei go shopping together for the first time. They\'re looking for a dress for Mei\'s upcoming event.',
    purpose: 'small adult-women friendship — small consumer outing as bonding',
    ambient: 'department_store',
    sound_effects: [],
    target_vocab: ['服', '似合う', '選ぶ', '色', '形'],
    cast: ['yuki_office', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ゆきさん、これ、どう思う？', en: 'Yuki-san, what do you think of this?', style: 'Romantic warm soft gentle careful asking-friend, the soft real real-trust audible, gentle real warmth throughout delivery.', mood: 'softly-asking' },
      { speaker: 'yuki_office', jp: '色、すごく似合いそう。試着してみたら？', en: 'The color suits you. Try it on?', style: 'Office woman warm bright friendly encouraging, the soft real real-friendship audible, gentle real warmth throughout delivery.', mood: 'brightly-encouraging' },
      { speaker: 'mei_romantic', jp: '形、ちょっと不安で。袖が長くないかな。', en: 'The shape, a little unsure. Aren\'t the sleeves long?', style: 'Romantic warm soft careful self-conscious, the soft real real-worry audible, gentle real warmth throughout delivery.', mood: 'softly-self-conscious' },
      { speaker: 'yuki_office', jp: '長さ、メイさんの背丈にちょうど合うと思う。', en: 'The length will match your height, I think.', style: 'Office woman warm gentle confident reassuring detailed, the soft real real-friend-care audible, gentle real warmth throughout delivery.', mood: 'gently-confident' },
      { speaker: 'mei_romantic', jp: '本当？じゃあ、ちょっと試してくる。', en: 'Really? Then, I\'ll try it on.', style: 'Romantic warm soft trusting brave committing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'trustingly-brave' },
      { speaker: 'yuki_office', jp: '行ってらっしゃい！見せてね。', en: 'Off you go! Show me.', style: 'Office woman warm bright friendly encouraging waiting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-waiting' },
      { speaker: 'mei_romantic', jp: 'うん…どう？', en: 'Mm… how is it?', style: 'Romantic warm soft careful tentative emerging-showing, the soft real real-shy audible, gentle real warmth throughout delivery.', mood: 'tentatively-showing' },
      { speaker: 'yuki_office', jp: 'うわー、すごく素敵！絶対これ。', en: 'Wow, really lovely! Absolutely this one.', style: 'Office woman warm bright sincere genuine declaring, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-declaring' },
      { speaker: 'mei_romantic', jp: 'ふふ、嬉しい。じゃあ、これに決めた。', en: 'Hehe, happy. Then, decided on this.', style: 'Romantic warm soft pleased gentle deciding-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'pleasantly-deciding' }
    ]
  },
  // 291 — tatsuya + goro, two countrymen (medium)
  {
    id: 'conv_00291',
    context: 'Goro happens to visit a rural area for a memorial; he stops at Tatsuya\'s farm stand and they recognize they share the same regional manner.',
    purpose: 'two rural-cadenced men meeting — quiet country recognition',
    ambient: 'farm_stand_afternoon',
    sound_effects: [],
    target_vocab: ['田舎', '昔', '同じ', '畑', '土地'],
    cast: ['goro_grandpa', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'goro_grandpa', jp: 'おう、ここの野菜、立派だな。', en: 'Yeah, the veggies here are splendid.', style: 'Slow grandpa warm gentle rural-recognition observation, the soft real real-respect audible, gentle real warmth throughout delivery.', mood: 'gently-respectful' },
      { speaker: 'tatsuya_country', jp: 'おう、ありがとうな。お客さんも田舎の人か？', en: 'Yeah, thanks. You from the country too?', style: 'Country gruff warm friendly recognizing fellow-rural, the soft real real-recognition audible, gentle real warmth throughout delivery.', mood: 'gruffly-recognizing' },
      { speaker: 'goro_grandpa', jp: '今は東京だが、生まれは田舎よ。', en: 'Now Tokyo, but born in the country.', style: 'Slow grandpa warm gentle honest sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-honest' },
      { speaker: 'tatsuya_country', jp: 'ほう、なるほど。やっぱり、土地の人らしいわ。', en: 'Hmm, I see. You really do seem like land-folk.', style: 'Country gruff warm gentle recognition validating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-validating' },
      { speaker: 'goro_grandpa', jp: '田舎で育つと、抜けないもんだな。', en: 'Once you grow up in the country, it doesn\'t leave you.', style: 'Slow grandpa warm gentle wise rural-truth observation, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-wise' },
      { speaker: 'tatsuya_country', jp: '昔、よく畑で泥だらけになって遊んだもんよ。', en: 'In the old days, we played in the fields, all muddy.', style: 'Country gruff warm gentle nostalgic memory-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-nostalgic' },
      { speaker: 'goro_grandpa', jp: 'おお、同じだ。あの泥のにおい、忘れないな。', en: 'Oh, same. That mud smell — unforgettable.', style: 'Slow grandpa warm bright nostalgic matching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-nostalgic' },
      { speaker: 'tatsuya_country', jp: 'ええ思い出やなあ。', en: 'Good memories indeed.', style: 'Country gruff warm gentle warm closing reflection, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-warm' }
    ]
  },
  // 292 — takeda + ren, reporting (short)
  {
    id: 'conv_00292',
    context: 'Ren stops at the koban to report a lost item from a friend who couldn\'t come.',
    purpose: 'small civic kindness — young adult interfacing with the police on behalf of someone',
    ambient: 'koban_afternoon',
    sound_effects: [],
    target_vocab: ['届け', '友達', '失くす', '時計', '助かる'],
    cast: ['takeda_officer', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'すいません、友達が時計を失くしたみたいで。', en: 'Excuse me, my friend lost a watch, it seems.', style: 'University student warm casual civic-respectful opener, the soft real real-engagement audible, gentle real warmth throughout delivery.', mood: 'casually-civic' },
      { speaker: 'takeda_officer', jp: 'はい、どんな時計ですか。', en: 'Yes, what kind of watch?', style: 'Officer warm professional steady receiving inquiry, the soft real real-attention audible, gentle real warmth throughout delivery.', mood: 'professionally-steady' },
      { speaker: 'ren_uni', jp: '銀色の、革ベルトのです。駅で失くしたって。', en: 'Silver, with leather strap. Lost at the station.', style: 'University student warm careful detailed sharing, the soft real real-helpful audible, gentle real warmth throughout delivery.', mood: 'carefully-detailed' },
      { speaker: 'takeda_officer', jp: '一応、届け出しときます。届くこと多いですよ。', en: 'I\'ll register it just in case. Often turns up.', style: 'Officer warm professional gentle reassuring useful, the soft real real-public-care audible, gentle real warmth throughout delivery.', mood: 'professionally-reassuring' },
      { speaker: 'ren_uni', jp: 'マジ助かります。連絡先、書きます。', en: 'Really saves us. I\'ll write contact info.', style: 'University student warm sincere casual grateful committed, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '見つかったら、すぐご連絡しますね。', en: 'If found, I\'ll contact you right away.', style: 'Officer warm gentle generous extending closing, the soft real real-civic-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-extending' }
    ]
  },
  // 293 — mrs_mori + yumiko + hina, 3-speaker (medium)
  {
    id: 'conv_00293',
    context: 'A community festival prep day. Mrs. Mori, Yumiko, and little Hina are putting together small flower decorations.',
    purpose: 'three-generation community involvement — child contributing in small ways',
    ambient: 'community_room_afternoon',
    sound_effects: [],
    target_vocab: ['お祭り', '準備', '飾り', '一緒', '手伝う'],
    cast: ['mrs_mori_neighbor', 'yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '今年もお祭り、いよいよね。', en: 'This year\'s festival, finally upon us.', style: 'Neighbor warm gentle bright eldercommunity opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'yumiko_mom', jp: 'はい、今日は飾りの準備、手伝いに来ました。', en: 'Yes, today I came to help prep decorations.', style: 'Maternal warm respectful community-warm sharing, the soft real real-helpful audible, gentle real warmth throughout delivery.', mood: 'respectfully-warm' },
      { speaker: 'hina_child', jp: 'ひなも、お手伝いするー！', en: 'Hina will help too!', style: 'High child bright eager community-warm declaring, the soft real real-childish-energy audible, gentle real warmth throughout delivery.', mood: 'eagerly-bright' },
      { speaker: 'mrs_mori_neighbor', jp: 'まあ、ひなちゃん、頼もしいわね。', en: 'Oh, Hina-chan, how dependable.', style: 'Neighbor warm gentle delighted child-warm praising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-delighted' },
      { speaker: 'yumiko_mom', jp: 'ひなは、花を一つずつ並べてくれる？', en: 'Hina, can you line up the flowers one by one?', style: 'Maternal warm gentle directing child-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-directing' },
      { speaker: 'hina_child', jp: 'はーい！きれいに並べる！', en: 'Yes! I\'ll line them pretty!', style: 'High child bright committed eager-energetic, the soft real real-childish-determination audible, gentle real warmth throughout delivery.', mood: 'eagerly-committed' },
      { speaker: 'mrs_mori_neighbor', jp: 'こうやって、若い手が入ると、賑やかでいいわ。', en: 'When young hands join, it\'s lively and good.', style: 'Neighbor warm gentle reflective community-warmth, the soft real real-elder-joy audible, gentle real warmth throughout delivery.', mood: 'gently-reflective' },
      { speaker: 'yumiko_mom', jp: '本当に。みんなで一緒だと楽しいですね。', en: 'Truly. Together, with everyone, it\'s fun.', style: 'Maternal warm sincere gentle community-warmth closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-community' }
    ]
  },
  // 294 — hiroshi_elder + ryosuke, follow-up (medium)
  {
    id: 'conv_00294',
    context: 'A few months after their first deep talk. Ryosuke comes back to thank Hiroshi-elder — Riku has been doing better.',
    purpose: 'son-in-law follow-up gratitude — quiet update on parenting wisdom that worked',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['お陰', '元気', '話す', '時間', '感謝'],
    cast: ['hiroshi_elder', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'お父さん、ご無沙汰してました。', en: 'Father, sorry for the long silence.', style: 'Father warm formal respectful son-in-law opener, the soft real real-respect audible, gentle real warmth throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'hiroshi_elder', jp: 'おう、亮介。元気そうで何より。', en: 'Yeah, Ryosuke. Glad you\'re well.', style: 'Slow elder warm gentle welcoming family, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-welcoming' },
      { speaker: 'ryosuke_dad', jp: 'リクのことで、報告に来ました。', en: 'I came to report about Riku.', style: 'Father warm gentle careful sincere reporting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-reporting' },
      { speaker: 'hiroshi_elder', jp: 'ほう、聞かせなさい。', en: 'Oh, let me hear.', style: 'Slow elder warm gentle inviting receiving, the soft real real-attention audible, gentle real warmth throughout delivery.', mood: 'gently-inviting' },
      { speaker: 'ryosuke_dad', jp: 'お父さんに言われたとおり、一緒の時間、増やしました。', en: 'As you told me, I increased time together.', style: 'Father warm gentle sincere honest reporting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'hiroshi_elder', jp: 'で、どうだ。', en: 'And, how is it?', style: 'Slow elder warm gentle brief inviting more, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-brief' },
      { speaker: 'ryosuke_dad', jp: '少しずつ、話してくれるようになりました。お父さんのお陰です。', en: 'Bit by bit, he\'s talking. Thanks to you, father.', style: 'Father warm sincere deep grateful sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-grateful' },
      { speaker: 'hiroshi_elder', jp: 'いやいや、亮介が、ちゃんと待ったから。', en: 'No no, because you, Ryosuke, properly waited.', style: 'Slow elder warm gentle humble redirecting, the soft real real-elder-grace audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'ryosuke_dad', jp: '本当に、感謝しています。', en: 'Truly, I\'m grateful.', style: 'Father warm sincere deep closing gratitude, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 295 — riku + saito, minor injury (medium)
  {
    id: 'conv_00295',
    context: 'Riku has sprained his ankle in soccer. He sees Dr. Saito for the small injury.',
    purpose: 'small medical visit — teen receiving sports-injury care',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['怪我', '足', '部活', '治る', '注意'],
    cast: ['saito_doctor', 'riku_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'リクさん、足、ちょっと見せてください。', en: 'Riku, let me see your foot a bit.', style: 'Doctor warm professional gentle teen-careful opener, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-professional' },
      { speaker: 'riku_teen', jp: 'はい、お願いします。痛くて。', en: 'Yes, please. It hurts.', style: 'Teen warm soft honest brief careful sharing, the soft real real-fatigue audible, gentle real warmth throughout delivery.', mood: 'honestly-brief' },
      { speaker: 'saito_doctor', jp: '部活でですか？サッカー？', en: 'In club? Soccer?', style: 'Doctor warm professional gentle teen-curious, the soft real real-engaged audible, gentle real warmth throughout delivery.', mood: 'gently-curious' },
      { speaker: 'riku_teen', jp: 'はい。試合中、転んで。', en: 'Yes. During the match, fell.', style: 'Teen warm casual brief honest reporting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'casually-honest' },
      { speaker: 'saito_doctor', jp: '骨は大丈夫そうだけど、捻挫ですね。', en: 'The bone looks fine, but it\'s a sprain.', style: 'Doctor warm professional gentle clear diagnosing, the soft real real-expert-care audible, gentle real warmth throughout delivery.', mood: 'professionally-clear' },
      { speaker: 'riku_teen', jp: 'いつ治りますか？大会近いんで…。', en: 'When will it heal? Tournament is close…', style: 'Teen warm soft worried real careful inquiry, the soft real real-worry audible, gentle real warmth throughout delivery.', mood: 'softly-worried' },
      { speaker: 'saito_doctor', jp: '二週間は、運動控えて。無理すると悪化します。', en: 'Two weeks, refrain from sports. Pushing makes it worse.', style: 'Doctor warm firm gentle clear adult-respecting, the soft real real-expert audible, gentle real warmth throughout delivery.', mood: 'gently-firm' },
      { speaker: 'riku_teen', jp: 'うう、わかりました。', en: 'Ugh, understood.', style: 'Teen warm soft reluctant accepting committed, the soft real real-disappointment-but-acceptance audible, gentle real warmth throughout delivery.', mood: 'reluctantly-accepting' },
      { speaker: 'saito_doctor', jp: '今、ちゃんと治した方が、長く動けるよ。', en: 'Healing properly now means moving longer later.', style: 'Doctor warm gentle wise mentor-encouragement closing, the soft real real-mentor warmth audible, gentle real warmth throughout delivery.', mood: 'gently-wise' }
    ]
  },
  // 296 — sakura + mei, older mentoring younger (long)
  {
    id: 'conv_00296',
    context: 'Sakura is now applying to universities. Through her aunt Naoko, Mei has offered to do mock interviews.',
    purpose: 'young-adult woman mentoring teen — career bridge across small age gap',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['面接', '練習', '質問', '自信', '希望', '本気'],
    cast: ['mei_romantic', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'さくらちゃん、緊張してる？', en: 'Sakura-chan, nervous?', style: 'Romantic warm gentle careful older-friend opening, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-caring' },
      { speaker: 'sakura_teen', jp: 'はい、すごく。本番が怖い。', en: 'Yes, very. The real one is scary.', style: 'Teen warm soft honest vulnerable disclosure, the soft real real-anxiety audible, gentle real warmth throughout delivery.', mood: 'softly-vulnerable' },
      { speaker: 'mei_romantic', jp: '練習すれば、必ず慣れる。リラックスして。', en: 'With practice, you\'ll get used to it. Relax.', style: 'Romantic warm gentle reassuring confident mentor-warmth, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'reassuringly-warm' },
      { speaker: 'sakura_teen', jp: 'うん…じゃあ、お願いします。', en: 'Yes… then, please.', style: 'Teen warm soft brave committing-careful, the soft real real-effort audible, gentle real warmth throughout delivery.', mood: 'bravely-committed' },
      { speaker: 'mei_romantic', jp: 'では、最初の質問。なぜこの大学を選びましたか。', en: 'Then, first question. Why did you choose this university?', style: 'Romantic warm professional gentle mentor opening, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-gentle' },
      { speaker: 'sakura_teen', jp: 'えっと、教授の研究に興味があって…。', en: 'Um, I\'m interested in the professor\'s research…', style: 'Teen warm careful nervous answering specific, the soft real real-effort audible, gentle real warmth throughout delivery.', mood: 'carefully-nervous' },
      { speaker: 'mei_romantic', jp: 'いいね。具体的な研究名、出せる？', en: 'Good. Can you give a specific research name?', style: 'Romantic warm gentle helpful pushing-soft, the soft real real-mentor audible, gentle real warmth throughout delivery.', mood: 'gently-pushing' },
      { speaker: 'sakura_teen', jp: '日本文学の比較研究、です。', en: 'Comparative Japanese literature research.', style: 'Teen warm soft careful precise sharing, the soft real real-engagement audible, gentle real warmth throughout delivery.', mood: 'softly-precise' },
      { speaker: 'mei_romantic', jp: '完璧。一文加えるだけで、ぐっと印象変わる。', en: 'Perfect. Adding one line changes the impression a lot.', style: 'Romantic warm gentle warm sincere praise-mentoring, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'warmly-mentoring' },
      { speaker: 'sakura_teen', jp: 'なるほど。続けて、お願いします。', en: 'I see. Continue, please.', style: 'Teen warm soft absorbing engaged committed-careful, the soft real real-effort audible, gentle real warmth throughout delivery.', mood: 'committedly-careful' },
      { speaker: 'mei_romantic', jp: '次。将来、何になりたいですか。', en: 'Next. In the future, what do you want to become?', style: 'Romantic warm gentle professional mentor-clean, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-clean' },
      { speaker: 'sakura_teen', jp: '…作家になりたいです。本気で。', en: '…I want to become a writer. Seriously.', style: 'Teen warm soft brave honest deep-disclosure, the soft real real-dream audible, gentle real warmth throughout delivery.', mood: 'bravely-honest' },
      { speaker: 'mei_romantic', jp: 'すごく素敵な夢。その気持ち、ちゃんと伝えるといい。', en: 'A really lovely dream. Convey that feeling properly.', style: 'Romantic warm gentle sincere genuinely-touched encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-touched' },
      { speaker: 'sakura_teen', jp: 'メイさんと話してると、自信ついてきた。', en: 'Talking with you, Mei-san, I gain confidence.', style: 'Teen warm soft sincere touched closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-touched' },
      { speaker: 'mei_romantic', jp: 'さくらちゃんの本気、ちゃんと届くから。', en: 'Sakura-chan\'s seriousness will reach them.', style: 'Romantic warm soft sincere gentle closing belief, the soft real real-deep-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-believing' }
    ]
  },
  // 297 — hina + ren + sakura, big cousins (3-speaker, medium)
  {
    id: 'conv_00297',
    context: 'Hina is hanging out with her two older cousins Ren and Sakura. They\'re teaching her a card game.',
    purpose: 'older-cousins entertaining youngest — multi-generation play',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['遊ぶ', 'ルール', '勝つ', '負ける', '楽しい'],
    cast: ['hina_child', 'ren_uni', 'sakura_teen'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'ねえねえ、トランプ、教えて！', en: 'Hey hey, teach me cards!', style: 'High child bright eager pleading both-cousins, the soft real real-childish-excitement audible, gentle real warmth throughout delivery.', mood: 'eagerly-bright' },
      { speaker: 'ren_uni', jp: '簡単なやつから行こうか。ババ抜き。', en: 'Let\'s start with an easy one. Old Maid.', style: 'University student warm easy older-cousin warm-deciding, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'easily-warm' },
      { speaker: 'sakura_teen', jp: 'いいね、ひなも一緒に。', en: 'Nice, Hina can join too.', style: 'Teen warm gentle bright supporting big-cousin, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-supporting' },
      { speaker: 'hina_child', jp: 'ルール、わかんない！', en: 'I don\'t know the rules!', style: 'High child bright loud cheerful-protest, the soft real real-childish-warmth audible, gentle real warmth throughout delivery.', mood: 'loudly-cheerful' },
      { speaker: 'ren_uni', jp: 'はいはい、教えるから。同じカード二枚で出す。', en: 'Okay okay, I\'ll teach. Two same cards, you discard.', style: 'University student warm gentle teaching-easy older-cousin, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-teaching' },
      { speaker: 'sakura_teen', jp: 'ひな、最後にババ持ってたら負け。', en: 'Hina, if you have the joker at the end, you lose.', style: 'Teen warm gentle clear adding teaching, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-adding' },
      { speaker: 'hina_child', jp: 'えー、ババ怖い！', en: 'Eh, the joker is scary!', style: 'High child bright dramatic playful exclaiming, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'dramatically-bright' },
      { speaker: 'ren_uni', jp: '楽しいから大丈夫。やってみよう。', en: 'It\'s fun, so it\'s fine. Let\'s try.', style: 'University student warm easy reassuring leading, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'easily-leading' },
      { speaker: 'sakura_teen', jp: '勝っても負けても、楽しいよ、これ。', en: 'Win or lose, this game is fun.', style: 'Teen warm gentle sincere wisdom-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 298 — kenji + ryosuke + tatsuya, 3 men (3-speaker, long)
  {
    id: 'conv_00298',
    context: 'Three middle-aged men gathered for a drink after a business deal completed successfully. Trust forming.',
    purpose: 'three-men adult bonding — across-class warmth through successful collaboration',
    ambient: 'izakaya_evening',
    sound_effects: [],
    target_vocab: ['乾杯', '仕事', '取引', '信頼', '将来', '酒'],
    cast: ['kenji_office', 'ryosuke_dad', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '今日の取引、無事まとまって、安心しました。', en: 'Today\'s deal closed without issue — I\'m relieved.', style: 'Salaryman warm sincere relaxed-relieved opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-relieved' },
      { speaker: 'tatsuya_country', jp: 'ほんま、ありがとうな。乾杯しよか。', en: 'Truly, thank you. Let\'s cheers.', style: 'Country gruff warm pleased gathering rallying, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'pleasantly-rallying' },
      { speaker: 'ryosuke_dad', jp: '乾杯！お互い、いい仕事できそうですね。', en: 'Cheers! It seems we can do good work together.', style: 'Father warm bright sincere generous lifting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '達也さんの野菜、本当に評判いいです。', en: 'Tatsuya-san\'s vegetables — truly reputation is good.', style: 'Salaryman warm sincere appreciative reporting, the soft real real-respect audible, gentle real warmth throughout delivery.', mood: 'sincerely-appreciating' },
      { speaker: 'tatsuya_country', jp: 'いやいや、こっちこそ、信頼してくれてありがたい。', en: 'No, no, on my side, I\'m grateful for the trust.', style: 'Country gruff warm humble redirecting-thanks, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-grateful' },
      { speaker: 'ryosuke_dad', jp: 'こうやって、田舎と都会、繋がれるのは嬉しい。', en: 'Country and city connecting like this — happy news.', style: 'Father warm gentle wise reflective shared-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-wise' },
      { speaker: 'tatsuya_country', jp: '俺もそう思う。仕事、長く続けたい。', en: 'I think so too. Want to keep this work going long.', style: 'Country gruff warm sincere committing matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committing' },
      { speaker: 'kenji_office', jp: 'うちの会社も、達也さんに、ずっとお願いしたい。', en: 'Our company too — wants to keep asking Tatsuya-san.', style: 'Salaryman warm sincere committed business-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-business' },
      { speaker: 'ryosuke_dad', jp: 'こういう関係って、大事ですよね。お金じゃ買えない。', en: 'Relationships like this matter. Money can\'t buy them.', style: 'Father warm gentle wise philosophical observation, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-philosophical' },
      { speaker: 'tatsuya_country', jp: 'うん。亮介さんに紹介してもろて、ほんま助かった。', en: 'Yeah. Being introduced by Ryosuke-san — truly saved me.', style: 'Country gruff warm sincere grateful matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-grateful' },
      { speaker: 'ryosuke_dad', jp: '繋ぐのが、私の役目。お二人が成功したら嬉しい。', en: 'Connecting is my role. I\'m glad when you two succeed.', style: 'Father warm gentle humble reflective wise, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-humble' },
      { speaker: 'kenji_office', jp: 'もう一杯、いきましょう！', en: 'Let\'s have another round!', style: 'Salaryman warm bright energetic gathering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-energetic' },
      { speaker: 'tatsuya_country', jp: 'よっしゃ、今晩は飲むで！', en: 'Alright, tonight we drink!', style: 'Country gruff warm bright pleasing celebrating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'pleasantly-celebrating' },
      { speaker: 'ryosuke_dad', jp: '今夜は本当に良い夜だ。', en: 'Tonight really is a good night.', style: 'Father warm sincere gentle closing reflective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-reflective' }
    ]
  },
  // 299 — asuka + naoko, art class (short)
  {
    id: 'conv_00299',
    context: 'Naoko stops at Hina\'s art class to pick her up; she chats briefly with Ms. Asuka.',
    purpose: 'small civil aunt-teacher chat — community familiarity',
    ambient: 'classroom_after',
    sound_effects: [],
    target_vocab: ['迎え', '楽しい', '元気', '上手', '見守る'],
    cast: ['asuka_teacher', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'すみません、ひなを迎えに来ました。', en: 'Excuse me, I came to pick up Hina.', style: 'Aunt warm formal polite friendly opener, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'politely-warm' },
      { speaker: 'asuka_teacher', jp: 'ナオコさん、こんにちは。ひなさん、今日も元気でしたよ。', en: 'Naoko-san, hello. Hina was lively again today.', style: 'Teacher warm gentle professional welcoming familiar, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-familiar' },
      { speaker: 'naoko_aunt', jp: 'いつも見守っていただいて、ありがとうございます。', en: 'Thank you for always watching over her.', style: 'Aunt warm formal sincere community-grateful, the soft real real-respect audible, gentle real warmth throughout delivery.', mood: 'formally-grateful' },
      { speaker: 'asuka_teacher', jp: 'ひなさん、絵がすごく上手になってきました。', en: 'Hina\'s become really good at drawing.', style: 'Teacher warm gentle bright sincere observing-praise, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-praising' },
      { speaker: 'naoko_aunt', jp: '本当ですか？嬉しい。', en: 'Really? Happy news.', style: 'Aunt warm bright sincere touched pleased, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-touched' },
      { speaker: 'asuka_teacher', jp: '今日の作品、見てやってください。', en: 'Please look at today\'s work.', style: 'Teacher warm gentle generous closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-closing' }
    ]
  },
  // 300 — yumiko + sachiko + hina, names talk (3-speaker, medium)
  {
    id: 'conv_00300',
    context: 'Hina asks why she was named Hina. Yumiko explains; Sachiko adds depth.',
    purpose: 'three-generation name-meaning conversation — quiet family story-telling',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['名前', '意味', '由来', '思い出', '大切'],
    cast: ['hina_child', 'yumiko_mom', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'ねえ、お母さん、なんでひなって名前なの？', en: 'Hey, Mom, why is my name Hina?', style: 'High child bright curious genuine asking, the soft real real-childish-curiosity audible, gentle real warmth throughout delivery.', mood: 'brightly-curious' },
      { speaker: 'yumiko_mom', jp: 'ひなって、太陽の光、って意味なの。', en: 'Hina — it means sunlight.', style: 'Maternal warm gentle careful tender sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sharing' },
      { speaker: 'hina_child', jp: 'えー、太陽！すごい！', en: 'Eh, sun! Amazing!', style: 'High child bright delighted excited reaction, the soft real real-childish-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-delighted' },
      { speaker: 'sachiko_grandma', jp: 'ひなちゃんが生まれた時、お日様が出てたのよ。', en: 'When Hina was born, the sun came out.', style: 'Soft grandmother warm tender memory-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: '本当に？', en: 'Really?', style: 'High child bright single-word wondering surprise, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-wondering' },
      { speaker: 'yumiko_mom', jp: '本当よ。だから、ひなって名前、由来があるの。', en: 'Truly. So, the name Hina has an origin.', style: 'Maternal warm gentle confirming tender sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-tender' },
      { speaker: 'sachiko_grandma', jp: '名前は、家族からの最初の贈り物よ。', en: 'A name is the family\'s first gift.', style: 'Soft grandmother warm gentle philosophical tender wisdom, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'philosophically-tender' },
      { speaker: 'hina_child', jp: 'えへへ、なんか嬉しい。', en: 'Heehee, somehow happy.', style: 'High child bright soft touched warm-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-touched' },
      { speaker: 'yumiko_mom', jp: 'ひなの名前、大切にしてね。', en: 'Take care of your name, Hina.', style: 'Maternal warm gentle closing tender reminder, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-closing' }
    ]
  },
  // 301 — aoi + hina, cafe (short)
  {
    id: 'conv_00301',
    context: 'Yumiko brings Hina to Aoi\'s cafe for the first time. Aoi greets the child gently.',
    purpose: 'small barista-child kindness — third-place adult welcoming new young customer',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['いらっしゃい', 'お子様', 'ジュース', '可愛い', '初めて'],
    cast: ['aoi_barista', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'いらっしゃいませ。可愛いお客様ですね。', en: 'Welcome. Such cute customers.', style: 'Soft dreamy barista warm gentle child-attentive welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-welcoming' },
      { speaker: 'hina_child', jp: 'こんにちは！初めて来た！', en: 'Hello! First time here!', style: 'High child bright eager community-warm sharing, the soft real real-childish-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-eager' },
      { speaker: 'aoi_barista', jp: 'お子様用のジュース、ありますよ。', en: 'We have juice for kids.', style: 'Soft dreamy barista warm gentle helpful offering, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-offering' },
      { speaker: 'hina_child', jp: 'やったー！オレンジある？', en: 'Yay! Is there orange?', style: 'High child bright eager pleased asking, the soft real real-childish-warmth audible, gentle real warmth throughout delivery.', mood: 'eagerly-bright' },
      { speaker: 'aoi_barista', jp: 'もちろん。お母さんは、いつものでいいですか？', en: 'Of course. For mother, the usual?', style: 'Soft dreamy barista warm gentle warm-confirming knowing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-warm' },
      { speaker: 'hina_child', jp: 'ありがとう、お姉さん！', en: 'Thank you, big sister!', style: 'High child bright warm sincere child-thanks, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 302 — daichi + kenji + ryosuke + yuki, four-speaker dinner (long)
  {
    id: 'conv_00302',
    context: 'A small gathering. Daichi, Kenji, Ryosuke, Yuki — colleagues who\'ve become friends — celebrate a successful quarter together.',
    purpose: 'four-friend gathering — adult colleagues becoming real friends through accumulated time',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['四半期', '達成', '感謝', '仕事', '友達', '将来'],
    cast: ['daichi_kansai', 'kenji_office', 'ryosuke_dad', 'yuki_office'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'よっしゃ、みんな集まったな！', en: 'Alright, everyone gathered!', style: 'Kansai warm bright energetic gathering opener, the regional swing audible, soft real warmth throughout delivery.', mood: 'energetically-bright' },
      { speaker: 'kenji_office', jp: '今期、本当にお疲れさまでした。', en: 'This quarter, truly good work.', style: 'Salaryman warm formal-sincere appreciative opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-warm' },
      { speaker: 'yuki_office', jp: '達成、本当に嬉しい。みんなで頑張ったから。', en: 'Achieving it — truly happy. Because we all worked hard.', style: 'Office woman warm bright sincere celebrating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-celebrating' },
      { speaker: 'ryosuke_dad', jp: 'こういう仲間で、こういう仕事できて感謝してる。', en: 'Working with such friends — I\'m grateful.', style: 'Father warm sincere gentle reflective grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-grateful' },
      { speaker: 'daichi_kansai', jp: 'わいも、東京来てよかったって、心から思う。', en: 'For me too — coming to Tokyo, glad from the heart.', style: 'Kansai warm soft sincere disclosing gentle, the regional swing audible, soft real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '同じ職場で、こんな関係持てるって、贅沢ですね。', en: 'Same workplace, having such relationships — luxury.', style: 'Salaryman warm gentle reflective sincere wonder, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-reflective' },
      { speaker: 'yuki_office', jp: 'もう仲間って言うより、友達って感じ。', en: 'Beyond colleagues — feels like friends.', style: 'Office woman warm soft sincere genuine declaring, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '本当に。乾杯しましょう。', en: 'Truly. Let\'s cheers.', style: 'Father warm sincere generous lifting-rallying, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'generously-warm' },
      { speaker: 'daichi_kansai', jp: 'みんな、これからもよろしく！乾杯！', en: 'Everyone, please continue! Cheers!', style: 'Kansai warm bright energetic loud-rallying, the regional swing audible, soft real warmth throughout delivery.', mood: 'brightly-energetic' },
      { speaker: 'kenji_office', jp: '乾杯！四半期、また頑張りましょう。', en: 'Cheers! Next quarter, let\'s do our best.', style: 'Salaryman warm sincere committed-bright matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yuki_office', jp: '乾杯！将来も、こうやって集まりたい。', en: 'Cheers! In the future too, want to gather like this.', style: 'Office woman warm bright sincere wishing-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-wishing' },
      { speaker: 'ryosuke_dad', jp: 'こういう瞬間が、人生の宝物だな。', en: 'Moments like this — life\'s treasures.', style: 'Father warm gentle philosophical sincere reflective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'philosophically-warm' },
      { speaker: 'daichi_kansai', jp: 'ほんま、その通り。乾杯！', en: 'Truly, exactly. Cheers!', style: 'Kansai warm bright matching agreeing-warm, the regional swing audible, soft real warmth throughout delivery.', mood: 'brightly-matching' }
    ]
  },
  // 303 — sho + asuka, art class small (short)
  {
    id: 'conv_00303',
    context: 'Sho stays back after art class to show Ms. Asuka something he\'s embarrassed about — a drawing of his grandfather.',
    purpose: 'small shy disclosure — child showing vulnerable creation to gentle adult',
    ambient: 'classroom_quiet',
    sound_effects: [],
    target_vocab: ['絵', 'おじいちゃん', '見せる', '嬉しい', '上手'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: '先生…見て、ください。', en: 'Sensei… please look.', style: 'Tiny six-year-old soft small careful brave hesitant-offering, the small real warmth audible, soft small warmth throughout delivery.', mood: 'bravely-hesitant' },
      { speaker: 'asuka_teacher', jp: 'うん、見せて。これは、誰？', en: 'Yes, show me. Who is this?', style: 'Teacher warm gentle attentive child-tuned receiving, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-attentive' },
      { speaker: 'sho_child', jp: '…ぼくの、おじいちゃん。', en: '…My grandpa.', style: 'Tiny six-year-old soft small careful gentle proud-sharing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'asuka_teacher', jp: 'すごく優しい顔。よく描けてる。', en: 'Such a kind face. Drawn well.', style: 'Teacher warm gentle sincere specific praise, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '…嬉しい。', en: '…Happy.', style: 'Tiny six-year-old soft small single-word genuine warmth, the small real warmth audible, soft small joy throughout delivery.', mood: 'softly-happy' },
      { speaker: 'asuka_teacher', jp: 'おじいちゃんに、見せてあげてね。', en: 'Show it to grandpa.', style: 'Teacher warm gentle closing tender suggestion, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-closing' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

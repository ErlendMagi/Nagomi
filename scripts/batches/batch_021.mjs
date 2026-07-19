import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_021)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 404 — daichi + mei, wedding planning (medium)
  {
    id: 'conv_00404',
    context: 'Daichi and Mei sit at the kitchen table choosing wedding details. Small careful adult choices.',
    purpose: 'engaged couple navigating practical wedding decisions',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['結婚式', '招待', '準備', '相談', '一緒'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'メイちゃん、招待する人のリスト、どこまでできた？', en: 'Mei-chan, how far on the invite list?', style: 'Kansai warm soft casual practical-warm asking, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'casually-warm' },
      { speaker: 'mei_romantic', jp: '家族と、本当に親しい友達まで、書いた。', en: 'Family and truly close friends — I wrote so far.', style: 'Romantic warm soft sincere careful-warm progress-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-careful' },
      { speaker: 'daichi_kansai', jp: 'わいも同じくらい。会社の人、どこまで呼ぶか、迷うわ。', en: 'Same here. Company people — how far to invite, stuck.', style: 'Kansai warm soft sincere thoughtful-honest-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'thoughtfully-warm' },
      { speaker: 'mei_romantic', jp: '私も、職場、悩む。直属だけにする？', en: 'Me too, workplace — stuck. Direct team only?', style: 'Romantic warm soft sincere practical-suggestion-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-practical' },
      { speaker: 'daichi_kansai', jp: 'ええ案やと思う。あとから、お礼の場、別で作れるしな。', en: 'A good plan. Later, can make a separate thanks event.', style: 'Kansai warm bright sincere-thoughtful-warm agreeing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'thoughtfully-bright' },
      { speaker: 'mei_romantic', jp: 'うん。準備、二人で進められて、嬉しい。', en: 'Yes. Preparing together — happy.', style: 'Romantic warm soft sincere tender-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sincere' },
      { speaker: 'daichi_kansai', jp: '相談しながら、ね。決めること、ようけあるな。', en: 'While consulting. Lots to decide.', style: 'Kansai warm soft sincere committed-warm closing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'mei_romantic', jp: 'はい、一緒に頑張ろう。', en: 'Yes, let\'s work hard together.', style: 'Romantic warm soft sincere bright-warm closing-affirming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 405 — kenji + yuki, work follow-up (medium)
  {
    id: 'conv_00405',
    context: 'A few months after Yuki\'s promotion. Kenji and Yuki adjust to her new role as effective peer-superior.',
    purpose: 'workplace adjustment to rank change — careful adult navigation',
    ambient: 'office_break',
    sound_effects: [],
    target_vocab: ['仕事', '責任', '部下', '相談', '助かる'],
    cast: ['kenji_office', 'yuki_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '佐藤さん、最近、責任、大変じゃないですか。', en: 'Sato-san, lately, responsibility — isn\'t it tough?', style: 'Salaryman warm gentle sincere careful-asking-warm care, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'gently-careful' },
      { speaker: 'yuki_office', jp: '正直、結構大変。部下、見るって、思ったより責任重い。', en: 'Honestly, quite tough. Watching subordinates — heavier than I thought.', style: 'Office woman warm soft sincere honest-vulnerable-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'honestly-vulnerable' },
      { speaker: 'kenji_office', jp: 'お疲れさまです。何かあれば、いつでも相談してください。', en: 'Hard work. If anything, consult me anytime.', style: 'Salaryman warm sincere gentle generous-warm offering-support, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'yuki_office', jp: '田中さんが、変わらず話してくれるの、本当に助かる。', en: 'Tanaka-san treating me the same — truly saves me.', style: 'Office woman warm soft sincere deep-warm grateful sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '当たり前ですよ。立場が変わっても、信頼関係は同じ。', en: 'Of course. Position changes, but trust relationship same.', style: 'Salaryman warm gentle sincere firm-warm reassuring, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-firm' },
      { speaker: 'yuki_office', jp: 'これからも、よろしくお願いします。', en: 'From now on too, please.', style: 'Office woman warm soft sincere formal-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'こちらこそ。佐藤さんなら、絶対大丈夫ですよ。', en: 'Same. With you, definitely fine.', style: 'Salaryman warm gentle sincere believing-warm closing-encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-believing' }
    ]
  },
  // 406 — sho + sakura + hina (3-speaker, short)
  {
    id: 'conv_00406',
    context: 'The three young — Sho, Hina, Sakura back from college — make ice cream together.',
    purpose: 'small three-generation-of-young-people joyful gathering',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', 'アイス', '美味しい', '作る'],
    cast: ['sakura_teen', 'hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '今日は、皆でアイス作るよ！', en: 'Today, let\'s all make ice cream!', style: 'Teen warm bright sincere energetic-warm announcing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'energetically-bright' },
      { speaker: 'hina_child', jp: 'やったー！何味？', en: 'Yay! What flavor?', style: 'High child bright eager curious-warm asking, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'eagerly-bright' },
      { speaker: 'sho_child', jp: '…バニラがいい。', en: '…Vanilla.', style: 'Tiny six-year-old soft small careful gentle-warm preference, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-careful' },
      { speaker: 'sakura_teen', jp: 'バニラとイチゴ、両方作ろうか。', en: 'Vanilla and strawberry — let\'s make both.', style: 'Teen warm gentle generous-warm including-cousin warmth, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-generous' },
      { speaker: 'hina_child', jp: '美味しそう！一緒に作るの、楽しい！', en: 'Sounds tasty! Making together — fun!', style: 'High child bright sincere enthusiastic-warm celebrating, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ぼくも、お手伝いする。', en: 'I\'ll help too.', style: 'Tiny six-year-old soft small sincere committed-warm offering, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-committed' }
    ]
  },
  // 407 — saito + sachiko (medium)
  {
    id: 'conv_00407',
    context: 'A regular checkup. Saito noticing Sachiko bearing up under widowhood.',
    purpose: 'longstanding doctor-patient quiet care — checking in on emotional/physical',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['体調', '生活', '一人', '心配', '安心'],
    cast: ['saito_doctor', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '田中さん、最近の体調、いかがですか。', en: 'Tanaka-san, recent condition — how?', style: 'Doctor warm professional gentle careful-warm long-rapport opening, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'sachiko_grandma', jp: 'ありがたいことに、なんとか。', en: 'Thankfully, somehow.', style: 'Soft grandmother warm soft tender humble-honest-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'saito_doctor', jp: '一人暮らし、無理されてませんか。', en: 'Living alone — not pushing yourself?', style: 'Doctor warm professional gentle careful-care-warm follow-up, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'sachiko_grandma', jp: 'なおこが、毎週来てくれて。本当にありがたい。', en: 'Naoko comes every week. Truly grateful.', style: 'Soft grandmother warm soft tender deep-grateful-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-grateful' },
      { speaker: 'saito_doctor', jp: '良かった。心配なことがあれば、いつでも仰ってください。', en: 'Good. If anything worrying, please say anytime.', style: 'Doctor warm professional gentle generous-warm extending, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-extending' },
      { speaker: 'sachiko_grandma', jp: '先生にこうやって診てもらえて、本当に安心して。', en: 'Being seen by you like this — truly reassuring.', style: 'Soft grandmother warm soft sincere deep-grateful-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'こちらこそ。お薬、ちゃんと続けてくださいね。', en: 'Same. Please keep taking the medicine.', style: 'Doctor warm gentle sincere professional-warm closing-care, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-professional' }
    ]
  },
  // 408 — riku + tatsuya, college guy + country uncle (medium)
  {
    id: 'conv_00408',
    context: 'Riku visits Tatsuya in the country during summer break — Tatsuya is a friend of his uncle Hiroshi-boss\'s circle.',
    purpose: 'small intergenerational masculine warmth — city college student visits rural farmer',
    ambient: 'farm_porch_afternoon',
    sound_effects: [],
    target_vocab: ['田舎', '夏休み', '畑', '楽しい', '頑張る'],
    cast: ['tatsuya_country', 'riku_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'おう、リクくん、ようこそ。', en: 'Yeah, Riku-kun, welcome.', style: 'Country gruff warm sincere bright-rural welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-bright' },
      { speaker: 'riku_teen', jp: 'お邪魔します、達也さん。夏休みで、田舎、来てみました。', en: 'Excuse me, Tatsuya-san. Summer break — came to the country.', style: 'Teen warm soft sincere respectful-warm casual-explaining, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'respectfully-casual' },
      { speaker: 'tatsuya_country', jp: '若いうちに、こういうとこ来るの、ええことや。', en: 'Coming to places like this when young — good thing.', style: 'Country gruff warm gentle wise-rural-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-wise' },
      { speaker: 'riku_teen', jp: '畑、見せてもらってもいいですか？', en: 'Could I see the field?', style: 'Teen warm soft sincere genuine-curious-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'tatsuya_country', jp: 'おう、いくらでも。今、トマトが、ちょうど熟しとる。', en: 'Yeah, as much as you like. Now tomatoes are ripening.', style: 'Country gruff warm generous bright-rural-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-generous' },
      { speaker: 'riku_teen', jp: 'すごい…田舎の野菜、本当に違うんですね。', en: 'Wow… country veggies really are different.', style: 'Teen warm soft sincere impressed-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-impressed' },
      { speaker: 'tatsuya_country', jp: 'お土産、ようけ持って帰り。', en: 'Take lots of souvenirs home.', style: 'Country gruff warm sincere generous-rural-warm offering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-generous' },
      { speaker: 'riku_teen', jp: 'ありがとうございます。本当に、来て良かった。', en: 'Thank you. Truly, glad I came.', style: 'Teen warm soft sincere deep-warm grateful-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 409 — aoi + mei, two brides-to-be (long)
  {
    id: 'conv_00409',
    context: 'Aoi and Mei meet for coffee. Both are getting married within a couple months of each other.',
    purpose: 'shared milestone friendship — two women on parallel arcs',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['結婚式', '準備', '緊張', '幸せ', '相談', '一緒'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、結婚式、もうすぐだね。', en: 'Aoi-chan, wedding\'s soon.', style: 'Romantic warm soft bright sincere-warm milestone-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'aoi_barista', jp: 'うん、あと一ヶ月。もう緊張してる。', en: 'Yes, one month away. Already nervous.', style: 'Soft dreamy barista warm soft sincere honest-vulnerable-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-vulnerable' },
      { speaker: 'mei_romantic', jp: '私もそう。準備、結構大変だよね。', en: 'Same. Preparation — quite a lot.', style: 'Romantic warm soft sincere matching-warm honest-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'aoi_barista', jp: 'うん。何かあるたびに、二人で相談しないといけなくて。', en: 'Yes. Every time something comes up, we have to consult.', style: 'Soft dreamy barista warm soft sincere honest-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'mei_romantic', jp: 'それも、絆になるんだろうね。', en: 'That too, becomes a bond.', style: 'Romantic warm soft sincere reflective-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'reflectively-warm' },
      { speaker: 'aoi_barista', jp: '本当に。考えれば、これからの人生、二人で決めることばかり。', en: 'Truly. Considering — life from now, just decisions for two.', style: 'Soft dreamy barista warm soft sincere wondering-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-wondering' },
      { speaker: 'mei_romantic', jp: '少し、不安もある？', en: 'A little unease, too?', style: 'Romantic warm soft gentle careful-asking-warm sincere, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'aoi_barista', jp: '正直、ある。私だけかなって、思ったけど。', en: 'Honestly, yes. Was wondering if just me.', style: 'Soft dreamy barista warm soft sincere honest-vulnerable-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-vulnerable' },
      { speaker: 'mei_romantic', jp: '私も、すごく不安。当たり前、なんだろうね。', en: 'Me too, very unease. Natural, perhaps.', style: 'Romantic warm soft sincere matching-deep-warm reassuring, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'aoi_barista', jp: 'あおいちゃんと話せると、楽になる。', en: 'Talking with you, Mei-chan — feels lighter.', style: 'Soft dreamy barista warm soft sincere relieved-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-relieved' },
      { speaker: 'mei_romantic', jp: 'お互いの式、絶対行くから。', en: 'I\'ll definitely go to your wedding.', style: 'Romantic warm bright sincere committed-warm promising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'うん、私も。お互い、幸せな日にしようね。', en: 'Yes, me too. Let\'s both make it a happy day.', style: 'Soft dreamy barista warm soft sincere matching-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'こうやって、一緒に進めるの、すごく心強い。', en: 'Going forward together like this — truly reassuring.', style: 'Romantic warm soft sincere deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 410 — yumiko + naoko + sachiko, three women planning (3-speaker, long)
  {
    id: 'conv_00410',
    context: 'Three generations of women — Yumiko, Naoko, Sachiko — sit together to discuss what to wear and bring to Daichi-Mei wedding.',
    purpose: 'three-female family preparation — coordination across ages',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['結婚式', '服装', '準備', '一緒', '楽しみ', '家族'],
    cast: ['yumiko_mom', 'naoko_aunt', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'お母さん、メイの結婚式、もうすぐね。', en: 'Mother, Mei\'s wedding — soon.', style: 'Aunt warm gentle bright sincere-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sachiko_grandma', jp: '本当に。考えるだけで嬉しい。', en: 'Truly. Just thinking makes me happy.', style: 'Soft grandmother warm soft tender deep-warm sincere-joy, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-joyful' },
      { speaker: 'yumiko_mom', jp: 'お祖母様、何着るか、決めましたか？', en: 'Grandmother, decided what to wear?', style: 'Maternal warm gentle bright careful-respectful-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-respectful' },
      { speaker: 'sachiko_grandma', jp: '黒の着物、出してもらった。お父さんが好きだった一枚。', en: 'Black kimono, taken out. The one father loved.', style: 'Soft grandmother warm soft tender deep memory-sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sharing' },
      { speaker: 'naoko_aunt', jp: 'いいわね。お父さんも、喜ぶわ。', en: 'Lovely. Father will be happy.', style: 'Aunt warm soft sincere tender-warm comforting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'yumiko_mom', jp: 'お母さんも、よく似合うと思う。', en: 'Mother — I think it will suit you well.', style: 'Maternal warm gentle sincere-warm affirming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-affirming' },
      { speaker: 'sachiko_grandma', jp: 'ゆみこは、何を着るの？', en: 'Yumiko, what will you wear?', style: 'Soft grandmother warm gentle bright sincere-curious-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-curious' },
      { speaker: 'yumiko_mom', jp: '紺色のワンピース、買おうかなって。', en: 'Navy dress — thinking of buying.', style: 'Maternal warm soft sincere thoughtful-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'naoko_aunt', jp: 'ゆみこ、紺、似合うわよね。', en: 'Yumiko, navy suits you.', style: 'Aunt warm gentle bright sincere-warm appreciating-supporting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sachiko_grandma', jp: '私、何かお祝い、メイさんに用意したいの。', en: 'I want to prepare a gift for Mei-san.', style: 'Soft grandmother warm soft sincere tender-warm wishing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-wishing' },
      { speaker: 'yumiko_mom', jp: 'お母さん、いいですね。何を考えてます？', en: 'Mother, nice. What are you thinking?', style: 'Maternal warm gentle sincere-curious-warm encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-curious' },
      { speaker: 'sachiko_grandma', jp: 'おじいちゃんの形見の、小さい指輪。', en: 'Grandpa\'s keepsake — a small ring.', style: 'Soft grandmother warm soft tender deep-warm sincere-disclosing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'naoko_aunt', jp: '…素敵。きっと、メイ、本当に喜ぶ。', en: '…Lovely. Mei will surely be truly happy.', style: 'Aunt warm soft tender sincere-deep-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'おじいちゃんの思いが、繋がるんですね。', en: 'Grandpa\'s feelings — connect through.', style: 'Maternal warm soft tender deep-philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: '皆で、いい一日にしましょう。', en: 'Let\'s all make it a good day together.', style: 'Soft grandmother warm soft sincere closing-warm extending-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 411 — hiroshi_boss + saito (short)
  {
    id: 'conv_00411',
    context: 'Hiroshi-boss and Dr. Saito at a community health event. Brief professional warmth.',
    purpose: 'two professionals brief acquaintance — small civic warmth',
    ambient: 'community_hall',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '感謝', '地域', '協力'],
    cast: ['hiroshi_boss', 'saito_doctor'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '斎藤先生、いつもお世話になっております。', en: 'Dr. Saito, always grateful for your care.', style: 'Boss measured warm formal sincere-respectful-warm civic-opening, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'saito_doctor', jp: 'こちらこそ。今日は、健康講座でしたね。', en: 'Same. Today\'s the health seminar.', style: 'Doctor warm professional gentle civil-warm context-sharing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-civil' },
      { speaker: 'hiroshi_boss', jp: '地域、皆さん、ご協力で、いい会になりますね。', en: 'Community — everyone\'s cooperation, makes a good gathering.', style: 'Boss measured warm sincere appreciating-civic-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-civic' },
      { speaker: 'saito_doctor', jp: '皆様のお陰で。本当に感謝しています。', en: 'Thanks to all. Truly grateful.', style: 'Doctor warm professional gentle sincere-warm humble-redirecting, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-humble' },
      { speaker: 'hiroshi_boss', jp: 'こちらこそ、こういう機会、ありがたい。', en: 'Same — opportunities like this — grateful.', style: 'Boss measured warm sincere closing-warm reciprocal-civic, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-civic' }
    ]
  },
  // 412 — ryosuke + asuka (medium)
  {
    id: 'conv_00412',
    context: 'A school open house. Ryosuke meets Ms. Asuka, his nephew\'s teacher.',
    purpose: 'small civic acquaintance — professional politeness',
    ambient: 'school_open_house',
    sound_effects: [],
    target_vocab: ['学校', '先生', '頑張る', '感謝', '子供'],
    cast: ['ryosuke_dad', 'asuka_teacher'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'はじめまして。リクの父、野田と申します。', en: 'Nice to meet you. Riku\'s father, Noda.', style: 'Father warm formal sincere careful-respectful-warm introducing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'asuka_teacher', jp: 'まあ、野田さん。リクさんの担任、あすかです。', en: 'Oh, Noda-san. I\'m Asuka, Riku\'s teacher.', style: 'Teacher warm gentle bright sincere-recognizing-warm civil, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: 'リクが、いつもお世話になっております。', en: 'Riku is always indebted to you.', style: 'Father warm formal sincere-deep-warm gratitude opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-deep' },
      { speaker: 'asuka_teacher', jp: 'リクさん、本当によく頑張ってる学生さんです。', en: 'Riku-san is a student who truly works hard.', style: 'Teacher warm gentle sincere bright-warm parent-update, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: 'そう言っていただいて、本当に嬉しい。', en: 'Hearing that — truly happy.', style: 'Father warm soft sincere touched-warm parent-relief, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-touched' },
      { speaker: 'asuka_teacher', jp: 'これからも、ご家族で見守って、応援していきましょう。', en: 'From now on, let\'s watch and cheer as family.', style: 'Teacher warm gentle sincere partnership-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-extending' },
      { speaker: 'ryosuke_dad', jp: '感謝しています。本当に、ありがとうございます。', en: 'Grateful. Truly, thank you.', style: 'Father warm soft sincere deep grateful-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 413 — daichi + kenji, business expansion (medium)
  {
    id: 'conv_00413',
    context: 'Daichi and Kenji follow up after the formal expansion meeting. Quiet business shop talk.',
    purpose: 'business colleagues — small detailed work follow-up',
    ambient: 'office_break',
    sound_effects: [],
    target_vocab: ['契約', '進む', '報告', '確認', '安心'],
    cast: ['daichi_kansai', 'kenji_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'けんじさん、達也さんから連絡来ましたか？', en: 'Kenji-san, did Tatsuya-san contact you?', style: 'Kansai warm bright casual professional-asking-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'casually-bright' },
      { speaker: 'kenji_office', jp: 'はい、契約、受けていただけるそうです。', en: 'Yes, he\'ll accept the contract.', style: 'Salaryman warm formal sincere professional-bright-warm reporting, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'professionally-bright' },
      { speaker: 'daichi_kansai', jp: 'やった、ほんま嬉しいわ。これで、長く付き合える。', en: 'Yay, truly happy. Now, long-term partnership.', style: 'Kansai warm bright sincere relieved-warm celebrating, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '部長にも、すぐ報告しないと。', en: 'Must report to the boss immediately.', style: 'Salaryman warm formal practical-professional-warm action-direction, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'practically-formal' },
      { speaker: 'daichi_kansai', jp: 'うん、ええニュースやし。皆で確認しときましょ。', en: 'Yes, good news. Let\'s confirm together.', style: 'Kansai warm bright sincere collaborative-warm continuing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-collaborative' },
      { speaker: 'kenji_office', jp: '達也さんと、ずっと信頼関係続けてきた成果ですね。', en: 'Result of long-built trust with Tatsuya-san.', style: 'Salaryman warm sincere reflective-warm appreciating, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'daichi_kansai', jp: 'ほんま、ありがたいことやで。', en: 'Truly, grateful.', style: 'Kansai warm soft sincere deep-warm closing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'これで、安心して、進められます。', en: 'Now, can proceed reassured.', style: 'Salaryman warm formal sincere closing-warm settled-confidence, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' }
    ]
  },
  // 414 — sho + sachiko (short)
  {
    id: 'conv_00414',
    context: 'Sho visits his great-grandmother Sachiko alone. They play a quiet card game.',
    purpose: 'small child-elder gentle moment — companionable presence',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '遊ぶ', '楽しい', '優しい', 'おばあちゃん'].filter(w => w !== 'おばあちゃん').concat(['祖母']),
    cast: ['sachiko_grandma', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: '…おばあちゃん、トランプ、しよう。', en: '…Grandma, let\'s play cards.', style: 'Tiny six-year-old soft small careful gentle-asking-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-asking' },
      { speaker: 'sachiko_grandma', jp: 'うん、いいよ。何して遊ぶ？', en: 'Yes, sure. What shall we play?', style: 'Soft grandmother warm gentle bright tender-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-tender' },
      { speaker: 'sho_child', jp: '簡単なやつ。', en: 'An easy one.', style: 'Tiny six-year-old soft small careful gentle-warm choosing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-choosing' },
      { speaker: 'sachiko_grandma', jp: 'ふふ、そうね。ババ抜きにしようか。', en: 'Hehe, right. Let\'s play Old Maid.', style: 'Soft grandmother warm gentle laughing tender-warm suggesting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-laughing' },
      { speaker: 'sho_child', jp: 'うん、一緒に楽しい。', en: 'Yes, fun together.', style: 'Tiny six-year-old soft small sincere warm-warm-closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'しょうと遊ぶの、おばあちゃんも、大好きよ。', en: 'Playing with Sho, grandma loves it too.', style: 'Soft grandmother warm soft tender sincere-deep-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 415 — ren + sakura (short)
  {
    id: 'conv_00415',
    context: 'Ren and Sakura meet at a café — first time after both are now in college. Adult-cousin warmth.',
    purpose: 'small adult cousin friendship — milestone crossing into adulthood together',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['大学', '一人暮らし', '頑張る', '友達', '楽しい'],
    cast: ['ren_uni', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'さくら、ようやく大学生やん。', en: 'Sakura, finally a college student.', style: 'University student warm soft sincere bright-warm cousin-recognition, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'うん、なんか、まだ不思議。', en: 'Yes, somehow, still strange.', style: 'Teen warm soft sincere wondering-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-wondering' },
      { speaker: 'ren_uni', jp: '一人暮らし、慣れた？', en: 'Living alone — used to it?', style: 'University student warm soft casual cousin-curious-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'casually-warm' },
      { speaker: 'sakura_teen', jp: '少しずつ。料理、難しい。', en: 'Bit by bit. Cooking is hard.', style: 'Teen warm soft sincere honest-warm sharing-laughing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'ren_uni', jp: '同じやって。コンビニ便利やで。', en: 'Same. Convenience store is useful.', style: 'University student warm soft casual laughing-warm sharing wisdom, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'casually-laughing' },
      { speaker: 'sakura_teen', jp: 'ふふ、お互い、頑張ろう。', en: 'Hehe, both of us, let\'s do our best.', style: 'Teen warm soft sincere bright-warm matching-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 416 — naoko + hiroshi_boss (medium)
  {
    id: 'conv_00416',
    context: 'Naoko and Hiroshi-boss continue their friendship — now meeting beyond gallery openings. Coffee and conversation.',
    purpose: 'small adult friendship deepening — civil cultural interest as bridge',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['芸術', '感謝', '一緒', '楽しい', '尊敬'],
    cast: ['hiroshi_boss', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'ナオコさん、いつも、こうやってお時間いただき、ありがとうございます。', en: 'Naoko-san, always — getting time with you, thank you.', style: 'Boss measured warm formal sincere-warm civil-grateful, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。田中さんとの会話、本当に楽しい。', en: 'Same. Talking with you, Tanaka-san — truly fun.', style: 'Aunt warm gentle sincere-warm civil-pleased reciprocal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '芸術のお話、特に勉強になります。', en: 'Art conversations especially educational.', style: 'Boss measured warm formal sincere-warm appreciating, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'naoko_aunt', jp: '私も、田中さんの感性、いつも尊敬してます。', en: 'I always respect your sensibility too.', style: 'Aunt warm gentle sincere-warm civil-respecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '今度、新しい展示、ご一緒できますか？', en: 'Next time, new exhibit — can we go together?', style: 'Boss measured warm formal sincere-warm civil-inviting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'gently-inviting' },
      { speaker: 'naoko_aunt', jp: 'ぜひ。楽しみにしています。', en: 'Please. Looking forward.', style: 'Aunt warm gentle sincere bright-warm closing-accepting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: 'こうやって、芸術を通して、ご縁できたのが、感謝です。', en: 'Connecting like this through art — grateful.', style: 'Boss measured warm soft sincere-deep-warm reflective-closing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '本当に。これからも、ずっと、続けたい関係です。', en: 'Truly. From now on too — a relationship I want to continue.', style: 'Aunt warm soft sincere-deep-warm closing-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 417 — mrs_mori + saito + takeda, community meeting (3-speaker, medium)
  {
    id: 'conv_00417',
    context: 'A neighborhood community meeting. Mrs. Mori, Dr. Saito, and Officer Takeda coordinate care for an elder.',
    purpose: 'civic three-professional coordination — community support',
    ambient: 'community_room',
    sound_effects: [],
    target_vocab: ['見守る', '高齢', '協力', '安心', '訪問'],
    cast: ['mrs_mori_neighbor', 'saito_doctor', 'takeda_officer'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '先生、武田さん、今日はお時間ありがとうございます。', en: 'Doctor, Takeda-san, thank you for the time today.', style: 'Neighbor warm gentle sincere civic-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'こちらこそ。高齢の方々のこと、しっかり考えていきましょう。', en: 'Same. Let\'s think properly about the elderly.', style: 'Doctor warm professional gentle sincere-warm civic-committed, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'takeda_officer', jp: '私も、定期的に訪問、続けます。', en: 'I\'ll continue regular visits.', style: 'Officer warm professional sincere civic-committed-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-civic' },
      { speaker: 'mrs_mori_neighbor', jp: 'ご近所同士の見守り、本当に大事ですね。', en: 'Neighborhood watching over each other — truly important.', style: 'Neighbor warm gentle sincere-warm reflective-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'saito_doctor', jp: '皆さんのお陰で、私たちも、安心して診療できます。', en: 'Thanks to everyone, we can treat with peace.', style: 'Doctor warm professional gentle sincere-warm appreciating, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: 'お互い、声かけ合って、協力していきましょう。', en: 'Mutually calling out — let\'s cooperate.', style: 'Officer warm professional sincere collaborative-warm closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-collaborative' },
      { speaker: 'mrs_mori_neighbor', jp: '本当に、心強い、ご協力です。', en: 'Truly, reassuring cooperation.', style: 'Neighbor warm soft sincere deep-warm grateful-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'これからも、ずっと、ご縁、続けましょう。', en: 'From now on too, let\'s keep this connection.', style: 'Doctor warm professional gentle sincere-warm closing-extending, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-extending' }
    ]
  },
  // 418 — riku + daichi (medium)
  {
    id: 'conv_00418',
    context: 'Riku meets Daichi for the first time — future relation through extended family. Riku is curious about the Kansai accent.',
    purpose: 'young man meets future relative — small bright introduction',
    ambient: 'family_event_evening',
    sound_effects: [],
    target_vocab: ['関西', '初めて', '楽しい', '紹介', '友達'],
    cast: ['daichi_kansai', 'riku_teen'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'お、君がリクくんか。だいちです、よろしく。', en: 'Oh, you\'re Riku-kun. I\'m Daichi, nice to meet you.', style: 'Kansai warm bright sincere casual-friendly-warm introducing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'brightly-friendly' },
      { speaker: 'riku_teen', jp: '初めまして。あ、関西の方ですか？', en: 'Nice to meet you. Oh, you\'re from Kansai?', style: 'Teen warm soft sincere curious-warm casual-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'daichi_kansai', jp: 'そうやで、大阪。バレるよな、すぐに。', en: 'Yeah, Osaka. Always gives me away.', style: 'Kansai warm bright laughing self-aware-warm sharing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'brightly-laughing' },
      { speaker: 'riku_teen', jp: 'なんか、すごく、温かい感じ。', en: 'Somehow — really warm feeling.', style: 'Teen warm soft sincere genuine-warm observing-appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'おだてんでええで、ありがとな。', en: 'No flattery — but thanks.', style: 'Kansai warm bright laughing humble-warm deflecting, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'brightly-humble' },
      { speaker: 'riku_teen', jp: 'これから、よろしくお願いします。家族みたいで、嬉しいです。', en: 'From now on, please. Like family — happy.', style: 'Teen warm soft sincere committed-warm extending closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'こちらこそ。困った時は、いつでも頼ってな。', en: 'Same. When in trouble, rely on me anytime.', style: 'Kansai warm bright sincere generous-warm extending-closing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-generous' }
    ]
  },
  // 419 — tatsuya + yumiko + hiroshi_boss, family meeting (3-speaker, long)
  {
    id: 'conv_00419',
    context: 'A family meeting before the wedding. Tatsuya (Yumiko\'s brother-in-law-through-Ryosuke), Yumiko, and Hiroshi-boss (her brother) coordinate.',
    purpose: 'three-family-adult coordination — careful warmth across roles',
    ambient: 'tatami_evening',
    sound_effects: [],
    target_vocab: ['結婚式', '一緒', '家族', '準備', '感謝', '将来'],
    cast: ['tatsuya_country', 'yumiko_mom', 'hiroshi_boss'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '達也さん、わざわざ田舎から、ありがとうございます。', en: 'Tatsuya-san, thank you for coming from the country.', style: 'Boss measured warm formal sincere-respectful-warm welcoming, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'tatsuya_country', jp: 'いえいえ、こちらこそ、お招きありがとうございます。', en: 'No, no, thank you for the invitation.', style: 'Country gruff warm formal-rural sincere-warm reciprocal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'yumiko_mom', jp: 'お兄さん、達也さん、皆で集まれて、嬉しい。', en: 'Big brother, Tatsuya-san — gathering all, happy.', style: 'Maternal warm gentle bright sincere-family-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'hiroshi_boss', jp: 'メイさんと達也さんの結婚式、皆で支えていきましょう。', en: 'Mei-san and Daichi-san\'s wedding — let\'s all support.', style: 'Boss measured warm sincere formal-warm extending-commitment, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'tatsuya_country', jp: '田舎側の人、いっぱい来るんで、よろしくお願いします。', en: 'Lots from country-side coming — please.', style: 'Country gruff warm formal sincere-warm reporting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-rural' },
      { speaker: 'yumiko_mom', jp: 'こちらでも、お席、ちゃんとご用意します。', en: 'Here too — we\'ll prepare seats properly.', style: 'Maternal warm gentle sincere accommodating-warm committed, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '達也さん、ご家族について、何か気を付けることありますか。', en: 'Tatsuya-san, anything to be careful of regarding your family?', style: 'Boss measured warm formal sincere-respectful-warm asking, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'tatsuya_country', jp: 'うちの祖母、ちょっと足が悪うてな。席、配慮してもらえたら。', en: 'My grandmother — leg\'s a bit bad. If seating could be considered.', style: 'Country gruff warm formal honest-careful-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-formal' },
      { speaker: 'yumiko_mom', jp: 'もちろん、お祖母様、楽な席をご用意しますね。', en: 'Of course — comfortable seat for grandmother.', style: 'Maternal warm gentle sincere accommodating-warm committed-care, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'tatsuya_country', jp: 'ありがとうございます。本当に、皆さんに感謝です。', en: 'Thank you. Truly grateful to everyone.', style: 'Country gruff warm soft sincere deep-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'お互い、家族として、これからも、ね。', en: 'Mutually, as family, from now on too.', style: 'Boss measured warm sincere closing-warm extending family, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-family' },
      { speaker: 'yumiko_mom', jp: '将来、皆で集まれる機会、増えますね。', en: 'In the future — chances to gather will increase.', style: 'Maternal warm soft sincere bright-warm reflective-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '楽しみや、ほんま。', en: 'Looking forward, truly.', style: 'Country gruff warm soft sincere closing-brief-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 420 — hina + asuka (short)
  {
    id: 'conv_00420',
    context: 'Hina, now older, sees Ms. Asuka at the local festival and stops to chat.',
    purpose: 'small civic former-teacher recognition — gentle warmth',
    ambient: 'festival_evening',
    sound_effects: [],
    target_vocab: ['お祭り', '元気', '楽しい', '大きい', 'ありがとう'],
    cast: ['asuka_teacher', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'あすか先生、こんにちは！', en: 'Asuka-sensei, hello!', style: 'High child bright sincere enthusiastic-warm recognition, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'asuka_teacher', jp: 'まあ、ひなちゃん。大きくなったねえ。', en: 'My, Hina-chan. You\'ve grown.', style: 'Teacher warm gentle bright sincere-touched-warm observation, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-touched' },
      { speaker: 'hina_child', jp: 'お祭り、楽しい！先生も来てたんだ。', en: 'Festival, fun! Sensei came too.', style: 'High child bright cheerful-warm sharing, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'cheerfully-bright' },
      { speaker: 'asuka_teacher', jp: 'うん、毎年来てるの。ひなちゃん、元気そうで嬉しい。', en: 'Yes, I come every year. Glad you look well, Hina-chan.', style: 'Teacher warm gentle bright sincere-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hina_child', jp: 'いつもありがとう、先生！', en: 'Thank you always, sensei!', style: 'High child bright sincere warm-closing-grateful, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。お祭り、楽しんでね。', en: 'Same. Enjoy the festival.', style: 'Teacher warm gentle sincere closing-warm farewell, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-closing' }
    ]
  },
  // 421 — mei + ryosuke (medium)
  {
    id: 'conv_00421',
    context: 'Mei meets Ryosuke alone — her future uncle through their connected family. Quiet adult acquaintance.',
    purpose: 'future relative bridging — small civil warmth',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '将来', '感謝', '結婚', '一緒'],
    cast: ['ryosuke_dad', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: '野田さん、本日はお時間、ありがとうございます。', en: 'Noda-san, thank you for the time today.', style: 'Romantic warm soft formal sincere-respectful-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。改めて、結婚、おめでとうございます。', en: 'Same. Again, congratulations on the engagement.', style: 'Father warm formal sincere gentle-warm congratulating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'mei_romantic', jp: 'ありがとうございます。これから、家族として、よろしくお願いします。', en: 'Thank you. From now on, as family, please.', style: 'Romantic warm soft formal sincere-deep-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。達也さん、本当に良い方ですね。', en: 'Same. Tatsuya-san is truly a fine person.', style: 'Father warm gentle sincere-warm civil-appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '私も、彼の家族の温かさに、感動しています。', en: 'I, too, am moved by his family\'s warmth.', style: 'Romantic warm soft sincere-warm deep-appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '皆さん、いいご家族で。将来、お子さんできた時も、安心ですね。', en: 'Wonderful family. When children come, also reassuring.', style: 'Father warm gentle sincere-warm civil-affirming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-affirming' },
      { speaker: 'mei_romantic', jp: 'はい、将来のこと、少しずつ二人で考えていきます。', en: 'Yes, about the future — slowly we\'ll think together.', style: 'Romantic warm soft sincere-warm thoughtful-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '困った時は、こちらも、頼っていただいて。', en: 'When in trouble, on our side too — rely on us.', style: 'Father warm gentle sincere closing-warm extending-generous, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-extending' }
    ]
  },
  // 422 — sakura + naoko + yumiko (3-speaker, long)
  {
    id: 'conv_00422',
    context: 'Three women — Sakura now a college student, Naoko, Yumiko — at the family kitchen during break. Real conversation about life.',
    purpose: 'three-female intergenerational deepening — adult woman in early adulthood with elders',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['大学', '将来', '一人暮らし', '自分', '楽しい', '感謝'],
    cast: ['sakura_teen', 'naoko_aunt', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'ナオコちゃん、ゆみこおばさん、久しぶり。', en: 'Naoko-chan, Yumiko-obasan, long time.', style: 'Teen warm soft bright sincere-warm family-greeting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: 'さくらちゃん、大学、楽しい？', en: 'Sakura-chan, university — fun?', style: 'Aunt warm gentle bright sincere-warm family-curious, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sakura_teen', jp: 'うん、すごく。新しい友達も、いっぱいできて。', en: 'Yes, really. Lots of new friends made.', style: 'Teen warm soft sincere bright-warm enthusiastic-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: '一人暮らしも、慣れた？', en: 'Living alone — used to it?', style: 'Maternal warm gentle bright sincere-warm careful-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sakura_teen', jp: '最初は寂しかった。でも、自分のペースで生活できるの、楽しい。', en: 'Lonely at first. But living at my own pace — fun.', style: 'Teen warm soft sincere honest-balanced-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-balanced' },
      { speaker: 'naoko_aunt', jp: '一人暮らしが、自分を、見つける時間でもあるね。', en: 'Living alone is also time to find yourself.', style: 'Aunt warm gentle sincere wise-warm reflecting-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-wise' },
      { speaker: 'sakura_teen', jp: '本当に。自分が何を大事に思うか、よく考えるようになった。', en: 'Truly. Started thinking more about what I cherish.', style: 'Teen warm soft sincere reflective-warm growth-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'yumiko_mom', jp: '将来、何になりたいか、見えてきた？', en: 'Future — what you want to become, seeing it?', style: 'Maternal warm gentle sincere bright-warm curious-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sakura_teen', jp: '作家になりたいって、ずっと思ってた。今でも、変わらない。', en: 'I always wanted to be a writer. Even now, unchanged.', style: 'Teen warm soft sincere brave-deep-warm declaration, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'bravely-deep' },
      { speaker: 'naoko_aunt', jp: 'すごい。書く力、ちゃんと、つけていけそうだね。', en: 'Wonderful. Seems you\'ll build the writing power properly.', style: 'Aunt warm gentle bright sincere-warm believing-affirming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: '応援してる。家族みんな、ずっと。', en: 'Cheering for you. All of family, always.', style: 'Maternal warm soft sincere deep-warm tender-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '本当に、いつも感謝してます。', en: 'Truly, always grateful.', style: 'Teen warm soft sincere deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '困った時は、いつでも、私たちに、頼ってね。', en: 'When in trouble, anytime — rely on us.', style: 'Aunt warm soft sincere generous-warm extending-family, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'sakura_teen', jp: 'うん、ありがとう。皆と話せると、すごく元気になる。', en: 'Yes, thank you. Talking with all — really energizes me.', style: 'Teen warm soft sincere bright-warm closing-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 423 — aoi + saito (short)
  {
    id: 'conv_00423',
    context: 'Aoi visits Saito for a pre-wedding general checkup.',
    purpose: 'medical visit — bride checking health before milestone',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['結婚式', '健康', '元気', '安心', 'ありがとう'],
    cast: ['saito_doctor', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: '先生、結婚式の前に、ちゃんと診てもらいたくて。', en: 'Doctor, before the wedding — want a proper checkup.', style: 'Soft dreamy barista warm soft sincere careful-warm civil-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'saito_doctor', jp: 'いい考え。お祝いごとの前、健康確認、大事です。', en: 'Good idea. Before happy events, health check matters.', style: 'Doctor warm professional gentle sincere-warm affirming, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-affirming' },
      { speaker: 'aoi_barista', jp: '少し緊張してます。', en: 'A little nervous.', style: 'Soft dreamy barista warm soft honest-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-honest' },
      { speaker: 'saito_doctor', jp: '今日の検査では、すごくお元気ですよ。', en: 'Today\'s tests — you\'re very well.', style: 'Doctor warm professional gentle reassuring-warm bright, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-reassuring' },
      { speaker: 'aoi_barista', jp: 'よかった…安心しました。', en: 'Glad… reassured.', style: 'Soft dreamy barista warm soft sincere relieved-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-relieved' },
      { speaker: 'saito_doctor', jp: 'お幸せに。本当に、おめでとうございます。', en: 'Be happy. Truly, congratulations.', style: 'Doctor warm professional gentle sincere-warm closing-tender, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

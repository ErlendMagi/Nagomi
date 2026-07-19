import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_020)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 384 — daichi + mei + naoko + sachiko, engagement family meet (4-speaker, long)
  {
    id: 'conv_00384',
    context: 'A formal first family meeting after Daichi proposed to Mei. Sachiko and Naoko meet at the family home.',
    purpose: 'four-speaker formal family meeting — careful warmth around engagement',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['婚約', '家族', '紹介', '感謝', '幸せ', '将来'],
    cast: ['daichi_kansai', 'mei_romantic', 'naoko_aunt', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '本日は、お集まりいただき、ありがとうございます。', en: 'Thank you all for gathering today.', style: 'Kansai warm formal nervous careful-opening-warm, the regional swing softened for solemnity, soft real warmth threading throughout delivery.', mood: 'carefully-formal' },
      { speaker: 'sachiko_grandma', jp: 'まあ、改まって。座って、座って。', en: 'My, so formal. Sit down, sit down.', style: 'Soft grandmother warm gentle bright welcoming-relaxing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-welcoming' },
      { speaker: 'mei_romantic', jp: 'お祖母様、ナオコちゃん、今日は本当にありがとうございます。', en: 'Grandmother, Naoko-chan, truly thank you today.', style: 'Romantic warm soft formal sincere careful-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-grateful' },
      { speaker: 'naoko_aunt', jp: 'いえいえ、こんな大事な日に呼んでもらえて、嬉しいわ。', en: 'No, no, glad to be called on such an important day.', style: 'Aunt warm gentle bright sincere-warm pleased, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: 'メイちゃんとの婚約、家族みんなにご報告したくて。', en: 'Engagement with Mei-chan — wanted to report to all family.', style: 'Kansai warm soft sincere careful-formal-warm reporting, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'sachiko_grandma', jp: 'おじいちゃん、聞いたら、きっと喜んでるわよ。', en: 'Grandfather — if he heard, would surely be glad.', style: 'Soft grandmother warm soft tender deep-sincere-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: 'お祖父様にも、お線香を、後でお供えします。', en: 'Grandfather too — incense, I\'ll offer later.', style: 'Romantic warm soft sincere tender-warm-respectful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-respectful' },
      { speaker: 'naoko_aunt', jp: '達也さんの誠実さ、私もずっと見てきました。安心です。', en: 'Tatsuya-san\'s sincerity — I\'ve seen it. Relieved.', style: 'Aunt warm gentle sincere-warm formal-trusting affirming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'daichi_kansai', jp: 'ナオコさん、本当にありがとうございます。紹介してくださって。', en: 'Naoko-san, truly thank you. For introducing us.', style: 'Kansai warm soft sincere deep grateful-warm-formal, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'メイさん、お祖母ちゃんと呼んでね。家族だから。', en: 'Mei-san, call me grandma. We\'re family.', style: 'Soft grandmother warm soft tender bright-warm welcoming-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'mei_romantic', jp: '…はい。本当に、嬉しいです。', en: '…Yes. Truly, happy.', style: 'Romantic warm soft tender deep-overwhelmed-warm touched, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-overwhelmed' },
      { speaker: 'naoko_aunt', jp: 'これからも、皆さんと、ずっと家族でいられて、嬉しい。', en: 'From now on too — being family with everyone, happy.', style: 'Aunt warm soft sincere deep tender-warm reflective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '結婚式の日取り、これから皆で相談していきます。', en: 'Wedding date — we\'ll discuss with all from here.', style: 'Kansai warm soft sincere careful-formal-warm progressing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'carefully-warm' },
      { speaker: 'sachiko_grandma', jp: '私はね、二人の幸せが、一番大事よ。', en: 'For me, the two of your happiness is most important.', style: 'Soft grandmother warm soft tender deep sincere-warm wisdom-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-wise' },
      { speaker: 'mei_romantic', jp: 'ありがとうございます…本当に、皆さんに感謝してます。', en: 'Thank you… truly, grateful to everyone.', style: 'Romantic warm soft tender deep sincere-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 385 — yumiko + hina, after passing (medium)
  {
    id: 'conv_00385',
    context: 'Yumiko and Hina sit together as the household quietly processes the loss of grandfather. Hina asks about photos.',
    purpose: 'mother-daughter quiet grief — careful gentle conversation about memory',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['写真', '思い出', 'おじいちゃん', '優しい', '一緒'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'お母さん、おじいちゃんの写真、見ていい？', en: 'Mom, can I look at grandpa\'s photos?', style: 'High child bright soft careful tender-gentle-warm asking, the soft real real-childish-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-careful' },
      { speaker: 'yumiko_mom', jp: 'うん。一緒に見ようか。', en: 'Yes. Let\'s look together.', style: 'Maternal warm soft tender gentle accommodating-warm offering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'これ、おじいちゃん若い時？', en: 'This — grandpa when young?', style: 'High child bright soft curious tender-warm asking, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'softly-curious' },
      { speaker: 'yumiko_mom', jp: 'うん。すごく優しい人だったよ、若い時から。', en: 'Yes. He was a really kind person, since young.', style: 'Maternal warm soft tender sincere-warm sharing-memory, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sharing' },
      { speaker: 'hina_child', jp: 'ひな、思い出、いっぱい持ってる。', en: 'Hina has lots of memories.', style: 'High child bright soft tender sincere-disclosure-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'tenderly-sincere' },
      { speaker: 'yumiko_mom', jp: 'それが、一番大事。覚えてること。', en: 'That\'s most important. Remembering.', style: 'Maternal warm soft tender sincere-deep-warm wisdom-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'hina_child', jp: 'お母さんも、いっぱい思い出してる？', en: 'Mom, you remember lots too?', style: 'High child bright soft tender curious-warm asking, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'tenderly-curious' },
      { speaker: 'yumiko_mom', jp: 'うん、毎日。', en: 'Yes, every day.', style: 'Maternal warm soft tender deep-brief-warm sincere closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-brief' }
    ]
  },
  // 386 — kenji + aoi, regular (medium)
  {
    id: 'conv_00386',
    context: 'Kenji has become a regular at Aoi\'s cafe. They have a small conversation about her wedding planning.',
    purpose: 'small adult café friendship — barista-customer evolved into warm acquaintance',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['結婚式', '準備', '楽しい', 'おめでとう', '一緒'],
    cast: ['kenji_office', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'あおいさん、こんにちは。今日もいつもので。', en: 'Aoi-san, hello. The usual today.', style: 'Salaryman warm soft sincere casual-familiar-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-familiar' },
      { speaker: 'aoi_barista', jp: 'はい、田中さん。あ、結婚式、来月だっけ？', en: 'Yes, Tanaka-san. Oh, wedding\'s next month?', style: 'Soft dreamy barista warm gentle bright friendly-asking-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-friendly' },
      { speaker: 'kenji_office', jp: '違う違う、私じゃなくて、あおいさんが。', en: 'No no — not me, you, Aoi-san.', style: 'Salaryman warm soft laughing-correcting friendly-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'warmly-laughing' },
      { speaker: 'aoi_barista', jp: 'ふふ、そうだった。準備、ちょっとずつ進めてます。', en: 'Hehe, that\'s right. Preparation — bit by bit progressing.', style: 'Soft dreamy barista warm soft laughing sincere-sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-laughing' },
      { speaker: 'kenji_office', jp: 'おめでとうございます。本当に。', en: 'Congratulations. Truly.', style: 'Salaryman warm soft sincere deep-warm formal-congratulating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: 'ありがとうございます。準備、楽しいんですけど、ちょっと疲れる。', en: 'Thank you. The prep is fun, but a bit tiring.', style: 'Soft dreamy barista warm soft sincere honest-balanced-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-honest' },
      { speaker: 'kenji_office', jp: '一生に一度ですからね。あおいさん、無理しないで。', en: 'It\'s once in a lifetime. Don\'t push yourself.', style: 'Salaryman warm soft sincere gentle-care-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-caring' },
      { speaker: 'aoi_barista', jp: 'はい、ありがとうございます。元気もらえました。', en: 'Yes, thank you. I got energy from you.', style: 'Soft dreamy barista warm soft sincere touched-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-touched' }
    ]
  },
  // 387 — ren + asuka, second bookstore (short)
  {
    id: 'conv_00387',
    context: 'A second chance bookstore meeting. They\'ve seen each other once before.',
    purpose: 'small repeat civil acquaintance — book-shared interest',
    ambient: 'bookstore_afternoon',
    sound_effects: [],
    target_vocab: ['本', 'おすすめ', '感想', '面白い', '同じ'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'あ、また。よく会いますね。', en: 'Oh, again. We meet often.', style: 'Teacher warm bright recognition-warm civil-easy, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-recognizing' },
      { speaker: 'ren_uni', jp: 'マジっすね。この前の本、読み終わりました。', en: 'For real. Finished that book.', style: 'University student warm casual easy-warm following-up, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'casually-warm' },
      { speaker: 'asuka_teacher', jp: '感想、聞きたい。どうでした？', en: 'Want to hear your impressions. How was it?', style: 'Teacher warm gentle sincere bright-engaging-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-engaging' },
      { speaker: 'ren_uni', jp: 'マジ良かった。最後、ちょっと泣いた。', en: 'Really good. At the end, cried a bit.', style: 'University student warm soft sincere honest-disclosure-warm vulnerable, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-honest' },
      { speaker: 'asuka_teacher', jp: 'え、私も同じ場面で泣いた！', en: 'Eh, I cried at the same scene!', style: 'Teacher warm bright sincere matching-warm laughing-recognition, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-matching' },
      { speaker: 'ren_uni', jp: '同じすね。今度、もう一冊おすすめあったら教えてください。', en: 'Same. Next time, if there\'s another recommendation, tell me.', style: 'University student warm casual sincere closing-extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 388 — sakura + yumiko, daughter calls from uni (long)
  {
    id: 'conv_00388',
    context: 'Sakura calls her aunt Yumiko from her dorm. Some homesickness, some growth. (Note: Sakura is Naoko\'s niece per earlier batches but they all share a connected family.)',
    purpose: 'young-adult homesick check-in with familial elder',
    ambient: 'phone_call',
    sound_effects: [],
    target_vocab: ['大学', '一人暮らし', '寂しい', '頑張る', '元気', '感謝'],
    cast: ['yumiko_mom', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'もしもし、ゆみこおばさん。', en: 'Hello, Yumiko-obasan.', style: 'Teen warm soft sincere phone-careful-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-careful' },
      { speaker: 'yumiko_mom', jp: 'さくらちゃん！どうしたの？元気？', en: 'Sakura-chan! What\'s up? Well?', style: 'Maternal warm bright sincere family-warm welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-warm' },
      { speaker: 'sakura_teen', jp: '元気です。ちょっと、寂しくなって、電話しちゃった。', en: 'I\'m well. A bit lonely — called you.', style: 'Teen warm soft sincere vulnerable-honest-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-vulnerable' },
      { speaker: 'yumiko_mom', jp: 'いつでも、電話していいんだよ。', en: 'Call anytime.', style: 'Maternal warm soft gentle generous-extending-warm reassuring, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-extending' },
      { speaker: 'sakura_teen', jp: '大学、楽しいんですけど、一人暮らしが、慣れなくて。', en: 'University is fun, but living alone — not used to.', style: 'Teen warm soft sincere honest-balanced-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'honestly-balanced' },
      { speaker: 'yumiko_mom', jp: '当たり前。最初の半年は、誰でもそう。', en: 'Natural. First six months, everyone\'s like that.', style: 'Maternal warm gentle sincere-normalizing-warm reassuring, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-normalizing' },
      { speaker: 'sakura_teen', jp: 'お母さんのご飯、すごく食べたい。', en: 'Mom\'s food — I really want to eat.', style: 'Teen warm soft sincere honest-tender-warm vulnerable, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-vulnerable' },
      { speaker: 'yumiko_mom', jp: '今度、ナオコさんと、何か送ってあげる。', en: 'Next time, with Naoko, we\'ll send something.', style: 'Maternal warm soft sincere generous-warm caring-promising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'sakura_teen', jp: '本当に？嬉しい。', en: 'Really? Happy.', style: 'Teen warm soft sincere brightly-touched-warm relief, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-touched' },
      { speaker: 'yumiko_mom', jp: 'さくらちゃん、頑張ってるの、ちゃんと分かってるからね。', en: 'Sakura-chan, working hard — I properly understand.', style: 'Maternal warm soft sincere deep-warm acknowledging-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-acknowledging' },
      { speaker: 'sakura_teen', jp: 'ありがとうございます。皆さんの応援、本当に支えになってます。', en: 'Thank you. Everyone\'s support — truly is my support.', style: 'Teen warm soft sincere deep grateful-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '寂しい時は、いつでも、電話してね。', en: 'When lonely, call anytime.', style: 'Maternal warm soft gentle sincere-extending-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-extending' },
      { speaker: 'sakura_teen', jp: 'はい。話せて、すごく楽になりました。', en: 'Yes. Talking — really feels lighter.', style: 'Teen warm soft sincere visible-relief-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-relieved' },
      { speaker: 'yumiko_mom', jp: '元気でね、さくらちゃん。', en: 'Stay well, Sakura-chan.', style: 'Maternal warm soft tender deep gentle-warm closing-loving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-loving' }
    ]
  },
  // 389 — riku + ryosuke (medium)
  {
    id: 'conv_00389',
    context: 'Riku visits home from university for the first time. Father-son catch-up.',
    purpose: 'father-college-son adult check-in — quiet renewed connection',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['大学', '一人暮らし', '頑張る', '友達', '成長'],
    cast: ['ryosuke_dad', 'riku_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'リク、おかえり。一人暮らしは、どう？', en: 'Riku, welcome back. How\'s living alone?', style: 'Father warm soft sincere bright family-warm welcoming-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: 'なんとか、やってる。大学、想像以上に大変。', en: 'Somehow, managing. University — harder than I imagined.', style: 'Teen warm soft sincere casual-honest-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'honestly-casual' },
      { speaker: 'ryosuke_dad', jp: 'うん、最初はそういうものだ。', en: 'Yes, that\'s how it is at first.', style: 'Father warm gentle wise-sincere-warm normalizing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-wise' },
      { speaker: 'riku_teen', jp: '友達も、少しずつ、できてきた。', en: 'Friends — bit by bit, made some.', style: 'Teen warm soft sincere proud-disclosure-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'ryosuke_dad', jp: 'よかった。お父さん、心配してたから。', en: 'Glad. Dad was worried.', style: 'Father warm soft sincere honest-vulnerable-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-vulnerable' },
      { speaker: 'riku_teen', jp: '心配かけて、ごめん。でも、ちゃんと、成長してる。', en: 'Sorry to worry you. But I\'m properly growing.', style: 'Teen warm soft sincere mature-apologetic-warm confident, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'maturely-confident' },
      { speaker: 'ryosuke_dad', jp: 'うん、見てて、ちゃんと分かる。立派になった。', en: 'Yes, watching, I can tell. You\'ve become splendid.', style: 'Father warm soft sincere deep-warm proud-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'riku_teen', jp: '…ありがとう、お父さん。', en: '…Thanks, dad.', style: 'Teen warm soft sincere deep tender-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 390 — hiroshi_boss + naoko, third museum (short)
  {
    id: 'conv_00390',
    context: 'Hiroshi-boss and Naoko are now meeting regularly at gallery openings. Comfortable familiarity.',
    purpose: 'small ongoing civil adult acquaintance — refined cultural friendship',
    ambient: 'gallery_afternoon',
    sound_effects: [],
    target_vocab: ['芸術', '感動', '印象', '一緒', '楽しい'],
    cast: ['hiroshi_boss', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: '田中さん、今日もいらしてたんですね。', en: 'Tanaka-san, you came again today.', style: 'Aunt warm gentle bright civil-warm recognition-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'hiroshi_boss', jp: 'ナオコさん、こんにちは。今回も素敵な展示で。', en: 'Naoko-san, hello. Lovely exhibit again.', style: 'Boss measured warm formal civil-warm appreciating, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'civilly-formal' },
      { speaker: 'naoko_aunt', jp: 'こうやって、同じ趣味の方と、お話できるのが楽しいんです。', en: 'Talking with someone with the same interests like this — fun.', style: 'Aunt warm gentle sincere reflective-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'hiroshi_boss', jp: '私も同じです。今日の絵、特に感動しました。', en: 'I feel the same. Today\'s painting — especially moved me.', style: 'Boss measured warm sincere specific-disclosure-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'naoko_aunt', jp: '色が、本当に印象的でしたよね。', en: 'The colors were truly impressive.', style: 'Aunt warm gentle sincere matching-warm appreciation, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'hiroshi_boss', jp: '次の展示も、また、ご一緒できれば。', en: 'Next exhibit too — if we could go together.', style: 'Boss measured warm sincere gentle-extending-warm closing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'gently-extending' }
    ]
  },
  // 391 — tatsuya + saito (medium)
  {
    id: 'conv_00391',
    context: 'Tatsuya visits city to see Dr. Saito about a small persistent back pain. Country uncle meets city doctor.',
    purpose: 'medical visit — rural patient and city professional',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['腰', '痛い', '農業', '無理', '気を付ける'],
    cast: ['saito_doctor', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '達也さん、今日はどうされましたか。', en: 'Tatsuya-san, what brings you in today?', style: 'Doctor warm professional gentle careful-opening-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-gentle' },
      { speaker: 'tatsuya_country', jp: '腰がな、最近、ずっと痛うてな。', en: 'Back, lately, has been hurting.', style: 'Country gruff warm honest direct-rural-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-honest' },
      { speaker: 'saito_doctor', jp: '農作業、ずっとされてますもんね。', en: 'You\'ve been farming all this time, after all.', style: 'Doctor warm professional gentle understanding-warm acknowledging, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-understanding' },
      { speaker: 'tatsuya_country', jp: 'うん、もう、若くないわ。', en: 'Yeah, not young anymore.', style: 'Country gruff warm sincere honest-laughing-warm self-aware, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'self-aware-laughing' },
      { speaker: 'saito_doctor', jp: '無理しないことが大事。今日、ちゃんと、診察しますね。', en: 'Not pushing matters. Today, I\'ll examine you properly.', style: 'Doctor warm gentle firm careful-professional-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'firmly-careful' },
      { speaker: 'tatsuya_country', jp: 'すまんな、こんなとこまで来てもろて。', en: 'Sorry — for coming all the way here.', style: 'Country gruff warm humble apologetic-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-grateful' },
      { speaker: 'saito_doctor', jp: 'いえいえ。お薬と、生活の注意点、ちゃんとお伝えします。', en: 'No, no. Medicine and lifestyle tips — I\'ll tell you properly.', style: 'Doctor warm professional gentle generous-warm closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-professional' },
      { speaker: 'tatsuya_country', jp: '気を付けるわ。先生、ほんま助かります。', en: 'I\'ll be careful. Doctor, truly saves me.', style: 'Country gruff warm sincere closing-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-grateful' }
    ]
  },
  // 392 — mrs_mori + sachiko + naoko, three elder women (3-speaker, long)
  {
    id: 'conv_00392',
    context: 'A gentle afternoon at the community center. Three women in different stages of widowhood/aging share tea.',
    purpose: 'three-generation elder women — quiet shared wisdom of widowhood',
    ambient: 'community_room_afternoon',
    sound_effects: [],
    target_vocab: ['一人', '時間', '思い出', '友達', '感謝', '楽しい'],
    cast: ['mrs_mori_neighbor', 'sachiko_grandma', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: 'さちこさん、最近、いかが？', en: 'Sachiko-san, how have you been?', style: 'Neighbor warm gentle bright sincere-warm friendship-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sachiko_grandma', jp: 'なんとか。一人の時間にも、ちょっとずつ慣れて。', en: 'Somehow. Bit by bit, getting used to alone time.', style: 'Soft grandmother warm soft tender honest-sincere-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-honest' },
      { speaker: 'naoko_aunt', jp: '私も、毎週来るようにしてます。', en: 'I\'ve been coming every week too.', style: 'Aunt warm soft sincere warm-supporting-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '私もね、主人亡くしてから、十年。ずいぶん経つけど、まだ夢に出てくる。', en: 'After losing my husband — ten years. Long time, but he still appears in dreams.', style: 'Neighbor warm soft tender deep sincere-sharing-warm wisdom, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: 'そうですか…私も、毎日のように、夢を見ます。', en: 'Is that so… I too, almost every day, dream.', style: 'Soft grandmother warm soft tender deep gentle-matching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-matching' },
      { speaker: 'naoko_aunt', jp: 'お父さん、今でも、お母さんに会いに来てるのね。', en: 'Father — even now, coming to see mother.', style: 'Aunt warm soft tender sincere-comforting-warm interpreting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-comforting' },
      { speaker: 'mrs_mori_neighbor', jp: 'こうやって、お話できる友達がいるって、本当に大事。', en: 'Having friends to talk with like this — truly important.', style: 'Neighbor warm gentle sincere deep philosophical-warm reflection, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-philosophical' },
      { speaker: 'sachiko_grandma', jp: '本当に。一人で抱えてたら、辛かった。', en: 'Truly. Carrying alone — would have been hard.', style: 'Soft grandmother warm soft tender sincere-deep-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'naoko_aunt', jp: 'お母さんが森さんと、こういう友達でいてくれて、私も感謝してます。', en: 'Mother with Mori-san — being friends like this, I\'m grateful too.', style: 'Aunt warm soft sincere deep-warm extending-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mrs_mori_neighbor', jp: 'こちらこそ。さちこさん、いいお人柄で。', en: 'Same. Sachiko-san is a good person.', style: 'Neighbor warm gentle sincere-warm appreciating-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'こうやって笑えるの、嬉しい。少しずつね。', en: 'Being able to laugh like this — happy. Bit by bit.', style: 'Soft grandmother warm soft tender sincere-bright-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'naoko_aunt', jp: 'また来週、お茶しましょう。', en: 'Let\'s have tea again next week.', style: 'Aunt warm soft sincere closing-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-extending' }
    ]
  },
  // 393 — daichi + ren (medium)
  {
    id: 'conv_00393',
    context: 'Daichi and Ren — through Aoi — meet alone for a quiet chat. Future cousin-in-laws.',
    purpose: 'two young men quietly building family connection through partners',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['結婚', '一緒', '将来', '家族', '友達'],
    cast: ['daichi_kansai', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'れんくん、改めて、ちゃんと話したくて。', en: 'Ren-kun, formally — wanted to talk properly.', style: 'Kansai warm soft sincere careful-warm formal opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'ren_uni', jp: 'お、なんかフォーマルっすね。', en: 'Oh, kinda formal.', style: 'University student warm casual laughing easy-warm receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'casually-laughing' },
      { speaker: 'daichi_kansai', jp: 'メイちゃんと結婚するから、これから、家族同士やん。', en: 'I\'m marrying Mei-chan — so we\'ll be family from now on.', style: 'Kansai warm soft sincere warm-disclosure-acknowledging, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'マジで。なんか、嬉しい。よろしくっす。', en: 'For real. Kinda happy. Pleased.', style: 'University student warm soft sincere bright-warm informal-formal-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: 'あおいちゃんが、れんくんのこと、本当に大事に思ってる。', en: 'Aoi-chan really cares about you, Ren-kun.', style: 'Kansai warm soft sincere warm-bridging-friendship, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '俺も。あおいの友達と、こうやって繋がれて、嬉しいす。', en: 'Me too. Glad to connect with Aoi\'s friends like this.', style: 'University student warm soft sincere deep-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'これから、皆で集まる機会、増えるな。', en: 'From now on, chances to gather will increase.', style: 'Kansai warm bright sincere-warm extending-future, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: '楽しみっすね。', en: 'Looking forward.', style: 'University student warm casual sincere brief-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'casually-warm' }
    ]
  },
  // 394 — sho + asuka + yumiko, parent-teacher (3-speaker, medium)
  {
    id: 'conv_00394',
    context: 'A small parent-teacher meeting for Sho, who is now in second grade and has grown.',
    purpose: 'small parent-teacher updating about child growth',
    ambient: 'classroom_quiet',
    sound_effects: [],
    target_vocab: ['学校', '成長', '友達', '元気', '安心'],
    cast: ['asuka_teacher', 'yumiko_mom', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'ゆみこさん、しょうくん、本当に成長されました。', en: 'Yumiko-san, Sho-kun truly has grown.', style: 'Teacher warm gentle bright professional-warm parent-update, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'yumiko_mom', jp: '本当ですか？嬉しい。', en: 'Really? Happy.', style: 'Maternal warm bright sincere touched-warm parent-relief, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '…えへへ。', en: '…Heehee.', style: 'Tiny six-year-old soft small shy gentle-warm laugh, the small real warmth audible, soft small warmth throughout delivery.', mood: 'shyly-warm' },
      { speaker: 'asuka_teacher', jp: 'お友達と、よく遊んでます。前より、ずっと元気で。', en: 'Plays well with friends. Much more lively than before.', style: 'Teacher warm gentle sincere specific-warm reporting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'おじいちゃんが亡くなって、すごく心配してたんです。', en: 'After grandpa passed, I was very worried.', style: 'Maternal warm soft sincere honest-vulnerable-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-honest' },
      { speaker: 'asuka_teacher', jp: 'しょうくん、お家でも、ちゃんと話せるようになりましたか？', en: 'Sho-kun, can talk properly at home too now?', style: 'Teacher warm gentle careful sincere-asking-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'sho_child', jp: 'うん…お母さんに、いっぱい話してる。', en: 'Yes… I talk to mom lots.', style: 'Tiny six-year-old soft small sincere proud-disclosure-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'yumiko_mom', jp: '先生に見守ってもらえて、本当に安心しました。', en: 'Being watched over by sensei — truly relieved.', style: 'Maternal warm soft sincere deep grateful-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。これからも、しっかり、しょうくんを見守っていきます。', en: 'Same. From now on too, I\'ll watch over Sho properly.', style: 'Teacher warm soft sincere committed-warm closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' }
    ]
  },
  // 395 — hina + mrs_mori (short)
  {
    id: 'conv_00395',
    context: 'Hina helps Mrs. Mori carry groceries home from the market.',
    purpose: 'small child-elder neighborhood kindness',
    ambient: 'street_afternoon',
    sound_effects: [],
    target_vocab: ['手伝う', '重い', '優しい', '近所', 'ありがとう'],
    cast: ['mrs_mori_neighbor', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: '森のおばあちゃん、お荷物、持つよ！', en: 'Mori-grandma, I\'ll carry the bags!', style: 'High child bright eager helpful-warm offering, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'eagerly-bright' },
      { speaker: 'mrs_mori_neighbor', jp: 'まあ、ひなちゃん、優しいねえ。', en: 'Oh my, Hina-chan, so kind.', style: 'Neighbor warm gentle touched bright-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-touched' },
      { speaker: 'hina_child', jp: '重い？ひな、力あるから。', en: 'Heavy? Hina has power.', style: 'High child bright proud confident-warm declaring, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'proudly-bright' },
      { speaker: 'mrs_mori_neighbor', jp: 'ふふ、頼もしいわ。一個だけ、持ってもらおうかな。', en: 'Hehe, reliable. Just one — could you carry?', style: 'Neighbor warm gentle laughing-touched-warm careful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-laughing' },
      { speaker: 'hina_child', jp: 'うん、いっぱい持つよ！近所のおばあちゃんだもん。', en: 'Yes, I\'ll carry lots! You\'re the neighborhood grandma.', style: 'High child bright sincere warm-declaring-affectionate, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mrs_mori_neighbor', jp: '本当に、ありがとうね。', en: 'Truly, thank you.', style: 'Neighbor warm gentle sincere deep-touched-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-touched' }
    ]
  },
  // 396 — kenji + ryosuke + yuki (3-speaker, medium)
  {
    id: 'conv_00396',
    context: 'Three colleagues at lunch. Yuki has announced she\'s getting a promotion.',
    purpose: 'colleague celebration — career milestone shared',
    ambient: 'restaurant_lunch',
    sound_effects: [],
    target_vocab: ['昇進', '頑張る', '感謝', '一緒', '将来'],
    cast: ['kenji_office', 'ryosuke_dad', 'yuki_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '佐藤さん、昇進、本当におめでとうございます。', en: 'Sato-san, on the promotion — truly congratulations.', style: 'Salaryman warm formal sincere bright-celebrating-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yuki_office', jp: 'ありがとうございます。皆さんのお陰です。', en: 'Thank you. Thanks to everyone.', style: 'Office woman warm bright sincere humble-warm gratitude, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-bright' },
      { speaker: 'ryosuke_dad', jp: '佐藤さんが、頑張ってきたから。当然の評価ですね。', en: 'Because you worked hard, Sato-san. A natural evaluation.', style: 'Father warm gentle sincere generous-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'yuki_office', jp: '正直、責任が増えて、不安もあります。', en: 'Honestly, with more responsibility, I have unease too.', style: 'Office woman warm soft sincere honest-vulnerable-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'honestly-vulnerable' },
      { speaker: 'kenji_office', jp: 'こちらも、ちゃんとサポートしますから。', en: 'On my side too — I\'ll support properly.', style: 'Salaryman warm sincere committed-warm offering-support, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'ryosuke_dad', jp: '不安があるからこそ、ちゃんと責任を持てる。', en: 'Because of unease, you can take responsibility properly.', style: 'Father warm gentle wise sincere-warm reframing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-wise' },
      { speaker: 'yuki_office', jp: 'お二人と一緒に仕事できて、本当に嬉しい。', en: 'Working with you both — truly happy.', style: 'Office woman warm soft sincere deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '将来も、ずっと、一緒に頑張りましょう。', en: 'In the future too — let\'s keep working together.', style: 'Salaryman warm sincere closing-warm committing-future, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 397 — saito + sakura + yumiko, sakura visits with mom (3-speaker, medium)
  {
    id: 'conv_00397',
    context: 'Sakura is home for break and accompanies Yumiko\'s mother Sachiko\'s clinic visit. Three across generations of women.',
    purpose: 'three-female intergenerational medical visit — small ongoing care thread',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['元気', '健康', '一緒', '安心', '感謝'],
    cast: ['saito_doctor', 'yumiko_mom', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'お久しぶり。今日は、さくらさんも一緒で。', en: 'Long time. Today, Sakura-san is here too.', style: 'Doctor warm professional gentle warm-recognizing-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-warm' },
      { speaker: 'sakura_teen', jp: 'お久しぶりです、斎藤先生。', en: 'Long time no see, Dr. Saito.', style: 'Teen warm soft sincere respectful-warm greeting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'respectfully-warm' },
      { speaker: 'yumiko_mom', jp: '今日は、母の付き添いで。', en: 'Today, accompanying my mother.', style: 'Maternal warm sincere brief-warm reporting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'お母様、お元気そうですよ。', en: 'Your mother looks well.', style: 'Doctor warm professional gentle reassuring-warm observation, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-reassuring' },
      { speaker: 'yumiko_mom', jp: '安心しました。最近、心配で。', en: 'Relieved. Lately, worried.', style: 'Maternal warm soft sincere honest-disclosure-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'sakura_teen', jp: 'おばあちゃん、ちゃんとお薬飲んでるって言ってました。', en: 'Grandma said she\'s taking medicine properly.', style: 'Teen warm soft sincere supporting-warm reporting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-supporting' },
      { speaker: 'saito_doctor', jp: 'いいですね。皆さんが見守ってくださってるから。', en: 'Good. Because everyone is watching over.', style: 'Doctor warm professional gentle sincere-warm appreciating-civic, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-civic' },
      { speaker: 'yumiko_mom', jp: '家族で、ちゃんと、支えていきます。', en: 'As family, we\'ll support properly.', style: 'Maternal warm soft sincere committed-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'saito_doctor', jp: 'お母様も、ご家族も、皆様、お大事に。', en: 'Mother, family, all — take care.', style: 'Doctor warm professional gentle closing-warm extending-civic, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-civic' }
    ]
  },
  // 398 — takeda + tatsuya, road trip (short)
  {
    id: 'conv_00398',
    context: 'Tatsuya stops at a roadside koban on his way home with too many vegetables. Takeda happens to be the officer.',
    purpose: 'small civic chance encounter — rural-urban kindness',
    ambient: 'koban_afternoon',
    sound_effects: [],
    target_vocab: ['野菜', '田舎', '親切', '元気', 'ありがとう'],
    cast: ['takeda_officer', 'tatsuya_country'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'すいません、ちょっと休憩、いいですか。', en: 'Excuse me, can I take a small rest?', style: 'Country gruff warm formal-rural civil-asking-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-civil' },
      { speaker: 'takeda_officer', jp: 'もちろん。長距離、お疲れさまです。', en: 'Of course. Long distance — good work.', style: 'Officer warm professional gentle generous-welcoming-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-generous' },
      { speaker: 'tatsuya_country', jp: '田舎から、野菜運んできまして。これ、一つどうぞ。', en: 'Brought veggies from the country. Here, take one.', style: 'Country gruff warm sincere generous-rural-offering-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-generous' },
      { speaker: 'takeda_officer', jp: 'えっ、いいんですか。ありがとうございます。', en: 'Eh, really? Thank you very much.', style: 'Officer warm soft sincere surprised-touched-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-touched' },
      { speaker: 'tatsuya_country', jp: 'いつもお仕事、ありがとうな。元気でな。', en: 'Always thanks for your work. Stay well.', style: 'Country gruff warm sincere closing-civic-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: 'こちらこそ。気を付けて、お帰りください。', en: 'Same. Take care, head home safe.', style: 'Officer warm gentle sincere closing-civic-warm farewell, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-warm' }
    ]
  },
  // 399 — aoi + naoko (long)
  {
    id: 'conv_00399',
    context: 'Aoi opens up to Naoko about her father — they\'ve become friends through Mei. Aoi processes some old grief.',
    purpose: 'young-adult opening to older woman — careful intergenerational tenderness',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['父', '思い出', '音楽', '寂しい', '感謝', '幸せ'],
    cast: ['aoi_barista', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'ナオコさん、ちょっと、聞いてもらってもいいですか。', en: 'Naoko-san, can I have you listen for a bit?', style: 'Soft dreamy barista warm soft careful brave-asking-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'carefully-brave' },
      { speaker: 'naoko_aunt', jp: 'うん、もちろん。何か、あったの？', en: 'Yes, of course. Did something happen?', style: 'Aunt warm gentle sincere-warm careful-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-receiving' },
      { speaker: 'aoi_barista', jp: '結婚式、近づいてくる中で、ちょっと、お父さん、思い出して。', en: 'As the wedding approaches, I remember my father a bit.', style: 'Soft dreamy barista warm soft tender vulnerable-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-vulnerable' },
      { speaker: 'naoko_aunt', jp: '…お父さん、お亡くなりに？', en: '…Your father passed?', style: 'Aunt warm soft tender careful-respectful-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-careful' },
      { speaker: 'aoi_barista', jp: 'はい、私が大学生の時に。あの時の音楽、今でも聴いてます。', en: 'Yes, when I was a college student. I still listen to his music.', style: 'Soft dreamy barista warm soft sincere tender-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sharing' },
      { speaker: 'naoko_aunt', jp: 'そう…結婚式、お父さんも見たかったわよね。', en: 'I see… your father would have wanted to see the wedding.', style: 'Aunt warm soft tender sincere-comforting-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-comforting' },
      { speaker: 'aoi_barista', jp: '寂しいのと、嬉しいのと、両方で。混乱してる。', en: 'Lonely and happy, both. Confused.', style: 'Soft dreamy barista warm soft tender sincere-honest-warm complex, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-honest' },
      { speaker: 'naoko_aunt', jp: '当たり前。大きな変化の前って、過去のことが、いっぱい蘇る。', en: 'Natural. Before big changes, past things come flooding back.', style: 'Aunt warm soft tender sincere-wise-warm normalizing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-wise' },
      { speaker: 'aoi_barista', jp: 'ナオコさんに話せて、本当に楽になった。', en: 'Talking with you — truly feels lighter.', style: 'Soft dreamy barista warm soft sincere visible-relief-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-relieved' },
      { speaker: 'naoko_aunt', jp: 'いつでも、頼ってくれていいから。', en: 'Anytime, you can rely on me.', style: 'Aunt warm soft sincere generous-warm extending-care, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'aoi_barista', jp: 'お父さん、空から、見てくれてるって、信じたい。', en: 'Father, from the sky, watching — I want to believe.', style: 'Soft dreamy barista warm soft tender sincere-vulnerable-warm hope, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-hopeful' },
      { speaker: 'naoko_aunt', jp: '見てるよ、絶対に。嬉しい結婚式になるね。', en: 'He\'s watching, absolutely. A happy wedding it\'ll be.', style: 'Aunt warm soft tender sincere-firm-warm comforting-belief, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-firm' },
      { speaker: 'aoi_barista', jp: '感謝してます。本当に。', en: 'Grateful. Truly.', style: 'Soft dreamy barista warm soft sincere deep-tender-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 400 — riku + sakura (short)
  {
    id: 'conv_00400',
    context: 'Riku and Sakura have lunch at home during a brief overlap of their breaks. Cousins celebrating both being in college now.',
    purpose: 'cousins moving forward through milestone — small adult continuity',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['大学', '大人', '楽しい', '一緒', '成長'],
    cast: ['riku_teen', 'sakura_teen'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'さくら、お互い大学生だな。', en: 'Sakura, both of us are college students now.', style: 'Teen warm soft sincere bright-warm milestone-recognition, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'うん、なんか、不思議。', en: 'Yes, somehow, strange.', style: 'Teen warm soft sincere wondering-warm reflective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-wondering' },
      { speaker: 'riku_teen', jp: '一人暮らし、慣れた？', en: 'Living alone — used to it?', style: 'Teen warm soft sincere casual-cousin-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'casually-warm' },
      { speaker: 'sakura_teen', jp: '少しずつ。リクは？', en: 'Bit by bit. You?', style: 'Teen warm soft sincere honest-reciprocal-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'なんとか。お互い、頑張ろう。', en: 'Somehow. Both of us, let\'s do our best.', style: 'Teen warm soft sincere bright-warm closing-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'うん、また話そう。元気で。', en: 'Yes, let\'s talk again. Stay well.', style: 'Teen warm soft sincere warm-closing-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 401 — hiroshi_boss + ryosuke + tatsuya (3-speaker, long)
  {
    id: 'conv_00401',
    context: 'A formal business meeting — Hiroshi-boss, Ryosuke (now formally connected), and Tatsuya for an even bigger expansion.',
    purpose: 'three-business-leader careful expansion — adult professional alliance deepening',
    ambient: 'office_meeting',
    sound_effects: [],
    target_vocab: ['事業', '拡大', '計画', '信頼', '責任', '将来'],
    cast: ['hiroshi_boss', 'ryosuke_dad', 'tatsuya_country'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '本日は、新規事業の計画について、ご相談したく。', en: 'Today, about the new business plan, wish to consult.', style: 'Boss measured warm formal authoritative-professional-warm opening, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'formally-authoritative' },
      { speaker: 'tatsuya_country', jp: 'ようこそ、田中さん。今日は、私もしっかり聞きます。', en: 'Welcome, Tanaka-san. Today, I\'ll listen carefully.', style: 'Country gruff warm formal-rural professional-warm respect, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-formal' },
      { speaker: 'ryosuke_dad', jp: '今回、私から、お二人をつなげさせていただきました。', en: 'This time, I let me connect you two.', style: 'Father warm formal sincere professional-warm bridging-formally, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-sincere' },
      { speaker: 'hiroshi_boss', jp: '達也さんとは、すでに何度か取引させていただいてます。', en: 'With Tatsuya-san, we\'ve done business several times already.', style: 'Boss measured warm formal sincere-professional-warm contextualizing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'professionally-formal' },
      { speaker: 'tatsuya_country', jp: '信頼してもろてます。今回も、誠実にやらせていただきます。', en: 'You\'ve trusted me. This time too, I\'ll work honestly.', style: 'Country gruff warm formal-rural sincere-professional-warm committing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'hiroshi_boss', jp: '今回は、もう少し規模を大きくして、長期契約を提案したい。', en: 'This time, slightly larger scale — long-term contract I\'d like to propose.', style: 'Boss measured warm formal authoritative-strategic-warm proposing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'strategically-formal' },
      { speaker: 'tatsuya_country', jp: '長期…責任が増えますな。けど、信頼してもろてる以上、応えたい。', en: 'Long-term… responsibility grows. But, given trust, I want to respond.', style: 'Country gruff warm formal sincere-careful-warm thoughtful-committing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'thoughtfully-formal' },
      { speaker: 'ryosuke_dad', jp: '達也さん、こちらでも、ちゃんとサポートさせていただきます。', en: 'Tatsuya-san, on our side too — we\'ll support properly.', style: 'Father warm formal sincere committed-warm offering-formal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-committed' },
      { speaker: 'hiroshi_boss', jp: '計画書、こちらに用意しました。ご確認ください。', en: 'Plan document — prepared here. Please confirm.', style: 'Boss measured warm formal professional-warm presenting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'professionally-presenting' },
      { speaker: 'tatsuya_country', jp: '…なるほど。けっこう、しっかり練ってありますな。', en: '…I see. Quite firmly worked out.', style: 'Country gruff warm formal sincere-impressed-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-impressed' },
      { speaker: 'hiroshi_boss', jp: 'ご家族や、お仕事のこと、ちゃんと考えてからのご判断を。', en: 'After thinking about family and work, please judge.', style: 'Boss measured warm formal sincere-respectful-warm patient closing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'tatsuya_country', jp: 'お返事、一週間ほど、いただいてもよろしいですか。', en: 'For my answer, could I have about a week?', style: 'Country gruff warm formal sincere-careful-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'carefully-formal' },
      { speaker: 'ryosuke_dad', jp: 'もちろん、ゆっくりお考えください。', en: 'Of course, think slowly.', style: 'Father warm formal gentle sincere-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-formal' },
      { speaker: 'hiroshi_boss', jp: 'ご検討、心からお願いします。', en: 'Your consideration — from the heart, I ask.', style: 'Boss measured warm formal sincere-deep-warm formal closing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 402 — sho + hiroshi_boss (short)
  {
    id: 'conv_00402',
    context: 'Sho meets his great-uncle Hiroshi-boss formally — Yumiko\'s older brother — for the first time at a family event.',
    purpose: 'small child-elder meeting — careful warmth',
    ambient: 'family_event',
    sound_effects: [],
    target_vocab: ['初めて', 'おじさん', 'ありがとう', '優しい', '元気'],
    cast: ['hiroshi_boss', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'しょうくん、こんにちは。大きくなったね。', en: 'Sho-kun, hello. You\'ve grown.', style: 'Boss measured warm gentle family-soft welcoming-warm to child, the soft real authority-soft audible, gentle real warmth throughout delivery.', mood: 'gently-family' },
      { speaker: 'sho_child', jp: 'こ…こんにちは。', en: 'H…hello.', style: 'Tiny six-year-old soft small careful nervous-warm greeting, the small real warmth audible, soft small warmth throughout delivery.', mood: 'shyly-careful' },
      { speaker: 'hiroshi_boss', jp: 'お母さんのお兄さん、田中だよ。', en: 'I\'m your mother\'s older brother, Tanaka.', style: 'Boss measured warm gentle family-soft introducing-warm to child, the soft real authority-soft audible, gentle real warmth throughout delivery.', mood: 'gently-warm' },
      { speaker: 'sho_child', jp: '…おじさん、よろしくお願いします。', en: '…Uncle, pleased to know you.', style: 'Tiny six-year-old soft small careful polite-warm respectful, the small real warmth audible, soft small warmth throughout delivery.', mood: 'carefully-polite' },
      { speaker: 'hiroshi_boss', jp: 'おっ、立派な挨拶だ。優しい子だなあ。', en: 'Oh, splendid greeting. What a kind child.', style: 'Boss measured warm gentle sincere-warm proud praise to child, the soft real authority-soft audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'えへへ。ありがとうございます。', en: 'Heehee. Thank you very much.', style: 'Tiny six-year-old soft small sincere touched-warm closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-touched' }
    ]
  },
  // 403 — yumiko + asuka (medium)
  {
    id: 'conv_00403',
    context: 'Yumiko and Asuka have become friends, beyond parent-teacher. They meet for coffee.',
    purpose: 'small adult-women friendship — small ongoing warmth across former teacher role',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['友達', '一緒', '楽しい', '感謝', '元気'],
    cast: ['asuka_teacher', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'あすか先生、こうやって会えるの、嬉しい。', en: 'Asuka-sensei, glad to meet like this.', style: 'Maternal warm gentle bright sincere-warm friend-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'asuka_teacher', jp: 'もう、先生じゃなくていいから。あすかで。', en: 'Already, not sensei. Just Asuka.', style: 'Teacher warm gentle laughing easy-warm casual-friend permitting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-easy' },
      { speaker: 'yumiko_mom', jp: 'ふふ、まだ慣れない。あすかさん。', en: 'Hehe, not used to it yet. Asuka-san.', style: 'Maternal warm gentle laughing transitional-warm careful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-laughing' },
      { speaker: 'asuka_teacher', jp: 'ふふ、それでいいです。最近、しょうくん、元気？', en: 'Hehe, that\'s fine. Lately, Sho-kun well?', style: 'Teacher warm gentle bright family-care-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'yumiko_mom', jp: 'すごく元気で。先生のお陰、本当に感謝してます。', en: 'Very well. Thanks to sensei — truly grateful.', style: 'Maternal warm sincere deep-warm grateful sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。子供たちを、一緒に見守れる仲間が増えて。', en: 'Same. Companions watching over kids together — increased.', style: 'Teacher warm gentle sincere generous-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'こうやって、友達でいられて、本当に嬉しい。', en: 'Being friends like this — truly happy.', style: 'Maternal warm soft sincere deep-warm closing reflection, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'これからも、ずっと、ご縁、続けていきましょう。', en: 'From now on too — let\'s continue the connection.', style: 'Teacher warm soft sincere closing-warm extending-future, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

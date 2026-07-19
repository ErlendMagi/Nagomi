import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_022)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 424 — daichi + mei wedding day (long)
  {
    id: 'conv_00424',
    context: 'Wedding day. Daichi and Mei have a quiet moment together before the ceremony begins.',
    purpose: 'major emotional milestone — quiet moment before wedding',
    ambient: 'dressing_room',
    sound_effects: [],
    target_vocab: ['結婚式', '緊張', '一緒', '幸せ', '感謝', '永遠'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'メイちゃん、いよいよやな。', en: 'Mei-chan, finally here.', style: 'Kansai warm soft tender deep-warm wedding-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: 'うん、すごく緊張してる。けど、幸せ。', en: 'Yes, very nervous. But happy.', style: 'Romantic warm soft tender deep sincere-warm balanced, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-balanced' },
      { speaker: 'daichi_kansai', jp: 'わいもや。手、震えてる。', en: 'Me too. Hands shaking.', style: 'Kansai warm soft tender honest-warm vulnerable-laughing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-honest' },
      { speaker: 'mei_romantic', jp: 'ふふ、可愛い。一緒に深呼吸しよう。', en: 'Hehe, cute. Let\'s breathe deep together.', style: 'Romantic warm soft tender bright-laughing-warm offering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-laughing' },
      { speaker: 'daichi_kansai', jp: '…うん。落ち着いてきた。', en: '…Yeah. Calming down.', style: 'Kansai warm soft tender sincere-warm relieved-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'softly-relieved' },
      { speaker: 'mei_romantic', jp: '今日まで、本当に色んなことあったね。', en: 'Until today, truly so many things.', style: 'Romantic warm soft tender deep-warm reflecting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'daichi_kansai', jp: 'おじいちゃんとの最後の話、覚えてる。', en: 'My grandfather\'s last talk — I remember.', style: 'Kansai warm soft tender deep-warm reflecting-memory, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-memory' },
      { speaker: 'mei_romantic', jp: 'お祖父様の指輪、ちゃんと、つけてる。', en: 'Grandfather\'s ring — I\'m wearing it.', style: 'Romantic warm soft tender deep-warm sincere-touched, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-touched' },
      { speaker: 'daichi_kansai', jp: '…ありがとう。家族に、ずっと感謝してる。', en: '…Thank you. To family — always grateful.', style: 'Kansai warm soft tender deep sincere-deep-warm closing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: 'これからも、一緒に、ね。', en: 'From now on too, together.', style: 'Romantic warm soft tender deep sincere-warm closing-matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-matching' },
      { speaker: 'daichi_kansai', jp: '永遠に、メイちゃんと、共にやで。', en: 'Forever, with Mei-chan, together.', style: 'Kansai warm soft tender deep sincere-deep-warm committing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: '…はい。永遠に。', en: '…Yes. Forever.', style: 'Romantic warm soft tender deep tearful-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-tearful' },
      { speaker: 'daichi_kansai', jp: 'よし、行こか。皆、待ってる。', en: 'Right, let\'s go. Everyone\'s waiting.', style: 'Kansai warm soft tender bright-warm closing-energetic-gentle, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'mei_romantic', jp: 'うん、一緒に、行こう。', en: 'Yes, together, let\'s go.', style: 'Romantic warm soft tender deep sincere-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 425 — kenji + hiroshi_boss (medium)
  {
    id: 'conv_00425',
    context: 'A quiet office moment. Kenji updates Hiroshi-boss on a difficult negotiation.',
    purpose: 'workplace strategy discussion',
    ambient: 'office_quiet',
    sound_effects: [],
    target_vocab: ['交渉', '戦略', '判断', '結果', '評価'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '部長、先日の交渉、ご報告です。', en: 'Boss, the negotiation the other day, my report.', style: 'Salaryman warm formal sincere professional-warm reporting, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'formally-professional' },
      { speaker: 'hiroshi_boss', jp: 'はい、聞かせてください。', en: 'Yes, please tell me.', style: 'Boss measured warm formal sincere-warm receiving-attentive, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'attentively-formal' },
      { speaker: 'kenji_office', jp: '結果、こちらの戦略が、ある程度通りました。', en: 'Result — our strategy went through to some degree.', style: 'Salaryman warm formal sincere professional-warm honest-reporting, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'professionally-honest' },
      { speaker: 'hiroshi_boss', jp: 'ある程度、というと？', en: 'To some degree — meaning?', style: 'Boss measured warm formal careful-probing-warm clarifying, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'carefully-probing' },
      { speaker: 'kenji_office', jp: '価格は希望に届きませんでしたが、納期で、有利な条件を引き出せました。', en: 'Price didn\'t reach our hope, but on delivery, we drew out favorable conditions.', style: 'Salaryman warm formal sincere professional-warm balanced-honest, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'professionally-balanced' },
      { speaker: 'hiroshi_boss', jp: 'なるほど。判断、正解でしたね。', en: 'I see. The judgment was correct.', style: 'Boss measured warm formal sincere-warm approving-affirming, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'kenji_office', jp: 'ありがとうございます。次回も、同じ戦略で進めます。', en: 'Thank you. Next time too, same strategy.', style: 'Salaryman warm formal sincere committed-warm closing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'hiroshi_boss', jp: '頼んだ。次の評価会議で、ちゃんと、評価する。', en: 'Counting on you. At next review meeting, I\'ll evaluate properly.', style: 'Boss measured warm formal sincere-warm closing-trusting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-trusting' }
    ]
  },
  // 426 — sho + sakura (short)
  {
    id: 'conv_00426',
    context: 'Sakura comes home from college and Sho is delighted but shy.',
    purpose: 'small homecoming warmth — child reuniting with older cousin',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['久しぶり', '元気', '大学', '楽しい', '一緒'],
    cast: ['sakura_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'しょうくん、久しぶり！', en: 'Sho-kun, long time!', style: 'Teen warm soft bright sincere-warm cousin-reunion, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '…おかえり、お姉ちゃん。', en: '…Welcome back, big sis.', style: 'Tiny six-year-old soft small careful tender-warm welcoming, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-careful' },
      { speaker: 'sakura_teen', jp: '元気だった？大きくなったね、しょうくん。', en: 'Been well? You\'ve grown, Sho-kun.', style: 'Teen warm soft sincere bright-warm observation-affectionate, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-affectionate' },
      { speaker: 'sho_child', jp: '…うん。学校、ちゃんと、頑張ってる。', en: '…Yeah. School, properly, working hard.', style: 'Tiny six-year-old soft small sincere proud-warm sharing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'sakura_teen', jp: 'えらいね。今日、一緒に、お絵かきしよ。', en: 'Good child. Today, let\'s draw together.', style: 'Teen warm soft sincere bright-warm offering-inviting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sho_child', jp: 'うん、楽しい。', en: 'Yes, fun.', style: 'Tiny six-year-old soft small sincere bright-warm closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 427 — yuki + asuka + mei + aoi (4-speaker, long)
  {
    id: 'conv_00427',
    context: 'Four women — Yuki, Asuka, Mei, Aoi — share a pre-wedding evening together for Aoi.',
    purpose: 'four-female celebrating milestone — friendship around shared joy',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['結婚式', '幸せ', '応援', '友達', '一緒', '感謝'],
    cast: ['yuki_office', 'asuka_teacher', 'mei_romantic', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいさん、結婚式、本当におめでとう！', en: 'Aoi-san, congratulations on the wedding!', style: 'Office woman warm bright sincere celebrating-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '皆、本当にありがとう。集まってもらって。', en: 'Everyone, truly thank you. For gathering.', style: 'Soft dreamy barista warm soft sincere deep-warm touched-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: '私たち、本当に、嬉しい。', en: 'We are truly happy.', style: 'Romantic warm soft sincere bright-warm matching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'こうやって、女性同士で集まれるの、本当に楽しい。', en: 'Gathering as women like this — truly fun.', style: 'Teacher warm gentle bright sincere-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'あおいさん、結婚式、緊張する？', en: 'Aoi-san, nervous about the wedding?', style: 'Office woman warm gentle sincere caring-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-caring' },
      { speaker: 'aoi_barista', jp: 'すごく。けど、皆の応援、本当に支えになってる。', en: 'Very. But everyone\'s cheering — truly is my support.', style: 'Soft dreamy barista warm soft sincere deep-warm grateful-honest, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: '私の時も、本当にそうだった。一緒に乗り越えた感じ。', en: 'Same when mine. Felt we overcame together.', style: 'Romantic warm soft sincere reflective-warm bridging-experience, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'asuka_teacher', jp: '友達がいてくれること、本当に、大事なんだ、人生って。', en: 'Having friends — truly important, in life.', style: 'Teacher warm gentle sincere philosophical-warm deep-reflective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-philosophical' },
      { speaker: 'yuki_office', jp: '本当に。こうやって、ずっと一緒に、いられたらいいな。', en: 'Truly. Wish we could stay together like this always.', style: 'Office woman warm soft sincere bright-warm wishing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '私の、特別な日、皆と一緒で、本当に幸せ。', en: 'My special day, with everyone — truly happy.', style: 'Soft dreamy barista warm soft sincere deep-tender-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: 'あおいさんの結婚式、絶対、最高にする。', en: 'Aoi\'s wedding — absolutely, make it the best.', style: 'Romantic warm bright sincere committed-warm promise, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: '皆で、応援しに行きますね。', en: 'All of us — will go to cheer.', style: 'Teacher warm gentle sincere committed-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'お互いに、人生で大事な瞬間、見守れて、すごく感謝。', en: 'Mutually, witnessing important life moments — really grateful.', style: 'Office woman warm soft sincere deep-warm philosophical-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: 'こちらこそ。皆、ずっと、よろしくね。', en: 'Same. Everyone — always, please.', style: 'Soft dreamy barista warm soft tender sincere-deep-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 428 — ren + naoko (medium)
  {
    id: 'conv_00428',
    context: 'Ren visits Aoi\'s friend Naoko alone before his own wedding — seeking blessing.',
    purpose: 'young man seeking older woman blessing — careful warmth',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['結婚式', '感謝', 'お祝い', '一緒', '幸せ'],
    cast: ['ren_uni', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'ナオコさん、お時間、ありがとうございます。', en: 'Naoko-san, thank you for the time.', style: 'University student warm soft formal sincere-respectful-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。れんくんと、ゆっくり話せる、嬉しいわ。', en: 'Same. Glad to talk slowly with you, Ren-kun.', style: 'Aunt warm gentle bright sincere-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'ren_uni', jp: 'あおいの結婚式、ちゃんと、報告したくて。', en: 'Aoi\'s wedding — wanted to report properly.', style: 'University student warm soft sincere careful-warm respectful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'naoko_aunt', jp: 'あおいさん、本当に、いい人ね。れんくんと、お似合い。', en: 'Aoi-san — truly a good person. Suits you, Ren-kun.', style: 'Aunt warm gentle sincere-warm affirming-blessing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: 'ありがとうございます。あおい、ナオコさんと話せて、すごく安心してました。', en: 'Thank you. Aoi felt reassured talking with you.', style: 'University student warm soft sincere deep-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'いえいえ。お互い、いつでも、頼ってきていいから。', en: 'No, no. Either of you, rely on me anytime.', style: 'Aunt warm soft sincere generous-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'ren_uni', jp: '本当に、感謝しています。家族みたいで。', en: 'Truly grateful. Like family.', style: 'University student warm soft sincere deep-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'これからも、幸せに、ね。', en: 'From now on, be happy.', style: 'Aunt warm soft sincere tender-warm closing-blessing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-blessing' }
    ]
  },
  // 429 — riku + saito (short)
  {
    id: 'conv_00429',
    context: 'Riku does an annual checkup at Dr. Saito\'s. Now adult, comfortable.',
    purpose: 'small adult health check — long-rapport',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['元気', '生活', '健康', '注意', '感謝'],
    cast: ['saito_doctor', 'riku_teen'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'リクさん、年に一度の検診ですね。', en: 'Riku-san, annual checkup.', style: 'Doctor warm professional gentle sincere-warm opening, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'riku_teen', jp: 'はい、よろしくお願いします。', en: 'Yes, please.', style: 'Teen warm soft formal sincere-respectful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'respectfully-warm' },
      { speaker: 'saito_doctor', jp: '生活、ちゃんとできてますか。', en: 'Daily life — going well?', style: 'Doctor warm professional gentle sincere-warm careful-asking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'riku_teen', jp: 'ちゃんと、寝てます。食事も、気を付けてます。', en: 'Sleeping properly. Watching meals too.', style: 'Teen warm soft sincere proud-warm reporting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-proud' },
      { speaker: 'saito_doctor', jp: '結果、本当に元気ですよ。立派です。', en: 'Result — truly healthy. Splendid.', style: 'Doctor warm professional gentle sincere-warm praising-closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '本当に感謝してます。', en: 'Truly grateful.', style: 'Teen warm soft sincere deep-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 430 — tatsuya + sachiko (medium)
  {
    id: 'conv_00430',
    context: 'Tatsuya brings autumn vegetables to widowed Sachiko in the city.',
    purpose: 'small country-city extended-family warmth',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['野菜', '畑', '元気', '感謝', '一人'],
    cast: ['tatsuya_country', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'おばさん、ご無沙汰してます。', en: 'Auntie, sorry for the long absence.', style: 'Country gruff warm formal-rural sincere-warm visiting-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-rural' },
      { speaker: 'sachiko_grandma', jp: 'まあ、達也ちゃん、わざわざ。', en: 'My, Tatsuya-chan, going out of your way.', style: 'Soft grandmother warm gentle bright touched-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-touched' },
      { speaker: 'tatsuya_country', jp: '畑の野菜、いっぱい持ってきました。', en: 'Lots of veggies from the field.', style: 'Country gruff warm sincere generous-rural-warm offering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-generous' },
      { speaker: 'sachiko_grandma', jp: 'こんなにたくさん。本当にありがとう。', en: 'So much. Truly thank you.', style: 'Soft grandmother warm soft sincere deep-warm grateful-touched, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-touched' },
      { speaker: 'tatsuya_country', jp: 'おばさん、一人で、無理してませんか。', en: 'Auntie, alone — not overdoing it?', style: 'Country gruff warm gentle sincere-warm care-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-caring' },
      { speaker: 'sachiko_grandma', jp: 'なおこが、よく来てくれて。安心して暮らしてます。', en: 'Naoko comes often. Living with peace.', style: 'Soft grandmother warm soft sincere reassuring-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'いつでも、田舎、遊びにきてくださいね。', en: 'Anytime, come to the country.', style: 'Country gruff warm sincere generous-warm extending closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'sachiko_grandma', jp: '達也ちゃん、本当に優しいわ。ありがとう。', en: 'Tatsuya-chan, truly kind. Thank you.', style: 'Soft grandmother warm soft sincere deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 431 — daichi + ryosuke, son-in-law style (long)
  {
    id: 'conv_00431',
    context: 'Daichi, now married into the connected family, sits with Ryosuke (his elder figure) over a drink.',
    purpose: 'long deeper man-to-man — adult mentor relationship deepening',
    ambient: 'izakaya_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '感謝', '将来', '相談', '尊敬'],
    cast: ['daichi_kansai', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '亮介さん、誘ってもろて、ありがとうございます。', en: 'Ryosuke-san, thanks for the invitation.', style: 'Kansai warm soft sincere formal-warm appreciative, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。改めて、ご結婚、おめでとうございます。', en: 'Same. Again, congratulations on the marriage.', style: 'Father warm formal sincere-warm congratulating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'daichi_kansai', jp: 'ありがとうございます。皆さんのお陰で。', en: 'Thank you. Thanks to everyone.', style: 'Kansai warm soft sincere humble-warm gratitude, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'ryosuke_dad', jp: 'これから、家族の一員として、よろしくお願いします。', en: 'From now on, as part of family, please.', style: 'Father warm gentle sincere-warm welcoming-formal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '亮介さんに、ずっと、本当に支えてもろて。', en: 'Ryosuke-san — always truly supported by you.', style: 'Kansai warm soft sincere deep-warm grateful-disclosure, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。達也さんから、私も学ぶことばかり。', en: 'Same. From you, Tatsuya, I learn a lot.', style: 'Father warm gentle humble sincere-warm reciprocal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'daichi_kansai', jp: 'いやいや、わいは、亮介さんの落ち着き、ほんま尊敬してます。', en: 'No, no — I truly respect your calmness, Ryosuke-san.', style: 'Kansai warm soft sincere deep-warm respectful-disclosure, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'ryosuke_dad', jp: 'お互い、ね。これから、子供のこととか、いろいろあるだろう。', en: 'Mutually. From now on, lots of things — children and such.', style: 'Father warm gentle sincere-warm forward-thinking-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-forward' },
      { speaker: 'daichi_kansai', jp: 'メイちゃんとも、ゆっくり話していこと思てます。', en: 'With Mei-chan too — thinking of talking slowly.', style: 'Kansai warm soft sincere thoughtful-warm sharing-plans, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'ryosuke_dad', jp: '困った時は、いつでも、相談してください。', en: 'When in trouble, anytime, please consult.', style: 'Father warm gentle sincere generous-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'daichi_kansai', jp: '本当に、ありがとうございます。心強いです。', en: 'Truly thank you. Reassuring.', style: 'Kansai warm soft sincere deep-warm closing-grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。長く、お付き合いしましょう。', en: 'Same. Long association, let\'s have.', style: 'Father warm gentle sincere closing-warm extending-future, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-extending' },
      { speaker: 'daichi_kansai', jp: 'もう一杯、いきましょか。', en: 'Another round?', style: 'Kansai warm bright sincere closing-warm extending, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: '是非。', en: 'Please.', style: 'Father warm sincere brief warm-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 432 — hina + yumiko + sho (3-speaker, medium)
  {
    id: 'conv_00432',
    context: 'A family dinner. Yumiko, Hina, and Sho share food and small talk.',
    purpose: 'family-domestic warmth — small ordinary connection',
    ambient: 'dining_room_evening',
    sound_effects: [],
    target_vocab: ['ご飯', '美味しい', '家族', '一緒', '楽しい'],
    cast: ['yumiko_mom', 'hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: '今日のご飯、皆、いただきましょう。', en: 'Today\'s meal, all — let\'s eat.', style: 'Maternal warm gentle bright sincere-warm family-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'hina_child', jp: 'いっただきまーす！カレー、大好き！', en: 'Itadakimasu! Curry, love it!', style: 'High child bright sincere enthusiastic-warm celebrating, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '…いただきます。美味しい。', en: '…Itadakimasu. Delicious.', style: 'Tiny six-year-old soft small sincere-warm gentle appreciative, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-appreciative' },
      { speaker: 'yumiko_mom', jp: 'ふふ、嬉しいわ。皆で食べると、もっと美味しい。', en: 'Hehe, happy. Eating with all — more delicious.', style: 'Maternal warm gentle laughing tender-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-laughing' },
      { speaker: 'hina_child', jp: 'お母さん、今日、何で楽しそうなの？', en: 'Mom, why are you so happy today?', style: 'High child bright curious sincere-warm asking, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'brightly-curious' },
      { speaker: 'yumiko_mom', jp: '家族、皆、元気だから。それが一番、嬉しい。', en: 'Family, all healthy. That\'s the happiest.', style: 'Maternal warm soft sincere deep-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sho_child', jp: '…ぼくも、嬉しい。', en: '…Me, too, happy.', style: 'Tiny six-year-old soft small sincere-warm tender-matching, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-tender' },
      { speaker: 'hina_child', jp: 'ひなも！一緒のご飯、最高！', en: 'Hina too! Meals together — the best!', style: 'High child bright sincere energetic-warm celebrating-closing, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 433 — takeda + mrs_mori (short)
  {
    id: 'conv_00433',
    context: 'Officer Takeda checks in with Mrs. Mori at her doorstep on a regular weekly patrol.',
    purpose: 'small civic familiar rhythm — neighborhood routine',
    ambient: 'genkan_afternoon',
    sound_effects: [],
    target_vocab: ['元気', '近所', '安心', 'ありがとう', '見守る'],
    cast: ['takeda_officer', 'mrs_mori_neighbor'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: '森さん、こんにちは。お変わりありませんか。', en: 'Mori-san, hello. Anything changed?', style: 'Officer warm professional gentle civic-warm routine-opening, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-civic' },
      { speaker: 'mrs_mori_neighbor', jp: 'いつもありがとう。お元気ですか、武田さん。', en: 'Always thank you. Are you well, Takeda-san?', style: 'Neighbor warm gentle bright sincere-warm reciprocal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'takeda_officer', jp: 'お陰様で。ご近所も、皆さんお元気そうで。', en: 'Thanks to you. Neighborhood — all seem well.', style: 'Officer warm professional gentle sincere-warm civic-reporting, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '武田さんが見守ってくれてるから、本当に安心。', en: 'Because you watch over — truly reassuring.', style: 'Neighbor warm gentle sincere deep-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'takeda_officer', jp: 'こちらこそ。何かあれば、いつでも。', en: 'Same. If anything — anytime.', style: 'Officer warm gentle sincere generous-warm closing-extending, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-extending' }
    ]
  },
  // 434 — aoi + ren post-wedding (long)
  {
    id: 'conv_00434',
    context: 'Aoi and Ren have just gotten married. Quiet evening together in their new shared apartment.',
    purpose: 'newlywed quiet — careful start of married life',
    ambient: 'apartment_evening',
    sound_effects: [],
    target_vocab: ['結婚式', '家族', '一緒', '感謝', '幸せ', '将来'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'あおい、結婚式、すごく綺麗だったよ。', en: 'Aoi, the wedding was really beautiful.', style: 'University student warm soft tender deep sincere-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'aoi_barista', jp: 'ありがとう。れんと一緒に立てて、本当に幸せだった。', en: 'Thank you. Standing with Ren — truly happy.', style: 'Soft dreamy barista warm soft tender deep sincere-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sincere' },
      { speaker: 'ren_uni', jp: '家族みんなが、来てくれて、本当にありがたかった。', en: 'All family coming — truly grateful.', style: 'University student warm soft sincere deep-warm reflective-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: 'お父さん、見てくれてたかな。', en: 'I wonder if dad watched.', style: 'Soft dreamy barista warm soft tender vulnerable-warm wondering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-wondering' },
      { speaker: 'ren_uni', jp: 'うん、絶対、見てた。あおいの父さん、笑ってたはず。', en: 'Yes, definitely watched. Your dad must have smiled.', style: 'University student warm soft tender sincere-warm firm-believing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-believing' },
      { speaker: 'aoi_barista', jp: 'うん…私も、そう思いたい。', en: 'Yes… I want to believe so.', style: 'Soft dreamy barista warm soft tender sincere-warm vulnerable-hope, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-hopeful' },
      { speaker: 'ren_uni', jp: 'これから、二人で、ゆっくり家庭、作っていこう。', en: 'From now on, let\'s slowly build a home together.', style: 'University student warm soft tender sincere-warm extending-future, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-extending' },
      { speaker: 'aoi_barista', jp: 'うん。私、本当に、れんと結婚できて、嬉しい。', en: 'Yes. I, truly, happy to marry Ren.', style: 'Soft dreamy barista warm soft tender deep sincere-warm closing-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sincere' },
      { speaker: 'ren_uni', jp: '俺も。一生、大事にする。', en: 'Me too. Forever, I\'ll cherish.', style: 'University student warm soft tender deep sincere-warm committing-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: '将来、お子さんとか、考えるの、楽しみだね。', en: 'Future, thinking about children — looking forward.', style: 'Soft dreamy barista warm soft tender sincere-warm wondering-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-wondering' },
      { speaker: 'ren_uni', jp: 'うん。少しずつ、ね。', en: 'Yes. Bit by bit.', style: 'University student warm soft tender sincere-warm gentle-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'aoi_barista', jp: '感謝してる。本当に、れんに、出会えて、よかった。', en: 'Grateful. Truly, glad I met Ren.', style: 'Soft dreamy barista warm soft tender deep sincere-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'ren_uni', jp: 'こちらこそ。…幸せ。', en: 'Same. …Happy.', style: 'University student warm soft tender deep sincere-warm closing-brief, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 435 — yumiko + naoko, after first anniversary (long)
  {
    id: 'conv_00435',
    context: 'A year after Hiroshi-elder\'s passing. Yumiko and Naoko sit together quietly.',
    purpose: 'one-year mark grief — two women reflecting on shared loss',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['一年', '思い出', '感謝', '寂しい', '一緒', '時間'],
    cast: ['yumiko_mom', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'もう、一年経つのね。', en: 'Already, one year has passed.', style: 'Aunt warm soft tender deep reflective-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-reflective' },
      { speaker: 'yumiko_mom', jp: 'うん…早かった。けど、長かった。', en: 'Yes… quick. But long.', style: 'Maternal warm soft tender deep paradoxical-warm honest, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-paradoxical' },
      { speaker: 'naoko_aunt', jp: 'お父さん、毎日のように、思い出すわ。', en: 'Father — almost every day, I remember.', style: 'Aunt warm soft tender deep sincere-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: '私も。声、まだ、聞こえる気がする。', en: 'Me too. Voice — still feels like I hear.', style: 'Maternal warm soft tender deep vulnerable-warm honest, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-vulnerable' },
      { speaker: 'naoko_aunt', jp: 'お父さん、私たちのこと、いつも見てくれてる気がする。', en: 'Father — feels like he\'s always watching.', style: 'Aunt warm soft tender deep sincere-warm comforting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-comforting' },
      { speaker: 'yumiko_mom', jp: 'メイちゃんの結婚式も、ちゃんと見てくれたよね。', en: 'Mei-chan\'s wedding too — he watched properly.', style: 'Maternal warm soft tender sincere-warm reflecting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'naoko_aunt', jp: '形見の指輪、メイちゃんがしてくれてた。お父さん、絶対嬉しかった。', en: 'Mei wore the keepsake ring. Father absolutely was happy.', style: 'Aunt warm soft tender deep sincere-warm tender-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: '寂しいのは、ずっと、変わらないかもしれない。', en: 'The loneliness — may not change forever.', style: 'Maternal warm soft tender deep honest-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-honest' },
      { speaker: 'naoko_aunt', jp: 'うん。でも、こうやって、姉妹で話せるのは、本当に救い。', en: 'Yes. But, talking as sisters like this — truly a salvation.', style: 'Aunt warm soft tender deep sincere-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: 'お母さんも、ちゃんと、見守ってくれてる。', en: 'Mom too — watching over properly.', style: 'Maternal warm soft tender sincere-warm closing-comforting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'naoko_aunt', jp: '家族、皆で、ずっと、繋がっていけたら、ね。', en: 'Family — all, always, staying connected.', style: 'Aunt warm soft tender sincere-warm wishing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-wishing' },
      { speaker: 'yumiko_mom', jp: 'お父さん、本当に、ありがとう。', en: 'Father, truly, thank you.', style: 'Maternal warm soft tender deep sincere-warm closing-prayer, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'naoko_aunt', jp: 'うん。お父さん、本当にありがとう。', en: 'Yes. Father, truly thank you.', style: 'Aunt warm soft tender deep sincere-warm matching-closing-prayer, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 436 — riku + sakura + ren (3-speaker, medium)
  {
    id: 'conv_00436',
    context: 'All three young people are home during break. They sit around together.',
    purpose: 'three young adults adjusting to adulthood together',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['大学', '将来', '一緒', '楽しい', '友達'],
    cast: ['riku_teen', 'sakura_teen', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: '三人で集まれるの、いいな。', en: 'Gathering as three is nice.', style: 'University student warm soft sincere casual-warm appreciating-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '本当に。皆、大学生になって、改めて、家族の大切さを感じる。', en: 'Truly. All in college — feel family\'s importance fresh.', style: 'Teen warm soft sincere reflective-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'riku_teen', jp: '一人暮らしして、改めて、家、ありがたいわ。', en: 'Living alone, fresh appreciation for home.', style: 'Teen warm soft sincere honest-warm reflective-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'ren_uni', jp: '俺、もう結婚するからな。お互い、新しい段階や。', en: 'I\'m getting married now. New stages, both of us.', style: 'University student warm soft sincere bright-warm sharing-life-stage, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'お兄ちゃんの結婚式、絶対、行くね。', en: 'I\'ll definitely go to your wedding.', style: 'Teen warm bright sincere-warm committing-promising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: '俺も。すごく、楽しみ。', en: 'Me too. Really, looking forward.', style: 'Teen warm soft sincere bright-warm matching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: '将来、皆で集まれること、ずっと続くといいな。', en: 'In the future, if we keep gathering — would be good.', style: 'University student warm soft sincere wishing-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wishing' },
      { speaker: 'sakura_teen', jp: 'うん。家族って、こういう瞬間で、繋がってる。', en: 'Yes. Family connects through these moments.', style: 'Teen warm soft sincere reflective-warm closing-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'riku_teen', jp: 'ありがたい、皆と一緒で。', en: 'Grateful — with everyone.', style: 'Teen warm soft sincere brief-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 437 — hiroshi_boss + tatsuya, post-deal (medium)
  {
    id: 'conv_00437',
    context: 'Hiroshi-boss and Tatsuya share a quieter post-deal dinner. Friendship deepening.',
    purpose: 'business partners moving toward genuine friendship',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['仕事', '信頼', '感謝', '一緒', '友達'],
    cast: ['hiroshi_boss', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '達也さん、契約も、無事まとまって、安心しました。', en: 'Tatsuya-san, contract settled safely, relieved.', style: 'Boss measured warm formal sincere-warm professional-relieved, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ。長く、信頼してもろて、嬉しいです。', en: 'Same. Long trust — happy.', style: 'Country gruff warm formal sincere-warm reciprocal-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'hiroshi_boss', jp: '正直、最初は、お仕事の関係でしたが、今は、本当に友達のような気持ちで。', en: 'Honestly, at first business — now, like real friends.', style: 'Boss measured warm soft sincere-warm honest-deep-disclosure, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'わいも、田中さん、ほんま尊敬してます。', en: 'I too truly respect you, Tanaka-san.', style: 'Country gruff warm soft sincere-warm deep-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'これからも、ずっと、お付き合い、お願いします。', en: 'From now on too, long association, please.', style: 'Boss measured warm formal sincere-warm closing-extending, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'tatsuya_country', jp: 'もちろん。仕事抜きでも、お酒、ご一緒しましょ。', en: 'Of course. Beyond work, let\'s drink together.', style: 'Country gruff warm bright sincere-warm closing-extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: 'ぜひ、楽しみにしています。', en: 'Please, looking forward.', style: 'Boss measured warm sincere-warm closing-anticipating, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 438 — asuka + mrs_mori (short)
  {
    id: 'conv_00438',
    context: 'Asuka and Mrs. Mori run into each other at the local market.',
    purpose: 'small civil neighborly meeting',
    ambient: 'market_morning',
    sound_effects: [],
    target_vocab: ['買い物', '元気', '近所', '楽しい', 'ありがとう'],
    cast: ['asuka_teacher', 'mrs_mori_neighbor'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: 'まあ、あすか先生。お買い物？', en: 'Oh, Asuka-sensei. Shopping?', style: 'Neighbor warm gentle bright sincere-warm recognition, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'asuka_teacher', jp: '森さん、こんにちは。今日は、夕飯の準備で。', en: 'Mori-san, hello. Today, preparing dinner.', style: 'Teacher warm gentle sincere civil-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-civil' },
      { speaker: 'mrs_mori_neighbor', jp: '今日のお魚、すごく新鮮よ。', en: 'Today\'s fish — very fresh.', style: 'Neighbor warm gentle bright generous-warm sharing-tip, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-generous' },
      { speaker: 'asuka_teacher', jp: 'え、本当ですか。教えてもらえて嬉しい。', en: 'Eh, really? Glad you told me.', style: 'Teacher warm gentle bright sincere-warm grateful-appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mrs_mori_neighbor', jp: 'こうやって、近所同士、教え合えるって、ありがたいわ。', en: 'Neighbors sharing tips like this — grateful.', style: 'Neighbor warm gentle sincere-warm reflective-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '本当に。森さん、いつもありがとうございます。', en: 'Truly. Mori-san, always thank you.', style: 'Teacher warm gentle sincere-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 439 — daichi + mei, post-wedding settling (medium)
  {
    id: 'conv_00439',
    context: 'A month after the wedding. Daichi and Mei adjust to married life.',
    purpose: 'newlywed adjustment — small ordinary married life moment',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['結婚', '生活', '幸せ', '一緒', '感謝'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'メイちゃん、おはよう。よう眠れた？', en: 'Mei-chan, morning. Sleep well?', style: 'Kansai warm soft tender bright-warm domestic-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'mei_romantic', jp: 'おはよう。よく眠れた。達也、お味噌汁、作ってくれたの？', en: 'Morning. Slept well. Daichi, you made miso soup?', style: 'Romantic warm soft tender bright-warm touched-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-touched' },
      { speaker: 'daichi_kansai', jp: 'うん、初めて作ってみた。味、変じゃなかったらええんやけど。', en: 'Yeah, made for the first time. Hope taste isn\'t weird.', style: 'Kansai warm soft tender laughing-warm humble-disclosure, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-humble' },
      { speaker: 'mei_romantic', jp: 'すごく美味しい！本当に。', en: 'Really delicious! Truly.', style: 'Romantic warm soft tender bright sincere-warm appreciative, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '良かった。これから、もっと、いろいろ作れるようになりたい。', en: 'Glad. From now on, want to be able to make more.', style: 'Kansai warm soft sincere committed-warm growing-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '一緒に、覚えていこう。料理、楽しいよ。', en: 'Let\'s learn together. Cooking is fun.', style: 'Romantic warm soft sincere bright-warm inclusive-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: 'こういう生活、ほんまに、幸せやな。', en: 'Life like this — truly happy.', style: 'Kansai warm soft tender deep sincere-warm reflective-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: 'うん。毎日が、特別。本当に感謝してる。', en: 'Yes. Every day, special. Truly grateful.', style: 'Romantic warm soft tender deep sincere-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 440 — sho + ryosuke + yumiko (3-speaker, medium)
  {
    id: 'conv_00440',
    context: 'Sho asks his parents Ryosuke and Yumiko about his future grade. Family evening.',
    purpose: 'family domestic — child asking parents about school',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['学校', '頑張る', '一緒', '楽しみ', '応援'],
    cast: ['ryosuke_dad', 'yumiko_mom', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'お父さん、お母さん、来年、三年生だね。', en: 'Dad, mom, next year — third grade.', style: 'Tiny six-year-old soft small sincere-warm reflective-disclosure, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-sincere' },
      { speaker: 'yumiko_mom', jp: 'うん、もうすぐね。楽しみ？', en: 'Yes, soon. Looking forward?', style: 'Maternal warm gentle bright sincere-warm tender-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sho_child', jp: 'ちょっと、緊張する…。', en: 'A little, nervous…', style: 'Tiny six-year-old soft small careful honest-warm vulnerable, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-vulnerable' },
      { speaker: 'ryosuke_dad', jp: '大丈夫。少しずつ、慣れていくよ。', en: 'It\'s okay. Bit by bit, you\'ll get used.', style: 'Father warm gentle sincere reassuring-warm dad-care, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-reassuring' },
      { speaker: 'yumiko_mom', jp: 'お母さんも、お父さんも、ちゃんと応援してるから。', en: 'Mom and dad — cheering for you properly.', style: 'Maternal warm soft tender sincere-warm extending-care, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '…うん。皆と一緒、頑張る。', en: '…Yeah. With everyone, I\'ll try.', style: 'Tiny six-year-old soft small sincere-warm tender-warm closing-committed, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: 'えらい。お父さん、しょうの成長、本当に嬉しい。', en: 'Good. Dad — truly happy about Sho\'s growth.', style: 'Father warm soft tender deep sincere-warm proud-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 441 — naoko + sachiko (medium)
  {
    id: 'conv_00441',
    context: 'Naoko has come for her weekly visit to widowed Sachiko. They talk about what kinds of small adjustments are needed.',
    purpose: 'ongoing adult-daughter and widowed-mother care relationship',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['母', '一緒', '安心', '感謝', '元気'],
    cast: ['naoko_aunt', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'お母さん、今週、どう？', en: 'Mother, this week, how?', style: 'Aunt warm gentle soft sincere-warm family-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-warm' },
      { speaker: 'sachiko_grandma', jp: 'おかげさまで。なおこが来てくれると、ほっとする。', en: 'Thanks to you. Naoko coming — I relax.', style: 'Soft grandmother warm soft sincere deep-warm grateful-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-grateful' },
      { speaker: 'naoko_aunt', jp: '何か、不便なこと、ある？', en: 'Anything inconvenient?', style: 'Aunt warm gentle sincere careful-warm practical-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'sachiko_grandma', jp: '重いもの、運ぶの、少し、辛くなってきた。', en: 'Heavy things — carrying gets a little hard.', style: 'Soft grandmother warm soft sincere honest-warm vulnerable-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-honest' },
      { speaker: 'naoko_aunt', jp: 'うん、わかった。私が、毎週、買い物、まとめてやるね。', en: 'Yes, understood. I\'ll batch the shopping every week.', style: 'Aunt warm gentle sincere committed-warm practical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'sachiko_grandma', jp: '本当にいいの？助かるわ。', en: 'Truly? Saves me.', style: 'Soft grandmother warm soft sincere touched-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-touched' },
      { speaker: 'naoko_aunt', jp: '当然。家族でしょ。', en: 'Of course. We\'re family.', style: 'Aunt warm gentle sincere firm-warm closing-loving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-firm' },
      { speaker: 'sachiko_grandma', jp: 'ありがとう…本当に、ありがとう。', en: 'Thank you… truly, thank you.', style: 'Soft grandmother warm soft tender deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 442 — kenji + daichi (short)
  {
    id: 'conv_00442',
    context: 'Kenji and Daichi run into each other at lunch. Daichi is now married; Kenji updates briefly.',
    purpose: 'small workplace-friend continued warmth',
    ambient: 'restaurant_lunch',
    sound_effects: [],
    target_vocab: ['仕事', '結婚', '幸せ', '一緒', '友達'],
    cast: ['kenji_office', 'daichi_kansai'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'だいちさん、お元気ですか。', en: 'Daichi-san, are you well?', style: 'Salaryman warm formal sincere casual-warm opening, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'daichi_kansai', jp: 'けんじさん、お久しぶり。お陰様で、結婚してから、毎日幸せやで。', en: 'Kenji-san, long time. Thanks to all — every day happy since marriage.', style: 'Kansai warm bright sincere-warm reporting-life, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '本当に何より。仕事も、変わらず、頑張ってますか。', en: 'Truly the best news. Work — still going hard?', style: 'Salaryman warm gentle sincere bright-warm follow-up, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: 'うん、お陰様で、順調。', en: 'Yes, thanks to all — going well.', style: 'Kansai warm bright sincere-warm sharing-positive, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '今度、皆で集まりましょう。', en: 'Let\'s gather as everyone next time.', style: 'Salaryman warm sincere bright-warm closing-extending, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ぜひ。楽しみにしてるわ。', en: 'Please. Looking forward.', style: 'Kansai warm bright sincere closing-warm extending-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 443 — hina + sho + naoko + sachiko (4-speaker, long)
  {
    id: 'conv_00443',
    context: 'Naoko brings Hina and Sho to visit Sachiko. Four-generation gathering becomes a quiet warm afternoon.',
    purpose: 'four-generation family gathering — multi-age warmth',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['お祖母様', '一緒', '家族', '思い出', '楽しい', '優しい'],
    cast: ['naoko_aunt', 'sachiko_grandma', 'hina_child', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'お母さん、ひなとしょう、連れてきたよ。', en: 'Mother, brought Hina and Sho.', style: 'Aunt warm gentle bright sincere-warm family-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sachiko_grandma', jp: 'まあ、皆、よく来てくれて。', en: 'My, everyone — glad you came.', style: 'Soft grandmother warm soft tender bright-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'お祖母様、こんにちは！', en: 'Grandmother, hello!', style: 'High child bright sincere enthusiastic-warm greeting, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '…こんにちは、お祖母様。', en: '…Hello, grandmother.', style: 'Tiny six-year-old soft small careful polite-warm greeting, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-careful' },
      { speaker: 'sachiko_grandma', jp: '二人とも、大きくなったね。お祖母ちゃん、嬉しい。', en: 'Both of you — grown. Grandma\'s happy.', style: 'Soft grandmother warm soft sincere deep-warm touched-loving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-loving' },
      { speaker: 'naoko_aunt', jp: 'お母さんの顔、見られて、子供たちも嬉しいね。', en: 'Seeing your face — the children are happy too.', style: 'Aunt warm gentle sincere-warm family-bridging-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-tender' },
      { speaker: 'hina_child', jp: 'お祖母様、おじいちゃんの話、聞かせて！', en: 'Grandmother, tell us about grandpa!', style: 'High child bright eager sincere-warm enthusiastic-asking, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'eagerly-bright' },
      { speaker: 'sachiko_grandma', jp: 'おじいちゃんね、ひなと、よく公園で、遊んでくれたね。', en: 'Grandpa often played with Hina at the park.', style: 'Soft grandmother warm soft tender deep-warm memory-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-memory' },
      { speaker: 'sho_child', jp: 'おじいちゃん、ぼくにも、木のおもちゃ、作ってくれた。', en: 'Grandpa made wooden toys for me too.', style: 'Tiny six-year-old soft small sincere-warm tender-memory, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'naoko_aunt', jp: 'お父さん、子供たちが、ずっと覚えててくれる。本当に幸せね。', en: 'Father — the children remember always. Truly happy.', style: 'Aunt warm soft tender sincere-warm reflective-comforting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: 'こうやって、思い出が、家族で繋がっていく。', en: 'Memories connecting through family like this.', style: 'Soft grandmother warm soft tender deep-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-philosophical' },
      { speaker: 'hina_child', jp: 'お祖母様、いつも優しい。', en: 'Grandmother, always kind.', style: 'High child bright sincere-warm tender-disclosure, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sho_child', jp: '…大好き。', en: '…I love you.', style: 'Tiny six-year-old soft small sincere-warm tender-deep-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: 'お祖母ちゃんも、二人、大好きよ。', en: 'Grandma loves you both too.', style: 'Soft grandmother warm soft tender deep sincere-warm closing-loving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'naoko_aunt', jp: 'こうやって、皆で過ごす時間、本当に大事ね。', en: 'Time spent like this together — truly important.', style: 'Aunt warm soft tender deep sincere-warm closing-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

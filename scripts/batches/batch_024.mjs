import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_024)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 464 — kenji + yuki, weather small talk (short)
  {
    id: 'conv_00464',
    context: 'A rainy morning at the office. Yuki and Kenji at the coffee machine.',
    purpose: 'small office weather chit-chat',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['雨', '寒い', '傘', '帰り', '気を付ける'].filter(w => w !== '気を付ける').concat(['注意']),
    cast: ['yuki_office', 'kenji_office'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'おはよう。今日、雨、すごいね。', en: 'Morning. Today, the rain is intense.', style: 'Office woman warm gentle bright casual-warm weather-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'casually-bright' },
      { speaker: 'kenji_office', jp: 'おはようございます。傘、持ってきました？', en: 'Good morning. Did you bring umbrella?', style: 'Salaryman warm formal sincere casual-warm professional-asking, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'professionally-casual' },
      { speaker: 'yuki_office', jp: 'うん、忘れず。帰り、もっと降りそう。', en: 'Yes, didn\'t forget. Going home, looks worse.', style: 'Office woman warm soft sincere-warm practical-observation, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-practical' },
      { speaker: 'kenji_office', jp: '寒くなってきましたね。風邪、気を付けてください。', en: 'Getting cold. Watch out for colds.', style: 'Salaryman warm gentle sincere-warm careful-warm closing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'gently-warm' },
      { speaker: 'yuki_office', jp: 'ありがとう。田中さんも、気を付けて。', en: 'Thanks. Tanaka-san, take care too.', style: 'Office woman warm soft sincere closing-warm reciprocal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 465 — mei + daichi, evening walk (medium)
  {
    id: 'conv_00465',
    context: 'Mei and Daichi take a walk after dinner. They talk about the future quietly.',
    purpose: 'married couple evening walk — small intimate planning',
    ambient: 'street_evening',
    sound_effects: [],
    target_vocab: ['散歩', '一緒', '将来', '子供', '考える'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'メイちゃん、夜の散歩、いいな。', en: 'Mei-chan, evening walk is nice.', style: 'Kansai warm soft tender bright-warm couple-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'mei_romantic', jp: 'うん、こうやって、二人で歩く時間、好き。', en: 'Yes, time walking together — I love.', style: 'Romantic warm soft tender sincere-warm matching-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'daichi_kansai', jp: '最近、子供のこと、ちょっと、考えるようになって。', en: 'Lately, started thinking about children.', style: 'Kansai warm soft sincere brave-careful-warm sharing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'carefully-brave' },
      { speaker: 'mei_romantic', jp: '私も。なんとなく、最近、すごく感じる。', en: 'Me too. Somehow, lately, really feel.', style: 'Romantic warm soft sincere matching-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'daichi_kansai', jp: 'まあ、急がないでもええんやけど。一緒に、ゆっくり、考えていこな。', en: 'No rush though. Let\'s think slowly together.', style: 'Kansai warm soft sincere thoughtful-warm extending-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'mei_romantic', jp: 'うん、達也と一緒なら、何でも、嬉しい。', en: 'Yes, with Daichi, anything makes me happy.', style: 'Romantic warm soft sincere deep-warm closing-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'daichi_kansai', jp: 'ほんま、わいも、メイちゃんといると、毎日幸せ。', en: 'Truly, being with Mei-chan — happy every day.', style: 'Kansai warm soft sincere deep-warm closing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 466 — sho + goro_grandpa (medium)
  {
    id: 'conv_00466',
    context: 'Sho visits Goro (his other grandfather — Yumiko\'s father). Quiet handcraft moment.',
    purpose: 'small grandfather-grandson woodworking',
    ambient: 'workshop_afternoon',
    sound_effects: [],
    target_vocab: ['作る', '木', '一緒', '優しい', 'ありがとう'],
    cast: ['goro_grandpa', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'goro_grandpa', jp: 'しょう、今日は、おじいちゃんと一緒に、何か作ろうか。', en: 'Sho, today — shall we make something with grandpa?', style: 'Slow grandpa warm gentle tender-warm welcoming-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sho_child', jp: 'うん、何作る？', en: 'Yes, what to make?', style: 'Tiny six-year-old soft small sincere bright-warm engaged-asking, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-engaged' },
      { speaker: 'goro_grandpa', jp: '小さい船、作ろうか。木でな。', en: 'A small boat — with wood.', style: 'Slow grandpa warm gentle bright-warm suggesting-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sho_child', jp: 'すごい！おじいちゃん、お船作れるの？', en: 'Wow! Grandpa, you can make boats?', style: 'Tiny six-year-old soft small bright admiring-warm asking, the small real warmth audible, soft small warmth throughout delivery.', mood: 'brightly-admiring' },
      { speaker: 'goro_grandpa', jp: 'うん、お母さんが、しょうくらいの時にも、作ってあげた。', en: 'Yes, when your mother was your age, made one too.', style: 'Slow grandpa warm soft tender-warm memory-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sho_child', jp: 'お母さんに、見せたい。', en: 'Want to show mom.', style: 'Tiny six-year-old soft small sincere-warm tender-warm wishing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'goro_grandpa', jp: 'うん、きっと、喜ぶ。さあ、始めよう。', en: 'Yes, will surely be happy. Let\'s start.', style: 'Slow grandpa warm gentle bright-warm leading-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'おじいちゃん、優しい。ありがとう。', en: 'Grandpa, kind. Thank you.', style: 'Tiny six-year-old soft small sincere tender-warm closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 467 — sakura + ren (short)
  {
    id: 'conv_00467',
    context: 'Sakura visits Ren and Aoi\'s new home for the first time after their wedding.',
    purpose: 'small cousin-visit-newlywed home',
    ambient: 'apartment_afternoon',
    sound_effects: [],
    target_vocab: ['お邪魔', '家', '一緒', '幸せ', 'ありがとう'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'お邪魔します。素敵なお家。', en: 'Excuse the intrusion. Lovely home.', style: 'Teen warm soft sincere bright-warm civil-visiting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'いらっしゃい。あおいと、ゆっくり、整えてきた。', en: 'Welcome. Slowly arranged with Aoi.', style: 'University student warm soft sincere proud-warm sharing-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-proud' },
      { speaker: 'sakura_teen', jp: 'あおいさんと、二人、本当に幸せそうで、嬉しい。', en: 'With Aoi-san — both look truly happy. Glad.', style: 'Teen warm soft sincere bright-warm observing-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'ありがとう。さくらも、また、いつでも来てな。', en: 'Thanks. Sakura, come anytime.', style: 'University student warm soft sincere-warm generous-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'sakura_teen', jp: 'うん、絶対。家族で、また集まろうね。', en: 'Yes, definitely. Let\'s gather as family.', style: 'Teen warm soft sincere bright-warm closing-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 468 — naoko + ryosuke (medium)
  {
    id: 'conv_00468',
    context: 'Naoko and Ryosuke discuss arrangements for widowed Sachiko\'s care.',
    purpose: 'two adult relatives coordinating elder care',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['母', '見守る', '協力', '相談', '感謝'],
    cast: ['naoko_aunt', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: '亮介さん、お時間、ありがとうございます。', en: 'Ryosuke-san, thank you for the time.', style: 'Aunt warm soft formal sincere-warm civil-respectful opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-warm' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。お母様のこと、相談、ぜひ。', en: 'Same. About mother, consultation — please.', style: 'Father warm gentle sincere-warm family-receiving-open, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-warm' },
      { speaker: 'naoko_aunt', jp: '最近、母、ちょっと体調、不安定で。', en: 'Lately, mother — slightly unstable health.', style: 'Aunt warm soft sincere honest-warm careful-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'ryosuke_dad', jp: 'うん、ゆみこも、ずっと気にかけてました。', en: 'Yes, Yumiko too, has been worrying.', style: 'Father warm gentle sincere-warm matching-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '私と、ゆみこと、亮介さん、お兄さん、皆で、ちゃんと、見守っていきたい。', en: 'Me, Yumiko, you, brother — all, let\'s watch over properly.', style: 'Aunt warm soft sincere committed-warm collaborative-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-collaborative' },
      { speaker: 'ryosuke_dad', jp: 'もちろん。役割、しっかり、分担しましょう。', en: 'Of course. Roles — let\'s divide firmly.', style: 'Father warm gentle sincere-warm practical-warm committing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-practical' },
      { speaker: 'naoko_aunt', jp: '本当に、家族で支えられて、ありがたい。', en: 'Truly, supported as family — grateful.', style: 'Aunt warm soft sincere deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。協力していきましょう。', en: 'Same. Let\'s cooperate.', style: 'Father warm gentle sincere-warm closing-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 469 — riku + asuka (long)
  {
    id: 'conv_00469',
    context: 'Riku visits his former teacher Asuka, now as a working adult himself. Long catch-up.',
    purpose: 'former student turned adult — closing the mentor circle',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['仕事', '社会人', '感謝', '成長', '応援', '将来'],
    cast: ['asuka_teacher', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: '先生、ご無沙汰してます。', en: 'Sensei, sorry for the long silence.', style: 'Teen warm soft sincere formal-respectful-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'asuka_teacher', jp: 'リクさん！もう、社会人ね。立派になって。', en: 'Riku-san! Already a working adult. Splendid.', style: 'Teacher warm bright sincere touched-warm welcoming-recognition, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: 'おかげさまで。先日、お話、聞いてもらったお陰で、いい会社、選べました。', en: 'Thanks to all. Thanks to talking with you — chose a good company.', style: 'Teen warm soft sincere deep-warm grateful-redirecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'お父様の助言、効きましたね。', en: 'Your dad\'s advice — worked.', style: 'Teacher warm gentle sincere-warm acknowledging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'お父さんも、先生も、本当にいい先輩で。', en: 'Dad and sensei — truly good seniors.', style: 'Teen warm soft sincere deep-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'リクさん、社会人生活、どうですか。', en: 'Riku-san, working life — how?', style: 'Teacher warm gentle sincere-warm curious-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-curious' },
      { speaker: 'riku_teen', jp: '想像以上に、大変ですけど、毎日、学んでます。', en: 'Tougher than imagined, but learning daily.', style: 'Teen warm soft sincere honest-balanced-warm growth-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-balanced' },
      { speaker: 'asuka_teacher', jp: 'それが、一番大事。リクさんなら、ちゃんと、成長していける。', en: 'That\'s most important. You can grow properly.', style: 'Teacher warm gentle sincere-warm believing-encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-believing' },
      { speaker: 'riku_teen', jp: '先生に、こうやって、また会えるの、すごく嬉しい。', en: 'Meeting sensei again like this — truly happy.', style: 'Teen warm soft sincere deep-warm grateful-touched, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'これからも、いつでも、相談しに来てね。', en: 'From now on too, come consult anytime.', style: 'Teacher warm gentle sincere generous-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'riku_teen', jp: '本当に、感謝してます。一生、忘れません。', en: 'Truly grateful. Won\'t forget forever.', style: 'Teen warm soft sincere deep-warm tender-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '応援してる。リクさんの将来、楽しみにしてます。', en: 'Cheering for you. Looking forward to your future.', style: 'Teacher warm soft sincere deep-warm extending-closing-blessing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 470 — yumiko + sachiko + naoko (3-speaker, long)
  {
    id: 'conv_00470',
    context: 'On the anniversary of Hiroshi-elder\'s death. Three women — wife, two daughters — sit together for tea.',
    purpose: 'three-female annual-grief — quiet shared remembering',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['母', '父', '思い出', '一緒', '感謝', '寂しい'],
    cast: ['sachiko_grandma', 'yumiko_mom', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: '今日は、お父さんの命日ね。皆、来てくれて、ありがとう。', en: 'Today is father\'s anniversary. Thank you all for coming.', style: 'Soft grandmother warm soft tender deep-warm grateful-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: 'お母さん、毎年、こうやって、皆で集まれて、嬉しい。', en: 'Mother, every year, gathering like this — happy.', style: 'Maternal warm soft tender sincere-warm family-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'naoko_aunt', jp: '私も。お父さん、絶対、見てくれてる。', en: 'Me too. Father — definitely watching.', style: 'Aunt warm soft tender sincere-warm believing-comforting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-believing' },
      { speaker: 'sachiko_grandma', jp: 'もう、何年経っても、寂しさは、変わらないけど。', en: 'No matter how many years, loneliness — doesn\'t change but.', style: 'Soft grandmother warm soft tender deep-warm honest-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-honest' },
      { speaker: 'yumiko_mom', jp: 'お父さんとの思い出、心の中で、ずっと、生きてるから。', en: 'Memories with father — alive in our hearts forever.', style: 'Maternal warm soft tender sincere-warm philosophical-comforting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-comforting' },
      { speaker: 'naoko_aunt', jp: 'お父さん、メイちゃんの結婚式も、見てくれた。指輪、ずっと、メイがしてる。', en: 'Father saw Mei\'s wedding too. The ring — Mei keeps wearing.', style: 'Aunt warm soft tender sincere-warm reflective-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-reflective' },
      { speaker: 'sachiko_grandma', jp: '形見が、こうやって、繋がっていくの、本当に、嬉しいわね。', en: 'Keepsake connecting like this — truly happy.', style: 'Soft grandmother warm soft tender deep-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: '孫たちも、よく、おじいちゃんの話、するんですよ。', en: 'Grandchildren — often talk about grandpa.', style: 'Maternal warm soft tender sincere-warm sharing-warm bright, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sachiko_grandma', jp: 'お父さん、絶対、嬉しいわ。', en: 'Father — surely happy.', style: 'Soft grandmother warm soft tender sincere-warm comforting-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'naoko_aunt', jp: '私たち、家族、ずっと、繋がっていけたらいいな。', en: 'Us, family — let\'s stay connected forever.', style: 'Aunt warm soft tender sincere-warm wishing-extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-wishing' },
      { speaker: 'yumiko_mom', jp: 'お父さん、ありがとう。ずっと、私たち、見てくれてる。', en: 'Father, thank you. Always watching us.', style: 'Maternal warm soft tender sincere-warm closing-prayer-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: '皆で、お線香、上げましょうか。', en: 'Shall we offer incense together?', style: 'Soft grandmother warm soft tender sincere-warm closing-leading-ritual, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-leading' },
      { speaker: 'naoko_aunt', jp: 'うん、お父さんと、お話、しよう。', en: 'Yes, let\'s talk with father.', style: 'Aunt warm soft tender sincere-warm closing-matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 471 — daichi + tatsuya (medium)
  {
    id: 'conv_00471',
    context: 'Daichi visits Tatsuya country house. They\'ve become like brothers-in-law through the connected family.',
    purpose: 'two Kansai-rural men deepening — careful adult warmth',
    ambient: 'farm_porch_evening',
    sound_effects: [],
    target_vocab: ['田舎', '一緒', '感謝', '家族', '将来'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '達也さん、いつもありがとうございます。', en: 'Tatsuya-san, always thank you.', style: 'Kansai warm soft formal sincere-warm visiting-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'tatsuya_country', jp: 'よう来てくれて。お酒、用意したで。', en: 'Glad you came. Sake ready.', style: 'Country gruff warm bright sincere-warm generous-rural welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-warm' },
      { speaker: 'daichi_kansai', jp: 'メイちゃんと、結婚してから、家族が、ほんま、広がりました。', en: 'Since marrying Mei — family truly expanded.', style: 'Kansai warm soft sincere bright-warm reflective-warm sharing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'ほんま、そうやな。皆、一緒の家族や。', en: 'Truly, that\'s right. All one family.', style: 'Country gruff warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '将来、子供できたら、田舎、連れてきたいわ。', en: 'In the future, when children come — want to bring to country.', style: 'Kansai warm soft sincere bright-warm extending-future-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'いつでも、待ってる。畑、見せたい、子供たちに。', en: 'Anytime, waiting. Want to show fields to children.', style: 'Country gruff warm soft sincere-warm tender-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '本当に、感謝してます。', en: 'Truly, grateful.', style: 'Kansai warm soft sincere deep-warm closing-grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ。乾杯しよか。', en: 'Same. Let\'s cheers.', style: 'Country gruff warm soft sincere-warm closing-warm gathering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 472 — aoi + sho (short)
  {
    id: 'conv_00472',
    context: 'Aoi sees little Sho with his older cousin at the café. Quick child interaction.',
    purpose: 'small barista-child kindness — ongoing acquaintance',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['ジュース', '元気', '大きい', '優しい', 'ありがとう'],
    cast: ['aoi_barista', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'しょうくん、こんにちは。大きくなったね。', en: 'Sho-kun, hello. You\'ve grown.', style: 'Soft dreamy barista warm gentle bright sincere-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sho_child', jp: 'こんにちは。今日も、ジュース、お願いします。', en: 'Hello. Today too, juice please.', style: 'Tiny six-year-old soft small sincere polite-warm growing-confident, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-polite' },
      { speaker: 'aoi_barista', jp: 'はい、すぐ用意します。お元気ですか。', en: 'Yes, I\'ll prepare. Are you well?', style: 'Soft dreamy barista warm gentle bright sincere-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sho_child', jp: 'はい、ちゃんと、頑張ってます。', en: 'Yes, working hard properly.', style: 'Tiny six-year-old soft small sincere proud-warm reporting, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'aoi_barista', jp: 'えらいね、しょうくん。', en: 'Good, Sho-kun.', style: 'Soft dreamy barista warm gentle sincere-warm praising-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-warm' },
      { speaker: 'sho_child', jp: '…ありがとうございます、お姉さん。', en: '…Thank you very much, big sister.', style: 'Tiny six-year-old soft small sincere-warm tender-closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 473 — saito + ren (short)
  {
    id: 'conv_00473',
    context: 'Ren visits Saito for a checkup. Now a working adult, comfortable.',
    purpose: 'small medical adult-patient continued rapport',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['元気', '結婚', '生活', '健康', 'ありがとう'],
    cast: ['saito_doctor', 'ren_uni'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'れんさん、検査結果、いいですよ。お元気そうで。', en: 'Ren-san, test results good. You look well.', style: 'Doctor warm professional gentle bright sincere-warm reporting, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'ren_uni', jp: 'おかげさまで。結婚してから、生活、ちゃんと整えてます。', en: 'Thanks to all. After marriage, life properly arranged.', style: 'University student warm soft sincere bright-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'saito_doctor', jp: 'それは何より。あおいさんとも、お元気で。', en: 'That\'s the best. Aoi-san too — be well.', style: 'Doctor warm professional gentle bright sincere-warm extending-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'ren_uni', jp: 'はい、家族で、ちゃんと、健康、気をつけてます。', en: 'Yes, as family, watching health properly.', style: 'University student warm soft sincere committed-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'これからも、無理しないで、頑張ってください。', en: 'From now on, without pushing — work hard.', style: 'Doctor warm gentle sincere-warm closing-care, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'ありがとうございます。', en: 'Thank you.', style: 'University student warm soft sincere closing-brief-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 474 — kenji + naoko + hiroshi_boss + ryosuke, 4-speaker dinner (long)
  {
    id: 'conv_00474',
    context: 'Four adults dinner — long-running family-and-friends group. Hiroshi-boss brings his connection with Naoko in.',
    purpose: 'four-adult mixed friendship — bridging across original boundaries',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['友達', '家族', '感謝', '一緒', '将来', '楽しい'],
    cast: ['kenji_office', 'naoko_aunt', 'hiroshi_boss', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '皆さん、今夜、お時間、ありがとうございます。', en: 'Everyone, thank you for tonight\'s time.', style: 'Boss measured warm formal sincere-warm gathering-opening, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。素敵な集まり、嬉しい。', en: 'Same. Lovely gathering — happy.', style: 'Aunt warm gentle sincere-warm bright-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '部長と、ナオコさん、お知り合いだったのは、最近聞いて。', en: 'Boss and Naoko-san being acquainted — heard recently.', style: 'Salaryman warm formal sincere bright-warm friendly-acknowledging, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'ナオコさんとは、芸術を通して、ご縁、いただきまして。', en: 'With Naoko-san, through art — connection gained.', style: 'Boss measured warm sincere-warm bridging-formal-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'ryosuke_dad', jp: 'こうやって、皆さんが、繋がっていくの、本当に嬉しい。', en: 'All connecting like this — truly happy.', style: 'Father warm gentle sincere-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '家族と、仕事の繋がりが、こうやって、混ざっていくのが、いいですよね。', en: 'Family and work connections mixing — good.', style: 'Aunt warm gentle sincere-warm philosophical-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '正直、人生で、こんな関係が増えるって、思ってなかった。', en: 'Honestly, in life — didn\'t imagine relationships like this growing.', style: 'Boss measured warm soft sincere-warm honest-deep-disclosure, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'お互い、本当に、ありがたいですね。', en: 'Mutually, truly grateful.', style: 'Salaryman warm formal sincere-warm matching-warm appreciating, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'こうやって、ご縁、繋がっていったの、ご縁の不思議で。', en: 'Connections growing — mystery of connection.', style: 'Father warm gentle sincere-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-philosophical' },
      { speaker: 'naoko_aunt', jp: '将来、皆さんで、何か、計画したいですね。', en: 'Future — want to plan something with everyone.', style: 'Aunt warm soft sincere bright-warm extending-future, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: 'ぜひ。皆さんの予定、合わせていきましょう。', en: 'Please. Let\'s match everyone\'s schedule.', style: 'Boss measured warm sincere-warm bright-warm committing-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '楽しみにしています。本当に。', en: 'Looking forward. Truly.', style: 'Salaryman warm soft sincere deep-warm closing-anticipating, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '乾杯しましょう。皆様への、感謝に。', en: 'Let\'s cheers. To gratitude for everyone.', style: 'Father warm soft sincere-warm closing-warm rallying-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '乾杯！', en: 'Cheers!', style: 'Aunt warm bright sincere closing-warm celebrating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 475 — mei + sachiko + hina + sho (4-speaker, long)
  {
    id: 'conv_00475',
    context: 'Mei visits Sachiko while Hina and Sho are there. Four-generation tea afternoon.',
    purpose: 'four-female gentle gathering — milestone widow welcomes new wife into family',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['お祖母様', '一緒', '家族', '思い出', '幸せ', '優しい'],
    cast: ['sachiko_grandma', 'mei_romantic', 'hina_child', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'お祖母様、こんにちは。今日はお邪魔します。', en: 'Grandmother, hello. Excuse the intrusion today.', style: 'Romantic warm soft formal sincere-warm civil-respectful opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'sachiko_grandma', jp: 'メイさん、よく来てくれた。ひなちゃんと、しょうくんと、一緒なんですね。', en: 'Mei-san, glad you came. With Hina and Sho.', style: 'Soft grandmother warm gentle bright sincere-warm welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'hina_child', jp: 'お祖母様、メイお姉さん、すごく可愛い！', en: 'Grandma, Mei-onee-san is so cute!', style: 'High child bright sincere enthusiastic-warm declaring, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'ふふ、ありがとう、ひなちゃん。', en: 'Hehe, thank you, Hina-chan.', style: 'Romantic warm soft sincere laughing-touched-warm gentle, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-touched' },
      { speaker: 'sho_child', jp: '…メイお姉さん、おじいちゃんの指輪、つけてる。', en: '…Mei-onee-san wears grandpa\'s ring.', style: 'Tiny six-year-old soft small sincere observant-warm gentle, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-observant' },
      { speaker: 'mei_romantic', jp: 'うん、毎日、つけてるの。お祖母様、本当にありがとうございます。', en: 'Yes, wearing every day. Truly thank you, grandmother.', style: 'Romantic warm soft tender sincere-warm grateful-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'おじいちゃん、絶対、見てくれてる。私も、嬉しい。', en: 'Grandpa surely watching. I\'m happy too.', style: 'Soft grandmother warm soft tender sincere-warm comforting-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'hina_child', jp: 'おじいちゃん、メイお姉さんと、お姉さんの結婚式、見てくれたんだよね？', en: 'Grandpa watched Mei-onee-san\'s wedding, right?', style: 'High child bright sincere genuine-warm curious-asking, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'うん、絶対、見てくれてた。本当に、家族って、繋がってる。', en: 'Yes, definitely watching. Family — truly connected.', style: 'Romantic warm soft tender sincere-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-philosophical' },
      { speaker: 'sho_child', jp: 'おじいちゃん、ぼくにも、おもちゃ作ってくれた。', en: 'Grandpa made toys for me too.', style: 'Tiny six-year-old soft small tender sincere-warm memory-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sachiko_grandma', jp: 'しょう、ちゃんと、覚えてくれてるのね。お祖父ちゃん、本当に嬉しい。', en: 'Sho remembers properly. Grandpa truly happy.', style: 'Soft grandmother warm soft tender sincere-warm deep-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: 'こうやって、皆で、おじいちゃんのこと、話せる、本当に幸せ。', en: 'Talking about grandpa together — truly happy.', style: 'Romantic warm soft tender sincere-warm closing-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'hina_child', jp: '家族、いっぱい、楽しい！', en: 'Family — lots, fun!', style: 'High child bright sincere enthusiastic-warm closing-bright, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: 'お祖母ちゃんも、皆と、本当に、幸せよ。', en: 'Grandma too, with all — truly happy.', style: 'Soft grandmother warm soft tender deep sincere-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 476 — riku + sho (short)
  {
    id: 'conv_00476',
    context: 'Riku now a working adult sees Sho. Small big-cousin-warmth moment.',
    purpose: 'small adult-cousin warmth — young man giving warmth to small boy',
    ambient: 'family_room',
    sound_effects: [],
    target_vocab: ['元気', '大きい', '頑張る', '一緒', '応援'],
    cast: ['riku_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'しょう、お久しぶり。大きくなったな！', en: 'Sho, long time. You\'ve grown!', style: 'Teen warm soft sincere bright-warm cousin-observation-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '…リクお兄ちゃん、おかえり。', en: '…Riku-onii-chan, welcome back.', style: 'Tiny six-year-old soft small sincere-warm tender-warm welcoming, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-warm' },
      { speaker: 'riku_teen', jp: '学校、頑張ってる？', en: 'School — working hard?', style: 'Teen warm soft sincere bright-warm casual-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'うん、ちゃんと。', en: 'Yes, properly.', style: 'Tiny six-year-old soft small sincere proud-warm brief, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'riku_teen', jp: 'えらい。お兄ちゃん、いつでも、応援してるからな。', en: 'Good. Big brother — always cheering.', style: 'Teen warm soft sincere-warm tender-warm extending-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '…ありがとう、お兄ちゃん。', en: '…Thank you, big brother.', style: 'Tiny six-year-old soft small sincere-warm tender-closing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 477 — asuka + sakura (medium)
  {
    id: 'conv_00477',
    context: 'Years later — Sakura now teaching some too, visits her former teacher Asuka who once shaped her.',
    purpose: 'former student now teacher — closing the mentor circle',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['先生', '感謝', '頑張る', '将来', '成長'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、私も、文章を教えることになりました。', en: 'Sensei, I\'ll be teaching writing too.', style: 'Teen warm soft sincere bright-warm proud-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'え、本当！素晴らしい！どんな学校？', en: 'Eh, truly! Wonderful! What school?', style: 'Teacher warm bright sincere touched-warm enthusiastic-curious, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'sakura_teen', jp: '小さい、私立の学校。中学生に、文章を教えます。', en: 'Small private school. Teaching middle schoolers writing.', style: 'Teen warm soft sincere bright-warm specific-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'さくらさんが、教える立場って、感慨深い。', en: 'You teaching — deeply moving.', style: 'Teacher warm soft sincere deep-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sakura_teen', jp: '先生が、私に、してくれたみたいに、生徒に、できたらいいなって。', en: 'Like what you did for me, hope to do for students.', style: 'Teen warm soft sincere deep-warm tender-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '絶対、できる。さくらさん、本当に、成長したね。', en: 'Definitely can. Sakura-san, truly grown.', style: 'Teacher warm soft sincere believing-warm deep-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '本当に、感謝してます。これからも、先生の、お弟子さんで、いさせてください。', en: 'Truly grateful. Let me continue as your student.', style: 'Teen warm soft sincere deep-warm closing-tender-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'もちろん。これからも、ずっと、ご縁、続けましょう。', en: 'Of course. Let\'s continue connection forever.', style: 'Teacher warm soft sincere closing-warm extending-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 478 — hiroshi_boss + ryosuke + tatsuya, golf (3-speaker, medium)
  {
    id: 'conv_00478',
    context: 'Three men still go golf occasionally. A practice round catching up.',
    purpose: 'three-male leisure friendship — relationship maintained',
    ambient: 'driving_range_afternoon',
    sound_effects: [],
    target_vocab: ['ゴルフ', '一緒', '楽しい', '頑張る', '友達'],
    cast: ['hiroshi_boss', 'ryosuke_dad', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '今日もありがとうございます。', en: 'Thank you for today.', style: 'Boss measured warm formal sincere-warm casual-friend-opening, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。ゴルフ、本当に、続けられてよかった。', en: 'Same. Golf — glad we kept it up.', style: 'Father warm gentle sincere-warm casual-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'わいも、田舎から、なんとか、毎月来てるで。', en: 'I too, from country, somehow come monthly.', style: 'Country gruff warm soft sincere-warm casual-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '達也さんが来てくれるの、本当にありがたい。', en: 'Tatsuya-san coming — truly grateful.', style: 'Boss measured warm sincere-warm appreciating-warm acknowledging, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'こうやって、月に一度、皆で集まれるのが、楽しい。', en: 'Gathering monthly like this — fun.', style: 'Father warm gentle sincere-warm reflective-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'お互い、健康で、頑張ろな。', en: 'Mutually, stay healthy, work hard.', style: 'Country gruff warm sincere-warm closing-warm encouraging-rural, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '本当に、いい友達に、恵まれたと思います。', en: 'Truly — blessed with good friends.', style: 'Boss measured warm soft sincere deep-warm closing-philosophical, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 479 — yuki + mei (short)
  {
    id: 'conv_00479',
    context: 'Yuki and Mei catch up briefly at a café. Both growing in their careers.',
    purpose: 'small adult-women friendship continuing',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['元気', '仕事', '一緒', '頑張る', '楽しい'],
    cast: ['yuki_office', 'mei_romantic'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'メイちゃん、お久しぶり！元気にしてた？', en: 'Mei-chan, long time! Been well?', style: 'Office woman warm bright sincere-warm friend-greeting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'ゆきちゃん、元気だよ。仕事も、結婚生活も、楽しい。', en: 'Yuki-chan, well. Work and married life — fun.', style: 'Romantic warm soft sincere bright-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yuki_office', jp: 'よかった。私も、新しい部署で、毎日、頑張ってる。', en: 'Glad. I\'m at new section, working hard daily.', style: 'Office woman warm bright sincere-warm reciprocal-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'すごい！お互い、頑張ろうね。', en: 'Wonderful! Both of us — let\'s work hard.', style: 'Romantic warm soft sincere bright-warm matching-encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '今度、また、ゆっくりお話しよう。', en: 'Let\'s talk slowly again next time.', style: 'Office woman warm gentle sincere-warm closing-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 480 — takeda + saito + mrs_mori (3-speaker, medium)
  {
    id: 'conv_00480',
    context: 'A quarterly community meeting. The three civic figures meet.',
    purpose: 'three-civic-figures ongoing coordination',
    ambient: 'community_room',
    sound_effects: [],
    target_vocab: ['見守る', '高齢', '協力', '安心', '感謝'],
    cast: ['takeda_officer', 'saito_doctor', 'mrs_mori_neighbor'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '今日もお時間、ありがとうございます。', en: 'Thank you for the time today again.', style: 'Neighbor warm gentle sincere-warm civic-opening-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: 'こちらこそ。最近、高齢の方々、お変わりなく？', en: 'Same. Lately, elderly — unchanged?', style: 'Officer warm professional gentle sincere-warm civic-asking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'saito_doctor', jp: '皆さん、特に問題なくお過ごしです。協力のおかげ。', en: 'Everyone — no particular problems. Thanks to cooperation.', style: 'Doctor warm professional gentle sincere-warm reporting-grateful, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '私も、ご近所、毎日、声かけてます。', en: 'I, too, daily, call out to neighbors.', style: 'Neighbor warm gentle sincere-warm proud-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '森さんのおかげで、地域、安心してます。', en: 'Thanks to Mori-san, the area is reassured.', style: 'Officer warm professional gentle sincere-warm appreciating-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '本当に。皆さんと協力できて、感謝しています。', en: 'Truly. Cooperating with all — grateful.', style: 'Doctor warm professional gentle sincere-warm deep-warm closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mrs_mori_neighbor', jp: 'これからも、ご近所、皆で、見守っていきましょう。', en: 'From now on too, watching over together.', style: 'Neighbor warm soft sincere closing-warm extending-civic, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 481 — daichi + sakura (short)
  {
    id: 'conv_00481',
    context: 'Sakura meets Daichi at a family gathering — they\'re now extended family.',
    purpose: 'small extended-family meeting',
    ambient: 'family_event',
    sound_effects: [],
    target_vocab: ['お久しぶり', '元気', '一緒', '家族', '楽しい'],
    cast: ['daichi_kansai', 'sakura_teen'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'だいちさん、お久しぶり。', en: 'Daichi-san, long time.', style: 'Teen warm soft sincere bright-warm family-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: 'さくらちゃん、元気しとった？', en: 'Sakura-chan, you been well?', style: 'Kansai warm bright sincere-warm casual-warm asking, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'casually-bright' },
      { speaker: 'sakura_teen', jp: 'はい、教える仕事、始めました。', en: 'Yes, started teaching work.', style: 'Teen warm soft sincere bright-warm proud-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-proud' },
      { speaker: 'daichi_kansai', jp: 'ほんま？すごいやん！おめでとう！', en: 'Truly? Wonderful! Congrats!', style: 'Kansai warm bright sincere overwhelmed-warm celebrating, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'sakura_teen', jp: 'ありがとう。皆と、こうやって、家族で集まれて、幸せ。', en: 'Thanks. With all — gathering as family — happy.', style: 'Teen warm soft sincere closing-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 482 — ren + sho (medium)
  {
    id: 'conv_00482',
    context: 'Ren visits the family home. Plays with Sho gently.',
    purpose: 'small adult-cousin gentle play',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['本', '一緒', '楽しい', '読む', '兄'],
    cast: ['ren_uni', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'しょう、新しい本、買ってきたぞ。', en: 'Sho, bought a new book.', style: 'University student warm soft bright sincere-warm cousin-warm offering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'えっ、ぼくに？読みたい！', en: 'Eh, for me? Want to read!', style: 'Tiny six-year-old soft small bright sincere-warm eager-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'eagerly-warm' },
      { speaker: 'ren_uni', jp: 'うん。一緒に、読もうな。', en: 'Yes. Let\'s read together.', style: 'University student warm soft sincere-warm tender-warm offering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sho_child', jp: 'やった！れんお兄ちゃんと、一緒、楽しい。', en: 'Yay! With Ren-onii-chan, together — fun.', style: 'Tiny six-year-old soft small sincere enthusiastic-warm celebrating, the small real warmth audible, soft small warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: 'うん。お兄ちゃん、ずっと、しょうの応援するから。', en: 'Yes. Big brother, always — supporting Sho.', style: 'University student warm soft sincere deep-warm extending-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sho_child', jp: '…ありがとう、お兄ちゃん。', en: '…Thank you, big brother.', style: 'Tiny six-year-old soft small sincere-warm tender-warm closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'ren_uni', jp: 'さあ、最初のページ、めくろうか。', en: 'Now, let\'s turn the first page.', style: 'University student warm soft sincere-warm bright-warm closing-leading, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 483 — hina + asuka + sakura (3-speaker, medium)
  {
    id: 'conv_00483',
    context: 'Sakura (now a teacher) brings her former teacher Asuka to meet Hina, who is in elementary school.',
    purpose: 'three-female teacher-lineage — mentorship across generations',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['先生', '一緒', '頑張る', '感謝', '楽しい'],
    cast: ['sakura_teen', 'asuka_teacher', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'ひな、私の先生だった、あすか先生。', en: 'Hina, this is my former teacher, Asuka-sensei.', style: 'Teen warm soft sincere bright-warm introducing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hina_child', jp: 'はじめまして、あすか先生。', en: 'Nice to meet you, Asuka-sensei.', style: 'High child bright sincere polite-warm formal-warm greeting, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'ひなちゃん、こんにちは。さくらさん、お弟子さんですか？', en: 'Hina-chan, hello. Sakura-san, your student?', style: 'Teacher warm gentle bright sincere-warm welcoming-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sakura_teen', jp: '違うんですけど、いとこで。私みたいに、本が好きで。', en: 'Not student, but cousin. Like me, loves books.', style: 'Teen warm soft sincere bright-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'まあ、素敵。ひなちゃんも、何か、書いたりするの？', en: 'Oh, lovely. Hina-chan, do you write things?', style: 'Teacher warm gentle bright sincere-warm engaging-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-engaged' },
      { speaker: 'hina_child', jp: 'うん！日記、書いてる！', en: 'Yes! I write a diary!', style: 'High child bright sincere proud-warm declaring, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-proud' },
      { speaker: 'asuka_teacher', jp: 'すごい。書く習慣、若いうちから、本当に大事。', en: 'Wonderful. Writing habit when young — truly important.', style: 'Teacher warm gentle sincere-warm appreciating-warm advising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '先生のお陰で、私も、書くことを、続けてこれました。', en: 'Thanks to sensei, I continued writing.', style: 'Teen warm soft sincere deep-warm grateful-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。皆、好きなもの、ずっと続けてね。', en: 'Same. All — keep what you love forever.', style: 'Teacher warm soft sincere-warm closing-extending-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

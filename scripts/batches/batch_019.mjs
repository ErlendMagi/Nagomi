import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_019)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 364 — hiroshi_boss + asuka, PTA budget (medium)
  {
    id: 'conv_00364',
    context: 'A formal PTA committee meeting. Asuka and Hiroshi-boss go over the budget for the autumn event.',
    purpose: 'formal civic planning — careful adult committee work',
    ambient: 'school_meeting_room',
    sound_effects: [],
    target_vocab: ['予算', '資金', '負担', '検討', '提案'],
    cast: ['asuka_teacher', 'hiroshi_boss'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: '本日は、予算について、お時間いただきます。', en: 'Today, regarding the budget, I\'ll take your time.', style: 'Teacher warm formal professional careful chair-opening, the soft real respectful audible, gentle real composure throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'hiroshi_boss', jp: 'はい、よろしくお願いします。資料、拝見しました。', en: 'Yes, please. I\'ve reviewed the documents.', style: 'Boss measured warm formal prepared-respectful, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'preparedly-formal' },
      { speaker: 'asuka_teacher', jp: '今回の行事、資金が少し足りなくて。', en: 'For this event, funds are slightly short.', style: 'Teacher warm formal careful honest-explaining, the soft real respectful audible, gentle real composure throughout delivery.', mood: 'carefully-explaining' },
      { speaker: 'hiroshi_boss', jp: 'どのくらい足りないのでしょうか？', en: 'About how much short?', style: 'Boss measured warm professional clear-inquiring, the soft real respectful audible, gentle real composure throughout delivery.', mood: 'professionally-direct' },
      { speaker: 'asuka_teacher', jp: '五万円ほどです。負担を、皆さんでどう分けるか、検討中で。', en: 'About fifty thousand yen. How to share the burden — under consideration.', style: 'Teacher warm formal specific-honest careful-presenting, the soft real respectful audible, gentle real composure throughout delivery.', mood: 'specifically-careful' },
      { speaker: 'hiroshi_boss', jp: 'では、提案ですが。地域の企業からの寄付、相談してみては。', en: 'Then, a proposal — what about consulting with local businesses for donations?', style: 'Boss measured warm sincere strategic-proposing-thoughtful, the soft real respectful audible, gentle real composure throughout delivery.', mood: 'strategically-warm' },
      { speaker: 'asuka_teacher', jp: 'なるほど、検討してみます。ありがとうございます。', en: 'I see, I\'ll consider it. Thank you.', style: 'Teacher warm formal sincere committed-grateful, the soft real respectful audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'hiroshi_boss', jp: 'こちらでもできること、お手伝いします。', en: 'On my side too, I\'ll help where I can.', style: 'Boss measured warm sincere generous-extending closing, the soft real respectful audible, gentle real composure throughout delivery.', mood: 'sincerely-generous' }
    ]
  },
  // 365 — kenji + daichi + ryosuke (3-speaker, long)
  {
    id: 'conv_00365',
    context: 'Three men dinner — colleagues becoming real friends. They share over the months.',
    purpose: 'three-male deepening adult friendship — work-bonds becoming personal',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['仕事', '友達', '感謝', '将来', '人生', '一緒'],
    cast: ['kenji_office', 'daichi_kansai', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '三人で集まる回数、増えたな。嬉しいわ。', en: 'Times we gather as three — increased. I\'m glad.', style: 'Kansai warm bright sincere reflective-opening warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '本当に。最初は、職場の関係だったのに。', en: 'Truly. At first, just workplace relations.', style: 'Salaryman warm sincere gentle reflective-wondering warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'ryosuke_dad', jp: '不思議ですね。仕事で出会って、こうなるって。', en: 'Strange — meeting through work, becoming like this.', style: 'Father warm gentle sincere philosophical-warm observation, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-philosophical' },
      { speaker: 'daichi_kansai', jp: 'わいは、東京来てよかったって、こういう時思う。', en: 'I think coming to Tokyo was good — at times like these.', style: 'Kansai warm soft sincere deep-disclosure warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '俺も、同じ気持ちです。お二人がいなかったら、こんなに楽しくなかった。', en: 'Same feeling. Without you two, wouldn\'t be this fun.', style: 'Salaryman warm sincere deep grateful-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'ryosuke_dad', jp: '私は、お二人より少し年上ですけど、教わることばっかりで。', en: 'I\'m a bit older, but I keep learning from you both.', style: 'Father warm gentle humble-sincere warm-redirecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'daichi_kansai', jp: 'いやいや、亮介さんから、わいら学ぶことばっかり。', en: 'No no, we keep learning from Ryosuke-san.', style: 'Kansai warm bright matching humble-reciprocal-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'brightly-reciprocal' },
      { speaker: 'kenji_office', jp: 'こういう関係、人生で、何度ないですよね。', en: 'Relations like this — don\'t come many times in life.', style: 'Salaryman warm gentle reflective sincere-deep observation, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'ryosuke_dad', jp: '本当に。家族とはまた違う、仲間ですね。', en: 'Truly. Different from family — companions.', style: 'Father warm gentle sincere wise-philosophical warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'daichi_kansai', jp: '将来、おじいちゃんになっても、こうやって飲もな。', en: 'Even as old men, let\'s drink like this.', style: 'Kansai warm bright sincere committed-warm extending future, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'brightly-extending' },
      { speaker: 'kenji_office', jp: '約束ですね。絶対、続けましょう。', en: 'A promise. Let\'s keep it going.', style: 'Salaryman warm sincere committed-warm matching closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'ryosuke_dad', jp: '感謝の気持ち、ちゃんと、言わせてください。', en: 'Let me say it properly — my feelings of gratitude.', style: 'Father warm soft sincere deep-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'こちらこそ、ですわ。', en: 'It\'s us who are grateful.', style: 'Kansai warm bright sincere matching-warm reciprocal, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'brightly-warm' },
      { speaker: 'kenji_office', jp: 'もう一杯、いきましょう。', en: 'Another round.', style: 'Salaryman warm sincere bright closing-gathering-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-gathering' }
    ]
  },
  // 366 — sakura + ren + aoi (3-speaker, medium)
  {
    id: 'conv_00366',
    context: 'Sakura visits Ren and Aoi at their cafe after Ren mentioned the couple were settling into a routine.',
    purpose: 'small cousin visit to couple — warm shared moment',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['お祝い', '一緒', '幸せ', '初めて', '応援'],
    cast: ['sakura_teen', 'ren_uni', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'れんお兄ちゃん、あおいさん、お邪魔します。', en: 'Ren-nii-chan, Aoi-san, excuse me.', style: 'Teen warm soft sincere bright respectful visiting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-respectful' },
      { speaker: 'ren_uni', jp: 'さくら、来てくれて嬉しいわ。', en: 'Sakura, glad you came.', style: 'University student warm bright sincere casual-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'いらっしゃい、さくらちゃん。今日は何にする？', en: 'Welcome, Sakura-chan. What today?', style: 'Soft dreamy barista warm gentle sincere-welcoming bright, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sakura_teen', jp: 'ラテで。お二人、お祝い、ちょっと持ってきました。', en: 'Latte. I brought a small celebration gift.', style: 'Teen warm soft sincere careful-offering-warm gentle, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-offering' },
      { speaker: 'aoi_barista', jp: 'えー、わざわざ。ありがとう。', en: 'Eh, going out of your way. Thank you.', style: 'Soft dreamy barista warm gentle touched-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-touched' },
      { speaker: 'ren_uni', jp: 'さくらが祝ってくれるって、なんか不思議。大人になったな。', en: 'Sakura celebrating us — strange feeling. You\'ve grown.', style: 'University student warm soft sincere reflective-warm touched, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'sakura_teen', jp: '一緒に住み始めるんですよね？お二人、幸せそうで、こっちまで嬉しい。', en: 'You\'re starting living together, right? Seeing you happy makes me happy.', style: 'Teen warm soft sincere warm-extending-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'さくらちゃんも、いつか自分の幸せ、見つけてね。応援してる。', en: 'Sakura-chan too, find your own happiness someday. Cheering for you.', style: 'Soft dreamy barista warm soft sincere gentle-extending-warm wishing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-extending' },
      { speaker: 'sakura_teen', jp: 'ありがとう。本当に、よかった。', en: 'Thank you. Truly, glad.', style: 'Teen warm soft sincere deep closing-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 367 — yumiko + hiroshi_boss (medium)
  {
    id: 'conv_00367',
    context: 'Yumiko visits her brother Hiroshi-boss alone to talk about their mother — who is now widowed and grieving.',
    purpose: 'sister-brother adult coordination — careful family responsibility around grief',
    ambient: 'apartment_evening',
    sound_effects: [],
    target_vocab: ['母', '心配', '一緒', '支える', '見守る'],
    cast: ['yumiko_mom', 'hiroshi_boss'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'お兄さん、ちょっと、お母さんのこと、話したくて。', en: 'Big brother, I want to talk about mother.', style: 'Maternal warm soft sincere careful family-respectful-warm opening, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'hiroshi_boss', jp: 'うん、来てくれて良かった。俺もずっと気になってた。', en: 'Yes, glad you came. I\'ve been worried too.', style: 'Boss warm soft authority-down brother-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-warm' },
      { speaker: 'yumiko_mom', jp: 'お父さん亡くなってから、一人で家にいるのが、心配で。', en: 'Since father passed, alone at home — worried.', style: 'Maternal warm soft sincere honest-vulnerable-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'honestly-vulnerable' },
      { speaker: 'hiroshi_boss', jp: 'うん。週に何回、誰かが顔出すようにしようか。', en: 'Yeah. How about someone visits a few times a week?', style: 'Boss warm soft sincere practical-warm proposing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'practically-warm' },
      { speaker: 'yumiko_mom', jp: 'いい考え。私と亮介で、ちゃんとローテーション組む。', en: 'Good idea. Ryosuke and I will rotate properly.', style: 'Maternal warm sincere bright committed-warm planning, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: '俺も、週末は必ず行く。家族で支えよう。', en: 'I\'ll go weekends without fail. Let\'s support as family.', style: 'Boss warm soft sincere committed-warm-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'yumiko_mom', jp: 'お兄さんがいてくれて、本当に心強い。', en: 'Having you, big brother — truly reassuring.', style: 'Maternal warm soft sincere deep grateful-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'こちらこそ。ゆみこがしっかりしてくれてるから。', en: 'Same. Because you\'re solid, Yumiko.', style: 'Boss warm soft sincere reciprocal-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 368 — sho + asuka, art class (short)
  {
    id: 'conv_00368',
    context: 'Sho shows Asuka a small drawing of his late grandfather — a memorial gift.',
    purpose: 'small child-teacher gentle moment — bringing grief into art',
    ambient: 'classroom_after',
    sound_effects: [],
    target_vocab: ['絵', 'おじいちゃん', '思い出', '描く', '優しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: '先生…これ、おじいちゃんの絵。', en: 'Sensei… this is grandpa\'s picture.', style: 'Tiny six-year-old soft small tender careful-offering-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-careful' },
      { speaker: 'asuka_teacher', jp: '…おじいちゃん、優しいお顔ね。', en: '…Grandpa, kind face.', style: 'Teacher warm soft tender deep gentle-recognizing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-recognizing' },
      { speaker: 'sho_child', jp: '思い出して、描いた。', en: 'I remembered and drew.', style: 'Tiny six-year-old soft small sincere tender-disclosure-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-sincere' },
      { speaker: 'asuka_teacher', jp: 'おじいちゃん、しょうくんの中で、ずっと生きてるね。', en: 'Grandpa — alive in you, Sho-kun, always.', style: 'Teacher warm soft tender deep gentle-philosophical-comforting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-comforting' },
      { speaker: 'sho_child', jp: 'うん…ぼくも、おじいちゃん、好きだった。', en: 'Yes… I loved grandpa.', style: 'Tiny six-year-old soft small tender sincere-disclosing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'asuka_teacher', jp: 'お家にも、飾ってあげてね。', en: 'Display it at home too.', style: 'Teacher warm soft tender gentle-extending-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-extending' }
    ]
  },
  // 369 — mei + naoko (medium)
  {
    id: 'conv_00369',
    context: 'Naoko asks Mei how the visit to Daichi\'s grandmother went, and they talk about the relationship deepening.',
    purpose: 'aunt-niece-like adult update — relationship progression discussion',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['会う', '優しい', '感謝', '一緒', '将来'],
    cast: ['naoko_aunt', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'メイちゃん、お祖母様、どうだった？', en: 'Mei-chan, how was grandmother?', style: 'Aunt warm gentle bright family-curious-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-curious' },
      { speaker: 'mei_romantic', jp: 'すごく優しい方で。緊張、解けました。', en: 'Such a kind person. The nervousness dissolved.', style: 'Romantic warm soft sincere relieved-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-relieved' },
      { speaker: 'naoko_aunt', jp: 'よかった。達也さんのご家族、皆さん優しそうね。', en: 'Glad. Daichi-san\'s family — all seem kind.', style: 'Aunt warm gentle sincere observation-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-appreciating' },
      { speaker: 'mei_romantic', jp: 'はい。達也が、家族をすごく大事にしていて。', en: 'Yes. Daichi cherishes his family very much.', style: 'Romantic warm soft sincere proud-disclosure-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'naoko_aunt', jp: 'そういう人と、一緒にいられて、メイちゃん、本当に良かった。', en: 'Being with that kind of person — Mei-chan, truly good.', style: 'Aunt warm gentle sincere warm-deep-affirming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'mei_romantic', jp: 'ナオコちゃんが紹介してくれたお陰。本当に感謝してます。', en: 'Thanks to your introduction, Naoko-chan. Truly grateful.', style: 'Romantic warm soft sincere deep grateful-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'こうやって、メイちゃんが幸せそうなのが、私の一番の喜び。', en: 'Seeing Mei-chan happy like this — my greatest joy.', style: 'Aunt warm soft sincere deep tender-warm closing-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: '将来、家族みんなで会えたら、嬉しい。', en: 'In the future, if all families meet, I\'d be happy.', style: 'Romantic warm soft sincere wishing-extending-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wishing' }
    ]
  },
  // 370 — riku + saito (short)
  {
    id: 'conv_00370',
    context: 'Riku visits Dr. Saito for a checkup before starting university.',
    purpose: 'small adult-young milestone — health check before independence',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['大学', '健康', '注意', '生活', '頑張る'],
    cast: ['saito_doctor', 'riku_teen'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'リクさん、もうすぐ大学だね。', en: 'Riku-san, university soon.', style: 'Doctor warm professional gentle warm-friendly opening, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'warmly-friendly' },
      { speaker: 'riku_teen', jp: 'はい、来月から、一人暮らしです。', en: 'Yes, from next month, living alone.', style: 'Teen warm sincere bright milestone-sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'saito_doctor', jp: '健康、自分で管理することになる。生活、気を付けてね。', en: 'You\'ll manage health yourself. Take care of daily life.', style: 'Doctor warm gentle wise mentor-warm adviser closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-mentor' },
      { speaker: 'riku_teen', jp: 'はい、ちゃんと注意します。', en: 'Yes, I\'ll be careful.', style: 'Teen warm sincere brief committed-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'saito_doctor', jp: '体調悪くなったら、すぐに病院、行ってね。', en: 'If feeling unwell, go to hospital right away.', style: 'Doctor warm gentle careful adviser-warm closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'riku_teen', jp: 'ありがとうございます。頑張ります。', en: 'Thank you. I\'ll do my best.', style: 'Teen warm soft sincere closing-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-grateful' }
    ]
  },
  // 371 — daichi + tatsuya + naoko (3-speaker, long)
  {
    id: 'conv_00371',
    context: 'Daichi brings Mei\'s aunt Naoko to visit Tatsuya\'s farm — connecting the two sides of family-friends.',
    purpose: 'bridging two adult worlds — Kansai broker connecting city aunt with country uncle',
    ambient: 'farm_porch_afternoon',
    sound_effects: [],
    target_vocab: ['田舎', '紹介', '畑', '空気', '感動', '家族'],
    cast: ['daichi_kansai', 'tatsuya_country', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '達也さん、ナオコさん、紹介します。', en: 'Tatsuya-san, let me introduce Naoko-san.', style: 'Kansai warm bright formal-warm careful-introducing, the regional swing softened, soft real warmth threading throughout delivery.', mood: 'carefully-bright' },
      { speaker: 'tatsuya_country', jp: 'ようこそ。狭いとこですが。', en: 'Welcome. A small place though.', style: 'Country gruff warm humble-welcoming-warm rural, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'naoko_aunt', jp: 'まあ、立派な畑。本当に綺麗ですね。', en: 'Oh, splendid field. Truly beautiful.', style: 'Aunt warm bright sincere appreciative-warm observing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '今年、特ににんじん、よう出来ました。', en: 'This year, carrots especially turned out well.', style: 'Country gruff warm proud sharing-rural-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-proud' },
      { speaker: 'naoko_aunt', jp: '田舎の空気、本当に違うわ。気持ちが落ち着く。', en: 'Country air — really different. Feelings settle.', style: 'Aunt warm gentle sincere deep-appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'メイちゃんも、初めて来た時、同じこと言うてた。', en: 'Mei said the same when she first came.', style: 'Kansai warm bright sincere warm-bridging-sharing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bridging' },
      { speaker: 'naoko_aunt', jp: 'メイ、いいお相手と巡り会えて、本当に幸せ。', en: 'Mei met a good partner — truly happy.', style: 'Aunt warm gentle sincere deep tender-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'tatsuya_country', jp: 'メイちゃん、ええ子や。家族みたいに思てます。', en: 'Mei is a good one. Like family to me.', style: 'Country gruff warm sincere deep-warm-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'メイがそう言ってもらえて、私も嬉しい。', en: 'Mei being said that — I\'m happy too.', style: 'Aunt warm soft sincere touched-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-touched' },
      { speaker: 'daichi_kansai', jp: 'こうやって、家族繋がるの、ええなあ。', en: 'Family connecting like this — good.', style: 'Kansai warm bright sincere reflective-warm closing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'tatsuya_country', jp: 'お茶、いくらでも飲んでってください。', en: 'Drink tea as much as you like.', style: 'Country gruff warm sincere generous-hosting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'naoko_aunt', jp: 'ありがとうございます。今日、本当に感動しました。', en: 'Thank you. Today, truly moved.', style: 'Aunt warm soft sincere deep tender-grateful-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'また、皆で集まりましょう。家族と。', en: 'Let\'s gather again. With family.', style: 'Kansai warm bright sincere closing-warm extending future, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 372 — yuki + ryosuke (medium)
  {
    id: 'conv_00372',
    context: 'A second meeting between Yuki and Ryosuke. She comes to thank him with a small gift after their previous talk helped her.',
    purpose: 'professional follow-up gratitude — younger thanking mentor figure',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['助言', '感謝', '成長', '頑張る', '尊敬'],
    cast: ['ryosuke_dad', 'yumiko_mom'].includes ? ['ryosuke_dad', 'yuki_office'] : ['ryosuke_dad', 'yuki_office'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '野田さん、先日のお話、本当にありがとうございました。', en: 'Noda-san, the other day\'s talk — truly thank you.', style: 'Office woman warm formal sincere grateful-opening-warm, the soft real real-respect audible, gentle real warmth throughout delivery.', mood: 'formally-grateful' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。あれから、どうですか？', en: 'Same. Since then, how is it?', style: 'Father warm gentle civil curious-warm following-up, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-curious' },
      { speaker: 'yuki_office', jp: '失敗、怖がらずに、向き合えるようになりました。', en: 'Without fearing failure, I can face it now.', style: 'Office woman warm sincere bright committed-warm growth-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: 'それは何より。ご自身の力ですよ。', en: 'That\'s the best. Your own power.', style: 'Father warm gentle sincere generous-redirecting-warm humble, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'generously-warm' },
      { speaker: 'yuki_office', jp: 'いえ、助言があったから、前向きに考えられて。', en: 'No, because of the advice — I could think positively.', style: 'Office woman warm soft sincere humble-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'ryosuke_dad', jp: '佐藤さんが、ちゃんと受け止めて、行動したから。', en: 'Because you, Sato-san, received it and acted.', style: 'Father warm gentle sincere reflective-warm respecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-respectful' },
      { speaker: 'yuki_office', jp: 'これからも、頑張ります。野田さん、本当に尊敬してます。', en: 'From here on too, I\'ll do my best. Truly respect you.', style: 'Office woman warm soft sincere deep grateful-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'いつでも、相談してください。', en: 'Anytime, please consult.', style: 'Father warm gentle generous-warm closing-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-extending' }
    ]
  },
  // 373 — hina + sakura + yumiko, sewing (3-speaker, medium)
  {
    id: 'conv_00373',
    context: 'Yumiko teaches Sakura and Hina to sew small bags. Three female generations.',
    purpose: 'three-female intergenerational crafts — transmission and warmth',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['作る', '手伝う', '一緒', '上手', '糸'],
    cast: ['yumiko_mom', 'sakura_teen', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: '今日は、小さい袋、作ろうね。', en: 'Today, let\'s make small bags.', style: 'Maternal warm gentle bright welcoming-craft-opening-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'hina_child', jp: 'やったー！何色がいい？', en: 'Yay! What color is good?', style: 'High child bright eager enthusiastic-engaging-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sakura_teen', jp: 'ピンク、どう？ひな、好きじゃん。', en: 'Pink, how about? You love it, right Hina?', style: 'Teen warm gentle bright older-cousin-warm suggesting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-suggesting' },
      { speaker: 'yumiko_mom', jp: 'みんなで違う色にする？', en: 'Each of us a different color?', style: 'Maternal warm gentle warm planning-collaborative-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-collaborative' },
      { speaker: 'hina_child', jp: 'ひなピンク、お姉ちゃん青、お母さん黄色！', en: 'Hina pink, big sis blue, mom yellow!', style: 'High child bright eager planning-enthusiastic-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'eagerly-bright' },
      { speaker: 'sakura_teen', jp: 'ふふ、ひな、全部決めるね。', en: 'Hehe, Hina, you decide everything.', style: 'Teen warm gentle laughing teasing-warm affectionate, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-laughing' },
      { speaker: 'yumiko_mom', jp: 'いいよ。糸、針、出してきて。', en: 'It\'s fine. Get the thread and needle out.', style: 'Maternal warm gentle accommodating-warm directing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-directing' },
      { speaker: 'hina_child', jp: 'お母さんに、手伝ってもらう！', en: 'I\'ll get mom to help me!', style: 'High child bright eager clinging-warm declaring, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'eagerly-bright' },
      { speaker: 'sakura_teen', jp: '私が、ひな手伝う。一緒に上手にできるよ。', en: 'I\'ll help Hina. Together we can do well.', style: 'Teen warm gentle generous big-cousin-warm offering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-generous' }
    ]
  },
  // 374 — takeda + saito, weekly check (short)
  {
    id: 'conv_00374',
    context: 'A weekly check-in call between officer Takeda and doctor Saito about the elderly community member they\'ve been watching.',
    purpose: 'professional civic check-in — coordinated care',
    ambient: 'phone_call',
    sound_effects: [],
    target_vocab: ['元気', '訪問', '安心', '協力', '感謝'],
    cast: ['takeda_officer', 'saito_doctor'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: '斎藤先生、山田さん、今日も訪問してきました。', en: 'Dr. Saito, today I visited Yamada-san too.', style: 'Officer warm professional brief sincere-reporting-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'saito_doctor', jp: 'ありがとうございます。お元気でしたか？', en: 'Thank you. Was he well?', style: 'Doctor warm professional gentle care-asking-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-caring' },
      { speaker: 'takeda_officer', jp: '少し疲れた様子でしたが、安定してました。', en: 'A bit tired, but stable.', style: 'Officer warm professional gentle reporting-honest-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-honest' },
      { speaker: 'saito_doctor', jp: '安心しました。協力、本当に助かります。', en: 'Relieved. The cooperation truly helps.', style: 'Doctor warm gentle sincere grateful-warm civic-closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: 'こちらこそ。お互い様、ですから。', en: 'Same. Mutual, after all.', style: 'Officer warm gentle sincere humble-reciprocal-warm closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' }
    ]
  },
  // 375 — aoi + hina (short)
  {
    id: 'conv_00375',
    context: 'Hina visits Aoi\'s cafe with her older cousin Sakura — this time Hina is bolder.',
    purpose: 'small confident child cafe visit — small adult-child warmth',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['いらっしゃい', 'ジュース', 'ありがとう', '美味しい', '大きい'],
    cast: ['aoi_barista', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'ひなちゃん、いらっしゃい。大きくなったね。', en: 'Hina-chan, welcome. You\'ve grown.', style: 'Soft dreamy barista warm gentle bright child-attentive-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'hina_child', jp: 'こんにちは！オレンジジュース、お願いします！', en: 'Hello! Orange juice, please!', style: 'High child bright sincere confident-polite-warm ordering, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'brightly-confident' },
      { speaker: 'aoi_barista', jp: 'はい、すぐ用意します。', en: 'Yes, I\'ll prepare it right away.', style: 'Soft dreamy barista warm gentle bright warm-serving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'hina_child', jp: 'ありがとう、お姉さん！いつもオレンジ、美味しい。', en: 'Thank you, big sister! Always orange is delicious.', style: 'High child bright sincere warm-praising-childish, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'ふふ、嬉しいね。また来てね。', en: 'Hehe, happy. Come again.', style: 'Soft dreamy barista warm gentle laughing touched-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-touched' },
      { speaker: 'hina_child', jp: 'うん、また来る！', en: 'Yes, I\'ll come again!', style: 'High child bright sincere committed-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 376 — ren + ryosuke, deeper question (long)
  {
    id: 'conv_00376',
    context: 'Ren visits Ryosuke privately to ask about marrying Aoi — wanting honest adult perspective.',
    purpose: 'young adult seeking older perspective on serious life choice',
    ambient: 'apartment_evening',
    sound_effects: [],
    target_vocab: ['結婚', '本気', '気持ち', '正直', '責任', '将来'],
    cast: ['ryosuke_dad', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'おじさん、ちょっと真面目な話、いいですか。', en: 'Uncle, can I have a serious talk?', style: 'University student warm soft careful brave-asking-warm respectful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'carefully-brave' },
      { speaker: 'ryosuke_dad', jp: 'もちろん。何でも話して。', en: 'Of course. Talk about anything.', style: 'Father warm gentle generous family-warm receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-generous' },
      { speaker: 'ren_uni', jp: 'あおいと、結婚、考えてます。', en: 'Aoi and I — thinking of marriage.', style: 'University student warm soft brave sincere-deep-disclosure-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'bravely-deep' },
      { speaker: 'ryosuke_dad', jp: '…そっか。気持ちが固まったんだね。', en: '…I see. Your feelings have settled.', style: 'Father warm soft gentle sincere-receiving-warm careful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-receiving' },
      { speaker: 'ren_uni', jp: '本気っす。けど、責任、ちゃんと取れるか、不安で。', en: 'Serious. But, can I take responsibility — uneasy.', style: 'University student warm soft sincere vulnerable-honest-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'honestly-vulnerable' },
      { speaker: 'ryosuke_dad', jp: '正直、誰でも、その不安を抱えて結婚するもんだよ。', en: 'Honestly, everyone gets married carrying that unease.', style: 'Father warm soft gentle wise-normalizing-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-normalizing' },
      { speaker: 'ren_uni', jp: 'おじさんも、そうだったんすか？', en: 'Uncle, were you like that too?', style: 'University student warm soft sincere genuine-asking-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'genuinely-asking' },
      { speaker: 'ryosuke_dad', jp: '俺もそう。何にも分からないまま、結婚した。', en: 'Me too. Got married without understanding anything.', style: 'Father warm soft sincere honest-laughing-warm self-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'honestly-warm' },
      { speaker: 'ren_uni', jp: 'マジっすか。少し安心した。', en: 'For real? Slightly relieved.', style: 'University student warm soft sincere relieved-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-relieved' },
      { speaker: 'ryosuke_dad', jp: '一緒に育っていくものだから。完璧じゃなくていい。', en: 'You grow together. Doesn\'t need to be perfect.', style: 'Father warm soft gentle wise-deep-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-wise' },
      { speaker: 'ren_uni', jp: '将来のこと、ちゃんと考えてから、行動します。', en: 'About the future, after thinking properly — I\'ll act.', style: 'University student warm soft sincere committed-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'ryosuke_dad', jp: 'うん。あおいさんとも、ちゃんと、話し合ってね。', en: 'Yes. With Aoi-san too, talk it through properly.', style: 'Father warm gentle wise sincere-closing-warm adviser, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-closing' },
      { speaker: 'ren_uni', jp: 'はい。本当に、ありがとうございました。', en: 'Yes. Truly, thank you.', style: 'University student warm soft sincere deep grateful-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 377 — naoko + sachiko, daughter visits widowed mother (long)
  {
    id: 'conv_00377',
    context: 'Naoko visits her widowed mother Sachiko alone. Quiet conversation about grief, daily life, going on.',
    purpose: 'adult daughter visiting recently widowed mother — careful tender check-in',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['母', '一人', '心配', '時間', '思い出', '一緒'],
    cast: ['naoko_aunt', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'お母さん、最近、ちゃんと寝てる？', en: 'Mother, sleeping properly lately?', style: 'Aunt warm soft tender careful-concerned-warm asking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'tenderly-careful' },
      { speaker: 'sachiko_grandma', jp: 'うん、なんとか。少し寂しいけどね。', en: 'Yes, somehow. A little lonely though.', style: 'Soft grandmother warm soft tender honest-vulnerable-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-honest' },
      { speaker: 'naoko_aunt', jp: 'うん。当たり前だよ、お父さん、いないんだもん。', en: 'Yes. Of course — dad isn\'t here.', style: 'Aunt warm soft sincere gentle-normalizing-warm comforting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-normalizing' },
      { speaker: 'sachiko_grandma', jp: '六十年、毎日一緒にいたから。', en: 'Sixty years, every day together.', style: 'Soft grandmother warm soft tender deep weighted-disclosure-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-weighted' },
      { speaker: 'naoko_aunt', jp: '無理しないでね。何でも頼っていいから。', en: 'Don\'t push yourself. Rely on us for anything.', style: 'Aunt warm soft tender sincere-extending-warm generous, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-generous' },
      { speaker: 'sachiko_grandma', jp: 'なおこがそう言ってくれるだけで、嬉しい。', en: 'Just hearing you say that, Naoko — happy.', style: 'Soft grandmother warm soft sincere tender-touched-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-touched' },
      { speaker: 'naoko_aunt', jp: '毎週、ちゃんと来るからね。', en: 'I\'ll come every week without fail.', style: 'Aunt warm soft sincere committed-warm promising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'sachiko_grandma', jp: 'ありがとう。お母さんね、お父さんの夢、見るの。毎日のように。', en: 'Thank you. Mom dreams of dad. Almost every day.', style: 'Soft grandmother warm soft tender deep gentle-disclosure-warm vulnerable, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'naoko_aunt', jp: 'お父さんも、お母さんに会いに来てるんだね。', en: 'Dad is coming to see you too.', style: 'Aunt warm soft tender sincere-comforting-warm interpreting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-comforting' },
      { speaker: 'sachiko_grandma', jp: '…そうかもね。', en: '…Maybe so.', style: 'Soft grandmother warm soft tender deep gentle-touched-warm fragile, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-fragile' },
      { speaker: 'naoko_aunt', jp: '思い出話、いっぱい、聞かせて。', en: 'Tell me lots of memories.', style: 'Aunt warm soft tender sincere-asking-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-asking' },
      { speaker: 'sachiko_grandma', jp: '若い時、お父さん、本当に優しくてね…。', en: 'When young, dad was really kind…', style: 'Soft grandmother warm soft tender deep gentle-warm reminiscing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-reminiscing' },
      { speaker: 'naoko_aunt', jp: 'うん、聞かせて、いつまでも。', en: 'Yes, tell me, forever.', style: 'Aunt warm soft tender sincere-deep-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 378 — sho + ren, ren reads (short)
  {
    id: 'conv_00378',
    context: 'Ren is hanging out at his cousin\'s house and ends up reading a picture book to Sho.',
    purpose: 'small adult-child quiet moment — older cousin reading',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['本', '読む', '一緒', '面白い', '優しい'],
    cast: ['ren_uni', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'れんお兄ちゃん、これ、読んで。', en: 'Ren-nii-chan, read this.', style: 'Tiny six-year-old soft small careful asking-warm gentle, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-asking' },
      { speaker: 'ren_uni', jp: 'おお、いいよ。一緒に読もう。', en: 'Oh, sure. Let\'s read together.', style: 'University student warm gentle easy generous-cousin-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-generous' },
      { speaker: 'sho_child', jp: 'この本、優しいお話で。', en: 'This book is a kind story.', style: 'Tiny six-year-old soft small sincere sharing-warm gentle, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-sincere' },
      { speaker: 'ren_uni', jp: 'お、面白そう。じゃあ、最初から。', en: 'Oh, sounds fun. Then, from the beginning.', style: 'University student warm gentle bright older-cousin-warm starting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-starting' },
      { speaker: 'sho_child', jp: '…一緒に読むの、好き。', en: '…I love reading together.', style: 'Tiny six-year-old soft small sincere tender-warm disclosure, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'ren_uni', jp: '俺も。じゃあ、行くぞ。', en: 'Me too. Then, here we go.', style: 'University student warm gentle sincere matching-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 379 — kenji + hiroshi_boss + yuki, work emergency (3-speaker, long)
  {
    id: 'conv_00379',
    context: 'A real workplace emergency — a critical mistake in a client deliverable. Hiroshi, Kenji, and Yuki coordinate to fix it.',
    purpose: 'workplace crisis coordination — three-rank professional team under pressure',
    ambient: 'meeting_room',
    sound_effects: [],
    target_vocab: ['緊急', '対応', '責任', '確認', '解決', '協力'],
    cast: ['hiroshi_boss', 'kenji_office', 'yuki_office'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '今、緊急で、対応が必要だ。', en: 'Right now, urgent — needs handling.', style: 'Boss measured authority-firm urgent-direct-warm opening, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'urgently-firm' },
      { speaker: 'kenji_office', jp: '何があったんですか？', en: 'What happened?', style: 'Salaryman warm formal alert-receiving-warm professional, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'alertly-professional' },
      { speaker: 'hiroshi_boss', jp: '中村商事の納品物、数字に間違いがある。', en: 'Nakamura Trading\'s deliverable — a number error.', style: 'Boss measured warm professional firm-honest-warm reporting, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'firmly-honest' },
      { speaker: 'yuki_office', jp: 'え、私の担当ですか？', en: 'Eh, my responsibility?', style: 'Office woman warm soft sincere alarmed-careful-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-alarmed' },
      { speaker: 'hiroshi_boss', jp: '責任の所在は、後で確認する。今は対応だけだ。', en: 'Responsibility — confirmed later. Now, just handling.', style: 'Boss measured warm firm gentle adult-leading-warm, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'firmly-leading' },
      { speaker: 'kenji_office', jp: '了解。すぐ確認に入ります。', en: 'Understood. Confirming immediately.', style: 'Salaryman warm formal sincere committed-action-warm, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'yuki_office', jp: '私も、すぐデータ再確認します。', en: 'I\'ll re-confirm the data immediately too.', style: 'Office woman warm soft sincere committed-warm-action, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'hiroshi_boss', jp: '解決まで、ここに集中する。協力していこう。', en: 'Until resolved, focus here. Let\'s cooperate.', style: 'Boss measured warm firm sincere-leading-warm rallying, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'firmly-rallying' },
      { speaker: 'kenji_office', jp: '部長、お客様への説明は、私が担当します。', en: 'Bucho, the client explanation, I\'ll handle.', style: 'Salaryman warm formal sincere offering-warm committed, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'sincerely-offering' },
      { speaker: 'yuki_office', jp: '私、データの修正と、再提出書類、作成します。', en: 'I\'ll correct data and prepare resubmission.', style: 'Office woman warm sincere committed-action-warm professional, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '良い。三十分後、進捗を集約する。', en: 'Good. In thirty minutes, consolidate progress.', style: 'Boss measured warm sincere firm-leading-warm closing, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'firmly-leading' },
      { speaker: 'kenji_office', jp: 'はい、絶対に解決させます。', en: 'Yes, we\'ll absolutely resolve.', style: 'Salaryman warm formal sincere firm-committed-warm closing, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'firmly-committed' },
      { speaker: 'yuki_office', jp: '頑張ります。お互い、声かけ合いましょう。', en: 'I\'ll do my best. Let\'s keep talking.', style: 'Office woman warm sincere bright collaborative-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-collaborative' },
      { speaker: 'hiroshi_boss', jp: 'よろしく頼む。', en: 'Counting on you.', style: 'Boss measured warm firm sincere brief-trusting-warm closing, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 380 — mei + sakura, second mentor (medium)
  {
    id: 'conv_00380',
    context: 'Sakura updates Mei after a few mentoring sessions — entered university, finding her footing.',
    purpose: 'mentor-mentee follow-up — small adult woman witnessing teen growth',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['大学', '生活', '友達', '楽しい', '成長'],
    cast: ['mei_romantic', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'さくらちゃん、大学、どう？', en: 'Sakura-chan, how\'s university?', style: 'Romantic warm gentle bright sincere-warm asking-mentor, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sakura_teen', jp: '楽しいです！授業も面白くて、友達もできて。', en: 'Fun! Classes are interesting, made friends.', style: 'Teen warm bright sincere enthusiastic-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'よかった。一人暮らしは、慣れた？', en: 'Glad. Living alone — used to it?', style: 'Romantic warm gentle sincere caring-warm follow-up, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-caring' },
      { speaker: 'sakura_teen', jp: '最初寂しかったけど、少しずつ。料理、頑張ってます。', en: 'Lonely at first, but bit by bit. Cooking, I\'m trying.', style: 'Teen warm soft sincere honest-balanced-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'honestly-balanced' },
      { speaker: 'mei_romantic', jp: 'すごい成長だね。一年前と全然違う。', en: 'Such growth. Totally different from a year ago.', style: 'Romantic warm gentle sincere observation-warm proud, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-proud' },
      { speaker: 'sakura_teen', jp: 'メイさんに、いっぱい相談してきたお陰。', en: 'Because I consulted with you, Mei-san.', style: 'Teen warm soft sincere grateful-redirecting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-grateful' },
      { speaker: 'mei_romantic', jp: 'これからも、応援するから。', en: 'I\'ll keep cheering for you.', style: 'Romantic warm soft sincere gentle-extending-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-extending' },
      { speaker: 'sakura_teen', jp: '本当に、ありがとうございます。', en: 'Truly, thank you.', style: 'Teen warm soft sincere deep grateful-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 381 — tatsuya + asuka (medium)
  {
    id: 'conv_00381',
    context: 'Tatsuya visits the school festival in the city; he meets Asuka through Daichi\'s nephew\'s class.',
    purpose: 'small civic adult interaction — country uncle visiting city school',
    ambient: 'school_festival_afternoon',
    sound_effects: [],
    target_vocab: ['学校', '田舎', '子供', '元気', '楽しい'],
    cast: ['tatsuya_country', 'asuka_teacher'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'はじめまして、達也です。だいちの兄貴です。', en: 'Nice to meet you, I\'m Tatsuya. Daichi\'s brother (loosely).', style: 'Country gruff warm formal-rural introducing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-formal' },
      { speaker: 'asuka_teacher', jp: 'まあ、達也さん。だいちさんから、よくお話聞いてます。', en: 'Oh, Tatsuya-san. I often hear about you from Daichi.', style: 'Teacher warm gentle bright sincere-recognizing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'tatsuya_country', jp: '田舎から、子供の文化祭、見に来ました。', en: 'I came from the country, to see the school festival.', style: 'Country gruff warm sincere proud-civic-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-proud' },
      { speaker: 'asuka_teacher', jp: 'わざわざ、嬉しいです。お子さんも、喜びますね。', en: 'Going out of your way — happy news. The kids will be happy too.', style: 'Teacher warm gentle sincere appreciative-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'こういう学校の雰囲気、田舎にはないんで。', en: 'School atmosphere like this — doesn\'t exist in the country.', style: 'Country gruff warm gentle observational-civic-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-observing' },
      { speaker: 'asuka_teacher', jp: '田舎も、私、好きですよ。空気が違うって、聞きました。', en: 'I love the country too. Heard the air is different.', style: 'Teacher warm gentle sincere bridging-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bridging' },
      { speaker: 'tatsuya_country', jp: 'いつでも、田舎、遊びに来てください。', en: 'Anytime, come to the country.', style: 'Country gruff warm sincere generous-extending-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'asuka_teacher', jp: 'ぜひ。今日、文化祭、楽しんでくださいね。', en: 'Please. Today, enjoy the festival.', style: 'Teacher warm gentle warm sincere-extending-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-warm' }
    ]
  },
  // 382 — sachiko + hina (medium)
  {
    id: 'conv_00382',
    context: 'Hina visits her grandmother Sachiko, now widowed. Small bright moments of girl warming the elder.',
    purpose: 'child-elder warmth in widowhood — small simple moments of love',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['おばあちゃん', '一緒', '優しい', '思い出', '元気'],
    cast: ['sachiko_grandma', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'おばあちゃん、ひな、来たよ！', en: 'Grandma, Hina is here!', style: 'High child bright energetic enthusiastic-warm visiting opening, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: 'まあ、ひなちゃん、いらっしゃい。', en: 'Oh, Hina-chan, welcome.', style: 'Soft grandmother warm gentle bright touched-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-touched' },
      { speaker: 'hina_child', jp: 'おじいちゃんに、お花、持ってきた。', en: 'I brought flowers for grandpa.', style: 'High child bright sincere tender-warm offering-disclosure, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'sachiko_grandma', jp: 'まあ、優しいね。おじいちゃん、きっと喜ぶ。', en: 'Oh, kind. Grandpa will surely be happy.', style: 'Soft grandmother warm soft tender deep-touched-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-touched' },
      { speaker: 'hina_child', jp: 'おばあちゃん、寂しくない？', en: 'Grandma, not lonely?', style: 'High child bright soft genuine careful-warm asking, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'softly-caring' },
      { speaker: 'sachiko_grandma', jp: 'ひなちゃんが来てくれると、寂しくないの。', en: 'When you come, Hina-chan, not lonely.', style: 'Soft grandmother warm soft tender sincere-deep-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'hina_child', jp: 'いっぱい、遊びに来る！', en: 'I\'ll come visit lots!', style: 'High child bright sincere committed-warm closing, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sachiko_grandma', jp: 'ありがとう。元気な顔、見れて、嬉しい。', en: 'Thank you. Seeing your lively face — happy.', style: 'Soft grandmother warm soft tender sincere deep-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sincere' },
      { speaker: 'hina_child', jp: 'おばあちゃん大好き。', en: 'I love grandma.', style: 'High child bright sincere tender-warm declaration-closing, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 383 — daichi + mei, milestone (long)
  {
    id: 'conv_00383',
    context: 'Daichi proposes to Mei. Quiet evening at his apartment, all the family connection ground he\'s built.',
    purpose: 'major life milestone — careful sincere proposal',
    ambient: 'apartment_evening',
    sound_effects: [],
    target_vocab: ['結婚', '一緒', '将来', '幸せ', '本気', '感謝'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'メイちゃん、今日、ちゃんと、話したいことがある。', en: 'Mei-chan, today, properly, I want to say.', style: 'Kansai warm soft sincere brave careful-deep-warm opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'bravely-careful' },
      { speaker: 'mei_romantic', jp: 'うん…どうしたの？', en: 'Yes… what is it?', style: 'Romantic warm soft careful gentle-receiving-warm sensing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-careful' },
      { speaker: 'daichi_kansai', jp: 'メイちゃんと、一緒に、ちゃんと将来歩いていきたい。', en: 'With Mei-chan, properly, want to walk into the future.', style: 'Kansai warm soft sincere deep tender-warm disclosure, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: '…うん。', en: '…Yes.', style: 'Romantic warm soft tender deep-quiet-warm anticipating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-quiet' },
      { speaker: 'daichi_kansai', jp: 'メイちゃん、結婚してほしい。本気で。', en: 'Mei-chan, please marry me. Seriously.', style: 'Kansai warm soft brave sincere deep tender-warm proposing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'bravely-tender' },
      { speaker: 'mei_romantic', jp: '…達也…うん、はい。', en: '…Daichi… yes, okay.', style: 'Romantic warm soft tender deep-tearful-warm accepting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-tearful' },
      { speaker: 'daichi_kansai', jp: 'ほんま？嬉しい。本当に、ありがとう。', en: 'Truly? Happy. Truly, thank you.', style: 'Kansai warm soft sincere overwhelmed-deep-warm relief, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'overwhelmed-tender' },
      { speaker: 'mei_romantic', jp: 'こちらこそ。…幸せ。', en: 'Same. …Happy.', style: 'Romantic warm soft tender deep sincere-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'daichi_kansai', jp: 'これから、家族と、ちゃんと話していこな。', en: 'From now on, let\'s talk properly with families.', style: 'Kansai warm soft sincere tender-warm extending-careful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-extending' },
      { speaker: 'mei_romantic', jp: 'うん。一緒に、ね。', en: 'Yes. Together.', style: 'Romantic warm soft tender deep-warm matching-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-matching' },
      { speaker: 'daichi_kansai', jp: 'おじいちゃんも、空から、見ててくれるな。', en: 'Grandfather, from the sky, watching too.', style: 'Kansai warm soft tender deep sincere-philosophical-warm reflection, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-philosophical' },
      { speaker: 'mei_romantic', jp: '私も、感謝してます。皆、繋いでくれた人に。', en: 'Me too — grateful. To all who connected us.', style: 'Romantic warm soft sincere deep tender-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '一緒に、ええ夫婦になろな。', en: 'Together, let\'s become a good couple.', style: 'Kansai warm soft sincere deep tender-warm closing-committing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-committing' },
      { speaker: 'mei_romantic', jp: 'うん…ずっと、よろしくね。', en: 'Yes… forever, please.', style: 'Romantic warm soft tender deep sincere-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

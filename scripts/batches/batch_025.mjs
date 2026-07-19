import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_025)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 484 — kenji + ryosuke + tatsuya (3-speaker, long)
  {
    id: 'conv_00484',
    context: 'Three businessmen discuss a strategic expansion of Tatsuya\'s farm-to-restaurant supply chain.',
    purpose: 'three-male professional planning — strategic future-building',
    ambient: 'office_meeting',
    sound_effects: [],
    target_vocab: ['事業', '将来', '計画', '相談', '信頼', '感謝'],
    cast: ['kenji_office', 'ryosuke_dad', 'tatsuya_country'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '達也さん、亮介さん、本日もありがとうございます。', en: 'Tatsuya-san, Ryosuke-san, thank you for today.', style: 'Salaryman warm formal sincere-professional-warm opening, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'professionally-formal' },
      { speaker: 'tatsuya_country', jp: 'いやいや、いつも、本当にお世話になってます。', en: 'No, no, always — truly indebted.', style: 'Country gruff warm formal humble-warm reciprocal-respectful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-formal' },
      { speaker: 'ryosuke_dad', jp: '今回は、新しい事業展開について、お話できればと。', en: 'This time, about new business development — if we could talk.', style: 'Father warm gentle sincere-professional-warm direction-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'kenji_office', jp: 'うちの会社、新店舗を予定しています。達也さんの野菜、もっと使いたい。', en: 'Our company plans a new store. Want to use Tatsuya-san\'s veggies more.', style: 'Salaryman warm formal sincere bright-warm strategic-disclosing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'ほう、それは、ありがたい話ですな。', en: 'Oh, that\'s a grateful matter.', style: 'Country gruff warm soft sincere-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '達也さんの規模で、対応できる範囲、ご相談したく。', en: 'Within Tatsuya-san\'s scale — wanted to consult about range.', style: 'Father warm gentle sincere-warm professional-careful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'carefully-professional' },
      { speaker: 'tatsuya_country', jp: 'うん、ちゃんと、考えて、ご返事します。', en: 'Yes, will properly think and respond.', style: 'Country gruff warm formal sincere-thoughtful-warm committing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'thoughtfully-formal' },
      { speaker: 'kenji_office', jp: '達也さんを信頼してるから、無理は、お願いしません。', en: 'Because we trust Tatsuya-san — won\'t ask for the impossible.', style: 'Salaryman warm formal sincere-respectful-warm trust-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-trusting' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ、ずっと、信頼してもろてます。', en: 'Same — always trusted.', style: 'Country gruff warm soft sincere-warm reciprocal-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '計画書、お持ちしました。ご自宅で、ゆっくり、ご覧ください。', en: 'Brought the plan. At home, please review slowly.', style: 'Father warm gentle sincere-professional-warm presenting-respectful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'tatsuya_country', jp: 'ありがとうございます。来週までに、お返事しますわ。', en: 'Thank you. Will respond by next week.', style: 'Country gruff warm formal sincere-committing-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'kenji_office', jp: '本当に、感謝しています。今後とも、よろしくお願いします。', en: 'Truly grateful. Please continue association.', style: 'Salaryman warm formal sincere-deep-warm closing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ。今夜は、お食事、ご一緒できれば、嬉しいな。', en: 'Same. Tonight, dinner together — would be happy.', style: 'Country gruff warm soft sincere-warm closing-extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'ぜひ。皆さんで、ゆっくり、語り合いましょう。', en: 'Please. With all, let\'s talk slowly together.', style: 'Father warm gentle sincere-warm closing-warm gathering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 485 — sakura + ren (medium)
  {
    id: 'conv_00485',
    context: 'Sakura visits her cousin Ren and his wife Aoi — Sakura now teaches; Ren works at a startup.',
    purpose: 'small cousins-as-adults catching up — career and life',
    ambient: 'apartment_evening',
    sound_effects: [],
    target_vocab: ['仕事', '楽しい', '結婚', '一緒', '感謝'],
    cast: ['ren_uni', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'さくら、教える仕事、どう？', en: 'Sakura, how\'s teaching?', style: 'University student warm soft sincere bright-warm casual-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: '楽しい。生徒の成長が、見えるのが、嬉しい。', en: 'Fun. Seeing students grow — happy.', style: 'Teen warm soft sincere bright-warm enthusiastic-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'お、いいな。俺、最近、めっちゃ忙しい。', en: 'Oh, nice. Lately I\'m super busy.', style: 'University student warm soft casual sincere-honest-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'casually-honest' },
      { speaker: 'sakura_teen', jp: 'スタートアップ、相変わらず？', en: 'Startup — as always?', style: 'Teen warm soft sincere casual-curious-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、けど、あおいと結婚してから、生活、整ってる。', en: 'Yes, but since marriage with Aoi — life arranged.', style: 'University student warm soft sincere bright-warm reflecting-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'よかった。あおいさん、いつも素敵。', en: 'Glad. Aoi-san — always lovely.', style: 'Teen warm soft sincere bright-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'お互い、頑張ろうな。家族でいられて、感謝してる。', en: 'Mutually, let\'s work hard. Glad to be family.', style: 'University student warm soft sincere deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 486 — sho + ryosuke (short)
  {
    id: 'conv_00486',
    context: 'Sho practices for a school presentation. His father Ryosuke listens and encourages.',
    purpose: 'small dad-son school moment — gentle support',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['学校', '発表', '頑張る', '応援', '一緒'],
    cast: ['ryosuke_dad', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'お父さん、明日、学校で発表があるの。', en: 'Dad, tomorrow at school there\'s a presentation.', style: 'Tiny six-year-old soft small sincere-warm sharing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-sincere' },
      { speaker: 'ryosuke_dad', jp: 'お、頑張ってるね。練習、聞かせて。', en: 'Oh, working hard. Let me hear the practice.', style: 'Father warm soft bright sincere-warm supportive-warm inviting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'ぼくの好きな本、紹介します…えっと、これは…。', en: 'I\'ll introduce my favorite book… um, this is…', style: 'Tiny six-year-old soft small sincere careful-warm nervous-practicing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'carefully-nervous' },
      { speaker: 'ryosuke_dad', jp: 'いいよ、ゆっくりで。お父さん、ちゃんと聞いてる。', en: 'Good, slowly. Dad is listening properly.', style: 'Father warm soft sincere gentle-warm reassuring-listening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-reassuring' },
      { speaker: 'sho_child', jp: '…うん、頑張る。', en: '…Yes, I\'ll try.', style: 'Tiny six-year-old soft small sincere brave-warm closing-committing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-brave' },
      { speaker: 'ryosuke_dad', jp: 'お父さん、ずっと、応援してるからな。', en: 'Dad — always cheering.', style: 'Father warm soft sincere deep-warm tender-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 487 — yumiko + asuka (medium)
  {
    id: 'conv_00487',
    context: 'Yumiko and Asuka have a regular friend tea. Discussion drifts to children growing up.',
    purpose: 'small adult-women ongoing friendship',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['子供', '成長', '一緒', '感謝', '楽しい'],
    cast: ['yumiko_mom', 'asuka_teacher'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'あすかさん、今日も、お時間、ありがとう。', en: 'Asuka-san, thank you for the time today.', style: 'Maternal warm gentle sincere-warm friend-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。子供たち、本当に、大きくなりますね。', en: 'Same. Children — truly growing.', style: 'Teacher warm gentle sincere-warm reflective-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'うん。しょうも、来年は四年生。', en: 'Yes. Sho — fourth grade next year.', style: 'Maternal warm soft sincere reflective-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'ひなちゃんと一緒、いつでも、面倒見てくれて、本当に助かる。', en: 'With Hina-chan — always looking after — truly helpful.', style: 'Teacher warm gentle sincere-warm appreciating-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'いつも、お世話になってます。', en: 'Always — indebted.', style: 'Maternal warm gentle sincere humble-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'asuka_teacher', jp: 'こうやって、子供の成長、一緒に見られる関係って、本当に幸せ。', en: 'Watching children grow together — truly happy.', style: 'Teacher warm soft sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '本当に。これからも、よろしくお願いします。', en: 'Truly. From now on too, please.', style: 'Maternal warm soft sincere closing-warm formal-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 488 — daichi + naoko (medium)
  {
    id: 'conv_00488',
    context: 'Daichi visits Naoko alone for a small adult conversation about family things.',
    purpose: 'in-law man visiting aunt-figure — small adult warmth',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '感謝', '一緒', '将来', '相談'],
    cast: ['daichi_kansai', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'ナオコさん、いつも、本当にありがとうございます。', en: 'Naoko-san, always — truly thank you.', style: 'Kansai warm formal sincere-warm respectful-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。達也さんと、メイ、お幸せそうで、私も嬉しい。', en: 'Same. You and Mei look happy — I\'m happy too.', style: 'Aunt warm gentle sincere-warm appreciating-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'メイちゃん、ナオコさんとお話するの、本当に楽しみで。', en: 'Mei-chan — really looks forward to talking with you.', style: 'Kansai warm soft sincere bright-warm sharing-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: 'メイは、私にとっても、姪のように大事な存在。', en: 'Mei — to me too, like a niece, precious.', style: 'Aunt warm soft sincere deep-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '将来、何かあった時、ナオコさんに、相談、させてもらえますか。', en: 'In the future, when something happens — may I consult you?', style: 'Kansai warm soft sincere careful-warm requesting-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'naoko_aunt', jp: 'もちろん。家族だもの、いつでも、来てね。', en: 'Of course. We\'re family — come anytime.', style: 'Aunt warm soft sincere generous-warm extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'daichi_kansai', jp: '本当に、ありがたい。これからも、よろしくお願いします。', en: 'Truly grateful. From now on too, please.', style: 'Kansai warm soft sincere deep-warm closing-grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 489 — hina + sho + hiroshi_boss + naoko (4-speaker, medium)
  {
    id: 'conv_00489',
    context: 'A family gathering. Hina and Sho engage with their uncle Hiroshi-boss and great-aunt Naoko.',
    purpose: 'four-generation gathering — kids meeting adult relatives',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['おじさん', '家族', '一緒', '楽しい', 'ありがとう'],
    cast: ['hiroshi_boss', 'naoko_aunt', 'hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: '田中おじさん、ナオコちゃん、こんにちは！', en: 'Tanaka-ojisan, Naoko-chan, hello!', style: 'High child bright sincere enthusiastic-warm greeting-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'hiroshi_boss', jp: 'ひなちゃん、しょうくん、お久しぶり。元気でしたか。', en: 'Hina-chan, Sho-kun, long time. Been well?', style: 'Boss measured warm bright sincere-warm child-attentive welcoming, the soft real authority-soft audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: '二人とも、大きくなったね。', en: 'Both — grown.', style: 'Aunt warm gentle bright sincere-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '…はい。学校、ちゃんと、頑張ってます。', en: '…Yes. School — properly working hard.', style: 'Tiny six-year-old soft small sincere proud-warm reporting, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'hina_child', jp: 'ひな、四年生になる！', en: 'Hina is becoming fourth grade!', style: 'High child bright sincere enthusiastic-warm declaring-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'hiroshi_boss', jp: '立派だな。これからも、頑張ってね。', en: 'Splendid. Keep working hard.', style: 'Boss measured warm soft sincere-warm encouraging-warm closing, the soft real authority-soft audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'お祖母様にも、よろしくね。皆で、家族、繋がっていくの、嬉しい。', en: 'Regards to grandma too. Family connecting like this — happy.', style: 'Aunt warm soft sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sho_child', jp: 'ありがとう、おじさん、ナオコちゃん。', en: 'Thank you, ojisan, Naoko-chan.', style: 'Tiny six-year-old soft small sincere-warm tender-warm closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 490 — mei + sachiko (medium)
  {
    id: 'conv_00490',
    context: 'Mei visits widowed Sachiko alone. Quiet warm relationship between the two women.',
    purpose: 'small grand-daughter-in-law and grandmother adult relationship',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['お祖父様', '一緒', '感謝', '幸せ', '思い出'].filter(w => w !== 'お祖父様').concat(['祖父']),
    cast: ['mei_romantic', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'お祖母様、こんにちは。今日もお邪魔します。', en: 'Grandmother, hello. Excuse me today too.', style: 'Romantic warm soft formal sincere-warm respectful-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'メイさん、よく来てくれて。お祖父ちゃんも、喜んでる。', en: 'Mei-san, glad you came. Grandpa too is glad.', style: 'Soft grandmother warm soft sincere-warm tender-welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'mei_romantic', jp: 'お祖父様の指輪、毎日、つけてます。', en: 'Grandpa\'s ring — wearing every day.', style: 'Romantic warm soft tender sincere-warm proud-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sincere' },
      { speaker: 'sachiko_grandma', jp: 'ありがとう。お祖父ちゃんが、ちゃんと、メイさんと一緒にいるって、感じる。', en: 'Thank you. I feel grandpa is with Mei-san properly.', style: 'Soft grandmother warm soft tender deep-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: 'お祖父様との思い出、達也、いつも、たくさん話してくれて。', en: 'Memories with grandpa — Daichi always shares lots.', style: 'Romantic warm soft tender sincere-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sachiko_grandma', jp: 'お祖母ちゃんも、メイさんを、本当に、娘のように思ってる。', en: 'Grandma — truly thinks of Mei-san like a daughter.', style: 'Soft grandmother warm soft sincere deep-warm tender-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: '…ありがとうございます。本当に、家族で、幸せです。', en: '…Thank you. Truly, as family, happy.', style: 'Romantic warm soft tender deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 491 — riku + kenji + daichi (3-speaker, medium)
  {
    id: 'conv_00491',
    context: 'Riku has been working under Kenji for a while. He, Kenji, and Daichi catch up after work.',
    purpose: 'three-male workplace catch-up — across generations of colleagues',
    ambient: 'izakaya_evening',
    sound_effects: [],
    target_vocab: ['仕事', '頑張る', '一緒', '感謝', '応援'],
    cast: ['riku_teen', 'kenji_office', 'daichi_kansai'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'リクくん、最近の仕事、どう？', en: 'Riku-kun, recent work — how?', style: 'Salaryman warm formal sincere-warm casual-asking, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'お陰様で、毎日、勉強になってます。', en: 'Thanks to you — daily learning.', style: 'Teen warm soft sincere respectful-warm humble-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'daichi_kansai', jp: 'けんじさんの下で、ええ経験、積めてるな。', en: 'Under Kenji-san — gathering good experience.', style: 'Kansai warm bright sincere-warm appreciating-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'リクくん、本当によく頑張ってる。私も学ぶことばかり。', en: 'Riku-kun truly works hard. I keep learning too.', style: 'Salaryman warm gentle sincere-warm humble-redirecting-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-humble' },
      { speaker: 'riku_teen', jp: 'いえ、お二人みたいになりたい。本当に、尊敬してます。', en: 'No, want to be like you both. Truly respect.', style: 'Teen warm soft sincere deep-warm tender-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'おだてんでええで。お互い、頑張ろな。', en: 'No flattery. Mutually, work hard.', style: 'Kansai warm bright laughing humble-deflecting-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'warmly-laughing' },
      { speaker: 'kenji_office', jp: 'こうやって、世代を超えて、繋がれるの、本当にありがたい。', en: 'Connecting across generations like this — truly grateful.', style: 'Salaryman warm soft sincere deep-warm closing-philosophical, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 492 — saito + takeda (short)
  {
    id: 'conv_00492',
    context: 'Brief professional phone call between the two civic figures about a small concern.',
    purpose: 'small civic professional check-in',
    ambient: 'phone_call',
    sound_effects: [],
    target_vocab: ['連絡', '心配', '見守る', '協力', 'ありがとう'],
    cast: ['saito_doctor', 'takeda_officer'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'もしもし、武田さん。斎藤です。', en: 'Hello, Takeda-san. Saito here.', style: 'Doctor warm professional brief sincere-warm phone-opening, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-brief' },
      { speaker: 'takeda_officer', jp: 'お疲れさまです。どうされましたか。', en: 'Good work. What happened?', style: 'Officer warm professional sincere-warm receiving-attentive, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'alertly-warm' },
      { speaker: 'saito_doctor', jp: '田中さん、また、少し体調が心配で。', en: 'Tanaka-san — slight health concern again.', style: 'Doctor warm professional gentle sincere-warm careful-disclosure, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'takeda_officer', jp: 'すぐ、見回りに行きます。', en: 'I\'ll go check immediately.', style: 'Officer warm professional sincere immediate-warm committed, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-immediate' },
      { speaker: 'saito_doctor', jp: '助かります。協力、いつも、ありがとうございます。', en: 'Saves us. Cooperation — always thank you.', style: 'Doctor warm professional gentle sincere-warm closing-grateful, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 493 — aoi + asuka (short)
  {
    id: 'conv_00493',
    context: 'Aoi runs into Asuka at the cafe; Asuka is now a known book friend of the family. Brief chat.',
    purpose: 'small civil friendship — bridge between cafe and family',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['本', '楽しい', '一緒', 'おすすめ', 'ありがとう'],
    cast: ['aoi_barista', 'asuka_teacher'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'あおいさん、こんにちは。お元気そうで。', en: 'Aoi-san, hello. You look well.', style: 'Teacher warm gentle sincere-warm bright-welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'aoi_barista', jp: 'あすかさん、いらっしゃい。最近、いい本、ありました？', en: 'Asuka-san, welcome. Any good books lately?', style: 'Soft dreamy barista warm gentle bright sincere-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'asuka_teacher', jp: 'うん、一冊、すごく良かった。あおいさん、絶対好きそう。', en: 'Yes, one — really good. Aoi-san would surely love.', style: 'Teacher warm gentle bright sincere-warm enthusiastic-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '気になる。タイトル、教えてください。', en: 'Curious. Tell me the title.', style: 'Soft dreamy barista warm gentle bright sincere-warm eager-engagement, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: '今度、メモして、持ってきますね。', en: 'Next time — will write down and bring.', style: 'Teacher warm gentle sincere-warm closing-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'ありがとうございます。', en: 'Thank you.', style: 'Soft dreamy barista warm gentle sincere-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 494 — naoko + sakura (long)
  {
    id: 'conv_00494',
    context: 'Sakura visits her aunt Naoko about teaching and writing. Long mentorship continuing.',
    purpose: 'aunt-niece mentorship continued — adult woman wisdom',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['書く', '教える', '将来', '夢', '応援', '感謝'],
    cast: ['naoko_aunt', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'ナオコちゃん、お久しぶり。', en: 'Naoko-chan, long time.', style: 'Teen warm soft sincere-warm family-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'さくらちゃん、来てくれて嬉しい。', en: 'Sakura-chan — glad you came.', style: 'Aunt warm gentle bright sincere-warm welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: '教える仕事、始めて、半年経ちました。', en: 'Started teaching — half a year passed.', style: 'Teen warm soft sincere-warm milestone-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '早いね。生徒たち、どう？', en: 'Time flies. How are students?', style: 'Aunt warm gentle sincere-warm engaging-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-engaging' },
      { speaker: 'sakura_teen', jp: '本当に、可愛い。皆、一生懸命、書こうとしてる。', en: 'Truly cute. All — trying earnestly to write.', style: 'Teen warm soft sincere bright-warm proud-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: 'さくらちゃんが、生徒に、ちゃんと、向き合ってる証拠ね。', en: 'Proof you\'re facing students properly.', style: 'Aunt warm gentle sincere-warm philosophical-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '自分の文章も、書き続けてます。', en: 'My own writing — continuing too.', style: 'Teen warm soft sincere proud-warm committed-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-proud' },
      { speaker: 'naoko_aunt', jp: 'え、嬉しい。雑誌に、また載った？', en: 'Eh, happy. Got published in a magazine again?', style: 'Aunt warm bright sincere-warm engaging-curious, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'はい、二回目。読んでもらえますか。', en: 'Yes, second time. Could you read?', style: 'Teen warm soft sincere proud-warm requesting-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-proud' },
      { speaker: 'naoko_aunt', jp: 'ぜひ。あなたの夢、ちゃんと、現実になってきてる。', en: 'Please. Your dream — properly becoming reality.', style: 'Aunt warm soft sincere deep-warm philosophical-warm proud, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: 'ナオコちゃんが、ずっと応援してくれたから。', en: 'Because you\'ve always cheered for me.', style: 'Teen warm soft sincere deep-warm grateful-redirecting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'さくらちゃんの努力、本物。これからも、応援してる。', en: 'Sakura-chan\'s effort — real. From now on too, cheering.', style: 'Aunt warm soft sincere firm-warm closing-deep-believing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-firm' },
      { speaker: 'sakura_teen', jp: '本当に、感謝してます。', en: 'Truly, grateful.', style: 'Teen warm soft sincere deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。私の方が、教えてもらってる気がする。', en: 'Same. I feel like I\'m being taught.', style: 'Aunt warm soft sincere humble-deep-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-humble' }
    ]
  },
  // 495 — sho + hina (short)
  {
    id: 'conv_00495',
    context: 'Sho and Hina sitting on the porch on a quiet afternoon.',
    purpose: 'small sibling-like cousins gentle moment',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '雲', '空', '友達'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょうくん、雲、見て。動物みたい。', en: 'Sho-kun, look at the cloud. Like an animal.', style: 'High child bright sincere imaginative-warm sharing, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'imaginatively-bright' },
      { speaker: 'sho_child', jp: '…うん、犬みたい。', en: '…Yeah, like a dog.', style: 'Tiny six-year-old soft small sincere matching-warm gentle-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-matching' },
      { speaker: 'hina_child', jp: 'お空、いつまでも、見ていられる。', en: 'The sky — can keep watching forever.', style: 'High child bright sincere reflective-warm philosophical, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'sho_child', jp: 'ひなと一緒だから、楽しい。', en: 'Because with Hina, fun.', style: 'Tiny six-year-old soft small sincere tender-warm gentle-disclosing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'うん、ひなも、しょうくんと一緒、大好き。', en: 'Yes, Hina too, with Sho — love it.', style: 'High child bright sincere tender-warm closing-warm loving, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '…ずっと、友達でいよう。', en: '…Let\'s be friends forever.', style: 'Tiny six-year-old soft small sincere deep-warm tender-promising, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 496 — daichi + mei, baby announcement (long)
  {
    id: 'conv_00496',
    context: 'Mei tells Daichi she\'s pregnant. Tender private moment.',
    purpose: 'major narrative milestone — child announcement',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['子供', '一緒', '幸せ', '将来', '感謝', '永遠'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: '達也、ちょっと、座って、お話できる？', en: 'Daichi, can you sit, can we talk?', style: 'Romantic warm soft tender careful-warm brave-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'carefully-brave' },
      { speaker: 'daichi_kansai', jp: 'うん、もちろん。どうしたん？', en: 'Yes, of course. What\'s up?', style: 'Kansai warm soft tender gentle-warm careful-receiving, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'gently-receiving' },
      { speaker: 'mei_romantic', jp: '私…赤ちゃん、できた。', en: 'I… I have a baby.', style: 'Romantic warm soft tender deep brave-warm trembling-deep-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-trembling' },
      { speaker: 'daichi_kansai', jp: '…ほんま？', en: '…Truly?', style: 'Kansai warm soft tender deep-brief-warm overwhelmed-disbelief-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-overwhelmed' },
      { speaker: 'mei_romantic', jp: 'うん、ほんと。今朝、確認した。', en: 'Yes, truly. Confirmed this morning.', style: 'Romantic warm soft tender sincere-warm confirming-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sincere' },
      { speaker: 'daichi_kansai', jp: 'メイちゃん…本当に、嬉しい。涙、止まらん。', en: 'Mei-chan… truly, happy. Tears won\'t stop.', style: 'Kansai warm soft tender deep-warm overwhelmed-tearful-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-overwhelmed' },
      { speaker: 'mei_romantic', jp: '私も、ずっと、信じられなくて。', en: 'Me too — couldn\'t believe it.', style: 'Romantic warm soft tender sincere-warm matching-overwhelmed, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-matching' },
      { speaker: 'daichi_kansai', jp: 'これから、わいら、家族、三人になるんやな。', en: 'From now on — us, family of three.', style: 'Kansai warm soft tender deep-warm philosophical-warm wondering, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-philosophical' },
      { speaker: 'mei_romantic', jp: '本当に。私たちの、子供。', en: 'Truly. Our child.', style: 'Romantic warm soft tender deep-warm sincere-disclosing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'daichi_kansai', jp: 'お祖父ちゃん、お祖母ちゃん、家族、皆、絶対嬉しいで。', en: 'Grandpa, grandma, all family — surely happy.', style: 'Kansai warm soft tender bright-warm sincere-anticipating, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'mei_romantic', jp: '皆に、ちゃんと、伝えたい。', en: 'Want to tell all properly.', style: 'Romantic warm soft tender sincere-warm committed-warm planning, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'daichi_kansai', jp: 'これから、ずっと、一緒に、頑張ろな。', en: 'From now on, always, together — work hard.', style: 'Kansai warm soft tender deep-warm closing-extending-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: 'うん。永遠に、達也と一緒に。', en: 'Yes. Forever, together with Daichi.', style: 'Romantic warm soft tender deep-warm closing-eternal-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'daichi_kansai', jp: '感謝、本当に、感謝してる。', en: 'Grateful, truly, grateful.', style: 'Kansai warm soft tender deep-warm closing-grateful-overwhelmed, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 497 — yuki + saito (medium)
  {
    id: 'conv_00497',
    context: 'Yuki visits Saito for a regular checkup. Adult-patient long rapport.',
    purpose: 'small medical adult check — work-stress consultation',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['仕事', '体調', '睡眠', '健康', '相談'],
    cast: ['saito_doctor', 'yuki_office'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '佐藤さん、最近、お忙しそうですね。', en: 'Sato-san, lately you look busy.', style: 'Doctor warm professional gentle sincere-warm observing-care, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'yuki_office', jp: 'はい、新しい部署で、毎日、ばたばたで。', en: 'Yes, new section, daily hectic.', style: 'Office woman warm soft sincere honest-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-honest' },
      { speaker: 'saito_doctor', jp: '睡眠は、ちゃんと取れてますか。', en: 'Sleep — getting enough?', style: 'Doctor warm professional gentle sincere-warm careful-asking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-careful' },
      { speaker: 'yuki_office', jp: 'やっぱり、ちょっと足りない感じで。', en: 'As expected, slightly insufficient.', style: 'Office woman warm soft honest-self-aware-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'saito_doctor', jp: '体調、特に問題ないですが、無理は禁物です。', en: 'No particular issues, but no overdoing.', style: 'Doctor warm professional gentle balanced-warm careful-direction, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-balanced' },
      { speaker: 'yuki_office', jp: 'はい、気を付けます。相談、ありがとうございます。', en: 'Yes, will be careful. Thank you for consultation.', style: 'Office woman warm soft sincere committed-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '無理されないこと。それが、一番の薬です。', en: 'Not overdoing — that\'s the best medicine.', style: 'Doctor warm gentle wise sincere-warm closing-philosophical, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' }
    ]
  },
  // 498 — sachiko + asuka (short)
  {
    id: 'conv_00498',
    context: 'Sachiko at a community center event. Asuka recognizes her through family connections.',
    purpose: 'small civic acquaintance — gentle widow recognition',
    ambient: 'community_room',
    sound_effects: [],
    target_vocab: ['お祖母様', 'お元気', '一緒', '感謝', '優しい'].filter(w => w !== 'お祖母様' && w !== 'お元気').concat(['祖母', '元気']),
    cast: ['sachiko_grandma', 'asuka_teacher'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: '田中さん、こんにちは。お元気そうで。', en: 'Tanaka-san, hello. You look well.', style: 'Teacher warm gentle bright sincere-warm civil-recognizing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sachiko_grandma', jp: 'まあ、先生。皆さんに、よくしてもらって、おかげ様で。', en: 'My, sensei. Thanks to everyone\'s kindness — thanks to all.', style: 'Soft grandmother warm soft sincere-warm humble-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'asuka_teacher', jp: 'ご家族、ひなちゃん、しょうくんも、本当に優しいお子さんで。', en: 'Your family — Hina-chan, Sho-kun — truly kind children.', style: 'Teacher warm gentle sincere-warm complimenting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'ありがとう。皆さんのお陰で、孫たちが、ちゃんと育ってる。', en: 'Thank you. Thanks to all — grandchildren growing properly.', style: 'Soft grandmother warm soft sincere-warm grateful-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。皆さんと一緒に、ご縁、繋がっていくの、嬉しい。', en: 'Same. Connecting with all — happy.', style: 'Teacher warm gentle sincere-warm closing-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '本当に、ありがたい、ご縁です。', en: 'Truly, grateful — connection.', style: 'Soft grandmother warm soft sincere deep-warm closing-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 499 — ren + tatsuya + daichi (3-speaker, medium)
  {
    id: 'conv_00499',
    context: 'Three men in the connected family — Ren, Daichi, Tatsuya — at the country house for a casual visit.',
    purpose: 'three-male family-extended adult warmth',
    ambient: 'farm_porch_evening',
    sound_effects: [],
    target_vocab: ['田舎', '家族', '一緒', '楽しい', '感謝'],
    cast: ['daichi_kansai', 'ren_uni', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '達也さん、ようやく、れんくん、田舎、連れてこれた。', en: 'Tatsuya-san, finally brought Ren-kun to the country.', style: 'Kansai warm bright sincere-warm gathering-warm opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'おう、ようこそ。れんくん、好きなだけ、おって。', en: 'Yeah, welcome. Stay as long as you like.', style: 'Country gruff warm bright sincere-warm generous-rural welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-warm' },
      { speaker: 'ren_uni', jp: 'お邪魔します。空気、本当に違いますね。', en: 'Excuse me. Air really is different.', style: 'University student warm soft sincere bright-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'メイちゃんも、初めて来た時、同じこと言うてた。', en: 'Mei said the same when first came.', style: 'Kansai warm bright sincere-warm matching-warm reflecting, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'お酒、用意したで。皆で飲も。', en: 'Sake ready. Let\'s all drink.', style: 'Country gruff warm bright sincere-warm generous-rural-gathering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-bright' },
      { speaker: 'ren_uni', jp: '楽しみっす。皆と、家族で、こうやって、過ごせるの、本当に幸せ。', en: 'Looking forward. With family like this — truly happy.', style: 'University student warm soft sincere deep-warm reflective-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '本当に、わいも、感謝してる。', en: 'Truly, I too am grateful.', style: 'Kansai warm soft sincere deep-warm closing-matching-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '家族で、繋がっていけるの、ええもんやな。', en: 'Family — connecting like this, good thing.', style: 'Country gruff warm soft sincere-warm closing-deep-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 500 — hiroshi_boss + kenji + yuki + ryosuke (4-speaker, long) — milestone
  {
    id: 'conv_00500',
    context: 'Five years on from the original quarterly review batch. Hiroshi-boss formally retires; Kenji, Yuki, Ryosuke gather to honor him.',
    purpose: 'four-adult workplace farewell — milestone career closure',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['退職', '感謝', '一緒', '将来', '思い出', '尊敬'],
    cast: ['hiroshi_boss', 'kenji_office', 'yuki_office', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '部長、本日は、お時間、いただき、ありがとうございます。', en: 'Boss, thank you for the time today.', style: 'Salaryman warm formal sincere-warm milestone-opening-respectful, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'hiroshi_boss', jp: 'こちらこそ。皆さんと、こうやって、お食事できるの、本当に嬉しい。', en: 'Same. Meal with all like this — truly happy.', style: 'Boss measured warm soft sincere-warm grateful-emotional, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '部長、長い間、本当に、お世話になりました。', en: 'Boss, for a long time — truly indebted.', style: 'Office woman warm soft sincere-warm deep-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '部長から、本当に、たくさんのことを、教わりました。', en: 'From boss — truly learned so many things.', style: 'Father warm soft sincere-warm deep-grateful-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '皆さんが、ずっと、支えてくれたから、私、今日まで来れた。', en: 'Because all supported me — I came this far.', style: 'Boss measured warm soft sincere deep-warm humble-redirecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-humble' },
      { speaker: 'kenji_office', jp: '部長のお陰で、私も、自分の道、見つけられました。', en: 'Thanks to boss — I found my own path.', style: 'Salaryman warm soft sincere deep-warm grateful-disclosure, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '私も。本当に、人生の恩師、です。', en: 'Me too. Truly — life mentor.', style: 'Office woman warm soft sincere deep-warm grateful-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'もう、退職しますが、皆さんとは、ずっと、ご縁、続けたい。', en: 'Retiring now, but with all — want to keep connection.', style: 'Boss measured warm soft sincere deep-warm wishing-warm closing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'もちろん。お会いする機会、これからも、必ず作ります。', en: 'Of course. Chances to meet — will surely create.', style: 'Father warm soft sincere committed-warm extending-future, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'kenji_office', jp: 'これからは、お時間、ゆっくり、お過ごしください。', en: 'From now on, please spend time slowly.', style: 'Salaryman warm soft sincere closing-warm blessing-respectful, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '家族や、趣味の友達と、ゆっくり、時間を過ごします。', en: 'With family, hobby friends — will spend time slowly.', style: 'Boss measured warm soft sincere-warm forward-warm sharing-plans, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '尊敬してます、本当に。', en: 'Truly respect you.', style: 'Office woman warm soft sincere deep-warm tender-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '乾杯しましょう。部長の、長いお仕事に、感謝を込めて。', en: 'Let\'s cheers. With gratitude for boss\'s long work.', style: 'Father warm soft sincere closing-warm rallying-tender-respectful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '本当に、ありがとうございました。皆さんの将来、心から、応援しています。', en: 'Truly, thank you. From the heart, cheering for your future.', style: 'Boss measured warm soft sincere deep-warm closing-blessing-tender, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 501 — mrs_mori + sachiko + naoko (3-speaker, medium)
  {
    id: 'conv_00501',
    context: 'Three older women — Mrs. Mori, Sachiko, Naoko — share gardening tips and tea.',
    purpose: 'three-older-women community warmth',
    ambient: 'garden_afternoon',
    sound_effects: [],
    target_vocab: ['庭', '花', '楽しい', '一緒', '感謝'],
    cast: ['mrs_mori_neighbor', 'sachiko_grandma', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: 'さちこさん、なおこさん、今日もありがとう。', en: 'Sachiko-san, Naoko-san, thank you today.', style: 'Neighbor warm gentle sincere-warm community-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '今年の花、本当に、綺麗ね。', en: 'This year\'s flowers — truly beautiful.', style: 'Soft grandmother warm soft sincere bright-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '森さんの、お世話の賜物ね。', en: 'Result of Mori-san\'s care.', style: 'Aunt warm gentle bright sincere-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '皆さんが、いつも、声をかけてくれるから。', en: 'Because all of you always call out to me.', style: 'Neighbor warm gentle sincere-warm humble-redirecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'sachiko_grandma', jp: 'こうやって、お友達がいるって、本当に、大事。', en: 'Having friends like this — truly important.', style: 'Soft grandmother warm soft sincere deep-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'お母さんが、こうやって、笑ってくれてるの、嬉しい。', en: 'Mother smiling like this — happy.', style: 'Aunt warm soft sincere tender-warm reflective-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'こうやって、皆で、お庭、続けていきたい。', en: 'Continuing the garden together like this.', style: 'Neighbor warm soft sincere closing-warm extending-warm wishing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '本当に、感謝してる。', en: 'Truly grateful.', style: 'Soft grandmother warm soft sincere deep-warm closing-brief, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 502 — riku + asuka + sakura (3-speaker, medium)
  {
    id: 'conv_00502',
    context: 'Riku now an adult, runs into Sakura and Asuka at a small literary event. Quick warm reunion.',
    purpose: 'three-young-adult cross-pollination — small community',
    ambient: 'event_hall',
    sound_effects: [],
    target_vocab: ['先生', '一緒', '楽しい', '頑張る', '感謝'],
    cast: ['riku_teen', 'sakura_teen', 'asuka_teacher'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'あれ、さくらと、あすか先生！', en: 'Hey, Sakura and Asuka-sensei!', style: 'Teen warm bright sincere-warm surprised-recognition, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'リク！偶然！', en: 'Riku! Coincidence!', style: 'Teen warm bright sincere-warm surprised-matching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'リクさん、お久しぶり！', en: 'Riku-san, long time!', style: 'Teacher warm bright sincere-warm welcoming-recognition-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: 'お二人とも、こんな場所で会えるなんて。', en: 'Both — meeting in such a place.', style: 'Teen warm soft sincere wondering-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'リクも、本、好きだったよね。', en: 'Riku liked books too, right?', style: 'Teen warm soft sincere reflective-warm asking-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'うん、最近、また、よく読んでる。', en: 'Yes, lately, reading often again.', style: 'Teen warm soft sincere bright-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'こうやって、また、皆さんに会えるの、嬉しい。', en: 'Meeting like this — happy.', style: 'Teacher warm gentle sincere-warm deep-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'これからも、皆で、繋がっていけたらいいね。', en: 'From now on too — staying connected.', style: 'Teen warm soft sincere closing-warm extending-warm wishing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 503 — yumiko + hina + sho + sachiko (4-speaker, long)
  {
    id: 'conv_00503',
    context: 'Multi-generation family dinner at Sachiko\'s. The family gathers casually.',
    purpose: 'four-generation warm family meal',
    ambient: 'dining_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '楽しい', 'ご飯', '美味しい', '感謝'],
    cast: ['sachiko_grandma', 'yumiko_mom', 'hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: '皆、いっぱい、食べてね。', en: 'Everyone, eat lots.', style: 'Soft grandmother warm gentle bright sincere-warm hosting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'hina_child', jp: 'お祖母様のご飯、いっつも美味しい！', en: 'Grandma\'s food — always delicious!', style: 'High child bright sincere enthusiastic-warm celebrating, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '…ぼくも、お祖母様のご飯、大好き。', en: '…I love grandma\'s food too.', style: 'Tiny six-year-old soft small sincere tender-warm matching, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'yumiko_mom', jp: 'お母さん、いつも、ありがとう。', en: 'Mother, always — thank you.', style: 'Maternal warm soft sincere deep-warm grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'こうやって、皆で、ご飯食べるの、本当に、嬉しい。', en: 'Eating together like this — truly happy.', style: 'Soft grandmother warm soft sincere deep-warm reflective-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'hina_child', jp: 'お祖父様も、見てくれてるかな？', en: 'Grandpa watching too?', style: 'High child bright sincere wondering-warm tender-asking, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'tenderly-wondering' },
      { speaker: 'sachiko_grandma', jp: 'うん、絶対、見てる。お祖父ちゃん、皆と、一緒よ。', en: 'Yes, surely watching. Grandpa is with us.', style: 'Soft grandmother warm soft tender sincere-warm comforting-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-comforting' },
      { speaker: 'sho_child', jp: 'お祖父様、ぼく、ちゃんと、覚えてるよ。', en: 'Grandpa — I remember properly.', style: 'Tiny six-year-old soft small sincere tender-warm promising-disclosure, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'yumiko_mom', jp: 'お祖父様、絶対、嬉しい。', en: 'Grandpa surely happy.', style: 'Maternal warm soft tender sincere-warm comforting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'ひな、お祖父様の話、いっつも、覚えてる！', en: 'Hina — always remembers grandpa\'s stories!', style: 'High child bright sincere proud-warm declaring-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sachiko_grandma', jp: 'ありがとう、皆。お祖父ちゃんが、本当に、皆の中で、生きてる。', en: 'Thank you, all. Grandpa truly lives among all.', style: 'Soft grandmother warm soft tender deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: 'お母さん、これからも、ずっと、一緒に。', en: 'Mother, from now on always together.', style: 'Maternal warm soft tender sincere-warm closing-extending-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: '皆と一緒で、本当に、幸せ。', en: 'With all — truly happy.', style: 'Soft grandmother warm soft tender deep-warm closing-deep-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

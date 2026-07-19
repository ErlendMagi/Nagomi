import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_038)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 744 — kenji + hiroshi_boss, project effect (medium)
  {
    id: 'conv_00744',
    context: 'Kenji proposes a new method to improve project effectiveness.',
    purpose: 'boss-subordinate workplace proposal with N3 vocabulary',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['方法', '効果', '期待', '組織', '責任'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '部長、新しい方法、提案、よろしいですか。', en: 'Boss — new method, propose, okay?', style: 'Salaryman warm formal sincere-warm respectful-opening careful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '聞こう。要点、簡潔にだ。', en: 'Will listen. Key point — concise.', style: 'Boss firm formal direct authoritative receptive-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '組織の効果、上げる、新しいやり方です。', en: 'Organization effect — raise, new way.', style: 'Salaryman warm formal sincere-warm professional-clear, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '期待、出来るのか。具体的に、説明しろ。', en: 'Expectation possible? Concretely — explain.', style: 'Boss firm formal direct probing-clear demanding, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '三ヶ月で、結果、出る、見込みです。', en: 'In three months — result, emerge, expected.', style: 'Salaryman warm formal sincere-warm confident-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'よし。お前に、責任、任せる。', en: 'Good. You — responsibility, entrust.', style: 'Boss firm formal direct decisive-warm trusting, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' },
      { speaker: 'kenji_office', jp: 'ありがとうございます。全力で、取り組みます。', en: 'Thank you. Full strength — engage.', style: 'Salaryman warm formal sincere closing-warm committed-respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 745 — sho + hina, name game (short)
  {
    id: 'conv_00745',
    context: 'Hina makes up names for her stuffed animals with Sho.',
    purpose: 'children-naming play exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['名前', '可愛い', '一緒', '楽しい', '考える'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、このうさぎ、名前、考えて。', en: 'Sho — this rabbit, name, think.', style: 'High child bright sincere enthusiastic-warm asking-playful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うーん、ぴょんちゃん、どう？', en: 'Hmm — Pyon-chan, how?', style: 'Tiny six-year-old soft small sincere thinking-warm proposing, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'ぴょんちゃん、すごく可愛い名前！', en: 'Pyon-chan — very cute name!', style: 'High child bright sincere enthusiastic-warm appreciating-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、もっと、考えよう。', en: 'Together — more, think.', style: 'Tiny six-year-old soft small sincere inviting-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい！全部に、名前、つけよう。', en: 'Fun! All — name, attach.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 746 — asuka + ren, English club (medium)
  {
    id: 'conv_00746',
    context: 'Asuka and Ren discuss the English club after school.',
    purpose: 'teacher-alum English education exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['英語', '勉強', '方法', '楽しい', '一緒'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、英語のクラブ、手伝ってくれる？', en: 'Ren-kun — English club, will help?', style: 'Teacher warm gentle sincere-warm asking-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'もちろん。何の勉強、してるんですか？', en: 'Of course. What studying — doing?', style: 'University student warm bright sincere-warm engaged-curious helpful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: '会話、中心。新しい方法、試したい。', en: 'Conversation — center. New method — want to try.', style: 'Teacher warm gentle sincere-warm planning-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'ゲーム、入れたら、生徒、楽しいかも。', en: 'Game — adding, students, fun maybe.', style: 'University student warm bright sincere-warm proposing-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'いいね。一緒に、計画、立てよう。', en: 'Nice. Together — plan, set.', style: 'Teacher warm gentle sincere-warm collaborative-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '来週、案、持ってきます。', en: 'Next week — plan, will bring.', style: 'University student warm bright sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'ありがとう。生徒、喜ぶよ。', en: 'Thanks. Students — will be happy.', style: 'Teacher warm gentle sincere closing-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 747 — sakura + riku, freedom + independence (long)
  {
    id: 'conv_00747',
    context: 'Riku tells Sakura about wanting to live alone in college.',
    purpose: 'sibling honest independence-talk',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['自由', '一人', '相談', '大切', '人生'],
    cast: ['sakura_teen', 'riku_teen'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'さくら、相談、あるんだ。', en: 'Sakura — consultation, exists.', style: 'Teen warm soft sincere serious-opening vulnerable-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '何？真剣な顔。', en: 'What? Serious face.', style: 'Teen warm soft sincere observing-warm concerned-curious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'riku_teen', jp: '大学行ったら、一人で、暮らしたい。', en: 'College — alone, want to live.', style: 'Teen warm soft sincere vulnerable-warm honest-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'そうなんだ。自由、欲しい？', en: 'Really. Freedom — want?', style: 'Teen warm soft sincere understanding-warm probing-gentle, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '少しね。自分で、決めたい。', en: 'A bit. By self — want to decide.', style: 'Teen warm soft sincere honest-warm reflective-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'お父さん、お母さん、心配するよ。', en: 'Dad — Mom, will worry.', style: 'Teen warm soft sincere caring-warm honest-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '分かってる。ちゃんと、話す。', en: 'Understand. Properly — will talk.', style: 'Teen warm soft sincere committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '応援する。人生、自分で歩むの、大切。', en: 'Support. Life — by self walking, important.', style: 'Teen warm soft sincere affirming-warm philosophical-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'riku_teen', jp: 'ありがとう。さくらの言葉、力になる。', en: 'Thanks. Sakura\'s words — become strength.', style: 'Teen warm soft sincere grateful-warm intimate-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '困った時、いつでも、相談して。', en: 'When troubled — anytime, consult.', style: 'Teen warm soft sincere reassuring-warm tender-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'うん。お前も、頼っていいぞ。', en: 'Yes. You also — can rely.', style: 'Teen warm soft sincere matching-warm tender-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'うん、絶対。', en: 'Yes — surely.', style: 'Teen warm soft sincere closing-warm intimate-deep brief, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'riku_teen', jp: '一緒に、進もう、これからも。', en: 'Together — proceed, from now too.', style: 'Teen warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 748 — daichi + tatsuya, town visit (medium)
  {
    id: 'conv_00748',
    context: 'Daichi visits Tatsuya\'s small country town for the first time.',
    purpose: 'cousin small-town tour exchange',
    ambient: 'street_morning',
    sound_effects: [],
    target_vocab: ['町', '一緒', '自然', '中心', '小さい'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、この町、小さいけど、いいなぁ。', en: 'Tatsuya — this town, small but nice.', style: 'Kansai warm bright sincere appreciative-warm observing-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '町の中心、駅、すぐそこだ。', en: 'Town center — station, right there.', style: 'Country warm low sincere unhurried informing-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '皆、顔見知り、やね、ここ。', en: 'All — acquainted, here.', style: 'Kansai warm bright sincere observing-warm appreciative, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '昔から、皆、家族みたいだ。', en: 'Long ago — all, family-like.', style: 'Country warm low sincere unhurried philosophical-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '自然、すぐ近くにある、贅沢やん。', en: 'Nature — right close, luxury.', style: 'Kansai warm bright sincere appreciative-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '都会と、違う、ゆっくり。', en: 'City — different, slow.', style: 'Country warm low sincere unhurried philosophical-deep steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '一緒に、また、ゆっくり来るわ。', en: 'Together — again, slowly come.', style: 'Kansai warm bright sincere closing-warm promising-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 749 — yuki + aoi, women's day shopping (medium)
  {
    id: 'conv_00749',
    context: 'Yuki and Aoi go shopping for women\'s clothing.',
    purpose: 'two-women casual shopping exchange',
    ambient: 'shop_afternoon',
    sound_effects: [],
    target_vocab: ['女性', '商品', '可愛い', '一緒', '高い'],
    cast: ['yuki_office', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、この女性向けの商品、可愛いね。', en: 'Aoi-chan — this women\'s product, cute.', style: 'Office woman bright soft sincere observing-warm enthusiastic-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '本当。色も、デザインも、素敵。', en: 'Truly. Color and design — lovely.', style: 'Barista warm soft sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '値段、ちょっと、高いね。', en: 'Price — a bit, high.', style: 'Office woman bright soft sincere observing-warm honest-practical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'うん。でも、質、よさそう。', en: 'Yes. But — quality, seems good.', style: 'Barista warm soft sincere-warm evaluating-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'たまには、自分に、ご褒美。', en: 'Once in while — self, reward.', style: 'Office woman bright soft sincere bright-warm justifying-playful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'ね。一緒に、買おう。', en: 'Right. Together — buy.', style: 'Barista warm soft sincere-warm agreeing-warm playful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '決まりだね。会計、行こう。', en: 'Decided. Checkout — go.', style: 'Office woman bright soft sincere closing-warm decisive-bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 750 — kenji + ryosuke, work-life experience (medium)
  {
    id: 'conv_00750',
    context: 'Ryosuke advises Kenji on work-life balance through experience.',
    purpose: 'two-men experience mentorship exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['経験', '人生', '相談', '大切', '家族'],
    cast: ['ryosuke_dad', 'kenji_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '亮介さん、最近、仕事、疲れます。', en: 'Ryosuke-san — recently, work, tired.', style: 'Salaryman warm gentle sincere-warm vulnerable-opening honest, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '分かるよ。私の経験でも、あった。', en: 'Understand. My experience also — existed.', style: 'Father warm gentle sincere-warm empathic-warm sharing-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'どう、乗り越えましたか？', en: 'How — overcame?', style: 'Salaryman warm gentle sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ryosuke_dad', jp: '家族との時間、大切に、しました。', en: 'Family time — preciously, did.', style: 'Father warm gentle sincere-warm philosophical-warm sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'なるほど。優先順位、ですね。', en: 'I see. Priority — right.', style: 'Salaryman warm gentle sincere-warm understanding-warm reflective, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '人生、長いようで、短いから。', en: 'Life — long-seeming, short.', style: 'Father warm gentle sincere-warm philosophical-deep wise-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: 'いつでも、相談、出来て、感謝です。', en: 'Anytime — consult, possible, grateful.', style: 'Salaryman warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 751 — sho + asuka, history lesson (medium)
  {
    id: 'conv_00751',
    context: 'Asuka gives Sho a simple history lesson about old Japan.',
    purpose: 'teacher-young-child history exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['歴史', '昔', '日本', '一緒', '楽しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、日本の歴史、聞いてみる？', en: 'Sho-kun — Japan\'s history, try listening?', style: 'Teacher warm gentle sincere-warm inviting-warm child-friendly opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'うん、聞きたい。お話、好き。', en: 'Yes — want to listen. Story — like.', style: 'Tiny six-year-old soft small sincere bright-warm enthusiastic-receptive, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '昔の人、お米、大事にしてた。', en: 'Old people — rice, valued.', style: 'Teacher warm gentle sincere-warm informing-warm child-friendly, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'お米、ぼくも、大好き。', en: 'Rice — I also, love.', style: 'Tiny six-year-old soft small sincere bright-warm matching-warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: 'お米作り、皆で、一緒にしてた。', en: 'Rice-making — all together, did.', style: 'Teacher warm gentle sincere-warm informing-warm narrative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '楽しそう。皆、一緒、いいね。', en: 'Looks fun. All — together, nice.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: 'また、お話、しようね。', en: 'Again — story, do.', style: 'Teacher warm gentle sincere closing-warm tender-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 752 — sachiko + goro, garden experience (short)
  {
    id: 'conv_00752',
    context: 'Sachiko shows Goro her new garden additions.',
    purpose: 'elderly-couple garden appreciation',
    ambient: 'garden_morning',
    sound_effects: [],
    target_vocab: ['花', '自然', '一緒', '綺麗', '大切'],
    cast: ['sachiko_grandma', 'goro_grandpa'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'おじいちゃん、この花、見て。', en: 'Grandpa — this flower, look.', style: 'Grandma warm gentle sincere-warm tender-warm inviting-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'goro_grandpa', jp: 'おお、綺麗だ。お前が、育てたか。', en: 'Oh — beautiful. You — grew?', style: 'Grandpa warm gentle sincere-warm appreciative-warm aged-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '自然と、一緒、毎日が、楽しい。', en: 'Nature — together, every day fun.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'goro_grandpa', jp: '大切に、育ててるな。', en: 'Preciously — growing.', style: 'Grandpa warm gentle sincere-warm appreciative-warm aged-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'これからも、一緒に、世話するね。', en: 'From now — together, care.', style: 'Grandma warm gentle sincere closing-warm tender-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 753 — ren + sakura, value/career (long)
  {
    id: 'conv_00753',
    context: 'Ren and Sakura discuss what gives life meaning.',
    purpose: 'two-young philosophical life-value exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['価値', '人生', '意味', '大切', '一緒'],
    cast: ['ren_uni', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、人生の価値、考えたこと、ある？', en: 'Ren-bro — life\'s value, thought about?', style: 'Teen warm soft sincere philosophical-opening curious-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: 'たまに。難しい質問だね。', en: 'Sometimes. Difficult question.', style: 'University student warm soft sincere-warm thoughtful-warm honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'sakura_teen', jp: '何が、人生の意味、と思う？', en: 'What — life\'s meaning, think?', style: 'Teen warm soft sincere probing-warm sincere-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: '愛する人、いる事、かな。', en: 'Loving people — existing, maybe.', style: 'University student warm soft sincere-warm vulnerable-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '私も、そう思う。家族、友達、大切。', en: 'I also — so think. Family, friends — important.', style: 'Teen warm soft sincere agreeing-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '小さな幸せ、毎日、感じる事も。', en: 'Small happiness — every day, feeling too.', style: 'University student warm soft sincere-warm philosophical-warm gentle, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '雨の音、お茶の温かさ、そういうの。', en: 'Rain sound — tea warmth, those things.', style: 'Teen warm soft sincere reflecting-warm poetic-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん。書く、お前らしい、答え。', en: 'Yes. Writing — you-like, answer.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '価値、人それぞれ、なんだね。', en: 'Value — each person, different.', style: 'Teen warm soft sincere reflecting-warm philosophical-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'だから、人生、面白い。', en: 'So — life, interesting.', style: 'University student warm soft sincere-warm philosophical-warm gentle, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'これからも、一緒に、考えていこう。', en: 'From now — together, think.', style: 'Teen warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '良い時間だった、ありがとう。', en: 'Good time was — thanks.', style: 'University student warm soft sincere closing-warm grateful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 754 — hina + yumiko, individual feelings (short)
  {
    id: 'conv_00754',
    context: 'Hina shows Yumiko a unique drawing she made alone.',
    purpose: 'mother-child individual expression',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['個人', '可愛い', '一緒', '楽しい', '大切'],
    cast: ['hina_child', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'お母さん、ひな個人の絵、見て。', en: 'Mom — Hina personal picture, look.', style: 'High child bright sincere proud-opening enthusiastic-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: 'わあ、可愛い。ひなちゃんらしい。', en: 'Wow — cute. Hina-chan-like.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '一人で、考えて、描いた。', en: 'Alone — thinking, drew.', style: 'High child bright sincere proud-warm declaring-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: 'すごいね。自分の色、大切に。', en: 'Amazing. Own color — preciously.', style: 'Maternal warm gentle sincere-warm encouraging-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'お母さんと、一緒、描くの、楽しい。', en: 'With mother — together, drawing, fun.', style: 'High child bright sincere closing-warm tender-enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 755 — hiroshi_boss + kenji, management decision (medium)
  {
    id: 'conv_00755',
    context: 'Hiroshi briefs Kenji about an organizational change.',
    purpose: 'boss-subordinate management briefing N3',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['管理', '組織', '影響', '責任', '理解'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、管理体制、変わるぞ。', en: 'Kenji — management structure, changing.', style: 'Boss firm formal direct authoritative announcing-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '理解しました。詳細、伺います。', en: 'Understood. Details — listening.', style: 'Salaryman warm formal sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '新しい組織、来月から、動く。', en: 'New organization — from next month, moves.', style: 'Boss firm formal direct informative-clear professional, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'チームへの影響、ありますか？', en: 'Team — effect, exist?', style: 'Salaryman warm gentle sincere-warm asking-warm practical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'お前のチーム、責任、増える。', en: 'Your team — responsibility, increases.', style: 'Boss firm formal direct authoritative warning-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '対応、しっかり、準備します。', en: 'Response — properly, prepare.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'よし、頼むぞ。', en: 'Good — counting on.', style: 'Boss firm formal direct closing-warm trusting-brief, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 756 — tatsuya + naoko, country opportunity (medium)
  {
    id: 'conv_00756',
    context: 'Tatsuya tells Naoko about a community organization opportunity.',
    purpose: 'cousin community organization exchange',
    ambient: 'porch_morning',
    sound_effects: ['birds_distant'],
    target_vocab: ['組織', '活動', '機会', '一緒', '地域'],
    cast: ['tatsuya_country', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '直子、新しい組織、立ち上げる。', en: 'Naoko — new organization, launch.', style: 'Country warm low sincere unhurried announcing-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'naoko_aunt', jp: 'え、どんな活動、ですか？', en: 'Eh — what activity?', style: 'Aunt warm soft sincere-warm curious-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'tatsuya_country', jp: '地域の子供、教える、ボランティア。', en: 'Local children — teach, volunteer.', style: 'Country warm low sincere unhurried explaining-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '素敵。良い機会、ありそう。', en: 'Lovely. Good opportunity — exists.', style: 'Aunt warm soft sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '一緒に、手伝ってもらえるか？', en: 'Together — can help?', style: 'Country warm low sincere unhurried asking-warm humble, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'もちろん。喜んで、参加します。', en: 'Of course. Gladly — join.', style: 'Aunt warm soft sincere-warm committed-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '助かる、本当に。', en: 'Saved — truly.', style: 'Country warm low sincere closing-warm grateful-brief, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 757 — saito + ryosuke, health awareness (medium)
  {
    id: 'conv_00757',
    context: 'Dr. Saito speaks with Ryosuke about lifestyle and health.',
    purpose: 'doctor-patient awareness exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '意識', '生活', '大切', '影響'],
    cast: ['saito_doctor', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '亮介さん、健康への意識、高いですね。', en: 'Ryosuke-san — health awareness, high.', style: 'Doctor warm formal sincere-warm appreciative-warm professional-opening, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'ryosuke_dad', jp: '家族のためにも、大切と思います。', en: 'Family\'s sake — important, think.', style: 'Father warm gentle sincere-warm philosophical-warm sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '生活習慣、本当に、結果、影響する。', en: 'Life habits — truly, results, influence.', style: 'Doctor warm formal sincere-warm informative-warm clear, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'ryosuke_dad', jp: '何か、お勧め、ありますか？', en: 'Anything — recommendation, exist?', style: 'Father warm gentle sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '毎日の散歩、十分、効果あります。', en: 'Daily walk — sufficient, effect.', style: 'Doctor warm formal sincere-warm advising-warm clear-practical, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'ryosuke_dad', jp: '優子と、続けています。', en: 'Yumiko — continuing.', style: 'Father warm gentle sincere-warm sharing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '素晴らしい。お二人、長く、お元気で。', en: 'Wonderful. Two — long, healthy.', style: 'Doctor warm formal sincere closing-warm tender-promise, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 758 — mei + sakura, baby growth (medium)
  {
    id: 'conv_00758',
    context: 'Mei tells Sakura about Hikari\'s recent growth.',
    purpose: 'mother-cousin baby update exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['子ども', '成長', '一緒', '可愛い', '笑顔'],
    cast: ['mei_romantic', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'さくらちゃん、ひかり、見て。', en: 'Sakura-chan — Hikari, look.', style: 'Romantic warm soft sincere-warm tender-warm bright-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'わあ、大きくなった！可愛い。', en: 'Wow — grew big! Cute.', style: 'Teen warm soft sincere appreciative-warm enthusiastic-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '子どもの成長、本当に早い。', en: 'Child\'s growth — truly fast.', style: 'Romantic warm soft sincere-warm reflecting-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '笑顔、お母さんに似てる。', en: 'Smile — mother resembles.', style: 'Teen warm soft sincere observing-warm tender-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '皆、そう言うんだよ。嬉しい。', en: 'All — say so. Happy.', style: 'Romantic warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '今度、一緒に、お散歩、しよう。', en: 'Next time — together, walk, do.', style: 'Teen warm soft sincere proposing-warm inviting-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'ぜひ。ひかりも、喜ぶ。', en: 'Definitely. Hikari also — happy.', style: 'Romantic warm soft sincere closing-warm tender-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 759 — riku + ren, university choice (medium)
  {
    id: 'conv_00759',
    context: 'Riku asks Ren about choosing the right university major.',
    purpose: 'sibling-cousin mentor university exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['専門', '将来', '相談', '選ぶ', '大切'],
    cast: ['riku_teen', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'レン兄、専門、どう、決めた？', en: 'Ren-bro — specialty, how, decided?', style: 'Teen warm soft sincere asking-warm respectful-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: '迷ったよ、最初。文化、興味、強かった。', en: 'Confused — first. Culture interest — strong.', style: 'University student warm soft sincere-warm honest-warm sharing-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '俺、機械とか、ものづくり、好き。', en: 'I — machines, making things — like.', style: 'Teen warm soft sincere honest-warm declaring-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'いいね。自分の、好き、大切にして。', en: 'Nice. Self\'s — like, preciously.', style: 'University student warm soft sincere-warm encouraging-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '将来、安定、考えるべき？', en: 'Future stability — should consider?', style: 'Teen warm soft sincere asking-warm thoughtful-vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: 'バランス、必要だね。両方、考えよう。', en: 'Balance — needed. Both — consider.', style: 'University student warm soft sincere-warm wise-warm balanced, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'いつでも、相談、頼んで、いい？', en: 'Anytime — consult, ask, okay?', style: 'Teen warm soft sincere closing-warm vulnerable-grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'もちろん、いつでも。', en: 'Of course — anytime.', style: 'University student warm soft sincere closing-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 760 — hina + sho, science nature (short)
  {
    id: 'conv_00760',
    context: 'Hina and Sho observe a bug in the garden.',
    purpose: 'children science-nature observation',
    ambient: 'garden_afternoon',
    sound_effects: [],
    target_vocab: ['自然', '虫', '一緒', '面白い', '小さい'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、見て、この小さい虫。', en: 'Sho — look, this small bug.', style: 'High child bright sincere enthusiastic-warm observing-opening, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'わあ、面白い。色、綺麗。', en: 'Wow — interesting. Color — beautiful.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '自然、いろいろ、ある。', en: 'Nature — various, exist.', style: 'High child bright sincere reflecting-warm philosophical, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、観察、しよう。', en: 'Together — observe, do.', style: 'Tiny six-year-old soft small sincere proposing-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'うん。後で、絵に描こう。', en: 'Yes. Later — draw.', style: 'High child bright sincere closing-warm planning-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 761 — daichi + ren, sports expectation (medium)
  {
    id: 'conv_00761',
    context: 'Daichi and Ren prepare expectations for the upcoming tournament.',
    purpose: 'two-male sports expectation exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['試合', '期待', '効果', '一緒', '頑張る'],
    cast: ['daichi_kansai', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'レン、来週の試合、期待しとるで。', en: 'Ren — next week\'s game, expecting.', style: 'Kansai warm bright sincere enthusiastic-opening encouraging-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: 'チーム、調子、上がってるよ。', en: 'Team — condition, rising.', style: 'University student warm bright sincere-warm confident-warm reporting, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '練習の効果、出てるんやろな。', en: 'Practice effect — emerging.', style: 'Kansai warm bright sincere appreciative-warm acknowledging, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'うん、確か。皆、頑張ってる。', en: 'Yes — surely. All — trying hard.', style: 'University student warm bright sincere-warm appreciative-warm proud, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '応援、皆で、行くで。', en: 'Cheering — all, go.', style: 'Kansai warm bright sincere committed-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: '心強い。一緒に、頑張る。', en: 'Heart-strong. Together — try hard.', style: 'University student warm soft sincere-warm grateful-warm committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '勝とうな、絶対。', en: 'Win — surely.', style: 'Kansai warm bright sincere closing-warm enthusiastic-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 762 — takeda + sho, safe street (short)
  {
    id: 'conv_00762',
    context: 'Officer Takeda greets Sho walking home and reminds him to be safe.',
    purpose: 'authority-child friendly safety reminder',
    ambient: 'street_afternoon',
    sound_effects: [],
    target_vocab: ['道', '安全', '気を付ける', '一緒', '元気'],
    cast: ['takeda_officer', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'しょうくん、こんにちは。元気か？', en: 'Sho-kun — hello. Energetic?', style: 'Officer firm formal direct gentle-warm child-friendly opening, the firm real composure audible, gentle real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'sho_child', jp: 'こんにちは、おまわりさん。元気です。', en: 'Hello — officer. Energetic.', style: 'Tiny six-year-old soft small sincere bright-warm respectful-warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'takeda_officer', jp: '道、気を付けて。', en: 'Road — careful.', style: 'Officer firm formal direct gentle-advisory caring-clear, the firm real composure audible, gentle real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'sho_child', jp: 'はい、いつも、一緒に、歩く。', en: 'Yes — always, together, walk.', style: 'Tiny six-year-old soft small sincere reassuring-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'takeda_officer', jp: '良し。安全、第一だ。', en: 'Good. Safety — first.', style: 'Officer firm formal direct closing-warm clear-advisory, the firm real composure audible, gentle real authority threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 763 — mrs_mori + sachiko, town change (medium)
  {
    id: 'conv_00763',
    context: 'Mrs. Mori and Sachiko notice how the town has changed.',
    purpose: 'two-elderly-women town-change retrospection',
    ambient: 'street_morning',
    sound_effects: [],
    target_vocab: ['町', '昔', '一緒', '人々', '変わる'],
    cast: ['mrs_mori_neighbor', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '佐知子さん、町、随分、変わったね。', en: 'Sachiko-san — town, considerably changed.', style: 'Neighbor warm gentle sincere-warm reflective-opening aged-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'うん、本当。昔は、もっと、静か。', en: 'Yes — truly. Long ago — more, quiet.', style: 'Grandma warm gentle sincere-warm philosophical-warm aged-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '新しい人々も、増えた。', en: 'New people — increased.', style: 'Neighbor warm gentle sincere-warm observing-warm gentle, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'でも、皆、優しい。それは、変わらない。', en: 'But — all, kind. That — unchanging.', style: 'Grandma warm gentle sincere-warm affirming-warm philosophical-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '本当ね。心、温かい人ばかり。', en: 'Truly. Heart — warm people only.', style: 'Neighbor warm gentle sincere-warm appreciative-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '一緒に、この町、見守ろう。', en: 'Together — this town, watch over.', style: 'Grandma warm gentle sincere-warm closing-warm tender-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: 'ね。お互い、長く、元気で。', en: 'Right. Mutually — long, energetic.', style: 'Neighbor warm gentle sincere closing-warm tender-warm promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 764 — asuka + sho, expression (short)
  {
    id: 'conv_00764',
    context: 'Asuka teaches Sho how to express feelings through words.',
    purpose: 'teacher-child emotional expression lesson',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['表現', '言葉', '一緒', '楽しい', '気持ち'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、気持ち、言葉で、表現して。', en: 'Sho-kun — feelings, in words, express.', style: 'Teacher warm gentle sincere-warm child-friendly teaching-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '今日、楽しい、気持ち。', en: 'Today — fun, feeling.', style: 'Tiny six-year-old soft small sincere bright-warm honest-warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '上手。どうして、楽しい？', en: 'Skilled. Why — fun?', style: 'Teacher warm gentle sincere-warm encouraging-warm probing-gentle, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'ひなちゃんと、一緒、遊んだ。', en: 'Hina-chan — together, played.', style: 'Tiny six-year-old soft small sincere sharing-warm bright-warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '素敵な表現。', en: 'Lovely expression.', style: 'Teacher warm gentle sincere closing-warm tender-appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 765 — yumiko + ryosuke, daily change (medium)
  {
    id: 'conv_00765',
    context: 'Yumiko and Ryosuke notice small changes in their daily life.',
    purpose: 'married-couple daily reflection exchange',
    ambient: 'tatami_room_morning',
    sound_effects: [],
    target_vocab: ['普段', '生活', '一緒', '大切', '感じる'],
    cast: ['yumiko_mom', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'お父さん、最近、普段の生活、楽しい。', en: 'Father — recently, daily life, fun.', style: 'Maternal warm gentle sincere-warm reflective-warm tender-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、ゆっくり、過ごせるね。', en: 'Yes — slowly, can spend.', style: 'Father warm gentle sincere-warm agreeing-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '子供たち、独立してきて、寂しいけど。', en: 'Children — becoming independent, lonely though.', style: 'Maternal warm gentle sincere-warm honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'でも、二人の時間、増えた。', en: 'But — two\'s time, increased.', style: 'Father warm gentle sincere-warm reframing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'それも、感じる。一緒、嬉しい。', en: 'That also — feeling. Together — happy.', style: 'Maternal warm gentle sincere-warm tender-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '小さな、毎日が、大切だ。', en: 'Small — daily, important.', style: 'Father warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'これからも、ずっと、こうしたい。', en: 'From now — always, want like this.', style: 'Maternal warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_038 wrote', CONVERSATIONS.length, 'files');

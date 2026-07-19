import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_011)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // ----------------------------------------------------------------
  // 204 — saito doctor + mrs_mori, house call (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00204',
    context: 'Dr. Saito does a house-call check on Mrs. Mori\'s minor knee trouble. She has tea ready, naturally.',
    purpose: 'gentle home medical visit — long-known patient receiving careful in-home attention',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['訪問', '膝', '痛み', '無理', '安心'],
    cast: ['saito_doctor', 'mrs_mori_neighbor'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'お邪魔します。今日は訪問診療で。', en: 'Excuse the intrusion. Today\'s a home visit.', style: 'Doctor warm professional opener, the home-call register softer than clinic, soft real respect threading throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '先生、わざわざ。お茶どうぞ。', en: 'Doctor, all the way out here. Have some tea.', style: 'Neighbor warm hosting greeting, the routine community-hospitality, soft real appreciation threading throughout delivery throughout.', mood: 'warmly-hosting' },
      { speaker: 'saito_doctor', jp: 'ありがとうございます。膝の調子はどうですか。', en: 'Thank you. How\'s your knee feeling?', style: 'Doctor warm professional pivot to work, the gentle careful inquiry, soft real attention threading throughout delivery.', mood: 'gently-inquiring' },
      { speaker: 'mrs_mori_neighbor', jp: 'うーん、階段はきついわ。', en: 'Mm, stairs are rough.', style: 'Neighbor honest specific complaint, the daily-life detail offered plainly, soft real candor threading throughout delivery.', mood: 'honestly-plain' },
      { speaker: 'saito_doctor', jp: '階段ですか。痛みは、いつ強くなりますか。', en: 'Stairs, I see. When does the pain get worse?', style: 'Doctor professional careful follow-up, the clinical precision delivered with warmth, soft real attention threading throughout.', mood: 'carefully-following' },
      { speaker: 'mrs_mori_neighbor', jp: '朝が一番つらいの。動かし始める時。', en: 'Mornings are worst. When I start moving.', style: 'Neighbor warm specific recall, the practical patient-reporting honest, soft real engagement threading throughout delivery.', mood: 'warmly-recalling' },
      { speaker: 'saito_doctor', jp: 'なるほど。無理しないことが、まず大事です。', en: 'I see. First, not pushing yourself is what matters.', style: 'Doctor warm gentle wisdom-instruction, the professional kindness audible, soft real care threading throughout delivery.', mood: 'warmly-instructing' },
      { speaker: 'mrs_mori_neighbor', jp: 'はい、気をつけます。来てもらえて安心したわ。', en: 'Yes, I\'ll be careful. I\'m relieved you came.', style: 'Neighbor warm closing gratitude, the home-visit relief audible, soft real appreciation threading throughout delivery throughout.', mood: 'gratefully-relieved' },
      { speaker: 'saito_doctor', jp: 'また来週、様子見に伺いますね。', en: 'I\'ll come by next week to check on you again.', style: 'Doctor warm professional follow-up promise, the home-care commitment audible, soft real care threading throughout delivery.', mood: 'warmly-promising' }
    ]
  },
  // ----------------------------------------------------------------
  // 205 — goro_grandpa + asuka_teacher, school pickup (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00205',
    context: 'Grandpa Goro is picking up his granddaughter Hina from school for the first time. He runs into Ms. Asuka at the gate.',
    purpose: 'grandfather meeting teacher — old-generation respect across institutional formality',
    ambient: 'school_gate_afternoon',
    sound_effects: [],
    target_vocab: ['迎え', '孫', '初めて', '元気', 'よろしく'],
    cast: ['goro_grandpa', 'asuka_teacher'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'goro_grandpa', jp: 'すみません、ひなの祖父です。', en: 'Excuse me — I\'m Hina\'s grandfather.', style: 'Slow grandfather formal courteous opener, the careful self-introduction, soft real respect threading throughout delivery.', mood: 'formally-courteous' },
      { speaker: 'asuka_teacher', jp: 'あ、ひなさんのお祖父さん。今日は迎えに？', en: 'Oh, Hina\'s grandfather. Picking her up today?', style: 'Teacher warm professional recognition, the easy welcoming inquiry, soft real warmth threading throughout delivery throughout.', mood: 'warmly-recognizing' },
      { speaker: 'goro_grandpa', jp: 'はい、初めてでして。娘に頼まれて。', en: 'Yes, it\'s my first time. My daughter asked me.', style: 'Slow grandfather warm honest explanation, the gentle first-time disclosure, soft real care threading throughout delivery.', mood: 'honestly-warm' },
      { speaker: 'asuka_teacher', jp: 'ひなさん、いつも元気いっぱいですよ。', en: 'Hina is always full of energy.', style: 'Teacher warm professional sharing, the genuine warmth about the child audible, soft real care threading throughout delivery.', mood: 'warmly-sharing' },
      { speaker: 'goro_grandpa', jp: 'おう、家でもにぎやかで。困りものだ。', en: 'Oh, she\'s noisy at home too. A bit of a handful.', style: 'Slow grandfather warm gruff joke, the affectionate complaint audible, soft real grandpa-pride threading throughout delivery.', mood: 'gruffly-warm' },
      { speaker: 'asuka_teacher', jp: 'ふふ、それも個性ですから。', en: 'Hehe, that\'s personality too.', style: 'Teacher warm gentle laugh, the diplomatic affirmation audible, soft real respect threading throughout delivery throughout.', mood: 'gently-affirming' },
      { speaker: 'goro_grandpa', jp: 'よろしくお願いしますね、先生。', en: 'Please look out for her, sensei.', style: 'Slow grandfather warm formal closing, the courteous family-trust extended, soft real respect threading throughout delivery.', mood: 'formally-trusting' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。お気をつけて。', en: 'And you. Take care.', style: 'Teacher warm reciprocal closing, the professional kindness extended, soft real respect threading throughout delivery throughout.', mood: 'warmly-reciprocal' }
    ]
  },
  // ----------------------------------------------------------------
  // 206 — tatsuya + ryosuke + naoko, three at country house (long, 3-speaker)
  // ----------------------------------------------------------------
  {
    id: 'conv_00206',
    context: 'A weekend in the countryside. Tatsuya hosts Ryosuke and Naoko. They sit around the kotatsu after dinner.',
    purpose: 'extended-family country evening — three relatives talking softly with sake and quiet',
    ambient: 'kotatsu_evening',
    sound_effects: [],
    target_vocab: ['親戚', '集まる', '田舎', '懐かしい', '酒', '冬'],
    cast: ['tatsuya_country', 'ryosuke_dad', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'こうやって親戚で集まると、いいもんだな。', en: 'Gathering with relatives like this — feels good.', style: 'Country gruff warm reflection, the rural patriarch-gentleness audible, soft real love threading throughout delivery throughout.', mood: 'gruffly-reflective' },
      { speaker: 'ryosuke_dad', jp: '本当ですね。子供の頃を思い出します。', en: 'Truly. Reminds me of when I was a kid.', style: 'Father warm gentle nostalgic agreement, the memory-warmth audible, soft real reflection threading throughout delivery throughout.', mood: 'nostalgically-warm' },
      { speaker: 'naoko_aunt', jp: 'お正月、みんなここに集まったわよね。', en: 'New Year — everyone gathered here, didn\'t we.', style: 'Aunt warm collective memory-surfacing, the shared family history audible, soft real warmth threading throughout delivery.', mood: 'collectively-warm' },
      { speaker: 'tatsuya_country', jp: '今は人数も少のうなって、寂しい時もある。', en: 'Now we\'re fewer — sometimes it\'s lonely.', style: 'Country gruff honest weighted disclosure, the rural-patriarch admitting the change, soft real grief threading throughout delivery.', mood: 'gruffly-honest' },
      { speaker: 'naoko_aunt', jp: 'うん、わかる。みんな散らばっちゃった。', en: 'Yeah, I get it. Everyone scattered.', style: 'Aunt warm honest matching, the soft family-truth offered tenderly, soft real love threading throughout delivery throughout.', mood: 'honestly-matching' },
      { speaker: 'ryosuke_dad', jp: 'こうして来られる人だけでも、続けたいですね。', en: 'Even just those who can come — let\'s keep it going.', style: 'Father warm steady commitment, the gentle preserving-intent audible, soft real love threading throughout delivery throughout.', mood: 'steadily-committing' },
      { speaker: 'tatsuya_country', jp: 'お酒、もう一本いきましょか。', en: 'How about another bottle of sake?', style: 'Country gruff warm hosting pivot, the generous offer carrying real welcome, soft real warmth threading throughout delivery.', mood: 'generously-hosting' },
      { speaker: 'naoko_aunt', jp: 'やったー、嬉しい。冬の田舎の夜って最高。', en: 'Yay, happy. Winter country nights are the best.', style: 'Aunt bright warm appreciation, the genuine pleasure in the moment audible, soft real warmth threading throughout delivery.', mood: 'brightly-warm' },
      { speaker: 'ryosuke_dad', jp: '空気が違いますよね、ここは。', en: 'The air really is different here.', style: 'Father warm city-man appreciation, the gentle observation, soft real warmth threading throughout delivery throughout.', mood: 'warmly-appreciating' },
      { speaker: 'tatsuya_country', jp: 'うん、田舎は田舎で良うもある。', en: 'Yeah, the countryside has its own goodness.', style: 'Country gruff warm philosophical agreement, the rural-pride audible underneath, soft real warmth threading throughout delivery.', mood: 'gruffly-philosophical' },
      { speaker: 'naoko_aunt', jp: '私たちも、もっと来るようにしないとね。', en: 'We should come more often, shouldn\'t we.', style: 'Aunt warm gentle self-direction, the family-commitment audible, soft real care threading throughout delivery throughout.', mood: 'warmly-resolving' },
      { speaker: 'ryosuke_dad', jp: '来年は子供たちも連れて。', en: 'Next year I\'ll bring the kids too.', style: 'Father warm gentle promise, the family-expansion intent audible, soft real warmth threading throughout delivery throughout.', mood: 'gently-promising' },
      { speaker: 'tatsuya_country', jp: 'いつでも来い。家は広いから。', en: 'Come anytime. The house is big.', style: 'Country gruff warm generous closing, the rural openness extended, soft real love threading throughout delivery throughout.', mood: 'gruffly-generous' }
    ]
  },
  // ----------------------------------------------------------------
  // 207 — hina + sho, rainy day (short)
  // ----------------------------------------------------------------
  {
    id: 'conv_00207',
    context: 'A rainy afternoon. Hina and Sho are stuck inside; Hina has invented a game with cushions.',
    purpose: 'two children indoors — older-pretender leading younger one through invented play',
    ambient: 'living_room_rain',
    sound_effects: [],
    target_vocab: ['雨', '退屈', '遊ぶ', '面白い', 'ルール'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: '雨だね。外、行けないね。', en: 'It\'s raining. We can\'t go outside.', style: 'High child wilted observation, the bright-edge of disappointment, soft real childish frustration threading throughout delivery.', mood: 'wiltedly-bright' },
      { speaker: 'sho_child', jp: '…退屈。', en: '…Bored.', style: 'Tiny six-year-old single-word lament, the soft small honest disclosure, soft small fatigue threading throughout delivery.', mood: 'softly-bored' },
      { speaker: 'hina_child', jp: 'じゃあ！クッションでお城作ろう！', en: 'Then! Let\'s build a castle with cushions!', style: 'High child sudden bright invention burst, the energy-spike full of childish creativity, soft real joy throughout delivery.', mood: 'inventively-bright' },
      { speaker: 'sho_child', jp: 'お城？ぼく、入っていいの？', en: 'Castle? Can I go in?', style: 'Tiny six-year-old curious soft asking, the gentle wanting-to-join audible, soft small interest threading throughout delivery.', mood: 'curiously-soft' },
      { speaker: 'hina_child', jp: 'もちろん！しょうくんが王子様ね。ルール教えるよ！', en: 'Of course! Sho-kun is the prince. I\'ll teach you the rules!', style: 'High child warm bright inclusion, the confident leader-pretending audible, soft real childish love threading throughout delivery.', mood: 'warmly-leading' },
      { speaker: 'sho_child', jp: 'うん、面白そう。', en: 'Yeah, sounds fun.', style: 'Tiny six-year-old soft warming acceptance, the gentle interest growing audible, soft small enthusiasm threading throughout delivery.', mood: 'softly-warming' }
    ]
  },
  // ----------------------------------------------------------------
  // 208 — sachiko + hiroshi_elder, dreams (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00208',
    context: 'A late evening. Sachiko brings up something she always wanted to do but never did, and Hiroshi-elder listens.',
    purpose: 'long-marriage gentle disclosure — the small unfulfilled dream named out loud after decades',
    ambient: 'tatami_evening',
    sound_effects: [],
    target_vocab: ['夢', '若い', '頃', '行く', '一緒'],
    cast: ['sachiko_grandma', 'hiroshi_elder'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'ねえ、若い頃、私、夢があったの。', en: 'You know, when I was young, I had a dream.', style: 'Soft grandmother warm careful opening, the gentle disclosure-courage audible, soft real warmth threading throughout delivery.', mood: 'carefully-opening' },
      { speaker: 'hiroshi_elder', jp: 'ほう、どんな夢だ？', en: 'Oh, what kind of dream?', style: 'Slow elder warm gentle curiosity, the patient listening-attention audible, soft real interest threading throughout delivery.', mood: 'patiently-curious' },
      { speaker: 'sachiko_grandma', jp: '京都に、一人で行ってみたかったのよ。', en: 'I wanted to go to Kyoto alone.', style: 'Soft grandmother gentle disclosure, the long-held secret-dream named softly, soft real wistfulness threading throughout delivery.', mood: 'gently-disclosing' },
      { speaker: 'hiroshi_elder', jp: 'え、それは初めて聞いた。', en: 'Eh, I\'m hearing that for the first time.', style: 'Slow elder warm surprised gentle, the genuine startled-warmth audible, soft real attention threading throughout delivery throughout.', mood: 'warmly-surprised' },
      { speaker: 'sachiko_grandma', jp: '言わなかったわね。一人旅って、何か憧れてて。', en: 'I didn\'t say. Solo travel — something I admired.', style: 'Soft grandmother warm reflective disclosure, the gentle wonder-confession audible, soft real depth threading throughout delivery.', mood: 'reflectively-warm' },
      { speaker: 'hiroshi_elder', jp: 'じゃあ、来年、一緒に行こうか。', en: 'Then, next year, shall we go together?', style: 'Slow elder warm spontaneous gentle offer, the soft real love-response audible, gentle warmth threading throughout delivery.', mood: 'warmly-offering' },
      { speaker: 'sachiko_grandma', jp: 'え、本当に？嬉しい。', en: 'Eh, really? I\'m happy.', style: 'Soft grandmother warm surprised pleasure, the soft real joy audible underneath, gentle warmth threading throughout delivery.', mood: 'surprisedly-pleased' },
      { speaker: 'hiroshi_elder', jp: '一人じゃないが、近くにはおる。それでいいか。', en: 'Not alone, but I\'ll be nearby. Is that okay?', style: 'Slow elder warm gentle teasing care, the soft real love-compromise audible, gentle warmth threading throughout delivery.', mood: 'gently-teasing' },
      { speaker: 'sachiko_grandma', jp: 'うん、それでいい。それが一番いい。', en: 'Yes, that\'s good. That\'s the best.', style: 'Soft grandmother warm settled love-acceptance, the soft deep joy audible, gentle real warmth threading throughout delivery.', mood: 'deeply-settled' }
    ]
  },
  // ----------------------------------------------------------------
  // 209 — riku + sakura, crush moment (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00209',
    context: 'After cram school. Riku and Sakura walk home together for the first time; both are quietly aware something has shifted.',
    purpose: 'first soft awareness of mutual interest between teens — careful sweetness',
    ambient: 'street_evening',
    sound_effects: [],
    target_vocab: ['一緒', '帰る', '緊張', '可愛い', '恋'],
    cast: ['riku_teen', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'えっと、塾、お疲れ。', en: 'Um, cram school — good work.', style: 'Teen boy slightly-nervous opener, the careful casualness audible, soft real low-key tension threading throughout delivery.', mood: 'slightly-nervous' },
      { speaker: 'sakura_teen', jp: 'うん、お疲れさま。今日寒いね。', en: 'Yeah, good work. Cold today, huh.', style: 'Teen girl warm easy reply with weather-pivot, the careful conversation-keeping, soft real warmth threading throughout delivery.', mood: 'easily-warm' },
      { speaker: 'riku_teen', jp: 'ほんと。マフラー、持ってきて正解だった。', en: 'Truly. Bringing the scarf was the right call.', style: 'Teen boy warm casual lift, the small relief-warmth audible, soft real ease threading throughout delivery throughout.', mood: 'warmly-casual' },
      { speaker: 'sakura_teen', jp: '私、忘れた。次は持ってこよう。', en: 'I forgot mine. Next time I\'ll bring it.', style: 'Teen girl warm casual self-disclosure, the small honest sharing audible, soft real warmth threading throughout delivery.', mood: 'casually-warm' },
      { speaker: 'riku_teen', jp: '…なんか、一緒に帰るの、変な感じ。', en: '…Somehow, going home together feels weird.', style: 'Teen boy soft honest vulnerable disclosure, the brave gentle naming audible, soft real careful warmth throughout delivery.', mood: 'softly-vulnerable' },
      { speaker: 'sakura_teen', jp: 'え、変？私もちょっと、緊張してる。', en: 'Eh, weird? I\'m a little nervous too.', style: 'Teen girl soft matching warm vulnerability, the careful reciprocal honesty, soft real warmth threading throughout delivery.', mood: 'matching-vulnerable' },
      { speaker: 'riku_teen', jp: '…じゃあ、また塾の後、帰ろう。', en: '…Then, after cram school again, let\'s go home together.', style: 'Teen boy soft brave gentle proposal, the careful reaching audible, soft real hope threading throughout delivery throughout.', mood: 'bravely-proposing' },
      { speaker: 'sakura_teen', jp: 'うん…うん、いいよ。', en: 'Yeah… yeah, okay.', style: 'Teen girl soft warm careful acceptance, the gentle pause-then-warmth, soft real careful joy threading throughout delivery.', mood: 'softly-accepting' }
    ]
  },
  // ----------------------------------------------------------------
  // 210 — yuki + asuka, old high school friend (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00210',
    context: 'A weekend bookstore. Yuki and Asuka recognize each other — they were in the same high school class.',
    purpose: 'high-school friends reuniting in adulthood — small surprised reconnection',
    ambient: 'bookstore_afternoon',
    sound_effects: [],
    target_vocab: ['高校', '同級生', '変わる', '時間', '元気'],
    cast: ['yuki_office', 'asuka_teacher'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'え、あすか？同級生のあすかでしょ？', en: 'Eh, Asuka? You\'re Asuka from my class, right?', style: 'Office woman bright startled recognition, the warm surprised reunion-energy, soft real pleasure threading throughout delivery.', mood: 'startled-bright' },
      { speaker: 'asuka_teacher', jp: 'ゆき！うわ、本当に久しぶり！', en: 'Yuki! Wow, really long time!', style: 'Teacher warm bright reunion explosion, the rare unprofessional spontaneity audible, soft real joy threading throughout delivery.', mood: 'brightly-reuniting' },
      { speaker: 'yuki_office', jp: '何年ぶり？十年は経つよね。', en: 'How many years? Must be ten.', style: 'Office woman warm calculating wonder, the time-shock audible, soft real warmth threading throughout delivery throughout.', mood: 'warmly-wondering' },
      { speaker: 'asuka_teacher', jp: '経つ経つ。あすかは今、先生になったよ。', en: 'It\'s been, it\'s been. I became a teacher now.', style: 'Teacher warm casual update sharing, the dropping into old-friend register audible, soft real joy throughout delivery.', mood: 'warmly-updating' },
      { speaker: 'yuki_office', jp: 'えー、すごい！似合うね、ほんと。', en: 'Eh, amazing! It suits you, really.', style: 'Office woman warm genuine compliment, the bright recognition audible, soft real admiration threading throughout delivery.', mood: 'brightly-admiring' },
      { speaker: 'asuka_teacher', jp: 'ありがと。ゆきは？お仕事は？', en: 'Thanks. And you? Your work?', style: 'Teacher warm reciprocal curiosity, the genuine interest in the old friend audible, soft real warmth threading throughout.', mood: 'reciprocally-curious' },
      { speaker: 'yuki_office', jp: '会社員。普通に営業やってる。', en: 'Office worker. Just doing regular sales.', style: 'Office woman warm casual self-update, the gentle modesty audible, soft real ease threading throughout delivery throughout.', mood: 'casually-modest' },
      { speaker: 'asuka_teacher', jp: '今度、ゆっくり飲もうよ。連絡先教えて。', en: 'Let\'s grab a drink slowly sometime. Tell me your contact info.', style: 'Teacher warm easy continuation, the genuine wanting-to-reconnect audible, soft real warmth threading throughout delivery.', mood: 'easily-warm' },
      { speaker: 'yuki_office', jp: 'うん、絶対！変わらないね、あすか。', en: 'Yes, absolutely! You haven\'t changed, Asuka.', style: 'Office woman warm warm continuation, the genuine reunion-joy audible, soft real friendship threading throughout delivery.', mood: 'warmly-reuniting' }
    ]
  },
  // ----------------------------------------------------------------
  // 211 — ren + aoi, late coffee shop (long)
  // ----------------------------------------------------------------
  {
    id: 'conv_00211',
    context: 'The café is nearly closed; Ren is the last customer. Aoi sits down with her own cup and they have their first real conversation.',
    purpose: 'small first real conversation between two who only know each other through transactions — opening',
    ambient: 'cafe_closing',
    sound_effects: [],
    target_vocab: ['本当', '正直', '話す', '聞く', '面白い', '気持ち'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'もうすぐ閉店なんですけど、ゆっくりどうぞ。', en: 'We\'re closing soon, but take your time.', style: 'Soft dreamy barista warm relaxing offer, the customer-care extended, soft real warmth threading throughout delivery throughout.', mood: 'warmly-offering' },
      { speaker: 'ren_uni', jp: 'すいません、いつも遅くまで。', en: 'Sorry, always so late.', style: 'University student warm apologetic casual, the soft real consideration audible, gentle real warmth threading throughout delivery.', mood: 'warmly-apologetic' },
      { speaker: 'aoi_barista', jp: 'いえ、よく来てくれて嬉しいです。', en: 'No, I\'m happy you come often.', style: 'Soft dreamy barista warm honest disclosure, the gentle real appreciation audible, soft real warmth threading throughout delivery.', mood: 'honestly-warm' },
      { speaker: 'ren_uni', jp: 'ここ、なんか落ち着くんすよね。', en: 'This place — somehow it\'s calming.', style: 'University student warm genuine sharing, the soft honest appreciation audible, gentle real warmth threading throughout delivery.', mood: 'genuinely-sharing' },
      { speaker: 'aoi_barista', jp: 'ありがとうございます。そう言ってもらえて。', en: 'Thank you. To hear you say that.', style: 'Soft dreamy barista warm touched response, the gentle real moved-warmth audible, soft real warmth throughout delivery.', mood: 'touchedly-warm' },
      { speaker: 'ren_uni', jp: '正直、家にいるより落ち着く時もある。', en: 'Honestly, sometimes it\'s calmer than being home.', style: 'University student warm honest vulnerable disclosure, the soft real opening-up audible, gentle real warmth throughout delivery.', mood: 'honestly-vulnerable' },
      { speaker: 'aoi_barista', jp: 'わかります、その気持ち。', en: 'I understand, that feeling.', style: 'Soft dreamy barista warm gentle identification, the soft real solidarity audible, gentle real warmth threading throughout delivery.', mood: 'gently-identifying' },
      { speaker: 'ren_uni', jp: '一人暮らし長いと、無音がきつい時がある。', en: 'When you live alone long, silence gets hard sometimes.', style: 'University student warm honest articulating, the soft real exposition of feeling audible, gentle real warmth throughout delivery.', mood: 'honestly-articulating' },
      { speaker: 'aoi_barista', jp: '私も、一人で部屋にいる時、音楽流してる。', en: 'I do too — when alone in my room, I play music.', style: 'Soft dreamy barista warm shared disclosure, the gentle real matching-experience audible, soft real warmth throughout delivery.', mood: 'sharingly-warm' },
      { speaker: 'ren_uni', jp: '何聴くんすか？', en: 'What do you listen to?', style: 'University student warm easy genuine curiosity, the soft real interest audible, gentle real warmth threading throughout delivery throughout.', mood: 'genuinely-curious' },
      { speaker: 'aoi_barista', jp: '古いジャズばっかり。父親の影響で。', en: 'Mostly old jazz. My dad\'s influence.', style: 'Soft dreamy barista warm gentle disclosure, the soft real personal-sharing audible, gentle real warmth threading throughout delivery.', mood: 'gently-disclosing' },
      { speaker: 'ren_uni', jp: '渋っ。聴いてみたい、今度。', en: 'Cool. I want to listen sometime.', style: 'University student warm appreciative spontaneous offer, the soft real interest extending audible, gentle real warmth throughout delivery.', mood: 'appreciatively-warm' },
      { speaker: 'aoi_barista', jp: 'じゃあ、今度プレイリスト作りますね。', en: 'Then, I\'ll make a playlist sometime.', style: 'Soft dreamy barista warm gentle offer, the soft real generous-extension audible, gentle real warmth threading throughout delivery.', mood: 'gently-offering' },
      { speaker: 'ren_uni', jp: 'マジ？ありがとう。なんか今日、いい日だ。', en: 'Really? Thanks. Today, somehow, is a good day.', style: 'University student warm grateful soft wonder, the gentle real joy audible, soft real warmth threading throughout delivery throughout.', mood: 'gratefully-warm' },
      { speaker: 'aoi_barista', jp: '私も、話せて嬉しかった。', en: 'I was happy to talk too.', style: 'Soft dreamy barista warm gentle closing, the soft real reciprocal warmth audible, gentle real warmth threading throughout delivery.', mood: 'gently-closing' }
    ]
  },
  // ----------------------------------------------------------------
  // 212 — daichi + tatsuya, kansai meets country (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00212',
    context: 'Daichi visits the countryside on a friend\'s recommendation. He stops at Tatsuya\'s farm stand and they get talking.',
    purpose: 'two regional voices meeting — Kansai brightness against rural country reserve',
    ambient: 'farm_stand_afternoon',
    sound_effects: [],
    target_vocab: ['故郷', '畑', '違う', '空気', '懐かしい'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'すいません、これ、いくらですか？', en: 'Excuse me, how much is this?', style: 'Kansai warm casual customer-cadence, the regional swing audible in the standard inquiry, soft real warmth throughout delivery.', mood: 'casually-warm' },
      { speaker: 'tatsuya_country', jp: '三百円。安いやろ。', en: 'Three hundred yen. Cheap, right?', style: 'Country gruff brief direct delivery, the rural-sales casualness, soft real generosity threading throughout delivery throughout.', mood: 'gruffly-direct' },
      { speaker: 'daichi_kansai', jp: 'ほな、二つください。関西から来てまして。', en: 'Then, two please. I came from Kansai.', style: 'Kansai warm friendly easy disclosure, the regional swing audible, soft real openness threading throughout delivery throughout.', mood: 'friendly-easy' },
      { speaker: 'tatsuya_country', jp: 'おう、関西か。遠いとこから。', en: 'Oh, Kansai. From a long way.', style: 'Country gruff warm acknowledgment, the rural recognition of distance audible, soft real warmth threading throughout delivery.', mood: 'gruffly-warm' },
      { speaker: 'daichi_kansai', jp: 'こういう田舎、わいの故郷思い出すわ。', en: 'Countryside like this — reminds me of my hometown.', style: 'Kansai warm nostalgic disclosure, the regional swing softening, soft real warmth threading throughout delivery throughout.', mood: 'nostalgically-warm' },
      { speaker: 'tatsuya_country', jp: '関西も田舎あるんか？', en: 'There\'s countryside in Kansai too?', style: 'Country gruff genuine surprised curiosity, the rural-recognition broadening, soft real interest threading throughout delivery.', mood: 'genuinely-curious' },
      { speaker: 'daichi_kansai', jp: 'もちろん。山ばっかりですわ、わいの実家のあたり。', en: 'Of course. Mountains all around my parents\' place.', style: 'Kansai warm easy laughing disclosure, the regional swing softening with the memory, soft real warmth throughout delivery.', mood: 'warmly-laughing' },
      { speaker: 'tatsuya_country', jp: 'ほう。田舎は田舎で、ええもんやな。', en: 'Hmm. Countryside has its goodness, doesn\'t it.', style: 'Country gruff warm shared appreciation, the rural-bridge across regions audible, soft real warmth threading throughout delivery.', mood: 'warmly-bridging' },
      { speaker: 'daichi_kansai', jp: 'ほんまに。空気が違いますもん。', en: 'Truly. The air really is different.', style: 'Kansai warm sincere agreement, the regional swing carrying real appreciation, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // ----------------------------------------------------------------
  // 213 — kenji + ryosuke, neighborhood (short)
  // ----------------------------------------------------------------
  {
    id: 'conv_00213',
    context: 'Kenji and Ryosuke discover they live in the same building when they cross paths in the lobby.',
    purpose: 'small civic recognition — two adult men realizing they share a building',
    ambient: 'apartment_lobby',
    sound_effects: [],
    target_vocab: ['偶然', 'マンション', '階', '挨拶', 'よろしく'],
    cast: ['kenji_office', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'あ、こんばんは。よくお会いしますね。', en: 'Oh, good evening. We meet often.', style: 'Earnest salaryman warm recognition, the polite professional kindness, soft real warmth threading throughout delivery throughout.', mood: 'warmly-recognizing' },
      { speaker: 'ryosuke_dad', jp: 'こんばんは。同じマンションでしたか。', en: 'Good evening. We\'re in the same building?', style: 'Father warm surprised gentle recognition, the easy adult-discovery audible, soft real warmth threading throughout delivery.', mood: 'warmly-discovering' },
      { speaker: 'kenji_office', jp: 'はい、三階です。偶然ですね。', en: 'Yes, third floor. What a coincidence.', style: 'Salaryman warm easy disclosure, the casual neighborly extension audible, soft real warmth threading throughout delivery throughout.', mood: 'easily-warm' },
      { speaker: 'ryosuke_dad', jp: 'うちは五階。改めて、よろしくお願いします。', en: 'We\'re on the fifth. Again, please look out for us.', style: 'Father warm formal-friendly extension, the neighborly courtesy audible, soft real warmth threading throughout delivery throughout.', mood: 'formally-friendly' },
      { speaker: 'kenji_office', jp: 'こちらこそ。挨拶できて良かったです。', en: 'Same. Glad to have greeted you properly.', style: 'Salaryman warm sincere reciprocal closing, the gentle real recognition audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'お休みなさい。お気をつけて。', en: 'Good night. Take care.', style: 'Father warm gentle closing wisdom, the standard neighborly send-off, soft real warmth threading throughout delivery throughout.', mood: 'gently-closing' }
    ]
  },
  // ----------------------------------------------------------------
  // 214 — mei + sachiko, meeting boyfriend's grandma (long)
  // ----------------------------------------------------------------
  {
    id: 'conv_00214',
    context: 'Mei is meeting Daichi\'s grandmother Sachiko for the first time. Daichi has briefly stepped out for groceries.',
    purpose: 'first-meeting between girlfriend and grandmother — careful warmth across the generations',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['初めて', '緊張', '優しい', '紹介', 'お茶', '家族'],
    cast: ['mei_romantic', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: '初めまして。メイと申します。', en: 'Nice to meet you. I\'m Mei.', style: 'Romantic warm formal nervous introduction, the careful first-meeting courtesy, soft real careful warmth threading throughout delivery.', mood: 'carefully-formal' },
      { speaker: 'sachiko_grandma', jp: 'まあまあ、よく来てくれて。さあ、座って。', en: 'Oh dear, glad you came. Now, sit down.', style: 'Soft grandmother warm welcoming brightness, the genuine elder-hospitality audible, soft real warmth threading throughout delivery.', mood: 'warmly-welcoming' },
      { speaker: 'mei_romantic', jp: 'お邪魔します。あの、これ、つまらないものですが。', en: 'Excuse the intrusion. Um, this is a small token.', style: 'Romantic warm careful formal offering, the gentle gift-extension audible, soft real careful warmth threading throughout delivery.', mood: 'carefully-offering' },
      { speaker: 'sachiko_grandma', jp: 'あら、気を遣ってもらって。お茶淹れるわね。', en: 'Oh my, going out of your way. I\'ll make tea.', style: 'Soft grandmother warm pleased gratitude, the genuine elder-warmth audible, soft real care threading throughout delivery throughout.', mood: 'warmly-pleased' },
      { speaker: 'mei_romantic', jp: 'ありがとうございます。ちょっと緊張してます。', en: 'Thank you. I\'m a little nervous.', style: 'Romantic warm honest careful disclosure, the gentle vulnerable warmth audible, soft real warmth threading throughout delivery.', mood: 'honestly-careful' },
      { speaker: 'sachiko_grandma', jp: 'ふふ、大丈夫よ。私もよ、初めて孫の彼女に会うの。', en: 'Hehe, it\'s okay. Me too — first time meeting my grandson\'s girlfriend.', style: 'Soft grandmother warm gentle laughing reassurance, the soft real matching-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-laughing' },
      { speaker: 'mei_romantic', jp: '達也さん、いつも家族の話、嬉しそうにします。', en: 'Tatsuya always talks about family with such happiness.', style: 'Romantic warm careful sharing, the gentle observation about her boyfriend audible, soft real warmth threading throughout delivery.', mood: 'warmly-sharing' },
      { speaker: 'sachiko_grandma', jp: 'そう？あの子、口下手だから、嬉しいわ。', en: 'Really? That child\'s not good with words, so I\'m glad.', style: 'Soft grandmother warm touched gentle observation, the grandmother-knowledge audible, soft real love threading throughout delivery.', mood: 'touchedly-warm' },
      { speaker: 'mei_romantic', jp: '関西の言葉、最初は分からなくて。', en: 'The Kansai dialect — I didn\'t understand at first.', style: 'Romantic warm gentle laughing disclosure, the soft real shared-charm audible, gentle real warmth threading throughout delivery.', mood: 'warmly-laughing' },
      { speaker: 'sachiko_grandma', jp: 'あら、あの子、関西弁ねえ。慣れたら、優しい言葉よ。', en: 'Oh, that child, Kansai-dialect. Once you get used to it, it\'s gentle language.', style: 'Soft grandmother warm gentle observation, the soft real family-knowing audible, gentle real warmth threading throughout delivery.', mood: 'warmly-knowing' },
      { speaker: 'mei_romantic', jp: '本当に。慣れたら、すごく温かいです。', en: 'Truly. Once you get used to it, it\'s really warm.', style: 'Romantic warm sincere agreement, the gentle real recognition audible, soft real warmth threading throughout delivery throughout.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'メイさん、よく見える人ね。', en: 'Mei-san, you see people well.', style: 'Soft grandmother warm gentle quiet observation, the soft real grandmother-assessment audible, gentle real warmth throughout delivery.', mood: 'warmly-assessing' },
      { speaker: 'mei_romantic', jp: 'えへへ、ありがとうございます。', en: 'Heehee, thank you.', style: 'Romantic warm soft pleased shy laugh, the gentle real touched-warmth audible, soft real warmth threading throughout delivery.', mood: 'softly-pleased' },
      { speaker: 'sachiko_grandma', jp: 'いつでも、遊びに来てね。', en: 'Come visit anytime.', style: 'Soft grandmother warm gentle closing invitation, the soft real elder-acceptance audible, gentle real warmth threading throughout delivery.', mood: 'gently-inviting' }
    ]
  },
  // ----------------------------------------------------------------
  // 215 — hiroshi_boss + ryosuke + hiroshi_elder, family business (long, 3-speaker)
  // ----------------------------------------------------------------
  {
    id: 'conv_00215',
    context: 'A family conference. Hiroshi-elder is finally handing the family business decision over to his son Hiroshi-boss, with Ryosuke witnessing.',
    purpose: 'multi-generation business handover — formal family decision-making across three men',
    ambient: 'tatami_evening',
    sound_effects: [],
    target_vocab: ['店', '続ける', '後継', '責任', '相談', '決める'],
    cast: ['hiroshi_elder', 'hiroshi_boss', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_elder', jp: '今日は、店のことで集まってもらった。', en: 'Today, I had you gather about the shop.', style: 'Slow elder formal authoritative opener, the patriarch-weight audible, soft real gravity threading throughout delivery throughout.', mood: 'patriarchally-weighted' },
      { speaker: 'hiroshi_boss', jp: 'はい、父さん。', en: 'Yes, father.', style: 'Boss tone softening into son-mode formal, the deep respect audible, soft real composure threading throughout delivery throughout.', mood: 'respectfully-composed' },
      { speaker: 'ryosuke_dad', jp: 'お父さん、お招きいただいて。', en: 'Father, thank you for including me.', style: 'Father warm formal respectful son-in-law cadence, the careful family-positioning audible, soft real warmth throughout delivery.', mood: 'respectfully-warm' },
      { speaker: 'hiroshi_elder', jp: 'もう、店を続けるのは難しい。お前に任せたい。', en: 'I can\'t keep running the shop anymore. I want to leave it to you.', style: 'Slow elder weighted vulnerable patriarchal disclosure, the careful handover-weight audible, soft real gravity throughout delivery.', mood: 'vulnerably-patriarchal' },
      { speaker: 'hiroshi_boss', jp: '…父さん、本気で言ってる？', en: '…Father, are you serious?', style: 'Boss tone softening into careful son-questioning, the gentle real shock audible, soft real composure threading throughout delivery.', mood: 'carefully-shocked' },
      { speaker: 'hiroshi_elder', jp: '本気だ。考えに考えて、お前しかおらん。', en: 'Serious. I thought hard, and there\'s only you.', style: 'Slow elder firm weighted patriarchal certainty, the careful real love-decision audible, soft real gravity throughout delivery.', mood: 'firmly-weighted' },
      { speaker: 'ryosuke_dad', jp: 'お父さん、亮太さんの考えも聞いてからの方が。', en: 'Father, maybe after hearing Ryota\'s thoughts.', style: 'Father warm diplomatic careful intervention, the gentle bridge-keeping audible, soft real warmth threading throughout delivery.', mood: 'diplomatically-careful' },
      { speaker: 'hiroshi_boss', jp: '責任の重さは、わかってる。でも、ちょっと時間欲しい。', en: 'I understand the weight of the responsibility. But I want a little time.', style: 'Boss tone careful responsible disclosure, the soft real weight audible, gentle real composure threading throughout delivery throughout.', mood: 'carefully-responsible' },
      { speaker: 'hiroshi_elder', jp: 'もちろん。すぐ決めることじゃない。', en: 'Of course. Not something to decide right away.', style: 'Slow elder warm patriarchal patient softening, the soft real fatherly-respect audible, soft real warmth throughout delivery.', mood: 'patriarchally-patient' },
      { speaker: 'hiroshi_boss', jp: '妻とも、ちゃんと相談したい。', en: 'I want to discuss it properly with my wife too.', style: 'Boss tone warm careful family-extension, the soft real partnership-respect audible, gentle real warmth threading throughout delivery.', mood: 'carefully-extending' },
      { speaker: 'ryosuke_dad', jp: 'いい考えだと思います。家族みんなで決めることです。', en: 'I think that\'s a good idea. It\'s something the whole family decides.', style: 'Father warm diplomatic supportive observation, the gentle family-wisdom audible, soft real warmth threading throughout delivery.', mood: 'diplomatically-supportive' },
      { speaker: 'hiroshi_elder', jp: '亮介、ありがとうな。冷静な意見、いつも助かる。', en: 'Ryosuke, thank you. Your calm opinions always help.', style: 'Slow elder warm patriarchal acknowledgment, the soft real family-warmth audible, gentle real respect threading throughout delivery.', mood: 'warmly-acknowledging' },
      { speaker: 'ryosuke_dad', jp: 'いえ、お役に立てれば。', en: 'No, if I can be of use.', style: 'Father warm humble polite reciprocation, the soft real family-position audible, gentle real warmth threading throughout delivery.', mood: 'humbly-reciprocal' },
      { speaker: 'hiroshi_boss', jp: '父さん、一か月だけ、時間ください。', en: 'Father, please give me one month.', style: 'Boss tone firm respectful son-request, the soft real composure-with-weight audible, gentle real warmth threading throughout delivery.', mood: 'firmly-respectful' },
      { speaker: 'hiroshi_elder', jp: 'うん、それでいい。ゆっくり決めなさい。', en: 'Yes, that\'s fine. Decide slowly.', style: 'Slow elder warm patriarchal closing acceptance, the soft real fatherly-love audible, gentle real warmth threading throughout delivery.', mood: 'patriarchally-accepting' }
    ]
  },
  // ----------------------------------------------------------------
  // 216 — yumiko + saito, just mom (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00216',
    context: 'Yumiko visits Dr. Saito alone for her annual checkup. They\'re long enough acquainted that small life-updates happen naturally.',
    purpose: 'adult patient checkup — long doctor-patient rapport in adult conversation',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['年に一度', '血液', '結果', '健康', '生活'],
    cast: ['saito_doctor', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '今日は年に一度の検診ですね。', en: 'Today\'s your annual checkup.', style: 'Doctor warm professional opener, the long-rapport audible in the easy cadence, soft real care threading throughout delivery.', mood: 'warmly-professional' },
      { speaker: 'yumiko_mom', jp: 'はい、よろしくお願いします。', en: 'Yes, thank you in advance.', style: 'Maternal warm formal respectful opener, the gentle adult-formality audible, soft real composure threading throughout delivery.', mood: 'formally-warm' },
      { speaker: 'saito_doctor', jp: '血液検査の結果、特に問題ありません。', en: 'The blood test results — no particular issues.', style: 'Doctor warm professional reassurance, the clinical clarity gentled by familiarity, soft real care threading throughout delivery.', mood: 'professionally-reassuring' },
      { speaker: 'yumiko_mom', jp: '良かった。最近、疲れやすくて。', en: 'I\'m relieved. Lately, I tire easily.', style: 'Maternal warm relieved honest disclosure, the soft real adult-vulnerability audible, gentle real warmth threading throughout delivery.', mood: 'relievedly-honest' },
      { speaker: 'saito_doctor', jp: 'お子さん、まだ小さいですもんね。', en: 'Your kids are still small, after all.', style: 'Doctor warm gentle understanding observation, the soft real personal-recognition audible, gentle real warmth throughout delivery.', mood: 'gently-understanding' },
      { speaker: 'yumiko_mom', jp: 'ええ、毎日バタバタで。', en: 'Yes, every day is hectic.', style: 'Maternal warm honest laughing exhaustion, the soft real adult-relief at being seen audible, gentle real warmth throughout delivery.', mood: 'honestly-tired' },
      { speaker: 'saito_doctor', jp: '健康のためには、休む時間も大事です。', en: 'For health, time to rest matters too.', style: 'Doctor warm gentle wisdom-teaching, the soft real care-instruction audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-instructing' },
      { speaker: 'yumiko_mom', jp: 'はい、気をつけます。ありがとうございます。', en: 'Yes, I\'ll be careful. Thank you.', style: 'Maternal warm sincere closing acceptance, the gentle real adult-gratitude audible, soft real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // ----------------------------------------------------------------
  // 217 — sakura + ren, older-cousin advice (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00217',
    context: 'Sakura asks her older cousin Ren what university life is really like, and what to avoid as a freshman.',
    purpose: 'older-cousin honest mentorship — practical young-adult wisdom from one age-step up',
    ambient: 'family_room_afternoon',
    sound_effects: [],
    target_vocab: ['大学', '一人暮らし', '生活', '気を付ける', '楽しい'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'れんお兄ちゃん、大学って実際どう？', en: 'Ren-nii-chan, what\'s university actually like?', style: 'Teen warm familiar older-cousin appeal, the genuine curiosity audible, soft real engagement threading throughout delivery throughout.', mood: 'familiarly-curious' },
      { speaker: 'ren_uni', jp: 'うーん、思ってるよりは普通。', en: 'Mm, more normal than you\'d think.', style: 'University student warm honest casual disclosure, the soft real demystifying audible, gentle real warmth threading throughout delivery.', mood: 'honestly-casual' },
      { speaker: 'sakura_teen', jp: '一人暮らしって、寂しくない？', en: 'Living alone — isn\'t it lonely?', style: 'Teen warm genuine question, the careful real curiosity audible, soft real interest threading throughout delivery throughout.', mood: 'genuinely-asking' },
      { speaker: 'ren_uni', jp: '最初はね。慣れたら楽。だけど料理がきつい。', en: 'At first. After getting used to it, easy. But cooking is rough.', style: 'University student warm honest balanced sharing, the soft real adult-disclosure audible, gentle real warmth threading throughout delivery.', mood: 'honestly-balanced' },
      { speaker: 'sakura_teen', jp: 'うわー、料理かあ。あんま得意じゃない。', en: 'Ugh, cooking. I\'m not that good at it.', style: 'Teen warm honest self-aware reaction, the soft real concerned-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'honestly-concerned' },
      { speaker: 'ren_uni', jp: 'なんとかなる。コンビニもあるし。', en: 'You\'ll manage. There are convenience stores too.', style: 'University student warm casual reassurance, the soft real older-cousin warmth audible, gentle real warmth threading throughout delivery.', mood: 'casually-reassuring' },
      { speaker: 'sakura_teen', jp: '何に気を付けたほうがいい？', en: 'What should I be careful about?', style: 'Teen warm sincere advice-seeking, the genuine real respect audible, soft real attention threading throughout delivery throughout.', mood: 'sincerely-seeking' },
      { speaker: 'ren_uni', jp: 'お金。意外と早くなくなる。', en: 'Money. It disappears faster than you\'d think.', style: 'University student warm honest practical wisdom, the soft real experienced-warmth audible, gentle real warmth threading throughout delivery.', mood: 'honestly-wise' },
      { speaker: 'sakura_teen', jp: 'なるほど…。覚えとく。', en: 'I see… I\'ll remember.', style: 'Teen warm absorbed thoughtful closing, the soft real serious-acceptance audible, gentle real warmth threading throughout delivery throughout.', mood: 'absorbedly-warm' }
    ]
  },
  // ----------------------------------------------------------------
  // 218 — sho + hiroshi_elder, quiet bonding (short)
  // ----------------------------------------------------------------
  {
    id: 'conv_00218',
    context: 'Sho is at his great-uncle Hiroshi-elder\'s house. The two quietest people in the family sit together looking at a picture book.',
    purpose: 'quiet child + quiet elder — companionship without much talk',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['静か', '本', '一緒', '見る', '楽しい'],
    cast: ['sho_child', 'hiroshi_elder'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_elder', jp: 'しょう、この本、好きか？', en: 'Sho, do you like this book?', style: 'Slow elder warm gentle child-tuned question, the soft real grandfatherly-warmth audible, gentle real care throughout delivery.', mood: 'gently-curious' },
      { speaker: 'sho_child', jp: 'うん…好き。', en: 'Mm… I like it.', style: 'Tiny six-year-old soft careful answer, the small earnest agreement audible, soft small warmth threading throughout delivery throughout.', mood: 'softly-careful' },
      { speaker: 'hiroshi_elder', jp: 'この絵、見てごらん。きれいだろう。', en: 'Look at this picture. Pretty, isn\'t it.', style: 'Slow elder warm gentle showing, the soft real teaching-warmth audible, gentle real care threading throughout delivery throughout.', mood: 'gently-showing' },
      { speaker: 'sho_child', jp: '…うん、きれい。', en: '…Yeah, pretty.', style: 'Tiny six-year-old soft warm appreciation, the small careful agreement audible, soft small warmth threading throughout delivery throughout.', mood: 'softly-appreciating' },
      { speaker: 'hiroshi_elder', jp: '一緒に静かに見てるの、いいなあ。', en: 'Looking together quietly — it\'s nice.', style: 'Slow elder warm gentle shared-appreciation, the soft real grandfatherly-love audible, gentle real warmth threading throughout delivery.', mood: 'gently-appreciating' },
      { speaker: 'sho_child', jp: 'うん、楽しい。', en: 'Yeah, it\'s fun.', style: 'Tiny six-year-old soft warming agreement, the small real warmth audible, soft small joy threading throughout delivery throughout.', mood: 'softly-joyful' }
    ]
  },
  // ----------------------------------------------------------------
  // 219 — takeda + daichi, kansai at koban (medium)
  // ----------------------------------------------------------------
  {
    id: 'conv_00219',
    context: 'Daichi has stopped at a koban to report a possibly suspicious situation he saw on his commute.',
    purpose: 'civic interaction across regions — Osaka guy reporting in to Tokyo officer',
    ambient: 'koban_evening',
    sound_effects: [],
    target_vocab: ['報告', '怪しい', '人物', '気になる', '住所'],
    cast: ['daichi_kansai', 'takeda_officer'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'すいません、ちょっと気になることがあって。', en: 'Excuse me, there\'s something that bothered me.', style: 'Kansai warm earnest civic-opener, the regional swing softened for the formal setting, soft real care throughout delivery.', mood: 'earnestly-careful' },
      { speaker: 'takeda_officer', jp: 'はい、どうされましたか。', en: 'Yes, what happened?', style: 'Officer professional steady receiving voice, the careful real listening-attention audible, soft real readiness threading throughout delivery.', mood: 'professionally-steady' },
      { speaker: 'daichi_kansai', jp: '駅前の公園で、怪しい人が、ずっとおって。', en: 'At the park by the station, a suspicious person was there for a long time.', style: 'Kansai warm careful citizen-reporting, the regional swing carrying through the formal report, soft real care throughout delivery.', mood: 'carefully-reporting' },
      { speaker: 'takeda_officer', jp: '時間はどれくらいでしょうか。', en: 'About what time?', style: 'Officer professional careful clarifying, the gentle clinical inquiry-cadence, soft real attention threading throughout delivery throughout.', mood: 'carefully-clarifying' },
      { speaker: 'daichi_kansai', jp: '夕方の六時頃ですわ。', en: 'Around six in the evening.', style: 'Kansai warm precise citizen-answer, the regional swing in the helpful answer, soft real care threading throughout delivery throughout.', mood: 'precisely-warm' },
      { speaker: 'takeda_officer', jp: 'ありがとうございます。住所と連絡先、教えていただけますか。', en: 'Thank you. Could you give your address and contact info?', style: 'Officer professional courteous information-gathering, the careful institutional cadence, soft real attention threading throughout delivery.', mood: 'courteously-gathering' },
      { speaker: 'daichi_kansai', jp: 'もちろん。何かあったら、また連絡しますわ。', en: 'Of course. If anything else comes up, I\'ll contact you again.', style: 'Kansai warm cooperative civic-closing, the regional swing carrying real care, soft real commitment threading throughout delivery.', mood: 'cooperatively-warm' },
      { speaker: 'takeda_officer', jp: '助かります。何かあったら、すぐ連絡を。', en: 'You\'re a help. If anything happens, contact us immediately.', style: 'Officer warm professional sincere thanks, the soft real care behind the formality audible, gentle real warmth throughout delivery.', mood: 'warmly-sincere' }
    ]
  },
  // ----------------------------------------------------------------
  // 220 — naoko + mrs_mori, supermarket (short)
  // ----------------------------------------------------------------
  {
    id: 'conv_00220',
    context: 'Naoko bumps into Mrs. Mori in the dairy section.',
    purpose: 'small bumping-into chat — community fabric maintained through small encounters',
    ambient: 'supermarket_afternoon',
    sound_effects: [],
    target_vocab: ['偶然', 'お買い物', '安い', '最近', '元気'],
    cast: ['naoko_aunt', 'mrs_mori_neighbor'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'あら、森さん。偶然ねえ。', en: 'Oh, Mori-san. What a coincidence.', style: 'Aunt warm bright neighborly recognition, the genuine pleasant surprise audible, soft real warmth threading throughout delivery throughout.', mood: 'brightly-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'なおこちゃん、久しぶり。お買い物？', en: 'Naoko-chan, long time. Shopping?', style: 'Neighbor warm familial chan-form greeting, the easy elder-community warmth audible, soft real warmth throughout delivery throughout.', mood: 'warmly-familiar' },
      { speaker: 'naoko_aunt', jp: 'うん、今日卵安いから。', en: 'Yes, eggs are cheap today.', style: 'Aunt warm easy practical sharing, the gentle community-tip audible, soft real warmth threading throughout delivery throughout.', mood: 'easily-practical' },
      { speaker: 'mrs_mori_neighbor', jp: '本当？教えてくれてありがとう。', en: 'Really? Thanks for telling me.', style: 'Neighbor warm pleased neighborly gratitude, the soft real community-warmth audible, gentle real warmth threading throughout delivery.', mood: 'pleasedly-warm' },
      { speaker: 'naoko_aunt', jp: 'みんな元気？お孫さんも？', en: 'Everyone well? Your grandchildren too?', style: 'Aunt warm easy family-check inquiry, the genuine community-care audible, soft real warmth threading throughout delivery throughout.', mood: 'easily-caring' },
      { speaker: 'mrs_mori_neighbor', jp: 'お陰様で。なおこちゃんもね。', en: 'Thanks to you. You too, Naoko-chan.', style: 'Neighbor warm formal reciprocal closing, the gentle community-routine audible, soft real warmth threading throughout delivery throughout.', mood: 'reciprocally-warm' }
    ]
  },
  // ----------------------------------------------------------------
  // 221 — yuki + mei + aoi, planning trip (long, 3-speaker)
  // ----------------------------------------------------------------
  {
    id: 'conv_00221',
    context: 'Three women at the café planning a girls\' trip to Okinawa. Excitement and logistics tangle together.',
    purpose: 'friend-group trip planning — three female voices coordinating around shared anticipation',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['旅行', '計画', '沖縄', '飛行機', 'ホテル', '楽しみ'],
    cast: ['yuki_office', 'mei_romantic', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'いよいよ旅行の話、進めよう！', en: 'Finally, let\'s move the trip plans forward!', style: 'Office woman bright energetic gathering, the eager planning-mode audible, soft real warmth threading throughout delivery throughout.', mood: 'energetically-gathering' },
      { speaker: 'mei_romantic', jp: 'うん、私もずっと楽しみにしてた。', en: 'Yes, I\'ve been looking forward to it.', style: 'Romantic warm sincere anticipation, the soft real eager-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-anticipating' },
      { speaker: 'aoi_barista', jp: '沖縄、初めてだから、すごく嬉しい。', en: 'Okinawa — it\'s my first time, so I\'m really happy.', style: 'Dreamy artist warm soft excitement, the gentle real anticipation audible, soft real warmth threading throughout delivery throughout.', mood: 'softly-excited' },
      { speaker: 'yuki_office', jp: 'まず、飛行機。早めに予約したほうが安い。', en: 'First, the flight. Booking early is cheaper.', style: 'Office woman warm practical leadership, the gentle planning-cadence audible, soft real warmth threading throughout delivery throughout.', mood: 'practically-leading' },
      { speaker: 'mei_romantic', jp: '何月にする？私、五月が休み取りやすい。', en: 'Which month? I can take off in May easily.', style: 'Romantic warm careful coordinating, the soft real considerate-planning audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-coordinating' },
      { speaker: 'aoi_barista', jp: '五月、私もいいです。お店のシフト調整できる。', en: 'May works for me too. I can adjust the café shift.', style: 'Dreamy artist warm easy agreement, the soft real cooperative-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'easily-cooperative' },
      { speaker: 'yuki_office', jp: 'よし、五月で決まり！ホテルは？', en: 'Right, May it is! What about a hotel?', style: 'Office woman warm decisive bright energy, the eager planning-momentum audible, soft real warmth threading throughout delivery throughout.', mood: 'decisively-bright' },
      { speaker: 'aoi_barista', jp: '海が見える方が嬉しいな。', en: 'I\'d be happy if it had an ocean view.', style: 'Dreamy artist warm gentle wishing, the soft real artist-preference audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-wishing' },
      { speaker: 'mei_romantic', jp: '海、賛成！眺めながら朝ごはんとか。', en: 'Ocean, agreed! Like breakfast looking at the view.', style: 'Romantic warm bright matching-enthusiasm, the soft real shared-dream audible, gentle real warmth threading throughout delivery throughout.', mood: 'brightly-matching' },
      { speaker: 'yuki_office', jp: '夢が広がる。ちょっと贅沢しちゃう？', en: 'Dreams expanding. Shall we splurge a little?', style: 'Office woman warm playful tempting energy, the soft real friend-permission audible, gentle real warmth threading throughout delivery throughout.', mood: 'playfully-tempting' },
      { speaker: 'mei_romantic', jp: 'たまにはいいよね。頑張ったご褒美。', en: 'Now and then is good, right? A reward for working hard.', style: 'Romantic warm justifying agreement, the soft real shared-permission audible, gentle real warmth threading throughout delivery throughout.', mood: 'justifyingly-warm' },
      { speaker: 'aoi_barista', jp: '私、計画立てるの好きだから、私やる。', en: 'I like making plans, so I\'ll do it.', style: 'Dreamy artist warm gentle volunteering, the soft real careful-offering audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-volunteering' },
      { speaker: 'yuki_office', jp: 'ありがとう、あおいちゃん！助かる。', en: 'Thanks, Aoi-chan! That helps.', style: 'Office woman warm bright grateful response, the soft real warm-friendship audible, gentle real warmth threading throughout delivery throughout.', mood: 'brightly-grateful' },
      { speaker: 'mei_romantic', jp: 'ね、もう楽しみすぎて、夜眠れなくなりそう。', en: 'I\'m so excited already, I might not sleep tonight.', style: 'Romantic warm bright laughing anticipation, the soft real warm-joy audible, gentle real warmth threading throughout delivery throughout.', mood: 'brightly-laughing' },
      { speaker: 'aoi_barista', jp: '私も。本当に行けるの、まだ信じられない。', en: 'Me too. I still can\'t believe we\'re really going.', style: 'Dreamy artist warm soft happy disbelief, the soft real wonder-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-wondering' }
    ]
  },
  // ----------------------------------------------------------------
  // 222 — hina + sakura + asuka, open house (medium, 3-speaker)
  // ----------------------------------------------------------------
  {
    id: 'conv_00222',
    context: 'School open-house day. Sakura is helping with the booth her cousin Hina is showing off her drawing at. Ms. Asuka comes by.',
    purpose: 'school open-house — three generations of attention around a child\'s work',
    ambient: 'classroom_busy',
    sound_effects: [],
    target_vocab: ['参観', '作品', '上手', '見せる', '嬉しい'],
    cast: ['hina_child', 'sakura_teen', 'asuka_teacher'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: '先生、見て見て！これ、描いたの！', en: 'Sensei, look look! I drew this!', style: 'High child bright urgent recognition-burst, the eager teacher-targeting audible, soft real childish joy threading throughout delivery.', mood: 'eagerly-bright' },
      { speaker: 'asuka_teacher', jp: 'わあ、立派な作品。すごく上手だね。', en: 'Wow, splendid work. Really well done.', style: 'Teacher warm professional kneeling-praise, the soft real attentive-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'attentively-praising' },
      { speaker: 'sakura_teen', jp: '一週間、毎日色塗ってたんですよ。', en: 'For a week, she colored every day.', style: 'Teen warm cousin-witness pride-sharing, the soft real protective-love audible, gentle real warmth threading throughout delivery throughout.', mood: 'protectively-proud' },
      { speaker: 'asuka_teacher', jp: '努力したのが、伝わってくるよ。', en: 'I can feel the effort.', style: 'Teacher warm gentle specific affirmation, the soft real teacher-attention audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-affirming' },
      { speaker: 'hina_child', jp: 'えへへ、お母さんにも見せるの！', en: 'Heehee, I\'ll show Mom too!', style: 'High child warm bright pleased anticipation, the eager pride-energy audible, soft real childish joy threading throughout delivery throughout.', mood: 'brightly-pleased' },
      { speaker: 'asuka_teacher', jp: 'お母さん、絶対喜ぶよ。', en: 'Mom will definitely be happy.', style: 'Teacher warm gentle prophesying, the soft real warm-confidence audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-prophesying' },
      { speaker: 'sakura_teen', jp: 'ひな、よかったね。先生に褒められて。', en: 'Hina, good for you. Praised by sensei.', style: 'Teen warm gentle older-cousin warmth, the soft real protective-pride audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-celebrating' },
      { speaker: 'hina_child', jp: 'うん！またいっぱい描く！', en: 'Yeah! I\'ll draw lots more!', style: 'High child bright energized commitment, the soft real childish-drive audible, gentle real warmth threading throughout delivery throughout.', mood: 'energetically-bright' },
      { speaker: 'asuka_teacher', jp: '次の作品も楽しみにしてるね。', en: 'I\'m looking forward to your next work too.', style: 'Teacher warm gentle closing encouragement, the soft real future-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-encouraging' }
    ]
  },
  // ----------------------------------------------------------------
  // 223 — kenji + yuki + daichi, three colleagues lunch (medium, 3-speaker)
  // ----------------------------------------------------------------
  {
    id: 'conv_00223',
    context: 'Lunch at a small soba shop near the office. Three colleagues unwind together over warm noodles.',
    purpose: 'colleague midday warmth — three workplace voices in low-stakes shared meal',
    ambient: 'soba_shop_lunch',
    sound_effects: [],
    target_vocab: ['昼ごはん', '美味しい', '仕事', '午後', '頑張る'],
    cast: ['kenji_office', 'yuki_office', 'daichi_kansai'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '今日のお昼、決まらない！', en: 'I can\'t decide on today\'s lunch!', style: 'Office woman bright laughing complaint, the warm casual energy audible, soft real warmth threading throughout delivery throughout.', mood: 'brightly-laughing' },
      { speaker: 'daichi_kansai', jp: '迷ったら、温かいのがええで。冬やし。', en: 'When in doubt, go for warm. It\'s winter.', style: 'Kansai warm casual practical wisdom, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'casually-practical' },
      { speaker: 'kenji_office', jp: 'じゃあ、温かいきつねうどんで。', en: 'Then, warm kitsune udon.', style: 'Salaryman warm easy decision-following, the casual office-warmth audible, soft real warmth threading throughout delivery throughout.', mood: 'easily-deciding' },
      { speaker: 'yuki_office', jp: '私も同じで。間違いない。', en: 'Same for me. Can\'t go wrong.', style: 'Office woman warm bright matching, the easy warm-following audible, soft real warmth threading throughout delivery throughout.', mood: 'brightly-matching' },
      { speaker: 'daichi_kansai', jp: 'わいは、ちょっと辛いの試してみるわ。', en: 'I\'ll try something a bit spicy.', style: 'Kansai warm independent casual choice, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'independently-casual' },
      { speaker: 'kenji_office', jp: '関西の人は、辛いの好きなんですか？', en: 'Do Kansai people like spicy things?', style: 'Salaryman warm earnest curious inquiry, the gentle real cultural-curiosity audible, soft real warmth threading throughout delivery.', mood: 'earnestly-curious' },
      { speaker: 'daichi_kansai', jp: 'いやいや、わいだけかもしれん。', en: 'No no, maybe just me.', style: 'Kansai warm laughing self-correction, the regional swing softening, soft real warmth threading throughout delivery throughout.', mood: 'laughingly-correcting' },
      { speaker: 'yuki_office', jp: 'うふふ。午後の会議、頑張ろうね、三人で。', en: 'Hehe. Let\'s do well in the afternoon meeting, the three of us.', style: 'Office woman warm bright rallying, the soft real team-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'brightly-rallying' },
      { speaker: 'kenji_office', jp: 'うん、お腹いっぱいになって、午後乗り切ろう。', en: 'Yes, full bellies, let\'s get through the afternoon.', style: 'Salaryman warm sincere commitment-joining, the gentle real team-warmth audible, soft real warmth threading throughout delivery.', mood: 'sincerely-joining' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

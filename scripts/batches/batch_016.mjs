import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_016)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 304 — kenji + daichi, project planning (medium)
  {
    id: 'conv_00304',
    context: 'Kenji and Daichi are planning a new project in a side conference room. They\'re working together for the first time after a recent reorganization.',
    purpose: 'workplace strategy session — two colleagues finding rhythm together',
    ambient: 'meeting_room',
    sound_effects: [],
    target_vocab: ['企画', '戦略', '目標', '効率', '担当'],
    cast: ['kenji_office', 'daichi_kansai'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'では、今回の企画、整理しましょうか。', en: 'Then, shall we organize this project?', style: 'Salaryman warm professional measured opener, the soft real professional-clarity audible, gentle real composure throughout delivery.', mood: 'professionally-organized' },
      { speaker: 'daichi_kansai', jp: 'お願いします。わい、戦略から考えるのが好きで。', en: 'Please. I like thinking from strategy first.', style: 'Kansai warm casual professional sharing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'casually-warm' },
      { speaker: 'kenji_office', jp: '目標は明確にしておいた方がいいですね。', en: 'The goal should be made clear first.', style: 'Salaryman warm professional careful agreeing-direction, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'carefully-directing' },
      { speaker: 'daichi_kansai', jp: '効率も考えながら、無理ないペースで。', en: 'Considering efficiency, at a sustainable pace.', style: 'Kansai warm casual practical balanced sharing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'practically-balanced' },
      { speaker: 'kenji_office', jp: '担当はどう分けましょうか。', en: 'How shall we divide responsibilities?', style: 'Salaryman warm professional cooperative inquiring, the soft real real-respect audible, gentle real composure threading throughout delivery.', mood: 'cooperatively-formal' },
      { speaker: 'daichi_kansai', jp: 'わいが対外調整、田中さんが内部のまとめでどう？', en: 'I\'ll handle external coordination, you the internal — how\'s that?', style: 'Kansai warm casual specific proposing-bright, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'specifically-proposing' },
      { speaker: 'kenji_office', jp: 'いいですね、それで進めましょう。', en: 'Sounds good — let\'s proceed with that.', style: 'Salaryman warm professional sincere agreeing, the soft real real-warmth audible, gentle real composure threading throughout delivery throughout.', mood: 'sincerely-agreeing' },
      { speaker: 'daichi_kansai', jp: 'ほな、来週までに、たたき台作っときます。', en: 'Then, by next week, I\'ll prepare a draft.', style: 'Kansai warm casual committing brisk closing, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'casually-committed' }
    ]
  },
  // 305 — sakura + asuka, debate prep (long)
  {
    id: 'conv_00305',
    context: 'Sakura is preparing for a school debate competition. Asuka coaches her on argumentation.',
    purpose: 'academic skill transmission — teacher carefully building real argumentative confidence',
    ambient: 'classroom_quiet',
    sound_effects: [],
    target_vocab: ['議論', '主張', '根拠', '反対', '賛成', '結論'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'ディベートの基本、覚えてる？', en: 'Do you remember the basics of debate?', style: 'Teacher warm professional gentle teaching-checking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-checking' },
      { speaker: 'sakura_teen', jp: 'はい、主張と根拠、ですよね。', en: 'Yes, claim and basis, right?', style: 'Teen warm careful sincere studying-recalling, the soft real real-effort audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-studying' },
      { speaker: 'asuka_teacher', jp: 'その通り。賛成派は、どんな主張で行く？', en: 'That\'s right. The affirmative side — what\'s your claim?', style: 'Teacher warm gentle professional pushing-coaching, the soft real real-engagement audible, gentle real warmth throughout delivery throughout.', mood: 'gently-coaching' },
      { speaker: 'sakura_teen', jp: '高校生に、スマホは必要だ、です。', en: 'For high schoolers, smartphones are necessary.', style: 'Teen warm careful clear practiced sharing, the soft real real-effort audible, gentle real warmth throughout delivery throughout.', mood: 'carefully-practiced' },
      { speaker: 'asuka_teacher', jp: '根拠、三つ出せる？', en: 'Can you give three bases?', style: 'Teacher warm gentle pushing-professional careful, the soft real real-mentor audible, gentle real warmth throughout delivery throughout.', mood: 'gently-pushing' },
      { speaker: 'sakura_teen', jp: '一つは、緊急時の連絡。二つ目は、学習にも使える。', en: 'One — emergency contact. Two — usable for learning too.', style: 'Teen warm careful structured engaged-organized, the soft real real-effort audible, gentle real warmth throughout delivery throughout.', mood: 'carefully-organized' },
      { speaker: 'asuka_teacher', jp: '三つ目は？', en: 'And the third?', style: 'Teacher warm gentle brief encouraging continuing, the soft real real-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-continuing' },
      { speaker: 'sakura_teen', jp: 'えっと…社会との繋がり、ですかね。', en: 'Um… social connections, maybe.', style: 'Teen warm soft careful searching tentative, the soft real real-effort audible, gentle real warmth threading throughout delivery throughout.', mood: 'tentatively-searching' },
      { speaker: 'asuka_teacher', jp: 'いいね。次は、反対の意見に対して、どう答える？', en: 'Good. Next, how do you answer the opposing view?', style: 'Teacher warm gentle professional advancing teaching, the soft real real-mentor audible, gentle real warmth throughout delivery throughout.', mood: 'gently-advancing' },
      { speaker: 'sakura_teen', jp: 'スマホ依存とか、よく言われるから…。', en: 'Smartphone addiction is often mentioned…', style: 'Teen warm careful articulate facing-challenge, the soft real real-engagement audible, gentle real warmth threading throughout delivery throughout.', mood: 'articulatedly-facing' },
      { speaker: 'asuka_teacher', jp: 'その懸念を認めた上で、どう乗り越える？', en: 'While acknowledging that concern, how do you overcome it?', style: 'Teacher warm gentle careful coaching-professional, the soft real real-mentor audible, gentle real warmth throughout delivery throughout.', mood: 'carefully-coaching' },
      { speaker: 'sakura_teen', jp: 'ルールを決めて、使えば、問題は減ります。', en: 'If we set rules and use it, the problems decrease.', style: 'Teen warm careful confident strengthening-arguing, the soft real real-growth audible, gentle real warmth threading throughout delivery throughout.', mood: 'confidently-arguing' },
      { speaker: 'asuka_teacher', jp: '素晴らしい。結論、どう締める？', en: 'Wonderful. How do you close the conclusion?', style: 'Teacher warm bright sincere encouraging-advancing, the soft real real-pride audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: '正しい使い方を、若いうちに身につけることが大事だ、と。', en: 'Learning proper use when young matters most.', style: 'Teen warm soft sincere confident-closing-articulate, the soft real real-conviction audible, gentle real warmth throughout delivery throughout.', mood: 'sincerely-confident' },
      { speaker: 'asuka_teacher', jp: '完璧。本番、絶対大丈夫だよ。', en: 'Perfect. The real thing — you\'ll definitely be fine.', style: 'Teacher warm firm sincere closing-belief, the soft real real-deep-respect audible, gentle real warmth threading throughout delivery throughout.', mood: 'firmly-believing' }
    ]
  },
  // 306 — hina + sho, school day (short)
  {
    id: 'conv_00306',
    context: 'Two kids walking home from elementary school. They\'re close enough now to chat freely.',
    purpose: 'small after-school child friendship — easy walking chatter',
    ambient: 'sidewalk_afternoon',
    sound_effects: [],
    target_vocab: ['授業', '宿題', '友達', '楽しい', '帰る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: '今日の授業、ぜんぶ楽しかった！', en: 'Today\'s classes were all fun!', style: 'High child bright cheerful enthusiastic declaration, the soft real real-childish-warmth audible, gentle real warmth throughout delivery.', mood: 'cheerfully-bright' },
      { speaker: 'sho_child', jp: '…ぼくは、絵の時間が一番好き。', en: '…I like art time the best.', style: 'Tiny six-year-old soft small careful gentle preference-sharing, the small real warmth audible, soft small warmth throughout delivery throughout.', mood: 'softly-preferring' },
      { speaker: 'hina_child', jp: 'わかる！絵、楽しいよね。宿題、いっぱい？', en: 'Right! Art is fun. Lots of homework?', style: 'High child bright agreeing-curious pivoting, the soft real real-childish-engagement audible, gentle real warmth throughout delivery throughout.', mood: 'brightly-pivoting' },
      { speaker: 'sho_child', jp: 'ちょっとだけ。算数。', en: 'Just a little. Math.', style: 'Tiny six-year-old soft small brief informative gentle, the small real warmth audible, soft small warmth threading throughout delivery throughout.', mood: 'softly-brief' },
      { speaker: 'hina_child', jp: 'ぼくも一緒。終わったら、また遊ぼう！', en: 'Me too! When done, let\'s play again!', style: 'High child bright matching-warm planning-extending, the soft real real-friendship audible, gentle real warmth throughout delivery throughout.', mood: 'brightly-planning' },
      { speaker: 'sho_child', jp: 'うん。早く帰ろう。', en: 'Yeah. Let\'s hurry home.', style: 'Tiny six-year-old soft small gentle warm matching-easy, the small real warmth audible, soft small warmth threading throughout delivery throughout.', mood: 'softly-matching' }
    ]
  },
  // 307 — ryosuke + yumiko, marriage anniversary (long)
  {
    id: 'conv_00307',
    context: 'Ryosuke and Yumiko sit down with a glass of wine on their twentieth anniversary. The kids are asleep.',
    purpose: 'long-marriage anniversary intimate conversation — quiet reflection across two decades',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['結婚', '思い出', '感謝', '一緒', '時間', '幸せ'],
    cast: ['ryosuke_dad', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'もう、二十年。早かったな。', en: 'Already twenty years. Time flew.', style: 'Father warm gentle reflective wondering soft, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-reflective' },
      { speaker: 'yumiko_mom', jp: 'うん。最近、よく考える。', en: 'Yes. Lately, I think about it a lot.', style: 'Maternal warm soft sincere gentle agreeing-reflective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-reflective' },
      { speaker: 'ryosuke_dad', jp: '結婚式のこと、覚えてる？緊張してたな、俺。', en: 'Remember the wedding? I was nervous.', style: 'Father warm gentle laughing nostalgic disclosure, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-nostalgic' },
      { speaker: 'yumiko_mom', jp: 'うん、すごく。声、震えてたよ。', en: 'Yeah, very. Your voice was shaking.', style: 'Maternal warm soft laughing tender-remembering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-laughing' },
      { speaker: 'ryosuke_dad', jp: '良くここまで、二人で来たよな。', en: 'We really made it this far, together.', style: 'Father warm gentle deep sincere reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'deeply-sincere' },
      { speaker: 'yumiko_mom', jp: '色んなことあったね。良いことも、悪いことも。', en: 'Lots of things happened. Good and bad.', style: 'Maternal warm soft tender balanced reflective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-balanced' },
      { speaker: 'ryosuke_dad', jp: '一番きつかったの、覚えてる？', en: 'Do you remember the hardest time?', style: 'Father warm gentle careful tender-asking, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-careful' },
      { speaker: 'yumiko_mom', jp: 'リクが生まれた時の、お父さんの仕事の話？', en: 'When Riku was born, your work situation?', style: 'Maternal warm soft careful gentle specifying, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-specifying' },
      { speaker: 'ryosuke_dad', jp: 'そう。あの時、ゆみこに支えてもらった。', en: 'Yes. Back then, you supported me.', style: 'Father warm gentle deep grateful tender-acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-grateful' },
      { speaker: 'yumiko_mom', jp: '私こそ。お父さんが、ずっと頑張ってくれて。', en: 'Same here. You kept working hard.', style: 'Maternal warm soft tender matching-grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'tenderly-matching' },
      { speaker: 'ryosuke_dad', jp: '今、こうやって、二人で座ってるのが、本当に幸せ。', en: 'Now, sitting like this together — truly happy.', style: 'Father warm gentle sincere deep peaceful-disclosure, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-peaceful' },
      { speaker: 'yumiko_mom', jp: '私も。これからも、よろしくね。', en: 'Me too. From now on too, please.', style: 'Maternal warm soft sincere tender-closing extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-extending' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。ありがとう、ゆみこ。', en: 'Same. Thank you, Yumiko.', style: 'Father warm gentle sincere deep tender-closing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: 'ふふ、ワイン、もう一杯飲もう。', en: 'Hehe, let\'s have another glass of wine.', style: 'Maternal warm soft gentle laughing-pivoting closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-pivoting' }
    ]
  },
  // 308 — hiroshi_boss + tatsuya, contract details (medium)
  {
    id: 'conv_00308',
    context: 'Hiroshi-boss and Tatsuya formally signing a longer-term contract for the produce supply.',
    purpose: 'formal business contract — careful adult negotiation across cultures',
    ambient: 'office_meeting',
    sound_effects: [],
    target_vocab: ['契約', '条件', '期間', '価格', '確認'],
    cast: ['hiroshi_boss', 'tatsuya_country'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '達也さん、本日はお越しいただき、ありがとうございます。', en: 'Tatsuya-san, thank you for coming today.', style: 'Boss warm formal measured professional-opening, the soft real real-respect audible, gentle real composure threading throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ、ようお招きいただきました。', en: 'On my side, thank you for the invitation.', style: 'Country gruff warm formal-rural careful reciprocal, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'formally-rural' },
      { speaker: 'hiroshi_boss', jp: '契約書、内容ご確認いただけましたか。', en: 'The contract — have you confirmed the contents?', style: 'Boss warm formal measured business-clarifying, the soft real real-professional audible, gentle real composure threading throughout delivery throughout.', mood: 'professionally-clarifying' },
      { speaker: 'tatsuya_country', jp: 'はい、価格、期間、納品方法、全部確認しました。', en: 'Yes, price, period, delivery method — all confirmed.', style: 'Country gruff warm thorough careful reporting, the soft real real-real audible, gentle real warmth threading throughout delivery throughout.', mood: 'thoroughly-careful' },
      { speaker: 'hiroshi_boss', jp: '条件で、何かご懸念はございますか。', en: 'Any concerns about the conditions?', style: 'Boss warm formal measured careful professional-inviting, the soft real real-respect audible, gentle real composure threading throughout delivery throughout.', mood: 'carefully-inviting' },
      { speaker: 'tatsuya_country', jp: '特にありません。安心して任せられます。', en: 'No particular ones. I can entrust with peace.', style: 'Country gruff warm sincere committed reassuring, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-committed' },
      { speaker: 'hiroshi_boss', jp: 'では、こちらに署名と捺印を、お願いします。', en: 'Then, please sign and seal here.', style: 'Boss warm formal measured professional-directing, the soft real real-respect audible, gentle real composure threading throughout delivery throughout.', mood: 'formally-directing' },
      { speaker: 'tatsuya_country', jp: '失礼します。これからも、よろしくお願いします。', en: 'Excuse me. From now on too, please.', style: 'Country gruff warm formal-rural sincere closing-warm, the soft real real-respect audible, gentle real warmth threading throughout delivery throughout.', mood: 'formally-warm' }
    ]
  },
  // 309 — mei + sakura + mei's mom, formal lunch (3-speaker, long) — but mei's mom isn't in cast.
  // Adjust: mei + sakura + asuka (Sakura is consulting Mei via aunt Naoko; Asuka has helped Sakura — natural)
  // Actually let me do: mei + sakura + naoko (Sakura with mentor mei AND aunt naoko)
  {
    id: 'conv_00309',
    context: 'Naoko, Mei, and Sakura at lunch together. The three women — three generations of femininity — talking about life choices.',
    purpose: 'three-female adult mentorship — women across ages sharing real talk',
    ambient: 'restaurant_lunch',
    sound_effects: [],
    target_vocab: ['人生', '選択', '正直', '迷い', '応援', '幸せ'],
    cast: ['naoko_aunt', 'mei_romantic', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: '三人で食事って、いいわね。', en: 'A meal for the three of us — how nice.', style: 'Aunt warm gentle bright community-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-bright' },
      { speaker: 'mei_romantic', jp: 'ナオコさん、誘ってくれて、ありがとうございます。', en: 'Naoko-san, thank you for inviting.', style: 'Romantic warm soft sincere formal-warm gratitude, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '私も、お二人と話せて嬉しい。', en: 'I\'m happy to talk with you both too.', style: 'Teen warm soft sincere shy-pleased disclosure, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'shy-pleased' },
      { speaker: 'naoko_aunt', jp: 'さくらちゃん、受験どう？', en: 'Sakura-chan, how\'s the entrance exam?', style: 'Aunt warm gentle bright family-curious, the soft real real-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-curious' },
      { speaker: 'sakura_teen', jp: 'まだ、迷いもあるけど、頑張ってます。', en: 'There\'s still hesitation, but I\'m doing my best.', style: 'Teen warm soft honest mixed brave-sharing, the soft real real-effort audible, gentle real warmth threading throughout delivery throughout.', mood: 'honestly-brave' },
      { speaker: 'mei_romantic', jp: '迷いがあっても、選んだ道、信じることが大事。', en: 'Even with hesitation, believing the chosen path matters.', style: 'Romantic warm soft sincere gentle mentor-warmth, the soft real real-warmth audible, gentle real warmth throughout delivery throughout.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '本当ね。人生、迷うことだらけ。', en: 'Truly. Life is full of hesitation.', style: 'Aunt warm gentle wise generationally-warm sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-wise' },
      { speaker: 'sakura_teen', jp: 'メイさんたちも、迷うことありますか？', en: 'Mei-san, you also have hesitations?', style: 'Teen warm soft sincere genuine real-asking, the soft real real-trust audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-real' },
      { speaker: 'mei_romantic', jp: 'もちろん。今でも、毎日のように。', en: 'Of course. Even now, almost every day.', style: 'Romantic warm soft sincere honest deep-disclosure, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-honest' },
      { speaker: 'naoko_aunt', jp: '私もよ。年取っても、変わらない。', en: 'Me too. Even as I age, it doesn\'t change.', style: 'Aunt warm gentle generational reflective wise, the soft real real-warmth audible, gentle real warmth throughout delivery throughout.', mood: 'gently-generational' },
      { speaker: 'sakura_teen', jp: '少し、安心しました。みんな迷うんですね。', en: 'I\'m a little relieved. Everyone has hesitation.', style: 'Teen warm soft sincere visible-relieved warm-realizing, the soft real real-warmth audible, gentle real warmth throughout delivery throughout.', mood: 'relievedly-warm' },
      { speaker: 'mei_romantic', jp: 'さくらちゃんが、正直に話せる人になれたら、絶対大丈夫。', en: 'If you can become honest in talking, you\'re definitely fine.', style: 'Romantic warm soft sincere mentor-wise warm-belief, the soft real real-warmth audible, gentle real warmth throughout delivery throughout.', mood: 'sincerely-believing' },
      { speaker: 'naoko_aunt', jp: '私たちも、応援してるから。', en: 'We\'re cheering for you too.', style: 'Aunt warm gentle generous extending-warm community, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'generously-warm' },
      { speaker: 'sakura_teen', jp: 'こうやって、話せる人いるの、本当に幸せ。', en: 'Having people to talk to like this — truly happy.', style: 'Teen warm soft sincere deep tender-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery throughout.', mood: 'sincerely-tender' }
    ]
  },
  // 310 — saito + ren, big follow-up (medium)
  {
    id: 'conv_00310',
    context: 'Ren returns to Dr. Saito two months later. He\'s been doing the suggested things and feels much better.',
    purpose: 'mental health follow-up — patient reporting improvement',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['調子', '改善', '生活', '習慣', '安心'],
    cast: ['saito_doctor', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'れんさん、その後、どうですか。', en: 'Ren-san, how have you been?', style: 'Doctor warm professional gentle careful follow-up-opening, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-careful' },
      { speaker: 'ren_uni', jp: 'おかげさまで、調子いいです。', en: 'Thanks to you, doing well.', style: 'University student warm sincere bright relieved-reporting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'saito_doctor', jp: 'それは何より。生活、変えてみました？', en: 'That\'s the best. Did you change your life?', style: 'Doctor warm professional gentle pleased clarifying, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'pleasedly-clarifying' },
      { speaker: 'ren_uni', jp: 'スマホ、寝る前にやめました。あと、朝歩いてます。', en: 'I stopped the phone before bed. Also, I walk mornings.', style: 'University student warm sincere proud-specific reporting, the soft real real-real audible, gentle real warmth throughout delivery.', mood: 'sincerely-proud' },
      { speaker: 'saito_doctor', jp: 'すごい、ちゃんと実行できて。', en: 'Wonderful, properly carried out.', style: 'Doctor warm gentle sincere bright proud-recognizing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-recognizing' },
      { speaker: 'ren_uni', jp: '習慣にすると、楽になりました。', en: 'Once it became habit, it got easier.', style: 'University student warm sincere reflective-deep sharing, the soft real real-growth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'saito_doctor', jp: 'これからも、無理せず続けてください。', en: 'From now on too, without forcing — continue.', style: 'Doctor warm gentle wise mentor-closing-care, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-mentoring' },
      { speaker: 'ren_uni', jp: 'はい、ありがとうございました。安心しました。', en: 'Yes, thank you. I\'m relieved.', style: 'University student warm sincere deep grateful closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 311 — naoko + asuka, professional women (short)
  {
    id: 'conv_00311',
    context: 'Naoko and Asuka happen to share a table at a coffee shop and have a brief conversation about teaching and family.',
    purpose: 'small civil professional-women warm exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['仕事', '生徒', 'やりがい', '尊敬', '大事'],
    cast: ['asuka_teacher', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: '先生のお仕事、大変ですよね。', en: 'A teacher\'s job — must be tough.', style: 'Aunt warm gentle civil respectful opening, the soft real real-respect audible, gentle real warmth throughout delivery.', mood: 'respectfully-warm' },
      { speaker: 'asuka_teacher', jp: '大変ですけど、生徒の成長を見るのは、本当にやりがいで。', en: 'Tough, but watching students grow — truly fulfilling.', style: 'Teacher warm gentle sincere reflective-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'ひながいつも、先生のこと話してて。', en: 'Hina always talks about you.', style: 'Aunt warm gentle sincere community-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-warm' },
      { speaker: 'asuka_teacher', jp: 'まあ、嬉しいです。ひなさんも、優しいお子さんで。', en: 'Oh, I\'m happy. Hina is a kind child too.', style: 'Teacher warm gentle touched sincere reciprocal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-touched' },
      { speaker: 'naoko_aunt', jp: '若い先生方が、子供を大事にしてくださる、それは本当にありがたい。', en: 'Young teachers caring for children — truly something to be grateful for.', style: 'Aunt warm gentle generational reflective-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-generational' },
      { speaker: 'asuka_teacher', jp: '私こそ、保護者の方の支えがあるから、続けられるんです。', en: 'I, too, can continue because of parents\' support.', style: 'Teacher warm gentle humble redirecting-respect, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-respectful' }
    ]
  },
  // 312 — riku + ren, big brother (long)
  {
    id: 'conv_00312',
    context: 'Ren visits Riku at home — the cousins have a long conversation about handling pressure, university choices, and what to do when you don\'t know.',
    purpose: 'older-cousin mentor — real masculine advice across age gap',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['受験', '不安', '選択', '気持ち', '将来', '一緒'],
    cast: ['ren_uni', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'リク、最近どうよ。', en: 'Riku, how\'s things lately?', style: 'University student warm easy casual older-brother opener, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'easily-warm' },
      { speaker: 'riku_teen', jp: '受験、近づいてきて。正直、しんどい。', en: 'Entrance exams are getting close. Honestly, exhausting.', style: 'Teen warm soft honest casual-vulnerable disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'honestly-casual' },
      { speaker: 'ren_uni', jp: 'わかる。俺もそうだった。', en: 'I get it. I was the same.', style: 'University student warm easy gentle identifying-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-identifying' },
      { speaker: 'riku_teen', jp: '不安で、眠れない時もあって。', en: 'Anxious — sometimes can\'t sleep.', style: 'Teen warm soft honest vulnerable real-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-vulnerable' },
      { speaker: 'ren_uni', jp: 'マジで、それな。俺もそうだった。一人で抱えるな。', en: 'For real, that. I was too. Don\'t carry it alone.', style: 'University student warm gentle firm caring matching-advice, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'firmly-caring' },
      { speaker: 'riku_teen', jp: '誰に話せばいいか、わからなくて。', en: 'I don\'t know who to talk to.', style: 'Teen warm soft vulnerable real lost-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'vulnerably-lost' },
      { speaker: 'ren_uni', jp: '俺で良ければ、いつでも聞くよ。', en: 'If I\'ll do, I\'ll listen anytime.', style: 'University student warm easy generous sincere-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'riku_teen', jp: 'マジで？助かる。', en: 'For real? It saves me.', style: 'Teen warm soft sincere visible-relieved touched-warmth, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-relieved' },
      { speaker: 'ren_uni', jp: '選択って、迷うもの。正解とか、ないから。', en: 'Choices — they\'re things you doubt. There\'s no right answer.', style: 'University student warm gentle wise reframing-mentor, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-wise' },
      { speaker: 'riku_teen', jp: 'そうなの？でも、選ばないと、いけないし。', en: 'Is that so? But, have to choose.', style: 'Teen warm careful real engaged-grappling, the soft real real-effort audible, gentle real warmth throughout delivery.', mood: 'carefully-grappling' },
      { speaker: 'ren_uni', jp: '選んだ後、それを正解にしていくのが、大事。', en: 'After choosing, making it the right one matters more.', style: 'University student warm gentle wise specific-insight, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'wisely-specific' },
      { speaker: 'riku_teen', jp: '…なるほど。なんか、ちょっと楽になった。', en: '…I see. Somehow, a little lighter.', style: 'Teen warm soft absorbing visible-relief-warmth, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-absorbing' },
      { speaker: 'ren_uni', jp: '一人じゃないから。気持ち、共有しよう。', en: 'Because you\'re not alone. Let\'s share feelings.', style: 'University student warm gentle generous extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-extending' },
      { speaker: 'riku_teen', jp: 'うん…れんお兄ちゃん、ありがとう。', en: 'Yeah… Ren-nii-chan, thanks.', style: 'Teen warm soft sincere deep grateful-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-grateful' },
      { speaker: 'ren_uni', jp: '将来、一緒に飲もうな。社会人になってから。', en: 'In the future, let\'s drink together. After you become adult.', style: 'University student warm easy generous teasing-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'easily-warm' }
    ]
  },
  // 313 — aoi + sho, cafe (short)
  {
    id: 'conv_00313',
    context: 'Sho is at the café with his older brother. While the brother orders, Aoi quietly gives Sho a small drawing she made for him.',
    purpose: 'small barista-child kindness — adult quiet attention to a quiet child',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['静か', '絵', 'プレゼント', '優しい', 'ありがとう'],
    cast: ['aoi_barista', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'しょうくん、これ、プレゼント。', en: 'Sho-kun, this — a present.', style: 'Soft dreamy barista warm gentle child-tuned soft-offering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-offering' },
      { speaker: 'sho_child', jp: '…ぼくに？', en: '…For me?', style: 'Tiny six-year-old soft small careful surprised gentle-receiving, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-surprised' },
      { speaker: 'aoi_barista', jp: '小さい絵だけど、描いた。', en: 'A small drawing, but I made it.', style: 'Soft dreamy barista warm soft humble-explaining, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-soft' },
      { speaker: 'sho_child', jp: '…うわ、可愛い、ありがとう。', en: '…Wow, cute, thank you.', style: 'Tiny six-year-old soft small touched genuine-grateful, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-touched' },
      { speaker: 'aoi_barista', jp: 'しょうくん、いつも静かで、好きだから。', en: 'Sho-kun, always quiet — because I like that.', style: 'Soft dreamy barista warm sincere gentle-disclosing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'お姉さん、優しい。', en: 'Big sister, kind.', style: 'Tiny six-year-old soft small genuine quiet-recognition, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-recognizing' }
    ]
  },
  // 314 — yuki + kenji + hiroshi_boss, formal review (3-speaker, medium)
  {
    id: 'conv_00314',
    context: 'A second formal quarterly review, this time with both Yuki and Kenji present with the boss. Honest feedback in both directions.',
    purpose: 'formal three-way performance discussion — across-rank professional honesty',
    ambient: 'meeting_room',
    sound_effects: [],
    target_vocab: ['評価', '改善', '提案', '協力', '貢献'],
    cast: ['hiroshi_boss', 'kenji_office', 'yuki_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '今期も、二人の貢献は大きかった。', en: 'This quarter too, your contributions were significant.', style: 'Boss measured warm formal sincere-praising opener, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'measuredly-praising' },
      { speaker: 'kenji_office', jp: 'ありがとうございます。', en: 'Thank you.', style: 'Salaryman warm formal brief sincere-respectful, the soft real real-composure audible, gentle real warmth throughout delivery.', mood: 'formally-composed' },
      { speaker: 'yuki_office', jp: '佐藤さんと協力できて、すごく学びました。', en: 'Working with Tanaka-san — I learned a lot.', style: 'Office woman warm sincere gentle generous-acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'hiroshi_boss', jp: '何か、組織への提案、ありますか。', en: 'Any proposals for the organization?', style: 'Boss measured warm formal opening-direction inviting, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'formally-inviting' },
      { speaker: 'kenji_office', jp: '若手の研修、もう少し充実させたいです。', en: 'I\'d like to enhance younger employees\' training a bit more.', style: 'Salaryman warm formal sincere thoughtful-proposing, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'thoughtfully-proposing' },
      { speaker: 'yuki_office', jp: '私もそう思います。私たちもサポートしたい。', en: 'I think so too. I\'d like to support too.', style: 'Office woman warm sincere matching gentle-supporting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'hiroshi_boss', jp: 'いい提案だ。来期から、検討させてもらう。', en: 'A good proposal. From next quarter, I\'ll consider.', style: 'Boss measured warm formal positive committing, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'measuredly-committing' },
      { speaker: 'kenji_office', jp: 'よろしくお願いいたします。', en: 'Please.', style: 'Salaryman warm formal brief deep-respectful closing, the soft real real-respect audible, gentle real warmth throughout delivery.', mood: 'deeply-respectful' }
    ]
  },
  // 315 — takeda + saito, civic meeting (medium)
  {
    id: 'conv_00315',
    context: 'A monthly community safety / health meeting. Takeda the officer and Saito the doctor compare notes on the elderly in the neighborhood.',
    purpose: 'two-professional civic cooperation — coordinated care for community vulnerable',
    ambient: 'community_room',
    sound_effects: [],
    target_vocab: ['地域', '見守り', '高齢', '健康', '協力'],
    cast: ['takeda_officer', 'saito_doctor'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: '先生、最近、高齢の方々、お元気ですか。', en: 'Doctor, lately, the elderly — are they well?', style: 'Officer warm professional careful colleague-civic opener, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-caring' },
      { speaker: 'saito_doctor', jp: '冬は、体調崩しやすい時期ですね。', en: 'Winter — it\'s a time bodies get worn down.', style: 'Doctor warm professional gentle sharing-clinical observation, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-sharing' },
      { speaker: 'takeda_officer', jp: '一人暮らしの方、こちらでも気にかけてます。', en: 'Solitary elders — we\'re paying attention here too.', style: 'Officer warm professional careful civic-reporting, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'carefully-reporting' },
      { speaker: 'saito_doctor', jp: 'こちらも、定期的に訪問するようにしてます。', en: 'We\'re doing regular visits.', style: 'Doctor warm professional gentle matching-care sharing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-matching' },
      { speaker: 'takeda_officer', jp: '何かあれば、連絡し合いましょう。', en: 'If anything happens, let\'s contact each other.', style: 'Officer warm professional collaborative-warm offering, the soft real real-partnership audible, gentle real warmth throughout delivery.', mood: 'collaboratively-warm' },
      { speaker: 'saito_doctor', jp: '本当に。地域で支え合うのが、大事ですね。', en: 'Truly. Community supporting each other matters.', style: 'Doctor warm gentle sincere reflective-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'takeda_officer', jp: '協力、いつも感謝しています。', en: 'Cooperation — I\'m always grateful for it.', style: 'Officer warm professional sincere gentle-respectful closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'saito_doctor', jp: 'こちらこそ。お互い、無理しすぎないように。', en: 'Same for me. Mutually, let\'s not overdo it.', style: 'Doctor warm gentle warm reciprocal-care closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-reciprocal' }
    ]
  },
  // 316 — sachiko + hiroshi_elder, anniversary (long)
  {
    id: 'conv_00316',
    context: 'Sachiko and Hiroshi-elder mark their wedding anniversary — fifty-five years. They eat dinner alone, with quiet ceremony.',
    purpose: 'elder couple deep anniversary — fifty-five years of shared life',
    ambient: 'tatami_evening',
    sound_effects: [],
    target_vocab: ['結婚', '昔', '感謝', '一緒', '幸せ', '思い出'],
    cast: ['sachiko_grandma', 'hiroshi_elder'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_elder', jp: 'もう、五十五年か。', en: 'Already, fifty-five years.', style: 'Slow elder warm gentle weighted reflective deep-opening, the soft real real-deep-warmth audible, gentle real warmth throughout delivery.', mood: 'weightedly-deep' },
      { speaker: 'sachiko_grandma', jp: 'うん…早かったね。', en: 'Yes… it flew.', style: 'Soft grandmother warm soft tender-matching deep-reflective, the soft real real-deep-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'hiroshi_elder', jp: 'よく、ついて来てくれたな。', en: 'You really stayed with me.', style: 'Slow elder warm soft deep tender-gratitude, the soft real real-deep-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-grateful' },
      { speaker: 'sachiko_grandma', jp: 'こちらこそ。あなたが、私を見つけてくれたから。', en: 'Same. Because you found me.', style: 'Soft grandmother warm soft tender deep-reciprocal grateful, the soft real real-deep-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-reciprocal' },
      { speaker: 'hiroshi_elder', jp: '昔の写真、また見たい。', en: 'I want to look at old photos again.', style: 'Slow elder warm gentle soft tender-wanting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-wanting' },
      { speaker: 'sachiko_grandma', jp: 'うん、後で出すわ。アルバム、まだあるから。', en: 'Yes, I\'ll get them out later. The album\'s still here.', style: 'Soft grandmother warm soft tender accommodating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hiroshi_elder', jp: '若かった頃、私たち。', en: 'When we were young, us.', style: 'Slow elder warm gentle weighted tender-remembering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'weightedly-tender' },
      { speaker: 'sachiko_grandma', jp: 'あの頃、苦労した。けど、楽しかった。', en: 'Back then we struggled. But it was fun.', style: 'Soft grandmother warm soft balanced tender-recalling, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-balanced' },
      { speaker: 'hiroshi_elder', jp: '今は、幸せだな、心から。', en: 'Now, I\'m happy — from the heart.', style: 'Slow elder warm soft tender deep-disclosing-warm, the soft real real-deep-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-disclosing' },
      { speaker: 'sachiko_grandma', jp: '私も。これ以上、何も望まないわ。', en: 'Me too. I want nothing more than this.', style: 'Soft grandmother warm soft tender deep sincere-matching, the soft real real-deep-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-sincere' },
      { speaker: 'hiroshi_elder', jp: '感謝してる。本当に。', en: 'Grateful. Truly.', style: 'Slow elder warm soft tender deep brief-deep-disclosure, the soft real real-deep-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-brief' },
      { speaker: 'sachiko_grandma', jp: 'これからも、ゆっくり、二人で。', en: 'From now on too, slowly, the two of us.', style: 'Soft grandmother warm soft tender deep-extending future, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-extending' },
      { speaker: 'hiroshi_elder', jp: 'うん。一緒に、最後まで。', en: 'Yes. Together, to the end.', style: 'Slow elder warm soft tender deep weighted-closing, the soft real real-deep-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-weighted' }
    ]
  },
  // 317 — daichi + ren, young men (medium)
  {
    id: 'conv_00317',
    context: 'Daichi and Ren meet for the first time at the gym; Daichi knows Aoi works at the same café Ren goes to. Small introduction.',
    purpose: 'two young men first acquaintance — small recognition across café through girlfriend',
    ambient: 'gym_evening',
    sound_effects: [],
    target_vocab: ['初めて', '紹介', 'カフェ', '同じ', '面白い'],
    cast: ['daichi_kansai', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'あ、君、あおいちゃんのお店の常連やんな。', en: 'Oh, you\'re a regular at Aoi-chan\'s café, right?', style: 'Kansai warm bright casual recognition-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'brightly-casual' },
      { speaker: 'ren_uni', jp: 'え？あ、はい。れんっす。', en: 'Eh? Ah, yes. I\'m Ren.', style: 'University student warm casual surprised brief-introducing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'casually-surprised' },
      { speaker: 'daichi_kansai', jp: 'だいちです。あおいちゃんの友達でしてな。', en: 'I\'m Daichi. Aoi-chan\'s friend.', style: 'Kansai warm bright friendly self-introducing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'brightly-friendly' },
      { speaker: 'ren_uni', jp: 'おお、よろしくっす。同じジムで、面白いっすね。', en: 'Oh, nice to meet you. Same gym — interesting.', style: 'University student warm casual easygoing-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'easygoing-warm' },
      { speaker: 'daichi_kansai', jp: 'ほんま。世界、狭いわ。', en: 'Truly. The world is small.', style: 'Kansai warm bright laughing observational, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'brightly-laughing' },
      { speaker: 'ren_uni', jp: 'よく来てるんですか？', en: 'Do you come often?', style: 'University student warm casual curious genuine-asking, the soft real real-engagement audible, gentle real warmth throughout delivery.', mood: 'casually-curious' },
      { speaker: 'daichi_kansai', jp: '週三回くらい。続けると、楽になるで。', en: 'About three times a week. Once you continue, it gets easier.', style: 'Kansai warm bright casual encouraging-experienced, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'casually-encouraging' },
      { speaker: 'ren_uni', jp: '俺も頑張ろ。今度、一緒に練習しません？', en: 'I\'ll try too. Want to practice together sometime?', style: 'University student warm casual eager friendly-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'casually-eager' },
      { speaker: 'daichi_kansai', jp: 'ええで。連絡先、交換しよか。', en: 'Sure. Let\'s swap contact info.', style: 'Kansai warm bright easy generous-closing extending, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'easily-warm' }
    ]
  },
  // 318 — mrs_mori + yumiko, neighbor crisis (medium)
  {
    id: 'conv_00318',
    context: 'Mrs. Mori knocks at Yumiko\'s door urgently — she heard a strange sound and wants help looking.',
    purpose: 'small civic emergency — adult-to-adult quick helping response',
    ambient: 'apartment_lobby_morning',
    sound_effects: [],
    target_vocab: ['緊急', '音', '一緒', '確認', '心配'],
    cast: ['mrs_mori_neighbor', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: 'ゆみこさん、ちょっと、お願いがあって。', en: 'Yumiko-san, I have a small favor.', style: 'Neighbor warm careful urgent-controlled opening, the soft real real-anxiety audible, gentle real warmth throughout delivery.', mood: 'urgently-careful' },
      { speaker: 'yumiko_mom', jp: '森さん、どうしました？', en: 'Mori-san, what happened?', style: 'Maternal warm careful gentle concerned-receiving, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-concerned' },
      { speaker: 'mrs_mori_neighbor', jp: '隣の家から、変な音、するの。', en: 'From the next house — a strange sound.', style: 'Neighbor warm careful soft worried-sharing, the soft real real-concern audible, gentle real warmth throughout delivery.', mood: 'softly-worried' },
      { speaker: 'yumiko_mom', jp: '一緒に見に行きましょうか？', en: 'Shall we go look together?', style: 'Maternal warm gentle practical immediate-helping, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'practically-helping' },
      { speaker: 'mrs_mori_neighbor', jp: 'お願いできる？一人だと、心配で。', en: 'Could you? Alone, I\'m worried.', style: 'Neighbor warm soft gentle relieved-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-relieved' },
      { speaker: 'yumiko_mom', jp: 'もちろん。緊急なら、警察にも連絡しましょう。', en: 'Of course. If urgent, let\'s contact police.', style: 'Maternal warm gentle practical careful-thorough, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'practically-careful' },
      { speaker: 'mrs_mori_neighbor', jp: 'まずは、確認だけ。すぐ近くだから。', en: 'First, just confirming. It\'s right nearby.', style: 'Neighbor warm gentle softer-pulling-back careful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-softer' },
      { speaker: 'yumiko_mom', jp: 'はい、行きましょう。一緒なら、安心。', en: 'Yes, let\'s go. Together is reassuring.', style: 'Maternal warm gentle warm committed-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' }
    ]
  },
  // 319 — goro + tatsuya + ryosuke, 3 men (3-speaker, long)
  {
    id: 'conv_00319',
    context: 'Three men — Goro (Yumiko\'s father), Tatsuya (Ryosuke\'s brother-in-law) and Ryosuke (Yumiko\'s husband) — gather for a small family meal at the country house.',
    purpose: 'three-male family connection — quiet conversation between father, son-in-law, and brother-in-law',
    ambient: 'tatami_evening',
    sound_effects: [],
    target_vocab: ['家族', '時間', '一緒', '感謝', '健康', '将来'],
    cast: ['goro_grandpa', 'tatsuya_country', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'goro_grandpa', jp: '亮介、達也、両方来てくれて、嬉しいよ。', en: 'Ryosuke, Tatsuya, both of you coming — I\'m happy.', style: 'Slow grandpa warm gentle deeply-touched opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-touched' },
      { speaker: 'ryosuke_dad', jp: 'お父さん、こちらこそ。お元気そうで安心しました。', en: 'Father, same here. Glad you look well.', style: 'Father warm respectful sincere reciprocal-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'respectfully-warm' },
      { speaker: 'tatsuya_country', jp: 'おじさん、ご無沙汰してます。', en: 'Uncle, sorry for the long absence.', style: 'Country gruff warm formal-rural respectful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'goro_grandpa', jp: '達也の畑、評判いいって聞いてるよ。', en: 'Tatsuya\'s farm — I hear the reputation is good.', style: 'Slow grandpa warm gentle interested-proud sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-proud' },
      { speaker: 'tatsuya_country', jp: 'おかげさまで。亮介さんに紹介してもろたお陰や。', en: 'Thanks to you. Thanks to Ryosuke-san\'s introduction.', style: 'Country gruff warm humble redirecting-thanks, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'ryosuke_dad', jp: '達也さんの誠実さが、信頼に繋がってるんですよ。', en: 'It\'s Tatsuya\'s sincerity connecting to trust.', style: 'Father warm gentle generous-redirecting-warm sincere, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-redirecting' },
      { speaker: 'goro_grandpa', jp: 'こうやって、家族って繋がっていくんだな。', en: 'Like this, family keeps connecting.', style: 'Slow grandpa warm gentle wise philosophical-warm reflection, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'philosophically-warm' },
      { speaker: 'ryosuke_dad', jp: 'お父さんと、こんな風に飲める時間、本当に大切で。', en: 'Drinking with you, father — truly precious time.', style: 'Father warm sincere deep tender-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-tender' },
      { speaker: 'tatsuya_country', jp: '俺もそう思う。家族と過ごす時間、忘れたらアカン。', en: 'I think so too. Forgetting family time — no good.', style: 'Country gruff warm sincere principled matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-principled' },
      { speaker: 'goro_grandpa', jp: 'お母さんも、空から見てるかな。', en: 'Mother — looking from the sky too, maybe.', style: 'Slow grandpa warm soft tender-mourning gentle, the soft real real-deep-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-mourning' },
      { speaker: 'ryosuke_dad', jp: '見てると思います。きっと、喜んでます。', en: 'I think she is. Surely, happy.', style: 'Father warm soft tender belief-reassuring, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-believing' },
      { speaker: 'tatsuya_country', jp: 'お母さん、こういう集まり、好きやったんやで。', en: 'Mother loved gatherings like this.', style: 'Country gruff warm soft tender-recalling-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-recalling' },
      { speaker: 'goro_grandpa', jp: '将来も、こうやって、集まろうな。', en: 'In the future too, let\'s gather like this.', style: 'Slow grandpa warm gentle weighted-committing closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-committing' },
      { speaker: 'ryosuke_dad', jp: 'はい、絶対に。', en: 'Yes, definitely.', style: 'Father warm sincere brief committed-promising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'tatsuya_country', jp: '健康で、長生きしてください、おじさん。', en: 'Stay healthy, live long, uncle.', style: 'Country gruff warm sincere deep-extending closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-extending' }
    ]
  },
  // 320 — asuka + hina, classroom (short)
  {
    id: 'conv_00320',
    context: 'Asuka pulls Hina aside briefly to praise some specific work — Hina has been helping a quieter classmate.',
    purpose: 'teacher small private acknowledgment — recognition of social kindness',
    ambient: 'classroom_quiet',
    sound_effects: [],
    target_vocab: ['優しい', '友達', '助ける', '見てる', 'えらい'],
    cast: ['asuka_teacher', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'ひなさん、ちょっといい？', en: 'Hina-san, can I have a moment?', style: 'Teacher warm gentle careful private-tone opening, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'hina_child', jp: 'はい、先生。', en: 'Yes, sensei.', style: 'High child bright respectful careful gentle-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-receiving' },
      { speaker: 'asuka_teacher', jp: 'いつも、しょうくんを助けてくれてるね。', en: 'You\'re always helping Sho-kun.', style: 'Teacher warm gentle sincere specific-praising observational, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-specific' },
      { speaker: 'hina_child', jp: 'えへへ、しょうくん、静かだから。', en: 'Heehee, Sho-kun is quiet.', style: 'High child bright soft genuine humble-sharing, the soft real real-childish-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-humble' },
      { speaker: 'asuka_teacher', jp: '優しいの、先生ちゃんと見てるよ。えらい。', en: 'Kindness — I\'m watching properly. Good child.', style: 'Teacher warm gentle sincere deep-recognizing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-recognizing' },
      { speaker: 'hina_child', jp: 'ありがとう、先生！', en: 'Thank you, sensei!', style: 'High child bright sincere touched closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-touched' }
    ]
  },
  // 321 — kenji + naoko, museum 2 (medium)
  {
    id: 'conv_00321',
    context: 'Kenji and Naoko meet at the museum again — they\'ve started taking turns suggesting exhibits.',
    purpose: 'small evolving friendship around shared cultural interest',
    ambient: 'museum_afternoon',
    sound_effects: [],
    target_vocab: ['芸術', '感じる', '時間', '印象', '感想'],
    cast: ['kenji_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '今日の展示、紹介してくださって、ありがとうございました。', en: 'Today\'s exhibit — thank you for recommending it.', style: 'Salaryman warm formal sincere appreciative opener, the soft real real-respect audible, gentle real warmth throughout delivery.', mood: 'formally-grateful' },
      { speaker: 'naoko_aunt', jp: 'いえいえ。田中さんの感想、聞きたかったの。', en: 'No, no. I wanted to hear your impressions.', style: 'Aunt warm gentle generous-civil reciprocal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-civil' },
      { speaker: 'kenji_office', jp: 'あの長い絵、見てて、時間止まる感じで。', en: 'That long painting — felt time stop watching it.', style: 'Salaryman warm gentle thoughtful-genuine sharing-civil, the soft real real-engagement audible, gentle real warmth throughout delivery.', mood: 'thoughtfully-genuine' },
      { speaker: 'naoko_aunt', jp: 'わかります。あれ、本当に印象的でしたよね。', en: 'I understand. That was truly impressive.', style: 'Aunt warm gentle sincere matching-appreciation, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'kenji_office', jp: '芸術って、こう、心を動かす力があるんですね。', en: 'Art has this power to move the heart.', style: 'Salaryman warm gentle reflective sincere-articulating, the soft real real-engagement audible, gentle real warmth throughout delivery.', mood: 'reflectively-warm' },
      { speaker: 'naoko_aunt', jp: '田中さん、感じる力、強いですね。', en: 'Tanaka-san, you have a strong feeling sense.', style: 'Aunt warm gentle sincere observing-praise civil, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-observing' },
      { speaker: 'kenji_office', jp: 'いやいや、まだ全然。なおこさんに教わってばかりで。', en: 'No, no, not at all. I\'m only learning from you.', style: 'Salaryman warm gentle humble-redirecting laughing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-laughing' },
      { speaker: 'naoko_aunt', jp: '次は、私が田中さんから教わりたい。', en: 'Next, I\'d like to learn from you.', style: 'Aunt warm gentle warm reciprocal-offering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-reciprocal' }
    ]
  },
  // 322 — hiroshi_boss + ryosuke, talk over (medium)
  {
    id: 'conv_00322',
    context: 'Hiroshi-boss and his brother-in-law Ryosuke have a quiet talk at home about family burdens — the elder Hiroshi has been weakening.',
    purpose: 'two-adult family seriousness — coordinating around aging parent',
    ambient: 'tatami_evening',
    sound_effects: [],
    target_vocab: ['父', '体調', '心配', '一緒', '協力', '家族'],
    cast: ['hiroshi_boss', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '亮介、父さんのこと、ちょっと相談していい？', en: 'Ryosuke, can we talk about father a little?', style: 'Boss warm gentle authority-soft brother-in-law family opener, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'ryosuke_dad', jp: 'もちろん。何かありましたか？', en: 'Of course. Did something happen?', style: 'Father warm gentle careful family-receiving, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-receiving' },
      { speaker: 'hiroshi_boss', jp: '最近、体調、本当に心配で。', en: 'Lately, his health — truly worrying.', style: 'Boss warm soft authority-down brother family-honest, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-honest' },
      { speaker: 'ryosuke_dad', jp: 'ゆみこも、気にしてました。何か変わったこと？', en: 'Yumiko was worried too. Anything changed?', style: 'Father warm gentle thoughtful matching-care, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-thoughtful' },
      { speaker: 'hiroshi_boss', jp: '食欲も落ちて、寝る時間も増えてる。', en: 'Appetite dropped, sleep time increased.', style: 'Boss warm soft careful specific-honest family-report, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'carefully-honest' },
      { speaker: 'ryosuke_dad', jp: 'お医者さん、ちゃんと診てくれてますか。', en: 'Is the doctor checking properly?', style: 'Father warm gentle careful practical-asking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-practical' },
      { speaker: 'hiroshi_boss', jp: '斎藤先生に、定期的に。でも、年齢だから。', en: 'Dr. Saito regularly. But, it\'s the age.', style: 'Boss warm soft gentle accepting honest-balanced, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-balanced' },
      { speaker: 'ryosuke_dad', jp: '兄さんと、家族みんなで、協力していきましょう。', en: 'With you, all of us together — let\'s cooperate.', style: 'Father warm gentle sincere extending-warm family-committed, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-extending' },
      { speaker: 'hiroshi_boss', jp: 'ありがとう。本当に、心強い。', en: 'Thank you. Truly, reassuring.', style: 'Boss warm soft sincere deep-touched closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-touched' }
    ]
  },
  // 323 — sakura + saito, anxiety follow-up (long)
  {
    id: 'conv_00323',
    context: 'Sakura returns to Dr. Saito a few months after her first visit. Things are different.',
    purpose: 'long mental-health follow-up — patient growth reported and reinforced',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['不安', '改善', '習慣', '相談', '安心', '成長'],
    cast: ['saito_doctor', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'さくらさん、調子、どうですか。', en: 'Sakura-san, how are you?', style: 'Doctor warm professional gentle careful follow-up-care, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-careful' },
      { speaker: 'sakura_teen', jp: '前より、ずいぶん楽になりました。', en: 'Much easier than before.', style: 'Teen warm soft sincere bright-relieved sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'saito_doctor', jp: 'それは、何より。何が変わりましたか。', en: 'That\'s the best. What changed?', style: 'Doctor warm professional gentle pleased clarifying-care, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-pleased' },
      { speaker: 'sakura_teen', jp: 'お母さんに、話せるようになった。', en: 'I became able to talk to mom.', style: 'Teen warm soft sincere proud disclosure-warmth, the soft real real-growth audible, gentle real warmth throughout delivery.', mood: 'sincerely-proud' },
      { speaker: 'saito_doctor', jp: 'それは、大きな成長。よく頑張りました。', en: 'That\'s big growth. You did well.', style: 'Doctor warm gentle sincere praise-recognizing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-recognizing' },
      { speaker: 'sakura_teen', jp: '一人で抱えるって、本当に苦しかったんだなって。', en: 'Carrying alone — truly suffocating, I realized.', style: 'Teen warm soft sincere deep reflective-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-reflective' },
      { speaker: 'saito_doctor', jp: 'みんな、気付けない時期、あります。', en: 'Everyone has a period where they don\'t realize.', style: 'Doctor warm gentle wise normalizing-comforting, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-normalizing' },
      { speaker: 'sakura_teen', jp: 'メイさんとか、先生とか、話せる人ができて。', en: 'Mei-san, sensei — I gained people to talk with.', style: 'Teen warm soft sincere community-warm-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-community' },
      { speaker: 'saito_doctor', jp: 'それが、一番の薬です。本当に。', en: 'That is the best medicine. Truly.', style: 'Doctor warm gentle sincere weighted-wisdom-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-weighted' },
      { speaker: 'sakura_teen', jp: '生活の習慣も、整えてます。', en: 'I\'m arranging my daily habits too.', style: 'Teen warm soft sincere committed-reporting-warm, the soft real real-growth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'saito_doctor', jp: '具体的に、何か？', en: 'Specifically, what?', style: 'Doctor warm gentle careful professional-engaged-asking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-engaged' },
      { speaker: 'sakura_teen', jp: '早寝早起き、運動も少しずつ。', en: 'Early to bed, early to rise — exercise bit by bit.', style: 'Teen warm soft sincere proud-specific listing-warm, the soft real real-growth audible, gentle real warmth throughout delivery.', mood: 'sincerely-proud' },
      { speaker: 'saito_doctor', jp: '完璧。これからも、無理せず続けて。', en: 'Perfect. From now on too, without forcing — continue.', style: 'Doctor warm gentle sincere wise mentor-closing-care, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-mentoring' },
      { speaker: 'sakura_teen', jp: 'はい、ありがとうございます。安心しました。', en: 'Yes, thank you. I\'m reassured.', style: 'Teen warm soft sincere deep grateful-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

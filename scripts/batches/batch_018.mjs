import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_018)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 344 — kenji + hiroshi_boss, urgent task (medium)
  {
    id: 'conv_00344',
    context: 'A Monday morning. Hiroshi-boss has just gotten word of a client emergency; he pulls Kenji aside to handle it.',
    purpose: 'urgent workplace tasking — boss respecting capable subordinate',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['緊急', '対応', '客', '調整', '確認'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '田中、ちょっといいか。緊急で、対応頼みたい。', en: 'Tanaka, got a moment? Need you on an urgent matter.', style: 'Boss measured authority-soft urgent careful-direct opener, the soft real professional-respect audible, gentle real composure throughout delivery.', mood: 'urgently-direct' },
      { speaker: 'kenji_office', jp: 'はい、何でしょうか。', en: 'Yes, what is it?', style: 'Salaryman warm formal alert-receiving professional, the soft real real-focus audible, gentle real composure throughout delivery.', mood: 'alertly-formal' },
      { speaker: 'hiroshi_boss', jp: '中村商事から、納期について、急ぎの問い合わせ。', en: 'From Nakamura Trading — urgent inquiry about delivery date.', style: 'Boss measured warm professional clear-explaining urgent, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'professionally-urgent' },
      { speaker: 'kenji_office', jp: '了解しました。すぐ確認して、調整します。', en: 'Understood. I\'ll confirm immediately and adjust.', style: 'Salaryman warm formal sincere committed-professional, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'committedly-formal' },
      { speaker: 'hiroshi_boss', jp: '客側、納得できる説明を、ちゃんと用意してくれ。', en: 'Prepare a proper explanation the client can accept.', style: 'Boss measured warm firm professional-instructing careful, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'firmly-careful' },
      { speaker: 'kenji_office', jp: 'はい、お任せください。一時間以内に進捗報告します。', en: 'Yes, leave it to me. I\'ll report progress within an hour.', style: 'Salaryman warm formal confident professional-committing, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'confidently-committing' },
      { speaker: 'hiroshi_boss', jp: '助かる。佐藤さんにも、声かけといて。', en: 'Helpful. Let Sato-san know too.', style: 'Boss measured warm sincere brief practical-trusting closing, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'sincerely-trusting' },
      { speaker: 'kenji_office', jp: 'はい、すぐ伝えます。', en: 'Yes, I\'ll tell her immediately.', style: 'Salaryman warm formal brief sincere-committed action-closing, the soft real real-respect audible, gentle real composure throughout delivery.', mood: 'briefly-committed' }
    ]
  },
  // 345 — sakura + naoko, writing dream (long)
  {
    id: 'conv_00345',
    context: 'Sakura tells her aunt Naoko about her serious intention to become a writer. Naoko, who has lived more, gives careful honest counsel.',
    purpose: 'aunt-niece dream-counsel — older woman helping younger one believe and prepare',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['夢', '本気', '将来', '応援', '現実', '努力'],
    cast: ['naoko_aunt', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'ナオコちゃん、相談したいことがあって。', en: 'Naoko-chan, I want to consult about something.', style: 'Teen warm soft careful brave family-asking-warm opening, the soft real real-trust audible, gentle real warmth throughout delivery.', mood: 'carefully-brave' },
      { speaker: 'naoko_aunt', jp: 'うん、なに？', en: 'Yes, what?', style: 'Aunt warm gentle bright family-listening-receiving, the soft real real-attention audible, gentle real warmth throughout delivery.', mood: 'gently-listening' },
      { speaker: 'sakura_teen', jp: '私、本気で、作家になりたい。', en: 'I, seriously, want to be a writer.', style: 'Teen warm soft brave sincere deep-disclosure-warm, the soft real real-deep audible, gentle real warmth throughout delivery.', mood: 'bravely-deep' },
      { speaker: 'naoko_aunt', jp: '…そっか。ずっと考えてたんだね。', en: '…I see. You\'ve been thinking about it.', style: 'Aunt warm gentle careful sincere-receiving-warm respect, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-respecting' },
      { speaker: 'sakura_teen', jp: 'うん。でも、現実的じゃないかなって。', en: 'Yes. But, maybe not realistic.', style: 'Teen warm soft careful honest vulnerable-disclosure, the soft real real-worry audible, gentle real warmth throughout delivery.', mood: 'softly-vulnerable' },
      { speaker: 'naoko_aunt', jp: '夢、現実にしていく人もいるよ。簡単じゃないけど。', en: 'Some make dreams real. It\'s not easy though.', style: 'Aunt warm gentle balanced wise-honest reframing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'wisely-balanced' },
      { speaker: 'sakura_teen', jp: '何から始めればいいですか？', en: 'Where should I start?', style: 'Teen warm soft sincere practical-asking-warm, the soft real real-engagement audible, gentle real warmth throughout delivery.', mood: 'sincerely-asking' },
      { speaker: 'naoko_aunt', jp: 'まず、毎日書く。短くてもいいから、書く習慣を。', en: 'First, write every day. Even short — make a writing habit.', style: 'Aunt warm gentle specific wise-advising-practical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-specific' },
      { speaker: 'sakura_teen', jp: 'なるほど…書く習慣、なかった。', en: 'I see… didn\'t have a writing habit.', style: 'Teen warm soft sincere absorbing-realizing-warm, the soft real real-growth audible, gentle real warmth throughout delivery.', mood: 'sincerely-realizing' },
      { speaker: 'naoko_aunt', jp: 'あとね、本をたくさん読むこと。良い文章を、たくさん。', en: 'Also, read many books. Many good sentences.', style: 'Aunt warm gentle wise sincere-mentoring-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'wisely-warm' },
      { speaker: 'sakura_teen', jp: '読むのは、好きだから、続けます。', en: 'Reading — I love it, I\'ll continue.', style: 'Teen warm soft sincere committed-confident-warm, the soft real real-determination audible, gentle real warmth throughout delivery.', mood: 'confidently-warm' },
      { speaker: 'naoko_aunt', jp: 'もう一つ。失敗を、怖がらないで。', en: 'One more. Don\'t fear failure.', style: 'Aunt warm gentle firm wise-deep-warm advising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'firmly-wise' },
      { speaker: 'sakura_teen', jp: '失敗、苦手で…。', en: 'Failure — I\'m not good with it.', style: 'Teen warm soft honest vulnerable-real-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-honest' },
      { speaker: 'naoko_aunt', jp: '誰でもそう。でも、失敗の数が、力になる。', en: 'Everyone\'s like that. But the count of failures becomes strength.', style: 'Aunt warm gentle sincere deep-wise reframing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-wise' },
      { speaker: 'sakura_teen', jp: 'ナオコちゃん、本当にありがとう。応援、嬉しい。', en: 'Naoko-chan, truly thank you. Cheering means a lot.', style: 'Teen warm soft sincere deep grateful-tender-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: 'いつでも、相談に来てね。私も読みたい、さくらの本。', en: 'Come consult anytime. I want to read your book too.', style: 'Aunt warm gentle warm sincere closing-extending-believing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 346 — sho + yumiko, comforting (long)
  {
    id: 'conv_00346',
    context: 'Sho asks his mother about death after a pet bird passed away. Yumiko explains as honestly as she can to a six-year-old.',
    purpose: 'mother carefully explaining death to small child — quiet careful honesty',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['死ぬ', '悲しい', '大丈夫', '思い出', '一緒'],
    cast: ['yumiko_mom', 'sho_child'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'お母さん…ピーちゃん、死んじゃった。', en: 'Mom… Pii-chan died.', style: 'Tiny six-year-old soft small wet-voice grief-disclosure, the small real raw-distress audible, soft small warmth throughout delivery.', mood: 'wetly-grieving' },
      { speaker: 'yumiko_mom', jp: '…うん。お母さんも、すごく悲しい。', en: '…Yeah. Mom is very sad too.', style: 'Maternal warm soft tender deep-matching-grief warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-matching' },
      { speaker: 'sho_child', jp: 'なんで、死んじゃうの？', en: 'Why does it die?', style: 'Tiny six-year-old soft small vulnerable existential-asking, the small real raw-question audible, soft small warmth throughout delivery.', mood: 'vulnerably-asking' },
      { speaker: 'yumiko_mom', jp: '生きてるものは、みんな、いつか、お別れがあるの。', en: 'Living things — everyone, someday, has a farewell.', style: 'Maternal warm soft tender careful honest-explaining-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-honest' },
      { speaker: 'sho_child', jp: 'おばあちゃんも？お父さんも？', en: 'Grandma too? Dad too?', style: 'Tiny six-year-old soft small vulnerable widening-fear-asking, the small real raw-anxiety audible, soft small warmth throughout delivery.', mood: 'vulnerably-fearful' },
      { speaker: 'yumiko_mom', jp: '…うん。でも、まだまだ、ずっと先のこと。', en: '…Yes. But still, much later in time.', style: 'Maternal warm soft tender careful honest-then-reassuring-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-reassuring' },
      { speaker: 'sho_child', jp: 'ピーちゃん、どこ行くの？', en: 'Where does Pii-chan go?', style: 'Tiny six-year-old soft small vulnerable wondering-asking, the small real raw-curiosity audible, soft small warmth throughout delivery.', mood: 'vulnerably-wondering' },
      { speaker: 'yumiko_mom', jp: 'お空にね、お星様になって、ずっと見守ってくれる。', en: 'Into the sky, becomes a star, watches over forever.', style: 'Maternal warm soft tender gentle imaginative-comforting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-comforting' },
      { speaker: 'sho_child', jp: 'ほんと？', en: 'Really?', style: 'Tiny six-year-old soft small careful wanting-to-believe-fragile, the small real fragile-hope audible, soft small warmth throughout delivery.', mood: 'fragilely-hoping' },
      { speaker: 'yumiko_mom', jp: 'うん。だから、お空見たら、いつでもピーちゃん思い出せる。', en: 'Yes. So, when you look at the sky, you can always remember Pii-chan.', style: 'Maternal warm soft tender gentle deep-comforting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sho_child', jp: '…ピーちゃん、寂しくないかな。', en: '…Pii-chan, isn\'t she lonely?', style: 'Tiny six-year-old soft small tender worried-caring-disclosure, the small real raw-care audible, soft small warmth throughout delivery.', mood: 'tenderly-worried' },
      { speaker: 'yumiko_mom', jp: '寂しくないよ。しょうくんが思い出す度、ピーちゃん、笑ってる。', en: 'Not lonely. Each time you remember, Pii-chan smiles.', style: 'Maternal warm soft tender deep gentle-reassuring-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-reassuring' },
      { speaker: 'sho_child', jp: 'うん…。ずっと、覚えてる。', en: 'Yes… I\'ll remember forever.', style: 'Tiny six-year-old soft small sincere tender-committed-warm closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: 'うん。お母さんも、一緒に思い出すね。', en: 'Yes. Mom will remember together.', style: 'Maternal warm soft tender deep gentle-extending-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-extending' }
    ]
  },
  // 347 — daichi + tatsuya (medium)
  {
    id: 'conv_00347',
    context: 'Daichi and Tatsuya talk about expanding the produce supply to another restaurant.',
    purpose: 'business expansion conversation — country friend and Kansai broker planning growth',
    ambient: 'farm_porch_afternoon',
    sound_effects: [],
    target_vocab: ['拡大', '商品', '管理', '注文', '計画'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '達也さん、もう一店舗、紹介してもええ？', en: 'Tatsuya-san, can I introduce one more store?', style: 'Kansai warm bright careful business-pivoting-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'carefully-bright' },
      { speaker: 'tatsuya_country', jp: 'おう、何の店や。', en: 'Yeah, what kind of store?', style: 'Country gruff warm direct-curious business-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-curious' },
      { speaker: 'daichi_kansai', jp: 'ホテルの中のレストラン。注文の量、多いで。', en: 'A restaurant inside a hotel. Order volume — large.', style: 'Kansai warm bright specific careful-explaining-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'specifically-warm' },
      { speaker: 'tatsuya_country', jp: 'ふむ。量、管理できるかな。', en: 'Hmm. Can I manage the volume?', style: 'Country gruff warm thoughtful careful-considering-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'thoughtfully-careful' },
      { speaker: 'daichi_kansai', jp: '計画立てて、少しずつ拡大していけば、ええと思う。', en: 'If we plan and expand slowly, I think it\'ll work.', style: 'Kansai warm bright sincere strategic-warm proposing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-strategic' },
      { speaker: 'tatsuya_country', jp: 'うん、急がんことが、大事や。', en: 'Yes, not rushing — that\'s important.', style: 'Country gruff warm gentle wise-careful-warm reflection, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-wise' },
      { speaker: 'daichi_kansai', jp: '達也さんの商品、絶対、評判ええで。', en: 'Tatsuya-san\'s products — surely well received.', style: 'Kansai warm bright sincere encouraging-confident-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-confident' },
      { speaker: 'tatsuya_country', jp: 'おだてんでええで。けど、ありがとう。', en: 'No flattery needed. But thanks.', style: 'Country gruff warm gentle laughing-deflecting-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-warm' }
    ]
  },
  // 348 — riku + ren, post-exam (medium)
  {
    id: 'conv_00348',
    context: 'After Riku\'s entrance exam pass, Ren takes him out for ramen to celebrate.',
    purpose: 'cousin masculine celebration — older offering wisdom along with celebration',
    ambient: 'ramen_shop_evening',
    sound_effects: [],
    target_vocab: ['合格', '頑張る', '一緒', '将来', '楽しみ'],
    cast: ['ren_uni', 'riku_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'リク、合格、本当におめでとう！', en: 'Riku, on the pass — truly congrats!', style: 'University student warm bright sincere genuine celebrating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: 'ありがとう、れんお兄ちゃん。', en: 'Thanks, Ren-nii-chan.', style: 'Teen warm soft sincere brief warm-grateful-touched, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'お祝いだから、ラーメン、何でも頼んでいいぞ。', en: 'It\'s celebration — order anything you want.', style: 'University student warm bright generous casual-celebrating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'generously-bright' },
      { speaker: 'riku_teen', jp: 'マジ？じゃあ、特盛で。', en: 'For real? Then, extra-large.', style: 'Teen warm bright eager casual-claiming-warm, the soft real real-childish-young audible, gentle real warmth throughout delivery.', mood: 'eagerly-bright' },
      { speaker: 'ren_uni', jp: 'お、攻めるな。よし、注文しよう。', en: 'Oh, aggressive. Right, let\'s order.', style: 'University student warm bright teasing-warm casual-leading, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-teasing' },
      { speaker: 'riku_teen', jp: 'れんお兄ちゃんがいてくれて、ずっと心強かった。', en: 'Having you, Ren-nii-chan, was always reassuring.', style: 'Teen warm soft sincere deep grateful-disclosing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'いやいや、リクが頑張ったから。これからも、相談乗るから。', en: 'No, because you worked hard. From now on too, I\'ll listen.', style: 'University student warm gentle humble-redirecting then extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-extending' },
      { speaker: 'riku_teen', jp: '将来も、こうやって、飲もう。一緒に。', en: 'In the future too — let\'s drink like this. Together.', style: 'Teen warm soft sincere committed-warm closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'おう、絶対。楽しみにしてる。', en: 'Yeah, absolutely. Looking forward.', style: 'University student warm bright sincere committed-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 349 — mei + asuka, second meeting (short)
  {
    id: 'conv_00349',
    context: 'Mei and Asuka have started meeting for tea regularly. They\'re catching up on small things.',
    purpose: 'former-teacher / former-student adult friendship — small ongoing warmth',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['お茶', '最近', '元気', '話す', '楽しい'],
    cast: ['asuka_teacher', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'メイさん、また会えて嬉しい。', en: 'Mei-san, happy to see you again.', style: 'Teacher warm gentle sincere casual-warm reunion-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '先生、こちらこそ。最近どうですか？', en: 'Sensei, same here. How are you lately?', style: 'Romantic warm soft sincere reciprocal-warm gentle-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-asking' },
      { speaker: 'asuka_teacher', jp: '忙しいけど、お茶の時間が、すごい楽しみで。', en: 'Busy, but tea time is something I really look forward to.', style: 'Teacher warm gentle sincere honest-sharing-warm relaxed, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-relaxed' },
      { speaker: 'mei_romantic', jp: '私も。先生と話すと、落ち着く。', en: 'Me too. Talking with you, sensei, calms me.', style: 'Romantic warm soft sincere reciprocal-deep-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '不思議ね。生徒だった人と、こうやって話せるのって。', en: 'Strange — talking like this with a former student.', style: 'Teacher warm gentle reflective-warm wondering-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'reflectively-warm' },
      { speaker: 'mei_romantic', jp: '幸せなことだと、思います。', en: 'I think it\'s a happy thing.', style: 'Romantic warm soft sincere gentle-closing-warm appreciative, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-closing' }
    ]
  },
  // 350 — hiroshi_elder + sachiko (long)
  {
    id: 'conv_00350',
    context: 'A quiet afternoon. Hiroshi-elder is weaker now. Sachiko sits with him and they talk softly.',
    purpose: 'fading-elder couple — tender careful conversation',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['ありがとう', '一緒', '思い出', '幸せ', '感謝', '時間'],
    cast: ['hiroshi_elder', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'あなた、お茶、飲める？', en: 'Dear, can you drink some tea?', style: 'Soft grandmother warm soft careful tender-loving-asking-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-careful' },
      { speaker: 'hiroshi_elder', jp: 'うん、頂くよ。', en: 'Yes, I\'ll have some.', style: 'Slow elder warm soft tender gentle-accepting-warm brief, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sachiko_grandma', jp: '今日、ね、空がすごく青いの。', en: 'Today, you know, the sky is very blue.', style: 'Soft grandmother warm soft tender gentle-observation-sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-sharing' },
      { speaker: 'hiroshi_elder', jp: 'そうか…見たいな。', en: 'Is that so… I want to see.', style: 'Slow elder warm soft tender gentle-yearning-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-yearning' },
      { speaker: 'sachiko_grandma', jp: '窓、開けるね。風も気持ちいい。', en: 'I\'ll open the window. The wind feels nice too.', style: 'Soft grandmother warm soft tender gentle-care-action-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-caring' },
      { speaker: 'hiroshi_elder', jp: '…ああ、これは、いい風だ。', en: '…Ah, this is good wind.', style: 'Slow elder warm soft tender deep-appreciating-warm gentle-relief, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'deeply-appreciating' },
      { speaker: 'sachiko_grandma', jp: '若い時、よくこうやって、二人で空、見たわね。', en: 'When young, we often looked at the sky together.', style: 'Soft grandmother warm soft tender deep memory-sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-remembering' },
      { speaker: 'hiroshi_elder', jp: 'うん…思い出すよ。あの時、若かったな。', en: 'Yes… I remember. Back then, we were young.', style: 'Slow elder warm soft tender deep gentle-remembering-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-remembering' },
      { speaker: 'sachiko_grandma', jp: '一緒に居られて、本当に幸せだったわ。', en: 'Being together — truly was happy.', style: 'Soft grandmother warm soft tender deep sincere-disclosure-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_elder', jp: '…私も。さちこに、感謝しかない。', en: '…Me too. To Sachiko, only gratitude.', style: 'Slow elder warm soft tender deep brave-tender-disclosure-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-grateful' },
      { speaker: 'sachiko_grandma', jp: 'やめてよ、そういうの、寂しくなるから。', en: 'Stop — those things, they make me lonely.', style: 'Soft grandmother warm soft tender deep gentle-protesting-warm-emotional, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-protesting' },
      { speaker: 'hiroshi_elder', jp: '…ふっ、ごめんな。けど、ずっと、言いたかった。', en: '…Heh, sorry. But, I always wanted to say it.', style: 'Slow elder warm soft tender deep gentle-laughing-warm tender-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-laughing' },
      { speaker: 'sachiko_grandma', jp: '私も。ありがとう、あなた。', en: 'Me too. Thank you, dear.', style: 'Soft grandmother warm soft tender deep sincere-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_elder', jp: 'これからも、ゆっくり、一緒にな。', en: 'From now on too, slowly, together.', style: 'Slow elder warm soft tender deep gentle-closing-warm extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-extending' }
    ]
  },
  // 351 — yuki + aoi (medium)
  {
    id: 'conv_00351',
    context: 'Yuki and Aoi meet for coffee for the first time, through their mutual friend Mei.',
    purpose: 'two young women meeting through mutual friend',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['友達', '紹介', '同じ', '初めて', '楽しい'],
    cast: ['yuki_office', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '初めまして、ゆきです。メイから、いつもお話聞いてます。', en: 'Nice to meet you, I\'m Yuki. I always hear about you from Mei.', style: 'Office woman warm formal sincere bright-introducing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-formal' },
      { speaker: 'aoi_barista', jp: 'はじめまして、あおいです。私も、ゆきさんのお話、いっぱい聞いてます。', en: 'Nice to meet you, I\'m Aoi. I\'ve heard lots about you too, Yuki-san.', style: 'Soft dreamy barista warm gentle sincere bridging-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bridging' },
      { speaker: 'yuki_office', jp: 'メイ、共通の友達がいるって、ずっと嬉しそうで。', en: 'Mei was always happy about having a common friend.', style: 'Office woman warm bright sincere observational-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '本当に。私も同じこと感じてた。', en: 'Truly. I felt the same thing.', style: 'Soft dreamy barista warm soft sincere matching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-matching' },
      { speaker: 'yuki_office', jp: 'お仕事、カフェ、楽しいですか？', en: 'Café work — is it fun?', style: 'Office woman warm bright genuine curious-engaging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-curious' },
      { speaker: 'aoi_barista', jp: 'うん、すごく好き。人と話すのも、コーヒー作るのも。', en: 'Yes, I love it. Talking with people, making coffee.', style: 'Soft dreamy barista warm gentle sincere happy-sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '羨ましい。私の仕事、データばっかりで。', en: 'I\'m envious. My job — only data.', style: 'Office woman warm bright laughing self-deprecating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-laughing' },
      { speaker: 'aoi_barista', jp: 'ふふ、得意なこと、人それぞれですね。', en: 'Hehe, what we\'re good at differs.', style: 'Soft dreamy barista warm soft gentle laughing-warm wisdom, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-wise' },
      { speaker: 'yuki_office', jp: 'ほんとに。これから、よろしくお願いします。', en: 'Truly. From here on, please.', style: 'Office woman warm sincere bright closing-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 352 — saito + takeda (medium)
  {
    id: 'conv_00352',
    context: 'Dr. Saito calls Officer Takeda about a particular elderly community member who hasn\'t been answering.',
    purpose: 'two professionals coordinating concrete care for an elder',
    ambient: 'phone_call',
    sound_effects: [],
    target_vocab: ['連絡', '心配', '訪問', '確認', '無理'],
    cast: ['saito_doctor', 'takeda_officer'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'もしもし、武田さん？斎藤です。', en: 'Hello, Takeda-san? It\'s Saito.', style: 'Doctor warm professional brief phone-opening-warm careful, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-brief' },
      { speaker: 'takeda_officer', jp: 'はい、斎藤先生。どうされましたか？', en: 'Yes, Dr. Saito. What\'s up?', style: 'Officer warm professional alert-receiving-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'alertly-warm' },
      { speaker: 'saito_doctor', jp: '山田さん、ここ三日、電話に出なくて。', en: 'Yamada-san — hasn\'t answered for three days.', style: 'Doctor warm professional careful concerned-direct-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'carefully-concerned' },
      { speaker: 'takeda_officer', jp: 'そうですか。すぐ訪問、確認してきます。', en: 'I see. I\'ll visit and confirm immediately.', style: 'Officer warm professional immediate-committed-action-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'immediately-committed' },
      { speaker: 'saito_doctor', jp: '無理に押し入らないように。インターホンと、近所への確認だけで。', en: 'Don\'t force entry. Just intercom and neighbor check.', style: 'Doctor warm professional gentle careful-direction-warm specific, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'carefully-specific' },
      { speaker: 'takeda_officer', jp: '了解しました。何か分かったら、すぐ連絡します。', en: 'Understood. If anything, I\'ll contact immediately.', style: 'Officer warm professional formal-committed-promising-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'formally-committed' },
      { speaker: 'saito_doctor', jp: 'お願いします。心配で。', en: 'Please. I\'m worried.', style: 'Doctor warm gentle sincere closing-honest-warm vulnerable, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'takeda_officer', jp: 'お互い、見守っていきましょう。', en: 'Together, let\'s watch over.', style: 'Officer warm professional gentle generous-closing-warm-civic, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-civic' }
    ]
  },
  // 353 — hina + sho + sakura + ren, four young people (4-speaker, long)
  {
    id: 'conv_00353',
    context: 'A Sunday afternoon at home. The two kids and two older cousins are all at home together, baking something.',
    purpose: 'four-generation-of-young-people gathering — joyful cousin gathering',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '作る', '家族', '美味しい', '手伝う'],
    cast: ['hina_child', 'sho_child', 'sakura_teen', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'みんな、クッキー作るよ！', en: 'Everyone, we\'re making cookies!', style: 'Teen warm bright sincere energetic-leading-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-leading' },
      { speaker: 'hina_child', jp: 'やったー！ひな、混ぜる係！', en: 'Yay! Hina is the mixer!', style: 'High child bright eager enthusiastic-claiming-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ぼく…型抜き、する。', en: 'Me… I\'ll cut shapes.', style: 'Tiny six-year-old soft small careful gentle-claiming-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-claiming' },
      { speaker: 'ren_uni', jp: '俺、何やればいい？', en: 'What should I do?', style: 'University student warm easy casual joining-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'easily-joining' },
      { speaker: 'sakura_teen', jp: 'お兄ちゃんは、オーブン担当ね。', en: 'Big brother, you\'re the oven.', style: 'Teen warm bright gentle directing-warm assigning, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-directing' },
      { speaker: 'ren_uni', jp: '了解。重要任務だな。', en: 'Got it. An important job.', style: 'University student warm easy laughing teasing-warm-accepting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'laughingly-accepting' },
      { speaker: 'hina_child', jp: '混ぜる、混ぜる、楽しい！', en: 'Mix, mix, fun!', style: 'High child bright cheerful singing-warm-rhythmic, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'cheerfully-bright' },
      { speaker: 'sho_child', jp: '…これ、星の形にする。', en: '…I\'ll make this a star shape.', style: 'Tiny six-year-old soft small focused careful-disclosure-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-focused' },
      { speaker: 'sakura_teen', jp: 'いいね、しょうくん！丁寧。', en: 'Nice, Sho-kun! Careful.', style: 'Teen warm bright sincere praising-warm encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-praising' },
      { speaker: 'ren_uni', jp: 'オーブン、予熱完了。準備できたら教えて。', en: 'Oven preheated. Tell me when ready.', style: 'University student warm easy casual-reporting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'easily-reporting' },
      { speaker: 'hina_child', jp: '焼けるの、楽しみー！', en: 'Excited about baking!', style: 'High child bright eager anticipating-energetic-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'eagerly-bright' },
      { speaker: 'sho_child', jp: '…うん。美味しいかな。', en: '…Yeah. Wonder if it\'s tasty.', style: 'Tiny six-year-old soft small gentle wondering-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-wondering' },
      { speaker: 'sakura_teen', jp: '絶対美味しい。みんなで作ったんだから。', en: 'Definitely tasty. Because we made it together.', style: 'Teen warm bright sincere confident-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-confident' },
      { speaker: 'ren_uni', jp: 'こうやって四人で集まるの、たまにいいな。', en: 'Gathering as four like this, occasionally is good.', style: 'University student warm gentle reflective sincere-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'hina_child', jp: 'また皆で、何か作ろう！', en: 'Again everyone, let\'s make something!', style: 'High child bright eager sincere-extending-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 354 — naoko + mrs_mori (medium)
  {
    id: 'conv_00354',
    context: 'Naoko and Mrs. Mori work the community garden together. They\'re catching up.',
    purpose: 'small civic women adult talk — community ritual exchange',
    ambient: 'garden_afternoon',
    sound_effects: [],
    target_vocab: ['庭', '花', '育てる', '楽しい', '一緒'],
    cast: ['naoko_aunt', 'mrs_mori_neighbor'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: '森さん、今年も、花、よく育ってますね。', en: 'Mori-san, this year too, flowers — growing well.', style: 'Aunt warm gentle civil bright observation-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-observing' },
      { speaker: 'mrs_mori_neighbor', jp: 'うん、なおこさんに、教えてもらったから。', en: 'Yes, because you taught me, Naoko-san.', style: 'Neighbor warm gentle humble-redirecting-warm sincere, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'naoko_aunt', jp: 'いえいえ、森さんが、ちゃんと水やりしてくれてるから。', en: 'No, because you\'re properly watering them.', style: 'Aunt warm gentle generous-redirecting-warm reciprocal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'generously-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'こうやって、一緒に庭、続けられるのって、本当に幸せ。', en: 'Continuing the garden together — truly happy.', style: 'Neighbor warm gentle sincere deep reflective-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'naoko_aunt', jp: '私も。森さんと話す時間が、楽しみで。', en: 'Me too. Time talking with you, I look forward to.', style: 'Aunt warm gentle sincere matching-warm reciprocal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'mrs_mori_neighbor', jp: '来週、紫陽花の植え替え、一緒にどう？', en: 'Next week, hydrangea transplanting — together, how about?', style: 'Neighbor warm gentle careful sincere-suggesting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-suggesting' },
      { speaker: 'naoko_aunt', jp: 'ぜひ。楽しみに、しています。', en: 'Please. Looking forward.', style: 'Aunt warm gentle sincere bright closing-warm anticipating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mrs_mori_neighbor', jp: 'こういう小さな時間が、毎日を支えてくれてるわ。', en: 'Small times like these support every day.', style: 'Neighbor warm gentle sincere deep philosophical-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 355 — ryosuke + yumiko, deeper father talk (long)
  {
    id: 'conv_00355',
    context: 'Ryosuke and Yumiko sit up late after visiting Hiroshi-elder. They process together.',
    purpose: 'married couple processing aging parent — quiet deep mutual support',
    ambient: 'living_room_late_night',
    sound_effects: [],
    target_vocab: ['お父さん', '心配', '一緒', '気持ち', '大切', '感謝'],
    cast: ['ryosuke_dad', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ねえ、お父さん、今日、すごく弱ってた。', en: 'Hey, dad — today, seemed very weak.', style: 'Maternal warm soft tender careful-honest-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-honest' },
      { speaker: 'ryosuke_dad', jp: 'うん…俺も、感じた。', en: 'Yes… I felt it too.', style: 'Father warm soft tender deep-matching-warm acknowledgment, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-matching' },
      { speaker: 'yumiko_mom', jp: 'お父さん、私と話すの、すごく嬉しそうだった。', en: 'Dad seemed really happy talking with me.', style: 'Maternal warm soft sincere tender-observation-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sharing' },
      { speaker: 'ryosuke_dad', jp: '俺の手も、長く握ってくれてた。', en: 'He held my hand for a long time too.', style: 'Father warm soft tender deep-emotional disclosure-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: '心配で、今夜眠れないかも。', en: 'Worried — might not sleep tonight.', style: 'Maternal warm soft tender honest vulnerable-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-vulnerable' },
      { speaker: 'ryosuke_dad', jp: '一緒にいるから。眠れなくても、二人で、起きてようか。', en: 'I\'m with you. Even unable to sleep — let\'s be awake together.', style: 'Father warm soft tender deep sincere-supporting-warm offering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-supporting' },
      { speaker: 'yumiko_mom', jp: 'ありがとう…亮介と一緒で、本当に良かった。', en: 'Thank you… being with Ryosuke — truly good.', style: 'Maternal warm soft sincere deep tender-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。お父さん、ゆみこを大事に育ててくれた。', en: 'Same. Dad raised you with care.', style: 'Father warm soft tender sincere deep-reflective-warm gratitude, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-reflective' },
      { speaker: 'yumiko_mom', jp: '感謝、ちゃんと言えてるかな…。', en: 'I wonder if I\'m saying thanks properly…', style: 'Maternal warm soft tender vulnerable worried-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-worried' },
      { speaker: 'ryosuke_dad', jp: '言えてる。今日も、すごく素敵な時間、過ごせてた。', en: 'You are. Today too, you spent really lovely time.', style: 'Father warm soft tender sincere-reassuring-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-reassuring' },
      { speaker: 'yumiko_mom', jp: '気持ち、ちゃんと伝えていきたい。', en: 'I want to convey my feelings properly.', style: 'Maternal warm soft tender sincere-committing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-committing' },
      { speaker: 'ryosuke_dad', jp: 'うん。残された時間、大切にしよう。', en: 'Yes. The remaining time — let\'s cherish.', style: 'Father warm soft tender deep sincere-philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '亮介、本当に、ありがとう。', en: 'Ryosuke, truly, thank you.', style: 'Maternal warm soft tender sincere deep closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 356 — kenji + ryosuke (medium)
  {
    id: 'conv_00356',
    context: 'Kenji and Ryosuke have lunch together — Kenji is going through a career decision and seeks counsel.',
    purpose: 'younger career person seeking honest counsel from someone he respects',
    ambient: 'restaurant_lunch',
    sound_effects: [],
    target_vocab: ['仕事', '転職', '迷う', '正直', '助言'],
    cast: ['kenji_office', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '野田さん、ちょっと相談がありまして。', en: 'Noda-san, I have a consultation.', style: 'Salaryman warm formal sincere careful-asking-warm respect, the soft real real-respect audible, gentle real warmth throughout delivery.', mood: 'carefully-formal' },
      { speaker: 'ryosuke_dad', jp: 'うん、聞かせてください。', en: 'Yes, please tell me.', style: 'Father warm gentle generous family-civil-receiving-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-receiving' },
      { speaker: 'kenji_office', jp: '転職、考えてまして。', en: 'Considering changing jobs.', style: 'Salaryman warm soft sincere honest-vulnerable-disclosure-warm, the soft real real-respect audible, gentle real warmth throughout delivery.', mood: 'softly-vulnerable' },
      { speaker: 'ryosuke_dad', jp: 'ほう。何が、決め手になりそう？', en: 'Oh. What might be the deciding factor?', style: 'Father warm gentle careful real-engagement-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-engaging' },
      { speaker: 'kenji_office', jp: '今の会社、ありがたいけど、もう少し、自分を試したい。', en: 'Current company — grateful, but want to test myself more.', style: 'Salaryman warm soft sincere brave-honest-disclosure-warm, the soft real real-respect audible, gentle real warmth throughout delivery.', mood: 'bravely-honest' },
      { speaker: 'ryosuke_dad', jp: 'いい動機ですね。後悔しない選択をしてください。', en: 'A good motivation. Make a choice you won\'t regret.', style: 'Father warm gentle sincere wise-mentor-warm advising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: '正直、不安もあって…。', en: 'Honestly, also uneasy…', style: 'Salaryman warm soft sincere vulnerable-disclosure-warm, the soft real real-respect audible, gentle real warmth throughout delivery.', mood: 'softly-vulnerable' },
      { speaker: 'ryosuke_dad', jp: 'それは当然。不安があるからこそ、ちゃんと考えられる。', en: 'That\'s natural. Because there\'s unease, you can think properly.', style: 'Father warm gentle wise reframing-warm-encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'wisely-reframing' },
      { speaker: 'kenji_office', jp: 'ありがとうございます。助言、本当に助かります。', en: 'Thank you. The advice — truly helps.', style: 'Salaryman warm sincere deep grateful-closing-warm, the soft real real-respect audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 357 — daichi + asuka (short)
  {
    id: 'conv_00357',
    context: 'Daichi runs into Ms. Asuka on the way to his nephew\'s school for another formal meeting.',
    purpose: 'small repeat civil school encounter — Kansai casualness meeting Tokyo formality',
    ambient: 'school_gate_morning',
    sound_effects: [],
    target_vocab: ['先生', '甥', '今日', 'よろしく', '元気'],
    cast: ['daichi_kansai', 'asuka_teacher'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'あ、達也さん。お久しぶり。', en: 'Oh, Tatsuya-san. Long time.', style: 'Teacher warm bright recognition-warm civil opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'brightly-recognizing' },
      { speaker: 'daichi_kansai', jp: 'あすか先生、こんにちは。今日もよろしくお願いします。', en: 'Asuka-sensei, hello. Today too, please.', style: 'Kansai warm friendly casual respectful-warm opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'friendly-casual' },
      { speaker: 'asuka_teacher', jp: '甥っ子さん、最近、すごく明るくなりました。', en: 'Your nephew has become very bright lately.', style: 'Teacher warm gentle sincere positive-reporting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-positive' },
      { speaker: 'daichi_kansai', jp: 'ほんま？嬉しいわ。家でも、ちょっと変わって。', en: 'Truly? Happy. At home too, changed a bit.', style: 'Kansai warm bright touched sincere-warm sharing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'brightly-touched' },
      { speaker: 'asuka_teacher', jp: '達也さんが、ちゃんと家族で見てくれてるからですよ。', en: 'Because you, Tatsuya-san, properly watch the family.', style: 'Teacher warm gentle sincere generous-redirecting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'generously-warm' },
      { speaker: 'daichi_kansai', jp: 'こちらこそ。先生のお陰、感謝してます。', en: 'Same. Thanks to sensei.', style: 'Kansai warm friendly sincere closing-warm-grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 358 — tatsuya + ryosuke + kenji (3-speaker, long)
  {
    id: 'conv_00358',
    context: 'A second three-man dinner. They\'ve become close. Now Ryosuke shares about his father\'s decline.',
    purpose: 'three-male shared adult vulnerability — friendship deepening through real talk',
    ambient: 'izakaya_evening',
    sound_effects: [],
    target_vocab: ['父', '弱る', '心配', '一緒', '時間', '大切'],
    cast: ['tatsuya_country', 'ryosuke_dad', 'kenji_office'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '亮介さん、今日、なんか元気ないやろ。', en: 'Ryosuke-san — today, seem off.', style: 'Country gruff warm gentle observant-careful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-observant' },
      { speaker: 'ryosuke_dad', jp: '…分かる？ちょっと、父のことで。', en: '…You can tell? Things with my father.', style: 'Father warm soft tender brave-honest-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'bravely-honest' },
      { speaker: 'kenji_office', jp: 'お父さん、ご無事ですか？', en: 'Is your father safe?', style: 'Salaryman warm gentle careful concerned-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-concerned' },
      { speaker: 'ryosuke_dad', jp: '今、弱ってて。最近、長くないかもって、感じる。', en: 'Right now, weakened. Lately, I feel it may not be long.', style: 'Father warm soft tender deep vulnerable-honest-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-vulnerable' },
      { speaker: 'tatsuya_country', jp: 'そういう時こそ、家族、近くにおって。', en: 'Times like these — be close with family.', style: 'Country gruff warm gentle wise-care-warm advising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-wise' },
      { speaker: 'kenji_office', jp: '私で力になれること、何でも言ってください。', en: 'Anything I can do — please tell me.', style: 'Salaryman warm gentle sincere generous-extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'ryosuke_dad', jp: 'ありがとう、二人とも。話すだけで、楽になる。', en: 'Thank you, both. Just talking makes it lighter.', style: 'Father warm soft sincere deep grateful-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '男って、抱え込むからな。出して、ええんやで。', en: 'Men hold things in. Releasing — it\'s okay.', style: 'Country gruff warm gentle wise-philosophical-warm permitting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-permitting' },
      { speaker: 'kenji_office', jp: 'こうやって、話せる関係、本当にありがたいです。', en: 'Relations like this where we can talk — truly grateful.', style: 'Salaryman warm gentle sincere reflective-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'ryosuke_dad', jp: '本当に。お父さんのこと、最後まで、ちゃんと見守りたい。', en: 'Truly. About father — want to watch over to the end.', style: 'Father warm soft tender deep sincere-committing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-committing' },
      { speaker: 'tatsuya_country', jp: 'できるよ、亮介さんなら。', en: 'You can, Ryosuke-san.', style: 'Country gruff warm gentle sincere-believing-warm support, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-believing' },
      { speaker: 'kenji_office', jp: '私たち、後ろから、ちゃんと支えますから。', en: 'We, from behind, will properly support.', style: 'Salaryman warm gentle sincere committed-supporting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-supporting' },
      { speaker: 'ryosuke_dad', jp: '…ありがとう。本当に、心強い。', en: '…Thank you. Truly, reassuring.', style: 'Father warm soft tender deep sincere-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 359 — sho + saito, dental follow-up (short)
  {
    id: 'conv_00359',
    context: 'Sho comes for a dental follow-up. He\'s less scared now.',
    purpose: 'small medical follow-up — child gaining confidence with adult professional',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['歯', '大丈夫', '怖い', '上手', 'ありがとう'],
    cast: ['saito_doctor', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'しょうくん、今日も、よく来てくれた。', en: 'Sho-kun, glad you came today too.', style: 'Doctor warm professional gentle child-tuned-welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-welcoming' },
      { speaker: 'sho_child', jp: '…前ほど、怖くない。', en: '…Not as scared as before.', style: 'Tiny six-year-old soft small sincere brave-disclosure-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-brave' },
      { speaker: 'saito_doctor', jp: 'すごい、成長したね。', en: 'Wonderful — you\'ve grown.', style: 'Doctor warm gentle sincere praising-warm specific, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-praising' },
      { speaker: 'sho_child', jp: 'お母さんが、頑張れって言ってくれたから。', en: 'Because mom said do your best.', style: 'Tiny six-year-old soft small sincere humble-redirecting-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'saito_doctor', jp: '歯、ちゃんと磨けてるよ。今日、痛くしないから。', en: 'Teeth — brushed properly. Today won\'t hurt.', style: 'Doctor warm gentle professional reassuring-warm specific, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'sho_child', jp: 'ありがとう、先生。', en: 'Thank you, doctor.', style: 'Tiny six-year-old soft small sincere brave-closing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 360 — mei + sachiko (medium)
  {
    id: 'conv_00360',
    context: 'Mei visits Sachiko alone with a small gift; they have a warm conversation.',
    purpose: 'future-granddaughter and elder-grandmother slow warm familiarity',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['お元気', 'お土産', '美味しい', '一緒', '感謝'],
    cast: ['mei_romantic', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'お祖母様、こんにちは。お元気そうで。', en: 'Grandmother, hello. You look well.', style: 'Romantic warm formal soft sincere-warm respectful opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-warm' },
      { speaker: 'sachiko_grandma', jp: 'あらメイさん、わざわざ。', en: 'Oh Mei-san, going out of your way.', style: 'Soft grandmother warm gentle bright touched-welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-touched' },
      { speaker: 'mei_romantic', jp: 'これ、お土産、なんですけど。', en: 'This — a small gift.', style: 'Romantic warm soft careful formal-offering-warm gentle, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-formal' },
      { speaker: 'sachiko_grandma', jp: 'まあ、優しい人ね。お茶、淹れるわ。', en: 'My, what a kind person. I\'ll make tea.', style: 'Soft grandmother warm gentle touched-loving-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-touched' },
      { speaker: 'mei_romantic', jp: 'お祖母様の、お庭、本当に綺麗で。', en: 'Grandmother\'s garden — truly beautiful.', style: 'Romantic warm soft sincere gentle-appreciating-warm civil, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-appreciating' },
      { speaker: 'sachiko_grandma', jp: 'ありがとう。達也も、よくここで手伝ってくれて。', en: 'Thank you. Tatsuya often helps here too.', style: 'Soft grandmother warm gentle sincere warm-sharing family-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'うん、達也、お祖母様のこと、本当に大事にしてます。', en: 'Yes, Tatsuya truly cherishes you, grandmother.', style: 'Romantic warm soft sincere gentle-disclosing-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sincere' },
      { speaker: 'sachiko_grandma', jp: 'メイさんのこと、私も、本当に好きよ。', en: 'About Mei-san — I really like you too.', style: 'Soft grandmother warm soft sincere tender-deep-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sincere' }
    ]
  },
  // 361 — riku + hiroshi_boss (short)
  {
    id: 'conv_00361',
    context: 'At a family event, Riku is introduced to his uncle Hiroshi-boss, who knows his father Ryosuke well.',
    purpose: 'small teen meeting adult — respectful brief',
    ambient: 'family_event_evening',
    sound_effects: [],
    target_vocab: ['初めて', '大学', '頑張る', '父', 'よろしく'],
    cast: ['hiroshi_boss', 'riku_teen'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'リク、こちら、お兄さん。', en: 'Riku, this is my brother-in-law.', style: 'Father warm gentle bright family-introducing-warm — single line by father (omit, replace)', mood: 'warm' },
      { speaker: 'hiroshi_boss', jp: 'リクくんか、お父さんから話、よく聞いてるよ。', en: 'Riku-kun — I often hear about you from your dad.', style: 'Boss measured warm family-soft welcoming-warm to teen, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'familially-warm' },
      { speaker: 'riku_teen', jp: '初めまして。よろしくお願いします。', en: 'Nice to meet you. Please.', style: 'Teen warm formal sincere respectful-brief-warm introducing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-sincere' },
      { speaker: 'hiroshi_boss', jp: '大学合格、おめでとう。よく頑張った。', en: 'Congrats on university. Worked hard.', style: 'Boss measured warm sincere familial-praising-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'ありがとうございます。家族のお陰です。', en: 'Thank you. Thanks to family.', style: 'Teen warm soft sincere humble-grateful-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-grateful' },
      { speaker: 'hiroshi_boss', jp: 'これからも、頑張ってな。応援してる。', en: 'From here on, keep working hard. Cheering for you.', style: 'Boss measured warm gentle sincere closing-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-extending' }
    ]
  },
  // 362 — sachiko + yumiko + sho, three-gen elder memorial prep (3-speaker, long)
  {
    id: 'conv_00362',
    context: 'Sachiko, Yumiko, and Sho prepare a small home memorial corner for the late Hiroshi-elder\'s memory. The grandfather has passed.',
    purpose: 'three-generation memorial — careful gentle remembering across ages',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['思い出', '一緒', '写真', '優しい', '大切'],
    cast: ['sachiko_grandma', 'yumiko_mom', 'sho_child'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'ここに、おじいちゃんの写真、置こうかね。', en: 'Let\'s put grandpa\'s photo here.', style: 'Soft grandmother warm soft tender deep-careful gentle-leading-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-leading' },
      { speaker: 'yumiko_mom', jp: 'うん、そこがいい。お母さん、選んだ写真、これですか？', en: 'Yes, that\'s good. Mother, this is the photo you chose?', style: 'Maternal warm soft sincere gentle-confirming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-confirming' },
      { speaker: 'sachiko_grandma', jp: 'うん。あの人らしい、笑顔の写真がいいの。', en: 'Yes. A photo with his smile — that\'s him.', style: 'Soft grandmother warm soft tender deep gentle-sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sharing' },
      { speaker: 'sho_child', jp: 'おじいちゃん、笑ってるね。', en: 'Grandpa is smiling.', style: 'Tiny six-year-old soft small sincere gentle-observing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-observing' },
      { speaker: 'sachiko_grandma', jp: 'そう。おじいちゃん、いっつも笑ってたから。', en: 'Yes. Grandpa was always smiling.', style: 'Soft grandmother warm soft tender deep gentle-remembering-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-remembering' },
      { speaker: 'yumiko_mom', jp: 'お父さん、しょうとも、よく遊んでくれたよね。', en: 'Dad played with you a lot too, Sho.', style: 'Maternal warm soft tender sincere-warm sharing-memory, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sharing' },
      { speaker: 'sho_child', jp: 'うん…木のおもちゃ、作ってくれた。', en: 'Yes… he made wooden toys.', style: 'Tiny six-year-old soft small tender genuine-remembering-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-remembering' },
      { speaker: 'sachiko_grandma', jp: 'おじいちゃん、しょうのこと、大事に思ってたわ。', en: 'Grandpa thought of you, Sho, very dearly.', style: 'Soft grandmother warm soft tender deep sincere-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sho_child', jp: 'ぼくも、おじいちゃん、大好きだった。', en: 'I loved grandpa too.', style: 'Tiny six-year-old soft small sincere tender-disclosing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'yumiko_mom', jp: '思い出すたびに、お父さんと、ちゃんと話せるね。', en: 'Each time we remember, we can talk to dad properly.', style: 'Maternal warm soft tender sincere gentle-comforting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-comforting' },
      { speaker: 'sachiko_grandma', jp: 'うん。心の中で、ずっと一緒。', en: 'Yes. In the heart, always together.', style: 'Soft grandmother warm soft tender deep philosophical-comforting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-philosophical' },
      { speaker: 'sho_child', jp: 'おじいちゃん、お空、見てるかな。', en: 'Grandpa, looking from the sky?', style: 'Tiny six-year-old soft small wondering-tender-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-wondering' },
      { speaker: 'yumiko_mom', jp: '見てるよ。きっと、笑ってる。', en: 'He\'s watching. Surely, smiling.', style: 'Maternal warm soft tender sincere-comforting-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-sincere' },
      { speaker: 'sachiko_grandma', jp: 'みんな揃って、こうやって、思い出せるのが、一番嬉しい。', en: 'Everyone gathered, remembering like this — happiest.', style: 'Soft grandmother warm soft tender deep sincere closing-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 363 — aoi + ren (long)
  {
    id: 'conv_00363',
    context: 'Aoi and Ren have been together long enough. They have an evening conversation about future.',
    purpose: 'mid-relationship future-talk between young adults',
    ambient: 'apartment_evening',
    sound_effects: [],
    target_vocab: ['将来', '一緒', '気持ち', '正直', '幸せ', '考える'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'あおい、ちょっと、真面目な話ある？', en: 'Aoi, can we have a serious talk?', style: 'University student warm soft careful brave-asking-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'carefully-brave' },
      { speaker: 'aoi_barista', jp: 'うん、もちろん。どうした？', en: 'Yes, of course. What is it?', style: 'Soft dreamy barista warm gentle careful-receiving-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-receiving' },
      { speaker: 'ren_uni', jp: '俺、卒業したら、もうすぐ就職じゃん。', en: 'After I graduate, employment soon.', style: 'University student warm soft sincere casual-real-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-sincere' },
      { speaker: 'aoi_barista', jp: 'うん。何か、考えてる？', en: 'Yes. Thinking of something?', style: 'Soft dreamy barista warm gentle sincere-careful-warm receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'ren_uni', jp: '正直、あおいと、もっと一緒にいたい。', en: 'Honestly, want to be with you more.', style: 'University student warm soft sincere brave-deep-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'bravely-deep' },
      { speaker: 'aoi_barista', jp: '…私も、そう思ってた。', en: '…I was thinking that too.', style: 'Soft dreamy barista warm soft sincere matching-warm gentle, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-matching' },
      { speaker: 'ren_uni', jp: 'まだ、結婚とか、早いかもだけど。一緒に住むこと、考えてもいい？', en: 'Marriage might still be early. But — can I think about living together?', style: 'University student warm soft sincere careful-real-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'carefully-real' },
      { speaker: 'aoi_barista', jp: 'うん…考えたい。私も、本当はそう思ってた。', en: 'Yes… I want to. I was thinking that too.', style: 'Soft dreamy barista warm soft sincere gentle-warm-deep matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-deep' },
      { speaker: 'ren_uni', jp: 'マジか…めっちゃ嬉しい。', en: 'For real… super happy.', style: 'University student warm bright soft sincere touched-warm relieved, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-touched' },
      { speaker: 'aoi_barista', jp: 'ふふ、ゆっくり、いろいろ考えていこう。', en: 'Hehe, let\'s slowly, think about various things.', style: 'Soft dreamy barista warm soft gentle laughing-tender-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-laughing' },
      { speaker: 'ren_uni', jp: '気持ち、ちゃんと伝えられて、安心した。', en: 'Conveying feelings — I\'m relieved.', style: 'University student warm soft sincere relieved-deep-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-relieved' },
      { speaker: 'aoi_barista', jp: 'これからも、正直に、話そうね。', en: 'From now on too, let\'s talk honestly.', style: 'Soft dreamy barista warm soft gentle sincere committed-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-committing' },
      { speaker: 'ren_uni', jp: 'うん。あおいといると、本当に幸せ。', en: 'Yes. Being with Aoi — truly happy.', style: 'University student warm soft sincere deep tender-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: '私も。考えるの、楽しみ。', en: 'Me too. Thinking — I look forward to.', style: 'Soft dreamy barista warm soft sincere matching-warm closing-warm anticipating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-anticipating' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

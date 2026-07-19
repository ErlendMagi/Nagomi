import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_027)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 524 — mei + sachiko, prenatal (medium)
  {
    id: 'conv_00524',
    context: 'Mei visits Sachiko while pregnant; Sachiko gives prenatal advice from her own experience.',
    purpose: 'grandmother passing prenatal wisdom to granddaughter-in-law',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['妊娠', '体調', '無理', '安定', '感謝'],
    cast: ['mei_romantic', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'お祖母様、最近、つわりが、ちょっと、辛くて。', en: 'Grandmother, lately morning sickness — a bit hard.', style: 'Romantic warm soft tender careful-warm vulnerable-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-vulnerable' },
      { speaker: 'sachiko_grandma', jp: 'うん、皆、最初は、そうなのよ。安定すれば、楽になる。', en: 'Yes, everyone\'s like that at first. After stable, easier.', style: 'Soft grandmother warm soft tender sincere-warm normalizing-warm wisdom, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'mei_romantic', jp: 'お祖母様も、若い頃、こうだったんですか。', en: 'Grandmother, when young — same too?', style: 'Romantic warm soft sincere-warm asking-curious-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sachiko_grandma', jp: 'もちろん。三回、経験して、毎回、慣れなかった。', en: 'Of course. Three times, each time — couldn\'t get used.', style: 'Soft grandmother warm soft tender bright-warm laughing-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'mei_romantic', jp: 'なるほど…無理せず、ゆっくり、過ごしますね。', en: 'I see… without pushing, slowly — will spend.', style: 'Romantic warm soft sincere-warm absorbing-committed-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '達也にも、ちゃんと、頼ってね。お祖母ちゃんにも。', en: 'Rely on Daichi properly. And grandma.', style: 'Soft grandmother warm soft sincere-warm extending-warm care, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '本当に、感謝してます。皆さんに、見守られてて。', en: 'Truly grateful. Watched over by all.', style: 'Romantic warm soft sincere deep-warm closing-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 525 — daichi + kenji (medium)
  {
    id: 'conv_00525',
    context: 'Daichi and Kenji after work. Daichi reflects on impending fatherhood.',
    purpose: 'two working men talking about life beyond work',
    ambient: 'izakaya_evening',
    sound_effects: [],
    target_vocab: ['仕事', '家族', '父親', '責任', '感謝'],
    cast: ['daichi_kansai', 'kenji_office'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'だいちさん、お父さんになるんですね。改めて、おめでとう。', en: 'Daichi-san, becoming a father. Again, congrats.', style: 'Salaryman warm formal sincere-warm bright-warm celebrating-deep, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'daichi_kansai', jp: 'ありがとうございます。正直、責任、重く感じてます。', en: 'Thank you. Honestly — feel responsibility heavily.', style: 'Kansai warm soft sincere honest-warm vulnerable-disclosure, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'kenji_office', jp: 'うん、わかる。私も、なる時、同じだった。', en: 'Yes, I get it. When I became — same.', style: 'Salaryman warm gentle sincere-warm identifying-warm matching, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'けんじさんに、いろいろ、聞かせてもらえたら、嬉しい。', en: 'If I could ask Kenji-san various things — happy.', style: 'Kansai warm soft sincere-warm requesting-warm respectful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'もちろん。いつでも、頼ってください。', en: 'Of course. Rely on me anytime.', style: 'Salaryman warm gentle sincere-warm generous-warm extending, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'daichi_kansai', jp: '家族、ちゃんと、守っていきたい。', en: 'Family — want to protect properly.', style: 'Kansai warm soft sincere deep-warm tender-committing-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '達也さんなら、絶対、いい父親になりますよ。', en: 'Tatsuya-san — definitely, becomes a good father.', style: 'Salaryman warm gentle sincere-warm believing-warm closing-tender, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '本当に、感謝してます。', en: 'Truly, grateful.', style: 'Kansai warm soft sincere closing-warm grateful-brief, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 526 — sakura + ren (short)
  {
    id: 'conv_00526',
    context: 'Sakura visits Ren and Aoi for tea.',
    purpose: 'small adult-cousin ongoing visit',
    ambient: 'apartment_afternoon',
    sound_effects: [],
    target_vocab: ['家', '一緒', '楽しい', 'ありがとう', '元気'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'お邪魔します。今日も、ありがとう。', en: 'Excuse the intrusion. Thank you today.', style: 'Teen warm soft sincere bright-warm civil-visiting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'いらっしゃい。あおいは、出かけてるけど、お茶、しよ。', en: 'Welcome. Aoi\'s out, but let\'s have tea.', style: 'University student warm soft bright sincere-warm welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: '最近、お兄ちゃん、忙しい？', en: 'Lately, brother — busy?', style: 'Teen warm soft sincere casual-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、けど、家族の時間、ちゃんと作ってる。', en: 'Yes, but properly making family time.', style: 'University student warm soft sincere balanced-warm proud-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-balanced' },
      { speaker: 'sakura_teen', jp: 'すごい、大人。', en: 'Wow, adult.', style: 'Teen warm soft sincere admiring-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'ふふ、お互い、大人やな。', en: 'Hehe, both adults.', style: 'University student warm soft laughing sincere-warm closing-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'warmly-laughing' }
    ]
  },
  // 527 — riku + sho (short)
  {
    id: 'conv_00527',
    context: 'Riku now an adult with own work, visits Sho who is older.',
    purpose: 'small big-brother-cousin warm moment with growing kid',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['学校', '頑張る', '応援', '元気', 'ありがとう'],
    cast: ['riku_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'しょう、学校、楽しい？', en: 'Sho, school fun?', style: 'Teen warm soft sincere bright-warm cousin-casual asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'うん、ちゃんと、頑張ってる。', en: 'Yes, properly working hard.', style: 'Tiny six-year-old soft small sincere proud-warm growing-confident, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'riku_teen', jp: 'えらい。お兄ちゃん、応援してる。', en: 'Good. Brother is cheering.', style: 'Teen warm soft sincere-warm encouraging-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'リクお兄ちゃんに、応援されると、嬉しい。', en: 'Cheered by Riku-onii-chan — happy.', style: 'Tiny six-year-old soft small sincere tender-warm grateful-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'riku_teen', jp: 'ずっと、お兄ちゃん、ここにいるからな。', en: 'Always, brother is here.', style: 'Teen warm soft sincere deep-warm closing-tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sho_child', jp: '…ありがとう、お兄ちゃん。', en: '…Thank you, brother.', style: 'Tiny six-year-old soft small sincere tender-warm closing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 528 — aoi + naoko (medium)
  {
    id: 'conv_00528',
    context: 'Aoi visits Naoko to talk through her thoughts about possibly starting a family.',
    purpose: 'small adult-women adult-life consultation',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['将来', '相談', '感謝', '一緒', '考える'],
    cast: ['aoi_barista', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'ナオコさん、ちょっと、相談したくて。', en: 'Naoko-san, want to consult a bit.', style: 'Soft dreamy barista warm soft sincere brave-warm careful-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'naoko_aunt', jp: 'うん、もちろん。何かしら？', en: 'Yes, of course. What is it?', style: 'Aunt warm gentle bright sincere-warm welcoming-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'aoi_barista', jp: '私たちも、子供のこと、考え始めて。', en: 'We too — starting to think about children.', style: 'Soft dreamy barista warm soft tender brave-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-brave' },
      { speaker: 'naoko_aunt', jp: 'まあ、嬉しい。れんさんも、賛成？', en: 'Oh, happy. Ren-san agrees?', style: 'Aunt warm bright sincere-warm engaged-asking-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'はい、二人で、ゆっくり、考えてます。', en: 'Yes, two of us, slowly, thinking.', style: 'Soft dreamy barista warm soft sincere-warm bright-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '焦らず、お互いの気持ち、ちゃんと、確認しながら、ね。', en: 'Without rush, checking each other\'s feelings.', style: 'Aunt warm soft sincere wise-warm advising-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'aoi_barista', jp: '本当に、感謝してます。皆さんに、頼れて。', en: 'Truly grateful. Able to rely on all.', style: 'Soft dreamy barista warm soft sincere deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 529 — yumiko + sachiko + naoko (3-speaker, long)
  {
    id: 'conv_00529',
    context: 'Three women preparing baby clothes for Mei. Quiet collective excitement.',
    purpose: 'three-female collective preparation — anticipation',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '家族', '楽しみ', '準備', '感謝'],
    cast: ['sachiko_grandma', 'yumiko_mom', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: '皆で、赤ちゃんの服、用意するの、楽しいわね。', en: 'Preparing baby clothes together — fun.', style: 'Soft grandmother warm soft bright sincere-warm gathering-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '本当に。一着、一着、心を込めて。', en: 'Truly. Each item — with heart.', style: 'Maternal warm soft sincere-warm tender-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: 'メイ、絶対、喜ぶ。', en: 'Mei surely will be happy.', style: 'Aunt warm gentle sincere-warm bright-warm anticipating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sachiko_grandma', jp: '私が、ゆみこの時にも、こうやって、用意したのよ。', en: 'When Yumiko was born — prepared like this too.', style: 'Soft grandmother warm soft tender deep-warm memory-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: 'お母さん、いつも、ありがとう。お母さんのお陰で、私、生まれた。', en: 'Mother, always — thank you. Because of mother — I was born.', style: 'Maternal warm soft tender sincere-warm grateful-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'naoko_aunt', jp: 'お母さんの愛情、ずっと、家族、繋がってる。', en: 'Mother\'s love — family connecting forever.', style: 'Aunt warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'お祖父ちゃんも、絶対、見てくれてる。', en: 'Grandpa surely watching.', style: 'Soft grandmother warm soft tender sincere-warm comforting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'yumiko_mom', jp: 'お父さん、本当に、嬉しいでしょうね。', en: 'Father — surely happy.', style: 'Maternal warm soft tender sincere-warm matching-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'naoko_aunt', jp: 'メイの赤ちゃん、楽しみで、私、毎日、ワクワクしてる。', en: 'Mei\'s baby — daily, I\'m excited.', style: 'Aunt warm bright sincere-warm enthusiastic-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sachiko_grandma', jp: 'お祖母ちゃんも、毎日、楽しみ。', en: 'Grandma too — daily looking forward.', style: 'Soft grandmother warm soft bright sincere-warm matching-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '家族、皆で、赤ちゃんを、迎えてあげましょう。', en: 'Family — all together, welcome baby.', style: 'Maternal warm soft sincere closing-warm gathering-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '本当に、嬉しい。家族の、新しい、宝物。', en: 'Truly happy. Family\'s new treasure.', style: 'Aunt warm soft sincere deep-warm closing-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 530 — hina + asuka (short)
  {
    id: 'conv_00530',
    context: 'Hina shows Asuka her growing skills with words. Quick friendly moment.',
    purpose: 'small student-teacher ongoing growth recognition',
    ambient: 'classroom_after',
    sound_effects: [],
    target_vocab: ['頑張る', '言葉', '楽しい', '先生', 'ありがとう'],
    cast: ['asuka_teacher', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: '先生、新しい漢字、覚えました！', en: 'Sensei, learned new kanji!', style: 'High child bright sincere enthusiastic-warm reporting-proud, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'asuka_teacher', jp: 'え、すごい。見せて、見せて。', en: 'Eh, wonderful. Show me, show me.', style: 'Teacher warm gentle bright sincere-warm eager-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hina_child', jp: 'これ、書ける。「感謝」って書く。', en: 'This — can write. Write "kansha".', style: 'High child bright sincere proud-warm demonstrating, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-proud' },
      { speaker: 'asuka_teacher', jp: 'うわ、上手。ひなちゃん、本当に、頑張ってるね。', en: 'Wow, skilled. Hina-chan, truly working hard.', style: 'Teacher warm gentle bright sincere-warm praising-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hina_child', jp: '先生のお陰で、楽しい！', en: 'Thanks to sensei, fun!', style: 'High child bright sincere enthusiastic-warm closing-grateful, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。これからも、楽しんでね。', en: 'Same. Keep enjoying.', style: 'Teacher warm gentle sincere closing-warm extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 531 — kenji + saito (short)
  {
    id: 'conv_00531',
    context: 'Kenji visits Saito for an annual checkup.',
    purpose: 'small adult patient ongoing relationship',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['健康', '仕事', '体調', '注意', 'ありがとう'],
    cast: ['saito_doctor', 'kenji_office'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '田中さん、体調、特に問題ないですよ。', en: 'Tanaka-san, health — no particular issues.', style: 'Doctor warm professional gentle bright sincere-warm reporting, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'kenji_office', jp: 'ありがとうございます。仕事、相変わらず、忙しくて。', en: 'Thank you. Work — busy as ever.', style: 'Salaryman warm soft sincere honest-warm sharing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'お仕事は、無理しないこと。それが、一番。', en: 'Work — no overdoing. That\'s the best.', style: 'Doctor warm gentle wise sincere-warm advising-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-wise' },
      { speaker: 'kenji_office', jp: 'はい、気を付けます。', en: 'Yes, will be careful.', style: 'Salaryman warm formal sincere-warm committed-warm closing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'saito_doctor', jp: 'ご家族にも、よろしくね。', en: 'Regards to family too.', style: 'Doctor warm gentle sincere closing-warm extending-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 532 — ryosuke + tatsuya + daichi + ren (4-speaker, long)
  {
    id: 'conv_00532',
    context: 'Four men of the connected family share dinner. Adult conversation about life stages.',
    purpose: 'four-male family-friend dinner — adult life conversation',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '将来', '感謝', '友達', '幸せ'],
    cast: ['ryosuke_dad', 'tatsuya_country', 'daichi_kansai', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '皆さん、今夜は、ありがとうございます。', en: 'Everyone, thank you tonight.', style: 'Father warm gentle sincere-warm gathering-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ。皆、忙しいのに、集まってもろて。', en: 'Same. Even though everyone\'s busy, gathered.', style: 'Country gruff warm soft sincere-warm appreciating-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'こうやって、男四人で集まる時間、ほんま、貴重やな。', en: 'Gathering as four men like this — truly precious.', style: 'Kansai warm soft sincere reflective-warm philosophical-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'ren_uni', jp: '俺、ここに、こうやっていられること、本当に、感謝してます。', en: 'I — being here like this — truly grateful.', style: 'University student warm soft sincere deep-warm grateful-disclosing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'お互い、家族として、繋がっていけるのが、嬉しい。', en: 'As family, connecting like this — happy.', style: 'Father warm gentle sincere deep-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '達也とメイの赤ちゃん、皆で、ちゃんと迎えてあげような。', en: 'Daichi and Mei\'s baby — all, welcome properly.', style: 'Country gruff warm soft sincere committed-warm gathering-rallying-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'daichi_kansai', jp: '本当に、皆に支えてもろて、ありがとうございます。', en: 'Truly, supported by all — thank you.', style: 'Kansai warm soft sincere deep-warm grateful-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '俺たちも、いつか、ね。', en: 'We too, someday.', style: 'University student warm soft sincere tender-warm reflective-future, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'お互い、家族、ずっと、増えていくね。', en: 'Mutually, family — keeps growing.', style: 'Father warm soft sincere bright-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '田舎にも、皆で、ようけ来てな。', en: 'To country too — come lots, all of you.', style: 'Country gruff warm bright sincere-warm extending-warm generous, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '絶対、行きますわ。家族で。', en: 'Definitely, will go. With family.', style: 'Kansai warm bright sincere-warm committing-warm closing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: '俺も、あおいと、ぜひ。', en: 'Me too — with Aoi, please.', style: 'University student warm soft sincere closing-warm matching-warm committing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '皆で、幸せに、なっていきましょう。', en: 'All — let\'s become happy together.', style: 'Father warm soft sincere deep-warm closing-philosophical-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 533 — sakura + yumiko (medium)
  {
    id: 'conv_00533',
    context: 'Sakura visits Yumiko alone. Quiet adult talk about life and choices.',
    purpose: 'young woman with older aunt — adult conversation',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['仕事', '結婚', '将来', '感謝', '相談'],
    cast: ['sakura_teen', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'ゆみこおばさん、ちょっと、お話、いいですか。', en: 'Yumiko-obasan, can we talk a bit?', style: 'Teen warm soft sincere brave-warm respectful-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'yumiko_mom', jp: 'もちろん。座って、お茶でも、飲みましょう。', en: 'Of course. Sit, let\'s have tea.', style: 'Maternal warm gentle bright sincere-warm welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sakura_teen', jp: '実は、結婚のこと、考え始めてて。', en: 'Actually — starting to think about marriage.', style: 'Teen warm soft tender brave-warm vulnerable-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-brave' },
      { speaker: 'yumiko_mom', jp: 'え、お相手は？', en: 'Eh, with whom?', style: 'Maternal warm gentle sincere bright-warm engaged-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: '同じ学校の先生で、二年、付き合ってて。', en: 'Same school teacher — two years dating.', style: 'Teen warm soft sincere disclosure-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'まあ、お互いの仕事、共通点ね。素敵じゃない？', en: 'Oh, mutual work — common point. Lovely, isn\'t it?', style: 'Maternal warm gentle bright sincere-warm appreciative-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'ありがとう。皆さんに、ちゃんと、相談したくて。', en: 'Thank you. Want to consult all properly.', style: 'Teen warm soft sincere deep-warm grateful-respecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '家族で、ちゃんと、応援するからね。', en: 'As family — properly cheering.', style: 'Maternal warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 534 — sho + sakura, study (short)
  {
    id: 'conv_00534',
    context: 'Sho doing homework; Sakura helps casually.',
    purpose: 'small cousin study-help moment',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['宿題', '頑張る', '一緒', '楽しい', 'ありがとう'],
    cast: ['sakura_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'お姉ちゃん、ここ、わかんない。', en: 'Big sister, don\'t get here.', style: 'Tiny six-year-old soft small careful-warm asking-help, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-careful' },
      { speaker: 'sakura_teen', jp: '見せて。あ、ここはね、こう、考えるの。', en: 'Show me. Ah, here — think this way.', style: 'Teen warm soft sincere gentle-warm teaching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'なるほど…わかった。', en: 'I see… got it.', style: 'Tiny six-year-old soft small sincere realizing-warm grateful, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-realizing' },
      { speaker: 'sakura_teen', jp: 'えらい。一緒に頑張ろう。', en: 'Good. Let\'s work together.', style: 'Teen warm soft sincere praising-warm encouraging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'お姉ちゃんと一緒、楽しい。', en: 'With big sister — fun.', style: 'Tiny six-year-old soft small sincere tender-warm closing-disclosure, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sakura_teen', jp: 'ふふ、ありがとう。', en: 'Hehe, thank you.', style: 'Teen warm soft laughing sincere-warm closing-touched-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'warmly-laughing' }
    ]
  },
  // 535 — mei + asuka + naoko (3-speaker, medium)
  {
    id: 'conv_00535',
    context: 'Three women meet for tea — Mei pregnant, talking with two adult women friends.',
    purpose: 'three-female ongoing friendship — pregnancy support',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '楽しい', '感謝', '健康'],
    cast: ['mei_romantic', 'asuka_teacher', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: '皆さん、こんにちは。集まってもらって、ありがとう。', en: 'Everyone, hello. Thank you for gathering.', style: 'Romantic warm soft sincere bright-warm welcoming-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'メイちゃん、お元気そうで、嬉しい。', en: 'Mei-chan, glad you look well.', style: 'Teacher warm gentle bright sincere-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: 'メイ、最近、つわり、どう？', en: 'Mei, recently morning sickness — how?', style: 'Aunt warm gentle bright sincere-warm caring-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-caring' },
      { speaker: 'mei_romantic', jp: 'やっと、落ち着いてきた。皆さんの応援のお陰。', en: 'Finally settling. Thanks to everyone\'s support.', style: 'Romantic warm soft sincere relieved-warm grateful-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'よかった。何かあれば、いつでも、頼ってね。', en: 'Glad. If anything, rely anytime.', style: 'Teacher warm gentle sincere generous-warm extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'naoko_aunt', jp: '赤ちゃんが生まれたら、皆で、お世話していこうね。', en: 'When baby born — let\'s look after together.', style: 'Aunt warm soft sincere bright-warm collective-warm planning, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '本当に、皆さんに、感謝してます。', en: 'Truly grateful to all.', style: 'Romantic warm soft sincere deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 536 — hiroshi_boss + ryosuke (medium)
  {
    id: 'conv_00536',
    context: 'Hiroshi-boss, now retired, meets Ryosuke for catch-up over coffee.',
    purpose: 'former-boss / former-subordinate continuing friendship',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['仕事', '一緒', '感謝', '将来', '友達'],
    cast: ['hiroshi_boss', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '亮介さん、お時間ありがとう。退職後も、変わらずで嬉しい。', en: 'Ryosuke-san, thank you for time. Even after retirement — happy unchanged.', style: 'Boss measured warm soft sincere bright-warm grateful-warm opening, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。部長と、お話できるの、本当に貴重。', en: 'Same. Talking with boss — truly precious.', style: 'Father warm gentle sincere deep-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'もう部長じゃないですよ。田中で。', en: 'Already not boss. Just Tanaka.', style: 'Boss measured warm soft laughing humble-warm correcting-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'warmly-laughing' },
      { speaker: 'ryosuke_dad', jp: 'ふふ、わかりました、田中さん。', en: 'Hehe, understood, Tanaka-san.', style: 'Father warm gentle laughing sincere-warm matching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'warmly-laughing' },
      { speaker: 'hiroshi_boss', jp: '退職して、皆と、ご縁、続けられて、本当に幸せ。', en: 'Retired, with all — connection continues, truly happy.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm reflecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。家族みたいで、本当に。', en: 'Same. Truly, like family.', style: 'Father warm soft sincere deep-warm closing-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'これからも、ずっと、よろしく。', en: 'From now on too — please.', style: 'Boss measured warm soft sincere closing-warm extending-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 537 — daichi + yumiko (short)
  {
    id: 'conv_00537',
    context: 'Daichi visits Yumiko briefly to ask about her experience as a new parent.',
    purpose: 'small adult-male asking older-woman for parenting wisdom',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['子供', '父親', '助言', '感謝', 'ありがとう'],
    cast: ['daichi_kansai', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'ゆみこさん、ちょっと、教えてもらいたいことがあって。', en: 'Yumiko-san, want to ask something.', style: 'Kansai warm soft sincere brave-warm respectful-asking, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'yumiko_mom', jp: 'もちろん、何でも、聞いて。', en: 'Of course, ask anything.', style: 'Maternal warm gentle bright sincere-warm generous-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '初めての父親って、何が、一番、大事ですか？', en: 'First-time father — what\'s most important?', style: 'Kansai warm soft sincere honest-warm direct-asking, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'yumiko_mom', jp: 'メイさんの話を、ちゃんと、聞くこと。それだけ。', en: 'Listening to Mei-san properly. Just that.', style: 'Maternal warm gentle sincere wise-warm simple-warm advising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'daichi_kansai', jp: 'なるほど…シンプルやけど、深いですね。', en: 'I see… simple but deep.', style: 'Kansai warm soft sincere thoughtful-warm closing-appreciating, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'お互いを、ちゃんと、思いやれば、大丈夫。', en: 'Cherishing each other properly — fine.', style: 'Maternal warm soft sincere closing-warm wise-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 538 — saito + ren + aoi (3-speaker, short)
  {
    id: 'conv_00538',
    context: 'Ren and Aoi visit Dr. Saito briefly together for a consultation.',
    purpose: 'small couple-doctor brief consultation',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '相談', '安心', 'ありがとう'],
    cast: ['saito_doctor', 'aoi_barista', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: '先生、お時間、ありがとうございます。', en: 'Doctor, thank you for the time.', style: 'Soft dreamy barista warm soft formal sincere-warm civil-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'お二人で来てくれて、嬉しい。', en: 'Glad both came together.', style: 'Doctor warm professional gentle sincere-warm bright-welcoming, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'ren_uni', jp: '家族のこと、考え始めてて、相談したくて。', en: 'Thinking about family — want to consult.', style: 'University student warm soft sincere careful-warm respectful-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'saito_doctor', jp: 'お二人とも、健康ですよ。ご相談、何でも、聞きます。', en: 'Both — healthy. Consult, will hear anything.', style: 'Doctor warm professional gentle sincere-warm reassuring-warm extending, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '安心しました。ありがとうございます。', en: 'Relieved. Thank you.', style: 'Soft dreamy barista warm soft sincere closing-warm grateful-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 539 — riku + asuka (long)
  {
    id: 'conv_00539',
    context: 'Riku, now firmly adult, has tea with Asuka — they meet rarely now.',
    purpose: 'mentor-student relationship across years — closing arc',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['先生', '感謝', '頑張る', '将来', '一緒', '思い出'],
    cast: ['asuka_teacher', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'あすか先生、お久しぶり。', en: 'Asuka-sensei, long time.', style: 'Teen warm soft sincere formal-warm respectful-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'asuka_teacher', jp: 'リクさん！立派になって。お仕事、どう？', en: 'Riku-san! Become splendid. How\'s work?', style: 'Teacher warm bright sincere overwhelmed-warm welcoming-curious, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: 'おかげさまで、楽しいです。仲間にも、恵まれて。', en: 'Thanks to all — fun. Blessed with companions.', style: 'Teen warm soft sincere bright-warm appreciating-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: '結婚もして、いろいろ、変わりましたね。', en: 'Married too — many changes.', style: 'Teacher warm gentle sincere-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'はい。一人じゃ、できなかったこと、結婚して、できるようになりました。', en: 'Yes. What I couldn\'t alone — possible after marriage.', style: 'Teen warm soft sincere deep-warm reflective-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '素敵な変化。私も、嬉しい。', en: 'Lovely change. I\'m happy too.', style: 'Teacher warm gentle sincere bright-warm appreciating-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: '先生のお陰で、今、あります。本当に、感謝してます。', en: 'Thanks to sensei — I\'m here now. Truly grateful.', style: 'Teen warm soft sincere deep-warm grateful-redirecting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'リクさんが、自分で、頑張ってきたから。', en: 'Because you yourself worked hard.', style: 'Teacher warm gentle sincere-warm humble-redirecting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-humble' },
      { speaker: 'riku_teen', jp: 'いえ、本当に、子供の頃から、先生に、見守ってもらえたから。', en: 'No, truly — since childhood, watched over by sensei.', style: 'Teen warm soft sincere deep-warm grateful-acknowledging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こうやって、今でも、お話できるの、嬉しい。', en: 'Talking like this even now — happy.', style: 'Teacher warm gentle sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'riku_teen', jp: 'これからも、ずっと、よろしくお願いします。', en: 'From now on too — please.', style: 'Teen warm soft sincere closing-warm extending-warm respectful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。応援、ずっと、続けます。', en: 'Same. Cheering — will continue forever.', style: 'Teacher warm soft sincere deep-warm closing-extending-blessing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 540 — naoko + yumiko (medium)
  {
    id: 'conv_00540',
    context: 'Naoko and Yumiko (sisters-in-law) sit quietly together. The shared widow-mother care continues.',
    purpose: 'small adult sister-in-law continuing connection — caring for elder',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['母', '一緒', '健康', '感謝', '家族'],
    cast: ['naoko_aunt', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'ゆみこちゃん、お母さん、最近、お元気ですか。', en: 'Yumiko-chan, mother — well lately?', style: 'Aunt warm gentle sincere-warm family-careful-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-careful' },
      { speaker: 'yumiko_mom', jp: 'お陰様で、元気そう。なおこさんが、頻繁に来てくれるから。', en: 'Thanks to all — looks well. Because Naoko-san comes often.', style: 'Maternal warm soft sincere-warm grateful-acknowledging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'お互い、家族として、ちゃんと、見守れて、嬉しい。', en: 'As family — watching properly — happy.', style: 'Aunt warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '本当に。お母さん、絶対、嬉しいって、思ってる。', en: 'Truly. Mother — definitely thinks happy.', style: 'Maternal warm soft sincere-warm tender-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'これからも、皆で、ちゃんと、ね。', en: 'From now on too — all properly.', style: 'Aunt warm soft sincere closing-warm extending-warm gentle, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'うん、感謝してる、なおこさん、いてくれて。', en: 'Yes, grateful — for you being here.', style: 'Maternal warm soft sincere deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 541 — sho + mrs_mori (short)
  {
    id: 'conv_00541',
    context: 'Sho helps Mrs. Mori with groceries again. He\'s grown into a polite young man.',
    purpose: 'small child-elder neighbor ongoing kindness',
    ambient: 'street_afternoon',
    sound_effects: [],
    target_vocab: ['優しい', '近所', '一緒', 'ありがとう', '元気'],
    cast: ['mrs_mori_neighbor', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: '森のおばあちゃん、お荷物、持ちます。', en: 'Mori-grandma, I\'ll carry the bag.', style: 'Tiny six-year-old soft small sincere polite-warm offering-grown, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'しょうくん、いつも、本当に、優しい。', en: 'Sho-kun — always, truly, kind.', style: 'Neighbor warm gentle sincere deep-warm touched-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sho_child', jp: '近所のおばあちゃんですから。', en: 'Because neighborhood grandma.', style: 'Tiny six-year-old soft small sincere proud-warm civic-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'お母さんによろしくね。本当にありがとう。', en: 'Regards to mother. Truly thank you.', style: 'Neighbor warm gentle sincere closing-warm civic-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'はい、伝えます。お元気で。', en: 'Yes, will tell. Stay well.', style: 'Tiny six-year-old soft small sincere closing-warm tender-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 542 — kenji + yuki + ryosuke + daichi (4-speaker, long)
  {
    id: 'conv_00542',
    context: 'Four colleagues — workplace family that lasted — meet for an evening. Daichi shares baby news.',
    purpose: 'four-male-and-female workplace deep friendship — adult life milestones',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['仕事', '家族', '一緒', '感謝', '将来', '楽しい'],
    cast: ['kenji_office', 'yuki_office', 'ryosuke_dad', 'daichi_kansai'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '皆さん、改めて、ご報告。メイちゃん、妊娠したんです。', en: 'Everyone, again — report. Mei-chan pregnant.', style: 'Kansai warm soft tender sincere bright-warm announcing-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: 'おめでとう、本当に。私たちの方も、嬉しい。', en: 'Congrats, truly. We too — happy.', style: 'Salaryman warm formal sincere overwhelmed-warm celebrating-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'yuki_office', jp: 'うわー、すごい！おめでとう、達也さん、メイさんに、よろしく。', en: 'Wow, wonderful! Congrats, regards to Tatsuya, Mei-san.', style: 'Office woman warm bright sincere overwhelmed-warm celebrating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'ryosuke_dad', jp: '達也さん、本当に、おめでとう。よかった。', en: 'Tatsuya-san, truly congratulations. Glad.', style: 'Father warm soft sincere deep-warm celebrating-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '皆さんに、報告できて、嬉しい。家族みたいな存在やから。', en: 'Glad I could tell all. Like family.', style: 'Kansai warm soft sincere deep-warm grateful-philosophical-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '本当に、家族ですよ、私たちも。', en: 'Truly family, us too.', style: 'Salaryman warm soft sincere deep-warm matching-philosophical-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '赤ちゃんに、皆で、お祝い、送りましょう。', en: 'To baby — let\'s all send celebration.', style: 'Office woman warm bright sincere committed-warm planning-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: 'こうやって、皆さんで、人生の節目、祝えるのが、本当に嬉しい。', en: 'Celebrating life milestones with all like this — truly happy.', style: 'Father warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '皆さん、感謝、本当に、感謝してます。', en: 'Everyone — gratitude, truly grateful.', style: 'Kansai warm soft sincere deep-warm closing-grateful-overwhelmed, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ。これからも、ずっと、ね。', en: 'Same. From now on too, always.', style: 'Salaryman warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '部長にも、伝えましょう。きっと、すごく、嬉しがる。', en: 'Tell boss too. Surely — very happy.', style: 'Office woman warm gentle sincere bright-warm extending-warm anticipating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: '乾杯しましょう。達也さんと、メイさんの、将来に。', en: 'Let\'s cheers. To Tatsuya-san and Mei-san\'s future.', style: 'Father warm soft sincere closing-warm rallying-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '乾杯！皆さんに、感謝を込めて。', en: 'Cheers! With gratitude to all.', style: 'Kansai warm bright sincere closing-warm celebrating-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 543 — sachiko + mei + hina (3-speaker, long)
  {
    id: 'conv_00543',
    context: 'Pregnant Mei spends a quiet afternoon with Sachiko and Hina at the family home.',
    purpose: 'three-generation female anticipating new baby',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '家族', '一緒', '楽しみ', '優しい', '感謝'],
    cast: ['sachiko_grandma', 'mei_romantic', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'メイお姉さん、お腹、ちょっと、大きくなってる！', en: 'Mei-onee-san, belly — getting bigger!', style: 'High child bright sincere wonderingly-curious-warm observing, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'ふふ、本当に。赤ちゃん、ちゃんと、育ってる。', en: 'Hehe, truly. Baby — growing properly.', style: 'Romantic warm soft tender bright-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'sachiko_grandma', jp: 'ひな、お祖母ちゃんになった気分？', en: 'Hina, feeling like a big sister?', style: 'Soft grandmother warm gentle bright sincere-warm tender-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'hina_child', jp: 'お姉さん、になる！', en: 'Becoming big sister!', style: 'High child bright sincere proud-warm declaring-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-proud' },
      { speaker: 'mei_romantic', jp: 'ひなが、お姉さんとして、ちゃんと、教えてあげてね。', en: 'Hina — as big sister, please teach properly.', style: 'Romantic warm soft tender sincere-warm gentle-extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'うん！ひな、ちゃんと、お姉さん、する！', en: 'Yes! Hina — will be proper big sister!', style: 'High child bright sincere committed-warm enthusiastic-promising, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-committed' },
      { speaker: 'sachiko_grandma', jp: 'ひなが、しょうにしてきたみたいに、ね。', en: 'Like Hina has done for Sho.', style: 'Soft grandmother warm soft sincere bright-warm tender-acknowledging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'ひなが、本当に、優しいお姉さんになる、と思う。', en: 'Hina — truly becomes kind big sister, I think.', style: 'Romantic warm soft tender sincere-warm believing-warm encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: '赤ちゃん、楽しみ！', en: 'Baby — looking forward!', style: 'High child bright sincere enthusiastic-warm celebrating-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: 'こうやって、家族が、ずっと、繋がっていくのが、本当に幸せ。', en: 'Family connecting like this — truly happy.', style: 'Soft grandmother warm soft sincere deep-warm closing-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: 'お祖父様にも、絶対、見せたい。', en: 'Want to show grandpa too — surely.', style: 'Romantic warm soft tender sincere-warm philosophical-warm wishing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: 'お祖父ちゃん、絶対、見てる。皆で、家族として、感謝、ね。', en: 'Grandpa — surely watching. As family — gratitude.', style: 'Soft grandmother warm soft tender sincere deep-warm closing-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

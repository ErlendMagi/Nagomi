import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_033)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 644 — kenji + ryosuke, news discussion (medium)
  {
    id: 'conv_00644',
    context: 'Kenji and Ryosuke discuss recent political news over lunch.',
    purpose: 'two-adult-men civic news discussion',
    ambient: 'restaurant_lunch',
    sound_effects: [],
    target_vocab: ['政治', '選挙', '記事', '意見', '相談'],
    cast: ['kenji_office', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '亮介さん、今朝の、選挙のニュース、見ましたか。', en: 'Ryosuke-san, this morning\'s election news — saw?', style: 'Salaryman warm formal sincere-warm engaged-asking, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、見ました。今回の議員、若い人が、多いですね。', en: 'Yes, saw. This election\'s members — many young.', style: 'Father warm gentle sincere-warm engaging-thoughtful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'kenji_office', jp: '新しい風、感じますね。政治、変わっていくのかも。', en: 'New wind — feel. Politics — maybe changing.', style: 'Salaryman warm gentle sincere-warm philosophical-warm observing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '与党と野党のバランス、これから、どうなるか。', en: 'Ruling and opposition balance — how going forward.', style: 'Father warm gentle sincere-warm wondering-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-philosophical' },
      { speaker: 'kenji_office', jp: 'うちの業界にも、影響、あるかもしれない。', en: 'Our industry too — may affect.', style: 'Salaryman warm gentle sincere-warm practical-concerned, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '冷静に、見ていきましょう。皆さんと、相談しながら。', en: 'Watch calmly. Consulting with all.', style: 'Father warm gentle sincere-warm wise-warm collaborative-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: '亮介さんの、意見、本当に、参考になります。', en: 'Ryosuke-san\'s opinion — truly educational.', style: 'Salaryman warm soft sincere closing-warm appreciating-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 645 — sho + yumiko, animal book (short)
  {
    id: 'conv_00645',
    context: 'Sho reads an animal picture book with Yumiko before bedtime.',
    purpose: 'small mother-child reading at bedtime',
    ambient: 'bedroom_evening',
    sound_effects: [],
    target_vocab: ['本', '動物', '一緒', '楽しい', '面白い'],
    cast: ['yumiko_mom', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'お母さん、この本、面白い。象って、すごく大きい。', en: 'Mom, this book — interesting. Elephant — really big.', style: 'Tiny six-year-old soft small sincere bright-warm sharing-curious, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-bright' },
      { speaker: 'yumiko_mom', jp: '本当ね。象、すごい動物。', en: 'Truly. Elephant — amazing animal.', style: 'Maternal warm gentle bright sincere-warm matching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '虎も、可愛い。猿も、面白い。', en: 'Tigers also cute. Monkeys also interesting.', style: 'Tiny six-year-old soft small sincere bright-warm enthusiastic-listing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: 'しょう、本当に、動物、好きね。今度、動物園、行こうか。', en: 'Sho — truly loves animals. Next, go to zoo?', style: 'Maternal warm gentle bright sincere-warm planning-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'うん！行きたい！', en: 'Yes! Want to go!', style: 'Tiny six-year-old soft small sincere enthusiastic-warm celebrating, the small real warmth audible, soft small warmth throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 646 — daichi + tatsuya, future business (medium)
  {
    id: 'conv_00646',
    context: 'Daichi and Tatsuya plan future business expansion. Specific agriculture talk.',
    purpose: 'two-male business agriculture planning',
    ambient: 'farm_porch_afternoon',
    sound_effects: [],
    target_vocab: ['畑', '野菜', '事業', '計画', '将来'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '達也さん、新しい野菜、試してみたいって、思ってます。', en: 'Tatsuya-san, thinking of trying new vegetables.', style: 'Kansai warm bright sincere-warm proposing-warm engaging, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'おう、何の野菜や？', en: 'Oh, what vegetable?', style: 'Country gruff warm bright sincere curious-warm engaging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '有機栽培の、トマトと、ハーブ。最近、ようけ、需要、増えてる。', en: 'Organic tomatoes and herbs. Lately — demand growing.', style: 'Kansai warm bright sincere-warm business-explaining, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'ふむ、ええ考えやな。事業、ちゃんと、検討しよう。', en: 'Hmm, good idea. Will properly consider business.', style: 'Country gruff warm soft sincere thoughtful-warm committed-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'daichi_kansai', jp: 'ありがとう。皆さんの、意見も、聞きながら、進めたい。', en: 'Thanks. Hearing all\'s opinions — let\'s progress.', style: 'Kansai warm soft sincere collaborative-warm extending-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-collaborative' },
      { speaker: 'tatsuya_country', jp: '将来、ようけ、考えていかなあかんで。', en: 'Future — must think lots.', style: 'Country gruff warm soft sincere wise-warm forward-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'daichi_kansai', jp: 'うん、ほんま、皆で、頑張ろな。', en: 'Yes, truly, all working hard together.', style: 'Kansai warm soft sincere closing-warm collective-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 647 — sakura + sho, math (short)
  {
    id: 'conv_00647',
    context: 'Sakura helps Sho with math homework.',
    purpose: 'small cousin study-help',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['宿題', '算数', '一緒', '頑張る', '正解'],
    cast: ['sakura_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'お姉ちゃん、算数の問題、わかんない。', en: 'Big sister, math problem — don\'t get.', style: 'Tiny six-year-old soft small sincere careful-warm asking-help, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-careful' },
      { speaker: 'sakura_teen', jp: '見せて。あ、これは、引き算だね。', en: 'Show me. Ah, this — subtraction.', style: 'Teen warm soft sincere bright-warm teaching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'うん。十から、三、引くの？', en: 'Yes. From ten, subtract three?', style: 'Tiny six-year-old soft small sincere thinking-warm asking, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-thinking' },
      { speaker: 'sakura_teen', jp: 'そう。答え、七、正解！', en: 'Yes. Answer — seven, correct!', style: 'Teen warm bright sincere celebrating-warm praising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'やった！お姉ちゃんと、一緒に、頑張る。', en: 'Yay! Working hard with big sister.', style: 'Tiny six-year-old soft small sincere proud-warm closing-collective, the small real warmth audible, soft small warmth throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 648 — aoi + naoko, baby items shopping (medium)
  {
    id: 'conv_00648',
    context: 'Aoi and Naoko go shopping for baby items together.',
    purpose: 'small two-women shopping outing',
    ambient: 'department_store',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '可愛い', '相談', '感謝'],
    cast: ['aoi_barista', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'ナオコさん、一緒に来てくれて、本当に、ありがとう。', en: 'Naoko-san, truly thank you for coming.', style: 'Soft dreamy barista warm soft sincere bright-warm grateful-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。何を、買うつもり？', en: 'Same. What buying?', style: 'Aunt warm gentle bright sincere-warm engaging-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'ベビーベッドと、抱っこ紐、必要かなって。', en: 'Baby bed and carrier — needed, maybe.', style: 'Soft dreamy barista warm soft sincere thoughtful-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'naoko_aunt', jp: 'メイにも、相談したら？経験者だから。', en: 'Consult Mei too? Experienced.', style: 'Aunt warm gentle sincere-warm wise-advising-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'aoi_barista', jp: '本当に、皆さんに、頼れて、ありがたい。', en: 'Truly — able to rely on all — grateful.', style: 'Soft dreamy barista warm soft sincere deep-warm grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'こうやって、家族みたいに、続けていきましょう。', en: 'As family — let\'s continue.', style: 'Aunt warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'うん、本当に、感謝しています。', en: 'Yes, truly grateful.', style: 'Soft dreamy barista warm soft sincere closing-brief-warm deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 649 — riku + saito (short)
  {
    id: 'conv_00649',
    context: 'Riku visits Saito briefly under work pressure.',
    purpose: 'small adult-patient stress check',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['仕事', '疲れる', '健康', '相談', 'ありがとう'],
    cast: ['saito_doctor', 'riku_teen'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'リクさん、お疲れですか。', en: 'Riku-san, tired?', style: 'Doctor warm professional gentle sincere-warm careful-asking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-careful' },
      { speaker: 'riku_teen', jp: 'はい、最近、ちょっと。', en: 'Yes, lately, slightly.', style: 'Teen warm soft sincere brief-warm honest-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'saito_doctor', jp: '無理しないこと、大事。睡眠、ちゃんと、取れてますか。', en: 'No overdoing important. Sleep — properly?', style: 'Doctor warm professional gentle sincere-warm careful-asking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-careful' },
      { speaker: 'riku_teen', jp: 'まあまあ。気を付けます。', en: 'So-so. Will be careful.', style: 'Teen warm soft sincere committed-warm closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '相談、いつでも、来てください。', en: 'Consultation — come anytime.', style: 'Doctor warm professional gentle sincere closing-warm extending-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 650 — mei + sachiko + hina (3-speaker, medium) — milestone
  {
    id: 'conv_00650',
    context: 'Sachiko teaches Mei and Hina an old lullaby song.',
    purpose: 'three-generation song-passing — milestone 650',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['歌', '音楽', '一緒', '優しい', '感謝'],
    cast: ['sachiko_grandma', 'mei_romantic', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'メイさん、ひな、お祖母ちゃんの、知ってる歌、教えるね。', en: 'Mei-san, Hina — grandma\'s known song, teach.', style: 'Soft grandmother warm soft tender sincere-warm teaching-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'お祖母様の歌！聞きたい！', en: 'Grandma\'s song! Want to hear!', style: 'High child bright sincere enthusiastic-warm engaging, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'ひかりちゃんにも、教えてあげたい。', en: 'Want to teach Hikari-chan too.', style: 'Romantic warm soft tender sincere-warm extending-warm wishing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sachiko_grandma', jp: '私が、子供の時、母から、教わった。お父さんが、若い時、よく、聞かせてた。', en: 'When I was child, mother taught. When father was young, often sang.', style: 'Soft grandmother warm soft tender deep-warm philosophical-warm memory-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'hina_child', jp: 'お祖父様の歌、ひかりちゃんに、つなげる！', en: 'Grandpa\'s song — connect to Hikari!', style: 'High child bright sincere enthusiastic-warm extending-warm committing, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-committed' },
      { speaker: 'mei_romantic', jp: 'こうやって、ずっと、繋がっていくのが、本当に、幸せ。', en: 'Connecting forever like this — truly happy.', style: 'Romantic warm soft sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: '皆で、ね。歌、ずっと、伝えていきましょう。', en: 'All together. Song — keep passing.', style: 'Soft grandmother warm soft sincere closing-warm collective-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 651 — hiroshi_boss + asuka + naoko (3-speaker, long)
  {
    id: 'conv_00651',
    context: 'Three adults — retired Hiroshi-boss, Asuka, Naoko — at a cultural event.',
    purpose: 'three-civilized-adults cultural friendship',
    ambient: 'theater_evening',
    sound_effects: [],
    target_vocab: ['芸術', '一緒', '感動', '友達', '感謝', '楽しい'],
    cast: ['hiroshi_boss', 'asuka_teacher', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'あすかさん、ナオコさん、こうやって、三人で、嬉しい。', en: 'Asuka-san, Naoko-san — three of us, happy.', style: 'Boss measured warm soft sincere bright-warm welcoming-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: '田中さん、ナオコさん、いつも、ありがとうございます。', en: 'Tanaka-san, Naoko-san — always thank you.', style: 'Teacher warm gentle sincere bright-warm civic-formal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '今夜の、演劇、本当に、楽しみ。', en: 'Tonight\'s play — truly looking forward.', style: 'Aunt warm bright sincere anticipating-warm engaging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: 'こうやって、芸術を通して、皆さんと、ご縁いただけるの、本当に、ありがたい。', en: 'Through art — connecting with all — truly grateful.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm reflecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '退職してから、こうやって、お友達、増えていくの、不思議。', en: 'After retirement — friends growing — strange.', style: 'Teacher warm gentle sincere philosophical-warm wondering-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-philosophical' },
      { speaker: 'naoko_aunt', jp: '本当に。年齢、関係ないんですね、お友達って。', en: 'Truly. Age unrelated — friends.', style: 'Aunt warm soft sincere deep-warm philosophical-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '皆さんの、感性、本当に、勉強になります。', en: 'Everyone\'s sensibility — truly educational.', style: 'Boss measured warm soft sincere appreciating-warm humble-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。皆さんから、いつも、新しい視点、いただいてます。', en: 'Same. From all — always new perspectives.', style: 'Teacher warm gentle sincere-warm matching-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '今度、皆さんで、美術館も、ご一緒できたら、嬉しい。', en: 'Next — museum together — would be happy.', style: 'Aunt warm bright sincere extending-warm planning-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: 'ぜひ。三人で、これからも、ずっと、ね。', en: 'Please. Three of us — forever.', style: 'Boss measured warm soft sincere closing-warm extending-warm tender, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '感謝してます、本当に。', en: 'Grateful, truly.', style: 'Teacher warm soft sincere closing-brief-warm deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。これからも、ずっと、皆さんで、繋がっていきましょう。', en: 'Same. From now on too — all stay connected.', style: 'Aunt warm soft sincere closing-warm extending-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 652 — yuki + asuka (short)
  {
    id: 'conv_00652',
    context: 'Yuki and Asuka catch up over coffee. Old high school friends.',
    purpose: 'small ongoing high-school friend warmth',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['友達', '一緒', '元気', '楽しい', '感謝'],
    cast: ['yuki_office', 'asuka_teacher'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あすか、お久しぶり。元気？', en: 'Asuka, long time. Well?', style: 'Office woman warm bright sincere-warm friend-greeting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'ゆき、お元気で何より。', en: 'Yuki, glad well.', style: 'Teacher warm gentle bright sincere-warm reciprocal-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yuki_office', jp: '最近、なんか、嬉しい、いいニュース、ありそう？', en: 'Lately — any happy news?', style: 'Office woman warm bright sincere engaging-warm curious-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'いつも通り、楽しい毎日。', en: 'As usual — fun daily.', style: 'Teacher warm gentle sincere bright-warm balanced-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yuki_office', jp: 'こうやって、ずっと、お友達でいられて、本当に、嬉しい。', en: 'Staying friends like this — truly happy.', style: 'Office woman warm soft sincere closing-warm deep-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 653 — daichi + ren + tatsuya (3-speaker, medium)
  {
    id: 'conv_00653',
    context: 'Daichi brings Ren to country to discuss business with Tatsuya.',
    purpose: 'three-male generational business',
    ambient: 'farm_porch_afternoon',
    sound_effects: [],
    target_vocab: ['田舎', '一緒', '事業', '感謝', '将来'],
    cast: ['daichi_kansai', 'ren_uni', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '達也さん、れんくん、連れてきました。', en: 'Tatsuya-san, brought Ren-kun.', style: 'Kansai warm bright sincere bright-warm introducing-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'おう、れんくん、ようこそ。', en: 'Oh, Ren-kun, welcome.', style: 'Country gruff warm bright sincere-warm welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'お邪魔します。田舎、本当に、いい場所っすね。', en: 'Excuse me. Country — truly nice place.', style: 'University student warm soft sincere bright-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '達也さんの、野菜事業、れんくんも、興味あるって。', en: 'Tatsuya-san\'s vegetable business — Ren-kun interested too.', style: 'Kansai warm bright sincere-warm bridging-warm explaining, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'ほな、ちょっと、説明しよか。', en: 'Then, let me explain.', style: 'Country gruff warm bright sincere bright-warm offering-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'お願いします。皆さんと、こうやって、将来、繋がれて、本当に、嬉しい。', en: 'Please. Connecting future with all — truly happy.', style: 'University student warm soft sincere closing-warm philosophical-warm deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 654 — sho + ren (short)
  {
    id: 'conv_00654',
    context: 'Ren visits home; Sho is excited to see him.',
    purpose: 'small adult-cousin ongoing warmth',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '元気', 'お兄ちゃん', 'ありがとう'].filter(w => w !== 'お兄ちゃん').concat(['兄']),
    cast: ['ren_uni', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'お兄ちゃん、おかえり！', en: 'Brother, welcome back!', style: 'Tiny six-year-old soft small sincere enthusiastic-warm welcoming, the small real warmth audible, soft small warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: 'しょう、大きくなったな。元気？', en: 'Sho, grown. Well?', style: 'University student warm soft sincere bright-warm cousin-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'うん、ちゃんと、頑張ってる。', en: 'Yes, working hard properly.', style: 'Tiny six-year-old soft small sincere proud-warm sharing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'ren_uni', jp: 'えらい。お兄ちゃんも、ずっと、応援してる。', en: 'Good. Brother — always cheering.', style: 'University student warm soft sincere closing-warm encouraging-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'ありがとう、お兄ちゃん。', en: 'Thank you, brother.', style: 'Tiny six-year-old soft small sincere closing-warm grateful-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 655 — kenji + saito (short)
  {
    id: 'conv_00655',
    context: 'Kenji visits Saito for annual checkup.',
    purpose: 'small adult ongoing checkup',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['健康', '仕事', '家族', '感謝', '一緒'],
    cast: ['saito_doctor', 'kenji_office'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '田中さん、本当に、お健康。', en: 'Tanaka-san, truly healthy.', style: 'Doctor warm professional gentle bright sincere-warm reporting-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'kenji_office', jp: 'おかげさまで。家族も、皆、元気で、本当に、ありがたい。', en: 'Thanks to all. Family — all well, truly grateful.', style: 'Salaryman warm soft sincere bright-warm grateful-warm sharing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一番、大事なこと、家族の健康。', en: 'Most important — family health.', style: 'Doctor warm gentle wise sincere-warm philosophical-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: '本当に。これからも、ちゃんと、見守らせてください。', en: 'Truly. From now on too — please let me watch.', style: 'Salaryman warm formal sincere closing-warm respectful-warm extending, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'こちらこそ。お大事に。', en: 'Same. Take care.', style: 'Doctor warm gentle sincere closing-warm extending-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 656 — sakura + asuka, post-wedding (medium)
  {
    id: 'conv_00656',
    context: 'Sakura post-wedding visits Asuka. Now also married, deepening as teacher-friend.',
    purpose: 'former-student-now-married updates mentor',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['結婚', '一緒', '幸せ', '感謝', '将来'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、結婚式、来てくださって、本当に、ありがとうございました。', en: 'Sensei, coming to wedding — truly thank you.', style: 'Teen warm soft sincere deep-warm grateful-formal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。さくらさん、本当に、綺麗だった。', en: 'Same. Sakura-san — truly beautiful.', style: 'Teacher warm gentle bright sincere-warm tender-appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '本当に、皆さんに、囲まれて、幸せでした。', en: 'Truly — surrounded by all — happy.', style: 'Teen warm soft sincere bright-warm deep-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '結婚生活、慣れましたか。', en: 'Married life — used to?', style: 'Teacher warm gentle sincere bright-warm engaging-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'まだ、少しずつ。でも、毎日、楽しい。', en: 'Still bit by bit. But daily fun.', style: 'Teen warm soft sincere honest-warm balanced-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-balanced' },
      { speaker: 'asuka_teacher', jp: 'いいね。これからも、応援してる。', en: 'Nice. From now on too, cheering.', style: 'Teacher warm gentle sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '本当に、感謝しています。一生、忘れません。', en: 'Truly grateful. Won\'t forget forever.', style: 'Teen warm soft sincere closing-warm deep-tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 657 — yumiko + naoko (short)
  {
    id: 'conv_00657',
    context: 'Yumiko and Naoko chat about life over a quick coffee.',
    purpose: 'small sister-in-law adult catch-up',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '感謝', '元気', '幸せ'],
    cast: ['yumiko_mom', 'naoko_aunt'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'なおこちゃん、最近、お母さん、どう？', en: 'Naoko-chan, lately — mother how?', style: 'Maternal warm gentle bright sincere-warm asking-care, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'お陰様で、お元気。皆で、見守ってもらえて、本当に。', en: 'Thanks to all, well. Watched by all — truly.', style: 'Aunt warm soft sincere bright-warm grateful-warm reporting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'ひかりちゃんも、お祖母様、本当に、嬉しがってる。', en: 'Hikari-chan too — grandma truly happy.', style: 'Maternal warm soft sincere bright-warm sharing-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '本当に、家族、繋がっていって、嬉しい。', en: 'Truly, family connecting — happy.', style: 'Aunt warm soft sincere closing-warm philosophical-warm deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'これからも、ずっと、ね。', en: 'From now on too — always.', style: 'Maternal warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 658 — ren + aoi + sho + hina (4-speaker, medium)
  {
    id: 'conv_00658',
    context: 'Ren and Aoi visit; Sho and Hina excited to see them.',
    purpose: 'four-young-family ongoing warmth',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '楽しい', '家族', '可愛い'],
    cast: ['ren_uni', 'aoi_barista', 'hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'お兄ちゃん、あおいさん、いらっしゃい！', en: 'Brother, Aoi-san, welcome!', style: 'High child bright sincere enthusiastic-warm welcoming-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'aoi_barista', jp: 'ひな、しょう、お久しぶり。元気？', en: 'Hina, Sho — long time. Well?', style: 'Soft dreamy barista warm gentle bright sincere-warm engaging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'はい、元気です。赤ちゃん、もうすぐ？', en: 'Yes, well. Baby — soon?', style: 'Tiny six-year-old soft small sincere polite-warm engaging-asking, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-bright' },
      { speaker: 'aoi_barista', jp: 'うん、もうすぐ。ひなと、しょうの、いとこ、になる。', en: 'Yes, soon. Will be your cousin, Hina, Sho.', style: 'Soft dreamy barista warm soft sincere tender-warm bright-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'ren_uni', jp: '皆で、また、家族、増えるな。', en: 'All — family growing.', style: 'University student warm soft sincere bright-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hina_child', jp: 'やったー！ひな、お姉さん、もっと、頑張る！', en: 'Yay! Hina — big sister — work harder!', style: 'High child bright sincere committed-warm proud-warm declaring, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-committed' },
      { speaker: 'sho_child', jp: 'ぼくも、お兄ちゃん、する。', en: 'I also — big brother — do.', style: 'Tiny six-year-old soft small sincere committed-warm matching-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-committed' }
    ]
  },
  // 659 — takeda + yumiko (short)
  {
    id: 'conv_00659',
    context: 'Officer Takeda stops by Yumiko\'s home briefly. Small civic moment.',
    purpose: 'small civic ongoing community check',
    ambient: 'genkan_afternoon',
    sound_effects: [],
    target_vocab: ['近所', '元気', '感謝', '安心', 'ありがとう'],
    cast: ['takeda_officer', 'yumiko_mom'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: '野田さん、こんにちは。お元気そうで、安心。', en: 'Noda-san, hello. Looking well — relieved.', style: 'Officer warm professional gentle bright sincere-warm civic-routine, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'yumiko_mom', jp: '武田さん、いつもありがとうございます。', en: 'Takeda-san, always thank you.', style: 'Maternal warm gentle sincere-warm grateful-warm civic, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '近所、特に、変わりなく？', en: 'Neighborhood — unchanged?', style: 'Officer warm professional gentle sincere-warm careful-asking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-careful' },
      { speaker: 'yumiko_mom', jp: 'はい、皆さんで、ちゃんと、見守ってます。', en: 'Yes, all — properly watching.', style: 'Maternal warm gentle sincere-warm reporting-warm civic, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: 'こちらこそ、感謝しています。', en: 'Same — grateful.', style: 'Officer warm professional gentle sincere closing-warm grateful-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 660 — mei + naoko (medium)
  {
    id: 'conv_00660',
    context: 'Mei consults Naoko about motherhood — both adult women.',
    purpose: 'adult-women motherhood-mentor warmth',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '相談', '感謝', '家族'],
    cast: ['mei_romantic', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ナオコさん、ちょっと、相談、いいですか。', en: 'Naoko-san, consult a bit?', style: 'Romantic warm soft sincere careful-warm asking-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'naoko_aunt', jp: 'もちろん。何か、心配？', en: 'Of course. Anything worrying?', style: 'Aunt warm gentle bright sincere-warm welcoming-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'mei_romantic', jp: 'ひかりちゃん、夜泣き、ひどくて。', en: 'Hikari-chan — night crying — bad.', style: 'Romantic warm soft sincere honest-warm vulnerable-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'naoko_aunt', jp: '皆、最初は、そう。お母さんに、相談したら？経験者だから。', en: 'Everyone at first. Consult mother? Experienced.', style: 'Aunt warm gentle sincere-warm normalizing-warm advising-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '本当に、皆さんに、囲まれて、ありがたい。', en: 'Truly surrounded by all — grateful.', style: 'Romantic warm soft sincere closing-warm deep-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '家族、皆で、応援してる。一人じゃ、ないからね。', en: 'Family all — cheering. Not alone.', style: 'Aunt warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 661 — riku + ryosuke + ren (3-speaker, long)
  {
    id: 'conv_00661',
    context: 'Three men — Riku, Ryosuke, Ren — over drinks. Long generation-bridging adult talk.',
    purpose: 'three-male generation-bridging conversation',
    ambient: 'izakaya_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '感謝', '将来', '友達', '幸せ'],
    cast: ['riku_teen', 'ryosuke_dad', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '皆さん、こうやって、三人で、嬉しい。', en: 'Everyone, three of us — happy.', style: 'Father warm gentle bright sincere-warm gathering-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: 'お父さんと、れんお兄ちゃんと、こうやって、ね。', en: 'With dad and Ren-onii-chan — like this.', style: 'Teen warm soft sincere appreciating-warm bright-warm gathering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '三世代、こうやって、お話できるの、本当に、ありがたい。', en: 'Three generations talking — truly grateful.', style: 'University student warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'リクも、立派な、社会人になって。', en: 'Riku also — splendid working adult.', style: 'Father warm soft sincere deep-warm appreciating-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'riku_teen', jp: 'お父さん、れんお兄ちゃんに、いつも、見守ってもらって、本当に、感謝してる。', en: 'Dad, Ren-onii-chan — always watched over — truly grateful.', style: 'Teen warm soft sincere deep-warm grateful-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '俺も、亮介さんから、ずっと、教わってる。', en: 'I also — always learning from Ryosuke-san.', style: 'University student warm soft sincere humble-warm acknowledging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-humble' },
      { speaker: 'ryosuke_dad', jp: '皆さんが、いてくれるから、私も、しっかり、生きてこれた。', en: 'Because everyone\'s there — I lived solidly too.', style: 'Father warm soft sincere deep-warm philosophical-warm reciprocal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'riku_teen', jp: 'お父さんが、ずっと、お父さんで、本当に、よかった。', en: 'Dad — always being dad — truly good.', style: 'Teen warm soft tender sincere-warm deep-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'ren_uni', jp: 'これからも、ずっと、皆で、ね。', en: 'From now on too — always all.', style: 'University student warm soft sincere closing-warm extending-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '将来、孫の代まで、こうやって、繋がっていけたら。', en: 'Future — until grandchild generation — if connected.', style: 'Father warm soft sincere closing-warm philosophical-warm wishing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'riku_teen', jp: '絶対、繋いでいく。家族で。', en: 'Definitely — connect. As family.', style: 'Teen warm soft sincere closing-warm firm-warm committing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '乾杯しましょう。家族の絆に。', en: 'Let\'s cheers. To family bonds.', style: 'University student warm soft sincere closing-warm rallying-tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '乾杯！', en: 'Cheers!', style: 'Father warm bright sincere closing-brief-warm celebrating-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 662 — hiroshi_boss + kenji + ryosuke + daichi + tatsuya + ren (6-speaker, long)
  {
    id: 'conv_00662',
    context: 'Six men gather — the workplace family plus the country friend and Ren — for a major reunion.',
    purpose: 'six-male major workplace-family gathering',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '感謝', '友達', '幸せ', '将来'],
    cast: ['hiroshi_boss', 'kenji_office', 'ryosuke_dad', 'daichi_kansai', 'tatsuya_country', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '皆さん、ようこそ。六人で、こうやって、揃うのは、本当に、嬉しい。', en: 'Everyone, welcome. Six of us gathered — truly happy.', style: 'Boss measured warm soft sincere bright-warm gathering-opening-deep, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '部長、いつも、ありがとうございます。', en: 'Boss, always thank you.', style: 'Salaryman warm formal sincere-warm respectful-warm grateful, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '退職してからも、こんな、ご縁、ありがたい。', en: 'Even retired — such connection — grateful.', style: 'Father warm soft sincere deep-warm philosophical-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '田舎から、達也さんも、皆さんも、来てくれて、本当に。', en: 'From country, Tatsuya-san, everyone coming — truly.', style: 'Kansai warm soft sincere bright-warm appreciating-warm gathering, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ。皆さんが、ずっと、お付き合いくれて、ありがたい。', en: 'Same. All — long association — grateful.', style: 'Country gruff warm soft sincere deep-warm reciprocal-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '俺、こんな、皆さんに、囲まれて、本当に、運がいい。', en: 'Me — surrounded by such — truly lucky.', style: 'University student warm soft sincere deep-warm philosophical-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'ひかりちゃんも、れんさんの赤ちゃんも、皆で、お祝いしましょう。', en: 'Hikari-chan, Ren-san\'s baby — let\'s all celebrate.', style: 'Boss measured warm soft sincere bright-warm planning-warm extending, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '家族って、こうやって、増えていきますね。', en: 'Family — growing like this.', style: 'Salaryman warm soft sincere reflective-warm philosophical-warm acknowledging, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '人生、なかなか、こんな、ご縁、できない。', en: 'Life — rarely — such connection.', style: 'Father warm soft sincere deep-warm philosophical-warm wondering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'ほんま、ありがたい。皆さん、本当に。', en: 'Truly, grateful. To all, truly.', style: 'Kansai warm soft sincere closing-warm deep-grateful-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '将来、皆さんで、ずっと、繋がっていきたい。', en: 'Future — all — stay connected.', style: 'Country gruff warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '乾杯しましょう。皆さんへの、感謝に。', en: 'Let\'s cheers. To gratitude for all.', style: 'University student warm soft sincere closing-warm rallying-tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '乾杯！本当に、嬉しい、夜です。', en: 'Cheers! Truly happy night.', style: 'Boss measured warm bright sincere closing-warm celebrating-deep-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 663 — sachiko + mrs_mori (medium)
  {
    id: 'conv_00663',
    context: 'Two widows share an afternoon. Continuing wisdom of bereavement and joy.',
    purpose: 'two-widow ongoing friendship',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['一人', '時間', '思い出', '友達', '感謝'],
    cast: ['sachiko_grandma', 'mrs_mori_neighbor'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: 'さちこさん、ひかりちゃん、お元気？', en: 'Sachiko-san, Hikari-chan — well?', style: 'Neighbor warm gentle bright sincere-warm engaging-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sachiko_grandma', jp: 'お陰様で、本当に、元気。家族、皆、繋がっていって。', en: 'Thanks to all, truly well. Family — all connecting.', style: 'Soft grandmother warm soft sincere bright-warm philosophical-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '主人が、生きてたら、絶対、嬉しがってた。', en: 'My husband, if alive, surely happy.', style: 'Neighbor warm soft tender sincere-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sachiko_grandma', jp: 'お父さんも、絶対、見てる。', en: 'Father — surely watching.', style: 'Soft grandmother warm soft tender sincere-warm comforting-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'こうやって、お友達がいてくれるって、本当に、宝物。', en: 'Having friends like this — truly treasure.', style: 'Neighbor warm soft sincere deep-warm philosophical-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: '森さんと、お話できる時間、本当に、ありがたい。', en: 'Time talking with Mori-san — truly grateful.', style: 'Soft grandmother warm soft sincere closing-warm deep-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mrs_mori_neighbor', jp: 'これからも、ずっと、お友達でいよう。', en: 'From now on too — stay friends.', style: 'Neighbor warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

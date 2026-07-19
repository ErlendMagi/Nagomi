import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_037)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 724 — kenji + hiroshi_boss, market analysis (medium)
  {
    id: 'conv_00724',
    context: 'Hiroshi reviews Kenji\'s market analysis report.',
    purpose: 'boss-subordinate market analysis N3 vocabulary',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['市場', '商品', '価格', '状況', '対策'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、市場の動き、どう見ている。', en: 'Kenji — market movement, how see.', style: 'Boss firm formal direct authoritative composed opening-question, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '商品の価格、徐々に、上がっています。', en: 'Product prices — gradually rising.', style: 'Salaryman warm formal sincere-warm professional-reporting clear, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: 'この状況、対策、必要だ。', en: 'This situation — countermeasure needed.', style: 'Boss firm formal direct serious-composed decision-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-serious' },
      { speaker: 'kenji_office', jp: 'はい、三つ、案を、用意しました。', en: 'Yes — three plans prepared.', style: 'Salaryman warm formal sincere-warm prepared-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-prepared' },
      { speaker: 'hiroshi_boss', jp: 'よし。一番、現実的なもの、選べ。', en: 'Good. Most realistic — choose.', style: 'Boss firm formal direct decisive-clear instructive, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '価格を、徐々に、見直す案、推薦します。', en: 'Price — gradually revise plan, recommend.', style: 'Salaryman warm formal sincere-warm professional-advising committed, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '了解。来週、市場、再確認しろ。', en: 'Understood. Next week — market, re-verify.', style: 'Boss firm formal direct closing-instructive trust, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'かしこまりました。', en: 'Understood.', style: 'Salaryman warm formal sincere closing-brief-respectful warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' }
    ]
  },
  // 725 — sho + hina, music (short)
  {
    id: 'conv_00725',
    context: 'Sho and Hina sing along to a song on the radio.',
    purpose: 'two-children music-and-song exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['音楽', '一緒', '楽しい', '歌', '大好き'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、この音楽、聞いて。', en: 'Sho — this music, listen.', style: 'High child bright sincere enthusiastic-warm inviting-opening, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん。歌、知ってる、これ。', en: 'Yes. Song — know, this.', style: 'Tiny six-year-old soft small sincere recognizing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'ひな、大好きな歌。一緒に、歌おう。', en: 'Hina — favorite song. Together — sing.', style: 'High child bright sincere enthusiastic-warm inviting-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、歌うと、楽しい。', en: 'Together — singing, fun.', style: 'Tiny six-year-old soft small sincere bright-warm appreciating-warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'もっと、大きい声で。', en: 'More — louder voice.', style: 'High child bright sincere encouraging-warm enthusiastic-closing, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 726 — asuka + sakura, novel discussion (medium)
  {
    id: 'conv_00726',
    context: 'Asuka and Sakura discuss the meaning of a novel they both read.',
    purpose: 'teacher-student literary analysis exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['内容', '理解', '意味', '文化', '本'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、この本の内容、どう感じた？', en: 'Sakura-san — this book\'s content, how felt?', style: 'Teacher warm gentle sincere-warm curious-warm mentor-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sakura_teen', jp: '深いです。意味、ゆっくり、考えています。', en: 'Deep. Meaning — slowly, thinking.', style: 'Teen warm soft sincere thoughtful-warm sharing-reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'asuka_teacher', jp: '主人公の選択、理解、出来ましたか？', en: 'Protagonist\'s choice — understood?', style: 'Teacher warm gentle sincere-warm probing-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '少しずつ、本人の心、見えてきました。', en: 'Bit by bit — protagonist\'s heart, became visible.', style: 'Teen warm soft sincere reflecting-warm gentle-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '昔の文化、よく、表現されてる。', en: 'Old culture — well, expressed.', style: 'Teacher warm gentle sincere-warm informing-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'もう一度、読み直したいです。', en: 'Once more — want to re-read.', style: 'Teen warm soft sincere aspiring-warm committed-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-aspiring' },
      { speaker: 'asuka_teacher', jp: 'いい姿勢。読書、続けてね。', en: 'Good posture. Reading — continue.', style: 'Teacher warm gentle sincere closing-warm encouraging-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 727 — ryosuke + yumiko, life retrospect (long)
  {
    id: 'conv_00727',
    context: 'Ryosuke and Yumiko reflect on life on their anniversary evening.',
    purpose: 'married-couple anniversary retrospection',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['人生', '思い出', '一緒', '家族', '大切'],
    cast: ['ryosuke_dad', 'yumiko_mom'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '優子、今日で、結婚、二十二年だ。', en: 'Yumiko — today, marriage, twenty-two years.', style: 'Father warm gentle sincere-warm tender-opening reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '本当。早いね、人生。', en: 'Truly. Fast — life.', style: 'Maternal warm gentle sincere-warm reflecting-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '子供たち、立派に、育ったね。', en: 'Children — splendidly, grew.', style: 'Father warm gentle sincere-warm proud-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'うん。さくら、リク、本当に、優しい子だ。', en: 'Yes. Sakura, Riku — truly, kind children.', style: 'Maternal warm gentle sincere-warm proud-warm tender-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '思い出、数えきれない。', en: 'Memories — uncountable.', style: 'Father warm gentle sincere-warm reflecting-deep nostalgic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-nostalgic' },
      { speaker: 'yumiko_mom', jp: 'お父さん、覚えてる？初めての旅行。', en: 'Father — remember? First trip.', style: 'Maternal warm gentle sincere-warm reminiscing-warm intimate, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '京都だね。雨、降ってた。', en: 'Kyoto. Rain — was falling.', style: 'Father warm gentle sincere-warm recalling-warm specific, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '傘、一本、しか、なかった。', en: 'Umbrella — one only.', style: 'Maternal warm gentle sincere-warm laughing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '懐かしい。あの時、若かった。', en: 'Nostalgic. That time — young.', style: 'Father warm gentle sincere-warm reflecting-deep wistful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '今も、若いよ、心は。', en: 'Now also — young, heart-wise.', style: 'Maternal warm gentle sincere-warm reassuring-warm tender-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '家族、本当に、大切な存在だ。', en: 'Family — truly, important existence.', style: 'Father warm gentle sincere-warm philosophical-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'これからも、一緒に、歩こうね。', en: 'From now also — together, walk.', style: 'Maternal warm gentle sincere-warm forward-warm tender-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: 'うん。最後まで、ずっと。', en: 'Yes. Until end — always.', style: 'Father warm gentle sincere closing-warm deep-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 728 — saito + sachiko, health check (medium)
  {
    id: 'conv_00728',
    context: 'Dr. Saito reviews Sachiko\'s annual checkup with reassurance.',
    purpose: 'doctor-elderly-patient health exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '検査', '結果', '安心', '重要'],
    cast: ['saito_doctor', 'sachiko_grandma'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '佐知子さん、検査の結果、伺いますね。', en: 'Sachiko-san — exam result, share.', style: 'Doctor warm formal sincere-warm calm-clear elder-friendly opening, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'sachiko_grandma', jp: 'はい、お願いします、先生。', en: 'Yes — please, doctor.', style: 'Grandma warm gentle sincere-warm aged-deep respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '健康、全体、良好です。安心してください。', en: 'Health — overall, good. Please relax.', style: 'Doctor warm formal sincere-warm reassuring-warm calm-clear, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'sachiko_grandma', jp: 'ああ、嬉しい。安心しました。', en: 'Ah — happy. Relieved.', style: 'Grandma warm gentle sincere-warm relieved-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一つだけ、毎日の散歩、続けて、重要です。', en: 'One thing — daily walks, continue, important.', style: 'Doctor warm formal sincere-warm advising-warm professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'sachiko_grandma', jp: 'おじいちゃんと、毎日、歩いてます。', en: 'Grandpa — every day, walking.', style: 'Grandma warm gentle sincere-warm sharing-warm aged-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '素晴らしい。お二人で、続けてください。', en: 'Wonderful. Together — please continue.', style: 'Doctor warm formal sincere closing-warm encouraging-warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 729 — ren + yuki, technology (medium)
  {
    id: 'conv_00729',
    context: 'Ren explains new technology at his university lab to Yuki.',
    purpose: 'student-office-worker tech exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['技術', '新しい', '仕事', '効果', '楽しい'],
    cast: ['ren_uni', 'yuki_office'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'レン君、研究室、今、何やってる？', en: 'Ren-kun — lab, now, what doing?', style: 'Office woman bright soft sincere curious-warm casual-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: '新しい技術、開発、ちょっと、関わってる。', en: 'New technology — development, a bit, involved.', style: 'University student warm bright sincere-warm sharing-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yuki_office', jp: 'すごい。会社の仕事にも、効果、あるかな。', en: 'Amazing. Company work — effect, exist?', style: 'Office woman bright soft sincere appreciating-curious engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: 'たぶん、ある。データ処理、早くなる。', en: 'Probably — yes. Data processing — faster.', style: 'University student warm soft sincere-warm informing-warm practical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '楽しいんだ、研究って。', en: 'Fun — research.', style: 'Office woman bright soft sincere reflecting-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん。毎日、発見、ある。', en: 'Yes. Every day — discovery exists.', style: 'University student warm bright sincere-warm enthusiastic-warm sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yuki_office', jp: 'いいね。応援してる、レン君。', en: 'Nice. Cheering — Ren-kun.', style: 'Office woman bright soft sincere closing-warm encouraging-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 730 — hina + sho, movie (short)
  {
    id: 'conv_00730',
    context: 'Hina and Sho choose a movie to watch together.',
    purpose: 'children-choose-movie exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['映画', '楽しい', '一緒', '子ども', '笑顔'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、今夜の映画、何にする？', en: 'Sho — tonight\'s movie, what choose?', style: 'High child bright sincere asking-enthusiastic opening-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '子ども向けの、楽しい、やつ。', en: 'Children-oriented — fun one.', style: 'Tiny six-year-old soft small sincere preferring-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '猫が出てくる、あれ、見たい。', en: 'Cat appears — that, want to see.', style: 'High child bright sincere proposing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'いいよ。一緒に、見よう。', en: 'Fine. Together — watch.', style: 'Tiny six-year-old soft small sincere agreeing-warm inviting-warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'やった！皆、笑顔、絶対。', en: 'Yay! All — smile, surely.', style: 'High child bright sincere closing-warm enthusiastic-predicting, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 731 — daichi + tatsuya, country market (medium)
  {
    id: 'conv_00731',
    context: 'Daichi joins Tatsuya at the morning country market.',
    purpose: 'cousin-rural market exchange with N3 commerce vocabulary',
    ambient: 'market_morning',
    sound_effects: [],
    target_vocab: ['市場', '米', '野菜', '価格', '一緒'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、この市場、活気あるなぁ。', en: 'Tatsuya — this market, lively.', style: 'Kansai warm bright sincere observing-warm enthusiastic-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '朝が、一番、賑やかだ。', en: 'Morning — most, lively.', style: 'Country warm low sincere unhurried informing-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '米、いくらや？最近の価格。', en: 'Rice — how much? Recent price.', style: 'Kansai warm bright sincere asking-practical curious, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '少し上がってる。野菜も、同じ。', en: 'A little risen. Vegetables — same.', style: 'Country warm low sincere unhurried practical-clear, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '物価、本当、上がってるな。', en: 'Prices — truly, rising.', style: 'Kansai warm bright sincere observing-warm concerned-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '農家にも、影響、大きいな。', en: 'Farmers — affect, big.', style: 'Country warm low sincere unhurried thoughtful-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '一緒に、野菜、買って帰ろうやん。', en: 'Together — vegetables, buy and return.', style: 'Kansai warm bright sincere closing-warm proposing-warm bright, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '行こう、皆に、土産。', en: 'Let\'s go — all, gift.', style: 'Country warm low sincere closing-warm planning-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 732 — aoi + yuki, friendship (medium)
  {
    id: 'conv_00732',
    context: 'Aoi and Yuki catch up after Aoi\'s long maternity leave.',
    purpose: 'two-women friendship reconnection',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['友達', '一緒', '元気', '笑顔', '大切'],
    cast: ['aoi_barista', 'yuki_office'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、久しぶり！元気？', en: 'Aoi-chan — long time! Energetic?', style: 'Office woman bright soft sincere enthusiastic-warm reuniting-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'aoi_barista', jp: '元気だよ。会えて、嬉しい。', en: 'Energetic. Meeting — happy.', style: 'Barista warm soft sincere-warm grateful-warm tender-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '友達と、過ごす時間、すごく大切ね。', en: 'Friend — time spent, very important.', style: 'Office woman bright soft sincere philosophical-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '本当。子育て、たまに、寂しくて。', en: 'Truly. Raising child — sometimes, lonely.', style: 'Barista warm soft sincere vulnerable-warm honest-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'これから、もっと、一緒に、会おう。', en: 'From now — more, together, meet.', style: 'Office woman bright soft sincere committing-warm warm-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'うん、絶対。笑顔、見たい、ゆきちゃんの。', en: 'Yes — surely. Smile — want to see, Yuki-chan\'s.', style: 'Barista warm soft sincere tender-warm warm-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: 'こちらこそ。これからも、ずっと、友達。', en: 'Same. From now — always, friend.', style: 'Office woman bright soft sincere closing-warm deep-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 733 — kenji + ryosuke, world news (medium)
  {
    id: 'conv_00733',
    context: 'Kenji and Ryosuke discuss international news over coffee.',
    purpose: 'two-men world news exchange N3 vocabulary',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['世界', '国', '情報', '状況', '重要'],
    cast: ['kenji_office', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '亮介さん、世界の状況、複雑ですね。', en: 'Ryosuke-san — world situation, complex.', style: 'Salaryman warm formal sincere-warm serious-warm professional-opening, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-serious' },
      { speaker: 'ryosuke_dad', jp: 'どこの国も、苦労してますね。', en: 'Every country — struggling.', style: 'Father warm gentle sincere-warm thoughtful-warm acknowledging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'kenji_office', jp: '正確な情報、得るの、難しいです。', en: 'Accurate info — obtaining, difficult.', style: 'Salaryman warm gentle sincere-warm practical-thoughtful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '冷静に、判断する、重要ですね。', en: 'Calmly judging — important.', style: 'Father warm gentle sincere-warm wise-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: '子供たちの未来、心配になります。', en: 'Children\'s future — becomes worry.', style: 'Salaryman warm gentle sincere-warm vulnerable-warm sharing, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '私たちが、出来る事、続けましょう。', en: 'We — possible things, continue.', style: 'Father warm gentle sincere-warm wise-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: 'はい、地に足、つけて。', en: 'Yes — feet on ground.', style: 'Salaryman warm soft sincere closing-warm committed-warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 734 — sachiko + goro, history of past (short)
  {
    id: 'conv_00734',
    context: 'Sachiko and Goro look at old photos and recall the past.',
    purpose: 'elderly-couple reminiscence',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['歴史', '思い出', '一緒', '昔', '静か'],
    cast: ['sachiko_grandma', 'goro_grandpa'],
    frequency_tier: 4,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'おじいちゃん、この写真、昔、覚えてる？', en: 'Grandpa — this photo, long ago, remember?', style: 'Grandma warm gentle sincere-warm reminiscing-warm aged-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'goro_grandpa', jp: 'うん。皆、若かった。', en: 'Yes. All — young.', style: 'Grandpa warm gentle sincere-warm aged-deep reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '私たちの歴史、たくさん、ある。', en: 'Our history — lots.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'goro_grandpa', jp: '静かに、思い出、味わおう。', en: 'Quietly — memories, savor.', style: 'Grandpa warm gentle sincere-warm aged-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '一緒に、最後まで。', en: 'Together — until end.', style: 'Grandma warm gentle sincere closing-warm deep-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 735 — sakura + asuka, writing group (medium)
  {
    id: 'conv_00735',
    context: 'Sakura shows Asuka her newest short story for feedback.',
    purpose: 'student-mentor writing feedback exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['文章', '内容', '評価', '努力', '続ける'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、新しい文章、読んでください。', en: 'Teacher — new text, please read.', style: 'Teen warm soft sincere vulnerable-warm respectful-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'もちろん。…うん、内容、深いね。', en: 'Of course. …Yes — content, deep.', style: 'Teacher warm gentle sincere-warm reading-warm appreciative-affirming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: 'ありがとう。評価、気になってました。', en: 'Thanks. Evaluation — was worried.', style: 'Teen warm soft sincere vulnerable-warm grateful-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '努力、見える。書く力、確実に伸びてる。', en: 'Effort — visible. Writing strength — surely growing.', style: 'Teacher warm gentle sincere-warm encouraging-warm affirming-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '嬉しい。これからも、続けたいです。', en: 'Happy. From now also — want to continue.', style: 'Teen warm soft sincere grateful-warm committed-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '応援、いつも、しています。', en: 'Cheering — always.', style: 'Teacher warm gentle sincere-warm warm-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'ありがとうございます、本当に。', en: 'Thanks — truly.', style: 'Teen warm soft sincere closing-warm grateful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 736 — mei + aoi, motherhood reality (long)
  {
    id: 'conv_00736',
    context: 'Mei and Aoi share the unfiltered realities of motherhood.',
    purpose: 'two-mother honest parenting exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['子ども', '現実', '大変', '楽しい', '一緒'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、子ども、ねた？', en: 'Aoi-chan — child, sleep?', style: 'Romantic warm soft sincere-warm casual-opening intimate, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'うん、ようやく。今日、本当に大変だった。', en: 'Yes — finally. Today, truly hard.', style: 'Barista warm soft sincere-warm tired-honest sharing-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '分かる。ひかりも、今朝、ずっと、泣いてた。', en: 'Understand. Hikari — this morning, kept crying.', style: 'Romantic warm soft sincere-warm matching-warm honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '理想と、現実、違うね。', en: 'Ideal and — reality, different.', style: 'Barista warm soft sincere-warm philosophical-warm honest-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '想像、できなかったよ、ここまで。', en: 'Imagine — couldn\'t, this far.', style: 'Romantic warm soft sincere-warm honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'でも、笑顔、見ると、全部、消える。', en: 'But — smile, seeing, all, disappears.', style: 'Barista warm soft sincere-warm tender-deep grateful-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '本当。ひかりの笑顔、最高。', en: 'Truly. Hikari\'s smile — best.', style: 'Romantic warm soft sincere-warm tender-warm proud-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '夜中、起きると、辛いけどね。', en: 'Middle of night — waking, hard though.', style: 'Barista warm soft sincere-warm honest-warm tired, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'ダイチも、ちゃんと、手伝ってくれる。', en: 'Daichi too — properly, helps.', style: 'Romantic warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'いいね。レンも、頑張ってくれてる。', en: 'Nice. Ren too — trying hard.', style: 'Barista warm soft sincere-warm appreciative-warm matching-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '皆、一緒、頑張ってる、それが楽しい。', en: 'All — together, trying, that\'s fun.', style: 'Romantic warm soft sincere-warm philosophical-warm appreciative-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '子育て、一人じゃ、出来ない、本当。', en: 'Raising child — alone, can\'t do, truly.', style: 'Barista warm soft sincere-warm philosophical-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '一緒に、これからも、支え合おう。', en: 'Together — from now also, support each other.', style: 'Romantic warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 737 — takeda + ren, work safety (medium)
  {
    id: 'conv_00737',
    context: 'Officer Takeda meets Ren after Ren\'s late-night lab work.',
    purpose: 'authority-student late-night safety advisory',
    ambient: 'street_night',
    sound_effects: [],
    target_vocab: ['仕事', '状況', '安全', '大変', '注意'],
    cast: ['takeda_officer', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: '君、こんな時間まで、仕事か？', en: 'You — this hour, work?', style: 'Officer firm formal direct calm-clear opening-curious, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: 'はい、研究室、今、帰る所です。', en: 'Yes — lab, now, returning.', style: 'University student warm soft sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'takeda_officer', jp: '夜の状況、結構、危ない時、ある。', en: 'Night situation — fairly, dangerous times exist.', style: 'Officer firm formal direct calm-warning advisory, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: '気を付けます。明るい道、選んでます。', en: 'Will be careful. Bright road — choosing.', style: 'University student warm soft sincere-warm reassuring-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '良し。仕事、大変だろうが、安全、一番。', en: 'Good. Work — hard probably, safety, first.', style: 'Officer firm formal direct advisory-warm caring-clear, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'ありがとうございます、気を付けます。', en: 'Thanks — will be careful.', style: 'University student warm soft sincere-warm grateful-respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'takeda_officer', jp: '注意して、帰れ。', en: 'Careful — go home.', style: 'Officer firm formal direct closing-brief warm-instructive, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 738 — hina + yumiko, music lesson (short)
  {
    id: 'conv_00738',
    context: 'Yumiko teaches Hina a simple song on the piano.',
    purpose: 'mother-child piano lesson',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['音楽', 'ピアノ', '一緒', '楽しい', '好き'],
    cast: ['hina_child', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、ピアノ、一緒に、弾こうね。', en: 'Hina-chan — piano, together, play.', style: 'Maternal warm gentle sincere-warm tender-warm inviting-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、ひな、ピアノ、大好き。', en: 'Yes — Hina, piano, love.', style: 'High child bright sincere enthusiastic-warm declaring-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: 'この音楽、ゆっくり、覚えようね。', en: 'This music — slowly, remember.', style: 'Maternal warm gentle sincere-warm teaching-warm patient, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: '楽しい。お母さんと、一緒、好き。', en: 'Fun. With mother — together, like.', style: 'High child bright sincere appreciative-warm tender-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: 'お母さんも、好きよ、ひなちゃん。', en: 'Mother also — likes, Hina-chan.', style: 'Maternal warm gentle sincere closing-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 739 — mrs_mori + naoko, local activity (medium)
  {
    id: 'conv_00739',
    context: 'Mrs. Mori invites Naoko to a local community activity.',
    purpose: 'neighbor-aunt community activity invitation',
    ambient: 'gate_afternoon',
    sound_effects: [],
    target_vocab: ['活動', '地域', '一緒', '元気', '大切'],
    cast: ['mrs_mori_neighbor', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '直子さん、地域の活動、参加しませんか？', en: 'Naoko-san — community activity, won\'t join?', style: 'Neighbor warm gentle sincere-warm cheerful-opening inviting, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-cheerful' },
      { speaker: 'naoko_aunt', jp: '何の活動、ですか？興味、あります。', en: 'What activity? Interest exists.', style: 'Aunt warm soft sincere-warm curious-warm engaging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'mrs_mori_neighbor', jp: '公園、お掃除。皆で、楽しく、する。', en: 'Park — cleaning. All — fun, do.', style: 'Neighbor warm gentle sincere-warm explaining-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'いいですね。一緒に、参加します。', en: 'Nice. Together — will join.', style: 'Aunt warm soft sincere-warm committed-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '元気な方が、増えて、嬉しい。', en: 'Energetic people — increase, happy.', style: 'Neighbor warm gentle sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '地域、繋がり、大切ですね。', en: 'Community connection — important.', style: 'Aunt warm soft sincere-warm philosophical-warm affirming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '土曜日、九時、お待ちしてます。', en: 'Saturday — nine, wait.', style: 'Neighbor warm gentle sincere closing-warm planning-bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-cheerful' }
    ]
  },
  // 740 — sho + hina, question game (short)
  {
    id: 'conv_00740',
    context: 'Sho and Hina play a simple question-and-answer game.',
    purpose: 'children Q&A play exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['質問', '答え', '一緒', '楽しい', '考える'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、ひな、質問、するね。', en: 'Sho — Hina, question, do.', style: 'High child bright sincere enthusiastic-warm playful-opening, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'いいよ。何でも、答えるよ。', en: 'Fine. Anything — answer.', style: 'Tiny six-year-old soft small sincere bright-warm confident-warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '好きな食べ物、何？答えて。', en: 'Favorite food — what? Answer.', style: 'High child bright sincere curious-warm playful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '考える…。カレー、好き。', en: 'Think… Curry — like.', style: 'Tiny six-year-old soft small sincere thinking-warm declaring-warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、また、遊ぼう。楽しい！', en: 'Together — again, play. Fun!', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 741 — tatsuya + sakura, nature (medium)
  {
    id: 'conv_00741',
    context: 'Sakura visits Tatsuya\'s country home and walks in the woods.',
    purpose: 'cousin-niece nature appreciation exchange',
    ambient: 'forest_morning',
    sound_effects: [],
    target_vocab: ['自然', '山', '川', '静か', '大切'],
    cast: ['tatsuya_country', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'たつや叔父さん、ここの自然、本当に綺麗。', en: 'Tatsuya-uncle — here\'s nature, truly beautiful.', style: 'Teen warm soft sincere appreciative-warm awe-opening, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'ここの山、川、昔から、変わらない。', en: 'Here\'s mountain, river — long ago, unchanged.', style: 'Country warm low sincere unhurried philosophical-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'sakura_teen', jp: '都会、いつも、うるさい。', en: 'City — always, noisy.', style: 'Teen warm soft sincere comparing-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '静かな時間、心、休まる。', en: 'Quiet time — heart, rests.', style: 'Country warm low sincere unhurried philosophical-deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'sakura_teen', jp: 'これ、文章に、書きたい。', en: 'This — text, want to write.', style: 'Teen warm soft sincere aspiring-warm reflective-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-aspiring' },
      { speaker: 'tatsuya_country', jp: '自然、大切に、伝えて。', en: 'Nature — preciously, convey.', style: 'Country warm low sincere unhurried encouraging-warm philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'はい、必ず。ありがとう、叔父さん。', en: 'Yes — surely. Thanks, uncle.', style: 'Teen warm soft sincere closing-warm committed-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 742 — kenji + aoi, café customer (medium)
  {
    id: 'conv_00742',
    context: 'Kenji visits Aoi\'s café and orders a regular drink.',
    purpose: 'salaryman-barista regular customer exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['普通', '注文', 'おすすめ', '一緒', '美味しい'],
    cast: ['kenji_office', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'あおいさん、おはようございます。', en: 'Aoi-san — good morning.', style: 'Salaryman warm formal sincere-warm professional-warm opening, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '健次さん、おはよう。普通の注文？', en: 'Kenji-san — morning. Usual order?', style: 'Barista warm soft sincere-warm bright-warm recognizing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'はい、コーヒー、お願いします。', en: 'Yes — coffee, please.', style: 'Salaryman warm formal sincere-warm ordering-warm polite, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '今日の、おすすめ、新しい豆。', en: 'Today\'s recommendation — new bean.', style: 'Barista warm soft sincere-warm informing-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'おお、試させてください。', en: 'Oh — please let try.', style: 'Salaryman warm soft sincere-warm engaged-warm curious, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'はい。きっと、美味しい、いつも一緒の味。', en: 'Yes. Surely — delicious, always familiar taste.', style: 'Barista warm soft sincere-warm warm-promise reassuring, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '楽しみ。ありがとう、いつも。', en: 'Looking forward. Thanks — always.', style: 'Salaryman warm soft sincere closing-warm grateful-warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 743 — daichi + mei, kitchen family (short)
  {
    id: 'conv_00743',
    context: 'Daichi cooks while Mei tends Hikari nearby.',
    purpose: 'young-couple kitchen family exchange',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['料理', '一緒', '美味しい', '楽しい', '家族'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'メイ、今夜の料理、新しいやつ、試すで。', en: 'Mei — tonight\'s cooking, new one, try.', style: 'Kansai warm bright sincere enthusiastic-warm casual-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'わあ、楽しみ。何作るの？', en: 'Wow — looking forward. What make?', style: 'Romantic warm soft sincere-warm curious-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: 'パスタや。家族みんなで、美味しく食べよう。', en: 'Pasta. Family all — deliciously eat.', style: 'Kansai warm bright sincere proposing-warm enthusiastic-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'ひかりも、一緒、嬉しい。', en: 'Hikari too — together, happy.', style: 'Romantic warm soft sincere-warm tender-warm including, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'これ、家族の幸せやな。', en: 'This — family\'s happiness.', style: 'Kansai warm bright sincere closing-warm philosophical-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_037 wrote', CONVERSATIONS.length, 'files');

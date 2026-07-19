import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_035)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 684 — sakura + mei, food planning (medium)
  {
    id: 'conv_00684',
    context: 'Sakura and Mei plan a family meal — discussing many dishes.',
    purpose: 'two-women food planning with diverse vocab',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['寿司', '天ぷら', '一緒', '料理', '美味しい'],
    cast: ['sakura_teen', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'さくらちゃん、今度のお祝い、何作る？', en: 'Sakura-chan, next celebration — what make?', style: 'Romantic warm soft sincere bright-warm planning-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: '寿司と、天ぷら、どう？皆、好きそう。', en: 'Sushi and tempura — how? Everyone likes.', style: 'Teen warm soft sincere bright-warm proposing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'いいね。あと、お味噌汁、必要かな。', en: 'Nice. And miso soup — needed?', style: 'Romantic warm gentle bright sincere-warm engaging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'うん、絶対。野菜も、たくさん、入れたい。', en: 'Yes, definitely. Vegetables — want lots.', style: 'Teen warm soft sincere committed-warm planning-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '果物、デザートに、いちご、用意しよう。', en: 'Fruit, for dessert — strawberries, prepare.', style: 'Romantic warm soft sincere bright-warm planning-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: '皆で、料理、一緒に、楽しい。', en: 'Cooking with all — fun.', style: 'Teen warm soft sincere closing-warm appreciating-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '美味しい、夕食、楽しみ。', en: 'Delicious dinner — looking forward.', style: 'Romantic warm soft sincere closing-warm bright-warm anticipating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 685 — riku + ren, sports event (medium)
  {
    id: 'conv_00685',
    context: 'Riku and Ren plan to watch a baseball/football event together.',
    purpose: 'two-male sports leisure planning',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['野球', '試合', '応援', '一緒', '楽しい'],
    cast: ['riku_teen', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'リク、来週の試合、一緒に、観に行かない？', en: 'Riku, next week\'s game — watch together?', style: 'University student warm bright sincere casual-warm planning-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: '行きたい！何試合？野球？サッカー？', en: 'Want to go! What game? Baseball? Soccer?', style: 'Teen warm bright sincere enthusiastic-warm engaging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: '野球。地元のチーム、応援したい。', en: 'Baseball. Local team — want to cheer.', style: 'University student warm soft sincere bright-warm sharing-enthusiasm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: 'いいね。子供たちも、連れていくか？', en: 'Nice. Bring children too?', style: 'Teen warm soft sincere engaging-warm planning-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、しょうも、ひなも、楽しめそう。', en: 'Yes, Sho and Hina — will enjoy.', style: 'University student warm bright sincere planning-warm including-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '皆で、応援、絶対、楽しい。', en: 'All — cheering — surely fun.', style: 'Teen warm soft sincere bright-warm closing-warm anticipating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'チケット、明日、買っとくね。', en: 'Tickets — will buy tomorrow.', style: 'University student warm soft sincere committed-warm planning-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 686 — daichi + yumiko, gardening (short)
  {
    id: 'conv_00686',
    context: 'Daichi visits, sees Yumiko in the garden, asks about plants.',
    purpose: 'small adult-elder gardening exchange',
    ambient: 'garden_afternoon',
    sound_effects: [],
    target_vocab: ['花', '畑', '一緒', '楽しい', '優しい'],
    cast: ['daichi_kansai', 'yumiko_mom'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'ゆみこさん、お庭、本当に、綺麗ですね。', en: 'Yumiko-san, garden — truly beautiful.', style: 'Kansai warm bright sincere appreciating-warm civil-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: 'ありがとう。最近、お花、増えてきた。', en: 'Thank you. Lately — flowers increased.', style: 'Maternal warm gentle bright sincere-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: 'うちの畑にも、花、植えたいな。何が、おすすめ？', en: 'In our field too — want to plant flowers. What\'s recommended?', style: 'Kansai warm bright sincere engaging-warm asking, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: '紫陽花とか、簡単で、綺麗。', en: 'Hydrangea — simple and beautiful.', style: 'Maternal warm gentle sincere-warm advising-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ありがとう。皆で、お庭、育てたい。', en: 'Thank you. All — grow garden.', style: 'Kansai warm soft sincere closing-warm grateful-warm extending, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 687 — kenji + ryosuke, news (medium)
  {
    id: 'conv_00687',
    context: 'Kenji and Ryosuke discuss economic news.',
    purpose: 'two-adult-men news exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['経済', '記事', '意見', '相談', '感謝'],
    cast: ['kenji_office', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '亮介さん、今朝の、経済記事、見ましたか。', en: 'Ryosuke-san, this morning\'s economic article — saw?', style: 'Salaryman warm formal sincere-warm professional-asking, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、見ました。物価、上がりそうですね。', en: 'Yes, saw. Prices — rising likely.', style: 'Father warm gentle sincere-warm thoughtful-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'kenji_office', jp: '心配で。家計にも、影響、出るかも。', en: 'Worried. Household — may affect.', style: 'Salaryman warm gentle sincere-warm practical-concerned, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '冷静に、見ていきましょう。皆で、相談しながら。', en: 'Calmly watch. With all — consulting.', style: 'Father warm gentle sincere-warm wise-warm collaborative, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'kenji_office', jp: '亮介さんの、意見、いつも、参考になります。', en: 'Ryosuke-san\'s opinion — always educational.', style: 'Salaryman warm soft sincere appreciating-warm grateful-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。お互い、考えていきましょう。', en: 'Same. Mutually — think.', style: 'Father warm gentle sincere closing-warm extending-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝しています、いつも。', en: 'Grateful, always.', style: 'Salaryman warm soft sincere closing-brief-warm deep, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 688 — sho + hina, drawing animals (short)
  {
    id: 'conv_00688',
    context: 'Sho and Hina draw animals together.',
    purpose: 'small sibling-cousin drawing',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['絵', '動物', '一緒', '楽しい', '可愛い'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、動物の絵、一緒に、描こう。', en: 'Sho, animal pictures — draw together.', style: 'High child bright sincere enthusiastic-warm inviting-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん。ぼく、犬、描く。', en: 'Yes. I — draw dog.', style: 'Tiny six-year-old soft small sincere bright-warm committing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'ひな、猫、描く。可愛い、白い猫。', en: 'Hina — draw cat. Cute, white cat.', style: 'High child bright sincere proud-warm specific-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '見せて。…可愛い！', en: 'Show. …Cute!', style: 'Tiny six-year-old soft small sincere bright-warm appreciating-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、描くの、楽しい。', en: 'Drawing together — fun.', style: 'High child bright sincere closing-warm happy-warm philosophical, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 689 — naoko + asuka, travel (medium)
  {
    id: 'conv_00689',
    context: 'Naoko and Asuka plan a small day trip together.',
    purpose: 'two-female travel planning',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['旅行', '一緒', '駅', '楽しい', '計画'],
    cast: ['naoko_aunt', 'asuka_teacher'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'あすかさん、来月、日帰り旅行、一緒に、どう？', en: 'Asuka-san, next month — day trip together?', style: 'Aunt warm gentle bright sincere-warm planning-inviting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'いいですね！どこ、行きたい？', en: 'Nice! Where to go?', style: 'Teacher warm gentle bright sincere-warm enthusiastic-engaging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: '紅葉、もう、綺麗な季節。山の方、いいかな。', en: 'Autumn leaves — pretty season. Mountains, maybe?', style: 'Aunt warm gentle bright sincere-warm proposing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: '賛成。電車で、ゆっくり、行きましょう。', en: 'Agreed. By train, slowly.', style: 'Teacher warm gentle sincere bright-warm planning-committing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: '駅で、お弁当も、買って。', en: 'At station — buy bento too.', style: 'Aunt warm gentle sincere bright-warm planning-detail, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: '楽しみ。日程、合わせましょう。', en: 'Looking forward. Match schedule.', style: 'Teacher warm gentle sincere closing-warm planning-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: '本当に、楽しみ。', en: 'Truly looking forward.', style: 'Aunt warm soft sincere closing-brief-warm anticipating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 690 — saito + sho (short)
  {
    id: 'conv_00690',
    context: 'Sho visits Saito with a sore throat.',
    purpose: 'small medical small ailment',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['喉', '痛い', '薬', '元気', 'ありがとう'],
    cast: ['saito_doctor', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'しょうくん、どこか、痛い？', en: 'Sho-kun, anywhere hurts?', style: 'Doctor warm professional gentle sincere-warm child-asking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'sho_child', jp: '喉が、ちょっと、痛い。', en: 'Throat — slightly hurts.', style: 'Tiny six-year-old soft small sincere honest-warm sharing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-honest' },
      { speaker: 'saito_doctor', jp: 'なるほど。お薬、出すね。三日で、元気になる。', en: 'I see. Will prescribe medicine. In three days, well.', style: 'Doctor warm professional gentle sincere-warm reassuring-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'sho_child', jp: 'ありがとう、先生。', en: 'Thank you, doctor.', style: 'Tiny six-year-old soft small sincere grateful-warm closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '無理しないで、ちゃんと、休んで。', en: 'No overdoing. Rest properly.', style: 'Doctor warm gentle sincere closing-warm care-extending, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 691 — tatsuya + ren, weather (medium)
  {
    id: 'conv_00691',
    context: 'Ren visits Tatsuya in country during winter. Both discuss weather and seasons.',
    purpose: 'small country guest weather chat',
    ambient: 'farm_porch_afternoon',
    sound_effects: [],
    target_vocab: ['冬', '寒い', '雪', '一緒', '元気'],
    cast: ['tatsuya_country', 'ren_uni'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: '達也さん、田舎の冬、本当に、寒いっすね。', en: 'Tatsuya-san, country winter — truly cold.', style: 'University student warm soft sincere appreciating-warm observing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'うん、雪、降る日もある。けど、空気、澄んでる。', en: 'Yes, snow days come. But — air clear.', style: 'Country gruff warm soft sincere appreciating-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当に。星も、よく見えるって、聞いた。', en: 'Truly. Stars too — heard see well.', style: 'University student warm soft sincere bright-warm engaged-curious, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '今晩、夜、晴れたら、見せるで。', en: 'Tonight, if clear — will show.', style: 'Country gruff warm bright sincere generous-warm extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: '楽しみ。冬の田舎、また、来たい。', en: 'Looking forward. Winter country — want come again.', style: 'University student warm soft sincere bright-warm anticipating-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'いつでも、ようこそ。家族で、ね。', en: 'Anytime, welcome. As family.', style: 'Country gruff warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 692 — aoi + mei, beverages (short)
  {
    id: 'conv_00692',
    context: 'Aoi and Mei meet at the café — discuss new tea blends.',
    purpose: 'small two-women drink discussion',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['お茶', 'コーヒー', '一緒', '楽しい', '美味しい'],
    cast: ['aoi_barista', 'mei_romantic'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'メイちゃん、新しいお茶、入れてみる？', en: 'Mei-chan, new tea — try?', style: 'Soft dreamy barista warm soft sincere bright-warm offering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'うん、いただきます。何の、お茶？', en: 'Yes, please. What kind of tea?', style: 'Romantic warm soft sincere bright-warm engaging-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'カモミールと、ハーブの、ブレンド。', en: 'Chamomile and herb blend.', style: 'Soft dreamy barista warm soft sincere bright-warm describing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'すごく、美味しい。落ち着く、香り。', en: 'Very delicious. Calming aroma.', style: 'Romantic warm soft sincere appreciating-warm tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '一緒に、ゆっくり、飲もう。', en: 'Together, slowly, drink.', style: 'Soft dreamy barista warm soft sincere closing-warm tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 693 — hiroshi_boss + naoko, music (medium)
  {
    id: 'conv_00693',
    context: 'Hiroshi-boss and Naoko discuss attending an upcoming concert.',
    purpose: 'ongoing cultured friendship planning',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['音楽', '一緒', '楽しい', '感動', '感謝'],
    cast: ['hiroshi_boss', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'ナオコさん、来月、ピアノコンサート、ご一緒、いかが？', en: 'Naoko-san, next month — piano concert together?', style: 'Boss measured warm soft sincere bright-warm civil-inviting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: 'ぜひ。クラシック、本当に、好き。', en: 'Please. Classical — truly love.', style: 'Aunt warm gentle bright sincere-warm enthusiastic-accepting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: 'チケット、もう、二枚、確保してます。', en: 'Tickets — already two secured.', style: 'Boss measured warm soft sincere bright-warm planning-confirmed, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: 'ありがとうございます、本当に。', en: 'Thank you, truly.', style: 'Aunt warm soft sincere appreciating-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '感動、また、ご一緒、できるの、嬉しい。', en: 'Being moved together again — happy.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm closing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '楽しみ、ずっと、ずっと。', en: 'Looking forward, always, always.', style: 'Aunt warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 694 — yuki + ryosuke, work tools (short)
  {
    id: 'conv_00694',
    context: 'Yuki and Ryosuke briefly discuss a new office tool.',
    purpose: 'small workplace quick check',
    ambient: 'office_break',
    sound_effects: [],
    target_vocab: ['仕事', '使い方', '簡単', '感謝', '一緒'],
    cast: ['yuki_office', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '亮介さん、新しいシステム、使い方、教えてもらえますか。', en: 'Ryosuke-san, new system — can teach usage?', style: 'Office woman warm formal sincere-warm respectful-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'もちろん。意外と、簡単ですよ。', en: 'Of course. Surprisingly easy.', style: 'Father warm gentle sincere-warm reassuring-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'ありがとうございます。一緒に、進めていきましょう。', en: 'Thank you. Together — let\'s progress.', style: 'Office woman warm soft sincere grateful-warm collaborative-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '何かあれば、いつでも。', en: 'If anything — anytime.', style: 'Father warm gentle sincere closing-warm extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '本当に、感謝してます。', en: 'Truly grateful.', style: 'Office woman warm soft sincere closing-brief-warm deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 695 — sho + sakura, school subjects (short)
  {
    id: 'conv_00695',
    context: 'Sakura helps Sho with social studies homework.',
    purpose: 'small cousin study help',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['学校', '勉強', '一緒', '頑張る', '面白い'],
    cast: ['sakura_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'お姉ちゃん、社会の勉強、難しい。', en: 'Big sister, social studies — hard.', style: 'Tiny six-year-old soft small sincere careful-warm sharing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-careful' },
      { speaker: 'sakura_teen', jp: 'どこ？地理？歴史？', en: 'Where? Geography? History?', style: 'Teen warm soft sincere bright-warm engaging-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '地理。地図、わかんない。', en: 'Geography. Map — don\'t get.', style: 'Tiny six-year-old soft small sincere honest-warm sharing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-honest' },
      { speaker: 'sakura_teen', jp: '面白いよ、地理。一緒に、見てみよう。', en: 'Interesting — geography. Look together.', style: 'Teen warm bright sincere enthusiastic-warm engaging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '頑張る。お姉ちゃんと、一緒なら。', en: 'Will try. With big sister.', style: 'Tiny six-year-old soft small sincere closing-warm committed-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 696 — daichi + tatsuya, machinery (medium)
  {
    id: 'conv_00696',
    context: 'Daichi visits Tatsuya, discussing new farm equipment.',
    purpose: 'two-male agriculture business detail',
    ambient: 'farm_porch_afternoon',
    sound_effects: [],
    target_vocab: ['畑', '機械', '事業', '一緒', '感謝'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '達也さん、新しい機械、入れる予定って、聞いた。', en: 'Tatsuya-san, new machine — plan to bring in, heard.', style: 'Kansai warm bright sincere engaged-warm asking-curious, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、最近の、機械、ようけ、便利になってる。', en: 'Yes, recent machines — quite convenient.', style: 'Country gruff warm soft sincere bright-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '事業、ようけ、拡大してきましたな。', en: 'Business — expanding quite.', style: 'Kansai warm soft sincere appreciating-warm acknowledging, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '皆さんのお陰や。本当に、感謝してる。', en: 'Thanks to all. Truly grateful.', style: 'Country gruff warm soft sincere humble-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'daichi_kansai', jp: 'こちらこそ。皆で、繁栄、繋いでいこな。', en: 'Same. All — let\'s connect prosperity.', style: 'Kansai warm soft sincere closing-warm extending-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '将来、子供たちにも、繋がっていったらええなあ。', en: 'Future — connecting to children too — good.', style: 'Country gruff warm soft sincere closing-warm philosophical-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 697 — mei + ren, baby supplies (medium)
  {
    id: 'conv_00697',
    context: 'Mei gives Ren baby supplies advice.',
    purpose: 'small adult new-parent advice',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '相談', '感謝', '幸せ'],
    cast: ['mei_romantic', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'メイさん、赤ちゃんの、何が、一番、必要？', en: 'Mei-san, baby — what most needed?', style: 'University student warm soft sincere careful-warm asking-respectful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'mei_romantic', jp: 'まず、オムツと、ミルク、ベビー服。', en: 'First — diapers, milk, baby clothes.', style: 'Romantic warm soft sincere bright-warm advising-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'なるほど。最初は、それで、いいんすね。', en: 'I see. At first — that\'s enough.', style: 'University student warm soft sincere absorbing-warm acknowledging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '皆、最初、似たような感じ。買いすぎないこと、大事。', en: 'Everyone — at first similar. Not overbuying important.', style: 'Romantic warm soft sincere wise-warm advising-warm gentle, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'ren_uni', jp: '相談、本当に、助かります。', en: 'Consultation — truly helps.', style: 'University student warm soft sincere closing-warm grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'いつでも、聞いて。皆で、応援してる。', en: 'Anytime ask. All — cheering.', style: 'Romantic warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 698 — riku + sho, school sports (short)
  {
    id: 'conv_00698',
    context: 'Riku watches Sho practice football.',
    purpose: 'small big-cousin watching child sport',
    ambient: 'park_afternoon',
    sound_effects: [],
    target_vocab: ['サッカー', '頑張る', '応援', '一緒', '楽しい'],
    cast: ['riku_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'リクお兄ちゃん、見てて。サッカー、頑張る。', en: 'Riku-onii-chan, watch. Soccer — will work hard.', style: 'Tiny six-year-old soft small sincere proud-warm asking-bright, the small real warmth audible, soft small warmth throughout delivery.', mood: 'enthusiastically-proud' },
      { speaker: 'riku_teen', jp: 'うん、見てる。応援するよ。', en: 'Yes, watching. Will cheer.', style: 'Teen warm bright sincere bright-warm supporting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '蹴った！見て！', en: 'Kicked! Look!', style: 'Tiny six-year-old soft small sincere excited-warm celebrating-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'riku_teen', jp: 'うわ、上手！立派！', en: 'Wow, good! Splendid!', style: 'Teen warm bright sincere celebrating-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'お兄ちゃんと、一緒、楽しい。', en: 'With brother — fun.', style: 'Tiny six-year-old soft small sincere closing-warm tender-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 699 — kenji + daichi, business (medium)
  {
    id: 'conv_00699',
    context: 'Kenji and Daichi plan a business meeting.',
    purpose: 'small workplace deep planning',
    ambient: 'meeting_room',
    sound_effects: [],
    target_vocab: ['会議', '一緒', '計画', '感謝', '頑張る'],
    cast: ['kenji_office', 'daichi_kansai'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'だいちさん、来週の会議、準備、進んでますか。', en: 'Daichi-san, next week\'s meeting — prep progressing?', style: 'Salaryman warm formal sincere-warm professional-checking, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'はい、資料、ほぼ、完成。明日、確認、お願いできますか。', en: 'Yes, materials almost done. Tomorrow — confirmation, please?', style: 'Kansai warm bright sincere professional-warm asking-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: 'もちろん。一緒に、進めていきましょう。', en: 'Of course. Together, progress.', style: 'Salaryman warm gentle sincere-warm collaborative-warm extending, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '田中さんと、いつも、頑張れて、ほんま、ありがたい。', en: 'With Tanaka-san — always working hard — truly grateful.', style: 'Kansai warm soft sincere deep-warm grateful-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ。これからも、ずっと。', en: 'Same. From now on too — always.', style: 'Salaryman warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '皆で、頑張って、いきましょう。', en: 'All — work hard, progress.', style: 'Kansai warm soft sincere closing-warm collective-warm extending, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 700 — yumiko + sachiko + naoko + hina + mei (5-speaker, long) — milestone 700
  {
    id: 'conv_00700',
    context: 'Five women gather around baby Hikari — multigenerational tea party.',
    purpose: 'five-female multigenerational milestone gathering',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '感謝', '幸せ', '優しい', '楽しい'],
    cast: ['sachiko_grandma', 'yumiko_mom', 'naoko_aunt', 'hina_child', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: '五人で、こうやって、集まれて、本当に、嬉しい。', en: 'Five gathered — truly happy.', style: 'Soft grandmother warm soft tender deep-warm gathering-opening-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: 'ひかりちゃんも、皆さんに、囲まれて、本当に、幸せ。', en: 'Hikari-chan — surrounded by all — truly happy.', style: 'Romantic warm soft tender sincere-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'お母さん、本当に、五代、繋がっていきますね。', en: 'Mother, truly — five generations connecting.', style: 'Maternal warm soft tender sincere-warm philosophical-warm wondering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'naoko_aunt', jp: '私たち、本当に、運がいい。皆で、繋がれて。', en: 'We — truly lucky. Connected as all.', style: 'Aunt warm soft sincere deep-warm philosophical-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hina_child', jp: 'ひな、お姉さんで、本当に、嬉しい。', en: 'Hina — being big sister — truly happy.', style: 'High child bright sincere proud-warm declaring-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-proud' },
      { speaker: 'sachiko_grandma', jp: 'お祖父ちゃん、絶対、見てる。', en: 'Grandpa — surely watching.', style: 'Soft grandmother warm soft tender sincere-warm comforting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'mei_romantic', jp: '指輪、ちゃんと、つけてます。お祖父様の、ね。', en: 'Ring — properly wearing. Grandpa\'s.', style: 'Romantic warm soft tender sincere-warm acknowledging-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: 'お父さん、絶対、嬉しい。お祖父様。', en: 'Father — surely happy. Grandpa.', style: 'Maternal warm soft tender sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'naoko_aunt', jp: 'こうやって、家族、ずっと、繋がっていけるって、本当に、ありがたい。', en: 'Family connecting forever — truly grateful.', style: 'Aunt warm soft sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hina_child', jp: 'ひかりちゃん、ひな、ちゃんと、お姉さん、する！', en: 'Hikari-chan — Hina — properly big sister!', style: 'High child bright sincere committed-warm declaring-tender, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-committed' },
      { speaker: 'sachiko_grandma', jp: 'ひな、本当に、優しい。家族の宝物。', en: 'Hina — truly kind. Family\'s treasure.', style: 'Soft grandmother warm soft tender deep-warm appreciating-warm closing-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: 'これからも、ずっと、皆で、家族。', en: 'From now on too — always, family as all.', style: 'Romantic warm soft tender sincere closing-warm extending-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '皆さんで、ね、感謝、本当に、皆さんに。', en: 'All together — gratitude — truly to all.', style: 'Maternal warm soft tender sincere closing-warm deep-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 701 — takeda + ryosuke (medium)
  {
    id: 'conv_00701',
    context: 'Takeda and Ryosuke discuss neighborhood traffic safety.',
    purpose: 'small civic ongoing collaboration',
    ambient: 'community_room',
    sound_effects: [],
    target_vocab: ['近所', '安全', '交通', '協力', '感謝'],
    cast: ['takeda_officer', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: '亮介さん、最近、近所、車のスピード、気になります。', en: 'Ryosuke-san, lately — neighborhood car speeds concerning.', style: 'Officer warm professional gentle sincere-warm civic-reporting, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-careful' },
      { speaker: 'ryosuke_dad', jp: 'うん、私も、感じてました。', en: 'Yes, I feel too.', style: 'Father warm gentle sincere acknowledging-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '近所、ご協力、お願いできれば、安心。', en: 'Neighborhood cooperation — would be reassuring.', style: 'Officer warm professional gentle sincere-warm requesting-warm collaborative, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-collaborative' },
      { speaker: 'ryosuke_dad', jp: 'もちろん。皆で、子供たちの、交通安全、見守りましょう。', en: 'Of course. All — child traffic safety — watch.', style: 'Father warm gentle sincere committed-warm extending-warm civic, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'takeda_officer', jp: '本当に、感謝しています、亮介さん。', en: 'Truly grateful, Ryosuke-san.', style: 'Officer warm professional gentle sincere closing-warm deep-grateful, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。協力、ずっと、ね。', en: 'Same. Cooperation, always.', style: 'Father warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 702 — asuka + ren, recipe (short)
  {
    id: 'conv_00702',
    context: 'Asuka shares a recipe with Ren over text.',
    purpose: 'small civil tip-sharing',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['料理', '一緒', 'おすすめ', 'ありがとう', '美味しい'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'れんさん、こないだ、お話したレシピ、持ってきました。', en: 'Ren-san, recipe we talked about — brought.', style: 'Teacher warm gentle bright sincere-warm offering-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'うわ、ありがとうございます。あおいに、教えたい。', en: 'Wow, thank you. Want to teach Aoi.', style: 'University student warm soft sincere bright-warm grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: '簡単で、美味しいですよ。', en: 'Simple and delicious.', style: 'Teacher warm gentle sincere bright-warm encouraging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: '皆で、一緒に、作ってみますね。', en: 'All — try together.', style: 'University student warm soft sincere closing-warm committed-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '感想、聞かせてくださいね。', en: 'Tell impressions.', style: 'Teacher warm gentle sincere closing-warm extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 703 — hiroshi_boss + kenji + ryosuke (3-speaker, medium)
  {
    id: 'conv_00703',
    context: 'Three men discuss finances and business markets.',
    purpose: 'three-male professional ongoing discussion',
    ambient: 'meeting_room',
    sound_effects: [],
    target_vocab: ['経済', '市場', '判断', '一緒', '将来'],
    cast: ['hiroshi_boss', 'kenji_office', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '皆さん、市場、本当に、難しい状況ですね。', en: 'Everyone, market — truly difficult situation.', style: 'Boss measured warm soft sincere serious-warm opening, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-serious' },
      { speaker: 'kenji_office', jp: 'はい、判断、慎重に、ですね。', en: 'Yes, judgment — carefully.', style: 'Salaryman warm formal sincere-warm careful-warm matching, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'ryosuke_dad', jp: '冷静に、長期的視点で、見ていきましょう。', en: 'Calmly — long-term view — watch.', style: 'Father warm gentle sincere-warm wise-warm advising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'hiroshi_boss', jp: 'お二人のご意見、本当に、参考になります。', en: 'Both opinions — truly educational.', style: 'Boss measured warm soft sincere appreciating-warm respectful, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'こちらこそ。お互い、相談しながら。', en: 'Same. Mutually consulting.', style: 'Salaryman warm formal sincere closing-warm extending-warm matching, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '将来、皆で、ちゃんと、考えていきたい。', en: 'Future — all — think properly.', style: 'Father warm soft sincere closing-warm philosophical-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_032)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 624 — daichi + ren, fishing trip (medium)
  {
    id: 'conv_00624',
    context: 'Daichi takes Ren fishing at the river — two new dads on a guy day.',
    purpose: 'two-male outdoor leisure',
    ambient: 'river_morning',
    sound_effects: [],
    target_vocab: ['釣り', '魚', '川', '一緒', '楽しい'],
    cast: ['daichi_kansai', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'れんくん、釣り、ちゃんと、初めてか？', en: 'Ren-kun, fishing — really first time?', style: 'Kansai warm bright sincere casual-warm asking, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'casually-bright' },
      { speaker: 'ren_uni', jp: 'はい、ほぼ。子供の頃、親父と、一度だけ。', en: 'Yes, almost. As kid, with dad — only once.', style: 'University student warm soft sincere honest-warm sharing-memory, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'daichi_kansai', jp: 'お父さん、思い出すなあ。', en: 'Remembering father — yeah.', style: 'Kansai warm soft tender sincere-warm acknowledging-philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'ren_uni', jp: 'うん、今日、ここに来たら、すごく、思い出した。', en: 'Yes, today coming here — really remembered.', style: 'University student warm soft tender sincere-warm reflective-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'daichi_kansai', jp: 'お父さんも、絶対、見てくれてる。釣り、楽しめ。', en: 'Father — surely watching. Enjoy fishing.', style: 'Kansai warm soft sincere bright-warm comforting-warm encouraging, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、頑張って、釣るぞ！', en: 'Yes, will try to catch hard!', style: 'University student warm bright sincere committed-warm energized, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '魚、釣れたら、家族に、自慢、できるな。', en: 'If catches — family bragging right.', style: 'Kansai warm bright laughing teasing-warm closing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 625 — sakura + mei, baby crafts (short)
  {
    id: 'conv_00625',
    context: 'Sakura helps Mei make baby clothes.',
    purpose: 'small adult women crafting together',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '作る', '楽しい', '幸せ'],
    cast: ['sakura_teen', 'mei_romantic'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'さくらちゃん、ひかりちゃんの服、一緒に、作ろう。', en: 'Sakura-chan, Hikari\'s clothes — let\'s make together.', style: 'Romantic warm soft sincere bright-warm crafting-inviting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'うん、嬉しい。何色がいい？', en: 'Yes, happy. What color?', style: 'Teen warm soft sincere bright-warm engaging-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '黄色、どうかな。優しい色で。', en: 'Yellow — how? Gentle color.', style: 'Romantic warm soft tender sincere-warm proposing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sakura_teen', jp: 'いい！ひかりちゃん、絶対、似合う。', en: 'Good! Hikari surely suits.', style: 'Teen warm bright sincere committing-warm celebrating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'こうやって、皆で、作るの、本当に、幸せ。', en: 'Making together like this — truly happy.', style: 'Romantic warm soft sincere closing-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 626 — kenji + ryosuke, train commute (medium)
  {
    id: 'conv_00626',
    context: 'Kenji and Ryosuke ride the same morning train. Quick adult talk.',
    purpose: 'small adult-male commute talk',
    ambient: 'train_morning',
    sound_effects: [],
    target_vocab: ['電車', '会社', '一緒', '同じ', '感謝'],
    cast: ['kenji_office', 'ryosuke_dad'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'あれ、亮介さん、また、同じ電車。', en: 'Hey, Ryosuke-san — same train again.', style: 'Salaryman warm formal sincere bright-warm recognition-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: 'おはよう。最近、よく、お会いしますね。', en: 'Morning. Lately — meeting often.', style: 'Father warm gentle sincere bright-warm civil-acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: 'うちも、新しい部署、こちら方面でして。', en: 'Our new section — in this direction.', style: 'Salaryman warm gentle sincere-warm professional-sharing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'なるほど。電車、混んでて、お疲れですね。', en: 'I see. Train crowded — tiring.', style: 'Father warm gentle sincere acknowledging-warm sympathetic-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '亮介さんと、お会いできて、朝、嬉しい気持ち。', en: 'Meeting Ryosuke-san — morning happy feeling.', style: 'Salaryman warm gentle sincere-warm appreciative-warm closing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。お互い、頑張りましょう、今日も。', en: 'Same. Mutually — work hard today too.', style: 'Father warm gentle sincere closing-warm extending-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'はい、頑張ります。お先に、失礼します。', en: 'Yes, will. Excuse me first.', style: 'Salaryman warm formal sincere closing-warm formal-departing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 627 — sho + hina, science homework (short)
  {
    id: 'conv_00627',
    context: 'Hina helps Sho with a science assignment about plants.',
    purpose: 'small sibling-like cousin study-help',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['宿題', '植物', '一緒', '面白い', '頑張る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、植物の宿題、わからない。', en: 'Hina, plant homework — don\'t get.', style: 'Tiny six-year-old soft small sincere careful-warm asking-help, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-careful' },
      { speaker: 'hina_child', jp: 'ふふ、ひなが、教えてあげる。', en: 'Hehe, Hina teaches.', style: 'High child bright sincere proud-warm offering-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'お姉ちゃんになって、すごく、頼もしい。', en: 'Becoming big sis — really dependable.', style: 'Tiny six-year-old soft small sincere admiring-warm tender-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'うん。植物って、面白いよ。一緒に、調べよう。', en: 'Yes. Plants — interesting. Let\'s research together.', style: 'High child bright sincere enthusiastic-warm bright-collaborative, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-warm' },
      { speaker: 'sho_child', jp: 'うん、頑張る。', en: 'Yes, will try.', style: 'Tiny six-year-old soft small sincere committed-warm closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 628 — yumiko + aoi, prenatal advice (medium)
  {
    id: 'conv_00628',
    context: 'Yumiko gives Aoi prenatal advice — both wives in extended family.',
    purpose: 'two-female prenatal advice across generations',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['妊娠', '体調', '相談', '優しい', '感謝'],
    cast: ['yumiko_mom', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'ゆみこさん、ちょっと、相談、いいですか。', en: 'Yumiko-san, can I consult a bit?', style: 'Soft dreamy barista warm soft sincere careful-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'yumiko_mom', jp: 'もちろん、何でも。', en: 'Of course, anything.', style: 'Maternal warm gentle bright sincere-warm generous-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'つわり、ひどくて。何か、楽になる、コツ、ありますか。', en: 'Morning sickness — bad. Any tips for easier?', style: 'Soft dreamy barista warm soft sincere vulnerable-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-vulnerable' },
      { speaker: 'yumiko_mom', jp: '私の時は、生姜の飴、よく舐めてた。少しずつ、何回もね。', en: 'When mine — ginger candy often. Bit by bit, multiple times.', style: 'Maternal warm gentle sincere-warm wise-warm sharing-tips, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'aoi_barista', jp: 'なるほど、試してみます。本当に、感謝してます。', en: 'I see, will try. Truly grateful.', style: 'Soft dreamy barista warm soft sincere bright-warm grateful-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'いつでも、お話聞きますよ。一人で、抱えないで。', en: 'Always — will listen. Don\'t carry alone.', style: 'Maternal warm soft sincere generous-warm extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'aoi_barista', jp: '皆さんに、囲まれていて、本当に、ありがたい。', en: 'Surrounded by all — truly grateful.', style: 'Soft dreamy barista warm soft sincere deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 629 — saito + yumiko (short)
  {
    id: 'conv_00629',
    context: 'Yumiko visits Saito briefly for routine. Small update.',
    purpose: 'small ongoing doctor-patient familiarity',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['元気', '家族', '一緒', '感謝', 'ありがとう'],
    cast: ['saito_doctor', 'yumiko_mom'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'ゆみこさん、お元気そうで、安心。', en: 'Yumiko-san, looking well — relieved.', style: 'Doctor warm professional gentle bright sincere-warm reporting, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'yumiko_mom', jp: 'ありがとうございます。家族、皆、元気で、本当に。', en: 'Thank you. Family — all well, truly.', style: 'Maternal warm soft sincere bright-warm grateful-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'ひかりちゃんも、すくすく育ってるって、メイさんから。', en: 'Hikari-chan — growing well, from Mei-san.', style: 'Doctor warm professional gentle bright sincere-warm acknowledging-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '本当に、嬉しいニュースばかり。', en: 'Truly — only happy news.', style: 'Maternal warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: '皆さんで、ずっと、ご家族、繋がっていけますね。', en: 'All — staying family forever.', style: 'Doctor warm professional gentle sincere closing-warm philosophical-warm extending, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 630 — tatsuya + daichi, harvest (medium)
  {
    id: 'conv_00630',
    context: 'Tatsuya and Daichi work together at the farm for harvest.',
    purpose: 'two-male rural work',
    ambient: 'farm_morning',
    sound_effects: [],
    target_vocab: ['畑', '一緒', '感謝', '家族', '楽しい'],
    cast: ['tatsuya_country', 'daichi_kansai'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'だいち、今日、手伝ってくれて、ほんま、助かるわ。', en: 'Daichi, helping today — truly saves.', style: 'Country gruff warm soft sincere grateful-warm rural-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'こちらこそ。田舎の畑、たまには、ええもんやで。', en: 'Same. Country field — sometimes good.', style: 'Kansai warm bright sincere appreciating-warm matching-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'ひかりちゃんも、いつか、ここで、遊んでほしいなあ。', en: 'Hikari too — someday, want her play here.', style: 'Country gruff warm soft tender sincere-warm wishing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'daichi_kansai', jp: 'うん、絶対、連れてくる。田舎、好きになってほしい。', en: 'Yes, definitely bring. Want her love country.', style: 'Kansai warm soft sincere committed-warm extending-warm philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '家族、ずっと、繋がっていけるって、嬉しい。', en: 'Family staying connected — happy.', style: 'Country gruff warm soft sincere closing-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'ほんま、達也さんが、いてくれて、ありがたい。', en: 'Truly — Tatsuya-san being there — grateful.', style: 'Kansai warm soft sincere closing-warm grateful-deep-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ。一緒に、頑張ろな。', en: 'Same. Together, work hard.', style: 'Country gruff warm soft sincere closing-warm reciprocal-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 631 — hiroshi_boss + naoko, theater (medium)
  {
    id: 'conv_00631',
    context: 'Hiroshi-boss and Naoko attend a play together. Refined cultural friendship.',
    purpose: 'small civilized couple-like friendship at theater',
    ambient: 'theater_evening',
    sound_effects: [],
    target_vocab: ['劇場', '舞台', '感動', '一緒', '楽しい'],
    cast: ['hiroshi_boss', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: '田中さん、お久しぶり。今日は、劇場、楽しみ。', en: 'Tanaka-san, long time. Today\'s theater — looking forward.', style: 'Aunt warm gentle bright sincere-warm anticipating-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: 'ナオコさんと、こうやって、舞台、観られるの、本当に、嬉しい。', en: 'Watching stage with Naoko-san like this — truly happy.', style: 'Boss measured warm soft sincere bright-warm appreciating-warm civil, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: '今夜の、演出、評判いいらしいですね。', en: 'Tonight\'s production — well-reputed.', style: 'Aunt warm gentle bright sincere-warm civil-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: 'はい、私も、ずっと、観たかった作品。', en: 'Yes, I — long wanted to see.', style: 'Boss measured warm soft sincere bright-warm matching-warm acknowledging, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '感動、できるといいですね。', en: 'Hope we\'re moved.', style: 'Aunt warm gentle sincere bright-warm closing-anticipating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'こちらこそ。今夜も、本当に、楽しみです。', en: 'Same. Tonight too — truly looking forward.', style: 'Boss measured warm soft sincere closing-warm matching-warm civil, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 632 — riku + asuka (short)
  {
    id: 'conv_00632',
    context: 'Riku, now a working adult, returns to his former school for a brief visit.',
    purpose: 'former student returning to mentor',
    ambient: 'school_corridor',
    sound_effects: [],
    target_vocab: ['学校', '先生', '感謝', '頑張る', '一緒'],
    cast: ['asuka_teacher', 'riku_teen'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'リクさん！久しぶり、ようこそ。', en: 'Riku-san! Long time, welcome.', style: 'Teacher warm bright sincere overwhelmed-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'riku_teen', jp: '先生、お元気そうで、嬉しい。', en: 'Sensei, glad you look well.', style: 'Teen warm soft sincere bright-warm formal-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: '本当に、立派になって。お仕事、楽しいですか。', en: 'Truly become splendid. Work fun?', style: 'Teacher warm gentle sincere bright-warm asking-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'おかげさまで。先生のお陰で、ここまで来れました。', en: 'Thanks to all. Thanks to sensei — came this far.', style: 'Teen warm soft sincere deep-warm grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'これからも、頑張ってね。応援、ずっと、してる。', en: 'From now on too, work hard. Cheering forever.', style: 'Teacher warm gentle sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 633 — naoko + sachiko + yumiko + mrs_mori (4-speaker, long)
  {
    id: 'conv_00633',
    context: 'Four older women — Sachiko, Yumiko, Naoko, Mrs. Mori — share an afternoon together.',
    purpose: 'four-female older community gathering',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '感謝', '友達', '幸せ'],
    cast: ['sachiko_grandma', 'yumiko_mom', 'naoko_aunt', 'mrs_mori_neighbor'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: '森さん、いつもありがとう、来てくれて。', en: 'Mori-san, always thank you for coming.', style: 'Soft grandmother warm soft sincere bright-warm welcoming-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'こちらこそ。皆さん、お変わりなく？', en: 'Same. All — unchanged?', style: 'Neighbor warm gentle bright sincere-warm civic-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: 'お陰様で、皆、元気。ひかりちゃんが、家族、明るくしてくれてる。', en: 'Thanks to all, everyone well. Hikari-chan brightens family.', style: 'Maternal warm soft sincere bright-warm reflective-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: 'ひかりちゃん、皆の癒し、ですよね。', en: 'Hikari-chan — all\'s healing, right.', style: 'Aunt warm gentle sincere bright-warm philosophical-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mrs_mori_neighbor', jp: 'うちの孫も、もう、すっかり大きくなって。', en: 'My grandchildren — already so grown.', style: 'Neighbor warm soft sincere reflective-warm philosophical-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '時間って、本当に、早いですね。', en: 'Time — truly fast.', style: 'Soft grandmother warm soft sincere deep-warm philosophical-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '皆さんと、こうやって、ご縁、続けていけるの、本当に、嬉しい。', en: 'Continuing connection with all like this — truly happy.', style: 'Maternal warm soft sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'お友達がいてくれるって、本当に、人生の宝物。', en: 'Having friends — truly life\'s treasure.', style: 'Aunt warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mrs_mori_neighbor', jp: '本当に。これからも、ずっと、皆さんで、お話しましょう。', en: 'Truly. From now on too, all — let\'s talk.', style: 'Neighbor warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'こうやって、四人で、座ってる時間、本当に、幸せ。', en: 'Sitting like this as four — truly happy.', style: 'Soft grandmother warm soft sincere deep-warm closing-philosophical-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: 'お父さんも、絶対、見てる。', en: 'Father — surely watching.', style: 'Maternal warm soft tender sincere-warm comforting-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'naoko_aunt', jp: '皆で、ね。ずっと。', en: 'All, forever.', style: 'Aunt warm soft sincere closing-brief-warm deep-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mrs_mori_neighbor', jp: 'こんな歳でも、こうやって、繋がっていける、ありがたい。', en: 'Even at this age — connecting like this — grateful.', style: 'Neighbor warm soft sincere closing-warm deep-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 634 — mei + ren, two parents-to-be/are (short)
  {
    id: 'conv_00634',
    context: 'Mei and Ren — Mei mother, Ren expecting — share parallel-stage moment.',
    purpose: 'small parallel-parent supportive moment',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '家族', '一緒', '感謝', '幸せ'],
    cast: ['mei_romantic', 'ren_uni'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'れんさん、あおいさん、お元気ですか。', en: 'Ren-san, how\'s Aoi-san?', style: 'Romantic warm soft sincere bright-warm asking-care, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'お陰様で、安定してます。ひかりちゃんは？', en: 'Thanks to all, stable. Hikari-chan?', style: 'University student warm soft sincere bright-warm reciprocal-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'すくすく育ってます。皆さんに、見守られて、本当に、感謝してる。', en: 'Growing well. Watched by all — truly grateful.', style: 'Romantic warm soft sincere deep-warm grateful-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'こうやって、皆で、新しい家族、迎えていけるの、本当に、嬉しい。', en: 'All welcoming new family like this — truly happy.', style: 'University student warm soft sincere closing-warm philosophical-warm deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: '本当に、家族、増えていって、幸せ。', en: 'Truly, family growing — happy.', style: 'Romantic warm soft sincere closing-warm philosophical-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 635 — sakura + yumiko (medium)
  {
    id: 'conv_00635',
    context: 'Sakura before her wedding — Yumiko gives last bit of warmth.',
    purpose: 'older woman warming bride',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['結婚式', '緊張', '一緒', '幸せ', '感謝'],
    cast: ['yumiko_mom', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'ゆみこおばさん、もうすぐ、結婚式。', en: 'Yumiko-obasan, wedding soon.', style: 'Teen warm soft tender sincere-warm milestone-disclosing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: 'さくらちゃん、本当に、おめでとう。緊張、してる？', en: 'Sakura-chan, truly congrats. Nervous?', style: 'Maternal warm gentle bright sincere-warm celebrating-warm caring-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'はい、すごく。', en: 'Yes, very.', style: 'Teen warm soft sincere brief-warm vulnerable-honest, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-vulnerable' },
      { speaker: 'yumiko_mom', jp: '皆、最初は、そう。でも、ちゃんと、なる。', en: 'Everyone at first. But — will be fine.', style: 'Maternal warm gentle sincere-warm normalizing-warm reassuring, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'ゆみこおばさんも、緊張、してましたか。', en: 'Yumiko-obasan too — nervous?', style: 'Teen warm soft sincere asking-warm curious-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'yumiko_mom', jp: 'もちろん。手、震えてた。亮介さんと、一緒で、なんとか、立てた。', en: 'Of course. Hands shaking. With Ryosuke-san — somehow stood.', style: 'Maternal warm soft tender sincere-warm sharing-experience-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sakura_teen', jp: 'ありがとう。少し、楽になった。', en: 'Thank you. Slightly easier.', style: 'Teen warm soft sincere closing-warm grateful-relieved, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'お互いを、信じてれば、絶対、大丈夫。', en: 'Believing each other — definitely fine.', style: 'Maternal warm soft sincere closing-warm wise-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' }
    ]
  },
  // 636 — takeda + kenji + daichi (3-speaker, medium)
  {
    id: 'conv_00636',
    context: 'Civic safety community meeting. Officer Takeda with Kenji and Daichi from the business community.',
    purpose: 'three-civic-business cooperation meeting',
    ambient: 'community_room',
    sound_effects: [],
    target_vocab: ['近所', '安全', '協力', '一緒', '感謝'],
    cast: ['takeda_officer', 'kenji_office', 'daichi_kansai'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: '皆さん、お時間、ありがとうございます。', en: 'Everyone, thank you for time.', style: 'Officer warm professional gentle sincere-warm civic-opening, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'kenji_office', jp: 'こちらこそ。近所の安全、本当に、大事。', en: 'Same. Neighborhood safety — truly important.', style: 'Salaryman warm formal sincere-warm civic-acknowledging, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'うちの会社も、ちゃんと、協力させていただきます。', en: 'Our company too — will properly cooperate.', style: 'Kansai warm formal sincere committed-warm civic-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'takeda_officer', jp: '本当に、感謝しています。皆さんで、地域、守っていきましょう。', en: 'Truly grateful. All — protect community.', style: 'Officer warm professional gentle sincere-warm collective-warm closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '何か、お役に立てれば。', en: 'If anything I can help.', style: 'Salaryman warm formal sincere generous-warm extending-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'daichi_kansai', jp: 'こうやって、皆で、地域、繋がっていけるの、ええなあ。', en: 'Community connecting like this — good.', style: 'Kansai warm soft sincere closing-warm philosophical-warm appreciating, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 637 — hina + ren (short)
  {
    id: 'conv_00637',
    context: 'Hina visits Ren and Aoi to drop off something.',
    purpose: 'small cousin-elder ongoing warmth',
    ambient: 'apartment_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '優しい', '感謝', '楽しい'],
    cast: ['ren_uni', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'お兄ちゃん、これ、あおいさんの赤ちゃんに。', en: 'Brother, this — for Aoi-san\'s baby.', style: 'High child bright sincere enthusiastic-warm offering, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: 'うわ、ありがとう、ひな。あおい、絶対、喜ぶ。', en: 'Wow, thank you, Hina. Aoi surely happy.', style: 'University student warm soft sincere touched-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'ひな、お姉さん、ちゃんと、している！', en: 'Hina — properly being big sister!', style: 'High child bright sincere proud-warm declaring-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-proud' },
      { speaker: 'ren_uni', jp: 'お、立派。本当に、優しいね。', en: 'Oh, splendid. Truly kind.', style: 'University student warm soft sincere appreciating-warm tender-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'お兄ちゃんと、あおいさんの、赤ちゃんも、一緒に、楽しみ！', en: 'Brother and Aoi-san\'s baby too — looking forward together!', style: 'High child bright sincere enthusiastic-warm extending-closing, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 638 — yuki + saito (medium)
  {
    id: 'conv_00638',
    context: 'Yuki visits Saito for a mental-health check. Adult professional under work stress.',
    purpose: 'adult patient mental-health consultation',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['仕事', '不安', '相談', '生活', '感謝'],
    cast: ['saito_doctor', 'yuki_office'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '佐藤さん、最近、お疲れですか。', en: 'Sato-san, lately tired?', style: 'Doctor warm professional gentle sincere-warm careful-asking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-careful' },
      { speaker: 'yuki_office', jp: '正直、ちょっと、不安、増えてて。', en: 'Honestly, slightly — anxiety increased.', style: 'Office woman warm soft sincere honest-warm vulnerable-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'saito_doctor', jp: '責任、重くなってますもんね。', en: 'Responsibility — heavier, right.', style: 'Doctor warm professional gentle sincere-warm acknowledging-warm care, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'お休みも、ちゃんと、取れてない、気がして。', en: 'Rest — feel not properly taken.', style: 'Office woman warm soft sincere honest-warm vulnerable-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'saito_doctor', jp: '無理しないことが、一番。少しずつ、生活、整えていきましょう。', en: 'No overdoing — best. Bit by bit, arrange life.', style: 'Doctor warm gentle sincere wise-warm advising-warm closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'yuki_office', jp: 'はい、ありがとうございます。相談、本当に、助かります。', en: 'Yes, thank you. Consultation — truly helps.', style: 'Office woman warm soft sincere closing-warm deep-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: '何かあれば、いつでも、来てください。', en: 'If anything — come anytime.', style: 'Doctor warm professional gentle sincere closing-warm extending-care, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 639 — daichi + mei + sho + hina (4-speaker, medium)
  {
    id: 'conv_00639',
    context: 'Daichi and Mei bring baby Hikari to visit. Sho and Hina play with the baby.',
    purpose: 'four-family playtime around new baby',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '可愛い', '優しい', '楽しい'],
    cast: ['daichi_kansai', 'mei_romantic', 'hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ひな、しょう、ひかりちゃん、来たよ。', en: 'Hina, Sho — Hikari-chan came.', style: 'Romantic warm soft sincere bright-warm gentle-announcing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hina_child', jp: 'やったー！ひかりちゃん、可愛い！', en: 'Yay! Hikari-chan — cute!', style: 'High child bright sincere enthusiastic-warm celebrating-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'こんにちは、ひかりちゃん。', en: 'Hello, Hikari-chan.', style: 'Tiny six-year-old soft small sincere polite-warm greeting-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: 'ひかり、いっぱい、お姉さん、お兄さん、おるな。', en: 'Hikari — lots of big sisters and brothers.', style: 'Kansai warm soft tender bright-warm philosophical-warm sharing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'hina_child', jp: 'ひな、抱っこ、上手だよ！', en: 'Hina — good at holding!', style: 'High child bright sincere proud-warm offering-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-proud' },
      { speaker: 'mei_romantic', jp: 'ふふ、お願いね、優しく。', en: 'Hehe, please, gently.', style: 'Romantic warm soft laughing tender-warm trusting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sho_child', jp: '一緒に、優しく、見るね。', en: 'Together, gently watch.', style: 'Tiny six-year-old soft small sincere tender-warm closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 640 — asuka + ryosuke + yumiko (3-speaker, medium)
  {
    id: 'conv_00640',
    context: 'Three adults — Asuka and Yumiko old friends, Ryosuke joins them.',
    purpose: 'three-adult friendship gathering',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '友達', '感謝', '家族', '楽しい'],
    cast: ['asuka_teacher', 'ryosuke_dad', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'ゆみこ、亮介さん、こうやって、三人で、嬉しい。', en: 'Yumiko, Ryosuke-san — three of us, happy.', style: 'Teacher warm gentle bright sincere-warm welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: 'こちらこそ。あすかさんを、亮介に、紹介できて。', en: 'Same. Introducing Asuka-san to Ryosuke.', style: 'Maternal warm gentle bright sincere-warm bridging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: 'あすかさんが、ずっと、子供たちの先生、本当に、感謝してます。', en: 'Asuka-san — always children\'s teacher — truly grateful.', style: 'Father warm soft sincere deep-warm grateful-warm civil, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。皆さんと、こうやって、繋がっていけて、本当に、嬉しい。', en: 'Same. Connecting with all like this — truly happy.', style: 'Teacher warm gentle sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'これからも、ずっと、お友達でいたい。', en: 'From now on too — want to stay friends.', style: 'Maternal warm soft sincere closing-warm extending-warm wishing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'こうやって、繋いでもらえる関係、本当に、ありがたい。', en: 'Connected like this — truly grateful.', style: 'Father warm soft sincere closing-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 641 — sho + tatsuya (short)
  {
    id: 'conv_00641',
    context: 'Sho visits the countryside with his cousin. Meets Tatsuya again.',
    purpose: 'small child-rural-uncle ongoing warmth',
    ambient: 'farm_porch_afternoon',
    sound_effects: [],
    target_vocab: ['田舎', '野菜', 'おじさん', '優しい', 'ありがとう'],
    cast: ['tatsuya_country', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'しょう、ようこそ、田舎、また、来てくれて。', en: 'Sho, welcome, country — coming again.', style: 'Country gruff warm soft bright sincere-warm welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'おじさん、お元気そうで。', en: 'Uncle, looking well.', style: 'Tiny six-year-old soft small sincere polite-warm greeting, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '今日、野菜、たくさん、持って帰り。', en: 'Today, take lots of veggies home.', style: 'Country gruff warm bright sincere generous-warm rural-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'ありがとうございます。お母さん、喜ぶ。', en: 'Thank you. Mother — happy.', style: 'Tiny six-year-old soft small sincere grateful-warm appreciating-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'いつでも、田舎、来てな。家族、ずっと、繋がっていけたら、ええな。', en: 'Anytime — come country. Family staying connected — good.', style: 'Country gruff warm soft sincere closing-warm philosophical-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 642 — kenji + yuki + hiroshi_boss + ryosuke (4-speaker, long)
  {
    id: 'conv_00642',
    context: 'Four colleagues gather — Kenji + Yuki active; Hiroshi-boss retired; Ryosuke retired. Workplace family reunion.',
    purpose: 'workplace-family multi-stage gathering',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['仕事', '一緒', '感謝', '将来', '友達', '幸せ'],
    cast: ['hiroshi_boss', 'ryosuke_dad', 'kenji_office', 'yuki_office'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '皆さん、お久しぶり。集まれて、本当に、嬉しい。', en: 'Everyone, long time. Gathering — truly happy.', style: 'Boss measured warm soft sincere bright-warm gathering-opening, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '部長、お元気そうで、本当に、安心しました。', en: 'Boss, looking well — truly relieved.', style: 'Salaryman warm formal sincere bright-warm respectful-acknowledging, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '私も。お会いできるの、本当に、嬉しい。', en: 'Me too. Meeting — truly happy.', style: 'Office woman warm bright sincere matching-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: 'お互い、退職しても、こうやって、繋がっていけるって、ありがたい。', en: 'Even retired — connecting like this — grateful.', style: 'Father warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '会社の方は、皆さん、頑張ってますね。', en: 'Company — all working hard.', style: 'Boss measured warm soft sincere bright-warm engaged-asking-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: 'はい、佐藤さん、リーダーで、頼もしい。', en: 'Yes, Sato-san as leader — dependable.', style: 'Salaryman warm formal sincere bright-warm appreciating-warm reciprocal, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yuki_office', jp: '田中部長や、亮介さんから、ずっと、教わったこと、生かせて、本当に、感謝してます。', en: 'From Tanaka-bucho, Ryosuke-san — what learned, putting to use — truly grateful.', style: 'Office woman warm soft sincere deep-warm grateful-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '佐藤さんも、ずっと、立派になって。本当に、嬉しい。', en: 'Sato-san — long become splendid. Truly happy.', style: 'Boss measured warm soft sincere deep-warm appreciating-warm tender, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'お互い、人生の節目、ちゃんと、お祝いし合えるって、本当に、ありがたい。', en: 'Mutually — celebrating life milestones properly — truly grateful.', style: 'Father warm soft sincere deep-warm philosophical-warm closing-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'これからも、ずっと、皆さんで。', en: 'From now on too — all together.', style: 'Salaryman warm formal sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '乾杯しましょう。皆さんへの、感謝に。', en: 'Let\'s cheers. To gratitude for all.', style: 'Office woman warm soft sincere closing-warm rallying-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '乾杯！皆さんに、本当に、感謝しています。', en: 'Cheers! Truly grateful to all.', style: 'Boss measured warm bright sincere closing-warm celebrating-deep-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 643 — aoi + sachiko (medium)
  {
    id: 'conv_00643',
    context: 'Pregnant Aoi visits widowed Sachiko alone. Two-women generational warmth.',
    purpose: 'pregnant young woman visiting elder widow',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['妊娠', '一緒', '感謝', '優しい', '一人'],
    cast: ['sachiko_grandma', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'お祖母様、また、お邪魔します。', en: 'Grandmother, again, excuse me.', style: 'Soft dreamy barista warm soft formal sincere-warm civil-visiting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'あおいさん、いつでも、来てね。お体、どうですか。', en: 'Aoi-san, come anytime. Body — how?', style: 'Soft grandmother warm gentle bright sincere-warm welcoming-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'おかげさまで、安定してきました。', en: 'Thanks to all — stable.', style: 'Soft dreamy barista warm soft sincere bright-warm reporting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sachiko_grandma', jp: 'よかった。一人で、無理しないでね。', en: 'Glad. Don\'t push alone.', style: 'Soft grandmother warm soft sincere caring-warm protective-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'お祖母様の、優しい言葉、本当に、支えになる。', en: 'Grandmother\'s kind words — truly become support.', style: 'Soft dreamy barista warm soft sincere deep-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'こちらこそ。あおいさんが、来てくれるの、本当に、嬉しい。', en: 'Same. Aoi-san coming — truly happy.', style: 'Soft grandmother warm soft sincere closing-warm appreciating-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '感謝してます。これからも、ずっと、ご縁、お願いします。', en: 'Grateful. From now on too, please.', style: 'Soft dreamy barista warm soft sincere closing-warm deep-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

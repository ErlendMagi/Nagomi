import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_044)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 866 — hiroshi_boss + kenji, data analysis (medium)
  {
    id: 'conv_00866',
    context: 'Hiroshi reviews Kenji\'s sales data report.',
    purpose: 'boss-subordinate data-analysis exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['データ', '処理', '率', '一緒', '考える'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、データ、見せろ。', en: 'Kenji — data, show.', style: 'Boss firm formal direct authoritative demanding-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、処理、完了しました。', en: 'Yes — processing, completed.', style: 'Salaryman warm formal sincere-warm professional-warm reporting, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '売上の率、上がってるな。', en: 'Sales rate — rising.', style: 'Boss firm formal direct affirming-warm clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '前月比、十パーセント、増です。', en: 'Compared to last month — ten percent, increase.', style: 'Salaryman warm formal sincere-warm reporting-warm precise, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '次の対策、考えろ。', en: 'Next response — think.', style: 'Boss firm formal direct authoritative instructive-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'チームと、一緒に、立てます。', en: 'Team — together, set.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '頼んだぞ。', en: 'Counting on.', style: 'Boss firm formal direct closing-brief trusting-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 867 — sho + hina, weather/state (short)
  {
    id: 'conv_00867',
    context: 'Sho and Hina describe their feelings of the day.',
    purpose: 'children mood-state exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['状態', '一緒', '楽しい', '元気', '気持ち'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、今日の状態、どう？', en: 'Sho — today\'s state, how?', style: 'High child bright sincere asking-opening curious-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '元気いっぱい、ぼく。', en: 'Energetic — full, I.', style: 'Tiny six-year-old soft small sincere bright-warm declaring, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'ひなも、楽しい気持ち。', en: 'Hina too — fun feeling.', style: 'High child bright sincere matching-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、遊ぼう、ずっと。', en: 'Together — play, always.', style: 'Tiny six-year-old soft small sincere inviting-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'うん、絶対！', en: 'Yes — surely!', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 868 — asuka + sakura, classroom lesson (medium)
  {
    id: 'conv_00868',
    context: 'Asuka teaches Sakura about analyzing poetry in class.',
    purpose: 'teacher-student in-class lesson exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['授業', '内容', '表現', '一緒', '考える'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、今日の授業、難しかった？', en: 'Sakura-san — today\'s class, was difficult?', style: 'Teacher warm gentle sincere-warm asking-opening caring, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '少し。表現、深いです。', en: 'A little. Expression — deep.', style: 'Teen warm soft sincere honest-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'asuka_teacher', jp: '詩の内容、ゆっくり、感じよう。', en: 'Poem\'s content — slowly, feel.', style: 'Teacher warm gentle sincere-warm advising-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '頭で、考えすぎてました。', en: 'Head — thought too much.', style: 'Teen warm soft sincere realizing-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '心で、読む、大切。', en: 'Heart — reading, important.', style: 'Teacher warm gentle sincere-warm philosophical-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'sakura_teen', jp: '一緒に、考えてくれて、ありがとう。', en: 'Together — thinking, thanks.', style: 'Teen warm soft sincere appreciative-warm grateful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、楽しい時間。', en: 'Same — fun time.', style: 'Teacher warm gentle sincere closing-warm tender-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 869 — aoi + yuki, hotel discussion (medium)
  {
    id: 'conv_00869',
    context: 'Aoi and Yuki plan a weekend hotel stay.',
    purpose: 'two-women hotel-getaway exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['ホテル', '条件', '一緒', '楽しい', '相談'],
    cast: ['aoi_barista', 'yuki_office'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、ホテル、決めない？', en: 'Aoi-chan — hotel, won\'t decide?', style: 'Office woman bright soft sincere proposing-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '条件、何、ある？温泉、ほしい。', en: 'Conditions — what, exist? Onsen — want.', style: 'Barista warm soft sincere-warm asking-warm preferring, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '私も。海、近いの、いい。', en: 'I too. Sea — close, nice.', style: 'Office woman bright soft sincere matching-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '相談、ゆっくり、しよう。', en: 'Consult — slowly, do.', style: 'Barista warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '一緒の時間、本当に、嬉しい。', en: 'Together time — truly, happy.', style: 'Office woman bright soft sincere appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'こちらこそ。楽しみだね。', en: 'Same. Looking forward.', style: 'Barista warm soft sincere-warm matching-warm anticipating, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '日付、決めよう、明日。', en: 'Date — decide, tomorrow.', style: 'Office woman bright soft sincere closing-warm committed-bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 870 — ryosuke + naoko, sibling talk (long)
  {
    id: 'conv_00870',
    context: 'Ryosuke and his sister Naoko share a deep evening talk.',
    purpose: 'sibling life-reflection exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['人生', '過去', '一緒', '大切', '考える'],
    cast: ['ryosuke_dad', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: '亮介、最近、人生、よく考える。', en: 'Ryosuke — recently, life, often think.', style: 'Aunt warm soft sincere-warm philosophical-opening reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、お互い、年取ったね。', en: 'Yes — mutually, aged.', style: 'Father warm gentle sincere-warm philosophical-warm gentle, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '過去、振り返ると、早い。', en: 'Past — looking back, fast.', style: 'Aunt warm soft sincere-warm reflective-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '小さい頃、毎日、一緒だった。', en: 'Small — every day, together.', style: 'Father warm gentle sincere-warm nostalgic-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: 'お兄ちゃん、頼りに、してた。', en: 'Older brother — relied on.', style: 'Aunt warm soft sincere-warm reminiscing-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '俺も、お前、いつも、心配。', en: 'I too — you, always, worried.', style: 'Father warm gentle sincere-warm honest-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '田舎、移ろうか、本気で考えてる。', en: 'Country — move?, seriously thinking.', style: 'Aunt warm soft sincere-warm honest-warm serious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '応援するよ。皆、近くにいる。', en: 'Support. All — close.', style: 'Father warm gentle sincere-warm reassuring-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '心強い。家族、本当に、大切。', en: 'Heart-strong. Family — truly, precious.', style: 'Aunt warm soft sincere-warm grateful-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: 'お父さん、お母さん、見てるよ、きっと。', en: 'Father — Mother, watching, surely.', style: 'Father warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'これからも、お互い、支えよう。', en: 'From now — mutually, support.', style: 'Aunt warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、歩いていこう。', en: 'Together — walk.', style: 'Father warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'ありがとう、お兄ちゃん。', en: 'Thanks — older brother.', style: 'Aunt warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 871 — sho + hina, period (short)
  {
    id: 'conv_00871',
    context: 'Sho asks Hina how long until kindergarten starts.',
    purpose: 'children waiting-period exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['期間', '幼稚園', '一緒', '楽しい', '待つ'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、幼稚園、あと、何日？', en: 'Hina — kindergarten, more, how many days?', style: 'Tiny six-year-old soft small sincere asking-opening curious, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '期間、長いね。十日、待つ。', en: 'Period — long. Ten days, wait.', style: 'High child bright sincere counting-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ぼく、待ち遠しい。', en: 'I — long await.', style: 'Tiny six-year-old soft small sincere honest-warm anticipating, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒に、毎日、数えよう。', en: 'Together — every day, count.', style: 'High child bright sincere proposing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、待つの。', en: 'Fun — waiting.', style: 'Tiny six-year-old soft small sincere closing-warm bright-warm, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 872 — takeda + ren, movement plan (medium)
  {
    id: 'conv_00872',
    context: 'Takeda discusses traffic-control plans with Ren as a volunteer.',
    purpose: 'officer-student festival-action planning',
    ambient: 'street_evening',
    sound_effects: [],
    target_vocab: ['動き', '行動', '安全', '一緒', '頑張る'],
    cast: ['takeda_officer', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'レン君、当日の動き、確認しよう。', en: 'Ren-kun — that day\'s movement, confirm.', style: 'Officer firm formal direct calm-opening practical, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: 'はい、どこに、立てばいいですか？', en: 'Yes — where, should stand?', style: 'University student warm soft sincere-warm asking-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'takeda_officer', jp: '駅前、人の流れ、見て。', en: 'Station front — people flow, see.', style: 'Officer firm formal direct instructive-clear practical, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'ren_uni', jp: '了解。安全な行動、心がけます。', en: 'Understood. Safe action — keep in mind.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '皆と、一緒に、お願いします。', en: 'All — together, please.', style: 'Officer firm formal direct collaborative-warm respectful, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、無事に、終わるように。', en: 'Try hard — safely, finish.', style: 'University student warm soft sincere-warm committed-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: 'よろしく頼んだ。', en: 'Best — counting on.', style: 'Officer firm formal direct closing-warm trusting-brief, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 873 — kenji + ren, processing data (medium)
  {
    id: 'conv_00873',
    context: 'Kenji teaches Ren about data processing.',
    purpose: 'senior-junior technical-skill exchange',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['処理', 'データ', '基本', '一緒', '頑張る'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、データ処理、覚えよう。', en: 'Ren-kun — data processing, remember.', style: 'Salaryman warm formal sincere-warm teaching-opening warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、お願いします。', en: 'Yes — please.', style: 'University student warm formal sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'kenji_office', jp: 'まず、基本、覚えること。', en: 'First — basics, remember.', style: 'Salaryman warm formal sincere-warm teaching-warm advising, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'メモ、取ります。', en: 'Notes — take.', style: 'University student warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '質問、いつでも、いいよ。', en: 'Question — anytime, okay.', style: 'Salaryman warm gentle sincere-warm welcoming-warm encouraging, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、頑張ります。', en: 'Together — try hard.', style: 'University student warm soft sincere-warm committed-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'いいぞ。一歩ずつ。', en: 'Good. One step at time.', style: 'Salaryman warm soft sincere closing-warm encouraging-tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 874 — hina + sho, conditions for play (short)
  {
    id: 'conv_00874',
    context: 'Hina and Sho set rules for a game.',
    purpose: 'children rule-setting exchange',
    ambient: 'garden_morning',
    sound_effects: [],
    target_vocab: ['条件', '一緒', '楽しい', '頑張る', '順番'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、条件、決めよう。', en: 'Sho — conditions, decide.', style: 'High child bright sincere proposing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、順番、まず、決める。', en: 'Yes — turn, first, decide.', style: 'Tiny six-year-old soft small sincere agreeing-warm practical, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'ひな、先、する。', en: 'Hina — first, do.', style: 'High child bright sincere claiming-warm playful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張って、ぼくも、する。', en: 'Try hard — I too, do.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、楽しい！', en: 'Together — fun!', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 875 — mei + saito, baby weight (medium)
  {
    id: 'conv_00875',
    context: 'Dr. Saito reassures Mei about Hikari\'s weight rate.',
    purpose: 'doctor-mother baby-weight exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['率', '健康', '相談', '一緒', '大切'],
    cast: ['saito_doctor', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: '先生、ひかり、体重、心配です。', en: 'Doctor — Hikari, weight, worried.', style: 'Romantic warm soft sincere-warm vulnerable-opening anxious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '増加率、見ますね。', en: 'Increase rate — see.', style: 'Doctor warm formal sincere-warm professional-calm reassuring, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'mei_romantic', jp: '少ない、感じます。', en: 'Few — feel.', style: 'Romantic warm soft sincere-warm honest-warm worried, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '健康、問題ありません、安心して。', en: 'Health — no problem, relax.', style: 'Doctor warm formal sincere-warm reassuring-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'mei_romantic', jp: 'ああ、良かった。', en: 'Ah — good.', style: 'Romantic warm soft sincere-warm relieved-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '心配なら、いつでも、相談してね。', en: 'Worried — anytime, consult.', style: 'Doctor warm formal sincere-warm warm-promise tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'ありがとう、心強いです。', en: 'Thanks — heart-strong.', style: 'Romantic warm soft sincere closing-warm grateful-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 876 — sakura + asuka, writing submission (long)
  {
    id: 'conv_00876',
    context: 'Sakura nervously submits her writing for a competition.',
    purpose: 'student-teacher submission-day exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['作品', '一緒', '頑張る', '評価', '大切'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、作品、完成しました。', en: 'Teacher — work, completed.', style: 'Teen warm soft sincere announcing-opening vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'おめでとう、よく頑張った。', en: 'Congratulations — well tried.', style: 'Teacher warm gentle sincere-warm appreciative-warm warm-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '提出、緊張します。', en: 'Submission — tense.', style: 'Teen warm soft sincere honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '当然だね。深呼吸して。', en: 'Naturally. Deep breath.', style: 'Teacher warm gentle sincere-warm reassuring-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '評価、怖い、けど、楽しみ。', en: 'Evaluation — scary, but, looking forward.', style: 'Teen warm soft sincere honest-warm balanced, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'どちらも、大事。', en: 'Both — important.', style: 'Teacher warm gentle sincere-warm wise-warm affirming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'sakura_teen', jp: '一緒に、ここまで、来てくれて。', en: 'Together — until here, came.', style: 'Teen warm soft sincere grateful-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。さくらさんの言葉、力に。', en: 'Same. Sakura-san\'s words — strength.', style: 'Teacher warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'これからも、書き続けます。', en: 'From now — keep writing.', style: 'Teen warm soft sincere committed-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'いつでも、応援する。', en: 'Anytime — cheer.', style: 'Teacher warm gentle sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '結果、どうあれ、続ける。', en: 'Result — whatever, continue.', style: 'Teen warm soft sincere determined-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'その姿勢、素晴らしい。', en: 'That posture — wonderful.', style: 'Teacher warm gentle sincere-warm appreciative-warm proud, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: 'ありがとうございます、本当に。', en: 'Thanks — truly.', style: 'Teen warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 877 — daichi + tatsuya, festival fire (short)
  {
    id: 'conv_00877',
    context: 'Daichi and Tatsuya start the festival bonfire.',
    purpose: 'cousin festival-bonfire exchange',
    ambient: 'plaza_evening',
    sound_effects: [],
    target_vocab: ['火', '祭り', '一緒', '楽しい', '安全'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、祭りの火、もう、点けるか。', en: 'Tatsuya — festival\'s fire, already, light?', style: 'Kansai warm bright sincere asking-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、皆、集まった。', en: 'Yes — all, gathered.', style: 'Country warm low sincere unhurried steady-clear, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '安全、気を付けてな。', en: 'Safety — careful.', style: 'Kansai warm bright sincere caring-warm advisory, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '心配ない。一緒に、見守る。', en: 'No worry. Together — watch over.', style: 'Country warm low sincere unhurried reassuring-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '皆、楽しんでくれそうやな。', en: 'All — will enjoy likely.', style: 'Kansai warm bright sincere closing-warm anticipating-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 878 — yumiko + ryosuke, afternoon walks (medium)
  {
    id: 'conv_00878',
    context: 'Yumiko and Ryosuke walk every afternoon together.',
    purpose: 'married-couple afternoon-walk exchange',
    ambient: 'park_afternoon',
    sound_effects: [],
    target_vocab: ['午後', '一緒', '健康', '大切', '楽しい'],
    cast: ['yumiko_mom', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'お父さん、午後の散歩、いい習慣ね。', en: 'Father — afternoon walk, good habit.', style: 'Maternal warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、健康、保てる。', en: 'Yes — health, can keep.', style: 'Father warm gentle sincere-warm philosophical-warm matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '一緒に、続けてる時間、嬉しい。', en: 'Together — continuing time, happy.', style: 'Maternal warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '小さな事だけど、大切だね。', en: 'Small thing — but, important.', style: 'Father warm gentle sincere-warm philosophical-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '皆に、勧めたい、こういう時間。', en: 'All — want to recommend, such time.', style: 'Maternal warm gentle sincere-warm enthusiastic-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '健次さんにも、伝えようかな。', en: 'Kenji-san too — convey?', style: 'Father warm gentle sincere-warm considering-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'これからも、楽しもうね。', en: 'From now — enjoy.', style: 'Maternal warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 879 — saito + kenji, work burden (medium)
  {
    id: 'conv_00879',
    context: 'Saito advises Kenji about work-related stress and burden.',
    purpose: 'doctor-patient work-burden exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['負担', '相談', '健康', '一緒', '大切'],
    cast: ['saito_doctor', 'kenji_office'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '健次さん、最近の負担、大丈夫？', en: 'Kenji-san — recent burden, okay?', style: 'Doctor warm formal sincere-warm caring-opening probing, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '少し、重いです、正直。', en: 'A bit — heavy, honestly.', style: 'Salaryman warm soft sincere-warm vulnerable-warm honest, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '相談、家族にも、必要。', en: 'Consult — family too, needed.', style: 'Doctor warm formal sincere-warm advising-warm caring, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '妻、心配する、性格で。', en: 'Wife — worries, personality.', style: 'Salaryman warm gentle sincere-warm honest-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '健康、共有する、大切。', en: 'Health — sharing, important.', style: 'Doctor warm formal sincere-warm philosophical-warm advising, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'はい、勇気、出します。', en: 'Yes — courage, will give.', style: 'Salaryman warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一緒に、健康、守ろう。', en: 'Together — health, protect.', style: 'Doctor warm formal sincere closing-warm warm-promise tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 880 — hina + sho, computer functions (short)
  {
    id: 'conv_00880',
    context: 'Hina asks Sho about PC functions.',
    purpose: 'children PC-function exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['機能', 'パソコン', '一緒', '楽しい', '見る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、このパソコン、機能、たくさん？', en: 'Sho — this PC, functions, many?', style: 'High child bright sincere asking-opening curious-warm, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、いっぱい、ある。', en: 'Yes — lots, exist.', style: 'Tiny six-year-old soft small sincere bright-warm confident, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '見せて、お絵かき、ある？', en: 'Show — drawing, exists?', style: 'High child bright sincere asking-warm engaged, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、ぼく、開ける。', en: 'Yes — I, open.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、楽しい！', en: 'Together — fun!', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 881 — mrs_mori + sachiko, gratitude (medium)
  {
    id: 'conv_00881',
    context: 'Mrs. Mori formally thanks Sachiko for years of friendship.',
    purpose: 'two-elderly-women recognition exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['認める', '友人', '一緒', '感謝', '大切'],
    cast: ['mrs_mori_neighbor', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '佐知子さん、認めること、ある。', en: 'Sachiko-san — acknowledge thing, exists.', style: 'Neighbor warm gentle sincere-warm serious-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '何かしら？', en: 'What?', style: 'Grandma warm gentle sincere-warm curious-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'mrs_mori_neighbor', jp: '長い友人、ずっと、感謝してる。', en: 'Long friend — long, grateful.', style: 'Neighbor warm gentle sincere-warm grateful-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Grandma warm gentle sincere-warm tender-deep matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mrs_mori_neighbor', jp: '一緒に、年取って、大切な思い出。', en: 'Together — aged, precious memories.', style: 'Neighbor warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: 'これからも、お互い、大切に。', en: 'From now — mutually, preciously.', style: 'Grandma warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: '長く、お元気で。', en: 'Long — healthy.', style: 'Neighbor warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 882 — tatsuya + ryosuke, brothers reunion (long)
  {
    id: 'conv_00882',
    context: 'Tatsuya and Ryosuke reunite after months apart.',
    purpose: 'cousin-brother reunion exchange',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['一緒', '人生', '家族', '大切', '相談'],
    cast: ['tatsuya_country', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '亮介、久しぶり。', en: 'Ryosuke — long time.', style: 'Country warm low sincere unhurried welcoming-opening tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、半年ぶりだね。', en: 'Yes — half year passing.', style: 'Father warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '家族、皆、元気？', en: 'Family — all, energetic?', style: 'Country warm low sincere unhurried caring-warm engaged, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: 'うん、皆、元気にしてる。', en: 'Yes — all, healthy.', style: 'Father warm gentle sincere-warm reporting-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'リク、もうすぐ、大学やな。', en: 'Riku — soon, college.', style: 'Country warm low sincere unhurried observing-warm appreciative, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: '時、本当に、早い。', en: 'Time — truly, fast.', style: 'Father warm gentle sincere-warm philosophical-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '退職、決めたんやな。', en: 'Retirement — decided.', style: 'Country warm low sincere unhurried acknowledging-warm philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: 'うん、優子と、相談して。', en: 'Yes — Yumiko, consulted.', style: 'Father warm gentle sincere-warm sharing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '人生、新しい段階や。', en: 'Life — new stage.', style: 'Country warm low sincere unhurried philosophical-warm wise, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'ryosuke_dad', jp: 'たつや、近くに、来てくれて、嬉しい。', en: 'Tatsuya — close, came, happy.', style: 'Father warm gentle sincere-warm grateful-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: 'お互い、頼り合おう。', en: 'Mutually — rely on each other.', style: 'Country warm low sincere unhurried tender-promise warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、年取れるの、有り難い。', en: 'Together — to age, grateful.', style: 'Father warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '家族、大切に、過ごそう。', en: 'Family — preciously, spend.', style: 'Country warm low sincere closing-warm tender-promise deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 883 — hina + yumiko, kindergarten prep (short)
  {
    id: 'conv_00883',
    context: 'Yumiko prepares Hina for her first kindergarten day.',
    purpose: 'mother-child kindergarten-prep exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['幼稚園', '一緒', '楽しい', '頑張る', '大切'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、明日、幼稚園、初めて。', en: 'Hina-chan — tomorrow, kindergarten, first.', style: 'Maternal warm gentle sincere-warm encouraging-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、ちょっと、ドキドキ。', en: 'Yes — a bit, nervous.', style: 'High child bright sincere honest-warm vulnerable, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-warm' },
      { speaker: 'yumiko_mom', jp: '大丈夫。皆、優しい。', en: 'Okay. All — kind.', style: 'Maternal warm gentle sincere-warm reassuring-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'お友達、できる、楽しい？', en: 'Friends — can make, fun?', style: 'High child bright sincere hopeful-warm asking, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '一緒に、頑張ろう、大切な日。', en: 'Together — try hard, precious day.', style: 'Maternal warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 884 — asuka + ren, teaching approach (medium)
  {
    id: 'conv_00884',
    context: 'Asuka and Ren compare teaching approaches.',
    purpose: 'teacher-alum teaching-philosophy exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['考え方', '生徒', '一緒', '考える', '大切'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: '先生、生徒への、考え方、どう、するんですか？', en: 'Teacher — students, way of thinking, how, do?', style: 'University student warm soft sincere asking-opening curious-respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'asuka_teacher', jp: '一人ひとり、別の人間、と、考える。', en: 'Each — different human, think.', style: 'Teacher warm gentle sincere-warm philosophical-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'ren_uni', jp: '深いですね。', en: 'Deep.', style: 'University student warm soft sincere appreciative-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '同じ方法、皆に、合わない。', en: 'Same method — all, doesn\'t fit.', style: 'Teacher warm gentle sincere-warm philosophical-warm clear, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、考える、姿勢、大切ですね。', en: 'Together — thinking, posture, important.', style: 'University student warm soft sincere-warm affirming-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'レン君、いい指導者、なれるね。', en: 'Ren-kun — good guide, can become.', style: 'Teacher warm gentle sincere-warm encouraging-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります。', en: 'Try hard.', style: 'University student warm soft sincere closing-warm committed-respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' }
    ]
  },
  // 885 — hiroshi_boss + kenji, opposition handling (medium)
  {
    id: 'conv_00885',
    context: 'Hiroshi and Kenji discuss how to handle opposing opinions in the team.',
    purpose: 'boss-subordinate conflict-handling exchange',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['反対', '意見', '考える', '一緒', '対策'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、反対意見、どう、扱う。', en: 'Kenji — opposing opinion, how, handle.', style: 'Boss firm formal direct authoritative probing-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'まず、聞く、姿勢、保ちます。', en: 'First — listen, posture, keep.', style: 'Salaryman warm formal sincere-warm philosophical-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: 'いい考え方だ。', en: 'Good way of thinking.', style: 'Boss firm formal direct affirming-warm clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'それぞれの立場、考えて、対策、立てる。', en: 'Each position — consider, response, set.', style: 'Salaryman warm formal sincere-warm philosophical-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'チーム、一緒に、強くなる。', en: 'Team — together, becomes strong.', style: 'Boss firm formal direct philosophical-warm encouraging, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '部長から、学んでいます。', en: 'Boss — learning.', style: 'Salaryman warm formal sincere-warm grateful-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '頼んだぞ、これからも。', en: 'Counting on — from now.', style: 'Boss firm formal direct closing-warm trusting-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_044 wrote', CONVERSATIONS.length, 'files');

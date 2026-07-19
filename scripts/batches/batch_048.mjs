import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_048)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 946 — hiroshi_boss + kenji, professional development (medium)
  {
    id: 'conv_00946',
    context: 'Hiroshi discusses Kenji becoming more professional.',
    purpose: 'boss-subordinate professional-development exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['プロ', '専門', '一緒', '頑張る', '考え方'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、プロとして、専門、深めろ。', en: 'Kenji — as professional, specialty, deepen.', style: 'Boss firm formal direct authoritative instructive-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、もっと、勉強します。', en: 'Yes — more, study.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '考え方、広げる、大切。', en: 'Way of thinking — widen, important.', style: 'Boss firm formal direct philosophical-warm clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '海外の例も、見たいです。', en: 'Overseas examples — want to see.', style: 'Salaryman warm formal sincere-warm engaged-warm philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'いい姿勢。一緒に、見ていこう。', en: 'Good posture. Together — see.', style: 'Boss firm formal direct affirming-warm collaborative, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '頑張ります、本当に。', en: 'Try hard — truly.', style: 'Salaryman warm formal sincere-warm committed-warm grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '期待してる。', en: 'Expecting.', style: 'Boss firm formal direct closing-brief trusting-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 947 — sho + hina, autumn fruit (short)
  {
    id: 'conv_00947',
    context: 'Sho and Hina eat persimmons in the garden.',
    purpose: 'children autumn-fruit exchange',
    ambient: 'garden_afternoon',
    sound_effects: [],
    target_vocab: ['柿', '秋', '一緒', '美味しい', '楽しい'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、柿、甘い、食べて。', en: 'Sho — persimmon, sweet, eat.', style: 'High child bright sincere offering-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うわあ、美味しい！', en: 'Wow — delicious!', style: 'Tiny six-year-old soft small sincere appreciative-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '秋、柿の季節、ね。', en: 'Autumn — persimmon season.', style: 'High child bright sincere observing-warm philosophical, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、食べる、楽しい。', en: 'Together — eating, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '梨も、食べたい、また。', en: 'Pear too — want to eat, again.', style: 'High child bright sincere closing-warm enthusiastic-anticipating, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 948 — asuka + riku, college life (medium)
  {
    id: 'conv_00948',
    context: 'Asuka tells Riku what college life might be like.',
    purpose: 'teacher-student college-life exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['大学生', '生活', '一緒', '頑張る', '相談'],
    cast: ['asuka_teacher', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'リク君、大学生の生活、楽しみ？', en: 'Riku-kun — college student life, looking forward?', style: 'Teacher warm gentle sincere-warm asking-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'はい、でも、不安、あります。', en: 'Yes — but, anxiety, exists.', style: 'Teen warm soft sincere honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '自由が、増える、けど、自分の責任。', en: 'Freedom — increases, but, own responsibility.', style: 'Teacher warm gentle sincere-warm advising-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '友達、できるかな。', en: 'Friends — can make?', style: 'Teen warm soft sincere worried-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '絶対、できる。一緒に、頑張ってる人、いる。', en: 'Surely — can. Together — trying hard people, exist.', style: 'Teacher warm gentle sincere-warm reassuring-warm encouraging-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '相談、いつでも、来ます。', en: 'Consult — anytime, come.', style: 'Teen warm soft sincere committed-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '応援、いつでも。', en: 'Cheering — anytime.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 949 — aoi + yuki, common friend (medium)
  {
    id: 'conv_00949',
    context: 'Aoi and Yuki realize they have a common college friend.',
    purpose: 'two-women common-friend exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['共通', '友達', '一緒', '楽しい', '驚き'],
    cast: ['aoi_barista', 'yuki_office'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、共通の友達、いるかも。', en: 'Aoi-chan — common friend, exists maybe.', style: 'Office woman bright soft sincere curious-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'aoi_barista', jp: 'え、誰？', en: 'Eh — who?', style: 'Barista warm soft sincere-warm curious-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'yuki_office', jp: '大学の、みき、知ってる？', en: 'College — Miki, know?', style: 'Office woman bright soft sincere asking-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'aoi_barista', jp: 'みきちゃん！知ってる、一緒の高校。', en: 'Miki-chan! Know — same high school.', style: 'Barista warm soft sincere-warm surprised-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yuki_office', jp: 'すごい偶然！世界、狭い。', en: 'Amazing coincidence! World — small.', style: 'Office woman bright soft sincere appreciative-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'aoi_barista', jp: '今度、三人で、会おう。', en: 'Next time — three-people, meet.', style: 'Barista warm soft sincere-warm proposing-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '楽しい時間に、なる。', en: 'Fun time — becomes.', style: 'Office woman bright soft sincere closing-warm anticipating-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 950 — mei + daichi, second baby (long)
  {
    id: 'conv_00950',
    context: 'Mei and Daichi discuss having a second baby.',
    purpose: 'married-couple family-planning deep exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '考える', '相談', '大切'],
    cast: ['mei_romantic', 'daichi_kansai'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、二人目、考えてる？', en: 'Daichi — second one, considering?', style: 'Romantic warm soft sincere-warm asking-opening vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'うん、たまに、考えるな。', en: 'Yes — sometimes, think.', style: 'Kansai warm bright sincere honest-warm reflective, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'ひかり、お兄ちゃん、お姉ちゃん、欲しがるかな。', en: 'Hikari — brother, sister, wants?', style: 'Romantic warm soft sincere-warm wondering-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '兄弟、ええもんやで。', en: 'Sibling — good thing.', style: 'Kansai warm bright sincere appreciative-warm philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '私も、姉、いて、本当、感謝してる。', en: 'I too — sister, exists, truly, grateful.', style: 'Romantic warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '家族、もっと、増えても、ええかな。', en: 'Family — more, increase, okay?', style: 'Kansai warm bright sincere thoughtful-warm engaged, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'うん、相談、ゆっくり、しよう。', en: 'Yes — consult, slowly, do.', style: 'Romantic warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '体、大事や。お前の体、考えな。', en: 'Body — important. Your body, consider.', style: 'Kansai warm bright sincere caring-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'ありがとう、優しい。', en: 'Thanks — kind.', style: 'Romantic warm soft sincere-warm grateful-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '一緒に、考えていこう。', en: 'Together — think.', style: 'Kansai warm bright sincere collaborative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'うん、大切な決断。', en: 'Yes — precious decision.', style: 'Romantic warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'どっちでも、家族、最高や。', en: 'Either way — family, best.', style: 'Kansai warm bright sincere closing-warm tender-promise deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '本当、幸せ。', en: 'Truly — happy.', style: 'Romantic warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 951 — hina + sho, autumn fruit (short)
  {
    id: 'conv_00951',
    context: 'Hina and Sho name autumn fruits.',
    purpose: 'children fruit-naming exchange',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['秋', '一緒', '楽しい', '美味しい', '見る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、秋の果物、いっぱい。', en: 'Sho — autumn fruits, many.', style: 'High child bright sincere observing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'りんご、ぶどう、見て。', en: 'Apple — grape, look.', style: 'Tiny six-year-old soft small sincere observing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'みかんも、好き、ひな。', en: 'Mandarin too — like, Hina.', style: 'High child bright sincere preferring-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '美味しい、季節、ね。', en: 'Delicious — season.', style: 'Tiny six-year-old soft small sincere philosophical-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、食べる、楽しい。', en: 'Together — eating, fun.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 952 — takeda + ren, traffic protection (medium)
  {
    id: 'conv_00952',
    context: 'Takeda gives Ren a traffic protection award.',
    purpose: 'officer-student award exchange',
    ambient: 'plaza_morning',
    sound_effects: [],
    target_vocab: ['保護', '安全', '一緒', '頑張る', '感謝'],
    cast: ['takeda_officer', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'レン君、保護活動、ご苦労様。', en: 'Ren-kun — protection activity, good work.', style: 'Officer firm formal direct calm-opening appreciative, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'ありがとうございます、皆と一緒に。', en: 'Thanks — with all together.', style: 'University student warm soft sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '安全、守ってくれて、感謝。', en: 'Safety — protecting, grateful.', style: 'Officer firm formal direct appreciative-warm clear, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '町の人々、安心、できた。', en: 'Town people — relieved, could.', style: 'University student warm soft sincere-warm humble-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '一緒に、頑張ろう、これからも。', en: 'Together — try hard, from now.', style: 'Officer firm formal direct collaborative-warm encouraging, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'はい、出来ること、続けます。', en: 'Yes — possible things, continue.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: 'よろしく頼んだ。', en: 'Best — counting on.', style: 'Officer firm formal direct closing-warm trusting-brief, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 953 — kenji + ren, technical exchange (medium)
  {
    id: 'conv_00953',
    context: 'Kenji asks Ren\'s opinion on a problem solution.',
    purpose: 'senior-junior collaborative-solve exchange',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['解決', '一緒', '考える', '頑張る', '相談'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、君の意見、聞きたい。', en: 'Ren-kun — your opinion, want to hear.', style: 'Salaryman warm formal sincere-warm asking-opening respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'え、僕の？', en: 'Eh — mine?', style: 'University student warm soft sincere-warm surprised-warm humble, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'この解決方法、どう、思う？', en: 'This solution — how, think?', style: 'Salaryman warm formal sincere-warm probing-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: '別の角度、見てみても、いいかも。', en: 'Different angle — try seeing, okay maybe.', style: 'University student warm soft sincere-warm thoughtful-warm honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'kenji_office', jp: 'いい考え。一緒に、考えよう。', en: 'Good thought. Together — think.', style: 'Salaryman warm formal sincere-warm affirming-warm collaborative, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、もっと、考えます。', en: 'Try hard — more, think.', style: 'University student warm soft sincere-warm committed-warm encouraged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '相談、いつでも、ね。', en: 'Consult — anytime.', style: 'Salaryman warm soft sincere closing-warm warm-promise tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 954 — sachiko + naoko, autumn cooking (short)
  {
    id: 'conv_00954',
    context: 'Sachiko teaches Naoko how to make autumn rice.',
    purpose: 'elderly-aunt cooking exchange',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '料理', '炊飯'],
    cast: ['sachiko_grandma', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: '直子ちゃん、秋の炊飯、教えるね。', en: 'Naoko-chan — autumn rice cooking, teach.', style: 'Grandma warm gentle sincere-warm teaching-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: 'お願いします、おばさん。', en: 'Please — auntie.', style: 'Aunt warm soft sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '栗、入れる、優しい味。', en: 'Chestnut — add, kind taste.', style: 'Grandma warm gentle sincere-warm teaching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '一緒に、料理、楽しい。', en: 'Together — cooking, fun.', style: 'Aunt warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '伝えていきたい、味。', en: 'Want to convey — taste.', style: 'Grandma warm gentle sincere closing-warm philosophical-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 955 — yuki + naoko, women clinic (medium)
  {
    id: 'conv_00955',
    context: 'Yuki and Naoko reflect after their women\'s clinic visit.',
    purpose: 'two-women post-clinic exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['女性', '健康', '一緒', '相談', '安心'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、女性の健康、本当、大切。', en: 'Naoko-san — women\'s health, truly, precious.', style: 'Office woman bright soft sincere reflective-opening philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'ね、相談、しに来てよかった。', en: 'Right — consult, glad came.', style: 'Aunt warm soft sincere-warm matching-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '一人なら、行かなかった。', en: 'Alone — wouldn\'t go.', style: 'Office woman bright soft sincere honest-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '一緒だから、安心ね。', en: 'Together — relieved.', style: 'Aunt warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '次回も、お願いしますね。', en: 'Next time too — please.', style: 'Office woman bright soft sincere committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'もちろん、いつでも。', en: 'Of course — anytime.', style: 'Aunt warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'Office woman bright soft sincere closing-warm grateful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 956 — sakura + asuka, contest celebration (long)
  {
    id: 'conv_00956',
    context: 'Sakura and Asuka celebrate at a small gathering after the contest.',
    purpose: 'teacher-student post-contest celebration',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '大切', '幸せ', '夢'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、今日、来てくれて、嬉しい。', en: 'Teacher — today, came, happy.', style: 'Teen warm soft sincere grateful-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、お祝い、出来て。', en: 'Same — celebrate, could.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一年間、本当、頑張りました。', en: 'Year — truly, tried hard.', style: 'Teen warm soft sincere reflective-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '見てきた、お前の成長。', en: 'Watched — your growth.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '夢、ずっと、追っていきます。', en: 'Dream — long, chase.', style: 'Teen warm soft sincere committed-warm hopeful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '大切な、姿勢。', en: 'Precious — posture.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '幸せです、本当に。', en: 'Happy — truly.', style: 'Teen warm soft sincere honest-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: 'これからも、応援する。', en: 'From now — cheer.', style: 'Teacher warm gentle sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、ここまで、来てくれて。', en: 'Together — until here, came.', style: 'Teen warm soft sincere appreciative-warm grateful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'まだまだ、先、長い。', en: 'Still — ahead, long.', style: 'Teacher warm gentle sincere-warm philosophical-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '頑張ります、ずっと。', en: 'Try hard — long.', style: 'Teen warm soft sincere committed-warm tender-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '夢、必ず、叶う。', en: 'Dream — surely, comes true.', style: 'Teacher warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: 'ありがとう、先生。', en: 'Thanks — teacher.', style: 'Teen warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 957 — sho + hina, simple addition (short)
  {
    id: 'conv_00957',
    context: 'Sho and Hina work on a math worksheet together.',
    purpose: 'children math-worksheet exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '頑張る', '考える', '宿題'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、宿題、一緒に、しよう。', en: 'Hina — homework, together, do.', style: 'Tiny six-year-old soft small sincere inviting-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'うん、ひな、頑張る。', en: 'Yes — Hina, try hard.', style: 'High child bright sincere committing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '考えて、わかった！', en: 'Think — understood!', style: 'Tiny six-year-old soft small sincere triumphant-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'すごい！教えて。', en: 'Amazing! Teach.', style: 'High child bright sincere appreciative-warm engaged, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、楽しい、勉強。', en: 'Together — fun, studying.', style: 'Tiny six-year-old soft small sincere closing-warm philosophical-bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 958 — ryosuke + tatsuya, country business (medium)
  {
    id: 'conv_00958',
    context: 'Ryosuke and Tatsuya finalize country business details.',
    purpose: 'cousin business-finalize exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['販売', '一緒', '頑張る', '計画', '相談'],
    cast: ['ryosuke_dad', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'たつや、販売、来月から、始める？', en: 'Tatsuya — sale, from next month, start?', style: 'Father warm gentle sincere-warm planning-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'うん、準備、進めてる。', en: 'Yes — preparation, proceeding.', style: 'Country warm low sincere unhurried reporting-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: '一緒に、頑張りましょう。', en: 'Together — try hard.', style: 'Father warm gentle sincere-warm committed-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '町の人にも、相談、してきた。', en: 'Town people too — consulted, came.', style: 'Country warm low sincere unhurried collaborative-warm philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: '心強い、本当に。', en: 'Heart-strong — truly.', style: 'Father warm gentle sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '計画、ゆっくり、進めよう。', en: 'Plan — slowly, proceed.', style: 'Country warm low sincere unhurried wise-warm practical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'ryosuke_dad', jp: 'ありがとう、頼りに、してます。', en: 'Thanks — relying on.', style: 'Father warm gentle sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 959 — hiroshi_boss + ren, intern graduate (medium)
  {
    id: 'conv_00959',
    context: 'Hiroshi farewells Ren at the end of his internship.',
    purpose: 'boss-intern farewell exchange',
    ambient: 'office_evening',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '感謝', '大切', '将来'],
    cast: ['hiroshi_boss', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'レン君、インターン、お疲れ様。', en: 'Ren-kun — intern, good work.', style: 'Boss firm formal direct warm-opening appreciative, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '本当に、感謝してます。', en: 'Truly — grateful.', style: 'University student warm formal sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '将来、楽しみだ、お前。', en: 'Future — looking forward, you.', style: 'Boss firm formal direct affirming-warm encouraging, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、教えていただいた事。', en: 'Try hard — what was taught.', style: 'University student warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '健次にも、感謝、伝えろ。', en: 'Kenji too — gratitude, convey.', style: 'Boss firm formal direct instructive-warm caring, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'もちろんです。一緒に、過ごせた事、大切。', en: 'Of course. Together — could spend, precious.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'いつでも、戻ってきていい。', en: 'Anytime — can return.', style: 'Boss firm formal direct closing-warm welcoming-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 960 — daichi + sho, autumn harvest (short)
  {
    id: 'conv_00960',
    context: 'Daichi shows Sho the country autumn harvest.',
    purpose: 'uncle-child harvest exchange',
    ambient: 'field_afternoon',
    sound_effects: [],
    target_vocab: ['収穫', '秋', '一緒', '楽しい', '頑張る'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、収穫、見にいこか。', en: 'Sho — harvest, go see.', style: 'Kansai warm bright sincere inviting-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、行きたい。', en: 'Yes — want to go.', style: 'Tiny six-year-old soft small sincere enthusiastic-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: 'お米、たっぷり、できたで。', en: 'Rice — abundantly, came out.', style: 'Kansai warm bright sincere proud-warm appreciative, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、頑張った、お米。', en: 'Together — tried hard, rice.', style: 'Tiny six-year-old soft small sincere appreciative-warm philosophical, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: '秋、楽しい、季節やな。', en: 'Autumn — fun, season.', style: 'Kansai warm bright sincere closing-warm philosophical-tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 961 — asuka + ren, future teaching (medium)
  {
    id: 'conv_00961',
    context: 'Asuka mentors Ren about pursuing teaching as a career.',
    purpose: 'teacher-alum career-mentor exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['指導', '将来', '一緒', '考え方', '大切'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、教える仕事、決心、ついた？', en: 'Ren-kun — teaching work, decision, came?', style: 'Teacher warm gentle sincere-warm asking-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: 'まだ、迷ってます、正直。', en: 'Still — lost, honestly.', style: 'University student warm soft sincere-warm honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '指導者、向いてる、感じる。', en: 'Guide — suited, feel.', style: 'Teacher warm gentle sincere-warm affirming-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: '将来、もう少し、考えます。', en: 'Future — a bit more, think.', style: 'University student warm soft sincere-warm reflective-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'asuka_teacher', jp: '一緒に、見ていこう。', en: 'Together — see.', style: 'Teacher warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '相談、本当に、感謝。', en: 'Consult — truly, grateful.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '大切な、決断、ね。', en: 'Precious — decision.', style: 'Teacher warm gentle sincere closing-warm philosophical-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 962 — aoi + ren, anniversary (long)
  {
    id: 'conv_00962',
    context: 'Aoi and Ren celebrate their fourth wedding anniversary.',
    purpose: 'married-couple anniversary exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '思い出', '大切', '幸せ', '感謝'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'レン、結婚記念日、おめでとう。', en: 'Ren — wedding anniversary, congratulations.', style: 'Barista warm soft sincere-warm tender-opening loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: 'あおい、おめでとう。', en: 'Aoi — congratulations.', style: 'University student warm soft sincere-warm tender-warm matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'もう、四年、早いね。', en: 'Already — four years, fast.', style: 'Barista warm soft sincere-warm reflective-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '色んな思い出、たくさん。', en: 'Various memories — lots.', style: 'University student warm soft sincere-warm nostalgic-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '辛い時、一緒に、乗り越えた。', en: 'Hard times — together, overcame.', style: 'Barista warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'お前、本当に、強い。', en: 'You — truly, strong.', style: 'University student warm soft sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '一人じゃ、無理だった。', en: 'Alone — couldn\'t.', style: 'Barista warm soft sincere-warm humble-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '幸せだよ、毎日。', en: 'Happy — every day.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'Barista warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'これからも、ずっと、一緒。', en: 'From now — long, together.', style: 'University student warm soft sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: '大切な、人。', en: 'Precious — person.', style: 'Barista warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '俺も、そう思ってる。', en: 'I too — so think.', style: 'University student warm soft sincere closing-warm tender-deep matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 963 — hina + yumiko, baking (short)
  {
    id: 'conv_00963',
    context: 'Yumiko bakes cookies with Hina.',
    purpose: 'mother-child baking exchange',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '焼く', '楽しい', '美味しい', '優しい'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、クッキー、一緒に、焼こう。', en: 'Hina-chan — cookies, together, bake.', style: 'Maternal warm gentle sincere-warm inviting-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'やった、楽しみ！', en: 'Yay — looking forward!', style: 'High child bright sincere enthusiastic-warm excited, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '優しく、混ぜようね。', en: 'Gently — mix.', style: 'Maternal warm gentle sincere-warm teaching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '美味しそうな、匂い。', en: 'Delicious — smell.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '完成、楽しみね。', en: 'Completion — looking forward.', style: 'Maternal warm gentle sincere closing-warm tender-anticipating warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 964 — saito + naoko, retirement health (medium)
  {
    id: 'conv_00964',
    context: 'Naoko visits Saito for a pre-move health check.',
    purpose: 'doctor-patient pre-move exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '相談', '一緒', '大切', '生活'],
    cast: ['saito_doctor', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '直子さん、田舎、移るんですね。', en: 'Naoko-san — country, move.', style: 'Doctor warm formal sincere-warm appreciative-opening warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'はい、新しい生活、始めます。', en: 'Yes — new life, start.', style: 'Aunt warm soft sincere-warm hopeful-warm declaring, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '健康、保つ、大切ですよ。', en: 'Health — keeping, important.', style: 'Doctor warm formal sincere-warm advising-warm caring, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'naoko_aunt', jp: '田舎、自然、たくさんあって、安心。', en: 'Country — nature, many, relieved.', style: 'Aunt warm soft sincere-warm philosophical-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '相談、いつでも、来てください。', en: 'Consult — anytime, come.', style: 'Doctor warm formal sincere-warm warm-promise welcoming, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '本当に、お世話になりました。', en: 'Truly — was in care.', style: 'Aunt warm soft sincere-warm grateful-deep humble, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'お元気で、また会いましょう。', en: 'Healthy — meet again.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 965 — mrs_mori + sachiko, autumn cooking (medium)
  {
    id: 'conv_00965',
    context: 'Mrs. Mori and Sachiko share an autumn dinner.',
    purpose: 'elderly-women autumn-dinner exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['秋', '料理', '一緒', '美味しい', '楽しい'],
    cast: ['mrs_mori_neighbor', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '佐知子さん、今日の料理、特に、美味しい。', en: 'Sachiko-san — today\'s cooking, especially, delicious.', style: 'Neighbor warm gentle sincere-warm appreciative-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'ありがとう、秋の素材、使った。', en: 'Thanks — autumn material, used.', style: 'Grandma warm gentle sincere-warm humble-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: '栗ご飯、最高ね。', en: 'Chestnut rice — best.', style: 'Neighbor warm gentle sincere-warm appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '毎年、楽しみ、ね。', en: 'Every year — looking forward.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '一緒の、夕食、嬉しい。', en: 'Together — dinner, happy.', style: 'Neighbor warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: '長く、続けたい、こういう時間。', en: 'Long — want to continue, such time.', style: 'Grandma warm gentle sincere-warm tender-promise philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mrs_mori_neighbor', jp: 'お互い、健康で、ね。', en: 'Mutually — healthy.', style: 'Neighbor warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_048 wrote', CONVERSATIONS.length, 'files');

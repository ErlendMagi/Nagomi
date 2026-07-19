import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_049)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 966 — hiroshi_boss + kenji, year-end party (medium)
  {
    id: 'conv_00966',
    context: 'Hiroshi and Kenji plan a year-end company party.',
    purpose: 'boss-subordinate party-planning exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['忘年会', '一緒', '計画', '頑張る', '楽しい'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、忘年会、計画、進めろ。', en: 'Kenji — year-end party, plan, proceed.', style: 'Boss firm formal direct authoritative instructive-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、皆と、相談、します。', en: 'Yes — all, consult.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '今年、本当、頑張った、皆。', en: 'This year — truly, tried hard, all.', style: 'Boss firm formal direct appreciative-warm philosophical, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '皆、楽しい忘年会、楽しみに、してます。', en: 'All — fun year-end party, looking forward.', style: 'Salaryman warm formal sincere-warm reporting-warm bright, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '一緒に、慰労、しよう。', en: 'Together — comfort, do.', style: 'Boss firm formal direct philosophical-warm encouraging, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '会場、来週、決めます。', en: 'Venue — next week, decide.', style: 'Salaryman warm formal sincere-warm committed-warm practical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '頼んだぞ。', en: 'Counting on.', style: 'Boss firm formal direct closing-brief trusting-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 967 — sho + hina, winter (short)
  {
    id: 'conv_00967',
    context: 'Sho and Hina notice the first snowfall.',
    purpose: 'children winter-snow exchange',
    ambient: 'window_morning',
    sound_effects: [],
    target_vocab: ['冬', '雪', '一緒', '楽しい', '可愛い'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、雪、降ってる！', en: 'Hina — snow, falling!', style: 'Tiny six-year-old soft small sincere excited-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'わあ、冬、来た！', en: 'Wow — winter, came!', style: 'High child bright sincere enthusiastic-warm appreciative, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '可愛い、ふわふわ。', en: 'Cute — fluffy.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '外、行きたい、雪、触りたい。', en: 'Outside — want to go, snow, want to touch.', style: 'High child bright sincere wishing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、雪、楽しい。', en: 'Together — snow, fun.', style: 'Tiny six-year-old soft small sincere closing-warm enthusiastic-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 968 — asuka + sakura, new year (medium)
  {
    id: 'conv_00968',
    context: 'Asuka and Sakura discuss New Year plans.',
    purpose: 'teacher-student new-year-plan exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['新年', '一緒', '家族', '楽しい', '考える'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、新年、家族と、過ごす？', en: 'Sakura-san — new year, with family, spend?', style: 'Teacher warm gentle sincere-warm asking-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'はい、皆で、初詣、行きます。', en: 'Yes — all, first shrine, go.', style: 'Teen warm soft sincere reporting-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '素敵な伝統、ね。', en: 'Lovely tradition.', style: 'Teacher warm gentle sincere-warm appreciative-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '先生は、どう、過ごしますか？', en: 'Teacher — how, spend?', style: 'Teen warm soft sincere asking-warm curious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'asuka_teacher', jp: '実家、帰って、ゆっくり、する。', en: 'Hometown — return, slowly, do.', style: 'Teacher warm gentle sincere-warm sharing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '楽しい、一年、ですね。', en: 'Fun — year.', style: 'Teen warm soft sincere closing-warm anticipating-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '来年も、一緒に、頑張ろう。', en: 'Next year too — together, try hard.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 969 — aoi + ren, holiday plans (medium)
  {
    id: 'conv_00969',
    context: 'Aoi and Ren plan to visit family for the new year.',
    purpose: 'married-couple holiday-plan exchange',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['正月', '家族', '一緒', '旅行', '楽しい'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'レン、お正月、どこ、行く？', en: 'Ren — new year, where, go?', style: 'Barista warm soft sincere-warm planning-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: '実家、皆で、集まろう。', en: 'Hometown — all, gather.', style: 'University student warm soft sincere-warm proposing-warm warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'ひかり、初めての、正月、ね。', en: 'Hikari — first, new year.', style: 'Barista warm soft sincere-warm reflective-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '楽しい時間、なる、絶対。', en: 'Fun time — becomes, surely.', style: 'University student warm soft sincere-warm anticipating-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '皆、ひかり、見たがってる。', en: 'All — Hikari, want to see.', style: 'Barista warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '家族、皆と、一緒、嬉しい。', en: 'Family — all, together, happy.', style: 'University student warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '旅行、楽しみ。', en: 'Trip — looking forward.', style: 'Barista warm soft sincere closing-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 970 — mei + daichi, anniversary preparation (long)
  {
    id: 'conv_00970',
    context: 'Mei and Daichi prepare for their wedding anniversary.',
    purpose: 'married-couple anniversary-prep exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['プレゼント', '一緒', '幸せ', '大切', '思い出'],
    cast: ['mei_romantic', 'daichi_kansai'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、もうすぐ、結婚記念日、ね。', en: 'Daichi — soon, wedding anniversary.', style: 'Romantic warm soft sincere-warm tender-opening anticipating, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'うん、三年やで。', en: 'Yes — three years.', style: 'Kansai warm bright sincere appreciative-warm reflective, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'プレゼント、何、贈ろう。', en: 'Present — what, give.', style: 'Romantic warm soft sincere-warm planning-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'daichi_kansai', jp: '俺、考えてる、サプライズ。', en: 'I — considering, surprise.', style: 'Kansai warm bright sincere mysterious-warm playful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'え、なに？教えて！', en: 'Eh — what? Teach!', style: 'Romantic warm soft sincere-warm curious-warm excited, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'daichi_kansai', jp: '内緒や。当日まで、待っとき。', en: 'Secret. Until day — wait.', style: 'Kansai warm bright sincere playful-warm mysterious, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'もう、楽しみ過ぎ！', en: 'Already — looking forward too much!', style: 'Romantic warm soft sincere-warm excited-warm playful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'daichi_kansai', jp: '思い出に、なるで、絶対。', en: 'Memory — becomes, surely.', style: 'Kansai warm bright sincere promising-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '一緒の、三年間、本当、幸せ。', en: 'Together — three years, truly, happy.', style: 'Romantic warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '俺も、毎日、感謝してる。', en: 'I too — every day, grateful.', style: 'Kansai warm bright sincere matching-warm tender-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'ひかりが、いて、家族らしい。', en: 'Hikari — exists, family-like.', style: 'Romantic warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '大切な、三人、これからも。', en: 'Precious — three, from now.', style: 'Kansai warm bright sincere tender-promise deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'うん、ずっと、一緒。', en: 'Yes — long, together.', style: 'Romantic warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 971 — hina + sho, new year (short)
  {
    id: 'conv_00971',
    context: 'Hina and Sho write New Year cards.',
    purpose: 'children new-year-card exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['新年', '一緒', '楽しい', '頑張る', '友達'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、新年、はがき、書こう。', en: 'Sho — new year, postcard, write.', style: 'High child bright sincere proposing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '誰に、書く？', en: 'Whom — write?', style: 'Tiny six-year-old soft small sincere asking-warm curious, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'お友達、皆に、書こう。', en: 'Friends — all, write.', style: 'High child bright sincere planning-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張って、絵、描く。', en: 'Try hard — picture, draw.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、書くの、楽しい。', en: 'Together — writing, fun.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 972 — takeda + tatsuya, new year safety (medium)
  {
    id: 'conv_00972',
    context: 'Takeda discusses New Year safety with Tatsuya.',
    purpose: 'officer-farmer new-year-safety exchange',
    ambient: 'plaza_morning',
    sound_effects: [],
    target_vocab: ['正月', '安全', '一緒', '町', '注意'],
    cast: ['takeda_officer', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'たつやさん、正月、町、人、多くなる。', en: 'Tatsuya-san — new year, town, people, increase.', style: 'Officer firm formal direct calm-opening informative, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'tatsuya_country', jp: 'うん、皆で、注意、しよう。', en: 'Yes — all, caution, do.', style: 'Country warm low sincere unhurried agreeing-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'takeda_officer', jp: '初詣の警備、計画してる。', en: 'First shrine security — planning.', style: 'Officer firm formal direct authoritative reporting, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'tatsuya_country', jp: '助かるな、安全、大切。', en: 'Saved — safety, important.', style: 'Country warm low sincere unhurried grateful-warm philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '一緒に、皆、見守ろう。', en: 'Together — all, watch over.', style: 'Officer firm formal direct collaborative-warm philosophical, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'tatsuya_country', jp: '頼んだ、巡査さん。', en: 'Counting on — officer.', style: 'Country warm low sincere unhurried respectful-warm trusting, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '感謝、頼まれた。', en: 'Grateful — asked.', style: 'Officer firm formal direct closing-warm appreciative-brief, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 973 — sakura + ren, gift planning (medium)
  {
    id: 'conv_00973',
    context: 'Sakura asks Ren for advice on a present for their parents.',
    purpose: 'cousin gift-planning exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['プレゼント', '相談', '一緒', '家族', '楽しい'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、両親、プレゼント、相談、いい？', en: 'Ren-bro — parents, present, consult, okay?', style: 'Teen warm soft sincere asking-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: 'もちろん、何を、考えてる？', en: 'Of course — what, considering?', style: 'University student warm soft sincere-warm engaged-warm warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '記念日、特別な、もの、贈りたい。', en: 'Anniversary — special, thing, want to give.', style: 'Teen warm soft sincere thoughtful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '家族、写真、いい、かも。', en: 'Family — photo, good, maybe.', style: 'University student warm soft sincere-warm suggesting-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'いい考え！皆で、撮ろう。', en: 'Good thought! All — take.', style: 'Teen warm soft sincere appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: '一緒に、計画、しよう。', en: 'Together — plan, do.', style: 'University student warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '楽しい、サプライズに、なる。', en: 'Fun — surprise, becomes.', style: 'Teen warm soft sincere closing-warm enthusiastic-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 974 — sachiko + hina, traditional craft (short)
  {
    id: 'conv_00974',
    context: 'Sachiko teaches Hina to write a traditional new year decoration.',
    purpose: 'grandma-child traditional-craft exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '頑張る', '伝統'],
    cast: ['sachiko_grandma', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'ひなちゃん、伝統の飾り、作ろう。', en: 'Hina-chan — traditional decoration, make.', style: 'Grandma warm gentle sincere-warm inviting-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'やった！ひな、頑張る。', en: 'Yay! Hina — try hard.', style: 'High child bright sincere enthusiastic-warm committing, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: '優しく、丁寧に、ね。', en: 'Gently — carefully.', style: 'Grandma warm gentle sincere-warm teaching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '一緒に、するの、楽しい。', en: 'Together — doing, fun.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: '可愛い、出来た。', en: 'Cute — made.', style: 'Grandma warm gentle sincere closing-warm appreciative-tender warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 975 — yumiko + ryosuke, year end (medium)
  {
    id: 'conv_00975',
    context: 'Yumiko and Ryosuke clean the house for year end.',
    purpose: 'married-couple year-end cleaning',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['年末', '一緒', '頑張る', '家族', '大切'],
    cast: ['yumiko_mom', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'お父さん、年末の掃除、一緒に、しよう。', en: 'Father — year-end cleaning, together, do.', style: 'Maternal warm gentle sincere-warm inviting-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、二人で、頑張ろう。', en: 'Yes — two, try hard.', style: 'Father warm gentle sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '家族、迎える、準備、大切。', en: 'Family — welcoming, preparation, important.', style: 'Maternal warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'さくら、リク、楽しみだね。', en: 'Sakura — Riku, looking forward.', style: 'Father warm gentle sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '皆で、新年、迎えたい。', en: 'All — new year, want to welcome.', style: 'Maternal warm gentle sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ryosuke_dad', jp: '一年間、本当、頑張った。', en: 'One year — truly, tried hard.', style: 'Father warm gentle sincere-warm philosophical-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'お疲れ様、本当に。', en: 'Good work — truly.', style: 'Maternal warm gentle sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 976 — sho + hina, snow play (short)
  {
    id: 'conv_00976',
    context: 'Sho and Hina build a snowman.',
    purpose: 'children snowman-build exchange',
    ambient: 'garden_morning',
    sound_effects: [],
    target_vocab: ['雪', '一緒', '楽しい', '頑張る', '可愛い'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、雪だるま、作ろう！', en: 'Sho — snowman, make!', style: 'High child bright sincere proposing-opening excited, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、頑張る！', en: 'Yes — try hard!', style: 'Tiny six-year-old soft small sincere committing-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '雪、丸めて、大きく、する。', en: 'Snow — roll, big, do.', style: 'High child bright sincere directing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '可愛い、雪だるま、出来た。', en: 'Cute — snowman, made.', style: 'Tiny six-year-old soft small sincere appreciative-warm triumphant, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、楽しい、冬。', en: 'Together — fun, winter.', style: 'High child bright sincere closing-warm philosophical-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 977 — kenji + ren, year-end review (medium)
  {
    id: 'conv_00977',
    context: 'Kenji and Ren reflect on the year together at a year-end party.',
    purpose: 'senior-junior year-end reflection exchange',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['忘年会', '一緒', '頑張る', '感謝', '大切'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、忘年会、お疲れ様。', en: 'Ren-kun — year-end party, good work.', style: 'Salaryman warm formal sincere-warm appreciative-opening warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '皆と、一緒、楽しい。', en: 'All — together, fun.', style: 'University student warm soft sincere-warm appreciative-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '一年、本当、頑張ったね、君。', en: 'Year — truly, tried hard, you.', style: 'Salaryman warm formal sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '健次さんの、指導、感謝しています。', en: 'Kenji-san\'s — guidance, grateful.', style: 'University student warm soft sincere-warm grateful-deep respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ、大切な経験、もらった。', en: 'Same — precious experience, received.', style: 'Salaryman warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '来年も、よろしく、お願いします。', en: 'Next year too — please.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'こちらこそ、ね。', en: 'Same.', style: 'Salaryman warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 978 — ryosuke + tatsuya, country new year (medium)
  {
    id: 'conv_00978',
    context: 'Ryosuke and Tatsuya plan to spend new year together in the country.',
    purpose: 'cousin new-year-plan exchange',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['新年', '家族', '一緒', '楽しい', '大切'],
    cast: ['ryosuke_dad', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'たつや、新年、皆で、過ごそう。', en: 'Tatsuya — new year, all, spend.', style: 'Father warm gentle sincere-warm proposing-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'うん、家、十分、広い。', en: 'Yes — house, sufficient, wide.', style: 'Country warm low sincere unhurried welcoming-warm warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: 'ひかりも、初めて、新年。', en: 'Hikari too — first, new year.', style: 'Father warm gentle sincere-warm tender-warm anticipating, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '家族、皆で、集まる、嬉しい。', en: 'Family — all, gather, happy.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒の時間、大切に、しよう。', en: 'Together time — preciously, do.', style: 'Father warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '皆、待ってる。', en: 'All — waiting.', style: 'Country warm low sincere unhurried welcoming-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '楽しい、年明け、になる。', en: 'Fun — year start, becomes.', style: 'Father warm gentle sincere closing-warm anticipating-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 979 — asuka + ren, future plan (long)
  {
    id: 'conv_00979',
    context: 'Asuka helps Ren plan his next career step.',
    purpose: 'teacher-alum future-plan exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['将来', '一緒', '相談', '指導', '大切'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、将来の話、続けよう。', en: 'Ren-kun — future talk, continue.', style: 'Teacher warm gentle sincere-warm welcoming-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、相談、よろしくお願いします。', en: 'Yes — consult, please.', style: 'University student warm formal sincere-warm respectful-warm receptive, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'asuka_teacher', jp: '教育、指導、どう、感じる？', en: 'Education, guidance — how, feel?', style: 'Teacher warm gentle sincere-warm probing-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: '心、惹かれます、本当に。', en: 'Heart — drawn, truly.', style: 'University student warm soft sincere-warm honest-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'なら、進むべき道、見える？', en: 'Then — path to take, visible?', style: 'Teacher warm gentle sincere-warm encouraging-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、決心、ついてきました。', en: 'Yes — decision, came.', style: 'University student warm soft sincere-warm committed-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '素晴らしい。教員免許、目指せる？', en: 'Wonderful. Teacher\'s license — can aim?', style: 'Teacher warm gentle sincere-warm affirming-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: '頑張ります、来年から。', en: 'Try hard — from next year.', style: 'University student warm soft sincere-warm committed-warm determined, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、計画、立てよう。', en: 'Together — plan, set.', style: 'Teacher warm gentle sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '相談、ずっと、お願いします。', en: 'Consult — long, please.', style: 'University student warm soft sincere-warm humble-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '大切な、人生の選択。', en: 'Precious — life choice.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '本当に、感謝してます。', en: 'Truly — grateful.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'これからも、応援、ずっと。', en: 'From now — cheer, long.', style: 'Teacher warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 980 — daichi + sho, fishing winter (short)
  {
    id: 'conv_00980',
    context: 'Daichi takes Sho fishing in winter weather.',
    purpose: 'uncle-child winter-fishing exchange',
    ambient: 'river_morning',
    sound_effects: [],
    target_vocab: ['冬', '釣り', '一緒', '頑張る', '寒い'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、冬の釣り、寒いで、頑張れる？', en: 'Sho — winter fishing, cold, can try?', style: 'Kansai warm bright sincere asking-opening caring, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'うん、頑張る！', en: 'Yes — try hard!', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '寒い時、特別な、お魚、いる。', en: 'Cold time — special, fish, exists.', style: 'Kansai warm bright sincere informative-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、ぼく、見てみたい。', en: 'Fun — I, want to see.', style: 'Tiny six-year-old soft small sincere curious-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: '一緒に、頑張ろうな。', en: 'Together — try hard.', style: 'Kansai warm bright sincere closing-warm tender-promise, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 981 — hiroshi_boss + kenji, recognition gift (medium)
  {
    id: 'conv_00981',
    context: 'Hiroshi gives Kenji a recognition gift for the year.',
    purpose: 'boss-subordinate recognition exchange',
    ambient: 'office_evening',
    sound_effects: [],
    target_vocab: ['プレゼント', '一緒', '感謝', '大切', '会社'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、これ、お前への、プレゼント。', en: 'Kenji — this, to you, present.', style: 'Boss firm formal direct warm-opening tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'え、私に？嬉しいです。', en: 'Eh — to me? Happy.', style: 'Salaryman warm formal sincere-warm surprised-warm humble-grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '一年、本当、頑張った。', en: 'Year — truly, tried hard.', style: 'Boss firm formal direct appreciative-warm philosophical, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'ありがとうございます、感謝、本当に。', en: 'Thanks — grateful, truly.', style: 'Salaryman warm formal sincere-warm grateful-deep respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '会社の宝、お前は。', en: 'Company\'s treasure — you are.', style: 'Boss firm formal direct affirming-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '一緒に、頑張る、これからも。', en: 'Together — try hard, from now.', style: 'Salaryman warm formal sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '大切な、人材だ。', en: 'Precious — talent.', style: 'Boss firm formal direct closing-warm tender-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 982 — yuki + naoko, women friendship (medium)
  {
    id: 'conv_00982',
    context: 'Yuki and Naoko reflect on their friendship before Yuki leaves.',
    purpose: 'two-women departure-reflection exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['友達', '一緒', '思い出', '大切', '海外'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'ゆきちゃん、来月、海外、出発、ね。', en: 'Yuki-chan — next month, overseas, departure.', style: 'Aunt warm soft sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'はい、寂しい、けど、楽しみ。', en: 'Yes — lonely, but, looking forward.', style: 'Office woman bright soft sincere honest-warm balanced, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '思い出、たくさん、出来た。', en: 'Memories — lots, made.', style: 'Aunt warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '本当ね、大切な友達。', en: 'Truly — precious friend.', style: 'Office woman bright soft sincere tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '帰国の度、会いに、来てね。', en: 'Each return — meeting, come.', style: 'Aunt warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '絶対、必ず。', en: 'Surely — certainly.', style: 'Office woman bright soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '頑張ってきて、ね。', en: 'Try hard come.', style: 'Aunt warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 983 — hina + sho, simple winter (short)
  {
    id: 'conv_00983',
    context: 'Hina shows Sho her warm winter mittens.',
    purpose: 'children winter-clothing exchange',
    ambient: 'genkan_morning',
    sound_effects: [],
    target_vocab: ['冬', '一緒', '暖かい', '可愛い', '楽しい'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、ひなの手袋、見て、可愛い。', en: 'Sho — Hina\'s mittens, look, cute.', style: 'High child bright sincere showing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、暖かそう。', en: 'Yes — looks warm.', style: 'Tiny six-year-old soft small sincere observing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '冬、好き、ひな。', en: 'Winter — like, Hina.', style: 'High child bright sincere declaring-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、外、行こう。', en: 'Together — outside, go.', style: 'Tiny six-year-old soft small sincere inviting-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、冬の日。', en: 'Fun — winter day.', style: 'High child bright sincere closing-warm philosophical-bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 984 — saito + ryosuke, year-end checkup (medium)
  {
    id: 'conv_00984',
    context: 'Saito gives Ryosuke a year-end checkup.',
    purpose: 'doctor-patient year-end checkup',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['年末', '健康', '一緒', '相談', '大切'],
    cast: ['saito_doctor', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '亮介さん、年末の検査、終わりました。', en: 'Ryosuke-san — year-end exam, finished.', style: 'Doctor warm formal sincere-warm professional-opening calm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'ryosuke_dad', jp: 'はい、結果、いかがですか？', en: 'Yes — result, how?', style: 'Father warm gentle sincere-warm asking-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'saito_doctor', jp: '健康、良好。安心してください。', en: 'Health — good. Please relax.', style: 'Doctor warm formal sincere-warm reassuring-warm professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'ryosuke_dad', jp: 'ああ、ありがとうございます。', en: 'Ah — thanks.', style: 'Father warm gentle sincere-warm relieved-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '新年、元気で、過ごせます。', en: 'New year — healthy, can spend.', style: 'Doctor warm formal sincere-warm reassuring-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '相談、いつも、感謝してます。', en: 'Consult — always, grateful.', style: 'Father warm gentle sincere-warm grateful-deep respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'お元気で、また、来年。', en: 'Healthy — again, next year.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 985 — mrs_mori + sachiko, family gathering (medium)
  {
    id: 'conv_00985',
    context: 'Mrs. Mori and Sachiko host a small year-end gathering.',
    purpose: 'elderly-women year-end-gathering exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['年末', '一緒', '家族', '楽しい', '大切'],
    cast: ['mrs_mori_neighbor', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '佐知子さん、年末の集まり、楽しいね。', en: 'Sachiko-san — year-end gathering, fun.', style: 'Neighbor warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'うん、皆、来てくれて、嬉しい。', en: 'Yes — all, came, happy.', style: 'Grandma warm gentle sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: '家族、皆、元気で、ね。', en: 'Family — all, healthy.', style: 'Neighbor warm gentle sincere-warm appreciative-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '一年、感謝、いっぱい。', en: 'Year — grateful, full.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: '来年も、一緒に、過ごしたい。', en: 'Next year too — together, want to spend.', style: 'Neighbor warm gentle sincere-warm wishing-warm tender-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '大切な、友人、本当に。', en: 'Precious — friend, truly.', style: 'Grandma warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mrs_mori_neighbor', jp: 'こちらこそ、よい年末を。', en: 'Same — good year-end.', style: 'Neighbor warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_049 wrote', CONVERSATIONS.length, 'files');

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_060)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1186 — yumiko + sho, rainbow (medium)
  {
    id: 'conv_01186',
    context: 'Yumiko points out a rainbow after the rain to Sho.',
    purpose: 'mother-child rainbow exchange',
    ambient: 'window_afternoon',
    sound_effects: [],
    target_vocab: ['空', '虹', '一緒', '綺麗', '優しい'],
    cast: ['yumiko_mom', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'しょうくん、空、見て、虹、出てる。', en: 'Sho-kun — sky, look, rainbow, appearing.', style: 'Maternal warm gentle sincere-warm enthusiastic-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'わあ、本当、綺麗！', en: 'Wow — truly, beautiful!', style: 'Tiny six-year-old soft small sincere awe-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'yumiko_mom', jp: '雨の後、虹、出るね。', en: 'After rain — rainbow, appears.', style: 'Maternal warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '七色、ある、ね。', en: 'Seven colors — exist.', style: 'Tiny six-year-old soft small sincere observing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'yumiko_mom', jp: '一緒に、見れて、嬉しい。', en: 'Together — can see, happy.', style: 'Maternal warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '優しい、お母さん。', en: 'Kind — mom.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'yumiko_mom', jp: '大切な、瞬間、ね。', en: 'Precious — moment.', style: 'Maternal warm gentle sincere closing-warm philosophical-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1187 — hina + sho, body parts (short)
  {
    id: 'conv_01187',
    context: 'Hina and Sho point to body parts on a chart.',
    purpose: 'children body-parts exchange',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['手', '足', '体', '一緒', '楽しい'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、手、見せて。', en: 'Sho — hand, show.', style: 'High child bright sincere asking-opening playful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'こうだね、足も、見せる。', en: 'Like this — foot too, show.', style: 'Tiny six-year-old soft small sincere playful-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '体、全部、知ってる。', en: 'Body — all, know.', style: 'High child bright sincere proud-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、覚えた、ね。', en: 'Together — remembered.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '楽しい、勉強。', en: 'Fun — study.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1188 — saito + kenji, health checkup (medium)
  {
    id: 'conv_01188',
    context: 'Saito gives Kenji a yearly health checkup.',
    purpose: 'doctor-patient yearly checkup',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '体', '相談', '一緒', '大切'],
    cast: ['saito_doctor', 'kenji_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '健次さん、健康診断、結果、良好。', en: 'Kenji-san — health check, result, good.', style: 'Doctor warm formal sincere-warm reassuring-opening calm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'kenji_office', jp: 'ありがとうございます、安心。', en: 'Thanks — relieved.', style: 'Salaryman warm formal sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '体、ちゃんと、休めてる？', en: 'Body — properly, resting?', style: 'Doctor warm formal sincere-warm caring-warm probing, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'kenji_office', jp: '社長、忙しい、けど、気を付けます。', en: 'President — busy, but, careful.', style: 'Salaryman warm formal sincere-warm honest-warm committed, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '相談、いつでも、ね。', en: 'Consult — anytime.', style: 'Doctor warm formal sincere-warm warm-promise tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、長く、お元気で。', en: 'Together — long, healthy.', style: 'Salaryman warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '大切な、お体、ね。', en: 'Precious — body.', style: 'Doctor warm formal sincere closing-warm tender-warm philosophical, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1189 — daichi + sho, summer storm (medium)
  {
    id: 'conv_01189',
    context: 'Daichi and Sho take shelter during a summer storm.',
    purpose: 'uncle-child storm exchange',
    ambient: 'porch_evening',
    sound_effects: ['thunder_distant'],
    target_vocab: ['台風', '雷', '一緒', '安全', '優しい'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、台風、来てる、家、入ろ。', en: 'Sho — typhoon, coming, house, enter.', style: 'Kansai warm bright sincere caring-opening protective, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '怖い、雷、鳴ってる。', en: 'Scary — thunder, sounding.', style: 'Tiny six-year-old soft small sincere honest-warm vulnerable, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: '一緒に、いるから、安心、しい。', en: 'Together — exist, relax.', style: 'Kansai warm bright sincere reassuring-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '優しい、ダイチ、おじさん。', en: 'Kind — Daichi-uncle.', style: 'Tiny six-year-old soft small sincere grateful-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: '安全な、所、にいよう、な。', en: 'Safe — place, be.', style: 'Kansai warm bright sincere protective-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'うん、ありがとう。', en: 'Yes — thanks.', style: 'Tiny six-year-old soft small sincere grateful-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: 'もうすぐ、止むで。', en: 'Soon — stops.', style: 'Kansai warm bright sincere closing-warm reassuring-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 1190 — sakura + ren, milestone (long)
  {
    id: 'conv_01190',
    context: 'Sakura reaches her twentieth published book.',
    purpose: 'cousin twentieth-book exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '夢', '感謝', '頑張る', '大切'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、二十冊目、本当に。', en: 'Ren-bro — twentieth, truly.', style: 'Teen warm soft sincere announcing-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: 'おめでとう、本当に、すごい。', en: 'Congratulations — truly, amazing.', style: 'University student warm soft sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '夢、ずっと、追ってきた。', en: 'Dream — long, chased.', style: 'Teen warm soft sincere reflective-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '一緒に、ここまで、来た、宝。', en: 'Together — until here, came, treasure.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '皆の応援、本当、感謝。', en: 'All\'s cheering — truly, grateful.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'お前、本当、立派、誇り。', en: 'You — truly, splendid, proud.', style: 'University student warm soft sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '頑張ってきた、結果、ね。', en: 'Tried hard — result.', style: 'Teen warm soft sincere appreciative-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'お父さん、お母さん、絶対、喜ぶ。', en: 'Father — Mother, surely, happy.', style: 'University student warm soft sincere-warm tender-warm anticipating, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '家族、大切、本当に。', en: 'Family — precious, truly.', style: 'Teen warm soft sincere tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'これからも、頑張ろう、ずっと。', en: 'From now — try hard, long.', style: 'University student warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、毎日、本当に。', en: 'Grateful — every day, truly.', style: 'Teen warm soft sincere tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'ずっと、書き続ける、絶対。', en: 'Long — keep writing, surely.', style: 'Teen warm soft sincere closing-warm committed-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1191 — hina + asuka, snow (short)
  {
    id: 'conv_01191',
    context: 'Asuka and Hina look at the first snow.',
    purpose: 'teacher-child first-snow exchange',
    ambient: 'window_morning',
    sound_effects: [],
    target_vocab: ['雪', '一緒', '綺麗', '可愛い', '楽しい'],
    cast: ['asuka_teacher', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'ひなちゃん、雪、初めての雪、ね。', en: 'Hina-chan — snow, first snow.', style: 'Teacher warm gentle sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'わあ、可愛い、綺麗。', en: 'Wow — cute, beautiful.', style: 'High child bright sincere awe-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、外、見よう。', en: 'Together — outside, look.', style: 'Teacher warm gentle sincere-warm inviting-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: '楽しい、雪の日。', en: 'Fun — snow day.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'asuka_teacher', jp: '大切な、思い出、ね。', en: 'Precious — memory.', style: 'Teacher warm gentle sincere closing-warm philosophical-tender deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1192 — kenji + sakura, business article (medium)
  {
    id: 'conv_01192',
    context: 'Kenji writes a magazine article about Sakura\'s journey.',
    purpose: 'businessman-author article exchange',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['作品', '一緒', '夢', '記事', '頑張る'],
    cast: ['kenji_office', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'さくらさん、記事、書かせて、いいですか？', en: 'Sakura-san — article, write, okay?', style: 'Salaryman warm formal sincere-warm asking-opening respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'もちろん、光栄です。', en: 'Of course — honored.', style: 'Teen warm soft sincere humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '作品、ずっと、見てきた、本当に。', en: 'Works — long, watched, truly.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '夢、追ってきた、人生、本当、立派。', en: 'Dream — chased, life, truly, splendid.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '頑張ってきた、皆と、一緒に。', en: 'Tried hard — with all, together.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'これからも、応援、ずっと。', en: 'From now — cheer, long.', style: 'Salaryman warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1193 — mei + saito, third pregnancy follow-up (medium)
  {
    id: 'conv_01193',
    context: 'Saito follows up with Mei mid-pregnancy.',
    purpose: 'doctor-mother pregnancy follow-up',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '相談', '大切', '頑張る'],
    cast: ['saito_doctor', 'mei_romantic'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'メイさん、体調、いかが？', en: 'Mei-san — condition, how?', style: 'Doctor warm formal sincere-warm caring-opening calm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'mei_romantic', jp: '元気ですよ、ありがとうございます。', en: 'Energetic — thanks.', style: 'Romantic warm soft sincere-warm grateful-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '健康、お子さんも、順調。', en: 'Health — child too, smooth.', style: 'Doctor warm formal sincere-warm reassuring-warm professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'mei_romantic', jp: 'ああ、本当、安心。', en: 'Ah — truly, relieved.', style: 'Romantic warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '相談、いつでも、ね。', en: 'Consult — anytime.', style: 'Doctor warm formal sincere-warm warm-promise tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '一緒に、頑張ります、本当に。', en: 'Together — try hard, truly.', style: 'Romantic warm soft sincere-warm committed-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '大切な、お体、ね。', en: 'Precious — body.', style: 'Doctor warm formal sincere closing-warm tender-warm philosophical, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1194 — sachiko + naoko, evening tea (short)
  {
    id: 'conv_01194',
    context: 'Sachiko and Naoko share evening tea.',
    purpose: 'elderly-aunt evening-tea exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '大切', '感謝'],
    cast: ['sachiko_grandma', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: '直子ちゃん、お茶、入れたよ。', en: 'Naoko-chan — tea, made.', style: 'Grandma warm gentle sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: 'おばさん、優しい、ね。', en: 'Auntie — kind.', style: 'Aunt warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: '一緒に、過ごす、楽しい時間。', en: 'Together — spend, fun time.', style: 'Grandma warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '感謝、本当に。', en: 'Grateful — truly.', style: 'Aunt warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: '大切な、毎日、ね。', en: 'Precious — every day.', style: 'Grandma warm gentle sincere closing-warm tender-philosophical deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1195 — ryosuke + tatsuya, brothers porch (medium)
  {
    id: 'conv_01195',
    context: 'Ryosuke and Tatsuya share a quiet country evening.',
    purpose: 'cousin quiet-porch exchange',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['一緒', '人生', '大切', '感謝', '家族'],
    cast: ['ryosuke_dad', 'tatsuya_country'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'たつや、人生、本当、不思議だね。', en: 'Tatsuya — life, truly, mysterious.', style: 'Father warm gentle sincere-warm philosophical-opening reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'うん、ここまで、来た、宝や。', en: 'Yes — until here, came, treasure.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'ryosuke_dad', jp: '家族、皆、近くで、嬉しい。', en: 'Family — all, close, happy.', style: 'Father warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '感謝、毎日、本当に。', en: 'Grateful — every day, truly.', style: 'Country warm low sincere unhurried grateful-deep tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '一緒に、ここで、過ごせる、幸せ。', en: 'Together — here, can spend, happy.', style: 'Father warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '大切な、時間、ね。', en: 'Precious — time.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'これからも、ずっと、ね。', en: 'From now — long.', style: 'Father warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1196 — sho + hina, art class (short)
  {
    id: 'conv_01196',
    context: 'Sho and Hina paint pictures in art class.',
    purpose: 'children art-class exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['絵', '一緒', '楽しい', '可愛い', '頑張る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、絵、何、描いてる？', en: 'Sho — picture, what, drawing?', style: 'High child bright sincere asking-opening engaged, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '犬、可愛い、犬。', en: 'Dog — cute, dog.', style: 'Tiny six-year-old soft small sincere proud-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'すごい、頑張ってる。', en: 'Amazing — trying hard.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ひな、何、描く？', en: 'Hina — what, draw?', style: 'Tiny six-year-old soft small sincere asking-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、楽しい、絵。', en: 'Together — fun, picture.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1197 — yuki + naoko, autumn walk (medium)
  {
    id: 'conv_01197',
    context: 'Yuki visits Naoko in the country for an autumn walk.',
    purpose: 'two-women autumn-walk exchange',
    ambient: 'street_afternoon',
    sound_effects: [],
    target_vocab: ['秋', '一緒', '友達', '楽しい', '感謝'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、秋、本当、綺麗。', en: 'Naoko-san — autumn, truly, beautiful.', style: 'Office woman bright soft sincere appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '田舎の秋、最高、ね。', en: 'Country autumn — best.', style: 'Aunt warm soft sincere-warm matching-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '友達と、一緒、嬉しい。', en: 'With friend — together, happy.', style: 'Office woman bright soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '毎年、来てくれて、感謝。', en: 'Every year — come, grateful.', style: 'Aunt warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Office woman bright soft sincere matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '楽しい、毎日、過ごしてる。', en: 'Fun — every day, spending.', style: 'Aunt warm soft sincere-warm appreciative-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'これからも、ずっと、ね。', en: 'From now — long.', style: 'Office woman bright soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1198 — daichi + sho, sports growth (medium)
  {
    id: 'conv_01198',
    context: 'Daichi watches Sho play in a sports tournament.',
    purpose: 'uncle-child tournament exchange',
    ambient: 'park_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '応援', 'スポーツ', '楽しい'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、頑張ってるな、本当に。', en: 'Sho — trying hard, truly.', style: 'Kansai warm bright sincere appreciative-opening proud, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '応援、ありがとう、本当に。', en: 'Cheering — thanks, truly.', style: 'Tiny six-year-old soft small sincere grateful-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: 'スポーツ、上手、なった、本当。', en: 'Sports — skilled, became, truly.', style: 'Kansai warm bright sincere appreciative-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ダイチおじさんの、お陰。', en: 'Daichi-uncle\'s — thanks.', style: 'Tiny six-year-old soft small sincere humble-warm grateful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: '一緒に、来た、嬉しいで。', en: 'Together — came, happy.', style: 'Kansai warm bright sincere tender-deep grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '楽しい、本当、ずっと。', en: 'Fun — truly, long.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'daichi_kansai', jp: 'これからも、一緒に、頑張ろう。', en: 'From now — together, try hard.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1199 — asuka + ren, education vision (long)
  {
    id: 'conv_01199',
    context: 'Asuka and Ren plan a new education program together.',
    purpose: 'mentor-colleague education-program exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['指導', '一緒', '生徒', '頑張る', '大切'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'レン君、新しい教育プログラム、考えてる。', en: 'Ren-kun — new education program, considering.', style: 'Teacher warm gentle sincere-warm announcing-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'おお、聞かせてください。', en: 'Oh — please let listen.', style: 'University student warm soft sincere-warm engaged-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '生徒、自分で、考える力、育てる。', en: 'Students — by self, thinking strength, raise.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'いい方向、本当、共感する。', en: 'Good direction — truly, sympathize.', style: 'University student warm soft sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、計画、立てよう。', en: 'Together — plan, set.', style: 'Teacher warm gentle sincere-warm collaborative-warm encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、本当に。', en: 'Try hard — truly.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'お前の、指導、本当、立派。', en: 'Your — guidance, truly, splendid.', style: 'Teacher warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'ren_uni', jp: '先生から、学んだ、本当に。', en: 'From teacher — learned, truly.', style: 'University student warm soft sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '大切な、教育、繋いで、いこう。', en: 'Precious — education, connect.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '感謝、いつも、本当に。', en: 'Grateful — always, truly.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Teacher warm gentle sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '一緒に、未来、創ろう。', en: 'Together — future, create.', style: 'University student warm soft sincere-warm philosophical-warm tender-promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: 'これからも、ね、頑張ろう。', en: 'From now — try hard.', style: 'Teacher warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1200 — milestone: sakura + asuka (medium)
  {
    id: 'conv_01200',
    context: 'Sakura and Asuka mark twenty years since their first meeting.',
    purpose: 'teacher-alum twentieth-year exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '大切', '指導'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、もう、二十年、ね。', en: 'Teacher — already, twenty years.', style: 'Teen warm soft sincere reflective-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: '本当に、早い、ね。', en: 'Truly — fast.', style: 'Teacher warm gentle sincere-warm philosophical-warm matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '指導、ずっと、感謝。', en: 'Guidance — long, grateful.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '人生、お前と、過ごせて、宝。', en: 'Life — with you, could spend, treasure.', style: 'Teacher warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、ここまで、感謝、本当に。', en: 'Together — until here, grateful, truly.', style: 'Teen warm soft sincere appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '大切な、生徒、本当に。', en: 'Precious — student, truly.', style: 'Teacher warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'これからも、ね、本当に。', en: 'From now — truly.', style: 'Teen warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1201 — kenji + ren, business advice (medium)
  {
    id: 'conv_01201',
    context: 'Ren asks Kenji about transitioning students to careers.',
    purpose: 'alum-mentor career-transition exchange',
    ambient: 'office_evening',
    sound_effects: [],
    target_vocab: ['指導', '一緒', '生徒', '頑張る', '会社'],
    cast: ['ren_uni', 'kenji_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: '健次さん、生徒、会社で、見守って、感謝。', en: 'Kenji-san — students, at company, watch over, grateful.', style: 'University student warm soft sincere-warm grateful-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: 'こちらこそ、頑張ってる、皆。', en: 'Same — trying hard, all.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '指導、一緒に、続けて、本当に、嬉しい。', en: 'Guidance — together, continue, truly, happy.', style: 'University student warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '会社、お前の生徒、本当、宝。', en: 'Company — your students, truly, treasure.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '繋いで、いこう、ずっと。', en: 'Connect — long.', style: 'University student warm soft sincere-warm tender-promise philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Salaryman warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '頑張ろう、これからも、一緒に。', en: 'Try hard — from now, together.', style: 'University student warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1202 — daichi + mei, sweet family (short)
  {
    id: 'conv_01202',
    context: 'Daichi and Mei enjoy a quiet moment at home with children sleeping.',
    purpose: 'married-couple quiet-evening exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '幸せ', '優しい', '大切'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'メイ、子供、皆、寝た。', en: 'Mei — children, all, slept.', style: 'Kansai warm bright sincere reporting-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '良かった、優しい、毎日。', en: 'Good — kind, every day.', style: 'Romantic warm soft sincere-warm tender-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '家族、本当、宝やな。', en: 'Family — truly, treasure.', style: 'Kansai warm bright sincere philosophical-warm tender-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '一緒に、幸せ、本当。', en: 'Together — happy, truly.', style: 'Romantic warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '大切な、人、本当に。', en: 'Precious — person, truly.', style: 'Kansai warm bright sincere closing-warm tender-deep loving, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1203 — yumiko + sachiko, mother-grandma (medium)
  {
    id: 'conv_01203',
    context: 'Yumiko visits Sachiko for tea and conversation.',
    purpose: 'mother-grandma tea exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '家族', '感謝', '大切'],
    cast: ['yumiko_mom', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'おばさん、お元気で、本当に。', en: 'Auntie — healthy, truly.', style: 'Maternal warm gentle sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '優子ちゃん、ありがとう、いつも。', en: 'Yumiko-chan — thanks, always.', style: 'Grandma warm gentle sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '家族、皆、近くで、嬉しい。', en: 'Family — all, close, happy.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: '一緒に、過ごせる、本当に、感謝。', en: 'Together — can spend, truly, grateful.', style: 'Grandma warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '優しい、おばさん、本当に。', en: 'Kind — auntie, truly.', style: 'Maternal warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: '大切な、家族、本当に。', en: 'Precious — family, truly.', style: 'Grandma warm gentle sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'これからも、よろしく、本当に。', en: 'From now — please, truly.', style: 'Maternal warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1204 — sho + sakura, story tell (short)
  {
    id: 'conv_01204',
    context: 'Sakura tells Sho a small bedtime story.',
    purpose: 'older-younger bedtime-story exchange',
    ambient: 'bedroom_evening',
    sound_effects: [],
    target_vocab: ['一緒', '本', '優しい', '楽しい', '優しい'],
    cast: ['sakura_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'さくらお姉ちゃん、本、読んで。', en: 'Sakura sister — book, read.', style: 'Tiny six-year-old soft small sincere asking-opening hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sakura_teen', jp: 'うん、優しい話、ね。', en: 'Yes — kind story.', style: 'Teen warm soft sincere agreeing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '一緒に、聞ける、嬉しい。', en: 'Together — can listen, happy.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sakura_teen', jp: 'お話、楽しい、ね。', en: 'Story — fun.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'おやすみ、お姉ちゃん。', en: 'Good night — sister.', style: 'Tiny six-year-old soft small sincere closing-warm tender-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' }
    ]
  },
  // 1205 — kenji + sakura, business success (medium)
  {
    id: 'conv_01205',
    context: 'Kenji and Sakura attend the same business award ceremony.',
    purpose: 'businessman-author award exchange',
    ambient: 'plaza_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '頑張る', '夢', '大切'],
    cast: ['kenji_office', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'さくらさん、おめでとう、本当に。', en: 'Sakura-san — congratulations, truly.', style: 'Salaryman warm formal sincere-warm warm-opening tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '健次さんも、おめでとう。', en: 'Kenji-san too — congratulations.', style: 'Teen warm soft sincere matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '同じ年、認められる、本当、不思議。', en: 'Same year — recognized, truly, mysterious.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '人生、本当、繋がってる、感じ。', en: 'Life — truly, connected, feel.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '夢、追ってきた、結果、本当に。', en: 'Dream — chased, result, truly.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、頑張れる、嬉しい。', en: 'Together — can try hard, happy.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'Salaryman warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_060 wrote', CONVERSATIONS.length, 'files');

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_058)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 1146 — asuka + sho, homework help (medium)
  {
    id: 'conv_01146',
    context: 'Asuka helps Sho with his homework.',
    purpose: 'teacher-child homework-help exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['宿題', '一緒', '頑張る', '勉強', '優しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、宿題、見せて。', en: 'Sho-kun — homework, show.', style: 'Teacher warm gentle sincere-warm asking-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'はい、ここ、難しい。', en: 'Yes — here, difficult.', style: 'Tiny six-year-old soft small sincere vulnerable-warm honest, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、考えよう、ゆっくり。', en: 'Together — think, slowly.', style: 'Teacher warm gentle sincere-warm collaborative-warm patient, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'うん、頑張る。', en: 'Yes — try hard.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '分かったね、優しく、書こう。', en: 'Understood — gently, write.', style: 'Teacher warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '勉強、楽しい、本当。', en: 'Study — fun, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: 'よく出来た、しょうくん。', en: 'Well done — Sho-kun.', style: 'Teacher warm gentle sincere closing-warm affirming-tender warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' }
    ]
  },
  // 1147 — sho + hina, exam (short)
  {
    id: 'conv_01147',
    context: 'Sho and Hina prepare for a class test.',
    purpose: 'children test-prep exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['テスト', '一緒', '頑張る', '勉強', '楽しい'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、テスト、近い、勉強しよう。', en: 'Hina — test, close, study.', style: 'Tiny six-year-old soft small sincere proposing-opening committed, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: 'うん、一緒に、頑張る。', en: 'Yes — together, try hard.', style: 'High child bright sincere committed-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '問題、難しい？', en: 'Problem — difficult?', style: 'Tiny six-year-old soft small sincere asking-warm engaged, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '少し、けど、楽しい。', en: 'A bit — but, fun.', style: 'High child bright sincere honest-warm appreciative, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒なら、安心。', en: 'Together — relieved.', style: 'Tiny six-year-old soft small sincere closing-warm tender-deep, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' }
    ]
  },
  // 1148 — kenji + sakura, business interview (medium)
  {
    id: 'conv_01148',
    context: 'Kenji interviews Sakura for a business article.',
    purpose: 'business-author interview exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['作品', '一緒', '夢', '頑張る', '感謝'],
    cast: ['kenji_office', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'さくらさん、お時間、ありがとう。', en: 'Sakura-san — time, thanks.', style: 'Salaryman warm formal sincere-warm welcoming-opening respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '健次さん、こちらこそ、光栄。', en: 'Kenji-san — same, honored.', style: 'Teen warm soft sincere humble-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'kenji_office', jp: '作品、ずっと、応援してる。', en: 'Work — long, supporting.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '本当に、感謝です。', en: 'Truly — grateful.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '夢、どう、追ってきた？', en: 'Dream — how, chased?', style: 'Salaryman warm soft sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sakura_teen', jp: '皆の支え、本当、頑張ってきた。', en: 'All\'s support — truly, tried hard.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、未来、繋いで、いきましょう。', en: 'Together — future, connect.', style: 'Salaryman warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1149 — ren + sho, baseball practice (medium)
  {
    id: 'conv_01149',
    context: 'Ren helps Sho practice baseball.',
    purpose: 'cousin baseball-practice exchange',
    ambient: 'park_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', 'スポーツ', '楽しい', '応援'],
    cast: ['ren_uni', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'しょう、バット、振ってみよう。', en: 'Sho — bat, try swinging.', style: 'University student warm soft sincere-warm teaching-opening encouraging, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'うん、頑張る。', en: 'Yes — try hard.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'ren_uni', jp: '当たった！すごい。', en: 'Hit! Amazing.', style: 'University student warm soft sincere-warm appreciative-warm enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sho_child', jp: '楽しい、スポーツ、本当。', en: 'Fun — sports, truly.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'ren_uni', jp: '応援、絶対、する。', en: 'Cheer — surely, do.', style: 'University student warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '一緒に、また、しよう。', en: 'Together — again, do.', style: 'Tiny six-year-old soft small sincere asking-warm hopeful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'ren_uni', jp: 'もちろん、いつでも。', en: 'Of course — anytime.', style: 'University student warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1150 — sakura + ren, milestone reflection (long)
  {
    id: 'conv_01150',
    context: 'Sakura and Ren reflect on hitting their 15-book milestone together.',
    purpose: 'cousin milestone-reflection exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '夢', '感謝', '頑張る', '人生'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、十五冊目、もうすぐ。', en: 'Ren-bro — fifteenth, soon.', style: 'Teen warm soft sincere announcing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '本当、すごい。誇り、思ってる。', en: 'Truly — amazing. Proud, thinking.', style: 'University student warm soft sincere-warm appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'お兄ちゃん、ずっと、応援、本当に。', en: 'Brother — long, supported, truly.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '俺も、お前から、たくさん、学んだ。', en: 'I too — from you, lots, learned.', style: 'University student warm soft sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '夢、まだ、続く、本当に。', en: 'Dream — still, continue, truly.', style: 'Teen warm soft sincere reflective-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、ここまで、来た、宝。', en: 'Together — until here, came, treasure.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '人生、本当、繋がってる、感じ。', en: 'Life — truly, connected, feel.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '感謝、家族、皆に。', en: 'Grateful — family, to all.', style: 'University student warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: 'お母さん、お父さん、本当、ありがたい。', en: 'Mom — Dad, truly, grateful.', style: 'Teen warm soft sincere philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '一緒に、頑張ろう、これからも。', en: 'Together — try hard, from now.', style: 'University student warm soft sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'うん、ずっと、ね。', en: 'Yes — long.', style: 'Teen warm soft sincere tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '大切な、出会い、本当に。', en: 'Precious — meeting, truly.', style: 'University student warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '頑張る、皆と、一緒。', en: 'Try hard — with all, together.', style: 'Teen warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1151 — hina + sho, baby brother (short)
  {
    id: 'conv_01151',
    context: 'Hina and Sho play with Mei\'s second baby.',
    purpose: 'children baby-play exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['一緒', '可愛い', '家族', '優しい', '楽しい'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、赤ちゃん、可愛いね。', en: 'Sho — baby, cute.', style: 'High child bright sincere appreciative-opening tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、優しく、抱っこ、する。', en: 'Yes — gently, hold, do.', style: 'Tiny six-year-old soft small sincere committed-warm careful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '家族、また、増えた。', en: 'Family — again, increased.', style: 'High child bright sincere philosophical-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、遊ぶの、楽しみ。', en: 'Together — playing, looking forward.', style: 'Tiny six-year-old soft small sincere anticipating-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、これから。', en: 'Fun — from now.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1152 — takeda + ren, retirement gift (medium)
  {
    id: 'conv_01152',
    context: 'Takeda gives Ren a retirement memento.',
    purpose: 'officer-alum retirement-memento exchange',
    ambient: 'plaza_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '町', '大切', '頑張る'],
    cast: ['takeda_officer', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'レン君、これ、お前に。', en: 'Ren-kun — this, to you.', style: 'Officer firm formal direct giving-opening tender, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'え、本当に？', en: 'Eh — truly?', style: 'University student warm soft sincere-warm surprised-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '一緒に、町、守れた、感謝。', en: 'Together — town, could protect, grateful.', style: 'Officer firm formal direct tender-warm philosophical, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'こちらこそ、大切な、思い出。', en: 'Same — precious, memory.', style: 'University student warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'takeda_officer', jp: '頑張れよ、教員、続けて。', en: 'Try hard — teacher, continue.', style: 'Officer firm formal direct tender-promise warm, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'はい、絶対に。', en: 'Yes — surely.', style: 'University student warm soft sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '元気で、また、会おう。', en: 'Healthy — again, meet.', style: 'Officer firm formal direct closing-warm tender-promise deep, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1153 — mei + daichi, vacation (medium)
  {
    id: 'conv_01153',
    context: 'Mei and Daichi plan a family vacation.',
    purpose: 'married-couple vacation-planning exchange',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['旅行', '家族', '一緒', '楽しい', '計画'],
    cast: ['mei_romantic', 'daichi_kansai'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ダイチ、旅行、計画、立てよう。', en: 'Daichi — travel, plan, set.', style: 'Romantic warm soft sincere-warm proposing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ええなあ、どこ、行こうか。', en: 'Nice — where, go?', style: 'Kansai warm bright sincere engaged-warm asking, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '海、子供たち、初めて。', en: 'Sea — children, first.', style: 'Romantic warm soft sincere-warm enthusiastic-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '楽しい、絶対、なるで。', en: 'Fun — surely, becomes.', style: 'Kansai warm bright sincere anticipating-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '家族、皆で、思い出、作りたい。', en: 'Family — all, memories, want to make.', style: 'Romantic warm soft sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '夏休み、ぴったり、やな。', en: 'Summer vacation — perfect.', style: 'Kansai warm bright sincere planning-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: '一緒に、本当、楽しみ。', en: 'Together — truly, looking forward.', style: 'Romantic warm soft sincere closing-warm tender-deep anticipating, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1154 — saito + ryosuke, aging (medium)
  {
    id: 'conv_01154',
    context: 'Saito and Ryosuke discuss aging gracefully.',
    purpose: 'doctor-elderly aging exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '一緒', '人生', '大切', '感謝'],
    cast: ['saito_doctor', 'ryosuke_dad'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '亮介さん、健康診断、結果、良好。', en: 'Ryosuke-san — health check, result, good.', style: 'Doctor warm formal sincere-warm reassuring-opening calm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'ryosuke_dad', jp: 'ああ、本当、感謝です。', en: 'Ah — truly, grateful.', style: 'Father warm gentle sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '生活習慣、本当、優れてる。', en: 'Life habits — truly, superior.', style: 'Doctor warm formal sincere-warm appreciative-warm professional, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'ryosuke_dad', jp: '人生、ゆっくり、過ごすの、大切。', en: 'Life — slowly, spending, precious.', style: 'Father warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '一緒に、また、来年。', en: 'Together — again, next year.', style: 'Doctor warm formal sincere-warm warm-promise tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'よろしく、本当に。', en: 'Best — truly.', style: 'Father warm gentle sincere-warm grateful-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'お元気で。', en: 'Healthy.', style: 'Doctor warm formal sincere closing-warm tender-brief, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1155 — hina + sachiko, garden show (short)
  {
    id: 'conv_01155',
    context: 'Hina shows Sachiko the flowers she grew herself.',
    purpose: 'child-grandma garden-show exchange',
    ambient: 'garden_afternoon',
    sound_effects: [],
    target_vocab: ['花', '一緒', '優しい', '頑張る', '可愛い'],
    cast: ['hina_child', 'sachiko_grandma'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'おばあちゃん、花、咲いた、見て。', en: 'Grandma — flower, bloomed, look.', style: 'High child bright sincere proud-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: 'わあ、可愛い、頑張ったね。', en: 'Wow — cute, tried hard.', style: 'Grandma warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '毎日、優しく、お世話、した。', en: 'Every day — gently, care, did.', style: 'High child bright sincere proud-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: '一緒に、見守ったね。', en: 'Together — watched over.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、嬉しい、本当に。', en: 'Yes — happy, truly.', style: 'High child bright sincere closing-warm tender-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1156 — kenji + ren, life path (medium)
  {
    id: 'conv_01156',
    context: 'Kenji and Ren reflect on the different paths they took.',
    purpose: 'senior-alum path-reflection exchange',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['一緒', '人生', '感謝', '頑張る', '大切'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、お互い、違う道、選んだ。', en: 'Ren-kun — mutually, different paths, chose.', style: 'Salaryman warm soft sincere-warm reflective-opening philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、でも、繋がってる、本当に。', en: 'Yes — but, connected, truly.', style: 'University student warm soft sincere-warm matching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '会社、教育、両方、大切。', en: 'Company — education, both, precious.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '人生、いろんな道、ある。', en: 'Life — various paths, exist.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: '一緒に、ここまで、来た、嬉しい。', en: 'Together — until here, came, happy.', style: 'Salaryman warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'University student warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '頑張ろう、これからも、ね。', en: 'Try hard — from now.', style: 'Salaryman warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1157 — yumiko + sakura, mother-author (medium)
  {
    id: 'conv_01157',
    context: 'Yumiko discusses Sakura\'s author career proudly.',
    purpose: 'mother-daughter career-pride exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '夢', '大切', '感謝'],
    cast: ['yumiko_mom', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'さくらちゃん、本、増えて、嬉しい。', en: 'Sakura-chan — books, increased, happy.', style: 'Maternal warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'お母さん、応援、本当に、感謝。', en: 'Mom — supporting, truly, grateful.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '夢、追って、本当、立派。', en: 'Dream — chased, truly, splendid.', style: 'Maternal warm gentle sincere-warm proud-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '家族、皆、誇り、思ってる。', en: 'Family — all, proud, thinking.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '大切な、娘、本当に。', en: 'Precious — daughter, truly.', style: 'Maternal warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、いつも、応援、感謝。', en: 'Together — always, cheering, grateful.', style: 'Teen warm soft sincere appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: 'これからも、本当、ね。', en: 'From now — truly.', style: 'Maternal warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1158 — daichi + sho, sports league (short)
  {
    id: 'conv_01158',
    context: 'Daichi accompanies Sho to his first sports league game.',
    purpose: 'uncle-child sports-debut exchange',
    ambient: 'park_morning',
    sound_effects: [],
    target_vocab: ['一緒', '頑張る', '応援', 'スポーツ', '楽しい'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、今日、初めての試合、頑張れな。', en: 'Sho — today, first game, try hard.', style: 'Kansai warm bright sincere encouraging-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、緊張、する。', en: 'Yes — tense, do.', style: 'Tiny six-year-old soft small sincere honest-warm vulnerable, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: '応援、絶対、するで。', en: 'Cheer — surely, do.', style: 'Kansai warm bright sincere reassuring-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒なら、安心。', en: 'Together — relieved.', style: 'Tiny six-year-old soft small sincere appreciative-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'daichi_kansai', jp: '楽しい、試合、なるで。', en: 'Fun — game, becomes.', style: 'Kansai warm bright sincere closing-warm tender-promise enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1159 — mei + naoko, baby visit (medium)
  {
    id: 'conv_01159',
    context: 'Mei visits Naoko in the country with her baby.',
    purpose: 'mother-aunt visit exchange',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '可愛い', '優しい', '大切'],
    cast: ['mei_romantic', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'メイちゃん、来てくれて、嬉しい。', en: 'Mei-chan — came, happy.', style: 'Aunt warm soft sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '直子さん、ご無沙汰、しています。', en: 'Naoko-san — long no visit.', style: 'Romantic warm soft sincere-warm humble-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '赤ちゃん、すごく、可愛い。', en: 'Baby — very, cute.', style: 'Aunt warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '家族、また、増えて、嬉しい。', en: 'Family — again, increased, happy.', style: 'Romantic warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'naoko_aunt', jp: '優しく、抱っこ、するね。', en: 'Gently — hold.', style: 'Aunt warm soft sincere-warm careful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '一緒に、過ごせて、本当に、嬉しい。', en: 'Together — can spend, truly, happy.', style: 'Romantic warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '大切な、時間、本当に。', en: 'Precious — time, truly.', style: 'Aunt warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1160 — asuka + sakura, mentor closure (long)
  {
    id: 'conv_01160',
    context: 'Asuka and Sakura mark the end of a long mentorship.',
    purpose: 'teacher-alum closure-reflection exchange',
    ambient: 'classroom_evening',
    sound_effects: [],
    target_vocab: ['一緒', '感謝', '人生', '大切', '指導'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、長い、長い、関係。', en: 'Sakura-san — long, long, relationship.', style: 'Teacher warm gentle sincere-warm reflective-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '先生、本当、感謝、ずっと。', en: 'Teacher — truly, grateful, long.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '指導、出来た事、本当、宝。', en: 'Guidance — could do, truly, treasure.', style: 'Teacher warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '人生、変えてくれた、本当に。', en: 'Life — changed, truly.', style: 'Teen warm soft sincere appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'お前から、私も、たくさん、学んだ。', en: 'From you — I too, lots, learned.', style: 'Teacher warm gentle sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、ずっと、来た、嬉しい。', en: 'Together — long, came, happy.', style: 'Teen warm soft sincere tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '大切な、生徒、本当に。', en: 'Precious — student, truly.', style: 'Teacher warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: 'これからも、繋がってる、感じ。', en: 'From now — connected, feel.', style: 'Teen warm soft sincere tender-promise philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'asuka_teacher', jp: '応援、ずっと、する。', en: 'Cheer — long, do.', style: 'Teacher warm gentle sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '頑張る、ずっと、書き続ける。', en: 'Try hard — long, keep writing.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'お前の作品、ずっと、読む。', en: 'Your works — long, read.', style: 'Teacher warm gentle sincere-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '感謝、毎日、本当に。', en: 'Grateful — every day, truly.', style: 'Teen warm soft sincere tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Teacher warm gentle sincere closing-warm matching-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1161 — hiroshi_boss + kenji, last meeting (medium)
  {
    id: 'conv_01161',
    context: 'Hiroshi has his last formal meeting with Kenji.',
    purpose: 'mentor-successor last-meeting exchange',
    ambient: 'office_evening',
    sound_effects: [],
    target_vocab: ['会社', '一緒', '感謝', '人生', '大切'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、今日、最後の会議、本当に。', en: 'Kenji — today, last meeting, truly.', style: 'Boss firm formal direct reflective-opening tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '寂しい、けど、感謝、本当に。', en: 'Lonely — but, grateful, truly.', style: 'Salaryman warm formal sincere-warm honest-warm grateful-deep, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'お前、本当、頼もしい、社長だ。', en: 'You — truly, reliable, president.', style: 'Boss firm formal direct affirming-warm tender, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '部長のお陰、本当に。', en: 'Boss\'s thanks — truly.', style: 'Salaryman warm formal sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '一緒に、ここまで、来た、宝。', en: 'Together — until here, came, treasure.', style: 'Boss firm formal direct philosophical-warm tender-deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '人生、大切な、出会い。', en: 'Life — precious, meeting.', style: 'Salaryman warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: 'これからも、応援、する。', en: 'From now — cheer, do.', style: 'Boss firm formal direct closing-warm tender-promise deep, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 1162 — daichi + tatsuya, autumn evening (short)
  {
    id: 'conv_01162',
    context: 'Daichi and Tatsuya sit on the porch as autumn ends.',
    purpose: 'cousin autumn-evening reflection',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['秋', '一緒', '楽しい', '町', '感謝'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、秋、もうすぐ、終わり。', en: 'Tatsuya — autumn, soon, end.', style: 'Kansai warm bright sincere reflective-opening tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'うん、町、賑やか、嬉しい。', en: 'Yes — town, lively, happy.', style: 'Country warm low sincere unhurried appreciative-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '今年も、楽しい、一年。', en: 'This year too — fun, year.', style: 'Kansai warm bright sincere philosophical-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '感謝、本当、皆に。', en: 'Grateful — truly, to all.', style: 'Country warm low sincere unhurried tender-deep grateful, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '一緒に、来年も。', en: 'Together — next year too.', style: 'Kansai warm bright sincere closing-warm tender-promise warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 1163 — sakura + yumiko, mother day (medium)
  {
    id: 'conv_01163',
    context: 'Sakura visits Yumiko on Mother\'s Day.',
    purpose: 'mother-daughter mother-day exchange',
    ambient: 'tatami_room_morning',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '感謝', '大切', '楽しい'],
    cast: ['sakura_teen', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'お母さん、母の日、おめでとう。', en: 'Mom — Mother\'s Day, congratulations.', style: 'Teen warm soft sincere warm-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: 'ありがとう、さくらちゃん。', en: 'Thanks — Sakura-chan.', style: 'Maternal warm gentle sincere-warm grateful-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '感謝、本当、いつも。', en: 'Grateful — truly, always.', style: 'Teen warm soft sincere grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '家族、皆、来てくれて、嬉しい。', en: 'Family — all, came, happy.', style: 'Maternal warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '大切な、お母さん、本当に。', en: 'Precious — mom, truly.', style: 'Teen warm soft sincere tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '一緒に、過ごせて、幸せ。', en: 'Together — can spend, happy.', style: 'Maternal warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '楽しい、毎年。', en: 'Fun — every year.', style: 'Teen warm soft sincere closing-warm tender-philosophical warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1164 — ren + aoi, simple morning (short)
  {
    id: 'conv_01164',
    context: 'Ren makes Aoi morning coffee.',
    purpose: 'married-couple quiet-morning exchange',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '美味しい', '大切'],
    cast: ['ren_uni', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'あおい、コーヒー、入れたよ。', en: 'Aoi — coffee, made.', style: 'University student warm soft sincere-warm tender-opening loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'ありがとう、優しい、ね。', en: 'Thanks — kind.', style: 'Barista warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '美味しい、いつも。', en: 'Delicious — always.', style: 'University student warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '一緒に、朝の時間、大切。', en: 'Together — morning time, precious.', style: 'Barista warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '本当、楽しい、毎朝。', en: 'Truly — fun, every morning.', style: 'University student warm soft sincere closing-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 1165 — mrs_mori + sachiko, friendship continuing (medium)
  {
    id: 'conv_01165',
    context: 'Mrs. Mori and Sachiko share daily tea ritual.',
    purpose: 'elderly-women daily-tea exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '友人', '大切', '楽しい'],
    cast: ['mrs_mori_neighbor', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '佐知子さん、今日も、お茶、ね。', en: 'Sachiko-san — today too, tea.', style: 'Neighbor warm gentle sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'うん、優しい時間。', en: 'Yes — kind time.', style: 'Grandma warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mrs_mori_neighbor', jp: '一緒に、過ごせる、嬉しい。', en: 'Together — can spend, happy.', style: 'Neighbor warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: '友人、本当、大切。', en: 'Friend — truly, precious.', style: 'Grandma warm gentle sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mrs_mori_neighbor', jp: '長く、続けたい、こうして。', en: 'Long — want to continue, like this.', style: 'Neighbor warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'お互い、健康で、ね。', en: 'Mutually — healthy.', style: 'Grandma warm gentle sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '楽しい、毎日、ね。', en: 'Fun — every day.', style: 'Neighbor warm gentle sincere closing-warm tender-philosophical warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_058 wrote', CONVERSATIONS.length, 'files');

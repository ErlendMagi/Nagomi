import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_043)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 846 — hiroshi_boss + kenji, structure restructure (medium)
  {
    id: 'conv_00846',
    context: 'Hiroshi outlines a new team structure to Kenji.',
    purpose: 'boss-subordinate organizational structure exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['構造', '組織', '段階', '考える', '責任'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、チーム構造、見直す。', en: 'Kenji — team structure, re-review.', style: 'Boss firm formal direct authoritative announcing-opening, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、組織、どう、変わりますか？', en: 'Yes — organization, how, changes?', style: 'Salaryman warm formal sincere-warm asking-warm engaged, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'hiroshi_boss', jp: '段階を、分けて、進める。', en: 'Stages — divide, proceed.', style: 'Boss firm formal direct authoritative explaining-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'よく、考えられた、計画ですね。', en: 'Well — considered, plan.', style: 'Salaryman warm formal sincere-warm appreciative-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'お前にも、責任、増える。', en: 'You — responsibility, increases.', style: 'Boss firm formal direct authoritative warning-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '了解、全力で、取り組みます。', en: 'Understood — full strength, engage.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'よろしく頼む。', en: 'Best — counting on.', style: 'Boss firm formal direct closing-brief trusting-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 847 — sho + hina, soccer (short)
  {
    id: 'conv_00847',
    context: 'Sho and Hina kick a ball around the yard.',
    purpose: 'children soccer-play exchange',
    ambient: 'garden_afternoon',
    sound_effects: [],
    target_vocab: ['サッカー', '一緒', '楽しい', '頑張る', 'ボール'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、サッカー、一緒に、する？', en: 'Hina — soccer, together, do?', style: 'Tiny six-year-old soft small sincere inviting-opening enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'うん、ボール、蹴れる！', en: 'Yes — ball, can kick!', style: 'High child bright sincere enthusiastic-warm confident, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '頑張って、シュート、する。', en: 'Trying hard — shoot, do.', style: 'Tiny six-year-old soft small sincere committed-warm focused, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'すごい！上手だね、しょう。', en: 'Amazing! Skilled — Sho.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、サッカー、楽しい。', en: 'Together — soccer, fun.', style: 'Tiny six-year-old soft small sincere closing-warm appreciative-bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 848 — asuka + sakura, exam stress (medium)
  {
    id: 'conv_00848',
    context: 'Asuka helps Sakura manage exam stress.',
    purpose: 'teacher-student stress-management exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['試験', '原因', '相談', '一緒', '頑張る'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、試験、近づいて、緊張、します。', en: 'Teacher — exam, approaching, tense.', style: 'Teen warm soft sincere vulnerable-opening honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '原因、何だと思う？', en: 'Cause — what think?', style: 'Teacher warm gentle sincere-warm probing-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '失敗、怖いです。', en: 'Failure — scared.', style: 'Teen warm soft sincere honest-warm vulnerable-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '相談、しに来てくれて、嬉しい。', en: 'Consult — came, happy.', style: 'Teacher warm gentle sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一人で、抱えすぎてました。', en: 'Alone — carried too much.', style: 'Teen warm soft sincere honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、頑張ろう。深呼吸して。', en: 'Together — try hard. Deep breath.', style: 'Teacher warm gentle sincere-warm reassuring-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'ありがとうございます、頑張ります。', en: 'Thanks — try hard.', style: 'Teen warm soft sincere closing-warm grateful-determined, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 849 — aoi + yuki, overseas dream (medium)
  {
    id: 'conv_00849',
    context: 'Aoi and Yuki discuss whether Yuki should accept an overseas job.',
    purpose: 'two-women career-decision overseas exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['海外', '仕事', '一緒', '相談', '考える'],
    cast: ['yuki_office', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいちゃん、海外、仕事の話、来てる。', en: 'Aoi-chan — overseas, work talk, coming.', style: 'Office woman bright soft sincere serious-opening sharing-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'え、本当？どこの国？', en: 'Eh — truly? Which country?', style: 'Barista warm soft sincere-warm surprised-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'yuki_office', jp: 'フランス、二年間。迷ってる。', en: 'France — two years. Hesitating.', style: 'Office woman bright soft sincere honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '相談、いつでも、聞くよ。', en: 'Consult — anytime, listen.', style: 'Barista warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yuki_office', jp: '皆と、離れるの、寂しい。', en: 'All — leaving, lonely.', style: 'Office woman bright soft sincere honest-warm tender-vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '一緒の時間、これからも、作ろう。', en: 'Together time — from now, make.', style: 'Barista warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'ゆっくり、考えるね。', en: 'Slowly — think.', style: 'Office woman bright soft sincere closing-warm thoughtful-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 850 — tatsuya + naoko, country lifestyle (long)
  {
    id: 'conv_00850',
    context: 'Tatsuya and Naoko discuss returning to rural roots.',
    purpose: 'cousin rural-lifestyle deep exchange',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['人間', '生活', '考え方', '一緒', '大切'],
    cast: ['tatsuya_country', 'naoko_aunt'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '直子、最近、考え方、変わったね。', en: 'Naoko — recently, way of thinking, changed.', style: 'Country warm low sincere unhurried observing-opening philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'naoko_aunt', jp: '田舎、見て、人間らしさ、感じる。', en: 'Country — seeing, humanity, feel.', style: 'Aunt warm soft sincere-warm philosophical-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '都会の生活、疲れてた？', en: 'City life — tired?', style: 'Country warm low sincere unhurried asking-warm caring, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'うん、本当に。', en: 'Yes — truly.', style: 'Aunt warm soft sincere-warm honest-deep vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'ここの生活、ゆっくり、合うかな。', en: 'Here\'s life — slowly, suits?', style: 'Country warm low sincere unhurried thoughtful-warm hopeful, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '考えてる。一度、移ってみたい。', en: 'Considering. Once — want to try moving.', style: 'Aunt warm soft sincere-warm honest-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '皆、喜ぶ。家、近くに、あるぞ。', en: 'All — happy. House — close, exists.', style: 'Country warm low sincere unhurried welcoming-warm sharing, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'naoko_aunt', jp: '本当？心強いな。', en: 'Truly? Heart-strong.', style: 'Aunt warm soft sincere-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '皆で、見守る。心配ない。', en: 'All — watch over. No worry.', style: 'Country warm low sincere unhurried reassuring-warm warm, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '友人、家族、いる事、本当、大切ね。', en: 'Friend, family — existing, truly, important.', style: 'Aunt warm soft sincere-warm philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '人生、長い。ゆっくり、決めよう。', en: 'Life — long. Slowly, decide.', style: 'Country warm low sincere unhurried wise-warm advising, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'naoko_aunt', jp: '一緒に、考えてくれて、嬉しい。', en: 'Together — thinking, happy.', style: 'Aunt warm soft sincere-warm grateful-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: 'お互い、頼り合おう。', en: 'Mutually — rely on each other.', style: 'Country warm low sincere closing-warm tender-promise deep, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 851 — hina + sho, PC introduction (short)
  {
    id: 'conv_00851',
    context: 'Sho shows Hina a simple game on the family PC.',
    purpose: 'children PC-introduction exchange',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['パソコン', '一緒', '楽しい', 'ゲーム', '見る'],
    cast: ['sho_child', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'ひな、パソコン、見て、見て。', en: 'Hina — PC, look, look.', style: 'Tiny six-year-old soft small sincere enthusiastic-opening bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'わあ、何のゲーム？', en: 'Wow — what game?', style: 'High child bright sincere curious-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '動物、出てくる、ゲーム。', en: 'Animal — appears, game.', style: 'Tiny six-year-old soft small sincere explaining-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、する！', en: 'Together — do!', style: 'High child bright sincere enthusiastic-warm engaged, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '楽しい、ひなと、いつも。', en: 'Fun — with Hina, always.', style: 'Tiny six-year-old soft small sincere closing-warm tender-bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' }
    ]
  },
  // 852 — kenji + ren, professional reflection (medium)
  {
    id: 'conv_00852',
    context: 'Kenji and Ren reflect on the intern\'s growth.',
    purpose: 'senior-junior reflection exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['指導', '段階', '一緒', '頑張る', '感謝'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、随分、成長したね。', en: 'Ren-kun — considerably, grew.', style: 'Salaryman warm soft sincere-warm appreciative-opening warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '健次さんの指導、お陰様です。', en: 'Kenji-san\'s guidance — thanks.', style: 'University student warm soft sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '次の段階、責任、増える。', en: 'Next stage — responsibility, increases.', style: 'Salaryman warm formal sincere-warm informing-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、自分らしく。', en: 'Try hard — self-like.', style: 'University student warm soft sincere-warm committed-warm honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、また、成長できる。', en: 'Together — again, can grow.', style: 'Salaryman warm soft sincere-warm warm-promise encouraging, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '感謝です、本当に。', en: 'Grateful — truly.', style: 'University student warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'こちらこそ。', en: 'Same.', style: 'Salaryman warm soft sincere closing-warm tender-brief, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 853 — sakura + asuka, foreign culture (medium)
  {
    id: 'conv_00853',
    context: 'Sakura asks Asuka about French culture for her writing.',
    purpose: 'student-teacher foreign-culture exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['文化', 'フランス', '例えば', '一緒', '考える'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、フランスの文化、教えてください。', en: 'Teacher — French culture, please teach.', style: 'Teen warm soft sincere asking-opening curious-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'asuka_teacher', jp: '例えば、食事、ゆっくり、楽しむ。', en: 'For example — meal, slowly, enjoy.', style: 'Teacher warm gentle sincere-warm informing-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '日本と、違いますね。', en: 'Japan — different.', style: 'Teen warm soft sincere observing-warm thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '芸術も、生活の中心にある。', en: 'Art too — in life center.', style: 'Teacher warm gentle sincere-warm philosophical-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一緒に、本も、読みましょうか？', en: 'Together — book also, read?', style: 'Teen warm soft sincere proposing-warm engaged-curious, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'asuka_teacher', jp: 'いい考え。一緒に、考えよう。', en: 'Good thought. Together — think.', style: 'Teacher warm gentle sincere-warm appreciative-warm collaborative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '楽しみです、本当に。', en: 'Looking forward — truly.', style: 'Teen warm soft sincere closing-warm enthusiastic-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 854 — daichi + ryosuke, autumn plans (short)
  {
    id: 'conv_00854',
    context: 'Daichi and Ryosuke plan a family autumn outing.',
    purpose: 'father-son-in-law autumn-plan exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['秋', '家族', '一緒', '楽しい', '計画'],
    cast: ['daichi_kansai', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '亮介さん、秋の計画、立てよか？', en: 'Ryosuke-san — autumn plan, set?', style: 'Kansai warm bright sincere proposing-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ryosuke_dad', jp: 'いいね、家族、皆で。', en: 'Nice — family, all.', style: 'Father warm gentle sincere-warm appreciative-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '紅葉、ええ場所、知っとるで。', en: 'Autumn leaves — good place, know.', style: 'Kansai warm bright sincere sharing-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ryosuke_dad', jp: '案内、頼みますね。', en: 'Guide — ask.', style: 'Father warm gentle sincere-warm respectful-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '一緒に、楽しい一日、しよう。', en: 'Together — fun day, do.', style: 'Kansai warm bright sincere closing-warm tender-promise, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 855 — mei + aoi, baby TV program (medium)
  {
    id: 'conv_00855',
    context: 'Mei and Aoi watch a baby development TV program.',
    purpose: 'two-mother TV-program exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['番組', '子ども', '一緒', '考える', '大切'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、この番組、見てる？', en: 'Aoi-chan — this program, watching?', style: 'Romantic warm soft sincere-warm asking-opening engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'うん、子どもの育て方、参考になる。', en: 'Yes — child-raising way, references.', style: 'Barista warm soft sincere-warm engaged-warm sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '色んな考え方、あるね。', en: 'Various — way of thinking, exist.', style: 'Romantic warm soft sincere-warm reflective-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '自分の家族に、合うのを、選ぶ。', en: 'Own family — fits, choose.', style: 'Barista warm soft sincere-warm philosophical-warm practical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '一緒に、考えると、心強い。', en: 'Together — thinking, heart-strong.', style: 'Romantic warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '本当ね。大切な、友達。', en: 'Truly. Precious — friend.', style: 'Barista warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: 'これからも、相談、しよう。', en: 'From now — consult.', style: 'Romantic warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 856 — sho + hina, body parts (short)
  {
    id: 'conv_00856',
    context: 'Hina shows Sho different parts of the face.',
    purpose: 'children body-part teaching exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['口', '顔', '一緒', '楽しい', '優しい'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、口、ここ。指して。', en: 'Sho — mouth, here. Point.', style: 'High child bright sincere teaching-opening playful, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うん、口、ここ。鼻も、知ってる。', en: 'Yes — mouth, here. Nose too — know.', style: 'Tiny six-year-old soft small sincere bright-warm confident, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '顔の絵、一緒に、描こう。', en: 'Face picture — together, draw.', style: 'High child bright sincere proposing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ぼく、優しい顔、描く。', en: 'I — kind face, draw.', style: 'Tiny six-year-old soft small sincere committed-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '楽しい、絵、できる。', en: 'Fun — picture, can do.', style: 'High child bright sincere closing-warm enthusiastic-tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 857 — yuki + naoko, women specialty (medium)
  {
    id: 'conv_00857',
    context: 'Yuki and Naoko talk about specializing in different fields.',
    purpose: 'two-women career-specialty exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['専門', '女性', '個人', '一緒', '考える'],
    cast: ['yuki_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '直子さん、専門、何に、決めましたか？', en: 'Naoko-san — specialty, what, decided?', style: 'Office woman bright soft sincere asking-opening curious-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'naoko_aunt', jp: '看護、選んだの。皆、助けたかった。', en: 'Nursing — chose. All, wanted to help.', style: 'Aunt warm soft sincere-warm sharing-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '女性として、自分の道、選ぶ、大切。', en: 'As woman — own path, choosing, important.', style: 'Office woman bright soft sincere reflective-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '個人の考え、尊重、一番。', en: 'Individual thought — respect, most.', style: 'Aunt warm soft sincere-warm philosophical-warm wise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'yuki_office', jp: '私も、海外、考えてます。', en: 'I too — overseas, considering.', style: 'Office woman bright soft sincere-warm sharing-warm honest, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '一緒に、考えていきましょう。', en: 'Together — think.', style: 'Aunt warm soft sincere-warm collaborative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '心強い、本当に。', en: 'Heart-strong — truly.', style: 'Office woman bright soft sincere closing-warm grateful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 858 — sakura + ren, college choice (long)
  {
    id: 'conv_00858',
    context: 'Sakura agonizes over choosing a college, talking deeply with Ren.',
    purpose: 'cousin college-choice deep exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['立場', '将来', '一緒', '相談', '大切'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、大学、迷ってる、本当に。', en: 'Ren-bro — university, lost, truly.', style: 'Teen warm soft sincere vulnerable-opening honest-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '何が、不安？', en: 'What — anxious?', style: 'University student warm soft sincere-warm engaged-warm caring, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'sakura_teen', jp: '文学、行きたい、けど、将来、不安。', en: 'Literature — want to go, but, future, anxious.', style: 'Teen warm soft sincere honest-warm vulnerable-thoughtful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '立場、わかるよ。俺もそうだった。', en: 'Position — understand. I too was.', style: 'University student warm soft sincere-warm empathic-warm sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '本当？どうした？', en: 'Truly? How did?', style: 'Teen warm soft sincere asking-warm engaged-vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: '好きな事、選んだ。後悔、ない。', en: 'Liked things — chose. Regret — none.', style: 'University student warm soft sincere-warm sharing-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '安定、考えなくていいかな？', en: 'Stability — not consider okay?', style: 'Teen warm soft sincere asking-warm thoughtful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '両方、バランス、考えよう。', en: 'Both — balance, think.', style: 'University student warm soft sincere-warm wise-warm balanced, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '一人で、抱えすぎてた。', en: 'Alone — carried too much.', style: 'Teen warm soft sincere honest-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '相談、いつでも、する。', en: 'Consult — anytime, do.', style: 'University student warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '心、軽く、なった。', en: 'Heart — light, became.', style: 'Teen warm soft sincere relieved-warm grateful-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '大切な、お前の選択。', en: 'Precious — your choice.', style: 'University student warm soft sincere-warm tender-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'ありがとう、本当に。', en: 'Thanks — truly.', style: 'Teen warm soft sincere closing-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 859 — hina + yumiko, special meal (short)
  {
    id: 'conv_00859',
    context: 'Yumiko prepares a special meal for Hina\'s birthday.',
    purpose: 'mother-child special-meal exchange',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['特別', '料理', '一緒', '美味しい', '幸せ'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、特別な料理、作ったよ。', en: 'Hina-chan — special cooking, made.', style: 'Maternal warm gentle sincere-warm tender-opening loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'わあ、嬉しい！何？', en: 'Wow — happy! What?', style: 'High child bright sincere enthusiastic-warm curious, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: 'ひなちゃんの、大好きな、ハンバーグ。', en: 'Hina-chan\'s — favorite, hamburger steak.', style: 'Maternal warm gentle sincere-warm tender-warm proud, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '美味しそう！一緒に、食べよう。', en: 'Looks delicious! Together — eat.', style: 'High child bright sincere enthusiastic-warm appreciative, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: 'お誕生日、幸せにね。', en: 'Birthday — happy.', style: 'Maternal warm gentle sincere closing-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 860 — takeda + tatsuya, traffic special event (medium)
  {
    id: 'conv_00860',
    context: 'Takeda discusses traffic preparations for the town festival.',
    purpose: 'officer-farmer event-traffic exchange',
    ambient: 'street_morning',
    sound_effects: [],
    target_vocab: ['特別', '安全', '一緒', '注意', '町'],
    cast: ['takeda_officer', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'たつやさん、祭りの日、特別な対応、必要。', en: 'Tatsuya-san — festival day, special response, needed.', style: 'Officer firm formal direct calm-opening advisory, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'tatsuya_country', jp: 'はい、安全、第一だ。', en: 'Yes — safety, first.', style: 'Country warm low sincere unhurried agreeing-warm respectful, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'takeda_officer', jp: '町、人、増える。注意、しよう。', en: 'Town — people, increase. Caution — do.', style: 'Officer firm formal direct advisory-clear caring, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'tatsuya_country', jp: '皆で、見守る、しかない。', en: 'All — watch over, only.', style: 'Country warm low sincere unhurried philosophical-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'takeda_officer', jp: '一緒に、当日、警備、お願いします。', en: 'Together — that day, security, please.', style: 'Officer firm formal direct respectful-warm asking, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'tatsuya_country', jp: '了解。手伝うよ。', en: 'Understood. Help.', style: 'Country warm low sincere unhurried committing-warm steady, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: 'ありがとうございます。', en: 'Thank you.', style: 'Officer firm formal direct closing-warm respectful-brief, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 861 — hiroshi_boss + kenji, structure proposal (medium)
  {
    id: 'conv_00861',
    context: 'Kenji proposes a new system architecture to Hiroshi.',
    purpose: 'subordinate-boss technical-proposal exchange',
    ambient: 'office_afternoon',
    sound_effects: [],
    target_vocab: ['構造', '機能', '効果', '一緒', '考える'],
    cast: ['kenji_office', 'hiroshi_boss'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '部長、新しい構造、提案です。', en: 'Boss — new structure, proposal.', style: 'Salaryman warm formal sincere-warm professional-opening committed, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: '聞こう。要点だ。', en: 'Will listen. Key point.', style: 'Boss firm formal direct authoritative receptive-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '機能、再構築。効果、上がる、見込み。', en: 'Function — re-build. Effect, rises, expected.', style: 'Salaryman warm formal sincere-warm professional-clear confident, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'hiroshi_boss', jp: 'リスク、ある。慎重に、考えろ。', en: 'Risk — exists. Carefully — think.', style: 'Boss firm formal direct authoritative warning-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: '分析、徹底的に、します。', en: 'Analysis — thoroughly, do.', style: 'Salaryman warm formal sincere-warm committed-warm professional, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'チームと、一緒に、進めろ。', en: 'Team — together, proceed.', style: 'Boss firm formal direct authoritative instructive-clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-direct' },
      { speaker: 'kenji_office', jp: 'はい、お任せください。', en: 'Yes — please leave.', style: 'Salaryman warm formal sincere closing-warm committed-respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 862 — sho + sachiko, special moment (short)
  {
    id: 'conv_00862',
    context: 'Sho shows Sachiko his first drawing of her.',
    purpose: 'child-grandma special-art exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['特別', '一緒', '優しい', '楽しい', '絵'],
    cast: ['sho_child', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'おばあちゃん、特別な絵、作った。', en: 'Grandma — special picture, made.', style: 'Tiny six-year-old soft small sincere proud-opening tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'sachiko_grandma', jp: 'わあ、見せて。', en: 'Wow — show.', style: 'Grandma warm gentle sincere-warm enthusiastic-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: 'これ、おばあちゃん、優しい笑顔。', en: 'This — grandma, kind smile.', style: 'Tiny six-year-old soft small sincere explaining-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sachiko_grandma', jp: '本当に嬉しい。一生、大切にする。', en: 'Truly happy. Lifetime — preciously.', style: 'Grandma warm gentle sincere-warm tender-deep grateful-warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sho_child', jp: 'また、一緒に、絵、描こう。', en: 'Again — together, picture, draw.', style: 'Tiny six-year-old soft small sincere closing-warm tender-promise, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' }
    ]
  },
  // 863 — ren + asuka, overseas study (medium)
  {
    id: 'conv_00863',
    context: 'Ren asks Asuka about possible overseas study.',
    purpose: 'student-teacher overseas-study exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['海外', '相談', '考える', '一緒', '将来'],
    cast: ['ren_uni', 'asuka_teacher'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: '先生、海外留学、考えてます。', en: 'Teacher — overseas study, considering.', style: 'University student warm soft sincere-warm vulnerable-opening sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'いい考え。どこの国？', en: 'Good thought. Which country?', style: 'Teacher warm gentle sincere-warm encouraging-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: 'まだ、迷ってます。相談、したくて。', en: 'Still — lost. Consult — wanted.', style: 'University student warm soft sincere-warm honest-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、見ていこう。資料、用意する。', en: 'Together — see. Materials — prepare.', style: 'Teacher warm gentle sincere-warm warm-promise committed, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'ありがとうございます、嬉しいです。', en: 'Thanks — happy.', style: 'University student warm soft sincere-warm grateful-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '将来、広がるね、楽しみ。', en: 'Future — widens, looking forward.', style: 'Teacher warm gentle sincere-warm encouraging-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '頑張ります、最終的に、決めます。', en: 'Try hard — finally, decide.', style: 'University student warm soft sincere closing-warm committed-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 864 — aoi + ren, café final phase (medium)
  {
    id: 'conv_00864',
    context: 'Aoi tells Ren the café renovation is in its final phase.',
    purpose: 'married-couple renovation-update exchange',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['最終', '段階', '一緒', '幸せ', '頑張る'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'レン、お店、最終段階。', en: 'Ren — shop, final stage.', style: 'Barista warm soft sincere-warm excited-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '本当！どんな感じ？', en: 'Truly! How feel?', style: 'University student warm soft sincere-warm enthusiastic-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '雰囲気、すごく、変わった。', en: 'Atmosphere — very, changed.', style: 'Barista warm soft sincere-warm proud-warm sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '見たい、早く。', en: 'Want to see — soon.', style: 'University student warm soft sincere-warm enthusiastic-warm warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '一緒に、頑張ったから、嬉しい。', en: 'Together — tried hard, happy.', style: 'Barista warm soft sincere-warm grateful-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '幸せだね、本当。', en: 'Happy — truly.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: 'これからも、一緒に、続けよう。', en: 'From now — together, continue.', style: 'Barista warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 865 — hina + sho, action movement (short)
  {
    id: 'conv_00865',
    context: 'Hina and Sho mimic animal movements in the yard.',
    purpose: 'children action-mimicry exchange',
    ambient: 'garden_morning',
    sound_effects: [],
    target_vocab: ['動き', '一緒', '楽しい', '頑張る', '可愛い'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、猫の動き、真似しよう。', en: 'Sho — cat\'s movement, imitate.', style: 'High child bright sincere proposing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'にゃー、こうだね。', en: 'Meow — like this.', style: 'Tiny six-year-old soft small sincere playful-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '可愛い！ひなも、する。', en: 'Cute! Hina too — do.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '今度、犬、頑張ろう。', en: 'Next — dog, try hard.', style: 'Tiny six-year-old soft small sincere proposing-warm enthusiastic, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '一緒に、動物、なる、楽しい。', en: 'Together — animal, become, fun.', style: 'High child bright sincere closing-warm enthusiastic-deep, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_043 wrote', CONVERSATIONS.length, 'files');

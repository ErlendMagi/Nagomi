import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_050)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 986 — yuki + aoi, train departure (medium)
  {
    id: 'conv_00986',
    context: 'Aoi sees Yuki off at the station for her overseas trip.',
    purpose: 'two-women departure exchange',
    ambient: 'station_morning',
    sound_effects: [],
    target_vocab: ['駅', '見送る', '一緒', '出発', '友達'],
    cast: ['aoi_barista', 'yuki_office'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'ゆきちゃん、駅、来たよ。', en: 'Yuki-chan — station, came.', style: 'Barista warm soft sincere-warm tender-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'あおいちゃん、来てくれて、嬉しい。', en: 'Aoi-chan — came, happy.', style: 'Office woman bright soft sincere grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '見送り、絶対、する。', en: 'See off — surely, do.', style: 'Barista warm soft sincere-warm committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '出発、もうすぐ、ね。', en: 'Departure — soon.', style: 'Office woman bright soft sincere reflective-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '友達、ずっと、忘れない。', en: 'Friend — long, won\'t forget.', style: 'Barista warm soft sincere-warm tender-deep promise, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Office woman bright soft sincere matching-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '一緒の時間、宝物。', en: 'Together time — treasure.', style: 'Barista warm soft sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 987 — sho + hina, greeting practice (short)
  {
    id: 'conv_00987',
    context: 'Sho and Hina practice morning greetings.',
    purpose: 'children greeting-practice exchange',
    ambient: 'living_room_morning',
    sound_effects: [],
    target_vocab: ['挨拶', '一緒', '楽しい', '優しい', '元気'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、挨拶、練習しよう。', en: 'Sho — greeting, practice.', style: 'High child bright sincere proposing-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'おはようございます、元気？', en: 'Good morning — energetic?', style: 'Tiny six-year-old soft small sincere practicing-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: 'いいね、優しく、言える。', en: 'Nice — gently, can say.', style: 'High child bright sincere appreciative-warm encouraging, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '一緒に、毎朝、言おう。', en: 'Together — every morning, say.', style: 'Tiny six-year-old soft small sincere committing-warm tender, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '楽しい、挨拶。', en: 'Fun — greeting.', style: 'High child bright sincere closing-warm philosophical-bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 988 — asuka + sakura, college acceptance (medium)
  {
    id: 'conv_00988',
    context: 'Sakura tells Asuka she got accepted into her dream college.',
    purpose: 'teacher-student college-acceptance exchange',
    ambient: 'classroom_afternoon',
    sound_effects: [],
    target_vocab: ['大学', '一緒', '頑張る', '夢', '感謝'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、大学、合格しました！', en: 'Teacher — college, passed!', style: 'Teen warm soft sincere excited-opening enthusiastic, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'asuka_teacher', jp: '本当！おめでとう！', en: 'Truly! Congratulations!', style: 'Teacher warm gentle sincere-warm enthusiastic-warm appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '夢、叶いました、先生のお陰。', en: 'Dream — came true, teacher\'s thanks.', style: 'Teen warm soft sincere grateful-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'お前の努力の結果、だよ。', en: 'Your effort\'s result — is.', style: 'Teacher warm gentle sincere-warm affirming-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-affirming' },
      { speaker: 'sakura_teen', jp: '一緒に、頑張ってきました。', en: 'Together — tried hard came.', style: 'Teen warm soft sincere reflective-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '感謝、伝わってる。', en: 'Gratitude — conveyed.', style: 'Teacher warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '頑張ります、これからも。', en: 'Try hard — from now.', style: 'Teen warm soft sincere closing-warm committed-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 989 — kenji + ren, train ride to work (short)
  {
    id: 'conv_00989',
    context: 'Kenji and Ren ride the train to work and chat.',
    purpose: 'senior-junior commute chat',
    ambient: 'train_morning',
    sound_effects: [],
    target_vocab: ['電車', '一緒', '仕事', '頑張る', '朝'],
    cast: ['kenji_office', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'レン君、電車、混んでる、今朝。', en: 'Ren-kun — train, crowded, this morning.', style: 'Salaryman warm soft sincere-warm observing-opening warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'はい、皆、出勤時間、ですね。', en: 'Yes — all, commute time.', style: 'University student warm soft sincere-warm acknowledging-warm respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '一緒に、行ける、嬉しい。', en: 'Together — can go, happy.', style: 'Salaryman warm soft sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '仕事、頑張りましょう。', en: 'Work — try hard.', style: 'University student warm soft sincere-warm committed-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '今日、忙しい、一日になりそう。', en: 'Today — busy, day likely.', style: 'Salaryman warm soft sincere closing-warm anticipating-warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 990 — mei + daichi, anniversary day (long)
  {
    id: 'conv_00990',
    context: 'Mei and Daichi celebrate their wedding anniversary.',
    purpose: 'married-couple anniversary celebration',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['一緒', '幸せ', '大切', '家族', '思い出'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'メイ、おめでとう、結婚記念日。', en: 'Mei — congratulations, wedding anniversary.', style: 'Kansai warm bright sincere tender-opening loving, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'ダイチ、ありがとう。', en: 'Daichi — thanks.', style: 'Romantic warm soft sincere-warm tender-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'これ、サプライズの、プレゼント。', en: 'This — surprise present.', style: 'Kansai warm bright sincere proud-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'え、何？開けてもいい？', en: 'Eh — what? Open okay?', style: 'Romantic warm soft sincere-warm excited-warm engaged, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'daichi_kansai', jp: 'どうぞ、開けて。', en: 'Please — open.', style: 'Kansai warm bright sincere welcoming-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '指輪！…泣きそう、本当に。', en: 'Ring! …Cry-likely, truly.', style: 'Romantic warm soft sincere-warm overwhelmed-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '三年、本当、感謝、お前に。', en: 'Three years — truly, grateful, to you.', style: 'Kansai warm bright sincere tender-deep loving, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '家族、皆、幸せに、なれた。', en: 'Family — all, happy, became.', style: 'Romantic warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: 'ひかりも、すくすく育って。', en: 'Hikari too — well growing.', style: 'Kansai warm bright sincere appreciative-warm proud, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '思い出、これからも、たくさん、作る。', en: 'Memories — from now, lots, make.', style: 'Romantic warm soft sincere-warm anticipating-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '一緒に、ずっと、生きていこう。', en: 'Together — long, live.', style: 'Kansai warm bright sincere tender-promise deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: 'うん、絶対。大切な、人。', en: 'Yes — surely. Precious, person.', style: 'Romantic warm soft sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '愛してる、本当に。', en: 'Love — truly.', style: 'Kansai warm bright sincere closing-warm tender-deep loving, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 991 — hina + sho, train trip (short)
  {
    id: 'conv_00991',
    context: 'Hina and Sho ride a train for the first time alone.',
    purpose: 'children first-train exchange',
    ambient: 'train_afternoon',
    sound_effects: [],
    target_vocab: ['電車', '一緒', '楽しい', '頑張る', '見る'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'しょう、電車、初めて、二人で。', en: 'Sho — train, first, two-people.', style: 'High child bright sincere excited-opening enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ドキドキ、するね。', en: 'Heart-pound — do.', style: 'Tiny six-year-old soft small sincere honest-warm vulnerable, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'hina_child', jp: '一緒、安心。', en: 'Together — relieved.', style: 'High child bright sincere reassuring-warm tender, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '景色、見るの、楽しい。', en: 'Scenery — seeing, fun.', style: 'Tiny six-year-old soft small sincere appreciative-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'hina_child', jp: '頑張って、皆に、報告しよう。', en: 'Try hard — all, report.', style: 'High child bright sincere closing-warm committing-bright, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 992 — takeda + ren, traffic protection award (medium)
  {
    id: 'conv_00992',
    context: 'Takeda gives Ren a final farewell after years of volunteer work.',
    purpose: 'officer-student farewell exchange',
    ambient: 'plaza_morning',
    sound_effects: [],
    target_vocab: ['保護', '一緒', '感謝', '大切', '頑張る'],
    cast: ['takeda_officer', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'レン君、保護活動、本当に、感謝。', en: 'Ren-kun — protection activity, truly, grateful.', style: 'Officer firm formal direct grateful-opening warm, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'こちらこそ、学ばせてもらった。', en: 'Same — was taught.', style: 'University student warm soft sincere-warm humble-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '町、守る、若い人、心強い。', en: 'Town — protect, young people, heart-strong.', style: 'Officer firm formal direct philosophical-warm appreciative, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: '皆と、一緒に、出来た事、大切。', en: 'All — together, could do, precious.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '頑張れよ、これからも。', en: 'Try hard — from now.', style: 'Officer firm formal direct encouraging-warm tender-promise, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'ren_uni', jp: 'はい、教員、目指します。', en: 'Yes — teacher, aim.', style: 'University student warm soft sincere-warm committed-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: 'いい先生、なれる、お前。', en: 'Good teacher — can become, you.', style: 'Officer firm formal direct closing-warm affirming-tender, the firm real composure audible, steady real authority threading throughout delivery.', mood: 'firmly-warm' }
    ]
  },
  // 993 — sho + asuka, school year start (medium)
  {
    id: 'conv_00993',
    context: 'Sho starts a new school year with Asuka as teacher.',
    purpose: 'teacher-child new-year welcome',
    ambient: 'classroom_morning',
    sound_effects: [],
    target_vocab: ['学校', '一緒', '頑張る', '優しい', '楽しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、新学期、おはよう。', en: 'Sho-kun — new term, good morning.', style: 'Teacher warm gentle sincere-warm welcoming-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '先生、おはようございます。', en: 'Teacher — good morning.', style: 'Tiny six-year-old soft small sincere respectful-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: '今日から、一緒に、勉強、しようね。', en: 'From today — together, study.', style: 'Teacher warm gentle sincere-warm welcoming-warm collaborative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '頑張ります、先生。', en: 'Try hard — teacher.', style: 'Tiny six-year-old soft small sincere committed-warm respectful, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-warm' },
      { speaker: 'asuka_teacher', jp: '優しい子、しょうくん、嬉しい。', en: 'Kind child — Sho-kun, happy.', style: 'Teacher warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sho_child', jp: '楽しい、学校、好き。', en: 'Fun — school, like.', style: 'Tiny six-year-old soft small sincere honest-warm bright, the small real warmth audible, soft small warmth threading throughout delivery.', mood: 'softly-bright' },
      { speaker: 'asuka_teacher', jp: '一緒に、過ごそう、ね。', en: 'Together — spend.', style: 'Teacher warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 994 — sachiko + goro, autumn walk (short)
  {
    id: 'conv_00994',
    context: 'Sachiko and Goro take an autumn evening walk.',
    purpose: 'elderly-couple autumn-walk exchange',
    ambient: 'street_evening',
    sound_effects: [],
    target_vocab: ['秋', '一緒', '静か', '楽しい', '大切'],
    cast: ['sachiko_grandma', 'goro_grandpa'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'おじいちゃん、秋の夕方、綺麗ね。', en: 'Grandpa — autumn evening, beautiful.', style: 'Grandma warm gentle sincere-warm appreciative-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'goro_grandpa', jp: 'うん、静か、なる、季節。', en: 'Yes — quiet, becomes, season.', style: 'Grandpa warm gentle sincere-warm philosophical-warm aged-tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '一緒に、歩く時間、楽しい。', en: 'Together — walking time, fun.', style: 'Grandma warm gentle sincere-warm appreciative-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'goro_grandpa', jp: '大切な、毎日の習慣。', en: 'Precious — daily habit.', style: 'Grandpa warm gentle sincere-warm philosophical-warm aged-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'ずっと、続けたい、こうして。', en: 'Long — want to continue, like this.', style: 'Grandma warm gentle sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 995 — kenji + ryosuke, retirement transition (medium)
  {
    id: 'conv_00995',
    context: 'Ryosuke shares advice with Kenji as Ryosuke retires.',
    purpose: 'mentor-mentee transition exchange',
    ambient: 'cafe_evening',
    sound_effects: [],
    target_vocab: ['一緒', '相談', '人生', '大切', '感謝'],
    cast: ['ryosuke_dad', 'kenji_office'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '健次さん、来月、私、退職、します。', en: 'Kenji-san — next month, I, retire, do.', style: 'Father warm gentle sincere-warm announcing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'いよいよ、ですね。', en: 'Finally — right.', style: 'Salaryman warm soft sincere-warm acknowledging-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'いつでも、相談、来てね。', en: 'Anytime — consult, come.', style: 'Father warm gentle sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '人生、教えていただいた事、大切に。', en: 'Life — taught things, preciously.', style: 'Salaryman warm soft sincere-warm grateful-warm philosophical, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '一緒に、過ごした時間、感謝。', en: 'Together — spent time, grateful.', style: 'Father warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'kenji_office', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Salaryman warm soft sincere-warm matching-warm grateful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'これからも、家族、よろしく。', en: 'From now — family, please.', style: 'Father warm gentle sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 996 — sakura + ren, college acceptance celebration (long)
  {
    id: 'conv_00996',
    context: 'Ren congratulates Sakura on her college acceptance.',
    purpose: 'cousin acceptance-celebration exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['大学', '一緒', '頑張る', '夢', '幸せ'],
    cast: ['ren_uni', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'さくら、大学、本当、おめでとう。', en: 'Sakura — college, truly, congratulations.', style: 'University student warm soft sincere-warm enthusiastic-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'レン兄ちゃん、ありがとう！', en: 'Ren-bro — thanks!', style: 'Teen warm soft sincere enthusiastic-warm grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: '夢、第一歩、ね。', en: 'Dream — first step.', style: 'University student warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '不安、まだ、あるけど、楽しみ。', en: 'Anxiety — still, exists, but, looking forward.', style: 'Teen warm soft sincere honest-warm balanced, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '一緒に、頑張ろう、これからも。', en: 'Together — try hard, from now.', style: 'University student warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '相談、いつでも、する。', en: 'Consult — anytime, do.', style: 'Teen warm soft sincere committed-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '俺も、書く、応援、ずっと。', en: 'I too — writing, cheer, long.', style: 'University student warm soft sincere-warm warm-promise tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '幸せ、本当に。', en: 'Happy — truly.', style: 'Teen warm soft sincere honest-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: 'お父さん、お母さん、誇り、思ってる。', en: 'Father — Mother, proud, thinking.', style: 'University student warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '皆の、支え、感謝。', en: 'All — support, grateful.', style: 'Teen warm soft sincere grateful-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '夢、追って、いこうね。', en: 'Dream — chase.', style: 'University student warm soft sincere-warm encouraging-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '大切な、第一歩、ね。', en: 'Precious — first step.', style: 'Teen warm soft sincere philosophical-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'これからも、応援、絶対。', en: 'From now — cheer, surely.', style: 'University student warm soft sincere closing-warm tender-promise deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 997 — hina + yumiko, cleaning together (short)
  {
    id: 'conv_00997',
    context: 'Hina helps Yumiko clean the kitchen.',
    purpose: 'mother-child cleaning exchange',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['掃除', '一緒', '頑張る', '優しい', '楽しい'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'ひなちゃん、掃除、一緒に、しよう。', en: 'Hina-chan — cleaning, together, do.', style: 'Maternal warm gentle sincere-warm inviting-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: 'うん、ひな、頑張る。', en: 'Yes — Hina, try hard.', style: 'High child bright sincere committing-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: 'お皿、優しく、洗おう。', en: 'Dishes — gently, wash.', style: 'Maternal warm gentle sincere-warm teaching-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hina_child', jp: '楽しい、お手伝い。', en: 'Fun — help.', style: 'High child bright sincere appreciative-warm enthusiastic, the soft real real-childish audible, gentle real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '優しい子、ね。', en: 'Kind child.', style: 'Maternal warm gentle sincere closing-warm tender-deep appreciative, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 998 — tatsuya + naoko, move-in day (medium)
  {
    id: 'conv_00998',
    context: 'Naoko moves into her country home next to Tatsuya.',
    purpose: 'cousin move-in exchange',
    ambient: 'porch_morning',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '大切', '感謝', '頑張る'],
    cast: ['naoko_aunt', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'たつや、本当に、感謝してる。', en: 'Tatsuya — truly, grateful.', style: 'Aunt warm soft sincere-warm grateful-opening tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ、来てくれて、嬉しい。', en: 'Same — came, happy.', style: 'Country warm low sincere unhurried welcoming-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '新しい家、ゆっくり、慣れていく。', en: 'New house — slowly, get used.', style: 'Aunt warm soft sincere-warm philosophical-warm hopeful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '何でも、聞いて。一緒に、頑張る。', en: 'Anything — ask. Together — try hard.', style: 'Country warm low sincere unhurried warm-promise collaborative, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'naoko_aunt', jp: '家族、近くに、いる、心強い。', en: 'Family — close, exists, heart-strong.', style: 'Aunt warm soft sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '大切な、家族や。', en: 'Precious — family.', style: 'Country warm low sincere unhurried tender-deep philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'これからも、よろしく。', en: 'From now — please.', style: 'Aunt warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 999 — daichi + tatsuya, festival cooperation (medium)
  {
    id: 'conv_00999',
    context: 'Daichi and Tatsuya plan a new festival for the town.',
    purpose: 'cousin festival-planning exchange',
    ambient: 'porch_afternoon',
    sound_effects: [],
    target_vocab: ['祭り', '町', '一緒', '頑張る', '楽しい'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'たつや、新しい祭り、考えたで。', en: 'Tatsuya — new festival, considered.', style: 'Kansai warm bright sincere proposing-opening enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'おお、どんな祭り？', en: 'Oh — what festival?', style: 'Country warm low sincere unhurried engaged-warm curious, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'daichi_kansai', jp: '子供たち、中心、皆で、楽しめる。', en: 'Children — center, all, can enjoy.', style: 'Kansai warm bright sincere explaining-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: 'いいなあ、町、元気、なる。', en: 'Nice — town, energetic, becomes.', style: 'Country warm low sincere unhurried appreciative-warm philosophical, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-steady' },
      { speaker: 'daichi_kansai', jp: '一緒に、計画、立てよう。', en: 'Together — plan, set.', style: 'Kansai warm bright sincere collaborative-warm enthusiastic, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'tatsuya_country', jp: '皆、頑張る、こんな時。', en: 'All — try hard, such time.', style: 'Country warm low sincere unhurried philosophical-warm tender, the slow rural composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '楽しい、町に、なるで。', en: 'Fun — town, becomes.', style: 'Kansai warm bright sincere closing-warm anticipating-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 1000 — hiroshi_boss + kenji, new year (medium)
  {
    id: 'conv_01000',
    context: 'Hiroshi and Kenji exchange new-year wishes.',
    purpose: 'boss-subordinate new-year exchange',
    ambient: 'office_morning',
    sound_effects: [],
    target_vocab: ['新年', '一緒', '頑張る', '会社', '感謝'],
    cast: ['hiroshi_boss', 'kenji_office'],
    frequency_tier: 5,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '健次、新年、おめでとう。', en: 'Kenji — new year, congratulations.', style: 'Boss firm formal direct warm-opening respectful, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'おめでとうございます、部長。', en: 'Congratulations — boss.', style: 'Salaryman warm formal sincere-warm respectful-warm warm, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'hiroshi_boss', jp: '今年も、よろしく頼む。', en: 'This year too — please.', style: 'Boss firm formal direct warm-promise trusting, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'はい、一緒に、頑張ります。', en: 'Yes — together, try hard.', style: 'Salaryman warm formal sincere-warm committed-warm respectful, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '会社、お前次第だ。', en: 'Company — depends on you.', style: 'Boss firm formal direct affirming-warm clear, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: '光栄、本当に、感謝です。', en: 'Honored — truly, grateful.', style: 'Salaryman warm formal sincere-warm grateful-deep humble, the soft real real-warmth audible, gentle real composure threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '期待してる、今年も。', en: 'Expecting — this year too.', style: 'Boss firm formal direct closing-warm trusting-warm, the firm real composure audible, steady real command threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // 1001 — yumiko + sakura, mother-daughter (short)
  {
    id: 'conv_01001',
    context: 'Yumiko shares a quiet morning moment with Sakura.',
    purpose: 'mother-daughter quiet exchange',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['一緒', '優しい', '楽しい', '大切', '感謝'],
    cast: ['yumiko_mom', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'さくらちゃん、おはよう。', en: 'Sakura-chan — good morning.', style: 'Maternal warm gentle sincere-warm tender-opening loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'お母さん、ありがとう、いつも。', en: 'Mom — thanks, always.', style: 'Teen warm soft sincere grateful-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: '大切な、子よ、さくら。', en: 'Precious — child, Sakura.', style: 'Maternal warm gentle sincere-warm tender-deep loving, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: '一緒に、ずっと、嬉しい。', en: 'Together — long, happy.', style: 'Teen warm soft sincere appreciative-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '楽しい、毎朝。', en: 'Fun — every morning.', style: 'Maternal warm gentle sincere closing-warm tender-philosophical warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 1002 — mei + aoi, baby walking (medium)
  {
    id: 'conv_01002',
    context: 'Mei and Aoi take their babies for a walk together.',
    purpose: 'two-mother walk exchange',
    ambient: 'park_afternoon',
    sound_effects: [],
    target_vocab: ['子ども', '一緒', '楽しい', '幸せ', '大切'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'メイ、子どもたち、走り回ってる。', en: 'Mei — children, running around.', style: 'Barista warm soft sincere-warm observing-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: '本当、元気、いっぱい。', en: 'Truly — energetic, full.', style: 'Romantic warm soft sincere-warm appreciative-warm proud, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '一緒に、過ごす時間、大切。', en: 'Together — spending time, precious.', style: 'Barista warm soft sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: 'ね、幸せ、感じる、毎日。', en: 'Right — happiness, feel, every day.', style: 'Romantic warm soft sincere-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'aoi_barista', jp: '友達、ずっと、いてくれて、嬉しい。', en: 'Friend — long, exists, happy.', style: 'Barista warm soft sincere-warm grateful-deep tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: 'こちらこそ、本当に。', en: 'Same — truly.', style: 'Romantic warm soft sincere-warm matching-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: '楽しい、午後、ね。', en: 'Fun — afternoon.', style: 'Barista warm soft sincere closing-warm tender-philosophical warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1003 — saito + sachiko, elderly care (medium)
  {
    id: 'conv_01003',
    context: 'Saito checks on Sachiko\'s elderly health.',
    purpose: 'doctor-patient elderly health exchange',
    ambient: 'clinic_morning',
    sound_effects: [],
    target_vocab: ['健康', '相談', '一緒', '大切', '生活'],
    cast: ['saito_doctor', 'sachiko_grandma'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '佐知子さん、最近、健康、いかが？', en: 'Sachiko-san — recently, health, how?', style: 'Doctor warm formal sincere-warm caring-opening calm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-professional' },
      { speaker: 'sachiko_grandma', jp: 'おかげさまで、元気、です。', en: 'Thanks — energetic.', style: 'Grandma warm gentle sincere-warm grateful-warm bright, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '生活習慣、続けて、大切。', en: 'Life habits — continue, important.', style: 'Doctor warm formal sincere-warm advising-warm clear, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'おじいちゃんと、毎日、散歩。', en: 'Grandpa — every day, walk.', style: 'Grandma warm gentle sincere-warm reporting-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '素敵な、習慣。', en: 'Lovely — habit.', style: 'Doctor warm formal sincere-warm appreciative-warm tender, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '相談、いつも、心強い。', en: 'Consult — always, heart-strong.', style: 'Grandma warm gentle sincere-warm grateful-deep respectful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: '一緒に、長く、お元気で。', en: 'Together — long, healthy.', style: 'Doctor warm formal sincere closing-warm tender-promise warm, the soft real composure audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1004 — riku + ren, college life advice (medium)
  {
    id: 'conv_01004',
    context: 'Ren gives Riku advice as he starts college.',
    purpose: 'cousin college-mentoring exchange',
    ambient: 'tatami_room_evening',
    sound_effects: [],
    target_vocab: ['大学', '一緒', '相談', '頑張る', '大切'],
    cast: ['ren_uni', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'リク、大学、もうすぐ、楽しみ？', en: 'Riku — college, soon, looking forward?', style: 'University student warm soft sincere-warm asking-opening warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'riku_teen', jp: 'うん、ちょっと、緊張、ある。', en: 'Yes — a bit, tense, exists.', style: 'Teen warm soft sincere honest-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '自分で、決める事、増える、けど、大切。', en: 'By self — deciding things, increase, but, precious.', style: 'University student warm soft sincere-warm advising-warm philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '相談、いつでも、いい？', en: 'Consult — anytime, okay?', style: 'Teen warm soft sincere asking-warm vulnerable, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'もちろん、何でも、聞く。', en: 'Of course — anything, listen.', style: 'University student warm soft sincere-warm warm-promise welcoming, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '一緒に、頑張れる、心強い。', en: 'Together — can try hard, heart-strong.', style: 'Teen warm soft sincere grateful-warm tender-deep, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'ren_uni', jp: '応援、ずっと。', en: 'Cheer — long.', style: 'University student warm soft sincere closing-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 1005 — mrs_mori + sachiko, friendship anniversary (medium)
  {
    id: 'conv_01005',
    context: 'Mrs. Mori and Sachiko celebrate fifty years of friendship.',
    purpose: 'elderly-women friendship-anniversary exchange',
    ambient: 'tatami_room_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '友人', '大切', '思い出', '感謝'],
    cast: ['mrs_mori_neighbor', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '佐知子さん、五十年、ね、私たち。', en: 'Sachiko-san — fifty years, we.', style: 'Neighbor warm gentle sincere-warm reflective-opening tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: '本当に、早かった。', en: 'Truly — was fast.', style: 'Grandma warm gentle sincere-warm philosophical-warm reflective, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '思い出、数え切れない、ね。', en: 'Memories — uncountable.', style: 'Neighbor warm gentle sincere-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '大切な、友人、本当に。', en: 'Precious — friend, truly.', style: 'Grandma warm gentle sincere-warm tender-deep grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mrs_mori_neighbor', jp: 'これからも、一緒に、ね。', en: 'From now — together.', style: 'Neighbor warm gentle sincere-warm tender-promise warm, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'お互い、健康で、続けたい。', en: 'Mutually — healthy, want to continue.', style: 'Grandma warm gentle sincere-warm wishing-warm tender, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '感謝、毎日、ね。', en: 'Grateful — every day.', style: 'Neighbor warm gentle sincere closing-warm tender-deep philosophical, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log('batch_050 wrote', CONVERSATIONS.length, 'files');

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_031)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 604 — sakura + ren, wedding planning (medium)
  {
    id: 'conv_00604',
    context: 'Sakura plans her wedding; Ren as older cousin gives practical advice.',
    purpose: 'cousin wedding-planning advice',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['結婚式', '招待', '計画', '披露宴', '緊張'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'お兄ちゃん、結婚式の計画、本当に、悩む。', en: 'Brother, wedding planning — truly conflicted.', style: 'Teen warm soft sincere brave-warm honest-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'ren_uni', jp: 'わかる、すごく。何が、一番、迷ってる？', en: 'I get it, very. What conflicts most?', style: 'University student warm gentle sincere-warm understanding-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '招待客、どこまで呼ぶか。', en: 'Invitees — how far to invite.', style: 'Teen warm soft sincere honest-warm specific-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'ren_uni', jp: 'うん、それは、難しい。俺たちも、本当に、悩んだ。', en: 'Yes, that\'s hard. We struggled too.', style: 'University student warm soft sincere matching-warm experienced-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'sakura_teen', jp: 'どうやって、決めた？', en: 'How did you decide?', style: 'Teen warm soft sincere asking-warm respectful-curious, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ren_uni', jp: '本当に、大事な人、優先で。披露宴、無理しないことが、一番。', en: 'Truly important people — priority. Don\'t overdo reception.', style: 'University student warm gentle sincere wise-warm advising-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'sakura_teen', jp: 'なるほど…緊張、少し、楽になった。', en: 'I see… nervousness — slightly easier.', style: 'Teen warm soft sincere relieved-warm thoughtful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '何でも、相談して。お兄ちゃん、応援してる。', en: 'Consult anything. Brother — cheering.', style: 'University student warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 605 — daichi + ren, two new dads (medium)
  {
    id: 'conv_00605',
    context: 'Daichi and Ren — Daichi just became dad; Ren says Aoi is now pregnant.',
    purpose: 'two-male milestone news sharing',
    ambient: 'izakaya_evening',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '父親', '家族', '感謝', '一緒'],
    cast: ['daichi_kansai', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'だいちさん、報告です。あおいも、妊娠したんです。', en: 'Daichi-san, report. Aoi too — pregnant.', style: 'University student warm soft tender sincere bright-warm news-disclosing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'daichi_kansai', jp: 'え、ほんま！おめでとう、れんくん！本当に嬉しい！', en: 'Eh, truly! Congrats, Ren-kun! Truly happy!', style: 'Kansai warm bright sincere overwhelmed-warm celebrating-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'ren_uni', jp: 'ありがとう。だいちさんと、ほぼ、同じ時期に。', en: 'Thank you. Almost same time as Daichi-san.', style: 'University student warm soft sincere bright-warm reflecting-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: 'なんか、運命やな。家族、ほんま、繋がっていくな。', en: 'Somehow, destiny. Family — truly connecting.', style: 'Kansai warm soft sincere deep-warm philosophical-warm reflective, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'だいちさん、お父さんって、本当に、どうですか？', en: 'Daichi-san, being father — how truly?', style: 'University student warm soft sincere asking-warm respectful-curious, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'daichi_kansai', jp: '正直、毎日、新しい発見。難しいけど、本当に、幸せ。', en: 'Honestly, daily — new discoveries. Hard, but truly happy.', style: 'Kansai warm soft tender sincere balanced-warm honest-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-balanced' },
      { speaker: 'ren_uni', jp: '俺も、楽しみ。だいちさんを、見習います。', en: 'Me too, looking forward. Will follow Daichi-san\'s example.', style: 'University student warm soft sincere bright-warm respectful-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'お互い、頑張ろな、お父さんとして。', en: 'Mutually, work hard, as fathers.', style: 'Kansai warm soft sincere closing-warm rallying-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 606 — kenji + yuki, complex project (long)
  {
    id: 'conv_00606',
    context: 'Kenji and Yuki work on a complex multi-month project together. Adult professional teamwork.',
    purpose: 'workplace deep professional collaboration',
    ambient: 'meeting_room',
    sound_effects: [],
    target_vocab: ['プロジェクト', '期限', '資料', '報告', '相談', '協力'],
    cast: ['kenji_office', 'yuki_office'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '佐藤さん、このプロジェクト、期限、迫ってきましたね。', en: 'Sato-san, project deadline — approaching.', style: 'Salaryman warm formal sincere-warm professional-careful, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'yuki_office', jp: 'はい、本当に。資料、まだ、半分残ってます。', en: 'Yes, truly. Materials — half left.', style: 'Office woman warm soft sincere honest-warm reporting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'kenji_office', jp: '私も、同じくらい。協力して、進めていきましょう。', en: 'Same here. Cooperating — let\'s progress.', style: 'Salaryman warm gentle sincere-warm collaborative-warm extending, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-collaborative' },
      { speaker: 'yuki_office', jp: '今日、夜まで、頑張ったら、なんとか、進むかも。', en: 'Tonight — working hard — maybe progress.', style: 'Office woman warm soft sincere committed-warm planning-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'kenji_office', jp: 'お互い、無理しないこと、大事ですよ。', en: 'Mutually, no overdoing — important.', style: 'Salaryman warm gentle sincere-warm careful-warm wise, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'gently-wise' },
      { speaker: 'yuki_office', jp: 'ありがとうございます。田中さんがいてくれて、本当に、心強い。', en: 'Thank you. With Tanaka-san — truly reassuring.', style: 'Office woman warm soft sincere deep-warm grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ。佐藤さんが、リーダーで、本当に、頼もしい。', en: 'Same. Sato-san as leader — truly dependable.', style: 'Salaryman warm gentle sincere-warm appreciating-warm reciprocal, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '報告、明日の朝、部長に上げますね。', en: 'Report — tomorrow morning to boss.', style: 'Office woman warm gentle sincere-warm practical-committed, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'kenji_office', jp: '良いですね。終わったら、一緒に、お疲れの飲み会、行きましょう。', en: 'Good. When done — together, drink to celebrate.', style: 'Salaryman warm gentle sincere bright-warm extending-warm future, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yuki_office', jp: '絶対、行きましょう。楽しみ。', en: 'Definitely. Looking forward.', style: 'Office woman warm bright sincere committed-warm anticipating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '今期、本当に、たくさん、お互い、学びましたね。', en: 'This term, truly, mutually — learned lots.', style: 'Salaryman warm soft sincere deep-warm reflective-warm philosophical, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: '本当に。田中さんと、こうやって、働けて、本当に、嬉しい。', en: 'Truly. Working with Tanaka-san like this — truly happy.', style: 'Office woman warm soft sincere closing-warm deep-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ。これからも、ずっと、一緒に。', en: 'Same. From now on too — always.', style: 'Salaryman warm soft sincere closing-warm extending-warm matching, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 607 — sho + saito (short)
  {
    id: 'conv_00607',
    context: 'Sho visits Saito for a follow-up check.',
    purpose: 'small medical-child ongoing relationship',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['元気', '健康', '頑張る', 'ありがとう', '一緒'],
    cast: ['saito_doctor', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'しょうくん、本当に、お元気そうで、安心。', en: 'Sho-kun, truly well — relieved.', style: 'Doctor warm professional gentle bright sincere-warm reporting-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'sho_child', jp: 'おかげさまで、ちゃんと、頑張ってます。', en: 'Thanks to all, working hard properly.', style: 'Tiny six-year-old soft small sincere proud-warm reporting-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'saito_doctor', jp: 'お母さん、メイさん、ご家族、皆さん、お元気で。', en: 'Mother, Mei-san, family — all well.', style: 'Doctor warm professional gentle sincere-warm extending-warm asking-civic, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '皆、ひかりちゃんが、生まれて、すごく、嬉しい。', en: 'All — Hikari-chan born — very happy.', style: 'Tiny six-year-old soft small sincere bright-warm sharing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-bright' },
      { speaker: 'saito_doctor', jp: 'よかったね。ご家族、ずっと、繋がっていけて。', en: 'Glad. Family — staying connected.', style: 'Doctor warm gentle sincere closing-warm philosophical-warm tender, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 608 — hiroshi_boss + tatsuya, autumn drive (medium)
  {
    id: 'conv_00608',
    context: 'Hiroshi-boss takes Tatsuya for a scenic autumn drive in the countryside.',
    purpose: 'two-male retirement leisure',
    ambient: 'car_driving',
    sound_effects: [],
    target_vocab: ['秋', '紅葉', '景色', '一緒', '楽しい'],
    cast: ['hiroshi_boss', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '達也さん、ドライブ、いかがですか。', en: 'Tatsuya-san, the drive — how?', style: 'Boss measured warm soft bright sincere-warm asking-warm leisurely, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: '景色、最高や。紅葉、本当に、綺麗。', en: 'View — best. Autumn leaves — truly beautiful.', style: 'Country gruff warm soft sincere appreciating-warm bright-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: '退職してから、こんな時間、本当に、贅沢。', en: 'After retirement — such time — truly luxury.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm reflecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '一緒に、楽しめるのが、嬉しい。', en: 'Enjoying together — happy.', style: 'Country gruff warm soft sincere bright-warm matching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'こうやって、田舎で、ゆっくり、過ごせる友人、本当に、ありがたい。', en: 'In country, slowly, friends like this — truly grateful.', style: 'Boss measured warm soft sincere deep-warm closing-philosophical, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ。これからも、たまに、こうやって、ね。', en: 'Same. From now on too, sometimes like this.', style: 'Country gruff warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'うん、ぜひ。', en: 'Yes, please.', style: 'Boss measured warm soft sincere closing-warm brief-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 609 — naoko + mrs_mori, neighborhood association (medium)
  {
    id: 'conv_00609',
    context: 'Naoko and Mrs. Mori attend a neighborhood association meeting together.',
    purpose: 'two-older-women civic engagement',
    ambient: 'community_room',
    sound_effects: [],
    target_vocab: ['近所', '会議', '一緒', '相談', '感謝'],
    cast: ['naoko_aunt', 'mrs_mori_neighbor'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: 'なおこさん、今日も、お時間、ありがとう。', en: 'Naoko-san, thank you for time today.', style: 'Neighbor warm gentle sincere-warm civic-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。会議、長くなりそうですね。', en: 'Same. Meeting — seems long.', style: 'Aunt warm gentle sincere-warm honest-acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'お庭のことも、相談したいことが、いっぱい。', en: 'Garden too — want to consult lots.', style: 'Neighbor warm gentle bright sincere-warm planning-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: '皆さんの意見、聞きながら、ね。', en: 'Hearing everyone\'s opinions.', style: 'Aunt warm soft sincere reflective-warm civic-warm engaging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'こうやって、ご近所、皆で、続けていけて、本当に、嬉しい。', en: 'Neighborhood — all continuing — truly happy.', style: 'Neighbor warm soft sincere deep-warm philosophical-warm reflective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '本当に。これからも、皆さんで、見守っていきましょう。', en: 'Truly. From now on too, watch together.', style: 'Aunt warm soft sincere closing-warm collective-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 610 — riku + sakura + ren + aoi (4-speaker, long)
  {
    id: 'conv_00610',
    context: 'Four cousins — Sakura engaged, Aoi expecting — gather for tea and share life updates.',
    purpose: 'four-cousin adult-life intersecting milestones',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['結婚', '赤ちゃん', '家族', '一緒', '幸せ', '感謝'],
    cast: ['riku_teen', 'sakura_teen', 'ren_uni', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '皆、集まれて、本当に、嬉しい。', en: 'Everyone gathered — truly happy.', style: 'Teen warm soft sincere bright-warm welcoming-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'さくらの結婚式、もうすぐだもんな。', en: 'Sakura\'s wedding — soon.', style: 'University student warm soft sincere bright-warm milestone-acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'さくらちゃん、本当に、おめでとう。', en: 'Sakura-chan, truly congrats.', style: 'Soft dreamy barista warm soft sincere bright-warm congratulating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'ありがとう。あおいちゃんも、赤ちゃん、おめでとう。', en: 'Thank you. Aoi-chan too — baby, congrats.', style: 'Teen warm soft sincere bright-warm reciprocating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'まだ、初期だけど。皆に、報告できて、嬉しい。', en: 'Still early. Glad to report to all.', style: 'Soft dreamy barista warm soft tender sincere bright-warm humble-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'riku_teen', jp: '俺と、まりも、最近、ちゃんと、考え始めた。', en: 'Me and Mari — recently started seriously thinking.', style: 'Teen warm soft tender sincere bright-warm future-disclosing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'sakura_teen', jp: 'え、本当！皆、いいタイミングで、進んでるね。', en: 'Eh, truly! All — at good timing — progressing.', style: 'Teen warm bright sincere overwhelmed-warm celebrating-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'ren_uni', jp: 'こうやって、皆、人生の節目、迎えてるの、本当に、嬉しい。', en: 'All — facing life milestones like this — truly happy.', style: 'University student warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: '皆で、お互いを、ちゃんと、見守れるって、本当に、ありがたい。', en: 'Watching over each other properly — truly grateful.', style: 'Soft dreamy barista warm soft sincere deep-warm philosophical-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '本当に。家族、皆で、ずっと、繋がっていきたい。', en: 'Truly. Family — all, stay connected forever.', style: 'Teen warm soft sincere deep-warm philosophical-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'riku_teen', jp: 'これからも、皆で、お祝い、続けていこう。', en: 'From now on, all, keep celebrating.', style: 'Teen warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、ずっと。家族、増えていって、嬉しい。', en: 'Yes, forever. Family growing — happy.', style: 'University student warm soft sincere closing-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: '感謝してます、本当に。皆さんに、家族みたいに、囲まれて。', en: 'Truly grateful. Surrounded like family.', style: 'Soft dreamy barista warm soft sincere closing-warm deep-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 611 — yumiko + ryosuke, household problem (medium)
  {
    id: 'conv_00611',
    context: 'Yumiko and Ryosuke have a small problem with their roof that needs fixing.',
    purpose: 'practical adult-married couple problem-solving',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['家', '修理', '相談', '一緒', '注意'],
    cast: ['ryosuke_dad', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: '亮介、屋根、雨漏りしてるみたい。', en: 'Ryosuke, roof — seems leaking.', style: 'Maternal warm soft sincere honest-warm civic-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'ryosuke_dad', jp: 'え、本当？すぐ、業者、呼ばないとな。', en: 'Eh, truly? Must call contractor.', style: 'Father warm gentle sincere concerned-warm immediate-warm action, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-immediate' },
      { speaker: 'yumiko_mom', jp: 'お父さん、来週、お休みあるから、一緒に、対応しよう。', en: 'Dear, next week off — let\'s handle together.', style: 'Maternal warm gentle sincere collaborative-warm planning, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-collaborative' },
      { speaker: 'ryosuke_dad', jp: 'そうしよう。お見積、ちゃんと、取ってから。', en: 'Let\'s do that. After getting estimate properly.', style: 'Father warm gentle sincere practical-warm careful-warm advising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'yumiko_mom', jp: '老朽化、ね。家、ちゃんと、見直さないと。', en: 'Aging. Must review home properly.', style: 'Maternal warm soft sincere thoughtful-warm philosophical-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'ryosuke_dad', jp: '皆さんに、相談、必要なら、ね。', en: 'Consulting all — if needed.', style: 'Father warm gentle sincere closing-warm collaborative-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'お父さんと、一緒なら、安心。', en: 'With you — reassured.', style: 'Maternal warm soft tender sincere closing-warm trusting-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 612 — hina + sho + sachiko (3-speaker, short)
  {
    id: 'conv_00612',
    context: 'The two kids visit Sachiko to show her something they made for baby Hikari.',
    purpose: 'small intergenerational warm moment',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '作る', '優しい', 'ありがとう'],
    cast: ['sachiko_grandma', 'hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'お祖母様、ひかりちゃんに、作ったよ！', en: 'Grandmother, made for Hikari-chan!', style: 'High child bright sincere enthusiastic-warm gift-presenting, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: 'え、見せて。何を、作ったの？', en: 'Eh, show me. What made?', style: 'Soft grandmother warm gentle bright sincere-warm engaging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '靴下と、絵。一緒に、作った。', en: 'Socks and picture. Made together.', style: 'Tiny six-year-old soft small sincere proud-warm sharing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'sachiko_grandma', jp: '本当に、優しい二人だね。ひかりちゃん、絶対、喜ぶ。', en: 'Both — truly kind. Hikari-chan surely happy.', style: 'Soft grandmother warm soft sincere deep-warm tender-praising-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'hina_child', jp: 'ひな、ちゃんと、お姉さんに、なる！', en: 'Hina — become proper big sister!', style: 'High child bright sincere committed-warm closing-energetic, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-committed' }
    ]
  },
  // 613 — mei + aoi (long)
  {
    id: 'conv_00613',
    context: 'Two women — Mei now mother, Aoi pregnant — share parallel-stage support.',
    purpose: 'two-female pregnancy/motherhood deep parallel sharing',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '妊娠', '一緒', '幸せ', '感謝', '相談'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'メイちゃん、ひかりちゃん、本当に、可愛い。', en: 'Mei-chan, Hikari-chan — truly cute.', style: 'Soft dreamy barista warm soft tender sincere bright-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'ありがとう。あおいちゃんも、赤ちゃん、おめでとう。', en: 'Thank you. Aoi-chan — baby congrats.', style: 'Romantic warm soft sincere bright-warm reciprocating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'まだ、ちょっと、不安。メイちゃん、最初、どうだった？', en: 'Still — slightly uneasy. Mei-chan, at first — how?', style: 'Soft dreamy barista warm soft sincere honest-warm vulnerable-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-vulnerable' },
      { speaker: 'mei_romantic', jp: '私も、すごく、不安だった。けど、家族の支えで。', en: 'Me too — very uneasy. But family support.', style: 'Romantic warm soft sincere matching-warm honest-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'aoi_barista', jp: 'お祖母様、本当に、優しいって、聞いてる。', en: 'Grandmother — heard truly kind.', style: 'Soft dreamy barista warm soft sincere appreciating-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'うん。あおいちゃんも、皆に、頼っていいよ。', en: 'Yes. Aoi-chan too — rely on all.', style: 'Romantic warm soft sincere tender-warm extending-warm encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'aoi_barista', jp: '本当に、ありがたい。父も、空から、見てくれてる気がする。', en: 'Truly grateful. Father — feels watching from sky.', style: 'Soft dreamy barista warm soft tender sincere deep-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-philosophical' },
      { speaker: 'mei_romantic', jp: 'お父様、絶対、見守ってる。', en: 'Father — surely watching.', style: 'Romantic warm soft tender sincere-warm comforting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-comforting' },
      { speaker: 'aoi_barista', jp: '私も、皆さんみたいに、立派な、お母さんに、なれるかな。', en: 'I — like all — can become splendid mother?', style: 'Soft dreamy barista warm soft tender vulnerable-warm wondering-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-vulnerable' },
      { speaker: 'mei_romantic', jp: '絶対なれる。あおいちゃんの、優しさで。', en: 'Definitely. With Aoi-chan\'s kindness.', style: 'Romantic warm soft sincere firm-warm believing-warm closing-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-firm' },
      { speaker: 'aoi_barista', jp: 'ありがとう。本当に、メイちゃんと、こうやって、お話できて、幸せ。', en: 'Thank you. Truly happy talking with Mei-chan like this.', style: 'Soft dreamy barista warm soft sincere deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: 'これからも、一緒に、子育て、頑張ろうね。', en: 'From now on too, together — let\'s raise kids.', style: 'Romantic warm soft sincere closing-warm collective-warm extending-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 614 — takeda + ryosuke (medium)
  {
    id: 'conv_00614',
    context: 'Officer Takeda and Ryosuke discuss community safety concerns over coffee.',
    purpose: 'two civic-minded men discussing community',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['近所', '安全', '見守る', '協力', '感謝'],
    cast: ['takeda_officer', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: '亮介さん、お時間、ありがとうございます。', en: 'Ryosuke-san, thank you for time.', style: 'Officer warm professional gentle sincere-warm civic-opening, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。近所のこと、気になることが？', en: 'Same. Neighborhood — anything concerning?', style: 'Father warm gentle sincere-warm careful-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '最近、お年寄り、お一人で暮らされてる方、少し、心配で。', en: 'Lately, elderly living alone — slightly concerned.', style: 'Officer warm professional gentle sincere careful-warm civic-disclosure, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-careful' },
      { speaker: 'ryosuke_dad', jp: 'うちでも、母を、皆で、見守ってます。', en: 'Even ours — all watch over mother.', style: 'Father warm soft sincere reporting-warm civic-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: 'ご家族の見守りが、本当に、大事。', en: 'Family\'s watching — truly important.', style: 'Officer warm professional gentle sincere-warm philosophical-warm acknowledging, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '何か、お役に立てることがあれば、ぜひ。', en: 'If anything I can help — please.', style: 'Father warm soft sincere generous-warm extending-warm civic, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'takeda_officer', jp: '本当に、ありがとうございます。皆さんの協力で、近所、安全に保てます。', en: 'Truly thank you. With cooperation — keep neighborhood safe.', style: 'Officer warm professional gentle sincere deep-warm closing-grateful, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 615 — daichi + tatsuya + naoko (3-speaker, medium)
  {
    id: 'conv_00615',
    context: 'Daichi visits Tatsuya with Naoko. Three from extended family relaxing.',
    purpose: 'three-extended-family small visit',
    ambient: 'farm_porch_afternoon',
    sound_effects: [],
    target_vocab: ['田舎', '一緒', '感謝', '家族', '楽しい'],
    cast: ['daichi_kansai', 'tatsuya_country', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '達也さん、ナオコさんも、連れてきました。', en: 'Tatsuya-san, brought Naoko-san too.', style: 'Kansai warm bright sincere-warm gathering-arriving, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'おう、ナオコさん、ようこそ。', en: 'Oh, Naoko-san, welcome.', style: 'Country gruff warm bright sincere-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: '達也さん、田舎、本当に、好き。', en: 'Tatsuya-san, country — truly love.', style: 'Aunt warm bright sincere-warm appreciating-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'いつでも、来てください。', en: 'Come anytime.', style: 'Country gruff warm sincere generous-warm extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ひかりちゃんも、いつか、皆で、連れてきますね。', en: 'Hikari-chan too — someday, with all bring.', style: 'Kansai warm soft sincere bright-warm extending-future-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '楽しみ。皆で、田舎、楽しみたい。', en: 'Looking forward. All — enjoy country.', style: 'Aunt warm bright sincere closing-warm extending-warm wishing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '家族で、ね。', en: 'As family.', style: 'Country gruff warm soft sincere closing-warm brief-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 616 — asuka + sakura (short)
  {
    id: 'conv_00616',
    context: 'Asuka and Sakura have a quick check-in.',
    purpose: 'small ongoing teacher-student ongoing relationship',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['先生', '結婚', '感謝', '一緒', '頑張る'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'さくらさん、結婚の準備、進んでる？', en: 'Sakura-san, wedding prep — progressing?', style: 'Teacher warm gentle bright sincere-warm engaged-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sakura_teen', jp: 'はい、おかげさまで。緊張、半端ない。', en: 'Yes, thanks to all. Nervousness — huge.', style: 'Teen warm soft sincere honest-warm vulnerable-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'asuka_teacher', jp: '誰でも、そう。私も、応援してる。', en: 'Everyone\'s like that. I\'m cheering.', style: 'Teacher warm gentle sincere-warm normalizing-warm encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '先生に、絶対、来てほしいです。', en: 'Want sensei to surely come.', style: 'Teen warm soft sincere requesting-warm tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'もちろん、行きます。本当に、楽しみ。', en: 'Of course, will go. Truly looking forward.', style: 'Teacher warm gentle sincere bright closing-warm committing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 617 — saito + sachiko (short)
  {
    id: 'conv_00617',
    context: 'Sachiko\'s regular checkup with Saito. Casual familiarity.',
    purpose: 'ongoing doctor-elder visit',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['健康', '元気', '感謝', '一緒', 'ありがとう'],
    cast: ['saito_doctor', 'sachiko_grandma'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '田中さん、本当に、お元気で、何より。', en: 'Tanaka-san, truly well — best.', style: 'Doctor warm professional gentle bright sincere-warm reporting, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'sachiko_grandma', jp: 'おかげさまで。先生、いつも、ありがとう。', en: 'Thanks to all. Doctor, always thank you.', style: 'Soft grandmother warm soft sincere closing-warm grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'ご家族、ひかりちゃんも、本当に、お元気ですか。', en: 'Family, Hikari-chan — truly well?', style: 'Doctor warm professional gentle sincere-warm extending-care, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'はい、皆、お元気で、本当に、嬉しい。', en: 'Yes, all well — truly happy.', style: 'Soft grandmother warm soft sincere bright-warm reflective-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'これからも、ご家族、皆さんの、健康、見守らせて、ください。', en: 'From now on too — please let me watch your family\'s health.', style: 'Doctor warm professional gentle sincere closing-warm extending-warm civic, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 618 — kenji + hiroshi_boss + ryosuke + tatsuya + daichi (5-speaker, long)
  {
    id: 'conv_00618',
    context: 'Five men golf together for the first time as a regular gathering.',
    purpose: 'five-male regular gathering — friendship deepening',
    ambient: 'driving_range_afternoon',
    sound_effects: [],
    target_vocab: ['ゴルフ', '一緒', '楽しい', '感謝', '将来', '友達'],
    cast: ['hiroshi_boss', 'ryosuke_dad', 'kenji_office', 'daichi_kansai', 'tatsuya_country'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '皆さん、五人で、ゴルフ、できるって、贅沢ですね。', en: 'Everyone, five of us golfing — luxury.', style: 'Boss measured warm soft sincere bright-warm celebrating-warm opening, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '田舎から、わざわざ来てくれて、ほんま、嬉しい。', en: 'Coming from country specially — truly happy.', style: 'Country gruff warm bright sincere-warm appreciating-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '皆さんと、こうやって、過ごせるの、本当に、ありがたい。', en: 'Spending time with all like this — truly grateful.', style: 'Kansai warm soft sincere bright-warm appreciating-warm matching, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: '世代も、業界も、超えて、五人で、本当に。', en: 'Across generations and industries — five of us — truly.', style: 'Father warm gentle sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こんな、ご縁、本当に、人生で、なかなか、ない。', en: 'Such connection — rare in life.', style: 'Salaryman warm formal sincere deep-warm philosophical-warm acknowledging, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '田中部長と呼ばれてた頃から、ずっと、皆さんに、支えられて。', en: 'Since called Tanaka-bucho — always supported by all.', style: 'Boss measured warm soft sincere deep-warm humble-warm reflecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ、皆さんに、ずっと、お世話に。', en: 'Same — indebted to all.', style: 'Country gruff warm soft sincere humble-warm reciprocal-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ひかりちゃんも、いつか、ご一緒できたら、ええなあ。', en: 'Hikari-chan too — someday joining — would be good.', style: 'Kansai warm soft sincere bright-warm extending-future-warm wishing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '次世代、繋いでいきたいですね。', en: 'Want to pass to next generation.', style: 'Father warm soft sincere philosophical-warm extending-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こうやって、五人で、ずっと、続けていきたい。', en: 'As five — keep continuing forever.', style: 'Salaryman warm formal sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'そうしましょう。長い、お付き合い、お願いします。', en: 'Let\'s. Long association, please.', style: 'Boss measured warm soft sincere closing-warm extending-deep-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '感謝、本当に、感謝してる。', en: 'Grateful, truly, grateful.', style: 'Country gruff warm soft sincere closing-warm deep-brief-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '人生、こんなええ友達、出会えて、本当に、運がええ。', en: 'Life — meeting such good friends — truly lucky.', style: 'Kansai warm soft sincere deep-warm closing-philosophical-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 619 — hina + mei (3-speaker implied) — actually let me do hina + mei + yumiko
  {
    id: 'conv_00619',
    context: 'Mei brings baby Hikari to visit; Hina is fascinated.',
    purpose: 'three-female with newborn presence',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '可愛い', '一緒', '抱く', '優しい'],
    cast: ['mei_romantic', 'hina_child', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'メイお姉さん、ひかりちゃん、本当に、小さい！', en: 'Mei-onee-san, Hikari-chan — truly small!', style: 'High child bright sincere overwhelmed-warm observing-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'ふふ、抱っこ、してみる？', en: 'Hehe, try holding?', style: 'Romantic warm soft tender bright-warm offering-warm engaging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'hina_child', jp: 'え、いいの？怖い…でも、嬉しい！', en: 'Eh, okay? Scared… but happy!', style: 'High child bright soft sincere excited-vulnerable-warm balanced, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: 'ゆっくり、優しく、ね。', en: 'Slowly, gently.', style: 'Maternal warm gentle sincere-warm protective-warm guiding, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-protective' },
      { speaker: 'hina_child', jp: '…うわ、温かい。本当に、可愛い。', en: '…Wow, warm. Truly cute.', style: 'High child bright soft sincere overwhelmed-warm tender-observing, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'mei_romantic', jp: 'ひな、本当に、優しい、お姉さん、だね。', en: 'Hina — truly kind big sister.', style: 'Romantic warm soft tender sincere-warm praising-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'こうやって、家族、繋がっていくの、本当に、嬉しい。', en: 'Family connecting like this — truly happy.', style: 'Maternal warm soft sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 620 — sakura + ryosuke (medium)
  {
    id: 'conv_00620',
    context: 'Sakura visits Ryosuke for career advice — about teaching and balancing marriage.',
    purpose: 'small mentor-young-woman career-balance advice',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['仕事', '結婚', '両立', '相談', '感謝'],
    cast: ['ryosuke_dad', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '亮介さん、お時間、ありがとうございます。', en: 'Ryosuke-san, thank you for time.', style: 'Teen warm formal sincere-warm respectful-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。何か、相談ですか。', en: 'Same. Consultation?', style: 'Father warm gentle sincere-warm civil-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '結婚と、仕事の、両立、不安で。', en: 'Marriage and work balance — uneasy.', style: 'Teen warm soft sincere honest-warm vulnerable-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-vulnerable' },
      { speaker: 'ryosuke_dad', jp: 'うん、わかる。私も、ゆみこも、若い頃、考えました。', en: 'Yes, I get it. Me and Yumiko, when young — thought.', style: 'Father warm gentle sincere-warm matching-warm sharing-experience, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'sakura_teen', jp: 'どうやって、乗り越えました？', en: 'How did you overcome?', style: 'Teen warm soft sincere asking-warm respectful-curious, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'ryosuke_dad', jp: 'お互いを、ちゃんと、思いやる。それだけ。', en: 'Cherishing each other properly. Just that.', style: 'Father warm gentle sincere wise-warm simple-warm advising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'sakura_teen', jp: '本当に、感謝してます。お知恵を、いただいて。', en: 'Truly grateful. Receiving wisdom.', style: 'Teen warm soft sincere closing-warm deep-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 621 — ren + tatsuya (short)
  {
    id: 'conv_00621',
    context: 'Ren visits Tatsuya by phone to tell him about Aoi\'s pregnancy.',
    purpose: 'small adult-male news sharing across generations',
    ambient: 'phone_call',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '家族', '感謝', '一緒', 'ありがとう'],
    cast: ['ren_uni', 'tatsuya_country'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: '達也さん、報告です。あおいも、妊娠しました。', en: 'Tatsuya-san, report. Aoi too — pregnant.', style: 'University student warm soft tender sincere bright-warm news-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'tatsuya_country', jp: 'おい、ほんまか！おめでとう、ほんま！', en: 'Hey, truly! Congrats, truly!', style: 'Country gruff warm bright sincere overwhelmed-warm celebrating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'ren_uni', jp: '達也さんの、ひかりちゃんに、続けるって、嬉しい。', en: 'Following Tatsuya-san\'s Hikari — happy.', style: 'University student warm soft sincere bright-warm philosophical-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '家族、増えていって、ほんま、嬉しい。', en: 'Family growing — truly happy.', style: 'Country gruff warm soft sincere closing-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'これからも、ご縁、よろしくお願いします。', en: 'From now on too — connection, please.', style: 'University student warm soft sincere closing-warm extending-warm respectful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 622 — yuki + mei + aoi + sakura (4-speaker, long)
  {
    id: 'conv_00622',
    context: 'Four women lunch — Mei now mother, Aoi pregnant, Sakura newly married, Yuki single. Adult women.',
    purpose: 'four-female adult women friendship across life stages',
    ambient: 'restaurant_lunch',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '幸せ', '感謝', '将来', '友達'],
    cast: ['yuki_office', 'mei_romantic', 'aoi_barista', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '四人で、こうやって、揃うの、本当に、嬉しい。', en: 'Four of us gathered like this — truly happy.', style: 'Office woman warm bright sincere-warm celebrating-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '皆、人生の、いろんなステージにいて、本当に、面白い。', en: 'All — various life stages — truly interesting.', style: 'Romantic warm soft sincere bright-warm reflective-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '私、メイちゃんを、お手本に、している。', en: 'I — using Mei-chan as model.', style: 'Soft dreamy barista warm soft sincere admiring-warm acknowledging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '私は、皆さん、結婚生活、参考にしてる。', en: 'I — using all\'s married life as reference.', style: 'Teen warm soft sincere humble-warm appreciative-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-humble' },
      { speaker: 'yuki_office', jp: '私は、皆さんの、輝いてる感じ、本当に、羨ましい。', en: 'I — all\'s shining feeling — truly envious.', style: 'Office woman warm soft sincere honest-warm appreciative-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'mei_romantic', jp: '皆、それぞれに、輝いてるよ。本当に。', en: 'All — shining each. Truly.', style: 'Romantic warm soft sincere bright-warm reassuring-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'ゆきさんも、ご自分の道で、ちゃんと、輝いてる。', en: 'Yuki-san too — on her own path — shining.', style: 'Soft dreamy barista warm soft sincere reassuring-warm bright-warm affirming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'こうやって、皆で、お互いを、見守れる関係、本当に、ありがたい。', en: 'Mutually watching like this — truly grateful.', style: 'Teen warm soft sincere deep-warm philosophical-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yuki_office', jp: 'ね。これからも、ずっと、繋がっていきたい。', en: 'Yes. From now on too — staying connected.', style: 'Office woman warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: '人生、それぞれの幸せ、お祝いし合いましょう。', en: 'Life — each happiness — celebrate mutually.', style: 'Romantic warm soft sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'aoi_barista', jp: 'うん、絶対。本当に、感謝してる、皆に。', en: 'Yes, definitely. Truly grateful, to all.', style: 'Soft dreamy barista warm soft sincere closing-warm deep-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '本当に。皆で、ね。', en: 'Truly. As all.', style: 'Teen warm soft sincere closing-warm brief-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 623 — naoko + sachiko + yumiko + hina (4-speaker, medium)
  {
    id: 'conv_00623',
    context: 'Four-female multigenerational tea — Hina now growing up, Sachiko widowed, Yumiko and Naoko middle.',
    purpose: 'four-female multigenerational cohort moment',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '感謝', '楽しい', '幸せ'],
    cast: ['sachiko_grandma', 'yumiko_mom', 'naoko_aunt', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: '皆で、こうやって、ね。', en: 'All — like this, you know.', style: 'Soft grandmother warm soft tender deep-warm philosophical-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'hina_child', jp: 'お祖母様、お母さん、ナオコちゃん、皆と一緒で、楽しい。', en: 'Grandma, mom, Naoko-chan — with all, fun.', style: 'High child bright sincere enthusiastic-warm appreciating-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'naoko_aunt', jp: '本当ね。お祖母様も、ずっと、こうやって、過ごせたら、ね。', en: 'Truly. Grandma — staying like this forever.', style: 'Aunt warm soft sincere tender-warm extending-warm wishing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'お父さんも、絶対、見てくれてる。', en: 'Father — definitely watching.', style: 'Maternal warm soft tender sincere-warm philosophical-warm comforting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: 'うん、絶対、見てる。皆で、お祝いし合えるって、本当に、幸せ。', en: 'Yes, definitely. Mutually celebrating — truly happy.', style: 'Soft grandmother warm soft tender deep-warm philosophical-warm closing-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'hina_child', jp: 'ひな、お祖母様の、家、本当に、大好き。', en: 'Hina — grandma\'s home — truly love.', style: 'High child bright sincere tender-warm declaring-warm closing, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'naoko_aunt', jp: 'これからも、ずっと、皆で、ね。', en: 'From now on too — always with all.', style: 'Aunt warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

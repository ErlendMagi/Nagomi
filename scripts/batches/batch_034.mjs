import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_034)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 664 — sakura + mei, knitting (medium)
  {
    id: 'conv_00664',
    context: 'Sakura learns knitting from Mei. Quiet hand-craft afternoon.',
    purpose: 'two-women hand-craft sharing',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['糸', '色', '一緒', '楽しい', '優しい'],
    cast: ['sakura_teen', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'メイさん、編み物、教えてくれて、ありがとう。', en: 'Mei-san, thank you for teaching knitting.', style: 'Teen warm soft sincere bright-warm grateful-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'ふふ、楽しい。一緒に、できるって、嬉しい。', en: 'Hehe, fun. Doing together — happy.', style: 'Romantic warm soft sincere bright-warm laughing-tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'この色、ひかりちゃんに、合う？', en: 'This color — suits Hikari?', style: 'Teen warm soft sincere engaging-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'うん、絶対。やさしい色で、可愛い。', en: 'Yes, definitely. Gentle color, cute.', style: 'Romantic warm soft tender sincere-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sakura_teen', jp: '針、難しい。ゆっくり、教えてくださいね。', en: 'Needle — difficult. Slowly, please teach.', style: 'Teen warm soft sincere honest-warm asking-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'もちろん。一緒に、ね。最初は、皆、難しい。', en: 'Of course. Together. First — everyone hard.', style: 'Romantic warm soft sincere generous-warm normalizing-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'こうやって、皆で、ひかりちゃんに、用意できるの、本当に、嬉しい。', en: 'Preparing for Hikari like this — truly happy.', style: 'Teen warm soft sincere closing-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 665 — daichi + sho, fishing (short)
  {
    id: 'conv_00665',
    context: 'Daichi takes Sho fishing — bonding moment with the cousins.',
    purpose: 'small uncle-figure-child outdoor moment',
    ambient: 'river_morning',
    sound_effects: [],
    target_vocab: ['釣り', '魚', '一緒', '楽しい', '頑張る'],
    cast: ['daichi_kansai', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'しょう、釣り、ちゃんと、初めてやろ？', en: 'Sho, fishing — really first time?', style: 'Kansai warm bright sincere casual-warm engaging-asking, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'はい。緊張する。', en: 'Yes. Nervous.', style: 'Tiny six-year-old soft small sincere brief-warm honest-disclosure, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-honest' },
      { speaker: 'daichi_kansai', jp: '大丈夫。ゆっくり、教えてあげるで。', en: 'Fine. Slowly will teach.', style: 'Kansai warm bright sincere reassuring-warm generous-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'うん、頑張る。', en: 'Yes, will try.', style: 'Tiny six-year-old soft small sincere committed-warm closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-committed' },
      { speaker: 'daichi_kansai', jp: '魚、釣れたら、お母さんに、自慢できるな。', en: 'If you catch — brag to mother.', style: 'Kansai warm bright laughing teasing-warm closing-encouraging, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'warmly-laughing' }
    ]
  },
  // 666 — kenji + yuki, train commute (medium)
  {
    id: 'conv_00666',
    context: 'Kenji and Yuki on train; discuss new project assignment.',
    purpose: 'two-colleague morning catch-up',
    ambient: 'train_morning',
    sound_effects: [],
    target_vocab: ['仕事', '一緒', '相談', '頑張る', '感謝'],
    cast: ['kenji_office', 'yuki_office'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '田中さん、おはようございます。新しい案件、ご担当ですか？', en: 'Tanaka-san, morning. New case — handling?', style: 'Office woman warm formal sincere bright-warm professional-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: 'はい、佐藤さんと、ご一緒で。', en: 'Yes, with Sato-san.', style: 'Salaryman warm formal sincere bright-warm acknowledging-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yuki_office', jp: '嬉しい。田中さんと、また、一緒に、お仕事、できる。', en: 'Happy. Working with Tanaka-san again.', style: 'Office woman warm soft sincere bright-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: 'こちらこそ。今度の案件、結構、難しそうですね。', en: 'Same. This case — looks quite difficult.', style: 'Salaryman warm gentle sincere-warm engaged-acknowledging, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '皆さんと、ちゃんと、相談しながら、進めていきましょう。', en: 'With all — consulting properly — progress.', style: 'Office woman warm gentle sincere-warm collaborative-warm planning, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'はい、頑張りましょう。', en: 'Yes, let\'s work hard.', style: 'Salaryman warm formal sincere closing-warm committing-matching, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '本当に、感謝してます。', en: 'Truly grateful.', style: 'Office woman warm soft sincere closing-brief-warm deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 667 — riku + tatsuya, country (medium)
  {
    id: 'conv_00667',
    context: 'Riku visits country, talks with Tatsuya about plans.',
    purpose: 'small adult-younger country chat',
    ambient: 'farm_porch_afternoon',
    sound_effects: [],
    target_vocab: ['田舎', '将来', '一緒', '家族', '感謝'],
    cast: ['riku_teen', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: '達也さん、いつも、田舎、来させてもらって、ありがとうございます。', en: 'Tatsuya-san, always — letting me come to country.', style: 'Teen warm formal sincere-warm grateful-respectful-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ。リクくん、立派になって。', en: 'Same. Riku-kun — splendid.', style: 'Country gruff warm bright sincere appreciating-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'まりとも、将来、田舎、もっと、来たい。', en: 'With Mari too — future, want to come more.', style: 'Teen warm soft sincere bright-warm planning-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'いつでも、家族、皆、ようこそ。', en: 'Anytime — family, all, welcome.', style: 'Country gruff warm bright sincere generous-warm extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'riku_teen', jp: 'こうやって、お会いできる関係、本当に、ありがたい。', en: 'Such relationship — truly grateful.', style: 'Teen warm soft sincere closing-warm deep-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '家族、ずっと、ね。', en: 'Family — always.', style: 'Country gruff warm soft sincere closing-brief-warm deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 668 — naoko + hiroshi_boss, theater (medium)
  {
    id: 'conv_00668',
    context: 'Hiroshi-boss and Naoko at the theater again, discussing the play.',
    purpose: 'ongoing civilized refined friendship',
    ambient: 'theater_evening',
    sound_effects: [],
    target_vocab: ['劇', '感動', '一緒', '楽しい', '感謝'],
    cast: ['hiroshi_boss', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'ナオコさん、今夜の劇、本当に、感動しました。', en: 'Naoko-san, tonight\'s play — truly moved.', style: 'Boss measured warm soft sincere deep-warm appreciating-warm reflecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '私も。役者さんの、演技、素晴らしかった。', en: 'Me too. Actor\'s performance — splendid.', style: 'Aunt warm gentle bright sincere-warm matching-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: '物語の、最後、本当に、印象的。', en: 'Story\'s ending — truly impressive.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm reflecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'こうやって、感想、ご一緒に、話せるの、本当に、嬉しい。', en: 'Talking impressions together — truly happy.', style: 'Aunt warm soft sincere bright-warm philosophical-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: 'こちらこそ。これからも、ずっと、ご一緒、お願いします。', en: 'Same. From now on too — together, please.', style: 'Boss measured warm soft sincere closing-warm extending-warm tender, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'はい、本当に、感謝しています。', en: 'Yes, truly grateful.', style: 'Aunt warm soft sincere closing-warm deep-brief, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 669 — sho + asuka, school show (short)
  {
    id: 'conv_00669',
    context: 'Sho excitedly tells Asuka about an upcoming school presentation.',
    purpose: 'small student-teacher event-anticipation',
    ambient: 'classroom_after',
    sound_effects: [],
    target_vocab: ['学校', '頑張る', '応援', '一緒', '楽しい'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: '先生、今度の学習発表、ぼく、発表する役、もらった！', en: 'Sensei, next learning presentation — got presenter role!', style: 'Tiny six-year-old soft small sincere enthusiastic-warm proud-reporting, the small real warmth audible, soft small warmth throughout delivery.', mood: 'enthusiastically-proud' },
      { speaker: 'asuka_teacher', jp: 'え、すごい！しょうくん、本当に、頑張ってる。', en: 'Eh, wonderful! Sho-kun — truly working hard.', style: 'Teacher warm bright sincere overwhelmed-warm celebrating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'sho_child', jp: '緊張する、けど、頑張る。', en: 'Nervous, but will try.', style: 'Tiny six-year-old soft small sincere committed-warm balanced-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-committed' },
      { speaker: 'asuka_teacher', jp: '先生も、絶対、見に行く。応援してる。', en: 'Sensei will surely come. Cheering.', style: 'Teacher warm gentle sincere committed-warm encouraging-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'ありがとう、先生。本当に、嬉しい。', en: 'Thank you, sensei. Truly happy.', style: 'Tiny six-year-old soft small sincere closing-warm grateful-tender, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 670 — yumiko + sachiko + mei + hina (4-speaker, long)
  {
    id: 'conv_00670',
    context: 'Four generations of women gather. Hina now older, Hikari there too.',
    purpose: 'four-female multigenerational rich moment',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '感謝', '幸せ', '優しい', '楽しい'],
    cast: ['sachiko_grandma', 'yumiko_mom', 'mei_romantic', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: '皆さん、ようこそ。お祖母ちゃんも、嬉しい。', en: 'Everyone, welcome. Grandma also happy.', style: 'Soft grandmother warm soft tender bright-warm welcoming-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'yumiko_mom', jp: 'お母さん、皆で、こうやって、集まれて、本当に、嬉しい。', en: 'Mother, gathering all like this — truly happy.', style: 'Maternal warm soft sincere bright-warm philosophical-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'ひかりちゃんも、お祖母ちゃん、大好きです。', en: 'Hikari-chan loves grandma.', style: 'Romantic warm soft sincere tender-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'ひな、ひかりちゃんと、遊べて、楽しい。', en: 'Hina — playing with Hikari — fun.', style: 'High child bright sincere enthusiastic-warm sharing-tender, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sachiko_grandma', jp: 'こうやって、四世代、揃うって、本当に、奇跡みたい。', en: 'Four generations gathered — truly like miracle.', style: 'Soft grandmother warm soft tender deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: 'お父さんも、絶対、見てくれてる。', en: 'Father — definitely watching.', style: 'Maternal warm soft tender sincere-warm comforting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'mei_romantic', jp: 'お祖父様、絶対、嬉しい。', en: 'Grandpa — surely happy.', style: 'Romantic warm soft tender sincere-warm matching-warm comforting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'お祖父様も、お祖母様も、ずっと、一緒。', en: 'Grandpa, grandma — forever together.', style: 'High child bright sincere tender-warm philosophical-warm comforting, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sachiko_grandma', jp: 'ひな、本当に、優しい子に、なったね。', en: 'Hina — truly become kind child.', style: 'Soft grandmother warm soft sincere deep-warm appreciating-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: '家族、皆で、育ててもらって、本当に、ありがたい。', en: 'Family — raising together — truly grateful.', style: 'Maternal warm soft sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: 'これからも、皆さんで、ひかりちゃん、見守ってほしい。', en: 'From now on too — all, watch over Hikari.', style: 'Romantic warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'もちろん。お祖母ちゃん、ずっと、ね。', en: 'Of course. Grandma always.', style: 'Soft grandmother warm soft tender deep closing-warm extending-deep-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 671 — aoi + ren + sho (3-speaker, medium)
  {
    id: 'conv_00671',
    context: 'Ren and pregnant Aoi visit. Sho watches the new family.',
    purpose: 'three young-people gentle visit',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '楽しい', '家族', '優しい'],
    cast: ['ren_uni', 'aoi_barista', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'お兄ちゃん、あおいさん、来てくれて、嬉しい。', en: 'Brother, Aoi-san, happy you came.', style: 'Tiny six-year-old soft small sincere enthusiastic-warm welcoming, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-bright' },
      { speaker: 'aoi_barista', jp: 'しょう、ありがとう。元気そうで。', en: 'Sho, thank you. Looking well.', style: 'Soft dreamy barista warm soft sincere bright-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'しょう、あおいの、お腹、見える？', en: 'Sho, can see Aoi\'s belly?', style: 'University student warm soft sincere bright-warm engaging-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'うん、すごく大きい。赤ちゃん、楽しみ。', en: 'Yes, very big. Baby — looking forward.', style: 'Tiny six-year-old soft small sincere bright-warm wondering-warm anticipating, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-bright' },
      { speaker: 'aoi_barista', jp: 'しょうも、もうすぐ、いとこに、なる。', en: 'Sho — soon becoming cousin.', style: 'Soft dreamy barista warm soft tender sincere-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sho_child', jp: 'ぼく、優しく、する。約束。', en: 'I — gently — promise.', style: 'Tiny six-year-old soft small sincere committed-warm tender-promising, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'ren_uni', jp: 'しょう、本当に、優しい。', en: 'Sho — truly kind.', style: 'University student warm soft sincere closing-warm appreciating-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 672 — ryosuke + daichi + ren (3-speaker, medium)
  {
    id: 'conv_00672',
    context: 'Three men gather — Ryosuke as elder, Daichi and Ren both new dads (Daichi already, Ren soon).',
    purpose: 'three-male generational adult talk',
    ambient: 'izakaya_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '父親', '感謝', '幸せ'],
    cast: ['ryosuke_dad', 'daichi_kansai', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'お二人とも、お父さんに、なってますね。', en: 'Both becoming fathers.', style: 'Father warm gentle bright sincere-warm acknowledging-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: 'ほんま、嬉しい。亮介さんから、ずっと、教わってる。', en: 'Truly happy. Always learning from Ryosuke-san.', style: 'Kansai warm soft sincere bright-warm appreciating-warm philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: '俺も。だいちさんと、亮介さん、両方、見習ってる。', en: 'Me too. Following both Daichi-san and Ryosuke-san.', style: 'University student warm soft sincere humble-warm acknowledging-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-humble' },
      { speaker: 'ryosuke_dad', jp: '皆で、お互いに、見守って、いきましょう。', en: 'All — mutually watching.', style: 'Father warm gentle sincere-warm collective-warm closing-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ほんま、家族みたいで、ええなあ。', en: 'Truly, like family — good.', style: 'Kansai warm soft sincere closing-warm philosophical-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '本当に、感謝してる。皆さんに。', en: 'Truly grateful. To all.', style: 'University student warm soft sincere closing-brief-warm deep-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'これからも、ずっと、ね。', en: 'From now on too — always.', style: 'Father warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 673 — saito + sakura, doctor visit (short)
  {
    id: 'conv_00673',
    context: 'Sakura visits Saito for a pre-pregnancy checkup.',
    purpose: 'small ongoing doctor-patient ahead of family-planning',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['健康', '家族', '相談', '感謝', '将来'],
    cast: ['saito_doctor', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '斎藤先生、こんにちは。', en: 'Dr. Saito, hello.', style: 'Teen warm formal sincere brief-warm civil-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'さくらさん、お元気そうで何より。何か、ご相談？', en: 'Sakura-san, glad you\'re well. Some consultation?', style: 'Doctor warm professional gentle sincere-warm welcoming-asking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'sakura_teen', jp: '結婚してから、これから、家族のこと、考え始めてて。', en: 'After marriage — starting to think about family.', style: 'Teen warm soft sincere honest-warm careful-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '健康、特に、問題ないですよ。ご相談、いつでも。', en: 'Health — no particular issues. Consultation anytime.', style: 'Doctor warm professional gentle sincere-warm reassuring-extending, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '本当に、感謝しています。', en: 'Truly grateful.', style: 'Teen warm soft sincere closing-brief-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 674 — hina + naoko (short)
  {
    id: 'conv_00674',
    context: 'Hina visits her great-aunt Naoko alone for the first time.',
    purpose: 'small child-elder bonding',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['一緒', '楽しい', '家族', '優しい', 'ありがとう'],
    cast: ['naoko_aunt', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'ナオコちゃん、一人で来た！', en: 'Naoko-chan, came alone!', style: 'High child bright sincere proud-warm declaring-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-proud' },
      { speaker: 'naoko_aunt', jp: 'まあ、ひな、立派になって。よく来てくれた。', en: 'Oh, Hina, become splendid. Glad you came.', style: 'Aunt warm gentle bright sincere-warm welcoming-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'ナオコちゃんと、お話したかった。', en: 'Wanted to talk with Naoko-chan.', style: 'High child bright sincere tender-warm disclosure-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'naoko_aunt', jp: '本当に、嬉しい。ひな、いつでも、来ていいよ。', en: 'Truly happy. Hina — come anytime.', style: 'Aunt warm soft sincere bright-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'ありがとう。ひな、ナオコちゃん、大好き。', en: 'Thank you. Hina loves Naoko-chan.', style: 'High child bright sincere closing-warm tender-affectionate, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 675 — kenji + ryosuke (medium)
  {
    id: 'conv_00675',
    context: 'Kenji and Ryosuke have a deeper professional reflection.',
    purpose: 'two-male professional ongoing wisdom-exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['仕事', '感謝', '一緒', '将来', '友達'],
    cast: ['kenji_office', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '亮介さん、最近、後輩、ようけ、増えました。', en: 'Ryosuke-san, lately — juniors growing.', style: 'Salaryman warm formal sincere-warm bright-warm sharing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: 'え、いいね。教える立場、楽しい？', en: 'Eh, nice. Teaching position — fun?', style: 'Father warm gentle sincere-warm engaging-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'はい、本当に。お二人から、教わったこと、生かせて。', en: 'Yes, truly. What you taught — putting to use.', style: 'Salaryman warm soft sincere deep-warm grateful-philosophical, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こうやって、世代を超えて、繋がっていけるって、ありがたい。', en: 'Connecting across generations — grateful.', style: 'Father warm soft sincere deep-warm philosophical-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '皆さんに、本当に、感謝しています。', en: 'Truly grateful to all.', style: 'Salaryman warm soft sincere closing-warm deep-grateful, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'これからも、ずっと、ね。', en: 'From now on too — always.', style: 'Father warm soft sincere closing-brief-warm extending-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 676 — tatsuya + mei (short)
  {
    id: 'conv_00676',
    context: 'Tatsuya visits the city, sees Mei with baby Hikari.',
    purpose: 'small country-uncle visit baby',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '可愛い', '感謝', '元気'],
    cast: ['tatsuya_country', 'mei_romantic'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'メイさん、ひかりちゃん、元気そうで、よかった。', en: 'Mei-san, Hikari-chan looking well — glad.', style: 'Country gruff warm soft sincere bright-warm acknowledging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '達也さん、いつも、ありがとうございます。', en: 'Tatsuya-san, always thank you.', style: 'Romantic warm soft sincere grateful-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'お祖父さん代わり、しっかり、やるで。', en: 'Grandpa-role — will do solidly.', style: 'Country gruff warm bright sincere committed-warm tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: '本当に、ひかりちゃん、皆さんに、囲まれて、幸せ。', en: 'Truly — Hikari surrounded by all — happy.', style: 'Romantic warm soft sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '皆で、ね。', en: 'All together.', style: 'Country gruff warm soft sincere closing-brief-warm extending-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 677 — riku + ren + sakura + sho + hina (5-speaker, long)
  {
    id: 'conv_00677',
    context: 'Five young people gather — all four cousins plus Sho. Big family hangout.',
    purpose: 'five-young-person family gathering',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '楽しい', '感謝', '将来', '友達'],
    cast: ['riku_teen', 'ren_uni', 'sakura_teen', 'hina_child', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: '皆、揃った。本当に、いいね。', en: 'Everyone gathered. Truly nice.', style: 'University student warm bright sincere bright-warm gathering-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: 'こうやって、五人で、揃うの、久しぶり。', en: 'Five of us gathered — long time.', style: 'Teen warm soft sincere reflective-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'ひな、しょう、本当に、大きくなって。', en: 'Hina, Sho — truly grown.', style: 'Teen warm soft sincere tender-warm acknowledging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'お兄ちゃん、お姉ちゃん、ありがとう。', en: 'Brothers, sisters, thank you.', style: 'High child bright sincere enthusiastic-warm grateful-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'ぼくも、嬉しい。', en: 'I\'m happy too.', style: 'Tiny six-year-old soft small sincere bright-warm closing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-bright' },
      { speaker: 'ren_uni', jp: 'ひかりちゃんも、もうすぐ、れんと、あおいの赤ちゃんも、続く。', en: 'Hikari-chan, soon Ren and Aoi\'s baby too.', style: 'University student warm soft sincere bright-warm philosophical-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: '皆、家族、ね、繋がっていって。', en: 'All — family, connecting.', style: 'Teen warm soft sincere philosophical-warm reflecting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: 'こんなに、温かい家族、いて、本当に、運がいい。', en: 'Having such warm family — truly lucky.', style: 'Teen warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hina_child', jp: '家族、いっぱい、大好き！', en: 'Family — lots, love!', style: 'High child bright sincere enthusiastic-warm declaring-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ぼくも、家族、ずっと、大好き。', en: 'I — family, always — love.', style: 'Tiny six-year-old soft small sincere tender-warm matching, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'ren_uni', jp: '将来、皆で、また、こうやって、集まろうな。', en: 'Future — all again — gather like this.', style: 'University student warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'riku_teen', jp: '絶対。皆で。', en: 'Definitely. As all.', style: 'Teen warm soft sincere closing-brief-warm firm-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: 'ずっと、繋がっていきたい。', en: 'Stay connected forever.', style: 'Teen warm soft sincere closing-warm extending-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 678 — asuka + sakura + yumiko (3-speaker, medium)
  {
    id: 'conv_00678',
    context: 'Three women — Asuka, Sakura now also teaching, Yumiko — at lunch.',
    purpose: 'three-female adult-women friendship',
    ambient: 'restaurant_lunch',
    sound_effects: [],
    target_vocab: ['一緒', '友達', '感謝', '幸せ', '楽しい'],
    cast: ['asuka_teacher', 'sakura_teen', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '皆さん、お時間、いただいて、ありがとうございます。', en: 'Everyone, thank you for time.', style: 'Teen warm soft formal sincere-warm gathering-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。さくらさんと、こうやって、また、お話できて。', en: 'Same. Talking with Sakura-san again like this.', style: 'Teacher warm gentle bright sincere-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: '三人で、こうやって、楽しい時間、過ごせて、本当に嬉しい。', en: 'Three of us, fun time — truly happy.', style: 'Maternal warm gentle sincere bright-warm philosophical-warm reflective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: '先生も、ゆみこおばさんも、本当に、皆、私の支え。', en: 'Sensei and Yumiko-obasan — truly my support.', style: 'Teen warm soft sincere deep-warm grateful-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。さくらさんが、立派になって、本当に、嬉しい。', en: 'Same. Sakura-san becoming splendid — truly happy.', style: 'Teacher warm soft sincere deep-warm tender-appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'これからも、ずっと、ご縁、続けていきましょう。', en: 'From now on too — continue connection.', style: 'Maternal warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 679 — saito + takeda + mrs_mori (3-speaker, medium)
  {
    id: 'conv_00679',
    context: 'Three civic figures meet at the community center.',
    purpose: 'three-civic-figure routine',
    ambient: 'community_room',
    sound_effects: [],
    target_vocab: ['近所', '見守る', '感謝', '協力', '一緒'],
    cast: ['saito_doctor', 'takeda_officer', 'mrs_mori_neighbor'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: '皆さん、お忙しい中、ありがとう。', en: 'Everyone, thank you in busyness.', style: 'Neighbor warm gentle sincere-warm civic-opening-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'こちらこそ。地域、安心。', en: 'Same. Community — reassured.', style: 'Doctor warm professional gentle sincere-warm civic-acknowledging, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '皆さんと、こうやって、協力できる関係、本当に、ありがたい。', en: 'Cooperative relationship like this — truly grateful.', style: 'Officer warm professional gentle sincere-warm civic-deep-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mrs_mori_neighbor', jp: 'お年寄りの方々、特に、心配。', en: 'Elderly — especially concerned.', style: 'Neighbor warm gentle sincere-warm careful-warm civic, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: '皆さんで、見守りましょう。お声、かけ合って。', en: 'All — watch. Calling out to each other.', style: 'Doctor warm professional gentle sincere-warm collective-warm closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'takeda_officer', jp: '本当に、感謝してます。これからも、ずっと、ね。', en: 'Truly grateful. From now on, always.', style: 'Officer warm professional gentle sincere closing-warm extending-warm tender, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 680 — daichi + naoko (short)
  {
    id: 'conv_00680',
    context: 'Daichi visits Naoko alone briefly.',
    purpose: 'small in-law-aunt warmth',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '感謝', '一緒', '幸せ', 'ありがとう'],
    cast: ['daichi_kansai', 'naoko_aunt'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'ナオコさん、いつも、ありがとうございます。', en: 'Naoko-san, always thank you.', style: 'Kansai warm formal sincere-warm grateful-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。達也さんと、メイ、本当に、お似合い。', en: 'Same. Tatsuya-san and Mei — truly suit.', style: 'Aunt warm soft sincere bright-warm acknowledging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ナオコさんが、紹介してくれたお陰で、今、ある。', en: 'Thanks to Naoko-san introducing — I have now.', style: 'Kansai warm soft sincere deep-warm grateful-philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。本当に、家族になれて、嬉しい。', en: 'Same. Truly happy to become family.', style: 'Aunt warm soft sincere closing-warm deep-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: 'これからも、ずっと、よろしくお願いします。', en: 'From now on too, please.', style: 'Kansai warm soft sincere closing-warm respectful-warm extending, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 681 — kenji + daichi + ren (3-speaker, short)
  {
    id: 'conv_00681',
    context: 'Three young-to-middle men quick check-in over coffee.',
    purpose: 'small three-male ongoing friendship',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['仕事', '家族', '一緒', '元気', '感謝'],
    cast: ['kenji_office', 'daichi_kansai', 'ren_uni'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '皆さん、お久しぶり。元気？', en: 'Everyone, long time. Well?', style: 'Kansai warm bright sincere casual-warm greeting, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: 'はい、おかげさまで。だいちさん、お父さん業、慣れた？', en: 'Yes, thanks to all. Daichi-san, used to dad-duties?', style: 'Salaryman warm gentle bright sincere-warm engaging-asking, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: '俺も、もうすぐ、お父さんになる。緊張する。', en: 'I — soon, become father. Nervous.', style: 'University student warm soft sincere bright-warm honest-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '皆で、頑張ろな、家族、ね。', en: 'All — work hard, as family.', style: 'Kansai warm soft sincere closing-warm collective-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'こちらこそ。これからも、ずっと、ね。', en: 'Same. From now on too — always.', style: 'Salaryman warm gentle sincere closing-warm extending-warm matching, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 682 — mei + ren + aoi + daichi (4-speaker, medium)
  {
    id: 'conv_00682',
    context: 'Two couples — Daichi+Mei and Ren+Aoi — gather for dinner. Both expecting/with kids.',
    purpose: 'four-young-couple parallel-stage friendship',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '家族', '楽しい', '感謝'],
    cast: ['daichi_kansai', 'mei_romantic', 'ren_uni', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '四人で、こうやって、揃うの、本当に、嬉しいわ。', en: 'Four of us gathered — truly happy.', style: 'Kansai warm bright sincere bright-warm gathering-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'あおいさん、お腹、もうすぐね。', en: 'Aoi-san, belly — soon.', style: 'Romantic warm soft sincere tender-warm engaging-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'aoi_barista', jp: 'はい、来月、予定。緊張する、けど、嬉しい。', en: 'Yes, next month, scheduled. Nervous, but happy.', style: 'Soft dreamy barista warm soft tender sincere-warm balanced-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'ren_uni', jp: 'だいちさんから、ようけ、お父さん業の話、聞いてる。', en: 'From Daichi-san — hearing dad-duties.', style: 'University student warm soft sincere bright-warm acknowledging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: 'お互い、頑張ろな。家族で、これからも、応援し合って。', en: 'Mutually, work hard. As family, keep cheering.', style: 'Kansai warm soft sincere closing-warm collective-warm extending, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'ひかりちゃんと、れんたちの赤ちゃん、一緒に、育っていけるね。', en: 'Hikari and Ren\'s baby — growing together.', style: 'Romantic warm soft tender sincere-warm philosophical-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'aoi_barista', jp: '本当に、ありがたい。皆さんに、見守ってもらえて。', en: 'Truly grateful. Watched by all.', style: 'Soft dreamy barista warm soft sincere closing-warm deep-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 683 — hiroshi_boss + sachiko + naoko + mrs_mori (4-speaker, long)
  {
    id: 'conv_00683',
    context: 'Four older adults gather for a community event. Three widowed women plus retired Hiroshi-boss.',
    purpose: 'four-older-adult community gathering',
    ambient: 'community_room',
    sound_effects: [],
    target_vocab: ['一緒', '家族', '感謝', '友達', '幸せ', '時間'],
    cast: ['hiroshi_boss', 'sachiko_grandma', 'naoko_aunt', 'mrs_mori_neighbor'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '皆さん、お久しぶり。お元気そうで、安心しました。', en: 'Everyone, long time. Looking well — reassured.', style: 'Boss measured warm soft sincere bright-warm welcoming-warm civil, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sachiko_grandma', jp: '田中さん、お元気そうで、何より。', en: 'Tanaka-san, glad you\'re well.', style: 'Soft grandmother warm soft sincere bright-warm reciprocal-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '皆さんで、こうやって、揃えるって、本当に、貴重ですね。', en: 'Gathering all like this — truly precious.', style: 'Neighbor warm gentle sincere-warm philosophical-warm reflective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'お互い、年取って、こうやって、お友達でいられるって、ありがたい。', en: 'Mutually aging — being friends like this — grateful.', style: 'Aunt warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '退職してから、こんな、ご縁、ありがたい。', en: 'After retirement — such connection — grateful.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm acknowledging, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: '主人も、絶対、見てくれてる。', en: 'Husband — surely watching.', style: 'Soft grandmother warm soft tender sincere-warm philosophical-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'うちも、同じ気持ち。本当に。', en: 'Mine — same feeling. Truly.', style: 'Neighbor warm soft tender sincere-warm matching-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'naoko_aunt', jp: '皆で、ね。家族みたいに、ずっと、繋がっていきたい。', en: 'All together. Like family — staying connected.', style: 'Aunt warm soft sincere closing-warm extending-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'こうやって、人生、繋がっていくの、本当に、幸せ。', en: 'Life connecting like this — truly happy.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm closing-deep, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: 'こんな時間、本当に、ありがたい。', en: 'Such time — truly grateful.', style: 'Soft grandmother warm soft sincere closing-warm brief-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mrs_mori_neighbor', jp: 'これからも、ずっと、皆さんで。', en: 'From now on too — all together.', style: 'Neighbor warm soft sincere closing-warm extending-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '感謝してます、本当に。', en: 'Grateful, truly.', style: 'Aunt warm soft sincere closing-brief-warm deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

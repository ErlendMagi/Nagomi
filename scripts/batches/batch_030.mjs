import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_030)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 584 — daichi + mei, hospital labor (long)
  {
    id: 'conv_00584',
    context: 'Mei has gone into labor; Daichi at the hospital with her. Quiet brave moments.',
    purpose: 'major life milestone — birth-day private moment',
    ambient: 'hospital_quiet',
    sound_effects: [],
    target_vocab: ['出産', '病院', '一緒', '頑張る', '幸せ', '感謝'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'メイちゃん、わいがおる。ちゃんと、おる。', en: 'Mei-chan, I\'m here. Properly here.', style: 'Kansai warm soft tender deep-warm hospital-supporting-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: '達也…手、握って。', en: 'Daichi… hold my hand.', style: 'Romantic warm soft tender vulnerable-warm requesting-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-vulnerable' },
      { speaker: 'daichi_kansai', jp: 'うん、ずっと、握ってる。離さん。', en: 'Yes, holding always. Won\'t let go.', style: 'Kansai warm soft tender deep sincere-warm committing-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: '怖い…けど、嬉しい。', en: 'Scared… but happy.', style: 'Romantic warm soft tender deep-warm honest-balanced-warm vulnerable, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-vulnerable' },
      { speaker: 'daichi_kansai', jp: 'わいも。メイちゃんと、赤ちゃん、絶対、大丈夫。', en: 'Me too. Mei-chan and baby — definitely fine.', style: 'Kansai warm soft tender sincere-warm believing-deep-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-believing' },
      { speaker: 'mei_romantic', jp: 'お祖父様、絶対、見てくれてるよね。', en: 'Grandpa surely watching.', style: 'Romantic warm soft tender deep-warm philosophical-warm comforting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-philosophical' },
      { speaker: 'daichi_kansai', jp: '絶対、見てる。指輪も、ずっと、つけてくれてた。', en: 'Definitely watching. Ring — you wore always.', style: 'Kansai warm soft tender sincere-warm deep-comforting-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: 'お祖父様、見守って。お願い。', en: 'Grandpa, watch over. Please.', style: 'Romantic warm soft tender deep-warm prayer-vulnerable-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-prayer' },
      { speaker: 'daichi_kansai', jp: 'もうすぐ、家族、三人になるな。', en: 'Soon — family of three.', style: 'Kansai warm soft tender deep-warm philosophical-warm anticipating-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-philosophical' },
      { speaker: 'mei_romantic', jp: '達也と、ずっと、一緒に。', en: 'With Daichi — forever, together.', style: 'Romantic warm soft tender deep-warm committed-warm eternal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'daichi_kansai', jp: 'メイちゃん、頑張ってな。わいも、ずっと、ここに、おる。', en: 'Mei-chan, work hard. I\'m always here.', style: 'Kansai warm soft tender deep-warm cheering-warm committed, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: '感謝してる。本当に、達也と結婚できて、よかった。', en: 'Grateful. Truly glad married to Daichi.', style: 'Romantic warm soft tender deep-warm closing-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'daichi_kansai', jp: 'わいも、メイちゃんに、出会えて、本当に、幸せ。', en: 'Me too — meeting Mei-chan — truly happy.', style: 'Kansai warm soft tender deep-warm closing-matching-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 585 — sakura + ren (medium)
  {
    id: 'conv_00585',
    context: 'Sakura calls Ren — Mei has just had the baby.',
    purpose: 'small cousin-to-cousin news-sharing of birth',
    ambient: 'phone_call',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '元気', '家族', '感謝', 'お祝い'],
    cast: ['sakura_teen', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'お兄ちゃん、メイちゃんの赤ちゃん、生まれたって！', en: 'Brother, Mei-chan\'s baby was born!', style: 'Teen warm bright sincere overwhelmed-warm news-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'ren_uni', jp: 'え、本当！男の子？女の子？', en: 'Eh, truly! Boy? Girl?', style: 'University student warm bright sincere overwhelmed-warm engaged-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'sakura_teen', jp: '女の子！皆、元気らしい。', en: 'Girl! Everyone — well, seems.', style: 'Teen warm bright sincere reporting-warm celebrating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'マジでよかった！すぐ、あおいと、お祝い、考えるわ。', en: 'Truly glad! With Aoi — will think gift.', style: 'University student warm bright sincere committed-warm planning, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'うん。私も、何か、考える。', en: 'Yes. I\'ll think too.', style: 'Teen warm soft sincere committed-warm matching-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'こうやって、家族、増えるの、本当に、嬉しいな。', en: 'Family growing like this — truly happy.', style: 'University student warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '本当に。皆で、お祝い、しようね。', en: 'Truly. All — celebrate.', style: 'Teen warm soft sincere closing-warm collective-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 586 — kenji + ryosuke (medium)
  {
    id: 'conv_00586',
    context: 'Kenji shares the baby news with Ryosuke. Both deeply touched.',
    purpose: 'two adult men sharing milestone news',
    ambient: 'office_break',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '家族', '一緒', '感謝', '幸せ'],
    cast: ['kenji_office', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '亮介さん、達也さんから、赤ちゃん、生まれたって、連絡、来ました。', en: 'Ryosuke-san, from Tatsuya-san — baby born, contact came.', style: 'Salaryman warm formal sincere bright-warm news-sharing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: 'え、本当！おめでとう！', en: 'Eh, truly! Congrats!', style: 'Father warm bright sincere overwhelmed-warm celebrating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'kenji_office', jp: '本当に。皆さんの家族、また、増えるんですね。', en: 'Truly. All\'s family — growing again.', style: 'Salaryman warm soft sincere deep-warm philosophical-warm acknowledging, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こうやって、家族、繋がっていけるって、本当に、いい時代。', en: 'Family connecting like this — truly good era.', style: 'Father warm soft sincere deep-warm reflective-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '皆で、お祝い、しましょう。', en: 'All — celebrate.', style: 'Salaryman warm formal sincere committed-warm collective-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん。達也さん、メイさんに、よろしく、ね。', en: 'Yes. Regards to Tatsuya, Mei-san.', style: 'Father warm gentle sincere closing-warm extending-warm civic, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 587 — sho + yumiko, morning (short)
  {
    id: 'conv_00587',
    context: 'Snowy winter morning. Sho gets ready for school.',
    purpose: 'small mother-child morning',
    ambient: 'kitchen_morning',
    sound_effects: [],
    target_vocab: ['朝', '寒い', '雪', '学校', '気を付ける'].filter(w => w !== '気を付ける').concat(['注意']),
    cast: ['yumiko_mom', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'しょう、もう、起きる時間。', en: 'Sho, time to wake.', style: 'Maternal warm gentle bright sincere-warm morning-routine, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sho_child', jp: 'お母さん、今日、雪、また降ってる。', en: 'Mom, today — snow again.', style: 'Tiny six-year-old soft small sincere observing-warm gentle-disclosure, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-bright' },
      { speaker: 'yumiko_mom', jp: '寒いね。しっかり、暖かい服、着てね。', en: 'Cold. Wear warm clothes properly.', style: 'Maternal warm gentle sincere-warm caring-warm protective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-caring' },
      { speaker: 'sho_child', jp: 'はい。学校、ちゃんと、行ってきます。', en: 'Yes. Going to school properly.', style: 'Tiny six-year-old soft small sincere committed-warm departing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '転ばないように、ね。気を付けて。', en: 'Don\'t slip. Be careful.', style: 'Maternal warm gentle sincere closing-warm protective-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-careful' }
    ]
  },
  // 588 — naoko + hiroshi_boss, gallery deep (medium)
  {
    id: 'conv_00588',
    context: 'Naoko and retired Hiroshi-boss have a deeper personal museum conversation.',
    purpose: 'ongoing civilized friendship deepening',
    ambient: 'gallery_afternoon',
    sound_effects: [],
    target_vocab: ['芸術', '感動', '一緒', '人生', '感謝'],
    cast: ['hiroshi_boss', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'ナオコさん、芸術を通して、人生、本当に、豊かになりました。', en: 'Naoko-san, through art — life truly enriched.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm reflecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。田中さんと、こうやって、お話できるの、本当に、感謝してます。', en: 'Same. Talking with Tanaka-san — truly grateful.', style: 'Aunt warm soft sincere deep-warm reciprocal-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '退職して、こうやって、新しいご縁、いただけるって、人生って、不思議。', en: 'Retired — new connections come — life mysterious.', style: 'Boss measured warm soft sincere philosophical-warm wondering-warm reflecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-philosophical' },
      { speaker: 'naoko_aunt', jp: '本当に。年を重ねるほど、感じる気がします。', en: 'Truly. The more I age — feel.', style: 'Aunt warm gentle sincere deep-warm philosophical-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-philosophical' },
      { speaker: 'hiroshi_boss', jp: '今度の展覧会、また、ご一緒できれば、嬉しい。', en: 'Next exhibit — if together, would be happy.', style: 'Boss measured warm soft sincere bright-warm extending-warm closing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: 'ぜひ。これからも、ずっと、ね。', en: 'Please. From now on too, always.', style: 'Aunt warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'こうやって、年齢を超えた、友達がいるって、本当に、贅沢。', en: 'Friends across ages — truly luxury.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm closing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 589 — riku + ren (short)
  {
    id: 'conv_00589',
    context: 'Two young men, both married, share a brief check-in.',
    purpose: 'small ongoing cousin friendship',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['元気', '仕事', '家族', '感謝', '一緒'],
    cast: ['riku_teen', 'ren_uni'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'リク、元気？最近、忙しい？', en: 'Riku, well? Busy lately?', style: 'University student warm bright sincere-warm cousin-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: 'うん、相変わらず。仕事、家族、両方で。', en: 'Yes, as ever. Work and family — both.', style: 'Teen warm soft sincere honest-warm reporting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'ren_uni', jp: '俺も。家族って、ね、本当に、毎日、新鮮。', en: 'Me too. Family — daily fresh.', style: 'University student warm soft sincere bright-warm philosophical-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'お互い、頑張ろう。家族、大事にして。', en: 'Mutually, work hard. Cherish family.', style: 'Teen warm soft sincere closing-warm extending-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、絶対。', en: 'Yes, definitely.', style: 'University student warm soft sincere closing-brief-warm committing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 590 — yumiko + hina + sho (3-speaker, medium)
  {
    id: 'conv_00590',
    context: 'Yumiko, Hina, and Sho prepare a gift for Mei\'s new baby.',
    purpose: 'three-family preparing baby gift',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', 'プレゼント', '楽しい', '家族'],
    cast: ['yumiko_mom', 'hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: '皆で、メイさんの赤ちゃんに、プレゼント、用意しようね。', en: 'All — let\'s prepare gift for Mei-san\'s baby.', style: 'Maternal warm gentle bright sincere-warm collective-warm leading, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hina_child', jp: 'やった！赤ちゃんに、何、あげる？', en: 'Yay! What to give baby?', style: 'High child bright sincere enthusiastic-warm engaging-asking, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ぼく、絵、描いてあげたい。', en: 'I want to draw picture.', style: 'Tiny six-year-old soft small sincere bright-warm offering-tender, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-tender' },
      { speaker: 'yumiko_mom', jp: '優しい考え、しょうくん。', en: 'Kind thought, Sho-kun.', style: 'Maternal warm gentle bright sincere-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'ひな、赤ちゃん用の、靴下、編む！', en: 'Hina — knits baby socks!', style: 'High child bright sincere enthusiastic-warm declaring-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'yumiko_mom', jp: '皆で、心を込めて、作ろうね。家族、増えるって、嬉しい。', en: 'All — make with heart. Family growing — happy.', style: 'Maternal warm soft sincere bright-warm philosophical-warm closing-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '家族、いっぱい、楽しい。', en: 'Family lots — fun.', style: 'Tiny six-year-old soft small sincere bright-warm tender-disclosure, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 591 — saito + sachiko (short)
  {
    id: 'conv_00591',
    context: 'Sachiko\'s regular checkup. Saito notes her overall improvement since the baby news.',
    purpose: 'small ongoing doctor-elder relationship',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['元気', '健康', '感謝', '安心', 'ありがとう'],
    cast: ['saito_doctor', 'sachiko_grandma'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'お祖母様、本当に、お元気そうで、安心しました。', en: 'Grandmother — truly well, relieved.', style: 'Doctor warm professional gentle bright sincere-warm reporting-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'sachiko_grandma', jp: 'お陰様で。曾孫の話、聞いてから、もっと、元気になった気がして。', en: 'Thanks to all. Since hearing great-grandchild news — even more energetic.', style: 'Soft grandmother warm soft sincere bright-warm philosophical-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'saito_doctor', jp: '嬉しいことが、本当に、いい薬。', en: 'Happy things — truly good medicine.', style: 'Doctor warm gentle wise sincere-warm philosophical-warm closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'sachiko_grandma', jp: '本当に。先生にも、いつも、感謝してます。', en: 'Truly. Always grateful to doctor too.', style: 'Soft grandmother warm soft sincere closing-warm grateful-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'こちらこそ。お大事にね。', en: 'Same. Take care.', style: 'Doctor warm professional gentle sincere closing-warm extending-care, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 592 — daichi + mei + sachiko + yumiko + naoko (5-speaker, long) — baby arrival visit
  {
    id: 'conv_00592',
    context: 'Three days after birth. Family gathers at the hospital to meet the baby.',
    purpose: 'major family milestone — meeting the new baby together',
    ambient: 'hospital_quiet',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '家族', '一緒', '幸せ', '感謝', '名前'],
    cast: ['daichi_kansai', 'mei_romantic', 'sachiko_grandma', 'yumiko_mom', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: '皆さん、来てくれて、ありがとうございます。', en: 'Everyone, thank you for coming.', style: 'Romantic warm soft tender deep-warm grateful-welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: 'メイさん、よく、頑張った。本当に、おめでとう。', en: 'Mei-san, worked hard. Truly congrats.', style: 'Soft grandmother warm soft tender deep-warm celebrating-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'daichi_kansai', jp: '皆さん、ありがとうございます。来てくれて、本当に、嬉しい。', en: 'Everyone, thank you. Truly happy you came.', style: 'Kansai warm soft tender deep-warm grateful-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: 'こんなに、可愛い赤ちゃん。皆で、お祝い、本当にしたい。', en: 'Such cute baby. Want to truly celebrate.', style: 'Maternal warm soft tender deep-warm celebrating-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'naoko_aunt', jp: '名前、もう、決めたの？', en: 'Name — already decided?', style: 'Aunt warm gentle bright sincere-warm engaging-curious-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'はい、達也と相談して、「ひかり」って、名付けました。', en: 'Yes, with Daichi — "Hikari" named.', style: 'Romantic warm soft tender sincere-warm sharing-warm proud, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sachiko_grandma', jp: 'ひかり…素敵な名前。', en: 'Hikari… lovely name.', style: 'Soft grandmother warm soft tender sincere-warm appreciating-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'daichi_kansai', jp: 'お祖父様の、ひかりみたいに、家族を、照らしてほしいって。', en: 'Like grandpa\'s light — wish to illuminate family.', style: 'Kansai warm soft tender deep-warm philosophical-warm meaning-disclosure, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: 'お父さん、絶対、見てる。本当に、絶対に。', en: 'Father — definitely watching. Truly.', style: 'Maternal warm soft tender deep-warm philosophical-warm comforting-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'naoko_aunt', jp: 'こうやって、家族、新しく増えるの、本当に、奇跡みたい。', en: 'Family growing like this — truly like miracle.', style: 'Aunt warm soft tender deep-warm philosophical-warm reflecting-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: '皆さんがいてくれて、本当に、家族で、迎えてもらえて、嬉しい。', en: 'Everyone here — welcomed as family — happy.', style: 'Romantic warm soft tender deep-warm grateful-closing-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: 'ひかりちゃん、お祖母ちゃん、ずっと、見守ってるよ。', en: 'Hikari-chan — grandma always watching.', style: 'Soft grandmother warm soft tender deep-warm closing-promising-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'daichi_kansai', jp: '本当に、家族、皆に、感謝してます。', en: 'Truly, to all family — grateful.', style: 'Kansai warm soft tender deep-warm closing-grateful-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: 'これからも、皆で、ひかりちゃん、育てていきましょう。', en: 'From now on too, all — raise Hikari together.', style: 'Maternal warm soft tender deep-warm closing-collective-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 593 — aoi + ren (short)
  {
    id: 'conv_00593',
    context: 'Aoi and Ren prepare a small gift for the baby.',
    purpose: 'small newlywed-newer-parent preparing for friends\' baby',
    ambient: 'apartment_evening',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', 'プレゼント', '楽しい', '感謝'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'れん、ひかりちゃんに、何、用意しよう。', en: 'Ren, what to prepare for Hikari-chan?', style: 'Soft dreamy barista warm soft sincere-warm thoughtful-engaging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うーん、可愛い、お洋服、どう？', en: 'Mm, cute clothes — how?', style: 'University student warm soft sincere thoughtful-warm proposing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'aoi_barista', jp: 'いいね。皆で、ちゃんと、お祝いしたい。', en: 'Nice. All — properly celebrate.', style: 'Soft dreamy barista warm soft sincere bright-warm committing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: '俺たちも、いつか、ね。', en: 'We too, someday.', style: 'University student warm soft tender sincere-warm future-warm wondering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'aoi_barista', jp: '一緒に、考えていこうね。', en: 'Together, let\'s think.', style: 'Soft dreamy barista warm soft tender sincere closing-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 594 — tatsuya + ryosuke (medium)
  {
    id: 'conv_00594',
    context: 'Tatsuya visits Ryosuke. Both reflect on extended family expanding.',
    purpose: 'two adult men reflecting on family generations',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '感謝', '将来', '幸せ'],
    cast: ['tatsuya_country', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: '亮介さん、達也とメイの赤ちゃん、生まれたって、聞いた。', en: 'Ryosuke-san, heard Daichi and Mei\'s baby was born.', style: 'Country gruff warm bright sincere-warm news-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: '本当に、嬉しいニュース。家族、また、広がりますね。', en: 'Truly happy news. Family — grows.', style: 'Father warm soft sincere bright-warm philosophical-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'わいも、ようやく、お祖父さん代わり、果たせる。', en: 'I — finally, fulfilling grandpa-role.', style: 'Country gruff warm soft sincere bright-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: '達也さん、お父さんになって、本当に、立派。', en: 'Daichi-san — becoming father — truly splendid.', style: 'Father warm soft sincere deep-warm appreciating-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '皆で、ちゃんと、見守って、応援しような。', en: 'All — watching properly, cheering.', style: 'Country gruff warm soft sincere closing-warm collective-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'もちろん。家族って、いいですね。', en: 'Of course. Family — good.', style: 'Father warm soft sincere closing-warm philosophical-warm brief-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 595 — asuka + sakura (medium)
  {
    id: 'conv_00595',
    context: 'Sakura visits Asuka — Sakura recently engaged. Mentor sharing the joy.',
    purpose: 'former student tells mentor of own engagement',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['結婚', '幸せ', '感謝', '将来', '一緒'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'あすか先生、ちょっと、ご報告したくて。', en: 'Asuka-sensei, want to report something.', style: 'Teen warm soft sincere brave-warm careful-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'asuka_teacher', jp: 'もちろん、聞かせて。', en: 'Of course, tell me.', style: 'Teacher warm gentle bright sincere-warm welcoming-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sakura_teen', jp: '私、結婚することに、なりました。', en: 'I — became to marry.', style: 'Teen warm soft tender sincere-warm milestone-disclosing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'asuka_teacher', jp: 'え、本当！おめでとう！素敵な、お相手？', en: 'Eh, truly! Congrats! Lovely partner?', style: 'Teacher warm bright sincere overwhelmed-warm celebrating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'sakura_teen', jp: '同じ学校の先生で。優しい、人。', en: 'Same school teacher. Kind person.', style: 'Teen warm soft sincere proud-warm tender-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'asuka_teacher', jp: '本当に、嬉しい。さくらさんの、幸せ、ずっと、願ってた。', en: 'Truly happy. Sakura\'s happiness — always wished.', style: 'Teacher warm soft sincere deep-warm tender-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '先生のお陰でもあります。本当に、感謝してます。', en: 'Thanks to sensei too. Truly grateful.', style: 'Teen warm soft sincere closing-warm deep-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 596 — sho + ren + sakura (3-speaker, medium)
  {
    id: 'conv_00596',
    context: 'Sho, Ren, and Sakura discuss preparing a baby visit together.',
    purpose: 'three young-ish people planning visit',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '行く', '楽しい', '家族'],
    cast: ['ren_uni', 'sakura_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: '皆で、ひかりちゃんに、会いに行こうか。', en: 'All — let\'s go meet Hikari-chan?', style: 'University student warm bright sincere-warm proposing-warm leading, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'うん、行こう。何持ってく？', en: 'Yes, let\'s go. What to bring?', style: 'Teen warm soft sincere bright-warm engaging-planning, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'ぼく、絵、描いた。プレゼント。', en: 'I drew picture. Present.', style: 'Tiny six-year-old soft small sincere proud-warm offering-tender, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'ren_uni', jp: 'えらい、しょう。ひかりちゃん、絶対、喜ぶ。', en: 'Good, Sho. Hikari-chan — surely happy.', style: 'University student warm soft sincere bright-warm appreciating-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '家族で、皆で、赤ちゃん、迎えてあげようね。', en: 'As family — all — welcome baby.', style: 'Teen warm soft sincere closing-warm collective-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: '家族、いっぱい、嬉しい。', en: 'Family lots — happy.', style: 'Tiny six-year-old soft small sincere bright-warm tender-disclosure, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'ren_uni', jp: '本当に、ね。皆で、ずっと、一緒に。', en: 'Truly. All, forever, together.', style: 'University student warm soft sincere closing-warm extending-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 597 — kenji + daichi + tatsuya + hiroshi_boss + ryosuke (5-speaker, long)
  {
    id: 'conv_00597',
    context: 'Five men gather to celebrate Daichi becoming father. Big family-friends dinner.',
    purpose: 'five-male milestone celebration',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '家族', '一緒', '感謝', '幸せ', '将来'],
    cast: ['daichi_kansai', 'kenji_office', 'tatsuya_country', 'hiroshi_boss', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'だいちさん、本当に、おめでとう。', en: 'Daichi-san, truly congrats.', style: 'Salaryman warm formal sincere overwhelmed-warm celebrating-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'daichi_kansai', jp: '皆さん、わざわざ、集まってくれて、本当に、感謝してます。', en: 'Everyone — gathering — truly grateful.', style: 'Kansai warm soft tender sincere deep-warm grateful-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'わい、お祖父さん代わり、引き受けたで。可愛がるで。', en: 'I — accepted grandpa-role. Will love.', style: 'Country gruff warm bright sincere-warm committed-warm celebrating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: '達也さんが、お父さんになる日が来るって、本当に、感慨深い。', en: 'Daichi becoming father — truly deeply moving.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm reflecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こうやって、皆で、お祝いできるの、家族、みたいですね。', en: 'Celebrating together like this — like family.', style: 'Father warm soft sincere deep-warm philosophical-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '皆さんは、もう、家族みたいな存在ですわ。', en: 'Everyone — already like family.', style: 'Kansai warm soft tender sincere deep-warm philosophical-warm closing-disclosure, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'ひかりちゃんに、皆で、ちゃんと、いろいろ、教えてあげましょう。', en: 'To Hikari-chan — all — teach properly.', style: 'Salaryman warm formal sincere committed-warm collective-warm extending, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'tatsuya_country', jp: '田舎にも、絶対、連れてきてな。', en: 'To country — definitely bring.', style: 'Country gruff warm bright sincere-warm extending-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: '退職してから、こんな幸せな瞬間、迎えられて、本当に、嬉しい。', en: 'After retirement — facing such happy moments — truly happy.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm reflecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '乾杯しましょう。新しい家族の一員、ひかりちゃんに。', en: 'Let\'s cheers. To new family member, Hikari-chan.', style: 'Father warm soft sincere closing-warm rallying-tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'daichi_kansai', jp: '乾杯！皆さんへの、感謝に。', en: 'Cheers! With gratitude to all.', style: 'Kansai warm bright sincere closing-warm celebrating-deep, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '乾杯。皆さん、本当に、感謝しています。', en: 'Cheers. To all, truly grateful.', style: 'Salaryman warm formal sincere closing-warm deep-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'これからも、ずっと、皆で、ね。', en: 'From now on, always, all together.', style: 'Country gruff warm soft sincere closing-warm extending-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'ひかりちゃんと、皆さんの、将来に。', en: 'To Hikari-chan and everyone\'s future.', style: 'Boss measured warm soft sincere closing-warm tender-blessing-deep, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 598 — hina + asuka (short)
  {
    id: 'conv_00598',
    context: 'Hina excitedly tells Asuka about her new role as big sister.',
    purpose: 'small child-teacher milestone-sharing',
    ambient: 'classroom_after',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '姉', '一緒', '嬉しい', '頑張る'],
    cast: ['asuka_teacher', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: '先生！ひな、お姉さんに、なりました！', en: 'Sensei! Hina became big sister!', style: 'High child bright sincere enthusiastic-warm proud-declaring, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-proud' },
      { speaker: 'asuka_teacher', jp: 'え、ひなちゃん、おめでとう！', en: 'Eh, Hina-chan, congrats!', style: 'Teacher warm bright sincere overwhelmed-warm celebrating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'hina_child', jp: 'メイちゃんの赤ちゃん、ひかりちゃん。', en: 'Mei-chan\'s baby, Hikari-chan.', style: 'High child bright sincere proud-warm sharing-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'asuka_teacher', jp: '可愛い名前。ひなちゃん、ちゃんと、お姉さん、するね。', en: 'Cute name. Hina — be proper big sister.', style: 'Teacher warm gentle sincere bright-warm encouraging-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'うん、頑張る！', en: 'Yes, working hard!', style: 'High child bright sincere committed-warm closing-energetic, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 599 — riku + yumiko (medium)
  {
    id: 'conv_00599',
    context: 'Riku visits Yumiko alone for a small adult chat.',
    purpose: 'nephew aunt ongoing relationship',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['家族', '仕事', '一緒', '感謝', '元気'],
    cast: ['riku_teen', 'yumiko_mom'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'ゆみこおばさん、お久しぶり。', en: 'Yumiko-obasan, long time.', style: 'Teen warm soft sincere bright-warm family-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: 'リクくん、お元気そうで嬉しい。仕事、忙しい？', en: 'Riku-kun, glad you look well. Work busy?', style: 'Maternal warm gentle bright sincere-warm welcoming-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: 'はい、まあ。家族、増やしたいって、考え始めてて。', en: 'Yes, somewhat. Thinking of growing family.', style: 'Teen warm soft sincere bright-warm thoughtful-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'え、本当！素敵ね。', en: 'Eh, truly! Lovely.', style: 'Maternal warm bright sincere touched-warm celebrating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: '達也さんとメイさんの、ひかりちゃん、見たら、本当に、家族って、いいなって、思って。', en: 'Seeing Tatsuya and Mei\'s Hikari-chan — thought family is truly good.', style: 'Teen warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'うん、わかる。家族、本当に、宝物。', en: 'Yes, I get. Family — truly treasure.', style: 'Maternal warm soft sincere deep-warm philosophical-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'riku_teen', jp: '皆さんに、いつも、ちゃんと、感謝してます。', en: 'Always grateful to all.', style: 'Teen warm soft sincere closing-warm deep-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'こちらこそ。これからも、ね。', en: 'Same. From now on too.', style: 'Maternal warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 600 — mei + sachiko + hina (3-speaker, long) — milestone 600
  {
    id: 'conv_00600',
    context: 'Mei brings baby Hikari to visit great-grandmother Sachiko. Hina meets her young aunt-figure-baby.',
    purpose: 'four-generation moment — milestone 600',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '家族', '一緒', '優しい', '幸せ', '感謝'],
    cast: ['mei_romantic', 'sachiko_grandma', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'お祖母様、ひかりちゃん、連れてきました。', en: 'Grandmother, brought Hikari-chan.', style: 'Romantic warm soft tender sincere-warm proud-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: 'ひかりちゃん…会いたかった。お祖母ちゃんも、本当に、嬉しい。', en: 'Hikari-chan… wanted to meet. Grandma — truly happy.', style: 'Soft grandmother warm soft tender deep-warm overwhelmed-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-overwhelmed' },
      { speaker: 'hina_child', jp: 'お祖母様、ひかりちゃん、可愛い！', en: 'Grandmother, Hikari-chan — cute!', style: 'High child bright sincere enthusiastic-warm celebrating-tender, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'mei_romantic', jp: 'ひな、お姉さんに、なってくれて、ありがとう。', en: 'Hina — thank you for being big sister.', style: 'Romantic warm soft tender sincere-warm grateful-acknowledging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'ひなが、ちゃんと、お姉さんに、なる！', en: 'Hina — becoming proper big sister!', style: 'High child bright sincere proud-warm committed-declaring, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-proud' },
      { speaker: 'sachiko_grandma', jp: 'こんな小さい手…。お祖父ちゃんも、絶対、見てる。', en: 'Such small hands… Grandpa surely watching.', style: 'Soft grandmother warm soft tender deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: 'お祖父様の指輪、ちゃんと、ひかりちゃん、見せました。', en: 'Grandpa\'s ring — showed Hikari-chan.', style: 'Romantic warm soft tender sincere-warm gentle-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sachiko_grandma', jp: 'ありがとう、メイさん。本当に、ありがとう。', en: 'Thank you, Mei-san. Truly, thank you.', style: 'Soft grandmother warm soft tender deep-warm closing-grateful-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'hina_child', jp: 'ひかりちゃん、ひな、優しく、お世話、するね。', en: 'Hikari-chan, Hina — gently care.', style: 'High child bright sincere tender-warm promising-tender, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'mei_romantic', jp: '皆で、ひかりちゃん、見守って、育てていきましょう。', en: 'All — let\'s watch and raise Hikari-chan together.', style: 'Romantic warm soft tender sincere closing-warm collective-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: 'こうやって、家族、繋がっていくの、本当に、生きてて、よかった。', en: 'Family connecting like this — truly glad to be alive.', style: 'Soft grandmother warm soft tender deep-warm philosophical-warm closing-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'hina_child', jp: 'お祖母様、これからも、いっぱい、お話、しようね。', en: 'Grandmother, from now on — let\'s talk lots.', style: 'High child bright sincere tender-warm closing-extending, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'sachiko_grandma', jp: 'うん、ずっと、ずっと、ね。皆で。', en: 'Yes, always, always. With all.', style: 'Soft grandmother warm soft tender deep closing-warm extending-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 601 — hiroshi_boss + ryosuke + kenji (3-speaker, medium)
  {
    id: 'conv_00601',
    context: 'Three men — retired, working, and middle-rank — share wisdom together.',
    purpose: 'three-male wisdom exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['人生', '仕事', '感謝', '将来', '友達'],
    cast: ['hiroshi_boss', 'ryosuke_dad', 'kenji_office'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '亮介さん、けんじさん、こうやって、皆で、お話できるの、貴重ですね。', en: 'Ryosuke-san, Kenji-san — talking like this — precious.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm opening, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '本当に。三人で、お話、続けていきたい。', en: 'Truly. Three of us — keep talking.', style: 'Father warm gentle sincere-warm matching-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'お二人から、いつも、たくさん、学ばせてもらってます。', en: 'From both — always learning lots.', style: 'Salaryman warm formal sincere humble-warm grateful-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-humble' },
      { speaker: 'hiroshi_boss', jp: 'こちらも、けんじさんから、学んでます。', en: 'I too — learning from Kenji-san.', style: 'Boss measured warm soft sincere humble-warm reciprocal-warm acknowledging, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-humble' },
      { speaker: 'ryosuke_dad', jp: '世代を超えて、こんな関係って、本当に、ありがたい。', en: 'Across generations — such relationship — truly grateful.', style: 'Father warm soft sincere deep-warm philosophical-warm reflective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'これからも、ずっと、お時間、いただきたい。', en: 'From now on too — want time.', style: 'Salaryman warm formal sincere closing-warm extending-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'もちろん。人生、こうやって、繋がっていくのが、最高。', en: 'Of course. Life connecting like this — best.', style: 'Boss measured warm soft sincere closing-warm philosophical-warm deep, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 602 — yuki + aoi (short)
  {
    id: 'conv_00602',
    context: 'Yuki and Aoi briefly catch up at the cafe.',
    purpose: 'small adult-women ongoing café friendship',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['元気', '一緒', '楽しい', '友達', 'ありがとう'],
    cast: ['yuki_office', 'aoi_barista'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あおいさん、お元気そうで。', en: 'Aoi-san, looking well.', style: 'Office woman warm gentle bright sincere-warm civil-greeting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'aoi_barista', jp: 'ゆきさん、こんにちは。コーヒー、いつもの？', en: 'Yuki-san, hello. Usual coffee?', style: 'Soft dreamy barista warm gentle sincere-warm welcoming-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'はい、お願いします。ひかりちゃん、可愛いですよね。', en: 'Yes, please. Hikari-chan — cute, right.', style: 'Office woman warm bright sincere bright-warm engaging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '本当に。皆で、お祝い、楽しかったですね。', en: 'Truly. Celebrating with all — fun.', style: 'Soft dreamy barista warm soft sincere bright-warm reflecting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'これからも、皆で、ずっと、繋がっていきたい。', en: 'From now on — all, stay connected.', style: 'Office woman warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 603 — mei + asuka + yumiko (3-speaker, medium)
  {
    id: 'conv_00603',
    context: 'Three women — Asuka and Yumiko (friends) and Mei (now young mother) — share a quiet afternoon together.',
    purpose: 'three-female adult ongoing friendship across motherhood',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '幸せ', '感謝', '家族'],
    cast: ['mei_romantic', 'asuka_teacher', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'メイちゃん、お元気そうで、嬉しい。', en: 'Mei-chan, glad you look well.', style: 'Teacher warm gentle bright sincere-warm welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'ありがとうございます。ひかりちゃんがいて、毎日、忙しい。', en: 'Thank you. With Hikari-chan — daily busy.', style: 'Romantic warm soft sincere bright-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: 'でも、毎日、新しい発見でしょ？', en: 'But, daily new discoveries?', style: 'Maternal warm gentle bright sincere-warm experienced-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '本当に。ひかりちゃんの、小さな成長、本当に、嬉しい。', en: 'Truly. Hikari\'s small growth — truly happy.', style: 'Romantic warm soft tender sincere-warm celebrating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'asuka_teacher', jp: '私も、子供たちの成長、見ると、毎日、感謝する。', en: 'Me too — seeing children grow — daily grateful.', style: 'Teacher warm gentle sincere deep-warm philosophical-warm matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'こうやって、皆で、子育て、お話できる関係、本当に、ありがたい。', en: 'Such relationship — talking parenting together — truly grateful.', style: 'Maternal warm soft sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: 'これからも、皆さんに、頼らせてください。', en: 'From now on — please let me rely.', style: 'Romantic warm soft sincere closing-warm respectful-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_023)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 444 — daichi + ren, business talk (medium)
  {
    id: 'conv_00444',
    context: 'At a family event. Daichi (Kansai) catches up with Ren about Ren\'s new startup work.',
    purpose: 'small in-law adult talk about new careers',
    ambient: 'family_event',
    sound_effects: [],
    target_vocab: ['仕事', '挑戦', '頑張る', '応援', '将来'],
    cast: ['daichi_kansai', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'れんくん、新しい仕事、どんな感じ？', en: 'Ren-kun, the new work — how is it?', style: 'Kansai warm bright casual sincere-warm in-law-asking, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'casually-bright' },
      { speaker: 'ren_uni', jp: '正直、めっちゃ大変。けど、面白くて。', en: 'Honestly, super tough. But interesting.', style: 'University student warm soft sincere honest-balanced-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-balanced' },
      { speaker: 'daichi_kansai', jp: 'スタートアップって、挑戦ばっかりやろな。', en: 'Startups — must be challenge after challenge.', style: 'Kansai warm gentle sincere reflective-warm observation, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'gently-reflective' },
      { speaker: 'ren_uni', jp: '毎日、何か新しい問題、出てくる。', en: 'Every day, new problem comes up.', style: 'University student warm soft sincere honest-warm sharing-challenge, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'daichi_kansai', jp: 'けど、れんくんなら、絶対大丈夫やで。', en: 'But — for Ren-kun, definitely fine.', style: 'Kansai warm bright sincere-warm believing-encouraging, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-believing' },
      { speaker: 'ren_uni', jp: 'ありがとう。だいちさんに応援してもらえると、ほんま心強い。', en: 'Thanks. Encouragement from you — truly reassuring.', style: 'University student warm soft sincere deep-warm grateful-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '将来、一緒に何か、コラボもできるかもね。', en: 'In the future — maybe we can collaborate.', style: 'Kansai warm bright sincere reflective-warm extending-future, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'マジで？それ、めっちゃ嬉しい。', en: 'For real? Super happy.', style: 'University student warm soft sincere bright-warm touched-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 445 — kenji + hiroshi_boss + tatsuya (3-speaker, long)
  {
    id: 'conv_00445',
    context: 'Quarterly business review. Hiroshi-boss, Kenji, and Tatsuya going over numbers and future direction.',
    purpose: 'three-business-leader careful review — strategy and trust',
    ambient: 'office_meeting',
    sound_effects: [],
    target_vocab: ['経営', '取引', '評価', '改善', '将来', '感謝'],
    cast: ['hiroshi_boss', 'kenji_office', 'tatsuya_country'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '今期の取引、無事完了しまして、ありがとうございます。', en: 'This quarter\'s deal — completed safely, thank you.', style: 'Boss measured warm formal sincere-professional-warm opening, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'professionally-formal' },
      { speaker: 'kenji_office', jp: 'こちらこそ。達也さんとのお取引、いつも勉強になります。', en: 'Same. Doing business with Tatsuya-san — always educational.', style: 'Salaryman warm formal sincere-warm professional-respectful, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'tatsuya_country', jp: 'いやいや、わいも、ようけ学ばせてもろてます。', en: 'No, no, I too learn a lot.', style: 'Country gruff warm formal-rural humble-warm reciprocal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-formal' },
      { speaker: 'hiroshi_boss', jp: '次期に向けて、ご相談したい点がいくつかありまして。', en: 'For next quarter, points to consult several.', style: 'Boss measured warm formal sincere-professional-warm pivoting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'kenji_office', jp: '達也さん、価格の改善案、共有してもよろしいでしょうか。', en: 'Tatsuya-san, may I share price improvement plans?', style: 'Salaryman warm formal sincere-warm professional-asking, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'professionally-sincere' },
      { speaker: 'tatsuya_country', jp: 'もちろん。聞かせてください。', en: 'Of course. Please tell me.', style: 'Country gruff warm formal sincere-warm open-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'kenji_office', jp: '長期契約のおかげで、コスト構造、見直せました。両者にメリットがある形で。', en: 'Thanks to long-term contract, cost structure reviewed. Form with merit for both.', style: 'Salaryman warm formal sincere-warm professional-detailed-presenting, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'professionally-detailed' },
      { speaker: 'tatsuya_country', jp: 'ふむ…悪うない話やな。考えさせてもらいます。', en: 'Hmm… not a bad offer. Let me think.', style: 'Country gruff warm formal thoughtful-warm careful-considering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'thoughtfully-formal' },
      { speaker: 'hiroshi_boss', jp: 'お急ぎなく。ご家族のことも、お考えに入れて。', en: 'No rush. Include family considerations too.', style: 'Boss measured warm formal sincere-warm patient-respecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-respectful' },
      { speaker: 'tatsuya_country', jp: 'ありがとうございます。一週間以内に、お返事しますわ。', en: 'Thank you. I\'ll respond within a week.', style: 'Country gruff warm formal sincere-warm committed-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'kenji_office', jp: '我々も、達也さんのご都合に合わせます。', en: 'We\'ll match your schedule, Tatsuya-san.', style: 'Salaryman warm formal sincere-warm accommodating-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-accommodating' },
      { speaker: 'hiroshi_boss', jp: '今期も、本当に感謝しています。これからも、よろしくお願いします。', en: 'This quarter too, truly grateful. From now on, please.', style: 'Boss measured warm formal sincere-deep-warm closing-grateful, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ。仲良く、ええ仕事しましょ。', en: 'Same. Let\'s do good work, close together.', style: 'Country gruff warm soft sincere-warm closing-warm friendship, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '今夜は、皆さんで、お疲れ様の食事、行きましょう。', en: 'Tonight, all together — let\'s go for a meal.', style: 'Salaryman warm formal sincere-warm bright-extending-warm closing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-extending' }
    ]
  },
  // 446 — sho + asuka (short)
  {
    id: 'conv_00446',
    context: 'Sho is now in third grade. Asuka sees how much he\'s grown.',
    purpose: 'small teacher-child gentle recognition of growth',
    ambient: 'classroom_quiet',
    sound_effects: [],
    target_vocab: ['成長', '元気', '大きい', '頑張る', '友達'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'しょうくん、三年生になって、本当に成長したね。', en: 'Sho-kun, in third grade — truly grown.', style: 'Teacher warm gentle bright sincere-warm observation-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '…はい、おかげさまで。', en: '…Yes, thanks to you.', style: 'Tiny six-year-old soft small sincere humble-warm respectful-grown, the small real warmth audible, soft small warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'asuka_teacher', jp: '友達も、いっぱい増えて、よかった。', en: 'Friends increased too — glad.', style: 'Teacher warm gentle sincere bright-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sho_child', jp: '頑張ったから、できた。', en: 'Because I tried hard, did it.', style: 'Tiny six-year-old soft small sincere proud-warm growth-disclosure, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-proud' },
      { speaker: 'asuka_teacher', jp: 'すごい。これからも、応援してるよ。', en: 'Wonderful. Cheering for you.', style: 'Teacher warm gentle sincere closing-warm extending-care, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 447 — mei + aoi (medium)
  {
    id: 'conv_00447',
    context: 'Two newlywed women catching up. Mei a few months ahead, Aoi just settling in.',
    purpose: 'small parallel-newlywed friendship — sharing married-life adjustment',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['結婚', '生活', '楽しい', '相談', '幸せ'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あおいちゃん、新しい生活、どう？', en: 'Aoi-chan, new life — how?', style: 'Romantic warm soft sincere bright-warm friend-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'まだ慣れないけど、毎日、新しい発見がある。', en: 'Not used to it, but daily, new discoveries.', style: 'Soft dreamy barista warm soft sincere-warm reflective-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'うん、わかる。私も、最初、毎日、緊張してた。', en: 'Yes, I get it. At first, I was nervous daily too.', style: 'Romantic warm soft sincere identifying-warm reminiscing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '何が、一番、変化だった？', en: 'What was the biggest change?', style: 'Soft dreamy barista warm soft sincere genuine-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'mei_romantic', jp: '一人じゃなくて、二人で物事を考える、ってこと。', en: 'Not alone — thinking of things as two.', style: 'Romantic warm soft sincere reflective-warm philosophical-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'aoi_barista', jp: '本当に、それ。れんと話すこと、増えた。', en: 'Truly, that. Talking with Ren — increased.', style: 'Soft dreamy barista warm soft sincere bright-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: '何かあったら、いつでも、相談してね。', en: 'If anything happens, consult me anytime.', style: 'Romantic warm soft sincere generous-warm extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'aoi_barista', jp: 'ありがとう。本当に、幸せな悩み、ばっかり。', en: 'Thank you. Truly, only happy worries.', style: 'Soft dreamy barista warm soft sincere bright-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 448 — yumiko + ryosuke, family planning (medium)
  {
    id: 'conv_00448',
    context: 'Yumiko and Ryosuke at the kitchen table, talking about the kids\' next steps.',
    purpose: 'married couple gentle family planning discussion',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['家族', '将来', '子供', '一緒', '考える'],
    cast: ['ryosuke_dad', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'リクが、来年は卒業だね。', en: 'Riku — graduating next year.', style: 'Maternal warm soft sincere thoughtful-warm reflective opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'ryosuke_dad', jp: '早いな、本当に。', en: 'Time flies, truly.', style: 'Father warm gentle sincere-warm reflective-matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '就職、どうするんだろう。', en: 'Employment — wonder what.', style: 'Maternal warm soft sincere thoughtful-warm parent-worry, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'thoughtfully-warm' },
      { speaker: 'ryosuke_dad', jp: 'うん、聞いてみないと。今度、ゆっくり話そう。', en: 'Yes, must ask. Let\'s talk slowly next time.', style: 'Father warm gentle sincere-warm practical-planning, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-practical' },
      { speaker: 'yumiko_mom', jp: 'しょうも、もう三年生。あっという間ね。', en: 'Sho already third grade. In a blink.', style: 'Maternal warm soft sincere wondering-warm tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-wondering' },
      { speaker: 'ryosuke_dad', jp: 'うん。皆で、ゆっくり、考えていこう。', en: 'Yes. All together, slowly, let\'s think.', style: 'Father warm soft sincere-warm gentle-extending closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '亮介と一緒で、本当に安心。', en: 'With Ryosuke — truly reassuring.', style: 'Maternal warm soft sincere deep-warm closing-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 449 — sakura + asuka (long)
  {
    id: 'conv_00449',
    context: 'Sakura visits her old teacher Asuka — now a published-essay college student going strong.',
    purpose: 'mentor-mentee continued — milestone update',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['大学', '文章', '出版', '夢', '応援', '感謝'],
    cast: ['asuka_teacher', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、お久しぶりです。今日、ちゃんと、ご報告したくて。', en: 'Sensei, long time. Today, want to report properly.', style: 'Teen warm soft sincere formal-respectful-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'asuka_teacher', jp: 'さくらさん、嬉しい。何か、いいニュース？', en: 'Sakura-san, happy. Some good news?', style: 'Teacher warm gentle bright sincere-warm welcoming-curious, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: '私の文章、大学の雑誌に、掲載されました。', en: 'My writing — published in the university magazine.', style: 'Teen warm soft sincere proud-bright-warm sharing-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-proud' },
      { speaker: 'asuka_teacher', jp: 'え、本当！おめでとう、本当におめでとう！', en: 'Eh, truly! Congrats, truly congratulations!', style: 'Teacher warm bright sincere overwhelmed-touched-warm joyful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'sakura_teen', jp: '先生のおかげで、ここまで来れました。', en: 'Thanks to sensei, came this far.', style: 'Teen warm soft sincere deep-warm grateful-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'さくらさんが、ずっと、書いてきたから。先生は、そっと、見守ってただけ。', en: 'Because you wrote continually. Sensei just gently watched.', style: 'Teacher warm gentle sincere-warm humble-redirecting deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-humble' },
      { speaker: 'sakura_teen', jp: 'でも、先生のあの言葉、ずっと胸にあって。「好きなものは、強い」って。', en: 'But sensei\'s words — always in my heart. "What you love is strong."', style: 'Teen warm soft sincere deep-warm memory-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '…覚えててくれてたんだ。本当に、嬉しい。', en: '…You remembered. Truly, happy.', style: 'Teacher warm soft sincere deep-tender-warm touched, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sakura_teen', jp: '夢、まだ遠いけど、ちょっとずつ、近づいてる気がする。', en: 'Dream, still far, but bit by bit feels closer.', style: 'Teen warm soft sincere reflective-warm honest-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'asuka_teacher', jp: 'これからも、絶対、応援してる。何かあったら、いつでも、来てね。', en: 'From now on, definitely cheering. If anything, come anytime.', style: 'Teacher warm gentle sincere-warm extending-care closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-extending' },
      { speaker: 'sakura_teen', jp: 'はい。本当に、感謝してます。', en: 'Yes. Truly, grateful.', style: 'Teen warm soft sincere deep-warm closing-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: '雑誌、私にも、見せてほしい。', en: 'The magazine — please show me too.', style: 'Teacher warm gentle bright sincere-warm asking-eager, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-eager' },
      { speaker: 'sakura_teen', jp: 'もちろん。今度、持ってきますね。', en: 'Of course. Next time, I\'ll bring.', style: 'Teen warm soft bright sincere-warm closing-committing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 450 — riku + hina (short)
  {
    id: 'conv_00450',
    context: 'Riku is back from college during break. Little Hina pesters him for piggyback rides.',
    purpose: 'small playful big-brother-cousin warmth',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['お兄ちゃん', '遊ぶ', '楽しい', '一緒', '大きい'],
    cast: ['riku_teen', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'リクお兄ちゃん、おかえり！', en: 'Riku-onii-chan, welcome back!', style: 'High child bright sincere enthusiastic-warm welcoming, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'riku_teen', jp: 'おお、ひな、大きくなったな！', en: 'Oh, Hina, you\'ve grown!', style: 'Teen warm bright sincere-warm cousin-observation-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hina_child', jp: 'おんぶしてー！', en: 'Piggyback please!', style: 'High child bright eager pleading-warm childish-demand, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'eagerly-bright' },
      { speaker: 'riku_teen', jp: '重くなったから、ちょっとだけな。', en: 'You\'ve gotten heavy — just a little.', style: 'Teen warm soft laughing teasing-warm accepting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'warmly-laughing' },
      { speaker: 'hina_child', jp: 'やったー！一緒に遊ぼう、お兄ちゃん！', en: 'Yay! Let\'s play together, big brother!', style: 'High child bright sincere bright-warm celebrating, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: 'はいはい、楽しんでこか。', en: 'Yes yes, let\'s enjoy.', style: 'Teen warm soft sincere bright-warm accepting-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 451 — naoko + saito (medium)
  {
    id: 'conv_00451',
    context: 'Naoko consults Dr. Saito about her widowed mother\'s health.',
    purpose: 'adult-daughter consulting longtime family doctor about aging parent',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['母', '一人', '心配', '健康', '相談'],
    cast: ['saito_doctor', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: '斎藤先生、お時間、ありがとうございます。', en: 'Dr. Saito, thank you for the time.', style: 'Aunt warm formal sincere-respectful-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'saito_doctor', jp: 'お母様のこと、何か気になりますか。', en: 'About your mother — anything worrying?', style: 'Doctor warm professional gentle sincere-warm careful-asking, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-gentle' },
      { speaker: 'naoko_aunt', jp: '最近、食欲が落ちてる気がして。', en: 'Lately, appetite seems down.', style: 'Aunt warm soft sincere honest-vulnerable-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'softly-honest' },
      { speaker: 'saito_doctor', jp: '年齢的なものかもしれませんが、念のため、検査しましょう。', en: 'May be age-related, but for caution, let\'s test.', style: 'Doctor warm professional gentle balanced-warm careful-direction, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-balanced' },
      { speaker: 'naoko_aunt', jp: 'ありがとうございます。安心したい。', en: 'Thank you. Want peace of mind.', style: 'Aunt warm soft sincere vulnerable-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-vulnerable' },
      { speaker: 'saito_doctor', jp: 'お母様にも、無理しないで来ていただきましょう。', en: 'Let\'s have your mother come without forcing.', style: 'Doctor warm professional gentle sincere-warm care-extending, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'naoko_aunt', jp: '来週、お連れします。', en: 'Next week, I\'ll bring her.', style: 'Aunt warm soft sincere committed-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'saito_doctor', jp: '何かあれば、すぐご連絡ください。', en: 'If anything, contact me immediately.', style: 'Doctor warm professional gentle sincere-warm extending closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-extending' }
    ]
  },
  // 452 — daichi + asuka (short)
  {
    id: 'conv_00452',
    context: 'Daichi runs into Ms. Asuka at the train station.',
    purpose: 'small civil chance meeting',
    ambient: 'station_concourse',
    sound_effects: [],
    target_vocab: ['偶然', '元気', '一緒', 'ありがとう', '楽しい'],
    cast: ['daichi_kansai', 'asuka_teacher'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'あれ、あすか先生やん。偶然やな。', en: 'Hey, Asuka-sensei. Coincidence.', style: 'Kansai warm bright recognition-warm casual-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'casually-bright' },
      { speaker: 'asuka_teacher', jp: 'まあ、達也さん。お元気ですか。', en: 'My, Tatsuya-san. Are you well?', style: 'Teacher warm gentle bright sincere-warm civil-recognition, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'daichi_kansai', jp: 'お陰様で。結婚して、ますます元気で。', en: 'Thanks to all. Married, more lively than ever.', style: 'Kansai warm bright sincere-warm sharing-life, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'おめでとうございます。本当に嬉しいニュース。', en: 'Congratulations. Truly happy news.', style: 'Teacher warm gentle sincere-warm congratulating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'ありがとうございます。先生にもお会いできて、ええ偶然や。', en: 'Thank you. Meeting sensei too — good coincidence.', style: 'Kansai warm bright sincere closing-warm grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。お幸せに。', en: 'Same. Be happy.', style: 'Teacher warm gentle sincere closing-warm blessing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 453 — hiroshi_boss + naoko (medium)
  {
    id: 'conv_00453',
    context: 'Hiroshi-boss and Naoko continue their gallery friendship — now meeting outside galleries too.',
    purpose: 'small ongoing civil cultural friendship — friendship beyond initial context',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['芸術', '一緒', '感謝', '楽しい', '尊敬'],
    cast: ['hiroshi_boss', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'ナオコさん、また、お会いできて嬉しい。', en: 'Naoko-san, glad to meet again.', style: 'Boss measured warm formal sincere-warm civil-opening, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。最近、芸術以外のお話も、楽しくなって。', en: 'Same. Lately, beyond art — talks also become fun.', style: 'Aunt warm gentle sincere-warm civil-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'お仕事のことなど、伺ってもよろしいでしょうか。', en: 'May I ask about your work?', style: 'Boss measured warm formal sincere-warm civil-asking, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'civilly-formal' },
      { speaker: 'naoko_aunt', jp: 'もちろん。経理の仕事で、もう二十年です。', en: 'Of course. Accounting work — twenty years now.', style: 'Aunt warm gentle sincere-warm sharing-career, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'すごい。長く続けられるって、本当に立派です。', en: 'Wonderful. Continuing long — truly splendid.', style: 'Boss measured warm sincere-warm admiring-respecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '田中さんも、お忙しいですね、いつも。', en: 'Tanaka-san is always busy, too.', style: 'Aunt warm gentle sincere-warm reciprocal-civil, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-warm' },
      { speaker: 'hiroshi_boss', jp: 'こうやって、お時間いただけるの、本当に感謝です。', en: 'Getting time like this — truly grateful.', style: 'Boss measured warm soft sincere-deep-warm closing-grateful, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。長く、お付き合い、ね。', en: 'Same. Long association.', style: 'Aunt warm gentle sincere closing-warm extending-future, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 454 — sachiko + mrs_mori (long)
  {
    id: 'conv_00454',
    context: 'The two widow neighbors share an afternoon. Long talk about grief, joy, and continuing.',
    purpose: 'two widow friends — long deep wisdom of bereavement',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['一人', '寂しい', '思い出', '感謝', '時間', '友達'],
    cast: ['mrs_mori_neighbor', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: 'さちこさん、最近、夢、よく見るの。', en: 'Sachiko-san, lately, dreams often.', style: 'Neighbor warm soft tender sincere-warm vulnerable-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-vulnerable' },
      { speaker: 'sachiko_grandma', jp: 'うん、私も。今でも、毎日のように。', en: 'Yes, me too. Even now, almost daily.', style: 'Soft grandmother warm soft tender sincere-warm matching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-matching' },
      { speaker: 'mrs_mori_neighbor', jp: '十年経つのに、不思議ね、心は、まだあの頃のまま。', en: 'Ten years passed, strange — heart still like back then.', style: 'Neighbor warm soft tender deep sincere-warm philosophical-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-philosophical' },
      { speaker: 'sachiko_grandma', jp: '私もよ。寂しさは、ずっと、変わらないかも。', en: 'Me too. The loneliness — may not change forever.', style: 'Soft grandmother warm soft tender sincere-warm honest-matching, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-honest' },
      { speaker: 'mrs_mori_neighbor', jp: 'けど、こうやって、さちこさんと話せると、すごく救われる。', en: 'But, talking like this with you — truly saved.', style: 'Neighbor warm soft tender sincere-warm deep-grateful disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: 'こちらこそ。森さんがいてくれて、本当にありがたい。', en: 'Same. Having you, Mori-san — truly grateful.', style: 'Soft grandmother warm soft tender sincere-warm deep-reciprocal, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mrs_mori_neighbor', jp: '主人とは、もう、ずっと会えないって、わかってる。', en: 'I can never meet my husband again — I know.', style: 'Neighbor warm soft tender deep honest-warm vulnerable-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-honest' },
      { speaker: 'sachiko_grandma', jp: 'けど、心の中では、ずっと、一緒だよね。', en: 'But, in the heart — always together.', style: 'Soft grandmother warm soft tender sincere-warm comforting-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-comforting' },
      { speaker: 'mrs_mori_neighbor', jp: 'うん。それだけで、生きていける。', en: 'Yes. Just that — I can keep living.', style: 'Neighbor warm soft tender deep sincere-warm closing-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: '思い出を、ちゃんと、覚えていることが、大事よね。', en: 'Remembering the memories properly — that\'s what matters.', style: 'Soft grandmother warm soft tender sincere-warm wise-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-wise' },
      { speaker: 'mrs_mori_neighbor', jp: '時間が、痛みを、少しずつ、和らげてくれる気もする。', en: 'Time — bit by bit, eases the pain, I feel.', style: 'Neighbor warm soft tender sincere-warm philosophical-warm hopeful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-hopeful' },
      { speaker: 'sachiko_grandma', jp: '友達がいてくれるのが、何より、ね。', en: 'Having friends — more than anything.', style: 'Soft grandmother warm soft tender sincere-warm closing-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mrs_mori_neighbor', jp: '感謝してる、本当に。', en: 'Grateful, truly.', style: 'Neighbor warm soft tender sincere-warm closing-brief-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: 'また来週、ね。お茶しましょう。', en: 'Again next week. Let\'s have tea.', style: 'Soft grandmother warm soft sincere bright-warm closing-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 455 — kenji + yuki + ryosuke (3-speaker, medium)
  {
    id: 'conv_00455',
    context: 'Three colleagues lunch. Yuki shares some news from her new role.',
    purpose: 'three-way colleague catch-up — professional friendship deepening',
    ambient: 'restaurant_lunch',
    sound_effects: [],
    target_vocab: ['仕事', '相談', '一緒', '感謝', '頑張る'],
    cast: ['kenji_office', 'yuki_office', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '皆さん、最近、忙しいですか。', en: 'Everyone, busy lately?', style: 'Office woman warm gentle bright sincere-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'kenji_office', jp: 'いつも通り。佐藤さん、新しい部署で、どうですか？', en: 'As usual. Sato-san, how\'s the new section?', style: 'Salaryman warm formal sincere-warm friendly-asking, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '責任、重いけど、毎日学ぶことばかり。', en: 'Responsibility heavy, but daily learning.', style: 'Office woman warm soft sincere honest-balanced-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-balanced' },
      { speaker: 'ryosuke_dad', jp: '佐藤さんなら、絶対大丈夫。', en: 'For you, Sato-san — definitely fine.', style: 'Father warm gentle sincere-warm encouraging-believing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-believing' },
      { speaker: 'yuki_office', jp: 'お二人と話すと、すごく元気もらえる。', en: 'Talking with you both — get a lot of energy.', style: 'Office woman warm soft sincere deep-warm grateful-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '相談、いつでも、できるから。', en: 'Consultation — anytime, possible.', style: 'Salaryman warm gentle sincere generous-warm extending, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'ryosuke_dad', jp: '皆で、頑張りましょう。', en: 'Let\'s all do our best.', style: 'Father warm gentle sincere-warm closing-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '本当に、ありがとうございます。', en: 'Truly, thank you.', style: 'Office woman warm soft sincere deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 456 — ren + tatsuya (medium)
  {
    id: 'conv_00456',
    context: 'Ren visits the country to meet Tatsuya — they\'re newly connected through extended family.',
    purpose: 'small extended-family meeting — Kansai connection-meets-rural',
    ambient: 'farm_porch_afternoon',
    sound_effects: [],
    target_vocab: ['田舎', '初めて', '一緒', '空気', '感謝'],
    cast: ['tatsuya_country', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'はじめまして、達也さん。れんです。', en: 'Nice to meet you, Tatsuya-san. I\'m Ren.', style: 'University student warm soft formal sincere-respectful-warm introducing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'formally-respectful' },
      { speaker: 'tatsuya_country', jp: 'おう、れんくん、よう来てくれた。', en: 'Yeah, Ren-kun, glad you came.', style: 'Country gruff warm bright sincere-warm welcoming-rural, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-bright' },
      { speaker: 'ren_uni', jp: 'こちらが、達也さんの畑なんですね。すごい広い。', en: 'This is your field, Tatsuya-san. So spacious.', style: 'University student warm soft sincere impressed-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-impressed' },
      { speaker: 'tatsuya_country', jp: 'まあ、田舎やしな。空気、街と全然違うやろ。', en: 'Country, after all. Air totally different from city.', style: 'Country gruff warm humble-bright sincere-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'マジで違う。気持ちが、落ち着く感じ。', en: 'For real, different. Feelings settle.', style: 'University student warm soft sincere genuine-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'あおいさんも、田舎、来てくれてな。気に入ってくれたわ。', en: 'Aoi-san also came to the country. She liked it.', style: 'Country gruff warm bright sincere-warm sharing-warmth, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-bright' },
      { speaker: 'ren_uni', jp: 'これから、よろしくお願いします。', en: 'From now on, please.', style: 'University student warm soft sincere closing-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ。いつでも、田舎、来てな。', en: 'Same. Come to the country anytime.', style: 'Country gruff warm sincere generous-warm closing-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' }
    ]
  },
  // 457 — sakura + sho (short)
  {
    id: 'conv_00457',
    context: 'Sakura back from college visits Sho. Quiet warm cousin moment.',
    purpose: 'small big-sister-cousin gentle moment',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['元気', '一緒', '大学', '楽しい', '優しい'],
    cast: ['sakura_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'しょうくん、元気してた？', en: 'Sho-kun, been well?', style: 'Teen warm gentle bright sincere-warm cousin-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sho_child', jp: 'うん、ちゃんと、頑張ってる。', en: 'Yes, properly, working hard.', style: 'Tiny six-year-old soft small sincere-warm proud-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'sakura_teen', jp: 'お姉ちゃんも、大学で、頑張ってる。', en: 'Big sister — at university — working hard.', style: 'Teen warm soft sincere-warm matching-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'すごい…ぼくも、お姉ちゃんみたいに、なりたい。', en: 'Wow… I want to be like big sister.', style: 'Tiny six-year-old soft small sincere-warm admiring-disclosure, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: 'ふふ、しょうくん、絶対なれるよ。一緒に、頑張ろう。', en: 'Hehe, you can definitely become. Let\'s work hard together.', style: 'Teen warm gentle bright sincere-warm encouraging-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'うん…ありがとう、お姉ちゃん。', en: 'Yes… thank you, big sister.', style: 'Tiny six-year-old soft small sincere-warm tender-closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 458 — takeda + naoko (short)
  {
    id: 'conv_00458',
    context: 'Naoko stops by the koban to report a small concern about a neighbor.',
    purpose: 'small civic adult interaction',
    ambient: 'koban_afternoon',
    sound_effects: [],
    target_vocab: ['近所', '心配', '報告', '安心', 'ありがとう'],
    cast: ['takeda_officer', 'naoko_aunt'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: '武田さん、すみません、ちょっと報告したくて。', en: 'Takeda-san, excuse me, want to report something.', style: 'Aunt warm soft formal civic-careful-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'takeda_officer', jp: 'はい、どうされましたか。', en: 'Yes, what happened?', style: 'Officer warm professional gentle careful-warm receiving, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-gentle' },
      { speaker: 'naoko_aunt', jp: '近所のお年寄りの方、ここ最近、お見かけしなくて、心配で。', en: 'A neighbor elderly — recently haven\'t seen, worried.', style: 'Aunt warm soft sincere civic-careful-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'takeda_officer', jp: 'すぐ、確認に行きます。教えていただき、ありがとうございます。', en: 'I\'ll go check immediately. Thank you for telling me.', style: 'Officer warm professional gentle sincere-warm responsive-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-civic' },
      { speaker: 'naoko_aunt', jp: '安心しました。本当に、ありがとう。', en: 'Reassured. Truly, thank you.', style: 'Aunt warm soft sincere closing-warm grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 459 — yumiko + mei (long)
  {
    id: 'conv_00459',
    context: 'Yumiko and Mei (newlywed in extended family) share an evening tea. Older woman and young bride.',
    purpose: 'small intergenerational woman warmth — older wisdom for younger',
    ambient: 'tatami_evening',
    sound_effects: [],
    target_vocab: ['結婚', '家族', '一緒', '相談', '感謝', '将来'],
    cast: ['yumiko_mom', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'メイさん、結婚生活、どう？', en: 'Mei-san, married life — how?', style: 'Maternal warm gentle bright sincere-warm family-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'mei_romantic', jp: '楽しいけど、慣れないこと、たくさんあって。', en: 'Fun, but lots of things to get used to.', style: 'Romantic warm soft sincere honest-balanced-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-balanced' },
      { speaker: 'yumiko_mom', jp: 'うんうん。私も、最初の数年は、戸惑ってばかり。', en: 'Mm, mm. First years, I was confused too.', style: 'Maternal warm gentle sincere-warm normalizing-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-normalizing' },
      { speaker: 'mei_romantic', jp: 'ゆみこさんも、そうだったんですか？', en: 'You too, Yumiko-san?', style: 'Romantic warm soft surprised sincere-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-surprised' },
      { speaker: 'yumiko_mom', jp: 'うん、結婚って、家族と家族が、一緒になることだもん。', en: 'Yes, marriage — family and family becoming one.', style: 'Maternal warm gentle sincere-warm philosophical-warm explaining, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-philosophical' },
      { speaker: 'mei_romantic', jp: '本当に、そう感じます。達也の家族と、私の家族と。', en: 'Truly, I feel that. Tatsuya\'s family and mine.', style: 'Romantic warm soft sincere matching-warm reflective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'yumiko_mom', jp: 'ゆっくりで、いいの。焦らないで。', en: 'Slowly is fine. Don\'t rush.', style: 'Maternal warm gentle sincere-warm reassuring-wise, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reassuring' },
      { speaker: 'mei_romantic', jp: 'ゆみこさんと話すと、すごく安心します。', en: 'Talking with you — truly reassuring.', style: 'Romantic warm soft sincere deep-warm grateful-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: '何かあったら、いつでも、相談しに来てね。', en: 'If anything happens, come consult anytime.', style: 'Maternal warm soft sincere generous-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-generous' },
      { speaker: 'mei_romantic', jp: '本当に、家族みたいで、嬉しい。', en: 'Truly, like family — happy.', style: 'Romantic warm soft sincere deep-warm closing-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: 'もう家族よ。私も、メイさんがいて、嬉しい。', en: 'Already family. I\'m glad to have you, Mei-san.', style: 'Maternal warm soft sincere deep-warm tender-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: 'これからも、本当に、よろしくお願いします。', en: 'From now on, truly, please.', style: 'Romantic warm soft sincere deep-warm closing-formal-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'yumiko_mom', jp: 'こちらこそ。将来、お子さんとか、いろんなこと、一緒に考えていきましょう。', en: 'Same. Future — children and such, let\'s think together.', style: 'Maternal warm soft sincere deep-warm closing-extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-extending' }
    ]
  },
  // 460 — daichi + hiroshi_boss + ryosuke (3-speaker, long)
  {
    id: 'conv_00460',
    context: 'Three men dinner — Daichi now formally extended family. Adult masculine warmth.',
    purpose: 'three-male family-and-friend dinner deepening',
    ambient: 'izakaya_evening',
    sound_effects: [],
    target_vocab: ['仕事', '家族', '一緒', '感謝', '将来', '友達'],
    cast: ['daichi_kansai', 'hiroshi_boss', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '田中部長、亮介さん、今日もありがとうございます。', en: 'Tanaka-bucho, Ryosuke-san, thank you again today.', style: 'Kansai warm formal sincere-warm professional-friend-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'hiroshi_boss', jp: 'こちらこそ。達也さんと、こうやって飲めるの、ありがたい。', en: 'Same. Drinking with you like this — grateful.', style: 'Boss measured warm formal sincere-warm friend-deepening, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'ryosuke_dad', jp: '私も。お二人と、こうやって、家族みたいに、お話しできて。', en: 'Me too. With both, like family talking.', style: 'Father warm gentle sincere-warm reflective-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'わいも、家族の一員になれて、本当に嬉しい。', en: 'I, becoming family member — truly happy.', style: 'Kansai warm soft sincere deep-warm grateful-disclosure, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '達也さんは、もう、ずっと前から、家族みたいな存在でした。', en: 'Tatsuya-san — has long been like family.', style: 'Boss measured warm sincere-warm deep-philosophical-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '本当に。仕事抜きでも、ご縁、深いですよね。', en: 'Truly. Beyond work too, deep connection.', style: 'Father warm gentle sincere-warm matching-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'こういう関係、人生でなかなか、ないもんやで。', en: 'Relationships like this — rare in life.', style: 'Kansai warm soft sincere reflective-warm philosophical, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'hiroshi_boss', jp: '正直、お二人がいてくれて、私の人生、本当に豊かになった。', en: 'Honestly, with you two — my life truly enriched.', style: 'Boss measured warm soft sincere deep-warm honest-disclosure, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。皆さんから、本当に、たくさん教わってます。', en: 'Same. From all, truly learning lots.', style: 'Father warm soft sincere-warm reciprocal-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'daichi_kansai', jp: '将来、家族みんなで、温泉とか、行きたい。', en: 'In the future — all family, hot springs, want to go.', style: 'Kansai warm bright sincere-warm extending-future-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: 'いい考えですね。皆さんの予定、合わせて、計画しましょう。', en: 'Good idea. Let\'s plan around everyone\'s schedule.', style: 'Boss measured warm sincere-warm bright-warm extending, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'ゆみこも、皆と行けたら、絶対、喜びます。', en: 'Yumiko — if she can go with all, will be happy.', style: 'Father warm gentle sincere-warm including-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'よし、決まりやな。乾杯しよか。家族の絆に。', en: 'Right, decided. Let\'s cheers. To family bonds.', style: 'Kansai warm bright sincere-warm celebrating-warm closing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: '乾杯。お二人に、本当に感謝です。', en: 'Cheers. Truly grateful to you two.', style: 'Boss measured warm sincere-warm deep-warm closing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '乾杯。これからも、ずっと、ね。', en: 'Cheers. From now on too, always.', style: 'Father warm soft sincere closing-warm extending-future, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 461 — asuka + ren (short)
  {
    id: 'conv_00461',
    context: 'Asuka and Ren chance meet at the bookstore again. They\'ve become low-stakes book friends.',
    purpose: 'small civil ongoing book-friendship',
    ambient: 'bookstore_afternoon',
    sound_effects: [],
    target_vocab: ['本', '感想', '同じ', 'おすすめ', '楽しい'],
    cast: ['asuka_teacher', 'ren_uni'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'あ、あすかさん、また。', en: 'Oh, Asuka-san, again.', style: 'University student warm casual bright sincere-warm casual-recognition, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'casually-bright' },
      { speaker: 'asuka_teacher', jp: 'ふふ、よく会いますね。何か、いい本ありました？', en: 'Hehe, we meet often. Any good books?', style: 'Teacher warm gentle bright sincere-warm laughing-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'ren_uni', jp: 'これ、めっちゃ良かったっす。おすすめです。', en: 'This — really good. I recommend.', style: 'University student warm casual sincere-warm enthusiastic-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'え、興味ある。次、読んでみようかな。', en: 'Eh, interested. Maybe read next.', style: 'Teacher warm gentle sincere-warm engaged-anticipating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-engaged' },
      { speaker: 'ren_uni', jp: '感想、聞かせてください、また。', en: 'Tell me impressions, again.', style: 'University student warm soft sincere-warm extending-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'もちろん。楽しみ。', en: 'Of course. Looking forward.', style: 'Teacher warm gentle sincere closing-warm bright, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 462 — riku + ryosuke (medium)
  {
    id: 'conv_00462',
    context: 'Riku, now graduating soon, has a quiet talk with his father Ryosuke about job decisions.',
    purpose: 'father-son adult conversation about young man\'s career path',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['仕事', '将来', '相談', '尊敬', '感謝'],
    cast: ['ryosuke_dad', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'お父さん、ちょっと、就職のこと、相談していい？', en: 'Dad, can I consult about jobs?', style: 'Teen warm soft sincere brave-warm respectful-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-brave' },
      { speaker: 'ryosuke_dad', jp: 'もちろん。座って、ゆっくり話そう。', en: 'Of course. Sit, let\'s talk slowly.', style: 'Father warm gentle sincere-warm welcoming-dad, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '二つ内定もらってて、どっち選ぶか、迷ってる。', en: 'I have two offers — stuck choosing.', style: 'Teen warm soft sincere honest-vulnerable-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'ryosuke_dad', jp: 'それは嬉しい悩み。どっちが、自分に合ってると感じる？', en: 'A happy worry. Which feels right to you?', style: 'Father warm gentle sincere-warm probing-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-deep' },
      { speaker: 'riku_teen', jp: 'うーん、大手の方が、安定してるけど、小さい方が、面白そう。', en: 'Mm, big company stable, but smaller seems interesting.', style: 'Teen warm soft sincere thoughtful-balanced-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'thoughtfully-balanced' },
      { speaker: 'ryosuke_dad', jp: 'お父さんも、若い時、同じ悩みがあった。今振り返ると、面白い方を選んで、良かった。', en: 'I had the same worry when young. Looking back — glad I chose interesting.', style: 'Father warm soft sincere deep-warm personal-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'riku_teen', jp: 'お父さんの話、本当に参考になります。', en: 'Dad\'s story — truly helpful.', style: 'Teen warm soft sincere deep-warm grateful-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '最終的には、リクが自分で決めるんだよ。お父さん、応援する。', en: 'Ultimately, you decide. Dad supports.', style: 'Father warm gentle sincere-warm firm-extending-closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'ありがとう、お父さん。本当に、尊敬してる。', en: 'Thanks, dad. Truly, I respect you.', style: 'Teen warm soft sincere deep-warm closing-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 463 — hina + sho + ren + sakura (4-speaker, long)
  {
    id: 'conv_00463',
    context: 'All four young — Sho, Hina, Sakura, Ren — gather at the family home one weekend.',
    purpose: 'four-young-people warm family gathering — milestone of young adults & kids',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '楽しい', '思い出', '成長', '将来'],
    cast: ['hina_child', 'sho_child', 'sakura_teen', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: '皆、揃ったー！', en: 'Everyone gathered!', style: 'High child bright sincere enthusiastic-warm celebrating, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '…うん、嬉しい。', en: '…Yeah, happy.', style: 'Tiny six-year-old soft small sincere-warm gentle-warm closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sakura_teen', jp: 'こうやって四人で集まるの、久しぶり。', en: 'Gathering as four like this — long time.', style: 'Teen warm soft sincere reflective-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '皆、いろいろ、成長してるな。', en: 'Everyone is growing in various ways.', style: 'University student warm gentle bright sincere-warm observation-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'ひな、四年生になる！', en: 'Hina will be fourth grade!', style: 'High child bright sincere proud-warm declaring, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-proud' },
      { speaker: 'sho_child', jp: 'ぼくも、三年生で、頑張ってる。', en: 'I\'m in third grade, working hard.', style: 'Tiny six-year-old soft small sincere proud-warm sharing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'sakura_teen', jp: '皆、本当にしっかりしてきたね。', en: 'Everyone — truly becoming solid.', style: 'Teen warm soft sincere-warm tender-appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '俺たちも、もう、社会人。', en: 'We too, now — working members of society.', style: 'University student warm soft sincere reflective-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'hina_child', jp: 'お兄ちゃん、お姉ちゃん、いつまでも、こうやって、集まってほしい。', en: 'Big brother, big sister — want to keep gathering like this forever.', style: 'High child bright sincere tender-warm childish-wishing, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sakura_teen', jp: 'うん、絶対、続けるよ。家族だから。', en: 'Yes, definitely keep. Because we\'re family.', style: 'Teen warm soft sincere firm-warm tender-committing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-firm' },
      { speaker: 'sho_child', jp: '…おじいちゃんも、見てくれてるかな。', en: '…I wonder if grandpa is watching.', style: 'Tiny six-year-old soft small tender wondering-warm gentle, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-wondering' },
      { speaker: 'ren_uni', jp: '絶対、見てる。家族の輪、ずっと、続いていくぞ。', en: 'Definitely watching. Family circle continues forever.', style: 'University student warm soft sincere firm-warm philosophical-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-firm' },
      { speaker: 'hina_child', jp: '将来、皆で、また集まろう！', en: 'In the future, let\'s gather again!', style: 'High child bright sincere enthusiastic-warm closing-extending, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sakura_teen', jp: 'うん、絶対。皆との時間、本当に、宝物。', en: 'Yes, definitely. Time with all — truly treasure.', style: 'Teen warm soft sincere deep-warm closing-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sho_child', jp: '…うん、嬉しい思い出、いっぱい作る。', en: '…Yeah, lots of happy memories to make.', style: 'Tiny six-year-old soft small sincere-warm closing-tender, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_013)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 244 — daichi + ren at gym
  {
    id: 'conv_00244',
    context: 'A local gym on a Saturday morning. Daichi recognizes Ren from a mutual friend and they end up working out together.',
    purpose: 'casual fitness banter — two regional voices warming up over weights',
    ambient: 'gym_morning',
    sound_effects: [],
    target_vocab: ['練習', '体', '続ける', '趣味', '頑張る'],
    cast: ['daichi_kansai', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'お、ジムやん。れんくんも来てるん？', en: 'Oh, the gym. You come too, Ren?', style: 'Kansai warm bright recognition, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'brightly-warm' },
      { speaker: 'ren_uni', jp: 'うっす。最近、運動不足で。', en: 'Yo. Lately I\'m short on exercise.', style: 'University student warm casual greeting, the gentle real exhausted-honesty audible, soft real warmth throughout delivery throughout.', mood: 'casually-honest' },
      { speaker: 'daichi_kansai', jp: 'わかるわ。体動かしとかなー。', en: 'I get it. Gotta move the body.', style: 'Kansai warm matching practical wisdom, the regional swing carrying real solidarity, soft real warmth throughout delivery.', mood: 'matching-warm' },
      { speaker: 'ren_uni', jp: 'だいちさんは、もう続けてるんすか？', en: 'Daichi-san, you been at it a while?', style: 'University student warm casual respectful curiosity, the soft real engaging-interest audible, gentle real warmth throughout delivery.', mood: 'casually-respectful' },
      { speaker: 'daichi_kansai', jp: '半年くらい。趣味みたいになってきた。', en: 'About six months. It\'s become like a hobby.', style: 'Kansai warm casual proud sharing, the regional swing softened, soft real warmth threading throughout delivery throughout.', mood: 'casually-proud' },
      { speaker: 'ren_uni', jp: 'マジっすか、すごい。俺は三日坊主気味。', en: 'For real? Amazing. I tend to give up after three days.', style: 'University student warm self-deprecating laughing, the soft real honest-warmth audible, gentle real warmth throughout delivery.', mood: 'warmly-laughing' },
      { speaker: 'daichi_kansai', jp: '今日、一緒に練習しよか。ペア組んで。', en: 'Today, want to practice together? Pair up.', style: 'Kansai warm friendly generous offer, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'friendly-warm' },
      { speaker: 'ren_uni', jp: 'お願いします。頑張ります。', en: 'Yes please. I\'ll do my best.', style: 'University student warm sincere commitment, the soft real eager-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-committing' }
    ]
  },
  // 245 — mei + asuka, chance reunion of mei's old teacher
  {
    id: 'conv_00245',
    context: 'Mei recognizes Asuka in the grocery store — Asuka was her high school English teacher five years ago.',
    purpose: 'former teacher and former student reunion — surprise warmth across years',
    ambient: 'supermarket_afternoon',
    sound_effects: [],
    target_vocab: ['高校', '同じ', '元気', '久しぶり', '変わる'],
    cast: ['asuka_teacher', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あ、あすか先生…ですよね？', en: 'Oh, Asuka-sensei… right?', style: 'Romantic warm soft careful tentative recognition, the gentle real uncertain-hope audible, soft real warmth throughout delivery.', mood: 'softly-tentative' },
      { speaker: 'asuka_teacher', jp: 'え、もしかしてメイさん？高校の？', en: 'Eh, could it be Mei-san? From high school?', style: 'Teacher warm surprised bright recognition, the soft real touched-recognition audible, gentle real warmth throughout delivery.', mood: 'brightly-recognizing' },
      { speaker: 'mei_romantic', jp: 'はい！本当にお久しぶりです。', en: 'Yes! Truly, long time.', style: 'Romantic warm bright sincere reunion, the soft real delighted-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'brightly-sincere' },
      { speaker: 'asuka_teacher', jp: 'うわー、大人っぽくなって。元気？', en: 'Wow, you\'ve grown up. Doing well?', style: 'Teacher warm bright touched observation, the soft real teacher-pride audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-touched' },
      { speaker: 'mei_romantic', jp: '元気です。先生は、全然変わらない！', en: 'I\'m well. You, sensei, haven\'t changed at all!', style: 'Romantic warm bright genuine compliment, the soft real touched-affection audible, gentle real warmth throughout delivery throughout.', mood: 'brightly-complimenting' },
      { speaker: 'asuka_teacher', jp: 'ふふ、それは嬉しい。今は何してるの？', en: 'Hehe, that\'s nice to hear. What are you doing now?', style: 'Teacher warm gentle laughing curiosity, the soft real teacher-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-curious' },
      { speaker: 'mei_romantic', jp: 'デザインの仕事をしてます。同じ街に住んでて。', en: 'I work in design. Living in the same town.', style: 'Romantic warm sincere update sharing, the soft real warm-disclosure audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-updating' },
      { speaker: 'asuka_teacher', jp: 'まあ素敵。今度ゆっくりお茶しましょう。', en: 'Oh how wonderful. Let\'s have tea slowly sometime.', style: 'Teacher warm genuine bright offer, the soft real eager-reconnecting audible, gentle real warmth threading throughout delivery throughout.', mood: 'brightly-offering' },
      { speaker: 'mei_romantic', jp: 'はい、ぜひ。連絡先教えてください。', en: 'Yes, please. Tell me your contact info.', style: 'Romantic warm sincere eager response, the soft real warm-acceptance audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-eager' }
    ]
  },
  // 246 — hiroshi_boss + naoko, art gallery (short)
  {
    id: 'conv_00246',
    context: 'A modest art exhibit in the local cultural center. Hiroshi the boss happens to be wandering through; Naoko was there for a friend\'s opening.',
    purpose: 'small art-world chance encounter — adult civility around culture',
    ambient: 'gallery_afternoon',
    sound_effects: [],
    target_vocab: ['美術', '展示', '偶然', '素敵', '作品'],
    cast: ['hiroshi_boss', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'いやあ、いい展示ですね。', en: 'Mm, a nice exhibit.', style: 'Boss measured warm refined observation, the soft real off-duty culture-appreciation audible, gentle real warmth throughout delivery.', mood: 'refinedly-warm' },
      { speaker: 'naoko_aunt', jp: 'はい、本当に。色が素敵ですね。', en: 'Yes, truly. The colors are wonderful.', style: 'Aunt warm appreciative civil-stranger response, the soft real warm-engagement audible, gentle real warmth throughout delivery.', mood: 'appreciatively-civil' },
      { speaker: 'hiroshi_boss', jp: 'この作品、特に印象的で。', en: 'This piece especially, is striking.', style: 'Boss measured warm specific observation, the soft real cultured-attention audible, gentle real warmth threading throughout delivery throughout.', mood: 'measuredly-specific' },
      { speaker: 'naoko_aunt', jp: '描いた方、友人の知り合いで。今日、偶然立ち寄って。', en: 'The artist — a friend\'s acquaintance. I happened to stop by today.', style: 'Aunt warm friendly contextual sharing, the soft real warm-conversation audible, gentle real warmth threading throughout delivery throughout.', mood: 'friendly-contextual' },
      { speaker: 'hiroshi_boss', jp: 'そうでしたか。素晴らしい作家ですね。', en: 'I see. A splendid artist.', style: 'Boss measured warm genuine appreciation, the soft real cultured-recognition audible, gentle real warmth threading throughout delivery throughout.', mood: 'genuinely-appreciating' },
      { speaker: 'naoko_aunt', jp: 'ありがとうございます。お楽しみくださいね。', en: 'Thank you. Please enjoy.', style: 'Aunt warm gentle gracious closing, the soft real civil-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'graciously-closing' }
    ]
  },
  // 247 — sakura + saito, anxiety attack (long)
  {
    id: 'conv_00247',
    context: 'Sakura has come to Dr. Saito\'s clinic in genuine distress. She doesn\'t know what\'s wrong, only that her heart is racing.',
    purpose: 'small mental-health visit — professional adult holding space for a frightened teen',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['不安', '大丈夫', '落ち着く', '心臓', '安心', '相談'],
    cast: ['saito_doctor', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生…なんか、急に苦しくなって。', en: 'Doctor… somehow, suddenly hard to breathe.', style: 'Teen warm soft frightened wavering disclosure, the gentle real distress audible, soft real warmth threading throughout delivery throughout.', mood: 'softly-frightened' },
      { speaker: 'saito_doctor', jp: 'うん、大丈夫。ゆっくり座って、息して。', en: 'Yes, it\'s okay. Sit slowly, breathe.', style: 'Doctor warm steady gentle calming professional, the soft real careful-grounding audible, gentle real warmth threading throughout delivery.', mood: 'steadily-calming' },
      { speaker: 'sakura_teen', jp: '心臓が、すごく速くて…。', en: 'My heart, so fast…', style: 'Teen warm wavering frightened body-disclosure, the soft real fragile distress audible, soft real warmth threading throughout delivery throughout.', mood: 'wavering-frightened' },
      { speaker: 'saito_doctor', jp: '大丈夫、命に関わる感じではない。', en: 'It\'s okay, not a life-threatening kind.', style: 'Doctor warm steady professional reassurance, the soft real expert-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'expertly-reassuring' },
      { speaker: 'sakura_teen', jp: 'ほんと…？', en: 'Truly…?', style: 'Teen warm fragile single-word check, the gentle real wanting-to-believe audible, soft real fragile-hope threading throughout delivery.', mood: 'fragilely-hoping' },
      { speaker: 'saito_doctor', jp: '本当。これは、不安が体に出るやつ。', en: 'Truly. This is anxiety showing in the body.', style: 'Doctor warm gentle naming professional explanation, the soft real clear-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-naming' },
      { speaker: 'sakura_teen', jp: '不安…そんなの、なかったのに。', en: 'Anxiety… I didn\'t think I had it.', style: 'Teen warm soft confused vulnerable disclosure, the gentle real real-bewilderment audible, soft real warmth threading throughout delivery throughout.', mood: 'softly-bewildered' },
      { speaker: 'saito_doctor', jp: '気付かないうちに、たまっていることもある。', en: 'Sometimes it builds without you noticing.', style: 'Doctor warm gentle professional wisdom-sharing, the soft real understanding audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-explaining' },
      { speaker: 'sakura_teen', jp: '受験のこと、ずっと考えてて…。', en: 'I\'ve been thinking about exams the whole time…', style: 'Teen warm soft realizing vulnerable disclosure, the gentle real recognition audible, soft real warmth threading throughout delivery throughout.', mood: 'softly-realizing' },
      { speaker: 'saito_doctor', jp: 'うん、それが原因かもしれないね。', en: 'Yes, that may be the cause.', style: 'Doctor warm gentle validating soft acceptance, the soft real careful-recognition audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-validating' },
      { speaker: 'sakura_teen', jp: 'どうしたら、いいんですか…？', en: 'What should I do…?', style: 'Teen warm soft small searching question, the gentle real wanting-help audible, soft real warmth threading throughout delivery throughout.', mood: 'softly-searching' },
      { speaker: 'saito_doctor', jp: '誰かに話すこと。一人で抱え込まないこと。', en: 'Talk to someone. Don\'t carry it alone.', style: 'Doctor warm gentle firm clear wisdom, the soft real real-mentor warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-firm' },
      { speaker: 'sakura_teen', jp: '誰に話せばいいか、わからなくて。', en: 'I don\'t know who I should talk to.', style: 'Teen warm soft vulnerable real disclosure, the gentle real lonely-truth audible, soft real warmth threading throughout delivery throughout.', mood: 'softly-vulnerable' },
      { speaker: 'saito_doctor', jp: 'お母さんは？まずはそこから。', en: 'Your mother? Start there.', style: 'Doctor warm gentle practical loving suggestion, the soft real expert-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-suggesting' },
      { speaker: 'sakura_teen', jp: '…うん。話してみる。', en: '…Yeah. I\'ll try.', style: 'Teen warm soft small committed acceptance, the soft real new-strength audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-committing' },
      { speaker: 'saito_doctor', jp: 'いつでも来てください。一緒に考えるから。', en: 'Come anytime. We\'ll think together.', style: 'Doctor warm closing gentle generous extending, the soft real real-mentor warmth audible, gentle real warmth threading throughout delivery.', mood: 'warmly-extending' }
    ]
  },
  // 248 — riku + hiroshi_elder (medium)
  {
    id: 'conv_00248',
    context: 'Riku stops by his great-grandfather Hiroshi-elder\'s house alone for the first time. The elder is delighted.',
    purpose: 'rare four-generation contact — careful teen visiting eldest in the family',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['大変', '体', '元気', '訪ねる', '時代'],
    cast: ['hiroshi_elder', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'こんにちは。一人で訪ねてみました。', en: 'Hello. I came to visit alone.', style: 'Teen warm careful slightly-nervous respectful opener, the soft real wanting-to-do-it-right audible, gentle real warmth throughout delivery.', mood: 'carefully-respectful' },
      { speaker: 'hiroshi_elder', jp: 'おお、リク。よう来た。一人でかい？', en: 'Oh, Riku. Good of you to come. Alone?', style: 'Slow elder warm surprised pleased welcoming, the soft real touched-elder warmth audible, gentle real warmth throughout delivery throughout.', mood: 'warmly-touched' },
      { speaker: 'riku_teen', jp: 'はい。お体、どうですか。', en: 'Yes. How\'s your health?', style: 'Teen warm careful respectful inquiry, the soft real careful-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-inquiring' },
      { speaker: 'hiroshi_elder', jp: 'うん、なんとか元気だ。リクは大きくなったな。', en: 'Yes, somehow well. Riku, you\'ve grown.', style: 'Slow elder warm gentle observation, the soft real elder-pride audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-observing' },
      { speaker: 'riku_teen', jp: '昔のこと、聞いてもいいですか。', en: 'May I ask about old times?', style: 'Teen warm soft careful real curiosity, the soft real real-respectful audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-curious' },
      { speaker: 'hiroshi_elder', jp: 'もちろん。じいさんの時代の話か。何でも聞きなさい。', en: 'Of course. Grandpa\'s era? Ask anything.', style: 'Slow elder warm generous opening, the soft real elder-warmth-pleased audible, gentle real warmth threading throughout delivery throughout.', mood: 'generously-opening' },
      { speaker: 'riku_teen', jp: '若い時、何が一番大変でしたか。', en: 'When young, what was the hardest thing?', style: 'Teen warm sincere genuine deep question, the soft real real-curiosity audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-asking' },
      { speaker: 'hiroshi_elder', jp: '戦争のあとな。食べ物がなくて。', en: 'After the war. There was no food.', style: 'Slow elder warm heavy gentle disclosure, the soft real deep-history audible, gentle real warmth threading throughout delivery throughout.', mood: 'gravely-warm' },
      { speaker: 'riku_teen', jp: '…そうだったんですね。', en: '…I see.', style: 'Teen warm soft absorbing weighted recognition, the gentle real respect audible, soft real warmth threading throughout delivery throughout.', mood: 'softly-absorbing' }
    ]
  },
  // 249 — yumiko + hina + sho, bath time (3-speaker, medium)
  {
    id: 'conv_00249',
    context: 'Bath time at home. Yumiko is corralling Hina and Sho, deciding who goes first.',
    purpose: 'small domestic family chaos — three voices coordinating around routine',
    ambient: 'bathroom_evening',
    sound_effects: [],
    target_vocab: ['風呂', '早く', '順番', '一緒', '楽しい'],
    cast: ['yumiko_mom', 'hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'みんな、お風呂入る時間よ。', en: 'Everyone, bath time.', style: 'Maternal warm bright daily-routine call, the soft real cheerful-management audible, gentle real warmth throughout delivery throughout.', mood: 'brightly-managing' },
      { speaker: 'hina_child', jp: 'やったー！一番がいい！', en: 'Yay! I want to go first!', style: 'High child bright enthusiastic claim, the soft real childish-eagerness audible, gentle real warmth threading throughout delivery throughout.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: '…ぼく、後でいい。', en: '…I can go later.', style: 'Tiny six-year-old soft accommodating gentle answer, the small real warm-flexibility audible, soft small warmth threading throughout delivery throughout.', mood: 'softly-accommodating' },
      { speaker: 'yumiko_mom', jp: '順番ね、ひな先で、しょうくん後。', en: 'In turns — Hina first, Sho-kun after.', style: 'Maternal warm gentle routine-coordinating, the soft real careful-fairness audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-coordinating' },
      { speaker: 'hina_child', jp: 'お母さん、一緒に入る？', en: 'Mom, come in with me?', style: 'High child bright eager-asking request, the soft real childish-attachment audible, gentle real warmth threading throughout delivery throughout.', mood: 'eagerly-asking' },
      { speaker: 'yumiko_mom', jp: 'うん、入ろうか。早く脱いで。', en: 'Yes, let\'s go in. Hurry, undress.', style: 'Maternal warm gentle accepting practical, the soft real warm-acceptance audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-accepting' },
      { speaker: 'sho_child', jp: 'ぼく、絵本見てる。', en: 'I\'ll look at the picture book.', style: 'Tiny six-year-old soft brief self-managed sharing, the small real warm-independence audible, soft small warmth threading throughout delivery throughout.', mood: 'softly-independent' },
      { speaker: 'hina_child', jp: '楽しい、楽しい、お母さんとお風呂！', en: 'Fun, fun, bath with mommy!', style: 'High child bright singing celebrating energy, the soft real childish-joy audible, gentle real warmth threading throughout delivery throughout.', mood: 'brightly-singing' },
      { speaker: 'yumiko_mom', jp: 'はいはい、静かに入ろうね。', en: 'Yes yes, let\'s go in quietly.', style: 'Maternal warm gentle amused-managing, the soft real warm-affection audible, gentle real warmth threading throughout delivery throughout.', mood: 'amused-managing' }
    ]
  },
  // 250 — tatsuya + takeda, city koban (medium)
  {
    id: 'conv_00250',
    context: 'Tatsuya is visiting his cousin in the city; he\'s lost. He stops at the koban Officer Takeda is manning.',
    purpose: 'country-to-city civic kindness — direction-asking interaction',
    ambient: 'koban_afternoon',
    sound_effects: [],
    target_vocab: ['道', '迷う', '親切', '助かる', '田舎'],
    cast: ['tatsuya_country', 'takeda_officer'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'すいません、ちょっと道に迷いまして。', en: 'Excuse me, I\'ve lost my way.', style: 'Country gruff warm careful direct opener, the soft real rural-civility audible, gentle real warmth throughout delivery throughout.', mood: 'gruffly-civil' },
      { speaker: 'takeda_officer', jp: 'はい、どちらまで行かれますか？', en: 'Yes, where are you headed?', style: 'Officer warm professional gentle helpful, the soft real public-service warmth audible, gentle real warmth throughout delivery throughout.', mood: 'professionally-warm' },
      { speaker: 'tatsuya_country', jp: '甥っ子の家ですわ。住所はこれです。', en: 'My nephew\'s house. The address is this.', style: 'Country gruff warm practical sharing, the soft real rural-direct audible, gentle real warmth threading throughout delivery throughout.', mood: 'gruffly-practical' },
      { speaker: 'takeda_officer', jp: 'なるほど、ここから歩いて十分ほどです。', en: 'I see — about ten minutes walk from here.', style: 'Officer warm professional clear direction, the soft real expert-public-help audible, gentle real warmth threading throughout delivery throughout.', mood: 'professionally-clear' },
      { speaker: 'tatsuya_country', jp: '助かります。田舎もんで、地図見ても分からんで。', en: 'Saves me. I\'m a country man, can\'t read maps.', style: 'Country gruff warm self-deprecating humble, the soft real real-honesty audible, gentle real warmth threading throughout delivery throughout.', mood: 'humble-honest' },
      { speaker: 'takeda_officer', jp: 'いえいえ、初めての場所は誰でもそうです。', en: 'No, no, first-time places are tough for anyone.', style: 'Officer warm gentle reassuring kind, the soft real public-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-reassuring' },
      { speaker: 'tatsuya_country', jp: '親切にどうも。ほんま助かりました。', en: 'Thanks for the kindness. Truly saved me.', style: 'Country gruff warm sincere closing thanks, the soft real rural-deep gratitude audible, gentle real warmth throughout delivery throughout.', mood: 'sincerely-gruff' },
      { speaker: 'takeda_officer', jp: 'お気をつけて。', en: 'Take care.', style: 'Officer warm gentle professional closing, the soft real warm-civic care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-civic' }
    ]
  },
  // 251 — aoi + sachiko at coffee shop (short)
  {
    id: 'conv_00251',
    context: 'Sachiko comes to Aoi\'s café for the first time, dragged in by her granddaughter who is at a friend\'s house.',
    purpose: 'elder discovering new third place — small barista kindness to an older customer',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['久しぶり', '元気', '注文', '飲む', '喜ぶ'],
    cast: ['aoi_barista', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'こんにちは。久しぶりのお店で。', en: 'Hello. It\'s been long since I\'ve been to a café.', style: 'Soft grandmother warm gentle careful opener, the soft real elder-hesitancy audible, gentle real warmth throughout delivery throughout.', mood: 'gently-hesitant' },
      { speaker: 'aoi_barista', jp: 'いらっしゃいませ。ゆっくりしていってください。', en: 'Welcome. Please take your time.', style: 'Soft dreamy barista warm gentle accommodating, the soft real elder-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-accommodating' },
      { speaker: 'sachiko_grandma', jp: 'コーヒーって、最近たくさん種類あるのね。', en: 'There are so many kinds of coffee these days.', style: 'Soft grandmother warm gentle wondering observation, the soft real elder-wonder audible, gentle real warmth throughout delivery throughout.', mood: 'gently-wondering' },
      { speaker: 'aoi_barista', jp: 'お好みに合わせて、おすすめしますよ。', en: 'I\'ll suggest something to your taste.', style: 'Soft dreamy barista warm gentle helpful, the soft real careful-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-helpful' },
      { speaker: 'sachiko_grandma', jp: 'じゃあ、優しい味のやつをお願い。', en: 'Then, please something gentle in flavor.', style: 'Soft grandmother warm gentle trusting request, the soft real elder-grace audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-trusting' },
      { speaker: 'aoi_barista', jp: 'はい、喜んで。少々お待ちください。', en: 'Yes, gladly. One moment please.', style: 'Soft dreamy barista warm gentle pleased committed, the soft real warm-service audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-pleased' }
    ]
  },
  // 252 — kenji + mei, train (medium)
  {
    id: 'conv_00252',
    context: 'Kenji and Mei discover they take the same morning train. The first awkward-pleasant conversation.',
    purpose: 'commuter chance meeting — small everyday kindness across two strangers-by-proximity',
    ambient: 'train_morning',
    sound_effects: [],
    target_vocab: ['偶然', '同じ', '電車', '仕事', '帰り'],
    cast: ['kenji_office', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'あ…おはようございます。', en: 'Oh… good morning.', style: 'Romantic warm soft careful tentative greeting, the gentle real wanting-to-be-polite audible, soft real warmth throughout delivery throughout.', mood: 'softly-tentative' },
      { speaker: 'kenji_office', jp: 'おはようございます。同じ電車ですね、最近。', en: 'Good morning. Same train, lately.', style: 'Salaryman warm professional careful observation, the soft real polite-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'politely-warm' },
      { speaker: 'mei_romantic', jp: 'ですよね。気付いてました。', en: 'Indeed. I noticed.', style: 'Romantic warm soft mild admission, the gentle real friendly-warmth audible, soft real warmth threading throughout delivery throughout.', mood: 'mildly-warm' },
      { speaker: 'kenji_office', jp: 'お仕事、こっちの方面ですか？', en: 'Your work — in this direction?', style: 'Salaryman warm careful gentle inquiry, the soft real polite-curiosity audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-polite' },
      { speaker: 'mei_romantic', jp: 'はい、デザイン会社で。新宿です。', en: 'Yes, at a design firm. Shinjuku.', style: 'Romantic warm sincere casual disclosure, the soft real polite-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'casually-sincere' },
      { speaker: 'kenji_office', jp: 'ああ、私もそっち方面で。', en: 'Ah, I head that way too.', style: 'Salaryman warm friendly easy matching, the soft real adult-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'easily-matching' },
      { speaker: 'mei_romantic', jp: '帰りも、もしかして似た時間ですか？', en: 'And on the way back — similar time?', style: 'Romantic warm careful curious gentle, the soft real real-friendly audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-curious' },
      { speaker: 'kenji_office', jp: '七時前後が多いです。', en: 'Around seven, usually.', style: 'Salaryman warm easy practical sharing, the soft real friendly-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'easily-practical' },
      { speaker: 'mei_romantic', jp: 'また、お会いするかもしれませんね。', en: 'We may meet again, then.', style: 'Romantic warm gentle soft closing observation, the soft real shy-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-closing' }
    ]
  },
  // 253 — ryosuke + asuka, follow-up meeting (medium)
  {
    id: 'conv_00253',
    context: 'A few months after their first parent-teacher meeting. Riku has been quieter at home in a different way; Ryosuke wants Asuka\'s read.',
    purpose: 'parent-teacher coordination continuing — gradual improvement carefully noticed',
    ambient: 'school_meeting_room',
    sound_effects: [],
    target_vocab: ['様子', '良い', '進路', '安心', '報告'],
    cast: ['asuka_teacher', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'お忙しい中、お時間いただいて。', en: 'Thank you for taking time when busy.', style: 'Father warm formal respectful opener, the soft real professional-respect audible, gentle real warmth threading throughout delivery throughout.', mood: 'respectfully-formal' },
      { speaker: 'asuka_teacher', jp: 'いえ、リクさんの様子、お話できればと思って。', en: 'No, I wanted to talk about Riku\'s situation.', style: 'Teacher warm professional gentle opening, the soft real careful-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'professionally-gentle' },
      { speaker: 'ryosuke_dad', jp: 'はい、ぜひ。家でも少し変化を感じています。', en: 'Yes, please. I sense some change at home too.', style: 'Father warm careful sincere observation, the soft real real-parent-attention audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-observing' },
      { speaker: 'asuka_teacher', jp: 'クラスでも、少し明るくなりました。', en: 'In class too, he\'s gotten a little brighter.', style: 'Teacher warm professional sincere sharing, the soft real careful-encouragement audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-sharing' },
      { speaker: 'ryosuke_dad', jp: 'ああ、それは安心しました。', en: 'Ah, that\'s a relief.', style: 'Father warm soft visibly-relieved gratitude, the soft real parent-relief audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-relieved' },
      { speaker: 'asuka_teacher', jp: '進路の話も、自分から相談してくれて。', en: 'About his path, he\'s coming to me on his own.', style: 'Teacher warm professional warm reporting, the soft real real-pleased audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-reporting' },
      { speaker: 'ryosuke_dad', jp: '本当に、ありがたいです。先生のおかげで。', en: 'Truly grateful. Thanks to you.', style: 'Father warm sincere humble gratitude, the soft real real-appreciation audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-humble' },
      { speaker: 'asuka_teacher', jp: 'ご家庭での見守りも、ちゃんと届いてます。', en: 'The watching-over at home — it\'s reaching him.', style: 'Teacher warm gentle generous reflective, the soft real partnership-recognition audible, gentle real warmth throughout delivery throughout.', mood: 'gently-reflecting' }
    ]
  },
  // 254 — goro + yumiko, father-daughter quiet (long)
  {
    id: 'conv_00254',
    context: 'Goro is Yumiko\'s father. She visits him alone on a rare quiet afternoon.',
    purpose: 'adult-daughter and aging father — the quiet beauty of mature parent-child time',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['父', '娘', '静か', '思い出', '時間', '元気'],
    cast: ['goro_grandpa', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'お父さん、ちょっと顔見に来た。', en: 'Dad, came to see your face for a bit.', style: 'Maternal warm soft adult-daughter casual visiting, the soft real grown-warmth audible, gentle real warmth throughout delivery throughout.', mood: 'softly-visiting' },
      { speaker: 'goro_grandpa', jp: 'おう、ゆみこ。よう来た。一人かい？', en: 'Oh, Yumiko. Good of you. Alone?', style: 'Slow grandpa warm gentle surprised pleased, the soft real touched-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-touched' },
      { speaker: 'yumiko_mom', jp: 'うん、たまには一人で来たくて。', en: 'Yeah, sometimes I want to come alone.', style: 'Maternal warm soft adult-daughter disclosure, the soft real warm-need audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-disclosing' },
      { speaker: 'goro_grandpa', jp: 'お父さん、嬉しい。座って、お茶飲もう。', en: 'Dad\'s glad. Sit, let\'s have tea.', style: 'Slow grandpa warm touched gentle hosting, the soft real elder-love audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-hosting' },
      { speaker: 'yumiko_mom', jp: 'ありがとう。最近、お父さんの夢、見たの。', en: 'Thanks. Lately I dreamed of you, dad.', style: 'Maternal warm soft careful disclosure, the soft real adult-daughter intimacy audible, gentle real warmth throughout delivery throughout.', mood: 'softly-intimate' },
      { speaker: 'goro_grandpa', jp: 'ほう、どんな夢だ。', en: 'Oh, what kind of dream?', style: 'Slow grandpa warm gentle curious receiving, the soft real real-attention audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-receiving' },
      { speaker: 'yumiko_mom', jp: '昔の家で、お母さんとお父さんが笑ってた。', en: 'In the old house, you and mom were laughing.', style: 'Maternal warm soft tender memory-sharing, the soft real warm-grief audible, gentle real warmth threading throughout delivery throughout.', mood: 'tenderly-sharing' },
      { speaker: 'goro_grandpa', jp: '…そうか。お母さんも、笑うの好きだったな。', en: '…I see. Your mother loved to laugh.', style: 'Slow grandpa warm tender soft memory-touching, the soft real elder-grief-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-touched' },
      { speaker: 'yumiko_mom', jp: 'そう。あの時間、もう一回欲しい。', en: 'Yeah. Those times — I wish I could have them again.', style: 'Maternal warm soft honest grief-disclosure, the soft real warm-longing audible, gentle real warmth throughout delivery throughout.', mood: 'softly-longing' },
      { speaker: 'goro_grandpa', jp: 'お父さんも、毎日思い出すよ。', en: 'Dad remembers every day too.', style: 'Slow grandpa warm tender shared-grief disclosure, the soft real elder-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'tenderly-sharing' },
      { speaker: 'yumiko_mom', jp: 'お父さん、寂しくない？', en: 'Dad, aren\'t you lonely?', style: 'Maternal warm soft daughter-care careful asking, the soft real real-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-caring' },
      { speaker: 'goro_grandpa', jp: '寂しい時もある。でも、ゆみこが来てくれると、嬉しい。', en: 'Sometimes lonely. But when you come, I\'m happy.', style: 'Slow grandpa warm honest tender disclosure, the soft real elder-vulnerability audible, gentle real warmth throughout delivery throughout.', mood: 'tenderly-honest' },
      { speaker: 'yumiko_mom', jp: 'これからも、もっと来るね。', en: 'I\'ll come more often from now.', style: 'Maternal warm soft tender commitment, the soft real adult-daughter-love audible, gentle real warmth threading throughout delivery throughout.', mood: 'tenderly-committing' },
      { speaker: 'goro_grandpa', jp: '無理せんでいい。元気でいてくれたら、それで十分。', en: 'Don\'t push yourself. Being well — that\'s enough.', style: 'Slow grandpa warm gentle protective generous, the soft real elder-love audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-protective' },
      { speaker: 'yumiko_mom', jp: 'うん。お父さんも、元気でいてね。', en: 'Yes. You stay well too, dad.', style: 'Maternal warm soft tender closing exchange, the soft real adult-daughter-love audible, gentle real warmth throughout delivery throughout.', mood: 'tenderly-closing' }
    ]
  },
  // 255 — hina + naoko, chopsticks (short)
  {
    id: 'conv_00255',
    context: 'Aunt Naoko teaches Hina how to hold chopsticks properly during a quiet dinner.',
    purpose: 'small skill transmission — adult patiently teaching child everyday competence',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['箸', '持つ', '上手', 'ゆっくり', '教える'],
    cast: ['naoko_aunt', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'ひなちゃん、お箸の持ち方、覚えようか。', en: 'Hina-chan, shall we learn chopstick-holding?', style: 'Aunt warm gentle bright child-teaching opener, the soft real warm-pedagogy audible, gentle real warmth throughout delivery throughout.', mood: 'gently-bright' },
      { speaker: 'hina_child', jp: 'うん！教えて教えて！', en: 'Yes! Teach me, teach me!', style: 'High child bright eager-burst, the soft real childish-energy audible, gentle real warmth threading throughout delivery throughout.', mood: 'eagerly-bright' },
      { speaker: 'naoko_aunt', jp: 'まず、上のお箸をこうやって持つの。', en: 'First, hold the upper chopstick like this.', style: 'Aunt warm gentle teaching-demonstrating, the soft real careful-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-demonstrating' },
      { speaker: 'hina_child', jp: 'こう？むずかしい！', en: 'Like this? It\'s hard!', style: 'High child warm focused careful trying, the soft real real-effort audible, gentle real warmth threading throughout delivery throughout.', mood: 'focused-trying' },
      { speaker: 'naoko_aunt', jp: 'ゆっくりで大丈夫。すごく上手。', en: 'Slow is fine. Really well done.', style: 'Aunt warm gentle reassuring praise, the soft real warm-encouragement audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-praising' },
      { speaker: 'hina_child', jp: 'やった！見て、できたよ！', en: 'Yay! Look, I did it!', style: 'High child bright triumphant joy, the soft real childish-success audible, gentle real warmth threading throughout delivery throughout.', mood: 'triumphantly-bright' }
    ]
  },
  // 256 — daichi + ren + sakura, karaoke (3-speaker, long)
  {
    id: 'conv_00256',
    context: 'Three young people at karaoke. Sakura nervous, Ren chill, Daichi enthusiastic. They\'re unwinding after exams.',
    purpose: 'three-young-voice nightlife — easy across-age friendship',
    ambient: 'karaoke_room',
    sound_effects: [],
    target_vocab: ['歌う', '楽しい', '友達', '好き', '番'],
    cast: ['daichi_kansai', 'ren_uni', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'よっしゃ！カラオケや！誰から歌う？', en: 'Alright! Karaoke! Who sings first?', style: 'Kansai warm bright energetic gathering, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'brightly-energetic' },
      { speaker: 'ren_uni', jp: '俺は最後でいいや。お先どうぞ。', en: 'I\'ll go last. You go first.', style: 'University student warm easy chill yielding, the soft real laid-back warmth audible, gentle real warmth throughout delivery throughout.', mood: 'easily-chill' },
      { speaker: 'sakura_teen', jp: 'えー、私、歌うの恥ずかしい…', en: 'Eh, I\'m embarrassed to sing…', style: 'Teen warm soft shy nervous disclosure, the soft real adolescent-shyness audible, gentle real warmth throughout delivery throughout.', mood: 'softly-shy' },
      { speaker: 'daichi_kansai', jp: 'ほな、わいが先にいくわ。じゃーん！', en: 'Then, I\'ll go first. Tada!', style: 'Kansai warm bright generous leading, the regional swing audible in the easy energy, soft real warmth throughout delivery throughout.', mood: 'brightly-leading' },
      { speaker: 'sakura_teen', jp: 'うわ、上手！', en: 'Wow, good!', style: 'Teen warm bright sincere surprised appreciation, the soft real real-admiration audible, gentle real warmth throughout delivery throughout.', mood: 'brightly-admiring' },
      { speaker: 'ren_uni', jp: 'だいちさん、めっちゃ歌うまいっすね。', en: 'Daichi-san, you\'re seriously good.', style: 'University student warm casual genuine praise, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'casually-genuine' },
      { speaker: 'daichi_kansai', jp: 'えへへ、好きやから、ね。さくらちゃん、次行こ。', en: 'Hehe, because I love it. Sakura, your turn next.', style: 'Kansai warm bright pleased self-deprecating then directing, the soft real warm-leadership audible, gentle real warmth throughout.', mood: 'warmly-directing' },
      { speaker: 'sakura_teen', jp: 'えー、急にハードル上がった。', en: 'Eh, the bar just shot up suddenly.', style: 'Teen warm soft laughing comedic complaint, the soft real warm-shyness audible, gentle real warmth threading throughout delivery throughout.', mood: 'comically-shy' },
      { speaker: 'ren_uni', jp: '気にすんな、楽しめば勝ち。', en: 'Don\'t mind, if you have fun you win.', style: 'University student warm easy supportive wisdom, the soft real laid-back warmth audible, gentle real warmth throughout delivery throughout.', mood: 'easily-supportive' },
      { speaker: 'sakura_teen', jp: 'うん…じゃあ、好きな曲、入れる。', en: 'Yeah… then, I\'ll put in a song I love.', style: 'Teen warm soft brave gentle resolution, the soft real warm-courage audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-brave' },
      { speaker: 'daichi_kansai', jp: 'おっ、何の曲？', en: 'Oh, which song?', style: 'Kansai warm bright eager curious, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'brightly-curious' },
      { speaker: 'sakura_teen', jp: '友達と昔よく聴いてた曲。', en: 'A song my friend and I used to listen to.', style: 'Teen warm soft personal meaningful sharing, the soft real warm-memory audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-personal' },
      { speaker: 'ren_uni', jp: 'いいね。じゃあ、聞かせて。', en: 'Nice. Then, let me hear.', style: 'University student warm easy attentive opening, the soft real warm-listening audible, gentle real warmth threading throughout delivery throughout.', mood: 'easily-attentive' },
      { speaker: 'daichi_kansai', jp: '俺ら、応援団やで！', en: 'We\'re your cheer squad!', style: 'Kansai warm bright enthusiastic supportive declaration, the regional swing carrying real warmth, gentle real warmth throughout delivery.', mood: 'brightly-supporting' },
      { speaker: 'sakura_teen', jp: 'ふふ、ありがとう。じゃあ行きます！', en: 'Hehe, thanks. Here I go!', style: 'Teen warm soft laughing committed launching, the soft real warm-courage audible, gentle real warmth threading throughout delivery throughout.', mood: 'committedly-warm' }
    ]
  },
  // 257 — saito + ren, sleep issue (medium)
  {
    id: 'conv_00257',
    context: 'Ren visits Dr. Saito because he can\'t sleep — exams have been brutal. The doctor handles the young adult carefully.',
    purpose: 'young-adult mental health visit — practical kindness for non-acute distress',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['眠る', '不安', '仕事', '相談', '生活'],
    cast: ['saito_doctor', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'れんさん、今日はどうしましたか。', en: 'Ren-san, what brings you in today?', style: 'Doctor warm professional gentle opener, the soft real careful-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'professionally-gentle' },
      { speaker: 'ren_uni', jp: 'なんか、最近、眠れなくて。', en: 'Somehow, lately, I can\'t sleep.', style: 'University student warm soft careful vulnerable disclosure, the soft real honest-distress audible, gentle real warmth throughout delivery.', mood: 'softly-vulnerable' },
      { speaker: 'saito_doctor', jp: 'いつ頃から？何か思い当たることは？', en: 'Since when? Anything you can think of?', style: 'Doctor warm professional careful clinical inquiry, the soft real real-attention audible, gentle real warmth threading throughout delivery.', mood: 'carefully-clinical' },
      { speaker: 'ren_uni', jp: 'テスト前から、ずっと。不安で。', en: 'Since before exams, the whole time. Anxious.', style: 'University student warm soft honest careful disclosure, the soft real real-vulnerable audible, gentle real warmth throughout delivery throughout.', mood: 'honestly-vulnerable' },
      { speaker: 'saito_doctor', jp: 'なるほど。生活リズムは、どうですか？', en: 'I see. And your daily rhythm — how is it?', style: 'Doctor warm gentle pivot clinical practical, the soft real expert-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-pivoting' },
      { speaker: 'ren_uni', jp: '夜中まで起きてる。スマホも見ちゃう。', en: 'Up until midnight. Looking at the phone too.', style: 'University student warm honest casual confession, the soft real real-honesty audible, gentle real warmth threading throughout delivery throughout.', mood: 'honestly-confessing' },
      { speaker: 'saito_doctor', jp: 'まずは、寝る一時間前は、スマホやめてみよう。', en: 'First, let\'s stop the phone one hour before bed.', style: 'Doctor warm gentle practical specific advice, the soft real expert-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-practical' },
      { speaker: 'ren_uni', jp: 'やってみます。相談できて、ちょっと楽になった。', en: 'I\'ll try. Talking with you, I feel a little lighter.', style: 'University student warm soft sincere committed-relieved, the soft real touched-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-relieved' },
      { speaker: 'saito_doctor', jp: 'いつでも来てください。一人で抱えないで。', en: 'Come anytime. Don\'t carry it alone.', style: 'Doctor warm gentle generous closing wisdom, the soft real real-mentor warmth audible, gentle real warmth threading throughout delivery.', mood: 'gently-generous' }
    ]
  },
  // 258 — mrs_mori + sho, shy boy (short)
  {
    id: 'conv_00258',
    context: 'Mrs. Mori meets Sho for the first time at her doorstep — he\'s helping his mother deliver something.',
    purpose: 'small intergenerational warming — older neighbor kindly greeting a shy small child',
    ambient: 'genkan_afternoon',
    sound_effects: [],
    target_vocab: ['隣', '挨拶', '優しい', '子供', '静か'],
    cast: ['mrs_mori_neighbor', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: 'あら、こんにちは。可愛いお手伝いさん。', en: 'Oh, hello. What a cute little helper.', style: 'Neighbor warm gentle bright child-warm welcoming, the soft real elder-warmth audible, gentle real warmth throughout delivery throughout.', mood: 'gently-bright' },
      { speaker: 'sho_child', jp: 'こ…こんにちは。', en: 'H…hello.', style: 'Tiny six-year-old soft small careful nervous greeting, the small real wanting-to-be-polite audible, soft small warmth throughout delivery.', mood: 'shyly-polite' },
      { speaker: 'mrs_mori_neighbor', jp: 'お母さんの手伝い、えらいねえ。', en: 'Helping your mother — what a good child.', style: 'Neighbor warm gentle praise warm, the soft real elder-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-praising' },
      { speaker: 'sho_child', jp: '…うん。', en: '…Mm.', style: 'Tiny six-year-old soft small careful gentle assent, the small real warming-acceptance audible, soft small warmth throughout delivery.', mood: 'softly-warming' },
      { speaker: 'mrs_mori_neighbor', jp: 'いつでも遊びに来ていいのよ。', en: 'You can come over anytime to play.', style: 'Neighbor warm gentle generous extending invitation, the soft real elder-openness audible, gentle real warmth throughout delivery throughout.', mood: 'gently-extending' },
      { speaker: 'sho_child', jp: '…ありがとうございます。', en: '…Thank you very much.', style: 'Tiny six-year-old soft small careful polite-real, the small real earnest gratitude audible, soft small warmth throughout delivery.', mood: 'carefully-polite' }
    ]
  },
  // 259 — hiroshi_boss + yumiko, school event (medium)
  {
    id: 'conv_00259',
    context: 'Hiroshi the boss is attending a school event where his own grandson goes — Yumiko\'s son is at the same school.',
    purpose: 'workplace identity meeting parent identity — boss-as-grandpa across casual moment',
    ambient: 'school_open_house',
    sound_effects: [],
    target_vocab: ['学校', '行事', '仕事', '子供', '大変'],
    cast: ['hiroshi_boss', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: '田中さん、こんにちは。お孫さんですか？', en: 'Tanaka-san, hello. Your grandchild?', style: 'Maternal warm gentle surprised recognition, the soft real polite-pleased audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-recognizing' },
      { speaker: 'hiroshi_boss', jp: 'ええ、孫の参観日で。野田さんもですか？', en: 'Yes, for my grandchild\'s open house. Noda-san also?', style: 'Boss warm authority-softened community-warm response, the soft real off-duty warmth audible, gentle real warmth throughout delivery.', mood: 'warmly-soft' },
      { speaker: 'yumiko_mom', jp: 'はい、息子の。意外なところでお会いしますね。', en: 'Yes, my son\'s. We meet in unexpected places.', style: 'Maternal warm gentle warm easy observation, the soft real polite-friendly audible, gentle real warmth threading throughout delivery throughout.', mood: 'easily-warm' },
      { speaker: 'hiroshi_boss', jp: '子供の行事は、楽しみで。仕事も忘れる。', en: 'Children\'s events are fun. I even forget work.', style: 'Boss warm easy off-duty soft sharing, the soft real grandpa-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'easily-personal' },
      { speaker: 'yumiko_mom', jp: 'わかります。私も今日は仕事忘れます。', en: 'I understand. Today I forget work too.', style: 'Maternal warm gentle matching warm sharing, the soft real parent-solidarity audible, gentle real warmth threading throughout delivery.', mood: 'gently-matching' },
      { speaker: 'hiroshi_boss', jp: '子育てって、本当に大変ですよね。', en: 'Raising kids is really hard, isn\'t it.', style: 'Boss warm sincere personal observation, the soft real real-recognition audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '大変ですけど、こうして見ると、可愛いですね。', en: 'It\'s hard, but seeing them like this, they\'re cute.', style: 'Maternal warm gentle balanced reflection, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-balanced' },
      { speaker: 'hiroshi_boss', jp: '本当に。じゃあ、また会社で。', en: 'Truly. Well, see you at the office.', style: 'Boss warm sincere casual closing transition, the soft real warm-acknowledging audible, gentle real warmth throughout delivery throughout.', mood: 'casually-warm' }
    ]
  },
  // 260 — sachiko + naoko + yumiko, osechi prep (3-speaker, long)
  {
    id: 'conv_00260',
    context: 'New Year\'s Eve. The three women of the family — grandmother, mother, aunt — are preparing osechi together.',
    purpose: 'three-generation women kitchen ritual — passing tradition through hands',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['正月', '料理', '準備', '一緒', '家族', '伝える'],
    cast: ['sachiko_grandma', 'yumiko_mom', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: '今年も、こうやって、みんなで作れて嬉しいわ。', en: 'This year too, glad we can make it all together.', style: 'Soft grandmother warm tender opening sincere, the soft real elder-love audible, gentle real warmth threading throughout delivery throughout.', mood: 'tenderly-opening' },
      { speaker: 'yumiko_mom', jp: 'お母さん、今年も健康で良かった。', en: 'Mother, I\'m glad you\'re healthy again this year.', style: 'Maternal warm soft tender adult-daughter sincere, the soft real warm-gratitude audible, gentle real warmth throughout delivery throughout.', mood: 'tenderly-sincere' },
      { speaker: 'naoko_aunt', jp: '昔と変わらないわね、この光景。', en: 'This scene — unchanged from old days.', style: 'Aunt warm soft tender warm reflection, the soft real shared-memory audible, gentle real warmth threading throughout delivery throughout.', mood: 'tenderly-reflecting' },
      { speaker: 'sachiko_grandma', jp: '黒豆、ちゃんと光らせなきゃね。', en: 'Black beans — gotta make them shine properly.', style: 'Soft grandmother warm gentle practical wisdom, the soft real elder-knowledge audible, gentle real warmth threading throughout delivery throughout.', mood: 'practically-wise' },
      { speaker: 'yumiko_mom', jp: '時間かかるけど、頑張ろう。', en: 'It takes time, but let\'s do it.', style: 'Maternal warm gentle committed positive, the soft real adult-daughter warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-committed' },
      { speaker: 'naoko_aunt', jp: '私、卵焼き担当でいい？', en: 'Can I take charge of the tamagoyaki?', style: 'Aunt warm gentle volunteering specifying, the soft real cooperative-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-volunteering' },
      { speaker: 'sachiko_grandma', jp: 'もちろん。なおこの卵焼きが、一番美味しいから。', en: 'Of course. Naoko\'s tamagoyaki is the best.', style: 'Soft grandmother warm gentle sincere praise, the soft real elder-love audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-praising' },
      { speaker: 'naoko_aunt', jp: 'もう、お母さん、褒めすぎ。', en: 'Aww, mother, too much praise.', style: 'Aunt warm gentle touched-shy laughing, the soft real touched-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-touched' },
      { speaker: 'yumiko_mom', jp: '私も習いたい、なおこさんの卵焼き。', en: 'I want to learn too, Naoko\'s tamagoyaki.', style: 'Maternal warm gentle eager sincere disclosure, the soft real adult-sister warmth audible, gentle real warmth threading throughout delivery.', mood: 'gently-eager' },
      { speaker: 'naoko_aunt', jp: '今度、一緒に作りましょう。教える。', en: 'Sometime, let\'s make it together. I\'ll teach.', style: 'Aunt warm gentle generous extending warm, the soft real sister-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-generous' },
      { speaker: 'sachiko_grandma', jp: 'こうやって、世代を超えて伝わるのが嬉しい。', en: 'Passing across generations like this — it\'s wonderful.', style: 'Soft grandmother warm philosophical tender elder-wisdom, the soft real deep-warmth audible, gentle real warmth throughout delivery.', mood: 'philosophically-tender' },
      { speaker: 'yumiko_mom', jp: 'お母さんが繋いでくれたから、ね。', en: 'Because you\'ve connected it, mother.', style: 'Maternal warm soft tender adult-daughter recognition, the soft real deep-respect audible, gentle real warmth throughout delivery throughout.', mood: 'tenderly-recognizing' },
      { speaker: 'sachiko_grandma', jp: 'みんなで一緒だから、続けられるのよ。', en: 'Because we\'re all together, we can continue.', style: 'Soft grandmother warm tender humble redirecting, the soft real elder-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'tenderly-humble' },
      { speaker: 'naoko_aunt', jp: '来年も、また三人で。', en: 'Next year too, again, the three of us.', style: 'Aunt warm soft tender forward-looking promise, the soft real shared-future audible, gentle real warmth threading throughout delivery throughout.', mood: 'tenderly-promising' }
    ]
  },
  // 261 — tatsuya + kenji (medium)
  {
    id: 'conv_00261',
    context: 'Tatsuya is in the city for a wedding. Kenji is invited and they\'re seated at the same table; small Tatsuya-Kenji rapport.',
    purpose: 'two adult men from different worlds — small civil warmth across cultures',
    ambient: 'wedding_reception',
    sound_effects: [],
    target_vocab: ['仕事', '田舎', '上司', '紹介', '大事'],
    cast: ['tatsuya_country', 'kenji_office'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'はじめまして、田中と申します。', en: 'Nice to meet you. I\'m Tanaka.', style: 'Salaryman warm formal polite introduction, the soft real professional-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'formally-polite' },
      { speaker: 'tatsuya_country', jp: 'おう、よろしく。達也です。田舎から来てます。', en: 'Hey, nice to meet you. Tatsuya. Come from the country.', style: 'Country gruff warm friendly direct introduction, the soft real rural-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gruffly-friendly' },
      { speaker: 'kenji_office', jp: '農業されてるんですか？', en: 'Are you in farming?', style: 'Salaryman warm polite genuine curiosity, the soft real professional-engagement audible, gentle real warmth threading throughout delivery throughout.', mood: 'politely-curious' },
      { speaker: 'tatsuya_country', jp: 'うん、野菜中心に。先祖代々の畑で。', en: 'Yeah, mostly vegetables. Generations-old field.', style: 'Country gruff warm proud humble sharing, the soft real rural-heritage audible, gentle real warmth threading throughout delivery throughout.', mood: 'gruffly-proud' },
      { speaker: 'kenji_office', jp: 'すごいですね。私には想像つかない仕事です。', en: 'That\'s amazing. Work I can\'t even imagine.', style: 'Salaryman warm sincere genuine respect, the soft real real-appreciation audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-respectful' },
      { speaker: 'tatsuya_country', jp: 'いやいや、毎日同じことや。会社員のほうが大事な仕事してる。', en: 'No no, same thing every day. Office workers do more important work.', style: 'Country gruff warm humble redirecting, the soft real rural-modesty audible, gentle real warmth threading throughout delivery throughout.', mood: 'gruffly-humble' },
      { speaker: 'kenji_office', jp: 'いえ、食を作ることほど、大事なものはないですよ。', en: 'No, nothing is more important than making food.', style: 'Salaryman warm sincere principled respect, the soft real real-conviction audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-principled' },
      { speaker: 'tatsuya_country', jp: 'ふっ、ええ人や、あんた。', en: 'Heh, you\'re a good man.', style: 'Country gruff warm touched gentle observation, the soft real real-recognition audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-touched' }
    ]
  },
  // 262 — riku + sakura + ren, study session (3-speaker, medium)
  {
    id: 'conv_00262',
    context: 'Three young people studying for entrance exams at the library together. Ren is the oldest, the others are high-schoolers.',
    purpose: 'study-group warmth — peer mutual aid across small age difference',
    ambient: 'library_afternoon',
    sound_effects: [],
    target_vocab: ['試験', '勉強', '一緒', '集まる', '助かる'],
    cast: ['ren_uni', 'sakura_teen', 'riku_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'みんな、進捗どんな感じ？', en: 'Everyone, how\'s your progress?', style: 'University student warm easy older-peer opening, the soft real warm-leadership audible, gentle real warmth threading throughout delivery throughout.', mood: 'easily-leading' },
      { speaker: 'sakura_teen', jp: '数学が、まだ全然できなくて。', en: 'I still can\'t do math at all.', style: 'Teen warm soft honest worried sharing, the soft real real-anxiety audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-worried' },
      { speaker: 'riku_teen', jp: '俺も。関数のとこ、わかんない。', en: 'Me too. I don\'t get the functions part.', style: 'Teen warm honest casual matching, the soft real solidarity-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'casually-matching' },
      { speaker: 'ren_uni', jp: 'じゃあ、関数、一緒にやろうか。', en: 'Then, let\'s do functions together.', style: 'University student warm gentle leadership offer, the soft real older-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-leading' },
      { speaker: 'sakura_teen', jp: 'いいですか？マジ助かる。', en: 'Really? It really saves me.', style: 'Teen warm soft sincere grateful, the soft real real-relief audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-grateful' },
      { speaker: 'riku_teen', jp: 'お願いします。', en: 'Yes please.', style: 'Teen warm formal sincere brief, the soft real respect-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'respectfully-warm' },
      { speaker: 'ren_uni', jp: '俺も、教えると自分の復習になる。', en: 'For me too, teaching is my own review.', style: 'University student warm easy generous reframing, the soft real warm-honesty audible, gentle real warmth threading throughout delivery throughout.', mood: 'easily-generous' },
      { speaker: 'sakura_teen', jp: 'こうやって集まれて、安心する。', en: 'Gathering like this — I feel reassured.', style: 'Teen warm soft sincere relieved sharing, the soft real warm-belonging audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-belonging' },
      { speaker: 'riku_teen', jp: 'うん、一人だと折れる。', en: 'Yeah, alone you break.', style: 'Teen warm soft honest casual sharing, the soft real real-vulnerability audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-honest' }
    ]
  },
  // 263 — takeda + sho, returning thanks (short)
  {
    id: 'conv_00263',
    context: 'Sho returns to the koban with his mother\'s help to thank Officer Takeda — the bird came back.',
    purpose: 'small follow-up of civic kindness — child returning to thank an adult professional',
    ambient: 'koban_afternoon',
    sound_effects: [],
    target_vocab: ['鳥', '帰る', 'ありがとう', '嬉しい', 'お礼'],
    cast: ['sho_child', 'takeda_officer'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'お巡りさん…ピーちゃん、帰ってきた。', en: 'Officer… Pii-chan came back.', style: 'Tiny six-year-old soft careful happy reporting, the small real touched-warmth audible, soft small joy threading throughout delivery.', mood: 'softly-reporting' },
      { speaker: 'takeda_officer', jp: 'おお、本当に！良かったねえ。', en: 'Oh, really! That\'s wonderful.', style: 'Officer warm gentle bright sincere relieved-pleased, the soft real public-warmth audible, gentle real warmth threading throughout delivery.', mood: 'brightly-relieved' },
      { speaker: 'sho_child', jp: '…ありがとうございます。お礼に来た。', en: '…Thank you very much. I came to say thanks.', style: 'Tiny six-year-old soft careful earnest gratitude, the small real warm-thanks audible, soft small warmth threading throughout delivery.', mood: 'carefully-grateful' },
      { speaker: 'takeda_officer', jp: 'えらいねえ。わざわざありがとう。', en: 'What a good boy. Thank you for coming all this way.', style: 'Officer warm gentle touched bright praise, the soft real real-touched audible, gentle real warmth threading throughout delivery.', mood: 'warmly-touched' },
      { speaker: 'sho_child', jp: 'お巡りさん、優しかった。嬉しい。', en: 'Officer was kind. I\'m happy.', style: 'Tiny six-year-old soft genuine warm-disclosure, the small real warmth-sharing audible, soft small joy threading throughout delivery.', mood: 'softly-disclosing' },
      { speaker: 'takeda_officer', jp: 'こちらこそ。また来てね。', en: 'And I, glad. Come again.', style: 'Officer warm gentle generous closing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-closing' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_014)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 264 — kenji + yuki, important client meeting (long, business N3)
  {
    id: 'conv_00264',
    context: 'A high-stakes client meeting. Kenji and Yuki are presenting a proposal together; the senior client is skeptical.',
    purpose: 'workplace formal pressure — two colleagues navigating a difficult business meeting',
    ambient: 'meeting_room',
    sound_effects: [],
    target_vocab: ['提案', '検討', '確認', '判断', '信頼', '機会'],
    cast: ['kenji_office', 'yuki_office'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'では、改めまして、ご提案させていただきます。', en: 'Now then, allow me to present our proposal.', style: 'Earnest salaryman formal professional opener, the careful weighted formality audible, soft real composure threading throughout delivery.', mood: 'formally-composed' },
      { speaker: 'yuki_office', jp: 'よろしくお願いいたします。', en: 'Please.', style: 'Office woman warm formal supportive brief, the soft real careful-composure audible, gentle real warmth threading throughout delivery throughout.', mood: 'formally-supportive' },
      { speaker: 'kenji_office', jp: 'こちらが、現状の課題と、それに対する解決案でございます。', en: 'These are the current challenges and our proposed solutions.', style: 'Salaryman warm formal precise structured delivery, the soft real professional-clarity audible, gentle real composure throughout delivery.', mood: 'preciselystructured' },
      { speaker: 'yuki_office', jp: '特に、こちらの点について、ご検討いただければと。', en: 'Particularly, we hope you\'ll consider this point.', style: 'Office woman warm formal careful emphasis, the soft real careful-respect audible, gentle real composure threading throughout delivery.', mood: 'carefully-emphasizing' },
      { speaker: 'kenji_office', jp: 'コストはやや上がりますが、長期的には効果が出る判断です。', en: 'Costs rise slightly, but long-term the effect makes it worthwhile.', style: 'Salaryman warm formal confident justifying, the soft real professional-conviction audible, gentle real composure throughout delivery.', mood: 'confidently-justifying' },
      { speaker: 'yuki_office', jp: '具体的な数字は、こちらの資料にまとめてあります。', en: 'Concrete numbers are summarized in this document.', style: 'Office woman warm formal practical supporting, the soft real careful-thorough audible, gentle real composure threading throughout delivery.', mood: 'practically-supporting' },
      { speaker: 'kenji_office', jp: 'ご確認のうえ、判断いただければ幸いです。', en: 'Upon confirmation, your judgment would be appreciated.', style: 'Salaryman warm formal humble request, the soft real professional-respect audible, gentle real composure threading throughout delivery throughout.', mood: 'humbly-requesting' },
      { speaker: 'yuki_office', jp: '何か気になる点がございましたら、お聞かせください。', en: 'If there are any points of concern, please let us know.', style: 'Office woman warm formal opening dialogue, the soft real professional-care audible, gentle real composure threading throughout delivery.', mood: 'professionally-opening' },
      { speaker: 'kenji_office', jp: 'ご質問、何でもお答えします。', en: 'Any questions, we\'ll answer anything.', style: 'Salaryman warm formal confident open, the soft real professional-readiness audible, gentle real composure threading throughout delivery throughout.', mood: 'confidently-open' },
      { speaker: 'yuki_office', jp: '今回の案件、私たちにお任せいただければ。', en: 'This project, if you would entrust it to us…', style: 'Office woman warm formal sincere requesting, the soft real professional-conviction audible, gentle real composure threading throughout delivery.', mood: 'sincerely-requesting' },
      { speaker: 'kenji_office', jp: 'お客様の信頼に応えられるよう、全力を尽くします。', en: 'To meet your trust, we\'ll give our utmost.', style: 'Salaryman warm formal weighted commitment, the soft real professional-honor audible, gentle real composure threading throughout delivery throughout.', mood: 'weightedly-committing' },
      { speaker: 'yuki_office', jp: 'こういう機会をいただき、本当にありがとうございます。', en: 'For this opportunity, truly thank you.', style: 'Office woman warm formal sincere closing gratitude, the soft real professional-respect audible, gentle real composure threading throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'kenji_office', jp: 'ぜひ、前向きにご検討くださいませ。', en: 'Please consider it positively.', style: 'Salaryman warm formal hopeful final extending, the soft real professional-care audible, gentle real composure threading throughout delivery throughout.', mood: 'hopefully-formal' }
    ]
  },
  // 265 — sakura + yumiko, anxiety follow-up at home (medium)
  {
    id: 'conv_00265',
    context: 'Sakura tells her mother Yumiko about the anxiety attack at Dr. Saito\'s office. Yumiko listens.',
    purpose: 'mother-daughter careful emotional opening — teen disclosing real mental-health struggle',
    ambient: 'kitchen_evening',
    sound_effects: [],
    target_vocab: ['心配', '不安', '相談', '話す', '受け止める', '一緒'],
    cast: ['yumiko_mom', 'sakura_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: 'お母さん…ちょっと、話してもいい？', en: 'Mom… can I talk to you a little?', style: 'Teen warm soft careful brave opener, the soft real wanting-to-trust audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-brave' },
      { speaker: 'yumiko_mom', jp: 'うん、いいよ。座って。', en: 'Yes, of course. Sit down.', style: 'Maternal warm gentle careful inviting, the soft real real-attentive audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-inviting' },
      { speaker: 'sakura_teen', jp: '実は、先生のとこ、行ってきた。不安で。', en: 'Actually, I went to the doctor. Anxious.', style: 'Teen warm soft vulnerable real disclosure, the soft real real-courage audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-vulnerable' },
      { speaker: 'yumiko_mom', jp: '…そうだったの。話してくれて、ありがとう。', en: '…I see. Thank you for telling me.', style: 'Maternal warm soft careful receiving-thanks, the soft real real-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-receiving' },
      { speaker: 'sakura_teen', jp: '受験のこと、ずっと一人で考えてて。', en: 'About exams, I\'ve been thinking alone the whole time.', style: 'Teen warm soft honest vulnerable disclosure, the soft real real-loneliness audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-disclosing' },
      { speaker: 'yumiko_mom', jp: 'お母さんに、もっと話してね。', en: 'Talk to your mother more, okay.', style: 'Maternal warm gentle careful encouraging, the soft real real-extending audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-encouraging' },
      { speaker: 'sakura_teen', jp: '心配かけたくなくて…。', en: 'I didn\'t want to worry you…', style: 'Teen warm soft careful vulnerable real reason, the soft real real-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-vulnerable' },
      { speaker: 'yumiko_mom', jp: '心配かけてもいいの。お母さんは、ちゃんと受け止めるよ。', en: 'It\'s okay to worry me. Your mother properly takes it.', style: 'Maternal warm firm gentle reassurance, the soft real real-strong-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'firmly-gentle' },
      { speaker: 'sakura_teen', jp: 'うん…ありがとう、お母さん。', en: 'Yeah… thanks, mom.', style: 'Teen warm soft sincere relieved closing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-relieved' }
    ]
  },
  // 266 — ryosuke + ren, uncle perspective (medium)
  {
    id: 'conv_00266',
    context: 'Ren visits his Uncle Ryosuke about whether to stay in his current major. The uncle, who switched careers once, offers honest perspective.',
    purpose: 'older-uncle career perspective — adult sharing real struggle and resolution',
    ambient: 'apartment_evening',
    sound_effects: [],
    target_vocab: ['経験', '将来', '選択', '責任', '変える', '勇気'],
    cast: ['ryosuke_dad', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'おじさん、ちょっと相談してもいいですか。', en: 'Uncle, can I consult about something?', style: 'University student warm careful respectful opener, the soft real real-deep-respect audible, gentle real warmth threading throughout delivery.', mood: 'carefully-respectful' },
      { speaker: 'ryosuke_dad', jp: 'もちろん。どうした？', en: 'Of course. What\'s up?', style: 'Father warm gentle open uncle-receiving, the soft real real-listening audible, gentle real warmth threading throughout delivery throughout.', mood: 'openly-receiving' },
      { speaker: 'ren_uni', jp: '今の専攻、自分に合ってないかもしれなくて。', en: 'My current major may not fit me.', style: 'University student warm soft honest vulnerable real disclosure, the soft real real-doubt audible, gentle real warmth threading throughout delivery.', mood: 'honestly-vulnerable' },
      { speaker: 'ryosuke_dad', jp: 'うん。途中で変えるのは、勇気がいる。', en: 'Yes. Changing midway takes courage.', style: 'Father warm gentle understanding wise observation, the soft real real-mentor wisdom audible, gentle real warmth throughout delivery.', mood: 'gently-wise' },
      { speaker: 'ren_uni', jp: 'おじさん、転職したって聞いて…。', en: 'I heard you switched careers, uncle…', style: 'University student warm soft careful real seeking, the soft real real-curiosity audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-seeking' },
      { speaker: 'ryosuke_dad', jp: 'うん、三十手前で。怖かったよ、正直。', en: 'Yes, just before thirty. I was scared, honestly.', style: 'Father warm honest weighted vulnerable sharing, the soft real real-disclosure audible, gentle real warmth threading throughout delivery throughout.', mood: 'honestly-weighted' },
      { speaker: 'ren_uni', jp: '後悔とか、なかったですか。', en: 'No regrets at all?', style: 'University student warm sincere genuine real question, the soft real real-curious audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-questioning' },
      { speaker: 'ryosuke_dad', jp: 'なかった。自分で選んだ責任は、自分で負うって決めて。', en: 'No. I decided to bear the responsibility myself.', style: 'Father warm firm honest weighted wisdom, the soft real real-deep-respect audible, gentle real warmth threading throughout delivery throughout.', mood: 'firmly-wise' },
      { speaker: 'ren_uni', jp: 'なるほど…。少し、整理できそう。', en: 'I see… I might be able to sort it out a bit.', style: 'University student warm soft absorbing thoughtful closing, the soft real real-processing audible, gentle real warmth throughout delivery.', mood: 'thoughtfully-absorbing' }
    ]
  },
  // 267 — asuka + hiroshi_boss, PTA meeting (medium)
  {
    id: 'conv_00267',
    context: 'A PTA committee meeting. Asuka chairs; Hiroshi the boss attends as a grandparent representative.',
    purpose: 'formal community meeting — adult professionals coordinating respectfully',
    ambient: 'school_meeting_room',
    sound_effects: [],
    target_vocab: ['会議', '意見', '報告', '提案', '決定', '協力'],
    cast: ['asuka_teacher', 'hiroshi_boss'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: '本日はお集まりいただき、ありがとうございます。', en: 'Thank you for gathering today.', style: 'Teacher warm formal professional chair-opener, the soft real careful-respect audible, gentle real composure threading throughout delivery.', mood: 'formally-opening' },
      { speaker: 'hiroshi_boss', jp: 'お招きいただき、こちらこそ。', en: 'Thank you for the invitation, on my side.', style: 'Boss warm measured formal civil-respectful, the soft real authority-soft audible, gentle real composure threading throughout delivery throughout.', mood: 'measuredly-civil' },
      { speaker: 'asuka_teacher', jp: '今回は、運動会の準備について、ご意見をいただきたく。', en: 'Today, we\'d like your opinions on sports day prep.', style: 'Teacher warm formal professional clear-directing, the soft real careful-respect audible, gentle real composure threading throughout delivery.', mood: 'formally-directing' },
      { speaker: 'hiroshi_boss', jp: 'なるほど。報告書、拝見しました。', en: 'I see. I\'ve looked over the report.', style: 'Boss warm measured formal acknowledging, the soft real careful-prepared audible, gentle real composure threading throughout delivery throughout.', mood: 'measuredly-acknowledging' },
      { speaker: 'asuka_teacher', jp: '何か気になる点、ございますか。', en: 'Are there any points of concern?', style: 'Teacher warm formal professional opening dialogue, the soft real careful-respect audible, gentle real composure threading throughout delivery.', mood: 'formally-opening' },
      { speaker: 'hiroshi_boss', jp: '一つご提案、よろしいでしょうか。', en: 'May I make one proposal?', style: 'Boss warm formal courteous careful requesting, the soft real careful-respect audible, gentle real composure threading throughout delivery throughout.', mood: 'courteously-formal' },
      { speaker: 'asuka_teacher', jp: 'はい、ぜひお聞かせください。', en: 'Yes, please share.', style: 'Teacher warm formal professional inviting, the soft real respectful-attention audible, gentle real composure threading throughout delivery throughout.', mood: 'formally-inviting' },
      { speaker: 'hiroshi_boss', jp: 'お年寄りが参加できる種目を、ぜひ。', en: 'Events the elderly can join — please, by all means.', style: 'Boss warm measured formal heartfelt suggestion, the soft real real-care audible, gentle real composure threading throughout delivery throughout.', mood: 'heartedly-formal' },
      { speaker: 'asuka_teacher', jp: '素晴らしいご提案。検討させていただきます。', en: 'A splendid proposal. We\'ll consider it.', style: 'Teacher warm formal warm appreciative committed, the soft real real-pleased audible, gentle real composure threading throughout delivery.', mood: 'warmly-committed' }
    ]
  },
  // 268 — daichi + tatsuya + hiroshi_boss, multi-region business chat (3-speaker, long)
  {
    id: 'conv_00268',
    context: 'Tatsuya is selling his rural produce to a city restaurant. Daichi handles the introduction; Hiroshi (the boss) is a major customer.',
    purpose: 'three-way business meeting across worlds — country producer meeting urban buyer through Kansai connector',
    ambient: 'restaurant_office',
    sound_effects: [],
    target_vocab: ['取引', '提案', '品質', '信頼', '機会', '農家'],
    cast: ['daichi_kansai', 'tatsuya_country', 'hiroshi_boss'],
    frequency_tier: 4,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '田中部長、紹介します。達也さん、信頼できる農家です。', en: 'Tanaka-bucho, let me introduce. Tatsuya-san, a trustworthy farmer.', style: 'Kansai warm formal-warm business introducing, the regional swing softened for business, soft real warmth throughout delivery.', mood: 'formally-warm' },
      { speaker: 'hiroshi_boss', jp: '田中です。よろしくお願いします。', en: 'I\'m Tanaka. Pleased to meet you.', style: 'Boss warm formal measured business-greeting, the soft real careful-respect audible, gentle real composure threading throughout delivery throughout.', mood: 'measuredly-formal' },
      { speaker: 'tatsuya_country', jp: 'おう、達也です。よろしゅう頼みます。', en: 'Yeah, I\'m Tatsuya. Pleased to meet you.', style: 'Country gruff warm formal-rural greeting, the soft real real-direct audible, gentle real warmth threading throughout delivery throughout.', mood: 'gruffly-formal' },
      { speaker: 'daichi_kansai', jp: '達也さん、こちらが弊社の重要なお取引先で。', en: 'Tatsuya-san, this is our company\'s important customer.', style: 'Kansai warm formal-business introducing, the regional swing softened, soft real warmth threading throughout delivery throughout.', mood: 'formally-introducing' },
      { speaker: 'hiroshi_boss', jp: '品質について、お聞かせください。', en: 'Please tell me about quality.', style: 'Boss warm formal measured professional inquiring, the soft real careful-business audible, gentle real composure threading throughout delivery throughout.', mood: 'professionally-formal' },
      { speaker: 'tatsuya_country', jp: '農薬は最小限。土も毎年改良してます。', en: 'Pesticides minimal. We improve the soil every year.', style: 'Country gruff warm proud honest sharing, the soft real real-pride audible, gentle real warmth threading throughout delivery throughout.', mood: 'gruffly-proud' },
      { speaker: 'daichi_kansai', jp: '実際、わいも食べたんですけど、味が違いますわ。', en: 'Actually, I\'ve eaten them — the taste is different.', style: 'Kansai warm bright supportive testimony, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'brightly-testifying' },
      { speaker: 'hiroshi_boss', jp: '価格と納期、教えていただけますか。', en: 'Could you tell me price and delivery schedule?', style: 'Boss warm formal measured professional clarifying, the soft real careful-business audible, gentle real composure threading throughout delivery throughout.', mood: 'measuredly-clarifying' },
      { speaker: 'tatsuya_country', jp: 'こちらの紙にまとめときました。', en: 'I\'ve summarized them on this paper.', style: 'Country gruff warm prepared practical sharing, the soft real real-prep audible, gentle real warmth threading throughout delivery throughout.', mood: 'gruffly-prepared' },
      { speaker: 'hiroshi_boss', jp: '…なるほど、これは魅力的な提案です。', en: '…I see, this is an attractive proposal.', style: 'Boss warm measured formal pleased thoughtful, the soft real real-interest audible, gentle real composure threading throughout delivery throughout.', mood: 'thoughtfully-pleased' },
      { speaker: 'daichi_kansai', jp: 'ええ機会やと思います。長く付き合えますわ。', en: 'I think it\'s a good opportunity. We can work together long.', style: 'Kansai warm bright sincere encouraging, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '誠実に取引させていただきます。', en: 'I\'ll do business honestly.', style: 'Country gruff warm formal-sincere committing, the soft real real-honor audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-gruff' },
      { speaker: 'hiroshi_boss', jp: '前向きに、検討させていただきます。', en: 'I\'ll consider it positively.', style: 'Boss warm measured formal positive committing, the soft real real-respect audible, gentle real composure threading throughout delivery throughout.', mood: 'positively-formal' },
      { speaker: 'daichi_kansai', jp: 'ほな、また連絡しますわ。', en: 'Right, I\'ll contact you again.', style: 'Kansai warm casual closing, the regional swing carrying real warmth, soft real warmth threading throughout delivery throughout.', mood: 'casually-warm' },
      { speaker: 'tatsuya_country', jp: 'おう、お待ちしてます。', en: 'Yeah, I\'ll be waiting.', style: 'Country gruff warm brief committed closing, the soft real real-rural-direct audible, gentle real warmth threading throughout delivery throughout.', mood: 'gruffly-warm' }
    ]
  },
  // 269 — hina + hiroshi_elder, old Japan (medium)
  {
    id: 'conv_00269',
    context: 'Hina asks Hiroshi-elder, her great-grandfather, what Japan was like when he was small.',
    purpose: 'four-generation history transmission — child curiosity meeting elder memory',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['昔', '違う', '時代', '生活', '驚く'],
    cast: ['hiroshi_elder', 'hina_child'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'ひいおじいちゃん、昔って、どんな感じだった？', en: 'Great-grandpa, how was the olden days?', style: 'High child bright eager curious wondering, the soft real real-curiosity audible, gentle real warmth threading throughout delivery throughout.', mood: 'brightly-curious' },
      { speaker: 'hiroshi_elder', jp: 'うーん、今と全然違ったなあ。', en: 'Mm, totally different from now.', style: 'Slow elder warm gentle weighted reflective, the soft real elder-truth audible, gentle real warmth threading throughout delivery throughout.', mood: 'weightedly-reflective' },
      { speaker: 'hina_child', jp: 'テレビとか、あった？', en: 'Was there TV?', style: 'High child bright simple genuine question, the soft real real-childish-curiosity audible, gentle real warmth threading throughout delivery throughout.', mood: 'brightly-genuine' },
      { speaker: 'hiroshi_elder', jp: 'なかったよ。ラジオは、ようけ聴いた。', en: 'No, there wasn\'t. We listened to a lot of radio.', style: 'Slow elder warm gentle nostalgic sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-nostalgic' },
      { speaker: 'hina_child', jp: 'え、テレビなかったの？信じられない！', en: 'Eh, no TV? Unbelievable!', style: 'High child bright shocked dramatic surprise, the soft real real-childish audible, gentle real warmth threading throughout delivery throughout.', mood: 'dramatically-shocked' },
      { speaker: 'hiroshi_elder', jp: 'でも、楽しかったよ。みんなで集まって、外で遊んだ。', en: 'But it was fun. We gathered, played outside.', style: 'Slow elder warm gentle warm memory-sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-remembering' },
      { speaker: 'hina_child', jp: 'おうちは、どんな感じ？', en: 'What were houses like?', style: 'High child bright follow-up curious question, the soft real real-engagement audible, gentle real warmth threading throughout delivery throughout.', mood: 'brightly-following' },
      { speaker: 'hiroshi_elder', jp: '小さくて、寒かった。冬は本当に寒かった。', en: 'Small and cold. Winters were really cold.', style: 'Slow elder warm gentle honest weighted sharing, the soft real real-recollection audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-recollecting' },
      { speaker: 'hina_child', jp: 'うわー、聞いてるだけで驚く。', en: 'Wow, just hearing it I\'m amazed.', style: 'High child bright wonderingly amazed reaction, the soft real real-fascination audible, gentle real warmth threading throughout delivery throughout.', mood: 'wonderingly-amazed' }
    ]
  },
  // 270 — mei + naoko, matchmaking update (short)
  {
    id: 'conv_00270',
    context: 'Aunt Naoko asks Mei how things are going with Daichi a few months in.',
    purpose: 'small update conversation — aunt confirming her matchmaking went well',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['彼', '上手く', '感謝', '紹介', '正直'],
    cast: ['naoko_aunt', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'メイちゃん、彼との関係、どう？', en: 'Mei-chan, how\'s things with him?', style: 'Aunt warm gentle bright knowing inquiry, the soft real real-curious-care audible, gentle real warmth threading throughout delivery.', mood: 'brightly-knowing' },
      { speaker: 'mei_romantic', jp: 'すごく、いいです。本当に。', en: 'Really good. Truly.', style: 'Romantic warm bright sincere happy disclosure, the soft real real-joy audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-happy' },
      { speaker: 'naoko_aunt', jp: 'よかった！紹介した甲斐があったわ。', en: 'I\'m glad! The introduction was worth it.', style: 'Aunt warm bright pleased proud, the soft real real-satisfaction audible, gentle real warmth threading throughout delivery throughout.', mood: 'pleasedly-proud' },
      { speaker: 'mei_romantic', jp: '本当に、感謝してます。', en: 'Truly, I\'m grateful.', style: 'Romantic warm sincere deep gratitude, the soft real real-thanks audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-grateful' },
      { speaker: 'naoko_aunt', jp: 'これからも、ゆっくり大事にしてね。', en: 'From now on, take care of it slowly.', style: 'Aunt warm gentle generous wisdom, the soft real real-aunt-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-wise' },
      { speaker: 'mei_romantic', jp: 'はい。正直、まだ夢みたいで。', en: 'Yes. Honestly, it still feels like a dream.', style: 'Romantic warm soft sincere wondering, the soft real real-wonder audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-wondering' }
    ]
  },
  // 271 — sho + sachiko, quiet bonding (short)
  {
    id: 'conv_00271',
    context: 'Sho is at his great-grandmother Sachiko\'s house. She\'s shelling beans; he\'s helping in silence.',
    purpose: 'quiet elder + quiet child — hands working in companionable silence',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['豆', '手伝う', '静か', '一緒', '優しい'],
    cast: ['sachiko_grandma', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'しょうくん、手伝ってくれて、ありがとうね。', en: 'Sho-kun, thank you for helping me.', style: 'Soft grandmother warm gentle thank-you-warm, the soft real elder-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-thanking' },
      { speaker: 'sho_child', jp: '…うん。', en: '…Mm.', style: 'Tiny six-year-old soft small careful gentle acceptance, the small real warmth audible, soft small warmth threading throughout delivery throughout.', mood: 'softly-accepting' },
      { speaker: 'sachiko_grandma', jp: '豆、丁寧にむいてくれて。', en: 'Carefully shelling the beans.', style: 'Soft grandmother warm gentle observation-praise, the soft real real-attention audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-praising' },
      { speaker: 'sho_child', jp: '…おばあちゃん、静かでいい。', en: '…Grandma, it\'s good and quiet.', style: 'Tiny six-year-old soft small genuine observation, the small real warmth audible, soft small warmth threading throughout delivery throughout.', mood: 'softly-observing' },
      { speaker: 'sachiko_grandma', jp: 'うふふ、しょうくんも静かで、いい子ね。', en: 'Hehe, Sho-kun is quiet too, a good child.', style: 'Soft grandmother warm gentle laughing tender warm, the soft real elder-love audible, gentle real warmth threading throughout delivery throughout.', mood: 'tenderly-laughing' },
      { speaker: 'sho_child', jp: '…えへへ。', en: '…Heehee.', style: 'Tiny six-year-old soft small touched gentle laugh, the small real touched-warmth audible, soft small joy threading throughout delivery throughout.', mood: 'softly-touched' }
    ]
  },
  // 272 — riku + yuki, neighbor deepening (medium)
  {
    id: 'conv_00272',
    context: 'Yuki and Riku\'s family share a building. They run into each other at the bike rack and chat.',
    purpose: 'small neighbor-teen acquaintance growing — adult-young bridge through casual conversation',
    ambient: 'apartment_lobby',
    sound_effects: [],
    target_vocab: ['学校', '部活', '頑張る', '応援', '元気'],
    cast: ['yuki_office', 'riku_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あ、リクくん、こんばんは。', en: 'Oh, Riku-kun, good evening.', style: 'Office woman warm casual neighbor-greeting, the soft real friendly-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'casually-warm' },
      { speaker: 'riku_teen', jp: 'こんばんは、ゆきさん。お仕事帰り？', en: 'Good evening, Yuki-san. Home from work?', style: 'Teen warm casual respectful neighbor-greeting, the soft real real-friendly audible, gentle real warmth threading throughout delivery throughout.', mood: 'casually-respectful' },
      { speaker: 'yuki_office', jp: 'うん。今日は早めに上がれた。リクくんは、部活？', en: 'Yeah. Got off early today. You, club?', style: 'Office woman warm easy reciprocal casual, the soft real friendly-curiosity audible, gentle real warmth threading throughout delivery throughout.', mood: 'easily-reciprocal' },
      { speaker: 'riku_teen', jp: 'はい、サッカー部。最近、しんどい。', en: 'Yes, soccer club. Lately, exhausting.', style: 'Teen warm casual honest sharing, the soft real real-real audible, gentle real warmth threading throughout delivery throughout.', mood: 'casually-honest' },
      { speaker: 'yuki_office', jp: '受験勉強と両立、大変だね。', en: 'Balancing with exam study — that\'s hard.', style: 'Office woman warm gentle sympathetic adult-recognition, the soft real real-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-sympathetic' },
      { speaker: 'riku_teen', jp: 'はい。両方、頑張ります。', en: 'Yes. I\'ll do my best at both.', style: 'Teen warm sincere committed brief, the soft real real-determination audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-committing' },
      { speaker: 'yuki_office', jp: '陰ながら応援してるよ。', en: 'I\'m cheering you on quietly.', style: 'Office woman warm gentle generous extending warm, the soft real real-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-extending' },
      { speaker: 'riku_teen', jp: 'ありがとうございます。すごく嬉しい。', en: 'Thank you. I\'m really happy.', style: 'Teen warm soft sincere touched closing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-touched' }
    ]
  },
  // 273 — saito + ryosuke (medium)
  {
    id: 'conv_00273',
    context: 'Dr. Saito and Ryosuke are old college friends; they meet for a drink for the first time in a while.',
    purpose: 'old friends in middle-age reunion — quiet adult masculine warmth',
    ambient: 'izakaya_evening',
    sound_effects: [],
    target_vocab: ['友達', '懐かしい', '昔話', '時間', '元気'],
    cast: ['saito_doctor', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '亮介、久しぶり。元気そうで何より。', en: 'Ryosuke, long time. Glad you look well.', style: 'Doctor warm friend-mode casual relaxed, the soft real off-duty warmth audible, gentle real warmth throughout delivery throughout.', mood: 'casually-warm' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。斎藤も全然変わらないな。', en: 'Same here. Saito, you haven\'t changed at all.', style: 'Father warm casual friend-mode warm observation, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'casually-warm' },
      { speaker: 'saito_doctor', jp: 'いやいや、髪は寂しくなった。', en: 'No, no, the hair has thinned.', style: 'Doctor warm self-deprecating laughing friend-mode, the soft real real-humor audible, gentle real warmth threading throughout delivery throughout.', mood: 'self-deprecatingly-warm' },
      { speaker: 'ryosuke_dad', jp: '俺もだ。お互い様だな。', en: 'Me too. We\'re even.', style: 'Father warm laughing matching humor, the soft real real-solidarity audible, gentle real warmth threading throughout delivery throughout.', mood: 'matching-warm' },
      { speaker: 'saito_doctor', jp: '大学の時の話、まだ覚えてる？', en: 'College stories — do you still remember?', style: 'Doctor warm gentle nostalgic friend-warm asking, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'nostalgically-warm' },
      { speaker: 'ryosuke_dad', jp: 'もちろん。あの時、二人で徹夜したやつ。', en: 'Of course. That time we pulled an all-nighter together.', style: 'Father warm bright nostalgic-laughing recall, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'brightly-nostalgic' },
      { speaker: 'saito_doctor', jp: '懐かしい。あの頃が、一番自由だった。', en: 'Nostalgic. Back then was the most free.', style: 'Doctor warm gentle reflective weighted soft, the soft real real-depth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-reflective' },
      { speaker: 'ryosuke_dad', jp: 'たまには、こういう時間、いいな。', en: 'Once in a while, times like this are good.', style: 'Father warm sincere appreciative closing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-closing' }
    ]
  },
  // 274 — aoi + ren, library date (long)
  {
    id: 'conv_00274',
    context: 'Aoi and Ren have started seeing each other. They meet at the library to study together — neither has actually been on a study-date before.',
    purpose: 'early-relationship quiet bonding — small intimate study time',
    ambient: 'library_afternoon',
    sound_effects: [],
    target_vocab: ['勉強', '集中', '一緒', '休憩', '幸せ', '好き'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'こんなに静かな図書館、初めて。', en: 'A library this quiet — my first time.', style: 'Dreamy artist warm soft wondering observation, the soft real warm-wonder audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-wondering' },
      { speaker: 'ren_uni', jp: '集中できるっしょ。一人より、二人がいい。', en: 'Easy to focus, right? Better than alone.', style: 'University student warm easy casual sincere, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'easily-sincere' },
      { speaker: 'aoi_barista', jp: 'ふふ、れんと一緒だと、何でも特別な感じ。', en: 'Hehe, with Ren, everything feels special.', style: 'Dreamy artist warm soft genuine touched sharing, the soft real real-affection audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-affectionate' },
      { speaker: 'ren_uni', jp: 'おっ、それ、めっちゃ嬉しいこと言うやん。', en: 'Oh, you\'re saying something really sweet.', style: 'University student warm soft laughing touched response, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-touched' },
      { speaker: 'aoi_barista', jp: '正直に言っただけ。', en: 'I just said it honestly.', style: 'Dreamy artist warm soft simple gentle admitting, the soft real real-honesty audible, gentle real warmth threading throughout delivery throughout.', mood: 'simply-honest' },
      { speaker: 'ren_uni', jp: 'うん、知ってる。あおいって、嘘つかんし。', en: 'Yeah, I know. Aoi doesn\'t lie.', style: 'University student warm soft sincere recognition, the soft real real-respect audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '勉強進んでる？私、もう疲れた…。', en: 'Studying coming along? I\'m already tired…', style: 'Dreamy artist warm gentle laughing complaining sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-complaining' },
      { speaker: 'ren_uni', jp: 'まじか、まだ一時間も経ってない。', en: 'For real, hasn\'t even been an hour.', style: 'University student warm soft laughing teasing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-teasing' },
      { speaker: 'aoi_barista', jp: 'うう、休憩しよ？', en: 'Ugh, let\'s take a break?', style: 'Dreamy artist warm soft gentle requesting, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-requesting' },
      { speaker: 'ren_uni', jp: 'はいはい、外、行こ。', en: 'Yes yes, let\'s go outside.', style: 'University student warm gentle easy accommodating, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'easily-accommodating' },
      { speaker: 'aoi_barista', jp: 'こうやって過ごせるの、なんか幸せ。', en: 'Spending time like this — somehow, happy.', style: 'Dreamy artist warm soft genuine deep disclosure, the soft real real-joy audible, gentle real warmth threading throughout delivery throughout.', mood: 'genuinely-happy' },
      { speaker: 'ren_uni', jp: '俺も、めっちゃ幸せ。', en: 'Me too, super happy.', style: 'University student warm soft sincere matching, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-happy' },
      { speaker: 'aoi_barista', jp: 'えへへ。次の休憩、何食べる？', en: 'Heehee. At the next break, what shall we eat?', style: 'Dreamy artist warm soft bright touched pivot, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-pivoting' },
      { speaker: 'ren_uni', jp: 'コンビニ、もう決めとく？', en: 'Convenience store — decide already?', style: 'University student warm easy practical playful, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'easily-playful' },
      { speaker: 'aoi_barista', jp: '楽しい。れんと、こうやって過ごしたい。', en: 'It\'s fun. I want to spend time with Ren like this.', style: 'Dreamy artist warm soft sincere closing tender, the soft real real-affection audible, gentle real warmth threading throughout delivery throughout.', mood: 'tenderly-closing' }
    ]
  },
  // 275 — sakura + sho + hina, big cousin (3-speaker, short)
  {
    id: 'conv_00275',
    context: 'Sakura is babysitting both kids briefly. Hina wants ice cream; Sho wants quiet.',
    purpose: 'small teen-cousin chaos management — competing child needs',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['お願い', '我慢', '順番', '一緒', '優しい'],
    cast: ['sakura_teen', 'hina_child', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'お姉ちゃん、アイス食べたい！', en: 'Big sis, I want ice cream!', style: 'High child bright eager demanding, the soft real real-childish audible, gentle real warmth threading throughout delivery throughout.', mood: 'eagerly-demanding' },
      { speaker: 'sho_child', jp: '…ぼく、後で。', en: '…Me, later.', style: 'Tiny six-year-old soft small careful gentle preference, the small real warm-quiet audible, soft small warmth threading throughout delivery throughout.', mood: 'softly-quiet' },
      { speaker: 'sakura_teen', jp: 'じゃあ、ひなだけ先ね。しょうくんは、後で。', en: 'Then, just Hina first. Sho-kun, after.', style: 'Teen warm gentle careful coordinating, the soft real real-managing audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-coordinating' },
      { speaker: 'hina_child', jp: 'やったー！しょうくん、ありがとう、お願い聞いてくれて。', en: 'Yay! Sho-kun, thank you, for letting me first.', style: 'High child bright generous warm thanking, the soft real real-childish-love audible, gentle real warmth threading throughout delivery throughout.', mood: 'generously-warm' },
      { speaker: 'sho_child', jp: '…うん、いいよ。', en: '…Mm, it\'s okay.', style: 'Tiny six-year-old soft small gentle accommodating, the small real warm-flexibility audible, soft small warmth threading throughout delivery throughout.', mood: 'softly-accommodating' },
      { speaker: 'sakura_teen', jp: 'しょうくん、優しいね。ひな、感謝しなさい。', en: 'Sho-kun, kind. Hina, be grateful.', style: 'Teen warm gentle wisdom-teaching big-cousin warmth, the soft real real-care audible, gentle real warmth threading throughout delivery.', mood: 'gently-teaching' }
    ]
  },
  // 276 — kenji + naoko, museum (medium)
  {
    id: 'conv_00276',
    context: 'A small art museum on a weekend. Kenji and Naoko unexpectedly meet, having known each other through a wedding once.',
    purpose: 'low-stakes refined chance meeting — two adults sharing cultural space',
    ambient: 'museum_afternoon',
    sound_effects: [],
    target_vocab: ['芸術', '影響', '感動', '作品', '印象'],
    cast: ['kenji_office', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'あ、なおこさん。お久しぶりです。', en: 'Oh, Naoko-san. Long time.', style: 'Salaryman warm polite gentle recognition, the soft real careful-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'politely-recognizing' },
      { speaker: 'naoko_aunt', jp: 'まあ、田中さん。こんなとこで！', en: 'Oh my, Tanaka-san. In a place like this!', style: 'Aunt warm bright surprised civil-warm response, the soft real friendly-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'brightly-surprised' },
      { speaker: 'kenji_office', jp: '最近、芸術に興味が出てきまして。', en: 'Lately, I\'ve gotten interested in art.', style: 'Salaryman warm gentle thoughtful civil disclosure, the soft real real-development audible, gentle real warmth threading throughout delivery throughout.', mood: 'thoughtfully-disclosing' },
      { speaker: 'naoko_aunt', jp: '素敵な趣味ね。今日の展示、印象的でしたか？', en: 'A lovely interest. Today\'s exhibit, did it leave an impression?', style: 'Aunt warm gentle civil refined curiosity, the soft real real-engagement audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-refined' },
      { speaker: 'kenji_office', jp: 'はい、特にあの大きな絵に感動して。', en: 'Yes, especially that large painting moved me.', style: 'Salaryman warm sincere genuine sharing, the soft real real-impression audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-impressed' },
      { speaker: 'naoko_aunt', jp: '色の使い方、本当に独特で。', en: 'The use of color, truly unique.', style: 'Aunt warm gentle civil expert observation, the soft real real-appreciation audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-expert' },
      { speaker: 'kenji_office', jp: '芸術って、こんな影響あるんですね。', en: 'Art has this kind of influence, then.', style: 'Salaryman warm gentle thoughtful reflective, the soft real real-recognition audible, gentle real warmth threading throughout delivery throughout.', mood: 'thoughtfully-reflective' },
      { speaker: 'naoko_aunt', jp: '心が動くって、いいですよね。', en: 'Being moved at heart is nice, isn\'t it.', style: 'Aunt warm gentle civil sincere closing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-warm' }
    ]
  },
  // 277 — takeda + asuka, school safety patrol (medium)
  {
    id: 'conv_00277',
    context: 'Officer Takeda is doing morning school safety patrol. He and Ms. Asuka exchange small notes about the children.',
    purpose: 'civic professional cooperation — police and teacher protecting children together',
    ambient: 'school_gate_morning',
    sound_effects: [],
    target_vocab: ['安全', '見守る', '通学', '注意', '協力'],
    cast: ['takeda_officer', 'asuka_teacher'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'おはようございます。今朝も、見守りで。', en: 'Good morning. This morning too, here to watch over.', style: 'Officer warm professional polite morning, the soft real real-civic warmth audible, gentle real warmth threading throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'asuka_teacher', jp: 'いつもありがとうございます。助かります。', en: 'Thank you always. It saves us.', style: 'Teacher warm formal sincere professional gratitude, the soft real real-respect audible, gentle real warmth threading throughout delivery.', mood: 'formally-grateful' },
      { speaker: 'takeda_officer', jp: '昨日、通学路で子供たちが少しふざけてて。', en: 'Yesterday, on the way to school, the kids were horsing around a bit.', style: 'Officer warm professional careful reporting, the soft real real-careful audible, gentle real warmth threading throughout delivery throughout.', mood: 'professionally-reporting' },
      { speaker: 'asuka_teacher', jp: 'あら、注意しておきます。教えていただいて。', en: 'Oh, I\'ll caution them. Thank you for telling me.', style: 'Teacher warm professional concerned thanking, the soft real real-attentive audible, gentle real warmth threading throughout delivery throughout.', mood: 'concernedly-thanking' },
      { speaker: 'takeda_officer', jp: '事故にならないように、お互い見ていきましょう。', en: 'So no accidents — let\'s watch together.', style: 'Officer warm professional collaborative wisdom, the soft real real-partnership audible, gentle real warmth threading throughout delivery.', mood: 'collaboratively-warm' },
      { speaker: 'asuka_teacher', jp: '本当にそうですね。協力して、お願いします。', en: 'Truly. In cooperation, please.', style: 'Teacher warm professional sincere committed, the soft real real-respect audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-committed' },
      { speaker: 'takeda_officer', jp: '何かあれば、いつでもご連絡ください。', en: 'If anything happens, contact me anytime.', style: 'Officer warm professional generous extending, the soft real real-civic care audible, gentle real warmth threading throughout delivery.', mood: 'generously-civic' },
      { speaker: 'asuka_teacher', jp: '心強いです。今日もよろしくお願いします。', en: 'Reassuring. Please continue today too.', style: 'Teacher warm professional warm sincere closing, the soft real real-respect audible, gentle real warmth threading throughout delivery.', mood: 'reassuringly-formal' }
    ]
  },
  // 278 — hiroshi_elder + goro + mrs_mori, elders' gathering (3-speaker, long)
  {
    id: 'conv_00278',
    context: 'Three elderly community members meet at the senior center weekly. Today they talk about the changing neighborhood.',
    purpose: 'three-elder conversation — community memory and adaptation across decades',
    ambient: 'senior_center_afternoon',
    sound_effects: [],
    target_vocab: ['昔', '変わる', '時代', '町', '思い出', '懐かしい'],
    cast: ['hiroshi_elder', 'goro_grandpa', 'mrs_mori_neighbor'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_elder', jp: 'この町も、変わったよなあ。', en: 'This town, too, has changed.', style: 'Slow elder warm weighted reflective opening, the soft real elder-grief audible, gentle real warmth threading throughout delivery throughout.', mood: 'weightedly-reflective' },
      { speaker: 'goro_grandpa', jp: '本当だな。昔は、商店街が賑やかだった。', en: 'Truly. The shopping street used to be lively.', style: 'Slow grandpa warm gentle nostalgic matching, the soft real elder-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-nostalgic' },
      { speaker: 'mrs_mori_neighbor', jp: 'お豆腐屋さんも、お魚屋さんも、なくなっちゃってね。', en: 'The tofu shop, the fish shop — gone now.', style: 'Neighbor warm gentle sad listing, the soft real real-loss audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-mourning' },
      { speaker: 'hiroshi_elder', jp: '今は、コンビニばっかり。便利だけどな。', en: 'Now, only convenience stores. Convenient, but…', style: 'Slow elder warm gentle ambivalent recognition, the soft real real-weighted audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-ambivalent' },
      { speaker: 'goro_grandpa', jp: 'お店の人と話す機会、減ったな。', en: 'Chances to talk with shop people — fewer.', style: 'Slow grandpa warm gentle observation-weighted, the soft real real-loss audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-observing' },
      { speaker: 'mrs_mori_neighbor', jp: 'そうそう、昔は、お店で長話してたわ。', en: 'Yes yes, we used to chat long at the shops.', style: 'Neighbor warm bright nostalgic agreeing, the soft real elder-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'brightly-nostalgic' },
      { speaker: 'hiroshi_elder', jp: '時代だなあ。仕方ない。', en: 'It\'s the era. Can\'t be helped.', style: 'Slow elder warm gentle accepting weighted, the soft real elder-wisdom audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-accepting' },
      { speaker: 'goro_grandpa', jp: 'でも、いいこともある。子供たち、便利な時代でな。', en: 'But there\'s good too. Convenient era for the kids.', style: 'Slow grandpa warm gentle balanced wise, the soft real real-balance audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-balanced' },
      { speaker: 'mrs_mori_neighbor', jp: '本当ね。私たちが知らない世界を、生きるのよね。', en: 'Truly. They live in a world we don\'t know.', style: 'Neighbor warm gentle reflective wonder, the soft real real-wonder audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-wondering' },
      { speaker: 'hiroshi_elder', jp: '私らは、思い出を語る役、かな。', en: 'Our role, perhaps, is to tell the memories.', style: 'Slow elder warm gentle philosophical role-defining, the soft real real-wisdom audible, gentle real warmth threading throughout delivery throughout.', mood: 'philosophically-warm' },
      { speaker: 'goro_grandpa', jp: 'そうだな。語り部、だな。', en: 'Yes. Storytellers.', style: 'Slow grandpa warm gentle thoughtful agreement, the soft real real-recognition audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-agreeing' },
      { speaker: 'mrs_mori_neighbor', jp: '若い人に、ちゃんと伝えたいわ。', en: 'I want to convey it properly to the young.', style: 'Neighbor warm sincere committed extending, the soft real real-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-committed' },
      { speaker: 'hiroshi_elder', jp: 'こうやって集まること、続けような。', en: 'Gathering like this — let\'s keep it up.', style: 'Slow elder warm gentle community-committing closing, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'gently-committing' }
    ]
  },
  // 279 — mei + yumiko, wine night (long)
  {
    id: 'conv_00279',
    context: 'Mei and Yumiko have become friends. A glass of wine on Yumiko\'s porch after the kids are asleep.',
    purpose: 'adult-women friendship — small honest disclosures across life-stages',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['結婚', '迷う', '気持ち', '正直', '幸せ', '将来'],
    cast: ['yumiko_mom', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'メイさん、ワイン、ちょうど良い感じね。', en: 'Mei-san, the wine is just right.', style: 'Maternal warm gentle relaxed adult-friend opener, the soft real warm-evening audible, gentle real warmth threading throughout delivery.', mood: 'gently-relaxed' },
      { speaker: 'mei_romantic', jp: 'はい、すごく美味しい。心地いい。', en: 'Yes, really delicious. Comfortable.', style: 'Romantic warm soft appreciative comfortable, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-comfortable' },
      { speaker: 'yumiko_mom', jp: 'メイさん、彼との関係は、最近どう？', en: 'Mei-san, with him recently, how is it?', style: 'Maternal warm gentle adult-friend curious soft, the soft real warm-curiosity audible, gentle real warmth threading throughout delivery.', mood: 'gently-curious' },
      { speaker: 'mei_romantic', jp: 'すごく幸せです。でも、ちょっと迷ってて。', en: 'Really happy. But, a little stuck.', style: 'Romantic warm soft honest vulnerable disclosure, the soft real real-honesty audible, gentle real warmth threading throughout delivery.', mood: 'honestly-vulnerable' },
      { speaker: 'yumiko_mom', jp: 'どんなこと？', en: 'What kind of thing?', style: 'Maternal warm gentle careful inviting deeper, the soft real real-listening audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-inviting' },
      { speaker: 'mei_romantic', jp: '結婚のこと、まだ早いかなって。', en: 'About marriage, wondering if it\'s too early.', style: 'Romantic warm soft vulnerable real disclosure, the soft real real-wondering audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-wondering' },
      { speaker: 'yumiko_mom', jp: 'うん、わかる、その気持ち。', en: 'Yeah, I understand, that feeling.', style: 'Maternal warm gentle deep identifying, the soft real real-recognition audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-identifying' },
      { speaker: 'mei_romantic', jp: '彼は、もう真面目に考えてるみたい。', en: 'He, it seems, is already thinking seriously.', style: 'Romantic warm soft careful sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-sharing' },
      { speaker: 'yumiko_mom', jp: 'メイさん自身の気持ちが、一番大事よ。', en: 'Your own feelings, Mei-san, matter most.', style: 'Maternal warm firm gentle wise advice, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'firmly-gentle' },
      { speaker: 'mei_romantic', jp: '正直、まだ自分の人生を決められない感じ。', en: 'Honestly, I don\'t feel ready to decide my life.', style: 'Romantic warm soft honest vulnerable real, the soft real real-honesty audible, gentle real warmth threading throughout delivery throughout.', mood: 'honestly-vulnerable' },
      { speaker: 'yumiko_mom', jp: 'それは、誰でも当たり前。焦らないで。', en: 'That\'s natural for anyone. Don\'t rush.', style: 'Maternal warm gentle warmly normalizing, the soft real real-permission audible, gentle real warmth threading throughout delivery throughout.', mood: 'warmly-normalizing' },
      { speaker: 'mei_romantic', jp: 'ゆみこさんと話してると、楽になる。', en: 'Talking with you, Yumiko-san, I feel lighter.', style: 'Romantic warm soft sincere relieved sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-relieved' },
      { speaker: 'yumiko_mom', jp: 'いつでも話聞くから。一人で抱えないで。', en: 'I\'ll listen anytime. Don\'t carry it alone.', style: 'Maternal warm gentle generous extending care, the soft real real-friendship audible, gentle real warmth threading throughout delivery.', mood: 'gently-extending' },
      { speaker: 'mei_romantic', jp: 'ありがとうございます。本当に、ありがとう。', en: 'Thank you. Truly, thank you.', style: 'Romantic warm soft sincere closing deeply-grateful, the soft real real-warmth audible, gentle real warmth threading throughout delivery.', mood: 'sincerely-grateful' }
    ]
  },
  // 280 — riku + asuka, one-on-one (medium)
  {
    id: 'conv_00280',
    context: 'After class, Riku stays back to ask Ms. Asuka something he\'s been holding back.',
    purpose: 'teacher-student careful one-on-one — disclosing real interest in mentorship',
    ambient: 'classroom_quiet',
    sound_effects: [],
    target_vocab: ['進路', '迷う', '相談', '本気', '希望'],
    cast: ['asuka_teacher', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: '先生、相談していいですか。', en: 'Sensei, can I consult about something?', style: 'Teen warm careful brave respectful opener, the soft real wanting-help audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-brave' },
      { speaker: 'asuka_teacher', jp: 'もちろん。座って、ゆっくり話して。', en: 'Of course. Sit down, slowly tell me.', style: 'Teacher warm gentle professional welcoming space, the soft real real-attention audible, gentle real warmth threading throughout delivery.', mood: 'gently-welcoming' },
      { speaker: 'riku_teen', jp: '本気で、進路、迷ってて。', en: 'Seriously, I\'m stuck on my path.', style: 'Teen warm soft honest vulnerable real, the soft real real-search audible, gentle real warmth threading throughout delivery throughout.', mood: 'honestly-stuck' },
      { speaker: 'asuka_teacher', jp: 'どんな選択肢があるの？', en: 'What options are there?', style: 'Teacher warm gentle professional helpful opening, the soft real real-care audible, gentle real warmth threading throughout delivery throughout.', mood: 'gently-helpful' },
      { speaker: 'riku_teen', jp: '大学か、専門学校か。', en: 'University or vocational school.', style: 'Teen warm soft brief sharing alternatives, the soft real real-real audible, gentle real warmth threading throughout delivery throughout.', mood: 'briefly-real' },
      { speaker: 'asuka_teacher', jp: 'リクさんの希望は、どっち寄り？', en: 'Your wish leans which way?', style: 'Teacher warm gentle careful focused inquiry, the soft real real-attention audible, gentle real warmth threading throughout delivery throughout.', mood: 'carefully-focused' },
      { speaker: 'riku_teen', jp: '正直、専門のほうが興味ある。', en: 'Honestly, vocational interests me more.', style: 'Teen warm soft brave honest real disclosure, the soft real real-truth audible, gentle real warmth threading throughout delivery throughout.', mood: 'bravely-honest' },
      { speaker: 'asuka_teacher', jp: 'いいと思うよ。リクさんは、手を動かすことが得意。', en: 'I think it\'s good. Riku, you\'re good at hands-on work.', style: 'Teacher warm gentle affirming wise recognition, the soft real real-respect audible, gentle real warmth threading throughout delivery throughout.', mood: 'wisely-affirming' },
      { speaker: 'riku_teen', jp: '先生に言ってもらえると、安心する。', en: 'Hearing it from sensei, I\'m reassured.', style: 'Teen warm soft sincere touched closing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'softly-touched' }
    ]
  },
  // 281 — tatsuya + sho (short)
  {
    id: 'conv_00281',
    context: 'Tatsuya visits the family in the city. Shy little Sho keeps a careful distance until Tatsuya offers him a small carrot from the farm.',
    purpose: 'rural uncle bridging shy boy — small offering opens warmth',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['野菜', '畑', '頂く', '美味しい', '優しい'],
    cast: ['tatsuya_country', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'しょう、これ、おじさんの畑のにんじん。', en: 'Sho, this — carrot from uncle\'s field.', style: 'Country gruff warm gentle child-tuned offering, the soft real rural-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gruffly-gentle' },
      { speaker: 'sho_child', jp: '…ぼくに？', en: '…For me?', style: 'Tiny six-year-old soft careful surprised tentative, the small real wondering audible, soft small warmth threading throughout delivery throughout.', mood: 'tentatively-soft' },
      { speaker: 'tatsuya_country', jp: 'そう、頂きなさい。甘いぞ。', en: 'Yes, take it. It\'s sweet.', style: 'Country gruff warm generous coaxing-easy, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gruffly-coaxing' },
      { speaker: 'sho_child', jp: 'ありがとう…ございます。', en: 'Thank you… very much.', style: 'Tiny six-year-old soft careful earnest polite, the small real warmth audible, soft small warmth threading throughout delivery throughout.', mood: 'carefully-polite' },
      { speaker: 'tatsuya_country', jp: 'おう、よろしい。畑、いっぱい採れるんや。', en: 'Yeah, good. Lots come in from the field.', style: 'Country gruff warm proud easy sharing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'gruffly-proud' },
      { speaker: 'sho_child', jp: '…おじさん、優しい。', en: '…Uncle, kind.', style: 'Tiny six-year-old soft genuine quiet observation, the small real warm-recognition audible, soft small warmth threading throughout delivery throughout.', mood: 'softly-observing' }
    ]
  },
  // 282 — yuki + ren, job applications (medium)
  {
    id: 'conv_00282',
    context: 'Ren has been trying to write his first job applications and Yuki, from her workplace experience, agrees to help him review them.',
    purpose: 'workplace experienced person mentoring younger — practical adult kindness',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['応募', '履歴書', '書く', '助言', '面接'],
    cast: ['yuki_office', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'ゆきさん、わざわざありがとうございます。', en: 'Yuki-san, thank you for going out of your way.', style: 'University student warm respectful sincere opener, the soft real real-respect audible, gentle real warmth threading throughout delivery throughout.', mood: 'respectfully-sincere' },
      { speaker: 'yuki_office', jp: 'いえいえ、私で良ければ。履歴書、見せて。', en: 'No, no, if I\'ll do. Show me the résumé.', style: 'Office woman warm easy generous helpful, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'easily-generous' },
      { speaker: 'ren_uni', jp: 'これっす。志望動機が、特に難しくて。', en: 'This. The motivation part is especially hard.', style: 'University student warm careful honest sharing, the soft real real-struggle audible, gentle real warmth threading throughout delivery throughout.', mood: 'honestly-sharing' },
      { speaker: 'yuki_office', jp: '…うん、なるほど。ちょっと一般的すぎるかも。', en: '…Mm, I see. Maybe a little too generic.', style: 'Office woman warm gentle thoughtful honest reviewing, the soft real real-mentor warmth audible, gentle real warmth throughout delivery.', mood: 'gently-honest' },
      { speaker: 'ren_uni', jp: 'やっぱりですか。どうしたらいいですかね。', en: 'I thought so. How should I do it?', style: 'University student warm careful real engaged inquiry, the soft real real-wanting audible, gentle real warmth throughout delivery throughout.', mood: 'carefully-engaged' },
      { speaker: 'yuki_office', jp: '具体的な経験を、一つ入れたら、ぐっと変わる。', en: 'Add one concrete experience — it changes a lot.', style: 'Office woman warm gentle specific helpful wisdom, the soft real real-teaching audible, gentle real warmth throughout delivery throughout.', mood: 'specifically-helpful' },
      { speaker: 'ren_uni', jp: 'なるほど。バイトの話とか、書いていいんすか。', en: 'I see. Like part-time work — is that okay to write?', style: 'University student warm absorbed engaged real, the soft real real-engagement audible, gentle real warmth threading throughout delivery throughout.', mood: 'absorbedly-engaged' },
      { speaker: 'yuki_office', jp: 'もちろん。実際の経験が、一番説得力ある。', en: 'Of course. Actual experience is the most persuasive.', style: 'Office woman warm gentle wise encouraging, the soft real real-mentor warmth audible, gentle real warmth threading throughout delivery.', mood: 'gently-encouraging' },
      { speaker: 'ren_uni', jp: 'マジで助かりました。書き直してみます。', en: 'Really saved me. I\'ll rewrite.', style: 'University student warm sincere committed closing, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-committed' }
    ]
  },
  // 283 — daichi + ryosuke, hiking (long)
  {
    id: 'conv_00283',
    context: 'Daichi and Ryosuke have started hiking together on weekends. They\'re halfway up a small mountain.',
    purpose: 'adult male friendship through shared physical activity — quiet conversation on the trail',
    ambient: 'mountain_morning',
    sound_effects: [],
    target_vocab: ['登山', '景色', '空気', '健康', '友達', '続ける'],
    cast: ['daichi_kansai', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'うわー、ここまで来ると、景色ええなー。', en: 'Wow, coming this far, the view\'s great.', style: 'Kansai warm bright appreciative observation, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'brightly-appreciating' },
      { speaker: 'ryosuke_dad', jp: 'ほんと、すごい。空気も全然違う。', en: 'Truly, amazing. The air is totally different.', style: 'Father warm sincere matching appreciation, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-matching' },
      { speaker: 'daichi_kansai', jp: '亮介さん、登山趣味になりそうですか。', en: 'Ryosuke-san, will hiking become your hobby?', style: 'Kansai warm bright friendly curious, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'brightly-curious' },
      { speaker: 'ryosuke_dad', jp: 'なりそう。健康にもいいし。', en: 'It might. Good for health too.', style: 'Father warm sincere thoughtful answering, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'thoughtfully-warm' },
      { speaker: 'daichi_kansai', jp: 'こうやって、友達と歩くん、ええもんですね。', en: 'Walking with a friend like this — it\'s nice.', style: 'Kansai warm gentle sincere reflective, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'sincerely-reflective' },
      { speaker: 'ryosuke_dad', jp: 'うん。男友達って、最近少なくて。', en: 'Yeah. Male friends — fewer lately.', style: 'Father warm honest gentle vulnerable disclosure, the soft real real-honesty audible, gentle real warmth threading throughout delivery throughout.', mood: 'honestly-vulnerable' },
      { speaker: 'daichi_kansai', jp: 'わかります。大人になると、新しい友達つくるん難しい。', en: 'I get it. When adult, hard to make new friends.', style: 'Kansai warm gentle identifying wisdom, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'gently-identifying' },
      { speaker: 'ryosuke_dad', jp: 'だから、こういう時間、本当にありがたい。', en: 'So, times like this, I\'m truly grateful for.', style: 'Father warm sincere deep gratitude, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'deeply-grateful' },
      { speaker: 'daichi_kansai', jp: 'わいも一緒です。続けましょね、これからも。', en: 'Same for me. Let\'s keep it up, from here on.', style: 'Kansai warm sincere committing extending, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'sincerely-committing' },
      { speaker: 'ryosuke_dad', jp: '次は、もう少し高い山、行ってみますか。', en: 'Next, shall we try a slightly higher mountain?', style: 'Father warm gentle eager-careful proposing, the soft real real-engagement audible, gentle real warmth threading throughout delivery.', mood: 'gently-proposing' },
      { speaker: 'daichi_kansai', jp: 'ほな、来月の予定立てましょか。', en: 'Then, shall we plan for next month?', style: 'Kansai warm bright easy practical accepting, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'brightly-practical' },
      { speaker: 'ryosuke_dad', jp: 'ぜひ。楽しみだ。', en: 'Please. Looking forward.', style: 'Father warm sincere brief committed-anticipating, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-anticipating' },
      { speaker: 'daichi_kansai', jp: 'よし、もうちょい登ろか。山頂まで頑張ろ。', en: 'Right, let\'s climb a bit more. Push to the summit.', style: 'Kansai warm bright energizing rallying, the regional swing audible, soft real warmth threading throughout delivery throughout.', mood: 'brightly-rallying' },
      { speaker: 'ryosuke_dad', jp: 'うん。ペース合わせて、行こう。', en: 'Yeah. Let\'s match pace and go.', style: 'Father warm sincere committed coordinating, the soft real real-warmth audible, gentle real warmth threading throughout delivery throughout.', mood: 'sincerely-coordinating' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

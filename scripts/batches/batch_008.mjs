import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_008)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // -----------------------------------------------------------------
  // 144 — hina + goro grandpa at the park, hina shows a leaf
  // -----------------------------------------------------------------
  {
    id: 'conv_00144',
    context: 'A bright autumn afternoon at the park. Hina has found a red leaf and is showing it proudly to her grandfather Goro on the bench.',
    purpose: 'small wonder shared between child and grandparent — affection through attention',
    ambient: 'park_afternoon',
    sound_effects: ['birds_distant', 'children_playing_far'],
    target_vocab: ['見て', 'きれい', '本当', '葉っぱ', 'ありがとう'],
    cast: ['hina_child', 'goro_grandpa'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'おじいちゃん、見て見て！すごく赤いよ！', en: 'Grandpa, look look! It\'s really red!', style: 'High child pitch racing forward with delight, the second 「見て」 spiking even brighter than the first.', mood: 'thrilled' },
      { speaker: 'goro_grandpa', jp: 'おお、本当だ。きれいな葉っぱだなあ。', en: 'Oh, really now. What a pretty leaf.', style: 'Low warm grandpa voice, slow approving exhale, the 「なあ」 stretched out with gentle pride.', mood: 'warm-approving' },
      { speaker: 'hina_child', jp: '一番きれいなの選んだの！', en: 'I picked the prettiest one!', style: 'Quick proud burst, child voice climbing on 「一番」 with a small triumphant lift.', mood: 'proud' },
      { speaker: 'goro_grandpa', jp: 'うん、よく見つけたね。ひなちゃんは目がいいなあ。', en: 'Yes, you found it well. Hina has a good eye.', style: 'Soft chuckle threaded through the praise, deliberate elder pacing on each compliment landing gently.', mood: 'doting' },
      { speaker: 'hina_child', jp: 'えへへ、ありがとう。じゃあ、おじいちゃんにあげる！', en: 'Heehee, thank you. Then, I\'ll give it to grandpa!', style: 'Bright giggling chirp, then a generous decisive offering tone on the second half quickening forward.', mood: 'generous-happy' },
      { speaker: 'goro_grandpa', jp: 'いいのかい？大事にするよ。ありがとうな。', en: 'Are you sure? I\'ll treasure it. Thank you.', style: 'Tender slow grandpa cadence, slight catch on the thanks, real gratitude in a quiet weighted voice.', mood: 'touched' }
    ]
  },
  // -----------------------------------------------------------------
  // 145 — sakura + riku teens after school, manga
  // -----------------------------------------------------------------
  {
    id: 'conv_00145',
    context: 'After school by the bike racks. Riku just finished the latest chapter of a manga they both read; Sakura is dying for spoilers but pretending not to be.',
    purpose: 'teen banter / shared fandom — friendship through teasing and enthusiasm',
    ambient: 'school_yard_afternoon',
    sound_effects: ['students_distant', 'bicycle_bell_far'],
    target_vocab: ['読んだ', '面白い', '次', '本当に', '言わないで'],
    cast: ['sakura_teen', 'riku_teen'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'ねえ、今週のやつ、もう読んだ？', en: 'Hey, this week\'s one — you read it yet?', style: 'Teen boy casual cadence, breezy with a small teasing lift on the question mark, almost daring her.', mood: 'baiting' },
      { speaker: 'sakura_teen', jp: 'まだ！言わないでよ、絶対！', en: 'Not yet! Don\'t tell me, I mean it!', style: 'Sharp teen girl protest spiking on 「絶対」, mock-panic with real urgency underneath the playful surface.', mood: 'mock-panicked' },
      { speaker: 'riku_teen', jp: 'いやでも今回はマジでやばいって。', en: 'Yeah but this time it\'s seriously crazy though.', style: 'Pulling-back teen drawl, lazy but loaded, 「マジで」 dropped low like he\'s already half-spoiling.', mood: 'tempting' },
      { speaker: 'sakura_teen', jp: '言わないで！本当に言わないで！', en: 'Don\'t tell me! I mean really don\'t tell me!', style: 'Hands-over-ears teen volume bump on the repeats, somewhere between laughing and serious about it.', mood: 'covering-ears' },
      { speaker: 'riku_teen', jp: 'わかったわかった。じゃあ、感想だけ後で聞かせて。', en: 'Okay okay. Then just tell me your reaction afterwards.', style: 'Backing-down teen grin in the voice, casual shrug delivered through tone alone, ending mild and friendly.', mood: 'conceding' },
      { speaker: 'sakura_teen', jp: '今夜読む！面白いってこと？', en: 'I\'ll read it tonight! So it\'s good then?', style: 'Quick teen pivot from defense to curiosity, lift on the question, already excited about reading later.', mood: 'curious' },
      { speaker: 'riku_teen', jp: '面白いどころじゃない。次の話が気になりすぎる。', en: 'More than just good. I want the next chapter way too much.', style: 'Earnest teen emphasis, voice raised slightly with genuine investment, drops back on 「気になりすぎる」 sincerely.', mood: 'invested' },
      { speaker: 'sakura_teen', jp: 'じゃあ明日感想言うから、待ってて。', en: 'Then I\'ll tell you my reaction tomorrow, just wait.', style: 'Resolved teen lift, almost a promise, ending warm and looking forward to comparing notes together.', mood: 'committed' }
    ]
  },
  // -----------------------------------------------------------------
  // 146 — yuki + kenji morning coffee, weekend plans
  // -----------------------------------------------------------------
  {
    id: 'conv_00146',
    context: 'Monday morning at the office coffee machine. Yuki and Kenji catch up briefly about their weekends before the first meeting starts.',
    purpose: 'small monday catch-up — gentle re-acclimation to the workweek through ordinary talk',
    ambient: 'office_morning',
    sound_effects: ['coffee_machine', 'distant_keyboards'],
    target_vocab: ['週末', '映画', 'どうだった', '混んでた', 'おすすめ'],
    cast: ['yuki_office', 'kenji_office'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'おはよう。週末はどうだった？', en: 'Morning. How was your weekend?', style: 'Earnest salaryman warmth, mild morning fatigue threaded through, polite curiosity in steady measured cadence.', mood: 'cordial' },
      { speaker: 'yuki_office', jp: 'おはよう。映画見に行ってきた、土曜日。', en: 'Morning. I went to see a movie on Saturday.', style: 'Bright office warmth, conversational lift on 「映画」, easygoing energy with a small smile in the voice.', mood: 'sharing' },
      { speaker: 'kenji_office', jp: 'へえ、何見たの？', en: 'Oh, what did you see?', style: 'Genuine interest cut into the salaryman politeness, slight lift on 「何」 inviting more.', mood: 'interested' },
      { speaker: 'yuki_office', jp: 'あの新しいやつ。すごく良かったよ。', en: 'That new one. It was really good.', style: 'Quick recommend energy, voice warming on 「すごく良かった」 with sincere enthusiasm pulling the words forward.', mood: 'enthusiastic' },
      { speaker: 'kenji_office', jp: 'え、混んでた？', en: 'Oh, was it crowded?', style: 'Practical salaryman concern surfacing, steady measured cadence checking before he considers going himself.', mood: 'practical' },
      { speaker: 'yuki_office', jp: 'うん、結構ね。でも見る価値あった。', en: 'Yeah, pretty much. But it was worth seeing.', style: 'Honest acknowledging tone, then a recommend-it lift on the second clause, warm and credible throughout.', mood: 'recommending' },
      { speaker: 'kenji_office', jp: 'じゃあ次の週末行ってみようかな。', en: 'Then I might go this coming weekend.', style: 'Thoughtful salaryman planning voice, gentle 「かな」 trailing off as he considers it seriously.', mood: 'considering' },
      { speaker: 'yuki_office', jp: 'おすすめ。早めに予約したほうがいいよ。', en: 'I recommend it. Better to book early.', style: 'Helpful office friend cadence, slight forward lean in the voice giving practical advice with warmth.', mood: 'helpful' }
    ]
  },
  // -----------------------------------------------------------------
  // 147 — aoi barista + ren uni, simple café order, short
  // -----------------------------------------------------------------
  {
    id: 'conv_00147',
    context: 'A quiet weekday afternoon at the café. Ren orders his usual; Aoi notices he looks tired and asks gently.',
    purpose: 'low-stakes café interaction — recognition of a regular through small attentiveness',
    ambient: 'cafe_afternoon',
    sound_effects: ['espresso_machine_soft', 'cafe_chatter_low'],
    target_vocab: ['いつもの', '疲れた', '大丈夫', 'ホット', 'ありがとう'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'いつものでお願いします。', en: 'The usual, please.', style: 'Low university student voice, slightly worn at the edges, comfortable familiarity in a steady delivery.', mood: 'tired-comfortable' },
      { speaker: 'aoi_barista', jp: 'はい、ホットラテですね。', en: 'Yes, hot latte, right?', style: 'Soft barista warmth confirming, dreamy cadence with a slight up-lift on the confirmation question.', mood: 'attentive' },
      { speaker: 'aoi_barista', jp: '今日、なんかちょっと疲れてる感じ？', en: 'Today, you seem a little tired, maybe?', style: 'Gentle artist-soft observation, careful not to intrude, voice lowering with quiet concern.', mood: 'concerned-gentle' },
      { speaker: 'ren_uni', jp: 'あー、テストでね。寝てない。', en: 'Ah, it\'s tests. Haven\'t slept.', style: 'Worn university drawl, easy admission, small self-deprecating laugh threaded under the words.', mood: 'self-deprecating' },
      { speaker: 'aoi_barista', jp: '大丈夫？少しシロップ多めにしとくね。', en: 'You okay? I\'ll add a little extra syrup for you.', style: 'Soft barista care extending, dreamy warmth in the offer, small kindness slipped in casually.', mood: 'caring-quiet' },
      { speaker: 'ren_uni', jp: 'ありがとう、助かる。', en: 'Thanks, that helps.', style: 'Genuine worn-out gratitude, university student voice softened by appreciation, quiet weight on each word.', mood: 'grateful' }
    ]
  },
  // -----------------------------------------------------------------
  // 148 — daichi kansai + mei romantic, first meeting
  // -----------------------------------------------------------------
  {
    id: 'conv_00148',
    context: 'A friend\'s housewarming. Mei meets Daichi for the first time. His Kansai accent catches her off-guard in a charmed way.',
    purpose: 'first-meeting curiosity / mild flirtation — connection over regional voice',
    ambient: 'apartment_party',
    sound_effects: ['party_chatter_low', 'glass_clink_far'],
    target_vocab: ['初めまして', '関西', '面白い', 'どこ', '出身'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'あ、初めまして。だいちって言います。', en: 'Oh, nice to meet you. I\'m Daichi.', style: 'Warm Kansai cadence with a rolling lift on the greeting, friendly grin in the voice unforced.', mood: 'friendly-open' },
      { speaker: 'mei_romantic', jp: 'メイです。あの、関西の方ですか？', en: 'I\'m Mei. Um, are you from Kansai?', style: 'Soft feminine curiosity, slight hesitation before the question, voice rising warmly with genuine interest.', mood: 'charmed-curious' },
      { speaker: 'daichi_kansai', jp: 'お、わかる？大阪やねん。', en: 'Oh, you can tell? I\'m from Osaka.', style: 'Surprised pleased Kansai lilt, the 「やねん」 landing with regional pride and casual confidence in delivery.', mood: 'pleased-surprised' },
      { speaker: 'mei_romantic', jp: 'なんか、話し方がすごく面白くて。', en: 'Somehow, your way of speaking is really interesting.', style: 'Genuine soft compliment, careful not to sound mocking, warm romantic voice landing each word gently.', mood: 'admiring' },
      { speaker: 'daichi_kansai', jp: 'よう言われるわ。メイちゃんはどこ出身？', en: 'I get told that a lot. Mei, where are you from?', style: 'Easy Kansai swing, the chan-form casual but respectful, curiosity turned back at her with warmth.', mood: 'returning-interest' },
      { speaker: 'mei_romantic', jp: '東京の方なので、関西の言葉が新鮮で。', en: 'I\'m from the Tokyo side, so Kansai dialect feels really fresh to me.', style: 'Articulate soft Tokyo voice, slight wonder coloring the words, leaning into the unfamiliar with appreciation.', mood: 'fascinated' },
      { speaker: 'daichi_kansai', jp: 'ほな、ちょっと教えたるわ。', en: 'Then, I\'ll teach you a bit.', style: 'Playful Kansai swagger, generous offering tone, an easy invitation with warmth not pressure.', mood: 'playful-inviting' },
      { speaker: 'mei_romantic', jp: '楽しみ。お願いします。', en: 'I\'m looking forward to it. Please.', style: 'Quiet thrilled smile in the voice, romantic soft register, sincerity carrying the brief response forward.', mood: 'delighted-shy' }
    ]
  },
  // -----------------------------------------------------------------
  // 149 — hiroshi_boss + yuki, quick task assignment
  // -----------------------------------------------------------------
  {
    id: 'conv_00149',
    context: 'Mid-morning at Yuki\'s desk. Hiroshi the boss stops by briefly to assign a small but urgent task.',
    purpose: 'workplace task handoff — clear authority, small respectful acknowledgment of effort',
    ambient: 'office_midmorning',
    sound_effects: ['printer_far', 'keyboard_quiet'],
    target_vocab: ['資料', '頼む', '午後', '間に合う', 'はい'],
    cast: ['hiroshi_boss', 'yuki_office'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '佐藤さん、ちょっといいかな。', en: 'Sato, do you have a moment?', style: 'Authoritative middle-aged boss tone, measured but not unkind, weight in each syllable establishing focus.', mood: 'measured-firm' },
      { speaker: 'yuki_office', jp: 'はい、何でしょうか。', en: 'Yes, what is it?', style: 'Quick office attentiveness, polite formal register straightening her posture audibly in the voice.', mood: 'attentive-formal' },
      { speaker: 'hiroshi_boss', jp: 'この資料、午後の会議までに頼めるか。', en: 'These materials — can I ask for them by the afternoon meeting?', style: 'Direct boss authority, measured weight on 「頼める」, treating it as a real request not an order.', mood: 'direct-respectful' },
      { speaker: 'yuki_office', jp: '午後ですね。間に合わせます。', en: 'By the afternoon. I\'ll make it on time.', style: 'Crisp office confidence, professional certainty without bravado, voice steady and committed throughout.', mood: 'committed' },
      { speaker: 'hiroshi_boss', jp: '助かるよ。よろしく頼む。', en: 'That helps. Thanks for handling it.', style: 'Quiet boss approval, a slight warming under the authority, brief sincere acknowledgment in the tone.', mood: 'approving-brief' },
      { speaker: 'yuki_office', jp: 'はい、お任せください。', en: 'Yes, leave it to me.', style: 'Steady professional reassurance, formal register held firmly, quiet pride in being trusted with the work.', mood: 'reassuring' }
    ]
  },
  // -----------------------------------------------------------------
  // 150 — yumiko + sho, bedtime
  // -----------------------------------------------------------------
  {
    id: 'conv_00150',
    context: 'Bedtime in Sho\'s room. Yumiko sits on the edge of his bed as he settles in, his small worries surfacing the way they often do at night.',
    purpose: 'tender bedtime — mother soothing a six-year-old\'s nighttime worries',
    ambient: 'bedroom_night',
    sound_effects: ['clock_tick_soft', 'distant_traffic_far'],
    target_vocab: ['眠れない', '心配', '大丈夫', '明日', '一緒'],
    cast: ['yumiko_mom', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: 'もう寝る時間だよ。電気消すね。', en: 'It\'s already bedtime. I\'ll turn off the light.', style: 'Warm maternal hush, slowing the cadence intentionally, voice softening to bedtime register throughout.', mood: 'soothing' },
      { speaker: 'sho_child', jp: 'おかあさん…ちょっとだけ、いて。', en: 'Mom… just a little bit, stay.', style: 'Small breathy six-year-old request, voice trailing off shyly, the request quiet but earnest underneath.', mood: 'small-requesting' },
      { speaker: 'yumiko_mom', jp: 'いいよ。どうしたの？', en: 'Okay. What\'s wrong?', style: 'Maternal attentive softness, the question opening space without pressing, real listening in the tone.', mood: 'attentive-soft' },
      { speaker: 'sho_child', jp: 'なんか、眠れない…。', en: 'Somehow… I can\'t sleep.', style: 'Tiny six-year-old voice, almost whispered, slight worried catch on the trailing-off vowel at the end.', mood: 'worried-tiny' },
      { speaker: 'yumiko_mom', jp: '心配なことある？', en: 'Is there something you\'re worried about?', style: 'Gentle maternal probe, careful pacing leaving room to answer, no rush behind the question at all.', mood: 'probing-gentle' },
      { speaker: 'sho_child', jp: '明日、お友達と話せるかな…。', en: 'Tomorrow, I wonder if I can talk to my friend…', style: 'Soft trailing six-year-old worry, voice dropping further on the hesitation, small real anxiety threaded in.', mood: 'anxious-small' },
      { speaker: 'yumiko_mom', jp: '大丈夫だよ。きっと話せる。', en: 'It\'ll be okay. You\'ll definitely be able to.', style: 'Steady maternal reassurance, soft warm certainty wrapping each word, conviction without forcing it.', mood: 'reassuring-firm' },
      { speaker: 'sho_child', jp: 'ほんと？', en: 'Really?', style: 'Single quiet six-year-old check, faint hope rising in the voice, vulnerability bare in the small word.', mood: 'hopeful-tiny' },
      { speaker: 'yumiko_mom', jp: 'うん。一緒に練習したじゃない？', en: 'Yes. We practiced together, didn\'t we?', style: 'Warm maternal reminder, slight smile in the voice anchoring him in shared memory, gentle and sure.', mood: 'anchoring' },
      { speaker: 'sho_child', jp: '…うん。おやすみ、おかあさん。', en: '…Yeah. Goodnight, Mom.', style: 'Small settled six-year-old exhale, voice softening into sleep already, contented and quietly secure.', mood: 'settled' }
    ]
  },
  // -----------------------------------------------------------------
  // 151 — ryosuke dad + riku teen, school talk, long
  // -----------------------------------------------------------------
  {
    id: 'conv_00151',
    context: 'Saturday afternoon, the kitchen table. Ryosuke wants to know how school is really going for his teenage son Riku, who has been quieter than usual lately.',
    purpose: 'father-son check-in — careful navigation of teenage privacy and parental concern',
    ambient: 'kitchen_afternoon',
    sound_effects: ['kettle_far', 'clock_tick_low'],
    target_vocab: ['学校', '最近', '別に', '勉強', '友達', '心配'],
    cast: ['ryosuke_dad', 'riku_teen'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'リク、最近学校どう？', en: 'Riku, how\'s school lately?', style: 'Steady father warmth, careful casualness in the opener, respect for teenage space woven into the question.', mood: 'careful-casual' },
      { speaker: 'riku_teen', jp: '別に、普通。', en: 'Eh, normal.', style: 'Standard teen non-answer, low flat delivery, eyes-elsewhere energy carried entirely through the brief tone.', mood: 'closed-off' },
      { speaker: 'ryosuke_dad', jp: '普通か。テストとかは？', en: 'Normal, huh. What about tests and such?', style: 'Patient father acknowledgment, slight gentle probe, no pressure in the follow-up just steady interest.', mood: 'patient-probing' },
      { speaker: 'riku_teen', jp: 'まあまあ。数学はちょっとやばいかも。', en: 'So-so. Math might be a bit rough.', style: 'Reluctant teen admission cracking through, dropped tone on 「やばい」, real concern beneath the casual register.', mood: 'reluctantly-admitting' },
      { speaker: 'ryosuke_dad', jp: 'やばいって、どんくらい？', en: 'Rough — how rough?', style: 'Calm father probing, dropping into his son\'s register slightly to meet him there, gentle non-judgmental tone.', mood: 'meeting-him' },
      { speaker: 'riku_teen', jp: '前より下がってる。勉強しても入ってこない。', en: 'It dropped from before. Even when I study it doesn\'t go in.', style: 'Teen frustration leaking through, voice tightening on 「入ってこない」, real defeat under the casual surface.', mood: 'frustrated-honest' },
      { speaker: 'ryosuke_dad', jp: 'そうか。何が一番きつい？', en: 'I see. What\'s the hardest part?', style: 'Father moving toward the problem carefully, soft pivot to specifics, room to answer without judgment provided.', mood: 'carefully-moving-in' },
      { speaker: 'riku_teen', jp: '関数のとこ。授業聞いてもよくわかんない。', en: 'The functions part. Even listening in class I don\'t really get it.', style: 'Teen specific confession, slight relief in being able to name it, voice loosening as he describes the actual problem.', mood: 'specifying-relieved' },
      { speaker: 'ryosuke_dad', jp: '先生に聞いてみた？', en: 'Have you tried asking the teacher?', style: 'Practical father suggestion, no shame attached to the question, framed as a simple option not a directive.', mood: 'practical-suggesting' },
      { speaker: 'riku_teen', jp: '聞きづらくて…。', en: 'It\'s hard to ask…', style: 'Quiet teen vulnerability surfacing, trailing off honestly, the social difficulty real and unhidden in the tone.', mood: 'vulnerable-honest' },
      { speaker: 'ryosuke_dad', jp: 'わかる。父さんも昔そうだった。', en: 'I get it. I was like that too back then.', style: 'Father memory-warm voice, dropping into shared experience, no lecture tone just genuine identification offered.', mood: 'identifying' },
      { speaker: 'riku_teen', jp: 'え、うそ。', en: 'Wait, no way.', style: 'Slight teen surprise breaking through, faint genuine interest in his father\'s past, the wall lowering a notch.', mood: 'surprised-opening' },
      { speaker: 'ryosuke_dad', jp: 'ほんと。今度一緒に見てみるか？', en: 'Really. Want to look at it together sometime?', style: 'Soft father offering, careful not to overstep, real interest in helping without making it a big deal.', mood: 'offering-gentle' },
      { speaker: 'riku_teen', jp: '…まあ、いいよ。', en: '…Yeah, alright.', style: 'Reluctant teen acceptance with the relief showing through the gruff surface, small but real openness underneath.', mood: 'relieved-gruff' },
      { speaker: 'ryosuke_dad', jp: '友達とは変わりない？', en: 'No changes with your friends?', style: 'Light father transition, casual probe into the social side, careful gentleness preserved in the casual tone.', mood: 'casual-checking' },
      { speaker: 'riku_teen', jp: 'うん、そっちは大丈夫。', en: 'Yeah, that side\'s fine.', style: 'Teen quick reassurance, voice lighter on this answer, genuine ease coming through the brief response.', mood: 'easy-reassuring' },
      { speaker: 'ryosuke_dad', jp: 'そっか。心配しすぎちゃ悪いけど、何かあったら言って。', en: 'Got it. I don\'t want to worry too much, but if anything comes up, tell me.', style: 'Settled father warmth, the worry held in check but offered openly, ending on an invitation not a demand.', mood: 'open-warm' },
      { speaker: 'riku_teen', jp: 'うん…ありがと。', en: 'Yeah… thanks.', style: 'Quiet teen acknowledgment, slight pause before the thanks giving it weight, real appreciation showing through.', mood: 'quietly-grateful' }
    ]
  },
  // -----------------------------------------------------------------
  // 152 — naoko aunt + sakura teen, life check-in
  // -----------------------------------------------------------------
  {
    id: 'conv_00152',
    context: 'Aunt Naoko has stopped by to drop off some clothes she no longer wears. She and Sakura sit at the kitchen table.',
    purpose: 'aunt-niece warmth — older relative offering low-pressure interest in a teenager\'s life',
    ambient: 'kitchen_afternoon',
    sound_effects: ['kettle_far'],
    target_vocab: ['元気', '最近', '何', 'クラブ', '楽しい'],
    cast: ['naoko_aunt', 'sakura_teen'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'さくらちゃん、元気にしてる？', en: 'Sakura-chan, you doing well?', style: 'Warm aunt cadence, the familiarity of years in the voice, easy bright lift on the greeting.', mood: 'warm-easy' },
      { speaker: 'sakura_teen', jp: '元気だよ、ナオコちゃん。久しぶり。', en: 'I\'m good, Naoko-chan. Long time no see.', style: 'Teen affection mixed with the casual familiar honorific, soft genuine warmth in the catch-up tone.', mood: 'affectionate-casual' },
      { speaker: 'naoko_aunt', jp: '学校はどう？最近何してるの？', en: 'How\'s school? What have you been up to lately?', style: 'Easy aunt curiosity, no pressure in the questions, breezy chain of interest delivered with warmth.', mood: 'curious-easy' },
      { speaker: 'sakura_teen', jp: 'クラブで忙しい。テニス始めたの。', en: 'Busy with club. I started tennis.', style: 'Bright teen energy lifting on 「テニス」, real enthusiasm threading through, proud to share it casually.', mood: 'proud-bright' },
      { speaker: 'naoko_aunt', jp: 'え、テニス？かっこいいじゃない。', en: 'Eh, tennis? That\'s cool.', style: 'Pleased surprised aunt voice, genuine admiration rising in the response, the compliment unforced and warm.', mood: 'impressed-warm' },
      { speaker: 'sakura_teen', jp: 'まだ下手だけど、楽しいよ。', en: 'I\'m still bad at it, but it\'s fun.', style: 'Modest teen self-correction with the joy still leaking through, honest balance in the voice between humility and pleasure.', mood: 'humble-happy' },
      { speaker: 'naoko_aunt', jp: '楽しいのが一番。続けてね。', en: 'Fun is what matters most. Keep at it.', style: 'Aunt gentle wisdom delivered without weight, soft genuine encouragement rounding off the thought.', mood: 'gently-encouraging' },
      { speaker: 'sakura_teen', jp: 'うん、頑張る。ありがとう。', en: 'Yeah, I\'ll work hard. Thanks.', style: 'Teen sincere acceptance, voice settling warmly, real appreciation for the casual encouragement woven in.', mood: 'sincere-warm' }
    ]
  },
  // -----------------------------------------------------------------
  // 153 — tatsuya country + naoko aunt, hometown produce
  // -----------------------------------------------------------------
  {
    id: 'conv_00153',
    context: 'Naoko visits her cousin Tatsuya\'s farmhouse in the countryside. He shows her the year\'s harvest with quiet pride.',
    purpose: 'cousin reunion / hometown pride — rural produce as a way of staying connected',
    ambient: 'countryside_afternoon',
    sound_effects: ['birds_distant', 'wind_through_field'],
    target_vocab: ['今年', '畑', '野菜', '大きい', '味'],
    cast: ['tatsuya_country', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'よく来たな。今年はいい出来だぞ。', en: 'Good of you to come. This year\'s a good crop.', style: 'Slow rural warm bass, weather-worn cadence, quiet farmer pride landing on 「いい出来」 with weight.', mood: 'quietly-proud' },
      { speaker: 'naoko_aunt', jp: 'わあ、立派。畑、広くなった？', en: 'Wow, splendid. The field — did it get bigger?', style: 'Genuine aunt admiration, soft sincere wonder, bright lift of recognition in her city-warm voice.', mood: 'admiring-warm' },
      { speaker: 'tatsuya_country', jp: '少し広げた。ほら、この大根。', en: 'Expanded it a bit. Here, look at this daikon.', style: 'Steady countryside cadence, the show-and-tell of a farmer who lets the harvest speak for itself.', mood: 'understated-proud' },
      { speaker: 'naoko_aunt', jp: 'すごい、大きい！重いね。', en: 'Wow, big! It\'s heavy.', style: 'Aunt warm exclamation, hands-on surprise carrying through the voice, genuine appreciation unfeigned.', mood: 'surprised-pleased' },
      { speaker: 'tatsuya_country', jp: '味も濃いぞ。今晩、煮物にしよう。', en: 'The flavor\'s rich too. Tonight, we\'ll do nimono.', style: 'Farmer\'s plain confidence about his food, generous host warmth opening up underneath the gruffness.', mood: 'generous-confident' },
      { speaker: 'naoko_aunt', jp: '楽しみ。お土産にも少しもらえる？', en: 'I\'m looking forward to it. Can I get a little to take home too?', style: 'Aunt cheerful asking, comfortable family-shorthand in the request, no formality between cousins evident.', mood: 'cheerfully-asking' },
      { speaker: 'tatsuya_country', jp: 'もちろん。たくさん持って帰れ。', en: 'Of course. Take plenty home.', style: 'Generous countryside dismissal of the question as obvious, gruff warmth pouring through the order.', mood: 'generously-gruff' },
      { speaker: 'naoko_aunt', jp: 'ありがとう。みんな喜ぶよ。', en: 'Thanks. Everyone will be happy.', style: 'Warm aunt gratitude with the city-side joy already imagined in the voice, sincere and bright.', mood: 'grateful-anticipating' }
    ]
  },
  // -----------------------------------------------------------------
  // 154 — asuka teacher + hina, after class
  // -----------------------------------------------------------------
  {
    id: 'conv_00154',
    context: 'After class. Hina has stayed behind to show Ms. Asuka a picture she drew during break.',
    purpose: 'teacher-student bond — attentive recognition of a child\'s small offering',
    ambient: 'classroom_after',
    sound_effects: ['distant_school_bell', 'children_far'],
    target_vocab: ['先生', '見て', '上手', '色', '描いた'],
    cast: ['asuka_teacher', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: '先生、見て見て！描いたの！', en: 'Teacher, look look! I drew it!', style: 'Bright urgent child voice, the second 「見て」 even brighter, a small jumping energy in delivery.', mood: 'eager-bright' },
      { speaker: 'asuka_teacher', jp: 'わあ、すごく綺麗な色だね。', en: 'Wow, what really pretty colors.', style: 'Patient teacher warmth, kneeling-down register in the voice, real attention given to the small artwork.', mood: 'attentive-warm' },
      { speaker: 'hina_child', jp: 'ピンクが一番すき！', en: 'I like pink the best!', style: 'High child certainty, total conviction on the favorite, bright pitched declaration delivered fully.', mood: 'declarative-bright' },
      { speaker: 'asuka_teacher', jp: 'お花、上手に描けてるよ。', en: 'You drew the flowers really well.', style: 'Teacher specific praise, naming what is good carefully, encouragement that recognizes the actual effort.', mood: 'specifically-praising' },
      { speaker: 'hina_child', jp: 'えへへ、おかあさんにあげる！', en: 'Heehee, I\'m giving it to Mom!', style: 'Pleased child giggling chirp, the gift-plan already lifting the voice into anticipated joy ahead.', mood: 'pleased-anticipating' },
      { speaker: 'asuka_teacher', jp: 'きっと喜んでくれるよ。気をつけて帰ってね。', en: 'She\'ll surely be happy. Get home safely now.', style: 'Warm teacher closing, gentle send-off softness, the care behind the routine instruction palpable in tone.', mood: 'warmly-closing' }
    ]
  },
  // -----------------------------------------------------------------
  // 155 — sachiko grandma + yumiko mom, cooking together, long
  // -----------------------------------------------------------------
  {
    id: 'conv_00155',
    context: 'A Sunday in the family kitchen. Sachiko teaches her daughter Yumiko an old recipe that came from her own mother.',
    purpose: 'recipe transmission across three generations — quiet love through shared technique',
    ambient: 'kitchen_afternoon',
    sound_effects: ['simmering_pot', 'wooden_spoon_soft'],
    target_vocab: ['母', '昔', '味', '覚えて', '少し', '入れる'],
    cast: ['sachiko_grandma', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'ゆみこ、こっち見て。順番が大事なの。', en: 'Yumiko, look here. The order matters.', style: 'Soft grandmother teaching cadence, deliberate pacing, quiet weight on 「順番が大事」 grounding the lesson.', mood: 'teaching-soft' },
      { speaker: 'yumiko_mom', jp: 'うん、ちゃんと見てる。', en: 'Yes, I\'m watching properly.', style: 'Adult daughter softening into student register, attentive maternal voice quieted by reverence for the lesson.', mood: 'attentive-respectful' },
      { speaker: 'sachiko_grandma', jp: 'まず、お醤油を少しだけね。', en: 'First, just a little soy sauce.', style: 'Grandmother slow demonstrating voice, the 「少しだけ」 floating with practiced certainty earned over decades.', mood: 'demonstrating-soft' },
      { speaker: 'yumiko_mom', jp: 'これくらい？', en: 'About this much?', style: 'Daughter checking, voice rising on the question with humble uncertainty, no shame in not knowing yet.', mood: 'humble-checking' },
      { speaker: 'sachiko_grandma', jp: 'もうちょっと。母がそう教えてくれたのよ。', en: 'A little more. My mother taught me that way.', style: 'Soft grandmother memory threading through, the past surfacing gently inside the practical instruction.', mood: 'tenderly-remembering' },
      { speaker: 'yumiko_mom', jp: 'おばあちゃんが？', en: 'Grandmother did?', style: 'Daughter\'s curiosity opening, the lineage suddenly visible to her, voice softening with recognition.', mood: 'realizing-soft' },
      { speaker: 'sachiko_grandma', jp: 'そう。昔の人の味よ。', en: 'Yes. The taste of people from long ago.', style: 'Reflective grandmother weight, slow deliberate pacing, each word holding generations behind it gently.', mood: 'reflective-weighted' },
      { speaker: 'yumiko_mom', jp: '私もちゃんと覚えておきたい。', en: 'I want to remember it properly too.', style: 'Adult daughter sincere intent surfacing, voice carrying the weight of wanting to carry it forward.', mood: 'sincerely-intent' },
      { speaker: 'sachiko_grandma', jp: '覚えておけば、いつでも作れるからね。', en: 'If you remember it, you can make it anytime.', style: 'Gentle grandmother wisdom offered as inheritance, soft warm certainty in the delivery throughout.', mood: 'inheritance-soft' },
      { speaker: 'yumiko_mom', jp: '次は何を入れるの？', en: 'What do I put in next?', style: 'Practical daughter pivot back to the task, voice steady and ready to receive the next step.', mood: 'practical-ready' },
      { speaker: 'sachiko_grandma', jp: 'お砂糖。これは味のかなめ。', en: 'Sugar. This is the heart of the flavor.', style: 'Grandmother\'s confident knowledge delivered slowly, 「かなめ」 lifting slightly with quiet pride.', mood: 'confidently-knowing' },
      { speaker: 'yumiko_mom', jp: 'へえ、お砂糖がそんなに大事なんだ。', en: 'Huh, sugar is that important.', style: 'Daughter\'s soft realization, the learning landing clearly, voice warming with new appreciation for technique.', mood: 'newly-realizing' },
      { speaker: 'sachiko_grandma', jp: 'うん。少しでも、ちゃんと入れること。', en: 'Yes. Even if just a little, put it in properly.', style: 'Grandmother firm gentle instruction, the principle held lightly but unmistakably in the soft voice.', mood: 'firmly-gentle' },
      { speaker: 'yumiko_mom', jp: 'はい。今度は私がはなちゃんに教えるね。', en: 'Yes. Next time I\'ll teach Hana.', style: 'Daughter\'s soft promise extending forward, voice carrying the chain of generations into the future tenderly.', mood: 'promising-tender' },
      { speaker: 'sachiko_grandma', jp: 'いいね。母も喜ぶよ、きっと。', en: 'That\'s wonderful. My mother would be glad too, surely.', style: 'Grandmother quiet emotional landing, the 「きっと」 carrying tearful warmth without breaking the soft register.', mood: 'quietly-moved' }
    ]
  },
  // -----------------------------------------------------------------
  // 156 — goro grandpa + sho child, origami
  // -----------------------------------------------------------------
  {
    id: 'conv_00156',
    context: 'A rainy afternoon. Grandpa Goro shows Sho how to fold a paper crane, patient as the small hands struggle.',
    purpose: 'grandfather teaching grandchild — patience and small mastery',
    ambient: 'living_room_rain',
    sound_effects: ['rain_window_soft', 'paper_crinkle'],
    target_vocab: ['折る', 'ゆっくり', '上手', '紙', '鶴'],
    cast: ['goro_grandpa', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'goro_grandpa', jp: 'まず、こうやって半分に折ってごらん。', en: 'First, try folding it in half like this.', style: 'Slow grandfather demonstration, warm patient cadence, deliberate hands-on instruction floating gently.', mood: 'patiently-demonstrating' },
      { speaker: 'sho_child', jp: '…こう？', en: '…Like this?', style: 'Tiny careful six-year-old checking, voice barely above whisper, focused brow audible in the question.', mood: 'concentrated-tiny' },
      { speaker: 'goro_grandpa', jp: 'うん、いいよ。ゆっくりでいい。', en: 'Yes, that\'s good. Slow is fine.', style: 'Reassuring grandfather warmth, no rush in the praise, soft permission to take all the time needed.', mood: 'reassuring-soft' },
      { speaker: 'sho_child', jp: 'ここ、難しい…。', en: 'This part… is hard.', style: 'Small six-year-old struggle voice, careful honesty admitting difficulty, no whine just observation softly.', mood: 'quietly-struggling' },
      { speaker: 'goro_grandpa', jp: '一緒にやろう。手を貸して。', en: 'Let\'s do it together. Lend me your hand.', style: 'Grandfather gentle offer, slow deliberate kindness in the proposal, no taking-over just helping alongside.', mood: 'gently-offering' },
      { speaker: 'sho_child', jp: 'うん。', en: 'Mm.', style: 'Quiet six-year-old assent, soft small voice accepting the help, comfort threading through the brief sound.', mood: 'accepting-soft' },
      { speaker: 'goro_grandpa', jp: 'ほら、ここを押さえて。よし。', en: 'Here, press this part. There.', style: 'Steady grandfather guidance, voice low and warm, the 「よし」 landing with shared satisfaction earned.', mood: 'guiding-satisfied' },
      { speaker: 'sho_child', jp: 'できた…！鶴できた！', en: 'I did it…! I made a crane!', style: 'Quiet six-year-old amazement transitioning to bright soft delight, voice lifting on the second exclamation.', mood: 'quietly-delighted' },
      { speaker: 'goro_grandpa', jp: 'すごいなあ、上手だぞ。', en: 'How wonderful, you did well.', style: 'Genuine grandfather warmth blooming, slow stretched 「なあ」 holding deep affectionate pride throughout.', mood: 'proudly-warm' }
    ]
  },
  // -----------------------------------------------------------------
  // 157 — mrs_mori neighbor + yumiko, neighbor chat
  // -----------------------------------------------------------------
  {
    id: 'conv_00157',
    context: 'Mrs. Mori from next door has brought over some homemade pickles. They chat briefly at the genkan.',
    purpose: 'neighborly warmth — small gift exchanged with light gossip and care',
    ambient: 'genkan_afternoon',
    sound_effects: ['cicadas_distant'],
    target_vocab: ['お裾分け', '美味しい', '頂きます', '主人', '元気'],
    cast: ['mrs_mori_neighbor', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: 'ゆみこさん、これ、お裾分け。', en: 'Yumiko-san, here — a little something to share.', style: 'Warm neighbor voice in late-middle-age cadence, easy gift-giving energy threaded throughout casually.', mood: 'neighborly-easy' },
      { speaker: 'yumiko_mom', jp: 'あら、お漬物？嬉しい！', en: 'Oh, pickles? I\'m so happy!', style: 'Bright maternal pleasure surfacing, genuine surprised delight, the appreciation unfeigned and warm.', mood: 'delighted-genuine' },
      { speaker: 'mrs_mori_neighbor', jp: '今年のきゅうり、よく出来てね。', en: 'This year\'s cucumbers turned out really well.', style: 'Neighbor modest pride flowing through, the seasonal pleasure carried easily in conversational warmth.', mood: 'modestly-proud' },
      { speaker: 'yumiko_mom', jp: 'いつもありがとうございます。頂きます。', en: 'Thank you always. We\'ll enjoy it.', style: 'Polite maternal warmth, sincere appreciation extending across years of small kindnesses received gratefully.', mood: 'sincerely-grateful' },
      { speaker: 'mrs_mori_neighbor', jp: 'ご主人、お元気？', en: 'Is your husband doing well?', style: 'Neighbor easy inquiry, the years of knowing the family in the casual delivery, real interest behind it.', mood: 'easy-inquiring' },
      { speaker: 'yumiko_mom', jp: 'はい、最近ちょっと忙しいけど元気です。', en: 'Yes, a bit busy lately, but he\'s well.', style: 'Warm maternal sharing, the qualifier acknowledged honestly, then settling back into reassurance gently.', mood: 'honestly-reassuring' },
      { speaker: 'mrs_mori_neighbor', jp: 'それは何より。無理しないようにね。', en: 'That\'s the best thing. Tell him not to overdo it.', style: 'Neighbor warm parting concern, voice carrying real care into the brief send-off naturally.', mood: 'warmly-concerned' },
      { speaker: 'yumiko_mom', jp: '伝えておきます。本当にありがとう。', en: 'I\'ll tell him. Truly, thank you.', style: 'Soft maternal closing, sincere appreciation rounded warmly, the small relationship cared for properly here.', mood: 'softly-closing' }
    ]
  },
  // -----------------------------------------------------------------
  // 158 — hiroshi_elder + sachiko, looking at old photos, long
  // -----------------------------------------------------------------
  {
    id: 'conv_00158',
    context: 'A slow evening. Hiroshi-elder and Sachiko have pulled out an old photo album from when their children were small.',
    purpose: 'long marriage / shared memory — quiet recollection between two who have lived together for decades',
    ambient: 'tatami_evening',
    sound_effects: ['clock_tick_low', 'tea_pour_far'],
    target_vocab: ['昔', '写真', '若い', '懐かしい', '子供', '時代'],
    cast: ['hiroshi_elder', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_elder', jp: 'これ、覚えてるか。', en: 'You remember this?', style: 'Slow elder voice, weighted with shared history, the question soft because the answer is already known.', mood: 'shared-knowing' },
      { speaker: 'sachiko_grandma', jp: 'もちろん。あの頃の浩司ね。', en: 'Of course. That\'s Hiroshi from back then.', style: 'Soft grandmother recognition, decades of tenderness in the named identification, voice warming at memory.', mood: 'tenderly-recognizing' },
      { speaker: 'hiroshi_elder', jp: '若かったなあ、二人とも。', en: 'We were both young, weren\'t we.', style: 'Reflective elder weight, the 「なあ」 stretching with held emotion, quiet wonder at the passage of years.', mood: 'wonderingly-reflective' },
      { speaker: 'sachiko_grandma', jp: 'この写真、温泉のときでしょう。', en: 'This photo — it was at the hot spring, right?', style: 'Gentle grandmother specifying, soft fingertip-on-image cadence, certainty growing into a question to confirm.', mood: 'gently-specifying' },
      { speaker: 'hiroshi_elder', jp: 'そうだ。子供たちまだ小さくて。', en: 'That\'s right. The kids were still small.', style: 'Slow elder confirmation, the children\'s smallness made present again through deliberate pacing softly.', mood: 'softly-recalling' },
      { speaker: 'sachiko_grandma', jp: '懐かしいわ。本当に懐かしい。', en: 'How nostalgic. Really nostalgic.', style: 'Quiet grandmother emotion, the repetition adding weight without raising volume, deeply felt softness throughout.', mood: 'deeply-nostalgic' },
      { speaker: 'hiroshi_elder', jp: 'あの時代は、何もなかったが、何でもあった。', en: 'Back then, we had nothing, but we had everything.', style: 'Slow elder philosophical weight, the paradox landing with deliberate pacing, deeply earned wisdom underneath.', mood: 'philosophical-weighted' },
      { speaker: 'sachiko_grandma', jp: 'そうね。お金はなかったけど、笑ってたわ。', en: 'That\'s so. We didn\'t have money, but we laughed.', style: 'Grandmother quiet agreement, the laugh-in-poverty memory carried tenderly through soft careful delivery.', mood: 'tenderly-agreeing' },
      { speaker: 'hiroshi_elder', jp: 'よく食べたな、白いごはんを。', en: 'We sure ate well — just white rice.', style: 'Elder warm small chuckle threaded under the recollection, the simple meal honored in the slow pacing.', mood: 'warmly-chuckling' },
      { speaker: 'sachiko_grandma', jp: 'あの頃の白いごはんが一番美味しかった気がする。', en: 'I feel like the white rice back then was the most delicious.', style: 'Grandmother soft conviction, voice carrying the deep memory of taste tied to youth and hardship together.', mood: 'softly-convicted' },
      { speaker: 'hiroshi_elder', jp: 'みんな同じだったからな。', en: 'Because everyone was the same.', style: 'Elder slow communal weight, the shared-poverty solidarity surfacing gently in the deliberate cadence.', mood: 'communally-knowing' },
      { speaker: 'sachiko_grandma', jp: 'この子の顔、はなにそっくり。', en: 'This child\'s face — exactly like Hana.', style: 'Sudden gentle grandmother surprise threading through, the resemblance freshly seen, tender amazement softly.', mood: 'tenderly-surprised' },
      { speaker: 'hiroshi_elder', jp: 'ほんとだな。血は争えん。', en: 'Truly. Blood doesn\'t lie.', style: 'Quiet elder agreement, the old saying delivered with comfortable familiarity, slow conviction held throughout.', mood: 'comfortably-affirming' },
      { speaker: 'sachiko_grandma', jp: 'またゆっくり見ましょう、こういうの。', en: 'Let\'s look at these slowly again sometime.', style: 'Soft grandmother proposal, the future already imagined as another evening like this, gentle settling tone.', mood: 'gently-proposing' },
      { speaker: 'hiroshi_elder', jp: 'うん。たまには、こういう夜もいい。', en: 'Yes. Now and then, an evening like this is good.', style: 'Settled elder closing, quiet contentment held in the brief response, deeply earned peace audible throughout.', mood: 'settled-content' }
    ]
  },
  // -----------------------------------------------------------------
  // 159 — takeda officer + ren, lost wallet
  // -----------------------------------------------------------------
  {
    id: 'conv_00159',
    context: 'A small police box in the evening. Ren has lost his wallet on the train and is filing a report with Officer Takeda.',
    purpose: 'small civic interaction — institutional kindness meeting a student\'s minor crisis',
    ambient: 'koban_evening',
    sound_effects: ['traffic_outside_low', 'paperwork_rustle'],
    target_vocab: ['財布', 'なくした', '電車', '届く', 'かもしれない'],
    cast: ['takeda_officer', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'すみません、財布なくしちゃって。', en: 'Excuse me, I lost my wallet.', style: 'Apologetic worn university voice, slight stress audible underneath the casual reporting, real concern present.', mood: 'apologetically-stressed' },
      { speaker: 'takeda_officer', jp: 'はい。落ち着いて、どこでですか。', en: 'Yes. Stay calm — where was it?', style: 'Steady officer cadence, professional calm with real human warmth underneath, the calming directive gentle.', mood: 'professionally-calm' },
      { speaker: 'ren_uni', jp: '電車の中だと思います、たぶん。', en: 'On the train, I think. Maybe.', style: 'University student uncertain voice, second-guessing himself, the 「たぶん」 trailing with worried hesitation.', mood: 'uncertain-worried' },
      { speaker: 'takeda_officer', jp: '何線ですか。時間も覚えてますか。', en: 'Which line? Do you remember the time too?', style: 'Officer practical sequence of questions, no judgment, just efficient gentle information gathering throughout.', mood: 'efficiently-gentle' },
      { speaker: 'ren_uni', jp: '山手線、たぶん七時ぐらいです。', en: 'Yamanote line, around seven probably.', style: 'University student steadying answer, gaining traction as he provides concrete information, voice less shaky.', mood: 'steadying' },
      { speaker: 'takeda_officer', jp: '届け出しときましょう。届く可能性ありますよ。', en: 'Let\'s file a report. There\'s a chance it\'ll turn up.', style: 'Officer practical reassurance, real hope offered with experience behind it, calming confidence throughout.', mood: 'practically-reassuring' },
      { speaker: 'ren_uni', jp: 'ほんとですか。良かった…。', en: 'Really? Oh good…', style: 'University student visible relief audible, the breath releasing, the trailing-off acknowledging emotional shift.', mood: 'visibly-relieved' },
      { speaker: 'takeda_officer', jp: 'よくあることですから。書類記入してください。', en: 'It happens often. Please fill out this form.', style: 'Officer warm normalization, removing shame from the situation, gentle routine instruction delivered carefully.', mood: 'normalizing-warm' }
    ]
  },
  // -----------------------------------------------------------------
  // 160 — saito doctor + hina + yumiko, clinic visit (3-speaker)
  // -----------------------------------------------------------------
  {
    id: 'conv_00160',
    context: 'A pediatric clinic. Hina has a slight fever; Yumiko brought her in. Dr. Saito examines her gently.',
    purpose: 'pediatric checkup — three voices threading care between adult professional and child',
    ambient: 'clinic_quiet',
    sound_effects: ['stethoscope_soft', 'paper_chart'],
    target_vocab: ['熱', '咳', '少し', '薬', '心配'],
    cast: ['saito_doctor', 'hina_child', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'ひなちゃん、こんにちは。今日はどうしたかな。', en: 'Hina, hello. What\'s going on today?', style: 'Gentle doctor voice tuned to child register, warm professional kindness with no condescension audible throughout.', mood: 'gentle-professional' },
      { speaker: 'hina_child', jp: '熱がでた…。', en: 'I got a fever…', style: 'Small wilted child voice, the energy diminished by illness, soft and honest trailing-off at the end.', mood: 'wilted-soft' },
      { speaker: 'yumiko_mom', jp: '昨日の夜から、ちょっと咳もしてて。', en: 'Since last night, she\'s been coughing a little too.', style: 'Maternal supplementing voice, concerned but composed, providing the clinical details a doctor needs efficiently.', mood: 'concerned-composed' },
      { speaker: 'saito_doctor', jp: 'なるほど。じゃあ、ちょっと喉見せてね。', en: 'I see. Then, let me look at your throat a bit.', style: 'Patient doctor pivoting to exam, child-pitched warmth slipped into the professional cadence carefully.', mood: 'professionally-warm' },
      { speaker: 'hina_child', jp: 'あー…。', en: 'Aaah…', style: 'Small obedient child sound, slightly nervous but trusting, the sound itself wilted with feeling unwell.', mood: 'obedient-wilted' },
      { speaker: 'saito_doctor', jp: '少し赤いね。風邪の始まりかな。', en: 'A little red. Maybe the start of a cold.', style: 'Doctor matter-of-fact gentleness, naming the finding without alarm, soothing professional clarity throughout.', mood: 'matter-of-factly-gentle' },
      { speaker: 'yumiko_mom', jp: 'お薬、もらえますか。', en: 'Can we get some medicine?', style: 'Maternal practical asking, calm now that there\'s a diagnosis, voice steady and ready for instruction.', mood: 'practically-calm' },
      { speaker: 'saito_doctor', jp: '出しときますね。ゆっくり休んでね、ひなちゃん。', en: 'I\'ll prescribe some. Rest well, Hina.', style: 'Doctor warm closing, professional efficiency softening into child-directed kindness, real care in the send-off.', mood: 'warm-closing' },
      { speaker: 'hina_child', jp: 'はい…ありがとう、先生。', en: 'Yes… thank you, doctor.', style: 'Small wilted child gratitude, real politeness held even through the illness, voice soft but courteous.', mood: 'courteous-wilted' }
    ]
  },
  // -----------------------------------------------------------------
  // 161 — aoi + asuka + mei, café (3-speaker)
  // -----------------------------------------------------------------
  {
    id: 'conv_00161',
    context: 'Mei is at the café. Asuka the teacher comes in and recognizes Mei from a school event. Aoi serves them while they catch up briefly.',
    purpose: 'small social bridge — three different female voices crossing in a third place',
    ambient: 'cafe_afternoon',
    sound_effects: ['espresso_machine_soft', 'background_chatter_low'],
    target_vocab: ['お久しぶり', 'いらっしゃい', '何', '注文', '同じ'],
    cast: ['aoi_barista', 'asuka_teacher', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'いらっしゃいませ。', en: 'Welcome.', style: 'Soft dreamy barista greeting, warm professional artist-soft tone landing gently as customers enter.', mood: 'dreamy-warm' },
      { speaker: 'asuka_teacher', jp: 'あ、メイさん？お久しぶり！', en: 'Oh, Mei-san? Long time no see!', style: 'Bright teacher recognition surfacing, voice lifting with genuine pleasure at the unexpected encounter.', mood: 'pleasantly-surprised' },
      { speaker: 'mei_romantic', jp: 'あすか先生、こんにちは！偶然ですね。', en: 'Asuka-sensei, hello! What a coincidence.', style: 'Romantic feminine warmth quickening with delight, soft pleased recognition extending the moment naturally.', mood: 'delighted-warm' },
      { speaker: 'asuka_teacher', jp: 'ここよく来るんですか？', en: 'Do you come here often?', style: 'Teacher easy curiosity, the question light and friendly, real interest threading through the casual delivery.', mood: 'casually-curious' },
      { speaker: 'mei_romantic', jp: '週末はだいたい。コーヒー美味しくて。', en: 'Pretty much every weekend. The coffee\'s good.', style: 'Soft romantic recommend, the praise sincere, voice warming with genuine appreciation for the small place.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: 'ご注文、お決まりですか？', en: 'Have you decided on your order?', style: 'Dreamy barista soft prompt, careful not to interrupt, warm patient question floating gently into the pause.', mood: 'gently-prompting' },
      { speaker: 'asuka_teacher', jp: 'メイさんと同じものを。', en: 'I\'ll have the same as Mei-san.', style: 'Bright teacher easy decision, the casual following lifting the moment, genuine warmth extending toward Mei.', mood: 'easily-following' },
      { speaker: 'mei_romantic', jp: 'えへへ、嬉しい。お席空いてますよ。', en: 'Heehee, I\'m happy. There\'s a seat free.', style: 'Soft romantic shy laugh, voice lifting with quiet pleasure, then warm invitation extending naturally.', mood: 'shyly-pleased' },
      { speaker: 'aoi_barista', jp: 'お持ちしますね。少々お待ちください。', en: 'I\'ll bring it over. Just a moment, please.', style: 'Soft barista closing, dreamy warm professional voice extending the service in gentle careful cadence.', mood: 'softly-serving' }
    ]
  },
  // -----------------------------------------------------------------
  // 162 — daichi + ren + kenji, izakaya (3-speaker, long)
  // -----------------------------------------------------------------
  {
    id: 'conv_00162',
    context: 'Three guys at an izakaya — Daichi (Kansai), Ren (uni student), Kenji (office worker). Friends-of-friends bond over the second round.',
    purpose: 'guys\' night out — three contrasting male voices warming up across drinks',
    ambient: 'izakaya_evening',
    sound_effects: ['izakaya_chatter', 'glass_clink'],
    target_vocab: ['乾杯', '仕事', '大学', '面白い', '飲む', 'もう一杯'],
    cast: ['daichi_kansai', 'ren_uni', 'kenji_office'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'ほな、乾杯しよか！', en: 'Right then, let\'s cheers!', style: 'Big Kansai opener, warm round confidence on 「乾杯」, generous energy gathering everyone into the toast.', mood: 'gathering-warm' },
      { speaker: 'kenji_office', jp: '乾杯。今日もお疲れさまです。', en: 'Cheers. Good work today too.', style: 'Salaryman polite respond, slight formality even at the bar, sincere warmth threaded through the routine.', mood: 'politely-warm' },
      { speaker: 'ren_uni', jp: 'お疲れー。あー、生き返るわ。', en: 'Cheers. Ahh, I\'m alive again.', style: 'University student loosening already, the casual greeting tossed off, real exhausted relief audible throughout.', mood: 'relievedly-casual' },
      { speaker: 'daichi_kansai', jp: 'ケンジさん、仕事忙しいんちゃう？', en: 'Kenji-san, work\'s busy isn\'t it?', style: 'Kansai easy probe, the regional ending softening the question, real interest behind the casual delivery.', mood: 'easily-probing' },
      { speaker: 'kenji_office', jp: '今週はちょっと山場で。やっと一段落です。', en: 'This week was a peak. Finally a breather.', style: 'Earnest salaryman admission, professional language even relaxing, real tired relief settling into the voice.', mood: 'earnestly-relieved' },
      { speaker: 'ren_uni', jp: '社会人すげー。俺、大学のレポートだけで死にそう。', en: 'Working life is intense. I\'m dying just from college reports.', style: 'University student exaggerated worn voice, the playful self-deprecation real underneath the dramatic frame.', mood: 'dramatically-worn' },
      { speaker: 'daichi_kansai', jp: 'なんの勉強しとんの？', en: 'What are you studying?', style: 'Kansai friendly curiosity, casual swing in the dialect, real interest in the younger guy\'s life evident.', mood: 'friendly-curious' },
      { speaker: 'ren_uni', jp: '経済学。でも全然興味出ない。', en: 'Economics. But I just can\'t get interested.', style: 'University student honest flat admission, voice dropping on the second half with real disengagement audible throughout.', mood: 'honestly-disengaged' },
      { speaker: 'kenji_office', jp: 'あー、わかる。俺も大学そんな感じだった。', en: 'Ah, I get it. I was kind of like that in college too.', style: 'Salaryman warmth extending toward the younger one, identification offered without lecture, real shared recall.', mood: 'identifying-warm' },
      { speaker: 'daichi_kansai', jp: 'ほな、何しよう思ってんの将来？', en: 'So what are you thinking about doing in the future?', style: 'Kansai bigger curiosity opening, the dialect making the heavy question land lighter and friendlier somehow.', mood: 'lightly-probing' },
      { speaker: 'ren_uni', jp: 'それが全然決まらん。みんなどうやって決めたん？', en: 'That\'s the thing — can\'t decide. How did everyone decide?', style: 'University student genuine question loosening, the alcohol opening real vulnerability under the casual frame.', mood: 'genuinely-asking' },
      { speaker: 'kenji_office', jp: '俺は、なんとなく流れで。意外と多い気がする、それ。', en: 'Me, just kind of by flow. I think that\'s actually pretty common.', style: 'Salaryman gentle honesty, removing the pressure from the question, real reassurance in the casual disclosure.', mood: 'gently-honest' },
      { speaker: 'daichi_kansai', jp: 'わいも似たようなもんやで。やりながら見つかる。', en: 'Same here, more or less. You find it while doing.', style: 'Kansai philosophical light delivery, the wisdom held casually, real practical experience behind the dialect.', mood: 'philosophically-light' },
      { speaker: 'ren_uni', jp: 'なんか、ちょっと安心した。', en: 'Somehow, I feel a little relieved.', style: 'University student visible softening, the warmth of being met with experience landing, real gratitude audible.', mood: 'visibly-softened' },
      { speaker: 'daichi_kansai', jp: 'ほな、もう一杯いこか！', en: 'Right, let\'s have another round!', style: 'Big Kansai gathering energy returning, the conversation closed warmly and pivoting to celebration of being together.', mood: 'celebrative-gathering' },
      { speaker: 'kenji_office', jp: 'いいですね。今日は飲めそうです。', en: 'Sounds good. I feel like I can drink today.', style: 'Salaryman quietly committing to the night, the relaxation deepening into shared celebration warmly.', mood: 'quietly-committing' },
      { speaker: 'ren_uni', jp: 'おっ、いいねー。俺もー。', en: 'Oh, nice. Me too.', style: 'University student easy joining, the lightened mood carrying his voice up into the shared celebration.', mood: 'easily-joining' }
    ]
  },
  // -----------------------------------------------------------------
  // 163 — hiroshi_boss + hiroshi_elder + ryosuke_dad + yumiko_mom, family dinner, 4-speaker
  // -----------------------------------------------------------------
  {
    id: 'conv_00163',
    context: 'Family dinner at the elder Hiroshi\'s house. Hiroshi-boss (mid-career), his father Hiroshi-elder, Ryosuke (brother-in-law), and Yumiko (Ryosuke\'s wife) discuss the elder\'s plan to scale back work.',
    purpose: 'three-generation family dinner — gentle decision-making about aging in place, with four real voices contributing',
    ambient: 'family_dining_evening',
    sound_effects: ['chopsticks_soft', 'rice_cooker_distant'],
    target_vocab: ['仕事', '休む', '体', '無理', '相談', 'みんな'],
    cast: ['hiroshi_boss', 'hiroshi_elder', 'ryosuke_dad', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_elder', jp: 'まあ、みんな集まってくれて。ありがとうな。', en: 'Well, everyone gathered here. Thank you.', style: 'Slow elder father warmth opening the meal, deliberate weight in the gratitude, patriarch role carried gently.', mood: 'patriarch-warm' },
      { speaker: 'yumiko_mom', jp: 'お父さん、最近は体の調子どうですか？', en: 'Father, how\'s your health been lately?', style: 'Daughter-in-law warm respectful inquiry, careful gentleness in the family register, real concern evident throughout.', mood: 'respectfully-concerned' },
      { speaker: 'hiroshi_elder', jp: 'まあ、年だからな。少しずつ無理がきかなくなる。', en: 'Well, it\'s age, you know. Bit by bit I can\'t push myself anymore.', style: 'Honest elder admission, slow weighted delivery, no self-pity just clear-eyed observation about aging gently.', mood: 'honestly-aging' },
      { speaker: 'hiroshi_boss', jp: '父さん、そろそろ仕事は休んだ方がいい。', en: 'Dad, it\'s about time you stopped working.', style: 'Boss-tone son delivering a hard suggestion to a father, authority softened by family love, weight held throughout.', mood: 'firmly-loving' },
      { speaker: 'hiroshi_elder', jp: 'うん、わかってる。でも急にやめると、なあ。', en: 'Yeah, I know. But to stop suddenly, you know.', style: 'Elder reluctant honesty, the trailing 「なあ」 carrying the difficulty of identity-loss audible underneath gently.', mood: 'reluctantly-honest' },
      { speaker: 'ryosuke_dad', jp: 'お父さん、いきなりじゃなくて、少しずつでいいんですよ。', en: 'Father, not all at once — bit by bit is fine.', style: 'Son-in-law gentle bridge, careful diplomatic warmth, offering the middle path without overstepping respectfully.', mood: 'diplomatically-gentle' },
      { speaker: 'hiroshi_boss', jp: 'まずは週に三日ぐらいに減らすのは？', en: 'How about reducing to about three days a week first?', style: 'Boss-tone son practical proposal, the management mind kicking in, concrete option offered with real care.', mood: 'practically-proposing' },
      { speaker: 'hiroshi_elder', jp: '三日か…まあ、それくらいなら。', en: 'Three days, hm… well, that much would be okay.', style: 'Elder considering, the weighing audible in the slow pacing, conditional softening into possible acceptance.', mood: 'considering-soft' },
      { speaker: 'yumiko_mom', jp: '体に無理はもう、本当にしないでくださいね。', en: 'Please really don\'t push your body anymore.', style: 'Daughter-in-law warm firmness, the care behind the request real and unhideable, gentle weight throughout.', mood: 'warmly-firm' },
      { speaker: 'hiroshi_elder', jp: 'わかってるよ、ゆみこちゃん。心配かけて悪いな。', en: 'I know, Yumiko-chan. Sorry to make you worry.', style: 'Elder warm acknowledgment, the affectionate -chan even for the adult daughter-in-law, real gratitude held gently.', mood: 'warmly-grateful' },
      { speaker: 'ryosuke_dad', jp: 'みんなで相談しながら、ゆっくり決めましょう。', en: 'Let\'s decide slowly, talking it over together.', style: 'Son-in-law gentle leadership offered, the family inclusion carefully extended, no rush carrying through diplomatically.', mood: 'inclusively-gentle' },
      { speaker: 'hiroshi_boss', jp: 'うん、それでいい。父さんのペースで。', en: 'Yes, that\'s good. At Dad\'s pace.', style: 'Boss-tone son softening into son-mode, the authority laid down for family time, real love carried throughout.', mood: 'softening-loving' },
      { speaker: 'hiroshi_elder', jp: 'ありがとう、みんな。', en: 'Thank you, everyone.', style: 'Slow elder grateful closing, the simple thanks weighted with decades of love, deeply earned softness throughout.', mood: 'simply-grateful' },
      { speaker: 'yumiko_mom', jp: 'お父さん、たくさん食べてくださいね。', en: 'Father, please eat lots.', style: 'Daughter-in-law warm closing maternal lift, the care extending into the meal itself, sincere love evident throughout.', mood: 'warmly-maternal' },
      { speaker: 'hiroshi_elder', jp: 'うん、今日はよう食べられそうだ。', en: 'Yes, today I feel like I can eat well.', style: 'Elder small genuine appetite returning, the family warmth reaching the body, soft contentment audible throughout.', mood: 'softly-content' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_010)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // ---------------------------------------------------------------
  // 184 — kenji + daichi, new Osaka colleague (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00184',
    context: 'Daichi was transferred from the Osaka branch. Kenji is showing him around the Tokyo office on his first day.',
    purpose: 'colleague onboarding across regional culture — first day kindness over coffee',
    ambient: 'office_midday',
    sound_effects: [],
    target_vocab: ['同期', '大阪', '配属', '挨拶', '助かる'],
    cast: ['kenji_office', 'daichi_kansai'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '大阪から、お疲れさまでした。', en: 'You came all the way from Osaka — good work.', style: 'Earnest salaryman warm welcome, the formal courtesy held with real consideration, soft sincere greeting throughout delivery.', mood: 'earnestly-welcoming' },
      { speaker: 'daichi_kansai', jp: 'いえいえ、こちらこそ、よろしゅう頼みます。', en: 'No no, please look out for me too.', style: 'Kansai warm humble swing, the regional ending charming the formality, soft real openness threading through warmly.', mood: 'humbly-warm' },
      { speaker: 'kenji_office', jp: '同期は、私の他にもう一人います。', en: 'Besides me, there\'s one more from our cohort.', style: 'Earnest salaryman helpful information sharing, the professional cadence steady, soft welcoming warmth held throughout.', mood: 'helpfully-steady' },
      { speaker: 'daichi_kansai', jp: 'ほな、いろいろ教えてもろて、助かりますわ。', en: 'Then, getting taught lots of things will really help.', style: 'Kansai casual gratitude, regional dialect warming the standard courtesy, real appreciation soft and unforced throughout.', mood: 'casually-grateful' },
      { speaker: 'kenji_office', jp: '配属はマーケティング部ですよね。', en: 'Your placement is marketing, right?', style: 'Salaryman confirming polite, the casual check carrying real professional attention, courteous warmth held steadily.', mood: 'politely-confirming' },
      { speaker: 'daichi_kansai', jp: 'そうですわ。緊張しますわ、正直。', en: 'Yes. I\'m nervous, honestly.', style: 'Kansai honest vulnerability under the regional swing, the dialect making the confession land easier and warmer.', mood: 'honestly-vulnerable' },
      { speaker: 'kenji_office', jp: '最初はみんなそうですよ。困ったら声かけてください。', en: 'Everyone is at first. If you\'re stuck, just call out.', style: 'Earnest salaryman warm reassurance, the steady experienced kindness threading through, soft real offer extended throughout.', mood: 'warmly-reassuring' },
      { speaker: 'daichi_kansai', jp: 'おおきに。ほんま助かります。', en: 'Thanks. That really helps.', style: 'Kansai deep regional gratitude, the dialect carrying the full weight of relief, soft real warmth throughout closing.', mood: 'deeply-grateful' }
    ]
  },
  // ---------------------------------------------------------------
  // 185 — ren + riku, video games (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00185',
    context: 'Ren brings over a new fighting game; Riku has played the demo. They settle in for a casual evening.',
    purpose: 'older / younger cousin male bonding through games — easy familiarity',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['遊ぶ', '面白い', '勝つ', '負ける', '練習'],
    cast: ['ren_uni', 'riku_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'リク、これやろうぜ。新しいやつ。', en: 'Riku, let\'s play this. The new one.', style: 'University student easy older-bro lift, casual familiar drawl, real enthusiasm threading through unforced delivery throughout.', mood: 'easily-eager' },
      { speaker: 'riku_teen', jp: 'お、それ気になってた！面白いの？', en: 'Oh, I\'ve been curious about that! Is it good?', style: 'Teen bright bouncing interest, voice lifting on the question, real eager curiosity carrying through enthusiastically.', mood: 'brightly-curious' },
      { speaker: 'ren_uni', jp: 'めっちゃ面白い。でも俺、まだ下手。', en: 'Super fun. But I\'m still bad at it.', style: 'University student honest casual admission, dropping the bravado, real self-aware warmth threading through throughout.', mood: 'honestly-casual' },
      { speaker: 'riku_teen', jp: 'じゃあ俺も練習するから、勝負しよう！', en: 'Then I\'ll practice too, let\'s have a match!', style: 'Teen energetic challenge lift, the eager competitive spirit bright and warm, real youthful drive throughout delivery.', mood: 'energetically-challenging' },
      { speaker: 'ren_uni', jp: '負けたら、ジュース奢ること。', en: 'Loser buys juice.', style: 'University student casual stakes setting, the playful gambling-light tone, real older-bro warmth audible underneath.', mood: 'playfully-setting' },
      { speaker: 'riku_teen', jp: '受けて立つ！今日は負けない！', en: 'Challenge accepted! Today I won\'t lose!', style: 'Teen dramatic confident burst, the energetic competitive declaration carrying full youthful bravado warmly throughout.', mood: 'dramatically-confident' },
      { speaker: 'ren_uni', jp: 'おっ、いい感じ。じゃあ始めるか。', en: 'Oh, good energy. Let\'s start then.', style: 'University student approving warm continuation, the casual older-bro affirmation, easy momentum carrying forward throughout.', mood: 'approvingly-casual' }
    ]
  },
  // ---------------------------------------------------------------
  // 186 — yuki + ryosuke, helping with computer (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00186',
    context: 'Yuki has come by to help her friend\'s dad Ryosuke set up a new printer at home.',
    purpose: 'cross-generation tech help — younger person guiding older with patience and respect',
    ambient: 'home_office_afternoon',
    sound_effects: [],
    target_vocab: ['使い方', 'パソコン', '簡単', '設定', 'できる'],
    cast: ['yuki_office', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'ゆきさん、ほんとに助かるよ。', en: 'Yuki-san, you\'re really saving me.', style: 'Father warm grateful greeting, the older man\'s tech-helplessness humbly acknowledged, real appreciation threading throughout warmly.', mood: 'warmly-grateful' },
      { speaker: 'yuki_office', jp: 'いえいえ、簡単ですから大丈夫です。', en: 'Not at all, it\'s easy so no worries.', style: 'Office woman bright reassurance, the gentle confidence carrying through, soft real warmth toward the older man throughout.', mood: 'gently-confident' },
      { speaker: 'ryosuke_dad', jp: 'パソコンってさ、毎年難しくなる気がするよ。', en: 'Computers — I swear they get harder every year.', style: 'Father wry self-aware complaint, the generational humor audible, soft real frustration mixed with humility throughout.', mood: 'wryly-self-aware' },
      { speaker: 'yuki_office', jp: 'わかります。慣れですよ、きっと。', en: 'I understand. It\'s a matter of getting used to it.', style: 'Office woman warm sympathetic explaining, the patient teaching cadence opening up, soft real respect maintained throughout.', mood: 'patiently-sympathetic' },
      { speaker: 'ryosuke_dad', jp: 'この設定、自分でやろうとして失敗した。', en: 'This setup — I tried doing it myself and failed.', style: 'Father honest admission with self-deprecating warmth, the failure shared without ego, soft real humility throughout.', mood: 'honestly-self-deprecating' },
      { speaker: 'yuki_office', jp: 'あ、ここをクリックすれば、自動でできますよ。', en: 'Ah, if you click here, it goes automatic.', style: 'Office woman gentle teaching pivot, the patient pointing-and-showing energy, real care for the older man throughout.', mood: 'gently-teaching' },
      { speaker: 'ryosuke_dad', jp: 'ほう、なるほど。これは便利だ。', en: 'Oh, I see. This is convenient.', style: 'Father warm impressed appreciation, the real learning landing audibly, soft genuine recognition threading through delivery.', mood: 'warmly-impressed' },
      { speaker: 'yuki_office', jp: 'これで完了です。お疲れさまでした。', en: 'That\'s it, all done. Good work.', style: 'Office woman warm closing brightness, the friendly professionalism softened by personal connection, sincere warmth throughout.', mood: 'warmly-completing' }
    ]
  },
  // ---------------------------------------------------------------
  // 187 — naoko + sakura, cooking together (long)
  // ---------------------------------------------------------------
  {
    id: 'conv_00187',
    context: 'Aunt Naoko is teaching Sakura how to make a real curry from scratch on a quiet Sunday.',
    purpose: 'aunt-niece transmission of practical skill — gentle empowerment through cooking',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['料理', '切る', '入れる', '味', '習う', '美味しい'],
    cast: ['naoko_aunt', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'さくらちゃん、まず玉ねぎから切ろう。', en: 'Sakura-chan, first let\'s cut the onion.', style: 'Aunt warm teaching brightness, the cooking-class voice opening up, soft real care threading through the instruction.', mood: 'warmly-teaching' },
      { speaker: 'sakura_teen', jp: 'はい！玉ねぎ、目に染みるから苦手。', en: 'Yes! Onion stings my eyes, so I don\'t like it.', style: 'Teen warm honest sharing with the small complaint folded in, real comfortable familiarity audible throughout delivery.', mood: 'warmly-honest' },
      { speaker: 'naoko_aunt', jp: 'ふふ、コツがあるよ。よく冷やすの。', en: 'Hehe, there\'s a trick. Chill it well.', style: 'Aunt warm conspiratorial laugh, the small kitchen-wisdom shared with delight, soft real teaching pleasure throughout.', mood: 'conspiratorially-warm' },
      { speaker: 'sakura_teen', jp: 'え、そんなのあるんだ。知らなかった。', en: 'Eh, there\'s such a thing? I didn\'t know.', style: 'Teen surprised real interest lifting, voice lifting with genuine learning energy, soft warm curiosity throughout delivery.', mood: 'surprised-interested' },
      { speaker: 'naoko_aunt', jp: '料理は、ちょっとした工夫で楽になる。', en: 'Cooking gets easier with small clever tricks.', style: 'Aunt gentle wisdom-sharing, the practical philosophy held in warm steady delivery, soft real teaching weight throughout.', mood: 'gently-wise' },
      { speaker: 'sakura_teen', jp: 'なるほどー。次は何を入れるの？', en: 'I see. What goes in next?', style: 'Teen attentive following voice, the engagement audible in the cooking-class participation, soft warm curiosity throughout.', mood: 'attentively-following' },
      { speaker: 'naoko_aunt', jp: 'にんじんとじゃがいも。大きめに切ってね。', en: 'Carrot and potato. Cut them on the bigger side.', style: 'Aunt warm continuing teaching, the precise instruction softened by the casual cadence, soft real guidance throughout.', mood: 'warmly-continuing' },
      { speaker: 'sakura_teen', jp: 'これくらい？大きすぎる？', en: 'This much? Too big?', style: 'Teen careful checking voice, the gentle uncertainty audible, soft real wanting-to-do-it-right energy throughout delivery.', mood: 'carefully-checking' },
      { speaker: 'naoko_aunt', jp: 'ちょうどいい。上手じゃない！', en: 'Just right. You\'re good at this!', style: 'Aunt warm praise lifting bright, the real recognition unforced, soft genuine affirmation threading throughout delivery.', mood: 'warmly-affirming' },
      { speaker: 'sakura_teen', jp: 'えへへ、嬉しい。本当に習いたかったの。', en: 'Heehee, I\'m happy. I really wanted to learn this.', style: 'Teen warm pleased disclosure, the soft real confession of wanting threaded through the laugh, gentle joy throughout.', mood: 'warmly-pleased' },
      { speaker: 'naoko_aunt', jp: 'いつでも教えるよ。一緒に作るのは楽しいから。', en: 'I\'ll teach you anytime. Cooking together is fun.', style: 'Aunt warm generous offer, the genuine pleasure in the shared activity audible, soft real care throughout delivery.', mood: 'warmly-generous' },
      { speaker: 'sakura_teen', jp: '味付けはどうするの？', en: 'How do you do the seasoning?', style: 'Teen practical curiosity moving forward, the engagement deepening with each step, soft warm interest throughout delivery.', mood: 'practically-curious' },
      { speaker: 'naoko_aunt', jp: 'ルーを入れて、よく混ぜる。それだけ。', en: 'Add the roux and mix well. That\'s all.', style: 'Aunt warm simple instruction, the practical secret revealed plainly, soft confidence threading through the delivery throughout.', mood: 'plainly-confident' },
      { speaker: 'sakura_teen', jp: 'これ、いつか自分で作れるようになりたい。', en: 'I want to be able to make this on my own someday.', style: 'Teen genuine aspirational voice, the real wanting carried in the warm honest delivery, soft sincere intent throughout.', mood: 'genuinely-aspiring' },
      { speaker: 'naoko_aunt', jp: 'きっとできる。何回か作ったら、絶対できるよ。', en: 'You\'ll definitely manage. After making it a few times, you\'ll absolutely get it.', style: 'Aunt warm confident reassurance, the steady belief in her niece audible, soft real conviction threading throughout delivery.', mood: 'warmly-believing' }
    ]
  },
  // ---------------------------------------------------------------
  // 188 — hiroshi_boss + mrs_mori, community event (short)
  // ---------------------------------------------------------------
  {
    id: 'conv_00188',
    context: 'A local autumn festival. The boss Hiroshi crosses paths with Mrs. Mori from his neighborhood.',
    purpose: 'community out-of-context recognition — workplace-self meeting neighborhood-self',
    ambient: 'festival_evening',
    sound_effects: [],
    target_vocab: ['お祭り', '久しぶり', '地域', '楽しい', '元気'],
    cast: ['hiroshi_boss', 'mrs_mori_neighbor'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: 'あら、田中さん。お久しぶりねえ。', en: 'Oh, Tanaka-san. Long time no see.', style: 'Neighbor warm recognition surprise, the surname-keigo casual but familiar, soft real pleasure threading through throughout.', mood: 'warmly-recognizing' },
      { speaker: 'hiroshi_boss', jp: 'これは森さん。お元気そうで。', en: 'Ah, Mori-san. You look well.', style: 'Boss authority softening into neighborhood register, the formal courtesy preserved, soft real warmth audible underneath.', mood: 'authoritatively-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'お祭りは、毎年いいわねえ。', en: 'The festival is good every year, isn\'t it.', style: 'Neighbor warm easy observation, the comfortable community-talk register, soft real appreciation threading through throughout.', mood: 'easily-appreciative' },
      { speaker: 'hiroshi_boss', jp: 'そうですね。地域の繋がりは、大事ですから。', en: 'Indeed. Community connections matter, after all.', style: 'Boss measured weighted agreement, the professional gravity laid down for neighborhood-self, soft sincere acknowledgment throughout.', mood: 'measuredly-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '奥様にもよろしくね。', en: 'Give my regards to your wife.', style: 'Neighbor warm closing extension, the routine community-politeness held with real care, soft sincere closing throughout.', mood: 'warmly-extending' },
      { speaker: 'hiroshi_boss', jp: 'ありがとうございます。森さんもどうぞお元気で。', en: 'Thank you. Please stay well too, Mori-san.', style: 'Boss formal warm closing, the authority softened into neighborhood reciprocity, soft real care threading throughout delivery.', mood: 'formally-warm' }
    ]
  },
  // ---------------------------------------------------------------
  // 189 — daichi + mei, second meeting (long)
  // ---------------------------------------------------------------
  {
    id: 'conv_00189',
    context: 'Daichi and Mei meet for coffee, just the two of them, a few weeks after the housewarming. The conversation finds its rhythm.',
    purpose: 'second-date softness — early relationship deepening through real personal sharing',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['趣味', '休み', '自分', '話す', '楽しい', '次'],
    cast: ['daichi_kansai', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '今日、来てくれて嬉しいわ。', en: 'I\'m glad you came today.', style: 'Kansai warm sincere opener, the regional ending softening the directness, soft real pleasure audible underneath throughout.', mood: 'sincerely-warm' },
      { speaker: 'mei_romantic', jp: 'こちらこそ。なんか、ちょっと緊張してます。', en: 'Same here. I\'m a little nervous, somehow.', style: 'Romantic warm honest disclosure, the soft real vulnerability extended with trust, gentle warmth threading throughout delivery.', mood: 'warmly-honest' },
      { speaker: 'daichi_kansai', jp: 'わいもや。コーヒーゆっくり飲もな。', en: 'Me too. Let\'s drink coffee slowly together.', style: 'Kansai warm identification, the regional dialect making the shared nervousness land softly, gentle warmth throughout.', mood: 'identifying-warm' },
      { speaker: 'mei_romantic', jp: '休みの日は、いつも何してるんですか？', en: 'On your days off, what do you usually do?', style: 'Romantic warm careful curiosity, the question opening up real interest, soft genuine inquiry threading through delivery.', mood: 'carefully-curious' },
      { speaker: 'daichi_kansai', jp: '釣りが趣味でな。一人で川行くんよ。', en: 'Fishing\'s my hobby. I go to the river alone.', style: 'Kansai warm sharing voice, the casual disclosure of solitary pleasure, soft real openness threading throughout delivery.', mood: 'warmly-sharing' },
      { speaker: 'mei_romantic', jp: 'いい趣味ですね。静かそう。', en: 'That\'s a nice hobby. Sounds quiet.', style: 'Romantic soft appreciative reflection, the gentle understanding audible, soft real warmth toward the disclosure throughout.', mood: 'appreciatively-soft' },
      { speaker: 'daichi_kansai', jp: 'メイちゃんは、休みの日、どんな感じ？', en: 'Mei-chan, what\'s your day off like?', style: 'Kansai warm turning curiosity, the question gently held with real interest, soft warmth throughout the inquiry delivery.', mood: 'warmly-curious' },
      { speaker: 'mei_romantic', jp: '本読んだり、お菓子作ったり。地味です。', en: 'Reading books, making sweets. It\'s plain.', style: 'Romantic warm self-deprecating sharing, the gentle laugh-at-self audible, soft real openness threading throughout delivery.', mood: 'warmly-self-deprecating' },
      { speaker: 'daichi_kansai', jp: 'お菓子！すごいやん、それ。', en: 'Sweets! That\'s amazing.', style: 'Kansai warm enthusiastic surprise, the regional response landing with real pleasure, soft genuine admiration throughout delivery.', mood: 'enthusiastically-warm' },
      { speaker: 'mei_romantic', jp: '今度、作ったやつ持ってきますね。', en: 'Next time, I\'ll bring some I made.', style: 'Romantic warm spontaneous offer, the small generous impulse audible, soft real opening-up threading throughout delivery.', mood: 'warmly-offering' },
      { speaker: 'daichi_kansai', jp: 'ほんま？楽しみにしてる。', en: 'Really? I\'m looking forward to it.', style: 'Kansai warm pleased anticipation, the regional ending warming the simple gratitude, soft real warmth throughout delivery.', mood: 'pleasantly-anticipating' },
      { speaker: 'mei_romantic', jp: '緊張、ちょっと取れた気がする。', en: 'I feel like the nervousness lifted a little.', style: 'Romantic warm honest observation, the soft real relief audible, gentle openness threading through the disclosure throughout.', mood: 'warmly-relieved' },
      { speaker: 'daichi_kansai', jp: 'こうして話してると、楽しいわ。', en: 'Talking like this is really fun.', style: 'Kansai warm sincere reflection, the regional softening the bigger statement, soft real pleasure threading throughout delivery.', mood: 'warmly-reflecting' },
      { speaker: 'mei_romantic', jp: 'また、こうやって会えますか？', en: 'Can we meet like this again?', style: 'Romantic warm careful asking, the slight vulnerable real wanting audible, soft genuine inquiry threading throughout delivery.', mood: 'carefully-wanting' },
      { speaker: 'daichi_kansai', jp: 'もちろん。次は、わいが何か作るわ。', en: 'Of course. Next time, I\'ll make something.', style: 'Kansai warm playful matched offering, the regional confidence audible, soft real reciprocal warmth threading throughout delivery.', mood: 'playfully-matched' }
    ]
  },
  // ---------------------------------------------------------------
  // 190 — aoi + sho, café (short)
  // ---------------------------------------------------------------
  {
    id: 'conv_00190',
    context: 'Sho is at the café with his mother. While she\'s ordering, Aoi quietly offers him a sticker.',
    purpose: 'small barista-child kindness — adult attentiveness to a shy child',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['静か', 'ジュース', 'シール', 'どれ', 'ありがとう'],
    cast: ['aoi_barista', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'こんにちは。何か飲みたい？', en: 'Hello. Want something to drink?', style: 'Soft dreamy barista kneeling-down register, the child-tuned warmth carrying through gently, soft attentive care throughout.', mood: 'soft-attentive' },
      { speaker: 'sho_child', jp: '…ジュース、ください。', en: '…Juice, please.', style: 'Tiny six-year-old polite shy request, the careful pause before the order, soft small voice throughout delivery.', mood: 'shyly-polite' },
      { speaker: 'aoi_barista', jp: 'えらいね、ちゃんと言えて。シール、どれ好き？', en: 'Good job saying it properly. Which sticker do you like?', style: 'Soft dreamy barista warm praise, the gentle bonus-offer opening up generously, soft attentive care throughout delivery.', mood: 'gently-praising' },
      { speaker: 'sho_child', jp: 'これ…車のやつ。', en: 'This… the car one.', style: 'Tiny six-year-old quiet pointing voice, the gentle decision made softly, soft small careful delivery throughout.', mood: 'quietly-deciding' },
      { speaker: 'aoi_barista', jp: 'はい、どうぞ。お利口さんだね。', en: 'Here you go. What a good boy.', style: 'Soft dreamy barista warm bestowing, the gentle praise wrapping the small gift, soft real care threading throughout.', mood: 'warmly-bestowing' },
      { speaker: 'sho_child', jp: 'ありがとう…ございます。', en: 'Thank you… very much.', style: 'Tiny six-year-old careful polite warmth, the gradual completion of the full phrase, soft small earnestness throughout delivery.', mood: 'carefully-polite' }
    ]
  },
  // ---------------------------------------------------------------
  // 191 — sachiko + hina, knitting (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00191',
    context: 'A rainy Sunday at grandma\'s. Sachiko is teaching Hina to thread a needle for her first sewing project.',
    purpose: 'grandmother-grandchild handcraft — patience and small triumphs',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['糸', '針', '難しい', 'ゆっくり', 'できる'],
    cast: ['sachiko_grandma', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'ひなちゃん、糸をこう、針に通すのよ。', en: 'Hina, the thread — pass it through the needle like this.', style: 'Soft grandmother slow demonstration, the deliberate patience audible, soft real teaching weight threading throughout delivery.', mood: 'slowly-teaching' },
      { speaker: 'hina_child', jp: 'えー、難しそう。', en: 'Eh, looks hard.', style: 'High child wary curiosity, the cautious anticipation lifting the voice, soft real assessment threading throughout delivery.', mood: 'warily-curious' },
      { speaker: 'sachiko_grandma', jp: '最初はね。でも、ゆっくりやれば大丈夫。', en: 'It is at first. But if you go slowly, you\'ll be fine.', style: 'Soft grandmother gentle reassurance, the patient wisdom carrying real care, soft real encouragement threading throughout delivery.', mood: 'gently-reassuring' },
      { speaker: 'hina_child', jp: 'うー、入らない…', en: 'Ungh, it won\'t go in…', style: 'High child small frustrated effort, the focused concentration audible in the struggle, soft real trying throughout delivery.', mood: 'focused-frustrated' },
      { speaker: 'sachiko_grandma', jp: '焦らないでね。もう一回ゆっくり。', en: 'Don\'t rush. Slowly once more.', style: 'Soft grandmother patient encouragement, the calm space-holding audible, soft real care threading throughout delivery throughout.', mood: 'patient-encouraging' },
      { speaker: 'hina_child', jp: 'できたー！おばあちゃん見て！', en: 'I did it! Grandma look!', style: 'High child triumphant burst, the success-spike bright and full, real childish joy threading throughout delivery.', mood: 'triumphant-joy' },
      { speaker: 'sachiko_grandma', jp: 'すごい、上手。ひなちゃんは器用ね。', en: 'Amazing, well done. You\'re skilled, Hina.', style: 'Soft grandmother warm pride, the gentle real praise audible, soft real grandmother-love threading throughout delivery throughout.', mood: 'warmly-proud' },
      { speaker: 'hina_child', jp: 'もっとやる！次もできるよ！', en: 'I\'ll do more! I can do the next one too!', style: 'High child energized continuation, the success-fueled momentum bright, real childish drive threading throughout delivery.', mood: 'energized-driven' }
    ]
  },
  // ---------------------------------------------------------------
  // 192 — goro + riku, fishing (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00192',
    context: 'Grandpa Goro has taken his grandson Riku to a quiet pond for a teen-and-grandpa fishing morning.',
    purpose: 'grandfather-teen quiet bond — shared silence and small wisdom',
    ambient: 'pond_morning',
    sound_effects: [],
    target_vocab: ['早い', '釣り', '静か', '気持ち', '考える'],
    cast: ['goro_grandpa', 'riku_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'goro_grandpa', jp: 'リク、朝早かったな。眠いか？', en: 'Riku, that was an early morning. Sleepy?', style: 'Slow grandfather warm gentle inquiry, the patient consideration audible, soft real grandpa-care threading throughout delivery.', mood: 'gently-considerate' },
      { speaker: 'riku_teen', jp: '大丈夫。意外と気持ちいい、こういうの。', en: 'I\'m fine. It\'s actually nice, this kind of thing.', style: 'Teen quiet honest discovery, the unexpected appreciation audible, soft real openness threading throughout delivery.', mood: 'quietly-discovering' },
      { speaker: 'goro_grandpa', jp: '静かやろ。ここは、いつもこうだ。', en: 'Quiet, isn\'t it. It\'s always like this here.', style: 'Slow grandfather warm appreciation, the daily wealth shared with the teen, soft real teaching weight throughout delivery.', mood: 'warmly-appreciating' },
      { speaker: 'riku_teen', jp: 'スマホ見ないと、なんか、いろいろ考える。', en: 'Without looking at my phone, I think about all kinds of things.', style: 'Teen honest reflective discovery, the soft real interior surfacing without screens, gentle vulnerable openness throughout delivery.', mood: 'reflectively-honest' },
      { speaker: 'goro_grandpa', jp: 'それでいい。釣りは、待つ時間が大事だ。', en: 'That\'s good. The waiting is what matters in fishing.', style: 'Slow grandfather warm wisdom, the philosophical teaching carried in steady delivery, soft real grandpa-truth throughout delivery.', mood: 'warmly-wise' },
      { speaker: 'riku_teen', jp: '待つの、苦手だったけど。今日はいいや。', en: 'I was bad at waiting. But today is fine.', style: 'Teen honest self-observation, the gentle real change audible, soft real openness threading throughout delivery throughout.', mood: 'honestly-changing' },
      { speaker: 'goro_grandpa', jp: 'おじいちゃんも、若い時は急いでばかりだった。', en: 'Grandpa was always rushing when I was young too.', style: 'Slow grandfather identification, the generational shared truth offered with warmth, soft real connection threading throughout.', mood: 'warmly-identifying' },
      { speaker: 'riku_teen', jp: 'え、意外。', en: 'Eh, that\'s unexpected.', style: 'Teen brief surprised lift, the gentle real interest in the grandfather past, soft warm curiosity throughout delivery.', mood: 'briefly-surprised' }
    ]
  },
  // ---------------------------------------------------------------
  // 193 — asuka + ryosuke, parent-teacher (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00193',
    context: 'Parent-teacher meeting at the high school. Ms. Asuka shares Riku\'s recent quietness with his father Ryosuke.',
    purpose: 'parent-teacher cooperation — professionals coordinating around a teenager\'s wellbeing',
    ambient: 'school_meeting_room',
    sound_effects: [],
    target_vocab: ['様子', '真面目', '友達', '心配', '努力'],
    cast: ['asuka_teacher', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: '今日はお越しいただき、ありがとうございます。', en: 'Thank you for coming in today.', style: 'Teacher professional formal opener, the standard parent-meeting register, soft real respect threading throughout delivery.', mood: 'professionally-formal' },
      { speaker: 'ryosuke_dad', jp: 'いえ、こちらこそお時間頂いて。', en: 'No, thank you for making the time.', style: 'Father respectful warm reciprocity, the formal courtesy held genuinely, soft real appreciation threading throughout delivery.', mood: 'respectfully-warm' },
      { speaker: 'asuka_teacher', jp: 'リクさんは、勉強の様子はとても真面目で。', en: 'In terms of studying, Riku is very serious.', style: 'Teacher careful praise-first professional structure, the considered observation delivered warmly, soft real respect throughout delivery.', mood: 'carefully-praising' },
      { speaker: 'ryosuke_dad', jp: 'それは安心しました。何か気になる点が？', en: 'That\'s a relief. Is there something concerning?', style: 'Father warm relieved then concerned pivot, the parental attention focused, soft real care threading throughout delivery.', mood: 'concernedly-pivoting' },
      { speaker: 'asuka_teacher', jp: '友達との関わりが、最近少し減っているようで。', en: 'His interaction with friends has seemed to drop a little lately.', style: 'Teacher careful professional sharing, the precise observation delivered with diplomatic warmth, soft real concern throughout delivery.', mood: 'carefully-sharing' },
      { speaker: 'ryosuke_dad', jp: '家でも、ちょっとそんな様子で。', en: 'At home too, he\'s been a bit like that.', style: 'Father honest matching observation, the parental confirmation softly delivered, soft real worry threading throughout delivery.', mood: 'honestly-confirming' },
      { speaker: 'asuka_teacher', jp: 'ご家族と協力して、見守っていきたいですね。', en: 'I\'d like to coordinate with the family and watch over him.', style: 'Teacher professional warm partnership offer, the cooperation-framing audible, soft real care threading throughout delivery.', mood: 'professionally-partnering' },
      { speaker: 'ryosuke_dad', jp: 'はい、よろしくお願いします。', en: 'Yes, please.', style: 'Father warm formal acceptance, the gratitude held in the polite phrase, soft real commitment threading throughout delivery.', mood: 'warmly-committing' }
    ]
  },
  // ---------------------------------------------------------------
  // 194 — yumiko + naoko, sisters-in-law (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00194',
    context: 'Yumiko and her sister-in-law Naoko meet for lunch and catch up on family things — the kids, Sachiko\'s health, work.',
    purpose: 'sisters-in-law maintenance — adult women navigating family love through shared updates',
    ambient: 'restaurant_lunch',
    sound_effects: [],
    target_vocab: ['久しぶり', '元気', '子供', '育てる', '大変'],
    cast: ['yumiko_mom', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'ゆみこちゃん、お久しぶり！', en: 'Yumiko-chan, long time!', style: 'Aunt bright warm reunion, the familial -chan held with real affection, soft real pleasure threading throughout delivery.', mood: 'brightly-warm' },
      { speaker: 'yumiko_mom', jp: 'なおこさん！本当に。元気だった？', en: 'Naoko-san! Truly. Have you been well?', style: 'Maternal warm reunion brightness, the genuine pleasure audible, soft real reciprocal warmth threading throughout delivery.', mood: 'genuinely-warm' },
      { speaker: 'naoko_aunt', jp: '元気元気。ゆみこちゃんは？子供たち大きくなったでしょ。', en: 'I\'m good, I\'m good. And you? The kids have grown, right?', style: 'Aunt warm bouncing follow-up, the genuine curiosity about family audible, soft real interest threading throughout delivery.', mood: 'warmly-bouncing' },
      { speaker: 'yumiko_mom', jp: 'ひなはもう小学生。早いよね、本当に。', en: 'Hina\'s already in elementary. Time flies, really.', style: 'Maternal warm time-reflection, the wonder at growth audible, soft real maternal warmth threading throughout delivery.', mood: 'warmly-reflecting' },
      { speaker: 'naoko_aunt', jp: '子供育てるの、大変じゃない？', en: 'Raising kids — isn\'t it tough?', style: 'Aunt warm sympathetic check-in, the real care behind the question, soft genuine interest threading throughout delivery.', mood: 'sympathetically-checking' },
      { speaker: 'yumiko_mom', jp: '大変だけど、可愛いから。', en: 'It is, but they\'re cute, so.', style: 'Maternal warm honest balance, the truth held in the trailing-off cadence, soft real maternal love throughout delivery.', mood: 'honestly-balanced' },
      { speaker: 'naoko_aunt', jp: 'お母さんの調子は？', en: 'How\'s Mother\'s condition?', style: 'Aunt warm careful pivot to family health, the real concern audible, soft genuine inquiry threading throughout delivery.', mood: 'carefully-concerned' },
      { speaker: 'yumiko_mom', jp: '腰がちょっとね。でも元気よ、おしゃべりは。', en: 'Her back, a little. But she\'s lively — chatty as ever.', style: 'Maternal warm honest reporting with humor, the affectionate observation audible, soft real love throughout delivery.', mood: 'warmly-humorous' },
      { speaker: 'naoko_aunt', jp: 'それなら良かった。今度、私も寄るね。', en: 'That\'s a relief. I\'ll come by sometime soon too.', style: 'Aunt warm closing commitment, the genuine intent audible, soft real family-care threading throughout delivery.', mood: 'warmly-committing' }
    ]
  },
  // ---------------------------------------------------------------
  // 195 — tatsuya + sachiko, country uncle visits city grandma (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00195',
    context: 'Tatsuya has come to Tokyo with a box of fresh produce and a moment to visit aunt Sachiko at her house.',
    purpose: 'country-city extended-family kindness — small gift visit',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['来る', '土産', '喜ぶ', '畑', '元気'],
    cast: ['tatsuya_country', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'おばさん、よう来ました。土産です。', en: 'Auntie, I\'ve come over. Here\'s a gift.', style: 'Country bass warm formal-rural opener, the slow direct delivery, soft real respect threading throughout delivery.', mood: 'formally-warm' },
      { speaker: 'sachiko_grandma', jp: 'まあ、達也ちゃん、わざわざ。', en: 'My, Tatsuya-chan, all this way.', style: 'Soft grandmother warm surprised pleasure, the affectionate -chan audible, soft real delight threading throughout delivery.', mood: 'softly-pleased' },
      { speaker: 'tatsuya_country', jp: '畑のやつ、ちょっと持ってきた。', en: 'Stuff from the field — brought a bit.', style: 'Country gruff modest sharing, the casual delivery of the gift, soft real generosity threading throughout delivery.', mood: 'modestly-sharing' },
      { speaker: 'sachiko_grandma', jp: 'こんなにたくさん、悪いわねえ。', en: 'So much — I feel bad.', style: 'Soft grandmother warm appreciation with gentle protest, the routine modest receiving, soft real gratitude throughout delivery.', mood: 'gently-grateful' },
      { speaker: 'tatsuya_country', jp: 'いえいえ、今年はようけ採れたんで。', en: 'No, no, this year we got plenty.', style: 'Country warm dismissing protest, the rural confidence about abundance, soft real generosity threading throughout delivery.', mood: 'warmly-dismissing' },
      { speaker: 'sachiko_grandma', jp: 'みんな喜ぶわ。本当にありがとう。', en: 'Everyone will be glad. Truly, thank you.', style: 'Soft grandmother warm deep gratitude, the family-warmth carried through the delivery, soft real love threading throughout.', mood: 'deeply-grateful' },
      { speaker: 'tatsuya_country', jp: 'おばさんも元気そうで、安心しました。', en: 'You look well too, auntie. I\'m relieved.', style: 'Country gruff warm observation, the real concern under the brief delivery, soft sincere care threading throughout.', mood: 'gruffly-warm' },
      { speaker: 'sachiko_grandma', jp: 'なんとかね。達也ちゃんも、無理しないで。', en: 'Somehow. You too, Tatsuya-chan, don\'t push too hard.', style: 'Soft grandmother warm reciprocal care, the family-elder concern audible, soft real love threading throughout delivery.', mood: 'reciprocally-caring' }
    ]
  },
  // ---------------------------------------------------------------
  // 196 — saito doctor + sakura, first solo clinic visit (short)
  // ---------------------------------------------------------------
  {
    id: 'conv_00196',
    context: 'Sakura goes to the doctor by herself for the first time, for a minor cold. Dr. Saito treats her seriously like a young adult.',
    purpose: 'rite-of-passage moment — being treated as a grown patient for the first time',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['一人', '大丈夫', '風邪', '検査', '心配'],
    cast: ['saito_doctor', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'さくらさん、今日は一人で来たんですね。', en: 'Sakura-san, you came alone today.', style: 'Doctor warm respectful recognition, the adult-treatment audible in the cadence, soft real care threading throughout delivery.', mood: 'respectfully-recognizing' },
      { speaker: 'sakura_teen', jp: 'はい、ちょっと風邪っぽくて。', en: 'Yes, I think it might be a cold.', style: 'Teen careful adult-attempting voice, the slight nervous self-management audible, soft real composure threading throughout.', mood: 'composedly-adult' },
      { speaker: 'saito_doctor', jp: '熱はどうですか。咳もある？', en: 'How\'s your fever? Coughing too?', style: 'Doctor professional warm questioning, the standard sequence held respectfully, soft real attention threading throughout delivery.', mood: 'professionally-attentive' },
      { speaker: 'sakura_teen', jp: '熱は微熱、咳が少し。', en: 'Slight fever, a little cough.', style: 'Teen composed adult-clinical report, the careful precise answering, soft real maturity threading throughout delivery throughout.', mood: 'precisely-composed' },
      { speaker: 'saito_doctor', jp: '大丈夫そうですね。お薬出しますね。', en: 'You\'ll be alright. I\'ll prescribe some medicine.', style: 'Doctor warm reassuring conclusion, the gentle professional clarity, soft real reassurance threading throughout delivery.', mood: 'warmly-reassuring' },
      { speaker: 'sakura_teen', jp: 'ありがとうございます。安心しました。', en: 'Thank you. I feel relieved.', style: 'Teen warm grateful adult-closing, the relief audible underneath, soft real maturity threading throughout delivery throughout.', mood: 'gratefully-mature' }
    ]
  },
  // ---------------------------------------------------------------
  // 197 — takeda + hina, lost child (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00197',
    context: 'Hina has wandered away from her mother in the train station and a kindly station attendant has brought her to Officer Takeda.',
    purpose: 'civic kindness around a lost child — professional gentleness reassuring a small one',
    ambient: 'station_concourse',
    sound_effects: [],
    target_vocab: ['迷子', '大丈夫', '落ち着く', 'お母さん', '一緒'],
    cast: ['takeda_officer', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'こんにちは。怖くないからね、大丈夫。', en: 'Hello. It\'s not scary, you\'re alright.', style: 'Officer warm kneeling-down register, the child-tuned reassurance audible, soft real care threading throughout delivery.', mood: 'gently-reassuring' },
      { speaker: 'hina_child', jp: 'お母さん…いない…。', en: 'Mom… not here…', style: 'High child wavering wet voice, the small wobbling fear audible, soft small distress threading throughout delivery.', mood: 'tearfully-small' },
      { speaker: 'takeda_officer', jp: 'うん、お母さんね。すぐ呼ぶから、落ち着いて。', en: 'Yes, your mother. I\'ll call her right away, so calm down.', style: 'Officer steady warm professional kindness, the gentle adult-authority calming, soft real care threading throughout delivery.', mood: 'steadily-warm' },
      { speaker: 'hina_child', jp: 'ぼうし、ピンクの、お母さん…。', en: 'Hat, pink, mom\'s…', style: 'High child wobbling helpful detail, the trying-to-help-find-her audible, soft small bravery threading throughout delivery.', mood: 'wobblingly-helpful' },
      { speaker: 'takeda_officer', jp: 'ピンクの帽子、いいね。教えてくれてありがとう。', en: 'Pink hat — good. Thanks for telling me.', style: 'Officer warm validation, the gentle praise for the useful information, soft real care threading throughout delivery.', mood: 'warmly-validating' },
      { speaker: 'hina_child', jp: '…お水、欲しい。', en: '…I want water.', style: 'High child small steadying voice, the slight calming audible in the request, soft small recovery threading throughout.', mood: 'recovering-small' },
      { speaker: 'takeda_officer', jp: 'はい、お水ね。一緒に待とう。', en: 'Yes, water. Let\'s wait together.', style: 'Officer warm steady continuation, the calm comforting presence audible, soft real care threading throughout delivery.', mood: 'warmly-steady' },
      { speaker: 'hina_child', jp: '…うん。お巡りさん、ありがとう。', en: '…Yeah. Officer, thank you.', style: 'High child small recovering politeness, the calmed gentleness audible, soft small earnest gratitude threading throughout delivery.', mood: 'recoveringly-polite' }
    ]
  },
  // ---------------------------------------------------------------
  // 198 — kenji + yuki, late night working (long)
  // ---------------------------------------------------------------
  {
    id: 'conv_00198',
    context: 'A Wednesday night. Kenji and Yuki are the last two in the office, finishing a deadline project together.',
    purpose: 'colleague late-night solidarity — work intimacy and small soft moments at midnight',
    ambient: 'office_late_night',
    sound_effects: [],
    target_vocab: ['残業', '疲れる', '助かる', '終わる', '帰る', 'コーヒー'],
    cast: ['kenji_office', 'yuki_office'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'もう、十時過ぎちゃった。', en: 'It\'s already past ten.', style: 'Office woman tired clock-check, the late-night fatigue audible, soft real weariness threading throughout delivery.', mood: 'tiredly-marking' },
      { speaker: 'kenji_office', jp: 'はやいね、あと少しだから。', en: 'Time\'s flying. Just a bit more.', style: 'Earnest salaryman steady push-through, the careful encouragement audible, soft real solidarity threading throughout delivery.', mood: 'steadily-encouraging' },
      { speaker: 'yuki_office', jp: 'コーヒーいる？私、淹れる。', en: 'Want coffee? I\'ll make it.', style: 'Office woman warm offer through fatigue, the gentle care-extension audible, soft real warmth threading throughout delivery.', mood: 'warmly-offering' },
      { speaker: 'kenji_office', jp: 'うわー、助かる。お願い。', en: 'Wow, that helps. Please.', style: 'Salaryman warm relieved acceptance, the casual gratitude audible, soft real warmth threading throughout delivery throughout.', mood: 'warmly-grateful' },
      { speaker: 'yuki_office', jp: '今回の資料、なんでこんなに細かいの。', en: 'These materials this time — why so detailed?', style: 'Office woman wry tired complaint, the shared frustration carried with warmth, soft real exhaustion threading throughout.', mood: 'wryly-tired' },
      { speaker: 'kenji_office', jp: '部長のこだわりってやつ。仕方ない。', en: 'Boss\'s particular thing. Can\'t be helped.', style: 'Salaryman dry knowing acceptance, the gentle worldly wisdom carried, soft real solidarity threading throughout delivery.', mood: 'dryly-knowing' },
      { speaker: 'yuki_office', jp: 'でも、佐藤さんと一緒だから助かる。', en: 'But with you here, it\'s easier.', style: 'Office woman warm honest disclosure, the genuine appreciation audible, soft real warmth threading throughout delivery throughout.', mood: 'warmly-disclosing' },
      { speaker: 'kenji_office', jp: 'こちらこそ。一人だったら、心折れてる。', en: 'Same here. Alone, I\'d be broken.', style: 'Salaryman honest matching warmth, the soft real vulnerability audible, gentle solidarity threading throughout delivery.', mood: 'honestly-matching' },
      { speaker: 'yuki_office', jp: 'はい、コーヒー。砂糖たくさん入れた。', en: 'Here, coffee. I put in lots of sugar.', style: 'Office woman warm small care delivered, the attentive personalization audible, soft real warmth threading throughout delivery.', mood: 'warmly-attentive' },
      { speaker: 'kenji_office', jp: 'ありがとう。完璧。', en: 'Thanks. Perfect.', style: 'Salaryman warm sincere appreciation, the small simple gratitude carrying weight, soft real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '終わったら、何か食べに行きたい。', en: 'When we\'re done, I want to grab something to eat.', style: 'Office woman warm forward-looking, the casual extension into shared after-work, soft real friendship throughout delivery.', mood: 'warmly-extending' },
      { speaker: 'kenji_office', jp: 'いいね。深夜のラーメン、美味しいやつ知ってる。', en: 'Nice. I know a good late-night ramen place.', style: 'Salaryman warm pleased offering, the casual after-work warmth audible, soft real connection threading throughout delivery.', mood: 'warmly-offering' },
      { speaker: 'yuki_office', jp: 'やったー、それ目標にする。', en: 'Yay, I\'ll make that my goal.', style: 'Office woman bright energizing lift, the small joy carrying her through, soft real warmth threading throughout delivery.', mood: 'brightly-energized' },
      { speaker: 'kenji_office', jp: 'よし、もうひと頑張りしよう。', en: 'Right, one more push.', style: 'Salaryman warm settled rallying, the steady forward-momentum audible, soft real solidarity threading throughout delivery throughout.', mood: 'settled-rallying' },
      { speaker: 'yuki_office', jp: 'ラーメンのために、頑張る。', en: 'For ramen, I\'ll do my best.', style: 'Office woman bright tired humor, the shared joke carrying through, soft real warmth threading throughout delivery throughout.', mood: 'brightly-tired' }
    ]
  },
  // ---------------------------------------------------------------
  // 199 — hiroshi_elder + goro_grandpa, same generation friends (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00199',
    context: 'Two old friends from the same generation meet at a public bath in the late afternoon for their weekly visit.',
    purpose: 'old-friend male intimacy — friendship maintained across decades through small rituals',
    ambient: 'public_bath_afternoon',
    sound_effects: [],
    target_vocab: ['同年代', '久しぶり', '昔', '変わる', '元気'],
    cast: ['hiroshi_elder', 'goro_grandpa'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'goro_grandpa', jp: 'おう、浩二さん。今週も来てたか。', en: 'Hey, Koji. You came again this week.', style: 'Slow grandfather familiar warmth, the weekly ritual carried in the easy greeting, soft real friendship throughout delivery.', mood: 'familiarly-warm' },
      { speaker: 'hiroshi_elder', jp: 'うん、欠かさんよ。同年代の友達、貴重だからな。', en: 'Yeah, never miss it. Same-generation friends are precious.', style: 'Slow elder warm reflection, the philosophical truth held in the casual delivery, soft real value threading throughout.', mood: 'warmly-reflective' },
      { speaker: 'goro_grandpa', jp: 'ほんとに。昔の話、できる相手が減ってきた。', en: 'Truly. People to talk about old times — they\'re thinning out.', style: 'Slow grandfather honest acknowledgment, the gentle loss audible, soft real elder-truth threading throughout delivery throughout.', mood: 'honestly-aging' },
      { speaker: 'hiroshi_elder', jp: '時代が変わったなあ。', en: 'Times have changed.', style: 'Slow elder weighted observation, the stretching 「なあ」 holding decades, soft real contemplation threading throughout delivery.', mood: 'weightedly-contemplating' },
      { speaker: 'goro_grandpa', jp: 'でも、こうやって会えるうちは元気な証拠だ。', en: 'But as long as we can meet like this, it\'s proof we\'re well.', style: 'Slow grandfather warm philosophical lift, the gentle gratitude carried in the wisdom, soft real warmth throughout delivery.', mood: 'warmly-philosophical' },
      { speaker: 'hiroshi_elder', jp: 'まったくだ。今日もよう温まったし。', en: 'Absolutely. Got good and warm today too.', style: 'Slow elder warm bath-pleasure observation, the simple satisfaction audible, soft real contentment threading throughout delivery.', mood: 'simply-content' },
      { speaker: 'goro_grandpa', jp: '来週もな。同じ時間で。', en: 'Next week too. Same time.', style: 'Slow grandfather warm closing commitment, the ritual reaffirmed simply, soft real friendship threading throughout delivery throughout.', mood: 'simply-committing' },
      { speaker: 'hiroshi_elder', jp: 'うん。元気でな。', en: 'Yes. Stay well.', style: 'Slow elder warm simple closing, the brief deeply-meant farewell, soft real friendship threading throughout delivery throughout.', mood: 'simply-warm' }
    ]
  },
  // ---------------------------------------------------------------
  // 200 — mei + ren, bookstore (short)
  // ---------------------------------------------------------------
  {
    id: 'conv_00200',
    context: 'A small bookstore on a Saturday. Mei is browsing the cooking section and Ren is looking for a novel. They strike up a brief conversation.',
    purpose: 'small chance encounter between strangers in a bookstore — gentle low-stakes warmth',
    ambient: 'bookstore_afternoon',
    sound_effects: [],
    target_vocab: ['本', '探す', '偶然', '同じ', '興味'],
    cast: ['mei_romantic', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'あ、すいません、その本、もう一冊ある？', en: 'Oh, excuse me — is there another copy of that book?', style: 'University student casual easygoing approach, the unforced friendly inquiry, soft real curiosity threading throughout delivery.', mood: 'casually-easygoing' },
      { speaker: 'mei_romantic', jp: 'えっと、棚にもう一冊ありますよ。', en: 'Um, there\'s one more on the shelf.', style: 'Romantic warm helpful soft reply, the gentle directing audible, soft real consideration threading throughout delivery throughout.', mood: 'warmly-helpful' },
      { speaker: 'ren_uni', jp: 'ありがとう。これ、探してたんすよ。', en: 'Thanks. I\'ve been looking for this.', style: 'University student warm casual gratitude, the easy disclosure audible, soft real appreciation threading throughout delivery.', mood: 'casually-grateful' },
      { speaker: 'mei_romantic', jp: '私も、同じ著者、好きなんです。', en: 'Me too — I like the same author.', style: 'Romantic warm soft connection lift, the gentle small discovery audible, soft real warmth threading throughout delivery throughout.', mood: 'softly-connecting' },
      { speaker: 'ren_uni', jp: '偶然っすね。じゃあ、おすすめあったら教えて。', en: 'What a coincidence. If you\'ve got recommendations, tell me.', style: 'University student warm casual continuation, the easy open exchange offered, soft real friendliness threading throughout.', mood: 'casually-open' },
      { speaker: 'mei_romantic', jp: 'はい、もちろん。良い本見つかりますように。', en: 'Yes, of course. May you find a good book.', style: 'Romantic warm soft well-wishing closing, the small kindness extended gently, soft real warmth threading throughout delivery.', mood: 'softly-wishing' }
    ]
  },
  // ---------------------------------------------------------------
  // 201 — yumiko + sho + hina on the bus (3-speaker, medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00201',
    context: 'Yumiko is taking both kids on the bus to a museum. She\'s managing one excited Hina and one curious quiet Sho.',
    purpose: 'family-on-the-move tableau — three voices coordinating in a small public space',
    ambient: 'bus_interior',
    sound_effects: [],
    target_vocab: ['静か', '一緒', '見る', '楽しい', '前'],
    cast: ['yumiko_mom', 'sho_child', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'お母さん、見て、あの雲！', en: 'Mom, look, that cloud!', style: 'High child bright pointing excitement, the burst of childish wonder, soft real joy threading throughout delivery throughout.', mood: 'brightly-pointing' },
      { speaker: 'yumiko_mom', jp: 'うん、可愛い形ね。ちょっと声小さくね。', en: 'Yes, what a cute shape. A little quieter, please.', style: 'Maternal warm gentle volume-management, the affectionate redirect audible, soft real care threading throughout delivery.', mood: 'gently-managing' },
      { speaker: 'sho_child', jp: 'うさぎ、みたい。', en: 'Like a rabbit.', style: 'Tiny six-year-old quiet observation, the soft contribution carrying real attention, soft small wonder threading throughout.', mood: 'quietly-contributing' },
      { speaker: 'hina_child', jp: 'うわ、本当だ、しょうくんすごい！', en: 'Wow, true, Sho-kun amazing!', style: 'High child warm bright validation of younger brother, the genuine sibling-praise audible, soft real warmth throughout delivery.', mood: 'warmly-validating' },
      { speaker: 'yumiko_mom', jp: '次の駅で降りるから、準備してね。', en: 'We get off at the next stop, so get ready.', style: 'Maternal warm practical instruction, the gentle coordination audible, soft real care threading throughout delivery throughout.', mood: 'warmly-coordinating' },
      { speaker: 'sho_child', jp: 'お母さん、手、つなぐ？', en: 'Mom, hold hands?', style: 'Tiny six-year-old soft request, the gentle reaching audible in the question, soft small wanting throughout delivery throughout.', mood: 'softly-reaching' },
      { speaker: 'yumiko_mom', jp: 'うん、もちろん。一緒に降りようね。', en: 'Yes, of course. We\'ll get off together.', style: 'Maternal warm tender response, the soft real care audible, gentle love threading throughout delivery throughout the response.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'はやく着かないかな、博物館！', en: 'Wonder when we\'ll get there, the museum!', style: 'High child bright impatient anticipation, the eager forward-energy audible, soft real excitement threading throughout delivery.', mood: 'brightly-impatient' },
      { speaker: 'yumiko_mom', jp: 'もうすぐよ。静かに待ってね。', en: 'Almost there. Wait quietly, okay?', style: 'Maternal warm gentle anchor, the soft directional patience audible, soft real care threading throughout delivery throughout.', mood: 'gently-anchoring' }
    ]
  },
  // ---------------------------------------------------------------
  // 202 — kenji + hiroshi_boss + yuki, performance review (3-speaker, long)
  // ---------------------------------------------------------------
  {
    id: 'conv_00202',
    context: 'A quarterly review meeting. Hiroshi the boss is reviewing Kenji and Yuki\'s recent project together.',
    purpose: 'workplace formal review — authority and two reportees navigating evaluation respectfully',
    ambient: 'meeting_room',
    sound_effects: [],
    target_vocab: ['評価', '努力', '結果', '課題', '期待', '来年'],
    cast: ['hiroshi_boss', 'kenji_office', 'yuki_office'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '今期のプロジェクト、お疲れさまでした。', en: 'Good work on this quarter\'s project.', style: 'Boss measured authority opening, the professional weight held respectfully, soft real recognition threading throughout delivery.', mood: 'measuredly-recognizing' },
      { speaker: 'kenji_office', jp: 'ありがとうございます。', en: 'Thank you.', style: 'Salaryman formal respectful brief acknowledgment, the standard courteous response, soft real composure threading throughout.', mood: 'formally-composed' },
      { speaker: 'yuki_office', jp: '無事に終わって、ほっとしてます。', en: 'I\'m relieved we finished without trouble.', style: 'Office woman warm honest sharing, the slight casual register held respectfully, soft real warmth threading throughout delivery.', mood: 'warmly-honest' },
      { speaker: 'hiroshi_boss', jp: '結果は予想以上。二人の努力のおかげだ。', en: 'The results exceeded expectations. Thanks to you both.', style: 'Boss measured warm acknowledgment, the professional praise carried with real weight, soft real respect threading throughout.', mood: 'measuredly-acknowledging' },
      { speaker: 'kenji_office', jp: '佐藤さんのおかげが大きいです。', en: 'It\'s largely thanks to Sato-san.', style: 'Salaryman warm humble redirecting, the credit-sharing genuine and respectful, soft real warmth threading throughout delivery.', mood: 'humbly-redirecting' },
      { speaker: 'yuki_office', jp: 'いえ、田中さんが要所を抑えてくれて。', en: 'No, Tanaka-san caught the key points.', style: 'Office woman warm honest matching humility, the mutual respect audible, soft real warmth threading throughout delivery throughout.', mood: 'matching-humble' },
      { speaker: 'hiroshi_boss', jp: 'お互いを尊重するのは、いい関係だ。', en: 'Respecting each other — that\'s a good relationship.', style: 'Boss measured warm observation, the professional approval carrying real warmth, soft real recognition threading throughout.', mood: 'measuredly-approving' },
      { speaker: 'hiroshi_boss', jp: '次の課題は、もっと大きいかもしれないが。', en: 'The next challenge may be even bigger, but…', style: 'Boss measured weighted forward-look, the warning held carefully, soft real respect threading throughout delivery throughout.', mood: 'weightedly-forward' },
      { speaker: 'kenji_office', jp: '頑張ります。期待に応えたいです。', en: 'I\'ll work hard. I want to live up to expectations.', style: 'Salaryman warm sincere commitment, the genuine professional drive audible, soft real determination threading throughout delivery.', mood: 'sincerely-committing' },
      { speaker: 'yuki_office', jp: '私も。次もよろしくお願いします。', en: 'Me too. Please continue working with us.', style: 'Office woman warm sincere matching, the genuine commitment audible, soft real warmth threading throughout delivery throughout.', mood: 'sincerely-matching' },
      { speaker: 'hiroshi_boss', jp: '評価には反映する。期待してる。', en: 'It\'ll be reflected in your evaluation. I\'m counting on you.', style: 'Boss measured firm warm conclusion, the professional weight held with real care, soft real expectation threading throughout.', mood: 'firmly-warm' },
      { speaker: 'kenji_office', jp: 'ありがとうございます。来年も頑張ります。', en: 'Thank you. I\'ll work hard next year too.', style: 'Salaryman formal warm gratitude, the sincere commitment audible, soft real professional warmth threading throughout delivery.', mood: 'formally-sincere' },
      { speaker: 'yuki_office', jp: '来年もよろしくお願いいたします。', en: 'Please continue to support us next year.', style: 'Office woman warm formal closing, the respectful elevation audible, soft real composure threading throughout delivery throughout.', mood: 'respectfully-elevating' },
      { speaker: 'hiroshi_boss', jp: 'うん、頼んだ。', en: 'Yes, counting on you.', style: 'Boss measured firm brief closing, the authority sealing the meeting with respect, soft real trust threading throughout delivery.', mood: 'firmly-trusting' }
    ]
  },
  // ---------------------------------------------------------------
  // 203 — sachiko + yumiko + sho, three generations cooking (3-speaker, long)
  // ---------------------------------------------------------------
  {
    id: 'conv_00203',
    context: 'A Saturday afternoon. Sachiko, Yumiko, and little Sho are in the kitchen together making onigiri for the family.',
    purpose: 'three generations cooking — quiet family love through hands working side by side',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['母', '娘', '孫', '家族', '伝える', '大切'],
    cast: ['sachiko_grandma', 'yumiko_mom', 'sho_child'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: 'しょうくん、手をきれいに洗ってきて。', en: 'Sho-kun, go wash your hands nicely.', style: 'Soft grandmother warm gentle instruction, the patient teaching-cadence audible, soft real care threading throughout delivery.', mood: 'gently-teaching' },
      { speaker: 'sho_child', jp: 'はーい！', en: 'Yes-s!', style: 'Tiny six-year-old bright responsive lift, the eager small willingness audible, soft small enthusiasm throughout delivery throughout.', mood: 'brightly-willing' },
      { speaker: 'yumiko_mom', jp: 'お母さん、お米、どのくらい炊いた？', en: 'Mother, how much rice did you cook?', style: 'Maternal warm daughter-to-mother register, the practical kitchen-cooperation audible, soft real love threading throughout delivery.', mood: 'practically-warm' },
      { speaker: 'sachiko_grandma', jp: '三合よ。みんなで握ったら、ちょうどいいでしょ。', en: 'Three cups. If we all shape them, just right, I think.', style: 'Soft grandmother warm planning voice, the family-coordination audible, soft real love threading throughout delivery throughout.', mood: 'warmly-planning' },
      { speaker: 'sho_child', jp: '洗ってきたよ。', en: 'I washed them.', style: 'Tiny six-year-old small returning report, the dutiful completion audible, soft small earnestness threading throughout delivery throughout.', mood: 'dutifully-small' },
      { speaker: 'yumiko_mom', jp: 'えらいね、しょうくん。じゃあ、一緒に握ろう。', en: 'Good job, Sho-kun. Then, let\'s shape them together.', style: 'Maternal warm bright inclusion, the gentle gathering of the child into the family-work, soft real love throughout delivery.', mood: 'warmly-gathering' },
      { speaker: 'sachiko_grandma', jp: 'おばあちゃんが、お母さんに教えたのよ、これ。', en: 'I taught your mother this, you know.', style: 'Soft grandmother warm lineage-sharing, the gentle generational thread surfaced, soft real love threading throughout delivery.', mood: 'lineage-sharing' },
      { speaker: 'sho_child', jp: 'え、お母さんも、習ったの？', en: 'Eh, mom learned this too?', style: 'Tiny six-year-old curious surprise, the small genuine wonder audible, soft small interest threading throughout delivery throughout.', mood: 'curiously-small' },
      { speaker: 'yumiko_mom', jp: 'うん、おばあちゃんから習ったの。今度はしょうくんの番。', en: 'Yes, I learned from grandma. Now it\'s Sho-kun\'s turn.', style: 'Maternal warm passing-forward, the soft generational gift extended, gentle love threading through delivery throughout.', mood: 'warmly-passing' },
      { speaker: 'sachiko_grandma', jp: '家族の味って、こうやって伝わるのよ。', en: 'The taste of family — it passes down like this.', style: 'Soft grandmother warm philosophical wisdom, the quiet inheritance-truth held with weight, soft real love throughout delivery.', mood: 'philosophically-loving' },
      { speaker: 'sho_child', jp: 'ぼくも、いつか教える？', en: 'Will I teach someday too?', style: 'Tiny six-year-old soft wondering, the small forward-looking curiosity audible, soft small earnestness threading throughout.', mood: 'softly-wondering' },
      { speaker: 'yumiko_mom', jp: 'きっと教えるよ。大切な人に。', en: 'You\'ll definitely teach. To someone important.', style: 'Maternal warm tender prophecy, the future-love spoken into being gently, soft real warmth threading throughout delivery.', mood: 'tenderly-prophesying' },
      { speaker: 'sachiko_grandma', jp: 'こうやって、ずっと続いていくのが家族よ。', en: 'Continuing like this — that\'s what family is.', style: 'Soft grandmother warm quiet truth-telling, the deep love delivered simply, soft real love threading throughout delivery throughout.', mood: 'quietly-truth-telling' },
      { speaker: 'sho_child', jp: 'うん、ぼくも頑張る。', en: 'Yes, I\'ll try hard too.', style: 'Tiny six-year-old soft earnest commitment, the small but real promise audible, gentle small love threading throughout delivery.', mood: 'softly-committing' },
      { speaker: 'yumiko_mom', jp: 'お母さん、ありがとう。こういう時間、本当に嬉しい。', en: 'Mother, thank you. Times like this — I\'m truly happy.', style: 'Maternal warm deep gratitude, the daughter\'s love welling up gently, soft real warmth threading throughout delivery throughout.', mood: 'deeply-grateful' },
      { speaker: 'sachiko_grandma', jp: '私も。本当に、嬉しい。', en: 'Me too. Truly, happy.', style: 'Soft grandmother warm quiet matching joy, the simple weighted truth audible, gentle love threading throughout delivery throughout.', mood: 'quietly-joyful' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

// Nagomi — sample conversations of varying lengths.
// Each has a meaningful hook (conflict, attraction, comedy, problem-solving, etc.).
// Sentences are short and conversational. Formality matches the relationship.
// Length is intentionally varied — short (3-line) brief encounters through
// to long (14+ line) emotionally-loaded scenes.
//
// Per-line shape:   { jp, en, words: [wordId, ...], mood }
// Per-conversation: id, title, ambient, music, hook, description, characters,
//                   intro: { en, jp, words } — narrator sets the scene before
//                   each new conversation. Speaks EN by default, JP once every
//                   intro.word's totalReps ≥ autoSkipThreshold.
// mood is passed to ElevenLabs (or used to guide TTS pitch/rate for MVP).
// ambient: background sound tag.
// music: optional music mood tag.

export const CONVERSATIONS = [
  {
    id: 'conv_001',
    title: 'Missed the Last Train',
    ambient: 'train_station_night',
    music: null,
    hook: 'problem_solving',
    description: 'Yuki realises she has missed the last train. A stranger offers to help — but she is not sure she should trust him.',
    intro: {
      en: 'Late at night at a quiet station. Yuki has just missed the last train.',
      jp: '夜遅く、静かな駅で。ゆきは終電を逃したばかり。',
      words: ['夜', '駅', '終電'],
    },
    characters: { A: { name: 'Yuki', gender: 'female' }, B: { name: 'Kenji', gender: 'male' } },
    lines: [
      { speaker: 'A', jp: '終電、行っちゃった。', en: 'The last train just left.', mood: 'shocked', words: ['終電', '行く'] },
      { speaker: 'B', jp: 'え、本当に？何時のやつ？', en: 'What? Really? Which one?', mood: 'surprised', words: ['本当に', '何時'] },
      { speaker: 'A', jp: '十一時四十分の電車。一本だけだったのに。', en: 'The 11:40 train. It was the only one.', mood: 'worried', words: ['電車', '一本'] },
      { speaker: 'B', jp: 'タクシーは？', en: 'What about a taxi?', mood: 'helpful', words: ['タクシー'] },
      { speaker: 'A', jp: 'お金があまりない。どうしよう。', en: "I don't have much money. What should I do?", mood: 'anxious', words: ['お金', 'どうしよう'] },
      { speaker: 'B', jp: '近くにカフェがあるよ。朝まで開いてる。', en: 'There is a café nearby. It is open until morning.', mood: 'calm', words: ['近く', 'カフェ', '朝'] },
      { speaker: 'A', jp: 'あなたは誰ですか。', en: 'Who are you, exactly?', mood: 'suspicious', words: ['誰', 'あなた'] },
      { speaker: 'B', jp: 'ただの親切な人です。', en: 'Just a kind person.', mood: 'gentle_smile', words: ['親切', '人'] },
    ],
  },
  {
    id: 'conv_002',
    title: 'The Wrong Order',
    ambient: 'busy_restaurant',
    music: 'light_jazz',
    hook: 'comedy',
    description: 'Ryo confidently orders in Japanese at a ramen restaurant — but accidentally orders something completely different from what he wanted.',
    intro: {
      en: 'A busy ramen shop. Ryo is about to order — a little too confidently.',
      jp: 'にぎやかなラーメン屋。リョウは自信たっぷりに注文しようとしている。',
      words: ['ラーメン', '注文', '自信'],
    },
    characters: { A: { name: 'Ryo', gender: 'male' }, B: { name: 'Waitress', gender: 'female' } },
    lines: [
      { speaker: 'B', jp: 'ご注文はお決まりですか？', en: 'Have you decided on your order?', mood: 'polite', words: ['注文', '決まる'] },
      { speaker: 'A', jp: '醤油ラーメンをひとつ、お願いします。', en: 'One soy sauce ramen, please.', mood: 'confident', words: ['醤油', 'ラーメン', 'ひとつ', 'お願い'] },
      { speaker: 'B', jp: '辛さはどうしますか？', en: 'How spicy would you like it?', mood: 'polite', words: ['辛さ'] },
      { speaker: 'A', jp: 'はい！', en: 'Yes!', mood: 'enthusiastic', words: ['はい'] },
      { speaker: 'B', jp: '...はい、とは？', en: '...Yes, meaning what?', mood: 'confused', words: [] },
      { speaker: 'A', jp: 'あ、えっと、普通でお願いします。', en: 'Ah, um, normal please.', mood: 'embarrassed', words: ['普通'] },
      { speaker: 'B', jp: 'かしこまりました。少々お待ちください。', en: 'Understood. Please wait a moment.', mood: 'polite', words: ['少々', '待つ'] },
      { speaker: 'A', jp: '（心の中で）なんで「はい」と言ったんだろう。', en: '(Inner voice) Why did I say yes...', mood: 'self_deprecating', words: ['心', '言う'] },
    ],
  },
  {
    id: 'conv_003',
    title: 'The Confession That Almost Happened',
    ambient: 'park_evening',
    music: 'soft_piano',
    hook: 'romantic_tension',
    description: 'Hana has been building up the courage to confess to her friend Daiki. She almost says it — then his phone rings.',
    intro: {
      en: 'A park in the evening. Hana is finally ready to tell Daiki how she feels.',
      jp: '夕方の公園。ハナはやっとダイキに気持ちを伝えようとしている。',
      words: ['夕方', '公園', '気持ち', '伝える'],
    },
    characters: { A: { name: 'Hana', gender: 'female' }, B: { name: 'Daiki', gender: 'male' } },
    lines: [
      { speaker: 'A', jp: 'ねえ、ダイキ、話したいことがある。', en: 'Hey, Daiki, there is something I want to tell you.', mood: 'nervous', words: ['話す', 'こと', 'ある'] },
      { speaker: 'B', jp: '何？', en: 'What is it?', mood: 'curious', words: ['何'] },
      { speaker: 'A', jp: '実は、ずっと言おうと思ってたんだけど…', en: 'Actually, I have been thinking of saying this for a long time…', mood: 'shy', words: ['実は', 'ずっと', '思う'] },
      { speaker: 'B', jp: 'うん、聞いてる。', en: 'Yeah, I am listening.', mood: 'attentive', words: ['聞く'] },
      { speaker: 'A', jp: '私ね、あなたのことが—', en: 'I — about you, I—', mood: 'heart_racing', words: ['私', 'あなた'] },
      { speaker: 'B', jp: 'あ、ちょっと待って。電話。', en: 'Oh, hold on. Phone call.', mood: 'apologetic', words: ['待つ', '電話'] },
      { speaker: 'A', jp: '…うん、いいよ。', en: '…Sure, go ahead.', mood: 'deflated', words: ['いい'] },
      { speaker: 'A', jp: '（心の中で）また言えなかった。', en: "(Inner voice) I couldn't say it again.", mood: 'sad_quiet', words: ['また', '言う'] },
    ],
  },
  {
    id: 'conv_004',
    title: 'Neighbours',
    ambient: 'apartment_hallway',
    music: null,
    hook: 'conflict_resolution',
    description: 'Mika confronts her downstairs neighbour about the noise late at night. The neighbour turns out to be more reasonable than expected.',
    intro: {
      en: 'An apartment hallway, late evening. Mika has come to speak with her neighbour about the noise.',
      jp: '夜のマンションの廊下。ミカは隣の人に音のことで話しに来た。',
      words: ['夜', '廊下', '隣', '音'],
    },
    characters: { A: { name: 'Mika', gender: 'female' }, B: { name: 'Tanaka', gender: 'male' } },
    lines: [
      { speaker: 'A', jp: 'すみません、田中さん。少しよろしいですか。', en: 'Excuse me, Tanaka-san. Do you have a moment?', mood: 'polite_but_firm', words: ['すみません', '少し', 'よろしい'] },
      { speaker: 'B', jp: 'はい、どうしました？', en: 'Yes, what happened?', mood: 'neutral', words: ['どうする'] },
      { speaker: 'A', jp: '夜、音楽がちょっと大きくて、寝れなくて…', en: 'At night, the music is a little loud, and I cannot sleep…', mood: 'uncomfortable', words: ['夜', '音楽', '大きい', '寝る'] },
      { speaker: 'B', jp: 'え！ごめんなさい、全然知らなかった。', en: 'What! I am so sorry, I had no idea.', mood: 'shocked_apologetic', words: ['ごめんなさい', '全然', '知る'] },
      { speaker: 'A', jp: '仕事が大変なのは分かるんですが…', en: 'I understand work is hard, but…', mood: 'understanding', words: ['仕事', '大変', '分かる'] },
      { speaker: 'B', jp: '十一時以降は静かにします。約束します。', en: 'After eleven I will be quiet. I promise.', mood: 'sincere', words: ['以降', '静か', '約束'] },
      { speaker: 'A', jp: 'ありがとうございます。助かります。', en: 'Thank you very much. That helps a lot.', mood: 'relieved', words: ['ありがとう', '助かる'] },
    ],
  },
  {
    id: 'conv_005',
    title: 'The Job Interview',
    ambient: 'quiet_office',
    music: null,
    hook: 'high_stakes',
    description: 'Sota is nervous in a formal job interview. The interviewer asks one question he was not prepared for.',
    intro: {
      en: 'A quiet office. Sota is being interviewed for his first real job.',
      jp: '静かなオフィス。ソウタは初めての就職面接を受けている。',
      words: ['静か', '面接', '会社'],
    },
    characters: { A: { name: 'Interviewer', gender: 'female' }, B: { name: 'Sota', gender: 'male' } },
    lines: [
      { speaker: 'A', jp: '本日はお越しいただきありがとうございます。', en: 'Thank you for coming today.', mood: 'formal_warm', words: ['本日', 'ありがとう'] },
      { speaker: 'B', jp: 'こちらこそ、よろしくお願いいたします。', en: 'Thank you for having me.', mood: 'formal_nervous', words: ['こちら', 'お願い'] },
      { speaker: 'A', jp: '弊社を選んだ理由を教えていただけますか。', en: 'Could you tell us why you chose our company?', mood: 'professional', words: ['会社', '選ぶ', '理由'] },
      { speaker: 'B', jp: 'はい。御社の考え方にとても共感しています。', en: 'Yes. I strongly relate to your company\'s philosophy.', mood: 'composed', words: ['考え方', '共感'] },
      { speaker: 'A', jp: '失敗した経験を一つ教えてください。', en: 'Please tell us about one experience of failure.', mood: 'calm_testing', words: ['失敗', '経験'] },
      { speaker: 'B', jp: 'え…（少し間）はい。実は大学で…', en: 'Ah… (brief pause) Yes. Actually at university…', mood: 'caught_off_guard', words: ['大学'] },
      { speaker: 'A', jp: 'ゆっくりでいいですよ。', en: 'Take your time.', mood: 'reassuring', words: ['ゆっくり'] },
    ],
  },
  {
    id: 'conv_006',
    title: 'Morning at the Café',
    ambient: 'cafe_morning',
    music: 'warm_acoustic',
    hook: 'interest_curiosity',
    description: 'Two strangers keep sitting at the same café table by coincidence. One of them keeps "accidentally" arriving early.',
    intro: {
      en: 'A small café in the morning. Two strangers keep meeting here, by coincidence.',
      jp: '朝の小さなカフェ。二人は偶然、また同じ席で会う。',
      words: ['朝', 'カフェ', '偶然', '会う'],
    },
    characters: { A: { name: 'Sora', gender: 'female' }, B: { name: 'Ren', gender: 'male' } },
    lines: [
      { speaker: 'B', jp: 'また会いましたね。', en: 'We meet again.', mood: 'pleasantly_surprised', words: ['また', '会う'] },
      { speaker: 'A', jp: 'そうですね。毎朝ここに来るんですか？', en: 'So it seems. Do you come here every morning?', mood: 'amused', words: ['毎朝', '来る'] },
      { speaker: 'B', jp: 'そうです。コーヒーが好きで。', en: 'Yes. I love coffee.', mood: 'casual_honest', words: ['コーヒー', '好き'] },
      { speaker: 'A', jp: '私もです。何を読んでるんですか？', en: 'Me too. What are you reading?', mood: 'curious', words: ['読む', '何'] },
      { speaker: 'B', jp: '日本の歴史の本です。面白いですよ。', en: 'A book about Japanese history. It is interesting.', mood: 'enthusiastic', words: ['歴史', '本', '面白い'] },
      { speaker: 'A', jp: '歴史は苦手で…でも、教えてもらえますか？', en: "I am not good at history… but could you tell me about it?", mood: 'playful_excuse', words: ['苦手', '教える'] },
      { speaker: 'B', jp: 'もちろん。明日も来ますか？', en: 'Of course. Will you come tomorrow?', mood: 'hopeful', words: ['もちろん', '明日'] },
    ],
  },
  {
    id: 'conv_007',
    title: 'The Doctor',
    ambient: 'clinic_waiting_room',
    music: null,
    hook: 'problem_solving',
    description: 'Yui has been putting off going to the doctor. When she finally goes, the news is more serious than she expected.',
    intro: {
      en: 'A small clinic. Yui has finally come in about her headaches.',
      jp: '小さな病院。ユイはやっと頭痛のことで来ている。',
      words: ['病院', '頭', '痛い'],
    },
    characters: { A: { name: 'Doctor', gender: 'male' }, B: { name: 'Yui', gender: 'female' } },
    lines: [
      { speaker: 'A', jp: 'どうされましたか？', en: 'What brings you in?', mood: 'professional', words: ['どうする'] },
      { speaker: 'B', jp: '一週間くらい、頭が痛くて。', en: 'I have had a headache for about a week.', mood: 'tired', words: ['一週間', '頭', '痛い'] },
      { speaker: 'A', jp: '睡眠は取れていますか？', en: 'Are you getting enough sleep?', mood: 'calm', words: ['睡眠', '取る'] },
      { speaker: 'B', jp: 'あまり。仕事が忙しくて…', en: 'Not really. Work has been busy…', mood: 'guilty', words: ['あまり', '仕事', '忙しい'] },
      { speaker: 'A', jp: 'ストレスも関係しているかもしれません。', en: 'Stress may also be a factor.', mood: 'measured', words: ['ストレス', '関係', 'かもしれない'] },
      { speaker: 'B', jp: 'そうですか…。深刻ですか？', en: 'I see… Is it serious?', mood: 'worried', words: ['深刻'] },
      { speaker: 'A', jp: '今すぐではないですが、生活を変える必要があります。', en: 'Not right now, but you need to change your lifestyle.', mood: 'serious_kind', words: ['生活', '変える', '必要'] },
    ],
  },
  {
    id: 'conv_008',
    title: 'Old Friends',
    ambient: 'izakaya_evening',
    music: 'light_background_chatter',
    hook: 'unresolved_past',
    description: 'Ken and Masa meet again after three years. Something happened between them that was never spoken about.',
    intro: {
      en: 'An izakaya in the evening. Ken and Masa meet again after three years.',
      jp: '夕方の居酒屋。ケンとマサは三年ぶりに再会する。',
      words: ['夕方', '居酒屋', '三年', '会う'],
    },
    characters: { A: { name: 'Ken', gender: 'male' }, B: { name: 'Masa', gender: 'male' } },
    lines: [
      { speaker: 'A', jp: '久しぶりだな。', en: 'It has been a while.', mood: 'cautious_warm', words: ['久しぶり'] },
      { speaker: 'B', jp: 'ああ、三年ぶりか。元気だった？', en: 'Yeah, three years. Were you well?', mood: 'casual_guarded', words: ['三年', '元気'] },
      { speaker: 'A', jp: 'まあな。お前は？', en: 'More or less. And you?', mood: 'casual', words: ['まあ'] },
      { speaker: 'B', jp: '会社変えた。今は割といい感じ。', en: 'I changed companies. Things are pretty good now.', mood: 'light', words: ['会社', '変える', '今', '感じ'] },
      { speaker: 'A', jp: 'そっか。あのこと、まだ気にしてるか？', en: 'I see. Are you still bothered by that thing?', mood: 'careful', words: ['まだ', '気にする'] },
      { speaker: 'B', jp: '…もう終わったことだ。', en: '…That is in the past now.', mood: 'quiet_resolved', words: ['終わる', 'こと'] },
      { speaker: 'A', jp: 'そうだな。飲もう。', en: "Yeah. Let's drink.", mood: 'relieved', words: ['飲む'] },
    ],
  },
  {
    id: 'conv_009',
    title: 'Lost in the City',
    ambient: 'city_street_day',
    music: null,
    hook: 'comedy_helpful',
    description: 'Alex is hopelessly lost and asks for directions. His Japanese is just barely good enough — or is it?',
    intro: {
      en: 'A busy Tokyo street. Alex is hopelessly lost and stops a passer-by.',
      jp: '東京のにぎやかな通り。アレックスは道に迷って、通りすがりの人に聞く。',
      words: ['東京', '道', '迷う', '人'],
    },
    characters: { A: { name: 'Alex', gender: 'male' }, B: { name: 'Local woman', gender: 'female' } },
    lines: [
      { speaker: 'A', jp: 'すみません、渋谷駅はどこですか？', en: 'Excuse me, where is Shibuya Station?', mood: 'desperate_polite', words: ['すみません', '駅', 'どこ'] },
      { speaker: 'B', jp: 'ああ、まっすぐ行って、左に曲がって…', en: 'Ah, go straight, then turn left…', mood: 'helpful_fast', words: ['まっすぐ', '左', '曲がる'] },
      { speaker: 'A', jp: 'え、えっと…もう一度、ゆっくりお願いします。', en: 'Um, sorry… one more time, slowly please.', mood: 'panicking', words: ['もう一度', 'ゆっくり', 'お願い'] },
      { speaker: 'B', jp: 'ゆっくり言うと…まっすぐ、行って、左。', en: 'Slowly then… straight, go, left.', mood: 'patient_amused', words: ['言う'] },
      { speaker: 'A', jp: '右ですか？', en: 'To the right?', mood: 'hopeful_wrong', words: ['右'] },
      { speaker: 'B', jp: 'いいえ、左！', en: 'No, left!', mood: 'emphatic', words: ['いいえ', '左'] },
      { speaker: 'A', jp: 'あ、わかりました！ありがとうございます！', en: 'Oh, I understand! Thank you very much!', mood: 'relieved_grateful', words: ['わかる', 'ありがとう'] },
      { speaker: 'B', jp: 'がんばって。', en: 'Good luck.', mood: 'fond', words: ['がんばる'] },
    ],
  },
  {
    id: 'conv_010',
    title: 'The Surprise',
    ambient: 'apartment_indoor',
    music: 'gentle_upbeat',
    hook: 'emotional_warmth',
    description: 'Nana comes home late after a terrible day. Her roommate Chiho has prepared a small surprise.',
    intro: {
      en: 'A small apartment, late evening. Nana comes home exhausted — but Chiho has been waiting.',
      jp: '小さなアパート、夜遅く。ナナは疲れて家に帰るが、ちほが待っている。',
      words: ['夜', '家', '帰る', '待つ'],
    },
    characters: { A: { name: 'Nana', gender: 'female' }, B: { name: 'Chiho', gender: 'female' } },
    lines: [
      { speaker: 'A', jp: 'ただいま…疲れた。', en: 'I am home… I am tired.', mood: 'exhausted', words: ['ただいま', '疲れる'] },
      { speaker: 'B', jp: 'おかえり！ご飯、作ったよ。', en: 'Welcome back! I made dinner.', mood: 'cheerful', words: ['おかえり', 'ご飯', '作る'] },
      { speaker: 'A', jp: 'え…なんで？', en: 'What… why?', mood: 'disbelieving', words: ['なんで'] },
      { speaker: 'B', jp: '今日、大変そうだったから。', en: 'Because today looked hard for you.', mood: 'gentle', words: ['今日', '大変', 'そう'] },
      { speaker: 'A', jp: 'ちほ…ありがとう。泣きそう。', en: 'Chiho… thank you. I am going to cry.', mood: 'touched', words: ['ありがとう', '泣く'] },
      { speaker: 'B', jp: '泣かないで！ご飯冷めるから。', en: "Don't cry! The food will get cold.", mood: 'laughing', words: ['冷める'] },
      { speaker: 'A', jp: 'わかった、わかった。いただきます。', en: 'Okay, okay. Let us eat.', mood: 'laughing_crying', words: ['わかる', 'いただきます'] },
    ],
  },
  // ── Short example (3 lines) ────────────────────────────────────────────────
  {
    id: 'conv_011',
    title: 'Sidewalk Apology',
    ambient: 'city_street_day',
    music: null,
    hook: 'brief_encounter',
    description: 'Two strangers bump into each other on a busy sidewalk. A short, polite exchange.',
    intro: {
      en: 'A busy sidewalk at midday. Two strangers bump into each other.',
      jp: 'お昼のにぎやかな歩道。二人がぶつかる。',
      words: ['昼', '歩道'],
    },
    characters: { A: { name: 'Stranger A', gender: 'male' }, B: { name: 'Stranger B', gender: 'female' } },
    lines: [
      { speaker: 'A', jp: 'あっ、ごめんなさい！', en: "Oh, I'm sorry!", mood: 'startled_apologetic', words: ['ごめんなさい'] },
      { speaker: 'B', jp: 'いえ、こちらこそ。大丈夫ですか？', en: 'No, my fault too. Are you okay?', mood: 'gracious_concerned', words: ['こちらこそ', '大丈夫'] },
      { speaker: 'A', jp: '急いでて、すみません。', en: 'I was hurrying, sorry.', mood: 'sheepish', words: ['急ぐ', 'すみません'] },
      { speaker: 'B', jp: 'いえいえ、お気をつけて。', en: 'No no, please take care.', mood: 'warm_polite', words: ['気をつける'] },
      { speaker: 'A', jp: 'はい、本当にすみませんでした。', en: 'Yes, I am really sorry.', mood: 'concluding_apologetic', words: ['本当に', 'すみません'] },
    ],
  },
  // ── Long example (14 lines) ────────────────────────────────────────────────
  {
    id: 'conv_012',
    title: 'The Goodbye Party',
    ambient: 'apartment_indoor',
    music: 'soft_piano',
    hook: 'emotional_warmth',
    description: 'A small apartment. Friends gather to send off Hiro, who is moving abroad tomorrow. Aoi has more to say than she expected.',
    intro: {
      en: 'A small apartment, the night before goodbye. Hiro is moving abroad tomorrow.',
      jp: '小さなアパート、お別れの前の夜。ヒロは明日海外へ行く。',
      words: ['夜', '明日', '海外', '別れ'],
    },
    characters: { A: { name: 'Hiro', gender: 'male' }, B: { name: 'Aoi', gender: 'female' } },
    lines: [
      { speaker: 'B', jp: '明日、本当に行っちゃうんだね。', en: "You're really going tomorrow, huh.", mood: 'wistful', words: ['明日', '本当に', '行く'] },
      { speaker: 'A', jp: 'うん。なんか、まだ実感ないけど。', en: "Yeah. Somehow it doesn't feel real yet.", mood: 'reflective', words: ['実感'] },
      { speaker: 'B', jp: '向こうで何が一番楽しみ？', en: 'What are you most looking forward to over there?', mood: 'curious', words: ['向こう', '何', '一番', '楽しみ'] },
      { speaker: 'A', jp: '新しい仕事かな。あと、食べ物。', en: 'The new job, maybe. And the food.', mood: 'thinking', words: ['新しい', '仕事', '食べ物'] },
      { speaker: 'B', jp: 'あー、絶対太って帰ってくるじゃん。', en: "Oh, you're definitely coming back fat.", mood: 'teasing', words: ['絶対', '太る', '帰る'] },
      { speaker: 'A', jp: '(笑)　かもね。', en: '(laughs) Maybe.', mood: 'laughing', words: [] },
      { speaker: 'B', jp: '…連絡、ちゃんとしてね。', en: '…Stay in touch, okay?', mood: 'quiet_serious', words: ['連絡'] },
      { speaker: 'A', jp: 'もちろん。毎日でも。', en: 'Of course. Even every day.', mood: 'warm', words: ['もちろん', '毎日'] },
      { speaker: 'B', jp: '毎日は重いって。', en: "Every day's too much.", mood: 'amused', words: ['毎日', '重い'] },
      { speaker: 'A', jp: '(笑)　冗談だよ。', en: '(laughs) Just kidding.', mood: 'laughing', words: ['冗談'] },
      { speaker: 'B', jp: 'でも、本当に寂しくなる。', en: "But really, I'm going to miss you.", mood: 'vulnerable', words: ['本当に', '寂しい'] },
      { speaker: 'A', jp: '俺もだよ。', en: 'Me too.', mood: 'gentle', words: ['俺'] },
      { speaker: 'B', jp: '向こうで友達できたら、紹介してね。', en: 'When you make friends over there, introduce them.', mood: 'hopeful', words: ['向こう', '友達', '紹介'] },
      { speaker: 'A', jp: 'わかった。約束する。', en: 'Got it. I promise.', mood: 'sincere', words: ['わかる', '約束'] },
    ],
  },
];

// Flat word list extracted from all conversations
export function getAllWords() {
  const seen = new Set();
  const words = [];
  for (const conv of CONVERSATIONS) {
    for (const line of conv.lines) {
      for (const word of line.words) {
        if (!seen.has(word)) {
          seen.add(word);
          words.push({ id: word, display: word, frequency: seen.size });
        }
      }
    }
  }
  return words;
}

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_009)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // ---------------------------------------------------------------
  // 164 — tatsuya_country + ryosuke_dad, fishing trip (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00164',
    context: 'Two brothers-in-law fishing at a quiet river. Tatsuya runs the family farm; Ryosuke came up from the city for the weekend.',
    purpose: 'masculine quiet bonding — two adult men in long silence punctuated by simple talk',
    ambient: 'river_morning',
    sound_effects: [],
    target_vocab: ['川', '魚', '静か', '気持ち', '釣れる'],
    cast: ['tatsuya_country', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'よう来たな。今日は風も弱い。', en: 'Good of you to come. The wind\'s weak today.', style: 'Slow rural bass, weather-worn cadence, the welcome embedded in practical observation about the day quietly.', mood: 'understated-welcome' },
      { speaker: 'ryosuke_dad', jp: 'ほんと、いい朝だ。川も静かだな。', en: 'Really, a good morning. The river is quiet too.', style: 'City man easing into countryside rhythm, voice softening with the surroundings, real settling in tone.', mood: 'easing-in' },
      { speaker: 'tatsuya_country', jp: 'ここなら、よう釣れる。', en: 'Here, you\'ll catch plenty.', style: 'Farmer\'s plain confidence, casual countryside drop of certainty, knowledge spoken without showing off.', mood: 'plainly-certain' },
      { speaker: 'ryosuke_dad', jp: '久しぶりだから、釣れるか心配だよ。', en: 'It\'s been a while, so I\'m worried about catching anything.', style: 'City man self-deprecating warmth, slight chuckle threaded under the doubt, easy admission of being rusty.', mood: 'self-deprecating' },
      { speaker: 'tatsuya_country', jp: '体が覚えてる。心配いらん。', en: 'Your body remembers. No need to worry.', style: 'Brief countryside reassurance, the truncated grammar typical of rural speech, weight of certainty in delivery.', mood: 'briefly-reassuring' },
      { speaker: 'ryosuke_dad', jp: 'こういう時間、本当に貴重だな。', en: 'Times like this are really precious.', style: 'City man honest reflection breaking through, voice quieter and warmer, the gratitude unhidden in the cadence.', mood: 'reflectively-warm' },
      { speaker: 'tatsuya_country', jp: 'たまには来い。魚は逃げん。', en: 'Come around sometimes. The fish aren\'t going anywhere.', style: 'Gruff countryside invitation, real affection sealed inside the brevity, warmth held just under the surface.', mood: 'gruff-affectionate' },
      { speaker: 'ryosuke_dad', jp: 'うん、また来る。気持ちが落ち着くよ。', en: 'Yeah, I\'ll come again. My mind settles here.', style: 'City man genuine settling, voice carrying real renewal, soft promise made and meant honestly throughout.', mood: 'genuinely-promising' }
    ]
  },
  // ---------------------------------------------------------------
  // 165 — mrs_mori + sachiko, tea together (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00165',
    context: 'Two older neighbors having afternoon tea. They\'ve known each other for forty years.',
    purpose: 'lifelong friendship maintenance — small concerns, long memory',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['お茶', '頂く', '腰', '痛い', '病院'],
    cast: ['mrs_mori_neighbor', 'sachiko_grandma'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: 'さちこさん、お茶どうぞ。', en: 'Sachiko-san, please have some tea.', style: 'Warm neighbor middle-age cadence, host hospitality in steady practiced delivery, gentle pour audible underneath.', mood: 'hosting-warm' },
      { speaker: 'sachiko_grandma', jp: 'いつもありがとうございます。頂きます。', en: 'Thank you always. I\'ll have some.', style: 'Soft grandmother gratitude, the polite phrase weighted with decades of similar afternoons together quietly.', mood: 'softly-grateful' },
      { speaker: 'mrs_mori_neighbor', jp: '最近、腰はどうですか。', en: 'How\'s your back lately?', style: 'Neighbor real concern, the casual question carrying years of knowing the specific complaint, gentle inquiry.', mood: 'genuinely-concerned' },
      { speaker: 'sachiko_grandma', jp: 'うーん、寒い日はちょっと痛いの。', en: 'Mm, on cold days it hurts a little.', style: 'Honest grandmother admission, no self-pity, soft acceptance of the body\'s changing weather sensitivity threaded.', mood: 'honestly-soft' },
      { speaker: 'mrs_mori_neighbor', jp: '病院に行ってる？', en: 'Are you going to the hospital?', style: 'Neighbor practical check, gentle authority of a peer, real care under the simple question delivered carefully.', mood: 'practically-caring' },
      { speaker: 'sachiko_grandma', jp: '月に一回。お薬もらってます。', en: 'Once a month. I get medicine.', style: 'Grandmother quiet reassurance, the small routine shared, voice steady and not minimizing the matter.', mood: 'quietly-reassuring' },
      { speaker: 'mrs_mori_neighbor', jp: 'それなら安心。無理しないでね。', en: 'Then I feel relieved. Don\'t push yourself.', style: 'Neighbor warm-firm care, voice carrying the relief and the gentle warning in equal measure throughout.', mood: 'warm-firm-care' },
      { speaker: 'sachiko_grandma', jp: 'ありがとう。森さんも気をつけて。', en: 'Thank you. You take care too, Mori-san.', style: 'Soft grandmother return of care, the surname-keigo holding the relationship\'s tender formality across decades.', mood: 'mutual-care' },
      { speaker: 'mrs_mori_neighbor', jp: 'お互い様ね。年を取ると色々ね。', en: 'It\'s mutual. As we age, lots of things, you know.', style: 'Neighbor knowing laugh in the voice, generational shared understanding threading through the unfinished sentence warmly.', mood: 'knowingly-warm' }
    ]
  },
  // ---------------------------------------------------------------
  // 166 — takeda officer + saito doctor, café chance meeting (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00166',
    context: 'A weekday afternoon at the local coffee shop. Officer Takeda and Dr. Saito both happen to be off-shift; they recognize each other from a community event.',
    purpose: 'two community professionals in a casual moment — service identities relaxing briefly',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['偶然', '休み', '最近', '仕事', '大変'],
    cast: ['takeda_officer', 'saito_doctor'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'あ、斎藤先生じゃないですか。', en: 'Oh, isn\'t that Dr. Saito?', style: 'Officer recognition, professional measured warmth, slight surprise lifting the question into friendly greeting territory.', mood: 'recognizing-warm' },
      { speaker: 'saito_doctor', jp: '武田さん、奇遇ですね。', en: 'Takeda-san, what a coincidence.', style: 'Doctor warm settled greeting, the professional voice softened by being off-duty, real pleasure in the meeting.', mood: 'warmly-settled' },
      { speaker: 'takeda_officer', jp: '今日は休みで。久しぶりにコーヒー。', en: 'I\'m off today. First coffee in a while.', style: 'Officer relaxed register, the uniform-energy laid down for the day, simple human warmth coming through.', mood: 'relaxed-human' },
      { speaker: 'saito_doctor', jp: '私も。最近忙しくて、なかなか。', en: 'Me too. Lately so busy, hard to find time.', style: 'Doctor honest weary admission, the professional shell loosening, warmth and fatigue mixed in delivery.', mood: 'wearily-honest' },
      { speaker: 'takeda_officer', jp: 'お互い大変ですね。', en: 'We\'ve both got it tough, huh.', style: 'Officer recognizing solidarity, peer-to-peer acknowledgment without complaint, brief warm honest weight in voice.', mood: 'solidarity-warm' },
      { speaker: 'saito_doctor', jp: '本当に。でもこういう時間が大事ですよね。', en: 'Truly. But times like this matter, right?', style: 'Doctor reflective warmth, the question seeking shared affirmation, soft conviction in the careful pacing.', mood: 'reflectively-affirming' },
      { speaker: 'takeda_officer', jp: 'まったく同感です。', en: 'I completely agree.', style: 'Officer firm warm agreement, the certainty carried in the steady reliable voice, no hesitation present.', mood: 'firmly-agreeing' },
      { speaker: 'saito_doctor', jp: 'またゆっくり話しましょう。', en: 'Let\'s talk slowly again sometime.', style: 'Doctor gentle closing, sincere invitation extended, the warmth carrying genuine intent to continue the acquaintance.', mood: 'gently-inviting' }
    ]
  },
  // ---------------------------------------------------------------
  // 167 — saito doctor + yumiko mom, follow-up call (short)
  // ---------------------------------------------------------------
  {
    id: 'conv_00167',
    context: 'Dr. Saito calls Yumiko a few days after Hina\'s visit to check on her.',
    purpose: 'small professional follow-up — kindness extending beyond the appointment',
    ambient: 'phone_call',
    sound_effects: [],
    target_vocab: ['電話', '熱', '下がる', '良かった', '安心'],
    cast: ['saito_doctor', 'yumiko_mom'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'もしもし、斎藤です。ひなちゃんの様子どうですか。', en: 'Hello, this is Saito. How is Hina doing?', style: 'Doctor professional warm phone register, careful courteous opener with real attentive concern threaded throughout.', mood: 'professionally-attentive' },
      { speaker: 'yumiko_mom', jp: 'あ、先生、わざわざありがとうございます。', en: 'Oh, doctor, thank you for going out of your way.', style: 'Maternal surprised gratitude, the unexpected call landing warmly, real appreciation soft in the voice.', mood: 'surprised-grateful' },
      { speaker: 'yumiko_mom', jp: '昨日から熱も下がって、元気になりました。', en: 'Since yesterday her fever\'s gone down and she\'s perked up.', style: 'Maternal relieved sharing, voice lifting with the good update, warmth and care evident throughout the report.', mood: 'relieved-sharing' },
      { speaker: 'saito_doctor', jp: 'それは良かった。安心しました。', en: 'That\'s good news. I\'m relieved.', style: 'Doctor warm genuine relief, the professional reserve softening, real human care carrying through gently.', mood: 'genuinely-relieved' },
      { speaker: 'yumiko_mom', jp: '本当に、お世話になりました。', en: 'Truly, thank you for your care.', style: 'Maternal deep gratitude landing, voice warm with sincerity, the polite phrase fully meant throughout delivery.', mood: 'deeply-grateful' },
      { speaker: 'saito_doctor', jp: 'お大事になさってくださいね。', en: 'Please take care of her well.', style: 'Doctor warm professional closing, the standard parting elevated by genuine care, soft sincerity in the words.', mood: 'warmly-closing' }
    ]
  },
  // ---------------------------------------------------------------
  // 168 — naoko aunt + mei romantic (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00168',
    context: 'Aunt Naoko knows a young man and wants to gently introduce him to Mei. They meet for tea to discuss it.',
    purpose: 'aunt-friend matchmaking — older woman setting up younger one with gentle pressure',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['紹介', '一度', '会う', '優しい', '考える'],
    cast: ['naoko_aunt', 'mei_romantic'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'メイちゃん、ちょっと話があるの。', en: 'Mei-chan, I have something to talk about.', style: 'Aunt conspiratorial warmth, voice dropping slightly into matchmaker register, real care behind the playful tone.', mood: 'conspiratorial-warm' },
      { speaker: 'mei_romantic', jp: 'え、何ですか？気になる。', en: 'Eh, what is it? Now I\'m curious.', style: 'Romantic feminine voice lifting with curiosity, slight nervous laugh threading through, real interest carried throughout.', mood: 'curious-nervous' },
      { speaker: 'naoko_aunt', jp: 'いい人いるんだけど、一度会ってみない？', en: 'There\'s a nice guy — won\'t you meet him once?', style: 'Aunt easy direct delivery, the matchmaking matter-of-fact, no pressure but real intention in the offer.', mood: 'matter-of-factly-offering' },
      { speaker: 'mei_romantic', jp: 'えー、急に！どんな人ですか？', en: 'Eh, so suddenly! What kind of person?', style: 'Romantic feminine flutter, the surprise genuine but not closed off, real curiosity threading through the protest.', mood: 'fluttered-curious' },
      { speaker: 'naoko_aunt', jp: 'すごく優しい子よ。仕事も真面目で。', en: 'A really kind one. Serious about his work too.', style: 'Aunt selling pitch warm with conviction, the descriptions delivered with the certainty of personal knowledge.', mood: 'convincingly-warm' },
      { speaker: 'mei_romantic', jp: 'うーん、ちょっと考えてもいいですか？', en: 'Hmm, can I think about it a little?', style: 'Romantic soft hesitation, voice respectfully declining-but-not-declining, careful consideration audible throughout response.', mood: 'softly-hesitating' },
      { speaker: 'naoko_aunt', jp: 'もちろん。急がなくていいから。', en: 'Of course. No need to rush.', style: 'Aunt warm pressure-release, the patience genuine, the matchmaker confidence not insisting just opening the door.', mood: 'warmly-releasing' },
      { speaker: 'mei_romantic', jp: 'ありがとうございます。考えてみますね。', en: 'Thank you. I\'ll think it over.', style: 'Romantic sincere response, voice carrying real consideration not dismissal, soft warmth in the closing.', mood: 'sincerely-considering' }
    ]
  },
  // ---------------------------------------------------------------
  // 169 — hina + sho, two kids in park (short)
  // ---------------------------------------------------------------
  {
    id: 'conv_00169',
    context: 'A bright afternoon at the local park. Hina has spotted Sho on a bench by himself and goes over.',
    purpose: 'small social bridge between two children — louder one drawing out the quieter',
    ambient: 'park_afternoon',
    sound_effects: [],
    target_vocab: ['遊ぶ', '一緒', '好き', '何', '友達'],
    cast: ['hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'ねえ、何してるの？', en: 'Hey, what are you doing?', style: 'Bright child curiosity bouncing forward, direct uninhibited question lifted high with sunny pitch throughout.', mood: 'bright-curious' },
      { speaker: 'sho_child', jp: 'えっと…絵、描いてる。', en: 'Um… I\'m drawing a picture.', style: 'Small six-year-old shy voice, slight pause before the answer, careful gentle showing of his quiet activity.', mood: 'shy-careful' },
      { speaker: 'hina_child', jp: 'わあ、見せて見せて！', en: 'Wow, show me, show me!', style: 'High child enthusiastic burst, both 「見せて」 spiking, no hesitation in the curious eager request at all.', mood: 'eager-burst' },
      { speaker: 'sho_child', jp: '…これ、犬。', en: '…This, a dog.', style: 'Tiny six-year-old voice presenting modestly, gentle pride underneath the brief delivery, careful soft offering.', mood: 'modestly-presenting' },
      { speaker: 'hina_child', jp: 'すごい！一緒に遊ぶ？', en: 'Amazing! Want to play together?', style: 'Bright child praise then immediate pivot to inclusion, sunny inviting energy carrying the friendship offer fully.', mood: 'inviting-bright' },
      { speaker: 'sho_child', jp: 'うん、いい。', en: 'Yeah, okay.', style: 'Small six-year-old soft acceptance, voice warming with the unexpected friendliness, brief but genuine response.', mood: 'softly-accepting' }
    ]
  },
  // ---------------------------------------------------------------
  // 170 — sakura + hina, older sis helps homework (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00170',
    context: 'Late afternoon at home. Sakura is helping cousin Hina with her elementary school worksheets.',
    purpose: 'older cousin helping younger — patience and the small thrill of being treated grown-up',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['宿題', '難しい', '教える', '答え', '頑張る'],
    cast: ['sakura_teen', 'hina_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'お姉ちゃん、これ難しい！', en: 'Big sister, this is hard!', style: 'Bright child plea lifting high, voice tipping into the older-cousin appeal with full childish trust throughout.', mood: 'pleading-bright' },
      { speaker: 'sakura_teen', jp: 'どこどこ？見せて。', en: 'Where, where? Show me.', style: 'Teen warm easy lean-in, casual older-cousin energy without condescension, real attention in the question.', mood: 'easy-attentive' },
      { speaker: 'hina_child', jp: 'この問題、わかんない。', en: 'I don\'t understand this problem.', style: 'High child voice with genuine puzzled frustration, brow-furrow audible, no shame in the honest admission.', mood: 'puzzled-honest' },
      { speaker: 'sakura_teen', jp: 'ふんふん。ほら、ここをよく見て。', en: 'Hm, hm. Look, look at here carefully.', style: 'Teen gentle teaching voice, the casual hmm-hmm of figuring it out aloud, patient pointing energy throughout.', mood: 'patient-teaching' },
      { speaker: 'hina_child', jp: 'えーっと…三？', en: 'Uhh… three?', style: 'Child trying-it-out voice, the uncertain offer lifted high on the question, careful brave guess softly.', mood: 'uncertainly-trying' },
      { speaker: 'sakura_teen', jp: '正解！すごいじゃん！', en: 'Correct! Awesome, right?', style: 'Teen warm bright affirmation, real older-cousin pride bursting through, the validation generous and genuine.', mood: 'warmly-affirming' },
      { speaker: 'hina_child', jp: 'やったー！もっと教えて！', en: 'Yay! Teach me more!', style: 'High child triumph spike, then immediate pivot to wanting more, the success fueling further eager engagement.', mood: 'triumphant-eager' },
      { speaker: 'sakura_teen', jp: 'いいよ。次の問題行こう。', en: 'Sure. Let\'s go to the next problem.', style: 'Teen settled warm continuation, the older-cousin patience holding steady, easy momentum carrying the session forward.', mood: 'settled-continuing' }
    ]
  },
  // ---------------------------------------------------------------
  // 171 — kenji office + aoi barista (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00171',
    context: 'Kenji stops at the café before work; Aoi recognizes him as a semi-regular and they exchange a small unplanned moment.',
    purpose: 'small recognition — the dignity of being remembered by a stranger who serves you',
    ambient: 'cafe_morning',
    sound_effects: [],
    target_vocab: ['朝', 'いつも', '注文', '同じ', '覚える'],
    cast: ['kenji_office', 'aoi_barista'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'おはようございます。', en: 'Good morning.', style: 'Soft dreamy barista morning greeting, artist-soft register warming the brisk morning air, gentle hospitality throughout.', mood: 'dreamy-warm' },
      { speaker: 'kenji_office', jp: 'おはようございます。アメリカーノ一つお願いします。', en: 'Good morning. One Americano, please.', style: 'Earnest salaryman politeness, morning steadiness in the voice, courteous order delivered with calm formality.', mood: 'politely-steady' },
      { speaker: 'aoi_barista', jp: 'あ、いつも同じですね。覚えました。', en: 'Oh, it\'s always the same. I remembered.', style: 'Soft barista pleased observation, the noticing gentle and unforced, dreamy warmth lifting on the recognition.', mood: 'gently-noticing' },
      { speaker: 'kenji_office', jp: 'え、本当ですか。嬉しいですね。', en: 'Oh, really? That makes me happy.', style: 'Salaryman warm surprised pleasure, the formal register loosening with genuine touched response, soft real emotion threaded.', mood: 'warmly-touched' },
      { speaker: 'aoi_barista', jp: 'お仕事の前ですか？', en: 'Before work?', style: 'Barista gentle dreamy inquiry, casual interest in the regular customer\'s rhythm, soft attentive curiosity throughout.', mood: 'softly-curious' },
      { speaker: 'kenji_office', jp: 'はい、これ飲んでから出勤です。', en: 'Yes, I head to work after drinking this.', style: 'Earnest salaryman casual sharing, the daily routine offered with mild self-deprecation about its predictability.', mood: 'mildly-self-aware' },
      { speaker: 'aoi_barista', jp: 'じゃあ、今日も頑張ってくださいね。', en: 'Then, please do your best today too.', style: 'Soft dreamy barista send-off, the small encouragement landing with genuine artist-warm care for the moment.', mood: 'softly-encouraging' },
      { speaker: 'kenji_office', jp: 'ありがとうございます。行ってきます。', en: 'Thank you. I\'m off now.', style: 'Salaryman quietly buoyed, voice slightly lighter than entry, the small recognition having genuinely lifted him.', mood: 'quietly-buoyed' }
    ]
  },
  // ---------------------------------------------------------------
  // 172 — daichi + asuka, nephew's parent-teacher meeting (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00172',
    context: 'Daichi is filling in for his sister at his nephew\'s parent-teacher meeting. Ms. Asuka has never met him before; the Kansai accent surprises her.',
    purpose: 'professional / informal collision — Kansai uncle navigating Tokyo school formality',
    ambient: 'classroom_quiet',
    sound_effects: [],
    target_vocab: ['担任', '甥', '代わり', '成績', '心配'],
    cast: ['daichi_kansai', 'asuka_teacher'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: '今日はわざわざありがとうございます。', en: 'Thank you for coming in today.', style: 'Asuka professional teacher politeness, formal warmth holding the parent-teacher register, careful courtesy throughout.', mood: 'professionally-polite' },
      { speaker: 'daichi_kansai', jp: 'いえいえ、姉貴の代わりでして。', en: 'Not at all — I\'m here in my sister\'s place.', style: 'Kansai warm casual register collision with school formality, easy familiarity in 「姉貴」 charming and unguarded.', mood: 'casually-warm' },
      { speaker: 'asuka_teacher', jp: 'あ、関西の方ですか？', en: 'Oh, are you from Kansai?', style: 'Teacher mild pleasant surprise, professional formality cracking just slightly with genuine curiosity briefly.', mood: 'mildly-surprised' },
      { speaker: 'daichi_kansai', jp: '大阪ですわ。甥っ子のこと、なんか問題ありますか？', en: 'Osaka, yeah. Anything going on with my nephew?', style: 'Kansai warm direct pivot to the matter, no formality wasted, real concern under the casual delivery.', mood: 'directly-warm' },
      { speaker: 'asuka_teacher', jp: '成績は良いんですが、最近少し静かで。', en: 'His grades are good, but he\'s been a little quiet lately.', style: 'Teacher professional careful sharing, the praise-then-concern structure delivered with experience, soft real observation.', mood: 'carefully-observing' },
      { speaker: 'daichi_kansai', jp: 'ほー、静かに。家ではあんま喋らんですか。', en: 'Huh, quiet, huh. He doesn\'t talk much at home either?', style: 'Kansai genuine concern surfacing through the casual swing, the dialect making the heavy moment land warmly.', mood: 'casually-concerned' },
      { speaker: 'asuka_teacher', jp: 'お家でもですか。少し気にかけてあげてください。', en: 'At home too? Please pay him a little attention.', style: 'Teacher gentle professional request, the concern shared appropriately, soft careful suggestion offered with respect.', mood: 'gently-requesting' },
      { speaker: 'daichi_kansai', jp: 'わかりました。姉貴にも伝えます。', en: 'Got it. I\'ll tell my sister too.', style: 'Kansai sincere commitment, the family responsibility taken seriously underneath the casual register held throughout.', mood: 'sincerely-committing' }
    ]
  },
  // ---------------------------------------------------------------
  // 173 — hiroshi_boss + ryosuke (short)
  // ---------------------------------------------------------------
  {
    id: 'conv_00173',
    context: 'Two middle-aged brothers-in-law cross paths briefly at a family event; both have been busy and exchange a quick check-in.',
    purpose: 'brothers-in-law quick acknowledgment — masculine brief warmth across busy lives',
    ambient: 'family_room',
    sound_effects: [],
    target_vocab: ['元気', '久しぶり', '会社', '忙しい', 'また'],
    cast: ['hiroshi_boss', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'おう、亮介、久しぶり。', en: 'Hey, Ryosuke, long time.', style: 'Boss authority loosening into family register, brusque masculine greeting with real warmth underneath quietly.', mood: 'brusque-warm' },
      { speaker: 'ryosuke_dad', jp: 'お兄さん、お久しぶりです。お元気ですか。', en: 'Brother, long time no see. Are you well?', style: 'Family-respectful brother-in-law cadence, holding the elder-respect, genuine care threaded through formal warmth.', mood: 'respectfully-warm' },
      { speaker: 'hiroshi_boss', jp: 'まあな、会社が忙しくてな。', en: 'Eh, work\'s been busy, you know.', style: 'Boss casual acknowledgment in family mode, the responsibility weight present but laid down for the moment.', mood: 'family-casual' },
      { speaker: 'ryosuke_dad', jp: 'こちらも色々ありまして。あまり会えなくて。', en: 'I\'ve had things going on too. Hardly get to see you.', style: 'Brother-in-law warm honest apology, real regret in the cadence about the distance between busy lives.', mood: 'warmly-apologetic' },
      { speaker: 'hiroshi_boss', jp: 'お互い様だ。また飲みにでも行こう。', en: 'Mutual. Let\'s grab a drink again sometime.', style: 'Boss firm warm offer, the brusque exterior cracking open into real family invitation, sincere weight throughout.', mood: 'firm-inviting' },
      { speaker: 'ryosuke_dad', jp: 'はい、ぜひお願いします。', en: 'Yes, please, by all means.', style: 'Brother-in-law sincere acceptance, the formality preserved but real eagerness audible underneath the polite response.', mood: 'sincerely-eager' }
    ]
  },
  // ---------------------------------------------------------------
  // 174 — yumiko + hina, afternoon snack (short)
  // ---------------------------------------------------------------
  {
    id: 'conv_00174',
    context: 'Hina comes home from school hungry. Yumiko has prepared a small snack.',
    purpose: 'small domestic tenderness — daily rhythm of mother and small child',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['お腹', '空く', 'おやつ', '美味しい', '果物'],
    cast: ['yumiko_mom', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'ただいまー！お腹すいたー！', en: 'I\'m home! I\'m hungry!', style: 'High child returning energy, the dramatic hunger announcement bright and full, complete childish trust in the home.', mood: 'bright-dramatic' },
      { speaker: 'yumiko_mom', jp: 'おかえり。おやつあるよ。', en: 'Welcome back. There\'s a snack.', style: 'Warm maternal greeting steady, the gentle predictable comfort in the daily ritual carried through softly.', mood: 'warmly-steady' },
      { speaker: 'hina_child', jp: 'やったー！何々？', en: 'Yay! What is it?', style: 'High child excitement burst with eager curiosity, complete pivot from hunger to anticipation in delivery.', mood: 'excitedly-curious' },
      { speaker: 'yumiko_mom', jp: 'りんごと、ちょっとクッキー。', en: 'Apples, and a few cookies.', style: 'Maternal casual offering, the small bribe of cookies tucked in lovingly, comfortable home-cadence throughout.', mood: 'casually-loving' },
      { speaker: 'hina_child', jp: 'りんご大好き！いただきまーす！', en: 'I love apples! Thank you for the food!', style: 'High child enthusiastic declaration plus polite ritual phrase, the energy carrying both fully through delivery.', mood: 'enthusiastically-polite' },
      { speaker: 'yumiko_mom', jp: 'ゆっくり食べてね。', en: 'Eat slowly, okay?', style: 'Soft maternal gentle reminder, the small daily warning of love about choking floating gently into the moment.', mood: 'softly-reminding' }
    ]
  },
  // ---------------------------------------------------------------
  // 175 — riku + ren, high schooler asking college student (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00175',
    context: 'Riku has been thinking about university; he runs into Ren, a college student two years older, at the convenience store.',
    purpose: 'cross-stage masculine mentorship — older student demystifying university for younger',
    ambient: 'convenience_store_evening',
    sound_effects: [],
    target_vocab: ['大学', '選ぶ', '将来', '楽しい', '自由'],
    cast: ['riku_teen', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'riku_teen', jp: 'あ、れんさん。久しぶりです。', en: 'Oh, Ren-san. Long time no see.', style: 'Teen voice with respect for the older peer, casual register held but with deference threaded through.', mood: 'respectfully-casual' },
      { speaker: 'ren_uni', jp: 'おー、リク。元気か？', en: 'Oh, Riku. You doing okay?', style: 'University student easy older-bro register, casual warmth without condescension, real check-in in the brief question.', mood: 'easy-older-bro' },
      { speaker: 'riku_teen', jp: 'まあまあ。あの、大学ってどんな感じですか？', en: 'So-so. Um, what\'s university actually like?', style: 'Teen hesitating slightly into the bigger question, the real curiosity surfacing under the casual approach honestly.', mood: 'hesitantly-curious' },
      { speaker: 'ren_uni', jp: '高校よりは自由かな。サボれるしね。', en: 'More free than high school, I guess. You can skip too.', style: 'University student honest laugh, dropping the front, real sharing rather than recruiter-talk, dry warm humor.', mood: 'honestly-dry' },
      { speaker: 'riku_teen', jp: 'え、それは魅力的すぎる。', en: 'Eh, that\'s way too attractive.', style: 'Teen wry surprised laugh, voice lifting with appreciation for the honest answer, real enjoyment in the candor.', mood: 'wryly-appreciative' },
      { speaker: 'ren_uni', jp: 'まあ、楽しいけど、選ぶ時は真面目に考えろよ。', en: 'It\'s fun, but think seriously when you choose.', style: 'University student pivot to real advice, the casual register holding but with sudden weight on the warning.', mood: 'casually-serious' },
      { speaker: 'riku_teen', jp: 'うん。何が一番大事ですか？', en: 'Yeah. What\'s the most important thing?', style: 'Teen genuine listening voice, the question opening up real respect for the elder\'s experience, attentive throughout.', mood: 'genuinely-listening' },
      { speaker: 'ren_uni', jp: '将来やりたいことに近いやつ、選んだ方がいい。', en: 'Pick something close to what you want to do in the future.', style: 'University student honest counsel, voice steadier than usual, the advice earned through his own searching offered.', mood: 'honestly-counseling' },
      { speaker: 'riku_teen', jp: 'ありがとうございます。考えてみます。', en: 'Thank you. I\'ll think it over.', style: 'Teen sincere appreciative response, voice carrying real intent to think, formality returning as gratitude lands.', mood: 'sincerely-grateful' }
    ]
  },
  // ---------------------------------------------------------------
  // 176 — sakura + asuka, career advice (long)
  // ---------------------------------------------------------------
  {
    id: 'conv_00176',
    context: 'After class. Sakura has been worrying about university entrance exams and has finally asked Ms. Asuka for a quiet talk.',
    purpose: 'teen / teacher career consultation — adolescent uncertainty meeting professional patience',
    ambient: 'classroom_quiet',
    sound_effects: [],
    target_vocab: ['進路', '迷う', '得意', '将来', '夢', '相談'],
    cast: ['sakura_teen', 'asuka_teacher'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'sakura_teen', jp: '先生、ちょっと相談いいですか。', en: 'Sensei, can I talk to you for a bit?', style: 'Teen voice softer than her bright default, the careful asking already showing the weight she\'s carrying inside.', mood: 'carefully-asking' },
      { speaker: 'asuka_teacher', jp: 'もちろん。座って、ゆっくり話して。', en: 'Of course. Sit down, talk slowly.', style: 'Teacher warm professional opening, the space being made audible in the deliberate pacing and gentle welcome.', mood: 'space-making' },
      { speaker: 'sakura_teen', jp: '進路のことで、ずっと迷ってて。', en: 'About my future path — I\'ve been stuck for a while.', style: 'Teen vulnerability surfacing, voice quieter than usual, real anxiety threaded under the careful self-disclosure delivered.', mood: 'vulnerably-honest' },
      { speaker: 'asuka_teacher', jp: 'うん、聞かせて。', en: 'Yes, tell me.', style: 'Teacher quiet listening register, the brief response opening more space, professional warmth radiating gently.', mood: 'quietly-listening' },
      { speaker: 'sakura_teen', jp: '何が得意なのか、自分でもわからなくて。', en: 'I don\'t even know what I\'m good at, myself.', style: 'Teen genuine confusion voice, the self-doubt unhidden, real searching audible in the soft honest delivery.', mood: 'genuinely-searching' },
      { speaker: 'asuka_teacher', jp: 'さくらさんは、何をしてる時が楽しい？', en: 'Sakura — when are you having fun?', style: 'Teacher careful pivot toward the question that matters, professional skill in reframing the harder question gently.', mood: 'carefully-pivoting' },
      { speaker: 'sakura_teen', jp: '本を読んでる時、かな…。あと、誰かに教える時。', en: 'When I\'m reading, maybe… And when I\'m teaching someone.', style: 'Teen tentative real answer, voice loosening with the actual truth surfacing, soft genuine reflection throughout.', mood: 'tentatively-real' },
      { speaker: 'asuka_teacher', jp: 'なるほど。それ、すごく大事な情報だよ。', en: 'I see. That\'s really important information.', style: 'Teacher warm professional validation, the casual word 「情報」 treating her answer with respect, soft real care.', mood: 'warmly-validating' },
      { speaker: 'sakura_teen', jp: 'でも、夢って、もっと立派なものじゃないですか。', en: 'But — aren\'t dreams supposed to be more impressive things?', style: 'Teen vulnerable comparison surfacing, the smallness of her actual interests felt acutely, real worry threaded throughout.', mood: 'vulnerably-comparing' },
      { speaker: 'asuka_teacher', jp: 'そんなことない。本当に好きなものが、一番強い。', en: 'Not at all. What you truly love is the strongest.', style: 'Teacher firm gentle conviction, the principle held with deep experience, soft real authority in the delivery.', mood: 'firmly-gentle' },
      { speaker: 'sakura_teen', jp: '本当に？', en: 'Really?', style: 'Single teen vulnerable check, the question almost a whisper, soft hope rising audibly underneath the brevity.', mood: 'vulnerably-hopeful' },
      { speaker: 'asuka_teacher', jp: '本当に。先生も、教えるのが好きだから、今ここにいる。', en: 'Truly. I love teaching, that\'s why I\'m here.', style: 'Teacher personal disclosure offered carefully, the credibility of her own path joined to the advice given.', mood: 'personally-disclosing' },
      { speaker: 'sakura_teen', jp: '…そっか。なんか、少し気持ちが楽になりました。', en: '…I see. Somehow, my feeling got a little lighter.', style: 'Teen visible relief lifting, voice loosening with real release, soft genuine gratitude threading through the response.', mood: 'visibly-relieving' },
      { speaker: 'asuka_teacher', jp: 'まだ時間あるから、焦らないで。', en: 'There\'s still time, so don\'t rush.', style: 'Teacher soft closing reassurance, the time-pressure laid down gently, real care in the pacing throughout.', mood: 'softly-reassuring' },
      { speaker: 'sakura_teen', jp: 'はい。先生、ありがとうございました。', en: 'Yes. Sensei, thank you so much.', style: 'Teen sincere weighted thanks, voice carrying the real lifting the conversation has produced, soft deep gratitude.', mood: 'sincerely-weighted' }
    ]
  },
  // ---------------------------------------------------------------
  // 177 — goro grandpa + tatsuya country (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00177',
    context: 'Grandpa Goro visits his rural nephew Tatsuya for a couple of days. They share a quiet evening on the porch.',
    purpose: 'extended family bond — uncle and nephew, country evening, small dignified talk',
    ambient: 'porch_evening',
    sound_effects: [],
    target_vocab: ['夕方', '空', '田舎', '懐かしい', '酒'],
    cast: ['goro_grandpa', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'goro_grandpa', jp: 'いい夕方だな。空が綺麗だ。', en: 'A good evening. The sky is beautiful.', style: 'Slow grandfather reflection, the appreciation given full weight in the deliberate pacing, gentle elder calm.', mood: 'slowly-appreciating' },
      { speaker: 'tatsuya_country', jp: 'ここの夕方は、毎日こんなもんですわ。', en: 'Evenings here are like this every day.', style: 'Countryside understated pride, casual rural cadence, the daily wealth shared without bragging at all.', mood: 'understated-proud' },
      { speaker: 'goro_grandpa', jp: '東京じゃ、こうはいかん。', en: 'In Tokyo, it\'s not like this.', style: 'Slow grandfather honest comparison, no bitterness, simple observation about the difference between places delivered.', mood: 'simply-observing' },
      { speaker: 'tatsuya_country', jp: 'おじさんも、いつでも来てくれたらいい。', en: 'Uncle, come whenever you like.', style: 'Country nephew warm direct invitation, the family bond stated plainly, real openness in the brief offer.', mood: 'plainly-warm' },
      { speaker: 'goro_grandpa', jp: 'ありがとうな。やっぱり田舎はいい。', en: 'Thank you. The countryside really is good.', style: 'Slow grandfather appreciation deepening, the soft conviction in the simple statement carrying real weight throughout.', mood: 'deeply-appreciating' },
      { speaker: 'tatsuya_country', jp: 'お酒、もう一杯どうですか。', en: 'Another drink — how about it?', style: 'Country nephew gruff hosting offer, the practical generosity coming through, easy familial warmth in delivery.', mood: 'gruffly-hosting' },
      { speaker: 'goro_grandpa', jp: 'うん、頂こうか。久しぶりだからな。', en: 'Yes, I\'ll have one. It\'s been a while.', style: 'Slow grandfather acceptance, the 「久しぶり」 carrying generations of similar evenings shared softly throughout.', mood: 'softly-accepting' },
      { speaker: 'tatsuya_country', jp: '今日はゆっくりしてください。', en: 'Please relax fully today.', style: 'Country nephew warm closing instruction, the hosting gentleness audible underneath the rural directness throughout.', mood: 'warmly-instructing' }
    ]
  },
  // ---------------------------------------------------------------
  // 178 — mei + aoi, friend at café for advice (long)
  // ---------------------------------------------------------------
  {
    id: 'conv_00178',
    context: 'Mei sits at the café after closing for a quiet talk with Aoi about whether to accept the date her aunt set up.',
    purpose: 'friend-to-friend romantic counsel — soft uncertainty examined with kindness',
    ambient: 'cafe_closed_evening',
    sound_effects: [],
    target_vocab: ['紹介', '会う', '緊張', '気持ち', '正直', '決める'],
    cast: ['mei_romantic', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'アオイちゃん、相談していい？', en: 'Aoi-chan, can I talk to you about something?', style: 'Romantic soft asking voice, the friend-trust register, gentle nervous edge under the careful opener gently.', mood: 'soft-asking' },
      { speaker: 'aoi_barista', jp: 'うん、もちろん。何かあった？', en: 'Yeah, of course. Did something happen?', style: 'Dreamy artist warmth opening up, the friend-mode warmer than barista-mode, real attentive listening offered.', mood: 'attentively-warm' },
      { speaker: 'mei_romantic', jp: '叔母さんに、男の人を紹介されて。', en: 'My aunt — she introduced me to a guy.', style: 'Romantic soft sharing voice, the slight hesitation audible, the news unfolded gently rather than dramatically.', mood: 'softly-sharing' },
      { speaker: 'aoi_barista', jp: 'えー、どうなの？会うの？', en: 'Oh — and? Are you going to meet him?', style: 'Dreamy artist friend interest lifting, soft curiosity threaded with genuine care, no judgment in the questions.', mood: 'curiously-caring' },
      { speaker: 'mei_romantic', jp: 'それで迷ってて。正直、緊張する。', en: 'That\'s what I\'m stuck on. Honestly, I\'m nervous.', style: 'Romantic vulnerable honesty surfacing, the trust in the friend allowing real emotion through, soft sincere weight.', mood: 'vulnerably-honest' },
      { speaker: 'aoi_barista', jp: 'うん、わかる。私もそういうの苦手。', en: 'Yeah, I get it. I\'m bad at things like that too.', style: 'Dreamy artist identification voice, soft solidarity offered without solution, the friend-shared truth gentle and real.', mood: 'gently-identifying' },
      { speaker: 'mei_romantic', jp: '叔母さんは、いい人って言うんだけど。', en: 'My aunt says he\'s a good person, but…', style: 'Romantic trailing voice, the doubt carried in the unfinished sentence, soft worry threading through the pause.', mood: 'softly-doubting' },
      { speaker: 'aoi_barista', jp: 'メイちゃんの気持ちは？', en: 'What about your own feelings?', style: 'Dreamy artist careful pivot, the question turning the focus inward gently, soft real attention in the inquiry.', mood: 'carefully-pivoting' },
      { speaker: 'mei_romantic', jp: 'うーん…ちょっとだけ、会ってみたいかも。', en: 'Hmm… maybe just a little, I want to meet him.', style: 'Romantic small honest discovery, the truth surfacing softly under the careful examination, vulnerable real warmth audible.', mood: 'softly-discovering' },
      { speaker: 'aoi_barista', jp: 'じゃあ、会ってみたら？合わなかったら、それでいいし。', en: 'Then meet him. If it doesn\'t fit, that\'s fine too.', style: 'Dreamy artist gentle counsel, the low-pressure permission given, soft real wisdom in the casual delivery throughout.', mood: 'gently-counseling' },
      { speaker: 'mei_romantic', jp: 'そっか。そう考えると、ちょっと楽。', en: 'I see. Thinking like that, it\'s a little easier.', style: 'Romantic visible relief surfacing, voice loosening as the pressure releases, soft gratitude threaded through the discovery.', mood: 'visibly-relieving' },
      { speaker: 'aoi_barista', jp: '会う前に決めなくていいよ。', en: 'You don\'t have to decide before meeting.', style: 'Dreamy artist soft permission reinforced, the pressure laid down again gently, real friend-care held throughout.', mood: 'softly-reinforcing' },
      { speaker: 'mei_romantic', jp: 'ありがとう。話せて、ほんとに良かった。', en: 'Thank you. It was really good to talk.', style: 'Romantic soft sincere gratitude landing, voice carrying real relief, the friend connection felt deeply throughout.', mood: 'sincerely-relieved' },
      { speaker: 'aoi_barista', jp: 'いつでも話聞くからね。', en: 'I\'ll listen anytime.', style: 'Dreamy artist warm closing promise, the offer extended without weight, soft friend-care held gently throughout.', mood: 'warmly-offering' }
    ]
  },
  // ---------------------------------------------------------------
  // 179 — saito doctor + hiroshi_elder, checkup (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00179',
    context: 'Dr. Saito sees Hiroshi-elder for his regular checkup. They\'ve known each other through these visits for years.',
    purpose: 'long-term doctor-patient rapport — professional care that has become personal',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['調子', '血圧', '薬', '続ける', '無理'],
    cast: ['saito_doctor', 'hiroshi_elder'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: '今日はお調子いかがですか。', en: 'How are you feeling today?', style: 'Doctor warm professional opener, the familiarity of years in the cadence, real attentive care threaded throughout.', mood: 'professionally-warm' },
      { speaker: 'hiroshi_elder', jp: 'まあ、なんとかやってます。', en: 'Well, somehow getting along.', style: 'Elder honest understated voice, the slow cadence carrying the truth of slowing down, dignified humility throughout.', mood: 'honestly-understated' },
      { speaker: 'saito_doctor', jp: '血圧、少し高めですね。', en: 'Blood pressure is a bit on the higher side.', style: 'Doctor clinical careful observation, no alarm just clarity, the professional reading delivered with gentle weight.', mood: 'clinically-careful' },
      { speaker: 'hiroshi_elder', jp: 'やっぱりか。最近、ちょっと無理しすぎたかな。', en: 'As I thought. Maybe I overdid it a bit lately.', style: 'Elder self-aware acknowledgment, the slow weighted admission, gentle ruefulness threaded through the recognition.', mood: 'self-awarely-rueful' },
      { speaker: 'saito_doctor', jp: '薬は、ちゃんと続けてくださいね。', en: 'Please keep taking your medication properly.', style: 'Doctor gentle firm instruction, the care behind the directive audible, professional warmth holding the seriousness.', mood: 'gentle-firm' },
      { speaker: 'hiroshi_elder', jp: 'はい、毎朝飲んでます。', en: 'Yes, I take it every morning.', style: 'Elder reassuring honest reply, the daily routine confirmed, gentle compliance held with dignity throughout response.', mood: 'reassuringly-honest' },
      { speaker: 'saito_doctor', jp: '無理しないことが、一番の薬ですから。', en: 'Not overdoing it — that\'s the best medicine of all.', style: 'Doctor warm wisdom delivered, the professional truth wrapped in personal care, soft real conviction throughout.', mood: 'warmly-wise' },
      { speaker: 'hiroshi_elder', jp: '心に留めときます。先生も気をつけて。', en: 'I\'ll keep it in mind. You take care too, doctor.', style: 'Elder warm closing reciprocity, the years-long acquaintance audible in the personal exchange of care extended.', mood: 'warmly-reciprocal' }
    ]
  },
  // ---------------------------------------------------------------
  // 180 — hina + sho + sakura, three kids playing (medium, 3-speaker)
  // ---------------------------------------------------------------
  {
    id: 'conv_00180',
    context: 'A late afternoon. Sakura is supposed to be doing homework but the two kids have lured her into a game in the yard.',
    purpose: 'three-generation-of-childhood scene — teen as bridge between two younger children',
    ambient: 'backyard_afternoon',
    sound_effects: [],
    target_vocab: ['遊ぶ', '楽しい', 'ルール', '勝つ', '次'],
    cast: ['hina_child', 'sho_child', 'sakura_teen'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'お姉ちゃん、もう一回やろう！', en: 'Big sister, let\'s do it one more time!', style: 'High child pleading energy, the eager repeat-request carrying full childish persistence and joy throughout.', mood: 'pleading-eager' },
      { speaker: 'sakura_teen', jp: 'もうーまだ宿題終わってないんだけど。', en: 'Aww, but I haven\'t finished homework yet.', style: 'Teen mock-protest with the smile audible in the voice, real warmth under the put-upon teen surface.', mood: 'mock-protesting' },
      { speaker: 'sho_child', jp: 'お願い…一回だけ。', en: 'Please… just one time.', style: 'Tiny six-year-old soft plea, the careful gentle ask carrying real wanting, quiet vulnerable hope throughout.', mood: 'softly-pleading' },
      { speaker: 'sakura_teen', jp: 'うわー、しょうくんの目はずるい。一回だけ！', en: 'Ugh, Sho\'s eyes are unfair. Just one time!', style: 'Teen dramatic giving-in laugh, the affection completely audible underneath the playful complaint, warm surrender throughout.', mood: 'warmly-surrendering' },
      { speaker: 'hina_child', jp: 'やったー！今度はあたしがオニね！', en: 'Yay! This time I\'m it!', style: 'High child triumphant energy, the role-claiming bright and confident, full childish leadership audible throughout.', mood: 'triumphantly-leading' },
      { speaker: 'sho_child', jp: 'ぼく、隠れるとこ決めとく。', en: 'I\'ll decide my hiding spot.', style: 'Small six-year-old strategic determination, voice quietly focused on the task, careful planning energy throughout.', mood: 'quietly-strategic' },
      { speaker: 'sakura_teen', jp: 'はいはい、ルール守ってよー。', en: 'Yes yes, follow the rules okay.', style: 'Teen warm referee voice, the casual older-cousin authority lifted into the game-management role audibly.', mood: 'casually-managing' },
      { speaker: 'hina_child', jp: '十数えるよー！いーち、にー！', en: 'I\'m counting to ten! One, two!', style: 'High child loud counting energy, the game-rhythm bright and clear, full child excitement carrying through.', mood: 'loudly-counting' },
      { speaker: 'sakura_teen', jp: 'はやっ。次は私が勝つからね。', en: 'Fast! Next time I\'ll win.', style: 'Teen mock-competitive lift, the warm play-energy audible, real enjoyment hiding under the teen complaint throughout.', mood: 'mock-competitive' }
    ]
  },
  // ---------------------------------------------------------------
  // 181 — takeda officer + mrs_mori, neighborhood watch (medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00181',
    context: 'Officer Takeda stops by Mrs. Mori\'s house for the monthly neighborhood-watch chat. She always has tea waiting.',
    purpose: 'civic relationship — small-town policing as a relationship maintained through tea',
    ambient: 'genkan_afternoon',
    sound_effects: [],
    target_vocab: ['最近', '近所', '変わった', '安全', '助かる'],
    cast: ['takeda_officer', 'mrs_mori_neighbor'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: 'お邪魔します。今月もよろしくお願いします。', en: 'Excuse the intrusion. Looking forward to this month too.', style: 'Officer professional warm opener, the years of these visits in the cadence, courteous and easy throughout.', mood: 'professionally-easy' },
      { speaker: 'mrs_mori_neighbor', jp: 'いつもご苦労様。お茶どうぞ。', en: 'Always such hard work. Have some tea.', style: 'Neighbor maternal hosting energy, the routine hospitality carrying real appreciation for the officer\'s presence.', mood: 'maternally-hosting' },
      { speaker: 'takeda_officer', jp: 'ありがとうございます。最近、近所で何か変わったことありますか。', en: 'Thank you. Anything different in the neighborhood lately?', style: 'Officer professional pivot to work mode, the steady reliability audible, real attentive inquiry held throughout.', mood: 'professionally-pivoting' },
      { speaker: 'mrs_mori_neighbor', jp: 'うーん、特に大きなことはないかしら。', en: 'Mm, nothing particularly big I think.', style: 'Neighbor thoughtful considering, the genuine search through memory audible, careful honest answering delivered slowly.', mood: 'thoughtfully-considering' },
      { speaker: 'takeda_officer', jp: '小さなことでも、気になることあれば。', en: 'Even small things — if anything bothers you.', style: 'Officer gentle professional encouragement, the opening for any concern carefully extended, real care threaded throughout.', mood: 'gently-opening' },
      { speaker: 'mrs_mori_neighbor', jp: 'あ、そういえば。隣の空き家、また誰か見たの。', en: 'Oh, that reminds me. Someone again, at the empty house next door.', style: 'Neighbor sudden remembering, the small worry resurfacing, soft observational sharing in the casual delivery.', mood: 'suddenly-remembering' },
      { speaker: 'takeda_officer', jp: 'なるほど。ちょっと見回りに行ってみますね。', en: 'I see. I\'ll go take a look around.', style: 'Officer immediate professional response, the steady action-orientation audible, real responsiveness in the brief commitment.', mood: 'professionally-responsive' },
      { speaker: 'mrs_mori_neighbor', jp: 'お願いね。本当に助かるわ。', en: 'Please. It\'s really a help.', style: 'Neighbor warm grateful relief, the trust in the officer carried through the warm appreciative response delivered.', mood: 'warmly-grateful' },
      { speaker: 'takeda_officer', jp: 'こちらこそ、いつもお世話になってます。', en: 'It\'s I who am always grateful.', style: 'Officer humble warm closing, the mutual respect held with real sincerity, professional warmth deepening throughout.', mood: 'humbly-warm' }
    ]
  },
  // ---------------------------------------------------------------
  // 182 — hiroshi_elder + ryosuke (long)
  // ---------------------------------------------------------------
  {
    id: 'conv_00182',
    context: 'Ryosuke visits his father-in-law Hiroshi-elder alone for the first time, seeking advice about a difficult parenting situation with Riku.',
    purpose: 'son-in-law / father-in-law trust opening — older man\'s wisdom offered carefully across generational distance',
    ambient: 'tatami_evening',
    sound_effects: [],
    target_vocab: ['息子', '反抗', '時期', '昔', '同じ', '待つ'],
    cast: ['ryosuke_dad', 'hiroshi_elder'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'お父さん、ちょっと相談があって伺いました。', en: 'Father, I came because I have something to discuss.', style: 'Son-in-law formal respectful opener, the careful navigation of asking the elder for help, soft sincere weight.', mood: 'formally-respectful' },
      { speaker: 'hiroshi_elder', jp: 'おう、亮介。まあ座って。', en: 'Oh, Ryosuke. Well, sit down.', style: 'Elder warm welcoming brevity, the rough affection inviting him in without ceremony, slow steady ease throughout.', mood: 'warmly-brief' },
      { speaker: 'ryosuke_dad', jp: 'リクのことなんですが、最近うまくいかなくて。', en: 'It\'s about Riku — things haven\'t been going well lately.', style: 'Son-in-law honest worried sharing, the parental concern surfacing carefully, soft real distress threading through delivery.', mood: 'honestly-worried' },
      { speaker: 'hiroshi_elder', jp: 'うん、聞かせなさい。', en: 'Mm, let me hear.', style: 'Elder patient brief inviting, the space made for real telling, gentle gravity holding the listening throughout.', mood: 'patiently-inviting' },
      { speaker: 'ryosuke_dad', jp: '何を話しかけても、すぐ部屋に行っちゃって。', en: 'Whatever I try to talk about, he just goes straight to his room.', style: 'Son-in-law father-frustration audible, the specific pattern shared, real hurt threading through the controlled delivery.', mood: 'frustrated-controlled' },
      { speaker: 'hiroshi_elder', jp: '何歳になったかな、リクは。', en: 'How old is Riku now again?', style: 'Elder gentle clarifying question, the slow weighted asking opening real consideration, careful warmth in the inquiry.', mood: 'gently-clarifying' },
      { speaker: 'ryosuke_dad', jp: '十五です。来年、高校入ります。', en: 'Fifteen. He starts high school next year.', style: 'Son-in-law factual respectful answer, the parental knowledge precise, soft weight held in the brief delivery throughout.', mood: 'factually-respectful' },
      { speaker: 'hiroshi_elder', jp: 'ああ、その時期か。誰でも通る道だな。', en: 'Ah, that age. It\'s a road everyone walks.', style: 'Elder slow recognizing wisdom, the generational perspective audible, soft real reassurance in the simple framing throughout.', mood: 'wisely-reassuring' },
      { speaker: 'ryosuke_dad', jp: '私の時もそうでしたか？', en: 'Was it like that for me too?', style: 'Son-in-law honest question opening, the genuine search for connection in the elder\'s experience, soft asking throughout.', mood: 'honestly-asking' },
      { speaker: 'hiroshi_elder', jp: 'たぶんな。みんな、自分は違うと思うものだ。', en: 'Probably. Everyone thinks they were different.', style: 'Elder gentle dry humor threaded through, the wisdom holding both truth and warmth, slow weighted delivery throughout.', mood: 'gently-dry' },
      { speaker: 'ryosuke_dad', jp: 'どうすれば、いいんでしょうか。', en: 'What should I do?', style: 'Son-in-law vulnerable real question, the trust in asking laid bare, soft uncertainty audible in the brief delivery.', mood: 'vulnerably-asking' },
      { speaker: 'hiroshi_elder', jp: '無理に話させようとせんことだ。', en: 'Don\'t try to force him to talk.', style: 'Elder firm gentle counsel, the principle delivered with the weight of experience, soft real authority throughout.', mood: 'firmly-counseling' },
      { speaker: 'hiroshi_elder', jp: '一緒にいる時間を、ただ作る。', en: 'Just make time being together.', style: 'Elder continuation of wisdom, the simple instruction held with deep care, slow weighted delivery throughout.', mood: 'deeply-instructing' },
      { speaker: 'ryosuke_dad', jp: 'なるほど。話さなくても、一緒に。', en: 'I see. Even without talking, just together.', style: 'Son-in-law absorbing understanding, the lesson landing audibly, soft real recognition threading through the response.', mood: 'absorbing-understanding' },
      { speaker: 'hiroshi_elder', jp: 'そう。父親はそういうものだ。待つのも仕事。', en: 'Yes. That\'s what a father is. Waiting is also work.', style: 'Elder firm wise weight, the philosophical framing carried with decades of experience, soft real authority throughout.', mood: 'firmly-wise' },
      { speaker: 'ryosuke_dad', jp: 'ありがとうございます。気持ちが楽になりました。', en: 'Thank you. My mind feels lighter.', style: 'Son-in-law genuine deep gratitude, voice carrying real relief from the burden being shared, soft sincere closing.', mood: 'sincerely-relieved' },
      { speaker: 'hiroshi_elder', jp: 'いつでも来なさい。', en: 'Come anytime.', style: 'Elder brief warm closing, the door held open with simple authority, real welcome held in the brevity.', mood: 'briefly-welcoming' }
    ]
  },
  // ---------------------------------------------------------------
  // 183 — yuki + mei + asuka, yoga break (3-speaker, medium)
  // ---------------------------------------------------------------
  {
    id: 'conv_00183',
    context: 'A weekly community yoga class. Yuki, Mei, and Asuka share a water break in the lobby afterwards.',
    purpose: 'three professional women in low-stakes companionship — third-place easy talk',
    ambient: 'studio_lobby',
    sound_effects: [],
    target_vocab: ['疲れる', '体', '水', '楽しい', '続ける'],
    cast: ['yuki_office', 'mei_romantic', 'asuka_teacher'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'はー、今日のヨガきつかった！', en: 'Phew, today\'s yoga was tough!', style: 'Office woman bright collapse, the post-workout exhale audible, real warm fatigue carrying through the exclamation.', mood: 'brightly-collapsed' },
      { speaker: 'mei_romantic', jp: 'ねー、足ぷるぷるしてる。', en: 'Right? My legs are wobbling.', style: 'Romantic feminine laughing solidarity, the shared body-comedy audible, soft warm camaraderie threading throughout.', mood: 'laughing-solidarity' },
      { speaker: 'asuka_teacher', jp: 'でも、なんだか気持ちいいですよね。', en: 'But somehow it feels good, doesn\'t it?', style: 'Teacher warm reflective lift, the lifting after exertion held in the cadence, gentle shared appreciation audible.', mood: 'reflectively-lifting' },
      { speaker: 'yuki_office', jp: 'わかる。すっきりする。', en: 'I get it. It clears you out.', style: 'Office woman warm affirmation, the post-workout clarity audible in the voice, real enthusiasm carried throughout.', mood: 'warmly-affirming' },
      { speaker: 'mei_romantic', jp: 'みんなで来ると楽しいね。', en: 'Coming together makes it fun.', style: 'Romantic soft inclusive lift, the friend-warmth extending across the group, genuine pleasure audible in delivery.', mood: 'inclusively-warm' },
      { speaker: 'asuka_teacher', jp: 'また来週も、続けましょう。', en: 'Let\'s keep coming next week too.', style: 'Teacher warm gentle commitment, the routine-building offered with soft real enthusiasm, group-leader warmth throughout.', mood: 'gently-committing' },
      { speaker: 'yuki_office', jp: 'もちろん！水分とってから帰ろう。', en: 'Of course! Let\'s hydrate before heading home.', style: 'Office woman practical bright energy, the warm group-management lifted into casual leadership, sunny warmth throughout.', mood: 'practically-bright' },
      { speaker: 'mei_romantic', jp: 'お疲れさまでした。', en: 'Good work today.', style: 'Romantic soft warm closing, the gentle ritual phrase delivered with real sincerity, warm soft bow throughout.', mood: 'softly-closing' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);

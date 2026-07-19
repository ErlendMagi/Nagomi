import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_271 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ヘン','タダ','すき','乙','間もなく','待て','こなす','ぶつけ']
const B_T = ['数量','要領','対談','補佐','試行錯誤','フォーマット','一昨年','当分']
const C_T = ['麻痺','朝鮮半島','自律','均衡','過度','引っ張っ','木材','機内']
const D_T = ['万博','ウィーン','秋葉原','金沢','モーツァルト','ドクター','芸術家','大賞']

const data = [
  {id:'conv_05381',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends gossip about a clumsy date',lines:[
    {speaker:'mei_romantic',jp:'昨日のデート、なんかヘンな感じだったの。',en:"Yesterday's date felt kind of off.",style:'Soft confession.'},
    {speaker:'aoi_barista',jp:'どんな風に?',en:"How so?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'お店入った間もなく、彼が膝をテーブルにぶつけて、しばらく待ての状態。',en:"Right after we entered, he banged his knee on the table and was stuck waiting it out.",style:'Wincing.'},
    {speaker:'aoi_barista',jp:'うわ。でもタダで奢ってくれた?',en:"Ouch. But did he treat for free?",style:'Light tease.'},
    {speaker:'mei_romantic',jp:'すきあらばって感じで会計済ませてくれて、乙な気遣いだったよ。',en:"He paid at the first chance — kind of an elegant gesture.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'よし、次回はうまくこなすね、彼。',en:"He'll handle it better next time.",style:'Warm close.'},
  ]},
  {id:'conv_05382',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens recap a chaotic school day',lines:[
    {speaker:'sakura_teen',jp:'今日の体育、間もなく終わる頃に、転んで頭をぶつけたよ。',en:"In today's gym, right as it was about to end, I fell and bumped my head.",style:'Wincing teen.'},
    {speaker:'riku_teen',jp:'マジか。先生、すぐ「待て」って指示出した?',en:"For real. Did the teacher say 'stop' right away?",style:'Concerned.'},
    {speaker:'sakura_teen',jp:'うん。でも私、課題はぜんぶこなすのに必死で、ヘンな顔してたって笑われた。',en:"Yeah. But I was scrambling to finish all the tasks, they laughed at my weird face.",style:'Self-deprecating teen.'},
    {speaker:'riku_teen',jp:'タダで友達に笑われるのも、すきあらばだよな。',en:"Friends laughing for free — they take any opening, huh.",style:'Dry teen humor.'},
    {speaker:'sakura_teen',jp:'帰ったら冷やすよ。乙な味のアイスでも食べて休む。',en:"At home I'll ice it. Eat some fancy-flavor ice cream and rest.",style:'Recovering teen.'},
    {speaker:'riku_teen',jp:'お大事に。',en:"Take care.",style:'Warm close.'},
  ]},
  {id:'conv_05383',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom calms her young son after a small accident',lines:[
    {speaker:'sho_child',jp:'ママ、テーブルの角に膝ぶつけて、ヘンな音した。',en:"Mom, I bumped my knee on the table corner and made a weird noise.",style:'Whimpering child.'},
    {speaker:'yumiko_mom',jp:'あらら、見せて。間もなく腫れちゃうかも。',en:"Oh dear, let me see. It might swell soon.",style:'Warm motherly.'},
    {speaker:'sho_child',jp:'痛い…でも宿題こなすのに、椅子に座って待てなくて。',en:"It hurts… but I had to do homework and couldn't sit still and wait.",style:'Sniffling.'},
    {speaker:'yumiko_mom',jp:'今夜はタダで甘えていいよ。',en:"Tonight you can be a bit spoiled, on the house.",style:'Tender.'},
    {speaker:'sho_child',jp:'お菓子はすきな物くれる?',en:"Will you give me my favorite snack?",style:'Hopeful.'},
    {speaker:'yumiko_mom',jp:'はい、乙な味のクッキー、特別に。',en:"Yes, fancy-flavor cookies, just this once.",style:'Loving close.'},
  ]},
  {id:'conv_05384',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple recaps a stiff afternoon',lines:[
    {speaker:'hiroshi_elder',jp:'今朝、ヘンな寝相のせいで首をぶつけた感じだ。',en:"This morning's weird sleeping posture left my neck feeling banged.",style:'Mild elder grumble.'},
    {speaker:'sachiko_grandma',jp:'間もなく整骨院の予約時間よ、待てる?',en:"The chiropractor appointment is soon — can you wait?",style:'Gentle.'},
    {speaker:'hiroshi_elder',jp:'うん、家事はもうこなす元気が無くて、午前中はタダ寝てた。',en:"Yes. No energy left for chores, I just slept for free all morning.",style:'Self-deprecating.'},
    {speaker:'sachiko_grandma',jp:'お夕飯は、お好みのすきやきにしましょうか。',en:"For dinner, shall we have your favorite sukiyaki?",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'乙な献立だ、ありがとう。',en:"What an elegant menu — thank you.",style:'Tender close.'},
  ]},
  {id:'conv_05385',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student listens to a teen friend\'s stressful week',lines:[
    {speaker:'sakura_teen',jp:'先輩、最近ヘンに疲れて、何もこなす気力が出ないんです。',en:"Senpai, lately I'm weirdly tired and can't muster energy to handle anything.",style:'Quiet teen.'},
    {speaker:'ren_uni',jp:'間もなくテスト期間だしな。待てる時間、しっかり休もう。',en:"Test period's near. In moments of waiting, rest properly.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'タダで休んだら、罪悪感がぶつかってきて辛いんです。',en:"Resting for nothing, guilt slams into me — it's hard.",style:'Vulnerable.'},
    {speaker:'ren_uni',jp:'すきな曲、聴いて深呼吸。乙な過ごし方も大事だよ。',en:"Listen to a favorite song and breathe. Treating yourself with quiet elegance matters.",style:'Gentle.'},
    {speaker:'sakura_teen',jp:'ありがとう。試してみます。',en:"Thanks. I'll try.",style:'Soft close.'},
  ]},

  {id:'conv_05386',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a special-edition product plan',lines:[
    {speaker:'hiroshi_boss',jp:'今期の限定品、数量と要領を整理してくれ。',en:"This term's limited item — get quantity and execution in order.",style:'Crisp boss.'},
    {speaker:'kenji_office',jp:'はい。広報部長との対談形式で、社内告知を進める予定です。',en:"Yes. Internal announcement via dialogue with the PR director.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'補佐の井上にも、フォーマット確認させとけ。',en:"Have your assistant Inoue confirm the format too.",style:'Direction.'},
    {speaker:'kenji_office',jp:'一昨年の販促資料、流用は当分難しいので、試行錯誤しています。',en:"The promo materials from two years ago can't be reused for now, so we're experimenting.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'頼む。来週、初稿を出してくれ。',en:"Please. Submit a first draft next week.",style:'Brief close.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Crisp close.'},
  ]},
  {id:'conv_05387',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep a campaign launch',lines:[
    {speaker:'yuki_office',jp:'販売数量、要領で先に概算出してくれる?',en:"For sales quantity, can you make a rough estimate with the briefing first?",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。一昨年の数字を補佐に整理させ、フォーマットに当て込みます。',en:"Yes. I'll have my assistant compile two-year-old figures and fit them to the format.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'広報との対談、当分は週一の頻度で続けよう。',en:"Let's keep the dialogue with PR weekly for the time being.",style:'Strategic.'},
    {speaker:'kenji_office',jp:'試行錯誤しながら、最適なリズム探します。',en:"I'll find the best rhythm through trial and error.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'よし、明日朝までに進捗共有を。',en:"Good. Share progress by tomorrow morning.",style:'Direction.'},
    {speaker:'kenji_office',jp:'了解です。',en:"Got it.",style:'Brief close.'},
  ]},
  {id:'conv_05388',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about supply-chain practices',lines:[
    {speaker:'ren_uni',jp:'発注数量、何を基準に決めるんですか。',en:"On order quantities — what's the basis?",style:'Polite intern.'},
    {speaker:'yuki_office',jp:'要領良くまとめれば、一昨年のデータと、補佐の予測モデルを併用します。',en:"Put briefly, we combine two-year-old data with our assistant's forecasting model.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'仕入先との対談、頻度はどうですか。',en:"Frequency of supplier dialogues?",style:'Curious.'},
    {speaker:'yuki_office',jp:'毎月、フォーマット化された議事録を共有しています。',en:"Monthly, with formatted minutes shared.",style:'Informative.'},
    {speaker:'ren_uni',jp:'当分の課題は、何ですか。',en:"What's the issue for the time being?",style:'Probe.'},
    {speaker:'yuki_office',jp:'試行錯誤しながら、需要予測の精度を上げることです。',en:"Improving demand-forecast accuracy via trial and error.",style:'Close.'},
  ]},
  {id:'conv_05389',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss on operational rigor',lines:[
    {speaker:'hiroshi_elder',jp:'発注数量の管理、要領を覚えれば若手も育つ。',en:"Manage order quantities — once young staff learn the knack, they grow.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。補佐の人選も、当分慎重に進めています。',en:"Yes. For assistant selection too, we proceed carefully for now.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'一昨年のフォーマット、見直しはしているか?',en:"Are you reviewing the format from two years ago?",style:'Probe.'},
    {speaker:'hiroshi_boss',jp:'試行錯誤を経て、来月にも刷新する予定です。',en:"After trial and error, we plan to refresh it next month.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'対談形式のレビューも残しておけ。資産だ。',en:"Keep dialogue-style reviews. They're an asset.",style:'Wise advice.'},
    {speaker:'hiroshi_boss',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05390',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about administrative procedures',lines:[
    {speaker:'takeda_officer',jp:'本件の受理数量、要領通り処理しています。',en:"The intake quantity for this case is being processed per protocol.",style:'Calm.'},
    {speaker:'ren_uni',jp:'担当補佐がフォーマット化しているんですか。',en:"Is your assistant formatting it?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。一昨年から運用を始めた様式です。',en:"Yes. The format we began using two years ago.",style:'Informative.'},
    {speaker:'ren_uni',jp:'対談やヒアリング、当分続けるんですか。',en:"Will dialogues and interviews continue for now?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。試行錯誤しながら市民との接点を増やしています。',en:"Yes. With trial and error, we're broadening citizen touchpoints.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'ありがとうございました。',en:"Thank you.",style:'Close.'},
  ]},

  {id:'conv_05391',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through a global-affairs paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、朝鮮半島の物流麻痺と東アジア均衡の話、面白い切り口ですね。',en:"Your paper — logistics paralysis on the Korean Peninsula and East-Asian balance — interesting angle.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。木材輸入の停滞と、機内貨物の代替について書きます。',en:"Yes. I'll cover stagnant timber imports and air-cargo alternatives.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'過度な依存を引っ張ってきた構造、自律的に組み替える話も入れて。',en:"Include the talk on autonomously restructuring the over-dependence that's been dragged along.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'政策の自律性、章を割いて論じます。',en:"I'll dedicate a chapter to policy autonomy.",style:'Plan.'},
    {speaker:'asuka_teacher',jp:'地域間均衡の数値、出典は丁寧に。',en:"For regional-balance figures, be careful with citations.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'参考にします。',en:"Noted.",style:'Close.'},
  ]},
  {id:'conv_05392',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager discuss a supply-chain disruption article',lines:[
    {speaker:'hiroshi_boss',jp:'この記事、朝鮮半島の物流麻痺、影響大きいな。',en:"This piece — Korean Peninsula logistics paralysis has wide impact.",style:'Boss.'},
    {speaker:'kenji_office',jp:'はい。木材輸入が引っ張られてきた供給網、過度な集中が原因とのことです。',en:"Yes. The timber-import supply chain pulled along, root cause is over-concentration.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'機内貨物への切替、均衡的に進められるか?',en:"Can we shift to air cargo while keeping balance?",style:'Probe.'},
    {speaker:'kenji_office',jp:'自律的な代替ルートも検討中です。',en:"Autonomous alternative routes are under consideration.",style:'Detail.'},
    {speaker:'hiroshi_boss',jp:'来月の経営会議で議題にしよう。',en:"Let's put it on next month's executive agenda.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05393',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about a smuggling case',lines:[
    {speaker:'takeda_officer',jp:'朝鮮半島ルート、輸送の麻痺が背景にあります。',en:"With the Peninsula route, transport paralysis is in the background.",style:'Calm.'},
    {speaker:'ren_uni',jp:'木材偽装の事案、何ヶ月続いたんですか。',en:"How long did the timber-misrepresentation case run?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'過度な需要が引っ張った結果、半年に及びました。',en:"Driven by excessive demand, it lasted six months.",style:'Informative.'},
    {speaker:'ren_uni',jp:'機内持ち込み事案も増えているんですよね。',en:"In-cabin smuggling cases are rising too, right?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい、均衡を欠いた取締の見直しを進めています。',en:"Yes — we're rebalancing enforcement that lacked equilibrium.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'自律的な国際協力、必要そうですね。',en:"Autonomous international cooperation looks needed.",style:'Engaged.'},
    {speaker:'takeda_officer',jp:'おっしゃる通り。',en:"As you say.",style:'Close.'},
  ]},
  {id:'conv_05394',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired trade specialist',lines:[
    {speaker:'ren_uni',jp:'長年、貿易の現場にいらしたんですよね。',en:"You've long been in the trade field.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'ああ。朝鮮半島の物流が麻痺した時期、何度も経験した。',en:"Yes. I lived through several Korean-Peninsula logistics paralyses.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'木材輸入が引っ張られた時、どう均衡を保たれましたか。',en:"When timber imports got dragged along, how did you keep balance?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'機内貨物への切替を、自律的に決められる体制が要だった。',en:"Switching to air cargo with an autonomous decision system was key.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'過度な依存、教訓になりましたね。',en:"Over-dependence — a lesson, then.",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'ええ、何度も学んだよ。',en:"Yes — learned again and again.",style:'Wise close.'},
  ]},
  {id:'conv_05395',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains body autoregulation to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、体の自律神経のバランス、過度なストレスで崩れます。',en:"Sakura, autonomic-nerve balance breaks under excessive stress.",style:'Friendly.'},
    {speaker:'sakura_teen',jp:'勉強を引っ張って続けると、頭が麻痺するみたいで…。',en:"Pushing study on and on, my head feels paralyzed.",style:'Vulnerable.'},
    {speaker:'saito_doctor',jp:'休息と均衡が大事です。長距離の機内のような乾燥環境も影響します。',en:"Rest and balance matter. Dry environments like long flights also affect you.",style:'Patient educator.'},
    {speaker:'sakura_teen',jp:'木材の家、ってリラックスに効くって本当ですか?',en:"Are wood-built homes really good for relaxing?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'湿度調整に効いて、自律神経も整いやすいです。',en:"They help humidity regulation, easing the autonomic system.",style:'Informative.'},
    {speaker:'sakura_teen',jp:'勉強になりました!',en:"That was educational!",style:'Bright close.'},
  ]},

  {id:'conv_05396',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a culture-museum weekend',lines:[
    {speaker:'sakura_teen',jp:'今度の週末、大阪万博の関連展示行かない?',en:"This weekend, want to hit a Kansai Expo-related exhibit?",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。秋葉原のレトロ展も気になるんだよな。',en:"Sure. Akihabara's retro exhibition also catches my eye.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'ウィーンの音楽家、モーツァルトの企画展、終わっちゃう前に見たい。',en:"Want to catch the Vienna-musician Mozart special before it ends.",style:'Animated.'},
    {speaker:'riku_teen',jp:'金沢にも、芸術家コレクションの巡回展、来てるって。',en:"Kanazawa apparently hosts a touring artists' collection too.",style:'Knowing.'},
    {speaker:'sakura_teen',jp:'ドクター中田さんの講演、それも大賞獲るレベルらしいよ。',en:"They say Dr. Nakata's lecture is grand-prize level too.",style:'Excited.'},
    {speaker:'riku_teen',jp:'予定詰めて、二日でこなそ。',en:"Let's pack the schedule and do it in two days.",style:'Resolved close.'},
  ]},
  {id:'conv_05397',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends discuss a music & travel plan',lines:[
    {speaker:'aoi_barista',jp:'夏休み、ウィーンに音楽旅行する予定。',en:"Summer break, planning a music trip to Vienna.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'素敵!モーツァルトのコンサート、行ける?',en:"Lovely! Can you catch a Mozart concert?",style:'Excited.'},
    {speaker:'aoi_barista',jp:'うん、芸術家の友達が招待状をくれた。',en:"Yes — an artist friend gave me an invitation.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'帰国したら、金沢の伝統工芸展もぜひ。',en:"After returning, the Kanazawa traditional-crafts exhibition is a must.",style:'Recommend.'},
    {speaker:'aoi_barista',jp:'そうする。秋葉原のドクター系イベントも面白そう。',en:"I will. The Akihabara doctor-themed event sounds fun too.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'大阪万博の余韻も、しばらく続きそうだね。',en:"The Osaka Expo afterglow will linger a while too.",style:'Warm close.'},
  ]},
  {id:'conv_05398',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend plan a cultural trip',lines:[
    {speaker:'sakura_teen',jp:'先輩、卒業旅行、ウィーンと金沢で迷ってます。',en:"Senpai, graduation trip — Vienna vs Kanazawa.",style:'Eager.'},
    {speaker:'ren_uni',jp:'モーツァルトの軌跡を辿るならウィーン、和の芸術家巡りなら金沢。',en:"To trace Mozart's path, Vienna. For Japanese-artist tours, Kanazawa.",style:'Helpful.'},
    {speaker:'sakura_teen',jp:'秋葉原の最新ガジェット展も気になるんですが。',en:"The Akihabara latest-gadget show also catches me.",style:'Aside.'},
    {speaker:'ren_uni',jp:'帰国後でも観れる。今は遠出を優先しよう。',en:"That's viewable after returning. Prioritize distance now.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'万博関連の特別展も追加できそう。',en:"I could add an Expo-related special exhibition too.",style:'Plan.'},
    {speaker:'ren_uni',jp:'ドクター佐藤の関連講演、大賞受賞してたから、聞けたら最高。',en:"Dr. Sato's related talk won a grand prize — catching that would be best.",style:'Knowing close.'},
  ]},
  {id:'conv_05399',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a culture weekend with the family',lines:[
    {speaker:'yumiko_mom',jp:'家族で大阪万博の振り返り展、見に行こうよ。',en:"Let's go see the Osaka Expo retrospective with the family.",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'いいね。ウィーン関連のクラシック演奏会もやってるって。',en:"Sure. They're also doing a Vienna-related classical concert.",style:'Easy dad.'},
    {speaker:'yumiko_mom',jp:'モーツァルトの曲、子供たちも好きだしね。',en:"The kids love Mozart's pieces too.",style:'Cheerful.'},
    {speaker:'ryosuke_dad',jp:'金沢に住む叔父さん芸術家、写真集サイン会やるって連絡来てた。',en:"Our uncle the artist in Kanazawa says he's doing a photo-book signing.",style:'Casual.'},
    {speaker:'yumiko_mom',jp:'秋葉原の知育コーナーも、子供たちにいいかも。',en:"The Akihabara educational corner might be good for the kids too.",style:'Idea.'},
    {speaker:'ryosuke_dad',jp:'ドクター企画の科学イベントが、年間大賞受賞してたよ。',en:"A doctor-curated science event won the year's grand prize, you know.",style:'Cheerful close.'},
  ]},
  {id:'conv_05400',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista swap culture-event news',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、ウィーンの音楽展、見に行ったか?',en:"Aoi-san, did you catch the Vienna music exhibit?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい、モーツァルト関連の展示、楽しかったです。',en:"Yes — the Mozart-related displays were enjoyable.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'うちのお客さん、芸術家連れて秋葉原行くと言うてた。',en:"Our customer said they'd take an artist to Akihabara.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'金沢の工芸展もそろそろ巡回してきますよ。',en:"The Kanazawa crafts exhibit will tour our way soon.",style:'Informative.'},
    {speaker:'daichi_kansai',jp:'大阪万博関連、ドクター系の講演も大賞獲ったって聞いた。',en:"Heard a doctor-related talk from the Osaka Expo won a grand prize.",style:'Cheerful Kansai.'},
    {speaker:'aoi_barista',jp:'チェックします!',en:"I'll check it out!",style:'Bright close.'},
  ]},
]

let written = 0, stillMissing = []
for (const r of data) {
  const lines = r.lines
  const jpAll = lines.map(l => l.jp).join('\n')
  const missing = r.targets.filter(t => !jpAll.includes(t))
  if (missing.length > 0) stillMissing.push({ id: r.id, missing })
  const targetVocab = r.targets.filter(t => vocabSet.has(t))
  const conv = {
    id: r.id, context: r.scenario, purpose: 'Teach: ' + r.targets.join('/'),
    ambient: r.ambient, sound_effects: [], target_vocab: targetVocab, cast: r.cast,
    frequency_tier: 4, length_tier: lengthLabel(lines.length), meta: META, lines,
  }
  fs.writeFileSync(path.join(OUT_DIR, `${r.id}.json`), JSON.stringify(conv, null, 2) + '\n')
  written++
}
console.log('wrote', written)
if (stillMissing.length) console.log('STILL_MISSING', JSON.stringify(stillMissing, null, 2))

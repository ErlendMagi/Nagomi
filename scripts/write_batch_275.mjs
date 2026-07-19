import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_275 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['につれて','につれ','おもしろかっ','めったに','浮かべ','挑む','如何に','太っ']
const B_T = ['月額','採決','取組','拠出','強行','承り','隊長','棟']
const C_T = ['落下','最高裁判所','拒絶','探求','力学','神学','高層','個体']
const D_T = ['サーフィン','シャンプー','ピラミッド','食器','名曲','唄','大家','染め']

const data = [
  {id:'conv_05461',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends discuss a fitness journey',lines:[
    {speaker:'mei_romantic',jp:'最近、運動するにつれて気持ちまで前向きになってきた。',en:"Lately, as I exercise more, even my mood's turned upbeat.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'いいね。冬につれ、太ってたのが嘘みたい。',en:"Nice. Hard to believe how I'd gained weight as winter went on.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'昨日のヨガ、おもしろかった。先生の指導、めったに見ない丁寧さで。',en:"Yesterday's yoga was fun. The instructor's care is rare to find.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'笑顔を浮かべながら指導してくれるよね。',en:"She smiles while she teaches, doesn't she.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'如何に楽しみながら続けるか、今後の挑むテーマ。',en:"How to keep enjoying it — that's my next challenge to take on.",style:'Resolved.'},
    {speaker:'aoi_barista',jp:'応援する!',en:"I'm rooting for you!",style:'Warm close.'},
  ]},
  {id:'conv_05462',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens recap a school sports day',lines:[
    {speaker:'sakura_teen',jp:'今日の運動会、進むにつれてどんどん盛り上がったよね。',en:"Today's sports day got more and more lively as it went on.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'時間がたつにつれ、皆の声が枯れていくのが、めったにない経験だった。',en:"As time passed, hearing everyone's voices go hoarse was a rare experience.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'リレーの逆転、おもしろかった。表情に喜び浮かべて走ってたね。',en:"The relay comeback was great. Joy on his face as he ran.",style:'Animated.'},
    {speaker:'riku_teen',jp:'冬休みに食べすぎて少し太ったけど、今日はちゃんと走れた。',en:"Got a bit chubby over winter break, but I ran properly today.",style:'Self-deprecating.'},
    {speaker:'sakura_teen',jp:'如何に練習が大事か、改めて感じたよ。',en:"How crucial practice is — I felt it again.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'来年もまた挑むぞ。',en:"Next year I'll take it on again.",style:'Warm close.'},
  ]},
  {id:'conv_05463',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom hears her young son recap a school festival',lines:[
    {speaker:'sho_child',jp:'ママ、今日のお祭り、すすむにつれて楽しくなってきたよ!',en:"Mom, the festival got more fun as it went along!",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'お友達と一緒だったのよね、めったにない経験ね。',en:"With friends, right? A rare experience.",style:'Warm.'},
    {speaker:'sho_child',jp:'笑顔いっぱい浮かべて、皆おもしろかったよ。',en:"Lots of smiles on faces, everyone enjoyed it.",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'最近、太っちゃったかなって心配してたけど、よく走れた?',en:"Worried you'd gotten chubby — did you run well?",style:'Caring.'},
    {speaker:'sho_child',jp:'うん!リレーの最後、如何にも勝ちたくて挑むつもりで走った。',en:"Yes! In the final relay, I ran absolutely with the will to win.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'立派だったよ、翔。',en:"Splendid, Sho.",style:'Tender close.'},
  ]},
  {id:'conv_05464',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple reflects on aging',lines:[
    {speaker:'hiroshi_elder',jp:'年を取るにつれて、ちょっとした坂道でも息が切れるね。',en:"As we age, even small hills leave me breathless.",style:'Reflective elder.'},
    {speaker:'sachiko_grandma',jp:'ええ、季節を重ねるにつれ、体が変わっていくのを感じるわね。',en:"Yes, season by season, you feel the body change.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'若い頃を思い浮かべると、めったに弱音吐かない気質だったが。',en:"Recalling youth, I rarely complained — that was my temperament.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'冬を越すたびに、少し太っちゃうのが悩み。',en:"Getting a bit chubby each winter is my worry.",style:'Light tease.'},
    {speaker:'hiroshi_elder',jp:'如何に楽しく日々を過ごすか、それが今の挑む課題だな。',en:"How to spend each day with joy — that's my challenge now.",style:'Wise.'},
    {speaker:'sachiko_grandma',jp:'おもしろかった旅、また計画しましょう。',en:"That fun trip — let's plan again.",style:'Warm close.'},
  ]},
  {id:'conv_05465',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student listens to a teen friend\'s self-confidence story',lines:[
    {speaker:'sakura_teen',jp:'先輩、最近、自信つくにつれて、行動も増えてきました。',en:"Senpai, as my confidence grew, my actions increased too.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'いいね。年を重ねるにつれ、視野が広がっていくんだよ。',en:"Nice. As you age, your perspective widens.",style:'Warm mentor.'},
    {speaker:'sakura_teen',jp:'前は、めったに笑顔浮かべなかったんですが…。',en:"I used to rarely show a smile.",style:'Honest.'},
    {speaker:'ren_uni',jp:'昔のサクラ、今からするとおもしろかったね。',en:"The old Sakura — looking back, you were fun.",style:'Affectionate tease.'},
    {speaker:'sakura_teen',jp:'冬に太ってしまって、ダイエット挑むつもりです。',en:"I got chubby in winter and plan to take on a diet.",style:'Plan.'},
    {speaker:'ren_uni',jp:'如何に楽しみながら続けるか、それが大事だよ。',en:"How to keep enjoying it — that's what matters.",style:'Warm close.'},
  ]},

  {id:'conv_05466',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a property-investment proposal',lines:[
    {speaker:'hiroshi_boss',jp:'新棟の月額賃料、収益見込みは?',en:"New building's monthly rent — revenue outlook?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。隊長が現地視察を済ませ、強行的な値下げ要請は退けました。',en:"Yes. Team-lead finished site inspection and rejected aggressive discount demands.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'拠出金の比率、再採決が必要だ。',en:"Contribution ratios need another vote.",style:'Direction.'},
    {speaker:'kenji_office',jp:'取組チームに承りますと連絡し、今週中に再採決可能です。',en:"I'll tell the program team we'll handle it; revote possible this week.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'頼む。',en:"Please.",style:'Close.'},
  ]},
  {id:'conv_05467',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep a corporate initiative meeting',lines:[
    {speaker:'yuki_office',jp:'今回の取組、月額予算で運営できるか、要確認。',en:"This initiative — confirm if monthly budget can run it.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'拠出する各部の比率、強行採決にならないよう調整中です。',en:"Adjusting each section's contribution share so it doesn't go to a forced vote.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'担当隊長から、承りますの返信が早く欲しい。',en:"From the team lead, I want a quick 'understood' reply.",style:'Direction.'},
    {speaker:'kenji_office',jp:'本日中に届く見込みです。新棟見学も同時にセットします。',en:"Should arrive by today. New-building tour set up in parallel.",style:'Update.'},
    {speaker:'yuki_office',jp:'よろしく。',en:"Thanks.",style:'Close.'},
  ]},
  {id:'conv_05468',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about corporate initiatives',lines:[
    {speaker:'ren_uni',jp:'御社の社会貢献の取組、教えていただけますか。',en:"Could you tell me about your firm's social-contribution initiatives?",style:'Polite intern.'},
    {speaker:'yuki_office',jp:'はい。毎年の拠出額は、月額換算で公表しています。',en:"Yes. Annual contributions are disclosed in monthly equivalents.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'採決を強行することなく、社員総意で決まっているんですか。',en:"Decided by consensus without forced votes?",style:'Probe.'},
    {speaker:'yuki_office',jp:'はい。現場の隊長からも承りますの確認を取ります。',en:"Yes. We secure 'understood' confirmations from field leaders.",style:'Informative.'},
    {speaker:'ren_uni',jp:'本社棟の見学も、参加できるんですか。',en:"Tours of the headquarters building are also available?",style:'Curious.'},
    {speaker:'yuki_office',jp:'毎月一回、解放しています。',en:"Open once a month.",style:'Close.'},
  ]},
  {id:'conv_05469',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss on initiatives',lines:[
    {speaker:'hiroshi_elder',jp:'取組を強行採決で進めると、必ず後で軋む。',en:"Force a vote on an initiative and friction always follows later.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'承知しております。月額予算も、無理なく続けられる水準で。',en:"Understood. Monthly budgets at a sustainable level too.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'拠出する各社の事情も、隊長が直接聞きに行け。',en:"Each contributing firm's circumstances — have the team-lead hear them in person.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい、棟ごとに状況が違いますので、丁寧に。',en:"Yes. Conditions differ by building, so carefully.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'承りますの一言で、信頼が築ける場面もある。',en:"Sometimes 'I'll see to it' builds trust.",style:'Wise.'},
    {speaker:'hiroshi_boss',jp:'胸に刻みます。',en:"Engraved in my heart.",style:'Close.'},
  ]},
  {id:'conv_05470',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about civic projects',lines:[
    {speaker:'takeda_officer',jp:'本年度の取組、月額予算で運用しています。',en:"This year's initiatives run on a monthly budget.",style:'Calm.'},
    {speaker:'ren_uni',jp:'採決は議会で強行的にならず、円滑に進んだんですか。',en:"In the assembly, no forced vote — it went smoothly?",style:'Polite probe.'},
    {speaker:'takeda_officer',jp:'はい。地元企業も拠出金を出し、警備の隊長と協議しました。',en:"Yes. Local firms also contributed, and we conferred with the security lead.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'庁舎棟の改修、いつから始まりますか。',en:"When does the building renovation begin?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'秋からです。住民の声、市民窓口で承りますの形で受けています。',en:"From autumn. Resident voices are received via the citizen counter as 'understood'.",style:'Informative.'},
    {speaker:'ren_uni',jp:'ありがとうございます。',en:"Thank you.",style:'Close.'},
  ]},

  {id:'conv_05471',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through a philosophy paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、神学と力学の歴史的対立を扱うんですね。',en:"Your paper covers historical clashes between theology and mechanics.",style:'Calm teacher.'},
    {speaker:'ren_uni',jp:'はい。物体の落下に関する論争、最高裁判所のような決着点はない、と論じます。',en:"Yes. On debates over falling objects, I argue there's no supreme-court-like resolution.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'高層建築の発展も、それぞれの探求が支えになった。',en:"High-rise development was supported by each of those pursuits too.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'宗教側からの拒絶反応、章を割いて分析します。',en:"Rejection reactions from the religious side — analyzed in a dedicated chapter.",style:'Plan.'},
    {speaker:'asuka_teacher',jp:'観察対象の個体、データの扱いも丁寧に。',en:"Handle observed specimens and data carefully too.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05472',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager discuss a science-policy column',lines:[
    {speaker:'hiroshi_boss',jp:'この記事、高層ビルの落下事故と最高裁判所の判例の話だな。',en:"This piece — high-rise falling accidents and Supreme Court precedents.",style:'Boss.'},
    {speaker:'kenji_office',jp:'はい。被害者側の主張、企業の拒絶反応、両面から書いてます。',en:"Yes. It covers victim claims and corporate rejection on both sides.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'力学的な原因探求、徹底すべきだろう。',en:"Mechanical cause-investigation should be thorough.",style:'Analytical.'},
    {speaker:'kenji_office',jp:'神学的な議論まで踏み込んでる箇所もあります。',en:"Some parts go as far as theological arguments.",style:'Insightful.'},
    {speaker:'hiroshi_boss',jp:'個体差を考慮した分析が必要だな。',en:"Analysis accounting for individual variation is needed.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05473',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about a high-rise incident',lines:[
    {speaker:'takeda_officer',jp:'高層建築での落下事故、最高裁判所まで持ち込まれた事例があります。',en:"High-rise falling incidents have reached the Supreme Court.",style:'Calm.'},
    {speaker:'ren_uni',jp:'当事者の拒絶反応、激しかったんでしょうか。',en:"Were the rejection reactions from the parties involved fierce?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。力学的な探求と、現場の個体差、両方を考慮します。',en:"Yes. Mechanical inquiry and individual on-site differences — both considered.",style:'Informative.'},
    {speaker:'ren_uni',jp:'神学的な信仰の議論まで絡んできた事案も?',en:"Cases entangled even with theological-faith debates?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'まれですが、ありますね。',en:"Rare, but yes.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'ありがとうございます。',en:"Thank you.",style:'Close.'},
  ]},
  {id:'conv_05474',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired engineer about high-rise design',lines:[
    {speaker:'ren_uni',jp:'高層建築の設計、長年携わってこられたんですよね。',en:"You've long worked on high-rise design.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'うん。落下試験のデータ、個体差を考慮した解析が要だった。',en:"Yes. Falling-test data and analysis accounting for individual variance were key.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'力学的な探求、終わりはあるんですか。',en:"Is mechanical inquiry ever done?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'いや。最高裁判所の判例が出ても、現場は続く。',en:"No. Even after Supreme Court rulings, the field continues.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'規制側の拒絶反応、当時もあったんですか。',en:"Did regulators reject things back then too?",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'ええ。神学的な議論を持ち出す人すらいた。',en:"Yes. Some even brought up theological arguments.",style:'Wise close.'},
  ]},
  {id:'conv_05475',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains body mechanics to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、人体の力学、知れば知るほど興味深いですよ。',en:"Sakura, the more you know body mechanics, the more interesting it gets.",style:'Friendly doctor.'},
    {speaker:'sakura_teen',jp:'例えば、高所からの落下時、骨格はどう動くんですか?',en:"For instance, how does the skeleton move during a fall from height?",style:'Curious teen.'},
    {speaker:'saito_doctor',jp:'個体差はありますが、最高裁判所の医学鑑定書も参考にされます。',en:"There's individual variation; even Supreme Court medical opinions are referenced.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'神学的な議論には立ち入らないんですか。',en:"You don't venture into theological debate?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'臨床では拒絶しています。探求は科学に絞ります。',en:"Clinically we decline. Inquiry is confined to science.",style:'Principled.'},
    {speaker:'sakura_teen',jp:'高層階の患者さん、緊急対応も大変ですよね。',en:"Patients on high floors, emergency response is tough, right?",style:'Engaged.'},
    {speaker:'saito_doctor',jp:'はい、訓練しています。',en:"Yes — we train for it.",style:'Close.'},
  ]},

  {id:'conv_05476',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a beach-and-museum trip',lines:[
    {speaker:'sakura_teen',jp:'夏休み、サーフィン体験行きたい!',en:"Summer break, I want to try surfing!",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。海あがりにシャンプー必須だな。',en:"Sure. Shampoo after the beach is a must.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'帰りに博物館のピラミッド展、寄ろうよ。',en:"On the way back, let's swing by the museum's pyramid exhibit.",style:'Plan.'},
    {speaker:'riku_teen',jp:'食器のお土産も買いたい。古代の名曲、流れてる展示室あるって。',en:"I want a dishware souvenir. There's a room playing ancient classics too.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'歌の唄上手な吟遊詩人がライブやるって聞いた!',en:"Heard a great singer-bard does live performances!",style:'Excited.'},
    {speaker:'riku_teen',jp:'帰り、大家さんに頼んで、染め物体験も予約しようかな。',en:"On the way back, maybe ask the landlord to book a dye-craft experience too.",style:'Plan close.'},
  ]},
  {id:'conv_05477',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends compare creative weekend plans',lines:[
    {speaker:'aoi_barista',jp:'週末、サーフィンを久しぶりに行きたい。',en:"Weekend, I want to surf for the first time in a while.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'素敵!海上がりのシャンプー、いい香りのおすすめあるよ。',en:"Lovely! I have a great-smelling shampoo to recommend for post-surf.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'帰りに陶芸の食器作りもしたいんだ。',en:"On the way back I want to make pottery dishware too.",style:'Plan.'},
    {speaker:'mei_romantic',jp:'染め物体験もあるよ、近くの工房で。',en:"There's dye-craft too, at a nearby studio.",style:'Suggestion.'},
    {speaker:'aoi_barista',jp:'いいね。夜は名曲のライブカフェに行こうか。',en:"Nice. At night let's hit the classics-live cafe.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'大家さんがピラミッド型のグラスでサーブしてくれるんだよ。あの唄、感動するよ。',en:"The owner serves with pyramid-shape glasses. Those songs are moving.",style:'Warm close.'},
  ]},
  {id:'conv_05478',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend plan a craft weekend',lines:[
    {speaker:'sakura_teen',jp:'先輩、週末、染め物と陶芸の食器作り、一緒に行きません?',en:"Senpai, this weekend — dye-craft and pottery dishware, want to go?",style:'Eager.'},
    {speaker:'ren_uni',jp:'いいね。工房の大家さん、知り合いだから紹介できる。',en:"Sure. I know the landlord of the studio — I can intro you.",style:'Helpful.'},
    {speaker:'sakura_teen',jp:'場所の近くにサーフィンスポットもあるんですよ。',en:"Near there's a surfing spot too.",style:'Plan.'},
    {speaker:'ren_uni',jp:'なるほど。海上がりにシャンプー持っていこう。',en:"Got it. Bring shampoo for post-surf.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'夜は名曲ライブハウス、ピラミッド型の照明が綺麗だって聞きました。',en:"At night, a classics live house — pyramid-shape lighting is beautiful.",style:'Excited.'},
    {speaker:'ren_uni',jp:'店主の唄、評判だぞ。',en:"The owner's singing is renowned.",style:'Warm close.'},
  ]},
  {id:'conv_05479',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a creative weekend',lines:[
    {speaker:'ryosuke_dad',jp:'週末、子供たちと陶芸食器、作りに行こうか。',en:"Weekend, let's do pottery dishware with the kids.",style:'Easy dad.'},
    {speaker:'yumiko_mom',jp:'いいね。あと、染め物のワークショップも子供が喜ぶよ。',en:"Nice. And the kids would love the dye workshop too.",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'昼は海でサーフィン体験、お父さんはサポート役で。',en:"Lunchtime, surfing at the beach; I'll support.",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'海上がりのシャンプー、家族分用意するね。',en:"I'll prep family-sized post-surf shampoo.",style:'Practical.'},
    {speaker:'ryosuke_dad',jp:'夜は近所のオーナーがピラミッド型のグラスで出すワインバーへ。',en:"Evening, to the wine bar where the owner serves in pyramid glasses.",style:'Plan.'},
    {speaker:'yumiko_mom',jp:'マスターの名曲ピアノ生演奏、唄もうまいのよね。大家さんとも仲がいい店。',en:"The master's classics piano-live is great, with good singing. He's tight with the landlord.",style:'Warm close.'},
  ]},
  {id:'conv_05480',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista swap weekend plans',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、夏のサーフィン、行く予定あるん?',en:"Aoi-san, any summer surfing planned?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい、来月。海上がりのシャンプー、新ブランド試したくて。',en:"Yes, next month. Want to try a new-brand post-surf shampoo.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'うちの店、新作の陶芸食器入れるで。染め物作家ともコラボや。',en:"Our shop's adding new pottery dishware. Collab with a dye-craft artist too.",style:'Proud Kansai.'},
    {speaker:'aoi_barista',jp:'素敵!週末、名曲ライブカフェも一緒に行きませんか。',en:"Lovely! Want to hit the classics live cafe together this weekend?",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'ええなあ。あの大家さん、ピラミッド型の照明集めとるらしいで。',en:"Sounds great. That landlord apparently collects pyramid-shape lights.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'マスターの唄、是非聴いてほしいです。',en:"I really want you to hear the master's singing.",style:'Warm close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_327 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['聴け','ダラダラ','働け','蹴っ','滑らか','呑み','噛ん','食費']
const B_T = ['オピニオン','図解','読み込み','終電','賃料','昇給','良品','単品']
const C_T = ['引きずっ','報道陣','ピッチャー','鉄則','真っ向','共犯','深まっ','心拍']
const D_T = ['リュック','コスメ','さんま','琵琶湖','ライトアップ','待ち遠しい','リベンジ','新居']

const data = [
  // A
  {id:'conv_06501',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'おすすめの音楽、聴けば、気分上がる。',en:"Recommended music — once heard, mood up.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。お休みの日、家でダラダラ過ごす日も、必要だね。',en:"Yeah. Off-days — lazy at home, needed too.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'今週、働けば働くほど、疲れちゃう。',en:"This week — work, work, exhausted.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'駅で人にぶつかった時、足を蹴っちゃった。',en:"Station bump — kicked foot.",style:'Subdued.'},
    {speaker:'mei_romantic',jp:'お肌、最近、滑らかでうらやましい。',en:"Skin lately smooth, envious.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'夜の呑み会、最近、控えてる。',en:"Night drinks — restraining lately.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'ガムを噛んでいると、集中できる。',en:"Chewing gum — concentrate.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'今月、食費、上手く抑えられた。',en:"This month — food costs, well-restrained.",style:'Warm close.'},
  ]},
  {id:'conv_06502',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お話、もうちょっと、聴けば、寝る!',en:"Mom — story, listen more, then sleep!",style:'Soft child.'},
    {speaker:'yumiko_mom',jp:'うん。お休みの日、ダラダラするのも、いい時間ね。',en:"Yes. Off-days — lazy is fine time.",style:'Tender.'},
    {speaker:'sho_child',jp:'お父さん、今日、たくさん働けば、嬉しいね、明日。',en:"Dad — today lots-work, glad tomorrow.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お友達、サッカーボール、力強く蹴っちゃダメよ、家のは。',en:"Friend's — soccer ball, don't kick home-one strongly.",style:'Direction.'},
    {speaker:'sho_child',jp:'お餅、滑らかな食感、好き。',en:"Mochi smooth texture, like.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お父さん、出張先で、軽く呑みに行ったみたい。',en:"Dad — at trip, light drinks.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お弁当、よく噛んで食べる、忘れないでね、と先生に言われた。',en:"Bento — well-chew, teacher reminded.",style:'Polite.'},
    {speaker:'yumiko_mom',jp:'食費、家計、上手にやりくりするわよ。',en:"Food costs — household, well-juggled.",style:'Warm close.'},
  ]},
  {id:'conv_06503',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'授業中、先生の話、よく聴けば、理解できる。',en:"Class — teacher, listen well, understand.",style:'Earnest teen.'},
    {speaker:'riku_teen',jp:'うん。夏休み、ダラダラ過ごすの、最高。',en:"Yeah. Summer break — lazy is the best.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'バイト、もう少し、働けば、目標金額、貯まる。',en:"Part-time — work more, goal-amount saved.",style:'Animated.'},
    {speaker:'riku_teen',jp:'昨日、サッカーで、ボール、思いきり蹴ったよ。',en:"Yesterday — soccer, ball hard-kicked.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'文化祭、衣装、滑らかな生地、選んだ。',en:"Festival costume — smooth fabric chosen.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'部活帰り、ジュース、ストローでぐっと呑み干した。',en:"Post-club — juice, big gulp.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'ガム、噛んでみる?気分転換に。',en:"Gum — try? Mood-change.",style:'Curious.'},
    {speaker:'riku_teen',jp:'最近、食費、節約してる。',en:"Lately — food costs, saving.",style:'Wry close.'},
  ]},
  {id:'conv_06504',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'昔のラジオ、夜遅くまで聴けば、楽しかった。',en:"Old radio — late-listen, fun.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。引退してから、ダラダラの時間、増えたわね。',en:"Yes. Post-retire — lazy time increased.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'若い頃、もっと働けばよかった、なんて思わない。',en:"Wouldn't think — should've worked more in youth.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'若い頃、サッカーボール、お互い蹴って遊んだわね。',en:"In youth — mutually kicked soccer.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'お前の肌、年取っても、滑らかなところ、残ってる。',en:"Your skin — aged, smooth still remains.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'お祝いの席で、ワイン、軽く呑みましょう。',en:"Celebration — wine light-drink.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'昔のおせんべい、よく噛んで食べたな。',en:"Old senbei — well-chewed.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'年金生活、食費、二人で工夫しているわね。',en:"Pension life — food costs, two-person devising.",style:'Warm close.'},
  ]},
  {id:'conv_06505',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、講演会、行ける時は、聴けば、必ず学びがあるぞ。',en:"Sakura — lectures, when go, listening yields learning.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。試験前、ダラダラする時間、減らします。',en:"Yes. Pre-test — reduce lazy time.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'若いうちに、よく働けば、後で楽になる。',en:"Work hard in youth — later easier.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'はい。試合中、先輩、力強くボール、蹴ってましたね。',en:"Yes. Match — senpai kicked ball strongly.",style:'Animated.'},
    {speaker:'ren_uni',jp:'論文の文章、滑らかに書ける?',en:"Paper writing — smoothly writable?",style:'Curious.'},
    {speaker:'sakura_teen',jp:'はい。打ち上げで、ジュース、呑みすぎちゃった。',en:"Yes. After-party — juice, over-drunk.",style:'Wry.'},
    {speaker:'ren_uni',jp:'食事、よく噛んで食べろよ、健康にいい。',en:"Meals — well-chew, healthy.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'仕送りと食費、両親に、感謝しています。',en:"Allowance & food costs — parents-grateful.",style:'Polite close.'},
  ]},

  // B
  {id:'conv_06506',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'業界紙、オピニオン欄、注視しろ。',en:"Trade press opinion column — watch.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。製品仕様、図解で、わかりやすく示します。',en:"Yes. Product spec — figure-diagram, clarified.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'契約書の読み込み、ダブルチェック、徹底。',en:"Contract-reading — double-check strict.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。終電過ぎる残業、減らしていきます。',en:"Yes. Past-last-train overtime — reducing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'店舗の賃料、再交渉できるか。',en:"Store rent — renegotiable?",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の昇給、計画的に進めます。',en:"Yes. Staff raises — planfully advance.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'良品率、引き上げ、目標だ。',en:"Good-product rate — raise, goal.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。単品売り、戦略的に進めます。',en:"Yes. Single-item sales — strategically advance.",style:'Close.'},
  ]},
  {id:'conv_06507',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss',lines:[
    {speaker:'yuki_office',jp:'業界紙、オピニオン記事、いい着眼点だね。',en:"Trade-press opinion — good focus.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。社内資料、図解中心で、再構成します。',en:"Yes. Internal materials — figure-centric, restructure.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'読み込みの時間、確保しよう。',en:"Read-time — secure.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。終電帰りも、最近、減りました。',en:"Yes. Last-train returns — reduced recently.",style:'Update.'},
    {speaker:'yuki_office',jp:'オフィスの賃料、契約更新が近い。',en:"Office rent — renewal near.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。昇給制度、若手も対象に拡大します。',en:"Yes. Raise system — youth-extended.",style:'Bright.'},
    {speaker:'yuki_office',jp:'良品の検査、抜き打ちで実施しよう。',en:"Good-product check — surprise-conduct.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。単品ごとに利益率、分析中です。',en:"Yes. By-single-item margin — analyzing.",style:'Close.'},
  ]},
  {id:'conv_06508',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、自分のオピニオン、持つことが大事だ。',en:"Ren — having opinion vital.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。図解を使った資料、理解しやすいです。',en:"Yes. Figure-using materials — easy to grasp.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'契約書の読み込み、若手の最初の壁だ。',en:"Contract-reading — youth's first wall.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。終電帰り、まだ慣れません。',en:"Yes. Last-train return — not yet used to.",style:'Wry.'},
    {speaker:'hiroshi_boss',jp:'家賃、賃料、独立への第一歩だ。',en:"Rent — first step to independence.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。昇給を励みに、頑張ります。',en:"Yes. With raises as motive, push.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'品質、良品優先で売れ。',en:"Quality — good-product first sell.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。単品でも価値あるサービス、目指したいです。',en:"Yes. Single-item-value service — aim.",style:'Earnest close.'},
  ]},
  {id:'conv_06509',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on coordination',lines:[
    {speaker:'takeda_officer',jp:'専門家のオピニオン、警察庁、参考にしています。',en:"Expert opinion — NPA-referenced.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。防犯マニュアル、図解化、進めます。',en:"Yes. Crime-prev manual — figure-diagram, advance.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'御社の社員規程、読み込み、不審点ありません。',en:"Your firm regs — read; no suspicions.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。終電後の防犯、警察と連携します。',en:"Yes. Post-last-train crime-prev — police-linked.",style:'Update.'},
    {speaker:'takeda_officer',jp:'地域の賃料相場、犯罪傾向と連動する場面もあります。',en:"Local rent — also crime-trend-linked.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。昇給制度の透明性、警察庁、評価されています。',en:"Yes. Raise transparency — NPA-praised.",style:'Update.'},
    {speaker:'takeda_officer',jp:'良品の流通、安全面、警察も注視しています。',en:"Good-product flow — safety, police-watch.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。単品ごとの追跡、警察システムでも、可能です。',en:"Yes. By-single-item tracking — police-system-possible.",style:'Close.'},
  ]},
  {id:'conv_06510',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'昔のオピニオン誌、よく読んだものだ。',en:"Old opinion mags — often read.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。社員教育、図解を多用してます。',en:"Yes. Staff ed — figure-heavy.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'契約の読み込み、若いうちに、徹底させろ。',en:"Contract-reading — early-rigor.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。終電過ぎる労働、ゼロを目指します。',en:"Yes. Past-last-train work — aim zero.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'若い頃、賃料を節約して、自社ビルを買った。',en:"In youth — saved rent, bought building.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'はい。社員の昇給、信頼の対価です。',en:"Yes. Staff raises — trust's reward.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'良品にこだわるな、顧客にこだわれ。',en:"Don't obsess good-product — obsess customer.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。単品メニューでも、お客様、満足頂きたい。',en:"Yes. Even single-item — customer-satisfaction.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06511',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a case',lines:[
    {speaker:'takeda_officer',jp:'本件、過去の事件を引きずって、捜査続けています。',en:"Case — past-dragged, investigating.",style:'Calm.'},
    {speaker:'ren_uni',jp:'報道陣、現場に集まりますよね。',en:"Press — gather at site.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。野球で言う、ピッチャーのような、捜査主軸、必要です。',en:"Yes. Baseball-pitcher-like, investigation core needed.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'証拠保全の鉄則、何より大事ですよね。',en:"Evidence-preservation rule — most vital.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。容疑者と真っ向から対峙する、瞬間もあります。',en:"Yes. Suspect-face-on confrontation — moments occur.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'共犯の有無、これから明らかになるんですね。',en:"Accomplice — clarified hereafter.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。事件、深まった様相、見せています。',en:"Yes. Case — deepened aspect, shown.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'被害者、心拍、不安定だったそうですね。',en:"Victim — heart-rate, unstable.",style:'Curious close.'},
  ]},
  {id:'conv_06512',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'論文、過去の論争を引きずった部分、書き直しました?',en:"Paper — past-debate-dragged parts, revised?",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。海外報道陣の取材、章末で扱いました。',en:"Yes. Overseas press coverage — chapter-end.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'比喩として、ピッチャーの判断、面白い視点でしたね。',en:"Metaphor — pitcher-judgment, fresh.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。学術の鉄則、ちゃんと守りました。',en:"Yes. Academic rule — properly followed.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'真っ向から、通説に挑む姿勢、評価できます。',en:"Face-on conventional-wisdom challenge — praised.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。協力者を共犯と誤解されないよう、注釈、慎重に。',en:"Yes. Cooperators — not misread as accomplices, careful annotation.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'議論、深まった感じ、確認しました。',en:"Debate — deepened, verified.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'医学データ、心拍指標、付録に添えました。',en:"Medical data — heart-rate indicators, appended.",style:'Earnest close.'},
  ]},
  {id:'conv_06513',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、過去の事例を引きずって、診療スタイル、慎重です。',en:"Ren — past-dragged, careful clinical style.",style:'Calm.'},
    {speaker:'ren_uni',jp:'最近、報道陣、医療現場、関心高いですね。',en:"Lately — press, medical-field, high interest.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。野球で言うピッチャー、医療チームの主軸的存在、必要です。',en:"Yes. Baseball-pitcher-equiv core, needed.",style:'Patient.'},
    {speaker:'ren_uni',jp:'治療の鉄則、患者ファースト、ですね。',en:"Treatment-rule — patient-first.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。患者と真っ向から向き合う、それが基本。',en:"Yes. Patient face-on confrontation — basic.",style:'Informative.'},
    {speaker:'ren_uni',jp:'感染症の共犯的要因、生活習慣、深堀りされていますね。',en:"Infection-accomplice factors — lifestyle, dug deep.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者の悩み、深まった時、寄り添うのが医師の役目。',en:"Yes. Patient-deepened worry — accompany.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'心拍計、最新型、研究室にもありますね。',en:"Heart-rate monitor — latest in lab too.",style:'Curious close.'},
  ]},
  {id:'conv_06514',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a corporate crisis',lines:[
    {speaker:'hiroshi_boss',jp:'過去の失敗、引きずらず、進めろ。',en:"Past failures — undragged, advance.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社外、報道陣の対応、慎重に行います。',en:"Yes. External press — careful handling.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'チームのピッチャー的存在、誰だ?',en:"Team-pitcher-equiv — who?",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。創業時からの鉄則、守ります。',en:"Yes. Founding-rule — kept.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'競合に真っ向から挑め。',en:"Rival face-on challenge.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。共犯的に動いている内部関係者、警戒します。',en:"Yes. Accomplice-acting internal parties — vigilant.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'業界の悩み、深まった印象だな。',en:"Industry worry — deepened impression.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。発表前、心拍、慎重に整える。',en:"Yes. Pre-pres heart-rate — careful regulate.",style:'Close.'},
  ]},
  {id:'conv_06515',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、研究、過去を引きずらず、新視点、入れましたね。',en:"Sakura — research, un-dragged past, fresh view.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。発表会、報道陣が来る、と聞いて、緊張します。',en:"Yes. Pres — press coming, nervous.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'発表の中心、ピッチャー的役割、自覚していますね。',en:"Pres-center pitcher-equiv role — self-aware.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。論理の鉄則、守って書きました。',en:"Yes. Logic-rule — kept and wrote.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'対立陣営と真っ向から、議論、できるようになりましたね。',en:"Opposite-camp face-on debate — now able.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'メディアと共犯にならない、独立した視点、保ちます。',en:"Not media-accomplice — independent view kept.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'考察、深まったところ、評価できます。',en:"Discussion — deepened, praised.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'発表時、心拍、落ち着かせる練習、しています。',en:"Pres — heart-rate-calming practice.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06516',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'旅、リュック、大きめサイズ、買った。',en:"Trip — backpack, bigger size, bought.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。コスメ、限定品、欲しい!',en:"Yeah. Cosmetics — limited, want!",style:'Animated.'},
    {speaker:'mei_romantic',jp:'秋、さんま、食べたいよね。',en:"Autumn — sanma, wanna eat.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'琵琶湖、いつか、ドライブで行きたい。',en:"Biwako — someday drive.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'冬は、ライトアップ、街、きれいだよね。',en:"Winter — lit-up city, lovely.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'クリスマス、待ち遠しい!',en:"Christmas — awaited!",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'前回のテストで負けたから、リベンジ目指す。',en:"Last test lost — revenge aim.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'引っ越して、新居、片付け中。',en:"Moved — new home, organizing.",style:'Warm close.'},
  ]},
  {id:'conv_06517',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、新しいリュック、買って!',en:"Mom — new backpack, buy!",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。私、コスメ、新作試してみるね。',en:"Yes. Me — cosmetics, new try.",style:'Tender.'},
    {speaker:'sho_child',jp:'今夜、さんま、焼いて!',en:"Tonight — sanma, grill!",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'家族旅行、琵琶湖、計画してたね。',en:"Family trip — Biwako, planning.",style:'Warm.'},
    {speaker:'sho_child',jp:'夜のお城、ライトアップ、見たい!',en:"Castle-night, lit-up — wanna see!",style:'Awe.'},
    {speaker:'yumiko_mom',jp:'お父さんの誕生日、待ち遠しいわね。',en:"Dad's birthday — awaited.",style:'Soft.'},
    {speaker:'sho_child',jp:'今度の試合、リベンジするよ!',en:"Next match — revenge!",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'おばあちゃんの新居、見に行こうね。',en:"Granny's new home — visit.",style:'Warm close.'},
  ]},
  {id:'conv_06518',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'修学旅行、リュック、軽量タイプにしたいな。',en:"School trip — backpack, light type wanted.",style:'Casual teen.'},
    {speaker:'riku_teen',jp:'うん。妹、コスメ買うようになったよ。',en:"Yeah. Sis — cosmetic-buying now.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'秋、給食のさんま、楽しみ。',en:"Autumn — lunch sanma, looking forward.",style:'Bright.'},
    {speaker:'riku_teen',jp:'地理で、琵琶湖、習ったよ。',en:"Geography — Biwako learned.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'クリスマス、駅前のライトアップ、綺麗だよね。',en:"Christmas — station-front lit-up, lovely.",style:'Animated.'},
    {speaker:'riku_teen',jp:'冬休み、待ち遠しいよな。',en:"Winter break — awaited.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'前回の模試、リベンジ、絶対する!',en:"Last mock — revenge, must!",style:'Animated.'},
    {speaker:'riku_teen',jp:'いとこ、新居、招待してくれた。',en:"Cousin — new-home invited.",style:'Cheerful close.'},
  ]},
  {id:'conv_06519',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、登山リュック、背負って、よく出かけた。',en:"In youth — mountain backpack often.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。当時、コスメ、シンプルだったわね。',en:"Yes. Then — cosmetics simple.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'秋のさんま、焼き魚、母が得意だった。',en:"Autumn sanma — grilled, mom good at.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'新婚旅行、琵琶湖、二人で行ったわね。',en:"Honeymoon — Biwako together.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'夜のお寺、ライトアップ、最近、流行り。',en:"Temple night lit-up — lately trendy.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'孫の七五三、待ち遠しいわ。',en:"Grandkid Shichigosan — awaited.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'去年逃したお花見、来年リベンジしよう。',en:"Missed-last-year hanami — next-year revenge.",style:'Animated.'},
    {speaker:'sachiko_grandma',jp:'息子の新居、可愛いリビング、覚えてる?',en:"Son's new home — cute living, remember?",style:'Warm close.'},
  ]},
  {id:'conv_06520',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、テーマパーク連動企画、リュック特典、つけよか。',en:"Aoi-san — theme-park collab, backpack perk?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。コスメブランドとも、コラボ進めましょう。',en:"Yes. Cosmetic-brand collab — advance.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'秋メニュー、さんま塩焼き、定番にしよ。',en:"Autumn menu — sanma salt-grill, staple.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'琵琶湖近くのリゾートと、提携、興味あります。',en:"Biwako-near resort — collab interest.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'冬の店舗、ライトアップ、ええなあ。',en:"Winter store lit-up — nice.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'年末セール、待ち遠しい、お客様、多いです。',en:"Year-end sale awaited — many guests.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'去年売り切れた商品、リベンジで、増産しよ。',en:"Last-year sold-out — revenge mass-produce.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'新居祝いのギフトセット、強化します。',en:"New-home gift sets — strengthen.",style:'Warm close.'},
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

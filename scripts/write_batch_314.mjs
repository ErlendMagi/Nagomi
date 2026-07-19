import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_314 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['応対','兆候','日にち','一軒','足音','数え切れ','無性に','レシート']
const B_T = ['リポート','フェーズ','読み取り','近づける','停め','遣っ','戻さ','増えれ']
const C_T = ['未解決','裏切る','見せかけ','煽る','争わ','退け','減らさ','鈍い']
const D_T = ['壁画','シビア','カーナビ','ハッピーエンド','ツイ','奏で','豪雨','南国']

const data = [
  // A
  {id:'conv_06241',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'店員の応対、丁寧だったね、昨日。',en:"Staff response — careful yesterday.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。風邪の兆候、最近、感じてた?',en:"Yeah. Cold signs — feeling lately?",style:'Concerned.'},
    {speaker:'mei_romantic',jp:'結婚式の日にち、もう決まったよ。',en:"Wedding date — decided.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'夜の街、一軒目で、もう満腹。',en:"Night out — first place, already full.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'隣の部屋から、足音、聞こえる。',en:"Next-room footsteps — heard.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'今夜のメッセージ、数え切れないほど来た。',en:"Tonight's messages — countless arrived.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'無性に甘い物、食べたい気分。',en:"Inexplicably want sweets.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'レシート、家計簿用に取っといて。',en:"Receipt — keep for budget book.",style:'Practical close.'},
  ]},
  {id:'conv_06242',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、電話の応対、上手だね。',en:"Mom — phone response, skillful.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'ふふ、ありがとう。最近、何か病気の兆候、感じてない?',en:"Hehe, thanks. Any illness signs lately?",style:'Tender.'},
    {speaker:'sho_child',jp:'うん!運動会の日にち、楽しみ。',en:"Yeah! Sports-day date, exciting.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'近所の一軒家、新しく建ったね。',en:"Local single-family home — newly built.",style:'Soft.'},
    {speaker:'sho_child',jp:'パパの足音、玄関で聞こえた。',en:"Dad's footsteps — heard at entrance.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お友達からのお手紙、数え切れないくらい届いたね。',en:"Letters from friends — countless arrived.",style:'Warm.'},
    {speaker:'sho_child',jp:'無性に外で走り回りたい!',en:"Inexplicably want to run outside!",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'お小遣い用、レシート、大事に取って。',en:"Allowance — receipts, keep carefully.",style:'Warm close.'},
  ]},
  {id:'conv_06243',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'駅員さんの応対、いつも丁寧だね。',en:"Station-staff response — always careful.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。試験前、緊張の兆候、自分でわかる。',en:"Yeah. Pre-test — tension signs, self-aware.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'文化祭の日にち、決まったみたい。',en:"Festival date — decided.",style:'Animated.'},
    {speaker:'riku_teen',jp:'駅前の一軒の屋台、美味しいんだ。',en:"Station-front single stall — yummy.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'廊下の足音、誰のか、わかるよね。',en:"Hall footsteps — recognizable.",style:'Wry.'},
    {speaker:'riku_teen',jp:'宿題、数え切れない量で、大変。',en:"Homework — countless, tough.",style:'Subdued.'},
    {speaker:'sakura_teen',jp:'無性にラーメン、食べたい。',en:"Inexplicably want ramen.",style:'Animated.'},
    {speaker:'riku_teen',jp:'コンビニのレシート、何故か取っちゃう。',en:"Conbini receipts — somehow I keep.",style:'Wry close.'},
  ]},
  {id:'conv_06244',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'昔の電話、応対の言葉遣い、丁寧だったな。',en:"Old phone — response language was careful.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。老化の兆候、お互い、感じる時、増えてきた。',en:"Yes. Aging signs — mutually felt more.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'記念日の日にち、忘れずに。',en:"Anniversary date — don't forget.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'近所の一軒、改築するみたいよ。',en:"A local single home — being remodeled.",style:'Casual.'},
    {speaker:'hiroshi_elder',jp:'孫の足音、玄関から響くのが楽しみ。',en:"Grandkid's footsteps — entrance echo, joy.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'昔の写真、数え切れないほど整理が要るわ。',en:"Old photos — countless; need to organize.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'無性に温泉、行きたい気分だ。',en:"Inexplicably want onsen.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'レシート、家計の整理に必要よ。',en:"Receipts — needed for budget.",style:'Warm close.'},
  ]},
  {id:'conv_06245',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、研究室の応対、教授に学ぼう。',en:"Sakura — lab response, learn from prof.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。風邪の兆候、出ているので、無理しないようにします。',en:"Yes. Cold signs — won't push.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'発表の日にち、来週末だ。',en:"Presentation date — next weekend.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'駅前の一軒のカフェ、勉強場所に活用してます。',en:"Station-front single cafe — use as study spot.",style:'Bright.'},
    {speaker:'ren_uni',jp:'廊下の足音、教授のリズム、覚えた?',en:"Hall footsteps — prof's rhythm memorized?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'はい。問題集、数え切れないほど解きました。',en:"Yes. Workbooks — countless solved.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'発表後、無性に走り出したい気持ちになる。',en:"Post-pres — inexplicably want to bolt.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'はい。会計のレシート、ファイルしておきます。',en:"Yes. Accounting receipts — file.",style:'Bright close.'},
  ]},

  // B
  {id:'conv_06246',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'週次リポート、明日午前中に。',en:"Weekly report — by tomorrow AM.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。プロジェクト、第二フェーズ突入です。',en:"Yes. Project — second phase entered.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'数字の読み取り、丁寧にしろ。',en:"Number reading — careful.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。顧客に近づける広告手法、検討中です。',en:"Yes. Customer-approaching ad methods — under review.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社員、配送遅延を停めないよう、急がせろ。',en:"Don't let staff cause delivery stoppage; rush.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。判断、若手にも遣ってもらいます。',en:"Yes. Decisions — also delegate to youth.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'過去案件、白紙に戻さず、修正、進めろ。',en:"Past cases — don't reset; revise.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。事業が増えれば、人員も増やします。',en:"Yes. If business grows — add staff too.",style:'Close.'},
  ]},
  {id:'conv_06247',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss a project',lines:[
    {speaker:'yuki_office',jp:'今日のリポート、夕方までに提出ね。',en:"Today's report — by evening.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。プロジェクト、第三フェーズ準備中です。',en:"Yes. Project — phase-3 prep.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'データの読み取り、客観性、保とう。',en:"Data reading — keep objective.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。顧客との距離、近づける方策、模索しています。',en:"Yes. Customer-approaching tactics — exploring.",style:'Update.'},
    {speaker:'yuki_office',jp:'配送、駅で停めるトラック、計画的に。',en:"Delivery — station-stopping trucks, planful.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新人に遣ってもらう業務、増やします。',en:"Yes. New-hire delegate-tasks — increase.",style:'Bright.'},
    {speaker:'yuki_office',jp:'昨日の指示、白紙に戻さず、活かして。',en:"Yesterday's instructions — don't reset; use.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。受注、増えれば、ボーナスも考慮します。',en:"Yes. Orders rise — bonuses considered.",style:'Close.'},
  ]},
  {id:'conv_06248',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、毎日のリポート、必ず書け。',en:"Ren — daily reports, write always.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。プロジェクトのフェーズ、よく理解できました。',en:"Yes. Project phases — well understood.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'データの読み取り、複数視点で。',en:"Data reading — multiple viewpoints.",style:'Direction.'},
    {speaker:'ren_uni',jp:'顧客に近づける営業手法、勉強したいです。',en:"Customer-approaching sales — want to learn.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'駐車場、車を停めるルール、覚えろ。',en:"Lot — car-stopping rules, learn.",style:'Direction.'},
    {speaker:'ren_uni',jp:'若手向けに、業務、遣ってもらえる機会、ありますか。',en:"For youth — delegate opportunities exist?",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'うん。失敗、白紙に戻さず、活かせ。',en:"Yes. Failures — don't reset; leverage.",style:'Direction.'},
    {speaker:'ren_uni',jp:'仕事が増えれば、自然に成長しますね。',en:"As work grows — natural growth.",style:'Earnest close.'},
  ]},
  {id:'conv_06249',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on case-handling',lines:[
    {speaker:'takeda_officer',jp:'警察庁リポート、共有させてください。',en:"NPA report — let me share.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。我々のフェーズ管理、警察と連動させます。',en:"Yes. Our phase-mgmt — link with police.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'証拠の読み取り、慎重に。',en:"Evidence reading — careful.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。容疑者に近づけるルート、限定されています。',en:"Yes. Suspect-approach routes — limited.",style:'Update.'},
    {speaker:'takeda_officer',jp:'車両、現場の入口で停めるよう、お願いします。',en:"Vehicles — stop at site entrance.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。広報、警察と社員、遣り取りを進めます。',en:"Yes. PR — police-staff dispatch advances.",style:'Update.'},
    {speaker:'takeda_officer',jp:'証拠、白紙に戻さず、追跡を。',en:"Evidence — don't reset; track.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。事案、増えれば、対策も強化します。',en:"Yes. Cases rise — countermeasures strengthen.",style:'Close.'},
  ]},
  {id:'conv_06250',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'年次リポート、若い頃から手書きで書いた。',en:"Annual reports — handwritten in youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。経営、フェーズで区切って、進めています。',en:"Yes. Mgmt — phase-divided progress.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'人の心の読み取り、長年磨いてきた。',en:"Reading hearts — honed for years.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'顧客に近づける、独自のスタイル、続けます。',en:"Customer-approaching unique style — continue.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'運転、駐車場で停めるのも、慎重に。',en:"Driving — careful parking.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'若手に、業務を遣ってもらう文化、根付かせています。',en:"Delegating to youth — culturally rooted.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'失敗、白紙に戻さず、伝統に組み込め。',en:"Failures — don't reset; embed in tradition.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'業績、増えれば、社員に還元します。',en:"As performance rises — give back to staff.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06251',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about an unsolved case',lines:[
    {speaker:'takeda_officer',jp:'本件、未解決のまま、20年経ちました。',en:"Case — unsolved for 20 years.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者を裏切る形になった事案、残っていますか。',en:"Victim-betrayal-form cases — remain?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。表面上は無関係に見せかける手口、巧妙でした。',en:"Yes. Surface-disguised MO — cunning.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'メディアが煽る報道、二次被害も生みます。',en:"Media-inciting coverage — also secondary harm.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'関係者と争わずに、対話で解決を目指します。',en:"Without conflict — dialogue solutions.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'退ける証拠も、書類、慎重に扱いますね。',en:"Refuted-evidence docs — careful too.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。冤罪を減らさず、リスクを高めない運用です。',en:"Yes. Not reducing wrongful charges — risk-not-raising ops.",style:'Firm.'},
    {speaker:'ren_uni',jp:'感覚が鈍い人、捜査対象から外れがちですよね。',en:"Dulled-sense people — slip from suspect lists.",style:'Reflective close.'},
  ]},
  {id:'conv_06252',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses a paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、未解決の社会問題、丁寧に扱いましたね。',en:"Paper — unsolved social issues, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。信頼を裏切る組織の構造、論じました。',en:"Yes. Trust-betraying org structures discussed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'透明性を見せかける広報、批判の対象ですね。',en:"Transparency-disguised PR — criticized.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'メディアが世論を煽る役割、別章にしました。',en:"Media inciting opinion — chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'対立陣営と争わずに、議論できる場、必要ですね。',en:"Non-conflicting debate forums needed.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'過去の主張を退ける論文、引用、丁寧に。',en:"Old-claim-refuting papers — careful citation.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'格差を減らさず維持する政策、批判的視点で扱いましたね。',en:"Gap-keeping policies — critical view.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'感受性が鈍い研究者、見直しが必要ですね。',en:"Dulled-sensitivity researchers — review needed.",style:'Earnest close.'},
  ]},
  {id:'conv_06253',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical issues',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、未解決の難病、研究は続けています。',en:"Ren — unsolved rare diseases, research continues.",style:'Calm.'},
    {speaker:'ren_uni',jp:'治療効果を裏切る症例、悲しいですね。',en:"Treatment-betraying cases — sad.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。改善を見せかける薬、患者のリスクになります。',en:"Yes. Improvement-disguised drugs — patient risk.",style:'Patient.'},
    {speaker:'ren_uni',jp:'ネットで不安を煽る情報、医療現場でも対応していますね。',en:"Anxiety-inciting net info — medicine also responds.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。患者と争わずに、納得を得る対話、心がけます。',en:"Yes. Without conflict — consensus-aiming dialogue.",style:'Patient.'},
    {speaker:'ren_uni',jp:'代替療法、効果を退ける論文、多いんですよね。',en:"Alternative therapies — refuting papers, many.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。リスクを減らさず、副作用、注視します。',en:"Yes. Not reducing risks — side-effects monitored.",style:'Informative.'},
    {speaker:'ren_uni',jp:'感覚が鈍い高齢者、特に配慮、必要ですね。',en:"Dulled-sense elderly — extra care needed.",style:'Reflective close.'},
  ]},
  {id:'conv_06254',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a corporate-PR challenge',lines:[
    {speaker:'hiroshi_boss',jp:'業界、未解決の課題、優先的に取り組め。',en:"Industry — unsolved priority issues, tackle.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。顧客の信頼、裏切るような対応、避けます。',en:"Yes. Customer-trust-betraying responses — avoid.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'透明性を見せかける広報、ダメだ。',en:"Transparency-disguised PR — no.",style:'Direction.'},
    {speaker:'kenji_office',jp:'メディアが煽る場面、冷静に対応します。',en:"Media-inciting moments — calm response.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'競合と争わずに、独自路線で。',en:"Without conflicting rivals — own path.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。批判を退ける論調、慎重に発信します。',en:"Yes. Criticism-rebutting tone — careful broadcast.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'コスト、減らさずに、品質、保て。',en:"Costs — not-reducing; maintain quality.",style:'Direction.'},
    {speaker:'kenji_office',jp:'反応が鈍い客層、丁寧にアプローチします。',en:"Dulled-response clientele — careful approach.",style:'Close.'},
  ]},
  {id:'conv_06255',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through current events',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、現代社会の未解決問題、興味ありますね。',en:"Sakura — modern unsolved issues, interest.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。約束を裏切る政治家、報道で見ました。',en:"Yes. Promise-betraying politicians — seen in news.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'見せかけの政策、批判する視点、章にしましたか。',en:"Disguised policies — critical view, chapter?",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。SNSが煽る言論、難しい問題です。',en:"Yes. SNS-inciting speech — hard problem.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'議論で争わずに対話できる若者、増えるといいですね。',en:"Non-conflicting dialogue-capable youth — increasing welcome.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'誤情報を退ける力、メディアリテラシーですよね。',en:"Misinfo-rebutting power — media literacy.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'貧困を減らさず放置、社会問題ですね。',en:"Poverty-not-reducing neglect — social issue.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'感性が鈍くなる前に、若いうちに学びたいです。',en:"Before senses dull — wanna learn young.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06256',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher discusses culture',lines:[
    {speaker:'asuka_teacher',jp:'論文、古代壁画と現代アート、対比、興味深いですね。',en:"Paper — ancient murals vs. modern art, intriguing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。シビアな評価、章末で添えました。',en:"Yes. Severe critique — appended at end.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'移動中の取材、カーナビ、活躍しましたか。',en:"In-transit reporting — car-nav helpful?",style:'Curious.'},
    {speaker:'ren_uni',jp:'はい。物語、ハッピーエンドで終わる伝統、別章にしました。',en:"Yes. Happy-end tradition — separate chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'SNSのツイ、研究のヒントになりますね。',en:"SNS tweets — research hints.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'演奏家が奏でる現代曲、論文の付録で紹介します。',en:"Modern works performers play — appendix-introduced.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'豪雨後の遺跡保全、緊急テーマでもあります。',en:"Post-downpour site preservation — urgent theme too.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'南国の文化的多様性、最終章でまとめました。',en:"Tropical cultural diversity — final chapter.",style:'Earnest close.'},
  ]},
  {id:'conv_06257',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'昨日の美術館、壁画の特別展、すごかった。',en:"Yesterday's museum — mural special show, amazing.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'うん。評論家のコメント、シビアだったね。',en:"Yeah. Critic comments — severe.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'帰り、カーナビ、変なルート案内したよ。',en:"On the way back — car-nav weird route.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'観た映画、ハッピーエンドで、気分よかった。',en:"Watched movie — happy end, felt good.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'感想、SNSでツイしようかな。',en:"Thoughts — tweet on SNS?",style:'Curious.'},
    {speaker:'aoi_barista',jp:'ピアノが奏でるメロディー、心に残ったよね。',en:"Piano-played melody — lingered.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'帰り道、豪雨にあたって、ずぶ濡れに。',en:"Way back — downpour, soaked.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'夏休み、南国旅行、決行しよう。',en:"Summer break — tropical trip, go.",style:'Warm close.'},
  ]},
  {id:'conv_06258',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'学校の壁画、新しく描かれたよ。',en:"School mural — newly painted.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。先生の採点、シビアだなあ。',en:"Yeah. Teacher's grading — severe.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'家のカーナビ、最近、調子悪い。',en:"Home car-nav — lately weird.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'試験、ハッピーエンドで終わる結果に、なりますように。',en:"Exam — may end happy.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'クラスのグループ、ツイ送り合う仲よね。',en:"Class group — tweet-exchanging vibe.",style:'Casual.'},
    {speaker:'riku_teen',jp:'吹奏楽部、奏でるベートーヴェン、感動した。',en:"Band's Beethoven performance — moving.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'昨日の豪雨で、遠足、延期になった。',en:"Yesterday's downpour — excursion postponed.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'修学旅行、南国行きたいって、皆言ってる。',en:"School trip — everyone wants tropics.",style:'Cheerful close.'},
  ]},
  {id:'conv_06259',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、洋館の壁画、見て感動した。',en:"In youth — Western-style mansion mural moved me.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。批評家のシビアな評価、当時、衝撃だったわね。',en:"Yes. Critics' severe assessments — shocking back then.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'今は、カーナビ無しじゃ、運転できないな。',en:"Now — can't drive without car-nav.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'昔の映画は、ハッピーエンドが、定番だったわ。',en:"Old films — happy ends were standard.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'孫がSNSで、ツイしてくれた、お祝いメッセージ。',en:"Grandkid tweeted a celebratory message.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'家の小さなピアノ、お前が奏でる時間、好きよ。',en:"Home piano — when you play, I love.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昨夜の豪雨、雨戸閉めて、お互い無事でよかった。',en:"Last night's downpour — shutters closed, both safe.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'いつか、南国の島で過ごしたいわね。',en:"Someday — tropical-island stay.",style:'Warm close.'},
  ]},
  {id:'conv_06260',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a theme event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、店内の壁画、依頼してみよか。',en:"Aoi-san — order an in-store mural?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。料金、シビアな業界相場、確認します。',en:"Yes. Cost — severe industry rates, verify.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'店頭にカーナビで来店するお客様、案内図、置こか。',en:"Car-nav arrivals — map at storefront.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'お客様にハッピーエンドのストーリーで、帰っていただきたい。',en:"Want guests to leave with happy-end stories.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'SNSでツイしてくれる方、増やしたいな。',en:"SNS-tweeting fans — want more.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'生演奏で奏でるピアノBGM、夜営業に、ええですね。',en:"Live piano BGM — fits night ops.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'豪雨でも、屋内営業、強化しよ。',en:"In downpours — strengthen indoor ops.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'南国フェア、夏のメインに据えましょう。',en:"Tropical fair — summer's main.",style:'Warm close.'},
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

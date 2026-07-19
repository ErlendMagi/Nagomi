import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_333 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['お洒落','そんなふうに','もらえれ','言えよ','これだけ','その頃','スポンジ','ゼリー']
const B_T = ['備蓄','修繕','調印','共催','譲る','過労','堅実','組み込ん']
const C_T = ['凶悪','両論','貫い','逃走','生き延び','芽生え','すれ違い','院生']
const D_T = ['夜明け','粘土','鴨','ピエロ','根っこ','裾','根気','生意気']

const data = [
  // A
  {id:'conv_06621',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、今日のメイク、すごくお洒落だね。',en:"Aoi — today's makeup, very stylish.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。そんなふうに言ってくれて、嬉しい、メイちゃん。',en:"Yeah. That-way said, happy, Mei.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'時間、もらえれば、もっと話したいことあるの。',en:"Time — if-gettable, more want-talk.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'彼に、本音、ちゃんと言えよって、彼女の友達に言われた。',en:"To him — true-feel, properly tell — friend told.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'うん。これだけ気持ち、伝えるの、勇気いるよね。',en:"Yeah. This-much feeling — conveying, courage needs.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'その頃、私たち、まだ高校生だったよね、出会いの時。',en:"That time — still high-schoolers, meeting.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'ケーキのスポンジ、ふわふわで、美味しいね、ここ。',en:"Cake sponge — fluffy, tasty, here.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'夏限定のゼリー、また、メニューに、戻したよ。',en:"Summer-limited jelly — back to menu.",style:'Cheerful close.'},
  ]},
  {id:'conv_06622',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、新しい服、お洒落で、ぼく、嬉しい!',en:"Mom — new clothes stylish, me happy!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'うん。そんなふうに笑顔だと、ママも嬉しいわ。',en:"Yes. That-way smiling, Mom happy too.",style:'Warm.'},
    {speaker:'sho_child',jp:'お小遣い、もらえれば、玩具、買えるかな?',en:"Allowance — if-gettable, toy buy-able?",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お友達に、ありがとう、ちゃんと言えよ、翔くん。',en:"Friend — thank-you, properly say, Sho.",style:'Direction.'},
    {speaker:'sho_child',jp:'これだけ宿題、終わったよ、ぼく、頑張ったよ。',en:"This-much homework — done, me hardworking.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'その頃、お父さんも、よく頑張ってたわよ、子供の頃。',en:"That time — Dad too, hard-working, in childhood.",style:'Soft.'},
    {speaker:'sho_child',jp:'ふわふわのスポンジケーキ、お祝いに、食べたい!',en:"Fluffy sponge cake — celebrate-eat!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'うん。デザートのゼリー、冷蔵庫に、入ってるよ。',en:"Yes. Dessert jelly — fridge-in.",style:'Warm close.'},
  ]},
  {id:'conv_06623',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat after school',lines:[
    {speaker:'sakura_teen',jp:'リク、今日、お前の髪、お洒落だね、新しい?',en:"Riku — today, hair stylish, new?",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。そんなふうに褒められると、照れるな、桜。',en:"Yeah. That-way praised, blush, Sakura.",style:'Bashful.'},
    {speaker:'sakura_teen',jp:'放課後、時間、もらえれば、勉強教えてほしいの。',en:"After-school — time-gettable, want study-taught.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'告白、勇気出して、言えよ、後悔しないように。',en:"Confession — courage, say, don't regret.",style:'Mature.'},
    {speaker:'sakura_teen',jp:'これだけ頑張ってる私、見てて欲しいだけなの。',en:"This-much-trying me — want just see.",style:'Vulnerable.'},
    {speaker:'riku_teen',jp:'その頃、俺たち、隣のクラスだったよな、覚えてる?',en:"That time — next-class us, remember?",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'コンビニのスポンジケーキ、結構、美味しいよ、最近の。',en:"Conv-store sponge — quite tasty, recent.",style:'Animated.'},
    {speaker:'riku_teen',jp:'夏祭りのゼリー、毎年、楽しみだな。',en:"Fest jelly — yearly fun.",style:'Cheerful close.'},
  ]},
  {id:'conv_06624',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃の私、お洒落だったかな、最近、写真見て思うよ。',en:"Youth me — stylish?, recent photo-see-thinking.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。そんなふうに、自慢げな顔、よくしてたわよ、あなた。',en:"Yes. That-way, proud-face, often did, dear.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'子供に時間、もらえれば、孫と過ごしたいな、もっと。',en:"Kids' time — gettable, want-more grandkid-time.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'息子に、本音、ちゃんと言えよ、と思ってるの、私も。',en:"To son — true-feel, properly say, me too.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'これだけ長い間、二人でいられて、ありがたい。',en:"This-much-long together — grateful.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'その頃、お父さんは、まだ農家を手伝っていたわね。',en:"That time — Dad still-farm-helped.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'昔のスポンジケーキ、ふわふわだったな、母のは。',en:"Old sponge — fluffy, Mom's.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'夏に、コーヒーゼリー、よく食べたわね、二人で。',en:"Summer — coffee jelly often-eaten together.",style:'Warm close.'},
  ]},
  {id:'conv_06625',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','mei_romantic'],targets:A_T,scenario:'A uni student and friend chat',lines:[
    {speaker:'mei_romantic',jp:'蓮さん、今日の服、お洒落ですね、デート?',en:"Ren — today's clothes stylish, date?",style:'Curious.'},
    {speaker:'ren_uni',jp:'うん。そんなふうに見えるかな、似合ってたら、嬉しいけど。',en:"Yes. That-way visible?, if-suits, happy.",style:'Bashful.'},
    {speaker:'mei_romantic',jp:'論文、来週まで時間もらえれば、私も読みますよ。',en:"Paper — week-time-gettable, also read.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'うん。研究、辛い時は、ちゃんと言えよ、と先輩が言ってくれる。',en:"Yes. Research hard — properly say, senpai tells.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'これだけ努力されてる蓮さん、尊敬します。',en:"This-much-effort Ren — respect.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'その頃、僕、まだ研究テーマを決めかねていたよ。',en:"That time — still theme-undecided.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'学食のスポンジケーキ、安くて、結構好きですよ。',en:"Caf sponge — cheap, quite like.",style:'Bright.'},
    {speaker:'ren_uni',jp:'夏休みのコーヒーゼリー、研究室で、よく食べた。',en:"Summer coffee jelly — lab-often-ate.",style:'Soft close.'},
  ]},

  // B
  {id:'conv_06626',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'非常用の備蓄、各事業所、点検しろ。',en:"Emergency stockpile — per branch, inspect.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。本社ビル、修繕、来月から始まります。',en:"Yes. HQ — repair, next month start.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'契約、調印は、今週金曜の予定だな。',en:"Contract — signing Friday plan.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界団体と、共催イベント、企画中です。',en:"Yes. Industry-assoc — co-host event, planning.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'今回の案件、若手に譲る判断、する。',en:"This matter — yield-to-youth, decide.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。過労、社員の中で、注意喚起しております。',en:"Yes. Overwork — among staff, alerting.",style:'Cooperative.'},
    {speaker:'hiroshi_boss',jp:'堅実な経営方針、社内、徹底しろ。',en:"Steady mgmt — internally thorough.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新システムを組み込んだ運用、来期、開始します。',en:"Yes. Embedded-new-system ops — next term, start.",style:'Close.'},
  ]},
  {id:'conv_06627',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'災害用の備蓄、本部、十分か、確認した?',en:"Disaster stockpile — HQ, sufficient, checked?",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。会議室の修繕、業者と、調整しています。',en:"Yes. Meet-room repair — vendor-coordinating.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'パートナー企業との調印、今期中に、済ませたいね。',en:"Partner-corp signing — this term, want-done.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。市役所と共催で、地域イベント、開きます。',en:"Yes. City-hall co-host — community event, open.",style:'Bright.'},
    {speaker:'yuki_office',jp:'譲る場面、譲らない場面、見極めが、難しい。',en:"Yield-spot vs hold-spot — discern, hard.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。社員の過労を防ぐ仕組み、強化中です。',en:"Yes. Staff-overwork prevention — strengthening.",style:'Update.'},
    {speaker:'yuki_office',jp:'堅実な財務、当社の強みよね、本当に。',en:"Steady finance — our strength, really.",style:'Soft.'},
    {speaker:'kenji_office',jp:'はい。AIを組み込んだ仕組み、社内で稼働中です。',en:"Yes. AI-embedded mechanism — internally running.",style:'Close.'},
  ]},
  {id:'conv_06628',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究室にも、データの備蓄、必要だぞ。',en:"Ren — lab too, data-stockpile, needed.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。装置の修繕、業者にお願いしてあります。',en:"Yes. Equip repair — vendor-asked.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'共同研究、契約調印、君も同席しろ。',en:"Joint research — contract signing, attend too.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。学会との共催シンポジウム、参加します。',en:"Yes. Conf-co-host symposium — attend.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'若手に発表を譲る経験、君も積め。',en:"Yield-pres-to-youth experience — accumulate.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。過労にならないよう、健康管理、気をつけます。',en:"Yes. No-overwork — health-care, mindful.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'堅実な研究姿勢、評価される、長期的に。',en:"Steady research stance — evaluated, long-term.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。AIを組み込んだ実験、来年、進めたいです。',en:"Yes. AI-embedded experiment — next year advance want.",style:'Earnest close.'},
  ]},
  {id:'conv_06629',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、災害備蓄、御社にも、ご協力いただいております。',en:"Police — disaster stockpile, your co cooperate.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。本社の修繕、警察への報告、済んでおります。',en:"Yes. HQ repair — police-report done.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'地域安全協定、市と調印、来週予定です。',en:"Local-safety pact — city signing, next week.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察と共催の防犯講座、社員参加します。',en:"Yes. Police-co-host crime-prev seminar — staff-attend.",style:'Update.'},
    {speaker:'takeda_officer',jp:'容疑者、警察に道を譲る車両に紛れて、移動していました。',en:"Suspect — yield-to-police vehicles mixed, moving.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。過労による事故、警察も注視されていますよね。',en:"Yes. Overwork-accidents — police-watched too.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'堅実な防犯対策、御社の取り組み、評価しています。',en:"Steady crime-prev — your effort, eval.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。防犯センサーを組み込んだ社屋、増えています。',en:"Yes. Sensor-embedded buildings — increasing.",style:'Close.'},
  ]},
  {id:'conv_06630',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時から、非常用備蓄、私が、こだわってきた。',en:"Founding-era — emerg-stockpile, my insistence.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。本社の修繕、外観も含めて、計画しています。',en:"Yes. HQ repair — exterior-included, planning.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'国際協定の調印、私も立ち会った日々、懐かしい。',en:"Int-pact signing — also attended days, nostalgic.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。業界全体との共催プロジェクト、進めています。',en:"Yes. Industry-co-host project — advancing.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'時には、地位を譲る勇気、経営者には、必要だぞ。',en:"Sometimes — yield-position courage — exec needs.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。社員の過労、社長として、責任を感じます。',en:"Yes. Staff overwork — as pres, feel duty.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'堅実な歩み、お父さんから受け継いだ、誇りだ。',en:"Steady walk — from Dad inherited, pride.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。次世代システムを組み込んだ体制、構築中です。',en:"Yes. Next-gen-embedded system — building.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06631',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a major case',lines:[
    {speaker:'takeda_officer',jp:'本件、凶悪犯罪として、捜査本部、立ち上げました。',en:"Case — heinous crime, HQ-set-up.",style:'Calm.'},
    {speaker:'ren_uni',jp:'メディアで賛否両論、報じられていますね。',en:"Media pro-con — reported.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者は、最後まで沈黙を貫いていました。',en:"Yes. Suspect — to-end silence-maintained.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、逃走経路、特定できそうですか。',en:"Suspect — escape route, identifiable?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。生き延びた被害者の証言、貴重です。',en:"Yes. Survived victim's testimony — precious.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地域に防犯意識が、芽生え始めていますよね。',en:"Region — crime-prev conscience budding.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。被害者と容疑者、過去にすれ違いがあったようです。',en:"Yes. Victim and suspect — past-passing-by exists.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'院生として、警察活動、勉強させていただいています。',en:"As grad student — police-activity, learning.",style:'Polite close.'},
  ]},
  {id:'conv_06632',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、凶悪事件の歴史的背景、深く論じていますね。',en:"Ren — paper, heinous-crime hist-background, deeply argued.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。当時の世論、賛否両論、激しかったです。',en:"Yes. Era opinion — pro-con, intense.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'信念を貫いた知識人、印象的に描かれていますね。',en:"Belief-pierced intellectual — strikingly depicted.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。戦時下、人々の逃走経路、地図、付録に入れました。',en:"Yes. Wartime — escape routes, map, appendix.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦争を生き延びた人々の証言、宝物ですね、史料として。',en:"War-survived testimony — treasure as archive.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。市民意識が芽生え始めた瞬間、描写、丁寧にしました。',en:"Yes. Civic-conscience budding moment — depicted carefully.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'各派の思想のすれ違い、章末で整理されていますね。',en:"Faction thought-passing-by — end-summarized.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。院生として、こうした研究、続けたいです。',en:"Yes. As grad student — such research, continue want.",style:'Earnest close.'},
  ]},
  {id:'conv_06633',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses a difficult case',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、ICUの患者さん、凶悪事件の被害者でした。',en:"Ren — ICU patient, heinous-crime victim.",style:'Calm.'},
    {speaker:'ren_uni',jp:'治療方針、医療界でも、賛否両論があったんですよね。',en:"Tx-policy — med-community pro-con-existed.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医師として、自分の信念を貫いた治療を選びました。',en:"Yes. As doctor — own-belief-pierced tx, chose.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'術後、患者さん、リハビリから、逃走しようとしたって?',en:"Post-op — patient, rehab-escape attempted?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。彼は、奇跡的に生き延びた患者の一人です。',en:"Yes. He — miraculously-survived patient, one of.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'患者の心に、希望が芽生え始める瞬間、感動的ですね。',en:"Patient heart — hope budding moment, moving.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。家族とのすれ違い、医療を通じて、解消されました。',en:"Yes. Family-passing-by — through-med, resolved.",style:'Patient.'},
    {speaker:'ren_uni',jp:'院生として、こうした臨床例、勉強させていただいています。',en:"As grad student — such clinical cases, learning.",style:'Polite close.'},
  ]},
  {id:'conv_06634',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp risk',lines:[
    {speaker:'hiroshi_boss',jp:'業界、凶悪な競争、本格化しているな。',en:"Industry — heinous competition, intensifying.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社内、新方針に賛否両論、出ています。',en:"Yes. Internal — new-policy pro-con out.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'創業者は、ぶれずに信念を貫いた人物だった。',en:"Founder — unwavering belief-pierced figure.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。元社員、競合に逃走するケース、増えております。',en:"Yes. Ex-staff — rival-escaping cases, increase.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'我が社は、何度も生き延びてきた、底力がある。',en:"Our co — many-times-survived, inner strength.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新たな企業文化、芽生え始めています、若手中心に。',en:"Yes. New corp-culture — budding, youth-centered.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'部門間のすれ違い、コミュニケーション、強化しろ。',en:"Inter-dept passing-by — comms, strengthen.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。院生インターンも、有望な人材、増えました。',en:"Yes. Grad interns — promising, increased.",style:'Close.'},
  ]},
  {id:'conv_06635',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through media studies',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、研究、凶悪犯罪報道のあり方、論じましたね。',en:"Sakura — research, heinous-crime reporting, argued.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。報道に、賛否両論、ありました、社会の声。',en:"Yes. Reporting — pro-con, societal voice.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'ジャーナリストが信念を貫いた事例、印象的でしたね。',en:"Journalists' belief-pierced cases — striking.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。容疑者の逃走中の報道倫理、難しい問題ですね。',en:"Yes. During-escape reporting ethics — hard.",style:'Reflective.'},
    {speaker:'asuka_teacher',jp:'被害者家族が、社会的に、生き延びる、辛い旅でしたね。',en:"Victim-families, socially-surviving — hard journey.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。メディアの責任意識が芽生え始めた時代、書きました。',en:"Yes. Media-resp-conscience budding era — wrote.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'記者と読者のすれ違い、現代のテーマですね。',en:"Reporter-reader passing-by — modern theme.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。将来、院生として、続けたい研究テーマです。',en:"Yes. Future — as grad, continue research theme.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06636',cluster:'D',ambient:'park_distant_birds',cast:['hiroshi_elder','sho_child'],targets:D_T,scenario:'A grandpa and grandkid spend a day',lines:[
    {speaker:'sho_child',jp:'おじいちゃん、夜明けって、見たこと、ある?',en:"Grandpa — dawn, seen?",style:'Curious child.'},
    {speaker:'hiroshi_elder',jp:'うん。畑仕事のあと、粘土で、玩具を作って遊んだものだ。',en:"Yes. Farm-work, clay toy-made-played.",style:'Wistful.'},
    {speaker:'sho_child',jp:'池の鴨、おじいちゃん、餌、あげようよ。',en:"Pond duck — Grandpa, feed give!",style:'Eager.'},
    {speaker:'hiroshi_elder',jp:'昔のサーカス、ピエロさん、面白かったな、子供の頃。',en:"Old circus — clown, fun, childhood.",style:'Wistful.'},
    {speaker:'sho_child',jp:'木の根っこ、すごく大きいね、これ!',en:"Tree root — very big, this!",style:'Awe.'},
    {speaker:'hiroshi_elder',jp:'お洋服の裾、汚れたな、翔くん、気をつけて。',en:"Hem dirty — Sho, be careful.",style:'Direction.'},
    {speaker:'sho_child',jp:'勉強、根気よく続けるって、ママ、言ってたよ。',en:"Study — patiently-continue, Mom said.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'生意気なことを言うようになったな、翔くん、頼もしい。',en:"Cheeky things saying — Sho, reassuring.",style:'Warm close.'},
  ]},
  {id:'conv_06637',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、夜明けまで、彼と語り合ったの、ロマンチックだった。',en:"Aoi — until dawn, with him talked, romantic.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。陶芸教室、粘土、初めて触ったわよ、私。',en:"Yeah. Ceramics class — clay, first-touched, me.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'公園の池、鴨が、たくさん戻ってきたって、聞いた。',en:"Park pond — duck many-back, heard.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'子供のお誕生日、ピエロさんを呼ぶの、定番ね。',en:"Kid b-day — clown-invite, classic.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'植木鉢、根っこ、はみ出してたわよ、植え替え、必要。',en:"Pot — root, sticking-out, repot needed.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'スカートの裾、ちょっと、ほつれてるよ、メイちゃん。',en:"Skirt hem — slightly, fraying, Mei.",style:'Soft direction.'},
    {speaker:'mei_romantic',jp:'根気よく、編み物、続けてるよ、最近。',en:"Patiently — knitting continuing, lately.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'メイちゃんの彼、ちょっと生意気な所が、可愛いね。',en:"Mei's boyfriend — slightly-cheeky, cute.",style:'Warm close.'},
  ]},
  {id:'conv_06638',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、夜明けまで、ゲーム、やったことある?',en:"Riku — until dawn, gamed, ever?",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'うん。図工の時間、粘土、めっちゃ楽しいよな。',en:"Yeah. Art class — clay, super fun.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'池の鴨、子供たちに人気だね、最近の公園。',en:"Pond duck — kid-pop, recent parks.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'文化祭、お前、ピエロの衣装で出るんだろ?',en:"Cult-fest — you, clown-costume go?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'植木の根っこ、ガーデニング部、整えてたよ、昨日。',en:"Plant-root — garden-club fixing yesterday.",style:'Animated.'},
    {speaker:'riku_teen',jp:'制服のズボンの裾、ちょっと、長いんだよな、お前のはどう?',en:"Uniform pant hem — slightly long, yours?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'部活、根気よく、続けるしかないよね、リク。',en:"Club — patiently continue only, Riku.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'お前、たまに、生意気な口、きくよな。',en:"You — sometimes cheeky-talk.",style:'Wry close.'},
  ]},
  {id:'conv_06639',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、夜明けまで、お祭りで踊ったな、私たち。',en:"Youth — until dawn, fest-danced, us.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。孫が、粘土で、似顔絵、作ってくれたわよ、私の。',en:"Yes. Grandkid — clay portrait, made me.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔、池の鴨を、よく見に行ったな、二人で、デートで。',en:"Old days — pond duck often-saw, dating.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'結婚式、ピエロの余興、新郎が、用意してくれてたわね。',en:"Wedding — clown side-show, groom prepared.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'庭の木の根っこ、年々、強くなってきたな、立派だ。',en:"Garden tree-root — yearly-stronger, magnificent.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'着物の裾、お直しに出さないと、寸法、合わないわよ。',en:"Kimono hem — alter-or, size-off.",style:'Practical.'},
    {speaker:'hiroshi_elder',jp:'人生、根気で乗り切ってきたな、二人で。',en:"Life — patience-overcome, two.",style:'Sage.'},
    {speaker:'sachiko_grandma',jp:'孫、生意気な口、たまに、きくようになってきたわね、頼もしい。',en:"Grandkid — cheeky talk, sometimes — reassuring.",style:'Warm close.'},
  ]},
  {id:'conv_06640',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、新店、夜明け前から、仕込みに入る覚悟やで。',en:"Aoi — new store, pre-dawn prep-in, resolved.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。陶芸家とコラボ、粘土の食器、お客様向けに、製作してます。',en:"Yes. Ceramicist-collab — clay-tableware, for-cust, making.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'秋メニューに、鴨ロースのコンフィ、出そかな。',en:"Autumn menu — duck-loin confit, out?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。子供向けイベントで、ピエロさんを呼びませんか。',en:"Yes. Kid-event — clown-invite?",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'店の看板、木の根っこ、デザインに、活かさへんか。',en:"Sign — tree-root, design-utilize?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。テーブルクロスの裾、お洒落にカット、依頼します。',en:"Yes. Tablecloth hem — stylish-cut, request.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'修行、根気よく続けてきた経験、店に、活かせるで。',en:"Training — patiently-continued experience — store-utilize.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。新人、ちょっと生意気な所もありますが、伸びそうです。',en:"Yes. Newbie — slightly cheeky, but promising.",style:'Reflective close.'},
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

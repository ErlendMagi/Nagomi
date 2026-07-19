import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_339 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['おそれ','おん','驚かさ','でん','折角','思い入れ','おもしろく','ひょっとしたら']
const B_T = ['瞬時','歳入','排気','後記','稼げる','頂けれ','興行','続出']
const C_T = ['精力','病棟','宿命','神父','駐留','標識','国政','故意']
const D_T = ['伴奏','ダンサー','路面','アルファベット','質量','だらだら','燃費','ツーリング']

const data = [
  // A
  {id:'conv_06741',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'sho_child',jp:'ママ、雨で、お祭り、中止になるおそれ、あるかな?',en:"Mom — rain, fest, cancel-risk, exist?",style:'Worried child.'},
    {speaker:'yumiko_mom',jp:'うん。お友達のひかりちゃんと、翔くん、おんなじ歳ね。',en:"Yes. Friend Hikari — Sho, same-age.",style:'Soft.'},
    {speaker:'sho_child',jp:'昨日のテストの点数、ぼく、自分でも驚かされたよ!',en:"Yesterday's score — me, self-surprised!",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'おでん、お父さんが大好きなのよね、寒い時期、よく作る。',en:"Oden — Dad-loves, cold-time often-makes.",style:'Warm.'},
    {speaker:'sho_child',jp:'折角、お祭り、行こうと思ったのに、雨かあ、残念。',en:"With great care — fest go-thought, rain, sad.",style:'Wistful.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんが作ってくれた絵本、ママも、思い入れがあるのよ。',en:"Granny picture-book — Mom-also has feelings.",style:'Tender.'},
    {speaker:'sho_child',jp:'今日の本、おもしろく読めたよ、ぼく、夢中だった。',en:"Today's book — interestingly read, me absorbed.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'ひょっとしたら、明日、お父さん、早く帰れるかもよ。',en:"Maybe — tomorrow, Dad early-return-able.",style:'Hopeful close.'},
  ]},
  {id:'conv_06742',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、彼の浮気のおそれ、最近、私、心配してるの。',en:"Aoi — his cheating risk, lately, worried me.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'うん。私たち、おんなじ、悩み、抱えてるのかもね、メイちゃん。',en:"Yeah. Us — same worries-held, maybe, Mei.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'今日の彼の優しさ、私、驚かされたわよ、本当に。',en:"His kindness — me, surprised, really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'冬には、店でも、おでん、出そうかな、温まるよね。',en:"Winter — store too, oden out?, warm.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'折角、彼が予約してくれたレストラン、楽しもうよ、葵。',en:"With effort — bf-reserved restaurant, enjoy, Aoi.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'お母さんの形見の腕時計、私、思い入れがあるの、いつも。',en:"Mom-keepsake watch — me, feelings, always.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'葵の話、いつ聞いても、おもしろく感じるわよ、私。',en:"Aoi's talk — anytime, interesting feel, me.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'ひょっとしたら、彼、サプライズ、考えてるのかも、メイちゃん。',en:"Maybe — bf, surprise considering, Mei.",style:'Reflective close.'},
  ]},
  {id:'conv_06743',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、テスト、落第するおそれ、あるかな、私、危ないかも。',en:"Riku — test, fail-risk, me, dangerous maybe.",style:'Worried teen.'},
    {speaker:'riku_teen',jp:'うん。お前と俺、おんなじ高校だから、心強いよ、本当。',en:"Yeah. You and me — same school, encouraged, really.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'昨日の合宿、コーチの厳しさに、皆、驚かされたよね。',en:"Yesterday camp — coach-strict, all surprised.",style:'Wry.'},
    {speaker:'riku_teen',jp:'寒くなってきたな、家でおでん、食べたくなるよ。',en:"Getting cold — home oden, eat-want.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'折角、夏休みなのに、宿題、いっぱいだよね、つらい。',en:"With great care — summer, but homework lots, painful.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'部活のユニフォーム、俺、思い入れあるんだよ、三年間、着てきたから。',en:"Club uniform — me, feelings, 3-yr-worn.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'最近の漫画、めっちゃ、おもしろく感じるんだよね、リク。',en:"Recent manga — super-interesting feel, Riku.",style:'Animated.'},
    {speaker:'riku_teen',jp:'ひょっとしたら、運動部、引退、早まるかもしれないぜ、桜。',en:"Maybe — sport-club retire, may early, Sakura.",style:'Reflective close.'},
  ]},
  {id:'conv_06744',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'高齢者の事故、増えるおそれ、あるな、最近のニュース。',en:"Elder accidents — increase-risk exists, recent news.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。あなたと私、おんなじ、考え方ね、いつも。',en:"Yes. You and me — same thinking, always.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昨日の孫の言葉、お祖父ちゃん、驚かされたな、本当に。',en:"Yesterday grandkid-word — Grandpa surprised, really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖母ちゃんの作るおでん、家族、皆、好きよ、温まるわね。',en:"Granny's oden — family-all-like, warm.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'折角、息子が来てくれるんだから、御馳走、用意しような。',en:"With great care — son-coming, feast prepare.",style:'Eager.'},
    {speaker:'sachiko_grandma',jp:'昔の結婚写真、私、思い入れがあるのよ、見るたびに。',en:"Old wedding photo — me, feelings, each-see.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'最近のテレビ、おもしろく感じるものが、少ないな、お母さん。',en:"Recent TV — interesting-felt-things, few, Mom.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'ひょっとしたら、来年、孫、結婚するかもしれないわね、楽しみ。',en:"Maybe — next year grandkid marry, fun.",style:'Soft close.'},
  ]},
  {id:'conv_06745',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','mei_romantic'],targets:A_T,scenario:'A uni student and friend chat',lines:[
    {speaker:'mei_romantic',jp:'蓮さん、論文、締め切りに遅れるおそれ、ないですか?',en:"Ren — paper, deadline-late risk, none?",style:'Curious.'},
    {speaker:'ren_uni',jp:'うん。研究室の同期、私と、おんなじ歳なんだ、メイちゃん。',en:"Yes. Lab-cohort, me, same-age, Mei.",style:'Casual.'},
    {speaker:'mei_romantic',jp:'蓮さんの発表、聴衆、驚かされたみたいですよ、評判が、いいです。',en:"Ren-pres — audience surprised, reputation good.",style:'Animated.'},
    {speaker:'ren_uni',jp:'最近、研究室で、おでん、皆で食べる会、開いたんだよ。',en:"Lately — lab, oden, all-eat club, held.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'折角の学会発表、応援に行きたいです、蓮さん。',en:"With effort — conf-pres, want-cheer go, Ren.",style:'Eager.'},
    {speaker:'ren_uni',jp:'うん。指導教官に、僕、思い入れが、あるんだ、長く、お世話になってる。',en:"Yes. Adviser — me, feelings, long-care-given.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'蓮さんの研究、おもしろく聞けるんですよ、私、いつも。',en:"Ren's research — interestingly listen, me always.",style:'Soft.'},
    {speaker:'ren_uni',jp:'ひょっとしたら、留学のチャンス、めぐってくるかもしれない、来年。',en:"Maybe — study-abroad chance, around-come, next year.",style:'Hopeful close.'},
  ]},

  // B
  {id:'conv_06746',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews ops',lines:[
    {speaker:'hiroshi_boss',jp:'対応、瞬時に、判断する力、社員に、求めろ。',en:"Response — instantaneously-decide power, staff demand.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。歳入見通し、財務に、報告いたします。',en:"Yes. Revenue-forecast — finance-report.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'工場の排気設備、環境基準、満たしているか、確認しろ。',en:"Factory exhaust — env-stds met?, verify.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内報、編集後記、社員からも、好評です。',en:"Yes. Corp-news — editor's-note, staff-popular.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新事業で、いかに、稼げる体制を、築くか、議題だ。',en:"New biz — how earn-able structure build, agenda.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。ご賛同、頂ければ、企画を、進めてまいります。',en:"Yes. If-approval-received, plan advance.",style:'Polite update.'},
    {speaker:'hiroshi_boss',jp:'今期の興行、好調だな、引き続き、努力しろ。',en:"This term box-office — strong, keep-effort.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。注文、続出しております、生産、追いついていません。',en:"Yes. Orders — continuous, production catching-up not.",style:'Close.'},
  ]},
  {id:'conv_06747',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'プレゼン中の判断、瞬時に、求められるわね。',en:"Pres-mid decision — instantly demanded.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。来期の歳入計画、見直しに、入っております。',en:"Yes. Next-term revenue plan — review entering.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'本社の排気ダクト、定期点検、忘れずにね。',en:"HQ exhaust-duct — periodic-inspect, don't forget.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。来月のニュースレター後記、何を書きましょう?',en:"Yes. Next-month newsletter end-note — write what?",style:'Probe.'},
    {speaker:'yuki_office',jp:'副業で稼げる時代、社員の意識も、変わってきたね。',en:"Side-job earn-able era — staff-mind, changed.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。お時間、頂ければ、改めて、打ち合わせいたします。',en:"Yes. If-time-received, again meet.",style:'Polite update.'},
    {speaker:'yuki_office',jp:'映画の興行収入、今週末、確認しましょうね。',en:"Film box-office — weekend, verify.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。問い合わせ、続出しております、人気商品です。',en:"Yes. Inquiries — continuous, popular item.",style:'Close.'},
  ]},
  {id:'conv_06748',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究、瞬時の判断、求められる場面も、あるぞ。',en:"Ren — research, instant-decision, scenes exist.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。地方自治体の歳入研究、テーマに、しようと思います。',en:"Yes. Local-gov revenue research — theme planning.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'実験室の排気、君も、気をつけて使え。',en:"Lab exhaust — also, careful-use.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文後記、感謝の言葉、必ず入れます。',en:"Yes. Paper-end-note — thanks-words, definitely include.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究で稼げる力、若いうちに、身につけろ。',en:"Research-earn-able power — youth-attain.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先生の推薦を頂ければ、海外学会、行ってみたいです。',en:"Yes. Prof-recommend received, overseas conf go-want.",style:'Polite request.'},
    {speaker:'hiroshi_boss',jp:'学会、興行的にも、成功させる視点、持て。',en:"Conf — box-office-also, success-mindset have.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。新人発表、応募が、続出しているそうです。',en:"Yes. Newbie-pres — apps continuous, said.",style:'Earnest close.'},
  ]},
  {id:'conv_06749',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、瞬時の判断で、被害を、最小限にしました。',en:"Police — instant-judgment, damage minimized.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。地域防犯予算、自治体歳入から、配分されていますね。',en:"Yes. Local crime-prev budget — gov-revenue allocated.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'容疑者、排気のにおい、捜査の手がかりになりました。',en:"Suspect — exhaust-smell, inv-clue.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察広報の後記、ご担当者様、入念に書かれていますね。',en:"Yes. Police-PR end-note — rep carefully written.",style:'Update.'},
    {speaker:'takeda_officer',jp:'詐欺事件、簡単に稼げる話、警戒してください。',en:"Fraud — easy-earn-able talk, beware.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。ご助言を頂ければ、社内研修に、活かします。',en:"Yes. Advice-received, train utilize.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'大規模興行、警備、特別態勢で、臨みます。',en:"Large box-office — security, special-posture face.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。被害相談、続出している、世相ですよね、最近。',en:"Yes. Damage consult — continuous, social-mood, lately.",style:'Close.'},
  ]},
  {id:'conv_06750',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時、瞬時の判断、何度も求められたな、私も。',en:"Founding — instant-judgment many-times demanded, me.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。当社の歳入、創業以来、増加傾向です。',en:"Yes. Our revenue — since founding, increase-trend.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'昔の工場、排気対策、最先端だったぞ、当時。',en:"Old factory — exhaust-measures, cutting-edge era.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。社史の後記、お父さんの言葉、引用させていただきます。',en:"Yes. Corp-hist end-note — Dad-words, cite permit.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'誠実に稼げる事業、それが、信頼に繋がる。',en:"Honestly-earn-able biz — that, trust-leads.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。ご助言、頂ければ、新事業の方針に、活かします。',en:"Yes. Advice-received, new-biz utilize.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'創業者として、興行的成功にも、立ち会えて、嬉しかった。',en:"As founder — box-office success witnessed, glad.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。創業祭の参加希望、社員から、続出しております。',en:"Yes. Corp-fest attend-wish — staff-continuous.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06751',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses patient care',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者さんの精力的な回復、嬉しい限りです。',en:"Ren — patient vigorous recovery, glad.",style:'Calm.'},
    {speaker:'ren_uni',jp:'病棟内の雰囲気、最近、明るくなりましたね。',en:"In-ward air — lately bright.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医師という宿命を、私、選んだことを、誇りに思っています。',en:"Yes. Doctor-fate — chose, proud.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'病院、神父さんが、定期的に、訪問されているんですね。',en:"Hospital — priest, periodic-visiting.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。災害地に、医療チームが駐留した経験、活きています。',en:"Yes. Disaster-area — med-team stationed, exp-utilized.",style:'Patient.'},
    {speaker:'ren_uni',jp:'院内、新しい標識、わかりやすくて、いいですね。',en:"In-hosp — new signage, clear, good.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。国政の医療政策、現場の声、もっと反映されてほしいですね。',en:"Yes. Nat-pol med-policy — site-voice, more-reflect want.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'故意の医療事故、報道で、目にすると、悲しくなりますね。',en:"Intentional med-accident — news-see, sad-feel.",style:'Reflective close.'},
  ]},
  {id:'conv_06752',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'容疑者、精力的に逃走を続けておりました。',en:"Suspect — vigorously continued-fleeing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者、病棟で、回復に努めておられるんですね。',en:"Victim — in-ward, recovery-effort.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。警察官の宿命として、危険、覚悟しております。',en:"Yes. Officer-fate — danger, resolved.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'神父さん、被害者家族の心の支えに、なっておられますね。',en:"Priest — victim-family soul-support.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。米軍駐留地周辺、捜査、慎重に進めています。',en:"Yes. US-mil station vicinity — inv, careful.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'交通標識、改ざん、増えているそうですね、世間で。',en:"Traffic signs — altered, increasing societally.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。国政の影響、警察活動にも、及びますね。',en:"Yes. Nat-pol effect — police-activity also, reaches.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'故意の事件と過失、線引き、難しいですよね、本件も。',en:"Intent vs negligence — line-draw hard, this case too.",style:'Curious close.'},
  ]},
  {id:'conv_06753',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses social history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、戦後復興期、精力的な政治家の活動、印象的でした。',en:"Ren — paper, post-war recov, vigorous-pol activity, striking.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。占領期の病棟、医療体制、興味深かったです。',en:"Yes. Occupation-era ward, med-system, intriguing.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'敗戦という宿命、人々は、どう受け止めたか、論じていますね。',en:"Defeat-fate — how received, argued.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。当時、外国人神父、戦災孤児を、たくさん引き取られました。',en:"Yes. Era foreign-priests — war-orphans, many-took.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'米軍駐留期、日本社会、急速に変容しましたね。',en:"US-mil station-era — Japan-soc, rapid-changed.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。新しい道路標識、欧米の影響、強く受けています。',en:"Yes. New road signs — west-influence, strong-received.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'国政の安定、戦後経済発展に、不可欠でしたね。',en:"Nat-pol stability — post-war econ-dev, vital.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。故意による報道操作、戦後にも、いくつか、ありました。',en:"Yes. Intentional reporting-manip — post-war, several existed.",style:'Earnest close.'},
  ]},
  {id:'conv_06754',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp impact',lines:[
    {speaker:'hiroshi_boss',jp:'若手社員、精力的に、新事業に、取り組んでいるな。',en:"Youth staff — vigorously, new-biz tackling.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員病棟、近隣の病院と、提携いたしました。',en:"Yes. Staff-ward — neighbor-hosp tied.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'創業者として、業界を支える宿命、感じている。',en:"As founder — industry-support fate, feel.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。社員のチャペル婚、神父さんを、お招きしました。',en:"Yes. Staff chapel-wed — priest invited.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'海外駐留社員、ケア体制、強化しろ。',en:"Overseas station-staff — care system, strengthen.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。看板の標識、デザイン、見直し中です。',en:"Yes. Sign signage — design, reviewing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'国政選挙への寄付、ガイドラインに沿って、行え。',en:"Nat-pol-election donation — per guideline.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。故意による不正、社内、絶対に、許しません。',en:"Yes. Intentional fraud — internally, absolutely no.",style:'Close.'},
  ]},
  {id:'conv_06755',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through cultural studies',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、精力的な活動家の系譜、よく追えていますね。',en:"Sakura — paper, vigorous-activist lineage, well-traced.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。戦時下、結核病棟、活動家、隔離されていました。',en:"Yes. Wartime — TB-ward, activists isolated.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'運命と宿命の違い、文学作品、よく扱われていますね。',en:"Destiny vs fate — lit-works, often-handled.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。海外、神父さんの記録、貴重な史料でした。',en:"Yes. Overseas — priest-records, precious archive.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後の米軍駐留、日本文化に、深い影響を、与えましたね。',en:"Post-war US-station — Japan-cult, deep-effect.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。標識文化、戦後、欧米化、急速に進みました。',en:"Yes. Sign-culture — post-war, westernization rapid.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'国政選挙、地方の人々、関心、強く持っていますね。',en:"Nat-pol elections — locals, interest, strong-having.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。故意の歴史修正、警鐘として、論じました。',en:"Yes. Intentional hist-revisionism — as warning, argued.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06756',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about music and hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、ピアノの伴奏、結婚式で、頼まれたよ、嬉しい。',en:"Aoi — piano-accomp, wedding-requested, glad.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。プロのダンサーの公演、行きたいなって思ってるの、私。',en:"Yeah. Pro-dancer show, go-want, me.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'今朝、路面、凍ってて、滑りそうだったよ、危なかった。',en:"This morn — road, frozen, slip-feel, dangerous.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'看板、アルファベット、目立たせて、可愛いね、葵のお店。',en:"Sign — alphabet, conspicuous, cute, Aoi's store.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'物理の本、質量の単位、難しいよね、読んでて、頭痛い。',en:"Phys book — mass unit, hard, reading, head-ache.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'休日、私、家で、だらだら過ごしちゃうのよね、最近。',en:"Holiday — me, home-laze-spend, lately.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'新しい彼の車、燃費、いいって、自慢してたよ、彼。',en:"New bf's car — fuel-eff, good, boasted.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'バイクのツーリング、今度、一緒に、行きたいね、メイちゃん。',en:"Bike touring — next, together go-want, Mei.",style:'Eager close.'},
  ]},
  {id:'conv_06757',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat about music class',lines:[
    {speaker:'sho_child',jp:'ママ、合唱で、お友達の伴奏、ぼく、聞き惚れたよ。',en:"Mom — chorus, friend's accomp, me enchanted.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'うん。テレビのダンサーさん、すごく上手だったね、昨日。',en:"Yes. TV dancer — super-good yesterday.",style:'Warm.'},
    {speaker:'sho_child',jp:'雨の日、路面、滑るから、走らないでね、翔くん。',en:"Rain day — road, slippy, no-running, Sho.",style:'Direction.'},
    {speaker:'yumiko_mom',jp:'うん。お母さんと、アルファベット、お歌で、覚えようね。',en:"Yes. With Mom — alphabet, song-learn.",style:'Bright.'},
    {speaker:'sho_child',jp:'お祖父ちゃんが、質量って言葉、教えてくれたよ、難しい。',en:"Grandpa — mass-word taught, hard.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'休みの日、だらだら、寝てばかりじゃ、ダメよ、翔くん。',en:"Holiday — laze-only-sleep, no, Sho.",style:'Direction.'},
    {speaker:'sho_child',jp:'お父さん、車の燃費、自慢してたよ、ママ、最近。',en:"Dad — car fuel-eff boasted, Mom, lately.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんと、ツーリング、お父さん、行きたがってたわよ、今度。',en:"With Grandpa — touring, Dad-want-go, next.",style:'Soft close.'},
  ]},
  {id:'conv_06758',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、合唱コンクール、お前、伴奏係、決まったって聞いた!',en:"Riku — chorus contest, accomp-rep, decided, heard!",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。文化祭で、ダンサー、招聘するって話、知ってる?',en:"Yeah. Cult-fest dancer-invite talk, know?",style:'Curious.'},
    {speaker:'sakura_teen',jp:'駅前の路面、最近、工事してたよね、デコボコだったよ。',en:"Station-front road — lately construct, bumpy.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お前の名前、アルファベット表記、お洒落でいいよな、桜。',en:"Your name — alphabet-notation, stylish, Sakura.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'物理、質量と重さの違い、難しいよね、テスト、出るかな。',en:"Phys — mass vs weight diff, hard, test out?",style:'Wry.'},
    {speaker:'riku_teen',jp:'休みの日、家でだらだら過ごすの、結構好きだぜ、俺。',en:"Holiday — home laze, quite-like, me.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お父さんの新車、燃費、いいんだって、自慢してた、昨日。',en:"Dad's new car — fuel-eff good, boasted yesterday.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お兄さんと、ツーリング、行く約束、してるんだ、今度。',en:"With bro — touring, promise, next.",style:'Eager close.'},
  ]},
  {id:'conv_06759',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'結婚式の時、君のピアノ伴奏、感動したな、ばあさん。',en:"Wedding — your piano-accomp, moved, gran.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、ダンサーに憧れたものよ、私、本当に。',en:"Yes. Youth — admired dancer, me really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'最近、路面、凍結に注意するように、なったな、私たち。',en:"Lately — road frost-attention, became, us.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'孫が、アルファベット、もう覚えたって、聞いたわよ、すごいわね。',en:"Grandkid — alphabet learned, heard, amazing.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔の物理の教科書、質量の話、難しかったな、覚えてるか?',en:"Old phys book — mass-talk, hard, remember?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'最近、家で、だらだらと、過ごしちゃうわね、二人で。',en:"Lately — home, lazing-spend, two.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'若い頃の車、燃費、悪かったよな、ガソリン代、つらかった。',en:"Youth car — fuel-eff bad, gas-cost hard.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'若い頃、あなたと、バイクツーリング、よく行ったわね、昔。',en:"Youth — with you, bike-touring often, old.",style:'Wistful close.'},
  ]},
  {id:'conv_06760',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、店内、生演奏で、ピアノ伴奏、入れるのは、どうやろか。',en:"Aoi — interior, live-music piano-accomp, include?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。地元のダンサー、お呼びするイベント、企画しませんか。',en:"Yes. Local dancer-invite event — plan?",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'店前の路面、ちょっと、整備せなあかんで、お客様、転んだら。',en:"Store-front road — bit, maintain must, cust if-fell.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'はい。メニュー、アルファベットの表記も、入れたいですね、観光客向けに。',en:"Yes. Menu — alphabet-notation too, want-include, tourist-aimed.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'食材の質量管理、デジタル化、進めたいんや、葵さん。',en:"Ingredient mass mgmt — digital, advance want, Aoi.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。お客様、店内で、だらだらと、長居してくださってますね。',en:"Yes. Cust — interior, lazingly, long-staying.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'配達車の燃費、エコ車に、変えへんか、葵さん、来年。',en:"Delivery-car fuel-eff — eco-change, Aoi, next year?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。バイクツーリング愛好家、お招きするテラス席、増やします。',en:"Yes. Bike-touring enthusiasts — invite-terrace seats, increase.",style:'Warm close.'},
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

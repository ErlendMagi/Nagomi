import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_341 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['好ましい','分かち','動かさ','限る','だまさ','近頃','さよなら','ボロ']
const B_T = ['会計士','生み出さ','染色','カスタム','補修','公約','不透明','枚数']
const C_T = ['望遠鏡','アメリカ合衆国','道徳的','発作','教義','先行き','なかつ','陛下']
const D_T = ['ランナー','協奏曲','イエロー','ベリー','タラ','兎','フェリー','ランニング']

const data = [
  // A
  {id:'conv_06781',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ぼくの態度、好ましい子供でいたいよ、これからも。',en:"Mom — my attitude, want-stay good kid, future too.",style:'Earnest child.'},
    {speaker:'yumiko_mom',jp:'うん。お祖父ちゃんと、お菓子、分かち合うのは、いいことね。',en:"Yes. Grandpa — sweets, share-good.",style:'Warm.'},
    {speaker:'sho_child',jp:'重い荷物、ぼく、動かさないようにね、ママ、危ないって。',en:"Heavy luggage — don't-move, Mom, dangerous.",style:'Direction.'},
    {speaker:'yumiko_mom',jp:'夏休みのおやつ、アイスに限るわね、暑い日は。',en:"Summer snack — ice-only, hot day.",style:'Soft.'},
    {speaker:'sho_child',jp:'お友達に、だまされちゃダメだよって、ママ、いつも言うね。',en:"Friend — don't-be-tricked, Mom always says.",style:'Reflective child.'},
    {speaker:'yumiko_mom',jp:'近頃、翔くん、自分で、お着替え、できるようになったわね、すごい。',en:"Lately Sho — self-change-able, amazing.",style:'Praising.'},
    {speaker:'sho_child',jp:'お友達と、さよなら、寂しいよね、夏休み終わりに。',en:"Friends — goodbye, lonely, summer-end.",style:'Wistful child.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんち、ボロボロの倉庫、まだあるかしら、覚えてる?',en:"Grandpa's — boro-storage, still?, remember?",style:'Wistful close.'},
  ]},
  {id:'conv_06782',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、彼の態度、好ましいって、私、思ってるんだ、最近。',en:"Aoi — his attitude, good-think, lately, me.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。私たち、悩み、分かち合える友達ね、いつまでも。',en:"Yeah. Us — worries, share-able friends, always.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'重い荷物、私、動かさないようにしてるの、最近、腰、痛くて。',en:"Heavy stuff — me, don't-move, lately, back hurt.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'夏のドリンク、冷たいのに限るわね、お客様も、お喜び。',en:"Summer drink — cold-only, cust also happy.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'彼に、だまされてないかな、私、心配なの、たまに。',en:"By him — not-tricked?, worry, sometimes.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'近頃、メイちゃん、お洒落、磨きがかかってきたわよね、いい感じ。',en:"Lately Mei — stylish polished, good feel.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'前の彼、さよなら、ちゃんと、言えたかな、私、心残り。',en:"Previous bf — goodbye, properly said?, regret.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'昔のメイちゃんのバッグ、ボロボロだったわよね、覚えてる?',en:"Old Mei's bag — boro, remember?",style:'Wistful close.'},
  ]},
  {id:'conv_06783',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前の真面目さ、好ましいよ、私、思ってる、最近。',en:"Riku — your seriousness, good, lately, me.",style:'Soft teen.'},
    {speaker:'riku_teen',jp:'うん。お前と、悩み、分かち合えるのが、嬉しいよ、桜。',en:"Yeah. With you — worries, share-able, glad, Sakura.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'部室、机、勝手に、動かさないようにって、先輩、言ってたよ。',en:"Club-room — desk, no-self-move, senpai said.",style:'Direction.'},
    {speaker:'riku_teen',jp:'テスト前、参考書、要点に限るな、効率良くいこう。',en:"Pre-test — refs, key-points-only, efficient.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'うわさに、だまされないように、気をつけようね、お互いに。',en:"Rumors — don't-tricked, careful, each-other.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'近頃、お前、結構、お洒落だよな、新しい服?',en:"Lately you — stylish, new clothes?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'卒業式、さよなら、言うの、寂しいよね、皆と。',en:"Grad-cere — goodbye, lonely, with all.",style:'Wistful teen.'},
    {speaker:'riku_teen',jp:'運動部、ユニフォーム、ボロボロになるまで、着てたよ、俺。',en:"Sport-club — uniform, until boro, wore, me.",style:'Reflective close.'},
  ]},
  {id:'conv_06784',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'孫の態度、好ましいな、最近、頼もしくなってきた、本当に。',en:"Grandkid attitude — good, lately reassuring, really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。私たち、人生、分かち合ってきたわね、半世紀以上、二人で。',en:"Yes. Us — life, shared, half-century+, two.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'最近、私、重たい家具、動かさないように、気をつけているよ。',en:"Lately — heavy furniture, don't-move, careful, me.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'年寄りには、温泉に限るわね、お互いに、リフレッシュね。',en:"For elders — onsen-only, mutually refresh.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'近所のうわさ、だまされないように、注意しているよ、私たち。',en:"Neighbor rumors — don't-tricked, careful, us.",style:'Direction.'},
    {speaker:'sachiko_grandma',jp:'近頃、息子の家、訪ねるの、毎月の、楽しみよ、私の。',en:"Lately — son's home visit, monthly joy, mine.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔の友人と、さよならを告げて、もう、随分経つな、ばあさん。',en:"Old friends — goodbye-said, long-since, gran.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃の私のミシン、ボロボロになるまで、使ったわよ、覚えてる?',en:"Youth my sewing-machine — boro until-used, remember?",style:'Wistful close.'},
  ]},
  {id:'conv_06785',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','mei_romantic'],targets:A_T,scenario:'A uni student and friend chat',lines:[
    {speaker:'mei_romantic',jp:'蓮さんの研究姿勢、好ましいです、見習いたいくらい、私、いつも。',en:"Ren-research stance — good, want-emulate, me always.",style:'Polite.'},
    {speaker:'ren_uni',jp:'うん。論文の苦労、研究仲間と、分かち合っているんだ、メイちゃん。',en:"Yes. Paper-hardship — with research-mates shared, Mei.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'蓮さん、無理に体、動かさないように、気をつけてくださいね。',en:"Ren — don't-force-body-move, careful.",style:'Concerned.'},
    {speaker:'ren_uni',jp:'研究、深く読むことに限るね、メイちゃん、急ぎたくなる気持ち、抑えて。',en:"Research — deep-read-only, Mei, suppress hurry.",style:'Mentor.'},
    {speaker:'mei_romantic',jp:'査読者にだまされたみたいな経験、蓮さんも、ありますか?',en:"Reviewer-tricked-feel exp — Ren, exist?",style:'Curious.'},
    {speaker:'ren_uni',jp:'近頃、ゼミ、楽しくなってきたよ、後輩も、活発になって。',en:"Lately — seminar fun, underclassmen active.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'卒業式、さよならを、言うの、つらいですよね、研究室の仲間に。',en:"Grad — goodbye-say, hard, lab-mates.",style:'Wistful.'},
    {speaker:'ren_uni',jp:'昔の実験ノート、ボロボロになるまで、書き込んだな、研究歴の証だ。',en:"Old exp-notes — until-boro, written, research-history proof.",style:'Reflective close.'},
  ]},

  // B
  {id:'conv_06786',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'当社の会計士、ベテランで、信頼できる人材だ。',en:"Our accountant — vet, trustworthy.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。新事業、若手から、生み出された企画、形にしております。',en:"Yes. New biz — by-youth-emerged plan, shaping.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'伝統工芸、染色技術、若手にも、継承させろ。',en:"Trad-craft — dye-tech, youth-inherit.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様向け、カスタム製品の受注、増えております。',en:"Yes. Cust-aimed, custom-product orders, increase.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'本社の補修工事、来月から、始まる予定だな。',en:"HQ repair — next month, start plan.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経営陣の公約、社員にも、浸透しています。',en:"Yes. Exec promise — staff-permeated.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の先行き、不透明な部分もあるが、攻めていけ。',en:"Industry future — opaque parts exist, attack.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。配布資料の枚数、過剰にならないよう、調整します。',en:"Yes. Distrib-mat count — not-excess, adjust.",style:'Close.'},
  ]},
  {id:'conv_06787',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'公認会計士、外部監査、もうすぐ、始まりますね。',en:"CPA — ext-audit, soon start.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。新製品、生み出された経緯、社員にも、紹介します。',en:"Yes. New product — created-process, staff intro.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'染色のサンプル、最新のもの、提示してね、お客様に。',en:"Dye samples — latest, present, cust.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。カスタムオーダー、対応スタッフ、増員予定です。',en:"Yes. Custom-order — handle-staff, expand plan.",style:'Update.'},
    {speaker:'yuki_office',jp:'本社、長年の補修箇所、来期、まとめて、対応しましょう。',en:"HQ — long-repair-spots, next term, batch handle.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経営陣の公約、来年度の予算で、実現に向けます。',en:"Yes. Exec promise — next-fy budget, toward-realize.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'業界の先行き、不透明な時代こそ、強気で、いきましょう。',en:"Industry future — opaque-era, bold go.",style:'Encouraging.'},
    {speaker:'kenji_office',jp:'はい。報告書、枚数、過去最少、を、目指します。',en:"Yes. Report count — past-fewest, aim.",style:'Close.'},
  ]},
  {id:'conv_06788',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究も、会計士のように、緻密さ、求められるぞ。',en:"Ren — research too, accountant-like, precision demanded.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究室で、新たな仮説、生み出されました、最近。',en:"Yes. Lab — new hypothesis emerged, lately.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'伝統染色業界の研究、現代に、活かせるテーマだぞ。',en:"Trad-dye industry research — modern utilizable theme.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。実験装置、カスタム仕様で、製作中です。',en:"Yes. Lab-equip — custom-spec, making.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文の補修、何度も、繰り返せ、初校から。',en:"Paper repair — many-times repeat, from-first.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。指導教官への公約、研究計画、守ってまいります。',en:"Yes. Adviser-promise — research-plan, keep.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'若手研究者、先行き、不透明な時代、覚悟を持て。',en:"Young researcher — future opaque-era, resolve.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文ページの枚数、適切に、調整いたします。',en:"Yes. Paper pages — properly adjust.",style:'Earnest close.'},
  ]},
  {id:'conv_06789',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'本件、会計士の協力、欠かせませんでした。',en:"Case — accountant-coop, indispensable.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。新たな防犯策、警察の現場で、生み出されています。',en:"Yes. New crime-prev — police-site, created.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'容疑者、染色業界、出身者でした。',en:"Suspect — dye-industry, from.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察への寄付、カスタムプログラムで、対応します。',en:"Yes. Police-donation — custom-prog, handle.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察車両、補修、計画的に、進めております。',en:"Police vehicles — repair, planned, advancing.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。地域への公約、企業として、果たしてまいります。',en:"Yes. Local promise — as co, fulfill.",style:'Update.'},
    {speaker:'takeda_officer',jp:'証拠の先行き、不透明な状況、続いております。',en:"Evidence future — opaque, continuing.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。提供する資料の枚数、必要分、ご用意します。',en:"Yes. Provided-mat count — needed-amt prepare.",style:'Close.'},
  ]},
  {id:'conv_06790',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時から、信頼できる会計士、社の財産だな。',en:"Founding — trustworthy accountant, co asset.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。多くの新事業、創業者から、生み出されてきました。',en:"Yes. Many new biz — from founder, emerged.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'昔、地方の染色職人と、提携しようとしたな、覚えているか?',en:"Old — local-dyer partnership-tried, remember?",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お客様に、カスタム仕様の対応、私の代でも、続けています。',en:"Yes. Cust — custom-spec, my era also continues.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'本社の補修、創業時の柱、残しておけよ、思い出として。',en:"HQ repair — founding pillar, keep, as memory.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業者の公約、社是として、引き継いでまいります。',en:"Yes. Founder promise — as motto, inherit.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'時代の先行き、不透明だが、創業精神は、揺らがない。',en:"Era future — opaque, founding-spirit unwavering.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。記念誌の枚数、創業者にも、ご納得いただける厚さで、出します。',en:"Yes. Memo-mag count — founder-satisfy thickness, out.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06791',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses science history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、ガリレオの望遠鏡、科学史の転機でしたね。',en:"Ren — paper, Galileo's telescope, sci-hist turning.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。アメリカ合衆国の宇宙計画、戦後、急速に進みました。',en:"Yes. US space-prog — post-war, rapid advanced.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時の科学者の道徳的責任、考えさせられますね。',en:"Era sci-moral-resp — thought-provoking.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。学者の中に、心臓発作で倒れた方も、多くいました。',en:"Yes. Among scholars — heart-attack collapse, many.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'宗教教義との衝突、科学者の苦悩、扱っていますね。',en:"Religious doctrine clash — sci-agony, handle.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。科学技術の先行き、当時から、議論されていました。',en:"Yes. Sci-tech future — since-era, discussed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'大分県の中津市、福沢諭吉の出身地、紹介していますね。',en:"Oita Nakatsu — Fukuzawa birthplace, intro.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。当時、天皇陛下の科学振興政策、影響を与えました。',en:"Yes. Era — emperor sci-promotion, influenced.",style:'Earnest close.'},
  ]},
  {id:'conv_06792',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、現場から、特殊な望遠鏡、押収しております。',en:"Case — from-site, special telescope confiscated.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者、アメリカ合衆国出身者だったんですね。',en:"Suspect — US-from.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者の道徳的判断、欠落していたようです。',en:"Yes. Suspect's moral-judgment — lacking.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者、心臓発作の既往歴、ありましたよね。',en:"Victim — heart-attack prior, existed.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。新興宗教の教義、捜査の手がかりに、なりました。',en:"Yes. New-rel doctrine — inv-clue became.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者家族の先行き、警察、サポート、続けていますね。',en:"Victim-family future — police, support continuing.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。中津市出身の関係者、聴取に、応じていただいています。',en:"Yes. Nakatsu-related people — interview-responded.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察、皇室、天皇陛下警護への、貢献、高く評価されていますね。',en:"Police — imperial-fam, emperor-guard contrib, high-eval.",style:'Reflective close.'},
  ]},
  {id:'conv_06793',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical care',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、研究、内視鏡、望遠鏡のような技術応用、興味深いですね。',en:"Ren — research, endo-, telescope-like tech app, intriguing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。アメリカ合衆国の医療研究、先進的ですよね。',en:"Yes. US med-research — advanced.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医師の道徳的判断、患者さんを守る最後の砦です。',en:"Yes. Doctor moral-judgment — patient-guard last bastion.",style:'Patient.'},
    {speaker:'ren_uni',jp:'心臓発作の患者、初期対応、生存率、変えますよね。',en:"Heart-attack patient — early-response, survival-change.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。信仰、教義、患者さんの治療観に、影響しますね。',en:"Yes. Faith doctrine — patient tx-view, influence.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療の先行き、AI導入で、変わりますね、これから。',en:"Med future — AI-intro, change, hereafter.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。大分の中津市、地域医療、活気がありますね。',en:"Yes. Oita Nakatsu — local-med, energetic.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'天皇陛下の主治医、伝統と現代を、つなぐ存在ですね。',en:"Emperor's primary-doc — trad-mod connecting.",style:'Reflective close.'},
  ]},
  {id:'conv_06794',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews international expansion',lines:[
    {speaker:'hiroshi_boss',jp:'天文機器、望遠鏡部品、当社の新製品、進めろ。',en:"Astron equip — telescope parts, new product advance.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。アメリカ合衆国、当社の主要市場、引き続き重視します。',en:"Yes. US — our main market, continued focus.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'企業の道徳的責任、社内、徹底させろ。',en:"Corp moral-resp — internally thorough.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員のメンタル、発作的なストレス、防ぐ取り組み、進めています。',en:"Yes. Staff mental — sudden-attack stress prev, advancing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'経営の教義、創業者から、引き継ぐべきものだ。',en:"Mgmt doctrine — from founder, must-inherit.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界の先行き、楽観できない部分も、ございます。',en:"Yes. Industry future — un-optimistic parts also exist.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'中津市の工場、視察、来週、予定だ。',en:"Nakatsu factory — visit, next week plan.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。皇室の方々、陛下のご視察、過去に、いただいたことがあります。',en:"Yes. Imperial-fam — emperor visit, past, received.",style:'Close.'},
  ]},
  {id:'conv_06795',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher discusses social studies',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、研究、望遠鏡時代の科学革命、よく整理されていますね。',en:"Sakura — research, telescope-era sci-rev, well-organized.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。アメリカ合衆国独立、世界に与えた影響、論じました。',en:"Yes. US independence — world impact argued.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'各国の道徳的価値観、比較は、難しいですね、文化、違うから。',en:"Multi-country moral-values — compare hard, culture differ.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史上の人物、発作で倒れた方の、生涯、追いました。',en:"Yes. Hist figures — attack-collapse, life-followed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'宗教教義の対立、戦争の引き金にも、なりましたね。',en:"Religious doctrine clash — war-trigger also became.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。世界の先行き、今、本当に、不透明ですよね、論文の結論。',en:"Yes. World future — now, really opaque — paper-conclusion.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地方都市の中津市、近代化の歴史、興味深いですね。',en:"Local city Nakatsu — modernization hist, intriguing.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。天皇陛下の象徴的役割、戦後憲法で、定められました。',en:"Yes. Emperor symbolic-role — post-war const set.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06796',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、彼、マラソンランナーだったんだって、知ってた、最近?',en:"Aoi — bf, marathon-runner, knew lately?",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。クラシック、ピアノ協奏曲、よく聴いてるよ、私、最近。',en:"Yeah. Classical — piano concerto often-listen, lately.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'新作のドレス、イエロー系、爽やかで、いいよね、葵にも似合う。',en:"New dress — yellow, fresh, good, Aoi-also suits.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'夏のベリーパフェ、店で、メニュー化したよ、人気だよ。',en:"Summer berry-parfait — store-menu, popular.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'タラ料理、ノルウェー風で、彼の手作り、美味しかったんだ、昨日。',en:"Cod dish — Norwegian-style, bf-handmade, tasty yesterday.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'動物カフェで、兎、抱っこできたよ、可愛かった、本当に。',en:"Animal cafe — rabbit hugged, cute, really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'瀬戸内海のフェリー、彼と乗ろうって、約束してるの。',en:"Setonaikai ferry — with bf board promise.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'朝のランニング、習慣にしてるよ、私、最近、健康のため。',en:"Morning running — habit, lately, health.",style:'Reflective close.'},
  ]},
  {id:'conv_06797',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、運動会で、ぼく、リレーランナーに、選ばれたよ!',en:"Mom — sports-day, me, relay-runner chosen!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'うん。お父さんの好きなピアノ協奏曲、お休みの日、聴いてたわね。',en:"Yes. Dad-fave piano concerto — holiday-listen.",style:'Soft.'},
    {speaker:'sho_child',jp:'信号のイエロー、止まる準備、するんだよね、ママ、教えてくれた。',en:"Light yellow — stop-prep, Mom-taught.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'夏のフルーツ、ベリー系、ヨーグルトに入れて、食べましょうね。',en:"Summer fruit — berry, yogurt-add, eat.",style:'Bright.'},
    {speaker:'sho_child',jp:'お祖母ちゃんが、タラの煮物、作ってくれるって、嬉しい!',en:"Granny — cod stew, makes, glad!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'絵本の兎さん、翔くん、大好きよね、いつも読んでるね。',en:"Picture-book rabbit — Sho-loves, always read.",style:'Warm.'},
    {speaker:'sho_child',jp:'夏休み、お祖父ちゃんちまで、フェリーで、行きたいな、ママ!',en:"Summer — to Grandpa's, by ferry want-go, Mom!",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'毎朝のランニング、お父さん、続けてるね、健康のためにね。',en:"Morning running — Dad continues, health.",style:'Tender close.'},
  ]},
  {id:'conv_06798',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、リレーランナーで、放課後、いつも、走ってるね。',en:"Riku — relay-runner, post-class, always running.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'うん。文化祭、軽音部、協奏曲も、演奏するって、決めたよ。',en:"Yeah. Cult-fest, music-club, concerto play decided.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'新しいバッグ、イエローのやつ、買っちゃった、可愛いから。',en:"New bag — yellow, bought, cute.",style:'Bright.'},
    {speaker:'riku_teen',jp:'文化祭で、ベリースムージー、出店するクラスもあるって、聞いたぜ。',en:"Cult-fest — berry-smoothie, store-class also, heard.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'家庭科で、タラのムニエル、作ったんだ、美味しかったよ。',en:"Home-ec — cod-meunière made, tasty.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'近所の公園に、兎、放されてるって、聞いたことある?',en:"Local park — rabbit released, heard?",style:'Curious.'},
    {speaker:'sakura_teen',jp:'夏休み、北海道、フェリーで、行ってみたいな、皆と。',en:"Summer — Hokkaido, ferry-go want, with all.",style:'Eager.'},
    {speaker:'riku_teen',jp:'お前、朝のランニング、続けてるんだろ、桜、頑張ってるな。',en:"You — morning running continues, Sakura, hard-working.",style:'Praising close.'},
  ]},
  {id:'conv_06799',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、私、リレーのランナー、結構、速かったんだよな、ばあさん。',en:"Youth — relay-runner, quite fast, me, gran.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。私たち、若い頃、ピアノ協奏曲、コンサート、行ったわね。',en:"Yes. Youth — piano concerto concert, went.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'最近の若い人、イエローのシャツ、流行ってるよな、お洒落だな。',en:"Recent youth — yellow shirt, trendy, stylish.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'昔、田舎で、野生のベリー、よく摘んで、ジャムにしたわよ。',en:"Old — country, wild-berry often-picked, jam.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'タラの干物、年末、お歳暮で、よくいただいたな、覚えてる?',en:"Cod-dried — year-end gift, often-received, remember?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'孫が、兎、飼いたいって、お父さんに、頼んでいたわよ、先週。',en:"Grandkid — rabbit keep-want, Dad-asked, last week.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'瀬戸内海のフェリー、新婚旅行で、乗ったよな、二人で、ばあさん。',en:"Setonaikai ferry — honeymoon-boarded, two, gran.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃のあなた、朝のランニング、毎日、続けていたわよね、本当に。',en:"Youth-you — morning running, daily-continued, really.",style:'Tender close.'},
  ]},
  {id:'conv_06800',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan menus',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、マラソンランナー応援イベント、店で、開催しよか。',en:"Aoi — runner-cheer event, store-host?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。クラシックの夜、ピアノ協奏曲、流すのは、いかがでしょう?',en:"Yes. Classical night — piano concerto play, how?",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'夏限定、イエローの食器、季節感、出せると、ええで。',en:"Summer-limited — yellow tableware, season-feel, good.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。新作のベリータルト、お客様、ご好評です、私、嬉しい。',en:"Yes. New berry-tart — cust favorable, glad.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'秋メニューに、北欧風タラのスープ、出そかと思てるんや。',en:"Autumn menu — Nordic cod-soup, out planning.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。イースターの時期、兎キャラを使ったプロモ、面白そうですね。',en:"Yes. Easter — rabbit-char promo, fun.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'仕入れ、北海道産、フェリーで、運んでもらえるんやで、葵さん。',en:"Sourcing — Hokkaido, ferry-shipped, Aoi.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。ランニング後のお客様、入りやすい雰囲気、作りたいですね、店内。',en:"Yes. Post-running cust — easy-enter air want, interior.",style:'Warm close.'},
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

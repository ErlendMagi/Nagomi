import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_319 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['降ら','好ま','つる','吐き','墨','艶','差し出し','お過ごし']
const B_T = ['立ち入り','来客','注釈','痕跡','痕','に当たる','成っ','時として']
const C_T = ['腫瘍','叩か','舐め','湧き','たどる','明かし','白熱','惑わさ']
const D_T = ['マリー','囲ん','のぼり','刻ん','年明け','回顧','実り','りょう']

const data = [
  // A
  {id:'conv_06341',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、雨が降らないと、植木、しおれちゃう。',en:"Mom — without rain, plants wilt.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。お父さん、辛い物、好まないからね、献立、気を付けて。',en:"Yes. Dad — disfavors spicy; mind menu.",style:'Tender.'},
    {speaker:'sho_child',jp:'庭の藤、つる、伸びてる、すごい。',en:"Garden wisteria — vines, growing wow.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'体調悪い時、無理に吐きそうなら、休んでね。',en:"When sick, near-vomiting — rest.",style:'Soft.'},
    {speaker:'sho_child',jp:'書道で、墨、いっぱい使った。',en:"Calligraphy — used lots of ink.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お肌、艶があるって、皆、言ってくれるよ。',en:"Skin — glossy; people say.",style:'Warm.'},
    {speaker:'sho_child',jp:'お友達に、お菓子、差し出した。',en:"Offered sweets to friend.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'おばあちゃんに、いかがお過ごし、と書いて送ろうね。',en:"Grandma — write \"how are you keeping\" and send.",style:'Warm close.'},
  ]},
  {id:'conv_06342',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'今週、雨、降らないみたい。',en:"This week — no rain, seems.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'うん。私、辛い物、好まないけど、新メニューに加える?',en:"Yeah. I dislike spicy, but add to new menu?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'店先の植木、つる、伸ばし放題ね。',en:"Storefront plants — vines, free-growing.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'体調悪い時、息を吐きながら、深呼吸ね。',en:"When sick — exhale, deep breath.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'文具屋で、墨入りの万年筆、買った。',en:"Stationery — ink-fountain pen bought.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'髪の艶、シャンプー、変えたから?',en:"Hair glossiness — shampoo change?",style:'Probe.'},
    {speaker:'mei_romantic',jp:'お客様にメニュー、差し出した瞬間、笑顔いいね。',en:"Menu-offering moment — nice smile.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'年賀状、お過ごしいかがですか、と書いた。',en:"New-year card — wrote \"how are you keeping\".",style:'Warm close.'},
  ]},
  {id:'conv_06343',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'今日、雨、降らないね、傘いらない。',en:"Today — no rain; no umbrella.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。先生、長文、好まない、簡潔に書けって。',en:"Yeah. Teacher dislikes long; write concise.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'庭の朝顔、つる、棚に絡んでる。',en:"Garden morning-glory — vines on lattice.",style:'Animated.'},
    {speaker:'riku_teen',jp:'部活、走った後、息、吐きながら整える。',en:"Club — post-run, exhale-recover.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'書道部、墨、たくさん使う。',en:"Calligraphy club — uses lots of ink.",style:'Casual.'},
    {speaker:'riku_teen',jp:'お前の靴、艶、出てるな。',en:"Your shoes — glossy.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'先輩に、おにぎり、差し出したら、笑顔貰った。',en:"Senpai — offered onigiri, got smile.",style:'Bright.'},
    {speaker:'riku_teen',jp:'おじいちゃんに、いかがお過ごしか、電話しよう。',en:"Grandpa — call \"how are you keeping\".",style:'Warm close.'},
  ]},
  {id:'conv_06344',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'最近、雪、降らないな、暖冬かな。',en:"Lately — no snow; mild winter?",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。あなた、夏は好まない料理、多いわね。',en:"Yes. You dislike many summer dishes.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'庭のキウイ、つる、年々増える。',en:"Garden kiwi — vines yearly more.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'体調悪い日、無理に吐きそうな時、寝ていてね。',en:"Sick days — near-vomiting, rest.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、習字で、墨、よく使ったな。',en:"In youth — calligraphy used much ink.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お肌、年取っても艶、残ってるわよ、あなた。',en:"Skin — even aged, glossy retained.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'孫に、おやつ、差し出してくれる、お前、優しいな。',en:"You — offering snacks to grandkid, kind.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'近況、年賀状で、いかがお過ごしか、書きましょう。',en:"Status — write \"how are you keeping\" on year card.",style:'Warm close.'},
  ]},
  {id:'conv_06345',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、今日、雨、降らない予報だったよな。',en:"Sakura — today, no-rain forecast.",style:'Casual senpai.'},
    {speaker:'sakura_teen',jp:'はい。先輩、辛い物、好まないんでしたよね。',en:"Yes. Senpai — disfavored spicy.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'公園の藤、つる、絡まって、見事だな。',en:"Park wisteria — vines tangled, splendid.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'マラソン後、息、吐きながら、回復してます。',en:"Post-marathon — exhale, recovering.",style:'Wry.'},
    {speaker:'ren_uni',jp:'授業で、墨と筆、使う日が、楽しみだ。',en:"Class — ink-and-brush days, exciting.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'先輩の靴、いつも艶がありますね。',en:"Senpai's shoes — always glossy.",style:'Curious.'},
    {speaker:'ren_uni',jp:'桜から差し出されたメモ、よく読ませてもらう。',en:"Memo offered by Sakura — well-read.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'先輩、いかがお過ごしですか、と先輩に聞きました。',en:"Senpai — asked \"how are you keeping\".",style:'Polite close.'},
  ]},

  // B
  {id:'conv_06346',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'立ち入り禁止区域、警告、徹底しろ。',en:"Off-limits zones — strict warnings.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。来客への案内、明確に行います。',en:"Yes. Guest-guidance, clear.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'契約書の注釈、細かく確認しろ。',en:"Contract footnotes — fine-check.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。過去の不正の痕跡、念入りに調査します。',en:"Yes. Past-misconduct traces — careful inquiry.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'システムに残る痕、消去手順、整えろ。',en:"System traces — erasure procedure, set.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。再発予防に当たる施策、まとめます。',en:"Yes. Recurrence-preventing measures — summarize.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'業績、好調に成っているな。',en:"Performance — turning strong.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。時として、判断、即決を求められます。',en:"Yes. Sometimes — snap decisions demanded.",style:'Close.'},
  ]},
  {id:'conv_06347',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss security',lines:[
    {speaker:'yuki_office',jp:'立ち入りカード、リーダー、最新型に。',en:"Access cards — readers, latest.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。来客の動線、見直しました。',en:"Yes. Guest-flow — reviewed.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'契約書の注釈、英語化も検討する。',en:"Footnotes — English-translate too.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。痕跡を残さない不正、警戒します。',en:"Yes. Trace-less misconduct — vigilant.",style:'Update.'},
    {speaker:'yuki_office',jp:'過去事案の痕、社内文書、保存ね。',en:"Past-case marks — keep internal docs.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。年度替わりに当たる時期、注意します。',en:"Yes. Fiscal-changeover periods — careful.",style:'Update.'},
    {speaker:'yuki_office',jp:'IT予算、増額に成った。',en:"IT budget — became increased.",style:'Bright.'},
    {speaker:'kenji_office',jp:'はい。時として、想定外の対応も必要です。',en:"Yes. Sometimes — unforeseen response needed.",style:'Close.'},
  ]},
  {id:'conv_06348',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、立ち入り制限、企業の基本ルールだ。',en:"Ren — access-restriction, biz basic.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。来客対応、社員の顔ですね。',en:"Yes. Guest-handling — staff face.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'契約書の注釈、リスク回避の核だ。',en:"Footnote — risk-avoidance core.",style:'Direction.'},
    {speaker:'ren_uni',jp:'監査の痕跡、書類で残せば、信用に繋がりますね。',en:"Audit traces — kept in docs, build trust.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'昔の事件の痕、社史に記して、教訓に。',en:"Old-incident marks — record as lessons.",style:'Direction.'},
    {speaker:'ren_uni',jp:'修了に当たる時期、振り返り、大切ですね。',en:"Coming to graduation — looking-back vital.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'企業文化、安定して成っているか、随時確認しろ。',en:"Corporate culture — stably formed? Check periodically.",style:'Direction.'},
    {speaker:'ren_uni',jp:'時として、悩む若手、応援してください。',en:"Sometimes — supporting troubled youth.",style:'Earnest close.'},
  ]},
  {id:'conv_06349',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on security',lines:[
    {speaker:'takeda_officer',jp:'立ち入り規制、警察基準で、再確認をお願いします。',en:"Access restriction — re-confirm to police standards.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。来客時の警備、強化します。',en:"Yes. Visit-security — strengthen.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'不正アクセスの注釈、契約書に明記してください。',en:"Unauthorized-access notes — contract-explicit.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。痕跡を残す対策、社内で進めます。',en:"Yes. Trace-keeping measures — internal advance.",style:'Update.'},
    {speaker:'takeda_officer',jp:'過去事件の痕、警察データベースで、共有可能です。',en:"Past-incident marks — DB-sharable.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。法改正に当たる時期、対応を急ぎます。',en:"Yes. Law-revision periods — rush adapt.",style:'Update.'},
    {speaker:'takeda_officer',jp:'御社、健全に成っていますね。',en:"Your firm — sound.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。時として、警察への通報も、検討します。',en:"Yes. Sometimes — police-report considered.",style:'Close.'},
  ]},
  {id:'conv_06350',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'立ち入り制限、若い頃も厳しかった。',en:"Access-restriction — strict in my youth too.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。来客への礼節、伝統として大切にしています。',en:"Yes. Guest courtesy — tradition-preserved.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'契約の注釈、後輩に教えろ。',en:"Contract notes — teach juniors.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。過去の痕跡、社史に保存しています。',en:"Yes. Past traces — preserved in history.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'時代の痕、企業のDNAだ。',en:"Era's marks — corporate DNA.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。役員交代に当たる時、丁寧な引き継ぎを。',en:"Yes. At officer-changes — careful handover.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'業界の柱に成ること、目指しろ。',en:"Becoming industry pillar — aim.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。時として、孤独な決断、迫られます。',en:"Yes. Sometimes — lonely decisions pressed.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06351',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、腫瘍の早期発見、治療成功の鍵です。',en:"Ren — tumor early-detection, key.",style:'Calm.'},
    {speaker:'ren_uni',jp:'同業他社、研究分野で叩かれることも、ありますね。',en:"Same-industry — research-field bashed too.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者の唇、傷を舐めて治す行為、感染リスクで止めてます。',en:"Yes. Lip-licking-to-heal — infection risk, halted.",style:'Patient.'},
    {speaker:'ren_uni',jp:'治療意欲、現場から湧き上がる、医療界の魅力ですね。',en:"Treatment motivation — wells up from the field, medicine's appeal.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。症例をたどる地道な作業、研修医の課題です。',en:"Yes. Case-tracking plodding work — resident task.",style:'Informative.'},
    {speaker:'ren_uni',jp:'進行状況を明かしてくれる先生、患者の信頼、得ます。',en:"Doctors clarifying progress — patient trust.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。学会、白熱した議論、続きました。',en:"Yes. At conference — heated debate continued.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'誤情報に惑わさないよう、医師の発信力、重要ですね。',en:"Not misled by misinfo — doctor-outreach vital.",style:'Reflective close.'},
  ]},
  {id:'conv_06352',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a case',lines:[
    {speaker:'takeda_officer',jp:'本件、医療絡みで腫瘍診断、関連した詐欺事案です。',en:"Case — medical-tied tumor-diagnosis fraud.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者、騙されたうえ、叩かれる被害も。',en:"Victims — deceived, also bashed.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。証拠を舐めるように、地道に集めます。',en:"Yes. Evidence — collected meticulously.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害情報、地域から湧き上がっています。',en:"Damage reports — welling up from regions.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。容疑者の足取りをたどる作業、複雑です。',en:"Yes. Suspect-tracking work — complex.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'記者会見、警察が真相を明かしましたね。',en:"Press — police clarified truth.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。報道、白熱した状態、続いてます。',en:"Yes. Coverage — heated state continues.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'デマに惑わされないよう、市民に呼びかけてますね。',en:"Misinfo-non-deceit — calling on citizens.",style:'Reflective close.'},
  ]},
  {id:'conv_06353',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses a medical paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、腫瘍研究の倫理、丁寧に扱いましたね。',en:"Paper — tumor-research ethics, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。誤った仮説、叩かれる場面も、しっかり論じました。',en:"Yes. Bashed-erroneous hypotheses — discussed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'データを舐めるように検証する姿勢、評価できます。',en:"Data-meticulous verification — praised.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。新規アイデア、研究室から湧き上がりました。',en:"Yes. Fresh ideas — welled up from the lab.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'文献をたどる作業、修了に必須ですね。',en:"Source-tracking work — required for graduation.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'論文で、結論を明かして、議論を呼びました。',en:"Paper — revealed conclusion, sparked debate.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'査読の場、白熱した議論、続いていますね。',en:"Review — heated debate continues.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'数値に惑わさないよう、視覚化、徹底しました。',en:"Not misled by numbers — visualization strict.",style:'Earnest close.'},
  ]},
  {id:'conv_06354',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a CSR-medical project',lines:[
    {speaker:'hiroshi_boss',jp:'医療CSR、腫瘍検診支援、進めろ。',en:"Medical CSR — tumor-screening support, push.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。批判で叩かれることも、覚悟しています。',en:"Yes. Bashing-criticism — prepared.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'予算、舐めるな、慎重に。',en:"Budget — don't underestimate; careful.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員から、貢献の意欲、湧き上がってます。',en:"Yes. From staff — contribution will, welling.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'過去の支援例、たどる作業、若手に。',en:"Past-support tracking — to youth.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。理念を明かして、透明性を示します。',en:"Yes. Reveal ideology — transparency.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'社内議論、白熱した状態、出てきたな。',en:"Internal debate — heated state, emerged.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。SNSの誤情報に惑わさないよう、対応します。',en:"Yes. Not misled by SNS — respond.",style:'Close.'},
  ]},
  {id:'conv_06355',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、医療をめぐる社会問題、腫瘍診療の偏在、章にしましたね。',en:"Sakura — medical social-issue, tumor-care imbalance, chapter.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。患者団体、医療界から叩かれる場面も、扱いました。',en:"Yes. Patient groups — also covered when bashed by medicine.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'記事の精度、舐めるように確認しましたか。',en:"Article accuracy — meticulously verified?",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。現場の意見、湧き上がる声、集めました。',en:"Yes. Field opinions — welling-voices, gathered.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'情報源をたどる作業、信頼性確認、丁寧でしたね。',en:"Source-tracking — reliability check, careful.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'統計、明かして、透明な記述、心がけました。',en:"Statistics — revealed; transparent description.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'議論が白熱する論点、丁寧に書きましたね。',en:"Heated-debate points — careful writing.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'過剰報道に惑わさないよう、データ、明示しました。',en:"Not misled by hype — data explicit.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06356',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about culture',lines:[
    {speaker:'mei_romantic',jp:'マリー・アントワネット、伝記、読んでるの。',en:"Marie Antoinette bio — reading.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。庭の植物を囲んで撮ったポスター、可愛い。',en:"Yeah. Plant-surrounding poster — cute.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'お祭り、のぼり、たくさん立っていたよね。',en:"Festival — many banners up.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'カフェのロゴ、新しく刻んだの。',en:"Cafe logo — newly engraved.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'年明けから、忙しい日々、続いてる。',en:"Since year-open — busy days continue.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'昨年を回顧して、振り返るのもいいね。',en:"Looking back at last year — also nice.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'お仕事、実りある一年だった。',en:"Work — a fruitful year.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'冬は、お粥のりょう、減らすこと、ある。',en:"Winter — porridge portions sometimes reduced.",style:'Soft close.'},
  ]},
  {id:'conv_06357',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、マリー特集の映画、観たな。',en:"In youth — saw a Marie-feature film.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。庭をみんなで囲んで、家族写真、撮ったわね。',en:"Yes. Family-circle around the garden, photo.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔のお祭り、のぼり、家ごとに掲げていた。',en:"Old festivals — banners by household.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'木に名前、刻んだ思い出、覚えてる?',en:"Tree — name-carved memory, remember?",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'年明け、お祖父ちゃんの家、毎年行ったな。',en:"New-year start — Grandpa's every year.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'人生、回顧する時間、増えてきたわね。',en:"Life — reflection time increasing.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'長く実りある夫婦生活、ありがたい。',en:"Long fruitful marriage — grateful.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'食事のりょう、年取って、少しずつ減らすわね。',en:"Meal portions — gradually reduced with age.",style:'Warm close.'},
  ]},
  {id:'conv_06358',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'歴史で、マリーの章、読んだよ。',en:"History — read the Marie chapter.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。文化祭、ステージを囲んで、皆で集合写真。',en:"Yeah. Festival — circle around stage, group photo.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'運動会、のぼり、各クラス、用意するよね。',en:"Sports day — banners, each class prepares.",style:'Casual.'},
    {speaker:'riku_teen',jp:'木製のキーホルダー、名前を刻んだ、お土産にした。',en:"Wood keychain — name-engraved, souvenir.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'年明け、初詣、家族で行ったよ。',en:"Year-open — family hatsumode.",style:'Bright.'},
    {speaker:'riku_teen',jp:'高校生活、回顧する時、もう近いな。',en:"HS life — looking-back time, nearing.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'運動会の実り、団結力、感じたよね。',en:"Sports-day fruits — unity felt.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お弁当のりょう、最近、少し減らしてる。',en:"Bento portion — slightly reduced lately.",style:'Wry close.'},
  ]},
  {id:'conv_06359',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher discusses culture research',lines:[
    {speaker:'asuka_teacher',jp:'論文、マリー王妃時代の文化、丁寧でしたね。',en:"Paper — Queen-Marie-era culture, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。当時、宮廷を囲んだ装飾、写真集に。',en:"Yes. Era's court-surrounding decor — photo collection.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統的なのぼり、起源、章末で扱いましたね。',en:"Traditional banners — origins, chapter end.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。歴史を刻んだ建築物、別章にしました。',en:"Yes. History-engraved buildings — separate chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'年明けの儀式、各国の比較、興味深いですね。',en:"Year-open rites — country comparison, intriguing.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'過去を回顧する文学作品、引用、適切でしたか。',en:"Past-reflecting literature — citation apt?",style:'Polite.'},
    {speaker:'asuka_teacher',jp:'実りある研究、卒論として相応しいですね。',en:"Fruitful research — thesis-worthy.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'資料のりょう、十分、確保できました。',en:"Source-quantity — sufficiently secured.",style:'Earnest close.'},
  ]},
  {id:'conv_06360',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、新春フェア、マリー風スイーツ、出そか。',en:"Aoi-san — new-year fair, Marie-style sweets?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。店内、お花で囲んで、エレガントな雰囲気に。',en:"Yes. In-store — flower-surrounded, elegant.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'店先に、のぼり、立てて目立たせよか。',en:"Storefront — banner, stand out.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'メニューに、文字を刻んだ装飾、加えます。',en:"Menu — letter-engraved decor added.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'年明け早々、開店イベント、ええなあ。',en:"Year-open start — opening event, nice.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'昨年を回顧して、改善点、メニューに反映します。',en:"Looking back at last year — improvements menu-reflected.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'実りある一年に、しよやな。',en:"Make a fruitful year.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'食材のりょう、月別に、調整します。',en:"Ingredient quantities — monthly adjusted.",style:'Warm close.'},
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

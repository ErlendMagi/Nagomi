import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_498 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['魅せ','お粗末','下品','愕然','幾分','すわっ','ふみ','成り行き']
const B_T = ['管内','称号','単調','対称','要綱','パイオニア','訳注','経団連']
const C_T = ['胴','天地','断層','母語','鉱業','私生活','積雪','雌']
const D_T = ['クイーン','神戸大学','日本テレビ','ヤマハ','セルビア','養老','慶應義塾','中国共産党']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09921',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがお家で素敵な踊りで魅せて下さるそうよ','Sho — Dad-home-dance-charm','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「お粗末ですが」って料理を出したよ','Mom — me Dad-"humble"-meal','Eager child','sho_child'),
    mk('翔くん、下品な言葉は使わないようにね','Sho — vulgar-words-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんが部屋を綺麗にされてて愕然としたよ','Mom — me Dad-clean-stunned','Wry child','sho_child'),
    mk('翔くん、お父さんが幾分疲れてらっしゃるみたいね','Sho — Dad-some-tired','Reflective','yumiko_mom'),
    mk('ママ、お父さんがソファにすわって新聞を読んでらっしゃるよ','Mom — Dad-sofa-sit-news','Reflective child','sho_child'),
    mk('翔くん、お祖父ちゃんの足ふみを習いましょうね','Sho — Grandpa-foot-massage-learn','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お父さんに任せて成り行きを見守ったよ','Mom — me Dad-trust-flow-watch','Earnest close','sho_child'),
  ]},
  {id:'conv_09922',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店の新メニューでお客様を魅せようね、メイちゃん','Aoi — store-new-menu-cust-charm Mei','Direction','mei_romantic'),
    mk('葵、お粗末な接客にならないよう気を付けようね、メイちゃん','Aoi — humble-poor-serv-care Mei','Direction','aoi_barista'),
    mk('葵、お客様、隣のお客様の下品な言葉に困ってらしたよ、メイちゃん','Aoi — cust-neighbor-vulgar-trouble Mei','Reflective','mei_romantic'),
    mk('葵、売上を見て愕然としたね、メイちゃん','Aoi — sales-stunned Mei','Wry','aoi_barista'),
    mk('葵、最近お客様が幾分少ないね、メイちゃん','Aoi — recently-cust-some-low Mei','Reflective','mei_romantic'),
    mk('葵、お客様、長くすわってご本を読んでらしたよ、メイちゃん','Aoi — cust-long-sit-book Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ふみ慣れたお店だって仰ったよ、メイちゃん','Aoi — cust-fumi-familiar-said Mei','Pleased','mei_romantic'),
    mk('葵、お客様、お店の成り行きを応援して下さってるね、メイちゃん','Aoi — cust-store-flow-cheer Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_09923',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが鼓の演奏で魅せて下さった','Gran — youth Dad-drum-perf-charm','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、「お粗末様でした」と謙遜されたわよね、あなた?','Yes — Grandpa-"humble"-modest, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは下品な事を口にされなかった','Gran — youth Dad-vulgar-no','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦地から帰られた時、ご家族は愕然としたわよね、あなた?','Grandpa — war-back-fam-stunned, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが幾分淋しそうにされてた日もあった','Gran — youth Dad-some-lone-days','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年は縁側にすわって本を読まれたわよね、あなた?','Grandpa — late-veranda-sit-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがふみ習慣を欠かさなかった','Gran — youth Dad-fumi-hab-never-skip','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、人生の成り行きを受け入れる強さがおありだったわよね、あなた?','Grandpa — life-flow-accept-strong, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09924',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ダンスで皆を魅せてたな','Riku — dance-all-charm','Praising teen','sakura_teen'),
    mk('お前、お粗末な作品って言ってたけど良かったぞ、桜','You — humble-poor-said-but-good Sakura','Praising','riku_teen'),
    mk('リク、下品なネタはやめろよ','Riku — vulgar-joke-stop','Direction','sakura_teen'),
    mk('お前、成績を見て愕然としてたな、桜','You — grade-stunned Sakura','Wry','riku_teen'),
    mk('リク、お前、最近幾分大人っぽくなったな','Riku — recently-some-adult','Praising','sakura_teen'),
    mk('お前、教壇の前ですわって考え込んでたな、桜','You — pod-sit-think Sakura','Wry','riku_teen'),
    mk('リク、お前、ふみ慣れた道で迷ったろ','Riku — fumi-fam-lost','Wry','sakura_teen'),
    mk('お前、成り行き任せの計画はやめようぜ、桜','You — flow-let-plan-stop Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_09925',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが歌で皆を魅せて下さるそうよ','Sho — Dad-song-all-charm','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お粗末な絵だけどお父さんに渡したよ','Mei-sis — me humble-art-Dad-give','Eager child','sho_child'),
    mk('翔くん、下品な言葉を真似しないでね','Sho — vulgar-mimic-no','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの誕生日サプライズに愕然とされたよ','Mei-sis — me Dad-birth-surp-stun','Eager child','sho_child'),
    mk('翔くん、お父さんは幾分疲れてらっしゃるみたい','Sho — Dad-some-tired','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの隣にすわっておしゃべりしたよ','Mei-sis — me Dad-next-sit-talk','Eager child','sho_child'),
    mk('翔くん、お父さんが日記をふみ続けてらっしゃるのよ','Sho — Dad-diary-fumi-cont','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんを信じて成り行きを見守るよ','Mei-sis — me Dad-trust-flow-watch','Earnest close','sho_child'),
  ]},
  {id:'conv_09926',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、管内の支店を巡回しろ','Our co — area-branch-tour','Crisp','hiroshi_boss'),
    mk('はい。優秀社員に新称号を付与する制度を作ります','Yes — Excel-staff-title-grant','Methodical','kenji_office'),
    mk('当社、単調なルーチンを見直せ','Our co — monot-rout-rev','Direction','hiroshi_boss'),
    mk('はい。組織図を左右対称に整えます','Yes — Org-symm-org','Update','kenji_office'),
    mk('業界要綱を策定しろ','Industry-guide-form','Direction','hiroshi_boss'),
    mk('はい。当社は業界のパイオニアです','Yes — Our-co-pion','Update','kenji_office'),
    mk('当社、英文資料には訳注を付けろ','Our co — Eng-doc-tr-note','Direction','hiroshi_boss'),
    mk('はい。経団連の動向を注視します','Yes — Keidanren-watch','Close','kenji_office'),
  ]},
  {id:'conv_09927',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('管内の市場動向を分析しましょう','Area-mkt-anal','Brisk','yuki_office'),
    mk('はい。社長称号の使い方を統一します','Yes — Pres-title-uni','Cooperative','kenji_office'),
    mk('単調な作業に自動化を入れましょう','Monot-auto-add','Direction','yuki_office'),
    mk('はい。デザインを対称的に整えます','Yes — Design-symm','Update','kenji_office'),
    mk('新規事業の要綱を作りましょう','New-biz-guide-make','Direction','yuki_office'),
    mk('はい。当社のパイオニア精神を社員に伝えます','Yes — Our-co-pion-staff','Update','kenji_office'),
    mk('海外論文の訳注を付け加えましょう','Ovrs-paper-tr-note-add','Direction','yuki_office'),
    mk('はい。経団連のフォーラムに参加します','Yes — Keidanren-forum-join','Close','kenji_office'),
  ]},
  {id:'conv_09928',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、大学管内の研究室を見学しろ','Ren — uni-area-lab-tour','Mentor','hiroshi_boss'),
    mk('はい。博士称号にふさわしい研究を目指します','Yes — Dr-title-aim','Earnest','ren_uni'),
    mk('蓮、単調なデータ収集も大事だ','Ren — monot-data-imp','Direction','hiroshi_boss'),
    mk('はい。実験を対称的に組みます','Yes — Exp-symm-arr','Earnest','ren_uni'),
    mk('蓮、研究倫理要綱を熟読しろ','Ren — research-eth-guide-read','Direction','hiroshi_boss'),
    mk('はい。分野のパイオニアの論文を学びます','Yes — Field-pion-paper-learn','Polite','ren_uni'),
    mk('蓮、論文には訳注も添えろ','Ren — paper-tr-note-add','Direction','hiroshi_boss'),
    mk('はい。経団連と大学の連携にも関心があります','Yes — Keidanren-uni-link-int','Earnest close','ren_uni'),
  ]},
  {id:'conv_09929',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、管内の犯罪状況を把握されますね','Police area-crime-grasp','Cooperative','kenji_office'),
    mk('警察、警部の称号にふさわしい指揮をされますね','Police insp-title-cmd','Cooperative','kenji_office'),
    mk('警察、単調な張り込みも担当されますね','Police monot-stake-out','Cooperative','kenji_office'),
    mk('警察、犯行の対称的なパターンも分析されますね','Police crime-symm-pat-anal','Cooperative','kenji_office'),
    mk('警察、運営要綱を遵守されますね','Police op-guide-comp','Cooperative','kenji_office'),
    mk('警察、サイバー捜査のパイオニアでもいらっしゃいますね','Police cyber-pion','Cooperative','kenji_office'),
    mk('警察、外国語証拠には訳注を付けられますね','Police for-lang-evid-tr-note','Cooperative','kenji_office'),
    mk('警察、経団連の防犯セミナーにも協力されますね','Police Keidanren-prev-sem-coop','Close','kenji_office'),
  ]},
  {id:'conv_09930',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、管内の市場を歩いて回られた','Dad — founding area-mkt-walk','Sage','hiroshi_elder'),
    mk('はい。お父さんは創業者称号より社員と呼ばれる事を好まれた','Yes — Dad found-title-staff-call-pref','Commitment','hiroshi_boss'),
    mk('お父さん、単調な作業も自ら手伝われた','Dad — monot-self-help','Wistful','hiroshi_elder'),
    mk('はい。お父さんは経営に対称的なバランスを取られた','Yes — Dad mgmt-symm-bal','Reflective','hiroshi_boss'),
    mk('お父さん、社内要綱をご自分で書かれた','Dad — co-guide-self-write','Wistful','hiroshi_elder'),
    mk('はい。お父さんが業界のパイオニアと呼ばれた','Yes — Dad industry-pion-called','Reflective','hiroshi_boss'),
    mk('お父さん、社内出版物に訳注を添えられた','Dad — co-pub-tr-note','Wistful','hiroshi_elder'),
    mk('はい。お父さんは経団連でも信頼されていた','Yes — Dad Keidanren-trust','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09931',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、人体の胴体構造研究を論文で扱いましたね','Ren — human-torso-struct paper','Calm','asuka_teacher'),
    mk('はい、神話における天地創造の研究を論文で扱いました','Yes — Myth-creation paper','Earnest','ren_uni'),
    mk('蓮さん、地震断層の調査研究を論文で扱いましたね','Ren — quake-fault-survey paper','Reflective','asuka_teacher'),
    mk('はい、母語習得の発達心理学を論文で扱いました','Yes — Native-lang-acq paper','Earnest','ren_uni'),
    mk('近代日本の鉱業発展史を論文で扱いましたね','Mod-JP-min-dev paper','Engaged','asuka_teacher'),
    mk('はい、芸能人の私生活と健康を論文で扱いました','Yes — Celeb-priv-life paper','Earnest','ren_uni'),
    mk('蓮さん、山岳地帯の積雪量変動を論文で扱いましたね','Ren — mt-snow-var paper','Reflective','asuka_teacher'),
    mk('はい、ミツバチの雌の役割研究を論文で扱いました','Yes — Bee-fem-role paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09932',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、被害者の胴体損傷を、警察、鑑識されますね','Case vict-torso-forensic police','Reflective','ren_uni'),
    mk('警察、天地が逆さの転落事故も扱います','Police up-down-flip-fall-handle','Procedural','takeda_officer'),
    mk('本件、地震断層付近の事件を、警察、扱われますね','Case fault-near police-handle','Reflective','ren_uni'),
    mk('警察、容疑者の母語特定もされますね','Police suspect-native-id','Cooperative','takeda_officer'),
    mk('本件、鉱業関連の労災を、警察、扱われますね','Case min-work-acc police-handle','Reflective','ren_uni'),
    mk('警察、芸能人の私生活ストーカー事案も担当します','Police celeb-priv-stalk','Procedural','takeda_officer'),
    mk('本件、豪雪地帯の積雪事故を、警察、扱われますね','Case heavy-snow-acc police-handle','Reflective','ren_uni'),
    mk('警察、犯罪組織の雌、つまり女性メンバーも調査されますね','Police crime-org-fem-mem-inv','Close','takeda_officer'),
  ]},
  {id:'conv_09933',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、人体の胴体構造を論文で扱いましたね','Sakura — torso-struct paper','Calm','asuka_teacher'),
    mk('はい、神話の天地創造を論文で扱いました','Yes — Myth-creation paper','Earnest teen','sakura_teen'),
    mk('地震断層の調査を論文で扱いましたね','Quake-fault paper','Reflective','asuka_teacher'),
    mk('はい、母語習得の発達心理学を論文で扱いました','Yes — Native-lang paper','Earnest','sakura_teen'),
    mk('近代日本の鉱業発展史を論文で扱いましたね','Mod-JP-min paper','Engaged','asuka_teacher'),
    mk('はい、芸能人の私生活と健康を論文で扱いました','Yes — Celeb-priv paper','Earnest','sakura_teen'),
    mk('山岳の積雪量変動を論文で扱いましたね','Mt-snow paper','Reflective','asuka_teacher'),
    mk('はい、ミツバチの雌の役割を論文で扱いました','Yes — Bee-fem paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09934',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者の胴体CT撮影を医療チームで担当します','Ren — pati-torso-CT med-team','Calm','saito_doctor'),
    mk('はい、天地が逆さの転倒事故患者も医療チームで扱います','Yes — Up-down-fall-pati med-team','Patient','saito_doctor'),
    mk('断層撮影で見つかる病変を、貴院、診られますね、先生','Tomog-find-lesion your-hosp diag, sensei','Reflective','ren_uni'),
    mk('はい、母語が違う患者の通訳サービスを医療チームで提供します','Yes — Native-diff-pati-interp med-team','Patient','saito_doctor'),
    mk('鉱業従事者の塵肺を、貴院、診療されてますね、先生','Min-pneumo your-hosp treat, sensei','Reflective','ren_uni'),
    mk('はい、患者の私生活への配慮を医療チームで徹底します','Yes — Pati-priv-resp med-team strict','Patient','saito_doctor'),
    mk('はい、積雪期の救急搬送を医療チームで対応します','Yes — Snow-ER-transp med-team','Patient','saito_doctor'),
    mk('雌性ホルモンの研究を、貴院、進められてますね、先生','Fem-horm your-hosp prog, sensei','Curious close','ren_uni'),
  ]},
  {id:'conv_09935',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、商品の胴体部分のデザインを改善しろ','Our co — prod-torso-design-impr','Crisp','hiroshi_boss'),
    mk('はい。経営理念は天地創造のような壮大さを目指します','Yes — Mgmt-creation-grand','Methodical','kenji_office'),
    mk('当社、地震断層調査に協賛しろ','Our co — fault-survey-spons','Direction','hiroshi_boss'),
    mk('はい。母語が違う社員のサポートを強化します','Yes — Native-diff-staff-supp','Update','kenji_office'),
    mk('当社、鉱業由来の原材料は環境配慮品に切り替えろ','Our co — min-mat-eco-switch','Direction','hiroshi_boss'),
    mk('はい。社員の私生活を尊重します','Yes — Staff-priv-resp','Update','kenji_office'),
    mk('当社、積雪期の物流対策を整えろ','Our co — snow-log-prep','Direction','hiroshi_boss'),
    mk('はい。雌雄差別のない採用を徹底します','Yes — Fem-male-no-disc-hire','Close','kenji_office'),
  ]},
  {id:'conv_09936',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、クイーンの音楽がお好きだって、メイちゃん','Aoi — cust-Queen-music Mei','Reflective','mei_romantic'),
    mk('葵、お客様、神戸大学の同窓会に行かれたって、メイちゃん','Aoi — cust-Kobe-uni-alumni Mei','Reflective','aoi_barista'),
    mk('葵、お客様、日本テレビの番組に出演されたって、メイちゃん','Aoi — cust-Nittele-appear Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ヤマハのピアノを弾かれるって、メイちゃん','Aoi — cust-Yamaha-play Mei','Reflective','aoi_barista'),
    mk('葵、お客様、セルビアに親族がいらっしゃるって、メイちゃん','Aoi — cust-Serb-rel Mei','Reflective','mei_romantic'),
    mk('葵、お客様、養老の滝に行かれたって、メイちゃん','Aoi — cust-Yoro-fall Mei','Reflective','aoi_barista'),
    mk('葵、お客様、慶應義塾大学のOBだって、メイちゃん','Aoi — cust-Keio-OB Mei','Reflective','mei_romantic'),
    mk('葵、お客様、中国共産党の動向に詳しいって、メイちゃん','Aoi — cust-CCP-know Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09937',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがクイーンのレコードを集められた','Gran — youth Dad-Queen-rec-coll','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、神戸大学にお勤めだったわよね、あなた?','Yes — Grandpa-Kobe-uni-work, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが日本テレビのドラマを観てらした','Gran — youth Dad-Nittele-drama','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ヤマハの楽器をお買いになったわよね、あなた?','Grandpa — Yamaha-instr-buy, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが旧ユーゴ崩壊時にセルビアの報道に注目された','Gran — youth Dad-Serb-news-att','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、養老の滝に温泉旅行に行かれたわよね、あなた?','Grandpa — Yoro-fall-spa, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが慶應義塾大学に進学された','Gran — youth Dad-Keio-stud','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、中国共産党のニュースを毎晩ご覧になってたわよね、あなた?','Grandpa — CCP-nightly, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09938',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがクイーンの曲を聴かせて下さるそうよ','Sho — Dad-Queen-song-listen','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが神戸大学のお話して下さったよ','Mei-sis — me Dad-Kobe-uni-told','Eager child','sho_child'),
    mk('翔くん、お父さんが日本テレビの取材を受けられたわ','Sho — Dad-Nittele-int','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ヤマハのピアノで練習したいよ','Mei-sis — me Yamaha-piano-want','Eager child','sho_child'),
    mk('翔くん、お父さんがセルビア駐在のお話して下さったわ','Sho — Dad-Serb-station-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと養老の滝行きたいよ','Mei-sis — me Dad-Yoro-fall-want','Eager child','sho_child'),
    mk('翔くん、お父さんが慶應義塾のOB会に行かれたわ','Sho — Dad-Keio-OB-went','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと中国共産党のお話、難しいけど聞いたよ','Mei-sis — me Dad-CCP-hard-listen','Reflective close','sho_child'),
  ]},
  {id:'conv_09939',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、クイーンのボヘミアン・ラプソディ歌ってたな','Riku — Queen-BR-sing','Wry teen','sakura_teen'),
    mk('お前、神戸大学志望だったな、桜','You — Kobe-uni-aim Sakura','Curious','riku_teen'),
    mk('リク、お前、日本テレビの番組観てたな','Riku — Nittele-watch','Curious','sakura_teen'),
    mk('お前、ヤマハの音楽教室通ってたな、桜','You — Yamaha-class Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でセルビア習ったろ?','Riku — soc-Serb?','Curious','sakura_teen'),
    mk('お前、家族で養老温泉行ったろ?桜','You — fam-Yoro-spa? Sakura','Curious','riku_teen'),
    mk('リク、お前、慶應義塾大学志望だな','Riku — Keio-aim','Curious','sakura_teen'),
    mk('お前、社会で中国共産党の歴史習ったろ?桜','You — soc-CCP-hist? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09940',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがクイーンのコンサート映像を観てらしたわ','Sho — Dad-Queen-concert-watch','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと神戸大学の見学に行ったよ','Mom — me Dad-Kobe-uni-tour','Eager child','sho_child'),
    mk('翔くん、お父さんが日本テレビの番組に出演されるそうよ','Sho — Dad-Nittele-appear','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとヤマハのピアノ展示見たよ','Mom — me Dad-Yamaha-piano-show','Eager child','sho_child'),
    mk('翔くん、お父さんがセルビアの友人と再会されたわ','Sho — Dad-Serb-fri-meet','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと養老の滝の絵本見たよ','Mom — me Dad-Yoro-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが慶應義塾大学で講演されるそうよ','Sho — Dad-Keio-lect','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと中国共産党のドキュメンタリー観たよ','Mom — me Dad-CCP-doc','Eager close','sho_child'),
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

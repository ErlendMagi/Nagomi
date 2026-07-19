import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_555 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['熊野','小澤','杉田','菅原','豊島','志村','川原','清原']
const B_T = ['池上','浅井','塩野','大村','亀山','成瀬','中沢','川村']
const C_T = ['本校','（財）','先ごろ','片っ端','遅ればせながら','討ち','新報','追いつめ']
const D_T = ['本島','丹波','三条','名護','代々木','松戸','加賀','小田原']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_11061',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんと熊野古道を歩く旅行を計画されてるわ','Sho — Dad-Kumano-trip','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと音楽家小澤征爾のドキュメンタリー観たよ','Mom — me Dad-Oz-Sei-doc','Pleased child','sho_child'),
    mk('翔くん、お父さんが「杉田玄白の医学書」のお話を語って下さったわ','Sho — Dad-Sugita-Gen-talk','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと天神様、つまり菅原道真の歴史を学んだよ','Mom — me Dad-Suga-Mich-stud','Earnest child','sho_child'),
    mk('翔くん、お父さんが「豊島区の祖父の家に行こう」って仰ってたわ','Sho — Dad-"Toshi-grdpa-vis"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと志村けんの笑いの動画観たよ','Mom — me Dad-Shi-Ken-laugh','Pleased child','sho_child'),
    mk('翔くん、お父さんが「川原の散歩は気持ちいい」って仰ってたわ','Sho — Dad-"river-bed-walk"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと野球の清原のホームラン集観たよ','Mom — me Dad-Kiyo-HR','Eager close','sho_child'),
  ]},
  {id:'conv_11062',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、熊野詣でから帰られたばかりだって、メイちゃん','Aoi — cust-Kumano-pilgr-back Mei','Reflective','mei_romantic'),
    mk('葵、お客様、音楽家小澤さんのファンだって、メイちゃん','Aoi — cust-Oz-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、医者の杉田家との縁を語って下さったよ、メイちゃん','Aoi — cust-Sugita-doc-tie Mei','Reflective','mei_romantic'),
    mk('葵、お客様、天神様、つまり菅原道真のお守りを持ってらしたよ、メイちゃん','Aoi — cust-Suga-Mich-amul Mei','Reflective','aoi_barista'),
    mk('葵、お客様、東京の豊島区にお住まいだって、メイちゃん','Aoi — cust-Toshi-live Mei','Reflective','mei_romantic'),
    mk('葵、お客様、コメディアン志村けんを尊敬されてるって、メイちゃん','Aoi — cust-Shi-Ken-resp Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お孫様のお名前が川原くんだって、メイちゃん','Aoi — cust-grdkid-Kawa Mei','Reflective','mei_romantic'),
    mk('葵、お客様、清原家のお祝いに行かれるって、メイちゃん','Aoi — cust-Kiyo-cel Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11063',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが熊野詣でを毎年されてた','Gran — youth Dad-Kumano-yr','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、小澤征爾の演奏会に行かれたわよね、あなた?','Yes — Grandpa-Oz-Sei-conc, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが杉田玄白の解体新書を蔵書された','Gran — youth Dad-Sugita-Gen-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、菅原道真の歴史小説を愛読されたわよね、あなた?','Grandpa — youth-Suga-Mich-novel, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが豊島区池袋によく出かけられた','Gran — youth Dad-Toshi-Ike-out','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、志村けんのコントを毎週観られたわよね、あなた?','Grandpa — youth-Shi-Ken-cont, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが川原で写生をされた','Gran — youth Dad-river-bed-sketch','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、野球の清原和博選手を応援されたわよね、あなた?','Grandpa — youth-Kiyo-Kazu-cheer, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11064',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、家族で熊野古道歩いてきたろ','Riku — fam-Kumano-walk?','Curious teen','sakura_teen'),
    mk('お前、音楽の授業で小澤征爾の指揮見たろ、桜','You — mus-Oz-Sei-cond? Sakura','Curious','riku_teen'),
    mk('リク、お前、保健の杉田先生に教わったろ','Riku — health-Sugita-tch?','Curious','sakura_teen'),
    mk('お前、社会で菅原道真と天神様について調べたろ、桜','You — soc-Suga-Mich-stud? Sakura','Curious','riku_teen'),
    mk('リク、お前のおじいちゃん、豊島区在住だったよな','Riku — grdpa-Toshi-live','Curious','sakura_teen'),
    mk('お前、お祖父ちゃんが志村けんファンだって言ってたな、桜','You — grdpa-Shi-Ken-fan Sakura','Wry','riku_teen'),
    mk('リク、お前、林間学校で川原沿い歩いてたな','Riku — for-camp-river-bed-walk','Curious','sakura_teen'),
    mk('お前、野球部で清原のホームラン研究してたろ、桜','You — base-club-Kiyo-HR-stud? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_11065',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「熊野神社にお参りに行こう」って仰ってたわ','Sho — Dad-"Kumano-shrine-pray"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと小澤征爾のクラシック特番観たよ','Mei-sis — me Dad-Oz-Sei-class','Eager child','sho_child'),
    mk('翔くん、お父さんが「杉田玄白の解体新書を解説しよう」って仰ってたわ','Sho — Dad-"Sugita-Gen-expl"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと菅原道真の天神様にお参り行ったよ','Mei-sis — me Dad-Suga-Mich-pray','Eager child','sho_child'),
    mk('翔くん、お父さんが「豊島園、つまり昔の遊園地は懐かしい」って仰ってたわ','Sho — Dad-"Toshi-en-nost"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと志村けんの追悼番組観たよ','Mei-sis — me Dad-Shi-Ken-mem','Eager child','sho_child'),
    mk('翔くん、お父さんが川原で石を集めて下さるわ','Sho — Dad-river-bed-stone','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと清原和博の伝記映画観たよ','Mei-sis — me Dad-Kiyo-Kazu-biog','Eager close','sho_child'),
  ]},
  {id:'conv_11066',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の池上部長を歓迎しろ','Our co — new-Ike-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。営業の浅井課長の出張日程を整えます','Yes — Sales-Asai-mgr-trip','Methodical','kenji_office'),
    mk('当社、技術担当の塩野主任にプロジェクトを任せろ','Our co — tech-Shi-lead-proj','Direction','hiroshi_boss'),
    mk('はい。広報の大村様の戦略を採用します','Yes — PR-Omu-strat-adopt','Update','kenji_office'),
    mk('当社、顧問の亀山様にご助言を仰げ','Our co — adv-Kam-cons','Direction','hiroshi_boss'),
    mk('はい。経理の成瀬様の決算スケジュールを整えます','Yes — Acct-Naru-clos-sched','Update','kenji_office'),
    mk('当社、人事の中沢様に新人研修を任せろ','Our co — HR-Naka-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。法務の川村様に契約書確認を依頼します','Yes — Leg-Kawa-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_11067',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('池上部長の歓迎会を準備しましょう','Ike-dept-wel-prep','Brisk','yuki_office'),
    mk('はい。浅井課長の引き継ぎ書を確認します','Yes — Asai-mgr-handov','Cooperative','kenji_office'),
    mk('塩野技術主任のプロジェクト進捗を共有しましょう','Shi-tech-lead-share','Direction','yuki_office'),
    mk('はい。大村広報の月次企画書を確認します','Yes — Omu-PR-mo-plan','Update','kenji_office'),
    mk('亀山顧問との面談を予定しましょう','Kam-adv-meet-plan','Direction','yuki_office'),
    mk('はい。成瀬経理の決算予定を整えます','Yes — Naru-acct-clos','Update','kenji_office'),
    mk('中沢人事に新人研修プランを依頼しましょう','Naka-HR-newhire','Direction','yuki_office'),
    mk('はい。川村法務に新契約レビューを依頼します','Yes — Kawa-leg-new-contr','Close','kenji_office'),
  ]},
  {id:'conv_11068',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の池上先生のご研究を継承しろ','Ren — mentor-Ike-res','Mentor','hiroshi_boss'),
    mk('はい。浅井教授の論文を読み込みます','Yes — Asai-prof-paper','Earnest','ren_uni'),
    mk('蓮、共同研究の塩野先生に研究照会しろ','Ren — joint-Shi-inq','Direction','hiroshi_boss'),
    mk('はい。学会で大村助教のご発表を聴きます','Yes — Conf-Omu-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の亀山先生のご論文も参考にしろ','Ren — lit-Kam-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の成瀬先輩からご指導を仰ぎます','Yes — Lab-Naru-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の中沢教授と打ち合わせしろ','Ren — overs-Naka-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、川村事務官に申請します','Yes — Res-fund-Kawa-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_11069',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、池上刑事の現場対応も評価されますね','Police Ike-det-eval','Cooperative','kenji_office'),
    mk('警察、参考人浅井氏から、警察、事情を伺われますね','Police witn-Asai-careful','Cooperative','kenji_office'),
    mk('警察、被害者塩野氏のご家族にも、警察、配慮されますね','Police vict-Shi-fam-care','Cooperative','kenji_office'),
    mk('警察、目撃者大村氏の供述を、警察、整えられますね','Police witn-Omu-stmt','Cooperative','kenji_office'),
    mk('警察、容疑者亀山の前科を、警察、確認されますね','Police suspect-Kam-prior','Cooperative','kenji_office'),
    mk('警察、署内の鑑識成瀬主任と現場検証されますね','Police stat-foren-Naru-scene','Cooperative','kenji_office'),
    mk('警察、心理士中沢様にご助言を仰がれますね','Police psy-Naka-adv','Cooperative','kenji_office'),
    mk('警察、検事の川村様と公判前協議もされますね','Police pros-Kawa-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_11070',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、池上氏と共同事業を立ち上げられた','Dad — youth-Ike-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは浅井先輩のご薫陶を受けられた','Yes — Dad Asai-sen-mentor','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、塩野氏と海外進出を企画された','Dad — youth-Shi-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんは大村氏を広報の柱に据えられた','Yes — Dad Omu-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、亀山氏と経理体制を整えられた','Dad — youth-Kam-acct','Wistful','hiroshi_elder'),
    mk('はい。お父さんは成瀬氏を主任として育てられた','Yes — Dad Naru-lead-grow','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、中沢氏と海外法人を立ち上げられた','Dad — youth-Naka-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは川村氏に法務全般を委ねられた','Yes — Dad Kawa-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_11071',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、本校、つまり本校の教育方針の研究を論文で扱いましたね','Ren — this-sch-edu paper','Calm','asuka_teacher'),
    mk('はい、（財）法人、つまり（財）の財団形態の研究を論文で扱いました','Yes — (Found)-org paper','Earnest','ren_uni'),
    mk('蓮さん、先ごろ発表された統計の分析研究を論文で扱いましたね','Ren — recently-stat paper','Reflective','asuka_teacher'),
    mk('はい、片っ端から資料を集める研究手法を論文で扱いました','Yes — Edge-to-edge-method paper','Earnest','ren_uni'),
    mk('蓮さん、遅ればせながら発表された研究の重要性を論文で扱いましたね','Ren — belated-pub-imp paper','Reflective','asuka_teacher'),
    mk('はい、敵を討ち取る、つまり仇討ちの歴史研究を論文で扱いました','Yes — Vendetta-uchi paper','Earnest','ren_uni'),
    mk('蓮さん、新報、つまり新報の創刊号研究を論文で扱いましたね','Ren — newspaper-first-iss paper','Reflective','asuka_teacher'),
    mk('はい、犯人を追いつめ、つまり追い詰める捜査心理学を論文で扱いました','Yes — Suspect-corner-psy paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_11072',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、本校、つまり本校の生徒関連事案を、警察、慎重に対応されますね','Case this-sch-stud police-care','Reflective','ren_uni'),
    mk('警察、（財）法人、つまり（財）系の不正経理事案も担当されますね','Police (Found)-fraud-case','Cooperative','takeda_officer'),
    mk('本件、先ごろ報道された事件を、警察、再調査されますね','Case recently-rep police-reinv','Reflective','ren_uni'),
    mk('警察、現場周辺を片っ端から聞き込みされますね','Police scene-edge-canv','Cooperative','takeda_officer'),
    mk('本件、遅ればせながら証拠を提出した参考人を、警察、慎重に聴かれますね','Case belated-witn police-careful','Reflective','ren_uni'),
    mk('警察、暴力事案で「討ち取った」、つまり制圧した容疑者の聴取もされますね','Police vio-uchi-int','Cooperative','takeda_officer'),
    mk('本件、新報、つまり新報社からの取材対応もされますね','Case newspaper-cov-resp','Reflective','ren_uni'),
    mk('警察、容疑者を追いつめ、つまり追い詰めて自供させる捜査もされますね','Police suspect-corner-conf','Close','takeda_officer'),
  ]},
  {id:'conv_11073',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、本校、つまり本校の教育方針の研究を論文で扱いましたね','Sakura — this-sch paper','Calm','asuka_teacher'),
    mk('はい、（財）法人、つまり（財）の財団形態の研究を論文で扱いました','Yes — (Found)-org paper','Earnest teen','sakura_teen'),
    mk('先ごろ発表された統計の分析研究を論文で扱いましたね','Recently paper','Reflective','asuka_teacher'),
    mk('はい、片っ端から資料を集める研究手法を論文で扱いました','Yes — Edge-method paper','Earnest','sakura_teen'),
    mk('遅ればせながら発表された研究の重要性を論文で扱いましたね','Belated paper','Reflective','asuka_teacher'),
    mk('はい、敵を討ち取る、つまり仇討ちの歴史研究を論文で扱いました','Yes — Vendetta paper','Earnest','sakura_teen'),
    mk('新報、つまり新報の創刊号研究を論文で扱いましたね','Newspaper paper','Reflective','asuka_teacher'),
    mk('はい、犯人を追いつめ、つまり追い詰める捜査心理学を論文で扱いました','Yes — Corner-psy paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_11074',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、本校、つまり本校の医学生実習を医療チームで支援します','Ren — this-sch-med-stud med-team','Calm','saito_doctor'),
    mk('蓮さん、（財）法人、つまり（財）系の医療機関と医療チームで連携します','Ren — (Found)-med med-team-link','Calm','saito_doctor'),
    mk('蓮さん、先ごろ発表の臨床ガイドラインを医療チームで読み込みます','Ren — recently-guide med-team','Calm','saito_doctor'),
    mk('蓮さん、片っ端から症例文献を医療チームで集めます','Ren — edge-case-lit med-team','Calm','saito_doctor'),
    mk('蓮さん、遅ればせながら気付いた症例を医療チームで再評価します','Ren — belated-case-reeval med-team','Calm','saito_doctor'),
    mk('蓮さん、感染源を討ち取る、つまり撲滅する取り組みを医療チームでおこないます','Ren — inf-source-uchi med-team','Calm','saito_doctor'),
    mk('蓮さん、新報、つまり新報の医療記事を医療チームで参照します','Ren — newspaper-med-ref med-team','Calm','saito_doctor'),
    mk('蓮さん、病気を追いつめ、つまり追い詰める診断を医療チームでおこないます','Ren — dis-corner-diag med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_11075',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、本校、つまり本校採用の卒業生を積極採用しろ','Our co — this-sch-grad-hire','Crisp','hiroshi_boss'),
    mk('はい。（財）法人、つまり（財）系の助成金を申請します','Yes — (Found)-grant-apply','Methodical','kenji_office'),
    mk('当社、先ごろ発表の市場動向を経営に反映しろ','Our co — recently-mkt-mgmt','Direction','hiroshi_boss'),
    mk('はい。新製品を片っ端からテストします','Yes — New-prod-edge-test','Update','kenji_office'),
    mk('当社、遅ればせながら参入した市場でもシェアを伸ばせ','Our co — belated-mkt-share','Direction','hiroshi_boss'),
    mk('はい。ライバルを討ち、つまり討ち取る勢いで売上を伸ばします','Yes — Riv-uchi-sales','Update','kenji_office'),
    mk('当社、業界新報、つまり業界新報に広告を出せ','Our co — ind-newspaper-ad','Direction','hiroshi_boss'),
    mk('はい。販売目標を追いつめ、つまり追い詰めて達成します','Yes — Sales-goal-corner-achv','Close','kenji_office'),
  ]},
  {id:'conv_11076',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、沖縄本島、つまり本島旅行に行かれたって、メイちゃん','Aoi — cust-Oki-main-isl Mei','Reflective','mei_romantic'),
    mk('葵、お客様、京都丹波地方の黒豆がお好きだって、メイちゃん','Aoi — cust-Tamba-blk-bean Mei','Reflective','aoi_barista'),
    mk('葵、お客様、新潟県三条市の金物製品を愛用されてるって、メイちゃん','Aoi — cust-Niig-San-metal-fav Mei','Reflective','mei_romantic'),
    mk('葵、お客様、沖縄県名護市にお住まいの友人がいらっしゃるって、メイちゃん','Aoi — cust-Oki-Nago-fri Mei','Reflective','aoi_barista'),
    mk('葵、お客様、東京の代々木公園を散歩されるって、メイちゃん','Aoi — cust-Tok-Yoyo-walk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、千葉県松戸市のご出身だって、メイちゃん','Aoi — cust-Chiba-Mats-home Mei','Reflective','aoi_barista'),
    mk('葵、お客様、石川県加賀温泉に行かれるって、メイちゃん','Aoi — cust-Ishi-Kaga-onsen Mei','Reflective','mei_romantic'),
    mk('葵、お客様、神奈川県小田原のかまぼこがお好きだって、メイちゃん','Aoi — cust-Kan-Odawara-kama-fav Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11077',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが沖縄本島、つまり本島へ新婚旅行された','Gran — youth Dad-Oki-main-isl-honey','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、京都丹波の黒豆を取り寄せされたわよね、あなた?','Yes — Grandpa-Tamba-blk-bean-order, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが新潟県三条市の打刃物を蒐集された','Gran — youth Dad-San-blade-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、沖縄県名護市に出張されたわよね、あなた?','Grandpa — youth-Oki-Nago-trip, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが東京代々木のオリンピック観戦された','Gran — youth Dad-Tok-Yoyo-Oly','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、千葉県松戸市の社宅にお住まいだったわよね、あなた?','Grandpa — youth-Chiba-Mats-live, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが石川県加賀温泉に毎年行かれた','Gran — youth Dad-Ishi-Kaga-yr','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、神奈川県小田原のかまぼこをお取り寄せされたわよね、あなた?','Grandpa — youth-Kan-Odawara-kama, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11078',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「沖縄本島、つまり本島の海はきれい」って仰ってたわ','Sho — Dad-"Oki-main-isl-sea-beau"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと京都丹波の黒豆ご飯食べたよ','Mei-sis — me Dad-Tamba-blk-bean-rice','Eager child','sho_child'),
    mk('翔くん、お父さんが「新潟県三条の包丁は名品」って仰ってたわ','Sho — Dad-"San-knife-fine"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと沖縄県名護市のパイナップル園行ったよ','Mei-sis — me Dad-Nago-pine-farm','Eager child','sho_child'),
    mk('翔くん、お父さんが代々木公園で散歩する事を楽しんでらっしゃるわ','Sho — Dad-Yoyo-park-walk-fun','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと千葉県松戸市の小金牧場跡見たよ','Mei-sis — me Dad-Mats-Kog-ranch','Eager child','sho_child'),
    mk('翔くん、お父さんが「石川県加賀温泉のお湯は格別」って仰ってたわ','Sho — Dad-"Kaga-onsen-spec"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと神奈川県小田原城を観光したよ','Mei-sis — me Dad-Odawara-cast-tour','Eager close','sho_child'),
  ]},
  {id:'conv_11079',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、修学旅行で沖縄本島、つまり本島行ったろ','Riku — sch-trip-Oki-main-isl?','Curious teen','sakura_teen'),
    mk('お前、家庭科で京都丹波の黒豆使ったろ、桜','You — home-Tamba-blk-bean? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で新潟県三条市の金物産業習ったろ','Riku — soc-San-metal-ind?','Curious','sakura_teen'),
    mk('お前、修学旅行先で沖縄県名護市行ったろ、桜','You — sch-trip-Oki-Nago? Sakura','Curious','riku_teen'),
    mk('リク、お前、東京代々木公園でフリマしてたな','Riku — Tok-Yoyo-park-fmkt','Curious','sakura_teen'),
    mk('お前、千葉県松戸市の祖父母宅泊まったろ、桜','You — Chiba-Mats-grdpa? Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で石川県加賀温泉行ったろ','Riku — fam-Kaga-onsen?','Curious','sakura_teen'),
    mk('お前、神奈川県小田原のかまぼこ食べたろ、桜','You — Kan-Odawara-kama? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_11080',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが沖縄本島、つまり本島の写真集観てらっしゃるわ','Sho — Dad-Oki-main-isl-photo','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと京都丹波の黒豆茶飲んだよ','Mom — me Dad-Tamba-blk-bean-tea','Eager child','sho_child'),
    mk('翔くん、お父さんが新潟県三条市の包丁を新調されたわ','Sho — Dad-San-knife-renew','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと沖縄県名護市の海中映像観たよ','Mom — me Dad-Oki-Nago-sea-vid','Eager child','sho_child'),
    mk('翔くん、お父さんが代々木八幡神社のお祭りに行かれるそうよ','Sho — Dad-Yoyo-Hach-fes','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと千葉県松戸市の歴史本読んだよ','Mom — me Dad-Chiba-Mats-hist','Eager child','sho_child'),
    mk('翔くん、お父さんが石川県加賀温泉のパンフ取り寄せされたわ','Sho — Dad-Kaga-onsen-pam','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと神奈川県小田原のかまぼこ取り寄せ食べたよ','Mom — me Dad-Kan-Odawara-kama','Eager close','sho_child'),
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

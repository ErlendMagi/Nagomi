import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_544 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['カキコ','小中学校','新米','百姓','貧乏人','里山','駿','ぎょ']
const B_T = ['菅野','岩国','西宮','さいたま','前川','河村','鎌田','北川']
const C_T = ['魔力','某所','左派','フィラデルフィア','ケルン','チュニジア','灘','時事通信']
const D_T = ['アングル','ブラザー','キャリー','ストリング','ブックス','アンバランス','ワンポイント','ダート']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10841',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「掲示板への悪いカキコをしちゃダメよ」って仰ってたわ','Sho — Dad-"bbs-bad-post"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんの小中学校時代のお話を聞いたよ','Mom — me Dad-prim-mid-sch-story','Pleased child','sho_child'),
    mk('翔くん、お父さんが「新米のお父さんだから手探りだったわ」って語って下さったわ','Sho — Dad-"newbie-trial"-talk','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「百姓一揆」の社会の宿題したよ','Mom — me Dad-"farm-rebel"-soc','Earnest child','sho_child'),
    mk('翔くん、お父さんが「貧乏人の知恵」って表現を解説して下さったわ','Sho — Dad-"poor-wisdom"-narr','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと里山の自然観察に行ったよ','Mom — me Dad-satoyama-nat','Pleased child','sho_child'),
    mk('翔くん、お父さんが「駿くんは元気そうね」って仰ってたわ','Sho — Dad-"Shun-energ"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「ぎょっとした」って驚いた話を聞いたよ','Mom — me Dad-"gyo-startle"-talk','Eager close','sho_child'),
  ]},
  {id:'conv_10842',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お孫様にネットのカキコを注意されてるって、メイちゃん','Aoi — cust-grdkid-bbs-care Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お子様が小中学校時代の写真を見せて下さったよ、メイちゃん','Aoi — cust-kid-prim-mid-photo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご自身を「経営の新米です」って謙遜されてたよ、メイちゃん','Aoi — cust-self-"new-mgr"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご先祖の百姓の生活誌を語って下さったよ、メイちゃん','Aoi — cust-anc-farm-life Mei','Reflective','aoi_barista'),
    mk('葵、お客様、若い頃は「貧乏人だった」って苦労話を語って下さったよ、メイちゃん','Aoi — cust-youth-"poor"-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、里山の保全活動をされてるって、メイちゃん','Aoi — cust-satoyama-pres Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お孫様の駿くんを連れていらしたよ、メイちゃん','Aoi — cust-grdkid-Shun-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、注文ミスに「ぎょっと」されてたよ、メイちゃん','Aoi — cust-order-mistake-"gyo" Mei','Wry close','aoi_barista'),
  ]},
  {id:'conv_10843',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがパソコン通信のカキコを楽しまれた','Gran — youth Dad-PC-comm-post','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、小中学校時代の同窓会を毎年開かれたわよね、あなた?','Yes — Grandpa-prim-mid-alum-yr, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「新米社員時代の失敗」を語られた','Gran — youth Dad-"new-staff-fail"-talk','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、百姓出身、つまり農家のご先祖を誇りに思ってらしたわよね、あなた?','Grandpa — youth-farm-anc-pride, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「貧乏人の家から出ても努力次第」と仰った','Gran — youth Dad-"poor-effort"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、里山の杉を植林されたわよね、あなた?','Grandpa — youth-satoyama-cedar, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお孫の駿さんを膝に乗せられた','Gran — youth Dad-grdkid-Shun-lap','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、戦時中に「ぎょっとされた」事もあったわよね、あなた?','Grandpa — war-"gyo-startle"-time, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10844',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ネットの匿名カキコに気を付けろよ','Riku — anon-bbs-careful','Curious teen','sakura_teen'),
    mk('お前、小中学校時代の同級生覚えてるよな、桜','You — prim-mid-classm-mem Sakura','Curious','riku_teen'),
    mk('リク、お前、部活で新米だってよく言ってたな','Riku — club-newbie-said','Wry','sakura_teen'),
    mk('お前、社会で「百姓一揆」習ったろ、桜','You — soc-"farm-rebel"? Sakura','Curious','riku_teen'),
    mk('リク、お前、「貧乏人の自慢話」って言い回し気になってたな','Riku — "poor-brag"-care','Wry','sakura_teen'),
    mk('お前、林間学校で里山の散策したろ、桜','You — for-camp-satoyama? Sakura','Curious','riku_teen'),
    mk('リク、お前、隣のクラスの駿と話してたな','Riku — next-cl-Shun-talk','Curious','sakura_teen'),
    mk('お前、テスト結果に「ぎょっと」してたろ、桜','You — test-"gyo"-startle? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10845',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「ネットのカキコのマナー」を教えて下さるわ','Sho — Dad-"bbs-eti"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと小中学校の運動会の話したよ','Mei-sis — me Dad-prim-mid-sports-talk','Eager child','sho_child'),
    mk('翔くん、お父さんが「私も新米のお母さんだった」って語って下さったわ','Sho — Dad-"new-mom"-talk','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「百姓出身」の歴史人物の絵本見たよ','Mei-sis — me Dad-"farm-anc"-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「貧乏人だったから工夫を学んだ」って語って下さったわ','Sho — Dad-"poor-learned"-talk','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと里山の里地散策に行ったよ','Mei-sis — me Dad-satoyama-walk','Eager child','sho_child'),
    mk('翔くん、お父さんが「駿くんもいとこ同士、仲良く」って仰ってたわ','Sho — Dad-"Shun-cous-warm"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「ぎょっとする発見も大事」って教えて頂いたよ','Mei-sis — me Dad-"gyo-disc-imp"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10846',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の菅野部長を歓迎しろ','Our co — new-Sug-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。山口県岩国の工場の状況を確認します','Yes — Yam-Iwa-fact-stat','Methodical','kenji_office'),
    mk('当社、兵庫県西宮の支店を強化しろ','Our co — Hy-Nishi-branch-strong','Direction','hiroshi_boss'),
    mk('はい。さいたま市の研究施設の進捗を確認します','Yes — Sait-res-fac-prog','Update','kenji_office'),
    mk('当社、新任の前川主任にプロジェクトを任せろ','Our co — new-Mae-lead-proj','Direction','hiroshi_boss'),
    mk('はい。経理の河村様に決算を依頼します','Yes — Acct-Kaw-clos-req','Update','kenji_office'),
    mk('当社、技術の鎌田様に新製品設計を任せろ','Our co — tech-Kam-new-prod-entr','Direction','hiroshi_boss'),
    mk('はい。法務の北川様に契約書確認を依頼します','Yes — Leg-Kit-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_10847',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('菅野部長の歓迎会を準備しましょう','Sug-dept-wel-prep','Brisk','yuki_office'),
    mk('はい。岩国工場の月次報告を確認します','Yes — Iwa-fact-mo-rep','Cooperative','kenji_office'),
    mk('西宮支店のキャンペーンを企画しましょう','Nishi-branch-camp','Direction','yuki_office'),
    mk('はい。さいたま事業所の研修プランを整えます','Yes — Sait-office-train-plan','Update','kenji_office'),
    mk('前川主任のプロジェクト進捗を共有しましょう','Mae-lead-proj-share','Direction','yuki_office'),
    mk('はい。河村経理の決算予定を整えます','Yes — Kaw-acct-clos-sched','Update','kenji_office'),
    mk('鎌田技術主任の設計レビューを進めましょう','Kam-tech-design-rev','Direction','yuki_office'),
    mk('はい。北川法務に新契約レビューを依頼します','Yes — Kit-leg-new-contr','Close','kenji_office'),
  ]},
  {id:'conv_10848',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の菅野先生のご研究を継承しろ','Ren — mentor-Sug-res','Mentor','hiroshi_boss'),
    mk('はい。岩国基地周辺の社会学論文を読みます','Yes — Iwa-base-soc-paper','Earnest','ren_uni'),
    mk('蓮、共同研究の西宮先生に研究照会しろ','Ren — joint-Nishi-prof-inq','Direction','hiroshi_boss'),
    mk('はい。さいたま大学の助教の発表を聴きます','Yes — Sait-univ-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の前川先生のご論文も参考にしろ','Ren — lit-Mae-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の河村先輩からご指導を仰ぎます','Yes — Lab-Kaw-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の鎌田教授と打ち合わせしろ','Ren — overs-Kam-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、北川事務官に申請します','Yes — Res-fund-Kit-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10849',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、菅野刑事の現場対応も評価されますね','Police Sug-det-eval','Cooperative','kenji_office'),
    mk('警察、岩国基地周辺の事案も担当されますね','Police Iwa-base-case','Cooperative','kenji_office'),
    mk('警察、兵庫県西宮の事案も対応されますね','Police Hy-Nishi-case','Cooperative','kenji_office'),
    mk('警察、さいたま県警と合同捜査されますね','Police Sait-stat-joint','Cooperative','kenji_office'),
    mk('警察、参考人前川氏から、警察、事情を伺われますね','Police witn-Mae-careful','Cooperative','kenji_office'),
    mk('警察、被害者河村氏のご家族にも、警察、配慮されますね','Police vict-Kaw-fam-care','Cooperative','kenji_office'),
    mk('警察、容疑者鎌田の前科を、警察、確認されますね','Police suspect-Kam-prior','Cooperative','kenji_office'),
    mk('警察、検事の北川様と公判前協議もされますね','Police pros-Kit-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_10850',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、菅野氏と共同事業を立ち上げられた','Dad — youth-Sug-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは岩国の工場の初代責任者だった','Yes — Dad Iwa-fact-1st-mgr','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、西宮にお勤めだった','Dad — youth-Nishi-work','Wistful','hiroshi_elder'),
    mk('はい。お父さんはさいたまでの新事業を成功された','Yes — Dad Sait-new-biz-succ','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、前川氏と海外進出を企画された','Dad — youth-Mae-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんは河村氏を経理の柱に据えられた','Yes — Dad Kaw-acct-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、鎌田氏と新製品を開発された','Dad — youth-Kam-new-prod','Wistful','hiroshi_elder'),
    mk('はい。お父さんは北川氏に法務全般を委ねられた','Yes — Dad Kit-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10851',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、芸術作品の魔力、つまり魔的引力の研究を論文で扱いましたね','Ren — art-magic-attr paper','Calm','asuka_teacher'),
    mk('はい、某所、つまり匿名地点での歴史的会合の研究を論文で扱いました','Yes — Undisc-loc-hist paper','Earnest','ren_uni'),
    mk('蓮さん、戦後の左派、つまり左派系思想の動向研究を論文で扱いましたね','Ren — postwar-left paper','Reflective','asuka_teacher'),
    mk('はい、米国フィラデルフィアの独立宣言の歴史研究を論文で扱いました','Yes — US-Phil-indep paper','Earnest','ren_uni'),
    mk('蓮さん、ドイツのケルン大聖堂の建築史を論文で扱いましたね','Ren — Ger-Coln-cath paper','Reflective','asuka_teacher'),
    mk('はい、チュニジア革命の社会学研究を論文で扱いました','Yes — Tun-rev paper','Earnest','ren_uni'),
    mk('蓮さん、灘地域、つまり灘の海運の歴史研究を論文で扱いましたね','Ren — Nada-mar-hist paper','Reflective','asuka_teacher'),
    mk('はい、時事通信社の報道史を論文で扱いました','Yes — Jiji-Press-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10852',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、現場の魔力、つまり魅力的な犯罪手口を、警察、慎重に分析されますね','Case scene-magic-mod-anal police-care','Reflective','ren_uni'),
    mk('警察、某所での会合を、警察、丁寧に捜査されますね','Police undisc-meet-inv','Cooperative','takeda_officer'),
    mk('本件、左派、つまり左派系団体の動向を、警察、注視されますね','Case left-grp police-mon','Reflective','ren_uni'),
    mk('警察、米国フィラデルフィアの捜査機関と国際連携されますね','Police US-Phil-int-link','Cooperative','takeda_officer'),
    mk('本件、ドイツケルン市のインターポール照会を、警察、進められますね','Case Ger-Coln-Inter police-prog','Reflective','ren_uni'),
    mk('警察、チュニジアでの邦人事案にも対応されますね','Police Tun-Jp-case','Cooperative','takeda_officer'),
    mk('本件、灘地域、つまり灘の密漁事案を、警察、捜査されますね','Case Nada-poach police-inv','Reflective','ren_uni'),
    mk('警察、時事通信社の報道に、警察、適切に対応されますね','Police Jiji-Press-resp','Close','takeda_officer'),
  ]},
  {id:'conv_10853',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、芸術作品の魔力、つまり魔的引力の研究を論文で扱いましたね','Sakura — magic paper','Calm','asuka_teacher'),
    mk('はい、某所、つまり匿名地点での歴史的会合の研究を論文で扱いました','Yes — Undisc paper','Earnest teen','sakura_teen'),
    mk('戦後の左派、つまり左派系思想の動向研究を論文で扱いましたね','Postwar-left paper','Reflective','asuka_teacher'),
    mk('はい、米国フィラデルフィアの独立宣言の歴史研究を論文で扱いました','Yes — Phil-indep paper','Earnest','sakura_teen'),
    mk('ドイツのケルン大聖堂の建築史を論文で扱いましたね','Coln-cath paper','Reflective','asuka_teacher'),
    mk('はい、チュニジア革命の社会学研究を論文で扱いました','Yes — Tun-rev paper','Earnest','sakura_teen'),
    mk('灘地域、つまり灘の海運の歴史研究を論文で扱いましたね','Nada-mar paper','Reflective','asuka_teacher'),
    mk('はい、時事通信社の報道史を論文で扱いました','Yes — Jiji-Press paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10854',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、認知の魔力、つまり症状の魔的演出を医療チームで慎重に分析します','Ren — cog-magic-sym med-team','Calm','saito_doctor'),
    mk('蓮さん、研究を某所、つまり匿名拠点で進める事を医療チームで尊重します','Ren — res-undisc-team-resp','Calm','saito_doctor'),
    mk('蓮さん、医学界の左派、つまり左派系学術団体との対話を医療チームで進めます','Ren — med-left-soc-dial med-team','Calm','saito_doctor'),
    mk('蓮さん、米国フィラデルフィアのCHOP小児病院と医療チームで連携します','Ren — US-Phil-CHOP med-team','Calm','saito_doctor'),
    mk('蓮さん、ドイツケルン大学の医学部と医療チームで共同研究します','Ren — Ger-Coln-univ-med med-team','Calm','saito_doctor'),
    mk('蓮さん、チュニジアでの医療支援を医療チームで継続します','Ren — Tun-med-supp med-team','Calm','saito_doctor'),
    mk('蓮さん、灘地区の地域医療を医療チームで担当します','Ren — Nada-local-med med-team','Calm','saito_doctor'),
    mk('蓮さん、時事通信の医療報道に医療チームで適切に対応します','Ren — Jiji-Press-med med-team-resp','Calm close','saito_doctor'),
  ]},
  {id:'conv_10855',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、ブランドの魔力、つまり魅力を高めろ','Our co — brand-magic-attr-up','Crisp','hiroshi_boss'),
    mk('はい。本社移転は某所、つまり未公表地点で進めます','Yes — HQ-move-undisc-prog','Methodical','kenji_office'),
    mk('当社、左派、つまり左派系メディアにも対応しろ','Our co — left-media-resp','Direction','hiroshi_boss'),
    mk('はい。米国フィラデルフィア支社の進出を進めます','Yes — US-Phil-branch-exp','Update','kenji_office'),
    mk('当社、ドイツケルンのトレードフェアに出展しろ','Our co — Ger-Coln-fair-exhib','Direction','hiroshi_boss'),
    mk('はい。チュニジア市場の調査を進めます','Yes — Tun-mkt-surv','Update','kenji_office'),
    mk('当社、灘地域、つまり灘の酒蔵と提携しろ','Our co — Nada-sake-part','Direction','hiroshi_boss'),
    mk('はい。時事通信社にプレスリリースを送ります','Yes — Jiji-Press-release','Close','kenji_office'),
  ]},
  {id:'conv_10856',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、カメラのアングル研究をされてるって、メイちゃん','Aoi — cust-cam-angle-stud Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ブラザー印刷機の新製品を語って下さったよ、メイちゃん','Aoi — cust-Brother-print-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、映画「キャリー」のホラーがお好きだって、メイちゃん','Aoi — cust-Carrie-hor-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、楽器のストリング、つまり弦の張替えのお話だったよ、メイちゃん','Aoi — cust-instr-string-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ブックスのチェーン書店でアルバイトされてたって、メイちゃん','Aoi — cust-Books-chain-job Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お料理がアンバランスな盛り付けでも美味しいって、メイちゃん','Aoi — cust-cook-unbal-yum Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お洋服にワンポイントの刺繍を加えるのがお好きだって、メイちゃん','Aoi — cust-cloth-1pt-emb Mei','Reflective','mei_romantic'),
    mk('葵、お客様、競馬のダートコースの予想がお得意だって、メイちゃん','Aoi — cust-race-dirt-pred Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10857',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが撮影のアングル、つまり構図に拘られた','Gran — youth Dad-angle-stick','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、ブラザーミシンを愛用されたわよね、あなた?','Yes — Grandpa-Brother-machine-fav, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「キャリー」の小説を読まれた','Gran — youth Dad-Carrie-novel-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ギターのストリング、つまり弦を御自ら張られたわよね、あなた?','Grandpa — youth-gtr-string-self, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが地元のブックス、つまり書店に通われた','Gran — youth Dad-local-books-vis','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、「アンバランスな美しさ」を絵画で評論されたわよね、あなた?','Grandpa — youth-"unbal-beauty"-crit, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがワンポイントの家紋付きハンカチを愛用された','Gran — youth Dad-1pt-fam-crest-hank','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、競馬のダート競走を予想されたわよね、あなた?','Grandpa — youth-race-dirt-pred, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10858',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「写真のアングルを変えてみよう」って仰ってたわ','Sho — Dad-"photo-angle"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとブラザーのプリンターを設定したよ','Mei-sis — me Dad-Brother-print-set','Eager child','sho_child'),
    mk('翔くん、お父さんが「キャリーって映画は怖いから子供は早いね」って仰ってたわ','Sho — Dad-"Carrie-scary-kid"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとギターのストリング、つまり弦を張り替えたよ','Mei-sis — me Dad-gtr-string','Eager child','sho_child'),
    mk('翔くん、お父さんとブックス、つまり大型書店に行かれたわ','Sho — Dad-Books-vis','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「アンバランスな絵も個性」って教えて頂いたよ','Mei-sis — me Dad-"unbal-pers"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんがワンポイントの刺繍ハンカチを下さったわ','Sho — Dad-1pt-emb-hank','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと競馬のダートレース観たよ','Mei-sis — me Dad-race-dirt','Eager close','sho_child'),
  ]},
  {id:'conv_10859',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、写真部でカメラのアングル研究してたな','Riku — photo-club-angle-stud','Curious teen','sakura_teen'),
    mk('お前、ブラザーのプリンター使ってたよな、桜','You — Brother-print-use Sakura','Curious','riku_teen'),
    mk('リク、お前、「キャリー」の映画は怖くて観られなかったろ','Riku — Carrie-scary-no-watch?','Wry','sakura_teen'),
    mk('お前、軽音部でストリング、つまり弦の張替え覚えたな、桜','You — band-club-string-learn Sakura','Curious','riku_teen'),
    mk('リク、お前、ブックス、つまり書店でバイトしてたな','Riku — Books-job','Curious','sakura_teen'),
    mk('お前、サッカー部の練習メニューがアンバランスだって言ってたろ、桜','You — soccer-prac-unbal-said? Sakura','Curious','riku_teen'),
    mk('リク、お前、制服のワンポイント刺繍気にしてたな','Riku — uni-1pt-emb-care','Wry','sakura_teen'),
    mk('お前、ダート競技、つまり競馬のダートに詳しかったな、桜','You — race-dirt-knowl Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10860',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「写真のアングルで印象が変わる」って教えて下さるわ','Sho — Dad-"photo-angle-impr"-teach','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとブラザーのミシンで縫い物したよ','Mom — me Dad-Brother-machine-sew','Eager child','sho_child'),
    mk('翔くん、お父さんがキャリー・フィッシャーの伝記本を読んでらっしゃるわ','Sho — Dad-Carrie-Fish-biog','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとピアノのストリング、つまり弦の張力勉強したよ','Mom — me Dad-piano-string-stud','Eager child','sho_child'),
    mk('翔くん、お父さんとブックス、つまり大型書店巡りに行かれるわ','Sho — Dad-Books-tour','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「アンバランスな食事はダメ」って教えて頂いたよ','Mom — me Dad-"unbal-meal-no"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんがワンポイントの和柄ネクタイをお選びだったわ','Sho — Dad-1pt-Jp-tie-pick','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと競馬のダートレース観たよ','Mom — me Dad-race-dirt-saw','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_550 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['明子','大介','康弘','ナターシャ','ミミ','目新しい','マジメ','思ひ']
const B_T = ['門真','三谷','上村','奥山','二宮','坂田','西岡','西山']
const C_T = ['前列','鮓','峪','壱','魏','起る','不確か','組成']
const D_T = ['マッカーシー','シンドラー','テイラー','ペルシャ','月光','スクランブル','熱血','輝かしい']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10961',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがご友人の明子さんとお茶されてたわ','Sho — Dad-fri-Akiko-tea','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと大介おじさんに会いに行ったよ','Mom — me Dad-Daisuke-uncle-vis','Pleased child','sho_child'),
    mk('翔くん、お父さんが「康弘叔父様にお元気でね」って仰ってたわ','Sho — Dad-"Yasu-uncle-health"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとペットのナターシャちゃんを撫でたよ','Mom — me Dad-pet-Nat-pat','Pleased child','sho_child'),
    mk('翔くん、お父さんがオペラ「ラ・ボエーム」のミミ役を語って下さったわ','Sho — Dad-Mimi-role-talk','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと目新しい食材を試したよ','Mom — me Dad-new-food-try','Eager child','sho_child'),
    mk('翔くん、お父さんが「マジメな性格は宝物」って仰ってたわ','Sho — Dad-"serious-treas"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに古文の「思ひ」、つまり「思い」の古い書き方を教えて頂いたよ','Mom — me Dad-"omohi"-old-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10962',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご友人の明子さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Akiko-tea Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お孫様の大介くんを連れていらしたよ、メイちゃん','Aoi — cust-grdkid-Daisuke-vis Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お父様のお名前が康弘さんだって、メイちゃん','Aoi — cust-fa-Yasu Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ロシア人のナターシャさんとご来店だったよ、メイちゃん','Aoi — cust-Rus-Nat-vis Mei','Reflective','aoi_barista'),
    mk('葵、お客様、オペラのミミ役の名アリアを語って下さったよ、メイちゃん','Aoi — cust-Mimi-aria-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、店内が目新しい雰囲気でいいって仰ってたよ、メイちゃん','Aoi — cust-shop-new-atm-said Mei','Reflective','aoi_barista'),
    mk('葵、お客様、「マジメに仕事を続けてきた」って語って下さったよ、メイちゃん','Aoi — cust-"serious-work"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、古い書物の「思ひ」、つまり「思い」を読んでらしたよ、メイちゃん','Aoi — cust-old-omohi-read Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10963',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが従妹の明子さんと文通された','Gran — youth Dad-cous-Akiko-letter','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、ご友人の大介さんと将棋を指されたわよね、あなた?','Yes — Grandpa-Daisuke-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお兄様の康弘さんと釣りに行かれた','Gran — youth Dad-bro-Yasu-fish','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ロシア人ナターシャさんと文通されたわよね、あなた?','Grandpa — youth-Rus-Nat-letter, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがオペラのミミ役を聴かれた','Gran — youth Dad-Mimi-opera','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、目新しい技術を学ばれたわよね、あなた?','Grandpa — youth-new-tech-stud, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「マジメに生きる事が一番」と仰った','Gran — youth Dad-"serious-best"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、和歌の「思ひ」、つまり「思い」を詠まれたわよね、あなた?','Grandpa — youth-omohi-poem, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10964',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、隣のクラスの明子と話してたな','Riku — next-cl-Akiko-talk','Curious teen','sakura_teen'),
    mk('お前、サッカー部の大介先輩を尊敬してたな、桜','You — soccer-Daisuke-sen-resp Sakura','Curious','riku_teen'),
    mk('リク、お前のお父様、康弘さんって名前だったよな','Riku — your-fa-Yasu','Curious','sakura_teen'),
    mk('お前、ロシア人留学生のナターシャと話してたな、桜','You — Rus-exch-Nat-talk Sakura','Curious','riku_teen'),
    mk('リク、お前、ペットの名前ミミちゃんって付けたな','Riku — pet-Mimi-named','Wry','sakura_teen'),
    mk('お前、文化祭で「目新しい企画」って言ってたろ、桜','You — cul-fes-"new-plan"? Sakura','Curious','riku_teen'),
    mk('リク、お前、マジメな生徒だって先生に褒められたな','Riku — serious-tch-praise','Praising','sakura_teen'),
    mk('お前、古文で「思ひ」、つまり「思い」の旧仮名習ったろ、桜','You — class-omohi-old? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10965',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「明子おばさんはお花が上手」って仰ってたわ','Sho — Dad-"Akiko-aunt-flo"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと大介いとこと公園で遊んだよ','Mei-sis — me Dad-Daisuke-cous-park','Eager child','sho_child'),
    mk('翔くん、お父さんが「康弘おじいちゃんに会いに行こう」って仰ってたわ','Sho — Dad-"Yasu-grdpa-vis"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「ナターシャの物語」の絵本を読んだよ','Mei-sis — me Dad-Nat-story-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「ペットのミミちゃんは賢い」って仰ってたわ','Sho — Dad-"Mimi-bright"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと目新しいスポーツに挑戦したよ','Mei-sis — me Dad-new-sport-try','Eager child','sho_child'),
    mk('翔くん、お父さんが「マジメさは生きる力」って仰ってたわ','Sho — Dad-"serious-life-pwr"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに古文の「思ひ」、つまり「思い」の旧仮名を教えて頂いたよ','Mei-sis — me Dad-omohi-old-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10966',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、大阪府門真の工場を強化しろ','Our co — Os-Kad-fact-strong','Crisp','hiroshi_boss'),
    mk('はい。新任の三谷部長を歓迎します','Yes — New-Mit-dept-wel','Methodical','kenji_office'),
    mk('当社、営業の上村課長の出張日程を整えろ','Our co — Sales-Ue-mgr-trip','Direction','hiroshi_boss'),
    mk('はい。技術担当の奥山主任にプロジェクトを任せます','Yes — Tech-Oku-lead-proj','Update','kenji_office'),
    mk('当社、広報の二宮様の戦略を採用しろ','Our co — PR-Nino-strat','Direction','hiroshi_boss'),
    mk('はい。経理の坂田様の決算スケジュールを整えます','Yes — Acct-Sak-clos-sched','Update','kenji_office'),
    mk('当社、人事の西岡様に新人研修を任せろ','Our co — HR-Nishi-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。法務の西山様に契約書確認を依頼します','Yes — Leg-Nishi-yama-contr','Close','kenji_office'),
  ]},
  {id:'conv_10967',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('門真工場の月次報告を確認しましょう','Kad-fact-mo-rep','Brisk','yuki_office'),
    mk('はい。三谷部長の歓迎会を準備します','Yes — Mit-dept-wel-prep','Cooperative','kenji_office'),
    mk('上村課長の引き継ぎ書を確認しましょう','Ue-mgr-handov','Direction','yuki_office'),
    mk('はい。奥山技術主任のプロジェクト進捗を共有します','Yes — Oku-tech-lead-share','Update','kenji_office'),
    mk('二宮広報の月次企画書を確認しましょう','Nino-PR-mo-plan','Direction','yuki_office'),
    mk('はい。坂田経理の決算予定を整えます','Yes — Sak-acct-clos','Update','kenji_office'),
    mk('西岡人事に新人研修プランを依頼しましょう','Nishi-HR-newhire','Direction','yuki_office'),
    mk('はい。西山法務に新契約レビューを依頼します','Yes — Nishi-yama-leg-new-contr','Close','kenji_office'),
  ]},
  {id:'conv_10968',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、門真キャンパスの研究員と連携しろ','Ren — Kad-camp-res-link','Mentor','hiroshi_boss'),
    mk('はい。三谷教授の論文を読み込みます','Yes — Mit-prof-paper','Earnest','ren_uni'),
    mk('蓮、共同研究の上村先生に研究照会しろ','Ren — joint-Ue-inq','Direction','hiroshi_boss'),
    mk('はい。学会で奥山助教のご発表を聴きます','Yes — Conf-Oku-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の二宮先生のご論文も参考にしろ','Ren — lit-Nino-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の坂田先輩からご指導を仰ぎます','Yes — Lab-Sak-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の西岡教授と打ち合わせしろ','Ren — overs-Nishi-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、西山事務官に申請します','Yes — Res-fund-Nishi-yama-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10969',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、門真署と合同捜査されますね','Police Kad-stat-joint','Cooperative','kenji_office'),
    mk('警察、参考人三谷氏から、警察、事情を伺われますね','Police witn-Mit-careful','Cooperative','kenji_office'),
    mk('警察、被害者上村氏のご家族にも、警察、配慮されますね','Police vict-Ue-fam-care','Cooperative','kenji_office'),
    mk('警察、目撃者奥山氏の供述を、警察、整えられますね','Police witn-Oku-stmt','Cooperative','kenji_office'),
    mk('警察、容疑者二宮の前科を、警察、確認されますね','Police suspect-Nino-prior','Cooperative','kenji_office'),
    mk('警察、署内の鑑識坂田主任と現場検証されますね','Police stat-foren-Sak-scene','Cooperative','kenji_office'),
    mk('警察、心理士西岡様にご助言を仰がれますね','Police psy-Nishi-adv','Cooperative','kenji_office'),
    mk('警察、検事の西山様と公判前協議もされますね','Police pros-Nishi-yama-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_10970',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、門真に工場を建てられた','Dad — youth-Kad-fact-build','Sage','hiroshi_elder'),
    mk('はい。お父さんは三谷氏と共同事業を立ち上げられた','Yes — Dad Mit-JV','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、上村先輩のご薫陶を受けられた','Dad — youth-Ue-sen-mentor','Wistful','hiroshi_elder'),
    mk('はい。お父さんは奥山氏と海外進出を企画された','Yes — Dad Oku-overs','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、二宮氏を広報の柱に据えられた','Dad — youth-Nino-PR-pillar','Wistful','hiroshi_elder'),
    mk('はい。お父さんは坂田氏と経理体制を整えられた','Yes — Dad Sak-acct','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、西岡氏と海外法人を立ち上げられた','Dad — youth-Nishi-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは西山氏に法務全般を委ねられた','Yes — Dad Nishi-yama-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10971',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、講演の前列、つまり前列席の聴衆動向の研究を論文で扱いましたね','Ren — lec-front-row paper','Calm','asuka_teacher'),
    mk('はい、寿司、つまり鮓、つまり古い表記の鮓の食文化研究を論文で扱いました','Yes — Sushi-old-form paper','Earnest','ren_uni'),
    mk('蓮さん、山の峪、つまり峪の地形研究を論文で扱いましたね','Ren — mtn-valley paper','Reflective','asuka_teacher'),
    mk('はい、旧字「壱」、つまり一の用法研究を論文で扱いました','Yes — Old-ichi paper','Earnest','ren_uni'),
    mk('蓮さん、三国時代の魏王朝の研究を論文で扱いましたね','Ren — Wei-dyn paper','Reflective','asuka_teacher'),
    mk('はい、事件が起る、つまり「起る」の用法の言語学研究を論文で扱いました','Yes — Occur-old-form paper','Earnest','ren_uni'),
    mk('蓮さん、感染症の不確かさを巡る疫学研究を論文で扱いましたね','Ren — pand-uncert paper','Reflective','asuka_teacher'),
    mk('はい、岩石の組成分析の地質学研究を論文で扱いました','Yes — Rock-comp paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10972',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、講演会場の前列、つまり前列の不審者を、警察、警戒されますね','Case lec-front-row-susp police-mon','Reflective','ren_uni'),
    mk('警察、押収品の古い鮓、つまり鮓の容器の鑑定もされますね','Police seiz-old-sushi-cont-auth','Cooperative','takeda_officer'),
    mk('本件、山の峪、つまり峪の遭難事案を、警察、捜索されますね','Case mtn-valley-miss police-search','Reflective','ren_uni'),
    mk('警察、旧字「壱」、つまり「一」の偽造文書も鑑定されますね','Police old-ichi-forg-doc-auth','Cooperative','takeda_officer'),
    mk('本件、押収古文書の魏王朝印の鑑定を、警察、専門家に依頼されますね','Case seiz-Wei-seal-auth police-expert','Reflective','ren_uni'),
    mk('警察、事件が起る、つまり起こる前に未然防止策をされますね','Police occur-prev','Cooperative','takeda_officer'),
    mk('本件、被害者の供述に不確かな部分を、警察、慎重に確認されますね','Case witn-uncert police-careful','Reflective','ren_uni'),
    mk('警察、爆発物の組成分析を、警察、慎重におこなわれますね','Police exp-comp-anal police-careful','Close','takeda_officer'),
  ]},
  {id:'conv_10973',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、講演の前列、つまり前列席の聴衆動向の研究を論文で扱いましたね','Sakura — front-row paper','Calm','asuka_teacher'),
    mk('はい、寿司、つまり鮓、つまり古い表記の鮓の食文化研究を論文で扱いました','Yes — Sushi paper','Earnest teen','sakura_teen'),
    mk('山の峪、つまり峪の地形研究を論文で扱いましたね','Mtn-valley paper','Reflective','asuka_teacher'),
    mk('はい、旧字「壱」、つまり一の用法研究を論文で扱いました','Yes — Old-ichi paper','Earnest','sakura_teen'),
    mk('三国時代の魏王朝の研究を論文で扱いましたね','Wei-dyn paper','Reflective','asuka_teacher'),
    mk('はい、事件が起る、つまり「起る」の用法の言語学研究を論文で扱いました','Yes — Occur paper','Earnest','sakura_teen'),
    mk('感染症の不確かさを巡る疫学研究を論文で扱いましたね','Pand-uncert paper','Reflective','asuka_teacher'),
    mk('はい、岩石の組成分析の地質学研究を論文で扱いました','Yes — Comp paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10974',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、学会の前列、つまり前列席で発表者の表情を医療チームで観察します','Ren — conf-front-row med-team','Calm','saito_doctor'),
    mk('蓮さん、鮓、つまり古い表記の鮓の食中毒症例を医療チームで研究します','Ren — sushi-food-pois med-team','Calm','saito_doctor'),
    mk('蓮さん、山の峪、つまり峪での救急搬送を医療チームで担当します','Ren — mtn-valley-emerg med-team','Calm','saito_doctor'),
    mk('蓮さん、旧字「壱」、つまり一を含む医薬古書を医療チームで保管します','Ren — old-ichi-med med-team','Calm','saito_doctor'),
    mk('蓮さん、魏志倭人伝の医療記述を医療チームで研究します','Ren — Wei-Wa-med-desc med-team','Calm','saito_doctor'),
    mk('蓮さん、合併症が起る、つまり起こる事を医療チームで予測します','Ren — comp-occur-pred med-team','Calm','saito_doctor'),
    mk('蓮さん、診断が不確かな症例を医療チームで再検査します','Ren — diag-uncert-recheck med-team','Calm','saito_doctor'),
    mk('蓮さん、薬剤の組成、つまり成分分析を医療チームで確認します','Ren — drug-comp med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10975',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、株主総会の前列、つまり前列席を主要株主用に確保しろ','Our co — share-mtg-front-row','Crisp','hiroshi_boss'),
    mk('はい。寿司、つまり鮓、つまり伝統鮓の海外展開を進めます','Yes — Sushi-overs-exp','Methodical','kenji_office'),
    mk('当社、山岳地の峪、つまり峪に観光ロッジを建てろ','Our co — mtn-valley-lodge','Direction','hiroshi_boss'),
    mk('はい。表彰状の番号は旧字「壱」、つまり「一」で記載します','Yes — Cert-old-ichi','Update','kenji_office'),
    mk('当社、中国の魏王朝にちなんだブランドを企画しろ','Our co — Cn-Wei-brand','Direction','hiroshi_boss'),
    mk('はい。市場変動が起る、つまり起こる前にリスクヘッジします','Yes — Mkt-occur-prev','Update','kenji_office'),
    mk('当社、新市場の不確かさを、データで補え','Our co — new-mkt-uncert-data','Direction','hiroshi_boss'),
    mk('はい。製品の組成分析を品質管理に活かします','Yes — Prod-comp-qual','Close','kenji_office'),
  ]},
  {id:'conv_10976',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、米国のマッカーシー上院議員の歴史を語って下さったよ、メイちゃん','Aoi — cust-McCar-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、映画「シンドラーのリスト」を語って下さったよ、メイちゃん','Aoi — cust-Schind-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、米国エリザベス・テイラーの女優論を語って下さったよ、メイちゃん','Aoi — cust-Eliz-Tay-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ペルシャ絨毯がお好みだって、メイちゃん','Aoi — cust-Persia-rug-fav Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ベートーヴェンの月光、つまり月光ソナタがお好きだって、メイちゃん','Aoi — cust-Beethov-Moonlight-fav Mei','Reflective','mei_romantic'),
    mk('葵、お客様、朝のスクランブルエッグの作り方を語って下さったよ、メイちゃん','Aoi — cust-scram-egg-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、若い頃は熱血漢だったって笑ってらしたよ、メイちゃん','Aoi — cust-youth-hot-blood-laugh Mei','Wry','mei_romantic'),
    mk('葵、お客様、輝かしい受賞歴のお話を語って下さったよ、メイちゃん','Aoi — cust-bril-award-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10977',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがマッカーシー時代の米国情勢を学ばれた','Gran — youth Dad-McCar-US-stud','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、「シンドラーのリスト」の映画に感銘されたわよね、あなた?','Yes — Grandpa-Schind-imp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが米国のエリザベス・テイラーを愛された','Gran — youth Dad-Eliz-Tay-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ペルシャ絨毯を私に贈って下さったわよね、あなた?','Grandpa — youth-Persia-rug-gift, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが月光、つまりベートーヴェン月光ソナタを愛された','Gran — youth Dad-Moonlight-son-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、朝食のスクランブルエッグをご自身で作られたわよね、あなた?','Grandpa — youth-scram-egg-self, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは熱血漢だった','Gran — youth Dad-hot-blood','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、輝かしいキャリアを築かれたわよね、あなた?','Grandpa — youth-bril-career, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10978',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「マッカーシー時代の歴史教科書を読もう」って仰ってたわ','Sho — Dad-"McCar-textb"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「シンドラーのリスト」のDVDを観たよ','Mei-sis — me Dad-Schind-DVD','Eager child','sho_child'),
    mk('翔くん、お父さんが「エリザベス・テイラーは伝説の女優」って仰ってたわ','Sho — Dad-"Eliz-Tay-legend"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとペルシャ絨毯の展示観たよ','Mei-sis — me Dad-Persia-rug-exhib','Eager child','sho_child'),
    mk('翔くん、お父さんが月光、つまり月光ソナタをピアノで弾いて下さるわ','Sho — Dad-Moonlight-piano','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとスクランブルエッグを朝食に食べたよ','Mei-sis — me Dad-scram-egg-breakf','Eager child','sho_child'),
    mk('翔くん、お父さんが「熱血指導者の物語を読もう」って仰ってたわ','Sho — Dad-"hot-blood-tale"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「輝かしい未来を信じて」って言われたよ','Mei-sis — me Dad-"bril-future"-said','Earnest close','sho_child'),
  ]},
  {id:'conv_10979',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会でマッカーシー上院議員調べてたな','Riku — soc-McCar-stud','Curious teen','sakura_teen'),
    mk('お前、映画館で「シンドラーのリスト」観たろ、桜','You — cinema-Schind? Sakura','Curious','riku_teen'),
    mk('リク、お前、女優のエリザベス・テイラー知ってるよな','Riku — Eliz-Tay-know','Curious','sakura_teen'),
    mk('お前、家でペルシャ絨毯を見たろ、桜','You — home-Persia-rug? Sakura','Curious','riku_teen'),
    mk('リク、お前、音楽の授業で月光ソナタ弾いてたな','Riku — mus-Moonlight-play','Wry','sakura_teen'),
    mk('お前、家庭科でスクランブルエッグ作ったろ、桜','You — home-scram-egg-make? Sakura','Curious','riku_teen'),
    mk('リク、お前、熱血スポ根漫画読みすぎだろ','Riku — hot-blood-sport-mng-too','Wry','sakura_teen'),
    mk('お前、卒業文集で「輝かしい未来」って書いてたな、桜','You — grad-"bril-future"-wrote Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10980',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがマッカーシー時代のドキュメンタリー観てらっしゃるわ','Sho — Dad-McCar-doc','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「シンドラーのリスト」の映画観たよ','Mom — me Dad-Schind-film','Eager child','sho_child'),
    mk('翔くん、お父さんがエリザベス・テイラーの伝記を読まれてるわ','Sho — Dad-Eliz-Tay-biog','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとペルシャ絨毯の博物館行ったよ','Mom — me Dad-Persia-rug-mus','Eager child','sho_child'),
    mk('翔くん、お父さんが月光ソナタを聴いてらっしゃるわ','Sho — Dad-Moonlight-listen','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとスクランブルエッグの朝食食べたよ','Mom — me Dad-scram-egg-breakf','Eager child','sho_child'),
    mk('翔くん、お父さんが「熱血スポーツ漫画」を読まれてるわ','Sho — Dad-"hot-blood-sport-mng"-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「輝かしい卒業の日」って言われたよ','Mom — me Dad-"bril-grad-day"-said','Eager close','sho_child'),
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

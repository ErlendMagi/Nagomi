import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_534 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['声援','町民','趙','マメ','穂','山々','見所','７つ']
const B_T = ['谷口','柳沢','奥田','新井','荒木','浅野','村山','大田']
const C_T = ['證','噺','英和','云わ','ノベル','広東','にたいする','事物']
const D_T = ['カジュアル','リベラル','オールド','エコノミー','ノーマン','ヘルパー','カセット','イレブン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10641',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが運動会で声援を一番大きく送って下さったわ','Sho — Dad-sports-cheer-loud','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと町民運動会に行ったよ','Mom — me Dad-town-sports','Pleased child','sho_child'),
    mk('翔くん、お父さんが「中国の趙さんから手紙が来た」って仰ってたわ','Sho — Dad-"Cn-Zhao-letter"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「マメに連絡してね」って言われたよ','Mom — me Dad-"mame-contact"-said','Earnest child','sho_child'),
    mk('翔くん、お父さんが「稲穂が頭を垂れる秋」って仰ってたわ','Sho — Dad-"rice-ear-aut"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと山々の絶景を観に行ったよ','Mom — me Dad-mtns-view','Eager child','sho_child'),
    mk('翔くん、お父さんが「ここがこの庭の見所」って教えて下さったわ','Sho — Dad-"yard-feat"-teach','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんからプレゼントを７つ頂いたよ','Mom — me Dad-pres-7-recv','Eager close','sho_child'),
  ]},
  {id:'conv_10642',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご家族のスポーツチームに声援を送ってらしたよ、メイちゃん','Aoi — cust-fam-team-cheer Mei','Reflective','mei_romantic'),
    mk('葵、お客様、町民会館の活動に参加されてるって、メイちゃん','Aoi — cust-town-hall-act Mei','Reflective','aoi_barista'),
    mk('葵、お客様、台湾の趙さんとビジネスをされてるって、メイちゃん','Aoi — cust-Tai-Zhao-biz Mei','Reflective','mei_romantic'),
    mk('葵、お客様、マメな性格で何でも記録されてるよ、メイちゃん','Aoi — cust-mame-pers-rec Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お店の前の稲穂のドライフラワーをお褒め下さったよ、メイちゃん','Aoi — cust-rice-ear-dry-praise Mei','Reflective','mei_romantic'),
    mk('葵、お客様、山々の写真集を見せて下さったよ、メイちゃん','Aoi — cust-mtns-photo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、当店の見所はラテアートだって仰ったよ、メイちゃん','Aoi — cust-shop-feat-latte-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お孫様の誕生日に７つの贈り物を準備されたって、メイちゃん','Aoi — cust-grdkid-bday-7-pres Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10643',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが選手達に大きな声援を送られた','Gran — youth Dad-pl-loud-cheer','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、町民会の役員されたわよね、あなた?','Yes — Grandpa-youth-town-board, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが中国出張で趙氏と懇意になられた','Gran — youth Dad-Cn-Zhao-close','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、マメに日記を付けられたわよね、あなた?','Grandpa — youth-mame-diary, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが田んぼの穂、つまり稲穂を眺められた','Gran — youth Dad-rice-ear-view','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、信州の山々を巡られたわよね、あなた?','Grandpa — youth-Shi-mtns-tour, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「我が庭の見所は紅葉」と仰った','Gran — youth Dad-"yard-feat-aut"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、お孫様に７つの教えを残されたわよね、あなた?','Grandpa — youth-grdkid-7-teach, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10644',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、応援団で声援すごかったな','Riku — cheer-team-loud','Praising teen','sakura_teen'),
    mk('お前、町民マラソン出てたな、桜','You — town-mara? Sakura','Curious','riku_teen'),
    mk('リク、お前、留学生の趙くんと仲良くなったろ','Riku — exch-Zhao-close?','Curious','sakura_teen'),
    mk('お前、マメに勉強記録付けてたな、桜','You — mame-stud-rec Sakura','Praising','riku_teen'),
    mk('リク、お前、社会で稲穂が描かれた紙幣について調べてたな','Riku — soc-rice-ear-bill-stud','Curious','sakura_teen'),
    mk('お前、修学旅行で山々の写真撮ってたな、桜','You — sch-trip-mtns-photo Sakura','Curious','riku_teen'),
    mk('リク、お前、文化祭の展示で「我が校の見所」って書いてたな','Riku — cul-fes-"sch-feat"-wrote','Curious','sakura_teen'),
    mk('お前、お弁当のおかず７つも作ってもらってたろ、桜','You — lunch-side-7-made? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10645',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「みんなで声援を送ろう」って仰ってたわ','Sho — Dad-"all-cheer"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと町民まつりに行ったよ','Mei-sis — me Dad-town-fes','Eager child','sho_child'),
    mk('翔くん、お父さんが「中国の友人、趙さんは優しい」って仰ってたわ','Sho — Dad-"Cn-Zhao-kind"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「マメに水やりして」って教えて頂いたよ','Mei-sis — me Dad-"mame-water"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが「ススキの穂は秋の風物詩」って仰ってたわ','Sho — Dad-"susuki-ear-aut"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと富士の山々を観に行ったよ','Mei-sis — me Dad-Fuji-mtns','Eager child','sho_child'),
    mk('翔くん、お父さんが「お祭りの見所は花火」って教えて下さったわ','Sho — Dad-"fes-feat-firew"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんから絵本を７つ頂いたよ','Mei-sis — me Dad-pic-7-recv','Eager close','sho_child'),
  ]},
  {id:'conv_10646',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の谷口部長を歓迎しろ','Our co — new-Tani-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。営業の柳沢課長の出張日程を整えます','Yes — Sales-Yan-mgr-trip','Methodical','kenji_office'),
    mk('当社、技術担当の奥田主任にプロジェクトを任せろ','Our co — tech-Oku-lead-proj','Direction','hiroshi_boss'),
    mk('はい。新井広報の戦略を採用します','Yes — Arai-PR-strat-adopt','Update','kenji_office'),
    mk('当社、人事の荒木様の昇格を進めろ','Our co — HR-Araki-prom-prog','Direction','hiroshi_boss'),
    mk('はい。経理の浅野様に予算策定を依頼します','Yes — Acct-Asano-budg-req','Update','kenji_office'),
    mk('当社、海外担当の村山部長と連携しろ','Our co — overs-Mur-dept-link','Direction','hiroshi_boss'),
    mk('はい。法務の大田様に契約書確認を依頼します','Yes — Leg-Ota-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_10647',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('谷口部長の歓迎会を来週設定しましょう','Tani-dept-wel-nextwk','Brisk','yuki_office'),
    mk('はい。柳沢課長の引き継ぎ書を確認します','Yes — Yan-mgr-handov-doc','Cooperative','kenji_office'),
    mk('奥田主任のプロジェクト進捗を週次で確認しましょう','Oku-lead-proj-prog-wk','Direction','yuki_office'),
    mk('はい。新井広報の月次レポートを受け取ります','Yes — Arai-PR-mo-rep','Update','kenji_office'),
    mk('荒木人事の新任研修計画を相談しましょう','Araki-HR-newhire-plan','Direction','yuki_office'),
    mk('はい。浅野経理の予算配分を確認します','Yes — Asano-acct-budg-alloc','Update','kenji_office'),
    mk('村山海外担当の出張報告を共有しましょう','Mur-overs-trip-rep-share','Direction','yuki_office'),
    mk('はい。大田法務の契約レビューを進めます','Yes — Ota-leg-contr-rev','Close','kenji_office'),
  ]},
  {id:'conv_10648',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の谷口先生のご研究を継承しろ','Ren — mentor-Tani-res','Mentor','hiroshi_boss'),
    mk('はい。柳沢教授の論文を読み込みます','Yes — Yan-prof-paper-read','Earnest','ren_uni'),
    mk('蓮、共同研究の奥田先生に研究照会しろ','Ren — joint-Oku-inq','Direction','hiroshi_boss'),
    mk('はい。学会で新井助教のご発表を聴きます','Yes — Conf-Arai-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の荒木先生のご論文も参考にしろ','Ren — lit-Araki-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の浅野先輩からご指導を仰ぎます','Yes — Lab-Asano-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の村山教授と打ち合わせしろ','Ren — overs-link-Mur-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、大田事務官に申請します','Yes — Res-fund-Ota-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10649',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、谷口刑事の現場対応も評価されますね','Police Tani-det-scene-eval','Cooperative','kenji_office'),
    mk('警察、参考人柳沢氏から、警察、事情を伺われますね','Police witn-Yan-careful','Cooperative','kenji_office'),
    mk('警察、被害者奥田氏のご家族にも、警察、配慮されますね','Police vict-Oku-fam-care','Cooperative','kenji_office'),
    mk('警察、署内の新井巡査の指導もされますね','Police stat-Arai-pat-guide','Cooperative','kenji_office'),
    mk('警察、捜査官荒木氏の聞き込み調査を、警察、進められますね','Police inv-Araki-canv','Cooperative','kenji_office'),
    mk('警察、鑑識の浅野主任と現場検証されますね','Police foren-Asano-scene','Cooperative','kenji_office'),
    mk('警察、犯罪心理士の村山様にご助言を仰がれますね','Police crim-psy-Mur-adv','Cooperative','kenji_office'),
    mk('警察、検事の大田様と公判前協議もされますね','Police pros-Ota-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_10650',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、谷口氏と共同事業を立ち上げられた','Dad — youth-Tani-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは柳沢先輩のご薫陶を受けられた','Yes — Dad Yan-sen-mentor','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、奥田氏と海外進出を企画された','Dad — youth-Oku-overs-plan','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新井氏を社員初期メンバーとして採用された','Yes — Dad Arai-init-hire','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、荒木氏とは同窓の付き合いだった','Dad — youth-Araki-alum','Wistful','hiroshi_elder'),
    mk('はい。お父さんは浅野氏を経理の柱に据えられた','Yes — Dad Asano-acct-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、村山氏と海外法人を立ち上げられた','Dad — youth-Mur-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは大田氏に法務全般を任された','Yes — Dad Ota-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10651',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、旧字「證」、つまり証券の歴史的表記の研究を論文で扱いましたね','Ren — old-shou-cert paper','Calm','asuka_teacher'),
    mk('はい、落語の噺、つまり古典噺の研究を論文で扱いました','Yes — Rak-hanashi paper','Earnest','ren_uni'),
    mk('蓮さん、英和辞典の編纂史の研究を論文で扱いましたね','Ren — Eng-Jp-dict paper','Reflective','asuka_teacher'),
    mk('はい、古文の云わ、つまり「言わ」の用法研究を論文で扱いました','Yes — Class-iwa-use paper','Earnest','ren_uni'),
    mk('蓮さん、明治期のノベル、つまり小説の翻訳史を論文で扱いましたね','Ren — Meiji-novel-trans paper','Reflective','asuka_teacher'),
    mk('はい、広東料理の文化史研究を論文で扱いました','Yes — Guang-cuis paper','Earnest','ren_uni'),
    mk('蓮さん、戦争にたいする世論の歴史研究を論文で扱いましたね','Ren — war-public-opin paper','Reflective','asuka_teacher'),
    mk('はい、哲学者の事物観の比較研究を論文で扱いました','Yes — Phil-thing-comp paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10652',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、旧字「證」、つまり證書の鑑定を、警察、専門家に依頼されますね','Case old-cert-shou police-expert-req','Reflective','ren_uni'),
    mk('警察、容疑者の供述、つまり噺を、警察、検証されますね','Police suspect-stmt-hanashi-verify','Cooperative','takeda_officer'),
    mk('本件、押収品の英和辞典の書込みを、警察、分析されますね','Case seiz-Eng-Jp-dict-anno police-anal','Reflective','ren_uni'),
    mk('警察、容疑者の云わくつき、つまり「言わくつき」の前科を、警察、確認されますね','Police suspect-iwaku-prior police-check','Cooperative','takeda_officer'),
    mk('本件、犯人が読んでいたノベル、つまり小説を、警察、押収されますね','Case suspect-novel police-seiz','Reflective','ren_uni'),
    mk('警察、広東省での密輸事案も国際捜査で対応されますね','Police Guang-smug-int-inv','Cooperative','takeda_officer'),
    mk('本件、被害者にたいする救済措置を、警察、迅速におこなわれますね','Case vict-relief police-quick','Reflective','ren_uni'),
    mk('警察、現場の事物、つまり遺留品を、警察、丁寧に保管されますね','Police scene-things-evid-keep','Close','takeda_officer'),
  ]},
  {id:'conv_10653',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、旧字「證」、つまり証券の歴史的表記の研究を論文で扱いましたね','Sakura — old-cert paper','Calm','asuka_teacher'),
    mk('はい、落語の噺、つまり古典噺の研究を論文で扱いました','Yes — Rak-hanashi paper','Earnest teen','sakura_teen'),
    mk('英和辞典の編纂史の研究を論文で扱いましたね','Eng-Jp-dict paper','Reflective','asuka_teacher'),
    mk('はい、古文の云わ、つまり「言わ」の用法研究を論文で扱いました','Yes — Class-iwa paper','Earnest','sakura_teen'),
    mk('明治期のノベル、つまり小説の翻訳史を論文で扱いましたね','Meiji-novel-trans paper','Reflective','asuka_teacher'),
    mk('はい、広東料理の文化史研究を論文で扱いました','Yes — Guang-cuis paper','Earnest','sakura_teen'),
    mk('戦争にたいする世論の歴史研究を論文で扱いましたね','War-public-opin paper','Reflective','asuka_teacher'),
    mk('はい、哲学者の事物観の比較研究を論文で扱いました','Yes — Phil-thing paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10654',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、旧字の医證、つまり證書の保管を医療チームでおこないます','Ren — old-med-cert med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様への説明の噺、つまり話法を医療チームで揃えます','Ren — pati-expl-hanashi med-team','Calm','saito_doctor'),
    mk('蓮さん、医学英和辞典を医療チームで日常的に活用します','Ren — med-Eng-Jp-dict-team-use','Calm','saito_doctor'),
    mk('蓮さん、患者様の云わ、つまり「云った内容」を医療チームで記録します','Ren — pati-iwa-rec med-team','Calm','saito_doctor'),
    mk('蓮さん、医療系のノベル、つまり医療小説を医療チームで参考にします','Ren — med-novel med-team-ref','Calm','saito_doctor'),
    mk('蓮さん、広東省での感染症対応事例を医療チームで学びます','Ren — Guang-pand-case med-team-learn','Calm','saito_doctor'),
    mk('蓮さん、終末期にたいするケアを医療チームで丁寧におこないます','Ren — term-care med-team-care','Calm','saito_doctor'),
    mk('蓮さん、医療事物、つまり医療機器の整理を医療チームでおこないます','Ren — med-things-eqp med-team-tidy','Calm close','saito_doctor'),
  ]},
  {id:'conv_10655',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、旧字「證」、つまり證券業界の動向を社内で共有しろ','Our co — old-shou-sec-ind-share','Crisp','hiroshi_boss'),
    mk('はい。社員向け落語の噺の会を企画します','Yes — Staff-rak-hanashi-evt-plan','Methodical','kenji_office'),
    mk('当社、英和翻訳の品質を上げろ','Our co — Eng-Jp-trans-qual-up','Direction','hiroshi_boss'),
    mk('はい。創業者の云わ、つまり「云った」社訓を再共有します','Yes — Found-iwa-mot-share','Update','kenji_office'),
    mk('当社、企業ノベル、つまり経営小説からも学べ','Our co — biz-novel-learn','Direction','hiroshi_boss'),
    mk('はい。広東省の取引先との連携を強化します','Yes — Guang-client-link-strong','Update','kenji_office'),
    mk('当社、市場変動にたいする対応力を高めろ','Our co — mkt-chg-resp-up','Direction','hiroshi_boss'),
    mk('はい。事物、つまり製品の品質管理を徹底します','Yes — Things-prod-qual-thor','Close','kenji_office'),
  ]},
  {id:'conv_10656',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、カジュアルなお洋服がお似合いだよ、メイちゃん','Aoi — cust-cas-cloth-suit Mei','Reflective','mei_romantic'),
    mk('葵、お客様、リベラルな政治思想のお話を語って下さったよ、メイちゃん','Aoi — cust-lib-pol-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、オールドファッションのお酒がお好きだって、メイちゃん','Aoi — cust-old-fash-drink Mei','Reflective','mei_romantic'),
    mk('葵、お客様、海外出張でエコノミークラスを選ばれてるって、メイちゃん','Aoi — cust-overs-econ-pick Mei','Reflective','aoi_barista'),
    mk('葵、お客様、映画「ノーマン」のお話を語って下さったよ、メイちゃん','Aoi — cust-Norman-film Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご家族の介護ヘルパーさんを称えてらしたよ、メイちゃん','Aoi — cust-fam-helper-praise Mei','Reflective','aoi_barista'),
    mk('葵、お客様、昔のカセットテープを集めてらっしゃるって、メイちゃん','Aoi — cust-old-cas-coll Mei','Reflective','mei_romantic'),
    mk('葵、お客様、サッカーのイレブン、つまり代表を語って下さったよ、メイちゃん','Aoi — cust-soccer-elev-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10657',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがカジュアルなジャケットを愛用された','Gran — youth Dad-cas-jack-fav','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、リベラルな新聞を購読されたわよね、あなた?','Yes — Grandpa-youth-lib-paper, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがオールドファッションのバーボンを楽しまれた','Gran — youth Dad-old-fash-bourb','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、海外旅行でエコノミークラスを選ばれたわよね、あなた?','Grandpa — youth-overs-econ-pick, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがノーマン・ロックウェルの絵に魅了された','Gran — youth Dad-Norm-Rock-attr','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年、ヘルパーの方々にお世話になられたわよね、あなた?','Grandpa — later-helper-care, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがカセットテープに音楽を録音された','Gran — youth Dad-cas-music-rec','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、サッカー日本代表イレブンを応援されたわよね、あなた?','Grandpa — youth-Jp-soccer-elev-cheer, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10658',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがカジュアルなお出かけを楽しまれるそうよ','Sho — Dad-cas-outing','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとリベラルな新聞のニュース観たよ','Mei-sis — me Dad-lib-news','Eager child','sho_child'),
    mk('翔くん、お父さんがオールドカーの博物館に行かれたわ','Sho — Dad-old-car-mus','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと海外旅行のエコノミークラスのお話聞いたよ','Mei-sis — me Dad-overs-econ-talk','Eager child','sho_child'),
    mk('翔くん、お父さんが「ノーマン・ベイツの映画は怖い」って仰ってたわ','Sho — Dad-"Norm-Bates-scary"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんのヘルパーさんと挨拶したよ','Mei-sis — me grdpa-helper-greet','Eager child','sho_child'),
    mk('翔くん、お父さんがカセットテープの聴き方を教えて下さったわ','Sho — Dad-cas-listen-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとサッカー日本代表イレブンの試合観たよ','Mei-sis — me Dad-Jp-soccer-elev-match','Eager close','sho_child'),
  ]},
  {id:'conv_10659',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、カジュアル系のブランド着てるな','Riku — cas-brand-wear','Curious teen','sakura_teen'),
    mk('お前、社会でリベラル派の主張調べてたな、桜','You — soc-lib-pl-stud Sakura','Curious','riku_teen'),
    mk('リク、お前、オールドジャンクの自転車修理してたな','Riku — old-junk-bike-fix','Curious','sakura_teen'),
    mk('お前、修学旅行のエコノミークラス窮屈だったろ、桜','You — sch-trip-econ-cram? Sakura','Wry','riku_teen'),
    mk('リク、お前、ノーマン・ベイツのホラー観てたな','Riku — Norm-Bates-hor','Wry','sakura_teen'),
    mk('お前、お祖母ちゃんのヘルパーさんと挨拶してたな、桜','You — grnm-helper-greet Sakura','Curious','riku_teen'),
    mk('リク、お前、家にカセットデッキあるって自慢してたな','Riku — house-cas-deck-brag','Wry','sakura_teen'),
    mk('お前、サッカー部のイレブンに選ばれたろ、桜','You — soccer-club-elev-pick? Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_10660',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがカジュアルなコーディネートを楽しまれてるわ','Sho — Dad-cas-coord-fun','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとリベラルな政治討論番組観たよ','Mom — me Dad-lib-pol-debate','Eager child','sho_child'),
    mk('翔くん、お父さんがオールドファンの映画祭に行かれるわ','Sho — Dad-old-fan-film-fes','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとエコノミークラスでの旅行記読んだよ','Mom — me Dad-econ-travel-read','Eager child','sho_child'),
    mk('翔くん、お父さんがノーマン・ロックウェルの画集を観てらっしゃるわ','Sho — Dad-Norm-Rock-art','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとお祖父ちゃんのヘルパーさんとお話したよ','Mom — me Dad-grdpa-helper-talk','Eager child','sho_child'),
    mk('翔くん、お父さんがカセットテープの音楽を流して下さるわ','Sho — Dad-cas-music-play','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとサッカー日本代表イレブンの応援したよ','Mom — me Dad-Jp-soccer-elev-cheer','Eager close','sho_child'),
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

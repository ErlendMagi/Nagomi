import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_556 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['菊地','平川','滝沢','小柴','志賀','齊藤','岸田','高崎']
const B_T = ['緒方','たたえ','東山','江口','徳永','関根','井出','新党']
const C_T = ['三宮','松平','トゥ','吉井','岩本','半田','栗山','入江']
const D_T = ['相模原','小嶋','佐原','文京','原画','沢田','クイック','壇上']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_11081',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんと菊地さんの家にお茶しに行ったわ','Sho — Dad-Kik-tea','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとお友達の平川さんに会ったよ','Mom — me Dad-Hira-met','Pleased child','sho_child'),
    mk('翔くん、お父さんが「滝沢秀明の歌は懐かしい」って仰ってたわ','Sho — Dad-"Taki-Hide-nost"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとノーベル賞の小柴博士の絵本見たよ','Mom — me Dad-Koshi-pic','Pleased child','sho_child'),
    mk('翔くん、お父さんが「志賀直哉の小説を一緒に読もう」って仰ってたわ','Sho — Dad-"Shi-Nao-read"-said','Reflective','yumiko_mom'),
    mk('ママ、お父さんが「齊藤おじいちゃんに敬意を持って」って仰ってたよ','Mom — Dad-"Saito-resp"-said','Earnest child','sho_child'),
    mk('翔くん、お父さんが「岸田首相のニュースを観よう」って仰ってたわ','Sho — Dad-"Kishida-PM-news"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと群馬県高崎の駅弁買ったよ','Mom — me Dad-Gum-Tak-bent','Eager close','sho_child'),
  ]},
  {id:'conv_11082',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご友人の菊地さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Kik-tea Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の平川さんと打ち合わせされてたよ、メイちゃん','Aoi — cust-fri-Hira-meet Mei','Reflective','aoi_barista'),
    mk('葵、お客様、滝沢秀明のファンだって、メイちゃん','Aoi — cust-Taki-Hide-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ノーベル賞の小柴博士のお話を語って下さったよ、メイちゃん','Aoi — cust-Koshi-Nob-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、志賀直哉の小説を蔵書されてるって、メイちゃん','Aoi — cust-Shi-Nao-coll Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お祖父様のお名前が齊藤さんだって、メイちゃん','Aoi — cust-grdpa-Saito Mei','Reflective','aoi_barista'),
    mk('葵、お客様、岸田政権の経済政策について語って下さったよ、メイちゃん','Aoi — cust-Kishida-econ Mei','Reflective','mei_romantic'),
    mk('葵、お客様、群馬県高崎のだるま市に行かれるって、メイちゃん','Aoi — cust-Gum-Tak-dar Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11083',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがご友人の菊地さんと文通された','Gran — youth Dad-fri-Kik-letter','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、平川さんと将棋を指されたわよね、あなた?','Yes — Grandpa-Hira-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアイドルの滝沢秀明の番組を観られた','Gran — youth Dad-Taki-Hide-prog','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、小柴博士のノーベル賞受賞ニュースを観られたわよね、あなた?','Grandpa — youth-Koshi-Nob-news, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが志賀直哉の城の崎にてを愛読された','Gran — youth Dad-Shi-Nao-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、齊藤というお名前の上司に仕えられたわよね、あなた?','Grandpa — youth-Saito-boss, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが岸田一家の歴史を研究された','Gran — youth Dad-Kishida-fam-stud','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、群馬県高崎で温泉に行かれたわよね、あなた?','Grandpa — youth-Gum-Tak-onsen, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11084',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、隣のクラスの菊地と話してたな','Riku — next-cl-Kik-talk','Curious teen','sakura_teen'),
    mk('お前のお父さん、平川さんって名前だったよな、桜','You — your-fa-Hira Sakura','Curious','riku_teen'),
    mk('リク、お前、滝沢秀明出演のドラマ観てたな','Riku — Taki-Hide-dr-watch','Wry','sakura_teen'),
    mk('お前、理科で小柴博士のニュートリノ習ったろ、桜','You — sci-Koshi-neutr? Sakura','Curious','riku_teen'),
    mk('リク、お前、国語で志賀直哉の小説読んだな','Riku — Jp-Shi-Nao-novel','Curious','sakura_teen'),
    mk('お前のクラスメート、齊藤さんって名前だったよな、桜','You — classm-Saito Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で岸田首相のニュース見てたな','Riku — soc-Kishida-PM-news','Curious','sakura_teen'),
    mk('お前、家族で群馬県高崎観音に行ったろ、桜','You — fam-Gum-Tak-Kannon? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_11085',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「菊地凛子の映画を観よう」って仰ってたわ','Sho — Dad-"Kik-Rin-film"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと平川商店街でお買物したよ','Mei-sis — me Dad-Hira-shop-st','Eager child','sho_child'),
    mk('翔くん、お父さんが滝沢歌舞伎の劇場版を観てらっしゃるわ','Sho — Dad-Taki-kab-theat','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと小柴博士の物理学の絵本見たよ','Mei-sis — me Dad-Koshi-phys-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「志賀直哉の暗夜行路を読了した」って仰ってたわ','Sho — Dad-"Shi-Nao-Anya-fin"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと齊藤茂吉の短歌を読んだよ','Mei-sis — me Dad-Saito-Mok-tan','Eager child','sho_child'),
    mk('翔くん、お父さんが岸田森の俳優論を語って下さったわ','Sho — Dad-Kishida-Mor-act-talk','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと群馬県高崎の鉄道博物館行ったよ','Mei-sis — me Dad-Gum-Tak-train-mus','Eager close','sho_child'),
  ]},
  {id:'conv_11086',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の緒方部長を歓迎しろ','Our co — new-Oga-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。社員の活躍をたたえる表彰式を準備します','Yes — Staff-act-praise-cere','Methodical','kenji_office'),
    mk('当社、京都東山地区への支店展開を進めろ','Our co — Kyoto-Hig-area-branch','Direction','hiroshi_boss'),
    mk('はい。江口広報のキャンペーンを採用します','Yes — Egu-PR-camp-adopt','Update','kenji_office'),
    mk('当社、顧問の徳永様にご助言を仰げ','Our co — adv-Toku-cons','Direction','hiroshi_boss'),
    mk('はい。経理の関根様の決算スケジュールを整えます','Yes — Acct-Sek-clos-sched','Update','kenji_office'),
    mk('当社、人事の井出様に新人研修を任せろ','Our co — HR-Ide-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。新党、つまり新党結成のニュースを社内で共有します','Yes — New-party-news-share','Close','kenji_office'),
  ]},
  {id:'conv_11087',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('緒方部長の歓迎会を準備しましょう','Oga-dept-wel-prep','Brisk','yuki_office'),
    mk('はい。社員をたたえる年末表彰式の名簿を作成します','Yes — Yr-end-praise-list','Cooperative','kenji_office'),
    mk('東山地区の市場調査を進めましょう','Hig-area-mkt-surv','Direction','yuki_office'),
    mk('はい。江口広報の月次企画書を確認します','Yes — Egu-PR-mo-plan','Update','kenji_office'),
    mk('徳永顧問との面談を予定しましょう','Toku-adv-meet-plan','Direction','yuki_office'),
    mk('はい。関根経理の決算予定を整えます','Yes — Sek-acct-clos','Update','kenji_office'),
    mk('井出人事に新人研修プランを依頼しましょう','Ide-HR-newhire','Direction','yuki_office'),
    mk('はい。新党、つまり新党結成の関連法務リスクを整理します','Yes — New-party-leg-risk','Close','kenji_office'),
  ]},
  {id:'conv_11088',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の緒方先生のご研究を継承しろ','Ren — mentor-Oga-res','Mentor','hiroshi_boss'),
    mk('はい。優れた論文をたたえる学会賞を目指します','Yes — Excel-paper-praise-award','Earnest','ren_uni'),
    mk('蓮、京都東山地区の伝統工芸の論文を読め','Ren — Kyoto-Hig-craft-paper','Direction','hiroshi_boss'),
    mk('はい。学会で江口助教のご発表を聴きます','Yes — Conf-Egu-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の徳永先生のご論文も参考にしろ','Ren — lit-Toku-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の関根先輩からご指導を仰ぎます','Yes — Lab-Sek-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の井出教授と打ち合わせしろ','Ren — overs-Ide-prof-meet','Direction','hiroshi_boss'),
    mk('はい。新党、つまり新党結成の政治学論文を読みます','Yes — New-party-pol-paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_11089',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、緒方刑事の現場対応も評価されますね','Police Oga-det-eval','Cooperative','kenji_office'),
    mk('警察、市民の協力をたたえる感謝状を、警察、贈呈されますね','Police citi-coop-praise-cert','Cooperative','kenji_office'),
    mk('警察、東山警察署と合同捜査されますね','Police Hig-stat-joint','Cooperative','kenji_office'),
    mk('警察、参考人江口氏から、警察、事情を伺われますね','Police witn-Egu-careful','Cooperative','kenji_office'),
    mk('警察、被害者徳永氏のご家族にも、警察、配慮されますね','Police vict-Toku-fam-care','Cooperative','kenji_office'),
    mk('警察、目撃者関根氏の供述を、警察、整えられますね','Police witn-Sek-stmt','Cooperative','kenji_office'),
    mk('警察、容疑者井出の前科を、警察、確認されますね','Police suspect-Ide-prior','Cooperative','kenji_office'),
    mk('警察、新党、つまり新党結成時の公安動向も把握されますね','Police new-party-int-mon','Close','kenji_office'),
  ]},
  {id:'conv_11090',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、緒方氏と共同事業を立ち上げられた','Dad — youth-Oga-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員の貢献をたたえる事を大事にされた','Yes — Dad staff-praise-cher','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、京都東山の老舗料亭で接待された','Dad — youth-Hig-rest-ent','Wistful','hiroshi_elder'),
    mk('はい。お父さんは江口氏を広報の柱に据えられた','Yes — Dad Egu-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、徳永氏と経理体制を整えられた','Dad — youth-Toku-acct','Wistful','hiroshi_elder'),
    mk('はい。お父さんは関根氏を主任として育てられた','Yes — Dad Sek-lead-grow','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、井出氏と海外法人を立ち上げられた','Dad — youth-Ide-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新党、つまり新党結成期の動向に詳しかった','Yes — Dad new-party-era-knowl','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_11091',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、神戸三宮の地震被害復興史を論文で扱いましたね','Ren — Kob-San-quake paper','Calm','asuka_teacher'),
    mk('はい、徳川松平家の系譜研究を論文で扱いました','Yes — Toku-Matsu-gen paper','Earnest','ren_uni'),
    mk('蓮さん、英語のトゥ、つまり「to」音素の音韻論を論文で扱いましたね','Ren — Eng-tu-phon paper','Reflective','asuka_teacher'),
    mk('はい、政治家吉井英勝氏の議会活動研究を論文で扱いました','Yes — Yos-Hide-parl paper','Earnest','ren_uni'),
    mk('蓮さん、岩本徹三のゼロ戦操縦の戦記を論文で扱いましたね','Ren — Iwa-Tetsu-zero paper','Reflective','asuka_teacher'),
    mk('はい、電気工学の半田、つまり半田付けの工学研究を論文で扱いました','Yes — Solder-eng paper','Earnest','ren_uni'),
    mk('蓮さん、野球の栗山英樹監督の采配研究を論文で扱いましたね','Ren — Base-Kuri-Hide-mgr paper','Reflective','asuka_teacher'),
    mk('はい、海岸の入江、つまり入江地形の海洋学研究を論文で扱いました','Yes — Coast-cove-oc paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_11092',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、神戸三宮駅周辺の事案を、警察、対応されますね','Case Kob-San-area police-resp','Reflective','ren_uni'),
    mk('警察、徳川松平家ゆかりの古文書盗難も捜査されますね','Police Toku-Matsu-doc-theft','Cooperative','takeda_officer'),
    mk('本件、英語通訳でトゥ、つまり「to」発音を、警察、正確にされますね','Case Eng-int-tu police-acc','Reflective','ren_uni'),
    mk('警察、参考人吉井氏から、警察、事情を伺われますね','Police witn-Yos-careful','Cooperative','takeda_officer'),
    mk('本件、被害者岩本氏のご家族にも、警察、配慮されますね','Case vict-Iwa-fam-care','Reflective','ren_uni'),
    mk('警察、現場の半田、つまり半田痕の鑑識もされますね','Police scene-solder-foren','Cooperative','takeda_officer'),
    mk('本件、容疑者栗山の前科を、警察、確認されますね','Case suspect-Kuri-prior','Reflective','ren_uni'),
    mk('警察、現場の入江、つまり入江地形の捜索もされますね','Police scene-cove-search','Close','takeda_officer'),
  ]},
  {id:'conv_11093',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、神戸三宮の地震被害復興史を論文で扱いましたね','Sakura — San paper','Calm','asuka_teacher'),
    mk('はい、徳川松平家の系譜研究を論文で扱いました','Yes — Matsu paper','Earnest teen','sakura_teen'),
    mk('英語のトゥ、つまり「to」音素の音韻論を論文で扱いましたね','Eng-tu paper','Reflective','asuka_teacher'),
    mk('はい、政治家吉井英勝氏の議会活動研究を論文で扱いました','Yes — Yos paper','Earnest','sakura_teen'),
    mk('岩本徹三のゼロ戦操縦の戦記を論文で扱いましたね','Iwa-Tetsu paper','Reflective','asuka_teacher'),
    mk('はい、電気工学の半田、つまり半田付けの工学研究を論文で扱いました','Yes — Solder paper','Earnest','sakura_teen'),
    mk('野球の栗山英樹監督の采配研究を論文で扱いましたね','Kuri-Hide paper','Reflective','asuka_teacher'),
    mk('はい、海岸の入江、つまり入江地形の海洋学研究を論文で扱いました','Yes — Cove paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_11094',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、神戸三宮の医療機関と医療チームで連携します','Ren — Kob-San-med-link med-team','Calm','saito_doctor'),
    mk('蓮さん、徳川松平家ゆかりの古医書を医療チームで保管します','Ren — Toku-Matsu-med-doc med-team','Calm','saito_doctor'),
    mk('蓮さん、英語医療文献のトゥ、つまり「to」表記を医療チームで正確に訳します','Ren — Eng-med-tu-trans med-team','Calm','saito_doctor'),
    mk('蓮さん、患者吉井様のご症状を医療チームで継続観察します','Ren — pati-Yos med-team','Calm','saito_doctor'),
    mk('蓮さん、患者岩本様のリハビリを医療チームで支援します','Ren — pati-Iwa-rehab med-team','Calm','saito_doctor'),
    mk('蓮さん、医療機器の半田、つまり半田付け修理を医療チームで管理します','Ren — med-eqp-solder med-team','Calm','saito_doctor'),
    mk('蓮さん、患者栗山様のご症状を医療チームで継続観察します','Ren — pati-Kuri med-team','Calm','saito_doctor'),
    mk('蓮さん、海岸の入江、つまり入江での溺水救助を医療チームで担当します','Ren — coast-cove-drown med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_11095',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、神戸三宮の支店を新規開設しろ','Our co — Kob-San-branch-new','Crisp','hiroshi_boss'),
    mk('はい。徳川松平家ゆかりの記念商品を企画します','Yes — Matsu-com-prod','Methodical','kenji_office'),
    mk('当社、英語表記のトゥ、つまり「to」の使い方を社内で統一しろ','Our co — Eng-tu-uni','Direction','hiroshi_boss'),
    mk('はい。海外取引先の吉井氏との会合を設定します','Yes — Overs-Yos-meet','Update','kenji_office'),
    mk('当社、顧問の岩本様にご助言を仰げ','Our co — adv-Iwa-cons','Direction','hiroshi_boss'),
    mk('はい。製造現場の半田、つまり半田作業の安全教育を強化します','Yes — Fact-solder-safe-train','Update','kenji_office'),
    mk('当社、栗山顧問の経営アドバイスを採用しろ','Our co — adv-Kuri-mgmt-adv','Direction','hiroshi_boss'),
    mk('はい。海辺の入江、つまり入江沿いのリゾート開発を進めます','Yes — Coast-cove-resort','Close','kenji_office'),
  ]},
  {id:'conv_11096',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、神奈川県相模原市にお住まいだって、メイちゃん','Aoi — cust-Kan-Sag-live Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ペットの名前を小嶋ちゃんって付けたって、メイちゃん','Aoi — cust-pet-Koji-named Mei','Reflective','aoi_barista'),
    mk('葵、お客様、千葉県佐原の小江戸の街並みがお好きだって、メイちゃん','Aoi — cust-Chiba-Sah-old-town Mei','Reflective','mei_romantic'),
    mk('葵、お客様、東京の文京区にお住まいだって、メイちゃん','Aoi — cust-Tok-Bun-live Mei','Reflective','aoi_barista'),
    mk('葵、お客様、アニメの原画展に行かれたって、メイちゃん','Aoi — cust-anime-orig-pic-exhib Mei','Reflective','mei_romantic'),
    mk('葵、お客様、沢田研二のファンだって、メイちゃん','Aoi — cust-Sawada-Ken-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、クイック電源、つまりクイック式の充電がお好みだって、メイちゃん','Aoi — cust-quick-charge-fav Mei','Reflective','mei_romantic'),
    mk('葵、お客様、講演会で壇上に立たれたって、メイちゃん','Aoi — cust-conf-stage-stand Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11097',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが神奈川県相模原に出張された','Gran — youth Dad-Sag-trip','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、ご友人の小嶋さんと文通されたわよね、あなた?','Yes — Grandpa-Koji-letter, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが千葉県佐原の祭りを観られた','Gran — youth Dad-Sah-fes','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、東京の文京区の大学に通われたわよね、あなた?','Grandpa — youth-Bun-univ, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが映画の原画展に通われた','Gran — youth Dad-orig-pic-exhib','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、沢田研二のコンサートに行かれたわよね、あなた?','Grandpa — youth-Sawada-Ken-conc, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがクイック現像、つまりクイック写真を愛用された','Gran — youth Dad-quick-photo-fav','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、講演会で壇上に立たれたわよね、あなた?','Grandpa — youth-conf-stage, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11098',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「神奈川県相模原に親戚を訪ねよう」って仰ってたわ','Sho — Dad-"Sag-rel-vis"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと小嶋家のお祝いに行ったよ','Mei-sis — me Dad-Koji-cel','Eager child','sho_child'),
    mk('翔くん、お父さんが「千葉県佐原の小江戸を観光しよう」って仰ってたわ','Sho — Dad-"Sah-old-town-tour"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと東京の文京区にある後楽園行ったよ','Mei-sis — me Dad-Bun-Korak','Eager child','sho_child'),
    mk('翔くん、お父さんがアニメの原画展に連れて下さるそうよ','Sho — Dad-anime-orig-pic','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと沢田研二の懐メロ聴いたよ','Mei-sis — me Dad-Sawada-Ken-nost','Eager child','sho_child'),
    mk('翔くん、お父さんがクイックチャージ式のおもちゃを下さるわ','Sho — Dad-quick-charge-toy','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「壇上に上がる勇気」を学んだよ','Mei-sis — me Dad-"stage-courage"-learn','Earnest close','sho_child'),
  ]},
  {id:'conv_11099',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、神奈川県相模原のJAXA見学行ったろ','Riku — Sag-JAXA?','Curious teen','sakura_teen'),
    mk('お前、隣のクラスの小嶋と話してたな、桜','You — next-cl-Koji-talk Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で千葉県佐原の祭り行ったろ','Riku — fam-Sah-fes?','Curious','sakura_teen'),
    mk('お前、東京文京区の中学に通ってたよな、桜','You — Tok-Bun-jr-high Sakura','Curious','riku_teen'),
    mk('リク、お前、漫画の原画展に並んでたな','Riku — mng-orig-pic-line','Curious','sakura_teen'),
    mk('お前、音楽で沢田研二の曲習ったろ、桜','You — mus-Sawada-Ken? Sakura','Curious','riku_teen'),
    mk('リク、お前、クイック家事って言葉気に入ってたな','Riku — "quick-chore"-like','Wry','sakura_teen'),
    mk('お前、文化祭で壇上に上がってスピーチしたろ、桜','You — cul-fes-stage-sp? Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_11100',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが神奈川県相模原のJAXAニュースを観てらっしゃるわ','Sho — Dad-Sag-JAXA-news','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと小嶋家との交流の写真見たよ','Mom — me Dad-Koji-int-photo','Eager child','sho_child'),
    mk('翔くん、お父さんが千葉県佐原のお祭りの旅程を考えてらっしゃるわ','Sho — Dad-Sah-fes-trip','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと東京の文京区のシビックセンター行ったよ','Mom — me Dad-Bun-civic','Eager child','sho_child'),
    mk('翔くん、お父さんがジブリ作品の原画展に行かれるそうよ','Sho — Dad-Ghibli-orig-pic','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと沢田研二の懐メロカラオケしたよ','Mom — me Dad-Sawada-Ken-kara','Eager child','sho_child'),
    mk('翔くん、お父さんがクイックタイプの電子レンジを新調されたわ','Sho — Dad-quick-microw-renew','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと卒業式の壇上に立つ準備したよ','Mom — me Dad-grad-stage-prep','Eager close','sho_child'),
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

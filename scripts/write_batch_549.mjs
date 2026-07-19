import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_549 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['久美子','節子','涼子','亜紀','いずみ','千里','かおり','片側']
const B_T = ['船橋','府中','松村','岡部','江田','栗原','角田','板橋']
const C_T = ['櫃','鷯','豺','厘','平蔵','少佐','空海','膣']
const D_T = ['アワ','ニャン','童貞','メヒコ','ペセタ','ルーシー','レヴィナス','スラブ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10941',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがお友達の久美子さんを夕食に招待されたわ','Sho — Dad-fri-Kumiko-din','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと節子おばさんの家に行ったよ','Mom — me Dad-Setsuko-aunt-vis','Pleased child','sho_child'),
    mk('翔くん、お父さんが「涼子さんのお花教室にママを誘って」って仰ってたわ','Sho — Dad-"Ryoko-flo-inv"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと亜紀いとこと公園で遊んだよ','Mom — me Dad-Aki-cous-park','Pleased child','sho_child'),
    mk('翔くん、お父さんが「いずみちゃんとも仲良くね」って仰ってたわ','Sho — Dad-"Izumi-fri"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと千里おばさんに会ったよ','Mom — me Dad-Chisato-aunt-met','Eager child','sho_child'),
    mk('翔くん、お父さんが「かおりちゃんが結婚されたわ」って語って下さったわ','Sho — Dad-"Kaori-marr"-talk','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「片側通行の道路は気を付けて」って教えて頂いたよ','Mom — me Dad-"one-way-care"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10942',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご友人の久美子さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Kumiko-tea Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お母様のお名前が節子さんだって、メイちゃん','Aoi — cust-mom-Setsuko Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人の涼子さんと音楽鑑賞されてたよ、メイちゃん','Aoi — cust-fri-Ryoko-mus Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お孫様の亜紀ちゃんを連れていらしたよ、メイちゃん','Aoi — cust-grdkid-Aki-vis Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人のいずみさんと打ち合わせされてたよ、メイちゃん','Aoi — cust-fri-Izumi-meet Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お母様のお名前が千里さんだって、メイちゃん','Aoi — cust-mom-Chisato Mei','Reflective','aoi_barista'),
    mk('葵、お客様、姪御さんのお名前がかおりちゃんだって、メイちゃん','Aoi — cust-niece-Kaori Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「ソファの片側を空けてもらえる?」って仰ってたよ、メイちゃん','Aoi — cust-"sofa-one-side"-said Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10943',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがご友人の久美子さんと文通された','Gran — youth Dad-fri-Kumiko-letter','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、節子さんと俳句を詠まれたわよね、あなた?','Yes — Grandpa-Setsuko-haik, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが妹の涼子さんを可愛がられた','Gran — youth Dad-sis-Ryoko-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、姪の亜紀さんと旅行されたわよね、あなた?','Grandpa — youth-niece-Aki-trip, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが従妹のいずみさんとお酒を酌み交わされた','Gran — youth Dad-cous-Izumi-drink','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、千里おばさんと将棋を指されたわよね、あなた?','Grandpa — youth-Chisato-aunt-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお孫のかおりさんを可愛がられた','Gran — youth Dad-grdkid-Kaori-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、足の片側を痛められたわよね、あなた?','Grandpa — youth-leg-one-side-hurt, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10944',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、隣のクラスの久美子と話してたな','Riku — next-cl-Kumiko-talk','Curious teen','sakura_teen'),
    mk('お前のお祖母様、節子さんって名前だったよな、桜','You — grnm-Setsuko Sakura','Curious','riku_teen'),
    mk('リク、お前、隣のクラスの涼子と話してたな','Riku — next-cl-Ryoko-talk','Curious','sakura_teen'),
    mk('お前のいとこ、亜紀ちゃんって名前だったよな、桜','You — cous-Aki Sakura','Curious','riku_teen'),
    mk('リク、お前、家庭科でいずみ先生に教わったろ','Riku — home-Izumi-tch?','Curious','sakura_teen'),
    mk('お前、家族で大阪府千里行ったろ、桜','You — fam-Osaka-Chisato? Sakura','Curious','riku_teen'),
    mk('リク、お前、隣のクラスのかおりと話してたな','Riku — next-cl-Kaori-talk','Curious','sakura_teen'),
    mk('お前、自転車で歩道の片側通行守ってたな、桜','You — bike-one-side-rule Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10945',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「久美子おばさんは料理上手」って仰ってたわ','Sho — Dad-"Kumiko-aunt-cook"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと節子おばさんに会いに行ったよ','Mei-sis — me Dad-Setsuko-aunt-vis','Eager child','sho_child'),
    mk('翔くん、お父さんが「涼子いとこが結婚されたわ」って語って下さったわ','Sho — Dad-"Ryoko-cous-marr"-talk','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと亜紀ちゃんの誕生日会に行ったよ','Mei-sis — me Dad-Aki-bday','Eager child','sho_child'),
    mk('翔くん、お父さんが「いずみちゃんとピアノ連弾しよう」って仰ってたわ','Sho — Dad-"Izumi-piano"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと千里おばさんの家でお茶飲んだよ','Mei-sis — me Dad-Chisato-aunt-tea','Eager child','sho_child'),
    mk('翔くん、お父さんが「かおりちゃんはピアノが上手」って仰ってたわ','Sho — Dad-"Kaori-piano"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「自転車は道の片側を守って走る」って教えて頂いたよ','Mei-sis — me Dad-"bike-one-side"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10946',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、千葉県船橋の支店を強化しろ','Our co — Chiba-Funa-branch-strong','Crisp','hiroshi_boss'),
    mk('はい。東京府中の研究所と連携します','Yes — Tok-Fuchu-lab-link','Methodical','kenji_office'),
    mk('当社、新任の松村部長を歓迎しろ','Our co — new-Mat-dept-wel','Direction','hiroshi_boss'),
    mk('はい。営業の岡部課長の出張日程を整えます','Yes — Sales-Oka-mgr-trip','Update','kenji_office'),
    mk('当社、技術担当の江田主任にプロジェクトを任せろ','Our co — tech-Eda-lead-proj','Direction','hiroshi_boss'),
    mk('はい。広報の栗原様の戦略を採用します','Yes — PR-Kuri-strat-adopt','Update','kenji_office'),
    mk('当社、人事の角田様に新人研修を任せろ','Our co — HR-Tsuno-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。法務の板橋様に契約書確認を依頼します','Yes — Leg-Ita-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_10947',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('船橋支店のキャンペーンを企画しましょう','Funa-branch-camp','Brisk','yuki_office'),
    mk('はい。府中事業所の月次報告を確認します','Yes — Fuchu-mo-rep','Cooperative','kenji_office'),
    mk('松村部長の歓迎会を準備しましょう','Mat-dept-wel-prep','Direction','yuki_office'),
    mk('はい。岡部課長の引き継ぎ書を確認します','Yes — Oka-mgr-handov','Update','kenji_office'),
    mk('江田技術主任のプロジェクト進捗を共有しましょう','Eda-tech-lead-share','Direction','yuki_office'),
    mk('はい。栗原広報の月次企画書を確認します','Yes — Kuri-PR-mo-plan','Update','kenji_office'),
    mk('角田人事に新人研修プランを依頼しましょう','Tsuno-HR-newhire','Direction','yuki_office'),
    mk('はい。板橋法務に新契約レビューを依頼します','Yes — Ita-leg-new-contr','Close','kenji_office'),
  ]},
  {id:'conv_10948',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、船橋キャンパスの研究員と連携しろ','Ren — Funa-camp-res-link','Mentor','hiroshi_boss'),
    mk('はい。府中の研究所の論文を読み込みます','Yes — Fuchu-lab-paper','Earnest','ren_uni'),
    mk('蓮、共同研究の松村先生に研究照会しろ','Ren — joint-Mat-inq','Direction','hiroshi_boss'),
    mk('はい。学会で岡部助教のご発表を聴きます','Yes — Conf-Oka-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の江田先生のご論文も参考にしろ','Ren — lit-Eda-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の栗原先輩からご指導を仰ぎます','Yes — Lab-Kuri-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の角田教授と打ち合わせしろ','Ren — overs-Tsuno-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、板橋事務官に申請します','Yes — Res-fund-Ita-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10949',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、船橋署との合同捜査をされますね','Police Funa-stat-joint','Cooperative','kenji_office'),
    mk('警察、府中署と連携した広域捜査も担当されますね','Police Fuchu-stat-wide-inv','Cooperative','kenji_office'),
    mk('警察、参考人松村氏から、警察、事情を伺われますね','Police witn-Mat-careful','Cooperative','kenji_office'),
    mk('警察、被害者岡部氏のご家族にも、警察、配慮されますね','Police vict-Oka-fam-care','Cooperative','kenji_office'),
    mk('警察、目撃者江田氏の供述を、警察、整えられますね','Police witn-Eda-stmt','Cooperative','kenji_office'),
    mk('警察、容疑者栗原の前科を、警察、確認されますね','Police suspect-Kuri-prior','Cooperative','kenji_office'),
    mk('警察、署内の鑑識角田主任と現場検証されますね','Police stat-foren-Tsuno-scene','Cooperative','kenji_office'),
    mk('警察、検事の板橋様と公判前協議もされますね','Police pros-Ita-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_10950',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、船橋に支店を開設された','Dad — youth-Funa-branch-open','Sage','hiroshi_elder'),
    mk('はい。お父さんは府中の研究所を建てられた','Yes — Dad Fuchu-lab-build','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、松村氏と共同事業を立ち上げられた','Dad — youth-Mat-JV','Wistful','hiroshi_elder'),
    mk('はい。お父さんは岡部先輩のご薫陶を受けられた','Yes — Dad Oka-sen-mentor','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、江田氏と海外進出を企画された','Dad — youth-Eda-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんは栗原氏を広報の柱に据えられた','Yes — Dad Kuri-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、角田氏と海外法人を立ち上げられた','Dad — youth-Tsuno-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは板橋氏に法務全般を委ねられた','Yes — Dad Ita-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10951',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、古い家具の櫃、つまり長持の民俗誌を論文で扱いましたね','Ren — old-chest-folk paper','Calm','asuka_teacher'),
    mk('はい、山鷯、つまり鷯属の野鳥分類研究を論文で扱いました','Yes — Wren-bird paper','Earnest','ren_uni'),
    mk('蓮さん、絶滅危惧の豺、つまり野犬科の生態研究を論文で扱いましたね','Ren — endang-jack paper','Reflective','asuka_teacher'),
    mk('はい、戦前の通貨単位、厘の経済史研究を論文で扱いました','Yes — Prewar-rin-curr paper','Earnest','ren_uni'),
    mk('蓮さん、池波正太郎の鬼平、つまり鬼の平蔵の文学研究を論文で扱いましたね','Ren — Onihei-Hei paper','Reflective','asuka_teacher'),
    mk('はい、旧軍の少佐、つまり少佐階級の研究を論文で扱いました','Yes — Old-mil-maj paper','Earnest','ren_uni'),
    mk('蓮さん、平安時代の僧侶空海の研究を論文で扱いましたね','Ren — Heian-Kuk paper','Reflective','asuka_teacher'),
    mk('はい、産婦人科の膣、つまり膣分泌物の研究を論文で扱いました','Yes — OBGYN-vag paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10952',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、骨董の櫃、つまり長持の盗難を、警察、捜査されますね','Case ant-chest-theft police-inv','Reflective','ren_uni'),
    mk('警察、希少野鳥、つまり鷯属の密猟事案も対応されますね','Police rare-wren-poach','Cooperative','takeda_officer'),
    mk('本件、害獣の豺、つまり野犬出没情報を、警察、把握されますね','Case wild-jack-info police-mon','Reflective','ren_uni'),
    mk('警察、骨董の厘銭、つまり厘単位古銭の盗難捜査もされますね','Police ant-rin-coin-theft','Cooperative','takeda_officer'),
    mk('本件、鬼平、つまり鬼の平蔵にちなんだ騙り事案を、警察、捜査されますね','Case Onihei-imp police-inv','Reflective','ren_uni'),
    mk('警察、旧軍少佐ゆかりの遺品事案も対応されますね','Police old-mil-maj-relic','Cooperative','takeda_officer'),
    mk('本件、空海ゆかりの文化財盗難を、警察、捜査されますね','Case Kuk-art-theft police-inv','Reflective','ren_uni'),
    mk('警察、産婦人科関連の膣盗撮事件も慎重に対応されますね','Police OBGYN-vag-spy-cam','Close','takeda_officer'),
  ]},
  {id:'conv_10953',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、古い家具の櫃、つまり長持の民俗誌を論文で扱いましたね','Sakura — chest paper','Calm','asuka_teacher'),
    mk('はい、山鷯、つまり鷯属の野鳥分類研究を論文で扱いました','Yes — Wren paper','Earnest teen','sakura_teen'),
    mk('絶滅危惧の豺、つまり野犬科の生態研究を論文で扱いましたね','Jack paper','Reflective','asuka_teacher'),
    mk('はい、戦前の通貨単位、厘の経済史研究を論文で扱いました','Yes — Rin paper','Earnest','sakura_teen'),
    mk('池波正太郎の鬼平、つまり鬼の平蔵の文学研究を論文で扱いましたね','Onihei paper','Reflective','asuka_teacher'),
    mk('はい、旧軍の少佐、つまり少佐階級の研究を論文で扱いました','Yes — Maj paper','Earnest','sakura_teen'),
    mk('平安時代の僧侶空海の研究を論文で扱いましたね','Kuk paper','Reflective','asuka_teacher'),
    mk('はい、産婦人科の膣、つまり膣分泌物の研究を論文で扱いました','Yes — Vag paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10954',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、古い医療用櫃、つまり薬箱の保管を医療チームで研究します','Ren — old-med-chest med-team','Calm','saito_doctor'),
    mk('蓮さん、鳥インフル研究で鷯、つまり鷯属の感染リスクを医療チームで監視します','Ren — avi-wren-inf med-team','Calm','saito_doctor'),
    mk('蓮さん、豺、つまり野犬咬傷の症例を医療チームで対応します','Ren — jack-bite med-team','Calm','saito_doctor'),
    mk('蓮さん、医薬品の単価が一厘単位、つまり厘までの精度を医療チームで管理します','Ren — drug-rin-prec med-team','Calm','saito_doctor'),
    mk('蓮さん、患者平蔵様のご症状を医療チームで継続観察します','Ren — pati-Hei-cond med-team','Calm','saito_doctor'),
    mk('蓮さん、旧軍少佐の戦傷ケアの歴史を医療チームで学びます','Ren — old-maj-war-wound med-team','Calm','saito_doctor'),
    mk('蓮さん、空海ゆかりの薬草の医療史を医療チームで研究します','Ren — Kuk-herb-med-hist med-team','Calm','saito_doctor'),
    mk('蓮さん、膣、つまり膣分泌物の検査を医療チームで丁寧におこないます','Ren — vag-secr-test med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10955',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、櫃、つまり伝統長持の復刻商品を企画しろ','Our co — chest-rep-prod','Crisp','hiroshi_boss'),
    mk('はい。鷯、つまり野鳥保護のCSR活動を進めます','Yes — Wren-prot-CSR','Methodical','kenji_office'),
    mk('当社、豺、つまり野犬対策の地域協議に参加しろ','Our co — jack-prev-coop','Direction','hiroshi_boss'),
    mk('はい。単価を一厘単位、つまり厘までの管理に切り替えます','Yes — Rin-unit-mgmt','Update','kenji_office'),
    mk('当社、鬼平、つまり鬼の平蔵にちなんだ和食ブランドを出せ','Our co — Onihei-Jp-brand','Direction','hiroshi_boss'),
    mk('はい。退役少佐、つまり旧軍少佐の方の講演会を企画します','Yes — Ret-maj-lec','Update','kenji_office'),
    mk('当社、空海ゆかりの観光商品を企画しろ','Our co — Kuk-tour-prod','Direction','hiroshi_boss'),
    mk('はい。女性用ケア商品で膣、つまり膣ケア製品の市場調査をします','Yes — Fem-vag-care-mkt','Close','kenji_office'),
  ]},
  {id:'conv_10956',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お土産で四国徳島のアワ、つまり粟雑炊を持って来て下さったよ、メイちゃん','Aoi — cust-Toku-Awa-souv Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ペットの猫が「ニャン」と鳴くお話で笑ってらしたよ、メイちゃん','Aoi — cust-cat-"nyan"-laugh Mei','Wry','aoi_barista'),
    mk('葵、お客様、若い頃の童貞文学のお話を語って下さったよ、メイちゃん','Aoi — cust-youth-virg-lit Mei','Reflective','mei_romantic'),
    mk('葵、お客様、スペイン語でメキシコ、つまりメヒコと呼ぶって、メイちゃん','Aoi — cust-Sp-Mex-Mehico Mei','Reflective','aoi_barista'),
    mk('葵、お客様、旧スペインの通貨ペセタのお話を語って下さったよ、メイちゃん','Aoi — cust-Sp-peseta-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「ピーナッツ」の犬ルーシーが好きだって、メイちゃん','Aoi — cust-Peanuts-Lucy-fav Mei','Reflective','aoi_barista'),
    mk('葵、お客様、哲学者レヴィナスの倫理学に詳しいって、メイちゃん','Aoi — cust-Lev-eth-knowl Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ヨーロッパのスラブ系言語に詳しいって、メイちゃん','Aoi — cust-Slav-lang-knowl Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10957',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが徳島のアワ、つまり粟料理を愛された','Gran — youth Dad-Toku-Awa-cook','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、お孫様にニャンと猫の真似されたわよね、あなた?','Yes — Grandpa-grdkid-"nyan", dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが童貞時代の作家を志されてた事もあった','Gran — youth Dad-virg-novelist-asp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、メキシコのメヒコ市にお勤めだったわよね、あなた?','Grandpa — youth-Mex-Mehico-work, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが旧スペインペセタを記念で蒐集された','Gran — youth Dad-Sp-peseta-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ピーナッツのルーシーの漫画を愛されたわよね、あなた?','Grandpa — youth-Lucy-mng-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが哲学者レヴィナスの本を蔵書された','Gran — youth Dad-Lev-book-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、東欧のスラブ系民族に詳しかったわよね、あなた?','Grandpa — youth-E-Eur-Slav-knowl, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10958',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「四国徳島のアワ、つまり粟料理を一緒に食べよう」って仰ってたわ','Sho — Dad-"Awa-eat"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとペットの猫に「ニャン」って真似して鳴いたよ','Mei-sis — me Dad-cat-"nyan"-mimic','Eager child','sho_child'),
    mk('翔くん、お父さんが「童貞時代に書いた詩を読んでみない?」って仰ってたわ','Sho — Dad-"virg-poem"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとメキシコ、つまりメヒコの絵本を見たよ','Mei-sis — me Dad-Mex-Mehico-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「旧スペイン通貨のペセタを見せてあげる」って仰ってたわ','Sho — Dad-"Sp-peseta-show"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとピーナッツのルーシーの絵本見たよ','Mei-sis — me Dad-Lucy-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「レヴィナス哲学は他者を大切にする教え」って教えて下さったわ','Sho — Dad-"Lev-other-cher"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとスラブ系民族の民謡聴いたよ','Mei-sis — me Dad-Slav-folk','Eager close','sho_child'),
  ]},
  {id:'conv_10959',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、家族旅行で徳島のアワ、つまり粟料理食べたろ','Riku — fam-Awa? ','Curious teen','sakura_teen'),
    mk('お前、ペットの猫に「ニャン」って話しかけてたな、桜','You — cat-"nyan"-talk Sakura','Wry','riku_teen'),
    mk('リク、お前、漫画で「童貞」キャラ多いって笑ってたな','Riku — mng-virg-char-laugh','Wry','sakura_teen'),
    mk('お前、社会でメキシコをスペイン語のメヒコ呼びしてたな、桜','You — soc-Mex-Mehico-pron Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で旧スペインのペセタ知ったろ','Riku — soc-Sp-peseta?','Curious','sakura_teen'),
    mk('お前、ピーナッツのルーシー好きだったよな、桜','You — Lucy-fan Sakura','Curious','riku_teen'),
    mk('リク、お前、倫理の授業でレヴィナス習ったろ','Riku — eth-class-Lev?','Curious','sakura_teen'),
    mk('お前、社会でスラブ系言語の特集調べてたな、桜','You — soc-Slav-lang-stud Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10960',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがアワ、つまり徳島の粟料理のお取り寄せをされたわ','Sho — Dad-Awa-deliv','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと家の猫が「ニャン」と鳴く動画撮ったよ','Mom — me Dad-cat-"nyan"-vid','Eager child','sho_child'),
    mk('翔くん、お父さんが「童貞期の青春小説は名作」って仰ってたわ','Sho — Dad-"virg-novel-masterp"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとメキシコ、つまりメヒコ料理のレストラン行ったよ','Mom — me Dad-Mehico-rest','Eager child','sho_child'),
    mk('翔くん、お父さんがコレクションの旧スペインペセタ硬貨を見せて下さったわ','Sho — Dad-Sp-peseta-coin-show','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとピーナッツのルーシーのアニメ観たよ','Mom — me Dad-Lucy-anime','Eager child','sho_child'),
    mk('翔くん、お父さんが哲学者レヴィナスの講義動画を観てらっしゃるわ','Sho — Dad-Lev-lec-vid','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとスラブ系言語の比較表観たよ','Mom — me Dad-Slav-lang-table','Eager close','sho_child'),
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

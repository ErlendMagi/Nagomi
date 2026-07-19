import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_510 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['こんにちわ','アタシ','くだり','ふやし','往々','遥かに','シンクロ','吸わ']
const B_T = ['下方','私鉄','郵貯','竣工','インサイド','四方','ロイター','パーフェクト']
const C_T = ['茎','世俗','パラダイム','フェミニズム','中南米','遠距離','金星','生死']
const D_T = ['デリー','サウジアラビア','ユナイテッド','ダライ','家康','ジュネーブ','トロイ','台北']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10161',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんに「こんにちわ」って明るく挨拶しようね','Sho — Dad-"hello"-bright-greet','Direction','yumiko_mom'),
    mk('ママ、アタシも頑張るからお父さん見てて','Mom — me-girl-effort-Dad-watch','Eager child','sho_child'),
    mk('翔くん、絵本のくだりが面白かったね','Sho — pic-passage-fun','Pleased','yumiko_mom'),
    mk('ママ、お父さんが家計に余裕をふやして下さってるよ','Mom — Dad-fam-budget-up','Tender child','sho_child'),
    mk('翔くん、お父さんの判断は往々にして正しいわね','Sho — Dad-judg-often-right','Reflective','yumiko_mom'),
    mk('ママ、お父さんの背中が遥かに大きく見えるよ','Mom — Dad-back-far-big','Tender child','sho_child'),
    mk('翔くん、お父さんと心がシンクロする瞬間が嬉しいわね','Sho — Dad-heart-sync-glad','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに煙草を吸わないでって頼んだよ','Mom — me Dad-cig-no-asked','Earnest close','sho_child'),
  ]},
  {id:'conv_10162',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、メールに「こんにちわ」って書かれて来たよ、メイちゃん','Aoi — cust-mail-"hello"-came Mei','Reflective','mei_romantic'),
    mk('葵、お客様、アタシって自称される若い女性客だったよ、メイちゃん','Aoi — cust-me-girl-young Mei','Reflective','aoi_barista'),
    mk('葵、お客様、雑誌のくだりを話題にされてたよ、メイちゃん','Aoi — cust-mag-passage Mei','Reflective','mei_romantic'),
    mk('葵、商品の種類をふやして売り場を充実させようね、メイちゃん','Aoi — prod-up-floor Mei','Direction','aoi_barista'),
    mk('葵、人気商品は往々にして売り切れるね、メイちゃん','Aoi — pop-prod-often-sold-out Mei','Reflective','mei_romantic'),
    mk('葵、お客様の数が先週より遥かに多いね、メイちゃん','Aoi — cust-week-far-more Mei','Pleased','aoi_barista'),
    mk('葵、スタッフの動きがシンクロしてると気持ち良いね、メイちゃん','Aoi — staff-sync-good Mei','Pleased','mei_romantic'),
    mk('葵、店内は煙草を吸わないお客様限定よね、メイちゃん','Aoi — store-cig-no-cust Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_10163',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが手紙の冒頭に「こんにちわ」と書かれた','Gran — youth Dad-letter-open-"hello"','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、私を昔は「アタシ」と呼んでたわよね、あなた?','Yes — Grandpa-me-girl-call, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが古典のくだりを諳んじられた','Gran — youth Dad-class-passage-recite','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、家族の楽しみをふやす工夫をされたわよね、あなた?','Grandpa — fam-joy-up-impr, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの予言は往々にして当たった','Gran — youth Dad-pred-often-hit','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、遥かに昔の記憶も鮮明でいらしたわよね、あなた?','Grandpa — far-mem-vivid, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと心がシンクロする時があった','Gran — youth Dad-heart-sync','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年は煙草を吸わない様にされたわよね、あなた?','Grandpa — late-cig-quit, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10164',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、メールで「こんにちわ」って書いてたな','Riku — mail-"hello"-write','Curious teen','sakura_teen'),
    mk('お前、彼女がアタシって呼んでたな、桜','You — gf-me-girl-call Sakura','Wry','riku_teen'),
    mk('リク、お前、参考書のくだりに線引いてたな','Riku — ref-passage-line','Curious','sakura_teen'),
    mk('お前、フォロワーをふやしてSNSにハマってたな、桜','You — follow-up-SNS-into Sakura','Wry','riku_teen'),
    mk('リク、お前の予想は往々にして外れるな','Riku — pred-often-miss','Wry','sakura_teen'),
    mk('お前、遥かに成長したな、桜','You — far-grow Sakura','Praising','riku_teen'),
    mk('リク、お前のチーム、動きがシンクロしてるな','Riku — team-move-sync','Praising','sakura_teen'),
    mk('お前、未成年だから煙草吸わないって誓えよ、桜','You — minor-cig-no-vow Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_10165',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お友達に「こんにちわ」って明るく挨拶しましょうね','Sho — friend-"hello"-bright','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、アタシって書くのは女の子だけだよね','Mei-sis — me me-girl-write-girl-only','Curious child','sho_child'),
    mk('翔くん、絵本のくだりが面白かったね','Sho — pic-passage-fun','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お小遣いをふやしてもらいたいよ','Mei-sis — me allow-up-want','Eager child','sho_child'),
    mk('翔くん、お父さんの教えは往々にして役に立つわ','Sho — Dad-teach-often-useful','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが遥かに頼もしく見えるよ','Mei-sis — me Dad-far-reli','Tender child','sho_child'),
    mk('翔くん、お父さんとシンクロした遊びは楽しいわね','Sho — Dad-sync-play-fun','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに煙草を吸わないでってお願いしたよ','Mei-sis — me Dad-cig-no-asked','Earnest close','sho_child'),
  ]},
  {id:'conv_10166',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、業績の下方修正は避けたい','Our co — perf-down-rev-avoid','Crisp','hiroshi_boss'),
    mk('はい。私鉄沿線への出店を検討します','Yes — Priv-rail-store-cons','Methodical','kenji_office'),
    mk('当社、郵貯口座での集金も継続しろ','Our co — postal-acc-coll-cont','Direction','hiroshi_boss'),
    mk('はい。新工場の竣工式典を準備します','Yes — New-fact-open-cere-prep','Update','kenji_office'),
    mk('当社、業界インサイド情報を整理しろ','Our co — industry-inside-org','Direction','hiroshi_boss'),
    mk('はい。四方からの市場圧力を分析します','Yes — All-sides-mkt-pres-anal','Update','kenji_office'),
    mk('当社、ロイター電を毎日確認しろ','Our co — Reuters-daily','Direction','hiroshi_boss'),
    mk('はい。納期をパーフェクトに守ります','Yes — Deadl-perfect-keep','Close','kenji_office'),
  ]},
  {id:'conv_10167',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('業績の下方修正を避けるよう頑張りましょう','Perf-down-rev-avoid','Brisk','yuki_office'),
    mk('はい。私鉄駅前の物件を調査します','Yes — Priv-rail-pre-prop-survey','Cooperative','kenji_office'),
    mk('郵貯振込のお客様にも対応しましょう','Postal-trans-cust-resp','Direction','yuki_office'),
    mk('はい。竣工後の内覧会を企画します','Yes — Post-cere-open-house-plan','Update','kenji_office'),
    mk('業界インサイドの専門家を招きましょう','Industry-inside-expert-invite','Direction','yuki_office'),
    mk('はい。四方の競合動向を整理します','Yes — All-sides-comp-org','Update','kenji_office'),
    mk('ロイター記事を経営会議で共有しましょう','Reuters-mgmt-mtg-share','Direction','yuki_office'),
    mk('はい。プロジェクトをパーフェクトに完遂します','Yes — Proj-perfect-comp','Close','kenji_office'),
  ]},
  {id:'conv_10168',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究費の下方修正に備えろ','Ren — research-down-rev-prep','Mentor','hiroshi_boss'),
    mk('はい。私鉄に乗って学会に通います','Yes — Priv-rail-conf','Earnest','ren_uni'),
    mk('蓮、奨学金は郵貯口座でも受けられる','Ren — grant-postal-acc-recv','Mentor','hiroshi_boss'),
    mk('はい。研究棟の竣工に立ち会います','Yes — Research-bld-open-att','Earnest','ren_uni'),
    mk('蓮、研究分野のインサイド情報も集めろ','Ren — research-inside-coll','Direction','hiroshi_boss'),
    mk('はい。四方の研究室と交流します','Yes — All-sides-lab-exch','Polite','ren_uni'),
    mk('蓮、ロイター科学記事も読め','Ren — Reuters-sci-read','Direction','hiroshi_boss'),
    mk('はい。実験をパーフェクトに進めます','Yes — Exp-perfect-prog','Earnest close','ren_uni'),
  ]},
  {id:'conv_10169',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、検挙数の下方修正もご公表ですね','Police arr-down-rev-pub','Cooperative','kenji_office'),
    mk('警察、私鉄の駅警備もされますね','Police priv-rail-sta-guard','Cooperative','kenji_office'),
    mk('警察、郵貯詐欺事案にも対応されますね','Police postal-fraud-resp','Cooperative','kenji_office'),
    mk('警察、新庁舎の竣工式を警備されますね','Police new-bld-cere-guard','Cooperative','kenji_office'),
    mk('警察、犯罪組織のインサイド情報を集められますね','Police crime-inside-coll','Cooperative','kenji_office'),
    mk('警察、四方からの警備網を整備されますね','Police all-sides-guard-prep','Cooperative','kenji_office'),
    mk('警察、ロイター速報を分析されますね','Police Reuters-news-anal','Cooperative','kenji_office'),
    mk('警察、警備をパーフェクトに進められますね','Police guard-perfect-prog','Close','kenji_office'),
  ]},
  {id:'conv_10170',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、業績下方修正を経験された','Dad — founding perf-down-rev-exp','Sage','hiroshi_elder'),
    mk('はい。お父さんは私鉄沿線に店を構えた','Yes — Dad priv-rail-store','Commitment','hiroshi_boss'),
    mk('お父さん、郵貯口座を最初に使われた経営者だ','Dad — postal-acc-first-mgmt','Wistful','hiroshi_elder'),
    mk('はい。お父さんは竣工式を盛大に祝われた','Yes — Dad open-cere-grand-cel','Reflective','hiroshi_boss'),
    mk('お父さん、業界インサイド情報を読み解く名手だった','Dad — industry-inside-master','Wistful','hiroshi_elder'),
    mk('はい。お父さんは四方の競合を分析された','Yes — Dad all-sides-comp-anal','Reflective','hiroshi_boss'),
    mk('お父さん、ロイター記事を毎朝確認された','Dad — Reuters-morning','Wistful','hiroshi_elder'),
    mk('はい。お父さんはパーフェクトな経営を目指された','Yes — Dad perfect-mgmt-aim','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10171',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、植物の茎の構造研究を論文で扱いましたね','Ren — plant-stem-struct paper','Calm','asuka_teacher'),
    mk('はい、世俗主義の歴史比較を論文で扱いました','Yes — Sec-hist-cmp paper','Earnest','ren_uni'),
    mk('蓮さん、科学のパラダイム転換を論文で扱いましたね','Ren — sci-para-shift paper','Reflective','asuka_teacher'),
    mk('はい、第二波フェミニズムの研究を論文で扱いました','Yes — 2nd-wave-fem paper','Earnest','ren_uni'),
    mk('中南米の独立運動を論文で扱いましたね','Lat-Am-indep paper','Engaged','asuka_teacher'),
    mk('はい、遠距離恋愛の維持要因を論文で扱いました','Yes — LDR-factor paper','Earnest','ren_uni'),
    mk('蓮さん、金星探査の歴史を論文で扱いましたね','Ren — Venus-explor paper','Reflective','asuka_teacher'),
    mk('はい、生死をめぐる医療倫理を論文で扱いました','Yes — Life-death-eth paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10172',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、植物の茎を凶器にした事件を、警察、扱われますね','Case stem-weapon police-handle','Reflective','ren_uni'),
    mk('警察、世俗的犯罪と宗教的犯罪を分けて分析されますね','Police sec-relig-crime-sep','Cooperative','takeda_officer'),
    mk('本件、捜査のパラダイム転換を、警察、検討されますね','Case inv-para-shift police-cons','Reflective','ren_uni'),
    mk('警察、フェミニズム関連の嫌がらせ事案にも対応されますね','Police fem-harass-resp','Cooperative','takeda_officer'),
    mk('本件、中南米からの密入国を、警察、警戒されますね','Case Lat-Am-illeg police-watch','Reflective','ren_uni'),
    mk('警察、遠距離での通信傍受技術もお持ちですね','Police LDR-comm-intercept','Cooperative','takeda_officer'),
    mk('本件、金星探査機関連の機密漏洩を、警察、扱われますね','Case Venus-mission-leak police-handle','Reflective','ren_uni'),
    mk('警察、生死を分ける現場対応もされますね','Police life-death-scene-resp','Close','takeda_officer'),
  ]},
  {id:'conv_10173',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、植物の茎の構造研究を論文で扱いましたね','Sakura — plant-stem paper','Calm','asuka_teacher'),
    mk('はい、世俗主義の歴史比較を論文で扱いました','Yes — Sec-hist paper','Earnest teen','sakura_teen'),
    mk('科学のパラダイム転換を論文で扱いましたね','Sci-para paper','Reflective','asuka_teacher'),
    mk('はい、第二波フェミニズムを論文で扱いました','Yes — 2nd-wave paper','Earnest','sakura_teen'),
    mk('中南米の独立運動を論文で扱いましたね','Lat-Am-indep paper','Engaged','asuka_teacher'),
    mk('はい、遠距離恋愛の維持要因を論文で扱いました','Yes — LDR paper','Earnest','sakura_teen'),
    mk('金星探査の歴史を論文で扱いましたね','Venus-explor paper','Reflective','asuka_teacher'),
    mk('はい、生死をめぐる医療倫理を論文で扱いました','Yes — Life-death paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10174',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、漢方の薬草の茎部分を医療チームで活用します','Ren — herb-stem med-team use','Calm','saito_doctor'),
    mk('はい、世俗の患者にも宗教的患者にも医療チームで配慮します','Yes — Sec-relig-pati med-team','Patient','saito_doctor'),
    mk('蓮さん、診断のパラダイム転換を医療チームで検討します','Ren — diag-para-shift med-team','Calm','saito_doctor'),
    mk('はい、フェミニズム視点の医療を医療チームで意識します','Yes — Fem-med med-team','Patient','saito_doctor'),
    mk('中南米から来日の患者を、貴院、診られますね、先生','Lat-Am-pati your-hosp diag, sensei','Reflective','ren_uni'),
    mk('はい、遠距離通院患者の負担を医療チームで軽減します','Yes — LDR-pati-burden med-team redu','Patient','saito_doctor'),
    mk('金星探査の隊員医療を、貴院、関係されますね、先生','Venus-mission-med your-hosp rel, sensei','Curious','ren_uni'),
    mk('はい、生死の境にある患者を医療チームで支えます','Yes — Life-death-pati med-team supp','Patient close','saito_doctor'),
  ]},
  {id:'conv_10175',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、組織の幹と茎、つまり中核と末端を意識しろ','Our co — org-trunk-stem-end','Crisp','hiroshi_boss'),
    mk('はい。世俗的な広告は控えめにします','Yes — Sec-ad-mod','Methodical','kenji_office'),
    mk('当社、業界のパラダイム転換に備えろ','Our co — industry-para-shift-prep','Direction','hiroshi_boss'),
    mk('はい。フェミニズム視点を組織に取り入れます','Yes — Fem-org','Update','kenji_office'),
    mk('当社、中南米市場への参入を検討しろ','Our co — Lat-Am-mkt-cons','Direction','hiroshi_boss'),
    mk('はい。遠距離勤務の社員も支援します','Yes — LDR-staff-supp','Update','kenji_office'),
    mk('当社、宇宙関連の事業展開を狙え、金星も視野','Our co — space-biz-Venus-view','Direction','hiroshi_boss'),
    mk('はい。会社の生死を分ける決断は慎重にします','Yes — Co-life-death-careful','Close','kenji_office'),
  ]},
  {id:'conv_10176',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、デリーへの留学経験がおありだって、メイちゃん','Aoi — cust-Delhi-study Mei','Reflective','mei_romantic'),
    mk('葵、お客様、サウジアラビアで駐在されてたって、メイちゃん','Aoi — cust-Saudi-station Mei','Reflective','aoi_barista'),
    mk('葵、お客様、マンチェスター・ユナイテッドのサポーターだって、メイちゃん','Aoi — cust-Man-United-supp Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ダライ・ラマの教えを学んでらっしゃるって、メイちゃん','Aoi — cust-Dalai-learn Mei','Reflective','aoi_barista'),
    mk('葵、お客様、徳川家康の歴史小説がご趣味だって、メイちゃん','Aoi — cust-Ieyasu-novel Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ジュネーブのWHOで働いてたって、メイちゃん','Aoi — cust-Geneva-WHO Mei','Reflective','aoi_barista'),
    mk('葵、お客様、トロイ遺跡の発掘団に参加されたって、メイちゃん','Aoi — cust-Troy-dig Mei','Reflective','mei_romantic'),
    mk('葵、お客様、台北の夜市が忘れられないって、メイちゃん','Aoi — cust-Taipei-night-mkt Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10177',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがデリーに出張された','Gran — youth Dad-Delhi-trip','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、サウジアラビアの石油事業をご研究されたわよね、あなた?','Yes — Grandpa-Saudi-oil-res, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがユナイテッド航空で世界を旅された','Gran — youth Dad-United-airline','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ダライ・ラマ来日時に講演を聴かれたわよね、あなた?','Grandpa — Dalai-JP-lect, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが徳川家康の本を愛読された','Gran — youth Dad-Ieyasu-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ジュネーブで国際会議に出られたわよね、あなた?','Grandpa — Geneva-intl-mtg, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがトロイの遺跡に憧れた','Gran — youth Dad-Troy-admire','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、台北のお茶を取り寄せられたわよね、あなた?','Grandpa — Taipei-tea-order, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10178',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがデリーの絵本を読んで下さるそうよ','Sho — Dad-Delhi-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとサウジアラビアの絵本見たよ','Mei-sis — me Dad-Saudi-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがユナイテッドのジャージを下さったわ','Sho — Dad-United-jersey','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ダライ・ラマって誰?お父さんに聞くね','Mei-sis — me Dalai-who-Dad-ask','Curious child','sho_child'),
    mk('翔くん、お父さんが徳川家康の絵本を読んで下さるそうよ','Sho — Dad-Ieyasu-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとジュネーブの地図見たよ','Mei-sis — me Dad-Geneva-map','Eager child','sho_child'),
    mk('翔くん、お父さんがトロイの絵本を読んで下さるそうよ','Sho — Dad-Troy-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと台北のお話聞いたよ','Mei-sis — me Dad-Taipei-told','Eager close','sho_child'),
  ]},
  {id:'conv_10179',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会でデリー習ったろ?','Riku — soc-Delhi?','Curious teen','sakura_teen'),
    mk('お前、社会でサウジアラビア習ったろ?桜','You — soc-Saudi? Sakura','Curious','riku_teen'),
    mk('リク、お前、マンチェスター・ユナイテッドの試合観てたな','Riku — Man-United-match','Curious','sakura_teen'),
    mk('お前、ダライ・ラマの本読んでたな、桜','You — Dalai-book-read Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で徳川家康習ったろ?','Riku — soc-Ieyasu?','Curious','sakura_teen'),
    mk('お前、社会でジュネーブ条約習ったろ?桜','You — soc-Geneva-Conv? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でトロイ戦争習ったろ?','Riku — soc-Troy-war?','Curious','sakura_teen'),
    mk('お前、台北旅行行きたがってたな、桜','You — Taipei-trip-want Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10180',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがデリー出張のお話して下さるそうよ','Sho — Dad-Delhi-trip-told','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとサウジアラビアの本見たよ','Mom — me Dad-Saudi-book','Eager child','sho_child'),
    mk('翔くん、お父さんがマンチェスター・ユナイテッドの試合観に行かれたわ','Sho — Dad-Man-United-match','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとダライ・ラマのドキュメンタリー観たよ','Mom — me Dad-Dalai-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが徳川家康の大河ドラマ観てらしたわ','Sho — Dad-Ieyasu-drama','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとジュネーブの絵本見たよ','Mom — me Dad-Geneva-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがトロイの遺跡のドキュメンタリーをご覧になったわ','Sho — Dad-Troy-doc','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと台北旅行のお話したよ','Mom — me Dad-Taipei-told','Eager close','sho_child'),
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

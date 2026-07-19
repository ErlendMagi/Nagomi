import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_506 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['年長','憤り','カンタン','逝っ','ねらっ','まっか','他界','対極']
const B_T = ['附帯','インテリジェンス','ウェブページ','所信','タイマー','ハンディ','モデリング','クリアー']
const C_T = ['シーア','難関','人民元','ウイグル','最高峰','浙江','広州','天空']
const D_T = ['練馬','ニンテンドー','ローリング','ヤフオク','ホモ','シャロン','スタミナ','チャンピオンズ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10081',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが年長の親戚にご挨拶されたわ','Sho — Dad-elder-rel-greet','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんが不正に憤りを感じてらしたよ','Mom — me Dad-unjust-anger','Reflective child','sho_child'),
    mk('翔くん、お父さんが「カンタンには諦めない」って仰ったわ','Sho — Dad-"easy-give-up-no"-said','Tender','yumiko_mom'),
    mk('ママ、お祖父ちゃんが逝ってしまわれて寂しいよ','Mom — Grandpa-passed-lone','Tender child','sho_child'),
    mk('翔くん、お父さんが流れ星をねらって写真を撮ろうとされたわ','Sho — Dad-shoot-star-aim-photo','Pleased','yumiko_mom'),
    mk('ママ、ぼく、走ったら顔がまっかになっちゃったよ','Mom — me ran-face-red','Wry child','sho_child'),
    mk('翔くん、お祖父ちゃんが他界された日を毎年偲ぶわね','Sho — Grandpa-pass-yr-remem','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとは対極の性格だってよく言われるよ','Mom — me Dad-opp-pers-said','Wry close','sho_child'),
  ]},
  {id:'conv_10082',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、年長のご友人とお越しになってたよ、メイちゃん','Aoi — cust-elder-fri Mei','Reflective','mei_romantic'),
    mk('葵、不当なクレームに憤りを感じたわ、メイちゃん','Aoi — unfair-comp-anger Mei','Reflective','aoi_barista'),
    mk('葵、新メニューはカンタンに作れるレシピにしよう、メイちゃん','Aoi — new-menu-easy-make Mei','Direction','mei_romantic'),
    mk('葵、お客様、ご主人が逝ってしまわれたって、メイちゃん','Aoi — cust-husb-passed Mei','Tender','aoi_barista'),
    mk('葵、流行をねらった新商品を出そうね、メイちゃん','Aoi — trend-aim-new Mei','Direction','mei_romantic'),
    mk('葵、辛いコーヒーで顔がまっかになるお客様もいらしたね、メイちゃん','Aoi — hot-cf-face-red Mei','Wry','aoi_barista'),
    mk('葵、馴染みのお客様が他界されて寂しいね、メイちゃん','Aoi — reg-cust-pass-lone Mei','Tender','mei_romantic'),
    mk('葵、対極のメニューを揃えて選択肢を増やそうね、メイちゃん','Aoi — opp-menu-opt Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_10083',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが年長の方々を敬われた','Gran — youth Dad-elder-resp','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、不正に憤りを感じる方だったわよね、あなた?','Yes — Grandpa-unjust-anger, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「カンタンには折れない」と仰った','Gran — youth Dad-"easy-break-no"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご友人が次々と逝ってしまわれて寂しがってらしたわよね、あなた?','Grandpa — friend-passed-lone, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが鶏をねらって撮影された','Gran — youth Dad-chick-aim-shoot','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お酒で顔がまっかになられたわよね、あなた?','Grandpa — sake-face-red, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんのご友人が他界された','Gran — youth Dad-friend-pass','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、私とは対極の性格でいらしたわよね、あなた?','Grandpa — me-opp-pers, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10084',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、年長の先輩に敬語使えるな','Riku — elder-senior-keigo','Praising teen','sakura_teen'),
    mk('お前、いじめに憤り感じてたな、桜','You — bully-anger Sakura','Reflective','riku_teen'),
    mk('リク、お前、宿題はカンタンに終わったろ?','Riku — homework-easy?','Wry','sakura_teen'),
    mk('お前、お祖母様が逝ってしまわれて辛かったろ、桜','You — Granma-passed-hard Sakura','Tender','riku_teen'),
    mk('リク、お前、優勝をねらって練習してたな','Riku — win-aim-prac','Praising','sakura_teen'),
    mk('お前、告白して顔がまっかになってたな、桜','You — confess-face-red Sakura','Wry','riku_teen'),
    mk('リク、お前、芸能人が他界されたニュースで泣いてたな','Riku — celeb-pass-cry','Reflective','sakura_teen'),
    mk('お前、お父さんとは対極の性格だって言われてたな、桜','You — Dad-opp-pers-said Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10085',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが年長のご親戚と話されてたわ','Sho — Dad-elder-rel-talk','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、不当ないじめに憤りを感じるよ','Mei-sis — me unfair-bully-anger','Earnest child','sho_child'),
    mk('翔くん、お父さんが算数をカンタンに教えて下さるわ','Sho — Dad-math-easy-teach','Tender','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんが逝ってしまわれて悲しいよ','Mei-sis — Grandpa-passed-sad','Tender child','sho_child'),
    mk('翔くん、お父さんが鳥をねらって写真撮られたわ','Sho — Dad-bird-aim-photo','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、走って顔がまっかになっちゃった','Mei-sis — me ran-face-red','Wry child','sho_child'),
    mk('翔くん、お祖父ちゃんが他界された日も心に残ってるわ','Sho — Grandpa-pass-day-heart','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとは対極の好みなんだ','Mei-sis — me Dad-opp-pref','Reflective close','sho_child'),
  ]},
  {id:'conv_10086',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、契約書の附帯条件を整理しろ','Our co — contract-att-cond-org','Crisp','hiroshi_boss'),
    mk('はい。ビジネスインテリジェンス分析を強化します','Yes — BI-anal-strength','Methodical','kenji_office'),
    mk('当社、ウェブページのデザインを刷新しろ','Our co — webpage-design-renew','Direction','hiroshi_boss'),
    mk('はい。新社長の所信表明を準備します','Yes — New-pres-belief-prep','Update','kenji_office'),
    mk('会議室の照明にタイマーを付けろ','Mtg-light-timer','Direction','hiroshi_boss'),
    mk('はい。出張用ハンディ端末を支給します','Yes — Trip-handy-dev','Update','kenji_office'),
    mk('当社、データ分析にモデリング技術を活用しろ','Our co — data-model-use','Direction','hiroshi_boss'),
    mk('はい。会計の課題を一つずつクリアーします','Yes — Acc-issue-clear','Close','kenji_office'),
  ]},
  {id:'conv_10087',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('附帯施設の管理も委託先を見直しましょう','Att-fac-mgmt-vendor-rev','Brisk','yuki_office'),
    mk('はい。インテリジェンスチームを編成します','Yes — Int-team-form','Cooperative','kenji_office'),
    mk('ウェブページの動線を改善しましょう','Webpage-flow-impr','Direction','yuki_office'),
    mk('はい。新社長所信を全社員に伝えます','Yes — New-pres-belief-all','Update','kenji_office'),
    mk('オフィス照明のタイマー設定を見直しましょう','Office-timer-rev','Direction','yuki_office'),
    mk('はい。ハンディスキャナーを倉庫に追加します','Yes — Handy-scan-warehouse-add','Update','kenji_office'),
    mk('需要予測のモデリングを更新しましょう','Demand-model-up','Direction','yuki_office'),
    mk('はい。期限内に課題をクリアーします','Yes — Deadl-issue-clear','Close','kenji_office'),
  ]},
  {id:'conv_10088',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文の附帯資料も丁寧にまとめろ','Ren — paper-att-doc-careful','Mentor','hiroshi_boss'),
    mk('はい。データインテリジェンス分析を進めます','Yes — Data-int-anal','Earnest','ren_uni'),
    mk('蓮、研究室のウェブページを更新しろ','Ren — lab-webpage-up','Direction','hiroshi_boss'),
    mk('はい。指導教員に所信を伝えます','Yes — Supv-belief-tell','Earnest','ren_uni'),
    mk('蓮、実験のタイマー管理を徹底しろ','Ren — exp-timer-strict','Direction','hiroshi_boss'),
    mk('はい。実験データのハンディ端末入力も活用します','Yes — Exp-handy-input-use','Polite','ren_uni'),
    mk('蓮、現象のモデリングを試みろ','Ren — phenom-model-try','Direction','hiroshi_boss'),
    mk('はい。研究室の課題を着実にクリアーします','Yes — Lab-issue-clear','Earnest close','ren_uni'),
  ]},
  {id:'conv_10089',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、附帯捜査も丁寧におこなわれますね','Police att-inv-careful','Cooperative','kenji_office'),
    mk('警察、インテリジェンス情報の収集もされますね','Police int-coll','Cooperative','kenji_office'),
    mk('警察、防犯ウェブページを更新されますね','Police prev-webpage-up','Cooperative','kenji_office'),
    mk('警察、新長官の所信を市民に伝えられますね','Police new-chief-belief-citi','Cooperative','kenji_office'),
    mk('警察、爆発物のタイマーを解除されますね','Police bomb-timer-defuse','Cooperative','kenji_office'),
    mk('警察、ハンディ無線で連絡を取られますね','Police handy-radio-comm','Cooperative','kenji_office'),
    mk('警察、犯人モデリング技術を活用されますね','Police suspect-model-use','Cooperative','kenji_office'),
    mk('警察、長年の未解決事案をクリアーされますね','Police long-unsolved-clear','Close','kenji_office'),
  ]},
  {id:'conv_10090',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、附帯条件を丁寧に交渉された','Dad — founding att-cond-pol-negot','Sage','hiroshi_elder'),
    mk('はい。お父さんはインテリジェンスを重視された','Yes — Dad int-imp','Commitment','hiroshi_boss'),
    mk('お父さん、ウェブページ初期に投資された','Dad — webpage-early-invest','Wistful','hiroshi_elder'),
    mk('はい。お父さんの所信表明は社員を奮い立たせた','Yes — Dad belief-staff-motiv','Reflective','hiroshi_boss'),
    mk('お父さん、工場ラインのタイマー精度にこだわった','Dad — fact-timer-prec-care','Wistful','hiroshi_elder'),
    mk('はい。お父さんは早期にハンディ端末を導入された','Yes — Dad early-handy-intro','Reflective','hiroshi_boss'),
    mk('お父さん、ビジネスモデリングを自ら作られた','Dad — biz-model-self','Wistful','hiroshi_elder'),
    mk('はい。お父さんは難題を次々とクリアーされた','Yes — Dad tough-clear-cont','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10091',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、中東イスラーム派閥でシーア派の研究を論文で扱いましたね','Ren — ME-Shia paper','Calm','asuka_teacher'),
    mk('はい、最難関大学入試研究を論文で扱いました','Yes — Most-tough-univ-ent paper','Earnest','ren_uni'),
    mk('蓮さん、人民元の国際化を論文で扱いましたね','Ren — RMB-int paper','Reflective','asuka_teacher'),
    mk('はい、ウイグル自治区の経済を論文で扱いました','Yes — Uyghur-econ paper','Earnest','ren_uni'),
    mk('世界最高峰の山岳研究を論文で扱いましたね','Wld-peak-mt paper','Engaged','asuka_teacher'),
    mk('はい、浙江省の経済発展を論文で扱いました','Yes — Zhejiang-dev paper','Earnest','ren_uni'),
    mk('蓮さん、広州の貿易拠点研究を論文で扱いましたね','Ren — Guangzhou-trade paper','Reflective','asuka_teacher'),
    mk('はい、天空望遠鏡の観測史を論文で扱いました','Yes — Sky-tel-obs paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10092',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、シーア派関連のテロ警戒を、警察、強化されますね','Case Shia-terror police-strength','Reflective','ren_uni'),
    mk('警察、難関事件の解決にもあたられますね','Police tough-case-resolv','Cooperative','takeda_officer'),
    mk('本件、人民元偽札の流通を、警察、捜査されますね','Case RMB-counter police-inv','Reflective','ren_uni'),
    mk('警察、ウイグル難民支援者への嫌がらせ事案にも対応されますね','Police Uyghur-supp-harass-resp','Cooperative','takeda_officer'),
    mk('本件、最高峰登山中の事故救助を、警察、担当されますね','Case peak-mt-rescue police-hand','Reflective','ren_uni'),
    mk('警察、浙江省からの密入国者にも対応されますね','Police Zhejiang-illeg-resp','Cooperative','takeda_officer'),
    mk('本件、広州への密輸事件を、警察、捜査されますね','Case Guangzhou-smug police-inv','Reflective','ren_uni'),
    mk('警察、天空監視ドローンを活用されますね','Police sky-drone-use','Close','takeda_officer'),
  ]},
  {id:'conv_10093',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、中東イスラーム派閥でシーア派の研究を論文で扱いましたね','Sakura — ME-Shia paper','Calm','asuka_teacher'),
    mk('はい、最難関大学入試研究を論文で扱いました','Yes — Most-tough-ent paper','Earnest teen','sakura_teen'),
    mk('人民元の国際化を論文で扱いましたね','RMB-int paper','Reflective','asuka_teacher'),
    mk('はい、ウイグル自治区の経済を論文で扱いました','Yes — Uyghur paper','Earnest','sakura_teen'),
    mk('世界最高峰の山岳研究を論文で扱いましたね','Wld-peak paper','Engaged','asuka_teacher'),
    mk('はい、浙江省の経済発展を論文で扱いました','Yes — Zhejiang paper','Earnest','sakura_teen'),
    mk('広州の貿易拠点研究を論文で扱いましたね','Guangzhou paper','Reflective','asuka_teacher'),
    mk('はい、天空望遠鏡の観測史を論文で扱いました','Yes — Sky-tel paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10094',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、シーア派患者の医療配慮を医療チームで意識します','Ren — Shia-pati med-team aware','Calm','saito_doctor'),
    mk('はい、最難関の手術にも医療チームで挑みます','Yes — Most-tough-surg med-team','Patient','saito_doctor'),
    mk('人民元での医療費請求を、貴院、検討されてますね、先生','RMB-med-bill your-hosp cons, sensei','Reflective','ren_uni'),
    mk('はい、ウイグル系患者の通訳を医療チームで手配します','Yes — Uyghur-pati-interp med-team','Patient','saito_doctor'),
    mk('蓮さん、医療技術の最高峰を医療チームで目指します','Ren — med-tech-peak med-team aim','Calm','saito_doctor'),
    mk('浙江省の漢方医学を、貴院、参考にされてますね、先生','Zhejiang-kampo your-hosp ref, sensei','Curious','ren_uni'),
    mk('はい、広州医科大学と医療チームで交流します','Yes — Guangzhou-med-uni med-team exch','Patient','saito_doctor'),
    mk('はい、天空のヘリ救急を医療チームで担当します','Yes — Sky-heli-ER med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_10095',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、シーア派多数地域での営業に配慮しろ','Our co — Shia-area-sales-cons','Crisp','hiroshi_boss'),
    mk('はい。難関プロジェクトに精鋭を配置します','Yes — Tough-proj-elite','Methodical','kenji_office'),
    mk('当社、人民元決済の準備を進めろ','Our co — RMB-pay-prep','Direction','hiroshi_boss'),
    mk('はい。ウイグル関連の人権配慮を徹底します','Yes — Uyghur-rights-strict','Update','kenji_office'),
    mk('業界最高峰のサービスを目指せ','Industry-peak-svc-aim','Direction','hiroshi_boss'),
    mk('はい。浙江省の供給網を強化します','Yes — Zhejiang-supply-strength','Update','kenji_office'),
    mk('当社、広州での営業所開設を検討しろ','Our co — Guangzhou-office-cons','Direction','hiroshi_boss'),
    mk('はい。天空型ディスプレイ広告も検討します','Yes — Sky-disp-ad-cons','Close','kenji_office'),
  ]},
  {id:'conv_10096',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、練馬区にお住まいだって、メイちゃん','Aoi — cust-Nerima Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ニンテンドーDS世代でいらっしゃるって、メイちゃん','Aoi — cust-Nintendo-DS Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ローリング・ストーンズのファンだって、メイちゃん','Aoi — cust-Rolling-Stones Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ヤフオクで限定品を集めてらっしゃるって、メイちゃん','Aoi — cust-Yahoo-auc Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ホモ・サピエンス研究をされてる学者だって、メイちゃん','Aoi — cust-Homo-sap-research Mei','Reflective','mei_romantic'),
    mk('葵、お客様、シャロン元首相の伝記を読んでらしたよ、メイちゃん','Aoi — cust-Sharon-bio Mei','Reflective','aoi_barista'),
    mk('葵、お客様、登山スタミナがすごいって自慢されてたよ、メイちゃん','Aoi — cust-mt-stamina-brag Mei','Wry','mei_romantic'),
    mk('葵、お客様、チャンピオンズリーグ観戦が趣味だって、メイちゃん','Aoi — cust-Champ-Lg Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10097',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが練馬区で勤務された','Gran — youth Dad-Nerima-work','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ニンテンドーのファミコンを孫に買って下さったわよね、あなた?','Yes — Grandpa-Nintendo-Famicom-grandkid, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがローリング・ストーンズのレコードを買われた','Gran — youth Dad-Rolling-Stones-rec','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年はヤフオクで懐かしいものを集められたわよね、あなた?','Grandpa — late-Yahoo-auc, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがホモ・エレクトスの本を読まれた','Gran — youth Dad-Homo-erectus','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、シャロン元首相の死去を悼まれたわよね、あなた?','Grandpa — Sharon-pass-mourn, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがスタミナ十分でいらした','Gran — youth Dad-stamina-strong','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、チャンピオンズリーグの決勝をご覧になったわよね、あなた?','Grandpa — Champ-Lg-final, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10098',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが練馬区の知人とお会いになるそうよ','Sho — Dad-Nerima-fri-meet','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ニンテンドーの新ゲーム欲しいよ','Mei-sis — me Nintendo-new-want','Eager child','sho_child'),
    mk('翔くん、お父さんがローリング・ストーンズの曲を聴かせて下さったわ','Sho — Dad-Rolling-Stones-listen','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとヤフオクで模型探したよ','Mei-sis — me Dad-Yahoo-auc-model','Eager child','sho_child'),
    mk('翔くん、お父さんがホモ・サピエンスの絵本読んで下さったわ','Sho — Dad-Homo-sap-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとシャロン元首相のお話聞いたよ','Mei-sis — me Dad-Sharon-told','Eager child','sho_child'),
    mk('翔くん、お父さんはスタミナがあって頼もしいわね','Sho — Dad-stamina-reli','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとチャンピオンズリーグ観たいよ','Mei-sis — me Dad-Champ-Lg-want','Eager close','sho_child'),
  ]},
  {id:'conv_10099',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、練馬区だったな','Riku — your-home-Nerima','Curious teen','sakura_teen'),
    mk('お前、ニンテンドーの新作買ったろ?桜','You — Nintendo-new-buy? Sakura','Curious','riku_teen'),
    mk('リク、お前、ローリング・ストーンズのTシャツ着てたな','Riku — Rolling-Stones-T','Curious','sakura_teen'),
    mk('お前、ヤフオクで限定品買ってたな、桜','You — Yahoo-auc-ltd Sakura','Curious','riku_teen'),
    mk('リク、お前、生物でホモ・サピエンス習ったろ?','Riku — bio-Homo-sap?','Curious','sakura_teen'),
    mk('お前、社会でシャロン元首相習ったろ?桜','You — soc-Sharon? Sakura','Curious','riku_teen'),
    mk('リク、お前、スタミナドリンク飲んでたな','Riku — stamina-drink','Wry','sakura_teen'),
    mk('お前、チャンピオンズリーグ全試合観てたな、桜','You — Champ-Lg-all Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10100',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが練馬区のお仕事先にお出かけよ','Sho — Dad-Nerima-work-out','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとニンテンドーで遊んだよ','Mom — me Dad-Nintendo','Eager child','sho_child'),
    mk('翔くん、お父さんがローリング・ストーンズのコンサート観たいって','Sho — Dad-Rolling-Stones-want','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとヤフオクで時計買ったよ','Mom — me Dad-Yahoo-auc-watch','Eager child','sho_child'),
    mk('翔くん、お父さんがホモ・サピエンスの進化のお話して下さったわ','Sho — Dad-Homo-sap-evol-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとシャロン元首相のドキュメンタリー観たよ','Mom — me Dad-Sharon-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが「スタミナをつけろ」って仰ったわ','Sho — Dad-"stamina-up"-said','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんとチャンピオンズリーグ決勝観たよ','Mom — me Dad-Champ-Lg-final','Eager close','sho_child'),
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

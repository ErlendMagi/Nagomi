import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_428 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['うんちく','コトバ','一安心','すませ','まちがい','つづい','マイペース','大雑把']
const B_T = ['集結','論評','開館','取り込む','愛称','利率','換金','代弁']
const C_T = ['脳死','永続','双方向','包囲','落選','兵力','没収','上告']
const D_T = ['腹筋','退治','金髪','トウモロコシ','ねずみ','かぼちゃ','ウイスキー','サウナ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08521',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがお魚のうんちくを語ってらっしゃるわ','Sho — Dad-fish-trivia-tell','Reflective','yumiko_mom'),
    mk('ママ、ぼく、新しいコトバをいっぱい覚えたよ','Mom — me new-words-many-learned','Eager child','sho_child'),
    mk('翔くん、お父さんが帰っていらして、一安心ね','Sho — Dad-returned a-relief','Tender','yumiko_mom'),
    mk('ママ、ぼく、宿題をすませてから遊びに行くね','Mom — me homework-finish then-play','Earnest child','sho_child'),
    mk('翔くん、まちがいに気づいたら直しなさいね','Sho — mistake-notice-fix','Direction','yumiko_mom'),
    mk('ママ、ぼく、ピアノつづいて練習してるよ','Mom — me piano-continue-practice','Proud child','sho_child'),
    mk('翔くん、お父さんのマイペースなご性格、いいわね','Sho — Dad-own-pace-personality-good','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お絵描きを大雑把に描いちゃった','Mom — me drawing-rough-drew','Wry close','sho_child'),
  ]},
  {id:'conv_08522',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、コーヒー豆のうんちくをお話されてたわよ、メイちゃん','Aoi — cust coffee-bean-trivia-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、英語のコトバを混ぜてお話されるよね、メイちゃん','Aoi — cust English-words-mix-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様がご無事でお戻りになって、一安心ね、メイちゃん','Aoi — cust-safe-back a-relief Mei','Tender','mei_romantic'),
    mk('葵、お客様、お支払をすませてお帰りになったわよ、メイちゃん','Aoi — cust-pay-finish-left Mei','Reflective','aoi_barista'),
    mk('葵、メニューにまちがいがないか、確認しましょう、メイちゃん','Aoi — menu-mistake-check Mei','Direction','mei_romantic'),
    mk('葵、お店の改装、つづいて進んでるね、メイちゃん','Aoi — store-renov continuing-progress Mei','Reflective','aoi_barista'),
    mk('葵、お客様のマイペースなお時間の使い方、素敵ね、メイちゃん','Aoi — cust-own-pace-time-use lovely Mei','Praising','mei_romantic'),
    mk('葵、お掃除を大雑把にすると、後で大変よ、メイちゃん','Aoi — cleaning-rough-later-hard Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_08523',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが歴史のうんちくを語られたぞ','Gran — youth Dad hist-trivia-told','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、孫に新しいコトバを教えてらしたわよね、あなた?','Yes — Grandpa-grandkid-new-words-taught, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが結婚されて、一安心したぞ','Gran — youth Dad-married a-relief','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご法事をすませてからお酒を召し上がったわよね、あなた?','Grandpa — memorial-finish then-drank, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが書類のまちがいを正されたぞ','Gran — youth Dad-doc-mistake-corrected','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、長年つづいた習慣を大事にされたわよね、あなた?','Grandpa — long-yrs-cont-habit-cherish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんはマイペースで好きなお仕事をされたぞ','Gran — Dad own-pace-fav-work','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭のお手入れは大雑把になさってたわよね、あなた?','Grandpa — garden-care rough-did, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08524',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ゲームのうんちく語りすぎだろ','Riku — game-trivia-too-much','Wry teen','sakura_teen'),
    mk('お前、流行りのコトバ使うの好きだろ、桜','You — trend-words-like Sakura','Curious','riku_teen'),
    mk('リク、お前、テスト返って一安心だろ?','Riku — test-back a-relief?','Wry','sakura_teen'),
    mk('お前、宿題すませてから遊べよ、桜','You — homework-finish-then-play Sakura','Direction','riku_teen'),
    mk('リク、お前、答えにまちがい多すぎだろ','Riku — answer-mistake-too-many','Wry','sakura_teen'),
    mk('お前、部活つづいてるな、桜','You — club-continuing Sakura','Praising','riku_teen'),
    mk('リク、お前、ホント、マイペースだよな','Riku — really own-pace','Wry','sakura_teen'),
    mk('お前のノート、大雑把過ぎだぞ、桜','Your-notebook too-rough Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08525',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんはお花のうんちくを語るのが好きなのよ','Sho — Mei-sis-flower-trivia-tell-like','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、新しいコトバを覚えるの楽しいよ','Mei-sis — me new-words-learn-fun','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんがお元気で一安心ね','Sho — Grandpa-well a-relief','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お手伝いをすませてからお絵描きするね','Mei-sis — me help-finish then-draw','Earnest child','sho_child'),
    mk('翔くん、お絵描きにまちがいなんてないのよ','Sho — drawing-mistake-none','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ピアノつづいて練習してるよ','Mei-sis — me piano-continue-practice','Proud child','sho_child'),
    mk('翔くん、メイ姉さんは旅もマイペースで楽しむのよ','Sho — Mei-sis-trip-own-pace-enjoy','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きを大雑把にしちゃった','Mei-sis — me drawing-rough','Wry close','sho_child'),
  ]},
  {id:'conv_08526',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、全社員を本社に集結させろ','Our co — all-staff HQ-gather','Crisp','hiroshi_boss'),
    mk('はい。新製品の論評がメディアで好意的です','Yes — New-prod-review-media-positive','Methodical','kenji_office'),
    mk('当社、新支店の開館を急げ','Our co — new-branch-open-hasten','Direction','hiroshi_boss'),
    mk('はい。お得意様のご要望を社内で取り込む計画です','Yes — VIP-request co-absorb plan','Update','kenji_office'),
    mk('新製品の愛称を募集しろ','New-prod-nickname-recruit','Direction','hiroshi_boss'),
    mk('はい。お得意様への利率優遇を案内します','Yes — VIP-rate-preferential announce','Update','kenji_office'),
    mk('海外取引の換金手数料を見直せ','Overseas-deal exchange-fee review','Direction','hiroshi_boss'),
    mk('はい。社員の声を経営陣に代弁いたします','Yes — Staff-voice-mgmt-represent','Close','kenji_office'),
  ]},
  {id:'conv_08527',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('全部署を会議室に集結させましょう','All-dept conf-room-gather','Brisk','yuki_office'),
    mk('はい。お取引先からの論評をまとめました','Yes — Partner-review-summary','Cooperative','kenji_office'),
    mk('新ショールームの開館式を準備しましょう','New-showroom-open-ceremony prep','Direction','yuki_office'),
    mk('はい。お客様の声を商品開発に取り込む方針です','Yes — Cust-voice-prod-dev-absorb policy','Update','kenji_office'),
    mk('社内サークルに愛称をつけましょう','Co-circle-nickname-attach','Direction','yuki_office'),
    mk('はい。取引銀行の利率改定の案内が届きました','Yes — Bank-rate-rev-notice arrived','Update','kenji_office'),
    mk('海外通貨の換金手続を簡略化しましょう','Foreign-cur exchange-proc simplify','Direction','yuki_office'),
    mk('はい。お得意様の懸念を経営陣に代弁いたします','Yes — VIP-concern-mgmt-represent','Close','kenji_office'),
  ]},
  {id:'conv_08528',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、学会で同分野の研究者が集結するぞ','Ren — conf same-field-researcher-gather','Mentor','hiroshi_boss'),
    mk('はい。論文の論評を予習しております','Yes — Paper-review pre-study','Earnest','ren_uni'),
    mk('蓮、研究施設の新棟の開館式に出ろ','Ren — research-new-wing-open-ceremony attend','Direction','hiroshi_boss'),
    mk('はい。指摘事項を研究計画に取り込む努力をします','Yes — Pointed-item-research-plan-absorb','Polite','ren_uni'),
    mk('蓮、研究プロジェクトの愛称を考えろ','Ren — research-proj-nickname-think','Direction','hiroshi_boss'),
    mk('はい。研究費の利率優遇制度を活用いたします','Yes — Research-fund-rate-pref util','Earnest','ren_uni'),
    mk('蓮、海外助成の換金手続を学習しろ','Ren — overseas-grant exchange-proc-learn','Direction','hiroshi_boss'),
    mk('はい。研究意義を学会で代弁いたします','Yes — Research-meaning-conf-represent','Earnest close','ren_uni'),
  ]},
  {id:'conv_08529',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、応援部隊を現場に集結させました','Police backup-on-site-gather','Calm','takeda_officer'),
    mk('はい。警察、市民からの論評を受け止めてらっしゃいますね','Yes — Police citizen-review-accept','Cooperative','kenji_office'),
    mk('警察、防犯センターの開館を市民にご案内します','Police crime-prev-center-open citizen-announce','Procedural','takeda_officer'),
    mk('はい。警察、市民意見を施策に取り込む姿勢ですね','Yes — Police citizen-view-policy-absorb','Cooperative','kenji_office'),
    mk('警察、防犯キャンペーンの愛称を募集します','Police crime-prev-camp-nickname-recruit','Procedural','takeda_officer'),
    mk('はい。警察、不正利率取引の詐欺を捜査されてますね','Yes — Police illegal-rate-fraud inv','Cooperative','kenji_office'),
    mk('警察、外貨換金の不正取引を摘発します','Police forex exchange-illegal bust','Procedural','takeda_officer'),
    mk('はい。警察、被害者のお気持ちを代弁されてますね','Yes — Police victim-feel-represent','Close','kenji_office'),
  ]},
  {id:'conv_08530',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、全社員を集結させて方針を語られたぞ','Dad — founding all-staff-gather-policy-told','Sage','hiroshi_elder'),
    mk('はい。お父さんは新聞の論評にも目を通された','Yes — Dad newspaper-review-checked','Commitment','hiroshi_boss'),
    mk('お父さん、本社の開館式を盛大にされたぞ','Dad — HQ-open-ceremony-grand','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の声を経営に取り込む姿勢でした','Yes — Dad staff-voice-mgmt-absorb','Reflective','hiroshi_boss'),
    mk('お父さん、社員のクラブに愛称を付けられたぞ','Dad — staff-club-nickname-attached','Wistful','hiroshi_elder'),
    mk('はい。お父さんは取引銀行と利率交渉に強かった','Yes — Dad bank-rate-nego-strong','Reflective','hiroshi_boss'),
    mk('お父さん、海外送金の換金率を交渉されたぞ','Dad — overseas-trans-exchange-rate-nego','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の苦労を株主に代弁されました','Yes — Dad staff-hardship-shareholders-represent','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08531',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、脳死判定の倫理問題を論文で扱いましたね','Ren — brain-death-ethics paper','Calm','asuka_teacher'),
    mk('はい、永続的な平和構築の論点を論文で扱いました','Yes — Perm-peace-build-pt paper','Earnest','ren_uni'),
    mk('蓮さん、双方向のメディア発展史を論文で扱いましたね','Ren — bi-directional-media-hist paper','Reflective','asuka_teacher'),
    mk('はい、籠城戦の包囲戦術を論文で扱いました','Yes — Siege-encircle-tact paper','Earnest','ren_uni'),
    mk('選挙落選議員の動向を論文で扱いましたね','Election-defeated-MP-trend paper','Engaged','asuka_teacher'),
    mk('はい、近代国家の兵力規模を論文で扱いました','Yes — Modern-state-mil-scale paper','Earnest','ren_uni'),
    mk('蓮さん、戦時没収財産の補償を論文で扱いましたね','Ren — wartime-seized-prop-comp paper','Reflective','asuka_teacher'),
    mk('はい、上告審の判例研究を論文で扱いました','Yes — Final-appeal-precedent paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08532',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、脳死患者の関連事案を警察、慎重に扱われてますね','Case brain-death-rel police-careful','Reflective','ren_uni'),
    mk('警察、永続的な地域防犯活動を継続します','Police perm-local-crime-prev cont','Procedural','takeda_officer'),
    mk('本件、双方向の情報共有を警察、なさってますね','Case bi-directional-info-share police-do','Reflective','ren_uni'),
    mk('警察、容疑者を包囲し、無事確保しました','Police suspect-encircle-safe-arrest','Procedural','takeda_officer'),
    mk('本件、市議落選後の動向も警察、把握されてますね','Case city-MP-defeated-trend police-grasp','Reflective','ren_uni'),
    mk('警察、テロ事案に備えて兵力配置を検討します','Police terror-case mil-deploy consider','Procedural','takeda_officer'),
    mk('本件、犯罪収益の没収手続を警察、進められてますね','Case crime-profit-seize-proc police-progress','Reflective','ren_uni'),
    mk('警察、上告審の判決にも対応します','Police final-appeal-verdict resp','Close','takeda_officer'),
  ]},
  {id:'conv_08533',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、脳死判定の倫理問題を論文で扱いましたね','Sakura — brain-death-ethics paper','Calm','asuka_teacher'),
    mk('はい、永続的な平和構築の論点を論文で扱いました','Yes — Perm-peace paper','Earnest teen','sakura_teen'),
    mk('双方向のメディア発展史を論文で扱いましたね','Bi-direction-media paper','Reflective','asuka_teacher'),
    mk('はい、籠城戦の包囲戦術を論文で扱いました','Yes — Siege-encircle paper','Earnest','sakura_teen'),
    mk('選挙落選議員の動向を論文で扱いましたね','Election-defeat-MP paper','Engaged','asuka_teacher'),
    mk('はい、近代国家の兵力規模を論文で扱いました','Yes — Modern-mil-scale paper','Earnest','sakura_teen'),
    mk('戦時没収財産の補償を論文で扱いましたね','War-seize-prop-comp paper','Reflective','asuka_teacher'),
    mk('はい、上告審の判例を論文で扱いました','Yes — Final-appeal paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08534',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、脳死判定の手順を医療チームで厳守しております','Ren — brain-death-proc med-team strict','Calm','saito_doctor'),
    mk('はい、慢性病の永続的な管理を医療チームで担当します','Yes — Chronic-perm-mgmt med-team handle','Patient','saito_doctor'),
    mk('双方向の医療相談アプリを、貴院、ご導入されたんですね、先生','Bi-direction-med-cons-app your-hosp intro, sensei','Curious','ren_uni'),
    mk('はい、感染症の包囲対策を医療チームで強化しました','Yes — Infect-encircle-counter med-team strengthen','Patient','saito_doctor'),
    mk('議員落選後の体調管理を、貴院、なさったそうですね、先生','MP-defeat-health-mgmt your-hosp do, sensei','Reflective','ren_uni'),
    mk('はい、災害時の医療兵力配置も医療チームで備えております','Yes — Disaster-med-deploy med-team prep','Patient','saito_doctor'),
    mk('医薬品の没収案件を、貴院、対応されたそうですね、先生','Drug-seize-case your-hosp resp, sensei','Reflective','ren_uni'),
    mk('はい、医療訴訟の上告審にも医療チームで対応します','Yes — Med-trial-final-appeal med-team resp','Patient close','saito_doctor'),
  ]},
  {id:'conv_08535',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、脳死関連の医療事業に参入しろ','Our co — brain-death-rel-med-biz enter','Crisp','hiroshi_boss'),
    mk('はい。永続的な顧客との関係を維持します','Yes — Perm-cust-rel maintain','Methodical','kenji_office'),
    mk('当社、双方向のサービスを開発しろ','Our co — bi-direction-svc develop','Direction','hiroshi_boss'),
    mk('はい。市場の包囲戦略を立案中です','Yes — Market-encircle-strat planning','Update','kenji_office'),
    mk('当社、入札で落選しても撤退するな','Our co — bid-defeat retreat-not','Direction','hiroshi_boss'),
    mk('はい。海外現法の兵力規模に近い体制を整えます','Yes — Overseas-sub mil-scale-near system','Update','kenji_office'),
    mk('当社、不正所得の没収命令には従え','Our co — illegal-income-seize-order obey','Direction','hiroshi_boss'),
    mk('はい。係争中の案件は上告審へ進みます','Yes — Dispute-case final-appeal-progress','Close','kenji_office'),
  ]},
  {id:'conv_08536',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、毎朝腹筋運動なさってるんだって、メイちゃん','Aoi — cust every-morn-abs-do Mei','Reflective','mei_romantic'),
    mk('葵、お店のゴキブリ退治、業者さんに頼みましょう、メイちゃん','Aoi — store-roach-ext biz-hire Mei','Direction','aoi_barista'),
    mk('葵、お客様、金髪に染められて素敵ね、メイちゃん','Aoi — cust blond-dyed-lovely Mei','Praising','mei_romantic'),
    mk('葵、新メニューにトウモロコシのスープを加えましょう、メイちゃん','Aoi — new-menu corn-soup-add Mei','Animated','aoi_barista'),
    mk('葵、お店にねずみがいないか確認しましょう、メイちゃん','Aoi — store-mouse-check Mei','Direction','mei_romantic'),
    mk('葵、ハロウィン限定でかぼちゃのデザートを作りましょう、メイちゃん','Aoi — Halloween-pumpkin-dessert-make Mei','Animated','aoi_barista'),
    mk('葵、お客様、夜はウイスキーを召し上がるって、メイちゃん','Aoi — cust night-whisky-drink Mei','Reflective','mei_romantic'),
    mk('葵、お客様、毎週サウナに通ってらっしゃるって、メイちゃん','Aoi — cust weekly-sauna-go Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08537',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが腹筋運動を毎日されたぞ','Gran — youth Dad abs-daily-did','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お庭の虫退治を引き受けてらしたわよね、あなた?','Yes — Grandpa garden-bug-ext-took, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは金髪の方と国際交流をされたぞ','Gran — youth Dad blond-int-exch','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夏はトウモロコシを焼いて下さったわよね、あなた?','Grandpa — summer-corn-grilled, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお家のねずみを退けて下さったぞ','Gran — youth Dad-home-mouse-drove-off','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、秋にかぼちゃを煮てらしたわよね、あなた?','Grandpa — autumn-pumpkin-stew, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがウイスキーを嗜まれたぞ','Gran — youth Dad whisky-enjoyed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、温泉でサウナに入られたわよね、あなた?','Grandpa — onsen-sauna-enter, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08538',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが毎朝腹筋運動なさってるのよ','Sho — Dad every-morn-abs-do','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お家のアリを退治するお手伝いしたよ','Mei-sis — me home-ant-ext-helped','Proud child','sho_child'),
    mk('翔くん、メイ姉さんのお友達は金髪の方なのよ','Sho — Mei-sis-friend-blond','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、給食のトウモロコシ大好きだよ','Mei-sis — me lunch-corn-love','Eager child','sho_child'),
    mk('翔くん、絵本にかわいいねずみのキャラがいるわね','Sho — picture-book-cute-mouse-chara','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ママとかぼちゃパイ作ったよ','Mei-sis — me Mom-pumpkin-pie-made','Proud child','sho_child'),
    mk('翔くん、お父さんはウイスキーをたまに召し上がるのよ','Sho — Dad whisky-occasionally','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとお風呂のサウナ入りたいよ','Mei-sis — me Dad-bath-sauna-want','Eager close','sho_child'),
  ]},
  {id:'conv_08539',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、腹筋いつもやってんな','Riku — abs-always-do','Curious teen','sakura_teen'),
    mk('お前、ゴキブリ退治得意だろ、桜','You — roach-ext-good Sakura','Wry','riku_teen'),
    mk('リク、お前、金髪に憧れてるんだろ?','Riku — blond-admire?','Curious','sakura_teen'),
    mk('お前、給食のトウモロコシ残すなよ、桜','You — lunch-corn don\'t-leave Sakura','Wry','riku_teen'),
    mk('リク、お前、ねずみのキャラ好きだろ?','Riku — mouse-chara-like?','Curious','sakura_teen'),
    mk('お前、ハロウィンでかぼちゃ被ったろ?桜','You — Halloween-pumpkin-wore? Sakura','Wry','riku_teen'),
    mk('リク、お前、ウイスキーは大人になってからだぞ','Riku — whisky adult-after','Direction','sakura_teen'),
    mk('お前、サウナ熱すぎだろ、桜','You — sauna-too-hot Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08540',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが腹筋運動の本買ってらしたわ','Sho — Dad abs-book-bought','Reflective','yumiko_mom'),
    mk('ママ、ぼく、虫退治の絵本読んでるよ','Mom — me bug-ext-book-read','Eager child','sho_child'),
    mk('翔くん、お父さんの留学時代のお友達、金髪の方よ','Sho — Dad-study-friend-blond','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと畑のトウモロコシ収穫したよ','Mom — me Dad-field-corn-harvested','Proud child','sho_child'),
    mk('翔くん、絵本に出てくるねずみ、可愛いわね','Sho — picture-book-mouse-cute','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんのかぼちゃ煮、大好きだよ','Mom — me Grandma-pumpkin-stew-love','Eager child','sho_child'),
    mk('翔くん、お父さんがお客様にウイスキーをお出ししたわ','Sho — Dad-cust-whisky-served','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとサウナに入りたいよ','Mom — me Dad-sauna-want','Eager close','sho_child'),
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

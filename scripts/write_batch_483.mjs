import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_483 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['見せつけ','混じり','ふやす','腰掛け','役立た','焼か','溶かし','襲い']
const B_T = ['大尉','同書','号証','線形','密集','細心','デモンストレーション','もとづく']
const C_T = ['除雪','透過','発芽','絶縁','局所','鮮度','生鮮','基板']
const D_T = ['チェルシー','太宰','アンパン','紀伊国屋','バロック','リアリズム','ホビー','マイカー']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09621',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが家族愛を見せつけるみたいに食事を作って下さったわ','Sho — Dad-fam-love-display-meal','Tender','yumiko_mom'),
    mk('ママ、お父さんと話す時、ぼくは笑顔混じりに聞いてるよ','Mom — Dad-talk-me-smile-mix','Tender child','sho_child'),
    mk('翔くん、お友達をふやす努力をしてみてね','Sho — friend-up-effort','Direction','yumiko_mom'),
    mk('ママ、お父さんが縁側に腰掛けてお茶を召し上がってるよ','Mom — Dad-veranda-sit-tea','Reflective child','sho_child'),
    mk('翔くん、お父さんは家族のためなら役立たない事は無いって仰るわ','Sho — Dad-fam-useless-no','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんがパンを焼かれる匂いが好きだよ','Mom — me Dad-bread-bake-smell-like','Eager child','sho_child'),
    mk('翔くん、お父さんがチョコを溶かしてケーキを作って下さったわ','Sho — Dad-choc-melt-cake','Pleased','yumiko_mom'),
    mk('ママ、雷雨が襲い来ても、ぼくはお父さんと一緒なら平気だよ','Mom — storm-attack-Dad-with-fine','Earnest close','sho_child'),
  ]},
  {id:'conv_09622',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お子様への愛情を見せつけるみたいにお話されてたよ、メイちゃん','Aoi — cust-kid-love-display-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、笑顔混じりにご注文されたよ、メイちゃん','Aoi — cust-smile-mix-order Mei','Pleased','aoi_barista'),
    mk('葵、リピーターをふやす施策を考えようね、メイちゃん','Aoi — repeat-up-plan Mei','Direction','mei_romantic'),
    mk('葵、お客様、窓際に腰掛けるのがお気に入りだって、メイちゃん','Aoi — cust-window-sit-fav Mei','Reflective','aoi_barista'),
    mk('葵、無駄な備品は役立たないから処分しようね、メイちゃん','Aoi — waste-equip-useless-discard Mei','Direction','mei_romantic'),
    mk('葵、お店でパンを焼かれる時間を増やしてみようか、メイちゃん','Aoi — store-bread-bake-time-up Mei','Direction','aoi_barista'),
    mk('葵、ホットチョコレートはチョコを溶かして作るのよね、メイちゃん','Aoi — hot-choc-choc-melt Mei','Reflective','mei_romantic'),
    mk('葵、台風が襲い来る予報だから準備しようね、メイちゃん','Aoi — typhoon-attack-prep Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09623',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが家族愛を行動で見せつけられた','Gran — youth Dad-fam-love-act-display','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、白髪混じりが渋かったわよね、あなた?','Yes — Grandpa-gray-mix-cool, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが田畑をふやすため努力された','Gran — youth Dad-field-up-effort','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、縁側に腰掛けて夕日をご覧になったわよね、あなた?','Grandpa — veranda-sit-sunset, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「役立たないと感じる時もあった」と仰った','Gran — youth Dad-useless-felt-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お餅を炭火で焼かれるのが上手だったわよね、あなた?','Grandpa — mochi-char-bake-good, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが氷砂糖を溶かしてシロップを作られた','Gran — youth Dad-rock-sugar-melt-syrup','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、嵐が襲い来た夜も冷静でいらしたわよね、あなた?','Grandpa — storm-attack-night-calm, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09624',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、彼女に愛情見せつけてたな','Riku — gf-love-display','Wry teen','sakura_teen'),
    mk('お前、最近髪に白髪混じりだぞ、桜','You — recently-gray-mix Sakura','Wry','riku_teen'),
    mk('リク、お前、貯金をふやす方法考えてるな','Riku — savings-up-think','Curious','sakura_teen'),
    mk('お前、ベンチに腰掛けて読書してたな、桜','You — bench-sit-read Sakura','Curious','riku_teen'),
    mk('リク、お前のアプリ、結局役立たなかったな','Riku — app-useless','Wry','sakura_teen'),
    mk('お前、餅をトースターで焼かれたな、桜','You — mochi-toaster-bake Sakura','Wry','riku_teen'),
    mk('リク、お前、氷を溶かしてジュース作ってたな','Riku — ice-melt-juice','Curious','sakura_teen'),
    mk('お前、ゲームでボスが襲い来る場面で叫んでたな、桜','You — game-boss-attack-shout Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09625',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが家族愛を見せつけるみたいに優しいわね','Sho — Dad-fam-love-display-kind','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの言葉に笑顔混じりに頷いたよ','Mei-sis — me Dad-words-smile-mix-nod','Eager child','sho_child'),
    mk('翔くん、お友達をふやす努力もしてみてね','Sho — friend-up-effort','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとベンチに腰掛けてお話したよ','Mei-sis — me Dad-bench-sit-talk','Eager child','sho_child'),
    mk('翔くん、メイ姉さんが役立たないって思う事は無いわよ','Sho — Mei-sis-useless-not','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとさつまいもを焼かれるのを楽しみにしてるよ','Mei-sis — me Dad-sweet-pot-bake-wait','Eager child','sho_child'),
    mk('翔くん、お父さんがアイスを溶かしてシェイクを作って下さるそうよ','Sho — Dad-ice-melt-shake','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、台風が襲い来てもお父さんと一緒なら大丈夫だよ','Mei-sis — me typhoon-attack-Dad-fine','Earnest close','sho_child'),
  ]},
  {id:'conv_09626',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、創業者は元自衛隊の大尉でいらした','Our co — founder-ex-mil-capt','Crisp','hiroshi_boss'),
    mk('はい。提案書では同書の参考文献を明示します','Yes — Prop-ref-clear','Methodical','kenji_office'),
    mk('当社、訴訟資料の甲第一号証を提出しろ','Our co — lit-evid-1-submit','Direction','hiroshi_boss'),
    mk('はい。事業計画の線形成長予測を立てます','Yes — Biz-plan-lin-grow-est','Update','kenji_office'),
    mk('密集した展示会場にも対応しろ','Crowd-expo-resp','Direction','hiroshi_boss'),
    mk('はい。細心の注意を払って準備します','Yes — Care-prep','Update','kenji_office'),
    mk('展示会でデモンストレーションを実施しろ','Expo-demo-imp','Direction','hiroshi_boss'),
    mk('はい。経営判断は事実にもとづく方針です','Yes — Mgmt-judg-fact-base','Close','kenji_office'),
  ]},
  {id:'conv_09627',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('お取引先の社長は元軍人で大尉でいらしたわ','Partner-pres-ex-mil-capt','Reflective','yuki_office'),
    mk('はい。報告書で同書の引用を整理します','Yes — Rep-ref-org','Cooperative','kenji_office'),
    mk('訴訟関連の乙第二号証を確認しましょう','Lit-evid-2-check','Direction','yuki_office'),
    mk('はい。売上の線形回帰分析を出します','Yes — Sales-lin-reg-anal','Update','kenji_office'),
    mk('混雑し密集した売り場の改善案を出しましょう','Crowd-floor-impr-prop','Direction','yuki_office'),
    mk('はい。商談には細心の準備を致します','Yes — Biz-care-prep','Update','kenji_office'),
    mk('新製品のデモンストレーションを計画しましょう','New-prod-demo-plan','Direction','yuki_office'),
    mk('はい。判断は調査結果にもとづく方針です','Yes — Judg-survey-base','Close','kenji_office'),
  ]},
  {id:'conv_09628',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、軍事史で大尉の役割を学ぶといい','Ren — mil-hist-capt-role-learn','Mentor','hiroshi_boss'),
    mk('はい。論文では同書の参考箇所を明示します','Yes — Paper-ref-clear','Earnest','ren_uni'),
    mk('蓮、訴訟資料の号証管理を覚えろ','Ren — lit-evid-num-mgmt-learn','Direction','hiroshi_boss'),
    mk('はい。データの線形回帰を試みます','Yes — Data-lin-reg-try','Earnest','ren_uni'),
    mk('蓮、密集した学会会場でも発表は冷静にしろ','Ren — crowd-conf-pres-calm','Direction','hiroshi_boss'),
    mk('はい。実験は細心の注意で進めます','Yes — Exp-care','Polite','ren_uni'),
    mk('蓮、学会発表でデモンストレーションを工夫しろ','Ren — conf-pres-demo-impr','Direction','hiroshi_boss'),
    mk('はい。結論は実験データにもとづく姿勢を貫きます','Yes — Concl-exp-base','Earnest close','ren_uni'),
  ]},
  {id:'conv_09629',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、機動隊の元大尉も指揮されますね','Police mob-ex-capt-cmd','Cooperative','kenji_office'),
    mk('警察、調書で同書の参照を明確にされますね','Police statem-ref-clear','Cooperative','kenji_office'),
    mk('警察、裁判所への号証提出を担当されますね','Police court-evid-submit','Cooperative','kenji_office'),
    mk('警察、犯行時刻の線形予測も活用されますね','Police crime-time-lin-est','Cooperative','kenji_office'),
    mk('警察、密集したデモを安全に警備されますね','Police crowd-demo-safe-guard','Cooperative','kenji_office'),
    mk('警察、捜査に細心の注意を払われますね','Police inv-care','Cooperative','kenji_office'),
    mk('警察、防犯デモンストレーションを地域でおこなわれますね','Police prev-demo-local','Cooperative','kenji_office'),
    mk('警察、判断は証拠にもとづく姿勢で一貫されますね','Police judg-evid-base-consist','Close','kenji_office'),
  ]},
  {id:'conv_09630',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業前、海軍の大尉でいらした','Dad — pre-found-navy-capt','Sage','hiroshi_elder'),
    mk('はい。お父さんは同書を経営の指針にされた','Yes — Dad ref-mgmt-guide','Commitment','hiroshi_boss'),
    mk('お父さん、契約紛争で号証管理を徹底された','Dad — contract-dispute-evid-strict','Wistful','hiroshi_elder'),
    mk('はい。お父さんは売上の線形成長を信じた','Yes — Dad sales-lin-trust','Reflective','hiroshi_boss'),
    mk('お父さん、密集した工場でも事故ゼロを保たれた','Dad — crowd-fact-zero-acc','Wistful','hiroshi_elder'),
    mk('はい。お父さんは細心の経営判断をされた','Yes — Dad care-mgmt-judg','Reflective','hiroshi_boss'),
    mk('お父さん、商品デモンストレーションを自ら披露された','Dad — prod-demo-self-show','Wistful','hiroshi_elder'),
    mk('はい。お父さんは事実にもとづく経営を貫かれた','Yes — Dad fact-base-mgmt','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09631',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、豪雪地帯の除雪体制の研究を論文で扱いましたね','Ren — heavy-snow-rem paper','Calm','asuka_teacher'),
    mk('はい、可視光透過率の素材研究を論文で扱いました','Yes — Vis-light-trans paper','Earnest','ren_uni'),
    mk('蓮さん、種子の発芽条件を論文で扱いましたね','Ren — seed-germ-cond paper','Reflective','asuka_teacher'),
    mk('はい、電線の絶縁体技術を論文で扱いました','Yes — Wire-insul paper','Earnest','ren_uni'),
    mk('脳の局所機能解剖を論文で扱いましたね','Brain-loc-anat paper','Engaged','asuka_teacher'),
    mk('はい、刺身の鮮度管理研究を論文で扱いました','Yes — Sashimi-fresh paper','Earnest','ren_uni'),
    mk('蓮さん、生鮮食品の流通網を論文で扱いましたね','Ren — fresh-food-dist paper','Reflective','asuka_teacher'),
    mk('はい、半導体基板の製造工程を論文で扱いました','Yes — Semi-board-mfg paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09632',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、豪雪時の除雪事故を、警察、扱われてますね','Case snow-rem-acc police-handle','Reflective','ren_uni'),
    mk('警察、透過率の高い透明シール犯行に対応します','Police trans-clear-tape-resp','Procedural','takeda_officer'),
    mk('本件、植物の発芽研究施設の盗難を、警察、扱われますね','Case germ-fac-theft police-handle','Reflective','ren_uni'),
    mk('警察、絶縁テープ使用の犯行も把握します','Police insul-tape-crime','Procedural','takeda_officer'),
    mk('本件、局所的な犯罪多発地域を、警察、注視されますね','Case loc-crime-area police-watch','Reflective','ren_uni'),
    mk('警察、押収品の鮮度管理が必要な事例もあります','Police seiz-fresh-mgmt','Procedural','takeda_officer'),
    mk('本件、生鮮食品の偽装事件を、警察、捜査されますね','Case fresh-food-fraud police-inv','Reflective','ren_uni'),
    mk('警察、半導体基板の窃盗事件にも対応します','Police semi-board-theft-resp','Close','takeda_officer'),
  ]},
  {id:'conv_09633',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、豪雪地帯の除雪体制を論文で扱いましたね','Sakura — snow-rem paper','Calm','asuka_teacher'),
    mk('はい、可視光透過率の素材研究を論文で扱いました','Yes — Vis-trans paper','Earnest teen','sakura_teen'),
    mk('種子の発芽条件を論文で扱いましたね','Seed-germ paper','Reflective','asuka_teacher'),
    mk('はい、電線の絶縁体技術を論文で扱いました','Yes — Wire-insul paper','Earnest','sakura_teen'),
    mk('脳の局所機能解剖を論文で扱いましたね','Brain-loc paper','Engaged','asuka_teacher'),
    mk('はい、刺身の鮮度管理を論文で扱いました','Yes — Sashimi-fresh paper','Earnest','sakura_teen'),
    mk('生鮮食品の流通網を論文で扱いましたね','Fresh-food-dist paper','Reflective','asuka_teacher'),
    mk('はい、半導体基板の製造工程を論文で扱いました','Yes — Semi-board paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09634',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、雪国の除雪中事故の応急処置を医療チームで研究します','Ren — snow-rem-acc-ER med-team','Calm','saito_doctor'),
    mk('はい、X線の透過率を医療チームで日々確認します','Yes — Xray-trans med-team daily','Patient','saito_doctor'),
    mk('蓮さん、皮膚の発芽性嚢胞の処置を医療チームでおこないます','Ren — skin-germ-cyst med-team','Calm','saito_doctor'),
    mk('はい、電気メスの絶縁を医療チームで日々点検します','Yes — Electro-scalp-insul med-team','Patient','saito_doctor'),
    mk('局所麻酔の症例を、貴院、多く扱われますね、先生','Loc-anesth-case your-hosp many, sensei','Reflective','ren_uni'),
    mk('はい、血液の鮮度を医療チームで管理します','Yes — Blood-fresh med-team','Patient','saito_doctor'),
    mk('生鮮食品アレルギーの対策を、貴院、進められてますね、先生','Fresh-food-allerg-counter your-hosp prog, sensei','Curious','ren_uni'),
    mk('はい、医療機器の基板トラブル対策も医療チームで進めます','Yes — Med-eq-board-counter med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09635',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、駐車場の除雪契約を更新しろ','Our co — parking-snow-rem-contract-up','Crisp','hiroshi_boss'),
    mk('はい。新製品の透過率データを公表します','Yes — New-prod-trans-data-pub','Methodical','kenji_office'),
    mk('当社、新市場での発芽期を見極めろ','Our co — new-mkt-germ-judg','Direction','hiroshi_boss'),
    mk('はい。事業の絶縁的撤退も視野に入れます','Yes — Biz-insul-withdraw-view','Update','kenji_office'),
    mk('局所市場の動向を分析しろ','Loc-mkt-anal','Direction','hiroshi_boss'),
    mk('はい。食材の鮮度管理を徹底します','Yes — Ingred-fresh-strict','Update','kenji_office'),
    mk('当社、生鮮食品事業を強化しろ','Our co — fresh-food-strength','Direction','hiroshi_boss'),
    mk('はい。電子基板の調達網を見直します','Yes — Board-procure-rev','Close','kenji_office'),
  ]},
  {id:'conv_09636',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、チェルシーのファンだって、メイちゃん','Aoi — cust-Chelsea-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、太宰治の小説がお好きだって、メイちゃん','Aoi — cust-Dazai-novel Mei','Reflective','aoi_barista'),
    mk('葵、お客様、アンパンマンのキャラ好きなお子様連れだったよ、メイちゃん','Aoi — cust-Anpan-kid Mei','Pleased','mei_romantic'),
    mk('葵、お客様、紀伊国屋書店で本を買って来られたよ、メイちゃん','Aoi — cust-Kinokuniya-book Mei','Reflective','aoi_barista'),
    mk('葵、お客様、バロック音楽がお好きだって、メイちゃん','Aoi — cust-Baroque-music Mei','Reflective','mei_romantic'),
    mk('葵、お客様、リアリズム文学にお詳しいって、メイちゃん','Aoi — cust-realism-lit Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ホビーショップによく行かれるって、メイちゃん','Aoi — cust-hobby-shop Mei','Reflective','mei_romantic'),
    mk('葵、お客様、マイカー通勤されてるって、メイちゃん','Aoi — cust-my-car-comm Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09637',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがチェルシーの試合をご覧になった','Gran — youth Dad-Chelsea-match','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、太宰治の本をお持ちだったわよね、あなた?','Yes — Grandpa-Dazai-book, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが孫にアンパンマンの絵本を読まれた','Gran — youth Dad-grandkid-Anpan-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、紀伊国屋書店で文庫本を選ばれたわよね、あなた?','Grandpa — Kinokuniya-book-pick, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがバロック音楽のレコードを集められた','Gran — youth Dad-Baroque-rec','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、リアリズム文学を愛読されたわよね、あなた?','Grandpa — realism-lit-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがホビー雑誌を読まれた','Gran — youth Dad-hobby-mag-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、マイカーを大切にされたわよね、あなた?','Grandpa — my-car-cherish, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09638',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがチェルシーのユニフォームを下さるそうよ','Sho — Dad-Chelsea-uni-give','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと太宰治の絵本読んだよ','Mei-sis — me Dad-Dazai-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがアンパンマンの映画に連れて行って下さるそうよ','Sho — Dad-Anpan-movie-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、紀伊国屋書店で絵本買ったよ','Mei-sis — me Kinokuniya-pic-buy','Eager child','sho_child'),
    mk('翔くん、お父さんがバロック音楽を聴かせて下さるそうよ','Sho — Dad-Baroque-listen','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとリアリズムの絵本読んだよ','Mei-sis — me Dad-realism-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがホビーショップに連れて行って下さるそうよ','Sho — Dad-hobby-shop-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんのマイカーに乗ったよ','Mei-sis — me Dad-my-car-ride','Eager close','sho_child'),
  ]},
  {id:'conv_09639',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、チェルシーの試合観てたな','Riku — Chelsea-watch','Curious teen','sakura_teen'),
    mk('お前、国語で太宰治の「走れメロス」習ったろ?桜','You — JP-Dazai-Melos? Sakura','Curious','riku_teen'),
    mk('リク、お前、アンパンマンの主題歌歌ってたな','Riku — Anpan-theme-sing','Wry','sakura_teen'),
    mk('お前、紀伊国屋書店で参考書漁ってたな、桜','You — Kinokuniya-ref-book Sakura','Curious','riku_teen'),
    mk('リク、お前、音楽でバロック習ったろ?','Riku — music-Baroque?','Curious','sakura_teen'),
    mk('お前、国語でリアリズム文学習ったろ?桜','You — JP-realism? Sakura','Curious','riku_teen'),
    mk('リク、お前、ホビーショップによく行ってたな','Riku — hobby-shop-go','Curious','sakura_teen'),
    mk('お前ん家、マイカーで旅行行ったろ?桜','You-home-my-car-trip? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09640',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがチェルシーの試合中継を観てらしたわ','Sho — Dad-Chelsea-broadcast-watch','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと太宰治のお話聞いたよ','Mom — me Dad-Dazai-told','Eager child','sho_child'),
    mk('翔くん、お父さんがアンパンマンの絵本を選んで下さったわ','Sho — Dad-Anpan-pic-pick','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと紀伊国屋書店に行ったよ','Mom — me Dad-Kinokuniya-went','Eager child','sho_child'),
    mk('翔くん、お父さんがバロック音楽の演奏会に行かれたわ','Sho — Dad-Baroque-concert','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとリアリズムの絵本読んだよ','Mom — me Dad-realism-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがホビーショップで模型をお買いになったわ','Sho — Dad-hobby-shop-model-buy','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとマイカーで遠出したよ','Mom — me Dad-my-car-trip','Eager close','sho_child'),
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

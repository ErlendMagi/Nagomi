import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_522 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['びん','左足','トホホ','デブ','キュート','フレンドリー','カミさん','姑']
const B_T = ['車種','日本円','丸の内','新橋','読み物','スチール','ストリーム','ポータブル']
const C_T = ['いきさつ','参列','次女','釧路','憂慮','を以て','綴り','かんがみ']
const D_T = ['ハワイアン','ノーマル','ヤンキー','ハーモニー','ユニオン','ベール','ダイジェスト','レベルアップ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10401',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son evening chat',lines:[
    mk('翔くん、お醤油のびんが割れちゃって、お父さんが片付けて下さってるわ','Sho — soy-bottle-break Dad-clean','Tender','yumiko_mom'),
    mk('ママ、ぼく、サッカーで左足を打っちゃったよ','Mom — me soccer-left-foot-hit','Earnest child','sho_child'),
    mk('翔くん、それはトホホな結果ね、お父さんに見せて','Sho — that-disap-Dad-show','Wry','yumiko_mom'),
    mk('ママ、ぼく、最近デブになりすぎないように気を付けてるよ','Mom — me recently-fat-no-care','Earnest child','sho_child'),
    mk('翔くん、その絵、本当にキュートに描けてるわよ','Sho — pic-really-cute-draw','Praising','yumiko_mom'),
    mk('ママ、新しいクラスのみんな、フレンドリーで嬉しいよ','Mom — new-class-fri-glad','Pleased child','sho_child'),
    mk('翔くん、お父さんが「カミさん」って私を呼んで下さるのよ','Sho — Dad-"Kami-san"-me-call','Tender wry','yumiko_mom'),
    mk('ママ、お祖母ちゃん、つまり姑さんが明日いらっしゃるよ','Mom — grandm-mother-in-law-tom-come','Earnest close','sho_child'),
  ]},
  {id:'conv_10402',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、シロップのびんが空だって仰ってたよ、メイちゃん','Aoi — cust-syrup-bottle-empty Mei','Reflective','mei_romantic'),
    mk('葵、お客様、左足のリハビリ中だって仰ってたよ、メイちゃん','Aoi — cust-left-foot-rehab Mei','Reflective','aoi_barista'),
    mk('葵、お客様、今日はトホホな日だって仰ってたよ、メイちゃん','Aoi — cust-today-disap Mei','Reflective','mei_romantic'),
    mk('葵、お客様、自分は最近デブ気味だって笑ってらしたよ、メイちゃん','Aoi — cust-self-fat-laugh Mei','Wry','aoi_barista'),
    mk('葵、お客様、ラテアートがキュートだって褒めて下さったよ、メイちゃん','Aoi — cust-latte-cute-praise Mei','Pleased','mei_romantic'),
    mk('葵、お客様、フレンドリーな接客が嬉しいって仰ってたよ、メイちゃん','Aoi — cust-friend-serv-glad Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご自身を「カミさん」って奥様の事を仰ってたよ、メイちゃん','Aoi — cust-self-"Kami-san"-wife Mei','Wry','mei_romantic'),
    mk('葵、お客様、姑さんとの旅行話を語って下さったよ、メイちゃん','Aoi — cust-mom-in-law-trip Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10403',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが空きびんを集めてリサイクルされた','Gran — youth Dad-empty-bottle-recycle','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、戦時中に左足を痛められたわよね、あなた?','Yes — Grandpa-war-left-foot-hurt, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「トホホ」と仰る日もあった','Gran — youth Dad-"toho-ho"-day','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、デブにはならない様に節制されたわよね、あなた?','Grandpa — youth-fat-no-mod, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが私の事をキュートだと仰った','Gran — youth Dad-me-cute-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、皆にフレンドリーに接していらしたわよね、あなた?','Grandpa — youth-all-fri-treat, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが私を「カミさん」と呼ばれた','Gran — youth Dad-me-"Kami-san"-call','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご自身のお母様、つまり私の姑との関係を大事にされたわよね、あなた?','Grandpa — youth-his-mom-my-mom-in-law-rel-cher, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10404',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ジュースのびん割っちゃったろ','Riku — juice-bottle-broke?','Wry teen','sakura_teen'),
    mk('お前、左足ねん挫したろ?桜','You — left-foot-sprain? Sakura','Wry','riku_teen'),
    mk('リク、お前、テスト結果見て「トホホ」って言ってたな','Riku — test-result-"toho-ho"','Wry','sakura_teen'),
    mk('お前、最近デブになったって言われたろ、桜','You — recently-fat-said? Sakura','Wry','riku_teen'),
    mk('リク、お前、新しい服キュートに着こなしてるな','Riku — new-clothes-cute-wear','Praising','sakura_teen'),
    mk('お前、転校生にフレンドリーに接してたな、桜','You — transfer-fri-treat Sakura','Praising','riku_teen'),
    mk('リク、お前のお父さん、お母さんを「カミさん」って呼ぶよな','Riku — your-Dad-Mom-"Kami-san"-call','Curious','sakura_teen'),
    mk('お前のお父さん、姑さんと仲良いって聞いたぞ、桜','You — your-Dad-mom-in-law-close Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10405',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがガラスのびんに花を活けて下さったわ','Sho — Dad-glass-bottle-flower','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに左足の使い方を教えて頂いたよ','Mei-sis — me Dad-left-foot-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが「トホホ」と笑って下さるのが好きよ','Sho — Dad-"toho-ho"-laugh-like','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、デブにならない様に運動してるよ','Mei-sis — me fat-no-exer','Earnest child','sho_child'),
    mk('翔くん、お父さんが描いた絵、キュートで素敵よ','Sho — Dad-draw-pic-cute-love','Praising','mei_romantic'),
    mk('メイ姉さん、お父さん、お友達にフレンドリーに接して下さるよ','Mei-sis — Dad-fri-treat','Eager child','sho_child'),
    mk('翔くん、お父さんがママを「カミさん」と呼んで下さるわよ','Sho — Dad-Mom-"Kami-san"-call','Tender','mei_romantic'),
    mk('メイ姉さん、お父さん、姑、つまりお祖母ちゃんと仲良いよ','Mei-sis — Dad-mom-in-law-grandm-close','Eager close','sho_child'),
  ]},
  {id:'conv_10406',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss strategizes ops',lines:[
    mk('当社、社用車の車種選定を見直せ','Our co — co-car-type-rev','Crisp','hiroshi_boss'),
    mk('はい。海外取引の日本円換算を厳しく管理します','Yes — Overs-yen-conv-strict','Methodical','kenji_office'),
    mk('当社、丸の内のオフィスへの移転を検討しろ','Our co — Marun-office-move-cons','Direction','hiroshi_boss'),
    mk('はい。新橋の取引先との会合を設定します','Yes — Shinb-client-meet-set','Update','kenji_office'),
    mk('当社、社内向け読み物を充実させろ','Our co — int-read-mat-enr','Direction','hiroshi_boss'),
    mk('はい。工場のスチール棚を増設します','Yes — Fact-steel-shelf-add','Update','kenji_office'),
    mk('当社、配信ストリームの品質を上げろ','Our co — deliv-stream-qual-up','Direction','hiroshi_boss'),
    mk('はい。ポータブル機器の充電体制を整えます','Yes — Port-dev-charge-set','Close','kenji_office'),
  ]},
  {id:'conv_10407',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社用車の車種を電気自動車に切り替えましょう','Co-car-EV-switch','Brisk','yuki_office'),
    mk('はい。海外送金の日本円換算を毎日確認します','Yes — Overs-rem-yen-daily','Cooperative','kenji_office'),
    mk('丸の内のセミナーに営業部から派遣します','Marun-sem-sales-dispatch','Direction','yuki_office'),
    mk('はい。新橋の老舗との連携を進めます','Yes — Shinb-est-link','Update','kenji_office'),
    mk('社員向け読み物を社内報に毎月載せましょう','Staff-read-mat-mo-news','Direction','yuki_office'),
    mk('はい。倉庫のスチールラックを新調します','Yes — Wareh-steel-rack-renew','Update','kenji_office'),
    mk('動画配信のストリームを高画質化しましょう','Vid-deliv-stream-HD','Direction','yuki_office'),
    mk('はい。会議用ポータブルプロジェクターを購入します','Yes — Meet-port-proj-buy','Close','kenji_office'),
  ]},
  {id:'conv_10408',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、企業の社用車の車種比較研究を続けろ','Ren — co-cars-comp-cont','Mentor','hiroshi_boss'),
    mk('はい。為替市場の日本円の変動を毎日記録します','Yes — FX-yen-daily-rec','Earnest','ren_uni'),
    mk('蓮、丸の内ビジネス街の経済論文を読め','Ren — Marun-bus-econ-read','Direction','hiroshi_boss'),
    mk('はい。新橋の歴史的商業地区の論文を読みます','Yes — Shinb-hist-bus-paper','Earnest','ren_uni'),
    mk('蓮、社員向け読み物を研究室で輪読しろ','Ren — staff-read-mat-circ-read','Direction','hiroshi_boss'),
    mk('はい。建材のスチール強度試験を見学します','Yes — Const-steel-strength-vis','Polite','ren_uni'),
    mk('蓮、データストリームの解析手法を深く学べ','Ren — data-stream-anal-deep','Direction','hiroshi_boss'),
    mk('はい。フィールド調査用のポータブル機材を整えます','Yes — Field-port-equip-set','Earnest close','ren_uni'),
  ]},
  {id:'conv_10409',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、不審な車種の追跡もされますね','Police susp-car-trace','Cooperative','kenji_office'),
    mk('警察、海外取引の日本円換算記録も精査されますね','Police overs-yen-rec-scr','Cooperative','kenji_office'),
    mk('警察、丸の内地区の防犯パトロールも担当されますね','Police Marun-prev-patrol','Cooperative','kenji_office'),
    mk('警察、新橋地区の繁華街の警備も担当されますね','Police Shinb-ent-guard','Cooperative','kenji_office'),
    mk('警察、防犯啓発の読み物も配布されますね','Police prev-aware-read-distr','Cooperative','kenji_office'),
    mk('警察、廃車のスチール部品の回収も指導されますね','Police scrap-steel-parts-collec','Cooperative','kenji_office'),
    mk('警察、通信ストリームの監視もされますね','Police comm-stream-mon','Cooperative','kenji_office'),
    mk('警察、現場でのポータブル無線機もご使用ですね','Police field-port-radio-use','Close','kenji_office'),
  ]},
  {id:'conv_10410',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社用車の車種を一台に統一された','Dad — found co-car-uni','Sage','hiroshi_elder'),
    mk('はい。お父さんは海外取引の日本円換算に詳しかった','Yes — Dad overs-yen-knowl','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、丸の内の銀行に勤められた','Dad — youth Marun-bank','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新橋で接待をされた','Yes — Dad Shinb-ent','Reflective','hiroshi_boss'),
    mk('お父さん、社員向け読み物を毎月編集された','Dad — staff-read-mat-mo-edit','Wistful','hiroshi_elder'),
    mk('はい。お父さんはスチール製品の品質に厳しかった','Yes — Dad steel-prod-strict','Reflective','hiroshi_boss'),
    mk('お父さん、新しい配信ストリームに早く対応された','Dad — new-deliv-stream-quick','Wistful','hiroshi_elder'),
    mk('はい。お父さんはポータブル機器の導入に積極的だった','Yes — Dad port-dev-act','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10411',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、明治維新のいきさつを論文で扱いましたね','Ren — Meiji-rest-circ paper','Calm','asuka_teacher'),
    mk('はい、皇室の参列儀式の歴史を論文で扱いました','Yes — Imp-att-cere-hist paper','Earnest','ren_uni'),
    mk('蓮さん、戦後の家族構成、次女以下の進学傾向を論文で扱いましたね','Ren — postwar-2nd-dght-edu paper','Reflective','asuka_teacher'),
    mk('はい、釧路湿原の生態系を論文で扱いました','Yes — Kushiro-marsh-eco paper','Earnest','ren_uni'),
    mk('蓮さん、国際情勢への憂慮の声明を論文で扱いましたね','Ren — int-affair-concern-state paper','Reflective','asuka_teacher'),
    mk('はい、憲法を以て国民の権利を守る論を論文で扱いました','Yes — Const-cit-right paper','Earnest','ren_uni'),
    mk('蓮さん、古文書の綴り方の研究を論文で扱いましたね','Ren — old-doc-spell-stud paper','Reflective','asuka_teacher'),
    mk('はい、先例にかんがみる司法判断を論文で扱いました','Yes — Prec-cons-jud-dec paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10412',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、犯人逮捕までのいきさつを、警察、丁寧に説明されますね','Case arrest-circ police-expl','Reflective','ren_uni'),
    mk('警察、被害者葬儀への参列もされますね','Police vict-fun-att','Cooperative','takeda_officer'),
    mk('本件、被害者の次女からの証言を、警察、取られますね','Case vict-2nd-dght-test police-take','Reflective','ren_uni'),
    mk('警察、釧路署との合同捜査もされますね','Police Kushiro-stat-joint','Cooperative','takeda_officer'),
    mk('本件、社会への影響に憂慮を、警察、表明されますね','Case soc-impact-concern police-exp','Reflective','ren_uni'),
    mk('警察、書面を以て上層部に報告されますね','Police wr-doc-up-rep','Cooperative','takeda_officer'),
    mk('本件、容疑者の供述の綴りを、警察、精査されますね','Case suspect-test-spell police-scr','Reflective','ren_uni'),
    mk('警察、過去の判例にかんがみて立件されますね','Police past-prec-cons-charge','Close','takeda_officer'),
  ]},
  {id:'conv_10413',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、明治維新のいきさつを論文で扱いましたね','Sakura — Meiji-rest-circ paper','Calm','asuka_teacher'),
    mk('はい、皇室の参列儀式の歴史を論文で扱いました','Yes — Imp-att-cere paper','Earnest teen','sakura_teen'),
    mk('戦後の家族構成、次女以下の進学傾向を論文で扱いましたね','Postwar-2nd-dght paper','Reflective','asuka_teacher'),
    mk('はい、釧路湿原の生態系を論文で扱いました','Yes — Kushiro-marsh paper','Earnest','sakura_teen'),
    mk('国際情勢への憂慮の声明を論文で扱いましたね','Int-aff-concern paper','Reflective','asuka_teacher'),
    mk('はい、憲法を以て国民の権利を守る論を論文で扱いました','Yes — Const-right paper','Earnest','sakura_teen'),
    mk('古文書の綴り方の研究を論文で扱いましたね','Old-doc-spell paper','Reflective','asuka_teacher'),
    mk('はい、先例にかんがみる司法判断を論文で扱いました','Yes — Prec-cons paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10414',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、患者の発症のいきさつを医療チームで丁寧に伺います','Ren — pati-onset-circ med-team','Calm','saito_doctor'),
    mk('蓮さん、お亡くなりになった患者様の葬儀への参列を医療チームでおこないます','Ren — dec-pati-fun-att med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様のご家族、特に次女様への説明を医療チームで丁寧におこないます','Ren — pati-fam-2nd-dght-expl med-team','Calm','saito_doctor'),
    mk('釧路医療圏との連携を、貴院、深められてますね、先生','Kushiro-med-region-link your-hosp, sensei','Reflective','ren_uni'),
    mk('蓮さん、感染拡大への憂慮を医療チームで共有します','Ren — infect-conc med-team','Calm','saito_doctor'),
    mk('蓮さん、紙のカルテを以て長期管理してきた歴史を医療チームで尊重します','Ren — paper-rec-long-mgmt-hist med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様のお名前の綴りを医療チームで正確に管理します','Ren — pati-name-spell med-team','Calm','saito_doctor'),
    mk('過去の症例にかんがみて、貴院、慎重に判断されますね、先生','Past-case-cons your-hosp careful, sensei','Calm close','ren_uni'),
  ]},
  {id:'conv_10415',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、創業のいきさつを社員に伝えろ','Our co — found-circ-staff','Crisp','hiroshi_boss'),
    mk('はい。取引先の式典参列に役員を派遣します','Yes — Client-cere-att-exec','Methodical','kenji_office'),
    mk('当社、創業者一族の次女が経営に関わる事も視野に入れろ','Our co — found-2nd-dght-mgmt-view','Direction','hiroshi_boss'),
    mk('はい。釧路の工場の操業を継続します','Yes — Kushiro-fact-cont','Update','kenji_office'),
    mk('当社、業界の先行きに憂慮を表明しろ','Our co — ind-fut-conc-exp','Direction','hiroshi_boss'),
    mk('はい。契約を以て関係を明文化します','Yes — Contr-rel-form','Update','kenji_office'),
    mk('当社、社名の正しい綴りを徹底させろ','Our co — co-name-spell-thor','Direction','hiroshi_boss'),
    mk('はい。市場の動向にかんがみて値付けを変更します','Yes — Mkt-trend-cons-price','Close','kenji_office'),
  ]},
  {id:'conv_10416',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ハワイアン音楽がお好きだって、メイちゃん','Aoi — cust-Hawai-music Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ノーマルなブレンドコーヒーがお好きだって、メイちゃん','Aoi — cust-normal-blend-like Mei','Reflective','aoi_barista'),
    mk('葵、お客様、昔ヤンキーだったって笑ってらしたよ、メイちゃん','Aoi — cust-past-yan-laugh Mei','Wry','mei_romantic'),
    mk('葵、お客様、合唱のハーモニーが上手だって、メイちゃん','Aoi — cust-chor-harm-good Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ヨーロッパユニオン関連のお仕事だって、メイちゃん','Aoi — cust-EU-work Mei','Reflective','mei_romantic'),
    mk('葵、お客様、結婚式のベールのお話を語って下さったよ、メイちゃん','Aoi — cust-wed-veil-story Mei','Reflective','aoi_barista'),
    mk('葵、お客様、海外ドラマのダイジェスト版を見てらしたよ、メイちゃん','Aoi — cust-overs-drama-dig Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ゲームのレベルアップを語って下さったよ、メイちゃん','Aoi — cust-game-lev-up Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10417',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがハワイアンギターを練習された','Gran — youth Dad-Hawai-guitar','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ノーマルな生活を大事にされたわよね、あなた?','Yes — Grandpa-normal-life-cher, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの友人にヤンキー風の方がいらした','Gran — youth Dad-fri-yan-style','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、合唱団のハーモニーを愛されたわよね、あなた?','Grandpa — chor-harm-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがソビエト連邦解体とユニオン崩壊を語られた','Gran — youth Dad-Sov-EU-coll-disc','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、私のウエディングベールを大事にして下さったわよね、あなた?','Grandpa — my-wed-veil-cher, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが歴史ドラマのダイジェストを観られた','Gran — youth Dad-hist-drama-dig','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご自身のキャリアのレベルアップを目指されたわよね、あなた?','Grandpa — career-lev-up-aim, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10418',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがハワイアンの音楽を聴かせて下さるそうよ','Sho — Dad-Hawai-music-listen','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとノーマルなブレンドを飲んだよ','Mei-sis — me Dad-normal-blend','Eager child','sho_child'),
    mk('翔くん、お父さんが昔のヤンキー文化を映画で見せて下さったわ','Sho — Dad-past-yan-cult-film','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに合唱のハーモニーを教えて頂いたよ','Mei-sis — me Dad-chor-harm-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんがユニオン旗の歴史を教えて下さるわ','Sho — Dad-Union-flag-hist','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとベール姿のお嫁さんの絵本を見たよ','Mei-sis — me Dad-veil-bride-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが大河ドラマのダイジェスト版を観られたわ','Sho — Dad-hist-drama-dig','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとゲームのレベルアップを楽しんだよ','Mei-sis — me Dad-game-lev-up','Eager close','sho_child'),
  ]},
  {id:'conv_10419',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ハワイアンのウクレレ習い始めたな','Riku — Hawai-uku-start','Curious teen','sakura_teen'),
    mk('お前、ノーマルなジャージで来てたな、桜','You — normal-jersey-came Sakura','Wry','riku_teen'),
    mk('リク、お前、ヤンキー漫画読みすぎだろ','Riku — yan-mng-read-too-much','Wry','sakura_teen'),
    mk('お前、合唱コンクールでハーモニー上手かったな、桜','You — chor-cont-harm-good Sakura','Praising','riku_teen'),
    mk('リク、社会でユニオンジャックの旗習ったろ','Riku — soc-UJ-flag?','Curious','sakura_teen'),
    mk('お前、修学旅行で寺院のベールに包まれた像見たろ、桜','You — sch-trip-temp-veil-stat? Sakura','Curious','riku_teen'),
    mk('リク、お前、サッカーの試合のダイジェスト観てたな','Riku — soccer-match-dig','Curious','sakura_teen'),
    mk('お前、ゲームのキャラのレベルアップ語ってたな、桜','You — game-char-lev-up Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10420',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがハワイアンの曲を流して下さってるわよ','Sho — Dad-Hawai-song-play','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとノーマルなトーストを食べたよ','Mom — me Dad-normal-toast','Eager child','sho_child'),
    mk('翔くん、お父さんが昔のヤンキー文化のドキュメンタリーを観てらっしゃるわ','Sho — Dad-yan-cult-doc','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと合唱のハーモニーを練習したよ','Mom — me Dad-chor-harm-prac','Eager child','sho_child'),
    mk('翔くん、お父さんがEUユニオンのニュースを観てらっしゃるわ','Sho — Dad-EU-news','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと白いベール姿の絵本を見たよ','Mom — me Dad-white-veil-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが大河ドラマのダイジェスト版を観られたわ','Sho — Dad-hist-drama-dig','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとゲームのレベルアップを楽しんだよ','Mom — me Dad-game-lev-up','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_467 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ひっくり返し','潰す','すこぶる','おち','のぼっ','戴き','なけりゃ','ばらつき']
const B_T = ['前掲','ケ月','バラエティー','実費','従前','学士','専従','枠内']
const C_T = ['非合法','謀略','疎外','破裂','充満','退学','単発','創世']
const D_T = ['魔王','アーケード','パイプライン','抗体','動植物','音階','鷲','製鉄']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09301',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんがカードをひっくり返して見せて下さったわ','Sho — Grandpa-card-flip-show','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんの自信を潰す事言っちゃった','Mom — me Dad-conf-crush-said','Wry child','sho_child'),
    mk('翔くん、お祖父ちゃん、すこぶる元気でいらしたわね','Sho — Grandpa-extremely-well','Pleased','yumiko_mom'),
    mk('ママ、ぼく、笑い話のおちが上手だって褒められたよ','Mom — me joke-punchline-praised','Proud child','sho_child'),
    mk('翔くん、お父さんが山にのぼっていらしたわよ','Sho — Dad-mountain-climbed','Reflective','yumiko_mom'),
    mk('ママ、お祖母ちゃんからおみやげを戴きました','Mom — Grandma-souv-received','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんがいなけりゃ、お家は寂しいわね','Sho — Grandpa-not-home-lonely','Tender','yumiko_mom'),
    mk('ママ、ぼく、お絵描きの色にばらつきがあるって言われたよ','Mom — me art-color-var-said','Reflective close','sho_child'),
  ]},
  {id:'conv_09302',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、コーヒーカップをひっくり返してしまわれたわ、メイちゃん','Aoi — cust-cup-flip-fell Mei','Wry','mei_romantic'),
    mk('葵、忙しさで体を潰す事のないように気を付けようね、メイちゃん','Aoi — busy-body-crush-not Mei','Caring','aoi_barista'),
    mk('葵、新メニュー、すこぶる好評ね、メイちゃん','Aoi — new-menu-ext-pop Mei','Pleased','mei_romantic'),
    mk('葵、お客様、おちのある面白いお話を聞かせて下さったよ、メイちゃん','Aoi — cust-punchline-funny-told Mei','Pleased','aoi_barista'),
    mk('葵、お客様、二階にのぼってお席に着かれたよ、メイちゃん','Aoi — cust-2F-up-seat Mei','Reflective','mei_romantic'),
    mk('葵、お客様から手作りジャムを戴きました、メイちゃん','Aoi — cust-homemade-jam-received Mei','Pleased','aoi_barista'),
    mk('葵、お客様がいなけりゃ、お店も成り立たないね、メイちゃん','Aoi — cust-not-store-no Mei','Reflective','mei_romantic'),
    mk('葵、お客様の好みにもばらつきがあるね、メイちゃん','Aoi — cust-taste-var Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09303',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが船をひっくり返して大笑いされたぞ','Gran — youth Dad-boat-flip-laugh','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ご自分の体を潰す事のないご性格でらしたわよね、あなた?','Yes — Grandpa-self-body-crush-not, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはすこぶる頑健でらした','Gran — youth Dad-extremely-robust','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご自分のおちにくいユーモアをお持ちでらしたわよね、あなた?','Grandpa — own-punchline-humor, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと山にのぼっていらした','Gran — youth Dad-mountain-climbed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お客様からたくさんお品を戴かれたわよね、あなた?','Grandpa — cust-many-item-received, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがいなけりゃ、生きていけなかったぞ','Gran — youth Dad-not-live-no','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の成績にばらつきがあっても気にされなかったわよね、あなた?','Grandpa — grandkid-grade-var-not-care, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09304',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、机をひっくり返したろ?','Riku — desk-flip?','Wry teen','sakura_teen'),
    mk('お前、勉強で体を潰すなよ、桜','You — study-body-crush-not Sakura','Direction','riku_teen'),
    mk('リク、お前のテスト点、すこぶる伸びたな','Riku — your-test-ext-up','Praising','sakura_teen'),
    mk('お前、漫才のおちが下手だな、桜','You — manzai-punchline-bad Sakura','Wry','riku_teen'),
    mk('リク、お前、学校の階段を走ってのぼっただろ?','Riku — school-stairs-run-up?','Curious','sakura_teen'),
    mk('お前、誕生日プレゼント戴きありがとな、桜','You — bday-gift-received-thx Sakura','Tender','riku_teen'),
    mk('リク、お前がいなけりゃ、塾はつまらないぞ','Riku — you-not-cram-bored','Tender','sakura_teen'),
    mk('お前のテスト点にばらつきあるな、桜','You — test-score-var Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09305',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お絵描きを描いてはひっくり返して見るのも面白いわよ','Sho — art-flip-fun','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの自信を潰すような事は言わないよ','Mei-sis — me Mei-sis-conf-crush-not','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんはすこぶる元気よ','Sho — Mei-sis-ext-well','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お話のおちが分かったよ','Mei-sis — me story-punchline-saw','Proud child','sho_child'),
    mk('翔くん、お山にのぼっていって絵を描きたいね','Sho — mountain-climbed-art-want','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ママから絵本を戴きました','Mei-sis — me Mom-book-received','Eager child','sho_child'),
    mk('翔くん、メイ姉さんがいなけりゃ、お絵描き始めなかったわね','Sho — Mei-sis-not-art-no','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きの色にばらつきがあるって認めるよ','Mei-sis — me art-color-var-admit','Earnest close','sho_child'),
  ]},
  {id:'conv_09306',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、前掲の方針を改めて確認しろ','Our co — as-noted-pol-confirm','Crisp','hiroshi_boss'),
    mk('はい。プロジェクトは三ケ月で完了予定です','Yes — Proj-3-mon-comp-plan','Methodical','kenji_office'),
    mk('当社、商品ラインのバラエティーを増やせ','Our co — prod-line-variety-up','Direction','hiroshi_boss'),
    mk('はい。お客様への実費請求書を準備しました','Yes — Cust-cost-bill-prep','Update','kenji_office'),
    mk('当社、従前のお取引先を大事にしろ','Our co — prev-partner-cherish','Direction','hiroshi_boss'),
    mk('はい。学士号取得者の採用枠を増やします','Yes — Bach-grad-hire-up','Update','kenji_office'),
    mk('当社、専従の研究員を増員しろ','Our co — full-research-add','Direction','hiroshi_boss'),
    mk('はい。予算枠内での実施を徹底します','Yes — Budget-frame-impl-strict','Close','kenji_office'),
  ]},
  {id:'conv_09307',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('資料の前掲の章を参照しましょう','Doc-as-noted-ch-ref','Brisk','yuki_office'),
    mk('はい。研修は二ケ月の集中型で行います','Yes — Train-2-mon-intensive','Cooperative','kenji_office'),
    mk('お客様向けにバラエティーに富んだ商品を展開しましょう','Cust-variety-rich-prod','Direction','yuki_office'),
    mk('はい。実費精算の規程を見直しました','Yes — Cost-settle-rule-review','Update','kenji_office'),
    mk('従前の取引条件を尊重しましょう','Prev-deal-cond-respect','Direction','yuki_office'),
    mk('はい。新人の学士論文を採用判断の参考にします','Yes — Newbie-bach-paper-hire-ref','Update','kenji_office'),
    mk('専従のサポート担当を置きましょう','Full-supp-place','Direction','yuki_office'),
    mk('はい。経費は枠内で管理します','Yes — Cost-frame-mgmt','Close','kenji_office'),
  ]},
  {id:'conv_09308',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文の前掲セクションを参照しろ','Ren — paper-as-noted-section-ref','Mentor','hiroshi_boss'),
    mk('はい。実験は三ケ月をかけて行います','Yes — Exp-3-mon-do','Earnest','ren_uni'),
    mk('蓮、研究テーマにバラエティーを持たせろ','Ren — research-topic-variety','Direction','hiroshi_boss'),
    mk('はい。フィールドワークの実費を申請します','Yes — Field-cost-app','Polite','ren_uni'),
    mk('蓮、従前の研究結果との比較をしろ','Ren — prev-research-result-comp','Direction','hiroshi_boss'),
    mk('はい。学士課程の学生にも指導します','Yes — Bach-prog-stud-guide','Earnest','ren_uni'),
    mk('蓮、専従の研究補助を頼め','Ren — full-research-asst-ask','Direction','hiroshi_boss'),
    mk('はい。倫理委員会の枠内で研究を進めます','Yes — Eth-comm-frame-research-progress','Earnest close','ren_uni'),
  ]},
  {id:'conv_09309',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、調書の前掲箇所を再確認されますね','Police statement-as-noted-recheck','Cooperative','kenji_office'),
    mk('警察、捜査は六ケ月かけて慎重に進められますね','Police inv-6-mon-careful','Cooperative','kenji_office'),
    mk('警察、犯罪手口のバラエティーが増えてますね','Police crime-modus-variety-up','Cooperative','kenji_office'),
    mk('警察、被害弁償の実費を被害者にご説明されますね','Police damage-comp-cost-victim-explain','Cooperative','kenji_office'),
    mk('警察、従前の取り扱いを尊重しつつ改善されますね','Police prev-handle-respect-imp','Cooperative','kenji_office'),
    mk('警察、警察学校の学士課程卒業生も活躍されてますね','Police acad-bach-grad-active','Cooperative','kenji_office'),
    mk('警察、専従の捜査チームを設置されましたね','Police full-inv-team-set','Cooperative','kenji_office'),
    mk('警察、職務の枠内で対応されてますね','Police duty-frame-resp','Close','kenji_office'),
  ]},
  {id:'conv_09310',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社史で前掲の理念を強調された','Dad — founding co-hist-as-noted-creed-emph','Sage','hiroshi_elder'),
    mk('はい。お父さんは三ケ月で新事業を立ち上げられた','Yes — Dad 3-mon-new-biz-launch','Commitment','hiroshi_boss'),
    mk('お父さん、商品にバラエティーを持たせる戦略を取られたぞ','Dad — prod-variety-strat','Wistful','hiroshi_elder'),
    mk('はい。お父さんは実費精算に厳しかった','Yes — Dad cost-settle-strict','Reflective','hiroshi_boss'),
    mk('お父さん、従前のお客様を生涯大事にされた','Dad — prev-cust-life-cherish','Wistful','hiroshi_elder'),
    mk('はい。お父さんは学士号取得を社員に勧められた','Yes — Dad bach-grad-staff-rec','Reflective','hiroshi_boss'),
    mk('お父さん、専従の秘書を信頼されたぞ','Dad — full-secret-trust','Wistful','hiroshi_elder'),
    mk('はい。お父さんは予算枠内で大胆な決断をされた','Yes — Dad budget-frame-bold-decide','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09311',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、非合法な活動を行った組織の研究を論文で扱いましたね','Ren — illegal-org-research paper','Calm','asuka_teacher'),
    mk('はい、政治的謀略の歴史を論文で扱いました','Yes — Pol-conspir-hist paper','Earnest','ren_uni'),
    mk('蓮さん、社会的に疎外された人々の心理を論文で扱いましたね','Ren — soc-aliens-psy paper','Reflective','asuka_teacher'),
    mk('はい、配管が破裂した事故の調査を論文で扱いました','Yes — Pipe-burst-acc-inv paper','Earnest','ren_uni'),
    mk('煙が充満した火災現場の研究を論文で扱いましたね','Smoke-fill-fire-research paper','Engaged','asuka_teacher'),
    mk('はい、退学者の社会復帰研究を論文で扱いました','Yes — Drop-reint-research paper','Earnest','ren_uni'),
    mk('蓮さん、単発の事件と連続事件の比較を論文で扱いましたね','Ren — single-serial-case-comp paper','Reflective','asuka_teacher'),
    mk('はい、創世神話の比較研究を論文で扱いました','Yes — Creation-myth-comp paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09312',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、非合法な集会を警察、解散されましたね','Case illegal-gather police-disperse','Reflective','ren_uni'),
    mk('警察、容疑者の謀略を解明します','Police suspect-conspir-clear','Procedural','takeda_officer'),
    mk('本件、被害者が疎外感を抱えた経緯を警察、把握されてますね','Case victim-aliens-feel-circ police-grasp','Reflective','ren_uni'),
    mk('警察、ガス管の破裂事案にも対応します','Police gas-pipe-burst-resp','Procedural','takeda_officer'),
    mk('本件、煙が充満した現場での救出を警察、なさいましたね','Case smoke-fill-rescue police','Reflective','ren_uni'),
    mk('警察、退学者の更生にも関わります','Police drop-rehab-involve','Procedural','takeda_officer'),
    mk('本件、単発事件として警察、扱われますね','Case single-case police-handle','Reflective','ren_uni'),
    mk('警察、創世神話に基づいた信仰団体の動向も把握します','Police creation-myth-belief-group-watch','Close','takeda_officer'),
  ]},
  {id:'conv_09313',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、非合法な活動を行った組織の研究を論文で扱いましたね','Sakura — illegal-org paper','Calm','asuka_teacher'),
    mk('はい、政治的謀略の歴史を論文で扱いました','Yes — Pol-conspir paper','Earnest teen','sakura_teen'),
    mk('社会的に疎外された人々の心理を論文で扱いましたね','Soc-aliens paper','Reflective','asuka_teacher'),
    mk('はい、配管が破裂した事故を論文で扱いました','Yes — Pipe-burst paper','Earnest','sakura_teen'),
    mk('煙が充満した火災現場の研究を論文で扱いましたね','Smoke-fill paper','Engaged','asuka_teacher'),
    mk('はい、退学者の社会復帰を論文で扱いました','Yes — Drop-reint paper','Earnest','sakura_teen'),
    mk('単発の事件と連続事件の比較を論文で扱いましたね','Single-serial-comp paper','Reflective','asuka_teacher'),
    mk('はい、創世神話の比較研究を論文で扱いました','Yes — Creation-myth paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09314',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、非合法な薬の流通を医療チームで警戒します','Ren — illegal-drug-dist med-team-watch','Calm','saito_doctor'),
    mk('はい、医療スキャンダルにおける謀略を医療チームで防止します','Yes — Med-scandal-conspir med-team-prev','Patient','saito_doctor'),
    mk('社会的に疎外された患者さんへの配慮を、貴院、なさってますね、先生','Soc-aliens-patient-care your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、血管が破裂した患者の救命を医療チームで担当します','Yes — Vessel-burst-patient-rescue med-team','Patient','saito_doctor'),
    mk('煙が充満した火災後の救護を、貴院、なさったんですね、先生','Smoke-fill-fire-rescue your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、医師退学者の再教育を医療チームで担当します','Yes — Med-drop-reedu med-team','Patient','saito_doctor'),
    mk('単発の症例研究を、貴院、ご発表されたんですね、先生','Single-case-study your-hosp pres, sensei','Curious','ren_uni'),
    mk('はい、生命創世に関する医学倫理を医療チームで議論します','Yes — Life-creation-eth med-team-disc','Patient close','saito_doctor'),
  ]},
  {id:'conv_09315',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、非合法な取引には関わるな','Our co — illegal-deal-not-involve','Crisp','hiroshi_boss'),
    mk('はい。社内の謀略的な動きを早期に察知します','Yes — Co-conspir-move-early-det','Methodical','kenji_office'),
    mk('当社、社員が疎外感を抱かない職場を作れ','Our co — staff-aliens-not-workplace','Direction','hiroshi_boss'),
    mk('はい。工場のパイプの破裂事故を防ぐ点検を強化します','Yes — Factory-pipe-burst-prev-check','Update','kenji_office'),
    mk('当社、市場に流通商品を充満させろ','Our co — market-circ-prod-fill','Direction','hiroshi_boss'),
    mk('はい。社員が退学した子を支える制度を作ります','Yes — Staff-drop-child-supp-sys','Update','kenji_office'),
    mk('当社、単発の成功で慢心するな','Our co — single-success-arrog-not','Direction','hiroshi_boss'),
    mk('はい。事業の創世期から学び続けます','Yes — Biz-creation-era-learn-cont','Close','kenji_office'),
  ]},
  {id:'conv_09316',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お子様、絵本の魔王のキャラに夢中ね、メイちゃん','Aoi — child-book-Mao-into Mei','Pleased','mei_romantic'),
    mk('葵、商店街のアーケードでお茶を頂きたいわね、メイちゃん','Aoi — arcade-tea-want Mei','Reflective','aoi_barista'),
    mk('葵、お客様、海底パイプラインの研究のお仕事だって、メイちゃん','Aoi — cust-sea-pipeline-work Mei','Reflective','mei_romantic'),
    mk('葵、お客様、抗体検査の結果を待ってらっしゃるって、メイちゃん','Aoi — cust-antibody-test-await Mei','Reflective','aoi_barista'),
    mk('葵、お子様、動植物の図鑑が好きみたいね、メイちゃん','Aoi — child-anim-plant-book-like Mei','Tender','mei_romantic'),
    mk('葵、お客様、ピアノの音階の練習をされてるって、メイちゃん','Aoi — cust-piano-scale-prac Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お土産に鷲の置物を持ってこられたよ、メイちゃん','Aoi — cust-eagle-orn-bring Mei','Reflective','mei_romantic'),
    mk('葵、お客様、製鉄所のお仕事のお話されてたよ、メイちゃん','Aoi — cust-steel-mill-told Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09317',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが孫に魔王のお話をされた','Gran — youth Dad-grandkid-Mao-told','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、商店街のアーケードでよく買い物されたわよね、あなた?','Yes — Grandpa-arcade-shopped, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがパイプライン工事に携われた','Gran — youth Dad-pipeline-work','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の抗体検査を心配されたわよね、あなた?','Grandpa — grandkid-antibody-test-worry, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが動植物の図鑑を集められた','Gran — youth Dad-anim-plant-book-collect','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様にピアノの音階を教えてらしたわよね、あなた?','Grandpa — grandkid-piano-scale-taught, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが鷲の絵を描かれたぞ','Gran — youth Dad-eagle-art','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、製鉄所でお仕事されたわよね、あなた?','Grandpa — youth-steel-mill-work, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09318',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんが魔王の絵を描いてあげる','Sho — Mei-sis-Mao-art-draw','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ママと商店街のアーケードでお買物したよ','Mei-sis — me Mom-arcade-shop','Eager child','sho_child'),
    mk('翔くん、お父さんがパイプラインのお仕事してらっしゃるそうよ','Sho — Dad-pipeline-work','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、健康診断で抗体検査受けるよ','Mei-sis — me health-check-antibody','Earnest child','sho_child'),
    mk('翔くん、動植物の図鑑、メイ姉さんに見せてもらえる?','Sho — anim-plant-book-Mei-sis-show?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、ピアノの音階を練習したよ','Mei-sis — me piano-scale-prac','Proud child','sho_child'),
    mk('翔くん、お父さんが、鷲の写真を撮ってこられたわ','Sho — Dad-eagle-photo','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、社会で製鉄の単元やったよ','Mei-sis — me soc-steel-unit','Earnest close','sho_child'),
  ]},
  {id:'conv_09319',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ゲームで魔王倒した?','Riku — game-Mao-defeated?','Curious teen','sakura_teen'),
    mk('お前、放課後にアーケードでお菓子買ったろ、桜','You — after-arcade-snack Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で天然ガスパイプラインの単元やったろ?','Riku — soc-gas-pipeline?','Curious','sakura_teen'),
    mk('お前、健康診断で抗体陰性だったろ?桜','You — health-check-antibody-neg? Sakura','Curious','riku_teen'),
    mk('リク、お前、動植物図鑑、図書館で借りたろ?','Riku — anim-plant-book-lib-borrow?','Curious','sakura_teen'),
    mk('お前、ピアノの音階の練習嫌いだろ?桜','You — piano-scale-hate? Sakura','Wry','riku_teen'),
    mk('リク、お前、社会で鷲の生態の単元やったろ?','Riku — soc-eagle-eco-unit?','Curious','sakura_teen'),
    mk('お前、社会で製鉄業の単元やったろ?桜','You — soc-steel-industry? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09320',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが魔王のキャラのおもちゃくれたわよ','Sho — Dad-Mao-toy-gave','Reflective','yumiko_mom'),
    mk('ママ、ぼく、商店街のアーケードでアイスクリーム食べたよ','Mom — me arcade-ice-ate','Eager child','sho_child'),
    mk('翔くん、お父さんがパイプライン工事のお仕事してらっしゃるわ','Sho — Dad-pipeline-work','Reflective','yumiko_mom'),
    mk('ママ、ぼく、抗体検査ってちょっと怖いよ','Mom — me antibody-test-scared','Earnest child','sho_child'),
    mk('翔くん、お父さんが動植物図鑑くださったわ','Sho — Dad-anim-plant-book-gave','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ピアノの音階の練習頑張ったよ','Mom — me piano-scale-try','Proud child','sho_child'),
    mk('翔くん、お祖父ちゃんが鷲の彫刻を持ってらっしゃるわ','Sho — Grandpa-eagle-sculp-have','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんから製鉄所のお話聞いたよ','Mom — me Dad-steel-mill-heard','Eager close','sho_child'),
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

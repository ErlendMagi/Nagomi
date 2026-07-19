import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_433 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['明け方','何せ','とっさ','一々','断じて','どっぷり','浸っ','ふしぎ']
const B_T = ['後述','費やす','沿う','起点','厳正','一味','ナマ','言い換え']
const C_T = ['同性','宣教師','レッテル','滅び','検察庁','結社','投融資','自虐']
const D_T = ['製剤','仏像','床屋','駅伝','あご','観音','水銀','スマイル']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08621',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんは明け方にお散歩なさるのよ','Sho — Dad dawn-walk','Reflective','yumiko_mom'),
    mk('ママ、何せお祖父ちゃんは八十歳だからね、すごいよ','Mom — anyhow Grandpa-80-amazing','Eager child','sho_child'),
    mk('翔くん、とっさにママの手を握ってくれて嬉しかったわ','Sho — instant Mom-hand-grasped-glad','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんに一々お礼を言ったよ','Mom — me Grandpa-each-thanks','Proud child','sho_child'),
    mk('翔くん、お祖父ちゃんは断じてうそをつかない方ね','Sho — Grandpa never-lie-person','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お絵描きにどっぷりはまってるよ','Mom — me drawing-deeply-into','Eager child','sho_child'),
    mk('翔くん、お父さんが温泉に浸ってらしたの、想像できる?','Sho — Dad-onsen-soak imagine?','Curious','yumiko_mom'),
    mk('ママ、ぼく、お絵描きが上手って言われてふしぎな気持ちだったよ','Mom — me drawing-good-said strange-feel','Reflective close','sho_child'),
  ]},
  {id:'conv_08622',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、明け方の仕込みは大変だったわね、メイちゃん','Aoi — dawn-prep-hard Mei','Reflective','mei_romantic'),
    mk('葵、何せ新メニューだから、お客様も興味津々ね、メイちゃん','Aoi — anyhow new-menu-cust-interest Mei','Animated','aoi_barista'),
    mk('葵、お客様、とっさに「ありがとう」っておっしゃってくれたわ、メイちゃん','Aoi — cust instant-"thanks"-said Mei','Pleased','mei_romantic'),
    mk('葵、新メニューを一々お客様にご説明する必要はないわね、メイちゃん','Aoi — new-menu-each-cust-explain not-need Mei','Reflective','aoi_barista'),
    mk('葵、お店では断じて手抜きしないようにしましょう、メイちゃん','Aoi — store never-half-baked Mei','Direction','mei_romantic'),
    mk('葵、お客様、新メニューのコーヒーにどっぷりはまっていらしたよ、メイちゃん','Aoi — cust new-menu-coffee-deeply-into Mei','Pleased','aoi_barista'),
    mk('葵、夕方の光に浸って読書なさるお客様、素敵ね、メイちゃん','Aoi — eve-light-soak-read-cust-lovely Mei','Reflective','mei_romantic'),
    mk('葵、新メニューにお客様が驚かれて、ふしぎな気持ちだったわ、メイちゃん','Aoi — new-menu-cust-surprised strange-feel Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08623',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは明け方の畑仕事から始められたぞ','Gran — youth Dad dawn-field-start','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、何せお元気でいらしたわよね、あなた?','Yes — Grandpa anyhow-healthy, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがとっさに私を守って下さったぞ','Gran — youth Dad instant-me-protect','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫さんに一々丁寧に教えてらしたわよね、あなた?','Grandpa — grandkid-each-careful-taught, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんは断じてご家族を悪く言わなかったぞ','Gran — Dad never-fam-bad-say','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お温泉にどっぷり浸かるのがお好きでらしたわよね、あなた?','Grandpa — onsen-deeply-soak-liked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが川辺に浸って静かに釣りをされたぞ','Gran — youth Dad-river-soak-quiet-fishing','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の成長を、ふしぎな目で見ておられたわよね、あなた?','Grandpa — grandkid-grow-strange-watch, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08624',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、明け方まで勉強してたろ?','Riku — dawn-study?','Wry teen','sakura_teen'),
    mk('お前、何せ運動会近いから頑張れ、桜','You — anyhow sports-day-near-try Sakura','Encouraging','riku_teen'),
    mk('リク、お前、とっさに走り出して凄かったぞ','Riku — instant-run-amazing','Praising','sakura_teen'),
    mk('お前、テスト範囲、一々確認するなよ、桜','You — test-range each-check-don\'t Sakura','Wry','riku_teen'),
    mk('リク、お前、断じてズルしないよな','Riku — never-cheat','Praising','sakura_teen'),
    mk('お前、ゲームにどっぷりはまってんな、桜','You — game-deeply-into Sakura','Wry','riku_teen'),
    mk('リク、お前、お風呂に浸ってぼーっとしてんな','Riku — bath-soak-spaced-out','Wry','sakura_teen'),
    mk('お前のテスト点、ふしぎな点数だな、桜','Your-test-score strange Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08625',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんは明け方に絵を描くのが好きなのよ','Sho — Mei-sis-dawn-draw-like','Reflective','mei_romantic'),
    mk('メイ姉さん、何せ初めての発表だからどきどきしてるよ','Mei-sis — anyhow first-pres-thumping','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんがとっさに翔くんを守ってあげるのよ','Sho — Mei-sis-instant-protect','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きの色を一々確認したよ','Mei-sis — me drawing-color-each-check','Proud child','sho_child'),
    mk('翔くん、メイ姉さんは断じて翔くんを忘れたりしないわよ','Sho — Mei-sis never-forget','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きにどっぷりはまってるよ','Mei-sis — me drawing-deeply-into','Eager child','sho_child'),
    mk('翔くん、お父さんが温泉に浸ってらしたお話、聞いた?','Sho — Dad-onsen-soak-heard?','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、雲の形がふしぎでお絵描きしたよ','Mei-sis — me cloud-shape-strange-drew','Eager close','sho_child'),
  ]},
  {id:'conv_08626',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社の方針は後述する別紙の通り進めろ','Our co-policy as-described-attach proceed','Crisp','hiroshi_boss'),
    mk('はい。新事業に予算を費やす計画です','Yes — New-biz-budget-spend plan','Methodical','kenji_office'),
    mk('お得意様のご要望に沿う製品を作れ','VIP-request-align prod-make','Direction','hiroshi_boss'),
    mk('プロジェクトの起点を明確にしろ','Proj-start-point clarify','Direction','hiroshi_boss'),
    mk('はい。社員評価は厳正に行います','Yes — Staff-eval strict-do','Update','kenji_office'),
    mk('競合の一味と組まないように注意しろ','Rival-clique-not-join care','Direction','hiroshi_boss'),
    mk('資料はナマの数字で報告しろ','Doc-raw-num report','Direction','hiroshi_boss'),
    mk('はい。難しい用語は言い換えて社外に伝えます','Yes — Hard-term-paraphrase outside-conv','Close','kenji_office'),
  ]},
  {id:'conv_08627',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('詳細は資料の後述部分でご確認ください','Detail doc-as-described please-check','Brisk','yuki_office'),
    mk('はい。新企画は時間を費やす長期案件です','Yes — New-plan time-spend long-term','Cooperative','kenji_office'),
    mk('ご要望に沿うサンプルを準備しましょう','Request-align sample-prep','Direction','yuki_office'),
    mk('はい。会議の起点となる議題を整理しました','Yes — Meeting-start-topic-org','Update','kenji_office'),
    mk('入社試験は厳正に審査しましょう','Hire-test strict-review','Direction','yuki_office'),
    mk('はい。新規参入の一味と慎重に商談します','Yes — New-entry-clique careful-deal','Update','kenji_office'),
    mk('資料はナマのデータを添付しましょう','Doc raw-data-attach','Direction','yuki_office'),
    mk('はい。専門用語を平易に言い換えて社内に共有します','Yes — Tech-term plain-paraphrase co-share','Close','kenji_office'),
  ]},
  {id:'conv_08628',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文の結論は後述の章で詳述しろ','Ren — paper-concl as-described detail','Mentor','hiroshi_boss'),
    mk('はい。実験に時間を費やす予定です','Yes — Exp time-spend plan','Earnest','ren_uni'),
    mk('蓮、研究室の方針に沿う論文を書け','Ren — lab-policy-align paper','Direction','hiroshi_boss'),
    mk('はい。研究の起点となる仮説を確認します','Yes — Research-start-hypoth check','Polite','ren_uni'),
    mk('蓮、論文審査は厳正だぞ','Ren — paper-review strict','Direction','hiroshi_boss'),
    mk('はい。不正研究の一味と関わらないようにします','Yes — Fraud-research-clique avoid','Earnest','ren_uni'),
    mk('蓮、論文付録にナマの実験データを載せろ','Ren — paper-appendix raw-data','Direction','hiroshi_boss'),
    mk('はい。難解な専門用語は分かりやすく言い換えて発表します','Yes — Hard-term plain-paraphrase pres','Earnest close','ren_uni'),
  ]},
  {id:'conv_08629',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、捜査報告書の後述部分が重要です','Police inv-report as-described-important','Calm','takeda_officer'),
    mk('はい。警察、長期捜査に時間を費やすご苦労、感謝しております','Yes — Police long-inv-time-spend thx','Cooperative','kenji_office'),
    mk('警察、法令に沿う捜査を徹底します','Police law-align inv-strict','Procedural','takeda_officer'),
    mk('はい。警察、事件の起点をご解明されたんですね','Yes — Police case-start-clarified','Cooperative','kenji_office'),
    mk('警察、内部処分は厳正に行います','Police internal-disc strict-do','Procedural','takeda_officer'),
    mk('はい。警察、犯罪一味の全容を捜査されてますね','Yes — Police crime-clique-full-inv','Cooperative','kenji_office'),
    mk('警察、ナマの証拠映像を確保しました','Police raw-evidence-video-secured','Procedural','takeda_officer'),
    mk('はい。警察、難しい捜査用語を市民向けに言い換えていらっしゃいますね','Yes — Police hard-term citizen-paraphrase','Close','kenji_office'),
  ]},
  {id:'conv_08630',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、後述の補足資料を社員に配られたぞ','Dad — founding as-described-supp-doc-distrib','Sage','hiroshi_elder'),
    mk('はい。お父さんは事業発展に半生を費やす覚悟をされた','Yes — Dad biz-dev half-life-spend resolve','Commitment','hiroshi_boss'),
    mk('お父さん、お客様の声に沿う商品作りを大事にされたぞ','Dad — cust-voice-align prod-make-cherish','Wistful','hiroshi_elder'),
    mk('はい。お父さんは会社の起点となる商品を生み出された','Yes — Dad co-start-prod-create','Reflective','hiroshi_boss'),
    mk('お父さん、社員の評価は厳正にされたぞ','Dad — staff-eval-strict','Wistful','hiroshi_elder'),
    mk('はい。お父さんは不正一味との取引を断られた','Yes — Dad fraud-clique-deal-refuse','Reflective','hiroshi_boss'),
    mk('お父さん、お取引先にもナマの数字を共有されたぞ','Dad — partner-raw-num-share','Wistful','hiroshi_elder'),
    mk('はい。お父さんは難しい言葉も平易に言い換えて社員に伝えられた','Yes — Dad hard-word plain-paraphrase staff-conv','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08631',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、同性愛の歴史的研究を論文で扱いましたね','Ren — same-sex-hist-research paper','Calm','asuka_teacher'),
    mk('はい、宣教師の渡来史を論文で扱いました','Yes — Missionary-arrival-hist paper','Earnest','ren_uni'),
    mk('蓮さん、社会的レッテルの問題を論文で扱いましたね','Ren — soc-label-issue paper','Reflective','asuka_teacher'),
    mk('はい、古代文明の滅びについて論文で扱いました','Yes — Anc-civ-perish paper','Earnest','ren_uni'),
    mk('検察庁の制度史を論文で扱いましたね','Pros-office-hist paper','Engaged','asuka_teacher'),
    mk('はい、戦時下の秘密結社の研究を論文で扱いました','Yes — Wartime-secret-soc paper','Earnest','ren_uni'),
    mk('蓮さん、海外投融資政策の変遷を論文で扱いましたね','Ren — overseas-invest-fin-pol-change paper','Reflective','asuka_teacher'),
    mk('はい、芸術における自虐表現を論文で扱いました','Yes — Art self-deprec-expr paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08632',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、同性カップルへの差別事案を警察、扱われてますね','Case same-sex-discrim police-handle','Reflective','ren_uni'),
    mk('警察、宣教師ビザを悪用した犯罪も捜査します','Police missionary-visa-abuse-crime-inv','Procedural','takeda_officer'),
    mk('本件、容疑者へのレッテル貼りを警察、慎重に避けられてますね','Case suspect-label police-careful-avoid','Reflective','ren_uni'),
    mk('警察、地域社会の滅びを防ぐ防犯活動を続けます','Police local-perish-prev-crime-prev-cont','Procedural','takeda_officer'),
    mk('本件、検察庁との連携を警察、強化されてますね','Case pros-office-link police-strengthen','Reflective','ren_uni'),
    mk('警察、反社会的結社の摘発に注力します','Police antisocial-secret-soc-bust-focus','Procedural','takeda_officer'),
    mk('本件、不正投融資の事案を警察、捜査されてますね','Case illegal-invest-fin-case police-inv','Reflective','ren_uni'),
    mk('警察、自虐的な被害者の心情にも配慮します','Police self-deprec-victim-feel-care','Close','takeda_officer'),
  ]},
  {id:'conv_08633',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、同性愛の歴史的研究を論文で扱いましたね','Sakura — same-sex-hist paper','Calm','asuka_teacher'),
    mk('はい、宣教師の渡来史を論文で扱いました','Yes — Missionary-arrival paper','Earnest teen','sakura_teen'),
    mk('社会的レッテルの問題を論文で扱いましたね','Soc-label paper','Reflective','asuka_teacher'),
    mk('はい、古代文明の滅びを論文で扱いました','Yes — Anc-civ-perish paper','Earnest','sakura_teen'),
    mk('検察庁の制度史を論文で扱いましたね','Pros-office-hist paper','Engaged','asuka_teacher'),
    mk('はい、戦時下の秘密結社を論文で扱いました','Yes — Secret-soc paper','Earnest','sakura_teen'),
    mk('海外投融資政策を論文で扱いましたね','Overseas-invest-fin paper','Reflective','asuka_teacher'),
    mk('はい、芸術の自虐表現を論文で扱いました','Yes — Art self-deprec paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08634',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、同性カップルの医療相談を医療チームで担当いたしました','Ren — same-sex-couple-med-cons med-team handle','Calm','saito_doctor'),
    mk('はい、海外宣教師の医療支援を医療チームで担当しました','Yes — Overseas-missionary-med-supp med-team handle','Patient','saito_doctor'),
    mk('特定の病気にレッテルを貼らぬよう、貴院、ご指導されてますね、先生','Specific-disease-label-not your-hosp guide, sensei','Curious','ren_uni'),
    mk('はい、文化が滅びる前の口承医療を医療チームで記録しております','Yes — Culture-perish pre-oral-med med-team record','Patient','saito_doctor'),
    mk('検察庁からの医療事案の照会を、貴院、対応されてますね、先生','Pros-office-med-case-inquiry your-hosp resp, sensei','Reflective','ren_uni'),
    mk('はい、秘密結社的団体の医療被害も医療チームで把握します','Yes — Secret-soc-group-med-damage med-team grasp','Patient','saito_doctor'),
    mk('医療投融資の動向を、貴院、注視されているそうですね、先生','Med-invest-fin-trend your-hosp watch, sensei','Reflective','ren_uni'),
    mk('はい、自虐傾向の患者さんへの心理ケアを医療チームで担当します','Yes — Self-deprec-patient-psych-care med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_08635',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、同性パートナーシップ社員制度を導入しろ','Our co — same-sex-partner-sys-intro','Crisp','hiroshi_boss'),
    mk('はい。海外進出時、宣教師の歴史にも学びます','Yes — Overseas-exp missionary-hist-learn','Methodical','kenji_office'),
    mk('当社、競合からのレッテルにも揺るがれるな','Our co — rival-label not-shaken','Direction','hiroshi_boss'),
    mk('はい。創業時の理念が滅びぬよう継承いたします','Yes — Found-creed-not-perish inherit','Update','kenji_office'),
    mk('当社、検察庁の指導には誠実に従え','Our co — pros-office-guide sincere-follow','Direction','hiroshi_boss'),
    mk('はい。反社的結社との取引は厳禁としております','Yes — Anti-soc-secret-soc-deal strict-no','Update','kenji_office'),
    mk('当社、海外投融資の機会を逃すな','Our co — overseas-invest-fin-opp not-miss','Direction','hiroshi_boss'),
    mk('はい。社員の自虐的発言には心のケアを提供します','Yes — Staff-self-deprec-care-provide','Close','kenji_office'),
  ]},
  {id:'conv_08636',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、新製剤の開発で忙しいって、メイちゃん','Aoi — cust new-drug-busy Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お寺の仏像を拝みに行かれたって、メイちゃん','Aoi — cust temple-buddha-pray Mei','Reflective','aoi_barista'),
    mk('葵、お客様、近所の床屋さんでお髪をされたって、メイちゃん','Aoi — cust local-barber-haircut Mei','Reflective','mei_romantic'),
    mk('葵、駅伝のテレビ放送、お店で流したいわね、メイちゃん','Aoi — relay-TV-broadcast-store-play Mei','Reflective','aoi_barista'),
    mk('葵、お客様、新しいあごラインのトリートメント受けてらしたよ、メイちゃん','Aoi — cust new-jaw-line-treat Mei','Reflective','mei_romantic'),
    mk('葵、お祭りで観音様の祈願に行きましょうね、メイちゃん','Aoi — fest Kannon-pray-go Mei','Direction','aoi_barista'),
    mk('葵、温度計の水銀、安全な物に取り換えたいね、メイちゃん','Aoi — therm mercury-safe-swap Mei','Direction','mei_romantic'),
    mk('葵、お客様の素敵なスマイルに癒されるね、メイちゃん','Aoi — cust-lovely-smile-heal Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_08637',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが新薬製剤の研究をされたぞ','Gran — youth Dad new-drug-research','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お寺の仏像を拝みに通ってらしたわよね、あなた?','Yes — Grandpa-temple-buddha-pray, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが近所の床屋に通われたぞ','Gran — youth Dad-local-barber-went','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、駅伝の応援にお出かけになったわよね、あなた?','Grandpa — relay-cheer-out, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがあごひげを蓄えられたぞ','Gran — youth Dad-jaw-beard-grew','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、観音様にお参りされてたわよね、あなた?','Grandpa — Kannon-prayed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが水銀の体温計を持ってらしたぞ','Gran — youth Dad mercury-therm-had','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫を見ると素敵なスマイルになられたわよね、あなた?','Grandpa — grandkid-see lovely-smile, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08638',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが新製剤のお仕事してらっしゃるのよ','Sho — Dad new-drug-work','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんとお寺の仏像見たよ','Mei-sis — me Grandpa-temple-buddha-saw','Eager child','sho_child'),
    mk('翔くん、お父さんが床屋へ行かれるそうよ','Sho — Dad-barber-go','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、テレビで駅伝の応援したよ','Mei-sis — me TV-relay-cheered','Eager child','sho_child'),
    mk('翔くん、ぼくも将来、あごひげ生えるかな?','Sho — me future-jaw-beard-grow?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんと観音様にお参りしたよ','Mei-sis — me Grandma-Kannon-prayed','Eager child','sho_child'),
    mk('翔くん、お父さんが古い水銀の体温計を捨てたのよ','Sho — Dad old-mercury-therm-disposed','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんの素敵なスマイル大好きだよ','Mei-sis — Dad-lovely-smile-love','Eager close','sho_child'),
  ]},
  {id:'conv_08639',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、製剤会社で働いてんだろ?','Riku — your-home drug-co-work?','Curious teen','sakura_teen'),
    mk('お前、修学旅行でお寺の仏像見たろ?桜','You — school-trip-temple-buddha? Sakura','Curious','riku_teen'),
    mk('リク、お前、髪、床屋で切るんだろ?','Riku — hair-barber-cut?','Curious','sakura_teen'),
    mk('お前、駅伝大会出るのか、桜','You — relay-comp-out? Sakura','Curious','riku_teen'),
    mk('リク、お前、あごのライン気にしてんだろ?','Riku — jaw-line-care?','Wry','sakura_teen'),
    mk('お前、初詣で観音様にお参りしたろ?桜','You — NY-Kannon-prayed? Sakura','Curious','riku_teen'),
    mk('リク、お前、理科で水銀の実験やったろ?','Riku — sci-mercury-exp?','Curious','sakura_teen'),
    mk('お前のスマイル、写真映えするな、桜','Your-smile photogenic Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08640',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが新製剤のお仕事してらっしゃるのよ','Sho — Dad new-drug-work','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんと仏像を拝んできたよ','Mom — me Grandma-buddha-prayed','Eager child','sho_child'),
    mk('翔くん、お父さんが近所の床屋さんへ行かれるそうよ','Sho — Dad-local-barber-go','Reflective','yumiko_mom'),
    mk('ママ、ぼく、駅伝でお兄ちゃんたちの応援をしたよ','Mom — me relay-cheer','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんはあごひげをそりに行かれたわ','Sho — Grandpa-jaw-beard-shave-went','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お母さんと観音様にお参りしたよ','Mom — me Mom-Kannon-prayed','Eager child','sho_child'),
    mk('翔くん、お父さんが古い水銀の体温計を片付けてらしたわ','Sho — Dad-old-mercury-therm-cleaned','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんのスマイルが大好きだよ','Mom — me Grandpa-smile-love','Eager close','sho_child'),
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

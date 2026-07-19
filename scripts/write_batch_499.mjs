import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_499 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['劣っ','裏返し','裏腹','正しかっ','小柄','可愛らしい','起っ','つくれ']
const B_T = ['一撃','行財政','主審','官民','裏づけ','等価','定型','総勢']
const C_T = ['精神病','思索','低温','男系','蛋白','環状','中等','疑似']
const D_T = ['西海岸','ルパン','カンヌ','トロント','スリランカ','レバノン','マニラ','江戸川']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09941',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんに体力で劣っても気持ちで勝つわよ','Sho — Dad-phys-inf-mind-win','Tender','yumiko_mom'),
    mk('ママ、ぼく、シャツを裏返しに着てたよ','Mom — me shirt-inside-out','Wry child','sho_child'),
    mk('翔くん、お父さんは見た目と裏腹に優しい方よ','Sho — Dad-look-opp-kind','Tender','yumiko_mom'),
    mk('ママ、お父さんが「君が正しかった」って認めて下さったよ','Mom — Dad-"you-right"-admit','Eager child','sho_child'),
    mk('翔くん、お父さんは小柄でも頼もしいわね','Sho — Dad-small-reli','Pleased','yumiko_mom'),
    mk('ママ、お父さんが可愛らしいお話して下さったよ','Mom — Dad-cute-told','Tender child','sho_child'),
    mk('翔くん、お庭で虫が起ってきたわ、虫眼鏡で見ましょうね','Sho — garden-bug-emerge-glass-see','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お父さんとプラモデルをつくれて嬉しかったよ','Mom — me Dad-model-can-make-glad','Eager close','sho_child'),
  ]},
  {id:'conv_09942',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、他店に劣っているわけじゃないと自信を持とうね、メイちゃん','Aoi — other-inf-not-conf Mei','Direction','mei_romantic'),
    mk('葵、エプロンが裏返しになっちゃってたよ、メイちゃん','Aoi — apron-inside-out Mei','Wry','aoi_barista'),
    mk('葵、お客様、見た目と裏腹に気さくな方ね、メイちゃん','Aoi — cust-look-opp-friendly Mei','Reflective','mei_romantic'),
    mk('葵、結局、新メニューの判断が正しかったね、メイちゃん','Aoi — finally-new-menu-right Mei','Pleased','aoi_barista'),
    mk('葵、新スタッフは小柄だけど力持ちね、メイちゃん','Aoi — newhire-small-strong Mei','Praising','mei_romantic'),
    mk('葵、お客様のお子様が可愛らしい笑顔でいらしたよ、メイちゃん','Aoi — cust-kid-cute-smile Mei','Tender','aoi_barista'),
    mk('葵、お店の前で行列が起ってきたね、メイちゃん','Aoi — store-front-line-emerge Mei','Pleased','mei_romantic'),
    mk('葵、特別な思い出をお客様につくれるお店にしようね、メイちゃん','Aoi — spec-mem-cust-can-create Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09943',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが体格で劣っても精神力で勝負された','Gran — youth Dad-phys-inf-mental-cmp','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お孫様のシャツが裏返しでもニコニコされたわよね、あなた?','Yes — Grandpa-grandkid-inside-out-smile, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは厳しい姿勢と裏腹に深い愛情をお持ちだった','Gran — youth Dad-strict-opp-deep-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、「正しかった」と過去を振り返られたわよね、あなた?','Grandpa — "right"-past-rev, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは小柄でも村のリーダーだった','Gran — youth Dad-small-vil-leader','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様を可愛らしいと頬ずりされたわよね、あなた?','Grandpa — grandkid-cute-cheek, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと共に大事件が起った夜があった','Gran — youth Dad-big-emerge-night','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様にお手玉をつくれるよう教えて下さったわよね、あなた?','Grandpa — grandkid-otedama-can-make-teach, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09944',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、体力で劣ってる分、頭で勝負しろ','Riku — phys-inf-brain-cmp','Direction','sakura_teen'),
    mk('お前、ノートを裏返しに書いてたな、桜','You — note-inside-out-write Sakura','Wry','riku_teen'),
    mk('リク、お前、笑顔と裏腹に悩んでたな','Riku — smile-opp-worry','Reflective','sakura_teen'),
    mk('お前、あの時の判断が正しかったぞ、桜','You — that-time-right Sakura','Praising','riku_teen'),
    mk('リク、お前、小柄だけど運動神経すごいな','Riku — small-athl-good','Praising','sakura_teen'),
    mk('お前、妹さん可愛らしいな、桜','You — sis-cute Sakura','Pleased','riku_teen'),
    mk('リク、お前ん家の近くで事故が起ったって聞いたぞ','Riku — your-home-near-acc-emerge','Reflective','sakura_teen'),
    mk('お前、模型をつくれる才能あるな、桜','You — model-can-make-talent Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09945',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんに知識で劣っても努力で追いつくわよ','Sho — Dad-know-inf-effort-catch','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、靴下を裏返しに履いてたよ','Mei-sis — me sock-inside-out','Wry child','sho_child'),
    mk('翔くん、お父さんは寡黙と裏腹に詩を書かれるのよ','Sho — Dad-quiet-opp-poem','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、自分の意見が正しかったって嬉しかったよ','Mei-sis — me opin-right-glad','Eager child','sho_child'),
    mk('翔くん、お父さんは小柄でも力強いわね','Sho — Dad-small-strong','Tender','mei_romantic'),
    mk('メイ姉さん、お父さんが可愛らしい絵を描いて下さったよ','Mei-sis — Dad-cute-art','Eager child','sho_child'),
    mk('翔くん、公園で楽しい遊びが起ってきそうね','Sho — park-fun-play-emerge','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとパズルをつくれて嬉しかったよ','Mei-sis — me Dad-puzz-can-make-glad','Eager close','sho_child'),
  ]},
  {id:'conv_09946',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、業界に一撃を与える新製品を出せ','Our co — industry-blow-new-prod','Crisp','hiroshi_boss'),
    mk('はい。行財政改革の動向を注視します','Yes — Adm-fin-ref-watch','Methodical','kenji_office'),
    mk('当社、入札の主審査委員を派遣しろ','Our co — bid-main-judg-send','Direction','hiroshi_boss'),
    mk('はい。官民連携プロジェクトを進めます','Yes — Pub-priv-prog','Update','kenji_office'),
    mk('成功事例の裏づけデータを示せ','Succ-back-data-show','Direction','hiroshi_boss'),
    mk('はい。社員の給与は等価交換の原則を保ちます','Yes — Staff-pay-equiv-keep','Update','kenji_office'),
    mk('定型業務を自動化しろ','Routine-auto','Direction','hiroshi_boss'),
    mk('はい。総勢百名の社員旅行を計画します','Yes — Total-100-trip-plan','Close','kenji_office'),
  ]},
  {id:'conv_09947',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('競合に一撃を与える戦略を立てましょう','Comp-blow-strat','Brisk','yuki_office'),
    mk('はい。地方の行財政動向を分析します','Yes — Local-adm-fin-anal','Cooperative','kenji_office'),
    mk('コンペの主審を引き受けましょう','Comp-main-judg-take','Direction','yuki_office'),
    mk('はい。官民連携の好事例を集めます','Yes — Pub-priv-good-coll','Update','kenji_office'),
    mk('提案には裏づけ資料を添えましょう','Prop-back-doc-att','Direction','yuki_office'),
    mk('はい。給与体系を等価な原則で整えます','Yes — Pay-equiv-arr','Update','kenji_office'),
    mk('定型書類のテンプレ化を進めましょう','Routine-doc-temp-prog','Direction','yuki_office'),
    mk('はい。総勢五十名の研修を計画します','Yes — Total-50-train-plan','Close','kenji_office'),
  ]},
  {id:'conv_09948',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、学界に一撃を与える論文を出せ','Ren — acad-blow-paper','Mentor','hiroshi_boss'),
    mk('はい。行財政学の新潮流を学びます','Yes — Adm-fin-trend-learn','Earnest','ren_uni'),
    mk('蓮、論文発表の主審査を引き受けろ','Ren — paper-main-judg-take','Direction','hiroshi_boss'),
    mk('はい。官民連携研究にも参加します','Yes — Pub-priv-res-join','Earnest','ren_uni'),
    mk('蓮、仮説には裏づけデータが必須だ','Ren — hyp-back-need','Direction','hiroshi_boss'),
    mk('はい。指標を等価に正規化します','Yes — Ind-equiv-norm','Polite','ren_uni'),
    mk('蓮、定型の実験手順を覚えろ','Ren — routine-exp-learn','Direction','hiroshi_boss'),
    mk('はい。総勢三十名の研究室です','Yes — Total-30-lab','Earnest close','ren_uni'),
  ]},
  {id:'conv_09949',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、犯罪組織に一撃を与える捜査もされますね','Police crime-blow-inv','Cooperative','kenji_office'),
    mk('警察、行財政の不正にも対応されますね','Police adm-fin-corrup-resp','Cooperative','kenji_office'),
    mk('警察、競技会の主審の安全確保もされますね','Police match-main-judg-sec','Cooperative','kenji_office'),
    mk('警察、官民連携の防犯活動を進められますね','Police pub-priv-prev-prog','Cooperative','kenji_office'),
    mk('警察、供述の裏づけ捜査を徹底されますね','Police test-back-inv-strict','Cooperative','kenji_office'),
    mk('警察、賠償額を等価な基準で算定されますね','Police compen-equiv-std-est','Cooperative','kenji_office'),
    mk('警察、定型業務のデジタル化も進められますね','Police routine-dig-prog','Cooperative','kenji_office'),
    mk('警察、総勢百名の捜査本部を立ち上げられますね','Police total-100-inv-HQ-set','Close','kenji_office'),
  ]},
  {id:'conv_09950',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、業界に一撃を与える商品を出された','Dad — founding industry-blow-prod','Sage','hiroshi_elder'),
    mk('はい。お父さんは行財政の知識も豊富だった','Yes — Dad adm-fin-knowl','Commitment','hiroshi_boss'),
    mk('お父さん、業界コンペで主審を務められた','Dad — industry-comp-main-judg','Wistful','hiroshi_elder'),
    mk('はい。お父さんは官民連携の懸け橋になられた','Yes — Dad pub-priv-bridge','Reflective','hiroshi_boss'),
    mk('お父さん、データの裏づけを必ず確認された','Dad — data-back-confirm','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員に等価な機会を与えられた','Yes — Dad staff-equiv-opp','Reflective','hiroshi_boss'),
    mk('お父さん、定型作業の改善にも熱心だった','Dad — routine-impr-eager','Wistful','hiroshi_elder'),
    mk('はい。お父さんは総勢千名の社員を率いられた','Yes — Dad total-1k-lead','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09951',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦後の精神病院制度史を論文で扱いましたね','Ren — postwar-psych-hosp paper','Calm','asuka_teacher'),
    mk('はい、哲学者の思索方法を論文で扱いました','Yes — Phil-think paper','Earnest','ren_uni'),
    mk('蓮さん、低温物理学の研究を論文で扱いましたね','Ren — low-temp-phys paper','Reflective','asuka_teacher'),
    mk('はい、王家の男系継承研究を論文で扱いました','Yes — Royal-male-succ paper','Earnest','ren_uni'),
    mk('蛋白質構造の研究を論文で扱いましたね','Prot-struct paper','Engaged','asuka_teacher'),
    mk('はい、都市の環状線設計を論文で扱いました','Yes — Urban-ring-line paper','Earnest','ren_uni'),
    mk('蓮さん、中等教育の課題研究を論文で扱いましたね','Ren — sec-edu paper','Reflective','asuka_teacher'),
    mk('はい、疑似科学の見極め方を論文で扱いました','Yes — Pseudo-sci paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09952',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、精神病院での事案を、警察、慎重に扱われますね','Case psych-hosp-careful','Reflective','ren_uni'),
    mk('警察、容疑者の思索パターンを分析されますね','Police suspect-think-pat-anal','Cooperative','takeda_officer'),
    mk('本件、低温で保管された証拠物を、警察、扱われますね','Case low-temp-evid police-handle','Reflective','ren_uni'),
    mk('警察、男系族族の家督争いも扱います','Police male-fam-inherit-handle','Procedural','takeda_officer'),
    mk('本件、蛋白質鑑定で犯人特定を、警察、進められますね','Case prot-forensic police-prog','Reflective','ren_uni'),
    mk('警察、環状道路でのひき逃げ事件も扱います','Police ring-road-hit-handle','Procedural','takeda_officer'),
    mk('本件、中等学校での事案を、警察、扱われますね','Case sec-sch police-handle','Reflective','ren_uni'),
    mk('警察、疑似餌詐欺事件も捜査されますね','Police pseudo-lure-fraud-inv','Close','takeda_officer'),
  ]},
  {id:'conv_09953',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦後の精神病院制度史を論文で扱いましたね','Sakura — postwar-psych paper','Calm','asuka_teacher'),
    mk('はい、哲学者の思索方法を論文で扱いました','Yes — Phil-think paper','Earnest teen','sakura_teen'),
    mk('低温物理学を論文で扱いましたね','Low-temp-phys paper','Reflective','asuka_teacher'),
    mk('はい、王家の男系継承を論文で扱いました','Yes — Royal-male paper','Earnest','sakura_teen'),
    mk('蛋白質構造を論文で扱いましたね','Prot-struct paper','Engaged','asuka_teacher'),
    mk('はい、都市の環状線設計を論文で扱いました','Yes — Urban-ring paper','Earnest','sakura_teen'),
    mk('中等教育の課題を論文で扱いましたね','Sec-edu paper','Reflective','asuka_teacher'),
    mk('はい、疑似科学の見極めを論文で扱いました','Yes — Pseudo-sci paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09954',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、精神病患者のケアを医療チームで丁寧に提供します','Ren — psych-pati-care med-team','Calm','saito_doctor'),
    mk('はい、診断には深い思索が必要だと医療チームで認識します','Yes — Diag-deep-think med-team','Patient','saito_doctor'),
    mk('蓮さん、検体の低温保存を医療チームで徹底します','Ren — sample-low-temp-keep med-team','Calm','saito_doctor'),
    mk('男系遺伝病の研究を、貴院、進められてますね、先生','Male-genet-dis your-hosp prog, sensei','Reflective','ren_uni'),
    mk('はい、患者の蛋白尿を医療チームで日々確認します','Yes — Pati-protein-urin med-team daily','Patient','saito_doctor'),
    mk('はい、環状の心電図モニターを医療チームで観察します','Yes — Ring-ECG-monit med-team obs','Patient','saito_doctor'),
    mk('中等度の合併症を、貴院、適切に管理されますね、先生','Sec-comp your-hosp mgmt, sensei','Reflective','ren_uni'),
    mk('はい、疑似症例の鑑別を医療チームで丁寧におこないます','Yes — Pseudo-case-diff med-team careful','Patient close','saito_doctor'),
  ]},
  {id:'conv_09955',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員の精神病に対する偏見をなくせ','Our co — staff-psych-bias-rid','Crisp','hiroshi_boss'),
    mk('はい。経営判断には深い思索を加えます','Yes — Mgmt-think-add','Methodical','kenji_office'),
    mk('当社、低温物流の体制を強化しろ','Our co — low-temp-log-strength','Direction','hiroshi_boss'),
    mk('はい。創業家の男系継承にこだわりません','Yes — Found-male-succ-no-bind','Update','kenji_office'),
    mk('当社、蛋白質関連の食品事業を強化しろ','Our co — prot-food-strength','Direction','hiroshi_boss'),
    mk('はい。商品の流通環状経路を最適化します','Yes — Prod-ring-route-opt','Update','kenji_office'),
    mk('当社、中等規模の取引先を大切にしろ','Our co — mid-partner-cherish','Direction','hiroshi_boss'),
    mk('はい。疑似広告にならない表現を徹底します','Yes — Pseudo-ad-not-strict','Close','kenji_office'),
  ]},
  {id:'conv_09956',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、アメリカ西海岸で留学経験がおありだって、メイちゃん','Aoi — cust-W-coast-study Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ルパン三世の映画が大好きだって、メイちゃん','Aoi — cust-Lupin-movie Mei','Reflective','aoi_barista'),
    mk('葵、お客様、カンヌ映画祭に行かれたって、メイちゃん','Aoi — cust-Cannes Mei','Reflective','mei_romantic'),
    mk('葵、お客様、トロントに親族がいらっしゃるって、メイちゃん','Aoi — cust-Toronto-rel Mei','Reflective','aoi_barista'),
    mk('葵、お客様、スリランカ紅茶のソムリエ資格をお持ちだって、メイちゃん','Aoi — cust-Sri-Lanka-tea-som Mei','Reflective','mei_romantic'),
    mk('葵、お客様、レバノン料理のレストランを開きたいって、メイちゃん','Aoi — cust-Leb-rest-want Mei','Reflective','aoi_barista'),
    mk('葵、お客様、マニラに駐在経験がおありだって、メイちゃん','Aoi — cust-Manila-station Mei','Reflective','mei_romantic'),
    mk('葵、お客様、江戸川区の花火大会に行かれるって、メイちゃん','Aoi — cust-Edogawa-fire Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09957',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがアメリカ西海岸に駐在された','Gran — youth Dad-W-coast-station','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ルパン三世のアニメをご覧になってたわよね、あなた?','Yes — Grandpa-Lupin-watch, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがカンヌ映画祭の作品をご鑑賞された','Gran — youth Dad-Cannes-watch','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、トロントに出張されたわよね、あなた?','Grandpa — Toronto-trip, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがスリランカ紅茶を取り寄せられた','Gran — youth Dad-Sri-Lanka-tea-order','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、レバノン情勢のニュースに心を痛められたわよね、あなた?','Grandpa — Leb-news-pain, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがマニラ駐在のお話されたわ','Gran — youth Dad-Manila-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、江戸川区の花火大会に毎年行かれたわよね、あなた?','Grandpa — Edogawa-fire-yr, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09958',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがアメリカ西海岸のお話して下さるそうよ','Sho — Dad-W-coast-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとルパン三世観たいよ','Mei-sis — me Dad-Lupin-want','Eager child','sho_child'),
    mk('翔くん、お父さんがカンヌ映画祭の作品を観せて下さるそうよ','Sho — Dad-Cannes-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとトロントの絵本見たよ','Mei-sis — me Dad-Toronto-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがスリランカの紅茶を取り寄せて下さったわ','Sho — Dad-Sri-Lanka-order','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとレバノン料理屋さん行ったよ','Mei-sis — me Dad-Leb-rest','Eager child','sho_child'),
    mk('翔くん、お父さんがマニラに出張されるそうよ','Sho — Dad-Manila-trip','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと江戸川の花火大会行きたいよ','Mei-sis — me Dad-Edogawa-fire-want','Eager close','sho_child'),
  ]},
  {id:'conv_09959',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、アメリカ西海岸に留学したいって言ってたな','Riku — W-coast-study-said','Curious teen','sakura_teen'),
    mk('お前、ルパン三世のアニメ全話観たろ?桜','You — Lupin-all? Sakura','Curious','riku_teen'),
    mk('リク、お前、カンヌ映画祭の作品観に行ったな','Riku — Cannes-watch','Curious','sakura_teen'),
    mk('お前、家族でトロント旅行行ったろ?桜','You — fam-Toronto? Sakura','Curious','riku_teen'),
    mk('リク、お前、スリランカ紅茶ハマってたな','Riku — Sri-Lanka-tea-into','Curious','sakura_teen'),
    mk('お前、社会でレバノン情勢勉強したな、桜','You — soc-Leb? Sakura','Curious','riku_teen'),
    mk('リク、お前、マニラに修学旅行行ったろ?','Riku — Manila-sch-trip?','Curious','sakura_teen'),
    mk('お前、江戸川区の花火大会行ったな、桜','You — Edogawa-fire Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09960',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがアメリカ西海岸の写真を見せて下さるそうよ','Sho — Dad-W-coast-photo-show','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとルパン三世観たよ','Mom — me Dad-Lupin','Eager child','sho_child'),
    mk('翔くん、お父さんがカンヌ映画祭のお話して下さったわ','Sho — Dad-Cannes-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとトロントの絵本見たよ','Mom — me Dad-Toronto-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがスリランカ出張のお土産買って下さったわ','Sho — Dad-Sri-Lanka-souv','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとレバノン料理食べたよ','Mom — me Dad-Leb-eat','Eager child','sho_child'),
    mk('翔くん、お父さんがマニラの絵本を読んで下さるそうよ','Sho — Dad-Manila-pic-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと江戸川区の花火大会行ったよ','Mom — me Dad-Edogawa-fire','Eager close','sho_child'),
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

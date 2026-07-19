import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_471 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['馳せ','繰り出し','ベター','つぶす','まわす','喰い','飛び込む','おこない']
const B_T = ['クリティカル','全会','総局','複写','扶桑社','スポークスマン','図版','中味']
const C_T = ['脚光','全盛期','迷走','イジメ','争奪','自尊心','趨勢','再犯']
const D_T = ['高架','岩石','邸宅','蜘蛛','蝉','コスモス','重油','広辞苑']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09381',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが故郷に思いを馳せていらしたわ','Sho — Dad-home-thought-let-fly','Tender','yumiko_mom'),
    mk('ママ、お祖父ちゃんが繰り出しの式典に出られたんだって','Mom — Grandpa-parade-cere-attend','Reflective child','sho_child'),
    mk('翔くん、宿題と遊び、両方やる方がベターよ','Sho — homework-play-both-better','Direction','yumiko_mom'),
    mk('ママ、ぼく、宿題を一気につぶす計画なんだ','Mom — me homework-once-crush-plan','Eager child','sho_child'),
    mk('翔くん、傘をくるくるまわすの止めてね','Sho — umbrella-spin-stop','Direction','yumiko_mom'),
    mk('ママ、お祖父ちゃんが鳥が虫を喰いに来てたって仰ってたよ','Mom — Grandpa-bird-bug-eat-came','Reflective child','sho_child'),
    mk('翔くん、お友達のお家のプールに飛び込むのは気を付けてね','Sho — friend-pool-jump-care','Direction','yumiko_mom'),
    mk('ママ、お祖父ちゃんはおこないが立派な方だったよ','Mom — Grandpa-deed-splendid','Eager close','sho_child'),
  ]},
  {id:'conv_09382',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、思いを馳せながらコーヒーを召し上がってたよ、メイちゃん','Aoi — cust-thought-let-fly-coffee Mei','Tender','mei_romantic'),
    mk('葵、お祭りの繰り出しの音が聴こえるね、メイちゃん','Aoi — fest-parade-sound-hear Mei','Pleased','aoi_barista'),
    mk('葵、新メニューはベターな選択肢を増やそう、メイちゃん','Aoi — new-menu-better-opt-up Mei','Direction','mei_romantic'),
    mk('葵、繁忙期は一気に在庫をつぶす方針ね、メイちゃん','Aoi — busy-stock-crush-policy Mei','Direction','aoi_barista'),
    mk('葵、お客様、トレイをまわすように軽快に運ばれたね、メイちゃん','Aoi — cust-tray-spin-light-carry Mei','Reflective','mei_romantic'),
    mk('葵、お客様、コーヒーを「喰い気味」に召し上がられたよ、メイちゃん','Aoi — cust-coffee-gulp-ate Mei','Wry','aoi_barista'),
    mk('葵、新しい挑戦に飛び込むタイミングね、メイちゃん','Aoi — new-challenge-jump-time Mei','Reflective','mei_romantic'),
    mk('葵、お店のおこないが地域に評価されて嬉しいね、メイちゃん','Aoi — store-deed-local-eval-glad Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_09383',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは戦地に思いを馳せていらした','Gran — youth Dad-battle-thought-let-fly','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、村祭りの繰り出しを楽しまれたわよね、あなた?','Yes — Grandpa-village-fest-parade-enjoy, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「ベターな選択を」と仰った','Gran — youth Dad-"better-choice"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、心配事を一気につぶす豪快さがおありだったわよね、あなた?','Grandpa — worry-crush-bold, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが孫を抱えてまわすのが上手かった','Gran — youth Dad-grandkid-hold-spin-good','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様が虫を喰いそうになってご心配されたわよね、あなた?','Grandpa — grandkid-bug-eat-worry, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは火事の現場に飛び込む勇気があった','Gran — youth Dad-fire-jump-brave','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、地域でおこないが立派と評されたわよね、あなた?','Grandpa — region-deed-splendid-eval, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09384',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、修学旅行に思いを馳せてるな','Riku — school-trip-thought-let-fly','Reflective teen','sakura_teen'),
    mk('お前、お祭りの繰り出しの太鼓叩いたな、桜','You — fest-parade-drum Sakura','Praising','riku_teen'),
    mk('リク、お前、ベターな勉強法に変えろよ','Riku — better-study-change','Direction','sakura_teen'),
    mk('お前、宿題を週末でつぶすつもりだろ、桜','You — homework-weekend-crush Sakura','Curious','riku_teen'),
    mk('リク、お前、ペンをまわすの上手いな','Riku — pen-spin-good','Praising','sakura_teen'),
    mk('お前、給食を喰い過ぎだぞ、桜','You — lunch-eat-too-much Sakura','Wry','riku_teen'),
    mk('リク、お前、プールに飛び込む練習しろよ','Riku — pool-jump-prac','Direction','sakura_teen'),
    mk('お前、普段のおこないが大事だぞ、桜','You — daily-deed-impt Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_09385',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんと子供時代に思いを馳せましょうね','Sho — Mei-sis-childhood-thought-let-fly','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祭りの繰り出しの行列が見たいよ','Mei-sis — me fest-parade-line-want','Eager child','sho_child'),
    mk('翔くん、お絵描きは練習を続けるのがベターよ','Sho — art-prac-cont-better','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きを一気につぶしちゃった','Mei-sis — me art-once-crush','Wry child','sho_child'),
    mk('翔くん、傘をまわすと水滴が飛ぶから注意ね','Sho — umbrella-spin-water-fly-care','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんがおやつを喰い気味に勧めてくれたよ','Mei-sis — me Grandpa-snack-eat-rec','Eager child','sho_child'),
    mk('翔くん、お絵描きの新分野に飛び込むのは怖くないわね','Sho — art-new-jump-not-scared','Encouraging','mei_romantic'),
    mk('メイ姉さん、ぼく、おこないを気を付けるよ','Mei-sis — me deed-care','Earnest close','sho_child'),
  ]},
  {id:'conv_09386',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、クリティカルな経営判断を下す時期だ','Our co — critical-mgmt-judg-time','Crisp','hiroshi_boss'),
    mk('はい。取締役会全会一致で承認されました','Yes — Board-all-approve','Methodical','kenji_office'),
    mk('当社、海外総局との連携を強化しろ','Our co — overseas-bureau-link-strength','Direction','hiroshi_boss'),
    mk('はい。書類の複写は最小限に抑えます','Yes — Doc-copy-min','Update','kenji_office'),
    mk('当社、扶桑社系のメディアと交流しろ','Our co — Fusosha-media-exch','Direction','hiroshi_boss'),
    mk('はい。新スポークスマンを選任しました','Yes — New-spokes-appoint','Update','kenji_office'),
    mk('カタログの図版を充実させろ','Catalog-fig-enrich','Direction','hiroshi_boss'),
    mk('はい。プレスリリースの中味を精査します','Yes — Press-content-anal','Close','kenji_office'),
  ]},
  {id:'conv_09387',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('クリティカルな判断は経営陣に委ねましょう','Critical-judg-mgmt-entrust','Brisk','yuki_office'),
    mk('はい。全会一致を目指して根回しをします','Yes — All-aim-pre-talk','Cooperative','kenji_office'),
    mk('海外総局との会議を設定しましょう','Overseas-bureau-meet-set','Direction','yuki_office'),
    mk('はい。契約書の複写を社内で管理します','Yes — Contract-copy-co-mgmt','Update','kenji_office'),
    mk('扶桑社のジャーナルに広告を出しましょう','Fusosha-journ-ad','Direction','yuki_office'),
    mk('はい。スポークスマンの研修を計画しております','Yes — Spokes-train-plan','Update','kenji_office'),
    mk('資料の図版を更新しましょう','Doc-fig-update','Direction','yuki_office'),
    mk('はい。提案書の中味を再構成します','Yes — Prop-content-restruct','Close','kenji_office'),
  ]},
  {id:'conv_09388',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文のクリティカルな部分を強調しろ','Ren — paper-critical-emph','Mentor','hiroshi_boss'),
    mk('はい。学会の全会一致決議に注目しております','Yes — Conf-all-decis-att','Earnest','ren_uni'),
    mk('蓮、海外研究機関の総局とも連携しろ','Ren — overseas-research-bureau-link','Direction','hiroshi_boss'),
    mk('はい。研究データの複写管理を徹底します','Yes — Research-data-copy-strict','Polite','ren_uni'),
    mk('蓮、扶桑社系の出版社にも論文を売り込め','Ren — Fusosha-pub-paper-sell','Direction','hiroshi_boss'),
    mk('はい。研究室スポークスマンとして広報します','Yes — Lab-spokes-PR','Earnest','ren_uni'),
    mk('蓮、論文の図版を読者向けに整えろ','Ren — paper-fig-reader-prep','Direction','hiroshi_boss'),
    mk('はい。論文の中味を再検討します','Yes — Paper-content-review','Earnest close','ren_uni'),
  ]},
  {id:'conv_09389',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、クリティカルな事案には特捜班を編成されますね','Police critical-case-spec-team','Cooperative','kenji_office'),
    mk('警察、議会の全会一致で防犯予算が承認されましたね','Police Diet-all-crime-prev-budget','Cooperative','kenji_office'),
    mk('警察、本部総局との連携を強化されますね','Police HQ-bureau-link-strength','Cooperative','kenji_office'),
    mk('警察、調書の複写は厳格に管理されますね','Police statement-copy-strict','Cooperative','kenji_office'),
    mk('警察、扶桑社系のメディアからの取材にもご対応ですね','Police Fusosha-media-int-resp','Cooperative','kenji_office'),
    mk('警察、署のスポークスマンが市民に説明されますね','Police station-spokes-citizen-explain','Cooperative','kenji_office'),
    mk('警察、防犯ポスターの図版を充実されてますね','Police crime-prev-poster-fig-enrich','Cooperative','kenji_office'),
    mk('警察、報告書の中味も丁寧に精査されますね','Police rep-content-careful-anal','Close','kenji_office'),
  ]},
  {id:'conv_09390',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、クリティカルな決断を即決された','Dad — founding critical-decis-fast','Sage','hiroshi_elder'),
    mk('はい。お父さんは全会一致を重んじた経営をされた','Yes — Dad all-imp-mgmt','Commitment','hiroshi_boss'),
    mk('お父さん、海外総局を立ち上げる先見性をお持ちだった','Dad — overseas-bureau-launch-foresee','Wistful','hiroshi_elder'),
    mk('はい。お父さんは契約書の複写を厳重に管理された','Yes — Dad contract-copy-strict','Reflective','hiroshi_boss'),
    mk('お父さん、扶桑社系の編集者とも交流された','Dad — Fusosha-editor-exch','Wistful','hiroshi_elder'),
    mk('はい。お父さんはスポークスマン的な役割もされた','Yes — Dad spokes-role','Reflective','hiroshi_boss'),
    mk('お父さん、社史の図版にもこだわった','Dad — co-hist-fig-care','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品の中味で勝負された','Yes — Dad prod-content-comp','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09391',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、注目の脚光を浴びた作家の研究を論文で扱いましたね','Ren — spot-shine-author paper','Calm','asuka_teacher'),
    mk('はい、芸能界の全盛期を支えたスタッフを論文で扱いました','Yes — Ent-peak-staff paper','Earnest','ren_uni'),
    mk('蓮さん、政策が迷走した時期の研究を論文で扱いましたね','Ren — pol-stray-era paper','Reflective','asuka_teacher'),
    mk('はい、学校でのイジメ対策を論文で扱いました','Yes — School-bully-counter paper','Earnest','ren_uni'),
    mk('資源の争奪戦の歴史を論文で扱いましたね','Resource-rivalry-hist paper','Engaged','asuka_teacher'),
    mk('はい、自尊心と社会的成功の関係を論文で扱いました','Yes — Self-esteem-soc-success paper','Earnest','ren_uni'),
    mk('蓮さん、世論の趨勢を分析した研究を論文で扱いましたね','Ren — pub-opin-trend paper','Reflective','asuka_teacher'),
    mk('はい、犯罪再犯防止プログラムを論文で扱いました','Yes — Crime-reoff-prev paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09392',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、犯人が脚光を浴びた事を警察、把握されてますね','Case suspect-spot-shine police-grasp','Reflective','ren_uni'),
    mk('警察、犯罪が全盛期に達する前に未然防止します','Police crime-peak-pre-prev','Procedural','takeda_officer'),
    mk('本件、捜査が迷走することのないよう警察、慎重ですね','Case inv-stray-not police-careful','Reflective','ren_uni'),
    mk('警察、学校でのイジメ事案に厳しく対応します','Police school-bully-strict','Procedural','takeda_officer'),
    mk('本件、不動産の争奪戦を警察、注視されてますね','Case realty-rivalry police-watch','Reflective','ren_uni'),
    mk('警察、被害者の自尊心を傷つけない対応を徹底します','Police victim-self-esteem-not-hurt-strict','Procedural','takeda_officer'),
    mk('本件、社会の趨勢を読みつつ警察、捜査されますね','Case soc-trend-police-inv','Reflective','ren_uni'),
    mk('警察、再犯防止の活動を続けます','Police reoff-prev-cont','Close','takeda_officer'),
  ]},
  {id:'conv_09393',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、注目の脚光を浴びた作家の研究を論文で扱いましたね','Sakura — spot-shine paper','Calm','asuka_teacher'),
    mk('はい、芸能界の全盛期を支えたスタッフを論文で扱いました','Yes — Ent-peak paper','Earnest teen','sakura_teen'),
    mk('政策が迷走した時期の研究を論文で扱いましたね','Pol-stray paper','Reflective','asuka_teacher'),
    mk('はい、学校でのイジメ対策を論文で扱いました','Yes — School-bully paper','Earnest','sakura_teen'),
    mk('資源の争奪戦の歴史を論文で扱いましたね','Resource-rivalry paper','Engaged','asuka_teacher'),
    mk('はい、自尊心と社会的成功の関係を論文で扱いました','Yes — Self-esteem paper','Earnest','sakura_teen'),
    mk('世論の趨勢を分析した研究を論文で扱いましたね','Pub-opin-trend paper','Reflective','asuka_teacher'),
    mk('はい、犯罪再犯防止プログラムを論文で扱いました','Yes — Reoff-prev paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09394',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、新治療法が脚光を浴びた時こそ慎重に医療チームで検証します','Ren — new-treat-spot-shine careful med-team verify','Calm','saito_doctor'),
    mk('はい、医療技術の全盛期も技術伝承を医療チームで重視します','Yes — Med-peak-skill-inh med-team imp','Patient','saito_doctor'),
    mk('診断が迷走するケースを、貴院、減らされてますね、先生','Diag-stray-case your-hosp reduce, sensei','Reflective','ren_uni'),
    mk('はい、医療現場のイジメに医療チームで対策します','Yes — Med-bully med-team counter','Patient','saito_doctor'),
    mk('臓器の争奪戦と倫理問題を、貴院、研究されてますね、先生','Organ-rivalry-eth your-hosp research, sensei','Curious','ren_uni'),
    mk('はい、患者の自尊心を尊重する医療を医療チームで提供します','Yes — Patient-self-esteem-respect med-team','Patient','saito_doctor'),
    mk('医療政策の趨勢を、貴院、注視されてますね、先生','Med-pol-trend your-hosp watch, sensei','Reflective','ren_uni'),
    mk('はい、薬物依存の再犯防止プログラムを医療チームで担当します','Yes — Drug-add-reoff-prev med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09395',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、新製品で脚光を浴びる時こそ謙虚でいろ','Our co — new-prod-spot-shine-humble','Crisp','hiroshi_boss'),
    mk('はい。当社の全盛期を支えた古参社員を大事にします','Yes — Our co-peak-vet-cherish','Methodical','kenji_office'),
    mk('当社、経営方針が迷走しないよう注意しろ','Our co — mgmt-pol-stray-not','Direction','hiroshi_boss'),
    mk('はい。社内イジメは絶対に許しません','Yes — Co-bully-zero-tolerance','Update','kenji_office'),
    mk('業界の市場争奪戦から逃げるな','Industry-market-rivalry-not-flee','Direction','hiroshi_boss'),
    mk('はい。社員の自尊心を尊重した人事を行います','Yes — Staff-self-esteem-resp-HR','Update','kenji_office'),
    mk('当社、市場の趨勢を読み続けろ','Our co — market-trend-read-cont','Direction','hiroshi_boss'),
    mk('はい。社員の不正再犯防止策を整備します','Yes — Staff-fraud-reoff-prev','Close','kenji_office'),
  ]},
  {id:'conv_09396',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お店の前の高架線路、電車が綺麗ね、メイちゃん','Aoi — store-elev-rail-train Mei','Reflective','mei_romantic'),
    mk('葵、お客様、岩石採集が趣味なんだって、メイちゃん','Aoi — cust-rock-collect-hobby Mei','Reflective','aoi_barista'),
    mk('葵、お客様、邸宅から徒歩でお見えになるんだって、メイちゃん','Aoi — cust-mansion-walk-come Mei','Reflective','mei_romantic'),
    mk('葵、お店の隅に蜘蛛の巣があるよ、メイちゃん','Aoi — store-corner-spider-web Mei','Wry','aoi_barista'),
    mk('葵、夏の午後、蝉の鳴き声がBGMだね、メイちゃん','Aoi — summer-afternoon-cicada-BGM Mei','Reflective','mei_romantic'),
    mk('葵、お店の前にコスモスを咲かせたいね、メイちゃん','Aoi — store-front-cosmos-bloom Mei','Pleased','aoi_barista'),
    mk('葵、お客様、重油の運搬のお仕事だって、メイちゃん','Aoi — cust-heavy-oil-transp-work Mei','Reflective','mei_romantic'),
    mk('葵、お客様、広辞苑を毎日読んでらっしゃるって、メイちゃん','Aoi — cust-Kojien-daily-read Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09397',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと高架下を歩いたぞ','Gran — youth Dad-under-elev-walk','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、岩石コレクションをお持ちだったわよね、あなた?','Yes — Grandpa-rock-coll, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが古い邸宅で写真を撮られた','Gran — youth Dad-old-mansion-photo','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭の蜘蛛の巣をご観察されてたわよね、あなた?','Grandpa — garden-spider-web-obs, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは夏の蝉の声が好きでらした','Gran — youth Dad-summer-cicada-liked','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭にコスモスを毎年植えられたわよね、あなた?','Grandpa — garden-cosmos-yearly, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが重油タンカーの仕事の話をされた','Gran — youth Dad-heavy-oil-tanker-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、書斎に広辞苑を置いてらしたわよね、あなた?','Grandpa — study-Kojien, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09398',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが高架の橋を見せて下さるそうよ','Sho — Dad-elev-bridge-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、岩石の標本を学校で見たよ','Mei-sis — me rock-spec-school-saw','Eager child','sho_child'),
    mk('翔くん、メイ姉さんが古い邸宅の絵を描かれたわ','Sho — Mei-sis-old-mansion-art','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お庭で蜘蛛を観察したよ','Mei-sis — me garden-spider-obs','Eager child','sho_child'),
    mk('翔くん、夏は蝉の合唱が聴こえるわね','Sho — summer-cicada-chorus','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お母さんとコスモス畑に行ったよ','Mei-sis — me Mom-cosmos-field','Eager child','sho_child'),
    mk('翔くん、お父さんが重油のお仕事のお話してくれたわ','Sho — Dad-heavy-oil-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、家で広辞苑を引くのを学んだよ','Mei-sis — me home-Kojien-look-up-learn','Proud close','sho_child'),
  ]},
  {id:'conv_09399',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、高架線路の近くだろ?','Riku — your-home-elev-rail-near?','Curious teen','sakura_teen'),
    mk('お前、岩石採集が趣味だったな、桜','You — rock-collect-hobby Sakura','Reflective','riku_teen'),
    mk('リク、お前、社会で邸宅建築の単元やったろ?','Riku — soc-mansion-arch?','Curious','sakura_teen'),
    mk('お前、蜘蛛苦手だろ?桜','You — spider-bad? Sakura','Curious','riku_teen'),
    mk('リク、お前、蝉の抜け殻集めてたな','Riku — cicada-shell-collect','Wry','sakura_teen'),
    mk('お前、夏にコスモス見たろ?桜','You — summer-cosmos-saw? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で重油タンカーの単元やったろ?','Riku — soc-heavy-oil-tanker?','Curious','sakura_teen'),
    mk('お前、図書館で広辞苑引いてたな、桜','You — lib-Kojien-look-up Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09400',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんと高架駅を見学に行きましょうね','Sho — Dad-elev-stat-tour','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと岩石を集めたよ','Mom — me Dad-rock-collect','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが古い邸宅のお話してくれたわ','Sho — Grandpa-old-mansion-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お庭で蜘蛛の巣を見つけたよ','Mom — me garden-spider-web-found','Eager child','sho_child'),
    mk('翔くん、夏は蝉の声がいっぱいね','Sho — summer-cicada-many','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとコスモスを植えたよ','Mom — me Dad-cosmos-planted','Eager child','sho_child'),
    mk('翔くん、お父さんが重油の流出事故のニュースを観てらしたわ','Sho — Dad-heavy-oil-spill-news','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんが広辞苑を引いて下さったよ','Mom — me Dad-Kojien-looked-up','Eager close','sho_child'),
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

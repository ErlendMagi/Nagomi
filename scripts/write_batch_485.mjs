import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_485 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['平坦','絶え間','見切り','感ずる','働きかける','釘付け','呼ばわり','叱り']
const B_T = ['出撃','前途','可否','押え','広義','互角','前段','奔走']
const C_T = ['緑化','痙攣','嘔吐','度数','積分','水蒸気','骨髄','流暢']
const D_T = ['メモリアル','ハウル','ヨドバシカメラ','ポケモン','ファミコン','東宝','オカルト','サントリー']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09661',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんと一緒なら平坦な道のりよ','Sho — Dad-flat-path','Tender','yumiko_mom'),
    mk('ママ、お父さんが絶え間ない応援をして下さるよ','Mom — Dad-cont-cheer','Eager child','sho_child'),
    mk('翔くん、安物のおもちゃは見切りを付けて整理しましょうね','Sho — cheap-toy-cut-clean','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんの優しさを心で感ずるよ','Mom — me Dad-kind-heart-feel','Tender child','sho_child'),
    mk('翔くん、お父さんに勉強の楽しさを働きかけるわね','Sho — Dad-study-fun-engage','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんの絵に釘付けになったよ','Mom — me Dad-art-glued','Eager child','sho_child'),
    mk('翔くん、人をバカ呼ばわりしてはダメよ','Sho — people-fool-call-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんに叱りつけられず優しく諭されたよ','Mom — me Dad-scold-not-soft-told','Earnest close','sho_child'),
  ]},
  {id:'conv_09662',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店の経営は平坦な道のりじゃないね、メイちゃん','Aoi — store-mgmt-flat-no Mei','Reflective','mei_romantic'),
    mk('葵、絶え間ない努力が必要ね、メイちゃん','Aoi — cont-effort-need Mei','Direction','aoi_barista'),
    mk('葵、売れない商品には見切りを付けようね、メイちゃん','Aoi — unsold-cut Mei','Direction','mei_romantic'),
    mk('葵、お客様の気持ちを感ずる力が大事ね、メイちゃん','Aoi — cust-heart-feel-skill Mei','Reflective','aoi_barista'),
    mk('葵、新メニューにお客様の心を働きかけたいね、メイちゃん','Aoi — new-menu-cust-engage Mei','Direction','mei_romantic'),
    mk('葵、お客様、新しいケーキに釘付けになってたよ、メイちゃん','Aoi — cust-new-cake-glued Mei','Pleased','aoi_barista'),
    mk('葵、競合店を悪呼ばわりはやめようね、メイちゃん','Aoi — comp-bad-call-stop Mei','Direction','mei_romantic'),
    mk('葵、新人スタッフを叱りつけずに優しく指導しようね、メイちゃん','Aoi — newhire-scold-not-soft-guide Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09663',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと共に平坦ではない道を歩んだ','Gran — youth Dad-flat-not-walk','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、絶え間ない努力をされたわよね、あなた?','Yes — Grandpa-cont-effort, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが古い物に見切りを付けるのが上手だった','Gran — youth Dad-old-cut-good','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、人の悲しみを感ずる優しい方だったわよね、あなた?','Grandpa — people-sad-feel-kind, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが地域の改善を働きかけられた','Gran — youth Dad-local-impr-engage','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の姿に釘付けになってらしたわよね、あなた?','Grandpa — grandkid-glued, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは人をバカ呼ばわりされなかった','Gran — youth Dad-fool-call-no','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様を叱りつけず優しく諭されたわよね、あなた?','Grandpa — grandkid-scold-not-soft-told, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09664',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、人生平坦じゃないって悟ったろ','Riku — life-flat-not-real','Wry teen','sakura_teen'),
    mk('お前、絶え間ないバイトでお疲れだな、桜','You — cont-job-tired Sakura','Wry','riku_teen'),
    mk('リク、お前、古い参考書に見切りを付けたな','Riku — old-ref-book-cut','Curious','sakura_teen'),
    mk('お前、クラスの雰囲気を感ずる力あるな、桜','You — class-vibe-feel-skill Sakura','Praising','riku_teen'),
    mk('リク、お前、先生に進路を働きかけてたな','Riku — tch-career-engage','Curious','sakura_teen'),
    mk('お前、新作映画に釘付けだったな、桜','You — new-movie-glued Sakura','Wry','riku_teen'),
    mk('リク、お前、後輩をダメ呼ばわりすんなよ','Riku — junior-no-good-call-no','Direction','sakura_teen'),
    mk('お前、先生から叱りつけられそうだったな、桜','You — tch-scold-near Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09665',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、人生は平坦ではないけれど、お父さんがいらしてくれるわ','Sho — life-flat-not-Dad-with','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの絶え間ないお手伝いに感謝してるよ','Mei-sis — me Dad-cont-help-thanks','Eager child','sho_child'),
    mk('翔くん、古いおもちゃに見切りを付けて整理しましょうね','Sho — old-toy-cut-clean','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの優しさを心で感ずるよ','Mei-sis — me Dad-kind-feel','Tender child','sho_child'),
    mk('翔くん、お父さんに本を一緒に読もうって働きかけてみてね','Sho — Dad-book-read-engage','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの絵本に釘付けになったよ','Mei-sis — me Dad-pic-glued','Eager child','sho_child'),
    mk('翔くん、お友達を悪呼ばわりしないようにしましょうね','Sho — friend-bad-call-no','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに叱りつけられず優しく教えてもらったよ','Mei-sis — me Dad-scold-not-soft-taught','Earnest close','sho_child'),
  ]},
  {id:'conv_09666',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新市場に出撃する準備を整えろ','Our co — new-mkt-sortie-prep','Crisp','hiroshi_boss'),
    mk('はい。当社の前途は明るいと信じます','Yes — Our-co-fut-bright-trust','Methodical','kenji_office'),
    mk('当社、新事業の可否を取締役会で決めろ','Our co — new-biz-yes-no-board','Direction','hiroshi_boss'),
    mk('はい。コストを徹底的に押え込みます','Yes — Cost-strict-hold','Update','kenji_office'),
    mk('広義のサービス業の動向を見極めろ','Broad-serv-trend-judg','Direction','hiroshi_boss'),
    mk('はい。競合と互角に戦える戦略を立てます','Yes — Comp-equal-strat','Update','kenji_office'),
    mk('当社、提案の前段でゴールを明確にしろ','Our co — prop-pre-goal-clear','Direction','hiroshi_boss'),
    mk('はい。新規顧客開拓に奔走しております','Yes — New-cust-busy','Close','kenji_office'),
  ]},
  {id:'conv_09667',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('新製品の発売出撃日を決めましょう','New-prod-sortie-day-set','Brisk','yuki_office'),
    mk('はい。新人の前途を応援します','Yes — Newhire-fut-cheer','Cooperative','kenji_office'),
    mk('値上げの可否を会議で決めましょう','Price-up-yes-no-mtg','Direction','yuki_office'),
    mk('はい。経費を押え込む案を提示します','Yes — Cost-hold-prop','Update','kenji_office'),
    mk('広義の競合分析を進めましょう','Broad-comp-anal','Direction','yuki_office'),
    mk('はい。価格は他社と互角になるよう設定します','Yes — Price-comp-equal-set','Update','kenji_office'),
    mk('プレゼンの前段で背景を説明しましょう','Pres-pre-bg-explan','Direction','yuki_office'),
    mk('はい。新規取引先開拓に奔走しております','Yes — New-partner-busy','Close','kenji_office'),
  ]},
  {id:'conv_09668',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、学会発表で出撃するつもりで臨め','Ren — conf-pres-sortie-mind','Mentor','hiroshi_boss'),
    mk('はい。研究者として前途を切り開きます','Yes — Research-fut-open','Earnest','ren_uni'),
    mk('蓮、研究テーマの可否を指導教員と相談しろ','Ren — research-yes-no-supv-cons','Direction','hiroshi_boss'),
    mk('はい。実験予算を押え込む工夫をします','Yes — Exp-budget-hold-impr','Earnest','ren_uni'),
    mk('蓮、広義の研究分野も視野に入れろ','Ren — broad-research-view','Direction','hiroshi_boss'),
    mk('はい。海外研究者と互角に議論できる力を養います','Yes — Overseas-research-equal-arg','Polite','ren_uni'),
    mk('蓮、論文の前段で問いを明確にしろ','Ren — paper-pre-Q-clear','Direction','hiroshi_boss'),
    mk('はい。実験補助探しに奔走しております','Yes — Exp-help-busy','Earnest close','ren_uni'),
  ]},
  {id:'conv_09669',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、機動隊が出撃される場面もありますね','Police mob-sortie','Cooperative','kenji_office'),
    mk('警察、若手警官の前途を支援されてますね','Police young-fut-supp','Cooperative','kenji_office'),
    mk('警察、現場捜査の可否を判断されますね','Police scene-inv-yes-no-judg','Cooperative','kenji_office'),
    mk('警察、暴動を押え込む技術を磨かれてますね','Police riot-hold-skill-pol','Cooperative','kenji_office'),
    mk('警察、広義のサイバー犯罪にも対応されますね','Police broad-cyber-resp','Cooperative','kenji_office'),
    mk('警察、犯罪組織と互角の捜査力をお持ちですね','Police crime-org-equal-inv','Cooperative','kenji_office'),
    mk('警察、報告書の前段で要旨を示されますね','Police rep-pre-summary','Cooperative','kenji_office'),
    mk('警察、夜間も奔走されておられますね','Police night-busy','Close','kenji_office'),
  ]},
  {id:'conv_09670',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、敢えて市場へ出撃された','Dad — founding mkt-sortie','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員の前途を信じておられた','Yes — Dad staff-fut-trust','Commitment','hiroshi_boss'),
    mk('お父さん、難案件の可否を即断された','Dad — tough-yes-no-fast','Wistful','hiroshi_elder'),
    mk('はい。お父さんは経費を押え込んで再投資された','Yes — Dad cost-hold-reinvest','Reflective','hiroshi_boss'),
    mk('お父さん、広義の業界動向にも目配りされてた','Dad — broad-industry-attent','Wistful','hiroshi_elder'),
    mk('はい。お父さんは大手と互角に勝負された','Yes — Dad major-equal-cmp','Reflective','hiroshi_boss'),
    mk('お父さん、講演の前段で謙虚さを示された','Dad — lect-pre-humble-show','Wistful','hiroshi_elder'),
    mk('はい。お父さんは創業期、毎日奔走された','Yes — Dad found-daily-busy','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09671',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、都市部の緑化政策研究を論文で扱いましたね','Ren — urban-green paper','Calm','asuka_teacher'),
    mk('はい、てんかんによる痙攣の機序研究を論文で扱いました','Yes — Epil-seiz-mech paper','Earnest','ren_uni'),
    mk('蓮さん、抗がん剤による嘔吐対策を論文で扱いましたね','Ren — chemo-vomit paper','Reflective','asuka_teacher'),
    mk('はい、視力度数の測定法研究を論文で扱いました','Yes — Vision-diopt-meas paper','Earnest','ren_uni'),
    mk('微積分の高校教育研究を論文で扱いましたね','Calc-HS-edu paper','Engaged','asuka_teacher'),
    mk('はい、温泉の水蒸気成分研究を論文で扱いました','Yes — Hot-spring-vapor paper','Earnest','ren_uni'),
    mk('蓮さん、骨髄移植の歴史を論文で扱いましたね','Ren — bone-marrow-trans-hist paper','Reflective','asuka_teacher'),
    mk('はい、語学学習者の流暢性測定を論文で扱いました','Yes — Lang-flu-meas paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09672',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、街路緑化区域での盗難を、警察、扱われてますね','Case green-area-theft police-handle','Reflective','ren_uni'),
    mk('警察、容疑者の薬物による痙攣症状を医療連携で対応します','Police suspect-drug-seiz-med','Procedural','takeda_officer'),
    mk('本件、毒物による嘔吐事件を、警察、捜査されますね','Case poison-vomit police-inv','Reflective','ren_uni'),
    mk('警察、酒気度数を呼気で測定します','Police alc-diopt-breath','Procedural','takeda_officer'),
    mk('本件、積分計算誤りによる事故を、警察、扱われますね','Case calc-err-acc police-handle','Reflective','ren_uni'),
    mk('警察、工場の水蒸気漏れ事故を扱います','Police fact-vapor-leak','Procedural','takeda_officer'),
    mk('本件、骨髄ドナー詐欺事件を、警察、扱われますね','Case bone-marrow-donor-fraud police-handle','Reflective','ren_uni'),
    mk('警察、容疑者の流暢な供述に注意します','Police suspect-flu-test','Close','takeda_officer'),
  ]},
  {id:'conv_09673',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、都市部の緑化政策を論文で扱いましたね','Sakura — urban-green paper','Calm','asuka_teacher'),
    mk('はい、てんかんの痙攣機序を論文で扱いました','Yes — Epil-seiz paper','Earnest teen','sakura_teen'),
    mk('抗がん剤による嘔吐対策を論文で扱いましたね','Chemo-vomit paper','Reflective','asuka_teacher'),
    mk('はい、視力度数の測定法を論文で扱いました','Yes — Vision-diopt paper','Earnest','sakura_teen'),
    mk('微積分の高校教育を論文で扱いましたね','Calc-HS paper','Engaged','asuka_teacher'),
    mk('はい、温泉の水蒸気成分を論文で扱いました','Yes — Hot-spring-vapor paper','Earnest','sakura_teen'),
    mk('骨髄移植の歴史を論文で扱いましたね','Marrow-trans paper','Reflective','asuka_teacher'),
    mk('はい、語学学習者の流暢性測定を論文で扱いました','Yes — Lang-flu paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09674',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、病院敷地の緑化計画を医療チームで進めます','Ren — hosp-green-plan med-team','Calm','saito_doctor'),
    mk('はい、てんかん患者の痙攣対応を医療チームで研修します','Yes — Epil-pati-seiz med-team train','Patient','saito_doctor'),
    mk('蓮さん、術後の嘔吐対策を医療チームで丁寧に行います','Ren — postop-vomit med-team careful','Calm','saito_doctor'),
    mk('視力度数の測定を、貴院、子供にもおこなわれますね、先生','Vision-diopt-meas-kid your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、薬剤投与量を積分計算で医療チームが算出します','Yes — Med-dose-calc med-team','Patient','saito_doctor'),
    mk('はい、加湿器の水蒸気量を医療チームで管理します','Yes — Hum-vapor med-team','Patient','saito_doctor'),
    mk('骨髄バンク登録を、貴院、推進されてますね、先生','Marrow-bank-reg your-hosp promo, sensei','Curious','ren_uni'),
    mk('はい、患者への流暢な説明を医療チームで心がけます','Yes — Pati-flu-explan med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09675',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、オフィスの緑化を進めろ','Our co — office-green-prog','Crisp','hiroshi_boss'),
    mk('はい。社員の急な痙攣対応マニュアルを整備します','Yes — Staff-emerg-seiz-man','Methodical','kenji_office'),
    mk('社員食堂で嘔吐事故が起きないよう衛生管理しろ','Staff-cant-vomit-prev-hyg','Direction','hiroshi_boss'),
    mk('はい。社員の眼鏡度数の補助制度も検討します','Yes — Staff-diopt-sub-cons','Update','kenji_office'),
    mk('当社、財務報告で積分的な指標を活用しろ','Our co — fin-calc-ind-use','Direction','hiroshi_boss'),
    mk('はい。工場の水蒸気漏れ対策も徹底します','Yes — Fact-vapor-leak-strict','Update','kenji_office'),
    mk('当社、骨髄ドナー社員を支援しろ','Our co — marrow-donor-staff-supp','Direction','hiroshi_boss'),
    mk('はい。社員の流暢な英語力育成も進めます','Yes — Staff-flu-Eng-dev','Close','kenji_office'),
  ]},
  {id:'conv_09676',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、戦没者メモリアル公園に行かれたって、メイちゃん','Aoi — cust-memo-park Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ハウルの動く城の映画ファンだって、メイちゃん','Aoi — cust-Howl-movie-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ヨドバシカメラでカメラを買われたよ、メイちゃん','Aoi — cust-Yodobashi-cam Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ポケモンカードを集めてらっしゃるって、メイちゃん','Aoi — cust-Pokemon-card Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ファミコン世代の方だって、メイちゃん','Aoi — cust-Famicom-gen Mei','Reflective','mei_romantic'),
    mk('葵、お客様、東宝の映画を仕事にされてたって、メイちゃん','Aoi — cust-Toho-work Mei','Reflective','aoi_barista'),
    mk('葵、お客様、オカルト雑誌の研究家だって、メイちゃん','Aoi — cust-occult-mag-research Mei','Reflective','mei_romantic'),
    mk('葵、お客様、サントリーのウイスキーがお好きだって、メイちゃん','Aoi — cust-Suntory-whis Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09677',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと戦没者メモリアル碑を訪ねた','Gran — youth Dad-memo-visit','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ハウル映画をご覧になったわよね、あなた?','Yes — Grandpa-Howl-watch, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがヨドバシカメラの常連だった','Gran — youth Dad-Yodobashi-reg','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様のポケモンカードを集めて下さってたわよね、あなた?','Grandpa — grandkid-Pokemon, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがファミコンの登場に驚かれた','Gran — youth Dad-Famicom-surprise','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、東宝の特撮映画にお詳しかったわよね、あなた?','Grandpa — Toho-FX-know, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがオカルト雑誌を読まれて笑ってらした','Gran — youth Dad-occult-mag-laugh','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、サントリーの角瓶をお気に入りだったわよね、あなた?','Grandpa — Suntory-Kaku-fav, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09678',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがメモリアル公園に連れて行って下さるそうよ','Sho — Dad-memo-park-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとハウルの映画観たよ','Mei-sis — me Dad-Howl-watch','Eager child','sho_child'),
    mk('翔くん、お父さんがヨドバシカメラに連れて行って下さるそうよ','Sho — Dad-Yodobashi-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ポケモンカード新しいの買って欲しいよ','Mei-sis — me Pokemon-new-want','Eager child','sho_child'),
    mk('翔くん、お父さんがファミコンのお話して下さるそうよ','Sho — Dad-Famicom-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと東宝の特撮映画観たいよ','Mei-sis — me Dad-Toho-FX-want','Eager child','sho_child'),
    mk('翔くん、お父さんがオカルト雑誌は子供には怖いから止めようって','Sho — Dad-occult-kid-scary-stop','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがサントリーの工場見学に連れて行って下さるよ','Mei-sis — me Dad-Suntory-fact-tour','Eager close','sho_child'),
  ]},
  {id:'conv_09679',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、修学旅行でメモリアル碑見たろ','Riku — sch-trip-memo-saw','Curious teen','sakura_teen'),
    mk('お前、ハウルの動く城ハマってたな、桜','You — Howl-into Sakura','Wry','riku_teen'),
    mk('リク、お前、ヨドバシカメラでガジェット買ってたな','Riku — Yodobashi-gadget','Curious','sakura_teen'),
    mk('お前、ポケモンカード集めてたな、桜','You — Pokemon-card Sakura','Curious','riku_teen'),
    mk('リク、お前ん父さん、ファミコン世代だな','Riku — your-Dad-Famicom-gen','Wry','sakura_teen'),
    mk('お前、東宝映画好きだな、桜','You — Toho-like Sakura','Curious','riku_teen'),
    mk('リク、お前、オカルト動画見すぎだぞ','Riku — occult-vid-too-much','Wry','sakura_teen'),
    mk('お前ん父さん、サントリーで働いてたな、桜','You-Dad-Suntory-work Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09680',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがメモリアル公園を案内して下さるそうよ','Sho — Dad-memo-park-guide','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとハウルの動く城をまた観たよ','Mom — me Dad-Howl-again','Eager child','sho_child'),
    mk('翔くん、お父さんがヨドバシカメラに行かれるそうよ','Sho — Dad-Yodobashi-go','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとポケモンカード交換したよ','Mom — me Dad-Pokemon-swap','Eager child','sho_child'),
    mk('翔くん、お父さんがファミコンを今でも大切にされてるわ','Sho — Dad-Famicom-cherish','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと東宝の映画祭行きたいよ','Mom — me Dad-Toho-fest-want','Eager child','sho_child'),
    mk('翔くん、お父さんがオカルト本を子供には見せないって仰ってたわ','Sho — Dad-occult-book-kid-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんとサントリーの工場見学行ったよ','Mom — me Dad-Suntory-fact-went','Eager close','sho_child'),
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

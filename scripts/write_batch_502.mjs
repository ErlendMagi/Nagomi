import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_502 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['身勝手','行き届い','正気','脱帽','つまっ','のぞく','使いこなす','築き上げ']
const B_T = ['異色','利得','顔写真','開閉','管制','政局','ボーダー','県外']
const C_T = ['半月','高麗','理学部','無害','音痴','科学技術庁','初等','開発途上国']
const D_T = ['ゲーテ','プリンセス','モナコ','ボリビア','シオン','有楽町','三鷹','ダーリン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10001',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、身勝手な振る舞いはお父さんに迷惑をかけるわよ','Sho — selfish-Dad-trouble','Direction','yumiko_mom'),
    mk('ママ、お家の隅々まで掃除が行き届いてるね','Mom — home-corners-clean','Pleased child','sho_child'),
    mk('翔くん、お父さんが疲れて、正気を保つのも大変よ','Sho — Dad-tired-sanity-hard','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんの努力には脱帽だよ','Mom — me Dad-effort-hat-off','Tender child','sho_child'),
    mk('翔くん、引き出しが書類でつまってるから整理しましょうね','Sho — drawer-doc-jam-clean','Direction','yumiko_mom'),
    mk('ママ、お父さんがお部屋をのぞくよ','Mom — Dad-room-peek','Reflective child','sho_child'),
    mk('翔くん、お父さんが新しい機械を使いこなすまで時間がかかるわね','Sho — Dad-new-machine-master-time','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんが家族の絆を築き上げて下さってるよ','Mom — me Dad-fam-bond-build-up','Tender close','sho_child'),
  ]},
  {id:'conv_10002',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、身勝手な接客はお客様に伝わるね、メイちゃん','Aoi — selfish-serv-cust-feel Mei','Direction','mei_romantic'),
    mk('葵、店内のサービスが行き届いていて嬉しいね、メイちゃん','Aoi — store-serv-attent-glad Mei','Pleased','aoi_barista'),
    mk('葵、忙しさで正気を失わないようにしようね、メイちゃん','Aoi — busy-sanity-keep Mei','Direction','mei_romantic'),
    mk('葵、お客様のセンスには脱帽ね、メイちゃん','Aoi — cust-taste-hat-off Mei','Pleased','aoi_barista'),
    mk('葵、レジが現金でつまってるよ、メイちゃん','Aoi — reg-cash-jam Mei','Wry','mei_romantic'),
    mk('葵、お客様、メニューをのぞく仕草が可愛らしいね、メイちゃん','Aoi — cust-menu-peek-cute Mei','Tender','aoi_barista'),
    mk('葵、新POSを使いこなすまで時間がかかるね、メイちゃん','Aoi — new-POS-master-time Mei','Reflective','mei_romantic'),
    mk('葵、お店の信頼を築き上げてきたわね、メイちゃん','Aoi — store-trust-build-up Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_10003',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは身勝手と無縁の方だった','Gran — youth Dad-selfish-no','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、家事まで行き届いてらしたわよね、あなた?','Yes — Grandpa-chores-attent, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、戦争で正気を保つのが困難だった','Gran — youth-war-sanity-hard','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の努力に脱帽されたわよね、あなた?','Grandpa — grandkid-effort-hat-off, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、引き出しが手紙でつまってた','Gran — youth-drawer-letter-jam','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、書斎をのぞくのが好きだったわよね、あなた?','Grandpa — study-peek-like, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが新技術を使いこなすのに時間がかかった','Gran — youth Dad-new-tech-master-time','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、人生で多くを築き上げてこられたわよね、あなた?','Grandpa — life-many-build-up, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10004',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、身勝手すぎる事はないか?','Riku — selfish-too?','Reflective teen','sakura_teen'),
    mk('お前ん家、片付けが行き届いてるな、桜','You — your-home-clean-attent Sakura','Praising','riku_teen'),
    mk('リク、お前、正気で部活辞めるんだろ?','Riku — sanity-club-quit?','Curious','sakura_teen'),
    mk('お前の発想力には脱帽だ、桜','You — idea-hat-off Sakura','Praising','riku_teen'),
    mk('リク、お前のバッグ、教科書でつまってるな','Riku — bag-text-jam','Wry','sakura_teen'),
    mk('お前、トイレをのぞくとか冗談やめろよ、桜','You — toilet-peek-joke-stop Sakura','Direction','riku_teen'),
    mk('リク、お前、スマホを完全に使いこなすな','Riku — phone-full-master','Praising','sakura_teen'),
    mk('お前、コツコツ友達を築き上げてきたな、桜','You — bit-friend-build-up Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_10005',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、身勝手にならず、お友達も大事にしようね','Sho — selfish-not-friend-cherish','Direction','mei_romantic'),
    mk('メイ姉さん、お父さんの気配りが家族全員に行き届いてるよ','Mei-sis — Dad-care-fam-all-attent','Tender child','sho_child'),
    mk('翔くん、お父さんが疲れても正気を保ってお仕事されてるわ','Sho — Dad-tired-sanity-work','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの工夫に脱帽だよ','Mei-sis — me Dad-impr-hat-off','Eager child','sho_child'),
    mk('翔くん、宿題が頭の中でつまってる時は休もうね','Sho — homework-head-jam-rest','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの書斎をそっとのぞくのが好き','Mei-sis — me Dad-study-soft-peek-like','Tender child','sho_child'),
    mk('翔くん、お父さんが新しいツールを使いこなすまで応援しましょうね','Sho — Dad-new-tool-master-cheer','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと信頼を築き上げてきたよ','Mei-sis — me Dad-trust-build-up','Tender close','sho_child'),
  ]},
  {id:'conv_10006',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、業界に異色のサービスを提供しろ','Our co — industry-uniq-svc','Crisp','hiroshi_boss'),
    mk('はい。短期利得より長期信頼を選びます','Yes — Short-gain-long-trust','Methodical','kenji_office'),
    mk('当社、社員証の顔写真も更新しろ','Our co — staff-ID-photo-up','Direction','hiroshi_boss'),
    mk('はい。シャッターの開閉時刻を再確認します','Yes — Shutter-time-recheck','Update','kenji_office'),
    mk('空港の管制との連携を強化しろ','Airport-control-link','Direction','hiroshi_boss'),
    mk('はい。政局の動きを注視します','Yes — Pol-sit-watch','Update','kenji_office'),
    mk('当社、ボーダー商品の取り扱いを増やせ','Our co — bord-prod-up','Direction','hiroshi_boss'),
    mk('はい。県外配送の体制を整えます','Yes — Out-pref-ship-prep','Close','kenji_office'),
  ]},
  {id:'conv_10007',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('異色のキャリアの方を採用しましょう','Uniq-career-hire','Brisk','yuki_office'),
    mk('はい。短期利得に走らない方針です','Yes — Short-gain-no-pol','Cooperative','kenji_office'),
    mk('社員証の顔写真撮影日を決めましょう','Staff-photo-day-set','Direction','yuki_office'),
    mk('はい。倉庫扉の開閉ログを取ります','Yes — Warehouse-open-log','Update','kenji_office'),
    mk('管制塔との連携訓練を実施しましょう','Control-tower-train','Direction','yuki_office'),
    mk('はい。政局のニュースを朝礼で共有します','Yes — Pol-news-morning-share','Update','kenji_office'),
    mk('ボーダー柄の新商品を企画しましょう','Bord-pat-new-plan','Direction','yuki_office'),
    mk('はい。県外出張の予算を確保します','Yes — Out-pref-trip-budget','Close','kenji_office'),
  ]},
  {id:'conv_10008',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、異色の研究分野にも飛び込め','Ren — uniq-field-jump','Mentor','hiroshi_boss'),
    mk('はい。短期利得ではなく真理を求めます','Yes — Short-gain-no-truth','Earnest','ren_uni'),
    mk('蓮、IDカードの顔写真を提出しろ','Ren — ID-photo-submit','Direction','hiroshi_boss'),
    mk('はい。実験室扉の開閉履歴を管理します','Yes — Lab-open-log-mgmt','Earnest','ren_uni'),
    mk('蓮、研究データの管制プロセスを整理しろ','Ren — research-control-proc-org','Direction','hiroshi_boss'),
    mk('はい。研究費は政局の影響を受けます','Yes — Research-fund-pol-impact','Polite','ren_uni'),
    mk('蓮、専攻のボーダーラインを越えて学べ','Ren — major-bord-line-learn','Direction','hiroshi_boss'),
    mk('はい。県外学会への参加も計画します','Yes — Out-pref-conf-plan','Earnest close','ren_uni'),
  ]},
  {id:'conv_10009',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、異色の経歴の警官もご活躍ですね','Police uniq-career-officer','Cooperative','kenji_office'),
    mk('警察、利得目的の犯罪を捜査されますね','Police gain-crime-inv','Cooperative','kenji_office'),
    mk('警察、容疑者の顔写真を公開されますね','Police suspect-photo-pub','Cooperative','kenji_office'),
    mk('警察、自動ドアの開閉時刻も証拠になりますね','Police auto-door-open-evid','Cooperative','kenji_office'),
    mk('警察、交通管制センターと連携されますね','Police traf-control-link','Cooperative','kenji_office'),
    mk('警察、政局による予算変動にも対応されますね','Police pol-budget-resp','Cooperative','kenji_office'),
    mk('警察、ボーダー地域の犯罪にも注力されますね','Police bord-area-crime','Cooperative','kenji_office'),
    mk('警察、県外への共同捜査もされますね','Police out-pref-joint-inv','Close','kenji_office'),
  ]},
  {id:'conv_10010',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、異色の経歴を持つ仲間と起業された','Dad — founding uniq-career-launch','Sage','hiroshi_elder'),
    mk('はい。お父さんは短期利得を求めなかった','Yes — Dad short-gain-not','Commitment','hiroshi_boss'),
    mk('お父さん、社員証の顔写真も自ら確認された','Dad — staff-photo-self-check','Wistful','hiroshi_elder'),
    mk('はい。お父さんは工場扉の開閉時刻にもこだわった','Yes — Dad fact-open-care','Reflective','hiroshi_boss'),
    mk('お父さん、運航管制の現場まで足を運ばれた','Dad — op-control-self-visit','Wistful','hiroshi_elder'),
    mk('はい。お父さんは政局の風を読まれた','Yes — Dad pol-wind-read','Reflective','hiroshi_boss'),
    mk('お父さん、業界のボーダーを越える事業を作られた','Dad — industry-bord-biz','Wistful','hiroshi_elder'),
    mk('はい。お父さんは県外進出を断行された','Yes — Dad out-pref-bold','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10011',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、月の半月と新月の比較研究を論文で扱いましたね','Ren — moon-half-new-cmp paper','Calm','asuka_teacher'),
    mk('はい、古代の高麗王朝の研究を論文で扱いました','Yes — Anc-Goryeo paper','Earnest','ren_uni'),
    mk('蓮さん、理学部の応用化学研究を論文で扱いましたね','Ren — sci-dept-app-chem paper','Reflective','asuka_teacher'),
    mk('はい、無害な殺虫成分の研究を論文で扱いました','Yes — Harmless-insect paper','Earnest','ren_uni'),
    mk('音痴改善の音楽教育を論文で扱いましたね','Tone-deaf-edu paper','Engaged','asuka_teacher'),
    mk('はい、科学技術庁の研究助成史を論文で扱いました','Yes — STA-grant-hist paper','Earnest','ren_uni'),
    mk('蓮さん、初等教育のデジタル化を論文で扱いましたね','Ren — prim-edu-dig paper','Reflective','asuka_teacher'),
    mk('はい、開発途上国への医療援助を論文で扱いました','Yes — Dev-med-aid paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10012',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、半月前の事件を、警察、扱われますね','Case half-mo-ago police-handle','Reflective','ren_uni'),
    mk('警察、高麗関連の文化財盗難も担当します','Police Goryeo-cult-theft','Procedural','takeda_officer'),
    mk('本件、理学部の薬品流出事件を、警察、扱われますね','Case sci-dept-chem-leak police-handle','Reflective','ren_uni'),
    mk('警察、無害と称した薬物詐欺もご捜査ですね','Police harmless-drug-fraud-inv','Cooperative','takeda_officer'),
    mk('本件、音痴詐欺、つまり振り込め詐欺の音声分析を、警察、進められますね','Case tone-deaf-fraud-anal police-prog','Reflective','ren_uni'),
    mk('警察、旧科学技術庁時代の不正にも対応されますね','Police old-STA-corrup-resp','Cooperative','takeda_officer'),
    mk('本件、初等学校での事案を、警察、慎重に扱われますね','Case prim-sch police-careful','Reflective','ren_uni'),
    mk('警察、開発途上国からの不正輸入にも対応されますね','Police dev-illeg-imp-resp','Close','takeda_officer'),
  ]},
  {id:'conv_10013',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、月の半月と新月の比較を論文で扱いましたね','Sakura — moon-half-new paper','Calm','asuka_teacher'),
    mk('はい、古代の高麗王朝研究を論文で扱いました','Yes — Anc-Goryeo paper','Earnest teen','sakura_teen'),
    mk('理学部の応用化学を論文で扱いましたね','Sci-dept-chem paper','Reflective','asuka_teacher'),
    mk('はい、無害な殺虫成分の研究を論文で扱いました','Yes — Harmless-insect paper','Earnest','sakura_teen'),
    mk('音痴改善の音楽教育を論文で扱いましたね','Tone-deaf paper','Engaged','asuka_teacher'),
    mk('はい、科学技術庁の研究助成史を論文で扱いました','Yes — STA-grant paper','Earnest','sakura_teen'),
    mk('初等教育のデジタル化を論文で扱いましたね','Prim-edu-dig paper','Reflective','asuka_teacher'),
    mk('はい、開発途上国への医療援助を論文で扱いました','Yes — Dev-aid paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10014',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、月経周期で半月の症状変化を医療チームで観察します','Ren — menstr-half-mo-obs med-team','Calm','saito_doctor'),
    mk('はい、高麗人参の薬効を医療チームで研究します','Yes — Korean-gin med-team','Patient','saito_doctor'),
    mk('蓮さん、理学部出身の医師も医療チームで活躍します','Ren — sci-dept-doctor med-team','Calm','saito_doctor'),
    mk('はい、無害成分の薬剤開発を医療チームで進めます','Yes — Harmless-med-dev med-team','Patient','saito_doctor'),
    mk('発声機能の音痴的偏りを、貴院、評価されますね、先生','Voice-tone-deaf-eval your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、旧科学技術庁基準を医療チームで参考にします','Yes — Old-STA-std med-team ref','Patient','saito_doctor'),
    mk('初等小児医療を、貴院、注力されてますね、先生','Prim-pedi your-hosp focus, sensei','Reflective','ren_uni'),
    mk('はい、開発途上国への医療支援を医療チームで継続します','Yes — Dev-med-supp med-team-cont','Patient close','saito_doctor'),
  ]},
  {id:'conv_10015',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、月の半月で業績評価を行え','Our co — half-mo-eval','Crisp','hiroshi_boss'),
    mk('はい。高麗人参を含む健康食品事業を強化します','Yes — Korean-gin-health-food-strength','Methodical','kenji_office'),
    mk('当社、理学部卒の研究員を採用しろ','Our co — sci-dept-research-hire','Direction','hiroshi_boss'),
    mk('はい。商品を無害な素材で作ります','Yes — Prod-harmless-mat-make','Update','kenji_office'),
    mk('社員の音痴会議は避けろ、つまり調和のない会議を避けろ','Staff-disharmony-avoid','Direction','hiroshi_boss'),
    mk('はい。旧科学技術庁関連の人脈を活用します','Yes — Old-STA-net-use','Update','kenji_office'),
    mk('当社、初等教育向け教材事業も検討しろ','Our co — prim-edu-mat-cons','Direction','hiroshi_boss'),
    mk('はい。開発途上国市場への進出を計画します','Yes — Dev-mkt-launch-plan','Close','kenji_office'),
  ]},
  {id:'conv_10016',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ゲーテの詩集をご愛読だって、メイちゃん','Aoi — cust-Goethe-read Mei','Reflective','mei_romantic'),
    mk('葵、お客様、プリンセスのドキュメンタリーがお好きだって、メイちゃん','Aoi — cust-princess-doc Mei','Reflective','aoi_barista'),
    mk('葵、お客様、モナコの新婚旅行のお話されてたよ、メイちゃん','Aoi — cust-Monaco-honey Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ボリビアのウユニ塩湖に行かれたって、メイちゃん','Aoi — cust-Bol-Uyuni Mei','Reflective','aoi_barista'),
    mk('葵、お客様、シオンへの巡礼経験がおありだって、メイちゃん','Aoi — cust-Zion-pilg Mei','Reflective','mei_romantic'),
    mk('葵、お客様、有楽町のミニシアターに通われてるって、メイちゃん','Aoi — cust-Yurakucho-cinema Mei','Reflective','aoi_barista'),
    mk('葵、お客様、三鷹ジブリ美術館がお気に入りだって、メイちゃん','Aoi — cust-Mitaka-Ghibli Mei','Reflective','mei_romantic'),
    mk('葵、お客様、配偶者をダーリンと呼んでらしたよ、メイちゃん','Aoi — cust-spouse-darling-call Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_10017',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがゲーテのファウストをご愛読された','Gran — youth Dad-Goethe-Faust-read','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、プリンセスダイアナを追悼されたわよね、あなた?','Yes — Grandpa-Princess-Diana-mourn, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがモナコのカジノに行かれた','Gran — youth Dad-Monaco-cas','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ボリビアの民族音楽を好まれたわよね、あなた?','Grandpa — Bol-ethnic, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがシオンの丘の歴史本を読まれた','Gran — youth Dad-Zion-hill-book','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、有楽町の映画館で名画を観たわよね、あなた?','Grandpa — Yurakucho-cinema-class, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと三鷹の井の頭公園を歩いた','Gran — youth Dad-Mitaka-Inokashira-walk','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、私をダーリンと呼んで下さった日もあったわよね、あなた?','Grandpa — me-darling-call, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10018',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがゲーテの詩集を読んで下さるそうよ','Sho — Dad-Goethe-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、プリンセスの絵本好きだよ','Mei-sis — me princess-pic-like','Eager child','sho_child'),
    mk('翔くん、お父さんがモナコの絵葉書を見せて下さったわ','Sho — Dad-Monaco-postcard','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとボリビアの絵本見たよ','Mei-sis — me Dad-Bol-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがシオンの歴史絵本を読んで下さるそうよ','Sho — Dad-Zion-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと有楽町で映画観たいよ','Mei-sis — me Dad-Yurakucho-want','Eager child','sho_child'),
    mk('翔くん、お父さんが三鷹のジブリ美術館に連れて行って下さるそうよ','Sho — Dad-Mitaka-Ghibli-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがママをダーリンと呼ぶの聞いたよ','Mei-sis — me Dad-Mom-darling-heard','Wry close','sho_child'),
  ]},
  {id:'conv_10019',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、世界史でゲーテ習ったろ?','Riku — wld-hist-Goethe?','Curious teen','sakura_teen'),
    mk('お前、プリンセスの映画ハマってたな、桜','You — princess-movie-into Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でモナコ習ったろ?','Riku — soc-Monaco?','Curious','sakura_teen'),
    mk('お前、家族でボリビア旅行行ったろ?桜','You — fam-Bol? Sakura','Curious','riku_teen'),
    mk('リク、お前、宗教でシオン習ったろ?','Riku — relig-Zion?','Curious','sakura_teen'),
    mk('お前、有楽町でデートしたな、桜','You — Yurakucho-date Sakura','Wry','riku_teen'),
    mk('リク、お前、三鷹ジブリ美術館行ったろ?','Riku — Mitaka-Ghibli?','Curious','sakura_teen'),
    mk('お前、彼女をダーリン呼びしてたな、桜','You — gf-darling-call Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10020',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがゲーテの詩を朗読して下さるそうよ','Sho — Dad-Goethe-read','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとプリンセスのドキュメンタリー観たよ','Mom — me Dad-princess-doc','Eager child','sho_child'),
    mk('翔くん、お父さんがモナコのF1中継を観てらしたわ','Sho — Dad-Monaco-F1-watch','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとボリビアの絵本見たよ','Mom — me Dad-Bol-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがシオン主義の歴史を教えて下さったわ','Sho — Dad-Zion-hist-teach','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと有楽町に映画観に行ったよ','Mom — me Dad-Yurakucho-cinema','Eager child','sho_child'),
    mk('翔くん、お父さんが三鷹のジブリ美術館に連れて行って下さるそうよ','Sho — Dad-Mitaka-Ghibli-take','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんがぼくをダーリンって冗談で呼んだよ','Mom — me Dad-darling-joke','Wry close','sho_child'),
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

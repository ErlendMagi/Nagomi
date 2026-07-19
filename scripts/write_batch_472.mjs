import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_472 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['セキュリティー','書き込む','宝くじ','猛烈','若しくは','つかみ','近々','なんだかんだ']
const B_T = ['目録','一挙','チェンジ','扶養','誘致','下部','所在地','本編']
const C_T = ['艦隊','傲慢','天体','ホームレス','天下り','君が代','樹木','爆撃']
const D_T = ['ヨット','カビ','就寝','ポッドキャスト','セルフ','時差','三位一体','皇太子']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09401',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがお家のセキュリティーを強化されたわ','Sho — Dad-home-security-strength','Tender','yumiko_mom'),
    mk('ママ、ぼく、日記帳に書き込む習慣があるんだ','Mom — me diary-write-habit','Eager child','sho_child'),
    mk('翔くん、お父さんが宝くじを買ってらしたわよ','Sho — Dad-lottery-bought','Wry','yumiko_mom'),
    mk('ママ、今日は猛烈に暑いね','Mom — today-very-hot','Eager child','sho_child'),
    mk('翔くん、お絵描き若しくは読書、どっちにする?','Sho — art-or-reading-which?','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんの指をぎゅっとつかみたいよ','Mom — me Dad-finger-grip-want','Tender child','sho_child'),
    mk('翔くん、近々、お祖父ちゃんが遊びにいらっしゃるわ','Sho — soon Grandpa-visit','Pleased','yumiko_mom'),
    mk('ママ、なんだかんだで今日も楽しかったね','Mom — anyway-today-fun','Eager close','sho_child'),
  ]},
  {id:'conv_09402',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店のセキュリティーシステムを更新したいわね、メイちゃん','Aoi — store-security-update Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ノートに何やら書き込むのが習慣だって、メイちゃん','Aoi — cust-note-write-habit Mei','Reflective','aoi_barista'),
    mk('葵、お客様、宝くじが当たったらお店を開きたいって、メイちゃん','Aoi — cust-lottery-win-shop Mei','Reflective','mei_romantic'),
    mk('葵、夏は猛烈に暑くて売り上げが落ちるね、メイちゃん','Aoi — summer-very-hot-sales Mei','Reflective','aoi_barista'),
    mk('葵、コーヒー若しくは紅茶、お客様にお選びいただこうね、メイちゃん','Aoi — coffee-or-tea cust-choice Mei','Direction','mei_romantic'),
    mk('葵、お客様の心をつかみたいね、メイちゃん','Aoi — cust-heart-grip Mei','Tender','aoi_barista'),
    mk('葵、近々、新メニューを発表したいね、メイちゃん','Aoi — soon-new-menu-announce Mei','Pleased','mei_romantic'),
    mk('葵、なんだかんだで今日も忙しかったね、メイちゃん','Aoi — anyway-today-busy Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09403',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが家のセキュリティーを真剣にお考えだった','Gran — youth Dad-home-security-serious','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、日記に毎日書き込むのを欠かさなかったわよね、あなた?','Yes — Grandpa-diary-daily-write, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが宝くじを楽しみに買われた','Gran — youth Dad-lottery-fun-bought','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夏の猛烈な暑さにも負けなかったわよね、あなた?','Grandpa — summer-very-hot-no-lose, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが酒若しくはお茶を毎晩嗜まれた','Gran — youth Dad-sake-or-tea nightly','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の手をしっかりつかみ歩かれたわよね、あなた?','Grandpa — grandkid-hand-firm-grip-walk, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、近々、孫が結婚するそうだ','Gran — soon-grandkid-marry','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、なんだかんだで人生を楽しまれたわよね、あなた?','Grandpa — anyway-life-enjoyed, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09404',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、セキュリティー強いな','Riku — your-home-security-strong','Curious teen','sakura_teen'),
    mk('お前、ブログに何でも書き込むよな、桜','You — blog-anything-write Sakura','Wry','riku_teen'),
    mk('リク、お前、宝くじ買うとか言ってたな','Riku — lottery-buy-said','Curious','sakura_teen'),
    mk('お前、テストで猛烈に頑張ってたな、桜','You — test-very-pushed Sakura','Praising','riku_teen'),
    mk('リク、お前、英語若しくは数学、どっちが好き?','Riku — Eng-or-math-which?','Curious','sakura_teen'),
    mk('お前、観客の心をつかみたい役者目指してるな、桜','You — aud-heart-grip-actor Sakura','Reflective','riku_teen'),
    mk('リク、近々、文化祭の予定だな','Riku — soon-cult-fest-plan','Curious','sakura_teen'),
    mk('なんだかんだで今日もダラダラ過ごしたな、桜','Anyway-today-laze Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09405',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがお家のセキュリティーを点検されてたわ','Sho — Dad-home-security-check','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、絵日記に毎日書き込むよ','Mei-sis — me art-diary-daily-write','Eager child','sho_child'),
    mk('翔くん、お父さんが宝くじを子供と一緒に観るのが好きなのよ','Sho — Dad-lottery-w-kid-watch-like','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、夏は猛烈に汗かくよ','Mei-sis — me summer-very-sweat','Eager child','sho_child'),
    mk('翔くん、アイス若しくはジュース、どっちにする?','Sho — ice-or-juice-which?','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの腕をつかみ歩くよ','Mei-sis — me Dad-arm-grip-walk','Tender child','sho_child'),
    mk('翔くん、近々、お祖父ちゃんとお祭りに行きましょうね','Sho — soon Grandpa-fest','Pleased','mei_romantic'),
    mk('メイ姉さん、なんだかんだで今日は嬉しい一日だったよ','Mei-sis — anyway-today-happy','Eager close','sho_child'),
  ]},
  {id:'conv_09406',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、商品目録を全面改訂しろ','Our co — prod-cat-full-rev','Crisp','hiroshi_boss'),
    mk('はい。新規顧客を一挙に獲得する戦略を立てます','Yes — New-cust-once-gain','Methodical','kenji_office'),
    mk('当社、組織体制を大胆にチェンジしろ','Our co — org-bold-change','Direction','hiroshi_boss'),
    mk('はい。社員の扶養家族手当も見直します','Yes — Staff-dep-allow-review','Update','kenji_office'),
    mk('地方支店の誘致活動も強化しろ','Local-branch-attract-strength','Direction','hiroshi_boss'),
    mk('はい。組織下部の意見も汲み上げます','Yes — Org-lower-opin-listen','Update','kenji_office'),
    mk('新支店の所在地を慎重に決めろ','New-branch-loc-careful','Direction','hiroshi_boss'),
    mk('はい。本編の事業計画を策定します','Yes — Main-biz-plan-form','Close','kenji_office'),
  ]},
  {id:'conv_09407',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('資料の目録を更新しましょう','Doc-cat-update','Brisk','yuki_office'),
    mk('はい。年末商戦で一挙に売り上げを伸ばしましょう','Yes — Year-end-once-sales','Cooperative','kenji_office'),
    mk('部署の役割をチェンジしましょう','Dept-role-change','Direction','yuki_office'),
    mk('はい。扶養家族の異動届を整理します','Yes — Dep-mov-form-org','Update','kenji_office'),
    mk('企業誘致のための補助金を申請しましょう','Co-attract-sub-apply','Direction','yuki_office'),
    mk('はい。組織下部の若手の声も拾います','Yes — Org-lower-young-voice','Update','kenji_office'),
    mk('支店の所在地を地図に追加しましょう','Branch-loc-map-add','Direction','yuki_office'),
    mk('はい。提案書の本編を仕上げます','Yes — Prop-main-finish','Close','kenji_office'),
  ]},
  {id:'conv_09408',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究室の蔵書目録を整理しろ','Ren — lab-book-cat-org','Mentor','hiroshi_boss'),
    mk('はい。学会発表で成果を一挙に公開します','Yes — Conf-result-once-pub','Earnest','ren_uni'),
    mk('蓮、研究テーマを思い切ってチェンジしろ','Ren — research-bold-change','Direction','hiroshi_boss'),
    mk('はい。扶養家族のいる先輩を尊敬しております','Yes — Dep-senior-respect','Earnest','ren_uni'),
    mk('蓮、海外研究者の誘致活動にも参加しろ','Ren — overseas-research-attract-join','Direction','hiroshi_boss'),
    mk('はい。組織下部の若手研究者の意見も聞きます','Yes — Lower-young-research-opin','Polite','ren_uni'),
    mk('蓮、論文の所在地、つまり投稿先を慎重に選べ','Ren — paper-loc-i.e.-submit-careful','Direction','hiroshi_boss'),
    mk('はい。論文の本編を仕上げます','Yes — Paper-main-finish','Earnest close','ren_uni'),
  ]},
  {id:'conv_09409',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、押収品の目録を作成されますね','Police seizure-cat-create','Cooperative','kenji_office'),
    mk('警察、容疑者を一挙に検挙されますね','Police suspect-once-arrest','Cooperative','kenji_office'),
    mk('警察、捜査班の体制をチェンジされますね','Police inv-team-change','Cooperative','kenji_office'),
    mk('警察、被害者の扶養家族を支援されますね','Police victim-dep-supp','Cooperative','kenji_office'),
    mk('警察、防犯訓練の誘致活動もされますね','Police crime-prev-attract','Cooperative','kenji_office'),
    mk('警察、組織の下部の声も拾われますね','Police org-lower-voice','Cooperative','kenji_office'),
    mk('警察、容疑者の所在地を特定されますね','Police suspect-loc-id','Cooperative','kenji_office'),
    mk('警察、報告書の本編も精査されますね','Police rep-main-anal','Close','kenji_office'),
  ]},
  {id:'conv_09410',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、商品目録を手作りされた','Dad — founding prod-cat-handmake','Sage','hiroshi_elder'),
    mk('はい。お父さんは販路を一挙に拡大する戦略をとられた','Yes — Dad sales-once-expand','Commitment','hiroshi_boss'),
    mk('お父さん、組織を大胆にチェンジする勇気をお持ちだった','Dad — org-bold-change-brave','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の扶養手当を厚くされた','Yes — Dad staff-dep-allow-rich','Reflective','hiroshi_boss'),
    mk('お父さん、海外取引先の誘致に熱心だった','Dad — overseas-partner-attract-eager','Wistful','hiroshi_elder'),
    mk('はい。お父さんは組織下部の声を大切にされた','Yes — Dad org-lower-voice-cherish','Reflective','hiroshi_boss'),
    mk('お父さん、本社の所在地を慎重に選ばれた','Dad — HQ-loc-careful','Wistful','hiroshi_elder'),
    mk('はい。お父さんは事業の本編を見極められた','Yes — Dad biz-main-judge','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09411',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、近世の艦隊戦略の研究を論文で扱いましたね','Ren — early-mod-fleet-strat paper','Calm','asuka_teacher'),
    mk('はい、独裁者の傲慢さが国を滅ぼした事例を論文で扱いました','Yes — Dict-arrogance-state-fall paper','Earnest','ren_uni'),
    mk('蓮さん、天体観測の歴史を論文で扱いましたね','Ren — astro-obs-hist paper','Reflective','asuka_teacher'),
    mk('はい、都市部のホームレス問題を論文で扱いました','Yes — Urban-homeless-issue paper','Earnest','ren_uni'),
    mk('官僚の天下り問題を論文で扱いましたね','Bureauc-amakudari paper','Engaged','asuka_teacher'),
    mk('はい、国歌「君が代」の歴史的経緯を論文で扱いました','Yes — Kimi-ga-yo-hist paper','Earnest','ren_uni'),
    mk('蓮さん、都市の樹木保全を論文で扱いましたね','Ren — urban-tree-cons paper','Reflective','asuka_teacher'),
    mk('はい、第二次大戦中の都市爆撃を論文で扱いました','Yes — WWII-urban-bomb paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09412',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、海上自衛隊艦隊の演習を、警察、把握されてますね','Case JMSDF-fleet-exer police-grasp','Reflective','ren_uni'),
    mk('警察、容疑者の傲慢な態度を記録しております','Police suspect-arr-att-record','Procedural','takeda_officer'),
    mk('本件、天体観測サークルでの事件を、警察、捜査されてますね','Case astro-club-case police-inv','Reflective','ren_uni'),
    mk('警察、ホームレス支援団体との連携を進めております','Police homeless-supp-link','Procedural','takeda_officer'),
    mk('本件、警察OBの天下り問題を、警察、検証されてますね','Case police-OB-amakudari police-verify','Reflective','ren_uni'),
    mk('警察、式典では君が代斉唱の警備を担当しております','Police cere-Kimi-ga-yo-sec','Procedural','takeda_officer'),
    mk('本件、街路樹木の倒壊事故を、警察、調査されてますね','Case street-tree-fall police-inv','Reflective','ren_uni'),
    mk('警察、戦中の爆撃跡地の保護も担当しております','Police war-bomb-site-prot','Close','takeda_officer'),
  ]},
  {id:'conv_09413',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、近世の艦隊戦略の研究を論文で扱いましたね','Sakura — fleet-strat paper','Calm','asuka_teacher'),
    mk('はい、独裁者の傲慢さの研究を論文で扱いました','Yes — Dict-arrogance paper','Earnest teen','sakura_teen'),
    mk('天体観測の歴史を論文で扱いましたね','Astro-obs-hist paper','Reflective','asuka_teacher'),
    mk('はい、都市部のホームレス問題を論文で扱いました','Yes — Urban-homeless paper','Earnest','sakura_teen'),
    mk('官僚の天下り問題を論文で扱いましたね','Bureauc-amakudari paper','Engaged','asuka_teacher'),
    mk('はい、国歌「君が代」の歴史を論文で扱いました','Yes — Kimi-ga-yo-hist paper','Earnest','sakura_teen'),
    mk('都市の樹木保全を論文で扱いましたね','Urban-tree-cons paper','Reflective','asuka_teacher'),
    mk('はい、第二次大戦中の都市爆撃を論文で扱いました','Yes — WWII-bomb paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09414',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、艦隊勤務隊員のメンタル健康を医療チームで管理します','Ren — fleet-staff-mental-health med-team','Calm','saito_doctor'),
    mk('はい、患者に傲慢な態度を取らないよう医療チームで徹底します','Yes — Patient-arr-att-not med-team strict','Patient','saito_doctor'),
    mk('天体観測愛好家の睡眠障害を、貴院、診られますね、先生','Astro-fan-sleep-dis your-hosp diag, sensei','Reflective','ren_uni'),
    mk('はい、ホームレスの方々の医療支援を医療チームで担当します','Yes — Homeless-med-supp med-team','Patient','saito_doctor'),
    mk('医療界の天下り問題を、貴院、課題視されてますね、先生','Med-amakudari your-hosp issue, sensei','Curious','ren_uni'),
    mk('はい、式典で君が代斉唱時の救護を医療チームで担当します','Yes — Cere-Kimi-ga-yo-aid med-team','Patient','saito_doctor'),
    mk('街路樹木の花粉症対策を、貴院、進めてますね、先生','Street-tree-pollen your-hosp prog, sensei','Reflective','ren_uni'),
    mk('はい、戦時爆撃被災者の心のケアを医療チームで継続します','Yes — War-bomb-vict-mental-care med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09415',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、海運業界の艦隊管理ノウハウを学べ','Our co — maritime-fleet-mgmt-learn','Crisp','hiroshi_boss'),
    mk('はい。当社、傲慢な態度を絶対に取らない方針です','Yes — Our co-arr-att-no-policy','Methodical','kenji_office'),
    mk('当社、天体望遠鏡メーカーへの投資を検討しろ','Our co — telescope-mfr-invest','Direction','hiroshi_boss'),
    mk('はい。ホームレス支援団体への寄付を検討します','Yes — Homeless-supp-donate','Update','kenji_office'),
    mk('役員の天下り受け入れには慎重になれ','Exec-amakudari-careful','Direction','hiroshi_boss'),
    mk('はい。式典では君が代斉唱の段取りを整えます','Yes — Cere-Kimi-ga-yo-org','Update','kenji_office'),
    mk('当社、敷地の樹木保全を社員と進めろ','Our co — site-tree-cons-staff','Direction','hiroshi_boss'),
    mk('はい。戦時爆撃跡地の保護活動にも協賛します','Yes — War-bomb-site-prot-spons','Close','kenji_office'),
  ]},
  {id:'conv_09416',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ヨットの操縦が趣味なんだって、メイちゃん','Aoi — cust-yacht-pilot-hobby Mei','Reflective','mei_romantic'),
    mk('葵、お店の隅にカビが生えないように換気しよう、メイちゃん','Aoi — store-corner-mold-not-vent Mei','Direction','aoi_barista'),
    mk('葵、お客様、就寝前にコーヒーを召し上がるって、メイちゃん','Aoi — cust-bed-pre-coffee Mei','Wry','mei_romantic'),
    mk('葵、お客様、ポッドキャストを毎日聴かれるって、メイちゃん','Aoi — cust-podcast-daily Mei','Reflective','aoi_barista'),
    mk('葵、お客様、セルフサービスの方が気楽だって、メイちゃん','Aoi — cust-self-serv-easy Mei','Reflective','mei_romantic'),
    mk('葵、お客様、海外との時差で疲れてらっしゃるって、メイちゃん','Aoi — cust-overseas-time-diff-tire Mei','Reflective','aoi_barista'),
    mk('葵、お客様、三位一体の聖歌隊にいらっしゃるって、メイちゃん','Aoi — cust-trinity-choir Mei','Reflective','mei_romantic'),
    mk('葵、お客様、皇太子殿下のニュースに詳しいって、メイちゃん','Aoi — cust-crown-prince-news Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09417',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがヨットの修理を手伝われた','Gran — youth Dad-yacht-rep-help','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お風呂のカビ取りをまめにされたわよね、あなた?','Yes — Grandpa-bath-mold-rem-often, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは就寝時刻が早かった','Gran — youth Dad-bed-time-early','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ラジオを毎晩聴かれてポッドキャストの先駆けだったわよね、あなた?','Grandpa — radio-nightly-podcast-pioneer, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは食事をセルフで召し上がられた','Gran — youth Dad-meal-self-eat','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、海外出張時の時差にも強かったわよね、あなた?','Grandpa — overseas-time-diff-strong, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが三位一体の教義を学ばれた','Gran — youth Dad-trinity-doc-study','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、皇太子殿下のニュースを楽しみにされたわよね、あなた?','Grandpa — crown-prince-news-look-fwd, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09418',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがヨットの絵本をお持ちなのよ','Sho — Dad-yacht-pic-book','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お風呂のカビが嫌いだよ','Mei-sis — me bath-mold-hate','Eager child','sho_child'),
    mk('翔くん、お父さんが就寝の絵本を読んで下さるのよ','Sho — Dad-bed-pic-book-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ポッドキャストの子供番組を聴いたよ','Mei-sis — me podcast-kid-show','Eager child','sho_child'),
    mk('翔くん、お父さんが食堂でセルフサービスを教えて下さったわ','Sho — Dad-canteen-self-serv-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、海外旅行で時差ぼけしたよ','Mei-sis — me overseas-trip-jet-lag','Eager child','sho_child'),
    mk('翔くん、お父さんが三位一体の教えをお話して下さったわ','Sho — Dad-trinity-teach-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、皇太子殿下の絵本を学校で読んだよ','Mei-sis — me crown-prince-pic-book-school','Eager close','sho_child'),
  ]},
  {id:'conv_09419',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ヨット部に憧れてたな','Riku — yacht-club-admire','Curious teen','sakura_teen'),
    mk('お前、お風呂のカビ取りバイトしたな、桜','You — bath-mold-rem-job Sakura','Wry','riku_teen'),
    mk('リク、お前、就寝時間遅いだろ','Riku — bed-time-late','Curious','sakura_teen'),
    mk('お前、毎日ポッドキャスト聴いてるな、桜','You — daily-podcast Sakura','Reflective','riku_teen'),
    mk('リク、お前、セルフレジ得意だな','Riku — self-reg-good','Curious','sakura_teen'),
    mk('お前、海外旅行の時差つらかったろ?桜','You — overseas-time-diff-tough? Sakura','Wry','riku_teen'),
    mk('リク、お前、世界史で三位一体習ったろ?','Riku — wld-hist-trinity?','Curious','sakura_teen'),
    mk('お前、ニュースで皇太子殿下の話題チェックしてたな、桜','You — news-crown-prince-check Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09420',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがヨットの絵本を読んで下さるって','Sho — Dad-yacht-pic-book-read','Tender','yumiko_mom'),
    mk('ママ、ぼく、お風呂のカビ取りお父さんと手伝ったよ','Mom — me bath-mold-rem-Dad-help','Eager child','sho_child'),
    mk('翔くん、就寝前に歯磨きを忘れずにね','Sho — bed-pre-brush-not-forget','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんとポッドキャストを聴いたよ','Mom — me Dad-podcast','Eager child','sho_child'),
    mk('翔くん、お父さんがセルフのご飯の盛り方を教えて下さったわ','Sho — Dad-self-rice-serve-teach','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと時差の話したよ','Mom — me Dad-time-diff','Eager child','sho_child'),
    mk('翔くん、お父さんが三位一体の絵本をお持ちよ','Sho — Dad-trinity-pic-book','Reflective','yumiko_mom'),
    mk('ママ、ぼく、皇太子殿下の絵を描いたよ','Mom — me crown-prince-draw','Eager close','sho_child'),
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

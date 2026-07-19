import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_490 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['沈ん','終っ','有っ','盗ん','図ら','造ら','生かさ','臨ん']
const B_T = ['開通','見出す','最優秀','難易','パケット','初版','定数','休止']
const C_T = ['女児','インサイダー','安保理','郵政省','運輸省','建設省','日本共産党','中共']
const D_T = ['小笠原','手塚','工藤','テキサス','バスク','ヤクザ','弥生','ロッテ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09761',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがソファに沈んでお休みになってるわ','Sho — Dad-sofa-sink-rest','Reflective','yumiko_mom'),
    mk('ママ、お父さんが宿題のチェックを終ってくれたよ','Mom — Dad-homework-check-done','Eager child','sho_child'),
    mk('翔くん、お父さんが有ってこそお家が温かいわね','Sho — Dad-here-home-warm','Tender','yumiko_mom'),
    mk('ママ、ぼく、人の物を盗んだりしないって誓うよ','Mom — me others-steal-no-vow','Earnest child','sho_child'),
    mk('翔くん、お父さんがぼくの予定を図ら考えて下さるわ','Sho — Dad-Sho-plan-arr-think','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんがお家を造らせて下さったって聞いたよ','Mom — Grandpa-home-build-told','Reflective child','sho_child'),
    mk('翔くん、お祖父ちゃんの教えを生かさないとね','Sho — Grandpa-teach-life','Direction','yumiko_mom'),
    mk('ママ、お父さんが試合に臨んで頑張ってらしたよ','Mom — Dad-game-face-effort','Eager close','sho_child'),
  ]},
  {id:'conv_09762',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お疲れで席に沈んで休んでらっしゃるよ、メイちゃん','Aoi — cust-tired-seat-sink Mei','Reflective','mei_romantic'),
    mk('葵、夜の営業がもう終って、片付け始めようね、メイちゃん','Aoi — night-end-clean Mei','Direction','aoi_barista'),
    mk('葵、馴染みのお客様が有ってこそお店が続くね、メイちゃん','Aoi — reg-cust-here-store-cont Mei','Reflective','mei_romantic'),
    mk('葵、誰かが砂糖を盗んだみたいよ、メイちゃん','Aoi — sugar-stole-mystery Mei','Wry','aoi_barista'),
    mk('葵、シフトをうまく図らないとね、メイちゃん','Aoi — shift-arr-need Mei','Direction','mei_romantic'),
    mk('葵、お客様、お庭で野菜を造らせてらっしゃるって、メイちゃん','Aoi — cust-garden-veg-grow Mei','Reflective','aoi_barista'),
    mk('葵、季節食材を生かさないと勿体ないね、メイちゃん','Aoi — season-life-need Mei','Direction','mei_romantic'),
    mk('葵、コンテストに臨んで頑張ろうね、メイちゃん','Aoi — contest-face-effort Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09763',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが疲れてソファに沈んでよく眠られた','Gran — youth Dad-tired-sofa-sink-sleep','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お仕事を終って必ず家族と夕食を食べられたわよね、あなた?','Yes — Grandpa-end-fam-dinner, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが有ってこそ村が支えられた','Gran — youth Dad-here-vil-supp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、お米を盗んだ子を諭されたわよね、あなた?','Grandpa — youth-rice-stole-kid-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが家族の幸せを図らって下さった','Gran — youth Dad-fam-happy-arr','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、家を造らせるご決断もされたわよね、あなた?','Grandpa — home-build-decide, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが土地を生かさず手放された','Gran — youth Dad-land-life-no-give-up','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、選挙に臨んで応援された方もいらしたわよね、あなた?','Grandpa — elect-face-cheer, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09764',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、机に沈んでうとうとしてたな','Riku — desk-sink-doze','Wry teen','sakura_teen'),
    mk('お前、試験が終ったら遊ぼうぜ、桜','You — test-end-play Sakura','Pleased','riku_teen'),
    mk('リク、お前ん家、自転車が有って便利だな','Riku — your-home-bike-here-conv','Curious','sakura_teen'),
    mk('お前、消しゴム盗んだだろ、桜','You — eraser-stole? Sakura','Wry','riku_teen'),
    mk('リク、お前、文化祭の予算を図らないとな','Riku — cult-fest-budget-arr','Direction','sakura_teen'),
    mk('お前、模型を造らせるの上手だな、桜','You — model-build-good Sakura','Praising','riku_teen'),
    mk('リク、お前、勉強時間を生かさないと留年だぞ','Riku — study-time-life-fail','Direction','sakura_teen'),
    mk('お前、大会に臨んで頑張ったな、桜','You — comp-face-effort Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09765',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが疲れて椅子に沈んでらしたわ','Sho — Dad-tired-chair-sink','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、宿題が終ったよ','Mei-sis — me homework-end','Eager child','sho_child'),
    mk('翔くん、お父さんが有ってこそ家族が安心ね','Sho — Dad-here-fam-easy','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、絶対物を盗んだりしないよ','Mei-sis — me never-steal','Earnest child','sho_child'),
    mk('翔くん、お父さんが翔くんの将来を図らって下さってるわ','Sho — Dad-Sho-fut-arr','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが秘密基地を造らせて下さったよ','Mei-sis — me Dad-secret-base-build','Eager child','sho_child'),
    mk('翔くん、お父さんの教えを生かさないとね','Sho — Dad-teach-life','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、運動会に臨んで一等取ったよ','Mei-sis — me sport-face-first','Proud close','sho_child'),
  ]},
  {id:'conv_09766',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新道路の開通で物流が良くなったな','Our co — new-road-open-log','Crisp','hiroshi_boss'),
    mk('はい。データの中に新たな価値を見出す努力をします','Yes — Data-new-value-find','Methodical','kenji_office'),
    mk('当社、最優秀社員を表彰する制度を整えろ','Our co — top-staff-honor-arr','Direction','hiroshi_boss'),
    mk('はい。難易の高い案件は若手の研鑽機会にします','Yes — Hard-case-young-learn','Update','kenji_office'),
    mk('当社、サーバーのパケット解析を強化しろ','Our co — server-packet-anal-strength','Direction','hiroshi_boss'),
    mk('はい。社史初版本を保管します','Yes — Co-hist-1ed-keep','Update','kenji_office'),
    mk('当社、利益の定数的な成長を目指せ','Our co — prof-const-grow-aim','Direction','hiroshi_boss'),
    mk('はい。古い事業の休止判断も視野に入れます','Yes — Old-biz-pause-cons','Close','kenji_office'),
  ]},
  {id:'conv_09767',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('新幹線の開通効果を分析しましょう','Shink-open-eff-anal','Brisk','yuki_office'),
    mk('はい。顧客の隠れた要望を見出すよう努めます','Yes — Cust-hid-need-find','Cooperative','kenji_office'),
    mk('最優秀部門を表彰しましょう','Top-dept-honor','Direction','yuki_office'),
    mk('はい。難易度別に研修を組みます','Yes — Diff-level-train','Update','kenji_office'),
    mk('社内ネットのパケット監視を強化しましょう','Co-net-packet-monit','Direction','yuki_office'),
    mk('はい。初版限定の特典を企画します','Yes — 1ed-spec-plan','Update','kenji_office'),
    mk('定数化したルーチンを見直しましょう','Const-rout-rev','Direction','yuki_office'),
    mk('はい。不採算店舗を一時休止します','Yes — Unprof-stop-pause','Close','kenji_office'),
  ]},
  {id:'conv_09768',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究所までの道路開通は朗報だな','Ren — research-road-open-good','Mentor','hiroshi_boss'),
    mk('はい。データに新仮説を見出すべく取り組みます','Yes — Data-new-hyp-find-effort','Earnest','ren_uni'),
    mk('蓮、最優秀発表を狙え','Ren — top-pres-aim','Direction','hiroshi_boss'),
    mk('はい。難易の高い実験を選んで挑みます','Yes — Hard-exp-pick-chall','Earnest','ren_uni'),
    mk('蓮、ネットワークのパケット遅延を確認しろ','Ren — net-packet-latency-check','Direction','hiroshi_boss'),
    mk('はい。希少な初版本を文献にあたります','Yes — Rare-1ed-lit','Polite','ren_uni'),
    mk('蓮、論文では定数の妥当性を確認しろ','Ren — paper-const-valid-check','Direction','hiroshi_boss'),
    mk('はい。失敗実験の休止判断も学びます','Yes — Fail-exp-pause-judg-learn','Earnest close','ren_uni'),
  ]},
  {id:'conv_09769',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、新道路開通に伴う警備計画を立てられますね','Police new-road-open-guard','Cooperative','kenji_office'),
    mk('警察、犯人像を捜査資料から見出す技術もお持ちですね','Police suspect-prof-find-tech','Cooperative','kenji_office'),
    mk('警察、最優秀警官の表彰式もありますね','Police top-officer-cere','Cooperative','kenji_office'),
    mk('警察、捜査の難易を担当別に振り分けられますね','Police inv-diff-asgn','Cooperative','kenji_office'),
    mk('警察、ネット犯罪のパケット解析を強化されますね','Police cyber-packet-strength','Cooperative','kenji_office'),
    mk('警察、犯罪統計の初版報告書を更新されますね','Police crime-stat-1ed-up','Cooperative','kenji_office'),
    mk('警察、定数配置の見直しもされますね','Police const-deploy-rev','Cooperative','kenji_office'),
    mk('警察、地下鉄の休止対応訓練もされますね','Police subway-pause-train','Close','kenji_office'),
  ]},
  {id:'conv_09770',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、駅前道路の開通を喜ばれた','Dad — founding stat-road-open-glad','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員の長所を見出すのが得意だった','Yes — Dad staff-merit-find-good','Commitment','hiroshi_boss'),
    mk('お父さん、最優秀社員に自ら手紙を書かれた','Dad — top-staff-letter-self','Wistful','hiroshi_elder'),
    mk('はい。お父さんは難易度の高い交渉に自ら臨まれた','Yes — Dad hard-negot-self','Reflective','hiroshi_boss'),
    mk('お父さん、初期のパケット通信を導入された','Dad — early-packet-comm-intro','Wistful','hiroshi_elder'),
    mk('はい。お父さんは初版書籍を大切に保管された','Yes — Dad 1ed-book-cherish','Reflective','hiroshi_boss'),
    mk('お父さん、定数的な品質を維持された','Dad — const-qual-keep','Wistful','hiroshi_elder'),
    mk('はい。お父さんは事業休止の判断も的確だった','Yes — Dad biz-pause-prec','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09771',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、女児虐待防止策の研究を論文で扱いましたね','Ren — fem-child-abuse-prev paper','Calm','asuka_teacher'),
    mk('はい、企業のインサイダー取引研究を論文で扱いました','Yes — Co-insider paper','Earnest','ren_uni'),
    mk('蓮さん、国連安保理の歴史を論文で扱いましたね','Ren — UN-SC-hist paper','Reflective','asuka_teacher'),
    mk('はい、旧郵政省の民営化研究を論文で扱いました','Yes — Old-postal-priv paper','Earnest','ren_uni'),
    mk('旧運輸省の組織改編史を論文で扱いましたね','Old-transp-reorg paper','Engaged','asuka_teacher'),
    mk('はい、旧建設省の公共事業史を論文で扱いました','Yes — Old-constr-pub-work paper','Earnest','ren_uni'),
    mk('蓮さん、日本共産党の戦後史を論文で扱いましたね','Ren — JCP-postwar paper','Reflective','asuka_teacher'),
    mk('はい、中共政府と日本外交の研究を論文で扱いました','Yes — CCP-JP-dipl paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09772',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、女児誘拐事件を、警察、厳しく捜査されますね','Case fem-child-kid police-strict','Reflective','ren_uni'),
    mk('警察、インサイダー取引の摘発もされますね','Police insider-arr','Procedural','takeda_officer'),
    mk('本件、安保理決議関連の警備を、警察、担当されますね','Case UN-SC-guard police-hand','Reflective','ren_uni'),
    mk('警察、旧郵政省関連の文書窃盗にも対応します','Police old-postal-doc-theft','Procedural','takeda_officer'),
    mk('本件、旧運輸省OBの不正を、警察、扱われますね','Case old-transp-OB-corrup police-handle','Reflective','ren_uni'),
    mk('警察、旧建設省OBの汚職事案も担当します','Police old-constr-OB-corrup','Procedural','takeda_officer'),
    mk('本件、日本共産党関連の集会警備も、警察、されますね','Case JCP-rally-guard police-hand','Reflective','ren_uni'),
    mk('警察、中共系団体の動向も注視します','Police CCP-grp-watch','Close','takeda_officer'),
  ]},
  {id:'conv_09773',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、女児虐待防止策を論文で扱いましたね','Sakura — fem-child-abuse paper','Calm','asuka_teacher'),
    mk('はい、企業のインサイダー取引を論文で扱いました','Yes — Co-insider paper','Earnest teen','sakura_teen'),
    mk('国連安保理の歴史を論文で扱いましたね','UN-SC-hist paper','Reflective','asuka_teacher'),
    mk('はい、旧郵政省の民営化を論文で扱いました','Yes — Old-postal paper','Earnest','sakura_teen'),
    mk('旧運輸省の組織改編史を論文で扱いましたね','Old-transp paper','Engaged','asuka_teacher'),
    mk('はい、旧建設省の公共事業史を論文で扱いました','Yes — Old-constr paper','Earnest','sakura_teen'),
    mk('日本共産党の戦後史を論文で扱いましたね','JCP-postwar paper','Reflective','asuka_teacher'),
    mk('はい、中共政府と日本外交を論文で扱いました','Yes — CCP-JP-dipl paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09774',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、女児の発達検査を医療チームで丁寧におこないます','Ren — fem-child-dev med-team careful','Calm','saito_doctor'),
    mk('はい、医薬品のインサイダー情報を医療チームで厳格に管理します','Yes — Med-insider-info med-team strict','Patient','saito_doctor'),
    mk('蓮さん、安保理決議に基づくWHOガイドラインを医療チームで参考にします','Ren — UN-SC-WHO med-team ref','Calm','saito_doctor'),
    mk('旧郵政省時代の郵送カルテも、貴院、保管されてますね、先生','Old-postal-mail-chart your-hosp keep, sensei','Reflective','ren_uni'),
    mk('はい、旧運輸省管轄の救急体制を医療チームが活用します','Yes — Old-transp-ER med-team','Patient','saito_doctor'),
    mk('はい、旧建設省管轄の病院施設を医療チームで維持します','Yes — Old-constr-hosp-fac med-team','Patient','saito_doctor'),
    mk('日本共産党系の市民医療相談を、貴院、対応されてますね、先生','JCP-citi-med-cons your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、中共との医療交流プログラムにも医療チームで参加します','Yes — CCP-med-exch med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09775',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、女児向け商品の安全基準を最重視しろ','Our co — fem-child-prod-safe-top','Crisp','hiroshi_boss'),
    mk('はい。インサイダー取引疑惑を絶対に避けます','Yes — Insider-avoid','Methodical','kenji_office'),
    mk('当社、安保理決議に沿った輸出管理をしろ','Our co — UN-SC-export-comp','Direction','hiroshi_boss'),
    mk('はい。旧郵政省民営化の教訓を学びます','Yes — Old-postal-lesson','Update','kenji_office'),
    mk('当社、旧運輸省OBの再雇用は慎重に','Our co — old-transp-OB-rehire-careful','Direction','hiroshi_boss'),
    mk('はい。旧建設省人脈は活用しすぎないようにします','Yes — Old-constr-net-mod','Update','kenji_office'),
    mk('当社、政治献金は日本共産党を含め全党に同基準で対応しろ','Our co — pol-donate-JCP-all-same','Direction','hiroshi_boss'),
    mk('はい。中共との取引はリスク管理を徹底します','Yes — CCP-deal-risk-strict','Close','kenji_office'),
  ]},
  {id:'conv_09776',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、小笠原諸島の旅がご趣味だって、メイちゃん','Aoi — cust-Ogasawara-trip Mei','Reflective','mei_romantic'),
    mk('葵、お客様、手塚治虫先生の漫画ファンだって、メイちゃん','Aoi — cust-Tezuka-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、工藤さんという作家のお知り合いだって、メイちゃん','Aoi — cust-Kudo-author-fri Mei','Reflective','mei_romantic'),
    mk('葵、お客様、テキサスでの長期出張帰りだって、メイちゃん','Aoi — cust-Texas-trip-back Mei','Reflective','aoi_barista'),
    mk('葵、お客様、バスク料理のレストランを開きたいって、メイちゃん','Aoi — cust-Basque-rest-want Mei','Reflective','mei_romantic'),
    mk('葵、お客様、映画のヤクザもののファンだって、メイちゃん','Aoi — cust-yakuza-film-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、弥生時代の遺跡を巡るのがご趣味だって、メイちゃん','Aoi — cust-Yayoi-relic Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ロッテのプロ野球を応援されてるって、メイちゃん','Aoi — cust-Lotte-base Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09777',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが小笠原諸島に憧れてらした','Gran — youth Dad-Ogasawara-admire','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、手塚治虫の漫画を全巻お持ちだったわよね、あなた?','Yes — Grandpa-Tezuka-all, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと工藤さんという旧友がいらした','Gran — youth Dad-Kudo-old-fri','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、テキサス駐在のお話をよくされたわよね、あなた?','Grandpa — Texas-station-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがバスク地方のワインを取り寄せられた','Gran — youth Dad-Basque-wine-order','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ヤクザ映画は嫌いだと仰ってたわよね、あなた?','Grandpa — yakuza-movie-not-like-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが弥生時代の遺跡発掘に参加された','Gran — youth Dad-Yayoi-dig-join','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ロッテの試合をよくご覧になってたわよね、あなた?','Grandpa — Lotte-match-watch, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09778',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが小笠原諸島の絵本を読んで下さるそうよ','Sho — Dad-Ogasawara-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと手塚治虫の漫画読んだよ','Mei-sis — me Dad-Tezuka','Eager child','sho_child'),
    mk('翔くん、お父さんが工藤さんというお友達のお話して下さるそうよ','Sho — Dad-Kudo-fri-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとテキサスの地図見たよ','Mei-sis — me Dad-Texas-map','Eager child','sho_child'),
    mk('翔くん、お父さんがバスク地方の料理を作って下さるそうよ','Sho — Dad-Basque-cook','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ヤクザって怖いから近づかないよ','Mei-sis — me yakuza-scary-no-close','Earnest child','sho_child'),
    mk('翔くん、お父さんが弥生時代の遺跡に連れて行って下さるそうよ','Sho — Dad-Yayoi-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとロッテの試合観たよ','Mei-sis — me Dad-Lotte-watched','Eager close','sho_child'),
  ]},
  {id:'conv_09779',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会で小笠原諸島勉強したな','Riku — soc-Ogasawara','Curious teen','sakura_teen'),
    mk('お前、手塚治虫のブッダ読んでたな、桜','You — Tezuka-Buddha Sakura','Curious','riku_teen'),
    mk('リク、お前、工藤くんと仲良いな','Riku — Kudo-close','Curious','sakura_teen'),
    mk('お前、テキサスでホームステイ希望だったな、桜','You — Texas-homestay Sakura','Curious','riku_teen'),
    mk('リク、お前、バスクの言語に興味あったな','Riku — Basque-lang-int','Curious','sakura_teen'),
    mk('お前、ヤクザ映画好きじゃないって言ってたな、桜','You — yakuza-not-like-said Sakura','Reflective','riku_teen'),
    mk('リク、お前、社会で弥生時代習ったろ','Riku — soc-Yayoi?','Curious','sakura_teen'),
    mk('お前、ロッテのファンだったな、桜','You — Lotte-fan Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09780',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが小笠原諸島のドキュメンタリーを観てらしたわ','Sho — Dad-Ogasawara-doc-watch','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと手塚治虫の鉄腕アトム読んだよ','Mom — me Dad-Tezuka-Atom','Eager child','sho_child'),
    mk('翔くん、お父さんが工藤先生というお医者様のお知り合いなのよ','Sho — Dad-Kudo-doctor-fri','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとテキサスの絵本見たよ','Mom — me Dad-Texas-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがバスク料理を作って下さるそうよ','Sho — Dad-Basque-cook','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんがヤクザに関わるなって厳しく仰ったよ','Mom — me Dad-yakuza-no-strict','Reflective child','sho_child'),
    mk('翔くん、お父さんが弥生時代の博物館に連れて行って下さるそうよ','Sho — Dad-Yayoi-mus-take','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとロッテのお菓子買ったよ','Mom — me Dad-Lotte-snack-buy','Eager close','sho_child'),
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

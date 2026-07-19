import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_446 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['終る','顧み','ためらい','程遠い','まるっきり','ひとたび','きまり','だいじょうぶ']
const B_T = ['国名','軽自動車','預ける','最大手','料率','概論','役務','全日空']
const C_T = ['どん底','城壁','順応','蒸発','牽制','発着','老齢','海戦']
const D_T = ['磯','黒髪','アジサイ','めがね','山菜','乳製品','谷間','偉人']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08881',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、宿題が早く終ると、お絵描きできるわね','Sho — homework-early-end-drawing','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんとの思い出を顧みる時があるよ','Mom — me Grandpa-mem-recall','Earnest child','sho_child'),
    mk('翔くん、新しい習い事に、ためらいがあるのね','Sho — new-lesson-hesit','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんみたいに上手な絵には程遠いよ','Mom — me Dad-good-pic-far','Wry child','sho_child'),
    mk('翔くん、お父さんはまるっきりお酒を飲まない方ね','Sho — Dad-not-at-all-drink','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ひとたび決めたら最後まで頑張るよ','Mom — me once-decide-end','Earnest child','sho_child'),
    mk('翔くん、おやつの時間にもきまりがあるのよ','Sho — snack-time-rule','Direction','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんに「だいじょうぶ」って言ったよ','Mom — me Grandpa-"OK"-said','Eager close','sho_child'),
  ]},
  {id:'conv_08882',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、忙しい時間帯が終ると、ホッとするね、メイちゃん','Aoi — busy-time-end-relief Mei','Reflective','mei_romantic'),
    mk('葵、お店の歴史を顧みる時間も大事ね、メイちゃん','Aoi — store-hist-recall-time Mei','Tender','aoi_barista'),
    mk('葵、新メニューを出すのにためらいがあるね、メイちゃん','Aoi — new-menu-hesit Mei','Reflective','mei_romantic'),
    mk('葵、私達は大手とは程遠いけど、いい店にしたいね、メイちゃん','Aoi — we-major-far-good-store Mei','Tender','aoi_barista'),
    mk('葵、お客様、まるっきりコーヒーを召し上がらない方もいるよね、メイちゃん','Aoi — cust-not-at-all-coffee-some Mei','Reflective','mei_romantic'),
    mk('葵、ひとたびお店に来てくださると、また来て下さるよね、メイちゃん','Aoi — once-store-come-return Mei','Pleased','aoi_barista'),
    mk('葵、お店のきまりは新人にも徹底しましょうね、メイちゃん','Aoi — store-rule-newbie-strict Mei','Direction','mei_romantic'),
    mk('葵、忙しいけど、私達はだいじょうぶよね、メイちゃん','Aoi — busy-we-OK Mei','Encouraging close','aoi_barista'),
  ]},
  {id:'conv_08883',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは一日の仕事が終ると、お酒を一杯飲まれたぞ','Gran — youth Dad-day-work-end-drink','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、戦時代を顧みる時、お顔が曇られたわよね、あなた?','Yes — Grandpa-war-era-recall-face-cloud, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはためらいなく決断されたぞ','Gran — youth Dad-no-hesit-decide','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、目標達成には程遠い時期もありましたわよね、あなた?','Grandpa — goal-far-time, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんはまるっきりお酒に手を付けない時期もあったぞ','Gran — Dad-not-at-all-drink-time','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ひとたび約束されると必ず守られたわよね、あなた?','Grandpa — once-promise-keep, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは社内のきまりを大事にされたぞ','Gran — youth Dad-co-rule-cherish','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様に「だいじょうぶだ」とよく仰ってたわよね、あなた?','Grandpa — grandkid-"OK"-often-said, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08884',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、テストが終るとゲームばっかだろ','Riku — test-end-game-only','Wry teen','sakura_teen'),
    mk('お前、過去を顧みても始まらないだろ、桜','You — past-recall-no-start Sakura','Reflective','riku_teen'),
    mk('リク、お前、告白にためらいがあんだろ?','Riku — confess-hesit?','Wry','sakura_teen'),
    mk('お前、満点には程遠いけど、まあ頑張ったな、桜','You — perfect-far-OK-tried Sakura','Wry','riku_teen'),
    mk('リク、お前、まるっきり数学やってないだろ','Riku — not-at-all-math','Wry','sakura_teen'),
    mk('お前、ひとたび部活始めたらやめないよな、桜','You — once-club-no-quit Sakura','Praising','riku_teen'),
    mk('リク、お前、学校のきまり守れよ','Riku — school-rule-keep','Direction','sakura_teen'),
    mk('お前、テストだいじょうぶか、桜','You — test-OK? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08885',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お絵描きが終ると、メイ姉さんと公園に行きましょうね','Sho — drawing-end-Mei-sis-park','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんとの思い出を顧みる時、温かい気持ちになるよ','Mei-sis — me Grandpa-mem-recall-warm','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんも、絵を始めるのにためらいがあったのよ','Sho — Mei-sis-art-start-hesit','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの絵には程遠いよ','Mei-sis — me Mei-sis-pic-far','Wry child','sho_child'),
    mk('翔くん、メイ姉さんはまるっきり泣かない人なのよ','Sho — Mei-sis-not-at-all-cry','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ひとたび絵を描き始めると止まらないよ','Mei-sis — me once-draw-no-stop','Eager child','sho_child'),
    mk('翔くん、お家のきまりは守りましょうね','Sho — home-rule-keep','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、だいじょうぶ、一人で帰れるよ','Mei-sis — me OK-alone-back','Proud close','sho_child'),
  ]},
  {id:'conv_08886',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、国名表記の規則を統一しろ','Our co — country-name-rule-unify','Crisp','hiroshi_boss'),
    mk('はい。営業用に軽自動車を増車する案を準備しました','Yes — Sales-light-car-add-plan prep','Methodical','kenji_office'),
    mk('当社、お客様の貴重品を預ける制度を厳格に運用しろ','Our co — VIP-valuable-deposit-strict','Direction','hiroshi_boss'),
    mk('はい。業界最大手との提携交渉を進めております','Yes — Industry-major-partner-nego','Update','kenji_office'),
    mk('当社、保険料率の見直しを進めろ','Our co — ins-rate-review-progress','Direction','hiroshi_boss'),
    mk('はい。新人研修で経営概論を扱います','Yes — Newbie-train-mgmt-overview','Update','kenji_office'),
    mk('お得意様向けの役務契約を整備しろ','VIP-svc-contract-prep','Direction','hiroshi_boss'),
    mk('はい。全日空便での海外出張を計画しております','Yes — ANA-overseas-trip-plan','Close','kenji_office'),
  ]},
  {id:'conv_08887',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('海外案件は正式な国名表記で統一しましょう','Overseas-case-formal-country-name-unify','Brisk','yuki_office'),
    mk('はい。社用の軽自動車を新規導入しました','Yes — Co-light-car-intro','Cooperative','kenji_office'),
    mk('お得意様の手荷物を預ける場所を整備しましょう','VIP-baggage-deposit-place-prep','Direction','yuki_office'),
    mk('はい。業界最大手の戦略を分析中です','Yes — Industry-major-strat-anal','Update','kenji_office'),
    mk('保険会社の料率比較表を作りましょう','Ins-co-rate-comp-table','Direction','yuki_office'),
    mk('はい。新人向け経営概論の教材を準備しました','Yes — Newbie-mgmt-overview-mat-prep','Update','kenji_office'),
    mk('外注の役務範囲を明確にしましょう','Outsource-svc-scope-clear','Direction','yuki_office'),
    mk('はい。全日空のマイレージを社員に共有しました','Yes — ANA-mileage-staff-share','Close','kenji_office'),
  ]},
  {id:'conv_08888',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究論文の国名表記はISO規格に従え','Ren — paper-country-name-ISO-follow','Mentor','hiroshi_boss'),
    mk('はい。フィールドワークに軽自動車を活用しました','Yes — Fieldwork-light-car-util','Earnest','ren_uni'),
    mk('蓮、研究データを安全な保管庫に預ける方針だ','Ren — research-data-safe-deposit-policy','Direction','hiroshi_boss'),
    mk('はい。学会で業界最大手の研究を学習しました','Yes — Conf-industry-major-research-learn','Polite','ren_uni'),
    mk('蓮、研究費の料率計算を確認しろ','Ren — research-fund-rate-calc-check','Direction','hiroshi_boss'),
    mk('はい。論文の冒頭に研究概論を入れました','Yes — Paper-open-research-overview','Earnest','ren_uni'),
    mk('蓮、研究室間の役務分担を明確にしろ','Ren — lab-svc-share-clear','Direction','hiroshi_boss'),
    mk('はい。全日空便で学会に向かう手配をしました','Yes — ANA-conf-trip-arr','Earnest close','ren_uni'),
  ]},
  {id:'conv_08889',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、国名表記を正確に行政書類で統一されますね','Police country-name-admin-doc-unify','Cooperative','kenji_office'),
    mk('警察、軽自動車のひき逃げ事案も捜査されますね','Police light-car-hit-run-inv','Cooperative','kenji_office'),
    mk('警察、市民が貴重品を預ける場合の指導もされますね','Police citizen-valuable-deposit-guide','Cooperative','kenji_office'),
    mk('警察、業界最大手の防犯協会と連携されますね','Police industry-major-crime-prev-link','Cooperative','kenji_office'),
    mk('警察、不正料率で違法保険販売した事案を捜査されますね','Police illegal-rate-ins-sale-inv','Cooperative','kenji_office'),
    mk('警察、新人向け法概論の研修もなさるんですね','Police newbie-law-overview-train','Cooperative','kenji_office'),
    mk('警察、行政役務委託の検証も担当されますね','Police admin-svc-cont-verify','Cooperative','kenji_office'),
    mk('警察、全日空のVIP警備も担当ですね','Police ANA-VIP-guard','Close','kenji_office'),
  ]},
  {id:'conv_08890',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、国名表記の規定を社内で作られたぞ','Dad — founding country-name-rule-co-make','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員に軽自動車を貸与された','Yes — Dad staff-light-car-loan','Commitment','hiroshi_boss'),
    mk('お父さん、お得意様の物を預ける時、責任を持たれたぞ','Dad — VIP-thing-deposit-resp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは業界最大手として誇りを持たれた','Yes — Dad industry-major-pride','Reflective','hiroshi_boss'),
    mk('お父さん、保険料率の交渉に強かったぞ','Dad — ins-rate-nego-strong','Wistful','hiroshi_elder'),
    mk('はい。お父さんは経営概論を新人に直接教えられた','Yes — Dad mgmt-overview-newbie-direct','Reflective','hiroshi_boss'),
    mk('お父さん、役務契約の責任を明確にされたぞ','Dad — svc-contract-resp-clear','Wistful','hiroshi_elder'),
    mk('はい。お父さんは全日空便で世界各地を巡回された','Yes — Dad ANA-world-patrol','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08891',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、国家がどん底から立ち直った事例を論文で扱いましたね','Ren — nation-rock-bottom-recovery paper','Calm','asuka_teacher'),
    mk('はい、中世の城壁建築史を論文で扱いました','Yes — Med-walled-arch-hist paper','Earnest','ren_uni'),
    mk('蓮さん、生物の環境順応研究を論文で扱いましたね','Ren — bio-env-adapt-research paper','Reflective','asuka_teacher'),
    mk('はい、近代の蒸発事件の社会学を論文で扱いました','Yes — Mod-vanish-case-soc paper','Earnest','ren_uni'),
    mk('国家間の牽制関係を論文で扱いましたね','Inter-nation-deter-rel paper','Engaged','asuka_teacher'),
    mk('はい、空港の発着史を論文で扱いました','Yes — Airport-arr-dep-hist paper','Earnest','ren_uni'),
    mk('蓮さん、老齢化社会の論点を論文で扱いましたね','Ren — aging-soc paper','Reflective','asuka_teacher'),
    mk('はい、近代の主要海戦を論文で扱いました','Yes — Mod-key-sea-battle paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08892',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、被害者ご家族がどん底の心境であることを警察、配慮されてますね','Case victim-fam-rock-bottom police-care','Reflective','ren_uni'),
    mk('警察、城壁のような防護網を地域に張ります','Police walled-defense-area-deploy','Procedural','takeda_officer'),
    mk('本件、容疑者の社会順応状況を警察、確認されますね','Case suspect-soc-adapt police-check','Reflective','ren_uni'),
    mk('警察、突然の蒸発事件にも全力で対応します','Police sudden-vanish-full-resp','Procedural','takeda_officer'),
    mk('本件、警察、相手組織を牽制する措置も取られましたね','Case police-rival-org-deter','Reflective','ren_uni'),
    mk('警察、空港での発着便管理にも協力します','Police airport-arr-dep-mgmt-coop','Procedural','takeda_officer'),
    mk('本件、老齢の被害者への配慮を警察、なさってますね','Case aging-victim-care police','Reflective','ren_uni'),
    mk('警察、海戦の遺物に関する不法売買も捜査します','Police sea-battle-relic-illegal-trade-inv','Close','takeda_officer'),
  ]},
  {id:'conv_08893',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、国家がどん底から立ち直った事例を論文で扱いましたね','Sakura — rock-bottom-recovery paper','Calm','asuka_teacher'),
    mk('はい、中世の城壁建築史を論文で扱いました','Yes — Med-walled paper','Earnest teen','sakura_teen'),
    mk('生物の環境順応研究を論文で扱いましたね','Bio-env-adapt paper','Reflective','asuka_teacher'),
    mk('はい、近代の蒸発事件を論文で扱いました','Yes — Vanish-case paper','Earnest','sakura_teen'),
    mk('国家間の牽制関係を論文で扱いましたね','Inter-nation-deter paper','Engaged','asuka_teacher'),
    mk('はい、空港の発着史を論文で扱いました','Yes — Airport-arr-dep paper','Earnest','sakura_teen'),
    mk('老齢化社会の論点を論文で扱いましたね','Aging-soc paper','Reflective','asuka_teacher'),
    mk('はい、近代の主要海戦を論文で扱いました','Yes — Key-sea-battle paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08894',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者さんがどん底の状態でも医療チームで支えます','Ren — patient-rock-bottom med-team supp','Calm','saito_doctor'),
    mk('はい、感染症から守る城壁となる対策を医療チームで講じます','Yes — Infect-walled-counter med-team','Patient','saito_doctor'),
    mk('治療への順応性を、貴院、丁寧に診ておられますね、先生','Treat-adapt your-hosp careful, sensei','Curious','ren_uni'),
    mk('はい、急な蒸発症状にも医療チームで対応します','Yes — Sudden-vanish-symp med-team','Patient','saito_doctor'),
    mk('競合病院との不要な牽制は、貴院、避けられてますね、先生','Rival-hosp-unnec-deter your-hosp avoid, sensei','Reflective','ren_uni'),
    mk('はい、患者さんの発着情報を医療チームで把握します','Yes — Patient-arr-dep-info med-team','Patient','saito_doctor'),
    mk('老齢患者の専門ケアを、貴院、強化されてますね、先生','Aging-patient-care your-hosp strength, sensei','Reflective','ren_uni'),
    mk('はい、海戦時の医療事例を医療チームで参考にします','Yes — Sea-battle-med-case med-team ref','Patient close','saito_doctor'),
  ]},
  {id:'conv_08895',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、どん底からの復活劇を社員に示せ','Our co — rock-bottom-recov-staff-show','Crisp','hiroshi_boss'),
    mk('はい。情報セキュリティを城壁の如く強化します','Yes — Info-sec-walled-strength','Methodical','kenji_office'),
    mk('当社、海外文化に順応できる人材を採用しろ','Our co — overseas-cult-adapt-talent-hire','Direction','hiroshi_boss'),
    mk('はい。社員が突然蒸発する事のないよう面談を増やします','Yes — Staff-sudden-vanish-prev-meet','Update','kenji_office'),
    mk('当社、競合を牽制する新製品を出せ','Our co — rival-deter-new-prod','Direction','hiroshi_boss'),
    mk('はい。出張の発着スケジュールを最適化します','Yes — Biz-arr-dep-sched-opt','Update','kenji_office'),
    mk('当社、老齢社員の活躍の場を作れ','Our co — aging-staff-active-place','Direction','hiroshi_boss'),
    mk('はい。海戦級の本気で競合に挑みます','Yes — Sea-battle-grade-serious-rival','Close','kenji_office'),
  ]},
  {id:'conv_08896',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、磯釣りに行かれたって、メイちゃん','Aoi — cust-shore-fish-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、黒髪が美しい方ね、メイちゃん','Aoi — cust-black-hair-beauty Mei','Praising','aoi_barista'),
    mk('葵、お店の前にアジサイを植えたいね、メイちゃん','Aoi — store-front-hydrangea-plant Mei','Direction','mei_romantic'),
    mk('葵、お客様、新しいめがねが似合ってらしたよ、メイちゃん','Aoi — cust-new-glasses-suit Mei','Praising','aoi_barista'),
    mk('葵、新メニューに山菜の天ぷら加えましょう、メイちゃん','Aoi — new-menu-mountain-veg-tempura-add Mei','Animated','mei_romantic'),
    mk('葵、お客様、乳製品アレルギーなんだって、メイちゃん','Aoi — cust-dairy-allergy Mei','Reflective','aoi_barista'),
    mk('葵、お客様、谷間にある秘湯へ旅行されたって、メイちゃん','Aoi — cust-valley-secret-onsen-trip Mei','Reflective','mei_romantic'),
    mk('葵、お客様、地域の偉人を研究なさってるって、メイちゃん','Aoi — cust-local-great-person-research Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08897',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと磯で貝を拾ったぞ','Gran — youth Dad-shore-shell-pick','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃は黒髪が艶やかでらしたわよね、あなた?','Yes — Grandpa-youth-black-hair-shiny, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお庭にアジサイを植えられたぞ','Gran — youth Dad-garden-hydrangea-planted','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年はめがねを大事にされてたわよね、あなた?','Grandpa — late-glasses-cherish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと山菜を採りに行ったぞ','Gran — youth Dad-mountain-veg-pick','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、乳製品があまりお得意ではなかったわよね、あなた?','Grandpa — dairy-not-good, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと谷間の温泉旅行をしたぞ','Gran — youth Dad-valley-onsen-trip','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、地域の偉人のお話を孫にされたわよね、あなた?','Grandpa — local-great-person-grandkid-told, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08898',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんと磯で釣りに行きたいわね','Sho — Dad-shore-fish-want','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの黒髪、かっこいいよ','Mei-sis — me Mei-sis-black-hair-cool','Praising child','sho_child'),
    mk('翔くん、お庭のアジサイがきれいに咲き始めたわ','Sho — garden-hydrangea-bloom-start','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、新しいめがね作ってもらったよ','Mei-sis — me new-glasses-got','Proud child','sho_child'),
    mk('翔くん、お祖父ちゃんが山菜を採りに連れて行って下さるそうよ','Sho — Grandpa-mountain-veg-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、乳製品大好きだよ','Mei-sis — me dairy-love','Eager child','sho_child'),
    mk('翔くん、谷間に咲くお花は珍しいわね','Sho — valley-flower-rare','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんから地域の偉人のお話を聞いたよ','Mei-sis — me Grandpa-local-great-person-heard','Eager close','sho_child'),
  ]},
  {id:'conv_08899',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、家族で磯遊びに行ったろ?','Riku — fam-shore-play?','Curious teen','sakura_teen'),
    mk('お前、髪染めなくても黒髪似合うぞ、桜','You — no-dye-black-hair-suit Sakura','Praising','riku_teen'),
    mk('リク、お前ん家、お庭にアジサイあるんだろ?','Riku — your-home-garden-hydrangea?','Curious','sakura_teen'),
    mk('お前、新しいめがな買ったろ?桜','You — new-glasses-bought? Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で山菜採りに行ったろ?','Riku — fam-mountain-veg-pick?','Curious','sakura_teen'),
    mk('お前、給食の乳製品残すなよ、桜','You — lunch-dairy-don\'t-leave Sakura','Direction','riku_teen'),
    mk('リク、お前、家族で谷間ハイキング行ったろ?','Riku — fam-valley-hike?','Curious','sakura_teen'),
    mk('お前、社会で地域の偉人やったろ?桜','You — soc-local-great-person? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08900',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが磯釣りのお話してくれたわ','Sho — Dad-shore-fish-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんの黒髪きれいだよ','Mom — me Grandma-black-hair-pretty','Eager child','sho_child'),
    mk('翔くん、お庭にアジサイを植えましょうね','Sho — garden-hydrangea-plant','Tender','yumiko_mom'),
    mk('ママ、ぼく、新しいめがな欲しい','Mom — me new-glasses-want','Earnest child','sho_child'),
    mk('翔くん、お祖父ちゃんが山菜を取りに行かれたわ','Sho — Grandpa-mountain-veg-went','Reflective','yumiko_mom'),
    mk('ママ、ぼく、乳製品入りの料理大好きだよ','Mom — me dairy-cuisine-love','Eager child','sho_child'),
    mk('翔くん、お父さんが谷間の旅館の写真を見せてくれたわ','Sho — Dad-valley-inn-photo-showed','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんが偉人の伝記を読んで下さったよ','Mom — me Dad-great-person-bio-read','Eager close','sho_child'),
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

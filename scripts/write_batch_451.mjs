import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_451 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ひっかかっ','手ごろ','めでたし','微塵','多けれ','ともども','気長','なめらか']
const B_T = ['結び付け','可変','一望','財務諸表','苦心','降格','行きつけ','委嘱']
const C_T = ['輪廻','撃沈','怒涛','凱旋','建立','警備隊','生まれつき','オウム真理教']
const D_T = ['マツダ','尾根','漆','覆面','胡椒','縞','大理石','洗車']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08981',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんの服が枝にひっかかっちゃったのよ','Sho — Dad-clothes-branch-snagged','Wry','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんが「これは手ごろな値段だ」って仰ったよ','Mom — me Grandpa "reasonable-price"-said','Reflective child','sho_child'),
    mk('翔くん、絵本のお話、「めでたしめでたし」で終わるのよ','Sho — book-"happy-end"-end','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに怒られても微塵も後悔してないよ','Mom — me Dad-scold-no-regret-bit','Earnest child','sho_child'),
    mk('翔くん、お友達が多ければ多いほど嬉しいわね','Sho — friend-many-more-glad','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんとともども元気で過ごしたいね','Mom — Grandpa-together-well-pass','Tender child','sho_child'),
    mk('翔くん、ピアノは気長に練習すれば上達するわよ','Sho — piano-patient-prac-imp','Caring','yumiko_mom'),
    mk('ママ、ぼく、ピアノがなめらかに弾けるようになったよ','Mom — me piano-smooth-able','Proud close','sho_child'),
  ]},
  {id:'conv_08982',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様の予定にひっかかってお店が混んだね、メイちゃん','Aoi — cust-sched-snagged-busy Mei','Reflective','mei_romantic'),
    mk('葵、新メニューは手ごろな価格で出しましょう、メイちゃん','Aoi — new-menu-reason-price Mei','Direction','aoi_barista'),
    mk('葵、お客様、めでたし顔でお見えになったわね、メイちゃん','Aoi — cust-happy-face-visit Mei','Pleased','mei_romantic'),
    mk('葵、私達のお店、微塵も諦めないで頑張ろうね、メイちゃん','Aoi — we-store-not-bit-give-up Mei','Encouraging','aoi_barista'),
    mk('葵、お客様が多ければ多いほど忙しいけど嬉しいね、メイちゃん','Aoi — cust-many-busy-glad Mei','Pleased','mei_romantic'),
    mk('葵、お得意様ともども成長していきましょう、メイちゃん','Aoi — VIP-together-grow Mei','Tender','aoi_barista'),
    mk('葵、お客様の好みは気長に把握しましょうね、メイちゃん','Aoi — cust-taste-patient-grasp Mei','Direction','mei_romantic'),
    mk('葵、新メニューはなめらかな食感がいいね、メイちゃん','Aoi — new-menu-smooth-tex-good Mei','Praising close','aoi_barista'),
  ]},
  {id:'conv_08983',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは仕事の道具が機械にひっかかってお怪我された','Gran — youth Dad-tool-machine-snagged-injury','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、手ごろなお値段の家を選ばれたわよね、あなた?','Yes — Grandpa-reason-priced-home-chose, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは絵本を「めでたしめでたし」と締めて下さったぞ','Gran — youth Dad-book-"happy-end"-close','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様への愛情は微塵も揺るがれなかったわよね、あなた?','Grandpa — grandkid-love-not-bit-shake, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは経験が多ければ多いほど良いと仰ったぞ','Gran — youth Dad-exp-more-better-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様ともども元気でらしたわよね、あなた?','Grandpa — grandkid-together-well, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは気長に種を育てる方だったぞ','Gran — youth Dad-patient-seed-raise','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お喋りがなめらかでらしたわよね、あなた?','Grandpa — talk-smooth, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08984',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前の鞄が机にひっかかってんぞ','Riku — your-bag-desk-snagged','Wry teen','sakura_teen'),
    mk('お前、手ごろな参考書見つけたな、桜','You — reason-ref-book-found Sakura','Praising','riku_teen'),
    mk('リク、お前のテスト点、めでたし結果だったな','Riku — test-happy-end-result','Praising','sakura_teen'),
    mk('お前、勉強する気微塵もないだろ、桜','You — study-not-bit Sakura','Wry','riku_teen'),
    mk('リク、お前、漫画多ければ多いほど集めたいんだろ?','Riku — manga-more-collect?','Curious','sakura_teen'),
    mk('お前、家族ともども旅行に行ったろ?桜','You — fam-together-trip? Sakura','Curious','riku_teen'),
    mk('リク、お前、気長に勉強しろよ','Riku — patient-study','Direction','sakura_teen'),
    mk('お前、ダンスがなめらかになったな、桜','You — dance-smooth Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08985',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんのスカーフが枝にひっかかったのよ','Sho — Mei-sis-scarf-branch-snagged','Wry','mei_romantic'),
    mk('メイ姉さん、メイ姉さんのお店の絵、手ごろな価格で買えるよ','Mei-sis — Mei-sis-art-reason-price','Eager child','sho_child'),
    mk('翔くん、絵本の結末が「めでたし」だと安心するわね','Sho — book-end-"happy"-relief','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんへの感謝、微塵も忘れてないよ','Mei-sis — me Mei-sis-thanks-not-bit-forget','Earnest child','sho_child'),
    mk('翔くん、お友達が多ければ多いほど楽しいわよね','Sho — friend-more-fun','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ママともども来てよかったよ','Mei-sis — me Mom-together-good','Eager child','sho_child'),
    mk('翔くん、絵の練習は気長にやっていきましょう','Sho — art-prac-patient','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、絵筆を、なめらかに動かせるようになったよ','Mei-sis — me brush-smooth-able','Proud close','sho_child'),
  ]},
  {id:'conv_08986',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、社員を功績に結び付けて評価しろ','Our co — staff-merit-link-eval','Crisp','hiroshi_boss'),
    mk('はい。可変料金プランの案を準備しました','Yes — Var-fee-plan-prep','Methodical','kenji_office'),
    mk('当社、新店舗から市街地が一望できる立地を選べ','Our co — new-store-cityscape-view-choose','Direction','hiroshi_boss'),
    mk('はい。お得意様向けの財務諸表をご提示しました','Yes — VIP-fin-stat-show','Update','kenji_office'),
    mk('当社、開発に苦心した新製品を世に出せ','Our co — dev-toil-new-prod-launch','Direction','hiroshi_boss'),
    mk('はい。問題行動の社員を降格処分にいたします','Yes — Prob-staff-demote','Update','kenji_office'),
    mk('お得意様の行きつけのお店を調査しろ','VIP-fav-store-research','Direction','hiroshi_boss'),
    mk('はい。外部監査を委嘱する手続きを進めました','Yes — Ext-aud-commit-progress','Close','kenji_office'),
  ]},
  {id:'conv_08987',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社員の頑張りを評価に結び付けましょう','Staff-effort-eval-link','Brisk','yuki_office'),
    mk('はい。可変料金プランをホームページに掲載しました','Yes — Var-fee-website-list','Cooperative','kenji_office'),
    mk('新店舗から海が一望できると人気が出そうですね','New-store-sea-view-pop','Direction','yuki_office'),
    mk('はい。お得意様への財務諸表説明会を設定しました','Yes — VIP-fin-stat-meet-set','Update','kenji_office'),
    mk('苦心して開発した新製品を発表しましょう','Toil-dev-new-prod-launch','Direction','yuki_office'),
    mk('はい。社内で降格の手続きを学ぶ研修を実施します','Yes — Co-demote-proc-train','Update','kenji_office'),
    mk('お得意様の行きつけのカフェを把握しましょう','VIP-fav-cafe-grasp','Direction','yuki_office'),
    mk('はい。専門家に調査を委嘱します','Yes — Expert-research-commit','Close','kenji_office'),
  ]},
  {id:'conv_08988',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文の結論と研究意義を結び付けろ','Ren — paper-concl-mean-link','Mentor','hiroshi_boss'),
    mk('はい。可変パラメータの実験計画を作成しました','Yes — Var-param-exp-plan','Earnest','ren_uni'),
    mk('蓮、研究室から自然が一望できると気分がいいぞ','Ren — lab-nature-view-good','Reflective','hiroshi_boss'),
    mk('はい。研究室の財務諸表的な収支表を作りました','Yes — Lab-fin-stat-PL','Polite','ren_uni'),
    mk('蓮、苦心して書いた論文は心に響くぞ','Ren — toil-paper-touch','Reflective','hiroshi_boss'),
    mk('はい。不正研究で降格になった研究者もいると聞いてます','Yes — Fraud-research-demote-researcher-heard','Earnest','ren_uni'),
    mk('蓮、行きつけのカフェで論文を書くのも気分転換になるな','Ren — fav-cafe-paper-mood-change','Reflective','hiroshi_boss'),
    mk('はい。外部の専門家に査読を委嘱しました','Yes — Ext-expert-review-commit','Earnest close','ren_uni'),
  ]},
  {id:'conv_08989',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、証拠を犯人に結び付けて立件されますね','Police evid-suspect-link-charge','Cooperative','kenji_office'),
    mk('警察、可変的な勤務体系で対応されてますね','Police var-shift-resp','Cooperative','kenji_office'),
    mk('警察、市内を一望できる監視塔を整備されますね','Police city-view-watch-tower-prep','Cooperative','kenji_office'),
    mk('警察、不正経理の財務諸表を精査されますね','Police fraud-acct-fin-stat-anal','Cooperative','kenji_office'),
    mk('警察、苦心して解決された事件は印象的でしたね','Police toil-solved-case-impress','Reflective','kenji_office'),
    mk('警察、不祥事を起こした警察官の降格処分もされますね','Police scandal-officer-demote','Cooperative','kenji_office'),
    mk('警察、地元の行きつけの飲食店から情報を得られますね','Police local-fav-rest-info','Cooperative','kenji_office'),
    mk('警察、地域防犯指導を有識者に委嘱されますね','Police local-crime-prev-expert-commit','Close','kenji_office'),
  ]},
  {id:'conv_08990',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社員の働きを成果に結び付けて評価された','Dad — founding staff-work-result-link-eval','Sage','hiroshi_elder'),
    mk('はい。お父さんは可変的な経営判断もされた','Yes — Dad var-mgmt-judg','Commitment','hiroshi_boss'),
    mk('お父さん、屋上から街を一望されて構想を練られた','Dad — rooftop-city-view-plan','Wistful','hiroshi_elder'),
    mk('はい。お父さんは財務諸表を毎週確認された','Yes — Dad fin-stat-weekly-check','Reflective','hiroshi_boss'),
    mk('お父さん、苦心して新事業を立ち上げられた','Dad — toil-new-biz-launched','Wistful','hiroshi_elder'),
    mk('はい。お父さんは降格処分の判断にも公平でらした','Yes — Dad demote-fair','Reflective','hiroshi_boss'),
    mk('お父さん、行きつけのお店でお取引先と懇談された','Dad — fav-store-partner-chat','Wistful','hiroshi_elder'),
    mk('はい。お父さんは外部の有識者に研究を委嘱された','Yes — Dad ext-expert-research-commit','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08991',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、輪廻思想の宗教史を論文で扱いましたね','Ren — reincarn-relig-hist paper','Calm','asuka_teacher'),
    mk('はい、戦時下に船舶が撃沈された事例を論文で扱いました','Yes — Wartime-ship-sunk paper','Earnest','ren_uni'),
    mk('蓮さん、近代国家の怒涛のような近代化を論文で扱いましたね','Ren — mod-state-fierce-mod paper','Reflective','asuka_teacher'),
    mk('はい、将軍の凱旋史を論文で扱いました','Yes — Gen-triumph-hist paper','Earnest','ren_uni'),
    mk('蓮さん、大寺院の建立史を論文で扱いましたね','Ren — temple-build-hist paper','Engaged','asuka_teacher'),
    mk('はい、戦時警備隊の組織研究を論文で扱いました','Yes — War-guard-unit-org paper','Earnest','ren_uni'),
    mk('生まれつきの障害を持つ方の社会参加史を論文で扱いましたね','Innate-disab-soc-part paper','Reflective','asuka_teacher'),
    mk('はい、オウム真理教事件の社会的影響を論文で扱いました','Yes — Aum-case-soc-impact paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08992',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者が輪廻を信じていた事を警察、確認されましたね','Case suspect-reincarn-belief police-confirm','Reflective','ren_uni'),
    mk('警察、不審船を撃沈ではなく停船命令で対応します','Police suspic-ship-sunk-not-stop-order','Procedural','takeda_officer'),
    mk('本件、怒涛のように寄せられた情報を警察、整理されてますね','Case fierce-info-police-org','Reflective','ren_uni'),
    mk('警察、市民活動の凱旋的なお祝いをご支援されますね','Police citizen-triumph-celeb-supp','Cooperative','kenji_office'),
    mk('本件、不法建立物の取り壊しを警察、ご対応されてますね','Case illegal-build-tear police-resp','Reflective','ren_uni'),
    mk('警察、警備隊との連携を強化します','Police guard-unit-link-strength','Procedural','takeda_officer'),
    mk('本件、生まれつきの障害を持つ被害者への配慮を警察、なさってますね','Case innate-disab-victim-care police','Reflective','ren_uni'),
    mk('警察、オウム真理教事件の教訓を生かして対応します','Police Aum-case-lesson-util','Close','takeda_officer'),
  ]},
  {id:'conv_08993',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、輪廻思想の宗教史を論文で扱いましたね','Sakura — reincarn paper','Calm','asuka_teacher'),
    mk('はい、戦時下に船舶が撃沈された事例を論文で扱いました','Yes — Ship-sunk paper','Earnest teen','sakura_teen'),
    mk('近代国家の怒涛のような近代化を論文で扱いましたね','Mod-state-fierce paper','Reflective','asuka_teacher'),
    mk('はい、将軍の凱旋史を論文で扱いました','Yes — Gen-triumph paper','Earnest','sakura_teen'),
    mk('大寺院の建立史を論文で扱いましたね','Temple-build paper','Engaged','asuka_teacher'),
    mk('はい、戦時警備隊の組織研究を論文で扱いました','Yes — War-guard paper','Earnest','sakura_teen'),
    mk('生まれつきの障害を持つ方の社会参加史を論文で扱いましたね','Innate-disab paper','Reflective','asuka_teacher'),
    mk('はい、オウム真理教事件の社会的影響を論文で扱いました','Yes — Aum paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08994',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、終末期患者の輪廻信仰を医療チームで尊重します','Ren — end-patient-reincarn med-team-respect','Calm','saito_doctor'),
    mk('はい、感染源を撃沈する勢いで撲滅対策を医療チームで進めます','Yes — Infect-sunk-elim med-team','Patient','saito_doctor'),
    mk('感染症の怒涛のような流行を、貴院、対応されたんですね、先生','Infect-fierce-pandem your-hosp resp, sensei','Reflective','ren_uni'),
    mk('はい、難病克服の凱旋例を医療チームで参考にします','Yes — Disease-overcome-triumph med-team ref','Patient','saito_doctor'),
    mk('医療研究所を建立される予定なんですね、先生','Med-research-inst-build, sensei','Curious','ren_uni'),
    mk('はい、医療警備隊との連携訓練を医療チームで実施します','Yes — Med-guard-unit-train med-team','Patient','saito_doctor'),
    mk('生まれつきの障害を持つ患者さんへのケアを、貴院、強化されてますね、先生','Innate-disab-patient-care your-hosp strength, sensei','Reflective','ren_uni'),
    mk('はい、オウム真理教事件後の精神医療を医療チームで参考にします','Yes — Aum-post-psych med-team ref','Patient close','saito_doctor'),
  ]},
  {id:'conv_08995',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、輪廻のような長期ビジョンを持て','Our co — reincarn-long-vision','Crisp','hiroshi_boss'),
    mk('はい。撃沈されないように事業を多角化します','Yes — Sunk-prev-biz-diversify','Methodical','kenji_office'),
    mk('当社、怒涛の勢いで新市場に挑め','Our co — fierce-new-market-challenge','Direction','hiroshi_boss'),
    mk('はい。営業成績の凱旋報告を社員集会で行います','Yes — Sales-triumph-rep-staff-meet','Update','kenji_office'),
    mk('当社、新拠点を建立し業界の中心に立て','Our co — new-base-build-industry-center','Direction','hiroshi_boss'),
    mk('はい。社員用警備隊との連携を強化します','Yes — Staff-guard-unit-link-strength','Update','kenji_office'),
    mk('当社、生まれつきの障害を持つ社員も活躍できる職場にしろ','Our co — innate-disab-staff-active-workplace','Direction','hiroshi_boss'),
    mk('はい。オウム真理教事件の教訓を社員研修に活かします','Yes — Aum-lesson-train-util','Close','kenji_office'),
  ]},
  {id:'conv_08996',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、マツダ車のお話されてたよ、メイちゃん','Aoi — cust-Mazda-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、山の尾根をハイキングされたんだって、メイちゃん','Aoi — cust-mountain-ridge-hike Mei','Reflective','aoi_barista'),
    mk('葵、お客様、漆塗りの食器を使われてるそうよ、メイちゃん','Aoi — cust-lacquer-tableware Mei','Reflective','mei_romantic'),
    mk('葵、お子様、覆面ヒーローの本に夢中ね、メイちゃん','Aoi — child-masked-hero-book-into Mei','Pleased','aoi_barista'),
    mk('葵、新メニュー、黒胡椒をたっぷり使いましょう、メイちゃん','Aoi — new-menu-black-pepper-use Mei','Animated','mei_romantic'),
    mk('葵、お客様、縞模様のシャツが似合ってらしたよ、メイちゃん','Aoi — cust-stripe-shirt-suit Mei','Praising','aoi_barista'),
    mk('葵、お店の床、一部大理石にしたいね、メイちゃん','Aoi — store-floor-marble-want Mei','Reflective','mei_romantic'),
    mk('葵、お客様、洗車してから来られたみたいね、メイちゃん','Aoi — cust-car-wash-then-came Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08997',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがマツダの車を運転されたぞ','Gran — youth Dad-Mazda-drive','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃に山の尾根を登られたわよね、あなた?','Yes — Grandpa-youth-mountain-ridge-climbed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは漆塗りのお椀を大事にされたぞ','Gran — youth Dad-lacquer-bowl-cherish','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦時下に覆面のような布を被られたわよね、あなた?','Grandpa — wartime-mask-cloth-wear, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは黒胡椒のスープがお好きでらしたぞ','Gran — youth Dad-black-pepper-soup-liked','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、縞模様のネクタイがお似合いでらしたわよね、あなた?','Grandpa — stripe-tie-suit, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが大理石の彫刻を集められたぞ','Gran — youth Dad-marble-sculp-collect','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お休みの日は洗車を楽しみにされてたわよね、あなた?','Grandpa — off-car-wash-look-forward, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08998',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがマツダの新車を見に行かれるそうよ','Sho — Dad-Mazda-new-car-see','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと山の尾根を歩いてみたい','Mei-sis — me Dad-mountain-ridge-want','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんの漆塗りのお弁当箱、綺麗ね','Sho — Grandma-lacquer-bento-pretty','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、覆面ヒーローのお面欲しいよ','Mei-sis — me masked-hero-mask-want','Eager child','sho_child'),
    mk('翔くん、お父さんが胡椒をたくさん使う料理を作って下さるわ','Sho — Dad-pepper-use-cook','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、縞模様の靴下、好きだよ','Mei-sis — me stripe-sock-like','Eager child','sho_child'),
    mk('翔くん、博物館で大理石の彫刻を見ましょうね','Sho — museum-marble-sculp-see','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと洗車したよ','Mei-sis — me Dad-car-wash','Proud close','sho_child'),
  ]},
  {id:'conv_08999',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前のお父さん、マツダ車乗ってんだろ?','Riku — your-Dad-Mazda?','Curious teen','sakura_teen'),
    mk('お前、家族で山の尾根を歩いたろ?桜','You — fam-mountain-ridge? Sakura','Curious','riku_teen'),
    mk('リク、お前、漆塗り体験したろ?','Riku — lacquer-exp?','Curious','sakura_teen'),
    mk('お前、文化祭で覆面被ってたろ?桜','You — fest-mask-wore? Sakura','Curious','riku_teen'),
    mk('リク、お前、ペッパーランチで胡椒たっぷりかけたな','Riku — pepper-lunch-pepper-much','Wry','sakura_teen'),
    mk('お前、縞模様の制服似合うよな、桜','You — stripe-uniform-suit Sakura','Praising','riku_teen'),
    mk('リク、お前、大理石の床の家、憧れだろ?','Riku — marble-floor-home-admire?','Curious','sakura_teen'),
    mk('お前、お父さんと洗車手伝ったろ?桜','You — Dad-car-wash-helped? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09000',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがマツダ車を新調されたわ','Sho — Dad-Mazda-new','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと山の尾根を歩きたい','Mom — me Dad-mountain-ridge-want','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんが漆塗りの重箱を大事にされてるわ','Sho — Grandma-lacquer-jubako-cherish','Reflective','yumiko_mom'),
    mk('ママ、ぼく、覆面プロレスラーごっこやったよ','Mom — me masked-wrest-played','Wry child','sho_child'),
    mk('翔くん、お父さんが胡椒をひいて下さるわ','Sho — Dad-pepper-grind','Reflective','yumiko_mom'),
    mk('ママ、ぼく、縞模様のセーター着たいよ','Mom — me stripe-sweater-want','Eager child','sho_child'),
    mk('翔くん、大理石のテーブル、お洒落でいいわね','Sho — marble-table-stylish','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとお洗車手伝うよ','Mom — me Dad-car-wash-help','Proud close','sho_child'),
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

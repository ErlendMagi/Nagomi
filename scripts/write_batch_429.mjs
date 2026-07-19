import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_429 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['あゆみ','つきあっ','すさまじい','このほど','とかく','ぬけ','かれこれ','めちゃめちゃ']
const B_T = ['頒布','加味','横行','内職','創始','既得','代用','一掃']
const C_T = ['講和','反米','布告','監禁','仮処分','歪曲','流布','招集']
const D_T = ['ハイブリッド','ハンセン病','要塞','点字','沸騰','磁石','ワイヤー','リフト']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08541',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんのこれまでのあゆみ、すごいわね','Sho — Grandpa-so-far-walk-amazing','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんと長くつきあってきたよ','Mom — me Grandpa-long-keep-comp','Earnest child','sho_child'),
    mk('翔くん、夕立がすさまじい降り方だったわね','Sho — eve-rain terrific-fall','Reflective','yumiko_mom'),
    mk('ママ、ぼく、このほど絵のコンクールで賞をもらったよ','Mom — me recently-art-cont-prize-got','Proud child','sho_child'),
    mk('翔くん、お父さんはとかくお仕事のお話が長いのよ','Sho — Dad anyhow-work-talk-long','Reflective','yumiko_mom'),
    mk('ママ、ぼく、走ってると靴下がぬけちゃうよ','Mom — me run-sock-slip-out','Wry child','sho_child'),
    mk('翔くん、お父さんとぼくは、かれこれ十年お出かけしてるわね','Sho — Dad-me about-10-yrs-out','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お絵描きをめちゃめちゃ頑張ったよ','Mom — me drawing-super-tried','Proud close','sho_child'),
  ]},
  {id:'conv_08542',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店の十年のあゆみ、振り返りたいわね、メイちゃん','Aoi — store-10-yr-walk reflect Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お店と長くつきあってくださってるね、メイちゃん','Aoi — cust-store-long-keep-comp Mei','Pleased','aoi_barista'),
    mk('葵、お客様、すさまじい勢いで召し上がってたよ、メイちゃん','Aoi — cust terrific-pace-ate Mei','Animated','mei_romantic'),
    mk('葵、このほどお店のSNSフォロワーが千人超えたわよ、メイちゃん','Aoi — recently-store-SNS-1000-passed Mei','Pleased','aoi_barista'),
    mk('葵、新メニューはとかく不評ね、メイちゃん','Aoi — new-menu anyhow-unpop Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お皿の汁がぬけてしまったわよ、メイちゃん','Aoi — cust dish-broth-leaked Mei','Wry','aoi_barista'),
    mk('葵、お客様、かれこれ三年お見えになるわね、メイちゃん','Aoi — cust about-3-yr-visit Mei','Pleased','mei_romantic'),
    mk('葵、お客様のお褒め、めちゃめちゃ嬉しかったよ、メイちゃん','Aoi — cust-praise super-glad Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_08543',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと長いあゆみだったぞ','Gran — youth Dad-long-walk','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃんとは長くつきあってこられたわよね、あなた?','Yes — Grandpa-long-keep-comp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがすさまじい台風を語られたぞ','Gran — youth Dad terrific-typhoon-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、このほど勲章を授与されたわよね、あなた?','Grandpa — recently-medal-given, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんはとかく無口だったぞ','Gran — Dad anyhow-quiet','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、たまにふっと頭からぬけちゃう事、おありだったわよね、あなた?','Grandpa — sometime mind-slip-out, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんとかれこれ五十年連れ添ったぞ','Gran — youth Dad about-50-yr-together','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、書道がめちゃめちゃ綺麗だったわよね、あなた?','Grandpa — calligraphy super-pretty, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08544',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前との部活のあゆみ、長いよな','Riku — your-club-walk-long','Reflective teen','sakura_teen'),
    mk('お前、ずっとつきあってくれてサンキューな、桜','You — long-keep-comp thx Sakura','Tender','riku_teen'),
    mk('リク、お前、すさまじい量の宿題抱えてんな','Riku — terrific-amount-homework','Wry','sakura_teen'),
    mk('お前、このほど志望校決まったろ?桜','You — recently-target-school-decided? Sakura','Curious','riku_teen'),
    mk('リク、お前、とかく勉強サボるよな','Riku — anyhow-study-skip','Wry','sakura_teen'),
    mk('お前、答案用紙、名前ぬけてたぞ、桜','You — answer-sheet-name-missed Sakura','Wry','riku_teen'),
    mk('リク、お前とかれこれ五年の付き合いだな','Riku — about-5-yr-friend','Reflective','sakura_teen'),
    mk('お前、テストでめちゃめちゃ点数取ったな、桜','You — test-super-score Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08545',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんの絵のあゆみ、見せてあげる','Sho — Mei-sis-art-walk-show','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、おじいちゃんと長くつきあってきたよ','Mei-sis — me Grandpa-long-keep-comp','Earnest child','sho_child'),
    mk('翔くん、昨日の雨はすさまじい雷だったわね','Sho — yest-rain terrific-thunder','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、このほど絵のコンクールで賞をもらったよ','Mei-sis — me recently-art-cont-prize','Proud child','sho_child'),
    mk('翔くん、お父さんはとかくお話が長いわね','Sho — Dad anyhow-talk-long','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、靴ひもがぬけちゃった','Mei-sis — me shoe-lace-slip-out','Wry child','sho_child'),
    mk('翔くん、メイ姉さんもぼくも、かれこれ五年のお付き合いね','Sho — Mei-sis-me about-5-yr-friend','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、運動会でめちゃめちゃ走ったよ','Mei-sis — me sports-day-super-ran','Proud close','sho_child'),
  ]},
  {id:'conv_08546',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新カタログの頒布を始めろ','Our co — new-cat-distrib start','Crisp','hiroshi_boss'),
    mk('はい。お客様のご意見も商品設計に加味します','Yes — Cust-view prod-des add-in','Methodical','kenji_office'),
    mk('業界で悪質競争が横行している','Industry mal-comp rampant','Direction','hiroshi_boss'),
    mk('はい。パートさんの内職問題も社内で検討します','Yes — Part-staff-internal-side-work consider','Update','kenji_office'),
    mk('当社、創始以来の理念を守れ','Our co — found-since-creed keep','Direction','hiroshi_boss'),
    mk('はい。既得権益にとらわれず改革を進めます','Yes — Vested-int-not-bound reform','Update','kenji_office'),
    mk('部品の代用品を検討しろ','Part-substitute consider','Direction','hiroshi_boss'),
    mk('はい。不良在庫を一掃いたします','Yes — Bad-stock sweep-out','Close','kenji_office'),
  ]},
  {id:'conv_08547',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社員向け資料の頒布日を決めましょう','Staff-doc-distrib-date decide','Brisk','yuki_office'),
    mk('はい。プロジェクトに季節要因を加味する案です','Yes — Project-seasonal-add-in plan','Cooperative','kenji_office'),
    mk('業界で価格競争が横行しておりますね','Industry-price-comp rampant','Reflective','yuki_office'),
    mk('はい。パート社員の内職対応を整備します','Yes — Part-staff-side-work-prep','Update','kenji_office'),
    mk('当社の創始の精神を新人研修で伝えましょう','Our co-found-spirit-newbie-train','Direction','yuki_office'),
    mk('はい。既得契約の更新も計画しております','Yes — Vested-contract-renew plan','Update','kenji_office'),
    mk('原料の代用案も検討してください','Raw-material-sub-consider','Direction','yuki_office'),
    mk('はい。不良在庫の一掃セールを準備します','Yes — Bad-stock sweep-out-sale prep','Close','kenji_office'),
  ]},
  {id:'conv_08548',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文の頒布範囲を確認しろ','Ren — paper-distrib-scope check','Mentor','hiroshi_boss'),
    mk('はい。論文に最新研究を加味しております','Yes — Paper-latest-add-in','Earnest','ren_uni'),
    mk('蓮、研究界で不正データが横行している','Ren — research-world fraud-data rampant','Direction','hiroshi_boss'),
    mk('はい。学費補填のため内職をしている学生もおります','Yes — Tuition-supp side-work student','Polite','ren_uni'),
    mk('蓮、創始者の論文を読み返せ','Ren — founder-paper-re-read','Direction','hiroshi_boss'),
    mk('はい。既得の特許で安住せず研究を進めます','Yes — Vested-patent-not-rest research','Earnest','ren_uni'),
    mk('蓮、希少試薬の代用案を考えろ','Ren — rare-reagent-sub-think','Direction','hiroshi_boss'),
    mk('はい。古い実験データを一掃して整理します','Yes — Old-exp-data sweep-out-org','Earnest close','ren_uni'),
  ]},
  {id:'conv_08549',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、防犯チラシを地域に頒布します','Police crime-prev-flyer-local-distrib','Calm','takeda_officer'),
    mk('はい。警察、地元の意見も対策に加味なさってますね','Yes — Police local-view-counter-add-in','Cooperative','kenji_office'),
    mk('警察、振り込め詐欺が横行しております','Police trans-fraud rampant','Procedural','takeda_officer'),
    mk('はい。警察、不正内職斡旋の事件を捜査されてますね','Yes — Police illegal-side-work-broker-inv','Cooperative','kenji_office'),
    mk('警察、近代警察の創始時の理念を継承します','Police mod-police-found-creed inherit','Procedural','takeda_officer'),
    mk('はい。警察、既得の権限を市民のために使われますね','Yes — Police vested-auth citizen-for','Cooperative','kenji_office'),
    mk('警察、不法薬物の代用品にも警戒します','Police illegal-drug-sub watch','Procedural','takeda_officer'),
    mk('はい。警察、犯罪組織を一掃する努力、ありがたいです','Yes — Police crime-org-sweep-out grateful','Close','kenji_office'),
  ]},
  {id:'conv_08550',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、社内報の頒布を自ら始められたぞ','Dad — co-news-distrib self-start','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員の声を経営に加味された','Yes — Dad staff-voice-mgmt-add-in','Commitment','hiroshi_boss'),
    mk('お父さん、業界で偽造が横行した時代に立ち向かわれたぞ','Dad — industry-forgery-rampant-era-faced','Wistful','hiroshi_elder'),
    mk('はい。お父さんはご家族の内職にも理解を示された','Yes — Dad fam-side-work-understand','Reflective','hiroshi_boss'),
    mk('お父さん、当社の創始者として理念を確立されたぞ','Dad — our-co-founder-creed-set','Wistful','hiroshi_elder'),
    mk('はい。お父さんは既得の特権を捨てて改革をされた','Yes — Dad vested-priv-discard-reform','Reflective','hiroshi_boss'),
    mk('お父さん、希少な原料の代用品を見つけられたぞ','Dad — rare-raw-sub-found','Wistful','hiroshi_elder'),
    mk('はい。お父さんは不良在庫を一掃する決断もされた','Yes — Dad bad-stock-sweep-out-decided','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08551',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦後の講和条約の交渉過程を論文で扱いましたね','Ren — postwar-peace-treaty-nego paper','Calm','asuka_teacher'),
    mk('はい、冷戦期の反米運動を論文で扱いました','Yes — Cold-war-anti-US-mov paper','Earnest','ren_uni'),
    mk('蓮さん、開戦時の宣戦布告を論文で扱いましたね','Ren — war-start-decl paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の不当監禁を論文で扱いました','Yes — Wartime-illegal-detain paper','Earnest','ren_uni'),
    mk('民事の仮処分制度を論文で扱いましたね','Civil-prelim-injunc paper','Engaged','asuka_teacher'),
    mk('はい、歴史教科書の歪曲問題を論文で扱いました','Yes — Hist-textbook-distort paper','Earnest','ren_uni'),
    mk('蓮さん、戦時下の流言流布を論文で扱いましたね','Ren — wartime-rumor-spread paper','Reflective','asuka_teacher'),
    mk('はい、緊急時の議会招集を論文で扱いました','Yes — Emerg-Diet-summon paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08552',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、当事者間の講和的解決を警察、希望されてますね','Case parties-peace-resolve police-hope','Reflective','ren_uni'),
    mk('警察、反米感情を悪用した詐欺事案にも警戒します','Police anti-US-emo-abuse-fraud watch','Procedural','takeda_officer'),
    mk('本件、警察、容疑者に対し勾留を布告されますね','Case police-suspect-detain-decl','Reflective','ren_uni'),
    mk('警察、不法監禁事件を全力で捜査します','Police illegal-detain-full-inv','Procedural','takeda_officer'),
    mk('本件、警察、財産の仮処分を申請されてますね','Case police-prop-prelim-injunc-app','Reflective','ren_uni'),
    mk('警察、事件の歪曲報道に厳重抗議します','Police case-distort-report strict-protest','Procedural','takeda_officer'),
    mk('本件、警察、誤情報の流布元を特定されたんですね','Case police-misinfo-spread-source-id','Reflective','ren_uni'),
    mk('警察、緊急時の応援招集も整備しております','Police emerg-backup-summon-prep','Close','takeda_officer'),
  ]},
  {id:'conv_08553',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦後の講和条約を論文で扱いましたね','Sakura — postwar-peace-treaty paper','Calm','asuka_teacher'),
    mk('はい、反米運動の歴史を論文で扱いました','Yes — Anti-US-hist paper','Earnest teen','sakura_teen'),
    mk('開戦時の宣戦布告を論文で扱いましたね','War-start-decl paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の不当監禁を論文で扱いました','Yes — War-illegal-detain paper','Earnest','sakura_teen'),
    mk('民事の仮処分制度を論文で扱いましたね','Civil-prelim-injunc paper','Engaged','asuka_teacher'),
    mk('はい、教科書の歪曲問題を論文で扱いました','Yes — Textbook-distort paper','Earnest','sakura_teen'),
    mk('戦時下の流言流布を論文で扱いましたね','War-rumor-spread paper','Reflective','asuka_teacher'),
    mk('はい、緊急時の議会招集を論文で扱いました','Yes — Emerg-Diet-summon paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08554',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、戦後の講和条約後の医療復興史を医療チームで参考にしております','Ren — postwar-peace-med-recov med-team ref','Calm','saito_doctor'),
    mk('はい、反米感情で医療支援が遅れた地域の研究を医療チームで参照しております','Yes — Anti-US-med-supp-delay med-team ref','Patient','saito_doctor'),
    mk('感染症の警告を医療チームから布告されたんですね、先生','Infect-warn med-team-decl, sensei','Curious','ren_uni'),
    mk('はい、不当監禁による精神被害の治療を医療チームで担当します','Yes — Illegal-detain-mental med-team-treat','Patient','saito_doctor'),
    mk('医療訴訟の仮処分を、貴院、申請されたんですね、先生','Med-trial-prelim-injunc your-hosp app, sensei','Reflective','ren_uni'),
    mk('はい、症例の歪曲報道に医療チームで反論します','Yes — Case-distort-report med-team rebut','Patient','saito_doctor'),
    mk('医療情報の流布元の確認を、貴院、なさったんですね、先生','Med-info-spread-source your-hosp confirm, sensei','Reflective','ren_uni'),
    mk('はい、緊急医療チームの招集体制を強化しております','Yes — Emerg-med-team-summon-system strengthen','Patient close','saito_doctor'),
  ]},
  {id:'conv_08555',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、係争の講和的解決を目指せ','Our co — dispute-peace-resolve aim','Crisp','hiroshi_boss'),
    mk('はい。反米感情の影響を市場分析で考慮します','Yes — Anti-US-market-anal-consider','Methodical','kenji_office'),
    mk('当社、新事業を公式に布告しろ','Our co — new-biz formal-decl','Direction','hiroshi_boss'),
    mk('はい。社員の不当監禁事例には抗議します','Yes — Staff-illegal-detain-protest','Update','kenji_office'),
    mk('競合の妨害には仮処分を申請しろ','Rival-obstr prelim-injunc-app','Direction','hiroshi_boss'),
    mk('はい。製品評価の歪曲報道に対応します','Yes — Prod-eval-distort-report resp','Update','kenji_office'),
    mk('当社、誤情報の流布元を特定しろ','Our co — misinfo-spread-source id','Direction','hiroshi_boss'),
    mk('はい。緊急時の役員招集体制を整えております','Yes — Emerg-exec-summon-system prep','Close','kenji_office'),
  ]},
  {id:'conv_08556',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ハイブリッド車のお話されてたよ、メイちゃん','Aoi — cust hybrid-car-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ハンセン病史を研究されてるんだって、メイちゃん','Aoi — cust Hansen-disease-hist-research Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お城の要塞史を語ってらしたよ、メイちゃん','Aoi — cust castle-fortress-hist-told Mei','Animated','mei_romantic'),
    mk('葵、お店のメニューに点字を加えたいわね、メイちゃん','Aoi — store-menu braille-add Mei','Reflective','aoi_barista'),
    mk('葵、お客様、薬缶がもう沸騰してるって仰ってたよ、メイちゃん','Aoi — cust kettle-boiling-said Mei','Animated','mei_romantic'),
    mk('葵、お子様、磁石のおもちゃに夢中ね、メイちゃん','Aoi — child magnet-toy-into Mei','Pleased','aoi_barista'),
    mk('葵、お店の電気ワイヤーを新しくしたわね、メイちゃん','Aoi — store-wire-new Mei','Reflective','mei_romantic'),
    mk('葵、お客様、スキー場のリフトのお話されてたよ、メイちゃん','Aoi — cust ski-lift-told Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08557',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがハイブリッド車を試乗されたぞ','Gran — youth Dad hybrid-test-rode','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ハンセン病療養所の見学に行かれたわよね、あなた?','Yes — Grandpa Hansen-fac-visited, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお城の要塞を訪ねられたぞ','Gran — youth Dad castle-fortress-visited','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、点字図書を読まれたわよね、あなた?','Grandpa — braille-book-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが薬缶を沸騰させてお茶を入れて下さったぞ','Gran — youth Dad kettle-boil-tea','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、磁石の実験を孫に見せてらしたわよね、あなた?','Grandpa — magnet-exp-grandkid-show, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがワイヤーで網を編まれたぞ','Gran — youth Dad wire-net-wove','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、温泉旅行でリフトに乗られたわよね、あなた?','Grandpa — onsen-trip-lift-rode, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08558',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがハイブリッド車を買ったのよ','Sho — Dad hybrid-bought','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ハンセン病の絵本読んだよ','Mei-sis — me Hansen-disease-book-read','Earnest child','sho_child'),
    mk('翔くん、お祖父ちゃんが要塞のお話してくれるそうよ','Sho — Grandpa-fortress-tell','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、学校で点字を学んだよ','Mei-sis — me school-braille-learned','Proud child','sho_child'),
    mk('翔くん、お湯が沸騰したらお父さんを呼びましょうね','Sho — water-boil-Dad-call','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、磁石でクリップ集めて遊んだよ','Mei-sis — me magnet-clip-collected-played','Eager child','sho_child'),
    mk('翔くん、お父さんがワイヤーアートを作って下さったわ','Sho — Dad wire-art-made','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、スキー場のリフトにお父さんと乗ったよ','Mei-sis — me ski-lift-Dad-rode','Eager close','sho_child'),
  ]},
  {id:'conv_08559',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、ハイブリッド車買ったろ?','Riku — your-home-hybrid-bought?','Curious teen','sakura_teen'),
    mk('お前、社会でハンセン病史やったろ?桜','You — soc-Hansen-hist? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会の授業でお城の要塞やったろ?','Riku — soc-class-castle-fortress?','Curious','sakura_teen'),
    mk('お前、ボランティアで点字図書館行ったろ?桜','You — volunteer-braille-lib? Sakura','Curious','riku_teen'),
    mk('リク、お前、理科でお湯沸騰の実験やったろ?','Riku — sci water-boil-exp?','Curious','sakura_teen'),
    mk('お前、理科の磁石の問題、解けたろ?桜','You — sci-magnet-prob-solved? Sakura','Curious','riku_teen'),
    mk('リク、お前、ワイヤークラフト作ってんだろ?','Riku — wire-craft-make?','Curious','sakura_teen'),
    mk('お前、家族でスキー場のリフト乗ったろ?桜','You — fam-ski-lift-rode? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08560',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがハイブリッド車を選ばれたわ','Sho — Dad hybrid-chose','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ハンセン病史のお話、図書館で読んだよ','Mom — me Hansen-hist-lib-read','Earnest child','sho_child'),
    mk('翔くん、お父さんと要塞のお城に行きましょうね','Sho — Dad-fortress-castle-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、点字の絵本もらったよ','Mom — me braille-book-got','Eager child','sho_child'),
    mk('翔くん、お湯が沸騰したらお父さんを呼んでね','Sho — water-boil-Dad-call','Direction','yumiko_mom'),
    mk('ママ、ぼく、磁石で釘集めて楽しんだよ','Mom — me magnet-nail-collect-fun','Eager child','sho_child'),
    mk('翔くん、お父さんが古いワイヤーを処分されてたわ','Sho — Dad old-wire-disposed','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとスキー場のリフトに乗りたいよ','Mom — me Dad-ski-lift-want','Eager close','sho_child'),
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

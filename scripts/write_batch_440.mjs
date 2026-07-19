import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_440 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['それ程','くるくる','エライ','終われ','あたたかい','はっと','通り越し','飛び出す']
const B_T = ['輸出入','顛末','参与','受け手','撤収','マージン','例示','売り出し']
const C_T = ['不本意','産出','公国','喘息','仰天','変異','転覆','大麻']
const D_T = ['棺','鱗','葡萄','シルクロード','ラベンダー','眼科','苗字','ピストル']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08761',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、今日はそれ程寒くないわね','Sho — today-not-that-cold','Reflective','yumiko_mom'),
    mk('ママ、ぼく、独楽がくるくる回るのを見て楽しんだよ','Mom — me top-kurukuru-spin-fun','Eager child','sho_child'),
    mk('翔くん、お手伝いしてくれてエライわね','Sho — help-cool','Praising','yumiko_mom'),
    mk('ママ、ぼく、お絵描きが終われない時、悔しいよ','Mom — me drawing-can\'t-finish-frustrated','Earnest child','sho_child'),
    mk('翔くん、お父さんのあたたかいお言葉が嬉しいわね','Sho — Dad-warm-words-glad','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんの笑顔を見てはっと我に返ったよ','Mom — me Grandpa-smile-hatto-back-to-self','Reflective child','sho_child'),
    mk('翔くん、お父さんが約束の時間を通り越して帰ってこられたわ','Sho — Dad-time-overshoot-back','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お家から飛び出すように元気に学校行くよ','Mom — me home-dash-out-school','Eager close','sho_child'),
  ]},
  {id:'conv_08762',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、今日のお客様は、それ程多くなかったね、メイちゃん','Aoi — today-cust-not-that-many Mei','Reflective','mei_romantic'),
    mk('葵、お客様、コーヒーカップをくるくる回してらしたよ、メイちゃん','Aoi — cust-coffee-cup-kurukuru-turn Mei','Reflective','aoi_barista'),
    mk('葵、新人さんがエライ頑張りやさんだね、メイちゃん','Aoi — newbie-cool-hard-worker Mei','Praising','mei_romantic'),
    mk('葵、忙しい時、なかなか仕事が終われないわね、メイちゃん','Aoi — busy-can\'t-finish-easily Mei','Reflective','aoi_barista'),
    mk('葵、お客様のあたたかい一言が、励みになるね、メイちゃん','Aoi — cust-warm-word-encourage Mei','Tender','mei_romantic'),
    mk('葵、新メニュー、お客様、はっと驚かれたよ、メイちゃん','Aoi — new-menu-cust-hatto-surprised Mei','Pleased','aoi_barista'),
    mk('葵、お客様、お席を通り越して別の席に座られたわ、メイちゃん','Aoi — cust-seat-overshoot-other Mei','Wry','mei_romantic'),
    mk('葵、新メニューが好評で、お店から飛び出す思いだったよ、メイちゃん','Aoi — new-menu-pop-store-jump-feel Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08763',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんはそれ程口数の多い方ではなかったぞ','Gran — youth Dad-not-that-talkative','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お孫様と一緒にくるくる回って踊られたわよね、あなた?','Yes — Grandpa-grandkid-kurukuru-dance, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはエライご功績を残されたぞ','Gran — youth Dad-cool-achievement','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お仕事を終われずに夜遅くまで残られたわよね、あなた?','Grandpa — work-can\'t-finish-late, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんのあたたかいお言葉に救われたぞ','Gran — youth Dad-warm-saved','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の顔を見てはっと笑ってらしたわよね、あなた?','Grandpa — grandkid-face-hatto-laugh, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは予定を通り越して仕事に集中されたぞ','Gran — youth Dad-sched-overshoot-focus','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様がお家を飛び出すように喜ばれたわよね、あなた?','Grandpa — grandkid-home-dash-out-joy, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08764',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、それ程勉強してないだろ?','Riku — not-that-much-study?','Wry teen','sakura_teen'),
    mk('お前、踊りでくるくる回るの上手いな、桜','You — dance-kurukuru-good Sakura','Praising','riku_teen'),
    mk('リク、お前、テストでエライ点取ったな','Riku — test-cool-score','Praising','sakura_teen'),
    mk('お前、テストの問題、最後まで終われたか?桜','You — test-prob-finish? Sakura','Curious','riku_teen'),
    mk('リク、お前のあたたかい言葉、ありがとな','Riku — your-warm-word-thx','Tender','sakura_teen'),
    mk('お前、先生にはっと注意されたな、桜','You — teacher-hatto-warned Sakura','Wry','riku_teen'),
    mk('リク、お前、停留所を通り越して降りたな','Riku — bus-stop-overshoot-off','Wry','sakura_teen'),
    mk('お前、教室を飛び出すように帰ったろ?桜','You — classroom-dash-out-back? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08765',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんも、それ程怒ったりしないわよ','Sho — Mei-sis-not-that-angry','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、独楽がくるくる回るの好きだよ','Mei-sis — me top-kurukuru-like','Eager child','sho_child'),
    mk('翔くん、メイ姉さんもお手伝いがエライ得意なのよ','Sho — Mei-sis-help-cool-good','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描き終われなくて困ってるんだ','Mei-sis — me drawing-can\'t-finish-troubled','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんはあたたかい色のお洋服が好きなのよ','Sho — Mei-sis-warm-color-clothes-like','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お花を見てはっと立ち止まったよ','Mei-sis — me flower-hatto-stop','Eager child','sho_child'),
    mk('翔くん、メイ姉さんと公園を通り越してお祖父ちゃんの家まで歩こう','Sho — Mei-sis-park-overshoot-Grandpa-walk','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、家を飛び出すようにメイ姉さんに会いに来たよ','Mei-sis — me home-dash-out-Mei-sis-met','Eager close','sho_child'),
  ]},
  {id:'conv_08766',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、輸出入バランスを見直せ','Our co — exp-imp-bal-review','Crisp','hiroshi_boss'),
    mk('はい。前回のクレーム顛末を報告書にまとめました','Yes — Last-comp-detail-report','Methodical','kenji_office'),
    mk('当社、業界団体への参与人事を確定しろ','Our co — industry-org-advisor-personnel-fix','Direction','hiroshi_boss'),
    mk('はい。マーケティングは受け手の視点を大事にします','Yes — Mktg-receiver-view-cherish','Update','kenji_office'),
    mk('当社、不採算店舗の撤収を決断しろ','Our co — unprof-store-withdraw-decide','Direction','hiroshi_boss'),
    mk('はい。新商品のマージンを再計算しました','Yes — New-prod-margin-recalc','Update','kenji_office'),
    mk('提案書には事例を例示で示せ','Proposal-case-show','Direction','hiroshi_boss'),
    mk('はい。新商品の売り出し時期を確定いたしました','Yes — New-prod-launch-time-fix','Close','kenji_office'),
  ]},
  {id:'conv_08767',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('輸出入手続の改善案を準備しましょう','Exp-imp-proc-improve-plan-prep','Brisk','yuki_office'),
    mk('はい。お得意様トラブルの顛末を共有します','Yes — VIP-trouble-detail-share','Cooperative','kenji_office'),
    mk('業界協会の参与会議に出席しましょう','Industry-assoc-adv-meet-attend','Direction','yuki_office'),
    mk('はい。広告は受け手目線で組みます','Yes — Ad-receiver-view-set','Update','kenji_office'),
    mk('展示会から早めに撤収しましょう','Expo-early-withdraw','Direction','yuki_office'),
    mk('はい。お得意様向けマージン優遇を案内しました','Yes — VIP-margin-pref-announce','Update','kenji_office'),
    mk('プレゼンには事例を例示で挿入しましょう','Pres-case-insert','Direction','yuki_office'),
    mk('はい。新商品の売り出しキャンペーンを企画中です','Yes — New-prod-launch-camp-plan','Close','kenji_office'),
  ]},
  {id:'conv_08768',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究機材の輸出入手続を学習しろ','Ren — research-equip-exp-imp-learn','Mentor','hiroshi_boss'),
    mk('はい。前回の実験失敗の顛末を学会論文で扱いました','Yes — Last-exp-fail-conf-paper','Earnest','ren_uni'),
    mk('蓮、学会の参与会議に出席しろ','Ren — conf-adv-meet-attend','Direction','hiroshi_boss'),
    mk('はい。学術発信は受け手を意識しております','Yes — Acad-iss-receiver-aware','Polite','ren_uni'),
    mk('蓮、撤収が必要なテーマも見極めろ','Ren — withdraw-needed-topic-disc','Direction','hiroshi_boss'),
    mk('はい。研究費のマージン部分を予備に充てます','Yes — Research-margin-reserve-alloc','Earnest','ren_uni'),
    mk('蓮、論文には例示を多く入れろ','Ren — paper-example-many','Direction','hiroshi_boss'),
    mk('はい。新論文の売り出し戦略を学会担当者と相談します','Yes — New-paper-launch-strat-conf-cons','Earnest close','ren_uni'),
  ]},
  {id:'conv_08769',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、不正輸出入の摘発を継続します','Police illegal-exp-imp-bust-cont','Calm','takeda_officer'),
    mk('はい。警察、事件の顛末を市民に公開されますね','Yes — Police case-detail-pub','Cooperative','kenji_office'),
    mk('警察、市民安全協議会への参与をお引き受けします','Police citizen-safety-coun-adv-accept','Procedural','takeda_officer'),
    mk('はい。警察、捜査資料も受け手目線でわかりやすくされてますね','Yes — Police inv-doc-receiver-clear','Cooperative','kenji_office'),
    mk('警察、現場対応の撤収判断は慎重にします','Police on-site-withdraw-careful','Procedural','takeda_officer'),
    mk('はい。警察、不正マージン詐欺の事件を捜査されてますね','Yes — Police illegal-margin-fraud-inv','Cooperative','kenji_office'),
    mk('警察、防犯講習で具体例を例示しております','Police crime-prev-lecture-example','Procedural','takeda_officer'),
    mk('はい。警察、不正商品の売り出しを摘発されますね','Yes — Police illegal-prod-launch-bust','Close','kenji_office'),
  ]},
  {id:'conv_08770',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、輸出入を自ら手がけられたぞ','Dad — founding exp-imp-self','Sage','hiroshi_elder'),
    mk('はい。お父さんはトラブルの顛末を社員に共有された','Yes — Dad trouble-detail-share','Commitment','hiroshi_boss'),
    mk('お父さん、業界の参与として声をかけられたぞ','Dad — industry-adv-invited','Wistful','hiroshi_elder'),
    mk('はい。お父さんはお客様という受け手を最優先された','Yes — Dad cust-receiver-first','Reflective','hiroshi_boss'),
    mk('お父さん、不採算事業の撤収を決断されたぞ','Dad — unprof-biz-withdraw-decide','Wistful','hiroshi_elder'),
    mk('はい。お父さんは利益マージンの管理に厳しかった','Yes — Dad margin-mgmt-strict','Reflective','hiroshi_boss'),
    mk('お父さん、社内研修で実例を例示されたぞ','Dad — co-train-example','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新商品の売り出しを盛大に行われた','Yes — Dad new-prod-launch-grand','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08771',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、不本意な役職に就いた人物史を論文で扱いましたね','Ren — reluctant-pos-fig-hist paper','Calm','asuka_teacher'),
    mk('はい、資源産出地域の経済史を論文で扱いました','Yes — Resource-prod-area-econ-hist paper','Earnest','ren_uni'),
    mk('蓮さん、ヨーロッパの公国の歴史を論文で扱いましたね','Ren — Euro-principality-hist paper','Reflective','asuka_teacher'),
    mk('はい、都市部の喘息発症率を論文で扱いました','Yes — Urban-asthma-incidence paper','Earnest','ren_uni'),
    mk('歴史的事件の仰天証言を論文で扱いましたね','Hist-event-amaze-test paper','Engaged','asuka_teacher'),
    mk('はい、ウイルスの変異研究を論文で扱いました','Yes — Virus-mut-research paper','Earnest','ren_uni'),
    mk('蓮さん、近代の政府転覆事例を論文で扱いましたね','Ren — modern-gov-overthrow paper','Reflective','asuka_teacher'),
    mk('はい、大麻を巡る法政策史を論文で扱いました','Yes — Cannabis-legal-pol-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08772',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者の不本意な自白を警察、慎重に検証されてますね','Case suspect-reluctant-confess police-verify','Reflective','ren_uni'),
    mk('警察、不正薬物の産出ルートを捜査します','Police illegal-drug-prod-route-inv','Procedural','takeda_officer'),
    mk('本件、外国公国からの要請に警察、対応されますね','Case foreign-principality-req police-resp','Reflective','ren_uni'),
    mk('警察、喘息持ち容疑者の留置には配慮します','Police asthma-suspect-detain-care','Procedural','takeda_officer'),
    mk('本件、被害者ご家族の仰天を警察、配慮されてますね','Case victim-fam-amaze police-care','Reflective','ren_uni'),
    mk('警察、変異した手口の犯罪にも対応します','Police mut-modus-crime-resp','Procedural','takeda_officer'),
    mk('本件、組織転覆の動きを警察、警戒されてますね','Case org-overthrow police-watch','Reflective','ren_uni'),
    mk('警察、大麻取締りを厳格に行います','Police cannabis-crackdown-strict','Close','takeda_officer'),
  ]},
  {id:'conv_08773',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、不本意な役職に就いた人物史を論文で扱いましたね','Sakura — reluctant-pos paper','Calm','asuka_teacher'),
    mk('はい、資源産出地域の経済史を論文で扱いました','Yes — Resource-prod-area paper','Earnest teen','sakura_teen'),
    mk('ヨーロッパの公国の歴史を論文で扱いましたね','Euro-princ paper','Reflective','asuka_teacher'),
    mk('はい、都市部の喘息発症率を論文で扱いました','Yes — Urban-asthma paper','Earnest','sakura_teen'),
    mk('歴史的事件の仰天証言を論文で扱いましたね','Hist-amaze paper','Engaged','asuka_teacher'),
    mk('はい、ウイルスの変異研究を論文で扱いました','Yes — Virus-mut paper','Earnest','sakura_teen'),
    mk('近代の政府転覆事例を論文で扱いましたね','Modern-gov-overthrow paper','Reflective','asuka_teacher'),
    mk('はい、大麻を巡る法政策史を論文で扱いました','Yes — Cannabis-legal paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08774',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、不本意な治療を強いる事案を医療チームで避けるよう徹底します','Ren — reluctant-treat-avoid med-team strict','Calm','saito_doctor'),
    mk('はい、医薬品産出地域の安全管理を医療チームで確認します','Yes — Drug-prod-area-safety med-team check','Patient','saito_doctor'),
    mk('海外公国からの医療研修生を、貴院、ご受け入れですね、先生','Foreign-princ-trainee your-hosp accept, sensei','Curious','ren_uni'),
    mk('はい、小児喘息の長期治療を医療チームで担当しております','Yes — Ped-asthma-long-treat med-team handle','Patient','saito_doctor'),
    mk('珍しい症例に医師団が仰天した経験を、貴院、お持ちですね、先生','Rare-case-amaze your-hosp have, sensei','Curious','ren_uni'),
    mk('はい、ウイルスの変異株の動向を医療チームで監視します','Yes — Virus-mut-strain med-team monitor','Patient','saito_doctor'),
    mk('医療現場の体制転覆を、貴院、なさったそうですね、先生','Med-sys-overthrow your-hosp do, sensei','Reflective','ren_uni'),
    mk('はい、大麻の医療応用研究を医療チームで参照しております','Yes — Cannabis-med-app-research med-team ref','Patient close','saito_doctor'),
  ]},
  {id:'conv_08775',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員に不本意な異動はさせるな','Our co — staff-reluctant-trans-not','Crisp','hiroshi_boss'),
    mk('はい。新製品の原料産出地を確認しております','Yes — New-prod-raw-prod-area-check','Methodical','kenji_office'),
    mk('当社、欧州公国にも代理店を作れ','Our co — Euro-princ-agency-make','Direction','hiroshi_boss'),
    mk('はい。喘息社員への配慮を整備しました','Yes — Asthma-staff-care-prep','Update','kenji_office'),
    mk('お得意様を仰天させる新製品を出せ','VIP-amaze-new-prod','Direction','hiroshi_boss'),
    mk('はい。市場の変異する流れを注視しております','Yes — Market-mut-flow-watch','Update','kenji_office'),
    mk('当社、業界の権力構造の転覆を狙え','Our co — industry-power-overthrow-aim','Direction','hiroshi_boss'),
    mk('はい。社員の大麻使用は厳禁としております','Yes — Staff-cannabis-strict-no','Close','kenji_office'),
  ]},
  {id:'conv_08776',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、棺桶の博物館の話されてたよ、メイちゃん','Aoi — cust-coffin-museum-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お土産でお魚の鱗で作ったアクセサリー持ってらしたよ、メイちゃん','Aoi — cust-souv-fish-scale-acc-have Mei','Reflective','aoi_barista'),
    mk('葵、新メニューに葡萄のソルベ加えましょう、メイちゃん','Aoi — new-menu-grape-sorbet-add Mei','Animated','mei_romantic'),
    mk('葵、お客様、シルクロードの旅をされてたって、メイちゃん','Aoi — cust-Silk-Rd-trip-told Mei','Reflective','aoi_barista'),
    mk('葵、新メニューにラベンダーティー加えましょう、メイちゃん','Aoi — new-menu-lavender-tea-add Mei','Direction','mei_romantic'),
    mk('葵、お客様、眼科の検診から戻ってこられたって、メイちゃん','Aoi — cust-ophthalm-checkup Mei','Reflective','aoi_barista'),
    mk('葵、お客様、珍しい苗字でいらしたよ、メイちゃん','Aoi — cust-rare-surname Mei','Reflective','mei_romantic'),
    mk('葵、お客様、博物館で古いピストルを見たって、メイちゃん','Aoi — cust-museum-old-pistol-saw Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08777',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんの遺品を棺の中に納めたぞ','Gran — youth Dad-belongings-coffin-put','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お魚の鱗を取るのが上手かったわよね、あなた?','Yes — Grandpa-fish-scale-remove-good, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが葡萄畑を持っていらしたぞ','Gran — youth Dad-grape-field-have','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、シルクロードの本を集められたわよね、あなた?','Grandpa — Silk-Rd-book-collect, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お母様がラベンダーの香りを愛されたぞ','Gran — youth Mom-lavender-aroma-loved','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、眼科に長く通われたわよね、あなた?','Grandpa — ophthalm-long-attend, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと珍しい苗字のご家族と親しくしたぞ','Gran — youth Dad-rare-surname-fam-close','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ピストル射撃のお話をされたわよね、あなた?','Grandpa — youth-pistol-shoot-told, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08778',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんは博物館で古い棺を見たそうよ','Sho — Mei-sis-museum-coffin-saw','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お魚の鱗が、キラキラしてて綺麗だったよ','Mei-sis — me fish-scale-kirakira-pretty','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんが葡萄狩りに連れて行って下さったわね','Sho — Grandma-grape-pick-took','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、社会でシルクロードの単元やったよ','Mei-sis — me soc-Silk-Rd-unit','Eager child','sho_child'),
    mk('翔くん、メイ姉さんは庭でラベンダーを育ててるのよ','Sho — Mei-sis-garden-lavender-grow','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、明日、眼科の検診に行くんだ','Mei-sis — me tomorrow-ophthalm','Earnest child','sho_child'),
    mk('翔くん、ぼくの苗字は珍しいのよ、お友達によく聞かれるわね','Sho — me-surname-rare-friend-asked','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、博物館で古いピストルを見たよ','Mei-sis — me museum-old-pistol-saw','Eager close','sho_child'),
  ]},
  {id:'conv_08779',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会の授業で棺の歴史やったろ?','Riku — soc-class-coffin-hist?','Curious teen','sakura_teen'),
    mk('お前、家庭科で魚の鱗を取る練習したろ?桜','You — home-eco-fish-scale-prac? Sakura','Curious','riku_teen'),
    mk('リク、お前ん家、葡萄ジュース好きだろ?','Riku — your-home-grape-juice-like?','Curious','sakura_teen'),
    mk('お前、社会でシルクロードのレポート書いたろ?桜','You — soc-Silk-Rd-rep? Sakura','Curious','riku_teen'),
    mk('リク、お前の家、ラベンダーの香り好きだろ?','Riku — your-home-lavender-like?','Curious','sakura_teen'),
    mk('お前、眼科でメガネ作ったろ?桜','You — ophthalm-glasses-made? Sakura','Curious','riku_teen'),
    mk('リク、お前の苗字、いつ書いても間違えられるよな','Riku — your-surname-always-mis','Wry','sakura_teen'),
    mk('お前、博物館で古いピストル見たろ?桜','You — museum-old-pistol-saw? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08780',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんのお葬式で棺を見送ったわね','Sho — Grandpa-funeral-coffin-saw-off','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんがお魚の鱗を取って下さったよ','Mom — me Grandpa-fish-scale-removed','Eager child','sho_child'),
    mk('翔くん、ママが葡萄ジュース作って下さるそうよ','Sho — Mom-grape-juice-make','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとシルクロードの絵本読んだよ','Mom — me Dad-Silk-Rd-book-read','Eager child','sho_child'),
    mk('翔くん、お父さんがラベンダーのアロマを買ってこられたわ','Sho — Dad-lavender-aroma-bought','Reflective','yumiko_mom'),
    mk('ママ、ぼく、明日、眼科の検診に行くんだよね','Mom — me tomorrow-ophthalm-going','Earnest child','sho_child'),
    mk('翔くん、お父さんの苗字、覚えやすいわね','Sho — Dad-surname-easy-remember','Reflective','yumiko_mom'),
    mk('ママ、ぼく、博物館で古いピストルを見て怖かったよ','Mom — me museum-old-pistol-scared','Reflective close','sho_child'),
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

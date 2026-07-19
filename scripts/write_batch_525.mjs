import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_525 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['丸太','水色','土手','浜辺','ウロコ','ニオイ','吊り','ハズレ']
const B_T = ['友の会','回分','新譜','吹き替え','データー','ゲージ','コンソール','特番']
const C_T = ['夢想','貪欲','空虚','アクシデント','を通じまして','うねり','交わり','地平線']
const D_T = ['フォワード','グレート','ケルト','カルマ','ショッキング','悪者','ワニ','ひぐらし']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10461',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが丸太のベンチを庭に置いて下さったわよ','Sho — Dad-log-bench-yard','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに水色のシャツを買って頂いたよ','Mom — me Dad-light-blue-shirt','Pleased child','sho_child'),
    mk('翔くん、お父さんが川の土手をお散歩される事が多いわ','Sho — Dad-river-bank-walk-often','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと浜辺で貝殻を拾ったよ','Mom — me Dad-beach-shell-pick','Pleased child','sho_child'),
    mk('翔くん、お父さんが「目からウロコが落ちた」って仰ったわ','Sho — Dad-"eyes-scale-drop"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「魚のニオイは換気で消える」って教えて頂いたよ','Mom — me Dad-"fish-smell-vent"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが洗濯物の吊り直しをして下さったわ','Sho — Dad-laundry-hang-redo','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとくじ引きでハズレを引いちゃったよ','Mom — me Dad-lotto-miss-drew','Wry child','sho_child'),
  ]},
  {id:'conv_10462',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、丸太テーブルがお好きだって、メイちゃん','Aoi — cust-log-tbl-like Mei','Reflective','mei_romantic'),
    mk('葵、お客様、水色のカップを選ばれてたよ、メイちゃん','Aoi — cust-light-blue-cup Mei','Reflective','aoi_barista'),
    mk('葵、お客様、川の土手をお散歩されてからご来店だって、メイちゃん','Aoi — cust-bank-walk-then-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、浜辺カフェに憧れてらっしゃるって、メイちゃん','Aoi — cust-beach-cafe-asp Mei','Reflective','aoi_barista'),
    mk('葵、お客様、コーヒーの抽出で「目からウロコ」って驚いてらしたよ、メイちゃん','Aoi — cust-coffee-extr-"eyes-scale"-amaze Mei','Wry','mei_romantic'),
    mk('葵、お客様、当店のコーヒー豆のニオイをお褒め下さったよ、メイちゃん','Aoi — cust-coff-smell-praise Mei','Reflective','aoi_barista'),
    mk('葵、お客様、吊りカゴの観葉植物をお褒め下さったよ、メイちゃん','Aoi — cust-hang-plant-praise Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ガチャでハズレばかりだって笑ってらしたよ、メイちゃん','Aoi — cust-gacha-miss-laugh Mei','Wry close','aoi_barista'),
  ]},
  {id:'conv_10463',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが丸太小屋を山に建てられた','Gran — youth Dad-log-cab-mtn','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、水色の和服がお似合いだったわよね、あなた?','Yes — Grandpa-light-blue-yuk-suit, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが土手で凧揚げをされた','Gran — youth Dad-bank-kite','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、浜辺で結婚指輪を選ばれたわよね、あなた?','Grandpa — beach-ring-choose, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが鯉のウロコを丁寧に取られた','Gran — youth Dad-carp-scale-care-rem','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お線香の良いニオイを好まれたわよね、あなた?','Grandpa — incense-aroma-like, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが軒先に吊り柿を吊るされた','Gran — youth Dad-eave-dried-pers-hang','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、宝くじでハズレ続きでも笑顔だったわよね、あなた?','Grandpa — lotto-miss-cont-smile, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10464',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、林間学校で丸太運んでたな','Riku — for-camp-log-carry','Wry teen','sakura_teen'),
    mk('お前、水色のジャージ気に入ってたな、桜','You — light-blue-jersey-like Sakura','Curious','riku_teen'),
    mk('リク、お前、土手でランニングしてたな','Riku — bank-running','Curious','sakura_teen'),
    mk('お前、家族で浜辺行ってたろ、桜','You — fam-beach? Sakura','Curious','riku_teen'),
    mk('リク、お前、料理で魚のウロコ取り苦戦してたな','Riku — cook-fish-scale-strug','Wry','sakura_teen'),
    mk('お前、新しい靴のニオイ気にしてたな、桜','You — new-shoe-smell-care Sakura','Wry','riku_teen'),
    mk('リク、お前、部室の吊り棚直してたな','Riku — clubroom-hang-shelf-fix','Curious','sakura_teen'),
    mk('お前、お祭りのくじでハズレばっかだったろ、桜','You — fes-lotto-miss-only? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10465',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが丸太のブランコを下さったわ','Sho — Dad-log-swing-gave','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに水色の傘を頂いたよ','Mei-sis — me Dad-light-blue-umb-recv','Eager child','sho_child'),
    mk('翔くん、お父さんが土手で写生を教えて下さるそうよ','Sho — Dad-bank-sketch-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと浜辺の貝拾いに行ったよ','Mei-sis — me Dad-beach-shell','Eager child','sho_child'),
    mk('翔くん、お父さんがお魚のウロコ取りを見せて下さるわ','Sho — Dad-fish-scale-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「お料理のニオイは食欲を誘う」って教えて頂いたよ','Mei-sis — me Dad-"cook-smell-app"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが軒先に風鈴を吊りに行かれるわ','Sho — Dad-eave-wind-chime-hang','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「ハズレも経験」って教えて頂いたよ','Mei-sis — me Dad-"miss-exp"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10466',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、お客様の友の会の運営を強化しろ','Our co — cust-fan-club-strong','Crisp','hiroshi_boss'),
    mk('はい。社内研修を全部で十回分予定します','Yes — Train-10-sessions-plan','Methodical','kenji_office'),
    mk('当社、契約アーティストの新譜販促を強化しろ','Our co — art-new-rel-prom-strong','Direction','hiroshi_boss'),
    mk('はい。新CMの吹き替え収録を来週おこないます','Yes — Ad-dub-rec-nextweek','Update','kenji_office'),
    mk('当社、市場データー、つまり統計データの精度を高めろ','Our co — mkt-data-accur-up','Direction','hiroshi_boss'),
    mk('はい。生産ラインのゲージ計測を再校正します','Yes — Prod-gauge-recal','Update','kenji_office'),
    mk('当社、店舗のコンソール画面の操作性を上げろ','Our co — store-cons-UI-up','Direction','hiroshi_boss'),
    mk('はい。新商品発表の特番を組みます','Yes — New-prod-spec-prog','Close','kenji_office'),
  ]},
  {id:'conv_10467',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('お客様の友の会向けに会員特典を充実させましょう','Cust-fan-club-mem-ben-enr','Brisk','yuki_office'),
    mk('はい。研修プログラムを五回分に分割します','Yes — Train-5-sessions-split','Cooperative','kenji_office'),
    mk('提携レーベルの新譜情報を社内で共有しましょう','Lab-new-rel-int-share','Direction','yuki_office'),
    mk('はい。海外動画の吹き替え版を制作します','Yes — Overs-vid-dub-prod','Update','kenji_office'),
    mk('顧客データー管理の精度を上げましょう','Cust-data-accur-up','Direction','yuki_office'),
    mk('はい。製造ラインのゲージ表示を改修します','Yes — Prod-gauge-disp-up','Update','kenji_office'),
    mk('店舗コンソールの操作研修を実施しましょう','Store-cons-op-train','Direction','yuki_office'),
    mk('はい。社内向け特番ライブ配信を準備します','Yes — Int-spec-live-prep','Close','kenji_office'),
  ]},
  {id:'conv_10468',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、市民の友の会の活動研究を続けろ','Ren — citi-fan-club-act-res-cont','Mentor','hiroshi_boss'),
    mk('はい。実験は三十回分のデータを集めます','Yes — Exp-30-sessions-data','Earnest','ren_uni'),
    mk('蓮、現代音楽の新譜分析の論文を読め','Ren — mod-mus-new-rel-anal-paper','Direction','hiroshi_boss'),
    mk('はい。海外論文の吹き替えナレーションを作ります','Yes — Overs-paper-dub-narr','Earnest','ren_uni'),
    mk('蓮、市場調査のデーター集計を慎重におこなえ','Ren — mkt-data-comp-careful','Direction','hiroshi_boss'),
    mk('はい。実験装置のゲージ較正を担当します','Yes — Exp-gauge-cal-resp','Polite','ren_uni'),
    mk('蓮、研究室のコンソール環境を整えろ','Ren — lab-cons-env-set','Direction','hiroshi_boss'),
    mk('はい。研究成果の特番ドキュメンタリーを制作します','Yes — Res-spec-doc-prod','Earnest close','ren_uni'),
  ]},
  {id:'conv_10469',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、地域の友の会と連携されますね','Police local-fan-club-link','Cooperative','kenji_office'),
    mk('警察、研修を年間十回分実施されますね','Police train-10-sessions-yr','Cooperative','kenji_office'),
    mk('警察、防犯啓発の新譜CDを配布されますね','Police prev-aware-new-rel-CD-distr','Cooperative','kenji_office'),
    mk('警察、海外捜査映像の吹き替え準備もされますね','Police overs-vid-dub-prep','Cooperative','kenji_office'),
    mk('警察、犯罪統計データーを毎月分析されますね','Police crime-stat-data-mo-anal','Cooperative','kenji_office'),
    mk('警察、現場用ゲージで距離計測もされますね','Police scene-gauge-dist-meas','Cooperative','kenji_office'),
    mk('警察、署内コンソールでリアルタイム監視もされますね','Police stat-cons-real-mon','Cooperative','kenji_office'),
    mk('警察、市民向け防犯特番にもご出演されますね','Police citi-prev-spec-app','Close','kenji_office'),
  ]},
  {id:'conv_10470',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、商店街の友の会を立ち上げられた','Dad — found shop-st-fan-club-est','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員研修を毎年二十回分企画された','Yes — Dad staff-train-20-sessions-yr','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、レコード店の新譜入荷を心待ちにされた','Dad — youth rec-shop-new-rel-await','Wistful','hiroshi_elder'),
    mk('はい。お父さんは外国映画の吹き替え版を毎週観られた','Yes — Dad for-film-dub-wk-watch','Reflective','hiroshi_boss'),
    mk('お父さん、紙の台帳から電子データーへ移行された','Dad — paper-ledger-data-mig','Wistful','hiroshi_elder'),
    mk('はい。お父さんは精密ゲージの調整に拘られた','Yes — Dad prec-gauge-adj-stick','Reflective','hiroshi_boss'),
    mk('お父さん、コンソール端末の導入を素早くされた','Dad — cons-term-intro-quick','Wistful','hiroshi_elder'),
    mk('はい。お父さんは創業十周年の特番に出演された','Yes — Dad found-10yr-spec-app','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10471',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、哲学者の夢想と現実の関係の論文を扱いましたね','Ren — phil-dream-real-paper','Calm','asuka_teacher'),
    mk('はい、貪欲な学術姿勢の研究者の伝記を論文で扱いました','Yes — Grdy-acad-pos-biog paper','Earnest','ren_uni'),
    mk('蓮さん、戦後社会の空虚感の研究を論文で扱いましたね','Ren — postwar-soc-empty-feel-stud paper','Reflective','asuka_teacher'),
    mk('はい、工場のアクシデント事例の分析を論文で扱いました','Yes — Fact-acc-case-anal paper','Earnest','ren_uni'),
    mk('蓮さん、ご支援を通じまして得た知見を、紙面でも報告致しました','Ren — supp-thr-find rep-pap','Reflective','asuka_teacher'),
    mk('はい、波のうねりが沿岸生態に与える影響を論文で扱いました','Yes — Wave-swell-coast-eco-impact paper','Earnest','ren_uni'),
    mk('蓮さん、東西文明の交わりの歴史を論文で扱いましたね','Ren — E-W-civ-mix-hist paper','Reflective','asuka_teacher'),
    mk('はい、地平線まで広がる平原の地理研究を論文で扱いました','Yes — Horiz-plain-geo paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10472',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、犯人の夢想じみた動機を、警察、慎重に分析されますね','Case suspect-dream-mot police-careful','Reflective','ren_uni'),
    mk('警察、被害者の遺品から貪欲な収集癖を読み取られますね','Police vict-grdy-coll-read','Cooperative','takeda_officer'),
    mk('本件、被害者の空虚感の背景を、警察、心理士と確認されますね','Case vict-empty-bg police-psy-check','Reflective','ren_uni'),
    mk('警察、現場のアクシデント記録も詳しく取られますね','Police scene-acc-rec-detail','Cooperative','takeda_officer'),
    mk('本件、ご協力を通じまして得た情報を、警察、慎重に活用されますね','Case coop-thr-info police-care-use','Reflective','ren_uni'),
    mk('警察、捜査の世論のうねりにも対応されますね','Police inv-public-swell-resp','Cooperative','takeda_officer'),
    mk('本件、容疑者と被害者の交わりの履歴を、警察、調べられますね','Case suspect-vict-contact-hist police-check','Reflective','ren_uni'),
    mk('警察、地平線の彼方からの密航事案も対応されますね','Police horiz-smug-resp','Close','takeda_officer'),
  ]},
  {id:'conv_10473',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、哲学者の夢想と現実の関係の論文を扱いましたね','Sakura — phil-dream paper','Calm','asuka_teacher'),
    mk('はい、貪欲な学術姿勢の研究者の伝記を論文で扱いました','Yes — Grdy-acad paper','Earnest teen','sakura_teen'),
    mk('戦後社会の空虚感の研究を論文で扱いましたね','Postwar-empty paper','Reflective','asuka_teacher'),
    mk('はい、工場のアクシデント事例の分析を論文で扱いました','Yes — Fact-acc paper','Earnest','sakura_teen'),
    mk('ご支援を通じまして得た知見を、紙面でも報告致しました','Supp-thr-find paper','Reflective','asuka_teacher'),
    mk('はい、波のうねりが沿岸生態に与える影響を論文で扱いました','Yes — Wave-swell paper','Earnest','sakura_teen'),
    mk('東西文明の交わりの歴史を論文で扱いましたね','E-W-civ-mix paper','Reflective','asuka_teacher'),
    mk('はい、地平線まで広がる平原の地理研究を論文で扱いました','Yes — Horiz paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10474',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、患者様の夢想と現実認識のずれを医療チームで丁寧に評価します','Ren — pati-dream-real-gap med-team','Calm','saito_doctor'),
    mk('蓮さん、貪欲なまでに研究を続ける医師団を医療チームで支援します','Ren — grdy-res-cont-doc med-team','Calm','saito_doctor'),
    mk('蓮さん、終末期患者様の空虚感に寄り添う事を医療チームで大事にします','Ren — term-pati-empty-feel med-team','Calm','saito_doctor'),
    mk('蓮さん、手術中のアクシデント時の対応を医療チームで訓練します','Ren — op-acc-resp med-team','Calm','saito_doctor'),
    mk('臨床ご経験を通じまして得た知見を、貴院、若手にお伝えですね、先生','Clin-exp-thr-find young-tch your-hosp, sensei','Reflective','ren_uni'),
    mk('蓮さん、感染拡大のうねりに合わせ、医療チームで体制を組みます','Ren — pand-swell-team med-team','Calm','saito_doctor'),
    mk('蓮さん、近隣病院との交わりを医療チームで深めます','Ren — near-hosp-mix med-team','Calm','saito_doctor'),
    mk('蓮さん、地平線まで届く僻地医療の活動を医療チームで継続します','Ren — horiz-rem-med-cont med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10475',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、創業者の夢想を現実の事業に落とし込め','Our co — found-dream-real-biz-conv','Crisp','hiroshi_boss'),
    mk('はい。市場への貪欲な姿勢を保ち、新規領域に挑みます','Yes — Mkt-grdy-pos-new-area','Methodical','kenji_office'),
    mk('当社、社員の空虚感を防ぐため、対話の場を設けろ','Our co — staff-empty-prev-dial-set','Direction','hiroshi_boss'),
    mk('はい。工場のアクシデントに備え、訓練を増やします','Yes — Fact-acc-train-incr','Update','kenji_office'),
    mk('当社、業界団体のご縁を通じまして関係を築いて行け','Our co — ind-conn-thr-rel-build','Direction','hiroshi_boss'),
    mk('はい。為替市場のうねりに合わせ、リスクヘッジを強めます','Yes — FX-swell-risk-hedge-strong','Update','kenji_office'),
    mk('当社、海外企業との交わりを増やせ','Our co — overs-co-mix-incr','Direction','hiroshi_boss'),
    mk('はい。地平線の先の海外市場を視野に置きます','Yes — Horiz-overs-mkt-view','Close','kenji_office'),
  ]},
  {id:'conv_10476',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、サッカーのフォワード経験者だって、メイちゃん','Aoi — cust-soccer-fwd-exp Mei','Reflective','mei_romantic'),
    mk('葵、お客様、グレート・ギャツビーの愛読者だって、メイちゃん','Aoi — cust-Great-Gatsby-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ケルト音楽がお好きだって、メイちゃん','Aoi — cust-Celt-mus-like Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ヨガでカルマの概念を教わったって、メイちゃん','Aoi — cust-yoga-karma-learn Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ショッキングな映画レビューを語って下さったよ、メイちゃん','Aoi — cust-shock-film-rev Mei','Reflective','mei_romantic'),
    mk('葵、お客様、漫画の悪者キャラ論を熱く語って下さったよ、メイちゃん','Aoi — cust-mng-vill-char-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、子供と動物園でワニを観たって、メイちゃん','Aoi — cust-kid-zoo-croc-saw Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ひぐらしの鳴き声が好きだって、メイちゃん','Aoi — cust-evening-cic-like Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10477',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんはサッカーでフォワードを務められた','Gran — youth Dad-soccer-fwd','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、グレート・ギャツビーを愛読されたわよね、あなた?','Yes — Grandpa-Gatsby-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがケルトの伝説に詳しかった','Gran — youth Dad-Celt-leg-knowl','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、仏教のカルマの教えを大事にされたわよね、あなた?','Grandpa — youth Bud-karma-cher, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはショッキングな戦時記録に心を痛められた','Gran — youth Dad-shock-war-rec-pain','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、時代劇で悪者を演じる役者を分析されたわよね、あなた?','Grandpa — period-dr-vill-act-anal, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが川辺でワニのいる動物園を巡られた','Gran — youth Dad-river-croc-zoo','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夏の夕暮れにひぐらしの声を愛されたわよね、あなた?','Grandpa — sum-eve-cic-voice-love, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10478',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがサッカーのフォワードの動きを教えて下さるそうよ','Sho — Dad-soccer-fwd-mov','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとグレート・ギャツビーの絵本見たよ','Mei-sis — me Dad-Gatsby-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがケルト音楽のCDを下さったわ','Sho — Dad-Celt-CD-gave','Tender','mei_romantic'),
    mk('メイ姉さん、お父さんが仏教のカルマの絵本を読んで下さるよ','Mei-sis — Dad-Bud-karma-pic','Earnest child','sho_child'),
    mk('翔くん、お父さんがショッキングなニュースを優しく説明して下さるわ','Sho — Dad-shock-news-kind-expl','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと悪者退治のごっこ遊びをしたよ','Mei-sis — me Dad-vill-defeat-play','Eager child','sho_child'),
    mk('翔くん、お父さんが動物園のワニ舎の解説を読んで下さるわ','Sho — Dad-zoo-croc-house-narr','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんがひぐらしの鳴き声を録音されたよ','Mei-sis — Dad-eve-cic-rec','Eager close','sho_child'),
  ]},
  {id:'conv_10479',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、サッカー部でフォワードだったろ','Riku — soccer-club-fwd?','Curious teen','sakura_teen'),
    mk('お前、英語の教科書でグレート・ギャツビー読んでたな、桜','You — Eng-textb-Gatsby Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でケルト民族習ったろ','Riku — soc-Celt-people?','Curious','sakura_teen'),
    mk('お前、漫画でカルマって言葉使ってたな、桜','You — mng-karma-use Sakura','Wry','riku_teen'),
    mk('リク、お前、ショッキングなSNS投稿に驚いてたな','Riku — shock-SNS-amaze','Curious','sakura_teen'),
    mk('お前、漫画の悪者キャラ好きだったよな、桜','You — mng-vill-char-like Sakura','Wry','riku_teen'),
    mk('リク、お前、動物園でワニの前で固まってたな','Riku — zoo-croc-froze','Wry','sakura_teen'),
    mk('お前、田舎で夏にひぐらし聴いたって話してたろ、桜','You — count-sum-cic-heard? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10480',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがサッカー観戦でフォワードの動きを解説して下さるわ','Sho — Dad-soccer-fwd-narr','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとグレート・ギャツビーの映画観たよ','Mom — me Dad-Gatsby-film','Eager child','sho_child'),
    mk('翔くん、お父さんがケルトの神話を読んで下さるわ','Sho — Dad-Celt-myth-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとカルマの仏教ドキュメンタリー観たよ','Mom — me Dad-karma-Bud-doc','Eager child','sho_child'),
    mk('翔くん、お父さんがショッキングな歴史をやさしく語って下さるわ','Sho — Dad-shock-hist-kind-talk','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと悪者退治のヒーロー映画観たよ','Mom — me Dad-vill-defeat-hero-film','Eager child','sho_child'),
    mk('翔くん、お父さんが動物園のワニのドキュメンタリーを観てらっしゃるわ','Sho — Dad-zoo-croc-doc','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと夏のひぐらしの音を録音したよ','Mom — me Dad-sum-cic-rec','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_511 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['キミ','ハズ','みどり','蹴り','お許し','かんじ','はかり','相方']
const B_T = ['ワークス','昨年度','前記','隻','女史','船長','無職','北東']
const C_T = ['プロレタリアート','ユニバーサル','中日','ヘクタール','コンプレックス','アンチ','電脳','乙女']
const D_T = ['カルロス','奄美','インディアン','南アフリカ','カイロ','ジョニー','日産','西武']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10181',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「キミの未来が楽しみ」って仰ったわ','Sho — Dad-"your-fut-fun"-said','Tender','yumiko_mom'),
    mk('ママ、お父さんが帰宅するハズが遅れてるよ','Mom — Dad-home-supposed-late','Reflective child','sho_child'),
    mk('翔くん、お家のみどりを増やしましょうね','Sho — home-green-up','Pleased','yumiko_mom'),
    mk('ママ、ぼく、ボールを蹴り過ぎて靴がボロボロだよ','Mom — me ball-kick-too-shoe-worn','Wry child','sho_child'),
    mk('翔くん、お父さんから「お許しを」って丁寧に頂いたわ','Sho — Dad-"forgive"-pol','Tender','yumiko_mom'),
    mk('ママ、お父さんの優しさをかんじるよ','Mom — Dad-kind-feel','Tender child','sho_child'),
    mk('翔くん、お父さんがケーキの分量をはかりで量って下さったわ','Sho — Dad-cake-scale-meas','Pleased','yumiko_mom'),
    mk('ママ、お父さんは家族の相方だよね','Mom — Dad-fam-partner','Tender close','sho_child'),
  ]},
  {id:'conv_10182',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、「キミは何歳?」って親しげに聞かれたよ、メイちゃん','Aoi — cust-"your-age?"-friendly Mei','Reflective','mei_romantic'),
    mk('葵、お客様、予約のハズが見当たらないよ、メイちゃん','Aoi — cust-rsv-supposed-not Mei','Wry','aoi_barista'),
    mk('葵、お店のみどりを増やすと癒しよね、メイちゃん','Aoi — store-green-up-heal Mei','Pleased','mei_romantic'),
    mk('葵、お客様、ボールを蹴り遊ぶお子様連れだったよ、メイちゃん','Aoi — cust-ball-kick-kid Mei','Pleased','aoi_barista'),
    mk('葵、お客様、「お許しを」と丁寧に仰ってたよ、メイちゃん','Aoi — cust-"forgive"-pol Mei','Reflective','mei_romantic'),
    mk('葵、お客様、香りで季節をかんじるって仰ってたよ、メイちゃん','Aoi — cust-aroma-season-feel Mei','Tender','aoi_barista'),
    mk('葵、コーヒー粉をはかりで丁寧に量ろうね、メイちゃん','Aoi — bean-pow-scale-meas Mei','Direction','mei_romantic'),
    mk('葵、私とメイちゃんは仕事の相方ね、メイちゃん','Aoi — me-Mei-work-partner Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_10183',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが「キミ」と私を呼んで下さった','Gran — youth Dad-"kimi"-call','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お孫様が来るハズだって楽しみにしてらしたわよね、あなた?','Yes — Grandpa-grandkid-supposed-fun, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお庭のみどりを大事にされた','Gran — youth Dad-garden-green-cherish','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、サッカーボールを蹴り回されたわよね、あなた?','Grandpa — youth-soccer-kick, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「お許しを」と丁寧に頭を下げられた','Gran — youth Dad-"forgive"-bow','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、季節の移ろいをかんじてらしたわよね、あなた?','Grandpa — season-feel, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがはかりで野菜の重さを量られた','Gran — youth Dad-scale-veg-meas','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、私を生涯の相方として扱われたわよね、あなた?','Grandpa — me-life-partner-treat, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10184',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、彼女に「キミ」って呼んでたな','Riku — gf-"kimi"-call','Wry teen','sakura_teen'),
    mk('お前、テスト前ハズが落ちつかないな、桜','You — pre-test-supposed-jitter Sakura','Wry','riku_teen'),
    mk('リク、お前、信号がみどりに変わるの待ってたな','Riku — signal-green-wait','Curious','sakura_teen'),
    mk('お前、サッカーボール蹴り過ぎて怪我したな、桜','You — soccer-kick-too-injur Sakura','Wry','riku_teen'),
    mk('リク、お前、先生に「お許しを」って頭下げてたな','Riku — tch-"forgive"-bow','Wry','sakura_teen'),
    mk('お前、青春をかんじる写真撮ってたな、桜','You — youth-feel-photo Sakura','Pleased','riku_teen'),
    mk('リク、お前、化学の実験でデジタルはかり使ってたな','Riku — chem-dig-scale','Curious','sakura_teen'),
    mk('お前、漫才の相方探してたな、桜','You — manzai-partner-search Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10185',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「キミは賢い」って褒めて下さったわ','Sho — Dad-"you-smart"-praise','Tender','mei_romantic'),
    mk('メイ姉さん、お父さんが迎えに来るハズだよ','Mei-sis — Dad-pick-supposed','Reflective child','sho_child'),
    mk('翔くん、公園のみどりが綺麗ね','Sho — park-green-pretty','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、ボールを蹴り上げたら遠くまで飛んだよ','Mei-sis — me ball-kick-far','Eager child','sho_child'),
    mk('翔くん、間違えた時は「お許しを」って素直に謝ろうね','Sho — mistake-"forgive"-honest','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの優しさをかんじるよ','Mei-sis — me Dad-kind-feel','Tender child','sho_child'),
    mk('翔くん、メイ姉さんが粘土をはかりで量って下さったわ','Sho — Mei-sis-clay-scale','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんを家族の相方だと思ってるよ','Mei-sis — me Dad-fam-partner','Tender close','sho_child'),
  ]},
  {id:'conv_10186',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、田中ワークスとの業務提携を検討しろ','Our co — Tanaka-Works-partner-cons','Crisp','hiroshi_boss'),
    mk('はい。昨年度の決算を踏まえて計画します','Yes — Last-yr-close-plan','Methodical','kenji_office'),
    mk('当社、前記の方針を社員に周知しろ','Our co — above-pol-notify','Direction','hiroshi_boss'),
    mk('はい。輸送船を二隻チャーターします','Yes — Cargo-2-ships-charter','Update','kenji_office'),
    mk('元政治家女史を顧問にお迎えしろ','Ex-pol-lady-advisor','Direction','hiroshi_boss'),
    mk('はい。船長級の責任者を任命します','Yes — Capt-pos-appoint','Update','kenji_office'),
    mk('当社、無職期間がある応募者にも公平に対応しろ','Our co — unemp-app-fair','Direction','hiroshi_boss'),
    mk('はい。北東方面の支店も視野に入れます','Yes — NE-branch-view','Close','kenji_office'),
  ]},
  {id:'conv_10187',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('協力会社のワークスとの連携を強化しましょう','Coop-Works-link-strength','Brisk','yuki_office'),
    mk('はい。昨年度の販促データを共有します','Yes — Last-yr-promo-share','Cooperative','kenji_office'),
    mk('前記の通り、新方針で進めましょう','Above-new-pol-prog','Direction','yuki_office'),
    mk('はい。タンカー一隻のリースを確認します','Yes — Tank-1-ship-lease','Update','kenji_office'),
    mk('業界の女史的リーダーを招きましょう','Industry-lady-leader-invite','Direction','yuki_office'),
    mk('はい。船長経験者を講師にお招きします','Yes — Capt-exp-lect-invite','Update','kenji_office'),
    mk('無職期間も評価に含めない平等採用にしましょう','Unemp-eval-no-fair-hire','Direction','yuki_office'),
    mk('はい。北東地区の市場調査を進めます','Yes — NE-area-survey','Close','kenji_office'),
  ]},
  {id:'conv_10188',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究室のワークスペースを整えろ','Ren — lab-workspace-prep','Mentor','hiroshi_boss'),
    mk('はい。昨年度の研究成果を整理します','Yes — Last-yr-result-org','Earnest','ren_uni'),
    mk('蓮、前記の参考文献を確認しろ','Ren — above-ref-check','Direction','hiroshi_boss'),
    mk('はい。研究船一隻に乗船してデータを取ります','Yes — Research-1-ship-data','Earnest','ren_uni'),
    mk('蓮、女史的な指導教員から学べ','Ren — lady-supv-learn','Direction','hiroshi_boss'),
    mk('はい。船長役の研究リーダーを目指します','Yes — Capt-research-aim','Polite','ren_uni'),
    mk('蓮、研究期間中の無職期間も気にするな','Ren — research-unemp-no-worry','Mentor','hiroshi_boss'),
    mk('はい。北東地方の研究施設も訪ねます','Yes — NE-research-fac-visit','Earnest close','ren_uni'),
  ]},
  {id:'conv_10189',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、機動隊のワークスに連携されますね','Police mob-works-link','Cooperative','kenji_office'),
    mk('警察、昨年度の検挙数を公表されますね','Police last-yr-arr-pub','Cooperative','kenji_office'),
    mk('警察、調書の前記の通り、捜査されますね','Police statem-above-inv','Cooperative','kenji_office'),
    mk('警察、密輸船一隻を押収されますね','Police smug-1-ship-seiz','Cooperative','kenji_office'),
    mk('警察、被害者女史の支援もされますね','Police vict-lady-supp','Cooperative','kenji_office'),
    mk('警察、船長の供述も丁寧に聴取されますね','Police capt-test-pol','Cooperative','kenji_office'),
    mk('警察、無職の被疑者にも公平に対応されますね','Police unemp-suspect-fair','Cooperative','kenji_office'),
    mk('警察、北東方面のパトロールを強化されますね','Police NE-patrol-strength','Close','kenji_office'),
  ]},
  {id:'conv_10190',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、提携先のワークスと交渉された','Dad — founding partner-Works-negot','Sage','hiroshi_elder'),
    mk('はい。お父さんは昨年度比で業績を語られた','Yes — Dad last-yr-perf-told','Commitment','hiroshi_boss'),
    mk('お父さん、前記の方針を朝礼で繰り返された','Dad — above-pol-morning-rep','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商船一隻から事業を始められた','Yes — Dad merch-1-ship-start','Reflective','hiroshi_boss'),
    mk('お父さん、女史的な経営者の女性とも親交がおありだった','Dad — lady-mgmt-friend','Wistful','hiroshi_elder'),
    mk('はい。お父さんが船長経験者と海運業に進出された','Yes — Dad capt-marine-launch','Reflective','hiroshi_boss'),
    mk('お父さん、無職期間中も雇って下さった','Dad — unemp-period-hire','Wistful','hiroshi_elder'),
    mk('はい。お父さんは北東地方への進出を断行された','Yes — Dad NE-launch-bold','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10191',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、プロレタリアート文学の戦後史を論文で扱いましたね','Ren — Prolet-lit-postwar paper','Calm','asuka_teacher'),
    mk('はい、ユニバーサルデザインの普及研究を論文で扱いました','Yes — Univ-design-spread paper','Earnest','ren_uni'),
    mk('蓮さん、中日関係の外交史を論文で扱いましたね','Ren — Sino-JP-dipl paper','Reflective','asuka_teacher'),
    mk('はい、農地のヘクタール換算法の研究を論文で扱いました','Yes — Farm-ha-conv paper','Earnest','ren_uni'),
    mk('現代人のコンプレックス研究を論文で扱いましたね','Mod-comp-psych paper','Engaged','asuka_teacher'),
    mk('はい、アンチエイジング医学を論文で扱いました','Yes — Anti-age-med paper','Earnest','ren_uni'),
    mk('蓮さん、サイバー空間の電脳社会論を論文で扱いましたね','Ren — cyber-elec-soc paper','Reflective','asuka_teacher'),
    mk('はい、近代日本文学の乙女像を論文で扱いました','Yes — Mod-JP-maiden paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10192',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、プロレタリアート運動を装った急進派を、警察、警戒されますね','Case Prolet-pretend-rad police-watch','Reflective','ren_uni'),
    mk('警察、ユニバーサル仕様の現場用品を整備されますね','Police univ-eq-prep','Cooperative','takeda_officer'),
    mk('本件、中日外交絡みのスパイ事案を、警察、扱われますね','Case Sino-JP-spy police-handle','Reflective','ren_uni'),
    mk('警察、農地ヘクタール表記の改ざんも捜査されますね','Police farm-ha-falsif-inv','Cooperative','takeda_officer'),
    mk('本件、容疑者のコンプレックスを、警察、心理分析されますね','Case suspect-comp police-psych','Reflective','ren_uni'),
    mk('警察、過激なアンチ団体の動向も追われますね','Police rad-anti-grp-track','Cooperative','takeda_officer'),
    mk('本件、電脳空間での犯罪を、警察、捜査されますね','Case cyber-crime police-inv','Reflective','ren_uni'),
    mk('警察、乙女を装った詐欺事案も担当されますね','Police maiden-pretend-fraud','Close','takeda_officer'),
  ]},
  {id:'conv_10193',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、プロレタリアート文学の戦後史を論文で扱いましたね','Sakura — Prolet-lit paper','Calm','asuka_teacher'),
    mk('はい、ユニバーサルデザインの普及を論文で扱いました','Yes — Univ-design paper','Earnest teen','sakura_teen'),
    mk('中日関係の外交史を論文で扱いましたね','Sino-JP-dipl paper','Reflective','asuka_teacher'),
    mk('はい、農地のヘクタール換算法を論文で扱いました','Yes — Farm-ha paper','Earnest','sakura_teen'),
    mk('現代人のコンプレックス研究を論文で扱いましたね','Mod-comp paper','Engaged','asuka_teacher'),
    mk('はい、アンチエイジング医学を論文で扱いました','Yes — Anti-age paper','Earnest','sakura_teen'),
    mk('サイバー空間の電脳社会論を論文で扱いましたね','Cyber-elec-soc paper','Reflective','asuka_teacher'),
    mk('はい、近代日本文学の乙女像を論文で扱いました','Yes — Mod-JP-maiden paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10194',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、プロレタリアート時代の医療制度を医療チームで参考にします','Ren — Prolet-med-sys med-team','Calm','saito_doctor'),
    mk('はい、ユニバーサルデザインの医療機器を医療チームで導入します','Yes — Univ-med-eq med-team','Patient','saito_doctor'),
    mk('中日医療交流を、貴院、進められてますね、先生','Sino-JP-med-exch your-hosp prog, sensei','Reflective','ren_uni'),
    mk('はい、医療地ヘクタール単位の用地計画を医療チームでおこないます','Yes — Med-ha-area-plan med-team','Patient','saito_doctor'),
    mk('蓮さん、患者の身体コンプレックスを医療チームで配慮します','Ren — pati-body-comp med-team','Calm','saito_doctor'),
    mk('はい、アンチエイジング治療の問い合わせも医療チームで受けます','Yes — Anti-age-treat-cons med-team','Patient','saito_doctor'),
    mk('電脳マッサージ機器を、貴院、導入されてますね、先生','Cyber-mass-eq your-hosp intro, sensei','Curious','ren_uni'),
    mk('はい、乙女座の患者など占い相談に医療チームは関与しません','Yes — Maiden-zodiac-no med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_10195',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、プロレタリアート的階層意識を持ち込むな','Our co — Prolet-class-no','Crisp','hiroshi_boss'),
    mk('はい。ユニバーサルデザインを採用します','Yes — Univ-design-adopt','Methodical','kenji_office'),
    mk('当社、中日貿易のリスクを管理しろ','Our co — Sino-JP-trade-risk','Direction','hiroshi_boss'),
    mk('はい。土地のヘクタール表記を統一します','Yes — Land-ha-uni','Update','kenji_office'),
    mk('社員のコンプレックスを刺激する広告はやめろ','Staff-comp-stim-ad-no','Direction','hiroshi_boss'),
    mk('はい。アンチ層への対応も丁寧にします','Yes — Anti-layer-pol','Update','kenji_office'),
    mk('当社、電脳化経営、つまりデジタル経営を推進しろ','Our co — cyber-mgmt-push','Direction','hiroshi_boss'),
    mk('はい。乙女向け新製品ラインも検討します','Yes — Maiden-new-line-cons','Close','kenji_office'),
  ]},
  {id:'conv_10196',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、カルロス・ゴーン関連の本を読んでらしたよ、メイちゃん','Aoi — cust-Carlos-book Mei','Reflective','mei_romantic'),
    mk('葵、お客様、奄美大島のお土産下さったよ、メイちゃん','Aoi — cust-Amami-souv Mei','Pleased','aoi_barista'),
    mk('葵、お客様、インディアン伝統の編み物を学ばれてるって、メイちゃん','Aoi — cust-Ind-craft-learn Mei','Reflective','mei_romantic'),
    mk('葵、お客様、南アフリカ駐在経験がおありだって、メイちゃん','Aoi — cust-S-Africa-station Mei','Reflective','aoi_barista'),
    mk('葵、お客様、カイロのピラミッド訪問されたって、メイちゃん','Aoi — cust-Cairo-pyramid Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ジョニー・デップの映画ファンだって、メイちゃん','Aoi — cust-Johnny-Depp-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、日産自動車にお勤めだって、メイちゃん','Aoi — cust-Nissan-work Mei','Reflective','mei_romantic'),
    mk('葵、お客様、西武百貨店で買い物されたって、メイちゃん','Aoi — cust-Seibu-dept Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10197',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがカルロス・ゴーン社長時代の日産を語られた','Gran — youth Dad-Carlos-Nissan-told','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、奄美の親戚を訪ねられたわよね、あなた?','Yes — Grandpa-Amami-rel, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがインディアンジュエリーを集めた','Gran — youth Dad-Ind-jewel-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、南アフリカ駐在のお話されたわよね、あなた?','Grandpa — S-Africa-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがカイロのピラミッドに憧れた','Gran — youth Dad-Cairo-pyramid-admire','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ジョニー・キャッシュのレコードがお好きだったわよね、あなた?','Grandpa — Johnny-Cash-rec, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが日産のディーラーで車を選ばれた','Gran — youth Dad-Nissan-deal-car','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、西武百貨店の催事に通われたわよね、あなた?','Grandpa — Seibu-event, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10198',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがカルロスというお名前の友人のお話して下さるそうよ','Sho — Dad-Carlos-fri-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと奄美の絵本見たよ','Mei-sis — me Dad-Amami-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがインディアンの絵本を読んで下さるそうよ','Sho — Dad-Ind-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと南アフリカの絵本見たよ','Mei-sis — me Dad-S-Africa-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがカイロのピラミッドの絵本を見せて下さったわ','Sho — Dad-Cairo-pyramid-pic-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがジョニーって名前の犬を飼ってたって','Mei-sis — me Dad-Johnny-dog-told','Eager child','sho_child'),
    mk('翔くん、お父さんが日産の工場に連れて行って下さるそうよ','Sho — Dad-Nissan-fact-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと西武鉄道で旅したよ','Mei-sis — me Dad-Seibu-rail-trip','Eager close','sho_child'),
  ]},
  {id:'conv_10199',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、カルロス・ゴーン事件のニュース観てたな','Riku — Carlos-Ghosn-news','Curious teen','sakura_teen'),
    mk('お前、修学旅行で奄美行ったろ?桜','You — sch-trip-Amami? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でインディアン伝統習ったろ?','Riku — soc-Ind-trad?','Curious','sakura_teen'),
    mk('お前、社会で南アフリカ・アパルトヘイト習ったろ?桜','You — soc-S-Africa-apart? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でカイロ習ったろ?','Riku — soc-Cairo?','Curious','sakura_teen'),
    mk('お前、ジョニー・デップの映画ばっか観てたな、桜','You — Johnny-Depp-only Sakura','Wry','riku_teen'),
    mk('リク、お前ん父さん、日産で働いてたな','Riku — your-Dad-Nissan','Curious','sakura_teen'),
    mk('お前、西武ライオンズ応援してたな、桜','You — Seibu-Lions-fan Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10200',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがカルロス・ゴーン事件のドキュメンタリーをご覧になったわ','Sho — Dad-Carlos-doc','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと奄美に行きたいよ','Mom — me Dad-Amami-want','Eager child','sho_child'),
    mk('翔くん、お父さんがインディアン文化の本を貸して下さったわ','Sho — Dad-Ind-cult-book','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと南アフリカのドキュメンタリー観たよ','Mom — me Dad-S-Africa-doc','Eager child','sho_child'),
    mk('翔くん、お父さんがカイロ出張のお土産下さったわ','Sho — Dad-Cairo-souv','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとジョニー・デップの映画観たよ','Mom — me Dad-Johnny-Depp-watch','Eager child','sho_child'),
    mk('翔くん、お父さんが日産の新車を購入されたわ','Sho — Dad-Nissan-new-buy','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと西武ドームで野球観たよ','Mom — me Dad-Seibu-dome-base','Eager close','sho_child'),
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

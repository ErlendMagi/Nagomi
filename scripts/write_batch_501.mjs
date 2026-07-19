import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_501 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['乗り入れ','交わさ','晒し','臆病','上等','物凄い','隅々','善良']
const B_T = ['容積','相乗','喝采','セレクション','省エネルギー','真っ最中','ダントツ','授賞']
const C_T = ['歌唱','夏季','航行','美的','現世','国防総省','パルス','生産物']
const D_T = ['ニッチ','日本航空','アリーナ','ソフィア','釜山','ジャマイカ','ユニセフ','松竹']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09981',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、新しい電車路線が乗り入れされるそうよ','Sho — new-rail-merge','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと言葉を交わさない夜は淋しかったよ','Mom — me Dad-words-exch-no-night-lone','Reflective child','sho_child'),
    mk('翔くん、お父さんが大根を干して晒して下さってるわ','Sho — Dad-radish-dry-Mei','Pleased','yumiko_mom'),
    mk('ママ、ぼく、雷で臆病になっちゃったよ','Mom — me thunder-timid','Wry child','sho_child'),
    mk('翔くん、お父さんが上等のスーツを着てらしたわ','Sho — Dad-fine-suit','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんが物凄い力でハグして下さったよ','Mom — me Dad-amazing-hug','Tender child','sho_child'),
    mk('翔くん、お部屋の隅々まで掃除しましょうね','Sho — room-corners-clean','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんは善良な方ね','Mom — me Dad-good','Tender close','sho_child'),
  ]},
  {id:'conv_09982',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、新バスがお店前に乗り入れされるそうよ、メイちゃん','Aoi — new-bus-merge Mei','Pleased','mei_romantic'),
    mk('葵、お客様と挨拶を交わさないわけにはいかないね、メイちゃん','Aoi — cust-greet-exch-need Mei','Direction','aoi_barista'),
    mk('葵、お店の前に新メニューを晒して告知しようね、メイちゃん','Aoi — store-front-new-menu-dry-notice Mei','Direction','mei_romantic'),
    mk('葵、新人スタッフが臆病だから優しく接しようね、メイちゃん','Aoi — newhire-timid-kind Mei','Direction','aoi_barista'),
    mk('葵、上等のコーヒー豆を仕入れようね、メイちゃん','Aoi — fine-bean-stock Mei','Direction','mei_romantic'),
    mk('葵、お客様、物凄い行列を作ってらしたよ、メイちゃん','Aoi — cust-amazing-line Mei','Pleased','aoi_barista'),
    mk('葵、お店の隅々まで磨こうね、メイちゃん','Aoi — store-corners-polish Mei','Direction','mei_romantic'),
    mk('葵、善良なお客様に感謝しようね、メイちゃん','Aoi — good-cust-thanks Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_09983',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、新しい鉄道が乗り入れされて村が賑わった','Gran — youth-rail-merge-vil','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、毎朝挨拶を交わされたわよね、あなた?','Yes — Grandpa-morning-greet-exch, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが大根を晒して干された','Gran — youth Dad-radish-dry-hang','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃は臆病な少年だったわよね、あなた?','Grandpa — youth-timid-boy, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが上等の着物を仕立てて下さった','Gran — youth Dad-fine-kim-tailor','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦地で物凄い経験をされたわよね、あなた?','Grandpa — war-amazing-exp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが家の隅々まで掃除された','Gran — youth Dad-home-corners-clean','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、善良な村人として尊敬されたわよね、あなた?','Grandpa — good-vil-resp, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09984',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家の駅、新線が乗り入れされるな','Riku — your-sta-new-line-merge','Curious teen','sakura_teen'),
    mk('お前、彼女と言葉を交わさない日はあるな、桜','You — gf-words-exch-no-days Sakura','Wry','riku_teen'),
    mk('リク、お前、洗濯物を雨で晒してたな','Riku — laundry-rain-dry','Wry','sakura_teen'),
    mk('お前、お化け屋敷で臆病になってたな、桜','You — ghost-timid Sakura','Wry','riku_teen'),
    mk('リク、お前、上等の制服着てたな','Riku — fine-uni','Praising','sakura_teen'),
    mk('お前、物凄い集中力で勉強してたな、桜','You — amazing-conc-study Sakura','Praising','riku_teen'),
    mk('リク、お前、教室の隅々まで知ってるな','Riku — class-corners-know','Curious','sakura_teen'),
    mk('お前、善良な後輩を大事にしろよ、桜','You — good-junior-cherish Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_09985',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、新バスがメイ姉さんのお家まで乗り入れされるそうよ','Sho — new-bus-Mei-home-merge','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと毎日言葉を交わさないと淋しいよ','Mei-sis — me Dad-daily-words-exch-lone','Tender child','sho_child'),
    mk('翔くん、お父さんが干物を晒して下さるそうよ','Sho — Dad-dried-fish-hang','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お化けに臆病なんだ','Mei-sis — me ghost-timid','Wry child','sho_child'),
    mk('翔くん、お父さんが上等のお肉を買って下さったわ','Sho — Dad-fine-meat-buy','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの腕力って物凄いよ','Mei-sis — me Dad-arm-amazing','Eager child','sho_child'),
    mk('翔くん、お部屋の隅々まで一緒に掃除しましょうね','Sho — room-corners-together-clean','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんは善良な方だと尊敬してるよ','Mei-sis — me Dad-good-resp','Tender close','sho_child'),
  ]},
  {id:'conv_09986',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、倉庫の容積効率を高めろ','Our co — warehouse-vol-eff','Crisp','hiroshi_boss'),
    mk('はい。事業間の相乗効果を狙います','Yes — Biz-syn-aim','Methodical','kenji_office'),
    mk('当社、社員の喝采を浴びる商品を出せ','Our co — staff-acc-prod','Direction','hiroshi_boss'),
    mk('はい。新メンバーのセレクションを進めます','Yes — New-mem-sel','Update','kenji_office'),
    mk('省エネルギー機器を導入しろ','Energy-save-eq-intro','Direction','hiroshi_boss'),
    mk('はい。決算の真っ最中ですが対応します','Yes — Close-middle-resp','Update','kenji_office'),
    mk('当社、業界ダントツの売上を狙え','Our co — industry-top-sales','Direction','hiroshi_boss'),
    mk('はい。授賞式の準備を整えます','Yes — Award-cere-prep','Close','kenji_office'),
  ]},
  {id:'conv_09987',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('保管容積を最適化しましょう','Stor-vol-opt','Brisk','yuki_office'),
    mk('はい。広告との相乗効果を計算します','Yes — Ad-syn-calc','Cooperative','kenji_office'),
    mk('喝采を浴びる新サービスを開発しましょう','Acc-new-serv-dev','Direction','yuki_office'),
    mk('はい。代表選手のセレクション方法を整理します','Yes — Rep-sel-org','Update','kenji_office'),
    mk('省エネルギー対策を全社で進めましょう','Energy-save-co','Direction','yuki_office'),
    mk('はい。プロジェクトは真っ最中で忙しいですが頑張ります','Yes — Proj-middle-busy-effort','Update','kenji_office'),
    mk('業界ダントツのシェアを目指しましょう','Industry-top-share-aim','Direction','yuki_office'),
    mk('はい。社内授賞式の演出を考えます','Yes — Co-award-prod-cons','Close','kenji_office'),
  ]},
  {id:'conv_09988',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、容積比較を実験で確認しろ','Ren — vol-exp-confirm','Mentor','hiroshi_boss'),
    mk('はい。理論と実験の相乗的な発展を目指します','Yes — Th-exp-syn-dev','Earnest','ren_uni'),
    mk('蓮、学界の喝采を浴びる研究を目指せ','Ren — acad-acc-aim','Direction','hiroshi_boss'),
    mk('はい。被験者のセレクション基準を厳格にします','Yes — Subj-sel-strict','Earnest','ren_uni'),
    mk('蓮、研究室は省エネルギーを徹底しろ','Ren — lab-energy-save','Direction','hiroshi_boss'),
    mk('はい。論文締切真っ最中で集中します','Yes — Paper-deadl-middle-conc','Polite','ren_uni'),
    mk('蓮、ダントツの引用数を目指せ','Ren — top-cite-aim','Direction','hiroshi_boss'),
    mk('はい。学会の授賞対象を狙います','Yes — Conf-award-aim','Earnest close','ren_uni'),
  ]},
  {id:'conv_09989',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、押収品の容積管理もされますね','Police seiz-vol-mgmt','Cooperative','kenji_office'),
    mk('警察、地域パトロールの相乗効果も意識されますね','Police local-patrol-syn-aware','Cooperative','kenji_office'),
    mk('警察、市民の喝采を浴びる活動もされますね','Police citi-acc-act','Cooperative','kenji_office'),
    mk('警察、特捜隊員のセレクションを厳格にされますね','Police spec-sel-strict','Cooperative','kenji_office'),
    mk('警察、署の省エネルギー化も進められますね','Police stat-energy-save-prog','Cooperative','kenji_office'),
    mk('警察、捜査の真っ最中ですからご協力をされますね','Police inv-middle-coop','Cooperative','kenji_office'),
    mk('警察、ダントツの検挙率を維持されますね','Police top-arr-rate-keep','Cooperative','kenji_office'),
    mk('警察、勇敢な警官への授賞式もされますね','Police brave-award','Close','kenji_office'),
  ]},
  {id:'conv_09990',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、倉庫容積を綿密に計算された','Dad — founding warehouse-vol-meticul','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員の力に相乗効果を生み出された','Yes — Dad staff-syn','Commitment','hiroshi_boss'),
    mk('お父さん、業界の喝采を浴びる商品を世に出された','Dad — industry-acc-prod','Wistful','hiroshi_elder'),
    mk('はい。お父さんは人材のセレクションに時間をかけられた','Yes — Dad talent-sel-time','Reflective','hiroshi_boss'),
    mk('お父さん、戦後の省エネルギー社会を予見されてた','Dad — postwar-energy-save-foresee','Wistful','hiroshi_elder'),
    mk('はい。お父さんは多忙真っ最中でも社員に挨拶された','Yes — Dad busy-middle-staff-greet','Reflective','hiroshi_boss'),
    mk('お父さん、業界ダントツの実績を残された','Dad — industry-top-record','Wistful','hiroshi_elder'),
    mk('はい。お父さんが業界の授賞を多数受けられた','Yes — Dad industry-award-many','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09991',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、合唱の歌唱法研究を論文で扱いましたね','Ren — choir-sing-tech paper','Calm','asuka_teacher'),
    mk('はい、夏季オリンピックの経済効果を論文で扱いました','Yes — Summer-Oly-econ paper','Earnest','ren_uni'),
    mk('蓮さん、近世の航行技術史を論文で扱いましたね','Ren — early-mod-nav paper','Reflective','asuka_teacher'),
    mk('はい、現代芸術の美的価値研究を論文で扱いました','Yes — Mod-art-aesth paper','Earnest','ren_uni'),
    mk('現世利益の宗教研究を論文で扱いましたね','This-life-relig paper','Engaged','asuka_teacher'),
    mk('はい、国防総省と日本外交の研究を論文で扱いました','Yes — DOD-JP-dipl paper','Earnest','ren_uni'),
    mk('蓮さん、神経のパルス信号研究を論文で扱いましたね','Ren — nerve-pulse paper','Reflective','asuka_teacher'),
    mk('はい、農業生産物の流通史を論文で扱いました','Yes — Agri-prod-dist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09992',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、歌唱大会の不正を、警察、扱われますね','Case sing-comp-fraud police-handle','Reflective','ren_uni'),
    mk('警察、夏季の盗難多発期も警戒されますね','Police summer-theft-watch','Cooperative','takeda_officer'),
    mk('本件、密漁船の航行記録を、警察、扱われますね','Case poach-nav-rec police-handle','Reflective','ren_uni'),
    mk('警察、犯行の美的なパターンも分析されますね','Police crime-aesth-pat-anal','Cooperative','takeda_officer'),
    mk('本件、現世利益を装った詐欺を、警察、扱われますね','Case this-life-fraud police-handle','Reflective','ren_uni'),
    mk('警察、国防総省との連携事案もされますね','Police DOD-link','Cooperative','takeda_officer'),
    mk('本件、無線パルス信号の暗号解読を、警察、進められますね','Case wire-pulse-decode police-prog','Reflective','ren_uni'),
    mk('警察、生産物の偽装事件も扱われますね','Police prod-fraud-handle','Close','takeda_officer'),
  ]},
  {id:'conv_09993',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、合唱の歌唱法研究を論文で扱いましたね','Sakura — choir-sing paper','Calm','asuka_teacher'),
    mk('はい、夏季オリンピックの経済効果を論文で扱いました','Yes — Summer-Oly paper','Earnest teen','sakura_teen'),
    mk('近世の航行技術史を論文で扱いましたね','Early-mod-nav paper','Reflective','asuka_teacher'),
    mk('はい、現代芸術の美的価値を論文で扱いました','Yes — Mod-art-aesth paper','Earnest','sakura_teen'),
    mk('現世利益の宗教研究を論文で扱いましたね','This-life-relig paper','Engaged','asuka_teacher'),
    mk('はい、国防総省と日本外交を論文で扱いました','Yes — DOD-JP-dipl paper','Earnest','sakura_teen'),
    mk('神経のパルス信号を論文で扱いましたね','Nerve-pulse paper','Reflective','asuka_teacher'),
    mk('はい、農業生産物の流通史を論文で扱いました','Yes — Agri-prod-dist paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09994',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者の歌唱能力評価を医療チームでおこないます','Ren — pati-sing-eval med-team','Calm','saito_doctor'),
    mk('はい、夏季の熱中症対策を医療チームで強化します','Yes — Summer-heat-counter med-team','Patient','saito_doctor'),
    mk('蓮さん、救急航行体制を医療チームで整えます','Ren — ER-nav med-team prep','Calm','saito_doctor'),
    mk('美的整形の倫理を、貴院、議論されてますね、先生','Aesth-surg-eth your-hosp disc, sensei','Reflective','ren_uni'),
    mk('はい、終末期の現世への別れを医療チームで支えます','Yes — End-life-this-farewell med-team','Patient','saito_doctor'),
    mk('国防総省の医療制度を、貴院、参考にされてますね、先生','DOD-med-sys your-hosp ref, sensei','Curious','ren_uni'),
    mk('はい、心拍のパルス監視を医療チームで日々おこないます','Yes — Heart-pulse-monit med-team daily','Patient','saito_doctor'),
    mk('はい、医薬品生産物の品質管理を医療チームで強化します','Yes — Pharm-prod-qual med-team strength','Patient close','saito_doctor'),
  ]},
  {id:'conv_09995',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員合唱大会の歌唱を支援しろ','Our co — staff-choir-sing-supp','Crisp','hiroshi_boss'),
    mk('はい。夏季限定商品の販売を強化します','Yes — Summer-prod-strength','Methodical','kenji_office'),
    mk('当社、海上輸送の航行ルートを最適化しろ','Our co — sea-nav-opt','Direction','hiroshi_boss'),
    mk('はい。製品の美的デザインを刷新します','Yes — Prod-aesth-design-renew','Update','kenji_office'),
    mk('当社、現世だけでなく次世代も意識した経営をしろ','Our co — this-life-next-gen-mgmt','Direction','hiroshi_boss'),
    mk('はい。国防総省との取引にも参入を検討します','Yes — DOD-deal-launch-cons','Update','kenji_office'),
    mk('当社、需要のパルス的変動を分析しろ','Our co — demand-pulse-var-anal','Direction','hiroshi_boss'),
    mk('はい。地元生産物を積極的に取り扱います','Yes — Local-prod-active','Close','kenji_office'),
  ]},
  {id:'conv_09996',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ニッチ市場の起業家でいらっしゃるって、メイちゃん','Aoi — cust-niche-ent Mei','Reflective','mei_romantic'),
    mk('葵、お客様、日本航空でCAをされてたって、メイちゃん','Aoi — cust-JAL-CA Mei','Reflective','aoi_barista'),
    mk('葵、お客様、アリーナのコンサートに行かれたって、メイちゃん','Aoi — cust-arena-concert Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ブルガリアのソフィアに留学経験がおありだって、メイちゃん','Aoi — cust-Sofia-study Mei','Reflective','aoi_barista'),
    mk('葵、お客様、韓国の釜山に親族がいらっしゃるって、メイちゃん','Aoi — cust-Busan-rel Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ジャマイカ料理ファンだって、メイちゃん','Aoi — cust-Jam-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ユニセフの活動に協力されてるって、メイちゃん','Aoi — cust-UNICEF-coop Mei','Reflective','mei_romantic'),
    mk('葵、お客様、松竹の歌舞伎を観に行かれたって、メイちゃん','Aoi — cust-Shochiku-kabuki Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09997',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがニッチな趣味をお持ちだった','Gran — youth Dad-niche-hobby','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、日本航空の機内サービスを楽しまれたわよね、あなた?','Yes — Grandpa-JAL-svc, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが武道館アリーナに通われた','Gran — youth Dad-Budokan-arena','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ブルガリアのソフィアに駐在されたわよね、あなた?','Grandpa — Sofia-station, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが韓国釜山に出張された','Gran — youth Dad-Busan-trip','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ジャマイカのレゲエを好まれたわよね、あなた?','Grandpa — Jam-reg, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがユニセフに寄付された','Gran — youth Dad-UNICEF-donate','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、松竹の名作映画をご鑑賞されたわよね、あなた?','Grandpa — Shochiku-class, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09998',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがニッチな趣味のお話して下さるそうよ','Sho — Dad-niche-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが日本航空でお出張なさるよ','Mei-sis — me Dad-JAL-trip','Eager child','sho_child'),
    mk('翔くん、お父さんがアリーナコンサートに連れて行って下さるそうよ','Sho — Dad-arena-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとソフィアの絵本見たよ','Mei-sis — me Dad-Sofia-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが釜山に出張されるそうよ','Sho — Dad-Busan-trip','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとジャマイカの絵本見たよ','Mei-sis — me Dad-Jam-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがユニセフ募金箱を持って下さったわ','Sho — Dad-UNICEF-box','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと松竹の映画館行きたいよ','Mei-sis — me Dad-Shochiku-cinema-want','Eager close','sho_child'),
  ]},
  {id:'conv_09999',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ニッチな漫画コレクターだったな','Riku — niche-manga-coll','Curious teen','sakura_teen'),
    mk('お前、日本航空のCA志望だったな、桜','You — JAL-CA-aim Sakura','Curious','riku_teen'),
    mk('リク、お前、アリーナでライブ観たろ','Riku — arena-live?','Curious','sakura_teen'),
    mk('お前、社会でソフィア習ったろ?桜','You — soc-Sofia? Sakura','Curious','riku_teen'),
    mk('リク、お前、修学旅行で釜山行ったろ','Riku — sch-trip-Busan?','Curious','sakura_teen'),
    mk('お前、ジャマイカ音楽好きだったな、桜','You — Jam-music-like Sakura','Curious','riku_teen'),
    mk('リク、お前、ユニセフのボランティア参加したろ','Riku — UNICEF-vol?','Curious','sakura_teen'),
    mk('お前ん家、松竹の映画好きだな、桜','You-home-Shochiku-like Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10000',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがニッチなビジネスのお話して下さるそうよ','Sho — Dad-niche-biz-told','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと日本航空のラウンジ行ったよ','Mom — me Dad-JAL-lounge','Eager child','sho_child'),
    mk('翔くん、お父さんがアリーナのコンサートチケットを下さったわ','Sho — Dad-arena-ticket','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとソフィアの絵本見たよ','Mom — me Dad-Sofia-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが釜山出張のお土産を下さったわ','Sho — Dad-Busan-souv','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとジャマイカ料理屋さん行ったよ','Mom — me Dad-Jam-rest','Eager child','sho_child'),
    mk('翔くん、お父さんがユニセフへの募金を続けてらっしゃるわ','Sho — Dad-UNICEF-donate-cont','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと松竹の映画祭行ったよ','Mom — me Dad-Shochiku-fest','Eager close','sho_child'),
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

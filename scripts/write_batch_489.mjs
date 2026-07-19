import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_489 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['子連れ','いかんせん','寒気','絶句','思いこん','ほど遠い','年老い','顔立ち']
const B_T = ['市政','不正確','手引き','ライフサイクル','移設','定率','不払い','ファクス']
const C_T = ['呪術','プラチナ','奏法','水力','日没','縫製','体外','亜鉛']
const D_T = ['ジョナサン','ジャカルタ','草津','マイアミ','ロースト','ニーチェ','のび太','ワトソン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09741',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが子連れのご家族をよく見守ってらっしゃるわ','Sho — Dad-kid-fam-watch','Tender','yumiko_mom'),
    mk('ママ、お父さん、いかんせんお疲れみたいだよ','Mom — Dad-can-not-tired','Reflective child','sho_child'),
    mk('翔くん、今日は寒気がするから温かくしてね','Sho — today-chill-warm','Direction','yumiko_mom'),
    mk('ママ、お父さんが感動して絶句されてたよ','Mom — Dad-moved-speechless','Reflective child','sho_child'),
    mk('翔くん、お父さんがぼくを子供だと思いこんでらっしゃるかな','Sho — Dad-kid-still-thinking','Wry','yumiko_mom'),
    mk('ママ、宿題は完璧にはほど遠いけど頑張ったよ','Mom — homework-perf-far-effort','Earnest child','sho_child'),
    mk('翔くん、お祖父ちゃんも年老いてこられたわね','Sho — Grandpa-age-come','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに似た顔立ちって言われたよ','Mom — me Dad-look-said','Pleased close','sho_child'),
  ]},
  {id:'conv_09742',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、子連れでいらっしゃる事多いね、メイちゃん','Aoi — cust-kid-come-many Mei','Reflective','mei_romantic'),
    mk('葵、いかんせん人手が足りないね、メイちゃん','Aoi — can-not-staff-short Mei','Reflective','aoi_barista'),
    mk('葵、冷房が強くて寒気がするね、メイちゃん','Aoi — AC-strong-chill Mei','Wry','mei_romantic'),
    mk('葵、お客様、新メニューに絶句されてたよ、メイちゃん','Aoi — cust-new-menu-speechless Mei','Pleased','aoi_barista'),
    mk('葵、お客様、お店をカフェだと思いこんでらして驚かれたよ、メイちゃん','Aoi — cust-cafe-think-surprise Mei','Wry','mei_romantic'),
    mk('葵、業界トップにはまだほど遠いね、メイちゃん','Aoi — industry-top-still-far Mei','Reflective','aoi_barista'),
    mk('葵、看板が年老いた感じだから塗り直そうね、メイちゃん','Aoi — sign-aged-repaint Mei','Direction','mei_romantic'),
    mk('葵、お客様、優しい顔立ちでいらしたね、メイちゃん','Aoi — cust-soft-look Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_09743',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが子連れの家族を快く迎えられた','Gran — youth Dad-kid-fam-welc','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、いかんせん戦中の苦労が大きかったわよね、あなた?','Yes — Grandpa-can-not-war-hard, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが冬の寒気の中で働かれた','Gran — youth Dad-winter-chill-work','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の合格に絶句されたわよね、あなた?','Grandpa — grandkid-pass-speechless, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがご自分を不器用と思いこんでらした','Gran — youth Dad-self-clumsy-think','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年も理想にはほど遠いと仰ってたわよね、あなた?','Grandpa — late-ideal-far-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんも年老いてこられたわ','Gran — youth Dad-age-come','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、品のある顔立ちでいらしたわよね、あなた?','Grandpa — dign-look, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09744',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、子連れの親戚が来てたな','Riku — your-home-kid-rel-came','Curious teen','sakura_teen'),
    mk('お前、いかんせん勉強サボってるな、桜','You — can-not-study-skip Sakura','Wry','riku_teen'),
    mk('リク、お前、寒気で熱出したな','Riku — chill-fever','Reflective','sakura_teen'),
    mk('お前、テスト結果見て絶句してたな、桜','You — test-result-speechless Sakura','Wry','riku_teen'),
    mk('リク、お前、答え覚えてると思いこんでただろ','Riku — ans-remember-think','Wry','sakura_teen'),
    mk('お前、合格にはほど遠い点数だったな、桜','You — pass-far-score Sakura','Wry','riku_teen'),
    mk('リク、先生も年老いてこられたな','Riku — tch-age','Reflective','sakura_teen'),
    mk('お前、整った顔立ちだな、桜','You — neat-look Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09745',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、子連れのご家族のお手伝いをしてあげましょうね','Sho — kid-fam-help','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、いかんせん疲れちゃったよ','Mei-sis — me can-not-tired','Reflective child','sho_child'),
    mk('翔くん、寒気がしたらすぐに教えてね','Sho — chill-soon-tell','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが帰宅されて絶句しちゃったよ、ご褒美が嬉しくて','Mei-sis — me Dad-home-speechless-glad-reward','Eager child','sho_child'),
    mk('翔くん、お父さんが厳しいと思いこんでらっしゃるみたいだけど、優しい方よ','Sho — Dad-strict-think-actually-kind','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんみたいになるにはほど遠いよ','Mei-sis — me Dad-like-far','Reflective child','sho_child'),
    mk('翔くん、お父さんも年老いてこられたわね','Sho — Dad-age-come','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに似た顔立ちって嬉しいよ','Mei-sis — me Dad-look-glad','Eager close','sho_child'),
  ]},
  {id:'conv_09746',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、市政の動向を分析しろ','Our co — city-gov-trend-anal','Crisp','hiroshi_boss'),
    mk('はい。不正確な情報は社外に出しません','Yes — Inacc-out-no','Methodical','kenji_office'),
    mk('当社、新人の手引き書を整備しろ','Our co — newhire-guide-prep','Direction','hiroshi_boss'),
    mk('はい。製品のライフサイクルを見直します','Yes — Prod-lifecycle-rev','Update','kenji_office'),
    mk('本社の移設計画を進めろ','HQ-relocate-prog','Direction','hiroshi_boss'),
    mk('はい。家賃の定率上げ方針です','Yes — Rent-fixed-rate-up','Update','kenji_office'),
    mk('当社、不払い顧客への督促を強化しろ','Our co — unpaid-cust-collect-strength','Direction','hiroshi_boss'),
    mk('はい。緊急時のファクス連絡網も整えます','Yes — Emerg-fax-net-prep','Close','kenji_office'),
  ]},
  {id:'conv_09747',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('市政との連携をしっかり取りましょう','City-gov-link-take','Brisk','yuki_office'),
    mk('はい。不正確なデータは精査します','Yes — Inacc-data-anal','Cooperative','kenji_office'),
    mk('新人研修の手引きを更新しましょう','Newhire-train-guide-up','Direction','yuki_office'),
    mk('はい。商品ライフサイクルの管理表を作ります','Yes — Prod-lifecycle-tbl-make','Update','kenji_office'),
    mk('支社の移設先を選定しましょう','Branch-relocate-site-pick','Direction','yuki_office'),
    mk('はい。定率減税の影響を試算します','Yes — Fixed-tax-cut-est','Update','kenji_office'),
    mk('不払い案件のリストアップをしましょう','Unpaid-list','Direction','yuki_office'),
    mk('はい。海外向けファクス送信ルールを整えます','Yes — Ovrs-fax-send-rule','Close','kenji_office'),
  ]},
  {id:'conv_09748',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、地域の市政との関わりも学べ','Ren — local-city-gov-learn','Mentor','hiroshi_boss'),
    mk('はい。データの不正確さを徹底排除します','Yes — Data-inacc-rid','Earnest','ren_uni'),
    mk('蓮、研究装置の手引きを整理しろ','Ren — research-eq-guide-org','Direction','hiroshi_boss'),
    mk('はい。研究テーマのライフサイクルを意識します','Yes — Research-lifecycle-aware','Earnest','ren_uni'),
    mk('蓮、研究室移設の手伝いをしろ','Ren — lab-relocate-help','Direction','hiroshi_boss'),
    mk('はい。実験消耗品の定率購入を計画します','Yes — Exp-cons-fixed-purchase','Polite','ren_uni'),
    mk('蓮、研究費の不払いトラブルを避けろ','Ren — research-unpaid-avoid','Direction','hiroshi_boss'),
    mk('はい。海外文献の取り寄せはファクスでも対応します','Yes — Ovrs-lit-fax-resp','Earnest close','ren_uni'),
  ]},
  {id:'conv_09749',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、市政と連携した防犯活動をされてますね','Police city-gov-link-prev','Cooperative','kenji_office'),
    mk('警察、不正確な目撃情報の整理もされますね','Police inacc-witness-org','Cooperative','kenji_office'),
    mk('警察、防犯手引きを市民に配布されますね','Police prev-guide-citi-dist','Cooperative','kenji_office'),
    mk('警察、犯罪のライフサイクル分析もされますね','Police crime-lifecycle-anal','Cooperative','kenji_office'),
    mk('警察、捜査本部の移設も検討されますね','Police inv-HQ-relocate-cons','Cooperative','kenji_office'),
    mk('警察、罰金の定率改定にも対応されますね','Police fine-fixed-rev-resp','Cooperative','kenji_office'),
    mk('警察、罰金不払い案件にも対応されますね','Police fine-unpaid-resp','Cooperative','kenji_office'),
    mk('警察、緊急時はファクス連絡網も活用されますね','Police emerg-fax-net-use','Close','kenji_office'),
  ]},
  {id:'conv_09750',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、市政との対話を大切にされた','Dad — founding city-gov-dial-imp','Sage','hiroshi_elder'),
    mk('はい。お父さんは不正確な広告を許されなかった','Yes — Dad inacc-ad-no-tol','Commitment','hiroshi_boss'),
    mk('お父さん、自ら社員手引きをお書きになった','Dad — staff-guide-self-write','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品ライフサイクルを的確に予測された','Yes — Dad prod-lifecycle-prec','Reflective','hiroshi_boss'),
    mk('お父さん、本社移設を断行された','Dad — HQ-relocate-bold','Wistful','hiroshi_elder'),
    mk('はい。お父さんは定率昇給制度を導入された','Yes — Dad fixed-pay-up-intro','Reflective','hiroshi_boss'),
    mk('お父さん、不払い案件にも誠実に対応された','Dad — unpaid-honest','Wistful','hiroshi_elder'),
    mk('はい。お父さんはファクスの導入を最初期に決められた','Yes — Dad fax-early-decide','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09751',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、平安朝の呪術文化の研究を論文で扱いましたね','Ren — Heian-curse-cult paper','Calm','asuka_teacher'),
    mk('はい、プラチナ触媒の化学研究を論文で扱いました','Yes — Plat-cat paper','Earnest','ren_uni'),
    mk('蓮さん、ピアノの古典派奏法を論文で扱いましたね','Ren — piano-class-play paper','Reflective','asuka_teacher'),
    mk('はい、水力発電所の歴史研究を論文で扱いました','Yes — Hydro-power paper','Earnest','ren_uni'),
    mk('日没時間と健康行動の研究を論文で扱いましたね','Sunset-health paper','Engaged','asuka_teacher'),
    mk('はい、衣料縫製業の労働史を論文で扱いました','Yes — Garm-sew-labor paper','Earnest','ren_uni'),
    mk('蓮さん、体外受精技術の研究を論文で扱いましたね','Ren — IVF-tech paper','Reflective','asuka_teacher'),
    mk('はい、亜鉛欠乏症の研究を論文で扱いました','Yes — Zinc-def paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09752',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、宗教的呪術絡みの詐欺事件を、警察、扱われてますね','Case relig-curse-fraud police-handle','Reflective','ren_uni'),
    mk('警察、プラチナ宝飾品の盗難も担当します','Police plat-jewel-theft','Procedural','takeda_officer'),
    mk('本件、楽器演奏家の奏法盗用事件を、警察、扱われますね','Case mus-play-steal police-handle','Reflective','ren_uni'),
    mk('警察、水力発電施設の侵入事件も捜査します','Police hydro-power-intrude-inv','Procedural','takeda_officer'),
    mk('本件、日没後の犯罪パターンを、警察、分析されますね','Case sunset-crime-pat police-anal','Reflective','ren_uni'),
    mk('警察、縫製工場での労働問題にも対応します','Police sew-fact-labor-resp','Procedural','takeda_officer'),
    mk('本件、体外受精クリニックでの詐欺を、警察、扱われますね','Case IVF-clin-fraud police-handle','Reflective','ren_uni'),
    mk('警察、亜鉛系塗料の不正使用事案にも対応します','Police zinc-paint-misuse-resp','Close','takeda_officer'),
  ]},
  {id:'conv_09753',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、平安朝の呪術文化を論文で扱いましたね','Sakura — Heian-curse paper','Calm','asuka_teacher'),
    mk('はい、プラチナ触媒の化学研究を論文で扱いました','Yes — Plat-cat paper','Earnest teen','sakura_teen'),
    mk('ピアノの古典派奏法を論文で扱いましたね','Piano-class-play paper','Reflective','asuka_teacher'),
    mk('はい、水力発電所の歴史を論文で扱いました','Yes — Hydro-power paper','Earnest','sakura_teen'),
    mk('日没時間と健康行動を論文で扱いましたね','Sunset-health paper','Engaged','asuka_teacher'),
    mk('はい、衣料縫製業の労働史を論文で扱いました','Yes — Garm-sew paper','Earnest','sakura_teen'),
    mk('体外受精技術を論文で扱いましたね','IVF-tech paper','Reflective','asuka_teacher'),
    mk('はい、亜鉛欠乏症の研究を論文で扱いました','Yes — Zinc-def paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09754',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者の呪術的思考を医療チームで尊重しつつ説明します','Ren — pati-curse-thought med-team resp','Calm','saito_doctor'),
    mk('はい、プラチナ系抗がん剤を医療チームで処方します','Yes — Plat-chemo med-team','Patient','saito_doctor'),
    mk('蓮さん、リハビリでピアノ奏法を医療チームで活用します','Ren — rehab-piano-play med-team use','Calm','saito_doctor'),
    mk('はい、水力的なマッサージ機を医療チームで採用します','Yes — Hydro-massage med-team','Patient','saito_doctor'),
    mk('日没後のうつ傾向を、貴院、診られますね、先生','Sunset-depr your-hosp diag, sensei','Reflective','ren_uni'),
    mk('はい、手術衣の縫製仕様を医療チームで管理します','Yes — Surg-gown-sew med-team','Patient','saito_doctor'),
    mk('体外受精のカウンセリングを、貴院、おこなわれますね、先生','IVF-couns your-hosp, sensei','Curious','ren_uni'),
    mk('はい、亜鉛剤の処方を医療チームで活用します','Yes — Zinc-supp med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09755',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、呪術的な精神論ではなくデータで動け','Our co — curse-spirit-no-data','Crisp','hiroshi_boss'),
    mk('はい。プラチナ会員制度を導入します','Yes — Plat-mem-intro','Methodical','kenji_office'),
    mk('当社、独自の経営奏法を確立しろ','Our co — uniq-mgmt-play-establ','Direction','hiroshi_boss'),
    mk('はい。水力発電由来の電力購入を検討します','Yes — Hydro-power-buy-cons','Update','kenji_office'),
    mk('日没時間に合わせて勤務時間を柔軟化しろ','Sunset-flex-work','Direction','hiroshi_boss'),
    mk('はい。縫製業の取引先を増やします','Yes — Sew-partner-up','Update','kenji_office'),
    mk('当社、社員の体外受精治療を支援しろ','Our co — staff-IVF-supp','Direction','hiroshi_boss'),
    mk('はい。社員食堂の亜鉛強化メニューも検討します','Yes — Staff-cant-zinc-menu','Close','kenji_office'),
  ]},
  {id:'conv_09756',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ジョナサンの聖書の話をされたよ、メイちゃん','Aoi — cust-Jonathan-bible Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ジャカルタに駐在経験がおありだって、メイちゃん','Aoi — cust-Jakarta-station Mei','Reflective','aoi_barista'),
    mk('葵、お客様、草津温泉に毎年行かれるって、メイちゃん','Aoi — cust-Kusatsu-yr Mei','Reflective','mei_romantic'),
    mk('葵、お客様、マイアミでの留学経験がおありだって、メイちゃん','Aoi — cust-Miami-study Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ローストビーフ料理がご趣味だって、メイちゃん','Aoi — cust-roast-beef-hobby Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ニーチェの哲学にお詳しいって、メイちゃん','Aoi — cust-Nietzsche-philos Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お子様がのび太そっくりだって笑ってらしたよ、メイちゃん','Aoi — cust-kid-Nobita-laugh Mei','Wry','mei_romantic'),
    mk('葵、お客様、シャーロック・ホームズのワトソン役が好きだって、メイちゃん','Aoi — cust-Holmes-Watson-like Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09757',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがジョナサンの物語を朗読された','Gran — youth Dad-Jonathan-read','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ジャカルタに出張された事もおありだったわよね、あなた?','Yes — Grandpa-Jakarta-trip, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと草津温泉に湯治に行った','Gran — youth Dad-Kusatsu-spa','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、マイアミでの会議に行かれたわよね、あなた?','Grandpa — Miami-mtg-went, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがローストチキンを焼かれた','Gran — youth Dad-roast-chick-bake','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ニーチェの哲学書をご愛読されたわよね、あなた?','Grandpa — Nietzsche-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お孫様がのび太みたいに眼鏡で可愛かった','Gran — youth grandkid-Nobita-cute','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ワトソン医師の役のドラマを愛されたわよね、あなた?','Grandpa — Watson-drama-love, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09758',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがジョナサンの絵本を読んで下さるそうよ','Sho — Dad-Jonathan-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとジャカルタの絵本見たよ','Mei-sis — me Dad-Jakarta-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが草津温泉に連れて行って下さるそうよ','Sho — Dad-Kusatsu-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとマイアミの地図見たよ','Mei-sis — me Dad-Miami-map','Eager child','sho_child'),
    mk('翔くん、お父さんがローストビーフを焼いて下さるそうよ','Sho — Dad-roast-beef-bake','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ニーチェって誰?お父さんに聞いてみるよ','Mei-sis — me Nietzsche-who-Dad-ask','Curious child','sho_child'),
    mk('翔くん、メイ姉さんは翔くんがのび太そっくりだと思うわ','Sho — Mei-sis-Sho-Nobita-think','Wry','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとシャーロック・ホームズのワトソンの話したよ','Mei-sis — me Dad-Watson-told','Eager close','sho_child'),
  ]},
  {id:'conv_09759',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ジョナサンの絵本のシリーズ好きだったな','Riku — Jonathan-series-like','Curious teen','sakura_teen'),
    mk('お前、ジャカルタの地理勉強したな、桜','You — Jakarta-geo Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で草津温泉行ってたな','Riku — fam-Kusatsu','Curious','sakura_teen'),
    mk('お前、マイアミの留学パンフ集めてたな、桜','You — Miami-pamph Sakura','Curious','riku_teen'),
    mk('リク、お前、ローストポテト食ってばっかだな','Riku — roast-pot-only','Wry','sakura_teen'),
    mk('お前、倫理でニーチェ習ったろ?桜','You — eth-Nietzsche? Sakura','Curious','riku_teen'),
    mk('リク、お前ん家、のび太の絵本あったな','Riku — your-home-Nobita-pic','Curious','sakura_teen'),
    mk('お前、シャーロック・ホームズのワトソン推しだったな、桜','You — Watson-fan Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09760',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがジョナサンの物語を朗読して下さるそうよ','Sho — Dad-Jonathan-read','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとジャカルタの絵本読んだよ','Mom — me Dad-Jakarta-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが草津温泉のお湯がお好きなのよ','Sho — Dad-Kusatsu-spa-like','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとマイアミの絵見たよ','Mom — me Dad-Miami-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがローストビーフのご馳走を作って下さるそうよ','Sho — Dad-roast-beef-cook','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとニーチェの絵本見たよ','Mom — me Dad-Nietzsche-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがのび太の漫画を貸して下さったわ','Sho — Dad-Nobita-manga-lend','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとシャーロック・ホームズのワトソンの話したよ','Mom — me Dad-Watson-told','Eager close','sho_child'),
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

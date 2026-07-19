import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_477 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['苦しめ','多量','容姿','昼過ぎ','晴天','言わば','手渡し','向っ']
const B_T = ['総体','元祖','置き場','アウトソーシング','空調','積立','延べ','一様']
const C_T = ['血糖','プラズマ','精子','形容詞','同胞','軍国','乳幼児','生誕']
const D_T = ['フラメンコ','イケメン','ハングル','ヒップ','ヒーリング','ショパン','アキバ','レッズ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09501',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんを苦しめないように静かに遊びましょうね','Sho — Dad-kurushime-not-quiet','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと多量の落ち葉を集めたよ','Mom — me Dad-many-leaves','Eager child','sho_child'),
    mk('翔くん、人を容姿で判断しちゃダメよ','Sho — people-look-judge-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、昼過ぎにお父さんとお散歩したよ','Mom — me afternoon-Dad-walk','Eager child','sho_child'),
    mk('翔くん、今日は晴天だから洗濯日和ね','Sho — today-clear-laundry','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お父さんが言わば家族のリーダーだって思うよ','Mom — me Dad-iwaba-fam-leader','Reflective child','sho_child'),
    mk('翔くん、お父さんに手渡しでお手紙を渡しましょうね','Sho — Dad-hand-pass-letter','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんの方に向って走ったよ','Mom — me Dad-toward-ran','Eager close','sho_child'),
  ]},
  {id:'conv_09502',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様を苦しめないようにお店を静かに保とうね、メイちゃん','Aoi — cust-kurushime-not-quiet Mei','Direction','mei_romantic'),
    mk('葵、コーヒー豆を多量に仕入れたね、メイちゃん','Aoi — bean-many-stock Mei','Reflective','aoi_barista'),
    mk('葵、お客様を容姿で判断しないようにしようね、メイちゃん','Aoi — cust-look-judge-not Mei','Direction','mei_romantic'),
    mk('葵、昼過ぎにラッシュが来るね、メイちゃん','Aoi — afternoon-rush Mei','Reflective','aoi_barista'),
    mk('葵、晴天の日は外席がよく出るね、メイちゃん','Aoi — clear-out-seat-go Mei','Pleased','mei_romantic'),
    mk('葵、お客様は言わばお店の宝物ね、メイちゃん','Aoi — cust-iwaba-store-treas Mei','Tender','aoi_barista'),
    mk('葵、伝票はお客様に手渡しでお渡ししようね、メイちゃん','Aoi — bill-cust-hand-pass Mei','Direction','mei_romantic'),
    mk('葵、お客様、新しいお店に向って歩かれてたよ、メイちゃん','Aoi — cust-new-store-toward-walk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09503',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが家族を苦しめないようご苦労された','Gran — youth Dad-fam-kurushime-not-effort','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、多量の野菜を畑から運ばれたわよね、あなた?','Yes — Grandpa-many-veg-field-carry, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは人の容姿より中身を見られた','Gran — youth Dad-look-no-inside','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、昼過ぎにお茶を飲まれるのが日課だったわよね、あなた?','Grandpa — afternoon-tea-routine, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、晴天の日は必ず散歩された','Gran — youth clear-walk','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、言わば家の大黒柱でいらしたわよね、あなた?','Grandpa — iwaba-fam-pillar, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが手紙を手渡しで届けられた','Gran — youth Dad-letter-hand-deliv','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、故郷に向って手を合わせられたわよね、あなた?','Grandpa — hometown-toward-pray, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09504',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、弟を苦しめてただろ','Riku — bro-kurushime','Wry teen','sakura_teen'),
    mk('お前、多量のお菓子を一気に食ってたな、桜','You — many-snack-once Sakura','Wry','riku_teen'),
    mk('リク、お前、容姿で人を判断するなって母さんに言われたろ','Riku — look-judge-no-mom','Direction','sakura_teen'),
    mk('お前、昼過ぎから塾に行くな、桜','You — afternoon-cram Sakura','Curious','riku_teen'),
    mk('リク、今日は晴天だから外行こうぜ','Riku — today-clear-out','Pleased','sakura_teen'),
    mk('お前、言わばクラスのムードメーカーだな、桜','You — iwaba-class-mood-maker Sakura','Praising','riku_teen'),
    mk('リク、ノートを手渡しで返してくれ','Riku — note-hand-return','Direction','sakura_teen'),
    mk('お前、駅に向って走ってたな、桜','You — sta-toward-ran Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09505',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お友達を苦しめないように仲良くしましょうね','Sho — friend-kurushime-not-nice','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、多量の松ぼっくり集めたよ','Mei-sis — me many-pinecone','Eager child','sho_child'),
    mk('翔くん、人は容姿だけじゃないのよ','Sho — people-look-no','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、昼過ぎにお父さんとお散歩したよ','Mei-sis — me afternoon-Dad-walk','Eager child','sho_child'),
    mk('翔くん、晴天の日はお弁当を持って公園に行きましょうね','Sho — clear-bento-park','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんは言わばお姉ちゃんだよ','Mei-sis — me Mei-sis-iwaba-sis','Eager child','sho_child'),
    mk('翔くん、メイ姉さんに手渡しでプレゼント渡しましょうね','Sho — Mei-sis-hand-pass-pres','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの方に向って走ったよ','Mei-sis — me Dad-toward-ran','Eager close','sho_child'),
  ]},
  {id:'conv_09506',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、業界総体の動向を分析しろ','Our co — industry-whole-trend-anal','Crisp','hiroshi_boss'),
    mk('はい。当社、元祖と呼ばれる商品の改良を進めます','Yes — Our co-origin-prod-impr','Methodical','kenji_office'),
    mk('当社、倉庫の置き場を整理しろ','Our co — warehouse-place-org','Direction','hiroshi_boss'),
    mk('はい。経理業務のアウトソーシングを検討します','Yes — Acc-out-cons','Update','kenji_office'),
    mk('オフィスの空調設備を更新しろ','Office-aircon-update','Direction','hiroshi_boss'),
    mk('はい。社員退職金の積立計画を見直します','Yes — Staff-retir-accrue-rev','Update','kenji_office'),
    mk('延べ来場者数を把握しろ','Cum-vis-grasp','Direction','hiroshi_boss'),
    mk('はい。社員に一様な機会を提供します','Yes — Staff-uniform-opp-prov','Close','kenji_office'),
  ]},
  {id:'conv_09507',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('業界総体の傾向を把握しましょう','Industry-whole-trend','Brisk','yuki_office'),
    mk('はい。元祖商品のリブランドを進めます','Yes — Origin-prod-rebrand','Cooperative','kenji_office'),
    mk('倉庫の置き場をマップ化しましょう','Warehouse-place-map','Direction','yuki_office'),
    mk('はい。コールセンターのアウトソーシングを進めます','Yes — Call-out','Update','kenji_office'),
    mk('オフィスの空調も省エネ化しましょう','Office-aircon-eco','Direction','yuki_office'),
    mk('はい。役員退職積立の試算を出します','Yes — Exec-accrue-est','Update','kenji_office'),
    mk('展示会の延べ来場者数を集計しましょう','Expo-cum-vis-tally','Direction','yuki_office'),
    mk('はい。一様なサービス品質を維持します','Yes — Uniform-serv-qual','Close','kenji_office'),
  ]},
  {id:'conv_09508',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究領域の総体を捉えろ','Ren — research-whole-grasp','Mentor','hiroshi_boss'),
    mk('はい。当分野の元祖と言える論文を読みます','Yes — Field-origin-paper-read','Earnest','ren_uni'),
    mk('蓮、研究器材の置き場を整理しろ','Ren — equip-place-org','Direction','hiroshi_boss'),
    mk('はい。データ分析のアウトソーシングも検討します','Yes — Data-anal-out-cons','Earnest','ren_uni'),
    mk('蓮、研究室の空調管理にも気を配れ','Ren — lab-aircon-care','Direction','hiroshi_boss'),
    mk('はい。研究費の積立計画を立てます','Yes — Research-accrue-plan','Polite','ren_uni'),
    mk('蓮、延べ被験者数を確認しろ','Ren — cum-subj-confirm','Direction','hiroshi_boss'),
    mk('はい。被験者に一様な処遇を提供します','Yes — Subj-uniform-treat','Earnest close','ren_uni'),
  ]},
  {id:'conv_09509',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、犯罪総体の傾向を分析されますね','Police crime-whole-trend','Cooperative','kenji_office'),
    mk('警察、元祖の防犯活動を継承されてますね','Police origin-prev-inh','Cooperative','kenji_office'),
    mk('警察、押収品の置き場を厳しく管理されますね','Police seiz-place-strict','Cooperative','kenji_office'),
    mk('警察、業務のアウトソーシングは慎重に検討されますね','Police out-careful','Cooperative','kenji_office'),
    mk('警察、署の空調も省エネ化されますね','Police stat-aircon-eco','Cooperative','kenji_office'),
    mk('警察、退職積立の制度をご説明されますね','Police retir-accrue-explan','Cooperative','kenji_office'),
    mk('警察、延べ検挙数を市民に公表されますね','Police cum-arr-pub','Cooperative','kenji_office'),
    mk('警察、市民に一様な対応をされますね','Police citi-uniform','Close','kenji_office'),
  ]},
  {id:'conv_09510',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、業界総体を見据えてらした','Dad — founding industry-whole-see','Sage','hiroshi_elder'),
    mk('はい。お父さんが当業界の元祖と呼ばれた','Yes — Dad industry-origin-called','Commitment','hiroshi_boss'),
    mk('お父さん、商品の置き場まで自ら確認された','Dad — prod-place-self-check','Wistful','hiroshi_elder'),
    mk('はい。お父さんはアウトソーシングを早期に導入された','Yes — Dad out-early-intro','Reflective','hiroshi_boss'),
    mk('お父さん、社員のために空調を整えられた','Dad — staff-aircon-prep','Wistful','hiroshi_elder'),
    mk('はい。お父さんが退職積立制度を導入された','Yes — Dad retir-accrue-intro','Reflective','hiroshi_boss'),
    mk('お父さん、創業以来の延べ顧客数に感慨深かった','Dad — found-cum-cust-deep','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員に一様な機会を与えられた','Yes — Dad staff-uniform-opp','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09511',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、糖尿病患者の血糖値管理研究を論文で扱いましたね','Ren — diab-BGL paper','Calm','asuka_teacher'),
    mk('はい、プラズマ技術の応用研究を論文で扱いました','Yes — Plasma-app paper','Earnest','ren_uni'),
    mk('蓮さん、不妊治療における精子の検査を論文で扱いましたね','Ren — IVF-sperm paper','Reflective','asuka_teacher'),
    mk('はい、日本語の形容詞の歴史を論文で扱いました','Yes — JP-adj-hist paper','Earnest','ren_uni'),
    mk('在外同胞コミュニティの研究を論文で扱いましたね','Ovrs-compatr-comm paper','Engaged','asuka_teacher'),
    mk('はい、軍国主義時代の教育を論文で扱いました','Yes — Mili-era-edu paper','Earnest','ren_uni'),
    mk('蓮さん、乳幼児の発達心理学を論文で扱いましたね','Ren — infant-dev-psych paper','Reflective','asuka_teacher'),
    mk('はい、ルネサンス期の生誕図像を論文で扱いました','Yes — Renais-nativ paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09512',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者の血糖低下による意識喪失を、警察、把握されてますね','Case suspect-BGL-low-uncon police-grasp','Reflective','ren_uni'),
    mk('警察、プラズマ切断機を用いた金庫破りも捜査します','Police plasma-cut-safe-inv','Procedural','takeda_officer'),
    mk('本件、精子のDNA鑑定を、警察、依頼されますね','Case sperm-DNA police-req','Reflective','ren_uni'),
    mk('警察、容疑者の供述の形容詞表現も記録します','Police suspect-test-adj-record','Procedural','takeda_officer'),
    mk('本件、在外同胞への詐欺事件を、警察、扱われてますね','Case ovrs-compatr-fraud police-handle','Reflective','ren_uni'),
    mk('警察、軍国主義団体の動向を監視します','Police mili-grp-monit','Procedural','takeda_officer'),
    mk('本件、乳幼児への虐待事件を、警察、厳しく捜査されますね','Case infant-abuse police-strict','Reflective','ren_uni'),
    mk('警察、皇族の生誕日警備を担当します','Police royal-nativ-guard','Close','takeda_officer'),
  ]},
  {id:'conv_09513',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、糖尿病患者の血糖値管理を論文で扱いましたね','Sakura — diab-BGL paper','Calm','asuka_teacher'),
    mk('はい、プラズマ技術の応用研究を論文で扱いました','Yes — Plasma-app paper','Earnest teen','sakura_teen'),
    mk('不妊治療の精子検査を論文で扱いましたね','IVF-sperm paper','Reflective','asuka_teacher'),
    mk('はい、日本語の形容詞の歴史を論文で扱いました','Yes — JP-adj-hist paper','Earnest','sakura_teen'),
    mk('在外同胞のコミュニティを論文で扱いましたね','Ovrs-compatr paper','Engaged','asuka_teacher'),
    mk('はい、軍国主義時代の教育を論文で扱いました','Yes — Mili-era-edu paper','Earnest','sakura_teen'),
    mk('乳幼児の発達心理学を論文で扱いましたね','Infant-dev paper','Reflective','asuka_teacher'),
    mk('はい、ルネサンス期の生誕図像を論文で扱いました','Yes — Renais-nativ paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09514',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、糖尿病患者の血糖値を医療チームで日々管理します','Ren — diab-BGL daily med-team','Calm','saito_doctor'),
    mk('プラズマ滅菌装置を、貴院、導入されてますね、先生','Plasma-sterilize your-hosp intro, sensei','Reflective','ren_uni'),
    mk('はい、不妊治療での精子検査を医療チームでおこないます','Yes — IVF-sperm med-team','Patient','saito_doctor'),
    mk('医療現場での形容詞使いを、貴院、丁寧にされてますね、先生','Med-adj-care your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、在外同胞向け医療相談を医療チームで提供します','Yes — Ovrs-compatr-med-cons med-team','Patient','saito_doctor'),
    mk('軍国主義時代の医療史を、貴院、教育に活かされてますね、先生','Mili-era-med-hist your-hosp edu, sensei','Curious','ren_uni'),
    mk('はい、乳幼児の健診を医療チームで担当します','Yes — Infant-health-check med-team','Patient','saito_doctor'),
    mk('はい、生誕直後の新生児ケアを医療チームで丁寧におこないます','Yes — Birth-after-newborn-care med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09515',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員の血糖値検診を補助しろ','Our co — staff-BGL-sub','Crisp','hiroshi_boss'),
    mk('はい。プラズマ技術への投資を検討します','Yes — Plasma-invest-cons','Methodical','kenji_office'),
    mk('当社、不妊治療の社員支援を強化しろ、つまり精子保存等の費用も','Our co — IVF-staff-supp-incl-sperm-pres','Direction','hiroshi_boss'),
    mk('はい。社内文書の形容詞表現を統一します','Yes — Co-doc-adj-uni','Update','kenji_office'),
    mk('当社、在外同胞社員のサポート体制を整えろ','Our co — ovrs-compatr-staff-supp-arr','Direction','hiroshi_boss'),
    mk('はい。軍国主義的な企業文化は避けます','Yes — Mili-cult-avoid','Update','kenji_office'),
    mk('当社、社員の乳幼児育児支援を厚くしろ','Our co — staff-infant-rear-supp','Direction','hiroshi_boss'),
    mk('はい。創業者の生誕記念イベントを企画します','Yes — Founder-nativ-mem-plan','Close','kenji_office'),
  ]},
  {id:'conv_09516',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、フラメンコを習われてるって、メイちゃん','Aoi — cust-flamenco-learn Mei','Reflective','mei_romantic'),
    mk('葵、お客様、イケメンのモデルさんだって、メイちゃん','Aoi — cust-handsome-model Mei','Pleased','aoi_barista'),
    mk('葵、お客様、ハングルを勉強されてるって、メイちゃん','Aoi — cust-Hangul-study Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ヒップホップが大好きだって、メイちゃん','Aoi — cust-hip-hop-love Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ヒーリングミュージックを流して欲しいって、メイちゃん','Aoi — cust-healing-music-want Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ショパンのピアノ曲がお好きだって、メイちゃん','Aoi — cust-Chopin-piano Mei','Reflective','aoi_barista'),
    mk('葵、お客様、アキバの電気街によく行かれるって、メイちゃん','Aoi — cust-Akiba-elec Mei','Reflective','mei_romantic'),
    mk('葵、お客様、レッズのサポーターだって、メイちゃん','Aoi — cust-Reds-supp Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09517',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがフラメンコのショーをご覧になった','Gran — youth Dad-flamenco-show','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃イケメンと評判だったわよね、あなた?','Yes — Grandpa-youth-handsome-fame, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがハングルを独学された','Gran — youth Dad-Hangul-self','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ダンスのヒップステップが上手だったわよね、あなた?','Grandpa — dance-hip-step-good, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがヒーリング音楽をお好みだった','Gran — youth Dad-heal-music-pref','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ショパンのレコードを集められたわよね、あなた?','Grandpa — Chopin-rec-coll, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアキバの電気街に通われた','Gran — youth Dad-Akiba-go','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、レッズの試合を観に行かれたわよね、あなた?','Grandpa — Reds-match-go, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09518',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがフラメンコの本をお持ちなのよ','Sho — Dad-flamenco-book','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがイケメンって言われてるよ','Mei-sis — me Dad-handsome','Eager child','sho_child'),
    mk('翔くん、お父さんがハングルの絵本を読んで下さるのよ','Sho — Dad-Hangul-pic-book','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ヒップホップダンスやってみたいよ','Mei-sis — me hip-hop-want','Eager child','sho_child'),
    mk('翔くん、お父さんがヒーリングの音楽を流して下さるわ','Sho — Dad-heal-music-play','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとショパンの曲を聴いたよ','Mei-sis — me Dad-Chopin','Eager child','sho_child'),
    mk('翔くん、お父さんがアキバの博物館に連れて行って下さるそうよ','Sho — Dad-Akiba-mus-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとレッズの試合観たよ','Mei-sis — me Dad-Reds-watched','Eager close','sho_child'),
  ]},
  {id:'conv_09519',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、フラメンコ部見学したな','Riku — flamenco-club-visit','Wry teen','sakura_teen'),
    mk('お前、クラスでイケメンランキング載ったろ?桜','You — class-handsome-rank? Sakura','Wry','riku_teen'),
    mk('リク、お前、ハングルの漫画読んでたな','Riku — Hangul-manga','Curious','sakura_teen'),
    mk('お前、ヒップホップダンスサークル入ったろ?桜','You — hip-hop-club? Sakura','Curious','riku_teen'),
    mk('リク、お前、ヒーリングのアプリ使ってたな','Riku — heal-app','Curious','sakura_teen'),
    mk('お前、音楽でショパン弾いてたな、桜','You — music-Chopin-play Sakura','Praising','riku_teen'),
    mk('リク、お前、アキバのメイドカフェ憧れてたな','Riku — Akiba-maid-admire','Wry','sakura_teen'),
    mk('お前、レッズのユニフォーム着てたな、桜','You — Reds-uni Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09520',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがフラメンコの映像を見せて下さるそうよ','Sho — Dad-flamenco-video','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんがイケメンだって言われたよ','Mom — me Dad-handsome-said','Eager child','sho_child'),
    mk('翔くん、お父さんがハングルの絵本をお買いになったわ','Sho — Dad-Hangul-pic-buy','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとヒップホップ踊ったよ','Mom — me Dad-hip-hop-dance','Eager child','sho_child'),
    mk('翔くん、お父さんがヒーリング音楽を流して下さるそうよ','Sho — Dad-heal-music-play','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとショパンの曲を聴いたよ','Mom — me Dad-Chopin','Eager child','sho_child'),
    mk('翔くん、お父さんがアキバに連れて行って下さるそうよ','Sho — Dad-Akiba-take','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとレッズの試合観たいよ','Mom — me Dad-Reds-want','Eager close','sho_child'),
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

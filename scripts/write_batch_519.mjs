import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_519 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['くっつけ','談笑','オット','奥底','仇','ぶさ','里帰り','見いだす']
const B_T = ['敬愛','則っ','基い','準じ','使途','呼び掛け','打ち込み','ベルク']
const C_T = ['鳳','鞘','英字','天秤','死語','有色','太もも','気密']
const D_T = ['キヤノン','ジョージア','ミシガン','オハイオ','ジャスコ','早川書房','皇居','東北大学']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10341',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、シールをノートにくっつけ過ぎないようにね','Sho — sticker-note-too-much-no','Direction','yumiko_mom'),
    mk('ママ、お父さんとご友人が談笑されてたよ','Mom — Dad-fri-chat','Tender child','sho_child'),
    mk('翔くん、お母さんはオットがいるから安心ね','Sho — Mom-husb-easy','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんへの感謝を心の奥底に持ってるよ','Mom — me Dad-thanks-heart-bottom','Tender child','sho_child'),
    mk('翔くん、人を仇のように見てはダメよ','Sho — people-foe-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんが「ぶさ顔」じゃなくて格好いいって思うよ','Mom — me Dad-ugly-no-cool','Wry child','sho_child'),
    mk('翔くん、お盆はお父さんと里帰りしましょうね','Sho — Obon-Dad-home-visit','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんの中にぼくの夢を見いだすよ','Mom — me Dad-dream-find','Earnest close','sho_child'),
  ]},
  {id:'conv_10342',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、ステッカーをカップにくっつけ過ぎないようにね、メイちゃん','Aoi — sticker-cup-too-much Mei','Direction','mei_romantic'),
    mk('葵、お客様、ご友人と談笑されて楽しそうね、メイちゃん','Aoi — cust-fri-chat-happy Mei','Pleased','aoi_barista'),
    mk('葵、お客様、オット様とお越しになったよ、メイちゃん','Aoi — cust-husb-came Mei','Reflective','mei_romantic'),
    mk('葵、お客様、コーヒーの香りに奥底まで満たされる、と仰ったよ、メイちゃん','Aoi — cust-aroma-bottom-fill-said Mei','Tender','aoi_barista'),
    mk('葵、他店を仇のように見ない方が良いね、メイちゃん','Aoi — other-foe-no Mei','Direction','mei_romantic'),
    mk('葵、お客様、お子様の「ぶさ可愛い」表情を撮ってらしたよ、メイちゃん','Aoi — cust-kid-ugly-cute-photo Mei','Wry','aoi_barista'),
    mk('葵、お盆休みに里帰りされるスタッフを支えようね、メイちゃん','Aoi — Obon-home-staff-supp Mei','Direction','mei_romantic'),
    mk('葵、新メニューに価値を見いだすお客様が増えたね、メイちゃん','Aoi — new-menu-val-find-cust-up Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_10343',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが手紙に切手をくっつけて下さった','Gran — youth Dad-letter-stamp','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ご友人と縁側で談笑されたわよね、あなた?','Yes — Grandpa-fri-veranda-chat, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、私のオットとして力強くいて下さった','Gran — me-husb-strong','Tender','hiroshi_elder'),
    mk('お祖父ちゃん、心の奥底に戦中の記憶を秘めてらしたわよね、あなた?','Grandpa — heart-bottom-war-mem, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは人を仇と思わぬ方だった','Gran — youth Dad-people-foe-no','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃の写真は「ぶさかわ」と仰ったわよね、あなた?','Grandpa — youth-photo-ugly-cute, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お盆に里帰りした事を懐かしむ','Gran — youth Obon-home-miss','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫の才能を見いだすのが早かったわよね、あなた?','Grandpa — grandkid-talent-find-fast, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10344',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ノートにシール沢山くっつけ過ぎだぞ','Riku — note-stick-too','Wry teen','sakura_teen'),
    mk('お前、放課後、友達と談笑してたな、桜','You — after-sch-fri-chat Sakura','Pleased','riku_teen'),
    mk('リク、お前のお姉ちゃん、オットができたって聞いたぞ','Riku — sis-husb-heard','Curious','sakura_teen'),
    mk('お前、心の奥底に秘密があるみたいだな、桜','You — heart-bottom-secret Sakura','Reflective','riku_teen'),
    mk('リク、お前、ライバルを仇のように見るな','Riku — rival-foe-no','Direction','sakura_teen'),
    mk('お前、自分の写真を「ぶさ過ぎ」と笑ってたな、桜','You — self-photo-ugly-laugh Sakura','Wry','riku_teen'),
    mk('リク、お前、夏休みに里帰りしてたな','Riku — summer-home','Curious','sakura_teen'),
    mk('お前、自分の才能を見いだす人に出会えると良いな、桜','You — self-talent-find-meet Sakura','Encouraging close','riku_teen'),
  ]},
  {id:'conv_10345',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがメモを冷蔵庫にくっつけてらしたわ','Sho — Dad-memo-fridge-stick','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと談笑してたよ','Mei-sis — me Dad-chat','Eager child','sho_child'),
    mk('翔くん、お母さんのオットがお父さんよ','Sho — Mom-husb-Dad','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、心の奥底でメイ姉さんに感謝してるよ','Mei-sis — me heart-bottom-Mei-sis-thanks','Tender child','sho_child'),
    mk('翔くん、誰も仇のように見てはダメよ','Sho — anyone-foe-no','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、犬がぶさかわで可愛いって思ってる','Mei-sis — me dog-ugly-cute','Eager child','sho_child'),
    mk('翔くん、お父さんが里帰りに連れて行って下さるそうよ','Sho — Dad-home-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが「夢を見いだす」って仰ったよ','Mei-sis — me Dad-"dream-find"-said','Earnest close','sho_child'),
  ]},
  {id:'conv_10346',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、創業者を敬愛する社風を保て','Our co — found-rev-cult','Crisp','hiroshi_boss'),
    mk('はい。社員規程に則って動きます','Yes — Staff-rule-comp','Methodical','kenji_office'),
    mk('当社、過去のデータに基いた意思決定をしろ','Our co — past-data-base-decis','Direction','hiroshi_boss'),
    mk('はい。業界基準に準じて運用します','Yes — Industry-std-comp','Update','kenji_office'),
    mk('予算の使途を明確にしろ','Budget-use-clear','Direction','hiroshi_boss'),
    mk('はい。社員への呼び掛けも丁寧にします','Yes — Staff-call-pol','Update','kenji_office'),
    mk('当社、新製品開発に打ち込み続けろ','Our co — new-prod-dev-immerse','Direction','hiroshi_boss'),
    mk('はい。ドイツのベルク市と姉妹都市契約を検討します','Yes — Berg-sister-cons','Close','kenji_office'),
  ]},
  {id:'conv_10347',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('創業者を敬愛する記念式典を企画しましょう','Found-rev-cere-plan','Brisk','yuki_office'),
    mk('はい。社内ルールに則って運営します','Yes — Co-rule-op','Cooperative','kenji_office'),
    mk('顧客調査に基いた商品設計を進めましょう','Cust-survey-base-design','Direction','yuki_office'),
    mk('はい。同業他社に準じて値段を決めます','Yes — Same-comp-price','Update','kenji_office'),
    mk('予算の使途を四半期ごとに公表しましょう','Budget-use-Q-pub','Direction','yuki_office'),
    mk('はい。社内呼び掛けの方法を改善します','Yes — Co-call-method-impr','Update','kenji_office'),
    mk('プロジェクトに打ち込みつつ休息も取ろう','Proj-immerse-rest','Direction','yuki_office'),
    mk('はい。ベルク社との提携交渉を進めます','Yes — Berg-co-partner-negot','Close','kenji_office'),
  ]},
  {id:'conv_10348',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教員を敬愛する姿勢を保て','Ren — supv-rev','Mentor','hiroshi_boss'),
    mk('はい。研究室規則に則って動きます','Yes — Lab-rule-comp','Earnest','ren_uni'),
    mk('蓮、データに基いた仮説を立てろ','Ren — data-base-hyp','Direction','hiroshi_boss'),
    mk('はい。先行研究に準じて手法を選びます','Yes — Prior-comp-method','Earnest','ren_uni'),
    mk('蓮、研究費の使途を厳格に管理しろ','Ren — research-use-strict','Direction','hiroshi_boss'),
    mk('はい。後輩への呼び掛けも丁寧にします','Yes — Junior-call-pol','Polite','ren_uni'),
    mk('蓮、研究に打ち込み成果を出せ','Ren — research-immerse-result','Direction','hiroshi_boss'),
    mk('はい。海外のベルク大学とも交流します','Yes — Ovrs-Berg-uni-exch','Earnest close','ren_uni'),
  ]},
  {id:'conv_10349',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、市民が警察を敬愛する関係を保たれますね','Police citi-rev-rel','Cooperative','kenji_office'),
    mk('警察、法令に則って捜査されますね','Police law-comp-inv','Cooperative','kenji_office'),
    mk('警察、証拠に基いた立件をされますね','Police evid-base-charge','Cooperative','kenji_office'),
    mk('警察、判例に準じた処分をされますね','Police prec-comp-disc','Cooperative','kenji_office'),
    mk('警察、押収金品の使途を厳格に管理されますね','Police seiz-use-strict','Cooperative','kenji_office'),
    mk('警察、市民への呼び掛けを丁寧にされますね','Police citi-call-pol','Cooperative','kenji_office'),
    mk('警察、捜査に打ち込み長時間勤務もされますね','Police inv-immerse-long','Cooperative','kenji_office'),
    mk('警察、ドイツベルク警察との国際協力もされますね','Police Berg-police-intl-coop','Close','kenji_office'),
  ]},
  {id:'conv_10350',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、創業仲間を敬愛された','Dad — founding fellow-rev','Sage','hiroshi_elder'),
    mk('はい。お父さんは社則に則って経営された','Yes — Dad rule-comp-mgmt','Commitment','hiroshi_boss'),
    mk('お父さん、データに基いた経営判断をされた','Dad — data-base-decis','Wistful','hiroshi_elder'),
    mk('はい。お父さんは業界慣行に準じて契約された','Yes — Dad industry-cust-comp-contract','Reflective','hiroshi_boss'),
    mk('お父さん、寄付の使途を明確にされた','Dad — don-use-clear','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員への呼び掛けを大事にされた','Yes — Dad staff-call-imp','Reflective','hiroshi_boss'),
    mk('お父さん、事業に打ち込み続けられた','Dad — biz-immerse-cont','Wistful','hiroshi_elder'),
    mk('はい。お父さんがドイツベルクの取引先と縁を作られた','Yes — Dad Berg-partner-tie','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10351',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、神話の鳳凰研究を論文で扱いましたね','Ren — myth-houou paper','Calm','asuka_teacher'),
    mk('はい、日本刀の鞘職人研究を論文で扱いました','Yes — Katana-sheath paper','Earnest','ren_uni'),
    mk('蓮さん、英字新聞の読解力研究を論文で扱いましたね','Ren — Eng-news-comp paper','Reflective','asuka_teacher'),
    mk('はい、天秤量りの精度研究を論文で扱いました','Yes — Bal-scale-prec paper','Earnest','ren_uni'),
    mk('死語化する若者言葉を論文で扱いましたね','Dead-young-words paper','Engaged','asuka_teacher'),
    mk('はい、有色金属の精錬史を論文で扱いました','Yes — Non-ferr-refin paper','Earnest','ren_uni'),
    mk('蓮さん、太もも筋トレの効率研究を論文で扱いましたね','Ren — thigh-musc-eff paper','Reflective','asuka_teacher'),
    mk('はい、気密性建築の換気研究を論文で扱いました','Yes — Airtight-bld-vent paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10352',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、鳳凰刺青の容疑者を、警察、追われてますね','Case houou-tatt-suspect police-track','Reflective','ren_uni'),
    mk('警察、刀の鞘から指紋を採取されますね','Police katana-sheath-print','Cooperative','takeda_officer'),
    mk('本件、英字偽造証明書を、警察、扱われますね','Case Eng-forge-cert police-handle','Reflective','ren_uni'),
    mk('警察、天秤鑑識で正確さを保たれますね','Police bal-forensic-prec','Cooperative','takeda_officer'),
    mk('本件、死語化した暗号を、警察、解読されますね','Case dead-code police-decode','Reflective','ren_uni'),
    mk('警察、有色人種への差別事件にも対応されますね','Police non-white-disc-resp','Cooperative','takeda_officer'),
    mk('本件、太もも刺傷の鑑識を、警察、おこなわれますね','Case thigh-stab police-forensic','Reflective','ren_uni'),
    mk('警察、気密性高い倉庫からの脱出事件も扱われますね','Police airtight-warehouse-escape-handle','Close','takeda_officer'),
  ]},
  {id:'conv_10353',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、神話の鳳凰研究を論文で扱いましたね','Sakura — myth-houou paper','Calm','asuka_teacher'),
    mk('はい、日本刀の鞘職人研究を論文で扱いました','Yes — Katana-sheath paper','Earnest teen','sakura_teen'),
    mk('英字新聞の読解力研究を論文で扱いましたね','Eng-news paper','Reflective','asuka_teacher'),
    mk('はい、天秤量りの精度を論文で扱いました','Yes — Bal-scale paper','Earnest','sakura_teen'),
    mk('死語化する若者言葉を論文で扱いましたね','Dead-words paper','Engaged','asuka_teacher'),
    mk('はい、有色金属の精錬史を論文で扱いました','Yes — Non-ferr paper','Earnest','sakura_teen'),
    mk('太もも筋トレの効率を論文で扱いましたね','Thigh-musc paper','Reflective','asuka_teacher'),
    mk('はい、気密性建築の換気を論文で扱いました','Yes — Airtight-vent paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10354',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、鳳凰の刺青患者の肌ケアを医療チームでおこないます','Ren — houou-tatt-pati-skin med-team','Calm','saito_doctor'),
    mk('はい、手術器具の鞘ケースを医療チームで管理します','Yes — Surg-eq-sheath med-team','Patient','saito_doctor'),
    mk('蓮さん、英字医学書を医療チームで輪読します','Ren — Eng-med-book med-team read','Calm','saito_doctor'),
    mk('はい、薬剤を天秤で正確に量って医療チームで処方します','Yes — Med-bal-meas med-team','Patient','saito_doctor'),
    mk('死語化した医学用語を、貴院、若手に教えられてますね、先生','Dead-med-term your-hosp teach, sensei','Reflective','ren_uni'),
    mk('はい、有色尿の鑑別を医療チームで日々おこないます','Yes — Color-urine-diff med-team','Patient','saito_doctor'),
    mk('はい、太もも血管造影を医療チームで担当します','Yes — Thigh-angio med-team','Patient','saito_doctor'),
    mk('気密室の感染症管理を、貴院、徹底されてますね、先生','Airtight-rm-infect your-hosp strict, sensei','Curious close','ren_uni'),
  ]},
  {id:'conv_10355',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、鳳凰のように再起する戦略を立てろ','Our co — houou-rise-strat','Crisp','hiroshi_boss'),
    mk('はい。剣のように鞘から抜いた瞬間の集中力を社員に求めます','Yes — Sword-sheath-conc-staff','Methodical','kenji_office'),
    mk('当社、英字パンフレットを刷新しろ','Our co — Eng-pamph-renew','Direction','hiroshi_boss'),
    mk('はい。社内評価は公平な天秤にかけます','Yes — Co-eval-fair-bal','Update','kenji_office'),
    mk('死語化した社内用語を整理しろ','Dead-co-term-org','Direction','hiroshi_boss'),
    mk('はい。有色金属事業の動向を分析します','Yes — Non-ferr-anal','Update','kenji_office'),
    mk('当社、社員食堂で太もも筋トレ室を設置しろ','Our co — staff-cant-thigh-room','Direction','hiroshi_boss'),
    mk('はい。新工場は気密性を高めて衛生管理します','Yes — New-fact-airtight-hyg','Close','kenji_office'),
  ]},
  {id:'conv_10356',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、キヤノンのカメラ愛好家だって、メイちゃん','Aoi — cust-Canon-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ジョージア州出身でいらっしゃるって、メイちゃん','Aoi — cust-Georgia-orig Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ミシガン大学にご留学経験がおありだって、メイちゃん','Aoi — cust-Mich-uni-study Mei','Reflective','mei_romantic'),
    mk('葵、お客様、オハイオ州にホームステイされたって、メイちゃん','Aoi — cust-Ohio-homestay Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ジャスコ時代のレトロ商品にお詳しいって、メイちゃん','Aoi — cust-Jusco-retro Mei','Reflective','mei_romantic'),
    mk('葵、お客様、早川書房のSF文庫を集めてらっしゃるって、メイちゃん','Aoi — cust-Hayakawa-SF-coll Mei','Reflective','aoi_barista'),
    mk('葵、お客様、皇居マラソンに参加されるって、メイちゃん','Aoi — cust-palace-mar Mei','Reflective','mei_romantic'),
    mk('葵、お客様、東北大学のOBでいらっしゃるって、メイちゃん','Aoi — cust-Tohoku-uni-OB Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10357',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがキヤノン製カメラで撮ってこられた','Gran — youth Dad-Canon-cam','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ジョージア缶コーヒーがお好きだったわよね、あなた?','Yes — Grandpa-Georgia-can-cf, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがミシガン州に駐在された','Gran — youth Dad-Mich-station','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、オハイオ州出張のお話されたわよね、あなた?','Grandpa — Ohio-trip-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ジャスコ百貨店で買い物した','Gran — youth Jusco-dept-shop','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、早川書房の文庫を集められたわよね、あなた?','Grandpa — Hayakawa-coll, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが皇居参賀に出かけられた','Gran — youth Dad-palace-greet','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、東北大学にご縁があったわよね、あなた?','Grandpa — Tohoku-uni-tie, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10358',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがキヤノンの一眼レフを下さるそうよ','Sho — Dad-Canon-DSLR-give','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとジョージアコーヒー飲んだよ','Mei-sis — me Dad-Georgia-cf','Eager child','sho_child'),
    mk('翔くん、お父さんがミシガン州の絵本を見せて下さったわ','Sho — Dad-Mich-pic-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとオハイオの絵本見たよ','Mei-sis — me Dad-Ohio-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがジャスコ跡地のお話して下さったわ','Sho — Dad-Jusco-site-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが早川書房のSF絵本貸して下さったよ','Mei-sis — me Dad-Hayakawa-SF-lend','Eager child','sho_child'),
    mk('翔くん、お父さんが皇居の絵本を読んで下さったわ','Sho — Dad-palace-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、東北大学に憧れてるよ','Mei-sis — me Tohoku-uni-admire','Earnest close','sho_child'),
  ]},
  {id:'conv_10359',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、キヤノンの一眼欲しがってたな','Riku — Canon-DSLR-want','Curious teen','sakura_teen'),
    mk('お前、ジョージア缶コーヒー飲んでたな、桜','You — Georgia-can-cf Sakura','Curious','riku_teen'),
    mk('リク、お前、ミシガン大学志望だな','Riku — Mich-uni-aim','Curious','sakura_teen'),
    mk('お前、社会でオハイオ州勉強したな、桜','You — soc-Ohio Sakura','Curious','riku_teen'),
    mk('リク、お前、ジャスコ跡地のショッピングモール行ったな','Riku — Jusco-mall-go','Curious','sakura_teen'),
    mk('お前、早川書房のSF文庫読んでたな、桜','You — Hayakawa-SF Sakura','Curious','riku_teen'),
    mk('リク、お前、皇居参賀のニュース観てたな','Riku — palace-greet-news','Curious','sakura_teen'),
    mk('お前、東北大学受けるって言ってたな、桜','You — Tohoku-uni-said Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10360',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがキヤノンの新型カメラを購入されたわ','Sho — Dad-Canon-new-cam-buy','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとジョージア州の絵本見たよ','Mom — me Dad-Georgia-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがミシガン州駐在のお話して下さったわ','Sho — Dad-Mich-station-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとオハイオ州の絵本見たよ','Mom — me Dad-Ohio-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがジャスコ時代の通販カタログを持ってらしたわ','Sho — Dad-Jusco-catalog','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと早川書房のSF本読んだよ','Mom — me Dad-Hayakawa-SF','Eager child','sho_child'),
    mk('翔くん、お父さんが皇居一般参賀に行かれたわ','Sho — Dad-palace-greet-went','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと東北大学のオープンキャンパス行きたいよ','Mom — me Dad-Tohoku-uni-open-want','Eager close','sho_child'),
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

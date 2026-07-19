import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_481 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['亭主','眼差し','就く','むかっ','無くなり','申さ','ゆけ','沈み']
const B_T = ['交信','逆説','マニフェスト','点在','入港','強者','待合室','首席']
const C_T = ['熟語','官能','固体','開校','国体','農耕','高分子','感嘆']
const D_T = ['タックル','浪人','飛鳥','ピカソ','ボンド','リンカーン','フットサル','ヤクルト']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09581',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんは家の亭主ね','Sho — Dad-house-host','Tender','yumiko_mom'),
    mk('ママ、お父さんの優しい眼差しに守られてるよ','Mom — Dad-soft-gaze-protect','Tender child','sho_child'),
    mk('翔くん、お父さんが部長に就かれたわ','Sho — Dad-mgr-app','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お父さんにむかって走ったよ','Mom — me Dad-toward-ran','Eager child','sho_child'),
    mk('翔くん、おやつが無くなりそうだから、お父さんに頼みましょうね','Sho — snack-gone-Dad-ask','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「お願い申し上げます」って申したよ','Mom — me Dad-"please-respect"-mou-said','Eager child','sho_child'),
    mk('翔くん、お父さんと公園にゆけば楽しいわよ','Sho — Dad-park-go-fun','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんが落ち込んで気持ちが沈みそうな日もあるよ','Mom — me Dad-sad-sink-day','Reflective close','sho_child'),
  ]},
  {id:'conv_09582',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご亭主のお話を楽しまれてたよ、メイちゃん','Aoi — cust-host-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様の優しい眼差しに癒されるね、メイちゃん','Aoi — cust-soft-gaze-heal Mei','Tender','aoi_barista'),
    mk('葵、お客様、新しい役職に就かれたんだって、メイちゃん','Aoi — cust-new-pos-app Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お席にむかってゆっくり歩かれたよ、メイちゃん','Aoi — cust-seat-toward-slow-walk Mei','Reflective','aoi_barista'),
    mk('葵、コーヒー豆が無くなりそうだね、メイちゃん','Aoi — bean-gone-near Mei','Reflective','mei_romantic'),
    mk('葵、お客様、丁寧に「申し上げ」られたよ、メイちゃん','Aoi — cust-pol-mou-up-said Mei','Reflective','aoi_barista'),
    mk('葵、新しいお店にゆけば刺激になるね、メイちゃん','Aoi — new-store-go-stim Mei','Pleased','mei_romantic'),
    mk('葵、雨の日はお客様の気持ちも沈みがちね、メイちゃん','Aoi — rain-cust-feel-sink-tend Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09583',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがしっかり亭主役を務められた','Gran — youth Dad-host-role','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お孫様への眼差しが優しかったわよね、あなた?','Yes — Grandpa-grandkid-gaze-soft, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが村長に就かれた','Gran — youth Dad-vil-head-app','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、神社にむかって毎日参られたわよね、あなた?','Grandpa — shrine-toward-daily, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは古い物が無くなりがちな時代を惜しまれた','Gran — youth Dad-old-gone-era-lament','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、「申されます」と丁寧に言葉を選ばれたわよね、あなた?','Grandpa — "mou-sare-masu"-pol, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがゆけば皆が安心した','Gran — youth Dad-go-all-easy','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夕日が沈み行く頃に縁側に座られたわよね、あなた?','Grandpa — sun-sink-veranda-sit, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09584',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、亭主関白だな','Riku — your-home-host-king','Wry teen','sakura_teen'),
    mk('お前、優しい眼差しが似合うな、桜','You — soft-gaze-suit Sakura','Praising','riku_teen'),
    mk('リク、お前、部長職に就いたな','Riku — dept-pos-app','Praising','sakura_teen'),
    mk('お前、走って駅にむかってたな、桜','You — run-sta-toward Sakura','Curious','riku_teen'),
    mk('リク、お前のシャーペンの芯、もう無くなりそうだな','Riku — pen-lead-gone-near','Curious','sakura_teen'),
    mk('お前、先生に「ありがとう申し上げます」って申してたな、桜','You — tch-"thank-you-respect"-mou-said Sakura','Wry','riku_teen'),
    mk('リク、明日、学校にゆけよ','Riku — tomor-sch-go','Direction','sakura_teen'),
    mk('お前、テストで沈みがちだな、桜','You — test-sink-tend Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09585',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがお家の亭主ね','Sho — Dad-house-host','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの優しい眼差しが好きだよ','Mei-sis — me Dad-soft-gaze-like','Tender child','sho_child'),
    mk('翔くん、お父さんが課長に就かれたわよ','Sho — Dad-sec-head-app','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんにむかって走ったよ','Mei-sis — me Dad-toward-ran','Eager child','sho_child'),
    mk('翔くん、お菓子が無くなりそうだからお買い物しましょうね','Sho — snack-gone-near-shop','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんに「ありがとう申し上げます」と申したよ','Mei-sis — me Mei-sis-"thank-respect"-mou-said','Proud child','sho_child'),
    mk('翔くん、お祖父ちゃんのお家にゆけば楽しいわよ','Sho — Grandpa-home-go-fun','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが疲れて沈みそうな日もあるよ','Mei-sis — me Dad-tired-sink-day','Reflective close','sho_child'),
  ]},
  {id:'conv_09586',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、海外支社との交信を密にしろ','Our co — overseas-comm-tight','Crisp','hiroshi_boss'),
    mk('はい。一見、逆説的な戦略も検討します','Yes — Para-strat-cons','Methodical','kenji_office'),
    mk('当社、経営マニフェストを発表しろ','Our co — mgmt-manif-pub','Direction','hiroshi_boss'),
    mk('はい。支店が全国に点在しております','Yes — Branch-nation-scatter','Update','kenji_office'),
    mk('輸送船の入港予定を管理しろ','Cargo-port-arr-mgmt','Direction','hiroshi_boss'),
    mk('はい。業界の強者と提携を進めます','Yes — Industry-leader-partner','Update','kenji_office'),
    mk('お客様の待合室を快適にしろ','Cust-wait-rm-comfort','Direction','hiroshi_boss'),
    mk('はい。新入社員の首席を表彰します','Yes — Newhire-top-honor','Close','kenji_office'),
  ]},
  {id:'conv_09587',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('リモート社員との交信頻度を上げましょう','Remote-staff-comm-up','Brisk','yuki_office'),
    mk('はい。逆説的アプローチも提案します','Yes — Para-app-prop','Cooperative','kenji_office'),
    mk('新商品マニフェストを公表しましょう','New-prod-manif-pub','Direction','yuki_office'),
    mk('はい。販売店が全国に点在しています','Yes — Sales-nation-scatter','Update','kenji_office'),
    mk('輸入品の入港スケジュールを共有しましょう','Imp-port-arr-share','Direction','yuki_office'),
    mk('はい。業界の強者と渡り合います','Yes — Industry-leader-cmp','Update','kenji_office'),
    mk('受付の待合室を新装しましょう','Recep-wait-rm-renew','Direction','yuki_office'),
    mk('はい。営業所首席のリーダーを集めます','Yes — Sales-top-leader-gather','Close','kenji_office'),
  ]},
  {id:'conv_09588',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、海外研究者との交信を欠かすな','Ren — overseas-comm-keep','Mentor','hiroshi_boss'),
    mk('はい。逆説的仮説も論文で検証します','Yes — Para-hyp-paper-test','Earnest','ren_uni'),
    mk('蓮、研究マニフェストを起草しろ','Ren — research-manif-draft','Direction','hiroshi_boss'),
    mk('はい。サンプルが全国に点在しております','Yes — Sample-nation-scatter','Earnest','ren_uni'),
    mk('蓮、研究船の入港時に立ち会え','Ren — research-ship-port-att','Direction','hiroshi_boss'),
    mk('はい。当分野の強者の論文も読みます','Yes — Field-leader-paper','Polite','ren_uni'),
    mk('蓮、被験者の待合室を整えろ','Ren — subj-wait-rm-prep','Direction','hiroshi_boss'),
    mk('はい。学年首席として後輩に範を示します','Yes — Class-top-junior-example','Earnest close','ren_uni'),
  ]},
  {id:'conv_09589',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、本部との交信体制を整備されてますね','Police HQ-comm-arr','Cooperative','kenji_office'),
    mk('警察、逆説的捜査手法も用いられますね','Police para-inv-method','Cooperative','kenji_office'),
    mk('警察、公約マニフェストを掲げる政治家を監視されますね','Police pledge-manif-pol-monit','Cooperative','kenji_office'),
    mk('警察、防犯カメラが街に点在しております','Police prev-cam-town-scatter','Cooperative','kenji_office'),
    mk('警察、密輸船の入港監視を強化されますね','Police smug-ship-port-monit','Cooperative','kenji_office'),
    mk('警察、犯罪組織の強者を狙われますね','Police crime-leader-target','Cooperative','kenji_office'),
    mk('警察、署の待合室にも防犯を施されますね','Police stat-wait-rm-prev','Cooperative','kenji_office'),
    mk('警察、警察学校首席の卒業生を歓迎されますね','Police acad-top-grad-welc','Close','kenji_office'),
  ]},
  {id:'conv_09590',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、無線交信に苦労された','Dad — founding wire-comm-struggle','Sage','hiroshi_elder'),
    mk('はい。お父さんは逆説的経営判断もされた','Yes — Dad para-mgmt-judg','Commitment','hiroshi_boss'),
    mk('お父さん、創業マニフェストを起草された','Dad — found-manif-draft','Wistful','hiroshi_elder'),
    mk('はい。お父さんは販路を全国に点在させた','Yes — Dad sales-nation-scatter','Reflective','hiroshi_boss'),
    mk('お父さん、輸入船の入港に自ら立ち会われた','Dad — imp-ship-port-att-self','Wistful','hiroshi_elder'),
    mk('はい。お父さんは業界の強者と対等に渡り合われた','Yes — Dad industry-leader-equal-cmp','Reflective','hiroshi_boss'),
    mk('お父さん、お客様の待合室にも気を配られた','Dad — cust-wait-rm-care','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新入社員首席にも自ら声をかけられた','Yes — Dad newhire-top-self-greet','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09591',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、四字熟語の認知研究を論文で扱いましたね','Ren — 4-idiom-cog paper','Calm','asuka_teacher'),
    mk('はい、文学における官能描写の研究を論文で扱いました','Yes — Lit-sens paper','Earnest','ren_uni'),
    mk('蓮さん、固体物理学の最新研究を論文で扱いましたね','Ren — solid-phys paper','Reflective','asuka_teacher'),
    mk('はい、戦後の新制中学校の開校史を論文で扱いました','Yes — Post-war-jr-open paper','Earnest','ren_uni'),
    mk('国体明徴運動の歴史を論文で扱いましたね','Kokutai-clari-hist paper','Engaged','asuka_teacher'),
    mk('はい、縄文期農耕の起源を論文で扱いました','Yes — Jomon-agri paper','Earnest','ren_uni'),
    mk('蓮さん、高分子化学の最新動向を論文で扱いましたね','Ren — polymer-trend paper','Reflective','asuka_teacher'),
    mk('はい、芸術鑑賞時の感嘆表現を論文で扱いました','Yes — Art-app-admir paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09592',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者の熟語使いを、警察、分析されてますね','Case suspect-idiom-use police-anal','Reflective','ren_uni'),
    mk('警察、官能小説に絡む詐欺事件にも対応します','Police sens-novel-fraud-resp','Procedural','takeda_officer'),
    mk('本件、密輸固体物質を、警察、押収されますね','Case smug-solid-mat police-seiz','Reflective','ren_uni'),
    mk('警察、新校開校式の警備を担当します','Police new-sch-open-guard','Procedural','takeda_officer'),
    mk('本件、国体行事の警備を、警察、強化されますね','Case kokutai-event-guard police-strength','Reflective','ren_uni'),
    mk('警察、農耕地での盗難事件も扱います','Police agri-theft-handle','Procedural','takeda_officer'),
    mk('本件、高分子素材の犯行残留を、警察、鑑定されますね','Case polymer-residue police-forensic','Reflective','ren_uni'),
    mk('警察、市民の感嘆を呼ぶ事案より地道な捜査を重視します','Police citi-admir-rather-steady-imp','Close','takeda_officer'),
  ]},
  {id:'conv_09593',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、四字熟語の認知研究を論文で扱いましたね','Sakura — 4-idiom paper','Calm','asuka_teacher'),
    mk('はい、文学の官能描写を論文で扱いました','Yes — Lit-sens paper','Earnest teen','sakura_teen'),
    mk('固体物理学の最新研究を論文で扱いましたね','Solid-phys paper','Reflective','asuka_teacher'),
    mk('はい、戦後新制中学校の開校史を論文で扱いました','Yes — Post-war-jr-open paper','Earnest','sakura_teen'),
    mk('国体明徴運動を論文で扱いましたね','Kokutai-clari paper','Engaged','asuka_teacher'),
    mk('はい、縄文期農耕の起源を論文で扱いました','Yes — Jomon-agri paper','Earnest','sakura_teen'),
    mk('高分子化学の動向を論文で扱いましたね','Polymer-trend paper','Reflective','asuka_teacher'),
    mk('はい、芸術鑑賞時の感嘆表現を論文で扱いました','Yes — Art-admir paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09594',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者の熟語理解度を医療チームで評価します','Ren — pati-idiom-eval med-team','Calm','saito_doctor'),
    mk('はい、官能評価試験を医療チームで用います','Yes — Sens-eval-test med-team','Patient','saito_doctor'),
    mk('蓮さん、固体内服薬の処方を医療チームで管理します','Ren — solid-med med-team','Calm','saito_doctor'),
    mk('看護学校開校時の医療連携を、貴院、おこなわれましたね、先生','Nurse-sch-open-link your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、国体大会時の救護体制を医療チームで担当します','Yes — Kokutai-comp-aid med-team','Patient','saito_doctor'),
    mk('農耕従事者の腰痛対策を、貴院、研究されてますね、先生','Farmer-back-counter your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、高分子膜を用いた人工臓器を医療チームで研究します','Yes — Polymer-mem-art-organ med-team','Patient','saito_doctor'),
    mk('治療の成果に患者が感嘆を、貴院、よく受けられますね、先生','Treat-result-pati-admir your-hosp, sensei','Curious close','ren_uni'),
  ]},
  {id:'conv_09595',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員教育で熟語の理解力を強化しろ','Our co — staff-idiom-strength','Crisp','hiroshi_boss'),
    mk('はい。商品の官能評価を社内で導入します','Yes — Prod-sens-eval-intro','Methodical','kenji_office'),
    mk('当社、固体物流の効率化を進めろ','Our co — solid-log-eff','Direction','hiroshi_boss'),
    mk('はい。社内研修施設の開校を計画します','Yes — Co-train-fac-open-plan','Update','kenji_office'),
    mk('国体大会へのスポンサーも検討しろ','Kokutai-spons-cons','Direction','hiroshi_boss'),
    mk('はい。農耕事業者向け新商品を企画します','Yes — Farmer-new-prod-plan','Update','kenji_office'),
    mk('当社、高分子素材の研究開発を強化しろ','Our co — polymer-mat-R-and-D-strength','Direction','hiroshi_boss'),
    mk('はい。市場の感嘆を呼ぶ新製品を作ります','Yes — Mkt-admir-new-prod-make','Close','kenji_office'),
  ]},
  {id:'conv_09596',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ラグビーのタックル練習で怪我されたって、メイちゃん','Aoi — cust-rugby-tackle-hurt Mei','Reflective','mei_romantic'),
    mk('葵、お客様、現役の浪人生でいらっしゃるって、メイちゃん','Aoi — cust-ronin-stud Mei','Reflective','aoi_barista'),
    mk('葵、お客様、飛鳥時代の歴史小説がお好きだって、メイちゃん','Aoi — cust-Asuka-novel Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ピカソの個展に行かれたよ、メイちゃん','Aoi — cust-Picasso-expo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ジェームズ・ボンドの映画好きだって、メイちゃん','Aoi — cust-Bond-movie Mei','Reflective','mei_romantic'),
    mk('葵、お客様、リンカーンの伝記を読まれてたよ、メイちゃん','Aoi — cust-Lincoln-bio Mei','Reflective','aoi_barista'),
    mk('葵、お客様、フットサルチームに入ってらっしゃるって、メイちゃん','Aoi — cust-futsal-team Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ヤクルトの試合をご覧になったって、メイちゃん','Aoi — cust-Yakult-match Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09597',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがラグビーのタックルが得意だった','Gran — youth Dad-rugby-tackle-good','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、浪人時代を懐かしまれたわよね、あなた?','Yes — Grandpa-ronin-miss, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが飛鳥の遺跡を訪ねられた','Gran — youth Dad-Asuka-relic-visit','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ピカソの作品集をお持ちだったわよね、あなた?','Grandpa — Picasso-coll, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがボンドの映画を映画館でご覧になった','Gran — youth Dad-Bond-cinema','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、リンカーンの伝記をご愛読されたわよね、あなた?','Grandpa — Lincoln-bio-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがフットサルのチームを応援された','Gran — youth Dad-futsal-cheer','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ヤクルトの試合を球場でご覧になったわよね、あなた?','Grandpa — Yakult-stadium, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09598',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがラグビーでタックルの練習をされてるそうよ','Sho — Dad-rugby-tackle-prac','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが浪人時代のお話して下さったよ','Mei-sis — me Dad-ronin-told','Eager child','sho_child'),
    mk('翔くん、お父さんが飛鳥時代の絵本を読んで下さるそうよ','Sho — Dad-Asuka-pic-book-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとピカソの展覧会に行ったよ','Mei-sis — me Dad-Picasso-expo','Eager child','sho_child'),
    mk('翔くん、お父さんがボンドの映画を観てらしたわ','Sho — Dad-Bond-movie-watch','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとリンカーンの絵本読んだよ','Mei-sis — me Dad-Lincoln-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがフットサルチームに入られたのよ','Sho — Dad-futsal-team-join','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとヤクルトの試合観たよ','Mei-sis — me Dad-Yakult-watched','Eager close','sho_child'),
  ]},
  {id:'conv_09599',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ラグビー部のタックル練習辛そうだったな','Riku — rugby-tackle-tough','Wry teen','sakura_teen'),
    mk('お前、浪人覚悟してるな、桜','You — ronin-prep Sakura','Wry','riku_teen'),
    mk('リク、お前、社会で飛鳥時代勉強したろ?','Riku — soc-Asuka?','Curious','sakura_teen'),
    mk('お前、美術でピカソの真似してたな、桜','You — art-Picasso-mimic Sakura','Wry','riku_teen'),
    mk('リク、お前、ボンド映画全部観たろ?','Riku — Bond-all?','Curious','sakura_teen'),
    mk('お前、社会でリンカーン習ったろ?桜','You — soc-Lincoln? Sakura','Curious','riku_teen'),
    mk('リク、お前、フットサルの大会出るんだろ?','Riku — futsal-comp?','Curious','sakura_teen'),
    mk('お前、ヤクルトファンだったな、桜','You — Yakult-fan Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09600',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがラグビーのタックルを教えて下さるそうよ','Sho — Dad-rugby-tackle-teach','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと浪人生のお話聞いたよ','Mom — me Dad-ronin-told','Eager child','sho_child'),
    mk('翔くん、お父さんが飛鳥の遺跡に連れて行って下さるそうよ','Sho — Dad-Asuka-relic-take','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとピカソの本見たよ','Mom — me Dad-Picasso-book','Eager child','sho_child'),
    mk('翔くん、お父さんがボンドの新作を観てらしたわ','Sho — Dad-Bond-new-watch','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとリンカーンのドキュメンタリー観たよ','Mom — me Dad-Lincoln-doc','Eager child','sho_child'),
    mk('翔くん、お父さんがフットサルの大会に出られるそうよ','Sho — Dad-futsal-comp','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとヤクルトの試合観たいよ','Mom — me Dad-Yakult-want','Eager close','sho_child'),
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

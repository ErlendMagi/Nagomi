import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_505 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['恐るべき','逆行','あの世','極意','陳腐','囚われ','円満','時代遅れ']
const B_T = ['グローバリゼーション','投信','空母','プレーオフ','有線','セメント','プランニング','農水省']
const C_T = ['光線','皇后','便秘','中越','河口','未婚','南下','右派']
const D_T = ['毛沢東','ホークス','バーゲン','ダービー','ペナルティ','ガンバ','レーガン','プリンス']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10061',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんは仕事で恐るべき集中力を発揮されるのよ','Sho — Dad-work-formid-conc','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんの言うことに逆行しないようにするね','Mom — me Dad-words-counter-not','Earnest child','sho_child'),
    mk('翔くん、お祖父ちゃんがあの世から見守って下さってるわ','Sho — Grandpa-other-side-watch','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんが料理の極意を教えて下さるそうだよ','Mom — me Dad-cook-secret-teach','Eager child','sho_child'),
    mk('翔くん、陳腐な感想にならないよう自分の言葉で話してね','Sho — cliche-feel-no-own-words','Direction','yumiko_mom'),
    mk('ママ、ぼく、過去に囚われてるとお父さんに言われたよ','Mom — me past-captive-Dad','Reflective child','sho_child'),
    mk('翔くん、お家は円満が一番ね','Sho — home-harm-best','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんが「時代遅れな考え」を改められたよ','Mom — me Dad-old-fash-fix','Eager close','sho_child'),
  ]},
  {id:'conv_10062',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、恐るべき記憶力で常連だってすぐ分かるよ、メイちゃん','Aoi — cust-formid-mem-reg-recog Mei','Reflective','mei_romantic'),
    mk('葵、流行に逆行するレトロ路線も検討しようね、メイちゃん','Aoi — trend-counter-retro Mei','Direction','aoi_barista'),
    mk('葵、お客様、お祖父様があの世から励まして下さるって、メイちゃん','Aoi — cust-Grandpa-other-cheer Mei','Tender','mei_romantic'),
    mk('葵、接客の極意は笑顔ね、メイちゃん','Aoi — serv-secret-smile Mei','Direction','aoi_barista'),
    mk('葵、陳腐な広告にならないよう工夫しようね、メイちゃん','Aoi — cliche-ad-impr Mei','Direction','mei_romantic'),
    mk('葵、忙しさに囚われて他が見えなくなってないかな、メイちゃん','Aoi — busy-captive-see-no Mei','Reflective','aoi_barista'),
    mk('葵、お客様、円満なご夫婦でいらしたね、メイちゃん','Aoi — cust-harm-couple Mei','Tender','mei_romantic'),
    mk('葵、現金のみは時代遅れだから決済を増やそうね、メイちゃん','Aoi — cash-only-old-fash-pay-up Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_10063',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが恐るべき体力をお持ちだった','Gran — youth Dad-formid-phys','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、時代の流れに逆行されない方だったわよね、あなた?','Yes — Grandpa-trend-counter-no, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがあの世のお話をされた','Gran — youth Dad-other-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、剣道の極意を孫に教えられたわよね、あなた?','Grandpa — kendo-secret-grandkid, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは陳腐な常識を疑われた','Gran — youth Dad-cliche-doubt','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、過去に囚われない方でいらしたわよね、あなた?','Grandpa — past-captive-no, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ご家族が円満で過ごせた','Gran — youth-fam-harm','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、時代遅れと笑われてもご自分の信念を貫かれたわよね、あなた?','Grandpa — old-fash-laugh-belief, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10064',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、恐るべき集中力で勉強してたな','Riku — formid-conc-study','Praising teen','sakura_teen'),
    mk('お前、流行に逆行する服装好きだな、桜','You — trend-counter-fashion Sakura','Wry','riku_teen'),
    mk('リク、お前、あの世とこの世の話してたな','Riku — other-this-world-told','Wry','sakura_teen'),
    mk('お前、ゲームの極意教えてくれよ、桜','You — game-secret-tell Sakura','Curious','riku_teen'),
    mk('リク、お前の感想、陳腐すぎだぞ','Riku — feel-cliche-too','Wry','sakura_teen'),
    mk('お前、過去のミスに囚われてるな、桜','You — past-mistake-captive Sakura','Reflective','riku_teen'),
    mk('リク、お前ん家、円満で羨ましいな','Riku — your-home-harm-jealous','Pleased','sakura_teen'),
    mk('お前、時代遅れの携帯使ってたな、桜','You — old-fash-phone Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10065',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんは恐るべき洞察力で人を見抜かれるのよ','Sho — Dad-formid-insight','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、流行に逆行する漫画好きなんだ','Mei-sis — me trend-counter-manga-like','Eager child','sho_child'),
    mk('翔くん、お父さんが「あの世から見守る」って言葉を仰ったわ','Sho — Dad-"other-watch"-said','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが料理の極意を教えて下さったよ','Mei-sis — me Dad-cook-secret-teach','Eager child','sho_child'),
    mk('翔くん、陳腐な感想じゃなく自分の心を伝えてね','Sho — cliche-no-own-heart-tell','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、心配に囚われすぎないよう気を付けるよ','Mei-sis — me worry-captive-care','Earnest child','sho_child'),
    mk('翔くん、お家が円満なのが何より大事ね','Sho — home-harm-most','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、時代遅れのおもちゃも大切にしてるよ','Mei-sis — me old-fash-toy-cherish','Eager close','sho_child'),
  ]},
  {id:'conv_10066',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、グローバリゼーションの波を乗りこなせ','Our co — glob-wave-ride','Crisp','hiroshi_boss'),
    mk('はい。退職金は投信での運用も検討します','Yes — Retir-invest-tr-cons','Methodical','kenji_office'),
    mk('当社、空母型の旗艦店を展開しろ','Our co — carrier-flag-store-launch','Direction','hiroshi_boss'),
    mk('はい。リーグのプレーオフ時期に合わせて広告を出します','Yes — Lg-playoff-ad','Update','kenji_office'),
    mk('有線放送のBGMを更新しろ','Wire-broad-BGM-up','Direction','hiroshi_boss'),
    mk('はい。新工場のセメント工事を急ぎます','Yes — New-fact-cement-fast','Update','kenji_office'),
    mk('当社、事業プランニングを再検討しろ','Our co — biz-plan-rev','Direction','hiroshi_boss'),
    mk('はい。農水省の制度変更に対応します','Yes — MAFF-change-resp','Close','kenji_office'),
  ]},
  {id:'conv_10067',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('グローバリゼーションの影響を分析しましょう','Glob-impact-anal','Brisk','yuki_office'),
    mk('はい。投信商品のリスクを丁寧にご説明します','Yes — Invest-tr-risk-explan','Cooperative','kenji_office'),
    mk('空母型の大型販売拠点を作りましょう','Carrier-large-base-make','Direction','yuki_office'),
    mk('はい。プレーオフ進出時のキャンペーンを準備します','Yes — Playoff-camp-prep','Update','kenji_office'),
    mk('オフィスの有線LANを増設しましょう','Office-wire-LAN-add','Direction','yuki_office'),
    mk('はい。セメント施工業者の選定をします','Yes — Cement-contr-sel','Update','kenji_office'),
    mk('来期プランニングの会議を設定しましょう','Next-plan-mtg','Direction','yuki_office'),
    mk('はい。農水省のホームページを定期確認します','Yes — MAFF-site-reg','Close','kenji_office'),
  ]},
  {id:'conv_10068',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究者もグローバリゼーションの中で生きろ','Ren — research-glob-live','Mentor','hiroshi_boss'),
    mk('はい。学生向け投信教育も意義あります','Yes — Stud-invest-tr-edu','Earnest','ren_uni'),
    mk('蓮、研究所を空母のように位置付けろ','Ren — research-carrier-pos','Direction','hiroshi_boss'),
    mk('はい。学会のプレーオフ的トーナメントに勝ち抜きます','Yes — Conf-playoff-win','Earnest','ren_uni'),
    mk('蓮、有線インターネットの実験環境を整えろ','Ren — wire-net-exp-prep','Direction','hiroshi_boss'),
    mk('はい。セメント素材の研究も視野に入れます','Yes — Cement-mat-view','Polite','ren_uni'),
    mk('蓮、研究プランニングを年初に固めろ','Ren — research-plan-yr-fix','Direction','hiroshi_boss'),
    mk('はい。農水省の研究助成にも応募します','Yes — MAFF-grant-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10069',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、グローバリゼーションで国際犯罪が増えますね','Police glob-intl-crime-up','Cooperative','kenji_office'),
    mk('警察、投信詐欺事件にも対応されますね','Police invest-tr-fraud-resp','Cooperative','kenji_office'),
    mk('警察、海上自衛隊の空母警備も担当されますね','Police JMSDF-carrier-guard','Cooperative','kenji_office'),
    mk('警察、プレーオフ時の球場警備もされますね','Police playoff-stad-guard','Cooperative','kenji_office'),
    mk('警察、有線通信の傍受技術もお持ちですね','Police wire-comm-intercept-tech','Cooperative','kenji_office'),
    mk('警察、セメント詰めの遺体事案にも対応されますね','Police cement-body-resp','Cooperative','kenji_office'),
    mk('警察、捜査プランニングもされますね','Police inv-plan','Cooperative','kenji_office'),
    mk('警察、農水省関連の食品偽装も扱われますね','Police MAFF-food-fraud','Close','kenji_office'),
  ]},
  {id:'conv_10070',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、グローバリゼーションを先見されてた','Dad — founding glob-foresee','Sage','hiroshi_elder'),
    mk('はい。お父さんは投信投資にも慎重だった','Yes — Dad invest-tr-careful','Commitment','hiroshi_boss'),
    mk('お父さん、空母型の物流網を構想された','Dad — carrier-log-vision','Wistful','hiroshi_elder'),
    mk('はい。お父さんはプレーオフのような決戦感を経営に持ち込んだ','Yes — Dad playoff-decis-mgmt','Reflective','hiroshi_boss'),
    mk('お父さん、有線通信の初期に投資された','Dad — wire-comm-early-invest','Wistful','hiroshi_elder'),
    mk('はい。お父さんはセメント業界とも提携された','Yes — Dad cement-partner','Reflective','hiroshi_boss'),
    mk('お父さん、毎年のプランニングを欠かさなかった','Dad — yr-plan-never-skip','Wistful','hiroshi_elder'),
    mk('はい。お父さんは農水省の検査にも丁寧に対応された','Yes — Dad MAFF-insp-pol','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10071',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、紫外線光線の皮膚影響を論文で扱いましたね','Ren — UV-light-skin paper','Calm','asuka_teacher'),
    mk('はい、皇后陛下の社会活動を論文で扱いました','Yes — Empress-soc paper','Earnest','ren_uni'),
    mk('蓮さん、便秘症の食事療法を論文で扱いましたね','Ren — const-diet paper','Reflective','asuka_teacher'),
    mk('はい、中越地震の復興研究を論文で扱いました','Yes — Chuetsu-rec paper','Earnest','ren_uni'),
    mk('河口域の生態系を論文で扱いましたね','Estuary-eco paper','Engaged','asuka_teacher'),
    mk('はい、未婚率の長期動向を論文で扱いました','Yes — Unmar-trend paper','Earnest','ren_uni'),
    mk('蓮さん、寒気団の南下と健康影響を論文で扱いましたね','Ren — cold-south-health paper','Reflective','asuka_teacher'),
    mk('はい、欧州右派政党の動向を論文で扱いました','Yes — EU-right-party paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10072',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、レーザー光線を使った犯行を、警察、扱われますね','Case laser-light-crime police-handle','Reflective','ren_uni'),
    mk('警察、皇后陛下の御行幸警備もされますね','Police Empress-visit-guard','Cooperative','takeda_officer'),
    mk('本件、便秘薬の不正流通を、警察、扱われますね','Case const-med-illeg police-handle','Reflective','ren_uni'),
    mk('警察、中越地区の災害復興窃盗にも対応します','Police Chuetsu-disas-theft-resp','Procedural','takeda_officer'),
    mk('本件、河口域の不法投棄を、警察、扱われますね','Case estuary-dump police-handle','Reflective','ren_uni'),
    mk('警察、未婚男性を狙った詐欺事件も担当します','Police unmar-male-fraud','Procedural','takeda_officer'),
    mk('本件、南下する不法越境者を、警察、警戒されますね','Case south-illeg-cross police-watch','Reflective','ren_uni'),
    mk('警察、右派団体の動向もご注視ですね','Police right-grp-watch','Close','takeda_officer'),
  ]},
  {id:'conv_10073',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、紫外線光線の皮膚影響を論文で扱いましたね','Sakura — UV-skin paper','Calm','asuka_teacher'),
    mk('はい、皇后陛下の社会活動を論文で扱いました','Yes — Empress paper','Earnest teen','sakura_teen'),
    mk('便秘症の食事療法を論文で扱いましたね','Const-diet paper','Reflective','asuka_teacher'),
    mk('はい、中越地震の復興を論文で扱いました','Yes — Chuetsu paper','Earnest','sakura_teen'),
    mk('河口域の生態系を論文で扱いましたね','Estuary paper','Engaged','asuka_teacher'),
    mk('はい、未婚率の長期動向を論文で扱いました','Yes — Unmar paper','Earnest','sakura_teen'),
    mk('寒気団の南下と健康影響を論文で扱いましたね','Cold-south paper','Reflective','asuka_teacher'),
    mk('はい、欧州右派政党の動向を論文で扱いました','Yes — Right-party paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10074',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、レーザー光線治療を医療チームで導入します','Ren — laser-treat med-team','Calm','saito_doctor'),
    mk('はい、皇后陛下にもご紹介できる医療を医療チームで目指します','Yes — Empress-grade-med med-team','Patient','saito_doctor'),
    mk('蓮さん、便秘の食事指導を医療チームで提供します','Ren — const-diet med-team','Calm','saito_doctor'),
    mk('中越地区の災害医療支援を、貴院、されてますね、先生','Chuetsu-disas-med your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、河口域の感染症対策を医療チームで研究します','Yes — Estuary-infect med-team','Patient','saito_doctor'),
    mk('未婚妊婦支援を、貴院、進められてますね、先生','Unmar-preg-supp your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、寒気が南下する季節の医療対応を医療チームで強化します','Yes — Cold-south-season med-team strength','Patient','saito_doctor'),
    mk('政治的右派患者にも、貴院、平等に医療を提供されますね、先生','Pol-right-pati your-hosp equal, sensei','Curious close','ren_uni'),
  ]},
  {id:'conv_10075',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、レーザー光線を用いた検査機器を販売しろ','Our co — laser-light-insp-sell','Crisp','hiroshi_boss'),
    mk('はい。皇后陛下ご利用の商品としてPRしません','Yes — Empress-PR-no','Methodical','kenji_office'),
    mk('社員食堂で便秘対策メニューを増やせ','Staff-cant-const-menu-up','Direction','hiroshi_boss'),
    mk('はい。中越地区の販売店を強化します','Yes — Chuetsu-store-strength','Update','kenji_office'),
    mk('当社、河口域の港湾事業にも参入しろ','Our co — estuary-port-launch','Direction','hiroshi_boss'),
    mk('はい。未婚社員向け制度も整えます','Yes — Unmar-staff-prep','Update','kenji_office'),
    mk('当社、市場の南下、つまり南方市場進出を進めろ','Our co — mkt-south-launch','Direction','hiroshi_boss'),
    mk('はい。右派寄りの偏った広告は致しません','Yes — Right-bias-ad-no','Close','kenji_office'),
  ]},
  {id:'conv_10076',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、毛沢東時代の中国研究をされてるって、メイちゃん','Aoi — cust-Mao-China Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ホークスのファンクラブだって、メイちゃん','Aoi — cust-Hawks-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、デパートのバーゲンセールを楽しまれるって、メイちゃん','Aoi — cust-dept-barg Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ダービーの観戦が趣味だって、メイちゃん','Aoi — cust-Derby-watch Mei','Reflective','aoi_barista'),
    mk('葵、お客様、サッカーのペナルティキックの研究をされてるって、メイちゃん','Aoi — cust-PK-research Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ガンバ大阪のサポーターだって、メイちゃん','Aoi — cust-Gamba-supp Mei','Reflective','aoi_barista'),
    mk('葵、お客様、レーガン政権時代の研究をされてるって、メイちゃん','Aoi — cust-Reagan-era Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ロンドンのプリンスホテルに泊まったって、メイちゃん','Aoi — cust-London-Prince Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10077',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが毛沢東主義の本を読まれた','Gran — youth Dad-Mao-book','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ホークスの試合をテレビで観られたわよね、あなた?','Yes — Grandpa-Hawks-TV, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、デパートのバーゲンに並んだのよ','Gran — youth-dept-barg-line','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、英国ダービーをラジオでお聴きになったわよね、あなた?','Grandpa — UK-Derby-radio, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがサッカーのペナルティの解説をされた','Gran — youth Dad-PK-comm','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ガンバの試合に行かれたわよね、あなた?','Grandpa — Gamba-match, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがレーガン時代の経済の本を読まれた','Gran — youth Dad-Reagan-econ','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、プリンスホテルでお祝いされたわよね、あなた?','Grandpa — Prince-Htl-cel, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10078',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが毛沢東時代の中国の絵本を読んで下さるそうよ','Sho — Dad-Mao-China-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとホークスの試合観たいよ','Mei-sis — me Dad-Hawks-want','Eager child','sho_child'),
    mk('翔くん、お父さんがバーゲンでオモチャを買って下さったわ','Sho — Dad-barg-toy-buy','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとダービーの中継観たよ','Mei-sis — me Dad-Derby-broad','Eager child','sho_child'),
    mk('翔くん、お父さんがサッカーのペナルティを教えて下さったわ','Sho — Dad-PK-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとガンバの試合観たいよ','Mei-sis — me Dad-Gamba-want','Eager child','sho_child'),
    mk('翔くん、お父さんがレーガン元大統領のドキュメンタリーをご覧になったわ','Sho — Dad-Reagan-doc','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとプリンスホテルのバイキング行ったよ','Mei-sis — me Dad-Prince-buffet','Eager close','sho_child'),
  ]},
  {id:'conv_10079',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会で毛沢東習ったろ?','Riku — soc-Mao?','Curious teen','sakura_teen'),
    mk('お前、ホークスのファンだったな、桜','You — Hawks-fan Sakura','Curious','riku_teen'),
    mk('リク、お前、バーゲンで限定品買ってたな','Riku — barg-ltd-buy','Curious','sakura_teen'),
    mk('お前、競馬のダービー予想してたな、桜','You — Derby-pred Sakura','Wry','riku_teen'),
    mk('リク、お前、PKの練習してたな','Riku — PK-prac','Curious','sakura_teen'),
    mk('お前、ガンバ大阪のユニフォーム着てたな、桜','You — Gamba-uni Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でレーガン政権習ったろ?','Riku — soc-Reagan?','Curious','sakura_teen'),
    mk('お前ん家、プリンスホテルで結婚式したな、桜','You-home-Prince-wed Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10080',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが毛沢東時代の歴史を教えて下さったわ','Sho — Dad-Mao-hist-teach','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとホークスの試合観たよ','Mom — me Dad-Hawks','Eager child','sho_child'),
    mk('翔くん、お父さんがバーゲンで靴を買って下さったわ','Sho — Dad-barg-shoe-buy','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お父さんとダービーの中継観たよ','Mom — me Dad-Derby-broad','Eager child','sho_child'),
    mk('翔くん、お父さんがサッカーのペナルティの本を見せて下さったわ','Sho — Dad-PK-book-show','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとガンバの応援グッズ買ったよ','Mom — me Dad-Gamba-goods','Eager child','sho_child'),
    mk('翔くん、お父さんがレーガン政権時代の経済の本を読んでらしたわ','Sho — Dad-Reagan-econ-book','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとプリンスホテルのレストラン行きたいよ','Mom — me Dad-Prince-rest-want','Eager close','sho_child'),
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

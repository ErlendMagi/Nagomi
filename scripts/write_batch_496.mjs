import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_496 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['みなす','逃れる','しようが','見なさ','傾き','負い','懲り','劣る']
const B_T = ['符号','執拗','再三','先々','最長','怠慢','随所','つくろ']
const C_T = ['農政','国民党','生育','深層','重度','照射','同和','音程']
const D_T = ['北方','ケネディ','都立','近鉄','東急','Ｊリーグ','エンジニアリング','デスノート']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09881',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんは翔くんを大人とみなす日も近いわね','Sho — Dad-Sho-adult-deem-close','Reflective','yumiko_mom'),
    mk('ママ、ぼく、宿題から逃れる事は絶対しないよ','Mom — me homework-escape-never','Earnest child','sho_child'),
    mk('翔くん、お父さんが「しようがない」と笑っていらしたわ','Sho — Dad-"can-not-help"-laugh','Wry','yumiko_mom'),
    mk('ママ、お父さんからぼくが見なされてないって心配だよ','Mom — me Dad-noticed-not-worry','Reflective child','sho_child'),
    mk('翔くん、お部屋の写真の傾きを直しましょうね','Sho — room-photo-tilt-fix','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんが責任を負い続けてらっしゃると思うよ','Mom — me Dad-resp-carry-cont','Reflective child','sho_child'),
    mk('翔くん、悪さに懲りた様子のお父さんが微笑ましいわ','Sho — Dad-bad-learned-cute','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに劣ると思わずに頑張るよ','Mom — me Dad-inf-not-effort','Earnest close','sho_child'),
  ]},
  {id:'conv_09882',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様をお店の宝とみなすようにしようね、メイちゃん','Aoi — cust-treas-deem Mei','Direction','mei_romantic'),
    mk('葵、繁忙期から逃れる方法はないから乗り切ろうね、メイちゃん','Aoi — busy-escape-not-overcome Mei','Direction','aoi_barista'),
    mk('葵、忙しい日は「しようがない」と割り切ろうね、メイちゃん','Aoi — busy-"can-not-help"-accept Mei','Direction','mei_romantic'),
    mk('葵、新人スタッフを甘く見なされないように指導しようね、メイちゃん','Aoi — newhire-low-see-not-guide Mei','Direction','aoi_barista'),
    mk('葵、看板の傾きを直して綺麗にしようね、メイちゃん','Aoi — sign-tilt-fix Mei','Direction','mei_romantic'),
    mk('葵、お客様の期待を負いつつ頑張ろうね、メイちゃん','Aoi — cust-exp-carry-effort Mei','Direction','aoi_barista'),
    mk('葵、ミスに懲りずに前向きにいこうね、メイちゃん','Aoi — mistake-learn-pos Mei','Direction','mei_romantic'),
    mk('葵、他店に劣ると思わずに自信を持とうね、メイちゃん','Aoi — other-store-inf-not-conf Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09883',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、人は皆を仲間とみなす時代だった','Gran — youth-people-comrade-deem-era','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、戦中、空襲から逃れる夜が多かったわよね、あなた?','Yes — Grandpa-war-air-raid-escape, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「しようがない」と諦めずに動かれた','Gran — youth Dad-"can-not"-no-give-up','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご家族を粗末に見なされる事は絶対なかったわよね、あなた?','Grandpa — fam-poor-see-no-tol, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが土地の傾きを測ってらした','Gran — youth Dad-land-tilt-meas','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、家族の責任を負い続けて下さったわよね、あなた?','Grandpa — fam-resp-carry-cont, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが失敗に懲りずに挑戦された','Gran — youth Dad-fail-learn-chall','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、誰にも劣るところがなかったわよね、あなた?','Grandpa — anyone-inf-no, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09884',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、俺を友達とみなすの嬉しいぜ','Riku — me-friend-deem-glad','Tender teen','sakura_teen'),
    mk('お前、勉強から逃れる方法考えてたな、桜','You — study-escape-think Sakura','Wry','riku_teen'),
    mk('リク、お前、しようがないって諦め癖あるな','Riku — "can-not"-give-up-hab','Wry','sakura_teen'),
    mk('お前、後輩に軽く見なされてたな、桜','You — junior-light-see Sakura','Wry','riku_teen'),
    mk('リク、お前、机の傾き気にしてたな','Riku — desk-tilt-care','Curious','sakura_teen'),
    mk('お前、責任を負いたがらないな、桜','You — resp-carry-no-want Sakura','Wry','riku_teen'),
    mk('リク、テストで懲りずに同じミスしてたな','Riku — test-learn-same-mistake','Wry','sakura_teen'),
    mk('お前、運動で劣る分、勉強で頑張れよ、桜','You — sport-inf-study-effort Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_09885',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんは翔くんを子供とみなさず一人前にお接しよ','Sho — Dad-Sho-kid-no-adult-treat','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんから逃れるなんて考えないよ','Mei-sis — me Dad-escape-no','Earnest child','sho_child'),
    mk('翔くん、「しようがない」って思わずに乗り越えていきましょうね','Sho — "can-not"-no-overcome','Direction','mei_romantic'),
    mk('メイ姉さん、お父さんに見なされてないって不安だよ','Mei-sis — Dad-noticed-not-worry','Reflective child','sho_child'),
    mk('翔くん、お父さんが本棚の傾きを直して下さるそうよ','Sho — Dad-shelf-tilt-fix','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが家族の責任を負い続けてらっしゃると思う','Mei-sis — me Dad-fam-resp-carry','Reflective child','sho_child'),
    mk('翔くん、お友達との喧嘩に懲りた様子の翔くんが可愛いわ','Sho — friend-fight-learn-cute','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに劣ると思わずに頑張るよ','Mei-sis — me Dad-inf-not-effort','Earnest close','sho_child'),
  ]},
  {id:'conv_09886',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、社内通信に符号化を導入しろ','Our co — co-comm-encode-intro','Crisp','hiroshi_boss'),
    mk('はい。執拗なクレーマー対応もマニュアル化します','Yes — Pers-comp-man','Methodical','kenji_office'),
    mk('当社、再三の警告にも従わない取引先を整理しろ','Our co — repeat-warn-no-partner-org','Direction','hiroshi_boss'),
    mk('はい。先々の業績見通しを共有します','Yes — Fut-perf-share','Update','kenji_office'),
    mk('最長の契約期間も検討しろ','Long-contract-cons','Direction','hiroshi_boss'),
    mk('はい。社員の怠慢を見逃しません','Yes — Staff-lazy-no-tol','Update','kenji_office'),
    mk('当社、商品設計の随所に工夫を加えろ','Our co — prod-design-every-impr','Direction','hiroshi_boss'),
    mk('はい。古い慣習をつくろう新ルールを作ります','Yes — Old-cust-replace-new-rule','Close','kenji_office'),
  ]},
  {id:'conv_09887',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社内通信の符号化規則を共有しましょう','Co-comm-encode-rule-share','Brisk','yuki_office'),
    mk('はい。執拗な営業電話には毅然と対応します','Yes — Pers-sales-call-firm','Cooperative','kenji_office'),
    mk('再三の打ち合わせで方針を固めましょう','Repeat-mtg-pol-fix','Direction','yuki_office'),
    mk('はい。先々の人員計画を立てます','Yes — Fut-staff-plan','Update','kenji_office'),
    mk('最長納期のクライアントを優先しましょう','Long-deadl-cli-pri','Direction','yuki_office'),
    mk('はい。怠慢な対応は社員研修で改善します','Yes — Lazy-resp-train-impr','Update','kenji_office'),
    mk('随所にお客様視点を取り入れましょう','Every-cust-view','Direction','yuki_office'),
    mk('はい。古い手順をつくろうマニュアルに刷新します','Yes — Old-proc-replace-man','Close','kenji_office'),
  ]},
  {id:'conv_09888',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、データの符号化ルールを覚えろ','Ren — data-encode-rule-learn','Mentor','hiroshi_boss'),
    mk('はい。執拗な質問にも丁寧に答えます','Yes — Pers-Q-pol-ans','Earnest','ren_uni'),
    mk('蓮、再三の実験で確証を得ろ','Ren — repeat-exp-conf','Direction','hiroshi_boss'),
    mk('はい。先々の研究計画も視野に入れます','Yes — Fut-research-view','Earnest','ren_uni'),
    mk('蓮、最長の研究期間を見据えろ','Ren — long-research-see','Direction','hiroshi_boss'),
    mk('はい。研究に怠慢があってはなりません','Yes — Research-lazy-no','Polite','ren_uni'),
    mk('蓮、論文の随所に独自性を出せ','Ren — paper-every-uniq','Direction','hiroshi_boss'),
    mk('はい。先行研究をつくろう新仮説を立てます','Yes — Prior-replace-new-hyp','Earnest close','ren_uni'),
  ]},
  {id:'conv_09889',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、無線符号の解読技術もお持ちですね','Police wire-encode-decode','Cooperative','kenji_office'),
    mk('警察、執拗なストーカー事件も扱われますね','Police pers-stalker-handle','Cooperative','kenji_office'),
    mk('警察、再三の注意でも従わない者には厳格に対処されますね','Police repeat-warn-no-strict','Cooperative','kenji_office'),
    mk('警察、先々の犯罪傾向を予測されますね','Police fut-crime-est','Cooperative','kenji_office'),
    mk('警察、最長級の捜査もご経験ですね','Police long-inv-exp','Cooperative','kenji_office'),
    mk('警察、怠慢な対応は内部告発で改善されますね','Police lazy-whistl-impr','Cooperative','kenji_office'),
    mk('警察、犯行現場の随所に証拠が残るものですね','Police scene-every-evid','Cooperative','kenji_office'),
    mk('警察、旧手法をつくろう新捜査法も導入されますね','Police old-replace-new-inv-intro','Close','kenji_office'),
  ]},
  {id:'conv_09890',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、契約に符号管理を導入された','Dad — founding contract-encode-intro','Sage','hiroshi_elder'),
    mk('はい。お父さんは執拗な妨害にも屈しなかった','Yes — Dad pers-obstr-resilient','Commitment','hiroshi_boss'),
    mk('お父さん、再三の交渉で勝利された','Dad — repeat-negot-win','Wistful','hiroshi_elder'),
    mk('はい。お父さんは先々の市場を見据えてらした','Yes — Dad fut-mkt-see','Reflective','hiroshi_boss'),
    mk('お父さん、最長の関係を取引先と築かれた','Dad — long-rel-partner-build','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の怠慢を見逃さなかった','Yes — Dad staff-lazy-no-tol','Reflective','hiroshi_boss'),
    mk('お父さん、社内の随所にお父さんの哲学が残ってる','Dad — co-every-philos','Wistful','hiroshi_elder'),
    mk('はい。お父さんは古い習慣をつくろう新文化を作られた','Yes — Dad old-replace-new-cult','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09891',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦後の農政改革史を論文で扱いましたね','Ren — postwar-agri-pol-ref paper','Calm','asuka_teacher'),
    mk('はい、台湾国民党の戦後政治史を論文で扱いました','Yes — Taiwan-KMT-postwar paper','Earnest','ren_uni'),
    mk('蓮さん、植物の生育環境研究を論文で扱いましたね','Ren — plant-grow-env paper','Reflective','asuka_teacher'),
    mk('はい、海洋深層水の利用研究を論文で扱いました','Yes — Deep-sea-use paper','Earnest','ren_uni'),
    mk('重度の難病患者の研究を論文で扱いましたね','Sev-rare-pati paper','Engaged','asuka_teacher'),
    mk('はい、紫外線照射の皮膚影響研究を論文で扱いました','Yes — UV-skin paper','Earnest','ren_uni'),
    mk('蓮さん、戦後の同和教育史を論文で扱いましたね','Ren — postwar-Dowa-edu paper','Reflective','asuka_teacher'),
    mk('はい、合唱における音程訓練を論文で扱いました','Yes — Choir-pitch-train paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09892',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、農政改革に絡む不正を、警察、扱われますね','Case agri-pol-corrup police-handle','Reflective','ren_uni'),
    mk('警察、台湾国民党関連の警備もされますね','Police KMT-guard','Cooperative','takeda_officer'),
    mk('本件、児童の生育環境調査を、警察、おこなわれますね','Case child-grow-anal police-do','Reflective','ren_uni'),
    mk('警察、海洋深層での密漁事件もご捜査ですね','Police deep-sea-poach-inv','Cooperative','takeda_officer'),
    mk('本件、重度の虐待事件を、警察、扱われますね','Case sev-abuse police-handle','Reflective','ren_uni'),
    mk('警察、放射線照射事故の捜査もされますね','Police rad-incid-inv','Procedural','takeda_officer'),
    mk('本件、同和地区での差別事案を、警察、扱われますね','Case Dowa-disc police-handle','Reflective','ren_uni'),
    mk('警察、容疑者の声紋音程分析もされますね','Police suspect-voice-pitch-anal','Close','takeda_officer'),
  ]},
  {id:'conv_09893',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦後の農政改革史を論文で扱いましたね','Sakura — postwar-agri-ref paper','Calm','asuka_teacher'),
    mk('はい、台湾国民党の戦後政治史を論文で扱いました','Yes — Taiwan-KMT paper','Earnest teen','sakura_teen'),
    mk('植物の生育環境研究を論文で扱いましたね','Plant-grow paper','Reflective','asuka_teacher'),
    mk('はい、海洋深層水の利用研究を論文で扱いました','Yes — Deep-sea paper','Earnest','sakura_teen'),
    mk('重度の難病患者の研究を論文で扱いましたね','Sev-rare paper','Engaged','asuka_teacher'),
    mk('はい、紫外線照射の皮膚影響を論文で扱いました','Yes — UV-skin paper','Earnest','sakura_teen'),
    mk('戦後の同和教育史を論文で扱いましたね','Postwar-Dowa paper','Reflective','asuka_teacher'),
    mk('はい、合唱の音程訓練を論文で扱いました','Yes — Choir-pitch paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09894',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、農政の地域医療への影響を医療チームで分析します','Ren — agri-pol-local-med med-team','Calm','saito_doctor'),
    mk('はい、台湾の国民党時代の医療事情を医療チームで学びます','Yes — Taiwan-KMT-med med-team','Patient','saito_doctor'),
    mk('蓮さん、子どもの生育健診を医療チームで担当します','Ren — child-grow-check med-team','Calm','saito_doctor'),
    mk('はい、深層心理療法を医療チームで提供します','Yes — Deep-psych-ther med-team','Patient','saito_doctor'),
    mk('重度の認知症患者を、貴院、診られますね、先生','Sev-dem-pati your-hosp diag, sensei','Reflective','ren_uni'),
    mk('はい、放射線照射量を医療チームで厳密管理します','Yes — Rad-dose med-team strict','Patient','saito_doctor'),
    mk('同和地区での医療巡回を、貴院、おこなわれますね、先生','Dowa-area-rounds your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、術中モニターの音程変化を医療チームで聞き分けます','Yes — Surg-monit-pitch med-team listen','Patient close','saito_doctor'),
  ]},
  {id:'conv_09895',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、農政動向に応じた商品戦略をとれ','Our co — agri-pol-prod-strat','Crisp','hiroshi_boss'),
    mk('はい。台湾国民党系の取引先との関係も大事にします','Yes — Taiwan-KMT-partner-rel','Methodical','kenji_office'),
    mk('当社、新人の生育、つまり育成計画を整えろ','Our co — newhire-grow-plan','Direction','hiroshi_boss'),
    mk('はい。深層顧客分析を導入します','Yes — Deep-cust-anal-intro','Update','kenji_office'),
    mk('重度の不採算事業から撤退する判断もしろ','Sev-unprof-withdraw-judg','Direction','hiroshi_boss'),
    mk('はい。商品の品質照射試験を強化します','Yes — Prod-irrad-test-strength','Update','kenji_office'),
    mk('当社、同和問題への配慮も社員教育に含めろ','Our co — Dowa-cons-edu','Direction','hiroshi_boss'),
    mk('はい。プレゼンの音程にも気を配ります','Yes — Pres-pitch-care','Close','kenji_office'),
  ]},
  {id:'conv_09896',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、北方領土問題に関心がおありだって、メイちゃん','Aoi — cust-North-terr-int Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ケネディ家の伝記を読んでらしたよ、メイちゃん','Aoi — cust-Kennedy-bio Mei','Reflective','aoi_barista'),
    mk('葵、お客様、都立大学の卒業生だって、メイちゃん','Aoi — cust-Toritsu-grad Mei','Reflective','mei_romantic'),
    mk('葵、お客様、近鉄電車で通勤されてるって、メイちゃん','Aoi — cust-Kintetsu-comm Mei','Reflective','aoi_barista'),
    mk('葵、お客様、東急ハンズでお買い物されたって、メイちゃん','Aoi — cust-Tokyu-Hands Mei','Reflective','mei_romantic'),
    mk('葵、お客様、Ｊリーグ観戦が趣味だって、メイちゃん','Aoi — cust-J-league Mei','Reflective','aoi_barista'),
    mk('葵、お客様、エンジニアリング会社の社長だって、メイちゃん','Aoi — cust-eng-co-pres Mei','Reflective','mei_romantic'),
    mk('葵、お客様、デスノートの漫画ファンだって、メイちゃん','Aoi — cust-Death-Note-fan Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09897',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが北方領土返還運動に参加された','Gran — youth Dad-North-terr-move','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ケネディ大統領の暗殺に絶句されたわよね、あなた?','Yes — Grandpa-Kennedy-shock, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが都立高校で教鞭をとられた','Gran — youth Dad-Toritsu-HS-teach','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、近鉄沿線にお住まいだったわよね、あなた?','Grandpa — Kintetsu-live, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが東急百貨店で買い物された','Gran — youth Dad-Tokyu-dept-shop','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、Ｊリーグ発足の年を覚えてらしたわよね、あなた?','Grandpa — J-league-launch-year, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがエンジニアリング会社にお勤めだった','Gran — youth Dad-eng-co-work','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様がデスノートを読まれて驚いてらしたわよね、あなた?','Grandpa — grandkid-Death-Note-shock, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09898',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが北方領土の歴史を教えて下さるそうよ','Sho — Dad-North-terr-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとケネディ大統領のドキュメンタリー観たよ','Mei-sis — me Dad-Kennedy-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが都立高校の同窓会に行かれたわ','Sho — Dad-Toritsu-alumni','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと近鉄電車に乗ったよ','Mei-sis — me Dad-Kintetsu','Eager child','sho_child'),
    mk('翔くん、お父さんが東急ハンズに連れて行って下さるそうよ','Sho — Dad-Tokyu-Hands-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、Ｊリーグの試合観たいよ','Mei-sis — me J-league-want','Eager child','sho_child'),
    mk('翔くん、お父さんがエンジニアリングのお話して下さるそうよ','Sho — Dad-eng-told','Reflective','mei_romantic'),
    mk('メイ姉さん、デスノートはぼくにはまだ難しいって、お父さんが','Mei-sis — Death-Note-me-hard-Dad','Reflective close','sho_child'),
  ]},
  {id:'conv_09899',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会で北方領土習ったろ?','Riku — soc-North-terr?','Curious teen','sakura_teen'),
    mk('お前、社会でケネディ政権習ったろ?桜','You — soc-Kennedy? Sakura','Curious','riku_teen'),
    mk('リク、お前、都立高校志望だったな','Riku — Toritsu-aim','Curious','sakura_teen'),
    mk('お前、近鉄バファローズ応援してたな、桜','You — Kintetsu-Buff-fan Sakura','Curious','riku_teen'),
    mk('リク、お前、東急沿線で部活してたな','Riku — Tokyu-club','Curious','sakura_teen'),
    mk('お前、Ｊリーグ全クラブ覚えてたな、桜','You — J-league-all Sakura','Curious','riku_teen'),
    mk('リク、お前、エンジニアリング学部志望だったな','Riku — eng-major-aim','Curious','sakura_teen'),
    mk('お前、デスノート全巻持ってたな、桜','You — Death-Note-all Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09900',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが北方領土のニュースをご覧になってたわ','Sho — Dad-North-terr-news','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとケネディ家のドキュメンタリー観たよ','Mom — me Dad-Kennedy-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが都立高校の同窓会に行かれたわ','Sho — Dad-Toritsu-alumni','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと近鉄電車に乗ったよ','Mom — me Dad-Kintetsu','Eager child','sho_child'),
    mk('翔くん、お父さんが東急百貨店でプレゼントを買って下さったわ','Sho — Dad-Tokyu-dept-gift','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとＪリーグの試合観たよ','Mom — me Dad-J-league','Eager child','sho_child'),
    mk('翔くん、お父さんがエンジニアリング企業に転職されたわ','Sho — Dad-eng-co-change','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとデスノートの映画は子供向きじゃないって学んだよ','Mom — me Dad-Death-Note-kid-no-learn','Eager close','sho_child'),
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

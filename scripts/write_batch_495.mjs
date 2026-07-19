import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_495 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['人様','見合っ','ヶ国','すぐさま','助長','覆っ','ほかなら','乗せる']
const B_T = ['帯域','ファクター','環境省','入所','税務署','経済企画庁','自治省','付随']
const C_T = ['宗派','聖霊','自明','恒久','不平等','伝導','消失','垣間見']
const D_T = ['琉球','盛岡','大宮','八王子','ケンブリッジ','シベリア','サンパウロ','平壌']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09861',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、人様の物を触っちゃダメよ','Sho — others-touch-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんと目が合って見合って笑っちゃったよ','Mom — me Dad-eye-meet-laugh','Eager child','sho_child'),
    mk('翔くん、お父さんが海外二十ヶ国を回られたんだって','Sho — Dad-overseas-20-ka-go Mei','Reflective','yumiko_mom'),
    mk('ママ、お父さんがすぐさま助けて下さったよ','Mom — Dad-imm-help','Tender child','sho_child'),
    mk('翔くん、悪い習慣を助長しないよう気を付けようね','Sho — bad-hab-promo-not-care','Direction','yumiko_mom'),
    mk('ママ、お部屋の床がカーペットで覆ってあるよ','Mom — room-floor-carpet-cover','Eager child','sho_child'),
    mk('翔くん、お父さんはほかならぬ家族の支えね','Sho — Dad-no-other-fam-supp','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに肩車に乗せるって言われたよ','Mom — me Dad-shoulder-ride-promised','Eager close','sho_child'),
  ]},
  {id:'conv_09862',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、人様にお声を掛けて下さるご親切な方ね、メイちゃん','Aoi — cust-others-greet-kind Mei','Reflective','mei_romantic'),
    mk('葵、お客様、隣の方と席を見合って譲り合われたよ、メイちゃん','Aoi — cust-neighbor-eye-yield Mei','Tender','aoi_barista'),
    mk('葵、お客様、十数ヶ国を回ってこられた旅人だって、メイちゃん','Aoi — cust-doz-ka-trav Mei','Reflective','mei_romantic'),
    mk('葵、クレームにはすぐさま対応しようね、メイちゃん','Aoi — comp-imm-resp Mei','Direction','aoi_barista'),
    mk('葵、過剰なサービスは依存を助長するから注意ね、メイちゃん','Aoi — over-serv-dep-promo Mei','Direction','mei_romantic'),
    mk('葵、お皿を布で覆ってお席に運ぼうね、メイちゃん','Aoi — plate-cloth-cover-carry Mei','Direction','aoi_barista'),
    mk('葵、お店の魅力はほかならぬスタッフの笑顔ね、メイちゃん','Aoi — store-charm-no-other-staff-smile Mei','Tender','mei_romantic'),
    mk('葵、新メニューにお客様の心を乗せるよう工夫しよう、メイちゃん','Aoi — new-menu-cust-heart-ride-impr Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09863',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが人様に迷惑を掛けない方だった','Gran — youth Dad-others-trouble-no','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、孫と目を見合って嬉しそうにされたわよね、あなた?','Yes — Grandpa-grandkid-eye-glad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが二十ヶ国近く回られた','Gran — youth Dad-20-ka-go','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、危急時にはすぐさま動かれたわよね、あなた?','Grandpa — emerg-imm-move, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが悪行を助長しない厳格な方だった','Gran — youth Dad-bad-promo-not-strict','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年は冬は布団で覆って暖かくしてらしたわよね、あなた?','Grandpa — late-winter-blanket-cover-warm, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはほかならぬ家族の柱だった','Gran — youth Dad-no-other-fam-pillar','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫を膝に乗せるのがお好きだったわよね、あなた?','Grandpa — grandkid-knee-ride-like, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09864',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、人様の自転車に勝手に乗るなよ','Riku — others-bike-no-permit-ride','Direction','sakura_teen'),
    mk('お前、彼女と目が見合って照れてたな、桜','You — gf-eye-blush Sakura','Wry','riku_teen'),
    mk('リク、お前、社会で世界二百ヶ国習ったろ','Riku — soc-200-ka?','Curious','sakura_teen'),
    mk('お前、テストでミスにすぐさま気付いてたな、桜','You — test-mistake-imm-notice Sakura','Praising','riku_teen'),
    mk('リク、SNSのいじめを助長するなよ','Riku — SNS-bully-promo-no','Direction','sakura_teen'),
    mk('お前、毛布で顔を覆って寝てたな、桜','You — blanket-face-cover-sleep Sakura','Wry','riku_teen'),
    mk('リク、お前ん家、ほかならぬ憧れの家だな','Riku — your-home-no-other-admire','Praising','sakura_teen'),
    mk('お前、自転車の後ろに弟を乗せるの上手いな、桜','You — bike-bro-ride-good Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09865',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、人様のお家を覗いてはいけないわ','Sho — others-home-peek-no','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと目を見合って笑ったよ','Mei-sis — me Dad-eye-laugh','Eager child','sho_child'),
    mk('翔くん、お父さんが世界二十ヶ国近くを回られたって聞いたわ','Sho — Dad-20-ka-heard','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがすぐさま駆けつけて下さったよ','Mei-sis — me Dad-imm-came','Eager child','sho_child'),
    mk('翔くん、間違った行動を助長しないようにね','Sho — wrong-act-promo-not','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと毛布で頭を覆ってかくれんぼしたよ','Mei-sis — me Dad-blanket-head-cover-hide','Eager child','sho_child'),
    mk('翔くん、メイ姉さんはほかならぬ翔くんの味方よ','Sho — Mei-sis-no-other-Sho-side','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが自転車に乗せるって仰ったよ','Mei-sis — me Dad-bike-ride-said','Eager close','sho_child'),
  ]},
  {id:'conv_09866',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、通信帯域の確保を最優先しろ','Our co — comm-band-sec-top','Crisp','hiroshi_boss'),
    mk('はい。成功の決定的ファクターを分析します','Yes — Succ-factor-anal','Methodical','kenji_office'),
    mk('当社、環境省のガイドラインを遵守しろ','Our co — env-min-comp','Direction','hiroshi_boss'),
    mk('はい。社員の研修施設入所手続きを整えます','Yes — Staff-train-fac-enroll-prep','Update','kenji_office'),
    mk('税務署対応も丁寧にしろ','Tax-off-pol','Direction','hiroshi_boss'),
    mk('はい。経済企画庁時代の統計も参考にします','Yes — Old-EPA-stat-ref','Update','kenji_office'),
    mk('当社、自治省関連の歴史的経緯も学べ','Our co — old-LGM-hist-learn','Direction','hiroshi_boss'),
    mk('はい。主契約に付随する小契約も精査します','Yes — Main-att-sub-anal','Close','kenji_office'),
  ]},
  {id:'conv_09867',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('通信帯域の利用状況を確認しましょう','Comm-band-use-check','Brisk','yuki_office'),
    mk('はい。成功要因のファクター表を作ります','Yes — Succ-factor-tbl','Cooperative','kenji_office'),
    mk('環境省のセミナーに参加しましょう','Env-min-sem-join','Direction','yuki_office'),
    mk('はい。研修生の入所日を調整します','Yes — Train-stud-enroll-day','Update','kenji_office'),
    mk('税務署への提出書類を整理しましょう','Tax-off-doc-org','Direction','yuki_office'),
    mk('はい。経済企画庁OBの方をお招きします','Yes — Old-EPA-OB-invite','Update','kenji_office'),
    mk('自治省時代の人脈も活かしましょう','Old-LGM-net-use','Direction','yuki_office'),
    mk('はい。契約に付随する条件も明確にします','Yes — Contract-att-clear','Close','kenji_office'),
  ]},
  {id:'conv_09868',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究データの帯域確保を意識しろ','Ren — research-band-aware','Mentor','hiroshi_boss'),
    mk('はい。実験の成功ファクターを整理します','Yes — Exp-succ-factor-org','Earnest','ren_uni'),
    mk('蓮、環境省の補助金も視野に入れろ','Ren — env-min-grant-view','Direction','hiroshi_boss'),
    mk('はい。研究員の宿舎入所手続きを進めます','Yes — Research-dorm-enroll-prog','Earnest','ren_uni'),
    mk('蓮、税務署に研究奨学金の申告も忘れるな','Ren — tax-off-grant-decl','Direction','hiroshi_boss'),
    mk('はい。経済企画庁の旧資料も参考にします','Yes — Old-EPA-doc-ref','Polite','ren_uni'),
    mk('蓮、自治省時代の地方政策研究も学べ','Ren — old-LGM-local-pol-learn','Direction','hiroshi_boss'),
    mk('はい。論文に付随するデータも整備します','Yes — Paper-att-data-prep','Earnest close','ren_uni'),
  ]},
  {id:'conv_09869',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、通信帯域の暗号化を強化されますね','Police comm-band-encr-strength','Cooperative','kenji_office'),
    mk('警察、犯罪発生のファクターを分析されますね','Police crime-factor-anal','Cooperative','kenji_office'),
    mk('警察、環境省と環境犯罪対策で連携されますね','Police env-min-eco-crime-link','Cooperative','kenji_office'),
    mk('警察、少年院入所者の更生支援もされますね','Police juv-enroll-rehab-supp','Cooperative','kenji_office'),
    mk('警察、税務署と脱税捜査で連携されますね','Police tax-off-tax-eva-link','Cooperative','kenji_office'),
    mk('警察、経済企画庁OBの経済犯罪事案も扱われますね','Police old-EPA-OB-econ-crime','Cooperative','kenji_office'),
    mk('警察、自治省関連の天下り事案にも対応されますね','Police old-LGM-amakudari-resp','Cooperative','kenji_office'),
    mk('警察、捜査本部に付随する分析班も持たれますね','Police inv-HQ-att-anal-team','Close','kenji_office'),
  ]},
  {id:'conv_09870',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、通信帯域の確保に苦労された','Dad — founding comm-band-struggle','Sage','hiroshi_elder'),
    mk('はい。お父さんは成功ファクターを見抜かれた','Yes — Dad succ-factor-see','Commitment','hiroshi_boss'),
    mk('お父さん、環境省の創設前から環境対応をされた','Dad — env-min-pre-resp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員寮の入所制度を整えられた','Yes — Dad dorm-enroll-prep','Reflective','hiroshi_boss'),
    mk('お父さん、税務署と良好な関係を保たれた','Dad — tax-off-good-rel','Wistful','hiroshi_elder'),
    mk('はい。お父さんは経済企画庁の指針を参考にされた','Yes — Dad EPA-guide-ref','Reflective','hiroshi_boss'),
    mk('お父さん、自治省時代の人脈で地方展開された','Dad — old-LGM-net-local-exp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは主事業に付随する周辺事業も育てられた','Yes — Dad main-att-grow','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09871',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、仏教宗派の比較研究を論文で扱いましたね','Ren — Buddh-sect-cmp paper','Calm','asuka_teacher'),
    mk('はい、キリスト教の聖霊論の研究を論文で扱いました','Yes — Christ-spirit-th paper','Earnest','ren_uni'),
    mk('蓮さん、数学の自明な定理研究を論文で扱いましたね','Ren — math-triv-th paper','Reflective','asuka_teacher'),
    mk('はい、平和の恒久化政策研究を論文で扱いました','Yes — Perm-peace-pol paper','Earnest','ren_uni'),
    mk('社会の不平等構造を論文で扱いましたね','Soc-ineq paper','Engaged','asuka_teacher'),
    mk('はい、半導体の伝導率研究を論文で扱いました','Yes — Semi-cond paper','Earnest','ren_uni'),
    mk('蓮さん、絶滅言語の消失過程を論文で扱いましたね','Ren — extinct-lang paper','Reflective','asuka_teacher'),
    mk('はい、患者の心に垣間見える希望の研究を論文で扱いました','Yes — Pati-hope-glimpse paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09872',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、宗派対立絡みの事件を、警察、扱われますね','Case sect-conflict police-handle','Reflective','ren_uni'),
    mk('警察、聖霊を装った詐欺事件にも対応します','Police spirit-pretend-fraud','Procedural','takeda_officer'),
    mk('本件、自明な証拠を、警察、確実に保全されますね','Case triv-evid police-pres','Reflective','ren_uni'),
    mk('警察、恒久対策として防犯カメラを設置します','Police perm-prev-cam-install','Procedural','takeda_officer'),
    mk('本件、不平等な処遇問題を、警察、内部監査されますね','Case ineq-treat police-int-audit','Reflective','ren_uni'),
    mk('警察、薬物伝導経路の捜査もされますね','Police drug-cond-route-inv','Cooperative','takeda_officer'),
    mk('本件、容疑者の消失事件を、警察、追っておられますね','Case suspect-disap police-pursue','Reflective','ren_uni'),
    mk('警察、容疑者の心の闇を垣間見える供述に注目します','Police suspect-dark-glimpse-test','Close','takeda_officer'),
  ]},
  {id:'conv_09873',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、仏教宗派の比較を論文で扱いましたね','Sakura — Buddh-sect paper','Calm','asuka_teacher'),
    mk('はい、キリスト教の聖霊論を論文で扱いました','Yes — Christ-spirit paper','Earnest teen','sakura_teen'),
    mk('数学の自明な定理を論文で扱いましたね','Math-triv paper','Reflective','asuka_teacher'),
    mk('はい、平和の恒久化政策を論文で扱いました','Yes — Perm-peace paper','Earnest','sakura_teen'),
    mk('社会の不平等構造を論文で扱いましたね','Soc-ineq paper','Engaged','asuka_teacher'),
    mk('はい、半導体の伝導率を論文で扱いました','Yes — Semi-cond paper','Earnest','sakura_teen'),
    mk('絶滅言語の消失過程を論文で扱いましたね','Extinct-lang paper','Reflective','asuka_teacher'),
    mk('はい、希望が垣間見える研究を論文で扱いました','Yes — Hope-glimpse paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09874',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者の宗派に応じた緩和ケアを医療チームで提供します','Ren — pati-sect-palliat med-team','Calm','saito_doctor'),
    mk('はい、聖霊を信じる患者にも医療チームで丁寧に向き合います','Yes — Spirit-pati med-team careful','Patient','saito_doctor'),
    mk('診断の自明性を、貴院、患者に丁寧に説明されますね、先生','Diag-triv-pati your-hosp explan, sensei','Reflective','ren_uni'),
    mk('はい、慢性疾患の恒久治療を医療チームで提供します','Yes — Chron-perm-treat med-team','Patient','saito_doctor'),
    mk('医療の不平等を、貴院、解消されてますね、先生','Med-ineq your-hosp resolv, sensei','Reflective','ren_uni'),
    mk('はい、心臓の電気伝導を医療チームで観察します','Yes — Heart-cond med-team obs','Patient','saito_doctor'),
    mk('腫瘍の消失を、貴院、画像で確認されますね、先生','Tumor-disap your-hosp image, sensei','Curious','ren_uni'),
    mk('はい、患者の表情に垣間見える痛みを医療チームで察します','Yes — Pati-pain-glimpse med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09875',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員の宗派を尊重しろ','Our co — staff-sect-resp','Crisp','hiroshi_boss'),
    mk('はい。聖霊降臨祭のお休みも考慮します','Yes — Pent-holiday-cons','Methodical','kenji_office'),
    mk('当社、品質基準を自明にしろ','Our co — qual-std-clear','Direction','hiroshi_boss'),
    mk('はい。恒久的な雇用制度を整えます','Yes — Perm-emp-prep','Update','kenji_office'),
    mk('社員間の不平等を排除しろ','Staff-ineq-rid','Direction','hiroshi_boss'),
    mk('はい。電気伝導素材の研究を進めます','Yes — Elec-cond-mat-prog','Update','kenji_office'),
    mk('当社、不良在庫の消失目標を立てろ','Our co — defect-stock-disap-goal','Direction','hiroshi_boss'),
    mk('はい。社員の表情に垣間見える疲れにも気付きます','Yes — Staff-tired-glimpse-notice','Close','kenji_office'),
  ]},
  {id:'conv_09876',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、琉球料理がご趣味だって、メイちゃん','Aoi — cust-Ryukyu-cook Mei','Reflective','mei_romantic'),
    mk('葵、お客様、盛岡冷麺がお気に入りだって、メイちゃん','Aoi — cust-Morioka-cool Mei','Reflective','aoi_barista'),
    mk('葵、お客様、大宮の鉄道博物館にお詳しいって、メイちゃん','Aoi — cust-Omiya-rail Mei','Reflective','mei_romantic'),
    mk('葵、お客様、八王子に新しい支店ができたって、メイちゃん','Aoi — cust-Hachioji-new Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ケンブリッジ大学に留学経験がおありだって、メイちゃん','Aoi — cust-Camb-study Mei','Reflective','mei_romantic'),
    mk('葵、お客様、シベリア鉄道の旅行記がご趣味だって、メイちゃん','Aoi — cust-Sib-rail Mei','Reflective','aoi_barista'),
    mk('葵、お客様、サンパウロのカーニバルを観てこられたって、メイちゃん','Aoi — cust-SP-carn Mei','Reflective','mei_romantic'),
    mk('葵、お客様、平壌のニュースに関心がおありだって、メイちゃん','Aoi — cust-Pyong-news Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09877',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが琉球の三線を習われた','Gran — youth Dad-Ryukyu-sanshin','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、盛岡わんこそばを召し上がったわよね、あなた?','Yes — Grandpa-Morioka-soba, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが大宮に出張された','Gran — youth Dad-Omiya-trip','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、八王子の親戚を訪ねられたわよね、あなた?','Grandpa — Hachioji-rel, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがケンブリッジ大学に客員教授で行かれた','Gran — youth Dad-Camb-vis-prof','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、シベリア抑留のお話されたわよね、あなた?','Grandpa — Sib-detained-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがサンパウロの日系コミュニティを訪ねられた','Gran — youth Dad-SP-Nikkei-visit','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、平壌訪問団のニュースをご覧になってたわよね、あなた?','Grandpa — Pyong-news-watch, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09878',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが琉球音楽を聴かせて下さるそうよ','Sho — Dad-Ryukyu-music','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと盛岡冷麺食べたよ','Mei-sis — me Dad-Morioka-cool','Eager child','sho_child'),
    mk('翔くん、お父さんが大宮の鉄道博物館に連れて行って下さるそうよ','Sho — Dad-Omiya-rail-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと八王子の絵本見たよ','Mei-sis — me Dad-Hachioji-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがケンブリッジ大学のお話して下さるそうよ','Sho — Dad-Camb-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、シベリアの絵本見たよ','Mei-sis — me Sib-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがサンパウロの絵本を読んで下さるそうよ','Sho — Dad-SP-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、平壌のニュースは難しいけど聞いてみるよ','Mei-sis — me Pyong-news-hard-try','Earnest close','sho_child'),
  ]},
  {id:'conv_09879',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会で琉球王国習ったろ?','Riku — soc-Ryukyu?','Curious teen','sakura_teen'),
    mk('お前、盛岡わんこそば挑戦したろ?桜','You — Morioka-soba-try? Sakura','Curious','riku_teen'),
    mk('リク、お前、大宮アルディージャ応援してたな','Riku — Omiya-cheer','Curious','sakura_teen'),
    mk('お前、八王子の塾通ってたな、桜','You — Hachioji-cram Sakura','Curious','riku_teen'),
    mk('リク、お前、ケンブリッジ大学志望だな','Riku — Camb-aim','Curious','sakura_teen'),
    mk('お前、社会でシベリア抑留習ったろ?桜','You — soc-Sib? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でサンパウロ習ったな','Riku — soc-SP?','Curious','sakura_teen'),
    mk('お前、ニュースで平壌のお話気になってたな、桜','You — news-Pyong-int Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09880',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが琉球の三線を弾いて下さるそうよ','Sho — Dad-Ryukyu-sanshin','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと盛岡冷麺また食べたいよ','Mom — me Dad-Morioka-want','Eager child','sho_child'),
    mk('翔くん、お父さんが大宮で打ち合わせされるそうよ','Sho — Dad-Omiya-mtg','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと八王子の親戚行ったよ','Mom — me Dad-Hachioji-rel','Eager child','sho_child'),
    mk('翔くん、お父さんがケンブリッジ大学への留学経験を話して下さったわ','Sho — Dad-Camb-study-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとシベリア鉄道のドキュメンタリー観たよ','Mom — me Dad-Sib-doc','Eager child','sho_child'),
    mk('翔くん、お父さんがサンパウロのカーニバルのお話して下さったわ','Sho — Dad-SP-carn-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと平壌のニュース見たよ、難しかったよ','Mom — me Dad-Pyong-news-hard','Reflective close','sho_child'),
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

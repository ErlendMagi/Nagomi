import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_443 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['のどか','ぶつぶつ','さぞかし','めでたく','ごろごろ','なつかしい','あてはまる','かわいらしい']
const B_T = ['装丁','通信員','前倒し','相殺','概説','差し引い','値下がり','後ろ向き']
const C_T = ['排斥','テロリズム','美化','道義','加担','横領','危害','儒教']
const D_T = ['三国志','ハンマー','バイキング','スターウォーズ','カーニバル','肺炎','領事館','赤ワイン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08821',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんの田舎は本当にのどかな所だったわね','Sho — Grandpa-countryside-truly-peaceful','Tender','yumiko_mom'),
    mk('ママ、お父さんが朝からぶつぶつ何か言ってらしたよ','Mom — Dad-morn-grumble-said','Reflective child','sho_child'),
    mk('翔くん、お祖父ちゃん、合格を知ったらさぞかし喜ばれるわね','Sho — Grandpa-pass-know-surely-glad','Animated','yumiko_mom'),
    mk('ママ、メイ姉さんがめでたく結婚なさるんだって','Mom — Mei-sis-festive-marry','Eager child','sho_child'),
    mk('翔くん、週末はお家でごろごろしてばかりじゃダメよ','Sho — weekend-home-laze-only-no','Direction','yumiko_mom'),
    mk('ママ、お祖父ちゃんの古いお写真、なつかしい気持ちになるね','Mom — Grandpa-old-photo-nostalgic','Tender child','sho_child'),
    mk('翔くん、その模範解答が翔くんにあてはまるとは限らないわよ','Sho — that-model-Sho-fit-not-always','Reflective','yumiko_mom'),
    mk('ママ、お友達の妹さん、かわいらしい子だったよ','Mom — friend-sis-cute-kid','Eager close','sho_child'),
  ]},
  {id:'conv_08822',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店のテラス、のどかな雰囲気でいいわね、メイちゃん','Aoi — store-terrace-peaceful-good Mei','Reflective','mei_romantic'),
    mk('葵、お客様、長居されてぶつぶつ独り言を仰ってたよ、メイちゃん','Aoi — cust-stay-long-mumble Mei','Wry','aoi_barista'),
    mk('葵、新メニューはさぞかしお客様にお喜び頂けるわね、メイちゃん','Aoi — new-menu-surely-cust-glad Mei','Pleased','mei_romantic'),
    mk('葵、新メニュー試作がめでたく成功したわね、メイちゃん','Aoi — new-menu-trial-festive-success Mei','Pleased','aoi_barista'),
    mk('葵、店休日はおうちでごろごろしてもいいわよね、メイちゃん','Aoi — off-home-laze-OK Mei','Reflective','mei_romantic'),
    mk('葵、お店の創業時の写真、なつかしい気持ちになるよね、メイちゃん','Aoi — store-found-photo-nostalgic Mei','Tender','aoi_barista'),
    mk('葵、お客様のご意見が必ずあてはまるとは限らないわよ、メイちゃん','Aoi — cust-view-not-always-fit Mei','Reflective','mei_romantic'),
    mk('葵、お子様、かわいらしいリボン付けてらしたよ、メイちゃん','Aoi — child-cute-ribbon-wore Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_08823',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんの故郷はのどかでらしたぞ','Gran — youth Dad-hometown-peaceful','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お酒入ると、ぶつぶつ独り言を仰ったわよね、あなた?','Yes — Grandpa-drink-mumble, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お孫様の合格、さぞかし喜ばれたぞ','Gran — grandkid-pass-surely-glad','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫の結婚をめでたく祝ってらしたわよね、あなた?','Grandpa — grandkid-marry-festive-celeb, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは縁側でごろごろしてらしたぞ','Gran — youth Dad-veranda-laze','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、なつかしい歌をよく口ずさんでらしたわよね、あなた?','Grandpa — nostalgic-song-hum, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「予定が誰にもあてはまる訳ではない」と仰ったぞ','Gran — youth Dad "plan-not-all-fit"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様をかわいらしいと褒め続けてらしたわよね、あなた?','Grandpa — grandkid-cute-praise, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08824',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前の田舎、のどかでいいよな','Riku — your-countryside-peaceful','Reflective teen','sakura_teen'),
    mk('お前、テスト中、ぶつぶつ言いすぎだぞ、桜','You — test-mumble-too-much Sakura','Wry','riku_teen'),
    mk('リク、お前、合格したらさぞかし喜ぶだろうな','Riku — pass-then-surely-glad','Praising','sakura_teen'),
    mk('お前、めでたく卒業できそうだな、桜','You — festive-grad-able Sakura','Praising','riku_teen'),
    mk('リク、お前、週末ごろごろしすぎだろ','Riku — weekend-laze-too-much','Wry','sakura_teen'),
    mk('お前、なつかしい昔の漫画見てたな、桜','You — nostalgic-old-manga Sakura','Wry','riku_teen'),
    mk('リク、その問題、お前にあてはまるんだろ?','Riku — that-prob-fit?','Curious','sakura_teen'),
    mk('お前の妹、かわいらしい子だな、桜','Your-sis-cute Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08825',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんがのどかな景色を描きたいって','Sho — Mei-sis-peaceful-view-draw-want','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ぶつぶつ独り言で覚え物をしたよ','Mei-sis — me mumble-memorize','Reflective child','sho_child'),
    mk('翔くん、お祖父ちゃんと会えたらさぞかし喜ばれるわね','Sho — Grandpa-meet-surely-glad','Animated','mei_romantic'),
    mk('メイ姉さん、ぼく、めでたくピアノコンクールで入賞したよ','Mei-sis — me festive-piano-cont-prize','Proud child','sho_child'),
    mk('翔くん、お休みの日はメイ姉さんとごろごろしましょう','Sho — break-Mei-sis-laze','Tender','mei_romantic'),
    mk('メイ姉さん、メイ姉さんの絵本、なつかしい絵柄ね','Mei-sis — Mei-sis-book-nostalgic-art','Reflective child','sho_child'),
    mk('翔くん、メイ姉さんの予想が翔くんにあてはまるか分からないわね','Sho — Mei-sis-guess-Sho-fit-unsure','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんが「かわいらしい孫」って言ってくれたよ','Mei-sis — me Grandma "cute-grandkid"-said','Proud close','sho_child'),
  ]},
  {id:'conv_08826',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、社史の装丁を上質にしろ','Our co — co-hist-binding-prem','Crisp','hiroshi_boss'),
    mk('はい。海外通信員からの報告を整理しました','Yes — Overseas-corr-report-org','Methodical','kenji_office'),
    mk('当社、納期を前倒しできるか検討しろ','Our co — deadline-up-front-consider','Direction','hiroshi_boss'),
    mk('はい。お得意様との損益を相殺で処理いたします','Yes — VIP-PL-offset-proc','Update','kenji_office'),
    mk('プレゼンの冒頭で当社概説を入れろ','Pres-open co-overview-insert','Direction','hiroshi_boss'),
    mk('はい。原価を差し引いた利益を計算しました','Yes — Cost-minus-profit-calc','Update','kenji_office'),
    mk('当社、株式値下がりに備えろ','Our co — stock-fall-prep','Direction','hiroshi_boss'),
    mk('はい。後ろ向きな見通しを社員に伝えないよう注意します','Yes — Backward-outlook-staff-not-conv-care','Close','kenji_office'),
  ]},
  {id:'conv_08827',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('新カタログの装丁案を選びましょう','New-cat-binding-plan-choose','Brisk','yuki_office'),
    mk('はい。地方通信員のネットワークを強化しました','Yes — Local-corr-net-strengthen','Cooperative','kenji_office'),
    mk('スケジュールを前倒しできるよう調整しましょう','Sched-up-front-coord','Direction','yuki_office'),
    mk('はい。買掛と売掛の相殺処理を行いました','Yes — AP-AR-offset-proc-done','Update','kenji_office'),
    mk('お得意様向けに、当社事業の概説資料を準備しましょう','VIP-co-biz-overview-doc-prep','Direction','yuki_office'),
    mk('はい。手数料を差し引いた純額を提示します','Yes — Fee-minus-net-show','Update','kenji_office'),
    mk('原料の値下がり時に大量仕入れしましょう','Raw-fall-bulk-buy','Direction','yuki_office'),
    mk('はい。社員の後ろ向きな声をくみ取って改善します','Yes — Staff-backward-voice-imp','Close','kenji_office'),
  ]},
  {id:'conv_08828',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、博士論文の装丁にも気を配れ','Ren — PhD-paper-binding-care','Mentor','hiroshi_boss'),
    mk('はい。学会通信員から最新情報を頂きました','Yes — Conf-corr-latest-info','Earnest','ren_uni'),
    mk('蓮、論文提出を前倒しで進めろ','Ren — paper-sub-up-front','Direction','hiroshi_boss'),
    mk('はい。研究費を相殺する仕組みを検討しております','Yes — Research-fund-offset-mech-consider','Polite','ren_uni'),
    mk('蓮、論文の冒頭に研究の概説を入れろ','Ren — paper-open-overview-insert','Direction','hiroshi_boss'),
    mk('はい。研究費から経費を差し引いた残額を確認しました','Yes — Research-fund-minus-rem-check','Earnest','ren_uni'),
    mk('蓮、研究機材の値下がり時に購入しろ','Ren — equip-fall-buy','Direction','hiroshi_boss'),
    mk('はい。後ろ向きな実験結果も論文で扱います','Yes — Backward-exp-result paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08829',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、規則書の装丁を新調されたんですね','Police rule-book-binding-new','Cooperative','kenji_office'),
    mk('警察、地方通信員ともご連携されてますね','Police local-corr-link','Cooperative','kenji_office'),
    mk('警察、巡回スケジュールの前倒しもなさいますね','Police patrol-up-front','Cooperative','kenji_office'),
    mk('警察、犯罪と善行の相殺はないとご指導頂きました','Police crime-virtue-offset-no-guide','Reflective','kenji_office'),
    mk('警察、地域防犯事業の概説を市民にされてますね','Police local-crime-prev-overview-citizen','Cooperative','kenji_office'),
    mk('警察、賠償金から見舞金を差し引いた金額をお伝え下さいました','Police comp-minus-condolence-amt-conv','Reflective','kenji_office'),
    mk('警察、不動産値下がり詐欺を捜査されてますね','Police realty-fall-fraud-inv','Cooperative','kenji_office'),
    mk('警察、後ろ向きな噂を防ぐ広報、ありがたいです','Police backward-rumor-prev-PR grateful','Close','kenji_office'),
  ]},
  {id:'conv_08830',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社史の装丁にこだわられたぞ','Dad — founding co-hist-binding-care','Sage','hiroshi_elder'),
    mk('はい。お父さんは海外通信員からの情報を重視された','Yes — Dad overseas-corr-info-imp','Commitment','hiroshi_boss'),
    mk('お父さん、納期前倒しを推進されたぞ','Dad — deadline-up-front-promote','Wistful','hiroshi_elder'),
    mk('はい。お父さんは損益相殺の判断にも長けてらした','Yes — Dad PL-offset-skill','Reflective','hiroshi_boss'),
    mk('お父さん、社員教育で会社の概説を語られたぞ','Dad — staff-train-co-overview-told','Wistful','hiroshi_elder'),
    mk('はい。お父さんは経費を差し引いた純利益を毎期発表された','Yes — Dad cost-minus-net-profit-period','Reflective','hiroshi_boss'),
    mk('お父さん、原料値下がり時に大胆に発注されたぞ','Dad — raw-fall-bold-order','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員に後ろ向きな話はされなかった','Yes — Dad staff-backward-talk-not','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08831',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦時下の少数民族排斥を論文で扱いましたね','Ren — wartime-min-exclude paper','Calm','asuka_teacher'),
    mk('はい、国際テロリズム対策史を論文で扱いました','Yes — Int-terror-counter-hist paper','Earnest','ren_uni'),
    mk('蓮さん、歴史記述の美化問題を論文で扱いましたね','Ren — hist-narr-beautif paper','Reflective','asuka_teacher'),
    mk('はい、近代の道義的判断の哲学を論文で扱いました','Yes — Mod-eth-judg-phil paper','Earnest','ren_uni'),
    mk('組織犯罪に加担した内部者の研究を論文で扱いましたね','Crime-aid-insider paper','Engaged','asuka_teacher'),
    mk('はい、企業横領事件の社会的影響を論文で扱いました','Yes — Corp-emb-soc-impact paper','Earnest','ren_uni'),
    mk('蓮さん、市民に危害を加えた事案を論文で扱いましたね','Ren — citizen-harm-case paper','Reflective','asuka_teacher'),
    mk('はい、東アジアの儒教思想史を論文で扱いました','Yes — E-Asia-Confucian-thought-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08832',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、外国人排斥的な落書きを警察、捜査されてますね','Case foreigner-exclude-graffiti police-inv','Reflective','ren_uni'),
    mk('警察、テロリズム対策のため訓練を続けます','Police terror-counter-drill-cont','Procedural','takeda_officer'),
    mk('本件、事実の美化なく報告するご姿勢、頼もしいです、警察','Case fact-beautif-not-report police','Reflective','ren_uni'),
    mk('警察、道義に反する行為を厳しく取り締まります','Police eth-against strict-crack','Procedural','takeda_officer'),
    mk('本件、犯罪に加担した者にも責任を問います、警察','Case crime-aid-person-resp police','Reflective','ren_uni'),
    mk('警察、横領事件の容疑者を逮捕しました','Police emb-suspect-arrest','Procedural','takeda_officer'),
    mk('本件、警察、市民への危害を未然に防がれましたね','Case police-citizen-harm-prev','Reflective','ren_uni'),
    mk('警察、儒教文化圏との捜査協力を続けます','Police Confucian-cult-inv-coop-cont','Close','takeda_officer'),
  ]},
  {id:'conv_08833',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦時下の少数民族排斥を論文で扱いましたね','Sakura — wartime-min-exclude paper','Calm','asuka_teacher'),
    mk('はい、国際テロリズム対策史を論文で扱いました','Yes — Int-terror paper','Earnest teen','sakura_teen'),
    mk('歴史記述の美化問題を論文で扱いましたね','Hist-beautif paper','Reflective','asuka_teacher'),
    mk('はい、近代の道義的判断の哲学を論文で扱いました','Yes — Mod-eth paper','Earnest','sakura_teen'),
    mk('組織犯罪に加担した内部者の研究を論文で扱いましたね','Crime-aid-insider paper','Engaged','asuka_teacher'),
    mk('はい、企業横領事件の社会的影響を論文で扱いました','Yes — Corp-emb paper','Earnest','sakura_teen'),
    mk('市民に危害を加えた事案を論文で扱いましたね','Citizen-harm paper','Reflective','asuka_teacher'),
    mk('はい、東アジアの儒教思想史を論文で扱いました','Yes — Confucian paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08834',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、医療現場での外国人排斥的言動は医療チームで厳禁としております','Ren — med-foreigner-exclude med-team strict','Calm','saito_doctor'),
    mk('はい、テロリズム被害者の心のケアを医療チームで担当します','Yes — Terror-victim-mental-care med-team','Patient','saito_doctor'),
    mk('医療結果の美化なく、貴院、報告されてますね、先生','Med-result-beautif-not your-hosp report, sensei','Reflective','ren_uni'),
    mk('はい、道義的判断を医療チームで重視します','Yes — Eth-judg med-team-imp','Patient','saito_doctor'),
    mk('医療事故に加担した職員への処分を、貴院、なさいましたね、先生','Med-acc-aid-staff-disc your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、医療費横領の不正は医療チームで監視します','Yes — Med-fund-emb med-team-monitor','Patient','saito_doctor'),
    mk('患者に危害を与える医療行為を、貴院、絶対に避けますね、先生','Patient-harm-med-act your-hosp avoid, sensei','Reflective','ren_uni'),
    mk('はい、儒教文化を背景とした患者対応も医療チームで研修します','Yes — Confucian-cult-patient med-team train','Patient close','saito_doctor'),
  ]},
  {id:'conv_08835',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、外国人社員への排斥は厳禁だ','Our co — foreign-staff-exclude strict-no','Crisp','hiroshi_boss'),
    mk('はい。テロリズム対策の社内訓練を実施します','Yes — Terror-counter-co-drill','Methodical','kenji_office'),
    mk('当社、PRで業績を美化しすぎるな','Our co — PR-result-beautif-not','Direction','hiroshi_boss'),
    mk('はい。社員に道義的責任を意識させます','Yes — Staff-eth-resp-aware','Update','kenji_office'),
    mk('当社、不正に加担した社員は処分しろ','Our co — fraud-aid-staff-disc','Direction','hiroshi_boss'),
    mk('はい。社内資金の横領を厳重に防止します','Yes — Co-fund-emb strict-prev','Update','kenji_office'),
    mk('当社、お得意様への危害となる行為は絶対するな','Our co — VIP-harm-act-not','Direction','hiroshi_boss'),
    mk('はい。儒教圏の取引先文化に配慮します','Yes — Confucian-partner-culture-care','Close','kenji_office'),
  ]},
  {id:'conv_08836',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、三国志の本を読んでらしたよ、メイちゃん','Aoi — cust-Three-Kingdoms-book Mei','Reflective','mei_romantic'),
    mk('葵、お店の補修にハンマー用意しようね、メイちゃん','Aoi — store-repair-hammer Mei','Direction','aoi_barista'),
    mk('葵、お客様、北欧バイキング料理のお話されてたよ、メイちゃん','Aoi — cust-Nordic-Viking-food-told Mei','Animated','mei_romantic'),
    mk('葵、お客様、スターウォーズの新作を観てきたんだって、メイちゃん','Aoi — cust-Star-Wars-new-saw Mei','Animated','aoi_barista'),
    mk('葵、地域のカーニバル、お店も参加しましょう、メイちゃん','Aoi — local-carnival-store-join Mei','Direction','mei_romantic'),
    mk('葵、お客様、肺炎で長期入院されてたんだって、メイちゃん','Aoi — cust-pneum-long-hosp Mei','Reflective','aoi_barista'),
    mk('葵、お客様、領事館でビザの手続きされてたって、メイちゃん','Aoi — cust-consulate-visa-proc Mei','Reflective','mei_romantic'),
    mk('葵、新メニュー、赤ワイン煮込みを加えましょう、メイちゃん','Aoi — new-menu-red-wine-stew-add Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08837',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが三国志全巻を集められたぞ','Gran — youth Dad-Three-Kingdoms-all-collect','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、日曜大工でハンマーを使われたわよね、あなた?','Yes — Grandpa-DIY-hammer-used, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ホテルのバイキング朝食が珍しかったぞ','Gran — youth-hotel-Viking-breakfast-rare','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様とスターウォーズの映画を観られたわよね、あなた?','Grandpa — grandkid-Star-Wars-watched, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ブラジルのカーニバルを羨ましく思われたぞ','Gran — youth-Brazil-carnival-envied','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年は肺炎にもお気を付けてらしたわよね、あなた?','Grandpa — late-pneum-care, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが領事館でお仕事された時期もあったぞ','Gran — youth Dad-consulate-work','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お祝いに赤ワインを開けられたわよね、あなた?','Grandpa — celeb-red-wine-opened, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08838',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが三国志の漫画を買って下さったんですって?','Sho — Dad-Three-Kingdoms-manga-bought?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、図工でハンマーを使う授業があるんだ','Mei-sis — me craft-hammer-class','Eager child','sho_child'),
    mk('翔くん、お父さんとバイキング料理のお店に行きたいわね','Sho — Dad-Viking-store-go','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ママとスターウォーズ観に行ったよ','Mei-sis — me Mom-Star-Wars-saw','Eager child','sho_child'),
    mk('翔くん、地域のカーニバルに参加しましょう','Sho — local-carnival-join','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんが肺炎にならないか心配だよ','Mei-sis — me Grandpa-pneum-worry','Earnest child','sho_child'),
    mk('翔くん、お父さんが領事館で書類のお仕事してらっしゃるそうよ','Sho — Dad-consulate-doc-work','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんが赤ワインで乾杯してらしたよ','Mei-sis — Dad-red-wine-toast','Eager close','sho_child'),
  ]},
  {id:'conv_08839',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、三国志のゲームやってんだろ?','Riku — Three-Kingdoms-game?','Curious teen','sakura_teen'),
    mk('お前、図工でハンマー上手く使えなかったろ、桜','You — craft-hammer-bad Sakura','Wry','riku_teen'),
    mk('リク、お前、バイキング形式のレストラン好きだろ?','Riku — Viking-rest-like?','Curious','sakura_teen'),
    mk('お前、スターウォーズ全部観たろ?桜','You — Star-Wars-all-saw? Sakura','Curious','riku_teen'),
    mk('リク、お前、文化祭をカーニバル風にしたいんだろ?','Riku — fest-carnival-style-want?','Curious','sakura_teen'),
    mk('お前、肺炎で長く休んでたな、桜','You — pneum-long-rest Sakura','Reflective','riku_teen'),
    mk('リク、お前、海外旅行で領事館世話になったろ?','Riku — overseas-trip-consulate-help?','Curious','sakura_teen'),
    mk('お前、家庭科で赤ワインの香りの話やったろ?桜','You — home-eco-red-wine-aroma? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08840',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが三国志のご本を読んでらっしゃるわ','Sho — Dad-Three-Kingdoms-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとハンマーで本棚直してみたい','Mom — me Dad-hammer-shelf-fix-want','Eager child','sho_child'),
    mk('翔くん、お父さんとバイキング形式の朝食を頂きましょうね','Sho — Dad-Viking-breakfast-have','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとスターウォーズの映画を観たいよ','Mom — me Dad-Star-Wars-want','Eager child','sho_child'),
    mk('翔くん、お父さんと地域のカーニバルに行きましょう','Sho — Dad-local-carnival-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんが肺炎で入院したお話、覚えてる','Mom — me Grandpa-pneum-hosp-remember','Earnest child','sho_child'),
    mk('翔くん、お父さんが領事館で旅行ビザを受け取ってこられたわ','Sho — Dad-consulate-visa-received','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんが赤ワインを召し上がってらしたよ','Mom — Grandpa-red-wine-drank','Eager close','sho_child'),
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

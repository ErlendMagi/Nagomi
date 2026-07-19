import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_482 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ありふれ','眠ら','怯え','おろそか','膨れ','太り','はいり','たたい']
const B_T = ['フルタイム','所以','独禁法','両氏','所収','インタラクティブ','送受信','キャッチフレーズ']
const C_T = ['部首','肉食','賢者','胃腸','貧富','剰余','分娩','既知']
const D_T = ['イラストレーター','セレモニー','グラビア','コミケ','ゴシック','サイクリング','猪木','サンタクロース']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09601',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、ありふれた毎日がお父さんと一緒で幸せね','Sho — ordinary-Dad-happy','Tender','yumiko_mom'),
    mk('ママ、お父さんが眠らずに看病して下さったよ','Mom — Dad-not-sleep-nurse','Tender child','sho_child'),
    mk('翔くん、雷で怯えちゃダメよ、お父さんが守って下さるわ','Sho — thunder-fear-no-Dad-protect','Direction','yumiko_mom'),
    mk('ママ、ぼく、宿題をおろそかにしないって誓うよ','Mom — me homework-neglect-not-vow','Earnest child','sho_child'),
    mk('翔くん、お餅がお腹で膨れて苦しそうね','Sho — mochi-tummy-swell-pain','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんがちょっと太り始めたって心配してたよ','Mom — me Dad-fat-start-worry','Wry child','sho_child'),
    mk('翔くん、お部屋にはいりたい時はノックしましょうね','Sho — room-enter-knock','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんに優しく頭をたたいてもらったよ','Mom — me Dad-soft-head-pat','Eager close','sho_child'),
  ]},
  {id:'conv_09602',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、ありふれた挨拶でもお客様の心を温めるね、メイちゃん','Aoi — ordinary-greet-cust-warm Mei','Tender','mei_romantic'),
    mk('葵、お客様、眠らずに仕事を片付けたって、メイちゃん','Aoi — cust-not-sleep-work Mei','Reflective','aoi_barista'),
    mk('葵、お客様、雷雨で怯えてらしたよ、メイちゃん','Aoi — cust-storm-fear Mei','Reflective','mei_romantic'),
    mk('葵、お客様への気遣いをおろそかにしないようにしようね、メイちゃん','Aoi — cust-care-neglect-not Mei','Direction','aoi_barista'),
    mk('葵、お客様、ケーキでお腹が膨れたって、メイちゃん','Aoi — cust-cake-tummy-swell Mei','Reflective','mei_romantic'),
    mk('葵、お客様、最近少し太り気味だって気にされてたよ、メイちゃん','Aoi — cust-recently-fat-worry Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お店にはいりたそうにドアを覗かれてたよ、メイちゃん','Aoi — cust-store-enter-peek Mei','Reflective','mei_romantic'),
    mk('葵、お客様、リズムに合わせて軽くテーブルをたたいてたよ、メイちゃん','Aoi — cust-rhyth-tbl-tap Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09603',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんとのありふれた日常が宝だった','Gran — youth Dad-ordinary-treas','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、徹夜で眠らずに仕事された日もあったわよね、あなた?','Yes — Grandpa-all-night-not-sleep, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが空襲に怯えながら家族を守られた','Gran — youth Dad-bomb-fear-fam-prot','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、家族との時間をおろそかにされなかったわよね、あなた?','Grandpa — fam-time-neglect-no, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが餅でお腹を膨れさせて笑ってた','Gran — youth Dad-mochi-tummy-swell-laugh','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年は少し太り気味だったわよね、あなた?','Grandpa — late-fat-tend, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが古い家にはいり感慨に浸られた','Gran — youth Dad-old-home-enter-deep','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、太鼓を優しくたたいて下さったわよね、あなた?','Grandpa — drum-soft-pat, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09604',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前の日記、ありふれた話ばっかだな','Riku — diary-ordinary-only','Wry teen','sakura_teen'),
    mk('お前、徹夜で眠らずゲームしてたな、桜','You — all-night-not-sleep-game Sakura','Wry','riku_teen'),
    mk('リク、お前、お化け屋敷で怯えてたな','Riku — ghost-house-fear','Wry','sakura_teen'),
    mk('お前、勉強おろそかにすんなよ、桜','You — study-neglect-no Sakura','Direction','riku_teen'),
    mk('リク、お前、お腹膨れてる、食べ過ぎだろ','Riku — tummy-swell-too-much','Wry','sakura_teen'),
    mk('お前、夏休みで太り始めたな、桜','You — summer-fat-start Sakura','Wry','riku_teen'),
    mk('リク、教室にはいり前に手洗いしろよ','Riku — class-enter-wash','Direction','sakura_teen'),
    mk('お前、ボールをたたいてばっかいたな、桜','You — ball-tap-only Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09605',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんはありふれた日常が大切と思うのよ','Sho — Mei-sis-ordinary-impt','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、夜中眠らずにお父さんを待ってたよ','Mei-sis — me midnight-not-sleep-Dad-wait','Eager child','sho_child'),
    mk('翔くん、嵐に怯えなくて大丈夫よ','Sho — storm-fear-not','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きをおろそかにしないよ','Mei-sis — me art-neglect-no','Earnest child','sho_child'),
    mk('翔くん、おもちゃの風船を膨れさせるのお手伝いするわ','Sho — balloon-swell-help','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが少し太り気味かもって心配だよ','Mei-sis — me Dad-fat-worry','Wry child','sho_child'),
    mk('翔くん、お父さんがお家にはいりやすいよう道を空けようね','Sho — Dad-home-enter-easy-way','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと太鼓をたたいて遊んだよ','Mei-sis — me Dad-drum-tap-play','Eager close','sho_child'),
  ]},
  {id:'conv_09606',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、フルタイム社員の働き方改革を進めろ','Our co — full-time-work-ref','Crisp','hiroshi_boss'),
    mk('はい。我が社が信頼される所以を見つめ直します','Yes — Our co-trust-reason-rev','Methodical','kenji_office'),
    mk('当社、独禁法違反のリスクを徹底回避しろ','Our co — antitrust-risk-avoid','Direction','hiroshi_boss'),
    mk('はい。新旧社長両氏の対談企画を準備します','Yes — Old-new-pres-both-talk-prep','Update','kenji_office'),
    mk('社史所収の論考を改めて読め','Co-hist-include-essay-read','Direction','hiroshi_boss'),
    mk('はい。インタラクティブなウェブサイトに改修します','Yes — Interact-web-renew','Update','kenji_office'),
    mk('当社、社内文書の送受信を電子化しろ','Our co — co-doc-trans-recv-dig','Direction','hiroshi_boss'),
    mk('はい。新商品のキャッチフレーズを公募します','Yes — New-prod-catch-recru','Close','kenji_office'),
  ]},
  {id:'conv_09607',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('フルタイム勤務希望者を確認しましょう','Full-time-app-check','Brisk','yuki_office'),
    mk('はい。我が社が信頼される所以を整理します','Yes — Our-co-trust-reason-org','Cooperative','kenji_office'),
    mk('独禁法の最新動向を社内で共有しましょう','Antitrust-trend-co-share','Direction','yuki_office'),
    mk('はい。法務両氏に確認を取ります','Yes — Leg-both-check','Update','kenji_office'),
    mk('論文所収の業界誌を社員に推奨しましょう','Paper-incl-mag-staff-rec','Direction','yuki_office'),
    mk('はい。研修をインタラクティブに変更します','Yes — Train-interact-change','Update','kenji_office'),
    mk('社外との送受信ルールを整備しましょう','Ext-trans-recv-rule-prep','Direction','yuki_office'),
    mk('はい。新キャンペーンのキャッチフレーズ案を集めます','Yes — New-camp-catch-coll','Close','kenji_office'),
  ]},
  {id:'conv_09608',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、フルタイム雇用前に経験を積め','Ren — full-time-pre-exp','Mentor','hiroshi_boss'),
    mk('はい。研究室が評価される所以を見つめ直します','Yes — Lab-eval-reason-rev','Earnest','ren_uni'),
    mk('蓮、研究契約も独禁法を意識しろ','Ren — research-contract-antitrust','Direction','hiroshi_boss'),
    mk('はい。先輩研究員両氏に相談しております','Yes — Senior-both-cons','Earnest','ren_uni'),
    mk('蓮、論文所収の学会誌を網羅しろ','Ren — paper-incl-conf-mag-cover','Direction','hiroshi_boss'),
    mk('はい。インタラクティブな実験装置を取り入れます','Yes — Interact-exp-eq-intro','Polite','ren_uni'),
    mk('蓮、研究データの送受信プロトコルを守れ','Ren — research-data-trans-recv-prot','Direction','hiroshi_boss'),
    mk('はい。論文の魅力的なキャッチフレーズを考えます','Yes — Paper-attract-catch-cons','Earnest close','ren_uni'),
  ]},
  {id:'conv_09609',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、フルタイム勤務の警官の負担を軽減されますね','Police full-time-burden-redu','Cooperative','kenji_office'),
    mk('警察、市民に信頼される所以を磨かれますね','Police citi-trust-reason-pol','Cooperative','kenji_office'),
    mk('警察、独禁法違反の捜査も担当されますね','Police antitrust-inv','Cooperative','kenji_office'),
    mk('警察、容疑者両氏を別々に聴取されますね','Police suspect-both-sep-test','Cooperative','kenji_office'),
    mk('警察、判例所収の資料を活用されますね','Police prec-incl-doc-use','Cooperative','kenji_office'),
    mk('警察、市民向けインタラクティブ広報を展開されますね','Police citi-interact-PR','Cooperative','kenji_office'),
    mk('警察、無線送受信の暗号化を強化されますね','Police wire-trans-recv-encr-strength','Cooperative','kenji_office'),
    mk('警察、防犯のキャッチフレーズを刷新されますね','Police prev-catch-renew','Close','kenji_office'),
  ]},
  {id:'conv_09610',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社員をフルタイムで雇うことを大切にされた','Dad — founding staff-full-time-imp','Sage','hiroshi_elder'),
    mk('はい。お父さんは会社が愛される所以を語られた','Yes — Dad co-love-reason-told','Commitment','hiroshi_boss'),
    mk('お父さん、独禁法を順守する姿勢を貫かれた','Dad — antitrust-comp-attitude','Wistful','hiroshi_elder'),
    mk('はい。お父さんは創業者両氏の対談を企画された','Yes — Dad found-both-talk-plan','Reflective','hiroshi_boss'),
    mk('お父さん、社史所収の記事を全て監修された','Dad — co-hist-incl-art-supv','Wistful','hiroshi_elder'),
    mk('はい。お父さんはインタラクティブな商談を好まれた','Yes — Dad interact-biz-pref','Reflective','hiroshi_boss'),
    mk('お父さん、海外との送受信も自ら確認された','Dad — overseas-trans-recv-self','Wistful','hiroshi_elder'),
    mk('はい。お父さんが社のキャッチフレーズを考えられた','Yes — Dad co-catch-cons','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09611',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、漢字の部首分類の研究を論文で扱いましたね','Ren — kanji-rad-class paper','Calm','asuka_teacher'),
    mk('はい、肉食動物の生態学を論文で扱いました','Yes — Carnivore-eco paper','Earnest','ren_uni'),
    mk('蓮さん、古代インドの賢者像を論文で扱いましたね','Ren — anc-Ind-sage paper','Reflective','asuka_teacher'),
    mk('はい、ストレス性胃腸障害の研究を論文で扱いました','Yes — Stress-stom paper','Earnest','ren_uni'),
    mk('社会の貧富の差を論文で扱いましたね','Soc-rich-poor paper','Engaged','asuka_teacher'),
    mk('はい、整数論の剰余類の研究を論文で扱いました','Yes — Num-th-mod paper','Earnest','ren_uni'),
    mk('蓮さん、無痛分娩の歴史を論文で扱いましたね','Ren — pain-free-birth-hist paper','Reflective','asuka_teacher'),
    mk('はい、既知のデータと新発見の比較を論文で扱いました','Yes — Known-new-cmp paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09612',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者の書字における部首の特徴を、警察、調べられてますね','Case suspect-rad-feat police-anal','Reflective','ren_uni'),
    mk('警察、肉食加工業者への監督も担当されますね','Police carnivore-proc-supv','Cooperative','takeda_officer'),
    mk('本件、賢者を装った詐欺事件を、警察、扱われてますね','Case sage-pretend-fraud police-handle','Reflective','ren_uni'),
    mk('警察、被害者の胃腸症状の鑑定を依頼します','Police vict-stom-symp-forensic','Procedural','takeda_officer'),
    mk('本件、貧富格差を狙う詐欺事件を、警察、捜査されますね','Case rich-poor-fraud police-inv','Reflective','ren_uni'),
    mk('警察、剰余金の不正流用事案にも対応します','Police surplus-misuse-resp','Procedural','takeda_officer'),
    mk('本件、分娩施設での盗難事件を、警察、扱われますね','Case birth-fac-theft police-handle','Reflective','ren_uni'),
    mk('警察、既知の手口の犯人を追います','Police known-mod-crim-pursue','Close','takeda_officer'),
  ]},
  {id:'conv_09613',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、漢字の部首分類を論文で扱いましたね','Sakura — kanji-rad paper','Calm','asuka_teacher'),
    mk('はい、肉食動物の生態学を論文で扱いました','Yes — Carnivore-eco paper','Earnest teen','sakura_teen'),
    mk('古代インドの賢者像を論文で扱いましたね','Anc-Ind-sage paper','Reflective','asuka_teacher'),
    mk('はい、ストレス性胃腸障害を論文で扱いました','Yes — Stress-stom paper','Earnest','sakura_teen'),
    mk('社会の貧富格差を論文で扱いましたね','Soc-rich-poor paper','Engaged','asuka_teacher'),
    mk('はい、整数論の剰余類を論文で扱いました','Yes — Num-mod paper','Earnest','sakura_teen'),
    mk('無痛分娩の歴史を論文で扱いましたね','Pain-free-birth paper','Reflective','asuka_teacher'),
    mk('はい、既知のデータと新発見の比較を論文で扱いました','Yes — Known-new paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09614',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、漢方の部首的分類を医療チームで参考にします','Ren — kampo-rad-cat med-team ref','Calm','saito_doctor'),
    mk('肉食偏重の食生活を、貴院、指導されますね、先生','Carnivore-bias-diet your-hosp guide, sensei','Reflective','ren_uni'),
    mk('はい、医療現場で賢者になる事より謙虚さを医療チームで重視します','Yes — Med-sage-vs-humble med-team imp','Patient','saito_doctor'),
    mk('胃腸疾患の患者を、貴院、丁寧に診られますね、先生','Stom-pati your-hosp careful, sensei','Reflective','ren_uni'),
    mk('はい、貧富に関わらず平等な医療を医療チームで提供します','Yes — Rich-poor-equal-med med-team','Patient','saito_doctor'),
    mk('剰余在庫の医薬品を、貴院、適切に管理されてますね、先生','Surplus-med your-hosp mgmt, sensei','Curious','ren_uni'),
    mk('はい、無痛分娩を医療チームで安全に提供します','Yes — Pain-free-birth med-team safe','Patient','saito_doctor'),
    mk('既知の合併症を、貴院、患者に説明されますね、先生','Known-comp your-hosp pati-explan, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_09615',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、書類管理を部首順で整理しろ','Our co — doc-mgmt-rad-order','Crisp','hiroshi_boss'),
    mk('はい。社員食堂の肉食メニューを見直します','Yes — Staff-cant-carnivore-rev','Methodical','kenji_office'),
    mk('当社、業界の賢者から学べ','Our co — industry-sage-learn','Direction','hiroshi_boss'),
    mk('はい。社員の胃腸ケアを健康施策に加えます','Yes — Staff-stom-care-health-add','Update','kenji_office'),
    mk('社員の貧富に応じた福利厚生にはするな','Staff-rich-poor-welf-no-bias','Direction','hiroshi_boss'),
    mk('はい。剰余金の活用を再検討します','Yes — Surplus-use-rev','Update','kenji_office'),
    mk('当社、社員の分娩休暇を充実させろ','Our co — staff-birth-leave-rich','Direction','hiroshi_boss'),
    mk('はい。既知のリスクは事前に共有します','Yes — Known-risk-pre-share','Close','kenji_office'),
  ]},
  {id:'conv_09616',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、有名なイラストレーターさんなんだって、メイちゃん','Aoi — cust-illust-fam Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の結婚セレモニーに出席されたって、メイちゃん','Aoi — cust-fri-wed-cere Mei','Reflective','aoi_barista'),
    mk('葵、お客様、グラビアアイドルの写真集を集めてらっしゃるって、メイちゃん','Aoi — cust-grav-coll Mei','Reflective','mei_romantic'),
    mk('葵、お客様、コミケで同人誌を販売されたって、メイちゃん','Aoi — cust-Comike-doujin Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ゴシック様式の建築がお好きだって、メイちゃん','Aoi — cust-Goth-arch Mei','Reflective','mei_romantic'),
    mk('葵、お客様、週末にサイクリングされるって、メイちゃん','Aoi — cust-wkd-cycle Mei','Reflective','aoi_barista'),
    mk('葵、お客様、猪木さんのプロレスがお好きだって、メイちゃん','Aoi — cust-Inoki-wrest Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お子様のためにサンタクロースを演じられたって、メイちゃん','Aoi — cust-kid-Santa-play Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_09617',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがイラストレーターの友人をお持ちだった','Gran — youth Dad-illust-fri','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、退職セレモニーで挨拶されたわよね、あなた?','Yes — Grandpa-retire-cere-greet, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが雑誌のグラビアを集めてた','Gran — youth Dad-mag-grav-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様のコミケ参加を見守られたわよね、あなた?','Grandpa — grandkid-Comike-watch, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがゴシック建築の本をご愛読された','Gran — youth Dad-Goth-arch-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、休日のサイクリングを楽しまれたわよね、あなた?','Grandpa — holiday-cycle-fun, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが猪木の試合を観に行かれた','Gran — youth Dad-Inoki-match','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、クリスマスにサンタクロースを演じられたわよね、あなた?','Grandpa — Xmas-Santa-play, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09618',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんはイラストレーターのお仕事に興味あるのよ','Sho — Mei-sis-illust-int','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの会社のセレモニーに行ったよ','Mei-sis — me Dad-co-cere','Eager child','sho_child'),
    mk('翔くん、お父さんがグラビア雑誌を捨てたって仰ってたわ','Sho — Dad-grav-mag-discard','Wry','mei_romantic'),
    mk('メイ姉さん、ぼく、お兄ちゃんとコミケ行きたいよ','Mei-sis — me bro-Comike-want','Eager child','sho_child'),
    mk('翔くん、お父さんがゴシック建築の本を見せて下さるそうよ','Sho — Dad-Goth-arch-book-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとサイクリングしたよ','Mei-sis — me Dad-cycle','Eager child','sho_child'),
    mk('翔くん、お父さんが猪木のお話して下さったわ','Sho — Dad-Inoki-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがサンタクロースに化けてくれたよ','Mei-sis — me Dad-Santa-disguise','Eager close','sho_child'),
  ]},
  {id:'conv_09619',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、イラストレーターになりたいって言ってたな','Riku — illust-want-said','Curious teen','sakura_teen'),
    mk('お前、卒業セレモニーで泣いてたな、桜','You — grad-cere-cry Sakura','Wry','riku_teen'),
    mk('リク、お前、グラビア雑誌こっそり読んでたな','Riku — grav-mag-secret','Wry','sakura_teen'),
    mk('お前、コミケ行ってきたな、桜','You — Comike-went Sakura','Curious','riku_teen'),
    mk('リク、お前、ゴシック建築の本買ってたな','Riku — Goth-arch-book-buy','Curious','sakura_teen'),
    mk('お前、週末サイクリングしてたな、桜','You — wkd-cycle Sakura','Curious','riku_teen'),
    mk('リク、お前、猪木の名言マネしてたな','Riku — Inoki-quote-mimic','Wry','sakura_teen'),
    mk('お前、サンタクロース信じてた頃のお話してたな、桜','You — Santa-belief-told Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09620',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがイラストレーターのご友人をお持ちなのよ','Sho — Dad-illust-fri','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんの会社のセレモニーに参加したよ','Mom — me Dad-co-cere-join','Eager child','sho_child'),
    mk('翔くん、お父さんが昔のグラビア雑誌を整理されたわ','Sho — Dad-old-grav-mag-org','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんがコミケに連れて行って下さるって','Mom — me Dad-Comike-take','Eager child','sho_child'),
    mk('翔くん、お父さんがゴシック建築のお話して下さったわ','Sho — Dad-Goth-arch-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとサイクリング楽しかったよ','Mom — me Dad-cycle-fun','Eager child','sho_child'),
    mk('翔くん、お父さんが猪木の伝記をお買いになったわ','Sho — Dad-Inoki-bio-buy','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんがサンタクロースの絵本読んで下さったよ','Mom — me Dad-Santa-pic-read','Eager close','sho_child'),
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

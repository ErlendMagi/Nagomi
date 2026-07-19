import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_479 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['操る','根元','下回る','追いかける','雇わ','不変','定住','外れる']
const B_T = ['精通','バネ','急上昇','弁理','全編','特段','ジャッジ','発進']
const C_T = ['野蛮','因縁','壮絶','和声','手話','威嚇','平常','直視']
const D_T = ['カーソル','落合','錬金術','色気','ポルシェ','初恋','川柳','バッシング']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09541',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがラジコンを上手に操るのよ','Sho — Dad-RC-skill-operate','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと木の根元に虫を見つけたよ','Mom — me Dad-tree-root-bug','Eager child','sho_child'),
    mk('翔くん、お父さんがテストの目標を下回ると残念だって','Sho — Dad-test-goal-below-sad','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんを追いかけるの好きだよ','Mom — me Dad-chase-like','Eager child','sho_child'),
    mk('翔くん、お父さんが新しい先生を雇われたって','Sho — Dad-new-tch-hire','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんへの愛は不変だよ','Mom — me Dad-love-unchang','Tender child','sho_child'),
    mk('翔くん、お祖父ちゃんが田舎に定住されたわ','Sho — Grandpa-country-settle','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ボタンが外れる前に直したいよ','Mom — me button-fall-fix-want','Eager close','sho_child'),
  ]},
  {id:'conv_09542',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ドローンを操る仕事だって、メイちゃん','Aoi — cust-drone-operate-job Mei','Reflective','mei_romantic'),
    mk('葵、お店の木の根元に苔が生えてるね、メイちゃん','Aoi — store-tree-root-moss Mei','Reflective','aoi_barista'),
    mk('葵、売上目標を下回らないよう頑張ろうね、メイちゃん','Aoi — sales-goal-below-not Mei','Direction','mei_romantic'),
    mk('葵、お客様、忘れ物を追いかける形で取りに戻られたよ、メイちゃん','Aoi — cust-forgot-chase-back Mei','Reflective','aoi_barista'),
    mk('葵、新スタッフを雇われたお話聞いたよ、メイちゃん','Aoi — new-staff-hire-heard Mei','Reflective','mei_romantic'),
    mk('葵、お客様への笑顔は不変でいようね、メイちゃん','Aoi — cust-smile-unchang Mei','Direction','aoi_barista'),
    mk('葵、お客様、海外から日本に定住されたんだって、メイちゃん','Aoi — cust-overseas-JP-settle Mei','Reflective','mei_romantic'),
    mk('葵、お客様のスケジュールが外れる事もあるね、メイちゃん','Aoi — cust-sched-off-times Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09543',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが船を上手に操る方だった','Gran — youth Dad-boat-skill-operate','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お庭の木の根元に水をやってらしたわよね、あなた?','Yes — Grandpa-garden-tree-root-water, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは目標を下回る事を恥とされた','Gran — youth Dad-goal-below-shame','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様を追いかけるのが楽しみだったわよね、あなた?','Grandpa — grandkid-chase-fun, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが信頼できる人を雇われた','Gran — youth Dad-trust-hire','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご家族への愛情が不変だったわよね、あなた?','Grandpa — fam-love-unchang, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは故郷に定住する事を選ばれた','Gran — youth Dad-hometown-settle','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、入れ歯が外れる時のお話、可笑しかったわよね、あなた?','Grandpa — false-tooth-off-funny, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09544',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ゲームのキャラを操るの上手いな','Riku — game-chara-operate-good','Praising','sakura_teen'),
    mk('お前、木の根元で休んでたな、桜','You — tree-root-rest Sakura','Curious','riku_teen'),
    mk('リク、お前、平均点を下回るのが心配だな','Riku — avg-below-worry','Wry','sakura_teen'),
    mk('お前、犬を追いかけるの好きだろ?桜','You — dog-chase-like? Sakura','Wry','riku_teen'),
    mk('リク、お前、バイトで雇われたな','Riku — job-hired','Curious','sakura_teen'),
    mk('お前、友達への気持ち、不変だな、桜','You — friend-feel-unchang Sakura','Praising','riku_teen'),
    mk('リク、お前、ここに定住する気だろ?','Riku — here-settle?','Wry','sakura_teen'),
    mk('お前、自転車のチェーンが外れる事よくあるな、桜','You — bike-chain-off-often Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09545',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがラジコンを操るのを教えて下さるそうよ','Sho — Dad-RC-operate-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと木の根元に水あげたよ','Mei-sis — me Dad-tree-root-water','Eager child','sho_child'),
    mk('翔くん、テストの点を下回らないよう頑張りましょうね','Sho — test-below-not-effort','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんを追いかける鬼ごっこ好き','Mei-sis — me Dad-chase-tag-like','Eager child','sho_child'),
    mk('翔くん、お父さんが新しい家庭教師を雇われたそうよ','Sho — Dad-new-tutor-hire','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんを好きな気持ちは不変だよ','Mei-sis — me Mei-sis-love-unchang','Tender child','sho_child'),
    mk('翔くん、お祖父ちゃんが田舎に定住されたわ','Sho — Grandpa-country-settle','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、靴ひもが外れる前に結びたいよ','Mei-sis — me shoe-string-off-tie-want','Eager close','sho_child'),
  ]},
  {id:'conv_09546',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、海外市場に精通した社員を増やせ','Our co — overseas-mkt-expert-up','Crisp','hiroshi_boss'),
    mk('はい。バネのある若手も登用します','Yes — Spring-young-promote','Methodical','kenji_office'),
    mk('当社、急上昇した競合の研究をしろ','Our co — sharp-up-comp-research','Direction','hiroshi_boss'),
    mk('はい。特許出願に弁理士を起用します','Yes — Patent-pat-att-emp','Update','kenji_office'),
    mk('社史の全編を編纂しろ','Co-hist-full-comp','Direction','hiroshi_boss'),
    mk('はい。特段の事情がある社員は配慮します','Yes — Spec-circum-staff-cons','Update','kenji_office'),
    mk('当社、人事のジャッジを公平にしろ','Our co — HR-judge-fair','Direction','hiroshi_boss'),
    mk('はい。新事業の発進を準備します','Yes — New-biz-launch-prep','Close','kenji_office'),
  ]},
  {id:'conv_09547',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('業界に精通した方を採用しましょう','Industry-expert-hire','Brisk','yuki_office'),
    mk('はい。バネのある人材を歓迎します','Yes — Spring-talent-welc','Cooperative','kenji_office'),
    mk('株価急上昇の要因を分析しましょう','Stock-sharp-up-anal','Direction','yuki_office'),
    mk('はい。弁理士に商標相談を依頼します','Yes — Pat-att-tm-cons','Update','kenji_office'),
    mk('提案書の全編を見直しましょう','Prop-full-rev','Direction','yuki_office'),
    mk('はい。特段の予算配分を検討します','Yes — Spec-budget-alloc-cons','Update','kenji_office'),
    mk('プロジェクトのジャッジを公平にしましょう','Proj-judge-fair','Direction','yuki_office'),
    mk('はい。新キャンペーンの発進日を決めます','Yes — New-camp-launch-date','Close','kenji_office'),
  ]},
  {id:'conv_09548',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、専門分野に精通しろ','Ren — field-expert','Mentor','hiroshi_boss'),
    mk('はい。研究者として精神のバネを保ちます','Yes — Research-mental-spring','Earnest','ren_uni'),
    mk('蓮、引用数急上昇の論文を学べ','Ren — cite-sharp-up-paper','Direction','hiroshi_boss'),
    mk('はい。研究成果の弁理士相談も検討します','Yes — Research-pat-att-cons','Earnest','ren_uni'),
    mk('蓮、論文の全編を精査しろ','Ren — paper-full-anal','Direction','hiroshi_boss'),
    mk('はい。特段に重要な実験は再現します','Yes — Spec-imp-exp-repro','Polite','ren_uni'),
    mk('蓮、データのジャッジは公平にしろ','Ren — data-judge-fair','Direction','hiroshi_boss'),
    mk('はい。研究プロジェクトの発進を準備します','Yes — Research-proj-launch-prep','Earnest close','ren_uni'),
  ]},
  {id:'conv_09549',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、犯罪手口に精通された捜査員もおられますね','Police crime-expert-inv','Cooperative','kenji_office'),
    mk('警察、若手警官はバネを持ってかれますね','Police young-spring','Cooperative','kenji_office'),
    mk('警察、犯罪件数の急上昇の対策を立てられますね','Police crime-sharp-up-counter','Cooperative','kenji_office'),
    mk('警察、知的財産関連の弁理士とも連携されますね','Police IP-pat-att-link','Cooperative','kenji_office'),
    mk('警察、報告書の全編を確認されますね','Police rep-full-check','Cooperative','kenji_office'),
    mk('警察、特段の警備が必要な式典もありますね','Police spec-guard-cere','Cooperative','kenji_office'),
    mk('警察、現場のジャッジは公平に下されますね','Police scene-judge-fair','Cooperative','kenji_office'),
    mk('警察、緊急車両の発進体制を整備されてますね','Police emerg-vehic-launch-prep','Close','kenji_office'),
  ]},
  {id:'conv_09550',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、業界に精通された','Dad — founding industry-expert','Sage','hiroshi_elder'),
    mk('はい。お父さんはバネのある経営判断をされた','Yes — Dad spring-mgmt-judg','Commitment','hiroshi_boss'),
    mk('お父さん、業績急上昇期にも謙虚さを保たれた','Dad — perf-sharp-up-humble','Wistful','hiroshi_elder'),
    mk('はい。お父さんは特許戦略で弁理士と組まれた','Yes — Dad patent-strat-pat-att','Reflective','hiroshi_boss'),
    mk('お父さん、社史の全編を監修された','Dad — co-hist-full-supv','Wistful','hiroshi_elder'),
    mk('はい。お父さんは特段の事情がある社員に配慮された','Yes — Dad spec-staff-cons','Reflective','hiroshi_boss'),
    mk('お父さん、社員のジャッジを公平にされた','Dad — staff-judge-fair','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新規事業の発進を決断された','Yes — Dad new-biz-launch-decide','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09551',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、植民地化と「野蛮」言説の歴史を論文で扱いましたね','Ren — colon-savage-discourse paper','Calm','asuka_teacher'),
    mk('はい、政治家同士の因縁の研究を論文で扱いました','Yes — Pol-feud paper','Earnest','ren_uni'),
    mk('蓮さん、戦時下の壮絶な体験記を論文で扱いましたね','Ren — war-fierce-mem paper','Reflective','asuka_teacher'),
    mk('はい、楽曲の和声分析を論文で扱いました','Yes — Song-harmo paper','Earnest','ren_uni'),
    mk('聴覚障害者の手話教育を論文で扱いましたね','Deaf-sign-lang-edu paper','Engaged','asuka_teacher'),
    mk('はい、動物の威嚇行動の研究を論文で扱いました','Yes — Animal-threat paper','Earnest','ren_uni'),
    mk('蓮さん、平常時と災害時の比較研究を論文で扱いましたね','Ren — peace-disas-cmp paper','Reflective','asuka_teacher'),
    mk('はい、歴史の暗部を直視する研究を論文で扱いました','Yes — Hist-dark-face paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09552',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、野蛮な暴力事件を、警察、扱われてますね','Case savage-viol police-handle','Reflective','ren_uni'),
    mk('警察、組織間の因縁の犯罪を捜査します','Police org-feud-crime-inv','Procedural','takeda_officer'),
    mk('本件、壮絶な交通事故を、警察、対応されてますね','Case fierce-traf-acc police-resp','Reflective','ren_uni'),
    mk('警察、音楽現場の和声分析が捜査に役立ちました','Police music-harmo-anal-inv','Procedural','takeda_officer'),
    mk('本件、被害者の手話通訳を、警察、手配されますね','Case vict-sign-interp police-arr','Reflective','ren_uni'),
    mk('警察、容疑者の威嚇行為を厳しく取り締まります','Police suspect-threat-strict','Procedural','takeda_officer'),
    mk('本件、平常時の防犯訓練を、警察、推進されてますね','Case peace-prev-train police-promo','Reflective','ren_uni'),
    mk('警察、犯罪現場を直視する勇気が必要ですね','Police scene-face-brave','Close','takeda_officer'),
  ]},
  {id:'conv_09553',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、植民地化と野蛮の言説を論文で扱いましたね','Sakura — colon-savage paper','Calm','asuka_teacher'),
    mk('はい、政治家同士の因縁を論文で扱いました','Yes — Pol-feud paper','Earnest teen','sakura_teen'),
    mk('戦時下の壮絶な体験記を論文で扱いましたね','War-fierce-mem paper','Reflective','asuka_teacher'),
    mk('はい、楽曲の和声分析を論文で扱いました','Yes — Song-harmo paper','Earnest','sakura_teen'),
    mk('聴覚障害者の手話教育を論文で扱いましたね','Deaf-sign-edu paper','Engaged','asuka_teacher'),
    mk('はい、動物の威嚇行動を論文で扱いました','Yes — Animal-threat paper','Earnest','sakura_teen'),
    mk('平常時と災害時の比較研究を論文で扱いましたね','Peace-disas paper','Reflective','asuka_teacher'),
    mk('はい、歴史の暗部を直視する研究を論文で扱いました','Yes — Hist-dark paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09554',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、医療界の野蛮な慣習を医療チームで根絶します','Ren — med-savage-cust med-team-rid','Calm','saito_doctor'),
    mk('はい、医療事故の因縁的連鎖を医療チームで分析します','Yes — Med-acc-feud-chain med-team','Patient','saito_doctor'),
    mk('壮絶な手術の症例を、貴院、ご記録されてますね、先生','Fierce-surg-case your-hosp rec, sensei','Reflective','ren_uni'),
    mk('はい、心拍の和声的リズムを医療チームで観察します','Yes — Heart-harmo-rhythm med-team obs','Patient','saito_doctor'),
    mk('聴覚障害者向け手話対応を、貴院、強化されてますね、先生','Deaf-sign-resp your-hosp strength, sensei','Reflective','ren_uni'),
    mk('はい、認知症患者の威嚇行動を医療チームで研究します','Yes — Dem-pati-threat med-team','Patient','saito_doctor'),
    mk('平常時の医療体制を、貴院、整備されてますね、先生','Peace-med-arr your-hosp, sensei','Curious','ren_uni'),
    mk('はい、患者の検査結果を直視する勇気を医療チームで支えます','Yes — Pati-result-face-brave med-team supp','Patient close','saito_doctor'),
  ]},
  {id:'conv_09555',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、野蛮な商慣行を排除しろ','Our co — savage-biz-cust-rid','Crisp','hiroshi_boss'),
    mk('はい。競合との因縁を清算します','Yes — Comp-feud-settle','Methodical','kenji_office'),
    mk('壮絶な労働環境にしないよう監督しろ','Fierce-work-env-not-supv','Direction','hiroshi_boss'),
    mk('はい。社員の声の和声的調和を目指します','Yes — Staff-voice-harmo-aim','Update','kenji_office'),
    mk('当社、手話通訳の研修を導入しろ','Our co — sign-interp-train-intro','Direction','hiroshi_boss'),
    mk('はい。社内の威嚇的言動は処分対象です','Yes — Co-threat-words-disc','Update','kenji_office'),
    mk('当社、平常時から危機管理を徹底しろ','Our co — peace-crisis-mgmt-strict','Direction','hiroshi_boss'),
    mk('はい。経営課題を直視する姿勢を貫きます','Yes — Mgmt-iss-face-attitude','Close','kenji_office'),
  ]},
  {id:'conv_09556',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、PC操作でカーソルが行方不明だってお困りだったよ、メイちゃん','Aoi — cust-PC-cursor-lost Mei','Wry','mei_romantic'),
    mk('葵、お客様、落合さんという作家ファンだって、メイちゃん','Aoi — cust-Ochiai-author-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、錬金術の歴史小説を読まれてるって、メイちゃん','Aoi — cust-alch-novel Mei','Reflective','mei_romantic'),
    mk('葵、お客様、色気のあるバラの香水着けてらしたよ、メイちゃん','Aoi — cust-allure-rose-perf Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ポルシェに乗ってお越しになったよ、メイちゃん','Aoi — cust-Porsche-come Mei','Reflective','mei_romantic'),
    mk('葵、お客様、初恋のお話をされたよ、メイちゃん','Aoi — cust-first-love-told Mei','Tender','aoi_barista'),
    mk('葵、お客様、川柳を作るのが趣味だって、メイちゃん','Aoi — cust-senryu-hobby Mei','Reflective','mei_romantic'),
    mk('葵、お客様、芸能人のバッシング報道について議論されてたよ、メイちゃん','Aoi — cust-celeb-bash-disc Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09557',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがワープロのカーソル操作で苦労された','Gran — youth Dad-wordproc-cursor-struggle','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、落合監督の試合をご覧になってたわよね、あなた?','Yes — Grandpa-Ochiai-match, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが錬金術の本に夢中だった','Gran — youth Dad-alch-book-into','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、母さんの色気にやられたんだって?','Grandpa — youth-Mom-allure-fell, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがポルシェの本をお買いになった','Gran — youth Dad-Porsche-book-buy','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、初恋のお話を聞かせて下さったわよね、あなた?','Grandpa — first-love-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが川柳をご投稿された','Gran — youth Dad-senryu-submit','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、メディアのバッシングに憤慨されたわよね、あなた?','Grandpa — media-bash-angr, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09558',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがパソコンでカーソルの動かし方を教えて下さったわ','Sho — Dad-PC-cursor-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと落合監督の本を読んだよ','Mei-sis — me Dad-Ochiai-book','Eager child','sho_child'),
    mk('翔くん、お父さんが錬金術のお話をして下さったわ','Sho — Dad-alch-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、色気って言葉、お父さんに聞いたよ','Mei-sis — me allure-Dad-asked','Curious child','sho_child'),
    mk('翔くん、お父さんがポルシェの展示会に連れて行って下さったわ','Sho — Dad-Porsche-expo-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、絵本で初恋のお話読んだよ','Mei-sis — me pic-book-first-love','Eager child','sho_child'),
    mk('翔くん、お父さんが川柳の作り方を教えて下さるそうよ','Sho — Dad-senryu-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ニュースでバッシングって聞いたよ','Mei-sis — me news-bash-heard','Curious close','sho_child'),
  ]},
  {id:'conv_09559',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、PCでカーソル迷子になってたな','Riku — PC-cursor-lost','Wry teen','sakura_teen'),
    mk('お前、野球で落合監督のファンだったな、桜','You — base-Ochiai-fan Sakura','Curious','riku_teen'),
    mk('リク、お前、錬金術ゲームハマってたな','Riku — alch-game-into','Wry','sakura_teen'),
    mk('お前、最近色気が出てきたって母さんに言われてたな、桜','You — recently-allure-mom Sakura','Wry','riku_teen'),
    mk('リク、お前、ポルシェのプラモ集めてたな','Riku — Porsche-plamodel-coll','Curious','sakura_teen'),
    mk('お前、初恋の相手の話してたな、桜','You — first-love-told Sakura','Wry','riku_teen'),
    mk('リク、お前、国語で川柳作ったろ?','Riku — JP-senryu?','Curious','sakura_teen'),
    mk('お前、SNSのバッシング気にしてたな、桜','You — SNS-bash-care Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09560',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがマウスのカーソルの動かし方教えて下さるそうよ','Sho — Dad-mouse-cursor-teach','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと落合監督の本読んだよ','Mom — me Dad-Ochiai-book','Eager child','sho_child'),
    mk('翔くん、お父さんが錬金術のドキュメンタリーをご覧になったわ','Sho — Dad-alch-doc-watch','Reflective','yumiko_mom'),
    mk('ママ、色気って言葉、ぼく、よくわからないよ','Mom — allure-me-not-clear','Curious child','sho_child'),
    mk('翔くん、お父さんがポルシェの雑誌をお見せ下さったわ','Sho — Dad-Porsche-mag-show','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと初恋の絵本読んだよ','Mom — me Dad-first-love-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが川柳をお作りになったわ','Sho — Dad-senryu-make','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ニュースで芸能人のバッシング聞いて悲しかったよ','Mom — me news-celeb-bash-sad','Reflective close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_438 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['コイツ','フラフラ','おととい','がまん','ちょこちょこ','まちまち','何時も','物凄く']
const B_T = ['課す','形容','メンツ','熟知','表向き','細々','退会','寄附']
const C_T = ['立たさ','公布','蜂起','死傷','迎撃','内包','輩出','わいせつ']
const D_T = ['ウニ','髭','洋書','つば','にんにく','マヨネーズ','ヤギ','泡盛']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08721',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「コイツが俺の自慢の息子だ」って仰ってたわよ','Sho — Dad "this-guy-my-pride-son"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、運動会の後、フラフラだったよ','Mom — me sports-day-after wobbly','Wry child','sho_child'),
    mk('翔くん、おとといお祖父ちゃんがお見えになったのよ','Sho — day-before-yest Grandpa-visited','Reflective','yumiko_mom'),
    mk('ママ、ぼく、おやつをがまんしてからご飯食べるね','Mom — me snack-endure dinner-eat','Earnest child','sho_child'),
    mk('翔くん、お父さんはちょこちょこ仕事の電話を取ってらっしゃるわ','Sho — Dad-chokochoko-work-call','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お友達のお弁当の中身がまちまちで面白いよ','Mom — me friend-bento-content-mixed-fun','Eager child','sho_child'),
    mk('翔くん、お父さんは何時もお仕事が忙しいのよね','Sho — Dad-always-work-busy','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんに会えて物凄く嬉しかったよ','Mom — me Grandpa-met-incredibly-happy','Eager close','sho_child'),
  ]},
  {id:'conv_08722',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お子様を「コイツが小さい頃」って紹介されてたよ、メイちゃん','Aoi — cust-child "this-one-young"-introduced Mei','Reflective','mei_romantic'),
    mk('葵、繁忙期、終わるとフラフラになっちゃうわね、メイちゃん','Aoi — busy-after-wobbly Mei','Wry','aoi_barista'),
    mk('葵、おとといから新メニューを出してたんだったね、メイちゃん','Aoi — day-before-yest new-menu Mei','Reflective','mei_romantic'),
    mk('葵、忙しい時もがまんして笑顔でいないとね、メイちゃん','Aoi — busy-endure-smile Mei','Direction','aoi_barista'),
    mk('葵、新人さんがちょこちょこミスしてるわね、メイちゃん','Aoi — newbie-chokochoko-mistake Mei','Reflective','mei_romantic'),
    mk('葵、お客様のご注文がまちまちで、覚えるの大変ね、メイちゃん','Aoi — cust-order-mixed-remember-hard Mei','Wry','aoi_barista'),
    mk('葵、お得意様、何時もカウンター席ね、メイちゃん','Aoi — VIP-always-counter Mei','Reflective','mei_romantic'),
    mk('葵、新メニュー、お客様に物凄く好評で嬉しいわ、メイちゃん','Aoi — new-menu-cust-incredibly-pop-glad Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_08723',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは仲間を「コイツが頼りだ」って言われたぞ','Gran — youth Dad friend "this-guy-rely"-said','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、夏祭りの後、フラフラなさってたわよね、あなた?','Yes — Grandpa-fest-after wobbly, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、おとといお孫さんがお見えになったのを覚えてるぞ','Gran — day-before-yest grandkid-visit-remember','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、つらい時もがまんなさってたわよね、あなた?','Grandpa — hard-time-endure, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがちょこちょこお見えになったぞ','Gran — youth Dad-chokochoko-visited','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご友人のご出身がまちまちで楽しい集まりだったわよね、あなた?','Grandpa — friend-orig-mixed-fun-gather, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは何時も静かに笑ってらしたぞ','Gran — youth Dad-always-quiet-smile','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫の成長を物凄く喜ばれたわよね、あなた?','Grandpa — grandkid-grow-incredibly-pleased, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08724',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、「コイツ」って言うのやめろよ','Riku — "this-guy"-don\'t-say','Wry teen','sakura_teen'),
    mk('お前、徹夜明けでフラフラじゃん、桜','You — all-nighter-wobbly Sakura','Wry','riku_teen'),
    mk('リク、お前、おとといテスト返ってきただろ?','Riku — day-before-yest-test-back?','Curious','sakura_teen'),
    mk('お前、お菓子がまんできてないだろ、桜','You — sweets-endure-not Sakura','Wry','riku_teen'),
    mk('リク、お前、漫画ちょこちょこ買い増ししてんな','Riku — manga-chokochoko-buy-more','Wry','sakura_teen'),
    mk('お前、教科書の意見、まちまちで困るだろ?桜','You — textbook-opinion-mixed-troubled? Sakura','Curious','riku_teen'),
    mk('リク、お前、何時もスマホ見てんな','Riku — always-phone-look','Wry','sakura_teen'),
    mk('お前、テスト点数、物凄く上がったな、桜','You — test-score-incredibly-up Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08725',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんは「コイツ」じゃなくて「翔くん」って呼ぶのよ','Sho — Mei-sis "this-guy"-not "Sho"-call','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、運動会でフラフラになるまで走ったよ','Mei-sis — me sports-day-wobbly-ran','Proud child','sho_child'),
    mk('翔くん、おとといのお絵描き、可愛かったわね','Sho — day-before-yest-drawing-cute','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、おやつをがまんしてご飯食べるよ','Mei-sis — me snack-endure-dinner','Earnest child','sho_child'),
    mk('翔くん、お父さんがちょこちょこお仕事の電話されるのよ','Sho — Dad-chokochoko-work-call','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お友達のお弁当はまちまちで面白いよ','Mei-sis — me friend-bento-mixed-fun','Eager child','sho_child'),
    mk('翔くん、メイ姉さんは何時も翔くんの味方よ','Sho — Mei-sis-always-Sho-side','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんに会えて物凄く嬉しいよ','Mei-sis — me Mei-sis-met-incredibly-glad','Eager close','sho_child'),
  ]},
  {id:'conv_08726',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新人にも一定の課題を課すように指導しろ','Our co — newbie-task-impose-guide','Crisp','hiroshi_boss'),
    mk('はい。新商品を一言で形容するキャッチコピーを準備しました','Yes — New-prod-one-word-describe-copy prep','Methodical','kenji_office'),
    mk('お取引先との会食で、メンツを潰さないようにしろ','Partner-meal-face-not-crush','Direction','hiroshi_boss'),
    mk('はい。市場動向を熟知した社員を選任しました','Yes — Market-trend-master-staff-appoint','Update','kenji_office'),
    mk('当社、表向きの方針と現場の運用を一致させろ','Our co — front-policy-on-site-match','Direction','hiroshi_boss'),
    mk('はい。細々とした業務改善を継続しております','Yes — Small-biz-imp-cont','Update','kenji_office'),
    mk('当社、お得意様の退会を防ぐ方策を立てろ','Our co — VIP-leave-prev-plan','Direction','hiroshi_boss'),
    mk('はい。地域への寄附活動を継続しております','Yes — Region-donation-cont','Close','kenji_office'),
  ]},
  {id:'conv_08727',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('新人に基本タスクを課すスケジュールを組みましょう','Newbie-basic-task-impose-sched','Brisk','yuki_office'),
    mk('はい。新サービスをお客様向けに形容する文章を準備しました','Yes — New-svc-cust-describe-text prep','Cooperative','kenji_office'),
    mk('お取引先のメンツを尊重した提案にしましょう','Partner-face-respect-prop','Direction','yuki_office'),
    mk('はい。市場を熟知した担当者を割り当てます','Yes — Market-master-assign','Update','kenji_office'),
    mk('表向きには無料、実際はオプション課金は避けましょう','Front-free-actual-fee avoid','Direction','yuki_office'),
    mk('はい。社内の細々した業務を整理しました','Yes — Co-small-biz-org','Update','kenji_office'),
    mk('会員の退会理由を集計しましょう','Member-leave-reason-comp','Direction','yuki_office'),
    mk('はい。社員からの寄附も募ります','Yes — Staff-donation-collect','Close','kenji_office'),
  ]},
  {id:'conv_08728',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、博士課程は厳しい課題を学生に課すぞ','Ren — PhD-strict-task-impose','Mentor','hiroshi_boss'),
    mk('はい。論文タイトルを一言で形容できるよう工夫します','Yes — Paper-title-one-word-describe','Earnest','ren_uni'),
    mk('蓮、学会では他大のメンツも尊重しろ','Ren — conf-other-univ-face-respect','Direction','hiroshi_boss'),
    mk('はい。指導教授は分野を熟知してらっしゃいます','Yes — Adv-prof-field-master','Polite','ren_uni'),
    mk('蓮、表向きと裏の発表内容を一致させろ','Ren — front-back-pres-match','Direction','hiroshi_boss'),
    mk('はい。研究の細々した作業も丁寧にしております','Yes — Research-small-task-careful','Earnest','ren_uni'),
    mk('蓮、学会員の退会原因を確認しろ','Ren — conf-member-leave-cause-check','Direction','hiroshi_boss'),
    mk('はい。研究室は同窓会から寄附を頂いております','Yes — Lab-alum-donation-receive','Earnest close','ren_uni'),
  ]},
  {id:'conv_08729',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、新人にも一定の責務を課す制度ですね','Police newbie-duty-impose-system','Calm','takeda_officer'),
    mk('はい。警察、容疑者の特徴を簡潔に形容されますね','Yes — Police suspect-feat-concise-describe','Cooperative','kenji_office'),
    mk('警察、関係機関のメンツを保つご配慮、ありがたいです','Police rel-org-face-keep-care','Cooperative','kenji_office'),
    mk('警察、地域の事情を熟知した捜査官を配置します','Police local-situ-master-officer-deploy','Procedural','takeda_officer'),
    mk('はい。警察、表向きの捜査と内偵捜査を併用なさるんですね','Yes — Police front-inv-undercover-combine','Cooperative','kenji_office'),
    mk('警察、細々した情報も大事にします','Police small-info-cherish','Procedural','takeda_officer'),
    mk('はい。警察、防犯協会の退会を防ぐ呼びかけ、ありがたいです','Yes — Police crime-prev-leave-prev-call','Cooperative','kenji_office'),
    mk('警察、市民からの寄附は丁重にお断りします','Police citizen-donation-polite-refuse','Close','takeda_officer'),
  ]},
  {id:'conv_08730',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社員にも厳しい目標を課す方だったぞ','Dad — founding staff-strict-goal-impose','Sage','hiroshi_elder'),
    mk('はい。お父さんは我が社を一言で形容する言葉を生み出された','Yes — Dad co-one-word-describe-coin','Commitment','hiroshi_boss'),
    mk('お父さん、お取引先のメンツを大事にされたぞ','Dad — partner-face-cherish','Wistful','hiroshi_elder'),
    mk('はい。お父さんは業界全体を熟知された方でした','Yes — Dad industry-master','Reflective','hiroshi_boss'),
    mk('お父さん、表向きと内実の両方を大切にされたぞ','Dad — front-internal-both-cherish','Wistful','hiroshi_elder'),
    mk('はい。お父さんは細々とした社員の声に耳を傾けられた','Yes — Dad small-staff-voice-listen','Reflective','hiroshi_boss'),
    mk('お父さん、お得意様の退会を最少に抑える対応をされたぞ','Dad — VIP-leave-min-keep-resp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社会への寄附を惜しまれなかった','Yes — Dad soc-donation-not-spare','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08731',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦時に立たされた人々の証言を論文で扱いましたね','Ren — war-stood-people-testimony paper','Calm','asuka_teacher'),
    mk('はい、新憲法公布の過程を論文で扱いました','Yes — New-const-prom paper','Earnest','ren_uni'),
    mk('蓮さん、近代の市民蜂起の事例を論文で扱いましたね','Ren — modern-cit-uprise-case paper','Reflective','asuka_teacher'),
    mk('はい、災害死傷統計の研究を論文で扱いました','Yes — Disaster-cas-stat paper','Earnest','ren_uni'),
    mk('近代戦の迎撃戦術を論文で扱いましたね','Mod-war-intercept-tact paper','Engaged','asuka_teacher'),
    mk('はい、社会システムに内包される矛盾を論文で扱いました','Yes — Soc-sys-inherent-contradict paper','Earnest','ren_uni'),
    mk('蓮さん、名門校が輩出した人物史を論文で扱いましたね','Ren — top-school-prod-fig-hist paper','Reflective','asuka_teacher'),
    mk('はい、わいせつ表現規制の歴史を論文で扱いました','Yes — Obscene-reg-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08732',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者が立たされる立場を警察、説明されてますね','Case suspect-stood-position police-explain','Reflective','ren_uni'),
    mk('警察、改正法の公布を市民に周知します','Police rev-law-prom-citizen-info','Procedural','takeda_officer'),
    mk('本件、暴動蜂起の動きを警察、警戒されてますね','Case riot-uprise police-watch','Reflective','ren_uni'),
    mk('警察、死傷事故の発生現場を保全します','Police cas-acc-on-site-preserve','Procedural','takeda_officer'),
    mk('本件、迎撃捜査の体制を警察、整えてらっしゃいますね','Case intercept-inv police-prep','Reflective','ren_uni'),
    mk('警察、犯罪に内包される動機を解明します','Police crime-inherent-motive-clarify','Procedural','takeda_officer'),
    mk('本件、地元から優秀な捜査官を輩出されてますね、警察','Case local-top-officer-prod police','Reflective','ren_uni'),
    mk('警察、わいせつ事案には厳しく対応します','Police obscene-strict-resp','Close','takeda_officer'),
  ]},
  {id:'conv_08733',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦時に立たされた人々の証言を論文で扱いましたね','Sakura — war-stood paper','Calm','asuka_teacher'),
    mk('はい、新憲法公布の過程を論文で扱いました','Yes — New-const-prom paper','Earnest teen','sakura_teen'),
    mk('近代の市民蜂起の事例を論文で扱いましたね','Mod-cit-uprise paper','Reflective','asuka_teacher'),
    mk('はい、災害死傷統計を論文で扱いました','Yes — Disaster-cas paper','Earnest','sakura_teen'),
    mk('近代戦の迎撃戦術を論文で扱いましたね','Mod-war-intercept paper','Engaged','asuka_teacher'),
    mk('はい、社会システムに内包される矛盾を論文で扱いました','Yes — Soc-sys-inherent paper','Earnest','sakura_teen'),
    mk('名門校が輩出した人物史を論文で扱いましたね','Top-school-prod paper','Reflective','asuka_teacher'),
    mk('はい、わいせつ表現規制の歴史を論文で扱いました','Yes — Obscene-reg paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08734',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、医療従事者が窮地に立たされた感染期を医療チームで振り返ります','Ren — med-worker-stood-crisis med-team reflect','Calm','saito_doctor'),
    mk('はい、新医療基準の公布を医療チームで遵守しております','Yes — New-med-stand-prom med-team obey','Patient','saito_doctor'),
    mk('医療従事者の蜂起的なストライキ運動を、貴院、ご経験ですか、先生','Med-worker-uprise-strike your-hosp exp, sensei','Curious','ren_uni'),
    mk('はい、災害現場での死傷者対応を医療チームで担当します','Yes — Disaster-cas-resp med-team','Patient','saito_doctor'),
    mk('感染症迎撃チームを、貴院、立ち上げられたんですね、先生','Infect-intercept-team your-hosp launched, sensei','Reflective','ren_uni'),
    mk('はい、薬の中に内包される副作用を医療チームで研究しております','Yes — Drug-inherent-side med-team research','Patient','saito_doctor'),
    mk('貴院は名医を多く輩出されてますね、先生','Your-hosp-top-doctor-prod, sensei','Praising','ren_uni'),
    mk('はい、わいせつ被害の医療ケアを医療チームで担当します','Yes — Obscene-victim-care med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_08735',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、窮地に立たされた時こそ団結しろ','Our co — crisis-stood-unite','Crisp','hiroshi_boss'),
    mk('はい。新ガイドライン公布を社員に周知します','Yes — New-guide-prom-staff-info','Methodical','kenji_office'),
    mk('当社、社員の蜂起を生まぬよう対話を重ねろ','Our co — staff-uprise-prev-dialog','Direction','hiroshi_boss'),
    mk('はい。労災での死傷者を最少に抑えます','Yes — Work-acc-cas-min','Update','kenji_office'),
    mk('当社、競合の動きを迎撃する体制を作れ','Our co — rival-intercept-system','Direction','hiroshi_boss'),
    mk('はい。新製品に内包される技術特許を確認しました','Yes — New-prod-inherent-patent-check','Update','kenji_office'),
    mk('当社、業界のトップ人材を輩出する会社になれ','Our co — industry-top-talent-prod','Direction','hiroshi_boss'),
    mk('はい。社員のわいせつ行為は厳罰で対応します','Yes — Staff-obscene-strict-resp','Close','kenji_office'),
  ]},
  {id:'conv_08736',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、北海道でウニを召し上がったって、メイちゃん','Aoi — cust-Hokkaido-uni-ate Mei','Reflective','mei_romantic'),
    mk('葵、お客様、立派な髭を蓄えていらしたよ、メイちゃん','Aoi — cust-distinguished-beard Mei','Reflective','aoi_barista'),
    mk('葵、お客様、本屋で洋書を買ってらしたよ、メイちゃん','Aoi — cust-bookstore-western-book Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お茶のつばが飛んじゃってごめんって謝られてたよ、メイちゃん','Aoi — cust-tea-spray-apology Mei','Wry','aoi_barista'),
    mk('葵、新メニュー、にんにくたっぷりのオイル料理にしましょう、メイちゃん','Aoi — new-menu-garlic-oil-cuisine Mei','Animated','mei_romantic'),
    mk('葵、新メニュー、自家製マヨネーズを使いましょう、メイちゃん','Aoi — new-menu-homemade-mayo Mei','Direction','aoi_barista'),
    mk('葵、お子様、絵本のヤギさん見て大喜びしてたよ、メイちゃん','Aoi — child-book-goat-see-happy Mei','Pleased','mei_romantic'),
    mk('葵、お客様、沖縄出身で泡盛がお好きだって、メイちゃん','Aoi — cust-Okinawa-orig awamori-like Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08737',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが北海道でウニを召し上がったぞ','Gran — youth Dad-Hokkaido-uni-ate','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、晩年は白い髭を蓄えてらしたわよね、あなた?','Yes — Grandpa-late-yrs-white-beard, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが書斎に洋書を並べてらしたぞ','Gran — youth Dad-study-western-book-arrange','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様にお茶を飲ます時、つばが飛ばないようにご注意なさってたわよね、あなた?','Grandpa — grandkid-tea-spray-careful, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがにんにく料理を好まれたぞ','Gran — youth Dad-garlic-cuisine-liked','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お弁当にマヨネーズを少し付けて下さったわよね、あなた?','Grandpa — bento-mayo-add, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、田舎でヤギを飼っていらしたお家にお邪魔したぞ','Gran — youth countryside-goat-keep-home-visited','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、沖縄旅行で泡盛を飲まれたわよね、あなた?','Grandpa — Okinawa-trip-awamori-drank, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08738',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがお寿司屋さんでウニを食べに行かれたわ','Sho — Dad-sushi-uni-went','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんの髭、ちくちくして面白いよ','Mei-sis — me Grandpa-beard-prickly-fun','Eager child','sho_child'),
    mk('翔くん、お父さんがお洒落な洋書を本棚に並べてらしたわ','Sho — Dad-fancy-western-book-shelf','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんがお茶のつばが飛ばないように気を付けてって','Mei-sis — me Grandpa-tea-spray-careful','Reflective child','sho_child'),
    mk('翔くん、お祖母ちゃんがにんにくのお料理作ってくれたわ','Sho — Grandma-garlic-cuisine-made','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お母さんがマヨネーズで卵サンド作ったよ','Mei-sis — me Mom-mayo-egg-sand-made','Eager child','sho_child'),
    mk('翔くん、動物園のヤギさん、可愛かったわね','Sho — zoo-goat-cute','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが沖縄で泡盛を試したって聞いたよ','Mei-sis — me Dad-Okinawa-awamori-tried-heard','Reflective close','sho_child'),
  ]},
  {id:'conv_08739',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、お寿司でウニ頼んだろ?','Riku — sushi-uni-ordered?','Curious teen','sakura_teen'),
    mk('お前、髭生えてきたな、桜','You — beard-grow Sakura','Wry','riku_teen'),
    mk('リク、お前、英語の授業で洋書読まされてんだろ?','Riku — Eng-class-western-book-read?','Curious','sakura_teen'),
    mk('お前、しゃべる時、つば飛ばすなよ、桜','You — talk-spray-don\'t Sakura','Wry','riku_teen'),
    mk('リク、お前、給食のにんにく料理の臭い気にしてんだろ?','Riku — lunch-garlic-smell-care?','Curious','sakura_teen'),
    mk('お前、サラダにマヨネーズかけ過ぎだろ、桜','You — salad-mayo-too-much Sakura','Wry','riku_teen'),
    mk('リク、お前、動物園のヤギ好きだろ?','Riku — zoo-goat-like?','Curious','sakura_teen'),
    mk('お前、泡盛は大人になってからな、桜','You — awamori adult-after Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_08740',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがお寿司屋さんでウニを召し上がられたわ','Sho — Dad-sushi-uni-ate','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんの髭、ふさふさだよ','Mom — me Grandpa-beard-fluffy','Eager child','sho_child'),
    mk('翔くん、お父さんが書斎に洋書をたくさん並べてらしたわ','Sho — Dad-study-western-book-many','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんが「しゃべる時のつばに気を付けて」って','Mom — Grandpa "talk-spray-careful"','Earnest child','sho_child'),
    mk('翔くん、ママがにんにくをお料理に入れたわよ','Sho — Mom-garlic-cuisine-add','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お母さんのマヨネーズ手作り好きだよ','Mom — me Mom-mayo-homemade-like','Eager child','sho_child'),
    mk('翔くん、お父さんと動物園でヤギにエサをあげましょうね','Sho — Dad-zoo-goat-feed','Tender','yumiko_mom'),
    mk('ママ、お祖父ちゃんが沖縄の泡盛を見せて下さったわ','Mom — Grandpa-Okinawa-awamori-showed','Eager close','sho_child'),
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

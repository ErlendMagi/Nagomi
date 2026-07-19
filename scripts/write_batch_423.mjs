import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_423 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['前置き','受け取ら','訊い','知らず','さらっ','今時','騒ぐ','めくっ']
const B_T = ['小冊子','鉄骨','凝縮','収める','経済学部','新株','チャーター','リクルート']
const C_T = ['伐採','急性','海峡','激怒','不条理','醸造','戦艦','着工']
const D_T = ['アトリエ','バグダッド','整形','雛','赤十字','ダンボール','グアム','スーパーマーケット']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08421',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お話の前置きが長くなりごめんね','Sho — story-preamble-long sorry','Caring','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんから手紙、受け取らせてもらったよ','Mom — me Grandpa-letter received','Eager child','sho_child'),
    mk('翔くん、お父さんに学校のこと、訊いてみてね','Sho — Dad school-ask','Direction','yumiko_mom'),
    mk('ママ、ぼく、知らずにお皿、割っちゃった','Mom — me unknowingly-plate broke','Wry child','sho_child'),
    mk('翔くん、ご飯はさらっと食べちゃいなさい','Sho — meal lightly-eat','Direction','yumiko_mom'),
    mk('ママ、今時のお父さんは料理上手だよ','Mom — modern-Dad-cook-good','Eager child','sho_child'),
    mk('翔くん、お友達と遊ぶ時、騒ぐのも程々にね','Sho — friend-play noise-moderate','Direction','yumiko_mom'),
    mk('ママ、ぼく、絵本のページをめくって楽しんだよ','Mom — me picture-book-page-turned enjoyed','Eager close','sho_child'),
  ]},
  {id:'conv_08422',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様への前置きを短くしようね、メイちゃん','Aoi — cust-preamble shorter Mei','Direction','mei_romantic'),
    mk('葵、新しい食材、受け取らせていただいたよ、メイちゃん','Aoi — new-ingredient received Mei','Practical','aoi_barista'),
    mk('葵、お客様のご希望、訊いてみたわ、メイちゃん','Aoi — cust-wish asked Mei','Reflective','mei_romantic'),
    mk('葵、知らずにメニューに、お肉が抜けてたよ、メイちゃん','Aoi — unknowingly menu-meat-missing Mei','Wry','aoi_barista'),
    mk('葵、お客様、さらっと召し上がってお帰りだった、メイちゃん','Aoi — cust lightly-ate-returned Mei','Reflective','mei_romantic'),
    mk('葵、今時、お店をやるのは大変ね、メイちゃん','Aoi — modern-time store-do hard Mei','Reflective','aoi_barista'),
    mk('葵、お子様連れのお客様、お子様が騒ぐ時もあるね、メイちゃん','Aoi — child-cust child-noise-sometimes Mei','Caring','mei_romantic'),
    mk('葵、メニューブックをお客様が、めくっていらしたよ、メイちゃん','Aoi — cust-menu-book-turned Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08423',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが前置きを丁寧にされたぞ','Gran — youth Dad-preamble polite','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お給料を直接受け取らせていらしたわよね、あなた?','Yes — Grandpa pay-direct-receive, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんに「結婚するか?」と訊いたぞ','Gran — youth Dad "marry?" asked','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ばあさんが知らずに招いたお客様に、お茶を出されたわよね、あなた?','Grandpa — gran unknowingly-invited cust tea-served, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがおにぎりをさらっとお作りになったぞ','Gran — youth Dad-onigiri light-made','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、今時の若者を心配されてたわよね、あなた?','Grandpa — modern-youth-worried, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと孫が一緒に騒ぐ姿、覚えてるぞ','Gran — youth Dad-grandkid-together-noise remember','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご本のページを、ゆっくりめくっていらしたわよね、あなた?','Grandpa — book-page slowly-turned, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08424',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前の話、前置き長いんだよ','Riku — your-story preamble-long','Wry teen','sakura_teen'),
    mk('お前、テストの結果、ちゃんと受け取らせてもらってるか?桜','You — test-result properly-received? Sakura','Curious','riku_teen'),
    mk('リク、お前、先生に質問訊いてみろよ','Riku — teacher-question ask','Direction','sakura_teen'),
    mk('お前、知らずに勉強会の日程変わってたぞ、桜','You — unknowingly-study-meet schedule-changed Sakura','Reflective','riku_teen'),
    mk('リク、お前、さらっと宿題やってんな','Riku — light-homework-do','Praising','sakura_teen'),
    mk('お前、今時のアニメ詳しいよな、桜','You — modern-anime familiar Sakura','Praising','riku_teen'),
    mk('リク、お前、教室で騒ぐなよ','Riku — classroom-noise don\'t','Direction','sakura_teen'),
    mk('お前、漫画めくって時間つぶしてんだろ?桜','You — manga-turn time-kill? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08425',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんが前置きしないで本題から話すわね','Sho — Mei-sis no-preamble main-talk','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんから本を受け取らせてもらったよ','Mei-sis — me Grandpa-book-received','Eager child','sho_child'),
    mk('翔くん、お父さんにいつ帰るか、訊いてみてね','Sho — Dad-when-return ask','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、知らずにお花を踏んじゃった','Mei-sis — me unknowingly-flower-stepped','Wry child','sho_child'),
    mk('翔くん、お絵かきはさらっとでもいいわよ','Sho — drawing light-OK','Caring','mei_romantic'),
    mk('メイ姉さん、ぼく、今時の遊びだけじゃなく、古い遊びも好きだよ','Mei-sis — me modern-play-only-not old-play-like','Reflective child','sho_child'),
    mk('翔くん、お家で大きな声で騒ぐと、近所迷惑よ','Sho — home loud-noise neighbor-bother','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんと絵本めくって楽しんだよ','Mei-sis — me Grandpa-picture-book-turned-fun','Eager close','sho_child'),
  ]},
  {id:'conv_08426',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新製品の小冊子を作成しろ','Our co — new-product-pamphlet make','Crisp','hiroshi_boss'),
    mk('はい。新ビルの鉄骨工事が始まりました','Yes — New-building-steel-frame work-started','Methodical','kenji_office'),
    mk('お客様の声を凝縮した広告を作れ','Cust-voice-condensed ad make','Direction','hiroshi_boss'),
    mk('はい。今期の業績を確実に収める所存です','Yes — This-period-perf surely-collect intend','Update','kenji_office'),
    mk('当社、経済学部出身者を採用しろ','Our co — econ-grad hire','Direction','hiroshi_boss'),
    mk('はい。新株発行の準備が整いました','Yes — New-share-issue prep done','Update','kenji_office'),
    mk('役員のチャーター便を手配しろ','Exec-charter-flight arrange','Direction','hiroshi_boss'),
    mk('はい。リクルートサイトに広告を出します','Yes — Recruit-site ad-out','Close','kenji_office'),
  ]},
  {id:'conv_08427',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社員配付用の小冊子を新調しましょう','Staff-handout-pamphlet renew','Brisk','yuki_office'),
    mk('はい。鉄骨入りの倉庫を建てる計画です','Yes — Steel-frame-warehouse-build plan','Cooperative','kenji_office'),
    mk('お客様調査を凝縮したレポートを作りましょう','Cust-survey-condensed report make','Direction','yuki_office'),
    mk('はい。月次目標を着実に収める努力をしております','Yes — Monthly-target steady-collect try','Update','kenji_office'),
    mk('経済学部からインターンを募集しましょう','Econ-faculty intern-recruit','Direction','yuki_office'),
    mk('はい。新株の発行アナウンスを準備しております','Yes — New-share-issue-announce prep','Update','kenji_office'),
    mk('海外視察のチャーター便を予約しましょう','Overseas-inspect-charter-flight book','Direction','yuki_office'),
    mk('はい。新卒リクルートを強化しております','Yes — New-grad-recruit strengthen','Close','kenji_office'),
  ]},
  {id:'conv_08428',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究紹介の小冊子を作れ','Ren — research-intro-pamphlet make','Mentor','hiroshi_boss'),
    mk('はい。研究室の鉄骨補強工事中です','Yes — Lab-steel-frame-reinforce-work','Earnest','ren_uni'),
    mk('蓮、論文を凝縮してプレゼンしろ','Ren — paper-condensed pres','Direction','hiroshi_boss'),
    mk('はい。研究費を予算内に収める努力をしております','Yes — Research-fund-budget surely-collect try','Polite','ren_uni'),
    mk('蓮、経済学部の共同研究にも参加しろ','Ren — econ-faculty joint-research attend','Direction','hiroshi_boss'),
    mk('はい。新株発行の事例を経済論文で扱いました','Yes — New-share-issue-case econ-paper handled','Earnest','ren_uni'),
    mk('蓮、海外学会のチャーター便も活用しろ','Ren — overseas-conf-charter-flight utilize','Direction','hiroshi_boss'),
    mk('はい。学会のリクルートブースに参加します','Yes — Conf-recruit-booth attend','Earnest close','ren_uni'),
  ]},
  {id:'conv_08429',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、防犯小冊子を配付しております','Police crime-prev-pamphlet distribute','Calm','takeda_officer'),
    mk('はい。警察、鉄骨倉庫の事故を捜査されているそうですね','Yes — Police steel-warehouse-accident inv','Cooperative','kenji_office'),
    mk('警察、捜査資料を凝縮した報告書を作成しました','Police inv-doc-condensed report-made','Procedural','takeda_officer'),
    mk('はい。警察、犯罪を確実に収める対策、ありがたいです','Yes — Police crime-surely-collect counter grateful','Cooperative','kenji_office'),
    mk('警察、経済学部出身の捜査官も増えております','Police econ-grad-officer increase','Procedural','takeda_officer'),
    mk('はい。新株発行詐欺の事件、警察、捜査中ですね','Yes — New-share-issue-fraud case police-inv','Cooperative','kenji_office'),
    mk('警察、チャーター便での要人警護も担当します','Police charter-flight VIP-guard handle','Procedural','takeda_officer'),
    mk('はい。警察、リクルート活動も積極的になさっておられますね','Yes — Police recruit-act active','Close','kenji_office'),
  ]},
  {id:'conv_08430',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業初期に自ら小冊子を配付された','Dad — founding-early self-pamphlet-distribute','Sage','hiroshi_elder'),
    mk('はい。お父さんは鉄骨建築を先取りされた','Yes — Dad steel-frame-architecture-foresight','Commitment','hiroshi_boss'),
    mk('お父さん、社訓を凝縮した一言、覚えてるか?','Dad — co-motto-condensed-saying remember?','Wistful','hiroshi_elder'),
    mk('はい。お父さんは赤字を確実に収める力をお持ちでした','Yes — Dad deficit surely-collect power had','Reflective','hiroshi_boss'),
    mk('お父さん、経済学部の若手を集めて研究会を開かれた','Dad — econ-faculty youth-gather seminar-held','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新株発行の決断もされた','Yes — Dad new-share-issue-decided','Reflective','hiroshi_boss'),
    mk('お父さん、長距離のチャーター便で世界を回られた','Dad — long-haul-charter-flight world-toured','Wistful','hiroshi_elder'),
    mk('はい。お父さんはリクルート時代から才能を見抜かれた','Yes — Dad recruit-era talent-saw','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08431',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、森林伐採による環境影響を論文で扱っていましたね','Ren — forest-cut env-impact paper','Calm','asuka_teacher'),
    mk('はい、急性疾患の早期発見を論文で扱いました','Yes — acute-disease early-detect paper','Earnest','ren_uni'),
    mk('蓮さん、津軽海峡の漁業史を論文で扱っていましたね','Ren — Tsugaru-strait fishery history paper','Reflective','asuka_teacher'),
    mk('はい、抑圧された人々の激怒を論文で扱いました','Yes — oppressed-people anger paper','Earnest','ren_uni'),
    mk('社会の不条理を論文で扱っていましたね','Social-absurd paper','Engaged','asuka_teacher'),
    mk('はい、伝統的な醸造文化を論文で扱いました','Yes — trad-brewing-culture paper','Earnest','ren_uni'),
    mk('蓮さん、旧海軍の戦艦の歴史を論文で扱っていましたね','Ren — old-navy-battleship history paper','Reflective','asuka_teacher'),
    mk('はい、新幹線の着工史を論文で扱いました','Yes — Shinkansen-construction-start history paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08432',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、不法伐採の現場を警察、押さえました','Case illegal-cut-scene police-seized','Calm','takeda_officer'),
    mk('警察、急性中毒の事件を捜査しております','Police acute-poison-case inv','Procedural','takeda_officer'),
    mk('本件、海峡上の不審船を警察、追跡されたんですね','Case strait-suspicious-ship police-tracked','Reflective','ren_uni'),
    mk('警察、被害者ご家族の激怒に丁寧に対応します','Police victim-family-anger polite-resp','Procedural','takeda_officer'),
    mk('本件、不条理な事件に警察、向き合っておられますね','Case absurd-case police-face','Reflective','ren_uni'),
    mk('警察、不法な醸造業者を摘発しました','Police illegal-brew-vendor busted','Procedural','takeda_officer'),
    mk('本件、戦艦遺物の盗難を警察、調査中ですね','Case battleship-relic-theft police-inv','Reflective','ren_uni'),
    mk('警察、不法着工の工事を停止させました','Police illegal-construction-start halt','Close','takeda_officer'),
  ]},
  {id:'conv_08433',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、森林伐採による環境影響を論文で扱っていましたね','Sakura — forest-cut paper','Calm','asuka_teacher'),
    mk('はい、急性疾患の早期発見を論文で扱いました','Yes — acute-disease paper','Earnest teen','sakura_teen'),
    mk('津軽海峡の漁業史を論文で扱っていましたね','Tsugaru-strait paper','Reflective','asuka_teacher'),
    mk('はい、抑圧された人々の激怒を論文で扱いました','Yes — oppressed-anger paper','Earnest','sakura_teen'),
    mk('社会の不条理を論文で扱っていましたね','Social-absurd paper','Engaged','asuka_teacher'),
    mk('はい、伝統的な醸造文化を論文で扱いました','Yes — trad-brewing paper','Earnest','sakura_teen'),
    mk('旧海軍の戦艦の歴史を論文で扱っていましたね','Old-navy-battleship paper','Reflective','asuka_teacher'),
    mk('はい、新幹線の着工史を論文で扱いました','Yes — Shinkansen-start paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08434',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、森林伐採の影響で増える病気を医療チームで研究しております','Ren — forest-cut-impact disease med-team research','Calm','saito_doctor'),
    mk('はい、急性アレルギーの対応を医療チームで備えております','Yes — Acute-allergy-resp med-team prep','Patient','saito_doctor'),
    mk('海峡を渡る感染症の警戒を、貴院、なさっているそうですね、先生','Strait-cross-infection alert your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、患者さんの激怒にも医療チームは冷静に対応します','Yes — Patient-anger med-team calm-resp','Patient','saito_doctor'),
    mk('医療現場の不条理に立ち向かう貴院、立派ですね、先生','Med-scene-absurd-face your-hosp splendid, sensei','Reflective','ren_uni'),
    mk('はい、薬の醸造技術も医療チームで学習しております','Yes — Drug-brewing-tech med-team learn','Patient','saito_doctor'),
    mk('かつての戦艦内での医療事情を、貴院、研究なさったんですね、先生','Past battleship-med-situation your-hosp research, sensei','Reflective','ren_uni'),
    mk('はい、新病棟の着工を医療チームで楽しみにしております','Yes — New-ward-construction-start med-team look-forward','Patient close','saito_doctor'),
  ]},
  {id:'conv_08435',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、森林伐採に頼らない素材を開発しろ','Our co — forest-cut-not-rely material develop','Crisp','hiroshi_boss'),
    mk('はい。社員の急性疾患予防プログラムを導入します','Yes — Staff-acute-disease-prev program intro','Methodical','kenji_office'),
    mk('海峡を越えた取引も検討しろ','Strait-cross-transaction consider','Direction','hiroshi_boss'),
    mk('はい。お得意様の激怒には誠実に対応いたします','Yes — VIP-anger sincere-resp','Update','kenji_office'),
    mk('業界の不条理を打開する新製品を目指せ','Industry-absurd-break new-product aim','Direction','hiroshi_boss'),
    mk('はい。日本酒醸造との提携を検討中です','Yes — Sake-brewing-partner consider','Update','kenji_office'),
    mk('当社、ロゴに戦艦のシルエットは使うな','Our co — logo battleship-silhouette don\'t-use','Direction','hiroshi_boss'),
    mk('はい。新店舗の着工式を準備しております','Yes — New-store-construction-start-ceremony prep','Close','kenji_office'),
  ]},
  {id:'conv_08436',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、アトリエを構えていらっしゃるそうよ、メイちゃん','Aoi — cust-atelier-have Mei','Reflective','mei_romantic'),
    mk('葵、お客様、バグダッドのお話されてたよ、メイちゃん','Aoi — cust Baghdad-told Mei','Reflective','aoi_barista'),
    mk('葵、お客様、整形外科で勤めてらっしゃるんだって、メイちゃん','Aoi — cust orthopedic-work Mei','Reflective','mei_romantic'),
    mk('葵、雛祭りメニュー、可愛いね、メイちゃん','Aoi — Hina-menu cute Mei','Praising','aoi_barista'),
    mk('葵、お祭りで赤十字の方が、ご寄付呼びかけてたよ、メイちゃん','Aoi — fest Red-Cross donation-called Mei','Reflective','mei_romantic'),
    mk('葵、ダンボールを片付けたら、お店スッキリしたね、メイちゃん','Aoi — cardboard-cleaned store-tidy Mei','Praising','aoi_barista'),
    mk('葵、お客様、グアム旅行のお話されてたね、メイちゃん','Aoi — cust Guam-trip-told Mei','Animated','mei_romantic'),
    mk('葵、近所のスーパーマーケットが新装オープンしたよ、メイちゃん','Aoi — neighbor-supermarket renewal-open Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08437',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがアトリエにこもって絵を描かれたぞ','Gran — youth Dad-atelier-painted','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、バグダッドのお仕事をされてたわよね、あなた?','Yes — Grandpa Baghdad-work, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが整形外科にお世話になったぞ','Gran — youth Dad orthopedic-receive','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お雛様を毎年飾ってらしたわよね、あなた?','Grandpa — Hina-doll annually-displayed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ばあさんが赤十字社のボランティアをされたぞ','Gran — youth gran Red-Cross-volunteer','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お引っ越し時はダンボール何箱も使われたわよね、あなた?','Grandpa — move-time cardboard-many-box used, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがグアム新婚旅行を提案されたぞ','Gran — youth Dad Guam-honeymoon-proposed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、村のスーパーマーケットの開店日を覚えていらしたわよね、あなた?','Grandpa — village-supermarket-open-day remembered, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08438',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんのアトリエ、見に来てね','Sho — Mei-sis-atelier visit','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんからバグダッドの絵本もらったよ','Mei-sis — me Dad-Baghdad-book-received','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんが整形外科に通っていらっしゃるわ','Sho — Grandma orthopedic-attend','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お雛様飾るの好きだよ','Mei-sis — me Hina-decorate like','Eager child','sho_child'),
    mk('翔くん、赤十字病院、お父さんが寄付してらっしゃるわ','Sho — Red-Cross-hosp Dad-donate','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ダンボールでお家ごっこ作ったよ','Mei-sis — me cardboard-playhouse made','Proud child','sho_child'),
    mk('翔くん、お父さんとグアム旅行、楽しみね','Sho — Dad-Guam-trip look-forward','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お母さんとスーパーマーケットでお買物したよ','Mei-sis — me Mom-supermarket-shopping','Eager close','sho_child'),
  ]},
  {id:'conv_08439',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、絵を描くアトリエ作りたいんだろ?','Riku — picture-paint-atelier-want?','Curious teen','sakura_teen'),
    mk('お前、世界史でバグダッドの単元、覚えてるか?桜','You — world-hist Baghdad-unit remember? Sakura','Curious','riku_teen'),
    mk('リク、お前のお父さん、整形外科の先生だろ?','Riku — your Dad-orthopedic-doctor?','Curious','sakura_teen'),
    mk('お前、雛祭りの伝統知ってるか?桜','You — Hina-tradition know? Sakura','Curious','riku_teen'),
    mk('リク、赤十字のボランティア、興味あるんだろ?','Riku — Red-Cross-volunteer interest?','Curious','sakura_teen'),
    mk('お前、ダンボール工作得意だろ?桜','You — cardboard-craft good? Sakura','Praising','riku_teen'),
    mk('リク、お前、家族でグアム行ったろ?','Riku — family-Guam-went?','Curious','sakura_teen'),
    mk('お前、スーパーマーケットでバイトしてんだろ?桜','You — supermarket-part-time? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08440',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが、お家にアトリエを作りたいって','Sho — Dad home-atelier-want','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ニュースでバグダッドのお話聞いたよ','Mom — me news Baghdad-heard','Reflective child','sho_child'),
    mk('翔くん、お祖父ちゃんが整形外科に通っていらっしゃるわ','Sho — Grandpa orthopedic-attend','Reflective','yumiko_mom'),
    mk('ママ、ぼく、雛人形飾るのお手伝いするよ','Mom — me Hina-decorate-help','Proud child','sho_child'),
    mk('翔くん、お父さんが赤十字に寄付してらっしゃるのよ','Sho — Dad Red-Cross-donate','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ダンボールでロボット作ったよ','Mom — me cardboard-robot-made','Proud child','sho_child'),
    mk('翔くん、お父さんと一緒にグアム旅行に行きましょう','Sho — Dad-Guam-trip-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、ママとスーパーマーケットで卵を選んだよ','Mom — me Mom-supermarket-egg-chose','Eager close','sho_child'),
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

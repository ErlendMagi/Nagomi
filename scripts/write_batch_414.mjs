import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_414 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['補う','それでいて','ひっそり','おおよそ','あとがき','困惑','カラダ','集い']
const B_T = ['参事官','占有','便宜','納付','受託','公然','始動','散会']
const C_T = ['催眠','列挙','傾斜','海賊','聴覚','電磁波','服用','墜落']
const D_T = ['ウインドウ','バッファ','パッド','万能','ニセ','ホームステイ','舞踊','アンサンブル']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08241',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんの足りない分は、お父さんが補うわよ','Sho — Grandpa-lack Dad-supplement','Reflective','yumiko_mom'),
    mk('ママ、お父さんは寡黙でいて、それでいて優しいよね','Mom — Dad quiet yet-gentle','Reflective child','sho_child'),
    mk('翔くん、お部屋でひっそり遊んでね','Sho — room quietly-play','Direction','yumiko_mom'),
    mk('ママ、ぼくの宿題、おおよそ終わったよ','Mom — me homework approximately-done','Proud child','sho_child'),
    mk('翔くん、絵本のあとがき、読んだ?','Sho — picture-book afterword read?','Curious','yumiko_mom'),
    mk('ママ、ぼく、お友達の話に困惑しちゃった','Mom — me friend-talk troubled','Wry child','sho_child'),
    mk('翔くん、カラダを大事にね','Sho — body-cherish','Tender','yumiko_mom'),
    mk('ママ、お祖父ちゃんちで親戚の集いがあるよ','Mom — Grandpa-home relatives-gathering','Eager close','sho_child'),
  ]},
  {id:'conv_08242',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、メニューの不足を補う新メニュー、考えようね、メイちゃん','Aoi — menu-lack-supplement new-menu think Mei','Direction','mei_romantic'),
    mk('葵、新作のシンプル、それでいて美味しいね、メイちゃん','Aoi — new simple yet-tasty Mei','Praising','aoi_barista'),
    mk('葵、深夜のお店、ひっそりしてるよね、メイちゃん','Aoi — late-night store quiet Mei','Reflective','mei_romantic'),
    mk('葵、おおよその来客数、把握できたよ、メイちゃん','Aoi — approximate-cust-count grasp Mei','Practical','aoi_barista'),
    mk('葵、メニューブックのあとがき、お洒落にしようね、メイちゃん','Aoi — menu-book-afterword stylish Mei','Eager','mei_romantic'),
    mk('葵、お客様の急なご注文に困惑したよ、メイちゃん','Aoi — cust sudden-order troubled Mei','Wry','aoi_barista'),
    mk('葵、お疲れの時はカラダを休めようね、メイちゃん','Aoi — tired body-rest Mei','Caring','mei_romantic'),
    mk('葵、来週、お客様の集いを企画しようね、メイちゃん','Aoi — next-week cust-gathering plan Mei','Eager close','aoi_barista'),
  ]},
  {id:'conv_08243',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがばあさんの不安を補ってくださったぞ','Gran — youth Dad gran-anxiety supplement','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃんは厳しくて、それでいて優しいお方でしたわよね、あなた?','Yes — Grandpa strict yet-gentle, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、田舎の村はひっそりしてたぞ','Gran — youth countryside-village quiet','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、おおよその家計を毎月計算されたわよね、あなた?','Grandpa — approximate-finance monthly-calc, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの日記のあとがきが面白かったぞ','Gran — youth Dad-diary-afterword interesting','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、新しい仕組みに困惑されたわよね、あなた?','Grandpa — new-system troubled, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがカラダを鍛えてらしたぞ','Gran — youth Dad body-trained','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご親戚の集いをお喜びだったわよね、あなた?','Grandpa — relatives-gathering glad, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08244',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前の弱点、ぼくが補うぜ','Riku — your weakness me-supplement','Praising teen','sakura_teen'),
    mk('お前、口数少なくて、それでいて頼もしいな、桜','You — few-words yet-reliable Sakura','Praising','riku_teen'),
    mk('リク、お前、ひっそり勉強してたろ?','Riku — quietly-studied?','Curious','sakura_teen'),
    mk('お前のテストの点、おおよそ予想どおりか?桜','You — test-score approx-predict? Sakura','Curious','riku_teen'),
    mk('リク、漫画のあとがき、面白いよな','Riku — manga-afterword interesting','Reflective','sakura_teen'),
    mk('お前、突然の発表に困惑したろ?桜','You — sudden-announce troubled? Sakura','Reflective','riku_teen'),
    mk('リク、お前、カラダ作り、頑張ってんな','Riku — body-building try','Praising','sakura_teen'),
    mk('お前、文化祭の集いで踊るんだろ?桜','You — fest-gathering dance? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08245',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんの寂しさを、翔くんが補ってくれるよ','Sho — Mei-sis-loneliness Sho-supplement','Tender','mei_romantic'),
    mk('メイ姉さん、ぼくはおとなしくて、それでいて元気だよ','Mei-sis — me quiet yet-energetic','Proud child','sho_child'),
    mk('翔くん、お父さんは、家でひっそりお仕事してるのよ','Sho — Dad home quietly-work','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、おおよそお勉強の計画立てたよ','Mei-sis — me approximate-study plan-made','Proud child','sho_child'),
    mk('翔くん、絵本のあとがきも読んでみてね','Sho — picture-book-afterword read','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、初めての場所で困惑したよ','Mei-sis — me first-place troubled','Wry child','sho_child'),
    mk('翔くん、お父さんがカラダのこと心配してるわよ','Sho — Dad body-worried','Tender','mei_romantic'),
    mk('メイ姉さん、お祖母ちゃんちで親戚の集い、楽しみだよ','Mei-sis — Grandma-home relatives-gathering look-forward','Eager close','sho_child'),
  ]},
  {id:'conv_08246',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、外務省の参事官と打ち合わせを行え','Our co — MOFA-counselor meeting','Crisp','hiroshi_boss'),
    mk('はい。倉庫の占有面積を整理しました','Yes — Warehouse occupied-area organize','Methodical','kenji_office'),
    mk('当社、お得意様には便宜を図れ','Our co — VIP convenience-arrange','Direction','hiroshi_boss'),
    mk('はい。税金の納付期限を確認しております','Yes — Tax-payment deadline-verify','Update','kenji_office'),
    mk('当社、新規受託業務を増やせ','Our co — new commissioned-biz expand','Direction','hiroshi_boss'),
    mk('はい。新商品の公然たる発表をいたしました','Yes — New-product public-announce did','Update','kenji_office'),
    mk('新システムを始動しろ','New-system start-up','Direction','hiroshi_boss'),
    mk('はい。今日の会議は無事散会いたしました','Yes — Today-mtg safely-adjourned','Close','kenji_office'),
  ]},
  {id:'conv_08247',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('当社、業界団体の参事官と意見交換しましょう','Our co — industry-counselor opin-exchange','Brisk','yuki_office'),
    mk('はい。事務所の占有率を改善します','Yes — Office occupy-rate improve','Cooperative','kenji_office'),
    mk('お得意様への便宜供与は記録に残しましょう','VIP-convenience record','Direction','yuki_office'),
    mk('はい。労働保険の納付を完了しました','Yes — Labor-insurance pay done','Update','kenji_office'),
    mk('新規受託案件を社員に共有しましょう','New commissioned-case staff-share','Direction','yuki_office'),
    mk('はい。新店舗の公然たる開店イベントを企画しました','Yes — New-store public-open event plan','Update','kenji_office'),
    mk('当社、新プロジェクトを始動しましょう','Our co — new-project start','Direction','yuki_office'),
    mk('はい。先ほどの会議、無事散会できました','Yes — Earlier-mtg safely-adjourn','Close','kenji_office'),
  ]},
  {id:'conv_08248',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、文部科学省の参事官と挨拶しろ','Ren — MEXT-counselor greet','Mentor','hiroshi_boss'),
    mk('はい。研究室の占有スペースを記録しております','Yes — Lab occupied-space record','Earnest','ren_uni'),
    mk('蓮、留学生に便宜を図れ','Ren — int-student convenience-arrange','Direction','hiroshi_boss'),
    mk('はい。学費の納付期日を守ります','Yes — Tuition payment-deadline keep','Polite','ren_uni'),
    mk('蓮、産学連携の受託研究にも挑戦しろ','Ren — academia-industry commissioned-research challenge','Direction','hiroshi_boss'),
    mk('はい。研究公然のため学会で発表します','Yes — Research-public conf-present','Earnest','ren_uni'),
    mk('蓮、新実験装置を始動しろ','Ren — new-equip start','Direction','hiroshi_boss'),
    mk('はい。学会終了後、参加者は散会しました','Yes — Post-conf participants-adjourn','Earnest close','ren_uni'),
  ]},
  {id:'conv_08249',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、防犯参事官の制度をご紹介します','Police crime-prev-counselor system-intro','Calm','takeda_officer'),
    mk('はい。警察、押収物の占有期間を明示されますね','Yes — Police seized occupy-period specify','Cooperative','kenji_office'),
    mk('警察、市民に便宜を図る制度を運用しております','Police citizen-convenience system operate','Procedural','takeda_officer'),
    mk('はい。罰金の納付状況を警察、把握ですね','Yes — Fine-payment-status police-grasp','Cooperative','kenji_office'),
    mk('警察、受託捜査の体制を整えております','Police commissioned-inv system arrange','Procedural','takeda_officer'),
    mk('はい。警察、公然たる発表が地域に安心感を与えますね','Yes — Police public-announce region-reassurance','Cooperative','kenji_office'),
    mk('警察、新指揮系統を始動いたしました','Police new-command start','Procedural','takeda_officer'),
    mk('はい。会議が無事散会して、ありがたいです','Yes — Mtg safely-adjourned grateful','Close','kenji_office'),
  ]},
  {id:'conv_08250',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、業界団体の参事官と親交を深められたぞ','Dad — industry-counselor friendship deepened','Sage','hiroshi_elder'),
    mk('はい。お父さんは事務所の占有面積を最大化されました','Yes — Dad office-occupy-area maximized','Commitment','hiroshi_boss'),
    mk('お父さん、お得意様への便宜を惜しまなかった','Dad — VIP-convenience didn\'t-spare','Wistful','hiroshi_elder'),
    mk('はい。お父さんは納付期限を厳守された','Yes — Dad payment-deadline strict','Reflective','hiroshi_boss'),
    mk('お父さん、新規の受託事業を立ち上げられた','Dad — new commissioned-biz launched','Wistful','hiroshi_elder'),
    mk('はい。お父さんは公然と理念を語られた','Yes — Dad publicly ideal-told','Reflective','hiroshi_boss'),
    mk('お父さん、創業初期、自ら工場を始動された','Dad — founding-early self-factory-start','Wistful','hiroshi_elder'),
    mk('はい。お父さん、ご来客を見送ってから散会されました','Yes — Dad visitor-saw-off then-adjourn','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08251',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、催眠療法の有効性を論文で扱っていましたね','Ren — hypnosis-therapy effect paper','Calm','asuka_teacher'),
    mk('はい、優れた俳優を列挙する評論を論文で扱いました','Yes — outstanding-actor list critique paper','Earnest','ren_uni'),
    mk('蓮さん、急傾斜地の防災を論文で扱っていましたね','Ren — steep-slope disaster-prev paper','Reflective','asuka_teacher'),
    mk('はい、海賊船の歴史を論文で扱いました','Yes — pirate-ship history paper','Earnest','ren_uni'),
    mk('動物の聴覚能力を論文で扱っていましたね','Animal-hearing paper','Engaged','asuka_teacher'),
    mk('はい、電磁波の人体への影響を論文で扱いました','Yes — EM-wave human-impact paper','Earnest','ren_uni'),
    mk('蓮さん、薬の長期服用について論文で扱っていましたね','Ren — drug long-use paper','Reflective','asuka_teacher'),
    mk('はい、航空機の墜落事故の原因解析を論文で扱いました','Yes — aircraft-crash cause-analysis paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08252',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('警察、催眠商法による詐欺を取り締まっております','Police hypnosis-sales-fraud crack-down','Calm','takeda_officer'),
    mk('警察、押収品を列挙して報告書をまとめました','Police seized-items list report-compiled','Procedural','takeda_officer'),
    mk('本件、傾斜のある現場を警察、慎重に検証されたんですね','Case slope-scene police-careful-verify','Curious','ren_uni'),
    mk('警察、海賊版商品の摘発を進めております','Police pirated-goods bust advance','Procedural','takeda_officer'),
    mk('本件、目撃者の聴覚情報を警察、参考にされましたか','Case witness-hearing-info police-reference?','Reflective','ren_uni'),
    mk('警察、電磁波を悪用する違法機器も調査中です','Police EM-wave misuse illegal-device inv','Procedural','takeda_officer'),
    mk('本件、容疑者の薬服用歴を警察、確認されたんですね','Case suspect-drug-use-hist police-verify','Reflective','ren_uni'),
    mk('警察、墜落事故の現場検証を行いました','Police crash-scene-verify did','Close','takeda_officer'),
  ]},
  {id:'conv_08253',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、催眠療法の有効性を論文で扱っていましたね','Sakura — hypnosis-therapy paper','Calm','asuka_teacher'),
    mk('はい、優れた俳優を列挙する評論を論文で扱いました','Yes — actor-list critique paper','Earnest teen','sakura_teen'),
    mk('急傾斜地の防災を論文で扱っていましたね','Steep-slope paper','Reflective','asuka_teacher'),
    mk('はい、海賊船の歴史を論文で扱いました','Yes — pirate-ship paper','Earnest','sakura_teen'),
    mk('動物の聴覚能力を論文で扱っていましたね','Animal-hearing paper','Engaged','asuka_teacher'),
    mk('はい、電磁波の人体への影響を論文で扱いました','Yes — EM-wave paper','Earnest','sakura_teen'),
    mk('薬の長期服用について論文で扱っていましたね','Drug long-use paper','Reflective','asuka_teacher'),
    mk('はい、航空機の墜落事故の原因解析を論文で扱いました','Yes — aircraft-crash paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08254',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、催眠療法を医療チームで研究しております','Ren — hypnosis-therapy med-team research','Calm','saito_doctor'),
    mk('症状を列挙して、貴院でカルテに記録されますね、先生','Symptom-list your-hosp chart-record, sensei','Curious','ren_uni'),
    mk('はい、傾斜の急な階段は患者さんに危険なので医療チームでも気をつけます','Yes — Steep-stairs patient-danger med-team careful','Patient','saito_doctor'),
    mk('医療機器の海賊版に貴院も注意されているそうですね、先生','Med-equip pirated your-hosp careful, sensei','Reflective','ren_uni'),
    mk('はい、聴覚障害の患者さんを医療チームでサポートします','Yes — Hearing-impaired med-team support','Patient','saito_doctor'),
    mk('電磁波の人体影響を、貴院も研究なさったんですね、先生','EM-wave-human-impact your-hosp research, sensei','Reflective','ren_uni'),
    mk('はい、薬の服用方法を患者さんに丁寧に説明します','Yes — Drug-use-method patient polite-explain','Patient','saito_doctor'),
    mk('貴院、墜落事故の救急対応もご経験ですね、先生','Your-hosp crash ER experience, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08255',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、催眠的なマーケで顧客を惑わすな','Our co — hypnotic-marketing don\'t-mislead','Crisp','hiroshi_boss'),
    mk('はい。当社の強みを列挙して、プレゼンに使います','Yes — Our strengths list pres-use','Methodical','kenji_office'),
    mk('当社、市場の傾斜に流されない経営しろ','Our co — market-slope-don\'t-flow mgmt','Direction','hiroshi_boss'),
    mk('はい。海賊版コピー商品の取り締まりも進めます','Yes — Pirated-copy crackdown advance','Update','kenji_office'),
    mk('当社、聴覚弱者向け商品も開発しろ','Our co — hearing-weak-target product develop','Direction','hiroshi_boss'),
    mk('はい。社内、電磁波対策も進めております','Yes — In-house EM-wave-counter advance','Update','kenji_office'),
    mk('長期服用される薬の販路を拡大しろ','Long-use drug sales-channel expand','Direction','hiroshi_boss'),
    mk('はい。航空機の墜落事故に関する保険商品も検討中です','Yes — Aircraft-crash insurance-product consider','Close','kenji_office'),
  ]},
  {id:'conv_08256',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お店のショーウインドウ、模様替えしようね、メイちゃん','Aoi — store-display-window redecorate Mei','Eager','mei_romantic'),
    mk('葵、お客様、バッファタイムを設けてご案内したよ、メイちゃん','Aoi — cust buffer-time guide Mei','Practical','aoi_barista'),
    mk('葵、椅子のパッド、新調したら座りやすくなったね、メイちゃん','Aoi — chair-pad renewed sit-easy Mei','Praising','mei_romantic'),
    mk('葵、万能調味料、お料理に使ってるよ、メイちゃん','Aoi — all-purpose-seasoning cook-use Mei','Animated','aoi_barista'),
    mk('葵、ニセの口コミに気をつけようね、メイちゃん','Aoi — fake-review careful Mei','Direction','mei_romantic'),
    mk('葵、お客様がホームステイ留学生の話してたよ、メイちゃん','Aoi — cust home-stay-int-student told Mei','Reflective','aoi_barista'),
    mk('葵、舞踊のお披露目会、お客様喜んでくれたよ、メイちゃん','Aoi — dance-reveal cust-glad Mei','Animated','mei_romantic'),
    mk('葵、店内BGMのアンサンブル、心地よいね、メイちゃん','Aoi — store-BGM ensemble pleasant Mei','Praising close','aoi_barista'),
  ]},
  {id:'conv_08257',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが店のウインドウを磨いてらしたぞ','Gran — youth Dad store-window polished','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃんは時間にバッファをつくる方でしたわよね、あなた?','Yes — Grandpa time-buffer-make person, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは肩のパッドを取り外して着てらしたぞ','Gran — youth Dad shoulder-pad-removed wore','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、万能道具をご愛用だったわよね、あなた?','Grandpa — all-purpose-tool loved, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ばあさんがニセモノに騙されたぞ','Gran — youth gran-fake-deceived','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、海外ホームステイの方を受け入れたわよね、あなた?','Grandpa — overseas home-stay-receive, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは伝統舞踊のお話をされたぞ','Gran — youth Dad-trad-dance told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、合唱のアンサンブルがお好きだったわよね、あなた?','Grandpa — choir-ensemble liked, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08258',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんのお店のショーウインドウ、見に来てね','Sho — Mei-sis-store-display see-come','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとお出かけ前にバッファ時間取るよ','Mei-sis — me Dad-before buffer-time-take','Reflective child','sho_child'),
    mk('翔くん、肩のパッドが入った服、お洒落ね','Sho — shoulder-pad-in clothes stylish','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、万能ナイフ、お父さんに頼まれてるよ','Mei-sis — me all-purpose-knife Dad-asked','Eager child','sho_child'),
    mk('翔くん、ニセの誘いには気をつけてね','Sho — fake-invite careful','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、外国の友達のホームステイに憧れる','Mei-sis — me foreign-friend home-stay admire','Eager child','sho_child'),
    mk('翔くん、舞踊の発表会、頑張ってね','Sho — dance-recital try','Encouraging','mei_romantic'),
    mk('メイ姉さん、ぼく、合唱でアンサンブル歌ったよ','Mei-sis — me choir-ensemble sang','Proud close','sho_child'),
  ]},
  {id:'conv_08259',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、駅前のウインドウショッピング好きだろ?','Riku — station-window-shopping like?','Curious teen','sakura_teen'),
    mk('お前、テスト勉強にバッファ時間取れたか?桜','You — test-prep buffer-time-take? Sakura','Curious','riku_teen'),
    mk('リク、お前、肩パッド入った制服似合うな','Riku — shoulder-pad-in uniform suits','Praising','sakura_teen'),
    mk('お前、家庭科の万能ソース作ったろ?桜','You — home-ec all-purpose-sauce made? Sakura','Curious','riku_teen'),
    mk('リク、お前、ニセの噂に惑わされるなよ','Riku — fake-rumor don\'t-be-misled','Direction','sakura_teen'),
    mk('お前、夏休みホームステイ行きたいんだろ?桜','You — summer home-stay want? Sakura','Curious','riku_teen'),
    mk('リク、お前、文化祭の舞踊、頑張ったな','Riku — fest-dance tried','Praising','sakura_teen'),
    mk('お前のお姉さん、合唱のアンサンブル得意だろ?桜','You — your sis choir-ensemble good? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08260',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが、お店のウインドウディスプレイ、お好きなのよ','Sho — Dad store-window-display likes','Reflective','yumiko_mom'),
    mk('ママ、ぼく、宿題にバッファ時間入れたよ','Mom — me homework buffer-time-added','Proud child','sho_child'),
    mk('翔くん、お父さんの肩パッドの入ったコート、お洒落よね','Sho — Dad shoulder-pad-in coat stylish','Reflective','yumiko_mom'),
    mk('ママ、ぼく、万能じゃないって、お祖父ちゃんに言われたよ','Mom — me not-all-purpose Grandpa-said','Wry child','sho_child'),
    mk('翔くん、ニセのメッセージに気をつけてね','Sho — fake-message careful','Direction','yumiko_mom'),
    mk('ママ、ぼく、お友達のホームステイ先に遊びに行きたい','Mom — me friend-home-stay-place visit-want','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんが日本舞踊習ってたのよ','Sho — Grandma Japanese-dance-learned','Reflective','yumiko_mom'),
    mk('ママ、ぼく、合唱コンクールでアンサンブル歌ったよ','Mom — me choir-comp ensemble-sang','Proud close','sho_child'),
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

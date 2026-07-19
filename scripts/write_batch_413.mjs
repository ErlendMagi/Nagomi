import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_413 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['見知らぬ','さんざん','もどる','気まま','だんだんと','何気なく','アナタ','ありとあらゆる']
const B_T = ['本稿','索引','貯蔵','税源','不服','優待','競売','課金']
const C_T = ['希薄','発端','制覇','切実','偏差','弁論','捕獲','子宮']
const D_T = ['漱石','空軍','レジャー','ヘリコプター','スタディ','ベクトル','マンハッタン','マダム']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08221',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、見知らぬ人にはついていかないでね','Sho — unknown-person don\'t-follow','Direction','yumiko_mom'),
    mk('ママ、昨日のテスト、さんざんだったよ','Mom — yesterday-test horrible','Wry child','sho_child'),
    mk('翔くん、お部屋にもどるまで気をつけてね','Sho — until-room-return careful','Caring','yumiko_mom'),
    mk('ママ、お休みは気ままに過ごしたいな','Mom — off-day freely spend-want','Eager child','sho_child'),
    mk('翔くん、だんだんと寒くなってきたわね','Sho — gradually cold-becoming','Reflective','yumiko_mom'),
    mk('ママ、何気なく窓を開けたら、お祖父ちゃんがいたよ','Mom — casually-window-opened Grandpa-existed','Animated child','sho_child'),
    mk('翔くん、アナタが嫌がる事は絶対しないよ','Sho — you-dislike things absolutely-don\'t','Tender','yumiko_mom'),
    mk('ママ、ぼく、ありとあらゆる遊びを試したいよ','Mom — me all-kinds-of play try-want','Eager close','sho_child'),
  ]},
  {id:'conv_08222',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、見知らぬお客様、迷ってお店に入ってきたよ、メイちゃん','Aoi — unknown-cust wandered-in store Mei','Reflective','mei_romantic'),
    mk('葵、お客様、新メニューにさんざん文句を言われたよ、メイちゃん','Aoi — cust new-menu horribly-complained Mei','Wry','aoi_barista'),
    mk('葵、お客様がお店にもどるかしらね、メイちゃん','Aoi — cust store-return? Mei','Reflective','mei_romantic'),
    mk('葵、気ままに過ごせる時間って大切よね、メイちゃん','Aoi — freely spend-time important Mei','Reflective','aoi_barista'),
    mk('葵、だんだんとお店が忙しくなってきたね、メイちゃん','Aoi — gradually store-busy Mei','Reflective','mei_romantic'),
    mk('葵、何気なく外を見たら、お祭りの行列だったよ、メイちゃん','Aoi — casually-outside-saw fest-parade Mei','Animated','aoi_barista'),
    mk('葵、アナタの作るケーキ、いつも美味しいわよ、メイちゃん','Aoi — you-make cake always-tasty Mei','Praising','mei_romantic'),
    mk('葵、ありとあらゆるドリンクを試してみたいわね、メイちゃん','Aoi — all-kinds-of drink try-want Mei','Eager close','aoi_barista'),
  ]},
  {id:'conv_08223',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、見知らぬ村人が私たちを助けてくれたぞ','Gran — youth unknown-villager helped-us','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、戦時中、さんざんなご苦労をされたわよね、あなた?','Yes — Grandpa wartime horrible-hardship, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが村にもどる日を待っていたぞ','Gran — youth Dad village-return-day waited','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年は気ままに暮らしてらしたわよね、あなた?','Grandpa — late-yrs freely lived, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがだんだんと優しくなられたぞ','Gran — youth Dad gradually-gentle','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、何気なくお花を持って来てくださったわよね、あなた?','Grandpa — casually-flower-brought, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「アナタが大事」と仰ったぞ','Gran — youth Dad "you-precious" said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ありとあらゆる困難を乗り越えられたわよね、あなた?','Grandpa — all-kinds-of difficulty overcame, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08224',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、見知らぬ人に話しかけるなよ','Riku — unknown-person don\'t-talk','Direction teen','sakura_teen'),
    mk('お前、昨日のテスト、さんざんだったろ?桜','You — yesterday-test horrible? Sakura','Curious','riku_teen'),
    mk('リク、お前、自分の席にもどれよ','Riku — own-seat return','Direction','sakura_teen'),
    mk('お前、休日は気ままに過ごすんだろ?桜','You — off-day freely spend? Sakura','Curious','riku_teen'),
    mk('リク、だんだんと部活が楽しくなってきたな','Riku — gradually club-fun','Reflective','sakura_teen'),
    mk('お前、何気なくぼくに「ありがとう」って言ったろ?桜','You — casually me "arigatou" said? Sakura','Reflective','riku_teen'),
    mk('リク、アナタが応援してくれて嬉しいよ','Riku — you-cheer glad','Tender','sakura_teen'),
    mk('お前、ありとあらゆるスポーツやってんな、桜','You — all-kinds-of sports do Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08225',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、見知らぬ人にはお話しないでね','Sho — unknown-person don\'t-talk','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、運動会でさんざんだったよ','Mei-sis — me sports-day horrible','Wry child','sho_child'),
    mk('翔くん、お家にもどる時は気をつけてね','Sho — home-return time careful','Caring','mei_romantic'),
    mk('メイ姉さん、ぼく、お休みは気ままに遊びたいよ','Mei-sis — me off-day freely play-want','Eager child','sho_child'),
    mk('翔くん、だんだんとお祖母ちゃんと仲よくなってきたわね','Sho — gradually Grandma-close','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、何気なくお父さんの言葉を覚えてるよ','Mei-sis — me casually Dad-words remember','Reflective child','sho_child'),
    mk('翔くん、アナタが頑張る姿、メイ姉さん嬉しいわ','Sho — you-try figure Mei-sis-glad','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ありとあらゆるおもちゃ集めたいな','Mei-sis — me all-kinds-of toy collect-want','Eager close','sho_child'),
  ]},
  {id:'conv_08226',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、本稿の修正を社内で議論しろ','Our co — this-paper revision in-house discuss','Crisp','hiroshi_boss'),
    mk('はい。商品カタログの索引を整備しております','Yes — Product-catalog index arrange','Methodical','kenji_office'),
    mk('当社、在庫貯蔵庫の温度管理を徹底しろ','Our co — stock-storage temp-mgmt thorough','Direction','hiroshi_boss'),
    mk('はい。新規税源開拓の調査を進めております','Yes — New tax-source survey advance','Update','kenji_office'),
    mk('当社、お客様の不服に丁寧に対応しろ','Our co — cust-complaint polite-resp','Direction','hiroshi_boss'),
    mk('はい。優待制度を会員様に新設いたしました','Yes — Privilege-system member newly-set','Update','kenji_office'),
    mk('当社、競売参加のため資金を準備しろ','Our co — auction-attend fund prep','Direction','hiroshi_boss'),
    mk('はい。新サービスの課金体系を整えました','Yes — New-service billing-system arrange','Close','kenji_office'),
  ]},
  {id:'conv_08227',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('業界紙の本稿を読み比べましょう','Industry-paper this-paper compare','Brisk','yuki_office'),
    mk('はい。書類索引を社内ポータルに掲載しました','Yes — Doc-index portal-posted','Cooperative','kenji_office'),
    mk('原材料の貯蔵スペースを拡大しましょう','Raw-mat-storage expand','Direction','yuki_office'),
    mk('はい。地方税源の動向を注視しております','Yes — Local-tax-source trend watch','Update','kenji_office'),
    mk('お客様の不服申し立てに迅速対応しましょう','Cust-complaint-claim quick-resp','Direction','yuki_office'),
    mk('はい。会員様への優待企画を進めております','Yes — Member-privilege plan advance','Update','kenji_office'),
    mk('社員割引で社内競売を実施しましょう','Staff-discount in-house-auction conduct','Direction','yuki_office'),
    mk('はい。サブスク課金の試算を出しました','Yes — Subscription-billing estimate produced','Close','kenji_office'),
  ]},
  {id:'conv_08228',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、本稿の引用文献を確認しろ','Ren — this-paper citations verify','Mentor','hiroshi_boss'),
    mk('はい。論文末尾に索引を加えました','Yes — Paper-end index added','Earnest','ren_uni'),
    mk('蓮、研究データを安全に貯蔵しろ','Ren — research-data safely-store','Direction','hiroshi_boss'),
    mk('はい。研究費の税源についても学んでおります','Yes — Research-fund tax-source learn','Polite','ren_uni'),
    mk('蓮、査読の不服にも冷静に対応しろ','Ren — peer-review-complaint cool-resp','Direction','hiroshi_boss'),
    mk('はい。学会の学生優待制度を活用しております','Yes — Conf student-privilege use','Earnest','ren_uni'),
    mk('蓮、古書競売で資料を探してみろ','Ren — antiquarian-auction material-search','Direction','hiroshi_boss'),
    mk('はい。データベース課金料を予算に組みます','Yes — DB-billing budget-incorporate','Earnest close','ren_uni'),
  ]},
  {id:'conv_08229',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、本稿の事件報告を共有しております','Police this-paper case-report share','Calm','takeda_officer'),
    mk('はい。警察、事件索引を新しく整備されたんですね','Yes — Police case-index newly-arrange','Cooperative','kenji_office'),
    mk('警察、押収物を安全な貯蔵庫に保管しております','Police seized safe-storage preserve','Procedural','takeda_officer'),
    mk('はい。警察、税源確保にも貢献されているそうですね','Yes — Police tax-source-secure contrib','Cooperative','kenji_office'),
    mk('警察、市民の不服申し立てに丁寧に対応しております','Police citizen-complaint polite-resp','Procedural','takeda_officer'),
    mk('はい。被害者向け優待制度のご案内ありがたいです','Yes — Victim-privilege info grateful','Cooperative','kenji_office'),
    mk('警察、押収品競売の手続きを進めております','Police seized-auction procedure advance','Procedural','takeda_officer'),
    mk('はい。違反者への課金状況を確認させていただきました','Yes — Violator-billing-status verified','Close','kenji_office'),
  ]},
  {id:'conv_08230',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、業界誌の本稿に何度も寄稿されたぞ','Dad — industry-mag this-paper many-contrib','Sage','hiroshi_elder'),
    mk('はい。お父さんは商品索引にこだわられた','Yes — Dad product-index particular','Commitment','hiroshi_boss'),
    mk('お父さん、創業初期、地下貯蔵庫を確保された','Dad — founding-early underground-storage secured','Wistful','hiroshi_elder'),
    mk('はい。お父さんは税源を生かす経営をなさいました','Yes — Dad tax-source-use mgmt did','Reflective','hiroshi_boss'),
    mk('お父さん、社員の不服には真摯にお向き合いだった','Dad — staff-complaint sincere-faced','Wistful','hiroshi_elder'),
    mk('はい。お父さんは優待制度を社員に贈られた','Yes — Dad privilege-system staff-gave','Reflective','hiroshi_boss'),
    mk('お父さん、競売で歴史ある物件を取得されたぞ','Dad — auction historic-property acquired','Wistful','hiroshi_elder'),
    mk('はい。お父さんは課金体系も自ら考案された','Yes — Dad billing-system self-devised','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08231',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、地方の人口希薄化を論文で扱っていましたね','Ren — region-population-rare paper','Calm','asuka_teacher'),
    mk('はい、紛争の発端を論文で扱いました','Yes — conflict-origin paper','Earnest','ren_uni'),
    mk('蓮さん、リーグ制覇の戦略を論文で扱っていましたね','Ren — league-domination paper','Reflective','asuka_teacher'),
    mk('はい、難民の切実な状況を論文で扱いました','Yes — refugee desperate-situation paper','Earnest','ren_uni'),
    mk('教育の地域偏差を論文で扱っていましたね','Edu-region-variance paper','Engaged','asuka_teacher'),
    mk('はい、伝統的な弁論術を論文で扱いました','Yes — trad-rhetoric paper','Earnest','ren_uni'),
    mk('蓮さん、絶滅危惧種の捕獲規制を論文で扱っていましたね','Ren — endangered-species capture-reg paper','Reflective','asuka_teacher'),
    mk('はい、子宮頸がんの予防医療を論文で扱いました','Yes — cervix-cancer prev-med paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08232',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、希薄な手がかりを警察、慎重に分析されました','Case rare-clue police-careful-analyze','Calm','takeda_officer'),
    mk('警察、事件の発端を解明されたんですね','Police case-origin solved, gratitude','Curious','ren_uni'),
    mk('本件、犯罪組織制覇を警察、成し遂げました','Case crime-org-domination police-achieve','Procedural','takeda_officer'),
    mk('本件、被害者の切実な訴えに警察、応えられたんですね','Case victim-desperate appeal police-answered','Reflective','ren_uni'),
    mk('警察、犯罪率の地域偏差を分析しております','Police crime-region-variance analyze','Procedural','takeda_officer'),
    mk('本件、被告人の弁論を警察も傍聴されたんですね','Case defendant-rhetoric police-attend','Reflective','ren_uni'),
    mk('警察、密漁団の捕獲措置をとりました','Police poacher-capture measure-took','Procedural','takeda_officer'),
    mk('本件、子宮内手術の医療事件を警察、捜査中ですね','Case in-uterus-surgery med-case police-inv, gratitude','Reflective close','ren_uni'),
  ]},
  {id:'conv_08233',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、地方の人口希薄化を論文で扱っていましたね','Sakura — region-pop-rare paper','Calm','asuka_teacher'),
    mk('はい、紛争の発端を論文で扱いました','Yes — conflict-origin paper','Earnest teen','sakura_teen'),
    mk('リーグ制覇の戦略を論文で扱っていましたね','League-domination paper','Reflective','asuka_teacher'),
    mk('はい、難民の切実な状況を論文で扱いました','Yes — refugee-desperate paper','Earnest','sakura_teen'),
    mk('教育の地域偏差を論文で扱っていましたね','Edu-variance paper','Engaged','asuka_teacher'),
    mk('はい、伝統的な弁論術を論文で扱いました','Yes — trad-rhetoric paper','Earnest','sakura_teen'),
    mk('絶滅危惧種の捕獲規制を論文で扱っていましたね','Endangered-capture paper','Reflective','asuka_teacher'),
    mk('はい、子宮頸がんの予防医療を論文で扱いました','Yes — cervix-cancer prev paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08234',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、医療資源が希薄な地域を医療チームで支援しております','Ren — med-resource-rare area med-team support','Calm','saito_doctor'),
    mk('感染症の発端を、貴院、追跡されたんですね、先生','Infection-origin your-hosp tracked, sensei','Curious','ren_uni'),
    mk('はい、特定病の制覇を目指して医療チームは研究しております','Yes — Specific-disease-dominate aim med-team research','Patient','saito_doctor'),
    mk('切実な医療相談を、貴院、断らないんですね、先生','Desperate-med-consult your-hosp don\'t-refuse, sensei','Reflective','ren_uni'),
    mk('はい、検査値の偏差を医療チームでも丁寧に評価します','Yes — Test-value-variance med-team careful-eval','Patient','saito_doctor'),
    mk('貴院、医療弁論大会にも参加されておられますね、先生','Your-hosp med-rhetoric-comp attend, sensei','Reflective','ren_uni'),
    mk('はい、外来動物の捕獲時の応急処置も医療チームで行います','Yes — Invasive-animal capture ER med-team do','Patient','saito_doctor'),
    mk('貴院、子宮検診をいち早く導入されたとのこと、先生','Your-hosp cervix-screening early-intro, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08235',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、需要が希薄な地域からは撤退しろ','Our co — demand-rare region withdraw','Crisp','hiroshi_boss'),
    mk('はい。新規参入の発端を明確にいたします','Yes — New-entry origin clarify','Methodical','kenji_office'),
    mk('当社、シェア制覇を目指せ','Our co — share-dominate aim','Direction','hiroshi_boss'),
    mk('はい。お客様の切実なご要望に応えます','Yes — Cust-desperate request answer','Update','kenji_office'),
    mk('地域別売上の偏差を分析しろ','Region-sales variance analyze','Direction','hiroshi_boss'),
    mk('はい。社内弁論大会で新人を発掘します','Yes — In-house-rhetoric-comp newcomer-find','Update','kenji_office'),
    mk('競合の動向を捕獲して報告しろ','Competitor-trend capture report','Direction','hiroshi_boss'),
    mk('はい。子宮頸がんに関する社員啓発も行います','Yes — Cervix-cancer staff-aware also-do','Close','kenji_office'),
  ]},
  {id:'conv_08236',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様が漱石の文庫本、読んでらしたよ、メイちゃん','Aoi — cust Soseki-paperback read Mei','Reflective','mei_romantic'),
    mk('葵、お父さんの友人が、空軍の方らしいよ、メイちゃん','Aoi — Dad-friend air-force-person Mei','Reflective','aoi_barista'),
    mk('葵、お休みは、ぼくとレジャーに行こうね、メイちゃん','Aoi — off-day me-with leisure-go Mei','Eager','mei_romantic'),
    mk('葵、テレビでヘリコプター中継してたね、メイちゃん','Aoi — TV helicopter-broadcast Mei','Animated','aoi_barista'),
    mk('葵、お客様、スタディコーナーがあったら嬉しいって、メイちゃん','Aoi — cust study-corner-exist glad Mei','Reflective','mei_romantic'),
    mk('葵、お料理のベクトル、考え直そうね、メイちゃん','Aoi — dish-direction rethink Mei','Direction','aoi_barista'),
    mk('葵、マンハッタンスタイルのカクテル、人気よね、メイちゃん','Aoi — Manhattan-style cocktail popular Mei','Praising','mei_romantic'),
    mk('葵、お客様の中にマダムって呼ばれる方、いらしたね、メイちゃん','Aoi — cust madam-called person exist Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08237',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは漱石を読んでらしたぞ','Gran — youth Dad Soseki-read','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、空軍の方とお話されたわよね、あなた?','Yes — Grandpa air-force-talk, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんとレジャーランドに行ったぞ','Gran — youth Dad-leisure-land went','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ヘリコプターの音に驚かれたわよね、あなた?','Grandpa — helicopter-sound surprised, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがケーススタディを学ばれたぞ','Gran — youth Dad case-study learned','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、数学のベクトルに苦戦されてたわよね、あなた?','Grandpa — math-vector struggled, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはマンハッタンの記事を読まれたぞ','Gran — youth Dad Manhattan-article read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、上品なマダムにご挨拶されたわよね、あなた?','Grandpa — refined-madam-greeted, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08238',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、漱石の本を読んでみたいな','Sho — Mei-sis Soseki read-want','Eager','mei_romantic'),
    mk('メイ姉さん、お父さんの友達が空軍の人なんだって','Mei-sis — Dad-friend air-force-person','Eager child','sho_child'),
    mk('翔くん、お父さんとレジャー施設行ったの?','Sho — Dad-leisure-facility went?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、テレビでヘリコプター見たよ','Mei-sis — me TV helicopter saw','Eager child','sho_child'),
    mk('翔くん、お部屋にスタディスペース作ろうね','Sho — room study-space make','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、ベクトルって難しそう','Mei-sis — me vector difficult-look','Curious child','sho_child'),
    mk('翔くん、メイ姉さん、マンハッタンの写真集、見せてあげる','Sho — Mei-sis Manhattan-photo-book show','Tender','mei_romantic'),
    mk('メイ姉さん、お祖母ちゃんはマダムって呼ばれるの好きだよ','Mei-sis — Grandma madam-called-like','Reflective close','sho_child'),
  ]},
  {id:'conv_08239',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、現代文で漱石やったろ?','Riku — modern-Japanese Soseki did?','Curious teen','sakura_teen'),
    mk('お前、空軍に憧れてんのか?桜','You — air-force admire? Sakura','Curious','riku_teen'),
    mk('リク、お前のレジャープラン教えてくれよ','Riku — your leisure-plan tell','Curious','sakura_teen'),
    mk('お前、テレビでヘリコプター見たろ?桜','You — TV helicopter saw? Sakura','Curious','riku_teen'),
    mk('リク、お前、ケーススタディ得意なのか?','Riku — case-study good?','Curious','sakura_teen'),
    mk('お前、数学のベクトル、わかるか?桜','You — math-vector understand? Sakura','Curious','riku_teen'),
    mk('リク、お前のお父さん、マンハッタン出張行ったろ?','Riku — your Dad Manhattan-biz-trip?','Curious','sakura_teen'),
    mk('お前のお母さん、マダムって感じだよな、桜','You — your Mom madam-feel Sakura','Reflective close','riku_teen'),
  ]},
  {id:'conv_08240',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんは漱石の小説を読んでらっしゃるわよ','Sho — Dad Soseki-novel read','Reflective','yumiko_mom'),
    mk('ママ、ぼくのお祖父ちゃんが、昔空軍だったんだって','Mom — me Grandpa once air-force','Eager child','sho_child'),
    mk('翔くん、お父さんとレジャー施設に行きましょう','Sho — Dad-leisure-facility go','Tender','yumiko_mom'),
    mk('ママ、ぼく、空のヘリコプター見たよ','Mom — me sky-helicopter saw','Eager child','sho_child'),
    mk('翔くん、ぼくのお部屋にスタディスペース作ろうね','Sho — me-room study-space make','Reflective','yumiko_mom'),
    mk('ママ、ぼく、数学のベクトル、お父さんに教わるよ','Mom — me math-vector Dad-learn','Eager child','sho_child'),
    mk('翔くん、お父さん、マンハッタンに留学してたのよ','Sho — Dad Manhattan-studied-abroad','Reflective','yumiko_mom'),
    mk('ママ、お祖母ちゃんって、マダムって感じよね','Mom — Grandma madam-feel','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_400 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['苦しん','吹い','溶け','埋める','泣か','空っぽ','傷つく','嫌がる']
const B_T = ['勝てる','そろえ','置け','絞ら','読み直し','在り方','実装','低減']
const C_T = ['照らし','記さ','屈し','残留','広範囲','生じる','通念','護衛']
const D_T = ['泣ける','競っ','上っ','臨む','抜粋','シーツ','出迎え','ハプニング']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_07961',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖母ちゃん、長く苦しんでらしたから心配だわ','Sho — Grandma suffering-long worry','Reflective','yumiko_mom'),
    mk('ママ、お父さんが風船を吹いてくれたよ','Mom — Dad balloon-blew','Eager child','sho_child'),
    mk('翔くん、アイスが溶けるわよ','Sho — ice-cream melts','Direction','yumiko_mom'),
    mk('ママ、お庭の穴をぼくが埋めるね','Mom — garden-hole me-fill','Animated child','sho_child'),
    mk('翔くん、お祖父ちゃんは泣かないお人よ','Sho — Grandpa don\'t-cry person','Reflective','yumiko_mom'),
    mk('ママ、ぼくの貯金箱、空っぽだよ','Mom — me piggy-bank empty','Wry child','sho_child'),
    mk('翔くん、お友達を傷つく言葉、絶対ダメよ','Sho — friend-hurt words absolutely-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、お野菜を嫌がるよ','Mom — me veg dislike','Wry close','sho_child'),
  ]},
  {id:'conv_07962',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご病気で苦しんでらしたって、メイちゃん','Aoi — cust illness-suffering Mei','Reflective','mei_romantic'),
    mk('葵、お祭りで風船を吹いてあげたよ、メイちゃん','Aoi — fest balloon-blew Mei','Animated','aoi_barista'),
    mk('葵、生クリーム、溶けちゃうわよ、メイちゃん','Aoi — cream melt-will Mei','Direction','mei_romantic'),
    mk('葵、お庭の穴を業者さんに埋めるよう頼んだよ、メイちゃん','Aoi — garden-hole vendor-fill asked Mei','Practical','aoi_barista'),
    mk('葵、悲しい映画でも泣かないお客様、メイちゃん','Aoi — sad-movie even don\'t-cry cust Mei','Reflective','mei_romantic'),
    mk('葵、冷蔵庫、もう空っぽよ、メイちゃん','Aoi — fridge already empty Mei','Wry','aoi_barista'),
    mk('葵、お客様の心を傷つくこと、絶対避けたい、メイちゃん','Aoi — cust-heart-hurt absolutely avoid Mei','Earnest','mei_romantic'),
    mk('葵、お客様、辛いお料理を嫌がるみたい、メイちゃん','Aoi — cust spicy-dislike seem Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_07963',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さん、お腰で苦しんでらしたぞ、覚えてる?','Gran — youth Dad back-suffering, remember?','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、笛を吹いてくださったわよね、あなた?','Yes — Grandpa flute-blew, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、夏のお茶、すぐ溶けてしまったぞ、覚えてる?','Gran — summer-tea quickly-melted, remember?','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、池を埋めるご決断、なさったわよね、あなた?','Grandpa — pond-fill decision-made, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さん、決して泣かないお方だったぞ、覚えてる?','Gran — Dad never don\'t-cry person, remember?','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭が空っぽだとさみしがられたわよね、あなた?','Grandpa — garden-empty lonely-felt, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、誰かを傷つく言葉は決して、お使いにならなかったぞ','Gran — anyone-hurt words never-used','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、辛いものを嫌がるお方だったわよね、あなた?','Grandpa — spicy dislike person, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_07964',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、テストで苦しんでたな','Riku — you test-suffered','Wry teen','sakura_teen'),
    mk('お前、ハーモニカ吹いてたろ?桜','You — harmonica-blowing? Sakura','Curious','riku_teen'),
    mk('リク、アイス溶けるぜ','Riku — ice melts','Direction','sakura_teen'),
    mk('お前、砂場の穴埋めろよ、桜','You — sandbox-hole fill, Sakura','Direction','riku_teen'),
    mk('リク、お前、泣かない約束、覚えてるか?','Riku — don\'t-cry promise remember?','Curious','sakura_teen'),
    mk('お前のカバン、空っぽじゃん、桜','Your bag empty, Sakura','Teasing','riku_teen'),
    mk('リク、誰かを傷つく行為、絶対やめろよ','Riku — anyone-hurt acts stop','Direction','sakura_teen'),
    mk('お前、ピーマン嫌がるくせに、桜','You — green-pepper dislike-but, Sakura','Teasing close','riku_teen'),
  ]},
  {id:'conv_07965',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、お腰で苦しんでた時期あったの','Sho — Mei-sis back-suffered period','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと風船を吹いたよ','Mei-sis — me Dad-balloon blew','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんのお氷、溶けちゃうわよ','Sho — grandma-ice melts','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと砂浜の穴を埋めるね','Mei-sis — me Dad-with beach-hole fill','Animated child','sho_child'),
    mk('翔くん、お父さんは泣かない人よ','Sho — Dad don\'t-cry person','Reflective','mei_romantic'),
    mk('メイ姉さん、お家の冷蔵庫、空っぽだったよ','Mei-sis — fridge empty-was','Wry child','sho_child'),
    mk('翔くん、お友達を傷つく言葉、ダメよ','Sho — friend-hurt words no','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お薬を嫌がるけど、頑張る','Mei-sis — me medicine dislike-but try','Earnest close','sho_child'),
  ]},
  {id:'conv_07966',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、競合に勝てる戦略を立てろ','Our co — competitor-can-beat strategy plan','Crisp','hiroshi_boss'),
    mk('はい。書類をそろえております','Yes — Docs aligning','Methodical','kenji_office'),
    mk('資料をきちんと置けるよう棚を増やせ','Docs place-can-properly shelf-add','Direction','hiroshi_boss'),
    mk('はい。当社、新製品ラインを絞らせていただきました','Yes — Our new-product-line narrowed','Update','kenji_office'),
    mk('契約書を読み直して報告しろ','Contract re-read report','Direction','hiroshi_boss'),
    mk('はい。事業の在り方を見直しております','Yes — Biz form review','Update','kenji_office'),
    mk('新システムを実装しろ','New-system implement','Direction','hiroshi_boss'),
    mk('はい。経費低減を進めております','Yes — Expense-reduce advance','Close','kenji_office'),
  ]},
  {id:'conv_07967',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('当社、ライバル社に勝てる商品を出しましょう','Our co — rival-beat product release','Brisk','yuki_office'),
    mk('はい。資料をそろえております','Yes — Docs align','Cooperative','kenji_office'),
    mk('社員、資料を置けるロッカー、増やしますか','Staff docs-place locker add?','Direction','yuki_office'),
    mk('はい。広告予算を絞らせていただきました','Yes — Ad-budget narrowed','Update','kenji_office'),
    mk('提案書を読み直して、再提出しましょう','Proposal re-read re-submit','Direction','yuki_office'),
    mk('はい。会議の在り方を見直しております','Yes — Mtg form review','Update','kenji_office'),
    mk('社内SNSを実装しましょう','In-house-SNS implement','Direction','yuki_office'),
    mk('はい。在庫低減を進めております','Yes — Stock-reduce advance','Close','kenji_office'),
  ]},
  {id:'conv_07968',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、君は学界で勝てる力を持っている','Ren — you acad-can-beat have','Mentor','hiroshi_boss'),
    mk('はい。論文の資料をそろえております','Yes — Paper-docs aligning','Earnest','ren_uni'),
    mk('蓮、研究器具を置ける場所、確保しろ','Ren — equip-place secure','Direction','hiroshi_boss'),
    mk('はい。研究テーマを絞らせていただきました','Yes — Research-theme narrowed','Polite','ren_uni'),
    mk('蓮、論文を読み直して投稿しろ','Ren — paper re-read submit','Direction','hiroshi_boss'),
    mk('はい。研究者の在り方を考えております','Yes — Researcher form think','Earnest','ren_uni'),
    mk('蓮、新アルゴリズムを実装しろ','Ren — new-algorithm implement','Direction','hiroshi_boss'),
    mk('はい。実験コストの低減に努めております','Yes — Experiment-cost reduce try','Earnest close','ren_uni'),
  ]},
  {id:'conv_07969',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、犯罪に勝てる体制を整えております','Police crime-can-beat system arrange','Calm','takeda_officer'),
    mk('はい。警察、必要な書類をそろえてくださりありがたいです','Yes — Police need-docs align grateful','Cooperative','kenji_office'),
    mk('警察、押収物を置ける保管庫を強化しております','Police seized-place storage strengthen','Procedural','takeda_officer'),
    mk('はい。警察、容疑者を絞らせるご進展ありがたいです','Yes — Police suspect narrow progress grateful','Cooperative','kenji_office'),
    mk('警察、調書を読み直して再聴取いたします','Police statement re-read re-interview','Procedural','takeda_officer'),
    mk('はい。地域警備の在り方を警察ご検討中ですね','Yes — Region-sec form police-consider','Cooperative','kenji_office'),
    mk('警察、新たな防犯システムを実装いたします','Police new crime-prev-system implement','Procedural','takeda_officer'),
    mk('はい。犯罪低減、警察のお力ありがたいです','Yes — Crime-reduce police-power grateful','Close','kenji_office'),
  ]},
  {id:'conv_07970',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、市場に勝てる商品を作ったぞ','Dad — market-can-beat product made','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員をそろえる名手でした','Yes — Dad staff-align master','Commitment','hiroshi_boss'),
    mk('お父さん、社員が私物を置ける棚をご用意なさった','Dad — staff personal-place shelf prepared','Wistful','hiroshi_elder'),
    mk('はい。お父さんは予算を絞らせる経営者でした','Yes — Dad budget-narrow exec','Reflective','hiroshi_boss'),
    mk('お父さん、契約書を読み直す習慣をお持ちだった','Dad — contract re-read habit had','Wistful','hiroshi_elder'),
    mk('はい。お父さんの会社の在り方、引き継いでおります','Yes — Dad co-form inherit','Reflective','hiroshi_boss'),
    mk('お父さん、新システムを早く実装される方だった','Dad — new-system early implement person','Wistful','hiroshi_elder'),
    mk('はい。お父さんが進められた低減策、続けております','Yes — Dad-led reduce-policy continue','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_07971',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、月明かりが照らした風景を論文で扱っていましたね','Ren — moonlight-lit scenery paper','Calm','asuka_teacher'),
    mk('はい、古文書に記された伝承を論文で扱いました','Yes — ancient-doc recorded folklore paper','Earnest','ren_uni'),
    mk('権力に屈した思想家を論文で扱っていましたね','Power-bowed thinker paper','Reflective','asuka_teacher'),
    mk('はい、海洋に残留する化学物質を論文で扱いました','Yes — ocean-residual chemicals paper','Earnest','ren_uni'),
    mk('広範囲に影響を及ぼす地震を論文で扱っていましたね','Wide-range impact-earthquake paper','Engaged','asuka_teacher'),
    mk('はい、ストレスから生じる病を論文で扱いました','Yes — stress-cause illness paper','Earnest','ren_uni'),
    mk('古い社会通念を覆した運動を論文で扱っていましたね','Old social-norm overturn movement paper','Reflective','asuka_teacher'),
    mk('はい、要人の護衛体制を論文で扱いました','Yes — VIP-guard system paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_07972',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、街灯が照らした通りを警察、捜査しております','Case streetlight-lit street police-inv','Calm','takeda_officer'),
    mk('本件、記された手書きメモを警察、解読されたんですね','Case recorded handwriting police-decode','Curious','ren_uni'),
    mk('本件、容疑者が屈した取調べを警察、進めました','Case suspect-bowed interrogation police-advance','Procedural','takeda_officer'),
    mk('本件、現場に残留した毛髪を警察、鑑定されたんですね','Case scene-residual hair police-test','Reflective','ren_uni'),
    mk('警察、広範囲の捜索を続けております','Police wide-range search continue','Procedural','takeda_officer'),
    mk('本件、被害者に生じる影響を警察、配慮されているそうですね','Case victim-arise impact police-consider','Reflective','ren_uni'),
    mk('警察、社会通念に反する行為を摘発いたします','Police social-norm-against acts bust','Procedural','takeda_officer'),
    mk('要人の護衛、警察、強化いただきありがたいです','VIP-guard police-strengthen grateful','Close','kenji_office'),
  ]},
  {id:'conv_07973',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、月明かりが照らした風景を論文で扱っていましたね','Sakura — moonlight-lit scenery paper','Calm','asuka_teacher'),
    mk('はい、古文書に記された伝承を論文で扱いました','Yes — ancient-doc recorded folklore paper','Earnest teen','sakura_teen'),
    mk('権力に屈した思想家を論文で扱っていましたね','Power-bowed thinker paper','Reflective','asuka_teacher'),
    mk('はい、海洋に残留する化学物質を論文で扱いました','Yes — ocean-residual paper','Earnest','sakura_teen'),
    mk('広範囲に影響を及ぼす地震を論文で扱っていましたね','Wide-range earthquake paper','Engaged','asuka_teacher'),
    mk('はい、ストレスから生じる病を論文で扱いました','Yes — stress-cause illness paper','Earnest','sakura_teen'),
    mk('古い社会通念を覆した運動を論文で扱っていましたね','Old social-norm overturn paper','Reflective','asuka_teacher'),
    mk('はい、要人の護衛体制を論文で扱いました','Yes — VIP-guard system paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_07974',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、X線が照らした病巣を医療チーム確認しました','Ren — X-ray-lit lesion med-team confirm','Calm','saito_doctor'),
    mk('カルテに記された経過、貴院ご確認されているんですね、先生','Chart-recorded course your-hosp verify, sensei','Curious','ren_uni'),
    mk('はい、病状に屈した患者さんに医療チーム寄り添います','Yes — illness-bowed patient med-team stay-close','Patient','saito_doctor'),
    mk('院内に残留した感染、貴院対応されたんですね、先生','Hosp-residual infection your-hosp resp, sensei','Reflective','ren_uni'),
    mk('はい、広範囲の検診を医療チーム実施しました','Yes — wide-range checkup med-team did','Patient','saito_doctor'),
    mk('治療から生じる副作用、貴院、配慮されておられますね、先生','Tx-arise side-effect your-hosp consider, sensei','Reflective','ren_uni'),
    mk('はい、古い医療通念に医療チーム、とらわれません','Yes — old med-norm med-team-not-bound','Patient','saito_doctor'),
    mk('VIP患者さんの護衛、貴院、ご手配なさったんですね、先生','VIP patient-guard your-hosp arranged, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_07975',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社のロゴが照らした業界、評価上昇中だ','Our logo-lit industry rating-rise','Crisp','hiroshi_boss'),
    mk('はい。創業時、社訓に記された理念を守っております','Yes — founding doctrine-recorded ideal protect','Methodical','kenji_office'),
    mk('当社、不正に屈しない方針を貫け','Our co fraud-bow-not policy keep','Direction','hiroshi_boss'),
    mk('はい。残留した古い在庫を処分中です','Yes — residual old-stock disposing','Update','kenji_office'),
    mk('広範囲な販路を確保しろ','Wide-range sales-channel secure','Direction','hiroshi_boss'),
    mk('はい。社員に生じる負担を軽減しております','Yes — staff-arise burden reduce','Update','kenji_office'),
    mk('業界の通念にとらわれず進化しろ','Industry-norm not-bound evolve','Direction','hiroshi_boss'),
    mk('はい。要人来社時の護衛、手配済みです','Yes — VIP-visit guard arranged','Close','kenji_office'),
  ]},
  {id:'conv_07976',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、新しいドラマ、泣ける話だったよ、メイちゃん','Aoi — new-drama cry-worthy story Mei','Reflective','mei_romantic'),
    mk('葵、コンテストで他店と競った結果、嬉しいよ、メイちゃん','Aoi — contest other-store competed result glad Mei','Animated','aoi_barista'),
    mk('葵、お気に入りの曲が、チャートで上位に上ったよ、メイちゃん','Aoi — fave-song chart top-rose Mei','Animated','mei_romantic'),
    mk('葵、新メニュー発表に臨むのよ、メイちゃん','Aoi — new-menu reveal face Mei','Eager','aoi_barista'),
    mk('葵、新聞の抜粋、お洒落だね、メイちゃん','Aoi — newspaper-excerpt stylish Mei','Praising','mei_romantic'),
    mk('葵、お店の新しいシーツ、可愛いよ、メイちゃん','Aoi — store new sheets cute Mei','Praising','aoi_barista'),
    mk('葵、お客様の出迎えはいつも丁寧ね、メイちゃん','Aoi — cust-welcome always polite Mei','Praising','mei_romantic'),
    mk('葵、ハプニングがあったお店、楽しかったよ、メイちゃん','Aoi — hapunningu store fun Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_07977',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと泣ける映画を見たぞ、覚えてる?','Gran — youth Dad-with cry-worthy movie saw, remember?','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃同期と競って成績を上げたわよね、あなた?','Yes — Grandpa youth peers-competed grades-rose, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、出世階段を上っていたぞ、覚えてる?','Gran — youth career-stairs-rose, remember?','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、難局に臨むご姿勢、立派だったわよね、あなた?','Grandpa — crisis-face stance splendid, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、新聞の抜粋を切り抜いてらしたぞ','Gran — youth news-excerpt cut-out','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お布団のシーツ、白がお好きだったわよね、あなた?','Grandpa — futon-sheets white liked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お客様の出迎えを丁寧になさっていたぞ','Gran — cust-welcome polite did','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、思いがけないハプニング、楽しまれたわよね、あなた?','Grandpa — unexpected hapunningu enjoyed, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_07978',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、昨日泣ける映画を見たの','Sho — Mei-sis yesterday cry-worthy movie saw','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お友達と競って絵を描いたよ','Mei-sis — me friend-competed drew','Eager child','sho_child'),
    mk('翔くん、お父さん、お仕事の役職、上ったらしいわよ','Sho — Dad job-rank rose','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、テストに臨む準備中だよ','Mei-sis — me test-face prepping','Earnest child','sho_child'),
    mk('翔くん、絵本の抜粋、メイ姉さん大好きよ','Sho — picture-book-excerpt Mei-sis-love','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、新しいシーツ、ふかふかだよ','Mei-sis — me new sheets fluffy','Eager child','sho_child'),
    mk('翔くん、お客様の出迎え、メイ姉さん丁寧にしてるの','Sho — cust-welcome Mei-sis polite','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祭りで小さなハプニングあったよ','Mei-sis — me fest small hapunningu happened','Animated close','sho_child'),
  ]},
  {id:'conv_07979',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、昨日のアニメ、泣ける回だったぜ','Riku — yesterday-anime cry-worthy ep','Animated teen','sakura_teen'),
    mk('お前、他校と競って勝ったろ?桜','You — other-school competed won? Sakura','Curious','riku_teen'),
    mk('リク、お前のスコア、ランキング上ったな','Riku — your score ranking-rose','Praising','sakura_teen'),
    mk('お前、本番に臨む顔、いいぜ、桜','You — match-face face good Sakura','Praising','riku_teen'),
    mk('リク、お前のレポート、抜粋しても面白いな','Riku — your report excerpt-too interesting','Praising','sakura_teen'),
    mk('お前のベッドのシーツ、新しいやつだな、桜','Your bed-sheets new, Sakura','Curious','riku_teen'),
    mk('リク、お客様の出迎え、お母さん手伝ってるぜ','Riku — cust-welcome Mom-help','Reflective','sakura_teen'),
    mk('お前、修学旅行でハプニングあったろ?桜','You — school-trip hapunningu? Sakura','Teasing close','riku_teen'),
  ]},
  {id:'conv_07980',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、ママ、昨日泣ける映画見たわ','Sho — Mom yesterday cry-worthy movie saw','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お友達と競ってかけっこしたよ','Mom — me friend-competed raced','Eager child','sho_child'),
    mk('翔くん、お父さんが、職位を上ったらしいわよ','Sho — Dad rank-rose','Reflective','yumiko_mom'),
    mk('ママ、ぼく、テストに臨む覚悟だよ','Mom — me test-face resolve','Proud child','sho_child'),
    mk('翔くん、新聞の抜粋を集めるの、お父さんの趣味よ','Sho — news-excerpt collect Dad-hobby','Reflective','yumiko_mom'),
    mk('ママ、ぼくのお布団のシーツ、可愛い柄だね','Mom — my futon-sheets cute-pattern','Eager','sho_child'),
    mk('翔くん、お父さんの出迎え、お願いね','Sho — Dad-welcome ask','Direction','yumiko_mom'),
    mk('ママ、運動会でハプニングあったよ','Mom — sports-day hapunningu happened','Animated close','sho_child'),
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

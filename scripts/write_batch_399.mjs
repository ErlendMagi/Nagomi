import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_399 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['買わ','積ん','はいる','移る','直っ','治り','片付ける','歩ける']
const B_T = ['に当たって','満たし','満たさ','遂げ','併せ','略し','測っ','揃える']
const C_T = ['高まり','渡さ','覆わ','広まっ','害する','根ざし','崩す','利か']
const D_T = ['賑わっ','戸惑う','祝っ','釣っ','ありえ','よくよく','ふっと','にわか']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'

function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_07941',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、それ、もう買わなくていいわよ','Sho — that no-need buy','Direction','yumiko_mom'),
    mk('ママ、お父さんが本を積んでるよ','Mom — Dad piled-books','Reflective child','sho_child'),
    mk('翔くん、お祖母ちゃんがお部屋にはいるわよ','Sho — grandma room-enter','Reflective','yumiko_mom'),
    mk('ママ、ぼくのおもちゃ、隣に移るよ','Mom — my toy next-move','Practical child','sho_child'),
    mk('翔くん、お父さんのお怪我、もう直ったわよ','Sho — Dad-injury fixed','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんの治り、早かったね','Mom — Grandpa recovery fast','Wondering child','sho_child'),
    mk('翔くん、お部屋を片付ける時間よ','Sho — room tidy-time','Direction','yumiko_mom'),
    mk('ママ、ぼく、もう歩けるようになったよ','Mom — me walk-can-became','Proud close','sho_child'),
  ]},
  {id:'conv_07942',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、それ買わなくてもいいわよ、メイちゃん','Aoi — buy-not-needed Mei','Direction','mei_romantic'),
    mk('葵、積んでる段ボール、片付けるわ、メイちゃん','Aoi — piled boxes tidy Mei','Practical','aoi_barista'),
    mk('葵、お店にはいるね、メイちゃん','Aoi — store-enter Mei','Practical','mei_romantic'),
    mk('葵、奥のテーブル、移るね、メイちゃん','Aoi — back-table move Mei','Practical','aoi_barista'),
    mk('葵、エアコン直ったわね、メイちゃん','Aoi — AC fixed Mei','Reflective','mei_romantic'),
    mk('葵、お風邪の治り、早くてよかった、メイちゃん','Aoi — cold recovery fast-glad Mei','Reflective','aoi_barista'),
    mk('葵、お店を片付けるの手伝うわ、メイちゃん','Aoi — store tidy help Mei','Caring','mei_romantic'),
    mk('葵、今日は歩ける距離お散歩しよう、メイちゃん','Aoi — today walkable-dist stroll Mei','Eager close','aoi_barista'),
  ]},
  {id:'conv_07943',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、お父さん、若い頃、買わない物を決めてたぞ、覚えてる?','Gran — youth Dad don\'t-buy decided, remember?','Wistful','hiroshi_elder'),
    mk('うん。お祖父ちゃん、本を積んでお読みになったわよね、あなた?','Yes — Grandpa piled-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お部屋にはいると笑顔だったぞ、覚えてる?','Gran — room-enter smile-was, remember?','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、新しい家に移る時、緊張されたわよね、あなた?','Grandpa — new home move-time tense, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんの怪我、直って嬉しかったぞ、覚えてる?','Gran — Dad-injury fixed glad, remember?','Wistful','hiroshi_elder'),
    mk('お祖父ちゃんの治り、早かったわよね、あなた?','Grandpa recovery fast, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お庭を片付けるのお得意だったぞ、覚えてる?','Gran — garden tidy good-at, remember?','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、歩ける距離、お散歩されたわよね、あなた?','Grandpa walkable-dist stroll, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_07944',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前買わなくていいぜ','Riku — buy-not-needed','Direction teen','sakura_teen'),
    mk('お前の積んでる漫画貸せよ、桜','You — piled-manga lend Sakura','Direction','riku_teen'),
    mk('リク、教室にはいるぞ','Riku — classroom-enter','Direction','sakura_teen'),
    mk('お前、隣の席に移るんだろ?桜','You — next-seat move? Sakura','Curious','riku_teen'),
    mk('リク、お前のスマホ直ったな','Riku — your phone fixed','Reflective','sakura_teen'),
    mk('お前のお熱、治り早かったな、桜','Your fever recovery fast Sakura','Reflective','riku_teen'),
    mk('リク、教室を片付けるの手伝えよ','Riku — classroom tidy help','Direction','sakura_teen'),
    mk('お前、歩ける距離だろ、桜','You — walkable-dist Sakura','Reflective close','riku_teen'),
  ]},
  {id:'conv_07945',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、それ買わなくていいわよ','Sho — buy-not-needed','Direction','mei_romantic'),
    mk('メイ姉さん、ぼくの部屋、本が積んであるよ','Mei-sis — my room books-piled','Eager child','sho_child'),
    mk('翔くん、お風呂にはいる時間よ','Sho — bath-enter time','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんの家に移るよ','Mei-sis — me grandma-home move','Animated','sho_child'),
    mk('翔くん、メイ姉さんのお店、エアコン直ったわ','Sho — Mei-sis-store AC fixed','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼくのお風邪、治り早かったよ','Mei-sis — me cold recovery fast','Proud','sho_child'),
    mk('翔くん、お部屋を片付ける時間ね','Sho — room tidy-time','Direction','mei_romantic'),
    mk('メイ姉さん、お父さんと歩けるようになったよ','Mei-sis — Dad-with walk-can-became','Proud close','sho_child'),
  ]},
  {id:'conv_07946',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('契約に当たって注意点をまとめろ','Contract upon-doing notes compile','Crisp','hiroshi_boss'),
    mk('はい。当社は規格を満たしております','Yes — Our spec-meet','Methodical','kenji_office'),
    mk('品質を満たさない製品は出荷停止しろ','Quality-unmet ship-stop','Direction','hiroshi_boss'),
    mk('はい。当社はトップを遂げました','Yes — Top achieved','Update','kenji_office'),
    mk('各部門併せて報告しろ','Each-dept combined report','Direction','hiroshi_boss'),
    mk('はい。社名を略して通称にしました','Yes — Name abbreviated nickname','Update','kenji_office'),
    mk('反応を測って戦略を見直せ','Reaction measured strategy review','Direction','hiroshi_boss'),
    mk('はい。書類を揃えるよう徹底しております','Yes — Docs align thorough','Close','kenji_office'),
  ]},
  {id:'conv_07947',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('交渉に当たって留意点を整理しましょう','Negotiation upon-doing notes-organize','Brisk','yuki_office'),
    mk('はい。条件を満たしております','Yes — Cond meet','Cooperative','kenji_office'),
    mk('規定を満たさない案件は却下しましょう','Reg-unmet case reject','Direction','yuki_office'),
    mk('はい。目標を遂げました','Yes — Target achieved','Update','kenji_office'),
    mk('各国の数字を併せて報告しましょう','Each-country numbers combined report','Direction','yuki_office'),
    mk('はい。長い社名を略して通称を決めました','Yes — Long name abbreviated','Update','kenji_office'),
    mk('反応を測って次の手を考えましょう','Reaction measured next-move','Direction','yuki_office'),
    mk('はい。書類を揃えるよう手配しました','Yes — Docs align arranged','Close','kenji_office'),
  ]},
  {id:'conv_07948',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究に当たって心得を伝える','Ren — research upon-doing rules','Mentor','hiroshi_boss'),
    mk('はい。学会の要件を満たしております','Yes — Conf req meet','Earnest','ren_uni'),
    mk('蓮、品質を満たさないデータは発表するな','Ren — quality-unmet don\'t-publish','Direction','hiroshi_boss'),
    mk('はい。博士を遂げたく存じます','Yes — PhD achieve-want','Polite','ren_uni'),
    mk('蓮、共同研究者と併せて論文を書け','Ren — joint-researcher combined paper-write','Direction','hiroshi_boss'),
    mk('はい。論文タイトルを略してキャッチーにしました','Yes — Paper-title abbreviated catchy','Earnest','ren_uni'),
    mk('蓮、実験を測ってご報告しろ','Ren — experiment measured report','Direction','hiroshi_boss'),
    mk('はい。研究データを揃えるよう努めております','Yes — Research-data align try','Earnest close','ren_uni'),
  ]},
  {id:'conv_07949',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('捜査に当たって、警察は慎重です','Inv upon-doing police careful','Calm','takeda_officer'),
    mk('はい。警察は条件を満たしておりありがたいです','Yes — Police cond meet grateful','Cooperative','kenji_office'),
    mk('証拠を満たさない事件は警察も慎重です','Evid-unmet case police-careful','Procedural','takeda_officer'),
    mk('はい。警察は目的を遂げております','Yes — Police purpose achieving','Cooperative','kenji_office'),
    mk('警察と地域、併せて防犯を進めます','Police-region combined crime-prev advance','Procedural','takeda_officer'),
    mk('はい。警察名簿を略して掲示しました','Yes — Police-roster abbreviated posted','Cooperative','kenji_office'),
    mk('現場を測って警察は記録しております','Scene measured police-record','Procedural','takeda_officer'),
    mk('はい。証拠を揃えるよう警察もご対応ありがたいです','Yes — Evid align police-resp grateful','Close','kenji_office'),
  ]},
  {id:'conv_07950',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、事業に当たって、いつも誠実だったぞ','Dad — biz upon-doing always sincere','Sage','hiroshi_elder'),
    mk('はい。お父さんは品質を満たしておられました','Yes — Dad quality-meet','Commitment','hiroshi_boss'),
    mk('お父さん、規定を満たさない仕事を断ったぞ','Dad — reg-unmet work refused','Wistful','hiroshi_elder'),
    mk('はい。お父さんは夢を遂げられました','Yes — Dad dream-achieved','Reflective','hiroshi_boss'),
    mk('お父さん、各社の意見を併せてお決めだった','Dad — each-co opin combined decided','Wistful','hiroshi_elder'),
    mk('はい。お父さんが屋号を略した話、伺っております','Yes — Dad shop-name abbreviated story heard','Reflective','hiroshi_boss'),
    mk('お父さん、業界の風を測っておられたぞ','Dad — industry-wind measured','Wistful','hiroshi_elder'),
    mk('はい。お父さんが社員を揃えるお気持ち、引き継いでおります','Yes — Dad staff-align spirit inherit','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_07951',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、注目度の高まりを論文で扱っていましたね','Ren — attention-rise paper-handled','Calm','asuka_teacher'),
    mk('はい、文化を渡さない政策を論文で扱いました','Yes — culture-pass-not policy paper','Earnest','ren_uni'),
    mk('森に覆われた地域を論文で扱っていましたね','Forest-covered region paper-handled','Reflective','asuka_teacher'),
    mk('はい、世界に広まった俳句を論文で扱いました','Yes — world-spread haiku paper','Earnest','ren_uni'),
    mk('環境を害する行為を論文で扱っていましたね','Env-harming acts paper-handled','Engaged','asuka_teacher'),
    mk('はい、地域に根ざした文化を論文で扱いました','Yes — region-rooted culture paper','Earnest','ren_uni'),
    mk('社会通念を崩す思想を論文で扱っていましたね','Social-norm-break thought paper-handled','Reflective','asuka_teacher'),
    mk('はい、規制が利かない海域を論文で扱いました','Yes — reg-unfit waters paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_07952',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、関心の高まりを警察も注視しております','Case interest-rise police watch','Calm','takeda_officer'),
    mk('本件、犯人に何も渡さない方針ですね','Case perp pass-nothing-stance','Curious','ren_uni'),
    mk('現場が雪に覆われていたと警察は記録しております','Scene snow-covered police-record','Procedural','takeda_officer'),
    mk('本件、SNSで広まった噂を警察も把握ですね','Case SNS-spread rumor police-aware','Reflective','ren_uni'),
    mk('利益を害する行為を警察は摘発しております','Profit-harm acts police-bust','Procedural','takeda_officer'),
    mk('本件、地域に根ざした団体を警察も知っておられますね','Case region-rooted org police-know','Reflective','ren_uni'),
    mk('治安を崩す動きを警察は警戒しております','Security-break movement police-alert','Procedural','takeda_officer'),
    mk('本件、規制が利かない地域、警察も対応中ですね','Case reg-unfit area police-handle','Reflective close','ren_uni'),
  ]},
  {id:'conv_07953',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、注目度の高まりを論文で扱っていましたね','Sakura — attention-rise paper-handled','Calm','asuka_teacher'),
    mk('はい、文化を渡さない政策を論文で扱いました','Yes — culture-pass-not paper','Earnest teen','sakura_teen'),
    mk('森に覆われた地域を論文で扱っていましたね','Forest-covered region paper','Reflective','asuka_teacher'),
    mk('はい、世界に広まった俳句を論文で扱いました','Yes — world-spread haiku paper','Earnest','sakura_teen'),
    mk('環境を害する行為を論文で扱っていましたね','Env-harming paper','Engaged','asuka_teacher'),
    mk('はい、地域に根ざした文化を論文で扱いました','Yes — region-rooted culture','Earnest','sakura_teen'),
    mk('社会通念を崩す思想を論文で扱っていましたね','Social-norm-break paper','Reflective','asuka_teacher'),
    mk('はい、規制が利かない海域を論文で扱いました','Yes — reg-unfit waters paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_07954',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、関心の高まりを医療チームも見ております','Ren — interest-rise med-team watch','Calm','saito_doctor'),
    mk('治療情報を渡さない患者さんもいるそうですね、先生','Tx-info pass-not patient exists, sensei','Curious','ren_uni'),
    mk('はい、傷が皮膚に覆われ始めております','Yes — wound skin-covered begin','Informative','saito_doctor'),
    mk('院内に広まった感染、貴院対応されたんですね、先生','Hosp-spread infection your-hosp resp, sensei','Reflective','ren_uni'),
    mk('健康を害する習慣、医療チームが指導しております','Health-harm habit med-team guide','Patient','saito_doctor'),
    mk('地域に根ざした医療、貴院続けておられますね、先生','Region-rooted med your-hosp continue, sensei','Reflective','ren_uni'),
    mk('体調を崩す患者さんに医療チームは寄り添います','Health-break patient med-team stay-close','Patient','saito_doctor'),
    mk('薬が利かない症例、貴院研究なさいましたね、先生','Drug-unfit case your-hosp research, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_07955',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('需要の高まりに注目しろ','Demand-rise watch','Crisp','hiroshi_boss'),
    mk('はい。機密を渡さない方針を徹底しております','Yes — confid pass-not policy thorough','Methodical','kenji_office'),
    mk('当社の弱点が覆われないよう対策しろ','Our weakness uncovered counter','Direction','hiroshi_boss'),
    mk('はい。ブランドが広まった成果を報告いたします','Yes — brand-spread result report','Update','kenji_office'),
    mk('当社の評判を害する行為は厳禁だ','Our rep-harm strictly-banned','Direction','hiroshi_boss'),
    mk('はい。地元に根ざした商品を展開中です','Yes — local-rooted product rollout','Update','kenji_office'),
    mk('シェアを崩す戦略を立てろ','Share-break strategy plan','Direction','hiroshi_boss'),
    mk('はい。古い手法が利かない市場に進出します','Yes — old-method-unfit market enter','Close','kenji_office'),
  ]},
  {id:'conv_07956',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お店が賑わって嬉しいね、メイちゃん','Aoi — store bustling glad Mei','Animated','mei_romantic'),
    mk('葵、メニュー多くてお客様が戸惑うかしら、メイちゃん','Aoi — menu many cust hesitate Mei','Reflective','aoi_barista'),
    mk('葵、お誕生日、お祝った後どうだった?メイちゃん','Aoi — birthday celebrated after how? Mei','Curious','mei_romantic'),
    mk('葵、彼とお魚を釣った話聞いたよ、メイちゃん','Aoi — bf-fish caught story heard Mei','Animated','aoi_barista'),
    mk('葵、それありえない値段ね、メイちゃん','Aoi — that unbelievable price Mei','Wry','mei_romantic'),
    mk('葵、よくよく考えるとお洒落な店、メイちゃん','Aoi — deeply think stylish-store Mei','Reflective','aoi_barista'),
    mk('葵、ふっと思い出すお客様の顔、メイちゃん','Aoi — suddenly recall cust-face Mei','Reflective','mei_romantic'),
    mk('葵、にわか雨でお客様、減ったよ、メイちゃん','Aoi — sudden-rain cust reduced Mei','Wry close','aoi_barista'),
  ]},
  {id:'conv_07957',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お祭りが賑わってたぞ、覚えてる?','Gran — youth fest bustling, remember?','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃんは初めての都会で戸惑うこともあったわね、あなた?','Yes — Grandpa first-city hesitate, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、結婚をお祝ったお仲間、懐かしいぞ、覚えてる?','Gran — wedding celebrated friends nostalgic, remember?','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、釣った魚を自慢されたわよね、あなた?','Grandpa — caught-fish boasted, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、ありえない大物を釣ったのも昔だぞ、覚えてる?','Gran — incredible-big-catch old-times, remember?','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、よくよくお父さんの話をしたわね、あなた?','Grandpa — often-deep Dad-talk, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、ふっと若い頃のことが浮かぶぞ','Gran — suddenly youth-memories surface','Wistful','hiroshi_elder'),
    mk('にわか雨で、思い出深いお別れあったわね、あなた?','Sudden-rain memorable-farewell existed, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_07958',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんのお店、最近賑わってるの','Sho — Mei-sis-store recently bustling','Animated','mei_romantic'),
    mk('メイ姉さん、ぼく、新しい学校で戸惑うことあるよ','Mei-sis — me new-school hesitate sometimes','Wry child','sho_child'),
    mk('翔くん、お誕生日、メイ姉さんお祝ってあげる','Sho — birthday Mei-sis-celebrate','Tender','mei_romantic'),
    mk('メイ姉さん、お父さんと魚を釣ったよ','Mei-sis — Dad fish-caught','Eager child','sho_child'),
    mk('翔くん、それありえないほどお洒落ね','Sho — that incredibly stylish','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、よくよく考えるよ','Mei-sis — me deeply-think','Earnest child','sho_child'),
    mk('翔くん、ふっとあなたのお誕生日思い出したわ','Sho — suddenly-recall your-bday','Tender','mei_romantic'),
    mk('メイ姉さん、にわか雨だったから走って帰ったよ','Mei-sis — sudden-rain so ran-home','Animated close','sho_child'),
  ]},
  {id:'conv_07959',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、文化祭、賑わってたな','Riku — fest bustling','Animated teen','sakura_teen'),
    mk('お前、新クラスで戸惑うことあるか?桜','You — new-class hesitate? Sakura','Curious','riku_teen'),
    mk('リク、お前の合格をお祝ってやるぜ','Riku — your acceptance celebrate','Direction','sakura_teen'),
    mk('お前、お父さんと魚を釣ったろ?桜','You — Dad-with fish-caught? Sakura','Curious','riku_teen'),
    mk('リク、お前のスコア、ありえないぜ','Riku — your score unbelievable','Animated','sakura_teen'),
    mk('お前、よくよく漢字、覚えてるな、桜','You — deeply kanji-know Sakura','Praising','riku_teen'),
    mk('リク、ふっと小学校のこと思い出したぜ','Riku — suddenly-recall elem-school','Reflective','sakura_teen'),
    mk('お前、にわか雨で濡れたな、桜','You — sudden-rain soaked Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_07960',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祭り、賑わってたわね','Sho — fest bustling','Reflective','yumiko_mom'),
    mk('ママ、ぼく、新しいクラスで戸惑うんだ','Mom — me new-class hesitate','Wry child','sho_child'),
    mk('翔くん、お父さんが翔くんの誕生日、お祝ってくださるわよ','Sho — Dad will-celebrate your-bday','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと魚を釣ったよ','Mom — me Dad-fish-caught','Eager','sho_child'),
    mk('翔くん、ありえないほど立派ね','Sho — incredibly-splendid','Praising','yumiko_mom'),
    mk('ママ、ぼくよくよく考えてお勉強する','Mom — me deeply-think study','Earnest','sho_child'),
    mk('翔くん、ふっと懐かしいおもちゃ、思い出すわね','Sho — suddenly nostalgic-toy recall','Tender','yumiko_mom'),
    mk('ママ、にわか雨で傘がなかったよ','Mom — sudden-rain umbrella-none','Wry close','sho_child'),
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

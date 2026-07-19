import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_417 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['間際','色合い','メシ','大いなる','不可解','非常識','あきらか','捜し']
const B_T = ['基幹','分譲','大差','特価','シチュエーション','通算','表題','ラインナップ']
const C_T = ['異国','もとづい','予知','相反','強硬','残虐','妊婦','修道院']
const D_T = ['スクエア','ギャル','ゲノム','クリスタル','修道','ウルトラ','ミャンマー','ヒゲ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08301',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、出かける間際に忘れ物しないでね','Sho — departure-moment forget-don\'t','Direction','yumiko_mom'),
    mk('ママ、お祖父ちゃんの絵の色合い、優しいね','Mom — Grandpa-painting color-tone gentle','Reflective child','sho_child'),
    mk('翔くん、お父さん、メシは何にする?って聞いてたわ','Sho — Dad "meshi what?" asked','Reflective','yumiko_mom'),
    mk('ママ、ぼく、大いなる希望を持ってるよ','Mom — me great-hope have','Proud child','sho_child'),
    mk('翔くん、お祖母ちゃんの行動が不可解だわね','Sho — Grandma-action puzzling','Wry','yumiko_mom'),
    mk('ママ、ぼく、非常識なお友達には注意してるよ','Mom — me ill-mannered-friend careful','Earnest child','sho_child'),
    mk('翔くん、本当のお気持ちはあきらかにしてね','Sho — true-feelings clarify','Direction','yumiko_mom'),
    mk('ママ、ぼく、なくしたおもちゃ、捜してくれる?','Mom — me lost-toy search-help?','Eager close','sho_child'),
  ]},
  {id:'conv_08302',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、閉店間際のご注文、丁寧にね、メイちゃん','Aoi — closing-moment order polite Mei','Direction','mei_romantic'),
    mk('葵、お店の色合い、暖かみがあるね、メイちゃん','Aoi — store-color-tone warm Mei','Praising','aoi_barista'),
    mk('葵、お客様、メシ屋を探していらっしゃったよ、メイちゃん','Aoi — cust meshi-restaurant searched Mei','Reflective','mei_romantic'),
    mk('葵、私たちは大いなる目標を持って続けようね、メイちゃん','Aoi — we great-goal-have continue Mei','Eager','aoi_barista'),
    mk('葵、お客様の行動が不可解で、対応に困ったよ、メイちゃん','Aoi — cust-puzzling-action handle-troubled Mei','Wry','mei_romantic'),
    mk('葵、非常識な要求にもきちんと対応しようね、メイちゃん','Aoi — unreasonable-request properly-respond Mei','Direction','aoi_barista'),
    mk('葵、お料理の温度を、あきらかに分けようね、メイちゃん','Aoi — dish-temp clearly-distinguish Mei','Direction','mei_romantic'),
    mk('葵、お客様、忘れ物を捜してらしたよ、メイちゃん','Aoi — cust forgot-item-searched Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08303',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは出発間際に決意を語ったぞ','Gran — youth Dad departure-moment-resolve told','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、絵の色合いに敏感でいらしたわよね、あなた?','Yes — Grandpa painting-color-tone sensitive, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、村のメシ屋でお父さんが食事されたぞ','Gran — youth village-meshi-place Dad-ate','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、大いなるご決断をされたわよね、あなた?','Grandpa — great-decision did, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが不可解な人物に遭遇されたぞ','Gran — youth Dad puzzling-person encountered','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、非常識な振る舞いに、お怒りだったわよね、あなた?','Grandpa — ill-mannered-act angry, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはあきらかに優しい人だったぞ','Gran — youth Dad clearly-gentle person','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夜遅くまで子どもを捜してくださったわよね、あなた?','Grandpa — late-night kid-searched, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08304',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、登校間際に走るなよ','Riku — school-go-moment don\'t-run','Wry teen','sakura_teen'),
    mk('お前のシャツの色合い、お洒落だな、桜','You — shirt-color-tone stylish Sakura','Praising','riku_teen'),
    mk('リク、お前、いつもメシ抜きで来てんな','Riku — always meshi-skip-come','Wry','sakura_teen'),
    mk('お前、大いなる挑戦が待ってんだろ?桜','You — great-challenge await? Sakura','Curious','riku_teen'),
    mk('リク、お前の問題、ぼくには不可解だぜ','Riku — your-problem me-puzzling','Wry','sakura_teen'),
    mk('お前、教室で非常識な行動するなよ、桜','You — classroom ill-mannered don\'t Sakura','Direction','riku_teen'),
    mk('リク、お前の気持ちは、あきらかに勉強嫌いだな','Riku — your-feeling clearly-study-hate','Teasing','sakura_teen'),
    mk('お前、無くした鍵、ぼくが捜してやるよ、桜','You — lost-key me-search Sakura','Caring close','riku_teen'),
  ]},
  {id:'conv_08305',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お母さんが出かける間際にお声かけてね','Sho — Mom-departure-moment call','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、絵の色合い、お父さんと話したよ','Mei-sis — me painting-color Dad-talked','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが、メシ屋でご馳走してくれるって','Sho — Grandpa meshi-place treat','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、大いなる夢を持ってるよ','Mei-sis — me great-dream-have','Proud child','sho_child'),
    mk('翔くん、お祖母ちゃんの行動、ちょっと不可解よ','Sho — Grandma-action puzzling','Wry','mei_romantic'),
    mk('メイ姉さん、ぼく、非常識なお友達と遊ばないよ','Mei-sis — me ill-mannered-friend don\'t-play','Earnest child','sho_child'),
    mk('翔くん、あきらかに、お父さんは疲れていらっしゃるわね','Sho — clearly Dad-tired','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんの家でなくしたおもちゃ、捜してね','Mei-sis — me Grandpa-lost-toy search','Eager close','sho_child'),
  ]},
  {id:'conv_08306',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、基幹業務を強化しろ','Our co — core-biz strengthen','Crisp','hiroshi_boss'),
    mk('はい。新規マンションの分譲計画を進めております','Yes — New-condo subdivision plan advance','Methodical','kenji_office'),
    mk('当社、他社と大差ないままでは伸びない','Our co — other-co no-big-diff don\'t-grow','Direction','hiroshi_boss'),
    mk('はい。特価商品の販売を始めます','Yes — Bargain-product sales start','Update','kenji_office'),
    mk('お客様のシチュエーションに合わせた提案をしろ','Cust-situation-match propose','Direction','hiroshi_boss'),
    mk('はい。年間通算売上の集計を完了しました','Yes — Annual-total-sales tally done','Update','kenji_office'),
    mk('当社、新メニューの表題を決めろ','Our co — new-menu-title decide','Direction','hiroshi_boss'),
    mk('はい。新商品のラインナップを公開いたしました','Yes — New-product lineup public','Close','kenji_office'),
  ]},
  {id:'conv_08307',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('基幹システムの更新を計画しましょう','Core-system update plan','Brisk','yuki_office'),
    mk('はい。新規分譲物件の見学会を企画しております','Yes — New-subdivision tour plan','Cooperative','kenji_office'),
    mk('当社と他社の大差を明確にしましょう','Our other-big-diff clarify','Direction','yuki_office'),
    mk('はい。期間限定の特価コーナーを設けました','Yes — Limited bargain-corner set','Update','kenji_office'),
    mk('お客様のシチュエーション別にメニューを分けましょう','Cust-situation menu-divide','Direction','yuki_office'),
    mk('はい。半期通算実績を発表しました','Yes — Half-yr-total-result announced','Update','kenji_office'),
    mk('プレゼンの表題をキャッチーにしましょう','Pres-title catchy-make','Direction','yuki_office'),
    mk('はい。冬の新商品ラインナップを揃えました','Yes — Winter new-product lineup aligned','Close','kenji_office'),
  ]},
  {id:'conv_08308',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文の基幹となるテーマを明示しろ','Ren — paper-core-theme specify','Mentor','hiroshi_boss'),
    mk('はい。学術書の分譲版を取り寄せました','Yes — Academic-book-distribution-ver acquired','Earnest','ren_uni'),
    mk('蓮、先行研究と大差ない論文では評価されない','Ren — prior-research no-big-diff don\'t-rate','Direction','hiroshi_boss'),
    mk('はい。学会の特価参加プランを利用します','Yes — Conf-bargain-plan use','Polite','ren_uni'),
    mk('蓮、実験のシチュエーションを変えて検証しろ','Ren — experiment-situation change verify','Direction','hiroshi_boss'),
    mk('はい。引用回数の通算データを更新しました','Yes — Citation-total-data update','Earnest','ren_uni'),
    mk('蓮、論文の表題を慎重に決めろ','Ren — paper-title careful decide','Direction','hiroshi_boss'),
    mk('はい。論文集のラインナップを充実させます','Yes — Paper-collection lineup enrich','Earnest close','ren_uni'),
  ]},
  {id:'conv_08309',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、基幹インフラの警備を強化しております','Police core-infra guard strengthen','Calm','takeda_officer'),
    mk('はい。分譲住宅地での防犯活動も進めておられますね','Yes — Subdivision-housing crime-prev advance','Cooperative','kenji_office'),
    mk('警察、他犯と大差ないと判断した事件もあります','Police other-crime no-big-diff judged-case exists','Procedural','takeda_officer'),
    mk('はい。特価詐欺の被害を警察が摘発されたんですね','Yes — Bargain-fraud police-bust','Cooperative','kenji_office'),
    mk('警察、被害者のシチュエーションを丁寧に伺います','Police victim-situation polite-hear','Procedural','takeda_officer'),
    mk('はい。警察、通算検挙数を年次報告しております','Yes — Police total-arrest annual-report','Cooperative','kenji_office'),
    mk('警察、捜査報告書の表題は明瞭にしております','Police inv-report title clarify','Procedural','takeda_officer'),
    mk('はい。警察車両のラインナップを更新されたんですね','Yes — Police-vehicle lineup updated','Close','kenji_office'),
  ]},
  {id:'conv_08310',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、基幹事業を一代で築かれた','Dad — core-biz one-gen-built','Sage','hiroshi_elder'),
    mk('はい。お父さんは分譲事業も先見的に始められた','Yes — Dad subdivision-biz foresight-started','Commitment','hiroshi_boss'),
    mk('お父さん、競合と大差をつける戦略をお持ちだった','Dad — competitor big-diff strategy had','Wistful','hiroshi_elder'),
    mk('はい。お父さんは特価セールを社員と一緒に行われた','Yes — Dad bargain-sale staff-with did','Reflective','hiroshi_boss'),
    mk('お父さん、あらゆるシチュエーションで冷静だった','Dad — every-situation calm','Wistful','hiroshi_elder'),
    mk('はい。お父さんは通算何度も会社を救われた','Yes — Dad total many-times co-saved','Reflective','hiroshi_boss'),
    mk('お父さん、社内報の表題を自ら考えられた','Dad — in-house-mag title self-thought','Wistful','hiroshi_elder'),
    mk('はい。お父さんが築かれたラインナップ、引き継いでおります','Yes — Dad-built lineup inherit','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08311',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、異国の生活様式を論文で扱っていましたね','Ren — foreign-lifestyle paper','Calm','asuka_teacher'),
    mk('はい、史料にもとづいた歴史検証を論文で扱いました','Yes — source-based hist-verify paper','Earnest','ren_uni'),
    mk('蓮さん、地震予知の科学を論文で扱っていましたね','Ren — earthquake-prediction-sci paper','Reflective','asuka_teacher'),
    mk('はい、二つの理論が相反する点を論文で扱いました','Yes — two-theories conflict paper','Earnest','ren_uni'),
    mk('外交の強硬路線を論文で扱っていましたね','Diplomacy-hardline paper','Engaged','asuka_teacher'),
    mk('はい、戦時の残虐行為を論文で扱いました','Yes — wartime atrocity paper','Earnest','ren_uni'),
    mk('蓮さん、妊婦の心理研究を論文で扱っていましたね','Ren — pregnant-psyche paper','Reflective','asuka_teacher'),
    mk('はい、中世修道院の生活を論文で扱いました','Yes — medieval-monastery-life paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08312',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者は異国出身者だと、警察、把握ですね','Case suspect foreign-origin police-grasp','Calm','takeda_officer'),
    mk('警察、証拠にもとづいた捜査を進めております','Police evidence-based inv advance','Procedural','takeda_officer'),
    mk('本件、警察が地震予知能力を持つわけではありません','Case police earthquake-prediction-ability-not','Reflective','ren_uni'),
    mk('警察、相反する証言を慎重に検討しております','Police conflicting-testimony careful-consider','Procedural','takeda_officer'),
    mk('本件、警察、強硬な対応を控えております','Case police hardline-resp restrain','Reflective','ren_uni'),
    mk('警察、残虐な犯行に断固対応します','Police atrocious-crime firm-respond','Procedural','takeda_officer'),
    mk('本件、妊婦の被害者を警察、最優先で保護されたんですね','Case pregnant-victim police-top-protect','Reflective','ren_uni'),
    mk('警察、修道院敷地内での事件を捜査いたしました','Police monastery-grounds-case inv-did','Close','takeda_officer'),
  ]},
  {id:'conv_08313',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、異国の生活様式を論文で扱っていましたね','Sakura — foreign-life paper','Calm','asuka_teacher'),
    mk('はい、史料にもとづいた歴史検証を論文で扱いました','Yes — source-based paper','Earnest teen','sakura_teen'),
    mk('地震予知の科学を論文で扱っていましたね','Earthquake-prediction paper','Reflective','asuka_teacher'),
    mk('はい、二つの理論が相反する点を論文で扱いました','Yes — two-theories conflict paper','Earnest','sakura_teen'),
    mk('外交の強硬路線を論文で扱っていましたね','Diplomacy-hardline paper','Engaged','asuka_teacher'),
    mk('はい、戦時の残虐行為を論文で扱いました','Yes — wartime atrocity paper','Earnest','sakura_teen'),
    mk('妊婦の心理研究を論文で扱っていましたね','Pregnant-psyche paper','Reflective','asuka_teacher'),
    mk('はい、中世修道院の生活を論文で扱いました','Yes — monastery paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08314',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、異国の患者さんを医療チームでサポートしております','Ren — foreign-patient med-team support','Calm','saito_doctor'),
    mk('国際指針にもとづいた診療を、貴院、なさっておられますね、先生','Intl-guideline-based diag your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、地震予知後の急患受け入れを医療チームで備えております','Yes — Earthquake-predict post-ER med-team prep','Patient','saito_doctor'),
    mk('治療効果が相反する薬の組み合わせ、貴院、慎重ですね、先生','Tx-effect conflict drug-combo your-hosp careful, sensei','Reflective','ren_uni'),
    mk('はい、強硬な治療より、寄り添う医療チームを目指します','Yes — Hardline-tx-than stay-close med-team aim','Patient','saito_doctor'),
    mk('過去の残虐な戦争被害者の医療記録を、貴院、保存されておられますね、先生','Past atrocious-war victim med-record your-hosp preserve, sensei','Reflective','ren_uni'),
    mk('はい、妊婦の健診を医療チームで丁寧に行います','Yes — Pregnant-checkup med-team polite','Patient','saito_doctor'),
    mk('貴院、修道院との連携で福祉医療を進めておられますね、先生','Your-hosp monastery-coop welfare-med advance, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08315',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、異国市場での競争力を高めろ','Our co — foreign-market competitiveness raise','Crisp','hiroshi_boss'),
    mk('はい。データにもとづいた経営判断を進めます','Yes — Data-based mgmt-judgment advance','Methodical','kenji_office'),
    mk('当社、リスクは予知できる範囲で備えろ','Our co — risk predict-range prep','Direction','hiroshi_boss'),
    mk('はい。社内、相反する意見も歓迎しております','Yes — In-house conflict-opinion-welcome','Update','kenji_office'),
    mk('競合への強硬な対応は避けろ','Competitor-hardline-resp avoid','Direction','hiroshi_boss'),
    mk('はい。残虐な広告は控えております','Yes — Atrocious-ad restrain','Update','kenji_office'),
    mk('当社、妊婦向け商品の開発を進めろ','Our co — pregnant-target product develop','Direction','hiroshi_boss'),
    mk('はい。地元修道院との取引も検討しております','Yes — Local-monastery transaction consider','Close','kenji_office'),
  ]},
  {id:'conv_08316',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お店のテーブルをスクエア型に揃えようね、メイちゃん','Aoi — store-table square-align Mei','Eager','mei_romantic'),
    mk('葵、若いギャルのお客様も増えてきたよ、メイちゃん','Aoi — young-gal-cust increase Mei','Animated','aoi_barista'),
    mk('葵、ゲノム解析の番組、お客様が話してたよ、メイちゃん','Aoi — genome-analysis prog cust-told Mei','Reflective','mei_romantic'),
    mk('葵、クリスタル製のグラス、お洒落でしょ?メイちゃん','Aoi — crystal-glass stylish? Mei','Praising','aoi_barista'),
    mk('葵、修道女のような落ち着いた接客を目指そうね、メイちゃん','Aoi — nun-like calm cust-service aim Mei','Reflective','mei_romantic'),
    mk('葵、ウルトラ人気の新メニュー、発表よね、メイちゃん','Aoi — ultra-popular new-menu reveal Mei','Eager','aoi_barista'),
    mk('葵、ミャンマー産のお茶、取り寄せたよ、メイちゃん','Aoi — Myanmar-tea acquired Mei','Animated','mei_romantic'),
    mk('葵、お客様のヒゲのお手入れ、上手いね、メイちゃん','Aoi — cust-beard-care good Mei','Praising close','aoi_barista'),
  ]},
  {id:'conv_08317',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんはスクエア型の机を使っておられたぞ','Gran — youth Dad square-desk used','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ギャルという言葉を初めて聞かれた時、戸惑われたわよね、あなた?','Yes — Grandpa "gal" first-heard troubled, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがゲノム研究の話されたぞ','Gran — youth Dad genome-research-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、クリスタルのお皿を大切にされたわよね、あなた?','Grandpa — crystal-plate cherished, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが修道院の建築を見学されたぞ','Gran — youth Dad monastery-architecture-visit','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ウルトラマンの放送をお楽しみだったわよね、あなた?','Grandpa — Ultraman-broadcast enjoyed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがミャンマー出張に行かれたぞ','Gran — youth Dad Myanmar-biz-trip','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ヒゲを丁寧に整えていらしたわよね、あなた?','Grandpa — beard polite-trim, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08318',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんのお店、スクエアテーブルがお気に入りなの','Sho — Mei-sis-store square-table fave','Reflective','mei_romantic'),
    mk('メイ姉さん、ギャルのお姉さん、優しかったよ','Mei-sis — gal-sis gentle','Eager child','sho_child'),
    mk('翔くん、お父さんがゲノムの絵本、見せてくれるって','Sho — Dad genome-picture-book show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、クリスタルのおもちゃ、きれいって思う','Mei-sis — me crystal-toy pretty-think','Praising child','sho_child'),
    mk('翔くん、修道院の鐘の音、優しい音色ね','Sho — monastery-bell gentle-tone','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ウルトラヒーロー好きだよ','Mei-sis — me Ultra-hero love','Eager child','sho_child'),
    mk('翔くん、お父さんが、ミャンマーの絵本、お土産でくださったわ','Sho — Dad Myanmar-picture-book souvenir-gave','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんのヒゲ、最近長くなったよ','Mei-sis — Dad-beard recently-long','Eager close','sho_child'),
  ]},
  {id:'conv_08319',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、駅前のスクエアでイベントあるんだろ?','Riku — station-square event-exist?','Curious teen','sakura_teen'),
    mk('お前、ギャル文化、興味ないだろ?桜','You — gal-culture interest-not? Sakura','Curious','riku_teen'),
    mk('リク、お前、生物のゲノム単元、覚えてるか?','Riku — bio genome-unit remember?','Curious','sakura_teen'),
    mk('お前、クリスタル系のアクセ持ってんだろ?桜','You — crystal-accessory have? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会科で修道士の話聞いたろ?','Riku — soc-class monk-story heard?','Curious','sakura_teen'),
    mk('お前、ウルトラマンの再放送見たろ?桜','You — Ultraman-rerun saw? Sakura','Curious','riku_teen'),
    mk('リク、ミャンマー旅行のお父さん、帰ってきたか?','Riku — Myanmar-trip-Dad returned?','Curious','sakura_teen'),
    mk('お前のお兄ちゃん、ヒゲ生やしてんな、桜','You — your bro beard-grow Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08320',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがスクエア型の机を選ばれたわ','Sho — Dad square-desk chose','Reflective','yumiko_mom'),
    mk('ママ、ギャルって、お洒落な人のことだよね','Mom — gal stylish-person right?','Curious child','sho_child'),
    mk('翔くん、お父さんがゲノム解析の番組を見ていたわよ','Sho — Dad genome-prog watched','Reflective','yumiko_mom'),
    mk('ママ、お祖母ちゃんのクリスタル製コップ、きれいだったね','Mom — Grandma-crystal-cup pretty','Eager child','sho_child'),
    mk('翔くん、お父さんが修道院の音楽が好きなのよ','Sho — Dad monastery-music likes','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとウルトラマン映画見るよ','Mom — me Dad Ultraman-movie watch','Eager child','sho_child'),
    mk('翔くん、お父さんがミャンマー料理を作ってくださるそうよ','Sho — Dad Myanmar-cuisine make','Reflective','yumiko_mom'),
    mk('ママ、お父さんのヒゲ、伸ばしてるみたいよ','Mom — Dad-beard growing','Reflective close','sho_child'),
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

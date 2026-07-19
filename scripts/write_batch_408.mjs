import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_408 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['金儲け','とことん','さりげ','ガンガン','ハゲ','音量','見物','ねらい']
const B_T = ['カンファレンス','コマーシャル','プロバイダー','申し入れ','立候補','過半数','申立','処遇']
const C_T = ['目下','下車','一向に','終結','逸脱','釈放','破棄','自爆']
const D_T = ['ヒューマン','ギア','タブー','シアトル','ロサンゼルス','スターリン','麻雀','アクティブ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08121',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんはお仕事は金儲けだけじゃないって言ってたよ','Sho — Dad work-not-just-profit said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、宿題、とことん頑張るよ','Mom — me homework fully-try','Eager child','sho_child'),
    mk('翔くん、さりげない優しさが素敵ね','Sho — subtle-kindness lovely','Tender','yumiko_mom'),
    mk('ママ、お父さん、車のラジオをガンガン鳴らしてたよ','Mom — Dad car-radio blasting','Animated child','sho_child'),
    mk('翔くん、お父さんがハゲかけてるって悩んでるわよ','Sho — Dad balding worried','Wry','yumiko_mom'),
    mk('ママ、テレビの音量、もう少し下げてもいい?','Mom — TV-volume lower-OK?','Curious child','sho_child'),
    mk('翔くん、近所の祭り、見物に行きましょうね','Sho — local-fest watch go','Eager','yumiko_mom'),
    mk('ママ、ぼくのお誕生日プレゼントの、ねらいはお父さんに伝わってるよね?','Mom — my bday-gift aim Dad-conveyed?','Curious close','sho_child'),
  ]},
  {id:'conv_08122',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店は金儲けだけじゃない、メイちゃん','Aoi — store not-just-profit Mei','Reflective','mei_romantic'),
    mk('葵、新メニュー、とことん試作したよ、メイちゃん','Aoi — new-menu fully-prototyped Mei','Animated','aoi_barista'),
    mk('葵、お客様、さりげない気遣いに感動されたよ、メイちゃん','Aoi — cust subtle-care moved Mei','Tender','mei_romantic'),
    mk('葵、お隣のお店、ガンガン宣伝してるね、メイちゃん','Aoi — next-store blasting-ads Mei','Reflective','aoi_barista'),
    mk('葵、お客様の写真、ハゲ部分があっても気にしないでね、メイちゃん','Aoi — cust-photo bald-part don\'t-mind Mei','Caring','mei_romantic'),
    mk('葵、BGMの音量、お客様に確認しようね、メイちゃん','Aoi — BGM-volume cust-verify Mei','Practical','aoi_barista'),
    mk('葵、新メニューの試食会、見物のお客様、多かったね、メイちゃん','Aoi — new-menu-tasting watch-cust many Mei','Animated','mei_romantic'),
    mk('葵、キャンペーンのねらいは新規開拓よね、メイちゃん','Aoi — campaign-aim new-cust Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08123',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは金儲けより道徳を大事にされたぞ','Gran — youth Dad profit-not virtue cherished','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、何事もとことん追求されたわよね、あなた?','Yes — Grandpa anything fully-pursued, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんのさりげないお気遣いに感動したぞ','Gran — youth Dad-subtle-care moved','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫さんとガンガン遊ばれたわよね、あなた?','Grandpa — grandkid-vigorously played, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんのハゲた頭、ばあさんはお優しく見守られたぞ','Gran — Dad bald-head gran-warmly watched','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、テレビの音量を絞ってお話されたわよね、あなた?','Grandpa — TV-volume lowered talked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、田植えの見物に村人が集まったぞ','Gran — youth rice-planting watch villagers gathered','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、商売のねらいを若い私に語ってくださったわよね、あなた?','Grandpa — biz-aim young-me told, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08124',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、お小遣い金儲けに使うなよ','Riku — allowance-profit-use don\'t','Wry teen','sakura_teen'),
    mk('お前、テスト勉強、とことんやれよ、桜','You — test-study fully-do Sakura','Direction','riku_teen'),
    mk('リク、お前、さりげない優しさあるよな','Riku — subtle-kindness have','Praising','sakura_teen'),
    mk('お前、音楽ガンガン鳴らすなよ、桜','You — music blasting don\'t Sakura','Direction','riku_teen'),
    mk('リク、お前のおじいちゃん、ハゲてんだろ?','Riku — your grandpa balding?','Curious','sakura_teen'),
    mk('お前のスマホ、音量小さくしろよ、桜','You — phone volume low Sakura','Direction','riku_teen'),
    mk('リク、お前、文化祭の見物、行こうぜ','Riku — fest watch go','Eager','sakura_teen'),
    mk('お前の作戦のねらいは何だ?桜','You — strategy-aim what? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08125',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんは金儲けだけじゃなく、お客様を大切にしてるの','Sho — Mei-sis not-just-profit cust-cherish','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お勉強、とことん頑張るよ','Mei-sis — me study fully-try','Proud child','sho_child'),
    mk('翔くん、お父さんのさりげないお気遣いは素敵ね','Sho — Dad-subtle-care lovely','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ヘッドホンでガンガン音楽聴いてるよ','Mei-sis — me headphone blasting-music Sakura','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんはハゲても優しい人ね','Sho — Grandpa bald-but gentle','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、テレビの音量、自分で調節するよ','Mei-sis — me TV-volume self-adjust','Proud child','sho_child'),
    mk('翔くん、お祭りの見物、お父さんと行ったのね','Sho — fest watch Dad-went','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼくのプレゼントのねらいは、お祖母ちゃんを喜ばせることだよ','Mei-sis — me gift-aim Grandma-glad','Tender close','sho_child'),
  ]},
  {id:'conv_08126',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、来月のカンファレンスに登壇しろ','Our co — next-mo conf-speak','Crisp','hiroshi_boss'),
    mk('はい。新製品のコマーシャルを来週放送します','Yes — New-product commercial next-week air','Methodical','kenji_office'),
    mk('当社のプロバイダー契約を見直せ','Our co — provider contract review','Direction','hiroshi_boss'),
    mk('はい。取引先からの申し入れ、対応中です','Yes — Partner request handling','Update','kenji_office'),
    mk('社員の役員立候補を歓迎する','Staff exec-candidacy welcome','Direction','hiroshi_boss'),
    mk('はい。株主総会で過半数の支持を得ました','Yes — Shareholder-mtg majority support','Update','kenji_office'),
    mk('当社、訴訟の申立に備えろ','Our co — lawsuit petition prep','Direction','hiroshi_boss'),
    mk('はい。社員の処遇改善を進めております','Yes — Staff treatment improve advance','Close','kenji_office'),
  ]},
  {id:'conv_08127',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('業界カンファレンスに参加しましょう','Industry-conf attend','Brisk','yuki_office'),
    mk('はい。テレビコマーシャルの効果を分析中です','Yes — TV-commercial effect analyze','Cooperative','kenji_office'),
    mk('プロバイダーを変更する案を検討しましょう','Provider-change plan consider','Direction','yuki_office'),
    mk('はい。お客様からの申し入れに迅速対応します','Yes — Cust-request quick-respond','Update','kenji_office'),
    mk('社員の表彰候補に立候補を促しましょう','Staff award-candidate candidacy encourage','Direction','yuki_office'),
    mk('はい。重要案件は過半数の合意で進めましょう','Yes — Imp-matter majority-agree advance','Update','kenji_office'),
    mk('労組からの申立に丁寧に対応しましょう','Union-petition polite-respond','Direction','yuki_office'),
    mk('はい。新人の処遇制度を整えております','Yes — Newcomer-treatment-system arrange','Close','kenji_office'),
  ]},
  {id:'conv_08128',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、国際カンファレンスで発表しろ','Ren — intl-conf present','Mentor','hiroshi_boss'),
    mk('はい。研究費用にコマーシャル制作も入れたいです','Yes — Research-fund commercial also-want','Earnest','ren_uni'),
    mk('蓮、プロバイダー選択でセキュリティ重視しろ','Ren — provider-choice security emphasize','Direction','hiroshi_boss'),
    mk('はい。共著者からの申し入れに丁寧に応えます','Yes — Co-author request polite-answer','Polite','ren_uni'),
    mk('蓮、学会の役員に立候補してみろ','Ren — conf-exec candidacy try','Direction','hiroshi_boss'),
    mk('はい。共同研究で過半数の合意が必要です','Yes — Joint-research majority-agree need','Earnest','ren_uni'),
    mk('蓮、論文盗用の申立に備えて記録を残せ','Ren — paper-plagiarism petition prep record-keep','Direction','hiroshi_boss'),
    mk('はい。指導教官の処遇改善のため働きかけます','Yes — Advisor treatment-improve work-on','Earnest close','ren_uni'),
  ]},
  {id:'conv_08129',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、防犯カンファレンスを主催しております','Police crime-prev-conf host','Calm','takeda_officer'),
    mk('はい。警察、公共広告コマーシャルもお作りなんですね','Yes — Police pub-ad commercial-make','Cooperative','kenji_office'),
    mk('警察、通信プロバイダーと連携して捜査しております','Police comm-provider coop inv','Procedural','takeda_officer'),
    mk('はい。市民からの申し入れに警察、丁寧対応ありがたいです','Yes — Citizen-request police polite grateful','Cooperative','kenji_office'),
    mk('警察、警察官の役員立候補制度がございます','Police officer exec-candidacy-system exist','Procedural','takeda_officer'),
    mk('はい。地域代表者会議で過半数の同意を得たそうですね','Yes — Region-rep-mtg majority-agree got','Cooperative','kenji_office'),
    mk('警察、容疑者からの再審申立に対応しております','Police suspect retrial-petition handle','Procedural','takeda_officer'),
    mk('はい。被害者の処遇配慮、警察、徹底ですね','Yes — Victim-treatment-consider police-thorough','Close','kenji_office'),
  ]},
  {id:'conv_08130',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、業界カンファレンスでよく講演されたぞ','Dad — industry-conf often-spoke','Sage','hiroshi_elder'),
    mk('はい。お父さんはコマーシャルの威力を見抜かれました','Yes — Dad commercial-power saw','Commitment','hiroshi_boss'),
    mk('お父さん、回線プロバイダーの選定にも関与されたぞ','Dad — net-provider selection involved','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の申し入れを真摯に受け止めた','Yes — Dad staff-request sincere-received','Reflective','hiroshi_boss'),
    mk('お父さんは「立候補は責任を伴う」と仰った','Dad — "candidacy responsibility-accompany" said','Wistful','hiroshi_elder'),
    mk('はい。お父さんは過半数の同意を得る丁寧さがあった','Yes — Dad majority-agree get politeness','Reflective','hiroshi_boss'),
    mk('お父さん、社員からの申立を丁寧に扱われたぞ','Dad — staff-petition polite-handled','Wistful','hiroshi_elder'),
    mk('はい。お父さん、社員の処遇改善に尽力されました','Yes — Dad staff-treatment-improve devoted','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08131',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、目下の経済情勢を論文で扱っていましたね','Ren — current econ-situation paper','Calm','asuka_teacher'),
    mk('はい、駅で下車した人々の動線を論文で扱いました','Yes — station-disembarked people flow paper','Earnest','ren_uni'),
    mk('物価が一向に下がらない構造を論文で扱っていましたね','Prices not-falling-at-all structure paper','Reflective','asuka_teacher'),
    mk('はい、冷戦の終結を論文で扱いました','Yes — Cold-War-end paper','Earnest','ren_uni'),
    mk('蓮さん、政治家の規範からの逸脱を論文で扱っていましたね','Ren — politician norm-deviation paper','Engaged','asuka_teacher'),
    mk('はい、囚人の釈放制度を論文で扱いました','Yes — prisoner-release-system paper','Earnest','ren_uni'),
    mk('国際条約の破棄を論文で扱っていましたね','Intl-treaty abrogate paper','Reflective','asuka_teacher'),
    mk('はい、テロの自爆攻撃の心理を論文で扱いました','Yes — terror suicide-attack psyche paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08132',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('警察、目下の重要事件として捜査しております','Police current imp-case inv','Calm','takeda_officer'),
    mk('本件、容疑者は途中駅で下車されたんですね','Case suspect mid-station-disembarked','Curious','ren_uni'),
    mk('警察、犯罪発生が一向に減らない地区を集中警備します','Police crime not-falling area intense-guard','Procedural','takeda_officer'),
    mk('本件、紛争の終結に警察も貢献されたんですね','Case conflict-end police contribute','Reflective','ren_uni'),
    mk('警察、規則からの逸脱を厳しく咎めます','Police rule-deviation strict-reprimand','Procedural','takeda_officer'),
    mk('本件、釈放後の追跡を警察、続けておられますね','Case post-release tracking police-continue','Reflective','ren_uni'),
    mk('警察、押収証拠の破棄は行いません','Police seized-evid don\'t-abrogate','Procedural','takeda_officer'),
    mk('本件、自爆テロを警察、未然に防がれたんですね','Case suicide-terror police preempt-stop','Reflective close','ren_uni'),
  ]},
  {id:'conv_08133',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、目下の経済情勢を論文で扱っていましたね','Sakura — current econ paper','Calm','asuka_teacher'),
    mk('はい、駅で下車した人々の動線を論文で扱いました','Yes — station-disembarked flow paper','Earnest teen','sakura_teen'),
    mk('物価が一向に下がらない構造を論文で扱っていましたね','Prices not-falling paper','Reflective','asuka_teacher'),
    mk('はい、冷戦の終結を論文で扱いました','Yes — Cold-War-end paper','Earnest','sakura_teen'),
    mk('政治家の規範からの逸脱を論文で扱っていましたね','Politician deviation paper','Engaged','asuka_teacher'),
    mk('はい、囚人の釈放制度を論文で扱いました','Yes — prisoner-release paper','Earnest','sakura_teen'),
    mk('国際条約の破棄を論文で扱っていましたね','Intl-treaty abrogate paper','Reflective','asuka_teacher'),
    mk('はい、テロの自爆攻撃の心理を論文で扱いました','Yes — suicide-terror psyche paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08134',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、目下の感染症状況を医療チームは注視しております','Ren — current infection-state med-team watch','Calm','saito_doctor'),
    mk('救急車から下車された患者さんに、貴院は即対応されたんですね、先生','Ambulance-disembarked patient your-hosp immediate, sensei','Curious','ren_uni'),
    mk('治療効果が一向に出ない症例も、医療チームは粘り強く診ます','Tx-effect not-emerging med-team persistent-diag','Patient','saito_doctor'),
    mk('感染拡大の終結まで、貴院、奮闘されますね、先生','Infection-spread-end your-hosp struggle, sensei','Reflective','ren_uni'),
    mk('はい、医療規範からの逸脱は医療チームでは絶対許しません','Yes — Med-norm-deviation med-team absolutely-don\'t-allow','Patient','saito_doctor'),
    mk('退院後、釈放感を覚える患者さんに、貴院、心のケアもされますね、先生','Post-discharge release-feel patient your-hosp mental-care, sensei','Reflective','ren_uni'),
    mk('はい、医療記録の破棄は厳しく管理しております','Yes — Med-record abrogate strict-manage','Patient','saito_doctor'),
    mk('テロの自爆被害者に対し、貴院、医療支援を申し出られたんですね、先生','Suicide-terror victim your-hosp med-support-offered, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08135',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、目下の業績を回復させろ','Our co — current-perf restore','Crisp','hiroshi_boss'),
    mk('はい。出張から下車した直後に報告いたします','Yes — Biz-trip disembarked immediate report','Methodical','kenji_office'),
    mk('当社、売上が一向に伸びない商品は撤退しろ','Our co — sales not-growing product withdraw','Direction','hiroshi_boss'),
    mk('はい。プロジェクト終結のロードマップを引きます','Yes — Project-end roadmap draw','Update','kenji_office'),
    mk('当社、規範から逸脱した社員は処分しろ','Our co — norm-deviated staff discipline','Direction','hiroshi_boss'),
    mk('はい。長期在庫の釈放販売を提案いたします','Yes — Long-stock release-sale propose','Update','kenji_office'),
    mk('破棄寸前の契約書を整理しろ','Near-abrogate contract organize','Direction','hiroshi_boss'),
    mk('はい。広告では自爆覚悟の挑戦的キャンペーンを企画しております','Yes — Ad suicide-resolve challenging-campaign plan','Close','kenji_office'),
  ]},
  {id:'conv_08136',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、新しいお店、ヒューマンなあたたかみがあるね、メイちゃん','Aoi — new-store human-warmth Mei','Reflective','mei_romantic'),
    mk('葵、自転車のギアを変えたら走りやすくなったよ、メイちゃん','Aoi — bike gear changed easy-ride Mei','Animated','aoi_barista'),
    mk('葵、芸能界のタブーって、いろいろあるよね、メイちゃん','Aoi — entertainment-taboo many-exist Mei','Reflective','mei_romantic'),
    mk('葵、シアトルのコーヒー文化、勉強したいな、メイちゃん','Aoi — Seattle-coffee-culture study-want Mei','Eager','aoi_barista'),
    mk('葵、ロサンゼルスにカフェ旅行行きたいよね、メイちゃん','Aoi — LA-cafe-trip go-want Mei','Eager','mei_romantic'),
    mk('葵、スターリン時代の歴史本、お客様が読んでたよ、メイちゃん','Aoi — Stalin-era history-book cust-read Mei','Reflective','aoi_barista'),
    mk('葵、お客様が麻雀の話で盛り上がってたよ、メイちゃん','Aoi — cust mahjong-talk lively Mei','Animated','mei_romantic'),
    mk('葵、お店の運営、アクティブにしようね、メイちゃん','Aoi — store-mgmt active-make Mei','Eager close','aoi_barista'),
  ]},
  {id:'conv_08137',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんはヒューマン主義の本を読んでらしたぞ','Gran — youth Dad humanism-book read','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、自転車のギアを修理されたわよね、あなた?','Yes — Grandpa bike-gear repaired, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃんがタブーを語る勇気をお持ちだった','Gran — youth Grandpa taboo-tell courage','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、シアトルにお仕事で訪問されたわよね、あなた?','Grandpa — Seattle work-visit, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ロサンゼルスの記事を新聞で読んだぞ','Gran — youth LA-article news-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、スターリン時代の話を語ってくださったわよね、あなた?','Grandpa — Stalin-era told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃんと麻雀をしたぞ','Gran — youth Grandpa-mahjong played','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、最後までアクティブに過ごされたわよね、あなた?','Grandpa — until-end active stayed, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08138',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お母さんのお仕事はヒューマンなお仕事ね','Sho — Mom-work human-work','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、自転車のギア、覚えたよ','Mei-sis — me bike-gear learned','Proud child','sho_child'),
    mk('翔くん、ご家庭のタブーって、お家ごとにあるのね','Sho — home-taboo home-by-home exist','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんがシアトル出張に行くんだって','Mei-sis — Dad Seattle-biz-trip going','Eager child','sho_child'),
    mk('翔くん、メイ姉さんはロサンゼルスに行きたいわ','Sho — Mei-sis LA go-want','Eager','mei_romantic'),
    mk('メイ姉さん、ぼく、図書館でスターリンの本見たよ','Mei-sis — me library Stalin-book saw','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが麻雀好きでいらっしゃるそうよ','Sho — Grandpa mahjong-like','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お外でアクティブに遊ぶよ','Mei-sis — me outside actively-play','Eager close','sho_child'),
  ]},
  {id:'conv_08139',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ヒューマンドラマ好きだろ?','Riku — you human-drama like?','Curious teen','sakura_teen'),
    mk('お前、自転車のギア、上手く使えてるな、桜','You — bike-gear well-use Sakura','Praising','riku_teen'),
    mk('リク、学校でのタブーって、いろいろあるよな','Riku — school-taboo many-exist','Reflective','sakura_teen'),
    mk('お前、シアトルマリナーズのファンだろ?桜','You — Seattle-Mariners fan? Sakura','Curious','riku_teen'),
    mk('リク、お前、ロサンゼルスドジャースも好きだよな','Riku — LA-Dodgers also-like','Curious','sakura_teen'),
    mk('お前、世界史でスターリンの単元、苦戦したろ?桜','You — world-hist Stalin-unit struggled? Sakura','Teasing','riku_teen'),
    mk('リク、お前、麻雀のルール知ってんのか?','Riku — mahjong-rules know?','Curious','sakura_teen'),
    mk('お前、放課後もアクティブに部活してんな、桜','You — after-school active club Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08140',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんの会社はヒューマンな職場らしいわよ','Sho — Dad-co human-workplace','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと自転車のギア、いじったよ','Mom — me Dad-bike-gear tinkered','Eager child','sho_child'),
    mk('翔くん、ご家庭でのタブーって意外と多いのよ','Sho — home-taboo surprisingly many','Reflective','yumiko_mom'),
    mk('ママ、お父さんが、シアトルに留学してたんだって','Mom — Dad Seattle studied-abroad','Curious child','sho_child'),
    mk('翔くん、ロサンゼルスは温かい街らしいわね','Sho — LA warm-city','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんがスターリン時代の話を聞かせてくれたよ','Mom — Grandpa Stalin-era told','Reflective child','sho_child'),
    mk('翔くん、お祖父ちゃんは麻雀の名人らしいわよ','Sho — Grandpa mahjong-master','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お休みの日もアクティブに過ごしたいよ','Mom — me off-day active spend-want','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_410 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['手のひら','アクセント','モーニング','出来上がり','隣人','いわく','たかが','まかせ']
const B_T = ['有能','異例','セクター','ワイド','賞金','物品','非常勤','マネジャー']
const C_T = ['主席','報復','紫外線','盗聴','衰え','反抗','自閉症','射撃']
const D_T = ['サックス','ダイビング','モデム','ロジック','スロット','エッチ','楽園','着席']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08161',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、ママの手のひらに乗るおもちゃ、お気に入りね','Sho — Mom-palm-fit toy fave','Tender','yumiko_mom'),
    mk('ママ、お父さんの英語、アクセントが独特だよね','Mom — Dad-English accent unique','Reflective child','sho_child'),
    mk('翔くん、お父さんが、モーニングコーヒー入れてくれたわよ','Sho — Dad morning-coffee made','Reflective','yumiko_mom'),
    mk('ママ、ケーキの出来上がり、すごい','Mom — cake-finish amazing','Eager child','sho_child'),
    mk('翔くん、隣人にもご挨拶、忘れないでね','Sho — neighbor greet don\'t-forget','Direction','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんいわく、運動が大事だって','Mom — me Grandpa-says exercise-important','Reflective child','sho_child'),
    mk('翔くん、たかがテスト、気にしないでね','Sho — mere-test don\'t-worry','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんにお仕事まかせるよ','Mom — me Dad-work entrust','Reflective close','sho_child'),
  ]},
  {id:'conv_08162',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様の手のひらに小さなクッキー、お渡しできるかな、メイちゃん','Aoi — cust-palm small-cookie give-can? Mei','Reflective','mei_romantic'),
    mk('葵、関西アクセントのお客様、いらしたよ、メイちゃん','Aoi — Kansai-accent cust came Mei','Animated','aoi_barista'),
    mk('葵、モーニングセット、人気よね、メイちゃん','Aoi — morning-set popular Mei','Praising','mei_romantic'),
    mk('葵、新作ケーキの出来上がり、お洒落ね、メイちゃん','Aoi — new-cake-finish stylish Mei','Praising','aoi_barista'),
    mk('葵、隣人さんへのご挨拶、欠かさないでね、メイちゃん','Aoi — neighbor-greet don\'t-skip Mei','Direction','mei_romantic'),
    mk('葵、コーヒー通いわく、温度が大事って、メイちゃん','Aoi — coffee-pro-says temp-important Mei','Reflective','aoi_barista'),
    mk('葵、たかがコーヒーって思わないで、丁寧に淹れようね、メイちゃん','Aoi — mere-coffee don\'t-think polite-brew Mei','Direction','mei_romantic'),
    mk('葵、新人さんに調理をまかせる時期だよね、メイちゃん','Aoi — newcomer cooking entrust time Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08163',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんの手のひらに玉が乗っていたぞ','Gran — youth Dad-palm ball-rested','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、関西アクセントを使ってらしたわよね、あなた?','Yes — Grandpa Kansai-accent used, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんとモーニング喫茶通いをしたぞ','Gran — youth Dad-morning-cafe attended','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お料理の出来上がりにこだわられたわよね、あなた?','Grandpa — cook-finish particular, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが隣人と仲よくされたぞ','Gran — youth Dad-neighbor friendly','Wistful','hiroshi_elder'),
    mk('お祖父ちゃんいわく、人生は学びだとおっしゃってたわね、あなた?','Grandpa-says life-learning said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはたかが失敗で諦めなかったぞ','Gran — youth Dad mere-failure-no-give-up','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お息子に商売をまかせる決断をされたわよね、あなた?','Grandpa — son biz-entrust decided, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08164',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前の手のひら、サインしてやるぜ','Riku — your palm sign','Teasing teen','sakura_teen'),
    mk('お前、英語のアクセントいいな、桜','You — English-accent good Sakura','Praising','riku_teen'),
    mk('リク、お前、モーニングサービスのカフェ知ってる?','Riku — morning-service cafe know?','Curious','sakura_teen'),
    mk('お前の手作り、出来上がり完璧だな、桜','Your handmade finish perfect Sakura','Praising','riku_teen'),
    mk('リク、隣人さん、お前に挨拶してくれたって?','Riku — neighbor you-greeted?','Curious','sakura_teen'),
    mk('お前のお父さんいわく、勉強より体力が大事って、桜','Your Dad-says exercise-than-study important Sakura','Reflective','riku_teen'),
    mk('リク、お前、たかがテストで落ち込むなよ','Riku — mere-test don\'t-down','Encouraging','sakura_teen'),
    mk('お前、ぼくにグループワークまかせるなよ、桜','You — me group-work don\'t-entrust Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08165',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんの手のひらに、ぼくのクッキー乗せて','Sho — Mei-sis-palm me-cookie place','Eager child','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんのアクセント面白いと思う','Mei-sis — me Dad-accent funny-think','Animated child','sho_child'),
    mk('翔くん、お父さんとモーニング喫茶、行きたいな','Sho — Dad-morning-cafe go-want','Eager','mei_romantic'),
    mk('メイ姉さん、ぼくが粘土でお皿の出来上がり、すごいよ','Mei-sis — me clay-plate-finish amazing','Proud child','sho_child'),
    mk('翔くん、隣人のお祖母様にご挨拶しようね','Sho — neighbor-Grandma greet-let\'s','Direction','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんいわく、本を読むのが楽しいって','Mei-sis — Grandpa-says book-read fun','Reflective child','sho_child'),
    mk('翔くん、たかがゲームでケンカしちゃダメよ','Sho — mere-game don\'t-fight','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに宿題まかせるよ','Mei-sis — me Dad-homework entrust','Eager close','sho_child'),
  ]},
  {id:'conv_08166',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、有能な人材を確保しろ','Our co — capable-talent secure','Crisp','hiroshi_boss'),
    mk('はい。当社、業界では異例の成長を遂げております','Yes — Our industry-exceptional-growth achieve','Methodical','kenji_office'),
    mk('当社、製造セクターにも進出しろ','Our co — manufacturing-sector expand','Direction','hiroshi_boss'),
    mk('はい。ワイド戦略で複数市場を狙います','Yes — Wide-strategy multi-market aim','Update','kenji_office'),
    mk('優秀社員に賞金を支給しろ','Excellent-staff award-money grant','Direction','hiroshi_boss'),
    mk('はい。物品の管理を強化しております','Yes — Goods-mgmt strengthen','Update','kenji_office'),
    mk('当社、非常勤社員の待遇も改善しろ','Our co — part-time-staff treatment improve','Direction','hiroshi_boss'),
    mk('はい。新マネジャーの研修を進めております','Yes — New-manager training advance','Close','kenji_office'),
  ]},
  {id:'conv_08167',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('有能な新人を採用しましょう','Capable-newcomer hire','Brisk','yuki_office'),
    mk('はい。当社の異例の躍進が、新聞で紹介されました','Yes — Our exceptional-leap news-featured','Cooperative','kenji_office'),
    mk('IT セクターでの新規事業を検討しましょう','IT-sector new-biz consider','Direction','yuki_office'),
    mk('はい。ワイドな視野で進めます','Yes — Wide-view advance','Update','kenji_office'),
    mk('新人賞金制度を整えましょう','Newcomer-prize-system arrange','Direction','yuki_office'),
    mk('はい。社内物品の在庫管理を電子化しました','Yes — In-house-goods stock-mgmt digitized','Update','kenji_office'),
    mk('非常勤社員の研修も組みましょう','Part-time-staff training arrange','Direction','yuki_office'),
    mk('はい。マネジャー候補を育てる方針を進めます','Yes — Manager-candidate raise policy','Close','kenji_office'),
  ]},
  {id:'conv_08168',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、有能な研究者を目指せ','Ren — capable-researcher aim','Mentor','hiroshi_boss'),
    mk('はい。指導教官は学会で異例のご発表をされました','Yes — Advisor conf-exceptional-pres did','Earnest','ren_uni'),
    mk('蓮、教育セクターでの研究にも興味を持て','Ren — edu-sector research interest','Direction','hiroshi_boss'),
    mk('はい。ワイドな視点で論文を書きます','Yes — Wide-view paper-write','Polite','ren_uni'),
    mk('蓮、コンペで賞金を狙え','Ren — comp award aim','Direction','hiroshi_boss'),
    mk('はい。研究用物品の管理を徹底しております','Yes — Research-goods mgmt-thorough','Earnest','ren_uni'),
    mk('蓮、非常勤の助手にも丁寧に接しろ','Ren — part-time-asst polite-treat','Direction','hiroshi_boss'),
    mk('はい。研究室マネジャーから多くを学んでおります','Yes — Lab-manager many-learn','Earnest close','ren_uni'),
  ]},
  {id:'conv_08169',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、有能な捜査官を配置しております','Police capable-officer deploy','Calm','takeda_officer'),
    mk('はい。警察の異例のスピード解決、ありがたいです','Yes — Police exceptional-speed-solve grateful','Cooperative','kenji_office'),
    mk('警察、民間セクターとも連携します','Police private-sector coop','Procedural','takeda_officer'),
    mk('はい。警察、ワイドな捜査網、頼もしいです','Yes — Police wide-net reliable','Cooperative','kenji_office'),
    mk('警察、情報提供者に賞金制度を用意しております','Police informant award-system prep','Procedural','takeda_officer'),
    mk('はい。警察、押収物品の管理も厳格ですね','Yes — Police seized-goods-mgmt strict','Cooperative','kenji_office'),
    mk('警察、非常勤の警備員も派遣しております','Police part-time-guard dispatch','Procedural','takeda_officer'),
    mk('はい。警察マネジャー職の方々、ご活躍ですね','Yes — Police-manager active','Close','kenji_office'),
  ]},
  {id:'conv_08170',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、有能な部下に恵まれたぞ','Dad — capable-subordinate blessed','Sage','hiroshi_elder'),
    mk('はい。お父さんの代は、業界に異例の存在感を示しました','Yes — Dad-era industry-exceptional-presence','Commitment','hiroshi_boss'),
    mk('お父さん、新セクター開拓に挑戦されたぞ','Dad — new-sector pioneer challenged','Wistful','hiroshi_elder'),
    mk('はい。お父さんはワイドな視野で経営なさいました','Yes — Dad wide-view mgmt','Reflective','hiroshi_boss'),
    mk('お父さん、社員に賞金を出すのを惜しまなかった','Dad — staff-award-give didn\'t-spare','Wistful','hiroshi_elder'),
    mk('はい。お父さんの代から物品管理は厳格でした','Yes — Since Dad goods-mgmt strict','Reflective','hiroshi_boss'),
    mk('お父さん、非常勤の方々にも敬意を払われたぞ','Dad — part-time-staff respect-paid','Wistful','hiroshi_elder'),
    mk('はい。お父さんは初代マネジャーを指導されました','Yes — Dad first-manager mentored','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08171',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、主席卒業者の追跡調査を論文で扱っていましたね','Ren — top-grad tracking paper','Calm','asuka_teacher'),
    mk('はい、国家間の報復措置を論文で扱いました','Yes — state-retaliation paper','Earnest','ren_uni'),
    mk('蓮さん、紫外線が皮膚に与える影響を論文で扱っていましたね','Ren — UV-skin impact paper','Reflective','asuka_teacher'),
    mk('はい、盗聴の歴史を論文で扱いました','Yes — wiretap-history paper','Earnest','ren_uni'),
    mk('帝国の衰えを論文で扱っていましたね','Empire-decline paper','Reflective','asuka_teacher'),
    mk('はい、青年期の反抗心理を論文で扱いました','Yes — adolescent rebellion-psyche paper','Earnest','ren_uni'),
    mk('自閉症スペクトラムの研究を論文で扱っていましたね','Autism-spectrum paper','Engaged','asuka_teacher'),
    mk('はい、射撃競技の歴史を論文で扱いました','Yes — shooting-sport history paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08172',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('警察、容疑者は主席で大学を卒業されたとのこと','Police suspect top university-grad','Calm','takeda_officer'),
    mk('警察、報復事件として捜査中ですね','Police retaliation-case inv, gratitude','Curious','ren_uni'),
    mk('警察、現場の紫外線分析を進めております','Police scene UV-analysis advance','Procedural','takeda_officer'),
    mk('本件、盗聴疑惑を警察、追及されたんですね','Case wiretap-suspicion police-pursue','Reflective','ren_uni'),
    mk('警察、衰えた記憶力の被害者にも丁寧に対応します','Police declined-memory victim polite-treat','Procedural','takeda_officer'),
    mk('本件、反抗的な容疑者を警察、慎重に対応されたんですね','Case rebellious-suspect police-careful','Reflective','ren_uni'),
    mk('警察、自閉症の方への配慮も心がけております','Police autism-person care also-mindful','Procedural','takeda_officer'),
    mk('本件、射撃事件として警察、捜査中ですね','Case shooting police-inv, gratitude','Reflective close','ren_uni'),
  ]},
  {id:'conv_08173',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、主席卒業者の追跡調査を論文で扱っていましたね','Sakura — top-grad tracking paper','Calm','asuka_teacher'),
    mk('はい、国家間の報復措置を論文で扱いました','Yes — state-retaliation paper','Earnest teen','sakura_teen'),
    mk('紫外線が皮膚に与える影響を論文で扱っていましたね','UV-skin paper','Reflective','asuka_teacher'),
    mk('はい、盗聴の歴史を論文で扱いました','Yes — wiretap paper','Earnest','sakura_teen'),
    mk('帝国の衰えを論文で扱っていましたね','Empire-decline paper','Reflective','asuka_teacher'),
    mk('はい、青年期の反抗心理を論文で扱いました','Yes — adolescent rebellion paper','Earnest','sakura_teen'),
    mk('自閉症スペクトラムの研究を論文で扱っていましたね','Autism paper','Engaged','asuka_teacher'),
    mk('はい、射撃競技の歴史を論文で扱いました','Yes — shooting paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08174',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、医学部主席卒業者の追跡を医療チームでも調べております','Ren — med-school top-grad tracking med-team checking','Calm','saito_doctor'),
    mk('感情の報復から起こる心理疾患、貴院、研究なさったんですね、先生','Emotion-retaliation mental-illness your-hosp research, sensei','Curious','ren_uni'),
    mk('はい、紫外線対策を医療チームでも啓発しております','Yes — UV-counter med-team awareness','Patient','saito_doctor'),
    mk('医療盗聴の防止策、貴院、進めておられますね、先生','Med-wiretap-prevent your-hosp advance, sensei','Reflective','ren_uni'),
    mk('はい、骨密度の衰えに関する研究も医療チームは行っております','Yes — Bone-density-decline research med-team do','Patient','saito_doctor'),
    mk('反抗期のお子さんの心のケアも、貴院、お得意ですね、先生','Rebellion-period child mental-care your-hosp specialty, sensei','Reflective','ren_uni'),
    mk('はい、自閉症の支援を医療チームでも力を入れています','Yes — Autism-support med-team emphasize','Patient','saito_doctor'),
    mk('射撃事故の救急対応、貴院、なさったんですね、先生','Shooting-accident ER your-hosp did, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08175',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、入社試験は主席を見極めろ','Our co — entry-test top-identify','Crisp','hiroshi_boss'),
    mk('はい。競合への報復ではなく、独自路線で勝負します','Yes — Competitor-retaliate-not, unique-route','Methodical','kenji_office'),
    mk('当社、紫外線カット製品の開発を急げ','Our co — UV-cut product develop hurry','Direction','hiroshi_boss'),
    mk('はい。社内の盗聴対策を強化しております','Yes — In-house wiretap-counter strengthen','Update','kenji_office'),
    mk('業界が衰える前に新事業を立ち上げろ','Industry-decline-before new-biz launch','Direction','hiroshi_boss'),
    mk('はい。お得意様の反抗的なお声にも丁寧に対応します','Yes — VIP rebellious-voice polite-resp','Update','kenji_office'),
    mk('当社、自閉症の方向けの商品開発も検討しろ','Our co — autism-target product develop consider','Direction','hiroshi_boss'),
    mk('はい。射撃用品の販売も検討しております','Yes — Shooting-goods sales consider','Close','kenji_office'),
  ]},
  {id:'conv_08176',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、ジャズのサックス、お店で流したよ、メイちゃん','Aoi — jazz-sax store-aired Mei','Animated','mei_romantic'),
    mk('葵、お客様がダイビングのお話で盛り上がってたわ、メイちゃん','Aoi — cust diving-talk lively Mei','Animated','aoi_barista'),
    mk('葵、お店のレジ、古いモデムを使ってないよね、メイちゃん','Aoi — store register old-modem-don\'t-use Mei','Curious','mei_romantic'),
    mk('葵、新メニューのロジック、説明したわ、メイちゃん','Aoi — new-menu logic explained Mei','Practical','aoi_barista'),
    mk('葵、テーブルの予約スロット、増やそうね、メイちゃん','Aoi — table-booking-slot expand Mei','Direction','mei_romantic'),
    mk('葵、エッチな話は控えめにね、メイちゃん','Aoi — eechi-talk reserve Mei','Direction','aoi_barista'),
    mk('葵、お店、お客様にとっての楽園にしようね、メイちゃん','Aoi — store cust paradise-make Mei','Tender','mei_romantic'),
    mk('葵、お客様の着席誘導、丁寧にしようね、メイちゃん','Aoi — cust seating polite Mei','Practical close','aoi_barista'),
  ]},
  {id:'conv_08177',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがサックスを吹かれたぞ','Gran — youth Dad sax-played','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、ダイビングを試されたわよね、あなた?','Yes — Grandpa youth diving-tried, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、モデム接続の音、懐かしいぞ','Gran — youth modem-connect-sound nostalgic','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、商売のロジックを学んでらしたわよね、あなた?','Grandpa — biz-logic learned, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖母ちゃんちにスロット遊具があったぞ','Gran — youth Grandma-home slot-toy existed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、エッチな話題は遠ざけてらしたわよね、あなた?','Grandpa — eechi-topic avoided, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「楽園」のような故郷を語られたぞ','Gran — youth Dad "paradise"-hometown told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お客様の着席を礼儀正しくお迎えされたわよね、あなた?','Grandpa — cust-seating courteous welcomed, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08178',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、サックス習ってたのよ','Sho — Mei-sis sax-learned','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとダイビングしたいな','Mei-sis — me Dad-dive want','Eager child','sho_child'),
    mk('翔くん、昔のパソコンにはモデムってあったんだって','Sho — old-PC had-modem','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんのお話のロジック、聞いてるよ','Mei-sis — me Dad-talk logic listen','Proud child','sho_child'),
    mk('翔くん、運動会のリレー、走るスロット、決まったの?','Sho — sports-day-relay slot-decided?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、エッチな漫画は見ないよ','Mei-sis — me eechi-manga don\'t-see','Reflective child','sho_child'),
    mk('翔くん、メイ姉さんのお店、ぼくにとって楽園','Sho — Mei-sis-store me paradise','Tender child','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに着席を促されたよ','Mei-sis — me Dad seating-urged','Reflective close','sho_child'),
  ]},
  {id:'conv_08179',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ジャズ部でサックス吹いてんだろ?','Riku — jazz-club sax-play?','Curious teen','sakura_teen'),
    mk('お前、夏休みダイビング行ったろ?桜','You — summer-vac diving went? Sakura','Curious','riku_teen'),
    mk('リク、お前、モデムって聞いたことあるか?','Riku — modem heard?','Curious','sakura_teen'),
    mk('お前、ぼくの説明のロジック、おかしいって言うなよ、桜','You — me explanation-logic don\'t-say-strange Sakura','Wry','riku_teen'),
    mk('リク、お前、ゲームのスロット好きだろ?','Riku — game-slot like?','Curious','sakura_teen'),
    mk('お前、エッチな話題で笑わせるなよ、桜','You — eechi-topic don\'t-laugh Sakura','Direction','riku_teen'),
    mk('リク、放課後の校庭、ぼくにとって楽園だぜ','Riku — after-school field me paradise','Reflective','sakura_teen'),
    mk('お前、授業中ちゃんと着席しろよ、桜','You — class properly-seat Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_08180',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんはサックスをかつて吹いてらしたのよ','Sho — Dad sax once-played','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとダイビング体験したいよ','Mom — me Dad diving-experience want','Eager child','sho_child'),
    mk('翔くん、お父さんが、モデムから光回線になった話してたわ','Sho — Dad modem-fiber story-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんの説明のロジック、すごいと思う','Mom — me Dad-explain-logic amazing-think','Proud child','sho_child'),
    mk('翔くん、ゲームのスロットだけはやり過ぎちゃダメよ','Sho — game-slot only-don\'t-overdo','Direction','yumiko_mom'),
    mk('ママ、ぼく、エッチな漫画は読まないよ','Mom — me eechi-manga don\'t-read','Reflective child','sho_child'),
    mk('翔くん、メイ姉さんのお店、ぼくの楽園だよ','Sho — Mei-sis-store me paradise','Tender child','sho_child'),
    mk('ママ、ぼく、お父さんに着席って言われたよ','Mom — me Dad seating told','Reflective close','sho_child'),
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

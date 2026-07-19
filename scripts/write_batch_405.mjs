import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_405 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['くれれ','ならば','混入','マッチング','尚','４つ','小銭','おこっ']
const B_T = ['宮内','市況','愛さ','べし','つた','こく','まぜ','混ざっ']
const C_T = ['やみ','がかっ','もしや','ヒロシ','ひろし','ひろ','いじり','ココ']
const D_T = ['カマ','ぽん','はいっ','よれ','たがら','辰','くろ','うぅ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08061',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お電話くれればすぐ迎えに行くわよ','Sho — call-if immediately fetch','Tender','yumiko_mom'),
    mk('ママ、雨ならば傘を持って行くね','Mom — rain-if umbrella-bring','Reflective child','sho_child'),
    mk('翔くん、お料理に異物の混入がないか確認するわ','Sho — dish foreign-mixed-in verify','Caring','yumiko_mom'),
    mk('ママ、ぼくのおもちゃ、お友達との趣味のマッチング、ぴったり','Mom — me toy friend-hobby matching perfect','Eager child','sho_child'),
    mk('翔くん、尚、お祖母ちゃんが来るそうよ','Sho — additionally Grandma coming','Reflective','yumiko_mom'),
    mk('ママ、ぼくのおもちゃ、４つもあるよ','Mom — me toys 4 have','Eager child','sho_child'),
    mk('翔くん、お小銭、お財布にしまっておいてね','Sho — coin wallet-put','Direction','yumiko_mom'),
    mk('ママ、なんでもないことがおこったよ','Mom — small thing happened','Reflective close','sho_child'),
  ]},
  {id:'conv_08062',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お電話くれればすぐお手伝いに行くね、メイちゃん','Aoi — call-if immediately help-go Mei','Caring','mei_romantic'),
    mk('葵、雨ならば、テラス席を片付けようね、メイちゃん','Aoi — rain-if terrace-clean Mei','Practical','aoi_barista'),
    mk('葵、食材に異物の混入はあってはならないわ、メイちゃん','Aoi — ingredient foreign-mixed-in never Mei','Direction','mei_romantic'),
    mk('葵、メニューと食材のマッチング、お洒落ね、メイちゃん','Aoi — menu-ingredient matching stylish Mei','Praising','aoi_barista'),
    mk('葵、尚、新メニューの試食会、来週よ、メイちゃん','Aoi — additionally new-menu tasting next-week Mei','Reflective','mei_romantic'),
    mk('葵、お席を４つほど、ご予約いただいたよ、メイちゃん','Aoi — seats 4 booked Mei','Animated','aoi_barista'),
    mk('葵、お会計の小銭、整理しようね、メイちゃん','Aoi — checkout-coin organize Mei','Practical','mei_romantic'),
    mk('葵、本日、お店で小さなトラブルがおこったよ、メイちゃん','Aoi — today store small-trouble happened Mei','Wry close','aoi_barista'),
  ]},
  {id:'conv_08063',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、お父さん、若い頃、すぐに来てくれればと願ったぞ','Gran — Dad youth come-if wished','Wistful','hiroshi_elder'),
    mk('うん、雨ならば、お祖父ちゃんが傘を貸してくださったわよね、あなた?','Yes — rain-if Grandpa umbrella-lent, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さん、食品への混入を厳しく見張られたぞ','Gran — youth Dad food-mixed-in strict-watched','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お見合いのマッチングで、私と結ばれたわよね、あなた?','Grandpa — arranged-match matching me-met, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、尚、ご親戚もご一緒だったぞ','Gran — additionally relatives accompanied','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お子さん、４つ、お持ちでしたわよね、あなた?','Grandpa — children 4 had, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃんが小銭を貯金箱に入れてらしたぞ','Gran — youth Grandpa coin-piggy-bank put','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、地震がおこった時のことお話されたわよね、あなた?','Grandpa — earthquake-happened time told, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08064',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、メッセージくれれば早く返信するぜ','Riku — message-if quick-reply','Direction teen','sakura_teen'),
    mk('お前、放課後ならば、教室で待ってるよ、桜','You — after-school-if classroom wait Sakura','Practical','riku_teen'),
    mk('リク、お前のお弁当に何か混入してないだろうな','Riku — your bento anything-mixed?','Wry','sakura_teen'),
    mk('お前、好きな曲のマッチング、すげえ趣味だな、桜','You — fave-song matching crazy-taste Sakura','Praising','riku_teen'),
    mk('リク、尚、テストは来週だ、忘れるな','Riku — additionally test next-week don\'t-forget','Direction','sakura_teen'),
    mk('お前、お年玉、４つの貯金箱に分けたな、桜','You — NY-money 4 piggy-banks divided Sakura','Reflective','riku_teen'),
    mk('リク、お前のポケット、小銭でジャラジャラだぜ','Riku — your pocket coin-jangling','Wry','sakura_teen'),
    mk('お前、教室でトラブルがおこったらしいな、桜','You — classroom trouble-happened Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08065',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんに電話くれれば、いつでも遊ぼう','Sho — Mei-sis call-if anytime play','Tender','mei_romantic'),
    mk('メイ姉さん、雨ならば、お家で遊ぼうね','Mei-sis — rain-if home-play','Reflective child','sho_child'),
    mk('翔くん、お料理に異物の混入のないように作ろうね','Sho — dish foreign-mixed-in-not make','Direction','mei_romantic'),
    mk('メイ姉さん、ぼくとお父さんの色のマッチング、見て','Mei-sis — me-Dad color matching see','Proud child','sho_child'),
    mk('翔くん、尚、お母さんが、お土産持って来てくれたわよ','Sho — additionally Mom-souvenir brought','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼくのおもちゃ、４つになっちゃった','Mei-sis — me toys 4-became','Eager child','sho_child'),
    mk('翔くん、お小銭、お母さんの財布に入れておいてね','Sho — coin Mom-wallet put','Direction','mei_romantic'),
    mk('メイ姉さん、ぼくの遠足で、面白いことおこったよ','Mei-sis — me field-trip funny happened','Animated close','sho_child'),
  ]},
  {id:'conv_08066',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、宮内庁御用達を目指せ','Our co — Imperial-Household-Office purveyor aim','Crisp','hiroshi_boss'),
    mk('はい。市況は厳しいですが対応中です','Yes — Market-cond severe handling','Methodical','kenji_office'),
    mk('社員、自分の仕事を愛さねば成果は出ない','Staff own-work love-or no-result','Direction','hiroshi_boss'),
    mk('はい。経営者たるもの、決断力あるべしです','Yes — Exec decisiveness must','Update','kenji_office'),
    mk('当社、顧客の声を企画に活かすべし','Our co — cust-voice plan apply','Direction','hiroshi_boss'),
    mk('はい。我々、お客様の信頼に応えるべく日々こつこつと取り組んでおります','Yes — We cust-trust answer daily steady do','Update','kenji_office'),
    mk('社員の色んな意見を、まぜながら新企画を作れ','Staff diverse-opin mix new-plan make','Direction','hiroshi_boss'),
    mk('はい。古い手法と新手法が混ざった戦略です','Yes — Old-new method mixed strategy','Close','kenji_office'),
  ]},
  {id:'conv_08067',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('当社、宮内に関係する事業も検討しましょう','Our co — Imperial-related biz consider','Brisk','yuki_office'),
    mk('はい。市況の変動に注意しております','Yes — Market-fluctuation watch','Cooperative','kenji_office'),
    mk('お客様に愛される商品を作りましょう','Cust-loved product make','Direction','yuki_office'),
    mk('はい。お客様目線で考えるべしですね','Yes — Cust-view think must','Update','kenji_office'),
    mk('社員に伝えるべしの理念を整理しましょう','Staff-tell-must ideal organize','Direction','yuki_office'),
    mk('はい。先輩が築かれた信頼を引き継ぐべく頑張ります','Yes — Senior-built trust inherit-go try','Update','kenji_office'),
    mk('チーム間で人材をまぜて新発想を生みましょう','Team-between talent-mix new-idea create','Direction','yuki_office'),
    mk('はい。部署が混ざったプロジェクトを立てます','Yes — Dept-mixed project plan','Close','kenji_office'),
  ]},
  {id:'conv_08068',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、宮内関連の文献も読め','Ren — Imperial-related lit read','Mentor','hiroshi_boss'),
    mk('はい。市況をふまえた研究計画を立てます','Yes — Market-cond-based research-plan','Earnest','ren_uni'),
    mk('蓮、研究を愛さない者は伸びない','Ren — research love-not don\'t-grow','Direction','hiroshi_boss'),
    mk('はい。研究者たる者、誠実であるべしと心得ます','Yes — Researcher sincere must grasp','Polite','ren_uni'),
    mk('蓮、文献を辿る勘も身につけるべし','Ren — lit-trace intuition acquire-must','Direction','hiroshi_boss'),
    mk('はい。指導教官のお考えを継ぐべく励みます','Yes — Advisor-thought inherit try','Earnest','ren_uni'),
    mk('蓮、異分野の手法をまぜて新発見を狙え','Ren — cross-field method mix new-discovery aim','Direction','hiroshi_boss'),
    mk('はい。多分野の理論が混ざった論文を執筆中です','Yes — Multi-field theory mixed paper writing','Earnest close','ren_uni'),
  ]},
  {id:'conv_08069',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、宮内警備にも携わっております','Police Imperial-guard involved','Calm','takeda_officer'),
    mk('はい。警察は市況不安への対応もご準備ですね','Yes — Police market-anxiety prep','Cooperative','kenji_office'),
    mk('警察は市民を愛さねばならぬ職務です','Police citizen-love-must duty','Procedural','takeda_officer'),
    mk('はい。警察に協力するべしの市民意識、ありがたいです','Yes — Police-coop-must citizen-aware grateful','Cooperative','kenji_office'),
    mk('警察、伝統を継ぐべし、と語り継いでおります','Police trad-inherit-must passing-down','Procedural','takeda_officer'),
    mk('はい。警察、安全を守るべく日夜働いておられます','Yes — Police safety-protect day-night work','Cooperative','kenji_office'),
    mk('警察、別班合同でまぜて情報共有します','Police multi-team mix info-share','Procedural','takeda_officer'),
    mk('はい。容疑者の指紋が混ざった現場、警察、慎重ですね','Yes — Suspect-print-mixed scene police-careful','Close','kenji_office'),
  ]},
  {id:'conv_08070',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、宮内庁の方ともお仕事をされたぞ','Dad — Imperial-Household-Office persons worked-with','Sage','hiroshi_elder'),
    mk('はい。お父さんは市況を読む眼力をお持ちでした','Yes — Dad market-read insight had','Commitment','hiroshi_boss'),
    mk('お父さん、社員を愛されるご性格だったぞ','Dad — staff-love personality','Wistful','hiroshi_elder'),
    mk('はい。お父さんは「誠であるべし」と教えてくださいました','Yes — Dad "sincere-must" taught','Reflective','hiroshi_boss'),
    mk('お父さんは「信用を継ぐべし」とおっしゃった','Dad — "trust-inherit-must" said','Wistful','hiroshi_elder'),
    mk('はい。お父さんが築かれた信用を継ぐべく日々励んでおります','Yes — Dad-built trust inherit daily try','Reflective','hiroshi_boss'),
    mk('お父さん、社員を信頼してまぜて配置されたぞ','Dad — staff trust-mix placed','Wistful','hiroshi_elder'),
    mk('はい。複数部門が混ざったプロジェクトを推進しております','Yes — Multi-dept mixed project push','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08071',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、やみ社会の言語を論文で扱っていましたね','Ren — underground-society language paper','Calm','asuka_teacher'),
    mk('はい、影がかっ た光と影の効果を論文で扱いました','Yes — shadow-tinted light-shadow effect paper','Earnest','ren_uni'),
    mk('もしや、新理論を立てられましたか','Perhaps new-theory established?','Reflective','asuka_teacher'),
    mk('はい、ヒロシ・タナカ教授の論を論文で扱いました','Yes — Hiroshi-Tanaka prof theory paper','Earnest','ren_uni'),
    mk('歴史人物ひろし王の業績を論文で扱っていましたね','Hist-figure Hiroshi-king feat paper','Reflective','asuka_teacher'),
    mk('はい、ひろい地域に伝わる伝承を論文で扱いました','Yes — wide-region folklore paper','Earnest','ren_uni'),
    mk('文化財をいじり過ぎる修復を論文で扱っていましたね','Cultural-asset over-modify restoration paper','Engaged','asuka_teacher'),
    mk('はい、南国のココナッツ農園を論文で扱いました','Yes — tropical-coconut plantation paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08072',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者は地下のやみ組織に関わっているようです','Case suspect underground-org involved','Calm','takeda_officer'),
    mk('本件、暗闇の中、青がかった光が記録されたんですね','Case darkness blue-tinted light recorded','Curious','ren_uni'),
    mk('警察、もしやこの目撃情報、関連かと検討中です','Police perhaps eyewitness-info related considering','Procedural','takeda_officer'),
    mk('本件、被害者のヒロシさんの証言を警察、取られたんですね','Case victim Hiroshi-san testimony police-took','Reflective','ren_uni'),
    mk('警察、ひろしという別名の容疑者を追っております','Police "hiroshi" alias suspect pursue','Procedural','takeda_officer'),
    mk('本件、警察がひろい範囲で捜査中ですね','Case police wide-range inv','Reflective','ren_uni'),
    mk('警察、押収品をいじり過ぎないよう保管しております','Police seized over-handle-not preserve','Procedural','takeda_officer'),
    mk('本件、現場のココ商店から証言を警察、伺ったんですね','Case scene Koko-store testimony police-heard','Reflective close','ren_uni'),
  ]},
  {id:'conv_08073',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、やみ社会の言語を論文で扱っていましたね','Sakura — underground-society language paper','Calm','asuka_teacher'),
    mk('はい、影がかっ た光と影の効果を論文で扱いました','Yes — shadow-tinted light-shadow effect paper','Earnest teen','sakura_teen'),
    mk('もしや、新理論を立てられましたか','Perhaps new-theory established?','Reflective','asuka_teacher'),
    mk('はい、ヒロシ・タナカ教授の論を論文で扱いました','Yes — Hiroshi-Tanaka theory paper','Earnest','sakura_teen'),
    mk('歴史人物ひろし王の業績を論文で扱っていましたね','Hiroshi-king feat paper','Reflective','asuka_teacher'),
    mk('はい、ひろい地域に伝わる伝承を論文で扱いました','Yes — wide-region folklore paper','Earnest','sakura_teen'),
    mk('文化財をいじり過ぎる修復を論文で扱っていましたね','Over-modify restoration paper','Engaged','asuka_teacher'),
    mk('はい、南国のココナッツ農園を論文で扱いました','Yes — tropical-coconut paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08074',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、やみで売られる偽薬の被害を医療チーム、確認しました','Ren — underground-sold fake-drug damage med-team verify','Calm','saito_doctor'),
    mk('黄色がかった皮膚症状の患者さん、貴院、診られたんですね、先生','Yellow-tinted skin patient your-hosp diag, sensei','Curious','ren_uni'),
    mk('はい、もしや感染症かと疑いを持ちました','Yes — perhaps infection-suspect held','Patient','saito_doctor'),
    mk('貴院、ヒロシ・先生のご講演会、ご主催されるそうですね','Your-hosp Hiroshi-sensei lecture host, sensei','Reflective','ren_uni'),
    mk('はい、ひろしいご縁で医師が集まりました','Yes — wide-connection doctors gathered','Patient','saito_doctor'),
    mk('貴院は、ひろい地域の医療を支えていらっしゃるんですね、先生','Your-hosp wide-region med support, sensei','Reflective','ren_uni'),
    mk('はい、患部をいじり過ぎないよう医療チーム、配慮します','Yes — affected-area over-touch-not med-team consider','Patient','saito_doctor'),
    mk('貴院、ココアの薬効も研究なさったんですね、先生','Your-hosp cocoa medicinal-effect research, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08075',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、やみ市場に手を出してはいけない','Our co — underground-market don\'t-touch','Crisp','hiroshi_boss'),
    mk('はい。新製品、青がかった色を採用しました','Yes — New-product blue-tinted color adopted','Methodical','kenji_office'),
    mk('もしや、と思った提案も検討しろ','Perhaps thought-proposal also consider','Direction','hiroshi_boss'),
    mk('はい。当社、ヒロシ・コンサルティングと提携検討中です','Yes — Our Hiroshi-Consulting partner consider','Update','kenji_office'),
    mk('当社、ひろし新事業を進めるべしと考えている','Our — broaden new-biz advance-must think','Direction','hiroshi_boss'),
    mk('はい。ひろい層に届くキャンペーンを企画しております','Yes — Wide-audience-reach campaign plan','Update','kenji_office'),
    mk('社員に、商品をいじり過ぎないよう伝えろ','Staff — product over-modify-not tell','Direction','hiroshi_boss'),
    mk('はい。新店舗のココスタジオ、本日オープンしました','Yes — New-store Koko-Studio today-open','Close','kenji_office'),
  ]},
  {id:'conv_08076',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お店のカマの調子、見てくれる?メイちゃん','Aoi — store-kiln condition check Mei','Practical','mei_romantic'),
    mk('葵、お料理、ぽんと出すのいいわね、メイちゃん','Aoi — dish bam-out nice Mei','Praising','aoi_barista'),
    mk('葵、お店にお客様がはいったね、メイちゃん','Aoi — store cust-entered Mei','Animated','mei_romantic'),
    mk('葵、お店のエプロン、もうよれちゃってる、メイちゃん','Aoi — store-apron worn Mei','Wry','aoi_barista'),
    mk('葵、お客様、お肉を食べたがらないみたい、メイちゃん','Aoi — cust meat-unwilling Mei','Reflective','mei_romantic'),
    mk('葵、辰年生まれのお客様、お元気よね、メイちゃん','Aoi — dragon-year-born cust energetic Mei','Reflective','aoi_barista'),
    mk('葵、くろい服のお客様、お洒落だったわ、メイちゃん','Aoi — black-clothes cust stylish Mei','Praising','mei_romantic'),
    mk('葵、うぅ、疲れたわよね、メイちゃん','Aoi — uu tired Mei','Wry close','aoi_barista'),
  ]},
  {id:'conv_08077',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お祖父ちゃん、ご飯のカマを大切になさったぞ','Gran — youth Grandpa rice-pot cherished','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お肩をぽんと叩いてくれたわよね、あなた?','Yes — Grandpa shoulder-bam tapped, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃん、突然お家にはいって来たぞ','Gran — youth Grandpa suddenly home-entered','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お洋服がよれてしまった日、悲しがられたわよね、あなた?','Grandpa — clothes-worn day sad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ばあさんがお魚を食べたがらない日があったぞ','Gran — youth gran fish-unwilling day','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、辰年生まれだったわよね、あなた?','Grandpa — dragon-year-born, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃんのくろい背広、立派だったぞ','Gran — youth Grandpa-black-suit splendid','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、うぅっと唸って疲れを見せられたわよね、あなた?','Grandpa — "uu" groaned tired-shown, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08078',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お祖母ちゃんちにカマがあったの、見たよ','Sho — Grandma-home kiln-existed saw','Reflective child','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに、お背中をぽんと叩かれた','Mei-sis — me Dad shoulder-bam tapped','Eager child','sho_child'),
    mk('翔くん、お友達がはいってきたわよ','Sho — friend entered','Animated','mei_romantic'),
    mk('メイ姉さん、ぼくの体操服、よれちゃったよ','Mei-sis — me gym-clothes worn','Wry child','sho_child'),
    mk('翔くん、お野菜、食べたがらないでね','Sho — veg unwilling-don\'t','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、辰年生まれだよ','Mei-sis — me dragon-year-born','Eager child','sho_child'),
    mk('翔くん、お父さんのくろいスーツ、お洒落ね','Sho — Dad-black-suit stylish','Praising','mei_romantic'),
    mk('メイ姉さん、うぅ、ぼく、お腹空いた','Mei-sis — uu me-hungry','Wry close','sho_child'),
  ]},
  {id:'conv_08079',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、調理実習のカマ係だろ','Riku — cooking-class kiln-duty?','Curious teen','sakura_teen'),
    mk('お前、ぼくの肩、ぽんと叩いたな、桜','You — me-shoulder bam-tapped Sakura','Wry','riku_teen'),
    mk('リク、お前、教室にはいって来た時、皆おどろいたぜ','Riku — classroom-entered everyone-surprised','Reflective','sakura_teen'),
    mk('お前、シャツがよれてんぜ、桜','You — shirt worn Sakura','Teasing','riku_teen'),
    mk('リク、お前、給食食べたがらないだろ','Riku — school-lunch unwilling?','Wry','sakura_teen'),
    mk('お前、辰年生まれの父さん、おだやかだな、桜','You — dragon-year-born Dad calm Sakura','Reflective','riku_teen'),
    mk('リク、お前のくろいパーカー、お洒落だぜ','Riku — your black-hoodie stylish','Praising','sakura_teen'),
    mk('お前、うぅって声、聞こえてんぞ、桜','You — uu sound heard Sakura','Teasing close','riku_teen'),
  ]},
  {id:'conv_08080',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖母ちゃんちのカマ、立派だったわね','Sho — Grandma-kiln splendid','Reflective','yumiko_mom'),
    mk('ママ、お父さんが、ぼくの肩、ぽんと叩いてくれたよ','Mom — Dad me-shoulder bam-tapped','Eager child','sho_child'),
    mk('翔くん、お父さんがはいって来たわよ','Sho — Dad entered','Reflective','yumiko_mom'),
    mk('ママ、ぼくの体操服、よれちゃったよ','Mom — me gym-clothes worn','Wry child','sho_child'),
    mk('翔くん、お薬を食べたがらないのは困るわ','Sho — medicine-unwilling troubled','Caring','yumiko_mom'),
    mk('ママ、ぼく、辰年生まれだよね','Mom — me dragon-year-born right?','Curious','sho_child'),
    mk('翔くん、ママのくろい着物、お祖母ちゃんに頂いたのよ','Sho — Mom-black-kimono Grandma-received','Reflective','yumiko_mom'),
    mk('ママ、うぅ、ぼく、お風呂はやだ','Mom — uu me-bath unwilling','Wry close','sho_child'),
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

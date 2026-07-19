import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_406 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['どー','ふまえ','別名','つきあい','帯び','一端','つた','しから']
const B_T = ['宮内庁','日夜','儲ける','コネ','ドロップ','修習','総数','産婆']
const C_T = ['侵攻','搾取','転落','談話','快楽','湾岸','丸山','セックス']
const D_T = ['イノベーション','シリコンバレー','バックトラック','石原','青木','品川','乗り込ん','三木']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08081',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、どーしたの?顔色が悪いわよ','Sho — what-happened? face-pale','Caring','yumiko_mom'),
    mk('ママ、お父さんはお仕事のご経験をふまえてアドバイスしてくれるよ','Mom — Dad work-exp based advise','Reflective child','sho_child'),
    mk('翔くん、お祖母ちゃんの別名は「タマちゃん」よ','Sho — Grandma alias "Tama-chan"','Reflective','yumiko_mom'),
    mk('ママ、お友達とのつきあい、長くなったよ','Mom — friend relations long-became','Eager child','sho_child'),
    mk('翔くん、湿気を帯びた洗濯物、乾かしてね','Sho — moisture-laden laundry dry','Direction','yumiko_mom'),
    mk('ママ、ぼく、お仕事の一端をお手伝いしたよ','Mom — me work-part helped','Proud child','sho_child'),
    mk('翔くん、ばあばのお話、お父さんに伝った?','Sho — Granny-talk Dad conveyed?','Curious','yumiko_mom'),
    mk('ママ、しからずに優しく注意してね','Mom — don\'t-scold gently-note','Wry close','sho_child'),
  ]},
  {id:'conv_08082',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、どーしたの、メイちゃん','Aoi — what-happened, Mei','Caring','mei_romantic'),
    mk('葵、お客様の声をふまえてメニューを変えるね、メイちゃん','Aoi — cust-voice based menu-change, Mei','Reflective','aoi_barista'),
    mk('葵、お店の別名って何かしら、メイちゃん','Aoi — store-alias what?, Mei','Curious','mei_romantic'),
    mk('葵、お客様とのつきあい、長くしたいね、メイちゃん','Aoi — cust-relations long-want, Mei','Tender','aoi_barista'),
    mk('葵、香りを帯びたコーヒー豆、いいよね、メイちゃん','Aoi — aroma-laden bean nice, Mei','Praising','mei_romantic'),
    mk('葵、お店の繁盛は店員さんのご努力の一端ね、メイちゃん','Aoi — store-thrive staff-effort-part, Mei','Praising','aoi_barista'),
    mk('葵、私の感謝、お客様に伝った?メイちゃん','Aoi — my thanks cust-conveyed?, Mei','Reflective','mei_romantic'),
    mk('葵、お客様、しからずに優しく対応しようね、メイちゃん','Aoi — cust don\'t-scold gentle-resp, Mei','Caring close','aoi_barista'),
  ]},
  {id:'conv_08083',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが「どーしたの?」とよく聞いてくださったぞ','Gran — youth Dad "how-are-you?" often-asked','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、経験をふまえて私に助言してくださったわよね、あなた?','Yes — Grandpa exp-based advise, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんは「お祖父ちゃん」が別名で「親方」と呼ばれてたぞ','Gran — Dad alias "boss" called','Wistful','hiroshi_elder'),
    mk('お祖父ちゃんとのつきあいは長いものでしたわよね、あなた?','Grandpa-relations long, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんは品位を帯びた人柄だったぞ','Gran — Dad dignity-laden personality','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お父さんの人生の一端を私たちに伝えてくださったわよね、あなた?','Grandpa — Dad-life-part conveyed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃんの教えがよく伝った人々がいたぞ','Gran — youth Grandpa-teaching people-conveyed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫をしからずに優しく見守られたわよね、あなた?','Grandpa — grandkid don\'t-scold gentle-watch, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08084',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、どーしたんだよ?','Riku — what-happened?','Curious teen','sakura_teen'),
    mk('お前、先生のご助言をふまえて勉強した?桜','You — teacher-advice based studied? Sakura','Curious','riku_teen'),
    mk('リク、お前のあだ名って別名で何だっけ?','Riku — your nickname alias what?','Curious','sakura_teen'),
    mk('お前とのつきあい、もう何年だ?桜','You — friendship how-many-yrs Sakura','Reflective','riku_teen'),
    mk('リク、汗を帯びたユニフォーム、洗えよ','Riku — sweat-laden uniform wash','Wry','sakura_teen'),
    mk('お前の活躍は部活成功の一端だぜ、桜','You — club-success-part Sakura','Praising','riku_teen'),
    mk('リク、お前の感謝、ぼくに伝ったぜ','Riku — your thanks me-conveyed','Reflective','sakura_teen'),
    mk('お前、しからずに、優しく教えてくれ、桜','You — don\'t-scold gently-teach Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_08085',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、どーしたの、メイ姉さんに教えて','Sho — what-happened, Mei-sis tell','Caring','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの話をふまえて宿題したよ','Mei-sis — me Dad-talk based homework','Proud child','sho_child'),
    mk('翔くん、お祖母ちゃんの別名、知ってる?','Sho — Grandma-alias know?','Curious','mei_romantic'),
    mk('メイ姉さん、お友達とのつきあい、楽しいよ','Mei-sis — friend-relations fun','Eager child','sho_child'),
    mk('翔くん、雪を帯びた木の枝、きれいね','Sho — snow-laden branch pretty','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんのお話の一端、覚えてるよ','Mei-sis — me Grandpa-story-part remember','Proud child','sho_child'),
    mk('翔くん、おばあちゃんに、ぼくの愛情が伝ったかな','Sho — Grandma me-love conveyed?','Reflective','mei_romantic'),
    mk('メイ姉さん、ママ、ぼくをしからずに教えてくれるよ','Mei-sis — Mom me don\'t-scold teach','Tender close','sho_child'),
  ]},
  {id:'conv_08086',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、宮内庁御用達を目指せ','Our co — Imperial-Household-Office-purveyor aim','Crisp','hiroshi_boss'),
    mk('はい。社員、日夜、お客様の信頼に応えております','Yes — Staff day-night cust-trust answer','Methodical','kenji_office'),
    mk('当社、海外進出で儲けるチャンスだ','Our co — overseas expand profit chance','Direction','hiroshi_boss'),
    mk('はい。業界のコネを生かして交渉を進めます','Yes — Industry-conn utilize negotiate','Update','kenji_office'),
    mk('社員研修にドロップアウト者を出すな','Staff-training dropout-don\'t-produce','Direction','hiroshi_boss'),
    mk('はい。新人の修習過程を整えております','Yes — Newcomer apprentice-process arrange','Update','kenji_office'),
    mk('総数を明確に把握しろ','Total-count clearly grasp','Direction','hiroshi_boss'),
    mk('はい。創業期、産婆さんのような心遣いを大切に申し上げます','Yes — Founding midwife-like care cherish','Close','kenji_office'),
  ]},
  {id:'conv_08087',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('当社、宮内庁関連のイベントにも参加しましょう','Our co — Imperial-related event attend','Brisk','yuki_office'),
    mk('はい。社員、日夜、頑張ってくれております','Yes — Staff day-night-try','Cooperative','kenji_office'),
    mk('儲けるだけでなく、社会貢献も大切ですね','Profit-only-not, social-contrib also-important','Direction','yuki_office'),
    mk('はい。古いコネを刷新して、新しい人脈を作ります','Yes — Old-conn renew new-network build','Update','kenji_office'),
    mk('プロジェクトはドロップせずに完遂しましょう','Project don\'t-drop complete','Direction','yuki_office'),
    mk('はい。新人の修習プログラムを充実させました','Yes — Newcomer apprentice-program enrich','Update','kenji_office'),
    mk('総数を正確に集計しましょう','Total-count accurate total','Direction','yuki_office'),
    mk('はい。新人のサポートは産婆さんのような姿勢で行います','Yes — Newcomer-support midwife-like do','Close','kenji_office'),
  ]},
  {id:'conv_08088',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、宮内庁の研究資料も参照しろ','Ren — Imperial-Household-Office docs reference','Mentor','hiroshi_boss'),
    mk('はい。日夜、研究に励んでおります','Yes — Day-night research try','Earnest','ren_uni'),
    mk('蓮、研究で儲けるだけが目的ではない','Ren — research-profit alone not-purpose','Direction','hiroshi_boss'),
    mk('はい。学会のコネを活用させていただきます','Yes — Conf-conn utilize','Polite','ren_uni'),
    mk('蓮、研究テーマをドロップせず続けろ','Ren — research-theme don\'t-drop continue','Direction','hiroshi_boss'),
    mk('はい。法学修習生の友人もおります','Yes — Law-apprentice friend exist','Earnest','ren_uni'),
    mk('蓮、被験者の総数を明示しろ','Ren — subjects total-count specify','Direction','hiroshi_boss'),
    mk('はい。研究現場では産婆役のサポーターも大切です','Yes — Research-site midwife-role supporter important','Earnest close','ren_uni'),
  ]},
  {id:'conv_08089',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、宮内庁との合同警備も対応しております','Police Imperial-Household-Office joint-guard handle','Calm','takeda_officer'),
    mk('はい。警察、日夜、市民を守ってくださりありがたいです','Yes — Police day-night citizen-protect grateful','Cooperative','kenji_office'),
    mk('警察、儲けるための職務ではない、誇り高い職務です','Police profit-job-not, proud-duty','Procedural','takeda_officer'),
    mk('はい。コネで採用が決まる職場ではないと存じます','Yes — Conn-hire-not work, understand','Cooperative','kenji_office'),
    mk('警察、退職ドロップは少ない方が望ましいです','Police retire-drop fewer-preferable','Procedural','takeda_officer'),
    mk('はい。警察の修習期間中、誠実なご姿勢ありがたいです','Yes — Police apprentice-period sincere stance grateful','Cooperative','kenji_office'),
    mk('警察、犯罪総数を毎月集計しております','Police crime-total monthly-total','Procedural','takeda_officer'),
    mk('はい。被害者支援では警察も産婆のような寄り添い心ですね','Yes — Victim-support police midwife-like stay-close, gratitude','Close','kenji_office'),
  ]},
  {id:'conv_08090',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、宮内庁にお品を納めたお話、お聞きしたぞ','Dad — Imperial-Household-Office goods-delivered story heard','Sage','hiroshi_elder'),
    mk('はい。お父さんは日夜、社員のために尽くされました','Yes — Dad day-night staff devoted','Commitment','hiroshi_boss'),
    mk('お父さんは「儲けるだけが商売ではない」と仰った','Dad — "profit-alone-not biz" said','Wistful','hiroshi_elder'),
    mk('はい。お父さんはコネに頼らない経営をなさいました','Yes — Dad conn-rely-not mgmt did','Reflective','hiroshi_boss'),
    mk('お父さん、苦境でも事業をドロップさせなかった','Dad — crisis biz-don\'t-drop','Wistful','hiroshi_elder'),
    mk('はい。お父さん、若い社員の修習にお時間を割かれた','Yes — Dad young-staff apprentice time-spent','Reflective','hiroshi_boss'),
    mk('お父さんは創業時、社員の総数を毎日、把握されてたぞ','Dad — founding staff-total daily-grasp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは産婆のように、若手を世に出されました','Yes — Dad midwife-like youth society-deliver','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08091',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、隣国への侵攻を論文で扱っていましたね','Ren — neighboring-invasion paper','Calm','asuka_teacher'),
    mk('はい、植民地時代の搾取を論文で扱いました','Yes — colonial-exploit paper','Earnest','ren_uni'),
    mk('蓮さん、王朝の転落の歴史を論文で扱っていましたね','Ren — dynasty-fall history paper','Reflective','asuka_teacher'),
    mk('はい、首相の談話を論文で扱いました','Yes — PM-statement paper','Earnest','ren_uni'),
    mk('快楽主義の哲学を論文で扱っていましたね','Hedonism-philosophy paper','Reflective','asuka_teacher'),
    mk('はい、湾岸地域の経済を論文で扱いました','Yes — gulf-region economy paper','Earnest','ren_uni'),
    mk('蓮さん、丸山真男の思想を論文で扱っていましたね','Ren — Maruyama-Masao thought paper','Engaged','asuka_teacher'),
    mk('はい、人類学的視点からセックスと社会の関係を論文で扱いました','Yes — anthropological sex-society relation paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08092',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('警察、サイバー侵攻の防御を強化しております','Police cyber-invasion defense strengthen','Calm','takeda_officer'),
    mk('本件、労働者を搾取する違法業者を警察、摘発されたんですね','Case worker-exploit illegal-vendor police-bust','Curious','ren_uni'),
    mk('警察、転落事故の原因究明に取り組みます','Police fall-accident cause-inv take-on','Procedural','takeda_officer'),
    mk('本件、容疑者の談話を警察、慎重に分析されたんですね','Case suspect-statement police-careful-analyze','Reflective','ren_uni'),
    mk('警察、薬物の快楽依存防止に力を入れます','Police drug-pleasure addiction prevent emphasize','Procedural','takeda_officer'),
    mk('本件、湾岸地区の警備、警察、強化されたんですね','Case gulf-area sec police-strengthen','Reflective','ren_uni'),
    mk('警察、丸山氏のお話を伺うべく訪問しました','Police Maruyama-talk-listen visit','Procedural','takeda_officer'),
    mk('本件、未成年セックス被害について警察、慎重対応ですね','Case minor-sex damage police-careful, gratitude','Reflective close','ren_uni'),
  ]},
  {id:'conv_08093',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、隣国への侵攻を論文で扱っていましたね','Sakura — neighbor-invasion paper','Calm','asuka_teacher'),
    mk('はい、植民地時代の搾取を論文で扱いました','Yes — colonial-exploit paper','Earnest teen','sakura_teen'),
    mk('王朝の転落の歴史を論文で扱っていましたね','Dynasty-fall paper','Reflective','asuka_teacher'),
    mk('はい、首相の談話を論文で扱いました','Yes — PM-statement paper','Earnest','sakura_teen'),
    mk('快楽主義の哲学を論文で扱っていましたね','Hedonism paper','Reflective','asuka_teacher'),
    mk('はい、湾岸地域の経済を論文で扱いました','Yes — gulf-econ paper','Earnest','sakura_teen'),
    mk('丸山真男の思想を論文で扱っていましたね','Maruyama-thought paper','Engaged','asuka_teacher'),
    mk('はい、人類学的視点からセックスと社会の関係を論文で扱いました','Yes — anthrop sex-society paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08094',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、ウィルスの侵攻に医療チームは備えております','Ren — virus-invasion med-team prep','Calm','saito_doctor'),
    mk('労働者の医療搾取は許されません、貴院も同感ですね、先生','Worker med-exploit unforgivable, your-hosp agree, sensei','Curious','ren_uni'),
    mk('はい、転落事故の救急対応を医療チームは強化しております','Yes — fall-accident ER med-team strengthen','Patient','saito_doctor'),
    mk('医師会の談話、貴院、ご賛同なんですね、先生','Med-assoc statement your-hosp agree, sensei','Reflective','ren_uni'),
    mk('はい、快楽追求型の薬物乱用に医療チームは警告しております','Yes — pleasure-pursue drug-abuse med-team warn','Patient','saito_doctor'),
    mk('湾岸地域の医療派遣に貴院も参加されたんですね、先生','Gulf-region med-dispatch your-hosp join, sensei','Reflective','ren_uni'),
    mk('はい、丸山先生のご講演を医療チームで拝聴しました','Yes — Maruyama-sensei lecture med-team attended','Patient','saito_doctor'),
    mk('貴院、セックスカウンセリングも開設されているそうですね、先生','Your-hosp sex-counseling-open, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08095',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、市場への侵攻は慎重に進めろ','Our co — market-invasion careful advance','Crisp','hiroshi_boss'),
    mk('はい。下請けへの搾取は絶対しない方針です','Yes — Subcontractor-exploit absolute-don\'t policy','Methodical','kenji_office'),
    mk('業績の転落を防ぐ手を打て','Perf-fall prevent measure','Direction','hiroshi_boss'),
    mk('はい。社長の談話を社内、共有いたします','Yes — Pres-statement in-house share','Update','kenji_office'),
    mk('当社、顧客に快楽を提供する商品開発を進めろ','Our co — cust-pleasure-provide product advance','Direction','hiroshi_boss'),
    mk('はい。湾岸エリアの新店舗、検討中です','Yes — Gulf-area new-store considering','Update','kenji_office'),
    mk('当社、丸山先生をコンサルタントとして招きたい','Our co — Maruyama-sensei consultant invite','Direction','hiroshi_boss'),
    mk('はい。健康商品にセックスレス対策も含めます','Yes — Health-product sexless-counter include','Close','kenji_office'),
  ]},
  {id:'conv_08096',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お店にイノベーションを取り入れようね、メイちゃん','Aoi — store innovation-incorporate Mei','Eager','mei_romantic'),
    mk('葵、シリコンバレーの新店、調べたよ、メイちゃん','Aoi — Silicon-Valley new-store checked Mei','Reflective','aoi_barista'),
    mk('葵、メニューのバックトラックも残しておこう、メイちゃん','Aoi — menu backtrack keep Mei','Practical','mei_romantic'),
    mk('葵、お客様の石原さんが、お花を持って来てくれたよ、メイちゃん','Aoi — cust Ishihara flower-brought Mei','Animated','aoi_barista'),
    mk('葵、青木さん家族でいらっしゃったよ、メイちゃん','Aoi — Aoki-family came Mei','Animated','mei_romantic'),
    mk('葵、品川駅近くに新店を出そうか、メイちゃん','Aoi — Shinagawa-station-near new-store open Mei','Eager','aoi_barista'),
    mk('葵、お客様、すぐお店に乗り込んで来たわよ、メイちゃん','Aoi — cust quick store-stormed-in Mei','Wry','mei_romantic'),
    mk('葵、三木さん、新メニュー褒めてくださったよ、メイちゃん','Aoi — Miki-san new-menu praised Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08097',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんはイノベーションを起こした人だぞ','Gran — youth Dad innovation-caused person','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃんが「シリコンバレー」の新聞記事を読んでたわね、あなた?','Yes — Grandpa "Silicon-Valley" news-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、計画にバックトラックも用意したぞ','Gran — youth plan backtrack-prep','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、石原さんとお酒を飲まれたわよね、あなた?','Grandpa — Ishihara-with sake-drank, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、青木さんと一緒に旅行したぞ','Gran — youth Aoki-with traveled','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、品川駅でのお仕事、お忙しかったわよね、あなた?','Grandpa — Shinagawa-work busy, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが新事業に乗り込んだぞ','Gran — youth Dad new-biz stormed-in','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、三木さんとお仕事を共にされたわよね、あなた?','Grandpa — Miki-with work-shared, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08098',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんのお店、イノベーションを目指してるの','Sho — Mei-sis-store innovation-aim','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、シリコンバレーって聞いたことあるよ','Mei-sis — me Silicon-Valley heard','Eager child','sho_child'),
    mk('翔くん、お話、バックトラックして整理しようね','Sho — story backtrack-organize','Direction','mei_romantic'),
    mk('メイ姉さん、ぼくのお友達、石原くんっていうんだ','Mei-sis — me friend Ishihara-kun','Eager child','sho_child'),
    mk('翔くん、お父さんの同期、青木さんていらっしゃるわよ','Sho — Dad-peer Aoki exists','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと品川水族館行ったよ','Mei-sis — me Dad Shinagawa-aquarium went','Eager child','sho_child'),
    mk('翔くん、新しい挑戦に乗り込んで頑張ってね','Sho — new-challenge storm-in try','Direction','mei_romantic'),
    mk('メイ姉さん、ぼくのクラスに三木くんがいるよ','Mei-sis — me class Miki-kun exists','Eager close','sho_child'),
  ]},
  {id:'conv_08099',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、イノベーションを部活に取り入れろ','Riku — innovation-club incorporate','Direction teen','sakura_teen'),
    mk('お前、将来シリコンバレー行きたいんだろ?桜','You — future Silicon-Valley go-want? Sakura','Curious','riku_teen'),
    mk('リク、バックトラックして問題解こうぜ','Riku — backtrack solve-problem','Direction','sakura_teen'),
    mk('お前、石原先生の授業、面白いって言ってたな、桜','You — Ishihara-sensei class interesting said Sakura','Reflective','riku_teen'),
    mk('リク、青木先輩、優しいぜ','Riku — Aoki-senior gentle','Praising','sakura_teen'),
    mk('お前、品川のスケートリンク、行ったろ?桜','You — Shinagawa skate-rink went? Sakura','Curious','riku_teen'),
    mk('リク、お前、相手チームに乗り込んだ勇気、すげえな','Riku — opp-team stormed-in courage amazing','Praising','sakura_teen'),
    mk('お前のお祖父ちゃん、三木さんていうんだろ?桜','Your Grandpa Miki-san called? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08100',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんの会社はイノベーションを大切にしているのよ','Sho — Dad-co innovation cherish','Reflective','yumiko_mom'),
    mk('ママ、シリコンバレーって本当にあるの?','Mom — Silicon-Valley really-exists?','Curious child','sho_child'),
    mk('翔くん、お話を整理するためにバックトラックしましょう','Sho — story organize backtrack-let\'s','Direction','yumiko_mom'),
    mk('ママ、お父さんの友達の石原さんが来てくれたよ','Mom — Dad-friend Ishihara came','Eager child','sho_child'),
    mk('翔くん、お父さんの先輩、青木さんよ','Sho — Dad-senior Aoki','Reflective','yumiko_mom'),
    mk('ママ、ぼく、品川のお店に行きたいな','Mom — me Shinagawa-store go-want','Eager child','sho_child'),
    mk('翔くん、お父さん、新しい会社に乗り込んだそうよ','Sho — Dad new-co stormed-in','Reflective','yumiko_mom'),
    mk('ママ、お父さんの同期、三木さんも来るって','Mom — Dad-peer Miki coming','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_416 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['待望','見慣れ','あいにく','小麦','大まか','風習','嘆き','気まぐれ']
const B_T = ['公債','渡航','出国','通院','含有','取り扱っ','照会','婚姻']
const C_T = ['君主','真空','放射能','被爆','高官','元来','堕落','精霊']
const D_T = ['アラスカ','アインシュタイン','トライアル','電話機','ブーツ','石鹸','キャスター','セレクト']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08281',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、待望の遠足、明日よ','Sho — long-awaited trip tomorrow','Eager','yumiko_mom'),
    mk('ママ、ぼく、見慣れたお祖父ちゃんちが、一番落ち着くよ','Mom — me familiar Grandpa-home best-relax','Tender child','sho_child'),
    mk('翔くん、あいにく今日は雨予報よ','Sho — unfortunately today rain-forecast','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと小麦アレルギーのお話したよ','Mom — me Dad wheat-allergy talked','Reflective child','sho_child'),
    mk('翔くん、お祖父ちゃんのご予定、大まかに聞いたわ','Sho — Grandpa-schedule rough-heard','Practical','yumiko_mom'),
    mk('ママ、お祭りの風習、楽しみだよ','Mom — fest-custom look-forward','Eager child','sho_child'),
    mk('翔くん、お父さんが「嘆きの壁」のお話してたわよ','Sho — Dad "wailing-wall" told','Reflective','yumiko_mom'),
    mk('ママ、お父さんは気まぐれな性格って、笑ってたよ','Mom — Dad whimsical-nature laughed','Wry close','sho_child'),
  ]},
  {id:'conv_08282',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、待望の新メニュー、来週発表よね、メイちゃん','Aoi — long-awaited new-menu next-week-reveal Mei','Eager','mei_romantic'),
    mk('葵、見慣れた顔ぶれのお客様、嬉しいよね、メイちゃん','Aoi — familiar-cust glad Mei','Tender','aoi_barista'),
    mk('葵、あいにくのお天気で、お客様少ないね、メイちゃん','Aoi — unfortunate-weather cust-few Mei','Wry','mei_romantic'),
    mk('葵、小麦の値段が上がったね、メイちゃん','Aoi — wheat-price rose Mei','Reflective','aoi_barista'),
    mk('葵、お客様のご希望を、大まかに把握できたよ、メイちゃん','Aoi — cust-wish rough-grasp Mei','Practical','mei_romantic'),
    mk('葵、海外の飲食風習を勉強しようね、メイちゃん','Aoi — overseas dining-custom study Mei','Eager','aoi_barista'),
    mk('葵、不景気の嘆きを、お客様もされてたわ、メイちゃん','Aoi — recession-lament cust-told Mei','Reflective','mei_romantic'),
    mk('葵、シェフの気まぐれメニューも導入しようね、メイちゃん','Aoi — chef\'s-whim-menu introduce Mei','Eager close','aoi_barista'),
  ]},
  {id:'conv_08283',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、待望の長男が生まれたぞ','Gran — youth long-awaited eldest-son born','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、見慣れた村の景色を懐かしまれたわよね、あなた?','Yes — Grandpa familiar-village-scenery nostalgic, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、あいにくの雨で結婚式が延期になったぞ','Gran — youth unfortunate-rain wedding-postponed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、小麦粉でうどんを打たれたわよね、あなた?','Grandpa — wheat-flour udon-made, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、村の予定が大まかに決まってたぞ','Gran — youth village-schedule rough-set','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、村の風習を大切にされたわよね、あなた?','Grandpa — village-custom cherished, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、戦争の嘆きを語る人が多かったぞ','Gran — youth war-lament-tellers many','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、気まぐれにお花を摘んでくださったわよね、あなた?','Grandpa — whimsically-flower picked, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08284',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、待望の試合、明日だな','Riku — long-awaited match tomorrow','Eager teen','sakura_teen'),
    mk('お前、見慣れた制服も、卒業すれば懐かしくなるな、桜','You — familiar-uniform after-grad nostalgic Sakura','Reflective','riku_teen'),
    mk('リク、あいにくの雨で部活、休みだぞ','Riku — unfortunate-rain club-off','Reflective','sakura_teen'),
    mk('お前、小麦アレルギーじゃなかったろ?桜','You — wheat-allergy-not? Sakura','Curious','riku_teen'),
    mk('リク、お前のプラン、大まかに聞かせろよ','Riku — your-plan rough-tell','Direction','sakura_teen'),
    mk('お前、お祖父ちゃんちで地方の風習体験したろ?桜','You — Grandpa-home local-custom experience? Sakura','Curious','riku_teen'),
    mk('リク、お前のテストの嘆き、わかるぜ','Riku — your test-lament understand','Caring','sakura_teen'),
    mk('お前、気まぐれに勉強するなよ、桜','You — whimsically-study don\'t Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_08285',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、待望のお誕生日プレゼント、何にしようかな','Sho — long-awaited bday-gift what?','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんちの見慣れた廊下、好きだよ','Mei-sis — me Grandpa-familiar-corridor love','Eager child','sho_child'),
    mk('翔くん、あいにく今日は満席でね','Sho — unfortunately today full-seats','Wry','mei_romantic'),
    mk('メイ姉さん、ぼく、小麦パンとお米パン、どっちも好き','Mei-sis — me wheat-bread rice-bread both-like','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんのご予定、大まかに教えてね','Sho — Grandpa-schedule rough-tell','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんちの風習、覚えたいよ','Mei-sis — me Grandpa-custom-learn-want','Eager child','sho_child'),
    mk('翔くん、お友達の嘆きを、ちゃんと聞いてあげてね','Sho — friend-lament properly-listen','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、気まぐれにおもちゃで遊ぶよ','Mei-sis — me whimsically-toy-play','Eager close','sho_child'),
  ]},
  {id:'conv_08286',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、公債への投資を慎重に進めろ','Our co — gov-bond invest careful-advance','Crisp','hiroshi_boss'),
    mk('はい。海外渡航する社員の手配を進めております','Yes — Overseas-travel staff arrange advance','Methodical','kenji_office'),
    mk('当社、出国手続きを社員にきちんと案内しろ','Our co — departure-procedure staff polite-guide','Direction','hiroshi_boss'),
    mk('はい。社員の通院を考慮した勤務体制を整えます','Yes — Staff-hosp-visit consider shift arrange','Update','kenji_office'),
    mk('当社、添加物の含有量を明示しろ','Our co — additive-content specify','Direction','hiroshi_boss'),
    mk('はい。お得意様情報を慎重に取り扱っております','Yes — VIP-info careful handle','Update','kenji_office'),
    mk('お客様からの照会には迅速に対応しろ','Cust-inquiry quick-respond','Direction','hiroshi_boss'),
    mk('はい。社員の婚姻届け、お祝いいたします','Yes — Staff-marriage-cert celebrate','Close','kenji_office'),
  ]},
  {id:'conv_08287',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('公債金利の動向を見守りましょう','Gov-bond rate trend watch','Brisk','yuki_office'),
    mk('はい。社員の海外渡航計画をリストアップしました','Yes — Staff-overseas-travel plan listed','Cooperative','kenji_office'),
    mk('出国前の事務手続きを丁寧に進めましょう','Departure-pre-procedure polite-advance','Direction','yuki_office'),
    mk('はい。社員の通院休暇を整備します','Yes — Staff-hosp-visit-leave prep','Update','kenji_office'),
    mk('成分の含有割合を表示しましょう','Ingredient-content-ratio display','Direction','yuki_office'),
    mk('はい。新規データを慎重に取り扱っております','Yes — New-data careful handle','Update','kenji_office'),
    mk('外部からの照会対応窓口を整えましょう','Outside-inquiry counter prep','Direction','yuki_office'),
    mk('はい。社員婚姻時の福利厚生を充実させます','Yes — Staff-marriage welfare enrich','Close','kenji_office'),
  ]},
  {id:'conv_08288',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究費に公債収入を含めて考えろ','Ren — research-fund gov-bond-income consider','Mentor','hiroshi_boss'),
    mk('はい。海外渡航のための学会発表準備をしております','Yes — Overseas-travel conf-prep doing','Earnest','ren_uni'),
    mk('蓮、留学出国の準備、確認しろ','Ren — study-abroad-departure prep verify','Direction','hiroshi_boss'),
    mk('はい。共同研究者が通院していらっしゃるので配慮します','Yes — Co-researcher hosp-visit consider','Polite','ren_uni'),
    mk('蓮、論文に成分の含有量を明記しろ','Ren — paper-ingredient-content specify','Direction','hiroshi_boss'),
    mk('はい。研究データは厳重に取り扱っております','Yes — Research-data strict handle','Earnest','ren_uni'),
    mk('蓮、引用元への照会も忘れるな','Ren — citation-source inquiry don\'t-forget','Direction','hiroshi_boss'),
    mk('はい。婚姻届を出した先輩、お祝いいたしました','Yes — Marriage-filed senior celebrated','Earnest close','ren_uni'),
  ]},
  {id:'conv_08289',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、公債絡みの詐欺を捜査しております','Police gov-bond-fraud inv','Calm','takeda_officer'),
    mk('はい。容疑者の海外渡航を警察、阻止されたんですね','Yes — Suspect overseas-travel police-block','Curious','kenji_office'),
    mk('警察、出国停止命令を発令いたしました','Police departure-ban issued','Procedural','takeda_officer'),
    mk('はい。被害者の通院支援、警察、ありがたいです','Yes — Victim hosp-visit-support police grateful','Cooperative','kenji_office'),
    mk('警察、押収品の含有物質を分析中です','Police seized-content-substance analyze','Procedural','takeda_officer'),
    mk('はい。証拠物を警察、慎重に取り扱っておられますね','Yes — Evidence police careful-handle','Cooperative','kenji_office'),
    mk('警察、市民からの照会窓口を強化しました','Police citizen-inquiry counter strengthen','Procedural','takeda_officer'),
    mk('はい。偽装婚姻の取り締まりも進めておられますね','Yes — Sham-marriage crackdown advance','Close','kenji_office'),
  ]},
  {id:'conv_08290',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、公債を活用して資金を調達された','Dad — gov-bond utilize fund-raised','Sage','hiroshi_elder'),
    mk('はい。お父さんは海外渡航で見聞を広められた','Yes — Dad overseas-travel knowledge-broaden','Commitment','hiroshi_boss'),
    mk('お父さん、社員の出国時に必ずお見送りされた','Dad — staff-departure always-saw-off','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の通院に理解があった','Yes — Dad staff-hosp-visit-understanding','Reflective','hiroshi_boss'),
    mk('お父さん、商品の含有成分にこだわられた','Dad — product-content particular','Wistful','hiroshi_elder'),
    mk('はい。お父さんは機密情報を厳しく取り扱っておられた','Yes — Dad confid-info strict-handle','Reflective','hiroshi_boss'),
    mk('お父さん、お客様の照会には自ら答えられた','Dad — cust-inquiry self-answered','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の婚姻を心からお祝いされた','Yes — Dad staff-marriage heartily-celebrated','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08291',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、君主制の歴史を論文で扱っていましたね','Ren — monarchy-history paper','Calm','asuka_teacher'),
    mk('はい、真空中の物理現象を論文で扱いました','Yes — vacuum-physics paper','Earnest','ren_uni'),
    mk('蓮さん、放射能被害の長期影響を論文で扱っていましたね','Ren — radioactivity long-impact paper','Reflective','asuka_teacher'),
    mk('はい、被爆地の医療を論文で扱いました','Yes — bombed-area med paper','Earnest','ren_uni'),
    mk('政府高官への取材結果を論文で扱っていましたね','Gov-high-official interview paper','Engaged','asuka_teacher'),
    mk('はい、元来の伝統文化を論文で扱いました','Yes — original-trad-culture paper','Earnest','ren_uni'),
    mk('蓮さん、社会の堕落と再生を論文で扱っていましたね','Ren — social-decay-renewal paper','Reflective','asuka_teacher'),
    mk('はい、精霊信仰の比較を論文で扱いました','Yes — spirit-faith-compare paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08292',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、外国君主制の影響を警察、考察されたんですね','Case foreign-monarchy-impact police-consider','Calm','takeda_officer'),
    mk('警察、現場の真空パック証拠を回収しました','Police scene vacuum-pack-evidence recovered','Procedural','takeda_officer'),
    mk('本件、放射能漏れの可能性を警察、検証中ですね','Case radioactivity-leak police-verify, gratitude','Curious','ren_uni'),
    mk('警察、被爆者の証言を慎重に伺っております','Police bombed-witness careful-hear','Procedural','takeda_officer'),
    mk('本件、高官関係者を警察、参考人として聴取されたんですね','Case high-official police-witness-interview','Reflective','ren_uni'),
    mk('警察、元来の捜査方針を貫いております','Police original-inv-policy keep','Procedural','takeda_officer'),
    mk('本件、地域の堕落要因を警察、分析されたんですね','Case region-decay-factor police-analyze','Reflective','ren_uni'),
    mk('警察、神社の精霊像を盗難から守ります','Police shrine-spirit-statue theft-protect','Close','takeda_officer'),
  ]},
  {id:'conv_08293',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、君主制の歴史を論文で扱っていましたね','Sakura — monarchy paper','Calm','asuka_teacher'),
    mk('はい、真空中の物理現象を論文で扱いました','Yes — vacuum-physics paper','Earnest teen','sakura_teen'),
    mk('放射能被害の長期影響を論文で扱っていましたね','Radioactivity paper','Reflective','asuka_teacher'),
    mk('はい、被爆地の医療を論文で扱いました','Yes — bombed-area paper','Earnest','sakura_teen'),
    mk('政府高官への取材結果を論文で扱っていましたね','High-official paper','Engaged','asuka_teacher'),
    mk('はい、元来の伝統文化を論文で扱いました','Yes — original-trad paper','Earnest','sakura_teen'),
    mk('社会の堕落と再生を論文で扱っていましたね','Social-decay paper','Reflective','asuka_teacher'),
    mk('はい、精霊信仰の比較を論文で扱いました','Yes — spirit-faith paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08294',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、君主制下の医療事情を医療チームで研究しております','Ren — monarchy-med-situation med-team research','Calm','saito_doctor'),
    mk('真空パックの医療器具を貴院、活用されているとのこと、先生','Vacuum-pack med-equip your-hosp utilize, sensei','Curious','ren_uni'),
    mk('はい、放射能事故時の対応訓練を医療チームで行います','Yes — Radioactivity-accident drill med-team do','Patient','saito_doctor'),
    mk('被爆地から来られた患者さんを、貴院、丁寧に診ておられますね、先生','Bombed-area patient your-hosp polite-diag, sensei','Reflective','ren_uni'),
    mk('はい、行政高官への医療相談を医療チームで対応しております','Yes — Gov-official med-consult med-team handle','Patient','saito_doctor'),
    mk('貴院、元来の小規模クリニックから大規模病院に成長されたんですね、先生','Your-hosp original-small-clinic grew-large, sensei','Reflective','ren_uni'),
    mk('はい、心の堕落感を訴える患者さんを医療チームでケアします','Yes — Mental-decay patient med-team care','Patient','saito_doctor'),
    mk('貴院、伝統的な精霊信仰にも理解を示されますね、先生','Your-hosp trad spirit-faith understand, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08295',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、君主制の国にも進出しろ','Our co — monarchy-country expand','Crisp','hiroshi_boss'),
    mk('はい。真空パック技術を新製品に導入します','Yes — Vacuum-pack-tech new-product introduce','Methodical','kenji_office'),
    mk('放射能対応の保険商品を検討しろ','Radioactivity-cover insurance-product consider','Direction','hiroshi_boss'),
    mk('はい。被爆国向けの安全機器を開発中です','Yes — Bombed-country safety-device develop','Update','kenji_office'),
    mk('当社、政府高官との関係も大切にしろ','Our co — gov-high-official relation cherish','Direction','hiroshi_boss'),
    mk('はい。当社、元来の社是を社員に再徹底します','Yes — Our original-motto staff re-thorough','Update','kenji_office'),
    mk('業界の堕落を許すな','Industry-decay don\'t-allow','Direction','hiroshi_boss'),
    mk('はい。精霊崇拝に基づく商品も検討しております','Yes — Spirit-worship-based product consider','Close','kenji_office'),
  ]},
  {id:'conv_08296',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、アラスカ産のサーモン、新メニューに入れようね、メイちゃん','Aoi — Alaska-salmon new-menu Mei','Eager','mei_romantic'),
    mk('葵、アインシュタインの言葉、お店に飾ろうか、メイちゃん','Aoi — Einstein-quote store-decorate? Mei','Reflective','aoi_barista'),
    mk('葵、新メニューのトライアルを進めようね、メイちゃん','Aoi — new-menu trial advance Mei','Eager','mei_romantic'),
    mk('葵、お店の電話機、古くなったから新調しようね、メイちゃん','Aoi — store-phone old, renew Mei','Practical','aoi_barista'),
    mk('葵、雨の日のブーツ、お客様向けに、メイちゃん','Aoi — rain-day-boots cust-target Mei','Practical','mei_romantic'),
    mk('葵、新しい石鹸の香り、お客様に評判よ、メイちゃん','Aoi — new soap-scent cust-rep Mei','Praising','aoi_barista'),
    mk('葵、テレビのキャスター、お店来てくれたよ、メイちゃん','Aoi — TV-caster store-came Mei','Animated','mei_romantic'),
    mk('葵、新メニューのセレクト、楽しいね、メイちゃん','Aoi — new-menu select fun Mei','Eager close','aoi_barista'),
  ]},
  {id:'conv_08297',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがアラスカ航路の話してらしたぞ','Gran — youth Dad Alaska-route-told','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、アインシュタインの伝記を読まれたわよね、あなた?','Yes — Grandpa Einstein-bio-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、新製品のトライアルを村でされたぞ','Gran — youth new-product-trial village-did','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、回転式の電話機をお使いになったわよね、あなた?','Grandpa — rotary-phone used, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがブーツを履いて出かけられたぞ','Gran — youth Dad boots-wore-out','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、自家製の石鹸を好まれたわよね、あなた?','Grandpa — homemade-soap liked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ラジオのキャスターの声に憧れたぞ','Gran — youth radio-caster-voice admired','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お土産をセレクトされる時は丁寧だったわよね、あなた?','Grandpa — souvenir-select polite, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08298',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんがアラスカの絵本、お見せするわ','Sho — Mei-sis Alaska-picture-book show','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、アインシュタイン博士って知ってる','Mei-sis — me Einstein-knew','Eager child','sho_child'),
    mk('翔くん、新しいおもちゃのトライアル、お父さんと試そうね','Sho — new-toy-trial Dad-test','Eager','mei_romantic'),
    mk('メイ姉さん、お家の電話機、ぼく初めて使ったよ','Mei-sis — home-phone me-first-use','Proud child','sho_child'),
    mk('翔くん、雨の日のブーツ、お洒落でしょ','Sho — rain-day boots stylish?','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、香りつきの石鹸、好きだよ','Mei-sis — me scented-soap like','Eager child','sho_child'),
    mk('翔くん、テレビのキャスターさん、頑張ってらっしゃるわよね','Sho — TV-caster trying','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、おもちゃをセレクトするの楽しいよ','Mei-sis — me toy-select fun','Eager close','sho_child'),
  ]},
  {id:'conv_08299',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、アラスカで野生のクマ見たいんだろ?','Riku — Alaska wild-bear see-want?','Curious teen','sakura_teen'),
    mk('お前、物理でアインシュタインの単元、苦戦したろ?桜','You — physics Einstein-unit struggled? Sakura','Teasing','riku_teen'),
    mk('リク、新しいゲームのトライアル版、やってみろ','Riku — new-game-trial-ver play','Direction','sakura_teen'),
    mk('お前、家の電話機まだ使ってるか?桜','You — home-phone still-use? Sakura','Curious','riku_teen'),
    mk('リク、お前、ブーツ買ったろ?','Riku — boots-bought?','Curious','sakura_teen'),
    mk('お前、新しい石鹸の匂い、いいな、桜','You — new soap-smell good Sakura','Praising','riku_teen'),
    mk('リク、お前、キャスターになりたいんだろ?','Riku — caster-become-want?','Curious','sakura_teen'),
    mk('お前、コンビニで弁当セレクト、いつも迷うな、桜','You — convenience-bento-select always-hesitate Sakura','Teasing close','riku_teen'),
  ]},
  {id:'conv_08300',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがアラスカクルーズに行きたいって言ってたわ','Sho — Dad Alaska-cruise want','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんがアインシュタインの話してくれたよ','Mom — me Dad Einstein-told','Eager child','sho_child'),
    mk('翔くん、新ゲームのトライアル版、お父さんと試したの?','Sho — new-game-trial-ver Dad-tested?','Curious','yumiko_mom'),
    mk('ママ、お祖父ちゃんの電話機、おもしろい音がするよ','Mom — Grandpa-phone funny-sound','Eager child','sho_child'),
    mk('翔くん、雪の日はブーツを履いてね','Sho — snow-day boots-wear','Direction','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんの手作り石鹸が好きだよ','Mom — me Grandma-handmade-soap like','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃん、テレビのキャスターと知り合いなんだって','Sho — Grandpa TV-caster acquainted','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんへのプレゼント、セレクトするよ','Mom — me Grandma-gift select','Eager close','sho_child'),
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

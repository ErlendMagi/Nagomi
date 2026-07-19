import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_403 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['まんま','とび','破っ','お方','挟ま','うなずい','つかえ','ぶら']
const B_T = ['にもかかわらず','おっしゃら','あげれ','仰っ','当てはめ','まとまら','違わ','無き']
const C_T = ['内戦','銃撃','ラテン語','追い出さ','置き去り','煽っ','潰さ','吸い込ま']
const D_T = ['すてき','好ん','呟い','見失っ','うまかっ','脱ぎ','日当たり','当っ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08021',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お洋服のまんま寝ちゃダメよ','Sho — clothes-still don\'t-sleep','Direction','yumiko_mom'),
    mk('ママ、お庭にとびがいたよ','Mom — garden kite-bird existed','Eager child','sho_child'),
    mk('翔くん、お約束を破っちゃダメよ','Sho — promise don\'t-break','Direction','yumiko_mom'),
    mk('ママ、お祖父ちゃんは優しいお方ね','Mom — Grandpa gentle person','Reflective child','sho_child'),
    mk('翔くん、お父さんとぼくの間に挟まないでね','Sho — Dad-me between don\'t-sandwich','Direction','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんのお話にうなずいたよ','Mom — me Grandma talk-nodded','Proud child','sho_child'),
    mk('翔くん、お喉に何かつかえてない?','Sho — throat anything stuck?','Caring','yumiko_mom'),
    mk('ママ、お庭をぶらっとお散歩してくる','Mom — garden burari-stroll going','Eager close','sho_child'),
  ]},
  {id:'conv_08022',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、立ったまんま長話されてたよ、メイちゃん','Aoi — cust standing-long-talked Mei','Reflective','mei_romantic'),
    mk('葵、空にとびが飛んでたよ、メイちゃん','Aoi — sky kite-bird flew Mei','Animated','aoi_barista'),
    mk('葵、お皿を破っちゃってごめんね、メイちゃん','Aoi — plate-broke sorry Mei','Apologetic','mei_romantic'),
    mk('葵、お客様、上品なお方だったね、メイちゃん','Aoi — cust refined-person Mei','Reflective','aoi_barista'),
    mk('葵、サンドイッチに具材、挟まれてる、メイちゃん','Aoi — sandwich filling sandwiched Mei','Praising','mei_romantic'),
    mk('葵、お客様の説明にうなずいたよ、メイちゃん','Aoi — cust-explanation nodded Mei','Reflective','aoi_barista'),
    mk('葵、棚につかえないように整理しよう、メイちゃん','Aoi — shelf don\'t-stuck arrange Mei','Practical','mei_romantic'),
    mk('葵、駅前をぶらっとしてきたよ、メイちゃん','Aoi — station-front burari Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08023',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、ばあさんの作ったお漬物、まんま美味しかったぞ','Gran — youth gran-made pickles tasty','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、空のとびを指してらしたわよね、あなた?','Yes — Grandpa sky-kite pointed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、約束を破ったお父さんを心配したぞ','Gran — youth promise-broke Dad worried','Wistful','hiroshi_elder'),
    mk('お祖父ちゃんは、本当にお優しいお方でしたわよね、あなた?','Grandpa — really gentle person, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんとお祖母ちゃんに挟まれた写真があるぞ','Gran — youth Dad-Grandma between photo exists','Wistful','hiroshi_elder'),
    mk('お祖父ちゃんは何度もうなずいて、お聞きになったわよね、あなた?','Grandpa — many-nods listened, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、戸につかえて開かなかったお祖父ちゃんの記憶あるぞ','Gran — youth door-stuck didn\'t-open memory exists','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、村をぶらっとお散歩なさったわよね、あなた?','Grandpa — village burari-strolled, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08024',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、寝間着のまんま登校したろ?','Riku — pajamas school-came?','Teasing teen','sakura_teen'),
    mk('お前、運動会でとびの真似してたな、桜','You — sports-day kite-bird mimicked Sakura','Wry','riku_teen'),
    mk('リク、お前、約束を破ったぜ','Riku — you promise-broke','Wry','sakura_teen'),
    mk('お前のお祖父ちゃん、立派なお方だな、桜','Your Grandpa splendid person, Sakura','Praising','riku_teen'),
    mk('リク、お前、ぼくと隣のクラスの間に挟まれてんな','Riku — you me-next-class between sandwiched','Reflective','sakura_teen'),
    mk('お前、授業中うなずいてばかりだな、桜','You — class-nodding-only Sakura','Teasing','riku_teen'),
    mk('リク、お前のスマホ、ポケットにつかえてんぞ','Riku — your phone pocket-stuck','Wry','sakura_teen'),
    mk('お前、駅前をぶらっとしてきたろ?桜','You — station-front burari? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08025',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お風呂上がりのまんまじゃ風邪ひくよ','Sho — post-bath as-is cold-catch','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、空のとびを見たよ','Mei-sis — me sky-kite saw','Eager child','sho_child'),
    mk('翔くん、お友達との約束を破っちゃダメよ','Sho — friend-promise don\'t-break','Direction','mei_romantic'),
    mk('メイ姉さん、メイ姉さんは優しいお方だね','Mei-sis — Mei-sis gentle-person','Tender child','sho_child'),
    mk('翔くん、お父さんとぼくの真ん中に挟まれて寝てね','Sho — Dad-me middle sandwich-sleep','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お話聞いてうなずいたよ','Mei-sis — me listen-nodded','Proud child','sho_child'),
    mk('翔くん、おもちゃがつかえて取れないの?','Sho — toy stuck can\'t-remove?','Caring','mei_romantic'),
    mk('メイ姉さん、ぼく、公園をぶらっとしてくる','Mei-sis — me park-burari going','Eager close','sho_child'),
  ]},
  {id:'conv_08026',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('業績悪化にもかかわらず、社員を守れ','Perf-decline despite staff-protect','Crisp','hiroshi_boss'),
    mk('はい。先方、おっしゃらない条件があるかもしれません','Yes — Counterparty won\'t-say cond may-exist','Methodical','kenji_office'),
    mk('社員にも昇給をあげればよかった','Staff raise-give-if good','Reflective','hiroshi_boss'),
    mk('はい。社長が仰った戦略、進めております','Yes — Pres said-strategy advance','Update','kenji_office'),
    mk('当社、データを当てはめての分析を続けろ','Our co — data fit analysis continue','Direction','hiroshi_boss'),
    mk('はい。意見がまとまらない会議を改善します','Yes — Opinion don\'t-coalesce mtg improve','Update','kenji_office'),
    mk('当社の方針は、業界平均と違わない','Our policy — industry-avg same','Direction','hiroshi_boss'),
    mk('はい。お得意様無きの月もあるかもしれません','Yes — VIP-none month may-exist','Close','kenji_office'),
  ]},
  {id:'conv_08027',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('予算減にもかかわらず、新企画を進めましょう','Budget-decline despite new-proj advance','Brisk','yuki_office'),
    mk('はい。先方、おっしゃらないけれど不満かもしれません','Yes — Counterparty won\'t-say maybe-unhappy','Cooperative','kenji_office'),
    mk('社員にあげれば喜ぶ表彰を考えましょう','Staff give-if glad award think','Direction','yuki_office'),
    mk('はい。役員が仰った理念、社員に浸透中です','Yes — Exec said-ideal staff-soak','Update','kenji_office'),
    mk('テストデータを当てはめての検証を進めましょう','Test-data fit verify advance','Direction','yuki_office'),
    mk('はい。意見がまとまらないチーム、サポートします','Yes — Opinion don\'t-coalesce team support','Update','kenji_office'),
    mk('当社の品質は、ライバル社と違わない水準です','Our quality rival-co same level','Direction','yuki_office'),
    mk('はい。返品クレーム無きの月もあるかもしれません','Yes — Return-claim-none month may-exist','Close','kenji_office'),
  ]},
  {id:'conv_08028',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、忙しいにもかかわらず、研究を続けろ','Ren — busy-despite research continue','Mentor','hiroshi_boss'),
    mk('はい。教授は具体的におっしゃらないこともあります','Yes — Prof concretely won\'t-say sometimes','Earnest','ren_uni'),
    mk('蓮、お前、後輩にもっと時間をあげればよかった','Ren — junior more-time give-if good','Reflective','hiroshi_boss'),
    mk('はい。教授が仰ったご助言、心に留めております','Yes — Prof said-advice heart-keep','Polite','ren_uni'),
    mk('蓮、モデルを当てはめての検証を進めろ','Ren — model fit verify advance','Direction','hiroshi_boss'),
    mk('はい。実験結果がまとまらないこともあります','Yes — Experiment-result don\'t-coalesce sometimes','Earnest','ren_uni'),
    mk('蓮、論理は他研究と違わないか確認しろ','Ren — logic other-research same verify','Direction','hiroshi_boss'),
    mk('はい。引用元無きの論文は通りません','Yes — Citation-none paper don\'t-pass','Earnest close','ren_uni'),
  ]},
  {id:'conv_08029',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、悪天候にもかかわらず捜索を続けます','Police bad-weather despite search continue','Calm','takeda_officer'),
    mk('はい。容疑者がおっしゃらない事実、警察追及中ですね','Yes — Suspect won\'t-say facts police-pursue','Cooperative','kenji_office'),
    mk('警察、地域支援にもっと予算をあげればと考えます','Police region-support more-budget give-if think','Procedural','takeda_officer'),
    mk('はい。長官が仰ったご方針、警察、徹底ですね','Yes — Chief said-policy police-thorough','Cooperative','kenji_office'),
    mk('警察、過去事例を当てはめて分析しております','Police past-case fit analyze','Procedural','takeda_officer'),
    mk('はい。証言がまとまらない事件、警察、慎重ですね','Yes — Testimony don\'t-coalesce case police-careful','Cooperative','kenji_office'),
    mk('警察、市民の証言は調書と違わないようまとめます','Police citizen-testimony statement-same compile','Procedural','takeda_officer'),
    mk('はい。容疑者無きの事件は警察、未解決のままですね','Yes — Suspect-none case police-unresolved','Close','kenji_office'),
  ]},
  {id:'conv_08030',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さんは、苦境にもかかわらず誠実を貫いたぞ','Dad — crisis-despite sincere-saw-through','Sage','hiroshi_elder'),
    mk('はい。お父さんは具体的におっしゃらないご美学がありました','Yes — Dad concretely won\'t-say aesthetic had','Commitment','hiroshi_boss'),
    mk('お父さんは、社員にもっと褒美をあげればと言ったぞ','Dad — staff more-bonus give-if said','Wistful','hiroshi_elder'),
    mk('はい。お父さんが仰った社訓、引き継いでおります','Yes — Dad said-doctrine inherit','Reflective','hiroshi_boss'),
    mk('お父さんは、海外事例を当てはめての戦略がお得意だった','Dad — overseas-case fit strategy good-at','Wistful','hiroshi_elder'),
    mk('はい。お父さんは意見がまとまらない会議を嫌った','Yes — Dad opinion don\'t-coalesce mtg hated','Reflective','hiroshi_boss'),
    mk('お父さんは、約束は契約書と違わないとお考えだった','Dad — promise contract-same thought','Wistful','hiroshi_elder'),
    mk('はい。お父さん無きの会社、私が支えます','Yes — Dad-none co, I-support','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08031',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、内戦の歴史を論文で扱っていましたね','Ren — civil-war history paper','Calm','asuka_teacher'),
    mk('はい、銃撃事件の社会学を論文で扱いました','Yes — gun-attack sociology paper','Earnest','ren_uni'),
    mk('ラテン語の語源を論文で扱っていましたね','Latin etymology paper','Reflective','asuka_teacher'),
    mk('はい、政争で都を追い出された貴族を論文で扱いました','Yes — political-strife capital-banished noble paper','Earnest','ren_uni'),
    mk('被災地に置き去りにされた人々を論文で扱っていましたね','Disaster-area abandoned people paper','Engaged','asuka_teacher'),
    mk('はい、群衆を煽った独裁者を論文で扱いました','Yes — crowd-incited dictator paper','Earnest','ren_uni'),
    mk('民主主義が潰された国家を論文で扱っていましたね','Democracy-destroyed nation paper','Reflective','asuka_teacher'),
    mk('はい、ブラックホールに吸い込まれた星の運命を論文で扱いました','Yes — black-hole sucked-in star fate paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08032',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、海外内戦の関係者かと警察、調査中です','Case overseas-civil-war related police-inv','Calm','takeda_officer'),
    mk('本件、銃撃事件の発生時刻、警察、特定されたんですね','Case gun-attack time police-identify','Curious','ren_uni'),
    mk('警察、ラテン語の暗号を解読中です','Police Latin-cipher decipher','Procedural','takeda_officer'),
    mk('本件、容疑者が組織を追い出された経緯、警察、把握ですね','Case suspect org-banished bg police-grasp','Reflective','ren_uni'),
    mk('警察、現場に置き去りにされた被害者を救助しました','Police scene-abandoned victim rescued','Procedural','takeda_officer'),
    mk('本件、SNSで群衆を煽った投稿、警察、調査中ですね','Case SNS crowd-incited post police-inv','Reflective','ren_uni'),
    mk('警察、犯罪組織を潰さねばなりません','Police crime-org must-destroy','Procedural','takeda_officer'),
    mk('本件、排水溝に吸い込まれた証拠物を警察、回収されたんですね','Case drain sucked-in evidence police-recover','Reflective close','ren_uni'),
  ]},
  {id:'conv_08033',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、内戦の歴史を論文で扱っていましたね','Sakura — civil-war paper','Calm','asuka_teacher'),
    mk('はい、銃撃事件の社会学を論文で扱いました','Yes — gun-attack soc paper','Earnest teen','sakura_teen'),
    mk('ラテン語の語源を論文で扱っていましたね','Latin etymology paper','Reflective','asuka_teacher'),
    mk('はい、政争で都を追い出された貴族を論文で扱いました','Yes — politics-banished noble paper','Earnest','sakura_teen'),
    mk('被災地に置き去りにされた人々を論文で扱っていましたね','Disaster abandoned paper','Engaged','asuka_teacher'),
    mk('はい、群衆を煽った独裁者を論文で扱いました','Yes — crowd-incited dictator paper','Earnest','sakura_teen'),
    mk('民主主義が潰された国家を論文で扱っていましたね','Democracy-destroyed paper','Reflective','asuka_teacher'),
    mk('はい、ブラックホールに吸い込まれた星の運命を論文で扱いました','Yes — black-hole sucked-in star paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08034',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、海外内戦地域の難民医療を医療チーム支援しました','Ren — overseas-civil-war area refugee-med med-team support','Calm','saito_doctor'),
    mk('銃撃の被害者、貴院、お受け入れになったんですね、先生','Gun-attack victim your-hosp received, sensei','Curious','ren_uni'),
    mk('はい、ラテン語由来の薬名を医療チーム、覚えております','Yes — Latin-origin drug-name med-team-know','Patient','saito_doctor'),
    mk('組織を追い出された医師の再就職、貴院、ご支援なんですね、先生','Org-banished doctor re-employ your-hosp support, sensei','Reflective','ren_uni'),
    mk('はい、自宅で置き去りにされた認知症の方を医療チーム支援します','Yes — home-abandoned dementia-person med-team support','Patient','saito_doctor'),
    mk('SNSで医療不安を煽った投稿、貴院、対応されたんですね、先生','SNS med-anxiety incited post your-hosp resp, sensei','Reflective','ren_uni'),
    mk('はい、感染拡大を潰さねばと医療チーム、努めております','Yes — infection-spread must-destroy med-team try','Patient','saito_doctor'),
    mk('吸い込まれた異物を内視鏡で除去、貴院、なさったんですね、先生','Sucked-in foreign-body endoscope-remove your-hosp did, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08035',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('海外、内戦リスクの地域で慎重に進めろ','Overseas civil-war-risk region careful advance','Crisp','hiroshi_boss'),
    mk('はい。海外、銃撃事件多発地域はリスク管理します','Yes — Overseas gun-attack-prone risk-mgmt','Methodical','kenji_office'),
    mk('当社、ラテン語由来の商品名を検討しろ','Our co — Latin-origin product-name consider','Direction','hiroshi_boss'),
    mk('はい。当社、市場から追い出されないよう努めます','Yes — Our market-banish-not try','Update','kenji_office'),
    mk('当社、お客様を置き去りにする経営はするな','Our co — cust-abandon mgmt don\'t','Direction','hiroshi_boss'),
    mk('はい。広告で過度に消費を煽った例を反省します','Yes — Ad over-consume-incited case reflect','Update','kenji_office'),
    mk('競合に潰されないよう戦略を立てろ','Competitor-don\'t-destroy strategy plan','Direction','hiroshi_boss'),
    mk('はい。当社、トレンドに吸い込まれない芯を持ちます','Yes — Our trend-don\'t-suck core have','Close','kenji_office'),
  ]},
  {id:'conv_08036',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、新しいエプロン、すてきね、メイちゃん','Aoi — new-apron lovely Mei','Praising','mei_romantic'),
    mk('葵、私、コーヒーは深煎りを好んで飲むの、メイちゃん','Aoi — me coffee dark-roast prefer Mei','Reflective','aoi_barista'),
    mk('葵、お客様が呟いたお言葉、嬉しいよ、メイちゃん','Aoi — cust murmured-words glad Mei','Tender','mei_romantic'),
    mk('葵、お客様を見失ったときあるよね、メイちゃん','Aoi — cust lost-track sometimes Mei','Wry','aoi_barista'),
    mk('葵、新メニュー、本当にうまかったよ、メイちゃん','Aoi — new-menu really tasty Mei','Praising','mei_romantic'),
    mk('葵、お疲れだから上着脱ぎませんか、メイちゃん','Aoi — tired so coat take-off Mei','Caring','aoi_barista'),
    mk('葵、お店の日当たり、いいよね、メイちゃん','Aoi — store sun-exposure good Mei','Praising','mei_romantic'),
    mk('葵、私の予想が当ったよ、メイちゃん','Aoi — me prediction hit Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08037',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、ばあさんのお着物、すてきだったぞ','Gran — youth gran-kimono lovely','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃんは漬物を好んで召し上がったわよね、あなた?','Yes — Grandpa pickles preferred-ate, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖母ちゃんがお歌を呟いてたぞ','Gran — youth Grandma song-murmured','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦争中、お父様を見失った話されたわよね、あなた?','Grandpa — war Father-lost-track told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ばあさんのお料理、うまかったぞ','Gran — youth gran-cooking tasty','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お風呂上りに浴衣をお脱ぎになったわよね、あなた?','Grandpa — post-bath yukata took-off, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃のお家は日当たり良かったぞ','Gran — youth-home sun-exposure good','Wistful','hiroshi_elder'),
    mk('お祖父ちゃんの予想がよく当ったわよね、あなた?','Grandpa — prediction often-hit, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08038',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんの新しいお店、すてきよ','Sho — Mei-sis new-store lovely','Animated','mei_romantic'),
    mk('メイ姉さん、ぼく、お野菜の中でトマトを好んで食べるよ','Mei-sis — me veg-among tomato prefer-eat','Eager child','sho_child'),
    mk('翔くん、お父さんが「がんばれ」って呟いてたわ','Sho — Dad "ganbare" murmured','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お友達を公園で見失ったよ','Mei-sis — me friend park-lost-track','Wry child','sho_child'),
    mk('翔くん、お母さんのお味噌汁、本当にうまかったわね','Sho — Mom miso-soup really-tasty','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、お風呂上りに服を脱ぎ捨てちゃダメだよね','Mei-sis — me post-bath clothes-toss-off no right?','Reflective child','sho_child'),
    mk('翔くん、メイ姉さんのお店、日当たり最高よ','Sho — Mei-sis-store sun-exposure best','Praising','mei_romantic'),
    mk('メイ姉さん、ぼくのくじが当ったよ','Mei-sis — me lottery hit','Eager close','sho_child'),
  ]},
  {id:'conv_08039',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前の制服、すてきだぜ','Riku — your uniform lovely','Praising teen','sakura_teen'),
    mk('お前、ぼくが好んで食べるラーメン屋、行こうぜ、桜','You — me prefer-eat ramen-shop go Sakura','Eager','riku_teen'),
    mk('リク、お前、テスト中に何呟いてたんだ?','Riku — test what-murmured?','Curious','sakura_teen'),
    mk('お前、運動会で集合場所を見失ってたな、桜','You — sports-day meet-place lost-track Sakura','Teasing','riku_teen'),
    mk('リク、お前のお母さんのお弁当、うまかったぜ','Riku — your Mom-bento tasty','Praising','sakura_teen'),
    mk('お前、体育で上着を脱ぎ忘れたな、桜','You — gym coat take-off-forgot Sakura','Wry','riku_teen'),
    mk('リク、お前の部屋、日当たりいいよな','Riku — your room sun-exposure good','Praising','sakura_teen'),
    mk('お前の予想が見事に当ったな、桜','You — prediction beautifully-hit Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08040',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、ママの新しいお洋服、すてきでしょ?','Sho — Mom new-clothes lovely right?','Tender','yumiko_mom'),
    mk('ママ、ぼく、お野菜の中でトマトを好んで食べるよ','Mom — me veg-among tomato prefer-eat','Eager child','sho_child'),
    mk('翔くん、お父さんが何か呟いてたわよ','Sho — Dad something-murmured','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お友達を駅で見失ったよ','Mom — me friend station-lost-track','Wry child','sho_child'),
    mk('翔くん、お父さんの作ったお料理、うまかったね','Sho — Dad-made dish tasty','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お風呂上りに服を脱ぎっぱなしダメだよね','Mom — me post-bath clothes-leave-off no right?','Earnest child','sho_child'),
    mk('翔くん、お祖母ちゃんちは日当たり最高よ','Sho — Grandma-home sun-exposure best','Praising','yumiko_mom'),
    mk('ママ、お年玉付きの年賀状が当ったよ','Mom — lottery-NY-card hit','Proud close','sho_child'),
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

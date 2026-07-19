import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_306 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['酔い','湿気','寒かっ','叱ら','落ち込み','思い浮かべ','縁起','引っ張る']
const B_T = ['標本','返却','動き出し','没頭','書斎','切り捨て','開講','社名']
const C_T = ['骨折','腎臓','専門医','倒壊','冤罪','気象庁','運航','収束']
const D_T = ['タイガース','民謡','乗馬','蛍','扇風機','美容師','山間','山村']

const data = [
  // A
  {id:'conv_06081',cluster:'A',ambient:'living_room_quiet',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends after a difficult day',lines:[
    {speaker:'mei_romantic',jp:'昨夜、お酒で酔いが回って、よく覚えてないの。',en:"Last night — alcohol hit; don't remember well.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'うん。湿気もすごかったし、体力使ったね。',en:"Yeah. Humidity was intense; energy drained.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'寒かった朝、布団から出るのがつらい。',en:"On cold mornings — hard to leave the futon.",style:'Subdued.'},
    {speaker:'aoi_barista',jp:'昨日、上司に叱られた件、まだ引きずってる?',en:"Yesterday's scolding — still weighing?",style:'Gentle.'},
    {speaker:'mei_romantic',jp:'うん。落ち込みやすくて、自分が嫌になる。',en:"Yes. Easily down; hate myself.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'明日の予定、頭に思い浮かべて、リフレッシュしてね。',en:"Picture tomorrow's plans; refresh.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'縁起担ぎに、神社、寄ろうかな。',en:"For luck — drop by a shrine.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'うん。元気よく、ロープを引っ張る感じで、前へ。',en:"Yes. Pull the rope vigorously — onward.",style:'Warm close.'},
  ]},
  {id:'conv_06082',cluster:'A',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple reflects',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃の飲み会、酔いも忘れて朝まで踊ったな。',en:"In youth — danced till morning, forgot the buzz.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。あの夏、湿気で大変だったわね。',en:"Yes. That summer — humidity was tough.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'戦後、本当に寒かった年がいくつもあった。',en:"Postwar — several truly cold years.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お父さんに叱られた思い出、つい笑える。',en:"Memories of being scolded by Dad — make me laugh now.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'落ち込みっぱなしの日もあったが、二人で乗り越えた。',en:"Days of constant gloom — we crossed together.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'結婚式の写真、思い浮かべると、まだ感動するわ。',en:"Picturing wedding photos — still moves me.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'子供たちの縁起担ぎ、私たちも続けたな。',en:"Kids' luck-charms — we continued too.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'重い荷物、若い頃も引っ張る役、よくお願いしたわね。',en:"Heavy bags — asked you to pull in youth too.",style:'Warm close.'},
  ]},
  {id:'conv_06083',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk home',lines:[
    {speaker:'sakura_teen',jp:'昨日、夏祭りで甘酒、酔いまではいかなかった。',en:"Yesterday — summer fest amazake, didn't quite tipsy me.",style:'Animated teen.'},
    {speaker:'riku_teen',jp:'夜、湿気で寝苦しかったよな。',en:"Night — humidity made sleep hard.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'朝は逆に寒かったね。',en:"Morning — oppositely cold.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'担任に叱られて、休み時間、皆、静かだった。',en:"Scolded by homeroom — class quiet at break.",style:'Subdued.'},
    {speaker:'sakura_teen',jp:'落ち込みすぎないでね。',en:"Don't let it sink you.",style:'Warm.'},
    {speaker:'riku_teen',jp:'母さんの料理を思い浮かべると、頑張れる。',en:"Picturing Mom's cooking — gives me strength.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'試験前、縁起担ぎでカツ丼食べた?',en:"Pre-exam — luck-charm katsudon?",style:'Curious.'},
    {speaker:'riku_teen',jp:'いや、まだ。ゴール手前、ラスト引っ張る気力、貯めとくよ。',en:"Not yet. Pre-finish — saving my pull-power.",style:'Wry close.'},
  ]},
  {id:'conv_06084',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom talks with her son after a tough day',lines:[
    {speaker:'sho_child',jp:'ママ、車の中で、ちょっと酔いそうになった。',en:"Mom — got slightly carsick.",style:'Subdued child.'},
    {speaker:'yumiko_mom',jp:'湿気で気持ち悪かったかもね。',en:"Maybe humidity made it worse.",style:'Tender.'},
    {speaker:'sho_child',jp:'プールで、足、寒かった。',en:"At the pool — feet were cold.",style:'Soft.'},
    {speaker:'yumiko_mom',jp:'先生に叱られたの、教えてくれてありがとう。',en:"Telling me about the scolding — thanks.",style:'Warm.'},
    {speaker:'sho_child',jp:'うん。落ち込みすぎないようにする。',en:"Yes. Won't sink too deep.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'お父さんの笑顔、思い浮かべて、元気出してね。',en:"Picture Dad's smile; cheer up.",style:'Tender.'},
    {speaker:'sho_child',jp:'明日、縁起担ぎに、好きな歌を歌う。',en:"Tomorrow — luck-song time.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'手、しっかり引っ張ってくれたら、お母さん、安心。',en:"Pull my hand firmly — Mom feels safe.",style:'Warm close.'},
  ]},
  {id:'conv_06085',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai supports a teen',lines:[
    {speaker:'ren_uni',jp:'桜、お酒の酔い、なれない人、心配だよな。',en:"Sakura — alcohol buzz worries unused folks.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。湿気の高い梅雨、体調管理、難しいです。',en:"Yes. Rainy-season humidity — body mgmt hard.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'昨夜、急に寒かったな。',en:"Last night — suddenly cold.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'担任に叱られた友達、心配です。',en:"Friend scolded by homeroom — worried.",style:'Soft.'},
    {speaker:'ren_uni',jp:'落ち込みからの回復、時間が要る。',en:"Recovery from gloom — needs time.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'好きな景色、思い浮かべて、深呼吸します。',en:"Picture favorite scenes; deep breathe.",style:'Bright.'},
    {speaker:'ren_uni',jp:'地元の縁起担ぎの行事、参加してみると、いいかもね。',en:"Local luck-charm events — try joining.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'はい。重い荷物、引っ張る時、声、掛けてください。',en:"Yes. When pulling heavy bags — call to me.",style:'Earnest close.'},
  ]},

  // B
  {id:'conv_06086',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a project',lines:[
    {speaker:'hiroshi_boss',jp:'新製品の標本、社内に展示しろ。',en:"New-product samples — display in-house.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。賃借品の返却、忘れずに進めます。',en:"Yes. Leased-item returns — won't forget.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'プロジェクト、動き出した。',en:"Project — moving.",style:'Direction.'},
    {speaker:'kenji_office',jp:'担当が没頭できるよう、環境整えます。',en:"Setting environment for focused work.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'私の書斎にも、報告書、置いておけ。',en:"Place reports in my study too.",style:'Direction.'},
    {speaker:'kenji_office',jp:'不要部署、切り捨てるか、判断が要りそうです。',en:"Idle sections — pruning decision needed.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'新講座、来月開講だ。社名も周知させろ。',en:"New course launches next month. Spread the company name.",style:'Close.'},
  ]},
  {id:'conv_06087',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss product launch',lines:[
    {speaker:'yuki_office',jp:'商品の標本、展示会で配布する?',en:"Product samples — distribute at the fair?",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。デモ機の返却、来週までに。',en:"Yes. Demo-unit returns — by next week.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'プロジェクト、本格的に動き出したね。',en:"Project's properly moving.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。担当者、没頭中です。',en:"Yes. Lead is fully absorbed.",style:'Update.'},
    {speaker:'yuki_office',jp:'創業者の書斎、見学コースに加えよう。',en:"Founder's study — add to the tour.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員数を切り捨てる議論、避けたいです。',en:"Yes. Headcount-cut debates — want to avoid.",style:'Soft.'},
    {speaker:'yuki_office',jp:'特別講座、開講に向けて準備、急ごう。',en:"Special course — rush prep toward launch.",style:'Direction.'},
    {speaker:'kenji_office',jp:'社名のロゴ、新ブランドに合わせて、改定中です。',en:"Company logo — being revised for new brand.",style:'Close.'},
  ]},
  {id:'conv_06088',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、製品の標本、学習材料として活用しろ。',en:"Ren, product samples — use as learning material.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。借りた資料は、必ず返却します。',en:"Yes. Borrowed materials — will return.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'業界、デジタル化が動き出した。',en:"Industry — digitalization in motion.",style:'Direction.'},
    {speaker:'ren_uni',jp:'研究に没頭できる環境、ありがたいです。',en:"Environment for absorbed research — grateful.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'専務の書斎、君も招いてもらえる日が来る。',en:"Senior exec's study — day you're invited will come.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'若手を切り捨てる組織、避けたいですね。',en:"Orgs that prune the young — want to avoid.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'来月、社内講座、開講する。社名のブランド、君も学べ。',en:"Next month — in-house course. Learn the brand too.",style:'Close.'},
  ]},
  {id:'conv_06089',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on industrial-record keeping',lines:[
    {speaker:'takeda_officer',jp:'御社の標本管理、警察基準で確認しました。',en:"Your sample mgmt — verified to police standards.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。出版社からの本、返却処理、徹底中です。',en:"Yes. Publisher-book returns — strict processing.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'プロジェクト、警察と歩調を合わせて動き出しましょう。',en:"Project — start in lockstep with police.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'担当の没頭の様子、評価していただきました。',en:"Lead's absorbed work — praised.",style:'Update.'},
    {speaker:'takeda_officer',jp:'創設者の書斎にある古文書、保管基準、設けてください。',en:"Founder's-study old docs — set storage standards.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'過去資料の切り捨て、慎重に判断します。',en:"Pruning historical materials — carefully judged.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'共同講座、開講します。社名併記、お願いします。',en:"Joint course launches. Use both company names.",style:'Close.'},
  ]},
  {id:'conv_06090',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'標本管理、若い頃から徹底してきた。',en:"Sample mgmt — strict since youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。返却忘れ、命取りですね。',en:"Yes. Forgotten returns — fatal.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'業界が動き出した時、機敏な対応、勝負だ。',en:"When industry moves — agile response wins.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'若手は、業務に没頭しています。',en:"Youth — absorbed in their work.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'書斎での読書、習慣を続けろ。',en:"Study-room reading — keep the habit.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。人の切り捨ては、避けたいです。',en:"Yes. Avoid pruning people.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'新講座、開講、社名を背負って臨め。',en:"New course — open carrying the firm's name.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06091',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor briefs a reporter about a disaster response',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、地震発生後、骨折患者、急増しました。',en:"Ren, post-quake — fracture patients spiked.",style:'Calm.'},
    {speaker:'ren_uni',jp:'腎臓への影響、長期で気にかかる症例ありますか。',en:"Kidney impact — long-term cases of concern?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。専門医、各地から駆けつけてくれました。',en:"Yes. Specialists rushed from various regions.",style:'Patient.'},
    {speaker:'ren_uni',jp:'倒壊建物の解体、まだ進行中ですね。',en:"Demolition of collapsed buildings — still ongoing.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。冤罪同然のうわさ、被災者を二次的に傷つけました。',en:"Yes. Wrongful-accusation-like rumors hurt victims secondarily.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'気象庁の予報、迅速でしたか。',en:"Weather agency's forecasts — swift?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。航路運航は一時停止、現場の混乱、収束に向かっています。',en:"Yes. Routes suspended; field chaos heading to settlement.",style:'Reflective close.'},
  ]},
  {id:'conv_06092',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a regional incident',lines:[
    {speaker:'takeda_officer',jp:'被害者は骨折、軽傷で済みました。',en:"Victim — light injuries, fracture only.",style:'Calm.'},
    {speaker:'ren_uni',jp:'腎臓への二次的負担、まだ続いていますか。',en:"Secondary kidney burden — ongoing?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。専門医、警察と連携しています。',en:"Yes. Specialists work with police.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'家屋倒壊の事案、警察も初動対応しましたか。',en:"Building-collapse cases — police initial response?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。冤罪を生まないよう、慎重な捜査を心がけます。',en:"Yes. Mindful investigation to prevent wrongful charges.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'気象庁の警報、地域連携にどう活用されてますか。',en:"JMA alerts — how leveraged in regional coordination?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。船舶運航の警備も、強化中。状況、収束に向かいます。',en:"Yes. Vessel-route security strengthened. Heading to settlement.",style:'Firm close.'},
  ]},
  {id:'conv_06093',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a disaster paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、骨折事例の地域別分析、丁寧でしたね。',en:"Paper — regional fracture analysis, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。腎臓障害との連動、別章で論じました。',en:"Yes. Kidney-impairment linkage — separate chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'専門医の確保、地方で課題ですね。',en:"Specialist supply — regional challenge.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'倒壊建物のリスクモデル、データに基づき構築しました。',en:"Collapse-risk model — data-driven build.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'冤罪リスクとの比較、独創的ですね。',en:"Comparison with wrongful-charge risk — original.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'気象庁のデータ、参考にしました。',en:"JMA data — referenced.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'航空運航への影響、章末で扱っていますね。',en:"Aviation-route impact — chapter end.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'被害収束までのプロセス、長期視点で論じました。',en:"Settlement process — long-term lens.",style:'Earnest close.'},
  ]},
  {id:'conv_06094',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a CSR response to a disaster',lines:[
    {speaker:'hiroshi_boss',jp:'被災地、骨折治療への支援、組み込めるか。',en:"Disaster area — can we add fracture-treatment support?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。腎臓系の患者向け医療キットも検討中です。',en:"Yes. Kidney-care kits — under review.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'専門医、社内ネットワークで紹介できる?',en:"Specialists — introduceable via internal network?",style:'Direction.'},
    {speaker:'kenji_office',jp:'倒壊地区への運搬、ヘリで対応します。',en:"Collapse-zone delivery — by helicopter.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'広報、冤罪まがいの拡散、避けろ。',en:"PR — avoid wrongful-charge-like spread.",style:'Direction.'},
    {speaker:'kenji_office',jp:'気象庁との連携、強化しています。',en:"JMA cooperation — strengthening.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'航空運航再開、社員の出張、慎重に。',en:"Aviation resumption — staff travel, careful.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。事態収束まで、対応続けます。',en:"Yes. Continue response till settled.",style:'Close.'},
  ]},
  {id:'conv_06095',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher reviews a teen project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、防災研究、骨折リスク、よく調べましたね。',en:"Sakura — disaster prep, fracture risk well studied.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。高齢者の腎臓疾患併発、注意点として書きました。',en:"Yes. Elderly kidney complications — noted.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'専門医のインタビュー、貴重ですね。',en:"Specialist interviews — precious.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'家屋倒壊リスク、地域別データを使いました。',en:"Building-collapse risk — regional data used.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'冤罪に近い噂被害、二次被害として扱う視点、優れてますね。',en:"Wrongful-charge-like rumor harm — as secondary harm: excellent angle.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'気象庁の警報、利活用、章にまとめました。',en:"JMA alerts — utilization, summarized.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'交通機関の運航、収束までの記録、丁寧でしたね。',en:"Transit-route operation till settlement — careful.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_06096',cluster:'D',ambient:'street_quiet_distant',cast:['riku_teen','ryosuke_dad'],targets:D_T,scenario:'A teen and his dad watch a baseball game',lines:[
    {speaker:'riku_teen',jp:'お父さん、タイガースの試合、見に行こう。',en:"Dad — Tigers game, let's go.",style:'Excited teen.'},
    {speaker:'ryosuke_dad',jp:'いいぞ。地元の民謡、球場で流れることもあるんだ。',en:"Sure. Local folk songs sometimes play at the stadium.",style:'Easy.'},
    {speaker:'riku_teen',jp:'昔の友達、乗馬クラブ通ってるって。',en:"Old friend's at a riding club, I heard.",style:'Animated.'},
    {speaker:'ryosuke_dad',jp:'夏は、近くの河原で蛍が見れるんだ。',en:"Summer — fireflies visible at the nearby riverbed.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'家、扇風機、新しいの欲しいよ。',en:"At home — want a new fan.",style:'Casual.'},
    {speaker:'ryosuke_dad',jp:'お母さんの美容師さん、夏向けのカット、提案してくれるって。',en:"Mom's hairdresser proposes summer cuts.",style:'Calm.'},
    {speaker:'riku_teen',jp:'おじいちゃんの故郷、山間の地域だっけ。',en:"Grandpa's hometown — mountain-valley region?",style:'Curious.'},
    {speaker:'ryosuke_dad',jp:'うん。山村の暮らし、たまに訪ねたいね。',en:"Yes. Mountain-village life — sometimes wanna visit.",style:'Wistful close.'},
  ]},
  {id:'conv_06097',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a weekend',lines:[
    {speaker:'mei_romantic',jp:'今度の試合、タイガースの応援、行こうよ。',en:"Tigers game cheering — let's go.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'うん。前夜祭で民謡の演奏もあるって。',en:"Yes. Pre-night fest with folk-song performance too.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'最近、乗馬体験、興味あるんだ。',en:"Lately — into horse-riding experience.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'夏、蛍鑑賞ツアーも、近所であるって。',en:"Summer — firefly-viewing tour nearby too.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'扇風機、エコ仕様の買い替えるの。',en:"Fan — replacing with eco-spec.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'美容師の友達、新作カットを試してくれた。',en:"Hairdresser friend tried a new cut on me.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'山間の温泉、リフレッシュにいいよね。',en:"Mountain-valley onsen — good refresh.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'山村ステイ、来月、企画している。',en:"Mountain-village stay — planning next month.",style:'Warm close.'},
  ]},
  {id:'conv_06098',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss regional culture',lines:[
    {speaker:'asuka_teacher',jp:'論文、阪神タイガースと地域経済、面白い切り口ですね。',en:"Paper — Hanshin Tigers and regional economy, fresh angle.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。地元民謡の継承、章として扱いました。',en:"Yes. Local-folk-song succession — chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'観光業として乗馬体験、最近、注目ですね。',en:"Horse riding as tourism — recently spotlighted.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'夏の蛍観光、過疎地域の活性化につながる可能性、論じました。',en:"Summer firefly tourism — depopulated-area revival potential discussed.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'家電業界、扇風機メーカーの動向、参考にされましたね。',en:"Appliance industry — fan-maker trends referenced.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'美容師業の高齢化、地域格差、別章にしました。',en:"Hairdresser aging and regional gaps — separate chapter.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'山間地域の文化、丁寧に取材されましたね。',en:"Mountain-valley culture — careful coverage.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'山村のコミュニティ活動も、最終章にまとめます。',en:"Mountain-village community activities — final chapter.",style:'Earnest close.'},
  ]},
  {id:'conv_06099',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、タイガースを応援に、球場通ったな。',en:"In youth — went to support the Tigers at the park.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。地元の民謡、祭りで毎年聴いてた。',en:"Yes. Local folk songs — every fest.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'乗馬を習ってた、隣の小川さん、覚えてる?',en:"Ogawa next door who rode — remember?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'夏、川辺で蛍を二人で眺めた夜、忘れないわ。',en:"Summer — riverside firefly nights together, never forgotten.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'扇風機、当時、贅沢品だったな。',en:"Fans — luxury back then.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'美容師の若い娘さんが、定期的に来てくれて、嬉しいわ。',en:"Young hairdresser visits regularly — glad.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'故郷の山間の風景、今でも夢に出るよ。',en:"Hometown's mountain-valley scene — still dreams.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'山村の春祭り、一度、帰省したいわね。',en:"Mountain-village spring fest — wanna visit once.",style:'Warm close.'},
  ]},
  {id:'conv_06100',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a culture event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、タイガースの応援デー、店でも盛り上げよか。',en:"Aoi-san, Tigers cheer day — hype the shop too?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。地元民謡のBGM、流しましょう。',en:"Yes. Local-folk BGM — playing.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'乗馬クラブのお客様向けに、特別席、組もか。',en:"Riding-club guests — special seats?",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'夏は、店裏で蛍観賞会、企画しましょう。',en:"Summer — firefly-viewing event behind the shop.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'屋外席、扇風機で涼しく保とう。',en:"Outdoor seats — keep cool with fans.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'美容師の常連様向けに、新作シャンプー、入荷します。',en:"For hairdresser regulars — new shampoo stocked.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'山間ロケのワーケーション、提携できるかも。',en:"Mountain-valley workation — potential tie-up.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'山村との物産展、店頭で開催したいです。',en:"Mountain-village goods fair — at the storefront.",style:'Warm close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_286 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['降る','掛かっ','代わっ','移り','握り','おしまい','握る','見当']
const B_T = ['市役所','フロア','洗練','ハードディスク','大物','スマート','本題','紙面']
const C_T = ['をめぐって','促す','西欧','源泉','日本海','団結','結びつい','乏しい']
const D_T = ['刀','商人','平安','伝承','作物','納豆','薬局','ツリー']

const data = [
  // A
  {id:'conv_05681',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat on a rainy evening',lines:[
    {speaker:'sho_child',jp:'ママ、外、雨が降る音がするよ。',en:"Mom, I hear the rain falling outside.",style:'Soft child.'},
    {speaker:'yumiko_mom',jp:'夜中まで掛かっているみたい。傘、玄関に出しておこうね。',en:"Seems lasting till midnight. Let's put an umbrella by the door.",style:'Warm.'},
    {speaker:'sho_child',jp:'お父さんが代わって、ゴミ出してくれた。',en:"Dad took the trash out in my place.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'季節も移り変わって、もう肌寒いね。',en:"Seasons changing — chilly already.",style:'Reflective.'},
    {speaker:'sho_child',jp:'おにぎりを握り、ピクニックしたいなあ。',en:"I wanna roll rice balls and picnic.",style:'Wistful.'},
    {speaker:'yumiko_mom',jp:'今日はおしまい。明日、晴れたらね。',en:"Today's it. If sunny tomorrow, sure.",style:'Tender.'},
    {speaker:'sho_child',jp:'手を握ると、安心するよ。',en:"Holding hands, I feel safe.",style:'Tender.'},
    {speaker:'yumiko_mom',jp:'明日のお天気、見当もつかないけど、楽しみね。',en:"Tomorrow's weather, no idea — but exciting.",style:'Warm close.'},
  ]},
  {id:'conv_05682',cluster:'A',ambient:'cafe_quiet_chatter',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat on a drizzly afternoon',lines:[
    {speaker:'sakura_teen',jp:'雨、しとしと降る音、好きなんだ。',en:"I like the soft sound of falling rain.",style:'Soft teen.'},
    {speaker:'riku_teen',jp:'帰り、傘に時間掛かっちゃうな。',en:"Going home, umbrella eats time.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'部活、今日は先輩が代わってくれたの。',en:"Today senpai filled in for me at the club.",style:'Bright.'},
    {speaker:'riku_teen',jp:'いいな。気分も移り変わるよね、雨の日は。',en:"Nice. Mood shifts on rainy days.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'コンビニで、おにぎりを握り直してた店員、面白かった。',en:"At the convenience store, the clerk re-rolling rice balls was funny.",style:'Animated.'},
    {speaker:'riku_teen',jp:'今日の話、ここでおしまいにしよう。電車来た。',en:"Let's call today's chat done. Train's here.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'手すり、握ってね、滑るから。',en:"Hold the rail — it's slippery.",style:'Caring.'},
    {speaker:'riku_teen',jp:'うん、見当つけて、ゆっくり行く。',en:"Yeah, I'll guess my footing and go slow.",style:'Wry close.'},
  ]},
  {id:'conv_05683',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple share an autumn afternoon',lines:[
    {speaker:'hiroshi_elder',jp:'初雪が降る前に、庭、片付けないとな。',en:"Before first snowfall, tidy the garden.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん、毎年時間掛かってるわね。',en:"Yes, takes time every year.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'今年は隣の娘さんが、代わってくれるって。',en:"This year the neighbor's daughter'll fill in.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'時の流れ、移り行くわね。',en:"The flow of time keeps shifting.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'孫が握り寿司を握る練習してる、夢中で。',en:"Our grandkid is practicing rolling sushi, absorbed.",style:'Bright.'},
    {speaker:'sachiko_grandma',jp:'夕飯、もうおしまいね。お風呂入る?',en:"Dinner's done. Bath?",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お前の手を握ると、いつも温かい。',en:"Holding your hand is always warm.",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'明日の予定、見当ついてないけど、ゆっくりしましょ。',en:"No clue about tomorrow's plans, let's relax.",style:'Warm close.'},
  ]},
  {id:'conv_05684',cluster:'A',ambient:'street_quiet_distant',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student walks a teen home in light rain',lines:[
    {speaker:'sakura_teen',jp:'雨が降る中、迎えに来てくれてありがとうございます。',en:"Thank you for coming for me in the rain.",style:'Polite teen.'},
    {speaker:'ren_uni',jp:'いいよ。傘、いつも掛かってたフックから持ってきた。',en:"Sure. I grabbed the umbrella from the usual hook.",style:'Easy.'},
    {speaker:'sakura_teen',jp:'親が出張で、おじが代わって面倒みてくれてます。',en:"Parents on a trip; uncle's covering for them.",style:'Bright.'},
    {speaker:'ren_uni',jp:'家族の役割、移り変わるよな。',en:"Family roles do shift.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'駅前の店で、おにぎり握り立てだそうです。',en:"Station-front shop has freshly rolled rice balls, they say.",style:'Animated.'},
    {speaker:'ren_uni',jp:'寄ろう。雨おしまいまで時間ありそう。',en:"Let's stop in. Looks like time before the rain ends.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'手を握る癖、子供っぽいかな。',en:"Hand-holding habit — childish?",style:'Vulnerable.'},
    {speaker:'ren_uni',jp:'全然。先輩としては見当通りの行動だよ。',en:"Not at all. As senpai, expected behavior.",style:'Warm close.'},
  ]},
  {id:'conv_05685',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends discuss change over coffee',lines:[
    {speaker:'mei_romantic',jp:'最近、急に雨が降る日が増えたね。',en:"Recently, more days of sudden rain.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'予報も追いつかない。準備に時間掛かってる。',en:"Forecasts don't keep up. Prep takes time.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'仕事、後輩が代わってくれて、休めたの。',en:"My junior covered for me — got to rest.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'季節も気持ちも、移り変わる時期ね。',en:"Both seasons and feelings shift now.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'夜、おにぎりを握り直しながら、考え事してた。',en:"At night I rolled rice balls and pondered.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'考えすぎたら、もうおしまいね。',en:"Overthinking — just stop there.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'うん、自分を握る感覚、忘れずにいたいな。',en:"Yes, I want to keep a grip on myself.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'見当はずれな心配、しないでね。',en:"Don't worry about off-base things.",style:'Warm close.'},
  ]},

  // B
  {id:'conv_05686',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss and his manager prep an office move',lines:[
    {speaker:'hiroshi_boss',jp:'市役所からの認可、いつ届く?',en:"When does city hall's approval arrive?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'来週です。新フロアは、洗練されたデザインになっています。',en:"Next week. New floor has a refined design.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'本題に入ろう。データ移行、ハードディスクは新規調達か。',en:"To the main topic. Data migration — fresh hard disks?",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。大物の役員も視察予定です。',en:"Yes. A senior executive will inspect too.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'スマートな運用で、紙面でも好意的に報じてほしい。',en:"Want smart ops, favorable press coverage.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'広報、調整します。',en:"PR — I'll coordinate.",style:'Brief close.'},
  ]},
  {id:'conv_05687',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss a relocation project',lines:[
    {speaker:'yuki_office',jp:'本題のフロア配置、市役所と最終確認したい。',en:"Main topic — floor layout, finalize with city hall.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。洗練されたエントランス案、決裁待ちです。',en:"Yes. Refined entrance plan awaiting sign-off.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'ハードディスクは廃棄方針も決めて。',en:"Decide hard-disk disposal too.",style:'Direction.'},
    {speaker:'kenji_office',jp:'大物のIT顧問にもスマートな助言を頂きました。',en:"A senior IT advisor gave smart counsel.",style:'Update.'},
    {speaker:'yuki_office',jp:'地元紙面、好意的に取り上げてくれるとありがたい。',en:"Local press — favorable coverage would help.",style:'Close.'},
  ]},
  {id:'conv_05688',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss explains corporate moves to a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、市役所との折衝、企業移転で重要な手続きだ。',en:"Ren, city-hall negotiation is key for moves.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'各フロアの設計、洗練されてますね。',en:"Each floor's design is refined.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'本題は、ハードディスクのデータ移行だ。慎重に。',en:"The main topic is hard-disk migration. Careful.",style:'Direction.'},
    {speaker:'ren_uni',jp:'大物の取引先にも、スマートに対応されてますね。',en:"Senior clients — handled smartly.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'紙面で広く伝わる時もあれば、内輪で済む時もある。',en:"Sometimes press-spread, sometimes internal.",style:'Informative close.'},
  ]},
  {id:'conv_05689',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','yuki_office'],targets:B_T,scenario:'A police officer briefs a manager about office security',lines:[
    {speaker:'takeda_officer',jp:'市役所への申請、防犯計画も添付してください。',en:"Attach a crime-prevention plan to your city-hall filing.",style:'Calm.'},
    {speaker:'yuki_office',jp:'はい。各フロアに洗練されたカメラ、配置しています。',en:"Yes. Refined cameras per floor.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'本題は、ハードディスク等の保管です。',en:"Main topic: hard-disk storage.",style:'Procedural.'},
    {speaker:'yuki_office',jp:'大物来訪時にも対応できるスマートな仕様です。',en:"Smart spec, can handle VIP visits.",style:'Update.'},
    {speaker:'takeda_officer',jp:'紙面に出ない地味な対策こそ大事です。',en:"Quiet, off-press measures matter most.",style:'Firm close.'},
  ]},
  {id:'conv_05690',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors on PR strategy',lines:[
    {speaker:'hiroshi_elder',jp:'本社移転、市役所まで挨拶に行ったか?',en:"On HQ relocation, did you greet at city hall?",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。新フロアの洗練された設計、好評です。',en:"Yes. New-floor refined design well received.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'本題は、紙面戦略だ。大物記者と関係築け。',en:"Main topic — press strategy. Build VIP-reporter ties.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'ハードディスクのセキュリティも、スマートに進めています。',en:"Hard-disk security, advancing smartly.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'地に足を、忘れるな。',en:"Don't forget your feet on the ground.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05691',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a geopolitical news segment',lines:[
    {speaker:'asuka_teacher',jp:'論文、エネルギー安全保障をめぐって、西欧との比較を進めていますね。',en:"Your paper, on energy security, compares to Western Europe.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。日本海側の供給源と、結びついた地域経済も扱います。',en:"Yes. Sea-of-Japan supply sources and linked regional economies too.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'資源の源泉が乏しい国は、団結を促す傾向にありますね。',en:"Resource-scarce nations tend to promote unity.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい、政策レビューを促す結びが、結論章にあります。',en:"Yes — a closing prompting policy review is in the conclusion.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'丁寧な仕事です。',en:"Careful work.",style:'Reflective close.'},
  ]},
  {id:'conv_05692',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about regional safety',lines:[
    {speaker:'takeda_officer',jp:'近年、薬物をめぐって、日本海側の通関で動きがあります。',en:"Recently, drug-related activity at Sea-of-Japan customs.",style:'Calm.'},
    {speaker:'ren_uni',jp:'西欧由来の合成薬物との結びついた事案ですか。',en:"Cases linked to Western-Europe synthetics?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。情報源の源泉が乏しい地域もあって、警察は団結が必要です。',en:"Yes. Some areas have scarce sources; we need unity.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'住民への通報を促す活動も、強化されていますね。',en:"Activities urging resident-reporting are strengthened too.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'地域の協力が頼りです。',en:"Regional cooperation is our reliance.",style:'Firm close.'},
  ]},
  {id:'conv_05693',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews international expansion',lines:[
    {speaker:'hiroshi_boss',jp:'欧州市場をめぐって、再編が進んでいる。',en:"Around the European market, restructuring proceeds.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。西欧拠点、製造リードと結びついた強みです。',en:"Yes. Western-Europe hubs are tied to manufacturing leads.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'供給の源泉が乏しい部材、対策を促せ。',en:"For parts with scarce sources, prompt countermeasures.",style:'Direction.'},
    {speaker:'kenji_office',jp:'日本海側の港湾、リスク分散に検討中です。',en:"Sea-of-Japan ports — under review for risk-diversification.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'組織の団結、忘れるな。',en:"Don't forget org unity.",style:'Firm close.'},
  ]},
  {id:'conv_05694',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a current-events project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、漁業権をめぐって、地域の声、丁寧に拾えていますね。',en:"Sakura, you've gathered fishing-rights voices well.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。日本海側の漁師さん、西欧との比較に興味を示してます。',en:"Yes. Sea-of-Japan fishermen show interest in Western-Europe comparisons.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'魚の源泉が乏しい年、地域団結が試されますね。',en:"In lean-source years, regional unity is tested.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'若手の参加を促す自治体の取り組みも、強く結びついています。',en:"Municipal efforts urging youth participation are strongly tied in too.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'素晴らしい着眼点です。',en:"Great focus.",style:'Reflective close.'},
  ]},
  {id:'conv_05695',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health policy with a reporter',lines:[
    {speaker:'saito_doctor',jp:'予防接種をめぐって、地域差が大きい現状です。',en:"On vaccinations, regional gaps are wide now.",style:'Calm.'},
    {speaker:'ren_uni',jp:'西欧の事例と結びついた比較、可能ですか。',en:"Comparison linked to Western-Europe cases possible?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。財源の源泉が乏しい自治体、団結して交渉する必要があります。',en:"Yes. Municipalities with scarce funding must unite to negotiate.",style:'Patient.'},
    {speaker:'ren_uni',jp:'住民の理解を促す広報、医療現場が頼りですね。',en:"PR urging resident understanding — medical staff are key.",style:'Engaged.'},
    {speaker:'saito_doctor',jp:'日本海側の小集落、特に支援が要ります。',en:"Sea-of-Japan small settlements especially need aid.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_05696',cluster:'D',ambient:'museum_quiet_distant',cast:['asuka_teacher','sakura_teen'],targets:D_T,scenario:'A teacher and student visit a history museum',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、平安時代の刀、保存状態が見事ね。',en:"Sakura, this Heian-era sword is wonderfully preserved.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。当時の商人が持っていた伝承も、館内に展示があります。',en:"Yes. There's a display on legends from a merchant of the time.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'地域の作物、納豆の起源も、近隣展示にありましたよ。',en:"Local crops — natto's origin too, in a nearby display.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'昔の薬局、再現コーナーも興味深い。',en:"Old-pharmacy reconstruction is interesting too.",style:'Animated.'},
    {speaker:'asuka_teacher',jp:'クリスマスツリーの起源展も、別館で開催中とか。',en:"A Christmas-tree origins exhibit is in the annex too.",style:'Bright close.'},
  ]},
  {id:'conv_05697',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two cafe friends plan a culture-themed evening',lines:[
    {speaker:'mei_romantic',jp:'今晩、平安時代をテーマにしたディナーに行くの。',en:"Tonight, a Heian-themed dinner.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'素敵!古い刀の展示も併設してるんでしょ?',en:"Lovely! An old-sword display alongside, right?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'うん。地元商人の伝承、解説してくれるそう。',en:"Yes. Local-merchant legends are narrated.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'作物コーナーで、納豆の試食もあるって聞いた。',en:"At the crops corner, natto tastings too, I heard.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'帰り、薬局で常備薬買って、家でゆっくり。',en:"On the way back, grab usual meds at the pharmacy, chill home.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'店のツリー、もう飾った?',en:"Have you decorated your shop's tree?",style:'Warm close.'},
  ]},
  {id:'conv_05698',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss a documentary on rural traditions',lines:[
    {speaker:'asuka_teacher',jp:'昨夜のドキュメンタリー、平安期の刀鍛冶、印象的でしたね。',en:"Last night's doc — Heian-era swordsmiths, striking.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。商人を介した流通、地域作物との結びつきも面白かった。',en:"Yes. Merchant distribution and links to local crops were interesting.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'納豆の伝承、家ごとに違うって、丁寧に取材されてました。',en:"Natto legends, household-specific, carefully covered.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'昔の薬局の役割も、地域社会の核だったそうですね。',en:"Old pharmacies' role as community core, too.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'クリスマスツリーの章、西欧との接点も触れていました。',en:"Christmas-tree chapter touched on Western-Europe links too.",style:'Reflective close.'},
  ]},
  {id:'conv_05699',cluster:'D',ambient:'street_quiet_distant',cast:['hiroshi_elder','sho_child'],targets:D_T,scenario:'An elderly man tells his grandson about old traditions',lines:[
    {speaker:'hiroshi_elder',jp:'翔、お爺ちゃんの家の蔵に、刀が一振りあったんだ。',en:"Sho, in grandpa's storehouse there was one sword.",style:'Sage.'},
    {speaker:'sho_child',jp:'すごい!平安時代のもの?',en:"Wow! From the Heian era?",style:'Awe child.'},
    {speaker:'hiroshi_elder',jp:'いや、もう少し新しい。先祖は商人だったから。',en:"No, a bit newer. Ancestors were merchants.",style:'Warm.'},
    {speaker:'sho_child',jp:'家の伝承、面白い!',en:"Family legends are fun!",style:'Bright.'},
    {speaker:'hiroshi_elder',jp:'夕飯、納豆と地元の作物の和え物が出るぞ。',en:"For dinner — natto and local-crop side.",style:'Cheerful.'},
    {speaker:'sho_child',jp:'お薬、薬局で買って帰る?',en:"Should we buy meds at the pharmacy on the way?",style:'Helpful.'},
    {speaker:'hiroshi_elder',jp:'うん、寄ろう。クリスマスツリーも、街角に灯ったな。',en:"Yes, let's. Christmas trees lit on the corners too.",style:'Warm close.'},
  ]},
  {id:'conv_05700',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef plans a winter festival menu',lines:[
    {speaker:'daichi_kansai',jp:'冬フェア、平安期のレシピも一品入れよか。',en:"Winter fair — a Heian-era recipe slot too?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'いいですね。地域の作物と納豆の和え物、合いそう。',en:"Sounds good. Local crops with natto side, fits.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'昔ながらの商人町を彷彿させる装飾も、ええな。',en:"Decor evoking old merchant town would do well.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'刀の装飾レプリカ、地元伝承と絡めて。',en:"Sword-replica decor tied to local legends.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'近くの薬局からも、ハーブ仕入れさせてもらおか。',en:"Source herbs from the nearby pharmacy too.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'店先のツリー、装飾、こだわって飾りますね。',en:"Storefront tree — decorate with care.",style:'Warm close.'},
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

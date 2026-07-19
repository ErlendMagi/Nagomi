import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_285 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['正体','気力','叫ぶ','誘わ','親族','見つめる','うれしく','年上']
const B_T = ['返答','内訳','値上がり','倍増','消耗','受給','心得','規律']
const C_T = ['文化財','水面','悪質','脅迫','製薬','地価','告げる','変容']
const D_T = ['四季','蛇','蝶','鶴','鐘','線路','頂上','聖堂']

const data = [
  // A
  {id:'conv_05661',cluster:'A',ambient:'living_room_quiet',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat after a school festival',lines:[
    {speaker:'sakura_teen',jp:'お化け屋敷で、隣の年上の先輩が思わず叫ぶの、面白かった。',en:"At the haunted house, the older senpai next to me let out a scream.",style:'Animated teen.'},
    {speaker:'riku_teen',jp:'正体が分かったら、急に気力なくしてたな。',en:"Once the trick was clear, they instantly lost energy.",style:'Wry casual.'},
    {speaker:'sakura_teen',jp:'うちの親族、ひとり来てくれて、うれしくて。',en:"One of my relatives came — I was so happy.",style:'Bright.'},
    {speaker:'riku_teen',jp:'明日も部活に誘われたんだ。',en:"I was invited to the club tomorrow too.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'写真の中で、笑顔見つめると、心が温かくなる。',en:"Gazing at the smile in the photo warms me.",style:'Soft close.'},
  ]},
  {id:'conv_05662',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two cafe friends share gossip',lines:[
    {speaker:'mei_romantic',jp:'昨夜、知らない番号から電話、正体不明で。',en:"Last night, an unknown number called — identity unclear.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'怖いね。叫ぶほど驚いた?',en:"Scary. Startled enough to scream?",style:'Gentle.'},
    {speaker:'mei_romantic',jp:'うん、ちょっと。気力使い果たして、寝ちゃった。',en:"Yeah, a bit. Drained energy, went to sleep.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'年上の従兄弟、親族の中で一番頼りになるって言ってたよね。',en:"Older cousin — most reliable in the family, you said.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'うん。今日、お茶に誘われたの。うれしくて即返事した。',en:"Yes. Invited me for tea today. So happy, replied right away.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'昔の写真、見つめると元気出るよね。',en:"Gazing at old photos perks you up.",style:'Warm close.'},
  ]},
  {id:'conv_05663',cluster:'A',ambient:'street_quiet_distant',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student and a teen walk after a movie',lines:[
    {speaker:'ren_uni',jp:'あの映画のラスト、犯人の正体、桜は気づいてた?',en:"That film's ending — did you catch the culprit's identity, Sakura?",style:'Engaged senpai.'},
    {speaker:'sakura_teen',jp:'いえ、最後の叫ぶシーンで初めて分かりました。',en:"No, only at the final scream did I get it.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'伏線の親族関係、複雑だったよな。',en:"The relative-relationship foreshadowing was complex.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'先輩に誘われて来てうれしくて、つい喋りすぎちゃいました。',en:"So happy to be invited, I overtalked.",style:'Bright.'},
    {speaker:'ren_uni',jp:'年上らしく聞き役に回ったよ。気力余ってるね、桜は。',en:"As the elder I listened. You've got energy, Sakura.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'帰り道、街の灯り見つめながら、余韻浸ります。',en:"On the way home, gazing at city lights, I'll savor.",style:'Soft close.'},
  ]},
  {id:'conv_05664',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple reminisce in the evening',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、お前の正体を見抜けなくて、悩んだものさ。',en:"In youth, unable to read your true nature, I struggled.",style:'Wry reflective.'},
    {speaker:'sachiko_grandma',jp:'あら、私だって気力で隠してた部分、あったわよ。',en:"Oh, I hid parts of myself with willpower too.",style:'Soft warm.'},
    {speaker:'hiroshi_elder',jp:'お互いの親族から、いろいろ言われたな。',en:"Both our relatives had plenty to say.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'年上の伯母さん、特に厳しかった。',en:"My older aunt was especially strict.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'同窓会に誘われたが、二人で行こうか。',en:"Got invited to a reunion — together?",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'うれしくて、もう何着るか悩んでるわ。',en:"So happy, already wondering what to wear.",style:'Bright.'},
    {speaker:'hiroshi_elder',jp:'昔の写真、二人で見つめる時間、いいな。',en:"Time spent gazing at old photos together is nice.",style:'Warm close.'},
    {speaker:'sachiko_grandma',jp:'思わず叫ぶような驚き、人生にはあったわね。',en:"Life had surprises that made one cry out.",style:'Soft close.'},
  ]},
  {id:'conv_05665',cluster:'A',ambient:'park_distant_birds',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son spot something in the park',lines:[
    {speaker:'sho_child',jp:'ママ、あれ何?正体が分からないよ。',en:"Mom, what's that? Identity unclear!",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'ふふ、ただの落ち葉よ。気力使いすぎないでね。',en:"Hehe, just a fallen leaf. Don't spend too much energy.",style:'Warm.'},
    {speaker:'sho_child',jp:'こないだ、年上のお姉ちゃんと遊びに誘われたんだ。',en:"The other day, an older girl invited me to play.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'うれしくて報告してくれたのね。',en:"You came to tell me so happily.",style:'Tender.'},
    {speaker:'sho_child',jp:'親族のおじちゃんも、いつも見つめる目が優しい。',en:"My uncle also gazes with kind eyes.",style:'Soft.'},
    {speaker:'yumiko_mom',jp:'転んでも、叫ぶ前にお母さん呼んでね。',en:"Even when you fall, call me before screaming.",style:'Tender close.'},
  ]},

  // B
  {id:'conv_05666',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss and his manager review market data',lines:[
    {speaker:'hiroshi_boss',jp:'競合の値上がり、利益への影響、内訳を出せ。',en:"Competitor price hikes — break down profit impact.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。コスト消耗が倍増する想定です。',en:"Yes. Cost depletion is projected to double.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'役員会への返答、急ぐぞ。',en:"Response to the board — hurry.",style:'Direction.'},
    {speaker:'kenji_office',jp:'承知。労務受給バランスも、規律を保ちつつ、見直します。',en:"Understood. Labor receipt-supply balance — reviewed with discipline preserved.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'これまでの心得、忘れるな。',en:"Don't forget the principles so far.",style:'Firm close.'},
  ]},
  {id:'conv_05667',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss labor policy',lines:[
    {speaker:'yuki_office',jp:'残業手当の内訳、見直しが要るね。',en:"Overtime breakdown needs review.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。残業時間が倍増している部署、消耗が激しい。',en:"Yes. Departments where overtime doubled — severe burnout.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'人件費の値上がり、組合への返答、慎重に。',en:"Personnel-cost rise — careful response to the union.",style:'Direction.'},
    {speaker:'kenji_office',jp:'規律と受給のバランス、心得として現場に伝えます。',en:"Discipline-vs-benefits balance — I'll convey as principle to the field.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'頼む。',en:"Thanks.",style:'Close.'},
  ]},
  {id:'conv_05668',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern on business basics',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、原料の値上がり、企業財務に倍増の影響を与える時もある。',en:"Ren, raw-material rises sometimes double-impact firm finances.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'費用の内訳、慎重に分析が必要なんですね。',en:"Breakdown of costs requires careful analysis.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'取引先からの返答、ずれることもある。心得として備えておけ。',en:"Vendor responses can shift. Prepare as principle.",style:'Direction.'},
    {speaker:'ren_uni',jp:'人件費の受給管理、規律ある運用が大事ですね。',en:"Personnel pay-out management — disciplined operation matters.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'消耗品費の管理も、見落とすな。',en:"Don't overlook consumable costs either.",style:'Close.'},
  ]},
  {id:'conv_05669',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer interviews a manager about an industry fraud case',lines:[
    {speaker:'takeda_officer',jp:'業界全体で、値上がりに乗じた詐欺が倍増しています。',en:"Across the industry, hike-leveraged fraud doubled.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい、社内でも問い合わせが消耗する量です。',en:"Yes, our inquiries are exhausting in volume.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'被害の内訳、業種別に整理されていますか。',en:"Damage breakdown — by industry?",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。受給契約に関する詐欺も含まれます。',en:"Yes. Includes payout-contract fraud.",style:'Update.'},
    {speaker:'takeda_officer',jp:'規律ある返答を、被害者に届けたいですね。',en:"Want disciplined responses to victims.",style:'Firm.'},
    {speaker:'kenji_office',jp:'警察の心得、勉強になります。',en:"Police principles — instructive.",style:'Earnest close.'},
  ]},
  {id:'conv_05670',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a current boss',lines:[
    {speaker:'hiroshi_elder',jp:'原油の値上がり、若い頃にも倍増の局面があった。',en:"Oil hikes — even in my youth there were doubling phases.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'コストの内訳、当時はどう乗り切ったんですか。',en:"How did you ride out the cost breakdown back then?",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'規律を守り、消耗戦を避けた。返答は迅速にしたな。',en:"Kept discipline, avoided attrition battles. Quick responses.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'人事の受給制度、心得として伺いたいです。',en:"HR payout systems — I'd hear as principles.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'人を粗末にすれば、企業は終わる。',en:"Mistreat people, the firm ends.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05671',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a real-estate news segment',lines:[
    {speaker:'asuka_teacher',jp:'今朝のニュース、駅前の地価、急騰を告げる内容でしたね。',en:"Morning news announced a sudden land-price jump near the station.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。商業地が変容する局面、文化財の保全に影響しそうです。',en:"Yes. Commercial transformation may affect cultural-property protection.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'水面下で、悪質な業者の動きもあるらしい。',en:"Below the surface, vicious operators reportedly act.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'住民への脅迫まがいの勧誘、報じられました。',en:"Harassment-like solicitations to residents were reported.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'関連の製薬企業も、土地転売で動いてるとか。',en:"Related pharma firms reportedly move via flips too.",style:'Reflective close.'},
  ]},
  {id:'conv_05672',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a reporter about a fraud case',lines:[
    {speaker:'takeda_officer',jp:'地価高騰に乗じた悪質な詐欺、増えています。',en:"Hike-leveraged vicious fraud is rising.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者に脅迫が及んだ事案もあると聞きました。',en:"Cases of victim intimidation, I heard.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。文化財の周辺が水面下で取引される構造も問題です。',en:"Yes. Below-surface deals around cultural assets are a structural issue.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地域社会が変容する中、企業のジャーナリズム的責任も。',en:"As community transforms, firms also have journalistic responsibilities.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'製薬や小売、業種を超えた連携を告げる時期です。',en:"Time to announce cross-industry pharma-retail cooperation.",style:'Firm close.'},
  ]},
  {id:'conv_05673',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and manager review a CSR/news topic',lines:[
    {speaker:'hiroshi_boss',jp:'記事に、わが社の地価評価が変容したと告げる文があった。',en:"The article announced that our land valuation shifted.",style:'Concerned.'},
    {speaker:'kenji_office',jp:'はい。製薬部門の用地、文化財との隣接で注目です。',en:"Yes. Our pharma lot — adjacent to cultural property, drawing notice.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'水面下で、悪質な仲介業者が動いているとも。',en:"Below the surface, vicious brokers reportedly active too.",style:'Direction.'},
    {speaker:'kenji_office',jp:'脅迫まがいの問い合わせ、社内でも記録しています。',en:"Threat-like inquiries, we're logging internally.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'警察と速やかに連携を。',en:"Swiftly partner with the police.",style:'Firm close.'},
  ]},
  {id:'conv_05674',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a student through a current-events project',lines:[
    {speaker:'asuka_teacher',jp:'桜さんの自由研究、地価変容と文化財保護、難しいテーマね。',en:"Sakura's project — price-shift versus cultural protection, a hard theme.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。製薬会社の土地買収、水面下の動きが多いです。',en:"Yes. Pharma-firm purchases have many below-surface moves.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'悪質な業者が住民に脅迫を告げる事案、報じられていますね。',en:"Cases of vicious brokers issuing threats to residents are reported.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'まちが変容して、伝統が失われる危機ですね。',en:"As town transforms, tradition risks loss.",style:'Reflective.'},
    {speaker:'asuka_teacher',jp:'丁寧に取材しましょう。',en:"Let's interview carefully.",style:'Warm close.'},
  ]},
  {id:'conv_05675',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor explains medical research to a reporter',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、製薬業界、研究現場は急速に変容しています。',en:"Ren, pharma research is transforming rapidly.",style:'Calm.'},
    {speaker:'ren_uni',jp:'臨床試験を告げる手続き、規制が厳しくなってますね。',en:"Notification procedures for trials grew stricter.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。悪質な研究不正、患者への脅迫的事案もありました。',en:"Yes. Vicious research misconduct, even threat-like cases against patients.",style:'Patient.'},
    {speaker:'ren_uni',jp:'文化財医学博物館も、水面下で資料を整えていると伺いました。',en:"The cultural-property medical museum is reportedly readying records below-surface.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'地価上昇で施設の維持も厳しい現実ですが、続けます。',en:"Land-price rises strain facility upkeep, but we continue.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_05676',cluster:'D',ambient:'shrine_distant_bell',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends visit a shrine in spring',lines:[
    {speaker:'mei_romantic',jp:'四季の中で、春のお詣りが一番好き。',en:"Of the four seasons, spring shrine visits are my favorite.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。聖堂みたいな静けさ、心が落ち着くよね。',en:"Yes. Cathedral-like calm settles the heart.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'池の蛇、たまに見るけど、怖くない?',en:"The pond snake — sometimes seen, not scary?",style:'Probe.'},
    {speaker:'aoi_barista',jp:'蝶と一緒だと、自然の縮図に見えるよ。',en:"With butterflies, it looks like a slice of nature.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'鶴のお守り、お土産に買って帰ろう。',en:"Crane charm — buy as a souvenir.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'鐘の音、線路の向こうまで響いてきれいだね。',en:"Bell sound carries past the tracks, lovely.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'山の頂上、まだ雪残ってるね。',en:"Mountain summit still has snow.",style:'Reflective close.'},
  ]},
  {id:'conv_05677',cluster:'D',ambient:'park_distant_birds',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens go hiking',lines:[
    {speaker:'sakura_teen',jp:'山の頂上まで、線路沿いに登るルートあるって。',en:"To the summit — there's a trackside route.",style:'Excited.'},
    {speaker:'riku_teen',jp:'おっ。途中に古い聖堂もあるらしい。',en:"Oh. An old chapel along the way too.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'四季の景色が美しい場所だって、雑誌に載ってた。',en:"A magazine featured it for four-season scenery.",style:'Animated.'},
    {speaker:'riku_teen',jp:'蛇に注意ね、夏は。',en:"Watch for snakes in summer.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'蝶の種類も多いって。',en:"Many butterfly species too.",style:'Bright.'},
    {speaker:'riku_teen',jp:'山頂に鐘があって、鳴らせるとか。',en:"A bell at the peak — you can ring it.",style:'Probe.'},
    {speaker:'sakura_teen',jp:'鶴の絵の絵馬も、奉納できるよ。',en:"You can offer crane-painted ema too.",style:'Cheerful close.'},
  ]},
  {id:'conv_05678',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss a documentary on landscapes',lines:[
    {speaker:'asuka_teacher',jp:'昨夜のドキュメンタリー、四季を通して撮影された山の頂上、美しかったですね。',en:"Last night's doc — summit footage across four seasons was beautiful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。古い聖堂の鐘の音も収録されていました。',en:"Yes. Old chapel bell sound was included.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'蛇や蝶、自然の生態、丁寧に描写していました。',en:"Snakes, butterflies — nature carefully portrayed.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'地元では、線路沿いに鶴が舞うシーンも撮れたとか。',en:"Locally, crane-flight along the tracks was reportedly captured too.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'映像の力、ありますね。',en:"Visuals have power.",style:'Reflective close.'},
  ]},
  {id:'conv_05679',cluster:'D',ambient:'street_quiet_distant',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple walks through their town in spring',lines:[
    {speaker:'hiroshi_elder',jp:'四季の中で、この時期の散歩が一番だな。',en:"Of all four seasons, walks now are best.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。線路沿いに鶴の絵が描かれた壁画、覚えてる?',en:"Yes. The crane mural along the tracks, remember?",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'山の頂上の鐘、若い頃、二人で鳴らしたな。',en:"The summit bell — we rang it together in youth.",style:'Sage.'},
    {speaker:'sachiko_grandma',jp:'近くの聖堂、結婚式を挙げた所ね。',en:"The nearby chapel — where we held the ceremony.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'庭の蝶、今年も来てくれた。',en:"Garden butterflies came again this year.",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'草むらの蛇には、毎度ヒヤッとするけど。',en:"Snakes in the grass startle me each time.",style:'Wry close.'},
  ]},
  {id:'conv_05680',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a seasonal menu',lines:[
    {speaker:'daichi_kansai',jp:'四季のメニュー、頂上に春の鐘モチーフを置こか。',en:"Four-season menu — put a spring-bell motif at the top.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'素敵です!近くの聖堂をモチーフにしたデザートも。',en:"Lovely! Chapel-motif desserts too.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'蝶を象ったクッキー、鶴のラテアートもええな。',en:"Butterfly cookies, crane latte art too.",style:'Knowing Kansai.'},
    {speaker:'aoi_barista',jp:'線路沿いの店だから、観光客にも届きますね。',en:"By the tracks — tourists too.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'蛇のオブジェは、ちょい抑えめにな。',en:"Snake decor, dial back a touch.",style:'Wry close.'},
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

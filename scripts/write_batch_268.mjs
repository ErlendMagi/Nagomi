import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_268 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['尻','舌','裸','途端','ご存じ','突っ込ん','わざと','いまいち']
const B_T = ['役人','図っ','担う','立案','当方','所管','登記','全額']
const C_T = ['重量','有害','摂取','歩行','多発','救助','連発','体感']
const D_T = ['フェイス','ストレート','クイズ','ミステリー','散策','Tシャツ','年賀状','七夕']

const data = [
  {id:'conv_05321',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends recap a clumsy date story',lines:[
    {speaker:'mei_romantic',jp:'昨日のデート、ご存じの通り、初っ端からいまいちで…。',en:"Yesterday's date — as you know, it was off from the very start.",style:'Soft confession.'},
    {speaker:'aoi_barista',jp:'あらら。何があったの?',en:"Oh dear. What happened?",style:'Sympathetic.'},
    {speaker:'mei_romantic',jp:'お店入った途端、彼が床に思い切り尻もちついて。',en:"The instant we entered the shop, he fell flat on his butt.",style:'Wincing recall.'},
    {speaker:'aoi_barista',jp:'ええっ、わざとじゃないよね?',en:"What — not on purpose, right?",style:'Surprised.'},
    {speaker:'mei_romantic',jp:'違うの。慌てて立とうとして、テーブルに突っ込んで、舌まで噛んじゃって。',en:"No. He panicked getting up, crashed into the table, even bit his tongue.",style:'Half-laugh.'},
    {speaker:'aoi_barista',jp:'うわ災難。裸の心が傷ついた感じ?',en:"Total disaster. Did it bruise his open heart?",style:'Gentle joke.'},
    {speaker:'mei_romantic',jp:'うん、後半は静かだったわ。',en:"Yeah, he was quiet the rest of the night.",style:'Soft close.'},
  ]},
  {id:'conv_05322',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens debrief a chaotic gym class',lines:[
    {speaker:'sakura_teen',jp:'今日の体育、走った途端、転んで尻めっちゃ痛い。',en:"In gym today, the second I ran I fell and my butt really hurts.",style:'Whiny teen.'},
    {speaker:'riku_teen',jp:'マジか。先生にわざとじゃないって言った?',en:"For real. Did you tell the teacher it wasn't on purpose?",style:'Concerned teen.'},
    {speaker:'sakura_teen',jp:'うん。隣の子も突っ込んできて、私の舌噛みかけたんだよ。',en:"Yeah. The kid next to me crashed in too and I almost bit my tongue.",style:'Animated.'},
    {speaker:'riku_teen',jp:'ご存じの通り、あいつ走るの下手だしな。',en:"As you know, that guy's bad at running.",style:'Dry teen humor.'},
    {speaker:'sakura_teen',jp:'家帰ったら、裸足で氷踏みたい気分だわ。',en:"At home I want to step on ice barefoot.",style:'Exhausted teen.'},
    {speaker:'riku_teen',jp:'体育の点、いまいちのまま終わりそうだな。',en:"Gym grade's gonna stay mediocre, huh.",style:'Resigned close.'},
  ]},
  {id:'conv_05323',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom calms her young son after a tumble',lines:[
    {speaker:'sho_child',jp:'ママ、公園で転んで、尻打って、舌噛んじゃった。',en:"Mom, I fell at the park, bumped my butt and bit my tongue.",style:'Whimpering child.'},
    {speaker:'yumiko_mom',jp:'あらまあ、見せて。痛かったね。',en:"Oh my, let me see. That must have hurt.",style:'Warm motherly.'},
    {speaker:'sho_child',jp:'ケンくんがわざと突っ込んで来たんだよ、絶対。',en:"Ken bumped into me on purpose, I'm sure.",style:'Indignant child.'},
    {speaker:'yumiko_mom',jp:'ご存じの通り、ケンくんもまだ加減を覚えてるところよ。',en:"As you know, Ken's still learning his strength.",style:'Patient.'},
    {speaker:'sho_child',jp:'でもさ、急に視界が裸眼で歪んだ途端、もう泣きそうだったよ。',en:"But the moment my bare vision went blurry, I almost cried.",style:'Vulnerable.'},
    {speaker:'yumiko_mom',jp:'今日はお家でゆっくりしようね。気分がいまいちだから絵本にしよ。',en:"Let's take it easy at home today. Mood's so-so, so picture books.",style:'Soothing close.'},
  ]},
  {id:'conv_05324',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats over morning tea',lines:[
    {speaker:'hiroshi_elder',jp:'いまいち腰の調子が良くなくてな。',en:"My lower back's so-so today.",style:'Soft elder grumble.'},
    {speaker:'sachiko_grandma',jp:'昨日、椅子から尻ずらした途端、痛そうだったわよ。',en:"Yesterday the moment you shifted your butt off the chair, it looked painful.",style:'Gentle observation.'},
    {speaker:'hiroshi_elder',jp:'ご存じの通り、舌もよく噛むようになった。',en:"As you know, I'm biting my tongue more often too.",style:'Self-deprecating.'},
    {speaker:'sachiko_grandma',jp:'お医者さんに、わざと無理しないでって言われたでしょ。',en:"The doctor told you not to overdo it on purpose, right.",style:'Caring.'},
    {speaker:'hiroshi_elder',jp:'うん。庭に出て裸足で土を踏むのが、何より効くんだが。',en:"Yes. Stepping on the earth barefoot in the garden helps most.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'転んで突っ込んで怪我しないようにね、見守ってるから。',en:"Just don't fall and crash into something — I'll keep watch.",style:'Tender close.'},
  ]},
  {id:'conv_05325',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student gently corrects a teen friend\'s rant',lines:[
    {speaker:'sakura_teen',jp:'先輩、今日めっちゃ理不尽だったんですよ、聞いて。',en:"Senpai, today was so unfair, listen.",style:'Frustrated teen.'},
    {speaker:'ren_uni',jp:'おう、お、座って。何があった?',en:"Hey, sit. What happened?",style:'Calm senpai.'},
    {speaker:'sakura_teen',jp:'同じクラスの子、私の悪口言った途端、目があって。',en:"A classmate badmouthed me and the moment our eyes met…",style:'Animated teen.'},
    {speaker:'ren_uni',jp:'ご存じの通り、その子、舌が滑るタイプだからな。',en:"As you know, that kid tends to let things slip.",style:'Knowing.'},
    {speaker:'sakura_teen',jp:'わざとじゃないとは思うけど、私の心、裸の状態で突っ込んできた感じで。',en:"Maybe not on purpose, but it hit my bare heart head-on.",style:'Vulnerable.'},
    {speaker:'ren_uni',jp:'いまいち納得いかない時こそ、深呼吸だよ。一緒に整理しよ。',en:"When it doesn't sit right, take a breath. Let's sort it together.",style:'Warm close.'},
  ]},

  {id:'conv_05326',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a property registration plan',lines:[
    {speaker:'hiroshi_boss',jp:'登記の件、進捗どうだ。',en:"On the registration — how's the progress?",style:'Crisp boss.'},
    {speaker:'kenji_office',jp:'当方の担当が立案を担う形で、書類を準備しています。',en:"Our side leads the planning, with documents in prep.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'役人との折衝、円滑に図ってくれ。',en:"Negotiate smoothly with the bureaucrats.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。所管の窓口、明日訪問予定です。',en:"Yes. Visiting the jurisdictional office tomorrow.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'費用は全額、今月の予算から落とせるか?',en:"Can the full cost come from this month's budget?",style:'Probing.'},
    {speaker:'kenji_office',jp:'はい、計上済みです。',en:"Yes, already booked.",style:'Brief close.'},
  ]},
  {id:'conv_05327',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep a vendor proposal',lines:[
    {speaker:'yuki_office',jp:'提案の立案、当方の名前で出してOK?',en:"For the proposal — okay to submit under our name?",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。所管役員の決裁は今朝降りました。',en:"Yes. The jurisdictional exec signed off this morning.",style:'Update.'},
    {speaker:'yuki_office',jp:'相手側の役人、登記の件にも詳しい人を引っ張れる?',en:"Can we pull in a bureaucrat on the other side familiar with registration?",style:'Strategic.'},
    {speaker:'kenji_office',jp:'試みます。連絡を図っているところです。',en:"I'll try. Reaching out now.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'費用の見積もり、全額を一度で出すか、分割か、決めとこ。',en:"Decide whether to quote the full amount upfront or split.",style:'Strategic.'},
    {speaker:'kenji_office',jp:'分割で行きます。先方が担うリスク減らせるので。',en:"Going with split — reduces the risk the other side carries.",style:'Crisp close.'},
  ]},
  {id:'conv_05328',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about administrative workflow',lines:[
    {speaker:'ren_uni',jp:'業務フロー、行政の役人との連携はどう進めますか。',en:"In the workflow, how do you proceed with the bureaucrats?",style:'Polite intern.'},
    {speaker:'yuki_office',jp:'当方からの立案を、所管課がレビューして登記まで進めます。',en:"Our planning is reviewed by the jurisdictional section through registration.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'課題解決を図る場面、どんな技術がいま使われてますか。',en:"In problem-solving moments, what tech is used now?",style:'Curious.'},
    {speaker:'yuki_office',jp:'AIアシスタント、案件処理を担うようになってきました。',en:"AI assistants have started carrying case-handling.",style:'Informative.'},
    {speaker:'ren_uni',jp:'費用は全額デジタル化で抑えられますか。',en:"Can the full cost be cut via digitalization?",style:'Probe.'},
    {speaker:'yuki_office',jp:'数年がかりですが、削減見込みがあります。',en:"Over several years, yes, savings are projected.",style:'Close.'},
  ]},
  {id:'conv_05329',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss on dealing with bureaucrats',lines:[
    {speaker:'hiroshi_elder',jp:'役人相手は、当方から先に立案を見せるのが鉄則だ。',en:"With bureaucrats, the rule is to show your planning first.",style:'Sage elder.'},
    {speaker:'hiroshi_boss',jp:'はい。所管の局長とは、定例の打ち合わせを担っております。',en:"Yes. With the jurisdictional director, I run a regular meeting.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'登記の件は、相手の顔を立てるよう図ってきたか。',en:"On the registration, have you tried to save the other side's face?",style:'Probe.'},
    {speaker:'hiroshi_boss',jp:'はい、誠実に進めています。',en:"Yes, proceeding sincerely.",style:'Brief.'},
    {speaker:'hiroshi_elder',jp:'費用の問題が出たら、全額会社負担を申し出ろ。信頼が違う。',en:"If costs come up, offer to bear the full amount. Trust differs.",style:'Stern advice.'},
    {speaker:'hiroshi_boss',jp:'胸に刻みます。',en:"I'll engrave it in my heart.",style:'Respectful close.'},
  ]},
  {id:'conv_05330',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about admin overlap',lines:[
    {speaker:'takeda_officer',jp:'本件、複数の役人が立案に関与しているケースです。',en:"In this case, multiple bureaucrats participated in the planning.",style:'Formal officer.'},
    {speaker:'ren_uni',jp:'所管がまたがると、調整は当方の役割ですか。',en:"When jurisdictions overlap, is coordination our role?",style:'Polite.'},
    {speaker:'takeda_officer',jp:'警察と自治体、両方が担っています。',en:"Both police and the municipality carry it.",style:'Factual.'},
    {speaker:'ren_uni',jp:'費用は全額、税金から賄われるんですか。',en:"Are the full costs covered by taxes?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'制度により異なります。図ってる新制度も検討中です。',en:"Depends on the system. A new system being designed is under review.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'登記関連の話、後ほど資料いただけますか。',en:"Materials on registration — could I get them later?",style:'Close.'},
  ]},

  {id:'conv_05331',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through a public-safety paper',lines:[
    {speaker:'asuka_teacher',jp:'歩行者事故が多発する交差点の研究、面白い切り口ですね。',en:"The crossings with frequent pedestrian incidents — interesting angle.",style:'Calm teacher.'},
    {speaker:'ren_uni',jp:'はい。重量物を運ぶ車両との関連が密接です。',en:"Yes. The link with heavy-load vehicles is tight.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'排ガスの有害物質、子どもの摂取量も問題になっています。',en:"Harmful exhaust substances — children's intake levels are an issue too.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'救助体制の比較も、章を割いて書く予定です。',en:"I'll devote a chapter to comparing rescue regimes.",style:'Plan.'},
    {speaker:'asuka_teacher',jp:'体感での危険度と、統計上の差異も触れると良いです。',en:"Address the gap between felt risk and statistics too.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'警察の連発する警告事例、データで裏取りします。',en:"I'll back police's repeated warnings with data.",style:'Resolved close.'},
  ]},
  {id:'conv_05332',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager discuss workplace safety reporting',lines:[
    {speaker:'hiroshi_boss',jp:'現場、ヒヤリハットが多発してるな。',en:"At the site, near-misses are frequent.",style:'Concerned boss.'},
    {speaker:'kenji_office',jp:'重量物の運搬中の事故、ここ三ヶ月で連発しました。',en:"Heavy-load accidents recurred in the past three months.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'有害な空気の摂取も気がかりだ。換気の見直しは?',en:"Inhaling harmful air is a worry too. Ventilation review?",style:'Probe.'},
    {speaker:'kenji_office',jp:'計画中です。歩行ルートも再設計し、安全性を上げます。',en:"In progress. We'll redesign walking routes and raise safety.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'救助訓練の頻度、上げよう。体感で覚えるのが大事だ。',en:"Up the rescue-drill frequency. Body learning matters.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Brief close.'},
  ]},
  {id:'conv_05333',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about road incidents',lines:[
    {speaker:'takeda_officer',jp:'本市の交差点、最近事故が多発しています。',en:"At city intersections, accidents are frequent.",style:'Calm officer.'},
    {speaker:'ren_uni',jp:'歩行者と重量車両の接触が中心ですか。',en:"Mainly pedestrian-heavy-vehicle contacts?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。有害排気の摂取被害も懸念です。',en:"Yes. Harmful-exhaust intake harm is also a concern.",style:'Factual.'},
    {speaker:'ren_uni',jp:'救助は、消防と連発で出動する形ですか。',en:"For rescue, do you deploy with fire dept repeatedly?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'おっしゃる通り。体感では、夕方の発生が一番多いです。',en:"Exactly. Anecdotally, evenings see the most incidents.",style:'Informative.'},
    {speaker:'ren_uni',jp:'記事に反映させていただきます。',en:"I'll reflect that in the article.",style:'Close.'},
  ]},
  {id:'conv_05334',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired safety inspector',lines:[
    {speaker:'ren_uni',jp:'長年、現場の安全を見てこられたんですよね。',en:"You've watched site safety for many years, haven't you.",style:'Polite student.'},
    {speaker:'hiroshi_elder',jp:'ああ。重量物の取り扱いで、事故は本当に多発する。',en:"Yes. With heavy items, accidents really pile up.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'有害な粉塵の摂取、現場の課題でしたか。',en:"Was inhaling harmful dust a worksite issue?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'うん。歩行スペースを分けることで、ずいぶん減ったよ。',en:"Yes. Separating walking spaces dropped it a lot.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'救助訓練を連発したことも、効果はありましたか。',en:"Did frequent rescue drills help too?",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'体感で覚えた動きが、実際の場で活きるんだ。',en:"Body-learned moves come alive in real situations.",style:'Wise close.'},
  ]},
  {id:'conv_05335',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains nutrition and exercise basics to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、ビタミンの摂取と、軽い歩行運動が要なんですよ。',en:"Sakura, vitamin intake and light walking are the keys.",style:'Friendly doctor.'},
    {speaker:'sakura_teen',jp:'最近、急に動くと頭痛が連発するんです。',en:"Lately, sudden movement triggers repeated headaches.",style:'Concerned teen.'},
    {speaker:'saito_doctor',jp:'重量物を持ち上げないこと、有害な栄養補助剤を避けることも大事です。',en:"Don't lift heavy items; avoid harmful supplements too.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'救助講習も学校でやってます。体感を覚えるためですよね。',en:"We do rescue training at school too, to learn the feel.",style:'Eager.'},
    {speaker:'saito_doctor',jp:'いいことです。ちょっとしたコツで多発する不調、減らせます。',en:"Wonderful. With small tricks, recurring discomfort drops.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'実践してみます。ありがとうございました!',en:"I'll put it in practice. Thank you!",style:'Bright close.'},
  ]},

  {id:'conv_05336',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a summer festival outing',lines:[
    {speaker:'sakura_teen',jp:'七夕祭り、新しいTシャツ着てこ。',en:"For the Tanabata festival, let's wear new T-shirts.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。屋台のクイズイベント、絶対参加する。',en:"Sure. The festival's quiz event — I'm definitely joining.",style:'Casual teen.'},
    {speaker:'sakura_teen',jp:'今年はミステリー要素ある肝試しもあるって。',en:"This year there's a mystery-themed dare event too.",style:'Animated.'},
    {speaker:'riku_teen',jp:'マジか。フェイスペイントもしてもらおうぜ。',en:"For real. Let's get face paint too.",style:'Hyped.'},
    {speaker:'sakura_teen',jp:'帰り、川辺の散策コースもいいかも。ストレートで歩けば二十分。',en:"On the way back the riverside walk might be nice. Straight, twenty minutes.",style:'Practical plan.'},
    {speaker:'riku_teen',jp:'親に年賀状の返事まだ書いてないって叱られてるから、早めに帰る。',en:"My parents are scolding me about not replying to New Year's cards, so home early.",style:'Casual close.'},
  ]},
  {id:'conv_05337',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends compare summer plans',lines:[
    {speaker:'aoi_barista',jp:'七夕の夜、お店でストレートに歌うイベントやる予定。',en:"For Tanabata night, I'm hosting a straight-up singing event at the cafe.",style:'Bright barista.'},
    {speaker:'mei_romantic',jp:'素敵!記念のTシャツとフェイスシールも用意したら盛り上がるよ。',en:"Lovely! With commemorative T-shirts and face stickers, it'll really pop.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'クイズコーナーも入れたい。ちょっとしたミステリー仕立てで。',en:"I want a quiz corner too — a little mystery-style.",style:'Engaged.'},
    {speaker:'mei_romantic',jp:'いいね。終わったら街を散策しよ。',en:"Nice. Afterward let's stroll the neighborhood.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'今年の年賀状、お客さんにも配るつもり。',en:"This year's New Year's cards — I plan to give some to customers too.",style:'Cheerful plan.'},
    {speaker:'mei_romantic',jp:'手書き?気合い入ってるね。',en:"Handwritten? You're really committed.",style:'Close.'},
  ]},
  {id:'conv_05338',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend plan a fan event',lines:[
    {speaker:'sakura_teen',jp:'先輩、文化祭でミステリー脱出ゲーム、企画してます。',en:"Senpai, I'm planning a mystery escape game for the school fest.",style:'Eager.'},
    {speaker:'ren_uni',jp:'いいね。Tシャツでチーム分けする?',en:"Nice. Splitting teams by T-shirt color?",style:'Practical.'},
    {speaker:'sakura_teen',jp:'はい。フェイスマスクで顔半分隠して、雰囲気作りもしたい。',en:"Yes. Face masks half-hiding faces, for atmosphere.",style:'Plan.'},
    {speaker:'ren_uni',jp:'クイズで進行管理すれば、ストレートに流れる。',en:"Run quizzes to manage pacing — it'll flow straight.",style:'Senpai tip.'},
    {speaker:'sakura_teen',jp:'帰りに、近くの公園散策もコースに入れます。',en:"On the way back, I'll add a nearby-park stroll.",style:'Plan.'},
    {speaker:'ren_uni',jp:'七夕とか年賀状とか、季節のモチーフ入れると味出るよ。',en:"Adding seasonal motifs like Tanabata or New Year cards adds flavor.",style:'Helpful close.'},
  ]},
  {id:'conv_05339',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a seasonal outing',lines:[
    {speaker:'yumiko_mom',jp:'七夕、子供と近所の神社で願い事書こうか。',en:"For Tanabata, shall we go write wishes at the local shrine with the kids?",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'いいね。お揃いのTシャツで行こうか。',en:"Nice. Let's go in matching T-shirts.",style:'Easy dad.'},
    {speaker:'yumiko_mom',jp:'帰りに公園散策、子供たちはクイズ大会したがるよ。',en:"On the way back, park stroll — the kids want a quiz contest.",style:'Cheerful.'},
    {speaker:'ryosuke_dad',jp:'いいね。ミステリー仕立てで俺が司会するわ。',en:"Sure. I'll MC in mystery style.",style:'Playful.'},
    {speaker:'yumiko_mom',jp:'ストレートに楽しみで、家族のいい思い出になりそう。',en:"Straight-up looking forward to it — should make great family memories.",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'今年は年賀状で写真使えそうだな。',en:"Looks like we'll have photos to use for this year's New Year cards.",style:'Cheerful close.'},
  ]},
  {id:'conv_05340',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista swap seasonal menu ideas',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、七夕の夜は、特別メニューやるん?',en:"Aoi-san, doing a special menu for Tanabata?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい、ストレートに季節感を出したいので、定番に絞ります。',en:"Yes, want straightforward seasonality, so sticking to classics.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'うちも限定Tシャツ作って、配るで。',en:"Our side will make limited T-shirts to give out.",style:'Casual Kansai.'},
    {speaker:'aoi_barista',jp:'素敵。お客さん同士でフェイスペイントしあうのも流行ってます。',en:"Lovely. Customers face-painting each other is also trending.",style:'Informative.'},
    {speaker:'daichi_kansai',jp:'店の壁にミステリー風のクイズ貼って、答え当てた人に景品配ろかな。',en:"Maybe stick mystery-style quizzes on the wall and reward correct guesses.",style:'Cheerful idea.'},
    {speaker:'aoi_barista',jp:'いいですね!帰り、近所の散策コースも案内に入れます。',en:"Nice! I'll add the local stroll route to the guide too.",style:'Warm close.'},
    {speaker:'daichi_kansai',jp:'年賀状にも、今年のイベント写真載せれそうやな。',en:"We could put this year's event photos on the New Year cards too.",style:'Close.'},
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

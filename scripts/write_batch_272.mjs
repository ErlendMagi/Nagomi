import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_272 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['思いつき','はなれ','溢れる','心情','各々','持ち込ん','見受け','ノン']
const B_T = ['抽選','移籍','攻略','収納','主観','賛同','真摯','表彰']
const C_T = ['干渉','内面','摩擦','葛藤','量的','見地','末期','糖尿']
const D_T = ['ブレーキ','弦','クリニック','パブ','食卓','ズボン','緑色','達人']

const data = [
  {id:'conv_05401',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends share weekend impressions',lines:[
    {speaker:'aoi_barista',jp:'昨日の集まり、各々が思いつきで料理持ち込んできて、面白かったよ。',en:"Yesterday's gathering — everyone brought dishes on a whim, it was fun.",style:'Bright recap.'},
    {speaker:'mei_romantic',jp:'いいね。場が魅力溢れる雰囲気だったでしょ?',en:"Nice. The room must have been brimming with charm, right?",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。私の心情としては、もっと長く話したかった。',en:"Yes. My feeling was I wanted to talk longer.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'うちのご近所さんも、見受けたら一人で残ってたって。',en:"My neighbor said she saw someone left behind alone.",style:'Aside.'},
    {speaker:'aoi_barista',jp:'席をはなれるタイミング、難しいよね。',en:"Knowing when to leave the seat is tricky.",style:'Knowing.'},
    {speaker:'mei_romantic',jp:'今度はノンアル飲み放題で、もっと気楽に。',en:"Next time, non-alcoholic all-you-can-drink for a chiller vibe.",style:'Plan close.'},
  ]},
  {id:'conv_05402',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens debrief a school event',lines:[
    {speaker:'sakura_teen',jp:'文化祭、各々の出し物がすごく溢れる元気で、見受けた感想は最高だった。',en:"At the school fest, every booth brimmed with energy — my overall take was the best.",style:'Animated teen.'},
    {speaker:'riku_teen',jp:'私の心情、サクラの劇に思いつきで参加した瞬間、感動だった。',en:"Honestly, the moment I jumped into your play on a whim, I was moved.",style:'Casual teen.'},
    {speaker:'sakura_teen',jp:'急に持ち込ん来た小道具、ハマってたよね。',en:"The prop you suddenly brought in really fit.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'席をはなれる時、皆で記念写真撮ったよな。',en:"As we left our seats, we all took a group photo.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'打ち上げはノンアル飲み放題で、めっちゃ盛り上がった。',en:"The afterparty was non-alcoholic open bar — super lively.",style:'Excited close.'},
  ]},
  {id:'conv_05403',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom hears about her young son\'s day',lines:[
    {speaker:'sho_child',jp:'ママ、今日のクラス、皆思いつきで絵を描いて、楽しかった!',en:"Mom, today my class drew on whims and it was so fun!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'ふふ、各々の色が溢れる教室だったのね。',en:"Hehe, a classroom brimming with each person's color.",style:'Warm motherly.'},
    {speaker:'sho_child',jp:'絵の具、持ち込ん友達からもらって描いたよ。',en:"I drew using paints a friend brought in.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お友達の優しい心情、見受けるね。',en:"You see the kind feelings of your friends.",style:'Tender.'},
    {speaker:'sho_child',jp:'帰り、ノンアルのジュースで乾杯したよ!',en:"On the way back, we toasted with non-alcoholic juice!",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'おしゃべりからはなれず、夢中だったのね。',en:"You couldn't pull yourself away from the chatter, huh.",style:'Affectionate close.'},
  ]},
  {id:'conv_05404',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple recaps a club lunch',lines:[
    {speaker:'hiroshi_elder',jp:'昼の集まり、各々の話が溢れる感じで、賑やかだったね。',en:"The lunch gathering — each person's stories spilled over, lively.",style:'Soft elder.'},
    {speaker:'sachiko_grandma',jp:'ええ。田中夫人が思いつきで歌を持ち込んでくださって。',en:"Yes. Mrs. Tanaka brought in a song on a whim.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'その心情、お礼の手紙にしっかり書こう。',en:"That sentiment — let's properly write it in a thank-you letter.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'席をはなれる前に、皆でハグもしたわね。',en:"Before we left our seats, we all hugged.",style:'Affectionate.'},
    {speaker:'hiroshi_elder',jp:'飲み物はノンアルが中心で、健康的でよかった。',en:"Drinks were mostly non-alcoholic — healthy and nice.",style:'Approving.'},
    {speaker:'sachiko_grandma',jp:'また来月見受けに行きましょうね。',en:"Let's go again next month to keep an eye on them.",style:'Warm close.'},
  ]},
  {id:'conv_05405',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student listens to a teen friend talk about her group',lines:[
    {speaker:'sakura_teen',jp:'先輩、最近のグループ、思いつきで何でも持ち込ん人ばっかりで…。',en:"Senpai, our group lately is full of people who bring in random ideas on a whim.",style:'Mild teen complaint.'},
    {speaker:'ren_uni',jp:'各々の個性が溢れるのは悪くないよ。',en:"Each person's personality overflowing isn't bad.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'でも私の心情、ついていけなくなってる時もあって。',en:"But my feelings can't always keep up.",style:'Honest.'},
    {speaker:'ren_uni',jp:'はなれる時間も、見受けるところを取ろう。',en:"Carve out time apart, and look at what you observe.",style:'Gentle.'},
    {speaker:'sakura_teen',jp:'ノンアルカフェで一息つくのが、最近の癒しです。',en:"A non-alcoholic cafe break is my recent comfort.",style:'Soft.'},
    {speaker:'ren_uni',jp:'いいね。それを大切に。',en:"Nice. Cherish that.",style:'Warm close.'},
  ]},

  {id:'conv_05406',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews HR and operational news',lines:[
    {speaker:'hiroshi_boss',jp:'今期の表彰候補、もう絞り込んだか?',en:"Have you shortlisted this term's award candidates?",style:'Crisp boss.'},
    {speaker:'kenji_office',jp:'はい。営業の移籍組も含めて、真摯に評価しました。',en:"Yes. Including transfers in sales, evaluated sincerely.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'抽選で決めるんじゃないんだから、主観に流されるな。',en:"Don't sway to subjectivity since it's not a lottery.",style:'Direction.'},
    {speaker:'kenji_office',jp:'もちろんです。攻略チームの貢献も賛同を得ています。',en:"Of course. The strike-team's contributions also have endorsement.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'資料は収納フォルダに揃えておけ。',en:"Keep materials together in the storage folder.",style:'Reminder.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05407',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep an end-of-year ceremony',lines:[
    {speaker:'yuki_office',jp:'表彰式、抽選イベントも盛り込もう。',en:"For the ceremony, let's include a lottery event too.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'移籍組のスピーチも、真摯な内容で組み込みます。',en:"I'll fold in heartfelt speeches from transfer staff.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'攻略レビューは、主観を排した形で資料化を。',en:"For the strike-tactic reviews, document them objectively.",style:'Strategic.'},
    {speaker:'kenji_office',jp:'はい。賛同が得られた案だけ採用です。',en:"Yes. Only endorsed proposals are adopted.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'機材は会場の収納に事前搬入しておこう。',en:"Pre-load equipment into the venue's storage.",style:'Direction.'},
    {speaker:'kenji_office',jp:'了解です。',en:"Got it.",style:'Brief close.'},
  ]},
  {id:'conv_05408',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about evaluation systems',lines:[
    {speaker:'ren_uni',jp:'貴社の評価制度、主観の余地はどう抑えていますか。',en:"In your evaluation system, how is the room for subjectivity contained?",style:'Polite intern.'},
    {speaker:'yuki_office',jp:'指標を複数組み合わせ、真摯に運用しています。',en:"We combine multiple metrics and run it sincerely.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'移籍者の評価、最初の年は難しくないですか。',en:"Evaluating transfers — isn't the first year tricky?",style:'Probe.'},
    {speaker:'yuki_office',jp:'攻略目標を共有することで、賛同を得て進めます。',en:"Sharing strike-objectives helps build endorsement.",style:'Informative.'},
    {speaker:'ren_uni',jp:'表彰式の抽選コーナー、参加賞も?',en:"At the ceremony's lottery corner — participation prizes too?",style:'Curious.'},
    {speaker:'yuki_office',jp:'はい。記念品の収納にも気を配っています。',en:"Yes. Storage of mementos is carefully managed too.",style:'Close.'},
  ]},
  {id:'conv_05409',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss on leadership',lines:[
    {speaker:'hiroshi_elder',jp:'部下を真摯に評価しているか?',en:"Are you evaluating your reports sincerely?",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。主観を排し、表彰候補は社内で賛同を取って決めています。',en:"Yes. Excluding subjectivity, award candidates are decided with internal endorsement.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'抽選的な「運」も、若手には大事だ。',en:"Lottery-style luck matters for the young too.",style:'Insight.'},
    {speaker:'hiroshi_boss',jp:'承知しています。移籍した社員へのケアも怠っていません。',en:"Understood. We don't neglect care for transferred employees.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'攻略一辺倒の経営は危うい。ゆとりを収納する余裕も持て。',en:"All-strike management is risky. Keep room to stow some slack.",style:'Wise advice.'},
    {speaker:'hiroshi_boss',jp:'胸に刻みます。',en:"Engraved in my heart.",style:'Close.'},
  ]},
  {id:'conv_05410',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about award systems',lines:[
    {speaker:'takeda_officer',jp:'本年度の表彰、主観を排した審査で選ばれました。',en:"This year's recognitions were chosen via subjectivity-free reviews.",style:'Calm.'},
    {speaker:'ren_uni',jp:'抽選的な要素は、含めていないんですよね。',en:"No lottery-style elements included, right?",style:'Polite probe.'},
    {speaker:'takeda_officer',jp:'はい、真摯な実績評価だけです。',en:"Right, only sincere performance evaluation.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'移籍された方への配慮、ありますか。',en:"Any consideration for those who transferred?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'攻略目標の引き継ぎ、賛同を得て丁寧に行います。',en:"Strike-target handovers, done carefully with endorsement.",style:'Informative.'},
    {speaker:'ren_uni',jp:'最後に、記念品の収納場所はどちらですか。',en:"Lastly, where are mementos stored?",style:'Close.'},
    {speaker:'takeda_officer',jp:'本部の資料室です。',en:"In the headquarters' archive room.",style:'Brief close.'},
  ]},

  {id:'conv_05411',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through a public-health paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、糖尿の早期介入が中心ですね。',en:"Your paper centers on early intervention for diabetes.",style:'Calm teacher.'},
    {speaker:'ren_uni',jp:'はい。末期の悪化を避ける見地から、社会的干渉も論じます。',en:"Yes. From the standpoint of avoiding late-stage worsening, social interference too.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'内面の葛藤、患者の心情まで踏み込めば、説得力が増します。',en:"Address inner conflicts and patient sentiment — persuasiveness grows.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'医療現場の摩擦、量的データで補強します。',en:"Frictions in clinical settings — backed by quantitative data.",style:'Plan.'},
    {speaker:'asuka_teacher',jp:'参考文献の年代も、見地ごとに整理を。',en:"Reference years organized per perspective too.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05412',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager discuss a corporate-wellness article',lines:[
    {speaker:'hiroshi_boss',jp:'社員の糖尿予防、末期化を防ぐ取り組みを進めるべきだな。',en:"Diabetes prevention among staff — we should drive efforts to avert progression.",style:'Decisive boss.'},
    {speaker:'kenji_office',jp:'はい。内面の葛藤、メンタル支援との連携が要です。',en:"Yes. Inner conflicts and mental support coordination are key.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'部署間の摩擦、量的に見える化したい。',en:"I want inter-section friction quantitatively visible.",style:'Strategic.'},
    {speaker:'kenji_office',jp:'外部干渉は最小限に、社内見地で進めます。',en:"Minimal external interference; proceed from in-house standpoint.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'来月の会議で、議論しよう。',en:"We'll debate at next month's meeting.",style:'Close.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Brief close.'},
  ]},
  {id:'conv_05413',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about community-health initiatives',lines:[
    {speaker:'takeda_officer',jp:'地域の糖尿予防施策、住民との摩擦も多いです。',en:"Diabetes-prevention measures locally also see frictions with residents.",style:'Calm.'},
    {speaker:'ren_uni',jp:'内面に葛藤を抱える方も、相談に来ますか。',en:"Do people carrying inner conflicts also come for consultation?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。量的に見ると、相談件数は増えています。',en:"Yes. Quantitatively, consultation counts are rising.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'外部の干渉、押し付けにならないようにする見地、大事ですよね。',en:"The view of avoiding external interference as imposition matters, right?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'末期になる前に手を打つ。協力を仰ぐ姿勢です。',en:"Act before the late stage. Our posture is to ask for cooperation.",style:'Informative.'},
    {speaker:'ren_uni',jp:'ありがとうございます。',en:"Thank you.",style:'Close.'},
  ]},
  {id:'conv_05414',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired public-health nurse',lines:[
    {speaker:'ren_uni',jp:'長年、糖尿予防の現場に携わってこられたんですよね。',en:"You've long served on the diabetes-prevention front.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'ああ。末期化を防ぐ見地から、何度も家庭訪問したよ。',en:"Yes. To prevent progression, I did many home visits.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'患者さんの内面、葛藤を抱える方も多かったですか。',en:"Patients carrying inner conflicts — were there many?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'多かったね。地域社会との摩擦も度々あった。',en:"Many. Friction with the local community also came up often.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'量的なデータ収集、当時も行われていましたか。',en:"Was quantitative data collection done back then too?",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'始まったばかりだった。外部の干渉は最小限にして進めたよ。',en:"It was just starting. We kept external interference minimal.",style:'Wise close.'},
  ]},
  {id:'conv_05415',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains chronic disease management to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、糖尿病の予防、若いうちから大事ですよ。',en:"Sakura, preventing diabetes matters from a young age.",style:'Friendly.'},
    {speaker:'sakura_teen',jp:'末期になるまで気づきにくいって本当ですか?',en:"Is it really hard to notice until the late stage?",style:'Curious teen.'},
    {speaker:'saito_doctor',jp:'はい。本人の内面の葛藤と、生活摩擦も影響します。',en:"Yes. The patient's inner conflict and lifestyle friction also affect.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'量的に運動を増やす見地、何分くらいですか。',en:"From a quantitative-exercise standpoint, how many minutes?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'毎日三十分を目安に。外部の干渉に流されず、自分のペースで。',en:"Aim for thirty minutes daily. Don't be swayed by outside interference; go your own pace.",style:'Informative.'},
    {speaker:'sakura_teen',jp:'勉強になりました!',en:"Very instructive!",style:'Bright close.'},
  ]},

  {id:'conv_05416',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens discuss a fashion-and-music trip plan',lines:[
    {speaker:'sakura_teen',jp:'今週末、緑色のジーンズ買いに行かない?ズボン丈直してくれる店知ってる。',en:"This weekend, want to buy green jeans? I know a place that hems trousers.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。あと帰り、英国パブ風カフェ寄ろうぜ。',en:"Sure. On the way back, let's stop at a British-pub-style cafe.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'夕飯は弦楽器ライブの食卓があるレストランどう?',en:"For dinner, how about a restaurant with a string-instrument dinner show?",style:'Animated.'},
    {speaker:'riku_teen',jp:'弦楽器の達人が来るって聞いた。ブレーキかかる前に予約しよう。',en:"Heard a string virtuoso is performing. Book before brakes get applied.",style:'Knowing.'},
    {speaker:'sakura_teen',jp:'帰り道、クリニックに寄って花粉症の薬もらう。',en:"On the way back, I'll stop at the clinic for hayfever meds.",style:'Practical.'},
    {speaker:'riku_teen',jp:'おう、付き合うわ。',en:"Sure, I'll go with you.",style:'Warm close.'},
  ]},
  {id:'conv_05417',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends plan a leisurely evening',lines:[
    {speaker:'aoi_barista',jp:'今夜、緑色の壁のパブで弦楽器ライブやるんだって。',en:"Tonight there's a string-instrument live at the green-walled pub.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'素敵!夕方の食卓もそこで済ませる?',en:"Lovely! Dinner there too?",style:'Excited.'},
    {speaker:'aoi_barista',jp:'うん。クリニックに寄ってから合流するね。',en:"Yes. I'll join after a clinic stop.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'移動中、車のブレーキ気をつけて。',en:"En route, careful with the car brakes.",style:'Caring.'},
    {speaker:'aoi_barista',jp:'うん。ズボン破れたから、家で着替えて行く。',en:"Yes. My trousers ripped, so I'll change at home first.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'演奏の達人が来るらしいよ、楽しみ。',en:"A virtuoso is supposed to come — excited.",style:'Warm close.'},
  ]},
  {id:'conv_05418',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend plan a music outing',lines:[
    {speaker:'sakura_teen',jp:'先輩、弦楽器の達人ライブ、見に行きたいんです。',en:"Senpai, I want to see the virtuoso string concert.",style:'Eager.'},
    {speaker:'ren_uni',jp:'いいね。会場、緑色の屋根のパブだろ?',en:"Nice. The venue — green-roof pub, right?",style:'Helpful.'},
    {speaker:'sakura_teen',jp:'はい!ズボンは黒で、ジャケット羽織って行きます。',en:"Yes! Black trousers, with a jacket on top.",style:'Plan.'},
    {speaker:'ren_uni',jp:'食卓でディナーも頼める。クリニック寄ってからな。',en:"You can have dinner there. After the clinic.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'最後の坂、自転車のブレーキしっかり利かせます。',en:"Last hill, I'll really squeeze the bike brakes.",style:'Cautious.'},
    {speaker:'ren_uni',jp:'安全第一で。',en:"Safety first.",style:'Warm close.'},
  ]},
  {id:'conv_05419',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a date night',lines:[
    {speaker:'ryosuke_dad',jp:'金曜の夜、緑色のインテリアのパブ、行かない?',en:"Friday night, want to try the green-decor pub?",style:'Easy husband.'},
    {speaker:'yumiko_mom',jp:'いいね。弦楽器の生演奏もあるんだって?',en:"Nice. Live string music too, right?",style:'Excited.'},
    {speaker:'ryosuke_dad',jp:'うん。食卓のディナー、コースもいいらしいよ。',en:"Yes. Their course dinner is highly rated.",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'退社前にクリニックの予約、入れておくね。',en:"Before leaving work I'll book the clinic.",style:'Practical.'},
    {speaker:'ryosuke_dad',jp:'帰りの車、ブレーキ点検したばかりだから安心だ。',en:"Coming-home car — just had brakes serviced, so we're safe.",style:'Reassuring.'},
    {speaker:'yumiko_mom',jp:'ズボンの裾、ちょっと直してから行こうかな。',en:"I'll touch up my trouser hem before going.",style:'Soft.'},
    {speaker:'ryosuke_dad',jp:'達人の演奏、楽しみだ。',en:"Looking forward to the virtuoso.",style:'Warm close.'},
  ]},
  {id:'conv_05420',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista swap venue tips',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、緑色の看板のパブ、行ったことある?',en:"Aoi-san, ever been to the green-sign pub?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい、弦楽器ライブが定評で、食卓も充実してます。',en:"Yes — strong rep for string music, with a full dinner menu.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'達人の店主、たまにクリニック通いで店休むらしいで。',en:"The master owner sometimes closes shop for clinic visits.",style:'Aside.'},
    {speaker:'aoi_barista',jp:'なるほど。あとは、ズボンの黒ドレスコードがあるとか聞きました。',en:"I see. I heard there's also a black-trouser dress code.",style:'Informative.'},
    {speaker:'daichi_kansai',jp:'真摯な雰囲気の店や。車のブレーキ点検してから行きたいね。',en:"Earnest atmosphere. Want to check car brakes before heading there.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'今度ご一緒しませんか。',en:"Want to go together sometime?",style:'Warm close.'},
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

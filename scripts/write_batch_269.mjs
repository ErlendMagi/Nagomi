import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_269 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['依然として','不自然','不在','気付か','思い出さ','よっぽど','抜群','さき']
const B_T = ['出願','支払っ','割り当て','閣議','即座','創立','書記','税理士']
const C_T = ['返還','減税','高騰','密度','共生','放射線','配偶','重複']
const D_T = ['七月','土日','新築','ハイテク','オープニング','芸能人','飛び込ん','渡る']

const data = [
  {id:'conv_05341',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends puzzle over a friend\'s odd behavior',lines:[
    {speaker:'mei_romantic',jp:'さき、ユイから返事来た?昨日のグループメッセに依然として既読つかないの。',en:"Earlier, any reply from Yui? She still hasn't read yesterday's group message.",style:'Mild concern.'},
    {speaker:'aoi_barista',jp:'うちにも不在通知だけ。よっぽど忙しいのかな、心配。',en:"For me too, just absent notices. Maybe she's really busy.",style:'Worried barista.'},
    {speaker:'mei_romantic',jp:'いつもなら抜群のレス早さなのに、最近不自然だよね。',en:"Usually her replies are lightning fast, but lately it's unnatural.",style:'Soft observation.'},
    {speaker:'aoi_barista',jp:'先週会った時の様子、思い出さない?何か違和感あった気がする。',en:"Don't you recall how she seemed last week? Something felt off.",style:'Thoughtful probe.'},
    {speaker:'mei_romantic',jp:'うん、こっちが何度声かけても気付かない様子だった。',en:"Yeah, no matter how often I called out, she didn't seem to notice.",style:'Concerned.'},
    {speaker:'aoi_barista',jp:'直接、家に行ってみる?',en:"Should we try going to her place directly?",style:'Decisive close.'},
  ]},
  {id:'conv_05342',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens worry about a classmate gone quiet',lines:[
    {speaker:'sakura_teen',jp:'さきから言おうと思ってたんだけど、最近ナナちゃん、依然として元気ないよね。',en:"I've meant to say this earlier — Nana's still not herself lately.",style:'Concerned teen.'},
    {speaker:'riku_teen',jp:'マジか。授業中も不在感あって、よっぽど辛そうだった。',en:"For real. In class too, she felt absent — looked really rough.",style:'Worried teen.'},
    {speaker:'sakura_teen',jp:'笑い方も不自然で、誰も気付かないふりしてる感じ。',en:"Even her laugh felt off, like everyone's pretending not to notice.",style:'Soft.'},
    {speaker:'riku_teen',jp:'去年は抜群に明るかったの、思い出さない?',en:"Don't you recall how stand-out cheerful she was last year?",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'うん。明日、私からそっと話しかけてみる。',en:"Yeah. Tomorrow I'll quietly reach out.",style:'Resolved.'},
    {speaker:'riku_teen',jp:'頑張れ。何かあったら俺にも教えて。',en:"Good luck. Tell me if anything comes up.",style:'Warm close.'},
  ]},
  {id:'conv_05343',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom listens to her young son\'s worry about a friend',lines:[
    {speaker:'sho_child',jp:'ママ、ケンくんがさき変だったよ。',en:"Mom, Ken was acting weird earlier.",style:'Worried child.'},
    {speaker:'yumiko_mom',jp:'どんな風に変だったの?',en:"How was he weird?",style:'Gentle probe.'},
    {speaker:'sho_child',jp:'笑い方が不自然で、声かけても気付かないんだよ。',en:"His laugh was off, and when I called he didn't notice.",style:'Concerned.'},
    {speaker:'yumiko_mom',jp:'よっぽど心配なことがあるのかもね。お母さんも依然として彼の様子、気になってたわ。',en:"He may have something on his mind. I've been concerned about him too.",style:'Patient.'},
    {speaker:'sho_child',jp:'去年抜群に元気だった頃を思い出さない、っていうのが寂しいよ。',en:"Not recalling how energetic he was last year — that's sad.",style:'Soft.'},
    {speaker:'yumiko_mom',jp:'明日、お母さんも先生に相談してみるね。',en:"Tomorrow Mom will talk to the teacher too.",style:'Warm close.'},
  ]},
  {id:'conv_05344',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple talks about a friend who\'s been distant',lines:[
    {speaker:'hiroshi_elder',jp:'田中夫人、さき電話したが、不在の返事だった。',en:"Mrs. Tanaka — I called earlier, got 'not in'.",style:'Soft elder.'},
    {speaker:'sachiko_grandma',jp:'依然としてお留守よね。よっぽど忙しいのか心配。',en:"Still out, huh. Hope she's not overwhelmed.",style:'Concerned.'},
    {speaker:'hiroshi_elder',jp:'年賀状の文面も不自然に短かった。思い出さないか?',en:"Her New Year card was unnaturally brief — don't you recall?",style:'Thoughtful.'},
    {speaker:'sachiko_grandma',jp:'ええ、気付かないふりしてたけど、私も引っかかってたわ。',en:"Yes, I pretended not to notice, but it nagged at me too.",style:'Honest.'},
    {speaker:'hiroshi_elder',jp:'抜群に達筆だった頃の手紙を、また見たいもんだな。',en:"I'd love to see another of her once-superb handwritten letters.",style:'Nostalgic.'},
    {speaker:'sachiko_grandma',jp:'近いうちに、こちらから訪ねましょう。',en:"Let's visit her ourselves soon.",style:'Decisive close.'},
  ]},
  {id:'conv_05345',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student helps a teen friend reflect on a falling-out',lines:[
    {speaker:'sakura_teen',jp:'先輩、さきの話、忘れられなくて。',en:"Senpai, I can't shake the conversation from earlier.",style:'Quiet teen.'},
    {speaker:'ren_uni',jp:'依然として、その子と話す気になれない感じ?',en:"Still not in the mood to talk to her?",style:'Calm mentor.'},
    {speaker:'sakura_teen',jp:'うん。あの時の言い方、不自然で、私には気付かないふりだったような。',en:"Yeah. How she spoke was off, like she pretended not to see me.",style:'Hurt.'},
    {speaker:'ren_uni',jp:'よっぽど何か事情があるのかも。彼女、抜群に賢いから、ただの誤解じゃない。',en:"Maybe she had a reason. She's exceptionally sharp — not just misunderstanding.",style:'Thoughtful.'},
    {speaker:'sakura_teen',jp:'昔の楽しい時間、思い出さないでいるのが辛いです。',en:"It hurts not to recall the fun times.",style:'Vulnerable.'},
    {speaker:'ren_uni',jp:'急がなくていい、自分の不在を取り戻すように、丁寧に。',en:"Don't rush — restore your own space, gently.",style:'Wise close.'},
  ]},

  {id:'conv_05346',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a fiscal-year reporting plan',lines:[
    {speaker:'hiroshi_boss',jp:'今月の閣議決定、内容把握しているか。',en:"This month's cabinet decision — do you have a handle on it?",style:'Crisp boss.'},
    {speaker:'kenji_office',jp:'はい、即座に書記を通じて要点を整理しました。',en:"Yes, I had the secretary summarize key points immediately.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'関連の特許出願、税理士との連携は?',en:"Related patent filings — coordination with the tax accountant?",style:'Probing.'},
    {speaker:'kenji_office',jp:'割り当てに沿って、来週中に支払っ予定です。',en:"Per allocation, payment within next week.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'創立記念のイベント費用も、その流れで処理しよう。',en:"The founding-day event costs will follow that flow too.",style:'Direction.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Brief close.'},
  ]},
  {id:'conv_05347',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep year-end paperwork',lines:[
    {speaker:'yuki_office',jp:'年末の経費、税理士と即座にすり合わせよう。',en:"Year-end expenses — sync with the tax accountant right away.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。割り当ての書類、書記の方が整えてくれます。',en:"Yes. The secretary will assemble the allocation papers.",style:'Coordination.'},
    {speaker:'yuki_office',jp:'創立記念パーティの費用、別途で支払っ済み?',en:"Founding-anniversary party costs — already paid separately?",style:'Check.'},
    {speaker:'kenji_office',jp:'はい、先月決済しました。',en:"Yes, settled last month.",style:'Update.'},
    {speaker:'yuki_office',jp:'閣議決定の影響、来期の出願計画にも入れとこう。',en:"Cabinet decision impact — fold it into next term's filing plan.",style:'Strategic.'},
    {speaker:'kenji_office',jp:'資料、今夜送ります。',en:"I'll send materials tonight.",style:'Brief close.'},
  ]},
  {id:'conv_05348',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about corporate governance',lines:[
    {speaker:'ren_uni',jp:'貴社の創立から、ガバナンスはどのように変わってきましたか。',en:"How has governance changed since your founding?",style:'Polite intern.'},
    {speaker:'yuki_office',jp:'書記室の充実、税理士との連携など、内部の体制を整えてきました。',en:"Strengthening the secretary's office, ties with our tax accountant — internal systems were built up.",style:'Methodical answer.'},
    {speaker:'ren_uni',jp:'特許出願の体制、即座に対応できる仕組みですか。',en:"For patent filings, is the system one that responds immediately?",style:'Curious.'},
    {speaker:'yuki_office',jp:'はい。割り当て表が明確で、支払っ手続きも自動化されています。',en:"Yes. Allocation tables are clear, and payment procedures are automated.",style:'Informative.'},
    {speaker:'ren_uni',jp:'閣議決定への対応も、社内で整理しているのですか。',en:"Are responses to cabinet decisions also organized internally?",style:'Probe.'},
    {speaker:'yuki_office',jp:'毎週、関連法務メモを共有しています。',en:"We share related legal memos weekly.",style:'Close.'},
  ]},
  {id:'conv_05349',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss about transitions',lines:[
    {speaker:'hiroshi_elder',jp:'私の代では、税理士に頭を下げて即座に動いてもらったよ。',en:"In my day, I'd bow my head to the tax accountant so they'd move at once.",style:'Sage elder.'},
    {speaker:'hiroshi_boss',jp:'はい。今もその文化、書記室を中心に守っています。',en:"Yes. We keep that culture centered on the secretariat.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'創立精神を、若手にも伝えていけ。出願も、礼を欠かないように。',en:"Convey the founding spirit to the young. Don't lapse in courtesy on filings either.",style:'Stern.'},
    {speaker:'hiroshi_boss',jp:'承知しております。閣議決定の動向、毎朝目を通しております。',en:"Understood. I review cabinet decision trends every morning.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'費用の割り当て、支払っ忘れだけはするな。',en:"Cost allocation — never miss a payment.",style:'Stern advice.'},
    {speaker:'hiroshi_boss',jp:'胸に刻みます。',en:"Engraved in my heart.",style:'Close.'},
  ]},
  {id:'conv_05350',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about budget compliance',lines:[
    {speaker:'takeda_officer',jp:'本件、書記課で文書管理しています。',en:"This case — the secretary section handles document control.",style:'Calm officer.'},
    {speaker:'ren_uni',jp:'閣議決定後の予算は、即座に各部署に割り当てされるんですか。',en:"After cabinet decisions, are budgets allocated to sections immediately?",style:'Polite probe.'},
    {speaker:'takeda_officer',jp:'はい。税理士との連携で、支払っ手続きまで一気通貫です。',en:"Yes. With the tax accountant, payment is end-to-end.",style:'Informative.'},
    {speaker:'ren_uni',jp:'創立以来の慣例も残っているんですよね。',en:"Practices since founding remain too, I gather.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'ええ。特許出願関連は、特に伝統的な様式を踏襲しています。',en:"Yes. For patent-filing-related work, we keep the traditional format.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'勉強になりました。ありがとうございます。',en:"Very instructive. Thank you.",style:'Close.'},
  ]},

  {id:'conv_05351',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through a public-policy paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、減税の効果と土地価格の高騰、両面から扱うんですね。',en:"Your paper tackles both tax-cut effects and land-price surges.",style:'Calm teacher.'},
    {speaker:'ren_uni',jp:'はい。人口密度の高い地域では、配偶者の働き方も含めて分析します。',en:"Yes. In high-density areas, I'll analyze spousal work patterns too.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'返還住宅街と新住宅街、共生のあり方も論点ですよね。',en:"Returned-housing zones and new ones — coexistence is a key point.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。データの重複に気をつけながら整理します。',en:"Yes. I'll organize while watching out for data duplication.",style:'Methodical.'},
    {speaker:'asuka_teacher',jp:'放射線量のモニタリングを示す自治体もあり、それも参考になります。',en:"Some municipalities monitor radiation levels — useful references too.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'参考にします。来週、章立て案をお持ちします。',en:"I'll reference it. Next week I'll bring an outline.",style:'Close.'},
  ]},
  {id:'conv_05352',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager discuss a real-estate column',lines:[
    {speaker:'hiroshi_boss',jp:'この記事、都心の土地が高騰してる話だな。',en:"This article — on land prices surging downtown.",style:'Boss reading.'},
    {speaker:'kenji_office',jp:'はい。減税策の効果と相まって、密度の高い地域に投資が集まっています。',en:"Yes. Combined with tax-cut effects, investment is flowing into denser areas.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'返還地区の話、配偶者控除の見直しとも絡んでくる。',en:"The returned-area story ties to spouse-deduction reviews too.",style:'Analytical.'},
    {speaker:'kenji_office',jp:'共生をテーマにした自治体声明とも重複してます。',en:"It overlaps with municipality statements on the coexistence theme.",style:'Detail.'},
    {speaker:'hiroshi_boss',jp:'放射線関連のリスクは、別の章でしっかり評価しよう。',en:"For radiation-related risk, we'll properly evaluate in a separate chapter.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Brief close.'},
  ]},
  {id:'conv_05353',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about resident services',lines:[
    {speaker:'takeda_officer',jp:'返還エリアの住民票、減税申請と重複しないよう確認しています。',en:"Resident records in the returned area — checking against tax-cut filings to avoid duplication.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'高騰したエリアでの世帯密度、どう変わりましたか。',en:"How did household density change in surged areas?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'配偶者単身赴任が増え、共生型シェア住宅も目立ちます。',en:"Spousal solo-postings rose, and coexistence-style shared housing stands out.",style:'Informative.'},
    {speaker:'ren_uni',jp:'放射線量モニタリングは、引き続き行ってますか。',en:"Is radiation-level monitoring still ongoing?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'ええ、定期的に公表しています。',en:"Yes, periodic disclosure.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'参考になります、ありがとうございました。',en:"Helpful. Thank you.",style:'Close.'},
  ]},
  {id:'conv_05354',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired civil servant',lines:[
    {speaker:'ren_uni',jp:'長年、自治体行政に携わってこられたんですよね。',en:"You've long served in municipal administration.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'うん。返還事業も減税策も、何度も担当した。',en:"Yes. I worked on both repatriation and tax-cut measures many times.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'土地の高騰、住民の密度変化、どう感じていましたか。',en:"How did you feel about land surges and resident-density shifts?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'配偶者の働き方が変わるたび、家族の共生のあり方も変わったよ。',en:"Each time spousal work patterns changed, family coexistence shifted too.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'放射線測定の話も、行政の課題でしたか。',en:"Was radiation measurement an administrative issue too?",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'ええ。データの重複を避けるのに、苦労したよ。',en:"Yes. Avoiding data duplication was hard.",style:'Wise close.'},
  ]},
  {id:'conv_05355',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains environmental medicine to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、地域ごとの放射線量と健康の関係、興味深いでしょう。',en:"Sakura, the link between regional radiation levels and health is fascinating.",style:'Friendly doctor.'},
    {speaker:'sakura_teen',jp:'はい！減税政策で人が流入した地域とか、密度の変化、関係ありますか。',en:"Yes! Areas with influx from tax cuts — density shifts connect?",style:'Eager teen.'},
    {speaker:'saito_doctor',jp:'関係あります。配偶者単身の家庭、健康指標の重複測定で見えてくる傾向もあります。',en:"They do. With spousal-solo households, trends emerge from repeated indicator measurements.",style:'Engaging.'},
    {speaker:'sakura_teen',jp:'返還後の地区、住民との共生も変化したんですか。',en:"Has community coexistence changed in post-return districts?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'文化の高騰した期待値が、生活ストレスにも影響します。',en:"Soaring cultural expectations affect lifestyle stress too.",style:'Informative.'},
    {speaker:'sakura_teen',jp:'すごく勉強になりました!',en:"I learned so much!",style:'Bright close.'},
  ]},

  {id:'conv_05356',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a summer outing',lines:[
    {speaker:'sakura_teen',jp:'七月の連休、土日に新築のショッピングモール行こうよ。',en:"For July weekend break, let's hit the newly built mall on Sat-Sun.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。ハイテク家電のコーナー、芸能人もよく来るって。',en:"Sure. Hi-tech section apparently attracts celebs.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'オープニングセールに飛び込んで、人気商品ゲットしたい。',en:"I want to dive into the opening sale and grab the hot items.",style:'Animated.'},
    {speaker:'riku_teen',jp:'歩道橋渡ると近道だぞ。',en:"Crossing the pedestrian bridge is a shortcut.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'了解!帰りはアイス食べて帰ろ。',en:"Got it! Ice cream on the way back.",style:'Bright close.'},
  ]},
  {id:'conv_05357',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends discuss summer plans',lines:[
    {speaker:'aoi_barista',jp:'七月、新築マンションの内覧会に行く予定。',en:"In July I'm going to a new-condo viewing.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'ハイテクな設備が揃ってるんだって?芸能人もよく住むエリア。',en:"Hi-tech amenities, right? An area where celebs often live.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'土日のオープニングイベントに飛び込んで、見学する予定。',en:"I'll dive into the weekend opening event and look around.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'いいね。橋を渡ったところにあるんだよね。',en:"Nice. It's just over the bridge, right?",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'うん。一緒に下見、付き合ってくれる?',en:"Yes. Want to scout it with me?",style:'Warm close.'},
  ]},
  {id:'conv_05358',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend plan a summer event',lines:[
    {speaker:'sakura_teen',jp:'七月の文化祭、新築の体育館でオープニングする予定です。',en:"July school fest opens at the newly built gym.",style:'Eager teen.'},
    {speaker:'ren_uni',jp:'いいね。ハイテク照明とか入れる?',en:"Nice. Bringing in hi-tech lighting?",style:'Helpful.'},
    {speaker:'sakura_teen',jp:'はい。芸能人風の演出にも挑戦したくて。',en:"Yes. Want to try celeb-style staging.",style:'Animated.'},
    {speaker:'ren_uni',jp:'本番は土日?',en:"Showtime on the weekend?",style:'Check.'},
    {speaker:'sakura_teen',jp:'はい。会場の入り口、橋渡ったらすぐです。',en:"Yes. Venue entrance is just across the bridge.",style:'Plan.'},
    {speaker:'ren_uni',jp:'勢いよく飛び込んで、当日成功させよう。',en:"Dive in with momentum and make the day a hit.",style:'Warm close.'},
  ]},
  {id:'conv_05359',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a family weekend',lines:[
    {speaker:'yumiko_mom',jp:'七月の土日、家族で新築の動物公園に行こうか。',en:"July weekend, family trip to the newly built animal park?",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'いいね。ハイテク水族館も併設されてるんだろ?',en:"Nice. Hi-tech aquarium attached too, right?",style:'Easy dad.'},
    {speaker:'yumiko_mom',jp:'うん。オープニング日には芸能人が来るかも。',en:"Yes. On opening day, celebs might come.",style:'Cheerful.'},
    {speaker:'ryosuke_dad',jp:'子供たち、プールに飛び込んで遊びそうだな。',en:"The kids will dive into the pool and play, no doubt.",style:'Anticipatory.'},
    {speaker:'yumiko_mom',jp:'お弁当持って、橋を渡って公園まで歩こう。',en:"Pack bento, cross the bridge, and walk to the park.",style:'Plan.'},
    {speaker:'ryosuke_dad',jp:'最高だ。',en:"Sounds perfect.",style:'Warm close.'},
  ]},
  {id:'conv_05360',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista swap summer event ideas',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、七月の土日、店で何かやるん?',en:"Aoi-san, doing anything at the shop in July weekends?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい、新メニューのオープニングイベント、芸能人ゲストを呼ぼうかと。',en:"Yes — new-menu opening event, maybe a celeb guest.",style:'Plan.'},
    {speaker:'daichi_kansai',jp:'ええなあ。うちも新築の店舗、ハイテク厨房入れたで。',en:"Lovely. Our newly built shop got a hi-tech kitchen too.",style:'Proud Kansai.'},
    {speaker:'aoi_barista',jp:'凄い!橋を渡ったとこ、新店ですよね。今度見学に伺います。',en:"Amazing! It's the new spot just over the bridge, right? I'll visit to look around.",style:'Eager.'},
    {speaker:'daichi_kansai',jp:'飛び込んで来てや。歓迎するで。',en:"Just drop in. We'll welcome you.",style:'Warm close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_283 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['出口','ごみ','暗く','用事','食う','眺める','嫌わ','要ら']
const B_T = ['残高','納税','人件','同行','職種','命じ','多額','持ち出し']
const C_T = ['分布','良心','防御','加害','捜索','河川','大震災','楽観']
const D_T = ['月刊','ショート','禁煙','陸上','都心','音楽家','壮大','熱狂']

const data = [
  // A
  {id:'conv_05621',cluster:'A',ambient:'park_distant_birds',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk home from a park clean-up event',lines:[
    {speaker:'sakura_teen',jp:'公園の出口、ごみが散らかってたよね。',en:"Litter was scattered at the park exit.",style:'Casual teen.'},
    {speaker:'riku_teen',jp:'うん、暗くなる前に拾えてよかった。',en:"Yeah, glad we picked it up before dark.",style:'Easy.'},
    {speaker:'sakura_teen',jp:'明日は用事あるから、参加できないけど。',en:"Tomorrow I have errands, can't join.",style:'Apologetic.'},
    {speaker:'riku_teen',jp:'気にしないで。一人でもやるよ。',en:"Don't worry, I'll go solo.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'帰りに何か食う?',en:"Wanna grab a bite on the way home?",style:'Casual.'},
    {speaker:'riku_teen',jp:'いいね。あの店、店員に嫌わない程度に長居しよう。',en:"Sure. Let's not overstay enough to be disliked by the staff.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'夕焼け眺めるの好きなんだ、あの席から。',en:"I like watching sunset from that seat.",style:'Soft.'},
    {speaker:'riku_teen',jp:'予約は要らないよね、平日だし。',en:"No reservation needed, weekday and all.",style:'Practical close.'},
  ]},
  {id:'conv_05622',cluster:'A',ambient:'street_quiet_distant',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom walks her son home from school',lines:[
    {speaker:'sho_child',jp:'ママ、学校の出口で、ごみ拾いの当番だったんだよ。',en:"Mom, I was on litter duty at the school exit.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'えらいね。空が暗くなる前に終わってよかった。',en:"Good job. Glad you finished before the sky got dark.",style:'Warm.'},
    {speaker:'sho_child',jp:'夕方、ママ用事あるって言ってたよね?',en:"You said you had an errand this evening, right?",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'うん、ちょっと買い物。何か食うもの、買おうか。',en:"Yes, a quick shop. Shall we grab something to eat?",style:'Soft.'},
    {speaker:'sho_child',jp:'お父さんが嫌わないものがいいなあ。',en:"Something Dad won't dislike, please.",style:'Thoughtful.'},
    {speaker:'yumiko_mom',jp:'ふふ、雲を眺めるあなたの横顔、可愛いよ。',en:"Hehe, your profile gazing at clouds is sweet.",style:'Tender.'},
    {speaker:'sho_child',jp:'傘、要らないよね、今日は。',en:"Don't need an umbrella today, right?",style:'Curious close.'},
  ]},
  {id:'conv_05623',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats over evening tea',lines:[
    {speaker:'hiroshi_elder',jp:'最近、駅の出口、ごみが減ってきたね。',en:"Lately, less litter at the station exit.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。ボランティアさんのおかげね。暗くなっても活動してくれて。',en:"Thanks to volunteers — active even after dark.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'明日、私は用事があるから、夕飯は軽くね。',en:"Tomorrow I have an errand; light dinner.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'何か食う?お茶漬けでいい?',en:"What'll you eat? Ochazuke ok?",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'うん、誰にも嫌わない優しい味だ。',en:"Yes, a gentle taste nobody dislikes.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'庭の梅を眺める時間も、楽しみだわ。',en:"Looking at the garden plum is a delight too.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'特別な物は要らないな、こうして居られるなら。',en:"Don't need special things if we can be here.",style:'Soft close.'},
  ]},
  {id:'conv_05624',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends share an evening',lines:[
    {speaker:'mei_romantic',jp:'駅の出口で待ち合わせ、人が多くて見つけにくいよね。',en:"Meeting at the station exit, hard to spot people.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。冬は暗くなるの早いから、特に。',en:"Yeah. Winter gets dark fast, especially.",style:'Calm.'},
    {speaker:'mei_romantic',jp:'今日は用事の帰り、無事に来れた。',en:"Made it safely on the way back from errands today.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'よかった。何か食う?新作のサンドあるよ。',en:"Glad. Wanna eat? New sandwich on the menu.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'ぜひ。誰にも嫌わない優しいメニューって聞いた。',en:"Please. Heard it's a kind menu nobody dislikes.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'窓から街を眺めるの、ここの特等席。',en:"Gazing at the city from the window — best seat here.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'お土産も、今日は要らないかな。',en:"Don't need a takeaway today either.",style:'Warm close.'},
  ]},
  {id:'conv_05625',cluster:'A',ambient:'street_quiet_distant',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student and a teen friend chat on the way home',lines:[
    {speaker:'sakura_teen',jp:'先輩、駅の北口の出口で待ってますね。',en:"Senpai, I'll wait at the station's north exit.",style:'Polite teen.'},
    {speaker:'ren_uni',jp:'了解。ごみがあったら、写真撮っといて。レポート用。',en:"Got it. If you see litter, snap a photo — for the report.",style:'Casual senpai.'},
    {speaker:'sakura_teen',jp:'はい。暗くなる前に着けると思います。',en:"Yes. Should arrive before dark.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'今日、他に用事あった?',en:"Any other errands today?",style:'Easy.'},
    {speaker:'sakura_teen',jp:'いえ、夕飯食う場所、決めときます。',en:"No, I'll pick a dinner spot.",style:'Cheerful.'},
    {speaker:'ren_uni',jp:'店員に嫌わない店なら、どこでも。',en:"Anywhere the staff doesn't dislike us.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'夜景を眺める席、頼みますね。',en:"I'll request a view seat for the night skyline.",style:'Bright.'},
    {speaker:'ren_uni',jp:'予約は要らない店だよな、あそこ。',en:"That place doesn't need reservations, right?",style:'Practical close.'},
  ]},

  // B
  {id:'conv_05626',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss and his manager review finances',lines:[
    {speaker:'hiroshi_boss',jp:'今期、残高が予想より多額に積み上がってるな。',en:"This term, balances accumulated to large sums beyond forecast.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。納税の準備、進めています。',en:"Yes, preparing the tax filings.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'人件費の見直し、財務部と同行で打ち合わせを命じた。',en:"Reviewing personnel costs — I've ordered a joint meeting with finance.",style:'Direction.'},
    {speaker:'kenji_office',jp:'承知しました。職種別の予算も、再配分が必要です。',en:"Understood. By-role budgets need realignment too.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'資料を持ち出し、来週社外取締役にも見せる。',en:"I'll take materials out and show them to outside directors next week.",style:'Direction.'},
    {speaker:'kenji_office',jp:'秘匿区分、確認します。',en:"I'll verify confidentiality classifications.",style:'Brief close.'},
  ]},
  {id:'conv_05627',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss restructuring',lines:[
    {speaker:'yuki_office',jp:'人件費の上振れ、今期残高に多額の影響だね。',en:"Personnel-cost overrun is a sizeable balance impact this term.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。経理同行で財務会議に出ました。',en:"Yes, attended finance with the accounting lead.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'納税までに、職種ごとの試算を出してほしい。',en:"Before tax filing, send role-by-role estimates.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。役員も命じています、社外への持ち出し厳禁と。',en:"Yes. Execs have ordered: no outside takeaways.",style:'Update.'},
    {speaker:'yuki_office',jp:'各課にも周知を。',en:"Notify each section too.",style:'Close.'},
  ]},
  {id:'conv_05628',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss explains corporate finance basics to a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮くん、企業の残高決算、職種別に分解して見ると面白いよ。',en:"Ren, splitting corporate balances by role is interesting.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'人件費の重みも、職種で違うんですね。',en:"Personnel weight differs by role, then.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'納税の構造も、業種ごとに違う。多額の控除も時に。',en:"Tax structures differ by industry too. Sometimes large deductions.",style:'Informative.'},
    {speaker:'ren_uni',jp:'資料、社外への持ち出しは厳禁ですよね。',en:"Materials are strictly no-takeaway, right?",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'当然だ。同行する時は私が一緒に行く。',en:"Of course. When taken along, I accompany.",style:'Firm.'},
    {speaker:'ren_uni',jp:'勉強になります。',en:"Most instructive.",style:'Earnest close.'},
  ]},
  {id:'conv_05629',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer interviews a manager about a fraud case',lines:[
    {speaker:'takeda_officer',jp:'御社の口座残高、急激に動いた時期がありますね。',en:"There's a period your account balance moved sharply.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。納税還付の入金時期と重なっています。',en:"Yes — overlaps with tax-refund receipts.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'多額の出金、社員の持ち出し記録はありますか。',en:"Large outflows — any record of staff carrying them out?",style:'Procedural.'},
    {speaker:'kenji_office',jp:'監査同行で確認します。',en:"I'll verify with the auditor.",style:'Brief.'},
    {speaker:'takeda_officer',jp:'職種別の出張規程も拝見できますか。',en:"Can I see role-by-role travel rules?",style:'Probe.'},
    {speaker:'kenji_office',jp:'はい、上司に命じられています、全て開示するよう。',en:"Yes — my boss ordered full disclosure.",style:'Procedural close.'},
  ]},
  {id:'conv_05630',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a current boss',lines:[
    {speaker:'hiroshi_elder',jp:'残高の見方、若い頃の私も多額に振り回された。',en:"Reading balances — in my youth, I too was swayed by large sums.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'納税前の精査、慎重にやっています。',en:"Pre-filing review — done carefully.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'人件費の硬直性、職種で分けて見るといい。',en:"Personnel rigidity — split by role to see clearly.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'承知です。外部顧問の同行も命じておきます。',en:"Understood. I'll order outside-advisor accompaniment.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'資料の持ち出し、デジタルでも要注意だ。',en:"Material takeaways, digital too — beware.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05631',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A history teacher discusses disaster studies',lines:[
    {speaker:'asuka_teacher',jp:'今回の論文、河川氾濫の分布、丁寧にマッピングできてますね。',en:"Your paper maps river-flood distribution carefully.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。大震災後の対策、地域差が大きくて。',en:"Yes. Post-quake countermeasures vary widely by area.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'防御計画、行政の良心が問われた章ですね。',en:"Defense-plan chapters challenged authorities' conscience.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'加害責任の議論、楽観できない論点も含めました。',en:"Liability discussions — including hard, unrosy points.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'被災地の捜索活動、当時の証言も入ってる?',en:"Search activities in disaster areas — testimony included?",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'はい、五名分の聞き取りを章末に。',en:"Yes, five interviews at chapter end.",style:'Close.'},
  ]},
  {id:'conv_05632',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter on a case',lines:[
    {speaker:'takeda_officer',jp:'被害分布、市内の河川沿いに集中しています。',en:"Damage distribution concentrates along city rivers.",style:'Calm.'},
    {speaker:'ren_uni',jp:'楽観できない状況ですね。',en:"Not a rosy situation.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。防御の弱い区域、良心的な住民が手を貸してくれている。',en:"Yes — weak-defense areas; conscientious residents are helping.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'加害側の特定、捜索の進捗は。',en:"Identifying perpetrators — search progress?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'大震災時の対応経験を踏まえて、進めています。',en:"Drawing on big-quake-era response experience, progressing.",style:'Informative close.'},
  ]},
  {id:'conv_05633',cluster:'C',ambient:'living_room_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains public health to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、感染症の分布、河川沿いの集落に注目してる。',en:"Sakura, infectious-disease distribution clusters along river settlements.",style:'Friendly.'},
    {speaker:'sakura_teen',jp:'住民の良心に頼るだけじゃ、防御は弱いですね。',en:"Relying just on residents' conscience leaves defense weak.",style:'Curious teen.'},
    {speaker:'saito_doctor',jp:'はい。大震災後の保健ネットワーク、再構築中です。',en:"Yes. Post-quake health network is being rebuilt.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'加害源を、まだ捜索中なんですね。',en:"Source-of-harm is still under search, then.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'楽観してはいけない。地味な地道さが要る。',en:"Mustn't be rosy. Steady, plain work is needed.",style:'Informative close.'},
  ]},
  {id:'conv_05634',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher and a student discuss a documentary',lines:[
    {speaker:'asuka_teacher',jp:'昨夜のドキュメンタリー、地震被害の分布、印象的でしたね。',en:"Last night's doc — quake-damage distribution was striking.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'河川沿いの避難所、防御施設が古くて。',en:"Riverside shelters had old defense facilities.",style:'Concerned.'},
    {speaker:'asuka_teacher',jp:'行政の良心、問われる場面でしたね。',en:"Authorities' conscience was challenged.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'加害責任の追及、楽観視できない論点が多いです。',en:"Liability pursuit — many points you can't view rosily.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'被災地での捜索活動、ボランティアの貢献も大きい。',en:"Disaster-area searches — volunteers contributed greatly.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'大震災から学ぶこと、まだまだあります。',en:"Much still to learn from the great quake.",style:'Earnest close.'},
  ]},
  {id:'conv_05635',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss debriefs after a CSR meeting',lines:[
    {speaker:'hiroshi_boss',jp:'CSR会議、被災地支援の分布、整理できたな。',en:"CSR meeting — disaster-aid distribution mapped well.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。河川沿いの工場、防御整備の見直し、急務です。',en:"Yes. Riverside plants — defense reviews are urgent.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'良心的なサプライヤーと、組んで進めよう。',en:"Let's partner with conscientious suppliers.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'過去の加害事例、捜索段階で対処済みです。',en:"Past harm cases — handled at search phase.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'大震災の教訓を忘れず、楽観しない経営を。',en:"Don't forget the great quake's lessons; manage unrosily.",style:'Direction close.'},
  ]},

  // D
  {id:'conv_05636',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a culture-packed Sunday',lines:[
    {speaker:'mei_romantic',jp:'今月の月刊誌、注目の音楽家特集が壮大なの。',en:"This month's monthly mag — a featured musician spread is grand.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'いいね。日曜、都心まで遠征する?',en:"Nice. Sunday, into the city center?",style:'Bright.'},
    {speaker:'mei_romantic',jp:'うん。陸上競技の中継も、午前は熱狂的だって。',en:"Yes. Track broadcast in the morning is reportedly wild.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'店、禁煙だから、ゆっくり過ごせるよ。',en:"Shop is non-smoking; you can relax.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'ショートヘアにしてみた、変?',en:"Tried short hair — weird?",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'全然!似合ってる。',en:"Not at all! It suits you.",style:'Warm close.'},
  ]},
  {id:'conv_05637',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a weekend trip to the city',lines:[
    {speaker:'sakura_teen',jp:'都心で陸上の大会あるよ、土曜。',en:"Track meet in the city center Saturday.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'お、熱狂的なファン多いよね、あの大会。',en:"Oh, that meet has wild fans.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'月刊誌に、注目選手の特集が壮大に組まれてた。',en:"Monthly mag had a grand feature on highlight athletes.",style:'Animated.'},
    {speaker:'riku_teen',jp:'会場、禁煙ゾーン広いから、安心だ。',en:"Wide no-smoking zones at the venue — relief.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'帰りは、ショートカットの裏道使う?',en:"On the way back, take the shortcut alley?",style:'Probe.'},
    {speaker:'riku_teen',jp:'うん、音楽家のライブにも寄れたらいいな。',en:"Yes. Hope we can drop by a musician's live too.",style:'Cheerful close.'},
  ]},
  {id:'conv_05638',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and a uni student discuss arts coverage',lines:[
    {speaker:'asuka_teacher',jp:'月刊文化誌、今月号、都心のシーンを壮大に特集していますね。',en:"The monthly culture mag this month grandly features the city-center scene.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。注目の音楽家、海外でも熱狂的に支持されてます。',en:"Yes. The highlighted musician has wild support overseas too.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'陸上選手のインタビューも入ってるんですね。',en:"A track athlete's interview is in too.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'禁煙対応の会場ばかりで、観客層が広がっています。',en:"Non-smoking venues are spreading the audience.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'ショート形式の動画も、誌面と連動してるんですね。',en:"Short-format videos also tie into the print.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'読者層、若年化が進んでいます。',en:"The readership is getting younger.",style:'Informative close.'},
  ]},
  {id:'conv_05639',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef plans a music-themed event',lines:[
    {speaker:'daichi_kansai',jp:'うちの店、月刊で音楽家のライブやってこか。',en:"Our shop — monthly musician lives, how about it?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'素敵です!都心のお店みたいに、壮大なステージは無理ですけど。',en:"Lovely! Can't do grand stages like city-center shops though.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'禁煙やから、家族連れも来やすいな。',en:"It's non-smoking, so families come easily.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'ショートセットなら、夕方の時間でも入りますね。',en:"Short sets fit even in the evening slot.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'陸上部の若手も、ファンで来てくれるかも。',en:"Young track-club kids might come as fans too.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'熱狂的すぎないように、規模、調整しましょう。',en:"Let's tune the scale so it doesn't get too wild.",style:'Practical close.'},
  ]},
  {id:'conv_05640',cluster:'D',ambient:'street_quiet_distant',cast:['ryosuke_dad','sho_child'],targets:D_T,scenario:'A dad takes his son to a city outing',lines:[
    {speaker:'ryosuke_dad',jp:'翔、今日は都心まで電車で行くぞ。',en:"Sho, today we ride into the city by train.",style:'Warm.'},
    {speaker:'sho_child',jp:'うん!月刊の付録に載ってたショートゲームの大会、見たい!',en:"Yes! Want to see the short-game tourney from the monthly mag!",style:'Excited child.'},
    {speaker:'ryosuke_dad',jp:'昼は陸上競技場で、トラック観戦だ。',en:"Lunchtime, track-stadium spectating.",style:'Bright.'},
    {speaker:'sho_child',jp:'お父さん、会場は禁煙だよね?',en:"Dad, the venue is non-smoking, right?",style:'Curious.'},
    {speaker:'ryosuke_dad',jp:'もちろん。家族連れに優しい場所だ。',en:"Of course. Family-friendly.",style:'Reassuring.'},
    {speaker:'sho_child',jp:'有名な音楽家のミニコンサートもあるって、本当?',en:"There's also a famous musician's mini-concert — true?",style:'Awe.'},
    {speaker:'ryosuke_dad',jp:'本当だ。壮大な舞台じゃないけど、熱狂的なファンが集まるよ。',en:"True. Not a grand stage, but wild fans gather.",style:'Warm close.'},
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

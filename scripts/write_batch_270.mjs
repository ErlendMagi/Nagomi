import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_270 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['かまわ','しゃべっ','とたん','行ない','疑わ','楽しま','好む','もて']
const B_T = ['担っ','書き込ん','専念','県警','整合','図り','出題','一律']
const C_T = ['反する','成り立っ','起こら','停滞','弊害','苦しむ','逃れ','迫ら']
const D_T = ['フライト','プロモーション','アナウンス','まつり','街道','庭園','ポーズ','ディレクター']

const data = [
  {id:'conv_05361',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends gossip about a popular coworker',lines:[
    {speaker:'aoi_barista',jp:'うちの新人さん、入ったとたんもう常連にもてはじめてさ。',en:"Our new hire — the moment he started, regulars began doting on him.",style:'Soft gossipy.'},
    {speaker:'mei_romantic',jp:'へえ。誰彼かまわずしゃべっちゃうタイプじゃないのに?',en:"Oh? He's not the type who chats with everyone indiscriminately, right?",style:'Curious friend.'},
    {speaker:'aoi_barista',jp:'うん、その控えめさを、お客さんは好むみたい。',en:"Yeah — customers seem to like that reserved side.",style:'Observation.'},
    {speaker:'mei_romantic',jp:'いい子じゃん。心の中で疑わずに信じてあげなよ。',en:"Sounds like a good one. Trust him without inner doubts.",style:'Encouraging.'},
    {speaker:'aoi_barista',jp:'うん。今日も静かに行ない丁寧で、安心して任せられる。',en:"Yes. Today too his actions were quiet and careful — easy to trust.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'お店、もっと楽しまれる空間になるね。',en:"The shop will become an even more enjoyed space.",style:'Warm close.'},
  ]},
  {id:'conv_05362',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens gossip about who\'s popular at school',lines:[
    {speaker:'sakura_teen',jp:'ねぇ、ハルカが転校したとたんもてはじめたって、聞いた?',en:"Hey, did you hear Haruka became popular the moment she transferred?",style:'Gossipy teen.'},
    {speaker:'riku_teen',jp:'マジか。誰彼かまわず話しかけてくれるタイプだもんな。',en:"For real. She talks to anyone without discriminating.",style:'Easy teen.'},
    {speaker:'sakura_teen',jp:'うん、ただ陰でしゃべってる男子は疑わずにすんだ感じ。',en:"Yeah, and the boys whispering behind got their suspicions cleared.",style:'Knowing teen.'},
    {speaker:'riku_teen',jp:'みんなが楽しまない雰囲気だったのに、ガラッと変わったよな。',en:"Atmosphere was un-fun before, but it totally flipped.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'真面目な行ないも好むよね、彼女。',en:"She likes earnest behavior too, you know.",style:'Soft.'},
    {speaker:'riku_teen',jp:'うん、いいクラスメイトだ。',en:"Yeah, a good classmate.",style:'Warm close.'},
  ]},
  {id:'conv_05363',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom teaches her young son about good behavior',lines:[
    {speaker:'sho_child',jp:'ママ、なんで先生はぼくの行ない、いつも見てるの?',en:"Mom, why does the teacher always watch how I behave?",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'翔が立派になるのを、楽しまれてるからだよ。',en:"Because she enjoys watching you grow into someone fine.",style:'Warm motherly.'},
    {speaker:'sho_child',jp:'ねえ、ぼく、もてるかな?',en:"Hey, will I be popular?",style:'Innocent child.'},
    {speaker:'yumiko_mom',jp:'ふふ、誰彼かまわず話しかけたら、すぐ仲良くなれるよ。',en:"Hehe, if you talk to anyone without picking, you'll make friends fast.",style:'Soft laugh.'},
    {speaker:'sho_child',jp:'でも、いきなりしゃべったとたん、変な顔されたら…。',en:"But if I suddenly talk and they make a face…",style:'Worried.'},
    {speaker:'yumiko_mom',jp:'疑わずに笑顔でいれば大丈夫。優しさを好む子、絶対いるから。',en:"Smile without doubt and you'll be fine — kids who like kindness are out there.",style:'Reassuring close.'},
  ]},
  {id:'conv_05364',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple reflects on a longtime friend\'s ways',lines:[
    {speaker:'hiroshi_elder',jp:'田中さん、若い頃から誰彼かまわずしゃべっていたな。',en:"Tanaka talked to anyone, even from young days.",style:'Reflective elder.'},
    {speaker:'sachiko_grandma',jp:'うん。会ったとたん、行ない丁寧で、私はすぐに好むようになったわ。',en:"Yes. From the moment we met, his manners were careful — I quickly came to like him.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'昔は女性にもよくもてていた。本人は疑わずにいたが。',en:"He was popular with women too. He himself was guileless about it.",style:'Fond.'},
    {speaker:'sachiko_grandma',jp:'今は、奥様としっかり楽しまれているそうよ。',en:"Now he and his wife enjoy life together fully.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'良い人生だな。',en:"A good life.",style:'Quiet close.'},
  ]},
  {id:'conv_05365',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student gently advises a teen friend on self-presentation',lines:[
    {speaker:'sakura_teen',jp:'先輩、私、新しいクラスでもてないんですよ。',en:"Senpai, I'm not popular in my new class.",style:'Wistful teen.'},
    {speaker:'ren_uni',jp:'入ったとたん「人気者になろう」と思うと、空回りする。',en:"The moment you try to be popular, it backfires.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'誰彼かまわずしゃべって、楽しまれる雰囲気作るのが正解?',en:"Talk to anyone and make the room fun — is that right?",style:'Curious.'},
    {speaker:'ren_uni',jp:'真面目な行ないをサクラが好む通り、それを続けて。',en:"As you yourself like earnest behavior, just keep doing that.",style:'Gentle.'},
    {speaker:'sakura_teen',jp:'疑わずに、自分らしく振る舞います。',en:"Without doubting, I'll act like myself.",style:'Resolved.'},
    {speaker:'ren_uni',jp:'それでいい。応援してるから。',en:"That's right. I'm cheering you on.",style:'Warm close.'},
  ]},

  {id:'conv_05366',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a project alignment',lines:[
    {speaker:'hiroshi_boss',jp:'プロジェクト、誰が主担当を担っている?',en:"Who's the lead on the project?",style:'Crisp boss.'},
    {speaker:'kenji_office',jp:'今期は私が専念する形で、整合性を図りつつ進めています。',en:"This term I focus on it solo, advancing while ensuring consistency.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'昨日の議事録に書き込んでおいてくれ。一律で共有するように。',en:"Write it into yesterday's minutes. Share uniformly.",style:'Direction.'},
    {speaker:'kenji_office',jp:'承知しました。出題予定のテーマも、社内向けに整理します。',en:"Understood. I'll arrange the planned themes for in-house use.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'県警との連携部分、忘れないように。',en:"Don't forget the prefectural-police coordination.",style:'Reminder.'},
    {speaker:'kenji_office',jp:'はい、明日の打合せに含めます。',en:"Yes, I'll include it in tomorrow's meeting.",style:'Brief close.'},
  ]},
  {id:'conv_05367',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep an internal training session',lines:[
    {speaker:'yuki_office',jp:'今度の研修、出題内容を一律にする?',en:"For the upcoming training, make the questions uniform?",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。整合性を図り、部署ごとの差をなくします。',en:"Yes. Aligning for consistency, removing per-department gaps.",style:'Coordination.'},
    {speaker:'yuki_office',jp:'資料の書き込んでない箇所、専念して埋めて。',en:"Where the docs lack notes, focus and fill them in.",style:'Direction.'},
    {speaker:'kenji_office',jp:'担っ部分、明日朝までに完成させます。',en:"My assigned portion — done by tomorrow morning.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'県警からの来賓もいるから、形式整えて。',en:"There's a guest from the prefectural police, so polish the format.",style:'Final note.'},
    {speaker:'kenji_office',jp:'了解です。',en:"Got it.",style:'Brief close.'},
  ]},
  {id:'conv_05368',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about quality assurance',lines:[
    {speaker:'ren_uni',jp:'品質管理、社内のどの部署が中心を担っているんですか。',en:"On QA, which section leads internally?",style:'Polite intern.'},
    {speaker:'yuki_office',jp:'品管チームが専念して取り組んでいます。',en:"The QA team focuses on it exclusively.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'外部監査の整合性は、どう図り出すんでしょうか。',en:"How do you establish alignment with external audits?",style:'Probe.'},
    {speaker:'yuki_office',jp:'各種ガイドラインの一律適用と、書き込んできた記録の照合で進めます。',en:"Through uniform application of guidelines and reconciliation with written records.",style:'Informative.'},
    {speaker:'ren_uni',jp:'県警関連の届出も含まれるんですか。',en:"Are prefectural-police notifications included?",style:'Curious.'},
    {speaker:'yuki_office',jp:'はい、年に一度の出題用試験もあります。',en:"Yes, including an annual question-based test.",style:'Close.'},
  ]},
  {id:'conv_05369',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss on management discipline',lines:[
    {speaker:'hiroshi_elder',jp:'担っている責任の重さ、忘れるなよ。',en:"Don't forget the weight of the responsibility you carry.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。専念して取り組む案件が増えています。',en:"Yes. Cases requiring dedicated focus are growing.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'資料には自分の手で書き込んでおけ。あとで整合性が活きる。',en:"Write into the materials by your own hand. Consistency pays off later.",style:'Stern.'},
    {speaker:'hiroshi_boss',jp:'承知しました。県警対応も、図り直して進めます。',en:"Understood. Prefectural-police coordination — I'll rework and proceed.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'出題された課題、一律対応で逃げるな。個別の論点を吟味しろ。',en:"On posed problems, don't dodge with uniform answers. Examine each issue.",style:'Stern.'},
    {speaker:'hiroshi_boss',jp:'胸に刻みます。',en:"Engraved in my heart.",style:'Close.'},
  ]},
  {id:'conv_05370',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about a regulatory case',lines:[
    {speaker:'takeda_officer',jp:'本件、所管が県警と自治体、両方で担っています。',en:"Authority over this case is shared by the prefectural police and the city.",style:'Calm.'},
    {speaker:'ren_uni',jp:'整合性は、どのように図り出していますか。',en:"How do you bring out alignment between them?",style:'Polite probe.'},
    {speaker:'takeda_officer',jp:'規程に一律準拠した運用と、定例会で書き込んでくる議事録の活用です。',en:"Uniform-rule operation and use of the minutes written each regular meeting.",style:'Informative.'},
    {speaker:'ren_uni',jp:'業務に専念する担当者、いるんですよね。',en:"There's an officer focusing solely on this work, right?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。新人試験の出題も、業務理解の一環です。',en:"Yes. Their entrance-test questions are part of learning the work.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'記事に反映させていただきます。',en:"I'll reflect it in the article.",style:'Close.'},
  ]},

  {id:'conv_05371',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through an economic-policy paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、停滞期の経済政策が論点ですね。',en:"Your paper's point is economic policy during stagnation.",style:'Calm teacher.'},
    {speaker:'ren_uni',jp:'はい。物価高に苦しむ世帯の状況も含めます。',en:"Yes, including households suffering from price spikes.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'政策の効果と反する結果が、なぜ起こらないと言えないか、丁寧に。',en:"Carefully address why results contrary to policy can't be ruled out.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'増税で逃れの抜け道が生まれる弊害も、章を割きます。',en:"I'll devote a chapter to the side-effects of tax hikes creating loopholes.",style:'Plan.'},
    {speaker:'asuka_teacher',jp:'家計が迫られる状況、データで成り立っているか確認を。',en:"Households under pressure — verify the data supports the claim.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'参考にします。',en:"Noted.",style:'Close.'},
  ]},
  {id:'conv_05372',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager discuss a market-stagnation article',lines:[
    {speaker:'hiroshi_boss',jp:'この記事、市場の停滞と物価高に苦しむ家計を、両面から扱ってるな。',en:"This piece tackles both market stagnation and households hit by price hikes.",style:'Boss.'},
    {speaker:'kenji_office',jp:'はい。政策の意図と反する結果が、起こらないとは断言できないと書かれています。',en:"Yes. It says results contrary to policy intent can't be definitively ruled out.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'増税からの逃れ方、企業側の弊害も検討必須だな。',en:"Tax-hike escape paths and corporate side-effects — both must be examined.",style:'Analytical.'},
    {speaker:'kenji_office',jp:'判断が迫られる場面、経営側にも増えています。',en:"Decisions are increasingly being forced on management.",style:'Detail.'},
    {speaker:'hiroshi_boss',jp:'論理がきちんと成り立っているか、来週の会議で議論しよう。',en:"Whether the logic holds — let's discuss next week.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Brief close.'},
  ]},
  {id:'conv_05373',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter on regional issues',lines:[
    {speaker:'takeda_officer',jp:'地域の停滞期、住民が苦しむ場面が増えました。',en:"During regional stagnation, residents suffering has grown.",style:'Calm.'},
    {speaker:'ren_uni',jp:'生活の不安から逃れたい人たち、相談窓口に迫られているんですよね。',en:"People wanting to escape life anxieties are pressing onto the help desk, right?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。期待と反する制度の弊害も、現場で起こらないとは言い切れません。',en:"Yes. Side-effects contrary to expectation can't be ruled out on the ground.",style:'Honest.'},
    {speaker:'ren_uni',jp:'対策の理屈が、地域でも成り立っているのか、見極めたいです。',en:"I want to see whether the rationale holds for the area.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'資料、後ほど共有します。',en:"I'll share materials later.",style:'Close.'},
  ]},
  {id:'conv_05374',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired economic columnist',lines:[
    {speaker:'ren_uni',jp:'長年、経済停滞の取材をしてこられたんですよね。',en:"You've long covered economic stagnation.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'ああ。期待と反する結果が起こらないと信じる方が珍しいよ。',en:"Yes. Believing contrary outcomes won't happen is the rare position.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'政策の弊害、家計を圧迫することも多いんですか。',en:"Policy side-effects often squeeze household budgets too?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'うん。苦しむ世帯が増え、税からの逃れに頭を絞る人も増える。',en:"Yes. Suffering households grow, and people scheming to escape taxes grow too.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'対応に迫られる行政、論理が成り立っているか不安ですね。',en:"Administrations forced into responses — whether their logic holds is worrying.",style:'Engaged.'},
    {speaker:'hiroshi_elder',jp:'記者として、現場をしっかり見届けることだ。',en:"As a reporter, observe the field thoroughly.",style:'Wise close.'},
  ]},
  {id:'conv_05375',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains lifestyle medicine to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、健康的な生活、停滞しがちなときこそ大事ですよ。',en:"Sakura, healthy habits matter most when life feels stagnant.",style:'Friendly doctor.'},
    {speaker:'sakura_teen',jp:'最近、勉強の負荷から逃れたくて、つい夜更かしして苦しむんです。',en:"Lately, wanting to escape study load, I stay up late and suffer.",style:'Vulnerable.'},
    {speaker:'saito_doctor',jp:'体に反する習慣、続けると小さな弊害が積み重なります。',en:"Habits against the body accumulate small side-effects over time.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'試験の前は、決断を迫られる感じで動けなくなって…。',en:"Before tests, I freeze when forced to decide.",style:'Soft.'},
    {speaker:'saito_doctor',jp:'計画は、無理が起こらないように立てましょう。一日が成り立っていく感覚、戻せるはず。',en:"Plan in ways without overstrain. The sense of a day taking shape will return.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'試してみます。',en:"I'll give it a try.",style:'Bright close.'},
  ]},

  {id:'conv_05376',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a summer festival outing',lines:[
    {speaker:'sakura_teen',jp:'夏まつり、街道沿いの庭園でやるんだって。',en:"Summer festival's being held at the garden along the highway.",style:'Excited.'},
    {speaker:'riku_teen',jp:'いいね、ライブのアナウンスも入ってる?',en:"Sweet. Live announcements in too?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'うん。プロモーションムービー作るって、ディレクターさん募集してた。',en:"Yeah. They're recruiting a director to make a promo movie.",style:'Animated.'},
    {speaker:'riku_teen',jp:'飛行機にも乗せちゃう企画?',en:"Even a flight-inclusive plan?",style:'Joking.'},
    {speaker:'sakura_teen',jp:'違うよ、フライトはミニドローンの方。記念のポーズで写真撮りたい。',en:"No, the flight is for mini-drones. I want a souvenir-pose photo.",style:'Bright.'},
    {speaker:'riku_teen',jp:'楽しみだな!',en:"Excited!",style:'Warm close.'},
  ]},
  {id:'conv_05377',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends plan a seasonal event',lines:[
    {speaker:'aoi_barista',jp:'お店、夏のまつり風プロモーションやる予定。',en:"Planning a summer-festival-style promotion at the shop.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'素敵!アナウンスもしてくれるディレクターさん、いる?',en:"Lovely! Got a director to do the announcements too?",style:'Excited.'},
    {speaker:'aoi_barista',jp:'うん、街道沿いのカフェ仲間が紹介してくれた。',en:"Yes, a cafe friend on the highway recommended one.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'記念ポーズ撮るブース作ったら、お客さん喜ぶよ。',en:"A souvenir-pose photo booth would delight customers.",style:'Idea.'},
    {speaker:'aoi_barista',jp:'いいね。庭園で開く中庭撮影も企画する。',en:"Nice. I'll plan courtyard shoots in the garden.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'当日のフライト気分、写真でみんなに届けようよ。',en:"Let's deliver that flight-feel via photos to everyone.",style:'Warm close.'},
  ]},
  {id:'conv_05378',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend plan a club promo video',lines:[
    {speaker:'sakura_teen',jp:'先輩、私たちの部活のプロモーション映像、撮りたいんです。',en:"Senpai, I want to film a promo video for our club.",style:'Eager.'},
    {speaker:'ren_uni',jp:'いいね。ディレクター役、誰か想定してる?',en:"Nice. Anyone in mind for the director role?",style:'Helpful.'},
    {speaker:'sakura_teen',jp:'はい、放送部の友達。アナウンスもしてくれそう。',en:"Yes, a broadcast-club friend. They'll probably do the announcements too.",style:'Plan.'},
    {speaker:'ren_uni',jp:'撮影場所、街道沿いの庭園、許可取れる?',en:"Filming spot — the highway-side garden — can you get permission?",style:'Practical.'},
    {speaker:'sakura_teen',jp:'まつりの時期、市に確認します。記念ポーズ撮影も合わせて。',en:"I'll check with the city during festival time. Add a souvenir-pose shoot too.",style:'Resolved.'},
    {speaker:'ren_uni',jp:'うまく行ったら、フライト撮影も次は挑戦してみよう。',en:"If it goes well, try drone-flight shooting next time.",style:'Warm close.'},
  ]},
  {id:'conv_05379',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a summer family weekend',lines:[
    {speaker:'yumiko_mom',jp:'今度の週末、街道沿いの庭園で夏まつりやるよ。',en:"This weekend, summer festival at the garden along the highway.",style:'Warm wife.'},
    {speaker:'ryosuke_dad',jp:'お、いいね。プロモーション動画もネットに上がってたよ。',en:"Oh, nice. A promo video was even online.",style:'Easy dad.'},
    {speaker:'yumiko_mom',jp:'子供たち、ステージのアナウンスを楽しみにしてる。',en:"The kids are looking forward to the stage announcements.",style:'Cheerful.'},
    {speaker:'ryosuke_dad',jp:'ディレクターさん知り合いだから、ちょっと顔出すか。',en:"I know the director, so we'll stop by briefly.",style:'Casual.'},
    {speaker:'yumiko_mom',jp:'家族みんなで記念ポーズ撮ろう。',en:"Let's take a souvenir-pose photo as a family.",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'帰りに、空港でフライトの写真でも撮って帰るか。',en:"On the way back, maybe shoot a flight photo at the airport.",style:'Cheerful close.'},
  ]},
  {id:'conv_05380',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista swap festival ideas',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、夏まつりに合わせてプロモーションやる予定なん?',en:"Aoi-san, planning a promo for the summer festival?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい、街道沿いの庭園で公開撮影します。',en:"Yes, open shooting at the garden along the highway.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'ディレクター、ええ人捕まえたん?',en:"Did you get a good director?",style:'Curious Kansai.'},
    {speaker:'aoi_barista',jp:'地元の方で、アナウンスも兼任してくれます。',en:"A local, doubling as announcer.",style:'Helpful.'},
    {speaker:'daichi_kansai',jp:'記念ポーズ撮影も流行っとるしな。',en:"Souvenir-pose photos are trending too, you know.",style:'Knowing Kansai.'},
    {speaker:'aoi_barista',jp:'はい。終わったらフライト写真の撮影も予定です。',en:"Yes. Afterward we plan a drone-flight photo shoot too.",style:'Bright close.'},
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

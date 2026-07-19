import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_266 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['襲っ','咲き','外人','野郎','クン','ヶ所','はてな','エキサイト']
const B_T = ['ビラ','トピックス','ナショナリズム','ビジネスマン','プラザ','農林省','リーディング','請願']
const C_T = ['東部','神戸大','人事院','十字架','日月','智','峰','陰謀']
const D_T = ['女子高','シドニー','和歌山','栃木','カレッジ','薫','ヴィンチ','ヤン']

const data = [
  {id:'conv_05281',cluster:'A',ambient:'cafe_quiet_chatter',scenario:'Two cafe friends gossip about a tourist incident outside',cast:['aoi_barista','mei_romantic'],targets:A_T,lines:[
    {speaker:'aoi_barista',jp:'さっき店の前で、観光中の外人さんが急に犬に襲って来られてさ。',en:"Just now in front of the shop, a foreign tourist suddenly got rushed at by a dog.",style:'Hushed barista gossip.'},
    {speaker:'mei_romantic',jp:'えっ、大丈夫だったの？心配で胸がはてなマーク状態。',en:"What, were they okay? My head's a question mark from worry.",style:'Soft concerned friend.'},
    {speaker:'aoi_barista',jp:'幸い無傷だったんだけど、目撃した田中クンが大エキサイトしてさ。',en:"Luckily no injuries, but Tanaka-kun who saw it was super excited.",style:'Half-amused recall.'},
    {speaker:'mei_romantic',jp:'その犬の飼い主、近くに二ヶ所、別店舗で問題起こしてるって聞いた。',en:"That dog's owner has caused trouble at two other nearby stores too, I heard.",style:'Gossipy lean-in.'},
    {speaker:'aoi_barista',jp:'マジか、あの野郎、また?もう警察呼ぶレベルだよね。',en:"Seriously? That jerk, again? It's at the call-the-police level.",style:'Frustrated barista edge.'},
    {speaker:'mei_romantic',jp:'店先の桜、ようやく咲き始めたのに、ピリピリした気分で見ちゃうわ。',en:"The cherry tree out front just started blooming, but I see it with edgy nerves now.",style:'Wistful aside.'},
    {speaker:'aoi_barista',jp:'落ち着いたら、また一緒にお花見しよ。',en:"Once things settle, let's do hanami together again.",style:'Warm reset close.'},
  ]},
  {id:'conv_05282',cluster:'A',ambient:'street_quiet_distant',scenario:'Two teens vent about an annoying classmate',cast:['sakura_teen','riku_teen'],targets:A_T,lines:[
    {speaker:'sakura_teen',jp:'今日のミナクン、マジでありえなくない?',en:"Mina-kun today was seriously unbelievable, right?",style:'Indignant teen pitch.'},
    {speaker:'riku_teen',jp:'うん。質問するたびに、なんで野郎口調で噛みついてくるのって感じ。',en:"Yeah. Every time someone asks, why does he snap with that 'dude' attitude?",style:'Exasperated teen-boy reply.'},
    {speaker:'sakura_teen',jp:'放課後、私の机のあたりにいきなり襲ってきて、はてな顔。',en:"After school he suddenly swooped near my desk and I was like, ???",style:'Animated retelling.'},
    {speaker:'riku_teen',jp:'外人留学生のリサにも同じことやってたぞ。あの態度、エキサイトしすぎ。',en:"He pulled the same thing on the foreign exchange student Lisa. Way too riled up.",style:'Critical teen tone.'},
    {speaker:'sakura_teen',jp:'桜が咲き始めたばかりなのに、教室の空気が悪い…。',en:"Sakura just started blooming, but the classroom atmosphere is rough…",style:'Sigh.'},
    {speaker:'riku_teen',jp:'問題発生したの、今月で三ヶ所目だしな。',en:"And it's the third spot this month where he's caused issues.",style:'Counting on fingers.'},
    {speaker:'sakura_teen',jp:'担任に相談する。明日朝、職員室行こ。',en:"I'll go talk to the homeroom teacher. Tomorrow morning, staff room.",style:'Decisive teen close.'},
  ]},
  {id:'conv_05283',cluster:'A',ambient:'living_room_quiet',scenario:'A mom answers her young son\'s playground question',cast:['yumiko_mom','sho_child'],targets:A_T,lines:[
    {speaker:'sho_child',jp:'ママ、公園でケンクンが急に犬に襲っられそうになったよ。',en:"Mom, at the park, Ken-kun nearly got rushed by a dog.",style:'Wide-eyed child report.'},
    {speaker:'yumiko_mom',jp:'えっ、それは大変。ケガはなかったの?',en:"Oh no, that's serious. Was he hurt?",style:'Concerned mother.'},
    {speaker:'sho_child',jp:'うん。でね、外人のおじさんが助けてくれて、すごくエキサイトしてた。',en:"No. A foreign uncle helped, and was really excited.",style:'Excited child recall.'},
    {speaker:'yumiko_mom',jp:'優しい人がいてよかった。「あの野郎、しつけが悪い」って怒ってた人もいた?',en:"Glad there was a kind person. Was anyone angry shouting 'that jerk needs training'?",style:'Patient probe.'},
    {speaker:'sho_child',jp:'いたよ。公園にね、犬の落とし物も二ヶ所あった。',en:"Yeah. There were also two spots in the park with dog mess.",style:'Reporting detail.'},
    {speaker:'yumiko_mom',jp:'うーん、はてなだね。今度公園行くとき、ママも一緒に行こう。',en:"Hmm, puzzling. Next time you go, Mom will come too.",style:'Soft maternal resolve.'},
    {speaker:'sho_child',jp:'うん。桜も咲き始めたから、お弁当持ってこうね。',en:"Yeah. Cherry blossoms just started blooming, so let's bring a bento.",style:'Brightening child voice.'},
  ]},
  {id:'conv_05284',cluster:'A',ambient:'living_room_quiet',scenario:'An elderly couple talks about an event in their old neighborhood',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,lines:[
    {speaker:'hiroshi_elder',jp:'昔住んでた町、最近外人観光客が増えたらしいよ。',en:"Our old town apparently has more foreign tourists these days.",style:'Reflective elder.'},
    {speaker:'sachiko_grandma',jp:'あら、桜が咲き始める頃に賑わうのは、いいことね。',en:"Oh, it's good for it to bustle around when cherries start blooming.",style:'Warm grandmother.'},
    {speaker:'hiroshi_elder',jp:'ただ、空き家を狙った野郎が、二ヶ所で空き巣に入ったらしい。',en:"Though a creep apparently broke into vacant houses at two locations.",style:'Soft worried tone.'},
    {speaker:'sachiko_grandma',jp:'まあ、はてな?あの静かな町でね…。',en:"My, really? In that quiet town…",style:'Surprised grandmother.'},
    {speaker:'hiroshi_elder',jp:'孫のタケシクンが心配して、エキサイト気味に電話してきたよ。',en:"Grandson Takeshi-kun got worried and called in a bit of a tizzy.",style:'Fond elder.'},
    {speaker:'sachiko_grandma',jp:'急に襲ってくる事件は本当に勘弁してほしいわね。',en:"Sudden assault incidents — please, no more.",style:'Quiet weary sigh.'},
    {speaker:'hiroshi_elder',jp:'防犯灯、もう一灯増やすよう町内会に頼んでみるよ。',en:"I'll ask the neighborhood association to add another security lamp.",style:'Resolved gentle close.'},
  ]},
  {id:'conv_05285',cluster:'A',ambient:'cafe_quiet_chatter',scenario:'A uni student debriefs a teen friend after a school incident',cast:['ren_uni','sakura_teen'],targets:A_T,lines:[
    {speaker:'sakura_teen',jp:'先輩、今日の朝、登校中にいきなり犬に襲って来られたんです。',en:"Senpai, this morning a dog suddenly rushed at me on the way to school.",style:'Shaken teen.'},
    {speaker:'ren_uni',jp:'え、無事?二ヶ所くらい怪我してない?',en:"What, are you okay? Hurt in a couple of spots?",style:'Worried mentor.'},
    {speaker:'sakura_teen',jp:'幸い無事です。通りすがりの外人さんが助けてくれて。',en:"Luckily fine. A foreigner passing by helped me.",style:'Relieved teen.'},
    {speaker:'ren_uni',jp:'良かった。エキサイトしてた野郎、見つかったの?',en:"Thank goodness. Did they find the jerk who was riled up?",style:'Earnest follow-up.'},
    {speaker:'sakura_teen',jp:'はてな顔で逃げて行ったみたいで、まだ。',en:"Looked like they ran off in a daze, so not yet.",style:'Quiet teen voice.'},
    {speaker:'ren_uni',jp:'警察には届けた?「○○クン襲撃事件」みたいに、しっかり名前付けて報告しよ。',en:"Reported to police? Let's report it tagged like an 'XX-kun incident' so it gets tracked.",style:'Practical senpai.'},
    {speaker:'sakura_teen',jp:'今日のうちに行きます。桜が咲き始めた季節に、こんなのって…。',en:"I'll go today. In the season cherry blossoms start to bloom, of all times…",style:'Vulnerable close.'},
  ]},

  {id:'conv_05286',cluster:'B',ambient:'office_quiet_low',scenario:'A boss reviews policy outreach with his manager',cast:['hiroshi_boss','kenji_office'],targets:B_T,lines:[
    {speaker:'hiroshi_boss',jp:'今週のトピックス、農林省の発表が大きいな。',en:"This week's main topic — the agriculture ministry's announcement is big.",style:'Boss leafing through brief.'},
    {speaker:'kenji_office',jp:'はい。業界リーディング企業として、こちらの見解も出した方がいいかと。',en:"Yes. As an industry-leading firm, I think we should also issue our stance.",style:'Methodical manager.'},
    {speaker:'hiroshi_boss',jp:'駅前のプラザで開かれる説明会、参加するか?',en:"That briefing at the station plaza — should we attend?",style:'Quick decision check.'},
    {speaker:'kenji_office',jp:'参加して、ビラも配布する方向で準備しています。',en:"We plan to attend and hand out flyers as well.",style:'Confident update.'},
    {speaker:'hiroshi_boss',jp:'ビジネスマン向けの内容に絞れ。ナショナリズム的な煽りは避けろ。',en:"Narrow it to content for businesspeople. Avoid nationalist framing.",style:'Clear instruction.'},
    {speaker:'kenji_office',jp:'承知しました。請願書の文面も、中立で押し通します。',en:"Understood. I'll keep the petition wording neutral throughout.",style:'Crisp commitment.'},
    {speaker:'hiroshi_boss',jp:'頼む。',en:"Please.",style:'Brief close.'},
  ]},
  {id:'conv_05287',cluster:'B',ambient:'office_quiet_low',scenario:'Two managers prep a public-affairs event',cast:['yuki_office','kenji_office'],targets:B_T,lines:[
    {speaker:'yuki_office',jp:'土曜のプラザ前イベント、ビラ、何部刷る?',en:"Saturday's plaza event — how many flyers do we print?",style:'Co-manager prep.'},
    {speaker:'kenji_office',jp:'参加企業がリーディング十社揃うので、三千部用意します。',en:"Ten leading firms join, so I'll prep three thousand.",style:'Plan readout.'},
    {speaker:'yuki_office',jp:'農林省からの登壇者、話のトピックス絞っておこう。',en:"For the ag-ministry speaker, let's narrow their talking points.",style:'Strategic teammate.'},
    {speaker:'kenji_office',jp:'はい。ビジネスマン向けに、政策の実務面を中心に。',en:"Yes. Aimed at businesspeople, centered on policy practicalities.",style:'Detail-aware.'},
    {speaker:'yuki_office',jp:'ナショナリズム色のある表現は、広報部から修正依頼が来てる。',en:"Anything with nationalist flavor — PR has asked for tweaks.",style:'Cautionary update.'},
    {speaker:'kenji_office',jp:'対応済みです。市民団体の請願書も、別ブースで受け付けます。',en:"Already handled. We're taking citizen-group petitions at a separate booth.",style:'Procedural detail.'},
    {speaker:'yuki_office',jp:'万全だね。じゃあ前日リハで最終確認しよ。',en:"All set then. Final check at tomorrow's dress rehearsal.",style:'Decisive close.'},
  ]},
  {id:'conv_05288',cluster:'B',ambient:'office_quiet_low',scenario:'A uni intern interviews a manager about industry advocacy',cast:['ren_uni','yuki_office'],targets:B_T,lines:[
    {speaker:'ren_uni',jp:'業界のリーディング企業として、政策に対してはどう動きますか。',en:"As an industry-leading firm, how do you move on policy?",style:'Polite intern.'},
    {speaker:'yuki_office',jp:'農林省や経産省への請願書、定期的に出しています。',en:"We regularly file petitions with the agriculture and METI ministries.",style:'Manager candid.'},
    {speaker:'ren_uni',jp:'駅前プラザの説明会で配るビラ、内容はどなたが書くんですか。',en:"The flyers handed out at the station-plaza briefing — who writes the content?",style:'Earnest follow-up.'},
    {speaker:'yuki_office',jp:'広報部のビジネスマン経験者が中心です。表現には注意します。',en:"Mostly businesspeople-veterans from PR. We mind the wording.",style:'Helpful explanation.'},
    {speaker:'ren_uni',jp:'政策のトピックスとして、最近気になる動きはありますか。',en:"As a policy topic, are there moves catching your eye lately?",style:'Curious student.'},
    {speaker:'yuki_office',jp:'ナショナリズムを煽らないバランス感覚が、いま一番難しい課題です。',en:"Avoiding nationalist incitement while staying balanced is the hardest current issue.",style:'Honest close.'},
    {speaker:'ren_uni',jp:'記事に反映させていただきます。ありがとうございます。',en:"I'll reflect that in the article. Thank you.",style:'Grateful close.'},
  ]},
  {id:'conv_05289',cluster:'B',ambient:'cafe_quiet_chatter',scenario:'A retired exec mentors a younger boss on government relations',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,lines:[
    {speaker:'hiroshi_elder',jp:'昔、私も農林省の局長たちと、よく駅前プラザで立ち話したよ。',en:"Long ago, I often had standing chats with ag-ministry directors at the station plaza.",style:'Nostalgic elder.'},
    {speaker:'hiroshi_boss',jp:'今もそういう関係、大事なんでしょうね。',en:"That kind of relationship still matters today, I imagine.",style:'Respectful younger.'},
    {speaker:'hiroshi_elder',jp:'うん。請願書を出す前に、現場のビジネスマンと話を詰めるのが基本だ。',en:"Yes. Before filing petitions, hash it out with the on-the-ground businesspeople.",style:'Sage advice.'},
    {speaker:'hiroshi_boss',jp:'今週のトピックスにも、関連する話題が出ています。',en:"This week's topics include related issues.",style:'Engaged.'},
    {speaker:'hiroshi_elder',jp:'ナショナリズム的な空気に流されるな。冷静なリーディングを心がけろ。',en:"Don't drift with nationalist moods. Aim for cool-headed leadership.",style:'Stern guidance.'},
    {speaker:'hiroshi_boss',jp:'はい。ビラの配り方も、丁寧に教える側を意識します。',en:"Yes. I'll keep the flyer distribution side mindful — like instructing politely.",style:'Earnest commitment.'},
    {speaker:'hiroshi_elder',jp:'よし。頑張れ。',en:"Good. Carry on.",style:'Warm close.'},
  ]},
  {id:'conv_05290',cluster:'B',ambient:'office_quiet_low',scenario:'A police officer briefs a uni reporter about a rally permit',cast:['takeda_officer','ren_uni'],targets:B_T,lines:[
    {speaker:'takeda_officer',jp:'駅前プラザでの集会、申請内容を確認しますね。',en:"The rally at the station plaza — let me confirm the application.",style:'Procedural officer.'},
    {speaker:'ren_uni',jp:'はい。請願書の提出と、ビラの配布が主な活動です。',en:"Yes. Filing a petition and distributing flyers are the main activities.",style:'Polite intern.'},
    {speaker:'takeda_officer',jp:'今週のトピックスとして、農林省への陳情ですね。',en:"As this week's topic, it's an appeal to the agriculture ministry, correct.",style:'Steady officer voice.'},
    {speaker:'ren_uni',jp:'はい。ナショナリズム色の強い演出はしないと、主催者は明言しています。',en:"Yes. The organizers explicitly state they avoid heavy nationalist staging.",style:'Earnest student.'},
    {speaker:'takeda_officer',jp:'リーディング企業の関係者も招待しているとか。',en:"I hear they're inviting people from leading firms too.",style:'Calm clarification.'},
    {speaker:'ren_uni',jp:'はい。ビジネスマンの参加が、地域経済にもプラスになると見込んでいます。',en:"Yes. Businesspeople participation is expected to benefit the local economy.",style:'Informed answer.'},
    {speaker:'takeda_officer',jp:'分かりました。許可、明日朝に出ます。',en:"Understood. Permission will issue tomorrow morning.",style:'Procedural close.'},
  ]},

  {id:'conv_05291',cluster:'C',ambient:'lecture_hall_quiet',scenario:'A teacher walks a uni student through a religion-and-state paper',cast:['asuka_teacher','ren_uni'],targets:C_T,lines:[
    {speaker:'asuka_teacher',jp:'論文、中世東部地域の宗教史を扱うんですね。',en:"Your paper covers medieval religious history in the eastern region.",style:'Calm teacher.'},
    {speaker:'ren_uni',jp:'はい。神戸大の先行研究を引用しつつ、自分の視点も加えます。',en:"Yes. I'll cite Kobe University's prior work while adding my own angle.",style:'Earnest student.'},
    {speaker:'asuka_teacher',jp:'十字架のモチーフが、当時の権力構造とどう絡んだか、面白い切り口です。',en:"How the cross motif intertwined with power structures then — interesting angle.",style:'Engaged mentor.'},
    {speaker:'ren_uni',jp:'当時の暦は日月の運行に厳格で、行事もそれに連動していました。',en:"Calendars then strictly followed sun-moon cycles, with rituals linked accordingly.",style:'Confident detail.'},
    {speaker:'asuka_teacher',jp:'人事院の前身組織が、宗教官をどう扱ったかも触れると深まります。',en:"Touching on how the personnel-board predecessor handled religious officers will deepen it.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'なるほど。智の象徴と権力の象徴、両方が山の峰みたいに並んでいた構造ですね。',en:"I see. Symbols of wisdom and power stood side by side like mountain peaks.",style:'Synthesizing student.'},
    {speaker:'asuka_teacher',jp:'いい比喩。陰謀論にならないよう、史料の解釈は慎重に。',en:"Nice metaphor. Stay careful with source interpretation so it doesn't slide into conspiracy.",style:'Caution close.'},
  ]},
  {id:'conv_05292',cluster:'C',ambient:'office_quiet_low',scenario:'A boss and his manager discuss a long-form policy column',cast:['hiroshi_boss','kenji_office'],targets:C_T,lines:[
    {speaker:'hiroshi_boss',jp:'この記事、東部地域での政策運用の偏りを取り上げているな。',en:"This article addresses the policy-implementation bias in the eastern region.",style:'Boss reading.'},
    {speaker:'kenji_office',jp:'はい。神戸大の研究者がデータ提供しています。',en:"Yes. A Kobe University researcher provided the data.",style:'Crisp brief.'},
    {speaker:'hiroshi_boss',jp:'人事院の異動データと突き合わせると、構造が見えてくる。',en:"Cross-referencing the personnel-board transfer data, the structure starts showing.",style:'Analytical.'},
    {speaker:'kenji_office',jp:'山の峰のように、いくつかの拠点に権限が集中している印象です。',en:"Like mountain peaks, authority seems concentrated at a few hubs.",style:'Vivid observation.'},
    {speaker:'hiroshi_boss',jp:'十字架を背負った担当者がいないか、紙面で示唆していたな。',en:"The piece hinted at officials carrying their own crosses, didn't it.",style:'Critical aside.'},
    {speaker:'kenji_office',jp:'日月の歩みの中で、智の蓄積も評価ポイントになっているようです。',en:"In the long passage of time, the accumulation of wisdom seems to factor into evaluations too.",style:'Literary nod.'},
    {speaker:'hiroshi_boss',jp:'良し。陰謀論に流されない記事だ。来週の朝会で取り上げよう。',en:"Good. The article doesn't fall into conspiracy. Let's discuss it at next week's morning meeting.",style:'Decisive close.'},
  ]},
  {id:'conv_05293',cluster:'C',ambient:'office_quiet_low',scenario:'A police officer briefs a uni reporter about archive holdings',cast:['takeda_officer','ren_uni'],targets:C_T,lines:[
    {speaker:'takeda_officer',jp:'当館の資料、東部関連のものが特に多いです。',en:"Our archives have especially many materials related to the eastern region.",style:'Calm guide.'},
    {speaker:'ren_uni',jp:'神戸大の歴史学科とも、過去に共同調査をしたとお聞きしました。',en:"I heard you did joint surveys with Kobe University's history department in the past.",style:'Polite student.'},
    {speaker:'takeda_officer',jp:'はい。人事院の制度史も、断片的に資料が残っています。',en:"Yes. Personnel-board institutional history remains in scattered records too.",style:'Informative.'},
    {speaker:'ren_uni',jp:'宗教関連の遺物、十字架のレプリカもあるんですね。',en:"There are religious artifacts too — even cross replicas.",style:'Impressed.'},
    {speaker:'takeda_officer',jp:'時代によって、日月の周期に合わせた装飾も加わります。',en:"Depending on the era, decorations match the sun-moon cycles too.",style:'Detail.'},
    {speaker:'ren_uni',jp:'峰のように一族の系譜が並ぶ家系図、智の継承を感じます。',en:"Family trees lined up like peaks, conveying the inheritance of wisdom.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'陰謀論扱いされる箇所もあるので、引用は慎重に願います。',en:"Some areas get treated as conspiracy, so quote carefully please.",style:'Procedural close.'},
  ]},
  {id:'conv_05294',cluster:'C',ambient:'living_room_quiet',scenario:'A uni student interviews a retired historian at home',cast:['hiroshi_elder','ren_uni'],targets:C_T,lines:[
    {speaker:'ren_uni',jp:'先生は東部地域の中世史が御専門でしたよね。',en:"Sensei, your specialty was medieval history of the eastern region, right?",style:'Earnest opener.'},
    {speaker:'hiroshi_elder',jp:'うん。神戸大で四十年、教えていたよ。',en:"Yes. I taught at Kobe University for forty years.",style:'Warm elder.'},
    {speaker:'ren_uni',jp:'十字架の伝播経路、独自の説をお持ちと伺いました。',en:"You apparently have an original theory on the cross's transmission path.",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'当時の人事院の前身が、宗教官の異動も握っていたんだ。',en:"Back then, the personnel-board's predecessor also controlled religious-officer transfers.",style:'Insightful.'},
    {speaker:'ren_uni',jp:'日月の運行と祭礼の関係、面白いですよね。',en:"The link between sun-moon movement and ceremonies is fascinating.",style:'Engaged.'},
    {speaker:'hiroshi_elder',jp:'山の峰々が境界となって、地域ごとに独自の智が育った。',en:"Mountain peaks served as borders, letting local wisdom develop region by region.",style:'Veteran reflection.'},
    {speaker:'ren_uni',jp:'陰謀論にならない範囲で、論文に反映させていただきます。',en:"I'll reflect it in my paper, staying clear of conspiracy framing.",style:'Respectful close.'},
  ]},
  {id:'conv_05295',cluster:'C',ambient:'clinic_quiet',scenario:'A doctor explains medical history facts to a curious teen',cast:['saito_doctor','sakura_teen'],targets:C_T,lines:[
    {speaker:'saito_doctor',jp:'桜さん、東部の医学校で十九世紀に伝染病対策が始まったのを知ってる?',en:"Sakura, did you know in the eastern region a 19th-century medical school began epidemic control?",style:'Friendly opener.'},
    {speaker:'sakura_teen',jp:'神戸大が前身だったって、保健の授業で聞きました。',en:"In health class I heard Kobe University was its predecessor.",style:'Eager teen.'},
    {speaker:'saito_doctor',jp:'人事院ができる前から、軍医の派遣体制が整っていたんです。',en:"Before the personnel board existed, military-doctor dispatch systems were already organized.",style:'Patient educator.'},
    {speaker:'sakura_teen',jp:'十字架マークの救護所って、ヨーロッパからの輸入文化ですよね。',en:"Cross-marked aid stations were imported culture from Europe, right?",style:'Curious teen.'},
    {speaker:'saito_doctor',jp:'その通り。日月の運行に合わせて感染症の発生時期を予測する地域もありました。',en:"Right. Some regions even predicted epidemic timing by sun-moon cycles.",style:'Engaging fact.'},
    {speaker:'sakura_teen',jp:'峰を越えた村まで救護に行く話、智の結晶ですね。',en:"Carrying aid even across the peaks to remote villages — a crystallization of wisdom.",style:'Moved teen.'},
    {speaker:'saito_doctor',jp:'まさに。陰謀論で語られる時代もあったけれど、丁寧に資料を読むと見えてくる。',en:"Exactly. The era was sometimes spun into conspiracy, but careful reading reveals the truth.",style:'Wise close.'},
  ]},

  {id:'conv_05296',cluster:'D',ambient:'street_quiet_distant',scenario:'Two teens swap exchange-trip dreams',cast:['sakura_teen','riku_teen'],targets:D_T,lines:[
    {speaker:'sakura_teen',jp:'夏休み、シドニーの語学カレッジ申し込んでみたよ。',en:"For summer, I applied to a language college in Sydney.",style:'Excited teen pitch.'},
    {speaker:'riku_teen',jp:'マジか。うちの女子高、留学制度あったっけ?',en:"For real? Did our girls' high have an exchange program?",style:'Surprised teen.'},
    {speaker:'sakura_teen',jp:'うちの分校が栃木にあって、姉妹校提携の関係で枠があるんだって。',en:"Our branch is in Tochigi, and through sister-school ties there are slots.",style:'Informative teen.'},
    {speaker:'riku_teen',jp:'いいなあ。俺、和歌山のおばあちゃん家、夏は薫る梅の香りが最高なんだ。',en:"Nice. My grandma's place in Wakayama smells amazing with plum scent in summer.",style:'Warm reminisce.'},
    {speaker:'sakura_teen',jp:'梅の香りいいね。シドニーで美術館行って、ダ・ヴィンチ展も見るつもり。',en:"Plum scent's lovely. In Sydney I'll hit a museum and see a da Vinci exhibition.",style:'Bright plan.'},
    {speaker:'riku_teen',jp:'おお、本格的。お土産はヤング系の雑誌とかでいいから。',en:"Whoa, serious. Souvenir-wise, a young-style mag is fine.",style:'Casual teen.'},
    {speaker:'sakura_teen',jp:'了解!帰国したら和歌山も連れてって。',en:"Got it! When I'm back, take me to Wakayama too.",style:'Friendly close.'},
  ]},
  {id:'conv_05297',cluster:'D',ambient:'cafe_quiet_chatter',scenario:'Two cafe friends compare summer holiday dreams',cast:['aoi_barista','mei_romantic'],targets:D_T,lines:[
    {speaker:'aoi_barista',jp:'お盆休み、和歌山の梅農園、行く予定。',en:"For Obon, planning to visit a plum farm in Wakayama.",style:'Soft barista pitch.'},
    {speaker:'mei_romantic',jp:'いいね、薫る梅の季節!私はシドニーのカフェ巡りに憧れてる。',en:"Nice — the season when plums scent the air! I dream of cafe-hopping in Sydney.",style:'Dreamy.'},
    {speaker:'aoi_barista',jp:'女子高時代の友達がシドニーのカレッジに通ってて、案内してくれるって。',en:"My girls'-high friend goes to a college in Sydney and offered to show me around.",style:'Warm anecdote.'},
    {speaker:'mei_romantic',jp:'羨ましい。私は栃木の温泉で、ダ・ヴィンチ風の風景画を描こうかな。',en:"Lucky. I might go to a Tochigi hot spring and paint da Vinci-style landscapes.",style:'Soft dreamy.'},
    {speaker:'aoi_barista',jp:'ヤング世代の旅、SNSで映える写真も大事よね。',en:"Young-generation trips — Instagrammable photos matter too.",style:'Bright laugh.'},
    {speaker:'mei_romantic',jp:'うん。お土産交換、楽しみにしてる。',en:"Yeah. Looking forward to swapping souvenirs.",style:'Warm close.'},
  ]},
  {id:'conv_05298',cluster:'D',ambient:'cafe_quiet_chatter',scenario:'A uni student helps a teen friend pick a summer program',cast:['ren_uni','sakura_teen'],targets:D_T,lines:[
    {speaker:'sakura_teen',jp:'先輩、夏のプログラム、シドニーと栃木と和歌山で迷ってるんです。',en:"Senpai, summer program — torn between Sydney, Tochigi, and Wakayama.",style:'Confiding teen.'},
    {speaker:'ren_uni',jp:'なるほど。女子高のレベル感を考えると、シドニーのカレッジは結構ハードだぞ。',en:"I see. Given your girls'-high level, the Sydney college is pretty intense.",style:'Honest senpai.'},
    {speaker:'sakura_teen',jp:'ダ・ヴィンチの展示があるから、美術部の私としては魅力的で。',en:"There's a da Vinci exhibition, and as an art-club member, that's appealing.",style:'Eager teen.'},
    {speaker:'ren_uni',jp:'なら栃木のサマースクールも候補に。森の薫りで集中できるって評判。',en:"Then consider a Tochigi summer school too. Famous for forest-scent focus.",style:'Practical advice.'},
    {speaker:'sakura_teen',jp:'和歌山は親戚の家がある!ヤング向けの祭りもあるって聞いた。',en:"Wakayama has relatives' house! Heard there's a young-people festival too.",style:'Excited.'},
    {speaker:'ren_uni',jp:'予算と目的で選ぼう。一緒に資料、ざっと整理する?',en:"Choose by budget and goal. Want me to help sort the materials briefly?",style:'Warm offer.'},
    {speaker:'sakura_teen',jp:'お願いします!',en:"Please!",style:'Bright close.'},
  ]},
  {id:'conv_05299',cluster:'D',ambient:'living_room_quiet',scenario:'A married couple plans a family summer trip',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,lines:[
    {speaker:'yumiko_mom',jp:'今年の夏、和歌山の梅農園、家族で行きたいな。',en:"This summer, I want the family to go to a Wakayama plum farm.",style:'Warm wife pitch.'},
    {speaker:'ryosuke_dad',jp:'いいね。新緑の薫る山道、ドライブが気持ちいいだろう。',en:"Sounds good. The mountain road with fresh-green fragrance — driving will be pleasant.",style:'Easy husband.'},
    {speaker:'yumiko_mom',jp:'娘が女子高で行ったシドニー修学旅行の写真、まだ見せてもらってないよ。',en:"Our daughter's girls'-high Sydney school trip — we haven't seen the photos yet.",style:'Mother gentle reminder.'},
    {speaker:'ryosuke_dad',jp:'今度の旅行で見せてもらおう。栃木の親戚も誘うか?',en:"Let's see them on the trip. Invite our Tochigi relatives too?",style:'Cheerful dad.'},
    {speaker:'yumiko_mom',jp:'ぜひ。子供たちも、ヤング世代の従兄弟と遊べるし。',en:"Yes please. The kids can play with their young-gen cousins.",style:'Warm mother.'},
    {speaker:'ryosuke_dad',jp:'夜は地元の美術館でダ・ヴィンチ展、ちょうど巡回中だってよ。',en:"Evenings — local museum has a touring da Vinci exhibition right now.",style:'Casual update.'},
    {speaker:'yumiko_mom',jp:'家族向けカレッジ風プログラムもあるって聞いた、楽しみ。',en:"Heard there's a college-style family program too — exciting.",style:'Happy close.'},
  ]},
  {id:'conv_05300',cluster:'D',ambient:'cafe_quiet_chatter',scenario:'A Kansai chef and a barista swap summer destination talk',cast:['daichi_kansai','aoi_barista'],targets:D_T,lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、夏休みどこ行くん?',en:"Aoi-san, where are you going for summer break?",style:'Friendly Kansai opener.'},
    {speaker:'aoi_barista',jp:'和歌山の梅農園です。薫る季節がたまらなくて。',en:"A Wakayama plum farm. The scented season is irresistible.",style:'Soft warmth.'},
    {speaker:'daichi_kansai',jp:'ええなあ。うちは栃木の温泉、家族と行くで。',en:"Lovely. We're going to a Tochigi hot spring with family.",style:'Warm Kansai.'},
    {speaker:'aoi_barista',jp:'お子さん、女子高生になったんでしたっけ。',en:"Your daughter — she became a girls'-high student, right?",style:'Friendly recall.'},
    {speaker:'daichi_kansai',jp:'そうそう。来年シドニーのカレッジ短期に行きたいって言うてんねん。',en:"Yep. She says she wants to do a short Sydney-college program next year.",style:'Proud Kansai.'},
    {speaker:'aoi_barista',jp:'素敵!ダ・ヴィンチ展もある時期だと、勉強と観光、両方できますよ。',en:"Wonderful! If she goes during the da Vinci-show period, she gets study and sightseeing.",style:'Knowledgeable tip.'},
    {speaker:'daichi_kansai',jp:'ヤング世代の経験は、一生の宝や。教えたるわ、ありがと。',en:"Young-gen experience is a lifetime treasure. I'll tell her, thanks.",style:'Warm close.'},
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
    id: r.id,
    context: r.scenario,
    purpose: 'Teach: ' + r.targets.join('/'),
    ambient: r.ambient,
    sound_effects: [],
    target_vocab: targetVocab,
    cast: r.cast,
    frequency_tier: 4,
    length_tier: lengthLabel(lines.length),
    meta: META,
    lines,
  }
  fs.writeFileSync(path.join(OUT_DIR, `${r.id}.json`), JSON.stringify(conv, null, 2) + '\n')
  written++
}
console.log('wrote', written)
if (stillMissing.length) console.log('STILL_MISSING', JSON.stringify(stillMissing, null, 2))

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_297 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['佑','ケイ','オイラ','毎度','意地','過ち','泡','お出かけ']
const B_T = ['晋','炉','包装','試みる','封筒','簡素','直結','軽視']
const C_T = ['麻酔','化石','慢性','申し立て','賞賛','予期','偏っ','迄']
const D_T = ['アルゴリズム','ベビー','プリンタ','木々','鳩','泳い','峠','トス']

const data = [
  // A
  {id:'conv_05901',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends gossip about classmates',lines:[
    {speaker:'mei_romantic',jp:'昨日、佑くんとケイちゃん、駅前で見かけたの。',en:"Yesterday, saw Yu-kun and Kei-chan by the station.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'オイラ、二人をよく見かけるんだよね、最近。',en:"I see those two around often lately.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'毎度、お買い物デート、楽しそうよね。',en:"Every time — shopping dates, look fun.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'付き合いたての意地もあって、なかなか別れないよ。',en:"New-couple stubbornness — won't split easily.",style:'Knowing.'},
    {speaker:'mei_romantic',jp:'過去の過ち、お互い乗り越えてるみたい。',en:"Looks like they've moved past mistakes.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'コーヒーの泡、上手にできた?',en:"Foam on the coffee — turned out well?",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'うん。今度のお出かけ、二人と一緒に行く?',en:"Yes. Next outing — together with them?",style:'Warm close.'},
    {speaker:'aoi_barista',jp:'是非!',en:"Absolutely!",style:'Bright close.'},
  ]},
  {id:'conv_05902',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat after a play date',lines:[
    {speaker:'sho_child',jp:'ママ、今日、佑くんち行ってきた。ケイちゃんも来てた。',en:"Mom, went to Yu-kun's today. Kei-chan was there too.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'楽しかった?「オイラ」って言葉、覚えたの?',en:"Fun? Pick up the word 'oira'?",style:'Warm.'},
    {speaker:'sho_child',jp:'うん!毎度の遊びに、新しいルール作って楽しんだ。',en:"Yes! Every time we add new rules and have fun.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'意地を張らずに、皆で仲良くね。',en:"No stubbornness — get along.",style:'Tender.'},
    {speaker:'sho_child',jp:'けんかになりそうな過ちもあったけど、すぐ謝った。',en:"Almost had a fight-mistake, but apologized fast.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'お風呂の泡、いっぱい立てて、リラックスしてね。',en:"Lots of bath foam — relax.",style:'Soft.'},
    {speaker:'sho_child',jp:'明日のお出かけ、楽しみ!',en:"Tomorrow's outing — excited!",style:'Bright close.'},
  ]},
  {id:'conv_05903',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat after school',lines:[
    {speaker:'sakura_teen',jp:'同じクラスの佑くん、引っ越したんだって。',en:"Classmate Yu moved away.",style:'Wistful teen.'},
    {speaker:'riku_teen',jp:'え、本当?ケイは、知ってるかな。',en:"Really? Does Kei know?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'オイラはまだ聞いてないよ、って言ってた。',en:"He said \"I haven't heard yet.\"",style:'Animated.'},
    {speaker:'riku_teen',jp:'毎度、別れの季節は寂しいな。',en:"Every farewell season is lonely.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'意地を張らずに、連絡先交換しておけばよかった。',en:"Should've swapped contacts without being stubborn.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'過ちは、これからの行動で取り戻せ。',en:"Mistakes — make up via future actions.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'帰り、シェイクの泡、たくさん飲もう。',en:"On the way back, lots of milkshake foam.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'週末、皆でお出かけしよう。',en:"Weekend — all of us out together.",style:'Warm close.'},
  ]},
  {id:'conv_05904',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'昔の家族写真、佑のうちと、ケイの家、並んでたな。',en:"Old family photos — Yu's home and Kei's, side by side.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'当時、私たちは「オイラとあんた」みたいに呼び合ってた。',en:"Back then — called each other \"oira and anata.\"",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'毎度、近所の集まりが、賑やかでね。',en:"Every time, neighborhood gatherings were lively.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'意地を張った若い日々、思い出すわ。',en:"Stubborn youthful days — remembered.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'過ちもあったが、二人で乗り越えた。',en:"Mistakes too, but overcome together.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'シャンパンの泡、結婚式、覚えてる?',en:"Champagne foam at the wedding — remember?",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'明日、温泉にお出かけしようか。',en:"Tomorrow — onsen outing?",style:'Bright close.'},
  ]},
  {id:'conv_05905',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai walks a teen home and chats',lines:[
    {speaker:'ren_uni',jp:'桜、サークルの佑、ケイ、新入生として歓迎したよ。',en:"Sakura, our club welcomed Yu and Kei as freshmen.",style:'Easy senpai.'},
    {speaker:'sakura_teen',jp:'オイラ、覚えてない人多くて、と謙遜してましたね。',en:"He humbly said \"oira don't remember many\".",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'毎度、新入生は緊張するもんだ。',en:"Every time, freshmen get nervous.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'意地で笑顔を作るのも、ちょっと疲れる時ありますね。',en:"Forcing a smile out of pride is sometimes tiring.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'過ちを恐れず、ありのままで来ればいい。',en:"Don't fear mistakes — come as you are.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'歓迎会で、ジュースの泡、二人とも嬉しそうでした。',en:"At the welcome — both glad about the juice foam.",style:'Bright.'},
    {speaker:'ren_uni',jp:'週末、サークルでお出かけ、誘ってあげよう。',en:"Weekend — invite them out via the club.",style:'Warm close.'},
  ]},

  // B
  {id:'conv_05906',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a product-launch plan',lines:[
    {speaker:'hiroshi_boss',jp:'新商品、晋一郎が主担当だな。',en:"New product — Shin-ichiro leads.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。製造現場の電気炉、最新型に更新済みです。',en:"Yes. Plant electric furnace — updated to latest.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'包装デザイン、簡素を意識しろ。',en:"Packaging design — strive for simplicity.",style:'Direction.'},
    {speaker:'kenji_office',jp:'試みるサンプル、封筒に入れて役員に配布します。',en:"Trial samples — distribute in envelopes to execs.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'技術と販売が直結する設計だ。市場の声を軽視するな。',en:"Tech and sales are directly tied. Don't dismiss the market.",style:'Decisive close.'},
  ]},
  {id:'conv_05907',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss factory ops',lines:[
    {speaker:'yuki_office',jp:'晋さん、現場運営、引き続きよろしく。',en:"Shin-san, keep running the field, please.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。古い炉、保守を試みる予定です。',en:"Yes. Old furnace — attempting maintenance.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'包装ラインも、簡素な構成に変更を。',en:"Packaging line — also shift to simpler config.",style:'Direction.'},
    {speaker:'kenji_office',jp:'監査資料、封筒で発送、データは社内システムに直結させます。',en:"Audit materials — mailed in envelopes; data routed to internal system.",style:'Update.'},
    {speaker:'yuki_office',jp:'労務管理、軽視しないように。',en:"Don't dismiss labor management.",style:'Close.'},
  ]},
  {id:'conv_05908',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern on manufacturing',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、晋一郎工場長と、現場を歩こう。',en:"Ren, let's walk the floor with Plant-Manager Shin-ichiro.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。電気炉の温度管理、勉強したいです。',en:"Yes. Want to study electric-furnace temperature control.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'包装の試みる新案、君にも意見を求める。',en:"Packaging — new attempts, want your input.",style:'Direction.'},
    {speaker:'ren_uni',jp:'封筒型の試作、簡素ですが、機能的ですね。',en:"Envelope-form prototype is simple yet functional.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'IT連携、製造データを直結させる時代だ。軽視するな。',en:"IT linkage — direct manufacturing data is the era. Don't dismiss.",style:'Direction close.'},
  ]},
  {id:'conv_05909',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on factory safety',lines:[
    {speaker:'takeda_officer',jp:'晋さんの工場、電気炉の検査記録、共有頂きました。',en:"Plant Shin-san — electric-furnace inspection records shared.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。包装ラインの安全策、試みる新指針もあります。',en:"Yes. Packaging-line safety — also a new trial guideline.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'郵送はやめ、警察封筒で直接届けてください。',en:"Drop the mail; deliver in police envelopes direct.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'簡素なフォーマット、警察システムに直結させて運用します。',en:"Simpler format — directly tied to police systems.",style:'Update.'},
    {speaker:'takeda_officer',jp:'安全を軽視しないで、お願いします。',en:"Don't dismiss safety. Please.",style:'Firm close.'},
  ]},
  {id:'conv_05910',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a current boss',lines:[
    {speaker:'hiroshi_elder',jp:'晋一郎、若い頃から器が大きかった。',en:"Shin-ichiro — broad-minded since youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。今、電気炉の最新化を進めてくれています。',en:"Yes. He's leading the electric-furnace modernization.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'包装の試みる工夫、市場で評価されているか。',en:"Packaging innovations — well received in the market?",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。簡素ながら機能的、封筒の試作も話題です。',en:"Yes. Simple yet functional, envelope prototypes get buzz.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'技術と市場、直結を忘れるな。需要を軽視すれば終わる。',en:"Don't forget the tech-market link. Dismiss demand, you end.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05911',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor explains anesthesia to a reporter',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、麻酔の歴史、化石的な手法から現代まで、興味深いですよ。',en:"Ren, anesthesia history — from fossil-era methods to modern, intriguing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'慢性疾患の患者にも、配慮された麻酔があるんですね。',en:"Chronic-disease patients get specialized anesthesia, then.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。事前申し立てを患者にしてもらう運用、徹底しています。',en:"Yes. Patient pre-statements — strictly required.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療界の賞賛、独自の手法を持つ先生方に集まりますね。',en:"Medical praise gathers to doctors with unique methods.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'予期せぬ反応、データ偏った時期もあり、改善を重ねています。',en:"Unexpected reactions, biased-data periods — we keep improving.",style:'Informative.'},
    {speaker:'ren_uni',jp:'江戸時代迄遡る研究もあるとか。',en:"Research reaching back to the Edo era, too.",style:'Curious close.'},
    {speaker:'saito_doctor',jp:'はい、歴史は深いです。',en:"Yes — deep history.",style:'Reflective close.'},
  ]},
  {id:'conv_05912',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a paleo-medicine paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、化石記録から麻酔の原型を探る視点、独創的ですね。',en:"Paper — seeking anesthesia origins in fossil records, original.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。慢性疾患の治療法、古代の証拠も探しました。',en:"Yes. Searched for chronic-illness treatment evidence in ancient sources too.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'申し立てがない場合の倫理、丁寧に章を立てています。',en:"Ethics of unconsented cases — chapter built carefully.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'査読者の賞賛、予期していました。',en:"Reviewer praise — I anticipated.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'偏った解釈を避けるため、近世迄の文献、丹念に追っていますね。',en:"To avoid biased reading, you tracked sources up to the early-modern era.",style:'Reflective close.'},
  ]},
  {id:'conv_05913',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a reporter about a medical-fraud case',lines:[
    {speaker:'takeda_officer',jp:'医療詐欺、麻酔薬の不正流通、増えています。',en:"Medical fraud — illegal anesthesia trade is rising.",style:'Calm.'},
    {speaker:'ren_uni',jp:'化石的な手口だけでなく、新手も?',en:"Not just old methods — new ones too?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。慢性的な需要を悪用し、被害者から申し立てが相次いでいます。',en:"Yes. Exploiting chronic demand; victim statements piling up.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察の対応、賞賛の声、医療界からも届いてますね。',en:"Police response — medical-world praise reaching too.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'予期しない手口、データが偏った時期もあり、捜査は粘り強く。',en:"Unexpected MOs, biased-data periods — investigations are persistent.",style:'Informative.'},
    {speaker:'ren_uni',jp:'公訴時効迄、捜査続けるんですね。',en:"Investigation continues until the statute runs.",style:'Curious close.'},
    {speaker:'takeda_officer',jp:'はい。',en:"Yes.",style:'Firm close.'},
  ]},
  {id:'conv_05914',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains chronic pain to a teen patient',lines:[
    {speaker:'saito_doctor',jp:'桜さん、長引く痛み、慢性として扱います。',en:"Sakura, prolonged pain is treated as chronic.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'麻酔系のお薬、必要になるんですか。',en:"Will anesthesia-class meds be needed?",style:'Worried teen.'},
    {speaker:'saito_doctor',jp:'状況次第です。化石みたいに古い記録を持ち出して、最新の研究と比較します。',en:"Depends. We compare fossil-old records to current research.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'保険の申し立てしないと、自費ですか。',en:"Without an insurance claim, all out-of-pocket?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'家族と相談を。賞賛されるべきは、家族のサポートです。',en:"Discuss with family. What deserves praise is their support.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'予期していなかったので、少し不安です。',en:"Didn't expect this; a bit anxious.",style:'Vulnerable.'},
    {speaker:'saito_doctor',jp:'治療方針、偏った情報に流されず、検査結果迄、丁寧に追います。',en:"Treatment plan — not swayed by biased info; will follow up to test results carefully.",style:'Reassuring close.'},
  ]},
  {id:'conv_05915',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a corporate medical-CSR program',lines:[
    {speaker:'hiroshi_boss',jp:'社員健康診断、麻酔含む手術歴のフォローを徹底させろ。',en:"Staff checkups — strict follow-up on anesthesia-involved surgical histories.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。慢性疾患の対象者、化石的なシステムからリニューアル中です。',en:"Yes. Chronic-disease tracking — moving from fossil-era system to renewed.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'労災申し立て、過去の事例、適切に処理しろ。',en:"Workplace-injury claims — past cases handled properly.",style:'Direction.'},
    {speaker:'kenji_office',jp:'制度改正への賞賛、メディアからも届いています。',en:"Praise for the reforms — from media too.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'予期せぬ事象、データが偏った時期の検証も、年度末迄に。',en:"Unexpected events, biased-data audits — by year-end.",style:'Decisive close.'},
  ]},

  // D
  {id:'conv_05916',cluster:'D',ambient:'office_quiet_low',cast:['ren_uni','hiroshi_boss'],targets:D_T,scenario:'A uni intern profiles a tech engineer for a corporate magazine',lines:[
    {speaker:'ren_uni',jp:'蓮です。御社のAIエンジニアにインタビューさせてください。',en:"This is Ren. Interview your AI engineer, please.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'うん。新しいアルゴリズム、注目されているよ。',en:"Yes. New algorithm is getting attention.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'子育て世代向けの、ベビー用品事業にも応用されるんですか。',en:"Applied to baby-product business for parenting too?",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'うん。プリンタ周辺機器の最適化にも、活用している。',en:"Yes. Used in printer-peripheral optimization too.",style:'Informative.'},
    {speaker:'ren_uni',jp:'休日は、社員と木々の散策にも出掛けるんですか。',en:"On holidays — staff walks among trees too?",style:'Probe.'},
    {speaker:'hiroshi_boss',jp:'うん。公園では鳩に餌をやる人もいるし、夏は泳いでリフレッシュだ。',en:"Yes. Park — some feed pigeons; summer, swim to refresh.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'通勤途中の峠の景色、写真にしたいですね。',en:"Commute-pass view — want a photo.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'お土産、社内バレーボール部のトス練習用ボール、欲しい?',en:"Souvenir — in-house volleyball-club tossing-practice ball?",style:'Warm close.'},
  ]},
  {id:'conv_05917',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobby and tech',lines:[
    {speaker:'mei_romantic',jp:'SNSのアルゴリズム、最近、私の好み外してくる。',en:"SNS algorithm — recently misses my tastes.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'うん。私はベビー服のECも、合わないの出てくる。',en:"Yeah. Baby-clothes EC — sometimes mismatch too.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'家のプリンタ、買い替えたんだ。',en:"Bought a new home printer.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'公園の木々、新緑、きれいだよね。',en:"Park trees — new green's lovely.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'うん。鳩がいっぱい集まる広場、散歩したくなる。',en:"Yes. Square where pigeons gather — makes me want to walk.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'夏、近くのプールで泳いでリフレッシュしようよ。',en:"Summer — swim at the nearby pool to refresh.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'休日、峠のドライブも、また行きたい。',en:"Holiday — pass-road drive, wanna do again.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'バレーボールのトスみたいに、軽い気持ちで休もう。',en:"Like a volleyball toss — rest lightly.",style:'Warm close.'},
  ]},
  {id:'conv_05918',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss tech and nature',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、AIアルゴリズムと家庭応用、面白い切り口ですね。',en:"Ren, your paper — AI algorithm and home use, fresh angle.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。ベビーモニターやプリンタ連携、章として扱いました。',en:"Yes. Baby-monitor and printer-linkage — chapters.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'自然描写の章、近所の木々と鳩の観察、丁寧でしたね。',en:"Nature-description chapter — careful tree and pigeon observation.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'夏、川で泳いだ際、観察記録もとっていました。',en:"Summer, while swimming, kept observation logs too.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'峠越えの旅程、最終章のレポート、印象的でした。',en:"Pass-crossing itinerary — final-chapter report was striking.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'バレーボール部の遠征中、合間にトス練習も、合わせて書きました。',en:"During the volleyball-club trip, breaks had tossing-practice too — also written.",style:'Cheerful close.'},
  ]},
  {id:'conv_05919',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','sho_child'],targets:D_T,scenario:'A dad and son chat about hobbies',lines:[
    {speaker:'ryosuke_dad',jp:'翔、新しいゲーム、複雑なアルゴリズムが組まれてるな。',en:"Sho, new game has a complex algorithm.",style:'Easy dad.'},
    {speaker:'sho_child',jp:'うん!赤ちゃんの妹がベビーカーで一緒に観てくれた。',en:"Yeah! My baby sis joined in the stroller.",style:'Bright.'},
    {speaker:'ryosuke_dad',jp:'家のプリンタで、攻略本を印刷したぞ。',en:"Printed a strategy guide on the home printer.",style:'Calm.'},
    {speaker:'sho_child',jp:'休みの日、木々の散歩、楽しいね。',en:"Holiday — tree walks are fun.",style:'Animated.'},
    {speaker:'ryosuke_dad',jp:'公園の鳩、たくさん集まってたな。',en:"Park pigeons — many gathered.",style:'Reflective.'},
    {speaker:'sho_child',jp:'夏、プールで泳いで、また写真撮ろう!',en:"Summer pool swim — photos again!",style:'Eager.'},
    {speaker:'ryosuke_dad',jp:'秋、峠まで車で行って、紅葉を見るぞ。',en:"Autumn — drive to the pass, see foliage.",style:'Warm.'},
    {speaker:'sho_child',jp:'バレーのトス、もっと練習する。',en:"Toss practice — more.",style:'Bright close.'},
  ]},
  {id:'conv_05920',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an outdoor event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、夏のイベント、AIアルゴリズムで動線設計しよか。',en:"Aoi-san, summer event — design flows with AI algorithm.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。ベビーカー連れのお客さん用エリアも、忘れずに。',en:"Yes. Stroller-friendly area — don't forget.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'掲示物は、店のプリンタで作ろ。',en:"Posters — print at the shop printer.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'木々のある中庭、雰囲気あって、お客様喜びますよね。',en:"Tree-lined courtyard — atmospheric; guests'll love.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'鳩が来やすい場所やから、餌は控えてもらおか。',en:"Pigeons gather easily — let's ask no feeding.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'近くで泳いだ後の家族、休憩スペースで歓迎。',en:"Family resting after swimming — welcome at the rest area.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'峠越えで来店するお客さんも、長旅の慰労、せなな。',en:"Pass-traveling guests — long-trip refreshment, must offer.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'スタッフの動き、バレーのトスみたいに、軽快にね。',en:"Staff moves — like volleyball tosses, nimble.",style:'Cheerful close.'},
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

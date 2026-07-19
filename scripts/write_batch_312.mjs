import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_312 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['通わ','控える','弱気','夢見る','拭き','あける','走れる','気がかり']
const B_T = ['会報','受け継が','持論','定評','堅調','申し分','セグメント','第一人者']
const C_T = ['重なり','言い回し','輪郭','際立っ','押さえる','手腕','旧式','ずさん']
const D_T = ['煮込み','梅干','生姜','八百屋','盆栽','草木','別世界','締めくくり']

const data = [
  // A
  {id:'conv_06201',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ピアノ教室、まだ通わせてくれる?',en:"Mom, still letting me attend piano lessons?",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。お菓子、今日は控えるけどね。',en:"Yes. Sweets — restraining today though.",style:'Warm.'},
    {speaker:'sho_child',jp:'試験前、ちょっと弱気になっちゃう。',en:"Pre-test — get a bit timid.",style:'Vulnerable.'},
    {speaker:'yumiko_mom',jp:'ピアニストを夢見るって、素敵じゃない。',en:"Dreaming pianist — wonderful.",style:'Tender.'},
    {speaker:'sho_child',jp:'こぼした水、拭きました。',en:"Spilled water — wiped.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'明日、窓、あけて空気入れ替えようね。',en:"Tomorrow — open the windows, fresh air.",style:'Soft.'},
    {speaker:'sho_child',jp:'運動会、もっと速く走れるようになりたい。',en:"Sports day — wanna run faster.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さんの体調、気がかりよね。',en:"Dad's health — a concern.",style:'Warm close.'},
  ]},
  {id:'conv_06202',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'カフェ、最近、通わなくなっちゃって。',en:"Cafe — haven't visited lately.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。お酒、ちょっと控えるようにしてる。',en:"Yeah. Restraining alcohol a bit.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'最近、自分に弱気な日が多いの。',en:"Lately — many timid days.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'起業、夢見るのは、大事な気持ちよ。',en:"Dreaming of a startup — vital feeling.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'昨夜、机を拭きながら、考え事してた。',en:"Last night — wiping the desk while pondering.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'カフェの戸、毎朝、丁寧にあけるの。',en:"Cafe doors — carefully open each morning.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'近所のジムで、楽に走れるようになりたい。',en:"Local gym — want to run easily.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'親の介護、気がかりよね。',en:"Parent care — concern.",style:'Warm close.'},
  ]},
  {id:'conv_06203',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'塾、まだ通わせてもらってる。',en:"Cram school — still letting me attend.",style:'Casual teen.'},
    {speaker:'riku_teen',jp:'うん。ゲーム、控えるって決めた。',en:"Yeah. Restraining games, decided.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'試合前、弱気になっちゃう時、ある。',en:"Pre-match — timid sometimes.",style:'Vulnerable.'},
    {speaker:'riku_teen',jp:'夢見るのは大事だけど、現実も見よう。',en:"Dreaming matters — but face reality too.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'帰宅後、汗を拭きたい。',en:"Post-home — wanna wipe sweat.",style:'Wry.'},
    {speaker:'riku_teen',jp:'窓、あけて、勉強机、明るくしよう。',en:"Open windows; brighten the desk.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'授業前、教室まで走れる距離、ありがたい。',en:"Pre-class — runnable distance to room, grateful.",style:'Bright.'},
    {speaker:'riku_teen',jp:'部活の人間関係、気がかりだな。',en:"Club's interpersonal — concern.",style:'Reflective close.'},
  ]},
  {id:'conv_06204',cluster:'A',ambient:'park_distant_birds',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple walks',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、毎日道場に通わせてもらったな。',en:"In youth — was allowed daily dojo.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。今は塩分、控えるようにしているわ。',en:"Yes. Now — restraining salt.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'年取って、弱気な日もあるさ。',en:"Older — timid days too.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'まだまだ、いろんな旅、夢見ているわ。',en:"Still — dreaming various travels.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'食卓を拭きながら、お前と話す時間、いいな。',en:"Wiping the table while chatting with you — nice.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'窓、毎朝あけて、外の空気、入れているのよ。',en:"Windows — open each morning, fresh air.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'公園、ゆっくり走れる頃が懐かしい。',en:"Park — when I could jog, miss those days.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'孫の進学、気がかりだけど、応援しましょう。',en:"Grandkid's school — concern, but support.",style:'Warm close.'},
  ]},
  {id:'conv_06205',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai chats with a teen',lines:[
    {speaker:'ren_uni',jp:'桜、ゼミに通わせてもらってる、感謝の気持ち、忘れるな。',en:"Sakura — gratitude for seminar attendance, don't forget.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。先輩、お酒、控えていらっしゃいますね。',en:"Yes. Senpai — you restrain alcohol.",style:'Polite.'},
    {speaker:'ren_uni',jp:'うん。最近、研究で弱気な時、ある。',en:"Yeah. Lately — timid research moments.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'研究者を夢見るのは、私の憧れです。',en:"Researcher-dreaming — my aspiration.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'机を丁寧に拭く習慣、続けてる?',en:"Desk-wiping habit — keeping?",style:'Curious.'},
    {speaker:'sakura_teen',jp:'はい。研究室の窓、毎朝あけます。',en:"Yes. Lab windows — open each morning.",style:'Bright.'},
    {speaker:'ren_uni',jp:'運動、続ければ、長距離も走れるよ。',en:"Keep up sports — long distance is doable.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'進路、気がかりです、相談に乗ってください。',en:"My path — concern, please advise.",style:'Earnest close.'},
  ]},

  // B
  {id:'conv_06206',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'社内会報、若手社員にも、執筆機会を与えろ。',en:"Internal newsletter — give youth writing chances.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。創業者から受け継がれた精神、伝えます。',en:"Yes. Founder-inherited spirit — convey.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'持論、明確に発信しろ。',en:"Personal theory — clearly broadcast.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。製品、市場で定評あります。',en:"Yes. Product — well-acclaimed in the market.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業績、堅調だな。',en:"Earnings — solid.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。今期の数字、申し分ありません。',en:"Yes. This term's figures — no complaint.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'顧客セグメント別の戦略、深めろ。',en:"By-customer-segment strategy — deepen.",style:'Direction.'},
    {speaker:'kenji_office',jp:'業界の第一人者、招いて、講演いただきます。',en:"Industry pioneers — invite to speak.",style:'Close.'},
  ]},
  {id:'conv_06207',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss strategy',lines:[
    {speaker:'yuki_office',jp:'会報の編集、来週までに仕上げよう。',en:"Newsletter editing — finish by next week.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。先代から受け継がれた校正方針、守ります。',en:"Yes. Inherited-from-prior-gen proofing — maintained.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'最新の持論、執筆陣にも頼もう。',en:"Latest theories — ask writers.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。リード記事、業界で定評ある先生に依頼します。',en:"Yes. Lead article — ask industry-acclaimed sensei.",style:'Update.'},
    {speaker:'yuki_office',jp:'広告枠、堅調に売れてる。',en:"Ad slots — selling solidly.",style:'Bright.'},
    {speaker:'kenji_office',jp:'はい。デザインも申し分ない仕上がりです。',en:"Yes. Design — no-complaint finish.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'読者セグメント別の特集、企画しよう。',en:"By-reader-segment features — plan.",style:'Direction.'},
    {speaker:'kenji_office',jp:'第一人者の声、巻頭インタビューで入れます。',en:"Pioneers' voices — leading interview.",style:'Close.'},
  ]},
  {id:'conv_06208',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、会報、企業文化を映す媒体だ。',en:"Ren — newsletter mirrors corporate culture.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。歴史を受け継がれた連載、勉強になります。',en:"Yes. History-inherited series — instructive.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'独自の持論、書いて、共有することも、大切だ。',en:"Sharing personal theories — vital.",style:'Direction.'},
    {speaker:'ren_uni',jp:'当社、製品の品質に定評ありますね。',en:"Your firm — well-acclaimed product quality.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'業績の堅調さ、長年の信頼の結果だ。',en:"Earnings' solidity — years-of-trust result.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'数字、申し分ない期、続いてますね。',en:"Figures — no-complaint terms continue.",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'顧客セグメント、若手向け、強化しよう。',en:"Customer segments — strengthen youth-targeted.",style:'Direction.'},
    {speaker:'ren_uni',jp:'業界第一人者、お目にかかれる機会、楽しみです。',en:"Industry pioneer — meeting chance, exciting.",style:'Earnest close.'},
  ]},
  {id:'conv_06209',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on coordination',lines:[
    {speaker:'takeda_officer',jp:'警察会報、御社にも一部、お送りします。',en:"Police newsletter — sending a copy to your firm.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察の伝統、受け継がれてきた精神、敬意持って読みます。',en:"Yes. Inherited police tradition — read with respect.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'防犯の持論、若手警官にも展開してます。',en:"Crime-prev theories — also developed in young officers.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察の手腕、業界で定評ありますね。',en:"Yes. Police skill — well-acclaimed.",style:'Update.'},
    {speaker:'takeda_officer',jp:'予算、堅調に推移。',en:"Budget — solid trend.",style:'Direction.'},
    {speaker:'kenji_office',jp:'申し分のない協力、ありがとうございます。',en:"No-complaint cooperation — thanks.",style:'Polite.'},
    {speaker:'takeda_officer',jp:'地域セグメント別の防犯計画、共有します。',en:"By-area-segment crime-prev plan — share.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'治安維持の第一人者、警察庁ですね。',en:"Public-safety pioneers — NPA.",style:'Polite close.'},
  ]},
  {id:'conv_06210',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'会報、若い頃、私も編集していたな。',en:"Newsletter — I edited in youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。受け継がれてきた文化、大切にします。',en:"Yes. Inherited culture — valued.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'持論は、明確に持っておけ。',en:"Hold personal theory clearly.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。市場での定評、引き続き保ちたい。',en:"Yes. Maintain market acclaim.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'業績の堅調、油断するな。',en:"Earnings' solidity — don't slack.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。申し分ない数字でも、慢心しません。',en:"Yes. Even no-complaint figures — no complacency.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'顧客セグメントを細分化し、対応せよ。',en:"Segment customers finely — respond.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'業界の第一人者、おもてなしに、心を尽くします。',en:"Industry pioneers — heartfelt hospitality.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06211',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about an investigation',lines:[
    {speaker:'takeda_officer',jp:'本件、複数の事案が重なりました。',en:"Case — multiple incidents overlapped.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者の言い回し、独特ですね。',en:"Suspect's phrasing — distinctive.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。輪郭が、まだはっきりしません。',en:"Yes. Outline — not yet clear.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'防犯映像、被害者の様子、際立っていますね。',en:"Footage — victim's situation, conspicuous.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'押さえるべき証拠、まだ収集中です。',en:"Evidence to secure — still gathering.",style:'Update.'},
    {speaker:'ren_uni',jp:'警部の手腕、信頼されてますね。',en:"Inspector's skill — trusted.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'旧式の機材も、捜査に活用。',en:"Old-spec gear — used in investigation too.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'ずさんな管理、被疑者組織の特徴ですね。',en:"Slipshod mgmt — suspect-org trait.",style:'Reflective close.'},
  ]},
  {id:'conv_06212',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'論文、論点が複数重なり、構成が難しかったですね。',en:"Paper — multiple overlapping points, hard to compose.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。古い文献の言い回し、現代語に置き換えました。',en:"Yes. Old-source phrasing — modernized.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'仮説の輪郭、章末で明示できましたか。',en:"Hypothesis outline — clarified at chapter end?",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。データの偏り、際立って示しました。',en:"Yes. Data bias — distinctly shown.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'論を押さえる視点、丁寧でしたね。',en:"View securing the argument — careful.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'指導教官の手腕、勉強になりました。',en:"Advisor's skill — learned from.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'旧式の方法論、改める章、評価されていますね。',en:"Old-school methodology — revision chapter, praised.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'ずさんな引用、絶対避けました。',en:"Slipshod citations — strictly avoided.",style:'Earnest close.'},
  ]},
  {id:'conv_06213',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews ops',lines:[
    {speaker:'hiroshi_boss',jp:'各部署の責任、重なる場合の整理、進めろ。',en:"Overlapping section responsibilities — organize.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社外向けの言い回し、統一中です。',en:"Yes. External-facing phrasing — unifying.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'事業計画の輪郭、明確にしろ。',en:"Business plan outline — clarify.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。競合と際立った差別化、目指します。',en:"Yes. Distinctive differentiation from rivals.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'予算、しっかり押さえる体制を。',en:"Budget — firmly secure structure.",style:'Direction.'},
    {speaker:'kenji_office',jp:'担当の手腕、若手にも見せたいです。',en:"Leader's skill — show youth.",style:'Bright.'},
    {speaker:'hiroshi_boss',jp:'旧式の業務、刷新する時期だ。',en:"Old-style ops — renewal time.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。ずさんな運用、改めていきます。',en:"Yes. Slipshod ops — fixing.",style:'Close.'},
  ]},
  {id:'conv_06214',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical practice',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、症例、複数重なって、複雑です。',en:"Ren — symptoms multiple-overlap, complex.",style:'Calm.'},
    {speaker:'ren_uni',jp:'患者への言い回し、神経使いますね。',en:"Patient phrasing — nervewracking.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。診断の輪郭、丁寧に説明します。',en:"Yes. Diagnosis outline — carefully explained.",style:'Patient.'},
    {speaker:'ren_uni',jp:'画像で病変、際立って見えますね。',en:"Imaging — lesion conspicuous.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。基本を押さえる、研修医の課題です。',en:"Yes. Mastering basics — resident task.",style:'Informative.'},
    {speaker:'ren_uni',jp:'専門医の手腕、信頼の柱ですね。',en:"Specialist's skill — trust pillar.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'旧式の検査機器、新型に更新中です。',en:"Old-spec exam gear — being updated.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'ずさんな診療、避ける制度、整っていますね。',en:"Slipshod-care-avoidance system — set up.",style:'Reflective close.'},
  ]},
  {id:'conv_06215',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、研究、ジャンル重なり、面白いね。',en:"Sakura — research, genre-overlap, fun.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。インタビューの言い回し、難しいです。',en:"Yes. Interview phrasing — hard.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'人物の輪郭、はっきり描けましたか。',en:"Person outline — sharply drawn?",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。地元の名物、際立った特徴、章にしました。',en:"Yes. Local-specialty conspicuous traits — chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'要点を押さえる視点、評価されていますね。',en:"Key-point-securing view — praised.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'地域の名手の手腕、写真で記録しました。',en:"Local master's skill — recorded by photo.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'旧式の道具、再評価する章、独創的ですね。',en:"Old-tool reappreciation chapter — original.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'ずさんな調査、避けるよう、注意しました。',en:"Slipshod surveys — careful avoidance.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06216',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a meal',lines:[
    {speaker:'mei_romantic',jp:'今夜、煮込み料理、作る予定なの。',en:"Tonight — stew planned.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。梅干、添えたら美味しいよね。',en:"Yeah. Add pickled plum — yummy.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'生姜、たっぷり入れる派なの。',en:"Lots of ginger — my style.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'八百屋、新鮮な野菜、買ってきた。',en:"Greengrocer — bought fresh veggies.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'盆栽の話題、お父さんと盛り上がる。',en:"Bonsai talk — gets Dad going.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'庭の草木、世話、欠かさず。',en:"Garden plants — care non-stop.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'今夜の食卓、まるで別世界みたい。',en:"Tonight's table — like a separate world.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'デザートで一日の締めくくり、楽しもう。',en:"Dessert — close out the day.",style:'Warm close.'},
  ]},
  {id:'conv_06217',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat about food',lines:[
    {speaker:'sho_child',jp:'ママ、煮込みハンバーグ、好きだよ!',en:"Mom — love stewed hamburger!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'うん。梅干、おにぎりに入れる派?',en:"Yes. Pickled-plum onigiri — your style?",style:'Tender.'},
    {speaker:'sho_child',jp:'生姜湯、風邪のときに、よく飲むね。',en:"Ginger tea — drink during colds.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'八百屋さん、店主、優しいよね。',en:"Greengrocer owner — kind.",style:'Warm.'},
    {speaker:'sho_child',jp:'おじいちゃんの盆栽、すごい。',en:"Grandpa's bonsai — amazing.",style:'Awe.'},
    {speaker:'yumiko_mom',jp:'庭の草木、今年も元気ね。',en:"Garden plants — well again this year.",style:'Soft.'},
    {speaker:'sho_child',jp:'お祭りの夜、別世界に行ったみたい。',en:"Fest night — like another world.",style:'Wistful.'},
    {speaker:'yumiko_mom',jp:'デザートで、今夜の締めくくりにしようね。',en:"Dessert — close out tonight.",style:'Warm close.'},
  ]},
  {id:'conv_06218',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'家庭科で、煮込み料理、作ったの。',en:"Home-ec — made stew.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。梅干、すっぱくて、ごはん、進むよね。',en:"Yeah. Pickled plum — sour, rice-friendly.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'生姜焼き、お弁当に入れた。',en:"Ginger-pork — in the bento.",style:'Animated.'},
    {speaker:'riku_teen',jp:'駅前の八百屋、リンゴ、安かった。',en:"Station greengrocer — apples cheap.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'盆栽部、新入部員、増えた?',en:"Bonsai club — new members up?",style:'Curious.'},
    {speaker:'riku_teen',jp:'校庭の草木、季節ごとに、表情変わる。',en:"School-yard plants — seasonal looks.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'文化祭、別世界みたいで、楽しいよね。',en:"Festival — like another world; fun.",style:'Animated.'},
    {speaker:'riku_teen',jp:'打ち上げ、ファミレスで、締めくくりにしよう。',en:"After-party — family-rest, close it up.",style:'Cheerful close.'},
  ]},
  {id:'conv_06219',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、お前の煮込み料理、毎週楽しみだった。',en:"In youth — your weekly stew was a treat.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。梅干、ぬか床で漬けてた、覚えてる?',en:"Yes. Plum-pickled in nukadoko — remember?",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'生姜湯、冬の朝の定番だな。',en:"Ginger tea — winter-morning staple.",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'近所の八百屋、店主が代わったわね。',en:"Local greengrocer — owner changed.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'盆栽の世話、最近、楽しみで仕方ない。',en:"Bonsai care — recently very fun.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'お庭の草木、二人で育てた歴史よ。',en:"Garden plants — our shared history.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'金婚式、別世界のように感動したな。',en:"Golden anniversary — moved like another world.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'人生の締めくくり、二人で穏やかに迎えたいわ。',en:"Life's closing — to meet calmly together.",style:'Warm close.'},
  ]},
  {id:'conv_06220',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a menu',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、店のランチ、煮込みメニューを増やそか。',en:"Aoi-san — store lunch, expand stew menu.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。梅干茶漬け、新作で出しましょう。',en:"Yes. Plum chazuke — new release.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'生姜系のスイーツも、ええなあ。',en:"Ginger-style sweets — nice too.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'地元の八百屋から、野菜、直接仕入れます。',en:"Local greengrocer — direct supply.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'店内に盆栽、置いて、雰囲気作ろ。',en:"Place bonsai inside — set vibe.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'店先の草木、季節ごとに入れ替えます。',en:"Storefront plants — seasonal swap.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'お客様にとって、店が別世界になれば、ええなあ。',en:"For guests — if shop becomes another world, nice.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'閉店前、皆で乾杯で締めくくりです。',en:"Pre-close — toast as the closing.",style:'Warm close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_332 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['固く','ちょこっと','ガム','スプーン','風船','古本','はれ','ゴロゴロ']
const B_T = ['長期間','しまわ','すんなり','売り切れ','兆し','区切り','近日','工具']
const C_T = ['除け','処方','知見','養う','備える','凶','調書','力強く']
const D_T = ['むら','しづ','やめよ','資料館','遅かっ','カモ','ゴロ','栓']

const data = [
  // A
  {id:'conv_06601',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'sho_child',jp:'ママ、お餅、固くなっちゃったよ。',en:"Mom — mochi, gone-hard.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。お菓子、ちょこっとだけ、食べていいよ。',en:"Yes. Sweets — just a bit, can eat.",style:'Soft.'},
    {speaker:'sho_child',jp:'お友達、ガム、くれたよ、お返し、何にしよう。',en:"Friend — gum gave, return-gift, what?",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'スプーン、左手で持ったの、翔くん、上手ね。',en:"Spoon — left-hand-held, Sho, well-done.",style:'Praising.'},
    {speaker:'sho_child',jp:'お祭りで、風船、もらえるかな?',en:"Fest — balloon, gettable?",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'うん。古本屋さんで、絵本、買ってあげるね、明日。',en:"Yes. Used-book shop — picture-book, buy tomorrow.",style:'Warm.'},
    {speaker:'sho_child',jp:'明日、はれるかなあ、運動会、楽しみだよ。',en:"Tomorrow, will-clear?, sports day, fun.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'休みの日、ゴロゴロしすぎないようにね、翔くん。',en:"Holiday — don't laze too much, Sho.",style:'Direction close.'},
  ]},
  {id:'conv_06602',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、彼の心、最近、固くなっちゃった気がするの。',en:"Aoi — his heart, lately gone-hard, feel.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'うん。ちょこっとだけ、距離、置いてみたら?',en:"Yeah. Just a bit, distance try-place?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'コーヒー飲みながら、ガム、噛みたいけど、変かな。',en:"While drinking coffee — want chew gum, weird?",style:'Wry.'},
    {speaker:'aoi_barista',jp:'木のスプーン、新しく仕入れたの、見て、可愛いよ。',en:"Wooden spoon — new stocked, look, cute.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'お祝いに、風船、飛ばす演出、どうかな。',en:"Cele — balloon-release production, how?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'駅前の古本屋さん、彼のお気に入りらしいよ。',en:"Station-front used-bookstore — his fave, apparently.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'週末、はれるといいね、デート、晴れの予報だって。',en:"Weekend — clear, hopeful, sunny-forecast.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'休みの日、ゴロゴロしてばかりじゃ、もったいないよ、メイちゃん。',en:"Holiday — only-lazing, waste, Mei.",style:'Direction close.'},
  ]},
  {id:'conv_06603',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat after school',lines:[
    {speaker:'sakura_teen',jp:'リク、お弁当のご飯、固く、なっちゃってたよ。',en:"Riku — lunch rice, gone-hard.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'うん。授業中、ちょこっとだけ、寝ちゃったわ。',en:"Yeah. In class — just a bit, slept.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お菓子と、ガム、自販機で買ってこ。',en:"Sweets and gum — vending-machine buy.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前の昼飯、スプーンで食べる、お洒落だな。',en:"Your lunch — spoon-eaten, stylish.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'文化祭で、風船、配るのが、私の役。',en:"Cult-fest — balloon-distrib, my role.",style:'Bright.'},
    {speaker:'riku_teen',jp:'帰りに、古本屋、寄ってもいい?漫画、探したい。',en:"Way back — used-book shop drop-in OK?, manga search.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'明日、はれるかな、体育祭、心配だ。',en:"Tomorrow — will-clear?, sports-fest, worried.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'うん、家でゴロゴロするのが、休日の楽しみ。',en:"Yeah — home-lazing, holiday joy.",style:'Casual close.'},
  ]},
  {id:'conv_06604',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'最近、関節が固くなってきたな、私の体。',en:"Lately — joints gone-hard, my body.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。お薬、ちょこっとだけ、飲むのよ、忘れずに。',en:"Yes. Meds — just a bit, take, don't forget.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'入れ歯の調整、ガム、噛んでみても、いいのかな?',en:"Denture-adjust — gum-try-chew, OK?",style:'Curious.'},
    {speaker:'sachiko_grandma',jp:'銀のスプーン、孫に、贈ろうかしらね。',en:"Silver spoon — to grandkid, gift maybe.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'昔、お祭りで、風船、いっぱい買ってやったな、息子に。',en:"Old days — fest, lots-balloon-bought, to son.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'本棚の古本、整理しないとね、いつか。',en:"Shelf's used-books — must-organize someday.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'明日、はれてくれると、散歩、行けるな。',en:"Tomorrow — will-clear hopefully, walk-able.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'最近、家でゴロゴロして、運動不足だわ、私。',en:"Lately — home-lazing, exercise-lack, me.",style:'Wry close.'},
  ]},
  {id:'conv_06605',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、紙粘土、固くなる前に、形作ろうね。',en:"Sho — clay, before going-hard, shape.",style:'Warm.'},
    {speaker:'sho_child',jp:'うん。お菓子、ちょこっとだけ、もらえる、メイ姉さん?',en:"Yeah. Sweets — just a bit, gettable, Mei-sis?",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'公園で、ガム、捨てちゃダメよ、ちゃんとゴミ箱にね。',en:"Park — gum no-throw, properly trash-can.",style:'Direction.'},
    {speaker:'sho_child',jp:'スプーン、上手に使えるよ、ぼく。',en:"Spoon — well-use-able, me.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'お祭りで、風船もらえるって、お母さんが言ってたね。',en:"Fest — balloon-gettable, Mom said.",style:'Bright.'},
    {speaker:'sho_child',jp:'メイ姉さんの本、古本屋で買った絵本、ぼくも見たい。',en:"Mei-sis's book — used-bookstore picture-book, want see.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'明日、はれるって予報よ、ピクニックね、約束。',en:"Tomorrow — will-clear forecast, picnic promise.",style:'Cheerful.'},
    {speaker:'sho_child',jp:'公園の草の上で、ゴロゴロしたい、メイ姉さん!',en:"Park grass-on — want-laze, Mei-sis!",style:'Excited close.'},
  ]},

  // B
  {id:'conv_06606',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'このプロジェクト、長期間、慎重に進めろ。',en:"This project — long-term, careful advance.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。重要書類、しまわないと、不安です。',en:"Yes. Vital docs — without-storing, anxious.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'契約、すんなりまとまったのは、君の手柄だ。',en:"Contract — smoothly closed — your achievement.",style:'Warm direction.'},
    {speaker:'kenji_office',jp:'はい。商品、売り切れ、続出しております。',en:"Yes. Goods — sellout, continuous.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業績、回復の兆し、感じるな、最近。',en:"Performance — recovery-signs, feel, lately.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。年度の区切り、近日、お祝い予定です。',en:"Yes. Year-boundary — soon-celebrate planned.",style:'Cheerful.'},
    {speaker:'hiroshi_boss',jp:'新商品、近日発売、宣伝、強化しろ。',en:"New product — soon-launch, ad-strengthen.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。工場の工具、点検、来週実施します。',en:"Yes. Factory tools — inspect, next-week-do.",style:'Close.'},
  ]},
  {id:'conv_06607',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'今の体制、長期間、続けるのは、難しいわね。',en:"Current setup — long-term continue, hard.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。資料、ちゃんとしまわないと、紛失リスク、あります。',en:"Yes. Docs — properly-stored, lest lose.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'クライアント、すんなり、契約に応じてくれたよ。',en:"Client — smoothly contract-agreed.",style:'Bright.'},
    {speaker:'kenji_office',jp:'はい。人気商品、また売り切れ、追加発注しました。',en:"Yes. Hot item — again sellout, re-ordered.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'市場、改善の兆し、見えてきたね。',en:"Market — improvement-signs, visible.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。プロジェクトの区切り、報告会、設定済みです。',en:"Yes. Project boundary — report-meet, set.",style:'Update.'},
    {speaker:'yuki_office',jp:'人事評価の発表、近日、予定だよ。',en:"HR-eval announcement — soon, plan.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。修繕の工具、まとめて発注いたしました。',en:"Yes. Repair tools — bulk-ordered.",style:'Close.'},
  ]},
  {id:'conv_06608',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究、長期間、計画的に進めろ。',en:"Ren — research, long-term, plan-advance.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。実験ノート、しまわないと、紛失したら、大変ですね。',en:"Yes. Lab-notes — without-storing, loss-bad.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'査読、すんなり、通った論文、君の地力だ。',en:"Peer-review — smoothly passed — your ability.",style:'Praising.'},
    {speaker:'ren_uni',jp:'はい。書店で、書籍が売り切れ、嬉しい誤算でした。',en:"Yes. Bookstore — book sellout, happy surprise.",style:'Cheerful.'},
    {speaker:'hiroshi_boss',jp:'若手の研究、成長の兆し、感じるぞ。',en:"Youth research — growth-signs, feel.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文の章ごとに、区切りをつけて、書き進めます。',en:"Yes. Per chapter — boundary-set, write-advance.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'近日、海外学会、発表のチャンス、与える。',en:"Soon — overseas conf, presentation chance, give.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。実験室の工具、整備、徹底しました。',en:"Yes. Lab tools — maintenance, thorough.",style:'Earnest close.'},
  ]},
  {id:'conv_06609',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'本件、長期間、内偵を進めてまいりました。',en:"Case — long-term, surv-advanced.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。証拠品、警察にしまわないようにと言われ、保管中です。',en:"Yes. Evidence — told non-stored police, keeping.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'容疑者、すんなり、自供に至りました。',en:"Suspect — smoothly confession-arrived.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。被害品、市場で売り切れ、追跡しております。',en:"Yes. Stolen items — market sellout, tracing.",style:'Update.'},
    {speaker:'takeda_officer',jp:'地域、治安回復の兆し、感じます。',en:"Region — peace-recovery-signs, feel.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。捜査の一区切り、現場会議、開催予定です。',en:"Yes. Investigation-boundary — site-meet plan.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'近日、地域防犯活動を、実施いたします。',en:"Soon — local crime-prev, conduct.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。盗難に遭った工具、被害届、提出済みです。',en:"Yes. Stolen tools — claim, filed.",style:'Close.'},
  ]},
  {id:'conv_06610',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'会社、長期間、続けることが、何より大切だ。',en:"Company — long-term continue, above all vital.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。社内の重要書類、しまわないと、信用に関わります。',en:"Yes. Internal vital-docs — without-storing, trust-affecting.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'交渉、すんなり進む時こそ、油断するな。',en:"Negot — smoothly time, don't relax.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。新商品、初日で売り切れ、嬉しい悲鳴です。',en:"Yes. New product — day-one sellout, happy-scream.",style:'Cheerful.'},
    {speaker:'hiroshi_elder',jp:'業績、回復の兆しが見える時、慎重さを忘れるな。',en:"Performance — recovery-signs, don't forget caution.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業からの区切り、しっかり振り返ります。',en:"Yes. Founding-boundary — firmly look-back.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'近日、社内記念行事に、私も参加するよ。',en:"Soon — corp commem event, also-attend.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。創業当時の工具、社史館に展示予定です。',en:"Yes. Founding-era tools — corp-museum display plan.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06611',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses health policy',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、伝統医療の厄除けの慣習、興味深く読みました。',en:"Ren — paper, trad-med charm-away custom, interestingly read.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。薬の処方、地域差、調査しました。',en:"Yes. Drug prescription — regional diffs, surveyed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'公衆衛生の知見、現代社会に欠かせないですね。',en:"Public-hyg knowledge — modern-soc indispensable.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。家族が病人を養う制度、地域、差があります。',en:"Yes. Family-supports-sick system — regional diffs.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'災害に備える文化、地域社会に根付いていますね。',en:"Disaster-prep culture — local-society rooted.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。凶作の年、人々はどう生き延びたか、論じました。',en:"Yes. Crop-failure year — how survived, argued.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時の調書、貴重な一次資料ですね。',en:"Era records — precious primary-mat.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。庶民が力強く生きた様子、心を打たれます。',en:"Yes. Commoners powerfully-living — heart-strike.",style:'Earnest close.'},
  ]},
  {id:'conv_06612',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、犯人除けのお守り、現場に残されていました。',en:"Case — criminal-warding charm, site-left.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者は、薬を処方されていた患者でしたよね。',en:"Victim — prescribed-meds patient, right?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。捜査の知見、年々、深まっております。',en:"Yes. Inv knowledge — yearly deepens.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'家族を養う立場の被害者、社会的影響、大きいですね。',en:"Family-supporter victim — soc-impact, large.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。事件に備える地域訓練、強化中です。',en:"Yes. Incident-prep local-train — strengthening.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'凶悪犯罪、減少していますか、最近。',en:"Heinous-crime — decreasing, lately?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者の調書、丁寧に取らせていただいています。',en:"Yes. Suspect record — carefully-taken.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察官の方々、力強く活動されている姿、頭が下がります。',en:"Officers — powerfully-active stance — humbled.",style:'Curious close.'},
  ]},
  {id:'conv_06613',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses preventive care',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、虫除けスプレー、子供にも安心なもの、増えています。',en:"Ren — bug-repel spray, kid-safe ones increasing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'処方薬、ジェネリック、普及してきましたね。',en:"Prescribed drugs — generics, spreading.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。最新の医学的知見、患者さんと共有しています。',en:"Yes. Latest med knowledge — patient-shared.",style:'Informative.'},
    {speaker:'ren_uni',jp:'家族が高齢者を養う負担、医療として、軽減策はありますか。',en:"Family-cares-for-elderly burden — med-system, relief?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。感染症に備える体制、強化されています。',en:"Yes. Infection-prep system — strengthened.",style:'Patient.'},
    {speaker:'ren_uni',jp:'昔は、凶作で栄養失調、多かったんでしょうね。',en:"Old days — crop-fail, malnut many.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。診療調書、電子化、進めております。',en:"Yes. Med-record — digital, advancing.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療従事者の力強く支える姿、頼もしいですね。',en:"Med-workers powerfully-supporting — reassuring.",style:'Reflective close.'},
  ]},
  {id:'conv_06614',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp safety policy',lines:[
    {speaker:'hiroshi_boss',jp:'リスク除けの体制、各部署で、整えろ。',en:"Risk-warding system — per dept, prep.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員のメンタル、処方として、休暇制度、強化しました。',en:"Yes. Staff mental — as prescription, leave-system strengthened.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界知見、社員教育に、活用しろ。',en:"Industry knowledge — staff-edu, utilize.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。会社が社員を養う責任、創業以来、変わりません。',en:"Yes. Co-supports-staff duty — since founding, unchanged.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'災害に備える備蓄、各事業所で、確保しろ。',en:"Disaster-prep stockpile — per branch, secure.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。凶悪事件への警戒、社内、徹底しています。',en:"Yes. Heinous-crime alert — internally thorough.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'コンプラ違反の調書、対応、慎重にしろ。',en:"Compl violation record — handle, careful.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、力強く、社業を支えてくれています。',en:"Yes. Staff — powerfully, biz-supporting.",style:'Close.'},
  ]},
  {id:'conv_06615',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through cultural studies',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、研究、厄除けの儀式、地域差、よく調べましたね。',en:"Sakura — research, ward-ritual, regional diffs, well-checked.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。漢方医の処方、現代と比較しました。',en:"Yes. Kanpo-prescription — modern-compared.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'昔の人々の知見、現代の研究にも、活かされていますね。',en:"Old folks' knowledge — modern-research utilized.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。家族を養う伝統的役割、時代と共に変化しました。',en:"Yes. Family-support trad-role — era-changed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'天変地異に備える文化、日本特有ですね。',en:"Natural-disaster-prep culture — Japan-unique.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。凶事を避ける民間信仰、各地で観察しました。',en:"Yes. Bad-event avoiding folk-belief — multi-region observed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地元の方の調書、フィールドノート、貴重ですね。',en:"Locals' records, field-notes — precious.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。地方の人々が力強く生きる姿、伝えたいです。',en:"Yes. Local folks powerfully-living — convey.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06616',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、ネイル、色むら、出ないように、塗ってくれた、嬉しい。',en:"Aoi — nail, color-uneven nothing, painted, happy.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。しづちゃんと、よく来てくれてるよね、最近。',en:"Yeah. Shizu-chan, often-come, lately.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'夜更かし、もうやめようと思ってる、私。',en:"Late-nights — quit-think, me.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'昨日、資料館、彼と一緒に行ったって、聞いたよ。',en:"Yesterday — museum, with him, heard.",style:'Probe.'},
    {speaker:'mei_romantic',jp:'うん。電車、遅かったから、ぎりぎり間に合った。',en:"Yeah. Train slow, just-in-time.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'池のカモさん、可愛いよね、公園の。',en:"Pond duck — cute, park's.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'休日、家で、ゴロ寝ばっかり、しちゃう、私。',en:"Holiday — at home, only-lazing, me.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'ワインの栓、開けたから、ご褒美、ちょっと飲もう。',en:"Wine cork — opened, reward, slight drink.",style:'Warm close.'},
  ]},
  {id:'conv_06617',cluster:'D',ambient:'park_distant_birds',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat on a walk',lines:[
    {speaker:'sho_child',jp:'ママ、お絵描き、色むら、出ちゃった。',en:"Mom — drawing, color-uneven appeared.",style:'Honest child.'},
    {speaker:'yumiko_mom',jp:'うん。しづちゃんって、お母さんの幼馴染なのよ。',en:"Yes. Shizu-chan — Mom's childhood pal.",style:'Soft.'},
    {speaker:'sho_child',jp:'ぼく、もうゲーム、やめようかな、宿題、進まないから。',en:"Me — quit-game?, homework non-advance.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'今度の休み、資料館、家族で行こうね。',en:"Next holiday — museum, family-go.",style:'Bright.'},
    {speaker:'sho_child',jp:'今日のバス、遅かったね、いつもより。',en:"Today's bus — slow, than usual.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'公園の池、カモさん、来てるね、見て。',en:"Park pond — duck, come, look.",style:'Soft.'},
    {speaker:'sho_child',jp:'夏休み、お祖父ちゃんち、ゴロ寝、いっぱいしたよ。',en:"Summer — Grandpa's, lazed, lots.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お風呂の栓、ちゃんと閉めてね、翔くん。',en:"Bath plug — properly close, Sho.",style:'Direction close.'},
  ]},
  {id:'conv_06618',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat after school',lines:[
    {speaker:'sakura_teen',jp:'リク、私のメイク、色むら、ひどいかな、今日?',en:"Riku — my makeup, color-uneven, bad today?",style:'Worried teen.'},
    {speaker:'riku_teen',jp:'うん。しづちゃん先輩、引退、寂しいよな、部活。',en:"Yeah. Shizu-chan senpai — retire, lonely, club.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'夜遅くまで、漫画読むの、もうやめようと思ってるの。',en:"Late-night manga-read — quit-think.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'土曜、町の歴史資料館、課題で行かないとな。',en:"Sat — town history-museum, assn-must-go.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'うん。電車、遅かったね、今朝も。',en:"Yeah. Train slow today too.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'池のカモ、いっぱいいるな、今日。',en:"Pond — duck many today.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'試験前、家でゴロ寝ばかり、しちゃダメだよね。',en:"Pre-test — home-laze only, mustn't.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'運動会の打ち上げ、ジュースの栓、皆で抜いたな。',en:"Sports-day after — juice plug, all-pulled.",style:'Bright close.'},
  ]},
  {id:'conv_06619',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'最近、絵を描くと、色むら、出てしまうな、私。',en:"Lately — paint, color-uneven appears, me.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'うん。しづ姉さん、戦争前、結婚した相手、覚えてる?',en:"Yes. Shizu-sis — pre-war wedding partner, remember?",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'タバコ、もうやめようと思っている、本気で。',en:"Tobacco — quit-think, seriously.",style:'Earnest.'},
    {speaker:'sachiko_grandma',jp:'郷土資料館、孫を連れて行きたいわね、夏休み。',en:"Local museum — grandkid-take, summer.",style:'Bright.'},
    {speaker:'hiroshi_elder',jp:'最近、足、遅かったな、私、散歩の時。',en:"Lately — foot slow, me, walk-time.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'池のカモ、毎年、戻ってくるわね、不思議。',en:"Pond duck — yearly returns, mystery.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'最近、椅子でゴロ寝、増えたな、私。',en:"Lately — chair-lazing increased, me.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'お風呂の栓、忘れずに、抜いてね、あなた。',en:"Bath plug — don't forget pull, dear.",style:'Tender close.'},
  ]},
  {id:'conv_06620',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan menus',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、新作ケーキ、色むら、絶対出さんようにせなな。',en:"Aoi — new cake, color-uneven absolutely-not-out.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。バイトの、しづちゃん、明日からシフト入りますね。',en:"Yes. Part-timer Shizu-chan — tomorrow shift-in.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'冷凍メニュー、もうやめようと思てる、こだわりたいんや。',en:"Frozen menu — quit-think, want-passion.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。地元の資料館とコラボ、企画していけそうですね。',en:"Yes. Local museum-collab — plan-able.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'食材の配達、遅かったな、今朝、悩みやで。',en:"Ingredient delivery — slow this morning, worry.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'はい。新メニューに、合鴨のカモ料理、加えませんか。',en:"Yes. New menu — duck dish add?",style:'Probe.'},
    {speaker:'daichi_kansai',jp:'昼休み、ゴロ寝してる暇あらへんな、繁忙期は。',en:"Lunch break — lazing no-time, busy-season.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'はい。新作のシードルの栓、明日、皆で抜きますね。',en:"Yes. New cider cork — tomorrow, all-pull.",style:'Warm close.'},
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

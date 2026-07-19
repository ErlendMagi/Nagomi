import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_334 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['寸法','鉢','悩ま','こぼし','とかし','しり','ふる','低かっ']
const B_T = ['知識人','会派','替わり','積ま','計っ','常用','手作業','シード']
const C_T = ['勝る','術後','検問','尊い','固有名詞','さなか','変ら','塵']
const D_T = ['ガーデニング','セーフ','ニヤニヤ','エレガント','お決まり','打てる','アシ','小さかっ']

const data = [
  // A
  {id:'conv_06641',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'sho_child',jp:'ママ、新しいランドセル、寸法、ぴったりだったよ。',en:"Mom — new backpack, size, perfect.",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'うん。お祖母ちゃんが、お花の鉢、持ってきてくれたよ。',en:"Yes. Granny — flowerpot brought.",style:'Warm.'},
    {speaker:'sho_child',jp:'ぼく、宿題で悩まされてるんだ、最近。',en:"Me — homework-tormented, lately.",style:'Pouty.'},
    {speaker:'yumiko_mom',jp:'お味噌汁、こぼしちゃダメよ、翔くん。',en:"Miso-soup — don't spill, Sho.",style:'Direction.'},
    {speaker:'sho_child',jp:'髪、ちゃんととかしたよ、ぼく、自分で。',en:"Hair — properly combed, me, self.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お友達と、しりとり、楽しかった?',en:"Friend — shiritori, fun?",style:'Curious.'},
    {speaker:'sho_child',jp:'雨がふる前に、お家、帰りたいね、ママ。',en:"Before rain falls — want home, Mom.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'去年、翔くんの身長、まだ低かったわね、今年、伸びたわ。',en:"Last year — Sho's height, still short, this year-grew.",style:'Warm close.'},
  ]},
  {id:'conv_06642',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、新しいスカート、寸法、ぴったりで嬉しい。',en:"Aoi — new skirt, size perfect, happy.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。観葉植物の鉢、もう一個、欲しいなと思って。',en:"Yeah. Foliage pot — another wanted.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'彼の浮気疑惑、私を悩ますばっかり、最近。',en:"His cheating-doubt — only torments me, lately.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'コーヒー、テーブルに、こぼしちゃった、ごめんね。',en:"Coffee — spilled on table, sorry.",style:'Apologetic.'},
    {speaker:'mei_romantic',jp:'うん。前髪、お店でとかしてもらったの、爽快よ。',en:"Yeah. Bangs — shop-combed, refreshing.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'子供の頃、しりとり、よくやったね、姉妹で。',en:"Childhood — shiritori, often-did, sisters.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'今日、雨がふる予報だったのに、晴れたよね。',en:"Today — rain-fall forecast, but cleared.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'去年の客足、確かに、低かったよね、ここ。',en:"Last year footfall — sure, was low, here.",style:'Reflective close.'},
  ]},
  {id:'conv_06643',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、制服の寸法、合ってる?ちょっと長くない?',en:"Riku — uniform size, fit?, slightly long?",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'うん。文化部、植木鉢、教室に置いてるよな。',en:"Yeah. Cult-club — pot, classroom-placed.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'最近、進路のこと、悩まされるの、私。',en:"Lately — career-worry tormenting me.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'カフェで、ジュース、こぼしちゃってさ、お前、笑ってたな。',en:"Cafe — juice spilled — you laughed.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'昨日、髪、入念にとかして、自信、ついた。',en:"Yesterday — hair carefully-combed, confidence-built.",style:'Bright.'},
    {speaker:'riku_teen',jp:'子供の頃、お前のしりとり、結構強かったよな。',en:"Childhood — your shiritori, quite strong.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'雨がふるって予報だから、傘、持ってきたよ。',en:"Rain-fall forecast — umbrella brought.",style:'Practical.'},
    {speaker:'riku_teen',jp:'去年のテストの点、結構、低かったわ、俺。',en:"Last year's test — quite low, me.",style:'Wry close.'},
  ]},
  {id:'conv_06644',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'昔の着物、寸法、なかなか合わなくなったな、私。',en:"Old kimono — size, hard-to-fit lately.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。窓辺の鉢植え、水、忘れずにあげましょうね。',en:"Yes. Window pot — water, don't forget.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'年金のこと、最近、私を悩ますんだよ。',en:"Pension — lately, torments me.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'お茶、震えで、こぼしちゃったわ、さっき。',en:"Tea — shaking-spilled, earlier.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'孫が、髪をとかしてくれて、嬉しかったな、先週。',en:"Grandkid — hair-combed me, happy, last week.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'孫と、しりとり、毎週日曜の楽しみよ。',en:"Grandkid — shiritori, Sunday joy.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'雨がふる前に、洗濯物、取り込みましょう、お母さん。',en:"Before rain — laundry-in, Mom.",style:'Practical.'},
    {speaker:'sachiko_grandma',jp:'昔の私の身長、確かに、低かったわね、今より。',en:"Old my height — surely, lower than now.",style:'Wistful close.'},
  ]},
  {id:'conv_06645',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、新しい靴、寸法、ちょうどいいわね。',en:"Sho — new shoes, size perfect.",style:'Warm.'},
    {speaker:'sho_child',jp:'ぼく、お花の鉢、お庭に植えたいな、メイ姉さん。',en:"Me — flowerpot, garden-plant, Mei-sis.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'子育てって、ママを悩ますこと、いっぱいあるみたいね。',en:"Childrearing — Mom-tormenting things, many.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、ジュース、ぼく、こぼしちゃった、ごめんね。',en:"Mei-sis — juice, me spilled, sorry.",style:'Apologetic.'},
    {speaker:'mei_romantic',jp:'髪、丁寧にとかしましょうね、翔くん、お姉さんが、やってあげる。',en:"Hair — carefully-comb, Sho, sis do.",style:'Tender.'},
    {speaker:'sho_child',jp:'公園で、しりとり、メイ姉さんと、やろうよ!',en:"Park — shiritori, Mei-sis, do!",style:'Eager.'},
    {speaker:'mei_romantic',jp:'雨がふる前に、お家、帰りましょうね、翔くん。',en:"Before rain — home, Sho.",style:'Direction.'},
    {speaker:'sho_child',jp:'去年のぼく、もっと身長、低かったよ、メイ姉さん。',en:"Last year me — height lower, Mei-sis.",style:'Animated close.'},
  ]},

  // B
  {id:'conv_06646',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews planning',lines:[
    {speaker:'hiroshi_boss',jp:'今度の講演会、知識人を多数招くな。',en:"Lecture — invite many intellectuals.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社内、保守派と改革派の会派、調整中です。',en:"Yes. Internal — conserv/reform factions coord.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'部長の替わりに、君に、出席してもらう。',en:"Replacing dept-head — you attend.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。倉庫、商品、これ以上、積まないでください。',en:"Yes. Warehouse — goods, no-more piled.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業績、しっかり計った上で、判断する。',en:"Performance — properly measured, decide.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社用車、常用しているのは、私だけです。',en:"Yes. Co-car — daily-user, only me.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'検品は、手作業で、慎重にやれ。',en:"QC — by hand, careful.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新事業に、シードマネー、確保しています。',en:"Yes. New biz — seed money, secured.",style:'Close.'},
  ]},
  {id:'conv_06647',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'広報誌、知識人インタビュー、特集にしましょう。',en:"PR-mag — intellectual interview, feature.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。社内、二大会派、意見対立、続いています。',en:"Yes. Internal — two factions, dispute continuing.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'秋の催事、私の替わりに、誰か出してね。',en:"Autumn event — replacing me, send someone.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。倉庫、新商品が、どんどん積まれています。',en:"Yes. Warehouse — new goods, piling up.",style:'Update.'},
    {speaker:'yuki_office',jp:'残業時間、しっかり計って、報告して。',en:"OT-hours — properly-measured, report.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の常用パソコン、更新時期です。',en:"Yes. Staff regular-PC — refresh-time.",style:'Update.'},
    {speaker:'yuki_office',jp:'伝統工芸、手作業で、丁寧に作るブランド、応援したい。',en:"Trad-craft — hand-made carefully — brand support.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。シードラウンドの資金調達、来月、終わります。',en:"Yes. Seed-round funding — next month, done.",style:'Close.'},
  ]},
  {id:'conv_06648',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、学界の知識人と、ネットワーク、築け。',en:"Ren — acad intellectuals, network-build.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。学内、複数の会派、勉強しております。',en:"Yes. Campus — multi-factions, studying.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'指導教官の替わりに、学会に出る場面、あるぞ。',en:"Replacing prof — conf-attend scene exists.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文の引用、たくさん積まないように、絞ります。',en:"Yes. Paper citations — not too piled, narrow.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'実験結果、しっかり計った上で、論文にしろ。',en:"Exp results — properly-measured, paper.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。常用辞書、最新版を、入手しました。',en:"Yes. Daily dictionary — latest version, got.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'初期段階の実験は、手作業で、丁寧にやれ。',en:"Early-stage exp — by hand, careful.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。シード論文として、結果を発表したいです。',en:"Yes. As seed-paper — results, want publish.",style:'Earnest close.'},
  ]},
  {id:'conv_06649',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'本件、知識人の証言も、参考にしております。',en:"Case — intellectual testimony, referenced.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。地域の自治会派、警察と協力体制、できています。',en:"Yes. Local-assoc factions — police-coop ready.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'担当官の替わりに、私が、ご説明します。',en:"Replacing officer — I explain.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。被害品、倉庫に、積まれていた状態でした。',en:"Yes. Stolen goods — warehouse-piled state.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'被害金額、しっかり計って、報告書、提出します。',en:"Damage — properly-measured, report submit.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社用車、常用している運転手、確認しました。',en:"Yes. Co-car — daily-driver, verified.",style:'Update.'},
    {speaker:'takeda_officer',jp:'証拠検証、手作業で、慎重にやらせていただいています。',en:"Evidence verif — by-hand, careful.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。新規防犯活動の、シード資金、ご相談したいです。',en:"Yes. New crime-prev — seed-fund, consult.",style:'Close.'},
  ]},
  {id:'conv_06650',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時、地域の知識人に、相談しまわった日々、懐かしい。',en:"Founding — local-intellectuals consulted, nostalgic.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。当時、業界に、対立する会派、ありましたよね。',en:"Yes. Era — industry-opposing factions existed.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'息子の替わりに、孫に、教えたいことも、いっぱいある。',en:"Replacing son — grandkid-teach, many things.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。倉庫に、創業初期の在庫、まだ積まれていますよ。',en:"Yes. Warehouse — early-stock, still piled.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'生涯売上、しっかり計って、誇りを持て。',en:"Career sales — properly-measured, take pride.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業時から常用しているスローガン、変えていません。',en:"Yes. Since founding — daily-slogan unchanged.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業時、すべて手作業で、組み立てたな、私たち。',en:"Founding — all by-hand assembled, us.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。次のシード事業、私の代で、立ち上げます。',en:"Yes. Next seed biz — my era, launch.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06651',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses literature',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、研究、原作に勝るとも劣らない翻訳論、興味深く読みました。',en:"Ren — research, equal-or-greater-than-original translation arg, interest-read.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。当時の作家、術後の闘病記、参考になりました。',en:"Yes. Era author — post-op illness diary, referenced.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時の検問下で、書かれた手記、貴重な史料ですね。',en:"Wartime under-checkpoint — written memoir, precious archive.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。一人一人の人生が、尊いことを、痛感しました。',en:"Yes. Each-life precious — keenly felt.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'固有名詞の使い方、論文全体で、統一されていますね。',en:"Proper-noun usage — paper-unified.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。戦争のさなかでも、文学は生き続けました。',en:"Yes. Mid-war — lit continued-living.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'時代が変らずに、価値観が普遍的なテーマ、扱いましたね。',en:"Era-unchanged universal values — handled.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。歴史の塵に埋もれそうな声、拾い上げました。',en:"Yes. Hist-dust-buried voices — picked up.",style:'Earnest close.'},
  ]},
  {id:'conv_06652',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、捜査手法、従来の方法に勝るとも劣らない結果でした。',en:"Case — inv method, equal-or-greater-than-old results.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者、術後の闘病、続けながら、証言されたんですね。',en:"Victim — post-op illness-while, testified.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。空港の検問、強化させていただいております。',en:"Yes. Airport checkpoint — strengthened.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察官の方々が、市民の命を尊い存在として守る姿、立派です。',en:"Officers — citizen-life as precious being protect, splendid.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。捜査では、固有名詞の取り扱い、慎重にしております。',en:"Yes. In inv — proper-noun handle, careful.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'事件のさなか、現場の混乱、想像を絶しますね。',en:"Mid-incident — site chaos, unimaginable.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。社会が、変らずに、警察を支えてくださることに、感謝しております。',en:"Yes. Society — unchanged, police-support — grateful.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'証拠の塵一つも、見逃さない姿勢、勉強になります。',en:"Even evidence-dust-one — not-overlook stance — learn.",style:'Curious close.'},
  ]},
  {id:'conv_06653',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses a complex surgery',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、最新の手術手法、従来法に勝るとも劣らない安全性です。',en:"Ren — latest surgery, equal-or-greater-than-old safety.",style:'Calm.'},
    {speaker:'ren_uni',jp:'術後のリハビリ、患者さん、根気強く取り組んでいますね。',en:"Post-op rehab — patient patiently tackling.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。災害時、医療を提供する検問所、増えています。',en:"Yes. Disaster — med-supply checkpoint, increasing.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医師の方々が、命を尊い存在として向き合う姿、感動的ですね。',en:"Doctors — life-as-precious facing, moving.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。電子カルテで、固有名詞の入力、丁寧にしております。',en:"Yes. EMR — proper-noun input careful.",style:'Informative.'},
    {speaker:'ren_uni',jp:'パンデミックのさなか、医療現場、大変でしたよね。',en:"Mid-pandemic — med-site, hard.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医師の使命感、時代が変らずに、続いております。',en:"Yes. Doctor mission-sense — era-unchanged, continues.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'院内に塵ひとつ落とさない、清掃の徹底、感心します。',en:"In-hosp — no-dust drop, cleaning-thorough, admire.",style:'Reflective close.'},
  ]},
  {id:'conv_06654',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp ethics',lines:[
    {speaker:'hiroshi_boss',jp:'新製品、競合に勝るとも劣らない、品質を目指せ。',en:"New product — competitor-equal-or-greater, quality aim.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員、術後復帰の支援制度、充実させました。',en:"Yes. Staff — post-op return support, enriched.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'内部監査、検問所のように、厳格に運用しろ。',en:"Internal audit — checkpoint-like, strict run.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員一人一人の命を、尊い財産として、扱っております。',en:"Yes. Each-staff-life — as precious asset, treat.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'契約書の固有名詞、誤記、見逃すな。',en:"Contract proper-nouns — typos, don't overlook.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。コロナのさなか、社員、力強く支えてくれました。',en:"Yes. Mid-COVID — staff, powerfully-supporting.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'創業精神、変らずに、引き継げ。',en:"Founding spirit — unchanged, inherit.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内、塵一つない清掃体制、徹底しております。',en:"Yes. Internal — no-dust cleaning, thorough.",style:'Close.'},
  ]},
  {id:'conv_06655',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher discusses social studies',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、海外文献に勝るとも劣らない内容、評価できますね。',en:"Sakura — paper, overseas-equal-or-greater content, eval-able.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。インタビューした方、術後の経験、貴重でした。',en:"Yes. Interviewee — post-op exp, precious.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦中、検問下を生き抜いた人々の声、論文に重みを加えていますね。',en:"Wartime under-checkpoint survivors' voices — paper-weight added.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。一人一人の語りが、尊いものに感じました。',en:"Yes. Each-tale — felt as precious.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'固有名詞の表記、丁寧に統一されていますね。',en:"Proper-noun notation — carefully-unified.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。動乱のさなかに生きた人々、忘れたくないです。',en:"Yes. Mid-upheaval-lived people — don't-forget want.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'人々の思いが、変らずに、今に通じることを、伝えていますね。',en:"People-thought — unchanged, now-connects, convey.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史の塵に埋もれた声を、掘り起こす意義、論じました。',en:"Yes. Hist-dust-buried voices — dig-up meaning, argued.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06656',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、最近、ガーデニング、はまってるって、聞いたよ。',en:"Aoi — lately, gardening hooked, heard.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。電車、ぎりぎりセーフで、間に合ったの、今朝。',en:"Yeah. Train — just safe, made it, this morning.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'彼、最近、私のこと見て、ニヤニヤしてるの、気になる。',en:"He — lately, seeing me, smirking — bother.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'メイちゃん、今日のドレス、本当にエレガントだね。',en:"Mei — today's dress, really elegant.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'お決まりのコース、いつもの、お願いね、葵。',en:"Usual course — same as always, please, Aoi.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'バッティングセンター、私、ホームラン、打てるかな?',en:"Batting cage — me, homerun, hittable?",style:'Playful.'},
    {speaker:'mei_romantic',jp:'美容室、有名なアシスタントさん、最近、独立したって。',en:"Salon — famous assistant, lately, independent.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'昔のメイちゃん、もっと体が小さかったよね、私たちの初めての頃。',en:"Old Mei — smaller body, our first-meeting.",style:'Wistful close.'},
  ]},
  {id:'conv_06657',cluster:'D',ambient:'park_distant_birds',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat about an outing',lines:[
    {speaker:'sho_child',jp:'ママ、庭でガーデニング、ぼくも、お手伝いするよ。',en:"Mom — garden gardening, me also-help.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。バス、駆け込みセーフで、乗れたわね、よかった。',en:"Yes. Bus — dash-safe, boarded, glad.",style:'Warm.'},
    {speaker:'sho_child',jp:'お父さんが、お祝いのプレゼント見て、ニヤニヤしてたよ。',en:"Dad — gift-saw, smirking.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'ピアノの先生、エレガントな雰囲気の方ね。',en:"Piano teacher — elegant-air person.",style:'Soft.'},
    {speaker:'sho_child',jp:'お決まりの遊び、いつもの公園で、しよう!',en:"Usual play — usual park, do!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'バッティングで、ボール、しっかり打てる子、お父さんに、似たのね。',en:"Batting — properly-hittable kid, Dad-resembles.",style:'Warm.'},
    {speaker:'sho_child',jp:'体育の時間、アシスタントの先生、優しいんだよ。',en:"PE class — assistant teacher kind.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'去年の翔くん、体、もう少し小さかったわよ、可愛かった。',en:"Last year Sho — body, slightly smaller, cute.",style:'Tender close.'},
  ]},
  {id:'conv_06658',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、最近、ガーデニング部、入ったって、聞いたよ。',en:"Riku — lately, garden-club joined, heard.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'うん。テストの結果、ぎりぎりセーフで、合格、できた。',en:"Yeah. Test result — just safe, passed.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前、私のこと、見て、ニヤニヤ、しないでよ。',en:"You — seeing me, don't smirk.",style:'Pouty.'},
    {speaker:'riku_teen',jp:'昨日のパーティ、お前、めっちゃエレガントだったよ、桜。',en:"Yesterday party — you, super elegant, Sakura.",style:'Bashful.'},
    {speaker:'sakura_teen',jp:'放課後のお決まり、コンビニで、お菓子買うんだよね。',en:"After-school usual — conv-store, sweets buy.",style:'Animated.'},
    {speaker:'riku_teen',jp:'野球部、お前、ホームラン、打てる時、あるんだろ?',en:"Baseball — you, homerun hittable, sometimes?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'文化祭、アシスタントとして、私、手伝うんだ。',en:"Cult-fest — as assistant, help me.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'幼稚園の頃、お前、本当に小さかったよな、写真で見たわ。',en:"Kindergarten — you, really small, photo-saw.",style:'Wry close.'},
  ]},
  {id:'conv_06659',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'退職後、ガーデニング、私の新しい趣味になったな。',en:"Post-retire — gardening, my new hobby.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。あの時、間に合ってセーフだったわね、新幹線。',en:"Yes. That time — made it safe, shinkansen.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'孫の顔見ると、自然に、ニヤニヤしちゃうな、私。',en:"Grandkid-face-see — naturally, smirking me.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃の私、エレガントだったかしらね、あなたから見て。',en:"Youth me — elegant?, from your-view.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'お決まりの散歩コース、毎日、安心するな。',en:"Usual walk-course — daily, reassuring.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'孫、野球で、ホームラン、打てるって自慢してたわよ。',en:"Grandkid — baseball, homerun hittable, boasted.",style:'Bright.'},
    {speaker:'hiroshi_elder',jp:'若い頃、地域の世話人として、アシスタント役、よくやったな。',en:"Youth — local-caretaker, assistant-role often-did.",style:'Sage.'},
    {speaker:'sachiko_grandma',jp:'息子、子供の頃、本当に体が小さかったわね、覚えてる?',en:"Son — child, really small body, remember?",style:'Wistful close.'},
  ]},
  {id:'conv_06660',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、店の前、ガーデニング、もっと整えへんか。',en:"Aoi — store-front, gardening, more arrange?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。納品、ぎりぎりセーフで、間に合いました、今朝。',en:"Yes. Delivery — just safe, made it, today.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'お客さん、新メニュー見て、ニヤニヤしてはるの、嬉しいで。',en:"Cust — new-menu-see, smirking, happy.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。エレガントな大人向けのコース、企画したいです。',en:"Yes. Elegant adult-course — plan want.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'常連さんのお決まりのオーダー、把握しとかんとな。',en:"Regulars' usual orders — grasp must.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'はい。野球チームのスポンサーで、ホームラン、たくさん打てる選手、応援したいです。',en:"Yes. Baseball sponsor — homerun-hittable players, support want.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'バイトのアシスタント、増やすか、検討中や、葵さん。',en:"Part-time asst — increase?, considering, Aoi.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。創業時のお店、本当に体が小さかったですよね、今思うと。',en:"Yes. Founding store — really small body, now-think.",style:'Wistful close.'},
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

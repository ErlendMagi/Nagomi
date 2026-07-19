import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_342 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ヨーグルト','ミシン','見合い','白黒','なかでも','慰め','日ごろ','ちまっ']
const B_T = ['国内外','使い分け','要員','分業','リモート','仕事場','スペック','スクロール']
const C_T = ['主治医','遺言','台頭','文科','担い手','陳情','微生物','消去']
const D_T = ['大将','造っ','初戦','日立','造形','フラワー','チューブ','ムリ']

const data = [
  // A
  {id:'conv_06801',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、朝、ヨーグルトに、いちご、入れてくれて、ありがとう!',en:"Mom — morn, yogurt + strawberry, thanks!",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'うん。ママのミシン、お祖母ちゃんから、引き継いだのよ、大事にしてる。',en:"Yes. Mom's machine — from Granny inherited, treasured.",style:'Tender.'},
    {speaker:'sho_child',jp:'お父さんとママ、お見合いで、結婚したって、知ってた、ぼく。',en:"Dad and Mom — arranged-marriage, knew, me.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんの白黒写真、アルバムに、たくさんあるわよ、見ようね。',en:"Grandpa b&w photos — album-many, see together.",style:'Warm.'},
    {speaker:'sho_child',jp:'今日のお弁当、なかでも、卵焼き、一番好き!',en:"Today's lunch — among all, omelet, fave!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お友達との喧嘩、ママに話して、慰めてもらおうね、翔くん。',en:"Friend-fight — to-Mom-talk, be-consoled, Sho.",style:'Soft.'},
    {speaker:'sho_child',jp:'日ごろの、お手伝い、ぼく、頑張ってるよ、見てくれてる?',en:"Daily helping — me, hard-working, watching?",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'翔くんが小さい頃、本当に、ちまっこくて、可愛かったわよ。',en:"Small-Sho — really small-cute, cute.",style:'Tender close.'},
  ]},
  {id:'conv_06802',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、朝のヨーグルト、メニューに加えたの、いいアイディアだよね。',en:"Aoi — morning yogurt menu-added, good idea.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。お祖母ちゃんのミシン、まだ使ってるよ、私、最近。',en:"Yeah. Granny's machine — still using, lately.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'いとこ、見合い結婚したって、聞いたよ、最近、私。',en:"Cousin — arranged-marriage, heard, lately, me.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'店の写真、白黒でアレンジ、お洒落な雰囲気、出るよ。',en:"Store photo — b&w-arrange, stylish air, out.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'秋の果物、なかでも、柿、私、一番好きなのよ。',en:"Autumn fruit — among all, persimmon fave, me.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'失恋の慰め、メイちゃん、来てくれて、嬉しかったよ、葵としても。',en:"Heartbreak console — Mei came, glad, as Aoi too.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'日ごろの感謝、葵に、伝えたいんだ、本当に、いつもありがとう。',en:"Daily thanks — to Aoi, convey-want, really, always thanks.",style:'Tender.'},
    {speaker:'aoi_barista',jp:'昔のメイちゃん、ちまっこくて、可愛かったわよね、子供の頃。',en:"Old Mei — small-cute, in childhood.",style:'Wistful close.'},
  ]},
  {id:'conv_06803',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、朝食、ヨーグルト、最近、よく食べてるよ、私、健康のため。',en:"Riku — breakfast yogurt often-eat, lately, health.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。家庭科の授業で、ミシン、初めて、ちゃんと使えたぜ、俺。',en:"Yeah. Home-ec — sewing-machine, first-properly-used, me.",style:'Proud.'},
    {speaker:'sakura_teen',jp:'うちの両親、お見合い結婚なんだって、ちょっと、驚いたよ、最近、知った。',en:"My parents — arranged-marriage, slightly surprised, lately learned.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'昔の卒業アルバム、白黒で、お父さんが映ってたよ、面白い。',en:"Old grad-album — b&w, Dad in, fun.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'部活、なかでも、合宿が、一番、思い出に残るんだよね、楽しかった。',en:"Club — among all, camp, most-memorable, fun.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'お前の慰めの言葉、結構、効いてるぜ、桜、ありがとうな。',en:"Your console-words — quite effective, Sakura, thanks.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'日ごろの練習、お前、頑張ってるよね、リク、応援してる、いつも。',en:"Daily practice — you hard-working, Riku, cheering always.",style:'Soft.'},
    {speaker:'riku_teen',jp:'小学校の写真、お前、めっちゃ、ちまっこかったよな、可愛かったぜ。',en:"Elem photo — you, super-small-cute, cute.",style:'Wry close.'},
  ]},
  {id:'conv_06804',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'朝のヨーグルト、毎日、続けてるな、ばあさん、健康に、いいよ。',en:"Morning yogurt — daily continues, gran, health-good.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。古いミシン、修理して、孫の浴衣、縫ってあげたいわね。',en:"Yes. Old machine — repaired, grandkid's yukata-sew-want.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'私たちのお見合い、もう、半世紀以上、前のことだな、ばあさん。',en:"Our arranged-meet — over half-century ago, gran.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'昔の写真、白黒ばかりだったわね、当時の、思い出よ。',en:"Old photos — b&w-only, era memories.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'孫の中なかでも、特に、翔くんが、私には、可愛く見えるんだよ。',en:"Among grandkids — especially Sho, cute-look, me.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、あなたの慰め、私、いつも、頼りにしていたわよ、本当に。',en:"Youth — your console, me always, relied, really.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'日ごろの感謝、お互いに、忘れないでいたいな、ばあさん。',en:"Daily thanks — each-other, don't-forget want, gran.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃の私、確かに、ちまっこかったでしょ、写真で見ると。',en:"Youth me — surely, small-cute, photo-see.",style:'Wistful close.'},
  ]},
  {id:'conv_06805',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','mei_romantic'],targets:A_T,scenario:'A uni student and friend chat',lines:[
    {speaker:'mei_romantic',jp:'蓮さん、朝、ヨーグルト、よく食べているそうですね、研究の前に。',en:"Ren — morn yogurt often-eat, pre-research.",style:'Polite.'},
    {speaker:'ren_uni',jp:'うん。学生時代、ミシン、お母さんから、教わったよ、メイちゃん。',en:"Yes. Student-era — machine, Mom-taught, Mei.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'蓮さんのご両親、お見合いだったんですか、それとも、恋愛?',en:"Ren's parents — arranged?, or romance?",style:'Curious.'},
    {speaker:'ren_uni',jp:'うん。古い研究資料、白黒の写真、貴重なんだよ、メイちゃん。',en:"Yes. Old research-mat — b&w photos, precious, Mei.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'蓮さんの研究、なかでも、社会史、私、一番、興味あります。',en:"Ren-research — among all, soc-hist, fave, me.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'査読、厳しい時、メイちゃんの言葉、慰めになるよ、本当に。',en:"Review — strict, Mei-words, consoling, really.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'蓮さん、日ごろの努力、見ています、すごいです、いつも。',en:"Ren — daily effort, see, amazing, always.",style:'Soft.'},
    {speaker:'ren_uni',jp:'子供の頃の僕、ちまっこかったって、母が、よく言っているよ。',en:"Childhood me — small-cute, Mom often says.",style:'Reflective close.'},
  ]},

  // B
  {id:'conv_06806',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'国内外の市場動向、毎週、私に、報告しろ。',en:"Dom-overseas market trend — weekly report.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。語彙、相手に応じて、使い分ける訓練、社員に、徹底中です。',en:"Yes. Vocab — per-counterpart switch-train, staff-thorough.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'プロジェクト要員、来月、増員する方針だ。',en:"Project staff — next-month expand policy.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。製造ラインの分業体制、効率化を、進めています。',en:"Yes. Production-line division-system, efficient advancing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'リモートワーク、定着させる方針で、いけ。',en:"Remote-work — settle-policy go.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。私の仕事場、整理整頓を、心がけております。',en:"Yes. My workplace — tidy, mindful.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新製品のスペック、競合に勝る形で、設定しろ。',en:"New product spec — competitor-beat form, set.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内SNS、画面、スクロール、しやすく、改修しました。',en:"Yes. Internal SNS — screen-scroll, easy refurbished.",style:'Close.'},
  ]},
  {id:'conv_06807',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'国内外、両方の展示会に、出展しましょうね、来年。',en:"Dom-overseas — both fairs, exhibit, next year.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。書類の使い分け、新人にも、教えております。',en:"Yes. Doc-switch — newbie-teach.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'年末の繁忙期、要員確保、急いでね。',en:"Year-end busy — staff secure, hurry.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。営業と企画、分業を、明確化しています。',en:"Yes. Sales vs plan — division clarified.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'リモート勤務、評価制度、見直しが、必要よね。',en:"Remote work — eval-system, review needed.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。私の仕事場、今度、写真、共有しますね、整理しました。',en:"Yes. My workplace — soon, photo share, organized.",style:'Cheerful.'},
    {speaker:'yuki_office',jp:'競合のスペック表、比較資料、明日まで、お願いね。',en:"Rival spec-table — compare-mat, by-tomorrow, please.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。ウェブサイト、無限スクロール、ユーザーから、好評です。',en:"Yes. Website — infinite-scroll, user-favorable.",style:'Close.'},
  ]},
  {id:'conv_06808',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、国内外の研究動向、把握する習慣、つけろ。',en:"Ren — dom-overseas research trend, grasp habit, build.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。専門用語、論文と発表で、使い分けるよう、心がけます。',en:"Yes. Tech-terms — paper vs pres, switch mindful.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'共同研究の要員、君も、推薦できる人材を、探せ。',en:"Joint-research staff — also rec-able person, find.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究室内の分業、後輩と、連携して、進めます。',en:"Yes. Internal division — with juniors, coord-advance.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'リモート学会、参加機会、増えてきたな、君らも。',en:"Remote conf — attend-chances increased, also you.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究室の仕事場、整理、徹底しています。',en:"Yes. Lab workplace — tidy thorough.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'新装置のスペック、論文に、しっかり、記載しろ。',en:"New device spec — paper, properly state.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文ファイル、無駄にスクロール、しないよう、目次、整備しました。',en:"Yes. Paper file — needlessly-scroll-not, TOC organized.",style:'Earnest close.'},
  ]},
  {id:'conv_06809',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、国内外の連携、強化しております、最近。',en:"Police — dom-overseas link, strengthen lately.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。当社、業務用と私用、しっかり、使い分けるよう、徹底中です。',en:"Yes. Our co — biz vs personal, switch thorough.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、警備要員の派遣、年末、ご相談いたします。',en:"Police — guard-staff dispatch, year-end consult.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社内、警察協力、分業で、対応しております。',en:"Yes. Internal — police-coop, division handle.",style:'Update.'},
    {speaker:'takeda_officer',jp:'リモート聴取、最新の手法として、活用しております。',en:"Remote interview — latest method utilized.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察の仕事場、警察署、最近、改装されましたね。',en:"Yes. Police workplace — station, lately renovated.",style:'Update.'},
    {speaker:'takeda_officer',jp:'防犯機器のスペック、各社、比較、慎重にしております。',en:"Crime-prev spec — each co, compare careful.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。被害届の電子化、スクロール、操作性、検討中です。',en:"Yes. Damage-report digital — scroll, usability studying.",style:'Close.'},
  ]},
  {id:'conv_06810',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時、国内外、両方を、視野に入れていた、私も。',en:"Founding — dom-overseas both viewed, me too.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。社員、TPOに応じた使い分け、徹底しております。',en:"Yes. Staff — TPO-switch thorough.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'創業時、たった三人の要員から、始まったな、覚えてる?',en:"Founding — only 3 staff, started, remember?",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。創業の精神、分業を超えた、家族的な絆、引き継いでいます。',en:"Yes. Founding spirit — beyond division, family-bond, inherited.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'時代が変わっても、リモートばかりでは、社風、失われるぞ。',en:"Era-change — remote-only, corp-culture lost.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業者の仕事場、社史館で、再現しました。',en:"Yes. Founder workplace — corp-museum, recreated.",style:'Update.'},
    {speaker:'hiroshi_elder',jp:'品質のスペック、創業時と、同じこだわりで、追求しろ。',en:"Quality spec — same insistence as founding, pursue.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。社内資料、ペーパーレスでも、スクロール、しやすく、整備しています。',en:"Yes. Internal docs — paperless, scroll-easy, organize.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06811',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者さんの主治医、私が、長く担当しております。',en:"Ren — patient's primary-doctor — me, long-charge.",style:'Calm.'},
    {speaker:'ren_uni',jp:'最近、患者さんの遺言、医療倫理として、扱われる場面、増えていますね。',en:"Lately patient-will — med-ethics, handle-scenes increase.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。AI診断、医療界での台頭、目覚ましいです。',en:"Yes. AI diag — med-world rise, remarkable.",style:'Informative.'},
    {speaker:'ren_uni',jp:'文科省の予算、医療研究への投入、増えていますか、最近?',en:"MEXT budget — med-research input, increase lately?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。次世代医療の担い手、若手医師に、期待しています。',en:"Yes. Next-gen med carriers — young-doc expect.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医師会の陳情、政府に対して、行われましたよね、先月。',en:"Med-assoc petition — to-gov done, last month.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。微生物研究、感染症対策に、欠かせません。',en:"Yes. Microbe research — infect-measures, indispensable.",style:'Informative.'},
    {speaker:'ren_uni',jp:'病歴データ、消去する基準、医療法で、明確化、必要ですよね。',en:"Med-record data — erase-criteria, med-law, clarify needed.",style:'Reflective close.'},
  ]},
  {id:'conv_06812',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、被害者の主治医、証言、いただいております。',en:"Case — victim primary-doctor, testimony received.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者、遺言のような手記、現場に、残していたんですね。',en:"Suspect — will-like memoir, site-left.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。地域に、組織犯罪、台頭しております、最近。',en:"Yes. Region — org-crime rise, lately.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'文科省、教育現場の犯罪対策、強化していますね。',en:"MEXT — edu-site crime-measures, strengthening.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。地域防犯の担い手として、自治会、活動されています。',en:"Yes. Local crime-prev carriers — local-assoc, active.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'住民からの陳情、警察、丁寧に、対応されていますね。',en:"Resident-petitions — police carefully handle.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。鑑識、微生物のレベルで、捜査、進めております。',en:"Yes. Forensics — micro-level inv-advancing.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'証拠の消去、犯人の手口、巧妙化していますね、最近。',en:"Evidence erase — crim-method, sophisticated lately.",style:'Curious close.'},
  ]},
  {id:'conv_06813',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses social research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、皇室の主治医、歴史的役割、論じていますね。',en:"Ren — paper, imperial-fam primary-doctor, hist-role argued.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。歴史的人物の遺言、社会に、深い影響を、与えています。',en:"Yes. Hist-figure will — soc-deep effect.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後、新興勢力の台頭、文化、急激に、変わりましたね。',en:"Post-war — new-force rise, culture, drastic change.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。文科省の歴史的役割、戦後、何度も、再編されました。',en:"Yes. MEXT hist-role — post-war, multi-reorganized.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地域文化の担い手、高齢化、課題ですね、論文の中で。',en:"Local-culture carrier — aging, issue, in paper.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。市民、政府への陳情、戦後、活発化しました。',en:"Yes. Citizen — gov-petition, post-war activated.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'微生物学の発展、戦後の医療革命、支えましたね。',en:"Microbiology dev — post-war med-rev, supported.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。歴史的記憶の消去、世代交代と共に、進行していますね。',en:"Yes. Hist-memory erase — gen-change-with, advancing.",style:'Earnest close.'},
  ]},
  {id:'conv_06814',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp affairs',lines:[
    {speaker:'hiroshi_boss',jp:'創業者の主治医、長年、当社にも、ご縁があった人物だ。',en:"Founder primary-doctor — long, our co tie-existed.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。創業者の遺言、社是として、引き継いでおります。',en:"Yes. Founder will — as motto, inherit.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界、新興企業の台頭、警戒しろ。',en:"Industry — startup rise, alert.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。文科省のガイドライン、製品開発に、活用しています。',en:"Yes. MEXT guideline — product-dev utilize.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の担い手、社員、若手から、育てろ。',en:"Industry carriers — staff, from-youth raise.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、政府への陳情活動にも、参加しております。',en:"Yes. Staff — gov-petition activity also attend.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'微生物分野、新規事業として、検討中だ。',en:"Microbe field — new-biz studying.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。古いデータの消去、計画的に、進めております。',en:"Yes. Old-data erase — planned advancing.",style:'Close.'},
  ]},
  {id:'conv_06815',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through cultural studies',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、研究、地域の主治医の役割、丁寧に、論じていますね。',en:"Sakura — research, local primary-doctor role, careful-argued.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。地方の長老の遺言、現代まで、伝わっている事例も、ありました。',en:"Yes. Local-elder will — modern-conveyed cases existed.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'女性の社会的台頭、戦後、急速に、進みましたね。',en:"Female soc-rise — post-war rapid advanced.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。文科省の教育改革、地方にも、影響、与えました。',en:"Yes. MEXT edu-reform — local also affected.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統文化の担い手、若い世代に、移行する重要性、論じていますね。',en:"Trad-cult carrier — to youth transition importance, argued.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。地域の陳情活動、市民の主体性、扱いました。',en:"Yes. Local petition — citizen-init, handled.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'微生物の影響、地域の食文化にも、関係しますね。',en:"Microbe impact — local food-culture also related.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。古い記録の消去、地域の歴史保全に、課題、提起しました。',en:"Yes. Old-record erase — local-hist preserv, issue raised.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06816',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、お寿司屋さんの大将、最近、新メニュー、出してるよ、行こうよ。',en:"Aoi — sushi master, lately new-menu out, go.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。父が、若い頃、家を造ったって、聞いた、最近、話題に。',en:"Yeah. Dad — youth, home-built, heard lately, topic.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'高校野球、初戦、見に行ったよ、私、彼と、応援に、行った。',en:"HS baseball — first-match watched, with bf, cheer.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'日立の家電、新しく、買ったの、性能、いいよ、私、満足。',en:"Hitachi appli — new bought, perf good, satisfied.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'美術館、現代造形作家の展示、面白かったよ、葵、行ってみて。',en:"Museum — modern form-artist exhibit, fun, Aoi go-try.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'店内、フラワーアレンジメント、新しく、変えたよ、季節感、出るね。',en:"Interior — flower-arrange new changed, season-feel out.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'絵の具のチューブ、たくさん使う趣味、結構お金、かかるよね、絵画。',en:"Paint tubes — many-use hobby, costly, painting.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'ムリしないで、葵としても、心配だよ、メイちゃん、最近、忙しいよね。',en:"Don't-overdo — as Aoi, worry, Mei, lately busy.",style:'Concerned close.'},
  ]},
  {id:'conv_06817',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お寿司の大将、優しいよね、いつも、ぼくに、玉子、サービスしてくれる。',en:"Mom — sushi master kind, always egg-service me.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。お祖父ちゃん、若い頃、自分で、家を造ったって、聞いてる?',en:"Yes. Grandpa — youth, self-home-built, heard?",style:'Warm.'},
    {speaker:'sho_child',jp:'サッカー、初戦、勝ったよ、ぼくのクラス!ママ、聞いて!',en:"Soccer — first-match won, my class! Mom, hear!",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'お父さんの会社、日立系列の電子部品、扱っているのよ、知ってた?',en:"Dad's co — Hitachi-affil electronic-parts, knew?",style:'Reflective.'},
    {speaker:'sho_child',jp:'図工で、造形遊び、楽しかったよ、粘土で、立体作ったの。',en:"Art — form-play fun, clay, 3D made.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃん、フラワーアレンジメント、習い始めたって、お母さんが言ってたわよ。',en:"Granny — flower-arrange learning, Mom said.",style:'Soft.'},
    {speaker:'sho_child',jp:'歯磨き粉のチューブ、新しく、変えたよ、お母さん、見て、フルーツ味!',en:"Toothpaste tube — new changed, Mom, see, fruit-flavor!",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'ムリして、勉強し過ぎないようにね、翔くん、休憩も、大事よ。',en:"Don't-overdo, lest over-study, Sho, rest vital.",style:'Tender close.'},
  ]},
  {id:'conv_06818',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お父さん、寿司屋の大将みたいで、料理上手だよね、家でも。',en:"Riku — Dad, sushi-master-like, cook-good, even home.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。プラモ、新作、お祖父ちゃん、造ったって、見せてくれたよ、昨日。',en:"Yeah. Plamo — new, Grandpa built, showed yesterday.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'文化部、初戦、私たち、惨敗だったよ、対戦相手、強かったね。',en:"Cult-club — first-match, lost-bad, rival strong.",style:'Wry.'},
    {speaker:'riku_teen',jp:'家電量販店、日立コーナー、結構、品揃え、いいよな、近所の。',en:"Appli store — Hitachi corner, quite-stocked, local.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'美術部で、造形作品、文化祭、出すんだ、私、最近、頑張ってる。',en:"Art-club — form-work, cult-fest out, lately hard-working.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'校門前の、フラワーショップ、新しく、できたぜ、結構、人気らしい。',en:"Gate-front flower-shop — newly opened, popular.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'絵の具のチューブ、なかなか、減らないよね、リク、わかる?',en:"Paint tube — hardly-empty, Riku, get?",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前、テスト前、ムリしすぎるなよ、桜、体調、第一だぜ。',en:"You — pre-test, don't-overdo, Sakura, health first.",style:'Soft close.'},
  ]},
  {id:'conv_06819',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'近所の、寿司屋の大将、もう、何代目だろうな、覚えてるか、ばあさん?',en:"Local sushi-master — what-gen now, remember, gran?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。あなたが、若い頃、自分で、書斎を造ったわよね、覚えてる?',en:"Yes. Youth-you, self-study-built, remember?",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'高校野球、初戦、毎年、テレビで、見てしまうな、私。',en:"HS baseball — first-match, yearly, TV-watch, me.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'日立の冷蔵庫、若い頃、初めて、買ったのを、覚えているわよね。',en:"Hitachi fridge — youth, first-bought, remember.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'お祖父ちゃん、書道で、造形美、追求していたな、昔から。',en:"Grandpa — calligraphy, form-beauty pursued, old.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'近所のフラワーショップ、最近、お祖父ちゃんに、頼んでるのよ、お墓参り用。',en:"Local flower-shop — lately ordering, for grave-visit.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'昔の練り歯磨き、チューブの形、懐かしいな、覚えてる?',en:"Old toothpaste — tube shape, nostalgic, remember?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'年齢のこと、ムリしないようにしましょうね、二人で、お互いに。',en:"Age-thing — don't-overdo, two, each-other.",style:'Tender close.'},
  ]},
  {id:'conv_06820',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a menu',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、ぼく、和食の大将って、呼ばれるの、まんざらでもないんやで。',en:"Aoi — me, washoku-master called, not-bad.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。新店舗、内装、こだわって、造ってまいります。',en:"Yes. New store — interior, insistent, build.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'チェーン展開、初戦は、地元の駅前店、勝負やで、葵さん。',en:"Chain — first-match, local-stn front, battle, Aoi.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。日立のオーブン、新規導入、検討しております。',en:"Yes. Hitachi oven — new-intro studying.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'料理は造形美も、大事やで、見た目、命やからな。',en:"Cuisine — form-beauty too, vital, look life.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。フラワーアーティスト、お招きするイベント、企画しませんか。',en:"Yes. Flower-artist invite event — plan?",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'絵の具のチューブみたいに、ソース、絞り出すの、新しい技法、試そうか。',en:"Paint-tube-like — sauce squeeze, new tech, try?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。スタッフ、ムリせず、休めるような体制、整えていきたいですね。',en:"Yes. Staff — don't-overdo, rest-able system, want-organize.",style:'Warm close.'},
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

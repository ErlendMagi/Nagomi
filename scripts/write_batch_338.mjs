import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_338 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['まわし','近づき','ウサギ','改札','加熱','旨い','ヤバイ','思いつく']
const B_T = ['通告','知らさ','運送','日報','年内','償却','用地','代わる']
const C_T = ['執着','標的','浅草','鋼','富ん','気圧','献金','炭鉱']
const D_T = ['柔軟性','それだけに','試す','ディフェンス','冠','ビジュアル','レコーディング','引き分け']

const data = [
  // A
  {id:'conv_06721',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'sho_child',jp:'ママ、コマまわし、ぼく、できるようになったよ!',en:"Mom — top-spinning, me, became-able!",style:'Proud child.'},
    {speaker:'yumiko_mom',jp:'うん。雨雲、だんだん、近づいてるね、外、暗くなってきた。',en:"Yes. Rain-clouds — gradually approaching, outside dark.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お祖父ちゃんち、ウサギ、まだいるかな、会いたいな。',en:"Grandpa's — rabbit still?, want-meet.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'駅の改札、人、混んでたわね、さっき、行きに。',en:"Station gate — crowded, on way, earlier.",style:'Wry.'},
    {speaker:'sho_child',jp:'お餅、レンジで加熱したら、ふくらんだよ!',en:"Mochi — microwave-heated, puffed!",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さんが作ったカレー、めっちゃ旨いよね、翔くんも好きだよね。',en:"Dad's curry — super-tasty, Sho also-like.",style:'Warm.'},
    {speaker:'sho_child',jp:'宿題、まだ、ヤバイ、終わってないんだよ、ぼく。',en:"Homework — still, oh-no, not-done, me.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'いいアイディア、ふと、思いつくこと、あるわよね、翔くん。',en:"Good idea — suddenly think-of, sometimes, Sho.",style:'Soft close.'},
  ]},
  {id:'conv_06722',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、雑誌の見出し、回しまわし読みしてるよ、面白いね。',en:"Aoi — mag headline, pass-around-read, fun.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。新しい彼、メイちゃんに、もっと近づいてもいいのに。',en:"Yeah. New bf — to Mei, can-approach-more.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'子供の頃、家でウサギ、飼ってたんだよね、私。',en:"Childhood — home rabbit kept, me.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'改札前で、彼と待ち合わせ、よくしたよね、デートで。',en:"Pre-gate — bf-meet, often, dating.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'パン、レンジで加熱、すると、外サクサクになるよ。',en:"Bread — microwave-heat, outside-crisp.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'新作のケーキ、本当に旨いの、是非、食べていって、メイちゃん。',en:"New cake — really tasty, definitely-eat, Mei.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'彼の連絡、ヤバイ、急に途絶えちゃったの、不安。',en:"His contact — oh-no, suddenly cut, anxious.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'解決策、ふと、思いつくこと、あるかもよ、寝てる時とか。',en:"Solution — suddenly think-of, maybe, sleeping etc.",style:'Soft close.'},
  ]},
  {id:'conv_06723',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、ハンドル回し、上手いよな、自転車。',en:"Riku — handle-turn, you good, bike.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'うん。あいつ、最近、お前に近づきたいみたいだぜ、桜。',en:"Yeah. That guy — lately approach-want you, Sakura.",style:'Probe.'},
    {speaker:'sakura_teen',jp:'家の隣、ウサギ、飼い始めたって、聞いた?',en:"Neighbor — rabbit-keeping start, heard?",style:'Curious.'},
    {speaker:'riku_teen',jp:'改札、Suica、忘れたら、めっちゃ困るよな、リク。',en:"Gate — Suica forgotten, super-trouble, hey.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お弁当、レンジで加熱したら、香りが、すごかったよ。',en:"Lunch — microwave-heated, scent intense.",style:'Animated.'},
    {speaker:'riku_teen',jp:'近所の新しいラーメン屋、めっちゃ旨いって、聞いたぜ。',en:"Local new ramen — super-tasty, heard.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'部活、ヤバイ、来週、強豪と試合だよ、緊張する。',en:"Club — oh-no, next week, strong-team match, nervous.",style:'Animated.'},
    {speaker:'riku_teen',jp:'試合の戦略、寝てる時、ふと思いつくこと、あるんだよな、俺。',en:"Match strat — sleep, sudden-think-of, me.",style:'Reflective close.'},
  ]},
  {id:'conv_06724',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'お祖父ちゃんが、コマ回し、教えてくれたな、子供の頃。',en:"Grandpa — top-spin taught, childhood.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。台風、関東に近づいてるって、ニュースで言ってたわね。',en:"Yes. Typhoon — Kanto approaching, news said.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'昔、お祖父ちゃんち、庭で、ウサギ、飼っていたわね、覚えてる?',en:"Old days — Grandpa's, garden rabbit kept, remember?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'駅の改札、最近、ICカードばかりで、楽になったわね。',en:"Station gate — lately IC-card, easy.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'おでん、加熱しなおすと、味、染み込むんだよな。',en:"Oden — reheat, flavor-soaks.",style:'Practical.'},
    {speaker:'sachiko_grandma',jp:'孫が作ってくれたお菓子、本当に旨かったわね、あなた。',en:"Grandkid-made sweet — really tasty, dear.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'年金、ヤバイ状況だな、最近のニュース、心配だ。',en:"Pension — oh-no situation, recent news, worry.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'いい解決策、ふと、思いつくのよ、寝る前にね、私。',en:"Good solution — suddenly think-of, pre-sleep, me.",style:'Soft close.'},
  ]},
  {id:'conv_06725',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、ハンドル回し、ちゃんと、両手で持ってね、自転車。',en:"Sho — handle-turn, properly, both-hands hold, bike.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、メイ姉さんに近づきたいんだ、もっと。',en:"Mei-sis — me, want-closer to Mei-sis.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'動物園で、ウサギさん、撫でたわね、楽しかったね、翔くん。',en:"Zoo — rabbit-pat, fun, Sho.",style:'Warm.'},
    {speaker:'sho_child',jp:'改札を、ぼく、ピッてするの、お姉さんと一緒にできるよ。',en:"Gate — me, beep-do, with sis-able.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'お弁当、レンジで加熱したから、温かいよ、食べようね。',en:"Lunch — microwave-heated, warm, eat.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さんが作ってくれたサンドイッチ、めっちゃ旨いよ!',en:"Mei-sis sandwich — super-tasty!",style:'Excited.'},
    {speaker:'mei_romantic',jp:'最近、雨が、ヤバイ、強くなってきたわね、屋根の下に行きましょう。',en:"Lately rain — oh-no, intensified, under-roof go.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さんと遊ぶアイディア、いっぱい、思いつくよ、ぼく。',en:"Mei-sis play-ideas — lots think-of, me.",style:'Eager close.'},
  ]},

  // B
  {id:'conv_06726',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews business operations',lines:[
    {speaker:'hiroshi_boss',jp:'取引先からの通告、内容、確認しろ。',en:"From-partner notice — content verify.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。重要な案件は、社員一同、知らされております。',en:"Yes. Vital matters — all-staff, informed.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'運送会社との契約、来月、見直す。',en:"Shipping-co contract — next month, review.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。日報、毎日、丁寧に、書かせております。',en:"Yes. Daily report — daily carefully written.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'プロジェクト、年内に、完了を目指せ。',en:"Project — within-year aim-complete.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。設備の償却年数、見直しております。',en:"Yes. Equip-deprec years — reviewing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新工場の用地、東京近郊で、調査しろ。',en:"New factory site — Tokyo-suburb, survey.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。会議に、私が代わる形で、出席することも、できます。',en:"Yes. Meet — replace-form, attend-able too.",style:'Close.'},
  ]},
  {id:'conv_06727',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'人事異動の通告、各部署に、出しましたね。',en:"HR-transfer notice — each dept out.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。社員、新人事は、すでに知らされております。',en:"Yes. Staff — new-HR, already informed.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'運送業界の人手不足、対策、考えないとね。',en:"Shipping-staff shortage — measures must-think.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。日報をデジタル化、来期、進めます。',en:"Yes. Daily-report digital — next term, advance.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'採用、年内に、すべて、終わらせたいわね。',en:"Hiring — within-year, all done.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。サーバーの償却計算、明日、提出いたします。',en:"Yes. Server-deprec calc — tomorrow submit.",style:'Update.'},
    {speaker:'yuki_office',jp:'本社近くの用地、購入を、検討中よ。',en:"HQ-near site — purchase studying.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。私が、君に代わる形で、対応、可能です。',en:"Yes. Me replace-form — handle possible.",style:'Close.'},
  ]},
  {id:'conv_06728',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究、中止の通告、来ないようにな。',en:"Ren — research, stop-notice, don't come.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。プロジェクト進捗、メンバーに、共有し、知らされています。',en:"Yes. Project progress — members shared, informed.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究機器の運送、業者と、手配しろ。',en:"Research equip-shipping — vendor arrange.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究の日報、しっかり、つけております。',en:"Yes. Research-daily report — properly kept.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'論文提出、年内に、間に合わせろ。',en:"Paper submit — within-year, on-time.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究費の償却計算、勉強しております。',en:"Yes. Research-fund deprec calc — studying.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'共同研究の用地、大学側と、調整しろ。',en:"Joint-research site — uni-side coord.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先輩に代わる形で、私が、発表することも、考えています。',en:"Yes. Replacing senpai — pres-do considering.",style:'Earnest close.'},
  ]},
  {id:'conv_06729',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、立ち退きの通告、地域住民に、出しました。',en:"Police — eviction notice, residents-out.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。捜査の進捗、御社にも、知らされている範囲で、共有しています。',en:"Yes. Inv-progress — your-co also informed-range shared.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'容疑者、運送業者を装って、移動しておりました。',en:"Suspect — shipping-disguised, moving.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社、日報を、警察に提出することも、可能です。',en:"Yes. Our co — daily-report, police-submit possible.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'捜査、年内に、目処をつけられそうです。',en:"Inv — within-year, prospects-set.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。被害品、償却扱い、検討する必要、出てきました。',en:"Yes. Damaged goods — deprec-treatment, study needed.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察署の用地、地域内で、変更されました。',en:"Police-station site — locally, changed.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。担当に代わる形で、ご報告、申し上げます。',en:"Yes. Replacing rep — report give.",style:'Close.'},
  ]},
  {id:'conv_06730',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時、解雇の通告、出した日のこと、忘れない。',en:"Founding — fire-notice issued day, unforget.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。社員、人事方針は、しっかり、知らされております。',en:"Yes. Staff — HR policy, properly informed.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'運送業との関係、私の代から、信頼を、築いてきた。',en:"Shipping relation — since my era, trust-built.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。社員の日報、私も、毎日、目を通しています。',en:"Yes. Staff daily-report — also daily-review.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'借入の返済、年内に、計画を立てろ。',en:"Loan-repay — within-year, plan-build.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業期の設備、すべて、償却を、完了いたしました。',en:"Yes. Founding equip — all deprec-complete.",style:'Update.'},
    {speaker:'hiroshi_elder',jp:'創業時の用地、今でも、残しておけ、大切な土地だ。',en:"Founding site — still keep, precious land.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんに代わる形で、創業祭の挨拶、私が、いたします。',en:"Yes. Replacing Dad — corp-fest greeting, do me.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06731',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、明治期、過剰な執着、論じていますね。',en:"Ren — paper, Meiji-era, excess-attachment argued.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。当時、知識階級が標的にされたケース、扱いました。',en:"Yes. Era — intellect-class targeted cases, handled.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'浅草の文化、明治期、活気に、満ちていましたね。',en:"Asakusa culture — Meiji, vibrant.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。鋼鉄産業、近代化を支えた、基盤でした。',en:"Yes. Steel industry — modernization-supporting base.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'明治政府、財政に富んでいた時代、外交、強気でしたね。',en:"Meiji gov — wealth-rich era, diplo bold.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。気圧の変動を観測する技術、当時、輸入していました。',en:"Yes. Pressure-observ tech — era-imported.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'政治献金の慣行、明治期にも、問題視されていましたね。',en:"Pol-donation custom — Meiji-era also, problematized.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。九州の炭鉱、近代日本の経済を、支えました。',en:"Yes. Kyushu coal-mine — mod-Japan econ, supported.",style:'Earnest close.'},
  ]},
  {id:'conv_06732',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a complex case',lines:[
    {speaker:'takeda_officer',jp:'本件、被害者への執着、容疑者から、感じられました。',en:"Case — victim-attachment, from suspect felt.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者、標的にされていた可能性、高いですね。',en:"Victim — targeted possibility high.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者は、浅草付近で、目撃されました。',en:"Yes. Suspect — Asakusa-vicinity, witnessed.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'鋼製の凶器、現場、発見されたんですか。',en:"Steel-weapon — site, discovered?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。容疑者は、財に富んだ家庭、出身者でした。',en:"Yes. Suspect — wealth-rich family from.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'天候、気圧の急変、捜査に、影響しましたか。',en:"Weather — sudden-pressure, inv-affected?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、過去に、政治献金関係の疑惑が、ありました。',en:"Yes. Suspect — past, pol-donation suspicion existed.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地元の炭鉱跡地、不法投棄場所として、使われたんですね。',en:"Local coal-mine ruins — illegal-dump used.",style:'Curious close.'},
  ]},
  {id:'conv_06733',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses social health issues',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者さんの執着的な症状、医療として、対応中です。',en:"Ren — patient obsessive-symptoms, as med, handling.",style:'Calm.'},
    {speaker:'ren_uni',jp:'高血圧患者、心血管疾患、標的になりやすいですね。',en:"HTN patients — cardiovasc target-prone.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。浅草に、地域医療センター、新設されました。',en:"Yes. Asakusa — local-med-center, new-built.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療器具、鋼合金の進化、目覚ましいですね。',en:"Med-tools — steel-alloy progress, remarkable.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。栄養に富んだ食事、病後の回復、大切です。',en:"Yes. Nutr-rich diet — post-ill recovery, vital.",style:'Informative.'},
    {speaker:'ren_uni',jp:'気圧の変化、頭痛持ちの患者、影響、大きいですよね。',en:"Pressure change — migraine pts, impact large.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医療研究への企業献金、倫理問題、議論されています。',en:"Yes. Med-research corp-donation — ethics, discussed.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'昔の炭鉱労働者、塵肺の問題、根深いですね。',en:"Old coal-miners — pneumoconiosis, deep-rooted.",style:'Reflective close.'},
  ]},
  {id:'conv_06734',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'過去の成功への執着、新事業には、害になる。',en:"Past-success attachment — new-biz harmful.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。当社、業界の競争で、標的にされやすい立場です。',en:"Yes. Our co — industry rivalry, target-prone.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'浅草の支店、観光客対応、強化しろ。',en:"Asakusa branch — tourist-handle, strengthen.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。鋼材の調達、海外取引先と、契約済みです。',en:"Yes. Steel-procurement — overseas-partner contracted.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界経験に富んだ人材、積極的に、採用しろ。',en:"Industry-experience-rich talent — actively hire.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外市場、気圧の変化に強い製品、開発中です。',en:"Yes. Overseas market — pressure-strong products developing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'政治献金、当社、ガイドラインに沿って、行っています。',en:"Pol donation — per guideline, we conduct.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。炭鉱跡地の活用、再エネプロジェクト、進めております。',en:"Yes. Coal-mine site use — renew-energy project, advancing.",style:'Close.'},
  ]},
  {id:'conv_06735',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through cultural studies',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、伝統への執着、文化の変容、論じていますね。',en:"Sakura — paper, tradition-attachment, culture-change, argued.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。戦時下、芸術家が標的にされた事例、調べました。',en:"Yes. Wartime — artists-targeted cases, researched.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'浅草の大衆文化、戦後、復興の象徴でしたね。',en:"Asakusa pop-cult — post-war recovery symbol.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。鋼鉄の彫刻家、戦災から守った職人、印象的でした。',en:"Yes. Steel-sculptors — war-protected artisans, striking.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後、経済が富んでいくにつれ、文化、変わっていきましたね。',en:"Post-war — wealth-growing, culture changed.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。情報の気圧、戦時下、検閲が、厳しかったですね。',en:"Yes. Info pressure — wartime, censor strict.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'政治献金スキャンダル、戦後の歴史でも、繰り返されましたね。',en:"Pol-donation scandal — post-war hist, recurred.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。炭鉱閉山の歴史、地域社会の変遷、扱いました。',en:"Yes. Coal-mine closure hist — local-soc transition, handled.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06736',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、ヨガのおかげで、体の柔軟性、上がったよ、最近。',en:"Aoi — yoga-thanks, body-flex, up lately.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。久しぶりだもんね、それだけに、会えて嬉しいよ、メイちゃん。',en:"Yeah. Long-time — that-much, meet-glad, Mei.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'新しいレシピ、試すの、楽しみだよ、葵、お願いね。',en:"New recipe — trying, fun, Aoi, please.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'うちの弟、サッカーで、ディフェンス担当だよ、頑張ってる。',en:"My bro — soccer, defense charge, hard-working.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'お友達の結婚式、冠を被せる演出、感動的だったわよ。',en:"Friend's wedding — crown-place production, moving.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'店のロゴ、ビジュアル、新しくしたよ、可愛いでしょ?',en:"Store-logo — visual, new, cute?",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'歌手の彼、レコーディング、最近、忙しいって、聞いた。',en:"Singer-bf — recording, lately busy, heard.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'昨日の試合、引き分け、けっこう、悔しかったよね。',en:"Yesterday match — tie, quite frustrating.",style:'Reflective close.'},
  ]},
  {id:'conv_06737',cluster:'D',ambient:'park_distant_birds',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat about activities',lines:[
    {speaker:'sho_child',jp:'ママ、体育で、体の柔軟性、ほめられたんだよ、ぼく!',en:"Mom — PE, body-flex, praised, me!",style:'Proud child.'},
    {speaker:'yumiko_mom',jp:'うん。優しい翔くん、それだけに、ママ、嬉しいの、いつも。',en:"Yes. Kind Sho — that-much, Mom-glad, always.",style:'Tender.'},
    {speaker:'sho_child',jp:'新しい味、ぼく、試すの、好きだよ、勇気あるでしょ?',en:"New taste — me, try-like, brave?",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お兄ちゃん、サッカーで、ディフェンス、やってたわよね、覚えてる?',en:"Bro — soccer, defense done, remember?",style:'Warm.'},
    {speaker:'sho_child',jp:'お祭りで、王冠みたいな帽子、被ったよ、楽しかった!',en:"Fest — crown-like hat worn, fun!",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'動画の中、ビジュアル、すごく綺麗だわね、これ。',en:"Video — visual, very pretty, this.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お父さん、若い頃、レコーディングスタジオ、行ったことあるって。',en:"Dad — youth, recording studio, gone, said.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'今日のサッカー、引き分けだったわね、惜しかったわ。',en:"Today's soccer — tie, close.",style:'Soft close.'},
  ]},
  {id:'conv_06738',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、体の柔軟性、お前、頑張って伸ばしてるんだよね。',en:"Riku — body-flex, you, hard-extending.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'うん。練習、毎日やってるよ、それだけに、結果、出てる。',en:"Yeah. Practice daily, that-much, results-out.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'新しいレシピ、試すの、好きなんだよね、私、最近。',en:"New recipe — try-like, lately, me.",style:'Bright.'},
    {speaker:'riku_teen',jp:'サッカーで、ディフェンスのポジション、難しいよな。',en:"Soccer defense — hard.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'文化祭、お姫様の冠、衣装で着けるんだよ、私の役。',en:"Cult-fest — princess crown, costume wear, my role.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前のSNS、ビジュアル、めっちゃおしゃれだぜ、桜。',en:"Your SNS — visual, super-stylish, Sakura.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'軽音部、レコーディング室、新しく、できたって、知ってた?',en:"Music-club — recording-studio, new-built, knew?",style:'Curious.'},
    {speaker:'riku_teen',jp:'昨日の試合、引き分けだったから、次は、絶対勝とうな。',en:"Yesterday match — tie, next, def-win.",style:'Determined close.'},
  ]},
  {id:'conv_06739',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'最近、私、体の柔軟性、なくなってきたな、年だな。',en:"Lately — body-flex, lost, aged.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。長い人生、それだけに、今を、大切にしましょうね。',en:"Yes. Long life — that-much, now-treasure.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'新しいお茶、試すの、最近の、密かな楽しみだぞ、私。',en:"New tea — try-quiet-joy lately, me.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'息子、若い頃、サッカー、ディフェンスで、出てたわよね。',en:"Son — youth, soccer defense played.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'冠婚葬祭、若い頃、いっぱい出席したな、慌ただしかった。',en:"Cere — youth, much-attended, hectic.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'最近のテレビ、ビジュアル、綺麗になってきたわね、画質。',en:"Recent TV — visual, pretty, image.",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ラジオのレコーディング、見学したな、楽しかった。',en:"Youth — radio-recording, observed, fun.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'孫のサッカー、引き分けだったって、息子が言ってたわよ。',en:"Grandkid soccer — tie, son said.",style:'Warm close.'},
  ]},
  {id:'conv_06740',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、メニュー、季節に合わせる柔軟性、大事やで。',en:"Aoi — menu, season-match flex, vital.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。お客様、長年応援してくださってますね、それだけに、感謝しております。',en:"Yes. Cust, long-supporting, that-much grateful.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'新作スイーツ、試食会で、試そかな、葵さん。',en:"New sweet — tasting-event, try-out?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。サッカー応援イベント、ディフェンス陣を、特集しませんか。',en:"Yes. Soccer-support event — defense-line, feature?",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'冠婚葬祭のケータリング、新規事業として、検討中や。',en:"Cere catering — new biz studying.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。ホームページ、ビジュアル、改装、進めますね。',en:"Yes. Website visual — refresh, advance.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'店内動画のレコーディング、スタッフでやろか、葵さん。',en:"In-store video recording — staff-do, Aoi?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。先月の売上、引き分けで、現状維持です、ライバル店と。',en:"Yes. Last-month sales — tie, status-quo, vs rival.",style:'Reflective close.'},
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

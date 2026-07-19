import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_344 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['包み','吐い','おとなしく','しあわせ','ややこしい','蚊','いじっ','となり']
const B_T = ['役に立ち','即時','役場','強固','着信','インセンティブ','力量','上京']
const C_T = ['民俗','幼少','薄れ','彼方','亡くなり','作詞','蒸気','道路公団']
const D_T = ['おこし','悠','パズル','まみれ','井戸','花嫁','ミュージアム','メタル']

const data = [
  // A
  {id:'conv_06841',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お祖母ちゃんからの包み、何が入ってるんだろう、楽しみだね!',en:"Mom — Granny package, what-inside?, fun!",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。お祖父ちゃん、お酒、飲みすぎて、吐いちゃったみたいよ、昨日。',en:"Yes. Grandpa — over-drink, vomited yesterday.",style:'Wry.'},
    {speaker:'sho_child',jp:'ぼく、お外で、おとなしく、待っているよ、ママ、お買い物、行ってね。',en:"Me — outside, quietly-wait, Mom shop-go.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'翔くん、笑顔の時、しあわせそうで、ママも、嬉しいわよ、いつも。',en:"Sho — smile-time, happy-look, Mom-glad, always.",style:'Tender.'},
    {speaker:'sho_child',jp:'宿題、ややこしい問題、出てきたよ、ママ、教えてくれる?',en:"Homework — complicated problem, Mom teach?",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'夏は、蚊が、多いから、虫除けスプレー、忘れずに、つけようね。',en:"Summer — mosquito many, repel-spray, don't forget.",style:'Direction.'},
    {speaker:'sho_child',jp:'お父さんの工具、いじってたら、怒られちゃったよ、ぼく、ごめんなさい。',en:"Dad's tools — tweaked, scolded, sorry.",style:'Apologetic.'},
    {speaker:'yumiko_mom',jp:'となりのおばさん、優しい人ね、お裾分け、よくしてくれるわよ、本当に。',en:"Next-door aunt — kind, often-share, really.",style:'Warm close.'},
  ]},
  {id:'conv_06842',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、彼から、可愛い包み、もらったの、ドキドキしちゃう、私。',en:"Aoi — bf, cute package, received, heart-pounding, me.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。飲み会で、後輩、吐いちゃってさ、結構、大変だったよ、私たち。',en:"Yeah. Drink-party — junior vomited, quite hard, us.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'店内、お客様、おとなしく、静かに、お待ちくださっているわね、いつも。',en:"Interior — cust quietly waiting, always.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'メイちゃん、しあわせそうな顔、見れて、私も、嬉しいわよ、葵としても。',en:"Mei — happy-face seen, also glad, as Aoi.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'彼の家族関係、ややこしい感じで、ちょっと、心配なの、私。',en:"His family-relation — complicated, slightly worry, me.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'夏のテラス、蚊取り線香、置こうかしらね、お客様、気になるよね。',en:"Summer terrace — mosquito-coil place?, cust bothers.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'最近、スマホをいじってる時間、長くなっちゃったわよ、私、自覚してる。',en:"Lately — phone-tweak time, longer, aware.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'店のとなりに、新しいベーカリー、できたよ、見に行こう、メイちゃん!',en:"Store next-door — new bakery, see-go, Mei!",style:'Cheerful close.'},
  ]},
  {id:'conv_06843',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お母さんからの包み、お弁当、入ってたよ、嬉しかったよ、今朝。',en:"Riku — Mom-package, lunch, inside, glad, morning.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。先輩、合宿で、酔って、吐いてしまったらしいぜ、桜、聞いた?',en:"Yeah. Senpai — camp, drunk-vomited, Sakura, heard?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前、いつも、おとなしく、授業を、受けてるよね、まじめだね、リク。',en:"You — always quietly attend-class, serious, Riku.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前と一緒にいる時、結構、しあわせ感じるんだぜ、俺、桜。',en:"With you — quite happy-feel, me, Sakura.",style:'Bashful.'},
    {speaker:'sakura_teen',jp:'数学のテスト、ややこしい問題、出てきて、頭、痛かったよ、最後の方。',en:"Math test — complicated problems out, head-ache, end.",style:'Wry.'},
    {speaker:'riku_teen',jp:'夏の合宿、蚊が、すごく多いから、ちゃんと、対策しような、桜。',en:"Summer camp — mosquitoes many, properly-prep, Sakura.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'宿題、PCをいじってると、ついSNSばかり、見ちゃうわよね、私も。',en:"Homework — PC-tweak, SNS-only-see, me too.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お前の家のとなり、新しい家族、引っ越してきたって、聞いたぜ。',en:"Your home next-door — new family moved, heard.",style:'Curious close.'},
  ]},
  {id:'conv_06844',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'孫からの包み、開けたら、お祖父ちゃんの似顔絵、入ってたよ、嬉しいよ、本当に。',en:"Grandkid-package — opened, my portrait, glad, really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'うん。あなた、薬、飲んで、吐いちゃうこと、最近、あったわよね、心配。',en:"Yes. You — meds-took, vomited, lately, worry.",style:'Concerned.'},
    {speaker:'hiroshi_elder',jp:'お祖父ちゃんは、若い頃から、おとなしく、静かに、過ごしていたな、覚えてる?',en:"Grandpa — youth, quietly-spent, remember?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃の私たち、結構、しあわせだったわよね、貧しくても、本当に。',en:"Youth us — quite happy, even-poor, really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'年金の手続き、ややこしい書類、年寄りには、つらいよな、ばあさん。',en:"Pension proc — complicated docs, elder hard, gran.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'夏の縁側、蚊が、本当に多いから、網戸、もう、修繕しないとね、あなた。',en:"Summer porch — mosquito really many, screen must-repair.",style:'Direction.'},
    {speaker:'hiroshi_elder',jp:'おもちゃ、孫が、いじって、楽しんでいたな、昨日、可愛かったぞ。',en:"Toy — grandkid-tweaking, fun, yesterday cute.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'となりのおばさん、ご主人、亡くなったって、お悔やみ、行きましょうね、あなた。',en:"Next-door aunt — husband died, condol-go, dear.",style:'Soft close.'},
  ]},
  {id:'conv_06845',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、ママからの包み、お菓子、入ってるよ、お土産ね、嬉しい?',en:"Sho — Mom-package, sweets, inside, souv, glad?",style:'Warm.'},
    {speaker:'sho_child',jp:'うん。ぼく、お祖父ちゃんち、お酒の臭いで、吐いちゃいそうになったよ、強い臭い。',en:"Yeah. Me — Grandpa's, sake-smell, almost-vomit, strong.",style:'Wry child.'},
    {speaker:'mei_romantic',jp:'公園で、おとなしく、お絵描き、している翔くん、可愛いわね、メイ姉さん、嬉しい。',en:"Park — quietly drawing-Sho, cute, Mei-sis glad.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さんと一緒だと、しあわせな気持ち、いっぱいなの、ぼく。',en:"With Mei-sis — happy-feel, lots, me.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'絵本のお話、ややこしい場面、メイ姉さん、優しく、教えてあげるね。',en:"Book-story — complicated parts, Mei-sis gently teach.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さん、公園に、蚊、いっぱい、いるよ、虫除け、塗ってくれる?',en:"Mei-sis — park, mosquitoes many, repel paint?",style:'Eager.'},
    {speaker:'mei_romantic',jp:'砂場の道具、いじって、楽しそうだね、翔くん、お砂場、好きね。',en:"Sandbox tools — tweaking, fun, Sho, sandbox-like.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さんの家、ぼくの家のとなりだったら、嬉しいのにな、毎日、会えるね。',en:"Mei-sis's home — next-door, glad-if, daily-meet.",style:'Tender close.'},
  ]},

  // B
  {id:'conv_06846',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'若手の研究、業界に、役に立ちそうな提案、見守ろう、期待だな。',en:"Youth research — industry-usable proposal, watch, expect.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。重要案件、即時、対応するよう、社員に、徹底しました。',en:"Yes. Vital matters — instant-handle, staff thorough.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'地元の役場、行政書類、いつまでも、紙文化、続いているな。',en:"Local office — admin-docs, still paper-culture continues.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。組合との関係、強固なものに、しております、対話、続けて。',en:"Yes. Union relation — solid-made, dialogue continued.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お得意様からの着信、最優先で、対応しろ。',en:"VIP-cust calls — highest-priority handle.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員に、業績連動インセンティブ、来期から、導入予定です。',en:"Yes. Staff — perf-link incentive, next-term intro plan.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'部長の力量、信頼に値するな、引き続き、伸ばさせろ。',en:"Dept-head ability — worthy-of-trust, keep-grow.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。地方支社の社員、上京して、本社研修、受けています、今週。',en:"Yes. Local-branch staff — Tokyo-up, HQ-training receive, this week.",style:'Close.'},
  ]},
  {id:'conv_06847',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'新人研修、社員に、役に立ちましたよね、評価、高かったわよ、皆から。',en:"Newbie train — staff useful, eval high, from all.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。顧客対応、即時、行うよう、コールセンター、徹底しています。',en:"Yes. Cust-handle — instant, call-center thorough.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'市役所、地域の役場、連携を、強めていきましょう、いつも。',en:"City-hall — local-office link strengthen, always.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内のセキュリティ、強固な体制、構築しております、最新規格で。',en:"Yes. Internal security — solid system, building, latest standard.",style:'Update.'},
    {speaker:'yuki_office',jp:'業務携帯の着信音、社員が、気づきやすい音、選びましょうね。',en:"Biz-phone ring — staff-noticeable, choose.",style:'Soft.'},
    {speaker:'kenji_office',jp:'はい。インセンティブ制度、若手のモチベーション、上げる工夫、必要です。',en:"Yes. Incentive system — youth motivation, raise design needed.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'新任のチームリーダー、力量、見極めながら、配置していきましょう。',en:"New team-leader — ability assess-while, place.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。地方出身者、上京してから、馴染むまで、サポート、必要ですね。',en:"Yes. Local-born — Tokyo-up, until-fit, support needed.",style:'Close.'},
  ]},
  {id:'conv_06848',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、君の研究、産業界に、役に立ちうるか、視点を、持て。',en:"Ren — your research, industry-usable, view, hold.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。実験結果、即時、ノートに、記録するようにしています。',en:"Yes. Exp results — instant, notebook-record.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'役場の協力、地域研究、進める上で、欠かせないぞ。',en:"Local-office coop — regional research, indispensable.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究室、データ管理、強固な体制で、運営しております。',en:"Yes. Lab — data mgmt, solid system, running.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文査読、依頼の着信、即、確認するようにしろ、見落とすな。',en:"Paper review — req-call, instantly verify, don't miss.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究、論文掲載のインセンティブ、若手、活発化しています。',en:"Yes. Research — paper-publish incentive, youth activating.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究者として、君の力量、評価しているぞ、これからも、頑張れ。',en:"As researcher — your ability eval, keep-going.",style:'Praising.'},
    {speaker:'ren_uni',jp:'はい。地方の大学から、上京して、学んできて、本当に、よかったと思います。',en:"Yes. Local-uni — Tokyo-up, learned, glad really.",style:'Earnest close.'},
  ]},
  {id:'conv_06849',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'防犯講座、市民に、役に立ちますように、企画させていただきました。',en:"Crime-prev seminar — for citizen-useful, planned.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。緊急時、即時、警察への通報、社員、訓練しております。',en:"Yes. Emerg — instant police-report, staff trained.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'町の役場と連携、地域防犯、強化してまいります、来期も。',en:"Town-office link — local crime-prev strengthen, next term too.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社屋、強固なセキュリティ、構築済みです、警察様、安心ください。',en:"Yes. Corp-bldg — solid security built, police rest-assured.",style:'Update.'},
    {speaker:'takeda_officer',jp:'被害者からの着信、警察、二十四時間、受け付けております。',en:"Victim calls — police 24-hr accept.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。情報提供者、インセンティブ制度、警察、設けていらっしゃいますね。',en:"Yes. Tipsters — incentive system, police-set.",style:'Update.'},
    {speaker:'takeda_officer',jp:'担当官の力量、本件捜査でも、発揮されました、感謝しております。',en:"Officer ability — this-case shown, grateful.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。地方出身警察官、上京して、首都治安、守っていらっしゃいますね。',en:"Yes. Local officers — Tokyo-up, capital safety guarding.",style:'Close.'},
  ]},
  {id:'conv_06850',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期から、私の経験が、君に、役に立ちますように、語ってきた。',en:"Founding-era — my exp, you useful, told.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。社員、即時、お父さんの教えを、活かしてくれています、感謝しております。',en:"Yes. Staff — instant Dad-teach utilize, grateful.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'創業時、地元の役場、本当に、お世話になったな、覚えてる、お母さんの実家。',en:"Founding — local office, really-cared, remember, Mom's home.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。創業からの強固な信頼、私の代でも、引き継いでまいります。',en:"Yes. Founding solid-trust — my era too, inherit.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業当時、電話の着信、夜中でも、受けていたな、私たち、必死だった。',en:"Founding — phone-call, even midnight, received, desperate.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。社員のインセンティブ、お父さんの方針、継続しております、創業以来。',en:"Yes. Staff incentive — Dad-policy continued, since founding.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さんとして、君の経営力量、本当に、誇りに思っているよ。',en:"As Dad — your mgmt-ability, proud, really.",style:'Tender.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、若い頃、上京して、創業した、その勇気、私も、見習います。',en:"Yes. Dad, youth, Tokyo-up, founded, courage, also emulate.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06851',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses cultural research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、民俗学の視点、丁寧に、論じていますね、独創的で。',en:"Ren — paper, ethno-view, careful argued, original.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。インタビューした方の幼少期、戦後の苦労、印象的でした。',en:"Yes. Interviewees' childhood — post-war hardship, striking.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統が薄れていく現代、論文の中で、よく、捉えていますね、桜さん。',en:"Tradition fading-modern, in-paper well-captured, Sakura.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。失われた故郷、彼方への思い、住民の方々、抱いていらっしゃいました。',en:"Yes. Lost hometown — distant-yearning, residents felt.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦災で亡くなりになった方々、史料、丁寧に、扱われていますね。',en:"War-deceased — archive carefully handled.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。当時の作詞家、民衆の声、歌に、託していました、印象的に。',en:"Yes. Era lyricists — populace-voice, entrusted-to-song, strikingly.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'産業革命、蒸気機関、現代社会の出発点でしたね、文化的にも。',en:"Industry-rev steam-engine — modern-start, culturally too.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。道路公団の歴史、戦後復興期、社会基盤を、支えました。',en:"Yes. Road-pub hist — post-war recov, infrastructure-supported.",style:'Earnest close.'},
  ]},
  {id:'conv_06852',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、容疑者の周辺、民俗信仰、関わっているようです。',en:"Case — suspect-vicinity, folk-belief, involved.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者、幼少期、虐待を受けた経歴、ありますか?',en:"Suspect — childhood, abuse-record exist?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。被害者、記憶、徐々に、薄れていく中、証言、続けてくださっています。',en:"Yes. Victim — memory fading-while, testimony continuing.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、彼方へ、逃亡を、試みていたんですね、警察、捕まえました。',en:"Suspect — to-distant, flee-attempted, police-caught.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。事件直後に、被害者、お亡くなりになりました、残念です。',en:"Yes. Right-after-incident, victim died, regret.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'証拠の中に、作詞風のメモ、容疑者から、見つかったって聞きました。',en:"Among evidence — lyric-like memo, from-suspect, heard.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。現場周辺の蒸気プラント、調査対象に、入っております。',en:"Yes. Site-vicinity steam-plant — investigation target.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'道路公団管理の道路、警察、検問、設置されたんですね、容疑者発見のために。',en:"Road-pub-managed roads — police checkpoint set, for suspect.",style:'Curious close.'},
  ]},
  {id:'conv_06853',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health history',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、民俗医療と現代医療、融合の動き、最近、強まっています。',en:"Ren — folk-med, modern-med, merging trend, lately strengthening.",style:'Calm.'},
    {speaker:'ren_uni',jp:'患者さん、幼少期の病歴、診察に、参考にされていますね。',en:"Patients — childhood med-hist, exam-referenced.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。認知症で、記憶が薄れていく方、増えています、ご家族、つらいですね。',en:"Yes. Dementia — memory-fade increase, family-hard.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療技術、彼方の国にも、行き渡るよう、努めていますね、国際協力。',en:"Med-tech — distant-country also, reach-effort, int-coop.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。長らく、闘病されたご家族、お亡くなりになり、心からお悔やみ申し上げました。',en:"Yes. Long-illness family — died, condolence-said.",style:'Patient.'},
    {speaker:'ren_uni',jp:'作詞家の患者さん、創作活動、医療で、支えていらっしゃいますね。',en:"Lyricist patient — creative work, med-supported.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。古い病院、蒸気滅菌の歴史、見学したこと、ありますか、博物館で。',en:"Yes. Old hosp — steam-steriliz hist, visited?, museum.",style:'Informative.'},
    {speaker:'ren_uni',jp:'道路公団の救急道路、整備が、医療搬送の鍵ですね、地方にも。',en:"Road-pub emergency roads — maint key for med-transport, locally too.",style:'Reflective close.'},
  ]},
  {id:'conv_06854',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp legacy',lines:[
    {speaker:'hiroshi_boss',jp:'創業者の民俗文化への愛着、今でも、当社の精神に、息づいている。',en:"Founder folk-cult attachment — still in co-spirit alive.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。創業者の幼少期、地方の伝統に、影響を、受けたそうですね。',en:"Yes. Founder childhood — local-trad influenced, said.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'創業精神、薄れることなく、社員に、伝えていかなければならないな。',en:"Founding-spirit — non-fade, staff-convey must.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外、彼方の市場でも、当社の名前、知られております、最近。',en:"Yes. Overseas, distant market — our name known, lately.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'初代社長が、お亡くなりになって、もう、十年経つな、ばあさん、感慨深い。',en:"First pres died — 10 yrs past, deep-feeling.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。社歌、創業時、有名な作詞家に、依頼されたそうですね。',en:"Yes. Co-song — founding, famous lyricist commissioned, said.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'蒸気時代の創業精神、現代にも、引き継げ、製造への情熱、忘れるな。',en:"Steam-era founding-spirit — modern inherit, manuf-passion, don't forget.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。創業期、道路公団の整備、当社の輸送に、本当に、助けられました。',en:"Yes. Founding — road-pub maint, our shipping, really helped.",style:'Close.'},
  ]},
  {id:'conv_06855',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through cultural research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、民俗学の手法、丁寧に、用いていますね、研究の質、高いです。',en:"Sakura — paper, ethno-method, carefully-used, research-quality high.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。証言者の幼少期、戦中の体験、心に、響きました、本当に。',en:"Yes. Witness childhood — wartime exp, heart-resonated, really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦争の記憶、徐々に、薄れていく現代、論文の重要性、増していますね。',en:"War-memory fading-modern — paper-importance, increasing.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。引揚者、彼方の国から、戻ってきた苦労、聞きました、直接、複数の方から。',en:"Yes. Returnees — distant-country, return-hardship, heard, directly multi.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'証言者の方々、お亡くなりになる前に、語ってくださって、感謝、しないとですね。',en:"Witnesses — before-dying spoke, gratitude must.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時の作詞家、検閲下でも、メッセージ、込めていたんですね。',en:"Yes. Wartime lyricists — under-censor, message-embedded.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'蒸気機関車の時代、戦災を超えて、人々の希望でしたね、論文でも、扱っていますね。',en:"Steam-train era — beyond-war, hope, in paper handled.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。戦後の道路公団、戦災復興、社会基盤、支えました、重要な役割でした。',en:"Yes. Post-war road-pub — war-recov, infra-supported, vital role.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06856',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies and food',lines:[
    {speaker:'mei_romantic',jp:'葵、京都の和菓子、雷おこし、お土産で、買ってきたよ、食べて、見て。',en:"Aoi — Kyoto wagashi, kaminari-okoshi, souv, try-see.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。新しいお客様、悠輝さんって、いつも、来てくれるのよ、本当に、いい人。',en:"Yeah. New cust — Yuki-san, always come, kind.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'休日、お家で、パズル、何時間も、やっちゃうのよね、私、最近、はまってる。',en:"Holiday — home, puzzle hours, lately hooked.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'夏祭り、行ったら、汗まみれになるのよね、本当に、メイちゃん、覚悟、ね。',en:"Fest-go — sweat-soaked, really, Mei resolve.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'お祖父ちゃんち、井戸が、まだあるの、レトロな、雰囲気で、いいわよね。',en:"Grandpa's — well still, retro air, good.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'メイちゃん、いつか、花嫁さん、見たいわよ、私、絶対、参加するからね。',en:"Mei — someday bride, want-see, definitely attend.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'恵比寿のミュージアム、行ってみたいの、私、最近、美術、はまってる。',en:"Ebisu museum — want-go, art lately hooked.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'バンドの音楽、メタル系、ちょっと、聴いてみたんだけど、新鮮だったよ、葵、最近。',en:"Band-music — metal-type, slight tried, fresh, Aoi lately.",style:'Reflective close.'},
  ]},
  {id:'conv_06857',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat about activities',lines:[
    {speaker:'sho_child',jp:'ママ、おこしの、甘い、お菓子、おじいちゃんちで、もらったよ、美味しいの!',en:"Mom — okoshi sweet, Grandpa's-received, tasty!",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。お祖父ちゃんの名前、悠太郎さんって、いうのよ、知ってた、翔くん?',en:"Yes. Grandpa name — Yutaro, knew, Sho?",style:'Warm.'},
    {speaker:'sho_child',jp:'お祭りで買ったパズル、ぼく、毎日、完成させようって、頑張ってるよ。',en:"Fest puzzle — daily complete trying, me.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お外で遊ぶと、土まみれになっちゃうわね、翔くん、着替え、用意してるからね。',en:"Outside-play — dirt-soaked, Sho, change ready.",style:'Direction.'},
    {speaker:'sho_child',jp:'お祖父ちゃんち、井戸の水、冷たくて、美味しいんだよ、ママ!',en:"Grandpa's — well-water, cold-tasty, Mom!",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'ママも、若い頃、花嫁姿、お祖父ちゃんに、見せたわよ、嬉しい日だったわ。',en:"Mom too — youth, bride-form Grandpa-shown, glad day.",style:'Wistful.'},
    {speaker:'sho_child',jp:'恐竜のミュージアム、行きたいよ、ママ、夏休み、連れてって、お願い!',en:"Dino museum — go-want, Mom, summer take, please!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お父さんは、若い頃、メタル音楽、好きだったって、ママに、よく話してくれたわよ。',en:"Dad — youth, metal-music liked, Mom often-told.",style:'Reflective close.'},
  ]},
  {id:'conv_06858',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、修学旅行のお土産、雷おこし、買ってきたんだ、皆に、配ろうよ。',en:"Riku — school-trip souv, kaminari-okoshi, bought, distribute all.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。隣のクラス、悠斗って奴、結構、お洒落だって、評判だぜ、最近。',en:"Yeah. Next class — Yuto guy, stylish, reputation, lately.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'最近、パズル、家でやってる時間、増えてきたよ、私、ストレス解消に、いいの。',en:"Lately — puzzle home-time increased, stress-relief good.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'部活、練習後、泥まみれになるよな、いつも、ユニフォーム、洗濯、大変だぜ。',en:"Club — post-practice, mud-soaked, uniform-wash, hard.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'修学旅行、古い民家の井戸、見たよ、リアルで、感動したよ、私、本当に。',en:"School trip — old house well saw, real, moved, really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お姉さん、来年、花嫁になるんだぜ、結婚式、家族で、出るんだ、楽しみ。',en:"Sis — next year, bride, wedding, family-attend, fun.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'修学旅行で、ミュージアム、行ったよ、芸術品、たくさん、すごかったね、皆、感動してた。',en:"School trip — museum-went, artworks many, amazing, all moved.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前、メタルバンド、聴くんだろ、桜、ライブ、行こうぜ、今度、絶対。',en:"You — metal band listen, Sakura, live-go, next, def.",style:'Eager close.'},
  ]},
  {id:'conv_06859',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'お土産の雷おこし、孫が、買ってきてくれたな、嬉しいよ、ばあさん。',en:"Kaminari-okoshi souv — grandkid bought, glad, gran.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'うん。お祖父ちゃんが、悠仁さんって、お友達、覚えてる、若い頃?',en:"Yes. Grandpa — Hisahito-friend, remember, youth?",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'退職後、パズル、私の、新しい趣味になったんだ、頭の体操、本当に、いいよ。',en:"Post-retire — puzzle, my-new hobby, brain-exercise good.",style:'Bright.'},
    {speaker:'sachiko_grandma',jp:'昔、田植えのあと、二人で、泥まみれになって、笑ったわよね、覚えてる?',en:"Old — rice-plant after, two, mud-soaked, laughed, remember?",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'実家の井戸、もう、使われていないけど、まだ、残ってるな、ばあさん、覚えてる?',en:"Home well — no-longer-used, still remains, gran, remember?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'私たちの花嫁時代の写真、まだ、アルバムに、大切に、しまっているわよ、あなた。',en:"Our bride-era photo — still album, treasured, dear.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'国立ミュージアム、新しい展示、家族で、見に行きたいな、近いうちに。',en:"Nat museum — new exhibit, family-see want, near future.",style:'Eager.'},
    {speaker:'sachiko_grandma',jp:'孫、メタルバンドの音楽、聴いているけど、たまに、興味深いわね、最近の若い人。',en:"Grandkid — metal-music listen, occasionally intriguing, recent youth.",style:'Reflective close.'},
  ]},
  {id:'conv_06860',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、京都の和菓子、雷おこし、新メニューに、入れたいなと思てるんや。',en:"Aoi — Kyoto wagashi, okoshi, new-menu include-want.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。新店舗、悠然と、お客様を、お迎えできる、雰囲気、出したいですね。',en:"Yes. New store — yuzen-style cust-welcome, air want.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'地元のイベント、パズルピース、お土産にしようかと思てる、子供向けに。',en:"Local event — puzzle-piece souv plan, kid-aimed.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。料理人、泥まみれになるくらい、地元の畑、よく見学していますね、葵で。',en:"Yes. Cooks — mud-soaked-much, local-field often-visit, Aoi.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'新店の中庭、井戸風のデザイン、和風で、ええんちゃうか、葵さん。',en:"New store courtyard — well-style design, wa-good?, Aoi.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。結婚式のケータリング、花嫁さんに、喜んでもらえる演出、考えてみますね。',en:"Yes. Wedding-cater — bride-pleasing production, think.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'地元のミュージアムとコラボ、文化的なイベント、企画してみよか、葵さん。',en:"Local museum-collab — cult event plan?, Aoi.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。メタルバンドのライブ、店の二階で、開催するイベント、面白いかもしれませんね。',en:"Yes. Metal-band live — 2F-host event, fun maybe.",style:'Eager close.'},
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

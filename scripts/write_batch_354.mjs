import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_354 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['一途','沈む','バケツ','下町','花びら','散っ','微笑ん','快く']
const B_T = ['信条','造成','受理','一元化','大前提','証書','共用','黙々と']
const C_T = ['不全','悪循環','転移','結核','抗生','天文学','否認','思い知らさ']
const D_T = ['スリップ','安部','スパイク','発光','王妃','ラケット','昆布','ノンフィクション']

const data = [
  {id:'conv_07041',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さん、ママに、一途な人だよね、本当に、すごいよね。',en:"Mom — Dad to Mom one-devoted, amazing.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。夕日が、海に、沈むの、本当に、綺麗ね、翔くん、見て。',en:"Yes. Sunset — sea-sinks, pretty, Sho see.",style:'Soft.'},
    {speaker:'sho_child',jp:'お庭で、お父さん、バケツに、水、汲んできてくれたよ。',en:"Garden — Dad bucket-water drew.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんち、下町の雰囲気、残ってるわよね、本当に、好き。',en:"Grandpa's — downtown-air remains, love really.",style:'Wistful.'},
    {speaker:'sho_child',jp:'公園の桜、花びら、たくさん、散っていったね、ママ、寂しいね。',en:"Park cherry — petals many fell, lonely, Mom.",style:'Wistful child.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃん、写真を見て、優しく、微笑んでたわよ、翔くん、覚えてる?',en:"Granny — photo-see, gently smiled, remember?",style:'Tender.'},
    {speaker:'sho_child',jp:'お友達、ぼくの、お願い、快く、聞いてくれたよ、ママ、嬉しかった。',en:"Friend — my request gladly-heard, glad, Mom.",style:'Bright.'},
  ]},
  {id:'conv_07042',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、彼、一途な性格、本当に、私の、誇りなのよ、葵、本気で、感謝してる。',en:"Aoi — bf one-devoted, my pride, gratitude serious.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。夕方、お客様、少なくなって、気分、沈むこと、あるわよね、葵で。',en:"Yeah. Evening — cust-fewer, mood sink, in Aoi.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'掃除用のバケツ、新しいの、買ったの、葵で、便利よね、メイちゃん。',en:"Cleaning bucket — new bought, Aoi convenient, Mei.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'下町のレトロな、お店、葵、結構、好きなのよ、本当に、味が、ある。',en:"Downtown retro shops — Aoi quite-like, character.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'桜の花びら、テーブルに、散ったのを、見て、心、洗われた気分、葵。',en:"Cherry petals — table-fell, heart-cleansed feel, Aoi.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'メイちゃんの彼、メイちゃんを、見て、いつも、微笑んでるよね、ね。',en:"Mei's bf — sees-Mei, always smiles.",style:'Tender.'},
    {speaker:'mei_romantic',jp:'葵、私の頼みを、快く、聞いてくれて、本当に、ありがとう、感謝してる。',en:"Aoi — my request gladly-heard, gratitude really.",style:'Warm close.'},
  ]},
  {id:'conv_07043',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、部活に、一途だよね、本当に、感心してるよ、私、いつも。',en:"Riku — club-devoted, admire always.",style:'Praising teen.'},
    {speaker:'riku_teen',jp:'うん。試験落ちて、気分、沈むこと、あるよな、桜、お互いに、頑張ろう。',en:"Yeah. Test-fail mood sink, Sakura mutually try.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'体育で、バケツリレー、私、結構、得意なんだ、リク、知ってた?',en:"PE — bucket-relay quite-good, Riku knew?",style:'Animated.'},
    {speaker:'riku_teen',jp:'お祖父ちゃん、下町に、住んでるんだぜ、桜、お前も、一度、行ってみたら?',en:"Grandpa — downtown-lives, Sakura, once-go?",style:'Curious.'},
    {speaker:'sakura_teen',jp:'校庭の桜、花びら、もう、散ってしまったね、ちょっと、寂しいよね、リク。',en:"School cherry — petals already-fell, lonely, Riku.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'お前、テスト結果、見て、微笑んでたな、桜、よかったよな、本当に、努力、報われたな。',en:"You — test-result saw, smiled, Sakura, glad, effort-paid.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'リク、私の宿題、快く、手伝ってくれて、本当に、ありがとう、感謝してる、いつも、絶対。',en:"Riku — homework gladly-helped, gratitude always absolute.",style:'Warm close.'},
  ]},
  {id:'conv_07044',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさんに、一途だったよな、私、覚えてる、本当に、ロマンチックだったわよね。',en:"Youth — to gran one-devoted, romantic remember really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。夕日が、沈むのを、二人で、よく、見たわよね、覚えてる、あなた、本当に、思い出。',en:"Yes. Sunset sink — two often-saw, remember, dear memory.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔の井戸、バケツで、水、汲んでたよな、本当に、苦労した時代だった、ばあさん。',en:"Old well — bucket-water-drew, hardship era, gran.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'下町で、子育てしたわよね、私たち、本当に、思い出が、いっぱい、あるわよね、覚えてる?',en:"Downtown — childreared, memories many, remember?",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'庭の桜、花びら、散ってしまったな、ばあさん、また、来年、楽しみだな、二人で、見ようね。',en:"Garden cherry — petals fell, gran next-year fun, two see.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'孫が、微笑んでくれる、その顔、本当に、宝物よね、あなた、毎日、思い出すわよ、私。',en:"Grandkid smile-face — treasure, dear daily-recall me.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'隣のおばさん、いつも、快く、お互いに、助け合ってきたわよな、ばあさん、本当に、ありがたい。',en:"Next-door aunt — always gladly mutual-helped, gran grateful.",style:'Warm close.'},
  ]},
  {id:'conv_07045',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、お友達のこと、一途に、考えてあげてね、優しい子で、いてね、絶対。',en:"Sho — friend one-devoted think, kind-kid stay absolute.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、雨で、気分、沈むこと、ぼくも、たまに、あるんだよ、本当に。',en:"Mei-sis — rain mood sink, also-me occasional really.",style:'Reflective child.'},
    {speaker:'mei_romantic',jp:'公園で、バケツに、ザリガニ、入れてる子、いたわよね、翔くん、見たでしょ?',en:"Park — bucket-crawfish-in kid existed, Sho saw?",style:'Curious.'},
    {speaker:'sho_child',jp:'下町のお祭り、メイ姉さん、行きたいよ、本当に、屋台、たくさん、あるんでしょ?',en:"Downtown fest — Mei-sis go-want, stalls many?",style:'Eager.'},
    {speaker:'mei_romactic_unused',jp:'',en:'',style:''},
    {speaker:'mei_romantic',jp:'お弁当の上、桜の花びら、散ったの、本当に、可愛かったわよね、翔くん、写真、撮ったでしょ?',en:"Lunch-top — cherry petals fell, cute, Sho photo-took?",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さんが、ぼくのお絵描きを、見て、微笑んでくれた、嬉しかったよ、本当に。',en:"Mei-sis — my drawing-saw, smiled, glad really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'翔くん、ぼくの、お願い、快く、聞いてくれて、メイ姉さん、嬉しい、本当に、ありがとう、絶対。',en:"Sho — my request gladly-heard, Mei-sis glad, thanks absolute.",style:'Warm close.'},
  ]},
  {id:'conv_07046',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'当社の信条、社員、心に、刻んで、業務に、当たれ、絶対だ。',en:"Our creed — staff heart-carve, biz-face absolute.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。新規宅地造成、地元自治体、許可、受理、いただきました、本当に。',en:"Yes. New residential — local-gov permit-received really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'情報システム、一元化、進めろ、業務効率、絶対、上がる、頼んだぞ。',en:"Info-sys — one-unify, eff-up absolute, ask.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。信頼関係、大前提として、社員、教育、徹底しております、本当に。',en:"Yes. Trust — pre-vital, staff-edu thorough really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'創業者の証書、社史館に、保管しろ、貴重な、財産だ、本当に、絶対。',en:"Founder cert — corp-museum store, precious-asset absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。共用スペース、社員、皆、丁寧に、使ってくれております、感謝、本当に。',en:"Yes. Shared-space — staff carefully use, gratitude really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新人、黙々と、業務、こなしてるな、本気、感じる、絶対、評価しろ、頼む。',en:"Newbie — silently biz-done, serious-feel absolute eval ask.",style:'Direction close.'},
  ]},
  {id:'conv_07047',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'当社の信条、新人にも、しっかり、伝えていきましょうね、本当に、急務よ。',en:"Our creed — newbie properly convey, urgent really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。宅地造成の申請、書類、受理されました、本当に、嬉しいです。',en:"Yes. Resid app — docs-received, glad really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'部署横断で、業務を、一元化、進めていきましょうね、絶対に、効率化、図れるはず。',en:"Cross-dept — biz-unify advance, eff-aim absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の伝統、大前提に、新しい挑戦、続けてまいります、本当に、絶対。',en:"Yes. Co-trad — pre-vital, new-challenge continue absolute really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'卒業証書を、お客様に、お見せする社員、誇りに、思っていきましょうね、本当に。',en:"Grad-cert — cust-show staff, proud-think really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。会議室、共用、社員、皆、譲り合いの精神で、使っております、本当に。',en:"Yes. Meet-rooms shared — staff yield-spirit use really.",style:'Update.'},
    {speaker:'yuki_office',jp:'新人さん、黙々と、与えられた仕事、こなしているわよね、本当に、頼もしいわよ。',en:"Newbie — silently given-work done, reassuring really.",style:'Praising close.'},
  ]},
  {id:'conv_07048',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究の信条、若いうちに、確立しろ、絶対、本気で、頼んだぞ、絶対。',en:"Ren — research-creed youth-estab, ask serious absolute.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究テーマの申請、教授会で、受理、いただきました、本当に、嬉しいです。',en:"Yes. Theme app — faculty-received, glad really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究データ、一元化、進めろ、研究効率、絶対、上がるからな、本気で、絶対。',en:"Research data — unify advance, eff-up absolute serious.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。仮説の検証、大前提として、慎重に、進めてまいります、絶対、本気、本当に。',en:"Yes. Hypothesis verify — pre-vital, careful advance absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文掲載証書、君も、いつか、手に、することになるぞ、本当に、頑張れ、絶対。',en:"Paper-cert — sometime in-hand, hard-try absolute really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。実験室、共用スペース、研究者、皆、配慮しております、本当に、絶対、本気で。',en:"Yes. Lab shared — researchers all considerate, absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'蓮、黙々と、研究、続けてる姿、評価してるぞ、絶対、本気で、本当に、頼んだぞ、絶対。',en:"Ren — silently research-continue eval, absolute serious really ask.",style:'Praising close.'},
  ]},
  {id:'conv_07049',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察の信条、市民の安全、第一です、本当に、守り抜いてまいります、絶対。',en:"Police creed — citizen-safety first, guard absolute.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察様、被害届、受理いただき、ありがとうございました、本当に、感謝です、本当に。',en:"Yes. Police — damage-claim received, thanks really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'地域防犯情報、警察、一元化、進めております、本当に、市民の皆様に、絶対、お役に立てます。',en:"Local crime-prev info — police unify advance, citizen-useful absolute.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社の防犯、警察様のご指導、大前提として、進めてまいります、本当に、感謝。',en:"Yes. Our crime-prev — police-guide pre-vital advance, gratitude really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察官の任命証書、新人警察官にも、本日、お渡しいたします、本当に、誇らしい瞬間です。',en:"Officer-appoint cert — newbie today-give, proud moment really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。地域、共用の防犯カメラ、警察と、連携、強化しております、本当に、絶対、感謝。',en:"Yes. Local shared crime-cam — police-link strengthen absolute gratitude.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察官、黙々と、市民の安全、守ってまいります、絶対、本当に、本気で、頼んでください。',en:"Officers — silently citizen-safety guard absolute serious really ask-please.",style:'Procedural close.'},
  ]},
  {id:'conv_07050',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時の信条、私、社員、本気で、お父さんから、絶対、引き継いでまいりたいです、絶対。',en:"Founding-creed — me staff serious, from Dad absolute inherit-want absolute.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。創業地、宅地造成の経緯、社史館で、紹介させていただきます、本当に、感謝。',en:"Yes. Founding-land — resid-creation, corp-museum intro, gratitude really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'会計、お父さんの代から、一元化、本気で、進めてきた、絶対、お前にも、守って欲しい。',en:"Acct — since Dad-era unify serious-advanced, you-keep want absolute.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業者の信念、大前提に、私の代でも、絶対、引き継いでまいります、本気で、絶対。',en:"Yes. Founder-belief — pre-vital, my era absolute inherit serious absolute.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業時、最初の卒業証書、社員第一号、本気で、誇りに、思ってる、絶対、引き継いで欲しい。',en:"Founding — first grad-cert, staff-no-1 proud-think absolute, inherit want.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、共用施設、本気で、大事にしてまいります、本当に、感謝、しております、絶対。',en:"Yes. Since Dad-era — shared-facility serious-treasure, gratitude absolute really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、黙々と、創業期、頑張ってきたぞ、お前にも、伝えたい、本気で、絶対、本当に、絶対だ。',en:"Dad — silently founding-tried, you-convey want serious absolute really.",style:'Wise close.'},
  ]},
  {id:'conv_07051',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、機能不全の臓器、再生医療、本気で、進んでおります、最近、本当に。',en:"Ren — dysfunctional organs, regen-med advancing lately really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医療現場の悪循環、本当に、社会問題ですね、先生、改善、急務、感じます。',en:"Med-site bad-cycle — soc-issue, sensei improve-urgent feel.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。がんの転移、最新の検査で、早期発見、可能になっております、本当に、進歩です。',en:"Yes. Cancer-met — latest-test early-detect-able, progress really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'結核、最近、海外で、再流行している、と、聞きました、先生、対策、どうですか?',en:"TB — lately overseas re-trend heard, sensei measures how?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。抗生物質の乱用、本当に、課題、なっておりますね、医療界、本気で、対策、必要です。',en:"Yes. Antibiotic-abuse — issue really, med-world serious-measures needed.",style:'Informative.'},
    {speaker:'ren_uni',jp:'天文学の進歩、医療技術にも、応用できる時代に、なっていますね、先生、本当に、面白い時代。',en:"Astron progress — med-tech-app era, sensei fun-era really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医療ミスの否認、現代、絶対、許されない時代に、なっておりますね、本当に。',en:"Yes. Med-error denial — modern absolute don't-allow era really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'医療の難しさ、研究してて、本当に、思い知らされる毎日です、先生、本気で、頭が下がる、思いです。',en:"Med-difficulty — research-while really realize-daily, sensei serious humbled.",style:'Reflective close.'},
  ]},
  {id:'conv_07052',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、機能不全の組織、警察、本気で、是正、進めております、絶対、本当に、感謝、いただきたいです。',en:"Case — dysfunctional org, police serious-rectify advance absolute really gratitude.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者組織、犯罪の悪循環、本当に、深刻ですね、警察、対策、急務ですよね、本気で、絶対に。',en:"Suspect-org — crime bad-cycle severe, police-measures urgent serious absolute.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。組織犯罪の手口、海外に、転移している、と、本気で、報道ありました、本当に、絶対、警戒。',en:"Yes. Org-crime method — overseas-transferring heard, alert absolute really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'昔の結核患者の人権侵害、警察、本気で、過去、反省してきたんですよね、本当に、立派です、絶対。',en:"Past TB-patient rights-violation — police serious-past reflected, splendid absolute really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、抗生物質の不正流通、関わっている疑い、本当に、深い、調べております、本気で、絶対。',en:"Yes. Suspect — antibiotic illegal-distrib susp, deep-inv serious absolute really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察、最新の天文学的データ、衛星映像も、活用しているんですよね、本気で、すごい時代ですね、絶対に。',en:"Police — latest astron data, sat-imagery utilize, serious amazing era absolute.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、否認し続けておりますが、警察、絶対、真相、明らかにしてまいります、本気で、本当に、絶対。',en:"Yes. Suspect — keep-denying, police absolute truth-clarify serious absolute really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察活動の難しさ、本当に、報道で、思い知らされます、本気で、感謝、絶対、しております、いつも、本当に。',en:"Police-difficulty — reporting realize, serious gratitude absolute always really.",style:'Reflective close.'},
  ]},
  {id:'conv_07053',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦時下、医療不全、本当に、深刻でしたよね、論文、丁寧に、扱っていました、本気で、立派です、絶対。',en:"Ren — wartime med-dysfunc severe, paper carefully handled, splendid serious absolute.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。社会の悪循環、戦後、続いた時代、論文で、扱いました、本気で、現代に、繋がる、テーマ、絶対。',en:"Yes. Soc bad-cycle — post-war era, paper-handled, modern-link theme serious absolute.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦中、人々が、別の地域に、転移していった歴史、論文で、本当に、印象的でしたね、本気で、立派。',en:"Wartime — people other-region transferred hist, paper-striking serious splendid.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦後の結核流行、社会に、与えた影響、論文で、丁寧に、扱いました、本気で、深い、研究、できました。',en:"Yes. Post-war TB — soc-impact, paper carefully handled, deep research serious.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時の抗生物質、貴重な資源でしたね、論文で、扱っていましたね、本気で、視野、広い、立派、絶対。',en:"Era antibiotics — precious resource, paper-handled, view-wide splendid absolute serious.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。当時の天文学、戦中の航海、欠かせない知識でしたね、論文で、扱いました、本当に、興味深い、研究、絶対。',en:"Yes. Era astron — wartime navigation indispensable, paper-handled, intriguing absolute really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦犯の否認、戦後、本気で、社会問題、なりましたね、論文の中で、丁寧に、論じていました、本当に、立派。',en:"War-crim denial — post-war soc-issue serious, paper carefully argued, splendid really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦争の重みを、思い知らされる、論文に、なりました、本気で、本当に、深い、研究、できました、絶対、絶対。',en:"Yes. War-weight realized paper, deep research serious absolute really.",style:'Earnest close.'},
  ]},
  {id:'conv_07054',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp risk',lines:[
    {speaker:'hiroshi_boss',jp:'業界の機能不全、本気で、当社、絶対、リーダーシップ、見せていけ、絶対、頼んだぞ、本気で、本当に。',en:"Industry dysfunc — our co serious absolute leadership-show absolute serious really ask.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。業界の悪循環、当社、本気で、断ち切る覚悟、社員、皆、持っております、絶対、本当に、本気で。',en:"Yes. Industry bad-cycle — break-resolve serious, all-staff hold absolute really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'人材の海外転移、当社にも、影響、絶対、出てきている、対策、本気で、急務だぞ、本当に、頼んだぞ。',en:"Talent-overseas-transfer — our co also-affect, measures urgent serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。結核などの感染症、社員の健康管理、本気で、徹底しております、絶対、本当に、感謝。',en:"Yes. TB etc — staff health-mgmt serious thorough absolute gratitude really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'抗生物質を扱う事業、当社、本気で、参入の可能性、検討中だ、本気で、頼んだぞ、本当に、絶対。',en:"Antibiotic-biz — entry-possibility studying serious ask really absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。天文学的な、データ量、当社のシステム、本気で、処理可能です、絶対、本気で、お任せください。',en:"Yes. Astron data-vol — our sys handle-able serious absolute, entrust-please.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'責任を、否認する文化、当社、絶対、許さない方針、社員、徹底させろ、本気で、絶対、頼んだぞ、本当に。',en:"Resp-deny culture — our co absolute don't-allow, staff thorough serious absolute ask really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界の厳しさ、本気で、毎日、思い知らされております、絶対、本気で、頑張ってまいります、絶対。',en:"Yes. Industry-harshness — daily realize serious absolute try absolute.",style:'Close.'},
  ]},
  {id:'conv_07055',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through cultural studies',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦後の機能不全、社会構造、論文で、本気で、扱いましたね、立派な、研究、できました、絶対、本当に。',en:"Sakura — post-war dysfunc soc-structure, paper-handled, splendid research absolute really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。差別の悪循環、論文で、論じました、現代にも、繋がる、テーマでした、本気で、絶対、深い、研究、できました。',en:"Yes. Discrim bad-cycle — paper-argued, modern-link, serious deep research absolute.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦中、人々が、地域に、強制転移させられた歴史、論文で、本気で、扱っていましたね、本当に、感動的でした。',en:"Wartime — people region-forced-transferred hist, paper serious handled, moving really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦後、結核療養所の歴史、論文で、扱いました、本気で、辛い、歴史でした、絶対、忘れずに、いきたいです。',en:"Yes. Post-war TB-sanitorium — paper-handled, hard hist serious, don't-forget want absolute.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時、海外からの抗生物質、本気で、貴重でしたよね、論文で、扱っていましたね、桜さん、本気で、立派、絶対。',en:"Era — overseas antibiotics precious serious, paper-handled, Sakura splendid serious absolute.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。当時の天文学者、戦中、本気で、貢献されましたね、論文で、扱いました、本当に、感動的な、視点でした、絶対。',en:"Yes. Era astronomers — wartime contrib serious, paper-handled, moving view absolute really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦争責任の否認、戦後、本気で、長く、続きましたね、論文で、丁寧に、論じていました、桜さん、本気で、立派、絶対。',en:"War-resp denial — post-war long-continued serious, paper carefully argued, Sakura splendid absolute.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦争の重みを、本気で、思い知らされた、研究でした、本当に、深く、勉強、できました、絶対、感謝、しております。',en:"Yes. War-weight serious realized research, deep study absolute, gratitude.",style:'Earnest close.'},
  ]},
  {id:'conv_07056',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、雨で、本当に、駐車場、車、スリップしそうになったわよ、危なかったわ、本当に。',en:"Aoi — rain park-lot car-slip almost, dangerous really.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'うん。新スタッフの安部さん、本当に、頼もしい人ね、葵で、活躍してくれてるよ、絶対。',en:"Yeah. New staff Abe — reliable, Aoi-active absolute.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'バレーボールの試合、彼、スパイク、本気で、決めてたよ、葵、見たかったわよね、絶対、すごい。',en:"Volleyball — bf spike serious-decided, Aoi see-want absolute amazing.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'夜の店内、LED発光のディスプレイ、本気で、お洒落でしょ、葵で、お客様、感激してるわよ、絶対。',en:"Night interior — LED glow-display stylish, Aoi cust-moved absolute.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'お祖母ちゃん、若い頃、王妃みたいな、本気で、優雅な人だったらしいよ、葵、本当に、すごいよね、絶対。',en:"Granny — youth queen-like elegant person serious, Aoi amazing absolute really.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'彼、テニスのラケット、新しいの、買ったって、葵で、嬉しそうに、話してたよ、絶対、本気で、可愛い。',en:"Bf — tennis racket new bought, in Aoi glad-talked absolute cute serious.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'おでんの昆布、本当に、葵の店、絶妙な、味、なのよね、本気で、好評、続いてるわね、絶対。',en:"Oden kombu — Aoi-store exquisite-taste serious, favor-continue absolute.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'最近、ノンフィクション本、本気で、よく、読んでるのよ、私、葵で、面白い世界、知れるわよ、絶対、本当に。',en:"Lately non-fic — serious often-read, Aoi fun-world-know absolute really.",style:'Reflective close.'},
  ]},
  {id:'conv_07057',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、雨で、お父さん、車、スリップ、しないように、注意して、運転してたよ、安心したよ。',en:"Mom — rain Dad car-slip-care drove, relieved.",style:'Reflective child.'},
    {speaker:'yumiko_mom',jp:'うん。新しい先生、安部先生って、いう優しい方なのよ、翔くん、ご挨拶、しなさいね、本当に、絶対。',en:"Yes. New teacher — Abe-sensei kind, Sho greet, absolute really.",style:'Warm.'},
    {speaker:'sho_child',jp:'お父さん、バレーで、スパイク、決めた時、ぼく、本当に、誇りに、思ったよ、ママ、見たかった?',en:"Dad — volleyball spike decided, proud-thought, Mom see-wanted?",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'夏祭りの飾り、発光ダイオード、たくさん、付いてたわね、翔くん、綺麗だったわね、本当に、覚えてる?',en:"Fest decor — LED glow-many attached, Sho pretty remember?",style:'Reflective.'},
    {speaker:'sho_child',jp:'絵本の王妃さま、本当に、美しい人だね、ママ、ぼく、お話、もう一度、読みたいよ、お願い、本当に。',en:"Book queen — beautiful, Mom, again-read want, please really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お父さん、若い頃、ラケットで、テニス、結構、本気で、やってたって、知ってた?翔くん、お父さん、すごい。',en:"Dad — youth racket tennis serious-did knew?, Sho Dad amazing.",style:'Soft.'},
    {speaker:'sho_child',jp:'おでんの昆布、ぼく、本当に、好きなんだよ、ママ、今度、お祖母ちゃんに、作ってもらいたいな、絶対。',en:"Oden kombu — love, Mom, next-Granny-make want absolute.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'ノンフィクションの本、お祖父ちゃんの書斎、たくさん、あるわよ、翔くん、大きくなったら、読めるわね、絶対、楽しみ。',en:"Non-fic book — Grandpa-study many, Sho big-grown read-able absolute fun.",style:'Tender close.'},
  ]},
  {id:'conv_07058',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、自転車で、雨の日、スリップ、本気で、危なかったよ、私、お互いに、気をつけような、絶対。',en:"Riku — bike rainy slip serious dangerous, mutual-care absolute.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'うん。隣のクラスの安部、本当に、面白い奴だぜ、桜、お前、知り合い?紹介できるよ、絶対、絶対。',en:"Yeah. Next-class Abe — fun guy, Sakura know?, intro absolute.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'バレー部、お前のスパイク、本気で、決まると、皆、興奮するよね、リク、見てて、本気で、本当に、すごい。',en:"Volleyball — your spike decides, all-excite, Riku watching, serious amazing really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'文化祭の発光看板、本気で、お洒落になったぜ、桜、お前、見たか?本気で、感心するレベルだ、絶対。',en:"Cult-fest LED-sign stylish, Sakura saw?, serious admire absolute.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'歴史の授業で、王妃の話、本当に、面白かったよね、リク、お前、覚えてる?本気で、印象に、残ったよ、絶対。',en:"Hist class — queen-tale fun, Riku remember?, serious memory absolute.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前の家、テニスラケット、何本、あるんだ?お父さんも、お母さんも、好きみたいだよな、本気で、絶対、すごい家族。',en:"Your home — rackets how-many?, Mom-Dad-like serious, amazing family absolute.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'お弁当に、昆布の佃煮、お母さん、入れてくれたよ、本当に、美味しいんだ、リク、お前、食べてみたい?',en:"Lunch — kombu-tsukudani Mom-include, tasty really, Riku try?",style:'Eager.'},
    {speaker:'riku_teen',jp:'最近、ノンフィクションの本、お父さん、本気で、勧めてくるんだぜ、桜、お前、知ってる?読みやすいの、ある?',en:"Lately non-fic — Dad serious-rec, Sakura know?, easy-read exist?",style:'Curious close.'},
  ]},
  {id:'conv_07059',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、雨の日、車、スリップ、本気で、危なかったことが、何度かあったな、ばあさん、覚えてる、本当に。',en:"Youth — rainy car-slip serious dangerous several-times, gran remember really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。昔の同級生の安部さん、最近、亡くなったって、聞いたわよね、あなた、覚えてる?本当に、悲しいわ。',en:"Yes. Old classmate Abe — lately died heard, dear remember?, sad really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、私、テニスのスパイクの靴、よく、履いていたよな、ばあさん、覚えてる、運動、得意だったぞ。',en:"Youth — me tennis spike-shoes often-wore, gran remember?, sport-good.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'夜空の発光する星、二人で、よく、見上げたわよね、あなた、覚えてる?本当に、ロマンチックだったわよ、本気。',en:"Night-sky glow-stars — two often-looked-up, remember?, romantic serious.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'子供の頃、絵本の王妃様、本当に、憧れていたわよな、ばあさん、覚えてる?本気で、可愛らしかったよな、本当に。',en:"Childhood — book-queen adored, gran remember?, cute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、若い頃、ラケットで、テニス、本当に、本気で、やっていたわよね、あなた、覚えてる?',en:"Grandpa — youth racket tennis serious-did, dear remember?",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔の田舎、昆布、本気で、新鮮で、美味しかったよな、ばあさん、覚えてる?本当に、また、食べたいよな、絶対。',en:"Old country — kombu serious-fresh-tasty, gran remember?, again-eat want absolute.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、二人で、ノンフィクションの本、本気で、よく、読んだわよね、あなた、覚えてる?本当に、思い出深いわよね、絶対。',en:"Youth — two non-fic serious often-read, remember?, deep-memory absolute.",style:'Tender close.'},
  ]},
  {id:'conv_07060',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、店の前、雨で、お客さん、スリップせんよう、本気で、対策、せなあかんで、絶対、危ないやんか、本気で。',en:"Aoi — store-front rain cust no-slip serious-measures must absolute dangerous serious.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。バイトの安部さん、本気で、頑張ってくれて、葵で、本当に、頼りに、なる存在です、絶対、本当に、感謝しております。',en:"Yes. Part-time Abe — serious-try, Aoi reliable absolute gratitude really.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'スポーツ応援イベント、葵で、本気で、開催しよか、葵さん、バレーボールのスパイク、上手い選手、呼べたら、ええで、絶対。',en:"Sports event — Aoi serious-hold, Aoi volleyball spike-good player invite, good absolute.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。店内、発光する照明、もう少し、本気で、増やしませんか、葵で、雰囲気、絶対、お洒落に、なりますね、本気で。',en:"Yes. Interior glow-light — slight serious-increase?, Aoi air stylish absolute serious.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'特別コースに、王妃のお気に入りだった、本気で、伝統料理、加えよか、葵さん、絶対、お客さん、喜んでくれるで、本気で。',en:"Special course — queen-fave trad-cuisine serious-add?, Aoi cust-glad absolute serious.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。テニス愛好家のお客様、ラケット、本気で、収集されてる方、いらっしゃるんですよ、葵で、本当に、絶対、面白い、お話。',en:"Yes. Tennis-cust — racket serious-collect, in Aoi, fun-talk absolute really.",style:'Animated.'},
    {speaker:'daichi_kansai',jp:'昆布出汁、本気で、こだわって、葵で、出していきましょう、お客様、本気で、感激してくださるはずやで、絶対、本当に、本気。',en:"Kombu-dashi — serious-insist, Aoi-issue, cust serious-moved absolute really serious.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。店の本棚に、ノンフィクション本、本気で、置きませんか、葵で、お客様、ゆっくり、時間、過ごせる、空間に、なりますね、絶対。',en:"Yes. Store-shelf — non-fic serious-place?, in Aoi cust slow-time-spend space absolute.",style:'Warm close.'},
  ]},
]

let written = 0, stillMissing = []
for (const r of data) {
  const lines = r.lines.filter(l => l.jp && l.jp.length > 0)
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

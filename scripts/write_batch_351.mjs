import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_351 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['解い','こぼれ','海老','くれぐれも','元旦','眠気','病人','想い出']
const B_T = ['買い手','忠告','転用','模範','必読','預かっ','コーディネート','休養']
const C_T = ['前線','最前線','対峙','誹謗','出頭','無垢','撃た','説く']
const D_T = ['鯖','潤','絶大','ホイール','鳴り','マキ','飛ばす','ゾンビ']

const data = [
  // A
  {id:'conv_06981',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ぼく、難しいクイズ、自分で、解いたんだよ、本当に、嬉しいんだ、自信、ついたよ。',en:"Mom — me, hard-quiz self-solved, glad really, conf-gained.",style:'Proud child.'},
    {speaker:'yumiko_mom',jp:'うん。お味噌汁、こぼれちゃったわよ、翔くん、気をつけてね、テーブル、拭こうね、ママと一緒に。',en:"Yes. Miso — spilled, Sho careful, table-wipe with Mom.",style:'Soft.'},
    {speaker:'sho_child',jp:'夕食の海老、お父さん、本当に、好きなのよね、ママ、たくさん、お皿に、入れてあげようね。',en:"Dinner shrimp — Dad love, Mom plate-put.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんち、くれぐれも、失礼のないように、振る舞ってね、翔くん、お祖父ちゃん、楽しみにしてるから。',en:"Grandpa's — please don't-rude, behave, Sho, Grandpa fun-await.",style:'Direction.'},
    {speaker:'sho_child',jp:'元旦、お父さん、休みなんでしょ、ママ、家族で、神社に、初詣、行きたいよ、絶対、お願い。',en:"NY day — Dad-off?, family shrine first-visit go-want absolute, please.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'眠気、ちょっと、出てきたのね、翔くん、お昼寝、しなさい、ママ、布団、用意するわよ、ゆっくり、休んでね。',en:"Sleepy slight-emerged, Sho, nap, Mom futon-prep, slow-rest.",style:'Tender.'},
    {speaker:'sho_child',jp:'病人さんに、お見舞い、行きたいよ、ママ、お祖母ちゃんの、お友達、入院されてるんでしょ、心配だよ、ぼく。',en:"Patient — visit-want, Mom, Granny's friend hosp?, worry me.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'家族の想い出、本当に、宝物よね、翔くん、写真、たくさん、残しておきたいわね、ママ、覚えておきたいの、いつも。',en:"Family memories — treasure, Sho photos lots-want, Mom keep-want always.",style:'Warm close.'},
  ]},
  {id:'conv_06982',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、彼との悩み、ようやく、自分で、解いた感じよ、最近、本当に、相談、乗ってくれて、ありがとうね、感謝してる。',en:"Aoi — bf-worry, finally self-solved feel, lately consult-thanks, gratitude.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。新作のお皿、コーヒーが、こぼれそうな、デザインなのよ、葵、メイちゃん、見てみて、面白いよ、本当に。',en:"Yeah. New plate — coffee spill-likely design, Aoi, Mei see, fun really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'お祝いに、海老料理、彼、出してくれたわよ、本当に、嬉しい夜だったわ、葵、私、感動しちゃった、本当に、すごい人ね。',en:"Cele — shrimp dish, bf out, glad night, Aoi, moved really, amazing.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'メイちゃん、くれぐれも、無理しないでね、葵としても、本当に、心配してるわよ、最近、忙しすぎる感じ、するから、本当に。',en:"Mei — please don't-overdo, as Aoi worry, lately busy-feel really.",style:'Concerned.'},
    {speaker:'mei_romantic',jp:'元旦の朝、葵で、特別なメニュー、出すんでしょ?私、絶対、行くわよ、本当に、楽しみだよ、葵、待ってるからね。',en:"NY morn — Aoi special-menu out?, def go, fun really, Aoi wait.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'最近、私、眠気で、運転、気をつけないと、と、思ってるの、葵で、新しい車、買って、本当に、気を引き締めてるよ。',en:"Lately me — sleepy drive must-care, Aoi new-car bought, tighten really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵の店、病人さんも、いらっしゃるんでしょ、お子様連れも、配慮、本当に、いき届いてるよね、葵、感心するわよ、いつも。',en:"Aoi store — patients also come?, with-kid consider thorough, Aoi admire always.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'メイちゃんとの想い出、本当に、たくさん、あるわよね、葵、感謝してる、ずっと、お友達でいてね、本当に、心から、お願い。',en:"With-Mei memories lots, Aoi grateful, always friends, from-heart please.",style:'Warm close.'},
  ]},
  {id:'conv_06983',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、数学のテスト、難しい問題、自分で、解いたよ、本当に、嬉しいよ、私、リク、お前、どうだった、テスト?',en:"Riku — math test, hard problem self-solved, glad really, you how-test?",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お弁当箱、お汁、こぼれちゃってさ、ちょっと、悲しかったぜ、桜、お前は、大丈夫だったか、お弁当?',en:"Yeah. Lunch-box — soup spilled, sad, Sakura you fine-lunch?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'文化祭で、海老フライ、出店するクラス、あるって、聞いた、リク、お前、行ってみたい?食べてみたい、私、絶対!',en:"Cult-fest — shrimp-fry stall class exist heard, Riku go?, eat-want def!",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前、くれぐれも、夜更かし、しないでね、桜、明日、テストだろ、お互いに、しっかり、寝ような、絶対、約束。',en:"You — please don't-late-night, Sakura, test, mutually sleep, promise absolute.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'元旦、家族で、お祖父ちゃんち、行く予定なんだ、リク、お前も、家族と、過ごすんだろ、お互いに、よいお年を、迎えようね。',en:"NY day — family Grandpa's plan, Riku also family-spend?, mutually good-NY-greet.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'授業中、眠気、こらえるの、結構、大変だよな、桜、お前、コーヒー、飲んでる?最近、私、はじめたよ、本当に。',en:"In-class — sleepy hold, hard, Sakura coffee?, lately started really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'おばあちゃん、病人で、入院してて、お見舞い、行きたいの、リク、お前、付き合ってくれる?お願い、私、心配なの、本当に。',en:"Granny — patient hosp, visit-want, Riku accompany?, please, worry really.",style:'Vulnerable.'},
    {speaker:'riku_teen',jp:'高校生活の想い出、本当に、お前と、たくさん、作ってきたよな、桜、卒業まで、もっと、思い出、増やしたいぜ、本当に、絶対。',en:"HS-life memories — with-you lots-made, Sakura, until-grad, more, want absolute.",style:'Warm close.'},
  ]},
  {id:'conv_06984',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachich_grandma_alt'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃の、数学のなぞ、ようやく、解いた気持ち、長年、思っていた問題、解決したよ、ばあさん、嬉しいよ、本当に。',en:"Youth math-mystery — finally solved-feel, long-worry-issue resolved, gran glad really.",style:'Wistful.'},
    {speaker:'sachich_grandma_alt',jp:'うん。お湯、こぼれそうになって、ちょっと、慌てちゃったわよ、私、年取って、不器用に、なったわね、本当に。',en:"Yes. Hot-water — spill-likely, panicked, aged-clumsy really.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'お祖母ちゃんの海老の天ぷら、孫が、本当に、好きなのよね、ばあさん、覚えてる?家族の伝統よね、本当に。',en:"Granny shrimp-tempura — grandkid love, gran remember?, family-trad really.",style:'Tender.'},
    {speaker:'sachich_grandma_alt',jp:'お祖父ちゃん、くれぐれも、転ばないようにね、最近、足元、よく、見て、歩いてね、お互いに、年だから、本当に、気をつけよう。',en:"Grandpa — please don't-fall, lately feet-watch walk, mutual aged careful.",style:'Concerned.'},
    {speaker:'hiroshi_elder',jp:'元旦、息子家族、来てくれるって、嬉しいよな、ばあさん、お祖母ちゃん、お料理、頑張ってくれるんだよな、感謝、している、本当に。',en:"NY day — son-family come, glad, gran cooking-try, gratitude really.",style:'Wistful.'},
    {speaker:'sachich_grandma_alt',jp:'最近、午後、眠気、強くなってきたわよね、あなた、お互いに、お昼寝、しましょうね、年寄りには、必要よ、本当に。',en:"Lately — afternoon sleepy strong, dear mutually nap, elder needed really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔、私、病人として、お祖母ちゃんに、お世話、してもらったよな、ばあさん、本当に、感謝してる、覚えてる、お互いに?',en:"Old — me patient, gran-cared, gratitude, remember mutual?",style:'Reflective.'},
    {speaker:'sachich_grandma_alt',jp:'若い頃の想い出、二人で、振り返ると、本当に、感慨深いわよね、あなた、長い付き合い、ありがたいわよね、本当に、お互いに。',en:"Youth memories — two look-back, deep-feeling, dear long-keep grateful mutual really.",style:'Tender close.'},
  ]},
  {id:'conv_06985',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、絵本のなぞなぞ、ちゃんと、自分で、解いたんだね、本当に、すごいよ、メイ姉さん、誇りに、思うわよ、翔くん。',en:"Sho — picture-riddle self-solved, amazing, Mei-sis proud-think.",style:'Praising.'},
    {speaker:'sho_child',jp:'メイ姉さん、ジュース、こぼれちゃったの、ぼく、ティッシュ、取ってあげるね、待ってて、お願いね、すぐ、戻るからね。',en:"Mei-sis — juice spilled, tissue-take, wait, soon-return.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'お祝いに、メイ姉さん、海老料理、たくさん、ご馳走してあげるね、翔くん、楽しみにしててね、本当に、絶対に、約束しようね。',en:"Cele — Mei-sis shrimp-dishes lots, treat, Sho fun-await absolute, promise.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、くれぐれも、お疲れの時、無理、しないでね、ぼく、心配だから、お祖母ちゃんも、心配してたよ、メイ姉さん。',en:"Mei-sis — please tired-time, don't-overdo, worry, Granny also worried.",style:'Concerned child.'},
    {speaker:'mei_romantic',jp:'元旦、メイ姉さん、翔くんに、お年玉、用意してあげるからね、ちゃんと、貯金してね、約束、しようね、翔くん、楽しみね。',en:"NY — Mei-sis Sho otoshidama prep, save promise, fun.",style:'Warm.'},
    {speaker:'sho_child',jp:'眠気、ぼく、まだ、ないよ、メイ姉さん、お話、もっと、しようよ、ぼく、メイ姉さんと、いる時間、大好きなんだ、本当に。',en:"Sleepy — me still-none, Mei-sis talk-more, with Mei-sis love really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'病人の方、お見舞いに、行く時、翔くんも、メイ姉さんと、一緒に、来てね、優しい子に、なって欲しいの、本当に、メイ姉さん、お願い。',en:"Patient — visit-time, also-Mei-sis come, kind-kid want, Mei-sis ask really.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さんとの想い出、ぼく、本当に、たくさん、あるんだよ、これからも、たくさん、作ろうね、ね、約束、絶対、本当に、嬉しいよ。',en:"Mei-sis memories — lots, future-lots make, promise absolute, glad really.",style:'Earnest close.'},
  ]},

  // B
  {id:'conv_06986',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'お得意様、当社製品の、買い手として、長年、お付き合い、本当に、感謝してる、これからも、大切に、していけ、絶対。',en:"VIP — our buyer, long-keep, gratitude really, future treasure absolute.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。先輩からの忠告、若手社員、しっかり、受け止めるよう、教育しております、本当に、社員、伸びてまいります、最近、特に。',en:"Yes. Senior advice — youth receive, instruct, grow lately esp.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'古い設備、転用できるもの、検討しろ、リサイクル、コスト削減、両立、目指せ、本当に、新時代の経営、必要だ。',en:"Old equip — repurpose-able study, recycle cost-cut both aim, new-era mgmt needed.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。若手社員の、模範となる、先輩、増やしていきたいですね、社長、本当に、人材育成、徹底中です、最近、特に、力、入れて。',en:"Yes. Youth-staff model-senior increase want, pres, talent-raise thorough lately, focus.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の必読書、若手にも、読ませろ、私も、若い頃、本当に、勉強したぞ、必死で、これからの時代、知識、必要だ、絶対だ。',en:"Industry must-read — youth-read, also youth studied desperately, future-era knowledge needed absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様から、お預かったお品、慎重に、保管しております、社長、本当に、ご安心ください、徹底中、です、私たち、本当に。',en:"Yes. Cust-deposit goods — careful store, pres rest-assured, thorough.",style:'Cooperative.'},
    {speaker:'hiroshi_boss',jp:'広告のコーディネート、お洒落、第一に、こだわれ、当社のブランド、品格、保てるよう、社員、頑張れ、本当に、頼んだぞ、絶対。',en:"Ad coord — stylish first insist, our-brand dignity-keep, staff try, ask absolute really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、休養、しっかり、取れるよう、有給休暇、取得、促進中です、健康、第一の、企業文化、目指しております、本当に、最近。',en:"Yes. Staff rest properly, paid-leave promote, health-first culture aim lately really.",style:'Close.'},
  ]},
  {id:'conv_06987',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'新規事業の、買い手、絞り込んでいきましょう、ターゲット、明確に、することで、効率化、図れるよね、本当に、本当に、急務よ、絶対。',en:"New biz buyers — narrow-target, clear, eff-aim, urgent absolute really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。先日の、お客様からの忠告、しっかり、社員に、伝えてあります、本当に、貴重な、ご意見、ありがたく、思っております、本当に、皆。',en:"Yes. Recent cust-advice properly staff-convey, precious-opinion grateful all.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'倉庫の一部、新しい用途に、転用しましょうね、本当に、効率化、急務だわ、本社全体、活性化、必要よね、社員、皆。',en:"Warehouse-part — new-use repurpose, eff-urgent, HQ-overall activate needed, staff all.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の模範となる、先輩、新人、紹介する場、設けてまいります、本当に、世代間交流、活発化、社員、皆、ご好評です、最近、特に。',en:"Yes. Co model-senior — newbie intro-place set, gen-exchange active, staff popular lately.",style:'Update.'},
    {speaker:'yuki_office',jp:'業界の必読資料、私も、しっかり、読んでおきますね、本当に、リーダーとして、勉強、続けないと、ね、本当に、皆も、本気で、頑張って欲しい。',en:"Industry must-read mat — properly read, as leader study-must, all serious-try-want.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。先輩から、預かった大切な、書類、しっかり、引き継いでまいります、本当に、責任、感じております、絶対、間違わないように、徹底。',en:"Yes. From senpai — precious docs entrusted, properly inherit, resp-feel, absolute no-mistake.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'コーディネート、社内、若手と、ベテラン、合同チームで、本当に、進めましょうね、絶対、楽しい、新しい、視点、出てきそう、絶対。',en:"Coord — internal, youth-vet joint, advance, def fun, new-view emerge absolute.",style:'Cheerful.'},
    {speaker:'kenji_office',jp:'はい。社員の休養期間、しっかり、設けるよう、人事と、相談、続けます、本当に、皆様の、健康、第一に、考えていきたいです、葵で、私たち。',en:"Yes. Staff-rest period — properly set, HR-consult, health-first think want.",style:'Close.'},
  ]},
  {id:'conv_06988',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究成果、買い手、企業に、繋げていく視点、社会人として、本当に、大事だぞ、覚えておけ、絶対、研究、活かせよ、本気で。',en:"Ren — research-results buyers, co-link view, as adult vital absolute remember utilize.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。先生からの忠告、本当に、いつも、ありがたく、受け止めております、社会人になっても、必ず、活かしてまいります、本当に、感謝。',en:"Yes. Prof-advice — always gratefully received, as adult def utilize, gratitude really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'基礎研究の成果、応用研究に、転用していく姿勢、研究者として、本当に、必要だぞ、君も、視野を、広げていけ、絶対に、頑張れ、本当に。',en:"Basic research — applied repurpose stance, as researcher needed, view-widen absolute try.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先輩の研究、模範に、しております、自分の研究にも、活かしていきたいです、本当に、勉強、本当に、たくさん、させていただいてます。',en:"Yes. Senpai research — model, self-research utilize want, study lots really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文執筆の、必読書、何冊か、紹介してやろう、勉強しろ、本当に、君の論文、もっと、よくなるはずだ、絶対だ、本当に、頑張れ、本当に。',en:"Paper-write must-read — several intro, study, paper better-able absolute really try.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先生から、預かった研究資料、本当に、慎重に、扱っております、責任、感じております、絶対、紛失しないように、徹底、本当に、私。',en:"Yes. From prof — research-mat entrusted, careful handle, resp-feel, absolute no-lose, thorough.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'論文発表会、服装、コーディネート、本当に、しっかり、考えろ、社会人として、当然、見られているからな、絶対だ、本当に、頼んだ、絶対。',en:"Paper-pres — attire-coord properly think, as adult, obvious-being-watched, absolute, ask.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究の合間、休養、しっかり、取るようにしております、本当に、健康、第一、心がけております、社会人になってからも、続けます、絶対。',en:"Yes. Research-between rest — properly take, health-first mindful, as adult continue absolute.",style:'Earnest close.'},
  ]},
  {id:'conv_06989',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'本件、盗難品、買い手の特定、本当に、難航しております、警察、全力で、捜査、進めております、皆様、ご協力、お願いいたします、本当に、急務、感じております。',en:"Case — stolen-goods buyer-ID hard, police full-inv, your coop, urgent feel really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察様からの忠告、社員に、しっかり、伝えております、本当に、防犯意識、高まっております、社内、皆様の、おかげで、本当に、感謝。',en:"Yes. Police-advice staff convey, crime-prev raised, thanks-all gratitude.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'捜査手法、新しい技術、転用させていただいております、本件、最新の科学捜査、活用しております、市民の安全、第一です、本当に。',en:"Inv-method — new tech repurpose, this case latest forensic, citizen-safety first really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察の対応、本当に、模範的で、社員、感心しております、本当に、頼りに、なる存在です、地域として、本当に、感謝、しております、本当に。',en:"Yes. Police-resp — exemplary, staff admire, reliable, as region gratitude really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察学校の必読書、私も、若い頃、徹底的に、勉強いたしました、本当に、勉強、続けないと、いけませんね、警察官として、絶対に、本当に、絶えず。',en:"Police-school must-read — youth thoroughly studied, study-must, as officer absolute continually.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。警察からの、お預かった、重要書類、本当に、慎重に、保管しております、絶対、外部に、漏らさないよう、徹底中、本当に、社員、皆。',en:"Yes. From police — vital docs entrusted, careful store, no-ext-leak thorough all.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'防犯活動、地域全体で、コーディネートしてまいります、本当に、皆様の、お力、必要です、地域の、安全、共に、守ってまいりましょう、本当に、絶対。',en:"Crime-prev — region-overall coord, your help needed, safety together-guard absolute really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察官の方々の、休養、本当に、しっかり、取られてほしいですね、本当に、お疲れ様です、いつも、感謝、申し上げます、地域として、本当に、絶対。',en:"Yes. Officers-rest — properly take want, tired-thanks, gratitude as region absolute really.",style:'Close.'},
  ]},
  {id:'conv_06990',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時、買い手を、必死に、探した日々、本当に、覚えているぞ、お父さんから、お前に、伝えていきたい、絶対、創業精神、忘れるな、本当に、絶対だ。',en:"Founding — buyers desperate-search days, remember, from-Dad you convey want absolute, founding-spirit don't-forget absolute.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんからの忠告、私、本当に、いつも、心に、刻んでおります、社員にも、伝えていきます、絶対、創業精神、引き継いでまいります、本当に。',en:"Yes. Dad-advice — always heart-carve, staff convey, founding-spirit inherit absolute really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業時の機械、新しい用途に、転用していくこと、お父さん、推奨していたぞ、お前にも、本気で、考えて欲しい、本当に、頼むぞ、絶対だ、これは。',en:"Founding-machines — new-use repurpose, Dad recommend, you serious-think want, ask absolute.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、社員、模範として、生きた姿、本当に、私の心に、ずっと、残っております、感謝しております、お父さん、本当に、絶対に、お父さん。',en:"Yes. Dad — staff model lived-form, heart always-remain, gratitude, Dad really absolute.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'創業時、お父さん、必読書、いつも、お前にも、教えてやりたかった本、いっぱい、あるんだぞ、本当に、いつか、共有しような、ね、約束、絶対。',en:"Founding — Dad must-read, also you teach-want books many, sometime share, promise absolute.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。創業以来、お得意様から、お預かった、信頼、本当に、絶対、守ってまいります、お父さんの代から、続く、お約束、絶対です、本当に、お父さん。',en:"Yes. Since founding — VIP-trust entrusted, absolute keep, since Dad-era promise absolute Dad.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代の、新製品のコーディネート、創業者として、関わってきた、本当に、楽しい思い出だった、お前の代でも、頑張れ、絶対、本当に、頼んだ。',en:"Dad-era — new-product coord, as founder involved, fun memories, your-era try absolute ask.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、本当に、ゆっくり、休養を、お取りください、私、絶対、お父さんの代の、想いを、引き継いでまいります、本当に、信じてください、絶対。',en:"Yes. Dad — slow rest take, absolute Dad-era-thoughts inherit, believe really absolute.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06991',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、警察、捜査の前線、本当に、夜遅くまで、緊張感、保っております、市民の安全のため、絶対に、頑張ってまいります、本当に。',en:"Case — police inv-front, late-night tension-keep, citizen-safety, absolute try really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'警察の最前線、本当に、頭が下がる、思いですね、市民として、いつも、感謝、しております、本当に、ご活躍、応援、しております、いつも。',en:"Police front-line — humbled-feel, as citizen always-thank, activity-cheer always.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者と、対峙する場面、本当に、緊張、続きました、警察官、皆、覚悟を、持って、立ち向かってまいりました、本当に、責任、感じております。',en:"Yes. Suspect-face scene — tension continued, officers all resolve-have face, resp-feel really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'最近、SNSでの、誹謗中傷、本当に、深刻ですよね、警察、サイバー犯罪、対応、強化、必要ですよね、これからの、社会、本当に、課題、多い、感じます。',en:"Lately SNS-libel — serious, police cyber-crime resp strengthen needed, future-soc issues many feel.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、本日午前、自主的に、出頭してまいりました、本当に、警察、長らくの捜査、ようやく、一区切り、つけられました、感謝、市民にも、本当に。',en:"Yes. Suspect — today AM voluntarily surrendered, police long-inv finally boundary, gratitude citizen.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者、無垢な、ご家族、本当に、心が、痛みます、警察、ご家族のケア、本当に、丁寧に、対応されていますね、感謝、申し上げます、市民として、本当に。',en:"Victim — innocent family, heart-pain, police family-care careful, gratitude as citizen really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、撃たれたとの、誤情報、ネットで、流れたこと、ありました、本当に、市民の皆様に、ご心配、おかけしました、本当に、訂正、いたします、絶対。',en:"Yes. Suspect — shot misinfo, net-flowed, citizens-worry caused, correction absolute really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察の方々が、市民に、安全を、説く活動、本当に、立派ですよね、感謝、しております、いつも、本当に、応援しております、頑張ってください、本当に。',en:"Police — citizens safety-preach activity splendid, gratitude, cheer-always really, try please.",style:'Reflective close.'},
  ]},
  {id:'conv_06992',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦時下の、前線の兵士、論文で、本当に、丁寧に、扱われていましたね、感動的な、内容でした、私、読んで、心が、揺さぶられました、本当に。',en:"Ren — wartime front-soldiers, paper carefully handled, moving content, heart-shaken really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。記録の最前線、当時の従軍記者、本当に、命を、かけて、報じていました、論文で、丁寧に、論じました、本当に、感動的な、研究、できました。',en:"Yes. Record front-line — era reporters life-risked reported, paper careful argued, moving research really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦争で、文化が、対峙した場面、論文で、本当に、深く、論じられていますね、桜さん、視点、本当に、独創的でしたね、研究の質、本当に、立派でした。',en:"War — cult-faced scene, paper deep argued, view original, research-quality splendid.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦中の誹謗、対立する民族間で、深刻でしたね、論文で、扱いました、現代の、社会問題にも、繋がる、テーマでした、本当に、研究、深かった、本当に。',en:"Yes. Wartime-libel — opposing-ethnic, severe, paper-handled, modern-soc-issues link, deep research really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦犯の出頭、戦後の歴史で、本当に、重要な、転換点でしたね、論文の中で、扱われていましたね、本当に、深い研究、桜さん、評価できますよ、本当に。',en:"War-criminals — surrender, post-war hist vital turning-point, paper-handled, deep research, Sakura eval-able really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。戦争の犠牲者、無垢な、市民の方々、本当に、多かったですね、論文で、丁寧に、扱いました、本当に、心が、痛む、研究内容でした、私にとっても、本当に。',en:"Yes. War-victims — innocent citizens, many, paper-handled, heart-pain content, also-me really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦争で、撃たれた市民の方々、本当に、たくさん、いらっしゃいましたよね、論文の中で、丁寧に、論じていましたね、感動的な、扱いでした、本当に、立派でした。',en:"War — shot citizens many, paper carefully argued, moving handling really splendid.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。平和を、説く言葉、戦後の、人々から、たくさん、いただきました、論文の重要な、視点でした、本当に、感謝、しております、お話、聞かせていただいて。',en:"Yes. Peace-preach words — post-war people lots-received, paper-key view, gratitude, talk-permitted.",style:'Earnest close.'},
  ]},
  {id:'conv_06993',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、医療の前線、本当に、毎日、勝負ですよ、患者さんの命、守るために、医師、本当に、全力で、向き合っております、本当に、絶対に、譲れない、立場ですね。',en:"Ren — med-front, daily battle, patient-life-guard, doctors full-face, absolute unyielding stance.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医療の最前線、本当に、頭が下がる、思いです、先生、いつも、本当に、ご活躍、応援、しております、市民として、感謝、しております、本当に、深く。',en:"Med front-line — humbled, sensei always-cheer activity, as citizen gratitude deeply.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。重い病と、対峙する患者さん、本当に、勇気、ある方々ですね、医師として、本当に、応援、させていただいております、寄り添う、姿勢、忘れずに、絶対。',en:"Yes. Heavy-disease facing patients, courage, as doctor cheer, snuggle-stance don't-forget absolute.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療従事者への、ネット誹謗、本当に、心が、痛みますね、先生、本当に、頑張っていらっしゃる方々を、傷つけないで欲しいですね、本当に、社会、変えていかないと。',en:"Med-worker net-libel — heart-pain, sensei hard-working don't-hurt want, soc-change must.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さん、自主的に、病院に、出頭、される方も、増えております、最近、健康意識、高まっているんですね、本当に、嬉しい、変化ですね、社会の。',en:"Yes. Patient voluntarily-hospital-show, increasing, health-conscience-rise, glad-change really, soc.",style:'Informative.'},
    {speaker:'ren_uni',jp:'無垢な、お子様の患者さん、本当に、お見舞いする、と、胸が、締め付けられますね、先生、医師として、辛い場面、たくさん、ありますよね、本当に、お疲れ様、本当に。',en:"Innocent kid-patient — visit, chest-tighten, sensei, hard scenes many, tired-thanks really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。戦時、医師、撃たれた事例も、歴史上、あったそうですね、本当に、痛ましい、歴史、です、医療の歴史、深いですね、本当に、勉強、続けないと、いけませんね。',en:"Yes. Wartime — doctors shot cases hist existed, painful, med-hist deep, study-continue must.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'医療の倫理を、説く先生方、本当に、立派な、姿勢ですよね、私、本当に、見習いたいと、思っております、絶対、私も、医療研究、続けていきたいです、本当に。',en:"Med-ethics preach senseis — splendid stance, emulate-want, also med-research continue want really.",style:'Earnest close.'},
  ]},
  {id:'conv_06994',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業界競争の前線、当社、絶対に、退かないで、攻めていけ、社員、本気で、頑張れ、本当に、頼んだぞ、これは、絶対に、本当に、私からの、お願いだ。',en:"Industry-rivalry front — our co absolute don't-retreat attack, staff serious-try ask absolute, my request.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。技術開発の最前線、若手、本当に、頑張ってくれております、社長、誇りに、思ってください、社員、皆、絶対、応えてくれます、本当に、頼もしいです、最近。',en:"Yes. Tech-dev front-line — youth hard-work, pres proud-think, all-staff respond absolute, reassuring lately.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'競合と、対峙する場面、社員、本当に、覚悟を、持って、立ち向かって欲しい、絶対に、譲れない、姿勢、見せていけ、本当に、頼んだぞ、社員、皆、本気で、絶対。',en:"Rival-face scene — staff resolve face want, unyielding stance show absolute, ask serious all absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。ネット上の誹謗、当社にも、向けられる時、ございます、本当に、丁寧に、対応、心がけております、社員、絶対に、気にしないように、強くいてください。',en:"Yes. Net-libel — toward our co times exist, careful resp-mindful, absolute don't-mind, stay strong.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'コンプラ違反、自主的に、出頭する社員、評価する制度、社内、整えていけ、絶対に、隠蔽、許さない方針、本当に、徹底だ、社員、皆、絶対、頼んだぞ。',en:"Compl-violation — voluntarily surrender staff, eval system, internal-prep, no-conceal absolute thorough.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。創業者の無垢な、情熱、社員、本当に、引き継いでくれております、社長、本当に、嬉しいことですね、当社の、伝統、絶対、守ってまいります、本当に、絶対。',en:"Yes. Founder innocent passion — staff inherit, pres glad, our-trad absolute keep absolute.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'業界の問題、撃たれた時こそ、社員、団結する姿、見せていけ、絶対に、本気で、頑張れ、本当に、これは、絶対に、譲れない、私からの、本当に、心からの、お願い。',en:"Industry issues — shot-time, staff unite stance show absolute, serious-try, unyielding heart-request.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。創業精神を、説く社長、本当に、立派な、姿勢、社員、皆、誇りに、思っております、本当に、感謝、しております、社長、これからも、頼りに、しております、絶対。',en:"Yes. Founding-spirit preaching pres — splendid stance, staff proud, gratitude, future-rely absolute.",style:'Close.'},
  ]},
  {id:'conv_06995',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through social research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、戦争の前線、本当に、丁寧に、論じていますね、研究の深さ、本当に、印象的でした、本当に、立派な、研究、できました、桜さん、感心しました、本当に。',en:"Sakura — paper, war-front carefully argued, research-depth striking, splendid research admire really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。報道の最前線、戦時下、本当に、危険な仕事だったんですね、論文で、扱いました、当時の記者、本当に、勇気、ありましたよね、頭が下がる、思いです、私、本当に。',en:"Yes. Reporting front-line — wartime danger-job, paper-handled, era-reporter courage, humbled really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'文化と文化が、対峙する場面、論文で、深く、論じていますね、本当に、貴重な、視点でした、桜さん、これからの、研究にも、繋がる、テーマでしたね、本当に、感心。',en:"Cult-face scene — paper deep argued, precious view, future-research-link theme, admire really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時下の誹謗、敵国民への、本当に、深刻なものでしたね、論文で、丁寧に、論じました、現代の、社会問題にも、繋がる視点、含めて、書きました、本当に、深い研究。',en:"Yes. Wartime-libel — toward-enemy serious, paper careful argued, modern-soc-issue link included really deep.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦犯の出頭、戦後の、本当に、複雑な、政治情勢の中で、行われたんですよね、論文の中で、丁寧に、論じていましたね、桜さん、本当に、視野が、広いですね、本当に、感心しました。',en:"War-criminal surrender — post-war complex polit-amid, done, paper-argued, view-wide admire really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。戦争で、無垢な子供たちが、本当に、犠牲になった事実、論文で、扱いました、本当に、悲しい、歴史です、絶対、繰り返してはならないと、強く、訴えました、論文で。',en:"Yes. War — innocent kids sacrificed fact, paper-handled, sad-hist, absolute don't-repeat strongly argued.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、市民が、撃たれた、痛ましい歴史、論文で、丁寧に、扱われていましたね、本当に、感動的でした、桜さん、研究の質、本当に、立派でした、本当に、評価できます、絶対。',en:"Wartime — citizens shot painful hist, paper careful handled, moving Sakura research-quality splendid eval absolute.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。平和を、説く現代の活動家、本当に、立派な、人々ですね、論文の終わりで、扱いました、本当に、希望、感じる結論、書けました、私、感謝しております、本当に。',en:"Yes. Peace-preach modern activists splendid, paper-end handled, hope-feel conclusion wrote, gratitude really.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06996',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、夕食、鯖の塩焼き、彼、本当に、好きなのよ、葵で、新作メニューに、入れてみたら、お客様、喜びそうだよね、絶対に。',en:"Aoi — dinner saba-salt-grill, bf love, Aoi new-menu include cust-glad def.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。最近、保湿クリーム、お肌に、潤いを、与えてくれるものに、変えたの、葵で、メイちゃん、おすすめできるよ、本当に、いいよ。',en:"Yeah. Lately mois-cream — skin-moisture-give-changed, Aoi Mei rec-able, good really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵の新店、本当に、絶大な評判よ、私、メディアでも、特集されてるって、聞いたよ、葵、すごいね、誇りに、思うわよ、本当に、葵、感激!',en:"Aoi new-store — huge reputation, also-media-featured heard, Aoi amazing, proud really, moved!",style:'Animated.'},
    {speaker:'aoi_barista',jp:'彼の車のホイール、新しいの、彼、買ったらしいよ、メイちゃん、よく、知ってるよね、葵で、メイちゃん、ご存知でしょ?',en:"Bf-car wheels — new bought, Mei well-know, in Aoi, Mei knew?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'葵の店、入口の鐘、鳴り響いて、お客様、迎えてくれる、雰囲気、本当に、お洒落でいいよね、葵、私、お気に入りなのよ、本当に。',en:"Aoi — entrance-bell ring-echoes, cust-greet air, stylish, fave really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'葵のスタッフ、新人、マキちゃんって、いう子なの、メイちゃん、紹介するね、優しい子よ、葵で、本当に、人気者になってる、最近、特に。',en:"Aoi staff — newbie Maki, intro, kind, Aoi popular lately esp.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'休日、彼と、ドライブで、車、飛ばすの、本当に、爽快だよね、葵、私、結構、ストレス、発散できるんだ、本当に、楽しい時間。',en:"Holiday — with bf drive car-zoom, refreshing, Aoi, stress-relieved, fun time really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'最近、ゾンビ映画、結構、ハマってるのよ、私、葵で、メイちゃん、興味、ある?一緒に、見ない?本当に、結構、面白いんだよ、葵。',en:"Lately zombie-film hooked, Aoi, Mei interest?, together-see?, fun really, Aoi.",style:'Animated close.'},
  ]},
  {id:'conv_06997',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さん、鯖の煮物、また、作ってって、頼んでたよ、本当に、お父さん、好物なんだよね、ぼく、覚えてるよ。',en:"Mom — Dad saba-stew, again-make-asked, fave, remember.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。お風呂上がりの、お肌、潤いがあって、気持ちいいわよね、翔くん、ローション、塗ってあげるからね、ね、約束。',en:"Yes. Post-bath skin — mois-feel good, Sho lotion-paint, promise.",style:'Soft.'},
    {speaker:'sho_child',jp:'運動会の応援、お父さん、絶大な声で、応援してくれたよ、ぼく、嬉しかったよ、ママ、お父さん、本当に、すごかった!',en:"Sports-day cheer — Dad-huge-voice cheered, glad, Mom Dad amazing!",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お父さん、自転車の、ホイール、新しく、買ってあげたって、お祖父ちゃんから、聞いたわよ、翔くん、よかったわね、嬉しいわよね、ね。',en:"Dad — bike wheels newly-bought, Grandpa-heard, Sho glad, glad.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お祭りの、鐘が、鳴り響いて、楽しい雰囲気、出てきたね、ママ、ぼく、本当に、楽しみだよ、お祭り、絶対、行きたいよ!',en:"Fest — bell ring-echoes, fun-air out, Mom fun really, def go-want!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お友達のマキちゃん、翔くん、よく、遊んでるよね、優しいお友達でいいわね、ママも、嬉しいわよ、翔くん、お友達、大切にしてね、ね。',en:"Friend Maki — often-play, kind-friend, Mom glad, friends-treasure.",style:'Warm.'},
    {speaker:'sho_child',jp:'お父さん、新しい車で、お母さん、買い物に、飛ばすの、たまに、するよね、ぼく、後ろで、楽しんでるよ、本当に、家族のドライブ、好き。',en:"Dad — new-car Mom shop-zoom occasional, behind-fun, family-drive like.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さん、ゾンビ映画、結構、好きなのよね、翔くんは、まだ、怖いかな、大きくなったら、一緒に、見れるわよね、ね、楽しみね、家族で。',en:"Dad — zombie-film like, Sho still-scary?, big-grow together-see-able, fun family.",style:'Tender close.'},
  ]},
  {id:'conv_06998',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、家庭科で、鯖料理、作ったよ、結構、美味しくできたんだよ、私、リク、お前にも、食べてみてほしいよ、本当に、ね、絶対。',en:"Riku — home-ec saba-cook made, tasty, you-eat-want really absolute.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。最近、肌が、乾燥で、潤いが、ないんだよな、桜、お前、いいクリーム、おすすめ、ある?教えて、お願い、本当に、本気で、悩んでる。',en:"Yeah. Lately skin-dry, no-mois, Sakura rec?, tell-please seriously worry.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前のサッカー部、絶大な人気、あるよね、文化祭で、特集、組まれるって、聞いた、本当に、すごいよね、リク、誇りに、思いなよ、絶対。',en:"Your soccer-club — huge pop, cult-fest-featured heard, amazing, Riku proud absolute.",style:'Praising.'},
    {speaker:'riku_teen',jp:'自転車の、ホイール、最近、変えたんだぜ、桜、お前、見てみたい?結構、お洒落になったぞ、本当に、自慢、したいくらい、いいんだ。',en:"Bike-wheels — lately changed, you see?, stylish, boast-want good really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'放課後の、チャイム、鳴り響いて、本当に、帰りたい気持ち、すごいよね、リク、お前、毎日、感じるでしょ?',en:"Post-class — chime ring-echoes, want-home strong, Riku daily-feel?",style:'Wry.'},
    {speaker:'riku_teen',jp:'隣のクラスのマキ、結構、可愛いって、皆、言ってるんだぜ、桜、お前、知り合い?紹介してくれる、お願い、本当に、頼む、絶対に。',en:"Next-class Maki — cute, all-say, you acquaintance?, intro please ask absolute.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'文化祭、ペーパー飛行機、飛ばす競技、出るんだ、リク、お前、応援、来てくれる?お願い、本当に、頼むよ、絶対、ね、約束。',en:"Cult-fest — paper-plane-zoom contest, out, Riku cheer-come?, ask promise absolute.",style:'Eager.'},
    {speaker:'riku_teen',jp:'最近、ゾンビゲーム、面白いの、出てきてさ、桜、お前も、興味、出てきた?お互いに、夜、対戦してみない?本当に、楽しいんだぜ、本気で。',en:"Lately zombie-game fun out, Sakura interest-came?, night-match-try?, fun seriously.",style:'Animated close.'},
  ]},
  {id:'conv_06999',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'昔、田舎で、鯖の干物、よく、食べたよな、ばあさん、覚えてる?本当に、美味かったよな、新鮮で、お互いに、覚えてるかな、ね、二人で。',en:"Old — country saba-dried often-ate, gran remember?, tasty fresh, mutual remember two.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。年を取ると、お肌の潤い、なくなってくるわよね、あなた、お互いに、保湿、しっかり、しましょうね、本当に、健康、第一にしましょう。',en:"Yes. Age — skin-mois lost, dear mutually mois properly, health-first.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'創業者として、私の権限、絶大だった時代、若い頃の話だぞ、ばあさん、覚えてる?今は、もう、楽になったわよね、二人で、ゆっくり、暮らせて。',en:"Founder — my-authority huge era, youth-talk, remember?, now-easy, two slow-live.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃんの車のホイール、いつも、ピカピカ、磨いてたわよね、覚えてる、あなた、本当に、車、大事にしていたわよね、本当に。',en:"Youth — Grandpa-car wheels always-polish, remember, dear, car-treasured really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔、お祭りの太鼓、鳴り響いて、子供たち、ワクワクしたよな、ばあさん、覚えてる、私たちも、楽しかったよな、二人で、よく、お祭り、行ったよな、本当に。',en:"Old — fest taiko ring-echoes, kids excited, gran remember?, also-fun, two often-fest-went really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'息子の幼馴染、マキちゃんって、いう子、いたわよね、あなた、覚えてる?今、どうしてるのかしらね、ふと、思い出したのよ、私、最近。',en:"Son-childhood-pal — Maki kid existed, remember?, now how?, suddenly-recall lately.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、車で、二人で、夜の高速を、飛ばす感覚、本当に、爽快だったよな、ばあさん、覚えてる?今は、もう、できないわよな、お互いに、年だしね。',en:"Youth — car, two night-highway-zoom, refreshing really, gran remember?, now-can't, mutual aged.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'最近のドラマ、ゾンビが、出てくるものが、増えたわよね、あなた、私、ちょっと、苦手なのよ、本当に、若い人の、好み、変わったわよね、ね、本当に。',en:"Recent drama — zombie-appearing increased, dear, slight-bad, youth-pref changed.",style:'Wry close.'},
  ]},
  {id:'conv_07000',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、鯖寿司、関西の郷土料理として、メニューに、加えへんか、お客さん、本当に、喜びそうやで、絶対、人気、出るで、本当に。',en:"Aoi — saba-sushi, Kansai-local, menu-add?, cust-glad def, pop-out really.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。お肌に、潤いを、与える、保湿効果のある、ハーブティー、新メニューに、加えませんか、葵で、お客様、喜んでくださいそうですね。',en:"Yes. Skin-mois-give, mois-effect herb-tea, new-menu add?, in Aoi cust-glad-likely.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'看板メニューの、絶大な人気、本当に、ありがたいことやな、葵さん、お客さん、口コミで、広めてくれてはるんやで、本当に、感謝、しないとな。',en:"Signature-menu huge pop, grateful, Aoi, cust word-of-mouth-spread, must-thank.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。配達車のホイール、新しく、塗り替えませんか、葵で、店のイメージ、上がりますよね、ロゴ入りで、お洒落になりますよ、絶対に、本当に。',en:"Yes. Delivery-car wheels — newly repaint?, in Aoi store-image-up, logo stylish def really.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'入店の鐘、お客さん、入ってきた瞬間に、鳴り響くようにしたら、ええんちゃうか、葵さん、おもてなしの心、伝わるで、絶対、本当に、本気で。',en:"Entry-bell — cust-enter moment ring-echoes good?, Aoi omotenashi-convey def serious.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。スタッフのマキさん、本当に、頼もしく、なってきました、葵で、若手として、育っております、本当に、嬉しいですね、人材、育てるの、楽しみ、本気で。',en:"Yes. Staff Maki — reassuring becoming, in Aoi as youth growing, glad really, talent-raise fun serious.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'配達、もう少し、車を、飛ばす感じで、効率化、図ろか、葵さん、安全運転、第一にしながらやけどな、本当に、本気で、頑張っていこか、絶対。',en:"Delivery — bit car-zoom eff-aim, Aoi safe-drive-first while, serious-try absolute.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。ハロウィン、ゾンビのデコレーション、店内、施しませんか、葵で、子供たち、本当に、喜んでくれそうですね、絶対、楽しみな、イベントになりますよ、本当に。',en:"Yes. Halloween — zombie-decor in-store add?, in Aoi kids-glad def, fun-event will-be really.",style:'Warm close.'},
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

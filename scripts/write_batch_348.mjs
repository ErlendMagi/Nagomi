import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_348 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['大笑い','ぱっと','ぺん','愛犬','老化','タメ','木製','無茶']
const B_T = ['ジャーナル','出社','引き受ける','役立っ','開場','引き締め','スワップ','手動']
const C_T = ['上方','封印','軌跡','骨格','懐疑','名門','先入観','取り除く']
const D_T = ['たどり着い','サス','塀','乗用車','新生','捕らえ','クライマックス','盛りだくさん']

const data = [
  // A
  {id:'conv_06921',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お祖父ちゃんの話、家族で、大笑いしたよね、本当に、楽しかった、先週末。',en:"Mom — Grandpa-talk, family loud-laugh, fun, last weekend.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'うん。お祭りの灯、ぱっと、つくと、本当に、わくわくするわよね、翔くん。',en:"Yes. Fest lights — pop-on, exciting, Sho.",style:'Warm.'},
    {speaker:'sho_child',jp:'動物園で、ぺんぎん、見たよ、ぼく、可愛かったよ、すごく、近くで、見れたんだ!',en:"Zoo — penguin saw, cute, super-close-saw!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんの愛犬、まだ、元気よね、本当に、長生きしてるわね、十五歳でしょ?',en:"Granny's dog — still energetic, long-life, 15?",style:'Reflective.'},
    {speaker:'sho_child',jp:'お祖父ちゃん、老化、ちょっと、心配だね、ママ、最近、お祖父ちゃん、疲れやすそうだよね。',en:"Grandpa — aging slightly worry, lately tire-easily.",style:'Concerned.'},
    {speaker:'yumiko_mom',jp:'お友達と、タメ口で、話すの、楽しいわよね、翔くん、お友達、増えて、よかったね。',en:"Friend — casual-talk fun, Sho, friends-increased glad.",style:'Tender.'},
    {speaker:'sho_child',jp:'お家の、木製の椅子、ぼく、好きだよ、ママ、温かい感じが、するんだ、本当に。',en:"Home — wooden chair, like, warm-feel, really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'無茶な遊び、しないようにね、翔くん、ママ、心配だからね、いつも、本当に。',en:"Reckless play — don't, Sho, Mom worry, always really.",style:'Direction close.'},
  ]},
  {id:'conv_06922',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、彼のジョーク、私たち、大笑いしたよね、本当に、面白い人なの、彼。',en:"Aoi — bf-joke, loud-laughed, really funny person.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。お客様、店に入って、ぱっと、笑顔になる、その瞬間が、好きなのよ、葵で。',en:"Yeah. Cust — enter, pop-smile moment, like, in Aoi.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'妹が、新しいぺんぎんのぬいぐるみ、買ったの、可愛いって、自慢してたわよ、葵にも、見せたい。',en:"Sis — new penguin-plush bought, cute-boasted, Aoi show.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'メイちゃんの愛犬、本当に、お利口さんよね、いつ、見ても、可愛い子、心が、和むのよ、葵で。',en:"Mei's dog — really clever, anytime cute, heart-calms, in Aoi.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'最近、老化、気になってきたの、私、化粧品、選ぶ時、慎重になっちゃう、本当に。',en:"Lately — aging mind, makeup careful-choose really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'幼馴染とは、いつまでも、タメ語で、話せるって、いいわよね、メイちゃんと、葵も、ずっと。',en:"Childhood-pals — anytime casual-talk-able good, Mei-Aoi long.",style:'Tender.'},
    {speaker:'mei_romantic',jp:'葵の店の、木製の家具、本当に、お洒落よね、温もりが、感じられて、好きなのよ。',en:"Aoi furniture — wood stylish, warmth-felt, like.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'無茶ダイエット、しないでね、メイちゃん、葵としても、本当に、心配だからね、お互いに、健康、第一。',en:"Reckless diet — don't, Mei, as Aoi worry, mutually health-first.",style:'Concerned close.'},
  ]},
  {id:'conv_06923',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前の話、私、大笑いしちゃったよ、本当に、面白いよね、いつも。',en:"Riku — your talk, loud-laughed, funny always.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。雷、夜、ぱっと、光って、結構、怖かったぜ、桜、お前は、平気だった?',en:"Yeah. Thunder — night pop-flash, scary, Sakura, you fine?",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'動物園のぺんぎん、可愛いよね、リク、文化祭の出し物、ぺんぎんモチーフ、いいかも、ね。',en:"Zoo penguin — cute, Riku, cult-fest motif, good maybe.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前の家の愛犬、結構、長生きしてるよな、桜、すごいよ、家族の絆、感じるよ、本当に。',en:"Your dog — quite long-live, Sakura, amazing, family-bond felt really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お祖父ちゃんの老化、家族として、心配だよね、リク、お前のお祖父ちゃんも、お元気?',en:"Grandpa aging — family-worry, Riku, your Grandpa also energetic?",style:'Concerned.'},
    {speaker:'riku_teen',jp:'同級生と、タメ口で、話せるって、楽だよな、本当に、敬語、疲れるぜ、いつも、俺。',en:"Classmate casual-talk easy, really, formal tiring always me.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'学校の、木製の階段、味があって、好きだよ、私、リク、お前は、どう、思う、最近の?',en:"School wood-stairs — character, like, Riku, you how think, recent?",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前、無茶な計画、立てないでね、桜、心配しちゃうぜ、俺、本当に、いつも、応援してる。',en:"You — reckless-plan don't, Sakura, worry, always cheering.",style:'Soft close.'},
  ]},
  {id:'conv_06924',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'孫の話、家族で、大笑いしたわよね、ばあさん、本当に、楽しい食卓だったわね。',en:"Grandkid-talk — family loud-laughed, gran fun-table.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'うん。庭の桜、春、ぱっと、咲くと、本当に、心が、洗われる気持ち、するわよね、毎年。',en:"Yes. Garden cherry — spring pop-bloom, heart-cleansed, yearly.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'子供の頃、ぺんぎんって、ことば、初めて、聞いたとき、不思議だったな、ばあさん、覚えてる?',en:"Childhood — penguin-word first-heard, mysterious, gran remember?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うちの愛犬、本当に、長く、家族の一員だったわね、あなた、感謝しないとね、ペット、大事。',en:"Our dog — long family-member, dear, gratitude pet-precious.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'老化、お互いに、避けられないことだ、ばあさん、健康、第一にしないとね、本当に、お互い。',en:"Aging — mutually unavoidable, gran health-first, mutual really.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'若い頃、姉妹で、タメ語で、話してたわよね、私、覚えてる、楽しかった、二人で、いつも。',en:"Youth — sis casual-talk, remember, fun, two always.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'昔の私たちの家、木製の床で、よく、滑って、転んだもんよ、ばあさん、楽しい思い出だ。',en:"Old home — wood-floor often-slipped-fell, gran fun memory.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃の無茶、今、考えると、本当に、笑っちゃうわよ、二人で、よく、頑張ったわよね。',en:"Youth-reckless — now-think, laughs, two well-tried.",style:'Tender close.'},
  ]},
  {id:'conv_06925',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんの話で、大笑いしてくれたね、本当に、嬉しいよ、メイ姉さん、いつも。',en:"Sho — Mei-talk loud-laugh, glad really, Mei-sis always.",style:'Bright.'},
    {speaker:'sho_child',jp:'ぼく、お外で、お友達、見つけると、ぱっと、走り出すんだよ、メイ姉さん、見て、ね。',en:"Me — outside, friend-find, pop-run, Mei-sis see.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'動物のぺんぎん、メイ姉さん、子供の頃、大好きだったの、覚えてないかな、お母さんに、聞いてみて。',en:"Penguin — Mei-sis childhood loved, remember-ask Mom.",style:'Wistful.'},
    {speaker:'sho_child',jp:'うちの愛犬、メイ姉さん、覚えてる?名前、ぽち、なんだよ、可愛いんだ、いつも。',en:"Our dog — Mei-sis remember?, name Pochi, cute always.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'メイ姉さんも、もう、すぐ、老化、気になる年齢なのよ、翔くん、信じられる?早いね、時間って。',en:"Mei-sis — soon, aging-mind age, Sho believe?, time-fast.",style:'Wry.'},
    {speaker:'sho_child',jp:'メイ姉さんとは、タメ口で、話していいんだよね、ぼく、嬉しいんだ、特別、感じるよ。',en:"Mei-sis — casual-talk OK, glad, special-feel.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'公園の木製のベンチ、座って、ゆっくり、お話しようね、翔くん、お弁当、持ってきたよ。',en:"Park wood-bench — sit, slow-talk, Sho, lunch brought.",style:'Tender.'},
    {speaker:'sho_child',jp:'無茶な高さから、ジャンプ、しないように、ぼく、約束するよ、メイ姉さん、心配かけないように、ね。',en:"Reckless-height jump — don't, promise, Mei-sis, no-worry.",style:'Earnest close.'},
  ]},

  // B
  {id:'conv_06926',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'業界ジャーナル、最新号、目を、通しておくよう、社員にも、伝えろ、知識、武器だ。',en:"Industry journal latest — eye-pass, staff convey, knowledge weapon.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。新入社員、初出社、来週月曜です、歓迎ムード、社内、整えております、温かく、迎えます。',en:"Yes. Newbie first-attend — next Mon, welcome-mood internal-prep, warm-greet.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'本件の責任、私が、引き受ける、心配せず、社員、安心して、業務に、専念しろ。',en:"This-resp — I take, no-worry, staff peace, business-focus.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。創業者のスピーチ、新人にも、本当に、役立った、と、感想、いただいております、嬉しいですね。',en:"Yes. Founder speech — newbie really useful, feedback received, glad.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新製品発表会、開場時間、お得意様、優先で、入っていただくように、整えろ、徹底だ。',en:"New-product launch — open-time, VIP-cust priority, enter, prep thorough.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経費の引き締め、社内、徹底中です、無駄な支出、見直しております、最近、特に。',en:"Yes. Expense-tighten internal-thorough, wasteful-cut review, lately esp.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'通貨スワップ、海外取引、リスクヘッジに、活用しろ、為替変動、無視できないからな。',en:"Currency swap — overseas, risk-hedge utilize, FX-vol can't-ignore.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。緊急時、手動での対応、訓練、社員に、施しております、もしもの時、安心です、本当に。',en:"Yes. Emerg manual-handle, train staff, just-in-case reassuring.",style:'Close.'},
  ]},
  {id:'conv_06927',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'業界ジャーナル、定期購読、続けていきましょうね、社内、知識、底上げに、必要よ、本当に。',en:"Industry journal — subscription continue, internal-knowledge raise needed, really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。新人、来週、出社、楽しみですね、職場の雰囲気、変わりますよね、私も、ワクワクしております。',en:"Yes. Newbie next-week attend, fun, workplace-air change, also-excited.",style:'Cheerful.'},
    {speaker:'yuki_office',jp:'責任、しっかり、引き受ける覚悟、社員に、見せたいわよね、リーダーとして、私たち。',en:"Resp — properly take, resolve, staff show want, as leader, us.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。前回の研修、本当に、役立ったと、社員から、感想、続々と、寄せられております、嬉しいです。',en:"Yes. Last training — really useful, staff-feedback continuous, glad.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'記念式典の開場、お得意様、何時に、ご招待しましょうか、慎重に、決めましょうね、調整、よろしく。',en:"Cere open — VIP-cust, what-time invite?, careful decide, coord please.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の業務、もう少し、引き締めて、効率化、図ってまいります、最近の課題ですね。',en:"Yes. Staff-biz — slightly tighten efficient aim, recent issue.",style:'Update.'},
    {speaker:'yuki_office',jp:'金利スワップ、為替リスクの対策、財務に、相談しときますね、私たち、勉強、必要ね、これから。',en:"Rate-swap — FX-risk measures, finance-consult, study-needed, hence.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。手動入力のミス、デジタル化で、減らしていきましょう、システム改善、急務ですね、本当に。',en:"Yes. Manual-input errors — digital-reduce, sys-improve urgent really.",style:'Close.'},
  ]},
  {id:'conv_06928',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、業界ジャーナル、海外のものにも、目を、通せ、視野、広く、持つこと、本当に、大切だぞ。',en:"Ren — industry journal overseas-also, eye-pass, view-wide, vital really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。インターン、毎週、定時に、出社、努めております、社会人として、自覚、持っています。',en:"Yes. Intern weekly on-time attend, as adult resp-have.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'責任、自分から、引き受ける姿勢、社会人として、成長するために、必要だ、覚えておけ。',en:"Resp — self-take stance, as adult, grow needed, remember.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先輩の論文、研究、本当に、役立っております、参考、させていただいて、感謝です、本当に。',en:"Yes. Senpai paper-research really useful, referenced, gratitude really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'学会発表、開場前から、緊張するもんだ、君も、慣れていけ、経験、積めば、楽になる。',en:"Conf-pres — pre-open nervous, you accustom, exp-accum, easier.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究費の引き締め、研究室、全員で、心がけております、無駄な、出費、避けるよう。',en:"Yes. Research-fund tighten — lab-all mindful, waste-avoid.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'学術界、留学生スワップ、活発化しているな、君も、海外、行ってみる気、あるか?',en:"Acad — int-student swap, activating, you overseas-go-mind exist?",style:'Probe.'},
    {speaker:'ren_uni',jp:'はい。実験は、最初は、手動から、始めるのが、基本ですよね、基礎を、しっかり、身につけたいです。',en:"Yes. Exp — first manual-start basic, basis-properly attain want.",style:'Earnest close.'},
  ]},
  {id:'conv_06929',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察ジャーナル、最新の捜査手法、紹介されております、企業様にも、ご一読、お勧めいたします。',en:"Police journal — latest inv-method intro, corp single-read recommend.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。社員、初出社で、警察から、防犯講座、受けられる機会、ありがたく、思っております。',en:"Yes. Staff first-attend — police crime-prev seminar receive, grateful.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'本件、警察が、責任、引き受ける形で、解決へ、進めてまいります、ご安心ください、市民の皆様。',en:"Case — police resp-take form, resolve-advance, rest-assured citizens.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察のアドバイス、本当に、役立っております、感謝、申し上げます、改めて、本当に。',en:"Yes. Police advice really useful, gratitude, again really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'防犯講座の開場、市民の皆様、定刻に、ご案内しております、お時間、確認、お願いします。',en:"Crime-prev seminar — citizens on-time guide, time verify please.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社内の警備、より、引き締めて、警察様にも、ご報告できる体制、整えてまいります。',en:"Yes. Internal security — more tighten, police-report-able system prep.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'国際協力、情報スワップ、海外警察と、進めております、グローバルな視点で、捜査、本格化です。',en:"Int-coop — info-swap overseas-police advancing, global view, inv full.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。緊急時の手動通報、社員、訓練しております、警察様、ご指導、ありがとうございます、本当に。',en:"Yes. Emerg manual-report — staff train, police-guide thanks really.",style:'Close.'},
  ]},
  {id:'conv_06930',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時、業界ジャーナル、私、必死に、読んだもんだ、覚えてる、お父さんの代、本当に、苦労してたんだ。',en:"Founding — industry journal desperate-read, remember Dad-era hardship really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、創業当時、出社時間、誰よりも、早かったって、聞いてます、お母さんから、本当に。',en:"Yes. Dad founding — attend-time earliest, heard from-Mom really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'責任を、引き受ける覚悟、私、創業時に、決めたんだ、若い君にも、見習って欲しい、本当に。',en:"Resp-take resolve — me, founding-decided, young you emulate-want really.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの教え、社員、本当に、役立っております、感謝しております、創業者として、私たちにも。',en:"Yes. Dad-teach, staff really useful, gratitude, as founder also.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業祭の開場、私の代から、地域の方々、お招きしてきた、伝統、続けてくれ、これからも。',en:"Corp-fest open — since my era, locals invited, tradition continue.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。経営の引き締め、創業期、お父さん、何度も、経験したんですよね、覚えてますか、お父さん?',en:"Yes. Mgmt-tighten — founding, Dad many-experience, remember?",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'海外取引、お父さんの代から、為替スワップ、活用してきたんだぞ、戦略の一つだ、覚えておけよ。',en:"Overseas — since Dad-era, FX-swap utilized, strategy, remember.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業時、すべて手動で、業務、こなしていたお父さんの姿、本当に、尊敬しております、私、お父さん。',en:"Yes. Founding — all manual biz-done, Dad-figure, respect really, Dad.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06931',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業績、上方修正、株主、喜ばれそうだな、社員にも、ボーナス、出せるよう、調整しろ。',en:"Performance — upward-revise, shareholders likely-glad, staff bonus-able adjust.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。過去のスキャンダル、すでに、封印された案件です、もう、議論する必要、ないかと、存じます。',en:"Yes. Past scandal — already sealed case, no-discuss-needed, think.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'当社の軌跡、社史として、若手にも、伝えていきたい、創業者の精神、絶対、忘れさせるな、絶対。',en:"Our trajectory — as corp-hist, youth convey, founding-spirit absolute don't-forget.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。製品の骨格となる、コア技術、新人にも、引き継いでいきます、技術伝承、徹底中です、最近。',en:"Yes. Product backbone — core-tech, newbie inherit, tech-transmit thorough, lately.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の動向、懐疑的に、見つつ、当社の戦略、進めろ、楽観だけは、絶対、禁物だ。',en:"Industry trend — skeptical-while, our strat advance, optimism alone absolute taboo.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。名門企業との提携、来期、進める予定です、当社の、ブランド、強化されますね、本当に。',en:"Yes. Prestigious-corp tie — next term, advance plan, our brand strengthen really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お客様の先入観、商品で、覆していく覚悟、社員、持って欲しい、製品開発に、活かせ。',en:"Cust preconception — product-overturn resolve, staff-want, dev utilize.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。製品から、ムダを、取り除く取り組み、進めております、コストカット、効率化、本格化中です。',en:"Yes. Product — waste-remove effort, advancing, cost-cut efficient full.",style:'Close.'},
  ]},
  {id:'conv_06932',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、犯人、上方を、転々と、移動していたようです、警察、追跡、本格化しております、現在。',en:"Case — perp upward-region wandering moved, police-track full, current.",style:'Calm.'},
    {speaker:'ren_uni',jp:'過去の事件、警察、長らく、封印されていた、と、聞きました、再捜査、始まったんですね。',en:"Past case — long-sealed, heard, re-inv started.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。犯人の軌跡、防犯カメラ、丹念に、追跡しております、捜査本部、夜遅くまで、頑張っています。',en:"Yes. Perp trajectory — cam carefully-trace, HQ late-night working.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者の骨格、目撃情報と、一致しているんですね、警察、見つけられそうですね、本件、解決へ、向けて。',en:"Suspect frame — eyewitness-match, police find-able, case solve-toward.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。証言、懐疑的に、扱う必要、ある場面、捜査では、よく、ございます、慎重さ、必要です、いつも。',en:"Yes. Testimony — skeptical-handle needed scenes, often, careful needed always.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、名門高校の出身者、報道で、知りました、社会的影響、大きいですね、本件、本当に。',en:"Suspect — prestige-HS-from, reporting knew, soc-impact big, really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。先入観、捨てて、捜査に、当たるよう、署員、教育しております、徹底的に、毎日。',en:"Yes. Preconceptions — discard, inv face, instruct, daily thorough.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'証拠の中から、雑音を、取り除く分析作業、警察、最新の技術、活用していますね、感心です、本当に。',en:"Among evidence — noise-remove analysis, police latest-tech utilizing, admire really.",style:'Curious close.'},
  ]},
  {id:'conv_06933',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、江戸の上方文化、丁寧に、扱っていますね、本当に、視点、独創的でした。',en:"Ren — paper, Edo kamigata-cult, careful handle, original view really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。戦時下、封印された言論、戦後、再評価されてきた歴史、扱いました、貴重な視点で。',en:"Yes. Wartime — sealed-discourse, post-war re-eval hist, handled, precious view.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史家の軌跡、追体験するような、読み応え、ありますね、論文の中で、特に、感動的でした。',en:"Historian-trajectory — re-experience reading-feel, in-paper esp moving.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。江戸時代の社会の骨格、論文で、明確に、示しました、新しい視点で、論じました。',en:"Yes. Edo soc backbone — paper-clearly shown, new view argued.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後の歴史記述、懐疑的に、扱う視点、研究者として、必要ですね、桜さんも、見習って欲しいです。',en:"Post-war hist-write — skeptical handle, as researcher needed, Sakura also emulate-want.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。名門の家系、歴史の動かす力、ありましたね、論文で、丁寧に、扱いました、深い研究、できました。',en:"Yes. Prestige-family lineage — hist-move power existed, careful handle, deep research done.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'先入観なしに、歴史を、読み解く姿勢、本当に、立派です、これからも、続けて欲しいです、研究者として。',en:"Without preconception — hist-read stance, splendid really, continue want, as researcher.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。史料から、創作部分を、取り除く分析、論文の核心でした、新しい解釈、できたと思っております。',en:"Yes. From archive — fiction-remove analysis, paper-core, new interpretation, think.",style:'Earnest close.'},
  ]},
  {id:'conv_06934',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、医療研究、上方への発展、近年、目覚ましいですね、技術革新、本当に、急速ですね、最近。',en:"Ren — med-research upward dev, recently remarkable, tech-innov rapid lately.",style:'Calm.'},
    {speaker:'ren_uni',jp:'過去の医療ミス、封印されていた事例、再評価されつつありますね、現代の医療倫理、変わってきました。',en:"Past med-error — sealed cases, re-eval going, modern med-ethics changed.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。私の医師としての軌跡、振り返ると、本当に、いろいろな思い、湧いてきます、感慨深いですね。',en:"Yes. As doctor trajectory, look-back, various feelings come, deep-feeling.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'人体の骨格構造、医療研究の基礎、本当に、奥深いですよね、先生、勉強、何年経っても、足りないですよね。',en:"Body skeletal-structure — med-research basis, deep, sensei study-yrs insufficient.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。新薬の効果、懐疑的に、見つつ、慎重に、検証することが、本当に、重要です、医療従事者として。',en:"Yes. New-drug effect — skeptical-while, careful verify, vital, as med-worker.",style:'Patient.'},
    {speaker:'ren_uni',jp:'名門大学の医学部、研究レベル、本当に、高いですよね、先生、お知り合い、多くいらっしゃるんですか?',en:"Prestige-uni med-faculty — research-level high, sensei, acquaintances many?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんへの先入観、絶対に、持たないよう、心がけております、医師として、当然のことですから。',en:"Yes. Patient-preconception — absolutely don't have, mindful, as doctor obvious.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療現場の混乱、原因を、取り除く改革、進めるべきですよね、先生、システム改善、本当に、必要だと感じます。',en:"Med-site chaos — cause-remove reform advance should, sensei, sys-improve really needed.",style:'Reflective close.'},
  ]},
  {id:'conv_06935',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through social research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、明治期、上方の経済発展、丁寧に、追っていますね、研究の深さ、感心しました、本当に。',en:"Sakura — paper, Meiji kamigata-econ dev, careful trace, research-depth admire really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。戦中、封印された文学作品、戦後の社会に、与えた影響、論じました、貴重な視点でした、本当に。',en:"Yes. Wartime — sealed lit-works, post-war soc-impact, argued, precious view really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'近代日本の軌跡、世界史の中で、よく、論じていますね、視野の広さ、評価できますよ、桜さん、本当に。',en:"Mod-Japan trajectory — within world-hist well-argued, view-breadth eval-able, Sakura really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。社会の骨格、戦前と戦後で、どう、変わったか、丁寧に、論じました、論文の柱でした、本当に。',en:"Yes. Soc backbone — pre-war vs post-war, how-changed, careful argued, paper-pillar really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史の通説、懐疑的に、扱う視点、これからも、続けて欲しいですね、桜さん、研究者の道、進んで欲しい。',en:"Hist orthodoxy — skeptical handle, continue want, Sakura, researcher-path advance want.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。名門の家柄、社会の階級構造に、与えた影響、扱いました、現代にも、繋がるテーマでした、本当に。',en:"Yes. Prestige-lineage — soc-class-structure impact, handled, modern-link theme really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'先入観を、排除した、新しい歴史記述、本当に、価値ある研究、ですね、これから、楽しみにしております。',en:"Without preconception — new hist-write, value-research really, future look-forward.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。記録から、神話的要素を、取り除く分析、本当に、苦労しました、でも、達成感、ありました、本当に。',en:"Yes. From record — myth-element remove analysis, hardship, achievement-feel really.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06936',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、ようやく、新店、たどり着いた感じよね、ここまで、本当に、よかったわよね、葵、頑張ったわね。',en:"Aoi — finally new-store arrived-feel, here, glad, hard-worked.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。最近、テレビで、サスペンスドラマ、はまってるのよ、私、夜、一人で、見ちゃうのよね、毎日。',en:"Yeah. Lately TV — susp-drama hooked, night-alone watch daily.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'お家の塀、彼が、新しく、塗り直してくれたの、色、変わって、本当に、お洒落になったわよ、見て。',en:"Home wall — bf newly repainted, color-changed, stylish, see.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'高級な乗用車、最近、街で、よく、見かけるよね、メイちゃん、葵、ちょっと、興味、出てきちゃった、ね。',en:"Lux car — lately town often-see, Mei, Aoi interest-came.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'新生のスタートを、感じる季節よね、春は、特に、葵で、いつも、ワクワクするのよ、私たち、来ると。',en:"Newborn-start feel season, spring esp, Aoi excite, us.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'お客様の写真、メイちゃん、捕らえるのが、上手いよね、SNS、いつも、評判いいよね、本当に、すごい。',en:"Cust-photo Mei capture-good, SNS reputation-good really amazing.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'昨日の映画、クライマックス、本当に、ドキドキしたよね、葵、私たち、感動しちゃったわね、二人で。',en:"Last film — climax really heart-pound, Aoi we moved, two.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'今日のメニュー、本当に、盛りだくさんね、お客様、選ぶの、楽しみよね、メイちゃんも、迷うかな?',en:"Today menu — really packed, cust choose-fun, Mei hesitate?",style:'Cheerful close.'},
  ]},
  {id:'conv_06937',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ようやく、お祖父ちゃんち、たどり着いたね、長かったね、ぼく、疲れちゃったよ、本当に。',en:"Mom — finally Grandpa's arrived, long, tired really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。サスペンス小説、お父さん、最近、よく、読んでるわよね、翔くん、知ってた、ママに、教えてくれたわよ。',en:"Yes. Susp novel — Dad lately often-read, Sho knew, Mom-told.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お庭の塀、お父さんと、ぼく、ペンキ、塗ったよ、ママ、見て、お洒落になったよ、本当に!',en:"Garden wall — Dad-me paint, Mom see, stylish really!",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お父さん、新しい乗用車、検討してるって、お祖父ちゃんに、相談してたわよ、翔くん、知ってた?',en:"Dad — new car studying, Grandpa-consulted, Sho knew?",style:'Curious.'},
    {speaker:'sho_child',jp:'いとこ、赤ちゃん、新生児って、いうんだよね、ママ、抱っこ、させてもらえるかな、楽しみだよ、ぼく。',en:"Cousin baby — newborn called, hold-permit?, fun, me.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'写真、ぱっと、その瞬間を、捕らえるの、ママ、上手なのよ、お父さんに、よく、言われるわよ、嬉しい。',en:"Photo — instantly moment-capture, Mom good, Dad-said, glad.",style:'Bright.'},
    {speaker:'sho_child',jp:'昨日見た映画、クライマックス、ぼく、本当に、ドキドキしたよ、ママ、覚えてる、家族で、見たやつ?',en:"Yesterday film — climax really heart-pound, Mom remember, family-watched?",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんの家、お料理、いつも、盛りだくさんね、翔くん、お腹いっぱい、なっちゃうわよね、いつも。',en:"Granny's — meals always packed, Sho stomach-full, always.",style:'Warm close.'},
  ]},
  {id:'conv_06938',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、ようやく、駅に、たどり着いたね、雨で、遅くなっちゃったよね、私たち、本当に、お疲れ様。',en:"Riku — finally stn arrived, rain-late, us really tired.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'うん。最近、サスペンス映画、見るのが、結構、好きになったぜ、桜、お前、興味、ある?',en:"Yeah. Lately — susp-film watching-like, Sakura you interest?",style:'Probe.'},
    {speaker:'sakura_teen',jp:'公園の塀、誰かが、ペンキで、いたずら描き、してたよ、リク、見た?悲しくなったよ、私、本当に。',en:"Park wall — someone graffiti-paint, Riku saw?, sad really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お父さんの会社の乗用車、結構、新しいの、増えてるって、聞いたぜ、桜、会社、好調なんだろうな。',en:"Dad-co cars — quite new-increasing heard, Sakura, co strong.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'新生女子バレー部の、入部、私、考えてるんだ、リク、応援してくれる?お願い、本当に。',en:"New-women volleyball, join, me considering, Riku, cheer?, please really.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'お前の写真、いい瞬間、捕らえるのが、本当に、上手いよな、桜、SNS、いつも、見てるぜ、本当に。',en:"Your photo — good moment-capture good, Sakura, SNS watching really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'青春のクライマックス、文化祭、もうすぐ、本気で、楽しみだよ、リク、お前と、たくさん、思い出、作ろうね。',en:"Youth climax — cult-fest soon, fun, Riku, lots-memory make.",style:'Animated.'},
    {speaker:'riku_teen',jp:'文化祭のプログラム、本当に、盛りだくさんで、毎年、ワクワクするよな、桜、お前と一緒に、楽しみたいぜ。',en:"Fest-prog packed, yearly excite, Sakura with you fun-want.",style:'Cheerful close.'},
  ]},
  {id:'conv_06939',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、ようやく、東京に、たどり着いた日のこと、覚えてる、ばあさん、本当に、嬉しかったよな、二人で。',en:"Youth — finally Tokyo arrived day, gran remember, glad really, two.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。サスペンスドラマ、若い頃、二人で、よく、見たわよね、覚えてる、あなた、ハマってたわよね。',en:"Yes. Susp-drama — youth, two often-watched, remember, dear hooked.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'庭の塀、若い頃、私、自分で、作ったよな、ばあさん、覚えてる?何度も、塗り直したぞ、本当に。',en:"Garden wall — youth, self-built, gran remember?, many-repaint really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'昔の乗用車、本当に、大きくて、燃費、悪かったわよね、若い頃の、思い出だわ、二人で、ドライブした。',en:"Old car — really big, fuel-bad, youth memory, two drove.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'孫が、新生児の頃、本当に、可愛かったわよな、ばあさん、覚えてる?私たち、感激したわよな、本当に。',en:"Grandkid newborn — really cute, gran remember?, moved really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃の写真、お祖父ちゃんが、よく、私を、撮らえてくれたわよね、覚えてる、あなた、嬉しかったわ、いつも。',en:"Youth photo — Grandpa often me-captured, remember, glad always.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'結婚式のクライマックス、本当に、感動的だったよな、ばあさん、覚えてる?私たち、皆の前で、誓ったよ、二人で。',en:"Wedding climax — moving, gran remember?, all-before pledged, two.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃の人生、本当に、盛りだくさんで、楽しかったわよね、あなた、お互いに、本当に、感謝してるわよ。',en:"Youth-life — packed fun, dear, mutually really grateful.",style:'Tender close.'},
  ]},
  {id:'conv_06940',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、新店、ようやく、夢、たどり着いた感じやな、本当に、よかったやんか、葵さん、応援してて、ええで。',en:"Aoi — new store, finally dream-arrived, glad, Aoi cheering.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。サスペンスドラマで、紹介された料理、ぜひ、メニューに、入れたいです、葵で、お客様、喜びそうですね。',en:"Yes. Susp-drama-intro dish — menu-include want, Aoi cust-glad.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'店の塀、ガーデニング風に、整えよか、葵さん、お洒落で、ええんちゃうか、ここの、雰囲気、合うで、絶対。',en:"Store wall — gardening-style organize, Aoi, stylish, fits-air def.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。配送用の乗用車、新しいの、検討、進めましょう、葵で、業務効率化、必要ですね、本当に、最近。',en:"Yes. Delivery car — new, study advance, in Aoi biz-eff needed lately.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'新生のスタッフ、若い人材、本気で、育てていこか、葵さん、料理人、伸ばすの、楽しみやで、本当に。',en:"New-staff young talent — seriously raise, Aoi, cook-grow fun really.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。料理の盛り付け、お客様の、心を、捕らえる工夫、必要ですよね、葵で、常に、研究、しています、最近。',en:"Yes. Plating — cust-heart capture-design needed, in Aoi research always lately.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'食事の最後、デザートのクライマックス、ええもの、出そや、葵さん、お客様、感動するで、絶対に、本当に。',en:"Meal-end dessert-climax — good-out, Aoi, cust move def really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。コース料理、本当に、盛りだくさんに、しましょう、葵で、お客様、満足してくださること、第一です、本当に。',en:"Yes. Course-cuisine — packed, in Aoi cust-satisfy first really.",style:'Warm close.'},
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

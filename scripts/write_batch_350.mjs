import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_350 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['捕まっ','のぼる','ウリ','難点','馬車','発熱','今ひとつ','苦い']
const B_T = ['いち早く','連ね','硬直','専任','クーポン','仕上がっ','大々的','各位']
const C_T = ['彼女ら','これぞ','海域','空洞','戦記','歯止め','鉱物','噴出']
const D_T = ['ジャングル','大谷','月日','レンタカー','横須賀','姓','細工','繁華']

const data = [
  // A
  {id:'conv_06961',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お外で、虫、捕まったんだよ、ぼく、可愛い、カマキリ、見つけたんだ、本当に、本当に!',en:"Mom — outside, bug caught, me, cute mantis found really!",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。お父さんが、階段をのぼる時、ちょっと、腰、痛そうだったわよ、翔くん、優しく、して、あげてね。',en:"Yes. Dad stairs-climb time — slightly back-hurt-look, Sho, kindly.",style:'Soft.'},
    {speaker:'sho_child',jp:'お祖父ちゃんの畑で、夏の、ウリ、たくさん、できたんだよ、ママ、お土産に、持って帰ろうね、絶対!',en:"Grandpa-farm — summer uri lots, Mom, souv take-home, absolute!",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お引越し、難点が、いくつか、あるのよね、翔くん、転校するの、ママも、ちょっと、心配なのよ、本当に。',en:"Move — difficulties several exist, Sho, transfer, Mom also-worry really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'絵本の中の、馬車、本当に、素敵だよね、ママ、王子様、出てくる場面、ぼく、好きなんだ、本当に、本当に。',en:"Picture-book carriage — lovely, Mom, prince-scene, like really really.",style:'Awe.'},
    {speaker:'yumiko_mom',jp:'昨日、ぼく、ちょっと、発熱したのよ、ママ、心配したわよ、薬、飲んで、元気になってくれて、嬉しい、本当に。',en:"Yesterday — slight fever, Mom worry, meds-taken, energetic, glad really.",style:'Tender.'},
    {speaker:'sho_child',jp:'昨日の宿題、今ひとつ、わかんなかったよ、ママ、手伝ってくれる?明日、提出だから、お願い、本当に。',en:"Yesterday homework — somewhat unclear, Mom help?, tomorrow submit, please really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'コーヒー、お父さん、苦いの、好きみたいよね、翔くんは、まだ、飲めないわよね、大人になってから、ね、楽しみね。',en:"Coffee — Dad bitter-like, Sho still-no, adult-when, fun.",style:'Warm close.'},
  ]},
  {id:'conv_06962',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、最近、テレビで、犯人、捕まったって、ニュースで、見たよね、安心したわよね、本当に、皆。',en:"Aoi — lately TV, perp caught, news-saw, relieved really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'うん。山にのぼる、彼の趣味、結構、本格的なのよね、メイちゃん、ご存知でしょ?装備、すごいのよ。',en:"Yeah. Mt-climb — bf hobby, serious, Mei knew?, equip amazing.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵のお店の、ウリ、本当に、手作りケーキよね、私、いつも、葵で、買って帰るわよ、本当に、お土産にね。',en:"Aoi store — sales-point hand-cake, always Aoi-buy-home, souv really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'新店舗計画、難点も、いくつか、出てきてるのよ、メイちゃん、葵としても、悩んでるの、本当に、相談、乗ってね。',en:"New-store plan — difficulties several emerging, Mei, as Aoi worry, consult.",style:'Vulnerable.'},
    {speaker:'mei_romantic',jp:'結婚式に、白馬の馬車、葵、私、憧れちゃうのよ、本当に、夢ね、葵、笑わないでね、本当に、夢、見るの。',en:"Wedding — white-horse carriage, Aoi, dream-yearn, Aoi don't-laugh really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'昨日、お客様、お子様、発熱したって、聞いて、ちょっと、心配だったわよ、葵で、お見舞い、行こうかしらね。',en:"Yesterday — cust kid feverish heard, slight-worry, Aoi visit?",style:'Concerned.'},
    {speaker:'mei_romantic',jp:'最近のドラマ、今ひとつ、ストーリーが、わからないのよ、葵、私、ついて、いけてないんだ、本当に。',en:"Recent drama — somewhat story-unclear, Aoi, can't-follow really.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'葵のブレンドコーヒー、ちょっと、苦いから、メイちゃん、好きじゃない、かもね、別のお茶、出すわね、いつも。',en:"Aoi blend — bit bitter, Mei, may-not-like, other-tea out, always.",style:'Cheerful close.'},
  ]},
  {id:'conv_06963',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、テスト、お前、いいスコア、捕まったよね、本当に、すごいよね、リク、努力、すごいよ、いつも。',en:"Riku — test, good score captured, amazing, effort amazing always.",style:'Praising teen.'},
    {speaker:'riku_teen',jp:'うん。富士山にのぼる、夏休み、家族で、計画してるんだ、桜、お前も、いつか、行きたいよな、絶対。',en:"Yeah. Mt-Fuji climb — summer, family plan, Sakura, sometime go-want def.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'うちのクラスの、ウリ、文化祭の出し物、結構、毎年、評判いいのよね、リク、私たち、頑張ろうね、本当に。',en:"Our class — sales-point cult-fest acts, yearly reputation good, Riku try really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前の進路選択、難点、何だ?俺、相談、乗るぜ、桜、お前、悩んでること、教えてくれる、いつでも、本当に。',en:"Your career-choice — difficulty what?, consult, Sakura, worry-tell anytime really.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'歴史の授業で、昔の馬車、面白かったよね、リク、昔の人、不思議な生活、してたね、本当に、興味深い、現代と違うね。',en:"Hist class — old-carriage fun, Riku, old-people mysterious-life, intriguing different.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'昨日、俺、発熱で、学校、休んだぜ、桜、お前、心配して、メッセージ、くれてさ、ありがとうな、本当に、嬉しい。',en:"Yesterday — me, fever school-skip, Sakura worry-msg, thanks really, glad.",style:'Tender.'},
    {speaker:'sakura_teen',jp:'最近の音楽、今ひとつ、ハマれないんだよね、リク、お前、おすすめ、ある?教えて、新しいの、聞きたい。',en:"Recent music — somewhat not-hooked, Riku, recommend?, tell, new-listen.",style:'Curious.'},
    {speaker:'riku_teen',jp:'苦い味のお菓子、お前、平気だっけ?俺、ちょっと、苦手なんだ、桜、お前、強いよな、味覚、本当に、すごい。',en:"Bitter sweets — you fine?, me bit bad, Sakura strong, taste amazing.",style:'Wry close.'},
  ]},
  {id:'conv_06964',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、私、お祖母ちゃんに、よく、悪さして、捕まったよな、ばあさん、覚えてる、笑えるよな、今、考えると。',en:"Youth — me, Granny mischief-caught, gran remember, laughs now-think.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。階段をのぼる時、最近、本当に、しんどくなってきたわよね、あなた、お互いに、ゆっくり、進みましょうね。',en:"Yes. Stairs-climb time — lately really tiring, dear mutually slow.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お祖父ちゃんち、夏の、ウリ、たくさん、収穫したよな、ばあさん、覚えてる、私たち、若い頃、本当に、楽しかった、二人で。',en:"Grandpa's — summer uri lots-harvested, gran remember, youth fun two.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、お年だから、運動の難点、増えてきたわよね、あなた、お互いに、健康、第一にしましょう、本当に。',en:"Grandpa-aged — exercise-difficulty increased, mutually health-first really.",style:'Concerned.'},
    {speaker:'hiroshi_elder',jp:'若い頃、結婚式で、馬車に乗ってる人たち、見て、羨ましかったわよな、ばあさん、本当に、覚えてる、私たちも?',en:"Youth — wedding carriage-riding envied, gran remember, also us?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'孫が、また、発熱したって、息子から、電話、あったわよ、あなた、心配ね、お見舞い、行きたいわね、本当に。',en:"Grandkid again feverish — son-phone, dear worry, visit-want really.",style:'Concerned.'},
    {speaker:'hiroshi_elder',jp:'最近のテレビ、今ひとつ、面白くないわよな、ばあさん、本当に、変わってきたわよな、番組の質、変わったわね。',en:"Recent TV — somewhat unfun, gran, changed, prog-quality changed.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃんは、ブラックコーヒーの、苦い味、好きよね、私、まだ、苦手だわ、覚えてる?私たち、味覚、違うわよね。',en:"Grandpa — black-coffee bitter-like, me still-bad, remember, taste-differ.",style:'Tender close.'},
  ]},
  {id:'conv_06965',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、お友達、虫、捕まったって、聞いたわよ、本当に、面白い遊び、最近、子供たちの間で、流行ってるのね。',en:"Sho — friend bug caught heard, fun-play, kids trending.",style:'Curious.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、山にのぼる時、自分で、お弁当、持って、行ったんだよ、自分で、用意したよ、ぼく、本当に。',en:"Mei-sis — me, mt-climb time, self-lunch took, self-prep, really.",style:'Proud child.'},
    {speaker:'mei_romantic',jp:'メイ姉さんの愛犬の、ウリ、フワフワの、しっぽなのよ、翔くん、覚えてる?可愛いわよね、ぽちちゃん、本当に。',en:"Mei-sis dog — sales-point fluffy tail, Sho remember?, cute Pochi really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼくの、難点って、なんだろうね?お母さんに、聞いてみたいよ、自分のこと、もっと、知りたいんだ。',en:"Mei-sis — my difficulty what?, Mom-ask-want, self-know more.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'昔のヨーロッパで、馬車で、お出かけ、してたんだって、翔くん、メイ姉さん、本で、読んだよ、本当に、すごいわよね。',en:"Old Europe — carriage-out, Sho, Mei-sis book-read, amazing.",style:'Animated.'},
    {speaker:'sho_child',jp:'昨日、ぼく、発熱で、メイ姉さんとの、約束、守れなかったんだよ、ごめんね、本当に、悲しかったよ、ぼく、メイ姉さん。',en:"Yesterday — me fever, Mei-sis promise broke, sorry, sad really.",style:'Apologetic.'},
    {speaker:'mei_romantic',jp:'今度のお出かけ、今ひとつ、決まってないけど、翔くん、ぜひ、付き合ってね、メイ姉さん、お願いするわよ、本当に。',en:"Next outing — somewhat undecided, Sho def-accompany, Mei-sis ask really.",style:'Soft.'},
    {speaker:'sho_child',jp:'チョコレート、苦い味の、ダーク、メイ姉さん、好きなんだよね?ぼくは、まだ、ミルクの方が、好きなんだ、メイ姉さん。',en:"Choco — bitter dark Mei-sis-like?, me still milk-like, Mei-sis.",style:'Reflective close.'},
  ]},

  // B
  {id:'conv_06966',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'業界の変化、いち早く、察知しろ、当社、後手に、回らないように、絶対だ、本当に、頼むぞ、社員、全員に。',en:"Industry-change — earliest detect, our co don't-fall-behind absolute, ask all-staff.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員代表、新しい役員に、名を、連ねております、本当に、皆、誇りに、感じてくれているようです、現場では。',en:"Yes. Staff-rep — new-exec name-listed, all proud-feel, on-site.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'前例主義、硬直化した、組織は、ダメだ、若手の新しい発想、積極的に、取り入れろ、本当に、必要なことだ、絶対。',en:"Precedence — rigid org bad, youth-new idea actively-take, vital absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。専任の担当者、本件、配置いたしました、対応、迅速化、図れる体制、整っております、本当に、安心です。',en:"Yes. Dedicated rep — this matter placed, response-swift system ready, reassuring.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お得意様向け、クーポン、来月、発行する予定だ、販促、本気で、強化しろ、年末商戦、勝負だぞ、本当に。',en:"VIP — coupon, next-month issue plan, promo serious-strengthen, year-end battle.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新製品、ようやく、仕上がってまいりました、社長、お披露目、楽しみにしていてください、自信作です、本当に。',en:"Yes. New product — finally finishing, pres, reveal fun-await, confident-piece really.",style:'Cheerful.'},
    {speaker:'hiroshi_boss',jp:'発表、大々的に、行え、メディアにも、しっかり、アピールしろ、当社、本気度、見せていくぞ、絶対だ、本当に、頼んだ。',en:"Launch — grand-do, media-appeal, our co seriousness show absolute, ask.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お得意様各位、ご案内、丁寧に、発送いたします、おもてなしの心、徹底中、本当に、葵で、最大限の、配慮、しています。',en:"Yes. VIP-each — invite carefully send, omotenashi thorough, max-consider.",style:'Close.'},
  ]},
  {id:'conv_06967',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'競合の動き、いち早く、把握しないとね、社員にも、情報収集、徹底させましょう、本当に、急務、本当に、必要よ、最近。',en:"Rival move — earliest grasp must, staff info-gather thorough, urgent really lately.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。新事業の関係者、名を、連ねた、リスト、できております、来週、共有いたしますね、本当に、皆、力を、合わせて。',en:"Yes. New-biz rels — names-listed, list ready, next-week share, all together-strength.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'硬直した上下関係、変えていきましょうね、若手も、自由に、発言できる職場、目指していきましょう、本当に、楽しみよ。',en:"Rigid hierarchy — change, youth free-speak workplace aim, fun really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。専任の広報担当、新人から、抜擢、検討中です、メディア対応、強化、必要ですね、本当に、急務なんです。',en:"Yes. Dedicated PR — newbie-promote studying, media-resp strengthen needed urgent.",style:'Update.'},
    {speaker:'yuki_office',jp:'お得意様への、特別クーポン、新年度、用意していきましょうね、お客様、本当に、楽しみにされていますよ、いつも。',en:"VIP special-coupon — new-fy prep, cust fun-await always.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。販促資料、ようやく、仕上がってまいりました、本当に、お時間、いただきましたよね、感謝しております、ご協力に。',en:"Yes. Promo-mat finally finishing, time-took, gratitude coop.",style:'Cheerful.'},
    {speaker:'yuki_office',jp:'広告、もう少し、大々的に、打ち出していきましょうね、認知度、上げていきたいわ、業界、勝ち抜くわよ、本当に。',en:"Ad — more grand-launch, awareness-raise want, industry-survive really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員各位、勤怠管理、新しい仕組み、ご案内、する予定です、皆様、ご協力、本当に、お願いいたします、必ず。',en:"Yes. Staff-each — attendance, new sys announce plan, your-coop please, definitely.",style:'Close.'},
  ]},
  {id:'conv_06968',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、論文、いち早く、提出する習慣、つけろ、評価、変わってくるからな、本当に、若いうちに、覚えておけ、絶対。',en:"Ren — paper, earliest submit habit, eval changes, youth-remember absolute.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。学会発表者、名を、連ねる中で、僕も、頑張りたいと思っております、先生方、お力添え、ありがたいです、本当に。',en:"Yes. Conf-presenters — names-listed, also try-want, prof-help grateful really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究、硬直した、姿勢では、進歩、ないぞ、柔軟に、考えろ、若手の、強み、活かせ、絶対に、頑張れ、本当に、頼むぞ。',en:"Research — rigid stance no-progress, flex-think, youth-strength utilize, ask really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究室、専任の補佐、二名、雇っております、本当に、助かっております、効率化、進んでおります、最近。',en:"Yes. Lab dedicated-asst 2 hired, helped really, eff advancing lately.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'学会のクーポン、参加費の割引、君も、活用しろ、研究費、効率的に、使うこと、覚えておけ、本当に、賢くな。',en:"Conf coupon — fee-discount, also utilize, research-fund eff-use, smart-remember.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文、ようやく、仕上がってまいりました、先生、本当に、お時間、いただきまして、ありがとうございました、感謝です。',en:"Yes. Paper finally finishing, prof, time-grateful really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'学会で、大々的に、発表する機会、若いうちに、掴め、絶対に、君の財産になるからな、勇気を、持って、いけ、本当に、絶対だ。',en:"Conf — grand-pres chance, youth-grab absolute, your asset, courage absolute.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先輩各位、ご指導、本当に、ありがとうございました、これからも、よろしく、お願いいたします、頑張ります、本当に。',en:"Yes. Senpai-each — guide, thanks really, future please, try really.",style:'Earnest close.'},
  ]},
  {id:'conv_06969',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、犯人の情報、いち早く、つかむことができました、本当に、市民の皆様の、ご協力、ありがたく、思っております、本当に。',en:"Police — perp-info earliest grasped, citizen-coop grateful really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。社内、警察関係者、名を、連ねる、危機対応チーム、立ち上げております、本当に、頼もしいです、ご縁、ありがたく。',en:"Yes. Internal police-related names-listed, crisis-team launched, reassuring, tie grateful.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察組織、硬直化、避けるよう、改革、進めております、本当に、現代に、合わせた、組織、目指しております、最近、特に。',en:"Police org — rigid-avoid reform advancing, modern-fit org aim, lately esp.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社、警察対応の、専任窓口、設置いたしました、迅速な、連携、可能になっております、本当に、便利、最近、特に。',en:"Yes. Our co — police-resp dedicated window set, swift coord able, convenient lately esp.",style:'Update.'},
    {speaker:'takeda_officer',jp:'防犯講座、クーポン、配布する予定です、市民の皆様、ご活用、いただきたく、お願い、申し上げます、本当に、ご協力を。',en:"Crime-prev seminar — coupon distrib plan, citizens utilize, ask really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。報告書、ようやく、仕上がってまいりました、警察様に、提出させていただきます、本当に、ありがとうございました、お世話に。',en:"Yes. Report finally finishing, police-submit, thanks really, care.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'防犯キャンペーン、大々的に、展開させていただいております、本当に、企業様の、ご協力、ありがたく、感謝しております、いつも。',en:"Crime-prev campaign — grand-deploy, corp-coop grateful, gratitude always.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察関係者各位、新年のご挨拶、社長から、お送りする予定です、本当に、お世話に、なっておりますので、心からの感謝、絶対。',en:"Yes. Police-related each — NY greeting, pres-send plan, care, heart-thanks absolute.",style:'Close.'},
  ]},
  {id:'conv_06970',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、私、業界の変化、いち早く、察知してきたぞ、お前にも、見習って欲しい、本当に、頼むぞ、絶対に、これだけは。',en:"Founding — me, industry-change earliest-detected, also emulate-want, ask absolute.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。創業時、社員数名、お父さんと共に、名を、連ねていたって、お母さんから、聞いております、本当に、すごい歴史、誇りです。',en:"Yes. Founding — staff few, with-Dad names-listed, Mom-heard, amazing hist, proud.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'創業精神、硬直化、絶対、させるな、お前の代でも、若手の声、しっかり、聞け、本当に、頼むぞ、これは、絶対に、絶対だ。',en:"Founding-spirit absolute don't-rigid, your-era too, youth-voice properly listen ask absolute.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。専任の補佐、社長業務、お父さんの代から、続けて、頼っております、本当に、ありがたいですね、伝統、続けます、絶対に。',en:"Yes. Dedicated asst — pres-biz since Dad-era continued, grateful, trad continue absolute.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お得意様クーポン、私の代から、続いている伝統、絶対、続けていけよ、お父さんから、頼むぞ、本当に、頼んだ、これだけは。',en:"VIP coupon — since my era tradition, absolute continue, from Dad ask really.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業五十周年記念誌、ようやく、仕上がってまいりました、お父さんに、お見せしたいです、本当に、見て、いただきたい、感想を。',en:"Yes. 50-anniv memo-mag finally finishing, Dad-show want, feedback want.",style:'Cheerful.'},
    {speaker:'hiroshi_elder',jp:'創業祭、大々的に、開催すること、お父さんとして、嬉しいぞ、お前、本当に、頑張ってくれて、感謝しているよ、本当に。',en:"Corp-fest — grand-hold, as Dad glad, hard-worked thanks really.",style:'Tender.'},
    {speaker:'hiroshi_boss',jp:'はい。創業者の親族各位、ご招待状、私から、心を込めて、お送りいたします、本当に、お父さんの代から、頼んでいきますね、絶対に、必ず。',en:"Yes. Founder-relatives each — invite-letter, heart-include send, since Dad-era ask absolute.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06971',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、女性の活動家、彼女らの果たした役割、丁寧に、論じていますね、本当に、印象的な、研究でした、本当に、立派です。',en:"Ren — paper, women-activists, their played-role careful argued, striking research splendid really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。これぞ日本の歴史、と、思える人物、何人も、研究対象に、しました、本当に、深い、研究、できました、私、感謝しております。',en:"Yes. This-is Japan-hist think people, many research-targeted, deep research really, gratitude.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時の海域、被害規模、丁寧に、扱っていますね、桜さんの、論文、本当に、印象的な、視点でした、本当に、評価できます。',en:"Wartime sea-area — damage-scale carefully handled, Sakura paper striking view, eval-able.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。経済の空洞化、戦後復興期に、何度か、起きていますね、論文の重要な、テーマでした、複雑な、現象、論じました、丁寧に。',en:"Yes. Econ-hollowing — post-war recov, several occurred, paper-key theme, complex argued.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦記文学、戦後の人々の、心の支えになっていましたね、論文で、しっかり、論じています、本当に、感動的な、内容でした、私、読んで。',en:"War-record lit — post-war heart-support, paper properly argued, moving content, reading.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。社会変化に、歯止め、かけられなかった時代、論文で、扱いました、現代にも、繋がる、課題ですね、本当に、興味深い、研究でした。',en:"Yes. Soc-change — no-brake era, paper-handled, modern-link issue, intriguing research really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地質学的視点、地下の鉱物資源、論文の中で、扱っていますね、本当に、視野の広い、研究でした、桜さん、評価、本当に、できますよ。',en:"Geol view — underground mineral-resources, in-paper handled, view-wide research, Sakura eval really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。火山の噴出物、地域社会への影響、論文で、丁寧に、論じました、本当に、興味深い、研究、できました、感謝しております、本当に。',en:"Yes. Volcanic-eruption — local-soc impact, paper careful argued, intriguing research, gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_06972',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、女性の目撃者、彼女らの証言、本当に、貴重な、捜査情報、いただきました、警察、本当に、感謝、しております、皆様に。',en:"Case — female witnesses, their testimony, precious inv-info received, police gratitude really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'これぞ、警察の本気、と、市民、感じているのではないでしょうか、本件、本当に、丁寧に、対応されていますね、警察、本当に、立派です。',en:"This-is police-serious — citizen feeling?, case careful handled, police splendid really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、海域を、移動していた、形跡、ございます、海上保安庁とも、連携、強めております、本当に、複雑な、捜査です、本件。',en:"Yes. Suspect — sea-area moved, trace, JCG-link strengthening, complex inv really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地下の空洞、犯罪に、悪用された事例、過去にも、ありましたよね、警察、警戒、強めていらっしゃいますね、本当に、知識、すごいです。',en:"Underground cavity — crime-misused past existed, police-alert strengthen, knowledge amazing really.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、過去の戦記、参考にしている、ような、行動、見られておりました、本当に、独特な、心理プロファイル、複雑な事案ですね、本件。',en:"Yes. Suspect — past war-record reference-like, action seen, unique profile, complex case really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'犯罪の連鎖、歯止め、かけるために、警察、地域、本当に、努力していらっしゃいますね、市民として、感謝、しなければ、本当に。',en:"Crime-chain — brake-apply, police local effort really, as citizen must-thank really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。鉱物の盗難、近年、増えております、本件、関連、ある可能性、捜査、続けております、本当に、巧妙な、犯罪、増えています、最近。',en:"Yes. Mineral-theft — recently increase, case-related possibility, inv continuing, sophist crime increase lately.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者から、感情、噴出するように、出てきたって、聞きました、警察、心の、ケアも、提供されていますよね、本当に、立派です、頭が下がります。',en:"Victim — emotion erupt-like came, police soul-care also-provide, splendid humbled.",style:'Reflective close.'},
  ]},
  {id:'conv_06973',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、女性医師、彼女らの活躍、本当に、目覚ましいですね、医療の現場、本当に、変わってきました、最近、よい意味で、本当に。',en:"Ren — female doctors, their activity remarkable, med-site really-changed lately, good-meaning really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'これぞ、現代医療の進歩、と、感じる場面、最近、本当に、多いですよね、先生、新しい技術、楽しみですね、患者さんに、希望、与えますね。',en:"This-is modern-med progress, scenes lately many, sensei new-tech fun, patient-hope-give.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。離島の海域、医療アクセス、課題ですね、本当に、解決、急務、感じております、先生方、努力しております、現場、本当に、頑張っています。',en:"Yes. Outer-island sea-area — med-access issue, resolve urgent feel, sensei effort, site hard.",style:'Patient.'},
    {speaker:'ren_uni',jp:'空洞化する、地方医療、本当に、心配な、現象ですよね、先生、社会、もっと、関心、向けて欲しいですね、本当に、深刻な、問題ですよね。',en:"Hollowing local-med — worry phenomenon, sensei, soc-more interest-direct want, serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。過去の戦記、医療を、変える契機、いくつかありました、本当に、歴史、深いですね、医療の進歩、戦争から、皮肉なことに、本当に。',en:"Yes. Past war-record — med-change opportunities several, hist deep, med-progress war-from ironic.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'病気の進行に、歯止め、かける新薬、開発、本当に、期待されていますね、先生、本当に、医療界、未来、明るいですよね、希望、ありますね。',en:"Disease-progress brake-apply new drug, dev expected, sensei, med-future bright really, hope.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。微量鉱物、健康への影響、研究、進んでおります、本当に、興味深い、分野ですよね、最新の知見、伝えていきたいですね、市民に。',en:"Yes. Trace-mineral — health-impact research advancing, intriguing field, latest-knowledge convey want, citizen.",style:'Informative.'},
    {speaker:'ren_uni',jp:'感染症、再び、噴出するように、流行することへの、警戒、必要ですよね、先生、本当に、油断、できない、時代ですよね、医療、最前線、本当に、戦いですよね。',en:"Infect — again erupt-like trending alert needed, sensei, can't-relax era, med-frontline battle.",style:'Reflective close.'},
  ]},
  {id:'conv_06974',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'女性社員、彼女ら、本当に、当社の、力強い、原動力になっているな、社員、男女、平等に、評価しろ、絶対に、本当に、頼むぞ、これは、当然のことだ。',en:"Female staff — they, our co powerful drive, eval equally absolute, ask, obvious.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。これぞ、当社の伝統、と、社員に、誇りに、思ってもらえる文化、引き継いでまいります、本当に、お父さんから、頼まれた、伝統です、絶対に。',en:"Yes. This-is our-tradition, staff-proud culture inherit, from-Dad asked tradition absolute.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'海域での、海運事業、新たな、市場として、検討する価値、本当に、ある、攻めの姿勢、見せていけ、本当に、頼むぞ、絶対に、急務だ。',en:"Sea-area shipping biz — new market, study value exist, attack stance, ask absolute urgent.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。古い慣習の空洞化、社内、最近、感じております、新しい血、入れていきたい、社長、社員、活性化したいです、本当に、絶対に。',en:"Yes. Old-customs hollowing — lately feel, new-blood input want, pres, staff-activate want absolute.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'創業者の戦記、社員教育で、必読書、扱っていけ、若手にも、創業精神、伝えていけ、絶対だ、本当に、頼んだ、絶対に、必ずだ。',en:"Founder war-record — staff-edu must-read, youth founding-spirit convey absolute, ask absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。コスト増加、歯止め、かける、対策、検討しております、本当に、急務、感じております、社員にも、ご協力、お願いしないと、本当に。',en:"Yes. Cost-rise brake-apply measures studying, urgent feel, staff-coop must really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'鉱物資源の新規取引、新興国と、進めていけ、当社、グローバル戦略の、要だ、絶対に、急げ、本当に、頼んだ、これだけは、絶対に。',en:"Mineral-resource new-trade — emerging-country advance, our global-strat key absolute hurry, ask absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員のアイデア、噴出するように、出てきております、社内、本当に、活気、出ております、社長、感謝しております、本当に、皆、頑張ってくれています。',en:"Yes. Staff-ideas — erupt-like coming, internal energy out, pres gratitude, all hard-work.",style:'Close.'},
  ]},
  {id:'conv_06975',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through social research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、戦時下の女性たち、彼女らの強さ、丁寧に、論じていますね、本当に、印象的な、視点でした、桜さん、本当に、感動しました、私。',en:"Sakura — paper, wartime women, their strength carefully argued, striking view, moved really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。これぞ、戦中の、人々の、生きざま、と、感じる証言、何人も、いただきました、本当に、貴重な、研究、できました、感謝しております。',en:"Yes. This-is wartime people life-way, feel testimony many-received, precious research, gratitude.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦時下の、海域での悲劇、論文で、丁寧に、扱われていますね、本当に、印象的な、章でした、桜さん、本当に、読む価値の、ある、研究でした。',en:"Wartime sea-area tragedy — paper carefully handled, striking ch, Sakura read-value research really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。地方社会の空洞化、戦中、戦後、繰り返されてきたんですね、論文で、扱いました、現代にも、深く、繋がる、テーマでした、本当に、興味深い。',en:"Yes. Local-soc hollowing — war-during-after repeated, paper-handled, modern-deep-link, intriguing really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦記資料、新しい視点で、読み解いていますね、論文で、本当に、独創的な、研究、桜さん、本当に、立派です、これからも、続けて欲しいです、研究。',en:"War-record archive — new view-read, paper, original research, Sakura splendid, continue research want.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。当時の暴力に、歯止め、かけられなかった社会、論文で、論じました、現代の、教訓に、なる視点、含めて、書きました、本当に、深い、研究でした。',en:"Yes. Era violence — no-brake society, paper-argued, modern-lesson view included, deep research really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時下の鉱物採掘、強制労働の歴史、論文で、丁寧に、扱いましたね、本当に、深い研究、桜さん、人権意識、本当に、感じられる、論文でした。',en:"Wartime mineral-mining — forced-labor hist, paper careful handled, deep research, Sakura human-rights felt paper.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。社会の怒りが、噴出するように、出てきた時代、論文で、論じました、本当に、興味深い、転換点でしたね、本当に、深い、研究、できました、感謝です。',en:"Yes. Soc anger — erupt-like emerged era, paper-argued, intriguing turning-point, deep research, gratitude.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06976',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、テレビで、ジャングル探検の番組、見たことある?私、最近、はまっちゃって、毎日、見てるのよ、本当に、面白いの、本当に。',en:"Aoi — TV jungle-explore prog, seen?, lately hooked, daily-watch, fun really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。野球の大谷選手、本当に、すごいよね、メイちゃん、世界中、活躍してて、葵で、お客様、よく、話題にしてるよ、本当に。',en:"Yeah. Baseball Otani — amazing, Mei, worldwide-active, in Aoi cust often-topic really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵と、出会ってから、もう、随分、月日、経ったよね、本当に、長い間の、友達、ありがたいわよね、私、感謝してる、本当に、ずっと。',en:"With Aoi — quite long, time-passed, long-friend grateful, gratitude really always.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'夏休み、家族で、レンタカー、借りて、ドライブ旅行、行く予定なの、葵で、メイちゃんも、機会あったら、一緒に、行きたいよね。',en:"Summer — family rent-car, drive-trip plan, Aoi, Mei opportunity together-go-want.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'横須賀、自衛隊の艦船、見学できるって、聞いたよ、葵、興味、あるかしらね、一緒に、行ってみる?本当に、面白そうだよ、絶対。',en:"Yokosuka — JSDF ships visit-able heard, Aoi interest?, together go-try?, fun def.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'結婚すると、私、姓が、変わるのよね、ちょっと、寂しい気持ち、あるわよ、葵で、新しい姓に、慣れるまで、時間、かかりそうだね。',en:"Marry — surname-changes, slight-lonely-feel exist, Aoi new-surname accustom-until, time-take.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'お土産屋さんで、伝統工芸の、細工物、買ったよ、葵、見て、本当に、繊細な、作品、職人さんの技、すごいよね、本当に。',en:"Souv-shop — trad-craft carving bought, Aoi see, delicate work, artisan-skill amazing really.",style:'Awe.'},
    {speaker:'aoi_barista',jp:'最近、繁華街、活気、戻ってきたよね、葵、お店、また、賑わってきたわよ、本当に、嬉しいわよ、これから、頑張りたいね、私、一緒に。',en:"Lately downtown — energy returning, Aoi store-busy, glad really, future-try want, together.",style:'Bright close.'},
  ]},
  {id:'conv_06977',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、図鑑で、ジャングルの動物、見てたよ、ぼく、すごいなって、思ったんだ、本当に、ライオン、虎、いっぱい、いるんだね、本当に。',en:"Mom — encyclo, jungle-animals watched, amazing, lion-tiger many, really.",style:'Awe child.'},
    {speaker:'yumiko_mom',jp:'うん。大谷選手の試合、お父さんと、夜中まで、見てたわね、翔くん、興奮、すごかったわよね、本当に、楽しかったよね、家族で、応援。',en:"Yes. Otani game — with Dad late-watched, Sho excite, fun family-cheer.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママと、お祭り、行ってから、もう、月日、経ったね、また、行きたいよ、ぼく、今度の夏、絶対、行こうね、ママ、約束しようね。',en:"With Mom fest-went — time-passed, again-go-want, this-summer absolute, promise.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'夏休み、お父さんが、レンタカー、予約してくれたわよ、翔くん、家族旅行、楽しみね、本当に、わくわくするわよね、私たち、皆。',en:"Summer — Dad rent-car booked, Sho family-trip fun, excite all-us.",style:'Cheerful.'},
    {speaker:'sho_child',jp:'横須賀の、お祖父ちゃんち、行きたいよ、ママ、いつ、行く予定なの?ぼく、本当に、楽しみだよ、ね、お母さん、教えて、いつ?',en:"Yokosuka Grandpa's — go-want, when plan?, fun really, when?",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お母さんの姓、結婚で、変わったのよ、翔くん、知ってた、おじいちゃんと、おばあちゃんの姓は、違うのよ、お祖父ちゃんの方の姓だわ。',en:"Mom surname — marriage-changed, Sho knew?, Grandparents differ, Grandpa-side.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お祖父ちゃんが、細工で、おもちゃ、作ってくれたんだよ、ママ、見て、本当に、すごいよね、お祖父ちゃん、本当に、手先、器用なんだ。',en:"Grandpa carving toy made, Mom see, amazing, Grandpa-hand dexterous really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'繁華街、家族で、お買い物、また、行きましょうね、翔くん、お父さんも、たまの息抜きで、行きたがってるわよ、本当に、楽しみね、皆で。',en:"Downtown — family shopping again-go, Sho, Dad occasional break-go-want, fun all.",style:'Warm close.'},
  ]},
  {id:'conv_06978',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、ジャングルクルーズの動画、見たことある?私、最近、よく、見てるんだよ、本当に、面白いの、リクも、見てみてね、絶対。',en:"Riku — jungle-cruise video seen?, lately often-watch, fun really, Riku see, absolute.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。大谷選手のサイン、お父さん、欲しがってるんだぜ、桜、お前、ファンだろ、本当に、すごい選手だよな、世界、本当に、活躍。',en:"Yeah. Otani sign — Dad-wants, Sakura, fan?, amazing, world really-active.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'リクと、知り合ってから、もう、結構、月日、経ったよね、本当に、長い付き合いだよね、私、嬉しいよ、ずっと、お友達、続いていて。',en:"With Riku met — quite, time-passed, long-friendship, glad, friends continued.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'夏休み、家族で、レンタカー、借りて、旅行に行くって、お父さん、計画してくれてるよ、桜、お前のところも、家族旅行?',en:"Summer — family rent-car trip-plan, Dad, Sakura, your-place family-trip too?",style:'Curious.'},
    {speaker:'sakura_teen',jp:'横須賀の、いとこ、夏に、遊びに来るって、聞いたよ、リク、紹介できるかな、絶対、仲良くなれそうだよね、本当に、楽しみ。',en:"Yokosuka cousin — summer-visit heard, Riku, intro-able?, def friends-be-likely, fun really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'お前の姓、結構、珍しいんだよな、桜、由来とか、聞いたこと、あるか?俺、ちょっと、興味、ある、本当に、面白い、家系図、ありそうだよな。',en:"Your surname — quite rare, Sakura, origin heard?, interest, family-tree-likely interesting.",style:'Probe.'},
    {speaker:'sakura_teen',jp:'美術部、細工の作品、文化祭、出すんだよ、リク、見にきてね、本当に、頑張ってるんだよ、私、絶対、感動するから、ね、楽しみ、本当に。',en:"Art-club — carving-work cult-fest out, Riku see-come, hard-work, def moved, fun really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'放課後、繁華街、皆で、行こうぜ、桜、新しいお店、行ってみたいんだ、お前も、付き合ってくれる?本当に、楽しみだよな、絶対。',en:"Post-class — downtown all go, Sakura new-shop go-want, accompany?, fun absolute.",style:'Eager close.'},
  ]},
  {id:'conv_06979',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、テレビで、ジャングルの探検番組、本当に、夢中になって、見たよな、ばあさん、覚えてる?あの番組、家族で、観たよな。',en:"Youth — TV jungle-explore prog, dreamily watched, gran remember?, family-watched.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。最近の野球選手、大谷さんって、本当に、すごい選手ね、テレビで、活躍、見るたびに、ワクワクするわよね、あなたも、好きでしょ?',en:"Yes. Recent player — Otani amazing, TV-active see-each, excite, also-like?",style:'Animated.'},
    {speaker:'hiroshi_elder',jp:'結婚してから、もう、相当な、月日、経ったよな、ばあさん、本当に、ありがたいよ、ここまで、共に、過ごしてくれて、感謝、しないとな。',en:"Married-since — quite, time-passed, gran, grateful really, together-spent, must-thank.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、二人で、レンタカー、借りて、旅行、よく、行ったわよね、覚えてる、あなた、楽しい、思い出ね、本当に、また、行きたいね。',en:"Youth — two rent-car trip often-went, remember, fun memory, again-go-want.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、横須賀、出張で、行ったわよな、ばあさん、覚えてる、あの頃の私、本当に、忙しかったわよな、家族、寂しい思い、させちゃったよな。',en:"Youth — Yokosuka biz-trip went, gran remember?, that-era me busy, family-lonely.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お父さんの姓を、新しく、いただいて、ちょっと、慣れるのに、時間、かかったわよね、私、覚えてる、不思議な気持ちだったわ、新しい姓。',en:"Youth — Dad-surname newly-received, accustom-time-took, remember, mysterious-feel new-surname.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、私、木の細工、結構、得意だったわよな、ばあさん、覚えてる?家族に、いろいろ、作ってあげたよな、楽しかったわよな、本当に。',en:"Youth — me wood-carving good, gran remember?, family-various-made, fun really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'昔の繁華街、本当に、賑やかだったわよね、覚えてる、あなた、夜店、いっぱい、出ていたのよ、夏祭り、楽しかったわね、二人で、よく、行ったね。',en:"Old downtown — really busy, remember, night-stalls many, fest fun two often-went.",style:'Tender close.'},
  ]},
  {id:'conv_06980',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、ジャングル風の店内装飾、子供向けイベントで、試してみよか、本気で、葵さん、お客さん、喜びそうやで、絶対、本当に、楽しみやで。',en:"Aoi — jungle-style interior, kid-event try?, Aoi cust-glad def, fun really.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。大谷選手応援グッズ、葵で、扱ってみたいですね、お客様、本当に、好評、いただけそうですね、絶対、人気、出ますよ、葵で。',en:"Yes. Otani goods — Aoi handle want, cust favorable likely, pop def, Aoi.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'創業から、月日、本当に、経ちましたな、葵さん、これからも、よろしく頼むで、葵を、一緒に、本当に、育てていこうな、本気で。',en:"Since founding — time-passed, Aoi, future please-ask, Aoi together raise, serious.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。地方研修で、レンタカー、活用させていただきます、葵で、スタッフ、視野を、広げていきたいですね、本当に、楽しみです、私たち。',en:"Yes. Local-train — rent-car utilize, Aoi, staff view-widen want, fun really, us.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'横須賀の海鮮、新鮮なやつ、葵で、扱ってみたいんや、葵さん、海軍カレーも、出そかな、お客さん、本当に、喜びそうやで、絶対。',en:"Yokosuka seafood — fresh, Aoi handle want, Aoi navy-curry out?, cust-glad def really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。スタッフの姓、覚えるのに、苦労してたお客様、最近、慣れてきてくださっています、葵で、ありがたいです、本当に、嬉しいです。',en:"Yes. Staff-surnames — cust-memorize hard, lately accustomed, Aoi grateful, glad really.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'お皿の絵付け、細工、地元の職人さんに、依頼しよか、葵さん、本物の、和の、雰囲気、出るで、絶対、お客さん、感動するで、本当に。',en:"Plate-art — carving local-artisan request, Aoi authentic wa-air, cust-moved def really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。繁華街の中心に、二号店、本気で、検討させていただきますね、葵で、お客様、便利に、利用していただけるよう、考えていきたいです。',en:"Yes. Downtown-center 2nd store — serious study, Aoi, cust convenient-use considering want.",style:'Warm close.'},
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

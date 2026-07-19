import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_349 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['車検','よき','よん','缶詰','立ち読み','度々','あした','嫌がらせ']
const B_T = ['投げかけ','飼料','熟練','義務付け','ステンレス','預かり','行き過ぎ','混在']
const C_T = ['欠く','相応しい','熟成','建国','伝播','正論','覚醒','呈し']
const D_T = ['恵比寿','坊主','生きがい','本命','クラフト','柵','ムーン','フランクフルト']

const data = [
  // A
  {id:'conv_06941',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さんの車、車検、来月だよね、整備、お願いするんでしょ?',en:"Mom — Dad-car, inspect-next-month, maint-request?",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。よき朝に、目覚めるって、本当に、気持ちいいわよね、翔くん、ぐっすり、眠れた?',en:"Yes. Good morning awakening — gratifying, Sho, slept-well?",style:'Soft.'},
    {speaker:'sho_child',jp:'ぼく、よん時くらいに、夢から、目が、覚めちゃったよ、ママ、本当に、変な夢、見たんだ。',en:"Me — around 4 am, dream-woke, Mom, weird dream really.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'非常用に、缶詰、ストック、増やしておきましょうね、翔くん、お父さんと、買い物、行きましょう。',en:"Emergency — canned-stock increase, Sho, Dad-shopping go.",style:'Practical.'},
    {speaker:'sho_child',jp:'本屋さんで、立ち読み、お父さん、よく、しちゃうって、知ってた、ママ?',en:"Bookstore — browse-read Dad often-does, knew, Mom?",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'最近、度々、お祖父ちゃんち、訪ねるようになったわね、翔くん、お祖父ちゃん、嬉しそうよ、本当に。',en:"Lately — often Grandpa-visit, Sho, Grandpa happy-look really.",style:'Tender.'},
    {speaker:'sho_child',jp:'あした、お祭り、行くんでしょ、ママ、楽しみ、待ちきれないよ、ぼく、本当に、ワクワクしてる!',en:"Tomorrow — fest go, Mom, fun, can't-wait, excite really!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'学校で、嫌がらせ、あったら、すぐ、ママに、相談してね、翔くん、約束よ、絶対、忘れないでね。',en:"School — bully-occur, immediately Mom-consult, Sho, promise, don't forget.",style:'Direction close.'},
  ]},
  {id:'conv_06942',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、彼の車、今月、車検なの、整備工場、お祖父ちゃんに、紹介してもらったわよ、本当に、頼りになる。',en:"Aoi — bf-car, this-month inspect, garage Grandpa-intro, reliable really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。良きパートナー、見つけたわね、メイちゃん、葵としても、嬉しい、本当に、応援してる、いつも。',en:"Yeah. Good partner-found, Mei, as Aoi glad, cheering always.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'昨日、夜中の、よん時くらいに、目が、覚めちゃったの、葵、私、最近、寝つき、悪くて。',en:"Yesterday midnight ~4, woke, Aoi, lately sleep-bad.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'缶詰のフルーツ、デザートに、使えるかしら、葵で、メニュー、考えてるのよ、新作で、最近、特に。',en:"Canned fruit — dessert-usable?, Aoi menu-considering, new, lately esp.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'駅前の本屋、立ち読みできる雑誌、結構、品揃え、いいよね、葵、知ってる、私、よく、行くよ。',en:"Stn bookstore — browse-mag, quite-stocked, Aoi knew?, often go.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'メイちゃん、度々、葵に、寄ってくれて、本当に、ありがたいよ、私、嬉しいわよ、いつも、毎回。',en:"Mei — often Aoi-drop, grateful really, glad always, every-time.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'あした、彼と、ランチ、約束してるの、葵、緊張するわよ、本当に、新しい店、行くの、初めて。',en:"Tomorrow — bf lunch promise, Aoi, nervous really, new-store first.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'最近、店、ネットの嫌がらせ、悩まされてるのよ、葵で、メイちゃん、相談、乗ってくれて、感謝、本当に。',en:"Lately store — net-harass tormenting, Aoi, Mei-consult, gratitude really.",style:'Reflective close.'},
  ]},
  {id:'conv_06943',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お父さんの車、車検、自分で、調べたって、すごいよね、結構、勉強したんだね、本当に。',en:"Riku — Dad-car inspect, self-research, amazing, studied really.",style:'Praising teen.'},
    {speaker:'riku_teen',jp:'うん。よき指導者、出会えるって、本当に、人生で、大事なことだよな、桜、お互いに、感謝、しないとね。',en:"Yeah. Good mentor encounter — life-vital, Sakura, mutually thank.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'今日、よん時間目、自習だったよね、リク、ラッキーだったわよね、結構、宿題、進んだわ、私。',en:"Today — 4th-period self-study, lucky, homework advanced, me.",style:'Bright.'},
    {speaker:'riku_teen',jp:'部活前、缶詰のスナック、結構、お腹、満たせるんだぜ、桜、お前も、試してみるか?',en:"Pre-club — canned-snack, stomach-fill, Sakura, try-too?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'駅前の書店で、立ち読みしてて、お母さんに、見つかって、ちょっと、怒られちゃったよ、私、リク、笑える?',en:"Stn-book — browse, Mom-found, slight-scolded, Riku laugh?",style:'Wry.'},
    {speaker:'riku_teen',jp:'最近、度々、お前と、勉強できて、本当に、はかどってるぜ、桜、感謝してる、いつも、本当に。',en:"Lately — often you-study, progressing really, Sakura grateful always really.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'あした、私たち、試験だよね、リク、お互い、頑張ろうね、結果、本当に、楽しみだよ、ね。',en:"Tomorrow — test, Riku, mutually-try, results fun really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'クラスで、嫌がらせ、絶対、許さないよな、桜、お前、悪口とか、聞いたら、すぐ、教えて、ね、お互いに。',en:"Class — bully absolute don't-tolerate, Sakura, if-bad-talk hear, tell immediate.",style:'Soft close.'},
  ]},
  {id:'conv_06944',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃の車、車検、自分で、整備していたな、ばあさん、覚えてる?今、思うと、若かったわね、私。',en:"Youth-car inspect, self-maint, gran remember?, young-think, me.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。よき友、長く、付き合えてくれて、本当に、ありがたいわよね、あなた、お互いに、感謝、しないとね。',en:"Yes. Good friend long-keep, grateful, dear, mutually thank.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔、孫、よん歳の時、本当に、可愛かったわよな、ばあさん、覚えてる、写真、いっぱい、撮ったよね?',en:"Old — grandkid 4 yrs, cute, gran remember?, photos lots-taken?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'非常用の缶詰、地震に備えて、ストックしておきましょうね、あなた、お互いに、年だしね、慎重にね。',en:"Emergency-can — quake-prep, stock, dear, aged mutually careful.",style:'Practical.'},
    {speaker:'hiroshi_elder',jp:'若い頃、立ち読み、本屋で、よく、したな、ばあさん、お金、なかったから、本、読みたかったよ。',en:"Youth — browse bookstore often, gran, money-no, wanted-read.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'息子、度々、訪ねてくれるって、本当に、嬉しいわよね、あなた、私たち、孫にも、会えて、幸せよ。',en:"Son often-visit, glad, dear, grandkid-meet happy.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'あした、お祭り、町内会、参加しよう、ばあさん、お互いに、足が、健康なうちにね、お互い、楽しまないと。',en:"Tomorrow — fest town-assoc attend, gran, while-healthy-feet, mutual fun.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'昔、嫌がらせ、めいた、いたずら、ご近所で、あったわね、あなた、覚えてる?今、思うと、軽くて、笑えるわよね。',en:"Old — harass-like pranks, neighbor existed, remember?, now-think, light, laughs.",style:'Wry close.'},
  ]},
  {id:'conv_06945',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、お母さんの車、車検、来月って、聞いたよ、メイ姉さん、整備、お手伝い、できることあるかな?',en:"Sho — Mom-car inspect next-month, Mei-sis help-able?",style:'Curious.'},
    {speaker:'sho_child',jp:'メイ姉さんは、よき姉さん、なんだよ、ぼく、いつも、感謝してる、本当に、嬉しいんだ、メイ姉さん、本当に。',en:"Mei-sis — good sis, always grateful, glad really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'翔くん、もうすぐ、よん歳になるのよね、メイ姉さん、覚えてるわよ、お祝い、何にする、約束しようね。',en:"Sho — soon 4 yrs, Mei-sis remember, cele-what, promise.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さんが、くれた、缶詰のスープ、お母さん、喜んで、お料理に、使ってくれたよ、ぼく、嬉しい。',en:"Mei-sis canned-soup — Mom glad cook-used, glad me.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'公園の前の、本屋、立ち読み、メイ姉さんも、よく、するのよ、翔くん、知らなかったでしょ?',en:"Park-front bookstore — browse Mei-sis often, Sho, didn't know?",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さんと、度々、遊べて、ぼく、本当に、嬉しいんだ、いつも、楽しい時間、ありがとう、メイ姉さん、本当に。',en:"Mei-sis often-play, glad really, always-fun, thanks really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'あした、メイ姉さんち、翔くん、お母さんと、泊まりに、来てくれるんだよね、本当に、楽しみよ、私、待ってる。',en:"Tomorrow — Mei-sis-home, with Mom stay-come, fun really, wait.",style:'Eager.'},
    {speaker:'sho_child',jp:'学校で、嫌がらせ、あったとき、メイ姉さんにも、相談していい?ぼく、お母さんと、メイ姉さん、両方、頼ってる。',en:"School-bully when, Mei-sis-consult OK?, Mom-Mei-sis both rely.",style:'Vulnerable close.'},
  ]},

  // B
  {id:'conv_06946',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'新企画、若手に、問いを、投げかけて、考えさせろ、議論、活発化させろ、本当に、必要だ、社内に。',en:"New plan — youth question-toss, let-think, debate-activate, really needed.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。畜産事業、飼料の調達、安定化、進めております、コスト管理、徹底中です、本当に。',en:"Yes. Livestock biz — feed-procurement stab, advancing, cost-mgmt thorough really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'熟練の技術者、若手に、技術伝承、徹底させろ、創業以来の財産、絶対、失わせるな、本当に大事だ。',en:"Skilled tech — youth transmit thorough, founding-asset absolute don't-lose, vital.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。安全装備、社員に、義務付ける方針です、来期から、徹底中、ご了承ください、社長。',en:"Yes. Safety-gear — staff-mandate policy, next term thorough, please-understand, pres.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新製品、ステンレス素材、採用しろ、耐久性、本当に、重要だ、お客様の信頼、こだわれ。',en:"New product — stainless adopt, durability vital, cust-trust insist.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様からの預かり物、保管体制、見直しております、最新、安全対策、徹底中です、本当に。',en:"Yes. Cust-deposits — storage-review, latest safety-thorough really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'宣伝、行き過ぎないように、品位、保て、当社の、品格、本当に、大事にしろ、絶対だぞ。',en:"Promo — overdo-not, dignity-keep, our char, vital, absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新旧の社員、混在する職場、活気、出ております、世代間交流、活発化中です、本当に、最近。',en:"Yes. Old-new staff mixed — energy out, gen-exchange active really, lately.",style:'Close.'},
  ]},
  {id:'conv_06947',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'お客様に、新しい提案、投げかけて、反応、しっかり、見ていきましょうね、来月の販促、本当に、勝負よ。',en:"Cust — new prop toss, reaction properly-watch, next-month promo decisive.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。畜産関連の、飼料事業、新規参入、検討中です、来年から、本格化、進める方針です、本当に。',en:"Yes. Livestock feed-biz — new-entry studying, next year full, advance policy.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'熟練社員のノウハウ、しっかり、デジタル化していきましょう、若手に、伝わるよう、必要よね、本当に、急務よ。',en:"Skilled-staff know-how — digital, youth-convey, needed urgent.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。法律で、義務付けられた研修、社員、漏れなく、参加させております、徹底中、本当に、最近、特に。',en:"Yes. Law-mandated training — staff without-miss attend, thorough lately esp.",style:'Update.'},
    {speaker:'yuki_office',jp:'新製品の本体、ステンレス、高級感、出るわよね、お客様にも、本当に、好評な反応、いただいてるよね。',en:"New product body — stainless luxury-feel, cust favorable-feedback, received.",style:'Bright.'},
    {speaker:'kenji_office',jp:'はい。社内預かり金、運用、慎重に、進めております、リスク管理、徹底中です、本当に、しっかり。',en:"Yes. Internal deposits — operate careful, risk-mgmt thorough really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'最近、ネット広告、行き過ぎている部分、見直しが、必要よね、社内、共通認識、深めましょう、本当に。',en:"Lately net-ad — overdo parts, review needed, internal-cons deepen really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。古い技術と新技術、混在する現場、若手も、ベテランも、お互いに、学んでいますね、活発化中、本当に。',en:"Yes. Old-new tech mixed site, youth-vet mutually learn, active, really.",style:'Close.'},
  ]},
  {id:'conv_06948',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究に、本質的な問いを、投げかける姿勢、本当に、大事だぞ、独創性、出るからな、絶対に。',en:"Ren — research essential-question toss stance, vital really, originality out absolute.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。畜産研究、飼料効率の解析、論文の、新しいテーマに、なりそうですね、興味、本当に、深いです。',en:"Yes. Livestock research — feed-eff analysis, new theme, interest deep really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'熟練の研究者から、学ぶ謙虚さ、君も、忘れずに、持ち続けろ、本当に、これは、絶対に、大事だぞ。',en:"Skilled-researcher learn humility — also hold, vital, absolute.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文投稿、ガイドライン、義務付けられた、書式、しっかり、守ってまいります、本当に、慎重に。',en:"Yes. Paper-submit — guideline mandated format, properly keep, careful really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'実験装置、ステンレスの部品、本当に、長持ちするんだぞ、丁寧に、扱え、研究者として、当然だぞ。',en:"Lab-equip stainless — long-last, careful handle, as researcher obvious.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究室の、預かり資料、丁寧に、保管しております、教官への、責任、感じております、本当に。',en:"Yes. Lab deposits — carefully store, prof-resp feeling really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究、行き過ぎた仮説、慎重に、見直すこと、本当に、必要だぞ、客観性、忘れるな、絶対だぞ。',en:"Research overdo-hypothesis — careful review, vital, objectivity don't-forget absolute.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。古い学説と新学説、混在する分野、本当に、面白いです、整理しがいが、ありますね、論文で。',en:"Yes. Old-new theories mixed field — fun really, organize-worth, paper.",style:'Earnest close.'},
  ]},
  {id:'conv_06949',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'本件、市民に、問いを、投げかける形で、防犯意識、高めてまいります、御社にも、ご協力、お願いします。',en:"Case — citizen question-toss-form, crime-prev raise, your co coop please.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。事件関連、ペット飼料の流通、調べる必要、出てきております、警察、本格化中ですよね、現在。',en:"Yes. Case-related — pet-feed distrib, investigate need, police full current.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'熟練の捜査官、若手の育成にも、力を、注いでおります、警察、本当に、人材育成、徹底中です、最近。',en:"Skilled-officer — youth-raise also focus, police really, talent-raise thorough lately.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。防犯機器の設置、警察様から、義務付けられているわけではないですが、当社、自主的に、進めております。',en:"Yes. Crime-prev — not police-mandated, but self-advance.",style:'Update.'},
    {speaker:'takeda_officer',jp:'凶器、ステンレス製、確認されました、本件、捜査、本格化中です、警察、総力を、挙げております、現在。',en:"Weapon — stainless verified, case inv full, police all-out current.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社内、預かり物、警察様の指示通り、保管しております、捜査、ご協力、いたします、本当に、全力で。',en:"Yes. Internal-deposits — per-police-instr stored, inv coop, full really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'容疑者、行き過ぎた行動、何度も、犯していますね、過去にも、社会的影響、本当に、大きいです、本件、特に。',en:"Suspect — overdo-act many committed, past too, soc-impact really big, esp.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社内、外部関係者と、混在する状況、ある時間帯、警察、注意、いただきたいです、本当に、警備、ご相談したい。',en:"Yes. Internal — ext-related mixed-times, police attention want, security consult.",style:'Close.'},
  ]},
  {id:'conv_06950',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'お父さんの代から、社員に、根源的な問いを、投げかけ続けてきた、本当に、創業精神、大事にしてきた。',en:"Since Dad-era — staff fundamental-question kept-tossing, founding-spirit really treasured.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。創業期、お父さんは、農家への、飼料事業から、始めたんですよね、すごい歴史、本当に、誇りに思っています。',en:"Yes. Founding — Dad farmer-feed biz started, amazing hist, proud really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'熟練の職人を、お父さんが、大事にしてきた精神、お前の代でも、絶対、引き継いでいけよ、本当に、頼むぞ。',en:"Skilled-artisan — Dad treasured spirit, your era absolute inherit, ask really.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。最近、社員、義務付けられた研修、創業者の精神を、伝える内容に、しております、本当に、お父さんの想いを。',en:"Yes. Lately — mandated training, founder-spirit-convey content, Dad-thought really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業時、ステンレス、まだ、珍しかったんだぞ、覚えてるか、お前、当社、いち早く、採用した記憶、ある?',en:"Founding — stainless still rare, remember?, you our co early-adopt, memory exist?",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。創業以来の、お得意様からの預かり関係、絶対、大切にしてまいります、お父さん、心配なさらないで、絶対。',en:"Yes. Since founding — VIP-deposit relations absolute treasure, Dad don't-worry, absolute.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代も、行き過ぎた経営判断、何度か、悩んだぞ、お前、慎重に、判断しろよ、本当に、絶対だ。',en:"Dad-era too — overdo-decision many-worried, you carefully decide really absolute.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業期からの古参と、新人、混在する社内、本当に、活気、ありますね、お父さん、社員、財産です、本当に。',en:"Yes. Founding old-staff + newbie mixed — energy really, Dad staff-asset really.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06951',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、欠くべからざる視点、よく、取り入れていますね、研究の深さ、本当に、印象的でした、本当に。',en:"Ren — paper, indispensable view well-included, research-depth striking really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。研究テーマに、相応しいタイトル、何度も、悩みながら、決めました、本当に、苦労しました、まとめる時。',en:"Yes. Theme-fitting title — many-worry, decided, hardship really, summarize.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史的考察、時間を、熟成させながら、深めていくこと、本当に、大事ですね、桜さん、本当に、見習って欲しい。',en:"Hist-consider — time-mature-while deepening, vital really, also emulate want.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。日本の建国神話、当時の文化、深く、影響を、与えていました、論文で、扱いました、本当に、深い研究、できました。',en:"Yes. Japan founding-myth — era-cult, deep affect, in paper handled, deep research really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'仏教の伝播、東アジア全体に、与えた影響、本当に、大きいですね、研究の余地、まだまだ、ありますね、ご存知ですよね。',en:"Buddhism transmission — E-Asia whole impact, big really, research-room remains.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。正論ばかりでは、心、動かない、と、論文の結論で、扱いました、人々の感情、本当に、大事ですね、社会で。',en:"Yes. Right-words-only — heart not-move, conclusion handled, emotion vital, society.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'近代、覚醒を、迫られた人々の物語、論文で、丁寧に、論じていますね、本当に、感動的でした、私、読んで。',en:"Mod — awakening-forced people, paper carefully argued, moving really, reading.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。社会が、不安を、呈し始めた時期、戦時下、文学にも、影響を、与えました、本当に、深いです、研究、本当に。',en:"Yes. Soc anxiety-show begin — wartime, lit-impact, deep really, research really.",style:'Earnest close.'},
  ]},
  {id:'conv_06952',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、欠くべからざる情報、市民から、提供、いただいております、本当に、感謝、申し上げます、皆様に。',en:"Case — indispensable info, citizen-provided, gratitude really, everyone.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者、社会的地位に、相応しい行動を、取っていらっしゃった方ですよね、警察、立派な方だと、報告されました。',en:"Victim — status-fitting action taken, police-splendid-reported.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。捜査、時間を、熟成させてから、結論を、出す段階に、入っております、慎重に、進めております、本当に。',en:"Yes. Inv — time-mature, conclusion-stage entered, careful really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者組織、建国記念日に、何か、事件を、起こす計画、ありましたか?警察、警戒、強めていますよね。',en:"Suspect-org — founding-day, incident-plan exist?, police-alert strengthening.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。組織犯罪の伝播、近年、本当に、深刻化しております、警察、対策、急務、感じております、現在。',en:"Yes. Org-crime spread — recent really serious, police-measures urgent feel current.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者ご家族、正論で、加害者を、責める前に、警察、心の、ケアも、提供されているんですね、本当に、立派です。',en:"Victim-family — right-words before-blame, police soul-care provide, splendid really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、罪を、覚醒し始めているような、兆候、見られております、心理鑑定、進めております、最近、本当に。',en:"Yes. Suspect — sin-awakening signs seen, psych-eval advancing, lately really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'社会の闇が、呈してきた今、警察、本当に、頼りになる存在ですよね、市民として、感謝、しないとですね、本当に。',en:"Soc darkness-shown now — police really reliable, as citizen, must-thank really.",style:'Curious close.'},
  ]},
  {id:'conv_06953',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、医療現場、欠くべからざる人材、本当に、人手不足、深刻になっております、医師として、心配です、本当に。',en:"Ren — med-site, indispensable talent, staff-shortage serious, as doctor worry really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医師という職業、本当に、社会的責任に、相応しい立場ですよね、先生方、頭が下がる思いです、本当に、いつも。',en:"Doctor profession — soc-resp-fitting position, sensei humbled really always.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんとの関係、時間を、熟成させて、深い信頼、築いていくものですね、医療、本当に、奥深いです。',en:"Yes. Patient-rel — time-mature, deep trust build, med deep really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'感染症、建国当初から、人類、闘ってきた、と、考えると、医療の歴史、本当に、深いですね、面白い研究、できそうです。',en:"Infect — founding-since human-fought, considering, med-hist deep, fun research.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。情報の伝播、現代、本当に、急速ですよね、医療デマも、心配です、医師として、責任を、感じております、本当に。',en:"Yes. Info-spread — modern rapid, med-rumor worry, as doctor resp-feel really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療正論、患者さんに、寄り添う姿勢の方が、ずっと、大事ですよね、先生、本当に、立派な姿勢だと思います、いつも。',en:"Med-right — patient-snuggle stance more vital, sensei splendid stance, always.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。脳の覚醒メカニズム、最新の研究、本当に、面白いんですよ、神経科学、進歩、本当に、目覚ましいですね、最近。',en:"Yes. Brain awakening — latest research fun, neurosci progress remarkable lately.",style:'Informative.'},
    {speaker:'ren_uni',jp:'病気の兆候、早めに呈してくれた患者さん、早期発見、治療、本当に、可能性、広がりますよね、医療の力、本当に、すごい。',en:"Disease signs — early-show patient, early-detect tx-possibility widen, med-power amazing.",style:'Reflective close.'},
  ]},
  {id:'conv_06954',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'当社、欠くべからざる人材、若手にも、たくさん、いるな、本当に、財産だ、彼らを、大事にしていけ、本当に、頼むぞ。',en:"Our co — indispensable talent, youth-also many, asset really, treasure-them.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。創業理念に、相応しい行動、社員、心がけてくれております、本当に、ありがたいですね、社長、感謝しております。',en:"Yes. Founding-philos-fitting action — staff mindful, grateful really, pres.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'新製品、市場で、しっかり、熟成させてから、本格展開だ、急がず、慎重に、進めろ、絶対に、間違うなよ、本当に。',en:"New product — market mature-then full-deploy, no-hurry careful, absolute don't-err really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。建国記念日、社内、特別行事、毎年、開催しております、伝統として、引き継いでまいります、本当に。',en:"Yes. Founding-day — internal special-event yearly, as trad inherit really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社のブランド、業界、伝播していく工夫、本当に、必要だ、若手の新しい発想、活かしていけ、本当に、頼んだぞ。',en:"Our brand — industry-spread design needed, youth-new-idea utilize, ask really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。正論だけでは、社員、動かない、社長の、お言葉、心に、響くんですよね、社員、本当に、お話、楽しみにしています。',en:"Yes. Right-words-only — staff not-move, pres-words heart-resonate, staff fun.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社員一人一人、本当に、自分の使命に、覚醒して欲しい、創業精神、引き継いでいって欲しい、本当に、頼んだぞ、心から。',en:"Each staff — own-mission awaken, founding-spirit inherit want, ask from-heart.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。創業精神、社員、本当に、新しい姿、呈してきておりますね、社長、私たち、誇りに、思っております、本当に。',en:"Yes. Founding-spirit — staff new-form shown, pres, we proud really.",style:'Close.'},
  ]},
  {id:'conv_06955',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through social research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、欠くべからざる文献、丁寧に、引用していますね、研究、本当に、しっかりしていました、感心です。',en:"Sakura — paper indispensable refs carefully cited, research solid admire really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。学術論文に、相応しい言葉遣い、心がけました、慎重に、表現を、選びました、本当に、苦労しました、書く時。',en:"Yes. Acad-fitting wording — mindful, careful express-choose, hardship really, writing.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'歴史研究、本当に、時間を、熟成させてから、結論、出すこと、必要ですね、桜さん、覚えておいて欲しい、本当に。',en:"Hist research — time-mature, conclusion-then, vital, Sakura remember-want really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。建国の歴史、神話と、史実を、区別する難しさ、論文の核心でした、本当に、面白いテーマでした、私には。',en:"Yes. Founding-hist — myth-fact distinguish difficulty, paper-core, fun-theme really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'文化の伝播、論文の中で、丁寧に、扱われていますね、研究の視野の広さ、評価できますよ、桜さん、本当に、立派です。',en:"Cult spread — in paper carefully handled, view-breadth eval-able, Sakura splendid really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。正論を、振りかざすだけでは、社会、変わらない、と、論文で、論じました、現代にも、繋がるテーマでした、本当に。',en:"Yes. Right-words-wave-only — soc not-change, in paper argued, modern-link really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時の人々が、覚醒していく過程、本当に、印象的でしたね、論文の中で、生き生きと、描かれていました、本当に、感動的でした。',en:"Era-people awakening process — striking really, in paper vivid-depicted, moving really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。社会が、新しい姿を、呈し始めた時代、論文で、扱いました、興味深い、転換点でしたね、本当に、深い、研究、できました。',en:"Yes. Soc new-form-show era — paper-handled, intriguing turning-point, deep research really.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06956',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、今度、恵比寿の新しいカフェ、一緒に、行ってみない?雑誌で、特集されてたよ、本当に、素敵そうな店。',en:"Aoi — Ebisu new-cafe, together go-try?, mag-featured, lovely-look really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。お寺の坊主さん、近所に、来てくださって、お話、本当に、深い人なのよ、葵で、いつも、勉強になるの。',en:"Yeah. Temple monk — local visited, talk really deep, in Aoi learn always.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、お店、本当に、葵の生きがいになってるよね、見てて、メイちゃん、嬉しいわよ、本当に、応援、ずっとしてる。',en:"Aoi — store really Aoi-life-purpose, watching, Mei glad really, cheer always.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'チョコレート、本命用の、特別なの、用意したよ、メイちゃん、彼に、渡せるかしら、本当に、楽しみだよね。',en:"Choco — true-target special prepared, Mei, bf-give-able?, fun really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'クラフトビールのフェア、恵比寿で、開催されてるって、聞いた、葵、行ってみたいわよね、一緒に、行こう、絶対。',en:"Craft-beer fest — Ebisu held heard, Aoi, go-want, together absolute.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'お庭の柵、新しく、塗り直したよ、葵で、メイちゃん、見て、白くなって、お洒落になったよ、本当に、嬉しい。',en:"Garden fence — newly repainted, Aoi, Mei see, white-stylish, glad really.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'ハネムーン、ハワイに、行きたいって、彼、言ってたわよ、葵、私、本当に、楽しみにしてる、絶対、行きたいね。',en:"Honeymoon — Hawaii want, bf said, Aoi, fun really, def go.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'今度、葵で、フランクフルトソーセージ、メニューに、加える予定なの、メイちゃん、ぜひ、試してみてね、本当に、美味しいよ。',en:"Aoi — frankfurter menu-add plan, Mei try-please, tasty really.",style:'Bright close.'},
  ]},
  {id:'conv_06957',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、家族で、恵比寿のお祭り、行きたいよね、ぼく、楽しみだよ、本当に、お父さんも、喜びそうだよ、絶対。',en:"Mom — family Ebisu-fest go-want, fun really, Dad also-glad def.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。お寺の坊主さん、毎年、お盆に、来てくださるわよ、翔くん、お話、聞いたこと、ある、覚えてる?',en:"Yes. Temple monk — yearly Obon visit, Sho, talk-heard, remember?",style:'Soft.'},
    {speaker:'sho_child',jp:'お父さんの仕事、お父さんの、生きがいなんだって、ママに、よく、言ってるよ、ぼく、すごいって、思うんだ。',en:"Dad-work — Dad-life-purpose, Mom often-told, amazing-think.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'お友達、翔くん、本命の親友、もう、いるの?ママも、知りたいわよ、教えてくれる、嬉しいわよね、こういう話。',en:"Friend — true-bestie exist?, Mom want-know, tell?, glad these-talk.",style:'Curious.'},
    {speaker:'sho_child',jp:'お父さんが、クラフトビール、好きなんだよね、ママ、お祝いに、買って、あげるんだよね、お父さんの誕生日に。',en:"Dad — craft-beer love, Mom cele-buy, Dad-bday.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お庭の柵、お父さんが、修理してくれたわね、翔くん、安全になって、ママ、嬉しいわよ、本当に、感謝してる。',en:"Garden fence — Dad-repaired, Sho, safe, Mom glad really, gratitude.",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼく、おじいちゃんの本で、ムーンランディングの話、読んだよ、ママ、すごく、面白かったんだ、本当に、感動した。',en:"Me — Grandpa-book moon-land tale read, fun really, moved.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'夕食、フランクフルトソーセージ、たくさん、買ってあるわよ、翔くん、お腹いっぱい、食べていいよ、楽しみね、本当に。',en:"Dinner — frankfurter many bought, Sho, stomach-full eat OK, fun really.",style:'Warm close.'},
  ]},
  {id:'conv_06958',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、修学旅行、恵比寿あたり、自由行動の予定、入っているらしいよ、リク、お前、楽しみだよね、絶対。',en:"Riku — school trip, Ebisu, free-time plan, fun def.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。坊主頭、サッカー部、皆、夏休み、揃って、坊主になるんだぜ、桜、お前、見たい?',en:"Yeah. Bald-head — soccer-club, all summer, bald-become, Sakura see-want?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'部活って、本当に、私の、生きがいなんだ、リク、本気で、頑張りたい、卒業まで、お互いに、頑張ろう、ね。',en:"Club — really my life-purpose, Riku, serious-try, until-grad, mutual.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'お前の本命の進路、聞いてもいい?桜、応援するぜ、俺、本当に、お前のこと、応援してる、いつも、絶対。',en:"Your true-career — ask OK?, Sakura cheer, really, always def.",style:'Soft.'},
    {speaker:'sakura_teen',jp:'美術部で、クラフト作品、文化祭、出すんだよ、リク、見にきてね、楽しみにしてる、本当に、待ってる、絶対。',en:"Art-club — craft-work cult-fest out, Riku, see-come, fun really wait absolute.",style:'Animated.'},
    {speaker:'riku_teen',jp:'公園の柵、最近、壊れているところ、あったよな、桜、お前も、気をつけてな、危ないからな、本当に、絶対だぞ。',en:"Park fence — lately broken-spots, Sakura careful, dangerous really absolute.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'地学の授業で、ムーンクレーターの話、面白かったよ、リク、お前、宇宙、興味、あるんだろ?',en:"Earth-sci — moon-crater fun, Riku, space interest?",style:'Curious.'},
    {speaker:'riku_teen',jp:'帰りに、フランクフルトソーセージ、買って帰ろうぜ、桜、美味そうだぜ、屋台のやつ、本当に、絶対、買おう。',en:"Way back — frankfurter buy-return, Sakura, stall, tasty really def buy.",style:'Eager close.'},
  ]},
  {id:'conv_06959',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、恵比寿のあたり、本当に、よく、デート、したよな、ばあさん、覚えてる、楽しい思い出、たくさん、ある。',en:"Youth — Ebisu often-dated, gran remember, fun memories many.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。隣の坊主さん、近所のお世話を、本当に、よく、してくれていたわね、覚えてる、あなた、感謝しないとね、本当に。',en:"Yes. Next monk — neighbor-care often, remember, dear gratitude really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'退職後、孫の世話が、私の生きがいになったな、ばあさん、本当に、毎日、楽しいんだ、孫って、本当に、宝物だ。',en:"Post-retire — grandkid-care my life-purpose, gran daily fun, grandkid treasure.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃のあなたの本命、私だったのよね?他にも、いたんでしょ、本当に、教えて、もう、時効よ、覚えてる?',en:"Youth-yours true-target — was me?, others-existed?, statute-expired, remember?",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'昔、私、木工、クラフト、よく、やったな、ばあさん、覚えてる?家族に、いろいろ、作ってあげたよな、本当に、楽しかった。',en:"Old — me wood craft often-did, gran remember?, family-made, fun.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'庭の柵、お祖父ちゃんが、若い頃に、自分で、作ってくれたものよね、覚えてる、あなた、何度も、塗り直したよね、本当に。',en:"Garden fence — Grandpa youth-self-built, remember, many-repaint really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔、アポロのムーンランディング、テレビで、二人で、見たわよね、ばあさん、感動したよな、覚えてる、本当に。',en:"Old — Apollo moon-land TV, two-watched, gran moved, remember really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'戦後、初めて、フランクフルトソーセージ、食べたとき、本当に、衝撃だったわよね、あなた、覚えてる、私、忘れない。',en:"Post-war — first frankfurter eaten, shock, remember, unforget.",style:'Tender close.'},
  ]},
  {id:'conv_06960',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、恵比寿に、二号店、出す計画、本気で、検討しよか、立地、ええで、絶対に、勝負やで、本当に。',en:"Aoi — Ebisu 2nd store plan, serious-study, location good, battle def really.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。お寺の坊主さん、お客様として、いつも、来てくださって、本当に、ありがたいです、葵で、感謝しております、いつも。',en:"Yes. Temple monk — cust always-come, grateful really, in Aoi gratitude always.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'料理は、僕の生きがいなんや、葵さん、本気で、頑張りたいんや、葵さんと、絶対、夢、叶えたいで、本当に、頼むで。',en:"Cooking — my life-purpose, Aoi, serious-try, with Aoi dream-fulfill def, ask really.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。本命のシェフ、葵に、入ってくださることになりました、本当に、嬉しいです、葵で、メニュー、強化、できそうです。',en:"Yes. True-target chef — Aoi-joining, glad really, in Aoi menu-strengthen-able.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'地元のクラフトビール、店内、置きたいんや、葵さん、お客様にも、本当に、喜んでもらえそうやで、絶対、売れるで。',en:"Local craft-beer — interior-place want, Aoi, cust-glad-likely def-sell.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。お庭の柵、お洒落に、整えたいですね、葵で、お客様、入る時の、第一印象、本当に、大事ですから、はい。',en:"Yes. Garden fence — stylish organize want, in Aoi cust-entering first-imp vital.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'ハネムーンに、行きたいなって、最近、奥さん、言うてるんや、葵さん、僕、考えなあかんかな、本当に、忙しすぎたで。',en:"Honeymoon — want, lately wife-said, Aoi, must-think, busy really.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'はい。新メニューに、フランクフルトソーセージのアレンジ、入れたいですね、葵で、お子様、喜んでくださいそうですね、本当に。',en:"Yes. New menu — frankfurter-arrange include want, in Aoi kid-glad really.",style:'Warm close.'},
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

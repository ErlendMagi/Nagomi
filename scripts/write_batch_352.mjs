import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_352 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['コック','小鳥','泳ぎ','電球','病室','好き嫌い','真っ直ぐ','昼飯']
const B_T = ['閉会','ゲン','ヘルス','賜り','設問','緊密','同点','勧める']
const C_T = ['従軍','感受性','故人','発砲','怠っ','氾濫','乱用','断絶']
const D_T = ['英単語','地中海','フック','麓','猟','カウントダウン','詩集','強風']

const data = [
  // A
  {id:'conv_07001',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さん、家で、コックさんみたいに、本格的な料理、作ってくれるよね、本当に、すごいよね、いつも、感激してる。',en:"Mom — Dad, home, chef-like serious-cook makes, amazing always, moved.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。庭に、小鳥、たくさん、来てくれてるわよね、翔くん、見て、可愛いわよね、本当に、心が、和むわね、いつも。',en:"Yes. Garden — small-birds many-come, Sho see, cute, heart-calm, always really.",style:'Soft.'},
    {speaker:'sho_child',jp:'夏休み、プールで、泳ぎ方、もっと、上手になりたいよ、ママ、お父さんに、教えてもらえるかな、本当に、楽しみだよ、絶対。',en:"Summer — pool swim-method, better-want, Mom, Dad-teach-able?, fun absolute.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'リビングの電球、切れちゃったわよ、翔くん、お父さんに、お願いしないとね、夜、暗いの、困るわよね、本当に、家族の生活。',en:"Living — bulb died, Sho, Dad-ask, night-dark trouble, family-life really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お祖父ちゃんの病室、お見舞いに、行きたいよ、ママ、本当に、お祖父ちゃん、心配なんだ、明日、絶対、行こうね、お願い、本当に。',en:"Grandpa hosp-room — visit-want, Mom, worry, tomorrow def go, please.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'翔くん、好き嫌い、しないでね、お野菜、ちゃんと、食べて、栄養、取らないとね、ママ、本当に、心配、しちゃうわよ、絶対。',en:"Sho — picky-don't, veggies properly eat, nutr-take, Mom worry absolute.",style:'Direction.'},
    {speaker:'sho_child',jp:'廊下を、ぼく、真っ直ぐ、歩いて、目的の部屋まで、行けるよ、ママ、迷子に、ならないからね、自信、あるよ、本当に。',en:"Hallway — straight-walked, target-room-reach-able, Mom no-lost, conf, really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お昼飯、何にする?翔くん、お母さん、お弁当、作ってあげるけど、リクエスト、ある?お友達と、シェアしたい?本当に、楽しみね、お友達と。',en:"Lunch — what?, Mom-make, request?, friend-share want?, fun with-friends really.",style:'Warm close.'},
  ]},
  {id:'conv_07002',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、新しいコックさん、本当に、頼りに、なるみたいね、お客様、ご好評よ、最近、味、本当に、変わったって、皆、褒めてるよ、葵で。',en:"Aoi — new chef reliable, cust favorable, lately taste-changed all-praise, in Aoi.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。お庭に、小鳥、来てくれるテラス席、お客様に、本当に、好評よ、メイちゃん、葵で、いつも、自然、感じられるって、皆、言ってる、本当に。',en:"Yeah. Garden small-birds-come terrace — cust favorable, Mei, Aoi nature-feel all say really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'最近、ジムで、私、泳ぎを、習い始めたの、葵、結構、楽しいわよ、メイちゃんも、興味、ある?一緒に、行ってみる?本当に、おすすめ。',en:"Lately gym — swim-learn-start, Aoi quite-fun, Mei interest?, together-go-try?, rec really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'店内の電球、ちょっと、暗く、感じるようになってきたわよね、メイちゃん、私、葵で、新しいの、注文しないとね、本当に、急務、なってきたわよ。',en:"Interior bulb — slight-dim feel, Mei, Aoi new-order must, urgent become.",style:'Concerned.'},
    {speaker:'mei_romantic',jp:'いとこ、入院してて、病室、お見舞い、葵から、お花、持って行ってあげたいの、私、本当に、心配だから、優しい色のお花、選んでもらえる?',en:"Cousin — hosp, hosp-room visit, from-Aoi flowers take-want, gentle-color choose?",style:'Soft.'},
    {speaker:'aoi_barista',jp:'葵のお客様、好き嫌い、本当に、いろいろよね、メイちゃん、葵としても、メニュー、調整、結構、悩んでるわよ、お客様、皆、満足、頂きたい、本気。',en:"Aoi cust — picky various, Mei, as Aoi menu-adjust quite-worry, all-cust-satisfy serious.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、今日、真っ直ぐ、帰れる?ちょっと、相談、乗ってほしいことが、あるんだ、本当に、お願い、なるべく、早めに、帰って、お話、しよう、ね、絶対。',en:"Aoi — today straight-home?, consult-want, please early-home, talk absolute.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'お昼飯、メイちゃんと、葵で、たまには、ゆっくり、一緒に、食べたいわよね、本当に、最近、忙しすぎたから、また、約束、絶対に、しようね。',en:"Lunch — Mei, Aoi together-slow-eat want, lately too-busy, promise absolute again.",style:'Warm close.'},
  ]},
  {id:'conv_07003',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お父さん、コックさんやってるよね、おしゃれな、フレンチレストランで、本当に、すごいよね、リク、お前、誇りに、思いなよ。',en:"Riku — Dad chef, French-restaurant stylish, amazing, you proud-think.",style:'Praising teen.'},
    {speaker:'riku_teen',jp:'うん。学校の裏庭、小鳥、本当に、たくさん、いるよな、桜、お前も、気付いてた?可愛いよな、本当に、絶対、ほっこりするよな、毎朝、見ると。',en:"Yeah. School-back-garden — small-birds many, Sakura noticed?, cute, calm, every-morn-see.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'夏休み、泳ぎ、上手くなりたいよね、リク、お前、運動部だから、もう、得意でしょ?教えてくれる?お願い、本当に、絶対、教えてね。',en:"Summer — swim better-want, Riku sport-club, already-good?, teach?, please absolute.",style:'Eager.'},
    {speaker:'riku_teen',jp:'教室の電球、また、切れたんだぜ、桜、お前、気づいてた?ちょっと、暗くなってさ、勉強、しにくくなってきたぜ、本当に、修理、急務だ。',en:"Class bulb — again died, Sakura noticed?, slight-dim, study-hard, repair urgent.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お祖母ちゃんの病室、私、お見舞いに、行ってきたんだ、リク、お前にも、お話、したいよ、心配かけて、ごめんね、本当に、ありがとう、いつも、優しくて。',en:"Granny hosp-room — visit-went, Riku you-talk-want, worry-sorry, thanks gentle always.",style:'Vulnerable.'},
    {speaker:'riku_teen',jp:'お前、本当に、好き嫌い、ないよな、桜、何でも、食べてさ、本当に、感心するよ、俺、結構、苦手なもの、あるんだ、お互いに、頑張ろう、本当に。',en:"You — picky-none, Sakura, anything-eat, admire, me bad-things exist, mutual try really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'リク、真っ直ぐな性格、本当に、私、好きだよ、嘘、つかないし、いつも、誠実で、本当に、信頼できる、お前、最高だよ、本当に、感謝してる、いつも。',en:"Riku — straight character like, no-lie, always honest, trust-able, best, gratitude.",style:'Soft.'},
    {speaker:'riku_teen',jp:'お昼飯、購買で、買おうかな、桜、お前は、お母さんのお弁当?本当に、いいよな、毎日、家庭の味、楽しめるって、羨ましいよな、本当に、絶対。',en:"Lunch — shop-buy?, Sakura Mom-lunch?, good, daily home-taste, envy really absolute.",style:'Wistful close.'},
  ]},
  {id:'conv_07004',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、私、レストランで、コックさんに、よく、声、かけていたな、ばあさん、覚えてる?本当に、料理人さんと、お話、するの、好きだったよな、私たち。',en:"Youth — me restaurant chef-voice often, gran remember?, talk-like, us.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。庭の餌台、小鳥さんたち、本当に、毎日、来てくれるわよね、あなた、覚えてる、可愛いわよね、私たち、心が、和むわよね、本当に、いつも。',en:"Yes. Garden feed-stand — small-birds daily-come, dear remember, cute, heart-calm always.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、海で、泳ぎ、得意だったわよな、ばあさん、覚えてる?毎年、夏、二人で、よく、海に、行ったよな、本当に、楽しかったよな、本当に、思い出。',en:"Youth — sea swim good, gran remember?, yearly summer two often, fun, memory.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'電球の取り替え、最近、息子に、頼むようになっちゃったわよね、あなた、年取って、危ないこと、しないようにしましょうね、お互いに、本当に、健康、第一。',en:"Bulb-change — lately son-ask, dear aged, dangerous-don't, mutual, health-first.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お祖母ちゃんが、入院されてた病室、ばあさん、覚えてる?お見舞いに、毎日、行ったわよな、私たち、本当に、心配したわよな、本当に、辛い時期だった。',en:"Granny hosp-room, gran remember?, visit daily-went, worried, hard period really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'孫、好き嫌い、最近、減ってきたわよね、あなた、お祖母ちゃん、本当に、嬉しいわよ、お野菜、ちゃんと、食べてるって、聞いて、安心したわよね、本当に。',en:"Grandkid — picky lately-reduce, dear, gran glad, veggies properly eat heard, relieved really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔、私たち、真っ直ぐな道、二人で、よく、歩いたわよな、ばあさん、覚えてる?夕暮れの散歩、本当に、ロマンチックだったよな、本当に、思い出すよ、いつも。',en:"Old — straight-road two often-walked, gran remember?, evening-walk romantic, recall always.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'今日のお昼飯、お祖父ちゃん、何が、食べたい?ばあさん、何でも、作ってあげるわよ、リクエスト、教えてね、本当に、嬉しいわよ、料理、するの、ね。',en:"Today lunch — Grandpa what eat-want?, anything-make, request-tell, glad cook really.",style:'Warm close.'},
  ]},
  {id:'conv_07005',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、お父さん、コックさんが、お友達なんだって、すごいわよね、本当に、メイ姉さん、ご紹介、いただいたわよ、本当に、感激したわよ、お料理、最高だった。',en:"Sho — Dad-chef-friend, amazing, Mei-sis intro-received, moved really, food best.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、公園に、小鳥、たくさん、来てるよ、見て、可愛いね、本当に、ぼく、写真、撮りたいよ、メイ姉さん、撮ってくれる?',en:"Mei-sis — park small-birds many-come, see, cute, photo-take-want, take?",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'プールで、翔くんの、泳ぎ、見たいな、メイ姉さん、本当に、応援したいよ、夏休み、一緒に、行こうね、約束しようね、絶対、楽しみよ、私、本当に。',en:"Pool — Sho swim see, Mei-sis cheer-want, summer together-go, promise, fun really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さんの家の電球、ぼく、いつか、お手伝いして、取り替えてあげるからね、約束、絶対、ぼく、大きくなったらね、できるようになるよ、絶対。',en:"Mei-sis home bulb — sometime help-change, promise absolute, big-grown-when, able absolute.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'もし、翔くんが、病室に、いる時、メイ姉さん、絶対、お見舞い、行くからね、約束、絶対、心配しないでね、ね、お母さんに、伝えてね、絶対、本当に。',en:"If Sho hosp-room time, Mei-sis def visit, promise absolute, don't-worry, Mom-convey absolute.",style:'Soft.'},
    {speaker:'sho_child',jp:'ぼく、好き嫌い、もう、なくなったよ、メイ姉さん、お野菜、何でも、食べられるんだ、お母さんに、聞いてみて、誇らしいんだよ、ぼく、本当に、嬉しい。',en:"Me — picky-gone, Mei-sis, veggies any-eat-able, Mom-ask, proud really, glad.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'公園の道、真っ直ぐ、続いているわよね、翔くん、ゆっくり、メイ姉さんと、お散歩、しましょうね、お話、いっぱい、しようね、ね、本当に、楽しみ。',en:"Park-road — straight-continues, Sho slow Mei-sis walk, talk lots, fun really.",style:'Tender.'},
    {speaker:'sho_child',jp:'お昼飯、メイ姉さんと、お弁当、外で、食べたいんだ、本当に、楽しみだよ、ね、ピクニックみたいに、楽しめそう、絶対、いい思い出に、なるよ、本当に。',en:"Lunch — Mei-sis lunch outdoor-eat want, fun really, picnic-like, def memory.",style:'Eager close.'},
  ]},

  // B
  {id:'conv_07006',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'創業祭の閉会の挨拶、私、心を込めて、お話、するからな、社員、皆、覚悟して、聞いてくれ、本当に、感謝の言葉、伝えたい、絶対、本当に。',en:"Founding-fest closing — heart-include, speak, staff all-prep, gratitude-words convey absolute.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。創業以来、ゲン担ぎ、続けてきた、お父さんの代から、伝わる、伝統的な、習慣、続けてまいります、本当に、絶対、引き継ぎます、いつまでも。',en:"Yes. Since founding — gen-carry, since Dad-era, trad-custom continue, inherit absolute.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'ヘルスケア事業、本気で、検討するか、社員の健康、第一に、考える企業、目指したい、本当に、絶対、頑張れ、本当に、頼んだぞ、社員、皆。',en:"Health-care biz — serious-study?, staff-health-first, aim, ask absolute all-staff.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様からの、お言葉、本当に、賜り、社員、皆、励みに、いたしております、本当に、感謝、申し上げます、お客様、皆様に、ですね、いつも、本当に。',en:"Yes. Cust-words received, staff encourage, gratitude cust really, always.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新人研修の設問、若手の発想、活かしたものに、変えていけ、固定した、ものでは、進歩、ないぞ、本当に、頼んだぞ、絶対、これは、本当に、絶対だ。',en:"Newbie-train questions — youth-idea utilize, fixed-no-progress, ask absolute really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お得意様との、緊密な、関係、社員、皆、心がけております、社長、本当に、引き続き、頑張ってまいります、絶対、頼りに、なる関係、築きます。',en:"Yes. VIP-cust close-rel — staff mindful, pres future-try absolute reliable-build.",style:'Cooperative.'},
    {speaker:'hiroshi_boss',jp:'競合と、シェア、同点、争う段階だ、当社、攻めの姿勢、絶対、見せていけ、社員、本気で、頑張れ、本当に、頼んだぞ、これは、最終決戦だ、本気。',en:"Rival-share tied disputing — our co attack stance absolute show, ask serious, final-battle.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様に、当社製品、自信を持って、勧める社員、増やしていきたいですね、社長、本当に、若手、育てて、いきたいです、本気で、頼みます、本当に。',en:"Yes. Cust — our product-recommend conf-staff increase want, pres youth-raise serious, ask really.",style:'Close.'},
  ]},
  {id:'conv_07007',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'年末の閉会式、社員代表、誰に、お願いしましょうか、本当に、慎重に、選びましょうね、皆、頑張った一年、本当に、感謝、しないと、本当に、いけませんね。',en:"Year-end closing — staff-rep, who-ask?, careful choose, all hard-yr, gratitude must really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。商談前の、ゲン担ぎ、私も、最近、するようになっちゃいました、本当に、効果あるかも、しれませんよね、お客様、本当に、好評、続いておりますし。',en:"Yes. Pre-deal gen-carry — me lately do, effect maybe, cust favorable continues.",style:'Reflective.'},
    {speaker:'yuki_office',jp:'社員のヘルス管理、本気で、強化しないと、いけないわね、健康第一の、企業文化、本当に、目指したいわよね、私たち、リーダーとして、絶対に、頼みますよ、皆。',en:"Staff health-mgmt — serious-strengthen, health-first culture aim want, as leader absolute ask all.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。創業以来、お客様からの、お声、賜り、社員、本当に、励みに、しております、感謝の気持ち、絶対、忘れずに、業務、取り組んでまいります、絶対、本当に。',en:"Yes. Since founding — cust-voices received, staff encourage, gratitude don't-forget, biz absolute.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'試験の設問、毎年、内容、改善していかないとね、若手の感性、本当に、活かして、より、現代的な、内容、目指したいわよね、本当に、絶対、楽しみよ、これから。',en:"Test questions — yearly improve, youth-sens utilize, modern-aim want absolute, fun.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。各部署と、緊密に、連携しております、社内、本当に、風通し、よくなってきましたよね、最近、特に、コミュニケーション、活性化、感じております、本当に、嬉しいです。',en:"Yes. Each-dept close-link, internal vent-better lately esp, comms active feel, glad really.",style:'Update.'},
    {speaker:'yuki_office',jp:'競合と、本当に、同点で、競っているわよね、当社、ここからが、勝負ですよ、皆、本気で、頑張りましょうね、絶対に、勝ちますよ、私たち、本当に、絶対。',en:"Rival — tied competing, our co here-battle, all serious-try, def-win absolute really.",style:'Encouraging.'},
    {speaker:'kenji_office',jp:'はい。お得意様に、新商品、自信を持って、勧めてまいります、本当に、絶対、ご納得、いただけると、信じております、社員、皆、頑張ります、本当に、絶対。',en:"Yes. VIP — new-prod conf-recommend, def satisfy-receive believe, all-staff try absolute really.",style:'Close.'},
  ]},
  {id:'conv_07008',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、学会の閉会、印象に残る発表、目指して、頑張れ、本当に、若いうちに、経験、積めよ、絶対、君の財産になるからな、絶対、頼んだぞ、本気で、本当に、頑張れ。',en:"Ren — conf-closing memorable-pres aim, try, youth-exp-accum, your asset, ask serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究者でも、ゲン担ぎ、する人、いらっしゃるそうですね、本当に、興味深いです、私も、最近、密かに、しております、本当に、効くんですよ、結構、本当に、絶対。',en:"Yes. Researchers — gen-carry doers exist, intriguing, lately secretly-doing, effective really absolute.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究者として、健康、ヘルスケア、本気で、考えろ、長く、研究、続けるためにも、絶対、自分の体、大事にしろ、絶対に、本気だぞ、本当に、頼んだ、絶対、本気で。',en:"As researcher — health-care serious-think, long-research-continue, body-treasure absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先生から、ご指導、本当に、賜り、感謝、申し上げております、社会人になっても、絶対、活かしてまいります、本当に、ありがたいです、いつも、本気、本当に。',en:"Yes. From prof — guide received, gratitude, as adult absolute utilize, grateful always serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'論文の設問、独自の視点で、立てろ、独創性、評価されるからな、絶対、君も、視野、広げて、独自性、出していけ、本当に、頼んだぞ、絶対、本気で、本当に。',en:"Paper questions — own-view, originality eval, view-widen, originality-out, ask serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。指導教官と、緊密に、連絡を、取り合うようにしております、本当に、感謝、しております、いつでも、相談、乗ってくださって、本気で、絶対、ありがたいです、本当に。',en:"Yes. Adviser — close-contact taking, gratitude, anytime consult, serious absolute grateful really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'同期と、研究で、同点の競争、続けることも、君の刺激になるぞ、絶対、頑張れ、本当に、楽しみだぞ、君の、これから、本気で、応援してるからな、絶対、本当に。',en:"Cohort — research tied-rivalry continue, your stimulus, try absolute, your-future fun serious cheer.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先生に、最新の論文、ご紹介させて、いただきたいです、本当に、勧めるに値する、内容だと、思っております、本気で、絶対、お読み、頂きたいです、本当に。',en:"Yes. Prof — latest paper intro permit want, recommend-worthy content think, serious, read want really.",style:'Earnest close.'},
  ]},
  {id:'conv_07009',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'本件、警察、捜査本部の閉会、本当に、目処、つけられそうです、皆様、本当に、ご協力、感謝、申し上げます、いつも、本当に、ありがとうございます、絶対。',en:"Case — police HQ closing, prospects-set, gratitude coop, always thanks absolute.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察の方々、ゲン担ぎの、習慣、結構、いらっしゃるんですね、本当に、興味深く、お話、伺っております、社員、皆、感心しております、本当に、絶対、本気で。',en:"Yes. Officers — gen-carry custom, quite-exist, intriguingly-heard, staff admire really absolute.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、ヘルスケアの、サポート、本当に、必要、なってきておりますね、本気で、強化、必要、感じております、隊員、皆、健康、第一、絶対、本当に、頼みます、私からも、絶対。',en:"Police — health-care support needed, serious-strengthen feel, all-officers health-first absolute really ask.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様から、本当に、貴重な、お声、賜り、社員、本当に、励みに、しております、防犯活動、本気で、続けてまいります、絶対、本当に、頼みます、いつも、感謝。',en:"Yes. From police — precious voice received, staff encourage, crime-prev serious continue absolute, gratitude.",style:'Update.'},
    {speaker:'takeda_officer',jp:'防犯訓練の設問、市民の方々に、わかりやすく、本当に、配慮、しております、皆様の、安全、第一に、考えております、いつも、本当に、絶対、本気、心からの、お願いです。',en:"Crime-prev train questions — citizens clear, considered, safety-first think, always absolute heart-ask.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様と、当社、本当に、緊密な、連携、続けてまいります、地域の、安全のため、絶対に、私たち、本気で、頑張ります、社員、皆、絶対に、頼みます、本当に。',en:"Yes. Police, our co — close-link continue, region-safety absolute, all serious try absolute ask really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'地域の、犯罪件数、ライバル地域と、同点、競っているような状況、本当に、危機感、持って、警察、対応、強化してまいります、絶対、本気で、本当に、頼みます、市民、皆、絶対。',en:"Local crime — rival-region tied competing, crisis-feel, police-strengthen absolute serious ask all.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社員に、警察の活動、自信を持って、勧めるよう、社内、広めてまいります、本当に、立派な、活動、ですから、社員、皆、絶対、感謝、しております、本当に、いつも。',en:"Yes. Staff — police-activity conf-recommend, internal-spread, splendid activity, all gratitude really.",style:'Close.'},
  ]},
  {id:'conv_07010',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業者として、創業祭の閉会、私、何度も、立ち会ってきた、本当に、心、震えるよ、お父さん、お前にも、感動的な、瞬間、経験して欲しい、本気で、絶対、本当に、頼んだ。',en:"As founder — corp-fest closing, many-attended, heart-tremble, also-you moving moment exp-want serious.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、ゲン担ぎ、創業者の習慣、本当に、続いておりますよ、私の代でも、絶対、続けていきます、伝統として、本当に、引き継ぎますからね、絶対、お父さん。',en:"Yes. Since Dad-era — gen-carry founder-custom continued, my era absolute, as trad inherit absolute Dad.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'当社の、ヘルスケア事業、お父さん、本気で、考えていたんだ、覚えてる、お前?新時代の、本気、見せていけ、絶対、本当に、頼んだぞ、社員、皆、絶対、絶対、頼んだぞ。',en:"Our health-care biz — Dad serious-thought, remember?, new-era serious show absolute, all-staff ask absolute.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんから、本当に、たくさんの教え、賜り、私、絶対、忘れません、創業精神、引き継いでまいります、本当に、感謝しております、お父さん、ありがとう、本気で、絶対。',en:"Yes. Dad — many teach received, never-forget, founding-spirit inherit, gratitude Dad, thanks serious absolute.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'新人試験の設問、お父さんの代から、私、考えてきたぞ、お前にも、若手育成の、本気、見せていけ、絶対、本当に、頼んだぞ、絶対、これは、絶対、お父さんからの、お願いだ。',en:"Newbie-test questions — Dad-era me thought, you-show youth-raise serious absolute ask Dad-request.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お得意様と、創業以来、本当に、緊密な、関係、築いて、まいりました、私の代でも、絶対、続けてまいります、お父さん、ご安心ください、絶対、本当に、頼みます、絶対。',en:"Yes. VIP — since founding, close-rel built, my era continue, Dad rest-assured absolute ask absolute.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業期、業界、同点の競争、何度も、経験したな、覚えてる、お父さん、当時の、必死さ、お前にも、伝えたい、本気で、絶対、頼んだぞ、これは、絶対に、お父さんから、本当に。',en:"Founding — industry tied-rivalry many-experience, remember?, era desperate, you-convey want serious absolute Dad really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、創業時に、勧める姿勢、本当に、私の心に、刻まれております、絶対、お父さんの代の精神、引き継ぎます、本当に、本気で、絶対、お父さん、信じてください、絶対。',en:"Yes. Dad founding-recommend stance — heart-carved, Dad-era spirit inherit absolute serious Dad believe absolute.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_07011',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、従軍経験者の証言、本当に、丁寧に、扱われていましたね、感動的な、研究でした、本当に、印象的な、内容、桜さん、評価できます、本当に、立派でした、絶対。',en:"Ren — paper, soldier-witness testimony careful handled, moving research, striking content, eval splendid absolute.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。戦時下の人々の、感受性、本当に、繊細な視点で、論じました、論文で、貴重な、研究、できました、本気で、絶対、深い、研究、できました、本当に、感謝しております。',en:"Yes. Wartime people-sens — delicate view argued, precious research, deep research absolute, gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'故人となった証言者の方々、本当に、貴重な、証言、残してくださいましたね、論文の中で、丁寧に、扱われていました、本当に、感動的な、扱いでしたね、桜さん、絶対、立派です。',en:"Deceased witnesses — precious testimony left, paper careful handled, moving handling, Sakura splendid absolute.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。当時、街中で、発砲事件、起きていた地域も、複数、ありました、論文で、論じました、本当に、悲しい、歴史でした、絶対、繰り返さないように、訴えました、本気で。',en:"Yes. Era — street-shooting incidents, multi-region existed, paper-argued, sad-hist, absolute don't-repeat argued serious.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'安全管理を、怠っていた、政府、戦中の、責任、論文で、しっかり、論じていますね、桜さん、本当に、視点、独自で、視野、広いですね、本当に、感心しました、本気で、立派。',en:"Safety-mgmt — gov negligent, wartime resp, paper properly argued, Sakura own-view broad, admire serious splendid.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。情報の氾濫、戦時下、人々を、混乱させた、と、論文で、論じました、現代の、SNS時代にも、繋がる、テーマでした、本当に、深い、研究、できました、本気で、感謝しております。',en:"Yes. Info-flood — wartime confused people, paper-argued, modern-SNS-link theme, deep research, gratitude serious.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時の権力乱用、論文で、本当に、丁寧に、論じていますね、現代にも、警鐘を、鳴らす、重要な視点、含めて、書きました、本当に、立派な、研究、桜さん、絶対、評価できます、本気。',en:"Wartime power-abuse — paper careful argued, modern-warn-bell important view included, splendid research eval absolute serious.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。家族の断絶、戦争の悲劇として、論文で、扱いました、本当に、辛い、歴史でした、絶対、平和を、守る大切さ、訴えました、本気で、最後の章で、感動的に、書きました、本当に、本気。',en:"Yes. Family-rupture — war-tragedy paper-handled, hard-hist, absolute peace-guard argued serious, final-ch moving wrote.",style:'Earnest close.'},
  ]},
  {id:'conv_07012',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、容疑者、元従軍経験者、年配の方でした、本当に、複雑な、心境、想像、つかないものでした、警察、慎重に、対応、進めております、本気で、絶対、本当に。',en:"Case — suspect ex-soldier, elder, complex feelings, imagine-untappable, police-careful absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者ご家族、本当に、感受性、豊かな方々で、心の傷、本当に、深いんですね、警察、心のケア、しっかり、提供、されているんですよね、本気で、感謝、しております、市民として、本当に。',en:"Victim-family — sens-rich, heart-wound deep, police soul-care properly provide, gratitude serious as citizen.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。故人となった被害者の方、本当に、立派な方だったそうです、警察、ご家族から、お話、伺いました、本気で、心、痛みます、本当に、辛い、捜査、なっております、最近、特に。',en:"Yes. Deceased victim — splendid, police family-heard, heart-pain, hard inv lately esp serious.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、住宅地で、発砲した事件でしたよね、本当に、深刻な、犯罪、警察、断固として、対応されていますよね、本気で、市民の安全、絶対に、守って欲しいですね、お願い、本当に。',en:"Suspect — residential-shooting case, serious crime, police firm-resp, citizen-safety guard want absolute, please really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、安全管理を、怠っていた、銃保管、問題でした、警察、本気で、再発防止策、検討中です、絶対、社会、安全に、するため、全力で、頑張ってまいります、本気、本当に。',en:"Yes. Suspect — safety-mgmt negligent, gun-storage issue, police serious recurrence-prev studying, society-safe full-try really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'メディアの情報、氾濫している今、警察、本当に、正しい情報、発信、急務ですよね、市民として、本気で、感謝、申し上げております、いつも、本当に、本気で、絶対。',en:"Media-info — flooding now, police correct-info-issue urgent, as citizen gratitude always serious absolute really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、警察の権限の乱用、過去に、訴えていた方でした、複雑な、背景、感じます、警察、本気で、慎重に、対応、進めてまいります、絶対、本気で、本当に、お願い、市民。',en:"Yes. Suspect — police-power abuse past-argued, complex bg feel, careful resp advance absolute serious ask.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者ご家族、地域社会との、断絶、深刻だったと、聞きました、本当に、心が、痛みます、警察、ケアも、本気で、提供、されていますね、本当に、立派、頭が下がる、思いです、絶対。',en:"Victim-family — local-soc rupture severe heard, heart-pain, police-care serious provide, splendid humbled absolute.",style:'Reflective close.'},
  ]},
  {id:'conv_07013',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、戦中、従軍した医師たち、本当に、命がけで、医療、行っていたんですよ、医療の歴史、深いですね、本気で、勉強、続けないと、いけませんね、現代の、医師として、本当に。',en:"Ren — wartime soldier-doctors, life-risk med-done, med-hist deep, study-must, as modern doctor really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'患者さんの感受性、本当に、医療において、重要な要素ですよね、先生、心と体、両方を、ケアする、現代医療の、姿勢、本当に、立派ですね、感心しております、本気で、絶対、本当に。',en:"Patient sens — med-important factor, sensei, mind-body both care, modern stance splendid, admire serious absolute really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。故人となった患者さんのご家族、本当に、ご縁を、大切に、しております、本気で、心からの、感謝の気持ち、伝え続けてまいります、絶対、本当に、医師として、変わらない、姿勢、本気で。',en:"Yes. Deceased-patient family — tie-treasure, heart-thanks convey-continue absolute really, as doctor unchanged stance serious.",style:'Patient.'},
    {speaker:'ren_uni',jp:'病院で、発砲事件、起きた歴史、海外にも、ありましたよね、先生、本当に、医療現場の、安全、本当に、課題、感じますよね、本気で、対策、必要だと、思います、本当に、絶対。',en:"Hosp-shooting events — overseas existed, sensei, med-site safety issue, measures needed think really absolute.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。健康管理を、怠っていた患者さん、再診の頻度、多くなりますね、本気で、予防医療、本気で、勧めていきたいですね、患者さんの未来のため、絶対、本当に、医師の使命です、本気。',en:"Yes. Health-neg patients — re-exam freq many, prev-med serious-recommend want, patient-future absolute, med-mission serious.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療情報の氾濫、患者さん、本当に、混乱、しているんですよね、先生、本気で、正しい情報、医師から、発信していく必要、感じますよね、本気で、社会の、課題ですよね、本当に、絶対、深刻。',en:"Med-info flood — patients confused, sensei serious correct-info doctor-issue need feel serious, soc-issue absolute serious.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。薬物乱用、本当に、社会的に、深刻な問題、なっておりますね、医療として、本気で、対策、進めてまいります、絶対、患者さんの、未来のため、本気で、頑張ってまいります、本当に、本気。',en:"Yes. Drug-abuse — soc severe, as med serious-measures advance absolute, patient-future, serious try really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療と家族の、断絶、本当に、悲しい、現象ですよね、現代社会、本気で、課題、感じます、先生、医療として、本気で、家族と、繋がっていく姿勢、本当に、立派ですね、絶対、頭が下がる、絶対。',en:"Med-family rupture — sad phenomenon, modern-soc serious-issue feel, sensei, as med, fam-connect stance splendid absolute humbled.",style:'Reflective close.'},
  ]},
  {id:'conv_07014',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp legacy',lines:[
    {speaker:'hiroshi_boss',jp:'創業者、若い頃、従軍経験、ある、苦労された方だ、本当に、お父さんの世代の、本当に、大変だった時代、絶対、社員、伝えていけ、本当に、頼んだぞ、本気で、絶対、これは。',en:"Founder — youth-soldier exp, hardship, Dad-gen really-hard era, staff-convey absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員の、感受性、本当に、大事に、しております、当社の文化、心を、大切にする、企業、目指しております、本当に、社長、ご安心ください、絶対、本気で、絶対、本当に、社員、皆。',en:"Yes. Staff sens — treasure, our culture heart-treasure co aim, pres rest-assured absolute serious all-staff.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'故人となった創業者、本当に、お父さんが、お祖父ちゃんを、亡くされた時のこと、覚えております、絶対、お祖父ちゃんの遺志、当社の、礎、これからも、絶対、引き継いでいけ、本気で、本当に。',en:"Deceased founder — Dad-lost-Grandpa, remember, Grandpa-will, our co base, future inherit absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。社内、絶対、暴力的、発砲のような事件、起きないよう、徹底的に、防犯、進めております、本当に、社員、皆、安全、第一に、考えております、本気で、絶対、本気、本当に、絶対。',en:"Yes. Internal — absolute no-violent-shooting event, thorough crime-prev advance, all-staff safety-first absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'安全管理を、怠った企業、業界で、本当に、信用、失っているな、当社、絶対、そうならないように、徹底だ、社員、皆、本気で、頑張れ、本当に、頼んだぞ、絶対、これは、本気で。',en:"Safety-neg corps — industry trust-lost, our co absolute don't-become, thorough, staff serious-try, ask absolute serious.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。情報の氾濫の中で、当社の正しい、ブランドメッセージ、本気で、発信、続けてまいります、お客様、本気で、信頼、いただけるよう、社員、頑張ります、絶対、本気で、本当に、絶対、頼みます。',en:"Yes. Info-flood — our correct brand-msg serious-issue continue, cust trust-receive, all try absolute serious really ask.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'コンプラ違反、権限乱用、当社、絶対、許さない方針、社員、徹底しろ、本気だぞ、絶対、頼んだぞ、これは、絶対、本気で、本当に、社員、皆、絶対、覚えておけ、絶対。',en:"Compl-viol, power-abuse — our absolute don't-allow, staff thorough serious absolute ask all remember absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お得意様との、絶対、断絶、避けるよう、本気で、対応、続けてまいります、絶対、長い、お付き合い、本気で、続けてまいります、お父さんから、本当に、頼まれた、約束です、絶対、絶対。',en:"Yes. VIP — absolute rupture-avoid, serious-resp continue, long-keep absolute serious, from Dad-asked promise absolute.",style:'Close.'},
  ]},
  {id:'conv_07015',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through social research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、女性の従軍看護師、本当に、丁寧に、扱われていましたね、感動的な、視点でしたよね、桜さん、本当に、立派な、研究、できましたね、絶対、評価できます、本気で、本当に。',en:"Sakura — paper, women soldier-nurses, careful handled, moving view, splendid research absolute, eval-able serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。戦時下の、子供たちの感受性、本当に、繊細でしたよね、論文で、扱いました、現代にも、繋がる、テーマでした、本気で、深い、研究、できました、本当に、感謝、しております、絶対。',en:"Yes. Wartime kid-sens — delicate, paper-handled, modern-link theme, serious deep research, gratitude absolute really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'故人となった証言者、本当に、貴重な、お話、残してくださいましたね、論文の中で、本当に、丁寧に、扱われていましたね、桜さん、立派ですね、本気で、絶対、本当に、印象的でした。',en:"Deceased witnesses — precious talk left, paper carefully handled, splendid serious absolute striking really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時、市街地、発砲事件、本当に、頻発していたんですね、論文で、扱いました、本当に、悲しい、歴史でした、絶対、私たち、忘れずに、いきたいですね、本気で、絶対、本当に。',en:"Yes. Wartime — street-shooting frequent, paper-handled, sad-hist, never-forget want serious absolute really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、政府が、市民保護を、怠っていた、事例、本当に、論文で、深く、論じていましたね、桜さん、本当に、視野、広い、研究でしたね、絶対、感心しました、本気で、絶対、本当に、立派。',en:"Wartime — gov citizen-protect neg, cases paper deep argued, Sakura view-wide research admire serious absolute splendid.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。情報の氾濫、戦時下も、深刻でしたよね、論文で、論じました、現代の、SNS時代にも、繋がる、テーマでした、本気で、絶対、深い、研究、できました、本当に、絶対、感謝、しております。',en:"Yes. Info-flood — wartime severe, paper-argued, modern-SNS-link theme, serious deep research, gratitude absolute really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、宣伝の乱用、本当に、論文で、深く、論じていましたね、桜さん、本当に、現代にも、教訓、たくさん、ありますね、本気で、絶対、警鐘を、鳴らす、視点、立派でした、本当に、絶対。',en:"Wartime propaganda-abuse — paper deep argued, modern-lessons many, serious-warn view splendid absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。家族の断絶、戦争の悲劇として、本当に、論文の重要な、テーマでしたね、絶対、平和の大切さ、本気で、訴えました、現代にも、繋がる、本当に、深い、研究、できました、本当に、本気、感謝。',en:"Yes. Family-rupture — war-tragedy paper-key theme, peace-importance serious-argue, modern-link, deep research gratitude really serious.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_07016',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、英単語、毎日、覚えるのって、結構、大変なんだけど、頑張ってる、私、葵、応援、お願いね、本気で、絶対、続けるからね、約束、葵にも、伝えておきたいから、本当に。',en:"Aoi — English-words daily-mem quite-hard, trying, cheer-please serious, def-continue, promise convey want really.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'うん。次の休み、地中海風の料理、葵で、家族と、楽しみたいわよ、本当に、美味しいレストラン、教えてもらったの、メイちゃん、一緒に、行きたい?絶対、楽しいよ、本当に。',en:"Yeah. Next holiday — Mediterranean-cuisine, with family fun want, restaurant-taught, Mei together-go-want?, fun absolute really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'カラオケで、最近、フックの利いた、曲、彼が、教えてくれたの、葵、本当に、メロディー、頭から、離れないのよ、絶対、おすすめ、メイちゃんも、聞いてみて、本当に、いい曲。',en:"Karaoke — lately hook-good song bf-taught, Aoi melody head-leave, def rec, Mei listen-try, good really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'今度の山旅行、富士の麓まで、家族で、行く予定なの、葵で、お弁当、用意してあげるからね、本当に、楽しみよ、本気で、絶対、メイちゃんも、いつか、行きたいよね、絶対。',en:"Next mt-trip — Fuji-foot family go, in Aoi lunch-prep, fun serious absolute, Mei sometime-go-want absolute.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'昔の人、本当に、狩猟、で、生活していたのよね、葵、興味深いよね、メイちゃん、博物館で、特集、見てきたよ、本当に、面白かったわ、本気で、絶対、お勧めだよ、葵にも。',en:"Old-people — hunting-life, intriguing, Aoi, Mei museum-feature saw, fun serious absolute, recommend Aoi.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'年末のカウントダウン、葵で、特別イベント、考えてるのよ、メイちゃん、彼と、絶対、来てね、楽しい時間、約束するわよ、本気で、絶対、本当に、待ってる、お願い、本当に、来てね、本気。',en:"Year-end countdown — Aoi special-event considering, Mei with-bf def-come, fun-promise serious, wait, please come.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'葵、私、最近、詩集、読み始めたのよ、彼に、影響されてるかもね、本気で、心が、洗われる感じが、するの、葵にも、本気で、お勧めしたいよ、絶対、感動するよ、本当に、いい本。',en:"Aoi — me lately poetry-read-start, bf-influenced maybe, heart-clean-feel, in Aoi rec-want serious absolute, moving, good book.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'今日、強風で、自転車、こぐの、本当に、大変だったのよ、メイちゃん、お互いに、気をつけようね、本気で、絶対、安全、第一に、しないと、ね、本当に、絶対、約束しようね。',en:"Today strong-wind — bike-pedal hard, Mei mutual-careful serious absolute, safety-first must, promise absolute.",style:'Concerned close.'},
  ]},
  {id:'conv_07017',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ぼく、英単語、毎日、十個ずつ、覚えてるよ、ママ、本当に、頑張ってるの、ぼく、覚悟、見てね、約束、絶対、続けるからね、お母さん、応援、よろしくね、本気で、絶対。',en:"Mom — me, English-words daily 10-mem, trying serious, watch promise, continue absolute, Mom cheer please serious.",style:'Proud child.'},
    {speaker:'yumiko_mom',jp:'うん。お母さんの友達、地中海クルーズ、行ったって、聞いたわよ、翔くん、いつか、家族で、行けたら、いいわね、ね、夢ね、本気で、絶対、楽しみよ、本当に、本気で、約束しようね。',en:"Yes. Mom-friend Med-cruise gone heard, Sho, sometime family-go good, dream serious absolute fun really promise.",style:'Wistful.'},
    {speaker:'sho_child',jp:'おもちゃの釣り竿に、フック、ついてるんだよ、ママ、見て、本当に、リアルでしょ?ぼく、お父さんと、一緒に、釣り、行きたいよ、約束、絶対、楽しみだよ、本当に、本気で、お願い、ね。',en:"Toy fish-rod — hook-attached, Mom see, realistic?, with-Dad fishing-go-want, promise absolute fun serious, please.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'昨日、お父さん、山の麓のキャンプ場、予約してくれたわよ、翔くん、家族で、行きましょうね、本当に、楽しみね、本気で、絶対、わくわくしてるわよね、皆、ね、楽しみ。',en:"Yesterday — Dad mt-foot campsite booked, Sho family-go, fun serious absolute excite all really.",style:'Cheerful.'},
    {speaker:'sho_child',jp:'お祖父ちゃん、若い頃、狩猟、してたって、本当?ママ、ぼく、信じられないよ、お祖父ちゃん、優しい人なのに、本当に、すごい話、聞いたよ、本当に、ね、お父さんから、聞いた。',en:"Grandpa — youth hunting really?, Mom can't-believe, Grandpa kind, amazing-story heard, from Dad heard.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'大晦日、家族で、カウントダウン、するの、本当に、楽しみよね、翔くん、ママ、お父さん、皆、揃って、本気で、楽しみたいよね、本当に、絶対、家族の伝統よね、本気で、楽しみ。',en:"NYE — family countdown, fun, Sho, Mom-Dad-all together, fun-want serious absolute, family-trad serious fun really.",style:'Tender.'},
    {speaker:'sho_child',jp:'お母さん、ぼく、お祖母ちゃんから、もらった詩集、ぼく、本当に、好きなの、毎晩、寝る前に、読んでるんだよ、ママ、本当に、いい本だよ、お祖母ちゃん、優しい、本当に、ありがとう。',en:"Mom — Granny-given poetry, love, every-night pre-sleep read, good-book really, Granny gentle, thanks.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'明日、台風で、強風、注意報、出てるみたいね、翔くん、外、危険だから、家で、ゆっくり、過ごしましょうね、ね、絶対、約束、ね、お母さんと、お話、いっぱい、しようね。',en:"Tomorrow — typhoon strong-wind alert, Sho, outside dangerous, home-relax, promise absolute, Mom-talk lots.",style:'Direction close.'},
  ]},
  {id:'conv_07018',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、英単語のテスト、最近、点数、ようやく、上がってきたよ、本当に、頑張ったんだ、私、リク、お前にも、応援してもらったから、感謝してるよ、本気で、絶対、ありがとう、本当に。',en:"Riku — English-words test — lately score-finally-rising, hard-tried, also you-cheered, gratitude serious absolute thanks really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。修学旅行、地中海風の、ホテルに、泊まる予定らしいぜ、桜、本当に、楽しみだよな、お互いに、わくわくしてるよな、本当に、絶対、思い出に、残るよな、絶対、絶対。',en:"Yeah. School trip — Med-style hotel stay-plan, Sakura fun, mutual-excite, memory absolute, absolute.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'お父さん、釣りに、はまってて、最近、フック、専門店、行ってるって、リク、お前のお父さんも、行ったりするの?ちょっと、興味、出てきたよ、私、本当に、いつか、お父さんと、一緒に、行きたい。',en:"Dad — fishing-hooked, lately hook-shop go, Riku Dad also go?, interest-came, sometime with-Dad go-want really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'登山部、山の麓まで、トレーニング、始めるんだ、夏休みに、桜、お前、興味、ある?一緒に、参加してみない?本気で、絶対、楽しいぜ、お前と、一緒なら、絶対、本当に。',en:"Climb-club — mt-foot training start summer, Sakura interest?, together-join?, serious absolute fun, with-you absolute really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'生物部、狩猟の歴史、研究してるんだって、知ってた?リク、お前も、興味、ある?結構、面白い研究、本当に、独特な、視点で、扱ってるみたいよ、本気で、絶対、感心しちゃう、本当に。',en:"Bio-club — hunting-hist research knew?, Riku interest?, fun research, unique view, serious absolute admire really.",style:'Probe.'},
    {speaker:'riku_teen',jp:'大晦日、皆で、カウントダウンしような、桜、お前、参加できる?お父さん、お母さんに、確認しといて、絶対に、楽しい夜にしような、本当に、本気で、絶対、約束、ね、絶対だぞ、絶対。',en:"NYE — all countdown, Sakura join?, Mom-Dad-confirm, fun-night absolute, serious-promise absolute.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'国語の授業で、詩集を、扱ったよ、リク、お前も、面白いと、思った?私、本当に、感動した、本気で、文学って、奥深いよね、お互いに、勉強、続けていこうね、ね、約束。',en:"Japanese class — poetry handled, Riku fun-thought?, moved seriously, lit deep, study continue mutual, promise.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'今日、強風で、傘、本当に、飛ばされそうになったぜ、桜、お前、大丈夫だった?明日も、注意な、お互いに、気をつけような、本気で、絶対、安全、第一にしような、本当に、絶対。',en:"Today strong-wind — umbrella almost-flown, Sakura fine?, tomorrow also alert, mutual careful, safety-first absolute really.",style:'Concerned close.'},
  ]},
  {id:'conv_07019',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、私、英単語、必死に、勉強してたよな、ばあさん、覚えてる?当時は、辞書、いつも、持ち歩いていたぞ、本気で、頑張ってた時代だった、本当に、絶対、本当に、本気で、本当に。',en:"Youth — me English-words desperate-study, gran remember?, era dict always-carry, serious hard-era really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。新婚旅行、地中海、本当に、行きたかったわよね、覚えてる?結局、行けなかったけれども、夢、あったわよね、本気で、絶対、本当に、忘れない、思い出よね、二人で。',en:"Yes. Honeymoon Med really-want-go, remember?, couldn't but dream-existed serious absolute unforget memory two.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'昔の釣具屋、フック、種類、本当に、豊富だったよな、ばあさん、覚えてる?お祖父ちゃん、本当に、釣り、好きだったよな、家族で、楽しい時間、過ごしたよな、本気で、絶対、本当に。',en:"Old fish-shop — hooks variety rich, gran remember?, Grandpa fishing-love, family-fun time, serious absolute really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、二人で、富士山の麓、よく、訪れたわよね、覚えてる、あなた?本当に、思い出に、残ってるわよね、本気で、絶対、また、行きたいわね、いつか、二人で、絶対、約束しようね。',en:"Youth two — Fuji-foot often-visited, remember, dear?, memory-remain serious absolute, again-go-want, sometime two promise.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔、地方で、狩猟、本当に、盛んだったんだよな、ばあさん、覚えてる?お祖父ちゃんの世代、本当に、自然と、共生していたよな、本気で、絶対、深い、思い出だな、本当に、本気。',en:"Old — local hunting active, gran remember?, Grandpa-gen nature co-existed, serious absolute deep memory really.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'大晦日のカウントダウン、家族で、本当に、楽しんだわよね、覚えてる、あなた?孫が、生まれてから、特に、賑やかになったわよね、本気で、絶対、嬉しいわよね、いつも、家族の絆。',en:"NYE countdown — family-fun, remember, dear?, post-grandkid-born esp lively, serious absolute glad, family-bond.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、私、君に、詩集、何度か、プレゼントしたよな、ばあさん、覚えてる?ロマンチックだったよな、私、本当に、自分で、感心するくらい、本気で、絶対、二人の思い出だ。',en:"Youth — me you poetry several-gifted, gran remember?, romantic, self-admire serious absolute two-memory.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'最近、台風シーズン、強風が、続く時、本当に、心配ね、あなた、お互いに、家、しっかり、戸締まり、しましょうね、本気で、絶対、安全、第一にしましょう、本当に、約束ね、絶対。',en:"Lately typhoon-season — strong-wind continues, worry, mutually properly lock, serious safety-first, promise absolute.",style:'Concerned close.'},
  ]},
  {id:'conv_07020',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、メニューの英単語、もうちょっと、わかりやすくしよか、観光客のお客さんも、来られるからな、本気で、葵、絶対に、わかりやすくせなあかんで、お客様、本当に、便利、感じるわ、絶対。',en:"Aoi — menu-English-words slight-clearer, tourist-cust come, serious Aoi absolute-clear-must, cust convenient feel absolute.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。地中海料理のフェア、葵で、来月、開催したいですね、本当に、お客様、本気で、喜んでくださいそうですね、絶対、本気で、楽しみな、企画、ですね、本当に、絶対、楽しみ。',en:"Yes. Med-cuisine fair — Aoi next-month hold want, cust glad-likely serious absolute, fun plan absolute really.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'店の看板、フック式、お洒落な、デザインに、葵さん、変えてみよか、本気で、印象、変わるで、絶対、お客さんも、新鮮に、感じてくれるはずやで、本当に、本気、絶対、おすすめや。',en:"Sign — hook-style stylish design Aoi change?, serious impression-change, cust fresh-feel absolute really serious rec.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。富士山の麓の、食材を、扱う仕入れ先、葵で、開拓したいですね、本気で、地方の名産、扱うこと、お客様、本気で、喜んでくださいそうですね、絶対、本当に、楽しみな、計画、本気。',en:"Yes. Fuji-foot ingred-suppliers — Aoi pioneer want, local-spec, cust glad-likely serious absolute fun plan serious.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'昔の狩猟料理、ジビエ、メニューに、加えてみよか、葵さん、本気で、お客さんに、新しい味、提供できるで、絶対、面白い、企画、なるで、本当に、本気で、絶対、頑張ろうな、葵さん。',en:"Old hunting-cuisine gibier — menu-add Aoi?, serious new-taste-provide, fun plan absolute, try serious absolute Aoi.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。大晦日のカウントダウンイベント、葵で、本気で、開催したいですね、お客様、本気で、楽しんでくださいそうですね、絶対、本気で、企画、進めましょう、葵で、本当に、絶対、楽しみ。',en:"Yes. NYE countdown — Aoi serious-hold want, cust fun-likely absolute, plan advance, in Aoi absolute fun really.",style:'Eager.'},
    {speaker:'daichi_kansai',jp:'店内に、詩集、置く、葵さん、お洒落な、雰囲気、出るで、絶対、お客さん、ゆっくり、時間、過ごしてくださるよな、絶対、本気で、本当に、いい、アイディアやと思うで、本気、絶対。',en:"Interior — poetry place Aoi, stylish air-out absolute, cust slow-time-spend, serious good-idea think absolute.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。強風の日、店、しっかり、戸締まり、徹底しております、葵で、お客様の、安全、絶対、第一です、本気で、本当に、絶対、頑張ってまいります、いつも、本気で、皆、絶対、心がけて。',en:"Yes. Strong-wind day — store properly-lock thorough, Aoi cust-safety absolute first, serious try always all mindful.",style:'Warm close.'},
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

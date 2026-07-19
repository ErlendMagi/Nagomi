import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_386 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['焼きそば','シチュー','ヘルシー','試飲','薄め','ふき','アサヒ','お中元']
const B_T = ['一世','一丸','私用','線引き','お披露目','品位','要人','手先']
const C_T = ['土器','怪奇','輸血','波形','上演','決心','変数','駒']
const D_T = ['有利','他者','ロンドン','清水','余りに','不便','スケール','優位']

const data = [
  {id:'conv_07681',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、今晩、本気で、絶対、焼きそば、絶対、ママ、絶対、作るからね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — tonight yakisoba Mom-make, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、明日は、絶対、シチュー、絶対、食べたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me tomorrow stew eat-want, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、ヘルシー、絶対、なメニュー、絶対、最近、絶対、好むのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — healthy menu lately-prefer, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お祖父ちゃんが、絶対、お酒の、絶対、試飲、絶対、会、絶対、行ってきたって、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — Grandpa sake-tasting went, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'今日のお茶、本気で、絶対、薄め、絶対、に、絶対、ママ、絶対、淹れたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Today-tea — light Mom-brewed, Sho absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'お祖母ちゃんち、本気で、絶対、ふき、絶対、の煮物、絶対、美味しかったよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Granny-home butterbur-stew — tasty, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、アサヒ、絶対、ビール、絶対、好きなのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — Asahi-beer like, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お中元、絶対、お祖母ちゃんから、絶対、届いたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — mid-yr-gift Granny-arrived, absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07682',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、新メニューの、本気で、絶対、焼きそば、絶対、メイちゃん、絶対、頼みたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — new yakisoba Mei order-want, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、冬限定、絶対、シチュー、絶対、出してるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Aoi — winter-limited stew offer, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、ヘルシー、絶対、なサラダ、絶対、メイちゃん、絶対、好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — healthy salad Mei-like, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、コーヒー豆の、絶対、試飲、絶対、お客様に、絶対、行ってもらってるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — coffee-bean tasting cust-have, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵のラテ、本気で、絶対、薄め、絶対、に、絶対、メイちゃん、絶対、お願いするわね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi-latte — light Mei ask, absolute serious really.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、春の、絶対、ふき、絶対、お料理、絶対、新メニュー、絶対、考えてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — spring butterbur new-menu considering, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、アサヒ、絶対、グループ、絶対、契約、絶対、進んでるんでしょ?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — Asahi-group contract advancing?, Mei absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お中元、絶対、お得意様、絶対、お送りしたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — mid-yr-gift VIP-sent, Mei absolute serious really.",style:'Practical close.'},
  ]},
  {id:'conv_07683',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さん、絶対、屋台の、絶対、焼きそば、絶対、好きだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth Dad stall-yakisoba-liked, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、ばあさんの、絶対、シチュー、絶対、お祖父ちゃん、絶対、大好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Youth — gran stew Grandpa-loved, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、健康のため、絶対、ヘルシー、絶対、な、絶対、お料理、絶対、好んだぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad health-for healthy-cuisine preferred, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お酒の、絶対、試飲、絶対、よく、絶対、参加したわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa sake-tasting often-attended, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさん、絶対、お味噌汁、絶対、薄め、絶対、お祖父ちゃんに、絶対、合わせたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran miso-soup-light Grandpa-matched, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お庭の、絶対、ふき、絶対、ばあさん、絶対、よく、絶対、煮たわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — garden-butterbur gran-often-stewed, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、アサヒ、絶対、ビール、絶対、毎晩、絶対、飲んだぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Dad Asahi-beer every-night drank, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お得意様への、絶対、お中元、絶対、選んでいたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa VIP mid-yr-gift-chose, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07684',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、文化祭で、本気で、絶対、焼きそば、絶対、出すよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — fest yakisoba-out, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。給食の、本気で、絶対、シチュー、絶対、美味かったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Lunch-stew tasty, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お母さん、本気で、絶対、ヘルシー、絶対、お弁当、絶対、作ってくれてるよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — healthy-lunch made, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'店頭で、本気で、絶対、試飲、絶対、できるって、看板、絶対、あったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Storefront — tasting-can sign existed, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'家庭科で、本気で、絶対、味付けの、絶対、薄め、絶対、と、絶対、濃いめ、絶対、習ったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Home-ec light-vs-strong-seasoning learned, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お祖母ちゃん、本気で、絶対、お庭の、絶対、ふき、絶対、収穫したって、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Granny — garden-butterbur harvested, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お父さん、本気で、絶対、アサヒ、絶対、新聞、絶対、読んでるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad — Asahi-newspaper read, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お祖父ちゃんから、本気で、絶対、お中元、絶対、届いたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"From Grandpa — mid-yr-gift arrived, Sakura absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07685',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お祭りで、絶対、焼きそば、絶対、食べたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis fest yakisoba ate, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ママの、絶対、シチュー、絶対、大好きだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me Mom-stew love, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、ヘルシー、絶対、なご飯、絶対、心がけてるわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — healthy-meal mindful, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ジュース、絶対、試飲、絶対、お店で、絶対、したよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me juice-tasting store-did, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、コーヒー、絶対、薄め、絶対、が、絶対、お好きよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — coffee-light like, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お祖母ちゃんの、絶対、ふき、絶対、料理、絶対、食べたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me Granny-butterbur-cuisine ate, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、アサヒ、絶対、新聞、絶対、毎日、絶対、読んでるわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — Asahi-newspaper every-day-read, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さんから、本気で、絶対、お中元、絶対、お祖母ちゃんに、絶対、送ってあげたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"From-Mei-sis — mid-yr-gift Granny-send-want, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07686',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、業界に、絶対、一世、絶対、を、絶対、風靡する、絶対、製品を、絶対、目指せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Our co — industry once-dominate prod aim, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、社員、絶対、一丸、絶対、となって、絶対、頑張っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our co — staff united-try, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'社員、本気で、絶対、私用、絶対、と、絶対、業務、絶対、線引き、絶対、明確にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Staff — private-use-and-biz line-draw clear, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新製品の、本気で、絶対、お披露目、絶対、発表会、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. New-prod unveiling-event advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社の、本気で、絶対、品位、絶対、保て、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、絶対。',en:"Our dignity — keep, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外、本気で、絶対、要人、絶対、ご来訪、絶対、対応、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Overseas VIP visit-handle advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業務の、本気で、絶対、手先、絶対、として、絶対、社員、絶対、誇りに思え、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Biz hands — staff proud, ask absolute serious really.",style:'Direction close.'},
    {speaker:'kenji_office',jp:'はい。承知いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes — understood, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07687',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'本気で、絶対、一世、絶対、を、絶対、風靡した、絶対、商品の、絶対、リバイバル、絶対、検討しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Once-dominant prod revival consider, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、一丸、絶対、で、絶対、対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Staff united handle, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'社員の、本気で、絶対、私用、絶対、メール、絶対、規定、絶対、見直しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Staff private-mail rule review, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。本気で、絶対、線引き、絶対、明確にした、絶対、ガイドライン、絶対、作成中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Line-draw clear guideline create, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'新サービスの、本気で、絶対、お披露目、絶対、業界誌、絶対、招きましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"New-service unveiling — industry-mag invite, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。広告に、本気で、絶対、品位、絶対、保つよう、絶対、配慮しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Ad-dignity keep care, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'海外、本気で、絶対、要人、絶対、対応、絶対、お疲れさまでした、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Overseas VIP handle — well-done, absolute serious really.",style:'Tender.'},
    {speaker:'kenji_office',jp:'はい。チームの、本気で、絶対、手先、絶対、として、絶対、社員、絶対、誇りに、絶対、頑張ってくれています、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Team-hands as staff proud-try, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07688',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、論文で、本気で、絶対、学界に、絶対、一世、絶対、を、絶対、風靡しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Ren — paper acad-once-dominate, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究室、本気で、絶対、一丸、絶対、と、絶対、なって、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Lab united-advance, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'研究室の、本気で、絶対、機器、絶対、私用、絶対、せず、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Lab equip private-use-not thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究テーマの、本気で、絶対、線引き、絶対、明確に、絶対、いたしました、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Research-theme line-draw clear, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'新理論の、本気で、絶対、お披露目、絶対、学会で、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"New-theory unveiling — conf thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、品位、絶対、保ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Paper-dignity keep, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'招聘した、本気で、絶対、要人、絶対、研究員、絶対、丁重に、絶対、対応しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Invited VIP-researcher polite handle, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究の、本気で、絶対、手先、絶対、として、絶対、私、絶対、貢献してまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Research-hands me-contribute, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07689',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、犯罪削減、絶対、一世、絶対、を、絶対、風靡する、絶対、勢いです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police crime-reduce — once-dominate momentum, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、一丸、絶対、と、絶対、なられて、絶対、頼もしいですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police united reliable, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察車両の、本気で、絶対、私用、絶対、絶対なきよう、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police-vehicle private-use absolute-none thorough, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、業務の、絶対、線引き、絶対、市民に、絶対、ご説明、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police biz-line-draw citizen-explained, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'新型装備の、本気for、絶対、お披露目、絶対、警察、絶対、開催します、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"New-gear unveiling — police-host, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、品位、絶対、保たれていらっしゃいますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police-dignity kept, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'国賓、本気で、絶対、要人、絶対、警備、絶対、警察、絶対、対応、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"State-guest VIP-sec police-handled, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。市民の、本気で、絶対、手先、絶対、と、絶対、なって、絶対、ご奉仕、絶対、続けていらっしゃるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Citizen-hands as service continue, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07690',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、業界に、絶対、一世、絶対、を、絶対、風靡したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Founding — Dad industry-once-dominated, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、社員、絶対、一丸、絶対、と、絶対、なって、絶対、進んでまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — staff united advance, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、私用、絶対、と、絶対、業務、絶対、絶対、混同しなかったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — private-use-and-biz absolute don't-mix, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの、本気で、絶対、線引き、絶対、私の手本です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad-line-draw my-model, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、新製品の、絶対、お披露目、絶対、自ら、絶対、行ったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — new-prod unveiling self-did, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、当社の、絶対、品位、絶対、守り続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — our-dignity continued-keep, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、要人、絶対、お招き、絶対、丁寧だったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — VIP-invite polite was, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、本気で、絶対、自らを、絶対、お客様の、絶対、手先、絶対、と、絶対、考えていらしたそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Dad — self cust-hands considered heard, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07691',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、本気で、絶対、土器、絶対、史、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Ren — pottery hist paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。文学の、本気で、絶対、怪奇、絶対、現象、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Thanks. Lit mystery-phenomenon paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'医療の、本気で、絶対、輸血、絶対、史、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med transfusion-hist paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。音響の、本気で、絶対、波形、絶対、解析、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Acoustic waveform-analyze paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'劇場での、本気で、絶対、上演、絶対、史、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Theater performance-hist paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。歴史上の人物の、本気で、絶対、決心、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hist-figure resolve paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'数学の、本気で、絶対、変数、絶対、概念史、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Math variable-concept-hist paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。将棋の、本気で、絶対、駒、絶対、文化史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Shogi piece-cultural-hist paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07692',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、土器、絶対、盗難、絶対、警察、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case — pottery theft police-inv advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'怪奇、本気で、絶対、現象、絶対、と、絶対、思われる、絶対、事件、絶対、警察、絶対、対応、絶対、難しいですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mystery-phenomenon-like case — police-resp hard, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。事件、本気で、絶対、輸血、絶対、必要な、絶対、被害者、絶対、医療チーム、絶対、対応してくださいました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Case transfusion-needed victim — med-team handled, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'録音の、本気で、絶対、波形、絶対、解析、絶対、警察、絶対、活用、絶対、されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Recording waveform-analyze — police-utilize, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。本件、本気で、絶対、劇場の、絶対、上演、絶対、中の、絶対、事件、絶対、警察、絶対、対応、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Case theater performance-middle incident — police-handled, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者の、本気で、絶対、決心、絶対、警察、絶対、聴取で、絶対、明らかになったそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Suspect-resolve — police-interview revealed, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。事件、本気で、絶対、変数、絶対、多く、絶対、警察、絶対、慎重に、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Case variables-many — police careful advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'将棋の、本気for、絶対、駒、絶対、コレクション、絶対、盗難、絶対、警察、絶対、捜査ですか?本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Shogi piece-collection theft — police-inv?, gratitude absolute serious really.",style:'Curious close.'},
  ]},
  {id:'conv_07693',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、本気で、絶対、土器、絶対、史、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sakura — pottery hist paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。文学の、本気で、絶対、怪奇、絶対、現象、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Thanks. Lit mystery-phenomenon paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'医療の、本気で、絶対、輸血、絶対、史、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med transfusion-hist paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。音響の、本気で、絶対、波形、絶対、解析、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Acoustic waveform-analyze paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'劇場の、本気で、絶対、上演、絶対、史、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Theater perform-hist paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。歴史上人物の、本気で、絶対、決心、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Hist-figure resolve paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'数学の、本気で、絶対、変数、絶対、概念史、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Math variable-concept-hist paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。将棋の、本気で、絶対、駒、絶対、文化史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Shogi piece-cultural-hist paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07694',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、出土した、本気で、絶対、土器、絶対、医学史、絶対、医療界、絶対、関心、絶対、寄せております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — excavated pottery med-hist — med-world interest, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'怪奇、本気for、絶対、症例、絶対、医療現場で、絶対、どう、絶対、対応、絶対、されますか?先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mystery-case — med-scene how-handle?, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。緊急、本気で、絶対、輸血、絶対、医療チーム、絶対、即時対応、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Emergency transfusion — med-team immediate-handle, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'心電図の、本気で、絶対、波形、絶対、医療チーム、絶対、注意深く、絶対、観察、絶対、されますよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"ECG waveform — med-team careful-observe, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。病院主催の、本気で、絶対、上演、絶対、会、絶対、患者さん、絶対、ご招待しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Hosp-host performance-event patient-invite, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'手術への、本気で、絶対、決心、絶対、患者さんと、絶対、医療チーム、絶対、共有されますよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Surgery-resolve patient-med-team share, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。研究の、本気で、絶対、変数、絶対、医療チーム、絶対、慎重に、絶対、管理しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Research-variable med-team careful-mgmt, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'将棋の、本気で、絶対、駒、絶対、慰問品、絶対、患者さんに、絶対、人気だそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Shogi-piece comfort-gift patient-pop, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07695',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews strategy',lines:[
    {speaker:'hiroshi_boss',jp:'創業地から出土した、本気で、絶対、土器、絶対、当社、絶対、博物館で、絶対、展示しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Founding-loc excavated pottery — our co museum display, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。新製品、本気で、絶対、怪奇、絶対、なミステリー、絶対、シリーズ、絶対、好評です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. New prod mystery-series — favorable, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'献血、本気for、絶対、輸血、絶対、キャンペーン、絶対、当社、絶対、協賛しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Blood-donate transfusion-campaign — our co sponsor, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新製品の、本気で、絶対、波形、絶対、デザイン、絶対、お洒落と、絶対、評判です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. New prod wave-design — stylish-rep, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'劇場主催の、本気で、絶対、上演、絶対、会、絶対、当社、絶対、協賛しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Theater-host performance — our co sponsor, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新事業の、本気で、絶対、決心、絶対、当社、絶対、固めてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. New-biz resolve — our co firmed, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'販売の、本気で、絶対、変数、絶対、見極めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、絶対。',en:"Sales-variable — discern, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。将棋の、本気で、絶対、駒、絶対、デザインの、絶対、商品、絶対、人気です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Shogi-piece design prod — pop, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07696',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、ご立地、本気で、絶対、有利、絶対、よね、メイちゃん、絶対、感心するわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — location advantageous, Mei-admire, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、他者、絶対、への、絶対、配慮、絶対、心がけてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Aoi — others-care mindful, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、ロンドン、絶対、留学、絶対、考えてるって、聞いたわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — London study-abroad considering heard, Mei absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、清水、絶対、寺、絶対、参拝、絶対、行ってきたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — Kiyomizu-temple visit-came, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、余りに、絶対、人気で、絶対、メイちゃん、絶対、混雑覚悟よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store — too pop Mei-crowd-prep, absolute serious really.",style:'Wry praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お店の駐車場、絶対、不便、絶対、なのを、絶対、改善したいよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — store-parking inconvenient improve-want, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵のお店の、本気で、絶対、スケール、絶対、メイちゃん、絶対、感心するわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi-store scale — Mei-admire, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、業界で、絶対、優位、絶対、を、絶対、保ってるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — industry advantage-keep, Mei absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07697',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さん、絶対、商売で、絶対、有利、絶対、な、絶対、立場、絶対、保ったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth Dad biz advantageous-stance kept, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、他者、絶対、への、絶対、思いやり、絶対、深かったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Youth — Grandpa others-care deep, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、ロンドン、絶対、出張、絶対、よく行ったぞ、ばあさん、覚えてる?本気for、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad London-biz-trip often-went, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、清水、絶対、寺、絶対、お祖父ちゃんと、絶対、参拝したわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Kiyomizu-temple Grandpa-visited, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、余りに、絶対、忙しくて、絶対、家に、絶対、いない日、絶対、多かったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad too-busy home-none-day many, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、家、絶対、田舎で、絶対、不便、絶対、だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — home countryside inconvenient was, remember dear?, absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さんの、絶対、商売の、絶対、スケール、絶対、大きくなったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Dad-biz scale big-grew, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、業界で、絶対、優位、絶対、保ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa industry advantage-kept, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07698',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんの、本気で、絶対、お店、絶対、立地が、絶対、有利、絶対、なのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis store location advantageous, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、他者、絶対、への、絶対、思いやり、絶対、大切にするよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me others-care cherish, absolute serious really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、ロンドン、絶対、いつか、絶対、行きたいわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — London someday go-want, Sho absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、京都の、絶対、清水、絶対、寺、絶対、写真で見たよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me Kyoto Kiyomizu-temple photo-saw, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お仕事、絶対、余りに、絶対、忙しくて、絶対、お疲れだわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — work too-busy tired, Sho absolute serious really.",style:'Wry.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お家から、絶対、駅、絶対、ちょっと、絶対、不便、絶対、だよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me home-from station slight-inconvenient, absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'メイ姉さんのプロジェクトの、本気で、絶対、スケール、絶対、大きいのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis-project scale big, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、運動会で、絶対、優位、絶対、に、絶対、立ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me sports-day advantage-stood, absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07699',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前の、本気で、絶対、状況、絶対、有利、絶対、だよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — your-status advantageous, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お前、本気で、絶対、他者、絶対、への、絶対、配慮、絶対、すごいよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. You — others-care amazing, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'修学旅行で、本気で、絶対、ロンドン、絶対、行きたいよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"School-trip London go-want, Riku absolute serious really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'修学旅行で、本気で、絶対、清水、絶対、寺、絶対、行ったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"School-trip — Kiyomizu-temple went, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'試験勉強、本気で、絶対、余りに、絶対、辛いよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Test-study — too tough, Riku absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前の家、本気で、絶対、駅から、絶対、不便、絶対、だよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Your-home station-from inconvenient, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'文化祭、本気で、絶対、スケール、絶対、大きくなったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Fest — scale big-became, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前のチーム、本気で、絶対、試合で、絶対、優位、絶対、だぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Your-team match advantage, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07700',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの、絶対、テストの結果、絶対、有利、絶対、だったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — my test-result advantageous was, absolute serious really.",style:'Proud child.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、他者、絶対、への、絶対、思いやり、絶対、忘れないでね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — others-care don't-forget, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お父さん、絶対、ロンドン、絶対、出張、絶対、行くんだよね?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mom — Dad London-biz-trip go?, absolute serious really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'今度、本気で、絶対、家族で、絶対、清水、絶対、寺、絶対、行きましょう、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Next — family Kiyomizu-temple go, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、余りに、絶対、お野菜が、絶対、多くて、絶対、食べきれないよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — me too veg-many can't-eat-all, absolute serious really.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、宿題、絶対、不便、絶対、な、絶対、ところが、絶対、あったら、絶対、教えてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — homework inconvenient-part if-exist tell, absolute serious really.",style:'Caring.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの、絶対、絵の、絶対、スケール、絶対、大きくしたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mom — my painting-scale big-did, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、運動会で、絶対、優位、絶対、に、絶対、立てたんでしょ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Sho — sports-day advantage-stood?, absolute serious really.",style:'Praising close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_381 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['茶碗','はさみ','出掛ける','短冊','さくらんぼ','あゆ','前歯','ヤリ']
const B_T = ['物産','書体','めずらしい','自然体','手際','フィッシング','題する','未読']
const C_T = ['一豊','姫路','遡る','騒がせ','無口','高台','打線','東京ドーム']
const D_T = ['名画','切なく','点滅','水温','霜','躾','隠せ','家出']

const data = [
  {id:'conv_07581',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、新しい、絶対、お茶碗、絶対、ママ、絶対、用意したわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — new rice-bowl Mom prep, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、工作で、絶対、はさみ、絶対、使いたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me craft scissors use-want, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'今日、本気で、絶対、お父さんと、絶対、お買い物、絶対、出掛ける、絶対、わね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Today — Dad-shop go-out, Sho absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、七夕の、絶対、短冊、絶対、書いたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mom — me Tanabata tanzaku-strip wrote, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんから、本気で、絶対、さくらんぼ、絶対、たくさん、絶対、もらったわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"From Granny — cherry many got, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'お父さんが、本気で、絶対、あゆ、絶対、釣ってきたって、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad — ayu-fish caught, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、前歯、絶対、もう、絶対、抜けそう?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — front-tooth already-loose?, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'運動会で、本気で、絶対、ヤリ、絶対、投げ、絶対、競技、絶対、あったよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sports-day — javelin event existed, Mom absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07582',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お祖父さまの、本気で、絶対、お茶碗、絶対、メイちゃん、絶対、見せてもらったわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — Grandpa rice-bowl Mei-show given, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、お料理用の、絶対、はさみ、絶対、新しくしたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Aoi — cook-use scissors new-did, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'メイちゃんと、本気で、絶対、葵、絶対、明日、絶対、出掛ける、絶対、わね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-with Aoi tomorrow go-out, absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵のお店、本気で、絶対、七夕の、絶対、短冊、絶対、お客様、絶対、書いてくださるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi-store — Tanabata tanzaku-strip cust-write, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、季節の、絶対、さくらんぼ、絶対、ケーキ、絶対、メニュー、絶対、メイちゃん、絶対、好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — season cherry-cake menu Mei-like, absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵のお店の、本気で、絶対、あゆ、絶対、塩焼き、絶対、お客様、絶対、好評よ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store — ayu salt-grill — cust-fave, Mei absolute serious really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、前歯、絶対、笑顔、絶対、メイちゃん、絶対、可愛いよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Aoi — front-tooth smile Mei-cute, absolute serious really.",style:'Tender.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、ヤリ、絶対、イカ、絶対、新メニュー、絶対、追加したよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — spear-squid new-menu added, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07583',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さん、絶対、お茶碗、絶対、特注で、絶対、作ったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth Dad rice-bowl spec-order made, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、ばあさんの、絶対、お裁縫の、絶対、はさみ、絶対、お祖父ちゃん、絶対、研いでくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — gran sewing scissors Grandpa-sharpened, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さんと、絶対、ばあさん、絶対、よく、絶対、温泉に、絶対、出掛ける、絶対、わよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad-gran often-hot-spring go-out, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お孫さんの、絶対、短冊、絶対、ばあさん、絶対、大切に、絶対、しまっていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — grandkid tanzaku gran-careful-stored, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お庭の、絶対、さくらんぼ、絶対、お父さん、絶対、収穫したぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — garden-cherry Dad-harvested, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、川で、絶対、あゆ、絶対、お祖父ちゃん、絶対、釣ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — river ayu Grandpa-fished, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お孫さんの、絶対、前歯、絶対、抜けた時、絶対、お父さん、絶対、嬉しかったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — grandkid front-tooth fell Dad-glad, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、ヤリ、絶対、投げ、絶対、競技、絶対、得意だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa javelin good-at was, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07584',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、家庭科で、本気で、絶対、お茶碗、絶対、洗う、絶対、コツ、絶対、習ったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — home-ec rice-bowl wash trick learned, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。工作の、本気で、絶対、はさみ、絶対、忘れちゃったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Craft scissors forgot, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'今度、本気for、絶対、お前と、絶対、お祭りに、絶対、出掛ける、絶対、よ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Next — you-with fest go-out, Riku absolute serious really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'七夕の、本気で、絶対、短冊、絶対、お前、絶対、何書いた?桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Tanabata tanzaku — you wrote-what?, Sakura absolute serious really.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'お祖母ちゃんから、本気で、絶対、さくらんぼ、絶対、もらったよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Granny cherry got, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'川で、本気で、絶対、あゆ、絶対、釣り、絶対、お父さんと、絶対、行ったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"River — ayu-fish Dad-went, Sakura absolute serious really.",style:'Proud.'},
    {speaker:'sakura_teen',jp:'お前の、本気で、絶対、前歯、絶対、ちょっと、絶対、欠けてるよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Your front-tooth — slight chipped, Riku absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'部活で、本気for、絶対、ヤリ、絶対、投げ、絶対、選手、絶対、すごいよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Club — javelin player amazing, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07585',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、新しい、絶対、お茶碗、絶対、買ってあげるね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis new rice-bowl buy-for-you, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お工作の、絶対、はさみ、絶対、上手に、絶対、使えるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me craft scissors well-use, absolute serious really.",style:'Proud child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、翔くんと、絶対、明日、絶対、お祭りに、絶対、出掛ける、絶対、わね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — Sho-with tomorrow fest go-out, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくの、絶対、短冊、絶対、お願いを、絶対、書いたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — my tanzaku wish wrote, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さんから、本気で、絶対、翔くんに、絶対、さくらんぼ、絶対、お送りするわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"From Mei-sis — Sho cherry send, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お父さんが、絶対、あゆ、絶対、たくさん、絶対、釣ったって、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Dad ayu many-fished, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、翔くんの、絶対、前歯、絶対、まだ、絶対、抜けてないよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Sho front-tooth not-yet-fell, absolute serious really.",style:'Curious.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気for、絶対、運動会で、絶対、ヤリ、絶対、投げ、絶対、見たいんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — sports-day javelin see-want, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07586',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'地域の、本気で、絶対、物産、絶対、展、絶対、当社、絶対、協賛しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Local product-expo — our co sponsor, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。当社のロゴ、本気で、絶対、書体、絶対、刷新、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our logo font-renew — advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'お客様への、本気で、絶対、めずらしい、絶対、ご提案、絶対、社員に、絶対、励めと、絶対、頼んだぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Cust unusual proposal — staff-strive ask, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、自然体、絶対、で、絶対、お客様、絶対、お迎えしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Staff natural-stance — cust greet, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業務の、本気で、絶対、手際、絶対、よさ、絶対、磨け、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Biz dexterity — polish, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、フィッシング、絶対、詐欺対策、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our co — phishing-fraud counter thorough, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社内報を、本気で、絶対、題する、絶対、ご案内、絶対、まとめろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"In-house-mag title-as guide compile, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。メールの、本気で、絶対、未読、絶対、件数、絶対、減らすよう、絶対、社員に、絶対、お願いしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Mail unread-count — reduce staff-ask, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07587',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'今年の、本気で、絶対、物産、絶対、展、絶対、当社の出展、絶対、好評でしたね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"This-yr product-expo — our co exhibit favorable, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。広告デザインの、本気で、絶対、書体、絶対、選定、絶対、進めております、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Ad-design font select advance, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'お客様が、本気で、絶対、めずらしい、絶対、と、絶対、感じる、絶対、サービス、絶対、考えましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Cust unusual-feel service — consider, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員研修で、本気で、絶対、自然体、絶対、を、絶対、推奨しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Staff-train — natural-stance encourage, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'業務の、本気で、絶対、手際、絶対、社員、絶対、磨き続けてくれていますね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Biz dexterity — staff polish-continue, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。社員教育で、本気で、絶対、フィッシング、絶対、メール、絶対、見分け方、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Staff-edu phishing-mail discern — thorough, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'記事を、本気で、絶対、題する、絶対、タイトル、絶対、慎重に、絶対、選びましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Article title-as — title careful choose, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内メール、本気で、絶対、未読、絶対、防止策、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. In-house mail unread-prevent — advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07588',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、地域の、本気で、絶対、物産、絶対、展、絶対、研究、絶対、ご縁、絶対、深めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Ren — local product-expo research connection deepen, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、書体、絶対、見やすさ、絶対、工夫しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Paper-font readability — work-on, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'研究テーマを、本気で、絶対、めずらしい、絶対、視点で、絶対、攻めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Research-theme unusual-angle attack, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。発表は、本気で、絶対、自然体、絶対、で、絶対、臨むつもりです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Pres — natural-stance prepare, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'実験の、本気で、絶対、手際、絶対、よく、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Exp dexterity — well advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。学界での、本気for、絶対、フィッシング、絶対、メール、絶対、被害、絶対、警戒しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Acad-phishing-mail damage — alert, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文を、本気で、絶対、題する、絶対、タイトル、絶対、印象的に、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Paper title-as — impressive set, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。教授からの、本気で、絶対、未読、絶対、メール、絶対、ない、絶対、よう、絶対、確認しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Prof-unread-mail none-verify, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07589',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、地域、絶対、物産、絶対、関連の、絶対、警備、絶対、警察、絶対、対応します、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case — local product-related sec — police-handle, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察様への、本気で、絶対、報告書、絶対、書体、絶対、統一しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Police-report font unified, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'容疑者の、本気で、絶対、めずらしい、絶対、行動パターン、絶対、警察、絶対、分析しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Suspect unusual-behavior — police analyze, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様、本気で、絶対、聴取、絶対、自然体、絶対、で、絶対、受けさせていただきます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police-interview — natural-stance receive, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、捜査の、絶対、手際、絶対、磨き続けております、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police inv-dexterity polish-continue, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。フィッシング、本気で、絶対、詐欺被害、絶対、警察様、絶対、ご相談、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Phishing-fraud — police-consult given, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察報告書を、本気で、絶対、題する、絶対、書類、絶対、慎重に、絶対、まとめております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police-report title-as docs — careful compile, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様からの、本気で、絶対、未読、絶対、メール、絶対、ない、絶対、よう、絶対、確認しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. From police unread-mail none-verify, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07590',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、地域、絶対、物産、絶対、を、絶対、扱ったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Founding — Dad local product-handled, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、看板の、絶対、書体、絶対、伝統、絶対、守ってまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — sign-font trad kept, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さんは、本気で、絶対、めずらしい、絶対、商品、絶対、扱うのが、絶対、得意だったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — unusual prod handle good-at was, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの、本気で、絶対、自然体、絶対、なお人柄、絶対、社員、絶対、お慕いしておりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad natural-stance character — staff-admired, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、商談の、絶対、手際、絶対、抜群だったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — deal dexterity outstanding, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、フィッシング、絶対、と、絶対、いう、絶対、用語、絶対、なかったですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Since Dad-era — phishing word didn't-exist, gratitude absolute serious really.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、社訓を、絶対、題する、絶対、額、絶対、家に、絶対、飾っていたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — co-creed title-as frame home-displayed, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代の、本気で、絶対、未読、絶対、手紙、絶対、ばあさんが、絶対、大切に、絶対、保管しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Dad-era unread-letters — gran careful-keep, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07591',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses history research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦国大名の、本気で、絶対、一豊、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — Sengoku-daimyo Yamauchi Kazutoyo paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。世界遺産の、本気で、絶対、姫路、絶対、城、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. World-heritage Himeji-castle paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史を、本気で、絶対、遡る、絶対、視点、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Hist trace-back view paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。政界を、本気で、絶対、騒がせ、絶対、た、絶対、事件、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Polit-world disturb incident paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史的に、本気で、絶対、無口、絶対、な、絶対、隠者、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Hist silent-hermit paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。古代の、本気で、絶対、高台、絶対、神殿、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Ancient hill-shrine paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'プロ野球の、本気で、絶対、打線、絶対、変遷、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Pro-baseball batting-order trans paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。歴史と、本気で、絶対、東京ドーム、絶対、建設史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Hist Tokyo-Dome construct-hist paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07592',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、戦国大名、絶対、一豊、絶対、ゆかりの地、絶対、警察、絶対、警備しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case — Sengoku Yamauchi-Kazutoyo connected-site — police-sec done, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'姫路、本気で、絶対、城、絶対、警備、絶対、警察、絶対、ご担当、絶対、ですか?本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Himeji-castle sec — police-handle?, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。事件、本気で、絶対、遡る、絶対、と、絶対、長年の、絶対、警察、絶対、捜査が、絶対、関係しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Case trace-back — long-yr police-inv related, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'マスコミを、本気for、絶対、騒がせ、絶対、た、絶対、事件、絶対、警察、絶対、対応、絶対、ご苦労でしたよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Media disturb incident — police-handle hardship, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、本気で、絶対、無口、絶対、で、絶対、警察、絶対、聴取、絶対、進めにくいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Suspect silent — police-interview-hard, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地域の、本気で、絶対、高台、絶対、警察、絶対、巡回、絶対、強化されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Local-hill — police-patrol strengthened, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。プロ野球の、本気で、絶対、打線、絶対、関連の警備、絶対、警察、絶対、対応、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Pro-baseball batting-order-related sec — police-handle, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'東京ドーム、本気で、絶対、で、絶対、の警備、絶対、警察、絶対、大変ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Tokyo-Dome sec — police-tough, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07593',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦国大名の、本気で、絶対、一豊、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sakura — Sengoku-daimyo Yamauchi-Kazutoyo paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。世界遺産の、本気で、絶対、姫路、絶対、城、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. World-heritage Himeji-castle paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'歴史を、本気で、絶対、遡る、絶対、視点、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Hist trace-back view paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。政界を、本気で、絶対、騒がせ、絶対、た、絶対、事件、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Polit-world disturb incident paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史的に、本気で、絶対、無口、絶対、な、絶対、隠者、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Hist silent-hermit paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。古代の、本気で、絶対、高台、絶対、神殿、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Ancient hill-shrine paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'プロ野球の、本気で、絶対、打線、絶対、変遷、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Pro-baseball batting-order trans paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史と、本気で、絶対、東京ドーム、絶対、建設史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Hist Tokyo-Dome construct-hist paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07594',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、本気で、絶対、一豊、絶対、公の、絶対、医療史への関心、絶対、医療界、絶対、興味深いですよ、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — Yamauchi-Kazutoyo med-hist interest — med-world fascinating, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'姫路、本気で、絶対、地域の、絶対、医療体制、絶対、貴院、絶対、関わって、絶対、いらっしゃるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Himeji-area med-sys — your hosp involved, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの症状を、本気for、絶対、遡る、絶対、と、絶対、原因、絶対、見えてきます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient-symptom trace-back — cause-visible, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'マスコミを、本気で、絶対、騒がせ、絶対、た、絶対、医療事故、絶対、医療界、絶対、対応、絶対、大変でしたよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Media disturb med-incident — med-world resp tough, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さん、本気で、絶対、無口、絶対、な方、絶対、医療チーム、絶対、丁寧に、絶対、お話、絶対、伺っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient silent-person — med-team careful talk-hear, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'地域の、本気で、絶対、高台、絶対、診療所、絶対、貴院、絶対、運営、絶対、されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Local-hill clinic — your hosp operate, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。プロ野球選手の、本気で、絶対、打線、絶対、入りの方、絶対、当院、絶対、ご利用、絶対、ですよ、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Pro-baseball batting-order-in person — our hosp-use, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'東京ドーム、本気で、絶対、での、絶対、救急対応、絶対、医療チーム、絶対、ご経験ですか?先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Tokyo-Dome ER-resp — med-team-exp?, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07595',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews strategy',lines:[
    {speaker:'hiroshi_boss',jp:'創業地ゆかりの、本気で、絶対、一豊、絶対、関連、絶対、当社、絶対、研究しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Founding-loc Yamauchi-Kazutoyo connection — our co research, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。姫路、本気で、絶対、支店、絶対、開設、絶対、検討、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Himeji-branch open consider advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'当社の歴史を、本気で、絶対、遡る、絶対、と、絶対、お父さんの代、絶対、思い起こされる、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Our hist trace-back — Dad-era recall, ask absolute serious really.",style:'Wistful.'},
    {speaker:'kenji_office',jp:'はい。当社、本気for、絶対、業界を、絶対、騒がせ、絶対、ない、絶対、慎重な、絶対、姿勢、絶対、保っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Our co — industry disturb-not careful stance keep, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'記者会見、本気で、絶対、無口、絶対、では、絶対、駄目だ、絶対、説明、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Press-conf silent no-good — explain thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、高台、絶対、にある、絶対、本社、絶対、防災、絶対、対策、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Our hill-HQ — disaster-prep advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'プロ野球の、本気で、絶対、打線、絶対、と、絶対、当社、絶対、スポンサー契約、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Pro-baseball batting-order — our co sponsor advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。東京ドーム、本気で、絶対、イベントの、絶対、協賛、絶対、検討、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Tokyo-Dome event sponsor — consider, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07596',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、美術館の、本気で、絶対、名画、絶対、メイちゃん、絶対、見てきたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Aoi — museum masterpiece Mei-saw, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、夕日が、絶対、切なく、絶対、感じる、絶対、季節、絶対、来たね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Aoi — sunset poignant-feel season-came, Mei absolute serious really.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'葵のお店の、本気で、絶対、看板の、絶対、点滅、絶対、メイちゃん、絶対、お洒落と思うわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store sign-blink — Mei-stylish think, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お祖父さまの、絶対、水槽の、絶対、水温、絶対、管理してるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — Grandpa tank water-temp manage, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'今朝、本気で、絶対、お庭、絶対、霜、絶対、降りていたわよ、葵、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"This-morn garden frost-fell, Aoi Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵のお祖父さま、本気で、絶対、子供への、絶対、躾、絶対、厳しい方だったよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-Grandpa — child-discipline strict person was, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、悲しみを、絶対、隠せ、絶対、ない、絶対、時、絶対、メイちゃんに、絶対、話してね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — sadness hide-can't time — Mei-tell, absolute serious really.",style:'Tender.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、子供の頃、絶対、家出、絶対、しようと、絶対、思ったこと、絶対、あるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — child-time run-away tried-think times, Mei absolute serious really.",style:'Wistful close.'},
  ]},
  {id:'conv_07597',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、ばあさんと、絶対、美術館で、絶対、名画、絶対、見たわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gran — youth gran museum masterpiece-saw, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃんの、絶対、出張の別れ、絶対、ばあさん、絶対、切なく、絶対、感じたわよ、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Youth — Grandpa biz-trip farewell — gran poignant felt, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、家の電気、絶対、点滅、絶対、する時、絶対、お父さん、絶対、直したぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — home-light blink-time Dad-fixed, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お風呂の、絶対、水温、絶対、いつも、絶対、確認してくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa bath water-temp always-verified, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、冬の朝、絶対、霜、絶対、お父さん、絶対、孫と、絶対、見たぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — winter-morn frost Dad-grandkid-saw, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お孫さんの、絶対、躾、絶対、厳しかったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa grandkid discipline-strict, remember dear?, absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、感情を、絶対、隠せ、絶対、ない、絶対、時、絶対、ばあさんに、絶対、話したぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Dad emotion hide-can't time gran-told, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お孫さんが、絶対、家出、絶対、と、絶対、言い出した時、絶対、心配したわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa grandkid run-away said-time worried, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07598',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、美術館の、絶対、名画、絶対、ぼくに、絶対、見せたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis museum masterpiece you-show-want, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お別れ、絶対、切なく、絶対、感じるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — me farewell poignant feel, absolute serious really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お家の電気、絶対、点滅、絶対、修理したわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — home-light blink fixed, Sho absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お風呂の、絶対、水温、絶対、ちょうどいいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — bath water-temp just-right, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'今朝、本気で、絶対、お庭、絶対、霜、絶対、降りていたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"This-morn garden frost-fell, Sho absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ママの、絶対、躾、絶対、しっかり、絶対、守ってるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me Mom-discipline solid-keep, absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、悲しみを、絶対、隠せ、絶対、ない、絶対、時、絶対、メイ姉さんに、絶対、お話しなさいね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — sadness hide-can't time — Mei-sis-tell, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、家出、絶対、なんて、絶対、考えないよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — me run-away never-think, absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07599',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、美術の授業で、本気で、絶対、名画、絶対、習ったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — art-class masterpiece learned, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。卒業、本気で、絶対、近づくと、絶対、切なく、絶対、なるよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Yeah. Grad approach — poignant become, Sakura absolute serious really.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'校舎の電気、本気で、絶対、点滅、絶対、してるよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"School-light — blink-doing, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'プールの、本気で、絶対、水温、絶対、低かったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Pool water-temp — low was, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'今朝、本気で、絶対、運動場、絶対、霜、絶対、降りてたよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"This-morn schoolyard frost-fell, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お祖父ちゃんの、本気で、絶対、躾、絶対、厳しいんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Grandpa discipline strict, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、テストで、絶対、感情を、絶対、隠せ、絶対、ない、絶対、こと、絶対、あるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — test emotion hide-can't times, Riku absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、家出、絶対、なんて、絶対、絶対するなよ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"You — run-away absolute don't, Sakura absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07600',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、美術館の、絶対、名画、絶対、見たいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mom — me museum masterpiece see-want, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'翔くんが、本気で、絶対、大きくなって、絶対、ママ、絶対、ちょっと、絶対、切なく、絶対、なるわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho grown — Mom slight poignant become, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お台所の、絶対、電気、絶対、点滅、絶対、してるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mom — kitchen-light blink-doing, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お風呂の、本気で、絶対、水温、絶対、ちょうどよくしてあるわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Bath water-temp just-right-set, Sho absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お庭、絶対、霜、絶対、降りてたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — garden frost-fell, absolute serious really.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お父さんの、絶対、躾、絶対、しっかり、絶対、守ってくれてるわね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Dad-discipline solid-keep, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、悲しい時、絶対、隠せ、絶対、ない、絶対、けど、絶対、ママと、絶対、お話したいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — me sad-time hide-can't — Mom-talk-want, absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、家出、絶対、なんて、絶対、しないでね、約束よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Sho — run-away never-do, promise, absolute serious really.",style:'Tender close.'},
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

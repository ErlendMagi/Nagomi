import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_389 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['カバー','臭い','クマ','思いっきり','水分','どっか','品物','大根']
const B_T = ['短縮','共存','退院','各自','待機','早起き','仲介','専業']
const C_T = ['吸収','原料','発掘','天候','未知','絶滅','換算','沿岸']
const D_T = ['一つ一つ','思いつい','ホラー','満点','秘訣','フィット','ネクタイ','香水']

const data = [
  {id:'conv_07741',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、そのソファに、本気で、絶対、カバー、絶対、かけてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — sofa cover put, absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'ママ、ぼくの、本気で、絶対、お靴、絶対、臭い、絶対、かもしれない、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — my shoes smelly maybe, absolute serious really.",style:'Embarrassed child.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、クマ、絶対、目の下に、絶対、できてるわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — dark-circles under-eyes appeared, absolute serious really.",style:'Caring.'},
    {speaker:'sho_child',jp:'ママ、ぼく、お庭で、本気で、絶対、思いっきり、絶対、走ってきたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me garden hard ran, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、水分、絶対、こまめに、絶対、取ってね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Sho — water-content frequently take, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、お友達が、本気で、絶対、どっか、絶対、遊びに行こうって言ってたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — friend somewhere play-go-let's said, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、品物、絶対、お父さんと、絶対、選んでらっしゃい、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — goods Dad-with choose-go, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、ぼく、本気で、絶対、大根、絶対、お味噌汁、絶対、好きだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me daikon miso-soup like, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07742',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お店のテーブル、本気で、絶対、カバー、絶対、お洒落ね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — store-table cover stylish, Mei absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、ゴミ箱、絶対、臭い、絶対、対策、絶対、しないとね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — bin smelly-counter need, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、クマ、絶対、目の下、絶対、葵、絶対、お疲れね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — dark-circles under-eyes Aoi-tired, Mei absolute serious really.",style:'Caring.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、思いっきり、絶対、楽しんでほしいよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — wholeheartedly enjoy-want-you, Mei absolute serious really.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お客様の、絶対、水分、絶対、補給、絶対、大事ね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — cust water-content replenish important, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、どっか、絶対、新店舗、絶対、開けたいよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — somewhere new-store open-want, Mei absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お洒落な、絶対、品物、絶対、お客様、絶対、喜ぶわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — stylish goods cust-glad, Mei absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、大根、絶対、サラダ、絶対、新メニュー、絶対、お試しよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — daikon salad new-menu try, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07743',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、お父さん、本気で、絶対、ふとんに、絶対、カバー、絶対、掛けてくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth Dad futon cover put-for-you, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、お祖父ちゃん、本気で、絶対、お野菜が、絶対、臭い、絶対、って、絶対、文句を言ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — Grandpa veg smelly-said complained, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、クマ、絶対、目の下、絶対、夜なべ、絶対、続いたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran dark-circles under-eyes — late-nights continued, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、お祭りで、絶対、思いっきり、絶対、踊ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa fest wholeheartedly danced, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お父さんに、絶対、水分、絶対、を、絶対、忘れずに、絶対、勧めたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran Dad water-content forget-not recommended, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、どっか、絶対、お出かけしたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa somewhere out-went, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お父さんに、絶対、品物、絶対、を、絶対、選んでくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran Dad goods chose-for-you, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、お庭で、絶対、大根、絶対、を、絶対、育てたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa garden daikon grew, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07744',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前の、本気で、絶対、本に、絶対、カバー、絶対、つけてんの?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — your book cover-put-on?, absolute serious really.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'お前の体育服、本気で、絶対、臭い、絶対、ぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Your gym-clothes smelly, Sakura absolute serious really.",style:'Teasing.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、クマ、絶対、目の下、絶対、また、絶対、徹夜?リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"You — dark-circles again all-nighter?, Riku absolute serious really.",style:'Caring.'},
    {speaker:'riku_teen',jp:'試合、本気で、絶対、思いっきり、絶対、やるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Match — wholeheartedly do, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、水分、絶対、ちゃんと、絶対、取れよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — water-content proper take, Riku absolute serious really.",style:'Caring.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、どっか、絶対、遊びに行こうぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — somewhere play-go, Sakura absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、品物、絶対、見る目、絶対、あるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — goods-eye have, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前のお弁当の、本気で、絶対、大根、絶対、煮物、絶対、ウマかったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your bento daikon stew tasty, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07745',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんの、本気で、絶対、お店、絶対、椅子の、絶対、カバー、絶対、変えたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Mei-sis store chair cover changed, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼくの、本気で、絶対、お弁当箱、絶対、臭い、絶対、なっちゃったかも、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — my bento smelly become-maybe, absolute serious really.",style:'Embarrassed child.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、クマ、絶対、目の下、絶対、できちゃったわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis dark-circles appeared, absolute serious really.",style:'Wry.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、運動会で、本気で、絶対、思いっきり、絶対、走ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me sports-day wholeheartedly ran, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、水分、絶対、忘れずに、絶対、取ってね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — water-content forget-not take, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、どっか、絶対、お出かけしたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — me somewhere out-want, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お洒落な、絶対、品物、絶対、お店に、絶対、入れたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Mei-sis stylish goods store-put, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、ママが、本気で、絶対、大根、絶対、お味噌汁、絶対、作ってくれたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — Mom daikon miso-soup made, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07746',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    {speaker:'hiroshi_boss',jp:'会議時間、本気で、絶対、短縮、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Meeting-time shorten, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。新旧システム、本気で、絶対、共存、絶対、運用、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Old-new system coexist operate, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'入院した田中さんの、本気で、絶対、退院、絶対、状況、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Tanaka — discharge status verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新人研修、本気で、絶対、各自、絶対、進捗、絶対、把握しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. New-hire-training each progress grasp, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'非常時、本気で、絶対、待機、絶対、人員、絶対、確保しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Emergency standby-personnel secure, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、早起き、絶対、推奨、絶対、社内、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff early-rise recommend in-house advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'取引、本気で、絶対、仲介、絶対、業者、絶対、選定しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Deal mediation-vendor select, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、専業、絶対、希望、絶対、調整しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Staff full-time wish adjust, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07747',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'会議時間、本気で、絶対、短縮、絶対、しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Meeting-time shorten, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。複数チームが、本気で、絶対、共存、絶対、できるオフィス、絶対、提案いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Multi-team coexist office propose, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'入院した社員の、本気で、絶対、退院、絶対、お祝い、絶対、しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Hospitalized-staff discharge celebrate, absolute serious really.",style:'Warm.'},
    {speaker:'kenji_office',jp:'はい。研修、本気で、絶対、各自、絶対、必要科目、絶対、選択、絶対、できます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Training each needed-subj select can, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'休日、本気で、絶対、待機、絶対、人員、絶対、決めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Holiday standby personnel decide, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、早起き、絶対、習慣、絶対、社内報、絶対、特集しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff early-rise habit in-house-mag feature, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'お得意様、本気で、絶対、仲介、絶対、案件、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"VIP mediation-deal advance, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。投資、本気で、絶対、専業、絶対、部門、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Invest specialist-div strengthen, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07748',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究時間、本気で、絶対、短縮、絶対、せず、絶対、深めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Ren — research-time shorten-not deepen, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。理論と実験、本気で、絶対、共存、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Theory-experiment coexist advance, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'入院した先輩の、本気で、絶対、退院、絶対、お祝い、絶対、行ってこい、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Hospitalized-senior discharge cele-go, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。共同研究者、本気で、絶対、各自、絶対、分担、絶対、明確にしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Joint-researchers each-share clear, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'発表前、本気で、絶対、待機、絶対、するように、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Pre-presentation standby-stay, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文執筆、本気で、絶対、早起き、絶対、習慣、絶対、続けております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Paper-write early-rise habit continue, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'共同研究、本気で、絶対、仲介、絶対、教授、絶対、依頼しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Joint-research mediation prof request, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究者、本気で、絶対、専業、絶対、目指して、絶対、おります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Researcher full-time aim-for, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07749',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、捜査時間、絶対、短縮、絶対、努めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police — inv-time shorten try, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察と民間警備、本気で、絶対、共存、絶対、する体制、絶対、ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police-private-sec coexist system grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'被害者の、本気で、絶対、退院、絶対、警察、絶対、お見舞い、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Victim-discharge — police visited, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、各自、絶対、担当区、絶対、明確、絶対、ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Police each-area clear grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'非常時、本気で、絶対、警察、絶対、待機、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Emergency police standby-thorough, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、早起き、絶対、朝、絶対、巡回、絶対、ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Police early-rise morning patrol grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'示談、本気で、絶対、仲介、絶対、弁護士、絶対、紹介します、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Settle — mediation-lawyer introduce, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、専業、絶対、対策班、絶対、組まれて、絶対、ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police specialist-team formed grateful, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07750',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、お父さん、本気で、絶対、会議、絶対、短縮、絶対、徹底したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Founding — Dad meeting shorten thorough, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代、本気で、絶対、複数事業、絶対、共存、絶対、上手くされたなあ、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Dad-era multi-biz coexist managed, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、社員の、絶対、退院、絶対、必ず、絶対、お見舞いしたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — staff-discharge surely visited, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、社員、絶対、各自、絶対、得意を、絶対、活かす社風、絶対、続いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad — staff each-strength culture continue, gratitude absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、非常時、絶対、待機、絶対、社員と、絶対、共にしたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Dad — emergency standby staff-with stood, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、本気で、絶対、早起き、絶対、いつも、絶対、見習っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad — early-rise always emulate, gratitude absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、取引、絶対、仲介、絶対、信頼で、絶対、ものにしたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — deal-mediation trust-with closed, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、本気で、絶対、生涯、絶対、商売、絶対、専業、絶対、貫かれましたね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Dad — life biz full-time saw-through, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07751',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、栄養の、本気で、絶対、吸収、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — nutrition absorption paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。化学工場の、本気で、絶対、原料、絶対、調達、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Thanks. Chem-factory raw-material procure paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'考古学の、本気で、絶対、発掘、絶対、現場、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Archaeology excav-site paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。気候変動による、本気で、絶対、天候、絶対、不順、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Climate-change weather-irregularity paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'深海の、本気で、絶対、未知、絶対、生物、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Deep-sea unknown-organism paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。希少種の、本気で、絶対、絶滅、絶対、危機、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Rare-species extinction-crisis paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'通貨の、本気で、絶対、換算、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Currency-conversion paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。離島の、本気で、絶対、沿岸、絶対、生態、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Isolated-island coastal ecology paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07752',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、薬物の、絶対、吸収、絶対、過程、絶対、分析しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police — drug absorption process analyze, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、密造の、絶対、原料、絶対、警察、絶対、押収、絶対、されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case illegal-mfg raw-material police-seized, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。証拠の、本気で、絶対、発掘、絶対、警察、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Evidence-uncovering police-thorough, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、天候、絶対、影響で、絶対、警察、絶対、捜査延期、絶対、されたそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case weather-impact — police inv-postpone, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者の、本気で、絶対、未知、絶対、の経歴、絶対、警察、絶対、調査しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Suspect unknown-past police-inv, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、地域の、絶対、伝統文化、絶対、絶滅、絶対、危機、絶対、警察、絶対、保護されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case region-trad-culture extinction-crisis police-protected, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。被害額の、本気で、絶対、換算、絶対、警察、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Damage-conversion police-advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、沿岸、絶対、警備、絶対、警察、絶対、強化、絶対、されたそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case coastal-sec police-strengthen, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07753',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、栄養の、本気で、絶対、吸収、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sakura — nutrition absorption paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。化学工場の、本気で、絶対、原料、絶対、調達、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Thanks. Chem-factory raw-material procure paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'考古学の、本気で、絶対、発掘、絶対、現場、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Archaeology excav-site paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。気候変動による、本気で、絶対、天候、絶対、不順、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Climate-change weather-irregularity paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'深海の、本気で、絶対、未知、絶対、生物、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Deep-sea unknown-organism paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。希少種の、本気で、絶対、絶滅、絶対、危機、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Rare-species extinction-crisis paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'通貨の、本気で、絶対、換算、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Currency-conversion paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。離島の、本気で、絶対、沿岸、絶対、生態、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Isolated-island coastal ecology paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07754',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者さんの、本気で、絶対、栄養、絶対、吸収、絶対、医療チーム、絶対、観察しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — patient nutrition-absorption med-team observe, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'薬の、本気で、絶対、原料、絶対、貴院、絶対、徹底管理、絶対、されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Drug raw-material your-hosp thorough-mgmt, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。古い症例の、本気で、絶対、発掘、絶対、医療チーム、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Old-case unearth med-team advance, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'本日の、本気で、絶対、天候、絶対、急変、絶対、貴院、絶対、患者さん、絶対、心配ですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Today-weather sudden-change — your-hosp patient worried, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの、本気で、絶対、未知、絶対、症状、絶対、医療チーム、絶対、慎重に診ております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Patient unknown-sympt med-team careful-diag, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'希少疾患の、本気で、絶対、絶滅、絶対、危機、絶対、貴院、絶対、研究されたんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Rare-disease extinction-crisis your-hosp research, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。薬剤量の、本気で、絶対、換算、絶対、医療チーム、絶対、慎重に行います、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Drug-amount conversion med-team careful-do, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'沿岸、本気で、絶対、地域の、絶対、医療体制、絶対、貴院、絶対、支援されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Coastal-region med-system your-hosp support, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07755',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、技術、絶対、吸収、絶対、海外から、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Our co — tech absorb overseas advance, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、原料、絶対、調達先、絶対、見直しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Our raw-material supplier review, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'新規市場の、本気で、絶対、発掘、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"New-market uncover advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、天候、絶対、不順、絶対、影響、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our weather-irreg impact watch, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'未知、本気で、絶対、の市場、絶対、調査しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Unknown-market survey, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、伝統技術、絶対、絶滅、絶対、防ぐ、絶対、取り組み、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our trad-tech extinction-prevent initiative advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'外貨、本気で、絶対、換算、絶対、レート、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"FX conversion-rate verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、沿岸、絶対、地域への、絶対、出店、絶対、検討しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Our coastal-region open-store consider, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07756',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お料理、本気で、絶対、一つ一つ、絶対、丁寧ね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — dish one-by-one careful, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、新メニュー、本気で、絶対、思いついた、絶対、よ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — new-menu came-up-with, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、ホラー、絶対、映画、絶対、見るの好き?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — horror movie like?, Mei absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵のお店の、本気で、絶対、コーヒー、絶対、満点、絶対、評価、絶対、出たよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store coffee full-marks-review came, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、お料理の、本気で、絶対、秘訣、絶対、教えてよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — cook secret tell, Mei absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、新エプロン、絶対、フィット、絶対、するんだよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — new-apron fits, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、メイちゃんの、本気で、絶対、彼、絶対、ネクタイ、絶対、お洒落だったわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — Mei-bf necktie stylish was, Mei absolute serious really.",style:'Tender.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、香水、絶対、新しいの、絶対、つけてみたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — perfume new put-on, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07757',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、お父さん、本気で、絶対、お料理、絶対、一つ一つ、絶対、丁寧にしたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth Dad dish one-by-one careful, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、お祖父ちゃん、本気で、絶対、新しい商売、絶対、思いついた、絶対、わよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Youth — Grandpa new biz came-up-with, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、ホラー、絶対、映画、絶対、怖がったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran horror-movie scared, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、テストで、絶対、満点、絶対、を、絶対、取ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa test full-marks took, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お料理の、絶対、秘訣、絶対、お父さんに、絶対、教えたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — gran cook-secret Dad-taught, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、お洋服が、絶対、フィット、絶対、しないって、絶対、文句、絶対、言ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa clothes-fit-not complained, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お父さんに、絶対、ネクタイ、絶対、結んでくれたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran Dad necktie tied-for-you, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、香水、絶対、苦手、絶対、だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa perfume disliked, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07758',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お皿、絶対、一つ一つ、絶対、丁寧に、絶対、洗ってるの、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis dish one-by-one careful-wash, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、新しい遊び、絶対、思いついた、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me new-play came-up-with, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、ホラー、絶対、映画、絶対、まだ、絶対、早いわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Sho — horror movie still early, absolute serious really.",style:'Caring.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、テストで、絶対、満点、絶対、取ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me test full-marks took, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、お料理の、本気で、絶対、秘訣、絶対、教えてあげる、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis cook-secret teach, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼくの、本気で、絶対、お靴、絶対、フィット、絶対、しないんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — my shoes fit-not, absolute serious really.",style:'Wry child.'},
    {speaker:'mei_romantic',jp:'翔くん、お父さんの、本気で、絶対、ネクタイ、絶対、お洒落ね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Dad necktie stylish, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'メイ姉さん、ママの、本気で、絶対、香水、絶対、いい匂いだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — Mom perfume good-smell, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07759',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、宿題、絶対、一つ一つ、絶対、丁寧にやんなよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — you homework one-by-one careful-do, absolute serious really.",style:'Direction teen.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、新しいプレー、絶対、思いついた、絶対、ぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — new-play came-up-with, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、ホラー、絶対、映画、絶対、好きだよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — horror movie like, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前のテスト、本気で、絶対、満点、絶対、だったの?桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Your test full-marks?, Sakura absolute serious really.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、勉強の、絶対、秘訣、絶対、教えてよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — study-secret tell, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前のユニフォーム、本気で、絶対、ぴったり、絶対、フィット、絶対、してるな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your uniform exactly fits, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、卒業式、絶対、ネクタイ、絶対、似合うかな、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — graduation necktie suits?, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前の、本気で、絶対、香水、絶対、お洒落だぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your perfume stylish, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07760',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ぼく、本気で、絶対、ブロック、絶対、一つ一つ、絶対、組み立てたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me block one-by-one assembled, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'翔くん、お父さんが、本気で、絶対、新企画、絶対、思いついた、絶対、らしいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Dad new-proj came-up-with seems, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、お友達が、本気で、絶対、ホラー、絶対、ゲーム、絶対、見せてくれたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — friend horror-game showed, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、テストで、絶対、満点、絶対、目指してね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — test full-marks aim, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、勉強の、絶対、秘訣、絶対、教えて、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — study-secret tell, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、新しい靴、絶対、フィット、絶対、してる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — new-shoe fit?, absolute serious really.",style:'Caring.'},
    {speaker:'sho_child',jp:'ママ、お父さんの、本気で、絶対、ネクタイ、絶対、お洒落だよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — Dad necktie stylish, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、ママの、本気で、絶対、香水、絶対、新しいの、絶対、つけてみたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mom perfume new put-on, absolute serious really.",style:'Tender close.'},
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

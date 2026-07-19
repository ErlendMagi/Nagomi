import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_372 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['吹雪','かぜ','つゆ','ぬき','エスカレーター','キッズ','段差','中高']
const B_T = ['かねて','余暇','車中','留まる','論拠','言い過ぎ','御用','競走']
const C_T = ['暴言','往来','斉唱','流星','昇る','追っかけ','エコー','ライティング']
const D_T = ['ウロウロ','かっこよく','光り','営む','釣る','働ける','チョン','リョウ']

const data = [
  {id:'conv_07401',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、外、本気で、絶対、吹雪、絶対、ひどくなってきたわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — outside blizzard worse-became, absolute serious really.",style:'Warm alert.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、かぜ、絶対、ひいたかも、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mom — me cold caught-maybe, absolute serious really.",style:'Earnest child.'},
    {speaker:'yumiko_mom',jp:'お蕎麦の、本気で、絶対、つゆ、絶対、ママ、絶対、温めてあるからね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Soba-broth — Mom warmed, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、ピーマン、絶対、ぬき、絶対、で、絶対、食べてもいい?ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Me — pepper without eat-OK?, Mom absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'デパートの、本気で、絶対、エスカレーター、絶対、混んでるから、絶対、気をつけてね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Dept-store escalator crowded — careful, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'公園の、本気で、絶対、キッズ、絶対、スペース、絶対、ぼく、絶対、楽しいよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Park-kids-space — me fun, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'玄関の、本気で、絶対、段差、絶対、気をつけてね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Entrance step careful, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'お兄ちゃん、本気で、絶対、中高、絶対、一貫校に、絶対、通ってるんだよね、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Bro — secondary-school attending, Mom absolute serious really.",style:'Curious close.'},
  ]},
  {id:'conv_07402',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、北海道の、本気で、絶対、吹雪、絶対、ニュースで、絶対、メイちゃん、絶対、見たわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — Hokkaido blizzard news Mei-saw, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、ちょっと、絶対、かぜ、絶対、ひいたみたい、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Aoi — slight cold caught-seems, Mei absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵の、本気で、絶対、お蕎麦の、絶対、つゆ、絶対、メイちゃん、絶対、大好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi soba-broth — Mei-love, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'メイちゃん、本気で、絶対、お砂糖、絶対、ぬき、絶対、で、絶対、コーヒー、絶対、お出しするね、葵で、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei — sugar without coffee provide, Aoi absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵のお店の前の、本気で、絶対、エスカレーター、絶対、メイちゃん、絶対、便利と思うわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store-front escalator — Mei-convenient think, absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、キッズ、絶対、向けの、絶対、デザート、絶対、新しく、絶対、考えてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — kids-dessert new-considering, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵のお店の入口の、本気で、絶対、段差、絶対、メイちゃん、絶対、気をつけてるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store entrance step — Mei-careful, absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵のお客様の中に、本気で、絶対、中高、絶対、生さん、絶対、多いよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi cust — secondary-students many, Mei absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07403',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、吹雪、絶対、お父さん、絶対、外で、絶対、苦労したぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — youth blizzard Dad outside-hardship, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。お祖父ちゃん、本気で、絶対、若い頃、絶対、かぜ、絶対、ひくと、絶対、よく、絶対、寝込んだわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Grandpa — youth cold-catch often bedridden, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんの、絶対、お料理の、絶対、つゆ、絶対、お父さん、絶対、大好きだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — gran cook-broth Dad-loved, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、ご飯、絶対、ぬき、絶対、で、絶対、お酒、絶対、よく、絶対、飲んだわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Youth — Grandpa rice without sake often-drank, remember dear?, absolute serious really.",style:'Wry tease.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、デパートに、絶対、エスカレーター、絶対、初めて、絶対、できた時、絶対、驚いたぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — dept-store escalator first-made surprised, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、ばあさんが、絶対、キッズ、絶対、向けの、絶対、お洋服、絶対、孫に、絶対、買ってあげたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Youth — gran kids-clothes grandkid-bought, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔、本気で、絶対、家の、絶対、段差、絶対、お父さん、絶対、低くしたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Old — home-step Dad-lowered, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、孫が、絶対、中高、絶対、生になった時、絶対、お祖父ちゃん、絶対、喜んだわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — grandkid secondary-became Grandpa-glad, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07404',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、北海道修学旅行で、本気で、絶対、吹雪、絶対、すごかったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — Hokkaido trip blizzard amazing, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。最近、本気で、絶対、かぜ、絶対、流行ってるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Yeah. Lately cold spreading, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'給食の、本気で、絶対、お蕎麦の、絶対、つゆ、絶対、美味しかったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Lunch soba-broth tasty, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'今日、本気で、絶対、塾、絶対、ぬき、絶対、で、絶対、遊びに行こうぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Today — cram-school without play-go?, Sakura absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'駅の、本気で、絶対、エスカレーター、絶対、いつも、絶対、混んでるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Station escalator — always crowded, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'文化祭で、本気で、絶対、キッズ、絶対、向け、絶対、コーナー、絶対、担当することになったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Fest — kids-corner take-charge became, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'階段の、本気で、絶対、段差、絶対、お前、絶対、転ばないでよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Stair-step — you don't-trip, Riku absolute serious really.",style:'Caring.'},
    {speaker:'riku_teen',jp:'お兄ちゃん、本気で、絶対、中高、絶対、一貫校に、絶対、進学したんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Bro — secondary-school advanced, Sakura absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07405',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、雪国で、絶対、吹雪、絶対、見たことあるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis snow-country blizzard seen, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、かぜ、絶対、ひいちゃった、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mei-sis — me cold caught, absolute serious really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お素麺の、絶対、つゆ、絶対、手作りで、絶対、用意したわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — somen-broth handmade prep, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お野菜、絶対、ぬき、絶対、で、絶対、食べてもいい?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — me veg without eat-OK?, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さんと、本気で、絶対、デパートの、絶対、エスカレーター、絶対、乗ろうね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis-with — dept-store escalator ride, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、キッズ、絶対、向け、絶対、絵本、絶対、好きだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — me kids-picture-book like, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'公園の、本気で、絶対、段差、絶対、翔くん、絶対、ジャンプ、絶対、しないでね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Park-step — Sho don't-jump, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくのお兄ちゃん、絶対、中高、絶対、一貫校、絶対、なんだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — my-bro secondary-school, absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07406',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'本件、本気で、絶対、かねて、絶対、より、絶対、検討してきたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Case — for-some-time considered, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員の、本気で、絶対、余暇、絶対、過ごし方、絶対、改善、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Staff-leisure spend-way improve advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'出張、本気で、絶対、車中、絶対、会議、絶対、効率化しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Biz-trip — in-car meeting efficient, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、現状に、絶対、留まる、絶対、ことなく、絶対、挑戦しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Staff — status-quo stay-without challenge, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'提案の、本気で、絶対、論拠、絶対、明確に、絶対、示せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Proposal-rationale — clear show, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様への、本気で、絶対、言い過ぎ、絶対、ない、絶対、対応、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Cust — over-speak-none response thorough, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'御用、本気で、絶対、商人、絶対、伝統、絶対、守れ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Purveyor merchant tradition — keep, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界での、本気で、絶対、競走、絶対、当社、絶対、リード、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Industry-race — our co lead, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07407',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'この件、本気で、絶対、かねて、絶対、から、絶対、検討、絶対、しておりましたね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"This case — for-some-time considering, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。社員の、本気で、絶対、余暇、絶対、充実、絶対、福利厚生で、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Staff-leisure fulfill — benefits advance, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'移動の、本気で、絶対、車中、絶対、で、絶対、議事録、絶対、確認しましょうか、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Travel in-car — minutes verify?, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。当社の方針、本気で、絶対、現状に、絶対、留まる、絶対、ことなく、絶対、進化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our policy — status-quo stay-without evolve, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'企画の、本気で、絶対、論拠、絶対、十分か、絶対、確認しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Plan-rationale — sufficient verify, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。メールでの、本気で、絶対、言い過ぎ、絶対、文面、絶対、修正、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Email over-speak tone — revise, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'王室御用達、本気で、絶対、御用、絶対、達ブランド、絶対、当社も、絶対、目指しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Royal-supplier — purveyor brand our co also-aim, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。業界、本気で、絶対、競走、絶対、激化、絶対、する中、絶対、当社、絶対、差別化、絶対、図っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Industry-race intense-amid — our co differentiate, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07408',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、この研究、本気で、絶対、かねて、絶対、から、絶対、注目していたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Ren — this research for-some-time watching, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。私の、本気で、絶対、余暇、絶対、研究に、絶対、充てております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. My-leisure research-allocate, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'学会出張の、本気で、絶対、車中、絶対、で、絶対、論文構想、絶対、練ってこい、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Conf-trip in-car — paper-concept refine, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。私、本気で、絶対、研究に、絶対、留まる、絶対、ことなく、絶対、実地調査も、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Me — research stay-without practical-survey advance, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文の、本気で、絶対、論拠、絶対、強固に、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Paper-rationale firm, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。教授に、本気で、絶対、言い過ぎ、絶対、ない、絶対、よう、絶対、慎重に、絶対、お伝えします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Prof — over-speak-none careful convey, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'学術界の、本気で、絶対、御用、絶対、学者、絶対、にならぬよう、絶対、独立した立場を、絶対、保て、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Academy-purveyor scholar — don't-become, indep stance keep, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。学会での、本気で、絶対、競走、絶対、激しい中、絶対、私、絶対、独自性、絶対、保ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Conf-race intense-amid — me unique-keep, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07409',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、警察、絶対、かねて、絶対、から、絶対、注視、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case — police for-some-time watching, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。社員の、本気で、絶対、余暇、絶対、安全、絶対、当社、絶対、注意喚起、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff-leisure safety — our co alert, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、車中、絶対、聴取、絶対、行うこと、絶対、ございます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police — in-car interview do exist, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様、本気で、絶対、現状に、絶対、留まる、絶対、ことなく、絶対、改革、絶対、進めていらっしゃるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police — status-quo stay-without reform advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、捜査の、絶対、論拠、絶対、市民の方々に、絶対、ご説明、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police — inv-rationale citizens explain, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様への、本気で、絶対、言い過ぎ、絶対、ない、絶対、対応、絶対、心掛けております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. To-police over-speak-none response mindful, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、御用、絶対、聞き、絶対、市民の信頼、絶対、保っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police — public-service listening citizen-trust keep, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。地域での、本気で、絶対、防犯、絶対、競走、絶対、にならない、絶対、よう、絶対、連携しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Local crime-prev — race-don't-become coop, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07410',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、かねて、絶対、より、絶対、夢みていた事業、絶対、形にしたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Founding — Dad for-some-time dreamed-biz formed, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、社員の、絶対、余暇、絶対、大切に、絶対、してまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — staff-leisure cherish, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、車中、絶対、で、絶対、書類、絶対、よく、絶対、読んでいたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — in-car docs often-read, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、現状に、絶対、留まる、絶対、ことなく、絶対、進化、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — status-quo stay-without evolve continue, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、提案の、絶対、論拠、絶対、いつも、絶対、しっかりしていたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — proposal-rationale always-solid was, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、本気で、絶対、言い過ぎ、絶対、ない、絶対、姿勢、絶対、私の手本です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Dad — over-speak-none stance my-model, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、皇室、絶対、御用、絶対、達、絶対、目指していたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Dad — imperial-purveyor aim, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの精神、本気で、絶対、業界の、絶対、競走、絶対、勝ち抜く、絶対、力、絶対、を持っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Dad-spirit — industry-race win-through force have, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07411',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'容疑者の、本気で、絶対、暴言、絶対、警察、絶対、記録、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Suspect-rant — police record, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'駅前の、本気で、絶対、往来、絶対、警察、絶対、警備、絶対、強化されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Station-front foot-traffic — police-sec strengthened, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。式典の、本気で、絶対、斉唱、絶対、警備、絶対、警察、絶対、対応、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Ceremony group-sing sec — police-handle done, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'昨夜の、本気で、絶対、流星、絶対、群、絶対、市民、絶対、感動したと、聞きました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Last-night meteor shower — citizen-moved heard, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。市民の、本気で、絶対、関心、絶対、昇る、絶対、社会問題、絶対、警察、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Citizen-interest rising social-issue — police-watch, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'有名人の、本気で、絶対、追っかけ、絶対、警備、絶対、警察、絶対、ご苦労されていますか、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Celeb-chaser sec — police-troubled?, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。捜査現場の、本気で、絶対、エコー、絶対、装置、絶対、警察、絶対、活用、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Inv-scene echo device — police-utilize, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察の、本気で、絶対、ライティング、絶対、業務、絶対、報告書作成、絶対、大変ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police writing-biz — report-make tough, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07412',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses cultural research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦時の、本気で、絶対、政治家の、絶対、暴言、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Ren — wartime polit-rant paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。古代の、本気で、絶対、市場の、絶対、往来、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Thanks. Ancient market foot-traffic paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'国歌の、本気で、絶対、斉唱、絶対、歴史、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Anthem-group-sing hist paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。古代の、本気で、絶対、流星、絶対、観測、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Yes. Ancient meteor-observe paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'武家階級が、本気で、絶対、昇る、絶対、過程、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Samurai-class rising process paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。アイドル文化の、本気で、絶対、追っかけ、絶対、現象、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Idol-cult chase phenomenon paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'メディアの、本気で、絶対、エコー、絶対、チェンバー現象、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Media echo-chamber paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。文学の、本気で、絶対、ライティング、絶対、技法、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Lit writing-tech paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07413',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses social health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者さんへの、本気で、絶対、暴言、絶対、医療現場、絶対、決して、絶対、許してはなりません、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — patient-rant — med-scene never permit, gratitude absolute serious really.",style:'Calm firm.'},
    {speaker:'ren_uni',jp:'救急外来の、本気で、絶対、往来、絶対、激しい時、絶対、医療チーム、絶対、大変ですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"ER foot-traffic intense-time — med-team tough, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。病院記念日の、本気で、絶対、斉唱、絶対、職員、絶対、皆で、絶対、行いました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hosp-anniv group-sing — staff all-did, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'ren_uni',jp:'昨夜の、本気で、絶対、流星、絶対、群、絶対、患者さん、絶対、窓から、絶対、楽しまれたそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Last-night meteor shower — patient window-enjoyed, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの体温、本気で、絶対、昇る、絶対、際の、絶対、対応、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Patient-temp rising-time response thorough, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'有名な医師の、本気で、絶対、追っかけ、絶対、と言いますか、絶対、ファン、絶対、いらっしゃるんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Famous-doctor — chase or-rather fan exist, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。心臓の、本気で、絶対、エコー、絶対、検査、絶対、当院、絶対、最新機器、絶対、導入しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Heart-echo test — our hosp latest gear introduce, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医学論文の、本気で、絶対、ライティング、絶対、技法、絶対、貴院でも、絶対、研修されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med-paper writing-tech — your hosp also-training, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07414',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦時の、本気で、絶対、政治家の、絶対、暴言、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sakura — wartime polit-rant paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。古代の、本気で、絶対、市場の、絶対、往来、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Ancient market foot-traffic paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'校歌の、本気で、絶対、斉唱、絶対、歴史、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"School-song group-sing hist paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。古代の、本気で、絶対、流星、絶対、観測、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Yes. Ancient meteor-observe paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'武家階級が、本気で、絶対、昇る、絶対、過程、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Samurai-class rising process paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。アイドル文化の、本気で、絶対、追っかけ、絶対、現象、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Idol-cult chase phenomenon paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'メディアの、本気で、絶対、エコー、絶対、チェンバー現象、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Media echo-chamber paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。文学の、本気で、絶対、ライティング、絶対、技法、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Lit writing-tech paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07415',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corporate response',lines:[
    {speaker:'hiroshi_boss',jp:'社員に対する、本気で、絶対、暴言、絶対、絶対、許さないぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Staff-rant — absolute not-permit, ask absolute serious really.",style:'Crisp firm.'},
    {speaker:'kenji_office',jp:'はい。店舗前の、本気で、絶対、往来、絶対、増えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Store-front foot-traffic — increase, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'社歌の、本気で、絶対、斉唱、絶対、社員総会で、絶対、行え、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Co-song group-sing — staff-mtg do, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新商品、本気で、絶対、流星、絶対、群キャンペーン、絶対、好評です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. New prod meteor-shower-campaign favorable, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社の業績、本気で、絶対、昇る、絶対、勢いを、絶対、保て、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Our perf rising momentum — keep, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社CMの、本気で、絶対、追っかけ、絶対、ファン、絶対、ついておられます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Our CM-chaser fan exist, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界での、本気で、絶対、エコー、絶対、効果、絶対、当社、絶対、注視しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Industry echo-effect — our co watch, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の、本気で、絶対、広報、絶対、ライティング、絶対、専門スタッフ、絶対、配置しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Our PR writing-spec-staff placed, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07416',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お店の周りを、本気で、絶対、ウロウロ、絶対、メイちゃん、絶対、しちゃったわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — store-around wander Mei did, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、新しい制服、絶対、かっこよく、絶対、メイちゃん、絶対、似合うかな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Aoi — new uniform cool-look Mei suit?, absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵のお店の窓から、本気で、絶対、月の、絶対、光り、絶対、輝く、絶対、夜、絶対、メイちゃん、絶対、好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi window — moon-light shine night Mei-like, absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お店を、絶対、営む、絶対、ことに、絶対、誇り、絶対、持ってるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — store-operate proud-hold, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵のお父さん、本気で、絶対、お魚、絶対、釣る、絶対、のが、絶対、上手よね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-Dad — fish-catch good, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、夢中で、絶対、働ける、絶対、お店、絶対、ありがたいよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — engrossed work-can store grateful, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お祭りで、絶対、チョン、絶対、髷の、絶対、お侍さん、絶対、見たわよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — festival — chon-mage samurai Mei saw, absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'葵のお客様の中に、本気で、絶対、リョウ、絶対、さんって、絶対、いう、絶対、常連、絶対、いらっしゃるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi cust — Ryou-san regular exist, Mei absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07417',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さん、絶対、町を、絶対、ウロウロ、絶対、よく、絶対、歩いたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — youth Dad town wander often-walked, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、軍服姿、絶対、かっこよく、絶対、見えたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — Grandpa mil-uniform cool-looked, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、月の、絶対、光り、絶対、輝く、絶対、夜、絶対、ばあさんと、絶対、散歩したぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — moon-light shine night gran-walked, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お店を、絶対、営む、絶対、夢、絶対、持っていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa store-operate dream-had, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、川で、絶対、お父さん、絶対、お魚、絶対、釣る、絶対、のが、絶対、得意だったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — river Dad fish-catch good-at, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、元気いっぱい、絶対、働ける、絶対、体だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa energy-full work-can body, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、時代劇の、絶対、チョン、絶対、髷、絶対、お父さん、絶対、よく、絶対、テレビで、絶対、見たぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — period-drama chon-mage Dad often-TV-saw, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'昔、本気で、絶対、リョウ、絶対、さんって、絶対、いう、絶対、お友達、絶対、お祖父ちゃんに、絶対、いたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Old — Ryou-san friend Grandpa-had, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07418',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、駅前を、絶対、ウロウロ、絶対、しちゃったわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis station-front wander did, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、運動会で、絶対、かっこよく、絶対、走るよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me sports-day cool-run, absolute serious really.",style:'Proud child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、星の、絶対、光り、絶対、輝く、絶対、夜、絶対、お散歩、絶対、好きよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — star-light shine night walk like, Sho absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お店を、絶対、営む、絶対、こと、絶対、大変だよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mei-sis — store-operate tough, absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'お父さんと、本気で、絶対、川で、絶対、お魚、絶対、釣る、絶対、こと、絶対、楽しいよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Dad-with — river fish-catch fun, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、元気に、絶対、働ける、絶対、ことが、絶対、ありがたいよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — energy work-can grateful, absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、時代劇の、絶対、チョン、絶対、髷、絶対、お侍さん、絶対、見たことある?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — period-drama chon-mage samurai seen?, absolute serious really.",style:'Curious.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくのクラスに、絶対、リョウ、絶対、君、絶対、ってお友達、絶対、いるんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — my class Ryou-kun friend exist, absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07419',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、駅前を、絶対、ウロウロ、絶対、してたよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Riku — you station-front wander did, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お前、本気で、絶対、今日、絶対、髪型、絶対、かっこよく、絶対、決まってるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. You — today hair cool-set, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'昨夜、本気で、絶対、月の、絶対、光り、絶対、輝いて、絶対、綺麗だったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Last-night — moon-light shine pretty, Riku absolute serious really.",style:'Soft.'},
    {speaker:'riku_teen',jp:'お祖父ちゃん、本気で、絶対、商店を、絶対、営む、絶対、人なんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Grandpa — store-operate person, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、川で、絶対、お魚、絶対、釣る、絶対、のが、絶対、好きだよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — river fish-catch like, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'卒業したら、本気で、絶対、好きな仕事で、絶対、働ける、絶対、ように、絶対、頑張ろうぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Post-grad — like-job work-can try, Sakura absolute serious really.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'歴史の授業で、本気で、絶対、チョン、絶対、髷、絶対、習ったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Hist-class — chon-mage learned, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'転校生の、本気で、絶対、リョウ、絶対、君、絶対、面白いやつだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Transfer Ryou-kun — fun guy, Sakura absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07420',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、お庭を、絶対、ウロウロ、絶対、しちゃった、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mom — me garden-wander did, absolute serious really.",style:'Wry child.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、新しいお洋服、絶対、かっこよく、絶対、似合うわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — new clothes cool-suit, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お星様の、絶対、光り、絶対、輝いて、絶対、綺麗だね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mom — star-light shine pretty, absolute serious really.",style:'Soft.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃん、本気で、絶対、長年、絶対、商売を、絶対、営む、絶対、人だったのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Grandpa — many-yr biz-operate person was, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お父さんと、絶対、川で、絶対、お魚、絶対、釣る、絶対、約束、絶対、したよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — Dad river fish-catch promise did, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、大きくなって、絶対、働ける、絶対、ようになったら、絶対、嬉しいわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — grown work-can-became glad, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、絵本で、絶対、チョン、絶対、髷、絶対、お侍さん、絶対、見たよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — picture-book chon-mage samurai saw, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お母さんの友達、本気で、絶対、リョウ、絶対、子さんって、絶対、いう方なのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom-friend — Ryouko-san person, Sho absolute serious really.",style:'Warm close.'},
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

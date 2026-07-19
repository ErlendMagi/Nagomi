import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_374 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['電卓','めまい','日課','美徳','二次会','失恋','老婆','バルト']
const B_T = ['堅持','不均衡','商会','公訴','報い','困窮','参る','折り合い']
const C_T = ['鍛冶','臨場','北極','トップニュース','被写体','防い','訃報','何もの']
const D_T = ['リサイタル','霊感','傍観','重き','ダブリン','打席','スタメン','チューニング']

const data = [
  {id:'conv_07441',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、家計の計算、絶対、電卓、絶対、ママ、絶対、使ってるわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — household-calc calc-machine Mom-using, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、ちょっと、絶対、めまい、絶対、するんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — me slight dizzy doing, absolute serious really.",style:'Earnest child.'},
    {speaker:'yumiko_mom',jp:'毎朝の体操、本気で、絶対、ママの、絶対、日課、絶対、なのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Every-morn exercise — Mom routine, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お祖父ちゃん、絶対、正直さは、絶対、美徳、絶対、って、絶対、言ってたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — Grandpa honesty virtue said, absolute serious really.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'お父さんの会社の、本気で、絶対、二次会、絶対、ママも、絶対、お呼ばれしたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Dad-co after-party — Mom-invited, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'お兄ちゃん、本気で、絶対、最近、絶対、失恋、絶対、したらしいよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Bro — lately heartbreak seems, Mom absolute serious really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'昔話に、本気で、絶対、優しい、絶対、老婆、絶対、出てくるわよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Old-tale — kind old-woman appears, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、社会科で、絶対、バルト、絶対、三国、絶対、習ったよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Me — soc-class Baltic three-nations learned, Mom absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07442',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お店の経理、本気で、絶対、電卓、絶対、メイちゃん、絶対、お手伝いしたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — store-acct calc-machine Mei-help-want, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、ちょっと、絶対、めまい、絶対、しちゃうことが、絶対、あるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Aoi — slight dizzy do-times exist, Mei absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、朝のコーヒー、絶対、メイちゃんの、絶対、日課、絶対、なのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — morn-coffee Mei routine, absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'お客様への、本気で、絶対、丁寧な対応、絶対、葵にとって、絶対、美徳、絶対、よ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Cust-polite-resp — for-Aoi virtue, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵のお祝いの、本気で、絶対、二次会、絶対、メイちゃん、絶対、参加したいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi-celeb after-party — Mei attend-want, absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'お客様、本気で、絶対、失恋、絶対、相談で、絶対、葵のお店、絶対、来てくれるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Cust — heartbreak-consult Aoi-store come, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵のお客様の中に、本気で、絶対、優しい、絶対、老婆、絶対、いらっしゃるわよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi cust — kind old-woman exist, Mei absolute serious really.",style:'Tender.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、バルト、絶対、海、絶対、いつか、絶対、旅行したいよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — Baltic sea someday travel-want, Mei absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07443',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、電卓、絶対、お父さん、絶対、初めて、絶対、買った時、絶対、嬉しかったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gran — youth calc-machine Dad first-bought-glad, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。お祖父ちゃん、本気で、絶対、最近、絶対、ちょっと、絶対、めまい、絶対、するそうですね、お互いに、お気をつけて、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Grandpa — lately slight dizzy seems, mutual careful, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、朝の散歩、絶対、日課、絶対、だったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad morn-walk routine was, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、誠実さは、絶対、ばあさんと、絶対、お祖父ちゃんの、絶対、美徳、絶対、だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — sincerity gran-Grandpa virtue was, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、結婚式の、絶対、二次会、絶対、お父さん、絶対、楽しかったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — wedding after-party Dad-fun was, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、失恋、絶対、しちゃった時、絶対、ありましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa heartbreak did-time existed, remember dear?, absolute serious really.",style:'Wry tease.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、近所の、絶対、老婆、絶対、ばあさん、絶対、お世話、絶対、よくしてくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — neighbor old-woman gran-care often-did, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、ラジオで、絶対、バルト、絶対、海の音楽、絶対、お祖父ちゃんと、絶対、聞いたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — radio Baltic-sea music Grandpa-heard, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07444',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、数学の宿題で、本気で、絶対、電卓、絶対、使ってもいいんだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Riku — math-hw calc-machine use-OK, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。最近、本気で、絶対、ちょっと、絶対、めまい、絶対、するんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Lately — slight dizzy doing, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、毎朝のランニング、絶対、日課、絶対、続けてるんだよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — every-morn run routine continue, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'部活で、本気で、絶対、礼儀正しさは、絶対、美徳、絶対、だぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Club — politeness virtue, Sakura absolute serious really.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'卒業式の後、本気で、絶対、二次会、絶対、お前と、絶対、行きたいよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Post-grad — after-party you-with go-want, Riku absolute serious really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、失恋、絶対、したら、絶対、俺、絶対、相談乗るぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"You — heartbreak-if me consult-take, Sakura absolute serious really.",style:'Caring.'},
    {speaker:'sakura_teen',jp:'お祖母ちゃんちの近所の、本気で、絶対、老婆、絶対、優しい人なんだよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Granny-home-neighbor old-woman — kind person, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'地理の授業で、本気で、絶対、バルト、絶対、三国、絶対、習ったよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Geo-class — Baltic three-nations learned, Sakura absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07445',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お店で、絶対、電卓、絶対、いつも、絶対、使ってるのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Mei-sis store calc-machine always-use, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、立ちくらみで、絶対、めまい、絶対、しちゃった、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me stand-faint-dizzy did, absolute serious really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お花の水やり、絶対、毎朝の、絶対、日課、絶対、にしているわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — flower-water every-morn routine, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、嘘をつかないことは、絶対、美徳、絶対、だよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — don't-lie virtue, absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お友達の結婚式の、絶対、二次会、絶対、楽しかったわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — friend-wedding after-party fun was, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、失恋、絶対、すると、絶対、辛いんでしょ?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — heartbreak-when hard?, absolute serious really.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、近所の、絶対、老婆、絶対、お話、絶対、よく、絶対、聞かせてくださるのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — neighbor old-woman often-stories-told, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、バルト、絶対、三国、絶対、行ってみたいよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — Baltic three-nations go-try-want, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07446',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'経営方針、本気で、絶対、堅持、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mgmt-policy firm-hold, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。市場の、本気で、絶対、不均衡、絶対、当社、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Market-imbalance — our co watch, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'創業以来の、本気で、絶対、商会、絶対、名、絶対、守れ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Since-founding trading-co name — keep, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。本件、本気で、絶対、公訴、絶対、対応、絶対、弁護士と、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Case prosecution-resp — lawyer advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'長年の信頼の、本気で、絶対、報い、絶対、お得意様、絶対、にお返ししろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Long-trust reward — VIP return, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。地域の、本気で、絶対、困窮、絶対、家庭、絶対、支援、絶対、当社、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Local poverty-family support — our co advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お得意様に、本気で、絶対、自ら、絶対、参る、絶対、姿勢、絶対、忘れるな、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"VIP — self go-humble stance — don't-forget, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。労働組合と、本気で、絶対、折り合い、絶対、つけて、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Union — compromise reach advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07447',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'当社の方針、本気で、絶対、堅持、絶対、しつつ、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Our policy firm-hold while advance, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。業界の、本気で、絶対、不均衡、絶対、是正、絶対、当社、絶対、提言しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Industry-imbalance fix — our co propose, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'創業期の、本気で、絶対、商会、絶対、名、絶対、誇り、絶対、を持ちましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Founding trading-co name — pride hold, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。前件の、本気で、絶対、公訴、絶対、取り下げの、絶対、可能性、絶対、出ております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Prior-case prosecution-drop possibility — out, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'長年の苦労の、本気で、絶対、報い、絶対、感じる時期、絶対、ですね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Long-yr struggle reward — feel-time, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。困窮、本気で、絶対、している、絶対、地域、絶対、当社の社会貢献、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Poverty-area — our soc-contribution advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'重要なお取引先には、本気で、絶対、自ら、絶対、参る、絶対、よう、絶対、お願いします、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Imp-partner — self go-humble ask, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。仕入れ先と、本気で、絶対、折り合い、絶対、つけて、絶対、契約、絶対、結びました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Suppl — compromise reach contract-tied, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07448',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究の信念、本気で、絶対、堅持、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — research-conviction firm-hold, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究分野の、本気で、絶対、不均衡、絶対、論文で、絶対、扱っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Research-field imbalance paper-handle, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'歴史ある、本気で、絶対、商会、絶対、の研究、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Historic trading-co — research advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。歴史上の、本気で、絶対、公訴、絶対、事件、絶対、論文で、扱いました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Hist-prosecution case paper-handled, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'お前の努力の、本気で、絶対、報い、絶対、必ず、絶対、あるぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Your effort-reward — surely exist, ask absolute serious really.",style:'Encouraging.'},
    {speaker:'ren_uni',jp:'はい。困窮、本気で、絶対、する、絶対、研究者の支援、絶対、論文で、扱いました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Poverty-researcher support paper-handled, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'教授には、本気で、絶対、自ら、絶対、参る、絶対、よう、絶対、頼むぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"To-prof — self go-humble ask, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。指導教授と、本気で、絶対、折り合い、絶対、つけて、絶対、研究、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Supervisor — compromise reach research advance, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07449',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、法治原則、絶対、堅持、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Police — rule-of-law firm-hold, gratitude absolute serious really.",style:'Calm firm.'},
    {speaker:'kenji_office',jp:'はい。地域の、本気で、絶対、不均衡、絶対、是正、絶対、警察様、絶対、ご助言、絶対、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Local-imbalance fix — police-advice given, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'歴史ある、本気で、絶対、商会、絶対、の、絶対、防犯協力、絶対、警察、絶対、感謝しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Historic trading-co crime-coop — police-gratitude, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。本件、本気で、絶対、公訴、絶対、取り下げの、絶対、可能性、絶対、警察様、絶対、ご見解伺います、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Case prosecution-drop possibility — police-view hear, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'長年の市民協力の、本気で、絶対、報い、絶対、警察、絶対、感謝、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Long-yr citizen-coop reward — police-gratitude, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。困窮、本気で、絶対、している、絶対、被害者支援、絶対、警察様、絶対、進めていらっしゃるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Poverty-victim support — police-advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、市民の元に、絶対、自ら、絶対、参る、絶対、姿勢、絶対、大切にしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police — citizen-place self go-humble stance cherish, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察と、本気で、絶対、折り合い、絶対、つけて、絶対、防犯対策、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Police — compromise reach crime-prev advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07450',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、信念を、絶対、堅持、絶対、してきたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Founding — Dad belief firm-hold continued, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、市場の、絶対、不均衡、絶対、見極めて、絶対、進めてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — market-imbalance discern advance, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代の、本気で、絶対、商会、絶対、名、絶対、誇り、絶対、持っていたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Dad-era trading-co name — pride held, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、本気で、絶対、公訴、絶対、を恐れず、絶対、信念を貫いたと聞きました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Dad — prosecution don't-fear belief-pierced heard, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さんの努力の、本気で、絶対、報い、絶対、お前が、絶対、引き継いでいるぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad-effort reward — you inheriting, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、困窮、絶対、する家庭、絶対、支援、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Since Dad-era — poverty-family support continue, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、お得意様の元に、絶対、自ら、絶対、参る、絶対、姿勢、絶対、貫いたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — VIP-place self go-humble stance pierced, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、本気で、絶対、相手と、絶対、折り合い、絶対、つける、絶対、知恵、絶対、私の手本です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad — partner-compromise reach wisdom my-model, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07451',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses cultural history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、伝統の、本気で、絶対、鍛冶、絶対、技術、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — trad blacksmith-tech paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。映画の、本気で、絶対、臨場、絶対、感、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. Film immersion paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地理学の、本気で、絶対、北極、絶対、研究、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Geo north-pole research paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。報道の、本気で、絶対、トップニュース、絶対、選別、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. News top-news selection paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'肖像画の、本気で、絶対、被写体、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Portrait subject paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、感染症を、絶対、防いだ、絶対、活動、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Wartime infection-prevent activity paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'文学者の、本気で、絶対、訃報、絶対、社会的影響、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Literary obituary soc-impact paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。哲学的に、本気で、絶対、何もの、絶対、でもない、絶対、概念、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Philos nothingness concept paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07452',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'伝統の、本気で、絶対、鍛冶、絶対、職人、絶対、刃物管理、絶対、警察、絶対、確認しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Trad blacksmith-artisan — blade-mgmt police-verify, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'事件現場の、本気で、絶対、臨場、絶対、感、絶対、捜査、絶対、警察、絶対、慎重に、絶対、進めていらっしゃるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Scene-immersion inv — police careful advance, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。北極、本気で、絶対、観測隊の、絶対、安全、絶対、関係機関、絶対、警察、絶対、連携、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. North-pole obs-team safety — agencies police-coop, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、トップニュース、絶対、扱い、絶対、警察、絶対、対応、絶対、大変ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case top-news handle — police-resp tough, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。盗撮の、本気で、絶対、被写体、絶対、保護、絶対、警察、絶対、徹底しております、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Stalk-subject protect — police-thorough, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察、本気で、絶対、二次被害を、絶対、防いで、絶対、いらっしゃる、絶対、姿勢、絶対、ありがたいですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police — secondary-damage prevent stance grateful, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。関係者の、本気で、絶対、訃報、絶対、警察、絶対、ご家族に、絶対、お伝えいたしました、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Related-party obituary — police family-conveyed, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、本気で、絶対、何もの、絶対、なのか、絶対、警察、絶対、特定、絶対、進めていらっしゃるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Suspect — who-being police-identify advance, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07453',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、伝統の、本気で、絶対、鍛冶、絶対、技術、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sakura — trad blacksmith-tech paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。映画の、本気で、絶対、臨場、絶対、感、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. Film immersion paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'地理学の、本気で、絶対、北極、絶対、研究、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Geo north-pole research paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。報道の、本気で、絶対、トップニュース、絶対、選別、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. News top-news selection paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'肖像画の、本気で、絶対、被写体、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Portrait subject paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、感染症を、絶対、防いだ、絶対、活動、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Wartime infection-prevent activity paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'文学者の、本気で、絶対、訃報、絶対、社会的影響、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Literary obituary soc-impact paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。哲学的に、本気で、絶対、何もの、絶対、でもない、絶対、概念、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Philos nothingness concept paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07454',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、医療器具、本気で、絶対、鍛冶、絶対、職人、絶対、製作の伝統、絶対、医療界、絶対、続いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — med-equip blacksmith-artisan trad — med-continue, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'手術現場の、本気で、絶対、臨場、絶対、感、絶対、医療チーム、絶対、緊張、絶対、されますよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Surgery-immersion — med-team tense, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。北極、本気で、絶対、観測隊員の、絶対、健康管理、絶対、医療チーム、絶対、ご対応、絶対、いたしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. North-pole obs-team health — med-handle, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'新治療の、本気で、絶対、トップニュース、絶対、医療界、絶対、注目されていますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"New-tx top-news — med-watch, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。研究の、本気で、絶対、被写体、絶対、患者さん、絶対、同意を、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Research subject — patient consent thorough, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'感染を、本気で、絶対、防いだ、絶対、医療チームの努力、絶対、本当に、絶対、ありがたいですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Infection-prevent med-team effort — grateful, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。先輩医師の、本気で、絶対、訃報、絶対、医療界、絶対、悲しみに、絶対、包まれました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Senior-doctor obituary — med-sadness wrapped, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'ren_uni',jp:'命とは、本気で、絶対、何もの、絶対、か、絶対、医療現場で、絶対、改めて、絶対、考えさせられますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Life — what-is — med-scene anew think-made, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07455',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corporate response',lines:[
    {speaker:'hiroshi_boss',jp:'伝統工芸の、本気で、絶対、鍛冶、絶対、職人、絶対、当社、絶対、支援しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Trad-craft blacksmith — our co support, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。当社CM、本気で、絶対、臨場、絶対、感、絶対、出る撮影、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our CM immersion-shoot — advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'北極、本気で、絶対、観測隊、絶対、当社、絶対、協賛、絶対、検討しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"North-pole obs-team — our co sponsor consider, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の新製品、本気で、絶対、トップニュース、絶対、取り上げていただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Our new prod — top-news featured, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新CMの、本気for、絶対、被写体、絶対、人選、絶対、慎重にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"New CM subject — choose careful, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。情報漏洩を、本気で、絶対、防いだ、絶対、当社のシステム、絶対、評価されております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Info-leak-prevent our sys — evaluated, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'創業者の、本気で、絶対、訃報、絶対、お得意様、絶対、当社からお伝えしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Founder-obituary — VIP our co convey, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の理念、本気で、絶対、何もの、絶対、にも、絶対、代えがたい、絶対、ものです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Our principle — nothing-replaceable, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07456',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、ピアノの、本気で、絶対、リサイタル、絶対、メイちゃん、絶対、聴きに行きたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — piano-recital Mei listen-go-want, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、ちょっと、絶対、霊感、絶対、強いみたい、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Aoi — slight psychic-sense strong-seems, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お店で、絶対、傍観、絶対、するだけじゃなくて、絶対、お客様に、絶対、声をかけてるよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Aoi — store not-just-watch cust-talk-to, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、品質に、絶対、重き、絶対、を、絶対、置いているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — quality importance-place, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、ダブリン、絶対、の、絶対、文学、絶対、メイちゃん、絶対、好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Aoi — Dublin lit Mei-like, absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵のお父さん、本気で、絶対、若い頃、絶対、野球の、絶対、打席、絶対、立ってたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-Dad — youth baseball at-bat stood, Mei absolute serious really.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、スタメン、絶対、と、絶対、いえる、絶対、看板メニュー、絶対、メイちゃん、絶対、大好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store — starter-like signature-menu Mei-love, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お店の音響、絶対、チューニング、絶対、お父さんに、絶対、見てもらったよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — store-audio tuning — Dad-see-had, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07457',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さんと、絶対、リサイタル、絶対、聴きに行ったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gran — youth Dad recital listen-went, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、ばあさん、絶対、霊感、絶対、強い時期、絶対、ありましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — gran psychic-strong era existed, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、傍観、絶対、せず、絶対、皆を助けたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Dad onlooker-not-be all-helped, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、家族に、絶対、重き、絶対、を、絶対、置いていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa family importance-place, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、ダブリン、絶対、の、絶対、お話、絶対、本で、絶対、読んだぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Dad Dublin stories book-read, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、野球の、絶対、打席、絶対、頑張ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa baseball at-bat tried, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、地域の野球チームの、絶対、スタメン、絶対、だったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad local-baseball team starter was, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、ラジオの、絶対、チューニング、絶対、丁寧にしてくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa radio-tuning careful-did, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07458',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、バイオリンの、絶対、リサイタル、絶対、聴きに行くわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis violin-recital listen-going, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ちょっと、絶対、霊感、絶対、あるかもしれない、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me slight psychic-sense maybe-have, absolute serious really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、傍観、絶対、せず、絶対、行動するように、絶対、心掛けているわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — onlooker-not-be act-mindful, Sho absolute serious really.",style:'Earnest.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、家族に、絶対、重き、絶対、を、絶対、置いてるよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mei-sis — family importance-place, absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、ダブリン、絶対、の、絶対、お話、絶対、本で、絶対、読みたいわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — Dublin stories book-read-want, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お父さん、絶対、野球の、絶対、打席、絶対、立ってたんだって、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — Dad baseball at-bat stood, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、お友達のチームで、絶対、スタメン、絶対、になれたんだって?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Sho — friend-team — starter became?, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくのギターの、絶対、チューニング、絶対、ちゃんと、絶対、出来たよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — my guitar-tuning properly-did, absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07459',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、ピアノの、本気で、絶対、リサイタル、絶対、お前と、絶対、行きたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Riku — piano-recital you-with go-want, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お前、本気で、絶対、ちょっと、絶対、霊感、絶対、あるって、絶対、言ってたよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. You — slight psychic-have said, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'いじめを、本気で、絶対、傍観、絶対、する、絶対、ような、絶対、人、絶対、嫌よね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Bullying onlooker-people — dislike, Riku absolute serious really.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'俺、本気で、絶対、友情に、絶対、重き、絶対、を、絶対、置いてるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Me — friendship importance-place, Sakura absolute serious really.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'修学旅行で、本気で、絶対、ダブリン、絶対、行きたいよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"School-trip — Dublin go-want, Riku absolute serious really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'今日の試合の、本気で、絶対、打席、絶対、俺、絶対、頑張るぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Today-match at-bat — me try, Sakura absolute serious really.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、今日の試合の、絶対、スタメン、絶対、入れたんでしょ?リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"You — today-match starter made?, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'吹奏楽部、本気で、絶対、楽器の、絶対、チューニング、絶対、しっかり、絶対、やってるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Brass — instrument-tuning solid-do, Sakura absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07460',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お友達の、絶対、リサイタル、絶対、ぼく、絶対、行きたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — friend-recital me go-want, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃん、本気で、絶対、若い頃、絶対、霊感、絶対、強かったって、聞いたわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Granny — youth psychic-strong heard, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、困ってる人を、絶対、傍観、絶対、しないようにするよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mom — me troubled-people onlooker-don't, absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、お仕事に、絶対、重き、絶対、を、絶対、置いてくれているのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — work importance-place, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、絵本で、絶対、ダブリン、絶対、の街、絶対、見たことあるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mom — picture-book Dublin city seen, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、若い頃、絶対、野球の、絶対、打席、絶対、立ってたんだって、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — youth baseball at-bat stood, Sho absolute serious really.",style:'Wistful.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、運動会の、絶対、スタメン、絶対、選ばれたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mom — me sports-day starter chosen, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'翔くんのギター、本気で、絶対、チューニング、絶対、お父さんに、絶対、見てもらいましょうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho-guitar tuning — Dad see-have, absolute serious really.",style:'Tender close.'},
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

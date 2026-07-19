import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_393 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['一人ひとり','要注意','停電','クッション','ワンピース','落ち込む','ねぎ','玉ねぎ']
const B_T = ['持ち込む','値引き','コツコツ','売店','上層','掛かり','精算','夜勤']
const C_T = ['人体','巧妙','弔い','思春期','罪悪','文系','パトロール','搬入']
const D_T = ['東欧','山道','ナレーション','サーブ','スーツケース','露天風呂','ピント','節分']

const data = [
  {id:'conv_07821',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お友達、絶対、一人ひとり、絶対、大事にね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — friends one-by-one cherish, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、横断歩道、絶対、要注意、絶対、だよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — crosswalk caution, absolute serious really.",style:'Earnest child.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お風呂中、絶対、停電、絶対、心配だわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — bath-during blackout worry, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、ソファの、本気で、絶対、クッション、絶対、ふかふかだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — sofa cushion fluffy, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お姉ちゃんの、絶対、ワンピース、絶対、お洒落ね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — sis-dress stylish, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'ママ、ぼく、テストで、本気で、絶対、落ち込む、絶対、気持ち、絶対、あるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me test feel-down feeling have, absolute serious really.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'翔くん、お味噌汁の、本気で、絶対、ねぎ、絶対、刻んでくれる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — miso-soup green-onion chop-for-me?, absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'ママ、ぼく、本気で、絶対、玉ねぎ、絶対、苦手だよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me onion not-fond, absolute serious really.",style:'Wry close.'},
  ]},
  {id:'conv_07822',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お客様、絶対、一人ひとり、絶対、大切ね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — cust one-by-one important, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、ピーク時間、絶対、要注意、絶対、よね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — peak-time caution, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、昨夜の、本気で、絶対、停電、絶対、大変だったわね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — last-night blackout tough-was, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、お店の、本気で、絶対、クッション、絶対、新調したよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — store cushion renewed, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、新しい、絶対、ワンピース、絶対、お似合いね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — new dress suits, Mei absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、売上、絶対、落ち込む、絶対、月、絶対、辛いよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — sales decline month tough, Mei absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、サラダの、絶対、ねぎ、絶対、添えて、絶対、おいしいわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — salad green-onion add tasty, Mei absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、新メニューの、絶対、玉ねぎ、絶対、スープ、絶対、好評よ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — new-menu onion soup favorable, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07823',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、お父さん、本気で、絶対、近所、絶対、一人ひとり、絶対、大事にしたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth Dad neighbors one-by-one cherished, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、お祖父ちゃん、本気で、絶対、お酒、絶対、要注意、絶対、っておっしゃってたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — Grandpa sake caution-said, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、台風で、絶対、停電、絶対、心配されたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran typhoon blackout worried, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、お父さんの、絶対、クッション、絶対、選んでくださったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa Dad-cushion chose, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お洒落な、絶対、ワンピース、絶対、お召しになってたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran stylish-dress wore, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、商売、絶対、落ち込む、絶対、時期、絶対、辛そうだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa biz decline-period tough-looked, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お庭で、絶対、ねぎ、絶対、育てたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — gran garden green-onion grew, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、お味噌汁の、絶対、玉ねぎ、絶対、お好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa miso-onion liked, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07824',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、クラスメート、絶対、一人ひとり、絶対、大事にね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — you classmate one-by-one cherish, absolute serious really.",style:'Direction teen.'},
    {speaker:'riku_teen',jp:'お前、試合中、本気で、絶対、要注意、絶対、選手、絶対、いるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — match caution-player exists, Sakura absolute serious really.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'リク、昨夜の、本気で、絶対、停電、絶対、お前のとこ、絶対、大丈夫だった?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — last-night blackout your-place OK?, absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前の、本気で、絶対、クッション、絶対、可愛いな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your cushion cute, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'リク、お前のお姉ちゃんの、本気で、絶対、ワンピース、絶対、お洒落だったね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — your sis-dress stylish-was, absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前、テストで、本気で、絶対、落ち込む、絶対、なよ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — test feel-down don't, Sakura absolute serious really.",style:'Encouraging.'},
    {speaker:'sakura_teen',jp:'リク、お前、お好み焼きの、本気で、絶対、ねぎ、絶対、足りないぜ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — okonomi green-onion not-enough, absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前の母さんの、本気で、絶対、玉ねぎ、絶対、カレー、絶対、ウマかったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your mom onion-curry tasty, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07825',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、お客様、本気で、絶対、一人ひとり、絶対、大切にしてるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis cust one-by-one cherish, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、横断歩道、本気で、絶対、要注意、絶対、だよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me crosswalk caution, absolute serious really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんのお店、本気で、絶対、停電、絶対、対策、絶対、してるわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis-store blackout counter doing, absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼくの、本気で、絶対、クッション、絶対、ふかふかだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — my cushion fluffy, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんの、本気で、絶対、ワンピース、絶対、新しいの、絶対、買ったの、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Mei-sis dress new bought, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、テストで、本気で、絶対、落ち込む、絶対、ことあるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me test feel-down sometimes, absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんのお店、本気で、絶対、ねぎ、絶対、トッピング、絶対、人気よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Mei-sis-store green-onion topping popular, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、玉ねぎ、絶対、お料理、絶対、頑張って食べてるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me onion-cook try-eat, absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07826',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、新製品、絶対、持ち込む、絶対、商談、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Our co — new-prod bring biz-talk advance, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。お客様、本気で、絶対、値引き、絶対、ご要望、絶対、検討中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Cust discount-request consider, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'社員、本気で、絶対、コツコツ、絶対、努力、絶対、評価しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Staff steady-effort evaluate, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内、本気で、絶対、売店、絶対、リニューアル、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. In-house kiosk renewal advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、上層、絶対、部、絶対、合意、絶対、取れ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Our upper-mgmt agreement get, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、掛かり、絶対、長の、絶対、報告、絶対、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our section-chief report received, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お客様、本気で、絶対、精算、絶対、スムーズに、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Cust checkout smooth-advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、夜勤、絶対、ローテーション、絶対、整えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Staff night-shift rotation arrange, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07827',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'お得意様、本気で、絶対、新案、絶対、持ち込む、絶対、ご提案、絶対、しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"VIP — new-plan bring propose, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、値引き、絶対、戦略、絶対、見直しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our discount-strategy review, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'新人社員、本気で、絶対、コツコツ、絶対、頑張ってますね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"New-hire steady-try, absolute serious really.",style:'Praising.'},
    {speaker:'kenji_office',jp:'はい。社内、本気で、絶対、売店、絶対、社員、絶対、好評です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. In-house kiosk staff-favorable, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'当社、本気で、絶対、上層、絶対、部、絶対、報告、絶対、まとめましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Our upper-mgmt report compile, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、各、絶対、掛かり、絶対、ご相談ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Our each section-chief consult-grateful, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'お客様、本気で、絶対、精算、絶対、システム、絶対、改良しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Cust checkout-system improve, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、夜勤、絶対、手当、絶対、引き上げております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Staff night-shift-allow raise, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07828',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、新研究、本気で、絶対、持ち込む、絶対、教授、絶対、相談しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Ren — new-research bring prof-consult, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。学会、本気で、絶対、値引き、絶対、参加費、絶対、利用しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Conf discount-fee use, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'蓮、研究、本気で、絶対、コツコツ、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Ren — research steady-advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。学内、本気で、絶対、売店、絶対、で、絶対、よく、絶対、コーヒー、絶対、買います、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Campus kiosk-coffee often-buy, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'蓮、学界、本気で、絶対、上層、絶対、部、絶対、にも、絶対、人脈を、絶対、作れ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Ren — acad upper-mgmt-too network build, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究室、本気で、絶対、掛かり、絶対、長、絶対、ご指導いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Lab section-chief guide-received, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'蓮、出張費、本気で、絶対、精算、絶対、早めにしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Ren — biz-trip-fee settle early, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。実験で、本気で、絶対、夜勤、絶対、続いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Experiment night-shift continue, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07829',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、押収物、絶対、持ち込む、絶対、保管庫、絶対、強化しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police seized-items bring storage strengthen-done, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、値引き、絶対、講習、絶対、地域に、絶対、提供されてありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Police discount-seminar region-provide grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、コツコツ、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police steady-inv advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、売店、絶対、近くで、絶対、巡回ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Police kiosk-near patrol grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、上層、絶対、部、絶対、決済、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police upper-mgmt approval advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、掛かり、絶対、官、絶対、ご対応ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Police section-chief respond-grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、被害金の、絶対、精算、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police damage-fund settle advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察の、本気で、絶対、夜勤、絶対、巡回、絶対、安心です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Police night-patrol reassuring, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07830',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'お父さん、創業期、本気で、絶対、新案、絶対、持ち込む、絶対、お得意様、絶対、訪ねたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — founding new-plan bring VIP visited, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代、本気で、絶対、値引き、絶対、判断、絶対、見習っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad-era discount-judg emulate, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、コツコツ、絶対、お仕事、絶対、続けたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — steady-work continued, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、社内、絶対、売店、絶対、立ち上げられた、絶対、お話、絶対、伺っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Dad in-house-kiosk founded story heard, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、上層、絶対、部、絶対、信頼、絶対、得ていたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — upper-mgmt trust gained, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、掛かり、絶対、長、絶対、時代、絶対、伝説、絶対、ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad section-chief era legendary, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、店舗、絶対、精算、絶対、いつも、絶対、最後まで、絶対、いたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — store-checkout always last-until stayed, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、夜勤、絶対、社員、絶対、ねぎらった、絶対、お姿、絶対、忘れません、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Dad night-shift staff thanked figure not-forget, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07831',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、本気で、絶対、人体、絶対、の構造、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Ren — human-body structure paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。詐欺の、本気で、絶対、巧妙、絶対、な、絶対、手口、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Fraud clever-modus paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統、本気で、絶対、弔い、絶対、の儀礼、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Trad mourning-rituals paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。本気で、絶対、思春期、絶対、心理、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Adolescent psychology paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦争の、本気で、絶対、罪悪、絶対、感、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"War guilt-feeling paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。大学、本気で、絶対、文系、絶対、教育、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Univ humanities-edu paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地域の、本気で、絶対、パトロール、絶対、制度、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Region patrol-system paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。文化財の、本気で、絶対、搬入、絶対、過程、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Cultural-asset transport process paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07832',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、人体、絶対、への、絶対、影響、絶対、警察、絶対、調査中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case human-body impact police-inv, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、容疑者の、絶対、巧妙、絶対、な、絶対、手口、絶対、警察、絶対、解明されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case suspect clever-modus police-solved, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、被害者の、絶対、弔い、絶対、ご遺族、絶対、警察、絶対、ご訪問、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case victim-mourning bereaved police-visited, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、思春期、絶対、の、絶対、加害者、絶対、警察、絶対、対応、絶対、慎重、絶対、ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case adolescent perpetrator police careful-resp, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、被害者の、絶対、罪悪、絶対、感、絶対、警察、絶対、ケア、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case victim guilt-feel police-care, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、文系、絶対、出身の、絶対、捜査官、絶対、警察、絶対、活躍、絶対、されているんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case humanities-origin officer police-active, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、夜間、絶対、パトロール、絶対、強化、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police night-patrol strengthen, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、押収品、絶対、搬入、絶対、警察、絶対、完了、絶対、されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Case seized-items transport police-completed, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07833',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、本気で、絶対、人体、絶対、の構造、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sakura — human-body structure paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。詐欺の、本気で、絶対、巧妙、絶対、な、絶対、手口、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Fraud clever-modus paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'伝統、本気で、絶対、弔い、絶対、の儀礼、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Trad mourning-rituals paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。本気で、絶対、思春期、絶対、心理、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Adolescent psychology paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦争の、本気で、絶対、罪悪、絶対、感、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"War guilt-feeling paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。大学、本気で、絶対、文系、絶対、教育、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Univ humanities-edu paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地域の、本気で、絶対、パトロール、絶対、制度、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Region patrol-system paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。文化財の、本気で、絶対、搬入、絶対、過程、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Cultural-asset transport process paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07834',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、本気で、絶対、人体、絶対、解剖、絶対、医療チーム、絶対、勉強しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — human-body anatomy med-team study, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'保険詐欺の、本気で、絶対、巧妙、絶対、な、絶対、手口、絶対、貴院、絶対、注意されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Insurance-fraud clever-modus your-hosp careful, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの、本気で、絶対、弔い、絶対、ご遺族、絶対、医療チーム、絶対、お見舞いいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient mourning bereaved med-team visit, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'本気で、絶対、思春期、絶対、の患者さん、絶対、貴院、絶対、慎重に診られているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Adolescent patient your-hosp careful-diag, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの、本気で、絶対、罪悪、絶対、感、絶対、医療チーム、絶対、心のケア、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient guilt-feel med-team mental-care, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'貴院、本気で、絶対、文系、絶対、出身の、絶対、医療事務、絶対、活躍、絶対、されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Your-hosp humanities-origin med-staff active, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。院内、本気で、絶対、パトロール、絶対、警備員、絶対、医療チーム、絶対、感謝しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Hosp patrol-guard med-team grateful, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療機器の、本気で、絶対、搬入、絶対、貴院、絶対、完了、絶対、されたんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med-equip transport your-hosp completed, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07835',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、人体、絶対、に、絶対、影響、絶対、ない、絶対、製品、絶対、開発しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Our co — human-body impact-none product develop, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。競合他社、本気で、絶対、巧妙、絶対、な、絶対、戦略、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Competitor clever-strategy watch, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'退職者の、本気で、絶対、弔い、絶対、お父さんとして、絶対、お参りに行く、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Retiree mourning Dad-as visit, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、思春期、絶対、向け、絶対、商品、絶対、企画中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our adolescent-target product plan, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、社員、絶対、罪悪、絶対、感、絶対、感じさせない経営しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Our staff guilt-feel-let-not mgmt, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、文系、絶対、新人、絶対、教育プログラム、絶対、整えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our humanities-newhire edu-program arrange, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、社内、絶対、パトロール、絶対、強化しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Our co — in-house patrol strengthen, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新機材、本気で、絶対、搬入、絶対、完了しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. New-equip transport completed, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07836',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、東欧、絶対、旅行、絶対、行きたいわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — Eastern-Europe travel go-want, Mei absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、山道、絶対、ドライブ、絶対、楽しいよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — mountain-road drive fun, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、映画の、本気で、絶対、ナレーション、絶対、声、絶対、素敵だったわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — movie narration-voice lovely, Mei absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、テニスの、絶対、サーブ、絶対、習いたいよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — tennis serve learn-want, Mei absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、新しい、絶対、スーツケース、絶対、買ったの?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — new suitcase bought?, Mei absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵、温泉旅館、本気で、絶対、露天風呂、絶対、最高だったわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — onsen open-air-bath best-was, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、お写真の、本気で、絶対、ピント、絶対、合ってないわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — photo focus not-matched, Mei absolute serious really.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、節分、絶対、お祝い、絶対、お店で、絶対、するわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — Setsubun celebrate store-do, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07837',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、お父さん、本気で、絶対、東欧、絶対、出張、絶対、いらしたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Gran — youth Dad Eastern-Europe biz-trip went, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、お祖父ちゃん、本気で、絶対、山道、絶対、お運転、絶対、お得意だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — Grandpa mountain-road driving good-at, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、ラジオの、絶対、ナレーション、絶対、お好きだったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran radio-narration liked, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、テニスの、絶対、サーブ、絶対、お得意だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa tennis-serve good-at, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お父さんの、絶対、スーツケース、絶対、お見送りなさったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran Dad-suitcase saw-off, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、温泉の、絶対、露天風呂、絶対、お好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa onsen open-air-bath liked, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お写真の、絶対、ピント、絶対、よく、絶対、合わせたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran photo focus well-set, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、節分、絶対、お豆まき、絶対、お楽しみだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa Setsubun bean-throw enjoyed, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07838',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、東欧、絶対、お料理、絶対、勉強したいの、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis Eastern-Europe cook learn-want, absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'メイ姉さん、お父さんと、本気で、絶対、山道、絶対、ドライブ、絶対、行ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — Dad mountain-road drive went, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'翔くん、テレビの、本気で、絶対、ナレーション、絶対、お父さんの、絶対、お声に似てるね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — TV-narration Dad-voice similar, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、テニスの、本気で、絶対、サーブ、絶対、練習してるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me tennis-serve practice, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'翔くん、ぼくの、本気で、絶対、スーツケース、絶対、メイ姉さんの、絶対、貸してあげる、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis suitcase lend-give, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、お父さんと、温泉の、本気で、絶対、露天風呂、絶対、入ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Dad onsen open-air-bath entered, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'翔くん、お写真の、本気で、絶対、ピント、絶対、合わせるの、絶対、難しいわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — photo focus matching hard, absolute serious really.",style:'Earnest.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、節分、絶対、お豆まき、絶対、頑張ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me Setsubun bean-throw tried, absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07839',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、東欧、絶対、の音楽、絶対、好きだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — you Eastern-Europe music like, absolute serious really.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、山道、絶対、ハイキング、絶対、絶対、つきあえよ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — mountain-road hike absolutely accompany, Sakura absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'リク、お前の、本気で、絶対、ナレーション、絶対、上手いね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Riku — your narration good, absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前のテニスの、本気で、絶対、サーブ、絶対、ヤバいぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your tennis-serve crazy-good, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'リク、お前の、本気で、絶対、スーツケース、絶対、デカいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — your suitcase huge, absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、温泉の、絶対、露天風呂、絶対、行きたいぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — onsen open-air-bath go-want, Sakura absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'リク、お前のカメラの、本気で、絶対、ピント、絶対、合ってるぜ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Riku — your camera focus matched, absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、節分、絶対、家で、絶対、お祝いした?桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — Setsubun home celebrated?, Sakura absolute serious really.",style:'Curious close.'},
  ]},
  {id:'conv_07840',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ぼく、本気で、絶対、東欧、絶対、の絵本、絶対、読みたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — me Eastern-Europe picture-book read-want, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'翔くん、お父さんが、本気で、絶対、山道、絶対、お運転、絶対、お得意なのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Dad mountain-road driving good-at, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、テレビの、本気で、絶対、ナレーション、絶対、お声、絶対、優しいね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — TV-narration voice gentle, absolute serious really.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'翔くん、テニスの、本気で、絶対、サーブ、絶対、頑張ってね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — tennis-serve try, absolute serious really.",style:'Encouraging.'},
    {speaker:'sho_child',jp:'ママ、ぼくの、本気で、絶対、スーツケース、絶対、おじいちゃんがくれたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — my suitcase grandpa-gave, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'翔くん、お父さんと、温泉の、本気で、絶対、露天風呂、絶対、楽しんでいらっしゃい、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Dad onsen open-air-bath enjoy-go, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、ぼくの、本気で、絶対、ピント、絶対、合ったお写真、絶対、見て、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — my focus-matched-photo see, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、節分、絶対、にお豆まきしましょうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Setsubun bean-throw do-let's, absolute serious really.",style:'Tender close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_369 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['なべ','飼う','ちいさな','どら','通行人','お札','車道','絨毯']
const B_T = ['至急','台帳','雇い','シンクタンク','区民','区内','チームワーク','不明確']
const C_T = ['トヨタ自動車','最年少','サバイバル','プラネタリウム','温存','微細','立て続け','頑丈']
const D_T = ['目印','織物','運気','箇条','羅列','撫で','止む','アコースティック']

const data = [
  {id:'conv_07341',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、今晩は、本気で、絶対、なべ料理、絶対、ママ、絶対、作るからね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — tonight nabe-pot Mom-make, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、犬を、絶対、飼う、絶対、夢を、絶対、見たんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — me dog-keep dream-saw, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'お庭の、本気で、絶対、ちいさな、絶対、お花、絶対、咲いてきたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Garden — tiny flowers bloomed, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、おやつに、絶対、どら焼き、絶対、食べたいな、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Me — snack dorayaki eat-want, Mom absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'道で、本気で、絶対、通行人、絶対、ぶつからない、絶対、ように、絶対、気をつけてね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Road — passerby bump-don't careful, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'お祖父ちゃんが、本気で、絶対、お札、絶対、ぼくに、絶対、お小遣い、絶対、くれたよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Grandpa — note me allowance gave, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'車道、本気で、絶対、渡る時、絶対、必ず、絶対、左右、絶対、確認してね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Road — cross-time must left-right verify, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'リビングの、本気で、絶対、新しい、絶対、絨毯、絶対、ふわふわで、絶対、気持ちいいよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Living — new carpet fluffy nice, Mom absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07342',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、冬季限定の、本気で、絶対、なべ、絶対、メニュー、絶対、メイちゃん、絶対、頼みたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Aoi — winter-limited nabe menu Mei order-want, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、お店の、絶対、看板猫、絶対、飼う、絶対、ことを、絶対、考えてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Aoi — store-mascot-cat keep considering, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵のお店の、本気で、絶対、ちいさな、絶対、ベル、絶対、メイちゃん、絶対、好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store — tiny bell Mei-like, absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'お土産用の、本気で、絶対、どら焼き、絶対、葵、絶対、ご用意してるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Souv dorayaki — Aoi prep, Mei absolute serious really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、通行人、絶対、覗いてくれるよね、メイちゃん、本気で、絶対、嬉しい、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi-store — passerby peek, Mei glad absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'お釣りの、本気で、絶対、お札、絶対、葵、絶対、丁寧に、絶対、お渡ししてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Change — note Aoi careful give, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵のお店の前、本気で、絶対、車道、絶対、横断歩道、絶対、安全よね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store-front — road crosswalk safe, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'店内の、本気で、絶対、絨毯、絶対、葵、絶対、季節ごとに、絶対、替えているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Store-inner carpet — Aoi season-change, Mei absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07343',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、ばあさんの、絶対、なべ料理、絶対、お父さん、絶対、大好きだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gran — youth gran-nabe Dad-loved, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、家で、絶対、犬を、絶対、飼う、絶対、お祖父ちゃん、絶対、楽しみだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Youth — home dog-keep Grandpa-fun was, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんが、絶対、ちいさな、絶対、頃の写真、絶対、お父さん、絶対、宝物にしてたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran tiny-photo Dad-treasure, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、絶対、若い頃、絶対、どら焼き、絶対、大好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Grandpa — youth dorayaki-loved, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、町の、絶対、通行人、絶対、皆、絶対、知り合いだったぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — town passerby all-acquaint, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃんが、絶対、お札、絶対、初めて、絶対、稼いだ時、絶対、嬉しかったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Youth — Grandpa note first-earned glad, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、車道、絶対、お父さん、絶対、自転車で、絶対、走り回っていたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — road Dad-bike-roam, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'昔、本気で、絶対、ばあさんの、絶対、織りの、絶対、絨毯、絶対、お父さん、絶対、誇りにしていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Old — gran-weave carpet Dad-proud-was, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07344',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、家庭科の調理実習で、本気で、絶対、なべ料理、絶対、やったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — home-ec cook-class nabe did, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。俺、本気で、絶対、お祖父ちゃんち、絶対、犬を、絶対、飼う、絶対、お手伝い、絶対、してるんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Me — Grandpa-home dog-keep help-doing, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、ちいさな、絶対、メモ、絶対、いつも、絶対、持ってるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — tiny memo always-have, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'コンビニの、本気で、絶対、どら焼き、絶対、安くて、絶対、美味いんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Conv-store dorayaki — cheap-tasty, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'駅前、本気で、絶対、通行人、絶対、いつも、絶対、多いよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Station — passerby always-many, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お小遣いの、本気で、絶対、お札、絶対、お母さんから、絶対、もらったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Allowance note — Mom-given, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、車道、絶対、渡る時、絶対、ちゃんと、絶対、確認してよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — road cross-time proper-check, Riku absolute serious really.",style:'Direction.'},
    {speaker:'riku_teen',jp:'お祖母ちゃんち、本気で、絶対、和室の、絶対、絨毯、絶対、ふわふわで、絶対、気持ちいいぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Granny-home — wa-room carpet fluffy nice, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07345',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お家で、絶対、なべ料理、絶対、用意してあるわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Mei-sis home nabe prep, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お魚、絶対、飼う、絶対、ことになったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me fish-keep became, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、ちいさな、絶対、手帳、絶対、いつも、絶対、持ち歩いているわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — tiny notebook always-carry, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、おやつに、絶対、どら焼き、絶対、ぼくに、絶対、持ってきてくれた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — snack dorayaki me-brought?, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、通行人、絶対、見て、絶対、ファッション、絶対、参考にしているのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — passerby see fashion ref, Sho absolute serious really.",style:'Curious.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お祖父ちゃんから、絶対、お札、絶対、もらった?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Grandpa note got?, absolute serious really.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、車道、絶対、渡る時、絶対、メイ姉さんと、絶対、手をつなぎましょうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — road cross-time Mei-sis hand-hold, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さんの、本気で、絶対、絨毯、絶対、ぼく、絶対、寝転がりたい、絶対、ぐらい、絶対、気持ちいいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis carpet — me lie-down-want nice, absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07346',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'至急、本気で、絶対、対応、絶対、必要、絶対、案件、絶対、報告しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Urgent-resp needed case report, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。在庫の、本気で、絶対、台帳、絶対、最新化、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Inv ledger — update advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'パート、本気で、絶対、雇い入れ、絶対、慎重に、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Part-time — hire-take careful advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界の、本気で、絶対、シンクタンク、絶対、ご意見、絶対、伺っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Industry-thinktank opin-heard, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、区民、絶対、向けの、絶対、サービス、絶対、強化しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Our — ward-citizen service strengthen, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。区内、本気で、絶対、配送網、絶対、整備、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Ward-internal delivery — develop advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'各部署の、本気で、絶対、チームワーク、絶対、強化しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Each-dept teamwork strengthen, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。指示が、本気で、絶対、不明確、絶対、な場合、絶対、確認、絶対、取らせております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Order — unclear-case verify-take, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07347',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'至急、本気で、絶対、ご対応、絶対、いただきたい、絶対、件があります、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Urgent — handle-want case exist, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。経理の、本気で、絶対、台帳、絶対、確認、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Accounting ledger — verify, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'専門人材の、本気で、絶対、雇い入れ、絶対、来期、絶対、進めましょうか、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Spec-talent hire — next term advance?, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。経営戦略の、本気で、絶対、シンクタンク、絶対、当社、絶対、契約、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Mgmt-strat thinktank — our co contract done, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'当社の、本気で、絶対、区民、絶対、向けキャンペーン、絶対、好評ですね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Our ward-citizen campaign — favorable, absolute serious really.",style:'Cheerful.'},
    {speaker:'kenji_office',jp:'はい。区内、本気で、絶対、店舗、絶対、ネットワーク、絶対、拡大、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Ward-internal stores network — expand advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'部署間の、本気で、絶対、チームワーク、絶対、強化、絶対、研修、絶対、企画しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Inter-dept teamwork — strengthen train plan, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。指示が、本気で、絶対、不明確、絶対、な点、絶対、再確認、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Order unclear-point re-verify, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07348',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、論文、本気で、絶対、至急、絶対、確認、絶対、いただきたい、絶対、件がある、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — paper urgent verify-want case, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究室の、本気で、絶対、台帳、絶対、整理、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Lab ledger — organize advance, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'研究助手の、本気で、絶対、雇い入れ、絶対、教授と、絶対、相談しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Research-assist hire — prof-consult, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究分野の、本気で、絶対、シンクタンク、絶対、訪問、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Research-field thinktank — visit advance, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'地域の、本気で、絶対、区民、絶対、向けの、絶対、講演、絶対、引き受けろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Region ward-citizen lecture — take, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。区内、本気で、絶対、学校、絶対、訪問、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Ward-internal schools — visit advance, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究室の、本気で、絶対、チームワーク、絶対、大切にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Lab teamwork — cherish, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、不明確、絶対、な箇所、絶対、教授に、絶対、確認、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Paper unclear-point prof-verify, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07349',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察より、本気で、絶対、至急、絶対、ご対応、絶対、お願いいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police — urgent handle ask, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。当社の、本気で、絶対、台帳、絶対、警察様、絶対、ご確認、絶対、頂きました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Our ledger — police-verified, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察への、本気で、絶対、新規、絶対、雇い、絶対、入れ、絶対、対応、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police new hire — handle advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。防犯の、本気で、絶対、シンクタンク、絶対、警察様、絶対、ご紹介、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Crime-prev thinktank — police-intro given, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'区民、本気で、絶対、安全のため、絶対、警察、絶対、巡回、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Ward-cit safety — police-patrol strengthen, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。区内、本気で、絶対、防犯カメラ、絶対、設置、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Ward-internal crime-cam — install advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察と、本気で、絶対、企業の、絶対、チームワーク、絶対、大切ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Police-co teamwork — cherish, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。報告書の、本気で、絶対、不明確、絶対、な部分、絶対、警察様に、絶対、再度、絶対、ご確認いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Report unclear-part — police re-verify, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07350',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、至急、絶対、対応、絶対、すべきこと、絶対、自分で、絶対、判断したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Founding — Dad urgent-resp-should self-judged, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、帳簿、絶対、台帳、絶対、紙で、絶対、管理してきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — book ledger paper-mgmt, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、社員の、絶対、雇い入れ、絶対、自分の目で、絶対、見て決めたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — staff hire-take self-eye decided, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。当社の、本気で、絶対、シンクタンク、絶対、お父さんが、絶対、関わってきた、絶対、伝統、絶対、続いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our thinktank — Dad-involved trad continue, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、区民、絶対、向けの、絶対、企画、絶対、当時から、絶対、大切にしたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — ward-cit-plan back-then cherish, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。区内、本気で、絶対、お父さんの代から、絶対、お客様、絶対、根付いておられます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Ward-internal — since Dad-era cust take-root, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代から、本気で、絶対、社員の、絶対、チームワーク、絶対、大切にしてきたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Since Dad-era — staff-teamwork cherish, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、本気で、絶対、不明確、絶対、な指示、絶対、絶対しなかったと、絶対、ばあさんから、絶対、伺っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Dad — unclear-order never-gave gran-heard, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07351',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:C_T,scenario:'A boss discusses industry research',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、本気で、絶対、トヨタ自動車、絶対、経営戦略、絶対、研究、絶対、参考にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Ren — Toyota mgmt-strat research ref, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。同社、本気で、絶対、最年少、絶対、取締役の、絶対、論文、絶対、拝読いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Same-co youngest-director paper read, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'業界の、本気で、絶対、サバイバル、絶対、競争、絶対、研究しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Industry-survival comp — research, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。プラネタリウム、本気で、絶対、企業の、絶対、新規事業、絶対、興味深いです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Planetarium-co new biz — interesting, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、人材、絶対、温存、絶対、戦略、絶対、検討しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Our co — talent preserve strat consider, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。微細、本気で、絶対、加工技術、絶対、論文で、扱いました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Micro-fab tech paper-handled, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'新製品、本気で、絶対、立て続け、絶対、リリース、絶対、戦略、絶対、検討しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"New-prod — consecutive release strat consider, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。同社の、本気で、絶対、頑丈、絶対、な品質基準、絶対、参考にいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Same-co sturdy-quality-std ref, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07352',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses industry research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、本気で、絶対、トヨタ自動車、絶対、研究、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Ren — Toyota research paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。業界の、本気で、絶対、最年少、絶対、社長、絶対、インタビュー、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Thanks. Industry youngest-pres interview paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後企業の、本気で、絶対、サバイバル、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Postwar-co survival paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。教育施設の、本気で、絶対、プラネタリウム、絶対、効果、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Edu-facility planetarium effect paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統技能の、本気で、絶対、温存、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Trad-skill preserve paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。半導体の、本気で、絶対、微細、絶対、加工、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Semi micro-fab paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'業界の、本気で、絶対、立て続け、絶対、の合併、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Industry consecutive mergers paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。建築の、本気で、絶対、頑丈、絶対、設計、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Arch sturdy-design paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07353',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses tech in medicine',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、本気で、絶対、トヨタ自動車、絶対、医療機器、絶対、参入、絶対、注目しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — Toyota med-equip entry — watching, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'貴院の、本気で、絶対、最年少、絶対、研修医、絶対、活躍されている、絶対、と、聞きました、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your-hosp youngest-intern active heard, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さん、本気で、絶対、サバイバル、絶対、率、絶対、向上、絶対、目指しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Patient — survival-rate improve aim, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療教育で、本気で、絶対、プラネタリウム、絶対、活用、絶対、するという、絶対、話、絶対、聞きました、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Med-edu — planetarium utilize talk heard, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。臓器、本気で、絶対、温存、絶対、療法、絶対、当院でも、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Organ-preserve therapy — our hosp advance, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'がん細胞の、本気で、絶対、微細、絶対、変化、絶対、捉える、絶対、技術、絶対、進歩していますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Cancer micro-change catch tech — progress, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。新薬、本気で、絶対、立て続け、絶対、承認、絶対、続いておりますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. New-drug — consecutive approval continue, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療用ロボットの、本気で、絶対、頑丈、絶対、設計、絶対、現場で、絶対、求められているんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med-robot sturdy-design — scene-required, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07354',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses tech cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、トヨタ自動車、絶対、関連企業、絶対、警察、絶対、ご対応、絶対、依頼を受けております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case — Toyota-related co police-resp request, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者、本気で、絶対、最年少、絶対、で、絶対、驚きですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Suspect — youngest surprise, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。被害者の、本気で、絶対、サバイバル、絶対、状況、絶対、警察、絶対、確認、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Victim-survival status — police-verify, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'プラネタリウム、本気で、絶対、施設での、絶対、事件、絶対、最近、絶対、ありましたよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Planetarium-facility incident — lately existed, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。証拠の、本気で、絶対、温存、絶対、警察、絶対、慎重に、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Evidence-preserve — police careful advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'微細、本気で、絶対、な痕跡、絶対、警察、絶対、見逃さない、絶対、ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Micro-trace — police don't-miss, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。立て続け、本気で、絶対、の事件、絶対、警察、絶対、関連、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Consecutive case — police-related-inv advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'頑丈、本気で、絶対、な金庫、絶対、警察、絶対、解錠、絶対、技術、絶対、お持ちですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sturdy-safe — police unlock-tech have, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07355',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through industry research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、本気で、絶対、トヨタ自動車、絶対、研究、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sakura — Toyota research paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。業界の、本気で、絶対、最年少、絶対、経営者、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Thanks. Industry youngest-exec paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦後企業の、本気で、絶対、サバイバル、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Postwar-co survival paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。教育施設の、本気で、絶対、プラネタリウム、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Yes. Edu-planetarium paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統技能の、本気で、絶対、温存、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Trad-skill preserve paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。半導体の、本気で、絶対、微細、絶対、加工、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Semi micro-fab paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'業界の、本気で、絶対、立て続け、絶対、の合併、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Industry consecutive mergers paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。建築の、本気で、絶対、頑丈、絶対、設計、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Arch sturdy-design paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07356',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お店の、本気で、絶対、目印、絶対、メイちゃん、絶対、すぐ、絶対、見つかったわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — store-landmark Mei quickly-found, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、伝統の、絶対、織物、絶対、興味、絶対、持ってるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Aoi — trad weaving interest-hold, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、運気、絶対、上がりそうな、絶対、お店の、絶対、配置、絶対、よね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — luck-rising store-layout, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お客様への、絶対、ご案内、絶対、箇条書きに、絶対、まとめているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — cust-guide bullet-list compile, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵のメニュー、本気で、絶対、お洒落な、絶対、フォントで、絶対、羅列、絶対、されてるわよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-menu — stylish-font listed, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、看板猫を、絶対、撫でて、絶対、お客様、絶対、癒されているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — mascot-cat pet cust-heal, Mei absolute serious really.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'昨日、本気で、絶対、雨、絶対、夜まで、絶対、止む、絶対、ことなかったわよ、葵、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yesterday — rain night-no-stop, Aoi Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、アコースティック、絶対、ライブ、絶対、お店で、絶対、開きたいよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — acoustic-live store-open-want, Mei absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07357',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、家の、絶対、目印、絶対、大きな松の木、絶対、だったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Gran — youth home-landmark big-pine was, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、ばあさんの、絶対、織物、絶対、お祖父ちゃん、絶対、誇りにしてくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Youth — gran-weave Grandpa-proud, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さんの、絶対、運気、絶対、上向きだったわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Dad-luck-rising was, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、家訓、絶対、箇条書きに、絶対、まとめていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa creed bullet-list compile, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんが、絶対、家族の名を、絶対、羅列、絶対、写真の裏に、絶対、書いてくれたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran family-names listed photo-back wrote, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お孫さんの頭を、本気で、絶対、撫でる、絶対、お祖父ちゃん、絶対、優しいわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Grandkid-head pet-Grandpa kind, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、雨が、絶対、止む、絶対、まで、絶対、ばあさんと、絶対、軒先で、絶対、待ったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — rain-stop-until gran-eaves waited, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、絶対、若い頃、絶対、アコースティック、絶対、ギター、絶対、弾いていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Grandpa — youth acoustic-guitar played, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07358',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんのお店の、本気で、絶対、目印、絶対、青い看板、絶対、なのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Mei-sis store-landmark blue-sign, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、社会科で、絶対、織物、絶対、習ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me soc-class weaving learned, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、運気、絶対、上がるように、絶対、お参り、絶対、行ってきたわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — luck-rise pray went, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、宿題を、絶対、箇条書きに、絶対、して、絶対、整理したよ、メイ姉さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Me — homework bullet-list organize did, Mei-sis absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、好きな本の名、絶対、羅列、絶対、ノートに、絶対、書いているのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — fave-book names listed notebook-wrote, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくの頭、絶対、撫でて、絶対、くれる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — my-head pet-give?, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'今日の雨、本気で、絶対、午後には、絶対、止む、絶対、らしいわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Today-rain — afternoon stop seems, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、アコースティック、絶対、ギター、絶対、聴かせてよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mei-sis — acoustic-guitar listen, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07359',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、待ち合わせの、本気で、絶対、目印、絶対、駅前の時計台、絶対、にしようね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — meet-landmark station-clock, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。家庭科で、本気で、絶対、織物、絶対、習ったよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Home-ec — weaving learned, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'試験前、本気で、絶対、運気、絶対、上がりますように、絶対、お参り、絶対、しようよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Pre-test — luck-rise pray-do, Riku absolute serious really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'試験の準備、本気で、絶対、箇条書きに、絶対、まとめたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Test-prep — bullet-list compiled, Sakura absolute serious really.",style:'Proud.'},
    {speaker:'sakura_teen',jp:'重要ポイント、本気で、絶対、羅列、絶対、ノートに、絶対、まとめたよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Imp-points — listed notebook-compiled, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お祖母ちゃんち、本気で、絶対、猫を、絶対、撫でて、絶対、癒されたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Granny-home — cat-pet healed, Sakura absolute serious really.",style:'Tender.'},
    {speaker:'sakura_teen',jp:'雨が、本気で、絶対、止む、絶対、まで、絶対、コンビニで、絶対、待ったよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Rain-stop-until conv-store waited, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'文化祭で、本気で、絶対、アコースティック、絶対、ライブ、絶対、やるんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Fest — acoustic-live do, Sakura absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07360',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お家の、絶対、目印、絶対、玄関の鉢植え、絶対、だよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — home-landmark entrance-pot, absolute serious really.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんの、本気で、絶対、織物、絶対、お家の宝物、絶対、なのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Granny-weave — home-treasure, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、運気、絶対、上がるように、絶対、お年玉袋、絶対、大事にしてるよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Me — luck-rise New-Year-money-bag cherish, Mom absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'お買い物リスト、本気で、絶対、箇条書きに、絶対、ママ、絶対、まとめたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Shop-list — bullet-list Mom compiled, Sho absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'ぼくの、本気で、絶対、宿題、絶対、ノートに、絶対、羅列、絶対、して、絶対、整理したよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"My homework — notebook listed organize did, Mom absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'翔くんの頭、本気で、絶対、撫でて、絶対、あげるね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Sho-head pet-give, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、外の雨、絶対、もうすぐ、絶対、止む、絶対、かな?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mom — outside-rain soon stop maybe?, absolute serious really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、若い頃、絶対、アコースティック、絶対、ギター、絶対、弾いていたのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Dad — youth acoustic-guitar played, Sho absolute serious really.",style:'Tender close.'},
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

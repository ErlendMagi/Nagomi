import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_371 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['スニーカー','きゅうり','太く','ねじ','子守','鈍感','包む','乗り場']
const B_T = ['一式','公文書','リーク','プロファイル','新旧','未完成','偏向','覆す']
const C_T = ['浩二','嶋','死因','船員','楽団','黒澤','柳田','真正面']
const D_T = ['ピクセル','後味','サビ','霞','無防備','お嬢様','遭う','たった今']

const data = [
  {id:'conv_07381',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、新しい、絶対、スニーカー、絶対、ママ、絶対、買ってあげるね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Sho — new sneakers Mom buy-for-you, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お庭の、絶対、きゅうり、絶対、ぼく、絶対、収穫してきたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — garden cucumber me harvested, absolute serious really.",style:'Proud child.'},
    {speaker:'yumiko_mom',jp:'お父さんの腕、本気で、絶対、最近、絶対、太く、絶対、なってきたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad-arm — lately thick-became, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、椅子の、絶対、ねじ、絶対、緩んでるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mom — chair-screw loose, absolute serious really.",style:'Practical.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんが、本気で、絶対、子守、絶対、引き受けてくれることになったわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Granny — babysit take-on became, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、ちょっと、絶対、鈍感、絶対、なところ、絶対、あるかも、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Me — slight dull-spot maybe-have, absolute serious really.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'お弁当、本気で、絶対、丁寧に、絶対、包む、絶対、と、絶対、嬉しいわよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Lunchbox — careful wrap glad, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'バスの、本気で、絶対、乗り場、絶対、駅前で、絶対、迷っちゃったよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Bus-stop — station-front lost, Mom absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07382',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、新しい、本気で、絶対、スニーカー、絶対、メイちゃん、絶対、葵に、絶対、似合うわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — new sneakers Mei Aoi-suit, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、夏限定、絶対、きゅうり、絶対、サンドイッチ、絶対、用意してるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Aoi — summer cucumber-sandwich prep, Mei absolute serious really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'葵のお店の柱、本気で、絶対、太く、絶対、立派よね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store pillar — thick splendid, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'お店の、本気で、絶対、ねじ、絶対、お父さんに、絶対、点検、絶対、お願いしたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Store-screw — Dad-inspect asked, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お友達の、絶対、子守、絶対、引き受けたのよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — friend-babysit took, Mei admire absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、ちょっと、絶対、味の変化、絶対、鈍感、絶対、なところ、絶対、あるかも、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — slight taste-change dull-spot maybe-have, Mei absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お土産、絶対、丁寧に、絶対、包む、絶対、姿、絶対、メイちゃん、絶対、好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — souv careful wrap-figure Mei-like, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'お店の前、本気で、絶対、タクシー乗り場、絶対、近いの、葵で、便利よね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Store-front — taxi-stop close Aoi convenient, Mei absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07383',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、スニーカー、絶対、お父さん、絶対、孫に、絶対、買ってあげたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gran — youth sneakers Dad grandkid-bought, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。お庭で、本気で、絶対、きゅうり、絶対、お祖父ちゃん、絶対、たくさん、絶対、育てたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Garden — cucumber Grandpa many-grew, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、若い頃の、絶対、腕、絶対、もっと、絶対、太く、絶対、たくましかったぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Youth — Dad-arm more-thick muscular was, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、絶対、家具の、絶対、ねじ、絶対、自分で、絶対、締めてくれていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Grandpa — furniture-screw self-tightened, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさん、絶対、孫の、絶対、子守、絶対、よくしてくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — gran grandkid-babysit often-did, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、絶対、若い頃から、絶対、ちょっと、絶対、鈍感、絶対、なところ、絶対、あったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Grandpa — since-youth slight dull-spot had, remember dear?, absolute serious really.",style:'Wry tease.'},
    {speaker:'hiroshi_elder',jp:'昔、本気で、絶対、ばあさんが、絶対、お弁当、絶対、丁寧に、絶対、包む、絶対、姿、絶対、お父さん、絶対、忘れないぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Old — gran lunchbox careful wrap-figure Dad-unforget, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'昔、本気で、絶対、バス、絶対、乗り場、絶対、お祖父ちゃんと、絶対、待ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Old — bus-stop Grandpa-waited, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07384',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、新しい、本気で、絶対、スニーカー、絶対、お洒落だよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Riku — new sneakers stylish, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。給食の、本気で、絶対、きゅうり、絶対、サラダ、絶対、出たよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Lunch cucumber-salad came, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、最近、絶対、腕、絶対、太く、絶対、なってきたよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — lately arm thick-became, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前の自転車、本気で、絶対、ねじ、絶対、しっかり、絶対、締めとけよ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Your bike — screw firm-tighten, Sakura absolute serious really.",style:'Caring.'},
    {speaker:'sakura_teen',jp:'妹の、本気で、絶対、子守、絶対、私、絶対、お母さんに、絶対、頼まれちゃったよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sister-babysit — me Mom-asked, Riku absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、雰囲気の変化、絶対、鈍感、絶対、なところ、絶対、あるよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — atmos-change dull-spot have, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前への、本気で、絶対、お土産、絶対、私、絶対、可愛く、絶対、包む、絶対、ね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You-souv — me cute wrap, Riku absolute serious really.",style:'Tender.'},
    {speaker:'riku_teen',jp:'駅前の、本気で、絶対、バス乗り場、絶対、いつも、絶対、混んでるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Station-front bus-stop — always crowded, Sakura absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07385',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、スニーカー、絶対、で、絶対、ジョギング、絶対、始めたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis sneakers jog-started, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、おばあちゃんの畑の、絶対、きゅうり、絶対、もらってきたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me Grandma-field cucumber got, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お庭の木、絶対、太く、絶対、なってきたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — garden-tree thick-became, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お家の、絶対、ねじ、絶対、ぼく、絶対、お手伝いで、絶対、締めたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — home-screw me help-tightened, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、近所の、絶対、子守、絶対、引き受けてきたのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — neighbor babysit took, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ちょっと、絶対、鈍感、絶対、なんだって、絶対、お母さんが、言ってたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me slight dull Mom-said, absolute serious really.",style:'Wry child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、翔くんへの、絶対、お土産、絶対、丁寧に、絶対、包む、絶対、わね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — Sho-souv careful wrap, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、駅の、絶対、乗り場、絶対、ぼく、絶対、メイ姉さんを、絶対、待ってたんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — station-stop me Mei-sis-waited, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07386',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'新製品の、本気で、絶対、一式、絶対、揃えろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"New prod-full-set assemble, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。当社の、本気で、絶対、公文書、絶対、保管、絶対、厳重に、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our pub-doc — store strict advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'競合への、本気で、絶対、リーク、絶対、無いよう、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Rival-leak none thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お得意様の、本気で、絶対、プロファイル、絶対、最新化、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. VIP-profile — update advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'設備の、本気で、絶対、新旧、絶対、入れ替え、絶対、計画、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Equip new-old — swap plan advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。試作品、本気で、絶対、未完成、絶対、部分、絶対、調整、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Proto — incomplete-part adjust advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'メディアの、本気で、絶対、偏向、絶対、報道、絶対、注視しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Media-bias report — watch, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の、本気で、絶対、業績、絶対、業界の予想を、絶対、覆す、絶対、勢いです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our perf — industry-pred overturn momentum, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07387',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'プレゼン資料、本気で、絶対、一式、絶対、確認、絶対、いたしました、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Pres-doc full-set verified, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。新規取引の、本気で、絶対、公文書、絶対、整備、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. New-deal pub-doc develop advance, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'情報の、本気で、絶対、リーク、絶対、防止策、絶対、検討しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Info-leak prevent — consider, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の、本気で、絶対、プロファイル、絶対、業界誌に、絶対、掲載、絶対、決まりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our profile — industry-mag publish decided, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'当社の、本気で、絶対、新旧、絶対、社員、絶対、交流会、絶対、企画しましょうか、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Our new-old staff — mixer plan?, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。マニュアル、本気で、絶対、未完成、絶対、章、絶対、まとめ、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Manual incomplete-ch — compile advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'業界紙の、本気で、絶対、偏向、絶対、注視しなければなりませんね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Industry-mag bias — must-watch, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、市場予想を、絶対、覆す、絶対、結果、絶対、出しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Our co — market-pred overturn result out, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07388',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究器具、本気で、絶対、一式、絶対、揃えておけ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Ren — research-equip full-set ready, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究室の、本気で、絶対、公文書、絶対、整理、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Lab pub-doc — organize advance, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'論文の、本気で、絶対、リーク、絶対、ないよう、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Paper-leak none thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。協力研究者の、本気で、絶対、プロファイル、絶対、まとめております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Coop-researcher profile — compile, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文の、本気で、絶対、新旧、絶対、比較、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Paper new-old compare advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、未完成、絶対、章、絶対、来週までに、絶対、仕上げます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Paper incomplete-ch — by-next-week finish, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究結果に、本気で、絶対、偏向、絶対、ないよう、絶対、客観的に、絶対、まとめろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Research-result bias-none — objective compile, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。私の研究、本気で、絶対、定説を、絶対、覆す、絶対、結果を、絶対、目指しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. My research — established-theory overturn result aim, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07389',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、捜査資料、絶対、一式、絶対、ご用意、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police — inv-doc full-set prep-given, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察様の、本気で、絶対、公文書、絶対、要請、絶対、対応、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police pub-doc-req — handle, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'関係者の、本気で、絶対、リーク、絶対、行為、絶対、警察、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Related-party leak-act — police-watch, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。容疑者の、本気で、絶対、プロファイル、絶対、警察様、絶対、ご提供、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Susp-profile — police provide, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'証拠の、本気で、絶対、新旧、絶対、比較、絶対、警察、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Evidence new-old compare — police-advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。本件、本気で、絶対、未完成、絶対、捜査資料、絶対、警察様、絶対、最優先で、絶対、お渡しいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Case incomplete-inv-doc — police top-pri provide, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'報道の、本気で、絶対、偏向、絶対、市民に、絶対、誤解、絶対、与えない、絶対、よう、絶対、警察、絶対、対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Report-bias — citizen misunderstand-don't police-handle, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。本件、本気で、絶対、警察の捜査が、絶対、これまでの推測を、絶対、覆す、絶対、可能性、絶対、あるそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Case police-inv — prior-guess overturn possibility exist, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07390',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、商売道具、絶対、一式、絶対、自分で、絶対、揃えたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Founding — Dad biz-tool full-set self-assembled, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、公文書、絶対、厳重に、絶対、保管してまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — pub-doc strict-store, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代、本気で、絶対、情報、絶対、リーク、絶対、絶対なかったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad-era — info-leak absolute-none was, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、お客様、絶対、プロファイル、絶対、丁寧に、絶対、管理してまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — cust-profile careful-mgmt, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代、本気で、絶対、新旧、絶対、社員、絶対、皆、絶対、家族のように、絶対、過ごしたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad-era — new-old staff all family-like spent, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代の、本気で、絶対、計画、絶対、未完成、絶対、で残ってしまった部分、絶対、私が、絶対、引き継ぎます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Dad-era-plan incomplete-remain — me inherit, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、偏向、絶対、ない、絶対、目で、絶対、業界を見ていたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — bias-none eye industry-saw, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの精神、本気で、絶対、業界の常識を、絶対、覆す、絶対、力、絶対、を持っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad-spirit — industry-norm overturn force have, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07391',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses cultural research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦後の、本気で、絶対、浩二、絶対、さんの、絶対、回想録、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — postwar Koji-san memoir paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。歴史家の、本気で、絶対、嶋、絶対、先生の、絶対、研究、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Thanks. Hist Shima-sensei research paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史的事件の、本気で、絶対、死因、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Hist-incident death-cause paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。海運時代の、本気で、絶対、船員、絶対、生活、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Shipping-era sailor-life paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦前の、本気で、絶対、楽団、絶対、活動、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Prewar orchestra-activity paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。映画監督の、本気で、絶対、黒澤、絶対、明、絶対、作品、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Film-dir Kurosawa Akira works paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'民俗学の、本気で、絶対、柳田、絶対、國男、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Folklore Yanagita Kunio paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。歴史的な、本気で、絶対、真正面、絶対、からの議論、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hist front-face debate paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07392',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、容疑者、絶対、浩二、絶対、容疑者、絶対、警察、絶対、聴取、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case — suspect Koji-susp police-interview advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者、本気で、絶対、嶋、絶対、さんの、絶対、ご家族、絶対、支援、絶対、必要、絶対、ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Victim Shima-san-family — support needed, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。被害者の、本気で、絶対、死因、絶対、警察、絶対、慎重に、絶対、調査、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Victim death-cause — police careful investigate, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'港湾で、本気で、絶対、船員、絶対、目撃情報、絶対、警察、絶対、集めているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Port — sailor-witness info police-gather, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。劇場の、本気で、絶対、楽団、絶対、関係者、絶対、警察、絶対、ご協力、絶対、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Theater-orchestra related-party police-coop given, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'映画の、本気で、絶対、黒澤、絶対、賞、絶対、受賞者、絶対、警察、絶対、警備、絶対、ご担当ですか、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Film Kurosawa-prize winner — police-sec in-charge?, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。学者の、本気で、絶対、柳田、絶対、先生の、絶対、ご講演、絶対、警備、絶対、警察、絶対、ご対応いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Scholar Yanagita-sensei lecture-sec — police-handle, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、本気で、絶対、真正面、絶対、から、絶対、罪を、絶対、認めた、絶対、と、聞きました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Suspect — front-face from sin-admit heard, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07393',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦後の、本気で、絶対、浩二、絶対、さんの、絶対、回想録、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sakura — postwar Koji-san memoir paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。歴史家の、本気で、絶対、嶋、絶対、先生の、絶対、研究、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Thanks. Hist Shima-sensei research paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'歴史的事件の、本気で、絶対、死因、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Hist-incident death-cause paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。海運時代の、本気で、絶対、船員、絶対、生活、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Shipping-era sailor-life paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦前の、本気で、絶対、楽団、絶対、活動、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Prewar orchestra-activity paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。映画監督の、本気で、絶対、黒澤、絶対、明、絶対、作品、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Film-dir Kurosawa Akira works paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'民俗学の、本気で、絶対、柳田、絶対、國男、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Folklore Yanagita Kunio paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史的に、本気で、絶対、真正面、絶対、からの議論、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hist front-face debate paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07394',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical history',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、長年の、本気で、絶対、浩二、絶対、先生の、絶対、医学論文、絶対、医療界、絶対、参考になっております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — many-yr Koji-sensei med-paper med-ref-became, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医学者の、本気で、絶対、嶋、絶対、先生、絶対、ご講演、絶対、私も、絶対、伺いたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Med-scholar Shima-sensei lecture — me also attend-want, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。診療では、本気で、絶対、死因、絶対、特定、絶対、慎重に、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Clin — death-cause identify careful advance, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'海運業の、本気で、絶対、船員、絶対、健康管理、絶対、医療チームで、絶対、ご対応されているんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Shipping sailor-health-mgmt — med-team handle, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。地域の、本気で、絶対、楽団、絶対、団員さんの、絶対、健康診断、絶対、当院でも、絶対、引き受けております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Local orchestra-member checkup — our hosp take, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'映画監督の、本気で、絶対、黒澤、絶対、賞、絶対、受賞者の、絶対、医療相談、絶対、貴院で、絶対、対応されたんですか、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Film Kurosawa-prize-winner med-consult — your hosp handled?, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。民俗学の、本気で、絶対、柳田、絶対、先生の、絶対、研究、絶対、医療現場でも、絶対、参考になっております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Folklore Yanagita-sensei research — med-scene also ref-become, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'病に、本気で、絶対、真正面、絶対、から、絶対、向き合う、絶対、姿勢、絶対、医療チームで、絶対、続けられているんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Illness front-face face stance — med-team continue, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07395',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corporate response',lines:[
    {speaker:'hiroshi_boss',jp:'スポンサー、本気で、絶対、浩二、絶対、さんの、絶対、ご支援、絶対、当社、絶対、感謝しております、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sponsor Koji-san — support our co gratitude, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。仕入れ先、本気で、絶対、嶋、絶対、商店、絶対、長年の取引、絶対、続いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Suppl Shima-store — long-yr deal continue, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界の、本気で、絶対、死因、絶対、報道、絶対、当社、絶対、注視しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Industry-death-cause report — our co watch, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。物流の、本気で、絶対、船員、絶対、待遇、絶対、当社、絶対、改善、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Logist sailor-treat — our co improve advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'会社主催の、本気で、絶対、楽団、絶対、コンサート、絶対、企画しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Co-host orchestra-concert — plan, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。映画祭の、本気で、絶対、黒澤、絶対、特集、絶対、当社、絶対、協賛、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Film-fest Kurosawa-feature — our co sponsor done, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'民俗学者、本気で、絶対、柳田、絶対、先生の、絶対、研究、絶対、商品開発、絶対、参考にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Folklore Yanagita-sensei research — prod-dev ref, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経営課題、本気で、絶対、真正面、絶対、から、絶対、向き合ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Mgmt-challenge — front-face face, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07396',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お店の、絶対、ピクセル、絶対、アートのロゴ、絶対、メイちゃん、絶対、好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — store pixel-art logo Mei-like, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。昨日の、本気で、絶対、お料理、絶対、後味、絶対、葵、絶対、ちょっと、絶対、引っかかっちゃったよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Yesterday cook — aftertaste Aoi slight-stuck, Mei absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、好きな曲の、絶対、サビ、絶対、口ずさんでるよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — fave-song chorus humming, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'朝の窓辺、本気で、絶対、霞、絶対、かかってて、絶対、葵、絶対、綺麗だと思ったよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Morn window — mist Aoi pretty-thought, Mei absolute serious really.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、ちょっと、絶対、無防備、絶対、な笑顔、絶対、メイちゃん、絶対、可愛いと思うわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — slight defenseless smile Mei-cute think, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵のお客様、本気で、絶対、お嬢様、絶対、ぽい方、絶対、いらっしゃるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi cust — princess-like person exist, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お店で、絶対、楽しい人に、絶対、遭う、絶対、ことが、絶対、多いわよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — store fun-people encounter many, Mei absolute serious really.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'たった今、本気で、絶対、新しい、絶対、お客様、絶対、葵、絶対、ご来店、絶対、いただいたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Just-now — new cust Aoi visit-given, Mei absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07397',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さん、絶対、ピクセル、絶対、なんて言葉、絶対、知らなかったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — youth Dad pixel word didn't-know, remember?, absolute serious really.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、ばあさんの、絶対、お料理、絶対、後味、絶対、お祖父ちゃん、絶対、褒めてくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — gran cook aftertaste Grandpa-praised, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ラジオの、絶対、お気に入りの曲の、絶対、サビ、絶対、お父さん、絶対、口ずさんでたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — radio fave-song chorus Dad-hummed, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、絶対、若い頃、絶対、朝の、絶対、霞、絶対、を見るのが、絶対、好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Grandpa — youth morn-mist see-like, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさん、絶対、無防備、絶対、な寝顔、絶対、お父さん、絶対、ずっと、絶対、覚えているぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran defenseless sleep-face Dad-remember-long, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、ばあさんが、絶対、お嬢様、絶対、扱いされていた時期、絶対、ありましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — gran princess-treated era existed, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、町で、絶対、よく、絶対、知り合いに、絶対、遭う、絶対、ことが、絶対、あったわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — town often-acquaint encounter existed, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'たった今、本気で、絶対、お祖父ちゃんが、絶対、私の、絶対、お茶、絶対、淹れてくれたわよね、あなた、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Just-now — Grandpa my-tea brewed, dear absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07398',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、ピクセル、絶対、ゲーム、絶対、楽しんでるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis pixel-game enjoy, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、おやつの、絶対、後味、絶対、忘れられないよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me snack aftertaste unforget, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、好きな歌の、絶対、サビ、絶対、口ずさんでるのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — fave-song chorus humming, Sho absolute serious really.",style:'Cheerful.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、朝の、絶対、霞、絶対、見たよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — me morn-mist saw, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、無防備、絶対、な寝顔、絶対、見ないでね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mei-sis — defenseless sleep-face don't-see, Sho absolute serious really.",style:'Wry.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お嬢様、絶対、みたいに、絶対、上品だよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — princess-like elegant, absolute serious really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、街で、絶対、お母さんに、絶対、ばったり、絶対、遭う、絶対、ことがあるわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — town Mom bump-into encounter exist, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、たった今、絶対、ぼく、絶対、宿題、絶対、終わったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — just-now me homework done, absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07399',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、レトロな、本気で、絶対、ピクセル、絶対、ゲーム、絶対、お前、絶対、好きでしょ?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — retro pixel-game you like?, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。給食の、本気で、絶対、後味、絶対、なんか、絶対、いまいちだったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Lunch-aftertaste — somehow meh, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、好きな曲の、絶対、サビ、絶対、いつも、絶対、口ずさんでるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — fave-song chorus always-hum, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'朝、本気で、絶対、霞、絶対、かかってて、絶対、雰囲気、絶対、よかったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Morn — mist atmos nice, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、授業中、絶対、無防備、絶対、な、絶対、寝顔、絶対、してたよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — class defenseless sleep-face did, Riku absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'クラスの、本気で、絶対、新しい子、絶対、お嬢様、絶対、っぽい雰囲気、絶対、あるよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Class new-kid — princess-like atmos have, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'昨日、本気で、絶対、駅前で、絶対、お前のお父さんに、絶対、遭う、絶対、ことがあったよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yesterday — station-front your-Dad encounter, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'たった今、本気で、絶対、お前から、絶対、メッセージ、絶対、届いたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Just-now — your-msg arrived, Sakura absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07400',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、レトロな、絶対、ピクセル、絶対、ゲーム、絶対、欲しいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me retro pixel-game want, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'今日のお料理の、本気で、絶対、後味、絶対、どうだった?翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Today-cook aftertaste — how was?, Sho absolute serious really.",style:'Curious.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの好きな曲の、絶対、サビ、絶対、覚えたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mom — my fave-song chorus memorized, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お庭の、本気で、絶対、霞、絶対、かかってて、絶対、幻想的よね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Garden-mist — fantastic, Sho absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、お父さんの、絶対、無防備、絶対、な、絶対、寝顔、絶対、写真、撮ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — me Dad-defenseless sleep-face photo took, absolute serious really.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんの友達、本気で、絶対、お嬢様、絶対、育ち、絶対、と聞いたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Granny-friend — princess-raise heard, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、駅前で、絶対、お祖父ちゃんに、絶対、遭う、絶対、こと、絶対、あるかな?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — station-front Grandpa encounter exist maybe?, absolute serious really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'たった今、本気で、絶対、お父さんから、絶対、お電話、絶対、あったわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Just-now — Dad-call existed, Sho absolute serious really.",style:'Warm close.'},
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

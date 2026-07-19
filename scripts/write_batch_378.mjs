import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_378 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['パーカー','出前','おとり','真っ青','ガット','月々','街路','ソープ']
const B_T = ['多数決','同封','空席','値打ち','再選','内輪','詰め込み','関空']
const C_T = ['古墳','打破','祈祷','側近','優等生','邦画','長嶋','乱入']
const D_T = ['歯車','一心','下ろす','見下ろす','談義','植生','フラグ','のむ']

const data = [
  {id:'conv_07521',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、新しい、絶対、パーカー、絶対、ママ、絶対、買ってあげたわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — new hoodie Mom-bought, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、今日の夕飯、絶対、出前、絶対、頼みたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — today-dinner delivery order-want, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'警察ドラマで、本気で、絶対、おとり、絶対、捜査、絶対、ママ、絶対、見たわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Police-drama — decoy-inv Mom-saw, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、テストの結果、絶対、見て、絶対、真っ青、絶対、になっちゃった、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Me — test-result see — pale became, absolute serious really.",style:'Wry child.'},
    {speaker:'yumiko_mom',jp:'お父さんのテニスラケット、本気で、絶対、ガット、絶対、張り替え、絶対、必要らしいわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad-tennis-racket — gut-restring needed, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、習い事の、絶対、月々、絶対、お月謝、絶対、お父さん、絶対、払ってるんだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — lesson monthly-fee Dad-paying, absolute serious really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'桜の、本気で、絶対、街路、絶対、樹、絶対、咲き始めたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Cherry street-tree bloom-started, Sho absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'お風呂で、本気で、絶対、新しい、絶対、ソープ、絶対、ぼく、絶対、使ったよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Bath new soap me-used, Mom absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07522',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お洒落な、本気で、絶対、パーカー、絶対、メイちゃん、絶対、葵に、絶対、似合うわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — stylish hoodie Mei Aoi-suit, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、お弁当の、絶対、出前、絶対、配達も、絶対、始めたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Aoi — bento delivery-also started, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、ドラマの、絶対、おとり、絶対、撮影で、絶対、使われたって、聞いたわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store — drama decoy-shoot used heard, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お客様からの、絶対、クレームで、絶対、ちょっと、絶対、真っ青、絶対、になっちゃったよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — cust-complaint slight pale became, Mei absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、テニスの、絶対、ガット、絶対、張り替えしてもらったって、聞いたわ、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — tennis-gut restring-had heard, Mei admire absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お店の、絶対、月々、絶対、家賃、絶対、計算してるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — store monthly-rent calc, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵のお店の前の、本気で、絶対、街路、絶対、樹、絶対、メイちゃん、絶対、季節を、絶対、感じるわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store-front street-tree — Mei season-feel, absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お店のトイレに、絶対、ハンドソープ、絶対、置き換えたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — store-toilet hand-soap-replaced, Mei absolute serious really.",style:'Practical close.'},
  ]},
  {id:'conv_07523',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さん、絶対、パーカー、絶対、なんて、絶対、洋服、絶対、なかったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — youth Dad hoodie-clothes didn't-have, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、出前、絶対、お蕎麦、絶対、よく、絶対、頼んだわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Youth — Grandpa delivery-soba often-ordered, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、警察の、絶対、おとり、絶対、捜査、絶対、お父さん、絶対、新聞で、絶対、よく、絶対、読んだぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — police decoy-inv Dad newspaper-often-read, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お料理の失敗で、絶対、真っ青、絶対、になっていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa cook-fail pale-became, remember dear?, absolute serious really.",style:'Wry tease.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、ガット、絶対、を張り替える、絶対、職人さん、絶対、よく、絶対、頼んだぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Dad gut-restring artisan often-asked, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、家計、絶対、月々、絶対、お祖父ちゃんと、絶対、相談したわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — household monthly Grandpa-discussed, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、街路、絶対、樹、絶対、町に、絶対、植えられたぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — street-tree town-planted, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お風呂で、絶対、固形ソープ、絶対、使っていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa bath solid-soap used, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07524',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前の、本気で、絶対、パーカー、絶対、お洒落だよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Riku — your hoodie stylish, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。試験勉強の合間、本気で、絶対、出前、絶対、お寿司、絶対、頼んだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Study-gap delivery-sushi ordered, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'警察ドラマで、本気で、絶対、おとり、絶対、捜査、絶対、面白いよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Police-drama decoy-inv fun, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'試験結果見て、本気で、絶対、真っ青、絶対、になっちゃったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Test-result see — pale became, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'部活の、本気で、絶対、ラケット、絶対、ガット、絶対、張り替えしたよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Club racket-gut restring did, Riku absolute serious really.",style:'Practical.'},
    {speaker:'riku_teen',jp:'スマホの、本気で、絶対、月々、絶対、料金、絶対、高いよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Phone monthly-fee high, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'通学路の、本気で、絶対、街路、絶対、樹、絶対、紅葉、絶対、綺麗だよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"School-route street-tree — autumn pretty, Riku absolute serious really.",style:'Soft.'},
    {speaker:'riku_teen',jp:'お祖母ちゃんち、本気で、絶対、固形、絶対、ソープ、絶対、置いてあったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Granny-home solid soap placed, Sakura absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07525',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お揃いの、絶対、パーカー、絶対、買ってあげようかな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis matching-hoodie buy-for-you?, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お祖父ちゃんちで、絶対、出前、絶対、お寿司、絶対、食べたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — me Grandpa-home delivery-sushi ate, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、警察ドラマの、絶対、おとり、絶対、捜査、絶対、よく、絶対、見るのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — police-drama decoy-inv often-watch, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お母さんに、絶対、怒られて、絶対、真っ青、絶対、になっちゃった、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — me Mom-scolded pale-became, absolute serious really.",style:'Wry child.'},
    {speaker:'mei_romantic',jp:'メイ姉さんは、本気で、絶対、テニスの、絶対、ガット、絶対、新しいの、絶対、使っているのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — tennis-gut new-use, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、月々、絶対、ぼくに、絶対、お小遣い、絶対、くれるよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — monthly me-allowance give, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'公園の、本気で、絶対、街路、絶対、樹、絶対、お花、絶対、咲いてきたわね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Park street-tree flower bloomed, Sho absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さんが、本気で、絶対、ぼくの、絶対、お風呂、絶対、ソープ、絶対、選んでくれたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — my bath-soap chose-for-me, absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07526',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'重要案件、本気で、絶対、多数決、絶対、で、絶対、決めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Imp-case — majority-vote decide, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。契約書、本気で、絶対、同封、絶対、必要書類、絶対、整えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Contract enclose-doc — prepare, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'役員会、本気で、絶対、空席、絶対、補充、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Board vacant-seat fill — advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社製品の、本気で、絶対、値打ち、絶対、お客様、絶対、ご評価、絶対、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our prod value — cust-eval given, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'代表取締役の、本気で、絶対、再選、絶対、株主、絶対、ご支持、絶対、いただけ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Rep-director re-elect — shareholder-support given, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。会議内容、本気で、絶対、内輪、絶対、で、絶対、まとめております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Mtg-content — internally compile, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業務の、本気で、絶対、詰め込み、絶対、過ぎ、絶対、ないよう、絶対、調整しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Biz cram-too-much-none — adjust, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外出張、本気で、絶対、関空、絶対、発の便、絶対、手配しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Overseas-trip — Kansai-airport-flight arrange, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07527',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'プロジェクト案、本気で、絶対、多数決、絶対、で、絶対、選ばれましたね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Proj-plan — majority-vote chosen, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。お客様への、本気で、絶対、同封、絶対、お礼状、絶対、ご用意しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Cust-enclose thank-letter — prepare, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'役員、本気で、絶対、空席、絶対、補充、絶対、人事と、絶対、相談しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Exec vacant-seat fill — HR-discuss, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。中古品の、本気で、絶対、値打ち、絶対、査定、絶対、進めております、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Used-item value — assess advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'労組役員の、本気で、絶対、再選、絶対、社員から、絶対、ご支持、絶対、いただきました、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Union-exec re-elect — staff-support given, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。社内情報、本気で、絶対、内輪、絶対、に、絶対、留めて、絶対、おります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Internal-info — keep-internal, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'業務量の、本気で、絶対、詰め込み、絶対、過剰、絶対、避けましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Workload cram-excess — avoid, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。関空、本気で、絶対、経由の便、絶対、手配、絶対、完了しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Kansai-airport via-flight — arrange done, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07528',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究テーマ、本気で、絶対、多数決、絶対、ではなく、絶対、教授と、絶対、議論、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Ren — research-theme — not-majority-vote prof-discuss, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、同封、絶対、データ、絶対、整えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Paper-enclose data — prepare, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'教授会の、本気で、絶対、空席、絶対、補充、絶対、新研究者、絶対、推薦しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Faculty-mtg vacant-seat fill — new researcher recommend, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、値打ち、絶対、教授に、絶対、評価、絶対、いただきたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Paper-value — prof-eval want, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'学会会長の、本気で、絶対、再選、絶対、学界、絶対、ご支持、絶対、いただけ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Conf-pres re-elect — acad-support given, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究室の、本気で、絶対、内輪、絶対、の話、絶対、外には、絶対、出しておりません、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Lab-internal talk — outside don't-put, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文に情報、本気で、絶対、詰め込み、絶対、過ぎ、絶対、ない、絶対、よう、絶対、絞れ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Paper info-cram-too-much-none — narrow, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。海外学会、本気で、絶対、関空、絶対、発の、絶対、便、絶対、利用いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Overseas-conf — Kansai-airport-flight use, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07529',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'地域協議会の、本気で、絶対、多数決、絶対、警察、絶対、ご対応、絶対、進めます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Local-council majority-vote — police-handle advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察様への報告書、本気で、絶対、同封、絶対、資料、絶対、整えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police-report enclose-doc — prepare, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察署の、本気で、絶対、空席、絶対、警察、絶対、補充、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police-station vacant-seat — police-fill advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。市民の安全の、本気で、絶対、値打ち、絶対、当社、絶対、認識、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Citizen-safety value — our co recognize, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'地域議員の、本気で、絶対、再選、絶対、警察、絶対、警備、絶対、対応いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Local-rep re-elect — police-sec handle, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様からの、本気で、絶対、内輪、絶対、情報、絶対、慎重に、絶対、扱っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police-internal info — careful handle, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気for、絶対、業務、絶対、詰め込み、絶対、過ぎず、絶対、効率化、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police — biz cram-not-too-much efficient advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察出張、本気で、絶対、関空、絶対、発、絶対、ご手配、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police-trip — Kansai-airport arrange given, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07530',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、重要案件、絶対、多数決、絶対、ではなく、絶対、自分で、絶対、決めたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Founding — Dad imp-case not-majority-vote self-decided, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、お客様への、絶対、同封、絶対、お礼状、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Since Dad-era — cust-enclose thank-letter continue, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、役員の、絶対、空席、絶対、優秀な人材で、絶対、埋めたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad — exec vacant-seat — excellent-talent filled, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、商品の、絶対、値打ち、絶対、誇りに、絶対、守ってまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — prod-value proud kept, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、社長、絶対、再選、絶対、社員の信頼で、絶対、勝ち取ったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — pres re-elect — staff-trust won, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、内輪、絶対、で、絶対、ご家族的な、絶対、社風、絶対、続いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — internal family-like culture continue, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、社員に業務、絶対、詰め込み、絶対、過ぎず、絶対、優しく、絶対、接したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — staff cram-not-too-much kind-treated, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、海外出張、絶対、関空、絶対、よく、絶対、利用してまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — overseas-trip Kansai-airport often-used, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07531',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、奈良時代の、本気で、絶対、古墳、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — Nara-era burial-mound paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。封建制度の、本気で、絶対、打破、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Thanks. Feudal-system breaking paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'神道の、本気で、絶対、祈祷、絶対、儀式、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Shinto prayer-ritual paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。明治の元勲の、本気で、絶対、側近、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Meiji-leader close-aide paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'明治期の、本気で、絶対、優等生、絶対、教育、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Meiji-era honor-student edu paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。戦後の、本気で、絶対、邦画、絶対、復興、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Postwar JP-cinema-revive paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'プロ野球の、本気で、絶対、長嶋、絶対、茂雄、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Pro-baseball Nagashima Shigeo paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。歴史上の、本気で、絶対、乱入、絶対、事件、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Hist intrusion-incident paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07532',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、古墳、絶対、出土品の盗難、絶対、警察、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case — burial-mound excavated-item theft — police-inv advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'組織犯罪、本気で、絶対、警察、絶対、打破、絶対、目指しているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Org-crime — police breaking aim, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。神社の、本気で、絶対、祈祷、絶対、警備、絶対、警察、絶対、対応、絶対、いたしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Shrine-prayer sec — police-handle, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'要人の、本気で、絶対、側近、絶対、警備、絶対、警察、絶対、ご対応、絶対、ですか、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"VIP-close-aide sec — police-handle?, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。学校の、本気で、絶対、優等生、絶対、への、絶対、防犯教室、絶対、警察、絶対、開催しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. School honor-student-crime-prev class — police-host, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'有名な、本気で、絶対、邦画、絶対、撮影現場、絶対、警備、絶対、警察、絶対、対応、絶対、されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Famous JP-cinema-shoot scene sec — police-handled, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。野球の、本気for、絶対、長嶋、絶対、関連イベント、絶対、警察、絶対、警備、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Baseball Nagashima-related event — police-sec done, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'施設への、本気で、絶対、乱入、絶対、事件、絶対、警察、絶対、対応、絶対、いただいているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Facility-intrusion case — police-resp given, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07533',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、奈良時代の、本気で、絶対、古墳、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sakura — Nara-era burial-mound paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。封建制度の、本気で、絶対、打破、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Thanks. Feudal-system breaking paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'神道の、本気で、絶対、祈祷、絶対、儀式、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Shinto prayer-ritual paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。明治の元勲の、本気で、絶対、側近、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Meiji-leader close-aide paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'明治期の、本気で、絶対、優等生、絶対、教育、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Meiji-era honor-student edu paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。戦後の、本気で、絶対、邦画、絶対、復興、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Postwar JP-cinema-revive paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'プロ野球の、本気で、絶対、長嶋、絶対、茂雄、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Pro-baseball Nagashima Shigeo paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史上の、本気で、絶対、乱入、絶対、事件、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Hist intrusion-incident paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07534',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、本気で、絶対、古墳、絶対、出土品の、絶対、医学的分析、絶対、医療界、絶対、関心、絶対、寄せております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — burial-mound items med-analysis — med-world interest, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'感染症の、本気で、絶対、打破、絶対、医療チーム、絶対、目指しているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Infection breaking — med-team aim, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんへの、本気で、絶対、祈祷、絶対、寄り添い、絶対、医療チーム、絶対、配慮しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Patient-prayer close-stand — med-team care, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'要人の、本気で、絶対、側近、絶対、医師、絶対、貴院、絶対、ご対応されているんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"VIP close-aide doctor — your hosp-handle, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。学生の、本気で、絶対、優等生、絶対、進路、絶対、医療チーム、絶対、健康相談、絶対、お受けしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Student honor-student career — med-team health-consult, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療を扱った、本気で、絶対、邦画、絶対、貴院、絶対、撮影協力、絶対、されたんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Med-themed JP-cinema — your hosp shoot-coop, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。スポーツ選手の、本気で、絶対、長嶋、絶対、ご縁の方々、絶対、貴院に、絶対、いらっしゃいます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Sports Nagashima-connected people — your hosp visit, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'救急への、本気で、絶対、乱入、絶対、事件、絶対、貴院、絶対、ご経験ですか、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"ER-intrusion case — your hosp-exp?, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07535',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corporate response',lines:[
    {speaker:'hiroshi_boss',jp:'地域の、本気で、絶対、古墳、絶対、保護、絶対、当社、絶対、協力しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Local burial-mound protect — our co coop, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。市場の、本気で、絶対、停滞、絶対、打破、絶対、新製品、絶対、投入しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Market-stall breaking — new prod launch, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'創業祈祷、本気で、絶対、地域の神社で、絶対、毎年、絶対、行え、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Founding-prayer local-shrine every-yr do, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。会長の、本気で、絶対、側近、絶対、社員、絶対、人材育成、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Chairman close-aide staff — talent-train advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の、本気で、絶対、優等生、絶対、企業、絶対、目指せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Industry honor-student-co aim, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、邦画、絶対、制作、絶対、協賛、絶対、しております、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Our co JP-cinema-prod sponsor, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'プロ野球の、本気で、絶対、長嶋、絶対、関連、絶対、当社、絶対、広告、絶対、検討しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Pro-baseball Nagashima-related — our co ad consider, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社施設への、本気で、絶対、乱入、絶対、対策、絶対、警備、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our facility-intrusion counter — sec-strengthen, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07536',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お店の、本気で、絶対、歯車、絶対、メイちゃん、絶対、感じるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — store gear-feeling Mei-feel, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、お料理に、絶対、一心、絶対、に、絶対、取り組んでるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Aoi — cook devoted-tackle, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お店の、絶対、荷物、絶対、下ろす、絶対、のは、絶対、メイちゃん、絶対、お手伝いするわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — store-luggage put-down Mei-help, absolute serious really.",style:'Caring.'},
    {speaker:'aoi_barista',jp:'葵のお店の二階から、本気で、絶対、街、絶対、見下ろす、絶対、景色、絶対、メイちゃん、絶対、お洒落でしょ?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store 2F — town look-down view Mei-stylish?, absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、本気for、絶対、お客様と、絶対、お料理、絶対、談義、絶対、楽しんでるね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — cust cook-talk enjoy, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お店の周りの、絶対、植生、絶対、お祖父さまから、絶対、教わったよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — store-around plant-life Grandpa-learned, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵のメニュー、本気で、絶対、新作、絶対、フラグ、絶対、立ってるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Aoi-menu new-work flag-rising, Mei absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、新酒、絶対、お客様と、絶対、のむ、絶対、機会、絶対、楽しみよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — new-sake cust-drink chance fun, Mei absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07537',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さん、絶対、家業の、絶対、歯車、絶対、として、絶対、頑張ったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Gran — youth Dad family-biz gear tried, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、お仕事に、絶対、一心、絶対、に、絶対、打ち込んでいたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — Grandpa work-devoted, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、お米、絶対、袋を、絶対、下ろす、絶対、力仕事、絶対、こなしたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad rice-bag put-down heavy-work did, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、山から、絶対、町、絶対、見下ろす、絶対、のが、絶対、好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa mountain town look-down liked, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんと、絶対、お料理、絶対、談義、絶対、お父さん、絶対、楽しんだぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — gran-with cook-talk Dad-enjoyed, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お庭の、絶対、植生、絶対、お祖父ちゃん、絶対、こだわっていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — garden-plant-life Grandpa-particular, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、町の祭り、絶対、フラグ、絶対、なんて、絶対、お父さん、絶対、知らんかったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — town-fest flag Dad didn't-know, remember gran?, absolute serious really.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お酒、絶対、のむ、絶対、と、絶対、機嫌、絶対、よかったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa sake drink-when mood good, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07538',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、家族の、絶対、歯車、絶対、として、絶対、頑張ってるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis family-gear tried, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、勉強に、絶対、一心、絶対、に、絶対、取り組むよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me study-devoted, absolute serious really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お買い物の、絶対、荷物、絶対、下ろす、絶対、のを、絶対、翔くん、絶対、手伝ってくれた、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — shopping-luggage put-down Sho-helped, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、観覧車から、絶対、町、絶対、見下ろす、絶対、こと、絶対、楽しみだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — ferris-wheel town look-down fun, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、翔くんと、絶対、絵本、絶対、談義、絶対、したいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — Sho-with picture-book-talk want, absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お祖父ちゃんちの、絶対、植生、絶対、ぼく、絶対、観察したよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Grandpa-home plant-life me-observed, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お友達と、絶対、デートの、絶対、フラグ、絶対、立ったみたいなのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — friend-with date-flag rose-seems, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お父さん、絶対、お酒、絶対、のむ、絶対、と、絶対、楽しそうだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Dad sake drink-when fun-looks, absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07539',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、部活の、絶対、歯車、絶対、として、絶対、頑張ってるよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — you club-gear tried, absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'うん。試験に、本気で、絶対、一心、絶対、に、絶対、取り組むぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Test devoted-tackle, Sakura absolute serious really.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、合宿で、絶対、お米袋、絶対、下ろす、絶対、お手伝い、絶対、してたよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — camp rice-bag put-down helped, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'観覧車から、本気で、絶対、街、絶対、見下ろす、絶対、と、絶対、いいよな、桜、本気for、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ferris-wheel town look-down nice, Sakura absolute serious really.",style:'Soft.'},
    {speaker:'sakura_teen',jp:'お前と、本気で、絶対、漫画、絶対、談義、絶対、したいよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"You-with manga-talk want, Riku absolute serious really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'生物の授業で、本気で、絶対、植生、絶対、習ったよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Biology — plant-life learned, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'文化祭、本気で、絶対、新作の、絶対、フラグ、絶対、立ったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Fest — new-work flag-rose, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お祖父ちゃん、本気で、絶対、お正月に、絶対、日本酒、絶対、のむ、絶対、のが、絶対、楽しみなんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Grandpa — New-Year sake drink fun, Sakura absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07540',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、家族の、絶対、歯車、絶対、として、絶対、お手伝いしたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me family-gear help-want, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、勉強に、絶対、一心、絶対、に、絶対、取り組んでくれてありがとうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — study devoted thank-you, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お買い物の、絶対、荷物、絶対、ぼく、絶対、下ろす、絶対、お手伝いするよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — shopping-luggage me put-down help, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お父さんと、本気で、絶対、屋上から、絶対、町、絶対、見下ろす、絶対、と、絶対、いい景色よ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad-with rooftop town look-down — nice view, Sho absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'ママと、本気で、絶対、絵本、絶対、談義、絶対、しよう、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom-with picture-book-talk do, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お庭の、本気で、絶対、植生、絶対、ママ、絶対、丁寧に、絶対、管理してるのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Garden plant-life — Mom careful-manage, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ぼくの新作の、本気で、絶対、フラグ、絶対、立ったよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"My new-work flag-rose, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、お祝いに、絶対、お酒、絶対、のむ、絶対、らしいわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Dad — celebration sake-drink seems, Sho absolute serious really.",style:'Warm close.'},
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

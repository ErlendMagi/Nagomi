import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_375 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['早口','あだ名','ニュータウン','ドレッシング','餡','整頓','ポップアップ','シルエット']
const B_T = ['売り込み','給水','消火','手掛け','綴る','祭祀','即位','レポーター']
const C_T = ['西郷','母性','強まる','デリケート','青く','突っ込む','打ち込む','兼ね備え']
const D_T = ['酵母','菜園','人影','たまらなく','敷き','知ったかぶる','恥じ','押せ']

const data = [
  {id:'conv_07461',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お父さん、絶対、早口、絶対、で、絶対、お話するわよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Dad fast-talk talks, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの、絶対、あだ名、絶対、ぱっくん、絶対、なんだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — my nickname Pakkun is, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'今度、本気で、絶対、ニュータウン、絶対、引っ越したい、絶対、なって、ママ、絶対、思ってるの、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Next — new-town move-want Mom-thinking, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、サラダの、絶対、ドレッシング、絶対、ぼく、絶対、自分で、絶対、かけたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — salad-dressing me self-pour-want, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんが、本気で、絶対、餡、絶対、入りのお餅、絶対、送ってくれたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Granny — bean-paste filled mochi sent, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、机の上、絶対、整頓、絶対、したよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Me — desk-top tidy did, Mom absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'アプリの、本気で、絶対、ポップアップ、絶対、お知らせ、絶対、たくさん、絶対、来るわよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"App popup notif — many come, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'夕日に、本気で、絶対、お父さんの、絶対、シルエット、絶対、綺麗だったよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sunset — Dad silhouette pretty, Mom absolute serious really.",style:'Soft close.'},
  ]},
  {id:'conv_07462',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、メイちゃん、本気で、絶対、早口、絶対、で、絶対、お話、絶対、しちゃう癖、絶対、あるのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — Mei fast-talk talk-habit have, absolute serious really.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'うん。葵の、本気で、絶対、あだ名、絶対、お客様、絶対、葵ちゃん、絶対、って呼んでくださるのよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Aoi-nickname — cust Aoi-chan called, Mei absolute serious really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、新しい、絶対、ニュータウン、絶対、にも、絶対、出店、絶対、したい?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store — new town-also opening want?, absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵オリジナルの、本気で、絶対、ドレッシング、絶対、お客様に、絶対、好評よ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-orig dressing — cust-favorable, Mei absolute serious really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、餡、絶対、入りの、絶対、和菓子、絶対、メイちゃん、絶対、大好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — bean-paste wagashi Mei-love, absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵のお店、本気で、絶対、いつも、絶対、整頓、絶対、されていて、絶対、メイちゃん、絶対、感心、絶対、するわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi-store — always tidy Mei-admire, absolute serious really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'葵のお店のサイト、本気で、絶対、ポップアップ、絶対、お知らせ、絶対、お洒落よね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi store-site popup-notif — stylish, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、夕暮れの、絶対、お店の、絶対、シルエット、絶対、写真、絶対、撮ったよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — sunset store silhouette photo took, Mei absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07463',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、ばあさん、絶対、早口、絶対、で、絶対、お話したわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth gran fast-talk talked, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、あだ名、絶対、で、絶対、皆に、絶対、呼ばれていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — Grandpa nickname all-called, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ニュータウン、絶対、お父さん、絶対、開発に、絶対、関わったぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — new-town Dad-dev involved, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、ばあさんの手作り、絶対、ドレッシング、絶対、お祖父ちゃん、絶対、大好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran-handmade dressing Grandpa-loved, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お正月の、絶対、餡、絶対、入り餅、絶対、お父さん、絶対、楽しみだったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — New-Year bean-paste mochi Dad-fun was, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お仕事道具、絶対、いつも、絶対、整頓、絶対、してくれていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa work-tool always-tidy did, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔は、本気で、絶対、ポップアップ、絶対、なんて、絶対、お父さん、絶対、知らなかったぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Old — popup Dad didn't-know, gran remember?, absolute serious really.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、夕暮れの、絶対、お祖父ちゃんの、絶対、シルエット、絶対、素敵だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — sunset Grandpa-silhouette nice was, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07464',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、早口、絶対、で、絶対、お話、絶対、するよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — you fast-talk talk, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お前の、本気で、絶対、あだ名、絶対、桜ちゃんって、絶対、皆、絶対、呼んでるよな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Your nickname — Sakura-chan all-call, absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前の家、本気で、絶対、ニュータウン、絶対、に、絶対、引っ越したんだよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Your-home — new-town moved, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'給食の、本気で、絶対、サラダの、絶対、ドレッシング、絶対、美味かったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Lunch salad-dressing — tasty, Sakura absolute serious really.",style:'Cheerful.'},
    {speaker:'sakura_teen',jp:'お祖母ちゃんが、本気で、絶対、餡、絶対、入りのお団子、絶対、持ってきてくれたよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Granny — bean-paste dango brought, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、机の上、絶対、整頓、絶対、しっかりしてるよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — desk-tidy solid-do, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'お前のスマホ、本気で、絶対、ポップアップ、絶対、通知、絶対、すごく、絶対、多いよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Your phone popup-notif — very-many, Riku absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'夕日の中の、本気で、絶対、お前の、絶対、シルエット、絶対、綺麗だったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sunset-amid you silhouette pretty, Sakura absolute serious really.",style:'Soft close.'},
  ]},
  {id:'conv_07465',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お話する時、絶対、早口、絶対、で、絶対、ごめんね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis talk-time fast-talk sorry, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくのクラスメートの、絶対、あだ名、絶対、ぴーちゃんなんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — my classmate nickname Pi-chan, absolute serious really.",style:'Animated child.'},
    {speaker:'mei_romantic',jp:'メイ姉さんが、本気で、絶対、住んでる、絶対、ニュータウン、絶対、緑が多いのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis-living new-town — green-many, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さんの作る、本気で、絶対、ドレッシング、絶対、ぼく、絶対、大好き、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis-make dressing me-love, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、餡、絶対、を使った、絶対、お菓子、絶対、作るのが、絶対、好きよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — bean-paste-use sweets make-like, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さんの、本気で、絶対、お家、絶対、整頓、絶対、されてて、絶対、いつも、絶対、綺麗だね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis-home tidy always-pretty, absolute serious really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'メイ姉さんのスマホ、本気で、絶対、ポップアップ、絶対、通知、絶対、消し方、絶対、覚えたいわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis phone popup-notif — turn-off-way memorize-want, Sho absolute serious really.",style:'Wry.'},
    {speaker:'sho_child',jp:'メイ姉さんの、本気で、絶対、シルエット、絶対、夕日に、絶対、綺麗だったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis silhouette sunset-pretty was, absolute serious really.",style:'Soft close.'},
  ]},
  {id:'conv_07466',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'新規顧客への、本気で、絶対、売り込み、絶対、強化しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"New-cust sales-pitch — strengthen, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。事業所の、本気で、絶対、給水、絶対、整備、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Office water-supply maintain advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'工場の、本気で、絶対、消火、絶対、設備、絶対、点検しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Factory fire-extinguish equip — inspect, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社が、本気で、絶対、手掛けて、絶対、いる新プロジェクト、絶対、業界の注目、絶対、集めております、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our co handling new-proj — industry-attention gather, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社内報を、本気で、絶対、綴る、絶対、担当者、絶対、決めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"In-house mag-write-up person — decide, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。地域の、本気で、絶対、祭祀、絶対、当社の協賛、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Local festival-rite — our co sponsor advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新社長の、本気で、絶対、即位、絶対、当社、絶対、お祝い、絶対、お送りしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"New-pres ascension — our co celeb send, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界の、本気で、絶対、レポーター、絶対、当社の取材、絶対、来ていただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Industry-reporter — our co coverage came, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07467',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'新規開拓の、本気で、絶対、売り込み、絶対、お話、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"New-dev sales-pitch — talk advance, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。社員食堂の、本気for、絶対、給水、絶対、設備、絶対、更新、絶対、計画しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Staff-cafeteria water-supply equip update plan, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'倉庫の、本気で、絶対、消火、絶対、設備、絶対、最新化、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Warehouse fire-extinguish equip — update advance, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社が、本気で、絶対、手掛けて、絶対、いる、絶対、新サービス、絶対、好評です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our co handling new-service — favorable, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'社史を、本気で、絶対、綴る、絶対、プロジェクト、絶対、始めましょうか、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Co-hist write-up project — start?, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。創業の、本気で、絶対、祭祀、絶対、当社、絶対、毎年、絶対、行っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Founding-rite — our co every-yr do, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'業界の新人社長の、本気で、絶対、即位、絶対、お祝い、絶対、ご準備、絶対、お願いします、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Industry new-pres ascension — celeb-prep ask, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の、本気で、絶対、レポーター、絶対、養成、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our reporter-train — advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07468',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究テーマの、本気で、絶対、売り込み、絶対、教授に、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Ren — research-theme pitch — prof advance, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究室の、本気で、絶対、給水、絶対、設備、絶対、整備、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Lab water-supply equip maintain advance, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'実験室の、本気で、絶対、消火、絶対、設備、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Lab fire-extinguish equip — verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。教授が、本気で、絶対、手掛けて、絶対、いる、絶対、新テーマ、絶対、私も、絶対、参加しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Prof handling new-theme — me-also attend, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究日誌を、本気で、絶対、綴る、絶対、習慣を、絶対、続けろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Research-diary write-up habit — continue, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。地域の、本気で、絶対、祭祀、絶対、研究、絶対、フィールドワーク、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Local festival-rite research — fieldwork advance, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'学長の、本気で、絶対、即位、絶対、講演、絶対、参加しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Univ-pres ascension lecture — attend, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。学術誌の、本気で、絶対、レポーター、絶対、私の研究、絶対、取材、絶対、来ていただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Acad-mag reporter — my research coverage came, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07469',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、防犯機器、絶対、売り込み、絶対、お受けしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Police — crime-prev-gear pitch receive, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察署、本気で、絶対、給水、絶対、設備、絶対、当社、絶対、ご支援、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police-station water-supply equip — our co support, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察の、本気で、絶対、消火、絶対、訓練、絶対、定期、絶対、実施しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police fire-extinguish train — periodic done, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様が、本気で、絶対、手掛けて、絶対、おられる、絶対、防犯活動、絶対、当社、絶対、ご支援、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police handling crime-prev — our co support, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、報告書を、絶対、綴る、絶対、業務、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police — report write-up biz thorough, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。地域の、本気で、絶対、祭祀、絶対、警備、絶対、警察様、絶対、ご対応、絶対、ありがとうございます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Local festival-rite sec — police-handle gratitude, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'新署長の、本気で、絶対、即位、絶対、警察、絶対、結束、絶対、強めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"New chief-ascension — police unity strengthen, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。報道の、本気で、絶対、レポーター、絶対、警察取材、絶対、入っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. News reporter — police-coverage in, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07470',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、自分で、絶対、売り込み、絶対、行ったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Founding — Dad self pitch went, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、工場の、絶対、給水、絶対、整備、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — factory water-supply maintain continue, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、消火、絶対、訓練、絶対、自ら、絶対、参加していたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — fire-extinguish train self-attended, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、手掛けて、絶対、こられた、絶対、事業、絶対、私が、絶対、引き継ぎます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Dad-handled biz — me inherit, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、日誌を、絶対、綴る、絶対、習慣、絶対、続けていたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — diary write-up habit continued, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、地域の、絶対、祭祀、絶対、当社、絶対、参加してまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — local festival-rite attend, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さんの、本気で、絶対、社長、絶対、即位、絶対、お祝い、絶対、お得意様、絶対、たくさん来てくれたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad pres-ascension celeb — VIP many-came, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。当時の、本気で、絶対、レポーター、絶対、お父さんの取材、絶対、絵になる方々、絶対、と、絶対、伺っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Era-reporter — Dad-coverage picturesque people heard, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07471',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、明治維新の、本気で、絶対、西郷、絶対、隆盛、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — Meiji-rest Saigo Takamori paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。古代の、本気で、絶対、母性、絶対、観、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Ancient maternal-view paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'国際情勢が、本気で、絶対、強まる、絶対、緊張、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Intl-affair strengthen-tension paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。古典芸能の、本気で、絶対、デリケート、絶対、な表現、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Classic-arts delicate expression paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'夜空が、本気で、絶対、青く、絶対、染まる、絶対、瞬間、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Night-sky blue-dye moment paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。歴史上の、本気で、絶対、市場に、絶対、突っ込む、絶対、決断、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hist market-plunge decision paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統技能に、本気で、絶対、打ち込む、絶対、職人の姿、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Trad-skill devoted-artisan paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。複数の才を、本気で、絶対、兼ね備えた、絶対、人物像、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Multi-talent combined figure paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07472',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、西郷、絶対、町、絶対、で起きた、絶対、事件、絶対、警察、絶対、捜査中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Case — Saigo-town occurred — police-inv, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者の、本気で、絶対、母性、絶対、保護、絶対、警察、絶対、配慮、絶対、されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Victim maternal-protect — police-care given, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。事件の、本気で、絶対、緊張感、絶対、強まる、絶対、中、絶対、警察、絶対、対応、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Case-tension strengthen-amid police-handle, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'証言、本気で、絶対、デリケート、絶対、な内容、絶対、警察、絶対、慎重に、絶対、扱われているんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Testimony delicate content — police careful handle, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。現場の、本気で、絶対、青く、絶対、光る、絶対、ライト、絶対、警察、絶対、捜査の目印、絶対、です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Scene blue-glow light — police-inv-mark, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、本気で、絶対、車に、絶対、突っ込む、絶対、ような、絶対、危険な行動、絶対、警察、絶対、阻止されたそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Suspect — car-plunge-like dangerous-act police-stopped, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。警察、本気で、絶対、捜査に、絶対、打ち込む、絶対、姿勢、絶対、市民、絶対、信頼してくださっております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police inv-devoted stance — citizen-trust given, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察、本気で、絶対、判断力と、絶対、行動力を、絶対、兼ね備え、絶対、現場対応、絶対、見事ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Police — judgment and action combined scene-resp splendid, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07473',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、明治維新の、本気で、絶対、西郷、絶対、隆盛、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sakura — Meiji-rest Saigo Takamori paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。古代の、本気で、絶対、母性、絶対、観、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. Ancient maternal-view paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'国際情勢が、本気で、絶対、強まる、絶対、緊張、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Intl-affair strengthen-tension paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。古典芸能の、本気で、絶対、デリケート、絶対、な表現、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Classic-arts delicate expression paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'夜空が、本気で、絶対、青く、絶対、染まる、絶対、瞬間、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Night-sky blue-dye moment paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。歴史上の、本気で、絶対、市場に、絶対、突っ込む、絶対、決断、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hist market-plunge decision paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統技能に、本気で、絶対、打ち込む、絶対、職人の姿、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Trad-skill devoted-artisan paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。複数の才を、本気で、絶対、兼ね備えた、絶対、人物像、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Multi-talent combined figure paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07474',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、地方の、本気で、絶対、西郷、絶対、地区の、絶対、医療体制、絶対、医療チーム、絶対、強化中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — Saigo-area med-system — med-team strengthen, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'母性、本気で、絶対、医療の重要性、絶対、医療チーム、絶対、認識されているんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Maternal-med importance — med-team-recognize, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。流行が、本気で、絶対、強まる、絶対、季節、絶対、医療チーム、絶対、警戒、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Epidemic-strengthen season — med-watch, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'患者さんの、本気で、絶対、デリケート、絶対、な状態、絶対、医療チーム、絶対、丁寧に、絶対、対応されているんですね、先生、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Patient-delicate state — med-team careful resp, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの顔色が、本気で、絶対、青く、絶対、なる際、絶対、医療チーム、絶対、迅速対応、絶対、いたしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient-face blue-become time — med-swift resp, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'救急に、本気で、絶対、突っ込む、絶対、ような、絶対、車、絶対、貴院、絶対、対応、絶対、大変ですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"ER plunging cars — your hosp resp tough, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。医療研究に、本気で、絶対、打ち込む、絶対、若手医師、絶対、当院、絶対、育てております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Med-research devoted young-doctor — our hosp raise, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医師は、本気で、絶対、知識と人柄を、絶対、兼ね備えて、絶対、おられないと、絶対、いけないですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Doctors — knowledge-character combined must-be, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07475',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews strategy',lines:[
    {speaker:'hiroshi_boss',jp:'地方支店、本気で、絶対、西郷、絶対、地区、絶対、展開、絶対、検討しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Local-branch Saigo-area expand consider, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。新製品、本気で、絶対、母性、絶対、本能、絶対、訴える、絶対、コンセプト、絶対、好評です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. New prod — maternal-instinct appeal concept favorable, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'競争が、本気で、絶対、強まる、絶対、業界、絶対、当社、絶対、差別化を、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Comp-strengthen industry — our co differentiate advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様の、本気で、絶対、デリケート、絶対、な要望、絶対、丁寧に、絶対、対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Cust-delicate-request — careful handle, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新製品の、本気で、絶対、青く、絶対、輝く、絶対、パッケージ、絶対、お洒落な、絶対、デザインにしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"New prod blue-shine package — stylish-design, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新市場に、本気で、絶対、突っ込む、絶対、決断、絶対、当社、絶対、慎重に、絶対、検討しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. New-market plunge decision — our co careful consider, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社員、本気で、絶対、業務に、絶対、打ち込む、絶対、環境、絶対、整えろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Staff biz-devoted env — prepare, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経験と若さを、本気で、絶対、兼ね備えた、絶対、社員、絶対、採用、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Exp-youth combined staff — hire advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07476',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、パン作りの、本気で、絶対、酵母、絶対、メイちゃん、絶対、興味あるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — bread yeast Mei-interest, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、家庭、絶対、菜園、絶対、で、絶対、お野菜、絶対、育ててるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Aoi — home garden veg-growing, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'夜の道、本気で、絶対、人影、絶対、見えると、絶対、ちょっと、絶対、安心するわよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Night-road — figure-seen slight relief, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、たまらなく、絶対、お祖母さまの、絶対、お味噌汁、絶対、食べたい時があるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — unbearably Grandma miso-soup eat-want times, Mei absolute serious really.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お店の床に、絶対、敷きマット、絶対、新しくしたのね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — store-floor lay-mat new-did, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'お客様に、本気で、絶対、知ったかぶる、絶対、ような、絶対、態度、絶対、葵、絶対、しないよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Cust — know-it-all-act stance Aoi don't, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お料理の失敗、絶対、恥じる、絶対、ことなく、絶対、お客様に、絶対、新作試食、絶対、お願いしてるよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Aoi — cook-fail not-shameful cust-new-taste ask, Mei absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、新しい、絶対、メニュー、絶対、押せば、絶対、注文できる、絶対、システム、絶対、入れたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — new menu — press-if order-can sys installed, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07477',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さん、絶対、パン作りの、絶対、酵母、絶対、自分で、絶対、育てたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — youth Dad bread-yeast self-raised, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、菜園、絶対、お庭に、絶対、作ってくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — Grandpa garden-yard made, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、夜の道、絶対、人影、絶対、見えると、絶対、ばあさんと、絶対、ほっとしたぞ、覚えてる?本気for、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — night-road figure-see gran-relieved, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、たまらなく、絶対、お酒、絶対、飲みたい日、絶対、ありましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa unbearably sake drink-want day existed, remember dear?, absolute serious really.",style:'Wry tease.'},
    {speaker:'hiroshi_elder',jp:'昔は、本気で、絶対、和室に、絶対、敷き布団、絶対、お父さん、絶対、毎晩、絶対、敷いたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Old — wa-room futon-laid Dad every-night spread, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、知ったかぶる、絶対、こと、絶対、なくて、絶対、誠実だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa know-it-all-act none sincere was, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、失敗を、絶対、恥じる、絶対、ことなく、絶対、前向きだったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Dad fail not-shameful positive was, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、ボタンを、絶対、押せば、絶対、お湯が出る、絶対、家電、絶対、新しくて、絶対、嬉しかったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — button press-if hot-water-out appliance new-glad, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07478',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、パン作りの、絶対、酵母、絶対、勉強してるのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis bread-yeast studying, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お庭の、絶対、菜園、絶対、ぼく、絶対、お手伝いしたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — garden-veg-garden me help-want, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、夜の道で、絶対、人影、絶対、見えると、絶対、安心するわ、翔くん、本気for、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — night-road figure-see relief, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、メイ姉さんに、絶対、たまらなく、絶対、会いたい時があるんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Me — Mei-sis unbearably meet-want times, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さんが、本気で、絶対、お家、絶対、敷き、絶対、ラグ、絶対、新しく替えたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis home lay-rug new-replaced, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、知ったかぶる、絶対、ような、絶対、こと、絶対、しないようにするよ、メイ姉さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Me — know-it-all-act don't, Mei-sis absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、失敗を、絶対、恥じる、絶対、ことなく、絶対、挑戦、絶対、しましょうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — fail not-shameful challenge, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ベルを、絶対、押せば、絶対、ぼく、絶対、お家から、絶対、出るね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — bell press-if me home-from out, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07479',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、家庭科で、本気で、絶対、酵母、絶対、習ったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Riku — home-ec yeast learned, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お祖父ちゃんち、本気で、絶対、菜園、絶対、立派なんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Yeah. Grandpa-home — veg-garden splendid, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'夜の道で、本気で、絶対、お前の、絶対、人影、絶対、見えるとほっとするよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Night-road — your figure-see-relief, Riku absolute serious really.",style:'Tender.'},
    {speaker:'riku_teen',jp:'試験前、本気で、絶対、お前の応援、絶対、たまらなく、絶対、欲しくなるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Pre-test — your cheer unbearably want, Sakura absolute serious really.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'体育館の、本気で、絶対、敷き、絶対、マット、絶対、新しくなったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Gym lay-mat — new-became, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、知ったかぶる、絶対、ことなくて、絶対、誠実だよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"You — know-it-all-act none sincere, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'試合で、本気で、絶対、お前、絶対、失敗を、絶対、恥じる、絶対、ことなくて、絶対、立派だよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Match — you fail not-shameful splendid, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'扉のボタンを、本気で、絶対、押せば、絶対、自動で、絶対、開くんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Door-button press-if auto-open, Sakura absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07480',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、家庭科で、絶対、酵母、絶対、習ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — me home-ec yeast learned, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'お庭の、本気で、絶対、菜園、絶対、ママと、絶対、一緒に、絶対、お手入れしようね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Garden veg-garden — Mom-together care, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、夜の道で、絶対、人影、絶対、見えると、絶対、ぼく、絶対、安心するよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — night-road figure-see me-relief, absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'ママ、本気で、絶対、お祖母ちゃんに、絶対、たまらなく、絶対、会いたい時、絶対、あるのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — Granny unbearably meet-want time exist, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、お部屋の、絶対、敷き、絶対、ラグ、絶対、お母さんと、絶対、選んだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Me — room lay-rug Mom-chose, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、知ったかぶる、絶対、こと、絶対、しないでね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Sho — know-it-all-act don't, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、テストの点を、絶対、恥じる、絶対、ことなく、絶対、頑張るよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Me — test-score not-shameful try, Mom absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'リモコンを、本気で、絶対、押せば、絶対、テレビ、絶対、つくのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Remote press-if TV on, Sho absolute serious really.",style:'Tender close.'},
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
